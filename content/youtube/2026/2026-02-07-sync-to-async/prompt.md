---
title: "drLX0yTKP04"
slug: "drLX0yTKP04"
duration: "6:18:48"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/drLX0yTKP04.m4a"
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
[00:00:02] All right. Hello, everyone. Welcome to my stream today. Oh, great. So we're running a bit late. It's funny, I was planning to do some stuff this morning. And instead,
[00:00:12] I, uh...
[00:00:14] Ended up responding to a post on X. Pretty typical of me.
[00:00:18] But you know how it is.
[00:00:21] Why don't you guys all come and say hi in the chat?
[00:00:25] *click*
[00:00:26] We get this thing started today.
[00:00:29] No.
[00:00:31] Okay.
[00:00:33] Thank you.
[00:00:34] All right, here we go.
[00:00:37] Thank you.
[00:00:39] All right.
[00:00:41] Sorry, I'm still, like, organizing windows and stuff because I was like,
[00:00:46] Literally just...
[00:00:48] rushing to get stuff set up.  I actually have a new...  Remember last couple streams I was complaining about  how the...
[00:01:11] Sorry about that. Lost the mic. I was complaining about how, uh, let me see here.
[00:01:18] Bye.
[00:01:19] Yeah, I was complaining about basically how...
[00:01:26] My screen kept on flickering while I got a new setup, so I had to set that up also before I got started today.
[00:01:32] Alright.
[00:01:33] I think we're doing a little bit better here. Sorry for the
[00:01:38] I've been kind of scatterbrained, you know, that meme with the guy with the papers on the walls and the conspiracy theory. I felt a bit like that this week as I've been working through stuff. It's been a very different time for me.
[00:01:51] I've been using
[00:01:53] AI tools.
[00:01:54] for the first time ever, like,
[00:01:57] a lot and I'm going to talk about that a bit today.
[00:02:01] Because it's a very interesting experience. And as I said, I should have probably been more prepared. But, you know, we're here now. So...
[00:02:10] That's how things are. Okay, let me get stuff...
[00:02:15] in a reasonable place here. Okay, so then we go here.
[00:02:20] Yeah.
[00:02:21] Hello everyone, yeah. No, I guess everyone's had a chance. I'm gonna pull up Twitch here too for a sec, 'cause make sure I don't miss anything on there as well.
[00:02:30] Thank you.
[00:02:33] Thank you.
[00:02:34] Thank you.
[00:02:36] Good, good, good, good.
[00:02:41] I have not given...
[00:02:44] this async talk of thought since the last time I popped into your stream talking about this. I think it was when you first started talking about it. How's it progressing? Well, it's interesting. And I think I found the right way to frame it. I posted some examples this week, which are a lot of the same examples, but I thought
[00:02:58] what would be fun and one of the ways we could start and I'm hoping to get some participation here from chat today is
[00:03:05] What if we start with something, I know I've said this before, but I actually I want to do it today. What if we started with something synchronous, like an example that's synchronous and then we're like, okay, let's make this async and actually kind of like work through what that process actually looks through because that's been like my
[00:03:20] primary design vision here. I know that's not how things usually start. You usually actually start with like knowing like, hey, this is coming from a database or whatever. But
[00:03:32] there's a certain place you reach when you take a design ethos of like basically like
[00:03:38] I don't want my code to change if I go from synchronous to asynchronous.
[00:03:43] um, whether that's the right one, but there's something really nice about that from the perspective of reactivity and UI because
[00:03:51] The whole benefit of having a declarative system
[00:03:55] is generally that you can just look at it
[00:03:57] and understand
[00:03:59] Um,
[00:04:00] what the behavior should be. Like you go, okay,
[00:04:04] I'm seeing this relationship in front of me.
[00:04:07] It doesn't really matter how it gets there in theory. I mean practice we know because the performance and stuff it does matter, but like
[00:04:14] in theory, you should just be able to be like, these things are related,
[00:04:18] When this updates, this updates.
[00:04:22] the way we do this is through synchronous guarantees.
[00:04:25] essentially in UI frameworks so things don't tear, don't happen unpredictably. Most solutions don't account for async and
[00:04:33] That's a hole. It's one that
[00:04:35] most framework authors are,
[00:04:38] I'm very aware of at this point. And I think
[00:04:42] That's why coming at this perspective of like, I don't want the code to change.
[00:04:46] is actually useful.
[00:04:47] which is hilarious on a complete other tangent when, you know, I keep on seeing these like,
[00:04:54] Theo take, you know, like
[00:04:57] because the AI stuff, I started watching a lot of his videos again, and that whole like react the last framework thing came up yet again. And, you know, talking about like how the react compiler was a way for code not to change.
[00:05:08] And it's funny that there are certain things that are lending to us trying to reduce code changing, but I think it's for completely different reasons.
[00:05:15] we have to be careful not to...
[00:05:18] correlate
[00:05:20] this too much. I mean, don't get me wrong.
[00:05:23] quite often with trends and technology,
[00:05:26] It's because...
[00:05:28] similar benefiting things happen at the same time,  even if they're unrelated.  And then that creates a movement,  like single page apps coming out  at the same time as microservices.
[00:05:37] you know, like,
[00:05:39] There is a coordination aspect of it.
[00:05:42] but it isn't always causal, you know, like it's not always that one causes the other.
[00:05:49] Anyway, just a thought. Maybe we'll get into that in a bit.
[00:05:54] Where's the bass guitar? Yeah, I took it down off the wall and replaced it with my Music Man
[00:06:01] the little silver, that one's like the pop punk guitar, I'd call it.
[00:06:09] I actually...
[00:06:10] swapped out the pickup which i feel kind of dumb now because music man have these active pickups  that are actually kind of nice but i ended up swapping it out for like like basically the tom  de long pickup at some point i don't know why it was like after my main pop punk phase we were  already i was already in kind of like a hardcore band at that point but like
[00:06:28] We decided to just make that like the Blink-182 guitar.
[00:06:32] Even though technically Tom doesn't play like a music man, they have an interesting sound.  They're kind of tighter.  They're almost like a Telecaster, even though they look like a Strat.  Anyways, aside.
[00:06:44] Thank you.
[00:06:47] Yeah, it's not about better. It's about...
[00:06:51] Yeah, I think this is the whole thing.  I have to be able to show it for people to really appreciate it.  And that's why talking about it isn't enough.  That's that's why I wanted to do this stream today. Right.  There's a couple of really big realizations I came to while I was working on this.  Some about on the nature of like optimistic data and optimistic UI and like where that fits.  And the other thing is just sync versus async.  So, yeah, we probably should get
[00:07:18] Thank you.
[00:07:19] We probably should get into this here.
[00:07:23] Yeah, yeah. Not really... Exactly. They're not necessarily...
[00:07:28] Like you can see how they're complementary and you can see how the timing worked out really well.
[00:07:32] But it's not like one cause the other.
[00:07:38] Yeah, sorry.  Let me see here.  I'm just trying to get myself oriented.  I'm not bad.
[00:07:44] Um,
[00:07:45] I mean, I think I'm going to...
[00:07:48] I'm going to push this out.
[00:07:51] uh later or we'll talk about later but yeah ben davis um some of you know theo's content manager  also does content himself uh big svelte svelte kick fan um
[00:08:03] made some comments suggesting that maybe
[00:08:05] reactivity, signals-based reactivity  didn't scale as well as react.
[00:08:09] did. And I had to respond. I really didn't have a choice, unfortunately, which meant I didn't get to do what I wanted to do the last hour before my stream. And instead, I was responding to him, I have this kind of compulsive nature when it comes to
[00:08:22] the
[00:08:23] things that don't fit within my worldview.
[00:08:27] This is a funny other thing.  Because I'm starting...  Is it weird to think of AI models  as a certain personality type?  This is just completely a crazy aside.  It's just...
[00:08:38] I...
[00:08:39] When I work with tools, when I work with things,
[00:08:42] And people. I need to figure out a way to model or categorize them. That's just how I function.
[00:08:48] People are.
[00:08:49] have any doubts anymore and familiar with Myers-Briggs, I'm an INTJ.
[00:08:53] So,
[00:08:57] Like...
[00:08:58] essentially,
[00:09:01] Yeah, sorry, that's a whole other tangent. Maybe we'll get to that.
[00:09:08] OK, let's talk about my general precisioning.  Yeah, let me scale a draw here for a second and then we can we can we can get into it because
[00:09:16] When I say async, you're like, well, I have async in my framework.  I've been doing this for a while, right?  Like this is not new, right?
[00:09:22] Yes and no.
[00:09:23] So, and I think this is important to frame at least as we get started here. So let me see if I can share my screen. Actually, I have to share my screen first.
[00:09:32] It's been so long, I wonder if it's going to make me go through the whole song and dance again. We want to share
[00:09:39] this one.
[00:09:41] Thank God it doesn't. Okay, cool. So
[00:09:44] I
[00:09:46] Let me kind of basically rough it out. For me,
[00:09:49] I don't know why they call it Gen01201.5.1
[00:09:55] But there's basically been three...
[00:09:57] Sort of...
[00:09:58] buckets of how async has happened. And don't get me wrong, there's a lot of gray area in between, right?
[00:10:04] So,
[00:10:05] *sniff*
[00:10:06] so like
[00:10:08] Um...
[00:10:11] Let's just like draw them out here. Bucket one.
[00:10:15] or zero.
[00:10:17] No async consideration.
[00:10:20] Thank you.
[00:10:22] uh...
[00:10:26] And then...
[00:10:27] What are we at? We're at 100%-- this is too big. We should make this a medium.
[00:10:31] Yeah, there we go. No async consideration.
[00:10:39] Thank you.
[00:10:39] Thank you.
[00:10:40] And I'm mostly talking about...
[00:10:46] uh
[00:10:47] data fetching. I know things, so it's data fetching patterns we're going to focus on mostly.  There's other async, but I'm going to say that like,
[00:10:54] async primitive
[00:11:00] So yeah.
[00:11:02] do this like this. I'm going to call it gen0.
[00:11:05] No async.
[00:11:09] large,
[00:11:11] Large is where I want to be. Large. And then
[00:11:17] Gen 2
[00:11:19] Async first. And as always, this is an oversimplification. People are going to complain that I'm not 100%
[00:11:27] accurate or whatever. But this is like my my my
[00:11:31] how I'm looking at things right now and how I bucket things as of today. It could change.
[00:11:36] And
[00:11:37] Generally speaking, we have these three boxes. This is visible for everyone, hopefully.
[00:11:41] Let's do that. Let's make this one a little thicker too. Okay, cool.
[00:11:43] So what do I mean by each of these? Well, let's now switch to medium.
[00:11:49] Use effect.
[00:11:51] Okay.
[00:11:55] What's another example?
[00:11:57] fetch in event handler.
[00:12:00] I have to include the remix stuff, you know?
[00:12:03] Right.
[00:12:06] Okay. Which is fine.
[00:12:07] I mean, I'm not saying
[00:12:11] When I say no async, it's not necessarily no async. I mean async awareness by the JS framework. Because I am sort of sticking RxJS in this category. RxJS is async and it handles async. It's just, it's in the event. It's like,
[00:12:27] It's outside of our purview.  I'm not saying, I'm saying like you can put RxJS into Angular or any framework and have it like handle the async for you.  But from the framework's perspective, the framework is not considering async in that point.
[00:12:41] It's just getting a sequence of synchronous updates from the outside.
[00:12:45] So I say fetch an event, but...
[00:12:49] Async...
[00:12:53] Events.
[00:12:55] Okay.
[00:12:56] Then what's generation 1 primitive?
[00:13:02] Let me see.  Create resource, like Solids create resource, or Angular's  creates resource.
[00:13:08] React query.
[00:13:11] like
[00:13:12] pan stack query, you know, like that, like, um,
[00:13:16] Now, don't get me wrong, some are better. Angular's resource query has improved
[00:13:22] significantly on like solids resource query. We had some problems with it in terms of propagation  the graph thing like we don't handle it exactly as ideal as we want to but categorically in terms  of solution I think this is where it is where it is and I feel like I was like pretty strongly on  camp one most of the past year so like I just I just want to make sure that we under we understand  where this sits right and there's a lot of solutions that kind of
[00:13:49] leapfrogged.
[00:13:50] over the bounds in terms of data fetching, right? Because you guys might be like, "Okay, well, what about
[00:13:56] like suspense with view or whatever.  Um,
[00:14:01] I would also...
[00:14:03] kind of put that in this generation one way.
[00:14:06] bucket of things. It's not no async, but it's about async primitives. It's
[00:14:12] kind of simplest you say reacts has a solution in here but in a sense because they didn't
[00:14:18] release the true react solution here. This is why I was talking about whether it's 0.1 to 1 or 1 to 2. They kind of just leapfrogged
[00:14:26] over
[00:14:27] this zone, right?
[00:14:30] Um, Stolt was similar. Stolt.
[00:14:32] had crap, sorry, basically garbage async until the new async fault came out.
[00:14:38] I'm sorry, people who like the Awake component, like...
[00:14:42] It didn't even work.
[00:14:43] properly on client and server until fairly recently.
[00:14:47] So a lot of frameworks like didn't like
[00:14:51] they were ahead by going this Gen 1 zone, like React Query, where the ecosystem had the fill in the gaps.  So what's Gen 2? Async first?
[00:15:00] There's only two solutions that are released today, right?
[00:15:03] React.
[00:15:05] 19...
[00:15:07] I'm just going to call it the use generation.  It's transition.  It's what Ricky demoed on my stream.  Spelt async.
[00:15:18] And...
[00:15:19] you know, solid 2.0s async model, right?
[00:15:24] Those are the only ones that are in this bucket.
[00:15:28] Generally speaking,
[00:15:32] most
[00:15:33] Today, in my opinion, most code is actually sitting in Gen 0.
[00:15:38] Reactive systems like Vue,
[00:15:41] like Angular that are kind of like ahead of that game, right? But then there's a new trend that  kind of supersedes that trend. Does that make sense to everyone?
[00:15:54] I get it. Theo, Ben, I have a piece of Theo wrong, which makes me surprise.
[00:16:00] Yeah, to be fair,
[00:16:03] I think it's only the last React framework, one that really kind of got to me a bit more. It's funny, I was looking up in J just to explain it to someone, right? And I was reading here and they're like,
[00:16:18] Core Int J traits: strategic and analytical. They approach life as a chessboard, constantly analyzing trends and consequences to build and prove fixes, blah, blah. Independent driven, highly self-confident, autonomous, they are determined master subjects that matter to them, serve and candid, keep them to themselves, appear arrogant or eluded to bluntness.
[00:16:35] Future focus. They prefer to
[00:16:37] focus on future possibilities than the past. And I think this last trait
[00:16:42] is kind of a funny one because
[00:16:46] Being future focused means you often don't even focus on the present
[00:16:51] which means that like,
[00:16:53] When people worry about
[00:16:55] future technology in the context of where things are today,
[00:16:58] I have very little empathy for them, unfortunately.  I can't help it.
[00:17:07] Um,
[00:17:08] Like, I get it. Like, I logically reasoned it, but it's like, for me, it just, it doesn't compute. Like, you can only really...
[00:17:16] make
[00:17:17] decisions on the future based on
[00:17:19] like
[00:17:20] You can't keep your foot in both sides.  If you're looking at the future,  then think about it in terms of the future.  Don't try and constrain yourself by the stuff of today.  Now, don't get me wrong.  People who are practical builders need...
[00:17:34] that
[00:17:36] capability. Like they need to be able to bridge that gap. And in a sense,
[00:17:43] it's a matter of scale, like how far in the future you are.
[00:17:46] But it's just it's funny.
[00:17:53] Okay, yeah, yeah, yeah. You know what? I could... this is... you're right. I really like this distinction.
[00:18:03] I actually think you're right.
[00:18:06] I think
[00:18:07] React 19.
[00:18:11] is actually
[00:18:15] It's like it has the right stuff.
[00:18:18] it's just react's ecosystem and where it's sitting will not let it get to where it needs to get to so in a sense react
[00:18:27] Nineteen.
[00:18:28] is like sitting on this edge where technically
[00:18:32] It is async primitives.
[00:18:34] They haven't opened the floodgates
[00:18:37] They probably wish they could, right?  They had concurrent mode and then concurrent features, not concurrent world.
[00:18:44] And
[00:18:46] in being incredibly breaking.  So in a sense,
[00:18:50] React knows exactly what it needs to do, but it can't do it.
[00:18:55] Which is an interesting argument, right? Because this is like at, again, complete odds with what
[00:18:59] you know, people are
[00:19:01] Like it both agrees with like Theo's reacts last framework statement, but also is at complete odds with it.
[00:19:07] Right. Like, because it's like things do ossify as they get popular. I mean, that's,
[00:19:13] That's the nature of things.  But...
[00:19:16] Change is a constant force. We can't ignore change. So...
[00:19:20] Um,
[00:19:20] Yeah.
[00:19:26] I
[00:19:29] Thank you.
[00:19:33] Thank you.
[00:19:34] Thank you.
[00:19:35] Yeah, why do I put React Query over here? It's because React Query recognized, even though it might not affect,
[00:19:44] effectively, like the difference with React Query is, it's like trying, it's kind of like this one, you know, where you're like, I can't get here.
[00:19:52] But um...
[00:19:54] Thank you.
[00:19:54] I know exactly what I need to do.
[00:19:57] React query-- see, this is why I told you that there's some subtlety here. React query
[00:20:02] is like
[00:20:04] Thank you.
[00:20:07] is like this thing where it's like, I know exactly what I need to do, but I'm stuck with Gen Zero tools.
[00:20:13] It kind of sits over here because...
[00:20:18] It does have suspense support.  It was one of the earliest ones  because you can like turn on suspense mode  and, you know, kind of get into that zone  where it's like a bit more coordinating,  plays along.  But the problem is like,  the key revelation for React query  is that
[00:20:32] async is derived
[00:20:34] You put in a source, it participates in the graph. It's not a write.
[00:20:38] It's not more state.
[00:20:40] You know, it's not like, like, it's derived. And that's what that's the word difference from here. This is like one of those fundamental things that I think is like completely missing on the remix.
[00:20:50] model is like everyone just keeps on like getting to this zone where they're like more states that write more states when events happen.
[00:20:58] The event model, I don't...
[00:21:01] I think the event model, which leads to more states,
[00:21:06] becomes unwieldy after a while. I mean, there's ways to make it wieldy, use a state machine. You know, x state's a great solution. But
[00:21:14] it's like,
[00:21:14] It's kind of like the RxJS arguments.
[00:21:17] Do you really need it?
[00:21:19] Right. And I think that that if you start looking at things from a dependency graph standpoint, which is what react query does, you actually make the bridge over to where reactive systems are. You don't have to be like.
[00:21:30] truly reactive or like fine-grained reactive to be to emulate the model in the same way like react hooks
[00:21:36] emulate the model of fine-grained reactivity without being fine-grained, right? Or React compiler.
[00:21:42] So
[00:21:44] As I said...
[00:21:46] rough categorization
[00:21:48] I hope that makes sense.
[00:21:53] Thank you.
[00:21:59] I don't know.  I mean, it's interesting what people are willing to learn to be able to be effective.  One of the interesting things I've been...  I've been working with generators like a ton recently because I think...
[00:22:12] like my whole inside outside of the system thinking lens that,
[00:22:16] reactivity is really good for certain types of shapes of problems.
[00:22:19] But those problems that reactivity is good for, like signals are good for, are things that contain permanence of some sort that are declarative.  And it's like, how do you represent...
[00:22:31] Um,
[00:22:32] ephemeral procedural type logic in that world, right?  One way is events.  Another way is sequences, essentially, generators or whatever.  Things kind of like that effect really specializes in.  So, I mean, sure, I think there's a place for it.
[00:22:49] For me, I've been able to compartmentalize those into different zones.
[00:22:57] Thank you.
[00:22:58] Yeah, yeah. Tech-based. Yeah. Well, it's hard though, because like, I'm like the farthest thing from a naysayer. Like when you go in the comments, like Theo's comments have become like toxic where people are like, oh, more AI shilling, blah, blah, blah. AI couldn't tie its own shoes, blah, blah. Like, you know, like honestly, stuff like that.
[00:23:16] I'm legitimately excited about new technology. So it's like, it's good to kind of look at this. I just,
[00:23:22] I think when looking at new technology, we have to frame it in a zone where we can't use our current technology.
[00:23:28] completely rely on our current we can use our current experience and biases because that  influences the way we look at the technology but we can't look at the current technical  things we have to think in a world in which the technology isn't
[00:23:40] isn't limited, which is hard to do because like, obviously, um, technology evolves.  So on, and it evolves differently than the way we think it will often, we try to learn better to make it a mental model.  So our estimates can be way off.  We can, you know, think we will have flying skateboards in 2015, you know?
[00:23:57] Which, again, probably was technically true.  I'm sure there's a hoverboard somewhere out there, but, you know, not going down Main Street.
[00:24:08] Okay. So...
[00:24:14] Because of the grayness of this area,
[00:24:17] And because of where most people sit today, which is literally over here,
[00:24:21] I kind of want this exercise to kind of ignore Gen 1.
[00:24:26] um in a sense because i kind of think that we should start from something sync  and then think about how we would implement it from a gen zero standpoint and then
[00:24:35] compare and contrast that to, um,
[00:24:39] you know, what Gen 2 looks like, right? So
[00:24:42] Unfortunately, I didn't prepare my demos today, so we might have to do a little bit of legwork here, but this is where I wanted to start because
[00:24:50] I think two demos in particular...
[00:24:52] of my list. I don't know if people saw it. Let me see if I can pull it up. But I posted like a bunch of demos on X.
[00:24:59] uh,
[00:25:02] To do to do to do to do to do.
[00:25:08] Good, people are already reading my article. It's not even an article. I don't have time to publish.  That's the problem. When I get into these burst thoughts on HackMD, the spelling and the grammar is just terrible.
[00:25:17] I sometimes think like Yoda. So it's like, I don't even know if anyone can read them. Okay. Yeah. Yeah. So I made an example here and I'll share this in chat in case people miss this, but I dropped like a whole bunch of examples here and the be fair. I don't think people.
[00:25:32] everyone gets them all or the impact.  And it's hard because when you look at a finished example,  you're like, oh, yeah, obviously it should work like that, right?
[00:25:39] So like,
[00:25:40] What I want to do actually is I want to take this example.
[00:25:43] For example,
[00:25:44] And I want to
[00:25:47] I want to, let's duplicate this. I want to go in and grab one of my React
[00:25:53] Boiler plates?
[00:25:54] Like probably,
[00:25:55] Of course I'm not signed in. I won't be signed in with GitHub either.
[00:25:59] Because...
[00:26:02] Biometrics.
[00:26:04] And then it will probably ask me for my authenticator app or something.  OK, no, we got through. God, I know it's all necessary, but like,
[00:26:12] Security these days just drives me nuts. I can't even publish packages now without getting prompted by NPM.
[00:26:19] I have to log in twice because usually my terminals sign me up at that point and then
[00:26:24] I know workflow problem. This is me, old guy, you know, rich.
[00:26:28] Fist to the stars. Not that any of that would make me do, like, change things, you know, some people are like, oh, this is why build processes are bad. Those people are idiots, but I mean...
[00:26:38] Okay, let me it's been a while.
[00:26:42] Let's see if I have some React 19 examples.  I can use a baseline.  React 19 Sapirsky, let's not use that one as a baseline.
[00:26:50] GAC 19
[00:26:51] Oh yeah, React to use async 17.  I built this with...
[00:26:56] with uh
[00:26:58] with Ricky, but let's not do to do's yet. We'll get to to do's in a minute.  Instead of what I'm going to do is I'm going to fork this.
[00:27:05] Yeah, I could use solid, but we're going to use React for this demo.  You guys are familiar with React, right? You could help me write some React code in case I screw it up.
[00:27:15] Let's just do like react.
[00:27:18] Divide.
[00:27:21] Right.
[00:27:25] Well, exactly right. To actually understand the demos,
[00:27:30] you would need to actually specify the exact behavior you want.  It's it's way easier for us to do this in the form that I tend to do right here, which is
[00:27:40] video, essentially. So
[00:27:43] Let me take this example.
[00:27:45] Solid divide. I love the fact, on a complete aside note,
[00:27:50] Um.
[00:27:51] that I can, most of the time, I can almost just copy and paste solid code.  Like it's not obviously exactly the same, but like you guys saw this when I used to do like the HackerMD news.  Like simple, basic examples translate fairly easily here.
[00:28:09] Let's just drop this in. What's the export component called?
[00:28:15] So I know, is it just like app or something?
[00:28:17] Function to do app, but it's a default. So it's just the default export. Yeah, I just don't remember what this template is. So export
[00:28:25] default.
[00:28:26] We'll call it app.  And then let's make this react.  Create signal becomes use signal.
[00:28:32] Or no, Q state. And then
[00:28:36] We don't need it.
[00:28:37] database yet. We'll add that in a minute, but let's worry about that. And then what else do we need here?
[00:28:48] I don't need useMemo, not that I need so less, but I'm going to use useMemo just because it's
[00:28:55] easier for this translation. We'll just use memo.
[00:29:00] And then useMemble takes a function, so that's the same.  So then we just have to remove all the functions.
[00:29:06] to
[00:29:08] Move all the functions on N here.
[00:29:12] Mm.
[00:29:15] And then we need to remove...
[00:29:19] We will just throw N in here for now.  We won't worry about this.  Just making this demo synchronous.
[00:29:26] We can make this fragment.
[00:29:30] It's kind of bad here because I'm like undoing the work.
[00:29:33] But...
[00:29:34] We just go to...
[00:29:36] Doop.
[00:29:37] and
[00:29:38] Duke and you might be like, "Why are you putting QFIXED here?"
[00:29:41] What's wrong with my use memo?
[00:29:43] Oh right, it means a dependency array.
[00:29:46] God, I forgot about those.
[00:29:49] Thank you.
[00:29:49] Beautiful.
[00:29:52] Thank you.
[00:29:53] We can just copy this whole thing.
[00:29:56] And then I can never remember the shortcut keys to go down the line.
[00:30:00] I just didn't manage it.
[00:30:02] All right.
[00:30:03] Thank you.
[00:30:04] What's your problem?
[00:30:07] All right.
[00:30:09] We're not async.
[00:30:17] Or not 8sync.
[00:30:21] So our divide function--
[00:30:23] is literally a divided by b.
[00:30:30] Insert return that, remove the return type.
[00:30:34] Did we do it?
[00:30:38] Her button is terribly styled.
[00:30:41] Um,
[00:30:44] I didn't even realize I had much CSS in here.  Let's add CSS in.
[00:30:51] Thank you.
[00:30:53] Okay.
[00:30:54] Wow.
[00:30:54] I didn't even think that I had much styling in here, but okay.
[00:30:57] I've remade it.
[00:30:59] Alright.
[00:31:06] Thank you.
[00:31:07] Thank you.
[00:31:10] The biggest thing I don't like when you have a full sync app and in the moment you're adding async to the single async, your entire system becomes async too.  Yes, but there's a question is...
[00:31:21] What part of that don't you like?
[00:31:24] Is it that you dislike having to rewrite all your code or you dislike that async is a
[00:31:32] it's like the coloration problem. Like, uh, like, like once async enters the system, um,
[00:31:41] you, you're kind of like, there's not much you can do, right? Like you're, you're kind of,
[00:31:45] um
[00:31:47] Okay.
[00:31:49] Yeah. Oh, actually the divide example doesn't even have a server TS. That makes our life even  easier. I said I'd bring it back, but that server TX is from our to-do example. Okay.
[00:32:00] Okay.
[00:32:02] Yeah, I think it's important to recognize there's certain things that are fundamental, like async just
[00:32:07] Eat. Eat.
[00:32:08] it has an effect on everything downstream or the consistency of your whole app. The existence of  async fundamentally changes the game. We have to acknowledge that. But should it change
[00:32:22] like the way you look at doing everything.
[00:32:27] Okay, so...
[00:32:30] Thank you.
[00:32:31] Sweet. Our example works. It's a counter.
[00:32:35] that divides
[00:32:36] with 2Fix3. And why did I do 2Fix3 out here?
[00:32:41] Now, did we really need...
[00:32:44] to memoize each of these? Probably not.
[00:32:49] like they all update at the same time.  This isn't like a case of like one divide comes in before the other divide.  There's no timing difference.  You understand like once you actually...
[00:32:57] start getting timing differences, you probably needed a separate
[00:33:01] tracking mechanism here.
[00:33:04] But this is the basic example. Rich Harris
[00:33:10] Um,
[00:33:11] actually kind of came up with the multiply version of this.  I chose divide because I actually wanted
[00:33:16] to kind of
[00:33:18] I...
[00:33:18] Like in reality, you don't always get away with
[00:33:22] the value being nullable. So that's why I chose it.
[00:33:27] So,
[00:33:30] Yeah, I mean,
[00:33:31] This is a pretty easy example.
[00:33:34] The code makes a lot of sense. I think I did this right. You React developers out here, you don't see any problem with this. Yeah, I mean, there's a delay here on the divide.
[00:33:41] um that that isn't being used but generally speaking i pick i calculate a value based on  divide by n by one two three four five and then i show it to fix so that it aligns at least a  little bit better otherwise you're going to have like this going up to here and all this stuff so  you know a little bit of a ui consideration our data we want the full values we don't we don't  want divide to necessarily round we just want in our ui to only show three levels of precision
[00:34:11] Austinness.
[00:34:12] for the user.
[00:34:13] Let's say we could use it for some downstream calculation where rounding would be bad.
[00:34:20] So,
[00:34:22] Let's.
[00:34:23] Now that we have our baseline,
[00:34:26] I'm, like, tempted, like, should I, like, save this or, like...
[00:34:31] you know, like fork it or something. This one I don't think we need to. I think this will be illustrated enough. How do we make this async?
[00:34:37] I, I, I, I,
[00:34:38] I really want...
[00:34:40] the chat to participate. I hope we have some like versatile React developers in here because I want the best ideas. And to be fair, I don't, my only constraint here, and I know this might seem unfair, but it's for the purpose of this
[00:34:52] thing, because we've already seen Rick
[00:34:54] Ricky, come on and use React 19. I don't want to use React 19 features. I don't want to use use.
[00:35:00] I don't want... everything...
[00:35:02] Pre-React 19, I'm okay with, I think.
[00:35:06] But like, I don't want, this is just your typical app.  I'm using React here.  Pretend it's framework N.  You know what I mean?  Like what are framework X?  We don't care.  This is your just typical, I don't care about async framework.
[00:35:22] Thank you.
[00:35:22] Am I going to get participation today, I wonder?
[00:35:26] you
[00:35:27] I really want someone to suggest a solution there.
[00:35:31] slap RQ in there.  Okay, so I could...
[00:35:35] The divide. Sorry, you're right. Let's start with actually what I want. You're right. I didn't clearly express it out. Our problem now is we've been working on our app and it works great. And we're like, wow, look at how smooth it is. Everything calculates. I can see it great. And someone's like, you know what? We can't synchronously calculate divide anymore. We need to get it from a server. We need to or we need to calculate it and like offload it to WebWorker or something. We can't do it. So yeah, actually, you guys are right.
[00:36:05] Let's start by updating
[00:36:07] Hard to bide.
[00:36:09] Right.
[00:36:11] This is now our function.
[00:36:13] and our UI breaks immediately. Right. So we have our new problem.
[00:36:21] You'd probably have a state that's set when the promise is complete, yeah.
[00:36:28] I'm
[00:36:32] Hear the behavior you want to take to the thing. Well, yeah, exactly. But what, what, what, what, what, let's, let's think about this for a moment. What is reasonable behavior?
[00:36:42] Let's try something naive. I think the first thing, I know you guys
[00:36:46] Do you want them to be coordinated? This is a great question.
[00:36:49] I think so.
[00:36:51] But we'll get there.
[00:36:56] You could use their weight component, but...
[00:36:58] The awakening...
[00:36:59] Yeah, I mean,
[00:37:00] So, okay, so what I'm hearing here is
[00:37:04] I mean, the problem is there's five different divides.
[00:37:07] But what I'm hearing here is we should rewrite this
[00:37:11] into something that's like
[00:37:14] There's two different ways we can go here.  I'm going to do what I call the simple way first.  The simple way, naive way of doing this is we're going to go in here and we're going to go, okay.
[00:37:27] instead of being derived now,
[00:37:29] Because they think
[00:37:31] Async can't be derived.
[00:37:32] What we're going to do is we're going to go, we're going to rewrite all of these and be like, OK,
[00:37:37] Let's go instead, let's go const.
[00:37:42] A set A.
[00:37:45] equals useState.
[00:37:52] All right.
[00:37:53] Thank you.
[00:37:54] And we can do this.
[00:37:57] a number of ways.
[00:38:00] Do you guys feel like this is the first thing you would try?
[00:38:04] I could be wrong, but my gut is this is the first thing
[00:38:08] that most developers would try.
[00:38:12] Um,
[00:38:13] This is why I was like tempted to fork so that we didn't like we could get back to the base state.
[00:38:22] I did save...
[00:38:24] at that base state but and then what you could do you can do something like what if we made it so that
[00:38:29] Use effect.
[00:38:32] Um...
[00:38:36] And then we can be like divide.
[00:38:39] and the use effect depends on n, right? And then we can be like,
[00:38:43] divide
[00:38:47] Um...
[00:38:51] N1
[00:38:53] then
[00:38:55] that
[00:38:56] Hey.
[00:38:57] That looks pretty good. What's wrong here?
[00:39:00] All right.
[00:39:02] promised number, why doesn't it know that n is?
[00:39:08] Should know that n is a number, right? Number.
[00:39:11] number
[00:39:15] - Okay.
[00:39:16] Because I was just thinking we'd just do this a few times.
[00:39:21] Set.
[00:39:23] B
[00:39:25] Set.  See.
[00:39:28] that the
[00:39:30] Set E.
[00:39:34] I mean, we've seen a lot of this code out in production.
[00:39:43] On a side note, as a view developer you use Divide Composable, but what would the logic be inside your use Divide Composable?
[00:39:52] Does view have an async primitive?
[00:39:56] Oops.
[00:39:58] Or do you just throw synchronously and then the suspense boundary picks it up?
[00:40:10] Well, the rendering isn't what's triggering, it's the button press that triggers it.
[00:40:15] Oh, you're saying with this solution,
[00:40:19] Well, I mean, initially you need to load the data, right?
[00:40:25] Because you can't show the initial screen, right?  So, like, if we do this now...
[00:40:31] Okay.
[00:40:36] Oh yeah, you know what it is?
[00:40:41] We need to make sure that we don't return
[00:40:44] Mm-hmm.
[00:40:45] Promise void is the cleanup function.
[00:40:48] Let's fix this up. We actually want these to
[00:40:54] Be like this.
[00:40:57] Thank you.
[00:40:58] Did I get it?
[00:41:03] There we go. Nice.
[00:41:07] Right, I need to update my numbers. Two, three, four, five.
[00:41:20] Thank you.
[00:41:21] Because like the funny thing is like if I didn't actually do the first trap that we'd probably all get into.
[00:41:29] Because the first trap we'd all get into is we put undefined here, and then...
[00:41:33] Undefined is going to crash.
[00:41:37] because
[00:41:39] you can't to fix it. So I'm going to set it to zero, but zero isn't
[00:41:45] Correct, right?
[00:41:46] Thank you.
[00:41:48] Like this technically works when I press a button
[00:41:53] they all update randomly. That was the kind of thing. So they all come back at different times.  So we'll see five, like the five updates right away.
[00:42:01] So like if I make this, you know, like let's add an offset plus
[00:42:05] 400 so we can
[00:42:08] see the difference here, and I do it, you're going to see like
[00:42:13] And then if I like
[00:42:15] Kick it a few times.
[00:42:17] Luckily,
[00:42:18] It's like we I wonder if we
[00:42:22] If I click it and the randomness is like two variable, like instead of plus 400, I was like,
[00:42:29] Let's make it random times like,
[00:42:32] 2000?
[00:42:33] If I double click it, I think it's possible
[00:42:37] that will get a wrong number when I click it, depending on the randomness timing.
[00:42:44] This looks still fine. What if I go 1, 2, 3?
[00:42:49] Did any of these run out of order? Yeah, here we go. 6 divided by 2 equals 2. 6 divided by 3 equals 2.  Something here isn't right.
[00:43:00] Thank you.
[00:43:01] Thank you.
[00:43:05] Okay.
[00:43:13] Thank you.
[00:43:17] Yeah, yeah, yeah, you know, the UI is inconsistent. Yeah, this is this is kind of awkward.
[00:43:22] You can briefly get this, but it's even worse than this, like I just showed. We can also land
[00:43:28] in the wrong in the wrong state.
[00:43:31] Um...
[00:43:33] Right?
[00:43:34] So like,
[00:43:36] How do we stop that?
[00:43:42] One thing we can do to stop that is we can add promise cancellation. We can add abort controllers.
[00:43:48] Right?
[00:43:49] That seems reasonable.
[00:43:51] Um...
[00:43:53] We could.
[00:43:53] or like some kind of like cache identity with a timestamp and then use that to cancel it.
[00:44:00] Um,
[00:44:03] And when we first load the page,
[00:44:09] We're also showing
[00:44:10] A mic.
[00:44:12] a bunch of zeros and stuff like this. It's kind of terrible. So maybe we need a way of
[00:44:18] of
[00:44:21] OK, let's read this.  Think of this. So separate effects isn't good.
[00:44:25] Maybe what we should do is like
[00:44:27] promise all
[00:44:29] Okay.
[00:44:30] Um.
[00:44:32] I don't know, like...
[00:44:35] We can maybe write one super effect.
[00:44:39] and be like, what if we like,
[00:44:42] Have it depend on N.
[00:44:46] and then be like,
[00:44:50] We can just take like this...
[00:44:55] logic, right? We could just be like,
[00:44:59] Could be like...
[00:45:01] Promise.all.
[00:45:06] 5 by 1
[00:45:08] divide by two three four five it's right one
[00:45:15] to
[00:45:17] Thank you.
[00:45:18] three
[00:45:20] Thank you.
[00:45:20] or
[00:45:22] Thank you.
[00:45:23] Five, I have one too many.
[00:45:26] And then we could be like...
[00:45:29] You can call like this const
[00:45:35] Thank you.
[00:45:36] Oh, actually, no, we're not going to do async await with it.  Because I mean, we could wrap it in a self invoking function,  but we're just going to then it--
[00:45:44] and then take the
[00:45:45] Um,
[00:45:47] Did I do something wrong here?  Oh, right.  It's an array, isn't it?
[00:45:51] And then we are going to
[00:45:56] Destructure our array.
[00:46:00] Um,
[00:46:03] Okay.
[00:46:05] Thank you.
[00:46:06] And to like a one
[00:46:09] 8.
[00:46:10] B1, B1,
[00:46:14] E1, E1.
[00:46:16] And then we can
[00:46:19] Call
[00:46:21] that
[00:46:22] A, A1, A1, A1, A1.
[00:46:25] Set.
[00:46:27] And...
[00:46:28] V1...
[00:46:29] And so on. I mean, actually, I could probably use a for loop with an index here.
[00:46:34] although the variables aren't named with an index.
[00:46:37] Then I'd have to use string manipulation. Screw this. I'm just keeping this easy.
[00:46:41] for our purposes.
[00:46:43] Set E, E1, E1.
[00:46:46] Okay, so maybe this is a bit better
[00:46:49] And we don't need all these effects.
[00:46:51] clean that up a little bit what's going on so we're zero oh and then we're good and then when i click
[00:46:57] See the two for a bit, but like this at least feels saner.
[00:47:05] And I don't think it's possible anymore.
[00:47:10] I could be wrong, but I don't think it's possible any...
[00:47:14] I mean, he did a weird glip thing. Is it possible?
[00:47:19] Okay.
[00:47:20] to get the wrong it might be still possible to get the wrong answer if we're like really really unlucky like if
[00:47:25] If.
[00:47:27] Yeah, let me do something really fast.
[00:47:34] I mean, I'd have to click it a few times, but it's possible that if the full total
[00:47:39] amount it took
[00:47:41] to load was shorter for a later one than an earlier one, then we can still see something like five, like the sixth of, like we won't have the individual lines tear, but we might see like the completely wrong answer. Like we might see the answer for four when we're showing five.
[00:47:57] Yeah, it's still possible to have them all at the same time, yes.
[00:48:04] Thank you.
[00:48:07] Thank you.
[00:48:12] Thank you.
[00:48:13] Yeah, and it's kind of wrong while it's loading, too.  I mean, we could...
[00:48:19] We could do something like
[00:48:21] add like a yeah I mean we I mean let's why not let's let's do that let's add like a
[00:48:26] a loading state, right?
[00:48:28] const
[00:48:30] loading.
[00:48:32] that loading
[00:48:34] like, the, like, use state.
[00:48:37] I don't want to think how many times these components are re-rendering.
[00:48:42] But we could do something like set loading.
[00:48:47] I mean, we could have said it's true to begin with, but...
[00:48:50] I think we should do it every time.
[00:48:53] Set loading true, and then set
[00:48:57] loading
[00:48:59] false
[00:49:02] It seems reasonable, right?
[00:49:04] And then we could do something like
[00:49:07] If it's loading,
[00:49:08] Um,
[00:49:10] We can do like a turnerary here or something, right?
[00:49:12] Could be like.
[00:49:15] Like...
[00:49:16] loading.
[00:49:19] Otherwise...
[00:49:23] pregnant.
[00:49:30] Fragment.
[00:49:40] Thank you.
[00:49:43] loading. Okay, nice. And then let's give it dot dot dots. In fact,
[00:49:48] You know what?
[00:49:50] Let's put the button in here too, 'cause...
[00:49:52] We...
[00:49:53] I could go either way. We don't necessarily need the button in, but let me actually make this a...
[00:50:02] P
[00:50:04] Thank you.
[00:50:05] Just something else.
[00:50:07] It's its own line or something. Peace.
[00:50:11] P-block, stupid, yeah, I think so.
[00:50:14] loading yeah okay
[00:50:15] Possible. Okay.
[00:50:17] Better, right?
[00:50:18] Wait, what?
[00:50:21] This is a great experience.
[00:50:24] Thank you.
[00:50:26] Oh.
[00:50:27] Thank you.
[00:50:29] The loading goes away sometimes...
[00:50:35] it's sometimes updates after the like the two problems.  First of all, I find it very jarring that the loading is just keeps like unearthing my UI.  But secondly, sometimes the loading goes away.
[00:50:46] Um...
[00:50:47] and then you see an old value and then the updates come in.
[00:50:51] So it's like not completely been protecting us.
[00:50:56] Thank you.
[00:50:58] Thank you.
[00:51:06] Yeah, I mean, we could add auto cancellation on the set state.
[00:51:11] But we also have to manage the loading state.
[00:51:17] I mean, I don't think this I'm using react because it's you guys should all be familiar with react. This is not a react problem. This is like an almost everyone problem.
[00:51:29] like,
[00:51:31] some had slightly...  Use Svelte 3.
[00:51:35] it's going to look like this. Like, uh,
[00:51:40] Like, this is not...
[00:51:42] Don't mistake me for this as an attack against React.
[00:51:47] This is just amazing.
[00:51:49] And React has better tools today.
[00:51:57] Thank you.
[00:52:00] Yeah, yeah. Oh yeah, yeah, yeah, yeah. We should make loading a counter. That's a good idea. Yeah, let's do that. So now loading is a counter and then we can do like a Boolean check. So we can make it a zero.
[00:52:12] and then set loading equals L
[00:52:16] L plus one.
[00:52:19] Set loading, yeah. This is a great technique. I've definitely used this one before. L minus one.
[00:52:27] Now,
[00:52:28] Everything goes good.
[00:52:33] It should only ever show and not flat flicker anymore.
[00:52:38] Success, sort of.
[00:52:43] I mean, it's...
[00:52:45] I mean,
[00:52:49] It's not bad.
[00:52:51] I mean, I...
[00:52:53] It doesn't quite feel like my old synchronous app, you know, where I could just click the button and the number's updated. It's kind of jarring. You know, every time I do something, I get a loading spinner jumping back at me.
[00:53:06] but not bad.
[00:53:08] handles initial load. I don't mind this initially when you're telling me when the page loads, I'm like, okay, this stuff hasn't come in. But it's really disruptive when I'm clicking my button and it's like, okay, yeah, so that and then I do, what if there was something below here just like jumping on the layout? I mean, we can be smart with our CSS and not do that, but.
[00:53:26] It's like a little bit disruptive.
[00:53:33] Thank you.
[00:53:35] Thank you.
[00:53:36] Yeah, yeah, yeah, exactly. React has known this has been a problem for like a decade. That's why they started working on this stuff.
[00:53:45] Um,
[00:53:46] Thank you.
[00:53:53] Thank you.
[00:53:54] I mean, to be fair, with this setup, I don't think we get...
[00:53:59] I don't think we get the 11 divided by 1 is 10 problem anymore.
[00:54:03] Like, I think we have produced a...
[00:54:06] a synchronous UI, and we did it basically through the loading counting. Another option
[00:54:16] Is it possible? It is possible for the system to still screw up, though.
[00:54:21] I mean, I'm not probably going to be able to pull this off, but if I...
[00:54:25] click a certain random number of times
[00:54:27] it is possible that we'll see like
[00:54:30] the 4 divided by 1 and see the answers for 3.
[00:54:35] I don't know if I'll be able to
[00:54:37] Pull this off.
[00:54:43] I got it, there we go. 9 divided by 1 is 8, 9 divided by 2 is 4, 9 divided by 3 is 2. So,
[00:54:49] We still need...
[00:54:51] promise cancellation in this model.
[00:54:57] Thank you.
[00:54:59] Thank you.
[00:54:59] Thank you.
[00:55:01] Thank you.
[00:55:03] Right? Like,
[00:55:05] We still need to know that for this particular operation,
[00:55:08] And there's an easy way for us to do this, actually.
[00:55:14] I mean, I don't know where to store it here because the components rerun like
[00:55:19] In like solid or view or somewhere where you have a setup function, you could just like set something outside, like be like this is a variable it stays. I mean, I can make a ref.
[00:55:29] I mean, I hate making a ref. Should I make a ref? I mean, this is more picking at React.
[00:55:34] But I could be like,
[00:55:36] promise ref equals use
[00:55:39] Use ref.
[00:55:42] Thank you.
[00:55:44] Is that right? He's ref.
[00:55:47] Don't get me wrong, this could just be like a really-- some React developer could be like, "Why are you doing this? This is just dumb."
[00:55:54] I'm just trying to
[00:55:57] What does useRef get?
[00:55:59] Does it get an initial value undefined?
[00:56:02] Okay, beautiful.
[00:56:03] And then I could be like,
[00:56:05] Promise.
[00:56:08] Raph.
[00:56:09] Dot.
[00:56:10] Current.
[00:56:11] equals
[00:56:13] This, right? Is that right?
[00:56:17] Thank you.
[00:56:19] Promise any
[00:56:24] We're undefined. I'm not worrying about like a abort signal. I could wire a freaking abort signal up, but there's no actual fetch in here. So I'd have to do all this stuff myself. Maybe that's a nicer thing. But honestly, from our perspective or you, our perspective, we don't care about abort signals. We just need to like know to cancel. So we can go. So it's actually kind of simple. We can go like.
[00:56:45] Um...
[00:56:47] We got a promise ref and then when this comes back in,
[00:56:50] what we need to do is something along the lines of like,
[00:56:54] We always need to decrement the loading because we need to make sure that
[00:56:59] It doesn't.
[00:57:01] stay counted. But before we set A through D, we can do something like
[00:57:06] If
[00:57:07] Promise ref.
[00:57:09] dot current
[00:57:11] equals
[00:57:13] Thank you.
[00:57:14] Um...
[00:57:18] Promise.
[00:57:21] or doesn't equal promise, we're going to return.
[00:57:24] Thank you.
[00:57:25] And you might be like, what's promise? Well,
[00:57:28] That was my bad. We need to
[00:57:31] Thank you.
[00:57:33] Thank you.
[00:57:35] Thank you.
[00:57:36] We need to create a locally scoped variable.
[00:57:40] So,
[00:57:41] What this does...
[00:57:43] Thank you.
[00:57:45] is
[00:57:46] This is the simplest way to do cancellation, essentially, I think.
[00:57:52] All you do is you basically, in the scope of this function, create a reference to the promise you're doing, and then have an outside scope.
[00:58:03] Here, actually keep track of the reference.  And then when it finishes, if you aren't the last promise that ran, we're going to just ignore your results.
[00:58:12] Right. So there we go.
[00:58:16] So now, in theory, I shouldn't
[00:58:19] I mean, it was hard to do already, so confirming that this doesn't happen anymore is going to be hard.  But I shouldn't be able to...
[00:58:25] do what I just did where it breaks.
[00:58:28] We actually...
[00:58:29] cancel, um,
[00:58:32] we cancel setting the downstream stuff.
[00:58:34] Because, I mean, don't get me wrong, abort controllers technically probably...
[00:58:37] better, but most of the time it's too late.
[00:58:40] Things already gone to the server, like you're getting it, like maybe you can stop it from processing the return JSON or something. But effectively it doesn't make any difference compared to just not setting the signals or the state. So.
[00:58:53] Okay.
[00:58:54] I think we have a consistent...
[00:58:56] model
[00:58:57] Um, now.
[00:58:59] Um...
[00:59:01] I'm not...
[00:59:04] Super content with the DX though.
[00:59:11] Thank you.
[00:59:17] Thank you.
[00:59:20] Thank you.
[00:59:21] I mean, we could wrap this behavior in a primitive, right?  And in a sense, you're kind of getting to where...
[00:59:29] like
[00:59:30] 10 stack minus the caching ability. Well, but in react, you kind of need caching anyway. So like, like,
[00:59:35] Like this is kind of a cache.
[00:59:37] If you look at this,
[00:59:38] Like, how far do we go from keeping this promise to caching it so that like the next time the same value for end comes, we can use the same promise? Like we're already...
[00:59:49] well on our way there.
[00:59:56] Thank you.
[00:59:57] Thank you.
[01:00:02] Yeah, yeah, yeah. That's kind of what I'm doing. The problem is
[01:00:06] Boolean isn't enough. You need to actually have a reference.
[01:00:09] This looks like Remix 3.
[01:00:12] Yes, kind of intentionally so. Maybe, I don't know.
[01:00:27] Yeah, I mean, you're right.  We can simplify this a bit because you're right.  We don't need separate state.
[01:00:32] We.
[01:00:33] Um...
[01:00:34] 'cause...
[01:00:35] Originally we were treating this as a separate state, but because it only ever gets all set at the same time now, we don't need
[01:00:42] Separate state.
[01:00:43] But...
[01:00:45] We do need the separate loading indicator, because we have to handle multiple in-flight, and we do need...
[01:00:52] the cancellation.
[01:01:00] Thank you.
[01:01:02] Do it inside the use effect and you don't need the problems right here.
[01:01:06] I'm not...
[01:01:07] Sure, that's...
[01:01:08] true, you need some, you need, the problem is this, you, the, the, the inside the use effect is this, like where you're like, okay, I have the reference. So, cause like, if I set this to true,
[01:01:20] And then
[01:01:21] I need something to check it against that exists outside of it.  Cause every promise is going to think it's the chosen one.  You need a sequence ID, a promise reference.  You need something, right?  Cause otherwise like,
[01:01:33] True.
[01:01:36] Like when it finishes, it can clean itself out, but it's not about when it's
[01:01:40] Okay, so we're suggesting
[01:01:43] Yeah, I think you need something internal to identify itself and you need something external that keeps track of what the current is.
[01:02:01] If it's a single response, there's no need for cancellation because you can no longer come in and out of order.
[01:02:07] Okay, so you're saying like,
[01:02:09] batch it on the exit side.
[01:02:13] I mean...
[01:02:15] All of this stuff has nothing to do with reactor or UI framework though, right?
[01:02:19] Like...
[01:02:20] Well, everything I'm describing here is us trying to patch the fact that this is the only tool we have at our disposal.
[01:02:30] Thank you.
[01:02:34] Thank you.
[01:02:35] Thank you.
[01:02:37] Yeah, I mean, you could also create a buffer, right? Like a sequence, keep more stuff in memory. There's a trade off to that. But yeah, but the buffer isn't guaranteed to be in order, actually, because our responses are coming back.
[01:02:50] randomly. So we need, I mean, unless you allocate a space first, again, this is there's a systematic
[01:02:58] thing there where a buffer works fine.  If you go at the beginning,  you go,  this is your index.  So when it comes in,  it goes,  I'm loading,  I'm loading,
[01:03:05] Index 3.
[01:03:07] And I'm going to write the index three.  And then four comes in.
[01:03:10] and goes, "I'm going to write to index 4." And then the UI goes,
[01:03:13] Okay, on completion, I'm only going to...
[01:03:16] show index for or the latest index. It's all the same mechanism. We're just describing slightly different variations on basically doing the same sort of thing. I think the only reason I lean towards promise ref is because it's very close to how you would do it in actual caching solution.
[01:03:34] you'd use a key, which is kind of like the slotted index you're talking about, but like categorically same sort of solution.
[01:03:44] Are we writing React code? Did we give up on solid v2? Yes, that's exactly it. We were  talking about how much we love using async in systems that don't consider async. Now,  don't get me wrong, modern React does consider async. I just want...
[01:03:59] to kind of clarify, because
[01:04:01] This...
[01:04:02] I think
[01:04:03] is passable or some variation of this. I'm getting a lot of suggestions from chat, but I haven't heard anything. The closest thing that I've seen that actually that's been suggested that's kind of actually fundamentally different is actually
[01:04:14] storing the promise inside the use state and then having the
[01:04:20] Bent.
[01:04:21] Write the new promise to the use state. The only challenge with that is you still need something to decode
[01:04:29] the promise back, right?  Which is like what use does in React 19.  Without use,
[01:04:36] I think you're going to still end up using something like use effect or like
[01:04:41] Like...
[01:04:42] like kind of like make one of your memos on pure or something,  you're going to use some,  which is fine.  Like these mechanisms are fine.  That's basically how you make react query or like a primitive when you don't  have use or you don't have modern stuff.  Yeah.
[01:04:54] But like,
[01:04:56] it's
[01:04:57] These are all the same sort of types of solutions.
[01:05:03] Thank you.
[01:05:04] Thank you.
[01:05:06] Thank you.
[01:05:07] Thank you.
[01:05:09] Thank you.
[01:05:10] Thank you.
[01:05:13] The more we do all these bug doors, our code looks... I mean, this was a simple situation here.
[01:05:19] Um,
[01:05:20] Well, as I said, we're lucky that we started with zero because we knew we were going to hide.  Like if there was a scenario where something downstream actually depended other than UI and you couldn't start at zero, you actually had to say this was undefined for some reason.
[01:05:32] then like
[01:05:33] This gets even more fun because I'm like, I mean, let's...
[01:05:36] Let's do it, because this is lying in a way that I'm uncomfortable with.
[01:05:42] So we wanted we want to actually
[01:05:46] Let's let's make this a little bit.
[01:05:49] Better.
[01:05:50] right we i mean i guess most people you guys don't use undefined right you guys use null
[01:05:54] Null's a cooler thing? Null? Okay.
[01:05:57] It's new notes.
[01:05:58] Let's do it's number...
[01:06:02] or null.
[01:06:10] Oh, so I'm like, why did that not work? Do number and all.
[01:06:15] number or no number or no number or no number or no
[01:06:19] um
[01:06:20] And.
[01:06:21] Uh...
[01:06:27] Luckily for this example, we don't have to...
[01:06:32] then we can do something like
[01:06:34] A
[01:06:38] Thank you.
[01:06:40] Let me just do something like, because now the UI concern, which is kind of like where it belongs,
[01:06:45] Do something like this.
[01:06:47] can update our
[01:06:51] A if there's no, it's the other way around.
[01:06:54] It should be actually a and like this, yeah.
[01:06:58] B and... and just hope that A, B, and C are never zero.
[01:07:02] I mean, we can...
[01:07:04] That's a whole other bug that we could add.
[01:07:09] Um.
[01:07:11] Thank you.
[01:07:16] Yeah.
[01:07:17] better.  And yeah, I mean, let's say not equals null.
[01:07:22] Just in case these ever were zero.
[01:07:26] I think this is a
[01:07:27] better approach.
[01:07:31] We could also hoist this out, perhaps.
[01:07:38] Thank you.
[01:07:39] We could make it the same object, put the whole thing in the ternary, like loading in or null or like,
[01:07:47] There's a few options here, but I think
[01:07:51] I think I'm okay with this, recognizing those shortcomings.
[01:07:59] Thank you.
[01:08:05] Yeah, how to do pending states is unknown at the moment.
[01:08:20] Sure, let's pull this out. Use effect fetching data with effects.
[01:08:24] Use effect
[01:08:28] fetching data with effects.
[01:08:36] Oh, actually this is coming from Twitch. That's beautiful. I can actually copy the exact link.
[01:08:41] Thank you.
[01:08:42] YouTube I can't, so...
[01:08:44] Let's do this.
[01:08:52] Oh, yeah, yeah, yeah, yeah, yeah, yeah. This is like the on cleanup pattern.
[01:08:58] Yeah, yeah, yeah. Yes, yes, yes, yes, yes, yes. Okay. Yeah, actually, and this is the pattern I use in solid all the time.
[01:09:06] Yeah, that's a little cleaner than the ref. The ref is closer to how you'd actually do it if you're implementing a cache system. I've been doing that so long, but you're right. I...
[01:09:13] Sorry, yes, yes, this is the-- I do this--
[01:09:17] I used to do this all the time when I was writing like solid code like seven, eight years ago, like before.
[01:09:22] like 2017, 2018...
[01:09:26] style like solid code
[01:09:28] Um,
[01:09:30] Yeah, yeah, yeah. So what they're saying is instead of doing a promise ref,
[01:09:34] You...
[01:09:35] you can handle cancellation
[01:09:38] by
[01:09:42] Thank you.
[01:09:43] Thank you.
[01:09:48] Thank you.
[01:09:51] You can kind of do something like this and then
[01:09:54] You know when it reruns, you can get away with like...
[01:09:57] You'd be like,
[01:09:59] Done equals true.
[01:10:02] And then
[01:10:05] Thank you.
[01:10:06] if done return, essentially.
[01:10:10] And now you know that like when...
[01:10:14] when the subsequent ones happen, they're going to call done true
[01:10:18] on the specific
[01:10:20] previous ones, which just cancels them out. And then, yeah.
[01:10:24] This is a little bit cleaner.
[01:10:27] As I said, the other approach is closer to how you'd actually do calf management, but
[01:10:31] Yeah.
[01:10:31] Sorry, it took me, I wasn't thinking about the cleanup function and literally this is
[01:10:37] This is probably the most common way to do this, definitely.
[01:10:41] Um...
[01:10:42] Thank you.
[01:10:48] Thank you.
[01:10:54] Yeah, yeah, yeah. They don't want you to do this either. This is just like fundamentally, like I did this pattern a ton. Like in Solid, I'd just be like on cleanup.
[01:11:06] promise that like and then just do this done check the internals of most async primitives work a bit like this when you actually make one like uh
[01:11:15] If I showed you SolidSignals 2.0 async handling,
[01:11:20] It's basically this, more or less.
[01:11:25] It's not anymore actually because I do defer disposal.
[01:11:29] to manage...
[01:11:31] Bye.
[01:11:32] Um...
[01:11:34] transitions without working but like
[01:11:36] Conceptually, this is an okay place to be. Okay, so
[01:11:41] This is pretty good. The only problem with this is that
[01:11:47] the UI unloads on us while we're waiting.
[01:11:50] It would be nice if it didn't.
[01:11:53] Um...
[01:11:56] I wonder if we can make it not unload.
[01:12:00] where we can do something where it's like,
[01:12:03] Um...
[01:12:04] we have some kind of state. I mean, it doesn't even need to be that reactive the way like
[01:12:09] Thanks.
[01:12:12] It's never going to trigger...
[01:12:16] It's kind of like...
[01:12:20] How would we do this?
[01:12:24] The component reruns again. I mean, I don't like making this state. It could be a ref, but I guess
[01:12:29] It doesn't matter. Const
[01:12:32] Thank you.
[01:12:32] Loaded.
[01:12:35] that
[01:12:36] Loaded.
[01:12:37] This is going to be my easiest way to do it. You guys probably will have a better way of doing it.
[01:12:44] It's possible that we should get rid of loading, but for now what I'm going to do
[01:12:48] is
[01:12:49] Just say,
[01:12:51] Oh right, it's actually trickier than this because
[01:12:54] It's...
[01:12:56] It's
[01:12:57] here
[01:12:59] Actually, is it even here? Yeah, it is here the first time.
[01:13:03] loaded
[01:13:05] I think.
[01:13:07] Bye.
[01:13:11] No, and then
[01:13:14] I just don't want to get rid of loading yet until I know that I've done what I need to.
[01:13:19] Oh wait, that didn't work.
[01:13:21] Bye-bye.
[01:13:22] Loaded was false.
[01:13:27] And then when it finishes, I set loaded to true. So shouldn't it be
[01:13:32] Oh right, it's the opposite logic.
[01:13:36] It's not loaded.
[01:13:37] It's like this.
[01:13:44] That's five updates too soon though. Like we're getting better.
[01:13:49] Right.
[01:13:51] This is starting to be a little bit better, but the five updates too soon.
[01:14:02] Yeah, I mean, I can remove loading now probably. I didn't want to get ahead of myself.
[01:14:08] Oh, okay. But...
[01:14:11] We now need a way of making...
[01:14:14] fix not update
[01:14:17] too soon. So,
[01:14:22] Thank you.
[01:14:22] I mean...
[01:14:23] Okay, let's get rid of loading. We don't really need loading anymore.
[01:14:27] We want the cancellation, but
[01:14:28] We
[01:14:29] were
[01:14:31] Let's get rid of loading.
[01:14:35] I mean, I have an idea.  You guys have better ideas, but we can make const...
[01:14:42] uh
[01:14:45] Visible.
[01:14:48] n equals like
[01:14:50] Maybe something like
[01:14:54] Oh no, maybe we want loading. See, I'm too much of like a reactivity person, right? Because the way I would do this,
[01:15:01] is...
[01:15:03] I would...
[01:15:04] Keep loading.
[01:15:06] And then what I would do is something like
[01:15:09] const visible
[01:15:12] And
[01:15:13] is a used memo. Like, I make the calculation that depends on
[01:15:18] N
[01:15:20] and loading.
[01:15:24] And then do something like
[01:15:27] Thank you.
[01:15:28] Probably something like use the previous value.
[01:15:33] So like loading--
[01:15:35] previous value otherwise end,
[01:15:38] or something like that.
[01:15:41] Does that make sense? And then like... everywhere... except for the button, I wouldn't mind the button updating, but everywhere else here, I would just replace this with like...
[01:15:53] Sorry, I have to place this whole thing apparently.
[01:15:56] Do do.
[01:15:58] I mean, I may be a little bit off base here.
[01:16:00] Maybe visible n?
[01:16:04] Does that work?
[01:16:08] No.
[01:16:11] Not quite.
[01:16:16] Thank you.
[01:16:18] Thank you.
[01:16:22] Yeah, yeah, yeah. I mean, we have to keep track of all stale values separately. That's the key part here.
[01:16:29] Why is this not working? Let's just think through this a bit.
[01:16:32] If we're loading,
[01:16:34] Then we return previous.
[01:16:37] And then when we're done,
[01:16:42] loading goes to false, we return n,
[01:16:45] which would be good.
[01:16:46] And then
[01:16:48] We go to loading again.
[01:16:50] Previous should be the previous
[01:16:53] And so what am I doing?
[01:16:55] I think.
[01:16:56] It's not working.
[01:17:00] Why does it go to undefined?
[01:17:03] Oh, right. React doesn't do this.
[01:17:07] Thank you.
[01:17:09] Thank you.
[01:17:09] I forgot, they don't have self-reducing memos. That's a solid-only thing. That's why this doesn't work. I'm like dumb. I'm so used to using solid.
[01:17:18] we actually
[01:17:20] Um...
[01:17:23] Should we?
[01:17:25] keep a reference
[01:17:30] I mean, maybe this is just easier to handle a state.  You know, I don't want to think about how I derive this.  That would have worked in solid, but for React,
[01:17:38] I'm going to...
[01:17:40] Just...
[01:17:42] Do something like this and then maybe like
[01:17:48] get rid of the whole loading thing, we don't need to derive it from loading. This, we can just,
[01:17:53] do something like
[01:17:56] When we're down here, we can go like set,
[01:18:00] visible...
[01:18:02] And
[01:18:03] to n.
[01:18:08] Thank you.
[01:18:12] Set visible and end.
[01:18:19] And then we initialize the state n
[01:18:23] And then...
[01:18:25] Yeah, this is probably the easiest way to do it.  And then I click on it.
[01:18:28] It updates.
[01:18:30] shows
[01:18:35] Oh, actually I want to add loading back for one more thing because I don't hate this, but
[01:18:41] I don't want to get rid of loading indicators completely.
[01:18:47] Sorry, so what I want to do is
[01:18:51] I'm going to keep this
[01:18:54] And then I'm going to
[01:18:56] go back until it went loading there.
[01:19:00] Thank you.
[01:19:01] Thank you.
[01:19:02] And then I'm going to change this.
[01:19:05] to this.
[01:19:08] Thank you.
[01:19:09] Thank you.
[01:19:10] And instead of loading, I'm going to rename this a second, but let's call this set
[01:19:14] Visible...
[01:19:17] n to n,
[01:19:21] And then we want to
[01:19:23] Let's instead of loading, because like we already have loaded, let's change this to some other name like pending.
[01:19:29] And
[01:19:31] That pending.
[01:19:33] Thank you.
[01:19:35] Which is funny because it's still a... and then... yeah, sorry.
[01:19:41] Thank you.
[01:19:42] It's a counter but
[01:19:44] It will serve our purposes and then
[01:19:48] We can do something like...
[01:19:50] Um...
[01:19:53] pending
[01:19:57] show maybe like a dot, dot, dot.  Otherwise, we just won't do anything special here.
[01:20:02] And then
[01:20:11] I like that and then the only thing is it shows initially when it's first loading which is weird like I don't care when it's pending so maybe
[01:20:21] Um...
[01:20:23] Maybe it's like if it's pending,
[01:20:25] Thank you.
[01:20:26] and
[01:20:28] loaded
[01:20:30] then we do it. I think I like that.
[01:20:33] So loading... oh wait...
[01:20:37] Yeah, there we go. That looks right. So it's loading to the button. Oh no. Wait, why is this still getting out?
[01:20:50] That's weird. Isn't that weird?
[01:20:54] It should start initially as
[01:20:57] False.
[01:20:59] And
[01:21:00] True.
[01:21:02] Right.
[01:21:04] Is it 'cause of zero?
[01:21:06] Is this because of zero?
[01:21:09] No, zero will be fine here.
[01:21:14] Thank you.
[01:21:16] Thank you.
[01:21:18] Yeah.
[01:21:19] Thank you.
[01:21:20] Right, I mean, I don't really care. I just figured that there's probably some kind of, like, there's, like,
[01:21:26] We just need to know, like give a better affordance.  Like obviously N updating right away tells us that something's changing,  but I'd rather like a better affordance here, you know, like some affordance.  I'm just using dot, dot, dot, but this tells us that the stuff is updating while we wait for it.
[01:21:40] And I'm going to...
[01:21:41] to make this feel, you know, I'm going to bring this back down to like a more reasonable place where it feels like a little bit better so we can go like this.
[01:21:51] Click it.
[01:21:56] Um...
[01:22:00] There's still a loading issue though. I mean that looks bad, not bad. Maybe when I speed up we won't notice it. If you guys can see it that's fine, otherwise I'm not going to stress on it. But yeah, we load, we see the loading.
[01:22:11] See, it flickers, there's like a midstream between it sitting set loaded
[01:22:17] to
[01:22:22] Thank you.
[01:22:25] Thank you.
[01:22:27] It's just weird. I don't know. Whatever. After the fact, it works pretty nicely. We get our instant thing. We have our pending indicator. We see that our work is being done. Stuff doesn't tear. It's self-canceling. It's not bad, right?
[01:22:44] Do you guys agree that this is like...
[01:22:46] I mean, this is why I wanted to keep the original. Let's see if I can, if I'm pretty sure I didn't save. So if we go back here, we can look at our sync example again.
[01:22:57] Yeah, I mean, this catches the spirit of the sync example. Stuff updates, it's consistent,
[01:23:05] Um...
[01:23:08] Thank you.
[01:23:09] Thank you.
[01:23:10] Thank you.
[01:23:12] Thank you.
[01:23:13] uh
[01:23:17] Yeah, I'm gonna fork this one so we don't override by accident.
[01:23:23] I'm going to call it
[01:23:26] async
[01:23:29] Thank you.
[01:23:30] All right. I'm sorry if this took a while, but I think we're in a good place, right? We started with something that like,
[01:23:38] Seemed pretty reasonable.
[01:23:40] you know,
[01:23:42] kind of look like
[01:23:43] this
[01:23:44] where we did some division, we showed it in the UI, did that. And then we got to a place where
[01:23:51] Now we're handling key things like the initial load in weird flicker.  I don't know what the bug is, but whatever.  And then we can click through
[01:23:59] And we have no race conditions, stuff updates, we know it's updating. Like, we could do gray things out instead of the dot dot dot, but you get the concept. We have all the pieces we need to have a fairly responsive UI. It's not jerky like before where the loading was like pulling us out of the app. And, uh,
[01:24:16] and whatnot. This is kind of where
[01:24:20] you probably want to be.
[01:24:22] The only thing again is
[01:24:25] our example,
[01:24:26] started
[01:24:27] as 41 lines of code, essentially.  Like...
[01:24:33] Like, we just, we had a divide function. I mean, ignore the divide function. So it's like 40-some-odd alliance code. We had some calculations and we showed them in the UI. It's fairly straightforward.
[01:24:46] To get here, we added
[01:24:49] Um...
[01:24:50] some
[01:24:51] What do we add? We added the
[01:24:53] the pending indicator,
[01:24:55] We added the loaded indicator, we added the shadow stale value,
[01:25:02] And...
[01:25:03] than we
[01:25:04] manage to coordinate our promises to make sure that we set the right states.
[01:25:09] did cleanup cancellation,
[01:25:12] introduced her
[01:25:13] changed our derived stuff to states,
[01:25:18] updated the UI to use the correct variables, and then do manage null checks,
[01:25:26] And
[01:25:27] Kind of arrived in an okay place.
[01:25:30] Chat's really quiet right now.
[01:25:32] It's been like 5 minutes. Did I lose you guys?
[01:25:35] Is this kind of just obvious? Am I building this up too much? I just want to make sure that we're in a good place.
[01:25:41] Thank you.
[01:25:42] up.
[01:25:42] Thank you.
[01:25:44] Thank you.
[01:25:45] Thank you.
[01:25:45] Thank you.
[01:25:48] Maybe I did really lose chat.
[01:25:53] Okay.
[01:25:55] The only reason that I'm emphasizing so much on this right here is because
[01:26:01] Yeah.
[01:26:04] The only reason that I'm emphasizing on this so much is that because
[01:26:09] Thank you.
[01:26:10] Thank you.
[01:26:11] Look how many new state, I mean, this is not something most people count, but look at how many new points of state that we introduced in our app.
[01:26:19] We introduced one, two, three,
[01:26:23] 4, 5, 6, 7, 8.  Now, you could argue that the memos are already state,  but for me, the thing is, every time you introduce state,  you also introduce the setter,  which means you introduce the possibility of someone...
[01:26:38] writing to it in some random place that you didn't expect. The whole reason React has unidirectional flow is largely a control mechanism. You want to make sure that things propagate in an expected natural way. And it's also a secretly read/write segregation tool by not putting it on the same variable. Obviously, this is just a number, so how can you put a write on it without a compiler or something?
[01:27:02] Effectively what this does is it means that if you're passing down the components, you can only
[01:27:08] You have to pass the setter down.  You have to pass a handler down that calls the setter.  There's no way that simply passing A down or N down
[01:27:15] down or whatever is going to result
[01:27:18] in those things being changed. You're basically creating an immutable interface for control. So every time you introduce more state, it's just something that you have to be aware of. This is a simple example. It's all one component. The state doesn't leave the component. Who cares? Sure. But just, just, just look at
[01:27:34] For me when I look at this stuff I look at
[01:27:37] all these points of potential complexity that invoke from
[01:27:42] the result of the model.
[01:27:49] Thank you.
[01:27:50] Okay, so you said React and I checked out. People shouldn't be so harsh on React. The frameworks you guys are using are probably not much better. They are better at all.
[01:28:02] I know, maybe that sounds like a harsh dish. It's just...
[01:28:05] All right.
[01:28:06] And this isn't even React today.  This is Framework X.  This is pretty much like 80% of...
[01:28:15] I'm not talking about actual frameworks, but a framework code out in the ecosystem, this is probably like...
[01:28:22] a substantially large portion of it, right? This, like, Gen Z or Gen Zero, um,
[01:28:32] kind of look at things. Okay, right.
[01:28:35] But it's important to do these exercises because like this is what I think about when I like look at, you know, Remix 3 reveal or whatever.  Like you kind of work through this problem.  Okay.  So what else?
[01:28:44] Could we approach it a different way?
[01:28:47] Now, I've got the solid 2.0 divide example in front of us.
[01:28:51] And
[01:28:53] And
[01:28:54] If you look at it,
[01:28:58] Um.
[01:28:59] you're going to notice a few things. First of all,
[01:29:03] I could have started this one from the baseline the same way I started the React one from the baseline.
[01:29:08] Because we can look at the baseline and we can get a coffee back and go, okay, so we have a divide function, we have increment state, use memo, and then we have some stuff with two fixed, right?  So I bring that across to solid and we have increment, use memo, divide, two fixed, you know, that...
[01:29:25] This stuff is all identical. The biggest difference here is
[01:29:28] So, um,
[01:29:29] this loading thing, which is kind of like suspense. We recognize here like, okay, when we load, we should have some kind of loading mechanism. The button could be outside like it was in the other example, it doesn't really matter. But
[01:29:42] we probably need a way
[01:29:45] From the UI standpoint, just looking at this fundamentally, even if we start with the same example, we're going to need some way to say, hey, I don't have the data yet. Right? Because we can't.
[01:29:53] do like as much as we have this cool pending state stuff, you know, here where we're showing this, we can't
[01:30:00] show something we don't have.
[01:30:01] We can't get...
[01:30:04] 0.33 when we don't have 0.33.
[01:30:08] Right.
[01:30:09] There's no...
[01:30:11] Like,
[01:30:12] You can keep showing 0.33 while you're calculating for the next couple numbers, but you can't
[01:30:18] So I think as a stable rule, we do need some kind of loading indicator. In our example, the way we did this was by creating a loaded state,
[01:30:30] And then
[01:30:31] by rapping in a turn, in like a turnerary.
[01:30:35] Honestly, this is probably the simplest part of this whole example in terms of adding loading indicators.  Like this one was just like,
[01:30:42] one state that started as false, you know, we,
[01:30:46] and then set the first time because, you know, equality check is not going to keep setting it.  Hopefully, you know, it's just going to...
[01:30:54] I, you know, I mean, it's just,
[01:30:57] It's essentially like
[01:30:59] The...
[01:31:01] the easiest piece. So from a UI standpoint, when you go to async, you definitely need a way of showing some kind of placeholder when the data isn't there. I think that's the fundamental piece. So we do need to add that.
[01:31:13] Now, the rest of this is more interesting, right?  So I'm actually gonna back off here  'cause I wanna get us as close to like the baseline example.  Okay, so this is the baseline example.  Okay, so with the absence of adding
[01:31:28] this loading indicator.
[01:31:29] This is the baseline example, right?
[01:31:32] Um...
[01:31:34] Let's go back to the baseline example and actually copy their divide function.
[01:31:39] Divide function.
[01:31:41] Okay.
[01:31:42] So now,
[01:31:44] we are here. So we're back to baseline. Okay, so
[01:31:47] It loads immediately, you don't even see the loading, and then you click and it updates.
[01:31:51] This is the baseline solid example, right? You have an N, you increment it, you...
[01:31:56] Create a memo. This doesn't need to be a memo. Just like in React, it didn't need to be a memo. We could have just done...
[01:32:04] This, perhaps.
[01:32:05] you know,
[01:32:07] Thank you.
[01:32:08] uh
[01:32:09] Whatever. My point is we're doing some kind of calculation. Maybe it's worth catching. It's in a memo. Whatever.
[01:32:15] Now,
[01:32:17] What do we do to go async from here? As I said, there's two things. We first
[01:32:21] We first acknowledge this loading speed. To be fair, you know what?
[01:32:25] Screw this. It takes me so little effort to reset the demo. I'm going to get rid of loading too.
[01:32:32] Here we are.
[01:32:33] Presto.
[01:32:33] Thank you.
[01:32:34] Blank state sync state in solid. Okay.
[01:32:40] 2.0.
[01:32:45] So what's the first step? The first step we go, okay,
[01:32:49] Um,
[01:32:51] Now we're in the same place. We're like, okay, we know that we have
[01:32:55] A primitive.
[01:32:57] or sorry, we know that we have a divide function that calculates, right?  We're at square one again with solid.  And we're like, we need this divide function...
[01:33:06] to
[01:33:07] be async. So
[01:33:10] what are we going to do? We are going to update our divide function to be async.
[01:33:16] Now, in an async first model,
[01:33:20] it should be able to handle that. So when we load,
[01:33:23] There's some ugly tearing, but when we click our button,
[01:33:30] We aren't seeing tearing. This doesn't update.
[01:33:37] including this until the value is there. If I click it like 10 times,
[01:33:41] or four times or how many times, whatever, you're gonna see that it just jumps once.  We don't have that weird use effect problem, right? We just...
[01:33:54] Stuff is already consistent.
[01:33:56] by its very nature. And the truth of the matter is switching this to return a promise versus a value didn't require any
[01:34:02] code change
[01:34:04] in our application.
[01:34:05] This is the baseline. We had our sync model. We changed it going, okay, instead of dividing being synchronous, now it's async.
[01:34:11] And our code still works.  We did not change any JSX.  We did not change any code in our component.
[01:34:18] It's literally identical.
[01:34:22] Right?
[01:34:23] So,
[01:34:25] But we have some problems. This is not perfect. It's not just like, okay, sync to async, it's done. There are things that we have to consider.
[01:34:32] Right.
[01:34:35] So
[01:34:38] The first thing we have to consider...
[01:34:40] is the thing the the is that when it loads
[01:34:44] it shows it doesn't have all the data so how do we manage that well
[01:34:48] The way we manage that
[01:34:50] is
[01:34:53] Sorry, I should have started the demo this way.  Is we add a loading barrier.  And a loading boundary, sorry,  is kind of like suspense in React, if you've seen it before.  With one key difference is...
[01:35:05] It only runs initially, so
[01:35:08] It loads.
[01:35:09] Sweet.
[01:35:11] But now when we click it, it doesn't trigger again. Right?  So it's kind of like when we went from loading to loaded,
[01:35:18] This loading barrier
[01:35:19] is basically like the,  it's like suspense is like the loading,  whereas this is like the loaded in our previous example.  So now it never goes back to suspense.  It just,
[01:35:32] It just...
[01:35:33] Thank you.
[01:35:34] Thank you.
[01:35:34] you know, it just keeps on updating. But yeah, this is not ideal because you can't really see that something is updating here. You're like,
[01:35:43] Did the UI freeze?  Like if I make this timer...
[01:35:47] Like sure, we're not getting any tearing, we're not getting any weird things like updating out of sync and partials, everything's like working nice, but it's kind of awkward here, right?
[01:35:57] Like...
[01:35:58] What?
[01:36:00] I click a button.
[01:36:01] Oh, is the UI broken? This is not a great base place to see. Like we're used to seeing tearing to at least know that stuff's updating. And in this system, there's no tearing.
[01:36:11] So we're kind of in a weird place.  So far, we haven't really had to change the code  other than having loading somewhere.  That loading could have been in the component.  The loading could have been around the app.  Like, as long as you, like, somewhere say,  hey, when stuff's not ready, show loading,
[01:36:25] you're kind of fine here. That's what's beautiful about things like suspense or these loading boundaries is it doesn't really matter where the async is as long as
[01:36:33] you're reading the values somewhere below it,
[01:36:35] then...
[01:36:37] You know, great.  Like, we'll show a placeholder because we can't render it.
[01:36:40] That's basically what it's saying. Without it,
[01:36:43] It kind of rendered garbage, but with it, you're like, okay, look, we can't render this.  We're not complete.
[01:36:51] Um, so
[01:36:52] We need a way of knowing that.
[01:36:55] The way that... The first thing we can do is we can go...
[01:36:59] Well, let's ask.
[01:37:02] and if it's pending, right?
[01:37:05] or sorry, actually, no, let's actually ask n for the pending value.
[01:37:09] And this is-- you know how in this React divide async example, we had
[01:37:16] we had like a separate...
[01:37:18] visible n that we had to keep in sync.
[01:37:21] This is kind of like the reverse.  Picture that...
[01:37:25] N
[01:37:27] It's more like the other way around where this is like
[01:37:30] N becomes future N...
[01:37:33] Or...
[01:37:35] Pending N.
[01:37:38] All right.
[01:37:39] pending N
[01:37:41] And this just becomes n.
[01:37:45] Right. Because what you're saying is like,
[01:37:49] As far as...
[01:37:52] The user is concerned.
[01:37:54] That's the end that they see.
[01:37:57] I know I'm doing everything...
[01:37:58] backwards here, but
[01:38:00] What if we make this n
[01:38:02] and make this
[01:38:04] pending in, like the end that hasn't committed.
[01:38:09] Now,
[01:38:11] Thank you.
[01:38:13] We do this.
[01:38:16] Thank you.
[01:38:17] And then this one comes from pending n.
[01:38:21] And then when we increment, we set
[01:38:24] pending in
[01:38:27] This kind of aligns a bit more with what I'm talking about.
[01:38:30] Oh, what did I lose?
[01:38:33] The indicator isn't showing anymore.  I must have missed one of the wiring.
[01:38:40] Oh right.
[01:38:42] these
[01:38:43] rely on
[01:38:45] pending.
[01:38:47] and not on N.
[01:38:55] Something else must not be relying on the right...
[01:38:59] thing
[01:39:03] Because this is updating properly, and the pending states are showing properly,
[01:39:07] But the UI
[01:39:08] is not
[01:39:12] Okay, whatever. I don't care enough about the React read-bactor here to actually get this working like that.
[01:39:18] I just wanted to conceptualize it.
[01:39:21] Okay.
[01:39:23] So,
[01:39:24] Thank you.
[01:39:25] Instead, if we ask about pending in,
[01:39:27] Um,
[01:39:28] we can see the number sooner than the updates come in. So this is the in-flight value of n,  rather than the one that's currently visible.
[01:39:38] And then similarly, if we wanted to show some kind of pending indicator, we can go like is n pending.
[01:39:46] Thank you.
[01:39:48] Thank you.
[01:39:49] And then...
[01:39:53] Thank you.
[01:39:56] Kick it as many times as we want.
[01:39:58] And then it only goes away when it's done.
[01:40:01] So,
[01:40:03] I mean, I can't really make the exercise much longer than that. This is essentially the difference with an async first model, right? You sacrifice the fact that the affordances might not be obvious at first because
[01:40:16] Um,
[01:40:17] Well,
[01:40:18] it works async first. You have to actually opt into showing the tearing, but on the positive,
[01:40:26] the only code you needed to change between the sync and the async is the code
[01:40:31] where
[01:40:32] Um...
[01:40:34] basically you diverged from what the sync stuff did.
[01:40:40] was always working a certain way. Now the async stuff goes like, look, I need a loading state. I didn't need that before. I need a way of showing that I'm pending. I need that. I need, you know, I need, I didn't need that before. So
[01:40:50] The code remains basically untouched here.
[01:40:55] And the only difference we had to do by making this into a promise
[01:40:59] was saying, hey, this is loading.
[01:41:02] And
[01:41:04] you know, show me kind of some in-flight stuff so that I have affordances.
[01:41:12] Do you know what React Forget would do in this example? It's basically completely tertiary. React Forget
[01:41:20] actually doesn't help us.
[01:41:23] at all. It removes
[01:41:26] This.
[01:41:30] Yeah, that's what React for Git does for us. It might make it more performant,
[01:41:34] by like memoizing some of these value calls, but it, but from, from your co  perspective, you just get to remove writing this.
[01:41:43] or the React compiler.
[01:41:46] I don't think there's any point trying it.  It literally doesn't help us here at all.
[01:41:54] So we are waiting for everything to complete before we update everything at once and you can escape the pending pending at the end. Yeah, exactly. Yeah. I mentioned previously Svelte is a very, very similar model with new async model. The biggest difference is it's kind of compiler based, but I just I'm talking generically. I'm listening just so I think this is the right direction. The difference with Svelte is that they don't
[01:42:19] batch multiple clicks together. They don't transactionally handle it. They just kind of like, you'll get a bit of a shuffle if you click the thing like,
[01:42:26] Five times you'll get like...
[01:42:29] five results regardless of like, and you do an intro. I think you actually handle cancellation yourself.
[01:42:34] you still have to handle cancellation in the Svelte model, whereas in the future React model,  which I'm not showing here, which requires a few more wrappers, and the Solid 2.0 model,  the cancellation is kind of implicit just from the shape of the design.
[01:42:52] Yeah, the React use stuff does. Because you can get the exact same experience, you just have to
[01:42:58] Um,
[01:42:59] write the code a little bit differently with React 19.
[01:43:04] This example isn't like-- this one would actually be fairly easy.  What you do is you wrap the set n in the start transition call.
[01:43:13] And then...
[01:43:15] Ugh.
[01:43:18] It's complicated enough that I don't...  This is why I'm staying away from this, because...
[01:43:22] memos don't preserve, don't necessarily preserve, um,
[01:43:28] like between renders, like they're like caches, but they're best guess caches.  Like they don't actually like, it's possible like when under suspense conditions that you actually blow away the memo cache.  So you actually have to keep a separate cache for your requests.
[01:43:42] like these divide requests outside
[01:43:44] of the app to actually handle it properly.
[01:43:48] Sometimes you can do tricks stored in the callback of a use state call or something, if it's above the suspense boundary, but if it's below or it doesn't work like that.
[01:44:00] I feel like if I tried to make the React 19 example, I could come up with a really nice, clean example.
[01:44:05] But I would have to...
[01:44:08] like think very carefully about the best way to streamline it and i don't think that's worth the  time we we did this exercise with ricky on the stream
[01:44:15] What's cool about this approach is like literally,  and you can see with some of the other demos,  it's not...
[01:44:21] just doesn't matter. Like, like those kinds of considerations are not what you're thinking about here. You're not thinking about where to place your suspense boundaries beyond saying, Hey, I need a loading indicator. Like that, but like it's.
[01:44:34] It's not like the same sort of like
[01:44:39] Like if you made a reusable component or something, you could like just
[01:44:43] put those pending calls deep in them.  Like you never need to worry about nesting suspense
[01:44:47] from a composability standpoint, only from like a layout UI standpoint, so to speak, because we've kind of
[01:44:55] decoupled them to be single purpose.
[01:45:01] Thank you.
[01:45:06] Yeah, it's very similar to use transition, except you didn't have to do anything.  It's literally like the behavior I'm describing use transition, except where's the use transition call.
[01:45:19] Right. I mean, there are cases where you need optimistic state, but yes, use transition will give you is pending.
[01:45:25] And then if you want the pending value, you can
[01:45:31] create optimistic or use optimistic.  And then when you do the right,
[01:45:37] to to um
[01:45:39] to the set end, you also write to the optimistic state.  As I said, I know people are really interested in the future React solution, which as I said, is way nicer, way, way nicer than this.
[01:45:48] I was just really trying to illustrate why people are looking at different solutions and then
[01:45:53] you're going to be very hard pressed to find
[01:45:57] Like, this is completely doable with React if you add, like,
[01:46:01] 20% more code.
[01:46:03] It's perfectly fine.
[01:46:04] It's just like, and when I say code, I don't mean typing in digital letters.
[01:46:10] Conceptual.
[01:46:12] points in which you need to add more primitives and more set calls and more like start transition wrappers and stuff like
[01:46:19] Structural, not structural, but like
[01:46:22] and use calls and potentially suspense.
[01:46:27] in some cases. It's kind of structural.
[01:46:30] is the best way to put it,  instead of like, it's not like just like,
[01:46:33] character typing. I think those kind of meaning, if someone says your primitive is called computed and yours is dollar sign C,
[01:46:42] those kind of wins are meaningless.
[01:46:44] like,
[01:46:45] Clap, clap, clap, clap.
[01:46:47] like,
[01:46:48] Thank you.
[01:46:49] I think that like
[01:46:51] the structural thing like whether you have to call start transition or not that that that is a more  interesting question right
[01:46:59] But yes, definitely similar. I'm not, as I said at the beginning of this, when I put it out here, I consider the new React stuff like basically in this zone, even if they require extra APIs to get there, just simply...
[01:47:13] because they can't break everyone's code.
[01:47:21] It's the place where-- could you replace loading boundary with show? It is depending. I'm guessing the difference is that loading will show only the first time.
[01:47:28] Yes. And
[01:47:30] The other difference in its kind of subtle is
[01:47:34] Show?
[01:47:36] is going to
[01:47:38] remove those nodes. They can like stay live off screen to a certain degree in some cases and like, like are the on screen ones stay live all the new features showing. But the loading boundary specifically is designed to parallelize that flow so that like, if it like loading boundary doesn't matter because you never go back to it. But like, say like an error boundary, we actually keep
[01:47:59] the nodes a lot. You know what? I have another demo for this. We're done with this demo. Let's,  let's, let's just continue on here. Okay. I'm hoping this demo made sense. I wanted to spend a lot of  time on this first one because I think it's the, like the most essential ones. The other ones are  going to go faster here, right?
[01:48:13] Like,
[01:48:15] Let's move on.
[01:48:18] I think these will go a lot faster.
[01:48:22] This one, I don't even really...
[01:48:25] We've already seen this one on previous streams, so I don't really want to get into it very much.
[01:48:30] But the difference between sync and async
[01:48:33] is...
[01:48:35] is literally, I mean, you can just see
[01:48:37] where the points are.
[01:48:40] if this didn't have a loading boundary,
[01:48:43] But this one is like when you choose a state, it has to load the cities for it.  So when you flip it, there's this.
[01:48:50] All we did to indicate that
[01:48:53] was put in "is pending"
[01:48:55] on the disabled on the select. What's beautiful about this is if this was brought into its own component, like
[01:49:02] Extract it out.
[01:49:03] You could see a component author authoring this way. They're going because cities is the options option. So this would be like my select.
[01:49:12] You could just make a rule that was like,
[01:49:14] like,  like,
[01:49:16] I want my select to be disabled if my options are pending.
[01:49:20] It's that simple because the graph just queries it, right?  It's like, if your options are pending, then we probably shouldn't be selecting from them.
[01:49:28] That's basically the logic here. It's very, very composable.  It doesn't require too much specific thinking.
[01:49:38] But yeah, I mean, this example is fun because again,
[01:49:42] Yeah.
[01:49:43] I don't have to go over this one. If you watch the remix unveil where they show like, oh, we just set the loading and then we do the cancellation with the abort controller. And then because of the way that it works and promise cancellation rejection, we automatically don't have to worry about it. It will only ever get to the setting loading false if it actually succeeds. So like, you know, we have this kind of thing.
[01:49:59] And then...
[01:50:01] you
[01:50:03] I looked at the problem and I was like,
[01:50:06] If I was going to write this without async, I would just be like, here are my states.
[01:50:13] And then I'd be like, my selected state,
[01:50:15] you know, starts as the first state in the list,
[01:50:19] And then
[01:50:20] my city.
[01:50:21] is going to be
[01:50:22] based on the selected state. So I'll show this, it would be like an array of cities,  and the index would be the selected state or key. And then I'd be like,
[01:50:29] Okay, well, and then whenever my cities would start as being the first city in the list, but afterwards I could just set them.
[01:50:38] And like,
[01:50:38] I was like,
[01:50:39] not thinking about async, I would just do it this way. Instead of having a bunch of states write to  each other on events, I would just write this rule and then when I changed it,
[01:50:47] you know, city, state changes,
[01:50:50] Then I select the first city.
[01:50:52] This one changes, doesn't matter. And initially when I load it,
[01:50:56] California is the first in the list, so it's the one that loads.  You know, everything just is perfect.  The fact that I added async to this
[01:51:04] Matters.
[01:51:05] Nothing. And as you can imagine,
[01:51:08] changing this from an array to a function that gets the states,
[01:51:15] actually did not change any of my logic code, did not change any of the way that I drew my UI, did not change this. The only thing I was like, okay, well,
[01:51:24] Maybe we should show some kind of loading indicator when my options aren't loaded.
[01:51:28] And, you know,
[01:51:30] Somewhere.
[01:51:31] You know, I don't want like a bunch of loading spinners on my page.
[01:51:35] I'll just like
[01:51:36] wrap the whole thing in a loading. That's the level of thinking that goes into this. You're  not worrying about province cancellation. You're not worried about coordinating the different async stuff. It's just like,
[01:51:51] I have state.
[01:51:53] I have UI.
[01:52:00] So, okay, this one's an easy example. Let's continue on to the next example.
[01:52:09] I don't think I did anything of note in this one.
[01:52:13] OK, this one's fun.
[01:52:14] Because people misunderstand this example all the time, and I actually really like this example in the current form.  I'm going to do one little modification before we go, which is I'm going to...
[01:52:28] I'm going to remove
[01:52:31] something here. What I want is seconds. Yeah.
[01:52:35] So instead of returning this whole blob, I'm going to return seconds.
[01:52:40] This is a little bit verbose, but I want to get...
[01:52:44] I really want people to understand what this demo is showing.
[01:52:49] This is another good one that's fun to make with Use Effect.
[01:52:53] Um,
[01:53:00] Thank you.
[01:53:02] Oh, so the question, sorry.  So you're invalidating the selected city.
[01:53:06] That's cool. How do you know what to invalidate?
[01:53:10] Thank you.
[01:53:10] I'm not sure I quite understand the question there.  Cause like basically when you set a new value on the signal,
[01:53:17] it tells anything that depends on it that, hey, my values change and then it recalculates. So by wiring up the graph the way I did, where it's like signal, depending on memo, depending on fetching, it just
[01:53:26] it automatically
[01:53:28] Like if you set the state,
[01:53:30] the selected state than the, I mean,
[01:53:35] Let me quickly
[01:53:37] pull this one up again one more time, but when you select the selected state,
[01:53:42] It goes, oh,
[01:53:44] the cities depend on the selected states, so I need to recalculate the cities, which in this case doesn't async fetch, but otherwise could just
[01:53:52] pull the cities from a list.
[01:53:58] Yes, create_memo is derived, and create_signal can also be derived in solid 2.0, which is what I'm showing here. So there's writable derived values and
[01:54:07] and drive values. So the whole logic of the app is right here. It's not a bunch of effects,
[01:54:13] That's what I was talking about. If you do your stuff really event-driven, which is good for certain shapes of problems, you have to reconcile with the fact that you're going to probably introduce more state into your underlying framework.
[01:54:26] And then because the framework's job is to synchronize state, which is fine, but
[01:54:30] Like there's a trade-off here. People go, why are you putting all this stuff in React? You should just handle most of it outside and then just
[01:54:37] tell React to re-render essentially when you do the load. A lot of people use stuff for state,  where it should be refs or shouldn't even belong in it, which is a lot easier to do when your  component runs once. You saw when we were doing the React example, where do we store this? But,
[01:54:53] There's like a double-edged knife to that whole situation because you're kind of like,
[01:55:00] Okay, let's move stuff to the events. But then it's like, what if I have multiple events that touch this on same state? What if like, what if I have to add another drop down to this list?
[01:55:09] I did that test myself.  I'm like, what if I had country in front?
[01:55:13] And the result was like basically just adding two more of these.
[01:55:17] And at that point, I'd actually move the select into a generic component that handled this as pending.  Because if you look at these, these selects are identical.
[01:55:24] It's like select
[01:55:26] I mean, this one doesn't have the disabled option, but it could be disabled.
[01:55:29] options.
[01:55:31] on change,
[01:55:32] Yeah.
[01:55:34] This second thing
[01:55:35] and then iterate over options. These are very generic. So I was able to just go like, okay,  put this in a select component and then basically go like,
[01:55:43] Add two lines here.
[01:55:45] Ha!
[01:55:45] Add another select component. Everything works.
[01:55:49] You have to consider, now there's cascading loading, there's this loading this that loads this.
[01:55:54] This model doesn't have to worry about that. It just resolves itself out. Whereas like in other ones, you'd be like, well, how do you handle this loading state? Does each...
[01:56:03] Like, because here's the real gotcha on this.  It's changing this select list that triggers the loading on this select list.  So this is like, this is what makes this example so beautiful.  It's that...
[01:56:17] you want to make something composable, something that you can just like generically use, you know, in component libraries or whatever. But
[01:56:24] the staleness doesn't derive from your same component. It's not like, "Hey, I'm stale." It's like,
[01:56:31] It's like I'm still because of my inputs, because my options list is out of date because of the work someone else does.  Once you start trying to build out that in a generic way, you start going, okay, well, the logic you put in this change handler for each event starts becoming very specific.  You're like, okay, well, the first select triggers these loading states.  The second select triggers these loading states.  Yeah.
[01:56:53] And you're almost back in this place where we're keeping a counter.
[01:56:58] Right? Like...
[01:57:01] Just from a fundamentals level.
[01:57:06] Thank you.
[01:57:10] Thank you.
[01:57:11] So, okay, let's go back to Spiritskine. Sorry, it's good that we stop on these points. I think it's, this is the part that kind of gets lost when people look at these demos. So, Spiritskine is actually not a hard demo to draw.
[01:57:27] This is synchronous.
[01:57:28] So,
[01:57:30] It's literally triangle and triangle and triangle. And there's one silly driver from the top, which is like,
[01:57:36] How many seconds of a...
[01:57:37] of a lapse basically
[01:57:39] from the whole thing starting.
[01:57:44] and
[01:57:47] And we're using, and then what, yeah, so what are seconds? We have two. We have the seconds that we're showing, which is this, and then there's a lap, which is used to calculate the scaling factor.
[01:57:59] But what's cool about this demo and the reason React created this demo is the scaling factor is handled through an animation.
[01:58:05] it doesn't actually cause any component re-renders.  This whole, like, the stuff, the triangle moving,  it has nothing to do with the children components.  It's literally just a CSS transform on the actual outside,  which is the way you should do this.  You're using animations.  You shouldn't necessarily drive all the stuff through state.  It's kind of expensive.  Like, sure, signals can handle it, you know, but, like,
[01:58:23] Why? Right? So it's smart. But so the only thing if you look at this first component,
[01:58:28] All this stuff is static, doesn't change. X is 0, X is 0, X is 1000.  The only thing that changes is this number that gets sent through, the seconds that get set up on an interval.
[01:58:37] And the idea here is that you've got a whole bunch of components.  And the important part is when you go through the triangle, what you'll see is--  this is why I can even do early returns here, even though solid usually doesn't do early returns.
[01:58:49] because you know that these props are never, ever, ever, ever going to change.  Now, I don't take that back when I'm building generic components,  but when I'm building a demo that I know that all the props are always static,  you'll see they're still always static.
[01:59:01] Um,
[01:59:02] The only thing that actually changes
[01:59:04] is the children, right? See, I made this note here. Just let me copy the React
[01:59:08] example verbatim, even if it's like not very solidy, you know, we should use a show component or something. But my point is,
[01:59:15] the only thing that travels through this whole grid
[01:59:19] is the seconds.  But the idea is...
[01:59:24] The seconds end up just -- I made a calculation here because that's the point in this app.
[01:59:35] get passed to their, as children, props children,
[01:59:40] And then they get passed to their children, they get passed to their children, they pass the children, pass their children. The whole point of this demo is that
[01:59:45] What if every single child in this tree that spans out has to do its own calculation, like expensive calculation, money?
[01:59:54] in here. Like so each number, so we start at the top here of the triangle and every
[02:00:00] single node.
[02:00:00] has to push its calculation all the way through. Now,
[02:00:04] Thank you.
[02:00:05] If we had a really poor system  that was like polling based or something,  it's possible that you might actually see numbers  start updating at the top before they got to the bottom.  You know, like, but almost every system now is synchronous.  We will only flush everything altogether,  which means that...
[02:00:23] If.
[02:00:23] If...
[02:00:24] If there is a legitimate slowdown added, and just a second, I want to see what the slowdown is, ePerformance,
[02:00:32] Yeah, just a second.  I'm going to...
[02:00:35] do two things. I'm going to
[02:00:38] just open some kind of
[02:00:40] Nope.
[02:00:41] thing somewhere where I can just dump this code and then I'm going to
[02:00:47] Go back. Okay, cool. Let's do this.
[02:00:49] So if we make
[02:00:52] If we add a slowdown here,
[02:00:54] I'm going to make it small at first.
[02:00:57] where we're just pretending that it takes something stupid, like 200 milliseconds, to calculate every single one of these nodes.
[02:01:05] our UI is going to start not looking as smooth, especially when we start like,
[02:01:11] interacting with it and stuff. You were like, this is still working, but
[02:01:16] You can see the problem. There's like a thousand circles here and they all depend on the calculations of their parents and they have to show themselves.
[02:01:26] synchronously. They have to stay consistent. That's the rules of AI.
[02:01:30] right? Or sort of a UI. So what are we going to do? And what if it gets worse?  What if like we're taking almost a second and this thing updates every second? Like
[02:01:43] It's going to start...
[02:01:44] Okay.
[02:01:45] We might lose our cursor somewhere. If I move the mouse fast enough, you're going to see it's going to stay highlighted on a different item because it can't even get to rendering it. We're just chugging the whole system out, right?
[02:01:58] And
[02:02:00] And this is not great, right?
[02:02:04] As I said, I don't know how much this happens in real apps.
[02:02:06] But...
[02:02:07] you can kind of see that
[02:02:11] Like,
[02:02:11] This is already kind of a hint. At the point, you kind of go, okay, you know what? I recognize that this is a slow calculation. The first step, you might memoize it to make sure it doesn't happen again. But in this case, we can't save any of the calculations unless we created some external memoization system that remembered the numbers from above.
[02:02:29] Like I could see you creating maybe like a cache where you're like,
[02:02:33] I've already done this calculation in this node, so I don't have to do it. But the assumption here,  even though this is literally just returning the same thing,
[02:02:40] Like is
[02:02:41] like what if it was seconds plus one or something like like that it actually found out me that'd be a better example it's
[02:02:47] is that you don't
[02:02:48] get to
[02:02:50] keep these calculations, right? Like they're, they're, they kind of cascade down through the  whole tree, but we have to show something consistent. Now, if
[02:02:57] Again, we could go here and use useEffect, right?  And maybe make it async, right?  This was kind of like your only option in the past,  but that would cause this weird fanout
[02:03:06] where like
[02:03:07] The first ones would kind of finish, and then the other ones would finish, and then another request would come in, and then they would do it.  Your UI would just look like a Christmas tree, like, you know, light bright, you know, like put it on rotating color mode.  You wouldn't get any kind of consistency.  You'd still get interrupted probably later.
[02:03:25] I mean, it might be smoother, but like...
[02:03:27] It'd be like whack-a-mole. You'd be like, okay, that's a one, that's a two, that's a three, you know.
[02:03:32] You kind of get the picture.
[02:03:34] So,
[02:03:35] How do we...
[02:03:37] offload work in a consistent way well if it's derived if if you know the async is derived which  i was showing in the last example then you don't have this problem because you can both offload  the stuff and again it's just returning a promise here i took the original example which is just
[02:03:53] memo, do some calculation, and I just was like, okay, I'm going to return a promise that set the timer. Could be set time out for all I care. I do my expensive calculation in here.
[02:04:02] And then I just register an on cleanup function in my memo.  It's funny because...
[02:04:07] Effects, people are used to doing cleanup in because, like...
[02:04:12] it's impacting something in the outside world.  If you view async as derived,  it's actually important to also be able to do kind of internal cleanups.  The difference is,
[02:04:23] people aren't listening to things you're doing in here.
[02:04:27] people are only listening to hear. So this is safe because
[02:04:31] it's encapsulated.
[02:04:33] Right?
[02:04:33] So,
[02:04:34] What happens when we do this? Well,
[02:04:38] It's consistent.  It's smooth.
[02:04:40] And it works. So why do I show this demo?
[02:04:43] Because
[02:04:44] Change this from sync to async because I noted that there was a performance issue was just a matter of just figuring out a strategy for deferring the specific work.  I don't lose any consistency in my graph.  And now the performance is great.  It actually scales great.  Like I can do something stupid here.  And like...
[02:05:01] What if taking almost a second is, or whatever, is actually, you know,
[02:05:06] Too good for it. What if the person's on mobile somewhere really slow?
[02:05:12] Okay, we're still smooth with going that. When we interact with it, we start getting a little bit tensed up.  Oh, we're still doing okay here, though. Not bad. It's not slow enough. Let's do six times slower. Okay.
[02:05:20] Let's go. Okay, still smooth. Oh, the numbers stopped updating, but the animation stays smooth. When I stop moving my mouse,
[02:05:26] Okay, the numbers kept on going. So we did take a hit.
[02:05:29] a little bit because we were we something has to starve when you like
[02:05:34] artificial slowdowning CPU times six,
[02:05:37] We're saying that like, look, this part of the graph can propagate.
[02:05:41] The animation continues because it's
[02:05:42] completely isolated, right?  But this part of the graph was not able to calculate it fast enough.
[02:05:48] to actually show it within that window. So it did starve in this case, but
[02:05:53] It's just a temporary state.
[02:05:55] It's just like...
[02:05:56] That's if you spike it.
[02:05:58] I don't know how often you're going to be running with...  If you have an app that is super slow, calculations, and running on a super slow device, and the person's interacting with it like crazy,
[02:06:10] I...
[02:06:12] I've, I've like someone's made a miscalculation, you know, like,
[02:06:17] It's a different thing if you're using an app and you have a temporary spike and you're like, oh, I missed a number.
[02:06:23] And you're like, okay, that's acceptable.  You know?
[02:06:26] But it's a completely different consideration for,
[02:06:29] When...
[02:06:31] like
[02:06:33] Thank you.
[02:06:34] *laughs*
[02:06:35] you expect to live with it. Nothing that we see here is desirable.
[02:06:40] This is just showing that if you identify something slow and you want to offload it to a web worker, to the server, to wherever, some other channel, a timeout that's not part of the render cycle,
[02:06:51] you know,
[02:06:53] this is a reasonable approach. Like obviously there's still limits. I'm going to get to 20x here,
[02:06:57] which is just insane. And now the numbers just don't update even when it's animating. And the animation is stopping smooth. You know, we're seeing it looks now like my original demo a little bit. But at this point,
[02:07:08] This is taking longer
[02:07:11] Thank you.
[02:07:12] like several times, almost 20 times longer than the allocated time.  It updates every second and we're like, it takes 20 seconds to calculate
[02:07:20] You know what I mean? Like,
[02:07:22] Yeah, I mean...
[02:07:24] Oh!
[02:07:25] Um...
[02:07:26] our CPU slowdown stopped.
[02:07:29] Okay, we're back on.  See?  We didn't...
[02:07:31] We didn't actually corrupt anything.
[02:07:35] I'm hoping you guys can see that the numbers are updating again, but...
[02:07:42] So something like this, use request, I don't know, it's up to you. Not my problem.
[02:07:47] Like,
[02:07:48] I kind of like this aspect of this.  I mean, you're right.  There might be a future where people want to create smarter primitives that handle specific scheduling behavior.  The key part here is that the scheduling behavior is independent of the mechanism.  So...
[02:08:02] Like...
[02:08:04] I wrote my synchronous code.
[02:08:06] I updated the one place that was slow.  I did not need to change any of my other code, and I'm already better for it.
[02:08:13] Okay.
[02:08:14] So sync to async, you guys are following the pattern here.  The pattern is,
[02:08:19] I did not need
[02:08:20] to basically other than like where the sync
[02:08:24] The async case differs from the sync case, like now I need to worry about loading.  I don't need to change any of my code to add asynchronously to the system. Okay.
[02:08:33] -
[02:08:34] We are not going to save that one. Okay, let's continue.
[02:08:40] Nested fetching. I don't even know if this one is important. I mean, it kinda is.
[02:08:45] It's...
[02:08:46] But this one's a silly example. I mean, I've shown this one for ages.
[02:08:51] The idea behind this one is
[02:08:55] You have a component tree.
[02:08:57] Right?
[02:08:58] and
[02:09:01] It has some data in it, so you have some data that you calculate and you show on your component, but you also show children, right?
[02:09:07] Right?  And that children also has some data that it works with  and it shows its children and so on.  And then the third one has no children.  So it just shows this thing.  But with this demo, if this was synchronous,
[02:09:19] This would just be some kind of calculation you needed to do.  Like you're like based on some props or something.  When you start up, you're like, oh, I needed to read...
[02:09:25] something, you know, I need to just
[02:09:27] like,
[02:09:28] set something up, like capitalize a name or whatever example it is.
[02:09:33] And then...
[02:09:34] something happens.
[02:09:37] the
[02:09:38] we realize that we can't calculate that on the client anymore, and we actually have to calculate it on the server. We store it in a database or something, or maybe it's in local storage or some kind of place where it's not available to us immediately.
[02:09:53] That's what this example shows.
[02:09:55] It shows that when I change this create memo from being a value to being like,
[02:10:00] Oh, now I want to just fetch something in here.
[02:10:04] Yes, that fetch takes time.
[02:10:06] But...
[02:10:07] intrinsically because the data dependencies, like,
[02:10:11] If you look at it, you can see it.  Like we're not passing any arguments on it.
[02:10:15] In through here. B
[02:10:17] here does not depend
[02:10:19] on A
[02:10:21] and C does not depend on B. It doesn't matter
[02:10:26] the rendering hierarchy.
[02:10:30] These will fetch in parallel. They're all three seconds. So how long should this take? Nine seconds?
[02:10:35] Because A renders B renders C? No, it should take 3 seconds.
[02:10:41] Thank you.
[02:10:44] Yes, but it's also like it's carrying that B
[02:10:51] Data.
[02:10:52] doesn't depend on it.
[02:10:54] Like,
[02:10:56] If I
[02:10:58] If I went like--
[02:10:59] A for some reason. I'm past A in here.
[02:11:02] uh,
[02:11:03] um
[02:11:04] Right.
[02:11:05] And then
[02:11:08] Uh...
[02:11:10] I don't know, decided to add a props
[02:11:14] A here.
[02:11:16] Thank you.
[02:11:17] That's not going to change it either, right? It's still going to take 3 seconds, it's not going to take 9 seconds.
[02:11:24] You know, there it is.  I snuck it in there. Like...
[02:11:28] It's the data dependency, not the UI dependency, right?
[02:11:36] Right? And the reason this is a powerful distinct to async example is because you start with something where everything's synchronous, and then you realize that, oh, I need to fetch something in the middle of the tree. Well, guess what?
[02:11:46] That doesn't necessarily mean your Apple waterfall.
[02:11:49] because UI and the data are separate.  This is a good thing and a bad thing.  When we get to Ben Davis's comment, when we get to this week in JavaScript,
[02:11:58] or maybe I'll get to it sooner than that.  We can make a determination.
[02:12:04] But, like...
[02:12:05] It...
[02:12:06] essentially...
[02:12:08] it's because the component isn't the read.  It's not like...
[02:12:11] I want to use b in my components, so use b.
[02:12:15] the read
[02:12:16] is inside the specific binding.
[02:12:19] And the thing is, if you have like a granular rendering system,
[02:12:22] calling use be here or here. Like one of the coolest things about using React is that like literally you can put it almost anywhere. But the difference between calling use be here and use be here
[02:12:31] isn't that different in React because, I mean, there's some exceptions where if you wrapped in a component and when the component runs or whatever, but like,
[02:12:38] and like maybe pass the function.  I've seen some really cool hacks people done around React,  but generally it doesn't make a difference.  Where here, this makes all the difference.
[02:12:46] The same trade-off that people are like, oh, why can't I just, why do I have to wrap stuff in functions when I access it? Why can't I just like use values and stuff? And it's the same reason that components don't matter.
[02:12:57] in this kind of fine-grained async system. So that's what this one shows because it shows that even if
[02:13:05] We start
[02:13:06] with a simple
[02:13:08] hierarchy of components, props passed through, whatever.  Like all these components actually only render once. See the 1x?
[02:13:15] They actually render, I actually, this is what the stupid counter is doing.  It's checking how many of the component bodies, even though this is async, even though it's loading.  It's because the way, the difference between suspense, the, the, our loading here, our suspense mechanism, it,
[02:13:26] It preemptively runs...
[02:13:29] the branch, the success branch, and detects the async,
[02:13:32] but it doesn't throw it away.
[02:13:35] It doesn't go, okay, hit async, throw...
[02:13:38] Error, throw it away, run the component again, now we're good.
[02:13:43] it still only runs the components once. So you keep that stability stable thing that, you know, we like here. Like the component, even though there's like this async, it's just, it's just like, okay, I can't show this on the screen.  So I'm going to hold this over here while it's working when it completes, it doesn't re-render everything again. It literally goes, oh, okay. Well, I couldn't render this one thing here. I couldn't render this one thing here. Maybe that props thing. And this goes right fine grained and goes, okay.
[02:14:07] I'll update that place in the DOM, that place in the DOM, that place in the DOM.  Then it's like, oh, I'm done.  I'll just swap it in.
[02:14:12] So...
[02:14:14] Because of this mechanism that basically, as I said, turns the children to siblings, flattens the whole hierarchy,
[02:14:22] it means that your fetching is kind of automatically hoisted.
[02:14:27] Unless you create a strict data dependency like if this...
[02:14:32] Right. Suspense doesn't do that. But like if you put a show component saying like only show this if B is there, then yeah, you've done that.
[02:14:38] So this is why we had to make stuff non-nullable, which we showed in that first example.
[02:14:44] I didn't really highlight it in here, but if you look at this, what's the type of A?
[02:14:48] Accessor number.
[02:14:50] Right?
[02:14:51] Even though this returns a promise, we get a promise of number, we get access or number.  When this was not a promise, when this was just anything,
[02:14:57] divided as a function, it was still accessing number.
[02:15:01] right it didn't care whether this was a promise or not to make this access their number and
[02:15:07] which is why we can call too fixed on it.
[02:15:09] without a null check. And the same thing kind of carries on down here because
[02:15:16] if you have nullable async,
[02:15:19] People will put guards on it, which will ruin this parallelism.  We had to make it non-nullable so that we could basically flatten the graph.  There's no point to go show if...
[02:15:28] is pending or show if not null or whatever in this in this model.
[02:15:33] which means that effectively,
[02:15:35] we solved client-side waterfalls.
[02:15:41] Thank you.
[02:15:43] Yeah, it actually throws in the graph, which I'll show in the next example.  But I've shown this example before, so the people in the chat are probably like,  oh yeah, this is old news.  But think of this from a sync to async perspective.  This is huge.  You have a tree.  You realize some parts of the tree are separate.
[02:16:00] completely
[02:16:01] you know, like modular
[02:16:02] Need async?
[02:16:04] It's not shared somewhere else.
[02:16:06] You can just, you're way more likely to be safe to put it in line.  The only thing that gets you in.
[02:16:13] Client-side apps is lazy loading of code. Usually that will defer stuff until the chunk is loaded.  Lazy loading is the main reason why we have file system routers to
[02:16:24] today. It's because
[02:16:27] essentially,
[02:16:29] Like in the client, you're not going to load all the code up front.  That will cause a waterfall.  If you have data fetching under...
[02:16:35] lazy loaded boundary
[02:16:37] that will cause a waterfall.  So that's why people hoist stuff into loaders and that.  But generically, the rendering is not the reason.
[02:16:44] It's purely because of lazy loading.
[02:16:47] that we can't dispatch in our components.
[02:16:52] Right. And obviously stuff like server components can solve that in a different way, because like server components can be like, oh, well,
[02:17:01] You don't have to even send the code to the client.  So from that perspective, we do all that fetching and single pass on the server,  and then the client doesn't waterfall.  So yeah, that solves it too.  But the challenge is...
[02:17:12] If you don't solve the structural problem I'm talking about here,
[02:17:16] The server is still going to waterfall. If you do something stupid like await
[02:17:22] promise, like async components.
[02:17:24] Guess what? You're blocking.
[02:17:26] Now on the server, there's not parallelism of like reactivity or interaction.  So that's probably fine in most cases, but it's something to consider with  because you are a hundred percent blocking things you didn't.  You could have gone on and rendered B.
[02:17:38] Um, you know,
[02:17:39] But now you're like, no, I can't render B because I have no wait.
[02:17:42] Async components are
[02:17:44] are nice DX, but are
[02:17:48] They just don't fit.  They're probably, like, I can almost say, like, the wrong way to...
[02:17:54] Always.
[02:17:55] Like from a design perspective.
[02:17:58] Yeah, I mean, you could argue like, yeah, like it just doesn't act.
[02:18:02] Why would you block?
[02:18:06] Anyway.
[02:18:08] Thank you.
[02:18:09] Chat's like, yeah, Ryan, just keep on your soapbox.
[02:18:12] Thank you.
[02:18:14] you
[02:18:15] Okay. But yeah.
[02:18:20] Yeah, I already showed that actually. I just like
[02:18:23] I actually removed the suspense boundary.
[02:18:26] I mean, you're not going to like what you see when I remove the suspense boundary.
[02:18:30] Because the stuff's missing. See?
[02:18:34] I showed the UI, but it's like in how many seconds?
[02:18:38] Oh.
[02:18:38] Three seconds.
[02:18:42] But...
[02:18:42] So I suggest, but what I'm saying is you're not going to be beholden to it.  Like the way you could view it is.
[02:18:48] Thank you.
[02:18:49] At a very base level, you can put a loading boundary around your whole app and be like,
[02:18:53] I don't really care.
[02:18:55] at all. I don't need granular loading.  I don't need some stuff loading before other stuff.  And you can just be like holiday and be like, look, I know when the UI shows up,  it's going to be good.
[02:19:03] The reason you use loading boundaries is so that you can go, okay,
[02:19:07] I'm okay with this section...
[02:19:09] outside loading before the section so you can kind of like divide up your app in logical
[02:19:13] realms but this is sort of independent  of affordances that you use to show that things are in flight or pending or
[02:19:22] that you're doing work. This is just like placeholders. This is just like
[02:19:25] This is the decision the designer makes.
[02:19:30] Where your suspense components go, the designer makes that decision.
[02:19:33] The developer just goes, okay, you want one there? Okay, I'll put one there. I'll put one there. Put like, and the designer can conceptualize it because the designer can go like, okay.
[02:19:42] I don't have this value, so I need to show a placeholder.  Like, so like this has nothing to do mechanically beyond the designer's preference.  Whereas you as a developer are going to be more like, okay.
[02:19:53] when things update,
[02:19:56] Yeah, I care if this is pending so that I can show some kind of pending indicator.  The designer is still going to be involved in this process, don't get me wrong.
[02:20:03] I'm just pointing out that like,
[02:20:06] See, I actually should reset this back to the baseline.
[02:20:11] It's just that like...
[02:20:13] these affordances, even the pending is pending, it's not like a technical challenge that you're going to solve by going through and adding a bunch of state variables. It's, it's like, uh,
[02:20:25] where I'm, you know, it's a UI question.
[02:20:31] Thank you.
[02:20:32] Thank you.
[02:20:37] Thank you.
[02:20:38] Thank you.
[02:20:38] Thank you.
[02:20:41] Yeah, this is the mentality I had to like
[02:20:46] pushed when looking at this, right? Like this is, this is about
[02:20:50] architectural design constraints. And I think sometimes isolating them is key. I think React has done an amazing job here because like even the introduction of suspense, it's suddenly like,
[02:21:01] This is what people who don't like to like, I don't need suspense. Like what made suspense so powerful was that this inversion of control that was based like we don't care about the technical stuff. We did. It's a UI component. The challenge is.
[02:21:14] Sometimes with React, that colocation becomes too strict.  It becomes like too...
[02:21:20] rigid for you to be able to maintain, but it's
[02:21:24] I love it when they do it because that simplification lets them
[02:21:28] their minds go down that path way more rapidly than other people.  Because they're just like, okay, well, it's already components.  So it's like they can just like
[02:21:34] go down these paths in ways like
[02:21:37] I wouldn't be here...
[02:21:38] we're talking about this if it wasn't for the Work React
[02:21:41] Did same, same, same for Svelte.  Svelte.  It's funny how they influenced my thinking, right?  Cause like Svelte has a compiler and everyone's like, oh, that's a super compiler.  I actually consider the compiler almost like a limiting factor.  Compiler is like an acknowledgement that.
[02:21:55] your code's not good enough.
[02:21:57] I mean, there's performance optimizations, definitely. But it's kind of like a lot of times compiler is trying to extend something that just isn't possible, but it lets you open up to dream.
[02:22:09] Right? So when Svelte does something, sometimes in the compiler,
[02:22:13] It's not an optimization. There's a second category they do, which is kind of like,
[02:22:17] What if? They use compiler as a hack, essentially.  So like Svelte 3 is basically, what if we didn't need a VDOM?
[02:22:25] That's the hack. They're like, we could just define our state and then we could just do something smart
[02:22:31] Um...
[02:22:32] And kind of like...
[02:22:34] Figure out, like...
[02:22:36] you know, something fairly reasonable where state updates does roughly the right work in the DOM. And we don't need a virtual DOM to do it, which has benefits of, you know, keeping our runtime smaller and
[02:22:48] But it was an approximation.  Anyone who's used Svelte 3 knows that there's weird edge cases and timing and consistency.  And you're like, oh, what happens when this thing happens?  And then...
[02:22:58] they switched to ruins in Svelte 5, which is the actual model. Like, it uses the compiler enhancement, definitely, but that's mostly, not completely, but largely syntactual. They actually moved from a compiler-based approximation in Svelte 3 and 4 to
[02:23:13] the actual runtime in Svelte 5. And I feel like
[02:23:17] the work that...
[02:23:19] I've been doing with solid 2.0 in a second is taking their approximation and  async and making it into an actual runtime,  like making it into an actual thing.  So I think this is like,
[02:23:28] like the thing that Svelte challenges me to dream, right? Which is amazing.  And then like React on the other hand,
[02:23:35] React knows the problem to solve. They even know the solution.
[02:23:39] They're just like, in my opinion, and they obviously disagree with this, and they're free to, is that their hands are tied by the fundamental design of their system.
[02:23:49] So like...
[02:23:50] Um...
[02:23:52] It's a great place for me to be sitting because I can see the dream.
[02:23:57] And I can see like how it should behave and what it should do.  And I just put it together. Right.
[02:24:03] That's what engineers do. It's funny, some of my work's researching, but it's like, essentially, I feel like there's a certain practicality of taking
[02:24:12] a dream in terms of what the user experience is,
[02:24:16] versus like
[02:24:17] very solid, rigorous work the React's doing, like, from almost like an academic standpoint, and then finding a way to meet that in the middle.
[02:24:30] Thank you.
[02:24:35] We have to find an opportunity to decouple.  Yes.  Ryan Florence...
[02:24:40] As much as like, I love Ryan Florence because
[02:24:44] He doesn't accept BS.
[02:24:48] Like, if he sees crap, he calls it as he sees it. And that can offend some people. But you know,
[02:24:55] My...
[02:24:59] my dedication to the truth
[02:25:02] maybe overly so, makes me respect that incredibly.
[02:25:06] Um,
[02:25:07] Right? Like...
[02:25:09] So.
[02:25:11] Thank you.
[02:25:12] What would happen? There is no more creating sync.  That's been the whole point about this.  Every create memo is a create async.
[02:25:18] This is kind of an... I don't know if you guys have noticed in this example, in any example there's no create async. I'm literally just going, "Oh, I took a create memo, I took a signal and I just decided to derive it from
[02:25:31] from a promise, you know, like what's this return?  Fetch in second, promise of string gives me accessor of string.
[02:25:37] you
[02:25:39] You know?
[02:25:40] Thank you.
[02:25:41] Thank you.
[02:25:42] Thank you.
[02:25:44] Thank you.
[02:25:46] No, no, no, every all the work.
[02:25:48] All the frameworks are great. You have to understand you popped on my stream. I am
[02:25:52] of what you consider like a subject matter expert on JavaScript frameworks.  That's my thing. I am a JavaScript framework author, so I'm obviously biased.  But my position, my content is all about
[02:26:03] very deep JavaScript framework design pieces. So when I
[02:26:07] critical of something is felt or react or whatever. It comes from a place of like,
[02:26:11] of like,
[02:26:12] being very, very deep into it. It's not because I don't think they're good choices to be used. I'm talking about architectures that are
[02:26:21] not here today might not be here for two two years three years or whatnot so it's no hit on
[02:26:27] on what they're doing.
[02:26:33] Yeah, that's basically the underlying mechanism, but the impact of that is huge as you'll see as we continue through these demos. But the important part about this demo is
[02:26:42] It was synchronous. I decided that I couldn't calculate this on the client's, you know, three components down in the tree.
[02:26:48] No problem.
[02:26:49] Okay, move on.
[02:26:51] Thank you.
[02:26:53] Okay, what's our next example? I like keeping the divide example up because it's actually like
[02:26:59] Pretty cool. Okay.
[02:27:02] Erid counter.
[02:27:05] Okay.
[02:27:07] This one?
[02:27:10] This one doesn't really have...
[02:27:13] a synchronous version, so maybe there's no point skipping over it.
[02:27:16] Other than like,
[02:27:18] This one, yeah, this one doesn't fit here.  The only...
[02:27:22] The only thing is...
[02:27:24] This one still shows how much easier it is with a model where you can derive
[02:27:27] async.
[02:27:29] up here.
[02:27:30] and worry about whether it's loaded down here.  That's the main thing that it shows, you know.
[02:27:35] Because this model,
[02:27:37] The...
[02:27:38] This shows error boundaries too.  This one, like, what's cool about this one is that
[02:27:45] If I have an error,
[02:27:46] that I realized down here somewhere
[02:27:49] because I can't, because I fetch some data and it doesn't work.
[02:27:53] and my data fetching is up here or it's like, you know, some store globally or something or some kind of weird other place.
[02:28:00] the error boundary only cares if it can't render. So,
[02:28:04] When I trigger the error here,
[02:28:08] When I trigger the error here
[02:28:12] Come on.
[02:28:15] either when I click onto the next value,
[02:28:18] which, you know, ref...
[02:28:20] re-triggers our async work here and re-renders what needs to re-render.
[02:28:25] or I click retry which
[02:28:29] looks at the error and then retries, like if the error gets thrown down, like you get the error, you throw it, we can trace through the nodes of the reactive graph to know where the error is coming from. And he just goes, okay, well, the source of that error is actually,
[02:28:41] This
[02:28:42] memo, I can just retry it, and it retries it. We get basically data fetching retries for free,  slow, like this will try and get 70, and oh, it got it that time. And it was funny,  Ryan Florence actually had a post the other day where he's like, did error boundaries ever  actually work? Like, how does anyone like refresh them or restate them? Because the problem with the  error boundary, conceptually, is when you try and click retry on it, the error is still there. You
[02:29:05] fix the error, and then tell the boundary to refresh.
[02:29:09] Does poor old me down here know what the error is? They could take a stab at it and be like, okay, maybe it's coming from my props here. So like maybe my component should have like a retry fetch thing that I pass through so that when I error.
[02:29:26] It doesn't make it very easy to use or be composable, where this is just kind of like, look,
[02:29:32] We might not be able to reset it, maybe you'll have to go do something.  But generally, if the error is something that we propagate through the reactive graph,
[02:29:39] It's something that we can solve.
[02:29:45] Thank you.
[02:29:47] Yes, I mean, it's a subtle difference. And I talked about this a bit earlier.
[02:29:51] When I was talking about like how many state points is,
[02:29:54] I'm all about control, maybe a bit too much of a control freak.
[02:29:57] Creating a primitive that's like look this cannot
[02:30:00] not be written to is valuable in its own right. You're right. A memo
[02:30:04] and a signal can be basically the same thing.  But the fact that it's writable versus not is worth enough semantically to be a different thing.  It's like let versus const or whatever. Like I use const.
[02:30:15] So when possible, use create memo.
[02:30:17] you know, create memo is const.
[02:30:20] Create signal is what?
[02:30:28] Yeah, that's an interesting thing, and the answer is yes.
[02:30:33] which means that it's probably going to error again.
[02:30:35] But.
[02:30:37] You're right, it is a purity versus impure thing, but the mechanisms are general, just like refresh, right?
[02:30:42] I'm still
[02:30:43] thinking about this.
[02:30:45] a little bit because you're right. It's purity versus pure. You don't want to discourage impurity,  but we're trying to create a, we're trying to create a,
[02:30:52] Uh...
[02:30:53] a system where we don't view ASIC as impure, even though it is sort of, but like,
[02:30:58] We're trying to keep that at the edges outside of our knowledge within the actual UI framework itself. Not within the framework, but within the interface that you interface the framework. When you're in your components using signals, using GSI, you're not thinking about purity, hopefully.
[02:31:17] Thank you.
[02:31:21] Thank you.
[02:31:22] Yeah, the airbrowns have mostly been recoverable.  Yeah.  So, I mean...
[02:31:27] This is a small detail. This one doesn't really translate to my sync versus a sync thing other than
[02:31:33] this small point. This component here, our poor little message, has no clue that our app has changed.
[02:31:41] He doesn't know.
[02:31:43] It just, it doesn't even have the ability to show loading state.  It's just a dumb component that says the message is this.
[02:31:51] Okay.
[02:31:54] But
[02:31:55] just because it's down here, see this console log?
[02:31:59] See this console log.  Praise counter.
[02:32:01] It's important.
[02:32:03] See if I can open this up here and show what I'm talking about.
[02:32:06] Where's the console?
[02:32:09] Or actually, can I just switch to console? Yeah, it's better.
[02:32:12] What I wanted to show here is
[02:32:15] Okay.
[02:32:17] When I load the page, we're going to see rendering phrase counter, fetching phrase, and then writing a message.
[02:32:26] When I click 1, 2,
[02:32:31] Oh, there was an error that time, retry.
[02:32:34] the thing you're not going to see is rendering message again.
[02:32:39] And that's because...
[02:32:42] Partially it's because this just updates.
[02:32:45] But the key part here is we didn't need to pass like a promise through this message component got to retain being completely oblivious about async, even though
[02:32:55] this is actually the thing that it's throwing.
[02:32:59] So from a sync to async thing, what this is actually showing is that the inclusion of async
[02:33:05] doesn't require
[02:33:07] a tree-based API change.  Like, one of the biggest challenges with something,  with a lot of systems is...
[02:33:13] you end up
[02:33:15] You have to fetch high.
[02:33:17] And you want to read low.
[02:33:20] If you put...
[02:33:21] If you don't throw down here and you throw...
[02:33:24] Well, you can't do that here. That's above the loading boundary. So then what do I have to put the loading boundary above the whole component? Do I like pull my component out and then like,
[02:33:33] Like,
[02:33:33] This one's not bad because you could you could put
[02:33:36] use inside here, I suppose, but then this has to become a promise. If we're reading inside here, now this is a promise. So now
[02:33:43] like,
[02:33:44] everything between where we really want to read it
[02:33:48] and where it's fetched, we have to pass promises through.  So then we start getting APIs that are like,
[02:33:54] text is a string or a promise of a string, which it might not be that bad because it can like help you see the async as a prophet gets through your graph. But it means like huge amounts of refactor when you're like wanting to add async, right? So like,
[02:34:08] It's
[02:34:09] It's kind of
[02:34:10] awkward like either you end up reading way too high and causing like
[02:34:16] things to unmount unnecessarily, or, you know, especially if you don't have like single load  suspense or whatever kind of mechanisms or forcing wrappers higher.  Like you, you have to like build it up or you're going to find yourself
[02:34:29] passing promises through several, you know, prop drilling promises and partial promises. So you start getting these like interesting cases where you're like, if it's a promise, render this, if this is a promise, render that. Like I've seen some examples, public examples react with like, depending on if it's a promise or not, you render it something in suspense versus not in suspense, so that you can like handle the use, like in a more co-located way that's composable.
[02:34:52] The extent of this system is like,
[02:34:55] Uh...
[02:34:57] Like, if you want to be aware of pending state or like stale state, you just like, you don't put a suspense inside this message.  That's like, again.
[02:35:06] That's like a UI...
[02:35:08] decision, right? It's not composable. Like,  suspense doesn't belong in reusable components. Suspense belongs in your application code.
[02:35:15] Right?
[02:35:16] Unless the reusable component is complex enough that it warrants having its own suspense and it has enough behaviors.  But a simple...
[02:35:24] message button, whatever, probably doesn't have suspense in it.
[02:35:27] It might have like...
[02:35:28] an is pending, it might be like, OK, well, let's--
[02:35:33] Let's ask if
[02:35:34] if the if is pending
[02:35:36] Um...
[02:35:39] my props.text
[02:35:43] then I should maybe
[02:35:46] Thank you.
[02:35:47] You know, me and my dot dot dot, right?
[02:35:54] See, I added the dot dot dot on the end here.
[02:35:57] Um,
[02:36:00] you know,
[02:36:02] That four dots.
[02:36:04] See, pending, I added four dots on the end.
[02:36:07] The extent of which you ask it, but this doesn't require...
[02:36:11] Now, don't get me wrong, there's no indicator here whether this could or wouldn't be pending, but the decision is affordance-based, not based on...
[02:36:18] You know what I mean?
[02:36:19] if your component
[02:36:23] would want the ability to show loading, then it would know it wants the ability to show loading, so then it would do it.
[02:36:28] if your component is oblivious of pending state  and has no logical place to show it,  then yeah, it probably happens somewhere else.  But that doesn't mean...
[02:36:37] like you don't need to use down here and to like pass in a promise now.
[02:36:43] and have it be still the source of async in a way that is the most efficient, which is pushing the reads all the way down to the leaves.
[02:36:50] Like,
[02:36:51] Yeah, I don't know if I can explain this stuff well enough. I was hoping showing it would make sense, but...
[02:36:56] Yeah.
[02:36:57] That's the power from a sync to async standpoint.
[02:37:00] This component
[02:37:01] Unless it
[02:37:02] goes, "Okay, it's my natural responsibility to show some kind of stale state."
[02:37:07] does not need to change.
[02:37:09] Adding async to the system does not...
[02:37:12] cause this crazy coloration where you have to go update all your components to accept promises.
[02:37:19] Okay. Cool. So I'm hoping each example brings itself some sort of value for people.
[02:37:27] I think we're done with this one.
[02:37:31] Yeah.
[02:37:32] Thank you.
[02:37:33] Oh yeah, sorry. The last one had some sync-- this one has zero sync to async value.
[02:37:38] So I probably can skip it.
[02:37:40] This one is the one that I just include to show like this is the test.  If you think your system has properly behaved or if you think your system
[02:37:50] belongs
[02:37:53] in
[02:37:54] in Gen 2.
[02:37:56] Essentially.
[02:37:57] Like, or like,
[02:37:58] borderline arguably like React 9.
[02:38:01] This is your test.
[02:38:03] Can you make this example?
[02:38:05] This is the most thing. Because the key to this example is, a lot of people, I did this in early solid like 2019 suspense and stuff.
[02:38:13] If I can't click...
[02:38:15] click on the next tab over here and have this counter still go while I'm waiting for the next  page to load, I have failed. This is the test, right? There's also a case where I show like a  nested loading boundary, which is cool, but the basic test here is
[02:38:28] This counter has to stay live
[02:38:31] while I'm running the next page.  This is the fundamental thing.  And this is not a sync to async thing,  so we could probably skip it.  But the idea here is each page has its own counter on it,  but the counter is being driven from some like higher up state.
[02:38:42] And you're like, well, that's easy.  It's not a question of whether you lose the count that updates because the count is...
[02:38:48] So,
[02:38:49] stays there with the app.  It's not getting lost when you switch between pages.  It's whether the current page is still live  while you're rendering the other page.  That's the test.  You don't want...
[02:39:01] like there's tons of systems or it's not very hard if you make it yourself that when you go to the next page
[02:39:07] that you just kind of like
[02:39:08] stop updating what's here but still show it like maybe you cache the dom nodes like solid
[02:39:13] you know, these are actual real DOM nodes.  So you can just go like variable equals my UX.  And then when they switch, you can just be like, oh, I'm actually going to hold on to these.
[02:39:23] You know, like you could there's there's ways you can
[02:39:26] Can, can just like keep the Dom notes there, but.
[02:39:30] In solid, our reactivity is such that when something disposes, like in a condition, like in a switch match or a show, we dispose of the children and this reactivity dies.
[02:39:40] right? When this tab switches to this tab,
[02:39:46] then this count
[02:39:48] like anything created underneath in this tab. So let's go to child one, you'll see.
[02:39:53] I have one here.
[02:39:54] the memo here, create delay that fetches the data. But the time that gets passed through, where's the counter? Why am I not seeing the counter?
[02:40:04] Yeah, props count.
[02:40:05] This count
[02:40:07] this memo effect, whatever that's rendering this, this one thing,
[02:40:10] would naturally get released.
[02:40:12] because you've switched away from the parent.
[02:40:15] It's not getting released here.
[02:40:18] So yeah, I just included this because if you haven't accomplished this, then we're not having the same conversation.
[02:40:30] Thank you.
[02:40:31] Right? Like this is the... Now, obviously you've seen this with React. It's really easy to do with React as well. All you've got to do is when you go to the new tab, where is it? Set tab. When I click on it, where do I click on it? Yeah, set tab.
[02:40:46] Just wrap this sucker in a...
[02:40:48] start transition. There you go. The only difference with our models here, and that's why I said react gets it right, is that you don't have to call start transition here. But
[02:40:59] I'm not stressing on this.
[02:41:05] Thank you.
[02:41:06] This is the advert? I guess so. I mean, I think all of this is actually
[02:41:10] Good. This is not the sync to async thing, but this is just showing that like,
[02:41:15] This was probably the trickiest part to actually figure out, right? Because I didn't want to fork for performance reasons.
[02:41:22] So because if everything's a transition, it'd be really slow that like every click forks the reactive graph. That's freaking crazy. So I need to come up with a non-forking transitional model.
[02:41:32] So that's the technical
[02:41:34] part that's quite impressive.
[02:41:36] with this, but
[02:41:38] Like,
[02:41:39] From a UX standpoint.
[02:41:41] You don't have to work or DX sample. You don't have to worry about it like set a tab switch it stuff keeps on moving see because this has nothing nothing to do the key realization if you're you guys are out there trying to figure out how this works is.
[02:41:54] When we lock stuff up for transitions,
[02:41:57] Reactive dependencies matter, ownership dependencies don't.
[02:42:00] So,
[02:42:01] This...
[02:42:03] even though it is owned
[02:42:04] like the effect that's running or whatever calculation, running memo,  computed, whatever the hell you want to call it is, is,
[02:42:11] is running.
[02:42:12] Um,
[02:42:13] is
[02:42:14] Under the scope of...
[02:42:16] you know, whatever
[02:42:18] thing that's doing the switch.
[02:42:20] It doesn't depend on it. So it can run independently, it does not get locked up by the transition.
[02:42:26] Right.
[02:42:27] And to be fair, React is no different here.  It doesn't use the reactive graph to make that determination, but it's...
[02:42:34] It's a similar thing with React, what they do is they go render the whole other page.
[02:42:39] and then this page is still live  so it keeps an updating.  So they just like
[02:42:44] create a forked reality. Originally, I was creating a forked reactivity graph, like, kind of like,
[02:42:49] more Git style where you can emerge like nodes to nodes.  But then I came up with a new system that I've talked about in my previous  streams.  We're not going to get into,  but essentially the,  the,  this,  this example is just here.  It's just for people to vet,  like,
[02:43:03] that they actually, because I saw a bunch of people going, like, copying my other demos and with different frameworks or like with their, like,
[02:43:10] like with their own framework. I have a lot of those people in the Discord, very helpful. But then this is the demo that they, like, they were missing. This is actually like the first demo. Like this is, if you're like, I want to be async first, make this demo first. This is the, this is the fundamental piece. Um,
[02:43:28] I didn't even, I didn't think Svelte actually passed this test originally, which is why I disregarded Svelte 5's async for like several months.  And I think early days they didn't.  But if you check Svelte 5, they pass this.  So Svelte 5 is definitely, like this is the criteria.  This is the door of entry.
[02:43:43] Okay.
[02:43:45] Cool, let's continue.
[02:43:47] So,
[02:43:48] Okay.
[02:43:49] Okay.
[02:43:50] These last two are kind of fun.
[02:43:52] Um,
[02:43:56] I'm excited for these ones. I need to drink some water. I hope you guys are as excited as I am.
[02:44:01] Thank you.
[02:44:03] Because this is where the whole picture comes together.
[02:44:09] And
[02:44:10] It's it hasn't gotten any.  And this is this is what
[02:44:15] This is because I was working. Remember, we had Ricky on from React core team, and we were working through how to do this stuff with React. And I had my version, he had his version. And I set up the question unfairly to be towards my version of it. And he reverted it all around to go to his version. And then I'm like, both of these are valid.
[02:44:38] And I was like,
[02:44:40] Huh.
[02:44:42] That's very interesting.
[02:44:43] They're both valid approaches.
[02:44:48] I was like, I was like, can we thread the needle?  Can we accomplish both approaches?
[02:44:55] in a way that doesn't feel...
[02:44:58] awkward from a sync to async perspective.
[02:45:02] So
[02:45:03] But like it's completely consistent.
[02:45:05] So basically, do both, but better than both of what I previously thought and what he previously thought.
[02:45:11] And the answer to that is obviously yes, we figured it out.
[02:45:15] So that's why I'm excited about this because this is when like I'm hoping the light bulbs come if they haven't already where you're just like, oh, OK, OK.  So.
[02:45:26] Uh, let's go back.
[02:45:28] Let's go back to my dashboard. Let's leave this nothing in here is worth saving. Okay, so
[02:45:35] Thank you.
[02:45:36] I made an example here.
[02:45:39] that I've used a few times here. It's not full to do, I call it solid to do simple. Okay.
[02:45:46] And
[02:45:49] I've used this in a recent conference talk.
[02:45:52] All this is, is it's the to-do MVC example,
[02:45:55] Oh, I haven't even...
[02:45:56] Did I update? I didn't even update the-- oh, no, I did update this one. Okay.
[02:46:01] Yeah.
[02:46:03] And
[02:46:05] The key thing is there's only three actions in this.
[02:46:09] There's add to do, remove to do, toggle to do.  We don't have edit to do.  We don't have like select all behavior.  There's like eight or so different operations and to do MVC.  And they're all important.
[02:46:21] But...
[02:46:22] I want to simplify it down to a demo that I could actually, if I want the real-time code, I could do it.
[02:46:28] Right.
[02:46:30] Thank you.
[02:46:31] And the way I set this up is pretty simple.
[02:46:36] You have?
[02:46:37] your typical to-do app,
[02:46:39] And then there's a loop.
[02:46:40] that renders each to do and we pass in toggle to do and remove to do.  This is very common.  You might be like, why don't you handle this locally in the to do?  Well, if you think about it, you're managing a list.  So list lives out here.  What I love about the two MVC examples, it's the same example, essentially,  that React used when they introduced the compiler.  Everybody like this is just like
[02:46:58] one of the most
[02:46:59] like first examples, the show when you're talking about data hoisting, right, as a mechanism, and then how like memoization impacts that, right. So I've used this in solid a lot to show find green updates, right. It's in our tutorial.
[02:47:12] essentially.
[02:47:14] Thank you.
[02:47:15] Because the key part about the Todo app is that you have the Todo's up here somewhere.
[02:47:20] And then
[02:47:21] you but you do have operations that matter on a per row level like if you want to
[02:47:27] toggle them on and off or remove them.
[02:47:30] But essentially,
[02:47:32] There's a class that we apply that shows them crossed out. This is fairly simple synchronous API. I have a couple event handlers that just wrap. You might be like, why didn't you just inline them? Well, it's because the inline event has some details on it. So it's easier. So the person consume it to have a simple ID like remove ID or toggle ID and whether it's completed or not, you know, like information like
[02:47:55] on the event so they kind of propagate it back up. So like, we have secured the actual like DOM event here so that the consumer can just
[02:48:04] basically do operations directly on it.
[02:48:08] I purposely set this up in a way that
[02:48:12] There is a to-do component, there's the main component with a list,
[02:48:16] And then the events handlers are, as I said,  they're just wrappers that are nicer for API.  The on-input event handler is actually a little bit
[02:48:25] As I said, it obscures the DOM stuff, but it has a lot more logic because you have to like trim the input to make sure you can even submit it. Have to like in this case, we're actually doing like a key or checking for keys. This is it's funny to do MVC does it's like it's not like an on change event like they they want it the whole thing with to MVC with.
[02:48:43] uh,
[02:48:44] is
[02:48:45] Yeah, like they don't use a blur.  They actually literally use an enter key.  I just copied this thing.  There's some logic about like clearing the input.  And then ultimately we create our to-do
[02:48:55] and we add our to-do to our list. But essentially the DOM stuff's out here
[02:49:00] And then what this let me do is create like a little to-do store.  Now I can put four to-do apps on the page and each have their own store.  So this is, this is not necessarily global.  That's why I did it this way.  You're actually creating an instance of state in your component.  It's just organized as like a store.  You can put in context, you can do whatever you want.  This is a pattern I use.  I don't know other people use this pattern very much.  I love this pattern though, where the first value is the readable value.  And then the second value is the writable value.
[02:49:30] or set signal that, but what I actually do this  for stores as well, a lot of people like this  co-location thing, I do not.
[02:49:36] I put my
[02:49:38] named actions on an object that I can destructure
[02:49:41] because it's not reactive, these are the action side. So I can just like list them up. What can my store do? I can add it to do, remove it to do, toggle to do, and then
[02:49:48] the store itself
[02:49:49] which is actually a solid store. It's an array of read-o-ling to do here.
[02:49:56] is just the data that we use.  Like this could be an accessor if it was like a different thing,  but I use this if we're using signals,  but our to-do's implementation here is very much a store
[02:50:07] That's an array.  And then add to do is pushing to that array.
[02:50:11] This is the new produce style API default that we have in Solid 2.0.  Set is filter, and then toggle is finding the one at the specific index, and then switching the one thing.  Why do we not just do map filter through this whole thing?  It's because this is granular.  I want it so that when we add our items and we toggle them here, we don't rerun the whole list.  It's just the completed on the one row that updates.  So this is super fine grained.
[02:50:41] references so that the list still has when you do a filter operation the list has to diff when you do  um because it needs to know like which one's a move to change when you do an add operation you  know you basically have to trigger the diff but when you toggle it to do there's no reason to run  the for loop like there's no reason to rerun the loop you it doesn't change anything in the loop  it only changes this one place so this is why you use stores to be super granular nothing gets  updated that doesn't get updated like doesn't need to get updated this does not cause any
[02:51:11] to diff for anything. It literally just
[02:51:13] does the one update.  We've demoed this a million times for Solid Basics.  But the important part here is,
[02:51:18] This is very clean.
[02:51:20] You create your store, you don't give people the store setter, you give them very specific actions. And by just using internal primitives, we don't need, like this is ZooStand, you know, like, this is why you don't see state libraries in solid very often, because you can create your own conventions ways you want it. And it's very reusable, very powerful. And like,
[02:51:39] you know, you're off to the races. You didn't need anything else. You know, you keep your code organized and
[02:51:46] There you go. We have our to-do store, our UI logic. We're happy. Okay.
[02:51:51] Everyone still with me? Sorry. Chat, whenever you guys get quiet for like seven minutes plus, I get worried.
[02:51:57] Bye.
[02:52:00] Part of it is I'm probably going too slow, but...
[02:52:03] I, I, I, I, that, that's kind of like my threshold.  Yeah.
[02:52:07] Thank you.
[02:52:08] Okay.
[02:52:09] Thank you.
[02:52:09] So,
[02:52:11] Who cares? This is your Todo MVC. What are the todos you ask? Well, let's look at our implementation here. Todos, we have an array.
[02:52:21] It's just an array in memory, so when I refresh this page, sadly all our to-dos are gone.
[02:52:29] Right? So now we're like, crap, we need the persistent, right? And
[02:52:39] You use XState, store with solid instead. I mean, again, you can. The only problem challenge with stuff like XState, I mean, I love XState because you need something to coordinate all the state management. It makes a ton of sense.
[02:52:49] The challenge, of course, is that a lot of times this stuff's immutable.  I've been doing a lot of work in 2.0 to improve the efficiency of immutable diffing so that we can actually
[02:52:58] do immutable diffing under the hood, which I'm very excited about because we actually don't mutate the references under stores anymore, which means that when you do immutable diffing, we can just swap references.
[02:53:06] And this means that like,
[02:53:09] It can be super efficient because we literally do it.  No one's it's like a tree falls in the woods thing.  Like if no one is listening to a specific reactive path, we don't need the diff.
[02:53:19] We can just swap the references. We basically can walk down the traversal, which is a real thing. When you look at how, like, for things to react, you have to keep the reactive path intact, which means it's a safe heuristic here.  So we can literally go like which properties in the stores have signals because we create them lazily and then be like, we can diff along those signal paths instead of the whole thing. So you can have a huge store of data and then.
[02:53:42] dip the whole thing, like replace it with something fresh in the server.  But if you only listen down one specific path, like user one, blah, blah, blah.  We literally don't have to do any work.  We don't have to dip.  We just like, we just go, okay, dip down this.  Does this user change this?  Some of this, the whole rest of the array, the whole rest of the whole thing, just
[02:53:56] Thank you.
[02:53:57] you know, like other data not related, we just shortcut. So this is a new thing in 2.0 that I'm excited about because it kind of marries the benefit of React, which is diff in the UI, but does it at a data diffing level because basically we know what gets used.
[02:54:17] Anyways.
[02:54:19] Okay, so
[02:54:22] Now we need local storage. So what I did was I created an API for this.
[02:54:27] And
[02:54:28] It's proximate delay so you guys can see it. The idea is get to do's
[02:54:33] is
[02:54:34] Calling you.
[02:54:36] It's delay get-to-dos, but the actual get-to-dos.  There's only two actual...
[02:54:40] real APIs. There's get to do's and save to do's, which basically just parse stuff and store in  local storage. And then there's a delay timer, which just wraps a promise, right?  So essentially, I just created an API from this that like, you can pretend it's like,
[02:54:53] JSON API or something or whatever, it doesn't really matter what it is, but it's like get-to-dos, which gets the to-dos, add-to-do, which then...
[02:55:00] adds it to the database, so to speak, like creates the structure and that saves it.
[02:55:06] and then returns the last item in the list,  remove, the same thing.  This is literally just like a fake  API server database setup.  So even though there's only like two operations to save,  we essentially expose our...
[02:55:19] get n+r3 operations to save it.
[02:55:23] As you can imagine,
[02:55:25] there's a couple ways we can take this. And that's really what this shows. The optimistic UI is the way that Ricky approached it and optimistic data was the way that I approached it. And we've seen these examples before. In fact, optimistic UI is what Remix first showed off when they first
[02:55:42] showed the optimistic updates.
[02:55:44] The remix was way ahead of its time in terms of showing the whole idea of ephemeral, optimistic, updates of state. Genius work. I know I say it every time, but honestly.
[02:55:58] But he actually provided me with basically both demos, even though he didn't use todos.
[02:56:02] Optimistic data is what the Trello demo that he did, or Trellix or whatever that he did for Remix, was that.  And there's a subtle difference between the approaches, but I've now been able to kind of categorize them into two categories.  Because I always kind of lean towards optimistic data, but the React APIs kind of lean towards optimistic UI.  Now, don't get me wrong, you can do both, I think, with both if you're smart enough.
[02:56:32] So Alex demo was possible in Remix.
[02:56:35] then conceptually you could do the same thing
[02:56:38] Um,
[02:56:39] Yeah, it's React, so you can do the same thing using React APIs, albeit less efficiently.
[02:56:44] but definitely still doable so i i this is kind of what i want to talk about so let's
[02:56:49] Let's start with talking about optimistic to-dos.
[02:56:53] Thank you.
[02:56:54] And I want to start with the...
[02:56:57] I want to start with the to-dos this time because
[02:57:01] the
[02:57:02] There isn't
[02:57:04] Yeah, I'm going to start with the to-dos this time.
[02:57:07] What did I do for Create Optimistic To-Dos? Well, what I did was I took our store,
[02:57:13] And I, instead of starting from just the array, I actually
[02:57:18] fetch the data from the API, the get to dos.
[02:57:23] Um,
[02:57:24] Which is kind of like, okay.
[02:57:26] Thank you.
[02:57:27] Why does this work? Well, it's because, again, promise a to-do array becomes store a to-do array, right?  This is the same async stuff.
[02:57:37] When I added it, I didn't just add it to the signals and memos.  I added it to stores and projections as well.  So we have that same async system through our deep, nasty, granular stuff as well.  So this could have been a store.  Someone's like, in the same way that you don't need create.
[02:57:54] memo if you have create signal, we could have kept this as a store, but I chose to make this a projection because we don't need to write to it. Right? Now our database is our source of truth. So
[02:58:03] What do we do?
[02:58:05] Now this is a new API.
[02:58:07] You guys might hate generators. I don't know.
[02:58:10] This is a fundamental problem that's very hard.
[02:58:13] Even though I could get rid of the start transition wrapper, I can't
[02:58:19] There's no way to connect.
[02:58:21] what happens beforehand
[02:58:23] like this, to what happens afterwards
[02:58:27] with async JavaScript. You cannot resume the context. There's no async context, no async local storage.
[02:58:32] we still need
[02:58:35] the ability to
[02:58:37] Thank you.
[02:58:38] Connect them together. Now, if you remember the React approach, they would call like start transition and then they'd call start transition again.
[02:58:44] Right?
[02:58:45] Um,
[02:58:48] Since solid can do parallel transitions, we actually had the
[02:58:50] Bye.
[02:58:51] to have the action helper pass the second start transition,  the resume transition through it. It was terrible.
[02:58:58] So instead I looked at MobX.
[02:59:00] And in MobX, they have something called Flow,
[02:59:03] And it's very powerful, right?  You can just yield promises.  You can create sequences.  And what's beautiful with this is
[02:59:08] Um,
[02:59:09] I...
[02:59:11] I, the context is refreshed automatically. I don't have to ever remember to call start  transition again. I just have to remember that, you know, instead of awaiting an API, awaiting, um,
[02:59:22] Sorry awaiting a
[02:59:24] a promise, I need to yield it. That's the biggest difference here. I know people are not
[02:59:28] huge fans of generators, but
[02:59:31] Out of a bunch of terrible options, this one was the best.  Now, some people have issues with TypeScript.
[02:59:38] There's solutions for this that I'm actually kind of excited about,  but a bit beyond the scope of this.  First of all, this also supports ASync generators.  So technically speaking, you can...
[02:59:48] You can still wait in here to get your values out.
[02:59:53] and those will be properly typed and then yield.
[02:59:55] It's a little weird to yield
[02:59:58] like a weight than yield.
[03:00:00] So I don't end up doing it very often.
[03:00:03] Um, so...
[03:00:05] you know,
[03:00:07] I get it. A lot of time with actions, we don't actually care about the results.  If they error, then they throw and we handle it, you know, or like it's...  I... The other thing...
[03:00:16] that I'm looking at is
[03:00:19] I haven't skipped with this, but it's in the tests,  is that we could also make a helper.
[03:00:25] that's like res error and just be like yield star,
[03:00:31] attempt
[03:00:32] API
[03:00:35] API.
[03:00:37] had to do.
[03:00:38] And in this situation,
[03:00:40] we would be able to get proper type information
[03:00:43] Um,
[03:00:44] and through this and like remove the try catch blocks.  I think this is super, super ergonomic.  The only reason I'm like hesitant to add this to solid core is because like,
[03:00:55] What if you want to make a 10-per-3 try? I think there's a whole world
[03:01:00] of
[03:01:00] generator based helpers, you know, kind of like RxJS, the whole world of, of operating helpers  or whatever that could exist out in like primitives land that I don't need to worry about.
[03:01:11] from a core perspective.  And to be fair, a lot of you will never use the generator API because let's say you're  using solid router.
[03:01:18] and you're using the automatic invalidation,
[03:01:20] you won't need the generator. You just pass in your server function and set your keys, and this mechanism will be hidden from you. Under the hood, I'll be using the generator.
[03:01:28] But you as a developer will just be like, pass me server function, say what keys get invalidated.  Done, done, done, done, done. Like that, that, that's the thing. This is a low level.
[03:01:39] primitive, but it's still high enough level that I can make convincing demos out of it very easily.
[03:01:49] Yes, resume was that bad.  It was, I can't stress over it.  It's so bad.
[03:01:54] that
[03:01:55] even though React's like kind of living with it right now,
[03:01:58] I, I, I, do you know how bad it is?
[03:02:01] I don't want to make Ricky feel bad about this.
[03:02:06] I watched Ricky demo
[03:02:08] This feature
[03:02:10] Framework author.
[03:02:11] you know like guy in the know like myself and i know because i had this time myself
[03:02:16] But you practice your talks ahead of time.  You're ready.  You go.  I saw him demo it on my stream.  I saw him demo it at React Conf.  I saw him demo it on Learn Jason.  And every single time he forgot to do it.
[03:02:30] every single time. And it wasn't like, oh yeah, I forgot to do it. It was like sitting there for a couple of minutes going, okay, what's wrong with this example?
[03:02:36] How do I do this? What did I miss? Do this. Don't get me wrong. When you're on the spot like that, you do do like that and you don't see the obvious. Always happens. Happens on stream. I'm sitting here and I'm like, what happens?
[03:02:46] So, but it wasn't like the,
[03:02:50] Oh, yeah. Obviously. It was like the...
[03:02:52] OK, what did I miss kind of like level?
[03:02:55] Every time.
[03:02:56] Now that could just be like,
[03:02:58] Unlucky.
[03:03:00] But
[03:03:01] That sort of thing is partially why I think
[03:03:05] Async react hasn't like
[03:03:07] quite clicked with people yet.
[03:03:08] I know it's a stupid little API decision,
[03:03:10] But I think.
[03:03:11] Like having the call to second start transition, even though it aligns more with the future and it pays in context,
[03:03:17] is...
[03:03:18] Deep.
[03:03:19] biggest
[03:03:20] The funniest thing is it's not a huge foot gun because people won't notice and they won't quite get the right behavior, but it'll kind of work and they'll probably push through it.
[03:03:26] But it is like...
[03:03:29] the difference is Ricky knows exactly  what he's expecting out of the demo, so when he sees it  not do that, he knows there's something wrong.
[03:03:35] But the fact that it's not immediately
[03:03:38] realize,  realizable is,  is,
[03:03:41] super detrimental to the point that I...  I don't think that API, from my perspective, is shippable.  It's just...
[03:03:47] It's even worse.
[03:03:51] It's kind of worse being in the signature with solid. It's like awkward. It's bulky. It's like
[03:03:54] It's just like, yeah, it is terrible. I've never been a fan of generators. I think it's too hard for people. Like people see generators and like, "Oh, I don't understand generators. I don't know them. I don't want to work with them."
[03:04:05] You know, and like that, that, that puts like a shelf on things and you're like, oh man, it sucks.  People are gonna be like, I didn't know you could put a star after a function call and like what yield, what?
[03:04:15] That is how bad
[03:04:17] having the call start transition a second time is from my perspective like
[03:04:20] It is... it is...
[03:04:23] every complaint that people have ever had about React, like, for getting dependency arrays and, like...
[03:04:29] Like,
[03:04:32] It is.  Because I had this happen to myself even so many times.
[03:04:37] Like...
[03:04:38] I get stuck. I get stuck for a while. I'd be sitting there working demo and I'm like, "What the hell?" In the case, it's because I converted from a generator to an async function, just because I was cleaning up, I was trying to make it a demo.
[03:04:51] you know, for a talk or something, I was like, "Oh, I shouldn't use a generator, I should just use an async function."
[03:04:56] It took me like 10 minutes to figure out what it like.
[03:04:59] *laughs*
[03:05:00] It is terrible.
[03:05:01] Absolutely terrible.
[03:05:08] You ask me what it is, if this was, sorry, if this was, and this is a react start transition API, if this was an async function like this,
[03:05:17] Thank you.
[03:05:18] conceptually and like
[03:05:20] So we have an async function and then we await it here.
[03:05:25] For this to work properly, you have to actually call action
[03:05:31] again, like this, because you have to be able to associate it back into the transition. React, call it a thing, but you have to remember that after you do a wait, you have to wrap anything else that you want associated with another
[03:05:45] call like this.
[03:05:46] This is...
[03:05:48] if this wasn't generator.
[03:05:51] Thank you.
[03:05:52] I mean, Linters could catch it, I guess.  It's just like...
[03:05:55] This isn't even...
[03:05:57] This is just...
[03:06:01] There's nothing good about this.
[03:06:05] You don't...
[03:06:06] You don't get composability.  There's just nothing redeemable about this API.
[03:06:12] It is one of the worst APIs.
[03:06:15] I have ever seen.
[03:06:18] Anyway.
[03:06:23] Yeah, so, like, what is, what is, what is, actually, what's even the Linter rule?
[03:06:31] If someone calls any function after an await inside a transition, well, the funniest thing is you don't even know, because if you look,
[03:06:38] I can pull up Ricky's demo. You start making a,
[03:06:43] convention, like, one of the differences that Ricky did was he put the transition inside the components.
[03:06:50] Right? So then you'd be inside a transition scope or an action scope or whatever,
[03:06:57] without seeing the action call.
[03:06:59] So you would just get basically just get the async function.
[03:07:04] And you would then have to know that you need to call action again after you wait.
[03:07:11] You might know because your component calls it click action instead of on click.  So then you're like, "Okay, this is an action.  I have to make sure that I call this action again."
[03:07:20] Like,
[03:07:22] Yeah, I think this is worse than use effect.  Like...
[03:07:25] What?
[03:07:26] This is one of the worst, like, I couldn't, I couldn't, it's funny, I'm usually not so heated about this kind of stuff. I could never ship this API.
[03:07:34] it's so bad I'm willing to like
[03:07:38] Yeah.
[03:07:40] Bye.
[03:07:41] Anyway.
[03:07:42] Sorry.
[03:07:43] then willing to look at generators which I honestly
[03:07:47] If
[03:07:48] Not a big fan of.
[03:07:52] Thank you.
[03:07:54] Now, if we had async context, maybe this all goes away.
[03:07:58] So...
[03:07:59] So, you know, there is that.
[03:08:03] Thank you.
[03:08:04] But...
[03:08:08] No, Svelte's solution is more similar to SolidRouter's solution.
[03:08:13] like their optimistic solution is not a generic solution that's in the
[03:08:17] base of Svelte, it's built, it's like something I think built on top of data fetching in SvelteKit. Like, like, it's, it might be more
[03:08:27] outside of SvelteKit, I'm not 100% sure,  but they're not creating a generic  optimistic mechanism, they're
[03:08:33] creating an action that has a very specific semantics.
[03:08:37] So like, like I didn't have to worry about generators when I was building, when I was  building like solid router.  Yeah.
[03:08:46] Yeah, exactly. It's more like what we do in the router. This is low-level API. You'd build APIs like Svelte API on top of this.
[03:08:55] Um, and people will, cause they don't like generators.
[03:08:59] SolidStart probably won't expect people to use this kind of actions.
[03:09:02] But...
[03:09:03] That's...
[03:09:04] This is...
[03:09:06] I can build every one of these demos without JSX, with just the signals library.
[03:09:10] There's nothing intrinsically like, like this is just pure reactivity we're talking about.
[03:09:15] Okay, so...
[03:09:17] Now that we're pass generators,
[03:09:20] Refresh, it's something that comes from the API that takes either an accessor or refreshable store.
[03:09:27] So...
[03:09:28] This is not too hard to picture what it does.
[03:09:33] Thank you.
[03:09:34] Projections, when you return a value rather than mutate, do a reconcile under the hood.  So what we're basically getting here is
[03:09:40] Every time that we refresh the to-dos, we get a fresh batch from the server.  It does a data level diff on what's currently being subscribed to, and then updates just the places in the API that differ from where it is.
[03:09:51] That's the gist of it.
[03:09:53] So we can perform an action, do a refresh in the background, and get fine-grained updates. Super simple.
[03:09:59] People probably love this pattern, right? So.
[03:10:02] Nothing to worry about or think about here.
[03:10:05] Okay, now
[03:10:08] Now we should talk about
[03:10:11] Now, there's one thing that's very interestingly different here between what I did and what Ricky did in his demos.
[03:10:17] even though this is what I call the React.
[03:10:19] kind of style.
[03:10:20] I put the action
[03:10:23] in with the data.
[03:10:25] It's in this thing because this if you look this hasn't changed.
[03:10:28] Create Todos has the same interface.
[03:10:31] I didn't put the action down in to do component or, you know,
[03:10:35] or like, and I didn't make custom input that's like, exports an action thing.  The source of the action is in the data,
[03:10:42] not
[03:10:43] in
[03:10:44] the UI.
[03:10:46] And this is a key distinction, but it helps us bridge the gap.
[03:10:54] Thank you.
[03:10:55] Yeah, I imagine so. I think you guys were asking me earlier about effect. I think this is where effect comes in. I think you have the reactivity to show the graph and if you have like,
[03:11:05] if you basically most events
[03:11:07] that do complicated sequences and stuff, that's where effect comes in.  I haven't looked at effect closely enough, but I think this is the bridge point.  There's kind of two different sides of the coin.
[03:11:17] Anyway.
[03:11:18] So
[03:11:21] Now,
[03:11:24] I just to kind of demo very simply, I'm going to comment a couple of things out.
[03:11:31] Because they'll make it easier here.
[03:11:34] Thank you.
[03:11:35] My code here
[03:11:38] If I didn't need to do anything else, we'd just add a loading around it. And you can see here when we load, there's a loading thing here, right?
[03:11:44] Um,
[03:11:45] that hopefully should go away, what did I break?
[03:11:48] Did I break something?
[03:11:50] Demo has been working the whole time.
[03:11:52] Should I break?
[03:11:55] Oh that was weird. Wasn't that weird?
[03:11:58] Oh, you know what? I know why. I commented out
[03:12:04] I commented this out
[03:12:05] Sorry.
[03:12:09] What am I doing?
[03:12:12] I commented this out:
[03:12:13] commented this out, but didn't comment out where added is used. I like what I...
[03:12:23] Sorry. Okay.
[03:12:26] Now it should work.
[03:12:27] Yeah, okay. So what I wanted to show here is, with the change we made to the data,
[03:12:33] Technically speaking, this is the exact same function that we were using to add a to-do before.
[03:12:39] And then the UI, I have not actually changed a single thing in here.
[03:12:44] or here. This is
[03:12:45] some optimistic thing that I added.  To-dos also don't need to be any different, okay?  So, in a world like that, the problem is when I add async and I go like,
[03:12:54] And I go, hello.
[03:12:58] There's a delay, like the input disappears, but there's this like time period where there's a delay.  Now I have some other optimistic updates here, so you're not going to see it properly, but I go,
[03:13:05] So if I go,
[03:13:07] And if I add a bunch fast,
[03:13:11] Thank you.
[03:13:12] You know, you don't really get to see this.  So yes, we successfully added async.
[03:13:18] but we have no indicator that async is happening.
[03:13:23] So,
[03:13:24] We need UI for that, essentially.
[03:13:27] Now, the easiest way to do that
[03:13:30] which kind of almost the way Remix introduced it,  is that we add optimistic state here, right?  So this is where I add create optimistic,  so I just undo what I did previously.
[03:13:41] And what optimistic here is an array, and when I save the to-do, I also add it to an array
[03:13:51] of
[03:13:52] of
[03:13:53] that started as empty...
[03:13:55] I just add it to the array.
[03:13:58] So this is our action add to do, but then we have an optimistic update that we do here. And then down here, I make another for loop where I
[03:14:06] instead of going over our to-dos, I iterate over the added items. And what this does,
[03:14:10] is when I go A, B, C, B. We see them all come in as they do.  And then when it resolves sometime in the future, assuming it matches,
[03:14:19] Um,
[03:14:20] then nothing will update anymore.
[03:14:23] Because
[03:14:24] Because essentially, I mean, the UI will update. There is a difference. Items move from this list.
[03:14:30] to this list, technically speaking,
[03:14:33] But you should probably see the same thing, right?
[03:14:37] Uh...
[03:14:38] So that's kind of the gist of the optimistic thing.
[03:14:42] And we don't have any additional affordances in this example. We could,  like originally when I made this, I actually didn't use a to-do. I actually used like a,  I copied the code from the to-do and then like showed it like grayed out with an opacity. So you
[03:14:56] do any like operations on it so they could see the difference when i was loading in  but if you have no reason
[03:15:03] to
[03:15:05] do that
[03:15:07] then there's like no reason to do it. Do you know what I mean? Like if you don't need an affordance, like what I'm getting at is if I add a to do and I click checked on it,
[03:15:15] or remove it while the stuff's still on flight?
[03:15:18] I didn't remove the check when I moved the one above.
[03:15:21] it's still going to work.
[03:15:23] It's gonna actually save
[03:15:26] It's going to send off those requests. I can interact with an optimistic
[03:15:30] piece of UI because it has the idea. It has everything. Like in this case, I have everything I need to. So
[03:15:35] when I call toggle to do on this,
[03:15:37] the created to do already has an ID so it can save that
[03:15:41] while it's still in flight.
[03:15:43] Um,
[03:15:44] So like we can get ahead of the optimism and layer on as many layers as we want.  Right.  Like this,  this is quite a powerful thing.
[03:15:54] powerful mechanism, right? Like, so the reason you don't see any affordance for optimism in this example is because
[03:16:01] Um,
[03:16:03] we're pretending like it's sync.
[03:16:07] It just, like...
[03:16:09] I can do any operation.
[03:16:11] Um,
[03:16:12] as I want to. And I said, I got this from Remix. This is the first example where they showed they mapped over the to-dos and then they mapped over the adding to-dos. I just think we've, you know, we've obviously a little bit more ergonomic now.
[03:16:23] we can just say give me some optimistic state like it's not tied to specific like form action or  whatever like kind of piece like you just go give me some optimistic state and then do that and the
[03:16:35] is like,
[03:16:38] I pass my actions here.
[03:16:40] also down through to do like I was doing previously.  I didn't have to change that wiring and then down here,
[03:16:46] for is removing several, I create some more optimistic state.  I'm like, if I'm removing, it's a Boolean.
[03:16:50] And my optimistic completed, well, it's derived
[03:16:53] It's optimistic. It's like create signal.
[03:16:55] It can be derived or a value. It's derived from props to doing completed.
[03:17:00] So,
[03:17:01] This what this the way Optimistic State works is while the async is in flight,
[03:17:06] it will use your override
[03:17:08] instead of
[03:17:09] using like the actual like value. So like,
[03:17:13] Like, when you set...
[03:17:15] We're moving to true.
[03:17:17] It's gonna, when you read is removing, it's gonna be true.
[03:17:21] When the async ends,
[03:17:23] it's going to set it back to the reset value.  So it's going to set it back to false.  But in the case of like when it's derived, when the async ends,  it's going to set it back to whatever it's currently derived from.  So if you click completed,
[03:17:35] which sets it to true, optimistically.
[03:17:37] And then the server comes back and the async ends.
[03:17:42] Well, hopefully the server also updated and sees true, and then they'll see true, true. I don't have to do any more work.
[03:17:48] But essentially, even if it started as false, it won't reset to false or reset to true, because that's the current value from the server.
[03:17:53] when the async resolves.
[03:17:55] And then
[03:17:56] the stuff itself for the optimistic, I just put set completed, checked,
[03:18:01] And then I call the prop handler set remove true checked, like I said, and
[03:18:06] this mechanism automatically handles the reversion. So this is what made that ephemeral state
[03:18:12] so powerful is because you ever use GraphQL,
[03:18:16] for for optimistic stuff like where you like pagination where you're like you're managing  the cache yourself the reason the remix model is so powerful is because you're not managing  the cache you're kind of keeping it separate you have like
[03:18:27] You have like your truth layer coming from the server and then you have this like.
[03:18:30] sort of
[03:18:32] that's transient that sits on top and then removes itself.
[03:18:36] That's essentially it.
[03:18:40] As I said in React, they were putting the start transitions down here.
[03:18:43] The difference with this model is because transitions are implicit, they're already there.
[03:18:48] by default,
[03:18:50] everything in the same tick is going to be part of the same transition, right?  So like when you handle an event,
[03:18:56] the optimistic state, the action, all that gets tied up in the same transition.  So you don't have to, the wrappers can exist with the data.
[03:19:03] instead of
[03:19:04] with inside the components. So the component, again, this is kind of like the is pending parallel I was talking before. The component can decide, hey, look,
[03:19:13] This is a little less...
[03:19:15] detached perhaps because the component has to be somewhat aware, but it can decide
[03:19:19] hey, I have optimistic behavior.  It doesn't really know what the action is here.  In this case, like it...
[03:19:26] If you think about it, like I was having a hard time when I was struggling through this example, because I'm like,
[03:19:31] Like the check is pretty easy.
[03:19:33] You as a component can know, like, if I have a function to be checked and that could cause something async, then potentially I want to be able to show some optimistic to show that my checks succeeded. But like,
[03:19:44] who removes themselves?  That's like,  it's a,  it's a weird thought,  but,  but,
[03:19:50] Again, it was easy. I show myself if I'm not removing. If I'm removing, I just remove myself, right? And again,
[03:19:57] I can...
[03:19:59] What's cool about this is I was able to replace references to props to do.completed with isCompleted, and I just know that when I'm under async or not under async, it's just going to give me the right value regardless.  So this is the key improvement over...
[03:20:14] uh the bits the aspects that i found challenging with the remix api and that i  got from basic core react is i started writing these tons of combinatorics
[03:20:25] Ah.
[03:20:26] around like, you know,
[03:20:30] if this is pending and this is pending then show this and like to do math i guess i still would  need to do this if i created multiple optimist states but i can kind of choose the granularity  in which i merge it in with it's not necessarily tied to a specific action it's tied to the like  the state has a definition rather than the actions each pretend saying like hey i'm pending i'm  pending and then you have to do the combinatorics the combinatorics exist in the state and it's a  responsibility the actions to be the ones or the the events to be the ones to say decide how they
[03:21:00] logic a little bit less error prone.  But what's again, what's cool is the action itself is just another participant in it.  You don't need to like.
[03:21:09] Like we don't.
[03:21:10] we don't have the like,
[03:21:12] This is still on toggle. It's not on toggle action because effectively,
[03:21:17] everything's under transition. So there's no need to differentiate that on toggles an action or not, because like,
[03:21:24] It's.
[03:21:24] It's all a transition.
[03:21:29] Yeah, wrappers exist in the data instead of the component, is that right? Yeah. So yeah, this is super powerful because it's basically the same demo I made with Ricky.
[03:21:36] And then I just overlaid some
[03:21:39] some optimistic updates in it.
[03:21:42] Right.
[03:21:43] But
[03:21:44] This wasn't good enough for me.
[03:21:46] Right. I like...
[03:21:48] I'm like, "Okay, so this checks off this box, but...
[03:21:51] It...
[03:21:52] If... if...
[03:21:53] Oh, hey, Theo.
[03:21:55] Um,
[03:21:58] How's it going? I will talk about async or sort of AI a little bit today, probably, but I am not quite there yet.
[03:22:06] I'm on my last async to sync example right now, which is,
[03:22:10] kind of cool. It's a to-do app. So, which is not very cool, but the power of it is really cool.  Okay, so what if we took a different approach?
[03:22:21] And...
[03:22:22] That different approach is this last example.
[03:22:28] Thank you.
[03:22:30] What if I told you that we could have async
[03:22:33] and literally
[03:22:35] not change a single piece of code in our example.  Let's be remember, look here.
[03:22:40] like in our like UI part of the example. So let's go back here. I'm in my app. I have my to to app where I create my to do stores on input trim add to do go through for each to do to do to do remove toggle this.
[03:22:54] You remember this code from a bit earlier.
[03:22:56] Now, look at my optimistic UI example.
[03:23:00] I updated the stuff to use some async, which is still pretty easy to do.  But then in here, I had to add the optimist state.  I added the extra setters.  I added the second for loop.
[03:23:12] I...
[03:23:13] Did a few more optimistic overrides, kind of called them the toggle and stuff. I mean, don't get me wrong. This is,
[03:23:18] Sometimes you need this because when the furnaces diverge from the future, it's important to have this mechanism.  This is super powerful, super clean mechanism.
[03:23:26] This is already much cleaner than you've probably ever seen with React.  But we can do better.
[03:23:33] What I did with this example is look at it.
[03:23:37] This is our exact example. Again, to do's to do's.
[03:23:40] on input, pad.
[03:23:42] Our code, okay, I added a loading boundary. Sorry guys, there's one loading boundary because I, I mean, it's not even necessary as we know, but I added it. And then in here, we just call props on toggle. So yeah, I did not change any of our UI code. It's the same UI code that we had when we were synchronous. So what did I change?
[03:23:59] Well,
[03:24:00] Instead of doing optimistic overrides granularly in those places in the UI, what if instead of
[03:24:08] of changing our store to an async projection.
[03:24:12] I make an optimistic store.
[03:24:15] So now our data
[03:24:18] is optimistic.  It's not like...
[03:24:21] It's not just like normal async data that propagates through, and then we like add  Optimist API, we're now saying that our whole data store is this piece of optimism and.
[03:24:31] Again, same kind of thing.  We don't care.  What's this promise of to-do array?  Well, that gives us a to-do array, right?  Yeah, it does.  Because we can pass promises.  We can pass generators.  We can just absorb any async source and just get out a signal, essentially, on the other side or a store, right?  So that part's the same.  The actions...
[03:24:50] look almost the same except what did I do?
[03:24:53] This is the fun part.
[03:24:55] If you look at the simple to-dos,
[03:24:57] and you look at what my actions are here essentially.  When I add a to do, I call set to do.  When I call remove to do,  I call this on the store and these are all just basic store operations.
[03:25:07] When we did optimistic UI,
[03:25:10] What did our actions look like? Well, we yielded our add to do, remove to do, and then we called refresh on them.
[03:25:19] When we look at our Optimistic Store example, we just do both.  Our Optimistic Update is our original Synchronous Store Update.
[03:25:27] Then we do our action and we refresh.
[03:25:29] are
[03:25:31] the
[03:25:31] All we did was just add the optimism in the form of the original updates. So if I was going from sync to async,
[03:25:38] All I do is wrap my function in a wrapper, keep my synchronous code, and then add my async code to it.
[03:25:46] And what's really cool about this is
[03:25:48] As you know, optimistic auto-reverts. If the server doesn't agree with the client, it fixes itself, right? Using that fine-grained data diffing we talked about already.
[03:25:58] The end result
[03:25:59] is
[03:26:02] Mm.
[03:26:03] And it's just the same thing again.  We literally...
[03:26:06] kind of combined
[03:26:08] the more complicated Automistic UI
[03:26:12] approach of that. Well, I mean, it's just we took the stock of
[03:26:16] We took async.
[03:26:18] We took sync.
[03:26:19] jam them together
[03:26:21] And then our app does not need to change any code.  And as you guys know, this will just work.
[03:26:26] perfectly optimistically while our async is happening.  Like we don't care how long that to-do takes.  Like because we're living in this async world,  I can go in here and go into our API
[03:26:39] And I can go, let's do something dumb.
[03:26:42] getting the to do's take like
[03:26:44] Two seconds. Something like stupidly long.
[03:26:48] So yeah, it's going to load for a while here because I did that. But now...
[03:26:51] We're doing this, we're checking this. I swear to you, no way they could possibly save in the time.
[03:26:59] that two seconds, but we're good.
[03:27:01] because we're basically working on that optimistic UI before it even, you know, comes back from the server, which you can do without optimistic data.  But the key part here is.
[03:27:12] We didn't need to change any of our synchronous code.
[03:27:15] Even in the actions, we can keep our previous synchronous code
[03:27:20] as our optimistic
[03:27:22] uh, optimistic update. The only thing we have to do is be like, okay, let's save it.
[03:27:31] Wow.
[03:27:32] No? Yeah, I didn't think anyone would get it. This is like ground raping.
[03:27:38] Thank you.
[03:27:38] Thank you.
[03:27:40] Okay.
[03:27:41] Thank you.
[03:27:41] Okay.
[03:27:42] Thank you.
[03:27:46] Thank you.
[03:27:47] Yeah, that's what the goal is. Because when you go in here,
[03:27:53] all you cared about was the simple stuff. You're like, "Look, I have it to do. I want to add it."
[03:27:57] Remove it.
[03:27:58] The wiring here shouldn't change because async happened.
[03:28:03] So,
[03:28:04] I was able to abstract the asynchronously, the optimism. Do you know what this is like? It's like a sync engine.
[03:28:10] Right? Except it's not a sync engine. I just gave you a sync engine without you having a sync engine. Like,
[03:28:14] Like,
[03:28:15] The...
[03:28:16] you're not worried about async. Stuff just happening works perfectly, purely optimistic.  You're writing synchronous code. And guess what?
[03:28:25] It's because we decoupled it. We don't... Sync engines work because they give you incremental updates.  This is not incremental. This is terrible. I'm refreshing the whole to-do list  every single time I'm doing it. But you can't tell
[03:28:36] It doesn't matter. You can swap out the protocol behind the scenes.
[03:28:39] we've made a consistent reality.
[03:28:42] Um...
[03:28:45] Thank you.
[03:28:48] - What is the difference between Create Store  and Create Optimist Store?
[03:28:51] Create optimistic store reverts.
[03:28:53] If the reality doesn't match, you're right. To sense store could, a store could like, when the data come in diff,
[03:29:02] But the problem is okay.
[03:29:03] Let me explain.
[03:29:05] It's a little-- this is a harder question to answer slightly.
[03:29:09] But if I just left this as a store,
[03:29:12] then like...
[03:29:15] All the race condition stuff that we were dealing with earlier, like, you know,
[03:29:19] We're using the reactions here to actually ensure consistency.  So we don't want optimistic stuff to remove too early.
[03:29:27] when you click it three times. You don't like if you go delete, delete, delete, and things come in at different orders. You don't want like
[03:29:34] things to kind of jumble around where like something deletes and then comes back again, you know, like
[03:29:39] like because you optimistically delete it, but then the first data come back from the server has the deletion, like has the item still in there, like the benefit.
[03:29:48] of this optimistic store is that it actually knows how to handle the reversion properly and it's like
[03:29:55] transitionally aware of that piece in the life cycle. Um,
[03:30:00] Don't get me wrong.  People are probably going to...
[03:30:05] do this,
[03:30:08] not realize like not realize
[03:30:11] And I mean, let's do it. Let's see what happens. Like this probably will still work in this example, especially when there's no errors.
[03:30:19] Oh no, the other difference is...
[03:30:21] It's not going to update the UI right away.
[03:30:23] Think about it.
[03:30:24] if it's not an optimistic store it's not an optimistic update so it has to wait for the  transition to show anything
[03:30:30] Sorry, that's the biggest difference.  If it wasn't an optimistic store...
[03:30:33] then
[03:30:36] Yeah, sorry. This is taking so long because I made it
[03:30:40] two seconds long. Sorry, that's...
[03:30:42] Thank you.
[03:30:43] Let's just go back.
[03:30:45] Yeah, sorry, duh. If it's not optimistic, then it has to wait for the transition.
[03:30:50] You're not getting optimistic updates if it's not an optimistic store.  Yeah, great.  So we don't even have to worry about that.  Yeah, sorry, my bad.
[03:30:55] That's like the obvious answer. You want an optimistic store because you want optimistic updates.
[03:31:02] Thank you.
[03:31:04] Thank you.
[03:31:06] Thank you.
[03:31:07] Thank you.
[03:31:09] Right?
[03:31:15] .
[03:31:22] Thank you.
[03:31:26] Okay, so we got some questions coming in. How does the state from the server flow back down into the to-do state value?
[03:31:33] Right here.
[03:31:35] Because we call refresh,
[03:31:37] this is part of our like smart graph thing. Refresh to do's tells us to rerun this function, which tells us the fetch and then create store uses reconcile under the hood, which is a fine grained data diff, which I described a bit earlier, where it diffs along the subscribe path. So it's fairly efficient. It's basically kind of like a mini version of what react does. React
[03:31:58] you only diff the UI, like the parts that are used.  This is a similar diff that only diffs the parts that are used  and then swaps out the rest.  And then the parts that are used get notified if they change,  that does fine-grained updates in the UI  as the stuff comes back.  What's beautiful though with optimism is,
[03:32:13] Again, why the stories are awesome is because the projected optimistic layer is stable,
[03:32:21] on top of
[03:32:23] of where you're at.  So if you add a to-do,
[03:32:25] optimistically, it creates DOM nodes, right? Those same DOM nodes
[03:32:30] are present when it tries to diff what comes back from the server later. So if nothing changed,
[03:32:36] you get to reuse the same DOM nodes.  And in fact, if nothing changed,  nothing reactive gets propagated,  so we don't have to do any further updates.
[03:32:44] Like it's it's.
[03:32:45] it's fine grained.  It's funny.  It's not fine grained over the network,  but it's fine grained from every point on there.  So from like a developer standpoint,  it's like,  it's like,
[03:32:56] If you ignore the network tab, it's a sync engine. That's the best way I can put it. Like, maybe people understand. It's just like,
[03:33:04] the framework
[03:33:06] From data forward, it's so optimistic or sorry. So, um.
[03:33:11] optimal that like
[03:33:15] we don't do any additional extra work once we get the data.  Like the network protocol doesn't really matter.  I mean, I love synchins and incremental data  so that like you can not shove it all over the wire,  but that doesn't prevent us from doing the best possible thing in the UI.
[03:33:36] What about reorders due to network shenanigans? Okay, yeah.  So there's two things that we have working for us here.
[03:33:42] One thing that we have working for us here is that
[03:33:45] the refresh, the store itself or the async things are self-canceling.
[03:33:52] So,
[03:33:53] Um...
[03:33:54] It's only the last refresh.
[03:33:57] that will
[03:33:59] That will...
[03:34:00] that we'll get through. The second thing that we have going
[03:34:03] through us for us is because of the way entanglement works, and especially with optimism here, is
[03:34:11] Uh,
[03:34:13] Even though people complain about how React makes everything a single transition, we don't make everything a single transition, but like in cases where things are related, like we're operating on the same to do list, they actually are the same transition.  When I called like click the like crazy there a moment ago with the two second delay, you know, they all overlap because the overlap of the same data requirements in terms of what gets set here, forms of what gets refreshed here, we actually are entangling them.
[03:34:43] which means
[03:34:44] even though we're showing stuff optimistically, the stuff coming back from the server
[03:34:48] is not going to be like, I am true until
[03:34:52] Everything is processed.
[03:34:55] Right, so with those two constraints in place,
[03:34:59] Um,
[03:35:00] You essentially like, don't get me wrong.  There are still, we can talk about a second.  There's still some race conditions that can exist, but you eliminate like 99% of the, of the race conditions, because this is why we want action.  That's why we want to connect the before to the after so that they're not treated as separate operations, because it's really important that.
[03:35:21] Just because we're on part A, like we're saving...
[03:35:25] and we're refreshing, we don't want those to get untangled from each other.  We want to make sure that if another operation comes in and they overlap in such a way,
[03:35:34] Like,
[03:35:35] that, you know, this one's refreshes before this one does like, and they don't like, they need to know that they overlap to ensure that they stay consistent. Now, to be fair, a lot of times.
[03:35:44] if you don't have optimistic state, you're not going to notice that.
[03:35:49] and it's actually perfectly fine.  It's just an optimistic state because the way it can, like, disappear on you and bounce around, it's...
[03:35:54] it makes it very evident of when these issues happen. But on the flip side,
[03:36:01] Optimistic state is important for us because it's a part of the reactive graph.
[03:36:05] we now have a new heuristic on which to entangle on.
[03:36:09] So
[03:36:10] like it lets us be smart, actually adding optimistic state. Um,
[03:36:15] informs entanglement in a really clever way. So the
[03:36:21] It's...
[03:36:23] Yeah, it's not...
[03:36:25] It's not...
[03:36:27] 100%
[03:36:28] We talked about this on a previous stream.  I think there's a...  We had a really hard time,  because we went through Jose's...
[03:36:35] Um,
[03:36:36] from live views, all those complaints about out of order timing things.  And I think out of all of his examples, he had like eight of them.
[03:36:44] There was only one that actually was still applicable, but it was like kind of like
[03:36:48] One that we're like...
[03:36:50] The only solution would be like...
[03:36:54] Like almost no one working in the client-side app has any expectation that this case would be there. We're used to dealing with systems that only handle maybe two or three out of the edge cases.
[03:37:09] And so coming down that the baseline of just doing the normal idiomatic thing handles seven out of the eight edge cases is like.
[03:37:17] such a drastic improvement that if you want to handle that last one eighth of the edge cases yourself like
[03:37:23] Go for it.
[03:37:24] Thank you.
[03:37:25] Thank you.
[03:37:27] Thank you.
[03:37:28] Thank you. I get it.
[03:37:31] *laughs*
[03:37:32] Uh...
[03:37:37] This is the funniest thing about this. I'm trying to explain why it's clever on this.  And then when you look at the actual code and you actually do the thing, you're just like,
[03:37:46] Like,
[03:37:46] the it was one of the most anticlimactic moments when i finally got like i've been making these  demos with create async and i've been like going through them and i was like i was like okay cool  this looks cool and people could get it and then i removed create async then i moved this and i  simplified this and then i was like
[03:38:00] How am I going to demo this stuff? It just looks like you write the code and it just does what it's supposed to do.
[03:38:04] No one's going to be like, wow, Ryan, you know, like this seems like what I want to use.  They'll just be like.
[03:38:10] Like, doesn't everything work like this?
[03:38:12] And it's like, no, not at all. Like, it's just, it's so obvious in hindsight, but it's like,
[03:38:18] Yeah.
[03:38:19] Yeah, it's one of those things.
[03:38:21] Thank you.
[03:38:24] Thank you.
[03:38:24] Thank you.
[03:38:26] Thank you.
[03:38:31] Thank you.
[03:38:33] Thank you.
[03:38:34] Thank you.
[03:38:37] Thank you.
[03:38:41] Okay, what else we got here? Can you add some randomize?
[03:38:45] failure operations like yeah yeah yeah
[03:38:48] The problem is that...
[03:38:50] I can. The challenge here is if you add...
[03:38:53] failure, your UI code needs to be able to show the failure.
[03:38:58] Um...
[03:38:59] If I made the affordances, I could go and add that and show it working right now.  The easiest way that I actually show this working, although it doesn't always work  with stack blitz is I open up two windows.
[03:39:08] and then I start typing in one window, like the WebSocket example, right?  Where I update in one window and then update in the other window.  And then like, you'll see the updates from each window show up in the reconciled results.
[03:39:21] Like, I mean, I can...
[03:39:23] probably do this right now. The problem is it's really weird. StackBlitz sometimes gives me different local storage. I don't know why.
[03:39:31] I almost have to like start over.
[03:39:33] Um,
[03:39:35] but yeah I mean here's the thing
[03:39:39] And this kind of relates to the Jose thing.  If you're in a system that's real time  where you're expecting to see updates  from other clients all the time,
[03:39:47] and it needs to be consistent, like you have a WebSocket open, then you have a different sort of expectation on UI where that last case that Jose was talking about actually matters. But most people where you're working on something and it like only updates when you perform an action or do something and like,
[03:40:04] It's not like
[03:40:05] live in the background.
[03:40:08] Your expectations can only go so far in terms of how the UI works.  But yes, I think the biggest takeaway for me when I started working on this example was, and it became really obvious when I was working on the Optimistic UI example.  Because the more I made this, like the sync example, the more that I made it just work as if it was synchronous, the less...
[03:40:28] uh,
[03:40:29] the less specific affordances I came up with. It
[03:40:35] It approached this optimistic data thing where basically the UI is the same. But the thing is,
[03:40:41] Async and errors are real.
[03:40:43] So,
[03:40:44] The exercise of going from sync to async is mostly an exercise of showing
[03:40:50] how
[03:40:51] the success path is smooth.
[03:40:53] Even with stuff like this, you have to be aware that, hey, stuff takes time and stuff can error.  And that stuff can error thing can happen before async.
[03:41:02] Most demos don't have error handling, which is why this demo does not have error handling.
[03:41:06] If we had error handling,
[03:41:09] we would...
[03:41:10] we'd already have the affordances to actually finish the demo of the show.  What I wanted to do now, the remix demo did have error affordances.  So it is worthwhile that some point did I make a demo that shows this with the error affordances, but
[03:41:22] I think one of those kind of real, realism, real things I realized is that optimistic updates
[03:41:29] always require optimistic data, but only sometimes require optimistic UI.
[03:41:33] That's the takeaway here.  So like what I mean by that is
[03:41:38] Thank you.
[03:41:39] Optimistic data here in the, sorry, in the optimistic data example is actually just this create optimistic store, right? It's a self-reconciling, super smart,
[03:41:50] async safe storage, right?  In the optimistic UI example, the optimistic data
[03:41:57] is
[03:41:59] these create optimistic calls that I have, you know,
[03:42:03] in a couple places here.
[03:42:05] But in the optimistic UI example, because of the way I put the data, I was pretty much
[03:42:11] forced to make some changes to the UI to represent it.
[03:42:17] Whereas in the other case, because it fed through the normal data channels, I did not need to make UI changes. But let's pretend that we had a requirement here where when the stuff is new, we wanted to show that it's new. So like we highlighted green while it's coming in or something. Now in the optimistic
[03:42:35] UI version.
[03:42:37] This is fairly easy to do because we just like
[03:42:39] Bye.
[03:42:40] put something on this to do in the second forward loop and just go like, make them green.
[03:42:44] Right. Done.
[03:42:45] With the optimistic data version,
[03:42:48] we now don't have the data to necessarily to represent that.  So we'd have to add it.  Maybe when we add the to do here, when we push it on, we go to do.
[03:43:00] Thank you.
[03:43:02] with pending true. Now this field doesn't exist on to do today, but
[03:43:06] But it's fine to do this because optimistically, you're adding the same to do, but you're adding a pending true. Now, in our UI, we will be able to render something with that pending true, like show the green.
[03:43:17] But then when the server comes back and refreshes it, there will be no pending true on the server, which will remove the field, which will remove our green.  So, um...
[03:43:26] like
[03:43:27] uh,
[03:43:29] And
[03:43:31] There's a lot of play and flexibility
[03:43:33] with these approaches. But the thing to keep in mind is
[03:43:38] None of this stops you from having to be aware that things take time.
[03:43:43] and
[03:43:44] that you need to handle errors. What it does do, however, is simplify the wiring
[03:43:52] so that there is basically no difference between sync and async.
[03:43:55] That's the pitch.
[03:43:58] Thank you.
[03:44:00] Thank you.
[03:44:02] Why is this feeling so simple? Solid your eyes. Solid thing.
[03:44:09] You can see, eh, one day.
[03:44:12] So data diffing only works on simple data structures like lists, maps,
[03:44:16] Those are objects and that's it. Yeah. I mean,
[03:44:19] Here's the thing.
[03:44:21] Okay.
[03:44:21] Stores have
[03:44:24] this built in diff.
[03:44:26] when you return projections, like when you return the value?
[03:44:30] But these are actually mutable.  So it is completely possible to define your own diffing algorithm and stick this in here  and return undefined.  If you don't return anything, return void.  Then you can create your own diffing mechanism because they pass the...
[03:44:45] the store in, like you get S in and then you mutate it.  That's the actual API on here.  So you can create other
[03:44:53] Diffing mechanisms if you want to. It's just like the base case is
[03:44:59] is fairly straightforward here. Um, and yeah, stores themselves only really support objects, arrays, simple data structures. Um,
[03:45:10] Yeah, but I mean, again, for the most part, this doesn't get you in trouble because like, what are you dealing with?
[03:45:17] most things that you're serializing are,
[03:45:20] JSON or JSON-esque if you're talking to a server. I'm sure there's exceptions to this where you're going to need to do smarter stuff.
[03:45:33] All right.
[03:45:34] Yeah.
[03:45:36] Yeah, that's why I was talking about sync engines.  The difference is
[03:45:40] This is handled
[03:45:42] This is like just what the framework does where Tansac DB is like manages that your data level. This is like
[03:45:49] Mm-hmm.
[03:45:50] There are similarities here. A lot of the work that I did when I was working on these features was inspired by that. And I wanted a solution that worked really well with Sync Engines and things like HandStackDB. Like if they go through all this trouble to dip your data, do incremental updates and push that through,
[03:46:05] Sending it to react to re-render everything seems like such a waste of time.
[03:46:09] Like...
[03:46:10] like, it's fine, React will handle it, so to speak.  But it's just like, you do all this work to be incremental, and then you're just like,
[03:46:17] Throw it away, you know?
[03:46:20] So yeah, I...
[03:46:22] I want it, the thing is, and I've done this a few times, even like when we did server functions in Solid.
[03:46:28] I wanted to give the capability of more capable tools
[03:46:33] at a base level, like server functions were so powerful because they're like,
[03:46:37] I know, like, you don't need...
[03:46:39] Like, it's an extension.  Like, I understand people, like,  remember the whole thing that was, like,
[03:46:43] You don't need GraphQL, you have tRPC.
[03:46:46] And then like, but like, so the sort of function jump was more like you don't need
[03:46:51] a dedicated solution to get tRPC essentially,
[03:46:55] You just...
[03:46:57] have it, right? Like that was a server function kind of sell. So like you don't need GraphQL,
[03:47:03] You just...
[03:47:04] have functions.
[03:47:06] You don't need an API, you just have functions.  Like this...
[03:47:09] is kind of the same thing.  It's like,  it's like,
[03:47:11] People who need sync engines will use sync engines.
[03:47:15] But for everyone else,
[03:47:16] you basically get the benefits, um,
[03:47:20] in a data source protocol agnostic way.
[03:47:27] Well, I mean, right now, if it fails, there's no error handling, right?  So what type of failure do we want?  There's two types of ways you handle failure.  There's failure on fetch.
[03:47:38] which will be caught by an error boundary.
[03:47:40] which we don't have in here, and this failure on save, which will just not save it, which means your optimistic updates will just remove. So if we if we just were, if we were just randomly in here failing stuff, all you would see is like,
[03:47:53] those operations disappear on you randomly. So you're like adding three to do's and then only two show up in the list.
[03:48:01] Right.
[03:48:02] If you want to like you have to decide the affordance to decide what we want to show.  Right.  Right.
[03:48:11] What's the difference between Optics UI and Data? Just where the things get merged. Essentially with optimistic, what I was calling optimistic data, it means like the core source coming into the whole application is optimistic.
[03:48:23] with the server being the source of truth and with optimistic data,
[03:48:27] The
[03:48:28] we're doing kind of
[03:48:30] or sorry, that's data, sorry. With Optimistic UI, we're just doing individual overlays where applicable. Both techniques can work together, both techniques are
[03:48:38] are powerful.
[03:48:45] Yes. I constantly catch up with the relay team. I'm working now like five years. Oh yeah. GraphQL never fell out of popularity because it wasn't the best technical solution to the problem. It's still better than...
[03:48:59] we're doing here. It fell out of popularity because it was like too complicated. It was too involved.
[03:49:05] Like,
[03:49:06] Relay example usually comes down to like,
[03:49:10] you need to do hoisting, right?
[03:49:13] granular loaders
[03:49:15] that you find in SaltStart, SvelteKit, and HandStackStart are very close approximation of this. Because what you can do, you can create a pattern where you have your preloader function. And then what you can do is, beside your components in your tree, you can create, you want them as separate files because you don't want them to be bundled together, but you can create separate
[03:49:36] imports which describe the data loading for that specific
[03:49:40] And then what you do is you import the types
[03:49:42] from there into your component. And because of types, they're not going to get bundled together.  And then the actual data fetching piece, you import back into your loader. So this way you distribute your loading through the tree, and then you use your data loader to construct a query in which you do the actual thing.  There you go. The poor man's GraphQL, so to speak, you know, as granular data, definitely like I have here, like you can approximate it.
[03:50:06] Um,
[03:50:07] with, you know, in a bulkier way.
[03:50:11] GraphQL is way more powerful than that. It has normalized caching. It has, you know, like it has a whole bunch of other features. It also has generally 40 to 60 kilobytes for the actual package.
[03:50:22] And all the infrastructure, the schema matching, all that.  Like, there's so many, like, way more declarative  because you can, like, the stitching of the queries happens...
[03:50:30] from the query language itself, not from some manual wiring. There's a bunch of reasons to use GraphQL.
[03:50:37] But that doesn't mean GraphQL wins.
[03:50:40] Right. Which, you know, people might say is,
[03:50:43] you know,
[03:50:45] You know.
[03:50:47] This is a different argument I want to make clear than saying like,
[03:50:50] you know, something like, oh, solid's better than reactive. That doesn't mean solid wins or something like that. I'm not I'm not suggesting that I'm saying it's not because
[03:50:58] something better versus not better. It's because of the complexity.  Like this is the better isn't like a purely
[03:51:06] Uh...
[03:51:08] like, isn't the only metric we're looking at here. It's like,
[03:51:11] the rest of the opportunity cost on a technical stance, not just on a like, does my team know this technology stance, but like on a technical stance is actually has severe implications.
[03:51:21] People have gone to this in depth forever. I'm a huge fan of GraphQL.  I was responsible for doing GraphQL integration at Vidigami, the
[03:51:29] startup that I was working on when I first created Solid and
[03:51:32] also responsible, funnily enough,
[03:51:34] for doing the framework integration for GraphQL for Marco at eBay.
[03:51:38] So I'm, you know,
[03:51:40] I'm a big fan of it, generally from what it's capable of.
[03:51:45] But I understand why people don't use it.
[03:51:48] Bye.
[03:51:49] Yes.
[03:51:51] Welcome to the show.
[03:51:54] I mean, what's more ways to see it?
[03:51:59] Okay, I mean, sure.
[03:52:05] - It's actually pretty painful it's time to be able to build efficient React integration.
[03:52:10] Thank you.
[03:52:11] Yeah. I mean, I don't imagine solid integration isn't very nice today either. I imagine there's a lot of things. This is what I've been thinking about, though. I want these tools just to be like solid's the obvious choice.
[03:52:25] Thank you.
[03:52:27] Yeah, I mean, this is why we rely on the O4I. This is the same. Relay is incredible. I've never  gone into working right. Like that's the summary. There we go. I went on for like two and a half  minutes trying to explain it. It's like,
[03:52:43] There we go.
[03:52:45] Like...
[03:52:46] I never used Relay. I used Apollo.
[03:52:51] to simulate relay, it was simpler to use. But the problem was like,
[03:52:57] It was simpler for me to integrate and set up.  But when we got to the push comes to shove, when we were actually making the real app and doing
[03:53:03] the...
[03:53:04] I wasn't involved as much on the team anymore, and I'm not going to blame the people who are actually doing the development work here.  But I started reviewing their stuff, and I'm like, why didn't you use this cache update function?  Why are you doing this?  And you're just like...
[03:53:18] I.
[03:53:19] I was writing a bunch of buggy code
[03:53:22] that kind of worked but then didn't work in the edge cases. And instead, I just got rid of an edge. It worked.
[03:53:26] You know what I mean?  Like, and this is how people fell on Tantastack Road.  It wasn't just like...
[03:53:31] the initial infrastructure too, it was like literally writing the right thing was actually that much more difficult. So yeah, I mean, it's tricky.
[03:53:43] *whistling*
[03:53:47] *cough*
[03:53:47] - Yep. Thanks for so much, Jason, the stream.  You inspired Rask UI.  I'm curious what you think about things. Okay.
[03:53:54] I love to see new frameworks and new libraries come out of this work. It's very, very exciting. We gotta keep things moving. So yeah.
[03:54:00] Yeah.
[03:54:05] Oh, you did the relay simulation on Apollo? Yeah, yeah, yeah. I mean, because it's, what's that term when like people are like, you know, like kind of like trying to justify or trying to like,
[03:54:21] Like,
[03:54:22] you're in denial and you kind of like go through the steps of it. I'm like, like, okay,
[03:54:27] I'm just not smart enough to get relay working. Okay, that's fine.
[03:54:30] Apollo basically does the same thing. And then you go and you wire it and you're like, okay.
[03:54:35] I think this is, no, I'm not smart enough to get Apollo working that way either.  And then you're just like, screw it.  I mean, it's real, you know.
[03:54:45] Okay, no, so you did get there, yeah. So, Quits and Build on it. Yeah, just for me, it just felt like this, like...
[03:54:51] Bye.
[03:54:52] Deteriorating stuff.
[03:54:53] set of steps like
[03:54:55] Yeah.
[03:54:56] GraphQL is great. Like people shouldn't knock GraphQL. Um,
[03:55:03] From the technical capability, because honestly, nothing quite covers the same gaps, like, like the same room, like, if you're going to like graph it on something, but like.
[03:55:13] Um
[03:55:18] Yeah, I mean, there's not much more to say.
[03:55:22] Not much more to say on these demos too, I think. I think you guys get it. This was the main thing that I wanted to talk about. So let's move on to another topic. Let's talk about AI or talk about state of JavaScript or...
[03:55:36] talk about
[03:55:39] What Ben posted...
[03:55:42] I don't know.
[03:55:44] I can close these down and leave without saving anything, because I think they're in good shape.
[03:55:50] This was fun, though. I really enjoyed creating the dumb async version. I'm actually super stoked that we were able to replicate the modern UI.
[03:55:59] Thing using just use effect. It's just it really goes to show
[03:56:05] Like
[03:56:06] It's not that even the code is
[03:56:08] I mean, the code's kind of terrible, but it's not even that. It's just like,
[03:56:11] being able to like work through like the logic and the thinking for the simplest case I
[03:56:18] You know that your actual apps aren't going to be that simple.
[03:56:21] Yeah.
[03:56:22] All right.
[03:56:24] Yeah, just switching.
[03:56:27] So
[03:56:28] Cursor, solid directive, front line?
[03:56:31] Yes and no.
[03:56:33] Thank you.
[03:56:35] Not officially, but on the other hand,
[03:56:38] They...
[03:56:39] They never were very public about the fact they were using Solid.  I did finally get to talk to them like a year ago about, maybe a little less than a year ago, because I had no clue.  So people are like, oh yeah, Cursor uses Solid.  And they're like, they've been using it for years.  And I was like, why not?
[03:56:52] news to me. I wish I knew. I mean, we have other teams in our discord, other organizations that we help and work through stuff with. These guys never thing. And I found out and he was like, yeah, oh, it was my college professor, professor, big fan of solid. And I heard about solids. I just like decided to build my startup on it. And I was like,
[03:57:09] That's really cool. That's a great case study.
[03:57:13] He was asking me how he could basically...
[03:57:15] two or three years later, how we could improve its app. And in a call, I didn't have the context to go through it. Basically, the challenge they had was they had like giant stores, like the most massive stores I've ever seen. And
[03:57:28] The size of the store doesn't really matter that much because
[03:57:32] each key is a separate signal, so to speak.  But they were having TypeScript problems at the time, actually, funnily enough.  Because of the complicated types for our store setters,  it was actually bogging down their development cycle.  And it's so funny because like,
[03:57:47] When I create stories, I'm like, God, the types here will be impossible.  Like, they're just...
[03:57:51] I hate TypeScript. That was what I was saying. And then someone was like, no, I can solve it. I can solve it. And the community came together and actually solved the types or the setters here. It's like one of those things like immutable JS or one of those things. It's really hard to get the types right for the API that we had because it wasn't a mutable API. It was an immutable API like immutable JS, etc. Those types are functional immutable APIs for TypeScript or functional.
[03:58:13] notoriously difficult to type right. Things like with partial application and those kinds of worlds.
[03:58:21] They solved it, but the problem is like,
[03:58:23] Cursor themselves was so big that the recalculation of the types was just like, it was a very complicated types. It was like dragging down the whole system. Now, I don't know if that's what the sticking point was or, you know, some other stuff kind of changed, but, um,
[03:58:40] E
[03:58:41] It was just one of those kind of funny things because like different people in my core team had been approached to get hired. You know, they want, they actually, and in community, there were feelers that are going out there like, "Hey, come work the cursor."
[03:58:57] And I don't think it ever went anywhere. So like it's one of those situations where like,
[03:59:02] I wish maybe there was like a...
[03:59:05] more communication or that we could like, I feel like we could have easily solved their problems, but you know,
[03:59:11] I mean, maybe this just gives them a good use case to demo  of how they can migrate from a lesser known framework  to a more popular-- no, that's not really a good use case.  If it was the other way around, that would actually be interesting.
[03:59:23] Yeah, who knows?
[03:59:24] Thank you.
[03:59:27] Thank you.
[03:59:29] Cursor vibe coded port to react. They haven't said anything. Yeah, that's true. Like we don't actually know it's successful. I've often said that going to react from solid would be easier than vice versa because our constraints are more strict.
[03:59:39] Right. So it's one of those kind of interesting
[03:59:43] things, right? Because JSX Lite, if you remember from the builder team, was kind of like generate  your code in every framework. There's a reason they chose Solid as the baseline for that.  I mean, eventually what they changed it to, Solid's rules with React syntax, because they fake...
[03:59:58] They've been doing
[04:00:00] look for like dot map functions, but basically treat them like our fours. But like essentially
[04:00:05] Um,
[04:00:06] Yeah, it's kind of a...
[04:00:08] Yeah, it's interesting. I don't know. I mean,
[04:00:12] if
[04:00:12] Cursor had been like a big success case that we'd been
[04:00:16] pushing down everyone's throats and been like, yeah, yeah, you know, and growling around.
[04:00:20] you know, we communicate and talk with them and something like we,
[04:00:24] then, you know, it would be a little bit...
[04:00:26] different, but this was more like,
[04:00:28] I didn't even know you guys were using us and then now maybe you're not.  So, I mean, what can I say?
[04:00:34] can't help those that don't help themselves.
[04:00:36] Yeah, I don't know.
[04:00:48] So, anyways, yeah, I want to, what did I want to talk about AI?  It's funny because it's tricky to talk about AI because it's less structured, right?  But one of the, I, I,
[04:00:57] Maybe I'll just relay a bit about my experience I've been having, generally speaking.
[04:01:04] Because...
[04:01:05] I...
[04:01:06] I'm probably still going to write an article about this.
[04:01:09] So, sign in with GitHub.
[04:01:13] But...
[04:01:15] And actually, I already started working on that article.  AI is a game changer.
[04:01:18] I'm sorry.
[04:01:20] Um...
[04:01:24] - Not a ton, but Dax,
[04:01:30] I've worked alongside DAX previously, if that makes sense.
[04:01:35] Um,
[04:01:38] So like...
[04:01:40] From that perspective,
[04:01:42] Um...
[04:01:45] Like...
[04:01:46] I know he knows what he's doing with solid and he actually had some concerns at some point. Um,
[04:01:50] uh,
[04:01:53] some concerns at some point about how we work to sync engines and stuff. It was good feedback,  and it largely shaping the direction of Solid 2.0.
[04:02:02] He took my response and he's like, yeah, this seems reasonable. And he worked forward through it. And he actually, the open code people sponsored work on Solid Start. Three developers for like six months to work on the Solid Start stuff.
[04:02:16] Yes, very, very different. Even if I haven't like worked in their code directly and actually OpenCode,
[04:02:24] Big news. Was it Brennold's or Brendanovic, sorry, from Solid Community, just got hired by them. So like one of the probably our most active and knowledgeable community members in our ecosystem is now working for OpenCode as well. So like, yeah, I'm
[04:02:41] Yeah, completely night and day difference.
[04:02:45] Um,
[04:02:47] All right.
[04:02:50] Okay.
[04:02:51] What's untitled?
[04:02:52] It's like, do I open Untitled while it's on the screen? I don't even remember what this is.
[04:02:58] Okay, Untitled is literally Untitled.
[04:03:01] You can delete that.
[04:03:03] Um...
[04:03:05] Come on.
[04:03:17] Yeah, they also built the OpenTui on top of Solid, which is very, very cool.  I love this story, just on the side, because everyone seems to think that React's the only ones that can operate outside the DOM.  And like, oh, Solid is... Solid is no more a compiler than React...
[04:03:33] Bye.
[04:03:33] pre-react compiler was a compiler. There's this weird misconception because Svelte did such a good job of selling people on this idea of like, you're a VDOM or you're a compiler.
[04:03:44] So people saw Solo and they're like, oh, it's like
[04:03:46] Svelte, but less ergonomic.
[04:03:49] but like maybe more performant.
[04:03:51] And it's like,
[04:03:52] No.
[04:03:54] Thald is completely something else.
[04:03:56] In fact, Svelte is more like React than Svelte was like Solid. I mean...
[04:04:03] People don't get that, but
[04:04:05] So, I mean, now that's not true. Now Svelte and basically View are almost identical to Solve, but like...
[04:04:13] Yeah. Uh...
[04:04:15] It's kind of funny.
[04:04:18] the difference between the
[04:04:19] surface level perspective and whatnot.
[04:04:22] Uh, okay.
[04:04:25] Thank you.
[04:04:29] Thank you.
[04:04:32] Thank you.
[04:04:32] I'm just getting Discord notifications in my background, I have no clue what it's about, but whatever.
[04:04:38] I'm going to check that later. It just keeps on ringing my ears. Sorry. Um,
[04:04:42] So let's talk AI. And the reason is because you can actually see my progression through AI through my HackMD, which is kind of funny to me because
[04:04:52] Okay.
[04:04:55] I, in, did I ever, what did I get to there? I never finished this, this article. Yeah, no, this article was something I wrote before I wrote the frameworks heading into the signal thoughts.
[04:05:06] This is the last pack of me that I covered on the channel before I went on break.
[04:05:13] So
[04:05:15] I didn't know how to approach AI at all.  I'm going to you guys are going to find a lot about how much of a
[04:05:22] an like idiot or newbie or whatever I am through this.  I mean, it shouldn't be surprising to anyone, but like I had...
[04:05:29] Anthony on my stream and he showed me a bunch of stuff that's cool and I conceptually got what it was getting at but like I had no clue
[04:05:34] I didn't understand the terminology. I got him to explain it so people could follow along, but like it didn't sit.
[04:05:40] with me in the same sort of way. I use like
[04:05:44] some chat like you know in google search or something but i didn't even ask it anything interesting
[04:05:50] Like I basically ignored it.
[04:05:52] So...
[04:05:54] The first thought I had was,
[04:05:56] Is it even possible for me to tell AI what I'm doing and understand what I'm talking about?
[04:06:04] Right. So this this kind of
[04:06:08] started as like, I was like,
[04:06:10] I tried to explain it a bit.
[04:06:12] Um,
[04:06:13] like the async system,
[04:06:15] and generate like kind of an article out of it to get people hyped about it.  Right. What we covered today.  And that's how I started. Right.
[04:06:22] Solve and Pro are delivered one of the fastest, most precise reactants in JavaScript. Solve2 takes the foundation and evolves into something more profound, more expressive, dramatically more ergonomic, without changing API, you already know.
[04:06:32] Async isn't bolted on anymore. It seemed to get what I was talking about. Loading boundaries replace suspense, then they never go back to fallback.
[04:06:39] First class optimistic updates, you know, whatever.  Yeah, okay, I already shared this one yet.
[04:06:45] If you guys want to see it, I'll drop this here.
[04:06:48] I mean, this is AI slop at its best, although it
[04:06:53] Actually, sorry, that's the wrong link, isn't it?
[04:06:57] Yeah, that's the wrong link. That's the edit link. Sorry, where is...
[04:07:01] But
[04:07:04] Did I call? Yeah, sorry, that's the wrong link.
[04:07:08] Thank you.
[04:07:09] Thank you.
[04:07:12] Thank you.
[04:07:15] Yeah, okay, sorry, here's the actual link, doesn't matter.
[04:07:18] First-class optimistic UI.
[04:07:22] - Yeah.
[04:07:22] Objective UI no longer pounding hand roll. Create optimistic, optimistic store.
[04:07:27] Drive state everywhere without effects.  Signals can be derived at their base.  Stores can be derived at their base.  Create direction, create sufficient drive stores.  Pending optimistic builds is pending loading flags.  Stores get a major upgrade, create storage still
[04:07:38] But it parsites it totally in the async model.  I mean, it's not true. It's not quite the same API.
[04:07:43] um
[04:07:44] pending and is pending is first class.
[04:07:49] Right, replace manual loading signals, suspense wrappers, effector-enasing tracking, ad hoc state machines.
[04:07:56] more
[04:07:57] predictable scheduler, same API radically, more power, blah, blah, blah. Okay.
[04:08:02] So, I mean...
[04:08:04] So what?
[04:08:06] Right.
[04:08:07] And then I was like, okay,
[04:08:09] Can I get it to, I mean, I carried on several conversations actually in copilot.  These are the only things I had that it was worth actually sharing.
[04:08:17] I was using Copilot.
[04:08:18] And I was trying to get it to do more...
[04:08:24] like smart stuff like I here's another one what did I do solid 2 dom this
[04:08:29] architecture, talk about eliminating hydration IDs. It seems to understand
[04:08:35] what I was talking about here, this actually,
[04:08:38] It proposes a whole model of using proxy elements
[04:08:42] Thank you.
[04:08:43] So
[04:08:44] like actual little JavaScript proxies over elements as a way of doing hydration without doing hydration ID matching.
[04:08:51] And
[04:08:53] So let's see elements be found in place at insert time instead of searching for them.
[04:09:00] Crazy ideas that I hope to do with 2.0. So like I was kind of like
[04:09:04] I was like, wow.  Um...
[04:09:07] Thank you.
[04:09:09] Maybe this is something that I can use, but I--
[04:09:15] The main thing that I wanted to work on, and you see, I just have tons of these.
[04:09:22] Yeah, like...
[04:09:24] trying to explain how the system works,  like all these kind of like markdown articles.  Also, ASIC example.
[04:09:34] To actually describe the system, I needed to go through so many details and examples, but what kept on happening was it kept on
[04:09:43] losing where it was, it kept on drifting, it kept on
[04:09:46] like forgetting what a firewall is. And it still to this day does in co-pilot. Like I still have this one chat that I've been that I had running for like weeks.
[04:09:55] because it contained all the knowledge I needed.
[04:09:58] And, um,
[04:10:00] And even though I made external documents for it to reference, so like it just it just
[04:10:05] -
[04:10:07] it
[04:10:07] I got to a point where I could get ideas from it, sort of, like bounce off ideas and it seemed sensible, but...
[04:10:13] It couldn't keep everything in its head.
[04:10:15] I actually talked about this on Twitter.
[04:10:17] Right. Um,
[04:10:19] What's this new async mental model? Is this another one?
[04:10:23] Yeah, this is probably the cleanest and crispest version of like some of these things, but most of the artifacts it's creating were basically like
[04:10:31] ways to like communicate to people what I'm working on not
[04:10:36] ways to like
[04:10:39] actually implement it.
[04:10:40] Um,
[04:10:42] Because whenever I got into the implementation level,
[04:10:45] It couldn't keep it in its head.
[04:10:49] So you're like, okay, we'll just produce a lot of documents.  So that was like my starting point.
[04:10:56] But
[04:10:57] like, so like I go into cursor and try and like dump this stuff in and it just, it, it failed.
[04:11:05] terribly, it's the best way I could put it.  But I was doing things wrong, I realize this now,  but I, it just, like this is just,
[04:11:12] He... he...
[04:11:14] this was not the way to approach things.  And as I said, I went on X and I like...
[04:11:19] I mentioned this and
[04:11:24] Oh, where is it?
[04:11:26] Thank you.
[04:11:30] Yeah, I did this whole post where I'm like, my work...
[04:11:34] context in your head, it's difficult to pick your battles in this scenario. Because honestly, I think I mentioned here, at one point, the AI was like, trying to convince me about JavaScript semantics that like literally don't exist.
[04:11:45] Like, like, it was like, they were like, oh yeah, this ensures that this gets cued at the end of the microtask queue.  And I'm like, no, there is no possible way.  And they're like, yeah, yes.  And I'm like, no, you are wrong.  I am right.
[04:11:56] Let's proceed assuming that I am right.
[04:11:58] What?
[04:11:59] Like...
[04:12:00] I was literally arguing with it on that.  Like,  cause I,  at first I tried to prove it.  I was like,  no,  no,  look,  this example,  this doesn't work.  This thing.  And it was,  it was just like,
[04:12:08] It was like, look, but this example does work.  And it's like, no, no, no, no, no, no, no, no, no.  That's because of this.  And they're like, like, it was so sure.
[04:12:16] And...
[04:12:18] The problem is like when I got frustrated and did similar things,
[04:12:22] Um,
[04:12:23] On other parts, I actually pit and told my design where it didn't actually work properly.
[04:12:34] And this is the firewall one. To this day, if I pull up my co-pilot right now and ask it what a firewall is,
[04:12:43] I will not get it right, even in that same chat that I've redefined it like 15 times.
[04:12:51] But the big positive out of this is that...
[04:12:56] Somebody I don't even know of was all like
[04:12:59] was like
[04:13:01] Lee Rob, hook this guy up.
[04:13:03] Like clearly he's not using good enough models.
[04:13:06] And that's what happened.
[04:13:08] Lee Rob reached out. Lee Robinson, formerly Vercel, now of Cursor.
[04:13:14] Hook me up.
[04:13:15] And suddenly I wasn't dealing with some old remodels.
[04:13:19] I have
[04:13:21] all the latest models and enough credit to use them to actually test them to decide if
[04:13:25] if I like this thing. So right off the bat, huge thanks to Lee and Cursor.
[04:13:32] Because that was the
[04:13:35] If they didn't do that,
[04:13:37] I wouldn't be talking about this stuff here. This completely changed my perspective and it was only possible because of them.
[04:13:48] All right.  And I mean, maybe this is why there's a bit of a disconnect even there when I talked to  the cursor guys before and I was like trying to get them into our discord and talking this,  and you know, they're like, oh, maybe you can come work with us.
[04:13:58] I admit I didn't know anything about the AI and I couldn't,
[04:14:01] Care less so like
[04:14:07] No, I didn't talk to him about using Zola. I mean, I don't know if it's in the same zone of what he does. You know, isn't he like a...
[04:14:14] Education, what would Sleerop do? Teaching developers, yeah.
[04:14:18] Yeah.
[04:14:22] Bye.
[04:14:24] I don't know.  Honestly, I feel like...
[04:14:30] It...
[04:14:31] If they...
[04:14:32] If they didn't care enough to really engage us in the first place, why should I care if they...
[04:14:37] You know what I mean? Like...
[04:14:38] if they kind of go a different direction.  I'm not here.  I feel like I don't,
[04:14:45] I know this is such a presumptuous thing to say, but I don't really need to convince anyone on that aspect.
[04:14:52] it should be obvious. And if it isn't obvious to you, like that's a you issue.
[04:14:56] Um,
[04:14:57] I know that's weird, but that's also why I'm not in marketing.
[04:15:03] Thank you.
[04:15:05] Um...
[04:15:07] Thank you.
[04:15:09] Yeah, I know. I know. Yeah, exactly. David, I see the stuff. I just
[04:15:14] You almost have to read the intro to my next article to actually understand
[04:15:20] what I'm talking about here. I don't have the full article finished, but I can read the intro.
[04:15:24] I know I'm late to game, hard to teach an old dog new tricks. I'm the type of person to get dragged into the future when it comes to the tools I use every day. I don't like wasting time fiddling with stuff. When I see people share their setups or talk about their VIM shortcuts, I have trouble even focusing on them completing the sentence. When they show off that they can type 300 words per second or minute, whatever. I just think about all the time and effort it took to get there and when development has never been about typing.
[04:15:47] A MacBook, a simple text editor, a couch have always been enough for me.
[04:15:53] Like...
[04:15:54] That is me in a nutshell.
[04:15:57] the when people talk about any of the other stuff I
[04:16:01] I...
[04:16:03] I get it, improve stuff, but it's like
[04:16:06] I'm sorry guys, I don't care.
[04:16:14] Thank you.
[04:16:17] Thank you.
[04:16:19] Well, don't get me wrong. I understand that it's an important part of my job. And I understand  that this is a shortcoming of mine. Do you know what I actually did? I asked AI to help me
[04:16:31] to help me understand
[04:16:33] Better, actually.
[04:16:35] Like...
[04:16:36] Because I recognized that.  I was like, crap.
[04:16:39] I was like, I thought about my favorite communicators in the field.  And I was like, what did they do that works really well?
[04:16:47] Right?
[04:16:50] Thank you.
[04:16:51] Yeah, the rest of the article is going to be great. I'm really excited to finish it. But I, so
[04:16:57] And it's funny, this was so beautiful for me. You guys know I like Myers-Briggs, I like personality types. Like when I was thinking about AI, I sometimes treat it like a person.
[04:17:06] Um, I'm like, I'm like,
[04:17:08] That helped me figure out how to best approach it.  You know, like...
[04:17:12] what kind of personality AI has? And you're like, well, it doesn't have a personality, but it doesn't, it has a reasoning center.
[04:17:17] Right.
[04:17:18] Like,
[04:17:19] It's not an INTJ like me, for example.  You know, I saw a Great Theo video the other day.
[04:17:27] or yesterday actually, where he's talking about getting into design art.
[04:17:30] And the instructions were like trying to instruct it how to be random enough to appear as if it has some natural intuition.
[04:17:38] And I was thinking about that.  I'm like...
[04:17:40] There are people in the world that aren't very artistic.
[04:17:43] that you would have to give basically the same instructions if you were going to tell them
[04:17:48] to produce good art.
[04:17:50] So like, I actually think, I think you could Myers-Briggs profile, uh, uh,
[04:18:00] um,
[04:18:01] essentially, um,
[04:18:03] an LMM. I imagine most of them probably fit into the same archetype.
[04:18:09] Thank you.
[04:18:12] the funniest thing and what you guys are going to be maybe surprised about when I get to that is
[04:18:19] I don't think I...
[04:18:21] Most tool makers
[04:18:23] are also resistant to certain types of tools, and that's why they can resist AI. My conclusions about AI,
[04:18:29] are not what you guys would expect.
[04:18:33] Not at all, I think.  But I want to get there for a second because the communication thing...
[04:18:39] Okay.
[04:18:40] was really interesting  because like
[04:18:45] My favorite speaker is
[04:18:47] By far, I mean, I mean,
[04:18:49] There's others, so if you're not on this list, don't be offended.
[04:18:52] But the people that I take the most personal inspiration from in terms of that side are Dan Abramoff, Rich Harris.
[04:18:59] Evan Yu, Ryan Florence, Kenzie Dodds, Theo Brown, and Tanner Lindsley.
[04:19:03] Um,
[04:19:04] And
[04:19:08] Like, I wanted to understand...
[04:19:12] what works about the way they communicate versus what not, what, you know, doesn't work about what I do or like see if I could kind of do it. And the AI started just like giving me my four quadrant graph. And I was like, man, that's so cool. Like, it was actually really funny when I was just
[04:19:26] The four of us?
[04:19:27] They literally were able to give a four quadrant axis graph, like the kind that I love drawing, where like,
[04:19:35] But it was interesting that the notice, like...
[04:19:38] Like,
[04:19:39] the style impacts, right? I talk about models, semantics, inevitability.
[04:19:44] Right. It's so funny. I realized a lot about myself when I was reading through this because
[04:19:48] And you can see this on stream, whenever I say something,
[04:19:51] It's to me, it's I always talk about it like it's the obvious truth.  I don't try and convince people.  I'm just like, I mean, how else is it going to work?
[04:19:58] I welcome anyone in the chat to...
[04:20:01] to show me otherwise like that's that's usually the the approach right
[04:20:06] Whereas like
[04:20:07] You know, Dan, very, very different.
[04:20:09] reasoning, nuance, introspection,
[04:20:12] Rich is a showman, you know, he creates a narrative.
[04:20:16] Right.
[04:20:18] Edmund's calmness is very notable, right?
[04:20:22] Even Ryan's bluntness. Anyways, not super important. I haven't decided if I really want to share this, but it was like really interesting.
[04:20:30] to kind of reflect on this. And this is a completely different use of AI.
[04:20:36] Yeah, this is funny. Rich, Signal's
[04:20:39] signature move is making simplicity visceral. He doesn't argue that something is simpler. He shows  it in a way that makes the audience nod along instinctively. He sells elegance, minimalism,  intuitive correctness, not through proofs, but through vibes.
[04:20:49] Um...
[04:20:51] Honestly, like...
[04:20:53] It...
[04:20:55] This was like...
[04:20:56] Where is it?
[04:20:59] I almost want to...
[04:21:00] Where's the...
[04:21:01] I want to look at the share link of this actually for a second.
[04:21:04] Because the actual
[04:21:07] readable version actually, I think.
[04:21:09] Does it not have the table of contents? I thought there was a table of contents. It makes it way easier. Oh yeah, here it is.
[04:21:16] But
[04:21:17] Like
[04:21:19] Uh...
[04:21:21] Yeah.
[04:21:22] self risks, self style comparison,
[04:21:27] Dan narrates the process of understanding, you present the result of understanding.
[04:21:32] Evan focuses on how developers feel using a model. You focus on what the model fundamentally is.
[04:21:39] See, like these kind of thoughts, like Dan makes people feel safe exploring complexity. You make people feel confident about
[04:21:45] that complexity has a clean underlying structure.
[04:21:48] Evan optimizes for approachability, you optimize for correctness.
[04:21:53] Rich makes people feel the simplicity. You make people understand the simplicity.
[04:21:58] All right.
[04:22:01] Florence grounds ideas in production reality. You ground ideas in architectural inevitability.
[04:22:07] Kent optimizes for learning and adoption. You optimize for conceptual correctness and long-term stability.
[04:22:14] Theo shapes culture, you shape architecture.
[04:22:17] What about Tenor? Tenor builds tools that feel inevitable to use. You build models that feel inevitable to understand.
[04:22:24] Yeah, I was speaking poetry. Anyway, sorry. Not to get too far off of this, but like,
[04:22:33] There's like a lot of interesting...
[04:22:36] things that I did for comparisons, who clashes, who amplifies, who depends, just to try and figure out like,
[04:22:42] If there was other people similar to this that could balance out
[04:22:47] or even existing people that like,
[04:22:49] that I could work together and kind of figure out. This is a very INTGA kind of approach to things, but again,
[04:22:58] Interesting use of AI, but let's move on.
[04:23:02] I
[04:23:05] The cursor...
[04:23:10] Uh,
[04:23:11] work.
[04:23:12] It actually was interesting because
[04:23:15] I mean, let's go to the signals repo.
[04:23:19] Thank you.
[04:23:20] Because I tried, and I'm still trying and failing pretty badly.
[04:23:28] You know, a couple things, but let's look at my commit history.
[04:23:34] Thank you.
[04:23:38] Thank you.
[04:23:46] Yeah, I guess it starts around here. You can actually see because my commits jump way up.
[04:23:53] um yeah i started on this work in progress refactor graph
[04:23:57] And then, step baseline for optimistic. This is like my third rewrite I'm going to do optimistic, right?
[04:24:03] And then everything from this point on was AI driven pretty much.
[04:24:08] There's a couple things that weren't, but pretty much from this on the commits.
[04:24:12] Um,
[04:24:18] Yeah, action test suite, where was it?
[04:24:26] I'm trying to...
[04:24:27] These ones, yeah, so where was it?
[04:24:30] Implement community transition integration.
[04:24:34] Um,
[04:24:35] This was kind of crazy because
[04:24:38] The difference with working with a good model
[04:24:41] was, was,
[04:24:43] For implementing new features, refactors I have not had much luck at, but implementing new features with a strong spec actually worked surprisingly well.
[04:24:50] as long as I didn't try and make it chew off too much of what it's worth.  It actually implemented Create Optimistic
[04:24:56] then create an optimistic store on top of it.
[04:24:59] and then is pending and pending.  All the features that let me show the demos today,  like the last two,
[04:25:08] The AI implemented with that
[04:25:11] with basic instruction.
[04:25:12] Most of them.
[04:25:14] There's corrections and stuff. The one that blew my mind was when Create Optimistic Store
[04:25:18] I literally left it for lunch and it created it.
[04:25:22] which is probably the most complicated one I
[04:25:24] complicated one that I had.
[04:25:28] And it was complicated from a development standpoint.
[04:25:31] Because...
[04:25:33] Stores have a lot of touch points and they're buried, their proxies on top of dynamically created signals and you can layer stores on stores and like that.  But the key was...
[04:25:44] I just create
[04:25:45] and get it to help me create
[04:25:47] dozens and dozens of test cases, so many test cases. See, and I realized the thing was my work
[04:25:54] It's very well defined.
[04:25:56] It's hard to create. It's complicated. It's
[04:25:59] There's so many...
[04:26:01] aspects that conflict when you're like, how can you do this when you can do this? People tell you it's impossible. It's like solving a logic problem.
[04:26:08] It's like the thing where you have like 20 statements and you have to say who lives next to the guy in the yellow house.
[04:26:14] That's...
[04:26:15] essentially what my work is here.
[04:26:19] AI is really good at solving logic problems. So as long as my specification
[04:26:25] is good enough.
[04:26:30] Thank you.
[04:26:30] Well, the baseline that I put on was literally just showing it where to put the functions.  I just like put the skeleton, like put this here, put this here, put this here.  Like I was just like, I just wanted to kind of like go like, this is like,
[04:26:42] to do implement. Like, I just wanted to kind of like show the API so that like the test suite  could at least be written using the API. That was like kind of like the thinking.
[04:26:51] Um,
[04:26:53] And like during the conceptual planning time period, I definitely had to correct it a lot.  And honestly, with the latest work I've been doing, I've
[04:27:01] I've redone it like three
[04:27:03] times now.
[04:27:04] I think it finally got it this morning. I haven't been able to vet it. What ended up happening is I implemented all this with the AI and we got there and we posted stuff on Twitter. You guys saw it. We went to the examples, but there's actually, I realized my model's not correct. It's too simple. There's actually another case that I didn't take into. If you trigger async on optimistic updates right now, we treat very logically, we treat
[04:27:30] it as being optimistic and we flush it right away. We're just like, look, you've opted out of the transition
[04:27:36] now you're in optimistic land. But I was shown some demos almost immediately after I posted it,  where async could also suspend its own sub-transitional channel, which again is like
[04:27:46] very complicated to implement.
[04:27:47] But,
[04:27:48] is incredibly powerful because then like
[04:27:52] It's just one less, like I could solve the problem they were solving using the existing primitives.
[04:27:57] But it wasn't intuitive.
[04:27:58] Whereas this model, everything just works. So like it was definitely the right move to go.
[04:28:03] But it means that I'm basically redoing the work from the last week again with a slightly different model.
[04:28:10] And I was trying to refactor on top and they started building from scratch.  It's been a completely different experience, but, but
[04:28:16] But generally speaking,
[04:28:20] the work I do
[04:28:22] is hard because it's impossible to keep the full context of every possible thing that could happen in your head.
[04:28:29] But those things define a model, not like...
[04:28:33] A vibe.
[04:28:34] You know what I mean? Like,
[04:28:36] When people go in and go, I want to put an app that does this, that is very open to interpretation, you know, and you can add a bunch of specifications about what those, those things are.  You can be like, oh, you know, but when they click this button, this happens, but it's very results oriented.
[04:28:54] you're creating a model for maybe human behavior or human interaction,  you're not creating a model for how the code executes.
[04:29:01] This
[04:29:02] is incredibly low level. It's like the model is like very specific to the actual architectural  interactions of the pieces, which means that it's
[04:29:12] If it's not well specified, if it's ambiguous...
[04:29:15] then there'll be edge cases.
[04:29:17] So
[04:29:19] The hardest part about code and code that changes is the work to write
[04:29:23] test cases and good documentation takes incredible amount of time because you're like, why?  Like that was a classic thing.  Like I hate unit tests because they always break.  Not because necessarily the code breaks, but the expectation break or, you know what I mean?
[04:29:36] Like and.
[04:29:41] That's kind of what the AI is good at solving.
[04:29:44] I don't need the AI to figure out what to do.  I already know exactly how everything should work.
[04:29:50] That's never been my problem.
[04:29:52] My problem is, well, I mean, it is a problem because at a certain point, like, you don't know completely how things should work until you try them.
[04:30:01] You have a suggestion, you have a direction. I always have a direction. That's a better way to phrase it. But I don't always have the time to implement it all and rigorously test those edge cases. I rely on the community. I rely on the Discord. I rely on these streams to show people ideas so that people can poke holes in them and go, what is this? What is this? What is this? What is this? Because all that interaction helps...
[04:30:25] define a better model because what I'm working towards
[04:30:29] isn't a product, it's an inevitable truth.
[04:30:32] So like...
[04:30:34] Thank you.
[04:30:35] from that perspective.
[04:30:37] Like,
[04:30:38] My biggest...
[04:30:40] bottleneck and a lot of people in open source field work in the libraries is actually resources because you can't just, it's like R&D, you can't just like throw people, you don't, if you don't have money, you can't throw people at solving the problem, you know.
[04:30:51] Um,
[04:30:53] My AI use is not cheap. Not at all. I was like, this is very dangerous for me because if I get used to this,
[04:31:01] I'd be paying too much...
[04:31:03] for this, right? Like it's crazy to have a friend, let's say, that can just
[04:31:08] start thinking through and implementing anything I think
[04:31:11] Because I've got lots of ideas.
[04:31:14] - Yeah.
[04:31:14] I mean, they're cheaper than getting an actual developer, but like,
[04:31:19] I still probably can't afford them.
[04:31:21] Um,
[04:31:22] But I was surprised and I realized that I was thinking about things wrong because I was
[04:31:29] I was thinking like, oh, you know, how could AI...
[04:31:33] possibly...
[04:31:35] solve
[04:31:36] these very difficult...
[04:31:38] intricate
[04:31:40] you know, patterns that are so low level and blah, blah, blah, and complicated. And it's just like,
[04:31:46] It...
[04:31:49] you
[04:31:50] It's...
[04:31:51] My work is actually not that ambiguous.
[04:31:54] There can be a flaw in the model that you can see, and deciding that is the ambiguous part.
[04:32:00] like from like what the behavior should be.  But the actual work itself is very clear cut,  more clear cut than pretty much
[04:32:06] most things that I like if you're building an application
[04:32:09] there's way more room for interpretation.
[04:32:12] If you're building a product, there's way more room for interpretation.
[04:32:19] I mean, I'm on the $200 plan for Cursor, but I mean, it looks like I have a set number of credits there and I'm burning through them like crazy right now.
[04:32:29] I've been using Opus 4.5, which is probably with Cursor Y, it's an anthropic model.  Somebody in the chat, the funny thing is I didn't spend time to test different models.  I literally, somebody in Twitter was like, use Opus.  And I, the second I used Opus and got like started going, I was like, okay.
[04:32:45] This is different. ChatGPT or not ChatGPT, sorry, GPT 5.1.  So why did I say ChatGPT? It was actually, until this day, it feels like
[04:32:55] I can talk about something like
[04:32:57] in the abstract and it can jump there.  Like those articles I was writing, I still go to GPT when I was like, my model's not working.
[04:33:04] Like...
[04:33:05] What am I thinking wrong? This is what I want to happen. And they're like, Oh no, you need this. And then I'm like, oh
[04:33:11] Yeah, I thought about it, but I didn't think that could work.  And they're like, no, no, if you do it like this, it can work.  And I'd be like...
[04:33:15] Yeah, okay, yeah, you're probably, you're not, like, it can't work like the way you're saying, but you've made me realize how it could work. Okay, thank you.
[04:33:25] Opus mind-traction is not like that.
[04:33:28] It's more like...
[04:33:31] It's like this beautiful...
[04:33:36] puzzle solver that I just have sitting there going like, okay, if this does this, this, this, this, this, this, this, this, this, then this, but we'll wait about this.  Okay.  Well, we could do this, but then no, no.  Okay.  I think that I read the chat log sometimes because literally it's just, it's,
[04:33:52] It sounds like me talking to myself in a monologue and it'll sometimes go straight 10, 20 minutes just contradicting yourself. So we should run the test and verify that. Yeah. Oh, the test failed. Right. Of course, because of this. Yes. It just it's kind of crazy. I mean, it's funny. I wonder if I could turn off that output somehow or something. I wouldn't like I would say money or something, but reading it.
[04:34:13] it completely changes my perspective on on the ai because it's reasoning is
[04:34:18] sound, which is
[04:34:20] It's just a very different place.
[04:34:24] My biggest problem with it usually is like I have to interrupt it all the time. I read something when it's thing. I'm like, no, no, you're wrong this and they're like, oh,
[04:34:30] Oh, like, and then they go, yeah,  no, you're wrong. Like, I feel like I need to
[04:34:34] cut it and interject like a ton so that it doesn't go off track quite often  because they can make the wrong assumptions fairly early.
[04:34:41] Um,
[04:34:42] So sometimes with the UI, I'm like, I worry because sometimes when you stop an operation, like it loses track of like kind of what it was doing on that.  Like it remembers the conversation, but it loses track of what it was doing in that particular thread that you interrupted it.  So you kind of like don't want to interrupt it if it's been like kind of deep, but then you're like, God, if it keeps on going down this path, it's going to go somewhere bad and like start.
[04:35:00] I've had some mishaps where it's like,
[04:35:02] reverted my code base and stuff.
[04:35:05] when like it misinterpreted what I asked.
[04:35:08] Um,
[04:35:10] So I learned to start committing very often, which is partially why you see so many commits here.
[04:35:17] merge it down. Whenever I get to a certain level, and also not to lose context. Sometimes, I'll implement something, all the tests will pass, and then I'll put it in a real app, and it doesn't work. And then I'll be like, if I don't commit where that was, and then start debugging on that specific thing,
[04:35:35] separately, it'll get confused and sometimes treat the whole
[04:35:41] implementation as the manifested bug. The problem is if I go two separate, it doesn't have the context to work off of to actually fix the bug properly. Like sometimes it will get deep down the bug and it'll be like asking me how functions work that it just implemented.
[04:35:53] So,
[04:35:55] Yeah, I mean...
[04:35:56] That only happens usually when it gets to a point where it's like,
[04:35:59] sometimes you get stuck, right? It gets to a point where it's like, it's like, oh, um,
[04:36:04] yeah, this didn't work, so I undid this.  And you're like, no, no, no, the whole point was to do the thing, right?  Like, it basically undoes something that was literally, like, the goal,  like, written out in the plan.  It just decides not to do it.  And you're like, oh, okay, well...
[04:36:16] would you like me to continue on the thing that I just decided to undo arbitrarily?  And it's like, um,
[04:36:22] Yeah, this is the reason we did this.  It's in the plan, follow the plan.
[04:36:28] And it's like, okay, well,
[04:36:30] So I started asking more interesting questions. Whenever it got stuck like that, I'm like, "Is there something missing in the plan?"
[04:36:36] you know, that, that, um,
[04:36:39] why you can't solve this, you know? And sometimes it'd be like, yeah, like you stated this, but it's actually this. And it's like a very subtle detail of like, oh, status not pending versus pending notification.
[04:36:53] But, you know, I refine the plan and then
[04:36:58] Hopefully, you know, I've actually recently with this refactor that I've had our time, we ran the same plan, updated each time from scratch, like three or four times to actually get sometimes during the process, I find other bugs in the system, then I fix those bugs, set that as a baseline and then try to do the plan again and see if it gets there.
[04:37:14] You might think that
[04:37:17] all of this is wasted because couldn't I just like write this myself, right? Like,
[04:37:21] just roll up my sleeves and write the code. And the truth is,
[04:37:25] The most valuable thing that they, at the point that AI can implement it, maybe I could write it
[04:37:31] As fast?
[04:37:33] But the most valuable things that it does is force me through the process of doing the planning and creating the proper documentations and tests.
[04:37:42] The signals repo went from 200 tests to 500 tests in the last week.
[04:37:49] And most of the tests are asking on new features. Like probably I test on older features now still and kind of
[04:37:53] You think?
[04:37:55] This makes you feel much more confident
[04:37:58] you know, in the in the behavior. Not 100% confident, but much more confident. So this is, this is, this is interesting, right? Because
[04:38:06] This is a tool that I wouldn't have expected to be particularly useful to me given the complexity, but if you can find a way to make the work piecewise enough,
[04:38:17] Unlike, I think, a lot of software, the requirements are very...
[04:38:24] The requirements are actually very
[04:38:26] Great board. Yeah, sorry. Let me, let me, let me look at chat here.
[04:38:33] Dom Ganoe is for the board, yeah.
[04:38:36] Opus 4.5 is so yesterday. Thank you.
[04:38:40] That he was a real game changer for his work, yeah.
[04:38:42] Codex models are quite something
[04:38:45] Did you try them on? I assume I know nothing. Are they just oh, you mean like like the ones that have the word codex in the name?
[04:38:58] Thank you.
[04:39:00] Um, not, I had, sometimes it points edge cases that it doesn't know the answer to, but most of the time I'm, I'm,
[04:39:09] I'm the one double checking. I'm like, okay, so does this make sense to you?
[04:39:12] Is there anything I'm missing?
[04:39:14] I make those kind of prompts fairly often to try and refine the plan down.  And then be like, you know, like it doesn't completely work.
[04:39:21] Um,
[04:39:22] The current system that I'm working on right now, the one that fixed the final boss level or whatever here, is the most complicated that we've come up with, right? It's the idea of having transitions.
[04:39:35] with multiple
[04:39:36] spendable optimistic lanes.
[04:39:41] But...
[04:39:42] Uh...
[04:39:43] Yeah, I don't know. It's still struggling a bit through it.  But it's crazy, though, because
[04:39:49] I love...
[04:39:51] what I get out of it because
[04:39:55] I think ultimately over the course of the week,
[04:39:58] If I didn't use AI like this and I just went at this myself,
[04:40:02] it would have taken slightly longer than a week. It's not the act of me sitting down and writing the code myself.
[04:40:08] is going to be about the same or, you know, ish because of the amount of corrections and like debugging, you know, but the
[04:40:15] amount of time that I can stay focused like that,
[04:40:19] maybe it's age or whatever, it's not as long as it used to be.  I don't stay up all night and program anymore, you know.
[04:40:25] So a lot of my work is...
[04:40:28] is actually mental, like strategic, like structural, like things in terms of thinking and planning.
[04:40:35] so that I can focus in on when that work happens. And in that sense,
[04:40:41] better plans, better documentation, all fit. Basically, the AI is letting me generate stuff of that nature at a rate that I could never
[04:40:49] accomplish just typing myself.
[04:40:52] I still need to review it, obviously, but it's so much faster.
[04:40:57] So like,
[04:40:59] It's not about how complicated
[04:41:02] or
[04:41:03] hard the problem is
[04:41:06] as the guidance post here for handling AI,
[04:41:10] It's, I actually think,
[04:41:12] like the ability to how like
[04:41:17] while you can specify the solution, I mean, this is obvious, right?  When you think about how it works, but like is actually the biggest thing.  And we all like to think that like,
[04:41:26] kind of self-important like we do
[04:41:30] Work and you know like great work or whatever but
[04:41:34] Um,
[04:41:36] Yeah, I mean,
[04:41:38] People don't pay me for my programming.
[04:41:41] And I think AI made that
[04:41:45] very clear.
[04:41:48] Ooh.
[04:41:48] 5 and 3 was supposed to be built to be better at handling two directions for what it's worth. Okay.
[04:41:52] I mean,
[04:41:52] Yeah, because I feel like arguing with it a lot.
[04:41:57] Instead of interrupting it, stop and start.
[04:42:00] BrushPay the additional effect ensures it doesn't make the same mistake again.
[04:42:05] I'm going to go.
[04:42:06] Yeah, I mean...
[04:42:09] To be fair, I don't know how most people use this stuff.  I'm still very conversational.  I don't, like...  It's not like I get everything in a single prompt.  I wouldn't even know how to write this stuff to the level of detail.  Like, I...
[04:42:26] Usually the process involves me describing something in a couple of paragraphs.
[04:42:32] it regurgitating it back with its understanding of the system that it analyzed, and us going through several iterations of corrections.
[04:42:39] to finally making a solid plan.  And it's during that process often that I'm doing the, like,
[04:42:46] I guess it's the implementation that I ended up interrupting it more on, but sometimes the planning.
[04:42:54] Codex equals GPT, 5.3 codex from OpenAI. Yeah, I haven't tried that model yet.
[04:43:00] But yeah, it's interesting because...
[04:43:05] I think the social aspect, like what it personally means in terms of my perspective,
[04:43:10] as being a developer.
[04:43:12] is
[04:43:13] probably
[04:43:14] more interesting, but I don't know if I want to share all of that yet, because as I said, I'm writing an article about it.  I think it's just important to report at this point,
[04:43:22] that
[04:43:23] Um,
[04:43:25] Thank you.
[04:43:31] places that are challenging for AI are not probably what people think. A lot of people are like, okay, AI is great for like,
[04:43:39] Vibe coding prototypes that you throw away, which might be true, but I feel like
[04:43:45] I've...
[04:43:45] I feel like that's actually
[04:43:48] Like.
[04:43:48] what do you call it, like an excuse or something.  It's more like AI is really bad at that.
[04:43:54] And that's why you have to throw it away. Like,
[04:43:59] The stuff that AI is actually
[04:44:02] Good at
[04:44:04] is not the work that a lot of people are probably doing.
[04:44:08] I think it's actually uniquely good at working in the areas that I work in.
[04:44:13] simply because what I'm looking for out of it isn't
[04:44:18] actually that different than what it
[04:44:20] like is designed to do.
[04:44:22] I'm looking for pattern matching.
[04:44:24] reasoning
[04:44:26] And, uh...
[04:44:27] what's the term when you like span something out like exp expensation or whatever like
[04:44:35] Thank you.
[04:44:36] AI is much better working in clean, organized, mature code bases.
[04:44:40] or probably small
[04:44:41] Um,
[04:44:42] very, yeah, small, clean, structured kind of things. The problem is AI becomes the source of the dirtiness. Whenever I get to a point where I'm like going to merge a major feature, like I got like everything together, I spend a lot of time with it cleaning up and then talking through it. And then even when it's like, oh, I can't clean anything more. I'm like, I can clean more. So I go in and I clean up more. And then I like,
[04:45:03] Bye.
[04:45:04] when it comes to like the real thing,
[04:45:07] I mean, I don't...
[04:45:08] There is a side effect here and part of it is because the increase in structure, but
[04:45:15] Thank you.
[04:45:15] The signals library was 2250.
[04:45:19] lines of code, like the actual like build output before I touch the AI.  And that was missing a couple of last features, but let's assume that
[04:45:26] you know, with my thinking compared to like,
[04:45:28] version two or version one of the rewrite, we get to about 25 or 26.
[04:45:33] Right now,
[04:45:36] with the latest stuff, which I think is finally mostly working.
[04:45:39] It's at 2900.
[04:45:42] 400 lines of code more than I really was hoping to get to.  And I hit that code earlier, Optimistic Stores.
[04:45:49] It actually-- it's not--
[04:45:51] its fault. It actually solved optimistic stores properly where I wasn't. It actually added the  override layer, not just to the signals, but to the actual like underlying data objects.
[04:46:02] So like there's the stores now have
[04:46:05] the base value that's immutable, the override and an optimistic override.  I wasn't going to implement that. I was just going to write it into the, the, the, uh,
[04:46:12] override and kind of hack it and it kind of work. But there's bugs that come from that, you know. So it actually solved it correctly, which added like 150 more lines of code. So like, I mean,
[04:46:24] take it as you leave it. So, you know, I mean, there's a bit of that aspect.
[04:46:28] But, you know,
[04:46:29] often
[04:46:31] a lot of the size optimization stuff involves finding reasonable shortcuts you can take,  and the AI doesn't take shortcuts. So it does kind of lend to bloat. Of course,  when we're talking about bloat, it's hilarious because I'm like, oh, this will add point
[04:46:44] one kilobytes minified gzip to your bundle, you know?
[04:46:48] Most people would pay that.
[04:46:49] I just...
[04:46:50] you know,
[04:46:51] I'm very aware of it.
[04:46:57] Thank you.
[04:46:59] I have made apps more robust than the big company that used to work with the teams over 600.  I mean, that's the thing.
[04:47:06] You simultaneously get the way to delegate work.  Like it does feel like you're working on a team.  The kind of, because I'm only using like one agent or whatever at a time,  whatever it feels like by time that I like created the react native app with  like one junior dev, like smart kid from college, you know, very capable,  maybe doesn't know how front end frameworks work.  Like doesn't know react, but you know, you know,  that you could write it yourself, but then there's all that other work.  And it would take time. So you, you know, you, you,
[04:47:35] It's okay, the delegation. That's what it feels like sometimes working with AI. In certain ways, I'd be faster on my own. But on the other hand, the end product's going to end up bigger and our total bandwidth is just slightly, like 20 or 30% extra or whatever. And so it's like something I'm on a small team.
[04:47:50] It means my responsibilities changed the same way it did when, you know, I was on that team, right? When you're solo, I see it's very different than being a team lead. Um, and I mean, I, I,
[04:47:59] I know this is kind of like projecting out, but I wouldn't be surprised if
[04:48:04] like it could scale up past that to the like closer to my actual like type of roles I started doing later where, you know, like being an architect, you know, and then you're not even touching the development, you know.
[04:48:16] I can picture that.
[04:48:18] You know, what do architects do? They produce freaking documents. I mean, that's, you know, the specs. That's that's basically what I have to do. So there's a lot of similarities there. I can definitely see that.
[04:48:31] If you know how to specify your work and you have the right sort of assets to drive it on that that it could do that. That being said.
[04:48:39] I do think specifically...
[04:48:41] because
[04:48:42] what my work speaks in models and not in like...
[04:48:46] user experiences.
[04:48:48] the ability to be able to specify is
[04:48:51] is
[04:48:53] way more. Like,
[04:48:55] I just...
[04:48:57] I should, as I said, the feeling when it
[04:49:00] implemented optimistic stores and I dropped it into that
[04:49:03] uh, the optimistic data, the optimistic data example with the to-dos.
[04:49:09] I already had the optimistic...
[04:49:19] thing and then it just worked. I was like,
[04:49:23] how
[04:49:25] What?
[04:49:28] This is something that I was like,
[04:49:31] struggling for like, I meant like past Christmas break, like a week or so saying, okay, with this model, how does that do I make this work?
[04:49:39] And I came up with a hypothetical plan, but I didn't want to pull the trigger on it because I was like,
[04:49:43] I need to think about this more because if I invest in this, I'm going to waste
[04:49:47] You know,
[04:49:48] days, probably week of time
[04:49:51] to actually bet it and then like it's probably not
[04:49:55] know i have to make sure i'm right otherwise like this is a problem i have  with a lot of research i do right now it's because it's like
[04:50:01] I don't want to afford not investing too much and not being right.  I'm very conscious of the timeline on solid 2.0.  I'm very conscious on like,  like,
[04:50:09] people supporting my continued work in development at Sentry and, you know, like Netlify before them and like,
[04:50:17] I want to make sure that
[04:50:19] you know,
[04:50:20] every time money comes in the Open Collective, you know, and like when we were doing the work on like the the island stuff, like we ultimately didn't deliver on the product that I wanted to and we weren't in the place to. I always felt like.
[04:50:32] Um,
[04:50:35] There was no way for us to get there and we learned a lot and we got Cerebel out of it, the investment from the Chrome team. But I felt like we didn't deliver. So I'm very conscious of it.
[04:50:47] And...
[04:50:48] Bye.
[04:50:49] AI was like, well, why don't we just try it?
[04:50:53] Right? Like, it's pretty well specified...
[04:50:57] Behavior wise, even if you haven't figured out how the implementation works, let's just try it. And then the guy's like, okay, yeah, it wasn't that hard to implement.
[04:51:04] Sometimes it is, sometimes it is. And I look at the code, I'm like, oh yeah.
[04:51:07] Yeah, of course. Right. But like that's that's sort of
[04:51:11] the scenario and why I find it, I think that it'd be, it's very useful if,
[04:51:17] in the sort of work that I do.
[04:51:24] Thank you.
[04:51:26] Exactly what I'd love to give you a markdown with all the best patches of salt. That's funny, because as I said, that's exactly what I don't specify, right?
[04:51:36] But like, I mean, AI could help me generate that doc, perhaps, but like you understand like this is about, that's more about like...
[04:51:44] extension on user behavior versus like
[04:51:47] mechanics of what the model is.
[04:51:49] work. Anyways,
[04:51:53] I mean, it's why R3 took so long, yeah, exactly.  Because I didn't want to just, like...
[04:51:57] I...
[04:51:58] there's a there's an when you when the coding is what costs money there's an opportunity cost
[04:52:05] Like when the actual work of doing the physical typing, there's opportunity costs and trying to invest in different
[04:52:11] types of things, right? So if you can eliminate the documentation overhead,  the spec, like if you're going to eliminate a lot of those costs
[04:52:18] the rate at which we can iterate and improve rates drastically. And someone
[04:52:26] as I said,
[04:52:28] Thank you.
[04:52:29] idea person, someone like driving like that the way I do architecturally with models.
[04:52:34] How can this be anything but a game changer?
[04:52:37] I'm actually kind of worried that like,
[04:52:39] the characteristics it has,
[04:52:41] are
[04:52:43] dangerous actually to someone like myself.
[04:52:46] I used to have a, like when I was a kid, my parents said I was addicted to video games.
[04:52:51] And I've definitely have had problems of being too much in my head. And I, this is probably the biggest amplifier, like of that kind of zoning and like that.
[04:53:00] It...
[04:53:02] Yeah, I mean, that's, again, a personal topic and probably something I'm going to write about, but it's, it's.
[04:53:09] It's...
[04:53:11] It's crazy. I haven't
[04:53:13] being excited about something on the technology front.
[04:53:16] like this. And it's funny because that's such a late
[04:53:18] personally to it in years.
[04:53:23] Um...
[04:53:26] I get it now.
[04:53:30] Which is which is weird.
[04:53:32] This is, this is, it's, it's not, it's not what people think.
[04:53:40] I don't know why no one's been very good at
[04:53:42] communicating what it actually is though.
[04:53:48] Maybe it's because it's different to different people, but.
[04:53:52] I feel like
[04:53:54] Thank you.
[04:53:57] Thank you.
[04:53:57] I feel like, and even now when I'm saying it, I understand it.  What I'm describing, it sounds very vague.
[04:54:04] uh
[04:54:05] Mm-hmm.
[04:54:07] Anyway.
[04:54:09] That's probably enough on the AI topic for now.
[04:54:11] Um,
[04:54:13] Thank you.
[04:54:15] I don't know, anyone have any specific questions? I think I pretty much covered my main perspective, other than the personal impact piece and like,
[04:54:25] I...
[04:54:26] But I, yeah, I do want to clarify, like I...
[04:54:30] I still feel like very much at the beginning of my journey here.  And I still have more work to do.
[04:54:37] *sniff*
[04:54:38] All right.
[04:54:39] Thank you.
[04:54:40] Let's look at this month in JavaScript here. I think that's probably where I go left. Give me a second. I'm just gonna
[04:54:46] Set up some windows. Give me two secs.
[04:54:53] Thank you.
[04:54:54] I said AI is the right acronym with the wrong definition.
[04:55:05] Well, the thing is like, when I say about technology, the last time I felt the same way about technology,
[04:55:13] was when I was a kid and was first exposed to the internet.
[04:55:20] It's that long. I'm not talking about like...
[04:55:24] the same kind of shift,  like when,  uh,
[04:55:27] you know,
[04:55:28] mobile phones or whatever I
[04:55:31] touch screens or something. This is
[04:55:35] I mean, I guess phones had an aspect of it.
[04:55:38] it's about the availability of information, but it's similar, but it's, it's, it's now that it's not only one direction.
[04:55:47] Okay.
[04:55:49] Let's see here.
[04:55:52] Sorry, give me a second. I just want to set up my windows properly.
[04:55:56] Because I think...
[04:55:57] That's that one.
[04:56:02] Okay, let's do one, two, three.
[04:56:05] This one will be solid. This will be my bookmark.
[04:56:09] I don't think I actually bookmarked very much.
[04:56:13] Thank you.
[04:56:14] this month.
[04:56:19] Yeah, it's funny.
[04:56:24] The only thing I ended up bookmarking was stuff related to the...
[04:56:28] Yeah, the cursor stuff, actually, I think. Anyways, let's get into this week or month in JavaScript.
[04:56:35] Let's go.
[04:56:36] Um,
[04:56:37] It's funny, I don't even know what, if I even put this banner up anymore, it even matters.
[04:56:42] But let's go.
[04:56:44] Um.
[04:56:48] I thought this was
[04:56:49] fun and interesting.
[04:56:52] jQuery reaching 20 years old.
[04:56:57] January 14th, 2006.
[04:57:00] So...
[04:57:01] Um...
[04:57:04] Thank you.
[04:57:05] Yeah, I mean,
[04:57:08] obviously ground shaping technology in the web front end world, but
[04:57:13] um,
[04:57:14] Yeah, I...
[04:57:18] It's funny, it's been so long since I actually used jQuery directly. I think the last time I touched jQuery was in 2009.
[04:57:24] um,
[04:57:26] But...
[04:57:26] Actually, that's not true. Some of the early Vidigami stuff, the WordPress stuff I touched in like...
[04:57:30] Yeah. But
[04:57:31] Maybe 2013, 14. But it's one of those things that like has a lasting
[04:57:38] impact that like
[04:57:40] can never be understated.
[04:57:46] All right. But what else did I bookmark here just before I get into other stuff? All right. This was about the cursor experimentation where they mentioned the script for moving...
[04:57:58] Sounds like Chris's mood to react is going roughly as expected.
[04:58:02] when I've been using a remove unnecessary react-to-use effect.
[04:58:05] Right.
[04:58:09] Thank you.
[04:58:11] Yeah, that's interesting.
[04:58:15] The weird thing is if they were migrating from solid,
[04:58:18] You wouldn't expect them to have
[04:58:21] Use effects.
[04:58:24] If you were migrating from solid, a lot of your
[04:58:29] Oh...
[04:58:30] I wonder though, actually, now that I think about it.
[04:58:33] If they were doing stuff like state synchronization without derived.  Yeah, it's interesting.  I don't know.  My gut would be you would have less use effects in the first place, but who knows?  This could be...
[04:58:44] Who knows?
[04:58:46] Thank you.
[04:58:47] Alright, see I don't have much of the way of bookmarks here.
[04:58:53] Unless they use it incorrectly, which is not... I mean...
[04:58:57] Yeah.
[04:59:02] The usual use effects that stay based on a drop. Yeah. I'm
[04:59:05] Always that, yeah. I've been really trying...
[04:59:08] It's so crazy to me that no one...
[04:59:12] just got rid of that, you know, ages ago.  I mean, I would have got rid of that  in solid five years ago.  To be fair, I identified that primitive  that I wanted to like,
[04:59:20] do that like back in 2022 and those back in like the solid work group it's  fortunately taken a very long time because 2.0 got delayed by a solid start and
[04:59:30] Bye.
[04:59:31] working on server stuff, you know, and now we're here, but
[04:59:37] He fetched an all-mounter.
[04:59:41] Yeah, yeah, I mean...
[04:59:44] I
[04:59:45] What is it you can't take the React out of a developer?
[04:59:49] That's what I was saying.
[04:59:50] Check the...
[04:59:51] developer out of React, but you can't take the React out of the developer.
[04:59:56] Is that what I want to say? Yeah.
[04:59:59] Okay.
[05:00:00] Um,
[05:00:01] I'm trying to remember if they're
[05:00:02] Solid news, yeah.
[05:00:04] And stack dev tools. Yeah, I,
[05:00:07] It's cool. Yeah.  Ben's been posting some content on solid just because of the two stuff.  He's been doing, which is awesome.  You know, see that I
[05:00:17] I miss Theo's content on Solid from back in the day. It's cool to see, you know, and new frameworks in general. It's cool to see that kind of stuff kind of come back in.
[05:00:28] Patilla's talk, yeah. I've been so heads down on the work that I have not been keeping up here.
[05:00:34] um it is always cool as i said i like highlighting when i see libraries um
[05:00:39] that work just generically and solid, like someone flagged me on this animation library.  What is it called? Auto layout in anime JS.  Yes.
[05:00:47] So they're like,  sounds like,  does it work a solid?  Apparently.  Yes.  So like,
[05:00:51] That's awesome.
[05:00:54] Handstack dev tools also work with Solon and Sfaz.  You can see the common thread here.  Okay, let's talk about...
[05:01:03] Let's talk a little bit about the GS survey right now.  It seems like the best thing, because I actually don't have that much content.  I mean, we could talk about the Astro Cloudflare thing, which apparently I didn't bookmark, but
[05:01:16] I don't know if I have much to say other than just like
[05:01:20] That's awesome that Astro gets to continue on
[05:01:22] you know, and do its thing and
[05:01:25] Cloudflare's, you know,
[05:01:27] It's a...
[05:01:29] There's a lot of benefit from both sides, I think, from...
[05:01:32] from that kind of move gives Cloudflare like a way of pointing it like a very  generic usable, you know, we are the web kind of meta framework.  And, you know,
[05:01:43] I said this on stream before, and no offense to Fred and them all, but I had no clue what they were selling.
[05:01:51] I love Astro. I love the framework. I had no clue what the Astro company did.
[05:01:57] So, I mean, this seems like a good resolution for everyone.
[05:02:02] Right.
[05:02:04] Astro needs people who actually understand DX. Yeah, exactly. I think this is kind of the thing. There's the DX team like Igor and all of them who've been...
[05:02:17] working on like improving like the dashboard and all that. But yeah, I think there's a certain disconnect when you're like a network, like,
[05:02:24] A lot of the hosting providers like Netlify and like, uh,
[05:02:29] Vercel are kind of like hosting providers. That's what they do. Cloudflare is not like they do hosting, but Cloudflare is a network provider. It's like almost like they're working at a different level, but that extra level of
[05:02:40] abstraction or like separation from the stuff means that they probably  classically,  uh,
[05:02:45] to date, except for like a few key individuals or teams in that groups have generally been a little bit more disconnected from the general goings on of like the web front end.  We had Igor on talking about his micro front end solution, like his team definitely tuned in.
[05:03:00] But like,
[05:03:02] Klauffler in general, I don't know how much influence they have on the whole thing. I mean, I've always
[05:03:05] found Dane,  um,
[05:03:07] Great, you know, but like...
[05:03:10] Hey.
[05:03:11] I don't know how much
[05:03:13] Like there's a lot of technical initiatives going on Cloudflare that exist outside of like
[05:03:18] our typical web framework stuff where I feel like for so and, um,
[05:03:23] uh,
[05:03:25] netlify because they're not like as wide or a little bit more focused in those areas.  I think like legitimately, I remember having a conversation with some guys there that were, they're confused.  They're like, why aren't more people using durable objects? And it's like,
[05:03:36] I get it. What they do is incredible.
[05:03:38] But
[05:03:39] Like, how do people use them? Do you know what I mean? Like there's this gap.  They're like, Oh, we have this article. I'm like,
[05:03:44] Look at how people are actually developing.  Like there was a gap.
[05:03:50] Cloudflare had the capability of doing streaming from the edge  before like literally everyone else.  Like I jumped on them as soon as I could.  Like I was like...
[05:03:58] Like...
[05:04:00] The technology is there. It's just, yeah, you know.
[05:04:08] Distribution as a service, yeah.
[05:04:10] So yeah, I mean, it makes a lot of sense.
[05:04:13] I know I love the guys over at Cloudflare as well. They've always been
[05:04:18] Big.
[05:04:19] you know,
[05:04:20] like at least the people there that I know that we're being big for the open web and all that. So it's like,
[05:04:27] Yeah, I mean...
[05:04:28] Oh.
[05:04:32] Yeah, yeah, yeah. You guys know my birthday is coming up.
[05:04:37] Very, very soon. A bunch of our birthdays are coming up. Oh crap.
[05:04:41] Uh, yeah, yeah, yeah, yeah, yeah.
[05:04:43] God, today, Feb 6th, is it Rich Harris's birthday?  Yeah.
[05:04:48] Um,
[05:04:50] Yeah, you'd be surprised how many people in our community have birthdays in this week.
[05:04:57] I think it's Rich Harris' birthday today.
[05:05:03] Anyway.
[05:05:04] Yeah.
[05:05:10] Yeah, I wanted to talk about, sorry, I got sidetracked. I wanted to talk about, um,
[05:05:16] I talked about this.
[05:05:19] Yeah.
[05:05:21] Is there anything more here that I want to talk about the AI topic first? I think I've watched more Leroy videos in the past few hours than the whole time he worked at Purcell.
[05:05:29] I've been in AI Skeptive, but I'm giving cursor a real shot.  Yeah, yeah.
[05:05:32] It's funny though, because he has a bunch of introductory videos that I literally just like tried to understand.  Because I watched some of Theo's stuff and I'm like, I don't know what the hell he's talking about.  So I went over and watched Lee's stuff to get like context of like what the actual terms were and like how to use stuff.  And then I went back and watched and went to Theo's videos.
[05:05:49] That was my process.  But the funniest thing is after that happened, I started seeing Lee everywhere.  Every time like I get a YouTube ad now, like.
[05:05:57] 50% chance that it's going to be like Lee talking about something cursor like they're paying the they're paying like their promotion or whatever that they pay into the ads on YouTube are definitely working so.
[05:06:12] Yeah, it just it was it's funny like over like 24 hours is like it's just like Lee everywhere.
[05:06:18] Thank you.
[05:06:20] Thank you.
[05:06:22] Thank you.
[05:06:23] Thank you.
[05:06:25] Thank you.
[05:06:31] Rich was in Pawark and Spring Austin Tough area.
[05:06:37] Thank you.
[05:06:40] All my references are from mid-January to mid-February.
[05:06:44] Amen.
[05:06:45] Yeah.
[05:06:46] Aquarius apparently is supposed to lend to certain type of unique or unconventional thinkers, so...
[05:06:54] Mm-hmm.
[05:06:56] Anyway, yeah, no, I...
[05:07:00] I've been very happy being able to have this kind of ramp up, thanks to Lee and Cursor.  So, yeah, I think that's on the AI side.  Yeah, we talked about the examples.
[05:07:12] I'm going to talk about Ben's thing in a minute. Yeah, let's go with
[05:07:17] Save.js. I actually haven't reviewed it that closely. I saw the front-end framework. I don't care about the other day.
[05:07:22] sections too much, but
[05:07:27] Oh, I didn't even see this thing. Solid may be used by 10% of respondents, but the fact that it's had the highest satisfaction for five years running should be enough to make us pay attention to what it's doing. What's more, SolidCreativeRine has been a large responsible property to cause such a signal than one of the best to explain the interests of other friend frameworks too. Well, that's nice. I didn't even notice this clip when I opened up the page. I'm like, show me the charts.
[05:07:49] Um,
[05:07:54] Um,
[05:07:55] Yeah, I mean...
[05:07:57] To be fair,
[05:07:59] We're 9%, we're 10%. I was really excited to be 10%. I'm not going to lie. Do you know why?  10% is when you get to go on the S tier chart.
[05:08:08] But do you know what happened?
[05:08:11] We're not on the chart.
[05:08:16] We're not on the chart for some reason.  And I'm guessing it's a rounding error.
[05:08:21] We show 10%, but it's probably like 9.9, and we didn't end up on the chart.
[05:08:28] Thank you.
[05:08:30] I mean, we're 89% this year, so we would have been A tier.  Last year we were 90, it would have been an S tier, so it would have been nice, but I  kind of wanted to be on the chart.
[05:08:41] Thank you.
[05:08:42] Thank you.
[05:08:43] Yeah, off by one error, yeah.  Like, they even sit in the description,  it was the 10%, and then they're like,
[05:08:50] Hmm.
[05:08:52] Yeah.
[05:08:53] What?
[05:08:54] The rank charts, libraries based on the retention ratio, percentage users use library most. Note that libraries used by less than 10% of survey responses are not included.
[05:09:05] Thank you.
[05:09:05] Wanted to be on the chart. Okay.
[05:09:10] I'm going to come back to this graph.
[05:09:13] After, uh...
[05:09:15] after we
[05:09:16] we look at
[05:09:19] the other stuff here. Let's start with the front-end frameworks.
[05:09:24] Um...
[05:09:28] Yeah, usage, no surprise. The funny thing I'm finding about usage is,
[05:09:34] This isn't actual uses, just this amount of respondents.
[05:09:37] These numbers are just kind of...
[05:09:40] like I guess React went down last year for some reason, but like, you know,
[05:09:45] these numbers are not growing. It's like 80% of developers who surveyed used React in 2019
[05:09:51] 85 now in 2025, but like
[05:09:54] Let's pick one, Angular 56,
[05:09:56] 48. So there's a slight drop over like seven year period.  And they had some lows and highs. So last year would have been 50.
[05:10:04] It's still like...
[05:10:08] If you look at back here,
[05:10:10] Things were like rising, like only 50% of response in 2016 used React.  What were they using?  I don't know.
[05:10:16] 10% using Vue. By 2019 it was 46%. Nobody else has that kind of curve. You know what I mean? It's like a spiral graph that starts out with some point out here. Do you know what I mean? Like...
[05:10:29] Preact?
[05:10:30] was 12% back in, like they had a little rise from seven to 12, but they, then they've been 12,  I guess they're 15. They're up slightly this year, but like,
[05:10:39] These are almost all flat lines.  Felt had a good growth curve.
[05:10:43] But even the last three years, 25, 26, 27.
[05:10:47] right? Solid 2%, 6 to 8, 9, 10. Same as Svelte, 8, 9, 10. We're
[05:10:53] Preact we already looked at.
[05:10:55] Lit.
[05:10:57] Seven, nine, ten.
[05:10:59] Alpine 789-
[05:11:02] Like no one's moving.
[05:11:03] on the usage chart.
[05:11:05] just kind of throwing out there awareness
[05:11:09] This one always surprises me.  I mean, I get it.  Solid and HTMX are about the same amount of awareness with Pre-Ax.  Svelte has somehow...
[05:11:21] got like they jumped ahead of us on or like
[05:11:26] react and everyone on awareness. Somehow more people know about Svelte
[05:11:29] especially compared to usage or whatever, like,
[05:11:32] Compared to all the other frameworks that are in this lower usage tier, the awareness difference is actually significant. Which makes me wonder if awareness was higher on some of these solutions, would their usage go up? I don't know. It's just...
[05:11:45] And
[05:11:48] *pain*
[05:11:52] Yeah, flatline and awareness as well.
[05:11:57] No one, like what I'm getting at is no one's really gaining ground out of pollsters interests.
[05:12:02] The zone's always tricky. Interest goes down and over time,
[05:12:05] Spike Lee?
[05:12:06] Right?
[05:12:10] Mostly flat  Where who is that there's someone else who's pretty quick. Oh, I
[05:12:17] That's a pretty sharp...
[05:12:19] interest drop off.
[05:12:21] I was going to say like,  like there's this where it's like a couple percentage down.  Like if you look at react,  it's like,
[05:12:26] 57, 40, 42, 43, 427. I mean, React's
[05:12:29] Definitely.
[05:12:31] POMMETATING ON INTEREST.
[05:12:34] It's a flatline.  You'd think there'd be like...  I was expecting more like Angular, right?  Angular...
[05:12:40] people are interested in it, then they lost interest,  and then you kind of flatline at a certain threshold.  React hasn't hit the bottom yet.  I mean, I bet you 27 is the bottom.  I bet next year there will be like 28 or something or...
[05:12:52] But like...
[05:12:54] Um,
[05:12:55] Interesting in mind is people who don't use a framework that want to use the framework. Like it's not it's positive sentiment about people who haven't.
[05:13:02] who've heard about it but haven't used it.
[05:13:06] But yeah, generally these are all downwards trends.
[05:13:11] No one's peaking high though, right?
[05:13:14] So...
[05:13:15] has kept consistently the thing that most people want to know about or are interested in who haven't used it. And I think this is probably the biggest driver of why out of anyone they're actually seeing usage. But I mean, again, this doesn't necessarily translate to
[05:13:30] on solid side because we've been second in
[05:13:33] in,  uh,
[05:13:35] basically in interest this whole time. It's only slightly less and that hasn't translated. So yeah, I don't know.
[05:13:41] I don't know if there's much to get from these graphs on this side. Satisfaction,
[05:13:46] So
[05:13:46] I've...
[05:13:48] typical
[05:13:50] smaller frameworks, you know,
[05:13:53] switch the ranking thing. This is the graph that we use. Again, this is the one where we were the most high satisfaction framework five years in a row. Reaccess, but again, Svelte's the second most. So I mean, like, these are percentage difference. People generally have to be using either.
[05:14:11] Quick.
[05:14:13] once.
[05:14:14] HTMAX.
[05:14:17] you
[05:14:18] I guess people realized
[05:14:21] View.
[05:14:22] Mm-hmm.
[05:14:23] I called this in my article a while ago that
[05:14:27] that like what's the 2024 year article i was like my my my feeling is that view sentiment
[05:14:33] has increased...
[05:14:35] you know, just because they keep on delivering
[05:14:37] Angular's another one I expect like that, yeah.
[05:14:40] No, that's Preact. Where's Angular?
[05:14:42] Oh, never mind.
[05:14:44] Hmm.
[05:14:45] People in this poll don't like Angular.  I was expecting more of a bounce back.
[05:14:49] There's a bounce back here, like signals and whatnot, but I expected Angular to have like...  I think the sentiment in Angular has gone up considerably.  But Preact coming back is interesting. I think this is largely because again,
[05:15:02] It mirrors reacts satisfaction kind of dropping.  The thing is, this is by rank.  Let's remove rank.  I want to go back to value.
[05:15:11] Yeah, React satisfaction dropping is very minimal.
[05:15:14] Thank you.
[05:15:15] Thank you.
[05:15:17] But Preact, I wonder, I don't think they've made any drastic change.  This is the funniest thing about this.  I don't think they made any drastic changes to how they work.  They didn't like fix an issue or do a new release.  I think it's simply the fact that what you're seeing is.
[05:15:32] people who were like, Preact isn't worth it.
[05:15:36] you know, versus React, to people going, "React is worth it."  I think that's what the shift is, because I don't think it's like from them going,  "Oh, we've made our DX way, but nicer."
[05:15:45] it's just like more people finding the opportunity like so that
[05:15:49] Thank you.
[05:15:50] They're just like happier, like their expectations are more aligned.  The biggest thing with satisfaction is about aligning expectations.
[05:16:02] Yeah, I mean, you're right. This could be Preact signals.
[05:16:06] Yeah, yeah, yeah, yeah, yeah.
[05:16:08] Yeah, I mean, eh...
[05:16:11] VX Signals came out in 2022, 23, 23.
[05:16:16] Yeah, yeah, yeah. I mean, it could be downstream of that. That's fair.
[05:16:20] I always underestimate the impact of signals there because
[05:16:24] You guys know what I think about that.
[05:16:28] But
[05:16:30] Yeah, maybe.
[05:16:32] Alpine, people still use this thing.
[05:16:35] React quick.
[05:16:37] Such a shame.
[05:16:39] Lit.
[05:16:40] Yeah.
[05:16:40] Angular stent.
[05:16:42] This will still be on the list here is...
[05:16:45] using its own thing appreciation
[05:16:48] Ooh!
[05:16:50] Gap between interest and positive sentiment and satisfaction.
[05:16:54] Okay, so this is an interesting one. I've never really looked at this one. This is the one that I thought like view would be better. But look at this.
[05:17:01] React actually is highly appreciated.
[05:17:03] So is Alpine.
[05:17:04] And so is Preact. Interesting.
[05:17:07] What does this mean?
[05:17:12] Thank you.
[05:17:13] Thank you.
[05:17:14] Okay, so if I'm understanding, this is the difference between
[05:17:21] people have used it satisfied and people positively in things so
[05:17:25] You actually want a lower score here, which is funny.
[05:17:28] Because this means
[05:17:30] What this is saying is like
[05:17:33] Thank you.
[05:17:34] Thank you.
[05:17:37] - This is seeing how much people who
[05:17:41] who like
[05:17:43] Thank you.
[05:17:45] Use it.
[05:17:47] Thank you.
[05:17:51] Thank you.
[05:17:51] I've got to think of how that actually...  This is a very interesting...
[05:17:56] kind of thing, because it's
[05:18:01] I think it's suggesting that more people are satisfied with it compared to the people like
[05:18:07] the hype around it.
[05:18:12] or lack thereof.
[05:18:17] So I think people lower on this chart, like this is like almost like
[05:18:24] This is like the things that score highest on this chart,
[05:18:27] have
[05:18:28] less hype and the things that are lower on this chart have more hype. It's like hype versus appreciation.
[05:18:34] like how much people actually...
[05:18:37] like it for what it is versus people who are hyping it. That's the best way I think I could think of this.
[05:18:42] low hype and high satisfaction scores.
[05:18:45] Yeah.
[05:18:46] Exactly. Yeah, exactly.
[05:18:48] So in a sense,
[05:18:50] Sveld
[05:18:52] is
[05:18:52] very...
[05:18:54] Bye.
[05:18:54] from this, there's a lot more hype contributing to its
[05:18:57] positivity, even though Svelte has like the highest satisfaction or second highest satisfaction.
[05:19:02] but proportionally
[05:19:04] Yeah, that's interesting.
[05:19:06] HTMAC? Yeah.
[05:19:10] Oh, this is interesting.
[05:19:11] Even though this is like, this kind of almost, looking at this chart in inverse almost gives you an idea of where the current
[05:19:18] things are in the hype cycle.
[05:19:21] It's funny that Angular was actually...
[05:19:23] Down here.
[05:19:24] This is like almost on the opposite end.  I doubt Angular was actually that hyped.  It was just like so bad that it...
[05:19:29] in a certain way that it ended up over here.
[05:19:32] - Stencil, yeah, the other.
[05:19:34] It's like overrated.
[05:19:36] Yeah, it's almost like an overrated thing.
[05:19:38] But
[05:19:39] I am.
[05:19:40] Like lower here is overrated versus underrated.
[05:19:44] So like Preact is the most underrated solution.  So is Alpine.
[05:19:48] and then react. See, it almost makes sense.
[05:19:50] then view is pretty much in the middle.
[05:19:53] where it's what you get
[05:19:56] solids in the middle.
[05:20:00] Then we start getting to like HTMX.
[05:20:02] stencil
[05:20:04] Thank you.
[05:20:05] I lost Quick somewhere in here too.
[05:20:07] quick yeah anyways i don't know positivity
[05:20:11] Another one that tends to go down in time.
[05:20:16] Huh?
[05:20:18] Stencil.
[05:20:22] Quick needs a release.
[05:20:26] HTMX.
[05:20:28] Falling went down a bit, then came back up.
[05:20:30] View.
[05:20:32] Yeah, maybe this is the one I'm looking at.  Vue and Angular are kind of, we're defying the odds.  They're kind of going against the trend.  Everyone else is going down Vue and Angular.  Svelte's kind of stable, but Vue and Angular have both kind of
[05:20:46] Thank you.
[05:20:46] Yeah, that's interesting.  I don't know if I'm going to find it.
[05:20:51] Astro joins for the Claussler. I'm not sure if I'm going to find as much as interesting here. We all know that Next.js just dominates everyone else on usage.
[05:20:59] But...
[05:21:00] interest.
[05:21:03] Interesting.
[05:21:04] It's much lower now in interest.
[05:21:08] Afteron Svelte Kit are strong here.
[05:21:12] Fall start in Dino or mid?
[05:21:16] satisfaction
[05:21:18] Astro, Svelte, Kit, makes sense.
[05:21:21] So let's start.
[05:21:22] Bye.
[05:21:23] I'll take it.
[05:21:24] I'm glad that people who use it are satisfied.
[05:21:28] I know this isn't as strong as an entry as solid itself, but I hope to change that in the future.
[05:21:37] Yeah, I don't know how to read appreciation.
[05:21:40] Positivity...
[05:21:43] Yeah.
[05:21:46] Yeah, this one's a little less interesting.
[05:21:49] Yeah, Tanstack didn't quite make the list. I think when Tanstack does make the list, it's going to be a bit of a game changer. Is Gatsby even on this anymore?
[05:21:58] Quasar, what's this one? Gatsby.
[05:22:02] This is like the perfect...
[05:22:04] Like maybe we should use this as the model of what like the decline looks like.  Actually Gatsby's appreciation went up.  I guess because like the people who are left.
[05:22:13] Appreciate it.
[05:22:17] This is brutal.
[05:22:22] Like, people make fun of Angular sometimes, but, like, Gatsby's fall was just...
[05:22:27] Way...
[05:22:29] Yeah.
[05:22:31] This one analog.
[05:22:33] Yeah, the fact that Analog got on here and Handstack didn't.
[05:22:37] is odd.
[05:22:45] Thank you.
[05:22:48] Thank you.
[05:22:50] Yeah, exactly. Gathbicure is now creating packages for tan stack.
[05:22:57] Backend frameworks I don't care about. Okay, let's go back up here.
[05:23:02] and look at the curve.  The curve is one of the most interesting ones,  because everyone boomerangs over time.
[05:23:11] but you want to be out here you want to get up here veed is just
[05:23:16] an unstoppable force.
[05:23:19] They look like they were starting to curve and they're like, nope.
[05:23:23] Nope.
[05:23:25] We still have more to go.
[05:23:27] Um,
[05:23:28] versus Webpack, which is like
[05:23:30] Let's see if I can, which is like this just almost straight sideways back.
[05:23:36] What do we got here? Jest. Can I filter this down to what I care about? Yeah, I just want front and very much.
[05:23:42] Thank you.
[05:23:43] So
[05:23:45] Yeah.
[05:23:47] interesting pencil drawing. See, React is like the only one up in this quadrant, which almost makes  it the only, in some ways, the only one worth talking about, like in general. It's just,  this is sad that the others can't be up here.
[05:24:01] Angular is like
[05:24:03] doing some circles over here where it's like trying to come back and then 2025 is like reality check okay not quite
[05:24:10] Um...
[05:24:12] Thank you.
[05:24:13] View is...
[05:24:16] I don't even know. This is a weird dance.
[05:24:18] View looked like it was actually shrinking.  I guess before view 3 really kicked off, it was actually like...
[05:24:27] shrinking, like not just
[05:24:29] getting more negative but shrinking and then it's like somehow turn things around
[05:24:35] Svelte.
[05:24:36] This is, again, it's just one of those unfortunate things where you want it to get farther over here before it turns back, but we're getting stopped before we even go.  Solid, see, somebody asked me the other day, or they were talking on X, like, they're like, I wish Solid was more popular, you know, more people...
[05:24:52] used it and I was like it came out two years later
[05:24:56] And the problem is,
[05:24:58] the time you, these curves are very
[05:25:02] reliant on the timing that the thing came out.
[05:25:05] Um,
[05:25:06] You can actually see this.
[05:25:08] Like...
[05:25:09] In 2022,
[05:25:11] almost everything either halted or started going backwards.
[05:25:19] Like 2022 is when view actually went down.
[05:25:22] reacts different because it's more popular
[05:25:25] But like
[05:25:26] If you look at everyone else,
[05:25:28] It's a pre-act.
[05:25:31] Actually, Preact is an exception on the 2022 case. They actually jumped out. But we got here HTMX.
[05:25:37] What a weird... that's just a straight hockey script back.  No, people aren't even going this way. Any... like before it used to be like you start a little bit and then you go like this.
[05:25:45] Anything that's come out recently is just like immediately backwards.  Like, where's Qlik? There's HTMX.
[05:25:52] Stencil, what? I don't know why stencils quick. Almost straight backwards as well.
[05:25:59] Solid's funny because we were doing good and then
[05:26:02] 2042 came around.
[05:26:04] We're actually curving back.  I guess we're having to come back.
[05:26:07] But what I'm getting at is like,
[05:26:11] you're already kind of like,
[05:26:15] it's really, if you don't get over low enough early enough,
[05:26:20] It's hard to ever be able to make a wide arc.
[05:26:25] Right?
[05:26:27] Like if this, this usually this kind of shape,  this means is usually considered like a fail to launch.  Now, if you remove react,
[05:26:35] from this graph.
[05:26:37] this image looks a lot different. Like if you put the X like down here,
[05:26:44] But
[05:26:46] It's interesting.
[05:26:48] I'm like, I'm super stoked that we actually...
[05:26:51] went fairly steeply back the other direction.
[05:26:55] "Preacted to."
[05:27:01] Yeah, it's interesting.
[05:27:03] I wonder if we can see more of this as React gets more criticism, things that are similar to React get...
[05:27:09] the benefits anyways.
[05:27:11] I
[05:27:13] Oh yeah, Remix or React router wasn't anywhere either here.
[05:27:19] All right.
[05:27:22] Oh, that's solid 2.0 talk.  No, the thing that impacts this is not solid 2.0.  The thing that impacts this is more like open code or tan stack adopting solid and stuff like that.  I feel like that has a bigger impact on...
[05:27:36] on this.
[05:27:37] Um, because our interest
[05:27:39] hasn't really gone up our
[05:27:41] Awareness hasn't gone up.
[05:27:43] This and our satisfaction is just health thing. This is purely a result of usage improvement.
[05:27:52] Although that doesn't make sense, actually, because our usage...
[05:27:55] Yeah.
[05:27:57] Actually, this suggests that
[05:27:59] It's not about usage improvement. This is just that it's actually about positive sentiment. Yes, maybe right.
[05:28:04] People who don't use solid are now being more positive about it.
[05:28:09] That's actually what this suggests.
[05:28:12] Huh.
[05:28:12] Interesting.
[05:28:14] Right. That's.
[05:28:15] That's interesting.
[05:28:16] Um...
[05:28:19] I didn't actually look at the rest of this.
[05:28:21] stuff. So,
[05:28:22] I didn't actually see how
[05:28:24] Just from my curiosity, we look here, Fireship number two.
[05:28:29] Yeah, syntax, good old Wes.
[05:28:31] Thank you.
[05:28:32] Newsletters, JavaScript Weekly.
[05:28:36] podcasts, one thing that I'm wondering is where do things like
[05:28:42] Is this where Frontend Masters? Oh yeah, it's right here.
[05:28:44] Yeah.
[05:28:45] RecodeCamp.
[05:28:47] okay
[05:28:49] Epic react.
[05:28:51] Huh.
[05:28:53] I didn't realize this, okay.
[05:28:56] Thank you.
[05:28:57] Thank you.
[05:28:58] Thank you.
[05:28:59] Yeah, I mean...
[05:29:01] Huh.
[05:29:02] Syntax made a jump here, right?
[05:29:07] This was always like Prime and Theo territory before.
[05:29:16] Actually, last year Theo wasn't ranked as high, I'm sort of surprised.
[05:29:25] JSParty... Where's my... I love PodRocket.
[05:29:30] PodRocket should be higher on this list.
[05:29:32] Whatever.
[05:29:33] JavaScript driver.
[05:29:34] also
[05:29:38] But yeah, syntax is...
[05:29:43] the name of the game
[05:29:45] Video creators? Oh yeah, maybe this is the category I'm thinking about. Yeah, yeah. Fireship Theo Prime. Yeah, that makes sense.
[05:29:53] Syntax, Jack Harrington, slow it down. Ooh, I'm a video creator now.
[05:30:01] I guess I did create videos this year for the first time, not just dreams.
[05:30:05] Well, thank you.
[05:30:10] I fell this year. I'm usually, oh no, nevermind. I'm a fifth. I'm like, I'm usually on this list.
[05:30:19] Yeah.
[05:30:21] Mi Evan Rich Theo.
[05:30:24] And...
[05:30:30] Tanner, nice.
[05:30:31] can't see it's funny a lot of the same people that were in my list that i was in like daniel roe great guy
[05:30:36] uh, that
[05:30:37] Dominic, a lot of people were on my list that I was looking for inspiration for in terms of like,
[05:30:43] public speaking.
[05:30:44] Hm.
[05:30:45] Anyway.
[05:30:46] Thank you.
[05:30:48] Okay. I don't know if I have anything else. I don't know if there's any other interesting...
[05:30:54] What's on PodRocket? Is this...
[05:30:57] Rich's podcast.
[05:31:00] Sorry, you're going to make me open it now.
[05:31:05] Yeah.
[05:31:07] Amen.
[05:31:10] Oh, nice. Yeah. Rich is also using the term async first. Yeah.
[05:31:15] Nice. Yeah.
[05:31:16] That's good. We actually have a common banner we can rally under.
[05:31:21] Thank you.
[05:31:21] That's cool. I actually want to check that out. I'm pretty sure.
[05:31:28] Thank you.
[05:31:29] Nice.
[05:31:30] Yeah, yeah.
[05:31:33] Thank you.
[05:31:34] No.
[05:31:39] But yeah, there's definitely a movement going on there. Okay. Yeah. Okay. Let's, I think there's only a couple more things to wrap up on if there's nothing else on that.
[05:31:53] He talks about how it's all 2.0,  it's a model change after looking at Svelte.  Yeah, completely.  Yeah.  Yeah.  Huge influence.  I,  it took both React and Svelte to change my mind,  but yeah, I,
[05:32:06] They...
[05:32:06] ...
[05:32:07] I'd seen Svelte, but I didn't I didn't like believe it until I
[05:32:13] It really actually took React for me to appreciate Svelte, which is funny.  But yes, it's...
[05:32:20] Thank you.
[05:32:21] Thank you.
[05:32:22] Yeah, yeah, definitely.
[05:32:25] um yeah sorry what i wanted to look at was
[05:32:30] thread. Was there something else in here?
[05:32:40] Bookmarks are done.
[05:32:42] Yeah, right.  This...
[05:32:45] There is not much going on with solid.
[05:32:48] They posted, yeah, OK.
[05:32:49] Um.
[05:32:51] This is funny because I was going to prep more for this stream and instead I got like sniped because
[05:32:57] I saw that someone tagged me in this thread and I was like, "What's going on?"
[05:33:02] Vendeev's like, I can't believe I'm about to start my OpenAI shilling and React defending arc.
[05:33:06] How did this happen?
[05:33:08] React defending ARP, because of LMS being good at React, that and React code bases actually scale really well. The component-based reactivity is annoying, but actually saves you from many foot cuts. Signals are an objective correct solution, but they require a really good engineer to manage an understanding of an architect and can blow up in your face hard if used incorrectly.
[05:33:27] And then there was more...
[05:33:31] uh
[05:33:34] I thought it was on one of the comments on this one.
[05:33:36] Thank you.
[05:33:37] Here's a follow- maybe it's off this...
[05:33:42] Same.
[05:33:45] Thank you.
[05:33:47] What did Theo do to you? Yeah, I mean, I was thinking that too.
[05:33:53] .
[05:33:54] Uh...
[05:33:56] uh,
[05:33:57] There's actually a comment that I've responded to that was further down in the change, but I can't actually...
[05:34:02] I can't.
[05:34:03] What is it?
[05:34:05] I thought...
[05:34:10] Thank you.
[05:34:14] I'm not going to find it right now.
[05:34:18] I actually found it when I actually wrote my response, I actually quoted it.
[05:34:21] um,
[05:34:23] But I'm not finding
[05:34:25] that part of it
[05:34:31] Thank you.
[05:34:32] Thank you.
[05:34:37] Thank you.
[05:34:40] Amen.
[05:34:42] You're here for only because that's all a JS video.
[05:34:45] uh
[05:34:47] We work with the Overture Law. Okay.
[05:34:50] There was another comment about talking specifically about
[05:34:54] like explaining
[05:34:55] What?
[05:34:57] what this meant a little bit more.  In any case,
[05:35:02] I thought I wanted to share some of my thinking about scaling signals.
[05:35:06] Um,
[05:35:08] So I wrote a little something.
[05:35:12] Thank you.
[05:35:16] The component reactivity model is annoying, but actually saves you from so many footcoms.  Signals are objective correct solution, but they're probably a really good engineer to manage, understand, architect, and block interface hard if using correctly.
[05:35:27] I'm going to focus on this comment because I've thought about this a lot over the years. So yeah, let me kind of talk a bit through this.
[05:35:33] I have to admit, obviously, that my experience is biased.
[05:35:35] .
[05:35:38] But, like...
[05:35:43] It's interesting. The longest time that I was working on a single team was actually...
[05:35:48] between 20
[05:35:50] 12 in 2020. Essentially I spent eight years at a company on a on a
[05:35:56] on a single team like i've spent eight years at other companies previous to that but i moved around  a couple times on different teams and that team was built by the guy who created knockback js originally
[05:36:09] He's one of the hiring, he's the one who set up the team and continued the original project. So, knockback being the marriage and backbone and knockout JS. And, um,
[05:36:20] So...
[05:36:22] We had a dev team that basically...
[05:36:26] use signals
[05:36:27] with like
[05:36:28] By the end, you know, like some of the people who are still around about the end, like five plus years of experience of using signals based off on production apps.
[05:36:38] And...
[05:36:41] So we had this really strong culture there.
[05:36:43] And while it took a bit for new devs to get used to it at first,  it wasn't really a problem.  We hired a lot of like college grads and in terms to like,  there's the core team that kept the things going,  like the main developers,  but then we also brought in a lot of like young people.
[05:36:59] Um,
[05:37:00] Mostly because we were very close to UBC, the university, and
[05:37:05] Back then, people didn't really learn React. Comp sci or engineering, you might do a final fourth year project where you might pull React in if you're fancy, but people didn't learn React.
[05:37:16] Like they didn't even do much web dev, you know, as part of like their coursework or whatever. So like,
[05:37:22] Um,
[05:37:23] There wasn't like pre, like we got a lot of like open slates from a.
[05:37:26] CS background where we actually taught them how HTML and CSS worked.
[05:37:32] um
[05:37:33] we could hire them cheaper and we banked on their potential, essentially.
[05:37:37] And we also, as it turned out, used React Native for mobile. I spent a lot of time
[05:37:42] uh they're working on performance which is a completely different note react native circa 2016 17 was
[05:37:47] incredible because what it did, but it was also like, it was the funniest thing because there's like the hyper, um, example of like where reacts model was not okay at the time. Like they moved past that, but it was like,
[05:38:00] you were thinking about performance all the time.  Every transition, every animation, every list management.  Like the APIs were like,
[05:38:08] they had very specialized components to do like
[05:38:11] You didn't just do .map if you wanted to do a list view.
[05:38:15] Like you, you had a grid or list component that you used.
[05:38:20] And
[05:38:22] It's kind of funny because a lot of like the criticisms people have on performance and stuff.
[05:38:27] Like,
[05:38:28] This was like
[05:38:29] it in your face.
[05:38:30] um
[05:38:35] Funnily enough for a lot of people, because I'd already started Solid at this point, and I was kind of moved off day-to-day dev, and I was now the hiring manager, and I was basically the director of engineering at this startup.
[05:38:47] Not basically, I was.
[05:38:51] When it came to us doing our big rewrite that we were planning, like the big upgrade, we actually chose to get rid of our reactive solution and move to React in 2018.
[05:39:00] We actually...
[05:39:02] We...
[05:39:04] yeah flat list and even that wasn't good enough for people yeah i i made my own virtualization  system on top of their pre-made uh thing to handle like infinite scroll we did image grids  this company uh vidigami does was like a instagram um for schools like private
[05:39:24] We hosted kind of thing, facial recognition, all this kind of stuff.  And we did lots of like, we did image and video products and we did a lot of image processing, um, kind of stuff.  And our app obviously it was just.
[05:39:37] photo grids, you know?
[05:39:40] So a lot of my experience, that's what I said, I spent eight years basically working in a version of social media.  That's kind of like a big part of what makes me like.
[05:39:51] where my experience bias comes from. And
[05:39:56] Thank you.
[05:39:57] It's funny, I was no longer in the trenches.
[05:39:59] I was like a management,  but I was like,
[05:40:01] Solid wasn't ready. It's funny, my CEO was like, let's bet on Solid, let's do it. And I was like,
[05:40:07] You guys, you know...
[05:40:09] It's not there yet. People don't use it. I don't know if anyone's gonna like like I'd released it by that time like in 2018 like but like
[05:40:16] You know, and it was getting hype because it was like on the benchmarks and stuff. But like,
[05:40:21] I was like, I didn't feel comfortable. Like I didn't realize
[05:40:26] Like it was in this weird window before React hooks came out.
[05:40:31] Um,
[05:40:32] And like
[05:40:34] or maybe just around when React Hooks came out. So I was like, I remember it was like in that kind of zone where it's like,
[05:40:40] I was like...
[05:40:41] Ah.
[05:40:42] I didn't think anyone would like, like our team was reactivity based.  So like,
[05:40:47] when they saw Sawaldee, they're like, this is the future. This is so cool.  But, like...
[05:40:52] I was like, I was trying to be,
[05:40:54] sensible.
[05:40:55] So to speak. So I was like, let's move to react.
[05:40:58] And I was like, we can also get like more of those college devs, maybe, you know, or like boot camp, not just college devs, we get like boot camp types, you know, hire them easier, kind of, you know.
[05:41:10] The funny thing is college grads
[05:41:13] actually were cost more than bootcamp grads.  Cause like, even if they don't have the specific experience,  they have like their ceiling on their potential is much higher,  which is why we like them.  Like we could get them, maybe if they did some UI work,  they might even move into facial recognition or other stuff.  Like, like they were just generally purposed
[05:41:28] that were bootcamp grads were like a lower dollar point in expectations. You know, generally there's always like
[05:41:35] potential there but like it's a very different kind of thing
[05:41:39] And every time we interview someone, it's like, oh, yeah, I have React experience.  Like, I mean, we knew we'd have to train them anywhere anyway.  So like, who cares?  You know, like at least they knew what HTML was.
[05:41:50] so
[05:41:53] Thank you.
[05:41:54] And the funniest thing is when we finally, you know, I worked with the database people, architects, and we planned out the schema.  I worked with the designers and we kind of like had the plan in place, you know, and, you know, each team was like set on what they're doing.  The main UI team led by a guy I trusted the most, who I worked with for a very long time.  He had a lot of new bootcamp grads on.
[05:42:19] on his team is him and another guy like he took over this like rewrite.  And the funny thing is
[05:42:26] They moved so quickly.
[05:42:29] I was surprised. Obviously it was a greenfield development. You can't take into consideration. They basically started from scratch. But they built up the UI to major sections within a couple of weeks. So they had a thing. And then we used Preact, I think, originally.
[05:42:43] because they're smaller and performant and whatever, instead of React. We ended up moving to React later just because
[05:42:51] like gaps in stuff and we wanted to use some react libraries.  Anyway, it's not for like components or anything like that, but just,  it was just like,
[05:43:00] Actually, I guess it was on features.  I was trying to remember.  There's...
[05:43:04] the exact specifics of it.
[05:43:07] at the time, but anyway.
[05:43:11] I was kind of amazed at how fast, like I was optimistic, but I was like, this is incredibly fast, how quickly they threw this UI together.
[05:43:20] But then...
[05:43:21] development slowed down drastically and over like the next like
[05:43:25] month or month and a half
[05:43:28] Deadlines started shifting and expectations and budget and stuff.  They're like,  at first they're just like,  like new technology,  new people not familiar with,  you know,  this stuff takes longer than we thought.  But then I decided to like get,  get in there and like,  see what was going on,  you know,  like console log or whatever.  And,
[05:43:44] I was surprised. The UI was showing up, but it was completely broken.
[05:43:48] like they would update something and it would re-render like a dozen times and i'm not kidding  like more than a dozen times i remember counting one of them where it re-rendered like you click  the button and we rendered like 14 times and like
[05:44:00] like they were swallowing errors because the bad practices and not enough  overview,  don't get me wrong,  but where people were like,
[05:44:10] like basically writing code that swallowed errors  and it displayed correctly,  but like it didn't actually function
[05:44:17] properly or hit a thing and then parts of the UI would just be dead, but
[05:44:21] maybe you wouldn't notice it. It was, it was like, it was terrible. And they  amassed this debt, like within a month into the project. And I was just like,
[05:44:34] And some of the comments I got from the lead dev, he was like,
[05:44:38] He's like,
[05:44:39] I thought hooks would be like signals basically. He didn't use the term signals. We even called them back then. But it's like different. I have to like really
[05:44:48] Thank you.
[05:44:49] when I just do the stuff,  it doesn't just,
[05:44:52] work like it kind of works because like just re-renders but like
[05:44:56] It doesn't update when I expect it to.
[05:44:59] Like it...
[05:44:59] It
[05:45:00] It's like...
[05:45:03] I made a joke, should he use Solid? He's like, yeah, I don't know, maybe. You'd find an issue with any software, it's okay, don't worry about it. But it was very, he found it really weird using React.
[05:45:19] Um,
[05:45:22] Oh yeah, the sunlight. Oh yeah, it's coming in a weird angle. Give me two seconds.
[05:45:26] Thank you.
[05:45:29] Thank you.
[05:45:31] Thank you.
[05:45:33] Thank you.
[05:45:35] Bit better
[05:45:38] And.
[05:45:41] Basically, this is around the time  we made a bunch of decisions, we were like, okay, drop react,
[05:45:46] And like, because I think we were having some problems with their error boundary or suspense boundary component. And that was part of why the errors are getting suppressed, but no one has spent the time to like realize it. And I was like,
[05:45:57] pick a section and go through...
[05:45:59] It's top to bottom and yeah, you don't have to get rid of all the re-renders. Re-renders and react are kind of expected. But like, let's clean this up so that we at least have some level of like...
[05:46:08] we can actively work in this stuff.  Like make sure that the top most areas like the root hierarchy things  aren't overrunning too much.  If you get down to leaves and it re-renders a couple of times,  don't worry about it, but just work
[05:46:22] from the core down to kind of reduce the amount of this, you know, find those key moments.  It's funny, they were using GraphQL as well.
[05:46:29] And, you know, like spend some time to actually work on this rather than just trying to keep on delivering the features.  I know you guys have a tight timeline, but I'm I'm going to vie for us to just put a stop and like spent like three weeks to get stuff in shape.
[05:46:47] Thank you.
[05:46:49] So...
[05:46:54] Thank you.
[05:46:55] Like there's definitely a lack of React.
[05:46:58] experience here. This was like a skill issue.
[05:47:00] Combine senior devs with how much react dev with juniors that had no clue.  And you end up with this.  Senior assumed you could write stuff and react and do reasonable things,  which it kind of did.  The juniors had no clue what was going on and only were worried if,  if things appeared to work properly.  I told them that while they didn't need the,
[05:47:16] Two, three.
[05:47:19] I meant to say throw away the... I didn't need to throw away the API is what I meant to say.
[05:47:26] Thank you.
[05:47:27] I haven't even, I was in such a rush to read this.
[05:47:33] They should basically start over and doing a sweep modulating to fix each part of the app until this ran. It's expected this took a while, but after a few weeks things were much better placed and ironically more aligned with the estimates of how long the features would take. Common things, yeah, okay, so let's go back here.
[05:47:50] Bye.
[05:47:54] The things that experience showed me.  Most developers are more used to imperative thinking rather than declarative.  You can vet this yourself if you have a college engineering background.
[05:48:04] How many...
[05:48:05] People truly excel at effort.
[05:48:07] PGA programming versus typical C-style programming. If you ask someone to say make the game a Pong in each, which would they find easier?
[05:48:15] Um,
[05:48:16] Thank you.
[05:48:18] If you know what I'm talking about, you know what I'm talking about.  But if you don't, that's okay.  But basically...
[05:48:24] FPGA is like a circuit
[05:48:27] digital logic circuit kind of programming. It's almost like signals, but actually literally the electronic analog for it. And I found...
[05:48:35] For me personally, I found it like,
[05:48:37] very fun and easy to do. It's really cool because you'd hook up to these boards where you'd have like hardware interfaces and you could literally like you'd have a screen and you could literally like make like old style arcade games with it. It was great.
[05:48:49] Because it was like the way the logic ran was like,
[05:48:53] was much more literal to like...
[05:48:56] Thank you.
[05:48:56] You weren't running routines that would like...
[05:48:59] Like it was very...
[05:49:01] directed to like
[05:49:03] updating the pixels on the screen versus some level of abstraction. Anyways. But yeah, it's all about clock cycles. And when you do VHDL programming and all that,
[05:49:15] Every clock cycle the system synchronously has to be in sync with each other. There's no before and after. There's just tick, tick, tick, tick, tick. Anyways.
[05:49:26] People gravitate towards solutions that make it easiest to see people
[05:49:29] positive feedback earliest, even if the overall cost will be much greater on them.
[05:49:34] Right.
[05:49:34] If they see the thing, they're like, "Okay, good." They didn't care that it wasn't really working, they could just see the UI. Wrong assumptions hurt us regardless of the direction it is, whether that is experience deaths treating React as if it's knockout or vice versa. It primarily plays a bigger role on preset biases than anything else. Okay. So let's talk a bit about difference in architecture here.
[05:49:55] I've talked about this before, but I don't know if I did a good job explaining it here,
[05:49:59] All reactivity systems involve propagating updates from the point of change to outputs.
[05:50:03] or syncs, depending on what you want to call it.  So there's a simplification that comes with saying  reactivity equals UI.  That's my interpretation of the React model.  Some people have a different idea.  Basically, the UI,
[05:50:13] I representation in React is also data.
[05:50:16] So basically,
[05:50:18] Like...
[05:50:19] It's all shares part of the exact same tree.
[05:50:23] There's no distinction...
[05:50:25] In fact, the output that React expects is UI, not
[05:50:29] the data, but it is UI data, right? You basically virtualize what you want
[05:50:36] the UI to look like, and then React takes that virtualization and compares it to the reality and reconciles it.
[05:50:42] but it means that the output
[05:50:45] Um,
[05:50:46] Gets...
[05:50:47] entangled, essentially, because it has to produce this consistent artifact.
[05:50:51] Thank you.
[05:50:52] while in components there is no boundary to the reactivity.
[05:50:55] The key.
[05:50:57] So you can trust that when something above invalidates, everything below is reexamined, including all the UI.
[05:51:02] No one can argue with the simplicity of that model.
[05:51:05] This is the premise React is built on. It's like when Jordan walked in and was like, let's just throw it away, you know, and people are like, that's crazy.
[05:51:11] They figured out
[05:51:13] how to make it performant. Like generally this would be prohibitive,
[05:51:16] from a performance standpoint, but they developed the solution with a virtual DOM that actually means that this model can be
[05:51:23] relatively performant.
[05:51:26] So if we stop right here,
[05:51:28] you know, like, I think, and this is where a lot of people kind of stop, um,
[05:51:33] You can say that like the original statement is true. There are a lot less foot guns because there's a lot less room for things to get out of sync because literally
[05:51:41] If you're doing everything, what can go wrong?
[05:51:45] The only problem obviously is you do too much work, but let's face it, if every time something changes you're like "I'm going to redo everything"
[05:51:51] with that change. It's kind of like the approach we were talking about taking to AI. Like if it's,  if it's, if it's not getting there, just start from the scratch again. And, you know,
[05:51:59] inform it a little bit better this time, but let it rerun to its natural conclusion.
[05:52:05] better than trying to do incremental things.
[05:52:07] Unfortunately for everyone, the idealistic thinking versus reality doesn't match. The performance isn't good enough. Otherwise people wouldn't use memo, react.memo, use callback. There'd be no react compiler.
[05:52:20] But an even simpler way to think about this is in a model where everything has the potential re-rendering,
[05:52:25] And you're okay with that.
[05:52:27] It's okay to be okay with re-rendering.
[05:52:29] you need to be okay with keeping the temporal impact of those changes in your head.  Like if something upstream changes causes problems,
[05:52:36] your component to run a dozen times.
[05:52:38] If you're trying to debug what is wrong with the component, you have to be able to either ignore the times that it
[05:52:43] those updates don't impact you.
[05:52:48] or find ways to justify and explain them within your mental model.
[05:52:53] Right, this triggers this to rerun, which causes this to rerun, which will cause us to rerun again and so on like.
[05:52:59] Because usually it's like a ban-out problem, right? Like it's like,
[05:53:03] and some kind of timing piece where something
[05:53:06] Your component depends on the change, something above you also depends on the change, and that thing above also filters down into you.
[05:53:15] way of directing synchronous updates generally can
[05:53:20] Uh,
[05:53:21] ensure consistency through that. But sometimes when you have to externalize the data through hoisting or even through different paths when you consider context, you can
[05:53:31] You can get into spaces where
[05:53:36] Like,
[05:53:37] the pure part, like the part that computes your components, can be a little bit sporadic, even  though React ensures that the output at the end is consistent because they're not going to flush  to the effects until everything is settled. But you might have a, you know,
[05:53:50] a bunch of unsettledness while it's going.
[05:53:54] So of course we can fix this, right? We can fix the re-renders.
[05:53:58] Then,
[05:53:59] the lower components can function more logically, like things
[05:54:02] farther down the street. But this introduces two concerns:
[05:54:05] First now, you have to look upwards.
[05:54:07] Like, if you're in the component, you're like, why is this re-rendering? Like, you're going to be like, okay,
[05:54:12] If this is something you want to fix, if this is what I meant, if this is something that you're completely okay with, then just learn to live with it and ignore it. But if this is something that you need to fix,
[05:54:23] The solution is not found within you. The solution is found above.
[05:54:27] You keep...
[05:54:29] you can't manage your component isolation. Secondly, the solution is  often one of two patterns. You either have to structurally hoist up some data dependency,
[05:54:36] so that you can wire it more directly.
[05:54:39] Okay.
[05:54:40] or
[05:54:41] Add memoization to stop propagation.
[05:54:44] And Dan Abramov's "Before You Memo" article, honestly,
[05:54:48] Did I share this in chat? I should share my article in chat first, but
[05:54:54] Dan's article here is really good because he actually shows both
[05:54:58] both this, he made an artificially slow component, and then he says move state down,
[05:55:04] But the way he did this was actually
[05:55:07] - Your projection.
[05:55:09] Lift content up, yeah, sorry.
[05:55:10] Yeah.
[05:55:11] So move state down.
[05:55:13] This you can't always do.
[05:55:15] But lift content up is actually how he shows it.
[05:55:19] through projection,
[05:55:21] he
[05:55:24] He basically...
[05:55:27] Yeah, I'm trying to think of a way to, I mean, I'm not going to get into the,
[05:55:30] The gist of this article.
[05:55:34] Thank you.
[05:55:35] Thank you.
[05:55:35] Instead of putting the expensive tree here, what did he do?
[05:55:45] Oh yeah yeah.
[05:55:46] He passed it through the color picker.
[05:55:52] So then the color picker can see.  Yeah.  The clever trick here is,
[05:55:57] Because...
[05:55:59] Okay.
[05:56:00] Now the color picker can work independently as much as it wants,
[05:56:04] because they don't really care about the children that could
[05:56:06] passed in through projection and the expensive tree works in isolation.  Whereas before, um,
[05:56:13] We the stuff all kind of got tied together and
[05:56:18] Yeah, he puts it in the slot, so to speak.  Right, exactly.  Which through projection actually solves it.  And that's actually what I was trying to talk about here, um, by structurally hoisting things up.  It's like, this is moving content up.
[05:56:29] So the data dependency is more direct or add mem- the other option is add memorization to stop propagation. Dan offers a third option which is move state down, but you can't always move state down if it's shared, it's not easy.
[05:56:39] Dan's
[05:56:40] The first solution is it's hard because of UI structure constraints.
[05:56:44] Right.
[05:56:45] Because even if you can do that in a lot of cases,
[05:56:47] There's going to be cases where it doesn't structurally make sense to do that kind of weird...
[05:56:53] like a kind of like separation.
[05:56:55] I view this generally as a workaround in a sense, as it acknowledges that the UI structure isn't always the best representation of the data structure.  Like, cause you wouldn't naturally write it that way. You're doing it because you're trying to wire the data flows and get around React's limitation.
[05:57:07] But the second solution, the more common one, introduce a whole new layer of complexity. And this is the complexity that React Hooks put forefront. This has a few repercussions. Once we start memoizing, we need to keep memoizing to ensure stability. Once one broken thing in the chain is, then the equality check doesn't happen. And then, you know what I mean? Like...
[05:57:27] And it's now possible that changes don't reach us for reasons that we are unaware of from above our scope, which is...
[05:57:34] which is actually a lot like reactivity to be fair.  But it's just something to keep in mind.  We no longer can just look at the code in our component
[05:57:43] necessarily to make sense of things. There's no actual problem with any of this, but it should be an acknowledgement that we have lost some of our ability to locally reason. We are largely at the mercy of our parents.
[05:57:52] Okay.
[05:57:54] How does this compare with signals reactively? Really, it's the same problem, just upside down. In the same way ReactLOOKS made us painfully aware of memoization, signals make us painfully aware of reactive propagation.
[05:58:02] Say posts are also posted. Signals are wires. You can send them all over the place and end up constantly running some derived state five components over if you're not careful. Signals are hard to keep track of, components aren't.
[05:58:12] Yeah, I kind of disagree about the components aren't fit, right? The benefit of components is in the sense that you can trace down the tree so you know
[05:58:22] the extent at which it can impact. But the challenge is, or trace up the tree, but the challenge is, um,
[05:58:32] Thank you.
[05:58:33] you still have the same sort of
[05:58:41] Categorical
[05:58:42] What did I say here? The start of this is pretty accurate. In the same way you have the responsibility with memoization, you do so with how signals propagation works. Signals are automatically memoized generally, so you think less about the problem, but it's still there. You end up constantly rerunning some dry state five components over if you're not careful.
[05:59:00] I...
[05:59:01] This suggests
[05:59:04] Like...
[05:59:06] that there's something that's not being equality checked or
[05:59:11] Why is it
[05:59:12] If it's derived, it should update. Like, one of the hardest things about talking about this comparatively with React is,
[05:59:20] If in a lot of cases with reactivity, if this has happened,
[05:59:24] it's exactly what should happen because it's literally the model by its definition.  If you're deriving data from other data,
[05:59:30] you expect it to update.
[05:59:32] So
[05:59:35] - -
[05:59:35] Usually the problem manifests itself not from the point of like you're doing something and then like
[05:59:41] You're like,
[05:59:43] why is it slow and like oh it's doing some work over somewhere else usually it's the opposite  usually you're looking and you're like
[05:59:48] Why is this updating over here?
[05:59:51] And then you go...
[05:59:52] you're trying to trace back.
[05:59:55] to like
[05:59:56] what's causing that update. You're like, oh, this prop, this prop. But the funny thing is like,
[06:00:00] and it's in.
[06:00:00] When it's in the component tree, when it structurally aligns, like,
[06:00:04] You...
[06:00:06] this process is almost identical to what you do in React. When you're using a bunch of
[06:00:11] external sources or stores
[06:00:13] then you might have some issues, I guess. But is that any different than, say, using Jyotai?
[06:00:22] Not sure.
[06:00:24] But let's continue here.
[06:00:25] When debugging the story is actually really similar, it just starts from the opposite end. Is this intuitive? Maybe. Not based on your prior experiences, but is this any more complicated? I don't think so. The problem is basically the same, but it manifests itself a bit differently. Since signals are automatically memoized, you're less likely to have stuff run off re-renders.
[06:00:41] but the opposite, things just not updating when you expect. You lost reactivity somewhere. This lends to a much likely
[06:00:48] much likely to break early model, whereas React will let you go further, and then you realize the mess when the performance hits you.
[06:00:56] This is sort of what I was getting at about
[06:00:59] It's not what he wrote here, but it's much more common with a single library for stuff that's not update. Like, you know, like, why is this not updating? Right? It's like a reverse default, but it means that the second that you break the thing, it stops working. Whereas
[06:01:14] in React.
[06:01:16] it will kind of work and then you realize later that
[06:01:19] "Oh, this is actually completely broken but reacted in a miraculous salt job at hiding that, making it work for you."
[06:01:28] Thank you.
[06:01:29] Thank you.
[06:01:34] Thank you.
[06:01:35] Thank you.
[06:01:37] I wouldn't want to be debugging any system with these sort of issues, right? Obviously, it's not always our choice. But one is more likely to not get yourself in bigger trouble by letting you delay handling or noticing that issue.
[06:01:50] Localization of thinking is printed in both models and comprised similarly when it comes to performance. I recommend reading my article thinking locally. Leave a signal to see the parallel here.
[06:01:59] Not enough people
[06:02:01] use or have read this article, especially people who read signals, who use signals. The whole idea here is
[06:02:09] A lot of people get attracted to signals for the wrong reasons. And there's no, and those same people are the people who make, who are like, why does Solid force me to use tuples? And why, why is Solid, you make me type these extra characters instead of just mutating everything in Spot? And why are these verbose APIs? Like, I'm sure I might be poking a bit at some of the Vue and Svelte community, but it's like,
[06:02:33] Because React has very good reasons for the design decisions.
[06:02:38] Luckily for you, you don't have to give up the benefits of React by going to a signals model.
[06:02:42] signals can be completely scalable,
[06:02:44] If you use them
[06:02:46] Well...
[06:02:47] just like,
[06:02:48] You know, like, you don't want to abuse, react terribly, like, you know.
[06:02:54] like any solution.
[06:02:56] you just need to have some structure and sometimes if that structure is  built into the defaults then you've set people on a much better path.
[06:03:03] Um,
[06:03:04] So like,
[06:03:06] The true answer is that there's lots to learn from React. I have written several articles about what people should learn from React.
[06:03:14] But even knowing that, that doesn't
[06:03:17] mean that I think this is actually a flaw in signals design. I think it's just
[06:03:23] like it's kind of like a
[06:03:25] Perpendicular like with
[06:03:28] orthogonal consideration.
[06:03:30] Okay.
[06:03:31] Takeaways. Theoretical models divert from idealist models of practice. I think it's pretty obvious. Preset experience has a bigger impact here than technical consideration. Skill level bars are often set at the point of entry rather than looking at things holistically. Easier to get started is a decent metric, but it doesn't tell the whole story.
[06:03:47] So what does it have to do with skill and scalability? Well, there are some intrinsic  qualities here, especially noticeable at the surface. The overall picture does not suggest  the same. It's possible to abuse any pattern, I'd argue easier to abuse ones that are more permissive up front.
[06:04:01] My experience tells me that when thinking of scaling, we should be thinking a bit longer term, which suggests that a different
[06:04:06] value things should be valued, but I recognize everyone's experience and requirements differ. Okay, so I didn't really
[06:04:12] Like...
[06:04:14] tear down this perspective completely except like I gave the points you needed but I didn't like  conclusive saying this is why this isn't true.
[06:04:21] I think
[06:04:23] Thank you.
[06:04:24] that
[06:04:26] It's not that you require a really good engineer to manage or understand architect and that it can blow up in your face heart of music.  I think the last part can blow up your face heart and use correctly is true of any solution.
[06:04:37] I don't think this is more true of React...
[06:04:40] versus solid or svelte than anyone.
[06:04:43] So the question actually is,
[06:04:46] does it require a really good engineer to manage, understand an architect?
[06:04:50] And
[06:04:51] I think the answer actually should be
[06:04:54] Yes, for all of the above.
[06:04:57] It's just that...
[06:05:00] React lets you get away with more.
[06:05:03] So you...
[06:05:04] kind of lie to yourself to think that you don't.
[06:05:11] So I mean, this will put different value for different people.
[06:05:17] how much do we care?
[06:05:20] It's a very different question when you ask about
[06:05:24] quality. This is not a comment on the framework.
[06:05:28] It's a comment on
[06:05:31] the quality of your product.
[06:05:35] Because technically,
[06:05:39] you should have good engineers to manage and understand your architect
[06:05:44] using React does not save you from that.
[06:05:47] because it will bite you. It might not bite you
[06:05:50] Quickly.
[06:05:52] but it will definitely bite you.
[06:05:54] Right, if my anecdotal story
[06:05:57] is there. It's not because it's React versus Solid, it's simply because
[06:06:01] You can't...
[06:06:03] There is a model that you should be following, and if you don't adhere to the model,
[06:06:07] then
[06:06:08] bad things will happen.
[06:06:14] Thank you.
[06:06:15] So I think the challenge here, and often when this discussion or point is brought up is like,
[06:06:24] This isn't a scale question.
[06:06:27] It's like...
[06:06:30] It's all about scaling.
[06:06:31] In the sense of, like, the size of the project or the...
[06:06:35] or like the effort or complexity of the project.  I think there's actual reasons why
[06:06:41] from a skill perspective, you might want to
[06:06:43] Not.
[06:06:44] or to something other than React. It's more of like a question of
[06:06:49] Like when I read this, I'm not singing about scale.  I'm seeing I've seen scaling people, not scaling product products.  And there there is.
[06:07:00] there is a difference.
[06:07:02] Even if those two things are related because
[06:07:05] Because
[06:07:07] Scaling people suggest that the expertise shouldn't exist.
[06:07:11] But
[06:07:12] It doesn't
[06:07:13] If.
[06:07:15] So
[06:07:17] it has a real factor on the quality of what you're building.
[06:07:20] So like,
[06:07:24] If you're, I mean, the easiest way to put it is if you have a choice,
[06:07:28] between
[06:07:31] Making something and I'm gonna use extreme cases here make something
[06:07:35] that
[06:07:36] that does the function
[06:07:39] But,
[06:07:40] is basically unmaintainable.
[06:07:43] And
[06:07:44] is slow.
[06:07:46] Um,
[06:07:48] but you were able to complete it.
[06:07:50] quick enough because
[06:07:52] Uh,
[06:07:53] you could hire cheaper resources with less experience.
[06:07:59] At what point do you draw the line between that and
[06:08:03] and something where that's of higher quality
[06:08:08] I'm saying the framework isn't actually the deciding factor there.
[06:08:12] beyond the fact that maybe it enabled you to do something you couldn't do before, which is build crappier stuff.
[06:08:22] I know, it's interesting.
[06:08:28] But like, you understand what I'm saying? If you think but good engineers are scarce,
[06:08:32] then you're basically suggesting
[06:08:35] that
[06:08:37] Mm-hmm.
[06:08:37] Good products are scarce.
[06:08:44] Right? Like...
[06:08:46] Bye.
[06:08:48] you
[06:08:51] Thank you.
[06:08:52] A tool having
[06:08:55] There's an importance about a lower entry point in terms of learning and all that stuff.
[06:08:59] But I think...
[06:09:03] having a lower bar for passability and quality
[06:09:08] is
[06:09:08] not necessarily a good feature.
[06:09:15] at least it's it's it's an unfortunate reality it's not something that i get on a uh on a soapbox to  advertise
[06:09:25] You know what I mean? It's like, okay.
[06:09:27] Let's face it.
[06:09:28] what I'm building is not that important or like,
[06:09:32] I just need to get in front of people, limit funds.  I like there's tons of business reasons to make that decision.
[06:09:39] But there is no technical reason to do that.
[06:09:46] Thank you.
[06:09:49] And that's the only reason why I got into this conversation, because this suggests that
[06:09:53] even though like it's it's not saying it's a technical they're saying it's like a hiring or skill
[06:09:58] Issue.
[06:10:00] Um,
[06:10:01] In a sense,
[06:10:03] Thank you.
[06:10:05] Like, that's why I can't completely disagree with the statement on a certain standpoint.
[06:10:10] The more accurate reality is if you don't have the really good engineer,
[06:10:16] An architect.
[06:10:19] it will blow up in your face.
[06:10:26] Thank you.
[06:10:31] Like, it's not a matter of if it's when.
[06:10:35] So,
[06:10:36] If the number of foot guns is not actually less, it's just a function of
[06:10:41] when you hit them,
[06:10:46] You just have to choose whether you pay the cost
[06:10:49] pay a cost up front or pay a slightly larger cost
[06:10:55] on the back and for most
[06:10:58] types of products or business things trying to start up, you're fine deferring the cost.
[06:11:04] So like...
[06:11:05] From a business standpoint, that could make sense.
[06:11:08] I just don't I don't even think this is I think I think you hit
[06:11:13] this issue at the level that this is a concern.
[06:11:17] almost a like
[06:11:19] almost at the same time.
[06:11:21] Like that's the key difference I think here. I don't think like one is drastically better than the other in terms of like when you hit this.
[06:11:29] because that was what my technical thing was.
[06:11:32] I think you actually...
[06:11:33] One might be more in your face, one might be less in your face, you might be ignore things.  But the reality of when it becomes impactful to you and your business is at the exact same point.
[06:11:41] So, like...
[06:11:46] Nope.
[06:11:47] Thank you.
[06:11:49] It's more of like
[06:11:51] you might be able to go like,
[06:11:53] Ignore this a bit longer.
[06:11:55] But the impact
[06:11:57] is felt at the same time. So it's not like you
[06:12:02] It's not like you...
[06:12:06] It's not like it's something...
[06:12:12] that
[06:12:14] you can push off in terms of like, oh, React lets me get further before this becomes a problem. That's not the reality. The reality is,
[06:12:21] it becomes a problem at the exact same point.  The ways to solve it are basically...
[06:12:27] comparable
[06:12:30] It's whether...
[06:12:32] It's like, can you live in the...
[06:12:34] in the, in like the bilf longer. I feel like that's a question. Um, and I think that, that characteristic from that argument standpoint, then I could see an argument against signals based frameworks, because there's probably a lower limit for garbage.
[06:12:52] Thank you.
[06:12:53] Yeah, it's not just...  Yeah, but it's not even just about becoming visible later.  I think...
[06:13:00] that's what people assume and that seems like a reasonable trade-off. I actually think it becomes visible
[06:13:05] sooner. I guess it takes knowing what
[06:13:10] you're like, if you don't have a good engineer, then it's not going to become visible sooner. But if you have someone
[06:13:16] I mean, it depends.
[06:13:17] performance, someone testing it, like someone will notice.
[06:13:22] It will be visible.
[06:13:24] Apparent.
[06:13:25] if you actually use the product at the exact same point in time.
[06:13:30] And the solution
[06:13:31] Could be.
[06:13:32] It's just like...
[06:13:34] are people paying attention?
[06:13:39] Symptom of more bad management, yeah.
[06:13:47] So like,
[06:13:53] I don't think they require any better of an engineer.
[06:13:57] I don't think you can get away with React with a garbage engineer.
[06:14:02] I think you're fooling yourself if you think you can.
[06:14:06] This is both a testament to people
[06:14:09] underestimating
[06:14:10] capability React engineers, perhaps. I think
[06:14:15] I...
[06:14:16] And also overestimating
[06:14:18] engineer like everybody uses their tools slightly wrong
[06:14:22] Like, if you ask the creator of those tools...
[06:14:26] So like
[06:14:27] There is a decent amount of leeway in any tool.
[06:14:31] So like what we're talking about is
[06:14:33] very, very small margins.
[06:14:36] Enough that I wouldn't.
[06:14:37] even be enough to put a statement behind it.
[06:14:40] I mean, if people want to get to the technicalities of like what it actually looks like, the debugger that we can go into that. But like you kind of get that like we're talking about the
[06:14:49] thinness of margins.
[06:14:52] And even then,
[06:14:53] Um...
[06:15:00] Like...
[06:15:03] Thank you.
[06:15:04] Yeah.
[06:15:06] Maybe it's like too easy or too compelling to come up with a,
[06:15:09] a narrative to justify like a business thing.  I've always wondered by like why people try so hard.  Like I feel like often when
[06:15:18] Like with these kind of technology...
[06:15:20] choices or things you have to like really
[06:15:22] Okay.
[06:15:23] come up with like a hard justification of that.
[06:15:26] I understand not everyone uses that every tool is principally
[06:15:29] principled, but it's like
[06:15:35] There are a lot of similarities.
[06:15:37] And the differences are...
[06:15:39] Subtle and nuanced enough.
[06:15:42] that they aren't
[06:15:44] likely going to be appreciated
[06:15:46] by anyone who's not
[06:15:48] Um.
[06:15:50] the same good engineer you have here that could understand an architect.
[06:15:53] So like,
[06:15:57] *sniff*
[06:16:00] You could talk about better defaults or...
[06:16:05] you know, more reasonable default behavior
[06:16:08] *sniff*
[06:16:11] But like, that doesn't feel like a scaling question to me.
[06:16:16] It's scaling in the sense of people, but not...
[06:16:20] Like...
[06:16:21] Like you could think of a dozen arguments the other way.  It's like,  uh,
[06:16:25] If
[06:16:27] on one hand, components re-render everything, then everything is entangled in a sense, so things get more complicated and you can say that if your reactivity
[06:16:35] is signals based, it's isolated. So the bad work that someone does over here doesn't,  no, probably won't impact the bad work someone does.
[06:16:42] If you give them their little wedge, it's actually fairly hard for them to break out
[06:16:47] Right?
[06:16:48] stuff flows down,
[06:16:51] Which is true of React too, right?
[06:16:54] If your component down here re-renders 10 million times, it's probably not going to cause components higher up to re-render unless there's like some
[06:17:01] data architecture problem that's like coming in that's that's worse
[06:17:05] you know,
[06:17:06] Like, there's too many...
[06:17:09] if to be able to make this sort of generalized statement when
[06:17:15] Like the reality of these things is like...
[06:17:18] Memorization
[06:17:20] on reactive components and let's say through something like hooks and an actual like signals-based reactivity system are very analogous.
[06:17:29] There's a difference about where...
[06:17:32] the stuff flows through, but you have this - and maybe the concerns are turned on their head, but they're the same concerns.
[06:17:39] at the same point, at the same thing.  This is just like, there's a structural thing  you can kind of see and visualize that it's like,
[06:17:46] in the same zone.
[06:17:48] Sorry.
[06:17:49] I went off a bit of a tangent.  I probably lost a bunch of you guys.  But I think that's...
[06:17:54] Probably it for today. I just wanted to kind of talk about it because I got completely
[06:17:58] I linked some good articles on the topic and
[06:18:02] So
[06:18:03] I don't know.
[06:18:04] I got more async work to do, sync work to do.
[06:18:11] get everything going. So, um,
[06:18:13] It might be another little while before I do another stream.
[06:18:16] I'm going to keep on pushing the AI, see what I can do with it.
[06:18:20] Um,
[06:18:21] And hopefully the
[06:18:23] today gave you something to think about.
[06:18:27] Yeah, yeah, I am so done.
[06:18:31] *sigh*
[06:18:32] Yeah.
[06:18:33] Thank you.
[06:18:34] Everyone have a great weekend.
[06:18:40] Uh-huh.
[06:18:42] Thank you.
[06:18:43] Thanks.
[06:18:47] Thank you.