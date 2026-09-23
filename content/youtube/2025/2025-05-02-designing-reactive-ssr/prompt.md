---
title: "efx9ok0xHGs"
slug: "efx9ok0xHGs"
duration: "4:23:14"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/efx9ok0xHGs.m4a"
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
[00:00:01] All right. Hello, everyone. Welcome to my stream today. Sorry, I'm running a little late. I'm not used to streaming so early.
[00:00:08] I had to actually rush to get everything done in time before I started.
[00:00:13] But...
[00:00:15] Come say hi in the chat if you're here.
[00:00:19] Um,
[00:00:22] Thank you.
[00:00:23] Okay.
[00:00:24] Thank you.
[00:00:25] All right.
[00:00:29] Thank you.
[00:00:31] Yeah.
[00:00:35] - Yeah.
[00:00:38] Hey, how's it going?
[00:00:41] Yeah, no.
[00:00:43] Yeah.
[00:00:45] Hi in the chat if you're here. Yeah, okay. Clever.
[00:00:49] Yeah.
[00:00:51] Today,
[00:00:53] We're going to be looking at...
[00:00:56] some like
[00:00:57] design level like like topics um some people commented they really like like those deep dives  i do later in the stream to be fair i know they're not as interesting for everyone um  but i feel like sometimes this gives a little insight into what my work
[00:01:12] looks like um
[00:01:14] I don't know.
[00:01:15] which
[00:01:16] I don't know. It's helpful for me just to kind of like,
[00:01:20] work through these things and can explain reasoning.  And it's different content.  You know, like some people will come on stream  and they'll be like live coding some kind of project  that they've been working on for months and they do that.
[00:01:32] I don't really...
[00:01:33] live code that much unless I'm doing a very
[00:01:37] specific demo that I'm trying to show off or I'm like trying to teach something. So like,
[00:01:42] And
[00:01:43] For me,
[00:01:45] Most of my time is spent...
[00:01:48] actually working through the design aspects of problem right which is which is a funny thing  because it
[00:01:55] means that I'm
[00:01:57] It's funny, you know, I have this week in JavaScript where, you know, I talk about what's been going on and all that.  And I find myself farther and farther away from it, especially as the conversation has been gearing towards stuff like AI, because.
[00:02:09] like
[00:02:11] you know like it's really funny watching all these like five or seeing all these like five coding
[00:02:16] comments and people talking about this perspective. And I mentioned this a couple of weeks ago, just like what
[00:02:24] I do is the opposite of vibe coding.
[00:02:27] If I get to the code, hopefully I've already figured everything out.
[00:02:31] Um,
[00:02:33] So it's very different kind of zone.  As I said, I've been finding the last while,  especially being very disconnected from like, you know,  this week for most things,  because the topics of interest right now  are just so far from anything that I've seen.
[00:02:48] that I find interesting or important.
[00:02:53] Dan Heber.
[00:02:54] Dan Abramoff posted another post today.
[00:02:57] Yeah, yeah, I might have tracked that down.  I he's been posting weekly now for like the last month, which is interesting.
[00:03:05] I have to admit,
[00:03:10] I think I know what he's doing, right?  What Dan's doing is he's trying to find...
[00:03:15] the right framing that resonates. And I think he's realized that not everyone
[00:03:19] a single frame for RFCs work for everyone.  So he's like, what if I approach RFCs as HTML or as functional programming or as
[00:03:27] two servers he's trying to come up with like
[00:03:30] Wow.
[00:03:31] different ways to say the same thing.
[00:03:36] for me reading these posts.
[00:03:39] Um,
[00:03:40] Especially after the really long one, the first time I did it, it's just been like,
[00:03:45] It's like reading the same article four times in a row.
[00:03:49] I think different people will get different things from them, though, because I think this is like a certain gap.
[00:03:53] Yeah.
[00:03:55] He didn't write 10 versions of YRC post works until it worked.  It's good until it works.  Yeah, something like that.  I mean, sometimes that's what it takes, right?  You write the same thing enough, you come at it a slightly different angle  and suddenly it clicks for people.
[00:04:09] we'll talk about rcs maybe a bit later that's at least a topic i can talk about um i have some  thoughts and notes because i actually got in first time in a long time of a little bit of it wasn't  discussion didn't really respond to me but uh some comments and rcs with dan on blue sky um for the
[00:04:26] almost over a year.
[00:04:29] can kind of talk about where you know perspective where rc sit now and stuff
[00:04:37] - Yeah, yeah, no, I mean, freaking hell.  I mean, if you really wanna talk about
[00:04:42] like,
[00:04:44] Yeah.
[00:04:45] Yeah.
[00:04:47] Yeah, I mean, this is always the problem with this stuff, right?  Like there's the actual...
[00:04:53] Like there's like the...
[00:04:55] truth of the matter from like how things should be and then there's like the reality of the matter and
[00:05:02] Yeah.
[00:05:03] I mean, if you want to talk about like this, like not caring at all.  I mean, that that's a perfect back and forth thread and they blew up, you know,  I guess we get Uncle Bob's
[00:05:15] Was he wearing like a like a one of those like towel?
[00:05:21] Bathrobe.
[00:05:22] things i don't know
[00:05:24] just
[00:05:25] when that's the interesting point of discussion and not the
[00:05:29] things that we can be creating.
[00:05:32] It feels very distractionary, almost like 1984.
[00:05:39] content creation needs to come from somewhere right so i mean i was thinking about this i  mean sorry this has nothing to do with like the general like toffee stuff today but like
[00:05:50] obviously um most content creation is reactionary right and it's because a lot of the value people  find in in content is that like it's there's a lot of information sources out there too many  for people to to actually discern themselves so we we get to this like point where we are  depending on others to kind of filter down that information for us and the power of
[00:06:13] good content creators is that they can like
[00:06:16] you know, make the takes that are either interesting or best represent like,
[00:06:21] what your take should be they can make the critical decisions for you essentially and then you can  just like repeat it and this helps you not have to discern the wide amount of information out there
[00:06:32] I don't know if that's a pessimistic view of things, but it has value.
[00:06:38] But like at a certain point, it's the same echo chamber regurgitated conversations over and over and over and over and over again.  And you just keep on going like.
[00:06:50] Why can't people be excited about
[00:06:52] you know, something new or something different. And
[00:06:57] I mean,
[00:06:58] You can kind of get why, though, if you think about it from that perspective.  It's like.
[00:07:03] if people are generally looking for how to
[00:07:05] like discern all the information to a single opinion, then, um,
[00:07:11] why would they want different like information like they're trying to get rid of
[00:07:16] the information overload. Why would they want more information? So it's like,
[00:07:21] I don't know.
[00:07:22] That and AI together, they're a wonderful pair of like...
[00:07:28] Thank you.
[00:07:29] I don't know how to say it.
[00:07:32] Yeah, this is a green screen.
[00:07:35] green screen in my own office just like i can't sit this angle otherwise i'd be facing the door
[00:07:41] Thank you.
[00:07:42] you
[00:07:45] Thank you.
[00:07:47] Yeah.
[00:07:49] sequel is bad gets into a bathroom yeah i mean i mean whatever keeps everyone entertained right
[00:07:56] Um,
[00:07:59] Prime reacts to Theo reacts to Rich Harris.  I wish it was reacts to Rich Harris.  At least if this was real, I might even watch this, right?  The problem is it's not even...
[00:08:11] I don't, it's not even Rich Harris at the end of the line.  I mean, he might be hidden like four more layers down.  I don't know.
[00:08:19] It's interesting, is it just a lack of new content?  I watched a video the other day from Theo,
[00:08:26] And he was reviewing, he's now reviewing like original, like,
[00:08:33] Um,
[00:08:36] react talks from like 2013 um which are great talks to be fair i i would review those on my  channel i think i might have actually reviewed one of pete hunt's talks a while ago it was really  interesting he spoke for a bunch of students at college i can't remember if i did that on screen
[00:08:51] And
[00:08:53] my favorite the thing i want to point out is how secure secure whatever cyclic whatever the  the these patterns are because he he goes on a big thing about
[00:09:04] why like
[00:09:06] what do you call KBO or like basically
[00:09:10] um,
[00:09:11] data binding and like
[00:09:14] smart data flows are bad. He's very functional programming oriented, Pete Hunt was. And
[00:09:20] you know immediate programming like buying game engines like you could tell he has a graphics  he probably has some kind of graphics background too not dysfunctional like you could tell that like
[00:09:30] basically things where the data is special was not
[00:09:34] where React wanted to be from design and why it was so elegant. Yet,
[00:09:39] When you take his talk and you think of React in a post-Hooks world,
[00:09:43] It's like every single criticism he had of the other solutions that weren't React, you could now point directly at React.
[00:09:52] There's a reason why these elements exist, right?  The reason React went to hooks in the first place was because of certain compositional aspects.
[00:10:02] they needed rules around execution and life cycle data. You couldn't just
[00:10:06] naively we render everything because if you naively render everything
[00:10:10] it's really inefficient it's the same reason why um under the hood and some you know the new stuff  with graphics like vulcan and stuff there is some retained mode stuff going on here if you if you  just immediate mode you can't like immediate mode or like re-render everything will always be less  efficient right so like
[00:10:30] The actual battle isn't whether
[00:10:34] Bye.
[00:10:35] these
[00:10:38] like at a purity sense, these things are
[00:10:42] are actually better, like, because they need aspects of the other. Like, it is true that when you keep state around, it gets complicated and it gets messy. But it's also true that when you blow everything away that it's not efficient. So, like,
[00:10:52] It's a question of whether you can provide the developer  a certain mental model that lets them think one way and have it
[00:10:58] be optimal where it needs to be and that's been the whole debate versus  being like you get what you see is what you get
[00:11:05] Um.
[00:11:06] So I don't know.
[00:11:08] This is, I'm just kind of rambling right now while waiting for people to join up on the stream, but it is kind of a...
[00:11:15] Um,
[00:11:16] interesting to kind of see
[00:11:18] How much? Like 10 years.
[00:11:20] puts on, um,
[00:11:23] certain perspectives and how nothing is as pure as we'd like to think in our ivory towers of design.
[00:11:30] But it's something we have to do have to consider from a design perspective and.
[00:11:35] that that's really what i'm aiming at when i'm looking at here today like i'm  i want to look at design issues because that's what i do in my work i don't vibe code um
[00:11:45] i look at what other people do but i don't often react you know like or react to the react like  we we we're in a zone here where we want to hopefully create new novel approaches  to problems so that we can further or better what we're capable of not just
[00:12:07] you know,
[00:12:08] You know, there's important parts of the cycle.  Sometimes the goal is to make something easier that's been done before.  But at a certain point,
[00:12:17] you have to also do what's not done before.
[00:12:21] That's why I'm here. That's why we're doing the stream. That's why I like looking at these problems and thinking about it. I have incredible respect.
[00:12:31] for other people working in this realm  of trying to think out new problems.  That's what, you know, and solutions in these spaces,  you know, for everyone from, you know,  Rich Harrison, the latest async proposal,  we might take a look at that,  to a lot of the work that the React core team  has been doing, right?
[00:12:47] it's easy to get caught up on like
[00:12:51] Thank you.
[00:12:52] Okay.
[00:12:53] in this space, like how to get caught up on how things
[00:12:57] could work in this perfect world, but there's a certain
[00:13:01] rubber meets the street thing going on.  And that reality has to always be part of our consideration  when working in design.
[00:13:10] Thank you.
[00:13:11] All right.  All right.
[00:13:13] Thank you.
[00:13:20] OK. Yeah, no, I'm streaming early today. Do you know the reason that I'm streaming early today and it's going to be probably this way moving forward is that I'm.
[00:13:30] Recently, I think mentioned
[00:13:34] had a baby.
[00:13:35] and
[00:13:37] I'm actually doing school drop off and school pickup.  So I actually have to sandwich my streams in between that now,  instead of being able to just take the whole afternoon
[00:13:49] so we're moving earlier and maybe even a tiny bit shorter but that will not
[00:13:56] get in the way of us being able to cover some incredible content. And as I said,
[00:14:00] Very excited to have you all here in the chat. We can talk about these topics and kind of
[00:14:09] kind of look at
[00:14:12] what goes into these designs and, you know, even provide some feedback. Let me see here. I'm actually opening up Twitch now because
[00:14:21] Um,
[00:14:22] I haven't
[00:14:24] I haven't got that up yet. Yeah, we got some people in there.
[00:14:29] There we go.
[00:14:33] All right, there we go. Thank you.
[00:14:37] All right.
[00:14:38] Thank you.
[00:14:41] Yeah, I mean, it's awesome.
[00:14:45] uh do do sometimes you know a bit tiring but definitely definitely awesome
[00:14:52] OK, so we should probably get started with some actual topic  for today because I have notes to work with because I took that time off.
[00:15:05] So I have to actually sign into HackMD.  It's been so long.
[00:15:08] Um,
[00:15:10] I actually
[00:15:13] That.
[00:15:16] I actually, what was I going to say?  I actually had a bunch of notes sitting on reserve.  I didn't even, I looked at them last week  while we were going, or two weeks ago  when we were doing the stream.  And I actually was like, nope, don't have time for this.  But I actually have like several of my written notes  on the topic today.  And the topic today I'm looking at is SSR.
[00:15:35] primarily looking at reactivity and async and SSR.
[00:15:39] And I think a bit of this might help to start with understanding how SSR works in most solutions.
[00:15:48] Yeah.
[00:15:49] I know we've covered this in the past,
[00:15:51] But...
[00:15:53] But you know, I mean, let's get into fundamentals. People can ask questions and then we can go from there, right? Let's see here.
[00:16:03] uh to do share my screen
[00:16:10] And this is one of those things that I...
[00:16:15] i don't think people realize about some of the solutions like because you can get really far without certain
[00:16:22] uh nice these are tools and one point in that post rich actually lists off a whole bunch of features  that you know he's very excited this unlocks i'm like crap solids had all of those features for  six or seven years now like oh not from what like right after 1.0 but actually before 1.0 actually  there were things that i wanted to get in for 1.0 and i i started remember thinking like
[00:16:43] Solid was surprisingly full-featured. People can talk about the ecosystem and people can talk about like, oh, there's not enough libraries and support and all this stuff, but it's like,
[00:16:52] What can you do as a developer? All I could do was basically give people every capability that they could want.
[00:17:00] and hope that they build with it. I can't build
[00:17:04] five different shadcn component libraries
[00:17:09] But what I can do is give you streaming
[00:17:11] async SSR
[00:17:13] um automatic serialization
[00:17:16] you know, like,
[00:17:18] transitions,
[00:17:20] you know,
[00:17:21] Like, I...
[00:17:22] Yeah.
[00:17:27] so like i don't know it's it's it's interesting when i mean i don't sometimes the argument can be  like maybe you don't need all these things and they're just kind of nice on and the  like we there's other things that should get priority right but it's like
[00:17:41] it's a tricky kind of balance, right?  Because it's like,
[00:17:48] you build the thing you hope that people, you know, like yourself, generally, it's always a  little self reflection will like because you kind of imbue your own personal perspective on, you know,  how to solve the problem when you build a framework or tool like that. And it's like,
[00:18:04] It's.
[00:18:05] it's interesting when you basically build all this stuff and then like people like oh it's not  necessary or you know we don't need this and then like five six seven years later they're  they're like yeah this was always the way to do it and you're like
[00:18:21] Okay. You know, I think I have a Dan Abramoff post about that in concurrency. And I released an article this this week, actually about a
[00:18:31] how I've been working on Solid for almost 10 years.  In a few months it will be,  but this will be my 10th year of working on Solid.js.
[00:18:43] Thank you.
[00:18:45] But the truth of the matter is your average end-consuming developer is not going to notice this stuff.  So, like, it's not a bad bet to not build out some of the features and stuff.  Like, I mean, I think I might have said this before, you know, like, from that kind of depth of perspective.  Like, I think things like Quik are incredibly ahead of their time, you know, in terms of capability.  Things like the resumability.  I think these are topics that people will in, you know, five years-ish, five, six years will be like, oh, yeah, you know, this is something that's important.
[00:19:15] Right now, everyone's like, yeah, what's that crazy quick thing in the dollar sense?  They find reasons to pick at it based on stuff.  And part of it is legit. Ergonomics are passion, right?  Like you.
[00:19:29] there's things that are deemed acceptable that weren't acceptable before.  So like signals are a perfect example.  In early 2010s, a lot of people didn't think something like signals were acceptable.  They were too magical. You know, people weren't used to paradigms like this.  It was too big of a shift from where they're going.
[00:19:46] But after 10 years of React, it's like,
[00:19:48] Okay.
[00:19:49] Thank God there's a different option, right? But it did take those 10 years
[00:19:59] So,
[00:20:00] There is that aspect of it.  But on the other hand, I mean...
[00:20:05] and
[00:20:06] maybe we shouldn't be so focused on fashion.
[00:20:08] Like maybe we should look at the capabilities. These are interesting things. Like don't get me wrong. From a design perspective, when you're building a tool, it's always a marriage of both.
[00:20:18] aspect. You need to be
[00:20:20] aware of what's usable, understandable, accessible to your end user and
[00:20:25] and versus like the raw capabilities otherwise like vanilla js is the fastest or the best or  the most efficient or whatever like it always is but um
[00:20:35] it's unwieldy to build certain things just purely that way.  You build abstractions.  You do this.  So you have to understand that the job
[00:20:44] is
[00:20:45] in a sense.
[00:20:46] finding good developer experience for solving hard problems right your goal is to let people  get to a place where they can do something that seems relatively simple for them and then  get results for something that is you know much trickier to accomplish
[00:21:04] So one thing,
[00:21:06] it's like two sides of the same coin.  One can't be approached without the other.  So it's not like these live in space.  So, you know, when things are ahead of their time,  they are legitimately ahead of their time.
[00:21:17] But
[00:21:18] I think they should still get our respect and understanding.
[00:21:22] Um.
[00:21:24] I think Quick, for example, and its resumability is one of the least
[00:21:30] respected future technologies that's incredibly relevant right in a sense like when i look at  the scheme of things react server components are just a reimagining of what marco
[00:21:41] Dead.
[00:21:42] you know 10 years ago right they're a better version
[00:21:46] Marco didn't get everything right.
[00:21:48] But that's like the push on that.  When I think of what Quik's doing,
[00:21:53] it's probably going to be
[00:21:55] a worse version of what we're doing in five years.
[00:21:58] But I think it is something that...
[00:22:02] you know,
[00:22:03] people should like at least understand that this is a thing you know it's not  it's not just like oh you're not gonna need it you know go go find
[00:22:14] was it Michael Jackson and Ryan Florence?  They had a Twitter post in 2016 being like,  oh no, it wasn't Ryan Florence, Ryan Florence was always in.  But Michael Jackson is like, oh, server-side rendering,  not gonna need it.  And it's like, technically, yes,
[00:22:26] But like,
[00:22:28] four years later you're building a server rendering framework right like
[00:22:32] Um,
[00:22:33] Okay.
[00:22:34] We have to be careful with absolutes, especially when it comes to the advancing of technology and fashion.
[00:22:46] So like web components are ahead of their time.
[00:22:54] Yeah, that's an interesting one, right?  For me...
[00:22:57] I feel like web components were behind their time.  Like, it's the other thing.  I think web components are exactly what I would have wanted back in 1997, or maybe by 2003, 2004.  That's when I would say that I realized.  And then it took six or seven years for them to kind of get there, and then--
[00:23:14] um you know and people like okay we should make a proposal for this and then they finally do it  and then like 20 years later you're you're ending up with like it's like when you end up with the
[00:23:22] You know how I said that RSCs are maybe a slightly better reimagining what Marco did 10 years ago?  Web components are like, what if you just got what Marco did 10 years later?
[00:23:32] you know,
[00:23:34] And actually maybe a little bit more compromised because you had the appeal to like,
[00:23:39] the lowest common denominator.
[00:23:42] Yeah, I think that's how I'd take it.
[00:23:46] Thank you.
[00:23:46] Thank you.
[00:23:48] Um,
[00:23:50] Thank you.
[00:23:54] you
[00:23:59] But that being said,  technology that's like old comes back again,  because like usually when we cycle along these things,  it's not just 'cause like we do the spiral staircase up,  it's because,
[00:24:10] like
[00:24:12] If you go really far one direction, you start realizing that you lack something else, which causes you to swing back the other way, maybe too far.  And like a perfect example, as I said, is Remix has got that feel for me, right?  You kind of get back to that like PHP days of things, right?  When, I mean, I think the real answer is slightly more granular, kind of like CanStack, but sometimes it takes...
[00:24:32] swinging past the mark.
[00:24:35] to get to where you need to go right
[00:24:39] And in a sense,
[00:24:42] I think this is like,
[00:24:44] web components can give us that sort of like where to swing back to when we're like, look,  stuff is too complicated. There's too much
[00:24:52] going on here we need to somehow figure out how to make this base level i i just said the only  problem with web components isn't what they in a lot of ways what they accomplish to do it's the  fact that they're too ambitious like and then they encompass too many things if you kept the pieces  small enough and
[00:25:09] fundamental enough that the service building blocks and then the parts that didn't fit could always be  not used or swapped out as needed the problem is because it's too all-encompassing that it's  web components i know it's four different specs or whatever but because it's web components  that's the problem if if you if you're like okay i like custom elements but the shadow dom's no  good but even the shadow dom's too big um
[00:25:29] Basically, the problem is,
[00:25:33] there is like
[00:25:34] you built a framework
[00:25:37] for the platform. And then there's 14 other, you know, the KCD people who think they have a better version of building a framework that doesn't work that way. And the thing is, they're not wrong. So it's like,
[00:25:49] fight like there isn't much option there instead of coming up with something that was actually
[00:25:55] fundamental that everyone could actually leverage, we now have just another
[00:25:58] um standard in the standards file so it's like
[00:26:03] Yeah, anyways, we don't need to talk about Web Components much more. They're not really worth our time.
[00:26:12] Thank you.
[00:26:12] Thank you.
[00:26:13] Okay, let's continue on.
[00:26:17] - It is.
[00:26:19] I've already been going for 30 minutes and we haven't really even touched into the topics today. So yeah,
[00:26:26] Should we just jump right into, let's see, I've got my scale draw here.
[00:26:31] And...
[00:26:32] I'm zoomed way the hell out.
[00:26:36] Right.
[00:26:38] Yeah.
[00:26:41] see if we can find some space on this chart somewhere to kind of do do.  I haven't actually decided what I want to draw yet. To be fair, I'm just,  I'm just trying to think of like generally what do you all know about SSR?  SSR is actually very, very simple.
[00:26:54] process. And it's important we...
[00:26:57] We could differentiate it from like traditional server rendering, but there's too many similarities at the beginning standpoint that you're not even going to really.
[00:27:08] make that much of a difference the biggest difference between ssr and other uh server  uh rendering stuff is the templates generally aren't designed to only work on the server that's  that's generally how you can differentiate it when we say server-side rendering we're like saying  like we're taking something that maybe isn't primarily server-side and making it service  i've written that's why we're denoting it otherwise you'd just be like you know i'm just
[00:27:32] rendering some HTML. Why is it server-sewed? Why is there that acronym?
[00:27:38] Um,
[00:27:39] draw a black background draw a rabbit no
[00:27:43] Now, I'm back to white backgrounds.  Black was fine, but I'm back to white.  Sorry, guys.  I know it's bright.
[00:27:50] Um,
[00:27:57] Yeah, Elm did do that at one point. And I think for Elm's functional model, it's much purer, but Elm's also very...
[00:28:06] academic in that sense. I think
[00:28:09] that...
[00:28:12] uh,
[00:28:13] I think this is one of the challenges about where the rubber meets the pavement, so to speak.
[00:28:20] So, okay.
[00:28:24] All SSR is for our definition today is we're going to take
[00:28:27] some kind of potentially client side templating, and we're going to render it as well on the  server. That's the baseline of SSR, right? And by rendering it on the server,
[00:28:36] All I mean is generate strings.
[00:28:40] So you have something like JSX or Svelte template or whatever, and you're going to generate a
[00:28:50] generate strings, right? CSR pre-render sure is the thing, right?
[00:28:55] Pre-render is always a funny term because you're like, do you mean at build time?  Do you mean at runtime?
[00:28:59] It's not that big of a difference.
[00:29:01] Um,
[00:29:02] But like...
[00:29:05] Generally, you can hit strings. Let me grab a solid playground here for a moment.
[00:29:11] And,
[00:29:13] I don't even know what this example is showing me,  but if I look at the output here,
[00:29:17] Um...
[00:29:20] see this is the jsx output but if i switch to
[00:29:24] server side rendering output.
[00:29:25] This one's too interactive.  Let me do something that's
[00:29:31] simpler.
[00:29:32] Well, you're going to see
[00:29:34] is
[00:29:37] Yeah, that isn't the only point.
[00:29:40] It solves implementation.  This is almost like a template literal.  It's literally taking an array.
[00:29:45] of strings here for the button.
[00:29:48] that this attribute and the button
[00:29:52] And then basically there's a hole here and there's a hole here.  And then we fill that hole in this case with a hydration key, which we'll talk about later.
[00:30:00] And that.
[00:30:00] the escape text of the child. So essentially what this function does is it does a little  bit of processing, but for the most part it just
[00:30:10] Adds strings together, right?  And if you go...
[00:30:14] do svelte.dev hopefully they still have it.
[00:30:16] up here.
[00:30:19] Where's the playground? What do they call it? What do they call their playground? The REPL?
[00:30:24] Playground, okay, they call it Playground, sweet.
[00:30:26] Hopefully we can see I know they've updated.  There's now use like stacklets, but if I go in here and I see I see again client side, you have like.
[00:30:35] some DOM manipulation. But if you go server,
[00:30:39] - Thank you.
[00:30:40] They're just adding literally, you can see the adding here.  They're like here, add this string over.  See, they can tell this is static and in fact,
[00:30:48] uh solid could tell that this is static as well um so i i need something that can
[00:30:54] update. So let's say on
[00:30:56] Click.
[00:30:59] Um...
[00:31:01] name plus
[00:31:04] equals,
[00:31:06] Exclamation mark.
[00:31:08] OK, guess what? Now we're back to the example I was showing with solid where you have the string and then you have
[00:31:15] The escape, see told you there's always escape.
[00:31:17] and then the string again. Again, we have an SSR function. The reason for that
[00:31:22] is to handle
[00:31:25] nested recursion.
[00:31:26] Bye.
[00:31:27] Um,
[00:31:29] I'm not sure Svelte has to worry about nested recursion examples, but...
[00:31:34] But essentially it's the same idea.  You're just jamming a string.  If I go to view, you're gonna see,  I believe now strings as well.  Classically view was not like that though.
[00:31:43] And nor was React nor was Preact, whatever.  Because the way React works is it see things like Svelte  and Solid, which use a compiler for their templating,
[00:31:53] To be fair, React uses a compiler too.
[00:31:55] But there's a difference when you have a compiler that has options like this, like, oh, we're doing client, we're doing server and framework where like they're like, we always generate basically the same JSX.  And...
[00:32:09] React has one JSX transform and you just happen to run that JSX in different environments, which is kind of a cool thing, right? Because conceptually you're like, okay,
[00:32:19] like the the this part of the step isn't platform specific right um classically because svelte's
[00:32:27] basically compiled in and this is not true of svelte 5 but if you look at older svelte they basically compiled in like the dom operations like straight in as part of the compilation um it made it difficult for them to do like universal rendering right what they would do is you like rich wrote a separate like svelte
[00:32:45] gl thing right where solids used its reactivity system as kind of a replacement um for um
[00:32:54] the hierarchy of the virtual DOM.  Like there is actually decoupling between the reactivity  and the DOM specific operations.  And Svelte 5 is like that as well.  I remember someone coming in our chat,  working with Svelte team was saying that I'm working  on a universal render for Svelte.
[00:33:09] and is very inspired by the solid one.  But my point is,
[00:33:16] Having some capability like in the solid playground here,  we actually have to say, you can say client side with hydration,  you have slightly different compilation here again, it gives you,
[00:33:25] this ability to kind of tailor for the environments a bit, right?
[00:33:30] And, you know,
[00:33:32] there's no DOM on the server.
[00:33:34] the reason the server has a separate compilation is because it's more optimal right you could
[00:33:39] The fact that there's no domino server is actually...
[00:33:44] you know a pretty big deal i mean you could bring in the dom but that is kind of slow why do you need  that representation
[00:33:51] Um,
[00:33:52] Even the React's virtual DOM approach is pretty slow, because you actually have to build the virtual DOM and then go, OK, now that I've built this,
[00:33:59] run through this object and turn it into strings.  It's much faster to basically just be like,  I'm just going to append strings as I'm doing it, right?  I'm just going to...
[00:34:08] Add these strings together. Let's see if where was I?
[00:34:12] server side rendering like let's just smash these strings together. Button, hydration key, type button, escape, right?
[00:34:21] -
[00:34:23] But...
[00:34:25] This is...
[00:34:27] a simplistic look at the systems, right?
[00:34:31] This text is too small in the cell playground. Yeah, because I don't hang out there as much.
[00:34:37] so I don't have it set up. Thank you.
[00:34:39] Um,
[00:34:40] But yeah, I was just...
[00:34:44] showing it's it's it's it's very much the same sort of approach
[00:34:48] Um,
[00:34:49] Thank you.
[00:34:54] Yeah, exactly. And it's interesting. I'm sure Hono's server side rendering of JSX is similar. The funny thing is,
[00:35:02] This is a great way to approach it on the server.  This is a terrible way to approach it on the client,  which is why a lot of these solutions that are built this way for server rendering JSX are actually...
[00:35:12] kind of
[00:35:13] terrible for their client side implementation.  Like when they're like isomorphic, like
[00:35:18] I don't know if anyone finished making Hano's GS Framework benchmark, but it was definitely competing with Blazor and Alpine.
[00:35:27] So,
[00:35:30] Okay, this is great. End of story, right? We're done. Um...
[00:35:35] Well, there's this thing called async, which is kind of a
[00:35:39] pain. The reason async is a pain is you can't just make everything a single string. Well,  you can if you fetch everything ahead of time, right? See,
[00:35:48] react even with its virtual dom and everything still had rendered a string and we all have like  you know server-side rendering we have this ability to say
[00:35:54] give me the string synchronously what how do you solve the problem if you have something async
[00:36:00] And,
[00:36:01] For the longest time, the answer was prefetch.
[00:36:05] But I mean, that's tricky.  What if you're fetching deep in the components?  How do you know what the prefetch?
[00:36:10] get server side props or whatever, like you could make hooks and to the build system compiler and basically like hoist out
[00:36:19] The data fetching.
[00:36:22] And then it could know it, right?  And then you can basically do that ahead of time.
[00:36:28] And same principle with, you know, Remix when it came out, because you have to remember Remix was created before React actually released Suspense in a, like, for data fetching that they actually, Remix team actually ended up, like, creating their own mechanisms that are like Suspense.  They created their own streaming mechanism. They basically had to do everything themselves because React wasn't ready with a solution at the time.
[00:36:51] Um,
[00:36:53] But what I'm getting at is that's a solution.  You can kind of pull the data fetching ahead of time and then kind of just render it.  But that doesn't help with streaming, to be fair.  That just means that's your classic SSR where you do all the data fetching and then you send everything when you're done,  which means that your request responds at the speed of your slowest data coming back, which is why...
[00:37:21] people were used to say stuff like get uh surf site props is cursed or something right and a lot of next.js apps
[00:37:29] actually ended up just doing fetching in the component anyways so they were only like half  leveraging server-side rendering because i mean they kind of understood that like if if if you
[00:37:36] the page has to wait for your slowest, um,
[00:37:39] data request to finish to show anything um it's kind of
[00:37:43] awkward.
[00:37:46] So a lot of them would like maybe like do some basic stuff and then basically fetch everything in the client.  And that was actually in the state of SSR in 2018, 2019, which is kind of funny because I didn't think that I would have...
[00:37:58] assumed most people were going to do like the data fetching using like it server side props  but i think we'd already kind of done full circle because
[00:38:05] I was looking at all those demos like real world app.  You guys remember the real world demo?  It was like a medium clone that you could
[00:38:13] do in every framework.
[00:38:14] Um,
[00:38:16] This used to be like the demo to make, you know, when people are like, I want to show that my new JavaScript framework, you know, is capable.  This used to be the this was the demo because you could basically.
[00:38:27] you can basically show that you could do auth, you could do
[00:38:32] data fetching, you could do rendering pagination, all the basically every feature that you need in a framework, you could basically do through this demo, but it kind of fell off popularity. But when I first came into this, I was doing client side and most people want to do like full stack, you know, this is where you could show up your sapper or your knocks or whatever. And I was destroying them on
[00:38:52] page load because they were all doing that wait for the string technique and i think
[00:38:57] Real world, people realized, okay, yeah, I'm just going to fetch in my next components and not use Git server-side props.
[00:39:04] But, which is so much so that when Remix came out with their loaders,
[00:39:10] people didn't instantly go, oh, this is the same thing.  I mean, they should have, but they didn't.  They're like, oh, this is a novel, just because people had gone so far away from it and next by the time that came out.
[00:39:20] Anyway.
[00:39:23] Okay, so that kind of sucks.
[00:39:25] So let's talk a bit about
[00:39:27] um how can we solve
[00:39:31] async so this isn't the case. One of the ways is make async discoverable. By that I mean like
[00:39:39] as part of the rendering process instead of saying like let's do everything ahead you could you can  basically go like as we're rendering we're going to find what's async and then do something like  a boundary of some site like this is the suspense boundary uh marco
[00:39:54] again, what's it called? Async fragments.
[00:39:57] just giving them a quick shout out, it's worth doing.  But they described how they came up with a streaming solution,  which is basically a discover as you render solution.  This is like suspense back in 2014.
[00:40:09] Um,
[00:40:10] But if you look at this,
[00:40:12] um,
[00:40:14] they have this async fragment.
[00:40:16] data providers so it's not as nice as api but essentially they broke their
[00:40:22] HTML into bound sections and said, look, when as stuff finishes,
[00:40:27] um you can send it to the client and then we can swap these in later and i did i've done whole uh
[00:40:34] streams on streaming, but the gist of it is you can just keep on appending HTML to the end of the document.
[00:40:40] even after it's been closed.  And HTML is very self-correcting.  You can stream stuff even in order without closing the document.
[00:40:48] the browser will somehow figure out how to render it to the best of its ability.  Because closing tags are optional.
[00:40:55] Right, so like...
[00:40:59] this is really the approach i mean another option is i think svelte had an await tag again they didn't
[00:41:06] do it the same way. But the idea with the await tag was you could like,
[00:41:11] because i think originally the wait tag only actually properly worked in the client even  though you could see how it's a similar mechanism um the biggest difference between  the await tag and suspense is the weight tag
[00:41:22] requires that you pass the
[00:41:25] Async.
[00:41:27] like the promise to the block.
[00:41:29] I'm trying to remember if Quix's approach is like this too. I think it might be they have a resource tag.
[00:41:36] Um,
[00:41:37] But basically,
[00:41:39] you get to the block and you say, wait this block on this promise.  Right.  And you can kind of see this like as a fairly
[00:41:46] decent approach to doing this because you can just be like, okay, I can render part of my page,  not wait on the slowest thing. And then when I hit a promise, block it out, right?
[00:41:54] Right.
[00:41:55] Web Components...
[00:41:57] spotted web component function, web component syntax, but not actual web codes.  Marco uses tags as their as their code.  So this
[00:42:09] it's so what marco tends to do um is actually and is and actually you to be fair this is the  output you don't actually write a async fragment
[00:42:20] Um,
[00:42:22] Marco could kind of do this automatically later on.
[00:42:25] Um,
[00:42:26] Anyway, what I'm...
[00:42:28] But yes,
[00:42:30] Because it uses tags, it's not actual custom elements, but it uses the syntax.  Because you can, I don't know, a lot of people know this.  The biggest thing custom elements add is lifecycle to tags.  But you can always just like...
[00:42:43] make your own tag up a lot of times we use dashes for the same reason custom elements use the dashes  for the reason of non
[00:42:50] not conflicting with the existing thing.  Like if you have a dash in your name, you know that you won't ever have a conf like namespace conflict with native elements because native elements cannot have.
[00:43:01] dash in it.
[00:43:03] Anyway, um...
[00:43:07] Thank you.
[00:43:11] the the what what react ended up doing with suspense which was interesting was instead  of just putting the promise at the boundary
[00:43:18] Because the challenge with putting the promise and the wait tag is that
[00:43:24] if
[00:43:25] If requirements change down here, you have to go and add things, start adding things to this async or add your own, you know, maybe you should add your own nested async fragment, but everything has to be kind of hoisted up to where that fragment is.  And what suspense is, for example, is an inversion of control.
[00:43:42] it's like saying like hey child
[00:43:46] try to render and whatever you can do it's you know it's fine but if you can't finish
[00:43:54] I got you right. It catches any of this stuff that can't be rendered and says, I'm going to show a fallback instead.  And you.
[00:44:02] take as much time as you need. Right. And what this does is this inversion of control meant that you don't have to know it above. You could you could localize.
[00:44:11] kind of data fetching or not data fetching but async requirements there's a difference  between data fetching async requirements you can imagine um
[00:44:20] There's still benefits to fetching earlier, i.e. higher up, because if you nest things inside
[00:44:27] You could picture that if something blocks something that blocks something, you get waterfalls.
[00:44:31] right so
[00:44:33] there's a difference between being the question of like, can I render this currently and
[00:44:39] you know, fetching down there. But what I'm getting at is,
[00:44:43] This is the kind of approach we took to SSR, generally speaking. We recognize that there's balance within inside parts of the HTML requirements. So, but what do you do within those bounds, right? Because
[00:44:56] The tricky part is,
[00:45:00] When the weights on the outside, when it's like literally the weight tag, then you can just get there and go.
[00:45:07] Stop.
[00:45:09] you know,
[00:45:09] And then you go continue.
[00:45:12] But when it's discoverable,
[00:45:14] inside and you have to bail out
[00:45:16] then you end up in this kind of interesting zone where
[00:45:22] You...
[00:45:24] more or less...
[00:45:27] maybe have to re-render stuff. In the case of React, it tries to render,
[00:45:31] And then when it fails, it fails up to the boundary.  It's like an error boundary.  Suspense is very similar to an error boundary.  And then when it finishes, it tries to re-render it again, right?  That was the classic model for how React handled the server,  which can be kind of inefficient.  To be fair...
[00:45:46] And the reason I'm bringing this up is that's how solid works today as well.  Solid has this like crazy, beautiful run once, you know, retained mode, ultra performant approach in the client.  But then when it hits a suspense boundary on the client on the server, it's just like, oh.
[00:46:01] Oh well, let's try again.
[00:46:03] Because it was simple.
[00:46:05] When I was benchmarking solid SSR rendering, it was like,
[00:46:08] several times faster than most other solutions.  So I was like, what's the cost of just doing the server rendering again for these fragments or suspense boundaries?  Because I mean, if you're already like you could do it three, four more times, whatever.
[00:46:21] you're if you're already 10 times faster,
[00:46:24] like,
[00:46:25] Who cares, right?
[00:46:26] But,
[00:46:28] you know maybe that's an unfortunate side effect of this whole thing but it's the key part is once  you go down this road
[00:46:37] Smash to string.
[00:46:39] doesn't
[00:46:41] like it becomes tricky because you either, as I said, if you smash the string like this, you have to re like you have to re render it again because you can't go, oh, this name is async.
[00:46:51] like continue where you left off you you're just like okay go to the boundary and smash to string  again
[00:46:57] That's,
[00:46:58] That is kind of
[00:47:01] the problem and that's exactly as i said what's all it does right we we go we we keep a while we're  server rendering
[00:47:09] Well, actually, yeah, now I'm getting to the heart of the matter.
[00:47:13] Thank you.
[00:47:16] If you,
[00:47:17] fetch below a suspense boundary or below like an async fragment here.  And people are familiar with this with client side react as well.
[00:47:26] If you're fetching below,
[00:47:30] And it's re-rendering it.
[00:47:33] It's going to like the most naive thing it's going to do is fetch again.  Every time you hit the component again,
[00:47:39] first time like from its perspective like this wasn't here before it failed it  errored it doesn't know the state inside this boundary it's it's garbage so it goes
[00:47:48] runs, fetches,
[00:47:50] renders some stuff, sees that it's not ready, bails out.
[00:47:54] collects the promise.
[00:47:56] finishes runs again hits the fetch again and then fetches again
[00:48:02] fails like how does the old promise from the last run get into the new promise in the new run  if you're just re-rendering it again right
[00:48:09] Um,
[00:48:10] And the truth of the matter is stuff like use memo and react like hooks don't actually protect you in this case. This is why people have had such a hard time implementing suspense. And there's that whole like fetch up hoist up your fetching thing.
[00:48:26] Like, how do you establish, um,
[00:48:30] that these are the same thing.
[00:48:33] And,
[00:48:34] I mean, there are solutions.  The reason that like memos don't work in React that way  is actually a slightly different thing.  You could pretend or conceptualize  that they could work in React,  that you could like keep the reference.  But like in a system like React,
[00:48:49] like solid which doesn't have that kind of reference stuff how did how did i solve this well
[00:48:53] hierarchical IDs.
[00:48:55] Right.
[00:48:56] And the funny thing is I found out React does something similar themselves.  If you actually, how do you,
[00:49:03] How does...
[00:49:05] use
[00:49:06] ID work.
[00:49:08] I googled this a while ago.
[00:49:11] And I came across, what is this?
[00:49:13] How does use ID work internally in React?
[00:49:17] Right. You have to remember use ID or create unique ID in solid gives you an ID that's the same on clients and server rendering.
[00:49:28] Right.
[00:49:30] And
[00:49:33] I
[00:49:34] They go into this, but they talk about the fact that they use the fibers inside.  They're actually looking at the VDOM tree.
[00:49:42] and they're like tree get tree id identifier prefix blah blah blah like they're they're building  up basically this code based on its
[00:49:50] Parent.
[00:49:51] Because if you have a tree of structures and the tree can change shape or things can be added and removed,
[00:50:00] Okay.
[00:50:01] it's possible that things get created in different order,  especially with async.  It's possible that like one thing resolves first this time  and something else resolves first another time.  But as long as the decision of whether to show it,
[00:50:12] is above that resolution point, then that's fixed.  So essentially you can use the hierarchy of the virtual DOM,  for example, to be able to come up with stable IDs.  And this goes through this whole thing explaining how,
[00:50:25] Um,
[00:50:26] like the fibers basically end up being able to generate
[00:50:30] Um,
[00:50:31] this hierarchical ID.
[00:50:33] And,
[00:50:34] The beef.
[00:50:35] Fair.
[00:50:36] I wasn't aware of this. Honestly, this hadn't come out like as a public API at the time I was working on solid solution, but solid hydration key is almost identical to this.
[00:50:47] Because the idea is,
[00:50:50] Look, if you have data fetching,
[00:50:52] You could set a key yourself, but if you want the system, like if you just go, I want to fetch this data, you know, like in a component below some suspense and you want it to just work and it's doing a rerun model.  Well, you need to be able to find it again when it runs again.  And so I...
[00:51:06] basically came up with an ID scheme
[00:51:09] like this which essentially
[00:51:12] would match up so when it reran the tree it would be able to find the resource again and go okay i've  got the promise
[00:51:17] I can continue.
[00:51:19] right um as i said it's funny i released the solid version before react released this but if you go  back to earlier versions of react internally react had hydration ids on their dom nodes when for ssr back in like the
[00:51:31] 0.14 days or whatever, like way back in the day, they changed their hydration approach to be better around react 15, I think.
[00:51:38] But...
[00:51:39] but they've always had this ID system on virtual nodes.  They just didn't expose it to you until after.  Like, see, look at this. You can see here. 0, 1, 0, 1, 1, 1.  Anyone who used Solid should know, like, this looks very, very similar to our hydration keys,  because you essentially have to mirror the tree. In their case, it's the VDOM node tree. In Solid's case,
[00:52:06] I used components.
[00:52:09] because I didn't really care about the individual elements. I needed it for context. So essentially, I used components.
[00:52:15] Um,
[00:52:17] But there's other like you're dealing with a hierarchical graph. So
[00:52:21] It's just something to consider.
[00:52:24] So,
[00:52:26] This is my kind of preamble.  So you start understanding the problem space when you're doing re-rendering, when you're doing async operations.
[00:52:35] It's not enough. And this is why it's taken a long time and why you need these foundations for this stuff. This is why Svelte hasn't done this in the past six or seven years or I guess Svelte's turning nine pretty soon here.
[00:52:50] Thank you.
[00:52:53] I mean,
[00:52:54] It's possible because...
[00:52:56] Um,
[00:52:59] I mean,
[00:53:00] The...
[00:53:01] Okay.
[00:53:03] old, old React that did they create their elements one at a time.  And because it's JSX, they could be created any order anyway.  So like solid clones templates.  So we actually only need
[00:53:15] we actually generate IDs per block of code,  where React creates your elements one at a time.  So I feel like this is like a historical thing  in terms of like,
[00:53:24] like they basically every element could be matched up one for one.
[00:53:31] Right.
[00:53:33] Um,
[00:53:34] They don't need to output this anymore because when you have hierarchical IDs, I think they  realize at a certain point that if they change their state management or did a few things,  it's basically predictably consistent.  So it will render the same on the client on the server, which means without...
[00:53:49] rendering the IDs into the page, you should get the same output on both environments.
[00:53:54] which means they should just match.
[00:53:56] I mean, this is the source hydration mismatch, right?  But conceptually, um...
[00:54:03] Like,
[00:54:05] uh,
[00:54:05] If you basically have
[00:54:09] the right kind of state mechanism and you have these hierarchical this hierarchical system that
[00:54:14] keeps uniqueness this way you should be able to match as long as things render the same way on both sides
[00:54:24] Couldn't a lot of these complexity avoidable creating things weren't permanent but components?
[00:54:29] It depends. If you want to say it is the suspense boundary, then you don't need it, but then you don't have inversion and control, which is...
[00:54:38] doesn't scale right like if you want to say it's an await component for sure  otherwise the fact that it's a component or not
[00:54:45] Like whether I'm making the ID because it's a primitive or it's a component, as I mentioned, it's all we use components for doing this.  It doesn't matter. I still need this hierarchical ID system that in theory I wouldn't need otherwise.
[00:55:04] With Svelte 5, we greatly support mismatches in SSR and client as a feature.
[00:55:09] so we wouldn't use the tree.
[00:55:12] Okay.
[00:55:13] Thank you.
[00:55:14] And by Grace Lee's support, I imagine clientele.  This is one of the places where I've been trying to figure out where I want to take a position on it.  Because, again, this is like...
[00:55:23] I'm very I've been nerd sniped by quick and like part of me starts getting to this zone where I'm like, should the client be able to.
[00:55:30] to heal,
[00:55:32] Because that would presume that certain code would have to get to the client eventually.
[00:55:36] So, I mean, I started this progress in 1.8, and again, I don't know if it's completely right, where I started being less forgivable for hydration mismatches, because I think ultimately...
[00:55:47] were like
[00:55:49] it gets us to a place where,
[00:55:52] where like we shouldn't have the expectation that all the code will make it to the client i i know this is like
[00:55:59] thinking like really far out, but, and it's less happy place, but I mean,
[00:56:05] It's kind of like one of those like stick the
[00:56:08] your foot forward and this like hope it can keep on walking um
[00:56:13] I guess we'll see you.
[00:56:16] I think people should like this dream.
[00:56:19] - Yeah, I agree.  Like, subscribe,
[00:56:23] follow comment I don't know.
[00:56:25] Very much appreciated.
[00:56:29] So,
[00:56:31] Yeah, this is an interesting thing.  There's a couple aspects of the solutions that lead to this,  but I wanted to point out that...
[00:56:41] It's compounded to have different content for the server than the client for better UX in case of re-examination, which is the long-term future result. Okay.
[00:56:47] Yeah.
[00:56:48] Um,
[00:56:50] Yeah, I guess it's a question of whether those kind of situations should be special case as to guard future features for cases where they should be the same.
[00:57:01] which is, I think, the majority case.  But yeah, progressive enhancement is an interesting one.
[00:57:06] or what I like calling it, graceful degradation is like what my favorite term for progressive enhancement.
[00:57:16] you
[00:57:18] Thank you.
[00:57:19] Anyway,
[00:57:22] Thank you.
[00:57:24] What I'm pointing out, the idea here is actually mostly for...
[00:57:30] I know we're looking at DOM elements here, but mostly for...
[00:57:33] uh,
[00:57:35] for,  for,
[00:57:36] Linking up.
[00:57:38] Um.
[00:57:39] resources in this case, linking up async fetching.  When you do the re-render, it's the same one.
[00:57:45] We don't need to necessarily render this into the HTML, but the fact that when you make the structure again and you can find the async thing, you can match it up automatically. Otherwise, you could also say user, provide me a unique key. You could be like, what is this query called? Then you can match it up too.
[00:58:03] But this was like, if you want, this is one way of coming up with a unique key in a tree.
[00:58:08] Thank you.
[00:58:09] Okay, so I think this is probably
[00:58:14] enough preamble to get where I'm coming into these problems because
[00:58:22] I started
[00:58:23] a while ago coming up with different approaches here.  I wrote a bunch of HackMDs and I want to talk about a few of them today.
[00:58:30] One of them was my 2.0 SSR plan.  But before that, let's talk about
[00:58:37] I like spitballing out and I'll share this in the chat ideas like,
[00:58:44] Thank you.
[00:58:45] Sometimes I like...
[00:58:48] like,
[00:58:49] I think it's an important exercise  where you go, can we  do something just without it?  Get rid of it.
[00:58:56] As you guys know, when I was working on async, I wrote a whole bunch of stuff.  It's like, screw transitions.  I don't like transitions.  Let's not do transitions.  Can we, what would the model look like?  So sometimes it's useful to kind of go through the mental exercise.  If you take something you assume that you need and you just get rid of it.
[00:59:11] And
[00:59:13] That is...
[00:59:16] kind of where you have to start here, because I just went through a whole tangent about  suspense and or boundaries of some sort being the governor of how we do streaming and doing  async and SSR. So the first question is,
[00:59:29] Can we get rid of them?
[00:59:30] can we just do ssr without async without boundaries and um
[00:59:38] Let's talk through that a bit.
[00:59:41] So, yes, the short answer is yes, but I want to dig a bit more into what makes sense or  not and the consequences of different ways this can be handled.
[00:59:49] Which brings us our first question, should we wait for async when we encounter it outside of suspense? Yeah.  So what I mean is if you just have...
[00:59:58] Thank you.
[01:00:00] Yep, an early stream, yeah.
[01:00:02] This might be my new time because of school pick up and drop off.
[01:00:09] So the
[01:00:11] And actually on Twitch, am I streaming the right category?
[01:00:14] No, every time
[01:00:16] StreamYard switches me back to
[01:00:20] Talk shows and podcasts. Really annoying. Sorry. Just a second. Let me update that. I wanted to, what am I? Game development.
[01:00:27] Software and game development. There we go.
[01:00:32] Bye.
[01:00:34] Finally, okay.
[01:00:36] Okay, let's...
[01:00:38] I always forget to do this. Anyways, let's continue on. Where were we?
[01:00:45] Yeah.
[01:00:46] So this is like,
[01:00:48] We were looking at our async example, you know, when I was talking about this async fragment,  and I was talking about like, you know, doing data fetching or doing stuff.
[01:00:54] you know,
[01:00:55] Is it possible for us to just like
[01:00:57] Forget about the boundaries.
[01:00:59] And just...
[01:01:00] How could that work?
[01:01:02] because in a sense
[01:01:05] One way of knowing we're done is by putting a boundary around it.
[01:01:08] Another way is collecting all those promises that are in the UI and deciding when we're done.
[01:01:15] Basically, if I go here, I go,
[01:01:18] which for sure,
[01:01:19] Wait or not wait?
[01:01:21] solid rcs have taken the opposite approach here but solid 1.0's approach didn't wait and and didn't  really work in a lot of cases basically we only lazily only lazy consistently worked so async ssr  without suspense was basically
[01:01:33] No go. In solid today, if you try and do async,
[01:01:36] without suspense, it doesn't work.  If you've seen an RSCs, what they do is they actually almost have like an imaginary suspense  boundary around the whole page.  So it actually holds like the old async hold.  Like if you don't do anything, you just put async on your page with RSCs, like make async  component. It will do that behavior that nobody likes where it waits till everything is rendered.
[01:01:56] and then sends it back.
[01:01:58] which seems like a reasonable default.
[01:02:01] Although client side, that doesn't work, right?
[01:02:08] Yeah, so what I said, this is pretty convenient as it lets opt in to be more gradual. And Next has used this to do things like PPR, right? Because they basically assume like if it's above the suspense boundary,
[01:02:16] it's like static.  That's essentially just a PPR.  But RSCs are not isomorphic.  They only run on the server,  so there's no consequence of them behaving this way.  They can't update the client.  If a client component under them were to throw a promise  and no suspense above it,
[01:02:29] things would not go so well because, you know, in React,
[01:02:32] if there's no suspense boundary to catch it, it crashes, right?  In solid, our async model doesn't require suspense boundaries right now.
[01:02:40] So it's funny that we're like this weird opposite.
[01:02:43] But...
[01:02:44] Um,
[01:02:45] Solid async can work without suspense in the client. It isn't a great experience but it won't crash. Does it make sense?
[01:02:53] It is held on the server.  Then we know that by the time we hydrate,  we'll have all the async values resolved,  which means that any future update will tear predictably.  In a sense, we just skip the fallback and continue from there.  So waiting does work, well, at least on the surface.  What happens if we encounter a new async?
[01:03:08] lazy or data fetching behind a conditional. Then we're back to square one of not having a suspense  boundary above it and no fallback to show. What I'm getting at is, does this make sense?  I'm just going to throw a playground out here so you guys can see what I'm talking about. What if
[01:03:23] Let's pretend that
[01:03:25] that this
[01:03:28] I'm just going to add something else. Let's just go const.
[01:03:34] Um.
[01:03:35] async.
[01:03:37] data.
[01:03:38] equals create async.  I'm doing this in solid syntax so you guys can understand what's going on.  If you're familiar with the stuff, fetch.
[01:03:44] something.
[01:03:45] What happens?
[01:03:47] if
[01:03:49] we have something like this.
[01:03:52] And we're like pretty happy that there's no suspense boundary, you know, and we've simplified things.  But then we have some code that's like,
[01:03:59] I'll use solid show component. It could be a turnerary. It doesn't really matter.
[01:04:05] But it's like show...
[01:04:07] when
[01:04:09] Count.
[01:04:11] is bigger than five.
[01:04:14] And let's now show async data.
[01:04:17] So,
[01:04:19] We didn't need...
[01:04:21] this data to render this page because count was one, which is smaller than five. We skipped right over it.
[01:04:28] We don't care, right?
[01:04:29] Um,
[01:04:31] But,
[01:04:31] at a future time,
[01:04:33] when count becomes bigger than five,
[01:04:37] And
[01:04:38] there's no suspense boundary for it to fall back to. That's all I'm getting at is like,
[01:04:43] RCs don't have this problem.
[01:04:46] a future because they only exist for the like the length that you're rendering the page when you're  on the server you don't have to worry about this like client interaction but if you're like talking  purely client side if you need suspense you need suspense or you don't need suspense you don't need  suspense because of the potential of new discovery
[01:05:05] It's not as simple.
[01:05:07] as saying that
[01:05:10] You know, it just works this way the first time.
[01:05:13] Does that make sense?
[01:05:15] You guys following here?
[01:05:18] Because if you hit that new async,
[01:05:20] It's, you know, it needs to go to fallback. It can't resolve it. It does not have the data
[01:05:25] to
[01:05:25] to show it theoretically.
[01:05:29] Now,
[01:05:31] This isn't like the best example because technically speaking, this async,
[01:05:36] fetches eagerly in Soled's model. So like when it,
[01:05:40] enters
[01:05:42] the new zone, it will have the previous value. So it might like,
[01:05:45] in solid 2.0's like model this would actually work but like you could picture if the data  fetching was underneath the show component so like there's no way for it to fetch below  like before this ran like it wasn't eager like this then yes you definitely don't  have the value you definitely don't have anything to show
[01:06:03] you
[01:06:03] like,
[01:06:05] this is a situation where you would go up to suspense now obviously we could say like you  don't need suspense and salt's model but you understand like this is a suspense situation  where you could show broken a a
[01:06:15] I think we've talked about this before.
[01:06:19] what
[01:06:20] one of the classic problems here is like if you put a div
[01:06:23] in here, sorry, div.
[01:06:26] And
[01:06:28] Yeah, everyone like inserts are easy to picture, but like what if,
[01:06:32] What if it's like,
[01:06:34] Class equals,
[01:06:37] Some class...
[01:06:44] Some class.
[01:06:46] What if it's like this? The tearing here,
[01:06:50] could be unpredictable if you don't have a boundary involved right because it's like
[01:06:54] like don't get me wrong, there's transition models.  There's other ways we could solve this,  but like a naive tearing approach here will show the content  without the class being applied until the class is ready.
[01:07:06] It's not enough just to be like, oh, you know,
[01:07:09] Sorry, it's not inserting anything.
[01:07:13] you know,
[01:07:15] Who cares? It's just blank. I mean, that's not always the best experience, but you can actually
[01:07:20] if you have async stuff and you're just like
[01:07:22] skip without showing suspense, you can end up with weird holes, not just like,
[01:07:28] you know there's some content not loaded yet but like
[01:07:31] a class isn't applied or a source is missing on a link or something.  You know what I mean?  Like you could,  you could break in ways that you have no idea you could break.
[01:07:42] So we talked about this previously on stream.  I called it unpredictable tearing.
[01:07:48] Thank you.
[01:07:52] Okay.
[01:07:55] So,
[01:07:57] All right.
[01:07:59] Thank you.
[01:08:01] So, okay, is not waiting an option?  So we talked about...
[01:08:06] about what would happen if
[01:08:09] if we just were able to wait and not do the suspense.  So it's not waiting an option.  RenderString has no ability to do anything  but return a string synchronously.  So if it encounters async, it's options are limited.  It either errors or returns with holes, right?  We just talked about it.  The other position, if we want to just stream the data,  not the HTML.
[01:08:26] yeah so what i was saying is what if in a situation like this
[01:08:30] Thank you.
[01:08:31] the expectation
[01:08:33] is...
[01:08:35] Again,
[01:08:36] this isn't a great experience necessarily,
[01:08:39] But could you just stream this out
[01:08:42] and then stream the data in from the server.  And then when the data gets from the server,  basically client renders the rest.  That's kind of like the hypothesis here.
[01:08:52] It's worth pointing out there's a difference between no suspense and no async reads.
[01:08:57] It is possible to do async and not trigger a read via some sort of guard.  Yeah.  So what I'm getting at is conceptually, um,
[01:09:05] We've been showing this off on the solid 2.0 signals 2.0 stream,  this idea of like async guards,  but you could build a system where you're like, Hey,  don't trigger suspense under this condition. So it is,  I do want to point out there's a difference between saying like there's,  there's,
[01:09:20] No suspense.
[01:09:22] And like,
[01:09:24] and no guarded async like this can at least inform you that it's intentional like here
[01:09:30] you don't know what the person intended.  This is a messy,  but if,  if,
[01:09:35] if the condition was like show
[01:09:39] is,
[01:09:41] when not is pending
[01:09:45] async data,
[01:09:48] This conceptually is like...
[01:09:51] you could say without this, you could consider that like an error.  But like with this, you can say like, look, we're informing that, hey, we care if this is async and this won't trigger, you know, like a suspense.  We're taking care of it ourselves. You know that this won't render until this is this is handled. Right.  So like there's a difference between this and just being YOLO. Right.  You could say that the YOLO version still is an error, but this version is fine because it's it's actually informing intent.
[01:10:18] and it's explicit.
[01:10:21] So
[01:10:22] Of course, to do so is pretty intentional,  but it does differentiate things so we control what we can't.  The difference with guards is that they won't trigger suspense  anyway, so they'd have to work if we were to have them.  So in some ways, this doesn't impact our decision.  And since there's a way to-- maybe there's  sufficient data streaming solutions.  Can they work?  I guess is a better question.  Maybe these avoid suspense APIs.
[01:10:41] maybe these avoid expenses are untenable my biggest concern i see here is hydration  if the data hasn't resolved yet when hydrating in these cases should
[01:10:49] be more or less okay since the html and the hydration state will match but there will be  some places where this could fall apart so what i'm saying is like
[01:10:57] if you assume
[01:10:58] that this hasn't loaded when it flushes,  you're just gonna get the button,  and then the client will be able to just render the rest in.
[01:11:05] Thank you.
[01:11:06] *sniff*
[01:11:08] Right.
[01:11:11] But if the data loads before
[01:11:15] the render finishes on the server, then you might be in a state where you actually have the data on the initial flush.
[01:11:19] and you'd have to make sure that the client was communicated that information.
[01:11:24] Like what if some case the data is loaded and others it isn't like maybe it's in a cache.  If they aren't present at flash time, we won't wait for them.  So they won't have updated on the server release.  Though through some combination with suspense, they happen to be,  then I assume that the data will have been sent to the client by the time that boundary hydrates anyways.  The other question.
[01:11:39] issues data loads before the client is able to hydrate.
[01:11:42] but wasn't present at the time of server rendering.  This is the more critical one.  'Cause I feel like this one,  you could like do something smart.  It's a bit awkward if you went to hydrate,  expecting the HTML to resemble the data,
[01:11:53] not there, but then the data happens to be there. Like it's possible that it takes longer for the JavaScript to load on the client to do hydration, then like the stream of the data comes in. So like,
[01:12:04] you almost have to replay the events
[01:12:06] in the exact order that they happened. Otherwise, you know,
[01:12:11] you might hit an issue where you actually have the data and you go to hydrate and the rendered HTML didn't have the data and there's a mismatch.
[01:12:20] Okay.
[01:12:21] like the service I would have to mark things not read async under suspense versus things that are.  But what if in one place it's read and another isn't? What if under those different boundaries? Yeah, I talk I kind of go on and talk about like complications with this.
[01:12:33] Technically, I mean,
[01:12:36] You could take a stance that if it initially renders to not available,
[01:12:42] You hydrated that way.
[01:12:43] always, essentially.
[01:12:46] But it's tricky if the same async is run right under different boundaries.  I mean, I'm not saying it's unsolvable.  I'm just talking about lots of complexity in terms of making that decision.
[01:12:57] Technically, the scripts appended at the bottom of the page run synchronously and in order,  but they don't trigger actual hydration because the async page scripts may not be present yet.  We almost need to have them be blocked by hydration to process.  It's interesting.  Lazy is another interesting thing is it isn't something we can just serialize or haven't until now.
[01:13:16] but lazy code may not be present and interrupted.  Yeah, what I'm getting at is,
[01:13:22] Server driven mechanisms are where when the server is done.  So when the server has rendered the code, when the server has loaded the data, but
[01:13:30] If you're kind of waiting to be able to
[01:13:33] for data load to be able to hydrate synchronously for portions, like different boundaries.
[01:13:38] It's kind of awkward.
[01:13:42] that the client
[01:13:44] might not be like a lazy component is a perfect example.
[01:13:49] you're importing code.
[01:13:51] On the server, you import the lazy component and use it to render things. But the client
[01:13:57] has to also import it. So the fact that the server has
[01:14:00] imported the lazy code doesn't mean the client is up.
[01:14:03] imported yet. So currently in solid, when we actually go to hydrate,
[01:14:08] we do it when the service is done,  but the client might actually not have all the resources yet it needs.
[01:14:16] Um,
[01:14:17] And this is a tricky problem from a bundling perspective too, right?  Because you can have the same lazy code have different hashes to incline to servers.  So like it's not as simple as being like have the server be like, hey,
[01:14:28] we're going to need this so load it and then when it's loaded that's when you you know you know
[01:14:31] Hydrate?
[01:14:32] because the actual file name could be different  for the exact same chunk from client and server.
[01:14:39] Um,
[01:14:41] So...
[01:14:42] yeah it's interesting like right now what solid does under suspense is we hydrate  synchronously it's a lot easier it's hard to have stuff hydrate
[01:14:51] coming in at different times because you have to kind of enter and exit hydration mode and lazy components are one place where we do that and I think it's messy.
[01:14:58] where it'd be great if you can just say like,  I'm gonna hydrate when this block is completely ready.  And that includes a client-side stuff.  But because of asset management and bundling,  this is actually tricky unless your suicide rendering system  is actually aware of how things get mapped by the bundler.  It's not beyond something that I'm thinking here.  I know Noxt has a trick where they actually compile
[01:15:19] in like unique identifiers on both sides.
[01:15:23] because you can always use the source position.
[01:15:25] in the source code because that's the same before like it's bundled out like into the different  environments to actually get a a constant identifier that's the same on both sides  but that requires processing of all your files and not just like some jsx somewhere so like there's
[01:15:40] There's again,
[01:15:42] manual and then compiler based solutions, but it adds this kind of layer of complexity.
[01:15:48] So.
[01:15:50] If we could hold off hydrating boundaries  until lazy code is loaded, we need to encode  where it's spent on certain code and hold off to it settled.  If we want any particularly in terms of data resolution,  hydration, we need to run the whole boundary synchronously.  Yeah, bang, okay.
[01:16:04] So is no top level suspense a thing?
[01:16:06] It seems not waiting is complicated.
[01:16:10] Technically it could work, but there are a lot of edge cases, unless we basically replay  the timeline on the server on the client. I also don't think unless intentionally guarded
[01:16:19] not waiting is behavior we want waiting works in the simple cases but falls apart when something  new happens under a conditional but this is always a problem even when with tearing async  and it isn't really an option for render string suspense at least sync bails out so maybe all of  this is more about setting more general rules in perspective let's create a hypothetical rule set
[01:16:36] On the server, render string requires top level suspensive guards.  It doesn't have any complications with timing since it needs to fetch on the client anyways and doesn't wait on the server.  So we just error out if unguarded ASIC makes it to the top.
[01:16:47] Right.
[01:16:48] The thing is you don't have to worry about async hydration with render to string type method for rendering because you know that you can't get more HTML from the server later.
[01:17:00] right like it literally it's over once you've got that synchronous chunk
[01:17:05] you're done hydrating.
[01:17:09] Other render methods.
[01:17:10] Wait on the top level for async. We need to consider if we should respect a guard provides in the client user effects can handle async without suspense.
[01:17:20] Unresolved async read in a render effect with no parent suspense errors out. Unresolved async reads under suspense transition can be guarded. New unresolved async read under an existing suspense logs a dev warning suggestion to use Ness's suspense error transition.
[01:17:34] What this would do is SSR would work without suspense,  but the second someone did any new async,
[01:17:39] used in rendering outside routing, which is
[01:17:42] which is done in a transaction which is safe, it would error.  So basically if someone just starts adding random async under conditionals  without boundaries, it would break.
[01:17:50] Does this save us from needing to first streamer case A-sync?  Only if we value with red in the top most suspense.  This is something that could happen with meta tags, I suppose, worth exploring.  So I think you could have an application of suspense if it was very basic.  I know major UI changes outside router transitions, but even then,  I'm not sure this would be great, but as a baseline,
[01:18:08] that can be a reasonable with run once but almost immediately beyond that you'd  have suspense and we probably need to be pretty aggressive in directing people that way
[01:18:20] Yeah, there's some fun with that. And honestly, we're in this place where we can start using compilers to solve everything at this level. And I've been resisting this as long as possible. Philosophically, people...
[01:18:39] people don't solid is probably nowadays the least compiled
[01:18:43] of the main frameworks, ironically.
[01:18:47] because React now has its compiler. I would say React and SolidWorks were about the same before.
[01:18:51] But we actually use compilers less than everyone else.  Even though when Svelte came out, everyone thought we were Svelte.
[01:18:59] But we are not.  We are the least compiled JavaScript framework, ironically.
[01:19:07] Mm.
[01:19:07] I think as long as you denote things for compiler explicitly,  it's fine, but it is dangerous to like where edge cases come out.
[01:19:18] um when you have like implicit behavior around compilation
[01:19:26] - Yeah, I mean, I thought about SSE for a while,  'cause one of the problems is you can't guarantee  that you have persistent state.  You have to assume that 90% of people can't,  like are not incapable of opening web sockets.  So it can't be the general solution.  Like it's great where you can,  and I have people on the team like Dev  who are very deep along that line.  But generally average person throws something up  on a Lambda function, does not get web sockets.  So, yeah.
[01:19:52] Thank you.
[01:19:53] It's tricky.  I mean, I've tried...
[01:19:56] I don't,
[01:19:57] know if more server client communication, I mean, it is, we can still play along the original stream, I think we just need to, the server has to be aware of the client bundle, but that's the gist of it, right? As long as the server can be like, hey,
[01:20:12] You're going to need this.
[01:20:14] then we're fine. I just haven't found a generic solve for this yet. It'd be amazing if I had a generic solve for this. Like, we already have the protocol. The initial HTML being rendered down has the capability of doing all this without opening a second connection.
[01:20:31] Thank you.
[01:20:32] Yeah, I mean...
[01:20:34] We say that, but then we're going to talk about the async proposal in a minute.  Svelte definitely...
[01:20:40] See, it's kind of interesting.
[01:20:42] You say like Svelte's more runtime, but the thing is Svelte now compiles files that aren't just Svelte files. So in a sense, the scope
[01:20:52] of their compiler has actually increased, which increases the potential of the
[01:21:00] edge cases i guess to speak speak so like
[01:21:03] there's a i guess the what magic means means different things to different people but like
[01:21:09] Thank you.
[01:21:11] The bounds of compiler are an important aspect.
[01:21:16] Thank you.
[01:21:19] Thank you.
[01:21:20] oh really i thought you already had suspense boundaries okay anyways it's so funny like we're
[01:21:26] The...
[01:21:28] I'm kind of wondering if Dan Abramoff's right.  And we'll get to this in a few minutes.  It's just funny.  Solid was the only...
[01:21:35] framework of the big ones, like, we're not big, like fifth, I guess, or sixth, that actually implemented transitions alongside React.
[01:21:43] um
[01:21:44] you know, back five, six years ago.
[01:21:46] and everyone told react they were wrong and i was like no reacts
[01:21:50] The transitions are good in a certain use case.  Just the one that got demoed by Dan with the stupid radar thing is not that use case.  There's a huge value to them.  It's just.
[01:21:59] But most people are like, no, we don't need this.
[01:22:01] And it's like, we'll talk about it more.
[01:22:08] Okay.
[01:22:10] I'm sorry.
[01:22:13] So yeah, anyways, what I'm saying is we could kind of let people get by and then kind of like error on them to direct in the right way once they get there.  But that's like, is that the reality you want to live in?  We could also just set rules and be like, no.
[01:22:25] As I said, Bubba, I think the ideal world suspense around us would only hydrate when
[01:22:29] ready which relies on execution for the server to gather async resources since code css other assets are not
[01:22:34] things we can just serialize.  I believe we need to communicate the client to load these assets and hold off things until  they're ready.  It's tricky though, because I believe it's possible for lazy imports to have different  hashes clients are to map them yet.  So what I'm getting at is I'm wondering if in a world where literally, you know, VEAT  has manifest for client to server where.
[01:22:51] like we expect a format like that and then we're like okay guys i know this is kind of weird but
[01:22:56] are render to stream or render string to actually work properly.
[01:23:01] Like right now, you can say it's an optimization, but to actually work properly, you have to pass in your bundler manifest.
[01:23:07] I don't know if I want to go that far, but it would make my life infinitely simpler.  I think, like, for me, I think that's preferable than, say, come up with something where you go and compile every...
[01:23:18] piece of code and hope that you hit them all.
[01:23:25] Thank you.
[01:23:29] Thank you.
[01:23:32] Thank you.
[01:23:33] Thank you.
[01:23:34] Thank you.
[01:23:35] Thank you.
[01:23:38] Thank you.
[01:23:46] Yeah, I mean, it's interesting here talking about magic is like technically speaking,
[01:23:52] I agree when hooks came out, things got much more less clear for people. Pre hooks, React is really easy to explain. Post hooks, the fact that this thing is persistent in the background is harder to picture. I mean, it's not that hard to picture. You can think of context as a perfect example of where React does this later. But
[01:24:12] It definitely, that was the point where people stopped being able to just go like, oh, I feel like I could write something like React in a weekend. That's when people are like, what the hell is going on?
[01:24:29] Yeah, yeah, yeah. Definitely from the fact that they are no longer using the compilation to do reactivity.
[01:24:36] um and rely more on runtime it removes some of the like
[01:24:40] it just works kind of magic aspect i just meant like the scope of  yeah it's i guess it's less magical but the scope of compilation has increased so it's like
[01:24:49] the concern about
[01:24:52] how in
[01:24:53] base of it is are still there.
[01:25:01] i mean at this point from an output standpoint like view compositions felt a view with vape per  felt like we're not really that different i think there's a philosophical um thing  we need to look at in terms of where it sits but i mean
[01:25:20] I mean, most people know this.  Vue had a proposal for something that looked  basically like Svelte Ruins, like
[01:25:27] four or five years.
[01:25:28] go around because they saw  Vue was like we have this fine grained reactive system  with composables and then they were like  huh
[01:25:35] Everyone's going to Svelte because it's easier because of simple syntax. So they tried to apply
[01:25:40] um you know their own dollar sign syntax to view uh it was called the ref sugar thing and
[01:25:47] in the end, ruins and that ref sugar look
[01:25:51] very, very similar. I know because Alexa saw the view proposal and made a library for solid five years ago for the same kind of thing. So like,
[01:25:59] in a sense now we've gone to a point where the baseline is all very very very similar
[01:26:06] Thank you.
[01:26:07] Thank you.
[01:26:11] Yes, yeah, yeah. I think that's fair. And in a sense, Solid hasn't leveraged this yet, but...
[01:26:19] we can use the .jsx extension if we wanted to do that.  Essentially, we could say we only process
[01:26:28] TSX or JSX files.
[01:26:32] So I've considered this, and I think this is...
[01:26:36] Yeah.
[01:26:40] Yeah, well, they deprecated for the same reason  that I didn't merge it into core.  I thought it was worse than the problem  that it was solving,  especially when you start thinking composition  and they start having these double dollar sign out things.  What Svelte had come up with a,  well, first Svelte 5 didn't solve the problem  and you had to, you know,
[01:27:00] pick your own wrapper, which I think was better than the $$$, to be fair. But then later they got the class mechanism for kind of auto compiling into classes, which is a little bit nicer ergonomic than the $$$. But I mean, obviously, I still stand by my original position, but I'm free to have my opinion, which is different than others. I do think what ruins solve
[01:27:21] personally, isn't worth the effort compared to like the problem, like the problem that's just
[01:27:27] bad as this or the solution is as bad as the problem but that's just like my  personal thing i can see why some people think differently
[01:27:35] Um,
[01:27:37] Anyways.
[01:27:41] Thank you.
[01:27:42] That's the first of our SSR discussion today.  So I think that the highlight on that one is simply...
[01:27:51] Okay.
[01:27:52] Suspense is probably just a good thing to have.
[01:27:55] Thank you.
[01:27:56] Yeah, because newborn and kid pickup times and stuff, I'm probably going to start streaming earlier from now on.
[01:28:08] Yeah, that's true. And that's the same problem we have with signals early days. They weren't even compiled and people thought they were magic. But what's interesting is once you know...
[01:28:19] How do you feel about it once you know what the transformation does?
[01:28:23] Thank you.
[01:28:26] Right. And the other question is like, how much do you need to know what the transformation does to actually have an accurate mental model of how this thing works?
[01:28:34] Right. Like my favorite example is
[01:28:36] Although that's the class compilation thing fixed it.  But like for example, it was if you made a like dollar sign state ruin.
[01:28:44] and you return it out of another file, you had to wrap it in a function or getter or something.  And it was like,
[01:28:51] Why?
[01:28:52] right if basically the abstraction didn't protect us from having to know that everything reactive is a function
[01:28:58] So like,
[01:29:01] At that point,
[01:29:02] That's when I asked the question, is it typing two less characters worth it compared to the cost of abstraction from a conceptual thing when it, you know what I mean? Like you, if you have to know how it compiles anyways.
[01:29:14] then what is it doing for you?
[01:29:16] as I said, different ways to solve that, different ways you can just go deeper and come up with  different mechanisms to hide that or that. But like, that's the sort of question it's,
[01:29:25] Right.
[01:29:37] Sometimes.
[01:29:40] I hope so. I mean, I'm a big fan of proxies, as you know.
[01:29:48] Yeah, when you know the transformation, it does stop feeling magical. But
[01:29:52] Then you also have to ask the question, does it feel worthwhile?  So it's like, it's a tricky one. Anyways.
[01:29:58] Um, yeah.
[01:30:00] So,
[01:30:01] Let me see here. Where was I? Right.
[01:30:06] Okay, so I have
[01:30:10] who
[01:30:10] Back in February or January, I...
[01:30:13] I set out.
[01:30:15] two things I want to fix with solids async. And this is again, let's get in this mindset.
[01:30:29] Um,
[01:30:33] Yeah.
[01:30:34] And keeping what we know in mind,
[01:30:38] I pinpointed two issues with our async, our SSR.
[01:30:45] SSR doing rerenders on the server.
[01:30:47] While solid has been so fast rendering on the server, it didn't matter.  At a certain point, somebody's like, look, my memos are expensive, or  some of the things that I don't like keep with those resource IDs are expensive.
[01:30:59] It's not expected.  It's solid.  Everything runs once.
[01:31:01] Why on the server does this component now run like three times?
[01:31:04] because the nested suspense boundary timings and stuff
[01:31:08] Usually suspense is kind of blocking sort of because of, you know, stuff failing out.
[01:31:13] but actually that's not because you know whether it's an undefined check or throwing like usually  it's like something is blocking but some cases it's not and this is like that
[01:31:22] problem that React had, right?  Because originally they were like,  hey, we just process all the siblings  and continue on with our merry life.  But then when they released React 19RC,  some point in the middle, they'd been like,  no, no, we're just going to stop on the first async.
[01:31:35] you know and because it saves time we don't have to render the whole rest of the thing every time  well solid does render the whole rest of thing time maybe it renders 10 times faster than react  but it still renders right so like
[01:31:46] That's something I wanted to fix.
[01:31:50] And then the other thing was like hydration IDs in the templates.
[01:31:54] I you guys may remember there was that benchmark thing and it drove.  It was it was a little bit.  I spent so much time optimizing solids SSR down to the JSX level and bindings that when you turn off hydration IDs for solid.
[01:32:10] It was the fastest
[01:32:12] service side rendering in that fastify benchmark it was faster than someone who just doing a naive  template literal it was basically faster than every other implementation that they had there even just  like using a string in fastifying you might be like how are you doing this because the compilation we  can be smarter than just using a tag template literal you guys know tag template literals  hold memory around um because they keep
[01:32:35] the arrays in memory, like this is how lit works.  Like every time you run the tag template literal again,  it actually has a reference to the static nodes.  And then you can put your bindings,  basically attach it to there  so that you don't have to like redo it.  That's why lit can re-render over and over again  without a virtual DOM,  because it actually keeps the static references.
[01:32:53] But in SSR, do you want to keep those static references?  No, it runs once, presumably, in a fast benchmark.  So there's a lot of places where you can optimize performance.  And I basically had gone--
[01:33:05] very, very fast for solid SSR, then you add the hydration IDs and the size of the serialization offset it. And instead of being 30% faster than every other framework, it was, you know, like 10% slower than the fastest. So I mean, this is a minor gripe because it's not representative of real world applications, like creating 2400 elements.
[01:33:26] you know in a tight loop causing as you as i said we do chunks so there's an id per
[01:33:32] cooking element.
[01:33:33] But, you know,
[01:33:35] If it's a place we can improve, these are two areas.
[01:33:40] Thank you.
[01:33:41] Thank you.
[01:33:42] - Right.  So I've kind of been working on two different solutions  to these problems, and I want to kind of talk through them  in terms of designing them.
[01:33:52] One of them was very, the first one is what I'm calling poll-based SSR.  This is very, very inspired by what I showed on stream.  If you guys remember, I had a stack blitz from a previous stream.
[01:34:05] which I have not signed into for a while, with GitHub.
[01:34:11] where I was showing
[01:34:17] Yeah, I think it's this one.
[01:34:22] Thank you.
[01:34:24] Thank you.
[01:34:26] Whereas showing this example with like the self-healing error boundaries, right? If you guys remember this code,
[01:34:33] I wrote something where we have some signals,  we have some async,
[01:34:39] and some memo that transfers that async.  And essentially there's a suspense boundary up here,  an error boundary down here,
[01:34:45] And
[01:34:46] inside that another suspense boundary and
[01:34:50] some kind of async thing we're doing here.  But my point is what would happen is when it throws or errors out,
[01:34:58] even though the data fetching is way up here and not related at all, could be in a different component, we don't really care.
[01:35:04] because it's in an arid state,
[01:35:06] and the error boundary collects the render effects that error out to know if it's thing.  We have the ability without re-rendering this component to both when it errors, see,  both either retry, which essentially just says pull again, just ask
[01:35:21] for
[01:35:22] uh for the data like
[01:35:25] it basically just tries the data fetching again automatically because it  goes,  okay,  this is,  this async has failed.  Let's pull,  you know,
[01:35:33] Right, so you know doing this or.
[01:35:37] Without rendering again, let me get another error.  If I click here,
[01:35:42] It also clears out the error boundary state because it goes...
[01:35:46] Oh, the node that we previously collected, well, it's no longer errored.  We can remove the error boundary again without re-rendering anything.  So...
[01:35:55] Thank you.
[01:35:59] Thank you.
[01:36:02] Thank you.
[01:36:04] So like...
[01:36:06] Essentially,
[01:36:08] Thank you.
[01:36:10] I was very inspired by the work in this zone because I was like,  if we can just collect the things that aren't ready and just try them again,
[01:36:17] We know when we want to try them again, when async resolves.
[01:36:21] Couldn't we just do our SSR this way?  Couldn't we just...
[01:36:24] SRS can count on a big string, but until we combine it, it is an array. If each hole could be resolved independently, templates are the syncs similar to render effects, we could combine as best as we could, leaving some holes where async, and as the async resolves, it approaches one string.
[01:36:38] If we separate creation from polling, we should have...
[01:36:41] we shouldn't have to rerun any components the same way we don't need to rerun with suspense.  It just pulls out the expressions. We don't need reactivity as promises themselves can repull.  What I mean is it's not push based. It's not push pull. It's literally just pull based.
[01:36:54] Um,
[01:36:55] It's basically identical client resolution pattern, but it doesn't up.
[01:36:59] But since it doesn't update, it only needs to resolve once.
[01:37:02] Right. So basically,
[01:37:03] You collect the nodes.
[01:37:05] that aren't ready and you pull. And it's basically, yeah, I'll talk about more in a minute. The other idea I had was,
[01:37:11] The reason we have hydration IDs
[01:37:14] Um.
[01:37:15] in the templating is because of JSX.
[01:37:17] can be created out of order.  See, Svelte has this end view,  have this advantage over us in terms of hydrating.  Because solid can do this.
[01:37:27] which
[01:37:29] is a little bit awkward. Solid can do this.
[01:37:38] Thank you.
[01:37:41] Don't get me wrong, this is a freaking superpower.  But Solid can do this.
[01:37:46] Okay.
[01:37:52] Still works, right?
[01:37:55] You can literally create a div with a reactive binding up here and just stick it
[01:38:01] inside
[01:38:03] inside the thing here you know like you you could i could
[01:38:08] I can create my JSX in any freaking order.  I can import it from somewhere else.  I can bring it from, you know, like this is why I love JSX.  I think JSX is incredible because it's incredibly portable.  You can literally just go like pick it up and toss it around.  Obviously we tell people most of the time in solid to do this, but
[01:38:26] because the advantage of doing this is that
[01:38:29] Some people...
[01:38:30] make the mistake when they see this.
[01:38:33] To think that
[01:38:35] Because it makes a div element.  And they might do something like this.
[01:38:39] If you know anything about the DOM,
[01:38:43] An element can only exist in the DOM in one place.  So doing this is not good.  It doesn't really work.
[01:38:50] Whereas doing this
[01:38:53] I must have TypeScript turned off.
[01:38:55] does work.
[01:38:57] Right.
[01:38:58] Thank you.
[01:38:59] So it's just something to consider.  And in a sense, this does--
[01:39:05] defer the load. But my point is, it is always possible
[01:39:10] to create stuff.
[01:39:12] out of order with Jansax because it is portable.
[01:39:16] Right.
[01:39:20] Even in this scenario, what's the order of creation?
[01:39:25] Oh, not the, I want the client side output. What's the order of creation here?
[01:39:32] Okay, yeah, so it does create the button first.
[01:39:38] Okay.
[01:39:39] Good to know. Okay. But...
[01:39:41] Thank you.
[01:39:43] Generally speaking, this aspect of...
[01:39:47] of GSX is incredibly powerful, but also, but also as you can imagine,
[01:39:57] means that we can't just like,  we don't know the parent.
[01:40:00] I mean, I use this as an example, but you can picture this even conceptually here. When counter gets called,
[01:40:06] we have no clue necessarily who the parent is. We can't say you're going to be inserted into this. Like,
[01:40:12] Who's the parent of Div?
[01:40:16] And even if I wrapped it in a function myself,
[01:40:20] How do I pass in that information? Like, like now this is a component conceptually, right? That's all I did here. I just made it a component, right?
[01:40:27] I mean,
[01:40:30] I called it as a function, but this is...
[01:40:33] This is this is
[01:40:35] conceptually a component, right?
[01:40:37] Um,
[01:40:38] Like...
[01:40:42] How do I know...
[01:40:45] what the parent is and you don't because it's potentially unless like we
[01:40:50] you know, pass something into the function to tell it, hey, like when this is actually a component,
[01:40:55] parent is the first argument or something unless we did some kind of
[01:40:59] like advanced compiler...
[01:41:01] not even advanced, but some like extra compilation information.  We don't actually know what the parent for any element is.
[01:41:10] Thank you.
[01:41:13] Thank you.
[01:41:18] Thank you.
[01:41:18] is div variable works on client side yeah i mean
[01:41:22] Sorry, I don't. I mean, technically this works with SSR too.
[01:41:26] um
[01:41:27] but I'm showing off here.
[01:41:31] This is just...
[01:41:32] This is just like...
[01:41:34] a fact about
[01:41:36] JSXC. And part of it is like, because you can also have like 10 components on the page.
[01:41:41] Right.
[01:41:42] are like in this file so like it's just a function so when you have a single file component you can  be like look there's rules we can control what things we export we can massage the signatures  to fit our stuff like this is
[01:41:54] why a long time ago I said that I think that single file components have an advantage for SSR.
[01:41:58] They don't have any advantage necessarily for client in my opinion, but for SSR, they have this advantage because
[01:42:05] of
[01:42:06] of a certain amount of analyzability being able to control the exports it could they could even  have advantage also probably for like hydration as well because of this this extra layer but as  said the portability of this is just unmatched i can make 10 child components inside my component  that i compose like it's just
[01:42:24] It's super powerful. It's just it restricts us on like very specific rules. So.
[01:42:31] Um,
[01:42:36] So the key challenge is we render, we need to collect nodes so they can appear in effects expression.  This happens early in the template, but what if we didn't need to?
[01:42:42] So I had this other idea of like, what if we actually proxy to elements while we created them and then realize them during hydration at the end?
[01:42:50] I'm going to go into detail on both of these, but essentially this is the kind of like the hypothesis I had in it.  I kind of came up with this kind of, I think, over Christmas break and I wrote it down sometime in January. So.
[01:43:03] Let's explore deeper into both of these.
[01:43:06] So,
[01:43:08] Let me share this one. This is called pull based reactivity for SSR.
[01:43:15] Okay, the idea here is that if that we can avoid component revenders, sorry, my headphones are not coming through.
[01:43:24] Oh, do you know what it is? My mic's quiet today. Nobody told me.
[01:43:29] Sorry, my mic's been quiet this whole stream.
[01:43:33] Thank you.
[01:43:34] Oh, well.
[01:43:36] Is that better?  Now I probably blew everyone's ear drums.  No, sorry, my mic's been very quiet.
[01:43:42] Um,
[01:43:44] OK, well, hopefully that's better.
[01:43:47] Okay.
[01:43:50] Oh, I... Okay, well...
[01:43:54] You guys probably, there's probably some like built-in compression on something or other.  So I don't know.  It sounds better to me.  I sound crisper.  I see more, I feel more dynamic range in my, anyway.
[01:44:05] in my vocal envelope.
[01:44:09] Okay.
[01:44:11] Okay, so...
[01:44:16] Thank you.
[01:44:17] The idea here is that we can avoid component re-understanding by pulling the results async results. The idea is simple but some repercussions such as
[01:44:24] to the system. Let's look at designing this works.
[01:44:27] Right, so what do you think?  If we're gonna do a poll-based system,  what are some design considerations we have to consider?
[01:44:32] Well, first, that...
[01:44:34] If it runs once, nothing but async state can change during SSR.
[01:44:39] Or things derived from async state.
[01:44:41] There's no notification, no push-based reactivity here.  So if a value would be set, it has to be during initial render.
[01:44:47] Since events and effects don't run during SSR, you shouldn't be writing during the pure part anyway, so I think it's fine.
[01:44:53] What I'm saying is, and we have this constraint in solid today, like it kind of works because sometimes things re-render, but you shouldn't like write, create memo and have it write to a signal.
[01:45:04] like,
[01:45:05] that's higher up that
[01:45:07] that happened to like already render some stuff. It might not update.
[01:45:12] So it's a prime thing here.  You shouldn't...
[01:45:16] I think the reactive system and reactive rules generally have you here,  but this is a good assumption and thing to put forward.  I don't know if you guys have situations where there's like,  it's one thing to have like,
[01:45:25] Um,
[01:45:26] a signal and then like a crate computed right after that writes the signals for initial values  sync with props because you haven't rendered or used it anywhere that would be fine but
[01:45:36] with salt 2.0's design we're avoiding that anyways right because
[01:45:40] instead of doing, you know,
[01:45:42] uh,
[01:45:44] I'll just scroll down here for a second.
[01:45:47] const
[01:45:49] Name. Let's use name, set name.
[01:45:52] Equals create signal.
[01:45:55] And then be like,
[01:45:56] create computed or fact or whatever instead of being like
[01:46:00] Set name.
[01:46:01] Props.
[01:46:02] dot name.
[01:46:04] right instead of this being a thing the solid 2.0 version of this is name set name
[01:46:11] equals create signal
[01:46:15] props.name, right?
[01:46:17] So you're already in a zone where we're saying, don't call the setter, right?
[01:46:22] Like this...
[01:46:24] like,
[01:46:26] at least not like the only other time you'd be calling set in these types of examples generally  is like when someone clicks a button or it doesn't affect or does like does something  and those don't run on the server so technically this should i think this assumption is a safe  assumption
[01:46:39] Okay.
[01:46:41] We need to be careful to watch on performance. Not collapsing to strings seems to have negative impact on performance. Our pure string approach appears to be the biggest difference
[01:46:49] um
[01:46:50] with salt uh solid say from from others now to be fair felt does use
[01:46:56] a string approach, but I don't know
[01:46:58] a pure string approach. So I actually think the performance is actually
[01:47:01] pretty similar i don't know why i mentioned svelte um
[01:47:05] It should be.
[01:47:06] I think I meant to say a different framework here, but it's,
[01:47:10] um,
[01:47:12] Good.
[01:47:14] It is a... we don't have any intermediates, and some of the other two strings actually do have intermediates.
[01:47:24] So this introduced an intermediate again,  which is slow.  And I actually benchmarked this and sure enough,
[01:47:30] Uh...
[01:47:31] Thank you.
[01:47:33] it is slower at least in my naive approach i'm thinking of how we can make it faster but
[01:47:38] it definitely takes a performance hit.
[01:47:42] So,
[01:47:44] looking at ssr template functions right now a tag template literal like that ssr function i showed you  and it goes through stitching strings with holes that can be strings or numbers functions i.e. reactive values objects
[01:47:55] with T, which signifies that they're already processed template.
[01:47:58] and arrays of other value problems.  So yeah, this is part of why we had the SSR function.  It was because you can put,
[01:48:05] the previous example here where you put JSX and JSX and JSX like this,
[01:48:10] and we handle it generically, we needed a way of being able to say,  look, this has already been escaped.  Don't escape it again.
[01:48:17] If we look at the server-side rendering of this,
[01:48:21] Thank you.
[01:48:22] see how this calls escape around create component because it doesn't know
[01:48:25] generally speaking and around count,  but count will not be escaped twice because what gets returned from this SSR function is a template object,
[01:48:35] that will not
[01:48:38] that will pass through this escaping.  It will assume that it will be like,  I've already been escaped, I've already been processed.
[01:48:44] So this is kind of key to what we were doing for our design here.
[01:48:48] And then it can also be an array of other valid values.  So yeah, I'm talking specifically here about this
[01:48:53] ssr function that i that i've been showing here that kind of stitches the strings together  so it's conceptual here
[01:49:00] Thank you.
[01:49:01] Yeah.
[01:49:02] And we assure that all objects become--  OK, and we assure that all becomes an object with T,  which carries a string.  Solid today doesn't even really compile the functions  for these native templates because they run every render,  like React.  So we have, for the most part, just been jamming strings  into objects, which then jam into strings as we compress up.  Why objects?  To prevent double escaping.  Escaping assumes that these are processed in the easiest way.  As it turns out, not compressing
[01:49:25] as we go is slower i.e if we keep our object around a long time then compress at the end  it's actually slower than compressing as we go so unsure if we have any options they think we need to  see if string replacement is faster than objects because with async you can't melt everything into  a string without at least markers yeah so another option you could do is instead of keeping these  objects you know like unresolved arrays or holes you could actually just like make markers in the
[01:49:55] Fourth question.  Concept here is we compress the best we can,  but then we rerun any remaining holes when async completes.  As we run our async, our SSR method,  we try catch each hole.  If it throws, not ready,  which means it's like a promise, it's async.  We can't flatten to a string and return a template  with the resolve string,
[01:50:11] with breaks for remaining holes.
[01:50:13] the whole function to rerun the ownership context of this template and  collected promises.  This is the tricky part because you have to resume context or the reactive  ownership scope.  When you rerun these,  these holes parent templates may come across children in the state.  They too can flatten best.  They can combining resolved values and templates,  holes and waiting on promises.  However,  they won't try to rerun incoming whole functions and unresolved templates.  This combining suggests that holes may need to keep their own owner
[01:50:43] may need to run in different contexts. The responsibility of rerunning these holes will fall to spent
[01:50:48] and at the top level.
[01:50:50] effectively pseudo code.  So what I kind of pretended I wrote this function  to kind of get an idea of what it's doing.  It's like promising all the templates promises.
[01:51:00] while true.
[01:51:01] and then it gets the result.
[01:51:04] um
[01:51:07] Which...
[01:51:08] Puts the first part in.
[01:51:10] And then...
[01:51:11] makes a new collection for Promises Holes, and then goes through
[01:51:14] the
[01:51:15] templates holes,
[01:51:17] that currently exists.  So the thing on the template or what's current,  and this is like for the next iteration, what it collects.
[01:51:23] so gets the template tolls tries to resolve them run with owner with the owner that's passed in
[01:51:30] And then...
[01:51:32] If it doesn't throw, essentially append it to the other part,
[01:51:36] There's a bunch of logic here. It's not too important, but I think you can kind of see how it's like basically pushing the stuff along and combining as it goes. And then if it catches an error of not ready, this is basically our promise error. We rethrow.
[01:51:49] So we re-throw any error that's not that.  So go to like error boundaries and stuff.
[01:51:54] Otherwise, we assume that it's async,
[01:51:57] And we just push the current thing in instead of merging it in.
[01:52:00] And then finally, at the end, if there's no holes,
[01:52:04] we can return the result.
[01:52:06] Otherwise, we update the template with the new list,  and we do it again.
[01:52:13] It's pretty cool that SSR becomes a do-well.
[01:52:15] True, loop.  I mean, this is kind of more conceptual, but the point is,
[01:52:20] It just sits there
[01:52:22] doing it. We kind of created a generator. If you think about it, we're just sitting there and we're like,
[01:52:28] while true,
[01:52:29] Await all the promises.
[01:52:31] when they all the current ones are finished go through again
[01:52:36] Try and combine it.  Is there any more promises?  Do it again.  And just basically until it can sort it out.  But what's cool about this is, as I said,  it's just rerunning the holes in the SR function.  It's not rerunning any components this way.
[01:52:49] Um,
[01:52:52] So how does this work with suspense? Well, suspense returns the fallback without returning  a template with holes unless the fallback itself has holes. So this means that the
[01:53:00] the parent can fully resolve and flush, you know, and stream it out. This means that the Ben's  boundaries do still need independent registration so that when they complete, they can flush themselves,  as well as potentially if they finish before other elements of their parents  do the string replace. What I mean is we have this
[01:53:17] mechanism we have it now where if if if the child suspense finishes before the parent's suspense
[01:53:23] we combine it with the parent suspense.  So they all get sent out on the same thing.  But because the
[01:53:28] because it's already reported to the parent that it has its fallback.
[01:53:32] we have to have to go in and swap out the fallback with the finished content.  And again, we do this on the server.  Instead of waiting for it on the client, just make it a little bit faster.  And...
[01:53:45] - Thank you.
[01:53:46] Yeah, that's all I mean here.  It's the reason that we had to do that swap  is because we've already combined it  into the finalized string,  'cause you can always stream out a fallback.
[01:53:57] So it views itself as like finished.
[01:53:59] to the parents perspective.
[01:54:01] Anyways, in a lot of ways, things aren't that different than today  for server rendering part.  Hydration is a different question, but--
[01:54:08] you know, we'll get to that.  One thing that could be worth trying is not keeping  what I call the parts above in an array,  but instead put them all in a string  with some sort of noise marker,  and do string replace that resolve time.  I'd suspect this won't be as performed,  but we have to look at object allocations.
[01:54:21] Like in the real...
[01:54:23] code part wouldn't be an array it would be a single string and we just upgraded
[01:54:27] two arrays is needed.  We might also need to look at monomorphism  in terms of shape of these template nodes.
[01:54:32] They are sort of like VDOM nodes, admittedly, but more like block DOM than individual, and only when things can't be resolved initially.  So what I'm saying is if you think about it kind of like at a distance, each of those blocks of SSR functions that return these template objects are forming a tree when things are unresolved.  So in a sense, they almost form a kind of temporary virtual DOM that then flattens as the async resolves.
[01:54:56] So we might be able to find optimizations from there.  It's also possible the whole compress as you go  might not be worth it in real async scenarios.
[01:55:03] The problem is I'm not sure we'd ever be able to tell because async already adds more delay than we typically capture in tight SSR.
[01:55:11] cycle like benchmarks and those being synchronous would always benefit from early evaluation yeah  yeah i mean this is what i'm getting at benchmarks are generally synchronous because async is
[01:55:21] unpredictable aspect of it right like so like generally they're always like  testing how fast can i jam strings onto the page which means that
[01:55:28] even though
[01:55:29] Early evaluation is always beneficial in those cases.
[01:55:33] it's basically it'd be very hard to measure that it wouldn't be you'd have to
[01:55:38] come up with a situation in which involved async in a predictable way and figure out  what was like maybe something very expensive happening after the async to really show the  benefit here of this approach that's this is one of those thankless approaches react has a lot of  these where they build something that doesn't end up improving any sort of benchmark but  you know it should be better um because the execution model is better um i said like um
[01:56:06] Yeah, I mean, it's always tricky.
[01:56:11] Thank you.
[01:56:11] React compiler is actually one of those, if you think about it. React compiler doesn't make React any faster, right? So when you try and...
[01:56:19] create any controlled scenario.
[01:56:22] that's like at all reasonable to create,  it actually doesn't end up with it being actually faster.  But you know that...
[01:56:28] when you put it out in the real world and there's messes out there,
[01:56:32] there is benefits to it. So it's like, it's tricky.
[01:56:37] Collusion, anyways, this is basically the thought for now.  Nothing really too complicated, nor did I anticipate it be.  The problems all come when we start looking at hydration.  Timing is critical if we want to figure out  how to drop hydration IDs,  but given things like create unique ID and async serialization,  we would probably need to generate them anyways,  even if we don't write them to the DOM.  So there may be complications  in terms of server random performance, but I did confirm it was
[01:56:57] the HTML output causing the bigger slowdown.
[01:57:00] for the hydration ids right like we could generate them and just not serialize them and that  was faster in benchmarks that being said none of this overhead is the big compared to the  actual work needed in user code to actually present the data or to render the page
[01:57:11] Yeah, I mean, the biggest struggle here is I think technically speaking on on those like fast SSR benchmarks, this approach will be slower.
[01:57:19] than the overhead of the hydration IDs.
[01:57:22] Ironically,
[01:57:24] So it's funny where we're like, we could kind of say like,
[01:57:29] you can basically make it so that there's a better, more consistent server output that works consistently with async the same way Solid works in the client and it's actually a better model.  But we actually take a bigger hit.
[01:57:41] than the actual
[01:57:43] I,
[01:57:44] serialization, the hydration IDs, which inspired me to start on this work in the first place. But  we won't know until we've actually optimized it all. But I'm just, this is where I'm sitting right now.
[01:57:54] Okay.
[01:57:55] And then...
[01:57:57] I don't know. I need to drink some water.
[01:58:02] I've started building the compiler this week for this poll-based project.
[01:58:06] um
[01:58:07] SSR.
[01:58:09] There was, some of you might have remembered, I put a poll up on X a little while ago.
[01:58:15] And I was like,
[01:58:16] I was like, where is my profile?  Why am I not seeing my profile?  It's probably still here.  OK.  I put this poll up and I was like, hey, everyone.
[01:58:27] Experiments with solid 2.0 now encompass all approaches decline
[01:58:31] async and storage and server as well, but implementing them all at once, the bigger left, we could keep the current server and release it later.
[01:58:37] and
[01:58:38] 2.0 or even a 3.0 release like like what i mean by that is like we could just like keep the re-render
[01:58:46] server stuff like we've been
[01:58:48] doing forever and just like focus on the cool client side stuff I've been showing you like the
[01:58:54] you know this stuff like the non-blocking async and you know all all the cool stuff we can like  do this new ssr later
[01:59:00] Um,
[01:59:02] And most people agreed that that made a lot of sense.
[01:59:06] Unfortunately, like literally the day after I posted this,
[01:59:09] I came to a realization that
[01:59:13] And actually implemented...
[01:59:15] re-implemented it.
[01:59:17] You can actually see it on the current next branch.  I actually re-implemented server-side rendering,  it suspends everything for SSR using the old re-render model.  It's currently committed.  It's been released experiment 0.5 or whatever.  We have fully working,
[01:59:30] ssr not fully working hydration but we we actually have fully working uh well technically  air boundaries don't work over suspense because i haven't re-implemented the that requires some  hydration coordination like throwing suspense um throwing errors
[01:59:46] over the boundary and having the client side suspense catching the errors.
[01:59:50] I haven't re-implemented that part yet.  But other than that, like streaming, lazy, all the stuff works.
[01:59:57] But then I realized that I...
[02:00:00] I couldn't hydrate it.
[02:00:01] And that it
[02:00:02] um it basically was going to be impossible for me to hydrate it
[02:00:06] So that's why
[02:00:09] I am back here again and what we're talking about this week,  because I'm literally writing the compiler right now for a,
[02:00:16] updated
[02:00:18] poll-based um ssr method for for solid um so why
[02:00:25] Can't we hydrate?
[02:00:27] Um,
[02:00:28] It's freaking hydration IDs again.
[02:00:34] Thank you.
[02:00:35] Thank you.
[02:00:37] Yeah, yeah, yeah. Sorry. Comment earlier about the generators. Yeah.
[02:00:41] To be fair, generators can be a little less efficient.  And we could write a compiler that did it, but then this is just built in, so we can literally keep the same syntax and keep the same thing and don't need a really extensive compiler.  So, yeah.
[02:00:54] Thank you.
[02:00:55] Async generators.
[02:00:57] Anyways, where was it going? Solid's use of Hydration ID drew some attention last year when  we were the only thing that kept it from being the fastest SSR render. Solid was even quicker than the  baseline implementation being tested against, the reason being that it could optimize escaping with a compiler in ways
[02:01:12] that dump template literally
[02:01:13] that sorry I said dump I meant dumb template literals could not
[02:01:18] So turn them off and win every benchmark.  Not exactly.  We need to hydrate in the client.  And truthfully, we need them for other things too.  Fortunately, it was only the serialized
[02:01:26] Fortunately, it was only the serialization costs, not the generation costs that really slowed us down.  But it would be interesting to explore what we could do about the topic in the future.  Okay.
[02:01:34] Let's get there.
[02:01:38] Thank you.
[02:01:39] Mm-mm.
[02:01:41] Today in Solid, they're used for two things. Stable IDs for resource serialization, which we talked about.
[02:01:47] and for node matching for hydration, right?
[02:01:50] This is the piece that people are familiar with when they open a solid site, like solid Hacker News.
[02:01:59] I don't even know.
[02:02:00] It tells you how long since I've opened a Hacker News demo.
[02:02:05] Why am I not seeing? It's funny, this is like the wrong repo.
[02:02:09] I want...
[02:02:11] Solid.js slash hackernews.
[02:02:17] And let's go to one of my other branches.
[02:02:22] netlify branch
[02:02:24] Thank you.
[02:02:29] to see functions.
[02:02:31] You guys have...
[02:02:32] Scene.
[02:02:33] This.
[02:02:35] Fun, I'm pretty sure. Let me see.
[02:02:38] Remember those 001s we were seeing in the React one earlier?  I mean, here they are.
[02:02:44] Um,
[02:02:46] Hydration IDs, lovely.
[02:02:51] They compress well.
[02:02:52] I mean,
[02:02:53] But...
[02:02:54] Yeah.
[02:02:56] .
[02:02:58] Right. But the reason is because of the order, because the, um, I did a whole stream on this previously about hydration IDs, but because the JSX can be created in any order, conditionals, async, all the reasons that that can happen, essentially,
[02:03:13] Um,
[02:03:15] the trick is,
[02:03:17] When we go to hydrate, we collect all the IDs.
[02:03:21] So all the nodes, and then as the client re-renders in the exact same way, it will generate the same node and then it like the same ID and then it will be able to match it. That's basically the trick for hydration.
[02:03:33] But the first one is worth talking about because
[02:03:38] create unique ID resource serialization requires them.  And to be fair, React doesn't do similar.
[02:03:45] This is important for automatic serialization to create resource. Otherwise you need to provide  a unique key or identifier. The only way you could do this would be some compile time mechanism.
[02:03:52] we talked about.
[02:03:54] as isomorphism different transformations on the code on both sides would prevent any sort of  runtime mechanism from working what i mean by that is um
[02:04:03] they basically become different files with different hashes.  So you have to basically, if you want to inject it,  it would have to be compile time.
[02:04:12] Um,
[02:04:13] before that transformation.
[02:04:15] The challenge is,
[02:04:16] if you were to say come up with something to replace globally, like say, $UID, it would need to be sent it at the call site. Like the following wouldn't work as it would produce the same ID. Yeah. So this is someone who's mentioning arrays. This is another similar.
[02:04:30] problem like pretend you created some kind of
[02:04:34] UID generation thing.  And you said serialize with this ID, this value,  my serializable value.  As you can see here, calling this function twice  for five and six would end up with the same ID.
[02:04:48] Right. So you can't
[02:04:49] compose
[02:04:52] the unique identifier, you have to actually
[02:04:56] find every single touch point that would need it so it's not as enough to be like
[02:05:02] I have one primitive where this is baked in.  Like I can't just transform my create async or create resource to have a UID.  You actually have to go to every single place that someone  like creates the resource and actually inject the ID
[02:05:17] alongside it like this.
[02:05:20] You might be thinking you could be clever and add a counter to it. But if order isn't stable, which is why you want this in the first place,
[02:05:27] that won't help you and you can end up with a wrong collision instead you need to do it like this
[02:05:32] Okay.
[02:05:33] which means that the consumption API needs to provide the option. Basically, it's just a convenience for APIs that already demand unique IDs. This way you don't have to think about what the name thing. Less than ideal, but if serialization was opt-in, I could live with this.
[02:05:47] right you can be like oh you just
[02:05:49] If you don't serialize, you know,
[02:05:52] But definitely a mechanism that works runtime can hide these details short of a compiler going around augmenting all your create async, all your lazy, all your resource code problems.
[02:06:01] It sucks for composition. What if someone creates their own wrapper around create async?
[02:06:07] then this falls apart.  Like they literally have to use your lazy component.  They can't make like my special lazy component
[02:06:14] rapper that does you know
[02:06:16] defers hydration or something like you
[02:06:19] This is...
[02:06:20] This is the problem I have with compiled solutions, generally speaking, is
[02:06:24] like,
[02:06:26] they're very specific and often
[02:06:29] you have to be careful about how easy they can break when you like,
[02:06:34] you you have to turn the thing that gets transformed into a special syntax which is again  to be fair like stealth ruins dollar sign that does it quicks dollar sign does it you're saying like
[02:06:45] Server dollar sign. You're saying that this is not a normal function.  It does not obey the rules of a normal function.
[02:06:54] It's not composable.
[02:06:56] Essentially.
[02:06:57] That's the key to all of those primitives I just mentioned.
[02:07:02] The results of them can be composable, but the
[02:07:05] quite often it interferes with the  like they can't follow  the idipotent principle  right?  I'm not saying that  ruins aren't composable  but you can't
[02:07:18] You can't
[02:07:20] be a rapper, create the same thing again.
[02:07:23] Right.  Like I also use this as an example for control flow,  like my four,  uh,
[02:07:29] Like it's solid.
[02:07:30] essentially you can recreate
[02:07:33] Where is it? Like the for component.
[02:07:36] essentially, but you can go const my for.
[02:07:41] Thank you.
[02:07:42] equals
[02:07:44] Props.
[02:07:46] Return.
[02:07:50] or
[02:07:51] props like you you can conceptually sorry i'm missing arrow you can conceptually do this
[02:08:00] And
[02:08:01] return the same thing.
[02:08:05] Right.
[02:08:06] Same thing with create signal, same thing with almost everything we do in solid. It has this, I don't want to call it like,
[02:08:12] identity property, essentially. And
[02:08:15] when you have, let's say,
[02:08:17] uh template i mean again this can be intentional right sometimes the language  can provide things that can't be composed over right but like if you have like hashtag each
[02:08:27] You don't...
[02:08:28] if you want to make your own list component,
[02:08:31] it's gonna be a component, it's not gonna be #myEach.
[02:08:35] Right.
[02:08:38] Right. Use directive, use server are another way to denote these things.  But what I'm saying is you need to design a specific...
[02:08:45] syntax for it that is a language level feature and not a composable feature. Something because when
[02:08:51] I make you server, you don't get to make use my server.
[02:08:59] So like there's implications of where you go to these things on a design perspective.
[02:09:07] Right. React was hinting. I don't think they ultimately went this way, but they were hinting for like their hooks that they use.  You know, we use create signal, but they use signal for hooks. They use signal.
[02:09:19] could be treated like that dollar sign. Like it is a, um,
[02:09:23] Like they left the door open.  That's why they told you all they put use in front because you're like basically say I'm denoting.  This is a language level feature.  What's cool about.
[02:09:32] use, for example, in this case, is that it can be applied to any primitive. So it actually is
[02:09:40] Um,
[02:09:41] It does have that
[02:09:42] um
[02:09:43] identity property right marco's
[02:09:47] Tags API has that identity property. It's very, very, very important to us when designing it. And again, it's not important to every system that there's trade-offs to these design things, but it's very important to us when designing Marco that anything you built could feel first party, like it was the same APIs, like that had this identity property.
[02:10:07] So like,
[02:10:09] What I'm getting at is most complex, the problem with this or what I'm talking about here is that
[02:10:16] you essentially...
[02:10:18] get into...
[02:10:21] like a language feature versus a compositional concern from a design perspective.
[02:10:27] Right.
[02:10:28] Thank you.
[02:10:31] Match for audition. Now, this is where a lot of performance are editing.
[02:10:33] is so alternatives could be awesome.  The challenge is that elements in our template  can be created out of order.  In general, JSX executes out of order.  We don't know the parent element over our children.  We return our own markup and the parent attaches.  In a VDOM library like React,  we can construct this whole structure,  then perform actions so order doesn't matter.  What I'm saying is in React,  they create all the VDOM nodes out of order,  but then once they got the tree, that's when they hydrate.
[02:10:54] like once they it's in order, we either come up with a way to locate the element where they sit in the Dom in a way that the client runtime could find them or we need to create some sort of virtual representation ourselves.
[02:11:04] is what I'm getting at.
[02:11:05] Um,
[02:11:06] The third option, as I mentioned earlier, is that you could also...
[02:11:10] Bye.
[02:11:11] not create them out of order, like what view or salt do.  But like for us, I'm saying that's not really an option.  Locating with stable IDs is definitely most straightforward.  If we were to try not to use IDs,  we'd probably need to serialize some sort of lookup.  But even then the order of those calls would matter.  Honestly, I think conceptually any solution here needs to convey the tree.  So in a sense, hierarchical IDs are just the most compressed version of that information.  So creating a VDOM ourselves, our code isn't designed to handle one, right?  Solid only understands DOM nodes.  I do have an idea of that using procties, we can create our render tree during hydration,
[02:11:41] to attach real DOM nodes.  It's definitely more expensive hydration approach,  suggesting a proxy for element,
[02:11:45] that server render, but it would have no impact on S, but it would have no impact on SSR performance. You won't be serializing it. I did a quick sketch with multiple elements of fragment as a proof of concept. I shared this on Twitter.
[02:11:57] and blue sky. I don't know if people understood this example.
[02:12:02] But what I did was I pretended that I...
[02:12:06] server rendered,
[02:12:08] this template.
[02:12:09] which is a div,
[02:12:10] with two buttons in it.
[02:12:11] Okay.
[02:12:13] And then...
[02:12:15] I initially the template twice and just put some values in it.
[02:12:21] So,
[02:12:22] Each button got their text.  I inserted it to the app.  Same thing.  So I just did it twice.
[02:12:27] The reason I did it twice is because I wanted to simulate both
[02:12:32] of uh
[02:12:34] Yeah, sorry, you've not seen this because I cut it off.  Each, this is, the div with two buttons is a child relationship.
[02:12:42] And then these two parallel is a fragment, because there's basically two top level divs in this example.
[02:12:48] And then I made my own code,  my made my own hydrate function and get next element,  which is like what solid uses.  And a bunch of helper functions for the library.  We can look at that in a minute.  This is all, and I made a proxy for the element.  This is also that at the end,
[02:13:06] you could create something that looks like a normal counter app that we've been looking at.  And you could pretend this is what the compiled output is, which if you look at it,  is almost identical to the compiled output we've been looking at for solid this whole time.
[02:13:16] But essentially,
[02:13:19] count set count so there's two counters count one count two two incrementors and then
[02:13:23] This is the hydration output to get next element for that template.
[02:13:28] and then and then so there's two counters see at the end i actually i'll render it twice each one walks
[02:13:34] attaches its click handler,
[02:13:36] Um,
[02:13:38] called a render effect.
[02:13:39] which sets when you click on it,
[02:13:42] um
[02:13:43] what the set content call um
[02:13:47] is...
[02:13:48] basically like a helper kind of like set attribute.  I'm saying like this is like set child.  It's just an approximation.  But what set content does, if you look here...
[02:13:58] is
[02:13:59] If it's hydrating, shortcut it.  Otherwise, it sets the text content.  So this is just like a helper that sets text content on an element.
[02:14:06] But
[02:14:07] it shortcuts when it hydrates because when you're hydrating you don't need to set it it's already  been set
[02:14:11] So,
[02:14:12] creates a render effect.  And the funny thing is I'm actually using solid's current.  This example is not made with solid 2.0.  This is actually made with solid 1.0.
[02:14:22] Um,
[02:14:22] just for the sake of being able to run it in the playground a lot easier.  And then, yeah, we just, as I said, set the text, set the text.
[02:14:32] you might be like, OK, well, the fact that these update independently and this works is no big deal.  But what you have to understand that's missing in this example is we never render the actual DOM nodes.
[02:14:47] If I remove this template,
[02:14:49] This should still work.
[02:14:52] So like what I'm getting at is the rendering happens in my fake server setup here.
[02:14:58] This is
[02:15:00] basically is calling get next element. So this is like our hydration thing. Now in the past,  we look for hydration IDs and get the element off there and then link everything up. So what  is this doing instead of getting hydration IDs? Well, what it's doing is,
[02:15:14] If it's not hydrating, it just clones the template, which makes sense.  But otherwise, it creates a proxy element.
[02:15:19] What this proxy element does
[02:15:21] is
[02:15:22] Thank you.
[02:15:23] I mean, this is where the complication comes, but it actually intercepts append child calls, first child and next sibling calls.
[02:15:30] And,
[02:15:31] as it walks, it creates other proxy elements.  So basically this is a proxy of an element.  We don't actually have the element yet.  This.
[02:15:40] it is approximately this is an element, even us attaching this event handler to this element.
[02:15:45] if you look at the setter function here, it just creates an object where it, see, if you already have an element defined, it will update the element directly. But otherwise, it creates,
[02:15:56] an object and sets the property on it so that at a later point,  when it gets inserted, this is the key when it gets inserted to the parent,
[02:16:04] And if it hasn't defined its own element,
[02:16:07] Um,
[02:16:08] He basically...
[02:16:10] calls
[02:16:11] the elements of penchild.
[02:16:14] Um,
[02:16:15] And then...
[02:16:16] node element this.
[02:16:18] Sorry, if it doesn't have an element, it just calls you a penchild.  But once it's been resolved, once it does have its own element,
[02:16:25] It uses the index.
[02:16:28] of where it is. At this point, order doesn't matter anymore. To actually
[02:16:33] grab it out of the child nodes and match it back up. Now, this is incredibly
[02:16:41] complicated. And I don't, I'm not saying that this is a good approach. I just wanted to show that it was possible, at least, that we could literally
[02:16:49] Create a proxy.
[02:16:51] build up our DOM here. At this point, even when we set up this render effect,
[02:16:55] These are not even real Dom elements.
[02:16:58] And then...
[02:16:59] when they get attached, like in the hydrate call at the top when we do the render,
[02:17:05] Okay.
[02:17:06] when they actually get attached and they call the basically the  this would be an insert but they call the append child because this first element
[02:17:15] Um,
[02:17:17] is actually, even though it's a proxy here, because it needs to intercept, is actually defined. Because when you call element here, it is
[02:17:24] like a real DOM element, once it...
[02:17:28] At that point, it goes through
[02:17:30] calls the append element call, which I show here,
[02:17:34] Where is it? Append.
[02:17:36] Penel and actually goes through and goes, oh, I do actually...
[02:17:42] have
[02:17:43] you know, the element or, you know,
[02:17:45] or I don't, and basically realizes all the DOM nodes.
[02:17:51] This is just complete craziness, as I said, but it is interesting that we could take the almost exact same code solid generates today.
[02:17:59] and actually have no hydration IDs and basically match it
[02:18:04] up.
[02:18:05] by letting it basically put itself in place
[02:18:08] and then use the fact that now that we have this
[02:18:12] tree of virtual elements as we attach to the parent it should be the same tree in the parent  which means that we can just upgrade all these proxies to actual elements
[02:18:22] Thank you.
[02:18:24] Thank you.
[02:18:24] Yeah, it's kind of, yeah, and it's invisible, yeah.
[02:18:29] because these all look like normal DOM node calls.  And once you've got your element, what you'll see is the proxy.
[02:18:38] If target element,
[02:18:40] It just passes the stuff straight through afterwards. And any new element created after hydration,
[02:18:47] won't
[02:18:48] won't
[02:18:50] Like,
[02:18:51] It won't actually create a proxy element.  It'll create a real element.  So this only affects the elements that are there at initial render.  And so there is an extra proxy through every element access,  which would be expensive for stuff that's initially rendered.  So again, I don't know if this is a thing.  I just wanted to see if there's a way that
[02:19:09] If we could literally
[02:19:10] in place like generate code that works perfectly fine after the fact without
[02:19:17] with real DOM elements, but at hydration time, temporarily basically run a proxy through it.
[02:19:26] Yes.
[02:19:27] Yes, as I'm saying, this would definitely be impactful to client performance.  That's why I say there's no wins here.  There's only trade-offs.
[02:19:36] So you make your SSR faster potentially.
[02:19:39] and arguably more stable,
[02:19:41] Because I...
[02:19:43] The difference here is the hydration,
[02:19:45] mismatches
[02:19:47] aren't, um,
[02:19:50] The hydration is based only on what gets inserted.
[02:19:53] right if someone makes a bunch of proxy elements and then never attaches them
[02:19:58] um
[02:20:00] That's okay.
[02:20:02] One of the problems we've been having with solid is people inadvertently don't realize that they're making wasteful elements.
[02:20:08] and they update the counter,  and then they don't insert them.
[02:20:12] and the DOM's only aware of the elements that are there.
[02:20:16] You can't hydrate something that wasn't inserted on the server that isn't part of the tree, right?
[02:20:22] So like,
[02:20:24] Like this...
[02:20:26] This actually guards from that, funnily enough.
[02:20:31] Again, I'm not saying this is necessarily a good idea.  I just wanted to prove that it was possible.
[02:20:50] Oh, sorry. Reusing my client. Perhaps a question, but what's the benefit of having composability? No, no. I mean, composability is like one of the best properties we have as these frameworks. I mean, don't get me wrong. Maybe that isn't something that should be composable, but like
[02:21:05] you can expand out like...
[02:21:08] uh dev's already done this like with like use socket or use like he's been building special  server component-esque
[02:21:15] uh
[02:21:16] like we have used server, right?
[02:21:19] and which is like an rpc call but he's making specialized things that define the different  export type uh we have a whole stream about this i i think i i think this expandability is a very  very very good thing to treat everything as if it's first party i think it's incredible  will it leave more options in the ecosystem yeah but like
[02:21:37] I love old React. I'm sorry.  Like that was my favorite part about React is that there was no single router solution.  Know this.
[02:21:45] Like,
[02:21:46] I know this is all about what I was talking about at the beginning.  People want to eliminate the noise at the cost of...
[02:21:53] Thank you.
[02:21:53] what's good.
[02:21:55] I, you know, this is like,
[02:21:57] It's like, you know, the big...
[02:22:01] capitalism you know like it's this is like the idea that um you know
[02:22:06] And hopefully the solutions of the best qualities will survive over time, you know, survival of the fittest. You got to give people the ability to be able to make better solutions. Otherwise you get stuck.
[02:22:19] Getting stuck is terrible.
[02:22:27] Yes, yes. And it's why people like Tanner and Tanstack are such huge fans of Solid.
[02:22:35] Thank you.
[02:22:36] But I think the problem is,
[02:22:38] it's nice in principle, but then when it gets to putting it down to actually doing the thing,  it's actually really hard to accomplish because you have to make other compromises to be that general and generic.
[02:22:49] And at a certain point, you just want to get a nice solution out there, like RSCs or whatever, and have it just all work a certain way.  And then it's like you have to educate people and teach them like this is the right set of trade offs.
[02:23:01] if you, you know, the danger of being too powerful, of like, giving people too much power,  right? There is a balance to be made here. So I like, I get it.
[02:23:10] Um,
[02:23:11] I just think that we've been taking the power away too much for the last little while.
[02:23:15] And I don't know what to say. I think I like the idea of building a framework like Solid, which is like innately the most powerful.
[02:23:23] It just has the most capability.
[02:23:26] Right. I mean,
[02:23:28] Yeah.
[02:23:29] I don't know. Everyone has their own kind of
[02:23:31] preferences on these things and i realize this is
[02:23:34] I realized this actually because of my playing in Magic the Gathering and people having different decks and different
[02:23:39] personalities and different like things that appeal to them about the game and metagaming and  how they approach it it's a very complicated system and i when i look at frameworks and  people like that and like stuff like that i see a very similarly complicated system
[02:23:52] For those who are interested or want to know, just to give you perspective,
[02:23:57] As a Magic player, I play Gruul.
[02:23:59] unapologetically plague rule.
[02:24:01] um
[02:24:02] which is green-red.
[02:24:04] That might mean something to some of you guys, but I make Gruul work in any format. People could be literally killing the mana dork every single game over and over again. I'll make that so it works to my advantage.
[02:24:18] Right.
[02:24:20] Um.
[02:24:22] so yeah it just it's a value it's a it's it's about values um don't know if i have any
[02:24:28] magically gathering people in the audience, but
[02:24:31] Yeah.
[02:24:33] Thank you.
[02:24:35] Thank you.
[02:24:37] Thank you.
[02:24:39] Yeah, and catering to the thing, pit of success, all the stuff of how we can onboard the greatest number of developers. What I think is interesting, though, is are we going to a place where teams are getting larger or smaller?
[02:24:53] Don't get me wrong. I don't think AI and these technologies are going to actually necessarily reduce the number of developers we need. I think we need a lot of developers. I just think developers are going to be in smaller teams, are going to be able to be capable of tasks more independently. And I think in those situations, and if you want efficiency and stuff, I think this is...
[02:25:11] mentality makes sense.
[02:25:14] Right, like a lot of solutions for scale are because you have to solve the scale self, you know, micro front ends, you know, like, so if you can alleviate that tension.
[02:25:25] then you can do more incredible things.
[02:25:31] Big green green. Yeah, I mean, I'm a bit of a Timmy spike from that perspective. But yeah, big greens. Okay, I like aggressive mid range.
[02:25:38] I like mid-range decks that look like...
[02:25:43] They're mid-range, but kill at aggro speeds.  Basically, I like...
[02:25:48] decks that are incredibly aggressive, but they don't fold to singular removal. Every card is
[02:25:56] the most efficient possible in terms of like power level. Like,
[02:26:01] It's not about ramping.
[02:26:03] Ramp's important for tempo, but not for size.  It's not about landing the biggest threat.  It's about...
[02:26:08] at key points in time.
[02:26:11] invalidating
[02:26:13] positioning by by just having something that's so overwhelming that it has to be dealt with
[02:26:18] every turn.
[02:26:19] and then purely basically using virtual card advantage.  Anyway, sorry, again, magic chat.
[02:26:24] Maybe I'll do a magic stream sometime.
[02:26:28] Uh...
[02:26:31] But yeah, I'm kind of a brute forcer.  And I feel like maybe that reflects in my work on solid.  I force solutions into play.  I have an idea.
[02:26:41] of how to make things efficient and then i
[02:26:45] I force it into play.  Yeah, I don't know.
[02:26:49] Anyway, let's keep on keeping.
[02:26:55] So why am I talking about this now? I was going to leave hydration until later, but there's a problem I'm realizing generating IDs. Consider something simple like this.
[02:27:02] div condition, comp one, comp two.  And for reference, this is what it generates  in the client side for hydration more or less.  Get next element, insert something, memo condition, blah, blah, blah.  And this is what it generates on the server.
[02:27:13] Condition, Escape, Create Component, Create Component.
[02:27:15] Right.
[02:27:18] so i'm just i've compressed it i'm showing like here's your div here's your div here here's calling  a crate effect essentially like here's your element here's your memo some components okay now let's  consider the difference between solid does today and what solid could do in the future let's say  the condition is derived
[02:27:34] from something async, like this showing different components based on whether the user is an admin or not, right?
[02:27:39] Okay.
[02:27:40] Now, I want you to notice that there are no reactive printers in the SSR version.
[02:27:46] There's not even like a reactive wrapper because we don't care.  Like if condition changes,
[02:27:52] we're going to just be re-rendering it all over again anyways.
[02:27:56] Where this version, it's wrapped in a function, and there's a memo wrapped in the condition to see if it's true.  And you get what I'm saying.
[02:28:07] Yeah.
[02:28:08] Yeah, oh yeah, in terms of use of risk. Yeah, and to be fair, these are values that I shared originally with React. I think it's just a very, very important capability. I don't like my hands being tied. This is a thing you have to understand is when I...
[02:28:27] I sometimes wonder,
[02:28:29] I'm older than a lot of the people who actually, slightly older than a lot of people who actually build frameworks.
[02:28:34] I got in this game late.
[02:28:38] I was already like 35 when I started building solid.
[02:28:42] um
[02:28:45] I guess. No, that's not true. I started building solid when it's 32. I open sourced when it's 35. But,
[02:28:50] Um,
[02:28:51] Like...
[02:28:52] A lot of people, a lot of, I'm not all people's journeys are the same, but a lot of people got into the framework building stuff. I feel like at a younger age, they were really smart kids out of college, and then they got hired by a large company.
[02:29:07] And then, you know, after a few years of doing stuff, they get to about the five year mark and they're about prime for it.  So we're talking about like 26, 27 year olds generally being like the core.
[02:29:19] age of like big movements on these frameworks and
[02:29:24] For me, like,
[02:29:28] this is like 32 to 35 year old me making decisions.  So my, my, my perspective,  what I was trying to accomplish was, you know,
[02:29:37] very, very different.
[02:29:42] So, yeah, I don't know.  I...
[02:29:45] I think it reflects in this.
[02:29:48] But, okay, let's continue on here. Okay.
[02:29:51] So now I want you to notice there's no React. Did I share this document yet? If I haven't, I should.
[02:29:59] Thank you.
[02:30:01] Thank you.
[02:30:02] So today's any bother about the condition of the function that needs to run in solid, we render components on the server as suspense resolve. So even if the state condition changes, it doesn't matter. So we do need it stable for async between runs. So if there's a new create resource, we can pick up the already created province, it's possible to rerun suspense to rerun the component that creates resource. So this is why we use hierarchical IDs. Okay, so in the same location. So while imperfect, it actually works pretty well using components as as our nested level, like show component is fixed, regardless of what path goes. So it registers as one and then
[02:30:32] next sibling can be two. What I mean is
[02:30:35] in this like if we had a show component here, for example,
[02:30:38] It's like instead of this turnerary.
[02:30:41] I'm using a ternary on purpose, but you could see that no matter if component one or component two got chosen,
[02:30:48] The show component means that any sibling after the show, like show could be one and then the component after could be two. Like any component after it would keep treat regardless of which way because this would be one one and actually they both be one one depending on which way.
[02:31:01] it went, essentially, because we're nesting at the show  component level.
[02:31:06] However, if a conditional is a turnerary like above,  it might mess with things if the number of elements it returns  differs that this would impact siblings.  Luckily, people generally aren't fetching resources really  deep under a ton of conditionals in their apps.  If those conditionals change, you would expect stuff under them  to be thrown away and refetched anyways.  And mechanisms like query--
[02:31:24] caches give us you know existing promises other ways other than using the serialization id but  what i'm getting at here is solid's current approach which is basically at every component
[02:31:33] Nesta level.
[02:31:35] and then count do the counter actually has a bunch of edge cases people just rarely hit them
[02:31:40] Um,
[02:31:42] So
[02:31:44] I think it would be clear looking at this, if we want a solution that can handle fine-grained polling, like separate things, it has to be finer than components.
[02:31:51] So what? Well, the ownership graph of reactivity works pretty well because it's where all the decisions happen.  It would be much deeper than components, but we aren't serializing on place.  Maybe it doesn't matter. And actually, I've been testing it. It isn't actually that much deeper than components.  A lot of times people have more components in between than they have decision points in the tree.  I'm actually finding that the hydration IDs are actually shorter. I actually implemented this.
[02:32:11] ID system in the latest builds. You have to pass it to the owner, but it's really fun for  debugging to have every node have an ID. So you can be like, oh, it's, it's,
[02:32:20] it's 001 that updates like, oh, what's a dependency?  It's on 002.  Like, I know that's kind of weird, but actually,  we already had naming for convenience,  for specific nodes for debug,  but now we could turn it on so like every node has a number.
[02:32:35] um
[02:32:36] Anyways, where am I going?
[02:32:38] Um,
[02:32:41] More so if we were ever to serialize a reactive graph, this would be part of it.  Like if every node had an ID, then the rest would be pretty easy.  This would unlock things like presumably an easy serialization about any computation  we felt was too expensive to run a client side hydration.  Yeah. So here's the thing.
[02:32:54] Resumability uses
[02:32:56] like a very crazy compilers anyway so maybe it doesn't matter  so it injects all the call side ids and uniqueness like i talked about but
[02:33:03] Technically speaking, with this mechanism, we can basically--  because every node has an ID--
[02:33:08] then we can be like, okay, this node,
[02:33:11] value is x and it depends on this node in this node which means when we go to hydrate we don't  need to rerun the node on the client we actually know the dependencies so that when that node  like registers it can like link up the thing without running any of the  component functions because we have the value and then we go okay i depend on this well
[02:33:30] Let me add my node to...
[02:33:33] to the other nodes.  Like you can build the graph back up  without actually running any of the user code.
[02:33:39] However, we have a new problem.  The graphs have more or less to be identical on both sides.  And you can see from above, they aren't, right?  Because if you have ownership, if you look, I mean,  I drew it again.
[02:33:49] This memo is now adding a new ownership.
[02:33:52] you know like this inserts a new ownership and we had no ownership right off the bat there's  an insert which creates a render effect and there's an additional memo which
[02:33:59] around a condition which we don't need
[02:34:01] I...
[02:34:01] either on the server, the render effect would cause an additional nesting level  and the memo would offset the counter used for other components.  Even if we added those, what about this template?
[02:34:11] Thank you.
[02:34:12] disabled look what i'm showing here is that
[02:34:16] the order like we group effects together.
[02:34:20] So the order they appear in the HTML is not always the order that they appear on the client.  What I'm going to show here is we actually do the insert before we group all the attributes together.  And then we have a separate effect for the value because we treat the value property on an input special and it runs afterwards.
[02:34:40] This is...
[02:34:41] and it's handled separately.
[02:34:45] There's a very good reason for this.  It has to do with ranges on certain types of inputs and...
[02:34:52] I'm just saying there's a bunch of rules, OK, because of the shape of the dom.
[02:34:56] So the first expression is the first value of the H1 getting inserted.  The second is the attributes on both.  And then the last one is a value.  These are way out of order, but intentional so that we can set the value last.
[02:35:07] and even elements like options that's another good example and we do it independently so it doesn't  need equality checks other property attributes are grouped and we handle inserts separately  whereas ssr we generate this with wrapping expressions and functions
[02:35:20] Right.
[02:35:21] And
[02:35:23] you can see that the order is not the same at all like we actually smartly put the value and  disable together so we didn't need as many template strings we actually just added them
[02:35:33] So we actually try and put as much static parts together as we can in the template and then group all the holes the best we can.
[02:35:40] This grouping is by order and not by behavior. How would these be done efficiently with the same shape? Maybe something like this?
[02:35:46] So this is what I was talking about creating a new compiler, which basically...
[02:35:50] re-asserts the client ordering where we have
[02:35:54] The...
[02:35:56] The insert first.
[02:35:58] the attributes.
[02:35:59] and then the value setting and then creates them in this order and then inserts them in the template at the end.
[02:36:06] um back in the in the visual order because again you're creating a string so it's you you have to  get them back in order at the end to actually output it each resolve would create a new owner  in that order and attempt to flatten their expressions if they hit something async then  return not ready the ssr knows how to handle it and creates the return template object like we
[02:36:26] showed before the whole polling thing in the last write-up.  Honestly, I don't know if performance would be that much worse,  but I suppose it's worth a shot.
[02:36:33] It is interesting that in a sense, SSR render would be able to group things almost identical to the client universal renders.  And it would just be final output that would be different. That being said, is server becomes even more dangerous here because previously it only really messed with resources.
[02:36:46] You know, like if you...
[02:36:47] didn't have the count be the same.  Like you tried to create like a signal only under a user.  But but now it can't wrap any reactive statement unless you know you're creating the same on both sides.
[02:37:01] Thank you.
[02:37:03] Thank you.
[02:37:04] - Yeah, we can see that you want,
[02:37:07] Does the Svelte Playground actually show, it shows, no, it shows the,
[02:37:16] I mean, I can't tell. I mean,
[02:37:18] it shows that I don't,
[02:37:20] It shows the output code, but I don't think it shows the output result.  Like in solid playground, I've been using this the whole stream.  We're showing here we have the same switch client side rendering,  server side client side retention. We show the output code.
[02:37:32] Um,
[02:37:35] Yeah.
[02:37:38] Yeah, I don't know if you ever noticed that one before.  Is that what you meant?  Like, this is what I've been using on the stream here.  We actually even show the universal thing.  This shows like what it works when it,  like if you use it with 3D, with 3Fiber or like terminal  or whatever, you have the universal output as well.
[02:37:55] Thank you.
[02:37:58] Yeah, I mean, these all have overhead, right?  I actually think the IDs are...
[02:38:04] are one of the more compressed way of doing this mapping, because it's a hierarchical problem, right?
[02:38:10] So,
[02:38:13] I, the problem is like I tried to in currently solve, we do a component level, we introduced this,  but then as I mentioned here, the component level is imperfect. The only thing that is actually perfect
[02:38:23] is if you match up on the reactive graph, um,
[02:38:27] But then the client and server have to basically resemble each other in terms of graph shape.
[02:38:33] Thank you.
[02:38:35] Thank you.
[02:38:36] I missed it. So server render.
[02:38:40] Thank you.
[02:38:42] It's funny, the option to call it generate was something I actually got from Svelte too. I mean, you don't see it here with the option now in Svelte.
[02:38:51] Yeah, because let's look at 12. We've been looking at server.
[02:38:54] The client version
[02:38:56] is
[02:38:58] on click click handler
[02:39:00] Set template effects. The render effect is called template effects.
[02:39:04] Penned anchor, yeah, okay.
[02:39:06] Looks good.
[02:39:09] Anyway. But...
[02:39:12] Um,
[02:39:14] Doo-doo-doo-doo.
[02:39:15] Uh,
[02:39:16] I'm just continuing on with this.
[02:39:22] Oh, do you know why the increment, I was trying to wrap my head around the basic counter example why the increment shows unused on the server installed playground.
[02:39:29] because this is because it's smart.
[02:39:33] Um,
[02:39:34] because you can't click it on the server, right? So,
[02:39:38] the server results don't need to add a click handler.
[02:39:44] So,
[02:39:45] because you can't click it on the server.
[02:39:49] So,
[02:39:51] Technically, a smart tree shaker can also remove this function altogether because essentially
[02:39:59] there's no click event to register.
[02:40:05] Sorry, just a second.
[02:40:07] Thank you.
[02:40:10] Good.
[02:40:11] Thank you.
[02:40:12] I might have missed a call. I don't usually I don't check this on stream, but.
[02:40:18] No, it doesn't look like anything. Okay, cool. Um,
[02:40:25] So anyway, yeah, where was I? Yeah.
[02:40:29] No, the derail is fine.
[02:40:31] Where was I? Each would solve it called the owner. Honestly, I don't know if performance.  So back to the beginning, if we want to keep hydration IDs for serialization case one and remove them for template matching, there's a potential for solution here.  It just perhaps less performant on both sides. We sacrifice hydration performance for removing serialization costs hydration IDs and we sacrifice server running for us to get better stable IDs.  I would say both solutions are probably more sound than their predecessors. Just funny that they are almost nulling out all the other properties.
[02:40:57] Each one's like nulling out the other's performance.  One makes SSR slower.  One makes SSR slower.
[02:41:02] What makes SSRs
[02:41:05] slower to be more accurate.
[02:41:10] And the other one makes...
[02:41:12] hydration slower to make SSR faster.
[02:41:15] Do you know what I mean?  So it's like...
[02:41:19] But like anything else, we don't know until you test it. Anyways.
[02:41:22] yeah it's it's it's one of those things where like i think the solution is probably better but it's
[02:41:28] Is there a performance hit here?  And don't get me wrong.  I've been lamenting this performance hit.
[02:41:33] to my best of my knowledge, it's still like three times faster than React. So like,
[02:41:37] At least the hydration one might be worse, but the server rendering ending these things is still faster than like all the VDons.  It's just like, is it slower than solid today? Yes. Is it slower than felt today? Yes.
[02:41:47] i think so slightly right so it's still like
[02:41:50] So like,
[02:41:52] Switching to this would definitely be a hit, but it would open up
[02:41:58] it'd be better. So I don't know. We'll see. Anyways, this is where I've been working. As I said, I've made a compiler. I've been working on a compiler for this new output. And, uh,
[02:42:09] This is kind of like the basis of what I wanted to talk about today in terms of, uh,
[02:42:14] SSR.
[02:42:17] So before we go on to a couple other topics,
[02:42:21] I thought maybe I'd show off maybe...
[02:42:24] Uhm?
[02:42:26] uh uh actually you know what maybe is a good time to go on to a couple other topics um i i don't know  if i'm going to do this week in javascript in the typical sense because i told you most of  the javascript conversation and this week stuff has not been particularly interesting to me but  there's been some proposals or new work in other frameworks i think we should talk about
[02:42:49] Um,
[02:42:52] Thank you.
[02:42:55] Is having unique at node IDs continued on this new hydration mechanism because it seems like those would
[02:43:01] No, no.  What I was trying to say is the IDs are needed for serialization regardless.  They are for like resources and stable IDs and all that kind of stuff.  So we're creating the IDs anyways.  And I've actually...
[02:43:13] Um,
[02:43:14] created the mechanism in solid signals right now, solid signals.
[02:43:19] And,
[02:43:20] you can turn it on by whether you put in the root, but the gist of it here is it is
[02:43:25] one of the things I did when I was working on it is, I told, I actually built a poll based reactive system inside solid. People know that classically, when you import create signal on the client, it's the normal one. And when you put it on the server, it's like this not reactive one.
[02:43:41] Well, I've actually...
[02:43:42] Mm-hmm.
[02:43:42] been building a pull-based system and
[02:43:45] The interesting part is,
[02:43:47] even the ones that are like the non-reactive pull-based system they use the same ownership
[02:43:52] model from solid signals so you actually see us sharing more code and that
[02:43:56] That means that like
[02:43:58] class owner here has an ID which can be set.
[02:44:01] And then if it's set,
[02:44:02] um when it when it
[02:44:04] Basically,
[02:44:07] and it's the current owner, when a child's created that doesn't have an ID set, it actually  has this get next child ID function, which is actually,
[02:44:17] um also it's format id based on the current parent id and the current
[02:44:22] child count and if we look at here the format id is actually very similar to what i've been doing
[02:44:28] in solid 1.0, it basically uses base 36 to string,  to convert the numbers.  So instead of each digit only having nine characters,  you can go up to 36 characters.  And then if the length is longer than one,  we added a limiter character from the capital character case  sets, 'cause these are all lowercase.  So basically it goes zero to Z.
[02:44:49] And then,
[02:44:51] because we get to reuse the same ID generation and stuff,  I'm actually kind of,
[02:44:57] I'll show it off.  I think this is actually kind of cool.
[02:45:02] which is not true about solid previously,  but if I go to the next branch,
[02:45:07] Um,
[02:45:08] and look at packages.
[02:45:12] Uh...
[02:45:14] Where is it? Solid.
[02:45:17] source server.
[02:45:20] If you look at the-- there's a signals file, which is basically filling in the signals library.
[02:45:29] What you'll see here is that the code is
[02:45:33] is generally...
[02:45:35] a bit different, though we do have like create memos and stuff, but it's using its create memo.  Let's see where it's create memo.
[02:45:43] It actually looks a lot like the internals of the signals library because it's actually using owner.
[02:45:49] Thank you.
[02:45:50] and get owner and run with owner all the owner apis are actually the same as the client side  ones so if someone does want to have reactivity on the server they could import directly from  solid.js signals and have the non-reactive and the reactive versions working
[02:46:04] together in the same cleanup and ownership model because it's literally the same base i just  reactive systems are really three parts and i talked about this in a previous stream um it's  very cool to see this happening thing because like with the pull basis and we don't need the  advanced scheduler um when we don't need the auto tracking but we need the ownership model
[02:46:24] So we're using the ownership model.  But all three parts are kind of quintessential into how...
[02:46:30] react systems are getting built today there's now like an ownership model  that's the baseline primitive that the dependency tracking um
[02:46:38] gets basically inherits from, and then, um,
[02:46:43] when you add effects on top of that system, that's how you add the scheduling in. So, uh,
[02:46:49] Yeah, the amount of shared code is actually increasing to the point that
[02:46:55] Other than the singles implementation,  it's theoretically possible the rest of the solid  doesn't have to differentiate from client and server,  as long as it's like optimal enough.  See, part of me wants to do stuff like,
[02:47:04] And I guess it's a part of the signals implementation, but like mapping, for example, is a place where
[02:47:10] we can do much more optimal stuff on the server knowing that it's running once.  So so like I don't necessarily want to use the client side one, but
[02:47:19] Beyond that, once you kind of go out and compose on these primitives,
[02:47:23] Since they use all the same primitives and there's an equivalent version of both sides, like the code doesn't need to be any different as anyway.
[02:47:31] But where I was getting at is that, yes, the IDs are important for a bunch of people.
[02:47:37] Features?
[02:47:39] it was the cost of serialization so we we can continue to serialize the ids in the template  or we can do that virtual hydration uh proxy thing i was talking about um the challenge  as i said is the pull-based reactivity
[02:47:55] The thing that I didn't write in this is that...
[02:47:59] So,
[02:48:00] I need...
[02:48:01] The, I can't,
[02:48:03] keep on using the component based approach. Like I can't just throw this away and use component based IDs with the current model because of
[02:48:13] Lazy evaluation.
[02:48:15] basically,
[02:48:17] when we knew that memos always
[02:48:20] acted eagerly when you went create component memo inside you knew not only that it was it created  under that scope but it actually ran first under that scope which means that it would inherit the  id so you could do something in the component that's like it's in solid's current code where  it's like set hydration context run the component
[02:48:38] set parent hydration context.  Like you could basically just wrap it synchronously,  and you know that the code would have run in between.  But now because it's lazy,
[02:48:47] it doesn't run until it gets inserted, which means that component style wrappers don't work, which is why...
[02:48:53] even if we're using a rerun model
[02:48:57] we still need to basically inject the ownership context  into the tree, which has a performance cost.  So we're kind of stuck regardless.  I didn't bring that up here, but this is why,
[02:49:08] this is the end of what i was trying to say here when i was talking on twitter this is why i can't  wait till later
[02:49:13] Um,
[02:49:14] because essentially we're kind of because the other design decisions on the client side
[02:49:19] we're basically
[02:49:21] We just have to move forward with this direction.
[02:49:23] Um,
[02:49:24] Thank you.
[02:49:25] we want those things like this again this is all a matter of scale i can be disappointed right now  until i find the solution
[02:49:31] But...
[02:49:32] it's still it's not like we're talking about bad solution here it's not only  better it's still more performant than the most popular solution so it's like
[02:49:39] What am I complaining about?
[02:49:41] I'm just very picky.
[02:49:43] So
[02:49:45] Anyway.
[02:49:49] Okay.
[02:49:51] Yeah, let's continue here.
[02:49:53] Okay, so.
[02:49:58] Thank you.
[02:49:59] Yeah.
[02:50:00] Let's go to Twitter. I think the first thing I want to talk about today is...
[02:50:04] Notifications, notifications, notifications. Is...
[02:50:11] Sorry, bookmarks.
[02:50:15] Not AI, that's not the person I want to talk about this blog.
[02:50:19] React Labs, Vue Transition Activities, and more.
[02:50:22] I don't know if you saw this. This is actually really cool stuff. I've been really enjoying the stuff that React Labs has been putting out, and I think we should...
[02:50:31] We should look at it.
[02:50:33] Don't worry, you guys, I will do Svelte next. I should have enough time.
[02:50:38] Um,
[02:50:39] But yeah, I think this is interesting because they're basically proposing two experimental features, view transitions and activities.
[02:50:48] And if you haven't seen this, it's worth a read because it's a different take.  This is a very incorporated take.  It's funny.  When I looked at view transitions integration in...
[02:50:58] Astro, it was like
[02:51:00] very incorporated was like here are tags just everything works then that spell kit did the  the other approach which honestly i admit i would have gone that way too which was like just give  the hook to the end user and let them do whatever the hell they want so basically as long as you  time it right so that when you're rendering that you get it right before you like commit your effects
[02:51:20] then the end user can do
[02:51:22] anything and it's very very very powerful so again about a very powerful api react has chosen to do  more like astro's approach actually but considering all the other async printers they have so it's it's  it's actually very complicated but
[02:51:35] Very powerful if it works right.
[02:51:37] So,
[02:51:39] i'm not going to admit i'm going to admit view transitions are not what i'm most interested  about in this blog post but i but i think it's worth looking at here because what their idea here is
[02:51:48] To opt into animating element, wrap it in a new view transition component. Okay, cool. This new component lets you do clarity to find what to animate when the animation is activated. You can define when to animate by using one of these three triggers and view transitions. Start transition.
[02:52:02] Use deferred value, suspense hold back.
[02:52:04] This is an interesting one for me.
[02:52:08] It's that...
[02:52:12] I don't know.  Like...
[02:52:13] this
[02:52:15] easy to understand you're just wrapping something you transition
[02:52:18] This is always tricky because
[02:52:21] I mean, suspense is easy to understand.  It has a fallback and you do it.  But these two are interesting to me.  And I'm going to be interested to see how much the general react
[02:52:30] um
[02:52:32] audience.
[02:52:33] knows how to or when to use these. This article is not aimed at the general react audience, to be fair, but more advanced users definitely but like
[02:52:41] Start transition starts a transition.
[02:52:43] But again,
[02:52:44] I don't think most people think of starting their state transfers as transitions.  Luckily, this is built into most routers.
[02:52:50] Most routing should be a transition.
[02:52:53] and you probably will never touch it yourself otherwise.  This one's interesting because this is,  useDefurredValue is like latest.  We have something similar in solid,  and it's something that you actually need more often,  but you kind of have to be aware of what's going on  first to do it, so most people don't even realize  they need to use it.  So this is like, this has actually been a big part  of my Async 2.0 journey is figuring out how to like make this
[02:53:15] stuff makes sense and we'll talk about that more when we talk about the Svelte stuff. But these being the triggers,
[02:53:21] is interesting. On one hand, it means that routing should give you transitions by default because the
[02:53:26] it will be built in and then people just put in.  So that's a win and that's probably the biggest win.
[02:53:32] We can pretend that no one will ever use this, even though they probably should.  And then this, some people will put this in sometimes and it will probably work.  So I think...
[02:53:42] it's interesting trying to just like understand the implications of everything.  So let's continue by default, these you see assess blah, blah, blah.  The other reason I'm interested in this API is because solid and react  classically have not have built in transitions on like Sval, which does.  So having like we have like transition groups, um,
[02:53:59] Vue has that first party React,  used to have it first party  and then kind of shipped it out.  Solid has one that I built  in an afternoon looking at Vue  and probably haven't touched in like seven years.  So...
[02:54:10] And there's also like motion one and we have like third party ones that are actually good. But I'm just I'm just saying like, as a base level, I'm
[02:54:19] It's interesting from a corporate perspective,
[02:54:21] you know, being able to bring this back in.
[02:54:29] Yeah, so there'll be some libraries that will build transitions into. I'm just saying you as
[02:54:33] developer, it's hard to picture you ever using that API.
[02:54:38] um
[02:54:39] If you're familiar with brothers vtransmation,  everybody supports it, blah, blah, blah.  I don't care too much, but let's see here.  When we click into it,
[02:54:46] This is, is this without it?
[02:54:50] Yeah, maybe this is the without a version, right?  They just show some examples.  OK, let's-- yeah, let's just use router conditional.  Blah, blah, blah.  You should mention it.  You should just navigation.  Animating.  Right.  Navigate, yeah, they're showing it built into the router.  This makes sense.
[02:55:06] And then-- oh, yeah, OK, I think I saw that one this time.
[02:55:09] You guys probably can't see it, but it's actually fading.
[02:55:12] View transition wrapping it.  OK, so they're showing you how you use it.  That makes sense.  So that seems simple.  I like it.
[02:55:19] Seems like a win.
[02:55:20] You can opt out, make sense, default, none.  Customizing animations by default, which includes crossfade.  That's nice. I think this is a win.  Like it seems very simplistic.
[02:55:30] way of doing it.
[02:55:32] shared element transitions. You give it a name,
[02:55:38] Thank you.
[02:55:39] Is there an example for this one? I'm kind of interested in
[02:55:42] Oh, that's cool.
[02:55:44] I mean, it's probably coming in small, but the way it...
[02:55:48] It fades in on the same thing.
[02:55:51] Thank you.
[02:55:52] I think this is a win.  I think...
[02:55:54] Everybody probably
[02:55:56] It's always interesting when you see stuff like
[02:55:59] But if you picture that all your anchor tags are going to have this already basically start transition built in, you can start to see how this actually works out.  This is a very smart system.  I think the thing was when I first looked at this article, I was just like, what?
[02:56:13] Yeah, OK, you can add cause navigation for that back.  This feels like it's an instruction manual for people building routers, which is good.  This is actually the people who need to actually pay attention to this.
[02:56:25] Although,
[02:56:27] you will have to express this to the end user.
[02:56:30] how to
[02:56:32] Like, hey, if you want...
[02:56:33] your view transition only happen forward or backwards,  make sure to put share now forward on and put your class.  But I think that's okay.
[02:56:42] Yeah.
[02:56:43] -
[02:56:44] Animating suspense boundaries.
[02:56:47] So we'll activate view transition to animate,  pull back to content, we can switch fence with view.  Yeah, so you put it up.  So this looks like old transition group I'm gathering.
[02:56:55] And then so
[02:56:58] Yeah, so you can't see it very well, but this fades in on the fallback.
[02:57:04] And then if you put it inside the fallback,  and you also have a separate slide out,
[02:57:10] One, right. Okay.
[02:57:14] Thank you.
[02:57:15] Thank you.
[02:57:17] Yeah, they faded in and faded out.
[02:57:20] It's hard to see in this example here.  You probably want to, if I didn't share this already,  you know I did, you probably want to look at this yourself.
[02:57:26] Animating lists, put one in each key.
[02:57:29] Yeah.
[02:57:31] This is pretty cool. I'm actually, I think this is one of the coolest things I've seen
[02:57:36] in a while actually out of the React stuff.  This is actually...
[02:57:41] It's like...
[02:57:42] I guess finally a version of transition group that they like.
[02:57:50] This is very cool. And I think there's been a lot of criticism about React not paying attention to the client. This is a client-only kind of feature. This is actually really good.
[02:58:01] Thank you.
[02:58:03] Yeah.
[02:58:06] Thank you.
[02:58:07] Thank you.
[02:58:07] Yeah, because when I first saw the API,  I was very much on the SvelteKit side of things where I was like,
[02:58:15] I can just put an await around start transition and then I've given people that hook.
[02:58:22] kids like let's face it the audience for this
[02:58:24] is...
[02:58:26] mostly
[02:58:27] like the router, but they did the same thing they did with suspense, which is smart.  No one needs to write transitions or use deferred value probably, but everyone just writes the transition component.
[02:58:38] like they do suspense in their code. So this is all you really need.
[02:58:42] this kind of inversion of like,
[02:58:44] having the one API hidden and then having the other API just kind of work,
[02:58:49] It's really good if all the libraries participate in this, right?  If you can encourage their libraries to do the right stuff,  then people will get this benefit out of the box.  And it's a sensible behavior. I like it.
[02:59:00] I like it. It's very cool.
[02:59:02] Activity.
[02:59:04] In the past we shared about researching API to allow components to be visually hidden and deprioritized, preserving UI state and reduced performance cost relative to mounting or hiding CSS. Now we're ready to share the API and how it works. So now you can start testing in experimental React versions. Activity is a new component to hide and show parts of the UI. When its activity is visible, it's rendered as normal. When the activity is hidden, it's unmounted, but we'll save its state. You can use blah, blah, blah.
[02:59:27] Don't mount when the activity is hidden.
[02:59:31] Yeah, so this is off screen.
[02:59:36] I think the...
[02:59:38] Yeah, I mean, you can just wrap each one in an activity. The name activity is weird to me, but that's fine. I guess it's better than off screen because it can be on screen or off screen. But yeah, so they wrap each one. And then basically, if you wrap each one, then each one would get it's almost like they're both there, but they're not like completely live when they're off screen.
[02:59:56] pre-rendering with activity. Yeah, like basically because you are
[03:00:00] loading all of these.
[03:00:01] If you do that,
[03:00:04] So,
[03:00:05] I saw some people respond to this and talk about how this is awesome for routing. The truth of the matter is,
[03:00:10] There's two different types of
[03:00:12] of control flows when we come to conditionals. There's
[03:00:16] show.
[03:00:17] This is show.
[03:00:18] or suspense. And then there's
[03:00:20] like
[03:00:21] or
[03:00:22] I mean you could argue the switch match and then there's like dynamic like our dynamic component  where you're just swapping one thing routers are usually dynamic
[03:00:29] They don't,
[03:00:29] default routers aren't like
[03:00:32] if this show this if this show this if this because the list is dynamic so literally it's  more like match on url render components they don't flatten out like this to do preloading  it'd be interesting if on a per route section hierarchy level you ask the question but usually  like you don't know one or two or three or 15 or 100 so you you're generally not doing this like  for a fixed set of tabs you are doing this but you're not doing this for
[03:00:56] for most things.  I actually think
[03:00:59] transitions are a better API generally for routing
[03:01:02] than this. This is good for like
[03:01:05] Tabs.
[03:01:07] Thank you.
[03:01:10] Yeah, keep alive.
[03:01:18] Thank you.
[03:01:22] The activity visible feature modes. Yeah. Hidden. I think it's interesting. I was so interested in this after reading blog post, I re implemented it in solid 2.0 demo.
[03:01:33] Um,
[03:01:34] So.
[03:01:36] Let me see if I have that here.
[03:01:40] Thank you.
[03:01:42] I didn't call it activity. I already had this. I just tried this hidden and visible thing that they're doing.
[03:01:48] Because essentially, I call it the boundary.  Because technically, suspense is a boundary.  Errors are boundary.  This is a different kind of boundary.  It has the same idea of scheduling, right?  Because what this boundary is saying is when it's bigger than  two or smaller than five, it's hidden.  Otherwise, it's visible.
[03:02:04] When it's visible and it's reading something async, when we load, it's loading because
[03:02:08] it triggers suspense because it's visible and then when we
[03:02:13] there's like a one second delay on this async.  No one gets bigger than two, it disappears.
[03:02:18] And then when it gets
[03:02:20] Five, it comes back again.
[03:02:23] I guess the problem with this is it's really hard to show
[03:02:26] what act when rendering actually happens right because if i go in here in console log
[03:02:31] in here we're going to see it because it's on the pure side this value will update
[03:02:37] while it's off screen, but it won't update the detached text node because the effects are held,  but the reactivity system is still present. So I don't actually have a good example of this  actually in action now that I think about it. But yeah, I just made
[03:02:51] boundary component under suspense. I guess if we said it was hidden
[03:02:56] until it's five.
[03:02:58] This is an interesting one because if it's off screen initially,
[03:03:03] It's like, did I break this?
[03:03:06] Thank you.
[03:03:08] We found our first bug. Lovely.
[03:03:11] Because in theory, that's funny, I tested this in the Solid Playground, and
[03:03:16] without the final component.
[03:03:17] and I thought I had this nailed.
[03:03:19] Because basically what I'm saying is if C is smaller than five,
[03:03:25] it's hidden which should
[03:03:27] mean that suspense doesn't trigger, but I've actually
[03:03:31] I wonder if I've actually killed this whole thing.
[03:03:34] This is the fun part about
[03:03:37] Okay, no, I haven't.
[03:03:38] yeah because i before i'm gonna have to look into this before i had the exact same demo but done
[03:03:43] Purely with...
[03:03:45] in the playground with like
[03:03:48] No compiler.
[03:03:50] So it's like, okay, loading...
[03:03:52] and then I put a counter that increments.
[03:03:54] soon.
[03:03:56] This appears
[03:03:59] come back. But when I did it and I removed this,
[03:04:02] at least in this version of the code,
[03:04:06] Oh, no, that's funny.  I broke it.
[03:04:11] Anyways, not important.  What you see here is in the...
[03:04:16] What I want to show that you can see in this demo is,
[03:04:20] Creating div happens initially,
[03:04:22] And then even when we reinsert it, it doesn't create the div again.  See, it's back. It doesn't-- like this console log, create div.
[03:04:29] only happens when
[03:04:32] initially, so I'm showing the.
[03:04:35] Alive 1, Alive 2 is inside the effect.
[03:04:39] when it's off screen, it's not firing the
[03:04:43] the effect. So this kind of is the proof of concept. It seems like I have a bug forwarding suspense that I introduced at some point.
[03:04:52] that I'll have to look at.
[03:04:53] But,
[03:04:54] Um,
[03:04:55] What should be happening in this scenario  is when it's off screen initially,  it doesn't actually trigger suspense.
[03:05:02] I guess the reason this triggers suspense is because, um,
[03:05:05] it's doing the read up here which means they're both triggering suspense like  if i didn't want this to trigger suspense i would have to do something like this of count
[03:05:13] like this.
[03:05:15] Then if I did this,
[03:05:19] See, the timing here is going to be interesting because it's going to disappear now immediately,  not when it finishes loading, which is fine.  When this goes to five, it's going to show even four before it loads.
[03:05:29] But with this scenario...
[03:05:33] If I remove...
[03:05:35] the count is bigger than two,  and it starts initially hidden where it doesn't trigger suspense.
[03:05:41] you saw that it loads immediately and then
[03:05:45] Now it should show up in theory, but...
[03:05:48] Oh, no, it has to get up to five.  Sorry, my bad.  Now it shows up.  I clicked it too fast.  But you can kind of...
[03:05:55] see that you notice how like when we clicked it here too fast,
[03:06:00] you could actually see the
[03:06:03] the
[03:06:05] the previous
[03:06:09] the previous value here.
[03:06:11] Thank you.
[03:06:12] It's interesting 'cause it's because technically,  it's still live off screen, but it's not updating.
[03:06:21] the
[03:06:23] the
[03:06:23] the dom like the reason it showed two was because that was the last
[03:06:27] Why did it update two? That's an interesting question. It must have at the time
[03:06:33] Note it is at the time that it goes to show it, it renders the DOM with the value that's currently there.
[03:06:40] Thank you.
[03:06:40] Thank you.
[03:06:42] Which at that time happened to be two.
[03:06:45] It actually didn't render it off screen, as we already showed here.  So this is an interesting thing, the interplay between this and async with Terram.
[03:06:53] Aside, okay. It was fun.
[03:06:57] RenderFacts run at least once when they are part of the active graph.
[03:07:05] And yes, they do run at least once.
[03:07:11] Thank you.
[03:07:14] Yeah.
[03:07:15] Thank you.
[03:07:16] Thank you.
[03:07:18] Thank you.
[03:07:19] yeah yeah it's funny because we magic has its own vernacular right like just like
[03:07:26] programming does. Okay.
[03:07:27] Anyways.
[03:07:28] in general,
[03:07:30] I think we're going to see a lot more of these things.  I'm just understanding like
[03:07:35] Let me see, if I go in the signals package, I actually did a lot of work here under what I call boundaries.
[03:07:42] And what you'll see is, funnily enough,
[03:07:44] I have all the different kind of boundaries here, but create suspense.
[03:07:48] it creates what I call collection boundary.  Create error boundary also creates a collection boundary.
[03:07:53] And then...
[03:07:54] This is what pre-collection money and then this one here.
[03:07:57] create boundary creates a create boundary.
[03:08:04] well if you actually if you if I spent the time to go through this a lot of the code is almost
[03:08:08] identical,
[03:08:10] Um,
[03:08:11] It's the exact same patterns for creating all of these types of primitives, suspense, errors,
[03:08:16] off screen or whatever you want to call it.
[03:08:20] they actually use the same mechanism of producing their own effects cue to hold effects and then create their own, what I call it, I don't know what they call it, it's a boundary computation, which is designed in such a way that
[03:08:34] It.
[03:08:35] both collects
[03:08:37] can collect all the nodes underneath it and it also any top level
[03:08:44] throw or whatever you can grab to.
[03:08:47] it basically isolates the change and the reason this is important for stuff like uh
[03:08:53] Offscreen is because
[03:08:54] When off-screen...
[03:08:56] is off screen, it still has to handle async.
[03:09:00] it still needs to like know not to leak it up or whatever so
[03:09:04] while my demo didn't work quite the way i was hoping to in that example and i have to look into  what the bug is generally speaking these are all actually the same thing they they're a mechanism for
[03:09:15] isolating
[03:09:16] an execution and then
[03:09:18] managing an effects queue.
[03:09:21] mechanically. So it's really interesting to think of like how many different applications actually came up with an application that I thought would be really cool that I ended up throwing away, but it's going to be relevant to our next topic.
[03:09:32] which is that
[03:09:34] one of these applications that I was thinking about was what if we  critic a control flow that looked like this?
[03:09:41] transition,
[03:09:44] Right. And this isn't a view transition, to be clear, but that's a transition when
[03:09:49] Route dot URL.
[03:09:52] And then...
[03:09:55] URL.
[03:09:56] is pending.
[03:09:59] Okay, because I'm always looking at getting rid of use transition.
[03:10:04] I've been looking at getting rid of use transition for ages because as I said, no one really knows when to use it.
[03:10:10] And I was like, what if...
[03:10:12] What if we could do something like this?  So you could draw your route.
[03:10:19] And then like,
[03:10:21] You could put some style, like...
[03:10:25] Okay.
[03:10:26] My favorite one is opacity.
[03:10:29] is pending
[03:10:33] 0.5, otherwise 1.  Let's format this.
[03:10:39] Um,
[03:10:42] Thank you.
[03:10:42] Thank you.
[03:10:46] Thank you.
[03:10:47] Thank you.
[03:10:48] Turn off the
[03:10:53] Make this in a way that I can actually see it clearer.
[03:10:56] I clearly broken the formatting here at the moment because
[03:11:00] there's errors on the page.  But the idea is you could like,
[03:11:04] route have some route component.
[03:11:08] I don't know that you that's like based on the URL and
[03:11:13] As long as...
[03:11:16] This was feed.
[03:11:18] right as long as this was keyed to the url so basically whenever this url changed it re-rendered these children
[03:11:26] you could basically...
[03:11:28] very easily render
[03:11:30] The...
[03:11:32] the current like first initially, you know, you hit something async and it, you know, it suspends whatever. But like after the fact, when you change the URL,
[03:11:41] what you could do is you could basically keep this here
[03:11:46] and while and then you could render again keyed with this new url no it's not a function and then
[03:11:52] until it resolves async have this be active with this is pending signal set to true and then once
[03:11:59] all the async resolves on the forked branch.
[03:12:03] Swapping...
[03:12:04] its content and run its effects and do everything.  Like it's very easy with the print as I just showed  to build something like this.  And you're like, oh, done.  No, no use transition, so to speak.  And you now have like,
[03:12:16] preloading so like when someone not just preloading routes on hover but like literally like  transition without transitions right forking very very simple forking here  because you can just use this as a keyed fork the problem is
[03:12:29] Two things.
[03:12:32] Obviously this route URL would update before
[03:12:35] like the,
[03:12:37] things, you know, so you have that problem, the tab moving early, of course, you can just like, you could do something like,
[03:12:42] This could be like,
[03:12:44] future
[03:12:46] URL and then you could do something like
[03:12:48] on complete so like whenever it finishes the async and does the swap you can do something like
[03:12:55] value, you can like pass back in the value again and then be like, look, you can go set
[03:13:00] url now to the value so you could like basically do something where it's like predictive so then your ui stays
[03:13:07] outside on the old URL. And then once it's ready, you can update it to the current URL. And because  this is keyed again, there's this detachment because if a future URL changes in the future,  it's not going to change this up. It's keyed to that.
[03:13:20] the the problem because this basically works and be easy to make in user land even  uh relatively easy um the biggest problem with this is what if like
[03:13:30] you don't want it to be keyed. What if you, sure, when the ID params change, but like the query  params, you want to be able to change without re-rendering the whole page. Well, then, what
[03:13:40] things get awkward. Like sure, you can inject them from above.
[03:13:43] But when the future URL changes and the query pronounce at the same time, the current reality will see that.  So this very naive approach is,
[03:13:51] is
[03:13:52] Simple. And it's honestly what solid did in pre
[03:13:57] I forget what version we added transition to real 1.2.  But back in early 2019, we basically added transition properties to our show components and basically...
[03:14:07] work like this.
[03:14:09] But this is better.  Controls of scheduling effects could do this kind of boundary.  But honestly...
[03:14:17] I think React's right about use transition.
[03:14:20] Okay, cool. That's a perfect segue into the Svelte conversation.
[03:14:25] Thank you.
[03:14:27] Yeah, I don't get Persist. I don't get activity either. Persist is better. I mean, the things you have to look at is more things that you can do than today. I didn't finish the React log, but they were saying that maybe we'll do it for saying client only or, you know.
[03:14:43] Etc. The rest of this blog is
[03:14:45] Oh, actually, there's one more thing before the spell conversation.  They're looking at automating effect dependencies, which is funny because I'm at a point where I'm like, we need to separate them out.  Right now, the React compiler, you have to set your effect dependencies directly.  These guys are talking about setting before...
[03:15:01] like using the compiler to figure out effect dependency the funny thing about this is we know it's imperfect so
[03:15:06] Yeah, effects can be hard.  Unfortunately, some hooks still...  I think in terms of effects of life cycles,  we found often confusion for effects you don't need.  You might not need effects of greed, blah, blah, blah.  Most people don't need effects of effects without dependency.  I think it's better...
[03:15:18] Yeah, do you know why this works? Basically, React doesn't care because if
[03:15:22] If the compiler screws up on the effect dependency thing, it can always default to always running the effect every time.
[03:15:31] So,
[03:15:32] Like,
[03:15:34] Thank you.
[03:15:35] with this code, convert dependencies for you  and insert them automatically.  So you don't need to write them with extensions  like ID extension and use it.  Like you've brought a code lens to show you  what the compiler inserts for times you need to debug  or optimize by removing a dependency.  This helps reinforce the correct method model  for writing effects, which can run anytime.  So like,
[03:15:53] framing this more as like an engine you can tweak  in terms of like
[03:15:59] figuring out what dependencies are.
[03:16:01] Hi.
[03:16:03] But you have to understand the default means that if you tell people they can't you don't either write up dependencies are just not going to write dependencies and
[03:16:10] until they find that something is either doesn't work or they don't find that their effect just  runs over and over and over and over again it seems very dangerous but um it'll be interesting  to see i maybe people's developer flows are different enough that they're like always sitting  there and like using these built-in ide tools to like analyze how efficient their code is  maybe that's something everyone does so maybe this will work
[03:16:33] Oh, yeah, Kupala ID extension.
[03:16:34] Fragment refs, gesture animations, concurrent stores,
[03:16:38] This is a big thing possibly for like the tan stack type people in third party libraries.  Anyways, it's enough for this right now. I think those are the big headlines.
[03:16:47] It's just interesting because
[03:16:52] like a pile of effects are hard, like felt moved away from it.  Their effects are runtime now.  I mean, the piling the dependencies doesn't allow any level of composition.
[03:17:03] Yeah, this is interesting.
[03:17:05] Anyway.
[03:17:06] Thank you.
[03:17:07] Thank you.
[03:17:08] I mean, you can ask questions whenever you want and interrupt me.  It's all good.  And I will probably answer you.  But I am short on time, so I'm just going to blow through forward.  But if something comes across and I feel like answering it, I will answer at any point.
[03:17:22] OK, let's continue.
[03:17:24] Hopefully everyone, I think a lot of you have seen this.
[03:17:33] Thank you.
[03:17:34] Thank you.
[03:17:38] Thank you.
[03:17:39] Asynchronous felt, you can now use a weight keyword and spelled in your script inside drive expression blah blah blah. Okay, by adding experimental async sounds good. Try things async playground you will find bugs. Yep, right background, they did it.
[03:17:52] on mount or in a weight block. Yeah, this works, but it's quite verbose and offers no coordination.  If two comodos are both fetching, they will likely have independent managed error loading states,  often resulting in janky UI multiple spinners.
[03:18:04] - Yes, because it's not, because no inversion of control.  Like basically, this is what I was talking about before,  is like, you can't combine them.  One of the benefits of the inversion control suspense  is that you can have like multiple different async sources  and be like, no, they're part of the same block  or the same conceptual thing.  Whereas like a weight, you have to pass the promise to it.  And that's that.
[03:18:24] You could hoist it up.
[03:18:26] But then you'd be awaiting the like your promise all basically at the block level and then passing all the individual values all the way down through.  So like.
[03:18:36] Yes.
[03:18:37] where it's like, so I'll cut a remix for you.
[03:18:39] app rex offer an alternative instead of fetching inside the components you do your async work outside  the components for example on a load function this typically results in better user experience  but it to his problem prop drilling all the stuff i just talked about core screen validation yeah yeah
[03:18:52] This is all why we didn't design solid that way.  Recent years, third way of putting a sanction.
[03:19:00] Right? Suspense and transition. I guess it is recent years. We released our first  version of suspense with transitions back in 2019. So let's...
[03:19:09] End of 2019, I think.
[03:19:11] Anyway, solid, you have to create resource, suspense, transition as well. View has a weight inside script set up. We will set a better renounce and future objects than existing approaches. Yeah. Minimal ceremony, you want to write code, weight, flexibility, blah, blah, blah, parallel by default. Trying to safely seem to be pure. This is an interesting one.
[03:19:32] If we were...
[03:19:33] A weight is...
[03:19:38] a very...
[03:19:41] What's really cool about Await,
[03:19:44] is the consumer has to put it out there. You don't have
[03:19:48] A weight, as I said, it doesn't.
[03:19:50] It composes by coloration.  So you can trust...
[03:19:55] it at the top level. It doesn't matter. You don't have to search deep for a wait. Do you know what I mean? Like, you know that if they sync, it's going to be like right there at the consumption point, which works quite well because you don't have all the other you don't care what happens inside the thing you await.
[03:20:10] which makes it really good physical pilot target actually i remember i was i was sitting
[03:20:15] at React San Francisco, whatever, the last one there, I think it was 2022 or was it 23? With Theo at the dinner.
[03:20:25] before the conference where
[03:20:28] me, Tanner, and Ben from Astro were really, really harsh on server components.  And Theo was telling me how much he really, really liked...
[03:20:42] The...
[03:20:44] the new async component in
[03:20:48] in
[03:20:51] Thank you.
[03:20:52] in the React server components. And I was like,
[03:20:55] Isn't it weird? But the thing that he pointed out to me, you know, like it's blocking conceptualizing. But what he pointed out to me was that where this is future reactivity designs. Yeah, this is very old.
[03:21:10] He pointed out to me that like,
[03:21:12] Um,
[03:21:16] Like,
[03:21:17] people don't really care they just want to wait so like i basically was trying to design create async um
[03:21:23] And I was like, okay, it could be memos returning stuff.  Where was I?
[03:21:27] I already skipped past it. Where is it?
[03:21:35] I hope.
[03:21:36] Was it not this one?
[03:21:39] Let me see.  Just a second, sorry.  Let me see if I can find it.
[03:21:42] Maybe it was this one.
[03:21:45] Huh.
[03:21:46] Maybe it's not.
[03:21:49] Oh, I thought it was this one.
[03:21:51] I was trying to
[03:21:53] Thank you.
[03:21:54] Oh yeah, yeah, it's right here.
[03:21:55] I was like, wouldn't it be cool
[03:21:58] I'm trying to appease to Theo.  I'm like, wouldn't it be cool that, you know, we have all these, you know,
[03:22:04] async stuff and this is before i had create async i thought it was like memo but eager um if you could just
[03:22:10] Have them all do this and then
[03:22:14] Just write a weight.
[03:22:16] in your code,
[03:22:18] and then it actually converted into a bunch of these calls and be non-blocking because we don't  have to like trace for async you can just know that a hundred percent if you've seen an await
[03:22:28] like you're free to basically wrap it in a create async call.
[03:22:33] um which is a really cool compiler aspect of async await that is not true of so many other  compiler hooks like this is one you can depend on you don't you don't have to worry like is  it a component is a not a component is a function or whatever async
[03:22:45] is actually really easy to analyze and consistently do the right thing for it.
[03:22:51] So,
[03:22:53] Is it wait for will be visible overlapping updates?  Okay, sorry. It was just something I was thinking about it.  Design and that's what you can now use await in three places.  Top level component.
[03:23:02] derived expressions, or a template expression.  We also need a pending snippet,
[03:23:07] Um,
[03:23:08] to the smell boundary, blah, blah, blah.
[03:23:12] Inside derived, okay. To know if updated currently effect pending. Yeah. Yeah. That makes sense.
[03:23:18] is pending basically, although it's more of a scope injected is pending.  It's not like asking which async is pending, like is this user pending?  It's going is this scope pending?
[03:23:29] Use case mode is obvious, use case would be loading,
[03:23:31] Simple Fetch.
[03:23:33] Yeah, and obviously you can trigger other resources, avoid waterfalls.
[03:23:38] Right, because these awaits are all separate reactive scopes.  This is very similar to...
[03:23:44] Yeah, it's an interesting one, right?
[03:23:48] you can inline it here, which is kind of nice, right?  Because essentially without the compiler,  you have to basically hoist out the fetching  and then read the signal in here, where the compiler can just  go like, oh, we can inline this, right?  This is doing basically the same thing where
[03:24:04] This doesn't block this doesn't block this.  If you guys remember, um,
[03:24:09] I did on my async stream a bunch of demos
[03:24:14] Where, you know, we could...
[03:24:16] show basically that like with signals, there's no reason because each thing gets wrapped in its own effect, right?  That there's no reason to not do it. Actually, I think I have this right here.
[03:24:26] Is this the right one? No, this is the nested fetching one. This is showing how you can fetch in a component in a child in a child all the way down and that they.
[03:24:35] they don't
[03:24:36] block so like see they all start at zero and they all end at two so basically you can put  a component in a component and have them all fetch and because they're not
[03:24:44] because essentially this has nothing to do with this, a separate expression,  they can all independently not waterfall.
[03:24:52] Sorry, this is not the example I was looking for.
[03:24:56] It's a cool example.
[03:24:57] um
[03:25:02] Let's see if I can find an example I was looking for.
[03:25:05] Thank you.
[03:25:06] Um...
[03:25:09] Oh, yeah.
[03:25:12] uh
[03:25:14] Projects.
[03:25:17] Parallel fetching, there it is.
[03:25:19] This is the one.
[03:25:22] Yeah, where you can put like comp A, comp B, comp C, and they can all fetch their own data. I mean, this could also be in line.
[03:25:30] I didn't need to make these components. I could have just put
[03:25:34] the fetching up here and done them
[03:25:36] separately and they again zero to two they don't they don't block each other
[03:25:41] So yeah, this is a very good quality of these sort of solutions, because technically they're using signals under the hood.
[03:25:51] There's some key differences. We're going to get to it. But the baseline is you can see it kind of similar because they don't they don't throw.
[03:25:58] My understanding, not all work can be parallelized.  Any, yeah, see,
[03:26:02] Any await expression inside the script run before expressing the template and then the sequence would be expect.
[03:26:07] Though if X is subsequent updates, yes, right.
[03:26:11] Yeah, yes, you need necessary. Yeah, there's no way to avoid waterfalls when
[03:26:17] X is async, I think.  Is x async in this example?
[03:26:24] Thank you.
[03:26:26] Yeah.
[03:26:28] like if there's a direct data dependency you can't avoid waterfalls that's fine
[03:26:33] Okay.
[03:26:34] necessary waterfalls. We wrote a whole thing here.
[03:26:38] Yeah, artist, artist, yeah.  Like these are not avoidable.  It's better to both fetch on a server near your database.  So you combine them into a single thing, agreed.
[03:26:45] It's like
[03:26:45] or use server components, blah, blah, blah. Okay, that's fine. Async SSR.
[03:26:50] Pending, so yes, it looks like Svelte, yeah, this is how they're gonna get, the, the, the, the topic we talked about earlier, they're trying to get async streaming automatically SSR forking and we pull out data navigation before it even occurs, tap it, import modules, load function around this paper is configurable, of course, okay.
[03:27:07] For this,
[03:27:10] um is transitions to best i understand you make it work async group happens like
[03:27:15] Co-co-co-lead and some forts.  Sounds complicated, but really it's not the different.  Now, you think it's already we're done with just finding, right?  Client server utilities, server endpoints.  Unless you want to create server and you want to fetch inside.  Oh, so they're adding you server as well.
[03:27:28] Interesting.
[03:27:31] I think someone shared a link to me what this looks like.
[03:27:36] Thank you.
[03:27:36] Query, this looks very familiar.
[03:27:41] Okay.
[03:27:43] Thank you.
[03:27:46] into it.
[03:27:48] I mean, this is just...
[03:27:50] I think obvious natural evolution of these things.
[03:27:55] I like it.
[03:27:57] Okay.
[03:27:59] There's obviously more details I'm not seeing here, but.
[03:28:04] *sniff*
[03:28:06] Type C, no start transition.  You saw it so you encountered start transition.
[03:28:12] Well, the funny thing is you probably haven't.  Most people don't realize the router does this automatically.
[03:28:18] So I just allow you to update stay in this way. So we don't do that instead. We,
[03:28:27] Yeah, that's not actually not how transitions work. The way transitions start from the top, they basically say when I start this state change,
[03:28:40] I'm going to...
[03:28:43] Essentially, I mean, React is re-render, but from the state change, whatever component runs it,
[03:28:50] the suspense boundaries above don't matter.  And even the suspense boundaries below don't matter that much unless they're new.  Existing suspense boundaries, um,
[03:29:00] participating in the transition all the same. So they basically just like
[03:29:03] move forward. If they hit a new suspense boundary, they're like, okay, it's fine. That will fall to fall back. But otherwise, what they'll do is they'll like basically fork the reality or fork the reactive graph or fork that and run the other reality off screen until such time all the async is resolved, excluding stuff in new suspense boundaries.
[03:29:19] um but the important thing that i'm trying to transition is kind of like a global thing the  importance part and i i kind of showed that in my other examples like if you go into a future url  and you just want to go
[03:29:29] update the URL to the future URL, you don't want
[03:29:32] tearing you don't want like the not even if the main part of the page is
[03:29:35] lower, you don't want like the tab where you click to highlight the next page before it's ready.  So it actually locks the state
[03:29:42] from the very, very top and has nothing to do with actual boundaries.  The boundary part is only in terms of determining what participates in the transition.
[03:29:52] out newly created stuff.
[03:29:54] something definitely connected given peace state power,  prevented changes state from being reacted.
[03:30:00] Okay.
[03:30:02] Instead of the state change, there's only an asynchronous word, always have their effects deferred until the asynchronous work is complete. Well, that work is ongoing, in fact pending is true and pending, okay.
[03:30:09] Interesting.
[03:30:12] So,
[03:30:13] they are doing something that's transition-like.
[03:30:16] But they...
[03:30:19] aren't porking.
[03:30:26] So it's kind of like a walking approach, if I understand this.  Because what they're doing is they're essentially saying, OK, you can update the async state.
[03:30:32] and everything within this region or bounds is going to be not
[03:30:37] do its side effects until everything is done.  So they're kind of doing and then it's saying you can use this pending is true.
[03:30:44] So this is like,
[03:30:46] implicit transitions without forking.
[03:30:49] Interesting. Okay, let's continue with this.  Great suppose that something distant can only be in place  that's a particular franchise reflected.  We think this is perolative.
[03:30:56] to the alternate which updates us.
[03:31:00] This is for the other English kids.  Updates outside New Zealand.
[03:31:04] Yes, yeah. See, the thing that everyone hates is the random fallback to fallback.
[03:31:11] See, Solid's 2.0 solution is different.
[03:31:16] Um,
[03:31:17] than this.  That's interesting because...
[03:31:20] We're opting in to terror.  Basically, there's only three things you can do.  You can stay in the past.
[03:31:27] you can bail.
[03:31:29] And you can take-- those are your three options.
[03:31:32] Um,
[03:31:33] Transitions stay in the past.
[03:31:35] So, Svelte's approach stays in the past.
[03:31:38] Solid's approach tears by default.
[03:31:41] outside of transitions. That was the difference here.
[03:31:45] Um,
[03:31:47] That's interesting because that has implications because that means they're solutions based on balance.
[03:31:51] I wonder, you know that demo that was the wrong demo?
[03:31:55] I wouldn't be surprised if Svelte doesn't,
[03:32:00] the doesn't
[03:32:02] work with nested
[03:32:03] waterfalls. I wonder
[03:32:06] Because the way they hold the...
[03:32:10] yeah like i wonder if if like i see the parallelizations of the await  but that's like block scoped to the same thing like
[03:32:18] I wonder if nested fetching gets affected.
[03:32:22] Huh.
[03:32:23] I don't know, I probably don't have the means to at this moment to do this, but I think someone who's interested in this should probably see if you can do this example where you can have three components all messaged in each other, all fetch data and see if it doesn't waterfall.
[03:32:37] I suspect that might not be the case in at least the current proposal implementation. Just kind of things I'm getting from here.
[03:32:44] Okay.
[03:32:45] The other thing is overlapping updates that touch the same state must be applied in linear order.
[03:32:49] Apostle of the Magistrate, remember to A, spelled with B, with 1.
[03:32:53] Since we're in the Wichosdale Valley, it's a such a change.  Yeah, see, they're very--
[03:32:58] They're concerned like React about not showing stale values.  So this-- yes.
[03:33:02] Using drives are eager. Yes, this is you get the diamond problem.
[03:33:06] In fact, do we still have the Xcaladraw app?
[03:33:08] Let me see if I can, I didn't.
[03:33:10] actually use this today, but
[03:33:13] Yeah, there's two problems that you hit.
[03:33:15] When you...
[03:33:17] when you're doing this stuff, right?  You have the diamond and the flag, right?
[03:33:22] And if you...
[03:33:24] If you have...
[03:33:26] Let's see, let's get in here.  If you don't fetch eagerly,
[03:33:30] So you do a state change.
[03:33:32] And then if you don't fetch eagerly on...
[03:33:36] on both of them.
[03:33:37] there's a potential that
[03:33:40] you create uh like i guess that's only a throwing version their version doesn't throw but if
[03:33:45] they still have to hold execution, right? Because if I'm understanding the Svelte solution,  instead of throwing, when they realize that like B is async, they don't run D.
[03:33:55] but then if they don't run d they can't discover c so async has to be eager so that
[03:34:00] you know to run B and C eagerly.  So even without throwing, like they're smart enough to not run like basically
[03:34:06] the because the compiler they can add extra information salt's case we don't  know so we just run it and go oh and throw away along the graph but then
[03:34:15] You know, the differences effectively becomes, you know, not a huge difference because, okay, this runs throws immediately. This Svelte version doesn't run, but is aware that this doesn't need to run because it's async. You can't discover the dependency of C.
[03:34:32] You know what I mean?  So, yeah, the eager thing makes sense.  Okay, let's keep on going.
[03:34:38] This really is the fact of sourcing in the trench coat. We've had this with an effective promise and most people don't think about it. Blah, blah, blah, blah, blah, blah, blah.
[03:34:48] and possible create unknown derived and blah, blah, blah.
[03:34:52] It's a victim only executed inside other effect.  Yeah. So it needs to be part of the ownership tree. Good point.
[03:34:58] Thank you.
[03:34:59] context-presurved in expressions,
[03:35:08] Thank you.
[03:35:13] Hmm.
[03:35:14] Interesting.  Yeah, because they're hiding stuff and using a wait,  they think about it.  Generally, we always assume that after,  like, wait is, like, bailing out of the synchronous execution,  so we're not worried about it.
[03:35:25] but they're encouraging a way to, okay, so no async drive-by.
[03:35:30] So while you can do this,
[03:35:33] Yes, that makes sense.
[03:35:38] Will then be a promise, not the way to, okay.
[03:35:42] Focus inputs are not overwritten.
[03:35:45] Okay.
[03:35:45] Interesting.
[03:35:48] Yeah, there was a comment.
[03:35:50] I think there's a lot of really good discussion here. I think the key difference is the default  behavior of opting into tearing versus not tearing. I'll talk about that in a minute.
[03:36:00] Um,
[03:36:09] where the search changes before the result of the previous one there yeah the problem we'll talk about
[03:36:17] Yeah, this is, yeah, let me get to the...
[03:36:21] Yeah, okay. Someone was like,
[03:36:23] So I'll use never use create resource, blah, blah, blah.  Very, very happy with create async.  Create async is a part of solid, it's part of router, not important.  The program model, blah, blah, blah, nothing crazy.  Let's see here.  OK, currently solid's resource are different.  It's the same non-blocking, blah, blah, blah.
[03:36:39] I think the problems that we're trying to solve with these solutions
[03:36:43] and when we're talking about ergonomics around this is, first, async isn't completely colorist in the sense that async values can be null.
[03:36:50] in solid where the solution,
[03:36:53] that being proposed here, the async values are not null, because it's a weight, you know that you'll have the value when you get to it. So making it non nullable is a big part of the solution. Obviously, solid 2.0 version does that by throwing but this is important characteristics and solution. The other thing is suspense being too eager to bail out, it's really easy to trigger suspense with a small async update on the page causing return to fallback.
[03:37:16] using transitions is one way to avoid this,  but most of the time people would probably rather just tear.  This has led to stuff like use deferred value in React and latest in our resources.  This is tearing. When you use deferred value or latest, you are tearing.
[03:37:28] The truth is 95% of people will never knowingly use transitions. They're mostly there for routing. The case that Rich referred to in the forking section. So they aren't the only part of the experience of developing. However, aggressive suspension bailout can get people there much earlier than they intend.
[03:37:42] Basically,
[03:37:45] The Svelte solution has solved both of those.
[03:37:48] those problems.  Both the problems we have in solid 1.0, which is the non-nullability,  and this one here, which both React and Solid have, where the suspense--  and even view, I guess, probably.  Anyone who's done suspense so far has generally been really eager.
[03:38:07] But the way we're approaching the solution is actually a little bit different.  And I'm really interested to see how they manage.
[03:38:14] the flag problem.
[03:38:17] Would I talk about the flag problem?
[03:38:19] is
[03:38:21] is
[03:38:22] Thank you.
[03:38:23] Diamond, we understand. The flag problem is a little bit different. It's when a
[03:38:27] has async that feeds into other async.
[03:38:30] And
[03:38:31] The challenge with the flag problem is that this is like a signal that triggers
[03:38:36] two things, say a user ID that fetches a user,
[03:38:39] and then fetches users post.  But the users post fetch requires something  from the user record to also fetch it.  So you create this flag problem.  The problem is,
[03:38:48] If you don't block along the graph in a certain way, you have this challenge where
[03:38:55] Let's say users won.
[03:38:57] You fetched user one and you fetch your stuff, you're fine. And then you update to user to user  two. This will immediately trigger both of these because they get notified. And then
[03:39:07] If B is...
[03:39:11] will fetch user two, but it's possible to see,  we'll try and if you don't have like throwing or blocking or something,  you'll see we'll try and fetch,
[03:39:19] Um,
[03:39:22] Basically, user 2,
[03:39:24] and user one's other thing you needed to grab off them.
[03:39:28] first and then when this finishes it fetches again you get like a double fetch based on the that now
[03:39:34] With solids throwing approach, this doesn't happen.
[03:39:39] And I imagine with Svelte's analyzed approach, it doesn't happen, but it is an interesting thing because these are both very key.
[03:39:46] problems to solve in this space because you,
[03:39:48] like if you try and be too predictive, like too,
[03:39:52] like get ahead of yourself, it's very possible to cause this double fetching problem.  One thing, as I said, I really liked about Sol's current, our 2.0 solution is we solve both of these problems.  The downside of what we've been doing here is that,
[03:40:11] Actually, I don't know what the downside is.  I guess the fact that async can be hidden.  Like you don't have to wait everywhere.  I think there's interesting implications.  I think the tricky part about this solution
[03:40:21] I like the compiler part of it with the await.  I think the tricky part is
[03:40:26] The blocking by default.
[03:40:28] is challenging.
[03:40:30] It's called the type ahead problem.  The type ahead problem is when you update state in a search box
[03:40:36] And each character triggers
[03:40:38] Um,
[03:40:40] async for fetch and what you what react suggests to do in this case is use deferred value  so like basically you can show the torn
[03:40:48] state as you type and then the async part does it separately. Now,
[03:40:54] I'm the boundary primitive here might be able to manage it.  But I think one of the hardest things about transitions is that
[03:41:00] people don't realize they're in a transition.
[03:41:03] If you click a button, it does something.  Let's say you wrote the code to work a certain way  and there's no async.  And then everything's snappy and immediate.  And then someone adds async somewhere  and then suddenly stuff stops updating right away.
[03:41:14] And yes, you can use...
[03:41:16] pending or is pending or transition is pending or whatever to tell you this.  But the person who wrote the original code and saying,  why is my section slow?  Has no...
[03:41:24] clue why this is happening.
[03:41:27] There was actually a JavaScript framework that went pretty far on this.  The creator block DOM, I think it's called Odo or Owl, did transitions by default.
[03:41:36] And this was kind of like,
[03:41:38] I looked at it a few years ago, and this was kind of like,
[03:41:42] um
[03:41:43] The challenge here, because stuff being correlated that had no business being correlated.  Now, using something like boundaries to set like a UI correlation,
[03:41:54] probably is a saving grace here because then you can say like I can assume stuff within this zone
[03:42:00] wants to be updated together.
[03:42:03] Hmm.
[03:42:04] But it's a tricky problem to...
[03:42:08] I think we covered this last summer.  It's very, very difficult to say by default,
[03:42:13] stuff's not going to update when you do it people expect tearing to the to the degree that like
[03:42:18] you almost have to always just give them tearing as the default.
[03:42:22] bailing out as much as I hate it with suspense.
[03:42:25] is really...
[03:42:26] Thank you.
[03:42:27] awkward, you know, the way it was up, people sees their stuff responsive.  We get issues on the router almost month monthly where people like,
[03:42:35] I click the next route and it takes forever to load.
[03:42:38] and it shows the current page and your router's still on.  It's like, well, it's because it's using a transition,  and you guys aren't using the is pending, essentially.
[03:42:45] That's an example where we...
[03:42:46] opted into a transition
[03:42:49] without basically, I mean, we tell you in the docs, but who reads the docs? You know what I mean? Like we basically,
[03:42:54] said like hey this stays in the past and you know that's how it works
[03:42:59] It's interesting when that implicitly can happen literally anywhere.
[03:43:04] I think
[03:43:09] My guess, given the Svelte community and what they're into, I think this might be...
[03:43:15] I can see communities that would have no problem with this.
[03:43:18] Like if Elm did this, everyone would be like, yes, it's the best way possible.  But I feel like a community like Svelte might find this a little bit...
[03:43:28] like it's the correct thing to do,  but it's also like,
[03:43:32] maybe the non-obvious thing to do.
[03:43:35] Like there's a tension here.
[03:43:39] Thank you.
[03:43:40] um yeah that's that's interesting
[03:43:46] Thank you.
[03:43:46] When people start blocking, like, I mean, there's that part too.
[03:43:49] I mean, but I mean, you can't win.  You either say...
[03:43:55] Yeah, I mean, this again breaks the normal semantics of JavaScript. I think actually, Rich, we commented on, responded to my comment along this line. Where did he say it?
[03:44:06] I see here with the repost, what's the problem around in this case?  Just the fact that I'm not dealing with promise in a way that feels JavaScript native,  but rather be a framework substratching.  I totally understand why this,
[03:44:13] why it's the way it is.  It's very, better taste,  but I don't think it would be right to sign for.  I do like how aggressively created async impreers  are discouraged waterfalls.  In the worst case, our design trade-offs  a little more performance or ergonomics here,  though on the flip side,  it means that people are encouraged to learn patterns  and to avoid waters that apply to all their code,  not just their components.  The JavaScript native thing is obviously a minefield.  So all this transforming your async code  and doing all sorts of things we haven't seen,  but React and solid, throwing,
[03:44:34] to trigger Spence feels inequivably magical.
[03:44:38] Yeah, it's interesting, right? Because the core idea behind the throwing is trying to add basically algebraic effects. And I say basically, which is hilarious to
[03:44:48] to the language and I didn't know what algebraic effects were until I read the very great Dan  Abramoff blog about it but this idea of
[03:44:57] the ability to use
[03:44:59] basically try catch to remove coloration
[03:45:02] of
[03:45:03] So you can basically
[03:45:05] write code in a way that seems sensible and then if it
[03:45:08] has problems.
[03:45:10] where you can't do what it's supposed to do,  it asks the parent how to resolve it.
[03:45:14] And in a sense, like,
[03:45:15] That's what tri catches.  So...
[03:45:18] if you come from it from a functional
[03:45:20] point of view, it makes perfect sense.
[03:45:23] We don't even throw promises.  We throw errors.
[03:45:26] But it's still the same conceptual thing.  Don't get me wrong, it is weird to--
[03:45:32] view a world where you're like,
[03:45:34] if something where you go i'm going to try and do this thing and if it doesn't work because the value isn't ready yet
[03:45:40] that's an error and we'll try again when the error is resolved it's it's it's in some ways  actually that makes a lot of sense but no like i it's kind of like
[03:45:51] People don't expect that using errors that way to be embedded into their programming model.
[03:45:58] So yeah, I mean,
[03:46:01] i i it's interesting because this definitely has a lot less ceremony around it  you know as i said this is a big largely an ergonomics thing i i i
[03:46:10] But the decision for like the hold or not the hold or fork and not the fork and all that, I think that those kind of decisions can be made independent of the API. So my gut here is that we'll see how this progresses and like, but hold by default.
[03:46:26] I think is confusing. Like it's just very, very confusing. People just don't see it coming. And
[03:46:34] I'm like, as I said, if it's just the router doing it, then you're like the router better shouted in the docs.
[03:46:39] If it's like anyone does like an await somewhere, does it like,
[03:46:45] It's tricky.
[03:46:46] I don't know. That's not only feedback. I think the design looks great. I think the fact that they're exploring fine-grained
[03:46:51] RC style like
[03:46:52] stuff. All these pieces are very much
[03:46:56] I think the fact that they have solved the exact same problems that I was solving, you know, in the past, is a problem.
[03:47:05] in terms of, you know,
[03:47:07] parallelism colorlessness
[03:47:10] removing sense and came up with something like this is, you know, really awesome.  I think Svelte developers will get like big benefit from using this API.
[03:47:20] I think even that's true with us too.  I think there's still a lot of like,
[03:47:24] devil in the details in terms of refinement.
[03:47:27] here and we'll kind of see how this plays out but i do like the idea
[03:47:32] of like
[03:47:33] getting rid of used deferred value or like latest and being,  while still being colorless, which is, as I said, something,
[03:47:42] that we've done also in the solid 2.0 design basically um
[03:47:47] I think the details that I'm going to matter to that I'm going to care about
[03:47:51] less about the hold forever i'm really interested if the nested components scenario works because  killing the waterfalls and solving the flag problem at the same time was the was the point  when i finally was like this is the solution and i actually have to thank dominic ganaway for that  because he was kind of put like i i i've been you guys have seen my stream i like had like  dozens of these like articles that we've been talking about and i
[03:48:15] we talked about this holding no transitions yes transitions whole block all the different  variations for like months and then dominic's like i think i got us we have a solution with  svelte where we don't do it and i was like i went through there i couldn't get it and then
[03:48:31] It coincided with some work that I'd just done with Dev, and then it was like,
[03:48:34] bang the idea that you could hold inside the graph
[03:48:38] yet tear on the edges.
[03:48:41] Um,
[03:48:42] automatically basically solved everything in one go.
[03:48:46] But I mean, there's always going to be trade-offs.  One of the biggest trade-offs on our approach, for example, is it's possible for people,
[03:48:52] People to...
[03:48:54] use stuff in event handlers and not trigger suspense. I think this is much more component centric. The way they hold it basically means that it's just not possible to hit some of those kind of scenarios. But I think on the other hand, it means it's not quite as transportable. It's not quite as like
[03:49:10] It's not quite as granular.
[03:49:12] But I mean...
[03:49:15] Does that matter? Probably not.
[03:49:18] Thank you.
[03:49:19] Anyway, yeah, expect waiting to block  in normal JavaScript.  Yeah, sorry.  I know I already talked about this,  but that was actually the problem  when I talked to Theo.  I eventually dropped it.  I was just like,
[03:49:28] when someone sees a way to wait they're gonna like it just messes with their brain i can't  do that that's all ultimately why i didn't i think
[03:49:37] What I liked about this approach,
[03:49:39] the most.
[03:49:40] was that
[03:49:41] it's not a stretch to convert this into generators for ssr because people have already marked the  await in their templating you could literally like like basically just like yield it at these points  and your ssr uh you know i told you how we're simulating generators with signals you could  actually compile to generators with this like
[03:49:59] dirt simple, like basically the developers telling you where to put the yields.
[03:50:03] It's very smart.  I don't know if anyone's seen the dust clip.
[03:50:07] Template language, template DS.
[03:50:10] It's old, old, old, old, old.  LinkedIn created it.  It was like one of the first streaming templating engines.  It's not going to see it.
[03:50:18] It basically had a very similar way to basically a way to...
[03:50:23] essentially
[03:50:25] to like block out right in the templating language and that's what this makes me think of  which is i i think really really powerful
[03:50:32] Okay.
[03:50:33] Thank you.
[03:50:34] I don't know if I have anything else to say about this one.  I think the defaults and systems of holding are interesting.
[03:50:43] There's going to be slight differences in this model. So these these aren't the same model exactly. So it'll be interesting to see how they play out. I think they both solve the react problems though, just in slightly different ways. So
[03:50:55] Um,
[03:50:56] I'm still on transition, teen transition, though.  I think...
[03:50:59] I think
[03:51:00] you have to know
[03:51:02] when you want this behavior.  Like, I think it's funny because I'm saying it's going to get hidden in routers anyways.
[03:51:09] But I think you have to be aware that this is happening. If someone just throws some async on a page, it is very disorienting. Maybe not as disorienting as having your whole page blow up into a fallback.
[03:51:22] But it's disorienting when you have no freaking clue how async got introduced to your system and breaks it.  That was one of my big goals with solid is because if any signal can be async the way we've designed the system, I have to make sure that stuff continues to act predictably for the people who aren't using those features or who you're even in the same project with people using those features aren't using it like keep.
[03:51:47] keep...
[03:51:49] parts of the isolation thing.  That isn't always completely possible.  If someone says loads the data  that you need to show your component, then yeah,  it's gonna take a minute to get that data.
[03:51:59] you know, not, or a second to get that data, not a minute. I hope not a minute. Um,
[03:52:04] But...
[03:52:05] It's not like...
[03:52:09] a matter of like,
[03:52:11] because things just happen to be sitting next to each other.
[03:52:15] you know,
[03:52:16] I don't know if I need to go anymore on that topic.  I covered almost a complete stream on why transitions by default  were really, really awkward.
[03:52:24] So,
[03:52:26] because honestly, I would love to get rid of the need for transitions. It's just,
[03:52:31] Yeah, it was last summer.  I wish I remembered which one that was.
[03:52:38] Okay.
[03:52:39] signing transactions now.  I think it was the one when we were talking about
[03:52:45] Um...
[03:52:48] Consistency first?
[03:52:52] Towards the end of my last one, I asked if there are no spanzine.
[03:52:56] Yeah.
[03:52:57] It might be worth a reread.
[03:52:59] Again, but
[03:53:03] Thank you.
[03:53:07] Hmm.
[03:53:08] Implicit transactions.
[03:53:11] Like every setter could cause a transaction.  How would you determine if it was pending?  And how would you show it?  The signal, blah, blah, blah, that's fine.
[03:53:17] Yeah.
[03:53:19] But I understand that they aren't often
[03:53:21] I would read everything completely because the latest
[03:53:24] new suspense boundaries, type ahead problem, plus the transactions would
[03:53:29] If anyone wants to read more on this subject, I did a stream on this too, but I'm going to just drop this in here.
[03:53:36] Okay. What else do I got on my list here?
[03:53:41] Oh, yeah, yeah. I got one more thing. I that's related. I saw this.
[03:53:46] I thought this was kind of interesting.
[03:53:47] So,
[03:53:49] Dan Abramoff, stealth can't inflict concurrent rendering in the future.
[03:53:54] This forking section is completely what concurrent rendering is.
[03:54:00] Kind of love that there's barely any hint that this working is what react started seven years ago.
[03:54:04] to the ridicule of the salt community.  Who needs that?  I'm much more excited to bidder.  The goal is upstream than you did.  Yeah.  Yeah.  I mean...
[03:54:12] I remember when I came in defense of this, I couldn't believe everyone was lambasting react for creating transitions when like,
[03:54:21] "Fillify the credit and the random rates are petty, everyone's experiencing blah blah blah." "I don't know what you're thinking, blah blah blah blah blah blah." "We thought they really delayed updates pending coordinate async, it's extremely well." We never said we just took a long time to design at our threshold, but it's, we don't really talk priorities, then I'm not aware of, for instance, what we have in mind now.
[03:54:40] Okay.
[03:54:41] It wasn't just you, but spreading them out  is also miscarriage of the feature.  There's an ability to compute free tree without committing.  That's quite literally the forking section describes, of course.
[03:54:49] Yeah, because everyone is part of this is the React team fault for showing that stupid radar.
[03:54:55] That was never the coolest part of that demo.  Everyone was like, oh, look how you can do the 3D thing  and Paul Henschel and all this.  But the coolest part about Dan's,
[03:55:03] demo
[03:55:05] from was the was the was when he was switching between the tabs and
[03:55:10] and it wasn't changing to the new tab till it was ready and he was showing the pending state like  that that is
[03:55:15] That is the coolest part of the demo.
[03:55:18] So funny, it's like not what other people noticed.
[03:55:23] Yeah, it is the same thing.
[03:55:25] Yep, his Iceland talk.  We talked about single-planned CPU and IO.  This is what they call IO bound.
[03:55:37] Ciao.
[03:55:38] It's arguably the first mainstream UI forking that shipped.
[03:55:41] Thank you.
[03:55:42] Yeah, they shipped in Canary first.  We released it before React released it.  I was so sold on this.  I actually I mean, this is not.
[03:55:52] I'm giving them all credit though. I saw their version and then released it to production before they did.
[03:56:03] Yeah.
[03:56:04] Anyway.
[03:56:06] As I said earlier, I think we're going to see more of this. I think this is one of those topics where React got it really right. And I think we're going to see with resumability and Qwik.
[03:56:16] in like five years people are going to be talking about
[03:56:19] Similarly.
[03:56:23] All right, how's everyone doing? You guys still live out there?
[03:56:27] I'm almost...
[03:56:28] I'm almost done with what I wanted to cover today.  With my new stream time, I can only stream until about 1.00.
[03:56:34] Um,
[03:56:36] -
[03:56:37] I, I,
[03:56:38] I think there's been a lot of interesting stuff developing the last little while.  So it's it's cool to see that.
[03:56:46] I had one other interaction with Dan on Blue Sky.
[03:56:50] around server components.
[03:56:52] Um,
[03:56:54] Thank you.
[03:56:55] because people are still kind of arguing about it.  Because Dan's been doing a ton of blog posts.
[03:57:01] over reacted IO.
[03:57:03] functional HTML, does it use client doing impossible? It's basically,
[03:57:07] Since here, React for two computers, he's basically re-implemented server components from a different philosophical standpoint every week.
[03:57:15] and see which one clicks.
[03:57:18] oh where is it blue sky blue sky this one
[03:57:22] love your article i'm not convinced it's the way to move forward and you want two worlds separate  people like clear bet
[03:57:28] You want to keep the world set the two environments differently.  While context, blah, blah, blah, the connection between them, blah, blah.  You actually can stack the enforced boundaries.  So importing something on the wrong side will refuse to compile.  Yeah, something worth noting.  There's no need for throttling because your server isn't renderable in GSX.  Is it not going to accidentally hit the server while rendering?  Yeah, so because there's no weird cascade happening here.  We're in caching server no longer.  Cross-conviction, we're going to have server.  I'm just trying to disagree that they solve this.  I'm not aware anyway that they would force a single round  to cross-modular code, which one of them made the terms of the nature.
[03:58:01] I mean, because of the hoisting, you can.  Single flight mutations...
[03:58:08] is something that we can do.
[03:58:11] Take this down.  We're at the search.
[03:58:14] Okay, yeah. So they're talking about, I mean, there's two...
[03:58:17] There's two different ways you can solve this.
[03:58:19] What he's talking about
[03:58:23] Let me see if I can get it here. He's talking about yeah, like data, like having a parent fetch the child right and.
[03:58:31] Like basically he fetches some data up here for the list and then each
[03:58:35] Post also fetches its own data.
[03:58:38] I get it. So cascading n plus one problem. And the answer is like,
[03:58:44] Yeah, I mean, there's a couple of ways to solve this one way.
[03:58:50] If it's hoisted, like Rode, you can obviously have all the server functions basically cascade, like build onto the same request.
[03:59:00] But we're assuming that they aren't discoverable because they're nested like you have to fetch the list to get the list. So
[03:59:08] Yeah, how would you know which ones are sure?  I think the reason that...
[03:59:11] Right, and then what's Dan say?  I think I have an entire list of posts for you,  each with some litre.  You'd have to make the one request to get the IDs  and then do 30 parallel requests.
[03:59:20] I think the reason this, yeah, so Dan's like, look, the get the cascade, you have to do the one request and then you do all the requests.
[03:59:26] And my response to this was, I think the reason this argument never cares is because people have  been solving this problem since the beginning. GraphQL is a solved, hoisting is a solved. The  only thing people don't intentionally do is make 30 parallel requests. And a trivial example can  always avoid it. Solution in all cases involves building up a larger data set in a single request  on the server, which becomes more specialized to that specific part of the UI. So you do make  server components in a sense, maybe made of JSON, but now you have two
[03:59:50] locations to update when any code changes. It's not like MVVM versus components. What I mean is like
[03:59:55] And maybe, um...
[03:59:57] was basically the component model.
[04:00:00] are basically components except because the view model tree was separate from the model tree
[04:00:05] When you updated like what data you needed for the component in the server, you'd have to go over to the model tree and update it. And then you go over to the view model and update it. So you update it in two places.
[04:00:15] So in a sense, if you
[04:00:18] go, "Okay, I'm gonna be getting a list of users,
[04:00:20] And I know that I need to get all the cascading thing.  You're just going to make one server function to get the list of users with the fields you need.  And maybe that's configurable as an argument.  There's a lot of options of how you can combine things.
[04:00:32] this into a single request.  But generally speaking, because this location needs these fields  and this other location needs these other fields,
[04:00:39] you are in fact creating a kind of specialized data set.
[04:00:43] um that means that like when you change the fields you have to update in two places i think
[04:00:48] The composition argument is fair.  The part that is less obvious is how easy is to have  multiple trees on the page that can entwine.  What if you don't need to update the whole page  on every mutation?  It's a lot easier to picture that in a decouple model.  And I think this is really where the crux of this discussion  has gone to now, because essentially,
[04:01:04] we've gone to a point now where
[04:01:09] Thank you.
[04:01:09] Thank you.
[04:01:12] People, I mean, you can see, yeah, you can serialize stuff, server components, sending UI, interchange it all in a single request.  That's great.  But when you have to go change something, when your app is actually, from the updates frequently, you know, more frequently, maybe a dashboard, maybe something.  It's very hard to see how you don't just, like, throw out the whole page every time because it's all part of a single tree.  Basically, the same superpowers and strengths that came in here to, like, allow you to do this single tree also means mutation isn't granular.  So a lot of people are looking at, like, you can use the route level.
[04:01:41] actually ends up being a very common place. I think next app router you can you know
[04:01:47] each nested route section can basically act as its own independent tree. You don't have to do the whole page. You could just do it from the route section. And I think
[04:01:55] I think what's happening is if you have, it's not about interactivity, but pages that change,  like dynamicism significantly enough, it's very hard for people to see
[04:02:05] Um,
[04:02:06] how the single treat, like basically they're kind of at odds with each other. The thing that makes this solution so great is that it entwines everything so like you don't do multiple requests. The thing that makes it so terrible is it's hard to break it apart.
[04:02:19] So,
[04:02:20] Um,
[04:02:21] This tension is basically, I think, where we've been sitting.  It leaves people like Tanner trying to figure out how you can add multiple React server component trees to the UI, which,
[04:02:30] Then again, also defeats the biggest benefit of React Server components, which is the ability to combine the request into a single zone.
[04:02:38] But I think that's where the tension is.  And then maybe if they find a good balance for it, then like,
[04:02:42] people will be happy with that and that will be the magic.
[04:02:52] Uh...
[04:02:59] Thank you.
[04:03:06] I
[04:03:08] Anyway, um...
[04:03:12] Yeah, I don't know. I read an interesting blog post about
[04:03:16] Similarly, I'll share this one.  It was called server points giving you optionality.
[04:03:23] Just to kind of wrap up here. It felt like it was related, even though it wasn't like the  conversation we're having. The whole idea was that, you know, server components basically just
[04:03:34] give you
[04:03:35] Your code runs on the server client, meaning you, okay, what does it say? We have traditional rendered CSR apps, your code only runs on the client. That's trading off UX.
[04:03:44] or more elementary DX generally use dashboards and all apps.  With SSR, your code runs on both, being the same code.  You know, with the RCs, you can have full access to the prior two paradigms,  yet add one more, your code can run on the server only.
[04:03:55] it doesn't seem like a big distinction but actually major ramifications it does i agree
[04:03:59] So, yeah, universal isomorphic.  Seems to be the one of some of them.
[04:04:03] whether the data about the blob but our list at
[04:04:06] has to render on the server and the client.
[04:04:09] Their code must run on the client.
[04:04:13] What if the same code?
[04:04:20] I mean, there's lots of ways to run code on server.
[04:04:26] And then they're talking about RSCs without the optionality.  Some pages have to render statistical leaving.  Yeah, I think the premise here is like the sell.
[04:04:35] I think the challenge here are--
[04:04:38] C's don't come in at zero cost. They require rethinking how we structure app sites, right? Because the structural aspect is actually the whole problem, like concern.  Tooling builds are more fraught. That's fine. It doesn't matter. So is SSR. I believe for now, RCs are a tool for front-end professionals.  Experts with army net that gives us fine-tune. The only thing is they don't.  They give you fine-tuned control if you assume...
[04:05:01] that the basis is
[04:05:05] There's a few problems I think the Reacting might consider solving  for the RSC handoff that might do it.  If there's a way that you can...
[04:05:12] precede like really easy pattern for preceding the data from the server from the rcs and then like
[04:05:19] update and mutate it from the client,
[04:05:21] afterwards. I know that breaks the consistency of the model,  but I'm wondering if that would help.
[04:05:26] Um,
[04:05:27] Like even though it lets you choose which environment, the truth is your client code still needs to go to the server.
[04:05:32] like you don't eliminate that need with rcs like suddenly you now you have two different data you  have an rc data path and you have a client data path so it is very much putting both options and  in a sense that's an expert level thing where you can have them both things but the problem is when  they become hybrid
[04:05:48] Okay.
[04:05:48] everything becomes client components.
[04:05:51] So it's like...
[04:05:53] Thank you.
[04:05:54] There's a mismatch here.  I think this is the argument I would have made for RSCs a few years ago when I didn't understand them as well.
[04:06:00] as I do now.
[04:06:01] Um,
[04:06:04] The fact that you can do both and all put it side to side is incredibly, um,
[04:06:08] powerful, but the trade-off of how they, like, the devils in the details of how those things wire together, I think this is why
[04:06:16] it's like there's a lot of people coming to them from a very client-side perspective and it's just pure hurdle even if
[04:06:24] Technically speaking,
[04:06:26] incredible capability to do even more.
[04:06:43] I missed this, and that's the part that I...
[04:06:47] I probably should spend more time on.  I was reading the description and I admit,
[04:06:52] that
[04:06:52] From that alone, it sounded like a lot of the coordination efforts were in a blocking, and that might be the wrong assumption.  I it's.
[04:07:01] I might need to actually
[04:07:06] Is there an example?
[04:07:08] Yes, because when I saw these examples, I was like, OK, this is--
[04:07:12] You know,
[04:07:15] you
[04:07:16] Yeah.
[04:07:18] Thank you.
[04:07:20] Thank you.
[04:07:21] Yeah, I think I'd need to make examples, like spend more time on it to actually like
[04:07:27] and I said this when I was covering it, to actually like
[04:07:30] see the
[04:07:31] the repercussions of it.
[04:07:44] Yeah, like there was those, I saw those demos, maybe there was like,
[04:07:50] I've read a lot of the discussions here.
[04:07:53] It's just that there wasn't.  There's a discussion about.
[04:08:00] Is there a type ahead?
[04:08:03] Thank you.
[04:08:04] No, anyway.
[04:08:09] Thank you.
[04:08:12] Thank you.
[04:08:13] Thank you.
[04:08:13] Yeah, the interesting question with server components generally comes is like, what if those islands make up 80% of your page?
[04:08:21] How much does that change your perspective on it?
[04:08:27] Yeah, well, I, we're going to server components. We spend a lot of time on, which is a kind of a different thing. And this felt async stuff. It was just at the beginning. So I think we'll probably spend more time on this as it flushes out. People make
[04:08:40] Um,
[04:08:41] more examples and, um,
[04:08:44] demos of how these things work.
[04:08:47] The one thing I did want to try, Dom, that I didn't get to try is I didn't see how nested fetching works. Like if you have a component that fetches data and another component inside that fetches data, not based on that, just completely independent data.
[04:09:00] Like, so not like a cascading reactivity, but like
[04:09:04] like basically two completely independent fetches that are nested because of UI.
[04:09:30] Yeah, I mean, yeah, I mean, it's like this is the kind of,
[04:09:36] This is the kind of tension, right?  You can get all the data in one round trip, but then what if you don't want it all in one round trip?
[04:09:42] Like there's
[04:09:43] There's an interesting architectural tension.
[04:09:49] Okay. Let's see. I'll bite. I've got about...
[04:09:54] 10 minutes tops.
[04:09:56] Let's see if I can...
[04:10:00] Let me see if I can understand.
[04:10:03] this because maybe this example will give me a better insight into what we're doing here.
[04:10:08] Okay.
[04:10:12] But maybe this is just-- OK, so we put a boundary around.
[04:10:15] three components,
[04:10:18] And.
[04:10:19] each component
[04:10:22] fetches its own data. So this is parallel fetching.
[04:10:25] And then
[04:10:26] They all take two seconds.
[04:10:30] um
[04:10:31] How do I just refresh?
[04:10:35] Is there a console here?
[04:10:40] Imagine this is just...
[04:10:44] Thank you.
[04:10:46] Imagine this is
[04:10:50] Thank you.
[04:10:50] Okay.
[04:10:51] I see.
[04:10:52] Thank you.
[04:10:53] Fetching and wrap or fetching. Yeah, yeah, yeah. I see what you're saying. So let me,
[04:10:58] Because rapper, where is rapper?
[04:11:01] The children are fetched in parallel,
[04:11:05] These two.
[04:11:06] But the wrapper...
[04:11:11] Okay.
[04:11:14] Gotcha.
[04:11:16] and this delayed.
[04:11:18] has nothing there's no coordination okay so yeah
[04:11:25] Yeah, I think it'll be interesting to go into the more details in the future about
[04:11:29] Um,
[04:11:30] how these things work.
[04:11:36] Oh, yeah.  Sorry, Dom.
[04:11:40] Thank you.
[04:11:41] Maybe if you send it on Discord, I can see if I can grab something.  The YouTube chat filters out links.
[04:11:48] I don't know if you have access.
[04:11:56] Yeah.
[04:12:01] Discord's probably best if you have it, if you're still around.
[04:12:12] I see it's gone from effect pending to snippet pending.
[04:12:23] Thank you.
[04:12:25] Thank you.
[04:12:30] Okay, gotcha.
[04:12:33] Thank you.
[04:12:35] Yeah, which I'd have to manufacture this.
[04:12:39] I'd have to mess with this demo a bit to
[04:12:42] to actually make it do that we'd have to actually have like a driver
[04:12:48] that
[04:12:49] Trove.
[04:12:50] Thank you.
[04:12:51] I think it doesn't even--
[04:12:54] You'd have to drive all of the fetching.
[04:12:57] Because...
[04:12:59] To actually see it, yeah.
[04:13:04] Okay.
[04:13:05] Thank you.
[04:13:13] Oh yeah, you and Jay Larky are going back and forth. I wouldn't worry too much. He knows what you're saying. He knows what you're saying.
[04:13:20] sometimes likes to
[04:13:22] Push a little bit.
[04:13:24] everything is server first until you but yeah i think this is a good way to approach and i think i
[04:13:29] I think more people should be using Astro, honestly, in general, because there's a whole category.  It's just interesting that React typically catered to the application developer.  So now we're kind of in a zone where people like the primary audience is like kind of missing going like, how does this work in my thing?  It's not just the mental model of it.  It's literally like even if you give them the use case, you're just like, what's this supposed to look like?  I think it's a great exercise.  As a framework developer, it's always fun to go through that exercise.
[04:13:59] of the hardest effects
[04:14:01] to split and they're like how do you split this effect?
[04:14:04] The sad part is sometimes when you go through that exercise and you end up with like,
[04:14:09] better code.
[04:14:11] The thing is that you realize that the developer would have never got to that solution in the first place.
[04:14:16] Yeah.
[04:14:17] Thank you.
[04:14:18] Anyway, with my new stream time and stuff, I got to wrap up here.
[04:14:25] eventful stream. I think we got through a lot of stuff.
[04:14:33] Thank you.
[04:14:33] So that's good.
[04:14:36] I might be a little while again.
[04:14:40] getting ready to move coming up here. And I've been working on new compiler.
[04:14:46] from for for the solid ssr it's so funny because i know writing this that like if we go to like  something like presumably we'd be writing new compiler again the key part is that the client  and the server match
[04:14:57] which means that hydration and server-
[04:15:00] outputs have to go lockstep and the client only stuff doesn't actually matter as much.
[04:15:06] um it can be like optimized for its use case so like it is a very interesting how different like  the world goes when you start focusing in on those kind of specific optimizations i'm hoping we just  find a happy middle place i was really hoping i could just skip this topic for now and just get  out all the really cool client side stuff we've been working on but it looks like
[04:15:27] solid 2.0 has to be the complete solution so you know um like in terms of i mean it was  always going to be complete but it has to actually include
[04:15:35] all of the stuff updated to work in this model.
[04:15:39] which is fine.
[04:15:42] going to take a little doing.
[04:15:49] I mean...
[04:15:52] I don't know what that means. I mean, I guess I once accused Misko of not having actual  resumability because his components re-ran because they were BDOM and then he added signals.
[04:16:03] Um,
[04:16:05] My pseudo-publish,
[04:16:06] resumability,
[04:16:08] Like the problem with the resumability of the topic in general is like,
[04:16:12] you still at some point have to convert the serialized data back into a signal graph.
[04:16:18] Is that that different than constructing it while hydrating on the page?  Do you know what I mean?
[04:16:24] Like you don't actually have to
[04:16:26] like you still also have to add the event handlers on that like you still have to actually
[04:16:32] do the basis of hydration.  It's whether you use a component tree  closures to do it or you have a routine  on optimal data set.  The biggest difference is you don't have  to run the computations, right?  So like, as I said,
[04:16:44] what's actual resumability i don't know like what if you ran all the components but didn't have to  run any of the reactive scopes
[04:16:50] Is that actual resumability?
[04:16:54] I think quick definition includes the ability to lazy load code.  And I think that's probably more interesting,  which is you basically have to turn the graph on its head.  So the effects are the top of the graph.
[04:17:06] not the component tree.
[04:17:07] And I think that's...
[04:17:09] That's the key part because you want to have...
[04:17:14] that ability to
[04:17:17] to actually execute
[04:17:19] like execute things lazily not necessarily load it but execute it lazily um like things become
[04:17:26] signals lazily.
[04:17:28] A lot of complication there though, so.
[04:17:31] Yeah, I don't know. Maybe something like resumability.
[04:17:36] Dominic got the link.
[04:17:41] I will give it -- I literally got just a couple more minutes left, but let's see what here.
[04:17:50] All right, input bind value city.
[04:17:54] okay sweet yeah so this is the type of head problem this is what i was worried about
[04:18:00] press.
[04:18:01] Sorry, no.
[04:18:04] What am I looking for?
[04:18:08] We did Paris. Let's do London.
[04:18:14] Right.
[04:18:17] Oh.
[04:18:20] Thank you.
[04:18:30] Not sure.
[04:18:32] Thank you.
[04:18:33] Am I introducing a different way?  There's a lag that I'm introducing somehow.
[04:18:37] I don't know if this is the right
[04:18:47] Thank you.
[04:18:47] Oh, I'm not screen sharing.
[04:18:50] oh yeah sorry screen share thank you
[04:18:54] Yeah, sorry.  So this is the type ahead situation.
[04:18:58] where you have a city,
[04:19:01] Let me reload this thing.
[04:19:03] And then you have the search results for the city, right?
[04:19:07] Paris toggle.
[04:19:11] Okay.
[04:19:13] You think this is a type ahead example?
[04:19:16] So if I delete it,
[04:19:23] London.
[04:19:26] Thank you.
[04:19:29] Thank you.
[04:19:30] There's some kind of delay coming in.  I don't know if that's intentional.
[04:19:36] uh let's let's see if i can drop it in one thing what's another city that might
[04:19:41] Let's toggle full details.
[04:19:45] Can we do...
[04:19:47] New York.
[04:19:55] Thank you.
[04:19:56] Thank you.
[04:19:59] Maybe not that straight line in again.
[04:20:13] Oh, I see. It's what you're trying to...
[04:20:17] Oh, okay, okay, okay, okay.
[04:20:22] Yeah.
[04:20:23] I see. So if I...
[04:20:27] Okay, I didn't do it fast enough. I'll get it next time.
[04:20:33] Thank you.
[04:20:41] Okay, now I go to London.
[04:20:44] and I toggle it.
[04:20:50] Tonga.
[04:20:57] Quonets felt to like three seconds.
[04:21:01] Thank you.
[04:21:04] Okay.
[04:21:05] Thank you.
[04:21:07] Thank you.
[04:21:11] Okay.
[04:21:21] Paris.
[04:21:23] Thank you.
[04:21:26] Yeah, I don't know. Maybe I'm just not...
[04:21:28] quite getting the demo.
[04:21:34] Hmm.
[04:21:36] I got to go now, though. So
[04:21:38] I guess I'll have to pick this up another time.
[04:21:41] Maybe I'll be back, Dominic, when we're a little bit closer on release on this stuff and we can talk about it.
[04:21:46] Um,
[04:21:49] So,
[04:21:50] Anyway, yeah, I got to go.
[04:21:54] pickups and do stuff.
[04:21:55] Yeah, for sure. I demoed something earlier today that was like that.  I was I had like an off screen component and it was just like,
[04:22:04] got stuck in loading forever and I was like oh oops uh it's all good uh
[04:22:10] really exciting stuff that's being worked on right now, like redefining how we look at async in libraries. And to be fair, as React did, in my opinion, kind of start the ball rolling in a lot of this stuff. But when you combine this with signals and fine-grained reactivity, there's just like this superpower that completely changes expectation. You don't have to like
[04:22:27] block the world you can you can do things more granularly you can it can flow much more intuitively  so i think i think this is a brave new world as i've been saying the journey to reactivity is still
[04:22:38] fairly new and this async area is very very exciting so it's very very cool to see
[04:22:43] progress here from all over the place kind of coming into the forefront. So, you know,  Angular recently actually had their resource proposal and stuff. So very, very excited  about where this stuff is going. Anyways, that's it for the stream. Hopefully I'll stream again  sometime soon. So until next time, let's see, is there anyone to raid?
[04:23:03] Um, just only people I'm following are magic streamers. Sorry guys. Um, I will, uh,
[04:23:09] See you guys around.