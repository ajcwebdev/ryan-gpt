---
title: "_914md6XXcg"
slug: "_914md6XXcg"
duration: "4:58:22"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/_914md6XXcg.m4a"
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
[00:00:01] Hey everyone, welcome to my stream today. It's been a little while, so...
[00:00:06] Hopefully...
[00:00:08] Everything's going to work.
[00:00:10] You know, sometimes I hit some technical issues here when I haven't been doing much on this Mac.
[00:00:17] as
[00:00:18] Some of you may know I've been away for about six weeks. Had
[00:00:27] uh, baby. Um,
[00:00:31] little boy, Niko.
[00:00:33] So, uh...
[00:00:36] Yeah.
[00:00:38] It's been... it's been a little while here.
[00:00:43] I
[00:00:44] Yeah, come in and say hi in the chat. Sorry, I'm just getting my desk a little oriented because, uh,
[00:00:50] I mean, also in the process of switching personal computers. So I actually got like three computers sitting here, like laptops. I have like my Mac Pro from work, which I'm using right now to stream, talk to you all. And then I got...
[00:01:04] my new
[00:01:06] MacBook Air that I luckily ordered way back before the RAM shortage happened. So I got a decent price.  M5 with 32 gigs of RAM. I just maxed the RAM. I probably could have got a Pro, but I've always liked the Air. It just fits me.  And then
[00:01:21] I have my previous M1 Air, the thing that basically has been my workhorse for years and years sitting right here too.
[00:01:28] And it's such a pain trying to migrate stuff because there's like
[00:01:32] so many active threads. Right now I'm talking to AI agents like on all three computers at the same time. Anyway, we're getting there. I was just doing a solid release as usual right before the stream. That's when I'd like to release.
[00:01:45] It seems like, but what I actually wanted to do was get a beat
[00:01:48] plugin release out as well. So we can see how that goes. But I'm excited today. Obviously, I want to talk about you might be thinking, Oh, you can gone for six weeks, what could you possibly have to talk about? And honestly, I don't have much in the current event stuff. It was kind of funny. I was
[00:02:08] Um...
[00:02:11] Thank you.
[00:02:12] I was basically
[00:02:14] doing my work went on vacation heard some rumors about some like you know mythos finally being  released in the form of fable and then got taken away and the whole thing and i literally went  back to work the day that fable was reinstated so it's like i i didn't miss anything while i was  gone um
[00:02:29] um
[00:02:32] .
[00:02:33] *sniff*
[00:02:33] Yeah. So
[00:02:36] Yeah, I don't know. I mean, obviously a few thoughts on this stuff, because it is kind of shaping how we approach the design stuff. Obviously, this is an ongoing thing. We've been seeing this in the stream for a while now, but...
[00:02:47] Um,
[00:02:49] The
[00:02:50] Figure piece is
[00:02:52] I went away.
[00:02:54] And
[00:02:56] these new better models came out and I was
[00:02:58] Solid repo, which I don't know if people noticed, right before I went, I managed to close it down to about 15 open issues and I closed every PR.
[00:03:06] I did a solid one release, solid two release, and the repo was basically empty.
[00:03:10] just enhancements. I was pretty happy with that. And
[00:03:15] I leave.
[00:03:17] And I just get hit with like, we just get hit with like a ton of issues while I'm gone. And it's all against the beta. Basically, at least a couple people I feel like basically got their AI going and saying like bug hunt here because like the types of stuff was very...
[00:03:33] like a lot of stuff was valuable, but a lot of it, like a lot of, uh,
[00:03:37] esoteric, like very weird edge cases.  You're like, what the hell were they doing to...
[00:03:42] trigger this and it's like oh no it was like
[00:03:45] Clearly,
[00:03:46] *laughs*
[00:03:47] LLM like doing like bug hunts, which honestly I think
[00:03:51] helps a lot because you start seeing all the different scenarios and you start needing to make technical decisions on it.  And the thing that started becoming really clear to me is...
[00:04:02] Thank you.
[00:04:03] Thank you.
[00:04:04] that, you know, there are a lot of decision points,  and a lot of them aren't completely clear.  We do follow a thread
[00:04:13] to a certain degree, where we're like,
[00:04:15] have a bunch of axioms that we try to follow, you know, and then try and build the system out from that. But like,
[00:04:23] trying to wade through it.  Like sometimes the answers aren't always obvious.  And part of it is the model that you're trying to build isn't always  obvious.  And I think,  um,
[00:04:33] I think that's really what I want to talk about today.
[00:04:39] I mean, stepping back, there's probably an even bigger question.  Like, why are you even here?  Why are you watching the stream?  Why are we even talking about this stuff?  You know,
[00:04:50] when you know ai is writing the code and i feel like that's why i want to broach this topic a bit  too but it's
[00:04:56] Um...
[00:04:58] If you're already here, you're kind of already...
[00:05:01] probably know why you're here.  It's just, I think...
[00:05:05] I think...
[00:05:09] I think there's an interesting divergence happening of like, of almost extreme opinions.
[00:05:15] And
[00:05:16] Obviously where we land is going to be somewhere closer to the middle.
[00:05:20] Um, it's just funny though, when I look at my, uh,
[00:05:25] uh my twitter timeline so to speak or whatever um
[00:05:29] or X,
[00:05:32] the kind of discussions going on, I mean, it has a way of being hyperbolic obviously, but it's kind of like,
[00:05:42] Like, I mean, you know it.
[00:05:44] It's...
[00:05:45] the impact that AI is having on our,
[00:05:48] the way we build or look at things is pretty profound.  But at the same time,
[00:05:53] uh,
[00:05:55] It's still very clear that not many people have a grasp of what it actually means.
[00:05:59] But again, we're not really here to necessarily talk about AI, but it does fringe...
[00:06:05] on some of the design aspects we have to consider and the importance of like mechanical, um,
[00:06:12] functional pieces versus like
[00:06:16] Perspective pieces. Composition starts becoming a really important piece when you expect
[00:06:23] parts to be...
[00:06:24] developed in isolation. I mean, this was always React's strength.
[00:06:28] And
[00:06:29] Um,
[00:06:30] a lot of the struggle here working with async
[00:06:33] is composition. I think this is
[00:06:36] Why?
[00:06:38] Async is...
[00:06:40] been hard because it's like you're
[00:06:42] threading this very imperative, like sequential
[00:06:46] thing where like this, then this, then this through a whole system, um, of changes. And  you're, and you kind of feel like you're almost like back at jQuery again.
[00:06:54] - Yes.
[00:06:55] And
[00:06:57] if we want to provide the same constructor, like the same kind of, um,
[00:07:02] you know,
[00:07:04] confidence, the way we can look at the code and understand what it does. We have to figure out how to model that in a reasonable way.
[00:07:15] As I started playing around with patterns, it was very easy to go, "Oh, I can make this work this way. I can make this work this way." And I've been showcasing that on my stream for
[00:07:25] the last several months, right? But when you start going, okay, well, what if I want to make this reusable? You start kind of like,
[00:07:34] having to re-examine where the responsibilities lie. And I think that's a really important part of the design of the system. And for the most part, I'm actually really happy and I'll go over some of those pieces today.
[00:07:45] But there's still some open questions.  Something's shifted.  And I'm watching the kind of community...
[00:07:53] wrap their head around these patterns because they're not,  they're not necessarily clear.  And I think,
[00:08:00] I think it's like Excalibur time actually, because I think...
[00:08:05] I think this starts
[00:08:06] a bit with looking
[00:08:09] at the cycle. And I'm hoping that I can do a decent job of
[00:08:14] of drawing what I need to draw today.
[00:08:16] Because the challenge that I've faced every time in the past that I've
[00:08:21] been working on trying to do these diagrams is they're not very good.
[00:08:25] and
[00:08:27] It's it's not very clear.  That's a bit on me, but let's see if we can.
[00:08:32] find ourselves in a place that's a little better. So let me share my screen here and we can get started.
[00:08:39] All right, let's...
[00:08:40] Open that up.
[00:08:43] Sorry, chat, just me preambling a bit.
[00:08:47] But you guys are alive, right?
[00:08:52] Yeah.
[00:08:53] Yeah, people saying hi in the chat, sorry.
[00:09:00] I mean, if you want to see what I'm talking about,
[00:09:07] I mean, I'm just going to go to the GitHub. You'll see straight off what I'm talking about in terms of...
[00:09:14] like solid here. Let's look at issues. Let's look at closed issues.
[00:09:19] For a second.
[00:09:22] I mean, this guy...
[00:09:27] There's one night, you know, I've been, I was away from my computer, right?  Like I wasn't on it, but my phone still gets emails from GitHub.
[00:09:35] And like every 20 minutes there was a new bug and it went for like,
[00:09:40] It went for like almost 24 hours.
[00:09:43] Um...
[00:09:44] But...
[00:09:45] Yeah, I mean...
[00:09:47] Brenly's in here too, he's been writing a lot of articles.  But if you go through,
[00:09:53] This is page one, let's go to page three.
[00:09:56] It's still going right.
[00:09:58] Even though I was away,
[00:10:00] we managed
[00:10:03] You know, if you look at it, I'm caught back up to where we are.  These are 1-0 issues now.  Yeah.
[00:10:09] Um,
[00:10:10] Again, thank you, Fable. But...
[00:10:14] Yeah, when did I, when did, May 20th, May 20th, yeah.
[00:10:18] So...
[00:10:20] Thank you.
[00:10:23] Thank you.
[00:10:24] Around here is where...
[00:10:27] um
[00:10:29] I left. So we have just over half a page of
[00:10:33] page four and then we have basically three full pages each of 25. So close to, let's say almost 100 issues
[00:10:41] um against uh the the beta that we fixed um a lot of this like as i said ai driven um
[00:10:49] Thank you.
[00:10:50] Thank you.
[00:10:54] Thank you.
[00:10:55] Thank you.
[00:10:57] Andrew saying that bug-inherentizings model need to be forced by throwing engineers into it are the same argument that reacts issues can be so...
[00:11:09] You'd like to hear more about the Rust compiler.  I mean, we could talk about it a bit.  Definitely.  Yeah.
[00:11:18] This is one of those...
[00:11:21] I realized also, well, I mean, I started the Rust compiler.  I did a lot of the work before I went on break.
[00:11:27] But...
[00:11:29] I started realizing right around that time that
[00:11:32] I haven't been nearly ambitious enough to,
[00:11:35] I've been worried about burning through credits and all that kind of stuff.  And it's expensive, but
[00:11:42] The way the physics change, like in terms of like how much stuff costs to development is meant that like, I don't think we're being ambitious enough. I mean,
[00:11:54] It depends on where you sit and what kind of project, but
[00:11:57] Yeah.
[00:11:58] I've seen a lot of discussion, and again, I don't want to get too much into AI, but where now that, you know,
[00:12:02] People have AI that can build like anything.  And for a lot of product teams and a lot of like products,  it's actually kind of a bad thing.  You don't want to build anything.  You want to be discerning enough to only build what's important.  Building everything isn't always a good thing.  And I,  you know,  I saw some videos where people talking about like the,
[00:12:18] prime benefit of like
[00:12:19] big movers in the industry, let's say like a Salesforce is like, even though you might have better Salesforce, you, you, you don't have like a million of these like tiny little features for important customers, which keeps them on your platform. But the problem is like the small guys never can be incentivized to build those things. They make them move slower. There's like lots of like mess. So once you're hooked in, you're not going to leave.
[00:12:42] So I mean there's that whole argument, but on the other hand you don't want to be sitting there just building a bunch of crap for one person and you don't want to, you know, be mired in like the complexity comes with special casing and
[00:12:55] I get that. And you know, like,
[00:12:57] more AI, more slop, you know, that whole thing. But
[00:13:00] What if you're
[00:13:02] *sniff*
[00:13:03] Constraint.
[00:13:05] Um...
[00:13:08] like isn't because of your customers wanting a feature. What if your constraint is
[00:13:12] Like,
[00:13:13] you have a vision of how things should work, but you just literally don't have the resources to get there.
[00:13:18] right it's not a question of like
[00:13:22] what should we build? You know exactly what you should build. You've already scoped it as tight as you could possibly get.
[00:13:28] You literally just don't have the means to get there.
[00:13:32] then AI is a completely different...
[00:13:33] game right
[00:13:35] like,
[00:13:36] That's where like the Jared Bunn
[00:13:38] migration comes in or whatever, right?
[00:13:41] What if he
[00:13:42] taken three developers and spent a year on doing that rewrite,
[00:13:46] That's pretty costly.  Or can he dismantle himself himself?
[00:13:49] over a couple weeks or a month or whatever, and get to where he needs to get.
[00:13:55] There's huge benefits to the one-person model. First of all, the communication.
[00:14:01] barrier of like different people, different things, coordination.
[00:14:04] Sure, he takes that on himself.
[00:14:06] But he's not having to worry about...
[00:14:10] other people. In fact, one person sometimes can be faster than three people in that sense. Um, but,
[00:14:16] And
[00:14:17] And.
[00:14:19] Once he has a model that's capable enough of doing the work and, you know, doing the parity testing, like...
[00:14:24] you can kind of just turn through it like a migration task.  And as I said, this sort of brings me to even our Rust compiler thing.  It's obviously not big as a project of the moving bun, but that kind of task is
[00:14:35] a prime example of like
[00:14:38] prohibitives suddenly like quite possible. And let's say I actually don't really know Rust. My, my, the limit of my Rust knowledge is what Greg from Leptos showed me on stream. Like I get the basic concepts of how memory management and ownership work, but I, I am
[00:14:55] I am
[00:14:57] I don't know how to code Rust. So, and the interesting thing for me at least is on that side is
[00:15:03] This isn't a place
[00:15:06] Like performance is important, but it's already
[00:15:09] like fast enough from my perspective over the outgoing that like,
[00:15:15] I don't need it to be the most performant. Like what I care about from a performance standpoint ultimately is that the developer, not the developer, but the user of your software gets the best performance. So
[00:15:26] Like I was okay with Babbel.
[00:15:28] Thank you.
[00:15:29] like
[00:15:31] I'm sure if the Rust thing works, it's an improvement. You know what I mean? So yeah, look at DOM expressions.
[00:15:38] What are we doing with DOM expressions?
[00:15:40] Let's go to
[00:15:43] I'm just going to throw this out here. Let's go to next.
[00:15:46] Let's go to packages.
[00:15:48] And I've re-scoped them.  They're now under @domExpressions.  And let's go to JSX compiler.
[00:15:54] And
[00:15:56] Um,
[00:15:57] We actually set it up so that it actually, the test suite, the fixtures,
[00:16:02] don't actually have the input, they just have the output.
[00:16:04] It actually uses the same fixtures that the Babel
[00:16:08] plugin uses to try and keep in line and then hopefully produces very similar code.  There are some differences, so there's like a translation layer and I had some issues where
[00:16:20] I actually wrote about this a bit on X where...
[00:16:23] *sniff*
[00:16:24] Like Opus 4.8 just talked out of its...
[00:16:27] But basically, sorry to put it, that like everything was parody and like then I ran it and like even though the tests all passed, like nothing worked. So I spent the last few days getting, um,
[00:16:37] Uh...
[00:16:39] I
[00:16:40] Thank you.
[00:16:41] getting, whatchacallit,
[00:16:44] Mm-hmm.
[00:16:44] getting this back at the parody. I actually just before the stream
[00:16:48] ran a, uh,
[00:16:51] performance benchmark, which is found in the repo.  And this kind of gives you an idea of some of the improvements we see.  Right. This is the Babel plugin.  This is the native plugin fixtures.  So this is our test suite.
[00:17:02] Babel takes 151 milliseconds to do it, Rust takes 8.
[00:17:08] And then there's a single like
[00:17:11] media, like,
[00:17:12] Small to medium sized module.
[00:17:18] I guess that's a little bit on the larger side.  4.6, JSX compiler, Babel, interesting.
[00:17:24] 50 times and then obviously something absolutely huge.
[00:17:29] Then we're seeing something like 258 times. It's actually a pretty significant
[00:17:36] improvement for larger projects. This is only for Soli 2.0, like it's set up with a new compiler.
[00:17:41] And it's ran on my computer, so it's running on Apple Silicon.
[00:17:46] Uh, so it's on my M5, um,
[00:17:49] air, but...
[00:17:52] Thank you.
[00:17:53] And then, yeah, native through put state that 2027 as input grows, while babbles per cost file grows super linearly, so the gap widens with the file size.
[00:18:01] So there you go.
[00:18:03] That seems pretty sweet.
[00:18:09] Yeah, I fully get him doing it by himself. Too many cooks in the kitchen is real. Yeah, I'm just catching up with you guys chat.
[00:18:23] Thank you.
[00:18:26] Thank you.
[00:18:26] Deep plug and solid a good candidate for us. I mean, I don't know. I, the beat.
[00:18:31] So the way this works is the beat plugin is still
[00:18:34] Um...
[00:18:36] JavaScript, it's Vee, Vee is JavaScript, you know, and then
[00:18:40] You install.
[00:18:42] the
[00:18:44] it installs this JSX compiler, the core library.  And then if I go to npm, you can see,
[00:18:53] uh
[00:18:55] Not solid.
[00:18:57] Where we can't add DOM expressions.
[00:19:03] JSX compiler.
[00:19:07] Yeah.
[00:19:08] The compiler, like now when we publish, we actually publish like
[00:19:13] Um,
[00:19:14] The latest is actually 17.
[00:19:17] Okay.
[00:19:17] So it's on next, OK, but it actually publishes
[00:19:22] each platform and then depending on what computer you installed on the platform it'll automatically grab the binaries for your specific computers.
[00:19:31] So,
[00:19:33] I'm actually in the process.
[00:19:35] where it's just an option. You go plug in solid, you just change compiler from Babel to native, and you get the Rust compiler.
[00:19:46] Okay, so what actually let me see what it says here.
[00:19:51] Thank you.
[00:19:54] Thank you.
[00:19:55] Thank you.
[00:19:56] Thank you.
[00:19:58] Thank you.
[00:20:04] Yeah, it's still doing some bug fixes.  We'll get that going in a little bit.
[00:20:11] The interesting part of the download is that they're tester.js, so ZigRest literally just implementation detail.  Well, that's cool.
[00:20:19] I mean, TSRX is interesting. I haven't really, I was, I, if you, if you haven't checked off on TSRX recently,
[00:20:26] Dominic completely changed the API yet again after our stream.  But I think I like where he's getting the he heard the feedback.
[00:20:35] And he generalized like now that see there's no component keyword.  It's just an app.
[00:20:39] This is actually almost like my proposal, if you remember, where I was just saying using a symbol.  Like, this is actually very, very close to the proposal that I covered on stream a few months ago, where I was talking about my idea of a JIT.
[00:20:51] like how I would handle this because he changed it so that
[00:20:54] All right.
[00:20:55] it's back to being like JSX. So like you don't have to, uh, extra message is fine,  but I think you change it so you don't have to escape the strings.
[00:21:05] He basically returned to the JSX norm.  Yes, he viewed, it's not in a string.
[00:21:12] This is almost identical to what I proposed the future.  So I'm actually even more stoked about this now.  That being said...
[00:21:21] you have a question you gotta ask yourself.  Do you want to have a direct compiler that compiles this
[00:21:26] down to like...
[00:21:30] And so like the same kind of output we get with our other compiler.  That's one option.  The other one is what they've been doing so far is like compile this down to solid JSX and then compile.  It's like you don't really want the two stage, you could argue, but.
[00:21:44] The challenge is,
[00:21:46] Um...
[00:21:48] is, is I, cause I was actually thinking about this.  I was thinking like, you could just, we could just add TSRX  as another option in the V plugin,  and then you could just like turn it on.
[00:21:58] But I was really, it's not coming to mind now, this was like over a month ago, but there  was actually a real struggle with the trade-off between...
[00:22:05] Um,
[00:22:09] and
[00:22:09] I guess the thing is, if we adopt...
[00:22:13] the straight from TSRX straight to the final output, then
[00:22:19] Like we have to accept that, um,
[00:22:22] Thank you.
[00:22:23] Everyone who uses Solid has to be able to handle this format.
[00:22:27] Um,
[00:22:29] Whereas if we only compile it down to our JSX, then this is something that's very much additive to for your projects and there's no expectation there. So there is an interesting trade off. That being said,
[00:22:41] It's like he took all the feedback and maybe even looked again at some of the like my original notes.
[00:22:47] And
[00:22:49] Yeah, I mean, I didn't even realize how much it looked like this.  Like, let me see if I could find my...
[00:22:55] Been so long.
[00:22:56] Um,
[00:22:59] Sign in via GitHub, I think.
[00:23:06] Uh, spicy miso ramen, what's that thing here?
[00:23:11] It's a
[00:23:13] It's an older article.
[00:23:15] Did I write it?
[00:23:26] January?
[00:23:30] Call.
[00:23:33] October last year.
[00:23:36] ExpressionScope, do you see this use of the @ sign?
[00:23:40] Um...
[00:23:42] And then...
[00:23:45] It's funny, I didn't actually use the @ sign at the component level.
[00:23:49] But it's the same mentality...
[00:23:52] because I was really trying to get
[00:23:55] the JSX
[00:23:57] I didn't really dislike the string thing. I came around to the string swap eventually because it made sense. It's actually completely consistent. But...
[00:24:06] My whole argument here is that you're not going to be JSX successor unless you like naturally kind of fit even at a copy and paste level to a certain degree.
[00:24:15] with existing JSX. I feel like
[00:24:18] Um,
[00:24:20] Yeah, the app block is actually kind of funny.  I feel like that's where this has actually landed now, which is pretty cool.  So, yeah.
[00:24:32] I like this. I actually like this a lot. That being said, obviously,
[00:24:36] Our first thing is like, let's see if we can get JSX working. This is interesting though.
[00:24:46] Thank you.
[00:24:48] Thank you.
[00:24:51] Are people just going to use React because of AI? Who cares?  We'll talk about that in a minute or not a minute, a little bit later. I think I think
[00:24:57] I think people are starting to get my argument why that's not going to be the case.
[00:25:02] Some people are still arguing it.
[00:25:05] But...
[00:25:06] The whole React to the last framework thing is garbage.
[00:25:16] See, and this is the thing I wasn't sure either.  I built a plugin that uses OFC.
[00:25:20] Our Rust plugin is OXC. That's how the parser, everything's using OXC. I actually asked the agent, how does this interact? And to be fair, it wasn't Fable, so at this point I don't even know if I trust the agent even said.
[00:25:35] It basically said that...
[00:25:37] the OXC plugins and Beats still JavaScript still get kind of called
[00:25:42] at like,
[00:25:43] per hook level, which I'm like thinking that's not very efficient if we have to keep them going from the JS to the rust level like at every file, but
[00:25:50] That's what they told me. It's probably wrong.
[00:25:55] I
[00:25:56] So, you want to use these variable tokens? Maybe.
[00:26:00] Honestly, everyone has their own personality and like how they fit like with the different agents.
[00:26:05] I think I'm starting to feel that I am biased towards Anthropic.
[00:26:09] I've used the GPT models and you know this, but
[00:26:14] even like before with 5.5, with GPT and like all 5.4,  and all through the history,  every time I've used an anthropic model,  even one that's like,
[00:26:22] in all the benchmarks worse or whatever. I get along with the Anthropic model more.
[00:26:26] I like its attitude better. I feel like it's more thoughtful.
[00:26:32] I feel like it's not some cocky asshole.  I know some people have different experience, but just...
[00:26:37] Like,
[00:26:38] there's something that has rubbed me wrong on the,  just the conversational side of the GPT models.  I don't mind it sometimes.  Like GPT is like,  you know,  it's like sometimes this is something I often did when I was on a product  teams,  when I was in,  you know,  when I was like leading product teams,  I sometimes would just sit down with the sales or marketing people and just  be like,
[00:26:58] Let them give the whole spiel,  not interrupt them,  not correct them for correctness because usually they were never correct,  but just listen to that and have them understand.
[00:27:08] you know,
[00:27:08] Then usually at some point in that conversation, because they know you're like the head of engineering or whatever, they're kind of are like, you know, important architecture.  They're going to sell you their idea that's going to just like make the company great because, you know, and.
[00:27:21] Those ideas aren't always great, but that level of enthusiasm and that level of like,
[00:27:26] Yeah, this is the thing, that thing.  That's what I feel like when I talk to GPT.
[00:27:31] So maybe I'm like pre-biased towards Fable, but like,
[00:27:35] I...
[00:27:36] there's so many kinds, like I'm working on the hydration story and I'm like,
[00:27:40] "Man, this shouldn't work. I think we can't take this shortcut. We need to actually hoist these things because the ID scopes aren't going to match. Like, we can't just collapse them." And it's just like,
[00:27:50] And this is even with previous...
[00:27:53] models from Anthropic as well, like Opus or whatever. They're all like, "No, this is fine. I've verified it. I set up these tasks, blah, blah, blah. This is perfectly fine to take the shortcut and you get this performance gain." I'm like, "Yeah, but
[00:28:06] I'm sure this is going to fall apart somewhere.  And they're like, look, these are the situations that doesn't fall apart.
[00:28:10] Oh, I got...
[00:28:12] And you're like,
[00:28:13] Okay.
[00:28:15] Let's go with that.
[00:28:16] Fable first looks in is like, yeah, this isn't gonna work.
[00:28:19] this is the scope problem, this, this, when you have the Jason and I'm like, yes.  Yeah. Thank you for saying it better.
[00:28:26] you know, what about this, you know, like feedback, the previous thing.  And they're like, you know, and then it's, it's like, like, every time you fix a bug  and it's like, yeah, you should be aware of this.  I'm like, yeah, I was actually thinking about that.  That's how I feel.  You know, when it's like a completely different thing, which has made like,
[00:28:41] me distrust almost every model that I've used to date other than it. I mean,
[00:28:46] 5.6 might be great, you know, um,
[00:28:50] But...
[00:28:51] As I said, I think I might have an anthropic bias.
[00:28:55] Okay.
[00:28:57] Thank you.
[00:28:58] you
[00:29:02] Thank you.
[00:29:04] you
[00:29:08] Hi.  Someone who has not used-- doesn't use React and hasn't used all of this,  felt you have a question.
[00:29:15] No trouble ever walked in.
[00:29:17] Yeah, I mean, and that's sort of, yeah, that's sort of the question.  But I think we'll articulate this a bit better later, because I do want to get into the actual meat of this.
[00:29:30] Thank you.
[00:29:31] Those of you? "Happy Friday Gang," yeah.
[00:29:35] Thank you.
[00:29:36] Thank you.
[00:29:37] Did you finish 2.0? No. I mean, we're, we are progressing. I had an interesting comment. I realized because I haven't been very public part of it because I've been away for six weeks. But like someone was like, are we going to get more beta releases? Beta zero was fine. But, you know,
[00:29:52] Are they going to be, you know, like are we going to RC or whatever and I was like,
[00:29:56] I realized it's because I pushed beta zero on...
[00:30:00] X and all that and said like beta starting,  let's go.  We're like beta 17.  Now we've been releasing them at a pretty good,  um,  pace.  Um,
[00:30:08] But not everyone's aware of that, that things are progressing.  I'm hoping to move to RC.  The core stuff has been getting really locked down.
[00:30:16] between like the freaking hundred bug fixes that we just did.
[00:30:20] But yeah, I mean the ways things are shaping. I'm still on schedule. I said that we have RC this summer. I'm hoping we can wrap that and get into that in the next couple few couple few weeks. Then we're going to give it a run stuff like solid primitives already updated. I need to go through router and start a bit.
[00:30:37] I know some development on some of the component libraries is starting too.  We need to kind of get move the ecosystem.  So give it time.
[00:30:47] We're down to the last few really technical decisions.  When I'm doing releases now,  all my base examples aren't breaking.  It's just like...
[00:30:55] the really
[00:30:56] interesting...
[00:30:59] convergences that happen when you have systems are what we're starting to see as a way.  And we started seeing more of this, which is why I wanted to talk about it on stream  when we get to it.
[00:31:10] Thank you.
[00:31:11] Thank you.
[00:31:13] Yeah, Fable can still be wrong. Yeah, Dylan.
[00:31:18] Definitely, Fable can still be wrong.
[00:31:21] Um...
[00:31:24] Thank you.
[00:31:25] It's just...
[00:31:26] Sometimes it's just nice having someone who's more detailed in the conversation when you're like doing trade-offs and talking through design decisions and
[00:31:34] And like,
[00:31:35] But yeah, I mean, especially when we're working on these complicated systems, you...
[00:31:39] I think Fable takes the time to look at the whole code base or the scope before it answers. And maybe
[00:31:45] I haven't been using the right version of other models or whatever.  It just,  it gives it a little bit more perspective,  you know,  even if,
[00:31:54] I can basically, if I want to, through prompts,  make it completely do a 180 on its perspective  by just like feeding it certain stuff.  Like it's still very malleable,  but there's like, when it comes to like,
[00:32:06] you're doing PR and you go, okay, look, it's like everything looks good.  It just knows to flag you about like, hey, this might be something you want to worry about.  Sometimes it's not.
[00:32:15] But like
[00:32:16] that aspect of things not slipping under the rug as much is huge.
[00:32:24] Does Cloud use, no, I don't think so. I think the only big AI, I guess OpenCode uses Solid and Cursor used to use Solid, but yeah, we have no Anthropoc or OpenAI connections.
[00:32:40] Thank you.
[00:32:40] Thank you.
[00:32:42] Thank you.
[00:32:43] No, I don't... taking videos takes too much time to publish, but I talk about a lot of the stuff on stream and I'm going to talk about it today.
[00:32:58] Oh, for solid 1.2?  No, it's a solid 2 versus 3 switch.
[00:33:04] Um,
[00:33:05] The API is not as big of a change, but it's definitely...
[00:33:09] Not.
[00:33:10] because of the timing differences and stuff, and because of some of the primitive differences and the whole thing, like it's not a back compact thing. It's a very like view two to view three.
[00:33:19] Um...
[00:33:20] is a little different because they literally changed the API.  I guess, do they still support the option APIs in v3?  If they do, then they're kind of running too.
[00:33:29] Solid's migration is...
[00:33:33] a tricky one. But in this day and age I'm less worried about it.
[00:33:37] Um...
[00:33:38] In that...
[00:33:39] It's...
[00:33:40] It's almost the same except for where it is. Do you know what it's like? It's like the difference in
[00:33:45] between
[00:33:47] and
[00:33:48] like semantics between React 15 and React 16, where like stuff subtly broke, which I know is a terrible thing to say. Um,
[00:33:56] - Yeah, I view this more as a view two to view three thing,  to be fair, even though like,
[00:34:04] I could have,
[00:34:06] Yeah, it's hard because like
[00:34:08] *sniff*
[00:34:11] I could add a primitive level compat layer and we talked about doing that where like your v1 code would kind of work but
[00:34:21] No, we're...
[00:34:22] we made a call and I think it's the right call where we're at right now.
[00:34:28] It is definitely a migration.
[00:34:30] It's just like
[00:34:34] It's a quick migration.
[00:34:42] Okay, I'll touch on this again. Solid Start 2, to my knowledge, I had the guys on stream back in April, beginning of April.
[00:34:49] was supposed to be coming out.
[00:34:52] around May. It did not. Um, there was some coordination issues and it was really hard.  I couldn't really step in cause I was away, but essentially, um,
[00:35:02] Some people had some life events, let's say, not just me,  and it all happened at the same time.  So it kind of fell down the ladder of who was in charge  until basically we had to pull in Alexis,  who wasn't really even active.  He was working on specific features,  but really actively working on Start.  So they kind of regrouped, and they're kind of back on the page now.  But the whole idea was that Solid Start 2 was supposed to come out
[00:35:27] independent of Solid 2 and was supposed to be basically out already or coming out very soon. Um,
[00:35:34] So solid...
[00:35:35] to, first of all, the integration's in the process,  but there's people who already use Solid Start
[00:35:43] to like the next version. It's called like alpha or something. In production, some of our biggest  customers, people like OpenCode are using the newer version of Solid Start. So we need to support  those people. We need to just get a release out the door that supports them because it's a lot  better than the original Solid Start release. You know, we DaVinci did all that kind of stuff.
[00:36:01] So that needs to go out now. We could try and delay it to solid two, but then you're also forcing the solid two migration on people who
[00:36:08] are real uses. There needs to be another version of SolidStart before Solid2 comes out. It just makes sense. It's just been delayed. So,
[00:36:17] Version numbering confusing a little bit because then you're like, okay, then solid start three is the one with solid two.  Yes, that's the way it's looking to be.  But I am...
[00:36:25] It just...
[00:36:26] There's real people, real companies using SolidStart and they need a new major version now.
[00:36:37] Thank you.
[00:36:39] Thank you.
[00:36:40] Thank you.
[00:36:42] Yeah, and the popularity has the two branches for a while. Yeah, that's basically what I expect.
[00:36:48] And...
[00:36:53] You just major off your... your project?
[00:36:57] Keep a 1x branch.
[00:37:00] and ride it out in the sunset. SolidOne has been stable for so long, like with very little changes,  that most libraries of the ecosystem probably have very little changes too. So like,
[00:37:10] It's already in a place that's fairly good for riding off into the sunset.  I don't expect a change like this big.  It's just funny.  We watched View 2 to View 3.  We watched Salt 4 to 5.  These are all actually...
[00:37:22] pretty big changes. React went through a few of these, not as direct because of all the back and path through, but like when they went from classes, the from
[00:37:34] objects to classes to hooks, you know, kind of
[00:37:37] go through this progress  where it caused people  to completely rewrite  how they do their stuff.  Like,  moving to Hooks,
[00:37:42] might have been back and pat, but it was a complete ecosystem rewrite. So like, let's not kid ourselves there. And
[00:37:50] I don't expect us to have another one of these from like two to three.  It shouldn't be this kind of level of thing. This is just like,
[00:37:59] 10 years of
[00:38:00] debt basically piled into one i'm i'm okay with this with this strategy um
[00:38:05] As I said, especially with the existence of code mods and AI now,  every person that I've talked to, every project's huge code bases...
[00:38:13] A bunch of them are just so big  and mired in solid ones  async mechanics, they can't really  move easily either one. But  universal libraries like component libraries,  primitives, all those have had almost no problem  moving to solid 2.0. The  core primitive stuff is very, very  in line. A lot of the
[00:38:30] changes were made to be more instructive, to make things more strict, make things so people can abuse
[00:38:38] them less
[00:38:40] So it ends up
[00:38:42] like,
[00:38:42] for the 90% case not being a huge difference.
[00:38:55] Thank you.
[00:39:00] - Yeah.
[00:39:01] Yeah, but it's still the 2-alpha, but I'm going to assume something. Yeah, yeah, yeah. I mean...
[00:39:05] We needed to make stuff stable.
[00:39:15] GSX version 4.  I mean, these things happen over the years.
[00:39:20] I'm
[00:39:22] I'm pretty...  Considering...
[00:39:24] like other ecosystems that force people to completely change how they write their code.
[00:39:30] multiple times in some cases. Like, I think the difference between Svelte 2 to Svelte 3 was huge, and the difference from 4 to 5 is huge. That's two times they basically forced their whole ecosystem to change how they write their code.
[00:39:42] you know, view two to view three complete change.
[00:39:45] We're not even doing that.  So...
[00:39:48] Like...
[00:39:50] It's subtle, it's refined, but it's a little different. Okay, so
[00:39:56] Uh, let's... let's...
[00:39:58] That's enough preamble talk about this.  Let's actually kind of get a bit into what I wanted to talk about and get back to that  scale drop.  Because...
[00:40:05] Thank you.
[00:40:07] I think it helps understand this progression. And I don't know if I want to draw this part, but think about when we were building on the web originally.  We had the DOM, which is retained mode. And this whole retained versus immediate mode, if you're not familiar, it's something you should get familiar with because it kind of comes at the root of all of these discussions.  Retained mode means...
[00:40:30] you have something that you keep in memory that represents the UI and you mutate it,
[00:40:35] And every time you mutate it, that's what you see is what you get. The DOM is an example of this. If you add a div to it or add, you know, an element or change an attribute, that suddenly what you see on your page changes.
[00:40:48] Immediate mode is like how a lot of game engines work where they just kind of
[00:40:57] Take whatever the current state is, and then it's kind of like...
[00:41:01] Render it.
[00:41:02] And then when something updates, they render it again and so on.  And those kind of things are at an extreme.
[00:41:12] Reality, they both have trade-offs because immediate mode, um...
[00:41:17] sorry, retain mode, while very performant.
[00:41:20] It's...
[00:41:20] It's this is like every time I try to draw on it's a mess, but it's like spaghetti because you're like you have this thing and then you're like, I can the thing.
[00:41:30] is like
[00:41:31] You have, like, it's fine. I'll try and draw this for now. We might delete this drawing in a minute, but you have UI.
[00:41:37] And then...
[00:41:39] Let's call this
[00:41:40] Retain mode.
[00:41:42] what you end up having
[00:41:44] is
[00:41:46] all these
[00:41:47] arrows
[00:41:49] kind of
[00:41:50] pointing into it, mutating it.
[00:41:52] And they're like,
[00:41:54] They're coming from here.
[00:41:56] And then maybe this one
[00:41:58] cause also forks off something over here, which works off over here. And
[00:42:04] you don't know where these arrows are coming from.
[00:42:09] In this kind of model,
[00:42:11] when you view it, when you view what these little legs are, you're kind of, these are different processes, right? You're like,
[00:42:17] Um,
[00:42:19] you're like, "Oh,
[00:42:21] I click the button and it did something.  And then I'm going to update the UI here.  And I...
[00:42:28] you know, navigate it over here and it's going to update the UI here, or I'm going to, you know,  do some kind of interaction. All these different points are tied
[00:42:36] to some sort of
[00:42:37] process or action that you're doing and you co-locate
[00:42:44] the information for how to
[00:42:48] Update.
[00:42:49] the UI,
[00:42:52] basically with this action.  So this is kind of process oriented in retain mode.  This is kind of the classic, you know,
[00:43:01] jQuery is popular for it.
[00:43:04] the
[00:43:05] almost every project that's ever been vanilla DOM classically has approached this kind of scenario.
[00:43:13] It's, as I said, this can be very efficient, but
[00:43:16] Like at a certain point you're just like,
[00:43:18] How many freaking arrows
[00:43:20] And what if this one also triggers something over here and
[00:43:26] which is the same place this one's touching and then
[00:43:29] This one here.
[00:43:32] Um,
[00:43:33] There's something really simple about this.
[00:43:36] But...
[00:43:37] You look at this diagram, you like the same symbol, but...
[00:43:40] you know,
[00:43:41] If...
[00:43:42] If you have...
[00:43:44] If you just change the thing directly,
[00:43:47] you know
[00:43:50] each piece can work independently until you actually have to worry about how coordination works, right? This doesn't compose particularly well.
[00:43:56] But it does keep...
[00:44:00] related code at least initially together because you're like look
[00:44:04] When I do this process, like, it's a way people often think, you know,
[00:44:08] checking out from a cart, then the code for checking out the cart
[00:44:12] or adding a
[00:44:13] item to the cart or whatever, it gets grouped in one specific place. The problem is like,
[00:44:20] Now when you have to add items in the carts,
[00:44:22] under different rules from different locations. Do you reuse that code? Do you duplicate that code?
[00:44:29] So
[00:44:30] Because like...
[00:44:31] the code in there isn't just like saying, hey, add this to account.  It's like literally saying go over to where the cart icon is and
[00:44:39] and put a number in there. But if that number can be updated from different places,
[00:44:44] Like, do you read what's in the DOM to decide what the source of truth is?  Do you go, okay, that shows a two now, let's make it a three.
[00:44:49] What if two things happen at the exact same time?
[00:44:53] the
[00:44:54] because the source of truth here is generally
[00:45:00] in here, there might be like some
[00:45:02] data sources outside, but because it's generally baked into the UI,
[00:45:08] It can be consistent.
[00:45:11] but
[00:45:13] it's hard to see where everything's coming from.
[00:45:16] So something like React model, you know,
[00:45:20] as an other extreme, turn this on its head, right?  Because it just kind of created like a pipeline.
[00:45:26] Right. The thing about about
[00:45:31] Think about
[00:45:34] Immediate mode.
[00:45:35] And it doesn't always have to work like...  At its base, immediate mode...
[00:45:39] isn't necessarily a pipeline, it's just re-render everything.
[00:45:42] But what React did was like, it was like, okay, well,
[00:45:47] Let's create a bucket. Let's put
[00:45:50] our state in a bucket.
[00:45:53] let's put our
[00:45:55] Projection of state.
[00:45:58] state, complicated. Let's just call that render.
[00:46:02] In a bucket.
[00:46:04] and then let's put
[00:46:06] our actual
[00:46:08] Thank you.
[00:46:09] UI down here. And then React is like,
[00:46:11] Now,
[00:46:12] Thank you.
[00:46:14] You can do this.
[00:46:16] Thank you.
[00:46:17] Sure.
[00:46:20] But before we actually get to our UI,
[00:46:24] There's going to be one arrow that goes there.
[00:46:27] and one arrow that goes here. So all those weird timing issues and like what the hell's going on and all that stuff all gets handled here.
[00:46:36] before
[00:46:38] Anything else?
[00:46:40] happens, which means that
[00:46:42] What...
[00:46:44] at a certain point in time,
[00:46:46] at any point in time when you go
[00:46:47] when when you're here,
[00:46:50] And in fact,
[00:46:51] Let's change these arrows directions. Let's make them go this way.
[00:46:55] I mean, I guess it... no, it is this way.
[00:46:58] The data does flow this way, but you can almost look at this as almost pulling it.  If you snapshot it like here,
[00:47:06] at each point, you have to make a decision
[00:47:09] what changes have to go together, right?  Like this process has to do both of these.  So it does it together, but does it wait on some other process?  Do we have weird chains?  This one is like, look at a given point, we do our updates and then we ask.
[00:47:22] Once we cross this line, we ask.
[00:47:25] We can
[00:47:27] Thank you.
[00:47:28] This is why using arrows odd,
[00:47:30] But we can just...
[00:47:31] I'm going to use the term here, pull. We can basically pull
[00:47:35] the information.
[00:47:36] This is why they talk about reacting to pull-based system. It's just because you put a bunch of state and it's the schedules something in the future that just pulls it through. And this is a lot easier to reason about because
[00:47:48] UI is just function of state. You've heard this a million times, but I mean,
[00:47:52] Yee.
[00:47:53] We actually just spelled out the function here, right?
[00:47:56] UI is a function of state.
[00:48:00] this is the function, right? The projection, right? So,
[00:48:06] Like...
[00:48:08] state flows through this function and outputs UI, right?  Okay.
[00:48:14] Basic stuff.
[00:48:15] Thank you.
[00:48:16] Okay.
[00:48:17] I'm sure you are all with me and this is nothing new.
[00:48:20] Thank you.
[00:48:21] Okay.
[00:48:23] But...
[00:48:30] If you squint,
[00:48:33] This section here is a lot like this section.
[00:48:37] Right.
[00:48:38] there can still be a lot of
[00:48:41] messing around up here. And historically,
[00:48:46] We've been okay with that.
[00:48:48] The only guarantee of a UI library
[00:48:52] is that when we come out the other side we have consistency.
[00:48:56] But
[00:49:00] It's this thing, you know, the arrow pointing the arrow. What if we have async?
[00:49:06] Um, so state
[00:49:08] triggers
[00:49:11] async, which then has to feed back in. Like what if we start finding ourselves like,
[00:49:17] Um,
[00:49:18] Do I have the tool to do this?
[00:49:24] I don't even... yeah, I probably... whatever.
[00:49:27] Thank you.
[00:49:28] Maybe I'll just freehand this. What if we find ourselves
[00:49:32] making loops here.
[00:49:36] Yeah, that's an arrow. Okay.
[00:49:40] And what if
[00:49:42] every time we touch this, we trigger this whole thing to trigger down. So our loops actually end up
[00:49:51] even though they're kind of contained in here, they end up just
[00:49:54] overworking this side of things.
[00:49:57] because
[00:50:00] because they're
[00:50:02] basically feeding back into the system. This is the use effect problem, just another way of kind of stating it. We kind of get to this point where
[00:50:10] And this is the problem that a lot of people have when they first see signals. They're like, they assume
[00:50:15] that
[00:50:18] the way state begets other states is using effects by doing writes, like breaking the chain. And this creates a bunch of these sort of
[00:50:27] So then...
[00:50:29] loops around here.
[00:50:31] that kind of mess with
[00:50:36] like we start losing control of like
[00:50:39] how many times this runs.
[00:50:41] because we're just like, this loops on this and that comes back.
[00:50:46] Sometimes it probably feels like a spiral because this comes back and triggers another loop, you know, and we're just looping around.
[00:50:52] twiddling and
[00:50:54] Forever in here.
[00:50:55] And the source of that almost always is involved of us to take basically being in the system
[00:51:02] and then going out of the system
[00:51:04] to come back in the system again.  See, like here, we're starting from outside,  this is an input and it enters the system, right?  We event, click enter.  But when we're in the system,  when we leave it to come back out,  we lose track of the source.  Like for when this comes back in,
[00:51:20] It's no different than one of these.
[00:51:23] Except it wasn't from a user anymore. Where here,
[00:51:27] We can generally map this to process.
[00:51:30] you know, you click a button,
[00:51:33] once you're three loop-de-loos through you you don't know what your process is because inside here
[00:51:39] we have
[00:51:40] no knowledge of process.
[00:51:42] The beautiful thing about all reactive systems and UI libraries is they have no sense of time.
[00:51:49] They do not care.
[00:51:50] snapshot poll.
[00:51:53] Time is
[00:51:55] something outside here.
[00:51:59] It's natural because this is how we prove consistency.  We make sure that we pull the stuff at the right time
[00:52:06] So there is a time element to that, but for our world, everything is synchronous.
[00:52:13] Thank you.
[00:52:15] Thank you.
[00:52:20] Yeah. In both cases you reason in terms of state machines, but in the retained version,
[00:52:26] includes the projection that makes it bigger and messier.
[00:52:28] Yeah. And the reason I want to kind of
[00:52:30] highlight this is this idea of like outside here impacting being process-based
[00:52:38] And what's beautiful about this model is that when you're in the system,
[00:52:42] This is...
[00:52:43] is a consistency thing. You have input to output, UI function state. It's a pull.
[00:52:48] other verbs that we might be accustomed to in this case. Get.
[00:52:55] Right? This makes up
[00:53:00] a shape essentially, because it runs through.  And now while my async work is moving these loops
[00:53:07] from outside the system and making them in state.  Because if you make these loops disappear,
[00:53:13] out here stays process.
[00:53:15] Like if async just flows through the system,
[00:53:18] naturally, you don't have to leave to come back in.  You don't lose the process.  You set something that...
[00:53:25] that grabs something that grabs something and chains through, and you keep that thread,
[00:53:29] You aren't looping, you're not losing it, right?  As I said, reactivity for some weird reason, everyone was like, oh, you know,
[00:53:35] - Yeah.
[00:53:36] every time you see Ryan Flores complain about, you know, signals or whatever, he's basically thinking that the chain is something like,
[00:53:45] State.
[00:53:48] Thank you.
[00:53:49] affect
[00:53:50] writing to state
[00:53:53] Writing to the back.
[00:53:55] writing to, I don't know, right? Like that's,
[00:54:00] I'm going to blow this up a little bit. But that's like what people are picturing in their heads when
[00:54:07] And that like this is a cycle, but it's always...
[00:54:11] That's not the case.
[00:54:14] Like, uh...
[00:54:16] Let me...
[00:54:18] I don't know where to put this stupid thing.
[00:54:20] this thing. But
[00:54:23] Like this...
[00:54:24] This is the illusion. The reality is
[00:54:27] It's always state,
[00:54:30] Duration.
[00:54:33] Effect.
[00:54:34] End of loop. Effect doesn't run back in here. This is the full cycle. This is it.
[00:54:40] And you can see here, state, derivation,
[00:54:45] the effect, the UI. This is a derivation function, essentially. Input, state,
[00:54:51] drive.
[00:54:52] So in this case, specifically a representative of the UI,  but it could be something else.
[00:54:58] and then the actual UI side effect.
[00:55:00] This is like...
[00:55:03] basic flow physics. And when you start viewing like that, the difference between React and the signals library is
[00:55:09] is simply, is this one line or is this a bunch of lines?
[00:55:15] that kind of weave into like a tree or graph. But it's still
[00:55:20] Good.
[00:55:21] unidirectional, it's not this weird looping thing that I'm drawing here.
[00:55:27] This is the problem.
[00:55:30] when you don't have the right tools to handle async,
[00:55:33] You do this naturally.
[00:55:35] Fetching an effect.
[00:55:37] No, never affectionate effect.
[00:55:39] Async is just a derivation of state.
[00:55:43] But that's only half the thing.  Like even if you solve this,  because we solve this in solids stuff,  I've demoed it before.  I think you've probably seen it.
[00:55:54] We've solved this, Svelte, Svelte Async solution solves this. Async React,
[00:56:00] solves this too.
[00:56:03] Suspense is a very basic version, like initially, like the way, like say, like even like view, I'd say solve the two degree where you're just like, look, any system that can hold on async and resume in a way that doesn't block the whole system from running, like suspense is the basic one.  But when you get into something more like transitions, that's when you really unlock it.
[00:56:22] You're not blocking anymore.
[00:56:24] or something transition-like, like what Svelte has.
[00:56:28] Um...
[00:56:29] Once you unlock that piece,
[00:56:32] so you have like partial halting mechanisms,  then you,  you get to keep,  you get to keep,
[00:56:40] This
[00:56:41] pattern even through async.
[00:56:43] But...
[00:56:45] People, I see on examples when I post them on Twitter and people are like, oh, here's an example.  I see this when people are trying to do stuff, even react, getting a mental model.
[00:56:55] The whole point of our work here is to turn async into part of the get, but not everything in the world is part of the get. I just want to say like as a baseline.
[00:57:06] This model is really easy to reason about.
[00:57:09] It is kind of the immediate model.
[00:57:12] Um,
[00:57:13] It doesn't have to be under the hood, as we've shown with Solid.js.
[00:57:16] But
[00:57:19] What I want people to kind of take away from this is,
[00:57:23] The first step of adopting async
[00:57:27] is
[00:57:29] is essentially
[00:57:31] being able to retain the get.
[00:57:34] directionality of our derived graphs.
[00:57:37] And as I said,
[00:57:39] Some solutions weren't even respecting that loops were bad in the first place.
[00:57:43] But I think every modern framework has gotten there.
[00:57:48] Yeah, every modern framework has gone there.  React might have been the first one to be like, you know, if you these loops remind you of that old Jin Chang,
[00:57:59] talk about a flux or whatever, like, good, that's where you should be going to. But as
[00:58:06] Like, this is... I don't know how big of an X I can...
[00:58:10] put through this, you know, like this is, this is not a thing.
[00:58:14] Pretty much.
[00:58:16] anywhere.
[00:58:17] Not.
[00:58:18] Good. People still write this code though. React never gave you the tools for async until recently, so you were forced to. But once you understand and can frame the problem this way,
[00:58:28] then the old model falls apart.
[00:58:33] Thank you.
[00:58:33] Thank you.
[00:58:35] Thank you.
[00:58:37] Which is interesting from the Angular people  because honestly they lived through  Zone.js and the old
[00:58:45] I just, it just, when people get signals, it's like a drug.  They're like, look, I can ping, ping, ping, ping, ping, ping, ping, ping, ping.
[00:58:51] You have to...
[00:58:55] It's not about pinpoint updates only.
[00:58:58] It's about
[00:59:00] It's about the directional graph. The guys working on the team know this. It's just hard to communicate this to people. It's like the reason people love you, you know, classically. Because they're like, it's that same like, reactivity makes things easy.
[00:59:13] When I change updates, like in their head, a lot of people
[00:59:17] When they see singles in their head, they're like, yes, back to simple retain mode.
[00:59:21] style stuff. Like that's what they're thinking. You need the discipline to respect it like this.
[00:59:29] Um,
[00:59:31] Thank you.
[00:59:33] This is the mental shift. This is common in all the frameworks.
[00:59:37] Do not do this.
[00:59:41] As I said, React never gave people the tools, right?  Like, my favorite-- I've showed this on stream,  but it's been a few months, so let's do it again.
[00:59:51] Okay.
[00:59:52] Continue with GitHub. Please be logged in. Yes, okay.
[00:59:55] Collections, Solitude. But I'm just going to show them because it's one of my easiest ones.
[01:00:00] Ryan Florence always has the best demos.
[01:00:02] Um,
[01:00:04] But I wanted like,
[01:00:07] I'm not going to show all the React versions, but I want to show this selection list version here because you can see
[01:00:14] the flow.
[01:00:15] So
[01:00:16] You have some states.  So this is like a...
[01:00:20] your input.
[01:00:21] you know, signal, and then you have a signal which
[01:00:25] is derived from the state.  See, one of the ways you get rid of effects is allow your signals to also be derived.
[01:00:31] And by default,
[01:00:33] It's derived from the first one in the list, but you can override it by sending it.
[01:00:37] And then this one,
[01:00:39] The city that you get is derived from whatever the selected state is.
[01:00:46] And then finally the select a city again defaults to zero.
[01:00:50] But it can also be overridden.
[01:00:52] And this is just
[01:00:53] a graph that you would do in a synchronous system, you know, like this is just a lookup, you know,
[01:00:59] Get this community ray.
[01:01:01] You have a cities array and you say, give me the city...
[01:01:05] you know, for the selectives.
[01:01:07] that these are the selected state. And this is a list of all the states. It could just be an array.
[01:01:12] In my example here, these are actually async functions going to a server, but from this perspective, we don't care because we model them the same whether it's sync or async. We created the graph.
[01:01:21] And that way, when we just hit Florida,
[01:01:23] you know, we get...
[01:01:24] The city's in Florida, we go to Texas.
[01:01:27] And we do this.
[01:01:28] And obviously there's more going on in this example than that, but my point is,
[01:01:34] You don't need effects to fetch data if you just make it part of the thing.  Like this data fetch is driven by what is selected.
[01:01:42] This one is, you know,
[01:01:44] just there to begin with, because if we had a country selector, then, you know, it could be  driven by that. But you can see that this is all part of the data graph. We're not,  we're not creating a loop here in terms of the effects. This is
[01:01:56] Directional.
[01:01:57] Right? This is...
[01:01:58] I get chain, it's actually cascading.
[01:02:02] which is why I like this example.
[01:02:03] You might preload these ahead of time
[01:02:07] you know, in some cases, performance, all this.  But generally speaking, if you don't want to load all the different cities for the different states,
[01:02:14] you know,
[01:02:16] you're going to defer it and it is a bit of a cascade, like, especially if you had a country waterfall as well, or a country selector as well. My point though is,
[01:02:25] this just flows through the shape.
[01:02:32] Amen.
[01:02:32] So,
[01:02:34] What does that have to do with anything?
[01:02:37] *shriek*
[01:02:39] Thank you.
[01:02:40] I think people who have been following this dream, following all this, kind of understand the shape.
[01:02:44] Like,
[01:02:45] We talk about this a lot. It's not hard. I've tried very hard, in a sense, to erase the async.
[01:02:51] And not in a...
[01:02:53] a way that is a lie. One example of erasing async as a lie, I call it, is the await keyword.
[01:03:00] If you're awaiting things,
[01:03:03] you're basically...
[01:03:05] saying, hey, this is a
[01:03:07] a linear sequence, like a process. I do this, then I weight it, then I do this, then I weight it.
[01:03:12] Calling a lie isn't exactly right, but in reality
[01:03:16] Stuff happens between line two and line three.
[01:03:20] It's not linear.
[01:03:23] But that's a good way to model processes, because processes do have this, then this, and this, and this.
[01:03:28] It's a terrible way to model.
[01:03:30] gets, because gets
[01:03:32] are always a pull at a certain moment in time. You have multiple things in flight. You have things that are async, things that are not async.
[01:03:39] you don't want
[01:03:41] to block like that in a way that's like,
[01:03:44] Nothing else can move.
[01:03:45] Blocking is inherent, but it shouldn't like,
[01:03:49] Okay.
[01:03:49] It becomes disruptive if you're like literally saying, sorry, I can't pull anything until, you know, all the async's ready.  We need to do better than that.
[01:03:59] But that's because we care about get now.
[01:04:03] Why do you keep on emphasizing get?
[01:04:06] Because...
[01:04:07] There's a different...
[01:04:09] side
[01:04:10] of the async problem because even if you solve get
[01:04:16] Thank you.
[01:04:18] Get is all about
[01:04:21] Data.
[01:04:23] It's all about the state.
[01:04:27] Git has no idea of process. And guess what? In your actual apps you have processes, you have actions, you have things that happen.
[01:04:34] you still need to be able to model that.
[01:04:37] So,
[01:04:40] UI equals function of state is great.
[01:04:42] but it is only half the story.
[01:04:45] And
[01:04:47] I feel like our work that we've been doing
[01:04:50] in, um...
[01:04:52] like server full stack frameworks has made this really, really, really clear, you know, because
[01:05:01] Um,
[01:05:02] I'm thinking about remix loader patterns, like they're--  and I'm thinking about server components,  and I'm thinking about even like the route action style  that we have started in TanStack and whatnot.
[01:05:15] It starts becoming clear that there's like,
[01:05:19] There's like two...
[01:05:21] like even react query if you like kind of go back to it there's two pieces there's
[01:05:25] the get.
[01:05:26] And there's the post.
[01:05:29] And they have different requirements, but they feed into it like the the.
[01:05:33] The classic
[01:05:37] Like one here you have the process
[01:05:41] and the effect and everything kind of tied together, right?
[01:05:45] Here, we've pushed the process outside of
[01:05:48] outside of our system.
[01:05:52] you
[01:05:53] But the important thing to understand when we do have these loops,
[01:05:56] is like,
[01:05:57] Technically, these arrows here are coming
[01:06:01] often back up from here.
[01:06:04] Right.
[01:06:05] Can I bend this in the middle? Yeah.
[01:06:07] I can't bet in this in the middle.
[01:06:09] They are coming back up here.  There is a loop.  It's just not...
[01:06:13] Like, it's not like a...
[01:06:15] automatic loop. It's not like a, like a, like mess with state kind of loop. It's like a,
[01:06:23] This produces the UI. So I'm going to let's make this dot dot dot.
[01:06:27] This produces the UI,
[01:06:29] that someone will interact with that will update future state.
[01:06:34] Thank you.
[01:06:35] The key part about this whole system is
[01:06:39] Thank you.
[01:06:41] these kind of system is
[01:06:43] Let's make this solid again.
[01:06:48] Bye.
[01:06:50] Thank you.
[01:06:52] is, is this, is that
[01:06:55] When you initially load the page,
[01:06:58] There's a get is like the get right. This is when you load the page.
[01:07:03] And then on any update, so this,
[01:07:06] This is initial.
[01:07:08] As I said, I'm focusing, I'm looking at this very much from like a,
[01:07:14] Uh.
[01:07:16] Thank you.
[01:07:17] server perspective, but this is
[01:07:20] Server is a great example because server is async.
[01:07:22] When you do an update,
[01:07:26] You don't just...
[01:07:27] mutate the thing, you end up actually
[01:07:31] adding a second box here that sits on top.
[01:07:34] that happens first.
[01:07:38] Right.
[01:07:39] there's you know the posters or the mutation or whatever so but
[01:07:43] the post isn't
[01:07:45] the thing that makes sure your UI is in sync. It just
[01:07:49] triggers the get to happen again, right? This is like
[01:07:53] invalidation via like React Query, right?
[01:07:57] update your list, and then tell React Query to invalidate these keys.
[01:08:01] It can be coarse-grained, it can be fine-grained, but ultimately, we do a full cycle here.  It isn't just like you do a post and then you mutate one thing, usually. It's usually like...
[01:08:13] You could in some cases, but even if you think about mutating one thing,
[01:08:17] is doing the get.
[01:08:18] In a sense.
[01:08:20] But like,
[01:08:21] Because...
[01:08:22] updating one piece of state
[01:08:23] And then you have to reconcile it down to the final UI.
[01:08:27] But generally what I'm getting at is there is a full cycle here where you have...
[01:08:34] in UI, actually.
[01:08:37] As soon as you adopt this kind of model,
[01:08:39] a clean separation between
[01:08:43] Um,
[01:08:43] Updates?
[01:08:46] and resolution. It's like not the it's not the
[01:08:50] It's not the job.
[01:08:52] Thank you.
[01:08:52] of the update.
[01:08:55] to ensure that
[01:08:58] the UI is synchronous. And when you have the separation, it means you actually need different tools and different mentality.
[01:09:05] Like,
[01:09:08] you should be very aware of like what is
[01:09:13] an action and what does it get?
[01:09:15] You have to get state.
[01:09:17] that you need to render a page.
[01:09:20] but like when you do a mutation, that is not a get.
[01:09:24] So like, I remember people trying to put like saving a to do inside of resource and solid.  That's not what it's for.
[01:09:32] Different lifecycle, right?
[01:09:34] Thank you.
[01:09:35] resources go down here.
[01:09:38] Right? This is where resources sit. They're down here.
[01:09:44] You know, what else goes down here?
[01:09:47] Thank you.
[01:09:48] Create async, if you're familiar with older solid.
[01:09:54] All right.
[01:09:55] Um...
[01:09:58] Thank you.
[01:10:00] What goes up here? Actions.
[01:10:05] Right.
[01:10:07] And this is very clear when you've used something like Remix,  but what I'm getting at is there's a whole category
[01:10:14] of
[01:10:15] of different tools
[01:10:17] that are necessary to operate in this, because they have different needs.
[01:10:21] Right? Like, what do we care about over here? We care about consistency.
[01:10:27] Let's see. What else do we care about down here?
[01:10:32] um
[01:10:34] or what other characteristics do they have? No sense of time.
[01:10:39] Um,
[01:10:42] I mean, consistency is the main one.  I'm trying to think if the...
[01:10:46] Thank you.
[01:10:49] Yeah, I think that's the main one.  You might also care about, like...
[01:10:55] Like,
[01:10:56] execution like does it rerun does it run an order it but those are all like
[01:11:03] consistency-based guarantees.
[01:11:05] Right.
[01:11:06] It's a snapshot, right?  Snapshot.
[01:11:10] But up here, in the action side,
[01:11:13] Thank you.
[01:11:14] They're sequences. This, then this, and this, and this, right?
[01:11:17] This, then this, then this, you know.
[01:11:20] Um,
[01:11:23] you know, do this, then do this. They're processes.
[01:11:27] Thank you.
[01:11:30] Thank you.
[01:11:30] What I'm trying to say is these areas have two different...
[01:11:36] completely different sets of requirements.
[01:11:39] And
[01:11:41] in a sense, need to be viewed as different things.
[01:11:44] This is where like...
[01:11:46] You know, this is an event handler.
[01:11:49] This is...
[01:11:52] side effect even, you could argue, could trigger it, right?
[01:11:59] Right?
[01:12:00] This side cares about
[01:12:03] Boundaries.
[01:12:04] It cares about like...
[01:12:07] Can I render this?
[01:12:10] Thank you.
[01:12:12] Right?
[01:12:13] Like, error boundaries make no sense on this because these are unbound.
[01:12:17] Right?
[01:12:19] this side
[01:12:20] Thank you.
[01:12:21] cares about UI. This side does not care about UI.
[01:12:25] if you want to keep a clean separation.
[01:12:30] Right? This side cares about state.
[01:12:36] This side...
[01:12:39] needs to figure out how to...
[01:12:42] Like,
[01:12:43] It might need to have like...
[01:12:46] You know, steak is an...
[01:12:48] output, it's not really
[01:12:53] a driver, like it's not really a driver.
[01:12:58] Thank you.
[01:13:01] both post and get want loading indicators. Yes.
[01:13:07] You know where I'm going here.
[01:13:12] Thank you.
[01:13:17] Because the UI ultimately wants loading indicators,  but where do loading indicators belong?
[01:13:22] They kind of belong here.
[01:13:25] Thank you.
[01:13:26] Thank you.
[01:13:27] Voting indicators are a snapshot of state. It's ephemeral state, but it's a snapshot of state.
[01:13:31] This is why...
[01:13:34] Managing your loading sequences and actions
[01:13:37] Um,
[01:13:41] is tricky.
[01:13:45] Thank you.
[01:13:46] Okay, I want to show you something a little more concrete now.
[01:13:51] Uh, let...
[01:13:53] Let's leave this. I want to show you something a little bit more concrete.
[01:13:58] What example? I want to take my simplest async example, I think. I want to take...
[01:14:05] My divide example. Okay.
[01:14:09] Yeah, let's take my divide example.
[01:14:14] The divide example is very simple. There is a number,
[01:14:20] when you increment the number
[01:14:23] when you press a button.
[01:14:25] It.
[01:14:26] called the divide function,
[01:14:28] that divides the number by 1, by 2, by 3, by 4, by 5, by 6.
[01:14:33] And then...
[01:14:34] displays that rounded, you know,
[01:14:37] Um,
[01:14:38] in the UI saying like this divided by this equals this.  So there's an input and there's an output.
[01:14:43] Of course,
[01:14:45] That's pretty simple when it's sync.
[01:14:47] here's the trick, divide is async. We're actually, you know, calling it. It's a promise. There's a delay on when we can do divide and it's actually
[01:14:55] random
[01:14:57] which makes it fun because you don't want to show the inconsistency, which means you kind of have to wait until everything's done.
[01:15:01] if you actually want to show consistency.
[01:15:04] Right.
[01:15:05] Thank you.
[01:15:06] So like if I press this once, you can see it doesn't update until all of them come back and then it shows a consistent state again. Right. It doesn't.
[01:15:14] They don't flicker in, they all come in automatically. This is part of the guarantees that we insure on the get.
[01:15:23] Right?
[01:15:24] But we also want an affordance. We don't want to wait for, we want to see the other three dot dot dot saying like, hey, I'm loading. We want an affordance. Otherwise, when we're sitting here,
[01:15:35] We don't know...
[01:15:37] that we're actually doing anything. So we actually... there's two types of problems here, right?
[01:15:43] There is the async consistency here, which we've basically modeled our graph.  This depends on this, this depends on this, and it's consistent automatically, which is what you're going to find in...
[01:15:55] modern async systems. But then there's like, how do we show the loading state?
[01:16:00] And this one's kind of easy in that
[01:16:03] Um,
[01:16:03] The increment?
[01:16:05] is
[01:16:07] This is more like a navigation than it is like
[01:16:10] a typical action because the increment is synchronous. We know where we're going, we just don't know how to draw it.
[01:16:17] Right?
[01:16:18] So this distinction is going to be important as we kind of talk through and understand what tools to use in each case.  And I think this will think, but the source of our change is something that we know we have one.  And when we click it, we know we have two.
[01:16:30] We don't know
[01:16:32] What the output is.  So we have to.
[01:16:33] Mm-hmm.
[01:16:34] Wait on it.
[01:16:36] Um...
[01:16:37] Draw but this isn't
[01:16:39] This is
[01:16:40] more of a navigation than like a mutation because we're not updating a database. We're not saving
[01:16:47] We're not performing some kind of
[01:16:49] Our action isn't to save the source and then derive what we need.  This is that first piece is actually synchronous and available to us.
[01:16:57] the async part is actually just resolving what to show.
[01:17:02] As I said, this is more like a navigation.
[01:17:05] But we still need to show an affordance.  And the way that we've done in this example is say,  show me the latest n.  So don't wait for everything to settle to show n.  And then if it's n is pending,
[01:17:19] like in flight,
[01:17:21] Show the dot dot dot.
[01:17:23] Thank you.
[01:17:24] Okay.
[01:17:26] But I started thinking, I was like, what if this is not...
[01:17:30] my button.
[01:17:32] What if?
[01:17:33] I have a third-party component library that wants to make a button to play along with this, right?
[01:17:38] So what I...
[01:17:39] I ended up doing
[01:17:42] was I'm,
[01:17:43] I made the button and I actually made a couple versions of the button. Let me see if I can...
[01:17:47] find
[01:17:49] what I was working on. It was, it was difficult.
[01:17:51] Some kind of fork of divide, it should be here somewhere.
[01:17:54] Here it is. Okay.
[01:17:58] I made two buttons. I made button and incrementer. Okay, so
[01:18:05] We're going to use Incrementor first.
[01:18:09] Because Incrementor,
[01:18:12] Sorry. Actually, it's funny, Incrementor isn't in here.
[01:18:15] incrementer,
[01:18:17] from mentor.
[01:18:19] takes, what does incrementor take?
[01:18:23] Incrementor takes a count.
[01:18:26] Thank you.
[01:18:27] Count equals
[01:18:29] And
[01:18:31] Okay.
[01:18:32] I think that's right.
[01:18:34] I'm going to comment a button for now. Okay. Incrementor takes count.
[01:18:39] Did I... does Incrementor take anything else?
[01:18:43] *sigh*
[01:18:44] on increment, of course.
[01:18:46] We need to know
[01:18:49] to update it. So on increment
[01:18:54] call increment. So, the funny thing is, the increment thing actually happens
[01:19:04] out here.
[01:19:07] And the state actually drives through here.  But the point of this button is this button is
[01:19:13] knows that it's designed to show numbers. So it goes, "Hey, give me the latest
[01:19:21] of my account and if it's pending show the pending state
[01:19:24] So.
[01:19:28] Yeah, this is my old example that doesn't have HMR.
[01:19:33] that I based it off of.  Yeah, so OK.
[01:19:35] it's doing the same thing it was doing before, right?  I just hoisted it out.  Now what's interesting here is,
[01:19:42] If we did something,
[01:19:43] Like...
[01:19:45] remove the
[01:19:47] The async.
[01:19:49] Like, remove the...
[01:19:51] the
[01:19:52] the
[01:19:54] Thank you.
[01:19:55] the sync, so to speak, what you're going to see, see the numbers are gone, increment just updates. And you don't see any loading state because
[01:20:03] the reason that it's loading is actually being fed in from above. The component itself just knows that hey look I'm building a component that if
[01:20:10] My source here is loading.
[01:20:12] Incrementor is a terrible example. A dropdown like we have in the
[01:20:18] Country example?
[01:20:20] is a
[01:20:21] that I was showing earlier is probably a better example of something that's of the same class.  But because I want to show them both side by side, we're going to keep incrementer.
[01:20:29] But like.
[01:20:31] An example of this is
[01:20:33] Our select...
[01:20:34] Um...
[01:20:36] component here, if we pull this into a component and generalized it,
[01:20:40] Yeah, here it is.
[01:20:41] we would say like, "Hey,
[01:20:44] This is props.option. This is the options we send to our select.
[01:20:48] Um,
[01:20:49] Right.
[01:20:50] what we would do, we'd say is like, we'll disable the select if our options are pending.  So this is a very simple thing saying like, look, I can build a generic component.
[01:20:58] that says like, hey, if something I need to render isn't ready, I can show loading affordance.  I don't care what that thing is. I don't care about how you use me in my app.  I'm just saying like, look, if what I need to render my data isn't ready,
[01:21:11] I have the ability to show an affordance. And if it is ready, then you can pretend like it never existed.  As I said, there's no async anymore.
[01:21:20] this code still just works because
[01:21:24] It just doesn't need an affordance.
[01:21:27] So this generic component has a way of showing its count.  And then when you go, hey, I actually do have an async sync.
[01:21:36] On it.
[01:21:39] And actually, this is funny.  This is one of those, like, if a tree falls in the...
[01:21:43] woods kind of scenarios.
[01:21:45] because it actually doesn't block the rendering.  It actually doesn't care about those memos.
[01:21:49] It's not that they're lazy.  It's actually that...
[01:21:53] you need a
[01:21:54] You need an actual sync.
[01:21:56] for async to happen. Otherwise
[01:22:00] You know, you don't see it.  Now it's doing it again where it's showing the loading state.  I baked something generic into my component now.
[01:22:08] And it's completely compositional.
[01:22:11] It's just, hey, I have a button.
[01:22:13] Now,
[01:22:14] This isn't the way you would generically use a button because a button isn't going to be aware of count. It doesn't know.
[01:22:20] that what it's
[01:22:22] displaying is generally going to be the thing holding async. As I said, for select,
[01:22:27] like, uh, options. This makes sense. This is, uh,
[01:22:32] what's the term manufactured example?
[01:22:41] Thank you.
[01:22:42] Thank you.
[01:22:44] Thank you.
[01:22:45] The differentiator is if the state has to be locked during loading or not.  Yes.  It's about get.  Is pending and latest are about gets.
[01:22:54] Right?
[01:22:55] During a save action you might want to prevent further state changes.
[01:22:59] But here's the thing.
[01:23:02] Latest in his pending your above get.
[01:23:06] We could we could implement this a slightly different way.
[01:23:09] Right?
[01:23:10] And the different way
[01:23:12] is
[01:23:13] is the generic button way, the way you would
[01:23:15] generally do a button, which is this.
[01:23:18] On click.
[01:23:19] And, and, and this.
[01:23:21] this this is going to have the exact same
[01:23:26] UI experience.
[01:23:28] that we've been doing this whole time, where it shows the pending state. And if I unhook the
[01:23:32] If I unhook the async work, you know, like if we...
[01:23:36] if we say hey there's no async work
[01:23:39] Thank you.
[01:23:40] it's still going, it's now not going to show a loading indicator.  Same exact scenario where it's based on the load, but
[01:23:48] Now this button is not aware of count. What I did here was
[01:23:53] The decision of showing the affordance of latest is the parent.  The parent goes, hey.
[01:23:58] I'm going to show latest here.  Like,
[01:24:01] If I didn't show latest here,
[01:24:04] and just showed end.
[01:24:07] Thank you.
[01:24:07] then
[01:24:09] it's gonna be showing the old value until it finishes.  It's still showing the pending state though.  So the pending state is coming from inside.
[01:24:18] But it's not a wear of count. Well, it's because
[01:24:23] In this view, a button is actually more of an action getter, right?  The previous example of incrementer, I categorized it as...
[01:24:33] a navigation, right? Because you're basically
[01:24:35] changing
[01:24:38] that upstream...
[01:24:40] like above the async value.  You're saying like,
[01:24:43] it's like going, I'm going to this page, I'm changing this tab.  The tab change itself is an async, it's the work that it generates that is async.
[01:24:52] Button is generic, it doesn't know
[01:24:54] how it's going to be used, but it knows that on click, in a sense,
[01:24:58] is an action. When there's an async load,
[01:25:01] It needs to show async, otherwise not. So how did I implement button? I created optimistic state.
[01:25:06] It's false.
[01:25:07] And then when I click on it, I set updating to true.
[01:25:10] And this will be basically invisible if it's synchronous, because it'll just finish. But if...
[01:25:17] It takes time. It'll stay true until it's finished. And the reason is solid has
[01:25:21] basically transitions are baked in. You don't need to use transition or whatnot.
[01:25:27] It's essentially you do a change in an effect that
[01:25:30] or not affected, you change an event,
[01:25:33] things that happen in that same event are going to overlap and entangle.  And if they take a while, then that optimistic state will hold.
[01:25:40] And then at the end, it reverts.
[01:25:42] Right? So you're like,
[01:25:44] In this case, if I'm updating,
[01:25:47] dot dot dot it doesn't matter what the click is
[01:25:50] And this is the way you would do a generic button, right?  If you thought the affordance belonged to you.  See, I'm not sure.  I don't build enough UI systems.  I don't know if buttons come with their own loading data forces or if you inject them.  To me, this pattern is a little bit weirder.  Like, I get...
[01:26:05] the data side. When you have a component that requires data and you say, "Hey,
[01:26:09] You could say the parent could be responsible for the affordance, but if you're like, no,
[01:26:14] I'm new
[01:26:15] design a generic select list that says, hey, if I don't have
[01:26:19] the data is not ready for me to display, or you can't click my button until I have this data.
[01:26:29] you know, disabled,
[01:26:30] like is pending, that fits very well on the get side.  You're basically saying, I can't render this.  I can't. This isn't enabled.  These things are based on the data I get.
[01:26:40] Whereas
[01:26:40] This is saying like this is process based. When you click this,
[01:26:47] whatever process that happens out of this
[01:26:50] I'm going to have that life cycle.
[01:26:52] And...
[01:26:53] The reason I'm using this example is
[01:26:56] you're going to see the difference.
[01:26:59] When I uncomment both buttons,
[01:27:01] you're going to see a difference between these two.  I'm going to put latest end back in, and then I'm going to...
[01:27:07] uncomment, sorry.
[01:27:09] uncomment this.
[01:27:10] Now I have both buttons on the page.
[01:27:13] incrementer and button.
[01:27:16] And
[01:27:17] I showed you before that they have the same abilities, kind of like in the abstract, but they actually function differently. And the reason is one is data oriented and one is process oriented.
[01:27:31] the data-oriented one,
[01:27:33] cares about the state of the data. It cares about n.
[01:27:37] The process-oriented one cares about the state
[01:27:40] of the particular process when you
[01:27:42] when you
[01:27:44] when you clicked, which means that
[01:27:46] When I click the data oriented one,
[01:27:49] It's pending.
[01:27:50] but the process-oriented one doesn't update
[01:27:53] like it updates the numbers because it's showing
[01:27:56] It's both of them are running off the latest end, you know,
[01:28:01] This one out here, this one internally?
[01:28:05] But you see there's no pending state on it because
[01:28:09] For this one, the pending state...
[01:28:12] is based on the data, is the data updating. And this one, the pending state is based off like
[01:28:16] "Are you part of my transition?"
[01:28:19] If I go here and click
[01:28:21] The...
[01:28:23] the process-oriented one,  they're both going to have
[01:28:26] pending states because even though clicking on the process-oriented one means that
[01:28:33] the process
[01:28:35] is running.
[01:28:37] which means it's triggered, yes.  But because the data gets updated as part of that process, the data also triggers.
[01:28:43] because "is pending" is true here.
[01:28:47] Do you guys, do you understand the slight...
[01:28:51] Difference?
[01:28:53] here,
[01:28:54] When you ask about data, that's a universal truth.  When you're talking about a specific process, that's tied to the life cycle of the process.  And this is very...  These are...  This...
[01:29:05] is the kind of thing which isn't immediately obvious.  And I said, this is true about async react.  It's true about async solid. Svelte hasn't, isn't quite as
[01:29:15] mature in this realm yet or hasn't quite explored the thing.  Like, they have optimistic state as part of SvelteKit, but it's not like...
[01:29:24] it's not a general purpose concept in terms of like,
[01:29:28] the lifecycle here, right?
[01:29:30] So what solid and reactor are both doing is creating a generic product.
[01:29:36] general everyday
[01:29:37] Um...
[01:29:39] solution.
[01:29:40] to this side of the problem.
[01:29:43] The key is by splitting them.
[01:29:45] But you start seeing that, like...
[01:29:49] Thank you.
[01:29:50] loading indicators isn't quite...
[01:29:53] isn't quite the right
[01:29:55] thing. "Is pending" is here.
[01:29:58] And over here,
[01:30:00] is kind of like...
[01:30:03] optimistic
[01:30:04] Steak.
[01:30:06] Question mark.
[01:30:08] Why put a question mark? Because optimistic state
[01:30:12] is a bridge. Pending is a form of optimistic state. Latest is a form of optimistic state. Categorically, these have the same characteristics. Underpinnings, when you actually implement them, optimistic state is pending and latest all use the exact same implementation. They are a form of optimistic state. It's just what's the driver?
[01:30:30] This one latest it and it
[01:30:32] is pending are driven off the state itself.
[01:30:36] They're derived.
[01:30:37] whereas optimistic state,
[01:30:40] can be derived,
[01:30:43] Um,
[01:30:45] But generally speaking, you're using it as a way of
[01:30:49] overriding an expectation.
[01:30:51] I said I'm not sure I'm making
[01:30:55] making sense of this, but it is
[01:30:58] you start having to really think in terms of like, is this a get or is this a post?
[01:31:03] Um,
[01:31:05] in terms of what the best pattern is. Is this something that
[01:31:09] is prohibitive from me rendering,
[01:31:12] That's a get.
[01:31:13] Is this something that does something?
[01:31:18] That's a post.
[01:31:19] That kind of tells you
[01:31:22] what the
[01:31:23] the right choices.
[01:31:26] And they do collapse a bit, as we've shown up here.  You could view, even though this is using optimistic state,
[01:31:32] Under the get scenario,
[01:31:34] This is...
[01:31:36] essentially is pending. It's just a process-oriented is pending.
[01:31:41] doing this false to true flicker that we're doing.
[01:31:46] But generally,
[01:31:48] Like.
[01:31:50] If it's like...
[01:31:52] in the event handler,
[01:31:53] It's process oriented.
[01:31:55] if it's in the data,
[01:31:57] It's get oriented and
[01:31:59] I don't think any of us have done a very good job of teaching people
[01:32:04] this divide. This is why async react or whatever doesn't sit with people quite right. They don't, they,
[01:32:11] we're so used to,  um,
[01:32:16] So
[01:32:17] making things process oriented.
[01:32:20] You know,
[01:32:23] get oriented on the other side, like that, it,
[01:32:26] like when you're building UI you're so used to the get UI equals function state and then on the process side
[01:32:32] like you're used to these sequences,
[01:32:34] People don't know which...
[01:32:36] tool
[01:32:37] to pick up
[01:32:40] And in order to know, you have to have a fairly clear model where the separation works. And why this is important is composition.
[01:32:48] Right?
[01:32:49] If, as I've been trying to show here, if I'm designing a button or something generic,
[01:32:53] I have to pick the right tool. It's beautiful about both of these designs.
[01:32:57] assuming you get the nail the right choice here is,
[01:33:01] It's completely composable.
[01:33:03] This button is useful
[01:33:04] Everywhere. Any button that you want with the potential to show an affordance while is doing work based on what you click.
[01:33:11] This is it.
[01:33:13] You can it doesn't matter what the work is.  This is not aware of your work at all.  It's just saying if there's work, I'm going to show a dot dot dot or spinner or whatever.
[01:33:21] This one's a little bit more specific.  This is saying, this is a button that says,  if my, it's count here,  but if my data that I'm showing here
[01:33:29] that I'm going to display.
[01:33:30] is not available.
[01:33:33] then I'm going to do a dot dot dot. As I said, this is a weaker example, but you can suddenly see that we have two different classes of
[01:33:44] Like.
[01:33:48] I should put it like
[01:33:50] of
[01:33:51] composable components that we could be
[01:33:54] looking at. As I said, I don't know if many components build their loading  affordances into them or they get aggregated, injected, but
[01:34:01] Generally speaking,
[01:34:02] The promise of the composition here is that you can
[01:34:06] describe
[01:34:08] either based on data requirements or based on process requirements,
[01:34:11] in a way that is not aware. So Count kind of hides this, but I mean, you
[01:34:15] this could have been children or could have been like data or whatever.
[01:34:21] Data is always trickier because data is more specific than process.
[01:34:25] but you have the ability to do both.
[01:34:31] Thank you.
[01:34:33] Thank you.
[01:34:34] what is resetting updating back to false?  Under the hood in solid, it's the same thing
[01:34:41] that's causing this when I press this button here,
[01:34:46] and this doesn't update until the end, the same thing that decides
[01:34:50] when this is done, when the update is done, is the same thing that decides when the optimistic state is reverted.  Basically, whenever you set an optimistic value,
[01:34:59] That setting
[01:35:01] happens, like when we click the button, we set the optimistic value and we set the normal value. Because we call increment.
[01:35:10] So both
[01:35:12] We're doing two sets in that event handler.
[01:35:15] One optimistic one not.
[01:35:16] The knot,
[01:35:19] is the future. It's saying, I'm going to update this,
[01:35:23] And when everything settles, this is where it will be. The optimistic is the opposite.
[01:35:28] It's saying, I'm going to update this right away.
[01:35:31] And at the end,
[01:35:34] I'm going to
[01:35:36] Thank you.
[01:35:37] revert it to its base. Now,
[01:35:39] Optimistic is more interesting than that because it doesn't have to just be false, it can be derived.
[01:35:44] from
[01:35:45] from other values. So optimistic can also be its eventual future.  You can like predict where value will land and then
[01:35:53] show that immediately, and then at the end, show the actual value. It's the same mechanism. But the core part is,
[01:35:59] calling set on both of them indicate that they're part of this process that's happening.
[01:36:05] And the way we do that in React is we wrap it in transition call.  The way we do that in solid and svelte
[01:36:11] Um,
[01:36:13] is that
[01:36:14] It happens within the same...
[01:36:18] synchronous execution within the same event.
[01:36:21] You can always call flash manually if you want to escape out of it or whatnot, but essentially like
[01:36:27] if
[01:36:28] And that's why this composes.
[01:36:30] Right?
[01:36:31] You...
[01:36:33] setting update, your onClick calling your onClick  collects all the different state updates you're gonna do
[01:36:41] This part of my solid 2.0 is batching by default.
[01:36:44] And then...
[01:36:45] It goes, OK, I'm updating this optimistic state.  I'm updating this date, traces through the graph, sees the dependencies, sees the load.  If it exists, like, is it actually
[01:36:54] preventing us from rendering, makes that decision.
[01:36:57] And then from that,
[01:36:59] knows when this whole process is done.
[01:37:04] What is your definition of object? It means pretending requests are done before they
[01:37:08] are is bad, but something immediately and it hits or isn't done is it's it's speculative.  My idea of optimistic is simply speculative ephemeral state.  It can serve.
[01:37:19] either as a prediction of the future
[01:37:22] or it can serve as
[01:37:25] Uh,
[01:37:27] In flight.
[01:37:29] value that just lasts the certain time.  But it's basically...
[01:37:35] It's basically some sort of ephemeral state
[01:37:38] This is what, like,
[01:37:40] I was talking about...
[01:37:42] you have
[01:37:43] two distinct
[01:37:46] thing. This is why I put a question mark beside optimistic, because optimistic state,
[01:37:51] is the bridge between these.
[01:37:55] If you have
[01:37:58] Okay, let me see if I can draw this.
[01:38:01] If you view
[01:38:02] UI.
[01:38:05] Yeah, sweet.
[01:38:06] This will work.
[01:38:10] Yeah, I like this.
[01:38:14] Yeah, yeah.
[01:38:16] See this looks almost three-dimensional.
[01:38:18] That's what I'm going for here.
[01:38:23] Thank you.
[01:38:27] Time.
[01:38:32] snapshot.
[01:38:35] Okay.
[01:38:37] Should have done this before I copied and pasted it.
[01:38:40] Snapshot B.
[01:38:45] Snapshot B.
[01:38:49] Hopefully you see where I'm going with this. If you view UI,
[01:38:54] Because each daft chart is consistent.
[01:38:55] It has no knowledge of time.  If you view UI as a sequence of snapshots that happen over time,
[01:39:01] where each one of these things
[01:39:03] each one of these snapshots, each one of these
[01:39:06] is...
[01:39:06] you know,
[01:39:08] Thank you.
[01:39:09] UI equals function of state, right?
[01:39:13] Like each each
[01:39:14] Each one of these
[01:39:16] Thank you.
[01:39:18] is that, right?
[01:39:20] Each one.
[01:39:24] But the challenge is,
[01:39:27] State is a persistent thing.
[01:39:29] you might change its value.
[01:39:31] And each snapshot's different.
[01:39:33] But
[01:39:35] What if?
[01:39:37] This is like where I want to like grab like drawing some like brief history of time by Stephen Hawkins.  Like what if time...
[01:39:46] is warping the snapshot, you know, like the gravity well in the black hole.  Like what if there's.
[01:39:52] There's like almost like a
[01:39:54] A force...
[01:39:55] from time that causes
[01:39:58] temporal warps along parts of the snapshot? What if you need a way of projecting this access
[01:40:05] into the snapshot somehow.
[01:40:08] Because they're like...
[01:40:10] from...
[01:40:11] This is like a whole other dimension.  And you need a way of like.
[01:40:15] projecting it this
[01:40:17] change
[01:40:18] on into the snapshot so that you see it like a cross-sectional change.
[01:40:22] So like...
[01:40:24] Um...
[01:40:25] Sometimes there's going to be these holes
[01:40:29] Thank you.
[01:40:31] Thank you.
[01:40:33] Thank you.
[01:40:34] I didn't mean to stretch it. Whatever. No.
[01:40:38] I wanted to do is grab, nope.
[01:40:41] Come on.
[01:40:50] Bye.
[01:40:52] I'm drawing a cylinder for you guys who aren't quite following what I'm doing.
[01:40:57] I'm trying to draw a cylinder.
[01:40:59] Sometimes...
[01:41:03] There's
[01:41:04] There's
[01:41:06] Pieces of time.
[01:41:08] linking.
[01:41:10] the snapshots and in order to like if you like time you view these shapes
[01:41:16] traveling through the snapshots, you need a way of showing the surface of those on the snapshotted surfaces.
[01:41:24] That is what optimistic state is.
[01:41:27] Um...
[01:41:30] I don't know if that this is helping anyone.
[01:41:38] Thank you.
[01:41:39] How does the opposite state know to revert if it doesn't write any signals? Sorry, just
[01:41:43] But there's two things.
[01:41:48] the right itself.
[01:41:50] is a signal, this is a write,
[01:41:53] So if
[01:41:55] Okay, sure.  I mean, uh...
[01:42:00] Let me...
[01:42:02] Let me...
[01:42:04] Let me, where is it? Let's remove the load.
[01:42:08] Thank you.
[01:42:09] Now we're not incrementing.
[01:42:12] Um...
[01:42:14] Yeah.
[01:42:16] Oh, okay.  The...
[01:42:18] Whatever. Okay, now we're not incrementing. I've moved the async load. It's the same thing as when I commented out the
[01:42:25] the these
[01:42:26] All that's going to happen now
[01:42:30] Nothing's going to happen.
[01:42:31] There's no dot, dot, dot.
[01:42:33] And there's no update because I removed the increment.
[01:42:35] It never goes to, it never goes to true, like, because it went to true, but then immediately goes to false.
[01:42:42] It's only...
[01:42:45] It only shows itself if time passes.
[01:42:49] like if there's if there's no if there's no if nothing is load-bearing
[01:42:53] then there's no transition, like there's nothing for it to hook into.
[01:42:56] which means that it just doesn't happen.
[01:42:58] In the same way that if there's no async here,
[01:43:02] Like I remove...
[01:43:04] the sink
[01:43:06] There's no async load.
[01:43:09] that these just update and again they don't show loading. It stays false.
[01:43:19] Thank you.
[01:43:20] Thank you.
[01:43:22] I'd have to double check the implementation and see if it like flickers true for a moment, but the effect never runs with true. It never gets to a point where it actually renders the thing
[01:43:30] with true because there's no transition.  There's nothing happened.  It goes and it goes, okay, let's transition.  Yeah, there was no transition, nothing to do here.
[01:43:42] Thank you.
[01:43:43] Does that make sense?
[01:43:53] I mean, it's async in general.  Listen, I'm using optimistic state here.
[01:44:00] to like, it doesn't matter what this is. We, uh, in here, we're, we're loading something that takes time. You're thinking, okay, I went to a server, but it could be, uh,
[01:44:09] I don't know, you need to grab a device driver for the cam. I think that's an async API in the web thing. It doesn't have to be a server. It's literally anything async. We don't actually care what it is. This is what I was kind of getting at. This is the difference between the Svelte solution, which is kind of very Svelte kiddish and tied into specifically...
[01:44:29] their query command thing.
[01:44:31] And the be first all start 1.0 is like this too,  where basically the optimistic state is a function  of like a data fetching solution  versus a general solution like this.
[01:44:40] Where
[01:44:42] Optimism is a projection
[01:44:44] of ephemeral time-based state, like into our snapshot time.  It doesn't care what the async is.
[01:44:51] This button
[01:44:53] literally could do anything async. It could be like, um,
[01:44:58] It could go to a server.  It could, like...
[01:45:02] do some heavy work that you wanted to put on a web worker and you're like, Hey, you know, I, I don't want to block the main thread. I want to do this calculation in a web worker. Like,
[01:45:13] - Thank you.
[01:45:14] This button will show an affordance if it detects that there's a real load on the end.
[01:45:24] Thank you.
[01:45:26] Thank you.
[01:45:29] Thank you.
[01:45:31] Thank you.
[01:45:33] We're supposed to use create memo to trigger post-op crudts if we want to use optimistic state. No.
[01:45:38] Create memo is on the get side.
[01:45:42] Sorry, you're right. I haven't shown this part. This was a generic
[01:45:47] example in terms of showing how you can generalize these things.
[01:45:53] But I keep on saying that this is a memo.
[01:45:57] that
[01:45:59] I keep on saying that this is a navigation.
[01:46:04] because essentially, yeah, okay.  Let's go to the next part of this.  Hopefully what I'm talking about here is somewhat clear.  Like you can see that Optimistic State is sort of like taking...
[01:46:17] something that exists on the time dimension,
[01:46:20] and projecting it onto the snapshots, right?
[01:46:24] Um...
[01:46:25] But...
[01:46:26] when we talk about the behavior of these primitives themselves,
[01:46:30] we have to understand that
[01:46:33] there are some different nodes here, right? There's like
[01:46:40] Let's draw a couple nodes.
[01:46:42] Thank you.
[01:46:45] Okay, there's
[01:46:47] Often there's what I call the trigger.
[01:46:50] Hmm.
[01:46:53] Make it small, too late.
[01:46:58] Thank you.
[01:46:59] Um...
[01:47:06] Thank you.
[01:47:07] That's right out here. Trigger.
[01:47:17] Or actually, no, let's call this the source.
[01:47:21] There is...
[01:47:22] The async?
[01:47:24] Now, sometimes there is no source.
[01:47:26] Sometimes there's no ID that you're fetching the model for.
[01:47:30] But
[01:47:32] And then there is...
[01:47:36] the result or whatever. And this can be more nodes, doesn't have to necessarily be an effect.
[01:47:41] But essentially,
[01:47:44] There's, if you assume in a scenario like this, that you, the update comes into the source, right?  So this is like...
[01:47:55] Thank you.
[01:47:55] trigger update.
[01:47:59] And then...
[01:48:01] There's this arrow.
[01:48:04] Which is...
[01:48:07] upstream.
[01:48:10] of async
[01:48:15] and then we hit our actual async, and then we get this arrow.
[01:48:20] Thank you.
[01:48:21] which is downstream of itsync.
[01:48:27] This is...
[01:48:28] The general...
[01:48:29] Thank you.
[01:48:30] get cycle.
[01:48:31] Right. Like a navigation.
[01:48:33] Generally you
[01:48:35] And it's also the refresh cycle too.  Like when you remember earlier, we were...
[01:48:41] We were looking at this.
[01:48:43] And then we were saying like state as an input.
[01:48:45] or sorry, as an output, sorry.  But like when you move from post to get,
[01:48:49] Usually,
[01:48:50] There's a source that triggers upstream async.
[01:48:54] So this is usually a setter or even the refresh function in solid. There's some mechanism that pushes
[01:49:00] to the async and then there's down to async and these are important zones because they have different implications
[01:49:05] The whole...
[01:49:07] change, like this whole process here.
[01:49:11] from start to end.
[01:49:14] Thank you.
[01:49:16] And I don't want to use the word process because we're loading it here. I haven't come up with a better...
[01:49:23] term for it unfortunately it's the transition transaction
[01:49:28] Actually, Svelte, what did Svelte call this? I actually went Svelte 5 weight expressions. What did they say?
[01:49:34] Blah, blah, blah.
[01:49:37] synchronized updates. When an await expression depends on a protected piece of state, changes to that state will not be reflected in the UI until the asynchronous work is completed.
[01:49:45] In other words,
[01:49:48] Yeah, so they...
[01:49:49] instead of calling them transitions,
[01:49:52] Svelte calls this...
[01:49:56] Synchron.
[01:49:57] synchronize.
[01:49:59] Right? Okay. Sure.
[01:50:01] Um,
[01:50:02] It means that this whole...
[01:50:05] thing only appears together.
[01:50:07] source that updates
[01:50:09] the async that resolves, downstream the result. These all become one unit.
[01:50:18] Thank you.
[01:50:21] This is the cutting edge of the discussion. We're not there yet in our talking right now, but we will talk in a minute.
[01:50:30] Yeah, transition, I hate it as a term because people use it for animations and stuff.  Transaction is closer but it doesn't have the same guarantees as transactions because  it moves towards an eventual feature.
[01:50:39] These things don't exactly roll back.
[01:50:43] Thank you.
[01:50:46] and the entangle. This is a place that has terrible terminology. I really don't want to teach people the word transition, even though it's a React term.
[01:50:57] But my point is...
[01:50:59] This is the...
[01:51:02] This is the the get side right?
[01:51:07] Thank you.
[01:51:11] Right, so this is like the anatomy of
[01:51:13] of
[01:51:15] even initially the source is set or we trigger it later, right?  This is basically
[01:51:20] the get side. And if you look, there are
[01:51:23] parallels between this unsurprisingly
[01:51:27] And
[01:51:29] earlier when we were doing state projection state UI.
[01:51:33] This is...
[01:51:36] sorry i didn't stop there long enough
[01:51:39] This diagram, unsurprisingly, is similar
[01:51:45] to this thing because this is our UI as a function of state in an async world.
[01:51:51] Thank you.
[01:51:53] How many times am I going to draw this diagram, right?
[01:51:55] And you can see because it's source, it's a state, async, which is derived state, and then the result or effects or whatever coming out of it.
[01:52:03] Um, it's, it's, it's the same graph.
[01:52:06] Um,
[01:52:07] But the reason...
[01:52:14] The reason that I...
[01:52:17] we're looking at this here is that
[01:52:20] Because this came out of that create memo question, right?
[01:52:24] We're supposed to use trigger post requests, right?
[01:52:27] Um...
[01:52:28] No.
[01:52:29] the post side
[01:52:31] So like when we zoom out, which is...
[01:52:34] like here that sits on top,
[01:52:37] Thank you.
[01:52:38] On a basic level, you could, like in a microcosm, you could view it as like,
[01:52:45] Etc. Right?
[01:52:51] Like, like...
[01:52:53] This arrow here maybe doesn't
[01:52:56] It belongs
[01:52:58] up here, it's outside, right?
[01:53:02] At the most basic level, it's a setter.
[01:53:06] But,
[01:53:07] when we do something more substantial,
[01:53:11] like we want to
[01:53:14] save before we get
[01:53:16] Like a navigation is simple. A navigation, there is no
[01:53:20] that.
[01:53:21] Like,
[01:53:22] this part is synchronous.
[01:53:24] But when this part is not synchronous, we need a whole other way of handling it, which is what actions are.
[01:53:32] Thank you.
[01:53:34] See, optimism isn't limited to actions. Optimism
[01:53:38] is just...
[01:53:41] a projection
[01:53:43] of
[01:53:44] of time into our get access here, right?
[01:53:48] But actions...
[01:53:50] And I guess we should, it's time to pull out an action example, for example.
[01:53:56] Um...
[01:53:58] What's an example that has actions that's... Do I have any simple action examples?
[01:54:05] Most of my examples
[01:54:07] This has got to be our navigation, right?
[01:54:11] This is funny. This is my...
[01:54:12] This isn't even an act.
[01:54:15] This is a navigation example that has a
[01:54:17] pseudo action baked in. So I want to go here first before I get to actual action APIs.
[01:54:24] I don't know if people have seen this one a ton.  This is the original demo that Dev did, where it's a counter.
[01:54:31] that fetches something and then randomly errors on you.  But the randomly errors is actually the important part here because
[01:54:38] I've had to think about how I approach the error for a while now because...
[01:54:46] What I love about this example is it shows like the way that you can, you know, define the graph here, have your async and not really worry about the loading state until you get to the message. Like when we load the page, we can show everything and then you just have the loading state down there, even though, you know.
[01:54:59] stuff's up here. This example was originally to show that you could take count, derive it, uppercase it, do a bunch of stuff to it.
[01:55:06] And none of this actually triggers async until you actually, again, have your sync down here, which is bounded by this loading boundary.  But what happens when we error?
[01:55:16] Error was a fun one
[01:55:19] for me to figure out what we want to do here because
[01:55:24] What?
[01:55:26] There's two ways to get it out of an error.  There's the way...
[01:55:30] there's the retry button but you can also have the increment button
[01:55:33] So you can just click past it. Now the retry button is calling some reset mechanism that we built into error boundaries.
[01:55:40] which is smarter than we had in 1.0  because this reset mechanism actually walks up the graph  to the actual error.  And when it gets to an async source,  it actually tries to retry that async source.  So we actually have...
[01:55:50] error, like this error boundary, again, composition. It can be down low where you're using this stuff, because error is a question of, can I render this UI? It's not about process. It's about can this UI be rendered?
[01:56:05] It's the same reason why createEffect here has an error console here, because our argument is that createEffect isn't about rendering.
[01:56:12] render effects are, like things we use in the JSX. So it's perfectly fine if you want to handle the errors yourself and not trigger an error boundary.
[01:56:19] because this doesn't impact can I render.
[01:56:23] just another sort of thing. Because this error, and it's above the error boundary,  and it didn't kill our page. It's because
[01:56:33] user effects, normal effects, don't participate in error boundaries in Solve 2.0.  Seems kind of weird, but error boundaries are...
[01:56:41] Again, when you follow this classification, error boundaries
[01:56:44] are a get concern, they're boundaries, they're part of this.
[01:56:48] and effects.
[01:56:49] aren't a get concern.
[01:56:52] Um...
[01:56:53] Side effects.
[01:56:55] Rendering is a UI, but general side effects are not.
[01:57:02] So,
[01:57:03] Back to this example. Why is this example interesting? Well, this example is interesting because
[01:57:15] When you click the button,  you don't want it just to stay there  because we're in a transition, right?  Like if the button was always there, you click it,  you could just keep on clicking it over and over again.  That doesn't make sense.  You want to click it and then disable it or make it disappear,  give some kind of indicator that it's retrying.  So what I did was I wrapped the button in a show.
[01:57:29] And so like, it's like if I'm not resetting this, but how do you know you're resetting?
[01:57:35] Well, this is a perfect use of optimistic state.
[01:57:39] Because...
[01:57:40] Thank you.
[01:57:41] It's...
[01:57:43] It's not just like, look, if I asked if I was pending instead of resetting, look, is pending count?
[01:57:52] Thank you.
[01:57:53] Let's, let's look what, look what happens.
[01:57:58] If I click this button,
[01:58:02] Uh...
[01:58:10] Is that what I want it to happen?
[01:58:14] So I need to get to an error again.
[01:58:18] It's weird though because it's actually not
[01:58:20] It's entangling and not showing the...
[01:58:22] the
[01:58:24] Yeah, what I was trying to show was this. Sorry, I was clicking the wrong button, not seeing the same thing.
[01:58:29] If I use isPending,
[01:58:32] Thank you.
[01:58:34] The problem is
[01:58:35] when I click to go to the next thing, because it's based on the data,
[01:58:39] it's actually going to show that it's retrying but we're not retrying we're actually going up to six
[01:58:43] Because...
[01:58:44] from a data perspective,
[01:58:46] We are incrementing the number, we are changing, that is pending, but it's not retrying. Retrying is the process.
[01:58:54] So it's not based on data.  So you don't actually want...
[01:58:59] Thank you.
[01:59:00] you actually want
[01:59:03] to tag the process, which is why we're using optimistic state.
[01:59:07] It's the same as my example before, as showing like the different buttons lighting up, you know, when we were doing the divide, where it's like both buttons versus one button.
[01:59:16] This whole thing.
[01:59:17] Like this one does both, this one only does one.
[01:59:20] This is a case where you want the one. You're like saying, "Look, I'm doing the reset here,
[01:59:25] Right, I'm resetting.
[01:59:29] Give me an error.
[01:59:31] Thank you.
[01:59:32] Thank you.
[01:59:33] Okay, I'm resetting here, or I'm retrying, I want to be retry, but when I click the button,
[01:59:40] And I'm leaving.
[01:59:42] I don't want it to be retrying.
[01:59:45] It's... I'm going to error again, there we go. Now when I click it, this one just grays it out and disables it. See, disabled if it's pending count.
[01:59:53] versus resetting. These are two distinct affordances here.
[01:59:57] with a very subtle difference.
[02:00:00] Whether or not the button is enabled here,
[02:00:03] is based on whether the data is currently loading.
[02:00:06] But whether we are resetting is specific to this process, which means it gets its own optimistic state.
[02:00:12] Thank you.
[02:00:13] Right.
[02:00:14] how you handle the fortresses, whether you hide or show or show messages, completely up to you. That part isn't important. It's understanding that there is a difference between
[02:00:26] Am I asking whether
[02:00:29] I can do the process because the data is available.
[02:00:31] Or am I?
[02:00:34] or is my process currently running?
[02:00:36] Thank you.
[02:00:39] These are the kind of questions you've got to
[02:00:42] start thinking about here.
[02:00:43] on the pot, I can see how there's a bit of like a mentality change, which makes things kind of hard because you're like,
[02:00:49] how do I make the right choice, you know, and kind of working into those patterns. But on the flip side,
[02:00:54] Once you have the system in place and you use these things,  you don't have to worry about race conditions or any of the other weird side  effects that happen with async.  You know,  we have writing to the loading scene and,
[02:01:05] and having to keep a loading counter to make sure that like, like,
[02:01:09] "Oh, this thing's loading, but this is not. Should we show loading?" All those weird conditionals like if this is loading or this is loading. These kind of patterns generally just naturally fall out of the system when you go look.
[02:01:20] resetting is a process. Because at one point I was like,
[02:01:22] Maybe we should add like a resetting...
[02:01:27] like here, right?
[02:01:29] So you could like check if you're resetting.
[02:01:32] specifically.
[02:01:35] But then I was like,
[02:01:37] It's a choice.
[02:01:38] What if I don't want to use optimistic?  What if I want an optimistic store?  What if this is part of some other primitive...
[02:01:44] I don't want to make that decision for you.
[02:01:47] You can add optimistic state to any process as a way of giving an indicator that it's in flight.
[02:01:53] And you can model it however you want.  I don't have to make that decision for you  in the component design.  It's pretty easy. You just go, hey,
[02:02:01] I've decided that I'm making a process.
[02:02:03] that resets.
[02:02:05] Am I resetting or am I not?
[02:02:07] Create the optimistic state.
[02:02:09] tie it into the action.
[02:02:10] Now we're good to go. In a sense, reset.
[02:02:13] just like refresh.
[02:02:16] is an action or set. These are just
[02:02:19] very, even though they take slightly different forms, they are ultimately just a reactive, re-triggering like...
[02:02:27] like we were showing over here. They're just another way of triggering this get side of things.
[02:02:35] So,
[02:02:38] This example...
[02:02:41] is still synchronous. It's still arguably navigation-ish.
[02:02:46] Um,
[02:02:48] There is a process here.
[02:02:51] Um...
[02:02:52] But if you look at like we are doing a thing, we are resetting the error boundary. That is a process that triggers get.
[02:02:59] Um,
[02:03:00] But the process up front is not async.
[02:03:04] Thank you.
[02:03:07] Now, if the process upfront is async,
[02:03:10] we do need another tool, which are actions. But generally speaking,
[02:03:16] It's just an extension
[02:03:18] of
[02:03:19] this pattern.
[02:03:22] Is it about the data? Or is it about the process?
[02:03:30] Thank you.
[02:03:31] .
[02:03:34] Thank you.
[02:03:35] Framework should have debouncing built in to make it low friction as a normal ways of doing forms without it.
[02:03:41] I'm torn on that.
[02:03:46] Yes and no.
[02:03:48] Uh,
[02:03:50] there's different types of throttling versus debouncing.  And a classic example of this is the network.
[02:03:56] click search.
[02:03:59] bar or whatever, like the classic kind of thing. And
[02:04:03] One argument is like you should only do the searches at certain intervals, but that can actually slow down the search results. So what like, ultimately what happened with Netflix and most of these UIs is they actually
[02:04:16] There might be some throttling happening somewhere on the back end or some places like there is a secondary concern, but generally what you try and do is
[02:04:24] eagerly fetch the results as fast as you can and then
[02:04:28] Uh...
[02:04:30] kind of throttle on the way back out, which is not good for API limits, but it means that the end user is never waiting.  You just want to make sure that you're not like jittering them like crazy. You only show them because it's an
[02:04:41] In a sense, that's what these async systems that react and solid and all these built-in is.
[02:04:48] Like...
[02:04:49] when we were on the divide example and like hitting like 10, these aren't being debounced exactly, but we're not we're not thrashing on you.
[02:04:57] and you get the results as soon as they're done.
[02:04:59] Um...
[02:05:01] This should be built into every framework.  Debalancing and...
[02:05:05] throttling is sort of a choice. I think it's
[02:05:09] I think having tools available, like we have a solo primitives over that, like they're core enough that I think it's valuable to have them.  But generally from a.
[02:05:16] It's a time.
[02:05:17] It's a timing concern.
[02:05:19] Which means:
[02:05:21] Where does it belong in a graph?
[02:05:23] It's not part of this.
[02:05:25] It's part of this.
[02:05:29] Right?
[02:05:31] Which means that if we want to have throttling built in, it should be part of
[02:05:36] this side of the picture, which some like maybe for the first time, this is actually an option.
[02:05:43] Thank you.
[02:05:45] Thank you.
[02:05:48] Thank you.
[02:05:49] Thank you.
[02:05:53] Oh, what do we got here? Create memo, await debounce 100, return 100.
[02:06:01] Yeah.
[02:06:02] I mean, that's throttling on load.
[02:06:05] Um,
[02:06:07] Yeah, you can always make a sequence of awaits.
[02:06:12] Um
[02:06:17] Thank you.
[02:06:21] Yeah, I mean, the reason I'm bringing this up is this was the exact kind of argument  that like this was the thing that like React when they're designing this, we're trying  to express and again, we've done a very bad thought on the framework side here that like,  there are affordance ways to give affordances like this way you can keep on typing. That's  what you're seeing here. The numbers incrementing means you can keep on typing.
[02:06:47] And
[02:06:49] Thank you.
[02:06:50] In a sense, I am throttling.
[02:06:54] There's a starvation question that has kind of gone back and forth, and that's probably maybe worth considering.  But it's just like...
[02:07:04] I think the...
[02:07:07] the front-loaded side of it needs to be...
[02:07:10] a choice. I think the backloaded side is a consistency thing, so it fits in the framework zone. But what I do want to get to is
[02:07:17] is looking at actual
[02:07:22] actions and
[02:07:24] I think...
[02:07:27] What's the simplest version that has actual actions?  Probably...
[02:07:32] optimistic
[02:07:33] data or optimistic UI.
[02:07:38] Um...
[02:07:42] Probably optimistic UI.
[02:07:47] Yeah, this one is the simplest version.
[02:07:50] because
[02:07:52] These are examples now
[02:07:54] where you actually do something async
[02:07:57] before
[02:08:00] Um,
[02:08:01] You...
[02:08:02] you trigger the refresh. Because as I mentioned, refresh, like, sets thing is
[02:08:08] this part.
[02:08:11] of the equation. What does the post part look like? Well,
[02:08:16] Generally it's a sequence, so this is a place where you would want async await except async await doesn't carry context we can't
[02:08:21] combine it in our
[02:08:24] synchronized thing.
[02:08:27] Because...
[02:08:28] When...
[02:08:29] What we want to do here is actually when we have
[02:08:33] Um,
[02:08:34] actions, we want to extend this synchronized envelope to not
[02:08:38] just the get, but to include the post as well.  Cause otherwise you get race, other, other race conditions. Um,
[02:08:46] And this is a big part of,
[02:08:50] of
[02:08:51] of unifying the solution.
[02:08:54] This is why you can't keep the context in JavaScript.
[02:08:58] we have generate functions.
[02:09:00] There are
[02:09:01] You could do something where you could like...
[02:09:04] restore...
[02:09:06] the the context like after the await so you could like have an async away and then call restore yourself
[02:09:11] Um...
[02:09:13] or call, you know, action again, like in React goes like,
[02:09:17] transition and then he nest transitions to restore it.
[02:09:21] I've mentioned this before.
[02:09:22] It's so hard, people forget to do it all the time.
[02:09:26] And it's...
[02:09:29] Even writers, I'm not picking on Ricky here.  I did it myself a couple of times.  The first like three demos of react async,  this was the exact mistake that Ricky made on stage with forgetting to  restore or like the context for, for the transitions and the actions.  And it, it kills me every time we saw it happened on my stream,  happened at a talk, happened on Jason's stream.  Yeah.
[02:09:55] I just caved and I'm like, we don't have the async context yet.  We're going to use generators. Generators are cool.  Because you can do a lot of cool stuff. You can make like generator helpers like
[02:10:06] which that are composable, you know, you're talking about wanting debounce.  What if you want retry? What if like, because what you can, you can do with generators,
[02:10:15] It's Compose Generators.  And this is what I was talking about  being a completely different API.
[02:10:21] You can do stuff like, I'm just going to open a playground here.
[02:10:24] Um,
[02:10:26] - It's fresh.
[02:10:27] Where...
[02:10:30] Okay.
[02:10:31] Thank you.
[02:10:33] you can basically build...
[02:10:40] or whatever this is our action I don't really
[02:10:43] Yeah.
[02:10:45] async function
[02:10:48] It's gonna be...
[02:10:51] you.
[02:10:52] The other reason I didn't like threading is because I like keeping the...
[02:10:56] Um...
[02:11:01] Whatever.  I like keeping the...
[02:11:06] *sigh*
[02:11:08] Arguments transparent.
[02:11:09] like when remove to do takes an id like we don't have to like
[02:11:14] overload the arguments, like what you see is what you get. This creates an action that takes ID which returns a promise.
[02:11:22] What's cool with generators though, like,
[02:11:25] is you can create stuff like
[02:11:29] Thank you.
[02:11:31] uh,
[02:11:32] um results
[02:11:34] Error = yield
[02:11:38] Star
[02:11:39] which composes other generators, and be like,
[02:11:43] Try catch.
[02:11:46] Fetch something.
[02:11:51] We haven't implemented try catch here, but my point is you can actually
[02:11:56] I guess I didn't need it to be async after all. You can actually kind of compose
[02:12:00] Um,
[02:12:02] other behavior. So you can make like a common helper that also can feed into the generator.  And then now like we can take a promise.
[02:12:11] And like...
[02:12:12] get a nice error thing.
[02:12:16] Try catch with retries.
[02:12:18] We can, you know, I think there's a whole slew of primitives and basics around like
[02:12:26] working with sequences. I think
[02:12:28] I know stuff like effect TS works a lot with sequences, but I think there's like a whole
[02:12:33] Mm-hmm.
[02:12:34] We're not shipping anything core with Zolida other than the support for generators and async generators.  But...
[02:12:39] Bye.
[02:12:40] If you want to design sequences, there are tools for that where you can like create an action that's like do this and then like,
[02:12:47] If error, do something else.
[02:12:51] And then like...
[02:12:52] you know, take the results and
[02:12:55] you know,
[02:12:56] grab something, you know, do something else. Like what's beautiful about it, like you think waiters, you can be like, do this, do this, like do this. I was actually I don't know if I have the example anywhere. I was actually using actions.
[02:13:07] to just, like, do silly stuff like...
[02:13:12] Yield.
[02:13:14] new promise set response
[02:13:20] set timeout, because it doesn't really matter what the async is.
[02:13:25] Um...
[02:13:29] Thank you.
[02:13:31] Like you could just like bake it in that say wait two seconds so you could do something like
[02:13:36] Thank you.
[02:13:37] Show message.
[02:13:39] like some optimistic state, like, uh,
[02:13:43] um
[02:13:46] Success.
[02:13:48] Right?
[02:13:51] and then yield the promise for two seconds.  And then it like auto will hide because the transition will
[02:13:57] wrap out. You know what I mean? Like you can basically use ephemeral state as a way of like showing
[02:14:04] Posts.
[02:14:05] Right? Like,
[02:14:08] And use the fact that these are state mechanisms, so they can, like, dedupe, they can manage, like, concurrency.
[02:14:15] And then just...
[02:14:17] not have to worry about the wiring of like timing and collisions because the  action,
[02:14:23] you know, like an animation is basically like a sequence. So like,
[02:14:27] Um...
[02:14:29] Yeah.
[02:14:30] There's a lot of potential in this realm that I haven't really been touched on. The important thing is to understand that it's a different shape. This is not about
[02:14:37] reactivity in a sense. Your way of tapping into the reactivity is either by setting specific state,
[02:14:45] that will, you know,
[02:14:47] end up at the end of your
[02:14:50] synchronization, transition, or whatever you want to call it, showing.
[02:14:55] And also, you know,
[02:14:57] interlacing optimistic state or femoral state essentially throughout the process to give  people the affordances they need while the process is running.
[02:15:06] What's cool about this is like,
[02:15:09] Thank you.
[02:15:11] Out here, you made like a...
[02:15:15] Message, show message.
[02:15:19] has some like great
[02:15:21] optimistic, right? Right. Optimistic. So this is,
[02:15:26] Thank you.
[02:15:27] part of like, and it's undefined initially or whatever.  This is part of like your UI.  So your UI, you can hear somewhere you have like, you know, show when message.  So it's very declarative.
[02:15:39] in how you're setting it up.
[02:15:42] So you're following typical UI following rules.
[02:15:47] But.
[02:15:48] the timing isn't your concern.  You've isolated the time from that.  This will just be like, look, when there's an optimistic message, show it.
[02:15:55] you know,
[02:15:57] This kind of split mentality, I think, is incredible.
[02:16:00] incredibly powerful because this has always been the problem like
[02:16:04] you end up with these imperative APIs to show dialogues.  You know what I mean?  Like you're,  you're like,
[02:16:09] Like, I think everyone's been there where you like show dialogue or whatever. And
[02:16:14] then you're managing the life cycles of these things.  And,
[02:16:17] This allows us to basically turn it back into declarative state.  You know, maybe this message is actually in the portal.
[02:16:25] I don't know.
[02:16:28] Thank you.
[02:16:29] Like...
[02:16:34] Thank you.
[02:16:37] Like...
[02:16:41] Thank you.
[02:16:43] This is sort of what I'm trying to show with this.  These aren't just...
[02:16:47] data fetching concerns, these are
[02:16:50] these are async concerns, right?  You can sequence actions.  You can, when they're in a single action,  they flow together.  But then you can also like have actions  because there are promises,  await other actions and create actions.
[02:17:03] actions themselves are sequences, and you can do sequences of actions if you want to like handle them as separate synchronizations or transitions. So they both compose from the perspective of creating one large
[02:17:16] And you can also chain the envelopes together if you want to kind of like isolate the separate processes.  This is like a whole different place that almost is worth...
[02:17:29] you know, spending some time in the future to explore and like, look at what this means in practice. But what I'm getting at is,
[02:17:38] the separation allows the composition.
[02:17:42] These are base primitives that don't care.  One side...
[02:17:47] just cares about consistency, doesn't care when it happens. The other side  only cares about the ability to signal stuff, it doesn't care about
[02:17:53] what it does. And you keep
[02:17:56] that
[02:17:57] isolation of like process versus, um,
[02:18:01] poll or get, you know, posters to get. And you can build each piece up independently. You can already see that kind of like how this
[02:18:11] Constructs.
[02:18:15] Thank you.
[02:18:18] Well, the problem is...
[02:18:24] you're left managing
[02:18:27] the state, like it's not even state. Like there's no representation in a UI framework.
[02:18:32] that
[02:18:34] that
[02:18:35] Like,
[02:18:36] I...
[02:18:38] like putting it into a show, like obviously you could just have a third party library that just handles it and then you like defer it outside the framework. I think that's
[02:18:45] perfectly fine too, like specific on the toast case. But what I'm getting at is
[02:18:50] categorically
[02:18:52] And
[02:18:53] it's always been a challenge where you have these lifecycle things threading through
[02:18:57] Like, what...
[02:18:58] things that have no sense of time.
[02:19:01] This way, time, this and this and this.
[02:19:04] Simple rule.
[02:19:06] Thank you.
[02:19:07] And the ephemeralness just kind of takes care of itself.
[02:19:10] Remix 3 at home, yeah. Well, the challenge... Yeah, this is Remix 3 without throwing...
[02:19:16] Oh, like.
[02:19:18] like everything. Like the problem
[02:19:21] is
[02:19:22] Um,
[02:19:23] This keeps your state structured. The challenge in a system like Remix 3 is you're not really deriving stuff.
[02:19:30] You're just like adding more and more state variables.
[02:19:33] Um...
[02:19:34] It...
[02:19:37] The way Remix 3 solves the problem, in a sense,
[02:19:40] is
[02:19:41] It goes
[02:19:43] This is too rigid, or sorry, this is too rigid, and you're going to do this garbage anyways, so why don't you do a little bit of this?
[02:19:51] Thank you.
[02:19:52] And in a sense, I've taken the opposite tact. I'm like, "No, no, we need to get rid of this stuff. Let's streamline it and then give this its own special place."
[02:20:03] I...
[02:20:04] In a sense, there's a shallow comparison to something like Remix 3 where you can be like, "Okay, I'm setting message. I'm calling...
[02:20:11] loading, I'm set loading
[02:20:14] Um
[02:20:15] do the thing set loading false.
[02:20:20] You know, that was essentially what Remix was doing  in those demos.  But that works really good when it's process-based,
[02:20:27] It doesn't work as well
[02:20:30] when it's
[02:20:31] When it's, um...
[02:20:35] data based, which is what I was getting at because
[02:20:39] The reason this demo is so good
[02:20:43] in solid
[02:20:45] is because when I add another dropdown here,
[02:20:49] Each select list is responsible for its own pending state.
[02:20:53] Like cities, cities, cities. You notice how this thing only cares about cities.
[02:20:57] even though what's triggering it is actually changing the state.
[02:21:02] So if you add countries and then this is depending, this stuff will be based on state. It doesn't have to worry about the triggers anymore. The challenge was something, and I actually challenged Ryan Florence, I'm like, when you're, when Remix 3 is settled, I want to see the three tier country selector example, where you now have to worry about multiple loading states and it's not.
[02:21:24] the drop down itself
[02:21:26] that's triggering it. It's a different drop down. Changing this drop down is triggering that one's pending loading state.
[02:21:33] It's like cascading.
[02:21:34] that kind of produces
[02:21:36] - Oops.
[02:21:37] pretty terrible.
[02:21:39] Spaghetti, at least hypothetically what I'm thinking at.  If your event handlers all start needing to worry about the state of other UI,  like you're basically, this is why...
[02:21:48] you saw that big argument,  not big argument,  but like Rick and the react guys are going like remix,  like,
[02:21:54] You create like,
[02:21:55] To them,
[02:21:56] They just see this and like, are you crazy? Who wants this back?
[02:22:03] Remix is more like, we're going to be, is more kind of like, we're structured this.  They're like, look, we've...
[02:22:10] You guys are trying to be too rigid, forcing things in a weird way that doesn't make sense.  We're just going to kind of like...
[02:22:15] make it easier to do this. That's the kind of reality, but like,
[02:22:19] when you look at the craziness here,
[02:22:21] I can understand why the React guys are like, "This is not the way."
[02:22:25] This design that we're working on solid 2 is basically the React design.  People always critical and react on that stuff. I don't have...  I think their design perspective is good at the tricky part.
[02:22:36] for them often is
[02:22:38] implementation,
[02:22:40] And
[02:22:41] Um,
[02:22:43] I think thanks to Svelte getting us in there and not having as big of a long history here  and just the power of signals in general, we have a unique ability to not just
[02:22:55] have a better solution in terms of implementation,  but also in terms of like structure architecturally, right?  The way the composition works is a lot more fluid than forcing every UI  library to put,
[02:23:08] use transition into their event handlers and then
[02:23:12] Now what do you have on click or click action and then propagating it through that way?  This is just kind of inherent to the system, but this, that's not really reactable.  It's just that I think if they started today, they, they would have done that aspect somewhere to solid.  It's just, they, they can't.
[02:23:28] Thank you.
[02:23:29] Yield basically explodes the same way as await, I think. Yield without star is a weird one as it reaches the wheel down the vision to. Yeah. Yeah. The only challenge here is that...
[02:23:40] Yeah.
[02:23:41] Yeah, I would love a world where we could just go wait, wait, wait, wait, but we aren't in that world.
[02:23:48] It doesn't, right? It's async context. We've been waiting for five years and we might be waiting for another five years.
[02:23:55] This isn't saying it's better than async context.  I'm saying this is what async context or future solutions will give us.  It just...
[02:24:03] your options are either use generators
[02:24:06] Or like
[02:24:07] have a really ugly...
[02:24:09] foot gunful API.
[02:24:12] Right now.
[02:24:13] There isn't really middle ground.
[02:24:19] Thank you.
[02:24:22] Thank you.
[02:24:25] Thank you.
[02:24:27] Thank you.
[02:24:33] you
[02:24:34] Tough thing from the server.  Yeah, yeah, yeah.  But all I'm saying is like, this is...
[02:24:39] This little example where I'm being a little cute is I'm showing the toast for two seconds.
[02:24:45] The server is what's doing the work and saying, hey, okay, success.
[02:24:49] you know,
[02:24:50] I was just being cute and being like, well, we can also, you know,  we can also, you know,
[02:24:57] show the toast for two seconds we can
[02:24:59] make a confetti explosion, go for five seconds,  then show the toast.  Like you could, I'm saying the sequencing continues  beyond the server interaction part.  You can actually like,
[02:25:10] create a whole...
[02:25:12] party of animations. That's all I'm saying. I don't know what people are going to do this. This is probably not realistic. It's, I'm not, it's, it's that,
[02:25:21] the whole thing is an async process. It doesn't matter what that async is. I really want to emphasize it's just not just the server.
[02:25:27] Thank you.
[02:25:31] Thank you.
[02:25:35] Okay, so...
[02:25:45] Yeah, my hope out of all of this is that when we start talking about this stuff, we can get to a point where
[02:25:53] We...
[02:25:57] can come to the right terms. Transition being an awkward term is our first problem, right?
[02:26:04] We need a better name for it.
[02:26:07] Thank you.
[02:26:08] are other
[02:26:11] challenge here is that like
[02:26:14] Thank you.
[02:26:15] this whole post versus get or the process versus, uh,
[02:26:20] Like,
[02:26:21] display propagation
[02:26:24] isn't
[02:26:25] the way people think a lot.
[02:26:27] Now, I think this model is coherent.  I think...
[02:26:33] Like, as I said, it's a way of
[02:26:35] representing time.  It's both a way of...
[02:26:40] getting time back into our derived equation.
[02:26:44] and representing
[02:26:46] the like
[02:26:48] ephemeral bits of process
[02:26:50] as projecting onto that plane.
[02:26:52] and then giving specific tools to handle
[02:26:56] that but
[02:26:59] it's not always obvious to people
[02:27:04] I think when something is data driven or when something is process driven.
[02:27:09] And this is where the whole composition question comes in, right? Because
[02:27:14] when you create basic level components,
[02:27:17] you kind of have to make that call.
[02:27:20] And I guess the answer is when in doubt,
[02:27:24] make it process oriented.
[02:27:28] as we saw in our divide example.
[02:27:32] Um...
[02:27:33] Like for Button?
[02:27:37] It's cool.
[02:27:39] But like,
[02:27:40] It's very specific places.
[02:27:42] where you're going to want is pending or latest. These in reusable components, they're going to be  when you're disabling buttons. It's all about like, can I render this?
[02:27:53] I'm pretty much delegating is pending, but...
[02:27:57] to like,
[02:27:59] Do I have what I need to render and
[02:28:03] do I want a latest for, do I want to enable tearing? Like most inputs, you don't want someone to type into an input
[02:28:09] For example,
[02:28:11] Our native inputs don't have this problem because they actually tear by default.  Just the way solid works, we don't have like...
[02:28:18] as complete controlled inputs. They're kind of like
[02:28:23] Thank you.
[02:28:23] They're kind of...
[02:28:25] sort of uncontrolled.
[02:28:26] Um...
[02:28:28] but what but if you're building wrappers then you are gonna inevitably ask this question you  know like if if you're not using the built-ins you you your questions on are like
[02:28:39] When someone types...
[02:28:42] For example, you don't want to, like, if they trigger async, you don't want them to, like, not be able to type any more letters. You want them to be able to complete typing. So you're going to want, like, latest to show the update. This is why when I click it, it goes to 741 weather immediately. And you're going to want a way to say, like, if I depend on this...
[02:29:01] you know, being there.
[02:29:03] then I can do that.  But outside of that,
[02:29:07] Most things
[02:29:09] A lot of things are processed
[02:29:10] based. Now I don't know if generic components have a lot of this listed. I don't, I'm not experienced enough to know that it, like, if I go pull up like chat CN or cobalt or something, cobalt's, uh,
[02:29:22] Solid, yeah. It's our...
[02:29:24] UI library and I look at some basic components here.
[02:29:28] Um, alert.
[02:29:31] Do any of these have baked in
[02:29:34] affordances like button.
[02:29:36] My guess is
[02:29:37] button does not have baked in
[02:29:40] It has disabled?
[02:29:42] Indeed, it's stable.
[02:29:44] Yeah.
[02:29:45] And then it handles, yeah.  Which means that you're the one consuming it  who feeds that in.  So you make the decision.  It's not apparent.  Like I think a lot of times...
[02:29:53] A lot of these affordance decisions
[02:29:56] Don't.
[02:29:57] end up in the most low level thing.
[02:30:00] They start reflecting your
[02:30:02] like affordances are kind of a designer's choice.  They're your...
[02:30:06] system. I think if
[02:30:08] You go to the next level, like above Cobalt, like your eBay,  and you have a specific design system  with specific design system rules, then they will come in.  So like lowest level components, like generic,  everyone can like build their component libraries  on top of those, probably aren't gonna use this a ton.
[02:30:24] Um,
[02:30:24] Except for like managing like
[02:30:28] tearing.
[02:30:28] aspects as things relate to accessibility in terms of function
[02:30:32] I think that like,
[02:30:37] Like a lot of them will just expose it through like a disabled.  Like, like, is there select...
[02:30:42] Less luck.
[02:30:44] Black will probably have it disabled as well.
[02:30:48] trigger context arrow,
[02:30:51] default value,
[02:30:54] You
[02:30:58] Okay, so these have error affordances.
[02:31:02] For validation state, okay, that's cool.
[02:31:07] Thank you.
[02:31:09] placeholder
[02:31:11] You could argue that frameworks didn't have the tools to give people, and this will be like a new expansion on it. But I'm not sure. We'll kind of see how it floats out. My guess is that this stuff might sit like
[02:31:23] not quite application code, but like
[02:31:26] basically the reusable parts of your application code allow that sits.
[02:31:29] Because
[02:31:30] In practice, what ends up happening, I think, is
[02:31:35] There's going to be a lot less is pending than people think.  People are stoked when they see these demos and it is pending  because they understand what it represents.
[02:31:41] It's incredible. But in reality,
[02:31:45] loading is going to handle most of the initial load.  You're going to have your affordances.  And then when you go to update something,
[02:31:51] you're going to want to
[02:31:53] associate with that specific process. You don't want like a different part of the page lighting up because it touches the same data. You're going to want to be like, look, I am doing
[02:32:02] In most cases, I'm going to do this process, and while it's doing this process,
[02:32:07] I'm going to show an indicator, which means
[02:32:09] loading indicators
[02:32:11] are often going to be optimistic state instead of it's pending.  And you can kind of see a little bit why
[02:32:19] Um...
[02:32:20] when we even look at the
[02:32:23] the- these uh, the simple
[02:32:27] uh,
[02:32:29] Optimistic UI example.
[02:32:34] because
[02:32:36] An update is often...
[02:32:38] something to the server and then a refresh. It's not until we do the refresh here that we know
[02:32:44] that the two users are updating. So this is when loading
[02:32:48] This is when "isPending" starts. "IsPending" doesn't start here.
[02:32:52] like before this, before we go to the server, it doesn't even know what data it's dealing with, right?  Like it's here, it says pending, but that's too late.  You want to capture the process.  You want to say, while I'm adding...
[02:33:01] to do something.
[02:33:06] you want it to last through the refresh so that when you have multiple things coming in that they don't like
[02:33:12] mangle each other.
[02:33:14] But...
[02:33:15] You don't actually know that to do's is impacted until
[02:33:20] this comes back. Now,
[02:33:23] with optimistic
[02:33:25] UI.
[02:33:27] we can kind of guess at it, essentially. Because if I go in here and we have some alchemistic UI, and we add to-dos,
[02:33:35] set, we're adding optimistic UI here.
[02:33:41] Now,
[02:33:42] Well, I mean...
[02:33:45] This is actually just adding it to the process.
[02:33:47] We add the to-do and show it in the list.
[02:33:51] It's not that in here we know that the to-dos are loading, we are actually looking
[02:33:59] for added.
[02:34:00] to do our affordances. There's no "is" pending.
[02:34:03] in this example at all.
[02:34:05] Because
[02:34:07] it's process oriented is and that's sort of what i'm what i'm what i'm getting at um
[02:34:12] Okay.
[02:34:16] Thank you.
[02:34:17] This is actually probably leading to the biggest point of
[02:34:26] of trying to
[02:34:30] determine how these pieces interact because
[02:34:33] I'd say one of the last open questions we have on 2.0 right now is...
[02:34:40] Whether...
[02:34:41] The optimistic state itself should be viewed as pending.
[02:34:46] Right.
[02:34:47] Thank you.
[02:34:50] So let me just look at--
[02:34:52] comments here for a second before I elaborate.
[02:35:00] Thank you.
[02:35:01] Thank you.
[02:35:03] Thank you.
[02:35:04] Thank you.
[02:35:04] The case for having fun is that you automatically get some affordance automatically set the UI just holding.
[02:35:09] Yeah, I'm just saying, historically, I don't know
[02:35:13] if people have ever done that. But
[02:35:16] We have precedence for this, right?  Right.
[02:35:21] What I mean by that is...
[02:35:27] you
[02:35:28] Actually, no, we don't have precedence for this, do we?  When you click a button,
[02:35:32] You see
[02:35:34] the focus state, you see the click state.
[02:35:37] But you...
[02:35:39] don't actually
[02:35:41] see the I'm processing state.
[02:35:44] Yeah, you know, I mean, the native buttons don't have
[02:35:48] Like the affordance responsibility for a button purely is the fact that was I clicked.
[02:35:54] not
[02:35:55] Thank you.
[02:35:55] any connection to the work that's downstream.
[02:36:00] I know a lot of people like picturing these systems, but I,
[02:36:03] I think there might be still too many...
[02:36:06] variations and variables for the most generic systems to actually bake that in.
[02:36:11] I get why people might think they want this.  I'm just not sure that they actually do.
[02:36:21] Anyway.
[02:36:24] Um.
[02:36:28] Back to...
[02:36:34] Hey.
[02:36:35] Thank you.
[02:36:36] Thank you.
[02:36:37] Sorry, I just... I just hit my throat.
[02:36:42] Back to this for a second, because what I want to talk about here is this upstream versus downstream is important.
[02:36:49] Because...
[02:36:51] Optimism.
[02:36:54] has some we should talk about optimism for a minute because it has some impact because
[02:37:03] Let me... I'm gonna copy...
[02:37:08] part of this.
[02:37:13] Okay.
[02:37:15] Yeah, let's play over here with this.
[02:37:18] Because...
[02:37:19] Thank you.
[02:37:21] While we're in the process of doing our transition, we know that is pending is going to flag true for all this.  But what's interesting is.
[02:37:27] is how do our optimistic nodes
[02:37:31] Thank you.
[02:37:32] fit into this thing. Let's say if we add our
[02:37:36] Oh, we lost our source node.
[02:37:45] Thank you.
[02:37:50] Let's see some color coding. Source nodes are going to be green.
[02:37:56] Async nodes are going to be blue.
[02:38:03] No.
[02:38:04] Um...
[02:38:10] Red. Let's keep it async red.
[02:38:15] Result is gonna be round.
[02:38:20] Okay.
[02:38:24] Thank you.
[02:38:26] So, there's an interesting question of...
[02:38:32] Optimism usually snags itself out.
[02:38:36] in like,  you don't,
[02:38:37] latest
[02:38:39] You might use Latest.
[02:38:42] on the source here, like up here is where you might tap latest.  Cause you're like, I want to see the source right away.
[02:38:48] But if you try and put latest...
[02:38:51] down here, downstream async. It can't show anything until it async loads.  There are cases where you'll you'll want that when you chain async.
[02:38:59] Were you...
[02:39:00] But latest doesn't become...
[02:39:03] Um,
[02:39:06] like doesn't show up after async until async is complete.  Because before that, it has to be the previous value.  There's nothing to show.
[02:39:15] So...
[02:39:16] But if we're talking about optimism in general,
[02:39:19] Usually,
[02:39:21] It sneaks in
[02:39:23] down here.
[02:39:24] because what you'll do is you'll trigger some async,
[02:39:28] And then you'll sneak in
[02:39:31] an optimistic node.
[02:39:33] with your prediction,
[02:39:36] Like so far we've been using optimistic as like,
[02:39:39] Yes, no.
[02:39:41] a bit, but if you look at the to-do example here, this is a little bit more subtle. It's not just yes/no, it's this optimistic state.
[02:39:51] This one's still not good because it's still yes/no. It's an empty array and then we add optimism.
[02:39:57] It's still separate.
[02:39:59] Let's use completed. Yeah, this is a better example. Okay. I'm gonna put it here. Now completed
[02:40:08] Even though it's taking two seconds to save, as soon as I click it, it's showing it disappear.
[02:40:13] then it resolves. What's different is with completed our optimistic state is derived.
[02:40:17] from
[02:40:18] Props to do completed.
[02:40:20] We set the new value during our toggle change, right?  We set our new optimistic value, but it never, it doesn't revert in this case.
[02:40:30] Because
[02:40:31] Hopefully, when it comes back from the server and re-derives, it gets the updated value.  This is the common case for optimistic updates.  If we didn't...
[02:40:42] have this
[02:40:45] Thank you.
[02:40:47] And we did this when I check it.
[02:40:49] You know, the checkbox is tearing anyways, because I told you our built-ins are tearing.  But look at when this line crosses out.
[02:41:00] Now it does when it's finished.
[02:41:01] Whereas if
[02:41:03] If.
[02:41:05] If we do this,
[02:41:09] Now it crosses out immediately.
[02:41:13] Right.  So like the classic...
[02:41:19] use here
[02:41:22] of Optimist State.
[02:41:26] for actually optimistic state, not just for like saying like, am I loading or pending, is actually deriving it from the source that will eventually update and predictively setting the value.
[02:41:37] And that's basically what I'm showing in the diagram here,  'cause what we're gonna do,
[02:41:44] Here.
[02:41:49] And this arrow, well it's blue right now, we'll figure out what that means.
[02:41:54] Um,
[02:41:58] downstream of optimism.
[02:42:03] Doesn't that sound nice?
[02:42:06] Um...
[02:42:10] Wait. Optimistic.
[02:42:13] So
[02:42:19] There's an interesting thing that happens here because...
[02:42:24] When you become downstream of optimistic instead of downstream of async,
[02:42:29] you actually update immediately.
[02:42:32] which means that this is a like it's very you'll observe different things between
[02:42:40] Thank you.
[02:42:41] Thank you.
[02:42:42] Something that's like this.
[02:42:46] and something that's like this, right?
[02:42:50] I'll put it there so it's on the same level.
[02:42:55] *Sigh*
[02:43:00] But what's interesting here
[02:43:04] And something that we had to kind of work through as we were working through the design
[02:43:07] was what happens
[02:43:10] If.
[02:43:13] What happens if
[02:43:15] Thank you.
[02:43:17] Thank you.
[02:43:20] Like this is kind of obvious that this holds.
[02:43:23] Whereas this like,
[02:43:24] breaks, what happens if
[02:43:27] We
[02:43:29] throw another wrinkle in here.
[02:43:36] Thank you.
[02:43:37] Thank you.
[02:43:38] and do this. Now,
[02:43:42] I, for a long time...
[02:43:45] that I did not like.
[02:43:47] this pattern very much.
[02:43:50] But...
[02:43:51] This is a potential thing.  What if the optimism...
[02:43:55] lets us optimistically fetch more data.
[02:43:58] *sniff*
[02:44:00] Well, I don't know.
[02:44:02] Thank you.
[02:44:03] What we have here then is
[02:44:05] no longer a clear like this whole like when you look at this model you can kind of go like okay i get it
[02:44:12] This
[02:44:13] Good, transparent.
[02:44:15] This part holds.
[02:44:17] And then like,
[02:44:20] this part
[02:44:22] doesn't hold.
[02:44:24] um
[02:44:27] Like, can I make it?
[02:44:33] Thank you.
[02:44:35] called the blue, not blue, get that transparent.  Right, you can kind of like see two zones,  like in your head you're like, okay, well, this is easy.  And you might be like, if there's multiple of these,  these all go right away.  And then this part holds.  So it's almost like escape the transition.
[02:44:49] But
[02:44:51] It gets a lot more complicated.
[02:44:53] Yeah.
[02:44:54] when this happens, because now
[02:45:00] Sure, this holds.
[02:45:04] I need one more.
[02:45:08] Thank you.
[02:45:11] Thank you.
[02:45:14] Mmm...
[02:45:16] But what does this do?
[02:45:22] Thank you.
[02:45:23] Well,
[02:45:24] The answer is it holds as well, but only as long as this async is relevant.
[02:45:31] So you almost get like sub-
[02:45:34] transitions.
[02:45:37] And this cascade
[02:45:40] and the potential these
[02:45:42] graphs merging.
[02:45:44] has led to a very complicated optimistic lane solution where you actually have
[02:45:49] transitions broken into multiple
[02:45:53] different
[02:45:55] update streams.
[02:45:56] Which obviously I doubt anyone really wants to get into the mechanics of that on stream right now.
[02:46:02] Okay, you want to see an example of this?
[02:46:05] Yeah, this might not be visually obvious to people. So let's
[02:46:09] Let me show an example.
[02:46:12] What's it called?
[02:46:13] Not nested fetching.
[02:46:15] You optimistic fetching.
[02:46:20] Thank you.
[02:46:23] Okay. This example
[02:46:30] It's interesting because there's an action.
[02:46:34] When we
[02:46:36] Shhh.
[02:46:36] They call it handles like, this is actually saving.  Like when we change this, we're actually going to say that we're saving something on the user's profile.
[02:46:45] Right? So we're updating their user preferences.
[02:46:48] with a new category.
[02:46:49] And then ultimately we have to refresh the user's category, right?
[02:46:54] But first we set it optimistically, right?
[02:46:57] The problem with this example, which makes it such a pain in the ass,
[02:47:00] is
[02:47:01] Thank you.
[02:47:05] Oh, I haven't updated this one.
[02:47:08] Did I miss that?
[02:47:11] Hm.
[02:47:12] Interesting.
[02:47:13] Thank you.
[02:47:15] Did I not update-
[02:47:17] Oh, it's on the screen, okay, whatever.
[02:47:20] Um,
[02:47:21] Interesting.
[02:47:24] Thank you.
[02:47:25] Yeah.
[02:47:26] Thank you.
[02:47:26] you
[02:47:27] What's interesting about this one is by changing the category, you also have to fetch the new data here, right?
[02:47:34] So,
[02:47:35] Our category,
[02:47:37] is actually based on the optimistic category.
[02:47:40] Um...
[02:47:44] So because we don't want to we don't want to wait for the save to happen to fetch the data for the next thing. So
[02:47:50] It's actually driving
[02:47:52] Um...
[02:47:53] The current selected value is the optimistic value that you're setting.
[02:47:56] Here.
[02:47:57] And, um...
[02:47:59] because you want to show it right away. You want it to tear, right? You want this to immediately go to news.
[02:48:05] Actually, to be fair...
[02:48:07] This is this is actually just the dropdown
[02:48:11] Like it'd be weird if you did a dropdown and the value didn't change. This is just the built-in drop-down thing.  So this part's not that important. This would have probably worked either way.  But the important part is that our category section is based on the optimistic category instead of the waiting for this the save.  And then in here it fetches its own category details and
[02:48:30] and shows it.  If we didn't wait, this would tear, right?  It would show finance right away because it's optimistic  and it wouldn't wait for the data to show up.  See this way,
[02:48:39] It actually
[02:48:40] Weights.
[02:48:41] They're
[02:48:43] And, but you're, you're wondering why is this interesting case?  Because the stupid update profile thing takes two seconds.
[02:48:51] Thank you.
[02:48:52] Thank you.
[02:48:53] So...
[02:48:56] The whole update of this,
[02:48:58] section here happens in half a second.
[02:49:01] This is still saving.
[02:49:03] in the background.
[02:49:04] So it independently flushed it, even though the whole transition isn't done.  You can't visibly see that, but it's an important distinction because
[02:49:12] This is such a...
[02:49:13] It's actually...
[02:49:14] two seconds to update the profile and then another half a second to actually get the latest.
[02:49:20] Both of these things happen. And what makes this
[02:49:24] This challenging is,
[02:49:29] Which might not be obvious to people is...
[02:49:35] since
[02:49:37] the data is done.
[02:49:41] Like,
[02:49:42] We do this, we switch the news. That's optimistic. This completes two seconds later.
[02:49:48] And it.
[02:49:49] and then it triggers refresh, and then it matches so it doesn't have to do any more work.
[02:49:54] But what's interesting is
[02:49:58] This example is using "isPending"
[02:50:01] Thank you.
[02:50:03] Um...
[02:50:05] S-
[02:50:06] And you're like, but...
[02:50:07] If...
[02:50:10] category data here,
[02:50:14] or sorry category name, sorry category name, which is coming from optimistic category.
[02:50:20] is
[02:50:21] derived from user category, which is getting refreshed, went the pending
[02:50:26] travel through? And the answer is no. It's because optimistic overrides
[02:50:31] consider themselves
[02:50:33] A source of truth.
[02:50:36] When you say, "Hey, I've got the value,"
[02:50:39] We're going to trust you.
[02:50:41] um that you have the value and in a sense it's no longer
[02:50:46] Pending you have a projection of the value, which is why
[02:50:50] we have the ability that when it finishes,
[02:50:54] The fact that this
[02:50:56] refresh of the base category happens later
[02:51:00] doesn't cause it to flicker in depending again.  This was the, this was working on this.  This was the bug. There was two problems originally.
[02:51:07] We didn't
[02:51:09] wait and it split, we didn't make sub transitions.  And the second problem was it would change, stop,  and then when refresh,
[02:51:15] like after the two seconds when it goes to refresh it would cause the whole page to go pending again
[02:51:20] which doesn't make sense. You start
[02:51:23] You start seeing that the interaction between these pieces
[02:51:27] is not
[02:51:28] there's some complexity that comes
[02:51:32] here. Part of it is
[02:51:33] subholding. Other part of it is
[02:51:36] if other updates come in from the top here as part of this transition
[02:51:40] How do we keep
[02:51:43] Thank you.
[02:51:44] this isolated?  And the answer was...
[02:51:48] Like...
[02:51:49] There's a third thing that I didn't explain yet, but there's a third scenario that's complicated is
[02:51:56] You also want, if the thing's wrong, to refetch the data right away and not wait till the whole transition's complete.
[02:52:05] Um,
[02:52:06] Because otherwise you get into this...
[02:52:08] like you basically have
[02:52:11] this data waiting on some other async that might be triggered over here,
[02:52:16] and you want to parallelize stuff as much as possible.
[02:52:20] we had to basically create a system
[02:52:23] where optimism is both
[02:52:26] not a completely separate transition. It can read from its parents' updated values as they become available, but also be able to isolate its own updates.
[02:52:35] Um...
[02:52:40] What does this have to do with composition? Well,
[02:52:43] that's what this is all building up to.
[02:52:46] Thank you.
[02:52:49] Thank you.
[02:52:50] Does it refetch the old value if the update fails?
[02:52:53] Uh, yes. Well, actually, let's see. Let's see what happens when the update fails.
[02:52:59] This is the right kind of question to ask in this example. So update fails.
[02:53:04] Presumably this has error handling, which it doesn't.
[02:53:07] Um,
[02:53:09] You would say refresh user category, which would, yes.
[02:53:14] Generally, if you tell it to refresh user category, then it would refresh.  It depends on how your error handling happens here.  Let me give you a more concrete example, not of the optimistic re-failure, but if we look at
[02:53:27] the authentic data with affordance example here for to-dos,  I actually have error handling in it.
[02:53:33] And
[02:53:35] In my case, yes. I sit on error.
[02:53:37] to still refresh. It's a choice. You could also say not refresh, but if you don't refresh,
[02:53:42] if states moved on, it's kind of hard. You would have refreshed anyways,
[02:53:47] if it has succeeded.
[02:53:49] I know in a sense you're like, it's wasted work.  So in some scenarios, you could argue that you don't need to do the refresh.  You could just do a manual patch of the data if it's available.
[02:53:59] You have options here. It's basically how you write your action and the way that action was written.
[02:54:04] If I try catch the thing and put refresh, then yes, it would refetch if it fails.  The other...
[02:54:11] The...
[02:54:13] The other thing is I don't have this example shortcutted here.  There's an example where the predictions were wrong based on like shipping things.  Like it's some crazy example.
[02:54:25] I talked about this on a previous stream, but it worked for almost a month to iron out those details to make sure that these things can compose properly and consistently. But I think one of the biggest challenges we've been having...
[02:54:39] recently is
[02:54:43] kind of down to the base level
[02:54:46] And you can see it right here is
[02:54:48] If you have a basic
[02:54:51] button or something that's depending on is pending.
[02:54:55] Thank you.
[02:54:55] Thank you.
[02:54:56] And you have these optimistic updates.
[02:54:59] blocking that stream, if they're part of the same primitive,
[02:55:03] There's a choice here. Now you could argue that the thing isn't for an,  in a basic case, it isn't pending because you gave it the optimistic value.  You can work on it right away. Right. And I think that's, that's fair.  But when you have stores and optimistic stores, which can be more fractured,  it's a little bit harder to see like,
[02:55:20] how like
[02:55:21] similar or different data in the same...
[02:55:25] in the same kind of zone. So we're still kind of working, I think it's going to be like the last  little piece here is working through the details of what that means or looks like.
[02:55:33] Sorry, I'm just opening Discord here for a second.
[02:55:37] Because I think I actually have an example in Discord that I...
[02:55:40] that I might want to kind of look at here.
[02:55:44] Because it is a real...
[02:55:47] Um...
[02:55:48] It is a real kind of
[02:55:50] Thank you.
[02:55:51] All right.
[02:55:52] bug, so to speak.  Let me, let me,
[02:55:57] Thank you.
[02:55:59] Because like...
[02:56:02] Our to-dos with affordances example works really well.
[02:56:07] because
[02:56:09] What we do is whenever we perform an action,
[02:56:12] we set our optimistic data we tell which rows are impacted we say hey
[02:56:18] we're going to say pending true on that role.
[02:56:20] So when I add a row or update a row, we're going to actually add data to the row.  And because this is an optimistic store, when the real data comes in, the pending  will just disappear.
[02:56:31] So then I can do silly stuff like turn...
[02:56:34] Ah, this green. What's going on?
[02:56:38] Thank you.
[02:56:41] Bye.
[02:56:43] That's the whole thing freezing.
[02:56:48] What did I do? Have I not updated this one yet?
[02:56:52] It's weird, I thought I tested this one yesterday.
[02:56:57] That's interesting.
[02:56:59] Wasn't this working earlier?
[02:57:04] Thank you.
[02:57:06] It literally got past loading earlier.
[02:57:11] Oh.
[02:57:13] It's
[02:57:14] I hadn't updated this so long that the
[02:57:17] It's the, uh...
[02:57:19] The same problem we had in the other ones. I'm going to have to go through and make sure I
[02:57:22] Thank you.
[02:57:23] four releases back, we return to the key distinction. Okay, there we go. Thank God. Okay.
[02:57:31] Yeah, like that one failed, it turned to red.  But the fact that I, the reason I can turn green while it's like working
[02:57:38] I think succeed, okay.  Well, or like when I add stuff,
[02:57:44] The failure rate on here is pretty high.
[02:57:46] is just a matter that I mark the specific row. This is the pattern to use with optimistic stores, but
[02:57:53] it's interesting when you have stores that could be involved in multiple  different processes and some view it as a data thing and some view it as a  self-management thing like this this example is interesting where
[02:58:04] Um,
[02:58:06] essentially
[02:58:09] Again,
[02:58:10] Made to be contrived, but you have...
[02:58:12] two tabs, and when you change,
[02:58:16] It disables...
[02:58:18] A dropdown.
[02:58:19] five seconds until it completes. Click here, disables this drop down until it completes.  So this is like the loading indicator while it's moving over. But
[02:58:28] If this ID is part of the same store, and then you're doing optimistic overrides while it's changing, suddenly this becomes unlocked because the optimistic override is blocking the pending state.
[02:58:40] Similarly,
[02:58:43] before we
[02:58:44] we nailed down this behavior when it was,  uh,  uh,
[02:58:48] when it was like half and half.
[02:58:50] Um,
[02:58:52] uh,
[02:58:53] Brenly wrote an article:
[02:58:56] how my mental model of its pending changed. And it depended on a kind of partially implemented, like this was an accident. I didn't actually intend for this behavior, but it was kind of like half working and we had made a decision to go hard one way or hard the other way. And we went hard the other way away from this, but this is still up for discussion.
[02:59:13] - -
[02:59:14] he was he because optimistic state specifically
[02:59:18] This is a great article to read if anyone's interested in, even though it may or may not be
[02:59:22] outdated because Optimist6State was flagging the as pending indicator. He could basically use it to  instead of adding like pending to each row, like I was showing in the to do example, he could just like ask about
[02:59:34] the specific thing. Like you could go like is pending
[02:59:37] Bookstart linked.
[02:59:38] or book's title,
[02:59:40] And the optimistic state's existence alone would tell them that it's pending.
[02:59:47] But he ended up using this kind of interesting hack
[02:59:50] Um,
[02:59:51] where
[02:59:52] Hey, where was it?
[02:59:56] Yeah, I think it's
[02:59:58] I
[02:59:59] Does this use laser?
[03:00:00] with it
[03:00:00] pending. Let me see if I can find it.
[03:00:05] Thank you.
[03:00:06] Yeah, because latest with pending would hide the refresh.
[03:00:11] See, the challenge with this whole system, and this is kind of like the last design point is, and you can see this when looking at...
[03:00:21] A to-do example, for example.
[03:00:23] or any of these really, there's always the mutation
[03:00:27] Like here's the optimistic state.
[03:00:29] Here's the mutation, and then there's the refresh. But until
[03:00:33] -
[03:00:34] The refresh happens.
[03:00:37] The only indicator that we have that something's changing is the optimistic state.  Now, if we take care of it ourselves by, like, adding...
[03:00:43] pending states and stuff, this works well. But "is pending" doesn't work until the refresh happens, which means
[03:00:49] It's like too late. It's not tied. So as I said, usually you say it's optimistic, tie it to the process.
[03:00:55] But,
[03:00:57] You can see...
[03:00:59] How does this compose well?  You know, that's the question you can see in this example where.
[03:01:04] Two people made two separate things, one that depended on pending...
[03:01:08] on one part of a
[03:01:09] of a store and something else that
[03:01:12] you know, is kind of managing its own
[03:01:14] optimistic state and they're kind of
[03:01:16] Butting up against each other.
[03:01:19] So
[03:01:20] This is kind of still like an open design question.
[03:01:26] where we're still iterating on.
[03:01:29] It's funny that like
[03:01:32] This is so fringe in a sense that like every single example that I've shown on stream to date still works without making a decision like that. And we're getting to a point where we're like really trying to contrive stuff, but these kind of details matter.
[03:01:41] when you want to make
[03:01:43] you know, something
[03:01:45] that works independently without being aware of the other pieces.
[03:01:49] This is the kind of questions like it's not just a matter of us getting our mental model around the fact that there's a clear distinction between process.
[03:01:57] and propagation.
[03:01:59] But that
[03:02:01] There are real implications of how these things layer on top of each other.
[03:02:06] My hope.
[03:02:07] with these kind of things is that once we come
[03:02:09] we land on which way to go. And I think both
[03:02:13] extremes actually have an argument for them that you're never going to actually probably think about them again. It'll just be kind of intuitive. Once you, once you choose the right thing, like this is process oriented or this is data oriented, it'll do the right thing.
[03:02:25] but
[03:02:26] Um,
[03:02:29] There is definitely a little
[03:02:31] Um,
[03:02:32] complexity here to consider.
[03:02:44] Sorry, I missed this a while, but what is the option part?  I didn't quite understand.  I think you were talking, you fetch something that makes the current div more opaque and  reset the value of three minutes.
[03:02:53] if we messed up in theory,
[03:02:55] Oh yeah, okay, sorry. Yeah, this is back to...
[03:03:00] This...
[03:03:02] Example, I think, optimistic fetching.
[03:03:06] Okay.
[03:03:07] What's optimistic about this is actually
[03:03:11] if I'm writing the right example, is actually the category you choose itself, which actually means that
[03:03:16] we're feeding the category choice.
[03:03:19] all the way
[03:03:20] through to the actual
[03:03:23] data fetching. It's actually trying to fetch data before it's saved the data.
[03:03:27] like save the choice if we're talking about the same example hopefully i am i'm sorry i missed that  question earlier
[03:03:37] Like,
[03:03:38] Thank you.
[03:03:39] Thank you.
[03:03:39] it's derived from the user's saved category in the database.  Essentially, you can pretend this is a saved category in the database.
[03:03:46] The optimistic state is layered on top and you're saying, look, when we choose a new category, I'm immediately going to say that that's the category, even though it's going to take two seconds to save.
[03:03:55] and a half second to
[03:03:56] Confirm that saved.
[03:03:58] In the meanwhile,
[03:04:00] I'm going to thread this through here.
[03:04:02] and that's going to fetch the actual specific things.
[03:04:06] So the whole thing is going to be built on a house of carbs.
[03:04:09] But...
[03:04:10] we do the right thing.
[03:04:12] so that it works.
[03:04:13] consistently still.
[03:04:17] Thank you.
[03:04:18] Thank you.
[03:04:21] - I mean, in this example,
[03:04:23] this whole thing, the fact that when this changes, this whole thing is optimistic right now.  We're actually sitting in an optimistic override.  The transition is still saving.  Finance hasn't saved in the background yet.
[03:04:34] This whole area is predictive.
[03:04:38] This finance could fail, but we've already updated the UI and fetched the data for finance, even though...
[03:04:45] It hasn't saved yet because it's taken.
[03:04:47] T.
[03:04:48] Two seconds.
[03:04:51] It takes two seconds to save, yeah, two seconds.  And then basically two and a half seconds to do the whole thing.  So technically, it's not just an optimistic value.  It's an optimistic part of the graph, which is what I was trying to...
[03:05:04] show here. It's like it runs in its own lane. That whole section of the UI is actually operating
[03:05:10] in a different zone than the rest
[03:05:13] it's kind of already moved ahead to the future.
[03:05:19] Yeah, but like...  It is...  Optimistic things do flush immediately or do flush earlier.  That is what they do.  It's just like...
[03:05:31] It's, it does, the part that makes that example a little subtle is it doesn't flush immediately. It does wait for its own downstream async. It's almost like a sub transition.
[03:05:40] And it's still--
[03:05:42] Um...
[03:05:43] coordinates with the parent transition.
[03:05:46] Like, it's still part...
[03:05:49] It's like...
[03:05:50] Hmm.
[03:05:51] What do you think?
[03:05:57] Thank you.
[03:05:59] Thank you.
[03:05:59] But yeah, I mean...
[03:06:02] He's...
[03:06:04] I mean, this is the thing we got to consider on this is like,
[03:06:09] how many people are going to use these tools
[03:06:14] to do stuff like this like
[03:06:17] that kind of
[03:06:19] Cheated a bit
[03:06:22] It's interesting. It's one of those side effects of coming up with a design that doesn't care about the shape of the async, right? You're just saying, look...
[03:06:29] my optimistic value
[03:06:32] can also propagate its own
[03:06:35] async its own, its
[03:06:37] its own kind of
[03:06:39] transition and
[03:06:41] Ultimately, if things don't work out
[03:06:43] we have to be able to handle it
[03:06:46] in a single coordinated way.
[03:06:49] Like...
[03:06:51] It's interesting. I don't think anyone would, many people would set out this way.
[03:06:57] Like in their head.
[03:07:00] Bye.
[03:07:02] Yeah, I'm not sure.
[03:07:03] Because if this wasn't async, you definitely would
[03:07:08] You could do this.  You could be like, look,
[03:07:10] I updated it immediately and I showed immediately, but then you're like,
[03:07:14] What do you do? Like it
[03:07:15] But what if we make this into, what is it, user category?
[03:07:22] What happens if I make this into user category?
[03:07:26] Now it's no longer optimistic down there.
[03:07:29] When I switch to Finance,
[03:07:33] *sniff*
[03:07:34] Yeah, I mean, this is the worst case scenario  because it doesn't trigger the refresh.  It doesn't trigger the...
[03:07:40] pending.
[03:07:41] until the refresh happens.
[03:07:44] But it's more like what you would do here, even though it's not passed through, is instead of relying on is pending, you'd have something process-based, right?  You'd be like...
[03:07:54] In here, you'd be like,
[03:07:57] Thank you.
[03:07:59] Uh...
[03:08:01] updating category. But then you see the problem. Category display needs to know that, right? If it's process-based, you need to pass it through. When it's data-based,
[03:08:11] things are a little bit simpler because you just pass the data and the data encodes the fact that it's pending or not.
[03:08:17] Whereas if it's process based, you actually have to thread that information of loading all the way through.
[03:08:24] at first you go like that seems like a big inconvenience. But when we were looking at  Cobalt and stuff, most UI libraries are already set up to be that way. Like they don't assume,
[03:08:35] Thank you.
[03:08:36] Like that you can ask the data if it's pending.
[03:08:40] I'm not gonna lie, there's been some discussion that where people like maybe is pending is a mistake.
[03:08:47] So
[03:08:47] I think...
[03:08:48] because of the different behavior
[03:08:51] that it enables and it's very important for doing things like
[03:08:54] reading above
[03:08:57] the async, like when you do page navigation, like if you've seen
[03:09:03] Oh, where is it?
[03:09:05] Tabs.
[03:09:07] Like when you.
[03:09:10] when you're going from
[03:09:12] here to here.
[03:09:13] Thank you.
[03:09:15] and see how it grays out when it takes a while.  It's good to kind of like
[03:09:19] be able to ask a question with no knowledge of the data below and just go like, look, this is part of this transition.  Like we're waiting for it. See here it grays out if it takes a long time.  Like you can't see when it's fast, but it takes longer. It actually fades a bit.  But here, because there's a nested loading boundary,
[03:09:37] it never grays out when you go this way because it,
[03:09:40] It can always show the value immediately. I think
[03:09:46] Thank you.
[03:09:47] As we showed at the start of the stream,  where some stuff's based on data  and some stuff's based on process,  there is a clear use case for...
[03:09:54] Both, but it's the tricky part is figuring out how to encode that into best practices.
[03:09:59] It is definitely a superpower to be able to ask both questions, but how do you
[03:10:07] direct people to make the best composable things. I think
[03:10:11] If you start from a composition standpoint,
[03:10:14] It's like what we were talking about earlier, like if you have a select list,
[03:10:18] And that requires
[03:10:19] the options
[03:10:20] then that's a data requirement. Handle it that way. If it's a button that triggers an event,
[03:10:26] then it's process based.
[03:10:28] you know, use your optimistic state affordance. And I'm hoping that pattern just
[03:10:34] trickles up. But as I said, when you start layering in lots of complexity, we need to like,
[03:10:42] *shriek*
[03:10:43] Make sure that it does the expected thing.
[03:10:54] Thank you.
[03:10:56] Thank you.
[03:11:02] When I use Datastore, we respond earlier too since it's just one
[03:11:06] It's in the middle of the thing, but it's...
[03:11:09] Yeah, I mean...
[03:11:12] You can always model it
[03:11:16] Like if
[03:11:18] The tricky part is...
[03:11:21] is coming up with a design for consistent like
[03:11:25] Consistency guarantees.
[03:11:27] *sigh*
[03:11:29] The whole optimistic state model here and using optimistic data is like acknowledging the fact that like
[03:11:35] It's a speculative guess and it could be wrong.
[03:11:38] which is not a place...  Some people are already uncomfortable with optimistic updates  because of the fact that they can be wrong,  but if you start adding real weight to them,  like optimistic...
[03:11:48] like further data fetching, all that.
[03:11:51] Um,
[03:11:52] But like mechanically, you know, there's only like...
[03:11:55] I
[03:11:56] Optimistic aside, forget the specifics, not mechanically, but structurally, you know that you only have two choices.
[03:12:04] You either wait for it or you pretend. And that doesn't matter how you implement it. So,
[03:12:09] Um,
[03:12:11] That ultimately has to be up to the developer, as long as, as I said, we end up handling it.
[03:12:16] I don't think that's something that you can encode into the defaults into how the framework works. It's literally the developer decides if they want to grab it early or not.
[03:12:24] Um...
[03:12:27] Thank you.
[03:12:28] Thank you.
[03:12:28] Thank you.
[03:12:30] Anyway, um,
[03:12:32] Thank you.
[03:12:33] We started a place that made sense and taught, and then we ended in a place that is still open ended because this is a work in progress.
[03:12:41] I'm very happy
[03:12:43] generally
[03:12:45] except for these last couple of edge cases where these things are sitting, though.
[03:12:52] So
[03:12:53] So, yeah, I mean,
[03:12:55] I think that let's not get mired too much on the details of the specific like
[03:13:01] overlaps and
[03:13:03] just
[03:13:04] kind of
[03:13:05] reflect a bit on like
[03:13:08] this whole, you know, process versus propagation, get versus post mentality and see how that
[03:13:14] reflects in the actual applications that we build because
[03:13:18] as I've shown in demos, it definitely streamlines the writing of it.  It makes it a lot cleaner, gives clear responsibility.  I just what's up in the air for me is I don't know how obvious is  for people reaching to the right tools, right?
[03:13:31] This exploration
[03:13:34] Mm-hmm.
[03:13:36] Definitely, um...
[03:13:38] Thank you.
[03:13:39] had some really good conclusions to it, is "Pending tells you something is unsettled, never why."
[03:13:44] Which...
[03:13:45] Um...
[03:13:47] makes a ton of sense because where is pending on our
[03:13:51] our chart here. The get side never knows about the process. It doesn't know why it's doing anything.  The reason is the get side, you could do like,
[03:14:00] a billion updates and then only pull it at one point and grab that snapshot.
[03:14:04] This side has no idea of what caused it to do the update.  And it's intentional because there's no sense of time, no sense of reason.
[03:14:12] Optimistic state is often the loading state.
[03:14:15] Interesting conclusion.
[03:14:17] Because the actual loading state should be loading, but it's often state is often what you end up using for update states because...
[03:14:26] people...
[03:14:27] think in terms of processes.
[03:14:31] Right?  This is not obvious.  A lot of people think it's pending as a loading state, but...
[03:14:36] "is pending" is the readiness state.
[03:14:38] right it's unsettled.
[03:14:40] Optimistic state is actually tied to the process, so it is usually actually the loading state, and later filters out background refresh noise.
[03:14:48] That part, I don't know if I agree with. This was like an interesting side effect.
[03:14:55] Thank you.
[03:14:57] And this is kind of like
[03:14:59] I actually have a
[03:15:00] proposal right now because of the split that we've been seeing here sorry i'm going to open the right  window
[03:15:06] No, no.
[03:15:09] Because of the fact...  Like, we saw it a moment ago when we did the...
[03:15:15] the optimistic fetching where like
[03:15:17] It's not until the refresh that it realizes that it's pending.  Like because of that problem,
[03:15:22] We've been actually working on like
[03:15:26] Let me see if I can...
[03:15:27] Pull it up here. We've been working on like
[03:15:30] kind of proposals or ideas on how we can
[03:15:35] deal with that. There was
[03:15:37] uh
[03:15:39] Do you?
[03:15:40] What do we got here?
[03:15:41] Packages.
[03:15:44] Solid.
[03:15:48] No, sorry, it's all the signals.
[03:15:50] SaltSignals is a freaking giant library. So funny. Everyone's like, "Pull the signals out." But the signals library is like, it's bigger than Salt itself. It's like the biggest code base in here.
[03:15:58] Um,
[03:15:59] Effects. This was an idea I think originally posted by Friendly
[03:16:03] Um,
[03:16:05] But
[03:16:06] This is probably...
[03:16:08] like one of the many options to play around with this stuff.  Is optimistic was the other option.  Like, so you can be like...
[03:16:17] if optimistic isn't pending,  you can find the union between,  or is it,
[03:16:24] pending or is it optimistic to kind of like get back that idea of like,
[03:16:28] Is it updating?
[03:16:30] Um,
[03:16:32] So
[03:16:33] There's a few different solutions here, but the idea here is...
[03:16:37] If you want to do the light up pending and you don't want to wait for the refresh,
[03:16:41] Why don't you just tell it? You go,
[03:16:45] A, you know,
[03:16:46] this action affects to-dos and then
[03:16:51] that way, or even the specific to-do essentially,
[03:16:56] this row
[03:16:57] and then refresh it. Basically
[03:16:59] or could affect it. Basically,
[03:17:03] preemptively
[03:17:05] Mark
[03:17:07] The things that...
[03:17:08] you should consider pending from a data standpoint.
[03:17:12] Because like,
[03:17:13] There's two challenges here.  First of all,
[03:17:16] refresh everything, which often we do, is too broad.
[03:17:20] It might...
[03:17:21] It triggers every row?
[03:17:24] When you know you're just...
[03:17:25] Updating 1.2.2.
[03:17:26] But you still usually do this if you use any of the kind of like react query type patterns.  The second problem, which is there...
[03:17:33] So like,
[03:17:36] And then the second problem is, or that's the second problem.  The first problem is the one where you said where you don't know what's refreshing until after the save.  And the second problem is the granularity of that.  So maybe it's a way of just kind of like tagging on it, going like, hey, this action actually it's like.
[03:17:51] It's not saying like, hey, we're going to invalidate this.  It's kind of like a predictive thing like this might be invalidated.  So now.
[03:17:59] tie this
[03:18:00] as the pending state because you're just identifying that these are things that could change.
[03:18:05] It's--
[03:18:06] It's definitely an interesting one.
[03:18:10] This is one way of unifying.
[03:18:12] We talked about is affected, I don't like that.
[03:18:16] Thank you.
[03:18:17] Why not phone to refresh?  The pair often tying fresh attempting rejected as a primary form for three reasons.  Wrong end of the window refresh fires after they wait.  Target stiffer common shape affects a row, but refreshes could be the whole store.  The pair isn't mandatory.
[03:18:30] A mutation may end up in a WebSocket push, a targeted store right, or nothing at all. No refresh to hang the declaration on exactly.
[03:18:38] Thank you.
[03:18:38] This is, but yeah, this is a proposal.
[03:18:43] that
[03:18:44] Th- that's...
[03:18:46] worth considering.
[03:18:49] For example,
[03:18:53] Thank you.
[03:18:55] Thank you.
[03:18:57] Sorry, is chat just dead? Have I lost everyone?
[03:19:01] Thank you.
[03:19:01] Thank you.
[03:19:03] Thank you.
[03:19:06] Did I go too deep today? It's been a while.
[03:19:13] Mm-hmm.
[03:19:14] Thank you.
[03:19:14] Thank you.
[03:19:16] Some people are here, yes.
[03:19:20] I think there's a certain reality of this that...
[03:19:26] At this point,
[03:19:28] I've been talking about how there's like a fundamental physics here, you know, and I've been diagramming and showing how it works.
[03:19:36] But...
[03:19:37] Thank you.
[03:19:39] Not everyone needs the exact details.  They just need the categorical way to approach it to be like, look,
[03:19:45] This is optimistic state, this is pending state, blah blah blah. So maybe I am digging a little bit too deep into the mechanics.
[03:19:53] This might be valuable for framework authors that follow in our footsteps.
[03:19:57] But I think I'm...
[03:20:00] Even for myself, this is a lot to keep in my head.
[03:20:04] Thank you.
[03:20:04] Thank you.
[03:20:05] Didn't expect you to go this deep to be honest  Yeah
[03:20:08] I guess the scary thing is if you use this pen in a certain way and then someone else does something that changes it. Yeah.
[03:20:13] Um,
[03:20:20] I think optimistic can't scale.
[03:20:22] to a point which makes me a lot interested in it.
[03:20:25] The thing is...
[03:20:31] I've been trying to emphasize this.  It's not just...
[03:20:36] optimistic. Yeah, I get with it. It's not just
[03:20:42] To me, optimistic state isn't something that I created.
[03:20:45] projecting something that already existed onto the plane where it should have always been.  And I think there's a little tension here, especially on the HTMX side and stuff.  And there's a bunch of people who think that the client...
[03:20:59] from a pure standpoint,
[03:21:01] The only...
[03:21:02] gap between
[03:21:05] like what you can do with the spa and like HTMX where the client side is clearly a winner is this idea around Optimist State, which means that there is a certain interest there because if
[03:21:14] optimism and this sort of mechanism of ephemeralism that's client-driven is a real thing, then solutions that are primarily based on like HTMX type structures
[03:21:24] either
[03:21:25] have this gap or they have to adopt this anyways, at which point the fact that they're based on the htmx structure becomes mute.
[03:21:32] so like
[03:21:34] If.
[03:21:34] In a sense, if we succeed at this...
[03:21:38] and say a feature like server components
[03:21:41] which have partial support, it invalidates
[03:21:45] a whole section of the design space, possibly the space that Datastar, for example, exists in.
[03:21:51] And
[03:21:53] Not that you still need specific solutions if you want, say, web sockets or content things, but
[03:22:00] If our constraint is simply on stateless backends, i.e. things that are non-persistent, which is what classically been in,
[03:22:08] Thank you.
[03:22:09] for like spas or whatever where like you can't
[03:22:11] know that a server is there because there's still advantage to those other solutions when there is a persistent server. But if you assume that there's no option of a persistent server, the whole solution space collapses on itself. Now, if optimistic doesn't work, then it's a completely different story.
[03:22:28] So
[03:22:29] It's it's interesting.
[03:22:32] Because there are implications to where this goes.
[03:22:39] Thank you.
[03:22:40] Like you said, most of your demos work either way. Exactly. Like, we're getting to the edge of the edge case that people don't appreciate.
[03:22:46] the devil is in the details because this is the difference
[03:22:50] But when we put all the pieces together, whether this is truly composable,
[03:22:54] whether this truly bridges the gap.
[03:22:57] As I told you at the beginning of the stream, I want to be more ambitious.
[03:22:59] Um,
[03:23:00] I don't know if you guys snuck a look here when I was like on some of my GitHub, but you might have actually seen a repo that has my early work on a universal framework agnostic server component.
[03:23:12] protocol
[03:23:13] So my own answer to handling partials that preserve client state and
[03:23:20] If if.
[03:23:21] If this works,
[03:23:23] I believe...
[03:23:25] you know, we will have united
[03:23:28] the different pieces in such a way that...
[03:23:32] they're not conflicting but i mean there's a lot of ifs in that so
[03:23:36] I'm not gonna say much more than that right now, but I think that
[03:23:41] Um...
[03:23:44] You can view this as
[03:23:46] a convergence. You know, I'm not saying like, when I talk about invalidating parts of the space,  I don't think these solutions are suddenly going to disappear. I'm just saying that they'll  naturally move into a convergence cycle. And I think
[03:23:58] finding that eye of the storm
[03:24:01] this is one direction to take it. There's other directions. I'm very keen on seeing, for example,
[03:24:08] starting from something like H&R
[03:24:10] like something days are like,
[03:24:12] where that gets gets when it meets converge because like right now
[03:24:19] There's only a couple...
[03:24:20] frameworks that actually have my eye for that reason.  And Datastar, for example, is actually one of them.
[03:24:26] you
[03:24:28] I think
[03:24:32] But part of that convergence is...
[03:24:36] Like you start seeing the pieces line up, right?  Because...
[03:24:40] If optimism is the way we so...
[03:24:44] timing and the lapse between server and client, we basically erase that lapse.  That's how we solve the time in a way that can be client driven.  If server components gives the way to handle partials that don't completely destroy state,
[03:24:58] And shared state can enlist on the client.  So we can have both server-derived state and client-side state unify it.  If...
[03:25:04] the still client-based pieces
[03:25:08] can be more efficient in the way that they load in,
[03:25:12] i.e. like resumability and hydration pieces, you know,
[03:25:16] Yeah.
[03:25:17] I think all these technologies actually fit together.
[03:25:22] in a way that's not actually...
[03:25:26] at each other's throat. And the truth is,
[03:25:30] They don't have to be some large singular system. That's why I said I'm looking at like framework agnostic server components, for example.
[03:25:38] Thank you.
[03:25:41] It suggests
[03:25:43] as I said, this convergence and
[03:25:46] I'm very excited by the potential of that because I,
[03:25:48] It was too much. We got a bunch of money from Google to do research. The output of that was Cerebell, basically, the serializer, and some research that we did into this stuff. But we were never in a position where we could actually deliver on...
[03:26:02] So
[03:26:03] what I had in my head. We just never had the resources.
[03:26:07] we would need like
[03:26:09] like freaking Google or Facebook.
[03:26:12] But I think modern AI is changing that picture.
[03:26:16] My feeling is that
[03:26:19] We can.
[03:26:20] I know what the solution looks like so we can build it.
[03:26:23] it's not as prohibitive as before.
[03:26:27] Okay.
[03:26:29] Bringing it to stability, bringing it to the mass is a whole other question and requires even more...
[03:26:34] But.
[03:26:36] I think we can show
[03:26:39] that it's viable and, um,
[03:26:41] I think AI is playing a big part of that.
[03:26:47] Yes, I mean, people should have already been doing this.  The key part is not just the affordances, though, but the generalization of...
[03:26:56] of
[03:26:58] of the idea of what the types of state, right?
[03:27:02] I talked about this previously on a stream, and I might even be in here still, where I was talking about the layering.
[03:27:09] I think, I mean, I might be getting too generalizing.
[03:27:16] Did I not have it in here?
[03:27:18] at some point,
[03:27:20] I was talking about
[03:27:23] how
[03:27:25] What is this?
[03:27:28] It's like a little bit too big.
[03:27:32] No.
[03:27:34] That's ancient...
[03:27:36] No.
[03:27:41] that there was like three types of state.
[03:27:45] And this is when I was talking about...
[03:27:48] No, that's React timing. This is when I was talking about, um...
[03:27:52] originally demoing that optimistic important state i was talking about that  basically you had the server which is like the ultimate like baseline of truth and then you had
[03:28:02] App state.
[03:28:05] And then you had an ephemeral state.  And they each live in their own zone.  And we've never been barely good at defining the...
[03:28:12] the ephemeral state, like all three of these exist, regardless of your architecture, you might
[03:28:18] push more stuff into different zones but when you where you push it doesn't match the expectation  of like how it functions you end up with friction
[03:28:26] If you try to push too much to the server, then you get a certain type of friction. If you try to put too much in the client, then you get a different type of friction. And I feel like
[03:28:34] because our lack of understanding of ephemeral state, we've been
[03:28:37] Construing
[03:28:39] certain, you know,
[03:28:40] like we've been pushing things in the wrong place.  And I think if we've,
[03:28:43] come up with the right lines. We talked about this on stream, I can't
[03:28:47] I believe I don't...
[03:28:50] Thank you.
[03:28:51] Oh yeah, is this it? Server Client Overlay Optimistic Overlay.
[03:28:57] Phases, yeah, this is it.
[03:29:02] "Phases of async and JS framework creation, do fetch as needed. Consumption, framework observes the promise as well as possible."  This is when I was trying to explain the difference between solid and other models. But the idea is like,
[03:29:13] Server.
[03:29:15] for fresh repression.
[03:29:16] thing.
[03:29:17] Yes.
[03:29:19] There's definitely a layering that happens, and I don't think you can...
[03:29:23] ignore any specific part.
[03:29:25] I think different solutions have shown really interesting ways to
[03:29:31] make the, I drew these as arrows, but there's a lot of complexity in the communication and the interaction between the different layers.
[03:29:37] Um,
[03:29:38] And like, a perfect example is like, we talk about
[03:29:42] quicksure resumability in terms of the way they can defer hydration, but
[03:29:46] There are mechanisms for loading, reactively loading JS as needed, essentially, like using the reactive graph to load the JavaScript needed. Like you click this button and now I know exactly what part of the graph.
[03:29:58] I need to load?
[03:29:59] Um,
[03:30:00] is an example of like almost like granular streaming of JavaScript, not just HTML.  That's an example of a very complex server to client interaction that they've streamlined that no one else has.
[03:30:11] In the same way,
[03:30:14] you know, what was getting talked about a moment ago with in terms of the service center events and the data star stuff that that's that's the type of communication that they've optimized incredibly beyond other solutions is incredibly fast as far as I've been able to tell along a certain thing, but
[03:30:30] These aren't all mutually exclusive.
[03:30:32] Um, I, we just need the right model to kind of,
[03:30:35] figure out where these pieces fit together.
[03:30:48] Oh yeah, I do agree with some classic bridge of the Ridge Department.
[03:30:51] The Datastar isn't capable of doing it.  It just doesn't want people to make spots for other reasons.  Yeah, I mean, there are certain...
[03:30:57] There's a lot of apps that don't necessarily need to be a spa. It's just,
[03:31:02] I think the tension isn't like...
[03:31:05] It's still app versus website tension, ultimately.
[03:31:10] It's like, do we have two models or a single model? And
[03:31:13] I think one of the hardest parts about RSCs is they were trying to sell a separate, like,
[03:31:19] model to people who wanted a single model.
[03:31:24] Like...
[03:31:25] People who build an app with React think they're building an app.  They think that there's a server, but that's like...
[03:31:33] external data that does this. They're building an app, almost like a mobile app. That's the mentality you have when you build an app, a modern single page app framework. You're a mobile developer almost.
[03:31:48] I feel like that's what made RSCs hard for a lot of people because they're just like, what is this? Why am I doing...
[03:31:54] Fricking PHP, like why am I doing like what?
[03:31:59] We'll see how Tanstax...
[03:32:02] like rough use of my design for server components plays out  and if people like it or if they even use it.
[03:32:08] Thank you.
[03:32:09] But there's a lot of problems that
[03:32:11] You know, it doesn't, saying app doesn't fit the shape.
[03:32:16] It depends what the goal is, right?
[03:32:19] What I'm talking about here is probably the intersection of everything is obviously the most complicated version.  The question is, can you pull it off and be performant and small?
[03:32:30] Obviously, if you cut out features, you would be even smaller and more performance.  So you can definitely tailor something to a specific case.  The question is, are we getting to a point where...
[03:32:38] 10 years ago
[03:32:40] jQuery is like 30 kilobytes that you're adding to every page.  Can we keep the framework under 30 kilobytes?  Like hit the jQuery marker
[03:32:47] that everyone was perfectly acceptable in the past.
[03:32:49] but have the capability.
[03:32:51] to make something that spans the whole range? That's the question.
[03:32:57] Oh.
[03:32:58] I mean, I do know, but...
[03:32:59] Let me pretend like I don't know.
[03:33:06] unlimited fable tokens. I actually made a joke to something the other day.  Like this is what it's going to come down to. It's like,
[03:33:12] Is the constraint now just going to simply be the cost of AI?
[03:33:21] Thank you.
[03:33:22] Thank you.
[03:33:30] If I set Optimistic immediately start an action, if the action finishes by setting a signal which has an async derived value, when is the Optimistic state reset? After the async derived value settles? Yes.
[03:33:41] Yes.
[03:33:42] If you want to isolate it,
[03:33:45] you've got to isolate it. It's like the other way around.  But of course, if you want to
[03:33:50] If you isolate it, then it's no op, right?
[03:33:53] But yes,
[03:33:55] Transitions are ambient in the system.
[03:33:59] Thank you.
[03:34:00] Thank you.
[03:34:04] Thank you.
[03:34:07] Doing one extreme or the other is easier because they make it as if the other system doesn't  exist and sure it's worse than the optional solution.
[03:34:16] Yeah, I mean, optimally, I think you meant, yeah. No, I mean, that's the whole thing, right?
[03:34:22] So sometimes like I've often said this and you know,  that the compromise being in the middle is actually the worst place you can be.
[03:34:31] but I I'm starting to think of this,  not as the middle anymore.  I'm starting to think of this as like the future of the spa.  Like this is actually just what the app solution should,  should look like.
[03:34:41] Yeah.
[03:34:42] where I'm heading. And it's perfectly fine if you're not on the app side, you're on the side. I think that split, like the Astro versus, or HTMX versus this split will continue to exist.
[03:34:55] it's for a while it's just interesting if
[03:35:01] To me, it's very interesting if I can create an architecture like RSCs feels like a single app, has that kind of mechanism, and you don't pay...
[03:35:11] anything, like, except for complexity of the fact that these systems are in place. Um,
[03:35:17] you don't pay
[03:35:19] any real cost.
[03:35:21] for that from like a
[03:35:23] end-user perspective. Like, yes, there's complexity of having all these subsystems, you know, like these pieces fit together, but
[03:35:30] The JavaScript is small.
[03:35:31] The pages load fast.
[03:35:33] The performance is great.
[03:35:35] you know,
[03:35:38] Because like,
[03:35:41] Thank you.
[03:35:42] I mean, it's an interesting question, right?
[03:35:46] Ultimately,
[03:35:48] We bury the choice, you know, we're not writing the code anymore.
[03:35:54] I-I-I-
[03:35:55] Choices will still exist, but the choice matrix will probably be a lot smaller.
[03:36:04] I think 10-stacks for RC is going to reload, though I must admit I haven't heard many people using it.  Well, that's a thing.
[03:36:08] that
[03:36:10] I wasn't sure if it's a miss from the perspective.  When I even came up with the design, I'm like, is this going to click with people?
[03:36:18] I think
[03:36:20] Most of those people wouldn't have wanted RCs in the first place anyways.
[03:36:25] Maybe it's still not accessible enough.
[03:36:33] Yeah, RCs and Daystar are super different.  I agree.  Exactly.  Because...
[03:36:38] Uh,
[03:36:40] - The...
[03:36:41] But the Next.js implementation,
[03:36:45] did put people more in an like HTMX side of things when they're thinking,  because they were just like, like it was really in their face.  Like this is server, this is client.
[03:36:55] I'm making a server app that has client side stuff on it. That aspect
[03:36:59] Um,
[03:37:01] is
[03:37:02] like at a thousand feet or whatever, kind of similar.
[03:37:05] the difference is rcs were actually designed like from an architectural standpoint  to basically be a single app thing their whole
[03:37:12] reason for existence is persisting client side state.
[03:37:19] Thank you.
[03:37:21] Thank you.
[03:37:25] Thank you.
[03:37:29] Jake from Notion sees the need for async signals in React.  React is not going to have signals because signals aren't their model.
[03:37:36] you know async react is not very different from what i'm talking about it's just less granular i feel like we just have like a
[03:37:42] cleaner implementation and a cleaner API, you know, just
[03:37:45] but philosophically completely aligned.  People aren't...
[03:37:55] It ultimately becomes like an are you need it problem. I'm glad at least this is like kind of where conversation is at least where I'm sitting.
[03:38:05] The best part about AI
[03:38:08] is people stop posting
[03:38:10] those stupid like
[03:38:13] Look at how
[03:38:14] you write this in view versus react or, you know, like that smelt meme where they like, they showed like the, like, let count equals zero, you know, and like, you know, those memes are never going to happen anymore.
[03:38:28] And for me, that was the most BS part of the front end anyways.  So like.
[03:38:33] It's a win, you know.
[03:38:35] .
[03:38:36] I got a few other things. Let me pull up X now. I don't think I have very much more on the mechanical
[03:38:46] side of this unless you guys have something specific you want to
[03:38:50] You want to talk about...
[03:38:52] You miss CSS versus Tailwind.  Yeah.  I'm just saying like things that are,
[03:38:55] based on like
[03:38:59] Um...
[03:39:02] How should I put it?
[03:39:05] these kind of like superficial things are becoming less important.  That being said,
[03:39:10] There is value in some of the...
[03:39:14] work on the superficial sides like
[03:39:15] If...
[03:39:17] if making things easier for humans makes it easier for a computer, then there's that's actually a  very hot area of research. I'm just glad that the average developer is not getting sucked into that.  To be fair, the average developer is not getting sucked into any of the conversations we're having  around frameworks. There's enough people
[03:39:33] out there that are of the opinion that
[03:39:37] JS frameworks are over. In fact, which ties me into what I want to do next. Let's watch a video from Kent C. Dodds.
[03:39:44] Does that sound like fun?
[03:39:46] Yeah, let's do this. I'm going to stop sharing my screen and we're going to we're going to talk about we're going to talk that I'm not.
[03:39:56] Thank you.
[03:39:57] Let's share.
[03:40:01] Thank you.
[03:40:01] Thank you.
[03:40:02] God, they changed all the...
[03:40:05] all my icons on it.
[03:40:07] Here, okay, share screen.
[03:40:10] Chrome tab.
[03:40:12] Let's do this.
[03:40:15] Thank you.
[03:40:16] Hopefully it's going to share audio too.
[03:40:20] is the question that Dax asked. Why did nobody dethrone Reac?
[03:40:24] Can you all hear that?
[03:40:29] Did the audio come through?
[03:40:31] Try it one more time.
[03:40:34] Why did nobody dethrone react?
[03:40:39] I'm relying on you, Chap, to tell me if you can hear that.
[03:40:43] Okay, perfect.
[03:40:45] Okay, cool.
[03:40:49] I like...
[03:40:50] this take, and I like this conversation because
[03:40:56] People who see this and respond to this respond to the wrong thing.
[03:41:00] A lot of them...
[03:41:01] think that he's making the same take as Theo.
[03:41:03] which is React as the last framework.
[03:41:06] His
[03:41:07] take is actually less controversial and a little bit more, uh,
[03:41:15] Thank you.
[03:41:15] Yeah, it's less controversial than it looks like. And it's a little bit patting on the back.
[03:41:21] Because I have to admit, when he first said this, I said BS. And
[03:41:25] I'm not sure it's BS anymore.  So let's listen to what he says.  That is the question that Dax asked on X.  And I've got my own take on that.  And this is Better With Kent, where you learn durable skills.  I've got some durable skills that you can learn from the history of React.  Like what happened?  Why did nobody actually manage to dethrone React?  And is it possible that that could still happen?  And then does it matter?  So here's what Dax said.
[03:41:55] react it's completely misunderstood and it what it's why every prediction you see by programmers  tends to be wrong and once you get it you can apply this understanding to nearly everything you do  oh that is true and i i want
[03:42:10] I have to admit that it's the very first post I saw when I got back from break and I actually responded to it.
[03:42:16] which I can probably put
[03:42:18] fit later.
[03:42:19] Um, but
[03:42:23] I...
[03:42:24] I think the general takeaway when you see that is people focus too much on the technical.
[03:42:31] piece, right? I'm going to let Ken  give his explanation.
[03:42:35] But
[03:42:36] And as engineers were always thinking like,  this is faster than this and that.
[03:42:42] Even the ecosystem argument  is a little bit more nuanced than that.  So anyways, let's let the kid go.  Once I explain exactly what happened here,  then you'll be able to apply this  to everything you do as well.  Really great take Dex.  So here, first I want to just say,  I feel really vindicated by this post  because way back in 2020,  I was telling people,  and even beyond that,  this was just the earliest I could find on X,  but I...
[03:43:06] was telling people that React is the last UI library anyone needs to learn.  And the reason that I believed that was because computers will take care of creating apps for us,  which is kind of an interesting take in 2020 before ChatGPT came out.  But I think back then, many of us could see that AI was slowly getting more and more capable,  and it was only a matter of time before AI could start actually creating programs and stuff.
[03:43:34] Yeah, to be fair, I don't...
[03:43:37] I'm sure Dax is referring to one very specific thing.
[03:43:42] Um...
[03:43:45] And I'm not sure it's the same thing that Kent's referring to. I actually think Dax's post is actually probably a little bit more brutal than Kent's take.
[03:43:53] But.
[03:43:58] Thank you.
[03:43:59] Thank you.
[03:44:04] Thank you.
[03:44:09] Thank you.
[03:44:11] So let's see here. - For us.  And so it kind of took a different shape  than I expected it to, of course,  but I think that most of us could see the writing on the wall  that like, yeah, AI is gonna get really good  at writing software, and here we are.
[03:44:25] So why did I say that React is the last UI library you need to learn?  Well, it's because it doesn't matter now which framework you use.  As long as it's got like a bar of functionality, it really doesn't make a difference.  For myself, I'm actually using React.
[03:44:41] I actually this
[03:44:43] Point.
[03:44:45] At least the way it's starting, I'd actually disagree with. I think it does matter what framework you use.
[03:44:51] Um, but let's continue.  Remix primarily for most of the active stuff that I'm working on.  And the agent is really good at remix with the right documentation and the right.  See, but then you put it there.
[03:45:03] He's saying it doesn't matter
[03:45:07] Because the agent like can write it like saying like any framework is very writable by AI.  That's what he means by it doesn't matter, which is different than like when someone tells me that doesn't matter what framework you use.  I scoff them.  I mean, like you pull out the performance benchmarks, pull out the real data.  Like there obviously there's always examples of bad apps and everything.  But like.
[03:45:31] Mm-hmm.
[03:45:32] and you can make good apps with React as well.  But like...
[03:45:37] *sniff*
[03:45:39] There is...
[03:45:40] There is a difference.
[03:45:42] when there's like significant...
[03:45:48] like user facing impact.
[03:45:54] can't just happy react when it's usually three.  Yeah, which automatically already kind of tells you that,
[03:45:59] His idea of last, like, this is not like the Theo take.
[03:46:09] Thank you.
[03:46:10] Skills so it doesn't even need to be in the training data for the model to be good at writing code for it  I'm having a really excellent time with remix  I've had exactly zero issues with the model mixing up remix with react and remix is like almost just like react in a lot of ways  but it like there's no hooks that there's a different like setup closure and a whole like a lot of things that are very different about
[03:46:40] Remix to be able to use Remix.
[03:46:43] That's an interesting thing.
[03:46:46] Yes.
[03:46:48] But like anything, should you learn Remix to use Remix?
[03:46:53] Probably, because at a certain point,
[03:46:56] Like this is assuming that you never need to optimize it.  Like even if you're not writing the code, you might still need to like guide AI to be like, you know, this section of the page is kind of slow.  You can be like, AI wise is slow.
[03:47:07] And it might be like, oh,
[03:47:09] does it looks and it figures it out.
[03:47:11] But.
[03:47:13] Okay, let's continue.  And so what I said all the way back in 2020 and before was definitely has already come to pass.  You do not need to learn anything else.  And that is why we can say that React was the last library you needed to learn.
[03:47:28] Sorry, I'm just realizing I've been seeing these one-sided conversations
[03:47:32] It's because
[03:47:34] I'm not sure my Twitch. I'm not seeing. Yeah, I'm not seeing
[03:47:38] Comments from Twitch maybe not coming through.
[03:47:42] in StreamYard here,
[03:47:49] It's true for Rust as well. I mean, that's why I did my...
[03:47:52] To be fair, I don't know Rust and I ported something to Rust, so I guess that's fair.
[03:47:58] Thank you.
[03:47:58] Yeah.
[03:48:00] So, okay.
[03:48:02] Thank you.
[03:48:05] But actually, I think that's the sharp point here. Why did I choose Rust?
[03:48:11] Thank you.
[03:48:12] Why didn't I just leave it in JavaScript?
[03:48:15] Let's get back to Dax's original question of like studying why React was so successful. Here's my take. The success of React was functional at first, then social and emotional once it hit mass adoption. That's why...  I mean, isn't that true of everything?
[03:48:33] It was functional at first.
[03:48:35] because it showed people a way that actually made a lot of sense.
[03:48:40] But then once it's in,
[03:48:43] And he's...
[03:48:45] any like leading solution will have that kind of characteristic right because people don't
[03:48:50] want to drop, people identify with it, you know.
[03:48:55] That's why it won and was never exceeded all the way to the point where you know, it doesn't matter anymore. I mean,
[03:49:01] People never...
[03:49:04] Some people said that the new frameworks never did enough.
[03:49:09] That's fair. People stop caring. That was actually one of my arguments that we get to.
[03:49:17] This doesn't actually...  This is just...
[03:49:20] common
[03:49:21] This doesn't really explain why.  It just means it was successful enough
[03:49:26] to be that early mover in the market that no one else ever caught up.  And for some reason,
[03:49:32] And I...
[03:49:33] I think this is a more interesting question.
[03:49:35] why didn't people want better solutions?  Why didn't they invest in it?  Cause like,  obviously if you don't invest in it,  it's not going to get better.  Like,
[03:49:43] I understand that if you like one person's building something, it's not going to compete with the team at Facebook.  But...
[03:49:50] You do have to ask the question is,
[03:49:56] Is it true that things didn't get better? I disagree with that.
[03:49:59] So,
[03:50:00] It.
[03:50:02] Yeah, let's keep going. - I did one and was never unseated, all the way to the point where now your choice of framework doesn't materially matter anymore.
[03:50:10] Now, some people came back at me.
[03:50:12] your choice of framework doesn't materially matter anymore.
[03:50:15] Uh...
[03:50:17] that... yeah.
[03:50:20] See, that phrasing is way too strong. It doesn't matter in the sense of what you can write, but it matters in the case of what you get. Like, I think what you hear, my current take, at least on the team-based projects, is to pick a framework that makes the correct intended way the easiest way and no way that's going to be React.
[03:50:35] I think support system for React is why it's still there.  Compare that to jQuery or Angular that don't have that.
[03:50:42] What do you mean support system? Angular hasn't
[03:50:46] I thought Angular has an incredible support system.
[03:50:49] You know, they have the whole GDE program and they have like Google backing.
[03:50:54] Be a little bit clearer what you mean by that.  I'm not actually...
[03:50:58] like in terms of community being organized in terms of like,
[03:51:08] Thank you.
[03:51:10] like in terms of like communities like actively like like
[03:51:15] I actually think Angular might be one of the best...
[03:51:19] communities out there in terms of like actually like
[03:51:23] creating a community of people that are like,
[03:51:26] helpful and designed to actually push it through.
[03:51:29] I mean, don't get me wrong.  I love React, but React...
[03:51:32] community reminds me of like when I used to play in punk rock bands and I'd go and we'd, you know, everybody was hipsters and they all talked about the latest band and like, like,
[03:51:41] React community...
[03:51:43] very reminiscent of
[03:51:46] of playing in the scene. Angular
[03:51:50] was like, wow, this is an organized structure where people care and they teach and it's like,
[03:51:57] People don't realize because of, I guess, certain popularity, especially in the U.S.,
[03:52:00] But the Angular community is full of Kent C. Dodds.
[03:52:04] Like...
[03:52:05] Maybe not quite Kent, but like...
[03:52:09] It's like
[03:52:10] There's, yeah.
[03:52:12] Thank you.
[03:52:15] The social aspect of argument is that everybody wants to be cool and be hipsters. Yeah, I mean...
[03:52:21] Thank you.
[03:52:22] Thank you.
[03:52:24] No one cares about Angular, yeah.
[03:52:27] Thank you.
[03:52:28] And it's not because of some kind of marketing.  It's just...
[03:52:30] Angular
[03:52:31] Wasn't cool.
[03:52:34] Angular was never cool.
[03:52:38] React was cool. They did the freaking mic drops, you know what I mean?
[03:52:42] I mean, as far as nerdy web development can be.
[03:52:47] and attracted people that
[03:52:50] So like why that was the case, I don't know.
[03:52:53] could have come down to the early core team the way they did the way they like established the community
[03:52:59] But...
[03:52:59] Thank you.
[03:53:00] react.
[03:53:03] has that attitude where as I said, Angular is like the polar opposite
[03:53:08] And view is, as usual, somewhere in the middle.
[03:53:13] Thank you.
[03:53:15] with this and they were like, well, it was kind of useful that it was Facebook that came out with  this. And yes, that does have some material benefit because it lended credibility so that  it was worth people's attention, but that's not actually necessary. And in fact, even became a  deterrent after a little while. So what is the true success story of React? Why was React so
[03:53:45] So yeah, of course, like Facebook comes out with it.  Okay, I'm going to give it my attention,  but you're not going to hang on to my attention  if it isn't functionally better than what I already have.  And not just like marginally better, but significantly better.  For myself, I was using Backbone.js and Angular.js  before I showed up to the React scene.  And when I looked at React, I saw a couple of things  that were really unique about React  that made it materially better than what I was using before.  With Backbone, it was really difficult to make sure
[03:54:15] were in sync and I had to do a lot of manual stuff for that. With React, I had a simple state mechanism  and anytime I changed state it just re-rendered everything making it a lot easier for me to manage  and think about state of data. Just as a side, I think
[03:54:33] I agree completely with him in terms of what he's talking about in terms of this jump.
[03:54:37] I think the jump from React to the next thing, the gap is actually larger than the gap that he's showing here.
[03:54:44] I know not everyone agrees, but I think his second or third layering reasons are probably going to be more indicative of why people didn't move on from React.  Because...
[03:54:54] the things that made people get onto React in the first place, the gap,
[03:54:58] the
[03:54:59] But React, they trusted it without having any use.  Like all the things that people use against other frameworks now as anything was not
[03:55:07] was not any more true of React when people moved to it.  You could almost view it as hypocritical,
[03:55:13] I'm not because the situation has changed, which means that like, but if you hold the adoption of new frameworks against the adoption of React on the same ground,
[03:55:24] Then the people who...
[03:55:25] who accepted React back then and don't accept other frameworks now are complete hypocrites.
[03:55:32] But, as I said, things have changed, so that's not the case, but on like pure face value.  ...changes over time, which is what state is. And so being able to manage that really easily in the UI  was a huge functional benefit for React. The other thing that was really nice about React is composition.  It was the first framework that really gave us the tools to be able to say, "Okay, here is a component  that is reusable in many different places and composes really nicely with the other components."  And so you can have kind of a black box here
[03:56:02] with minimal leaky abstractions. And then finally, the ability of React to just slip into an existing project was really powerful.
[03:56:13] The funny thing is React's ability to slip into existing projects
[03:56:18] is true of any UI framework of that time period.
[03:56:22] But it's no longer true
[03:56:24] because
[03:56:26] Frameworks like React don't make it easy for other frameworks to slip into them.
[03:56:30] Does that make sense? As easy.
[03:56:33] as well. So the web is a unique place where people from all backgrounds and experience levels and everything, they have to have some web presence. And so you've got people who are doing Python and Ruby and Java and eventually Node.js and JavaScript's a full stack. And
[03:56:50] all of this, or PHP, everybody converged in the web,  and like having to build some sort of front-end UI.  And we're all going to have a different way that we want to do that.  And so React's laser focus on just the UI was also a huge benefit as well,  to be like, okay, you can use whatever libraries or write your own things  for all the other pieces, we're just going to focus on the rendering.
[03:57:15] To be fair, React was not the only library like that. Knockout.
[03:57:18] was like that as well, just gonna throw out there.
[03:57:23] portion of that and that was really significant in its ability to acquire adoption.
[03:57:29] But yeah, like...
[03:57:31] Angular was more ambitious.
[03:57:35] um
[03:57:36] Ember was more ambitious.
[03:57:39] Thank you.
[03:57:41] But yeah.
[03:57:43] So the success was functional at first. That's all that really mattered. Okay, like we're going to give them credibility because they are coming out of a credible company. And so, okay, I'll pay attention. And actually, if you look back at like the video and the comments on there, people hated react at first. But it gave them attention because it came out of Facebook. And then anybody who just gave it five minutes realized, Oh, no, this is actually really, really great.
[03:58:08] and because of that functional piece.
[03:58:10] I agree.
[03:58:13] I saw React and I saw what was missing.
[03:58:17] in almost every framer i used i also saw reactants like this is an abomination
[03:58:22] It's like you threw out the baby with the bathwater.  You could have just taken like the one piece,  applied it to something like Knockout,
[03:58:28] and then like be in a way better place. But
[03:58:32] I did immediately see that there was like
[03:58:35] they had changed
[03:58:37] the game. You could tell that
[03:58:40] This was the piece I'd been circling around for almost a year at that point, where I was playing around and trying to figure out how to split my view models. Do they go with the view? How do I make them reusable? How do I make the dry? Do they go with the models? And I was having these structural issues and we were actually just like, look, there's one clear answer.
[03:59:02] Client state married to the view.
[03:59:05] data outside.
[03:59:08] Done.
[03:59:10] That's the unit. And like when you could take that, I had a similar epiphany when I saw hooks too.
[03:59:15] It was like, it was, I was like working with signals and I was like, how do I make sure that people don't cause fricking chaos? Like that they don't go crazy. How do I keep.
[03:59:25] things in line and don't cause like
[03:59:28] things to blow up? How do I keep things structured like the way React does?  I saw hooks API, saw the tuples, and I was like, man, why can't I come up with this stuff myself?
[03:59:38] The ironic thing is in both of those cases,
[03:59:41] their solution worked better for what I was working on than it worked for themselves.
[03:59:45] Which is the irony of it. Now, that is not enough because somebody could come later and come out with something that is more functional, has better performance or has better other aspects that make it easier to write the code.
[03:59:59] Yes.
[04:00:00] And you can argue that Svelte and Vue and Solid and a variety of others...
[04:00:05] In fact, all of them.  Now, Remix, you could argue that each...
[04:00:09] I paused at the right moment.
[04:00:10] One of these has aspects that are better than React on a functional level,  but that's not why React has been able to stay on the top.  The reason that React stays on top
[04:00:22] is because of the social and emotional aspects. Now once React hits that critical mass, now everybody's just using React.
[04:00:33] My personal why for React was winning as component-type version that allowed you to scale terrible devs by not allowing them to step on each other's toes as much as other framers.
[04:00:40] Yes.
[04:00:41] I mean, that was the key.
[04:00:44] to it. The problem is that the fact of them not stepping on toes was only conceptually
[04:00:49] they don't they don't step on toes from the perspective of like
[04:00:54] commits and pushing things up.
[04:00:56] You know what I mean?
[04:00:57] they can work in their own lane, build their own features, and be completely independent. The problem is these graphs, because they're all part of the same React graph, aren't independent. So what does happen over time?
[04:01:11] is those other teams or other people that you weren't thinking you had to worry about start causing your app to re-render or your section to re-render.
[04:01:21] and you didn't.
[04:01:21] realize it.
[04:01:22] Like things are just as linked through as any other kind of graph.  It's just like...
[04:01:27] It's just...
[04:01:29] because the model is simple enough,  no one was paying attention to that.  You could get really far...
[04:01:35] without actually realizing that the
[04:01:38] that things weren't actually that decoupled. I actually talked about this a little bit in my
[04:01:45] Let's see if I can find the article.
[04:01:49] God, it's been so long.
[04:01:51] When did I even sign up? Was I Google on this one?
[04:01:55] All right, yeah, that was right.
[04:01:57] uh
[04:01:58] One of my older articles where it's like signals, signals, um...
[04:02:09] local
[04:02:12] thinking locally with signals.  I do a whole thing explaining why React's model  of component separation isolation makes sense  and why it makes it actually truly composable.  But in the conclusion of this article,
[04:02:25] I mentioned that the things aren't actually that isolated, and that's why people are hitting the trap because
[04:02:30] Um,
[04:02:32] essentially React couples the UI with the data. So even if you, if people could be working on  different data and have data isolation, they actually end up because of this, the shape of the UI end up
[04:02:42] potentially, I mean, it can work both ways, right? But they can, they can actually impact each other, just because the render cycle just
[04:02:50] bundles everything together.
[04:02:59] It's kind of like cooperative multitasking. Sure one of them is more optimal but the other allows Microsoft to ship terrible software.
[04:03:06] I feel like your take is closer to what Dax meant.
[04:03:13] Because it's like,
[04:03:15] Thank you.
[04:03:16] like
[04:03:18] Mm.
[04:03:19] Velocity was the goal and
[04:03:24] yeah
[04:03:31] React compiler, yeah, we'll deal with it.
[04:03:36] I think compilers should always like compilers are last stage optimization. It's the easiest one to learn to get a job. It's the easiest one to hire for because everybody knows it. It's the easiest one to find a library for because everybody's building for it. And also because it is so focused, it adapts really well to however you're building your existing application. But everybody is using it. So everybody uses it. And I mean,
[04:04:04] This is always a hard thing because everybody's using it,  so everybody's using it is kind of like...
[04:04:09] the
[04:04:10] argument like
[04:04:12] That's why anything stays on top.
[04:04:16] um
[04:04:20] But yes, it's a chicken and the egg problem.  That is the social and emotional pieces. Like, I don't want to get fired for choosing the wrong framework.
[04:04:29] And the irony of it is,
[04:04:32] At the time that they chose React, it was probably less tested
[04:04:36] than some other frameworks that they say no to.
[04:04:38] you know, later.
[04:04:39] And so I'm just going to choose React and nobody will blame me if things don't go well because we'll...  Yeah, exactly. No one got fired for choosing IBM.
[04:04:51] Well, everybody's using React. It's the same sort of concept as like, nobody got fired for choosing IBM, right? So things
[04:04:58] Thank you.
[04:04:58] Exactly. The funny thing about the irony of that is,
[04:05:02] We know from history that that was like saying no one got fired for using IBM was one of the stupidest
[04:05:08] things like in because of the personal computer
[04:05:11] revolution. It was like
[04:05:14] It's almost like ironic.
[04:05:17] because of how it ended up
[04:05:19] almost flipping where it's like,
[04:05:22] You should have been fired for choosing IBM.
[04:05:25] do change over time and so the question is well okay eventually another framework could develop  some sort of critical mass and and now it becomes a lot easier to choose something else but the  reason that that didn't happen is because now it actually doesn't really matter it like whether  my agent decides to use react or view or svelte or solid or remix it actually doesn't make a huge  material difference yeah he keeps on saying that but i actually disagree i think i think this is where
[04:05:54] falls apart because he's suggesting that they're all equivalent.
[04:05:58] And
[04:06:01] At first I thought it was just because you could choose any and you can just build it, but the way he keeps on phrasing it makes me think that he's actually suggesting that when your agent builds something in React, you're going to end up with something as good as some other framework.  You might right now, if the agents are better at writing React.
[04:06:17] But that's not what he's saying. He's saying it's good at writing remix. So...
[04:06:21] because each one of those frameworks is capable of doing what the other frameworks are doing.
[04:06:29] Mmm, no. For like most intents and purposes. I know-
[04:06:34] In the comments, you're going to be like, well, what about RSC? And like, I hate RSC, like whatever.  Feel free to have those discussions amongst yourselves. Be very nice to each other.  But I think that it's not.  I think this is the kind of basis. This is kind of like the, there's probably a term for this, something bias.  This is kind of like the React developers have been holding this because at the same time, when you are on the most popular solution, you're going to assume that nothing is as good as what you're using.
[04:07:04] just because it's in your interest to stay on that solution,  like that social aspect he was talking about.  So it's easy to kind of like be like, oh, yeah, you know,  they're all basically the same thing.
[04:07:15] But...
[04:07:16] Thank you.
[04:07:17] Yeah, not really...
[04:07:21] Like at the farthest step away level, sure, but in reality, no.
[04:07:27] really material ultimately for the vast majority of applications and this is why I say it's the  last framework you need to learn because you don't need to learn any other framework in the future  because the agent is going to do that. Now some of you are saying wait Kent you got to still read the  code you got to understand what it's doing and yes I agree that you need to understand the system  in which your software is operating in and what your agent is doing. Yeah you need to understand
[04:07:57] when and where to use use state,  that is not what we need to be doing anymore.  We are systems designers, we are product engineers  thinking about the primitives that are available  for our agents to use to solve.
[04:08:09] Exactly. The primitives that are available to use are actually incredibly important.  ...of our users' problems and the specifics of how you manage state and all of that stuff, that's gone out the window.  I disagree.
[04:08:23] Hey.
[04:08:24] *sniff*
[04:08:26] Almost all complexity comes from the mismanagement
[04:08:30] of state or hierarchy, like all architecture stuff.
[04:08:33] Async is actually a prime source of this, where hidden waterfalls,
[04:08:43] Because of my sharing mode, I can't show it up. Remember that diagram earlier where I showed jQuery? You had UI and arrows jamming into it everywhere. You could be like, "Wow, this is a mess." But if you notice, when I went to the React picture,
[04:08:58] I just...
[04:08:59] The bottom UI part is nice and neat, but state is a bunch of arrows jamming into each other.
[04:09:06] That's still a problem.
[04:09:08] We literally spent a whole stream explaining why this is still a problem.
[04:09:16] Anyway.
[04:09:17] Now, our agents are doing that.  And so I am using Remix primarily,  but I don't really know Remix very well.
[04:09:25] And it's an interesting question. Why is he using Remix? Well, you could just say it's because his friends
[04:09:31] Build Remix.
[04:09:32] But...
[04:09:34] What?
[04:09:37] You see, on one hand, you could say it doesn't matter because they're all about the same.
[04:09:42] But if they're all about the same,
[04:09:45] Like, this is an interesting double-edged. Let's continue.  I know a couple of things, but I've never taken time to sit down and really learn Remix, because I don't need to. I just provide the documentation.
[04:09:57] to my agent and it does a really really good job with that now if you're building a framework  then that's great and you're going to need to spend a lot of time thinking about the apis and  everything but your consumer your user is the agent in this case now let's bring it back to  dax here so he said it's um completely misunderstood i agree i think some of you are going to have a  different understanding i should say misunderstanding of how and why react was so successful but let's
[04:10:27] in nearly everything you do.
[04:10:29] Interesting thing about functional, social.  Well, there's a book on this.  You guys ever heard of it?
[04:10:36] called Crossing the Chasm.  It's like...
[04:10:39] I actually read this because people were trying to help me like figure out how to
[04:10:44] how to get from the front crossing the gap to get to where react is.  Right.
[04:10:50] They're like, you know, from a business standpoint, how would you approach solid as a business if you wanted to take out React? And the problem I had at the time was.
[04:10:59] Um,
[04:11:00] It's open source, so there's no money angle.
[04:11:05] Uh, so like
[04:11:06] And the...
[04:11:07] you're like show something that you're specifically better at react at.  And it's like,
[04:11:13] and then market that specific thing.
[04:11:16] And it's like if you try and play it out as a niche player,
[04:11:20] That's probably the most successful way to get across the gap.
[04:11:23] But it's really hard
[04:11:24] when you know that your actual selling point is being
[04:11:28] general. I mean, the problem is
[04:11:30] And this is the part you can apply here is,
[04:11:32] It doesn't pay to be...
[04:11:34] better than
[04:11:36] the most popular solution at everything.
[04:11:38] Like, people always talk about, "Oh, you've got to be 10x better and I made this whole thing up."
[04:11:41] It's not...
[04:11:44] I think you can be 10x better.
[04:11:47] and still not
[04:11:49] and be better in every single vertical you can think of and still not make a dent.
[04:11:54] If...
[04:11:56] If like,
[04:11:58] Yeah.
[04:12:01] Like if people like if it isn't in a realm that people are actually measuring or that they like that, like, like as Kent was saying, like, according to Kent, it doesn't matter what you choose.
[04:12:12] The funny thing is that like, if you go to large companies, talk to like eBay or people doing e-commerce, this stuff matters. Shopify, this stuff matters.
[04:12:18] But...
[04:12:20] If you're talking the public opinion of the random people on Twitter and like we already talked about the social, you know, the cool hipster thing.
[04:12:27] Maybe it doesn't matter.
[04:12:28] Let's keep going.  And emotional aspects of the success of React.  That's job-
[04:12:34] So in a sense...
[04:12:36] This is true of any sort of technical venture.
[04:12:41] not specific to React.
[04:12:43] And I made a video about that a while back.  So you go take a look at a jobs theory video that I made.  But the basic idea is that people will evaluate different products like they are hiring different  employees to accomplish a specific job that they want that product to do.  And so you hire it based off of its functional, its social and emotional needs that it satisfies.  And so, like I said, at first it was all functional.
[04:13:13] basic same level of functionality. And so now you have to differentiate yourself on the social and  emotional.
[04:13:20] Yeah, see you.
[04:13:22] this is just like first person there lead.  The truth of the matter is,
[04:13:28] Things exceeded React and functionality.
[04:13:31] But they were already playing against these other points.
[04:13:35] needs as well and that is where React won because it was just so ubiquitous.
[04:13:41] yeah by the time anyone else could get it its ecosystem was massive and all of that  and much to the chagrin of the competing frameworks it was just that was the fact and it was very very  difficult to beat those network externalities very so applying this to whatever product you're building
[04:13:58] I think you should just learn jobs theory and apply that and figure out, okay, what's the job  statement that I'm going to use as my North Star for guiding this feature in my product or this  entire product or like this internal tool that I'm trying to get adoption inside of my company for.  Whatever it is, it's jobs theory. That's why React was so successful and why React was never  unseated. If you disagree with me, throw that in the comments. No, I mean, and that's where the
[04:14:28] I, yeah, I don't, I don't, I don't disagree with Kent from that perspective.
[04:14:34] Um...
[04:14:35] I'm actually going to switch the way I'm sharing my screen because we don't need audio anymore. One sec.
[04:14:39] Uh-huh.
[04:14:46] Thank you.
[04:14:53] What I actually respond to this one, I said, is I like this angle because it's both completely  great and also talks on an axis of meaningless to me.  And the reason, I don't mean it's completely meaningless, I definitely think about these  things.  It's just like...
[04:15:06] When I built solid,
[04:15:07] It wasn't because I was looking for adoption. You got as someone who's like a single developer,
[04:15:12] who literally was just working for some company, just building a thing on the side, not working for a big company, not seeing like a pathway to being mass adopted, not seeing any of that kind of stuff.
[04:15:23] Not even really having...
[04:15:26] a wide, like Rich was working for the newspapers and he saw like a real need for
[04:15:31] Um,
[04:15:32] you know, where he was like, look, we have designers coming.  We're always building these quick projects with the layup.  We put them out.  We need something that kind of fits our pacing.  Like Rich had a real reason.
[04:15:42] My reason...
[04:15:44] I was kind of
[04:15:45] was that I just...
[04:15:48] It's so funny people are thinking but
[04:15:51] I saw
[04:15:53] some solutions like Knockout and some like the early solutions.  I saw React. I saw it React solved.
[04:15:59] And then as an engineer, as someone technical,
[04:16:02] This is not how you get adoption. As I said, adoption is the farthest thing in my mind.  I was like, this is not the best technical solution. And it never can be.
[04:16:09] It's just fundamentally
[04:16:11] Limited.
[04:16:12] And from that perspective,
[04:16:14] I just was like, okay, so how do you actually build something
[04:16:17] that
[04:16:18] Harry's these consequences, but is actually...
[04:16:23] does the job, right?
[04:16:25] And
[04:16:26] I've approached everything I've done with SolidSense like that.
[04:16:29] It's been...
[04:16:30] a quest or a journey to find the best way to do something.
[04:16:34] It was never about, oh...
[04:16:37] how many people are going to use this, right?  And that's the difference.  A lot of times when people make products,  they're selling something, right?
[04:16:43] They're like, I need to get market fit and then I'm going to get this and I'm going to get users and that.
[04:16:49] I for me, the criteria was very, very easy.
[04:16:52] I...
[04:16:53] I needed to have empirically good results. I needed both
[04:16:59] to have good performance from benchmarks from
[04:17:02] from like real use cases.  And I needed to thread the needle where stuff was sane enough to reason about.
[04:17:12] So like,
[04:17:15] A lot of the time when I see this kind of discussion, you know,
[04:17:19] Like from my perspective, these things will never be equivalent because there's so many different aspects.  I'm way too deep.
[04:17:26] Um,
[04:17:28] So when I look at something like AI's impact here,
[04:17:30] You--
[04:17:31] I come to slightly different conclusions even, and I hear those conclusions even when I hear Kent talking. I love that comment.
[04:17:42] Thank you.
[04:17:44] Richard, in the way he presented it.
[04:17:47] You just got nerd sniped. Yeah, probably.
[04:17:50] Yeah.
[04:17:52] Because that comment about...
[04:17:55] About, you know, where is it early in the chat?  It's like he talks about react, you know, winning and then he uses remix.  Right.  And he mentioned it like multiple times in the video.
[04:18:06] It's.
[04:18:08] Thank you.
[04:18:09] It...
[04:18:10] It's actually...
[04:18:12] suggests something else, right?
[04:18:15] Thank you.
[04:18:17] And I kept on thinking about
[04:18:20] I was talking to Dominic Gannon the other day.
[04:18:22] And we were talking about he just started working, I think, at OpenAI.
[04:18:27] And I was like, and we talked about the way coding changes and the way we write with frameworks change it. And I said, I feel like I'm writing assembly code anymore. Or I'm, I write assembly code now. That's what I said to him. And I was, but when I, when I said that, I don't mean that I'm writing assembly code when I'm making solid. I mean that like what I'm building, like when I'm building solid, I'm actually like,
[04:18:47] designing an assembly language. Like I'm designing a lower level language that people aren't
[04:18:53] necessarily going to use directly.
[04:18:56] But
[04:18:57] the decisions I make are
[04:18:58] incredibly important in terms of the efficiency of what the final output is.
[04:19:03] And it's funny because then I saw this from Kent and the rest of the piece of the comparison. I was like,
[04:19:09] Little history.
[04:19:10] There was lots of different chipsets coming out of the 1970s into the 80s, the rise of the personal computers. Everyone had their own... There's all these little boxes. I don't know if all of them...
[04:19:27] so much in the different architectures.  Like, I don't know if like those old, like, I think AT&T had some.  And like, I don't know if all of them were different or they designed their own chips  or if they all just use x86, but there was more than just x86 in the day.  And anyone knows Mac had like their Power Macs, which also had their own chipsets.  Basically at the early days of computers, it wasn't just, you know, like,
[04:19:51] which manufacturer you had you actually had different chips competing obviously as we know from history
[04:19:57] Intel and the x86 architecture one. But there's a big discussion over small Little Indian versus
[04:20:04] Um...
[04:20:05] big ending, which is like which side of the bit, like,
[04:20:08] Which side was like the...
[04:20:11] the big bit versus the low bit, like which one was the, like,
[04:20:14] when you laid out the bits, which side was like the most significant versus not. And like whole difference in like,
[04:20:22] So
[04:20:22] Like these things were kind of like still getting figured out.
[04:20:26] So when you look at CPU wars,
[04:20:28] There's like like there was a time where this was actually a battle that was being fought.
[04:20:34] And then eventually, you know, especially when Apple pulled out of the game in like around 2006 or whatever, they...
[04:20:43] They ended up adopting Intel.
[04:20:45] I mean, Intel at that point had just made them sweet, like such a good move.  What they'd done is they'd taken their mobile chip architecture and actually replaced their old hardware.
[04:20:57] Pentium architecture, still x86, but essentially they downshifted it and they realized that they could take their laptop architecture and apply it to desktop and then
[04:21:09] This change.
[04:21:11] you know, we weren't getting mores effects anymore, you know, where things are getting two times faster, but it was better for heat. It was better for parallelization. They're getting put where they couldn't put any more cores on the CPUs because they're like freaking melting Pentium.
[04:21:24] four generation CPUs had the craziest, like they could handle the heat, but they had the craziest heat threshold.  If you look at CPUs now, nothing gets even close to that hot anymore. They actually had the build around that constraint.  The heat, the problem obviously is you can't shrink the silicon much further.
[04:21:41] because it just stops functioning.
[04:21:46] under those conditions. So they actually had like the game and change. They pushed the max in terms of cooling and all this stuff. And they actually had to change the way that they actually built the chips and laid them out so that they could actually continue to make progress.
[04:22:03] Um,
[04:22:04] Part of it was multi-core, but more of it even was just they had to deal with the way that they handled heat.
[04:22:11] So they can continue to shrink this little cloud.
[04:22:14] Right.
[04:22:20] Thank you.
[04:22:21] I think you're acting as a DX thing, but yeah, yeah. I mean,
[04:22:25] Sure, but I mean...
[04:22:29] I don't know. You could argue that Svelte was like another
[04:22:32] DX leap.
[04:22:39] Thank you.
[04:22:40] Thank you.
[04:22:41] I mean, the funny thing for me is React index. I feel like I think of React now and like it was React now is definitely
[04:22:47] Even 2016, '18 was
[04:22:49] better than what I was using in 2012.
[04:22:51] Um, but like,
[04:22:54] I had a pretty sweet setup with my knockout using jade templates and stuff like
[04:23:00] the way I wrote code
[04:23:02] Looks actually a lot the way they wrote code with React hooks. I don't think that...
[04:23:06] You know what I mean? Like people who,
[04:23:08] From jQuery? Sure. But from like,
[04:23:11] I don't know. I thought that even Angular 1,
[04:23:16] The DX of like, you know, writing some state variables, have them like that whole like
[04:23:20] I mean, don't get me wrong, there's a problem with debugging and optimization, but generally, like, here's some state, render it.
[04:23:26] Thank you.
[04:23:28] The chipset is great. It also explains that both true and you won't be fired for buying IBM and then in the end a different architecture won eventually. Yeah, exactly. Because...
[04:23:36] What I'm getting to here is that
[04:23:40] Intel...
[04:23:42] Thank you.
[04:23:43] you know, took over and they completely won and you were ubiquitous and, you know, no one cares.  And at that point, people stopped caring about CPUs.  No one, like, was really advertising CPUs.
[04:23:54] But then what happened? We need something even smaller. Mobile phones took off. Completely different platform. And like laptops before them had even more different heat constraints. And in fact,
[04:24:04] I don't know who made the decision, but over time, ARM
[04:24:08] as a architecture existed,
[04:24:11] back in
[04:24:12] late 80s, 90s, like during that time period,  it wasn't as big, it wasn't popular,  until it already got its hooks into the bigger players  and all this, but it wasn't
[04:24:20] It wasn't, it was just like a footnote, right? I'm pretty sure. Like, sorry, when did our...
[04:24:25] When was our
[04:24:29] Let's see if we can find it.
[04:24:33] 1990, there you go.
[04:24:36] I so like
[04:24:38] Thank you.
[04:24:38] But quietly in the, you know, it worked into these lower end devices. It wasn't,
[04:24:44] It was incredibly efficient. It uses a smaller instruction set.
[04:24:49] Um,
[04:24:50] And
[04:24:51] Next thing we know,
[04:24:52] board viewers, every single mobile device is using ARM for their phones and laptops and all this kind of stuff, which
[04:25:02] You know,
[04:25:03] It's fine. You know, like this is not touching the PC market at all. But then like at a certain point you start going, what?
[04:25:11] If.
[04:25:13] Thank you.
[04:25:13] If the
[04:25:15] if we have a more efficient architecture,
[04:25:18] And then there were adapters, like...
[04:25:20] like over the x86 instruction set to kind of like trying to do parity, but it's still just a patch. You know what I mean? Like,
[04:25:26] If we have, why aren't we just using it, right?  And slowly by slowly,
[04:25:33] And it's happened mostly in the last decade.  First of all, like the M chips from Apple, those are ARM.
[04:25:39] Um,
[04:25:40] You go by Windows computer today,  you'll see like Snapdragon,  powered by Snapdragon,  like some of the more like popular,  like pushing the line laptops.  Sure, they might not be the most popular,
[04:25:51] purely powerful.
[04:25:52] But because of the efficiency numbers, you're starting to see ARM even translate into the initial window space.  But yeah, the M chips in Apple were such a significant jump.  I remember getting my first M1 and being like, wow, this is just crazy.  Obviously, part of this is that we use laptops, but it's the same thing again, right?
[04:26:09] laptops,
[04:26:10] processing became
[04:26:12] desktop processing when the constraints reached it. And then mobile became
[04:26:18] laptop when we reached it.
[04:26:21] So like,
[04:26:22] This is why
[04:26:24] The thing is,
[04:26:25] They won the CPU wars, but...
[04:26:28] I would say ARM ultimately is going to be the winner here, even though x86 was ubiquitous.
[04:26:33] And
[04:26:35] people in the know still had to make a technical decision that mattered.
[04:26:39] Right. Even though
[04:26:41] I mean, if you want to talk about lock-in, x86 feels really good because all software that's  been built for like 30 years, you know, basically ran on x86.
[04:26:50] How do you possibly leave that?
[04:26:53] And the thing was that eventually Apple decided that
[04:26:56] It made a different...
[04:26:57] on like the battery life and made a difference on like what performance it could give.  It was a big enough difference for their product.
[04:27:04] that things have progressed far enough.
[04:27:06] that they would make the switch.
[04:27:10] At a certain point, it was just
[04:27:12] facade sitting over you know you just run a they got to a point that they could even like spoof
[04:27:17] X86, you know, for compatibility layer and for most things be good enough. And
[04:27:22] Now,
[04:27:23] Here we are.
[04:27:25] Thank you.
[04:27:26] Thank you.
[04:27:27] Thank you.
[04:27:28] Yeah, I guess felt they'd have no TS for a long time, that's a good point.
[04:27:39] Why won't everyone build their own...  ...CPUs then, given that CS is much cheaper to build their own?  Well, because someone has to maintain them.
[04:27:48] I do think there's like
[04:27:53] When it comes to the more opinionated pieces, you will see that like meta frameworks are kind of
[04:27:58] you know,
[04:28:01] Encoding the opinionated parts is a place where you're going to get more, like, there's that old saying, like,
[04:28:09] Everyone needs a framework, but not everyone.
[04:28:12] Not something like generally everyone needs a framework, but not everyone needs the general framework.
[04:28:18] So some kind of statement like that.
[04:28:20] Usually that part, the opinion encoding stuff, is going to...
[04:28:25] AI is going to take a lot of that.  People...
[04:28:28] Might have.
[04:28:29] And don't get me wrong, there are people like Tanner who basically
[04:28:32] clone the parts of React they want. But those
[04:28:35] Those solutions,
[04:28:37] now you're on the hook for it and they don't necessarily tell a complete story.
[04:28:43] What we're actually doing with JavaScript frameworks is inventing a UI language.
[04:28:48] Think of it more like...
[04:28:51] Thank you.
[04:28:52] Like, is it like,
[04:28:54] Like I don't know like
[04:28:56] the difference between C+ and Rust.
[04:29:02] Thank you.
[04:29:06] - Reason one, armoured, not that.
[04:29:10] Until...
[04:29:11] was good but NVIDIA won't.
[04:29:13] Sorry, when I think of NVIDIA, I think of them versus AMD, not versus Intel.
[04:29:20] Um,
[04:29:23] The biggest cause of switching is that you need to rewrite software and write new emulators.
[04:29:27] All stuff that is easy to do with LLM going forward, true.  But yeah, I just,
[04:29:33] This is an example of where lower level decision still matters on a technical standpoint.
[04:29:38] And over time,
[04:29:41] when you remove the friction,
[04:29:42] People will just choose the better solution.
[04:29:45] which means that
[04:29:47] That's why I don't
[04:29:50] If my goal was always just to come up and work through finding the best solution,
[04:29:55] then none of this actually really matters.
[04:30:01] What I'm saying is it's convenient to write off the impact of lower level decisions. In fact, let higher level abstractions make those decisions for you. That isn't a sign that the goalposts aren't constantly moving. You might not need to write code and you should still understand the high level impact of your decisions.
[04:30:14] Because I was saying, you're not running Assembly, but
[04:30:17] X86 versus armed has an impact.
[04:30:20] Ken's 20th string could be correct because you framed it as you need--
[04:30:23] as you need to learn, as in learn to write.  But in a universal sense, these things still matter.  Differences still have profound impact.  So it's good as long as you don't equate last frame or two
[04:30:32] or Last Framework to Learn with Last Framework.
[04:30:36] Yeah, that's why the stuff...
[04:30:38] You're right.
[04:30:41] that I got a little nerd sniped into this.
[04:30:44] uh,
[04:30:47] But for the most part,
[04:30:48] Um,
[04:30:52] I don't think that like...
[04:30:58] I think it's probably like
[04:31:02] worth talking about again. It's been a few months. I know we talk about this too much. Um,
[04:31:07] But like,
[04:31:09] When did I come back? It was here July 1st.
[04:31:13] This was my original
[04:31:15] take where I was talking about this discussion
[04:31:20] This is my answer to Dax's thing.
[04:31:24] I thought the answer would be, it isn't about technical merit today. There are better solutions. It isn't about ecosystem. If people are present, those build themselves, right? Like Kent was talking about the emotional.
[04:31:35] aspect or the social aspect.
[04:31:37] Yes, but...
[04:31:40] It's chicken and egg. If things move on,
[04:31:44] eventually people have to move on as well.
[04:31:46] It isn't about history, that explains unprecedented growth, but it doesn't explain staying power.
[04:31:51] Thank you.
[04:31:52] It's about complacency.
[04:31:53] And I don't mean necessarily in a negative way.  If there's no incentive to know better, to understand your own tools, how things can move,  the perceived complexity of the space self-deters growth and decision paralysis, i.e. JS fatigue,
[04:32:07] Who's going to spend the time?  If higher level abstractions like AI pulls away from mechanics...
[04:32:11] What are we doing?
[04:32:13] the mechanics of what we're doing
[04:32:15] are you measuring what solution is more efficient?  Good enough as a mantle becomes alignment to many factors.  So what I'm trying to say here is like,
[04:32:24] Part of it is like perception of this stuff got too complicated. Like when we got to the point where people were trying to say, oh, this framework is better than that framework, it got to a level that it sounded like noise to people.
[04:32:35] Right. Where React came in.
[04:32:38] They had a very clear narrative.
[04:32:40] It didn't even have to be completely true, it just had to be clear.
[04:32:43] and no one really could argue with them on that narrative.
[04:32:47] But after that point,
[04:32:50] you know,
[04:32:52] It's very easy to be like, oh, you know, like...
[04:32:55] Every single thing that React...
[04:32:57] used coming in.
[04:32:59] it was very easy just to kind of like,
[04:33:03] deep like
[04:33:04] devalue it later and be like, oh, yeah, you know, oh, it's just a little bit performance.  Let's make fun of that. Like,
[04:33:10] Like, I remember...
[04:33:12] people like especially during the js fatigue part when someone said they came up with a new framework that was faster
[04:33:19] It was almost seen like
[04:33:20] uh like so negatively like we got past that point but there's a couple years there whereas like
[04:33:26] Like,
[04:33:28] suggesting that something was faster was actually seen as a negative almost.
[04:33:32] And I think, which is like, makes no sense from an engineering standpoint, but it was just like,
[04:33:38] People had had enough.
[04:33:41] Um...
[04:33:43] Like,
[04:33:45] In a sense,
[04:33:46] I think for a lot of people, frontend is supposed to be simple.
[04:33:49] And
[04:33:51] Things were...
[04:33:53] are already such a complexity that no one really wants to get into the details of why these decisions are made.
[04:33:58] if you like and i think this is largely cultural like if you look a lot of
[04:34:02] like different types of engineers. You talk to back-end engineers, you know,  the primogens of the world, they love to discuss
[04:34:10] the technical merit of their solutions. But front end on a whole,
[04:34:15] I mean...
[04:34:16] It's fashion, right?
[04:34:19] Do...
[04:34:20] there's like a different type of developer experience
[04:34:23] that was attracted to working
[04:34:25] that much closer to the end user.
[04:34:28] It's not the whole population base. You obviously have people, you know,
[04:34:32] who care to dig a bit deeper,  but...
[04:34:36] Like,
[04:34:37] There's always going to be a proportion of people that don't care, and that's going to be the vast majority.  And then there's going to be the people that do care, but what do they care about?
[04:34:45] It's it's a
[04:34:46] If you have a profession or place where front-end developers aren't seen as real engineers or whatever like that,
[04:34:51] you're probably not going to attract
[04:34:54] the people who value real engineering.
[04:34:56] Do you know what I mean?
[04:34:58] Except for like...
[04:34:59] when you get deep into these large companies and you find that those are the people holding the gears, you know, you've come across like Michael Rawlings or Dylan Piercy, you know, you know, somewhere deep in the.
[04:35:11] basement of eBay, so to speak, you know, then you'll come across those people. But
[04:35:17] "Out in the Wild"
[04:35:18] Not so much.
[04:35:22] Thank you.
[04:35:25] - Frontend is all about, look what I created in 15 minutes.  - Yes, yes.  - The whole thing incentivize
[04:35:32] Yeah, Blazing Flaps became a meme, which is kind of like,
[04:35:36] Completely fast. Yeah, I get it because everything was faster and faster, but that's a good thing. How could that ever be a bad thing?
[04:35:43] Thank you.
[04:35:44] Thank you.
[04:35:47] Thank you.
[04:35:48] Thank you.
[04:35:49] Yeah, yeah, yeah. In terms of like the ecosystem aspect of it.
[04:35:53] Because when you're that close to the product,
[04:35:55] Thank you.
[04:35:57] you know,
[04:35:58] Maybe it's not viewed as engineering.
[04:36:02] And I disagreed.  When I was working on these complicated situations, I'm like, this is engineering.
[04:36:08] This is complicated to solve. I'm still working on these problems years later and they're still complicated to solve.
[04:36:13] But I think front-end engineers have been told this for so long that some of them might have even believed it.
[04:36:20] Thank you.
[04:36:22] So what you were left with
[04:36:25] Thank you.
[04:36:26] If I'm again won't make sense to most people, but from magic metaphor, you are left with a bunch of is it players.
[04:36:33] Um,
[04:36:34] Is it spikes, if you want to know it.
[04:36:38] Um,
[04:36:39] And that probably makes no sense to almost this whole audience.  But if you know, you know,
[04:36:44] And
[04:36:46] And that just...
[04:36:48] Basically,
[04:36:50] - It meant that we were kind of like
[04:36:54] a lot of the aspects were for show.  It was like,
[04:37:01] Like...
[04:37:02] It could happen.
[04:37:03] like
[04:37:04] It wasn't about...
[04:37:06] It wasn't about like
[04:37:07] grounding it in actual numbers.
[04:37:14] Um,
[04:37:16] I don't think it's something that should be celebrated. People who called that
[04:37:19] might be right, but they also made the predictable call.  They hedged on shorting the market.  Yeah. So like it's always easy not to hedge on not innovating.  Like if something's popular,
[04:37:30] Like if you're given a table and you see like
[04:37:34] This has 80% market share.  This has...
[04:37:37] 10%, this has 5%, and this has 2%.
[04:37:40] Pick which solution you think
[04:37:42] will be most successful
[04:37:44] in five years.
[04:37:46] you pick the one that has 80% market share.
[04:37:49] Right?
[04:37:50] This is...
[04:37:50] you're not a genius for calling this out.
[04:37:55] But like if you don't spend the time to look at the other solutions,
[04:38:01] You know what I mean? You're just kind of like
[04:38:02] betting that things don't change. That's the easy bet, you know, because then you don't have to do any work.
[04:38:11] So like, oh, and to be fair, React has changed itself.  So when I say it doesn't mean everything's like React, I mean like old React.  When people talk about React in these contexts, they're not talking about async React in 2025.  I'm not nearly as critical of that.  They were talking about this perceived React concept.
[04:38:28] from
[04:38:29] you know, maybe 2018 time period.
[04:38:34] And that's React for them forever.  So in a sense, like they are mirroring the AI, you know,
[04:38:39] React has changed, but we're still mired in seven years ago or eight years ago.
[04:38:45] It's basically it just means that the pathways to react success sort of won't
[04:38:50] look like React. I don't mean API-wise. The API could look similar, but that the way it is adopted won't follow the same path as React. Okay. And this is back to my thing. JS frameworks are no longer the frontier of the extraction layer. In a sense, they haven't been for a while because the meta frameworks started becoming that frontier.
[04:39:09] in my opinion,
[04:39:10] We should start, you know,
[04:39:13] The metaframic layer is a temporary
[04:39:16] layer, it's going to get deconstructed. Some of it's going to fall back into the frameworks. The other it's going to
[04:39:20] fall up into AI.
[04:39:22] Um,
[04:39:24] But
[04:39:25] It means that
[04:39:27] I think the choice in the future is much closer to the ARM versus x86 choice.
[04:39:32] which means that the fact that React 1
[04:39:35] Also,
[04:39:36] doesn't matter.
[04:39:37] Because ultimately, if
[04:39:39] It's not what you're interfacing with.
[04:39:42] Eventually, you're just going to pick the better solution.
[04:39:44] Thank you.
[04:39:47] Thank you.
[04:39:51] Thank you.
[04:39:53] I won't call it complacency, the improvements offered by others simply weren't big enough to overcome React's inertia.
[04:40:01] But
[04:40:02] like the perspective or the,  like what decides big enough,
[04:40:08] is driven by perception and that
[04:40:11] perception,
[04:40:12] is
[04:40:13] anchored in social or cultural mechanisms. I don't think it's a technical bearing. I think if you wanted to
[04:40:20] come up with any criteria on a technical stance, you could easily argue, react should it's been supplanted. That's again,
[04:40:27] not what's important. That was Dax's point. Engineers, like engineers, engineers,
[04:40:32] often get too mired in that side of things.
[04:40:38] Thank you.
[04:40:39] in a sense front end and the reaction is much more
[04:40:43] reflective of a typical product space.
[04:40:46] which is kind of funny.
[04:40:50] Anyway.
[04:40:52] Thank you.
[04:40:53] Thank you.
[04:40:59] Thank you.
[04:41:02] Yeah, actually it's funny. This post...
[04:41:07] was actually a reframing of this whole stream.  "We're through async React, it's become clear to me that core concepts need a bit refinement.  UI function state has served for a long time, but it's only really one half the equation."
[04:41:19] Server focus pass for years echo this.
[04:41:21] you know,
[04:41:22] blah, blah, blah, the trick hasn't been to force everything in a familiar model,
[04:41:26] think async the way it appears to, but isolate propagation for process.  Yeah, we talked about all this.
[04:41:31] The place is one side never knows why and the other side never knows how, but it's the result is much cleaner when trying to trace both at the same time. The challenge is getting accustomed to classifying the parts of the solution this way. Yeah.
[04:41:40] Thank you.
[04:41:42] I thought this was funny.
[04:41:45] This is like
[04:41:46] Anyone who doesn't know, Jordan Walk was the original creator of React, and it feels like he stepped away in 2015, right when the change in the guard, you know, when...
[04:41:55] you know, Andrew Clark and Danny Abramoff and all of them came in.  And that's when Seb was on the team, but that's when he really stepped up.  And like the whole Hooks thing and every place we reacted is gone.  So it's funny to have the original guy go like,
[04:42:10] I kind of miss class components.  Um...
[04:42:16] When building complicated imperative components instead of using hooks. Hooks are fine for a couple of imperative things that are mixed into declarative.comv. When the entire component is a giant ball of hyper-optimized mutations that avoids re-rendering in most cases, bridging to several external side effects, is it wrong to use class components?
[04:42:30] And this is essentially...
[04:42:33] like the Remix 3 theorem. It's saying that like,
[04:42:36] at a certain point, your app will get to a point that React devolves into this.  Why don't you just make that the system and remove the complexity?
[04:42:44] Um...
[04:42:46] What's wrong with having a very ugly imperative implementation of a very ugly imperative component?  The beauty of React is that it still exposes a very declarative functional interface to make that
[04:42:53] Thank you.
[04:42:54] to that madness. Yeah.
[04:42:59] My version of this is, why can't I just stick all my logic  in one giant create memo?
[04:43:07] Hooks is a really prism they get. They may have not been intentional, but their setup makes people hallucinate signals.
[04:43:14] This is that the thing that
[04:43:18] The React team, I guess,
[04:43:21] It's so funny how full circle it is because Jordan Walk was involved when they basically, back when, you know,
[04:43:27] Tomachino and like that time period when they basically were like breaking apart all like or Pete Hunt favorite, like knockout and all the reactive libraries at the time. So they all left and then hooks came in which have a lot of the same properties.
[04:43:40] and look of those reactive libraries,
[04:43:44] But the problem was that the old class components had a real problem with compositional aggregation.
[04:43:49] Um,
[04:43:50] We talk about
[04:43:52] React being really
[04:43:53] Compens...
[04:43:54] really good for being composable.  But the problem was
[04:43:58] people wanted more control than what they could do at a component level.
[04:44:03] Back in class components, because you have the different life cycles split it out again, and this is related to our conversation. It's like that conversation on time. Life cycles in class components is an encoding of a specific time variance where you have to split stuff. It's hard to compose. Whereas when you switch to hooks and those collapse into single concerns based on the particular data, you're making data centric.
[04:44:25] it gets a lot easier to have these pieces be reusable.
[04:44:30] Thank you.
[04:44:30] So like, that's what I mean, compositionally aggregation is generally better than inheritance. That's the thought. If you have the building blocks of Lego, it's easier to compose by
[04:44:40] Kind of like...
[04:44:41] picking the ones you need and sticking them together, then creating a system in which
[04:44:46] you know, like
[04:44:47] mixins or inheritance where you're saying like this component is such a thing it has these characteristics in its life cycle.
[04:44:54] Thank you.
[04:44:57] But like the impact of this was profound.  They forefront the true mechanics of React optimization.  In one sense, this is what created the re-render footgum,  but it was also what gave you the tools to manage it.  If there's a lesson we learned,  it can be messy to break things down smaller  than your library's smallest defined unit.  And this is the thing.  This is what I meant about them hallucinating signals.  The second that React added hooks, like added...
[04:45:17] a mechanism of something that was seemingly independent,  but actually changed the behavior of the runtime of the shell it sat in.
[04:45:25] you basically like there's some kind of, I don't know what it is, but some,
[04:45:29] fundamental law was broken, rule was broken.
[04:45:33] because
[04:45:34] what's so clever about them is that they aren't really an isolated thing.  They're actually just mutating the underlying state of React.
[04:45:42] But almost all the complexity...
[04:45:45] stems from that, the hook rule ordering, like everything stems from, from this.
[04:45:49] Um,
[04:45:51] you
[04:45:55] Thank you.
[04:45:56] So like, how did I, is that where I concluded?
[04:46:03] I think...
[04:46:06] And selfishly, I think hooks are like a really good thing.
[04:46:10] But that's because I like
[04:46:12] the compositional direction they did. But so when I look at hooks, I just see like worse version of signals.
[04:46:17] So like how could I not like them directionally?
[04:46:23] Because they actually saw like...
[04:46:25] like the life cycle spaghetti, the
[04:46:28] thing that Remix is trying to bring back. They actually
[04:46:30] give the tools to solve it.
[04:46:32] It's just those tools in that form might not be the best form of them.  So it's like this kind of love hate split here. Um,
[04:46:41] code bases stay on hooks, so I have to imagine
[04:46:44] I'm not the only one that feels that way, but it's very interesting when you kind of step back and the original creator reacts kind of like, you know, like,
[04:46:51] It's okay. And the truth is, it is okay.
[04:46:53] Thank you.
[04:46:54] In a sense though,
[04:46:56] Thank you.
[04:46:56] if he wanted to,
[04:46:58] Thank you.
[04:46:59] He could probably model
[04:47:01] whatever he's talking about, inside one very large hook.
[04:47:06] Maybe, maybe not. I haven't seen this situation. I'm not saying it would be great. It's just a thought.
[04:47:12] Okay.
[04:47:19] .
[04:47:21] Hey Fuzzy, it's been a while.
[04:47:31] Calling a friend in fashion is pretty descriptive, yeah.
[04:47:35] Anyway.
[04:47:38] food for thought
[04:47:39] It's kind of like
[04:47:41] And it's kind of amazing when you consider how simple React was at the beginning and they've kind of grown to try and fit this.
[04:47:49] And kept pacing.  I mean...
[04:47:51] It's impressive.
[04:47:54] It's also very ironic in a sense that you like part of me thinks that like if we'd taken a different turn right when react was introduced we could be in like a much better place.
[04:48:04] React is like the tale of like the unexpected...
[04:48:07] underdog that somehow won. It's kind of crazy.
[04:48:12] That's why there's a certain amount of respect I have on that anyways, just because when you think about it, like in the scope of the solution space,
[04:48:18] React success is almost
[04:48:21] Surprising.
[04:48:23] It's just like the timing and the fact of what it offered at the time.
[04:48:28] Was a real thing.  It's just like.  But when I look at like.  All the different possible.
[04:48:34] potential solutions.
[04:48:36] Like,
[04:48:37] It's surprising that it's where we ended up.
[04:48:42] Thank you.
[04:48:45] Talked about his pending already. Talked about Kenzie Dodds.
[04:48:51] Yeah, I mean, I don't need to keep on going. I got some more solid releasing and work to do. So for me,
[04:48:57] I think I already talked about this.
[04:48:59] A bit.
[04:49:00] um,
[04:49:02] with the Rust compiler and all that kind of thing, but...
[04:49:08] Mm-hmm.
[04:49:09] The new models are something else.
[04:49:12] *sniff*
[04:49:15] I haven't played with the latest... like I haven't played with Soul, like 5.6 Soul or whatever, so I don't know where this is, but Fable...
[04:49:24] I know this is how I started the stream like
[04:49:31] I don't know.  I think other people experience it themselves.  So there's nothing really that...
[04:49:36] interesting in this other than the fact that in my specific line of work where I have to make decisions based on the like multiple code bases, like in terms of like, like creating a system, having that kind of in depth reasoning is like invaluable.
[04:49:49] Um,
[04:49:51] I think the only takeaway, and I think other people talk about this too, is I, I, I, I,
[04:49:59] And this doesn't impact everyone, but I think especially in open source, we really need to rethink about how we think about feasibility.
[04:50:07] Um,
[04:50:11] It is really quite a...
[04:50:15] It is really quite profound.
[04:50:20] I'm sorry, I'm just selling a broken record here, so I'm not going to stress on this too much. It's just...
[04:50:28] I don't... I don't think...
[04:50:33] I would be nearly as ambitious as I am right now if it wasn't for this stuff like
[04:50:38] Solid 2.0 was coming at a decent pace, but there's no way it would have been the quality of where it is going to be.
[04:50:46] Um,
[04:50:47] and come out when it does if it was not.
[04:50:50] for this.
[04:50:52] I'm understanding that just for me in solid. I have to imagine this is for all the other competing frameworks too. Like this is,
[04:50:58] Like this is not just limited to my specific worker that it's it's
[04:51:08] It's kind of crazy
[04:51:09] like how tested React was when people picked it up?
[04:51:14] And then, you know, since then, when people, you know, don't pick switch to solid or svelte because they're like worried about, you know, like how stable or our thing is.  And they've been around for like five years plus years.  And you're like, no, it's way better than React was at the time.
[04:51:28] The quality that's bar raised by AI here,  both in security and all these other aspects  into mechanical and bugs,  means that these solutions now...
[04:51:39] when people spend the time, the dedication, like
[04:51:41] Yeah, anyone can go make a React clone over the weekend or something.
[04:51:45] But...
[04:51:46] you're a parser clone, like what Tanner did.
[04:51:49] But when you have the engineering expertise and the people who've
[04:51:54] understand the problem space, actually working on it, like people, like they've already been, and you apply that to this,
[04:52:02] it's you don't need a 60 person team at Google to get the same kind of results anymore. That's the  difference, right? It's not like the work goes away. It's not like you don't need people working  on the framework. It's just like,
[04:52:15] And different perspectives.  It's just like.
[04:52:17] the raw resource number is a game changer and like
[04:52:22] I've already seen this with Solid 2.0, which makes me want to be more ambitious.  I was always very careful and cautious to make sure
[04:52:29] We don't overstep. Make sure that we, what's maintainable. So I never did Rust before.
[04:52:35] But...
[04:52:38] Now?
[04:52:40] I mean,
[04:52:41] It's so funny, I've had a backlog of ideas that I wanted to solve, like to show like
[04:52:45] where
[04:52:46] We are today to get to where we're going.
[04:52:49] And I feel like
[04:52:50] In my head, I was like,
[04:52:51] That's going to take me five years, seven years maybe, to actually finish the story arc.
[04:52:57] I feel like with AI where it is right now,
[04:53:01] It's--
[04:53:03] We could get there in one year.
[04:53:05] Um,
[04:53:06] Which is insane.
[04:53:08] I'd be very excited a year from now
[04:53:11] stepping on stage at a conference talk and being like, hey,
[04:53:14] Remember that, uh...
[04:53:16] facing front-end existential crisis, guess what?
[04:53:20] We've solved it.
[04:53:22] But we will have to see.
[04:53:29] Thank you.
[04:53:31] Thank you.
[04:53:34] It could be all about a year and we'll move through the perimeter along.
[04:53:37] you
[04:53:41] What's that thing like the definition of insanity?
[04:53:47] It's like trying the same thing over and over again and expecting different results.
[04:53:53] Anyway.
[04:53:57] Curious with solid 2.8.
[04:54:01] solution to what would be
[04:54:04] Maybe we covered it earlier in the stream, but what's the plan for solid the rest of 26 weeks?  Okay, yeah, let's talk a little briefly. I did talk a little briefly about this, but yeah, sure.
[04:54:12] Beta is going great really nailing down stuff. Thanks to these like God big thanks to uh,
[04:54:21] the like, I don't know the names, the people who are basically driving  solid two off AI testing and examples, people like Brenly, people like Gabriel, who designed like,  it's funny, I didn't officially set up
[04:54:33] like a 2.0 team.
[04:54:37] But they've kind of formed and it's not, it's a different shape.  It's not like, you know, like all these people are actively writing code, right?  Right.
[04:54:43] But
[04:54:45] In fact, I'm guiding most of it, you know, and.
[04:54:48] It's just that
[04:54:50] There's
[04:54:51] people spending the time building the examples, like, you know, starting right back when Dev was starting to people like,
[04:54:59] pumping AI through this to the point that
[04:55:01] Thank you.
[04:55:02] there is definitely a core group of people that have been really pushing this  forward and it's in, and I, they have a huge thanks from me, which means that like,
[04:55:12] I went away for six weeks. Last time I did that was right before the Solid Start, right after the Solid Start release. No, right before the Solid Start release.
[04:55:22] Um
[04:55:24] About a year ago, yeah.
[04:55:26] um,
[04:55:27] Yeah, two babies in...
[04:55:29] two years is a lot.
[04:55:34] And
[04:55:38] This was a hundred times different. Before I was just happy that things kind of like moved and like some people... This time I felt like we didn't even skip a beat. Like it was just like...
[04:55:49] with the testing, you just step right back in and the issues fix.  So plan is next three weeks or so to a month,
[04:55:55] really work through the beta, get that RC ready to go.  Ecosystem, I'm still, I mean, it's a cat and mouse game with them.  They know it's coming, stuff's been stabilizing.  All the main behavior has been there and it's been there since before I left.  So things are progressing.  And then we're going to run the RC probably...
[04:56:13] for a month or two really make sure everyone's on board.  The hardest part is actually convincing people to try it.  I'm hoping when the RCE and like the docks are already flowing,  we're already generating the docks.  I'm really hoping we get the RCE going, people will actually push it.
[04:56:27] Eventually, I'm just gonna have to pull the pull and be like, we're gonna release it. But yeah, tentatively, I think we're looking early October.
[04:56:37] Ish, right?
[04:56:38] We'll see where we're at if things go faster or slower, but you know,
[04:56:43] Um...
[04:56:45] Probably be awesome to get it out by beat comp this year.  Actually, I don't see comp you.  I don't even, I've been so out of the loop.  I don't even know what's up with beat.
[04:56:52] Conf.
[04:56:53] Because last year I didn't go because I had a...
[04:56:57] I had it.  I still can't go because I have another,  there's no way I'm traveling,  but nice to put a talk together for that.  Basically,  I'm thinking,  I'm thinking,  uh,
[04:57:07] .
[04:57:08] The way things are heading, we're looking early fall, like early October.  Um...
[04:57:13] for Salt 2.0 stable release.
[04:57:16] That's tentatively...
[04:57:20] But yeah.
[04:57:27] So, all right. Five hours is good enough for me as far as I'm concerned, and I can get some more work in for the next hour and a half. I really want to get the compiler out as we saw earlier on the stream.
[04:57:41] Apparently...
[04:57:43] um
[04:57:45] it's up to 300 times faster.
[04:57:50] I'm sure somebody is going to appreciate that.
[04:57:53] All right.
[04:57:57] Thank you all for joining me. I think I'm just going to call it though. So, uh,
[04:58:01] You all have a
[04:58:03] Great one. And again, it'd probably be every two week intervals kind of in my go recently.  So probably no stream next week. Not going to have enough topic, but hopefully you found something interesting and valuable and see you all again soon.  All right. Have a good one.
[04:58:21] Thank you.