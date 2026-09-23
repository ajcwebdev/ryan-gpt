---
title: "qyQNFstxlzY"
slug: "qyQNFstxlzY"
duration: "5:23:45"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/qyQNFstxlzY.m4a"
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
[00:00:01] Hello everyone, welcome to my stream today.
[00:00:06] Just a second. My audio sounds weird to me.
[00:00:09] Check.
[00:00:09] Nope.
[00:00:10] Alright. Just making sure I wasn't actually... Okay.
[00:00:14] Yeah.
[00:00:15] How are you all doing?
[00:00:17] We're going to get started up here in a minute.
[00:00:20] um...
[00:00:22] This stream, we're going to look at Next.js, and I have to admit, if any of you saw my previous stream on Next.js,
[00:00:30] I'm not terribly familiar with it. I kind of do this a little bit blind, so you know, bear with me a bit because...
[00:00:40] You know, I'm hoping this time will at least go better than last time.  If you remember last time I had a stream on Next,  we were sitting there building a Hacker News demo.
[00:00:48] And had everyone on chat give me hints on how to get started and all these things.  And we actually were able to port all the Remix stuff really, really quickly.  Like Loader to get server-side props was like straight up swap.
[00:01:03] But like...
[00:01:06] What was kind of funny was I spent like
[00:01:08] most of the stream converting link tags to put the anchors on the inside.  Like, that was, like, the whole stream.  We were just, like, sitting there, like, going,  okay, let's find another link tag, let's put the anchor in,  move all the properties down, and whatnot.  And we basically...
[00:01:23] We were just chatting for like half an hour while, uh,
[00:01:26] while I was swapping anchors and link tags. That was my next dream.
[00:01:31] But I mean, people seem to like the stream.  It got a pretty good amount of eyeballs, especially for its time.
[00:01:37] So, you know, I think that's what happens when you put...
[00:01:40] Next in the title.
[00:01:42] people are legitimately interested in that.  It's a lot like you just kind of like jump over the,  the small hurdles.  Um,
[00:01:49] - Thank you.
[00:01:50] But yeah, I mean, it wasn't my best stream.
[00:01:55] uh i hope i do a little bit better with next this time um but yeah i'm very interested i'm gonna have  to like reference the docs like a whole ton you know most people when they do streams actually  prepare for this
[00:02:05] Um...
[00:02:06] But you're going to have to like, you know,
[00:02:10] Bear with me as I actually learn it on the fly.  Yeah, they did fix this in X13, to be clear.  They actually fixed it the week after my stream.  They announced it.
[00:02:19] I was probably in no way related, but it was really funny because I feel like everyone watched my stream and like how painful that was.  And then like the next Friday or the next Thursday, they're like, yeah, you no longer have to do the anchor tag thing.  Like, oh, OK, you know.
[00:02:35] Um
[00:02:36] hey it is what it is but yeah i'm just killing some time let's let's actually post that i'm live on uh
[00:02:41] on the socials right now.
[00:02:45] um
[00:02:46] and actually make sure my screen share still actually works.
[00:02:49] Yeah.
[00:02:50] Sometimes it just like stops working just for no reason.
[00:02:54] Um, yeah, where are we? Share screen, this one.
[00:02:59] All right.
[00:03:00] But yeah, I mean, for me, actually, my real interest here is server components.
[00:03:11] Mostly that...
[00:03:15] I've been looking at them
[00:03:17] for quite some time now.  I've looked at different versions.  I've looked at the original server component demo.  We did that on stream.  I looked at Hydrogen, which I quite liked.  So I've been really looking forward to seeing the next JS  version of it.  I wanted to jump on it immediately when it was released, even.  But there was a few bugs.  I'm hoping a month or so later, we're going to past that stage,  and we can get a good representation of what's  going on.
[00:03:45] What else?  Yeah, I'm actually going to pop this in Discord too.
[00:03:50] Um...
[00:03:51] But yeah, I mean, that's the main thing here.  I have to say...
[00:03:57] My server component streams have notoriously bad viewership.
[00:04:01] like absurdly bad. We could literally be talking about some framework that no one's ever heard of  and it gets better views than my server component streams. I don't know if it's the algorithm where
[00:04:15] have no interest in server components. But like, like, it's just it's, it's disproportional, I just haven't been able to figure it out. Every time I do a stream, it's like react server components, I'm like, yeah, this is really cool stuff. It's like, no one wants to watch it.
[00:04:28] Um...
[00:04:31] *sniff*
[00:04:32] And...
[00:04:34] Yeah, I can understand that not everyone sold on the vision of server components.
[00:04:40] but it's an interesting paradigm, and it's something that I've explored with Solid as well.  I have to admit, when I first saw them,
[00:04:49] I had like two reactions,  right?  Um,
[00:04:53] So
[00:04:54] But just sorry as you guys all know I this is what I do at the beginning stream to kill some time  I actually want to jump into discord for two seconds and actually I
[00:05:04] post in there in case
[00:05:07] you know, anybody actually wants to come in
[00:05:14] Thank you.
[00:05:15] Live talking, what are we doing here?
[00:05:19] Next, server components.
[00:05:23] - -
[00:05:24] Twitch.
[00:05:26] TV slash Ryan's solid.
[00:05:29] All right.
[00:05:31] Thank you.
[00:05:31] Yeah, I...
[00:05:33] It's...
[00:05:35] It's one of those things where...
[00:05:37] like...
[00:05:39] I think people have a couple different views of the world and maybe that's where we should start our conversation here about the topic of server components in general.
[00:05:48] Um...
[00:05:52] Right.
[00:05:54] Thank you.
[00:05:56] I'm sold on the solid news.  Yeah, no, that's going to be a lot of fun, and we'll talk about that a bit later as well.
[00:06:04] Thank you.
[00:06:05] I'm sorry
[00:06:08] .
[00:06:09] Thank you.
[00:06:10] Yeah, I mean, I find my streams is actually the opposite.  If I talk about React, people are really stoked.  My React streams tend to do really, really well.
[00:06:18] as long as I don't talk about server components.
[00:06:21] It's actually really just weird.
[00:06:24] Um...
[00:06:26] - Thank you.
[00:06:27] But, okay.
[00:06:29] I think...
[00:06:30] I think the challenge with the server component thing is...
[00:06:35] Thank you.
[00:06:35] Thinking of how to frame this, we've been on this path for a while.
[00:06:41] Am I supposed to scale draw just so that we have pictures while we do it?
[00:06:47] the state of the world these days.  I don't even think this needs an Excalibur.  Um...
[00:06:53] Thank you.
[00:06:54] I just like, I could just keep up the MPA.  I could just keep, actually, you know what?  The one that I did from like...
[00:07:00] the previous stream, I can just
[00:07:02] recycle indefinitely, right? Like, this is just the perfect Excalibur. We just, we just,
[00:07:08] do this one over and over again. But what I was getting at is,
[00:07:13] Even though there's like a clear use case scenario,
[00:07:17] For the longest time,
[00:07:19] There was this narrative where...
[00:07:22] the world is going from left to right.
[00:07:25] right, on this graph, that, like, essentially...
[00:07:29] you know,
[00:07:30] Ignore the top line here I talk about, like...
[00:07:33] You know, we can hide that or something.
[00:07:36] I can't move that toolbar, can I?
[00:07:38] That doesn't matter.  But my whole point is like, the thinking here is that like,
[00:07:43] Technology was started in like these static sites into MPAs, into single page apps.  And ultimately, everything eventually, because of the higher demands of interactivity, is going to end up over here.  Everything needs to be a mobile app.  Everything needs to be Figma or whatever.  Like that has been the mentality that's been guiding the progress of web dev development.
[00:08:04] almost for a decade.
[00:08:06] Like we just need...
[00:08:08] like the demands and the technology and like what we want to get out of our sites
[00:08:12] It's just innately heading that direction.
[00:08:16] And I think that
[00:08:20] undersold
[00:08:21] the potential
[00:08:23] different sorts of use cases that,  uh,  that,  that,
[00:08:28] like people would look at and i i jason miller um...
[00:08:34] holotypes, wrote an article, um...
[00:08:38] a few years ago and
[00:08:42] Essentially, yeah, February 15, 2019. He was like, he was just like, "Look,
[00:08:46] Not every site or application has the same kind of experience.
[00:08:50] Thank you.
[00:08:51] Thank you.
[00:08:52] So he just started categorizing some of these, like social networking, social media, storefronts, content. And the thing was, as he went through the different types of use cases, and he talked about ideal implementations, constraints, this is a good matrix to get started in categorizing what you're trying to do.
[00:09:10] Because there is a shift.
[00:09:14] That
[00:09:15] kind of inevitably came here and mostly from people who were keyed into  performance,  people like Jason Miller,  um,
[00:09:22] where like,
[00:09:24] You realize that like
[00:09:27] not only is the full application thing overkill for short session, quick view stuff, it actually
[00:09:35] Unless you can completely smooth out the experience in a way that we don't have today,
[00:09:40] it's actually detrimental to those experiences. It actually makes it worse.
[00:09:44] Not everything should be a single page app.
[00:09:47] it was actually kind of funny because I, you know, ThoughtWorks, they actually had to make a
[00:09:53] A note.
[00:09:54] on hold, that concept that everything should be a single page app.  It was enough of a topic that they had to actually add it as an entry into their matrix.
[00:10:04] And
[00:10:04] And...
[00:10:05] I think that's kind of like...
[00:10:08] Interesting.  Because like...
[00:10:10] This was the vision that we've been sold for quite some time, for like a decade now.
[00:10:17] And
[00:10:19] I like the kind of...
[00:10:22] see this sort of shift happening because like,
[00:10:26] Let's think about this for a minute.
[00:10:29] If that isn't true,
[00:10:32] Like that kind of changes everything.
[00:10:34] Right? Like...
[00:10:36] Suddenly, like...
[00:10:39] It makes...
[00:10:41] things a lot open. We're talking about ranges of solutions, not just like everything has to be directed in a certain direction.
[00:10:49] And what he actually mentioned in here is like, yeah, there's a lot of stuff here that's single page apps.  So when he started getting into like, okay, those are games. But when he started to do some stuff like content websites, he's like,
[00:10:59] you know, server rendered with TurboLinks or, you know, MPA, like, he started talking about multi-page apps. And, I mean, this probably led to his
[00:11:08] follow-up article about
[00:11:10] the island's architecture.
[00:11:12] um which
[00:11:15] Now it's become kind of a...
[00:11:18] Uh...
[00:11:21] It's become kind of a staple article for people in terms of understanding the kind of techniques that large e-commerce sites or like certain types of sites like things like Etsy, eBay, most notably, have been using for years and years to get good performance, even though they're using kind of modern JavaScript.
[00:11:39] Right.
[00:11:40] And
[00:11:40] the
[00:11:41] Like, this is a real thing.  It's been going on for years and years, honestly.  Like, I think eBay's been using internally since 2013,  this kind of technology.
[00:11:51] And
[00:11:54] For that reason, when I first saw Server Components,
[00:11:57] I was kind of like split.  I was like, at first, I thought it was like this API thing.  And I'm like, okay, so this is like a...
[00:12:03] new way to take the single page app further, you know? So it's just like some proprietary API.
[00:12:10] But then...
[00:12:12] And it took me a while. I even wrote an article where I actually have to admit I didn't quite understand the whole implication.
[00:12:20] It took me about a year later when we reviewed it on stream right before that to actually realize, like I reread the RFC, looked closer at it, and I realized that
[00:12:28] Server components were basically the island's architecture.
[00:12:32] Like it was the same rules, the same, the same considerations.  And that the React team, you know, a couple of years ago,
[00:12:41] had realized that to scale
[00:12:44] they made the decision.
[00:12:46] And what I mean by made the decision is,
[00:12:49] Is that...
[00:12:52] -
[00:12:53] *cough*
[00:12:54] - Yeah.
[00:12:56] They're admitting...
[00:12:58] that a single page app, like going all the way to the end of the spectrum,
[00:13:03] is not for everything.
[00:13:08] And that conclusion...
[00:13:13] is huge.
[00:13:14] And I really need to emphasize this point because...
[00:13:18] almost everyone that I've seen
[00:13:21] explore this range, get over
[00:13:25] here and then try and go back and figure out how they can cover wider range. You have to imagine this started becoming relevant for React because now
[00:13:33] they are in a situation
[00:13:35] where
[00:13:37] more and more people are using it and they're like, "Yeah, we just converted our whole e-commerce  store over to React.  Why does it suck?"
[00:13:44] Like, you know, like,
[00:13:46] It was fine for Meta or Facebook's use cases.
[00:13:50] And they optimized for what they needed. I guarantee the way they use React at Meta is not the way you use React. They needed to do some perf stuff that's on a different level than the way you're wiring it up at home.
[00:14:03] But like,
[00:14:06] Suddenly, use React for everything becomes a thing.  And they're like, how do we solve this?
[00:14:12] And that's the mental break that needs to happen.  That's where the switch happens.
[00:14:18] I'm not sure.
[00:14:19] is the way
[00:14:20] that I'm talking about.
[00:14:22] What are we trying to understand?
[00:14:24] I'm talking about islands and server components.
[00:14:32] - Yeah.
[00:14:33] Yeah, I think everyone thought React would give you more and more for free and it didn't pan out. No.
[00:14:36] No. And single page architecture in general is the problem.
[00:14:44] Thank you.
[00:14:45] And I think that
[00:14:50] when you put it in that light,
[00:14:52] It's really interesting because
[00:14:55] A lot of people out there still believe...
[00:14:58] that we're inevitably heading there.  The complexity of JavaScript apps needs...
[00:15:05] Interactive demands will require us to get all the way over here.
[00:15:10] It's just inevitable.
[00:15:12] what can be JavaScript will be JavaScript.  That's essentially the modem here.  Like what can make it to the server?  It's not even what can be JavaScript, it's like,  what can make it to the client will make it to the client.
[00:15:24] Right?
[00:15:24] So eventually the whole app has to make it to the client.
[00:15:29] And
[00:15:32] That's not what React server components are.
[00:15:35] React server components are also not live view for people who, you know, were like, we've been doing this in the back end for years and years and years.  Also not the same thing.
[00:15:46] Yeah, like...  It is a...
[00:15:51] It is...
[00:15:54] It is a hybrid approach.
[00:15:56] Not to say you can't do a hybrid approach with LiveView as well, I just want to highlight that
[00:16:02] This is...
[00:16:04] is not necessarily a stateful backend. What we're talking about
[00:16:08] is
[00:16:10] Thank you.
[00:16:11] the ability
[00:16:13] to seamlessly
[00:16:15] Take...
[00:16:16] a multi-page app experience,
[00:16:19] and keep the advantages of a single page app. That's what we're talking about. The switch that I'm talking about is you can't come at this from a single page app and try and optimize it to get to server components.
[00:16:29] That was the thing, we tried for so many years to come up with ways to optimize the single-page app experience. But the problem is like,
[00:16:37] There's the core assumption of single page apps
[00:16:40] makes that untenable.
[00:16:42] Like,
[00:16:43] The only solution out there that I can think of
[00:16:46] that actually...
[00:16:47] solves this from a single page app is the future perspective is quick.
[00:16:55] Right?
[00:16:55] And I think this is part of why Quick has been attractive to people recently when they finally click on it.  Because it's like they start going, well...
[00:17:04] Yeah, if I can break up my JavaScript in such a way...
[00:17:08] that I can seamlessly transform from like the good page loads of an MPA to a single page app
[00:17:14] Um...
[00:17:15] then
[00:17:17] I've got it.
[00:17:18] I can just incrementally load the JavaScript and then get more JavaScript and then eventually we get there.  And if I, this is kind of one of the interesting things about the positioning of Quick is,
[00:17:28] and everything else.
[00:17:30] and where they sit on the graph is because in a sense their technology is
[00:17:37] is
[00:17:38] ideal
[00:17:40] for that perspective of heading
[00:17:42] towards
[00:17:43] the app side of things.
[00:17:45] Performance-wise, I talked in a previous stream  that that's actually ironically the place where Solid kills it.  So there's a bit of a...
[00:17:52] *clap*
[00:17:52] Thank you.
[00:17:53] conflict between like
[00:17:55] having
[00:17:56] the fastest app-like experiences and having the fastest load time, but
[00:18:00] Let's assume that's resolvable.
[00:18:05] But,
[00:18:06] If you think about it,
[00:18:08] They changed the rules.
[00:18:10] So that...
[00:18:11] you know, it's actually tenable to actually scale up on JavaScript.
[00:18:16] But React
[00:18:18] came to a different conclusion.
[00:18:20] And so I just react.
[00:18:22] Literally everyone else.
[00:18:27] And that's why...
[00:18:30] Server components are more like multi-page apps than they are like single page apps.
[00:18:36] the conclusion
[00:18:37] was that...
[00:18:42] If we...
[00:18:44] know we have a server and we can leverage that server.  We never need to send a lot of that JavaScript.  Yes, things can still scale up large.
[00:18:53] It's possible. It's definitely, it happens.
[00:18:57] Thank you.
[00:18:58] Thank you.
[00:18:59] But
[00:19:03] If you take this kind of MPA first optimized approach,
[00:19:08] 80% of the wins are free.
[00:19:11] More or less.
[00:19:14] And...
[00:19:16] When you look at that last 20%,
[00:19:18] you know, we can figure out what to do with that later. That's where the convergence is. So like, in a sense,
[00:19:25] There is a fork happening right now in terms of mentality.  And this is why server components are relevant.  People talk to me about innovation and what I follow.  I think I saw some thread and people are talking about innovation.
[00:19:34] you know, Svelte, solid and quicker what I'm looking at for innovation. And for me,
[00:19:41] There's different, every framework is innovating.  Every framework is kind of looking in their zone  of what they care about in terms of,
[00:19:50] optimizing or innovating on. And I think that like,
[00:19:57] You can't make that list without React.
[00:20:01] is my perspective.
[00:20:06] It's your favorite chart, yeah. Yeah. It's Fred's chart basically.
[00:20:14] Well, I mean...
[00:20:15] It's an interesting question, right?
[00:20:21] It's not...
[00:20:22] The drawback backs are...  There's always a trade-off for something like this.  And this is why it's interesting when you look at it in terms of chart like this,  because it's kind of like...
[00:20:30] .
[00:20:31] Yeah, JavaScript scaling...
[00:20:33] adds complexity.
[00:20:36] ads trade-offs on, depending on how fine-grained you break it up, on serialization.
[00:20:41] Right?
[00:20:42] So in a sense, maybe
[00:20:45] That's workable.
[00:20:46] But you've definitely made a trade-off for that.
[00:20:48] And the argument with server components and a lot of these other architectures is like, Yagni, you ain't going to need it.
[00:20:54] Essentially,
[00:20:57] until you get over to Figma.
[00:21:01] Maybe.
[00:21:02] Or, you know, like further on that side...
[00:21:05] you're gonna get
[00:21:07] you're easily going to be able to get hundreds on Lighthouse scores.  Like, that's not a hard challenge.
[00:21:12] as long as you not, it's a hard challenge for a single page app.
[00:21:15] But it's not a hard challenge for the island type architectures and partial hydration architectures of the future.  That's the argument.
[00:21:24] Like,
[00:21:26] Sure, you could empty scale JavaScript, but who cares?
[00:21:29] if the goal isn't to actually infinitely scale JavaScript, like if the goal is not to send JavaScript.
[00:21:35] That's where the thing is. Maybe we're a generation too soon on the thinking, and we'll all come around to that hybrid at some point, but that's where the conversation is right now.
[00:21:47] Because it's like,
[00:21:49] we're in a kind of a retro back at watch.  I mean,  Astro,  in my opinion,  is kind of,  is kind of a thing like that.  Astro is showing how far we can do with MPAs.  I mean,  it's,
[00:21:57] kind of what Marco's wanted to do this whole time too, is kind of showcase off what you can do with that.
[00:22:01] It's very compelling.
[00:22:03] because you don't have any of those complexities or trade-offs.
[00:22:06] and you basically nail it
[00:22:09] too. I mean, maybe not if you load a whole React app on your Astro page, but I think people  underestimate islands. A lot of times they oversimplify.
[00:22:16] Um,
[00:22:17] the server component interaction. They oversimplify, like, how little JavaScript you can send with the right patterns.
[00:22:25] Of course, those are manual patterns, so why don't you automate it? Well, automation isn't a magic
[00:22:30] bullet either because
[00:22:32] Sometimes things become very easy to de-optimize without realizing it.
[00:22:36] Um...
[00:22:37] Sometimes a little friction is good.
[00:22:40] Okay.
[00:22:44] Right, but I think...
[00:22:47] It's interesting, right?  Because there's a trade-off there too, because it puts overhead on the actual...
[00:22:52] performance of like after the load.
[00:22:54] So like, but I think it could, I think that's the coolest thing about quick is like you could literally load Figma or something in piecewise.
[00:23:02] I don't know if it makes sense to, but like you could.
[00:23:05] Like, I... the approach is sound. Like, it is good.
[00:23:18] Right, and this is where the question is, how much does it matter? It's not Figma, it's the most complex
[00:23:26] This is...
[00:23:29] This is the next generation of Wiz or whatever.  There was a great talk I saw by a multi, you know,  Vercel's CTO, guy who created Wiz at Google...
[00:23:38] Which powers Google Photos Google search like these are
[00:23:43] complicated
[00:23:45] JavaScript apps,
[00:23:47] built on like an MPA surface and the reason I was getting to quicken all this  because I actually want to talk about this is even
[00:23:55] though quick can do that get to the figma zone
[00:24:00] I actually saw that. We saw that when I first released my Islands Architecture article, like for the client side routing. Which one was it? It was...
[00:24:09] Sorry, just give me a second.  Dashboard.  The client routing with the JavaScript article.
[00:24:15] I had a nice little table down here where I showed like how big each frameworks was.  I actually had Quicken here originally because it wasn't an MPA.  It was a client-side Reddit app.  It was like what I explained earlier where you start with a little bit of JavaScript
[00:24:27] and then ended up with like,
[00:24:28] all the JavaScript.
[00:24:30] and
[00:24:31] The experience actually wasn't as good.  The thing that quick developers realized is even though they could scale up like that,
[00:24:37] It's not even the experience you necessarily want.  They actually went back to doing MPA style.
[00:24:43] for their demo and they released another article where it shows quick you know
[00:24:48] Blowing all the lighthouse scores, you know, I won't say it on the water because almost every like most of the sites got like 100 or 99 or 97  But they had the highest score obviously  I mean this is a really simple app, but the the the
[00:25:01] The point was more that...
[00:25:06] Like, even with this power,
[00:25:08] We're not sure...
[00:25:09] We want to use it.
[00:25:11] And this is why there's an interesting...
[00:25:16] Uh...
[00:25:17] Kind of
[00:25:19] sides and question here.  Because, and the reason I'm focusing on this point right now so hard is because I...
[00:25:27] a whole bunch of people aren't sold on server components.
[00:25:30] And like this mentality...
[00:25:33] But like
[00:25:35] no one is actually championing on the framework side, the people actually building the tools,
[00:25:41] Almost no one is actually championing, "Oh yeah, spas will solve everything."
[00:25:45] Like, that's the future. That narrative that was so strong up until...
[00:25:51] I want to say like 2020-ish, like a couple of years ago.
[00:25:57] Like maybe it's fashion, maybe it's trend.  Everybody has moved off that narrative.
[00:26:03] Thank you.
[00:26:03] Right? Even
[00:26:05] the ones able to
[00:26:09] to pull it off, potentially.
[00:26:11] So, that's profound and powerful to me.
[00:26:14] - Okay.
[00:26:19] Yeah, and the funny thing is I don't even call Svelte Kid a hybrid.
[00:26:24] Like,
[00:26:25] *laughs*
[00:26:26] the traditional like Next 12 SvelteKit  non-server component stuff  I call it single page app  in my opinion is this green bar still  Remix all of that stuff is in this green bar
[00:26:39] Like,
[00:26:40] It is not...
[00:26:41] Maybe they focus on certain areas of it more than others.
[00:26:45] And from this screen, I was actually saying even if this green bar exists, this green bar kind of wants to actually stop at this line.  You don't even really want it to come over here.
[00:26:54] Like this is not a happy place for the green bar.
[00:26:56] This is like where we start getting into and people are like, yeah, yeah, yeah, let's turn back.  Um...
[00:27:02] So like,
[00:27:03] Like it's...
[00:27:05] I know this is the problem with terminology people call this stuff hybrid and
[00:27:09] And I'm like, for my purposes,
[00:27:12] everything...
[00:27:13] pretty much up to server components.
[00:27:16] is not hybrid. It's just single page app.  Like it's single page app with server side rendering or whatever,  but it is just single page app.
[00:27:23] Um...
[00:27:27] Yeah, I mean, there's always going to be places for single-page apps,  like, for the technology to do that stuff.  But the question...
[00:27:36] There's plenty of...  What's another example?  Even...
[00:27:40] mobile apps, although they are looking at server components of mobile apps, which is interesting to me if that model makes sense. But
[00:27:47] Like...
[00:27:48] There are Tori desktop apps. All those actually run client apps more than server apps.
[00:27:55] So there are definitely places. This is why I didn't have it like go all the way across like where I stopped the bar.
[00:28:03] Um,
[00:28:08] Right.
[00:28:13] I mean, this is...
[00:28:15] This is kind of like what Richeris would call the transitional app, right?  MPA Astro plus single page app, right?
[00:28:22] Um...
[00:28:24] Yeah, sorry, it just occurred to me I haven't looked at Twitch recently to see what's going on.
[00:28:29] Yeah, nothing new on Twitch.
[00:28:31] Glad to have you guys all in here though. All right, so I
[00:28:35] What I was going to say is this is like the transitional app story, which isn't bad.  What you do for those who don't understand what you do is you.  The thing is, every web page has a potential being a single page app.  So you can take something like a multi page app, like you built an Astro and then just go, OK, this page, it's the single page app and build a whole single page app under it.  Astro might not like particularly help you in that way, the way like Next would or SvelteKit or Remix, which are like tailored for that single page app use case.
[00:29:05] that just transcends that story.  This is like different than having like some pages  that statically render in SvelteKit or Next or whatever,  because the MPA pages are actually optimized,  unlike what you get from SvelteKit, Remix or whatever.  But as I mentioned, the spa experience  takes more custom work on your side.  Second piece of this is,
[00:29:26] It's like a one or the other.  The thing is, the hybrid, the actual hybrid server components thing is actually way more ambitious than that.
[00:29:35] If it wants to handle both of those cases,
[00:29:40] seamlessly under the same architecture.
[00:29:47] Right?
[00:29:49] So like...
[00:29:51] Um...
[00:29:53] I'm hoping, even though I haven't explained how they work or what they are exactly, I'm
[00:30:00] I'm hoping you're kind of like at least getting in the context of why we're even having this conversation today. Like, yeah, yeah, sure. Figma is extreme. I didn't even get all the way over to Figma. Like I dropped the line here. There's Twitch or something like around here and that like there's places where this thing, but the funny thing is.
[00:30:17] I think a fully fledged hybrid server component model is right on the edge where even it can handle that scenario if designed properly with the correct optimizations.
[00:30:27] I've been thinking about this a lot recently, and maybe if I get a chance, maybe later I'll like draw it for you.  But I think that a server component
[00:30:34] architecture could not only do the server rendering you want but it can also if you have  really heavy javascript areas can also basically spoof a json api like it basically with no  downside so it actually can act as both and because the long persistence of sessions um and  you're not like reloading the pages like an mpa you can you can set up your web sockets and and  your you know chats and all that stuff and have those sections and all that so like
[00:30:59] I actually think the hybrid server component model
[00:31:02] can cover like a wide range that even single page apps excel in today.
[00:31:09] We're just like, we don't have the full story yet.
[00:31:12] And I know that we're not going to see the full story today, but I want to see how things are progressing.
[00:31:20] So what's the difference between SSR and RSCs?  Yeah, sure.
[00:31:23] um
[00:31:25] That's a good question. And that's one that's worth answering because...
[00:31:30] Sericide rendering.
[00:31:33] is about isomorphic code, okay?
[00:31:36] Let's go to a zone here. I'm trying to think if there's a good way to draw this. But like
[00:31:41] Because this is...
[00:31:43] So
[00:31:45] You write your React app.
[00:31:48] And the code
[00:31:50] Yeah, I mean, this isn't even...
[00:31:54] It's funny, like I can draw pictures and words, like just like thinking in my
[00:31:58] like--
[00:31:59] You know, because...
[00:32:01] It's a good visual for this.  Because essentially, you can...
[00:32:09] maybe there's a line that we need.  Maybe we can just go like,
[00:32:14] Yeah, maybe.
[00:32:19] Yeah, maybe this is how we're going to do it.  This is how we're going to do it.  Server.
[00:32:26] Thank you.
[00:32:27] browser, alright?
[00:32:31] Back in the day,
[00:32:33] So we're going to do a few of these drawings, I think.
[00:32:36] I haven't decided how that's going to look like.
[00:32:39] not as skilled at this as other people.  But back in the day, you would...
[00:32:43] come in and be like, okay,
[00:32:46] I'm going to...
[00:32:47] - Hi.
[00:32:48] build a
[00:32:52] Let's put some text in here, a Rails app.
[00:32:54] Thank you.
[00:32:55] That's not the right color for rails, is it?
[00:32:59] Or whatever.
[00:33:00] And...
[00:33:02] It's like a reddish color. I don't know.
[00:33:04] whatever, whatever, a Rails app.  And then you'd be like, okay, I'm going to
[00:33:12] connect it to
[00:33:13] a
[00:33:17] colors JavaScript yellow.
[00:33:21] Yellow, whatever.
[00:33:24] can't even tell the difference this would be like terrible for accessibility
[00:33:28] What annoying.
[00:33:32] I'm like not gonna have enough colors for my purposes.
[00:33:35] Let's hash it, whatever, okay.
[00:33:37] It's fine, I'm putting words on it, so the colors are not the only indicator we need.
[00:33:42] Okay.
[00:33:42] and you make like a JavaScript app.  So you'd have like two apps, okay?
[00:33:46] right? And then
[00:33:47] This is kind of unwieldy.  If you've never done this,  you might not understand what I say by this,  but like picture Rails has its templating language  and you iterate over some data.
[00:33:57] And that data might be like, use a templating language like ERB. If you've never seen it, or maybe...
[00:34:10] It's like...
[00:34:11] Thank you.
[00:34:12] Well, it'll actually show me what some ERB looks like. Yeah, yeah, see all these like nice little
[00:34:17] squiggly...
[00:34:18] brackets and it essentially treats the whole thing like a string and you can just kind of like pop in like each and do but
[00:34:25] The problem was,
[00:34:27] If you want the stuff on the client as well,
[00:34:29] You'd actually have to like...
[00:34:31] put your bindings in, like early, early days,  you'd use like jQuery to kind of hook in,  or like once you got declarative, things like Knockout,  or even Early View, where you literally like,
[00:34:41] well
[00:34:41] or even Angular, I think, you'd put the bindings in, and you'd have like,
[00:34:45] ng4 inside the like like maybe here ng4 in the t-body like you essentially have two templating systems  sitting on top of each other or you just like go like screw this I am delegating this and
[00:34:57] to the client. Like, I'm not going to draw  this on the server. But that would have, like, downsides.  So, like, maybe you'd be like,  okay, I'll draw it on the server, and then  when the client wakes up, I'll replace all those DOM nodes  and redraw it on the client and kind of do, like, a refresh  hydration thing. It was just, like,
[00:35:11] It was really hard 'cause you couldn't run the JavaScript  on the client and you kind of like had this thing, right?
[00:35:16] There's this, right?  Then...
[00:35:18] we kind of went to a world,  like we fast forward a bit and suddenly...
[00:35:24] Uh...
[00:35:25] Maybe I'll draw a
[00:35:27] the next line.
[00:35:28] Um...
[00:35:33] Then what happened was we went to single-page app land.  And in single-page app land, we...
[00:35:41] got to take this again and we're just like
[00:35:43] Screw it. There's nothing over here.
[00:35:48] Yeah, let's add some more labels and stuff as we extend out this drawing.
[00:35:53] I know this might be like a little bit...
[00:35:56] Many of you who watch the stream might already have followed this, but it's always nice to have more colorful diagrams, right?  So where are we here?  We're like...
[00:36:06] two apps.
[00:36:07] Thank you.
[00:36:08] MPA like this is the classic.
[00:36:10] And then...
[00:36:14] Sis, tschu tschu.
[00:36:16] Let's see.
[00:36:19] And then like,
[00:36:20] next thing comes along and now we're like,
[00:36:25] single page app. And this is a classic client-side single page app. Like the server basically didn't do anything. It's like,
[00:36:30] I'm like...
[00:36:31] static page
[00:36:33] Right?
[00:36:35] And then...
[00:36:37] The next thing that came along was we were like, oh, this kind of sucks because you get a blank page and then you wait for the page to come in, which is pretty fast because it's blank, and then load the JavaScript and then render some stuff and then fetch the data from the client and then render some more stuff.  It's like slow and waterfall and the page takes a while to load.
[00:36:55] So then...
[00:36:56] we get like our next JS.
[00:36:58] side of things where we get the classic next and remix and all that stuff where we get like,
[00:37:05] Okay.
[00:37:06] uh,
[00:37:07] our isomorphic experience.  And what that...
[00:37:12] I don't know what to call it, SPA, SPR, SSR, but essentially,
[00:37:18] what we ended up doing is we just took this exact same
[00:37:21] thing and we're like
[00:37:22] "What if we actually like ran it
[00:37:25] here.
[00:37:26] Like,
[00:37:27] We'll run it once here and we'll run it once again here.  That was kind of like...
[00:37:31] Um...
[00:37:32] That's kind of like where things are today.
[00:37:37] So we could use SSG and pre-render this part,  but essentially we took the same code,
[00:37:42] So when we talk about SSR, we're talking about taking the same isomorphic JavaScript, essentially, so it runs on both
[00:37:48] both places. So this is the same.
[00:37:50] I don't know how to indicate that this is the same JavaScript on both sides.
[00:37:54] But maybe the next line will help us indicate that it is as I kind of extend this out a little bit.
[00:38:00] Um...
[00:38:03] because
[00:38:04] What we're talking about now...
[00:38:07] is with these kind of
[00:38:11] - Thank you.
[00:38:12] I don't know what to call them, hybrid server components SC type models hybrid is
[00:38:18] it's a little bit different.  We have like...
[00:38:21] - Thank you.
[00:38:22] Um...
[00:38:26] Let's assume the whole app is about the same size.
[00:38:30] But inside this
[00:38:34] There are...
[00:38:36] littler
[00:38:38] pieces. Maybe they're
[00:38:41] pink in color.
[00:38:50] Actually, you know what? I should actually swap the colors around.
[00:38:53] Technically, the big one now should be...
[00:38:58] Um...
[00:38:59] some other color like brown.
[00:39:01] And then these ones
[00:39:03] are going to be blue.
[00:39:05] And the reason--
[00:39:06] The reason I want to...
[00:39:07] swap these colors around.
[00:39:10] is that
[00:39:12] Thank you.
[00:39:16] which might not be obvious yet, is that
[00:39:21] The blue parts
[00:39:22] are actually the isomorphic JavaScript.
[00:39:27] Thank you.
[00:39:29] If I can put it over here.
[00:39:32] The blue parts here are actually the isomorphic JavaScript,
[00:39:42] It's like the same pieces, but the majority of the JavaScript on the outside here doesn't actually run ever in the browser.
[00:39:50] That's sort of the difference.
[00:39:52] I don't know if that makes any sense to anyone, but...
[00:39:57] This is true of server components, this is true of
[00:40:00] Um...
[00:40:01] I don't even have to put islands here.  It's not even hybrid.  This is...
[00:40:06] Both these architectures have that in common.  Okay.
[00:40:12] so like
[00:40:14] we
[00:40:15] This is essentially the conceptual difference.  Because you do SSR...
[00:40:21] and hydrate
[00:40:23] or whatever the little pieces, but the majority of the app actually doesn't.  And that's kind of the difference with server components.
[00:40:30] Hopefully that answers the question.
[00:40:33] *sigh*
[00:40:36] Alright.
[00:40:40] Thank you.
[00:40:43] Where are we going? Just looking at those things.
[00:40:53] Is this Bob because of single-point entry?  How do you define that?  I mean...
[00:40:56] Classically, it has to come down to the routing. Routing is kind of the most defining characteristic here. It's like where the routing, the routing rendering work, but to be fair, what makes hybrid interesting is that we're kind of merging that routing paradigm.
[00:41:11] But classically, it's like when you go to the next page, is it on the client?  That's kind of what makes it a single page app.
[00:41:23] Thank you.
[00:41:25] All right.
[00:41:28] Thank you.
[00:41:29] But that's the whole thing. Server components essentially is that combination. It's like islands plus the client router.
[00:41:35] Um...
[00:41:36] That's...
[00:41:37] That's essentially what server components is.
[00:41:40] It's like if you took, because the challenge is, if you go to the next page, you're going
[00:41:45] and you have all this JavaScript that's only on the server,
[00:41:48] How do you deal with that?  How do you actually draw the next page if you don't have the JavaScript to render the whole page?  Well, the classic answer that we were using eBay for a decade is  you just do MPA style and you go to the server.  You just run that JavaScript and
[00:42:03] Every new page you just send the least amount of JavaScript, but you go back to the server.  Server components are like, "Well, what if we could
[00:42:11] just go back to the server and do that render and then not lose the client state. So like,
[00:42:15] That's essentially what it is. It's the combination of the client routing with the islands.
[00:42:23] You guys are just trolling me here.  I'm catching up.  I'm like 10 minutes behind on chat.
[00:42:30] There's some, yeah, thanks Anthony. You actually drew some good diagrams here now that I'm catching up.
[00:42:38] Yes, completely. Remix is completely a single-page app. It's not really any difference than Next12 or whatever. It's cool. Remix changes the data fetching loading patterns in a sense that resemble more like an MPA in thinking, which can symbolize and streamshot. They got rid of the client-side cache.
[00:42:53] Big kudos to that, but it's still essentially the same architecture.  They haven't really changed anything.
[00:43:02] Alright.
[00:43:09] Thank you.
[00:43:14] Yes, yes. Server recursive JSX template only runs on the server. Yeah, yeah. I mean, it's a little bit more complicated than that. But yes, that is essentially what it is.
[00:43:23] What's interesting, though, is it's
[00:43:25] Combine that with client-side routing so that when you go to the next page, you actually hit the templating language without the whole browser unloading.
[00:43:34] Yeah.
[00:43:39] Thank you.
[00:43:42] Remix is SPA SSR. They might get server components at some point, but Remix is firmly right now in this.
[00:43:48] third line, as is pretty much everything.  SvelteKit, SolidStart, except for my new experimental stuff  that I showed off in that article.
[00:43:56] The only stuff down here is next hydrogen.  Next hydrogen.
[00:44:03] Next 13, Solstart Experimental, Astro,
[00:44:10] Um...
[00:44:11] Thank you.
[00:44:12] Isles, slinkety.
[00:44:15] That kind of stuff.
[00:44:17] But the chef's kiss is combining the client side routing.
[00:44:20] Sorry, Fresh is in here too.
[00:44:23] That is like...
[00:44:25] Right now,
[00:44:26] Solid start experimental.  Next.  Only two solutions that have that.
[00:44:31] Today, really.
[00:44:32] I mean, I guess hydrogen too, but
[00:44:34] Doing the nested routing and stuff. There's only really two places you can find this. That's why I'm so interested in the next 13  because other than salt start, it's the only one that's actually  doing the full
[00:44:44] future thing here. Sorry, quick is also in this category. I forgot to mention quicks in here, but they're not in the they haven't got to the client. They haven't got to like the future thing right now. That's only solid start and next 13. That's why I'm so interested in next 13.
[00:44:57] Streaming, yeah, streaming is just a way we get the page up.  It's a great feature, but it actually...
[00:45:03] and impacts the way certain decisions are made, but it's not really like, it doesn't change the architecture really.
[00:45:13] Yeah, I mean, there's a few other places, but yeah, I think so.  All of those are...
[00:45:17] missing the router. That's why I last January, I realized that was the solution. I wrote articles  about this. I went to a bunch of communities. I went to Astro. I went there. I'm like, guys,  where's this client side router? I was like, I was like, you guys are already so close here.
[00:45:31] I want to prove out and show that this is a thing and you don't need a virtual DOM, you don't need React to do this. Let's get on it. And I'm like, I want to work on solid, I want to work on these fine grained.
[00:45:44] primitives I want to like
[00:45:45] focus on like the the core mechanics and can you guys go work on this and then I  bugged them for a bit then you know people had their own priorities which understands like after 1.0 was a big deal, you know, and and whatnot so then we had to go around and build it ourselves anyway, so
[00:46:03] It is what it is. I'm hoping now that people have seen what we've done with Solid Start and
[00:46:08] Because, I mean, I didn't highlight it here, but
[00:46:13] This is basically server components at 13 kilobytes.
[00:46:16] As you move around here, we never load anymore. Once we get the stuff that we need to render the page, we don't need to load more JavaScript. What is going on here?
[00:46:30] I'm probably in Jack script.  I'm not in an incognito window,  so I'm getting my...
[00:46:36] My, what do you call it? My, uh...
[00:46:39] extensions. So they're adding some fun stuff in here. Yeah, anyways, um,
[00:46:45] Let me adjust my window here some.
[00:46:48] uh...
[00:46:50] Yeah, it's not a big deal.  Anyways, um...
[00:46:54] I just...
[00:46:57] No, it is a big deal because it stops me from demoing what I want to demo.
[00:47:03] Thank you.
[00:47:06] See, 13 kilobytes, right?  And then when you navigate around,
[00:47:10] Like, because these don't need any more components, like we're moving around, we're not getting more things.  The whole app is 13 kilobytes.  It's because these responses coming in.
[00:47:17] are essentially
[00:47:19] some inform-- like the serialized format that tells us assets and actually
[00:47:24] Um...
[00:47:26] Can I prettify it? No, not really. It returns actually in our case HTML markup.
[00:47:31] which we can diff.
[00:47:33] and even do cool stuff like the search
[00:47:35] where we can actually...
[00:47:37] um,
[00:47:39] or a dragon or something.  I know there's House of Dragons.  Like where we can actually...
[00:47:45] keep the focus on this search element  while the parts of the page are reloading.  It's basically a cross between Remix's nested routing
[00:47:52] and  uh
[00:47:55] and and this we actually swap partials it's not very obvious here but this
[00:47:59] bar here, never actually, um,
[00:48:03] replaces, like if I expand it out,
[00:48:06] because it's using nested routing, we're actually swapping out
[00:48:09] something down here in this outlet.
[00:48:11] And this island, like, this part never changes.  So, like, it's a combination of, like,  Turbolink, HTML swapping, and diffing.
[00:48:20] with
[00:48:22] nested routing where we only send the partials we need to. So like,
[00:48:25] Yes. This is what I want to look at next because I want to understand how far they are along this road.
[00:48:31] This is why we're kind of doing this sort of thing.
[00:48:36] Um,
[00:48:37] But yes, Fresh is mostly missing that.
[00:48:42] - Yeah, so Solid Start right now is FALS, yes, yes.  If you just go use it normally, it's Remix, FALKit, all this.  You have to turn on the experimental flag.  You have to go like Islands, Islands, Router,  if you want to get this mode.  Our Doc site and a few other things,  but it's still experimental.  So the thing that we're talking about  for one point beta release is not even,
[00:48:58] even this. I think there's still DX considerations, which is why I'm not rushing this out the door. I think the technology is sound. I think this is really cool. I think we can optimize it further. And I think this is, I'm very excited about this. But when you go and start a Solid Start project, it's just like a...
[00:49:15] solid version of Remix or Svelkit.
[00:49:18] - What?
[00:49:19] Just to clarify, okay, so...
[00:49:23] Where was I? Yeah, not that. We were on Excalibur, yes.
[00:49:31] Yeah, so we get to keep best of all worlds, essentially.
[00:49:37] Well, actually, and that's a cool thing.  VDOM kind of actually enables a lot of this stuff.  Because what the VDOM, I mentioned a diff there.  What the VDOM means is like they don't have to actually send.  It's like picture you can render the VDOM in the server and then send the stuff along  and then have the browser do the diff patching and updating just the parts that change.  That's essentially what they're doing.  They're actually using the VDOM as like a communication mechanism between client and server.  So yeah.
[00:50:04] How should I put it? The problem with VDOM
[00:50:08] Like these aren't the places that update performance
[00:50:12] Well, it's hard to say. Have a check about it.
[00:50:15] I/O, like waiting on a database is more expensive
[00:50:19] than the rendering.  Like when you go to a new page and you're like,  hey, I need to render a new page of hacker news articles  or whatever, you waiting on the database takes longer  than any client framework is going to take to render that.
[00:50:29] So that's not the blocking part.  The criticism about VDOM updates and scalability  have to do with updates.  You're on the page and you're trying to click something  or do something and some kind of interaction  that's happening in client JavaScript land.  Because in this model,
[00:50:42] These blue things are still isomorphic
[00:50:44] JavaScript, like you are still, you still have app in here. You like this is the difference between like the server stateful server that like htmx that like always goes back to the server, unless it has like the two app thing. I'm talking like,
[00:50:56] This is.
[00:50:57] You still live in a React app when you're in the browser.  And all the things that happen,  like updates and highlights and shifts and tables,  all those kind of interactions  are still going to be defined by that.  But when you're going back and doing navigation,  it's actually the database or your backend  and the network that's your biggest blocker.  So RCs don't really...
[00:51:25] They help with that side. They don't really...
[00:51:27] they don't really affect the appness part of your app,  like the more interactivity stuff.
[00:51:36] Thank you.
[00:51:38] Quick is this. Maybe you could argue that they can make these a little smaller and load them in a different order, but Quick is still in this category.
[00:51:50] Um,
[00:51:52] If I was to add another row, it's actually still this, but with client side hybrid routing of some sort, like I just showed in that last demo.
[00:52:01] which as I said today is only available in NEXT 13 and as an experimental flag in SolidStart.
[00:52:07] I don't think anyone else has this yet.
[00:52:10] It's the server component thing. I put server components here, but server components are like technically this plus a little bit.
[00:52:17] Quick has got a container mechanism, which will probably feed directly into them getting the same kind of routing mechanism. But like from this architectural perspective,
[00:52:26] Um...
[00:52:27] This sort of framing doesn't
[00:52:30] show Quik's advantages. Quik's advantage, in a sense, is how well it can
[00:52:35] go from this to this.
[00:52:38] like go from these three to this one. And what I'm talking about is like,
[00:52:45] like maybe that doesn't matter, right? That's why there's like still like we're not sure which way the future looks.
[00:52:53] - Thank you.
[00:53:04] That's awesome to hear.  Yeah, I mean, it's still early, but you can see how powerful this stuff is.
[00:53:10] Yeah, and like changing the classes on the anchor tags and stuff. If I actually open up the demo and look at the JavaScript, you'll just see a couple components. That's it.
[00:53:20] I mean, it could even be smaller, but that page loader indicator, like it's just like stuff like that.
[00:53:26] *sniff*
[00:53:29] Yeah, exactly.
[00:53:31] You understand the whole point of this is that it's not WebSockets. That's why I tried to explain to Brian the other day. This is not about having a connection with your server all the time.
[00:53:44] This actually doesn't fundamentally change
[00:53:48] the nature even of,  uh,
[00:53:51] because you can cache pages and stuff.  It doesn't actually fundamentally change the way this works necessarily for offline.
[00:53:59] Thank you.
[00:54:04] So far, I'm just talking about why server components are interesting and why this whole...
[00:54:09] realm of things are, um,
[00:54:12] you know, like why this is a conversation worth having, because I feel like it's, this is, this  is the thing, like next 13, they did like the release on the conference. And I was like, I was  like, Oh yeah, here we go. Beginning of the next era. Cause like, okay, let's face it here.
[00:54:26] I could release stuff like
[00:54:29] I mean, it doesn't even take me or someone could release a feature like the hottest new react feature 10 years before react does and actually do a good job of it.  And no one's going to care.
[00:54:39] I'm serious. Like Marco. Marco had the islands back in 2014. Nobody cared.
[00:54:47] And like,
[00:54:47] I remember like you can go on Twitter and social people like going like condemning them and
[00:54:53] Like...
[00:54:54] Now we're here, you know, but like,
[00:54:58] And this industry takes the big mover to point the arrow.  It takes them to...
[00:55:04] kind of miss a bit or like you don't get in here by just being better.  Like you,  you,  you,  if you're a smaller solution,  you have to be better to even,  you know,
[00:55:14] play, otherwise no one's gonna pay any attention.  You have to provide something that's actually better
[00:55:19] like,
[00:55:21] you know, to actually even play ball here.  So that's not what it's about.  It's about, like...
[00:55:27] Okay.
[00:55:28] Ah.
[00:55:30] It's about when the timing is right and when the general mass is moving. I was excited for next 13 conf because I was like, you know what?
[00:55:39] Time is up. I had my awesome server component demo ready. Like last year when they launched Edge,
[00:55:46] I was ready to deploy the Vercell Edge the second they dropped it.
[00:55:51] I already talked about this before.  Like,
[00:55:54] I was ready.  And the response wasn't what I was hoping.  So I think like...
[00:56:00] I'm focusing on this because
[00:56:02] People still don't get it and I really want them to get it because this stuff is really cool.
[00:56:08] Like really, really cool.
[00:56:09] Um...
[00:56:10] I want you to get excited about this.
[00:56:14] - The first time we have been in the last year, we have been in the last year.
[00:56:14] Thank you.
[00:56:15] Thank you.
[00:56:16] hell  I didn't quote tweet it so I don't have for this week in JavaScript
[00:56:22] But Adam Rackus was hanging out with Rich Harris or something. Rich was saying that server components are coming to SvelteKit or something.
[00:56:29] Um,
[00:56:32] I think that's pretty cool.
[00:56:33] I suspect
[00:56:36] Because they don't have a VDOM, I suspect some of the demos that we've done with Solid actually inspired that decision because we're the first people to show that it can be done without a VDOM.
[00:56:46] And
[00:56:47] and...
[00:56:49] Rich was very much like standing off and being like, oh, we'll see how this sits.  We'll see if people actually find a solution to it.
[00:56:55] Now that we have,
[00:56:57] I think Svelte is ready to kind of jump in on this.
[00:57:01] And this is sort of what I was talking about, that innovation.  Like, I look at different frameworks for different sources of inspiration.  I look at Svelte because they know how to, like...
[00:57:09] make an experience pleasurable, like make it really easy for people. And they innovate in that range all the time.
[00:57:16] Right.  So like,  um,
[00:57:20] Like there's just different zones that you get different kind of innovations  from views.  Another one like that,  where you like get different,  um,
[00:57:27] learnings from different frameworks.
[00:57:30] Thank you.
[00:57:35] Yeah, this is not a bad...
[00:57:37] way of putting it. The thing is
[00:57:40] Quick doesn't have to render only on the server once,  but that's what puts it in the spa or like this cat...
[00:57:46] category or like maybe like the spa SSR category, like, but like it's kind of like hovering this line and
[00:57:54] Um...
[00:57:55] But yes, the way things are today...
[00:57:59] you use QUIC generally as an MPA framework.  RSCs are like a hybrid, right?
[00:58:05] which I think is good because then you keep that client
[00:58:09] thing where it's good and htmx and just takes it like off the other end which is kind of a  throwback to here which you know a modernized version so kudos but also like
[00:58:21] why I haven't been as interested in it.
[00:58:25] Well, that's the thing.  People came out of that kind of negative.  And I was like, damn it.
[00:58:29] Damn it, damn it, damn it.  No, sorry.  Like, seriously, I want...
[00:58:33] I need people to be excited about this stuff.  And if you want my selfish reason behind it,  because I'm not completely perfect or innocent on this,  is because every time a new technology comes out,
[00:58:45] It's an opportunity to show how solid's better.
[00:58:48] or Astro's better or someone else is better. Like no one cares about it until React does it. So like, it's, you know, it gives us a new ground, so to speak. I know this is not for me because I'm one of those people who's like, I tend to support technical innovation. It's not even about the specific...
[00:59:07] technology even better. It's just every time they expand the purview and they do the work and they get people to do it. It's an opportunity to show how there's better solutions out there.
[00:59:17] *laughs*
[00:59:20] Because if...
[00:59:21] It's inevitable as things change for boundaries to shift and different types of optimizations to be applied.  And this progression causes things to change and things to churn.  You can't stay on top forever.
[00:59:32] So like,
[00:59:33] Ooh.
[00:59:36] I want React and Next and everyone to succeed on a certain ground  because I want to push things forward for the web.  And also because...
[00:59:46] by pushing things forward on the web, we get more cooler new things.  Like, and we keep the push, the progression forward. So it's like,
[00:59:53] um
[00:59:56] Yeah, I know that seems weird to people, because everyone sees this as like a
[01:00:00] zero sum game
[01:00:01] But like...
[01:00:03] When this kind of push happens, like hooks, think about hooks for a second.  Hooks changed the way people built apps.
[01:00:10] I was building apps like that like a decade before almost.  But like hooks happen now.  Everybody wants to build apps that way.  And then they find like, oh, reactivity is a good pattern for this.  We should do that.  Like that's...
[01:00:22] That's the power here, right?
[01:00:25] It's actually disappointing when the big releases come out and they don't actually just like...
[01:00:31] hit a home run
[01:00:33] Because like it...
[01:00:35] It just makes it that much harder.
[01:00:36] Like, I'd rather like
[01:00:38] these things catch on a little bit more and push more innovation, you know, but
[01:00:43] That's because of where I'm sitting. I mean, let's be realistic, you know, at your day job, whatever you're using, be practical. But like,
[01:00:48] here in the stream.
[01:00:50] I want to see cool stuff.  I want to see where this stuff is heading.
[01:00:56] Um,
[01:00:57] And
[01:00:59] I want to see...
[01:01:03] I want to see projects take risks.
[01:01:05] like frameworks and stuff, and I want to see them succeed at that. So yeah, okay.
[01:01:12] Just change your TV. Oh, man.
[01:01:17] It's bad when you become a meme.
[01:01:20] Oh well, Brian.
[01:01:29] I'm sorry.
[01:01:32] Can confirm no one cared about Margaret recently. Yeah, it's a sad reality. Like, you go on Twitter and like Necro, like do whatever that like archaeologist thing, and you follow the threads. And even in time of 2020, you'll find like a Dylan Piercy or Michael Rawlings, like,
[01:01:48] responding to people, being like, "Hey, but you can do this."
[01:01:52] And everyone's just like, no, you're stupid.  Or like, no, who-- like, what?  And then when you read them now, like in a 2020 or 2022 context, you're just like,
[01:02:01] Man, these guys are so right. Like, so right. Like, what? Why was no one listening to them?
[01:02:08] So yeah, it's funny.  Like even like,
[01:02:13] people who champion the stuff now,  literally saying the opposite stuff  to what they championed now five years ago,  and essentially having Michael and Dylan be like,  hey, you know, there's an argument to the other side.  Like...
[01:02:26] Oh, man. Those guys are the best.
[01:02:28] Because they were always so...
[01:02:33] Patient. That's the best way I can put it.
[01:02:40] Yeah, yeah, that's what we're here. We're here to raise awareness, raise education and just understand where things are going. Why? Because you don't have to adopt it today. You don't have to adopt it tomorrow. But if you understand where things are going, you're not going to get caught off guard. And you don't have to necessarily dig too deep if I do a good enough job. And maybe if I do an okay job.
[01:02:57] of explaining this stuff. Someone with a bigger audience will pick up slivers of it and it'll trickle down, and then they'll do a better job, and then people will get it, and then they're not going to get caught off by this whole JavaScript fatigue thing. JavaScript fatigue is like my biggest enemy, so to speak, of where I'm sitting, because I understand churn is hard.
[01:03:15] people have too much to keep in their heads. But the problem is, if you just start getting to a point where you just blanket
[01:03:21] La la la covering my ears like
[01:03:24] which is okay to do pragmatically from like a business standpoint.  But if people get that way, the problem is like, every time something comes out,  they're just like, Whoa, what is this new thing?  Like they miss everything gets there.  Everything like, maybe that's like the highest people look for in tech.  Like it's back to that 10 X argument where it's like, Ooh, things are 10 X better.  You know, no, things are, it's not a 10 X better thing.  This is not like nothing's ever 10 X better.  That's just a like very, very, very rarely.  And unless someone's like keeping things perfect, purposely behind the cover,
[01:03:54] for, you know, and honestly, unless they have the resources, they can't keep it up and most of the industry will be caught up by them releasing anyway. So like 10x better is a myth.
[01:04:03] But like...
[01:04:05] Yeah.
[01:04:07] If you keep one ear open, just aware, then you don't get caught off guard, then you don't get tired by it. You just kind of go, "Oh, okay, yeah, I knew this was coming. That's kind of logical. That's the way trends are happening."
[01:04:17] Something like this will happen in the future, maybe. Something like this. And you just kind of go, okay, then I know that I'm going to just continue on in my way. You just don't get tired about it because you don't have to worry about it.
[01:04:27] It's the constant, like, this is the thing you have to use now.  You know, that's what makes it tiring.  And I want to avoid that.
[01:04:35] mostly, if we can just learn about these things, like,
[01:04:39] at the right time instead of like
[01:04:42] getting so entrapped in what
[01:04:44] like
[01:04:45] Yeah, you know, it's a balance.
[01:04:50] Thank you.
[01:04:55] Thank you.
[01:05:02] Does VDOM make a rendering slower? No. Let's just answer that straight up. I answered this previous stream. Virtual DOM in itself, rendering wise, is not slower necessarily. You can write it in such an optimized way that it's not. My consumer virtual DOM comes in patterns around end user code. The fact that you're
[01:05:18] the end user code lives inside the pure render function,  the computational cost,  and it's all kind of entwined and tangled together.  That's where my concern is.
[01:05:29] Essentially...
[01:05:30] React re-renders components.  This is a really easy way to understand this.  So, you know, and you do something like change  some computation in the dependency array,  causes the memo to rerun, the component reruns,  memo reruns.  Basically, the end user computations and calculations  are all part of that equation.
[01:05:46] that rerun
[01:05:48] And it's all entangled together.
[01:05:50] That's why React cares about fiber and concurrent rendering and all that stuff. Because the only real way to split this apart with a virtual DOM model is to kind of go, okay, well, let's do something smart with scheduling.
[01:06:00] As long as we can keep the final rendering and effects consistent,  then we can kind of, like, drop frames.  It's kind of like a video game, like, animation kind of thing  where you're just, like...
[01:06:12] Try and process as much as you can, and if you can't, you just get to a point of consistency and put it on the screen.  As long as you don't get any tearing, right?  You don't want any tearing.  You want to keep the V-Sync on, you know?  Like, that...
[01:06:23] is...
[01:06:24] what the virtual DOM handles it. So in itself, it isn't slow, but you need to mitigate
[01:06:29] end user code kind of clogging your arteries, so to speak.  That's essentially where we end up, right?
[01:06:38] I think stuff like fine-grained rendering or virtual is interesting because
[01:06:43] For the cost of some of the subscription management,
[01:06:47] bigger portions of your app
[01:06:49] update independently.  Like, you actually end up, like...
[01:06:54] decoupling and making those pieces of change smaller, which means that there's less like just inherent overhead of like the whole thing being part and tied into the same system. People worry about consistency, but you can make consistency guarantees. That's, that's the whole point of the reactivity systems that I promote is about glitch free consistency guarantees. So there's another way.
[01:07:13] to accomplish those guarantees with a different type of granular model instead of having an internalized one,
[01:07:19] which is like React Schedule Queue,  you can basically look at it based on the dependency graph.
[01:07:25] That's essentially the difference.  So in my opinion...
[01:07:29] There's probably maybe a top-level scaling consideration we have to consider here, but my opinion the thing is like the virtual DOM itself isn't slow at rendering.
[01:07:36] But I think fine-grained approaches let end-user code scale better.
[01:07:42] This is a stream into itself. We've talked about this in the past.
[01:07:46] Oh, you mean server components? Yeah, I'm just using HTML and a DOM diff library written by the guest from Astro. As I said, we borrow from each other, it's great.
[01:07:55] um view nuxt i don't know i'm gonna find out next week i'm on a panel with with uh with daniel rowe  talking about less javascript i they are firmly in the spa ssr zone like the rest of us i know  daniel's been playing with some stuff around partial hydration i i i talk to him like every  couple months now because of conferences and he was on my stream and stuff and he's always like  yeah i got this idea i i've been playing with i got like a little demo and
[01:08:20] but I haven't figured out how to generalize it yet.
[01:08:22] I'm going to play with it one of these days, I swear.  So, like, maybe.  But publicly facing-wise, no.
[01:08:28] They're not there right now, but I know they're interested.
[01:08:36] Thank you.
[01:08:37] Thank you.
[01:08:37] Yeah, yeah, I mean that's the interesting thing, right? Different techniques coming, looping around, right? The thing is you don't actually need the diff for most things. Most of the time the diff like immediately...
[01:08:46] bails out because it's like you're doing your inner HTMLing the new navigation. But there's  like that refresh case, which is like the 10% or 20% case where you need the diff. But 90% of the time, you don't need the diff. That's why I didn't want to focus on bringing a virtual DOM into the equation to solve these problems.
[01:09:07] Yeah, the third colonists, yeah, yeah.
[01:09:10] Yeah, yeah, probably. But as I said, I'm framing it for my purposes right now. I don't...
[01:09:15] The problem is if I do that,
[01:09:18] Yeah, I mean...
[01:09:20] Quik's not gonna stay in that one place. You know, this is just
[01:09:24] *sniff*
[01:09:25] Yeah, it's fine.  If you understand enough that I suggest that,  I think the audience watching this will understand this diagram enough  to understand what I'm talking about.
[01:09:36] Thank you.
[01:09:39] Thank you.
[01:09:39] Hype-driven development. Yeah, so I'm like 10 minutes behind. I should check Twitch and see if anyone's actually
[01:09:46] in their
[01:09:48] Oh wow, I got some kind of hype train emote. I don't know anything about Twitch so this is always a little bit fun for me.
[01:09:55] Yeah.
[01:09:56] This is the challenge I have now, right? Theo was like, I just ignore people in chat. And he's like, if you want to go on chat and talk to someone about this stuff, go bug Ryan. Because he's right. I have this terrible tendency to get off real. I want people to learn and be excited about this stuff. So I don't care how long it takes. I don't care how long we're here.
[01:10:14] I want I want you to feel like you're part of it because like I
[01:10:18] Um...
[01:10:19] It's like just really cool stuff. I...
[01:10:25] *laughs*
[01:10:27] Yeah, I mean, that's this whole sub thing.
[01:10:34] Oh, man. I mean, the thing is, it feels like there should be money in open source, but there kind of isn't. So it's such a weird...
[01:10:43] place to be
[01:10:46] Is Node the only...  No, no, that's the whole thing.  Most...  Almost all the meta frameworks work on, like, Cloudflare and...
[01:10:54] Um...
[01:10:55] uh,
[01:10:57] Next, Vercel, Dino,
[01:11:01] AWS, like they work on like all of them.
[01:11:04] Like that's pretty standard here. And I think that's a good question because I think there's like...
[01:11:09] an interesting...
[01:11:11] challenge there because if we're kind of agnostic like a lot of people when you when you build this  this rant belongs later like in this week in javascript a lot of people when you build a  framework you kind of like
[01:11:20] Um...
[01:11:23] Yeah, this belongs later. I'm sorry. I'll get to this later. But the answer to your question is,
[01:11:27] is that they're not only node-only.
[01:11:30] Only very few of them have that limitation.
[01:11:37] Thank you.
[01:11:40] Thank you.
[01:11:44] Thank you.
[01:11:45] Alright.
[01:11:47] I'm just catching up. Sorry, you all. This is just...
[01:11:50] 700 times better.
[01:11:53] Yep.
[01:11:54] Sometimes a new technology comes in that is like,  just there's nothing there.
[01:12:00] And like
[01:12:02] Like literally nothing there.  And like.
[01:12:05] It's hard to even put a 10x on it because it's just way better because there is nothing there.  So unless you've actually invented a new space, you know,
[01:12:14] .
[01:12:14] Like, yeah, Party Town...  There we go.  There we go.  Party Town gets...
[01:12:18] Gets credit. I'll give Party Town this honor.
[01:12:27] Thank you.
[01:12:29] all right all right all right we should actually do something here um
[01:12:35] Yeah.
[01:12:36] Yeah, yeah, we should do something here.
[01:12:38] Thank you.
[01:12:39] Thank you.
[01:12:46] Uh, SSR support in Bonn, yeah.
[01:12:50] Thank you.
[01:12:55] Concurrent ranting. Hmm. Yeah, that would be interesting.
[01:13:04] Well, I mean...
[01:13:08] You mean like a VA to isolate based thing? Because like...
[01:13:11] Cloudflare workers isn't Node.com.
[01:13:15] Like it doesn't have compatibility.
[01:13:19] Dino doesn't.
[01:13:21] Bond actually did so because it was intentionally to do so, but it didn't need to.
[01:13:27] Like they aren't, none of those are Node.
[01:13:29] AWS does run Node.
[01:13:32] So the functions on Vercel and...
[01:13:35] Yeah, I guess there's really like
[01:13:37] three or four platforms when you think about it. The functions on Vercel and Netlify run on AWS,  so they are node, but then the edge workers run on Cloudflare and Dino.
[01:13:48] So yeah, there's like three or four run times, essentially.  Mainly three.
[01:13:58] Yeah, I think it's starting to catch on, mostly because Dino deploys interesting. I think they still have challenges in terms of being like, but having the NPM install thing is really interesting.
[01:14:11] Oh, man.  I mean, you know how awesome that is.  I love Jared's work, and I love all the work that's being done on Bun.  You know, like, it just...
[01:14:18] Yeah.
[01:14:20] Partial serialization.  Well, I mean...
[01:14:22] These do do partial serialization from a partial hydration sense,  unless you mean something differently.  Actually,  we're going to find out about that with next today.  That's what I want to find out.  I want to know what they're doing.  Like,
[01:14:33] like we know like the Hacker News demo, we know that
[01:14:40] Like, it's been so long. I forget even where I deployed it. Was it Hacker News?
[01:14:45] Solid.
[01:14:47] Hacker News.
[01:14:50] H H N
[01:14:51] Islands Netlify like we don't have this because of the way that
[01:14:55] This is using the new islands.  See, this is client-side routed.
[01:14:58] Like it's not no thing. This is doing the thing. It's like five kilobytes. This app
[01:15:02] even though we've got like this interactivity,  we don't serialize all these characters
[01:15:06] comments because we like we don't need to hydrate any of these the way this works and I want to see if
[01:15:11] If next is the same we tried this with hydrogen and
[01:15:14] And yeah, you know, let's just, I'm just wasting time here.  Have I been going an hour and I haven't even done anything yet?
[01:15:20] I'm sorry. I can't let the chat distract me that much.
[01:15:28] Yeah, so you're not late at all, no.  This is why I started the stream like half an hour earlier.  I thought I could like buffer in some of this stuff so, you know, I could like
[01:15:36] get rid of the Twitch pre-roll and like me just rambling at the beginning.  But like,
[01:15:42] Um, yeah, I mean, we should, we should try and build something, right? Um,
[01:15:49] What am I doing here? No, that's not right, that's OBS.
[01:15:52] Um...
[01:15:55] What am I doing here? Okay. No, that's not right. That's my new experimental reactivity that no one's supposed to know about. Okay.
[01:16:03] just hide that away for a moment
[01:16:06] You guys didn't see that.
[01:16:08] Thank you.
[01:16:13] Okay, so yeah, let's see here.
[01:16:16] Okay, I guess...
[01:16:19] - Yeah.
[01:16:22] Let's just like, okay, so...
[01:16:27] Um...
[01:16:29] Thank you.
[01:16:31] Where does this start? This starts...
[01:16:36] Okay, let's start by me going in the development folder. What do I want to do? Does Create Next App still work in this world?
[01:16:46] Like, I just don't know anything.  Do I just do create next app dash FTS?  Yes.
[01:16:51] It's funny. I was actually trying to find this command again  because I literally am not a Next user.  And I remembered...
[01:16:58] Theo was like,
[01:17:00] Oh, yeah, I've got a great website for that.
[01:17:02] info.tips or something
[01:17:06] Okay.
[01:17:08] And so I went to info.tips.
[01:17:11] And I was like, okay, good.  I'll get the link to start up my Next.js app, right?  So I'm like, okay, info...
[01:17:18] dot tips, I think.
[01:17:20] No, that's not it. In...
[01:17:22] Init.tips. Yeah, init.tips. And I was like, oh, sweet. Start a new project. Create T3 app. And I was like, oh, this isn't right.
[01:17:30] *sniff*
[01:17:31] .
[01:17:33] Okay.
[01:17:35] Okay, yeah, thanks. Yeah, so...  I was like, something has changed here.  And thanks. I'm glad I asked, because people are telling me I need...
[01:17:44] I need to put some other stuff on here.
[01:17:49] Um...
[01:17:51] I should look at Create3T, like it would be in my best interest to look at Create3T.
[01:17:56] T3 app simply from the fact that I think their CLI is awesome. And I think we share the same philosophies.
[01:18:03] So I experimental
[01:18:08] App, yeah.
[01:18:11] Is this the right stuff?
[01:18:14] create next app at latest dash dash TS dash experimental app.  Is this,
[01:18:20] Is this right?
[01:18:22] If Create T3 app does this as well, I'm perfectly fine with it. This is not the right time.
[01:18:34] And do I have to make the directory first?  Or this will prompt me for a directory, right?
[01:18:39] Okay.
[01:18:41] Yeah, I want to install this, yes.
[01:18:45] Okay.
[01:18:46] Next.
[01:18:47] RSC Hacker News.
[01:18:52] Do I like ESLint? No, I hate ESLint.
[01:18:56] Okay.
[01:18:58] Actually, no, that's not true.  I probably...
[01:18:59] I probably added Ian, so I don't really care what he is, Lynn.
[01:19:02] I just, I hate tooling in general.
[01:19:05] It just annoys me. I don't know. One day I'll be converted.
[01:19:09] Okay.
[01:19:13] Thank you.
[01:19:14] Like, seriously, I'm one of those old-- you know how there's the guys who like Vim and stuff and they're crazy? I'm like the old guy who likes Notepad++.
[01:19:25] Oh, next 13 is TS by default, though.
[01:19:26] That makes sense.
[01:19:28] Yeah, more people should do that.
[01:19:31] And that is me making fun of ourselves. We haven't changed that default in salt start yet.  Do I trust the authors? Yeah, I'll trust the authors. Okay.
[01:19:39] Thank you.
[01:19:40] Right.
[01:19:44] Yeah, well, this is why I have to look at it, because this stuff doesn't come intuitively to me. I'm just ready to open my Sublime...
[01:19:51] text editor or whatever, like VS Code's fine, but like, you know, I'm not,
[01:19:56] I'm not...
[01:19:56] I'm not there, you know,
[01:19:59] I need to look at others to understand what other people like, because I can't use my own opinion here.
[01:20:05] Thank you.
[01:20:08] um  um
[01:20:14] Well, the reason I want to do is emulate it because someone asked me to create t3 for solid start and
[01:20:19] And the interesting thing that I found with people who tried it, and I guess this is major kudos to JD who put it together, was like, people were like, yeah, I used it.  And I didn't really even notice that much that React wasn't there because it used like Prisma and TRPC and like all the stuff I was used to.  And then the fact I was just like using solid JSX instead of React JSX was almost nothing.  So like for them, like the people who picked it up and tried it, they're like, this is basically just like,
[01:20:46] swap over it. Most of the experience for them wasn't in the React or Solid code. It was in  the libraries that they're familiar with. So it just kind of felt like
[01:20:56] they were just building an app and then it just happened to be like,
[01:20:59] I don't know what the number is roughly. I want to say like
[01:21:03] eight times smaller and you know,
[01:21:06] some amount faster, you know, it was just like, you know, so I it's kind of cool, you know, I
[01:21:13] Yeah, exactly. CrateJD app. Yeah, let's give a little plug.
[01:21:21] Yeah, and I know this rule because this is how islands work.
[01:21:26] That's what I'm getting at. This is why I want to sing on this. It's kind of funny because I feel like
[01:21:32] "there hasn't been enough acknowledgement
[01:21:34] of, like, it's tricky.  I don't know how to put this, but, like, the React team...
[01:21:38] has their own roots for how they innovate and they discover their stuff.  Like the way they came up with hooks and all this stuff.  Like it's very much on their track.  But at the same time, sometimes they don't actually like look at the fact that like the whole ecosystem is working on the same problems as them at the exact same time.  Maybe like maybe not quite as good or slightly different and all this.  And then it's kind of like not drawing those correlations...
[01:22:01] Could be a blind spot there.
[01:22:03] But again, React's the biggest game in town, so who cares?
[01:22:09] Yeah, I am getting distracted again. Okay, so yeah, let's look at this.
[01:22:13] Pages API.
[01:22:14] Okay.
[01:22:15] Interesting. Okay, so this example shows that you can still have an API route here.
[01:22:20] under Pages,
[01:22:21] But then the app is where the real stuff's happening.  And now I'm immediately introduced into...
[01:22:28] whatever this file system routing thing is.  So we got some global CSS, we have some...
[01:22:34] CSS modules.
[01:22:35] I don't really care about that, that's fine.
[01:22:39] and we have a page.
[01:22:43] The interesting part is, I don't know enough about next, and this is maybe where I'm going
[01:22:48] Oh no, here we go.
[01:22:49] layout
[01:22:51] Aha! Top level layout component is
[01:22:54] is this: "Head will contain the commands, return to the nearest parent."
[01:22:57] Okay.
[01:23:05] Thank you.
[01:23:06] like a weird background noise going on. I don't know if you guys can hear it through the stream. It's like construction happening on my street. Okay.
[01:23:12] I'm just seeing this stuff all for the...
[01:23:17] the first time.
[01:23:19] Okay
[01:23:20] Head.
[01:23:23] and
[01:23:24] head...
[01:23:25] is lowercase capital case
[01:23:28] What?
[01:23:30] Thank you.
[01:23:31] Oh!
[01:23:32] Okay.
[01:23:33] They're going really...
[01:23:35] hard on this. Okay, that's fine.
[01:23:39] I understand.
[01:23:40] Yeah.
[01:23:45] Okay.
[01:23:46] Yeah.
[01:23:48] Yeah, sorry, should I zoom in one more? I did zoom in, but I can zoom in one more. Let's do that. That's better, right?  Sorry, I'm just going to adjust myself again.
[01:23:57] All right, um...
[01:24:00] You understand what's going on here.  Like, literally this...
[01:24:03] without importing it.
[01:24:05] is going to this.
[01:24:07] So, I mean...
[01:24:09] Let's do the honors.  It looks like I'm in an NPM world here.  So let's just go.  Not PMP.  I'm like typing it by habit now.
[01:24:18] What's the start?  Is it dev?  Yeah.  Or is it?
[01:24:22] Yeah, Dev. Okay.
[01:24:23] Right, and because I'm...
[01:24:25] You know what, it doesn't even matter.  Because as long as I MPM install, or it's already installed.  Did it already install?
[01:24:32] Beautiful. I can use PMPM and just say screw it. Okay.
[01:24:39] Sure, I'll allow it.
[01:24:42] There's a whole bunch of other stuff here, okay.
[01:24:45] So we're on port 3000.
[01:24:48] Let's go here, localhost.
[01:24:51] 3,000. All right.
[01:24:54] Ooh, okay.
[01:24:56] Welcome to Next.js 13.
[01:25:01] Okay, we're starting.
[01:25:04] Okay. Um...
[01:25:07] Should we just like...
[01:25:09] naively just trying to start porting the stuff as fast as we can.
[01:25:12] Like, I'm-- I'm-- I'm--
[01:25:14] It looks like I don't have much to explore around here.
[01:25:17] It looks like page is important. It looks like next image is important. I don't really care about it for our point.
[01:25:22] Um...
[01:25:24] Yeah.
[01:25:25] You know what? Um...
[01:25:28] What's interesting is
[01:25:30] I don't...
[01:25:31] I guess we'll find out, you know?
[01:25:33] So,
[01:25:35] These are...
[01:25:35] anchor tags, but these are external.
[01:25:38] they didn't show me what an internal link tag works out and I don't know if I still use link tags or not but I guess we'll find out so  I guess the first thing is
[01:25:47] I...
[01:25:48] I'm gonna just port an existing app like I always do,  'cause it's easier.  Let me see what other
[01:25:55] things I have open here I think
[01:25:57] I have
[01:25:59] I just need a new window here, new window.
[01:26:02] I'm trying to think of which one I want to use as a base. I do have the next version that we built on stream together.
[01:26:07] But I feel like if the link tags...
[01:26:11] Oh...
[01:26:12] I don't want to convert all the link tags back.
[01:26:15] if that makes any sense.
[01:26:16] did...
[01:26:18] Can I still keep the little anchors inside the link tags?
[01:26:22] be bad because like
[01:26:24] Thank you.
[01:26:24] If I go to...
[01:26:26] Remix.
[01:26:28] then I have to adjust all the imports. But if I go to next, I think I'm in a better place.
[01:26:33] But if I go to next, I went through all the pain of doing all the link tags, and I don't want to do that ever again.
[01:26:39] So can I keep the anchors inside?
[01:26:46] You have to remove the anchor.
[01:26:49] Okay.
[01:26:50] .
[01:26:54] Yeah, I don't want to figure out what a codemod is. Oh man. Okay.
[01:26:59] Remix it is. I'd rather change imports than change code.
[01:27:03] Um...
[01:27:07] Yeah, screw this. We'll use...
[01:27:09] We'll use Remix as our example.
[01:27:14] go to itsappdirectory.com.
[01:27:16] And just let's start.
[01:27:20] To do to do
[01:27:23] I actually don't really care about the head very much.
[01:27:25] So what I do care
[01:27:28] is
[01:27:33] I don't care about CSS so I'm gonna get rid of this
[01:27:38] I guess the first thing I want to know
[01:27:41] And maybe...
[01:27:43] You all know this.
[01:27:46] which is interesting for me.
[01:27:47] is
[01:27:51] And I'm just going to...
[01:27:53] I'm gonna empty out this page just 'cause it's distracting me. I'm just gonna... I don't know.
[01:27:58] replace this whole thing with like a "hello" or whatever.
[01:28:03] is
[01:28:05] It's funny, this is the one problem with the Hacker News demo.
[01:28:08] always, always, always the problem with the Hacker News demo is
[01:28:12] How do I do a top-level catch-all route?  It's, like, the first thing that, like, breaks everyone's demos.  Because what I want to do is essentially just do, like, a...
[01:28:27] Thank you.
[01:28:28] Okay, there we go.
[01:28:31] Thank you.
[01:28:34] Thank you.
[01:28:35] What's going on here? Why am I...
[01:28:38] why am i okay whatever it's probably part of the global styles i'll worry about that later
[01:28:46] I'm not too worried, actually, about...
[01:28:52] we're going to have to change the data loading patterns  to fit the new data loading patterns anyway.  So, like, I'm not too worried about the code I have to write.  But the first thing...
[01:29:00] I need to do...
[01:29:03] is
[01:29:07] Probably--
[01:29:08] With the app folder, if I want to add components, I still just make like a components folder out here.  No, not in here.  Out here.
[01:29:14] out here, right?  So if I want to...  We're still going to
[01:29:18] have like a components folder like this.
[01:29:21] Right?
[01:29:22] and I don't know if they're like
[01:29:27] Can I still do this with the pages directory with all their fancy like pages naming conventions and stuff?
[01:29:35] That was my question.  What I am going to do is I'm going to
[01:29:39] copy
[01:29:40] some of the, I'm mostly going to just copy
[01:29:45] Um...
[01:29:47] all of this stuff from Remix.
[01:29:51] Ooh, I see.
[01:29:53] I see. We're gonna actually have to do some work.
[01:29:56] on the
[01:30:00] Huh.
[01:30:01] I wonder if the solid version is actually the most similar version.
[01:30:05] Oh, that's kind of interesting.
[01:30:06] to think that. That the solid version might be more similar than the remix version. Oh, but then I have to rename all the class names.
[01:30:13] And do all the maps. No, never mind.  We're going to grab all of these,  move them across, and then we're going to
[01:30:20] then we're going to get to where we need to get to.
[01:30:24] Because these are not client components.
[01:30:28] Um...
[01:30:31] Um...
[01:30:33] Was it Next Link or something?
[01:30:42] Is it like this?
[01:30:55] Thank you.
[01:30:57] Do they?
[01:30:59] Did...
[01:31:00] Oh!
[01:31:01] Did they do this?
[01:31:02] Is this correct?
[01:31:04] Did they not use 2 and use href?
[01:31:08] Thank you.
[01:31:10] Someone tell me that this is true.
[01:31:12] Thank you.
[01:31:14] Like this is, is this the right component? I didn't,
[01:31:17] Oh, thank God. Okay, sorry.
[01:31:22] I know it's a silly thing to get excited about,
[01:31:24] But...
[01:31:25] Do you know where the stupid tooth thing came from?  It came from Ember.
[01:31:29] Um...
[01:31:31] All right.
[01:31:33] Yeah, sorry. We've always used  href in solid because like...
[01:31:37] makes sense
[01:31:39] But...
[01:31:41] Awesome.
[01:31:43] Okay.
[01:31:44] and
[01:31:46] We're going to go to
[01:31:48] Next.
[01:31:52] Um, whatever.  What's their website?
[01:32:02] Next.js.org. Okay, sure.
[01:32:05] Sure.
[01:32:08] Um...
[01:32:11] and what else we're going to do here we're probably built with next and for the global styles I'm going to keep on theme I'm actually going to look at my
[01:32:21] I'm gonna...
[01:32:21] like let's just pull multiple references.  Let's open up our previous next app anyways,  'cause I think that's the global styles  I'm gonna wanna use.
[01:32:30] because I have all my apps
[01:32:32] color-coded. So
[01:32:37] let's
[01:32:39] Let's go in here and grab our styles.
[01:32:46] That's funny, it's like I forgot to...
[01:32:48] Yeah, I just forgot to remove that. I just didn't notice it. Whatever, it doesn't matter.
[01:32:54] Let's put that in our...
[01:32:58] in our global
[01:33:01] thing
[01:33:02] -
[01:33:05] and then the whole reason we did all this is that we wanted our layout
[01:33:12] to have the nav
[01:33:18] and we want to import nav from
[01:33:24] Components...
[01:33:26] No.
[01:33:27] No.
[01:33:28] Did I lowercase them? That's so not me. Whatever.
[01:33:33] Yeah, fancy partial hydration.  It's partial hydration plus some...
[01:33:39] Thank you.
[01:33:40] Alright, so...
[01:33:42] Um...
[01:33:45] All right.
[01:33:47] Interesting how the fonts getting in here, but
[01:33:50] Um...
[01:33:52] Yeah, I should put an app inside the body tag. Good call. Good to call.
[01:33:56] That makes sense.
[01:33:58] Um...
[01:34:01] Yeah, that's interesting.
[01:34:03] Um...
[01:34:06] you know
[01:34:08] That is...
[01:34:09] That was a good call.
[01:34:12] *crying*
[01:34:20] Thank you.
[01:34:21] That could completely be...
[01:34:24] the cause of the
[01:34:26] - Yeah.
[01:34:26] The text styling, yeah. There we go.
[01:34:30] Perfect.
[01:34:34] Okay.
[01:34:35] Interesting, though.
[01:34:39] Okay.
[01:34:45] Sorry, so back at chat, did we figure out how we were going to do the top level catch-all route?
[01:34:54] Does anyone actually know the answer to that question?
[01:34:56] Thank you.
[01:34:59] I can create a rub group.
[01:35:05] That sounds about right.
[01:35:07] It's an interesting...
[01:35:11] Do I actually even need the route group?
[01:35:14] I think you're right, though. I think I need to actually start with a folder.
[01:35:20] Which is interesting.
[01:35:23] Mm-hmm.
[01:35:24] The benefit of the route...
[01:35:25] I don't know. This global CSS  is just getting pulled in
[01:35:30] magically it's an
[01:35:31] Unless it's part of layout. Is it part of layout? Yeah, it's part of layout. That makes sense.
[01:35:35] Okay.
[01:35:41] Yeah, this is interesting, right?  Because there's like a detachment here.
[01:35:46] Because like...
[01:35:49] Because...
[01:35:51] We'll get to that in a minute. Let's try and author, before we worry about that, let's just try and author the first Hacker News page.
[01:36:02] Um...
[01:36:04] Thank you.
[01:36:05] And then we'll worry about that.
[01:36:09] The layout is exactly how I want it.
[01:36:11] That makes sense. But it's the page that I actually want to load the data. Um,
[01:36:17] And if we go into one of these, we probably--
[01:36:21] I have an API TS and...
[01:36:27] Did I do it the same way in Remix? I just want to double check.
[01:36:30] Yeah.
[01:36:31] Yeah, so we just have this API TS.
[01:36:34] I'm trying to remember if they made me do anything fancy with fetch. No? Okay. These ones are straightforward, so let's just copy that across.
[01:36:41] um...
[01:36:45] - Thank you.
[01:36:45] All right.
[01:36:47] And...
[01:36:51] I'm hoping that fetch just works on the server in this environment.  So...
[01:36:55] That'll be fine. And then...
[01:36:58] uh,
[01:37:00] I'm gonna use Remixes
[01:37:03] index route is more of a less...
[01:37:07] a template here.
[01:37:09] though we're gonna have to
[01:37:11] We're going to have to redo a lot of this.
[01:37:13] Okay.
[01:37:15] I'm just...
[01:37:15] banking on remix being an easier port, um,
[01:37:18] because I don't want to deal with anchor tags
[01:37:22] All right.
[01:37:26] Let's just like replace the whole thing actually.
[01:37:31] All right.
[01:37:32] Now we don't have this loader function
[01:37:34] Um...
[01:37:35] But my understanding is that I can just go like make this an async function.
[01:37:40] Index?
[01:37:41] And...
[01:37:44] We'll worry about the rest of this later, but I'm like literally just going to be like...
[01:37:49] let's just
[01:37:50] pull all this stuff in here.
[01:37:52] I'm going to need to look and see how to get the...
[01:37:54] disinformation.
[01:37:57] But I'm just going to...
[01:38:01] Why is map stories and story data not being used?
[01:38:05] Hmm.
[01:38:07] Oh, it's because of this index row. We'll get to that.
[01:38:09] I'm not going to worry about that.
[01:38:11] Um...
[01:38:12] Yeah, so that's my first question, right?
[01:38:16] How do we...
[01:38:20] Okay, no loader function.
[01:38:22] We need Link from...
[01:38:25] Next link.
[01:38:28] Thanks.
[01:38:30] Next link.
[01:38:33] and then we need
[01:38:35] uh
[01:38:36] We need...
[01:38:41] We need...
[01:38:42] My types. I haven't copied the types file across either.
[01:38:46] Um, thanks.
[01:38:50] Pist.
[01:38:56] Must have not copied it.
[01:39:03] All right.
[01:39:15] love when that happens
[01:39:27] Alright, whatever. I'm not gonna worry about that for the moment.
[01:39:37] Alright, so let's keep on moving on. I'm just trying to keep up with chat because you guys probably know this better than me.
[01:39:56] Oh, thanks. Sorry. I was so busy focusing on this stuff. Thank you, Benton, to subscribe to the tier one. Always awesome. I have to actually go look at Twitch occasionally to actually see it. So thank you for flagging me.
[01:40:09] Because I don't always see this stuff on Twitch.
[01:40:14] Okay, so I guess the first question here is how do we access the request
[01:40:21] the request object. Or like basically I want to know how to get the query parameters.
[01:40:27] But you know what?
[01:40:30] We can...
[01:40:32] We can fake this for the moment.
[01:40:40] Yeah, okay. Next headers.
[01:40:43] headers API. That gives me something to look at.
[01:40:46] Okay.
[01:40:47] header
[01:40:48] Next.
[01:40:50] headers
[01:40:55] So
[01:40:56] Actually, let's just go here.
[01:40:58] Okay.
[01:41:00] Next.
[01:41:04] What am I looking for?
[01:41:24] The new docs, okay.
[01:41:27] Where are the new docs?
[01:41:47] Mm-hmm. Mm-hmm. Mm-hmm. Mm-hmm.
[01:41:50] *Doo doo doo doo doo*
[01:41:58] Mm-hmm.
[01:42:05] Mm-hmm.
[01:42:18] Okay.
[01:42:20] Okay.
[01:42:33] Hmm. Hmm.
[01:42:36] Thank you.
[01:42:36] Alright.
[01:42:40] What's this?
[01:42:45] Okay.
[01:42:55] I mean, I guess I could also just try doing stuff like this.
[01:42:59] Like seeing, do I have frames here?
[01:43:04] by things I don't have for it.
[01:43:05] You...
[01:43:08] That was like a terrible... that's like anime completions, it's like not...
[01:43:11] The other thing is
[01:43:14] Oh, man.
[01:43:16] I feel like actually... I...
[01:43:20] Thank you.
[01:43:21] I have nothing to read off this anyways until I actually implement...
[01:43:27] Like the catch-all route?
[01:43:31] Thank you.
[01:43:34] Do you know what I mean? I mean, we can just do this.
[01:43:42] So like we could...
[01:43:50] And like, do I get search params this way as well?
[01:43:58] Oh man.
[01:44:04] - Thank you.
[01:44:08] Alright.
[01:44:09] It's funny, like, it's still...
[01:44:11] It still aired from way back...
[01:44:14] Actually while I'm here, why don't I take care of all these Ahrefs?
[01:44:23] whatever
[01:44:26] Um...
[01:44:30] I feel like I just want to console.log props and see how far that takes us.
[01:44:36] But I don't know if that's going to...
[01:44:39] I feel like it probably...
[01:44:44] It's all--oh, I know what else is the problem.
[01:44:47] Know what the problem is?
[01:44:49] This can- we haven't unremixed it.
[01:44:51] all of these yet, so...
[01:44:53] Like...
[01:44:55] We actually have to...
[01:44:57] Look at...
[01:44:57] these as well, like Link
[01:45:02] Um...
[01:45:03] Second.
[01:45:11] I think...
[01:45:20] I think that's what I missed.
[01:45:27] Sweet.
[01:45:28] but
[01:45:29] You really can't find...
[01:45:32] This types file in the root folder is really, really quite interesting.
[01:45:42] All right.
[01:45:43] Hopefully...
[01:45:47] Thank you.
[01:45:50] What is the thing's in there?
[01:45:54] types
[01:45:59] Oh, okay.
[01:46:01] Alright, now...
[01:46:04] Params or params?
[01:46:05] Thank you. Okay. Yeah, it's that simple.
[01:46:08] That's nice.
[01:46:12] Params, search params.
[01:46:19] Which means that it's just
[01:46:22] I'm gathering search params as a simpler object than this.
[01:46:25] There isn't any right now, but I'm going to assume that it's Search for Rams.
[01:46:29] It's gonna be Surround's page.
[01:46:31] And it's...
[01:46:32] This is actually
[01:46:33] paramsal
[01:46:36] Dot.
[01:46:36] story or something.
[01:46:39] Or this.  It's just...
[01:46:41] I'm not gonna worry about this just yet. We have to actually
[01:46:44] Create
[01:46:45] the
[01:46:46] the route first. I'm hoping though
[01:46:49] that with this,
[01:46:50] we're starting to actually...
[01:46:53] Um...
[01:47:00] I mean, I should make this type safe, but I don't actually care enough to do that.
[01:47:03] So...
[01:47:04] Where am I?
[01:47:06] I'm just going to make this an eye story
[01:47:08] array for the moment and then
[01:47:10] Will that make everything else shut up?
[01:47:13] Other than I need to know that
[01:47:14] Proper types for the index route, but if everything worked well
[01:47:19] properly
[01:47:20] Um...
[01:47:22] are
[01:47:23] little Hacker News app should at least be up in
[01:47:26] rolling
[01:47:27] Okay.
[01:47:30] because we don't have slash top yet.
[01:47:35] Okay.
[01:47:38] Bye.
[01:47:39] Alright, sorry, see Jeffries link.
[01:47:42] How far back do I have to go?
[01:47:46] um
[01:47:48] Thank you.
[01:47:49] Thank you.
[01:47:55] Oh, there it is.
[01:47:59] Yes, and thank god it's from Twitch, because YouTube comments and StreamYard I can't actually...
[01:48:06] Yeah, okay, here we go.
[01:48:08] Let me pull this over.
[01:48:12] Thank you. I appreciate all the help here.
[01:48:16] Oh.
[01:48:17] What do you know, there's actually
[01:48:20] These also hook style ones, okay.
[01:48:26] This is like a little bit...
[01:48:28] cleaner
[01:48:31] Yeah.
[01:48:35] Interesting. So it is get.
[01:48:37] Huh.
[01:48:38] Thank you.
[01:48:44] Oh, this is for client components.
[01:48:49] The search parameters used to... okay, my bad.
[01:48:52] So it's this one, huh?
[01:48:54] Mm-hmm.
[01:48:55] Thank you.
[01:48:58] Thank you.
[01:49:00] Alright, they just...
[01:49:02] They literally just put this type in here.  There's no, like...
[01:49:05] nice, like, function version of the type.
[01:49:08] Just like use page component or...
[01:49:11] Don't walk in.
[01:49:13] That's...
[01:49:15] I think someone actually already put this in the...
[01:49:19] Don't use that, okay. I won't.
[01:49:23] I will use-- I mean, it's--
[01:49:24] It's the same thing though, right?
[01:49:27] It's just like a better version. Okay, I'll use the better version.
[01:49:30] Um...
[01:49:33] It's like this.
[01:49:38] I'm not.
[01:49:39] Yeah.
[01:49:40] Yeah, it's...
[01:49:46] Okay, whatever.
[01:49:51] Oh, it's always slug. Okay.
[01:49:54] Got you. So they don't care about the naming.
[01:49:59] Okay, well, for this to actually work, we need to add our route.
[01:50:06] Maybe I can find that here of how to do the catch-all. Yeah, I see a dot dot dot.
[01:50:12] So let's see if this will work.
[01:50:17] folder.
[01:50:19] Dot, dot, dot.
[01:50:23] I mean, I don't have to name it Slug, do I?
[01:50:27] Like, I can name it something else.
[01:50:31] They do slug in their example, I can name it to...
[01:50:35] I can name it to whatever I want, right? I can say this is stories and then
[01:50:40] Let's be stories and then...
[01:50:44] And then I can move page
[01:50:45] in here
[01:50:48] Thank you.
[01:50:51] Why does Vohler want to come in here?
[01:50:54] View language?  What the?
[01:50:56] I'm gonna just
[01:50:57] Okay.
[01:50:58] for now.
[01:51:01] Okay, let's see if...
[01:51:03] This does something.
[01:51:05] I'm going to go.
[01:51:06] We could be doing this completely wrong.
[01:51:10] Okay, that did not work. Let's try and put something here like this though.
[01:51:15] But that works. Interesting.  So I think it's not quite what I want.
[01:51:20] It's close though.
[01:51:21] - Thank you.
[01:51:22] Good.
[01:51:22] I want it to...
[01:51:24] I want it to match slash as well.
[01:51:30] Thank you.
[01:51:32] Maybe if I look at the old Next app, this will give me hints.
[01:51:38] Um, next.
[01:51:42] Oh, they did this like double thing. Is that it?
[01:51:45] Like where they do like this double bracket thing.
[01:51:50] Is that like the secret sauce?
[01:51:58] Yeah, that's it.
[01:52:00] Okay, yeah, I'm not wiring it quite up right yet.
[01:52:03] Okay, but the pagination works.
[01:52:05] Okay.
[01:52:06] Sweet.
[01:52:07] Pagination works. Okay.
[01:52:09] But...
[01:52:10] it we haven't wired up this piece okay but
[01:52:13] Progress. Thanks. Thank you all. That's great.
[01:52:20] All right, so we're getting somewhere.
[01:52:30] It's interesting how server components and non-server components, you have to worry about the use API versus not. I think it's interesting.
[01:52:42] The nice way to get types is to type page...
[01:52:45] Okay, yeah, I mean, yeah, that's what I was actually looking for. I'm just surprised the docs didn't...
[01:52:50] show that
[01:52:58] All right.
[01:52:59] Cool. Okay, so let's wire up the
[01:53:02] Let's get the rest of this...
[01:53:04] working properly
[01:53:06] So pagination works even though this is not
[01:53:10] Happy because I said this but I'm gonna pretend like I
[01:53:15] I mean...
[01:53:18] Can I pretend like this is true?
[01:53:20] It seems to be true.
[01:53:23] Um...
[01:53:24] Params.story. What do params look like? Let's just console log them.
[01:53:33] Good.
[01:53:34] Let's give it a nice big...
[01:53:37] params
[01:53:39] I mean, it's the only thing we're console logging anyway, so it doesn't really matter, but...
[01:53:43] Let's do that.  And then like...
[01:53:46] here there's no params which we know but then when we go here
[01:53:50] I should see something.
[01:53:54] Oh, interesting. It's in a ray.
[01:53:56] Okay, I mean I can...
[01:53:58] I can deal with that.
[01:54:04] Thank you.
[01:54:05] Is it always in an array?
[01:54:14] Um...
[01:54:16] Well...
[01:54:18] Huh.
[01:54:21] So it's more like this.
[01:54:25] Thank you.
[01:54:26] Thank you.
[01:54:29] params dot
[01:54:32] stories
[01:54:34] zero
[01:54:36] or top and then
[01:54:40] And then I need to actually pull in the rest of the code that I have in Remix that I didn't actually bring in here.
[01:54:45] or actually have a next version which is
[01:54:48] I need to...
[01:54:51] actually change the fetch request to look like this.
[01:54:57] Which...
[01:54:58] Um...
[01:54:59] has
[01:55:01] the type of story in there too. And last time I had a TypeScript issue here, and we never figured it out, and it only happened in Next and not any other framework.
[01:55:10] So I was just like, I gave up and I was like, screw it.
[01:55:13] And I'm not gonna solve it right now either.
[01:55:18] Sweet.
[01:55:21] Sweet.
[01:55:22] Sweet, okay.
[01:55:24] Progress, okay, so we got the main page running.
[01:55:29] But the main page is not very interesting. I think what's cool here is
[01:55:34] I wanna see...
[01:55:37] I mean, I guess I need to do a production build, but right now, like I'm seeing like
[01:55:41] This is next data is still very much...
[01:55:45] in
[01:55:46] still very much going, even though
[01:55:49] Technically, these are all server components, although this is like...
[01:55:54] See the class name this looks like a different torp of a serialized thing. Okay. I'm not gonna I
[01:55:59] I'm not gonna...
[01:56:00] we'll get into this when we build production builds and stuff  and see what things actually look like.  I don't know.  I don't trust dev.  So let's continue on.  We need to...  I don't really care about all the routes,  but I do need...
[01:56:14] We do need to get...
[01:56:17] the story route so that we can do the recursive partial hydration.
[01:56:22] which is key to this whole thing.
[01:56:27] So...
[01:56:29] Um...
[01:56:32] Let's look at...
[01:56:38] the
[01:56:40] So it's like stories...
[01:56:42] ID.
[01:56:44] Thank you.
[01:56:46] So I...
[01:56:49] Do I have to make two folders here? So like what I want to do here is actually like
[01:56:54] I'm going to write it like this, but it's going to automatically do it, I'm pretty sure. Stories...
[01:56:58] ID
[01:57:00] what's this index?
[01:57:04] page.tsx is basically what I'm going to want, right?
[01:57:09] Yeah.
[01:57:10] Thank you.
[01:57:15] Does this actually make a folder called that? Hmm, that's cool.
[01:57:21] usually is not what happens.
[01:57:25] Thank you.
[01:57:26] Let's try that again.  Story...
[01:57:29] stories
[01:57:30] colon ID
[01:57:32] Colon.
[01:57:35] Thank you.
[01:57:36] I'm just messing with VS Code here.  Okay.
[01:57:40] I should just delete this. I should do this the easy way, one at a time.
[01:57:49] I think I've actually just messed up VS Code completely.
[01:57:53] Okay, there we go.
[01:57:55] *laughs*
[01:57:57] Stories?
[01:57:59] New folder.
[01:58:01] ID.
[01:58:04] New file.
[01:58:06] Page.tsx
[01:58:08] Okay, that's, I think that's what we were looking for, right?
[01:58:12] All right.
[01:58:13] Let's move  Remix into it
[01:58:19] Let's move remix over. Alright.
[01:58:26] Alright, so don't need loader function.
[01:58:31] Don't need
[01:58:35] loaded data or Jason.
[01:58:38] Thank you.
[01:58:41] Thank you.
[01:58:41] We just want to
[01:58:43] make this
[01:58:44] async
[01:58:45] We want to pull this
[01:58:48] into our component.
[01:58:55] Sorry, I put the async in the wrong place.
[01:58:58] Async.
[01:59:00] And...
[01:59:02] Don't need this
[01:59:16] Thank you.
[01:59:21] Thank you.
[01:59:22] Everything's one more set of dot dots and then
[01:59:25] It's Link
[01:59:26] from next link
[01:59:33] and then all the two equals become the proper hrefs there's only one
[01:59:39] Thank you.
[01:59:41] Thank you.
[01:59:42] And then...
[01:59:44] Params comes from here.
[01:59:48] And then...
[01:59:52] We'll call this one an...
[01:59:54] iStory.
[01:59:57] And then...
[02:00:01] Thank you.
[02:00:03] I think...
[02:00:04] that
[02:00:06] *laughs*
[02:00:07] I mean, is that all we need? I feel like I'm like forgetting something important. I think I'm actually I know what I'm forgetting important. I have to actually go in and
[02:00:15] update the story component to not be
[02:00:18] Remix, but did I already do that? No, the comment component not to be remixed.
[02:00:22] The comic component needs...
[02:00:24] Okay, yeah, this is where we're going to hit our first bit of fun because guess what?
[02:00:30] We...
[02:00:31] have
[02:00:32] State.
[02:00:33] Thank you.
[02:00:34] And this is what I was waiting for, because we need to rearrange this, and actually the Remix example is no longer a good example for us to follow here.
[02:00:42] nor is the next example because these are assuming this. So actually what I need to do
[02:00:48] is
[02:00:49] um
[02:00:50] Thank you.
[02:00:51] I need...
[02:00:53] What do I need? I need...
[02:00:56] Um...
[02:00:59] I need file...
[02:01:02] Um...
[02:01:04] What am I going to open here? I don't care about remix anymore.  We need...
[02:01:08] We need solid start, don't we?
[02:01:10] Yeah, we need a solid start.
[02:01:11] In fact, I think...
[02:01:13] And we need...
[02:01:15] examples, hacker news,
[02:01:17] components
[02:01:19] Story and toggle.
[02:01:21] This is the magic here.
[02:01:26] So we're actually...
[02:01:29] um
[02:01:36] Yeah.
[02:01:38] Oh, awesome.
[02:01:41] Hey, Coding Garden. Awesome to see you here. We are just in the process of converting
[02:01:49] Um...
[02:01:50] Updating my Hacker News Demo to React Server Components in X13.  We've been using Remix.
[02:01:57] We've been using Alt-Next12 as inspiration.  And now that we got to the server component part,
[02:02:02] we're actually using solid start to figure out how to write the server components because it has the kind of optimal pattern.  So, yeah, no, thank you for the raid.
[02:02:12] This is awesome.
[02:02:14] This is probably more people I've had on Twitch viewing me than...
[02:02:17] almost ever so thank you
[02:02:19] *laughs*
[02:02:21] Very, very, very cool to see you all here.  So yeah, we're in this process of making  our server component hacker news demo.
[02:02:32] I make Hacker News demos in every single framework so I can compare them.
[02:02:36] And this one has...
[02:02:38] I've been waiting for.  So, yeah.
[02:02:42] Yeah, yeah. Let's hear it.
[02:02:44] Yeah.
[02:02:45] Great to see you, though. Thanks for coming by.  And I enjoyed you taking the time to show off solid on your JS...
[02:02:54] survey when
[02:02:55] Uh,
[02:02:56] He wanted to say that he's used it and used it again instead of saying, you know, he'd be interesting learning on the JS survey. So literally in the middle of the survey.
[02:03:05] dropped what he was doing and made a solid JS app, which was really, really cool on the stream the other day.
[02:03:12] Thank you.
[02:03:14] Thank you.
[02:03:14] All right.
[02:03:15] I'm not.
[02:03:15] Alright, so let's...
[02:03:17] Let's do this.
[02:03:19] - The first time we have been in the last year, we have been in the last year.
[02:03:21] Yeah.
[02:03:23] Okay, so we need to...
[02:03:26] While I don't, Solid's got its own syntax, so it makes it a little bit tricky. What we technically want to do is we want to make a story server component and a toggle client component. And the reason we want to do this
[02:03:36] is
[02:03:37] that we
[02:03:39] we don't if we kept the same structure that we have right now like in the next hacker news demo
[02:03:45] the whole comment component and the recursive comments
[02:03:49] would like, we can't, because this has state,  it'd have to be a client component, right?  And because it's a client component,
[02:03:55] all of
[02:03:56] And it has to stay because it needs to toggle the...
[02:04:00] the comments, right? If you've seen a Hacker News demo, you'll know what I'm talking about.
[02:04:05] I had one here, yeah.  You want to be able to collapse the comments.  But you don't want these to be all client rendered.  You don't want to have all that data.  You don't want to waste your time.  You want the server to render all this.  Yet we have this terrible problem that all our comments are recursively...
[02:04:23] collapsible. So it's not as easy as just saying like, oh, make the whole thing client components  or server components, because you're literally interleaving client interaction. So this is like  a beautiful use case of why server components are actually valuable.
[02:04:40] Right?
[02:04:41] so
[02:04:42] Let's look at how we're going to do this here because...
[02:04:47] Um...
[02:04:49] What we want actually
[02:04:50] is to make a new...
[02:04:52] toggle
[02:04:54] component, and that's where we want to get our state in.  And that toggle component is going to...  How do I do this? Do I do use...
[02:04:59] Client like did I get that right?
[02:05:09] Thank you.
[02:05:13] I don't even know what that means.  We'll worry about that in a minute.  We can look at the docs.
[02:05:20] Okay, so...
[02:05:22] Am I using the wrong type of quotes?
[02:05:26] Should it be like these kind of quotes?
[02:05:31] Thank you.
[02:05:32] Okay, yeah, it's just missing stuff, right?
[02:05:35] - Thank you.
[02:05:36] Okay, yeah, they're just telling me I haven't implemented the component.  So in this case, we're going to...  At least this component is going to be very...
[02:05:43] React-like. It's not...
[02:05:45] I'm just copying it from solid.
[02:05:48] But this is the easy part, right?
[02:05:51] We're just going to go...
[02:05:53] React.
[02:05:56] You state
[02:06:00] Use state.
[02:06:04] Class name...
[02:06:07] Class name.
[02:06:12] Open...
[02:06:14] Oh wait, they don't have class list. Okay, well that's fine. We can...
[02:06:18] We can do something with that.
[02:06:19] Um...
[02:06:22] To make it.
[02:06:23] *cough*
[02:06:24] It'll just be a little bit clunkier, but it's not that bad. Okay. Yeah.  So what do we want to do here? It's going to be like,
[02:06:31] *sigh*
[02:06:36] Like...
[02:06:37] Thank you.
[02:06:39] plus...
[02:06:41] Um...
[02:06:42] open
[02:06:46] Open...
[02:06:47] Otherwise this, something like that.
[02:06:52] Alright.
[02:06:53] All right, so
[02:06:56] and we're not using anchor, we're going to use
[02:06:59] Link.
[02:07:02] I think...
[02:07:04] Oh, actually...
[02:07:05] This is actually an anchor for semantic reasons, it's not actually an href.
[02:07:10] Okay, so that's fine.
[02:07:11] Um...
[02:07:13] and
[02:07:15] I don't know why there's props here, 'cause-- oh, props children.
[02:07:19] Let's just do it the React way and destructure it.
[02:07:25] Thank you.
[02:07:26] And he's just complaining that he doesn't know what it is.
[02:07:29] So what, can I just do like
[02:07:30] PSX element
[02:07:33] Or actually, sorry, I'm just...
[02:07:35] children
[02:07:36] I know there's like GSX types for this stuff,  but I'm,
[02:07:40] In this case, I don't... okay.
[02:07:42] Yeah, okay. So
[02:07:45] Okay, so this is our stateful React component.
[02:07:50] Yeah, it was...
[02:07:53] Oh, yeah, thank you.
[02:07:56] *cough*
[02:07:58] I missed a space. Awesome. Okay. Yeah. So, okay. So then the key part of this, and I love this about this, you understand is the client component has its state.
[02:08:10] can toggle some classes,
[02:08:12] around our list, but it has no
[02:08:15] introspection into what these children are. So these children are actually rendered always on the server
[02:08:21] And that's how this boundary works.  So there isn't even really any props.  The children are the only thing that get passed through.  So this actually makes things really, really, really simple.  And then we just have to change our comment component
[02:08:33] Now to...
[02:08:35] do the right thing.
[02:08:39] Okay, this starts obviously with not being remixed.
[02:08:45] - Thank you.
[02:08:45] So let's do next link.
[02:08:51] And do that. And now we no longer need hugh state here.
[02:08:59] That is gone.
[02:09:03] And then...
[02:09:06] This becomes href.
[02:09:08] Makes sense.
[02:09:10] And then...
[02:09:13] Dangerously set in your HTML. Looks good, good, good, good. And now this is where the fun part is. And I'm just going to refer back to solid to remember what we do here, which is in the comment component.
[02:09:24] Thank you.
[02:09:25] We do our conditional when there's length, and then we wrap the loop in a four.
[02:09:30] so
[02:09:32] Conditional when there's length.
[02:09:34] And then...
[02:09:35] We...
[02:09:39] we do this.
[02:09:42] Okay, so everything, this whole part
[02:09:44] just disappears essentially.
[02:09:48] -Chuck!
[02:09:51] Chuk.
[02:09:54] And then...
[02:09:56] this becomes our
[02:09:58] toggle.
[02:10:03] and format.
[02:10:05] Thank you.
[02:10:09] And then...
[02:10:10] Thank you.
[02:10:11] pluralize
[02:10:13] Was pluralize supposed to be in here? Did I miss that?
[02:10:16] Or did that just get lost in the...
[02:10:19] Maybe that just got lost in the ether. Is there pluralized in the solid version?
[02:10:25] No, okay. So we just...
[02:10:27] We just lost in the ether, doesn't matter. Slightly different formatting for this example, but...
[02:10:33] I think...
[02:10:35] The key is...  Yeah, right...
[02:10:37] we
[02:10:39] import
[02:10:40] toggle
[02:10:42] from Toggle.
[02:10:44] and then we go back a couple rows
[02:10:50] Okay, I went too far.
[02:10:52] What is it doing? Okay.
[02:10:56] Alright.
[02:10:57] *sigh*
[02:10:58] We're writing the components folder, so that should-- oh, right.  This is just the example of it being really-- VS Code just breaking on us really dumbly.  Like, the original was fine.
[02:11:07] Okay, and then...
[02:11:10] Thank you.
[02:11:12] Oh right, no, we have a key. I was like, we don't need keys in solid, I thought maybe I broke that, but no, we have a key, so what is it complaining about?
[02:11:20] -
[02:11:22] Someone who knows React can probably tell me what's wrong with this.
[02:11:31] Yeah, it's going okay.  We actually got the...  I'm just getting to the part where we do the recursive partial hydration.  Um...
[02:11:38] on the stream.
[02:11:41] That's...
[02:11:42] That's...
[02:11:44] That's how it's going so far. We haven't really introspected what's going on yet. Mostly, we're just getting this hacker news demo working. I spent like the first hour literally just ranting about why server components are important.
[02:11:55] Yeah.
[02:11:58] Thank you.
[02:11:59] It's a return type of comment.
[02:12:02] - Thank you.
[02:12:05] I mean...
[02:12:06] Thank you.
[02:12:06] Isn't it just
[02:12:08] whatever JSX element this is.  Am I returning like multiple or something by accident?  No, it's a list item.
[02:12:14] Hmm.
[02:12:22] Maybe I don't care.
[02:12:24] *sniff*
[02:12:24] that's always a possibility maybe I don't care so let's look let's look here what's going on
[02:12:30] If we go here, does it work?
[02:12:33] Does it collapse? Styles aren't quite...
[02:12:36] right okay i always have to remember this with jsx frameworks um does the dangling zero um
[02:12:44] Because I'm
[02:12:46] I'm checking length.
[02:12:48] Let's do something like this.
[02:12:52] It's fine.
[02:12:54] um...
[02:13:00] Thank you.
[02:13:02] Thank you.
[02:13:03] It's funny.  Did I...
[02:13:05] Yeah, what's...
[02:13:07] Yeah, interesting.
[02:13:09] I'm not quite...
[02:13:12] This isn't quite right stylistically.
[02:13:15] I wonder why that is.
[02:13:21] open.
[02:13:22] Toggle, what? Okay. I think I screwed up the class concatenation inside our toggle component.
[02:13:31] I think I know why.
[02:13:34] I think I did this.
[02:13:35] Let's try this.
[02:13:41] Yay, okay.
[02:13:43] We did it.
[02:13:46] We did it.
[02:13:47] Okay.
[02:13:48] Success.
[02:13:52] Okay, that's great.
[02:13:54] so
[02:13:55] We have a working...
[02:13:56] Thank you.
[02:13:58] Hacker News Demo piece. Okay, so this is good. This is where we start actually looking at what's actually going on here.
[02:14:09] Yeah. I want to...
[02:14:12] First of all, there's a console error. I'm interested with that.
[02:14:17] something about
[02:14:19] React Dev overlay.
[02:14:22] Yeah, I don't know. I don't really care.
[02:14:24] Um...
[02:14:27] I guess the first thing is, can I...
[02:14:28] Can I look at this?
[02:14:30] locally? Can I be like npm run build?
[02:14:34] And then like...
[02:14:36] run the optimized production build locally.
[02:14:44] Oh, is it gonna error out on TypeScript errors?
[02:14:46] Oh man.
[02:14:51] Okay, which one? We're back to the stupid map. Okay, fine. I guess we're gonna fix TypeScript errors.
[02:14:59] - Hmm, it's absolute.
[02:15:01] Alright, so let's look here. What are we doing here? It's not this one, it's this one first. Map stories.
[02:15:09] It gets type string cylinder, can't be used in the type type string.
[02:15:17] Really, even though I say it's a
[02:15:21] Is it supposed to be type of
[02:15:23] Kyiv.
[02:15:24] God.
[02:15:28] If I just say it's a string.
[02:15:31] No.
[02:15:44] Thank you.
[02:15:45] Beautiful.
[02:15:48] Okay, we got it.
[02:15:50] It's funny, last stream we did this, we never solved that one.
[02:15:55] And then this one I need to...
[02:16:00] -
[02:16:01] do a little bit of this fun
[02:16:03] Okay.
[02:16:09] -
[02:16:10] I don't need half of this.
[02:16:19] Shuk
[02:16:21] And what do we call it?
[02:16:27] And then this one,
[02:16:29] Wow.
[02:16:30] So we do have to solve this one.
[02:16:32] Thank you.
[02:16:34] Amen.
[02:16:43] Thank you.
[02:16:52] Okay.
[02:16:56] It's a...
[02:16:57] It was this, right?
[02:16:59] Yeah.
[02:17:02] Thank you.
[02:17:05] Thank you. Yeah, sorry.  I use JSX very differently in Solid  because there's no virtual DOM.  So like JSX element is like as good as
[02:17:15] Like whatever, it's like
[02:17:17] It's like a slightly...
[02:17:19] Um...
[02:17:21] It's basically like any, but it's like a little bit narrower than any.
[02:17:25] Okay.
[02:17:26] - Thank you.
[02:17:27] *sad*
[02:17:36] That's interesting
[02:17:48] We can get rid of the API route too. Sorry, I forgot that was still here.
[02:17:53] Move to trash.
[02:18:00] and...
[02:18:02] Let's look.
[02:18:04] and
[02:18:07] Yeah, start. We should deploy this.
[02:18:10] realistically, but I just want to sanity check some stuff before we deploy it. Actually,  we probably should just deploy it.
[02:18:25] But...
[02:18:25] Let's see if this does what I...
[02:18:28] Thank you.
[02:18:29] Alright.
[02:18:32] Just curious, because the most interesting thing to me...
[02:18:36] is
[02:18:36] How much...
[02:18:38] Okay.
[02:18:39] is
[02:18:40] better?
[02:18:43] It's interesting.
[02:18:45] What is all this stuff they're serializing?
[02:18:48] for a statically server rendered page.
[02:18:51] There's something about this technology I don't...
[02:18:53] quite understand yet.
[02:18:55] Because like...
[02:18:57] You'd think
[02:18:58] that you wouldn't need any of this. Like this page
[02:19:04] Thank you.
[02:19:06] Right, there's 15 kilobytes here from... we know better. We need to open this in an incognito window.
[02:19:14] So we're...
[02:19:15] But...
[02:19:18] Thank you.
[02:19:19] Thank you.
[02:19:21] Okay, yeah, I think I'm happy that this is functional.
[02:19:26] Enough?
[02:19:27] Um...
[02:19:30] Yeah, I'm happy that this is functional enough that I want to deploy this next.  I don't think we're going to get a real feel for this until we compare a next 12 app with a next 13 app.
[02:19:38] That's where we're at right now, right?
[02:19:44] Well, that's the thing. This isn't dev mode anymore.  I turned off dev mode. I did a production build, and then I did a...
[02:19:50] I did a-- I'm hoping this is not dev mode.
[02:19:54] That was why I did the production build for it because I...
[02:19:57] I did an X-Start.
[02:20:03] Thank you.
[02:20:04] You have to put the Commodes folder into the app
[02:20:07] Follow the other server points.
[02:20:08] Is that true?
[02:20:10] That doesn't make sense. How would you ever import server components from a third-party library?
[02:20:17] Well, I mean, it's not crazy in size. Next is 80 kilobytes. Like it doesn't,
[02:20:22] or like 76 kilobytes. So like you're not going to make  a NextApp smaller by using server components. All you can do is make
[02:20:29] Anything else that you would have to load?
[02:20:32] less. It scales from that point.
[02:20:36] Right, so I think, oh right, and we still have the console log here too. What I want to do actually is,
[02:20:42] I want to deploy this. I think we're going to have to deploy this. We have a console log somewhere.
[02:20:47] Yes, it's this one.
[02:20:50] So
[02:20:51] So...
[02:20:52] I guess we're...
[02:20:54] We're ready for Vercel time.  Was it...
[02:20:57] Vrissal?
[02:21:00] Yes.
[02:21:03] Yes?
[02:21:04] No?
[02:21:08] Yeah, that's a good one.
[02:21:10] What code?
[02:21:11] What directory is the code located in?
[02:21:14] The root directory?  Yeah.
[02:21:17] Is that right?
[02:21:17] Sorry, I just never use
[02:21:19] Next, I don't know what the correct answer is.
[02:21:24] Help me hear chat.  Yeah, okay.
[02:21:33] That looks reasonable.
[02:21:37] Do I want to modify these? No.
[02:21:47] Alright, while we're doing this I'm actually going to look for my older
[02:21:51] version of this, and actually I don't think...
[02:21:55] We have...
[02:21:59] What's it?  Next...
[02:22:01] Hacker News, yeah.
[02:22:03] Okay.
[02:22:09] I don't think I have another incognito.
[02:22:11] Okay.
[02:22:12] Let's...
[02:22:13] Okay.
[02:22:15] Okay, let's see first that this works.
[02:22:28] Oh.
[02:22:29] Interesting, did it do straight to production, like prod deploy on the first one because I hadn't built it before?
[02:22:36] This looks like a prod deploy, I don't see any namespacing.
[02:22:39] Okay.
[02:22:41] Okay, that's cool.
[02:22:43] Let me double check that.
[02:22:47] Because usually there's...
[02:22:50] deployed production run for total rate leader
[02:22:53] Okay, yeah.
[02:22:55] Thank you.
[02:22:57] Okay, cool.
[02:22:59] Thank you.
[02:22:59] So now we have two Next.js apps to look at side by side.  Next.12, Next.13, server app directory.
[02:23:06] Bang, let's do it.
[02:23:08] *cough*
[02:23:09] Looks like I still have some
[02:23:12] Some stuff but okay at least the title will help us figure out the differences between these because it looks like an improperly set the title for either of them so I
[02:23:19] Okay, first let's just...
[02:23:22] understand JavaScript for the wire.
[02:23:24] Okay.
[02:23:27] So 84.2 on basically a no JavaScript page anyways.
[02:23:32] And...
[02:23:34] 89.6, okay.  So you may be like, "Hmm, interesting, size went up."  Well, server components have a little bit of an overhead.  So I guess this is gonna be the,  this demo is just not the right demo  to showcase off server components  from a pure size perspective.
[02:23:47] um...
[02:23:49] because like
[02:23:50] Technically speaking
[02:23:52] Um...
[02:23:53] The size cost to opt into server components is probably more expensive than the JavaScript  it takes to render this page.
[02:24:04] Either that or like, what version of Next are we on here?  Are we still...
[02:24:09] Are we still in like the...
[02:24:11] buggier versions that
[02:24:13] No, 1306, hopefully stuff's...
[02:24:16] Thank you.
[02:24:17] Been fixed.
[02:24:19] Okay, let's...
[02:24:20] - Thank you.
[02:24:22] Let's look at a couple other things here. I want to look at the HTML payload actually, because I want to understand
[02:24:29] How big?
[02:24:30] it is over the wire so if we look at the document here
[02:24:34] For the same page?
[02:24:37] Interesting.
[02:24:39] Huh.
[02:24:41] circum components version is a larger let's look at the elements i want to i want to understand this
[02:24:46] Next route announcer.  Oh, cool.  That's...  Honestly...
[02:24:51] Props to them for having like
[02:24:53] ARIA stuff built like right in. Like in order to properly do ARIA you have to like an ARIA live section that when route changes, swaps out the text and this paragraph element so that it alerts people. The fact that this is built in is kind of really awesome.
[02:25:06] Anyway.
[02:25:08] Does this one have a 2? Probably?
[02:25:12] Like I didn't opt into that, that was just their next
[02:25:17] I don't see it here. Anyways, doesn't matter. Let's let's uh
[02:25:21] Okay.
[02:25:22] Next data script. This is our
[02:25:25] tons of serialized data.
[02:25:28] Um...
[02:25:29] And then here's the next thing. But interestingly enough,
[02:25:33] Here
[02:25:34] Okay, some pushing, some probably for streaming.
[02:25:38] The actual serialized
[02:25:39] amount of data
[02:25:41] is actually greater
[02:25:43] because it's passing the server components
[02:25:46] Interesting.
[02:25:47] This isn't just JSON, I'm seeing Ahrefs and class names.
[02:25:52] Their server component...
[02:25:55] Thank you.
[02:25:56] serialization is actually flushed into the document.
[02:26:02] Huh, this is... I just...
[02:26:05] All right.
[02:26:06] Astro Solid Edge. I just want to understand...
[02:26:09] what kind of impact that serialization has
[02:26:13] I just listen.
[02:26:15] 3.1 kilobytes for Astro Solid.
[02:26:18] Solid
[02:26:20] HN Islands.
[02:26:23] Thank you.
[02:26:24] What's this one?
[02:26:26] 3.6 kilobytes
[02:26:31] Interest 6.8
[02:26:34] 5.1 okay, so
[02:26:36] Interesting. Basically what I was kind of looking at here is there's a certain shelf
[02:26:42] on complexity before it's actually worth investing because like
[02:26:45] the router and the
[02:26:48] Diffing the do-surfing components has an overhead.
[02:26:50] Right.
[02:26:52] and
[02:26:53] Uh,
[02:26:54] the reason I'm mentioning this is like,
[02:26:56] - Yeah.
[02:26:57] This solid version is like, it should be bigger.  This version of the diff, it should be about a kilobyte bigger.  It should be about six kilobytes.  Okay, let's say six kilobytes for this page.  But like,
[02:27:07] Um...
[02:27:10] It's small enough compared to the JavaScript actually rendering the page that the offset
[02:27:15] is different enough. Like, if I just pick like a solid
[02:27:19] Hacker News Edge Netlify demo or something.
[02:27:23] like what you'll see in this example,
[02:27:25] is that the app's like 13.8 kilobytes. So going to this
[02:27:30] actually is a, it makes a difference.  Like from here on out, it scales better.  Like this is the worst case when you're on the small side.  And basically this page doesn't require  any JavaScript to run.
[02:27:42] So this is the overhead here. See, if I actually go on this page on Astro,
[02:27:47] there's going to be no JavaScript.
[02:27:49] you don't need  JavaScript for this page to run
[02:27:52] Astro, however, is an MPA, so it doesn't have a client-side router, so that's a trade-off.  It's all I need is a little bit of JavaScript to run.
[02:27:59] Essentially, this is kind of like the worst case page in terms of size just to kind of understand and I was interested in the doc and
[02:28:05] serialization thing.
[02:28:08] Server components don't save you on data serialization on the base case.  I mean, let's scale it up something.  Let's find a story that has...
[02:28:17] a lot of comments. I just want to kind of understand what this looks like. 328 comics?
[02:28:22] comments is probably enough
[02:28:24] 329 now? Yeah, that's probably enough. Let's look at what's happening here. So...
[02:28:30] 81.5 kilobytes
[02:28:33] for this document serialization size, right?
[02:28:36] JavaScript should be still small, $89.
[02:28:38] that's not bad for
[02:28:40] for the Next 12 version
[02:28:43] of the same
[02:28:45] story, we're going to
[02:28:48] do this, and we look at this.
[02:28:51] So
[02:28:52] 81.2. So it's basically the same document size. It's like slight difference. We're talking about a couple of
[02:28:59] So it's basically the same document size.  The amount of HTML and serialized kind of works out to be the same.  This one, obviously,
[02:29:07] on the JS size, it basically looks like
[02:29:12] React Server Components cost about seven or eight kilobytes.
[02:29:16] and then they're saving about three or four kilobytes  by having them.  So like, it's like, it's like plus eight minus four.  So the Delta is about four kilobytes between these versions  in the non-server component thing,  because there's just not that much JavaScript required  for this page.  But just to kind of get understand,  it looks like it was about eight kilobytes overhead  for React server components.  And then having them on this page saves you
[02:29:38] four kilobytes.
[02:29:40] That helps me out.
[02:29:44] Bye.
[02:29:46] Thank you.
[02:29:49] But the document...
[02:29:52] serialization is interesting because this is not what I was expecting exactly
[02:29:58] 54 kilobytes for the asset.
[02:30:00] version 54
[02:30:02] and for
[02:30:03] the Solid Islands version.
[02:30:08] Where is it? Sorry, not that. The dock.
[02:30:13] 55?
[02:30:15] And the original solid version, which has everything in it,
[02:30:20] Um...
[02:30:21] Thank you.
[02:30:24] Yeah.
[02:30:25] 113. Yeah, okay. Yeah, solid serialization formats with the DTHKs are a little bit big.
[02:30:31] Um...
[02:30:32] But...
[02:30:33] Interesting. Okay.
[02:30:35] I was mostly interested in seeing the-- so there basically is no serialization savings
[02:30:42] Here.
[02:30:43] Like it doesn't solve the double data problem.
[02:30:47] Which...
[02:30:47] is one of the benefits.
[02:30:49] Let me grab another one here. We'll do it at Quick City.
[02:30:53] People like those, right?
[02:30:54] uh...
[02:30:56] just to kind of get an idea, because yeah, what was our base thing here, right?
[02:31:00] 4.5, which is nice.  And then when we go into this expensive story...
[02:31:07] This one.
[02:31:08] 62.7.  Yeah, so again, quick...
[02:31:11] 55, like it's very comparable on HTML scaling size.
[02:31:15] And then obviously, page like this, we need some JavaScript.
[02:31:19] There it is, okay.
[02:31:21] Quix version
[02:31:24] Oh...
[02:31:25] This is why I have service workers turned off all the time, so I can actually see
[02:31:30] what the performance is, application.
[02:31:33] Bypass.
[02:31:34] source stack blitz this is why we we have not the best relationship
[02:31:39] Now let's look
[02:31:41] again
[02:31:42] and
[02:31:44] see what's going on so we get proper sizes there we go bang 17 kilobytes of jamscript okay yeah so
[02:31:51] 17.5 or 6.  Yeah, just to kind of get my head around it.  13.8 for the solid...
[02:31:59] full version
[02:32:01] And then...
[02:32:03] For the Islands version of Solid, 5.8 Astro...
[02:32:07] JavaScript 4.8 with solid, and then
[02:32:12] But again, it doesn't have MPA routing.  Well, technically the quick one doesn't have,  it's an MPA as well.
[02:32:18] But this just kind of gets me the kind of scale here.  So...
[02:32:23] It...
[02:32:24] We don't solve the double data problem with this, which is interesting.
[02:32:28] Um...
[02:32:31] Interesting, okay.
[02:32:34] Yeah, okay.
[02:32:35] I start to see why people have a hard time
[02:32:40] here.
[02:32:41] It's not that the technology isn't good. I think that if you make a dumb, stupid demo like I'm making right here, you're not going to see the benefits.
[02:32:50] because...
[02:32:52] Next buy-in cost is so high that like you're actually like you have to do something
[02:32:57] more substantial to actually see
[02:33:00] any kind of difference here
[02:33:01] And
[02:33:03] Um...
[02:33:04] Yeah, that serialization cost is going to
[02:33:06] ping it on the like
[02:33:08] on the death test.  Um,
[02:33:12] I don't even know if I want to run it.
[02:33:14] It's not going to...
[02:33:15] it's not going to perform like the other partial hydration solutions.
[02:33:27] Thank you.
[02:33:29] Yeah, the context thing is understandable.
[02:33:33] Thank you.
[02:33:34] We probably should talk about that.  I said I'd talk about this later to kind of explain about some of the optimizations that can be done here.
[02:33:41] But...
[02:33:42] This is tricky.
[02:33:46] Um,
[02:33:47] It's definitely tricky.
[02:34:14] I mean, it's not identical because it...
[02:34:19] you're trading an HTML API for JSON API, so it's like a little bit tricky.
[02:34:24] Yeah, I cut the sound for a second.  I need to think.  Um...
[02:34:29] Okay. Because, yeah, I mean...
[02:34:34] Yeah.
[02:34:38] Thank you.
[02:34:39] Yeah, but there's trade-offs here, right?  Like, technically, the AstroSolid demo is...
[02:34:44] the smallest MPA thing,  but like this is an MPA.  Like you are...
[02:34:50] page reloading you know like that's good for lots of things maybe not good for everything  so like it's not a fair match comparison the quick one is a little bit larger like
[02:35:00] And it's also MPA. They've got streaming here though. You see how the bar doesn't come in?  This is something you'll find too with like Marco when you're using when you not this one. This is Marco 6. Sorry Marco 6 is
[02:35:12] Crazy. If I showed you the JavaScript for this one, you guys will just like
[02:35:16] 1.6 kilobytes.
[02:35:18] Like that's it.  It still works.  Trust me.
[02:35:20] We don't have to get into Marco 6, but let me see if I can find the Marco 5 version of it. Marco...
[02:35:30] Uh, what's it?
[02:35:32] Marco Hacker New... maybe I don't have the link offhand any right now.
[02:35:38] The problem with this one is I made it with the Marco team,  so I don't actually have it at my fingertips.  I think it's...
[02:35:45] Marco...
[02:35:47] Hacker news.  It doesn't matter.  It works the same way as Quick.  And it's about the same size because MarkoFi is about 15 kilobytes.  So when you have a good MPA with streaming...
[02:35:58] - Thank you.
[02:35:58] The bar...
[02:36:00] doesn't flicker because it can get there so fast, but it is still reloading pretty much everything. Right. So there is there is like a trade off here. It's not it's not it's probably if you're going for MPA is probably pretty good in like who cares. Right.
[02:36:14] Mm-hmm.
[02:36:15] Then you have stuff like...
[02:36:18] Server components
[02:36:19] Which...
[02:36:20] like solids version here, which is like 5.8 kilobytes. It's like a little bit bigger.
[02:36:24] and that
[02:36:25] And it's a spa style thing, but it's actually an MPA.  That's why we have so little JavaScript here.  So it's like the hybrid thing.  This is ideally where you want to get to.  Technically...
[02:36:35] This is that as well.
[02:36:39] Um, wait, what happened?
[02:36:42] Technically, this is--
[02:36:45] Oh, weird.
[02:36:47] Something...
[02:36:52] something the the slash route isn't working the catch-all in the slash route  isn't working on deploy I think I might have found a bug
[02:37:00] I think the slash root is like
[02:37:02] messing with things
[02:37:03] top level. But...
[02:37:05] essentially
[02:37:08] because that worked locally. Essentially,
[02:37:10] The thing is, we're still paying the whole cost of React and Next, which is a little bit expensive.  And then you get the client-side stuff, which is innately just slower in these kind of scenarios, just...
[02:37:21] because they are like Solid's version. I mean, Solid's and Svelte's version are going to be small. Solid's like 13, Svelte's like 18, but you know.
[02:37:27] Huh.
[02:37:29] Anyway.
[02:37:31] So there's a whole scale of solutions here, going back to my Skeldraw.
[02:37:38] Yeah, I mean, I'd love to see the Movies app built in this. My gut feeling, though, I mean, you already know what the answer is going to be. It's going to be smaller. The next version of the Movies app right now, after you navigate a couple pages, is about 190 kilobytes. This version should...
[02:37:54] stay fixed maybe at about 95 kilobytes
[02:37:59] So like
[02:38:01] I think it would be better, but we'd have to build it.
[02:38:06] Yeah.
[02:38:08] Yeah, this is interesting.
[02:38:13] Thank you.
[02:38:19] Hmm. I need a second. You know what? I'm going to be right back.
[02:38:25] I know I usually don't take a break on stream,  but I actually need a moment here.  So I will be right back and just give me like,
[02:38:32] Two minutes.
[02:42:05] All right, yeah, yeah, sorry about that. Hey, we lost like 30, 40 viewers, but you know, it is what it is.
[02:42:14] Yeah.
[02:42:17] -
[02:42:19] Thank you.
[02:42:20] Thank you.
[02:42:21] Okay.
[02:42:22] Great.
[02:42:25] Okay, no.  Okay, how should I put this?  They can definitely create a smaller bundle than Next12 if you have lots...
[02:42:32] of static
[02:42:34] Pages.
[02:42:35] that are very large. This one's very easy because it's literally a comment
[02:42:40] Restore component rendered like 10 billion times on the page, but like if you had like a
[02:42:46] a lot more different static stuff
[02:42:49] then...
[02:42:50] It's only the client component they do.  So what I'm saying is it can't make your bundle...
[02:42:54] your base
[02:42:54] bundle size any smaller like the like the smallest size you can make a next app can't get any smaller  But it can make it grow less fast. It scales better and
[02:43:04] It changes the slant of your curve.  And I don't even like that analogy because it does depend on interactivity anyways.
[02:43:17] Like,
[02:43:18] But
[02:43:19] ultimately...
[02:43:21] Once your page
[02:43:24] gets to a certain
[02:43:25] complexity
[02:43:28] with a certain amount of server...
[02:43:31] purport like stuff you will easily offset the eight kilobytes
[02:43:36] It costs to bring in like the next
[02:43:39] 13 runtime stuff so like it's like I wouldn't worry if
[02:43:43] Like...
[02:43:44] This will...
[02:43:45] make things smaller...
[02:43:47] Thank you.
[02:43:47] It's just like...  It's just like...
[02:43:51] he won't make it any smaller than,  than like,
[02:43:55] "Hello World" in Next Today.  You build an app in Next Today,  it might be like 200 kilobytes,  and then you do it this way,
[02:44:02] And it's like...
[02:44:04] 120 kilobytes.
[02:44:06] Do you see it? And it scales better because as that 200 kilobyte app becomes 250 kilobytes...
[02:44:12] Maybe...
[02:44:13] that 120 kilobyte app only becomes...
[02:44:17] You know, uh...
[02:44:18] 130.
[02:44:20] Like it just, that's sort of where the benefit is.  But the starting point post looks like  it's about 84 kilobytes or so.  Like that, like if original next, this,
[02:44:29] the baseline was 80, now it's 80.
[02:44:31] it.
[02:44:32] I guess it's like 76. I've got to negate these small components here, but it's like the base number has
[02:44:39] has gone up a little bit to allow better scaling.
[02:44:45] Thank you.
[02:44:46] Yes, I do need
[02:44:48] Uh...
[02:44:49] a link for all my Hacker News demos.
[02:44:52] We are going to run this through the death test, I mean that's what we do here, but...
[02:44:57] Thank you.
[02:45:01] Yeah, I mean,
[02:45:02] And it actually needs the VDOM to...
[02:45:04] to do the page to page diffing thing, right?  That's like the...
[02:45:10] That's an interesting argument that I could see someone making a router like we do a solid router without any reactivity, so you wouldn't need solid runtime to do the router.
[02:45:21] Um
[02:45:21] Yeah.
[02:45:27] Yeah, this is a good...
[02:45:29] explanation, sorry, I put that down too much. The base size is similar, but on the bigger apps can be smaller. Exactly.
[02:45:36] There are two solid apps, one with
[02:45:39] Astro and one of the solid start islands, yeah exactly.
[02:45:41] The Salt Star Islands has client-side routing. That's kind of the difference, where the Astro one's like the MPA.
[02:46:04] Yeah, I get what it is. It's just like one of the benefits of
[02:46:09] of partial hydration.
[02:46:11] is the ability to solve the double data, like sending the information twice in the HTML and is serialized.
[02:46:17] And the reason for that
[02:46:19] is it actually saves time rendering on the server, and it saves time, like,
[02:46:24] processing and crunching it and sending over the network. It saves every
[02:46:28] thing of it.  And this is like one of the places...
[02:46:34] Yeah, you know, like, if you want to understand what I'm talking about, let's do this.
[02:46:39] It's time.
[02:46:40] page speed web dev insights. And we can't trust this completely, but
[02:46:45] I just want to like
[02:46:47] You see this one page that I keep on doing over and over again that's very brutal.  Let's pick...
[02:46:54] Something. Like...
[02:46:55] Um...
[02:46:58] Which, which, which asked, did I close this down yet? What's the Astro one we're using here? Astro Netlify app, whatever. Let's pick this one, right?
[02:47:06] And let's put it in here, right?
[02:47:10] and do
[02:47:11] the terrible page. I think this is it.
[02:47:14] Let's analyze. This page is designed...
[02:47:18] to be brutal
[02:47:20] Okay.
[02:47:20] And the reason is to...  Okay.
[02:47:25] Did I get that wrong?
[02:47:27] Oh.
[02:47:28] I can't have got...  Let's double check I got that and get that right.
[02:47:32] Yeah, this page has 1315 comments.
[02:47:36] Let's try again.
[02:47:39] It's possible that
[02:47:41] PageSpeed Insights just doesn't want to give me this page anymore.
[02:47:46] because of how brutal it is.
[02:47:48] Yeah, they're not letting me...  Okay, let's...
[02:47:49] Let me pick another example.
[02:47:53] The show, like...
[02:47:54] an MPA with partial hydration. Let's try Marco 6.
[02:48:00] Okay.
[02:48:01] Okay.
[02:48:02] It doesn't really matter the exact numbers. It seems it might plus or minus five or
[02:48:08] even 10 but like on different runs. But I want to, the reason I want to point this out here is that you could they do kind of even page speed has problems doesn't see streaming like there's, there's there's issues with it. But like you can kind of ballpark here where you're sitting at. So let me take
[02:48:24] Something else.  Let me take...
[02:48:28] Let's take...
[02:48:29] Um...
[02:48:32] Let's take the next 12 examples, okay?
[02:48:36] Because that's the theme of today.
[02:48:39] Yeah, interesting.
[02:48:41] I didn't notice any API issue, but these--
[02:48:44] I've done this a dozen of times on stream, but it's like...
[02:48:48] Patespeed doesn't want to...
[02:48:50] isn't playing ball with me right now on these
[02:48:53] Mm-hmm.
[02:48:54] on this one.
[02:48:55] It's funny because it does seem to load...
[02:48:58] in the browser.
[02:49:01] I wanted to...
[02:49:03] We could also use webdev.measure
[02:49:06] for this if we want to.
[02:49:11] Well, yeah, the thing is...
[02:49:13] But only the props...
[02:49:15] This is the whole thing.
[02:49:17] So in our case of our toggle, there's no props that get passed in really, okay?
[02:49:23] Okay, so next is 46. That's about standard here.
[02:49:26] Thank you.
[02:49:27] Give me I just need to get like one of the partial hydration demos and
[02:49:32] actually
[02:49:35] Thank you.
[02:49:37] It doesn't matter which one we get.  Like, they're all about the same.  Okay, so...
[02:49:41] Let's hopefully get the Astro one.
[02:49:44] Error document request, let's try
[02:49:47] What's another one? I tried Marco, I tried Astro.
[02:49:50] I really wanted an MPA one.
[02:49:53] I mean, Solid's version isn't too bad.  Solid...
[02:49:57] HN Islands.
[02:50:00] It's pretty good too.
[02:50:03] Let's see if we can get this.
[02:50:11] Thank you.
[02:50:13] It doesn't matter if it's next.  Remix scores the same. Salt Starks...
[02:50:17] score actually made it better, I think.
[02:50:20] Let's see if I can get the solid start. When I actually did, I grabbed Marco's data serializer
[02:50:26] and it actually made a difference, which was actually really quite cool.
[02:50:29] Um...
[02:50:30] Let me see if I can get that one solid.
[02:50:34] Hacker News, Nutlify Edge, this one.
[02:50:37] It's not much, though. To be fair, it's going to be still in the ballpark of this season.
[02:50:44] That
[02:50:45] Come on.
[02:50:47] Come on.
[02:50:49] *sigh*
[02:50:51] I'm not.
[02:50:52] This used to work quite well.
[02:50:56] I feel like someone's caught on to my...
[02:50:59] my shenanigans.
[02:51:03] Unknown error.
[02:51:05] Uh, yeah, someone's caught on to my shenanigans.
[02:51:09] I'm not.
[02:51:10] *fart noise*
[02:51:11] uh...
[02:51:14] Let's...
[02:51:15] Let's...
[02:51:17] Let's drop in our...
[02:51:20] While we're waiting, we can also drop in our new...
[02:51:23] Next week.
[02:51:24] Hacker news one. What I'm really interested is if
[02:51:28] this actually
[02:51:30] ends up making much of...
[02:51:33] any difference
[02:51:34] compared to
[02:51:36] - Thank you.
[02:51:37] Okay, yeah, see the solid one's 54 and over 46.  We used to be 46, the new data serializer improved things like just the tiniest
[02:51:46] bit, but it's not...
[02:51:48] It's...
[02:51:48] It's not like a significant...
[02:51:50] kind of thing.
[02:51:53] But it's funny, none of the islands demo ones seem to want to be working
[02:51:58] uh like mpa ones seem to want to be working right now let's try let's try astro edge that's different  one let's try that one
[02:52:05] Um, let's do this one, let's do the RCs.
[02:52:09] Okay.
[02:52:12] So,
[02:52:13] Yeah, Dave did make one, but it actually was just as much trouble. I had like...
[02:52:19] I had some issues with it. I haven't worked with Dave to actually
[02:52:24] To solve those.
[02:52:25] But...
[02:52:26] I mean, while we're doing... I mean, I got lots...
[02:52:29] Anyone, people in the crowd want to see?
[02:52:33] I could do
[02:52:34] Remix
[02:52:36] Um...
[02:52:46] Okay.
[02:52:47] Okay, cool.
[02:52:48] Here you go.
[02:52:51] The RSC one got a 54.  It actually improved...
[02:52:54] over the thing.  So the actual partial hydration did improve the startup speed.
[02:53:03] Okay.
[02:53:05] But it could be the streaming that's making a difference, because what I'm actually noticing here is that the first Contentful Paint for this run is actually pretty far back.
[02:53:15] and
[02:53:16] Oh, actually, you know what?
[02:53:17] Thank you.
[02:53:18] The page aired out.
[02:53:21] And that's where it responded. So we can't trust this result.
[02:53:25] This one's fine.
[02:53:27] Thank you.
[02:53:29] Okay, yeah, we're just not going to get it today. That's unfortunate.
[02:53:37] Oh well.
[02:53:40] this
[02:53:41] This...
[02:53:44] I'm
[02:53:48] This is a...
[02:53:52] Yeah, I don't know.  Usually...
[02:53:54] Usually this works much much better.
[02:53:57] Remix got a 39, that's not a good run. It should be more like a 46.
[02:54:03] Um...
[02:54:05] It's...
[02:54:06] It...
[02:54:09] But I'm not making a big enough emphasis because what I was trying to show was that Remix...
[02:54:15] Next, it's a typical SSR. You're going to get scores around 46.
[02:54:20] Even solid start, although I managed to like edge it up the tiniest bit. SvelteKit also around 46, let's say
[02:54:26] See if we can get SvelteKit in here.
[02:54:28] Um...
[02:54:31] Svelte.
[02:54:34] Let's do it.
[02:54:35] in this range on this test.  But then when you get to the Astros and the
[02:54:43] We can turn quick. Quick is also another one of these partial hydration. You see like a whole...
[02:54:50] different category
[02:54:53] of Quick Hacker News, Quick City.  Where is it? Quick City, there it is.  You see a whole different category of...
[02:55:01] performance.
[02:55:03] For some reason, all the fast ones don't want to load for me today, which is funny.
[02:55:09] Let's try this one again, nope.
[02:55:11] Thank you.
[02:55:12] Nope.
[02:55:15] Mixed.
[02:55:18] Thank you.
[02:55:19] Yeah.  I don't know.  It's...
[02:55:21] There we go, Svelte 43.  Like...
[02:55:24] You can kind of see
[02:55:26] Um...
[02:55:28] You can kind of see the pattern.
[02:55:30] of the range of where single page apps
[02:55:35] kind of, kind of, well, we got one other server component demo. Let's, let's, we got hydrogen, right? Let's do hydrogen.
[02:55:42] I'm gonna get hydrogen in here.
[02:55:45] I...
[02:55:46] Let's get hydrogen going.
[02:55:48] Oh, Fresh is another one we can try if Quick doesn't work.  Okay, there we go.  Quick City, 80.
[02:55:53] This is what I wanted to kind of get to.
[02:55:58] When you get a quick city,
[02:56:02] Solid Islands, um...
[02:56:05] So
[02:56:05] uh,
[02:56:06] Including the client-side version when you get like Marco or Marco 6 or Astro you get scores in the 80s not in the
[02:56:15] Not in the 40s.
[02:56:16] And...
[02:56:18] It's interesting because
[02:56:20] React server components...
[02:56:23] Hydrogen 59. Yeah is kind of there's something wrong. I
[02:56:27] The quick page loaded, right? Yeah, the quick page loaded.
[02:56:30] Yeah, I'm just not getting it today, unfortunately. What I'm finding here is the React Server Components
[02:56:38] are...
[02:56:41] are an improvement
[02:56:42] over
[02:56:44] Um...
[02:56:48] Definitely an improvement over the single-page apps,  but they're not seeing the same kind of
[02:56:52] wins
[02:56:54] that we've seen from the islands on this sort of demo situation where we're talking about largely static data serialization type stuff.
[02:57:04] you know, like
[02:57:05] you know, like these kind of hacker news things  where you have large portions of data...
[02:57:10] Um...
[02:57:13] Although Solid's server components actually do...
[02:57:16] um score similar but we're not we're not actually getting in here um unfortunately for some reason
[02:57:21] Let's try one more time. I just...
[02:57:25] It's not that one, islands. Okay. Anyway.
[02:57:32] Yeah, we'll share the RSC version.
[02:57:35] Definitely.
[02:57:37] to it
[02:57:40] I'm going to go.
[02:57:41] I mean...
[02:57:43] Unknown error. It's so funny because if I open this up in a tab,
[02:57:49] the page will load.
[02:57:52] you know
[02:57:55] I tried the Astro one. I meant to try the...
[02:57:59] this one, but it's
[02:58:01] the same...
[02:58:07] Yeah, I mean...
[02:58:09] I mean, maybe we can visually see it.
[02:58:13] you know
[02:58:14] Let's just do this. Let's slow 3G it.
[02:58:19] look at a performance profile and just kind of understand what the, what the,
[02:58:24] the loading response looks like.
[02:58:28] Sorry, I tapped the wrong thing. I meant to tap this.
[02:58:31] Looking at the profiler here for a minute.
[02:58:39] The error...
[02:58:42] The RSC one didn't actually have an error except for when it was deployed.  It actually worked fine locally.  I think the error is actually the...
[02:58:49] the top level, uh,
[02:58:51] catch all
[02:58:53] Yeah, you can actually see...
[02:58:58] You can actually see...
[02:59:00] What's this?
[02:59:01] Oh, I'm not in an incognito window. That's my bad.
[02:59:05] we need to go here
[02:59:08] and we need to drop in
[02:59:10] - Thank you.
[02:59:11] the right URL.
[02:59:15] Yeah, let's...
[02:59:15] That's...
[02:59:16] I want to see if we can actually see a difference in the timeline
[02:59:21] in
[02:59:23] Oh, interesting. Yeah. So this, I think this page
[02:59:26] actually is just too large and it's timing out
[02:59:29] Um...
[02:59:30] it's timing out the edge function.
[02:59:35] Thank you.
[02:59:40] Yeah, it is definitely the best way to do it.
[02:59:44] But you also need to simulate the network slowdown.
[02:59:50] So it's tricky because like...
[02:59:53] I mean, we could still learn some stuff here by looking at the performance profile of something with
[02:59:59] you know,
[03:00:01] 300 comments too, right? Where's this?
[03:00:04] Thank you.
[03:00:06] Let's load this one.
[03:00:08] Sorry.
[03:00:10] Let's load the
[03:00:12] The one with 329 comments. Ah, sorry. Stories...
[03:00:20] Thank you.
[03:00:28] We can still see the difference between the server component execution and not.
[03:00:34] Thank you.
[03:00:35] Maybe I should do a little...
[03:00:38] I don't like the CPU throttling if I can avoid it.
[03:00:42] but it might be necessarily they can emphasize the difference
[03:00:45] Thank you.
[03:00:47] Um...
[03:00:50] Let's run this one more time.
[03:00:53] Felt a little bit slow.
[03:00:57] Interesting.
[03:01:02] What is going on?
[03:01:04] I think that's just their service worker, but
[03:01:06] fetching stuff in the background.
[03:01:09] first paint is about here. Okay, let's look at
[03:01:14] Um, let's look at this under the same...
[03:01:17] scenario, circumstance.
[03:01:21] It's running out.
[03:01:23] Okay.
[03:01:27] One more time.
[03:01:30] Thank you.
[03:01:37] Yeah, that's interesting.
[03:01:40] 'Cause this page is loading
[03:01:42] faster on the next 12 version. There, done.
[03:01:46] We're like hitting some kind of cache and then here
[03:01:50] It's actually...
[03:01:51] Noticeably slower.
[03:01:55] And this is not, there's no CPU throttling here.  I'm just literally...
[03:01:59] deployed to Purcell and I'm getting like
[03:02:03] Getting very different, like it's taking...
[03:02:06] the next app like over a second to respond here which is weird
[03:02:11] And the first paint...
[03:02:13] comes in here
[03:02:15] Which isn't... which is...
[03:02:17] Good, but it's...
[03:02:18] 1100 and then we're getting LCP
[03:02:23] at
[03:02:26] the same time that makes sense largest comfort change and then it and then
[03:02:30] How does the hydration timeline look like we see like a whole bunch of little JavaScript things but document loads here  so like this is the core of the JavaScript work right here that happens in
[03:02:41] kind of
[03:02:42] from around the end of the document here, this kind of zone. Let's compare
[03:02:47] that timeline...
[03:02:48] here, as I said, they're done in like half a second, but the first paint doesn't happen to here.
[03:02:53] But it's, like, much...
[03:02:55] It's 500 milliseconds.
[03:02:57] LCP is 500 milliseconds at all as well? Yes it is.
[03:03:00] And then...
[03:03:01] We're doing a whole bunch
[03:03:02] of hydration work here.
[03:03:05] in its more
[03:03:07] longer processes and more blocking but we're talking like 11 24 35
[03:03:14] and then another like
[03:03:16] Tenant change like
[03:03:19] 40 50 milliseconds here and
[03:03:22] And...
[03:03:23] this timeline
[03:03:26] 7, 4, 2, yeah, I mean that's about
[03:03:29] 12, another gap, and then these are all about 6 to 5, so what? 1, 2, 3...
[03:03:35] plus 20, 60, like,
[03:03:37] port messaging
[03:03:39] But I think this stuff is non-blocking, which is the...
[03:03:42] Difference here, but it doesn't look like it's actually doing less work. I want to I want to take a look at something  uh
[03:03:48] kind of let's look at the astro version and like
[03:03:53] see if the timeline's like any different.  It's just interesting to me.  Maybe less to people...
[03:04:00] But
[03:04:01] I wanted to kind of understand
[03:04:04] what this looked like. Okay, let's refresh in here.
[03:04:11] Thank you.
[03:04:17] Okay, so now we're responding...
[03:04:19] in 300 milliseconds
[03:04:24] And we got...
[03:04:28] a big layout thing happening I don't know what's going on there and then a whole bunch of hydration here
[03:04:33] These processes are very small.  I think each island is doing like a...
[03:04:37] Oh, but you can see it here, 36. This whole timeline is like 10 milliseconds.
[03:04:42] Thank you.
[03:04:43] And then...
[03:04:44] Over here
[03:04:46] Oh, actually.
[03:04:47] Huh.
[03:04:49] There's more stuff coming over here.
[03:04:52] What is this?
[03:04:55] Because this is the main entry.
[03:04:57] Thank you.
[03:04:59] Interesting. But it's...
[03:05:01] It's already clocked off here.
[03:05:03] This is the idle stuff. The Astro version has idle hydration. And this is happening in the background here.
[03:05:09] for about
[03:05:10] I don't know, another 30 milliseconds.
[03:05:13] plus
[03:05:14] Whatever this is. Okay. I just...
[03:05:17] It's interesting to see the difference between these sort of
[03:05:20] timelines. Okay, I'm gonna try
[03:05:23] loading this one
[03:05:26] Let's see.
[03:05:27] stories.
[03:05:29] Let's try the Solid Islands version.
[03:05:32] *clicks*
[03:05:33] Let's flick it
[03:05:35] This one's not using streaming, I believe.
[03:05:38] so it might be a little bit slower
[03:05:40] Where are we? First paint around...
[03:05:42] 300 again
[03:05:44] Yeah, 326.
[03:05:46] And then...
[03:05:48] Where's the hydration work?
[03:05:51] Thank you.
[03:05:51] Oh, wow.
[03:05:53] That's small.
[03:05:55] Five milliseconds? Did I get that right?
[03:05:59] Huh, okay.
[03:06:01] Yeah, okay.
[03:06:04] Yeah, that's interesting. It feels like there's a lot more overhead in scheduling
[03:06:08] on a lot of these partial things.  You'll see that there's like, when we did the original create,
[03:06:13] Next like the original next app. It was like a few big blocks, but it you know, I
[03:06:17] is a chunk and most of the partial solutions are much much more sliced
[03:06:22] Um...
[03:06:24] That's interesting.
[03:06:26] I'm gonna do the solid one as one last comparison here, just...
[03:06:30] The normal solids aren't not with the islands or anything fancy.
[03:06:35] You can see the streaming there for a second.
[03:06:39] Let's
[03:06:41] Okay.
[03:06:42] Here we go.
[03:06:47] Oh wow, the streaming made a difference there. The first paint was only in 120 milliseconds. But again, it's just because it showed the bar sooner, but...
[03:06:55] Um...
[03:06:56] finishes up again in the 300s.
[03:07:01] But...
[03:07:01] yeah the hydration cost is more significant here this is
[03:07:06] It's a paint and then there's this big chunk of hydration.  Oh, it's only about six milliseconds.  Oh, that's interesting.  Okay.
[03:07:12] I don't know what to make of this, honestly. Um...
[03:07:19] Yeah, well for streaming, the first paint gets unlocked from the API response timing.
[03:07:27] But yeah.
[03:07:30] It's... it's...
[03:07:32] Thank you.
[03:07:32] Yeah, I don't know.  I think we need to figure out new ways to test this stuff.  Obviously, my page speed insight was not very useful.
[03:07:39] So...
[03:07:41] Yeah, it's interesting.
[03:07:43] Okay.
[03:07:44] I'm actually going to drop quick in here just for a second because I know
[03:07:48] They don't load any JavaScript.
[03:07:52] So their hydration should be
[03:07:54] fairly minimal
[03:07:55] just so that we can understand
[03:07:59] Like six milliseconds of hydration, no one's going to...
[03:08:01] Oh, the streaming there again.
[03:08:03] No placeholder, but this is streaming.
[03:08:08] Thank you.
[03:08:10] where's the first paint?  Yeah, streaming means first paint happens before 300 milliseconds, right?  Yeah.
[03:08:16] Not that much made before, but let's look here.
[03:08:22] Yeah, there's basically no hydration work here.
[03:08:26] It's like...
[03:08:28] It's like a millisecond or something of scripts running. Yeah.
[03:08:32] Page like this is too simple to see anything. That's that's basically the problem in the past  I've been able to use large versions of this page to actually see hydration costs because once you're impartial here and
[03:08:43] We're generally only talking about...
[03:08:47] like for a page like this, like five milliseconds.  But if you're not partial, it's like 10 times as much.
[03:08:53] But...
[03:08:54] *sniff*
[03:08:56] We're not seeing the same with the React version exactly.
[03:09:00] It's harder to see because it's broken up into so many little pieces.
[03:09:03] Yeah, I know.
[03:09:05] I was hoping the page speed would give us better, but...
[03:09:08] Yeah.
[03:09:09] I can understand a little bit at least why there's like confusion here.
[03:09:14] You know, like it doesn't
[03:09:15] seem like a clear win.
[03:09:18] Where, like...
[03:09:19] My experience with this stuff, it has been because like, obviously, when you do islands, and like the Astro and Quick examples, the Marco's apples, you clearly see the benefit. Even the solid version, which has client side routing, you actually see the same sort of benefit.
[03:09:32] Um...
[03:09:34] This is what you are thinking maybe with the server components. I think what's interesting is
[03:09:43] At the beginning of the stream, I was sitting here and I was like, "How do I explain the importance of server components?"
[03:09:52] Yeah, I was already trying a page that had 1500 comments and it was dying on us.  So I like the number of comments isn't like we can't.
[03:10:00] The reason I was doing the 300 comment page is because the the my standard page was like timing out and
[03:10:07] certain solutions.
[03:10:13] Right, but the thing is like...
[03:10:17] Yeah, okay, so let's go to the next stage here. Let's bring back Excalibur and I
[03:10:22] and talk some stuff again.  I think we're done playing with Next right now,  and we're done...
[03:10:27] I don't
[03:10:28] I mean...
[03:10:30] I don't think we're going to see another one. Yeah. PageSpeed Insight is just
[03:10:35] not working for us today.
[03:10:37] so
[03:10:38] Let's get back to our Excalibur fun and...
[03:10:43] talk a bit about
[03:10:47] this statement because...
[03:10:49] People are still kind of thinking, okay...
[03:10:52] Yes, static sites.
[03:10:55] Thank you.
[03:11:00] Thank you.
[03:11:02] You could make that argument, but...
[03:11:06] Let's talk a bit about optimization.
[03:11:09] and nested routing. Right now,
[03:11:12] There was a comment earlier about context, and people were like,
[03:11:15] Blah, blah, blah, context.  The reason context is an issue here is that...
[03:11:21] Um...
[03:11:22] Pretend...
[03:11:23] Is everyone here familiar with nested routing?
[03:11:25] Right? That's like when you have like
[03:11:28] I'm going to change some stuff here. I don't want a background, I want to...
[03:11:33] transparent.
[03:11:35] And I don't want rounded corners, I want edges.
[03:11:38] It's like when you have a layout that's kind of like...
[03:11:41] You know,
[03:11:43] Let's see the best way to do that. I'm gonna do it like this.
[03:11:47] I'm going to do this.
[03:11:48] I'm gonna give it a different color. This one's gonna be...
[03:11:53] This
[03:11:54] And then we're going to do...
[03:11:58] This, okay. Here's my...
[03:12:01] Typical silly nested
[03:12:03] router
[03:12:04] Um...
[03:12:06] Look what I'm getting at is like you have three levels essentially. This is like your nav sidebar. This is your page and
[03:12:13] And then this is like some maybe tabable content that swaps.
[03:12:18] Wow.
[03:12:21] And
[03:12:22] The thing is,
[03:12:25] Thank you.
[03:12:26] In the solid version right now, we're literally...
[03:12:30] The whole thing with the nested routing is if you have some tabs here,
[03:12:34] You know, I can add a tab bar.
[03:12:37] *clap*
[03:12:39] right here and this tab bar can help us
[03:12:42] switch from tab
[03:12:45] A...
[03:12:49] and tab V, okay? I'm just like
[03:12:51] excuse my terrible drawing but
[03:12:53] We got tab.
[03:12:54] A.
[03:12:55] It's just like the fonts
[03:12:57] whatever now it won't resize back up doesn't matter okay tab a and tab b okay we swap between these two right
[03:13:05] And then it just swaps the screen section.
[03:13:11] In solid start right now, we're literally redrawing the whole page.
[03:13:15] and then just sending this in. So we're refetching all the data and everything works. Context works.
[03:13:20] That's right now.
[03:13:21] But if you wanted
[03:13:24] To only...
[03:13:26] Render this.
[03:13:27] Wow.
[03:13:28] There's a little problem.
[03:13:30] I mean, you'd be like, okay, that's fine.  But then what if there's some kind of data?  Like what if this outer page here has a context, right?
[03:13:37] And then...
[03:13:39] You render it all on the server.
[03:13:41] And you don't...
[03:13:43] serialize the data across because you don't need it. You only need to serialize like the islands data, like the stuff that you actually pass into the interactive components.
[03:13:51] Thank you.
[03:13:53] That date is gone now. It didn't even make it.
[03:13:56] Like...
[03:13:57] Like maybe it made it
[03:13:59] to the client because you need it to, you know, it's in the code or whatever to proceed the store. But now you update, you click around, you play around and you update data in the store. Now the data in the store is in a different state.
[03:14:11] When you go into this tab and go to re-render this on the server,
[03:14:16] it does not have the data in the context up here.
[03:14:19] like that's updated on the client. You'd have to send the contacts back with the request for this to actually know
[03:14:27] like be able to read from it.
[03:14:30] This is kind of the root of the context problem.
[03:14:34] Because if you want to just only render this,  and even if you want to render the whole page,  there's still this awkwardness of the fact that the context could have changed in the client.
[03:14:44] So like, the thing is, if you embrace this thinking,
[03:14:50] Completely.
[03:14:53] and assume that this is going to be independent,  each one of these is going to be independent.  It has an interesting side effect.
[03:14:57] Because now...
[03:15:00] Sure, you can just render this independently, but more so,
[03:15:03] when the original request comes in, in theory you can render all of these independently. So you can actually parallelize not just the data fetching but actually
[03:15:12] The rendering.
[03:15:14] of the whole tree because there's no concern about context.
[03:15:18] - The first time I was in the first time, I was in the first time.
[03:15:20] Now,
[03:15:22] in solid
[03:15:25] Thank you.
[03:15:26] this router, we actually pass the data through to the next nested layer. So like, while it's not blocking, and we can let you just do it all, we also give you, we do call the data functions from top to bottom. So you could make a dependency between the different layers, like you could be like, Oh, wait on the fetching of the first set of data, like get me the user on this part to actually fetch the user details, you can make that link, even though it's non blocking, like if you don't make the link, it just fetches them all in parallel, you can actually like chain the promises.
[03:15:56] All right.
[03:15:56] But if you are saying like, I'm going to parallelize all these fetches, you can't actually chain the promises like that.  You actually have to be like, no, no, actually, we're not going to do that.  We're going to say that if this needs user and this needs user, they both need to fetch it.
[03:16:13] Of course, you don't want to fetch...
[03:16:15] You don't want to fetch the user twice.  If this needs user and this needs user, you don't want to fetch it twice.  So you need to have a shared cache.  So even if they're parallelized fetching, this will start running first.  Get to something async.
[03:16:29] and then like let's another process take over, like this one and continue rendering.  When this one hits it and goes fetch user, it should be like, oh no, this one's already fetching user.  So how do you do that?  Well, one way you can do that is patch global fetch.
[03:16:41] I'm hoping this makes sense to why
[03:16:45] they did the API approach that they did.
[03:16:49] It's because they can't share it. So it's, I mean, to be fair, we've been doing this kind of caching in like React query for ages on the client side.
[03:16:59] But this is essentially the reason for this. They need like while it's in flight,
[03:17:05] So if it fetches by itself, there's nothing in the cache there, it'll grab the user and do it.  But if it's fetching them both in parallel, it'll be able to reuse the same fetch for both of them.
[03:17:16] That's why they did it.
[03:17:18] But, so that's a good optimization.
[03:17:21] And this is important optimization.
[03:17:24] The second level of optimization that I want to talk about that I don't believe they're doing right now, and we haven't talked, but I want to bring into people's
[03:17:33] - I love it.
[03:17:34] Thank you.
[03:17:35] Yeah, this is probably not a great idea.
[03:17:39] When I talked to them, they said it was the best of many not great ideas.
[03:17:44] They had like five options and they've
[03:17:47] debated them for a while and that's just, they were just like, that seems like the least bad. I've talked to people who work on browser type infrastructure and standards, people like Luca from Dino and stuff, and they have much different opinion of what the least worst option should be.
[03:18:03] but
[03:18:04] you know
[03:18:05] It's a...
[03:18:07] And I'm sure anyone working on Bun would have a similar opinion. You know what I mean? Like, this is...
[03:18:13] Yeah, you know, there's other ways.  But in terms of ease in delivering the package, I get where you end up there.  But now let's...
[03:18:21] Let's put our client islands in here somewhere, like...
[03:18:26] Let's put some client islands in here.
[03:18:31] I'm just arbitrary throwing some Clyde islands in here. Okay now  What I want to kind of point out is
[03:18:37] On initial render, you do need to render
[03:18:41] all of these because you need you want to show the whole page
[03:18:45] And when you go to a new navigation, like a new one of these, you're going to want to render these as well, because you again want the page to show up and not like,
[03:18:52] do some weird thing where you need the JavaScript to render it and stuff. You want to server render it all.  However, there's a difference in semantics between what I'd consider navigation and reload semantics.
[03:19:04] And I think this is an important mechanical piece, because like, if you're on a page and doing that search bar or whatever, and you're actually reloading,
[03:19:12] Perhaps like in that case, it's not great because we replace everything but there's other things with like data mutation like you're updating some data field on  like a user like this a user panel and
[03:19:21] and you're updating a name, and it's a client component, and
[03:19:26] you show the name out here.  So you want to like,  I don't know the exact reason,  but let's say you want to refresh the data  rather than replace it.  This is the one thing
[03:19:36] that an inner HTML doesn't solve.  You actually need to diff it if you actually want to do the swap.  Because if you just did an inner HTML, you'd lose all this
[03:19:45] Even if you had a smart way of doing an inner HTML  where you just diffed the islands and looked for them,  you actually want, like there's so much state,  there is potential still for browser state out here  that you wanna preserve, okay?  So this is why you have a diff.
[03:19:57] But
[03:19:58] What's interesting in that world is
[03:20:01] When you diff it like that, when you hit a client component,
[03:20:04] that you've already seen before
[03:20:07] you don't replace it, right? Because you want to preserve the state in this component.
[03:20:11] so
[03:20:13] If you think about it,
[03:20:14] In this scenario of refreshing this green panel,
[03:20:17] and getting the same client components back
[03:20:20] You don't need to render those client components
[03:20:25] on the server again. Right? Because you're going to throw it away anyways. You're going to use the client component that's there. What you do need is the new props coming in, because the server might change the props, so the client component might change, but you don't need to, you want to keep the state of it. So you're not going to,
[03:20:40] you might not need to actually render it on the server.  So what's interesting about this,  and the reason I'm bringing this out is,  in theory, on a refresh type operation,  you actually render the HTML on the outside  and then only the JSON for this.
[03:20:57] and
[03:21:01] I think that's kind of an interesting...
[03:21:05] like thought
[03:21:06] Sorry, quick question came in here. How do we promise to wait on each other with the nested routes?
[03:21:10] They don't in the next version because they've decoupled it.
[03:21:14] You have to literally just fetch them all independently.
[03:21:17] and then use a cache so that they share the same request.
[03:21:21] So
[03:21:23] If it's already in the cache on the nested route, then you're fine and you can just chain it the way you want to, but you have to make the fetch again yourself.
[03:21:30] Okay.
[03:21:31] So what, but here's an interesting thought experiment  for people who are worried about the scalability of this.  'Cause obviously this benefits mostly static pages  and you have less JavaScript and all that.
[03:21:40] But what happens if you do this?
[03:21:46] I just want to throw this out there for people.
[03:21:48] What happens if we do this? What happens if the client component basically
[03:21:53] is...
[03:21:55] this whole...
[03:21:58] section of the road
[03:22:03] Thank you.
[03:22:05] This is just an extreme example, but I wanted to show this because I want people starting to think about this kind of scenario.
[03:22:11] Now, in theory,
[03:22:13] If you did a mutation here,
[03:22:15] and told her to go back to the server,
[03:22:17] kind of the same way you would, you know, like on the remix, you kind of style or whatever,  whatever, like when you when you do a mutation in this zone,
[03:22:26] What is this green server component section returning?  Well, there's no markup,  because it's literally on the client component.  If we had that optimization, then on refresh,  we don't need to re-render the client component.
[03:22:36] In fact, all we need to do is serialize the JSON props to come in.
[03:22:40] And the reason I want to show this and emphasize this is because in theory,
[03:22:45] In this scenario,
[03:22:46] All your shipping...
[03:22:48] is a JSON API.
[03:22:52] we've actually scaled our RSCs
[03:22:55] Back up.
[03:22:56] to a single page app.
[03:23:01] Does that make sense?
[03:23:03] Because you don't need to render this on the server or send it.
[03:23:09] And if you're just swapping this out, and this already exists, literally the operation is like, here's the new props.
[03:23:18] I'm going to go to the next one.
[03:23:21] Thank you.
[03:23:21] No? I was hoping this would make sense. I've just been thinking about this a lot because
[03:23:29] There is the ability with this approach
[03:23:35] to use as much interactivity or as little as you want.
[03:23:41] And what I wanted to show here is...
[03:23:43] Thank you.
[03:23:44] If this section just becomes the most interactive, crazy, spa-like thing,
[03:23:51] you can still basically scale it to a JSON API.
[03:23:55] Thank you.
[03:24:00] Yeah, it is a bit, but the key, key, key difference here,  and we brought up the Astro example at the beginning here,
[03:24:07] Where if someone's like, oh, it's like putting an Astro app in your thing.  It is a bit, except...
[03:24:12] when you consider
[03:24:13] that the whole thing works like a client-side, like, preserved state like a client and does all this sort of stuff, like,
[03:24:24] I already mentioned when we use solid movies here.
[03:24:28] You're going to have a hard time telling that this isn't a single page app.
[03:24:31] Like, I chose a loading indicator that looks like the browser, but that's not what's going on here.  It feels like it.  You could have animation.  You could do all the single-page app type stuff.  So what I'm saying is like...
[03:24:48] If you could optimize the parallelization
[03:24:52] so that they're not
[03:24:56] overworking, like they're not getting blocked, and scale up the JavaScript to where you need it.
[03:25:01] So that maybe you're only like,  it doesn't have to take the whole thing.  Maybe you have indicated,  you know,
[03:25:06] cached static HTML parts in here or something. But essentially, if you can scale it up to that point where
[03:25:12] For certain things, you actually only need to render the JS as part of this thing.
[03:25:17] Your experience scales from no JavaScript to all the JavaScript seamlessly.  It doesn't feel like going from an MPA to an SPA.  It actually feels like the whole thing is...
[03:25:27] an SPA
[03:25:29] Except it's not.
[03:25:32] you don't suffer the performance.
[03:25:38] Thank you.
[03:25:40] Thank you.
[03:25:42] It is a bit like a React spa, but what I say define a spa is a routing.
[03:25:46] And that routing aspect
[03:25:48] is the whole app.
[03:25:51] This is why when I drew that diagram here,
[03:25:54] I felt like it really...
[03:25:57] Does...
[03:25:57] have the potential to cover most of this range if implemented
[03:26:03] Um...
[03:26:04] efficiently.
[03:26:06] We just need new patterns around caching that aren't based on JSON caching, but are based on
[03:26:12] view caching like this. I mean it takes a different kind of mindset to understand here but this is
[03:26:21] This is how...
[03:26:23] you
[03:26:24] Git
[03:26:25] your MPA performance and your spa performance, like in a way,
[03:26:31] that if, again, there's a big ifs in pulling off the developer experience, figuring out the right primitives, doing all that, but in a way that
[03:26:39] Like...
[03:26:40] doesn't sacrifice it in necessarily in that really awkward sense of like, we need all the JavaScript on the client. Like you can in parts.
[03:26:52] But you don't need it.
[03:26:58] Thank you.
[03:27:00] I mean, it could. I did the mental exercise whether it could cover the whole spectrum.
[03:27:07] For me, there's a DX concern when we get into here.
[03:27:12] that I haven't quite solved, but it might be solvable.
[03:27:21] Well, it's funny you mention Vue because Vue has stuff like, was it...
[03:27:25] keep alive and stuff, that kind of...
[03:27:28] mentality, you're starting to see show up in React RFCs.
[03:27:32] They're now...
[03:27:33] They're now thinking about this.
[03:27:38] It's funny because everyone's like, "Oh, what about off screen?" You know, I was talking to someone the other day about it and I'm like, "Yeah, yeah, off screen." Vue has...
[03:27:47] been doing this kind of stuff for a while now.
[03:27:49] um...
[03:27:52] So yeah, it is interesting to me.  I just wanted to kind of point out that I think that
[03:27:58] there's problems to solve. Context in this model is kind of a nightmare,
[03:28:04] Yeah.
[03:28:06] But you see if you can figure out a way to solve context,
[03:28:12] I mean, it might involve a little bit more of...
[03:28:14] back and forth
[03:28:15] data communication. Maybe that's why React serializing more stuff than they should. Maybe there's a right balance to find.
[03:28:21] But...
[03:28:22] essentially...
[03:28:24] If you can figure out
[03:28:26] those elements...
[03:28:28] this model
[03:28:30] has legs is really what I wanted to say because I feel like
[03:28:35] even like when we were looking at our diagram here and we were talking about
[03:28:40] eat.
[03:28:40] Going from this to this
[03:28:45] Isn't
[03:28:46] like what you want going from small pieces to big pieces.
[03:28:50] What you want is just to have the appropriately sized pieces where you need them.
[03:28:55] and have it feel seamless.
[03:28:59] And to be fair, going from this to this can do that as well.
[03:29:02] But does it let you author...
[03:29:05] in a way...
[03:29:08] that, um,
[03:29:11] empowers you to do so. So that's what I'm exploring. And for me, this has largely been, you know, an element of DX and UX consideration. And I wanted to just kind of point this out because I don't know if this is as well understood. I don't know if people are talking about this aspect of the server component model and potential optimizations. And...
[03:29:32] like what this looks like.  Cause today everyone's like,  Oh,  it's like,  most people are like,  what is this?  I don't know what this is.  The people who do go,  it's like,  Oh,  so it's kind of like islands.  Yeah.
[03:29:41] I think I'm pretty sure the long game here is
[03:29:44] is like...
[03:29:47] is that shot at having something that covers the whole spectrum.
[03:29:54] Thank you.
[03:29:55] All right.
[03:29:56] I think I'm good on this...
[03:29:59] this topic.
[03:30:00] Thank you.
[03:30:01] Thank you.
[03:30:02] Just a second.
[03:30:15] Alright, alright, alright. Um, we should probably start talking this week in JavaScript. I'm sorry that part went long.
[03:30:23] But
[03:30:24] Is Twitch still alive?
[03:30:26] Twitch is still alive.
[03:30:27] Got a couple subs in there.  Thank you very much, Jeffrey Hicks.  Subscribe to Tier 1.
[03:30:33] Taternator also with the Prime Sub.
[03:30:36] Sorry if you're not keeping up on that.
[03:30:38] But...
[03:30:40] Yeah, it's a heavy topic.
[03:30:44] I keep chatting gauge. I can only kind of get one thing going on.
[03:30:48] I don't know, anyone have any questions about this? I feel like I've been spilling a whole bunch.
[03:30:52] Um...
[03:30:53] What is this? Props? Get Service. I lost context of that.
[03:30:58] Yeah, yeah. Next13 is interesting, but I think the ideas behind it are even bigger than the implementation itself.
[03:31:07] *sniff*
[03:31:08] Any words in running two apps versus running an app twice? Huh.
[03:31:14] Yeah, I mean...
[03:31:16] that that's that's interesting to you can go back here right
[03:31:19] Because what you notice is two apps
[03:31:22] running an app twice.
[03:31:24] Um...
[03:31:26] What's interesting about this model is you run less of the app twice.
[03:31:31] Um...
[03:31:33] Thank you.
[03:31:34] You could argue that with resumability...
[03:31:38] that
[03:31:39] that last little bit
[03:31:41] of running twice, you can minimize from a startup, right?
[03:31:48] That's kind of like the progression.
[03:31:49] from my perspective.
[03:31:51] I do think it's interesting though, is that when the boundaries here are very clear like I wrote it,
[03:31:57] showed here with a brown versus blue.
[03:32:00] that, um...
[03:32:02] When you have that kind of clarity, it's interesting because, like look at this, this is still writing
[03:32:09] Two apps? Is this writing two apps?
[03:32:14] Like, is there a reason?
[03:32:16] I think about React server components. Sure we did use client and it kind of felt similar, but like all the patterns, like you don't use hooks and all this stuff, it's like a different framework wrapping React.
[03:32:27] maybe like Astro,  even if you look at that with the islands,  like there's Astro wrapping your,  your react components,  like,
[03:32:34] we're
[03:32:35] we might be kind of back because like here we wanted it all to be the same.  And then we're like,  that's not a good mentality.  So then we come here and we're like,  okay,  okay,
[03:32:44] Let's keep most of the stuff maybe only on the server and do this.  We're back to writing two apps again, someone might argue.
[03:32:51] Right?
[03:32:53] But...
[03:32:54] I think the key, key difference here, and where this fell apart, is that these two apps...
[03:33:02] Don't do the ERB NG4...
[03:33:06] issue.
[03:33:08] Like,
[03:33:09] - Yeah.
[03:33:10] instead of having a
[03:33:11] I can't draw it here, unfortunately, but with this one...
[03:33:17] The JavaScript app is probably smaller than the Rails app, so you'd have like
[03:33:20] this or even maybe something that looked like this sitting on your rails, the difference...
[03:33:25] here is that
[03:33:27] The brown app has holes where the blue...
[03:33:31] pieces fit in. Like they don't
[03:33:34] They don't actually uh...
[03:33:36] like overlap.
[03:33:39] Um...
[03:33:40] which means that
[03:33:41] they fit across the boundary. You don't have... We used to avoid overlap in the Rails days,
[03:33:48] By like just going, okay, client handle it.  But this actually now is like...
[03:33:53] isom- it's not server and client
[03:33:56] It's server and isomorphic.
[03:34:00] Thank you.
[03:34:01] Don't get me wrong. When I see this, I start thinking here. I'm like, okay, if Rust is really fast on the back end, can I take this mentality and...
[03:34:09] and have this Rust and have this be isomorphic JavaScript.
[03:34:13] or whatever. The reason I'm thinking this way is because
[03:34:19] For this model to work,
[03:34:21] The blue parts have to run on both sides.
[03:34:24] That was the flaw here.
[03:34:26] The reason we have two apps is because
[03:34:29] Like...
[03:34:30] they actually
[03:34:32] handle the same responsibilities. They can't delegate.
[03:34:34] If we can actually
[03:34:36] have
[03:34:38] No overlap here.
[03:34:40] .
[03:34:41] a lot of that pain goes away, enough that I could even argue
[03:34:45] that server components can be written in a different language. As long as you could do the JavaScript components
[03:34:51] like the client components or isomorphic components
[03:34:56] as a full piece.
[03:34:57] I don't know how to pull that off.  If anyone has ideas, I'm more than open.
[03:35:06] *sniff*
[03:35:07] Yeah, yeah, yeah. I mean, this is sort of what I was getting at. Yeah, because, but I'm saying there's actually a difference between this and
[03:35:14] and the jQuery, even web components fall more on this side than this side.  The key is the back end here
[03:35:21] needs to have
[03:35:22] holes in it that the JavaScript fits in  that runs on the server and the client.  You need both sides.  It's gotta be, it's not, it can't be,
[03:35:31] As I said, it's not about server and client, it's about server and isomorphic.
[03:35:42] Right.
[03:35:43] There's an interesting question there, right? Because you could also say like wouldn't it be great if you could just pretend it was like this blue thing and then end up like this?
[03:35:50] But...
[03:35:51] that might have limitations to what you can optimize, at least without a super smart compiler.
[03:36:05] Thank you.
[03:36:07] Right, but like...
[03:36:09] This is this is what I was trying to say because I don't know if this is actually a good thing. I
[03:36:13] -
[03:36:16] because this is where I've been like this is where the question of the for the future kind of sits in here because like
[03:36:22] Um...
[03:36:25] Like, don't get me wrong.
[03:36:27] Solid Start does this as well.  We have server functions and make that...
[03:36:31] feel more seamless.
[03:36:33] Um...
[03:36:34] Like that that's in a sense I
[03:36:37] That's the single page app mentality.
[03:36:40] But...
[03:36:41] Even Quick recognizes that they actually want to server render the pages
[03:36:46] And at that point...
[03:36:47] I mean, I think there's a tension between going like, hey...
[03:36:50] Do...
[03:36:52] Is that isomorphic experience actually the right experience?
[03:36:56] especially if most of this is brown, you can optimize for it.
[03:37:00] Like...
[03:37:01] Oh.
[03:37:02] It's tricky.
[03:37:04] to say the least.
[03:37:05] If you're gonna end up like all blue here in the end,  then yeah, definitely.  But if you're not gonna end up all blue,
[03:37:14] which is kind of like what we talked about all day today.
[03:37:16] You start asking
[03:37:18] If it wouldn't be better if you could actually separate it and optimize the brown part to be even better.
[03:37:23] than what you could automate.
[03:37:31] Ah.
[03:37:33] I mean, there's so many options here, Marco Frontends.  Like...
[03:37:38] *sigh*
[03:37:39] I think micro frontends
[03:37:42] *sigh*
[03:37:44] I mean, you could handle this problem at multiple layers.
[03:37:47] Um...
[03:37:49] from all the way from the bundler to the package manager to the
[03:37:53] micro front ends
[03:37:56] *sigh*
[03:37:59] When you get to the need for micro front ends, I don't think there's a great or better option.
[03:38:05] I think that's kind of where you are at.  The hope is that you can find other ways to mitigate it beforehand.
[03:38:20] So we need a React Assistant shared on the front and back end, and if we isolate the interactive components, then we can write server components in any language.
[03:38:28] Yeah, I mean...
[03:38:30] The thing is, the server doesn't even need a reactive system.  Not really.  I mean...
[03:38:35] that...
[03:38:36] That part...
[03:38:38] Like, so the isomorphic side, it doesn't...
[03:38:41] But the second part I agree.
[03:38:45] I mean, there is potential here as if we can isolate the interactive components, we could write the server components in any language.
[03:38:52] I believe that.
[03:38:59] Thank you.
[03:39:01] So, yeah, I mean, it's unclear, to say the least.  Um...
[03:39:07] you know
[03:39:09] I do think that there's an argument between these two mentalities. Like even though I clearly show this as an evolution,
[03:39:18] these two mentalities are still very strong.
[03:39:25] right now. And I think
[03:39:28] I think it's interesting to me...
[03:39:33] how much people are betting more on the SC Island side.
[03:39:37] Now, like, it feels like they, like, they felt like they exhausted this approach.
[03:39:41] So, as I said, this is what my interest in Quick is.  Because to a certain degree, Quick is like...
[03:39:47] Bye.
[03:39:48] It could do either.
[03:39:50] but it's like kind of like
[03:39:52] I
[03:39:53] The fact they can do this is its unique part.
[03:39:56] - Yeah.
[03:39:56] Like the fact that you do this to this.
[03:39:59] But it's unclear...
[03:40:00] if that's what you want.
[03:40:03] So it's like it's one of those
[03:40:05] I think this is going to be very interesting in the next...
[03:40:08] especially like couple years but like
[03:40:12] in terms of how this develops.
[03:40:17] There's a fork in the road.
[03:40:20] Thank you.
[03:40:20] here again.
[03:40:23] And I didn't see it until very recently.
[03:40:25] Because I...
[03:40:26] Like...
[03:40:27] I think part of the friction with React Server components is actually on the DX level.
[03:40:34] I think that it fools you into thinking that you are doing it like this when you're not.  And I think that's...
[03:40:40] That's kind of where the challenge is.
[03:40:42] Thank you.
[03:40:45] Anyway.
[03:40:46] Right?
[03:40:48] I think the technology approach has...
[03:40:53] tons of room to be
[03:40:54] Um...
[03:40:56] optimized, but it's like I was talking about a minute ago, but I think the tricky part is like...
[03:41:05] figuring out what the right
[03:41:08] like
[03:41:09] Authoring experiences because we spent a lot of time criticizing the
[03:41:15] like the old version of this, you know.
[03:41:19] And even React might have...
[03:41:21] Some people from React might have even criticized this version of this.
[03:41:25] And yet...
[03:41:27] Thank you.
[03:41:29] Thank you.
[03:41:30] You know, there's some power here, especially on the server side, but we're not going to see until we unlock it.  All right.  All right.  Let's kind of wind this into this week in JavaScript.  Let's see if I can...
[03:41:43] get that all prepped up so we're good to go.
[03:41:47] Um...
[03:41:50] I think we're getting ready for that part of the show.
[03:41:58] All right.
[03:42:01] -
[03:42:06] Yeah, this is going to be an interesting one because...  I don't know an interesting one for technology side, but there is a lot of...
[03:42:13] Hard topics to deal with this week.
[03:42:18] I should have made notes beforehand so I don't like accidentally
[03:42:22] jump into ones preemptively.
[03:42:25] But like, there's just...
[03:42:26] There is definitely...
[03:42:28] um,
[03:42:29] some challenges. Um...
[03:42:37] Adjust my position here a little bit.
[03:42:39] Um,  some challenges,  uh,
[03:42:44] lot of
[03:42:45] for me at least, interesting or difficult conversations.
[03:42:49] I want to figure out...
[03:42:53] Thank you.
[03:42:57] All right.
[03:43:01] All right.
[03:43:01] - Good.
[03:43:02] second
[03:43:37] Sorry, I'm muted again. I know that makes people all uh...
[03:43:42] Thank you.
[03:43:43] - What?
[03:43:45] - Thank you.
[03:43:48] Uh, let's see here.
[03:44:01] Sorry, I missed this reference.
[03:44:04] What's this about?
[03:44:08] Oh, did he like play a video and walked away from the screen for a bit?
[03:44:13] anyways let's get ourselves set up here
[03:44:20] All right.
[03:44:21] Thank you.
[03:44:22] - All right.
[03:44:26] Oh, is this one I-- sorry, I forgot.  Yes, this is what I actually have to--
[03:44:31] Remind you all to like the YouTube video if you're watching right now.
[03:44:34] You can hit the thumbs up
[03:44:40] Alright, yeah
[03:44:42] Yeah.
[03:44:46] Yeah, no, that's good.
[03:44:49] Tell them they're bad people if they don't.
[03:44:52] Oh, man.
[03:44:54] too much. Let me check on  Twitch for a second, too. Sorry, I was just getting my...
[03:44:58] My screen's all ready.
[03:45:00] So
[03:45:01] No, this is...
[03:45:02] This is awesome. It's
[03:45:06] Yeah.
[03:45:06] we've had, you know, slowly over time, just
[03:45:10] better engagement and stuff and it's great because it means more people in the chat more questions more
[03:45:15] More stuff, you know?
[03:45:16] So...
[03:45:17] Let's let's uh...
[03:45:19] Let's just keep this rolling and get right into it, okay?
[03:45:25] Let's go.
[03:45:27] So I'd like to talk about this week in JavaScript.
[03:45:31] This Week in JavaScript has actually been...
[03:45:35] a tricky one with a lot of challenging topics, and I will try and get into them the best I can.
[03:45:41] in the time we have. It's less about the tech, but
[03:45:44] I do want to showcase a little bit of stuff before we get too into it.
[03:45:49] which starts with, just a reminder again about the New York meetup,
[03:45:52] Unfortunately, actually, I realize now that I'm broadcasting it,
[03:45:56] It is...
[03:45:57] full, we actually have a waiting list. We had more interest in this event than we've had on any of our previous meetups. And we only got a space with 60 people. And now there's a waiting list. Hopefully, everyone who signed up is actually coming. So
[03:46:10] Um...
[03:46:12] Yeah.
[03:46:14] I'm very stoked for this event.  It'll be my first time going to New York.  So that's very cool.
[03:46:20] But yeah, let's get into things.
[03:46:24] um
[03:46:28] I do want to also promote this space.
[03:46:32] which has got a bunch of great speakers.
[03:46:36] Daniel from Nuxt, myself,
[03:46:38] Fred from Astro, Michiel from Quick, and Dylan from Marco. I want less JavaScript for Christmas. So focusing on probably partial hydration and all the great stuff. It's going to be Twitter space. Come ready with your questions for a great discussion between a bunch of framework authors.
[03:46:55] And it's kind of interesting because a lot of people...
[03:46:57] like
[03:46:58] seem to like this kind of concept. I've been asked repeatedly to get on these panels. I did one for Jamstack Conf, I did one for Beat Conf,
[03:47:06] Dot Media does them periodically too, where we get a lot of thought leaders
[03:47:12] together and do it. And because online formats have now become more popular,
[03:47:17] It's actually really easy to do this compared to before.
[03:47:21] where you can get these conversations between
[03:47:24] experts, people researching this stuff in real time and seeing, you know, how things are progressing, you know, like conversations that might have never happened before, like thoughts that only happened this last week, you know, and see how that progresses. And I mean, the excitement around this event couldn't, couldn't be any bigger. I mean,
[03:47:43] it's funny first thing I get is  JS equals coal  but you know like people just talking about like
[03:47:49] you know, getting the people together, like...
[03:47:52] You know, just like a lot of real positivity and people just being like, great panel, let's go, let's go, you know.
[03:47:59] You know, like...
[03:48:00] Like just...
[03:48:01] excitement for being able to see this kind of conversation possible.
[03:48:06] But I mean, I want to point it out here, and I wasn't the only one to point it out here.  Do you see something in common about...
[03:48:13] this panel.
[03:48:18] If only Rich was there.  Yeah.  Yeah, I...
[03:48:21] I don't know if...
[03:48:23] If...
[03:48:24] if Kevin, was it Kevin? Yeah. Re, uh, Kelvin reached out. Um, but, uh,
[03:48:31] Yeah, I mean...
[03:48:32] We are where we are.
[03:48:34] No React.
[03:48:35] Yeah, I mean, this is part of where the perception is, even like, because server components, I think, fit into this thing.  But if you noticed...
[03:48:42] all of these people have been very buddy-buddy, getting on panels, talking with each other, cross
[03:48:48] promoting all this stuff and I
[03:48:53] Yeah, you know, it is...
[03:48:59] It is definitely a consideration.  There could be some more people who make this kind of event interesting.  But I'm trying to get it.  Like, look at the people you just suggested that who weren't there.
[03:49:08] Viteris as well, who...
[03:49:10] Who should we get from React to talk?
[03:49:20] Any ideas who we should get from React to talk at this event?
[03:49:24] or...
[03:49:24] Who...
[03:49:26] Remix, kind of, yeah, maybe.  Get Ryan Florence or whatever.
[03:49:30] Or, um...
[03:49:32] Michael or...
[03:49:33] Chance
[03:49:34] or, you know,
[03:49:37] Josh Larson, okay. This is a good event and I want to go to it, and I'm speaking at it, but I want to point something out here that I've had to deal with and I think it's an important topic.
[03:49:51] Have you noticed that every single person we've looked at or talked about is a white male?
[03:49:58] and
[03:50:00] Thank you.
[03:50:01] *cough*
[03:50:02] This has been...
[03:50:04] challenge because people want to see this kind of content put it together and
[03:50:10] There...  There...
[03:50:12] All right.
[03:50:13] There is a real concern about
[03:50:15] about this
[03:50:16] Thank you.
[03:50:17] Often...
[03:50:18] as a speaker it's actually one of those things that's kind of hard to navigate.  I want to talk about this because
[03:50:26] Yeah.
[03:50:27] Like...
[03:50:28] There is a decent amount of
[03:50:31] of concern here that's real like
[03:50:34] I'm talking about...
[03:50:36] you know, big names,
[03:50:38] And it's real, like,
[03:50:41] Fred was talking about this too because like you you you sign up for an event and
[03:50:45] And you're like...
[03:50:47] And most of the time with the bench, you don't know the lineup and stuff, and you're just kind of like, "Okay, I'm going to go with it." You don't know what's going to happen, and then you find out that
[03:50:54] you know, representation is not that great.
[03:50:59] Sometimes if you sign up for an event,
[03:51:01] And I don't feel like you can plead ignorance, and this is one of the challenges, like because you know if someone picks a topic,
[03:51:07] Like exactly who's going to be invited.
[03:51:11] And this is something I've been kind of struggling with and trying to figure out how to approach.
[03:51:17] I started thinking about all the panels that I've been on the last year.
[03:51:21] And...
[03:51:22] Like, this is not an uncommon event.
[03:51:26] I think what was really cool actually was that the Jamstack conf...
[03:51:29] one. Actually,
[03:51:32] Um,
[03:51:33] tried to diversify a bit.  You know, we had, you know,
[03:51:37] And I hate to do this to Jessica, but we had a female speaker for Angular team, the host,
[03:51:48] tried to like,
[03:51:49] try to keep the conversation, you know, have that...
[03:51:54] panel not just be another one of these
[03:51:58] these sort of things.
[03:52:01] But like...
[03:52:02] It's funny, when we posted up the Jamstack
[03:52:07] panel
[03:52:08] Um,
[03:52:09] Zach did from Eleventy, you know, someone pointed out that everyone was white.
[03:52:14] in that one that you know we didn't do too good on the pigmentation angle and they're they're  absolutely right
[03:52:20] Um...
[03:52:23] *sigh*
[03:52:26] Okay.
[03:52:27] There is...
[03:52:29] Thank you.
[03:52:30] I mean, you can look at numbers.  I mean...
[03:52:35] If you're watching this stream,
[03:52:39] I think only 1.6%
[03:52:41] percent of you are female.
[03:52:42] According to YouTube.
[03:52:45] Um...
[03:52:46] Just under 2%
[03:52:48] This is a pretty...
[03:52:51] difficult
[03:52:53] topic
[03:52:54] to navigate.
[03:52:56] Right?
[03:52:56] Because...
[03:52:58] I mean, as Ali pointed out, I'm sure there's an overlap of speakers, right?  It's kind of pointing out that this was actually
[03:53:07] After...
[03:53:09] a different conference or a release event here called Serverless is Ready.
[03:53:14] Um,
[03:53:16] launched
[03:53:18] And they had an all-male lineup.
[03:53:20] It's a little different than an expert panel.
[03:53:23] Okay.
[03:53:24] for a number of reasons because
[03:53:27] Well...
[03:53:30] There is like...
[03:53:34] Thank you.
[03:53:35] There's maybe more variety on the type of conversation you want to have.
[03:53:40] There's plenty of people who would be suitable for the topics for serverless, you know, great, great champions in this area. So that was definitely kind of an oversight.
[03:53:50] My understanding on this event, because I was also invited to this event,
[03:53:55] was that
[03:53:56] They reached out to some people they knew, reached out to companies that were part
[03:54:00] of it to celebrate the release event, and then this is just the line that they ended up with. And they didn't really
[03:54:07] give it too much thought
[03:54:09] And then it kind of
[03:54:11] It kind of blew up on social.
[03:54:14] Which is awkward because as a speaker you look at it and you're like, "Yep,
[03:54:16] This could have been different.
[03:54:27] And this is a reasonable response, but the thing is...
[03:54:31] This response doesn't lead to things...
[03:54:35] the situation improving it just
[03:54:38] we end up propagating
[03:54:40] the
[03:54:41] same
[03:54:44] the same  and don't get me wrong  it's it's
[03:54:47] It's tricky because...
[03:54:51] Ah...
[03:54:53] So
[03:54:54] There is a balance here.
[03:54:56] You can look at the history of...
[03:54:59] Like if a panel is going to be all the framework authors and that's the angle, then like what are you going to do about it?
[03:55:04] I mean, what you can do is look at the...
[03:55:07] promoters history and look at the different types of panels they've done over time.
[03:55:11] you know
[03:55:12] You can put a panel as part of a
[03:55:14] larger event that has, you know,
[03:55:16] more balance on diversity.
[03:55:19] more representation.
[03:55:31] Right. So I'm just speaking from a speaker's perspective. I'm not...
[03:55:36] I'm not a host, I'm not putting this stuff on.
[03:55:38] Um...
[03:55:39] It's just, I get these invites all the time and you start like reflecting on it and
[03:55:44] Um...
[03:55:45] I think...
[03:55:46] Fred had one. He's like, I'm adding a requirement for speaker opportunities. I accept...
[03:55:49] going forward online and in person is fired by sixty five
[03:55:53] speaker writer
[03:55:55] For conference organizers, you should already be seeing diversity of your lineup when you select your speakers, to paraphrase,
[03:55:59] Even if...
[03:56:00] You don't care. It's okay.
[03:56:02] Consider it an act of self-preservation.
[03:56:04] I like this, I don't know if this advice applies to every online event. Simply suggest a real thumb. If you call your event a conference, it's probably big enough to diversity in your speaker line.
[03:56:15] And he's saying, the last two events I've been invited to ended up with all male lineups, and actually all white male to be specific. I'm glad no one made like, this is going to be a white Christmas joke or whatever.
[03:56:26] But yeah, definitely both received blowback and were caught off guard.
[03:56:34] And one event was canceled about it.
[03:56:35] Yeah, and I didn't talk about serverless comp was
[03:56:39] actually
[03:56:40] Cancelled.
[03:56:41] Um, there, there was, um,
[03:56:46] There was way more than I'm going to show on stream right now in terms of blowback on this.  This one kind of got big and I had even people reach out to me personally about it being sketchy.  And the thing is like having known the promoters, they literally just picked like half a dozen people and organizations that made sense for their product launch.  And we're like, let's have it speak on that.  They were people like, oh, how you didn't do a call for papers on this.  It wasn't a conference in a real sense.  They called it a conference, but it was a launch event.
[03:57:16] typical process. It was not a typical conference. It was literally to launch their product.
[03:57:22] Um...
[03:57:24] But it was enough that...
[03:57:26] people felt uncomfortable speaking, you know, it was awkward and it was,
[03:57:30] And I think reasonably so.  So, like, they canceled it, but they did something interesting.  They didn't actually tell...
[03:57:38] Anyone that canceled it?
[03:57:39] I think they...
[03:57:40] They didn't want... it's kind of an interesting stance. I don't know what to think about this at all on that side.
[03:57:48] But they didn't...
[03:57:49] .
[03:57:49] they canceled it because they agreed  that they should have had more diversity in their lineup and they changed it to a video series where they're gonna have
[03:57:59] the talk's going to spread out over time.  And then they're going to, that's the idea.  And then they're going to like bring in more diverse speakers,  but they also didn't publicly announce it because they didn't want to give the
[03:58:08] people who call them out any sort of satisfaction.
[03:58:11] It was kind of interesting.
[03:58:13] And
[03:58:14] in that, like, I don't have examples here, but once I actually
[03:58:18] At first I thought that was kind of like, you know, is that cool? Like you should actually, you know, maybe you should just like say like, hey,
[03:58:27] you know, are bad, it wasn't intentional, let's kinda
[03:58:31] move on from this. But then I watched the people who complained about it get more and more angry and bitter about it.
[03:58:38] even though they weren't involved, whenever we're going to be part,  like weren't participating with all that.
[03:58:43] And
[03:58:44] It opened a really, like, it did definitely open my eyes to, like, kind of a both sides of the story thing because
[03:58:53] It was kind of like...
[03:58:56] Like they said their piece, but they were like very
[03:59:00] angry about this event. And maybe I'm...
[03:59:04] Which they did manage to cancel...
[03:59:13] So, like, it is...
[03:59:21] So it is a tricky topic.  I just wanted to bring this up because...
[03:59:26] It's something that I think we're starting to give more thought to.
[03:59:30] um...
[03:59:32] It's unfortunate in one sense, because I do think this will impact
[03:59:36] certain things from happening...
[03:59:38] Um...
[03:59:39] But I think that's okay.
[03:59:41] I think it's probably more important
[03:59:45] that we find how to have different conversations as well that
[03:59:50] Make...
[03:59:51] Like we're never, you're never gonna have
[03:59:55] you're never going to have the diversity we want if we don't,
[03:59:59] inspire
[04:00:00] people to
[04:00:02] to do that.  Do you know what I mean?  Like,
[04:00:05] Yeah.
[04:00:07] Thank you.
[04:00:08] Something has to change.  Things are way too off balance.
[04:00:13] Even...
[04:00:15] even at the cost of
[04:00:17] of
[04:00:19] of what's established.
[04:00:21] I think we have to think more on this.
[04:00:26] It's definitely a tricky topic.
[04:00:29] I...
[04:00:32] I
[04:00:33] I...
[04:00:35] don't know.
[04:00:37] that I was
[04:00:38] any satisfaction came out of the serverless conference being canceled.
[04:00:42] Honestly.
[04:00:47] I think there was a conversation where if I like,
[04:00:50] get into the
[04:00:51] the weeds on this one. Sorry, where is it? Here.
[04:00:56] Like, if I...
[04:00:57] if I get into the weeds on this conversation here,
[04:01:02] about
[04:01:03] about that is like
[04:01:09] "As a very frequent speaker, I turn down an event a month  "due to lack of diversity.  "It's a problem, but one thing I think is important to make,  "visible enough, I need to make a spotlight feature."  Sure.
[04:01:21] Thank you.
[04:01:23] But yeah, I mean...
[04:01:28] It's going to be tricky to find a balance because
[04:01:30] As I mentioned,
[04:01:34] Thank you.
[04:01:37] Certain types of conversations can only happen right now.
[04:01:41] -
[04:01:42] because of the way, like, of a reflection of the way things are today.  So, I don't know.  I don't know what else to put on this,  but it's definitely something that both has come up  from a community building standpoint,  and definitely something that has...
[04:01:56] weighed on me as a speaker.
[04:02:14] "Chicken Any Parallel is if detected. You need the rep-send to increase rep-send, which means that it's up to those who control the rep-send to start that." Yeah, completely.
[04:02:21] Did they cancel a call because of Twitter?  Yeah.
[04:02:24] Yeah, no, mostly the people who made the outcry
[04:02:29] got their way they just didn't give them the satisfaction of telling them that
[04:02:34] So...
[04:02:35] Yeah, I don't know. It was an interesting...
[04:02:39] Thank you.
[04:02:43] Yeah, exactly. This is what I'm getting at. This has been something that I've been trying to
[04:02:47] look at and we've been  we've been we've been we've been
[04:02:52] trying this but it's like especially been Harvest Solid being kind of like an experts community and
[04:02:58] That like this this comes very very slow and
[04:03:01] Um...
[04:03:03] And it's a difficult topic to broach.
[04:03:06] Because you...
[04:03:07] You want to like lift up everyone.
[04:03:09] Um,
[04:03:10] but yeah,  this is one of the things that I think the problem though is like conversations  like the one that they like,  like the expert panel they want to have here.
[04:03:21] in...
[04:03:23] There's a reason these people are on the guest list.  Like...
[04:03:28] It goes...
[04:03:29] You know what I mean? Like...
[04:03:31] There's a tricky balance.
[04:03:42] Yeah, I mean, in a sense, ideally, this should be the case, but we can't actually...
[04:03:50] we can't
[04:03:53] Thank you.
[04:03:54] We can't actually get there unless we...
[04:03:58] do something about it
[04:03:59] Leaving alone...
[04:04:01] Doesn't get us there.
[04:04:03] What's the bottleneck on diversity and tech expert at the beginning of it?
[04:04:06] Every level.
[04:04:07] Like, but yeah, I mean, it does, like...
[04:04:12] You
[04:04:13] The people you look up to, the heroes, they have to...
[04:04:17] If...
[04:04:18] they think like you look like you you know if you have it will help
[04:04:23] pull in new beginners.  There's a self-propagating thing  in general, like...
[04:04:29] I don't know.
[04:04:30] biases that are present, um,
[04:04:33] So it's very difficult...
[04:04:35] - Thank you.
[04:04:36] Yeah.
[04:04:38] It is very difficult.
[04:04:53] Thank you.
[04:04:57] Yeah, I mean, these kind of stories,  it's important not to discredit the person either.  People with incredible ability.  The problem is you actually have to...
[04:05:11] get the ball rolling if you want to promote...
[04:05:14] an environment where this can...
[04:05:19] uh, what's...
[04:05:20] like grow organically which is weirdest that's like not organic but we have to like you got to  kind of like push it along
[04:05:37] Anyway.
[04:05:38] I wanted to bring this up because I actually I do hope people turn out this event. I think it's great. I think it's good and
[04:05:44] I think this is a great conversation to be had.  I just... I'm very...
[04:05:48] I think we need to be cognizant of this topic and that's why I brought it up today.
[04:05:54] Um...
[04:05:55] What else we got here?
[04:05:57] People that Jason
[04:05:59] full-time Learn with Jason.
[04:06:03] He's left Netlify.
[04:06:06] to actually
[04:06:07] do...
[04:06:08] Make the show real, you know, like like I mean he was already real he's already incredibly successful with it  but now it is like
[04:06:16] It's his thing.
[04:06:18] So,
[04:06:19] I mean, it's always been his thing, but you know what I mean.  Like, he's taking this all the way, and I think that, like, this is super exciting.
[04:06:25] Um...
[04:06:28] I don't know if I want to say too much about this right now.
[04:06:31] Thank you.
[04:06:32] - Yeah.
[04:06:32] I think we've successfully...
[04:06:36] Um...
[04:06:37] Tanner's waving the white flag here.
[04:06:41] Yeah.
[04:06:44] I'll have more updates on this in the future.
[04:06:50] - Thank you.
[04:06:51] Yeah, I mean, there was some good news. The work that Milo did on reactivity we talked about last week actually improved Maverick.js. They actually use that benchmark to make significant improvements. I'm really excited that the reactivity space has been heating up, like the signal space.
[04:07:09] a lot recently.
[04:07:11] Um...
[04:07:14] I don't know if you all saw this.
[04:07:17] But...
[04:07:18] I've been talking about how Angular team has been looking at adopting signals.
[04:07:23] Yeah.
[04:07:26] And...
[04:07:27] like
[04:07:28] essentially
[04:07:30] This is a great article for people who are into RxJS and they just don't get how the reactivity is different.
[04:07:36] like mostly Angular folk.
[04:07:39] But like...
[04:07:40] this really sells the power of our unique brand of reactivity. So, as I said, we're going to, like, you can feel it. I think Powell from the Angular team said a while ago, he was like, you know, it's like signals are the new VDOM. Like, this is a...
[04:07:57] it's a very energetic area of research and improvement right now. Um,
[04:08:01] you know, across the board from, you know,
[04:08:04] Angular.
[04:08:05] from the state libraries that are kind of working on stuff.
[04:08:09] Even Tanner Lindsley. If you read between the lines here,
[04:08:14] So
[04:08:14] you know,
[04:08:15] And follow this great thread.
[04:08:18] I actually enjoyed this competition with Sebastian Lauer. We were talking about what you can do
[04:08:23] without a virtual DOM. And if you ever want to
[04:08:26] understand that like because we started talking about concurrent rendering off screen and
[04:08:30] a whole bunch of
[04:08:32] stuff and just explaining that like, like he didn't know about view keep alive, like just
[04:08:38] explaining
[04:08:39] how
[04:08:41] you know,
[04:08:42] these models can work without a virtual dom  and that there's more options out there.  I think this was a great kind of thing to kind of like
[04:08:48] have a conversation with a very React-centric developer  and can help them understand what lives beyond React.
[04:08:58] So like, yeah, I, you know, I'm seeing these things now, you know, like this is, this has been a very,
[04:09:06] Um...
[04:09:07] very cool
[04:09:10] development in terms of excitement on signals. So I almost said sniggles.
[04:09:18] Thorn.
[04:09:19] Anyway
[04:09:21] uh
[04:09:22] Yeah.
[04:09:24] we're seeing this
[04:09:27] It's funny for me because I've spent so long in this zone that I'm seeing...
[04:09:33] not as many new ideas as it is for other people,  but right now it's like that mind-blowing moment  when people are just like...
[04:09:40] realizing that a revolution is happening and
[04:09:45] Um...
[04:09:47] That can be kind of a tricky thing to even identify at first.
[04:09:53] Um...
[04:09:55] Thank you.
[04:09:56] Uh...
[04:09:57] It was funny because...
[04:10:00] I'm glad Devin changed his name back.  He changed his...
[04:10:04] Picture to a picture of toast seeing the guy Ryan roasted
[04:10:10] - Thank you.
[04:10:11] And
[04:10:15] - Yeah.
[04:10:16] And essentially he was saying, oh, I think Quick is more important than Solid or Remix.  Solid's a better React and Remix is perfected SSR, maximum useful initial HTML.
[04:10:26] I obviously...
[04:10:28] don't agree with this take completely.
[04:10:30] and was especially triggered by Solid is a Better React.
[04:10:39] -
[04:10:40] I have to admit I went a little bit too hard on him because this is related to the signals thing. I was like trying to
[04:10:46] explain
[04:10:48] that...
[04:10:50] that signals are the thing, that...
[04:10:54] And not just signals to state management, but changing the way we render, change the way we view components, change the way we update.
[04:11:01] Um...
[04:11:02] I kind of go off on a bit of a...
[04:11:06] of a rant...
[04:11:08] Thank you.
[04:11:08] You know, any similarities to react to the testimony, how effective the approach is that particular goal and not indicative of the potential of it.  Everything...
[04:11:16] has to be done and thought out completely differently. I, I,
[04:11:18] Thank you.
[04:11:19] I guess I sort of got off my chest a lot of stuff talking about it, talking about how
[04:11:24] signals of fine-grained reactivity inspired
[04:11:27] the partial hydration efforts...
[04:11:31] They're happening with Marco.
[04:11:33] like the subcomponent of the reservability.
[04:11:36] talking about how
[04:11:38] you know
[04:11:39] pre-act and quick
[04:11:40] have been adopting elements of this to go beyond even
[04:11:43] The virtual DOM as we know it today.
[04:11:46] that this is part of
[04:11:50] a bigger change
[04:11:56] At some point later on, I actually explained that I also think better react is a diss to react.
[04:12:02] team a bit because like they're they're not interested in this they don't see solid as a better react um so it's like
[04:12:10] It's very...
[04:12:11] Someone did kind of laugh at me and pointed out that only Ryan would be offended by someone calling his library a better react, and that's probably true, but...
[04:12:21] Um...
[04:12:23] Yeah, someone's asking, okay, yeah, because I like playing with this whole I didn't invent signals.  You notice that...
[04:12:29] It's here and it's also came up, sorry, on here, I didn't invent signals. It's literally my
[04:12:36] my name here, like my description.
[04:12:39] There was actually an interesting...
[04:12:42] discussion in here where someone was trying to find the etymology of signals, if I'm right.
[04:12:49] Maybe, yeah.  I've been using signals since Rob Penner popularized in a flash AC3, but they started with QT.
[04:12:57] I thought you invented reactive programming. I love it.
[04:12:59] of
[04:13:00] Okay.
[04:13:02] Yeah. No, the truth of the matter is my inspiration came from Elm and SJS.
[04:13:07] The signals that are in AS3 were different.  I think if you follow this thread down, everyone agrees that they weren't actually the same.
[04:13:17] Go predicate yourself.
[04:13:18] It's signals in the sense
[04:13:20] Herb.
[04:13:21] are a little bit different than the sense we use them. I end up using the same word,  but it's not actually quite the same.
[04:13:27] mechanism.
[04:13:30] It is based on subscription models, but it isn't.  The way we talk about signals and fine-grained,  it has to do with more of a graph data propagation model.
[04:13:42] So...
[04:13:46] Thank you.
[04:13:49] Right, where we talk about solving the diamond problem and
[04:13:56] that side. I ended up... I don't know if Signal's the right name for them, but like I don't actually...
[04:14:04] have the
[04:14:05] it going back to that side of things but it's interesting that like there's something similar  that lives in that zone so
[04:14:12] Um...
[04:14:13] I was not...
[04:14:14] the first person to call these signals.  I think there's, like, academic works.  Like, this is actually...
[04:14:21] - Mm.
[04:14:22] I...
[04:14:22] the way react graphs work is a lot like digital logic circuits. Like it's, it is like, um,
[04:14:29] what's the term?  Yeah.  Like essentially like synchronous...
[04:14:35] It's like when people program those
[04:14:39] FMPGAs and like VHDL, like hardware descriptive languages, where you have like a system where everything like...
[04:14:47] runs at the same time.  It's not imperative.  You wire everything and everything is  in the same state. It's not like this, then this,  and this. It's like this is the state of it  then it changes to this state.
[04:14:59] It's that sort of
[04:15:01] mentality programming theoretical stuff that where signals came from um this kind of idea of um
[04:15:07] like kind of like a synchronous reactive programming.  Some people will talk about behaviors in the original FRP description,  which is probably pretty accurate.
[04:15:16] Um...
[04:15:17] But yeah.
[04:15:21] Thank you.
[04:15:22] So yeah, I did not come up with signals.  I like reminding people that it's kind of like a funny joke now because people just
[04:15:28] who probably invented signals, you know, like...
[04:15:31] whatever.  It's,  it's,
[04:15:34] It's, uh...
[04:15:35] It's fun.
[04:15:36] Okay, so
[04:15:38] Where was I? Yes. Yes.
[04:15:40] Okay. And actually, this leads me into the next little topic here because...
[04:15:45] Um...
[04:15:47] The other thing that's been going on like crazy is the freaking, what is it, GPT chatbot thing.  Everybody's been playing with it this week.
[04:15:55] Right?
[04:15:58] Made signals grid again. Sorry. I need to just give this a...
[04:16:01] *laughs*
[04:16:03] And...
[04:16:07] This is actually kind of related
[04:16:09] to that, um,
[04:16:11] Our old buddy, Parasocial, here has
[04:16:17] took that
[04:16:20] thread where I was a little bit aggressive and kind of
[04:16:23] you know, you know,
[04:16:25] got my mind off in terms of, you know, react, so I'm not being able to react.
[04:16:31] GPD actually wrote it into a very convincing little, you know, summarized, more clear than I wrote it,
[04:16:40] article here, right?  It's funny because if you actually scroll up  it has more engagement than  the original tweet or any of the stuff there.
[04:16:50] - Yeah.
[04:16:51] I don't know. I should just get G2PT to write my marketing material from now on. This just reads better than what I wrote. It has everything from what I wrote, but it...
[04:17:04] it actually explains everything concisely that fits in three tweets.
[04:17:09] .
[04:17:11] *laughs*
[04:17:13] -
[04:17:15] .
[04:17:16] So, yeah, I mean, essentially,
[04:17:23] This kind of stuff is nuts from my perspective.
[04:17:30] Look.
[04:17:33] -
[04:17:34] So like
[04:17:37] Yeah, five times engagement.
[04:17:40] And actually,
[04:17:42] Um...
[04:17:44] He actually took...
[04:17:47] the subtitles from one of my streams
[04:17:49] and fed it through in, and then actually wrote a whole...
[04:17:53] Here we go.
[04:17:55] Here's the...
[04:17:59] This is suspense as 45 minutes of subtitles from one of my streams into an article about suspense. "Suspense is a concept of software design that allows the inversion and control over loading states. Its traditionally designed patterns that the loading state and other related information will be held and controlled by the parent or container component. With suspense this control is inverted allowing the parent component to hold the cards and determine how to show the loading state. This concept's main benefits." This is great.
[04:18:22] You know someone actually
[04:18:24] Again...
[04:18:26] got GT to write a whole article on Solid.  I saw these a couple years ago,  and the newer versions of these AI-based articles  are like...
[04:18:36] miles above like
[04:18:38] what was there before.
[04:18:40] Um,
[04:18:41] - Thank you.
[04:18:42] I don't know how good this article actually is, but it was just kind of interesting...
[04:18:46] to see this kind of progression of this.  Because I was commenting, I just needed this as my editor  for my marketing.
[04:18:53] This is really quite cool in a sense.
[04:19:05] Yeah, or any of those low effort summarizations, like maybe this is going to use AI to do them from now on, I don't know.
[04:19:15] Okay.
[04:19:16] Yeah, it's it's.
[04:19:17] It's kind of...
[04:19:19] crazy um
[04:19:22] Can we tell if they're at the best frame frame? Well, here's the thing people
[04:19:26] also shared with me, I didn't share this, like people trying to convert solid to, or react code to solid, it didn't really work for them.
[04:19:32] I've actually been talking to a company that's been working on AI to do code mods and seeing if like
[04:19:39] we could do that. So like maybe there's a direction we can look here in the future, but right now it just doesn't have the knowledge. But
[04:19:44] I know that's not what you were asking, but...
[04:19:48] That seems at least more feasible.
[04:19:53] Yeah, but that's not the problem, right? That's what people are saying to me and I'm like, "No, no, no, but I just want a better editor. I write a bunch of stuff. I spend hours and hours on stream. You could just like summarize all my streams into multiple...
[04:20:04] articles like I don't I don't mind providing the content I just need an editor
[04:20:10] The challenge is it's not always right, right?
[04:20:14] Thank you.
[04:20:30] Alright, I think there's only one more topic I want to talk about today. Unfortunately,  I'd rather leave on a happy note like this, which is pretty good.
[04:20:45] It's funny, those serverless SST guys have been just having such a hard time recently  between their conference and, like...
[04:20:54] like this weird social drama and stuff, you know, but
[04:20:58] I don't know...
[04:21:01] Thank you.
[04:21:01] if you,  I need to talk about this topic,  um,
[04:21:05] because I have to, um,
[04:21:08] Thank you.
[04:21:09] Next isn't really OSS.  It only runs on infrastructure with internal code...
[04:21:13] to host it, otherwise this wouldn't exist.  That's fine, Remix started closed source,  just something considered.  Do you wanna own your infrared,  or do you want your framework to?
[04:21:22] Thank you.
[04:21:25] Yeah. Um...
[04:21:28] Yeah.
[04:21:28] Yeah, this is one of those kind of...
[04:21:30] unfortunate scenarios because again...
[04:21:33] This is a product that they've been launching
[04:21:37] You know, like...
[04:21:38] This is not
[04:21:40] My understanding of this project is it's trying to take the build API from Vercel and make it just work on AWS without using Vercel.
[04:21:54] Thank you.
[04:21:55] Thank you.
[04:21:58] And, like...
[04:22:01] Yeah, I mean, there's people incentivized to make comments like this, I suppose.  But, like, every comment...
[04:22:13] has like maybe a hint of
[04:22:16] Thank you.
[04:22:19] Truth in it like I don't I see the angle that this is coming from and
[04:22:26] I'm ignoring that.
[04:22:28] I like Matt Cain's clarification.
[04:22:33] Because for you who don't know, Matt Cain is the guy, one of the main people responsible for framework integrations at Netlify.  So like whenever Next13 comes out and, you know, there's a bunch of new, you know, features, he's the guy who's like reverse engineering and figuring out how to get on the Netlify platform.
[04:22:58] Yeah.
[04:23:00] Maybe, but not necessarily.  We'll talk about that in a second.  There's a little bit of a difference here.
[04:23:05] Thank you.
[04:23:06] Yeah.
[04:23:07] Thank you.
[04:23:08] Right. People are confused by the fact they can self-host Next as a Node app, but it's not the same thing. Kudos to the Next core team for mostly making features that work self-hosted, but it's a completely different architecture from Next app deployed to Vercel.
[04:23:19] Or NetLefy.  He snuck it in.  Because literally we...
[04:23:22] Um...
[04:23:23] Netlify does spend the time to get the Vercel equivalents and features and make sure that they can support all the middleware and all that kind of stuff.
[04:23:33] you know, the edge stuff.  Yeah, well, because we're moving into a zone now
[04:23:36] where this infrastructure stuff starts mattering more.  Like, and, you know...
[04:23:40] edge and caching and cdns i mean it started really with isg if you think about it or isr or whatever  or dsg or whatever the hell you want to call it like everyone like gatsby's hosting hasn't lfi  has it versell has it like what that's where it kind of started but it's not like something you  can just like pick up as you're like hey i'm going to host my thing on
[04:23:58] AWS.
[04:24:05] I'm not.
[04:24:06] Right? So like...
[04:24:10] Thank you.
[04:24:14] So, like, this is kind of, like, one of those things where, like...
[04:24:18] it's challenging, right?
[04:24:24] most next apps run their
[04:24:26] On their own infrastructure, including companies like Amazon.com.  In 12.1, we helped make Dockers smaller.  You have...
[04:24:31] But...
[04:24:32] I...
[04:24:35] Sure.
[04:24:36] But like...
[04:24:37] We transfer the next output into build versus open source.  Yes, exactly.  I think there's a confusion here.  I am a big fan of the build output.
[04:24:46] API. Huge, huge, huge fan of the
[04:24:49] I think this is like the right kind of thing to make Vercel accessible. I think sometimes
[04:24:55] Vercel has a hard time separating Next from Vercel.
[04:24:59] um
[04:25:01] which makes sense but yeah like this this
[04:25:07] But if you follow this,
[04:25:09] here, this is one of the SST guys.  The build output is helpful,  but it's not enough to get things working as well.  When Resolve deploys to AWS internally,  we didn't want to create
[04:25:17] Open Next, but there were just too many attempts in our community to do something like this on their own.
[04:25:25] Had a chat with someone who works a competing host the other day.  Most of the jobs make these OS frameworks special sauce when hosting the, you know, you know,
[04:25:34] Anthony, rap right here.
[04:25:37] "About to start a job hosting platform,  "and will a decent amount of this kind of work.  "SolidStart 1180, NetFly, next.  "For sale, I'll be particularly curious to see how hosting  "stores you up for these ones."  One thing I wanna point out,  I don't know if there's anything special on the 1180 side,  but I doubt it, but SolidStart has no special
[04:25:52] Netlify thing, at least currently. We're looking at how to make things better on each platform. I'd say just because of history and stuff, we actually have more with Cloudflare than probably any of the others right now, just where we were at.
[04:26:09] But it's interesting because most of the frameworks actually have an agnostic core that runs on all of them.
[04:26:15] Right?
[04:26:17] Right, does Eleventy serverless run on everything?
[04:26:21] Like, I don't know about that, but like...
[04:26:24] Like I know that remix
[04:26:26] solid start Astro run the same number cell,  uh,  Dino,  uh,
[04:26:31] You Netlify, Cloudflare...
[04:26:36] Right, like there actually isn't a difference for those.
[04:26:39] -
[04:26:40] *sniff*
[04:26:41] and
[04:26:43] Quixity and Marco.  Like, the whole list, as I said, I didn't know about Eleventy.
[04:26:49] Even I suspect SvelteKit.
[04:26:52] is like that as well. I think NeXT is actually the exception.
[04:26:57] Right, there's not...
[04:27:02] I mean, this is interesting.  I love to hear you're feeling me next on Netflix.  Right now it could be blah, blah, blah.  Like, we get down the thing is...
[04:27:09] So it's like...
[04:27:11] There's definitely something here.
[04:27:14] Whether it deserved...
[04:27:16] this treatment or actually this isn't even the most
[04:27:20] the most brutal one, it was this one. The VMverse cell is for vendor lock-in. Luckily, Nexias becomes less relevant with SSR and other teams coming to the north.
[04:27:28] Okay.
[04:27:29] *sad sigh*
[04:27:32] This is the build API output. Oh, here's Matt Cain again.
[04:27:35] That's a little misleading.  Vercel does indeed have an excellent well-defined and well-sposed ability API, but unless I'm  mistaken, there's no way to make Next use it.
[04:27:46] Uh...
[04:27:46] There we go.
[04:27:48] So...
[04:27:49] Yes.
[04:27:50] Very awesome.
[04:27:52] So Next can use the build output API.
[04:27:55] Yeah, so there is definitely a bit of this going on.
[04:28:04] Right? Like...
[04:28:10] Oh
[04:28:11] So
[04:28:13] Sorry, how did I end up on the wrong...
[04:28:16] story all of a sudden okay
[04:28:18] Yeah.
[04:28:19] so
[04:28:20] Definitely...
[04:28:23] Definitely, you know, a conversation.  I think the challenge here is this.
[04:28:29] Thank you.
[04:28:31] Thank you.
[04:28:33] Ryan is a little bit
[04:28:35] I mean, this
[04:28:37] wouldn't have existed if it didn't need to exist.
[04:28:42] I'm glad that the like Vracell team has been pretty reasonable, you know, coming in and like...
[04:28:48] There is some misinformation floating around, clearly, about Next here.  But there is clearly...
[04:28:57] There's clearly like...
[04:28:58] a gap.
[04:29:00] Which the Sols.  So...
[04:29:03] You know, this does have a place in the world.
[04:29:10] Well, Russell's grade is not a competent researcher on AWS. Hosting AWS skills are using Intergrade.
[04:29:18] Yeah, so I think this is like...
[04:29:24] I think this kind of thing is inevitable.  And the reason I think this is kind of inevitable is...
[04:29:28] Ultimately...
[04:29:33] It doesn't matter who you are when you're working with multiple projects, even things that are so interweaven, that work so nicely together...
[04:29:40] You've got to prioritize.
[04:29:42] One thing takes more priority than the other thing.
[04:29:44] And there's nothing wrong with that.
[04:29:47] Like, you can be unapologetic about it if you want, honestly.  Like, it is perfectly fair.
[04:29:53] I don't...
[04:29:54] I have a bigger issue  with the vendor lock-in  argument because like
[04:30:00] Everything's vendor lock-in.
[04:30:01] Like...
[04:30:02] Like...
[04:30:04] It only becomes vendor lock-in, I think, when like,
[04:30:08] *sniff*
[04:30:10] Like when...
[04:30:11] Mostly...
[04:30:13] It doesn't necessarily need malicious intent, but when, like...
[04:30:18] When...
[04:30:19] *sniff*
[04:30:21] when things are skewed in a certain way,
[04:30:24] that removes choice.
[04:30:28] The truth of the matter is if you want to get the best out of AWS, you're going to try and use the most of their services and they integrate well with each other.  And this is just a natural thing.
[04:30:37] And it's going to be the same on Vercel or whatever platform you choose.  It's kind of funny.
[04:30:43] Picture if people went out and talked about framework lock-in.  The funny thing is they actually did recently, the conversation about framework lock-in.  And people were like, well, the solution is clean architecture.  You just pull all your state out into a global thing, use Reactivity, and then you can swap from React to Vue to whatever render you want.  You get framework agnostic, and then you have this good, strong pattern to manage data.
[04:31:07] like you look at a new for a second and you're like, no, no, no, no, no.
[04:31:10] That is the framework.
[04:31:11] You just like...
[04:31:12] shifted some stuff around, but now
[04:31:15] it's almost impossible for you to get off that reactive...
[04:31:18] library that you're invested in. Like, you don't get things both ways. Not really. Not
[04:31:24] And I think that's like...
[04:31:27] I...
[04:31:29] I think that's sort of the thing.
[04:31:32] Like...
[04:31:34] It's okay.
[04:31:35] That next...
[04:31:36] works
[04:31:37] you know, best on Vercel or any platform willing to like,
[04:31:42] emulate the same sort of features.
[04:31:46] But it's also a reality that it does.
[04:31:48] Like you don't get to ignore it like I
[04:31:51] How do I put it?
[04:31:54] If there was a conference,
[04:31:56] for an open funded framework.  Someone said this is what funded open source looks like.  I actually disagree a bit.  Like if Astro,
[04:32:04] did AstroConf
[04:32:07] or let's say before the Shopify merge or whatever, Remix did,
[04:32:10] Remix comp.
[04:32:12] Do you think...
[04:32:14] that they would cater to a single deployment partner, and that would be the game.
[04:32:19] No, they would...
[04:32:21] literally make sure that on launch that any cool new feature they had was available across the board.
[04:32:27] I did like solid start launch.  We,  I worked with every single provider to make sure that we had templates ready on launch day,  that you could go into Vercel or Netlify or whatever,  and make sure that you get the full solid start experience.  And,
[04:32:41] I worked with the Cloudflare guys, Peter, make sure the pages integration was good.
[04:32:49] And you launch with that and you're like, look,
[04:32:51] Now everyone can use the framework because the framework is the priority.
[04:32:55] That's the reality, right?
[04:32:57] That's what you do.  Is that what Next does?
[04:33:01] No.
[04:33:01] But that's okay.  Like, that is just what it is.
[04:33:06] Like
[04:33:08] .
[04:33:11] You have to understand where the money is coming from and what the priorities are. They do a good job.
[04:33:17] with it being open source.  They do a good job of putting it out there,  people can just host it anywhere.
[04:33:22] Next...
[04:33:25] Like...
[04:33:27] Next is
[04:33:29] It's not
[04:33:31] I don't agree with this next isn't really open source thing.  Next does a great job.
[04:33:36] you know, considering, but you have to like,
[04:33:39] at least acknowledge the fact
[04:33:41] that it is definitely
[04:33:46] not this, like, it's not the way another framework would act in that situation.
[04:33:53] Like it is definitely like
[04:33:55] We're gonna build it on Vercel, put it out there.
[04:33:59] do it because you know Vercel is our platform like it's about it's about priorities
[04:34:10] Psst.
[04:34:11] So like, I don't see a problem with that. You just kind of like go, that's how it is.
[04:34:17] Right?
[04:34:18] Ultimately...
[04:34:21] Next.
[04:34:22] And Vercel?
[04:34:25] are tight, you know?
[04:34:28] And it has nothing to do with intention.  I said, the next team does an amazing job.
[04:34:33] And this was kind of similar to the conversation about React Next for Cell,
[04:34:38] You know, like...
[04:34:39] that whole, you know, are they all colluding together? It's like, no, like not really.
[04:34:45] But,
[04:34:47] If that's the end result, it doesn't matter if
[04:34:50] they are or aren't, that's the end result. Like, I don't--
[04:34:55] I sometimes wonder if people have to be as apologetic about it as they try to be, when it's just like, it doesn't matter what you think it is, the result is what it is.
[04:35:07] this is kind of
[04:35:10] uh...
[04:35:12] As I said, it's too easy to take potshots here. OpenNext exists for a reason.
[04:35:17] I'm constantly impressed with the way that
[04:35:21] the next team engages and stuff.  It's like,  it's not like they're going to like come in and like try and close down this  project or like make them change their name or do anything like that.  Like the,  they are very reasonable.  Yeah.
[04:35:32] But like...
[04:35:33] Look
[04:35:34] - Yeah.
[04:35:35] Like...
[04:35:37] the
[04:35:37] As I said, there's like a hint of truth in everything, right?  If you can like look at it.
[04:35:43] And like, there's nothing wrong with that.
[04:35:47] Just like catching up here on chat for a minute, see if I missed anything important.
[04:35:51] Yeah, people talking about Remix and Shopify...
[04:35:57] Thank you.
[04:35:58] You know?
[04:35:58] I mean...
[04:36:03] Thank you.
[04:36:06] I think we're good.  Like...
[04:36:10] this stream has been about Next  so we kind of, I guess, coming back to Next  here at the end makes sense, but like
[04:36:17] Next is the big fish. It ain't going anywhere, just like React, you know.
[04:36:25] I think it's interesting that
[04:36:27] Maybe...
[04:36:28] we have more competition because the money getting funded into the meta framework.  That's that's almost where it feels like the battle is being
[04:36:35] you know, fought the competition. People aren't really focusing on the core library rendering stuff that much anymore, you know.
[04:36:44] It's in the next JSs and the Svelte kits and the remixes and all that.
[04:36:48] Um,
[04:36:49] Which is really interesting to me because those are much more opinionated.
[04:36:53] And much further...
[04:36:54] from the core, which means that, like,
[04:36:57] There's a lot of room...
[04:36:59] there to like...
[04:37:01] take things different directions,
[04:37:03] And like...
[04:37:06] Change the math.
[04:37:07] you know, change...
[04:37:08] I...
[04:37:10] you know
[04:37:11] What's relevant?
[04:37:19] The real question.  Yeah, this is the real question.  If the money keeps flowing in, not the market for these companies is tanking.  I mean...
[04:37:26] *sigh*
[04:37:28] But...
[04:37:29] I don't know if I'm
[04:37:30] I feel comfortable even reflecting on that.
[04:37:35] We've had a nice run, you know with all the money coming in this we've it's fueled and
[04:37:40] a lot of really cool innovation.
[04:37:44] Um,
[04:37:44] You know, I...
[04:37:46] I think there's good stuff here.  The fact that
[04:37:50] Next when and we're like, "Hey, can we do this? Can we use next infrastructure? Can we pull it off?"
[04:37:54] our reverse cells infrastructure can we pull off let's do it this that's great
[04:37:57] You know?
[04:37:58] And even launching it that way, that this is Vercel
[04:38:01] Only.
[04:38:02] that's great for Vercel,  you know,  like,
[04:38:04] Good.
[04:38:05] I just, as I said, I think it's important to point out that like...
[04:38:09] Um...
[04:38:13] I think almost anybody, if that was the agreement or the arrangement, would be in the same state.
[04:38:18] Right?
[04:38:19] But I want to point out that like
[04:38:21] Amen.
[04:38:22] for those that aren't.
[04:38:24] it is actually a different state.
[04:38:25] These things are different.
[04:38:27] Right. Like,
[04:38:29] - Yes.
[04:38:31] Thank you.
[04:38:37] You know what do you got here?
[04:38:44] Yep.
[04:38:45] Definitely.
[04:38:53] Thank you.
[04:38:55] Well, yeah, I mean, here's the thing, though. What's the difference between lock-in and, like,
[04:39:01] Features that don't...
[04:39:03] If only Cloudflare has durable objects, or only this has this,
[04:39:07] feature, like DSG's on Netlify or ISR's, like you're probably...
[04:39:13] gonna want to support those features at a certain point and
[04:39:17] and figure out how to work with each platform. It's interesting though because like
[04:39:22] Will prioritization kind of come in at a certain point or,
[04:39:26] you know,  efforts to kind of generalize approaches because like,
[04:39:32] It is definitely interesting. I haven't found a place where I needed to rely
[04:39:37] on that offering but you know it is it is an interesting question
[04:39:44] Thank you.
[04:39:46] Yep.
[04:39:48] Yeah.
[04:39:54] Yeah, I mean, that comes down to people.
[04:39:56] think
[04:39:58] Someone in her Discord was like, "This man likes to wake up in the morning and choose violence." But, I mean,
[04:40:06] Um...
[04:40:09] - Yeah.
[04:40:10] I...
[04:40:12] Yeah, I feel the worst about this is, as I said, SSTs had a rough couple weeks here. But I guess they got a lot of eyeballs. So you might not have heard of SST before, but now is serverless ready? And this thing definitely got attention on it.
[04:40:34] Thank you.
[04:40:39] Thank you.
[04:40:40] I appreciate that.
[04:40:46] I just got an Excel server so I was trying to find Excel server.
[04:40:50] I would love to...
[04:40:54] Take a look. I've never seen Next outperform Solid Start at anything. And I know that sounds like a cocky statement, but I mean actually.
[04:41:02] True.
[04:41:03] except for first paint.
[04:41:04] in some cases, which is a weird one because
[04:41:07] It should all come in at the same time, and yet Next has a way of getting the first paid ahead of everyone else, which I haven't figured out yet.  But generally speaking, I've never seen this to be the case in anything. So I would definitely be interested in seeing that example.
[04:41:20] Especially in like a two
[04:41:21] times range like
[04:41:23] That's...
[04:41:24] That seems...
[04:41:26] That seems strange.
[04:41:28] We can...
[04:41:29] We could probably try and figure out what's going wrong.
[04:41:39] Yeah, I like this.
[04:41:42] OpenNext is only for deploying Next.js so that it can be deployed to functions
[04:41:45] as a serverless platform. It's a solution specific to a specific problem, not a crystal of NeXT. That's the biggest thing. It's pretty obvious, I think, anyone looking at this can see that OpenNext is not trying to attack NeXT. And I think that's why the NeXT team has been
[04:41:59] pretty reasonable in that terms.
[04:42:02] But like...
[04:42:03] you know it's hard with Twitter  and like weird dramas you know
[04:42:30] You guys are funny.
[04:42:34] Actually, you know, it's just because
[04:42:38] When I went to the SolidStart website,
[04:42:41] And I went, solid start.
[04:42:43] I just went to solid starts instead.
[04:42:47] And unfortunately I got a worse performance score.
[04:42:50] Thank you.
[04:42:51] Ah...
[04:42:53] But
[04:42:54] Sorry. Um...
[04:42:57] Yeah. We...
[04:43:00] I'm
[04:43:03] So yeah, anyway, that's fine.  We'll take a look offline and see what's up.  SolidServe's still embedded and has lots of bugs.
[04:43:09] I'm not going to lie there or even try and hide that.  So I look forward to kind of looking into that kind of stuff.
[04:43:15] But, yeah, no, I mean, I think this has been...
[04:43:20] I think this...
[04:43:22] I think this has been an interesting topic, and I've been...
[04:43:29] Yeah.
[04:43:29] I've definitely been looking into
[04:43:36] Sorry, that's not the right wording. It's definitely been something that's kind of coming across my plate recently just because I
[04:43:43] I see how much effort Netlify puts into, you know,
[04:43:47] the next integration, not only matching Vercel, but actually offering even some unique features.
[04:43:55] People who are in the game to play the game are in it.  So it's just one of those things you just got to acknowledge out there.  And that's where we're at.  So...
[04:44:06] you know.
[04:44:07] That's...
[04:44:08] You know, that's...
[04:44:09] that's really it
[04:44:12] Yeah.
[04:44:15] I don't know, how are we doing today? I started doing the streaming early so that I don't like push it all the way to dinner, which gives me like a little bit of space here to kind of wrap up, you know.
[04:44:24] Um...
[04:44:25] Is there anything else we want to talk about before...
[04:44:27] before we call it
[04:44:31] Um...
[04:44:33] I just checked Twitch chat to see if anything new came down the line.
[04:44:38] Some new first time chatters, it's always awesome to see.
[04:44:42] Um...
[04:44:43] Do remember to give me a follow and like on the video. I'm almost at a thousand followers on Twitch, which is nice.
[04:44:50] And, um...
[04:44:52] Man.
[04:44:52] That Rust stream from last week...
[04:44:56] that's probably like my most watched stream in a short period of time.  It's already like,
[04:45:00] top three streams. People really enjoyed it, so
[04:45:04] If you haven't checked that one out, that's like
[04:45:06] I think, and you have any interest in the Rust topic,  like, it's pretty sweet.
[04:45:13] uh what do i think about react supporting quick
[04:45:16] I...
[04:45:17] Well, actually, let's...
[04:45:19] What... what...
[04:45:21] Do you think about React support in Astro?
[04:45:33] It's kind of like a similar question.
[04:45:36] Thank you.
[04:45:37] I feel like
[04:45:38] Like, there's some cool stuff that Quick does for waking up React's components...
[04:45:43] using reactivity, which is really cool.  But like
[04:45:48] I think it's an interesting question because like...
[04:45:53] um
[04:45:54] This is something people always kind of debate with, right?  Because there's two different ways to look at this.
[04:45:59] If
[04:46:01] If you think about
[04:46:04] Mm-hmm.
[04:46:05] bringing in React's ecosystem into Quick.
[04:46:08] because you're using the components,
[04:46:10] This is kind of like a compelling thing, right?
[04:46:12] or maybe even small widgets or partials in apps.
[04:46:16] So like
[04:46:18] From an ecosystem standpoint, I think this is where this gets the biggest win.
[04:46:22] But it's kind of interesting because Quick doesn't really want React's components.  Not really.  Like...
[04:46:27] all the
[04:46:28] like good work gets done and kind of gets cancelled the second you
[04:46:32] like you bring react on the page sort of like
[04:46:34] yeah, you can load in the background and stuff, but like,
[04:46:38] A lot of the benefits kind of get cancelled out but
[04:46:43] to be able to suddenly have MUI is kind of compelling, right?  So, like...
[04:46:47] Maybe you live with it, but it's kind of like...
[04:46:51] It's kind of like...
[04:46:52] I'm not
[04:46:54] like preact compat and that,  and people ran it that way,  but it ultimately,  like at a certain point you're like,  Oh,  maybe I should have been using react.  Like,
[04:47:03] That was my experience with PreactCompat.
[04:47:06] Thank you.
[04:47:06] This
[04:47:08] A little bit more compelling perhaps, but then it kind of plays at odds with things.
[04:47:13] Thank you.
[04:47:14] Reality is most people have React apps and they're like, how do I get quick into it?
[04:47:19] So it's like the opposite.  And then you're kind of like...
[04:47:22] Huh.
[04:47:24] I think this is an interesting approach  or migration strategy, perhaps, but I don't think  it's one that people can generally commit to. This is more  like an ecosystem patch, which makes it  a little bit less interesting, but like
[04:47:35] I
[04:47:37] You see the difference?  Like, you could...
[04:47:41] I mean in theory
[04:47:43] Thank you.
[04:47:45] Like Astro, you could bring your whole React app into it.
[04:47:48] And maybe people could do that with Quik.
[04:47:50] But like...
[04:47:51] I feel like people don't view these the same sort of way and like the motivations are a little bit different.
[04:47:58] It's also interesting because
[04:48:01] Thank you.
[04:48:02] Yeah.
[04:48:05] Yeah, it's one of those interesting places, because when you move a React app into--
[04:48:10] Astro, you're basically...
[04:48:12] trying to, like, you're MPA-fying it a little bit.  And it's actually the same thing that's happening with Quick.
[04:48:19] Unless like you don't do it that way,  but then,  then things aren't like,  you're basically not getting any of the benefits of quick.  So it's like,  it's,
[04:48:26] There's this like...
[04:48:30] The friction becomes the question of how much better. I think there's a zone for this solution.
[04:48:36] And it's probably in very large...
[04:48:39] enterprises,
[04:48:40] that are ready to commit on QUIC and have their own internal component
[04:48:45] libraries and things that like
[04:48:47] where they already have their systems in React,  and they just want to be like,  okay, we're going to start building in quick.
[04:48:53] and like kind of do it that way.  I think this is,
[04:48:54] that it doesn't let you migrate existing apps,  it lets you make new apps that reuse your current stuff.
[04:49:00] Because I don't think you want to do this for MUI or something.
[04:49:03] So it's like...
[04:49:04] I think on the largest scale this is compelling. I don't think this is interesting for most people.
[04:49:14] Check the issue tracker and see how that's going.  I think that's the thing is there's been a lot of...
[04:49:21] priorities and stuff going on. Mostly it comes down to bug fixes. We still have lots of bugs. So,  I don't know yet. It depends on like tricky thing with open source.
[04:49:31] is it's about the amount of time and contributors.  And we're still...
[04:49:35] we're still mostly based on volunteers.  So it's...
[04:49:39] It's going to take a bit.
[04:49:46] No, not yet.
[04:49:48] But it's pretty cool.
[04:49:57] Yeah, I mean, they've had the feature for like two or three months now.
[04:50:01] See, the reason I haven't thought about it much is because I've watched so many quick talks. Me and Mishko have been hanging out, going to conferences and stuff. So I've seen...
[04:50:11] seen
[04:50:15] I've seen a lot of, you know, like I've seen this feature advertised and showcased now for months.  So it didn't come off to me as something particularly new.  But yeah, I...
[04:50:24] I see so that's why the attention  and talk is there yeah I mean it's
[04:50:28] It's definitely very...
[04:50:30] Very cool.
[04:50:31] Um...
[04:50:34] Let me see here.
[04:50:39] I'm just going to put this up instead of the other one  I've had enough of looking at that tweet
[04:50:44] Uh, we're Sneak Heal.
[04:50:46] Yeah, I mean, this is kind of the thing with his cycle of stuff.  He's working a lot of R&D.  He put a lot of hours in...
[04:50:52] on Solid Start from like
[04:50:55] all the way from like July through November,  um,
[04:50:59] He just, he just, he just been taking some time.  He actually, I took a trip recently.
[04:51:07] eat
[04:51:07] you know
[04:51:08] Maybe it doesn't matter.  He's probably already back.
[04:51:10] But you know, like,
[04:51:12] just, he's been doing...  He's been doing him kind of gearing up.  If you've seen him on Twitter, he's been doing a lot of 3D demos and stuff.  He just...
[04:51:19] need to clear as minor it is. I've been getting in there trying to move Solid start stuff. A lot of times it's downstream stuff. So you've been seeing a lot of releases recently in the router, releases on the Viet plugin, releases on Solid itself. So,
[04:51:34] Salt Start usually, for bugs, ends up at the end of the chain, because usually a lot of  those things actually depend on stuff that's, like, lower level, like...
[04:51:43] farther back because solid start basically offers very little new on top of what you already get in  the ecosystem it just puts it together
[04:51:54] Yeah, we talked about this already on stream.
[04:51:58] considerable amount.
[04:52:00] Um...
[04:52:02] Jared to teach us about Zig? Yeah.
[04:52:05] That's a tricky one. I think the difference with Rust right now is it's at a level where people can actually build UIs in it. It's not quite the same.
[04:52:17] Yeah, that's cool too. Yeah. Prime's been doing
[04:52:21] Great stuff.  He's been building that app on leptos, right?  So...
[04:52:24] Yeah.
[04:52:27] Thank you.
[04:52:29] Thank you.
[04:52:31] Thank you.
[04:52:36] No, I... no, it just happens to have a very similar name.
[04:52:41] Yeah, I'm like 10 minutes behind chat, sorry.
[04:52:47] Well, I mean, it's coarse-grained resumable, right?  Like, they actually have the ability to wake up...
[04:52:52] Like if a prop changes from quick, it can wake up the React component.
[04:52:57] Yeah.
[04:52:59] So like,
[04:53:00] But like, yeah, you can't like...
[04:53:03] When you get React, you get React.  The whole thing.  Yeah.
[04:53:13] Thank you.
[04:53:16] Thank you.
[04:53:23] Yeah, just catching up, people talking about React and Astro.
[04:53:28] Thank you.
[04:53:29] Yeah, yeah, average an automatic folder for that part of the time.
[04:53:33] .
[04:53:35] Thank you.
[04:53:38] It's funny, Nikhil wanted to do this and I was like, "No."
[04:53:42] Like, why are we doing this?
[04:53:45] Don't. Don't.
[04:53:47] Don't.
[04:53:48] - Thank you.
[04:53:49] Like
[04:53:50] Thank you.
[04:53:50] - Thank you.
[04:53:51] I know what Astro went through to get, like, all the different builds and working.  Like, do you want us to be seriously spending our time working on, like...
[04:54:00] framework integrations and making sure those all work with all the different frameworks.
[04:54:05] No
[04:54:07] I'm actually really happy.
[04:54:09] about our thing and I'm like kind of happy that you have to rewrite your components to for them to work in solid or, you know, at least use headless or agnostic solutions. We it's a I mean, sure, this isn't helping us getting adoption and enterprise.
[04:54:22] You know, but like, let's face it.
[04:54:25] like
[04:54:26] It's like a calling.  Like, it's like...
[04:54:30] a lot of the times we get the performance  benefits and the size and all that stuff is because  everything's being rewritten and
[04:54:38] with that in mind. You see the same thing in the Preact ecosystem to kind of a smaller scale,  but probably going to be more now that they're kind of diverting. A lot of the problem on the  compat side is you could just use compat so people don't bother. But if you look at the libraries  that have been made specifically for Preact,
[04:54:51] Love them, right? And that's the same kind of thing that we're happening with the new libraries on the solid side.
[04:54:57] Yeah.
[04:54:58] I almost don't want React components.
[04:55:00] Like, you just don't...  You just don't...  Just, like...
[04:55:05] They're actually authored and they work differently.  And like, just...
[04:55:09] we could just cut out
[04:55:10] that part, like, why would
[04:55:12] we even want it i understand that it's work and people aren't going to be able to adopt it and  like it is what it is but
[04:55:18] you know
[04:55:20] And there's realities and we're going to come up with migration strategies and all that good stuff.
[04:55:25] In the end, you'll have better solid apps.
[04:55:30] I'm not worried about the ecosystem from a library perspective, not even in the least.
[04:55:35] Hiring and all that stuff and community and teaching and all that stuff.  Those are the big blockers.
[04:55:40] converting some libraries, it's fine.
[04:55:45] you have, you know, libraries and
[04:55:48] certain
[04:55:49] you know, enough different areas, you can go find forms, you can go find a query, you can go find a whole bunch of stuff.
[04:55:55] Yeah.
[04:56:01] Yeah, I would love that. Anyone who wants to help.
[04:56:07] Yeah, React 3 editor. Yeah, he did some great work recently there. That's the thing, Nikhil
[04:56:14] projects that keep him rolling. He really enjoyed  the island stuff. I got some new hot stuff  that we're going to get into that
[04:56:20] that tweak his interest in the same way. But, um,
[04:56:25] He's an R&D guy.  He's...
[04:56:27] He's not so much, you know, like a...
[04:56:30] a maintainer.  He's a...
[04:56:32] The world needs more like
[04:56:35] Mark Erickson.
[04:56:36] Like that guy's a hero.
[04:56:54] Yeah, just reading through people on what Dino...
[04:56:57] Zig.
[04:56:59] Thank you.
[04:57:01] How far behind the time? I'm only four minutes. I'm almost caught up.
[04:57:15] He wanted to put it...  Of course he did.
[04:57:23] Thank you.
[04:57:25] Yeah, there might be, we have an example with Prisma, but it's like super, super simplistic. One of the challenges on this kind of side of things is because we like strode so hard to be agnostic. Prisma is like a node thing, right? Like we're trying to figure out how to handle this on a templating side. I think
[04:57:42] I think there's like...
[04:57:44] I think there's some challenges here in the way that we handle feature ads and templating that could be improved.
[04:57:50] So those are the kind of places why I want to look at stuff like Create T3 app and stuff.  So I can understand those pieces that I...
[04:57:57] Like, again, I never use these kind of things.  Like, Next.js never interested me or any of them.  I just build the stuff myself, like, just, like, config it up.  I know that's not everyone, but, like...
[04:58:06] When I work at startups, you know, we just set up our configs, we just
[04:58:09] do that. I never use create React app next
[04:58:12] any kind of meta framework stuff. So it's so weird for me to be in this space, but it seems like I can see the value it brings. And especially with the PowerV plugins, it's like super powerful.
[04:58:37] Thank you.
[04:58:38] Thank you.
[04:58:40] Yeah, bundle size alone is not causing performance problems.  I'm taking this completely out of context...
[04:58:46] But, um...
[04:58:49] I...
[04:58:50] I'm talking about the way things are authored the way like way things work like just lots of things
[04:58:55] Lots of elements.
[04:59:00] Thank you.
[04:59:04] What's the main advantage of solid-in-compancy reactor say?
[04:59:07] I mean, this came up a bit with a better React thing comment.  It's just like, it's a different model...
[04:59:13] which kind of
[04:59:15] I think the way that it's built on primitives,
[04:59:19] gives a different kind of scaling. Don't be wrong, React is built on permanence too, like the components permanence, but our permanence are smaller than components. And it's the size isn't what matters, it's the relation of like what the UI and the state is.
[04:59:33] separation that lets things kind of
[04:59:36] be bundled or sliced up a different way and lets the behavior work a different way that
[04:59:40] performance scaling works in a different way.
[04:59:44] that composability
[04:59:46] applies well to a React model, but it also applies to other models.  And I think one of the most interesting things about that from Solid is understanding that with these kind of change systems,
[04:59:58] And this kind of
[05:00:00] allows us to kind of
[05:00:01] get away from certain types of higher level abstractions, which lets us retain the control.
[05:00:08] These are things that I came to appreciate working on long term projects for years and years and years. And I never wanted to give up that control. I've always liked that about this approach even before I authored solid and that's what got into solid being the way it is.
[05:00:20] It's hard to...
[05:00:23] sell that to your boss exactly,  like haven't figured out how to put that in words,
[05:00:27] But like, you know, in a way that's like concise and silly, people are just like, it's better react, you know, but like, it's not it's it's really.
[05:00:34] it's rethinking the way we
[05:00:38] like compose
[05:00:39] state and
[05:00:41] Compose
[05:00:42] UI interaction. There's a reason that this sort of reactivity
[05:00:46] is fueling
[05:00:48] resumability and
[05:00:49] you know, is inspired things, you know, like, um, Marco Six's rewrite, and stuff like, um,
[05:00:59] even quick to a certain degree, but like
[05:01:01] in certain ways,  like you can make things even more optimal if they,
[05:01:04] took things even further that direction,  although there's complexity there.  But, like, what I'm getting at is, like,
[05:01:09] I think there's a huge amount of potential...
[05:01:12] in getting away from the model that we've been using for years and years.
[05:01:16] even though that can be proven to be stable,
[05:01:20] Thank you.
[05:01:20] we're like a whole...
[05:01:23] There's a whole new
[05:01:26] world to explore here.  And as I said, that's not going to
[05:01:30] Thank you.
[05:01:30] sell you at your job today
[05:01:33] But we're just starting to unlock that potential.
[05:01:43] Thank you.
[05:01:47] I...
[05:01:49] I do think Islands and RFCs solve the size and execution problem significantly.  Maybe not React RFCs, but in general, I think the approach has significant wins, too.
[05:02:00] Thank you.
[05:02:05] Thank you.
[05:02:07] Thank you.
[05:02:07] I mean, at a certain point, if your whole app is in JavaScript,
[05:02:11] And it is a large...  Like, we're on the Figma side of things.  Like...
[05:02:16] I don't think that's where people are generally complaining.
[05:02:21] Thank you.
[05:02:24] There's a lot of discussion here.
[05:02:27] I think Fuzzy wants you to acknowledge X element.
[05:02:30] probably  um
[05:02:36] Ooh, I mean, what do I want to say about X element other than
[05:02:40] Thank you.
[05:02:43] uh keels here uh it's okay we we love what you do so don't worry about it um yeah no what do i  want to say what x element x element when i first tried it was the first thing that i felt that  felt like native astro i don't know how else to put it but it felt not astro native so it felt  like it really fit in with what astro was doing like better than any kind of client island approach  so if you're staying really close to the like bare metal and being like mostly server thing it
[05:03:13] really natural feel and how it
[05:03:15] fits into your astro templates where you're just like,  no,  I don't need a declarative like react or solid or whatever,  Svelte or whatever.  Xelement really fits in that.
[05:03:32] Maybe some variation.  I mean, at least it's trendy right now.  I don't...  Right now, I don't know if there's like another option...
[05:03:40] to really solve this i mean you can say quick is but quick
[05:03:44] It's up.
[05:03:45] Quick is a variation, but it's harder to reach.  And I think...
[05:03:50] when you go to the next step,  that's where things get interesting  when you get to like the more RSC side.  So I don't know if islands will make it all there,  but it's the RSC, like the, sorry,  the server component side  that makes things interesting that might make...
[05:04:01] people go there.  But I don't know  how all frameworks follow.  Like, I don't, like,  we're talking kind of like  a new architecture here.  Like, the reason  the pages in the app folder  is different.  I don't feel like,  I feel like
[05:04:11] React's kind of been kind of underplaying that part,  like not really emphasizing how much of a change is happening,  kind of like because they're like, yeah, we want you all to kind of stay here  and not acknowledge that this is kind of like an ecosystem reset.
[05:04:25] Like...
[05:04:26] like...
[05:04:28] I don't know that islands will necessarily,  but I think we're going to see a lot more server components  or things like that,  which is basically extension of islands.  I think that's when the flick...
[05:04:38] happens where people are like, "Oh,
[05:04:40] We can keep those benefits to single page apps.  No one really wants to give that up.
[05:04:46] All right. Prisma works in Dino. That's good.  So then is it just Cloudflare we have to worry about?
[05:04:55] That is true. This is a Prisma template, our T3 equivalent, JD.
[05:05:01] Oh, right.
[05:05:03] So,
[05:05:05] What are we doing here?
[05:05:09] Yeah. Is that on us or is that, or is that on, uh,
[05:05:14] Or is that on...
[05:05:15] on
[05:05:16] on like
[05:05:17] Just in general.
[05:05:21] Thank you.
[05:05:23] Just curious.
[05:05:26] Thank you.
[05:05:31] Thank you.
[05:05:32] I probably have to scroll to the bottom to actually get the answer to that question.
[05:05:36] Thank you.
[05:05:37] So
[05:05:38] I should just like put that out there
[05:05:44] Someone asked me what I think about Svelte. I don't know if I want to get into it just yet. Let's see if so. Page forms is very general. Blah, blah, blah. People talking performance.
[05:05:53] Fuzzy.
[05:06:05] Signals will make its way into everything, yes.
[05:06:09] That's just how Prisma works, yeah.
[05:06:11] Hmm. Unfortunate.
[05:06:15] Okay, should I say something about Svelte?
[05:06:18] I can say a couple words on Svelte.
[05:06:20] Because one of the things I like talking about Svelte, and maybe this might be towards the end of what we talked about today, is that...
[05:06:27] Svelte and solid.
[05:06:29] have sometimes so little in common
[05:06:32] that I don't even... I'm not too concerned about...
[05:06:38] Like having opinions about that or,  you know what I mean?  Like,
[05:06:42] And sometimes me and Rich sit there and we're just like, I remember he's like, if you like JSX, use Solid. If you like templates, use Solid. He sometimes just says that as the differentiator. And it's just kind of like, yeah, you know.
[05:06:54] Because like...
[05:06:56] It goes deeper than that, but that's like the easiest way of summarizing it for someone who...
[05:07:02] who might not quite like
[05:07:04] Follow the whole conversation so to speak because like I
[05:07:10] felt kind of
[05:07:11] Thank you.
[05:07:12] They want to make the web
[05:07:15] Easy.
[05:07:16] Like...
[05:07:17] This is my interpretation of it.
[05:07:21] But they're like on this journey where they're like,
[05:07:24] Thank you.
[05:07:25] They're kind of almost unapologetic in how
[05:07:28] restrictive they want their abstraction to be. That might sound bad, but it's incredibly good, because it means that
[05:07:38] There's less leaks. It means that it makes sense. It means it makes consistent means that it can be beautiful and
[05:07:44] There's no exceptions.
[05:07:47] Like
[05:07:51] Like,
[05:07:53] there are limitations in that and there's trade-offs, but there's something kind of
[05:07:59] pure in that design essence where you can kind of go in and you write JavaScript.
[05:08:04] sort of something that looks like JavaScript,  and then you can just, like...
[05:08:07] just build stuff and anyone feels like they can just pick it up and it's their thing.
[05:08:11] It's like their JavaScript.  I think that's super, super powerful.
[05:08:17] Um, and I,
[05:08:19] and that's why like when people are like you know talk about selling stuff i'm just like you know
[05:08:24] They're really good at that.  It's funny because Vue has elements of that and
[05:08:28] And, um...
[05:08:29] But like view.
[05:08:31] - Mm.
[05:08:32] kind of wasn't willing to go all in that way in a sense they were like no no but there's these  trade-offs and we need to consider that so like they they're like no no we can't go all the way
[05:08:42] So it was just like, screw it, we're going all the way.
[05:08:45] And like that kind of purity from a design standpoint, and I don't just mean like visual design, I mean design standpoint, is something that's so like, I have so much respect for. Same reason why I have respect for stuff like React to Large Sugar, because like, they know where they're going, and they understand it, and they build to without compromise.
[05:09:04] That
[05:09:06] That is like how you can find like
[05:09:08] Kind of this...
[05:09:11] Like, if you can define that philosophy for yourself and you know where you're going, like...
[05:09:16] things tend to fall in place for you naturally because you're making this  decisions for things that align with each other.  And then the next decision just aligns with it and everything just kind of  snowballs and you,
[05:09:27] And you can find almost like a natural home for it and
[05:09:30] I know I'm going to get it.
[05:09:32] you know, kind of in the weeds there, maybe perhaps for most people.  But that's what I like a lot about Svelte is because...
[05:09:42] Like, they might...
[05:09:44] tie your hands a little bit,
[05:09:46] in certain things, but you...
[05:09:48] You...
[05:09:49] you never really sense that because like,
[05:09:51] you're just so happy to be there.
[05:10:01] You know? I mean, it's different for me with Solid.  Because Solid...
[05:10:09] I try to be that pure at times.
[05:10:12] But I know that I've caved to a couple of the...
[05:10:17] compromises over time and every time I've learned that I pay for that decision
[05:10:23] You know?
[05:10:25] Um...
[05:10:26] But the thing with Solid was it was a different goal.  It...
[05:10:29] It wasn't about having everyone who used it feel like it was just theirs, that it was so easy to use.
[05:10:35] I want it solid to be simple.
[05:10:37] I wanted everyone to use to feel like they could have written it themselves.
[05:10:41] Which is, it's different.
[05:10:42] kind of thing. It's not easy, but it means like, like, hey, I see it. I fully
[05:10:48] understand how this works. This is my framework.
[05:10:52] And this speaks more to people who are a little bit more advanced or further in their career.
[05:10:56] But it's like, if you get to the point where you can get the learning curve and you understand solid, I want you to feel like,
[05:11:01] like essentially like
[05:11:04] Yeah, like...
[05:11:05] This almost doesn't need to exist because I could have written it.
[05:11:11] And like as I said, that's a very that's why I'm like I
[05:11:15] like Svelte and Svelte don't really like have this overlap because like like you just see the values like so I
[05:11:22] opposite on that side. And the funny thing is, some, the perfect example of simplicity is something like Redux in a sense, where like, you have all this boilerplate, but the cause is really easy. It's like a reducer, like a scan function, it's like very simple, and you just kind of build on it.
[05:11:37] The thing is what's in
[05:11:39] Sometimes that gets hard because you've got to like go through all the ceremony. What's interesting to me is like with the right primitives or something like you can find the right
[05:11:47] small, low-level pieces...
[05:11:49] And the right language to describe it, like...
[05:11:53] There does come a bit of that...
[05:11:56] how should I put it, like when you kind of go off the deep end on the opposite side of the graph, it kind of wraps around a bit.
[05:12:01] Um,
[05:12:03] Like when does...
[05:12:04] uh,
[05:12:06] I mean, I hate making this confidacism, but when does socialism become fascism?
[05:12:11] Like...
[05:12:14] Sometimes if you go far enough on the simple and you can redefine the boundaries, it actually does make it
[05:12:22] easy as well.  But that isn't really the goal.  The goal was that
[05:12:28] I wanted something that, like, always felt in control of.  That, like, could understand...
[05:12:34] how it worked.
[05:12:37] Obviously, there's been compromises to kind of make go back the other way to like the view scenario where we make things kind of easier and like you're like, oh, this would be helpful because it saves boilerplate or mixing shorter. And I as I said, I regret it every single time. But
[05:12:52] Um...
[05:12:53] because over time you just realize like that that little bit is just like the thing that
[05:12:58] you wedged in the way yourself, but essentially
[05:13:02] Um...
[05:13:04] You can see how the different design philosophies mean we don't butt heads very much.
[05:13:08] Thank you.
[05:13:12] Thank you.
[05:13:13] Thank you.
[05:13:18] I'm going to go.
[05:13:23] I mean, this is probably more accurate in reality, yeah.
[05:13:28] Thank you.
[05:13:29] Yeah.
[05:13:32] So I know that wasn't, it's just kind of interesting because like...
[05:13:37] There was a...
[05:13:39] Did I... I didn't...
[05:13:40] Good.
[05:13:42] I...
[05:13:43] Oh...
[05:13:44] Did I not...
[05:13:45] Sorry, give me two seconds. I'm gonna see if I can find it. It might still be in my notifications because people kept on pinging me.  Ben
[05:13:54] Holmes wrote a tweet where he was like,
[05:13:57] Hey, I think...
[05:13:59] I think
[05:14:00] uh svelte has the best form handling out of any framework
[05:14:05] you know
[05:14:06] changed my mind, right?
[05:14:08] And...
[05:14:11] Let me see if I can find it
[05:14:13] I want to share this last one.
[05:14:17] Thank you.
[05:14:17] Ben...
[05:14:19] because then we can actually
[05:14:23] What? What?
[05:14:24] Come on.
[05:14:30] Sorry, I am searching off screen, but it's just like, you think that when you have people who follow each other,
[05:14:36] like, it would shortcut that for me. Maybe I'm just not looking
[05:14:40] I just need someone to actually like the stream again I can find in my notifications.
[05:14:45] This is my fault for not bookmarking this one. I should have definitely bookmarked this one. Let me see here.
[05:14:50] B homes where we're going
[05:14:53] Da da da da da.
[05:14:56] There it is. Found it. Alright.
[05:14:58] Mm-hmm.
[05:14:59] Thank you.
[05:14:59] I think this...
[05:15:02] this conversation is like right on point.
[05:15:05] you know,
[05:15:07] .
[05:15:09] I kind of cheekily asked, okay, how does it handle eight forms on the same page?  Because this has kind of been like a concern with Remix.  And I saw the SvelteKit solution originally.  I was like, oh, it's kind of have that.  Like we had to do some thought with Solid Start to make things work.
[05:15:23] Um
[05:15:24] And then Ben's like, no, no, no, no, we can do multi-exports.
[05:15:28] So it's not that different than how we do
[05:15:31] Server actions.
[05:15:32] where you can like have multiple ones in the same file. It's like, okay, okay.  I'm listening. Like, this is good. So I said, that's nice. Sold.  If one were so inclined to tie it to routing, that seems like the way.  So I wouldn't be begrudging anyone for thinking that the best form solution is  equally as good as other options.
[05:15:47] Apparently that response is actually...
[05:15:51] humorous. I'm laughing at it right now because I was trying... this is like  legitimately me actually giving... I think...
[05:16:01] Adam Rackis,  uh,
[05:16:03] who replied actually, this is the highest praise I've ever seen on this website.  I think he got that.  This was actually giving Svelte...
[05:16:12] Um, like, this is actually high praise from me.  He, he, he, it might not be obvious.  Some people might think there's sarcasm here.  I'm actually, what I was trying to say is...
[05:16:23] This makes a lot of sense. If this was the approach I was looking at taking, I'd want to take this approach.
[05:16:29] So I can understand why someone would think this is a really good solution.
[05:16:32] And like
[05:16:33] Because you don't really lose anything on the trade-offs.  And it's very similar to what we're doing in Solid Start.  You get the same kind of benefits from it.  That's all I was trying to say.  But...
[05:16:46] It's like the most non-committal compliment ever.
[05:16:52] So, yeah, you know, still not so-spoken-glow-like reviews from highly respected critics are already rolling in.
[05:16:59] Um...
[05:17:00] Yeah, so funny, funny moment for me, at least I this didn't come out right. I
[05:17:07] But yes, I think this is...  I think their form handling approach is really, really quite nice.  So, um...
[05:17:12] *laughs*
[05:17:16] man, I
[05:17:19] Sometimes words.
[05:17:24] yeah no it's good
[05:17:28] -
[05:17:35] - Thank you.
[05:17:36] Yeah, so...
[05:17:43] Yeah, yeah, um, yeah.
[05:17:47] Yeah, yeah, no, I mean...
[05:17:48] More than that, actually. I mean, that's...
[05:17:52] Yeah, I...
[05:17:54] I... I...
[05:17:55] It...
[05:17:56] it actually makes sense on that side of things.  There's, like, other considerations that come into design.  Like, Svelte would never do what we're doing in Solid Start exactly.  It doesn't make sense.  So, like, I actually think this is, like,  a very good solution for Svelte,  and it actually, like, all kind of...
[05:18:13] you know,
[05:18:14] ties in. So it's even more than that piece.  Because when you work on this from a design aspect,  you've got to like...
[05:18:22] I feel like you need to approach it like a designer, where you actually go, "Hey, how do I think of this from the perspective
[05:18:29] of
[05:18:29] like the project or the framework that I'm working on.  I remember I worked on Marco, and in some ways Marco and Solid
[05:18:35] while like there's some
[05:18:38] technological inspiration on both sides,  especially around Marco server rendering technology approaches and solids,  like fine grainedness getting into Marco.  Like there is some philosophical differences on these approaches where I,  like I had to be very considerate, like when we'd make decisions, we'd be like,
[05:18:53] Is that the right decision for Marco?
[05:18:55] Does that fit what the users expect?  Is it consistent with the design philosophy?  I think this is a very, very important thing.  'Cause if you don't follow the design philosophy,  you might end up with like,
[05:19:07] Yeah, especially with reactivity.  You can literally do anything with reactivity.  I say this over and over again.
[05:19:13] This is very dangerous. Doing anything with reactivity means... it's like you could literally make a framework that tries to do everything at the same time.
[05:19:21] And that doesn't always turn out. You might have like five different syntaxes for the slightly different things. And like, it's actually good to streamline stuff and limit options. You want to keep things adaptable, but not flexible.
[05:19:32] Flexible is bad. Flexible means like there's too much config or too many ways to config.  You'd rather just like have a thing do its thing really well
[05:19:39] and just work in multiple scenarios, you know, with like slight
[05:19:43] positioning, like twist the Tetris piece. Like don't, you don't want to like,
[05:19:47] It's a...
[05:19:48] like,
[05:19:49] You have too many dials like I'm not a big fan. I know there's like a lot of sayings about you know like just have all the right dials. I hate dials.
[05:19:57] Get rid of them, right?  Like, I just...  I want pieces that just make sense.  Yeah.
[05:20:02] and can be used in like that are versatile not like just
[05:20:07] Yeah.
[05:20:07] I know. Dials are terrible.
[05:20:12] I know people disagree with me. This is
[05:20:16] part of, you know, Sol's design philosophy.
[05:20:21] you know like
[05:20:22] *laughs*
[05:20:25] Yeah, but like it's not every framework's design philosophy, you know, I have.
[05:20:30] Just...
[05:20:31] I think it's important to kind of
[05:20:34] - Yeah.
[05:20:34] understand, like,
[05:20:37] those kind of
[05:20:38] pieces you know it's like any product
[05:20:42] Right.  Um,
[05:20:44] And
[05:20:44] It's perfectly okay to enter a space...
[05:20:47] And not...
[05:20:49] completely bring your own bias on it.  Like, I actually...
[05:20:52] Everyone knows how I am not a fan of two-way binding. Like, I think two-way binding is...
[05:20:57] terrible, like just one of the worst things ever, like just
[05:21:01] So bad.
[05:21:03] Like I can't emphasize how bad it is.
[05:21:06] But I was part of the team that added it to Marco 6.
[05:21:11] Thank you.
[05:21:13] Thank you.
[05:21:18] and
[05:21:19] Like...
[05:21:20] I'm okay with that.
[05:21:23] Yeah.
[05:21:24] Because it sometimes makes more sense in certain frameworks, especially on the language side where you can keep the constraints like Axiom Svelte.
[05:21:31] two-way binding
[05:21:32] is almost
[05:21:34] good. I think that I could picture if I was them, maybe how I'd tweak it to be
[05:21:39] even
[05:21:40] like slightly better but I'm okay with two-way binding and svelte because the way svelte works
[05:21:44] If that makes sense.
[05:21:46] But like that
[05:21:48] you can have that
[05:21:52] perspective, even if like personally where your leanings are like, it is like the worst thing that has ever existed.
[05:22:00] Yeah.
[05:22:03] So I don't know. Maybe that's enough from using on framework philosophy.  It's complicated. That's why my responses are complicated and
[05:22:11] vague just the way that sits in my head
[05:22:13] So--
[05:22:14] Yeah.
[05:22:16] This is why we have frameworks.  Yeah, because like...
[05:22:19] Frameworks are a framework of thinking.
[05:22:24] I realize this is pointing up to someone else's comment.
[05:22:29] But I'm going to take it from my own context.
[05:22:33] Like...
[05:22:36] Right
[05:22:38] so
[05:22:40] Thank you.
[05:22:42] Alright. I'm good.
[05:22:44] I hope you are all good. We've probably drained the viewers off, you know, like kind of just like they're slowly leaving. We're going to check Twitch one more time to make sure that I didn't miss anything.
[05:22:56] Um...
[05:23:00] Oh, that's funny.  I didn't...
[05:23:03] I didn't
[05:23:04] I didn't share the screen when I was talking about the SvelteKit comment, did I?
[05:23:08] *sniff*
[05:23:09] Uh...
[05:23:11] Whatever.
[05:23:15] I read it out loud.  That's good enough for you all.
[05:23:18] *laughs*
[05:23:19] All right.
[05:23:21] Anyways, yeah, let's call it a stream.  Thank you, everyone, for joining me.
[05:23:25] I haven't decided if I'm going to do a stream next week. I probably am and then I'm going to be off for like the holidays. But...
[05:23:35] - The first time I was in the hospital, I was in the hospital.
[05:23:36] I think...
[05:23:38] - All right.
[05:23:39] I think we're good for today.  So have a great weekend and until next time.