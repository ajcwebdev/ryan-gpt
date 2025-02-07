---
showLink: "https://www.youtube.com/watch?v=gfKrdN1RzoI"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "What Comes After GraphQL?"
description: ""
publishDate: "2024-02-10"
coverImage: "https://i.ytimg.com/vi/gfKrdN1RzoI/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 10-15 minutes long.
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

[00:00:00]  Thank you. Thank you. Thank you. Thank you. Thank you. All right. All right. Hello, everyone, and welcome to my stream
[00:02:12]  today. Just getting set up. Sorry, I'm running a little bit late. I was pushing commits as of like five minutes ago. I wanted to show something
[00:02:27]  off pretty cool in the stream. I'll be coming up with a bit. But yeah, I'm pretty excited. There's some speculation into why I chose this topic today
[00:02:38] . But yeah, I see that all the birthday wishes coming in, starting with my dad, although I think you got to fix up your last name. But yeah,
[00:02:50]  thanks, Dad. Yeah, thank you for the birthday wishes. Today's my birthday. I think I think my birthday fell on a stream a couple years ago as well.
[00:03:02]  I don't know. I didn't AMA. Maybe it's just birthday week. I can't remember now. But it is my birthday and I'm streaming.
[00:03:09]  I don't know. I'm streaming. I'm streaming. Thank you, everyone. A lot of people saying happy birthday. I drinking ketchup. No, this is a
[00:03:18]  this is a smoothie my wife made. Um, it's like a beet and sweet. Sweet. Probably banana. Strawberry. Thank you. I just scroll down all these
[00:03:45]  for a while. Very appreciated. Hmm. Yeah, I've been hearing a lot about people having birthdays either today or around around the same time. My old boss actually
[00:04:03]  had his birthday, I believe. Was it the same day or the eighth like the day before? The guy who created knockback. Hmm. Hey, Nikhil. Dave
[00:04:21] . Um, am I going to announce server components? Hmm. RSC is Ryan's server components. Um, no, not exactly. But I want, we will
[00:04:30]  talk about server components today. I just want to put it out there for people thinking otherwise. The topic today is not necessarily. I'm going to talk about GraphQL.
[00:04:37]  Don't get me wrong, but it's, it's not necessarily just about GraphQL. Um, um, so yeah, a lot of happy birthday wishes coming out
[00:04:54]  here. All right. I think I'm almost done scrolling through all of these. Ryan Florence, serialized components. Yeah. Very random question. Do you feel web
[00:05:14]  technology frames should look into offline first more than they are? It's somewhat hype and mobile world, but it has no buzz in the web world. Well, the funny
[00:05:22]  thing is it was hot for like a couple of years there. And then something flipped around 2018. Um, can't say what, but like almost everything was in conferences
[00:05:34]  was talking towards it. It was all about PWAs. We were creating really smart, smart, like data layers in the client. Like this, this actually ties a
[00:05:45]  bit in today today, because it was like around the pinnacle of GraphQL time period that everyone was talking about it. And then everything just switched. All right.
[00:05:55]  Thank you for birthday wishes. I just can scroll down these forever. Right. Right. Solid Carniato components. There you go. Yeah. Yeah. Yeah.
[00:06:07]  It's just interesting because the framework side almost completely just failed. I mean, it was a tricky problem in that the frameworks themselves didn't have much to add to it.
[00:06:21]  More of the data fetching layers. Um, but I, I guess if you just look at the companies people were working for at the time, it just, it just
[00:06:27]  never really went anywhere. Um, from the major frameworks at least. Um, there you go. Um, there you go. Happy birthday. Um, there you go
[00:06:37] . Happy birthday. Um, it is the ninth where I am right here. Um, it is the ninth where I am right here. Anyway, the field of P
[00:06:52] 20, nice try. Oh man, like double that. Anyway, um, guys, um, we should get started here. I should tell people that I'm online
[00:07:17] . Give me two seconds. Let's retweet here. Give, I should have done earlier to let the, uh, the Twitch people get past that pre-roll,
[00:07:27]  right? Um, ooh, that's an interesting view, but I don't like it. All right. Cool. Oh yeah, I didn't put the Twitch link
[00:07:46]  in this time. Oh well. As I usually do. This will actually drastically affect people on Twitch probably. How many people are on Twitch right now? Let me take a
[00:07:57]  look. I just opened Twitch and it says zero, but I can see you guys in the chat. So I know that it's not zero. Way to lag Twitch
[00:08:04] . Yeah. At least one. Yeah. Issues with Twitch right now. Yeah. Okay. Yeah. Yeah. There's, there's no one here. Well
[00:08:17] , yeah, that's where I invented. Uh, there's a hype train going on though. Level two hype train with no one here. Right. Um, hopefully
[00:08:41]  you guys in Twitch all got subs last time, two weeks ago, uh, Patrick JS, I believe came on and gave everybody subs on the channel, like a hundred subs
[00:08:52] . So, um, hopefully you guys are all still living off that and can avoid those Twitch ads. So I don't have to delay starting as much. Yeah. I
[00:09:01]  have no clue why this is zero people on Twitch. It's fine. There's a hundred people watching overall. So I, I don't know if the Twitch numbers
[00:09:11]  aren't, aren't rolling in properly. We are bots. Yeah. Bots for my birthday. Thank you all. All right. All right. All right. All
[00:09:34]  right. All right. All right. Just finishing up my smoothie here. Cause I also have more conventional lemon ginger drink. Got to stay hydrated here. Okay. Okay.
[00:09:55]  Let me pop back out here. Um, yeah. So I, I, I do want to, um, start this off by just saying, I am not suggesting
[00:10:08]  that people all make a mass exodus from GraphQL. There was like a conversation like that a couple of years ago. Um, maybe like late 2022, I want to
[00:10:19]  say. And, you know, everyone was like, you know, TRPC and this is the new, this and all that. And, um, yeah, I mean
[00:10:26] , I don't care. Uh, these trends I I'm looking at purely from a techno technology side. Um, and what it means to be using it. I
[00:10:36] , I, I know that GraphQL has a long future, especially in enterprise, being able to make that level of contract between all your data services and incredibly powerful. Um
[00:10:52] , tons of companies are still investing in it. Um, especially larger companies and it's like, it's, it's, it's, it's not even like
[00:11:00]  exist because they have existing stuff like new companies, large companies are continuing to adopt GraphQL because of what it can do. So GraphQL in itself is not going anywhere.
[00:11:15]  I just want the, the whole, this whole conversation and the title of the stream, uh, count comes from actually, uh, I don't know how true this
[00:11:26]  is. I heard it from members of the React core team, but basically the, the journey to how we got to server components started with a conversation or a document, you
[00:11:36]  know, internal draft, so to speak, that was like, what comes after GraphQL? So this whole stream title is actually playing off, um, this document that
[00:11:44]  apparently was, uh, written by the React core team circa 2016. Um, I believe some people said that Sebastian, uh, is the original author of said document. I
[00:11:58]  don't know all the details, but they were looking at where things had gone to react at that time period and looking where they could take things forward. They're probably
[00:12:11]  pretty happy patting themselves on the back where in that point reacted gone mass adoption, um, as being, you know, getting used, uh, in Facebook, probably big
[00:12:21]  plans with a rewrite right around the corner. And they wanted to think of like, what can they do here? Like, because while GraphQL was, is incredibly powerful.
[00:12:30]  And we're going to talk about that today. Um, you know, especially with the stuff, the pads, they set up at Facebook, like, uh, like
[00:12:36] , um, relay, um, it wasn't like something people could just pick up off the shelf. And my understanding of how the history goes is they, the React team
[00:12:48]  actually went through a few different iterations before they landed on server components. And the reason we're here today is I want to talk about, you know, mechanically,
[00:13:00]  what GraphQL actually enables and actually see if the successors actually are true successors or, you know, even alternatives to cover the basis. And at the same time,
[00:13:11]  I've been working on something really cool with solid start. And I want to show you guys what I've been doing because I don't know. I think, I think
[00:13:18]  we have options here. I think there's more to the world than just server components. So let's, let's, uh, you know, with that in mind
[00:13:26] , we can get started here. Uh, yeah. More happy birthday wishes. That's awesome. Yes. All right. Yeah. The case of GraphQL is stronger
[00:13:51]  when you have multiple APIs you want to unify access to that make zero sense if you're a small web app with single API in my opinion. Yeah, sure. And
[00:13:57]  yeah. And there, there's a connection here. Like it was, it was a long path, but there's definitely, uh, you know, a connection here
[00:14:08] . I mean, it's an urban legend. I mean, I don't know. Um, I heard it originally from Danny Vermouth himself. Um, so I
[00:14:16]  don't know who else has other sources. Um, but yeah, sharing types between languages. Well, and this is what I get to. I, I, I,
[00:14:29]  one of my absolutely favorite, um, posts on the topic came from our friend, uh, Theo. I, I, he makes great graphs. Um, I try
[00:14:40]  to make graphs, but my graphs make sense to like way less people. And this is TRPC is not the death of GraphQL. It just means I reach for it
[00:14:50]  way less. Yeah. He's, he's suggesting like, it's funny. Cause when you look at this thing, you're like, okay, GraphQL is like
[00:15:00]  a good chunk of the graph rest is good chunk. And TRPC is this little square. The thing that this table might not be suggesting on its own because when you
[00:15:09]  read this table, nobody's offended. Everyone's like, yeah, this is clear. You, you, you have the GraphQL people going, yeah, this makes sense
[00:15:16] . You know, you have everyone disagreeing. This is a good thing. The part that Theo doesn't really highlight so much, although he suggests it himself here very subt
[00:15:25] ly is for what he cares about. And what a lot of people care about is literally just in this first quadrant. And you might be going like, well, why
[00:15:37] ? Well, I mean, some is, there's always going to be large companies. There's always going to be large scale. There's always going to be different companies
[00:15:44]  having to interrupt each other, different teams and all that. But if the technology continues to improve and be easier to build with, you can do less, more, sorry
[00:15:53] , you can do more with less developers. You don't need as many teams. You, you shrink it down naturally. So if you're working in the zone of startup
[00:16:01] , like think about the number of developers you needed, um, to accomplish a very interactive client heavy app at various phases over the last 15 years. And what, you
[00:16:15]  know, Theo, Theo suggesting is, you know, you know, you've got your SAS company. I mean, I'm putting words in his mouth, but I'm
[00:16:21] , this is my take on it. You have your SAS company, you're delivering some kind of, uh, digital product. You have a website to serve it and administ
[00:16:30] rate it. You know, maybe an admin dashboard, like you're not in different company zone. You're probably not even in these days, not in different team zone
[00:16:42] . You can just like serverless up your, your infrastructure, you know, and then it's like, why aren't you just on TypeScript? Like basically his sphere
[00:16:52]  and a large sphere of social people working with startups is just that first sphere. So this is a very, very important, uh, sphere, um, for a whole range
[00:17:05]  of people and developers just building products every day. There's obviously the larger companies and there's obviously other things, but this first quadrant is increasingly, um, important.
[00:17:17]  So just to put this in perspective, but I like that almost no one disagrees with this. I remember there's like, there was this, like the debate I went
[00:17:29]  to, that was like GraphQL versus TRPC. And, uh, unfortunately, um, Alex creator, or I guess not technically creator, but basically the TRPC
[00:17:38]  guy at this point, um, because I believe TRPC was originally created by the guy who created Zod. But anyways, let's face it. Alex has, uh
[00:17:47] , basically done the, or, and his other maintainers, the core of all the work over the last couple of years. Um, he, he, he turned his
[00:17:56]  back and he didn't come out. So Theo was sat in for him and the debate was like the most boring debate ever because every, they just sat there agreeing with
[00:18:03]  each other the whole time. They're just like, yeah, yeah. Like they, they could have just like brought out this, this table at the beginning and been like
[00:18:10] , okay, we're all good. End of debate. And, um, The truth is on a technical matter, a little bit more nuanced. And I want to
[00:18:22]  dig into this a little bit, especially on where GraphQL fits in this first quadrant, because I sat there and talked with Alex a bit about this. He's a huge
[00:18:31]  fan of GraphQL by the, by the way. And I think, I think we have to kind of understand what these things actually mechanically do to understand what we
[00:18:43] 're giving up when we make these trade-offs and why we do it. Um, okay. What do we got here from the chat? It's interesting that GraphQL
[00:18:54]  is mutation command, query, notification, middleware. I wonder if you need to learn CQRS to know how to think about it when honestly, pull advantage of
[00:19:01]  it at the edge at the same where optimistic updates come from, blah, blah, blah. That's something. Well, but the interesting thing is most of these, maybe
[00:19:08]  not, uh, you don't have subscriptions mentioned here, which is good because that's Websocket's a staple, but I was going to say, I guess maybe
[00:19:16]  notification. Most of the mechanisms and most importantly, the CQRS mentality persists in a lot of the solutions that would replace, um, GraphQL interestingly. Uh
[00:19:30] , I think, I think that was one of the biggest influences. I know what it influenced, uh, what, what I was doing with solid immensely. Um, it
[00:19:39] 's why I didn't go with pattern similar to remix, um, was because of GraphQL. I did not like the idea that my mutations should be restful.
[00:19:55]  I, I was like, no, they should be RPCs and GraphQL is kind of interesting on that. So maybe we should talk about GraphQL. Are you
[00:20:03]  all familiar with GraphQL at a base level? Um, but I think that's where we should start, right? Yeah. And I've, I've, I've
[00:20:15]  shown this before, what I called the slippery slope of, uh, front end data fetching. Um, this idea that we started at, you know, having very
[00:20:23]  simplistic means that weren't capable of doing much. And then over time, we got better and more sophisticated till we hit the pinnacle around GraphQL. And then we
[00:20:33]  just started sliding off down the other side again. Um, and there's a reason for that as well, which we'll get to today. Um, but in a
[00:20:42]  lot of ways, GraphQL represents, um, a pinnacle of, of data fetching patterns. So, um, yeah, where should we get started? Let
[00:21:01] 's, let's get started with GraphQL. I don't, I, I personally, my experience with GraphQL was super stoked about it early on, like 2015
[00:21:12] , 16 time period. I, I, I built my own ORM. Um, well, or as part of a project that did, but what I ended up doing
[00:21:19] , uh, let's, let's get a little background here. You got to understand like, let's see backbone ORM. Can I find it here to still exist
[00:21:27] ? I don't think this would ever show off what I want to show off. Um, on this page because it was just a silly ORM, but the key
[00:21:38]  part was that it used the same backbone models for client and server. So you essentially could generate queries from the client and have it use HTTP to serialize them. They're
[00:21:49]  almost like Mongo format over the wire, and then have the controllers basically feed that into models on the server. And the big thing was we spent a lot of time the
[00:22:00]  query language, which is Mongo based. And you know, if anyone's ever used MongoDB, they know that it has like dot notations to like go into sub documents
[00:22:08] . Well, we use dot notations to represent relationships. So I spent like largely some of my earliest AST work was taking like this dot, this dot, this,
[00:22:19]  like creating joins out of, um, MongoDB queries across database tables and creating optimal data fetching from basically JSON MongoDB syntax against SQL. Um, this version that
[00:22:33]  was released didn't have all the goodness and only let one depth, like single dot notation. And I bet you there's not a single example here showing how it worked,
[00:22:42]  but what was really cool is we could project or query against any sort of data. We could be like, um, get me the users who have cars that are blue.
[00:22:50]  Um, you know, essentially, uh, and like using all JSON syntax that automatically serialized and we focus all on the query side. Cause we wanted, we cared
[00:23:03]  a lot about off. We'd be like, you know, people in these groups who also, um, have the, it was about kids photos. So it's like
[00:23:12]  people like find me like people who are in these groups or, or who have kids in these groups, which, you know, would be able to, you know, meet
[00:23:20]  this sort of auth criteria, you know, that sort of thing. And it was a really crazy thing. And we're building this back in 2012 or 13 because there
[00:23:30]  was no great solution for it. And then, you know, like what's cool is you could do cross model things where the client could ask for exactly what it wanted,
[00:23:39]  but then, yeah, about a year later, Facebook open source, their secret sauce, um, that they had been developing, which in some ways was a lot better
[00:23:49]  than this, but some ways kind of worse. Um, but it doesn't really matter. We, we, we eventually ended up moving to GraphQL and I was a
[00:23:58]  big fan. We focused a lot on cross model queries and we had some level of projection where GraphQL is all about projection. It's about being able to, um
[00:24:10] , it's about being able to describe the shape of your data and then have the server return exactly the fields you need. So it prevents overfetching. And
[00:24:21]  the way it accomplished this is through schemas, very tightly designed schemas where essentially you could describe, you know, relationships between data. And this is basically what you would
[00:24:42]  crawl in order to get it. So you can, you could get very specific, like, give me heroes, give me their name, give me their friends, the
[00:24:49]  name of their friends. Um, you know, what home world, the name and climate of that home world. You could basically just walk across huge amounts of data in your
[00:24:58]  database in a single query without worrying about like, um, you know, which rest end points you have to hit. Right. Because a lot of the challenges of like
[00:25:10]  overfetching, like how many friends does our hero have? Like, maybe you put a query, show me the first five friends, like all those n plus one
[00:25:18]  problems are now pushed to the server backend rather than like a client. It would be terrible if, if you're in the browser and you're like, give me the hero
[00:25:27]  and, and get me with their friends IDs and now go fetch each of those 20 friends and then fetch each of their home world. Like, but that's how things
[00:25:36]  were. Um, generally speaking, right. If, when you were following very simplistic rest scenarios where each resource owns its resource doing cross, uh, record projection was not,
[00:25:48]  um, terribly common. We, we built our own system is what I was showing you a minute ago with back on ORM and why was this important? Well,
[00:26:00]  uh, funnily enough, I, my understanding is GraphQL really got to prominence within, uh, meta was through their mobile app initially, actually, um,
[00:26:10]  needing to pull information for like feed stories. Cause they're an example of amalgamation where you have like the core, let say feed or stories, you know, kind
[00:26:19]  of thing, but then you're pulling all this other specific information, maybe based on the type of story it is, maybe based on, you know, um, uh,
[00:26:27]  you know, like you need to show, you know, certain information about certain users, certain groups of their friends, et cetera. Yeah. So are we talking about
[00:26:47]  database denormalization and stuff? Um, yeah, I mean, this, this is incredible. And what was really cool about this layer is it's completely an abstraction.
[00:26:58]  The implementation on the server doesn't really care. As long as you follow the scheme on both sides, you can have your GraphQL server written in Java or go or whatever
[00:27:06] . And the client just gets to ask what it needs. So once you understand what the contract looks like, both sides can go independently, build their pieces and meet in
[00:27:15]  the middle. I mean, I, I, I, the rewrite of, uh, Vidigami, um, that's what was basically the thing. We basically had
[00:27:23]  like team A, team B, and they just kind of went off independently. You know, in our case, we were doing a backend in JavaScript or TypeScript technically.
[00:27:31]  And then GraphQL would like auto generate the types for the client side, but we could kind of spoof them while we were mocking things. As long as the schema was
[00:27:38]  good. And I spent a lot of time, even before we did the rewrite, taking the, uh, domain model, like of how we thought things would work and
[00:27:47] , and looking at the, uh, looking at both the database model that we wanted from a, like a realized point, and then also making a GraphQL model. And
[00:27:58]  I basically just modeled everything between, you know, typical database modeling tools, use GraphQL to figure out our API schema. And I basically was like pretty happy before we
[00:28:08]  did a single thing that I designed this whole, uh, system picture, as I said, picture something kind of like Instagram, but for kids with incredibly stringent, um
[00:28:20] , off, um, considerations in terms of visibility, who could see stuff like very locked down. So it's like a complete social media app. People posted stuff,
[00:28:29]  people left comments, likes, you know, but yeah, I mean, GraphQL is kind of incredible. Hey, thanks Aiden. Sorry. I'm trying to like
[00:28:41]  sneak in all the birthday wishes in, um, as they, as people join on the stream. Michael, sorry. All right. Yeah. People talking about Mongo's
[00:28:56]  query language, or now I guess DynamoDB is pretty similar. Um, but what I'm getting at is like, this is pretty, it's pretty easy to see
[00:29:10]  why people wanted this. It's pretty incredible. Um, the, you could just, the thing is it did a lot more than that because once you've set up
[00:29:21]  this language and this, um, ability to query like this, people took it to the next level. And what, but by that I meant, I meant, I was
[00:29:32]  already talking about the feeds. The thing is sometimes different parts of the page would know that they need different pieces of data, right? Right. Let me, let me see
[00:29:45]  if I can, I'll just grab Apollo docs. It doesn't really matter where I go here, but, uh, this idea of a fragment where you could basically go
[00:29:54] , Hey, this is a part of a query on person. So I, I need these fields on person. Someone else could need this field on person. And then you
[00:30:04]  could kind of spread them in. So you could actually distribute your query definition throughout your source code based on which components or which piece of your app you want to draw,
[00:30:15]  and then have them basically come together to form a single query that could pull them all, you know, at once. Right. And, and this is kind of a dream
[00:30:24] . Uh, you know, the thinking is because you could basically just know exactly all the data that you need and pull it all up, uh, you know, in
[00:30:34]  once. Now, don't get me wrong. There's complication to this, right? Because, um, one example that comes off to mind is what if some data
[00:30:42]  takes longer to fetch than other data, people started adding like directives, like I think at defer and stuff. So they could stream part of it. There, there
[00:30:49]  is a lot of things. The other really obvious one is how do you stitch this together? Right. Because, you know, at the time GraphQL first came out,
[00:30:58]  a lot of us were doing really dumb stuff and just putting our whole app as a single JS bundle, but consider the scenario now where you're code splitting routes and the
[00:31:07] , you know, you have data for maybe the top section of your app that's shared on all the routes and then different pages underneath have different data and you're kind of
[00:31:16]  trying to stitch them all together. Um, you basically you need to import them, but you wouldn't want to import the code. So you, you needed to kind of
[00:31:27]  like have the code be code splittable, but these fragments be addressable outside. And the thing is, I mean, people were solving this, these nested
[00:31:37]  router patterns, figuring out ways to hoist stuff into like data, like client-side data loaders on nested routes that they could parallelize, um, getting around
[00:31:46]  stuff. And you can do something like Apollo and you can basically just import, you know, you could basically have like a, my component. So like user component.ts
[00:31:56] x, and then decided user component dot fragment or dot data, and you put all your fragments there and then your route or wherever you create the query could import those fragments
[00:32:08]  and stitch them in to the, this particular page. So it can know what the, uh, do. There's also solutions like relay, which would automatically use a compiler
[00:32:18]  and walk through all your code, looking for fragments that it could automatically merge itself. Sorry. Just give me a second. I'm sure people are trying to wish me
[00:32:25]  birthday wishes right now. Yeah. My dad. Anyway. Um, like, but kind of conceptually the same idea, you would try and bunch all the queries together.
[00:32:41]  Um, like all these fragments, very specific needs. So it was a kind of like, technically you always have to hoist data fetching. There's no such thing
[00:32:48]  as local fetching without waterfalls, but you know, we could use a compiler or some kind of tooling. Um, that was, you know, part of the
[00:32:58]  allure here, but I don't know how, how many of you have made GraphQL applications in practice, like where you've actually designed a GraphQL server actually built
[00:33:09]  applications or like built on it. I just want to see some people just in the chat. Give me, give me, give me, give me an idea. If
[00:33:16]  you guys have done this. I've, uh, I have, I have, as I mentioned, completely rewrote our application. We went from a knockout app
[00:33:25]  to a react app with, um, GraphQL. I, you have two companies. I love relay. Uh, we used Apollo when we did it. I got
[00:33:36] , yeah, yeah. Yeah. Still GraphQL in production, you know? Yeah. Used Apollo. Yeah. A lot of Apollo here. Some people use relay. It
[00:33:51]  only happened. We were used to react native. We done, we, we, we, we'd mix knockout signals with react native before. And when hooks came
[00:34:01]  out, we were like, oh, maybe we don't need signals anymore. It was interesting. Cause we learned a lot of things of how hooks are not signals in that
[00:34:08]  process. Um, anyway, but our first use of react was actually react native with knockout, um, observables or signals. Relays is awesome. Gats
[00:34:27] by. Yeah. I like GraphQL. Well, I mean, it's because if you were looking for, it's not, I don't know if it, it
[00:34:41]  solves. Okay. It does solve a specific problem really effectively, but it also can be taken as like, if I, if, if you're told that you had
[00:34:50]  to choose one solution that could solve everything forever, maybe not the best for certain things. Cause it's overkill. But if you could pick a solution that would just be
[00:34:59]  like, look, I, you know, I don't care. Uh, I don't want to be, you know, I want to incur not even technical debt.
[00:35:07]  Isn't the right term. Like I want to make sure that my solution will work with anything I throw at it. Like, you know, the over-engineering
[00:35:14]  kind of mentality of things like you, it's hard to go wrong with GraphQL, right? Like you, it can, it can literally just do everything. Um,
[00:35:22]  I'm talking about the, the data fetching model here and the use of fragments, this, this use of fragments was actually really inspired a lot of the loader work
[00:35:30]  that I done solid. Cause I too have been trying to find, you know, simpler things after, uh, GraphQL. So when I first added, like,
[00:35:40]  um, not like remix loaders exactly, but like a client side, uh, parallelized data fetching, my thought was that people would just co-locate the
[00:35:47] , almost like fragments, the queries with the components they wanted. And then they import them into the route load, um, data load function, um, maybe use a convention
[00:35:57] . So you just go component.data or page.data, like whatever the thing is, and then you'd import them all to where you do your fetching
[00:36:03] . And then you call them all up there. Like I was very inspired by, um, GraphQL on this fetching side of things. Um, I was also
[00:36:12]  on mutation, which we'll get to in a minute, but it seemed that like the thing is that what you could never do that GraphQL did really well, um,
[00:36:22]  was, was this idea of how it managed the client side the client side of the client side of the client side cache? I now see a much of a resurg
[00:36:35] ent fragrance with React query. Okay. We'll, we'll get there in a minute. Yeah. Um, so the thing is what part, the, the thing
[00:36:50]  that makes GraphQL so amazing is it's caching mechanism because yeah, fetching, getting everything on a single flight request is awesome. You will get rid of waterfalls
[00:37:00] , but technically it's just hoisting, right? Like you, whether you have a compiler, do it, or you, uh, like relay, or you
[00:37:09]  do it manually, you could just do that by hand. And it's actually not that much work. You just go like, get me, it hoists into the same
[00:37:18]  zone. Now don't get me wrong. The fact that it could do these joint queries meant you weren't doing multiple fetches or things that depended on other things
[00:37:26] , but those problems are all solvable when your code's in the same location. Like when it doesn't have to be declared there, but when you're importing, like
[00:37:34]  into the same location, all those problems are solvable, right? You can go, okay, this API is inefficient. It's, it's causing waterfall on the client
[00:37:42] . Let's just think, you can see it in front of your eyes. Like this is not, you know, like if, if, if, if, if
[00:37:49]  you're, if your waterfalls are spread throughout your app, you don't know what the hell's going on. But if you pull them all up to the, the
[00:37:58]  like routes level section, you know, loading section, then you immediately can tell when there's waterfalls, you understand how the data flows through your app. Right? So
[00:38:06]  that's all GraphQL then on the fetching side. It just, you know, they, they were smart. Um, you know, I, I saw some really
[00:38:14]  clever solutions that would like render react components, just to get the GraphQL query out of it. And then like, then fetch the data and then render it for real
[00:38:24] . I mean, these are all really clever UX thing, but arts or DX thing, but like from UX standpoint, that's kind of horrendous. Can you picture like
[00:38:31]  rendering your react app more than you already have to like, how many times do you need to re-render your react components? Like really? Um, so like,
[00:38:43]  but you can like, these are all ways to just automate the fact that we just need to hoist the data, like undeniably we're hoisting the data
[00:38:52] . So nobody ever got fired unless you work with the, uh, okay. So right. If loaders could automatically, and I I've seen solutions do this.
[00:39:14]  The only way to do this is compilers though, because your code splitting considerations and your view-based waterfall, essentially you, the only way to avoid waterfalls
[00:39:24]  is either hoist it yourself or get a compiler to do it. Every system that does localized data fetching in the components will eventually as optimized will become one that hoists
[00:39:37]  it, right? You're always just inventing a system to hoist data fetching. That that that's just how this works. Local data fetching and components
[00:39:45] , um, from an optimization standpoint is never basically the solution, but we'll get to that more in a minute. Okay. So this cache is magical, which is like
[00:40:06]  the one difference here, because like and these fragments can merge, like I wasn't too clear on it, but like if one component needs one field of user and another one
[00:40:17]  needs another one, they can merge it. It's kind of tricky to use any system that doesn't involve exporting from the child, the raw query pieces rather than the data
[00:40:27]  fetching itself to merge. So there are things that make GraphQL even better than simpler solutions, but this cache was crazy because they use something called a denormalized
[00:40:39]  cache. So they could tend to tell based on like schema and relation, um, like a way of thinking about a denormalized cache is you've ever seen a list
[00:40:52]  where you have like 10 posts, like a blog site, and then you go into one specific post and you have the same story, but of one of those blogs, but
[00:41:02]  now with a bunch more details. So two ways to look at it is the fragments are sort of the, like the, in your cache, when you load the listing
[00:41:11]  page and then you click into the specific page, you actually already have the data for, for maybe not all the fields on the page, but the, uh, you know
[00:41:21] , like the title and, you know, maybe the, the caption. So with the schema from GraphQL, it would know that those are the same things. Similarly
[00:41:32] , if you reloaded the whole page on one of the, on one of the pages, you'd have all the details for one of the stories. So when you went
[00:41:39]  back to the, the listing page, technically you already had all the details you needed for one of those things in the list. This is really, really powerful when you think
[00:41:49]  about it in theory. Challenges in practice, as you can tell is you never have all the data, um, you know, in those cases, usually like unless
[00:41:58]  you load all the data for the next page, like when you're going into the details on the listing page, which you probably wouldn't want to do because that's over
[00:42:04] fetching, then you're going to have to go back and probably hit this exact same database table. Yes. You can cut down on the stuff transferred because you
[00:42:11]  go, Oh, I don't need these specific fields, but I don't think in practice, the normalized caching actually ended up lending that much of a benefit because like
[00:42:21]  in extreme cases, you could optimize for it. If you were very smart on how all these multi-page interactions would work. But generally speaking, um, like because
[00:42:34]  you're only ever dealing with pieces of it, there's a reasonable chance that, um, you know, like you'd have to go to the source again anyways, especially
[00:42:45]  if there's any commutation invalidation involved. But I, and I think I remember Tanner writing a blog article like five years ago about like why you don't need
[00:42:57]  that normalized cache. It, it is incredibly powerful though. Um, caching is such a huge source of bugs. I agree. We can talk about this. Yeah.
[00:43:11]  And, and, and this is why we've slipped down this case, you know, while we're back talking about HTMX, the problem is just cause you
[00:43:24]  can go, okay, well, this causes a lot of bugs. It doesn't make it more performant to not do it. Like the, the, the challenge here
[00:43:39]  is GraphQL was also very, very performant because when you did a mutation, you could tell it exactly what data changed. So it would just update all the right
[00:43:51]  spots. And only those things could update the change. Maybe you're feeding it to React and it didn't matter. And you freaking re-rendered your whole page again
[00:43:59] , but like in theory, at least, and when you're not using React, um, you could basically apply fine-grained updates. Like it knew exactly what
[00:44:10]  data changed. And you as a developer on those base cases, didn't have to do anything except set up the schema, return the right data and set the go.
[00:44:21]  The challenge is the reality and the promise gap. Um, and this is what happened. You start, you start making paginated queries or doing mutations on these things. And
[00:44:35]  you want to optimize stick updates. And the process for all of these involved going in and writing to the cache or being like, okay, take the cache data. And then
[00:44:44]  you have multiple states. You're like, okay, I'm optimistic in flight. This is a success case. This is, this is a fail case. And you
[00:44:52] 'd go through and you basically write all this cache updating logic. And I knew I was in store for it. And you can kind of copy and paste a lot of it
[00:45:02] . Like if you like always made, had a bunch of lists of similar type models, like image grids, we had a ton of them in our photo sharing app.
[00:45:12]  Then like, we could kind of like share the logic between pagination and kind of like encapsulate that. And then like any image grid can kind of handle the pag
[00:45:18] ination same way. But like, generally speaking, like, there was a whole bunch of these logic about maintaining the cache. Yeah. Yeah, yeah, of course,
[00:45:35]  HTML is pretty easy to cache. But the problem is if you're, if you're, you're already kind of like overseer serializing or over fetching what you
[00:45:45]  need, probably because view doesn't equal data. And I think this is an important distinction because like, in some one hand, you could say that the view has exactly
[00:45:57]  the amount of data you need, right, to display. But on the other hand, it's not able, you're kind of forcing yourself along the lines of dipping
[00:46:07]  or straight up replacing. I think there's like, this is one of the challenges between being data centric and being view centric. And I'm going to use those
[00:46:17]  terms a bunch today because GraphQL is a very data centric model, or say RSC is a very view centric model. And in a sense, it's very
[00:46:27]  similar analogy. Our signals is a very data centric model, and the virtual DOM is a very view centric model. It has the very similar trade offs. There
[00:46:35] 's a reason why signals can be so much more performant than the virtual DOM, right? So like, there is an analogy here to kind of see in terms of stuff
[00:46:48] , right? Like, granular patching versus diffing, like, these kind of things carry with both approaches. Okay. So yeah, offline first, another sensitive normal
[00:47:08]  cast. But the problem I was getting at is no one wants to write, like, GraphQL was pretty optimal. In most cases, the fetch case we just talked about
[00:47:21] , and then the mutation case we just talked about. And then like, there might be the mutation then fetch case. GraphQL wasn't the best here, per se
[00:47:34] , because, but it wasn't bad, like, it could be good. Like, because what you do is you'd mutate the data on the page you are,
[00:47:42]  return the data that needs to be updated, then you navigate to the next page, you may already have the data you need on the next page, not to fetch it
[00:47:49]  again. Or you'd probably do a second trip to the server to fill out the rest of the data as you need it. So there was like a two step on the
[00:47:55]  redirect case where you do like the post and the get. But for the most part, GraphQL had the tools to be very efficient. One of the like the downsides
[00:48:10] , obviously were a lot of like DX considerations, like managing this cache, incredibly painful. There were some UX trade offs to size. How big is Apollo client or relay
[00:48:23]  client? I'm pretty sure they're in the 30 or 40 kilobyte range. Like these normalized caches are sizable systems. It's like, you know
[00:48:32] , if you're doing simpler stuff, you don't need to like, you don't like, why are you bringing in, you know, 40 kilobytes more JavaScript
[00:48:42] ? Your react is 43 kilobytes. This is 40 kilobytes. I'm talking gzip, minzip. So we're at 83 kilobytes now,
[00:48:49]  I guess, are we server rendering with Next.js? So like, we're at 120 kilobytes now. And we haven't we put hello on the screen
[00:48:57] , right? Like, this, this is a sizable consideration, you know, and that, you know, is these are all things that kind of came into the like
[00:49:12] , you ain't going to need it category. In some ways, we have never reached the efficiency of GraphQL. Since none of the solutions that we pointed at have
[00:49:25]  been able to give you that ability to be like, so effectively be get things down to that granular data level where even unrelated queries could update the same data sources. You know
[00:49:40] , like, it's not tied to the query. It's not like if you have a user query and a user's query being different, like one's a list
[00:49:46]  of users and one's a user. With the GraphQL normalized craft, that single user is the same as one of the users in the user's query, so to speak
[00:49:54] . So GraphQL is kind of incredible and nothing's really come to touch yet. But we're not all, you know, where did we start here? We're not
[00:50:07]  all in enterprise. We're not all here. There's a lot of people who are kind of just sitting in this zone. And a lot of the benefits from Graph
[00:50:17] QL, you could get other ways, right? Like, and I, this is what kind of started us down this path because people doing this normalized cache, that was the
[00:50:33]  first thing that went out the door. People didn't want to handle the normalized cache anymore. Yeah. So like every day where I don't even know what that thing
[00:50:45]  is, but I mean, it's kind of the baseline. It's Yeah. Okay. Yeah. Okay. GraphQL. Yeah. See, the thing is,
[00:51:02]  and it's important. I like that you bring this up because a lot of the problems is we just kind of pushed the problem down the chain. GraphQL, the resol
[00:51:11] vers became the performance bottleneck on GraphQL, because now you have n plus one problem. If people weren't optimizing it, and it was a little bit challenging a problem
[00:51:20]  because you'd have models and models and models and models. Like, I remember the work I was doing on my ORM. I would look at the whole freaking query
[00:51:27]  and figure out how to make the best database query out of it. Most of the way people built resolvers was at a single tier. So every single piece was a separate
[00:51:35]  run to the database. Every model was, you know, and you could do stuff like n plus one to kind of improve that, add caching layers in between. But
[00:51:45]  there was a challenge in building that. Why the front end people like myself are making such a kind of applaud to the GraphQL was the network is always, is generally
[00:51:57]  an order of magnitude more expensive in terms of the bandwidth. So like if the same stuff that was happening on the back end was happening in the front end, you would be
[00:52:08] , your app would be dead in the water. So it just kind of pushed it down, down the lane. And you're going to see this pattern a lot,
[00:52:14]  RCs. You're like, Oh, waterfalls on the client, you know, terrible. Waterfalls on the server, you know, Neo sunglasses, you know,
[00:52:23]  like, like there, there is a bit of a history of that because generally speaking, the further you push these problems from away from the client, like just getting it
[00:52:36]  from the client to the server is like a 10x performance improvement, not because the server doing stuff on the servers necessarily faster, just removing the network cost. Network is just
[00:52:50]  incredibly bottlenecking in all our considerations here. Right. So anyway, where I was getting with this, no one wanted to write the cache. So the first thing we
[00:53:16]  saw was, let's get rid of the cache. How bad is it instead of having normalized cache that we have a query cache? And it's funny, if I go
[00:53:28]  through this document here, I'm probably going to find where I made very similar claims on a previous stream, I could probably find like, okay, this one's about
[00:53:42]  routing, but API as HTML, API as JSON, jQuery, API as state, API as normalized cache. Here we go. This is from a previous stream. But
[00:53:53]  GraphQL kind of comes here. And then we start going down the other side. So query cache, I mentioned React Query. But I want to mention that I
[00:54:05]  think it's also fair that we, we mentioned Urkel. And even, yeah, basically any of these options which got away because suddenly, your cache mechanism goes from being
[00:54:20]  40 kilobytes to being 9 kilobytes, right? It's much, much lighter. But is it as efficient? Right. And the answer, the answer
[00:54:31]  to that is obviously not. But what do we actually give up with these, with these models? Well, the first thing that we give up when we go to
[00:54:51]  query cache is into normalx cache is that we don't have this fragment blending generally. I mean, you could still, because there's only really one version of it
[00:55:12] . You're not model centric, you're query centric. You could fetch each resource for each page the way you want to, but you might have to fetch more
[00:55:21]  often. Like, how should I put it? You can have a user for this page that's different than a user for this page. And you can put them under
[00:55:29]  separate cache keys, like user and user details. Like they're not shared anymore. You can still invalidate them both by saying invalidate things that start with user. But
[00:55:42]  like, you're, you're, it's not the, it's not like the data that sets the requirement, but the, the, um, the query, like
[00:55:52]  the, the conceptual usage of it. And that, and this is, this is a, this is definitely a drop off. And it's why you kind of lose
[00:56:00]  a bit on the enterprise people, but on the positive is it's still relatively granular. If you're, if you're working on, you know, a user on one
[00:56:13]  page, like our specific post and you update and edit it, and then you, you finish and you go back to the, the listing page, you do a separate query
[00:56:22] . You don't get to save it, but you kind of had probably did a separate query anyways, as I mentioned a moment ago, like most of those cases where
[00:56:29]  the normalized cache actually mattered, um, don't apply there. The other tricky part obviously is how do you deal with needing the data way down in your component tree? Like
[00:56:38]  what the shape is, what fields you need? Well, you kind of have to know all your data upfront. You can't just stitch the fragments together. And these,
[00:56:45]  these query caches though, generally dedupe duplicate things. So if you go and run your page and call the same user query, five places on your page,
[00:56:57]  as you load it, um, it will get to the same single fetch or promise. So instead of stitching it via compiler, um, it, it essentially just ded
[00:57:11] uped it. And if you hoisted the initial fetch up to that loader, I said before, then kind of get the same effect of basically doing, you
[00:57:24]  know, for any given resource, a single, um, flight solution, so to speak. But conceptually, it's a lot like rest, right? Where you have
[00:57:34]  like, like the same things that you'd separate the resources for, like you have would be, you know, like the different HTP verbs would basically be the,
[00:57:45]  on the get side would basically be very similar with this system, right? You would have, you know, get all users, get single users, separate query. In
[00:58:06]  query cache architecture, you give up the locality of behavior and your cache becomes distributed, which I think you're getting at with the point about conceptual disk. Yeah. But
[00:58:14] , um, it's still data oriented or at least query oriented. You, you think about it, you still think about types of resources on your page, right? So
[00:58:24]  if you update, if you have like six different types of collections of data on your page and you update one of them, then you just update that one. You don
[00:58:33] 't go get all the data for your page. You just get the data for the one thing that has changed. Right? So a lot of people were pretty happy on this
[00:58:44]  side. The challenge of course is GraphQL, like something like a query cache isn't enough of on its own to get all the like TypeScript benefits and all the,
[00:58:54]  all those, right? So you could use Urkel. So you could keep using your GraphQL, but with a simpler client, you could, you could feed your
[00:59:00]  GraphQL through TAN stack query, but this is where things like PRPC came in, right? Because suddenly it was like, okay, we can generate, you could
[00:59:13]  describe the types for the server. And then we can basically use those types on the client again. Um, and we can get this end to end type script. And
[00:59:26]  I have to admit, TRPC came out at a time that I was already working on something else. So I don't know, like, does it, does it use
[00:59:36]  type gen to generate the types, um, on both sides or like it does a trick with imports? I actually don't know the mechanism behind how TRPC does. And
[00:59:46]  I'm sure someone in chat can tell me, um, because as I said, I was already kind of working on the next thing when it came out, but it
[00:59:52]  was, it was definitely, if you combine TypeScript on both sides to give you that schema without a special schema and, you know, something with like ZOD style validation
[01:00:05]  or something like that, and you combine that with query caches, you have, you know, semi granular, um, uh, invalidation. And for basically any
[01:00:18]  situation in which you are dealing with multiple models on your same page, you know, it's not quite GraphQL, but most of the time, even in those cases
[01:00:32] , you might not need GraphQL because like you're still fetching the type of thing you want. The, the biggest downside of this approach is usually, and it's
[01:00:43]  kind of the strength is like, you could do a mutation and, um, you know, get the data back to invalidate it or, or so not invalidate
[01:00:58]  to replace it in the cache. But people got so sick of doing cache for basically anything that they just do revalidate. So most times you did an update,
[01:01:08]  you basically go update user success comes back. So do one trip. And then on the next trip, you go, get me updated user. So we kind of got
[01:01:18]  to a world where we were doing basically a client waterfall on mutation kind of acceptable because when you go and perform an action on a web page, you're expecting to wait a
[01:01:29]  little bit. It's a little bit different fetching. You want to see the data as soon as possible mutation. We're a little bit more forgivable, right?
[01:01:37]  You know, another example, if you're on a page, you save that post, it redirects you to the listing and then you load the listing. It's
[01:01:45]  two fetches post get, right? So this is kind of the trade-off we find ourselves in. And it's a pretty good solution. People building very interactive apps
[01:02:00]  use these kind of e-based things. There's a reason why Tanner has popularized this approach and he built a lot of dashboards, a lot of data-
[01:02:09] centric apps because it lets him still isolate data enough. The normalized cache wasn't actually doing very much for him. So he gets like 90% of the effort or like benefit
[01:02:23]  there because he still has complete granular control over the types of things he cares about. He just can't share it in the same sort of way, but it also probably
[01:02:32]  doesn't impact him very much. Okay. So it's an import trick. That's great. Yeah. Right, right, right, right, right. So right
[01:02:53]  off the bat, if you're worried about using a different language on the backend, we're, you're, you're kind of already outside of this. Nothing is replacing
[01:03:03]  GraphQL. If you're not in this, this, this boat, uh, as I started with at the beginning here because like the reason there's so much stuff
[01:03:17]  around it is because it's very strict on the contract. People are going to be using GraphQL for ages. I I'm just saying personally, I'm mostly only interested
[01:03:27]  in this first square. Um, so, and when people say what comes after GraphQL, they're generally only talking about this first square. when people talk about our
[01:03:37] , uh, server components, they're actually only talking about this first square. In fact, a huge amount of web development is only talking about this first square. I mean
[01:03:45] , some might be talking about this square as well, but I, he means backend front end different teams. So actually like pretty much multiple teams in this scenario is,
[01:04:04]  is, is kind of where a lot of the focus in front end has gone to for better force. And the reason for that is for different reasons. I've talked about
[01:04:11]  this in previous streams. It's, it, it's not just because of this it's because of the JavaScript problem. If you, if you have to run JavaScript in
[01:04:20]  the browser, it's the only constraint that is actually unavoidable, which means that if you want to streamline your development, um, and even UX considerations, when
[01:04:33]  it comes to saving over the network, you're kind of stuck with JavaScript on the server. You can use other languages along with it, but your web server layer, like
[01:04:42] , uh, like eBay, for example, Java, all Java backend, but all the web servers are node. Like they use JavaScript to render the web pages. Sure
[01:04:52] . The APIs and stuff are all written in Java, but all the websites are, are written in node. Um, so yeah. Yeah. One, well, one
[01:05:16]  of the big things on enterprise thing is that the GraphQL lets you do the facade pattern, right? Where you create an API layer that walks in between the existing services,
[01:05:25]  and then you just start replacing what's behind it. Once the, once the facade's up, right. Um, classic, you know, design pattern. Um, so
[01:05:33]  like GraphQL is great. It's a migration tool. It's like, don't get me wrong. Like people, when they do the big switch will probably hit
[01:05:40]  performance issues because it, it lets you be unperformant because it gives you the ability to just pull all the crap together. And sometimes pulling this stuff together, you know
[01:05:53] , isn't necessarily the best thing. Cause they like have different data requirements. If you're sitting there on the server now, stitching all the stuff together and they take different
[01:06:00]  lengths and have different latencies, then you're slowing everyone down, right? Breaking it apart is actually kind of really beneficial. Um, which, you know, talking
[01:06:11]  about the fact that the only, my only complaint about GraphQL, I know it can support it. If you do the right thing is how streamable the, the,
[01:06:19]  the, the, the people set up. If, if it can be set up to stream back stuff, then I think it would possibly be the ultimate client oriented thing,
[01:06:29]  except for the fact that it has a reasonable amount of JavaScript on the client. Right. So what I'm getting at is like, to me, and this is why
[01:06:42]  TRPC is probably kind of, you know, where it is that TRPC isn't about replacing your backend, go Python things. It's about, uh, the,
[01:06:50]  the pipeline to the server rendering, so to speak in JavaScript. That being said, yeah. Yeah. I'm familiar with that defer and new directive name at streams for
[01:07:00]  streaming data. Yeah. I'm sure there's ways, but it's like, yeah, I think it's, I think it's interesting. Yeah. So like one
[01:07:14]  of the reasons, like, I think code gens features through the API, the schema, the starting point source to GI at a certain point, either the abstraction for the
[01:07:26]  automation is good enough that everyone just accepts it as a baseline or people hit friction. And in the case of graph QL, I know this because we used it like generating
[01:07:36]  and a co-gen was so slow back then. And I'm trying to do development of people's teams. It was really like TRPC and not needing that co-
[01:07:43] gen. I'm pretty sure. And like, these kinds of solutions are feel like a billion times better than code code. And always feels kind of like a little bit
[01:07:50]  like it's, it's like a minor DX consideration. I told you a lot of the graphic all complaints that it's like, it's kind of silly, but it
[01:07:59] 's like, if you need it from a contractual enterprise level, like a hundred percent, but like people just didn't want to deal with that anymore. Right. Right
[01:08:10] . So, okay. I am trying to kind of get, kind of get, get this, uh, to where, to here. And I, I do have
[01:08:22]  to retrace over a little bit of the few things that we covered in my streams before, because we kind of get the query cache thing, right? Query cache did
[01:08:30]  sacrifice a couple of things from graph QL, but a lot of the things to sacrifice for kind of like, probably wasn't going to work to your benefit anyways. Um
[01:08:40] , except for the, the dual flight thing, like it was, it was kind of, you know, and honestly, you know, who cares? The next thing
[01:08:51]  on the slope here, you know, is G G S S P or loaders like remix style kind of stuff. And, um, I'm talking really generically
[01:09:03]  because these ones are on the fetch side. We also have to talk about the mutation side, but these were just like, let's just put it on the route. So
[01:09:14]  get rid of the query keys altogether and just be like data for page. Yes. Then when you mutate, regardless of the approach, like remix uses like posts,
[01:09:28]  other systems could use like, um, like, uh, RPCs to trigger this, the kind of mentality here though, is like, you always fetch the whole thing
[01:09:41]  on the page. This is okay for simple pages, but the, what you lose here is you no longer, if you have five different data sources, you're fetch
[01:09:55] ing all five of those data sources. Every time you, you know, you basically need two systems. If you want to avoid that, you'd have the server. This
[01:10:03]  is why like the classic part of this was you, you'd have the server initially load all this data for you, like all the data sources on your page, and then
[01:10:12]  you'd feed it into another system and it would do localized updates of the specific things you needed, which meant you're always kind of dealing with these two different patterns.
[01:10:19]  Remix closed the loop by adding, like actions. But like essentially with this sort of pattern, um, there, there is this kind of awkwardness. Um,
[01:10:36]  this all, yeah, this kind of awkwardness where like, if you actually went back to that particular page, you did a mutation, suddenly you're updating all the
[01:10:47]  data by default. And I think I should mention this. A lot of the work around here, where like we had query caches, react query, and this is people
[01:11:01] , even with SSR, we're deferring, fetching the data, not at SSR time, but doing it when the client loaded the data, you know,
[01:11:08]  so you'd like render part of the page, and then it would like fetch the stuff after the fact. If you actually had to use react query on the server,
[01:11:15]  there wasn't really good solutions here before in most libraries. I always forget about this because, um, I guess this sounds like humble brags or whatever, but solid had
[01:11:23]  solved this problem about five years ago where we, when we had a suspense of the server, but I, in, in, in the, like the react side of
[01:11:31]  things, like, like it was awkward to try and get this data on the server and then deal with the serialization yourself. And then like, you know, like now
[01:11:42]  you have, you know, they invented these loaders to solve the problem. Like, but it never felt like it was really react, you know, like it was very
[01:11:52]  specific to the framework, um, that was wrapping react. And you need a different data mutation problem, uh, solution. It never felt consistent. So you're trapped
[01:12:03]  between like these query cache solutions that weren't really SSR kind of, unless you're managing, I mean, to be fair, most of the GraphQL solutions were also
[01:12:13] , um, built in with the SSR consideration and stuff like that's why these libraries are so massive, but a lot of people, you know, there was like this
[01:12:23]  awkwardness around patterns here because all you had was like rendered a string. You had no async, like you'd basically have to fetch all your data up front and
[01:12:31]  then render your page or do a pre-pass or like these different kinds of mechanisms. Um, so adding loaders and, uh, get service side props are really powerful
[01:12:41]  because then like the framework could be like, Oh, I know what data to load up front. And then like everything else would fall to like react query and you just like
[01:12:47]  fetch in the client later or something. Like, so there's like a historical stuff. I don't want this to blind the pure technical aspects of this though. So
[01:12:58]  like, in a sense, you know, we saw a lot of people move to tRPC with react query, but stuff like, uh, GSSP,
[01:13:12]  which is like a different protocol kind of still fell into some categories of data. Right. And this approach, generally speaking, sucked for apps. You might not have to,
[01:13:27]  but if, if you had to go back, you, you basically had this weird hybrid and if you had to go back to the server, which I don't think
[01:13:36]  people generally like designed it that way, you'd be just like fetching all the data and re-rendering everything again. I think this was one of the biggest fr
[01:13:43] ictions remix had when they came in because they're like, look, look, look, look, we have a way of doing it without reloading the whole page. We
[01:13:48]  have like a use fetcher approach or whatever, you know, and then you can just hit it like this one thing as an endpoint, but use fetcher is just them
[01:13:54]  making their own kind of micro, um, react query, so to speak. Like it's a second data pattern to the main one. And I think, I think
[01:14:05]  this is kind of like w in one way, I mean, the, the big win here, and I want to talk about remix here is when you got to react query
[01:14:16] , we stopped caring about writing the, the cache on any successful thing. We would just be like, okay, just revalidate when we got to actions and
[01:14:25]  loaders or remix their biggest innovation thing that they should be remembered in history for is that they came up with a cashless optimistic updates. They're just like, cause they
[01:14:34]  didn't even bother with this client side cash that these things had. And for that reason, they, they were like, okay, we're just going to feed it back
[01:14:41]  through a state while it's in flight, which is absolutely genius because we got to this point where we no longer needed the client side cash, which paved the way,
[01:14:50]  um, to RSCs. But this, you can see, as we went down the slope, we lost the ability to like granularly update our, our data here
[01:15:01]  from the client. Like, it's like kind of like, let's just grab it all or from a route section, perhaps. So, I mean, there's
[01:15:09]  other solutions here, right? You can hash things on the server so that the cost of going to the server doesn't mean you have to like do a bunch of requests on
[01:15:19]  the server, but conceptually you're still sending all that data over the wire and you're still dipping everything in the client. Cause the client knows exactly what it needs,
[01:15:27]  but there's really no way of telling the server that and these solutions basically went from place of absolute knowledge in the client. Basically, we have no clue what's going
[01:15:41]  on. Just dip it. Okay. So, I would say that when you put them together, this was a DX win. Um, this question is, performance win
[01:16:08]  or DX win? I think trpc gave us types and a good, you know, it gave us types over a fetch. It gave us a good protocol to use
[01:16:19]  with our React query, essentially. Um, compared to, um, what we're doing GraphQL, it wasn't quite as optimal, probably optimal enough, but the
[01:16:33]  floor is continued to go from here. Right. In a sense, this is why we hit that sweet spot. I feel like trpc with react query might be one
[01:16:44]  of those like sweet spot. Um, like, you know, API has normalized cached with GraphQL might have been really performance oriented, but like you're really fighting
[01:16:59]  for that last bit of performance and you probably weren't going to get it. React query plus trpc hits a sweet spot. We get into GSP and loaders
[01:17:09] . It's a little bit, it's okay for simple stuff. You can work it to work for more complicated stuff, but it's no longer, it's like
[01:17:20] , it's gone a little bit past the sweet spot. So how do RSCs fit into the picture, right? Local maxima. Yeah, exactly. Okay.
[01:17:30]  So let's talk our RSCs. Because I told you this conversation started because RSCs, um, were more or less the answer to GraphQL. It
[01:17:45]  didn't start like that. As I mentioned, React used something called flight, right? Uh, they were working on the single flight mechanism. But the reason is R
[01:17:54] SCs weave two trees. If you've ever seen like the, the, what is it? Uh, bundle lists are react server components. The original like release thing.
[01:18:08]  If you ever look for images from that, there's this one image. They always show this one here. It doesn't show it the easiest. And I think, uh
[01:18:16] , Danny Roth has done better images, but the point of this whole image is there's actually two trees that are independent that weave through each other. So at any depth
[01:18:28]  in one of the trees, you can have server components next to client components. So in a sense, the server components are the relay fragments and the, the client components
[01:18:40]  are your own, your old kind of react app. So you can kind of sit them. So the server components are the funny thing is the client components are all separate trees
[01:18:50] . Like they're connected through context and stuff, but they're actually like kind of separate routes, but the server has one single consistent route. That's why you have all
[01:18:58]  those weird import rules. Like you can import server components and client components or whatever is to, so that you can only project it through. So the server component tree is
[01:19:06]  one single tree. So this makes sure kind of like our old graph QL system that we're doing one fetch. When we go to the server, we can always just
[01:19:14]  get that full tree. There's no like, Oh, go to the client to the server, the client server. There's no back and forth. The server can always
[01:19:21]  render the complete server tree. Um, always as a single fetch. They know all the data fetching because essentially, whenever you go to a page or a route or
[01:19:32]  whatever, they pull out all the data along that. Now you might be going, well, but it's returning JSX, not data. Well, to be fair,
[01:19:40]  a lot of companies do that. I'm, I'm pretty sure, um, at Meta, their GraphQL server returns component representations to get rendered. It's a
[01:19:49]  common trick you do on mobile. Um, eBay had something called the experience server. Those are similar service. Sorry. That was very similar. Like this idea that you
[01:19:57]  could have the web and the mobile share design by essentially describing what the UI should be via API and having it render rather than actually shipping the code. You can kind of,
[01:20:09]  and in a sense, you could view server components as an evolution of that, right? It's both the solving the, the like components as API consideration for these kind
[01:20:24]  of services, which is probably something that most of you don't even need or particularly concerned with. And at the same time, create a single server tree that can fetch the
[01:20:34]  data through. Um, that single server tree has some interesting considerations though. Right. Because I mean, if you, if you think about it, um, like it
[01:20:51] 's organized by how you view your code, like, like your view code. So like, if things are, if, if, if dependencies aren't data dependencies necessarily,
[01:21:01]  but our view dependencies, like don't show this panel unless this user exists, even though you to fetch the data for this panel, you already have that information. Like
[01:21:12]  you already have a user ID. You basically force the data fetching into the view construct causing, you know, perhaps unnecessary waterfalls. It's just, just something to
[01:21:25]  kind of consider like there's structural considerations to like, um, how your components are set up that actually affect how it works. But generally speaking, you're doing a
[01:21:36]  single request to the server and pulling out a single thing of data. It's not unlike the graph QL thing, except graph QL was about data. When we looked
[01:21:44]  at those fragments, we looked at, oh, sorry, we, we, we were looking at how we could merge together and find the exact pieces of data. And
[01:21:54]  each of these fields can resolve kind of somewhat separately. Um, there's a nesting consideration, but, uh, essentially with, with our Cs, we kind of
[01:22:09]  sort of solve two problems kind of right. Like we, we get to, we do accomplish this, but, um, you're now getting the final view out.
[01:22:21]  So and the data fetching is kind of baked in now, but don't be fair to be fair. You don't have to put the data fetching in waterfall.
[01:22:28]  You can hoist it up again. You can always hoist it up. That's the solution to almost every data fetching problem, hoist it up. Um,
[01:22:35]  but like generally speaking, this is why the tie-in comes to relay because instead of using a compiler to detect a head, how to stitch the stuff together, like
[01:22:49]  relay does, it just runs the stuff top down. And as it hits it, probably good enough for you, right? That that's kind of the idea. Just kind
[01:22:57]  of water falls itself down the tree, gets all the data and sends in a single request way better to do that on the server than on the client, right? Um
[01:23:05] , but that that's, and in general, that's true. But what's interesting, if we go back to our, our, our, our story here is go
[01:23:13]  back to our case. We have five data sources on the, on the client, and we know that we're going to update one. Well, with RSCs like
[01:23:28]  GSTP or whatever, you actually end up re-rendering the whole page. So while those waterfalls are generally better on the server than the client, you
[01:23:38]  might have not needed to render four out of the five of them. So like, there, there is this kind of consideration here, right? It's not GraphQL because
[01:23:54]  there's no client cache that's aware of exactly what changed from a mutation standpoint. Like you can use server caches. And the interesting thing is like, I've
[01:24:08]  done plenty of server rendering optimization in the past, using, using, um, you know, Redis to cache stuff. But what's interesting about this model is you,
[01:24:16]  it's kind of like cache by architectural, like you need to almost cache the other four data sources or all the data sources in case one invalidates, um, unless
[01:24:26]  you do want to hit the database every single time and go through that waterfall every single time. Um, right. Whereas, interestingly enough, when we were at the peak of
[01:24:37]  client side caches with APIs, um, we only got the data that we requested. So it's, it's interesting, right? Something like RSCs makes
[01:24:54]  up for this because it diffs on the client. It's okay if the server does some extra stuff, produces a bunch of extra markup, does a bunch of stuff
[01:25:03]  because the client probably is just going to diff the changes and it's not going to impact it as much. I, there was this great demo, um, the notes
[01:25:10]  app demo that was done like when they first showed it off. And it was a really good example of showing how you could do everything app-like with RSCs,
[01:25:21]  um, model, which is something that I always wish we remixed it early on because people assume you can't build apps with remix. in like remix, these things
[01:25:32]  are relying on react to do all the heavy lifting of, of diffing instead of going like, okay, I know that I only need to do this much work. It
[01:25:41] 's a bit like, let's do it all and let react, figure it out. And it's not surprising that that mentality is coming from react. Cause I mean,
[01:25:50]  like that's how react always works except now, now it's, now it's doing it across the network boundaries. It's an MPA in disguise and SPA
[01:26:04]  for sure. Right. But would you build a highly interactive, right? Heavy app as an MPA? Probably not. Like this doesn't actually change the MPA like
[01:26:21]  behavior of it. Uh, multi-page app, multi-page app. So server-side routed app. It's also morph libraries work. You're talking
[01:26:35]  about like, like how like Phoenix live view does stuff. The funny thing is I feel like stuff like live view could be done way more effectively with signals. Like they are
[01:26:44]  smart enough to know where all the state is that they could do all the updates without diffing. Anyways, that's a whole other thing. I haven't worked on state
[01:26:52] ful. I think stateful backends while it's something that usually I think is prohibitive from a hardware infrastructure consideration. If it was on the table, I think
[01:27:01]  we could do way better than the solutions that are out there today. Like way better. I'm just, it's not a problem space that we're that particularly working on
[01:27:10] , on the front end side, but if stateful backend suddenly became like the de facto, there's so many ways we could, we could do better than what we
[01:27:17] 're doing today. Yeah. And I don't even know if it's that much of a, of a performance problem. Like the RPC is just the protocol, as
[01:27:34]  you said, right? Like it's just the thing passing the data. So if it, it, it, it, the, I think the invalidation would be
[01:27:41]  whatever react query does or whatever consumer considers on it. Um, yeah, it's, it's not, it's not, it's not about, yeah, I,
[01:27:53]  I want to make that clear. I feel like they're just a really nice pair because we needed a types safe protocol and we needed, um, we needed, uh
[01:28:06] , a reasonable approach to doing granular and validation, which is, and I, as I said, you can put the cash on either side. So like, if your app
[01:28:15]  gets large enough, I can see an argument. You don't want the cash on this client because then you have to serialize and send it. But if you, so
[01:28:21]  like, there is this thing that that serialization cost of keeping on the server is good, but then it's like, it's not an easy choice. Like it scales
[01:28:29]  differently and you have to look at the specific scenario to decide whether your cash should be on the client on the server. And it's very awkward if changing that means completely
[01:28:39]  changing the data fetching mechanisms. Like this is, this is kind of the, the, the tension, the feeling, and in a sense, why, um, stuff
[01:28:48]  hasn't, you know, you know, like quite clicked always for people when it comes to like pitching them, building their apps with RSCs or whatever it's
[01:28:58] , it's doable, but you need the, the other patterns there that haven't been fleshed out. Is this, is this, is this one of Sunil's
[01:29:11]  posts about, uh, how we all need to do more stateful backends? I mean, let me, let me pull it up here. The next evolution is
[01:29:31]  serverless is stateful and enable metric, a ton of use cases we've ignored for the last decade plus, because they didn't enter serverless model or were otherwise hard
[01:29:40]  to expense them. I've been waiting for this post for a while, Gary claimed, but it's silly. The model is now inevitable. I'll try to recognize
[01:29:45]  one big idea, blah, blah, blah, blah, extra related use cases. And I like the best about it is that it's not the right. You can build
[01:29:51]  those things today with party kit. Yeah. I mean, if, if this, I mean, he's using cloudflare will probably because he used to work cloudfl
[01:30:01] are and I'm gathering, he's probably using durable objects with cloudflare. Um, it's, it's like a very specific solution that only they had. I
[01:30:08] , we had, me and Nikhil had some fun with that. Um, when we were playing with, uh, the first version of solid start, I, I
[01:30:15]  think it's interesting. I, it's always hard. Cause I, I never feel comfortable pushing infrastructure costs on people. Like as a framework design, same reason. I
[01:30:22]  don't like service side caches. Right. But if we're going here, yes, this is a very, this is a place that could be optimized the crap out
[01:30:33]  of, because suddenly you don't need diffing anymore. It becomes VMware told you view center data center. It becomes a, uh, signals problem. Um, and
[01:30:42]  people tend to just keep on, you know, when in doubt, start with a different solution until you can do a path solution. So yeah, I think this is a
[01:30:52]  zone that could improve significantly from how it is today. Anyway. Um, let's, let's get back to business here. Um, I mean, the problem is
[01:31:15]  there's always going to be both. I, the, the, there's always ephemeral state in the client. Um, and if you push to the server,
[01:31:23]  like, it's so funny. We started the stream again, where people are talking about offline first and we're seeing the opposite, right? I'm convinced. And
[01:31:31]  I think most people should be convinced that the state you push closest to the client is always going to give you the better user experience, like generally speaking, because you can be
[01:31:41]  more interactive. You can deal with that. I just think that state, uh, stateful servers do open up more, but generally speaking, you want to push as much
[01:31:49]  state to the client as possible for interactive reasons. It's the non-interactive stuff that you don't really care that much. It's tricky. Like, even
[01:32:04]  if we get to a place. Yeah. I do see like, it's hard because data distribution becomes a challenge as well. There's a lot of privacy considerations with using
[01:32:16]  edge. I don't want to derail going too far down that. But yeah, I mean, I think if you put stateful on the table, it changes
[01:32:32]  the math considerably. Um, almost all solutions sitting here are doing that. So, okay. If I go back to all here, how many of you watched that original
[01:32:50]  talk introducing zero server commodes? Uh, Lauren Tan, Danny Abramoff, um, they went through and they show off this like, this like notes demo. It
[01:33:00]  was like Christmas 2020 or something. So they, they show like server components and when, and this example, um, was, was always an inspiration to us working on
[01:33:19]  it. Cause it like, this is how we vetted our, uh, solids hybrid island solution. We built kind of like a server component version of this and solid,
[01:33:29]  um, when we were working on our hybrid islands. And I think it was reasonably small. Um, the initial page load. I, uh, I, I can
[01:33:38] 't remember the exact, we never got search working. Uh, there's some interesting things that are really cool from this demo where like they, they have searched the, they
[01:33:47]  show off that you can like go in here and then like basically not lose the client components when the server components reload. I'm probably not going to find it right now
[01:33:57] , but they, they did something where they like expanded it and then typed into the search. And then it would like essential. Okay. Yeah. If you haven't seen
[01:34:11]  this, this talk or this thing, it's probably, it's, it's one of the oldest. I understand it's under legacy, which is hilarious. Like
[01:34:22]  the, the, the, this demo was also not when it came out, but a year later, when server components finally clicked for me, I opened, I opened the
[01:34:35]  network tab and, um, yeah, I opened the network tab and I saw that when he, when they added a new note, you can see this moment on stream
[01:34:53] , I think from one of my pre-streams, he did a post and it returned the next page, essentially like you added the, the, the data and then
[01:35:04]  it returned the next page, um, of, of, of data. Like, cause when this one, when you add a new note, it goes in and this
[01:35:11]  demo talks about how it doesn't pull in the, the, you know, marked markdown editor until you go to the editor page and it shows how you never need the
[01:35:22]  date formatter, you know, right. And yeah, I mean, it was, it was, it was definitely like a good demo to say, Hey, we
[01:35:37]  can do all this stuff with, with, with RSCs. So this is definitely one way to go. Right. We, as we talked about here, we're
[01:35:50]  trying to get to another sweet spot on this RSC side of things where we can essentially, um, like you, the caching is happening on the server. And
[01:36:00]  I, I think, I think the challenge for me is, and it's something only really realized in the last, like really realized in the last few months is RSC
[01:36:11] s aren't, they might be what comes after GraphQL, but they aren't a replacement for GraphQL. They're not even a replacement for TRPC with React
[01:36:23]  query. Once we went down past the stage, we aren't dealing with equivalent solutions. They're kind of equivalent in that, like, you know, you solve waterfalls
[01:36:34] , but they're not actually the, the same, how should I put it? Like they're not doing the same things, which means that there's trade-offs or
[01:36:45]  repercussions of it. I was curious about this topic on server components, because I've been having a hard time. I was what I've been one of the biggest supporters
[01:36:52]  of server components, very bullish, very positive on server components. The last couple of years I've been implementing prototypes and all that. And some time when I like got
[01:36:59]  more in practice working through it the last, you know, few weeks, I suddenly got very, um, how should I put it? A lot less optimistic about their value
[01:37:08] . Part of it was when I looked at HTML partials and I spent a lot of time thinking here about essentially what is happening. You know, like, first of all
[01:37:16] , when you're serializing markup versus serializing data, usually the markup's larger, not always, but usually, right? So like you're, you're
[01:37:24]  doing the same thing, but just sending more data over the wire where you really save arguably is the code size because you didn't need to send the code the one time
[01:37:31]  to generate it, but you pay that on every request. And this was an old complaint people made about server components. I was like, who cares, faster hydration, all
[01:37:38]  this kind of stuff. But then I thought they were saving the serialization costs, but RSCs don't. And actually solving it for islands or MPAs is
[01:37:46]  actually pretty easy to solve the, the serialization, uh, whether you're using islands or even quick, but once even quick becomes a single page app, it loses
[01:37:55]  that serialization benefit. And I think that once I realized that servers didn't solve the serialization problem and that the mutations call for two different stories, like they didn't
[01:38:07]  actually replace GraphQL. I started going like, maybe, maybe we've been just focusing on this so long, so much, maybe too much. And I, I put
[01:38:16]  a poll out there. I was like, Hey people, why, what, what's the big value? Why do I want server components? Have everything weird. Yeah
[01:38:35] . The drummer of my old band, um, Mr. Solid. Thanks Duncan. Um, no, I, the funniest thing is I never got disillusioned
[01:38:49]  with presumability. I just thought that it was an optimization stage because like, I always knew resume ability didn't solve the serialization problem. So I was like, okay
[01:39:00] , we can just not hydrate sweet. And I've been, I came to that conclusion about a year or a bit ago. And I was just like, you know
[01:39:09]  what we can have, like, resume ability can just improve the client components that we do have. Like it's just, it's just the thing. Right. But
[01:39:19] , and it is probably possible to solve the serialization problem with RCs with a lot of complication, you know, but it's like, if you haven't solved
[01:39:28]  that fundamental problem, why are we doing this? Like it doesn't actually solve the performance problem. Um, it improves hydration slightly, but not as much as improving the
[01:39:42]  serialization. We've seen that like Astro out hydrates, any of the MPA frameworks out hydrate RSCs by, by more of a measure than
[01:39:52]  the RSCs out, uh, be hydrate, um, normal JavaScript frameworks. So like the thing is, if you, if you aren't solving the actual problem
[01:40:06] , what's the point? Like from a technical standpoint, I had to, I had to re revalidate things and I had to see what people cared about.
[01:40:12]  What were the problems people felt with the problems. I know I have my, my technical performance hat on, but what, what do people actually care about or feel like
[01:40:21]  the benefits are? Purely DX, right? That's what you're saying. But I mean, is the DX of server components actually better? Okay. We'll get
[01:40:35]  there in a second. reduce bundle slides. Like I chose this poll on purpose because I was fishing a little bit. Yeah. Thank you. And part of this is
[01:40:57]  everyone react bundled, all of the server component esque stuff all in one release that no one actually knows what server components did. I almost wanted to make the stream like
[01:41:11]  what server components really solve and what they, what people think they solve, right? Because first of all, this is a pretty even, uh, split. People want to
[01:41:20]  remove client waterfalls and the be fair remix already removes the majority of client waterfalls. There's people brought up awkwardnesses in the pattern because of, like getting
[01:41:35]  the data in other loaders and all this kind of stuff, you know, like, and I didn't even think about them because technically solids clone of remix doesn't have
[01:41:44]  remixes problems, right? So like, it's not inherent, it might be inherent to remix solution, but not to the zone at all. So I didn't even
[01:41:51]  realize that, but so I'm just going to say remix ask solves this problem. Streaming page load. Everyone's, I talked to people and people were surprised remix did
[01:41:58]  this as well. Like even in the react ecosystem. So again, you don't need server components for suspense or streaming reduced bundle sizes. Well, yes, server components
[01:42:10]  do deliver that. But do you know what else delivers that? Use Svelte, use Preact, use Solid to a certain degree. Scale consideration when you get to
[01:42:20]  a certain size. But if your baseline that you're starting at is four or five times smaller, the size of the components themselves, like it's, it's,
[01:42:30]  it's the big libraries and stuff, the things that you can't avoid that are probably going to bog you down eventually anyways. So you can say now I can put them
[01:42:36]  on the server. Well, you probably could have put them on the server anyways. We'll, we'll, we'll, we'll look at that, you know
[01:42:43] , a bit in a minute, but like, don't get me wrong. The, these are real wins. It's just like, how much do they matter and how
[01:42:51]  much, how easy is it to accomplish these things other ways? Right. But the thing I don't have here is like hydration reduction, right? So resumability or
[01:43:00]  something could fall into that category. But I, I wanted to focus on these ones specifically for that. Cause really as expected, I thought the new authoring experience would
[01:43:09]  be relatively high. Although people seem to be more concerned with the waterfalls, but I want to talk about that authoring experience. Yeah. Right. Yeah. But
[01:43:34]  component level loaders and quick it's the relay thing again, right? Like, yeah, I, I, and I was talking to the guy from, uh, the
[01:43:43]  WhatsApp framework, really cool framework, uh, react one, uh, rackets. Yeah. Yeah. And he was like telling me about something similar. And I, I
[01:43:51]  was thinking about two and to be fair, when we first made create route data, um, install start, uh, uh, let's see a year and a half
[01:43:59] , two years ago, before we did the beta release, we did it like the way quick ended up doing it. I just looked at it and I'm like, Oh
[01:44:09]  my God, I can't follow what's going on. Like, because we could just like anywhere, just be like, add data to the router. And it got automatically
[01:44:19]  hoisted and did the whole thing. And I was just like, I thought use, I thought server dollar sign was confusing enough, you know, and I kept on
[01:44:26]  bringing up a point that now I think is probably mute was that like conditionally rendered components could add to this without them ever being rendered. But I think that's kind of
[01:44:36] , you should consider that the case to be anyways. Right. But yeah, compiler based solutions, I consider this on the same avenue as relay. Right. I still think
[01:44:46]  this is a, this is always the choice you can make after the fact core mechanism works, which is hoisting, then decide how you can make the magic work
[01:44:54] . But yes, there, this is a perfect example of other ways to remove client waterfalls. Right. It depends what a contest is. Is it better if I
[01:45:18]  do not need to be maintaining API for the sake of a client or rather an API code instead of HD endpoints? Yeah, we'll get there. The, the,
[01:45:24]  the, what I'm trying to get at is a lot of people, a lot of the advantages they gave me about authoring experience, I was kind of going down here
[01:45:29]  and talking to people and I'd be like, well, can't you just use use server instead of use client to do that? Right. Like, let's see
[01:45:39]  if I can go in here and look at some of the chat, new unified model for architecture UI development. And I was like, is it unified? It's kind
[01:45:46]  of like client and server still it's like MPA thing. Um, or not the number cell. It's so funny. And anyone who's ever worked at Netl
[01:45:58] ify and and or AWS or cloudflare, basically any provider that's not for sale are always have like such a, like next JS, um, skew on
[01:46:10]  it. Cause it is actually really difficult. They always act like it's not, but it's actually difficult to get stuff working outside of your cell and to have the same
[01:46:19]  functionality. It's just funny how you can't post, like, I was not talking about this. Um, yeah. Level composition. We haven't said before. Yeah
[01:46:29] . I look at this interaction with Ryan Florence. I love this one. I guess new option because it brings a level of company I've seen before. Right. But
[01:46:35]  on the US side, we can keep a hundred percent running on the server, blah, blah, blah, blah, blah. I'd like to see this more. I
[01:46:38] 've always looked at this as a technical perspective. I asked him, I'd argue server actions might actually be more impactful on the composition than SCs. React components are always
[01:46:45]  composable, right? Yeah. Server action are a bigger deal. I still want all my loading at the nested route section level. Being RC or not doesn't really
[01:46:52]  change anything. And composing components that load their own data is mostly performance in an RC. So me and my man, Ryan, are on the same page here.
[01:47:01]  Right. So like I, I, I think I just, maybe it's just easier to show people what I'm talking about. Right. But you can have a full
[01:47:19]  stack component. As long as you have server functions, you don't actually need server components. The question is, do you need to render that markup on the server?
[01:47:27]  The benefit of rendering the markup on the server is you don't need the JS code in the server. It's a good enhancement, but if you base your whole
[01:47:33]  architecture off it, you also cut off all the people doing CSR. Okay. I know server components don't have to only run on the server, but let's,
[01:47:46]  they're designed to run across two different environments. You don't, they don't have to. This original react server component notes demo that I'm talking about here is
[01:47:53]  has no SSR in it. It's completely client side. I like looking at it though, because even in the simple example, you can start seeing, not this,
[01:48:02]  let's go to the source folder, kind of seeing like how the app breaks apart into the different pieces. You know, and you, they don't have it here anymore
[01:48:11] . They used to have like dot client or whatever in the original, when it was originally posted, they've updated this to be the latest. Okay. So this one
[01:48:20]  is a server component and then sidebar note is a client component. Actually, no, it's a shared component. Sidebar note. No, that one's a,
[01:48:29]  and there's the client component. This issue, this has been cleaned up a decent amount. This example, I actually had some fun because I thought, what if I
[01:48:40]  just remade this notes demo in the latest solid start? Because we, we kind of got really hooked on this whole, uh, um, uh, where, where is
[01:48:52]  it? Uh, this whole authoring experience question. And I was like, okay, let's, let's do something else. But let's, let's, let
[01:49:02] 's take a look at this. how do i do come out as reading writing cookies i mean with server functions if if if if if if if if you wanted to right
[01:49:30]  like you're still going back to the server i guess the question is waterfalls but do waterfalls matter when the what you're doing is independent okay let's just let
[01:49:45] 's just do this let's not start demo let's just go solid start let's let's get the latest um remind me later let's go solid start i'm so
[01:49:56]  out of date i'm probably on like what version of solid start am i on here let's just pull it up okay but uh how do i put this parasocial the
[01:50:19]  clients involved because the client's going back to the server to do this even with server components you're still going to the server i guess there's an argument that the mental
[01:50:36]  model is easier if you go like this component is server versus saying i'm calling an api endpoint or something but you're you're still going to the right right so
[01:50:53]  i i i was i was like okay let's let's let's do this because it's funny i i was i wanted to solid start and let's let's let's
[01:51:05]  close it's funny the the old cli okay delete that okay so i had an example here in this repo let's close some extra stuff we don't need and it
[01:51:20]  was this notes example and we built it with server components and our solids version of server components and the layouts are a little bit fun because like the way the refresh had the
[01:51:30]  work and the kill was like co-locating it but he was using a convention i think he was putting let's see here in the components there's like sidebar note
[01:51:40]  dot client so i went through and kind of rebuilt this example he also added a dark mode thing for fun and i was like okay this seems fine and and i was like
[01:51:52]  okay let's let's remake this um package let's see where's my example i i went and remade notes example and let's look at how the notes example looks like
[01:52:03]  in our source folder we have our entry server entry client standard solid startup um then we have a router and our root component and our root in the router is this layout which is
[01:52:15]  essentially just um the header and then it has a search field in it it has edit button from pretty new as a suspense around a note list for the sidebar and then
[01:52:25]  it has suspense for the main uh content that we're um setting through um looks like i have a type error uh this is probably my bad anyway type error hopefully won't cause
[01:52:39]  the end of the day we also have a loader function for the root component um i just did this so i didn't have to like put another layout in here so
[01:52:48]  i flattened it out we have a 404 page it just does a redirect and then we have a home page which shows nothing we have a new page which loads our note
[01:52:57]  editor and then when you go to specific notes there's the in the default view which is a preview page where you can get the note you know load the note in show it
[01:53:07]  and then we have an edit page um where we can show our note editor and component wise uh there's there's a few components the only thing you're going to notice
[01:53:24]  is our routes have these export route loaders kind of like remix they call get note and then we we use them inside our components like this kind of a bit of a
[01:53:34]  duplication thing but generally speaking this is all part of stuff exposed from this um uh yeah let's pm pmi while we're waiting um exposed from this api i call
[01:53:48]  it but it's really just a bunch of server functions we have a server function that gets the notes um and uses a search text query we have a server function that gets
[01:53:59]  an individual note we have a server function that gets a note in uh what i call preview mode which uses marked uh to to show the um the uh the uh markup and
[01:54:12]  then we have a bunch of actions one to save the note and one to delete the note and these are using unstorage just as the back end the original demo used s
[01:54:24] qlite but essentially um you know like if when when we succeed at saving we do a redirect um this is this should feel similar to you remix style the biggest difference is
[01:54:42]  that the actions are essentially um and the and the cache functions these should be familiar from react are just perfectly tight functions you just import them into your components so like if we
[01:54:55] 're in the note editor and we press save um you can go use submission to know if you're saving and then you just find a form here and go action save note with
[01:55:05]  this id and then it basically appends the id to the front of it and then gives you all the form data so that's why if you notice the save function here
[01:55:16]  takes an id number and then takes the form data that you're going to save so like it's just it's kind of you know you just declare a bunch of server functions
[01:55:26]  this is all client side there's no server components or anything um and the truth of the matter is i could actually go in here and turn ssr off and it would
[01:55:35]  still work with the same patterns because um it's completely isomorphic um it has nothing to do with ssr we just defined endpoints that happen to do our
[01:55:46]  data uh processing for us right we already covered this yes yeah so this is pan stack isn't it like i i didn't show it here but if i go here on this
[01:55:59]  redirect and if we return in our redirect revalidate we can sit some keys and we can do something like revalidate uh what are we going to read
[01:56:10]  validate um post or sorry what what did i call it um sorry let's get yeah let's let's pretend like when we update the one note we go get note and we
[01:56:24]  go key for the id or something so we can we have these nice helpers on our cache functions where you can get a specific key for any and you just it's
[01:56:35]  the same arguments as the original function to get the they get the key you can also get like the top level key which is just the name which invalidates everything in that collection
[01:56:45]  you can put strings you can make an array of strings our default behavior here though is remix style so it's just going to it's just going to refresh all the data
[01:56:56]  for the particular route the re-read directory but you can set it by keys it's it is basically tan stack right except with server functions so you can basically fetch it and
[01:57:09]  you call in your components the component streams in right so going back to um our example here so ppm filter i'm gonna go let's go filter notes let's build
[01:57:25]  it right now okay um i'm not gonna do dev mode hopefully it all builds properly it's been a while um that i've used this computer um and let's start
[01:57:38]  it again three thousand um like this is this is more or less tan stack with server components you there's there's there's a there's a there's a and it's
[01:57:51]  kind of like remix too because we hoist the the the stuff into the pages right as i showed you when i went to where is it um routes by going to like
[01:58:03]  notes preview we both load it as a preload this helps when when you do hover over and then we also load it and because these use the same cache key automatically like react
[01:58:16]  it's based on the arguments it just uses the exact same thing and it's not a long-lived cache in fact the cache only lives the length of the request on the
[01:58:23]  server and on the client it lasts five seconds just long enough that it dedupes while it's like doing the navigation okay so fairly easy setup you set up a key
[01:58:32]  like if you noticed on my apis here they say note preview notes or whatever like or note like we just set a key string for for these cache apis and we're
[01:58:43]  off the race the funny thing is rscs don't save you from having to write these cache apis if you go next they have like an unstable cache it's it
[01:58:50] 's very similar to this the only difference here is this is not like a persistent server cache you don't need a kv you don't need to go buy another thing
[01:58:59]  off netlify or versell or whatever this is literally just tan stack okay yeah it's kind of trpc but react query but way easier right because as i mentioned
[01:59:16]  before like i've shown this before in the other previous streams but like this git note preview is fully typed and it just did it from the import like git note preview id
[01:59:27]  number promise of node or undefined and then like like there's a reason when i did the uh the uh the edit here where was it in this note editor like
[01:59:40]  in save note with props id because when i do this what i get back is something that just takes form data if i didn't put this with props id and tried to pass
[01:59:51]  it to the action it's going to complain at me because it's going to be like hey this this takes other arguments you know not just form data so like it's fully
[02:00:00]  typed you can also not put in a form you can just call save note if you use action like you use the use action hook and then you can actually just call it
[02:00:07]  with the arguments so like it's it works you know you know you can pretend this is like mutation uh in tan stack uh wrapping with action it's basically this so why why
[02:00:21]  am i showing you this well let's go actually i'm going to open in a new incognito tab let's go low close 3000 we haven't created any notes
[02:00:35]  yet right so um let's do that let's just make like a new note let's go like hello world and actually as you can tell this is uh this is actually marked
[02:00:48]  down so if i go like it's actually um it's actually like you know thing and then when we save we get it here and we can actually see the the preview
[02:01:00]  doesn't have the markdown processed here but we can see this it's server rendered we that state is client state so like when we refresh the page we don't remember that
[02:01:08]  we're expanded it's not a big deal right and then we can do like a let me add one more note so we can like see stuff so i can go hello
[02:01:16]  and how about different note and i'm gonna do that and you know like as you expect this state expanded while i did this redirect and you know this is typical stuff and if
[02:01:30]  i search you know this is a client app you would never expect a client app like when you when you search for it to lose the client state so like there's nothing
[02:01:39]  special here. This is just your typical app, right? Actually, I'm not. We'll get there in a minute. Let's look at what's going on here
[02:01:58] . I showed you guys the code. You might have kind of slipped over it, but let's look back at this demo example again. Let's go back to this
[02:02:15]  and go, what are we trying to solve here? Well, I was talking about the authoring experience. That authoring experience is not bad. I'm going to say
[02:02:28]  simpler than tan stack plus trpc is pretty good. You don't need to know about server components or anything. You need to know that you can make server functions
[02:02:39]  and you need to know about cache and APIs and action APIs. You do need to know, similar to tan stack where you have mutation and query. You need to know about
[02:02:49]  that. As you guys know, this is solid. It's all streaming with suspense and stuff. You don't have to do everything. Streaming is automatic. When
[02:02:58]  you load the page, it'll stream. This demo is not slow enough to see it, but just trust me. I've done it a billion times. Streaming works
[02:03:05] , right? I used to love Falcor. Hey, Prime. But I didn't just get rated or anything crazy like that. No. Okay. But let's
[02:03:22]  go to what else can we do here? So authoring experience, pretty good. Reasonable. If anything, just like a slight improvement of what we've done before
[02:03:35] . Let's talk about client waterfalls, maybe. Yeah, let's do that one. So let's go back here. Okay. So let's open the network tab
[02:03:46] . Now, if I go to the network tab and I put it on fetch and stuff, we're going to see, obviously, when I load the page, nothing gets
[02:03:56]  fetched because it's also rendered in the page, classic SSR. And when I navigate, oh, we had the fetch, the specific note. So we see
[02:04:05]  our payload. Great Sarah Bell stuff working. So in fact, we're pre-fetching. You might notice it actually showing up before I actually click on it.
[02:04:16]  So, you know, that's great. Now, you guys expect that. How about if I go in here and I edit this and press done? What do you
[02:04:30]  expect to happen? I'm going to press done and you might expect, because sorry, we're right here. We have four of these right now. Let's actually just
[02:04:39]  clear them all out, right? You might expect it to do a post and then a get kind of like what you usually see. But what, no, it redirect
[02:04:47] ed to a different page, the non-edit page. And there's only one thing in here and it's a post, but, oh, it's actually returning
[02:04:59]  the data from the next page in here. So it's not a post than a get. It's actually doing it all as a single post and back. And you
[02:05:08] 're like, okay, well, it's a little bit different because you're not even on the same page. You're actually on the next page and it fetched the
[02:05:15]  data for the page that it was going to head to. How can it do that? Well, it knows what data to load from the data loading pattern for any route in
[02:05:23]  your app. And it knows what keys you need to invalidate because it works like CanStack. So why can't we just fetch exactly the data we need for the
[02:05:33]  next page on any mutation without doing a back and forth to the server? No, it, this is a single flight mutation. I'm calling it where essentially it's
[02:05:55]  even better than that because this data is a little bit complicated. What you've seen back, but what it actually does is it goes to the page, does the action
[02:06:02]  promise out, and then it immediately returned and then it runs the next page route, but just the data only. But before that data resolves, it's, it starts
[02:06:13]  responding. And then each resource that it finds, well, it finds a promise from the cache function based on the keys or whatever. And then it streams those promises over
[02:06:22]  the wire as it responds. So it's not just waiting for the next page data before it responds. It's actually streaming the next page's data while client side routing.
[02:06:34]  Like does, I do, I might have like Scala draw this for you guys. Right? It all does this thing. RSCs do this. This is
[02:06:44]  when I, I was sold on RSCs when I saw them return JSX on the next page. And it's kind of like an old, uh, you know
[02:06:53] , you know, like the old, you know, post to a form return to HTML back. Well, who says you can't just stream back data, right?
[02:07:02]  Right, like I can turn this behavior off and if I slow down my network, like this will be literally twice as fast because instead of doing the post, having it come
[02:07:13]  back and then doing the get and having it come back, we just do it in one flight, right? And we do this because we've combined the knowledge of both
[02:07:24]  key-based invalidation and the route information. So we can basically mimic, like we can know if we only want to care about invalidating certain keys and the top router
[02:07:36]  section is already on the page, we know we don't actually have to fetch the data for the other keys like that aren't being invalidated, even if they're used
[02:07:47]  in the section that changes because we already have that data on the page. So we can actually diff the keys and fetch only the new data that's not yet shown on
[02:07:56]  the page and anything that needs to be invalidated. So, okay, like I came up with a bunch of scenarios when I was trying to think of how to explain
[02:08:15]  this, but like, yeah, I mean, what do I ScalaDraw here to explain? Like, yeah, so it's, yeah, it's RSC
[02:08:30] s, but you're not sending markup. Yeah, yeah, it's kind of like that, right? I didn't need to introduce a new concept to you
[02:08:36] . And it's streamed, right? So, like, think about our example. Let's try and let's draw our typical, like, lines, right?
[02:08:49]  CV, right? And, you know, you know what I mean? I'm, I'm, this is the classic, like, client, server, you know,
[02:09:04]  back and forth, right? How does it know the next route? I already showed you. When we went into our, into our action here, you know, into
[02:09:22]  our API, and we did our save, when it's saved, it said redirect to the next route, right? It's, it's part of our protocol.
[02:09:33]  So we know on the server while we're saving this thing in KV, where it's going to. And you can, you can also tell it what keys to invalid
[02:09:42] ate. Because I made the whole protocol work over HTTP, what's really cool is, because you can actually not even have server functions. And obviously, like, single flight
[02:09:51] 's not going to work in that case, because it's, like, you're going from the client. In this case, all these protocols work for client, like
[02:09:57] , for client only and server function, because we just talk and request response, right? And then we use headers as our mechanism for identifying key invalidation. So, like
[02:10:09] , you could even have a server-side key here that you could invalidate to, like, cache could have an option that's, like, on the server, stored
[02:10:16]  in a KV as well. Like, you could have multi-layers of cache, whatever. But, like, essentially, you're telling it to redirect,
[02:10:24]  so we know. Right? It's, it's, it's, it's, it's, it's like, it's, yeah, it's, it's
[02:10:34]  basically, we know. So, yeah, I mean, typically, we talked about this, where you'll, okay, let's get rid of the double arrows here.
[02:10:45]  I need this. Okay. So, typically, what you'll do is, you'll be like, let's go here. You'll be like, save note.
[02:10:59]  Right? And then, you know, you'll post it. So, I don't even know. Post, save. Right? And then, there'll be some time
[02:11:21]  over here, where you're like, saving in the database. Right? Let's, let's make this a region so we can see it. Let's move this
[02:11:29]  over here. Like this. And let's make this, get a box here, here. Right? we're saving. We're saving. Right? And then when
[02:11:43]  you're done saving, generally, like most of the query styles, they return like a, success. Go back to white. Success. And then at this point,
[02:11:59]  the router decides to, that it needs to reload or whatever. So the client does something here, which is like more or less like, do, do like the clients,
[02:12:09]  like, this is, this is just how client side stuff works. Decide, decide where to go. Okay. Okay. So let's go like this. Okay
[02:12:25] . Decide where to go. Right. And then based on that, it goes, okay. Get data or get like, get our note or whatever with the ID
[02:12:44]  or whatever. Right. And then. get no from DB. Read, read database. And then luckily in modern frameworks, we have like suspense and stuff to handle like
[02:13:13]  the asynchronicity. Like there's also code loading and stuff at this time. And then finally we're like render. Right. This is, this is typical
[02:13:23]  hand stack style. Right. but. Zoom out a little bit. So awkward sometimes. Okay. What, what I, what this model that I, or that I
[02:13:43] 'm showing does is. Thank you. Actually, it's more like that. Kind of like that. Truthfully, it's like, it's, it's
[02:14:47]  detached this from that. It's like, because there's suspense involved here while it's waiting on the promise that's being streamed, but it's kind of like
[02:15:02] , it's kind of like, it's kind of like this. Like, it's not going to be complete until the data finishes, but it's kind of like
[02:15:13]  this, because it starts streaming the response back once it realizes that it's done saving and decides where to go. Like, based on your action, it's like that
[02:15:23] . No, that's the thing. Pages and actions, they're only as tightly coupled as, yes. I mean, to be fair, actions have been tightly
[02:15:43]  coupled by remix, have been tightly coupled by React. Like, technically, server functions can do anything. But if you think about it, in React, when you perform
[02:15:52]  an action, you do the same, like, let me go to next.js. Next. Server actions. The different, they themselves aren't like a special URL.
[02:16:04]  You don't need to make like them post, you know, a specific page. But yes, they are conceptually, like, if we look here, they're
[02:16:10]  going to, they're going to be like client component, blah, blah, blah, behavior, blah, blah, blah, forms, right? Put the form in.
[02:16:18]  We already talked about forms. You saw the, my example used a form, you form status. This is kind of like use submission. We also do our optimistic updates that
[02:16:26]  way. Yeah. Do the same thing. Nested. Did they actually. revalidating data, see, they have this revalidating path, re
[02:16:40] validate tag. So we put those on the response headers, but similar idea, redirecting, return, redirect. Like it's very similar to the server action component
[02:16:50] . Like this isn't actually that different from reacts server action model in terms of like the redirects, but the, the cool part. Right. These aren't designed to
[02:17:04]  be generic APIs. They're different than API routes. This is, this is, but this is true for next JS as well. These are RPC calls. Yeah
[02:17:16] . And if you want to see that the to do MVC example does that in our repo where we just update just the to do's. I was thinking, I
[02:17:26]  was thinking of making a demo where I had like four tables on like four to do lists and then just each one updated only sent the data for the specific to do lists that
[02:17:33]  you updated. You know, cause you know, cause you can, you can, you can, you can, you can just do that because it's all key base
[02:17:39] . You can be able to, you know what I mean? Yeah. I mean, we, it's remix with fine-grained invalidation, but it's
[02:17:52]  also single flight mutation like RSCs and I don't think the developer experience is any worse than using tan stack with TRPC. In fact, I think we've
[02:18:04]  improved the experience. Right? So like, yeah, I mean, it's kind of, this is kind of cool because like, essentially you can actually respond right as
[02:18:22]  soon as you're done data and you're actually stream it in. So like you're, you're actually, um, saving a significant amount, like depending on how long
[02:18:31]  the database takes, maybe the database is pretty fast, but it's not, it's not even waiting for this. You're basically redoing the initial stream in a
[02:18:41]  data, um, in a sense, right? Like if you compare like, yeah. So if we're, if we're, if we're looking at, um,
[02:18:54]  our, our list here, we've removed client waterfalls as well as react server components, remove client waterfalls, not just on creation, but on, um, mutation
[02:19:06] . And also we've done it more granularly, right? The react, the react server components have to render the whole tree. We w we are just grabbing the
[02:19:17]  exact data that we need when we need it. So yeah. Um, yes, yes, yes. Let's talk about bundle sizes, shall we? Or do you guys
[02:19:29]  have more questions about this? Yes, the, the edit page did download the markdown live to show the preview before saving. Yes, it did. So yeah,
[02:19:48]  this is not, this is in the realm of TRPC. This isn't for generic APIs. This is for you living in this zone, right? But so are
[02:20:00] , are RSCs like we're living in the same zone here. So let's, let's, let's continue in a sense. I think reacts flight, that
[02:20:09]  the thing they did before RSCs was probably kind of like this. Right. But you know, but the difference here is I think other pieces might've evolved at
[02:20:19]  the same time. We have tools to make the DX nicer. So let's, let's, let's, let's continue with our, our demo here for a second
[02:20:27] . Let's, let's change our network instead of looking at batch XSR, let's look at JavaScript. Let's go back home and let's refresh the
[02:20:36]  page. Okay. And let's disable cache too, cause we need to do that. Okay. Let's go. So this page loads 29.4 kilobytes
[02:20:46]  of JavaScript. It is more than I would hope. I'm, I, you guys might remember back in the day, I was showing like 15 kilobyte, um
[02:20:59] , hacker news demos. And I'm going to tell you guys right now, they're more like 25 kilobytes on the latest version of Solid Start, which is a
[02:21:07]  significant improve, uh, size increase because, well, adding link preloads, adding a bunch of stuff to the router, adding serialized, uh, uh,
[02:21:19]  Sarah Bell deserialization. Adding, uh, uh, you know, a few stuff of these things added, uh, probably got a little bit bigger too, tiny
[02:21:29]  bit, not much, but adding all the stuff. Um, this actually uses stores too, which you, you know, like the, there's a few things here that
[02:21:39]  kind of got pulled in because of these more advanced solutions. that basically increases the bundle size about eight kilobytes. So just take that where, where, where,
[02:21:50]  where it's at. Um, I'm, I'm not stoked about it, but given the power of what we can do with the serializer and stuff, it's
[02:21:59]  just where we are. We're at, you can choose not to use any of these features. Don't use server functions and you don't need this extra serialization.
[02:22:05]  It all tree shakes beautifully. If you get Solid Start bare example, it's five kilobytes. I'm just saying in our new reality, this is just where
[02:22:13]  we're at. Right. Yeah. I mean, and the 13 kilobytes movie demo was, was using islands and server component type stuff. This is not using
[02:22:30]  server components. This is just full client side rendered. I didn't change my paradigm stuff. Right. Like the server component movies demo. I had to be like,
[02:22:42]  use client. And I, you know, you had to do the whole server component dance. This, I told you I can turn off SSR and it's like
[02:22:50] , yeah, now, so this is where we sit here, but you know, you get cool stuff. Like if I hover over this, we're going to see,
[02:23:04]  uh, we're going to see some more JavaScript load. In fact, this 1.2 kilobytes loaded for the preview page. So I'm going to click
[02:23:13]  and go to this preview page. Right. So yeah, we did definitely like. That's essentially just adding the ability to see this page. Right? So we didn
[02:23:27] 't load marked here, even though it is. Well, let me go here. I'm seeing mark down, but I'm not seeing marked in the browser. I didn
[02:23:34] 't actually load marked. If you want to see marked, I have to go to edit. In fact, if I hover over edit, you'll see that we just downloaded
[02:23:41]  another 11.9 kilobytes. This is where the big one came and there's actually a date formatter here. That date formatter never came to the browser at
[02:23:52]  all in this example. So yeah, when we go to the editor, we need the editor, we need marked in the browser. But until we get to that point
[02:23:59] , we didn't load marked. Um, and so it's all code split. And how did I do that? Well, I showed you guys at the beginning. It
[02:24:08] 's because, I mean, these are sort of functions. I can just make APIs for it. Right. I was just like, okay, marked. I just made get
[02:24:15]  notes and, or get note and get no preview. Now you might be like, well, I don't want to do that, but like, that's fair.
[02:24:23]  Why am I serving it from separate API? But making API routes is trivial in this approach. Right. And the other thing to consider is that that is what you're doing
[02:24:36]  with server components. You are making a different API route. You, like you, you made a different component, right. To do it. But as like, like
[02:24:49]  it's, this isn't, it didn't actually save you all that much code because you're still making a second version of it. Like if you look at the
[02:25:00]  setup of this, of this, uh, of this whole thing, like it's pretty simple. We have a couple of routes and then we have like a note editor,
[02:25:13]  which has a few buttons on it. But if you actually look at the component, there is the one that uses marked on the client to stick it in. And
[02:25:24]  then there is, if I look at the preview page, I, I just enter HTML, the, the, the already marked up markdown. Like I'm sure
[02:25:38]  there's cases where server components where, you know, rendering the XML might be better JS. I'm just saying from this basic demo, all the same characteristics of not loading
[02:25:55]  the libraries is true. And you, I can see at a certain scale, um, this could actually get, you know, larger, right. I have to admit
[02:26:10] , I've never seen a 29 kilobyte next JS app, but the essentially. You can make the determination for yourself on bundle size, but no one, this
[02:26:31]  is definitely a reduced bundle size compared to this being built in next JS. Just, just throwing that out there. So I don't know. Um, you guys,
[02:26:56]  like nothing actually replaces graph QL, um, for what it's good at. Right. But if you thought that tan stack query and TRPC was a sweet spot,
[02:27:18]  but you know, it didn't solve all the, the issues here. Um, this, this, this, this could be the type of option as I said,
[02:27:28]  as I said, it does all the stuff and it, it, all it asked of you was to set up. Basically. These cash and action functions that you would have
[02:27:41]  set up with RSCs anyways, but there's no client components. there's no, um, you know, there's, yes, there's no use client
[02:27:53]  and yeah. I don't know. Um, so from the wishlist, you gave me on Twitter a couple of weeks ago, you're giving up on partial hydration
[02:28:14]  in favor of fine green evaluation. I'm just, yeah, the, the tricky part. I, this was one, one, when I was talking about, like,
[02:28:23]  I'm, I'm not giving up on those other solutions. I just needed to, uh, or that space, I just needed to like ask the question of what
[02:28:33]  they're solving. And it, like, you could still combine this with server components. I, I wrote a document a couple weeks ago where I talked about like data,
[02:28:41]  data, unified data loading. Right. Um, it's, it's completely doable. It's just like, I wanted to be happy with the data model, um
[02:28:53] , for when we released solid start, um, 1.0. And I think this is it, it's basically trying to be the pinnacle of, of what
[02:29:05]  we've been doing with remix and tan stack and, and these kinds of experiences. Um, the last piece for me was what I got working this week was single flight
[02:29:17]  mutations, because there's basically nothing on the client waterfall side of things. Or I feel on the dev experience side of things that people could say are a downgrade from saying
[02:29:31] , using something like, like RSCs. Um, so yeah, anyway, um, I don't know. I think that's cool demo. I, I
[02:29:51]  still, I want to just do it one more time to like, cause the thing is you can come, we combine these techniques with, you know, with, with,
[02:30:01]  uh, let's go back to PetchX HR. We combine these and let's open up different, we combine these techniques with our ability to do fine grained
[02:30:13] , right? Like, well, I just love that. It's just that, that single, single post and it fits in. Like we still, I wonder if,
[02:30:21]  yeah, this one does a page redirect, but like, like if I, if I open up like to do MVC. You know, let, let, let
[02:30:33] , let, like to experiment, no, no, uh, example to do MVC. And I'm not going to bother with the production build here. I'm just
[02:30:44]  going to go and dab. Okay. So forgive me for a moment. Cause we're going to get a bunch of stuff, but like, let's go. Hello.
[02:30:59]  You're actually seeing the, the, the single flights here, another, even though technically we're, we're doing the whole list because it's invalidating the to
[02:31:10] -do list. Like it, it's still, you know, if, if I have these, all like these list items all expanded out here, you know, if
[02:31:23]  you go and add another, it's, I mean, it's not impacting these. We're still doing, we're using a store in solid to actually diff the
[02:31:34]  data. So these just gets basically just skipped right away and nothing renders. It's, it's, it's, it's all completely granular updates. Like which one
[02:31:43]  is this let's, let's inspect here. Right. Like another let's what happens when I cross this out. Right. we, so yeah, I mean,
[02:31:55]  it's not, it's not quite graph QL. Um, but like the fact that it's organized by data source, um, lets us, you know, save
[02:32:08]  work when there's multiple of these. Yeah. Jackson single flight. Yeah. I mean, we have all the information, um, with these systems. So yeah,
[02:32:28]  it's, do you want to, do you guys want to see, I, it's actually easier to show it to do MVC demo, right? If,
[02:32:38]  if I go to the network and I, okay. Trying to think of how to do this. Okay. That's fine. Let's go low. Let's go
[02:32:48]  fast 3d so we can like stand ourselves and let's just click this check. It's taking 585 milliseconds roughly to do this update. Right. So two five 87
[02:33:01]  do do five. Right. You're seeing it when it turns purple here, that's when it's doing an optimistic update. Like that's the optimistic update triggering. Right
[02:33:11] . It's like already unclicked it, but you can see it. Right. If I turn off and I, I'm going to have to turn no thr
[02:33:18] ottling here. Cause Vinch, all the Vinch resources are going to go here. But if I go into, uh, to do MVC and I go
[02:33:27]  into, um, app PSX, and I just do a little bit of a single flight equals false. Let's just turn it off. Okay. And the whole page
[02:33:37]  is going to reload. Now let's make sure it's all reloaded. Good. Who has to pass 3g and do the same thing. Let's check it.
[02:33:45]  I mean, I, we're doing a post, we're getting no response. And then we're doing the get for the data. Right. Like you can see
[02:33:59]  it. It's, it's taking, uh, about 1100 milliseconds. It's, it's twice as long here. Like it does impact the snappiness of
[02:34:08]  your app. Um, so to speak it, it's, it's might be minor, but the, you know, the, the network is, is definitely consideration.
[02:34:20]  And I, I haven't increased the, like if I put artificial delays on the data, it's also kind of cool. Cause the, again, the data can
[02:34:28]  like, if you have multiple sources, they can stream in independently as it finishes, as you fetch it. Um, again, I don't have a good example for that
[02:34:36] , but I just, just kind of showing the difference here. Like, let's see how painful slow 3G is. All right. There we go. There's
[02:34:52] , there's, there's slow 3G. Let's. So that was about four seconds. I mean, it's pretty predictable. I'm pretty sure that the
[02:35:01] , the, the Chrome simulation is just like, almost like going to just, let's go back slow 3G. So let's first refresh the page. Cause I don
[02:35:13] 't want to do that. Let's go slow 3G. And then let's do it again. Right. So, yeah, you know, I, I'm
[02:35:26]  maybe I'm too much of a performance nut, but it's, it's pretty cool. When you can double the speed of any process on your page simply by like,
[02:35:36]  this is what you would do anyways, just we got lazy, right. When we got a query cache, we didn't want to deal with caches. And,
[02:35:43]  you know, the fact that it even works through redirects is really cool as well. Right. So, yeah. We're going to call name flight. Yeah.
[02:36:12]  But aren't we past updates update, the downside update update, already thinking? I mean, optimistic updates are cool in that you get immediate responsiveness. If you ever want
[02:36:24]  to see the Ryan Florence makes like some of the best demos around optimistic updates, because then you're not waiting. Like you get a, a Kanban board where you drag
[02:36:32]  items between lists and with optimistic updates, you don't feel like you're like dragging and you're like, okay. Like that experience wouldn't be possible without optimistic updates
[02:36:44]  in a sense. Because like, if you want drag and drop the work, you don't want to like, like have it like, oh, I'm intending to
[02:36:53]  drop it there. Let's wait for it. Okay. Now I'm going to move this one here. Let's wait for it. Like picture getting stunted by that
[02:36:59] . Um, it's better for localized updates. I, one cool thing about the pattern with solid is cause you just import the action. Technically it's not through the
[02:37:07]  component tree. You can literally use submission in any component on the page and then it can like tie into the optimistic updates, even if it's not part of the direct tree
[02:37:14] . So maybe that's like asking for abuse, but generally speaking, you know, the optimistic updates, um, do have value for, uh, like tactile type interfaces.
[02:37:26]  Like when you like things like, like buttons or drag and drop. Well, we transitions generally happen with optimistic updates. Right. Cause, but yeah, I mean
[02:37:47] , the one that I always enjoyed doing was, um, yeah, I actually should check the timing on that. I used to like spam. I remember doing a thing where
[02:37:58]  I was like spamming this. And one thing you'll notice is although it's not doing it now, it's interesting. The air hand, there's a,
[02:38:06]  there's a bunch of like race case. Um, um, what do you call it? Um, there's a bunch of like, uh, uh, what do you
[02:38:16]  call it? Race condition, um, uh, cancellation logic built into these things. And then they use transitions to try and coordinate updates together. Cause they do generally there
[02:38:29] 's like this get, there's this post and get cycle, but if the previous one has gone and the data data is invalidated, it, it knows that as it
[02:38:37]  feeds back through the resource because the client still treats it like a fetch, even though it's coming from a cached value, if that makes sense. So like,
[02:38:49]  it has all the same rules around it. What do you got for me, Dave? Yeah, yeah, yeah, yeah, yeah. This demo is just, is just
[02:39:15]  amazing. I want to remake this with start. We, our API is completely allow for us to do this, but if you ever get a chance, cause he's
[02:39:23] , he, he, he shows some code and, but like, he was basically, he was basically just showing how he could just drag and drop. It's what I
[02:39:38]  was explaining before. Yeah, definitely check out, check this out. Um, yeah. I mean, the thing is sometimes things fail if you assume stuff's gonna,
[02:39:58]  uh, uh, go forward. Most of the time, it means a better thing, but occasionally we get to point. It will go like, Hey, this fails.
[02:40:03]  But the cool thing about this optimistic update pattern that we use that we got from remix, you know, thank you remix again, is that, um, it's using
[02:40:13]  a femoral state. You don't have to worry about cache reads. So if you've ever done optimistic updates in graph QL or like old mutation API and task
[02:40:18] , you used to like basically write to a pseudo cache and then you'd read from that cache. And then you'd like, you'd have to undo it by feeding it
[02:40:25]  through a femoral state. We don't have to do any cache rights. So it just makes the UX or the sort of DX so much nicer to deal with.
[02:40:31]  You just import your action anywhere. If it's in flight, you can use that submission information and then just show your optimistic updates. I mean, that was the one
[02:40:53]  thing that I have stolen from remix was the optimistic updates. Most of the other stuff we were already kind of doing like nested routing and parallel data fetching and all that
[02:41:04] . We didn't even loaders, but they weren't like the same. Ours were isomorphic. We didn't have server loaders. See, like,
[02:41:10]  this is why I love server functions is because this is a, this is, I've already kind of talked about this. This is an isomorphic API, right?
[02:41:17]  Like if I go into this, this silly demo now and I go, we're, we're to do MVC. And I'm just like, Hey guys,
[02:41:25]  um, V config. I don't know. Start. SSR. False. I haven't tried this. Watch this like backfire on me terribly. But if I
[02:41:39]  do SSR false, what we're going to see here when the page reloads and we get out, not on slow 3g, killing us here. What you
[02:41:48] 're going to see here when we, when, when our page reloads is that, um, let's look at the doc. You could hopefully see, yeah, you
[02:41:56]  see it's blank. It's because if we get down here, this is dev mode, sorry for all that extra stuff. But if I, if I format this out
[02:42:02]  and look at what's in the HTML here, you're going to see just like a empty div or something, right? Div app ID. Like, here we go
[02:42:09]  client side render. This is client side render, but that does not say prevent us from. It's so funny because of the error log stuff coming in, but, uh
[02:42:20] , not to yes. I'm going to fetch X, it doesn't prevent us from being able to leverage. Um, this was the, see this because it's SS
[02:42:29] R false. This is the original get request request from the page loads, but it doesn't stop us from doing these single, single flight, um, things. Right
[02:42:38] . Cause yeah. So usually on SSR, this would be rendered on the server. Cause this is, uh, SSR off. We have to actually do the original
[02:42:46]  get from the client, but then look, single flight did not require SSR. Technically there's a backend server handling the server functions, but yeah. Yeah. I
[02:43:06]  mean, then the, if you're dealing with stateful backends, then we were talking a completely different. Problem place solution. As I've been kind of saying,
[02:43:17]  staying about, um, there there's obviously stateful solutions to those kind of things, but like we, we used server functions when we were doing our service end events
[02:43:30] . Cause we, we could get the URL. Like you can always take the URL, the server function, plug it into these things. But like, generally speaking, I
[02:43:38] 'm, I'm not talking about that. Like obviously signals are like an amazing way to do multiplayer because literally as the data comes in, you can just do fine grained
[02:43:47]  updates, good performance, whatnot. But. Um, right. Um, the failure is also super easy handle on the remix hookers super company. So, well,
[02:44:01]  exactly. Yeah. Yeah. Yeah. We have our use submission. You can propagate the errors through and do all the kind of same stuff you do in remix. Um
[02:44:08] , but as I said, what's cool is the, some of the cool stuff that we've, we have that, you know, as I said, remix doesn't
[02:44:15]  do, which is single flight mutations, um, fine grain, granular invalidation, revalidation. It's kind of like taking that maxima that we had
[02:44:27]  with the RPC and TAN stack query and taking it, you know, to that next level anyway. Can you show us the code doing the optimistic update? Sure
[02:44:45] . Yeah. Yeah. Cause this is all this to do MVC is all in a single thing. It's, it's a little bit complicated, but it handles all
[02:44:53]  the cases. So you can kind of see it, let's go here to do MVC routes. I just, it's, it's all right in here.
[02:44:59]  So, um, first of all, we import all our actions and cache functions. And there's quite a few for to do MVC from here. So that this is
[02:45:10]  the kind of setup that I showed the other place where essentially we have all these, you know, server actions and, and our one cache function for our to do's.
[02:45:20]  And then when you go in here, we load our to do's get our async store. And then we have use submission for adding to do, removing to,
[02:45:30]  I'm toggling all. And the thing is this tells us for an appending scene and also gives us the inflight submission. This also works. The reason we like
[02:45:38]  this pattern is it works when JavaScript is turned off. Um, so like it, it works completely. Like it, this is why we use forms for this because this actually
[02:45:49]  produces an actual URL properly for the form action. So if there's no JavaScript load on the page and you submit the form, this to do app works perfectly fine.
[02:45:57]  You don't get the optimistic updates, obviously, but it works completely. But the thing is we have this ad to do. And what this ad to do is doing is
[02:46:05]  give me all the submissions, see S all the submissions for ad to do. And then somewhere down in our list further, we have for each adding to do, we show
[02:46:14]  a different thing. See, we have the for loop for all the actual tattoos. And then underneath we have a for loop for the adding to do set are currently pending
[02:46:21] . Then what we do again, this is form data. So it's a little bit of a pain because of this, you know, we, we grab our input first
[02:46:28]  argument, which is a form element and we get the title. So we can always feed, like if you're not using actual forms, you can, or, you know
[02:46:35] , using some of those with fields, you can just take the input. And this input is typed based on what the actual, uh, action is. This one takes
[02:46:43]  only form data. So you get the input from, from there, get the title and show that with a disabled. Destroy about it. So this is just feeding it back
[02:46:53]  into the reactive cycle so that when I sit there and I spam this with a bunch of stuff, maybe throw slow that network down again. So we can see it,
[02:47:02]  you know, we can see those it's purple right now. And then as you see them as they, as they come in, I don't have an error example right
[02:47:10]  now, but I I've had birds in the past with, with like remaking, uh, a bunch of the remix stuff where essentially, um, we're more
[02:47:20]  or less, we, we basically handled the, the errors and like, let people retry and stuff. Um, but yeah, I mean, it, it's,
[02:47:32]  it's pretty powerful to like, you might be going at, well, how do you do the checkbox? Well, that's a little bit more interesting in each list
[02:47:40]  here. I go, okay. Toggling to do, is it toggling? Let's use that submission. So it goes, gets me a submission and it
[02:47:46]  only gets me the submissions that equal this ID. So this is going like, get it, get me the C cause input zero is a, is the ID number. Um
[02:47:55] , so it goes, get me the submission that I've toggled to do related to the specific ID. And then how do we know if we're completed? Well,
[02:48:07]  either toggle all is pending. And in that case, it's not, it's whatever the opposite of that input is from the checkbox, essentially, or toggle to
[02:48:15]  do is pending. And then it's not its current status. Otherwise it is its current status. So there's a bit of logic here because you can think about it
[02:48:23] . You can, you can toggle the, the optimistic, um, here, although it looks like I have the wrong opposite for the toggle. All I should fix that.
[02:48:32]  You see that. Um, yeah, I have an opposite for the toggle all it should be when it's toggle all, it looks like it actually wants to be like
[02:48:44]  this. Save that. Now when we toggle, uh, so our month's row, slow three G is just brutal for hot reloading. Anyway, sorry.
[02:48:55]  Um, like all the JS assets float again and painful, uh, let's put it back to slow three G so we can see this. I think that should fix it
[02:49:06] . See, now it's optimistic. Yeah. Although, yeah, yeah, there we go. Okay. Yeah. Our examples are in the solid start repo right now
[02:49:33] . Yeah. So you guys are following along. Yeah, I think you, you, thank you Dave for explaining this to, in the chat. So yeah. Um
[02:50:03] , yeah, it's, I don't know. I'm not saying this is, this is a thing that comes after, um, GraphQL, but yeah, pretty
[02:50:16] , pretty powerful paradigm and just cause you always have to show this, this, this example here, disable JavaScript, right? This is what we got to do this,
[02:50:28]  right? This just, just to keep us honest here. Oh, let's not slow three G it. Uh, is it cause I'm in dev mode? This is
[02:50:41]  not, that's actually weird. What's going on? Oh, it's cause I turned off JavaScript. Do you know what's wrong guys? We were doing this
[02:50:50]  whole thing with SSR turned off. I forgot about that. When I disabled JavaScript, well, nothing rendered. See, I proved that SSR was false. There we
[02:50:59]  go. Let's try this again. There we go. There we go. Slow page load. Cause it's cause it's all the dev scripts running in the background
[02:51:09] . I have to admit I'm a little bit choked by this. It's, it's cause we have amazing dev tools now that give you code highlighting down to the
[02:51:16]  line you're on, but it's sometimes slows down the initial load. Anyways, JavaScript is off, right? If I look here, you're not going to see any
[02:51:26]  history. You're just going to see the whole page reload on the spinner, right? See, dude, there's no optimistic updates anymore. This there's just no
[02:51:34]  JavaScript on this page, but we still get most of our functionality. You can only submit one thing at a time because, but we're pretty close to the server anyway.
[02:51:45]  So anyway, just, just keeping, keeping, keeping me honest here with the wrong one. Let's enable that JavaScript again. Anyways, I've, I've,
[02:52:02]  I've demoed this enough, or at least the existing features. Yeah. Almost this pattern of double fetching became super, super common the last several years. cause
[02:52:25]  it's things like hand stack query, because the thing that I'm not getting at here is the reason part of it is people don't like cache rewrites. The
[02:52:34]  other reason is think rest, like sometimes you update a resource and it actually impacts multiple things on the page. So like returning the data, or how about if you do like
[02:52:45]  a redirect afterwards, like you post to some data and then you go to the next page. Like there's always these cases where like, you could return the data.
[02:52:57]  If you know what you're doing essentially specifically. But you'd, you'd, you'd, you'd kind of go and be like, okay, I need to update
[02:53:05]  this, this, and this with using the, the cache keys. You're kind of like doing almost like a pub sub kind of like where you're just like,
[02:53:12]  Hey, stuff with this key or with this sort of key update. You might go update everything related to users. Um, it made a lot easier for people that then to
[02:53:22]  make sure that they were writing to all the right APIs and caches and like all the right places returning the exact data that it became incredibly common to de-optimize
[02:53:33] . Yeah. So yeah, don't get me wrong. I would try and avoid this always, but like it just, in the problem is it started getting ingrained
[02:53:55]  into it because like even, even like, like when we move to everyone's, you know, people start moving to remix, for example, like the choice wasn't yours
[02:54:07]  anymore. Um, cause that like, that's just how remix works. Right. Like you, you, so like we, we've with this, you know, the
[02:54:16] , the slippery slope, the, wherever I have it here that I was, that I talked about before here, people like we just kind of accepted this, you know
[02:54:30] , and I, I always like challenging the, these kinds of assumptions we accept when like, we're very quick for DX reasons to say good enough. Um, but often
[02:54:37]  you can make small wins without necessarily sacrificing the DX. And if you're smart enough, you can figure out how to kind of maybe bend things to, you know,
[02:54:48]  actually make it, you know, even better DX, arguably anyway. Um, I dunno, you guys, I think I've shown it off. I showed the network tab
[02:55:03] . I showed the timing and I showed that this is basically something you just get for free. If you, if you use this setup. So I dunno, obviously maybe
[02:55:14]  not as hot of a demo is like our 13 kilobyte movies app demo, but I actually think this one's actually more practical when I think of all the looph
[02:55:26] oles and, um, the fact that you can basically use this, using the patterns that you already are all used today without learning any, like without really learning much new
[02:55:35]  stuff, no server components, no, like restructuring the laws of, you know, all that. I mean, yeah, in theory it could, you just
[02:55:51]  like the keys were my tricks to basically doing the fetching and then like, and selectively doing the fetching and then passing it across in a data format and then just
[02:56:03]  cash setting. But yeah, this could be the core mechanism of this is using HTTP communication using headers. So basically to decide on a data format. So it's like
[02:56:13]  a protocol. So technically speaking, you could probably do this with something like GraphQL as well. I just, I just wanted to, you know, I mean, Graph
[02:56:23] QL already, except for the redirect case already kind of already did this stuff. Right. Um, you, you know, um, what are those hex values at the
[02:56:36]  top of the JS files or you mean on the top of the, the requests that we were looking at? The, the, this, uh, yeah, this isn't
[02:56:43]  JS files. What's going on here is, oh, sorry. Let's get JavaScript back is, uh, he uses this for chunk encoding for the stream. Um,
[02:56:58]  it just works better. Basically, whenever you see one of these inside the server functions, that's telling you that it was streamed in, um, this is,
[02:57:07]  is, is the, is a path back initially. And then this is what comes back later. So like, this is what I was talking about where the initial response goes
[02:57:19] , Hey, this to do, um, isn't ready yet. Here's a promise. And then later on, it's like, where does it store that promise
[02:57:29] ? Uh, in looks like R two, you'll see something down here. Where. Probably. I think it started in R two R two. No, this is the
[02:57:40]  function he calls. So is it R one somewhere down here? what we're going to see is he's going to call the function essentially with the success data. Yeah
[02:57:55] . like, I think, Oh, the, what, what is this, whatever this. Yeah. This is actually the serialization of the promise resolve function. Like
[02:58:07]  the code that we actually need to resolve the function isn't present until we stream it in the first time. Like, so this code is a function that calls with the
[02:58:17]  reference to the promise, which was R one. And then with the data that it completes with. Yeah. Yeah. So yeah. Um, the notes app and the to
[02:58:34]  do MVC app are all in the solid repo. You can just go to the solid start repo. Um, they're not deployed. These are just examples. You
[02:58:40]  can literally go NPM and it's solid and install and run them on your own computer. Um, the part of the virus CLI. Yeah. So yeah, this
[02:58:50]  is, this is, I think it's worth it, you know, adding those kilobytes to be able to do these kind of really cool serialization, um,
[02:58:59]  stories. But yeah, this, this is, this is all gearing up to solid start, um, 1.0. Uh, okay. I think it's
[02:59:11]  probably time to switch gears, right? I answered everyone's questions. We can probably kind of get into, um, maybe this week in JavaScript. Um, uh, I
[02:59:22] 'm, I'm glad, I'm glad you get, you guys like it. I, I feel like I'm, I was more excited about this than other people
[02:59:39] . Like I was going to think about posting the notes demo on, but I don't think like, it's not like the islands demo where people just go, Oh,
[02:59:45]  look at how small the JavaScript is. Like, like single flight mutations, people, this is a problem. People were doing this stuff and just didn't realize like,
[02:59:52]  like people were doing multi-flight and weren't realizing that they were taking that hit. They just like, weren't thinking about it. So like, how do you
[02:59:59]  suddenly show people that you, you can simultaneously make a DX improvement in this area and the UX improvement when they weren't even thinking about the UX improvement, even though like,
[03:00:09]  that's probably the more significant part. So, all right, um, okay, um, let me get this stuff ready for next part. Um, do,
[03:00:27]  do, do, do, do, do, do, do, do, do, do, do, um, sorry. It just takes me a minute to get,
[03:00:40]  get all set up for this week in JavaScript. Um, it's funny making this demo happen and everything probably took more work than actually showcasing it. It's just
[03:00:57]  like, it just works. Right. So it's kind of, it's always tricky when that happens. Um, it's funny that Sunil posts that you showed me
[03:01:12]  earlier, or I already had like bookmarked. I wanted to talk about it, but we already talked about it. Um, let's get one more. Sorry
[03:01:22] . Just give me a second while I get this stuff organized. Yeah. Yeah. Well, it's so funny because he posted that this morning and I'm, I'm
[03:01:35]  just thinking of like so many times in like when we did, you know, accomplish stuff with solid and it's been like, it's felt like that. But like
[03:01:43] , especially the JSX one, I will never forget the time that I first went on Twitter and I, something about JSX not being suitable for Svelte and someone
[03:01:54]  like going like, Oh, I forget who it was. Maybe it was rich himself said something about it being analyzable or something for his purposes. And I
[03:02:01] 'm like nobody at this point, it was like early 2020 or something. And I'm just like, well, no, I, JSX is perfectly analyzable.
[03:02:12]  You could do something with a compiler. blah, blah, blah, blah, blah. And the people in the reply were just like, like, no, you can
[03:02:20] 't. And yeah, like, and I was like, no, just trust me. Just give me a second. Just check out this repo or just like, look at
[03:02:28]  this article or like thing that I wrote. Just, just, just trust me. Like, you don't have to trust me. Just if you take a moment to look
[03:02:35] , this is possible. I'm like, no, you can't Dominic Ganaway couldn't do it with react pre-packed you can't. And
[03:02:42]  I'm like, and it was so fun. It was frustrating at that point because like I'd write it and then like the other person would write something and they get like
[03:02:49]  10 likes and I'd get none. So it's like very new to Twitter and I was like kind of bombarded, but like, I don't know. You gotta
[03:02:58]  be careful when like you, when you talk with such certainty in tech, we'll look at this tweet. I enjoyed this tweet a lot. Yes. Thank you.
[03:03:09]  Oh, looks like my dad's back. Hey. Yeah. You're welcome. The Twitter moment. Yeah. It was like, is the people were telling me that JS
[03:03:24] X wasn't transpiled. If you guys ever find that conversation, it's pretty funny. Like between me and then it was like Adam Rakist and like, what
[03:03:34] 's his name? Uh, Jamie Kyle. Um, and so like these, these guys had like followers and people. And yeah, like at one point, even like
[03:03:44]  a clown face came out and I was just like, what are you like, what are you guys doing? It was so, I remember this one specifically. Cause at
[03:03:53]  a certain point they flagged Dominic and they were like this and he came on and he was just like, man, no, this is legit. You know,
[03:04:00]  and, and I don't know, it was just, yeah, that was, that was, that was definitely a welcome to Twitter moment for me. Um, cause
[03:04:09]  you know, I didn't, I barely knew Dominic. I didn't actually really know him. I just feed like inter based on GitHub because of like GS framework benchmark
[03:04:18]  type stuff. Uh, Oh man. Reminiscing. Okay. So what do we got here? We got solid. We got my page and we got some bookmarks
[03:04:35] . Okay. I think we're, we're good to go here. Um, when was my last stream? Like the 23rd or something. Let's, let
[03:04:45] 's look here. Cause I took a week off. Um, we talked all about, no, we talked all about complexity. Right. So that was the 26. Yeah
[03:04:57] . So it's the 20 it's the. Yeah. Okay. Yeah. Okay. Let's, let's go here. Yeah. Okay. 30th. Yeah
[03:05:11] . So let's, let's go. Right. All right. All right. Yeah. He's, he's a good guy. I am. I, it
[03:05:21]  was, it was definitely tricky. You don't understand. It wasn't just people like, it wasn't just him. Like God. Spicks was pretty awkward too
[03:05:27] . He did the same thing calling me out. He just, I guess the problem is people have conversations. They have narratives where they want to like push on Twitter.
[03:05:41]  So they can't have people disagreeing with them. So they can't have people disagreeing with them. And then sometimes, you know, you, the, the,
[03:05:45]  like they're missing the point of what they're, like, you're trying to promote a particular idea. And then someone's like, no, that's not the case
[03:05:47] . And you're like, okay, it's this freaking reply guys. narratives where they want to like push on Twitter so they can't have people disagreeing with them
[03:05:53]  and then sometimes you know you the like they're missing the point of what they're like you're trying to promote this particular idea and then someone's like no that's not
[03:06:01]  the case you're like okay it's this freaking reply guys so sometimes when you reply them you're pretty nasty the difference in my case was I had evidence and proof and I
[03:06:10]  wasn't talking their their their scope of what reality wasn't like it was really when I when solid came out people were very much on the fence like you have to be
[03:06:18]  like view or svelte or you have to be like react jsx there's no middle ground um so it was very very weird um it was very weird to to like
[03:06:28]  like when I was like oh no jsx is fine people are just like no you can't do that and it's like why not you know yeah you know it's
[03:06:48]  fine I yeah this is not I think anything against Adam because like quite often people need this like state the obvious or say it in a kind of like a kind of outsp
[03:06:58] oken rude way just so people kind of like can think around the problems I have no I have no grief with Adam at all um because I always knew that that was never like
[03:07:08]  he that was never hit he wasn't the guy giving me clown faces or stuff you know what I mean um other people I can't say the same thing for though
[03:07:19]  no Ken Wheeler was not involved no no these guys guys are good okay um okay well then let's let's let's let's do uh this weekend in javascript
[03:07:35]  um all right yeah I guess I should put the banner up why not I use stream yard features less and less these days um let's talk about this week in javas
[03:07:48] cript um I'll start off with a little bit of solid stuff because why not honestly I hope I I'm gonna have to ask him if I pronounce his name properly but whether
[03:07:58]  it's a tiller or atila I think it's atila he's been doing amazing work dx team has been coming together between between him and uh daniel um
[03:08:09]  I'm I'm so stoked to see people more people going giving talks so I don't have to travel and give talks um I am at a conference I'm at uh
[03:08:20]  js world at the end of the month um which is like the big view conference um but um yeah no it's awesome to kind of see this yeah see um super city join
[03:08:36]  the dx team um so there's a push on developer experience happening um this is really the message for solid the last week or two um get back to there um there was
[03:08:47]  a great podcast with this dot media that Tila did talking about teaching people solid and kind of getting there himself in his own journey um really excited to kind of have other advocates
[03:09:00]  in the community pushing out the good word um um very very stoked um let's see here and uh yeah I'm just looking at the chat to see a chilla oh
[03:09:20]  there we go or is okay chilla all right but other things is as you've seen solid start some big updates um are the server functions for the cache are actually get
[03:09:35]  functions so you can use like content control headers we we have a bunch of devx improvements given async local storage um apis single flight mutations all the stuff you know have
[03:09:46]  been kind of sneaking in the tricky part is like we're attacking this on so many uh so many places because the router is now pulled out of solid starts so like work
[03:09:56] 's happening in the router that's making stuff better that's like might not be reflected on the release notes I've been getting better change management so people can tell what's
[03:10:05]  going on stuff is moving very fast right now but like you know save maybe having server components I think we put together an amazing um set of features and capabilities um I'm very
[03:10:21]  very happy with how this is turning out um architecturally we're still you know working through bugs and stuff figuring out where our shortcomings or like what we don't understand
[03:10:31]  about like say how we do deploys with nitro and different presets and stuff but generally speaking like the feature level like the top surface I'm very very happy in so
[03:10:41]  yeah solid start progressing quite nicely um yeah no I I'm I'm loving seeing like people build apps responsive PWA discord clone built completely in solid I mean it's capable you
[03:11:03]  know just it's just a matter of people taking the taking the chance to you know try this stuff this is yeah um kind of cool little side story you go those you
[03:11:17]  know uh Giorgio works uh very closely with quick um quick advocate as it says here met him when I was traveling last and uh he poked me one day and he
[03:11:27] 's like hey what want to get uh party town integration right that's the thing that offloads the main scripts um so you can get your analytics off the main thread improves
[03:11:36]  you know page load scores considerably and I was like yeah sure sure I don't know what it takes he's like oh don't worry uh if there's nothing special you
[03:11:43]  can think of I'll just go try and he went and he did it and he got integration did it all in a day super super stoked about that um so thank you G
[03:11:51] iorgio just wanted to give a quick shout out from him and the guys at Builder who've always been very supportive so uh very cool to see got a good relationship with
[03:12:02]  a quick um group as you guys all know so yeah sorry Benton you caught me for a second I have no clue what you're what I'm looking at and I
[03:12:31]  don't know if I want to look at this right now let's keep on going with this week in Javascript um okay um anyway that's mostly solid news I
[03:12:51]  just love seeing like new integrations so let's let's let's flip this back around again um I was struggling a bit on the router I knew I had to do
[03:13:05]  those router releases for solid start and something became really clear to me that I miss you notice that next.js and solid start use lowercase form elements but they don't
[03:13:20]  use like lowercase links they are anchors they use capital on it and it always bugged me because getting larger templates and stuff just cleans up the code it makes it more
[03:13:33]  performance it's just a good win and that and in a sense I really wish that we could just use anchors in our apps as normal with lowercase and that's
[03:13:43]  what we did with solid uh 0.10 uh for the router but like I realized later that like we've come to expect things like having base path applied to all the routes
[03:13:54]  you know like href we're using components as a way of like injecting href configuration and formatting and it's like it's fine but it's also like the
[03:14:05]  thing is if you have a library that has a capital a anchor tag now anyone who wants to use that anchor essentially has to find a way of injecting it in if it
[03:14:15] 's lowercase everyone can just use it and it's expected that behavior of that anchor you don't need a special system around it svelte does that but then if you
[03:14:23]  know I looked up svelte kit and there's like okay svelte kit github pages because github pages is is like the classic problem you you
[03:14:32]  have when you need a base url and set the base path okay and they're like okay well that's simple just go through and update all your urls in your app
[03:14:43]  i was like oh okay crap because obviously when you have capital a you can just set it once in the router and all the routes automatically get it here like their solution was
[03:14:54]  just go in and add it to all your hrefs because in svelte you just use lowercase a so i was kind of like torn because i was like man
[03:15:01]  in a way i'd love to be as brave as svelte sometimes just simplify stuff and just be like you handle it right but on the other hand um you know
[03:15:12]  what i mean like people come to expect this behavior it's you're taking something away um when you go this way uh then the angular crew came out and all told me about
[03:15:25]  how powerful their directives work they work even without you know like applying something to the element but see our problem is our directives don't work on ssr because
[03:15:34]  they're they expect an element reference they don't expect a uh a string or whatever so like you could come up with all these solutions it's just it's just much nicer
[03:15:46]  what if you could just you know you could have like a special namespace prop like link colon href or whatever you know kind of thing but i was just lamenting
[03:15:57]  that we kind of gone to a point where i felt it was awkward that in solid router the lowercase a is like svelte the capital a actually does the application so
[03:16:09]  if you never need that you can just skip the javascript the capital a and just keep it nice import all that but i kind of wished i could just make everything
[03:16:21]  lower case a um so yeah the someone point posted this really cool thing from adobe about how to do routing and they're like look this is how you can use any router
[03:16:35]  with our design system see we have our own router provider and then you pass navigate to it and then you can put your router in here see this is how you do it with
[03:16:45]  react router this is how you do in next router this is how you do with the pages versus the app router this is how you do remix and i was like i mean
[03:16:51]  this is universal it could work on anything but like my point was like tan stack router wasn't here and it and it kind of brought to my head like i mean wouldn't
[03:17:00]  it be sweet if this whole page of docs wasn't necessary like you could literally just use lowercase anchor and be like like any library could assume that behavior because you can always
[03:17:11]  pass the props through anything that proxies like a design system that proxies will link through it's going to give you the ability to set an href or
[03:17:17]  set any of the underlying properties but like yeah i don't know this is something that still it's probably more interesting to me as a framework designer than to to you all
[03:17:28]  but yeah yeah angular can sorry where was it the angular can set the the base path um just there's a comment here because i was one thing and i swear you could
[03:17:51]  catch the base on it you can because angular's directives um like apply the rule to the element without even attaching it so it is definitely just most systems even with like like
[03:18:04]  felt like an r kind of approach of augmentation only works on the dom elements it doesn't work during ssr because we use the element reference um like there's user
[03:18:17]  code uh we wouldn't put it in that i actually am interested in how ssr works with angular on that it feels like they designed a lot of their apis
[03:18:25]  pre ssr so yeah i don't know well see here's the thing active class yeah that one needs js but like like part of and and that's wrapping up a
[03:18:40]  component seems convenient it was just like i'm thinking about it's just like i'm thinking about stuff from like and yeah relative or type safe links with anchor right i mean
[03:18:48]  the the only way you could do that is if you augmented the href itself like used a helper function no one wants to import a helper function to use regular href but
[03:18:56]  the the difference here is this if you use regular href then you could take an adobe component like say adobe's link or button or whatever health thing they have
[03:19:09]  and just apply your function that does the formatting to their href you don't need to apply it to a lower anchor you could apply it to theirs and they'll pass through
[03:19:18]  you'll know it works whereas there's no way for them to have your anchor component right like we have directives but they don't work for ssr and i
[03:19:32]  need this to work for progressive enhancement yeah but like the but i'm getting at the whole point the whole fact that this exists smells and like especially when you look at this from
[03:19:49]  like a requires javascript standpoint right like it's it's kind of sad we got here like i sometimes felt so dead on the money with their simplifications you know
[03:20:07]  where it's like people don't want to give up certain dx because they're used to it but on the other hand like it's just it makes a lot of sense
[03:20:24]  this was pointed out to me that we can use the native base path it just doesn't actually help it helps with the the top level case but doesn't help us like relative
[03:20:32]  links typescript links but like i said a wrapper function for typescript links would actually probably work better so i started like thinking util wise you know but like yeah i started typing
[03:20:42]  it up and i was like no one will ever accept this they just want a component that does it but the sad part about it is it's kind of like like it
[03:20:52]  it actually affects composability it's actually a negative on composability yeah i mean the dx is worse it's clunkier yeah i mean but the thing is again this
[03:21:14]  is that's familiarity thing like the the way anchors behave is still it still falls within the semantics of anchors as long as they do navigation client side or server side
[03:21:28]  we don't need to make that distinction based on the components or not it was a good split but the the i the once you go to components there is a comp compos
[03:21:38] able consideration unless you make that component core we're from anger tagging why is everything right right it's it's like better on so many sides when you can remove that
[03:21:59]  kind of component like components should be your choice of how you break apart your app not having yeah it's it it's it's tricky routing is so fundamental to the web that
[03:22:10]  it's a place that i'd be willing to make an exception to general rules because it is so fundamental to the application architecture yeah i mean the same way these all handle
[03:22:24]  it like you can like what does this actually say here note that external links to different origins will not trigger client-side routing and will use native browser navigation additionally if the link
[03:22:33]  has target other than self uses the download attribute or user presses modified keys such as command all to change the default behavior browser native navigational occurrence instead of client-side running
[03:22:43]  funny things we actually use self as a way of saying that no don't do client-side in ours but generally like like you can there's always ways to opt out of
[03:22:56]  it but if you're saying like hey i'm gonna use this tool and use like this library having it like having a router on the page that controls navigation makes a lot of
[03:23:05]  sense right so yeah first like same origin um we use target self actually ironically um but like a set like and this is true solid router right now actually right there's a
[03:23:29]  while that we were explicit that lowercase a wasn't like that but before we were um stuff like this is true of self as well so yeah i'm just i'm
[03:23:39]  just throwing this out here right like i understand why people don't like it and not what they're used to but like this is actually a decision that makes a ton of sense
[03:23:49]  like because routing is so fundamental like it's basically a base element of the thing not the most ironic thing about this whole thing was but you're gonna love this what do you
[03:24:02]  think happen when i posted this i got all the web component people all came out um thanks the web component people came out because they're like well we we can upgrade an
[03:24:22]  anchor tag without making a component we go a is and i was like i was like oh man you're right um but like there's so many other concerns that come from
[03:24:37]  web components like if you if you make x link then you you're not solving it the the native extensions for web components are actually a good use case for this kind of thing
[03:24:45]  because you could you know in theory apply that extension through but like the my point is about being able to wrap it after the fact and yeah actually web components don't solve
[03:24:58]  it in a sense because if someone else comes up with their own component um that needs to make a design system around anchor you need it to be plain anchor you don't
[03:25:08]  need it to be is anchor unless you are like i don't even know if you can pass you'd have to think of how to pass is from from from adobe link
[03:25:18]  down to the anchor underneath it without it making adobe link is like i i someone could probably design something for this i'm just saying generally speaking weapons actually don't solve
[03:25:29]  this wrapper problem you need what i'm saying is the core navigation mechanisms for the web like anchors and forms and stuff should be left alone to be core with with the library
[03:25:43]  or framework figuring out how to actually augment the behavior not forcing them to be wrapped otherwise they're not they're like sure it means you might have to choose only a single
[03:25:54]  router that i understand there's complexity there maybe it's related to regions of your dom elements but generally speaking i'm i'm kind of putting out there that like from a compos
[03:26:05] ability standpoint because these are the you're addressing the core functionality of your app and you can't assume when you're writing component wrappers that you like know how someone's
[03:26:18]  chosen to use the router or whatnot well yeah yeah that's sort of whole conversation as well right because then you have to think about how the ssr story works in here
[03:26:29]  the funny thing is like if we didn't care about progressive enhancement i could literally apply the base path on the delegated link the problem is it would be the wrong url
[03:26:38]  on the anchor um and then when you clicked it we'd solve it right but the the problem with with progressive enhancement is when there's no js you i wouldn't be
[03:26:49]  able to intercept it and the anchor link would be wrong i mean reactive web components are fine we had solid element and i built that old knockout app was all web components
[03:27:05]  um i built a when i built solid though we ended up not with components originally because i was like oh i'll just use web components like it was clunky because when you
[03:27:15]  try to use components the way react use the components you make too many dom elements but i mean it's fine yeah yeah yeah yeah i mean it's just the concept again
[03:27:33]  this is the same argument almost here the conceptual breakdown of how you organize your app shouldn't infer the dom elements required it's just the wrong thing like i understand like you're
[03:27:44]  like oh i have this reusable component when you're thinking about it from like a custom element standpoint like i have this element you know design wise you know i put it in my
[03:27:53]  document it makes sense but that's not what components are this whole discussion components the misalignment of the word and the expectation if it had docs people would use it not
[03:28:07]  much it's so funny we'll see i thought it was going to be 18 and like it was actually originally going to be 17 react core team that actually thinks it's
[03:28:26]  funny it's like whenever alex russell publishes a paper dissing react they pull back the support of web components by by like a major version um we have much better
[03:28:38]  support of web components than they do but i mean they could just do it at any time but they're it's it it's almost by just not doing it they just
[03:28:49]  don't have to worry about a bunch of this crap you know like there's a certain region where like people will do it but you're just like why are you even doing
[03:28:57]  it it's just i'm sorry i know we have people who are big on web components in solid community it's just i i i'm it's one of those though it
[03:29:06] 's the hardest it's it's the hardest position to get someone excited about something who was previously excited and now disillusioned it's it's hard it's very
[03:29:15]  hard to go full circle like that hey austin how's it going oh raiding party thanks for the raid yeah i mean yeah there we go real links forms for the
[03:29:35]  win oh web components but it was only a tangent i was i was talking about this week in javascript talking uh about some i was trying to convince everyone that we should
[03:29:49]  use lowercase anchor instead of wrapped link components but it would make developers have to do more work um not every community resets like svelte there's expectations like react
[03:30:00]  and then i said that when i proposed this to a bunch of web component people came out of the woodwork and be like web components solve this that's like yeah maybe maybe
[03:30:11]  not anyway okay yeah i didn't stream last week as i mentioned because i put this release out um this is cool let's talk greg greg we know greg
[03:30:27]  he's usually here in the stream hanging out um he uh one thing that we haven't talked about much because i've been underplaying it solid islands mode still works in solid
[03:30:44]  start you can go make like an astro-esque island setup you we don't have like we we didn't bring back the client routing thing yet i i felt like
[03:30:52]  it wasn't stable enough but you can do islands mode and you can do like a like i guess a fresh type setup of islands it's not quite astro astro is
[03:31:02]  actually a little bit better but like generally you can do pretty good in solid start as it turns out greg has the same feature in lepto start i he doesn't
[03:31:12]  call it that but i he made the server functions sort of like he he i remember how amazed i was that he was had very similar setup when he set up lept
[03:31:21] os um i haven't kept him on the same page in all the new stuff i've been doing but his latest version of his hacker news islands demo it's 17.2
[03:31:29]  total kilobytes of javascript or um which is only again 14 4k p of awesome this this is incredible don't get me wrong like an islands version of a
[03:31:40]  js framework that's small like they solid might be six kilobytes so or so like it's not quite in that zone but like if we're talking like anything else
[03:31:51]  like react or whatever like this this is this is good you know what let's just open up his hacker news demo i haven't even played with it yet did he did he
[03:32:00]  color code it nicely is this leptos color like a dark color yeah see it's it's it's it's an mpa you can see the page reload but
[03:32:07]  it looks good you know what i haven't even looked at this let's go to let's go to my old favorite let's start putting something in here 301 eights
[03:32:19]  this is this is the magic number here whatever this is and then let's go like this and then we want what was it stories let's see does he follow the same
[03:32:31]  url format that we do stories yeah i don't let's just go yeah i mean i would love to see i don't know if we'll get all the stories here
[03:32:47]  this i've been getting as good data recently but i i'm i have no clue how this goes but this this is actually pretty amusing to me because those sizes i don
[03:33:03] 't know if wasm's expensive to process i want to see if i mean obviously this is a demo set up for um more static type pages so islands slay at
[03:33:18]  this demo um server components do better than like ssr demos and i know this page specifically because of it's 1300 or 1400 stories sometimes edge functions have a hard time serving
[03:33:32]  in i might be just like completely killing his server right now all right okay i do you know how fast a solid um app does on this like a solid start standard spa
[03:33:52]  on this demo 52. next js remix spellkit 47. server components 61. like a next page app 61. yeah um astro quick solid islands all of those 85
[03:34:14] . so yes this is a static page pretty much right like if i open up this demo all you can do is collapse these comments but this is already significantly more performance than
[03:34:34]  the server component version oh yeah yeah so like this is a wasm framework not getting having issue on page load with an island thing yes it's a mostly static demo but the
[03:34:48]  point is page load is the weakness here like a wasm framework update speed they're fine they're like less than 10 percent slower than javascript framework not a big
[03:34:58]  deal page load is a big deal so you know obviously this is mostly static page i'm sure it doesn't scale as well you know in the case for apps or whatever
[03:35:13]  but this is impressive um marco 5 was about um it was about in this range around 76 77 and then marco 6 obviously is in the 85 90 range with all the
[03:35:40]  other guys so yeah i mean this this is pretty good for an islands demo this is faster than fresh was fresh had a problem with recursive um islands they probably fixed it
[03:35:57]  now i haven't checked it i'm pretty sure fresh scored around 57 and 60 around the same place as server components rizal told us lighthouse scores don't matter yeah
[03:36:09]  of course not like it what really matters is when you get page speed insights or whatever but i i like using this for profiling just basic loads of maps you can see look
[03:36:19]  streaming works you can see the page stream in content decent content we could run this a few times and see like where it actually sits but like this might not be a good
[03:36:30]  run maybe he maybe is in the 80s you know i'm just happy that i turned it on and we're in the ballpark like this is not bad by any
[03:36:43]  means and let's look are all the yeah 1406 comments are all loaded so showing people that wasm doesn't have to have slow loading pages obviously this is a very
[03:36:56]  static page but this is still an accomplishment in itself yeah there you go greg no i i always like doing this kind of comparison i've done it a bunch and this
[03:37:22]  is this this is uh this is this good stuff yeah but i mean if if you're if you're already writing in that intense system language like you don't the str
[03:37:37] anglehold that js has on the front end is so hard it's so funny because i know people don't agree with me i know prime doesn't agree with me all the
[03:37:47]  time you know you know those people but like you have to use js on your back end if you want to like the best experience for your end user and this shows that
[03:37:56]  it might be possible to change that that's why this is exciting like this direction and seeing what stuff is like you sure this is rust maybe go something else but like i don
[03:38:07] 't know right now i mean people can lie to themselves and think that it's different but for your clients ux sake you want to use js on your back end um
[03:38:16]  so like yeah this this is this is huge anyway all right where are we we already talked about this value server components i i think it's so funny just as people are
[03:38:50]  getting excited about server components finally stabilizing i've become the less optimistic about them in the whole time since they've existed it's very weird to be counter that trend but
[03:39:04]  i i'm glad that people are thinking about this stuff because then when they make the comparisons they can see hopefully that other solutions um can deliver similar stuff without that uh not much
[03:39:20]  to say about this this is a great story though um i'm glad i i did this post a while ago but um my dad was said hi on the stream a while
[03:39:30]  ago but he he's what got me started in programming because he was an ironwork retro and he went back to work uh he wanted to like go back to school and get
[03:39:39]  his computer degree back in like i think it was like was it like 1990 ish and he he came back and he showed me this quick basic program after one of his days
[03:39:52]  and it was like a screen with like a white arrow and you could see the paint rebuffering like flashing going on as the arrow went up the screen you could actually
[03:40:00]  literally see the frame rate flicker on the whole page it was it was it was horrible this arrow but he's like look brian it's it's a spaceship and once
[03:40:11]  i realized that he'd programmed that i was pretty young i uh around then but once i realized that it was something that was programmed and not something like that wasn't a
[03:40:22]  video it wasn't like you know a game it was like he made the computer do that i i knew that i wanted the program and i also saw like what he wrote and
[03:40:30]  i was like i can do this yeah i mean i've talked about this on many of my previous streams but yes it's because the knowledge that we get from running the
[03:40:47]  javascript on the front end or on the back end actually saves us uh lets us optimize what we can send what we can execute when the page loads so we it gives
[03:40:58]  us more power to actually optimize even like serialization deserialization of stuff if we're running that logic we can kind of split our stuff across client and server and actually
[03:41:08]  reduce the cost in the client which means we can you know reduce what hurts like network or what um or even uh cpu when you have lower end devices like we can
[03:41:22]  actually like on one hand if your server gets over running you have too many requests and stuff like everyone suffers but on the other hand you can throw more servers at it i'm
[03:41:31]  not saying it's like a bad thing but you can't do anything about the end user's network or their their device thank you that's awesome you listen to to our
[03:41:47]  stuff i will say that um there might be some weird comments if you check out the band camps and stuff right now um our our our base player is i think going through
[03:41:59]  something and he's kind of taking over our accounts and says that we aren't in the band anymore um sort of like another dan situation going on um but the music's still
[03:42:09]  up there and the youtube so you know you could definitely check it out two ryan's are distracting anyway uh this is this important story for me and i'm glad that
[03:42:21]  they got shared again um okay let's keep on going i love their insights they always say the really smart things and always look to see their opinion because they always get it and
[03:42:38]  cut through it and i'm starting to think the point of solid yes might not be single spine green reactivity it's more a happy action the real point is about prim
[03:42:45] itives over abstractions explicit over implicitness simplicity over easy use and this is such a a powerful comment um and this is the truth heavily inspired by one of my favorite javas
[03:42:59] cript libraries i did this on purpose do you guys know which javascript library i'm i'm talking about i i'm not gonna look at the chat yet but i
[03:43:07]  figured i figured i was hoping people would know what javascript library i was talking about because i feel like if you started web dev in the last five years you might actually
[03:43:17]  not know what javascript library i'm talking about no i'm not talking about knockout i mean knockout had signals and stuff but it was it was it they
[03:43:31]  didn't have much of a philosophy about it yeah i'm talking about react if you look at react these days you'd never guess that but react was like react was all
[03:43:51]  about its primitives which in case it was component but it was all about being explicit over implicit simplicity over easy ease of use you know every part of react was about that i
[03:44:03]  don't know what's happened to react in the last several years but this is like this is what i learned from react like i i had signals and knockout and things but
[03:44:13]  react codified these qualities right react so like i i love this is part of the reason why i love this kind of stuff because the things that made people fall in react
[03:44:30]  in the first place are why people should be interested in solid that's that's where we're coming from i don't it's hard when you grow and you have users and
[03:44:42]  you get to where you are in your life cycle react probably doesn't want to be that way they have mainstream audience they they want to expand into wordpress and jqu
[03:44:50] ery's of the world but react as a philosophy and an approach and the thing that attracted those first developers back in 2013 14 or whatever that's how i see solid today yeah
[03:45:04]  no for me this really big part of reacts inspiration on how how we are it's just you know i understand as an author that we can't always stay that way which
[03:45:20]  is fine but it is it is definitely you know something we have to you know consider um anyway you guys core team changed yeah that's true i remember pete hunt talk
[03:45:40]  i i i i still point to it honestly if if the react guys i mean it's not fair because because of um like i get there's nuance to it and i get
[03:45:54]  where they're going with react and forget and like the whole thing but if if you want to like make one of those like pie on the face kind of the scenarios grab
[03:46:05]  pete hunt's talk from the university like that he did he did like a a lecture and he talked about like he was comparing react to like angular and then to like em
[03:46:15] ber and knockout and like he had these three use cases and things that made react simpler more streamlined and like philosophically like better i take that talk i i i i
[03:46:29]  don't have it off hand right now and pretend that when he's talking about ember or knockout he's talking about react books and it lines up so perfectly that
[03:46:43]  it's it's it's it's crazy that you're just like wow like would pete hunt really dislike the like the react that is today and the thing is he doesn
[03:46:55] 't because when the whole signals thing came out he was one of those guys that came out of the woodworks to be like push back the horde of barbarians you know
[03:47:02]  but the funniest thing is you could apply his arguments against these libraries as readily against react hooks so yeah it's it's interesting let me see if it's this one i
[03:47:24]  almost wanted to like put audio on this one time and actually play it like look i'm partly through it so i think it is this one yeah yeah yeah yeah yeah it
[03:47:48] 's it's this one yeah yeah yeah this this is the one the most scathing reviews against react hooks i've ever heard um yeah yeah it's a cs294
[03:47:58]  class yeah he's talking about computed properties and data binding so most of these things actually apply to react hooks too it's it's it's it's it's great anyway
[03:48:15]  yeah that let's i know you posted in dev but let's in case the people on youtube want to see it too i'm just gonna post this again great talk um
[03:48:30]  great talk um i yeah there's a lot of talks i've watched over time they're just so um like powerful for their time um that one is definitely one of them all
[03:48:43]  right okay let's look at bookmarks i'm trying to remember why i i quoted this one i think rsc is the best wing of crossing the network gap ever i
[03:49:04]  can find parallels with every stack i've worked with my whole career and it's always better it deserves careful implementation that's why we're attempting remix right now we're not going
[03:49:11]  to rush it with all the caching streaming nonsense i mean the streaming nonsense isn't nonsense but yeah i don't know i can't remember why i i bookmarked
[03:49:33]  this we talked about this topic a lot today um i think it is interesting the remix keeps on reaffirming that they're going to go to rscs and
[03:49:44]  it's just taking a while i think he's going i i feel like every time i see ryan post he's been going through a lot of the same conflict struggles that
[03:49:52]  i have with these things that being said if he was fine with the remix patterns he's probably fine with rscs um because if you remember what i was talking about
[03:50:05]  earlier with the slope remix was already on the slope back down so i think i think he can get to rscs where he's comfortable so um it is interesting though because
[03:50:19]  the longer this drags and next is the only one the more interesting the conversation gets about how what other options we have other than rscs we talked about sunil
[03:50:37] 's uh uh thing already earlier um i should actually look at this double check what i said was true he's using let me jur let me durable objects yeah so he's basically
[03:50:55]  saying that cloudflare has come up with a way that you can have um stateful servers with with uh edge functions so yeah he's very excited with party kit obviously
[03:51:08]  that's his company um i don't know i think it's powerful he should talk to me probably or i should talk to him it's been a while i've been busy
[03:51:19]  on other stuff but if he if he if he wants to super power the stuff it's not about uh he's working with remixer it's not about react this is
[03:51:28]  like the use case for signals i'm pretty sure all right all right let's keep on going ah very on topic oh sad question how's nikil doing um nikil
[03:51:53] 's doing pretty good he's uh he's fencing off all the vinci bugs that people have been throwing at him but uh he's he's uh i feel like he
[03:52:03] 's he's in a much better place um the past year um he seems much happier i i it's fine i'm not getting into his personal stuff at all but um
[03:52:15]  he's been back in india for about a year now um close to family and friends and uh uh i feel like we have a more grounded more responsible older mature nikil
[03:52:28]  who's continues to put out good work so i'm i'm happy about that yeah we should talk about the original post you got that for me i i don't necessarily
[03:52:39]  want to to rip into you if you're not comfortable as you said i'm not going to but i i i should grab that i could probably find it as well in
[03:52:56]  fact let me actually do something here i want to i'm gonna i'm gonna print i something i should have done before whenever i do this week in javascript i
[03:53:10]  should stop presenting my entire desktop and just uh uh present um my uh chrome window because if i present um a chrome window no i can only do it on a single tab oh
[03:53:27]  that's annoying i can share audio really easily let's see if i can get this uh one second could i get the url yeah let's do this that's probably
[03:53:52]  why i don't share this all the time but see now i got easy audio this is the funniest format that i've probably have seen for for talking tech but uh let
[03:54:10] 's see rendered output can be serialized signals and server components have taken the world by storm but are they mutually exclusive vdom libraries like react have two separate steps for rendering your
[03:54:23]  components and reconciling the rendered output into the dom this means that as long as the rendered output can be serialized over the network the rendering can happen on the server
[03:54:35]  hence server components reactive libraries turn everything into a reactive object and while that means that they can achieve efficient updates they learn they no longer have the intermediary step between the pure computation
[03:54:49]  and the side effects this means that while react might be the only library without signals it might also be the only library with server components i might be wrong here so let me
[03:55:01]  know if i am signals and server components have taken the world by storm what are they i hope the audio worked there the audio worked yeah yeah so uh yeah um this is
[03:55:25]  it is interesting um because if you think about it things like quick actually serialize the whole reactive graph pure and the and side effectful and then to be fair we don
[03:55:36] 't need to run the side effects on the server so actually i would like we render the rendering but like the serialized part of the graph that we can transform on the pure
[03:55:46]  side is actually very clear what it is um my gripes or things that i've been struggling with it have largely been um it's largely been that like server components are
[03:56:00]  set up for diffing like essentially like replacing or diffing and it's awkward when you build apps that are set up for fine grade updates like we don't need key props
[03:56:13]  right but suddenly if we're going to do diffing we probably should have key props you know like this it's the view versus data centric problem again right so like
[03:56:28]  this this has kind of been like the challenge here in general i forget what i did yeah see quick is an example server components thing and then there's this whole discussion how do
[03:56:40]  client navigation working quick the entire page is zoomed on the client you can often client navigation or server side currently if you do client side yeah you resume the full next page but
[03:56:48]  coming quick to what we need to do nav with containers just means you're just loading for instance h12 yeah so they've been working on fragments solution but it's it
[03:56:56] 's tricky because of shared state problems like it's all the same problems that that they've been we've been looking at as well right it's also quite the same yeah
[03:57:15]  i mean this is an interesting discussion because like you can encode a lot into html if you want to i my comment about it being lossy was mostly that the
[03:57:24]  final output of html is lossy but you can always add more crap into it like you can add comments and data hk like what quick does is they actually
[03:57:35]  put comments around components for us we put comments on templates that we want to absorb so they if you have keys you could put the keys into the html template so like
[03:57:46]  you can use html as that format um but i i do wonder if we should differentiate here on the terms just small kind of note i don't actually consider what quick
[03:57:56]  does server components so to speak because none they don't have server or client components they just literally just have their components that can run on the server the client depending on the
[03:58:07]  situation which is different than server components which are explicitly server only um so it's like um so like that's where this whole kind of conversation came down because they're i
[03:58:25]  just mean cones that start on the server and stay on the server and we go to go the surface yeah i mean technically there are components that could start on the server and stay
[03:58:35]  on the server with quick but you don't denote it at least to my knowledge judith jesus yeah yeah so like this is what kind of started this whole conversation here
[03:59:03]  of like um of essentially oh did i lose where's my bookmarks um is not a word owned by react nuxt has server components it makes every astro marco
[03:59:25]  quick component is a server point etc yeah this is it's an interesting definition i'm not sure if i can get behind this one nuxt does have server components um they're
[03:59:34]  kind of like server lakes right now but i'd say the server part of astro or the server part of marco like in the islands the not islands could be considered
[03:59:46]  server components to a certain degree i think what you could argue that the server components architecture refers to having that client-side routing but at least there are two clear types of components
[03:59:57]  that interweave in a tree-like fashion where there where there's like a continuous server tree that runs through it to me like at least server components are defined by
[04:00:08]  that tree weaving um it's not it's a terrible name because it's it's not about components necessarily but it's it's it's about being able to have that
[04:00:17]  separate separateable tree um explicitly and because they all share characteristics where uh resumable solutions like um quick don't actually make that distinction and it actually impacts things it's why
[04:00:35]  like client-side routing works the way it does because at the point of an of a stateful change everything below it has to come unless you unless you can separate the
[04:00:45]  trees yeah i don't consider them server components no but it's interesting because like people there's a reason you want might want to jump on the term so that it not
[04:01:11]  only react has server components in this conversation because then you can be like look we all have equivalents to server components especially with like islands frameworks because then you're like we had
[04:01:21]  this problem before right because they're not being viewed as the same thing quick is a interesting one though um because it does have through its bundling a form of it it
[04:01:35] 's just not explicit and as i said with clients and routing at any point those server components could become client components so it's not i'm not sure i i don't
[04:01:52]  think i agree with steve generally but i it doesn't like you don't have to have server components that have the same benefits that server components give which is kind of the
[04:02:00]  whole point of the stream today i was saying on the data fetching side you can basically solve all the issue server components with without having a bad dx because now people are
[04:02:17]  talking about like ssr have been running react on the server for 10 years so servers are already thinking that see this is why they have to be we need to some way
[04:02:24]  to talk about some of these distinctions though you mentioned quick and astro astro templates are very much like rc in the sense that you compose this without waterfalls quick
[04:02:32]  on the other can't yes like i think dan and i are in agreement here that generally speaking we're okay with calling it server components is about the tree we're okay with
[04:02:44]  talking about it like the characteristics see i need at least some way to separate the solutions that astro and rc stay in one bucket will say solid starting quick stay in
[04:02:57]  the other bucket yes to be fair what we were doing solid start was actually in the the react bucket i i'm dan's probably not aware of that but yeah um but yes
[04:03:13]  i i agree yeah wow he just keeps on going sweet he just said everything yeah yeah it's so funny because we i i i put that out there right so that like
[04:03:34]  literally we released that like it's exact same week that they released rscs on next we're just like look we got server components too but i don't know i
[04:03:46]  i think i think if if we were to do them in solid we should do them correctly um and for that that starts with serializing async jsx we basically need
[04:03:59]  to take our streaming protocol that we use when we initially render the page to render the stuff afterwards like make it serial friendly on the where we insert the script tags because if you
[04:04:11]  do that then if you think about it what i showed you today with single flight mutations are server components because instead of going to the next page and loading the data you go
[04:04:19]  to the next page and you just render the page the whole streaming back in and everything works identically so like single flight mutations are kind of like the islands router if you actually
[04:04:32]  think about it i just did it it without the serialization and approaching it this way isn't one final product but it means that everyone even people using csr get the
[04:04:45]  benefit from it right just looking at the primitives not releasing a product so yeah i'm happy where things are yeah i mean having the the the server tree is a very powerful
[04:05:12]  concept it lets you shake off some of the the the stuff but for me to be happy where it gets to i need the data fetching mechanism this would be the same and
[04:05:25]  the mutation mechanisms and that makes it tricky to be fair if solid were to make such a solution we would still be using the exact same cache api and the exact same
[04:05:37]  action api it would just be when you do the redirect we'd we'd recognize which data lived in the client loader and which and then render the server so we we
[04:05:52] 'd just be splitting the past so technically speaking a to g we could actually do this with all the same data apis but i it's weird to i i think i
[04:06:05]  think i needed to see single flight mutation type stuff working first because then there's a solution for people who don't want to invest in server-side caching right like investing
[04:06:15]  in server components is acknowledging that you need to invest in server-side caching which is not thing you need in single page app world to now i feel like that should
[04:06:26]  have been like up front for people like i know purcell can kind of build into their infrastructure and just be like here you go but like generally speaking people need to understand that
[04:06:35]  like hey we're doing server components now you need this other in your infrastructure like it's hard to make that the default um when that's not how things have been packaged
[04:06:47]  up to date yeah sending ui definitely has some benefits definitely on code size um and it saves on hydration time of course you could if you were resumable and i don
[04:07:04] 't mean like quick resumable i mean just pure resumable the hydration time would disappear as well which means that like it would really just come down to code size
[04:07:14]  in the end um i don't know if there's i'm you could argue that there's a dx benefit but i actually i'm i'm still struggling on that one because
[04:07:30]  anything you can do with server components you can do with client component calling a server function and in fact it it extracts better because then you're not actually encouraging waterfalls
[04:07:40]  because you're like look i have this data i need and then people can feed it into like their loader or whatever you're actually like you're not you're actually pushing
[04:07:48]  people towards a pattern like next suggests that you could like pull out the data factor out of your component so that you can preload it somewhere above this pattern just says do that
[04:07:56]  right like so it's not even like a choice you just have the better performed pattern anyway so it's like yeah i hear people talking about web forms no no yeah no
[04:08:20]  um no if if we go back to staples servers it's not going to look like that um i don't think um we're talking live view we're talking party
[04:08:33]  kit we're talking stuff like that yeah it's funny in a way rscs are the inverse of of the uh old asp.net update panels but they are much
[04:08:53]  like the inverse is much saner than the like the what was originally there but the the real trick is if you want to avoid diffing you have to put the data closest
[04:09:07]  to where the data like you have to put the like you you basically you have to get as close to where the data is that changes um and like if if you can
[04:09:16]  you can be fine grained anywhere that you put put stuff close to closest to where the the change happens right we we like signals on the client because when people interact with stuff
[04:09:29]  we can update it right away if we want want signals basically on the on the back end then like we have to wire like it needs to be on the back end if we
[04:09:37]  want to like wire it in that kind of granularity you need on both sides it's the diffing over the wires that kill us when the when there's a mism
[04:09:45] atch we try and put stuff that's on the server on the client or vice versa anyway someone needs to be yeah send html to the server to update the database
[04:10:04]  yeah just the html the new xml yeah yeah yeah i i think i think there's like really cool like once you say you have staple servers the whole thing
[04:10:23]  freaking opens up like completely like as i said convex was a great example tying into existing prime front-end server um frameworks um yeah uh but as i said it's it's
[04:10:38]  difficult to say like hey i'm building an app and then being like you need this infrastructure we we got to a point now on the spa side where we could basically say like
[04:10:49]  you don't have to worry about infrastructure so like that backtrace is going to be interesting because i feel like that's how we got rscs it's like
[04:10:58]  the but rcs actually don't accomplish that rcs are already backtracing the other way because once you're like okay yeah i'm okay with a heavy heavy server-
[04:11:06] side caching then you might be like well i've already got that persistent thing why don't i just make it a durable object and make it you know what i mean
[04:11:15]  like we're all it sounds like we're already walking back that way the actual hill that we're climbing over already hit its peak so to speak rscs are already on
[04:11:26]  the other side of the slope but yeah i mean from that perspective then maybe all that we've been doing here in solid is optimizing just optimizing the crap out of the best
[04:11:49]  way to do certain things that we do today anyway um i don't know i i am pretty content with calling this one an early stream um to be fair i uh it
[04:12:07] 's not even early it's just uh i could take my daughter to daddy daddy daughter dance that's that's happens to be always right before valentine's day which
[04:12:16]  is by my birthday so and good so yeah thank you all for joining me i hope you really liked my awesome single flight demo show you that you don't need server components to
[04:12:34]  do a lot of the incredible um stuff that you can do with um you know technical stuff that they do and to have great dx um thank you all again for birthday wishes
[04:12:49]  yeah who can we raid no it was a lot of fun um yeah thank you all is theo but theo's not streaming right now is he oh he is streaming right now
[04:13:10]  oh he is yeah sure let's raid theo yeah that makes a lot of sense yeah yeah but he he's also he's also he's also later you know what i mean
[04:13:28]  like than he usually is okay guys let's get the let's get this raid going hopefully i did it right it's just slash theo right all right well i will say
[04:13:42]  bye to you all um enjoy your weekend till next time