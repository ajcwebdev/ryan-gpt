---
title: "ZVKHxm1-g3E"
slug: "ZVKHxm1-g3E"
duration: "3:26:29"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/ZVKHxm1-g3E.m4a"
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
[00:00:02] Hello, everyone. Welcome to my stream tonight.
[00:00:06] Um,
[00:00:07] Today, we're going to talk about
[00:00:11] Compiling for syntax, specifically.
[00:00:15] There was some discussion, especially around Twitter, about some other compiler topics. And I've covered those in the past. I actually had a really good stream on compilation back in, I'd say, end of November, early December, where I spent four hours talking about compilation and optimizations and that whole topic. Plus, week to week, we cover different stuff.
[00:00:37] Admittedly,
[00:00:39] I don't think we get to completely avoid it because this week in JavaScript, there was  some discussion.  So we can dig into it a bit.  Actually, I'm pretty excited to talk about this week in JavaScript because there has  been a lot of...
[00:00:52] different discussions going on and kind of funny and interesting ones,  really just a continuation of last week.  But we've seen them kind of a lot of these things grow and, um,
[00:01:02] kind of manifest into new things. Anyways, if you're joining me, come by, say, say hi in the chat.
[00:01:09] Um,
[00:01:11] Oh, wow. Hello.
[00:01:14] It's good.
[00:01:16] Thank you.
[00:01:18] Give it a couple seconds here.  Sorry, I don't have the cool like,
[00:01:22] We'll start streaming intro music or anything.  This is about as low budget as it gets.
[00:01:26] Like my blurred background, it's terrible. But until I get a green screen in a permanent place to stream, this is what we're dealing with.
[00:01:35] Hi.
[00:01:37] Thanks for joining the stream tonight.
[00:01:40] - Yeah, fairytale reference.  Glad some people got that.
[00:01:45] It's hilarious to me.
[00:01:47] um yeah obviously solid script is actually a thing in in fairy tale anime
[00:01:55] Good.
[00:01:56] starting to see people join on.
[00:01:59] That's great.
[00:02:00] Thank you.
[00:02:01] Thank you.
[00:02:03] Yeah.  No, today was a good day for me, actually, wasn't it?  I took the day off work and went hiking.
[00:02:12] over in the East Bay area.  And it was a wonderfully sunny day in these green hills.  And I had a really good time.  Got a lot of sun.
[00:02:20] which I'm not as used to. I mean, I've been living in California now for two years, but it's still a bit of a shocker. I'm from Vancouver, Canada, where it's just like,
[00:02:31] RAINN 60--
[00:02:33] 70% of the year. The summer is beautiful, but like, it's like all rain.
[00:02:39] Yeah, yeah, yeah, exactly.
[00:02:42] Yeah, it's funny because, but you know, like when, when you like,
[00:02:47] When Rich Harris first-- well, we'll get into it when we talk about some stuff.  Because I can say just the whole JavaScript, whatever script.  I've heard Svelte being called Svelte Script.  And then I was like, OK, let's call it Solid Script.  Reactive Script, I read an article about that.
[00:03:01] in the fall, which we'll talk about a bit today too.
[00:03:05] Yeah, we got some people here. It's been three minutes. Let's get started.
[00:03:11] and talk about this week in JavaScript.  Okay, so I'm gonna share my screen here.
[00:03:17] which I probably should have prepped before.
[00:03:19] the stream, but here we are.
[00:03:22] I'm going to talk about some solid stuff, largely. Last week, there was a few other solid things I didn't talk about because we were focusing on Svelte, but this is a solid week, so let's talk about solid.  So I'm actually going to start right from right last Friday, like a week ago. This thread about reflecting on perceptions of solid. I'm just going to read it out loud in case anyone missed this, but...
[00:03:46] It's kind of interesting to me because this whole thing came out because of a conversation
[00:03:52] Um,
[00:03:53] you know, about it's all the better than React and all this kind of dialogue. And it's a funny one. I was actually on GS Jabber this week, recording the podcast, and it came up again. And the funniest thing is that and this relates to some of the topics this week as well is
[00:04:10] I chose JSX for a very specific reason.
[00:04:14] And solid already had reactive primitives that looked like hooks before hooks came up.
[00:04:18] like,
[00:04:19] None of this was trying to look like Js React, except now we just happen to.  And once we got close enough, I was like, they got good ideas, really well-designed APIs.  So I did definitely borrow elements of it, especially in terms of the tuples for the hooks.  But the funniest thing was...
[00:04:41] I was never trying to make solid look like React.
[00:04:44] I just believed in the same things.
[00:04:46] and respected-- had a reason to use JSX.
[00:04:52] Then React added hooks, and it's like, OK, well, here we are.  So yeah.
[00:04:58] Yeah, I'm just going to read this for a second, kind of get an idea here.  Because my reflection on Solid is this.  It's tricky.  Solid first came to attention because of performance, right?
[00:05:06] um architecturally because it's very different it's capable of doing things that other frameworks  can't but that one would sell most people and i linked this great fred k scott um clip here which i  quite enjoyed
[00:05:17] where
[00:05:19] You know, he showed this little graph showing like how much faster this benchmark solid happens to be than some of the other solutions. But it's more about performance, right? Like the server rendering performance is even better than the client side, but no one really talks about that.
[00:05:34] And then we got attention because of, as I mentioned, JSX and hooks with a VDOM. People were like, oh, you solved the React problem. You know, some people actually pinged, when I first joined Twitter, people pinged
[00:05:49] Dominic Ganaway, who was working on prepack for Facebook to add compilation into React. And he's like, he solved this. He says he solved this. How could you guys solve it? He must be basically suggesting that I was a liar. But I didn't actually solve the same problem. I was working on a different system. React is very different than React. Solving compilation for React the way that Dominic was trying to do is actually
[00:06:13] pretty difficult.
[00:06:15] Right. So,
[00:06:17] It's kind of funny because then we got attention because we  could do suspense and concurrent rendering.
[00:06:21] So it started this sort of Svelte for React narrative.
[00:06:25] But Solids reactivity is runtime.
[00:06:28] not like a compiler across the board, which again, we'll talk about today. Only the JSX is compiled.
[00:06:35] And now we're seeing this discussion around automatic dependency detection and independent updates.
[00:06:41] this whole react as it should have been. No use refs, stale closures or hook rules. And
[00:06:50] I think that...
[00:06:54] Solid has its own considerations. So I said, we don't destructure props. We have this one rule, but it's the abstraction. And it's not very React at all.
[00:07:06] writes and I was saying, solid is not React, we chose GSX because it's portable and existent. We wrote reactive hooks before reactive hooks were a thing. And then,
[00:07:15] The final thing I put was, I think the way we saw skills up and down is really powerful and why I'm so confident about it. When a div is just an HTML development, the state is a primitive that works on its own like a promise does, you feel like you can do anything.
[00:07:27] And that's the takeaway. I'm going to do a stream about this coming up where I kind of do solid past, present, future. And we'll kind of, you know, reflect on this. But I just wanted to start here because I didn't give this thread enough attention last week when it came out, because it really has shown that like,
[00:07:46] It's funny, it's never a single thing.  And that's the challenge with something like Solid.  There isn't that obvious hook.  It's just like people kind of come at it and they're like, oh,
[00:07:55] And then they're like, okay, well, that's interesting. And I'll go back to what I'm doing. And then
[00:07:58] A few months later, oh, that's interesting.  I'll go back to what I'm doing.  But at a certain point, they'll probably just be like,
[00:08:04] Oh. So,
[00:08:07] Yeah, it's...
[00:08:10] It's just one of those kind of things that I wanted to kind of talk about a bit today just because –
[00:08:16] This evolution, you know,
[00:08:18] started several years ago and it kind of continues on today in terms of, you know, us discovering the new powerful things we can do because of this primitive based architecture. Everything's just small pieces. It makes them very...
[00:08:31] What's the term?
[00:08:32] Adaptable. I don't want to say flexible. Flexible usually makes me think of configuration where you have like lots of like dials to turn. I mean, adaptable as in like, I have these pieces.
[00:08:42] Like Lego.
[00:08:43] They can be built this way or they can be built this way.  And, you know, you just kind of decide what you're trying to build.  And then as long as you have the blocks, you can do it.  And that's sort of the mentality here.
[00:08:57] some nice comments coming in here while I'm getting started.
[00:09:01] Yeah, I know. It's a terrible time. Maybe I can do something about this in the future.
[00:09:06] Yeah.
[00:09:06] You can't really work for everyone,  but I think this is actually probably the worst possible time to be streaming.  So I do appreciate people coming here.  You stream first thing in the morning.  It's really good for Europe.  It's like dinner time-ish.  And people all the way across North America can see it.  But you basically...
[00:09:24] cut off people in the South Pacific, in Asia and stuff.
[00:09:29] This time is better for them.  So I guess there is that trade-off.  But I think classically,  solid's grown more in North America and Europe.  So there's a little...
[00:09:39] tension there I guess
[00:09:41] Anyways, keep on going. So, yeah, what else was cool that kind of came up?
[00:09:47] Capacitor.
[00:09:48] Solid Vite capacitor.  I'm super stoked on this because, again, I haven't tried it yet.  And maybe this is something we try on stream.  I don't know how much native stuff.  Do I need to get Android Studio working on here to get it working?
[00:10:02] Seeing solid on mobile makes me--
[00:10:06] pretty happy, stoked. Like it's one of those things where, you know, I didn't have to do any work and people have built this. It's amazing.
[00:10:15] Yeah.
[00:10:17] Yeah, you're probably West Coast like I am.  So, yeah.
[00:10:24] So, yeah, this is really cool. Ionic, you know, and --
[00:10:30] I haven't played with it yet, but yeah, iOS, Android apps, PWA is really, really cool.
[00:10:39] Another cool thing that happened this week was some amazing
[00:10:46] articles were written, really. And the first one that I saw was from Taylor Hunt and
[00:10:57] To be fair...
[00:10:58] Um,
[00:11:01] You know what?
[00:11:04] I'm going to pause on this one for a minute. I want to get back to here. The reason I want to get back to here is because this is going to tie in some stuff we're going to talk to you about in a minute.  Before we go there, I actually want to continue on this maybe raw, raw, solid conversation for a moment and talk about...
[00:11:21] the ecosystem thing. Because right after we did the stream on Friday, basically for the next two days, it had nothing to do the stream. I've just been right after we got the stream, everyone started talking about
[00:11:31] ecosystem. And this is kind of a it's a funny topic for me because like ecosystem means different things to different people.
[00:11:41] And,
[00:11:43] It's always interesting to me when
[00:11:46] like the popular...
[00:11:49] solution and people who are, you know, proponents of the popular solution come out and to start really pushing the ecosystem argument because like, it's fine. Everyone knows that like that's why the solution is popular. But
[00:12:03] when they get to a point where they feel like they have to justify it,
[00:12:07] you know, it suggests that maybe you're doing the right things.
[00:12:12] Like this was a funny one.  I mean, I wouldn't say, yeah, I like that there's quotes  around three technologies better than React.  And I'm actually gonna blow this up one more,  little bigger so you can see it better.  But like, Preact, Svelte, and Solve,  these offer better performance, smaller bundles,  more output APIs, but I'm not using them.  Why? Ecosystem.  React's ecosystem makes it compelling to me.  And then someone, there was like two or three of those  kind of floating around.  And then someone else was like, okay, well,
[00:12:37] These ecosystems have you like 99% covered the time. You don't feel lost and you get a chance to contribute. Don't buy into use React for the ecosystem. Yes, it's just fun. So
[00:12:49] It's a kind of funny argument because
[00:12:51] I think they're both right.  I think from a pure, like, library standpoint, third-party libraries standpoint, they're
[00:13:00] like,
[00:13:01] you'll find what you're looking for in these ecosystems.  Solid is like a little bit lacking on that, maybe on the component libraries,  but that's a gap that's going to be covered in no time.  Svelte has you covered and view, like I don't even know what views in this list, right?
[00:13:14] But...
[00:13:16] When you talk about ecosystem, you talk about job market, you talk about hiring.  It's a whole other thing.  React has really cornered.
[00:13:23] this. And, you know, regardless of
[00:13:26] Thank you.
[00:13:27] you know, what we say or not, it's the true fact, right? But
[00:13:32] I just got to say this though, like being included on these lists and this being the conversation, like what did I say here?
[00:13:39] Right? Like, I'm so stoked. Like, if that's all that's holding you back,
[00:13:47] like,
[00:13:49] what else can I hope for? What else can we do? You're like,
[00:13:54] It's just like saying, this is more popular and has more people working around it than
[00:14:03] That's why I'm using it. It's like, well, of course, like, that's a good reason. I worked at a startup where we had a custom stack and I worked at it for eight years. I said, I was never wanting on the library side. We always could do exactly what we wanted. And, you know, we had, you know, good developer experience and we built a good system around it. But, you know, eight years later, we actually ended up doing a rewrite with React and it
[00:14:29] It's funny, we hit new problems and we tried other libraries and open source and they didn't quite work and then we had to patch them. It was the same thing. On the library side, it didn't actually feel any nicer or better. But you know what was nicer?
[00:14:42] We just started picking up like college grads and like, like just picking up like people who just out of boot camps and they were up to speed.  No more training. Like that was huge for our startup to be able to like ramp people up and, you know, not worry about how much of an investment we had to put into talent.  So like I respect that argument in terms of like hiring and job pools like completely.  It's just like.
[00:15:08] to know that that's the only thing like
[00:15:11] That's sweet. You know, like, you know, keep on making posts like this. People will see it and go, maybe they'll just read the first sentence and just be like, you know,
[00:15:21] you know, go for it.
[00:15:25] Yeah.
[00:15:26] Yeah, what do we got here?
[00:15:29] Yeah, exactly. I mean, it makes sense. So, yeah.
[00:15:35] Yeah, this kind of comes with the territory. And, you know,
[00:15:42] Yeah, and this is a good point, right?  Like, why even bother, right?
[00:15:48] The problem is there are
[00:15:51] problems and solutions, you know, React actually isn't the best at it. And I'm not saying solid is actually going to be the best solution in those cases necessarily. I'm just saying like there are places where React actually isn't the logical choice, like not at all. And
[00:16:04] You know, it's...
[00:16:05] Thank you.
[00:16:06] At a certain point,
[00:16:10] You know, you just go, okay, well, I'm going to try something new. Maybe, maybe I'll build an assault. Like at a certain point, someone's going to do that. And eventually the tide turns if that's the case. I mean, it is hard. I don't.
[00:16:22] I have no illusions to this, you know, like,
[00:16:26] Like it's just a self-perpetuating thing.  And the more popular it gets like,
[00:16:31] I don't even know. Did Angular --
[00:16:35] lose its edge when Angular 2 came out? Or was it just because React was that much better? I'm not actually sure. And, you know, does the leader have to lose their lead?
[00:16:49] for something else to pop up.
[00:16:51] I'm not sure.  Like there's,  there's not,  there's an argument that stuff isn't compelling enough.  Like regardless,  like felt,  for example,  is incredibly successful in the mindshare side,  but not,  not as much on the adoption side.  Like,
[00:17:06] Maybe that's just a reality we live in. I guess we'll have to see. I'm just not so pessimistic. I think that when the opportunity strikes and as time passes, other things will get their chance.
[00:17:23] Thank you.
[00:17:27] Yeah, exactly. And when there's a chance, the chance will happen. So I'm not worried about this. I mean, I didn't get into this because I thought I would win the framework battle on like, there's so many other things.
[00:17:41] I was in music for a long time, right?  And the thing you know about in music is...
[00:17:46] it's like 90% marketing and put yourself up there.  Yeah.  Like sure.  Write a catchy song,  but like it's like,  there's so many like talent,  uh,
[00:17:55] isn't going to get you to number one.
[00:17:57] like,
[00:17:58] it'll get you, it's, it's, it's incredibly helpful to be talented,  but there's so many aspects to it. And, and,
[00:18:05] Like anything, like even if something was strictly the best technology, which nothing ever is, that's still not enough.  Like there's there's just so much to it.
[00:18:15] Yeah.
[00:18:16] Right. So.
[00:18:18] Thank you.
[00:18:19] Bye.
[00:18:20] Yeah, maybe that's what we need.
[00:18:23] That's not what we need to know.  But yeah, I mean, the fact that these conversations are happening are cool.  These threads were interesting to me because...
[00:18:34] you know,
[00:18:36] Yeah, safe enough for the long term.  You know, Rich Harris getting hired by Bursell to work specifically on Svelte, that's big.  You know, that's the kind of stuff that's going to make or break libraries at Solid or Svelte stage.  And I'm not saying that Solid is at Svelte stage yet.  But, you know, like there is a trajectory that I'm seeing for new frameworks.  I was looking at this on the JS framework benchmark, right?  If you look, not JS framework, sorry, the JS survey thing.
[00:19:06] 16 new frameworks actually launched up really quickly.
[00:19:10] They gained like 10, 15% a year.  Like you rise with meteoric, like react.  They went up actually fairly quickly and they,  then they hit their plateau and they, and they kind of barely moved.  Svelte.
[00:19:23] for the last three years has moved up slower,  but just keeps on moving up.  Nothing else has been moving up over that time period  in terms of usage.
[00:19:32] I think this is just like the slow climb. And that's what we're in for unless something fundamental changes.
[00:19:40] Thank you.
[00:19:41] You guys are great.
[00:19:44] All right.
[00:19:44] Thank you.
[00:19:45] -
[00:19:48] Thank you.
[00:19:48] Thank you.
[00:19:50] Yeah, this is an interesting topic for me. And I think it's cool that people are discussing it and being realistic about it.
[00:20:00] I already talked about-- I forgot what more it was.  Did I have more?
[00:20:04] Yeah, there's things we control and things we can.  As much as reaffirmation of doing the right things,  ecosystems come with time and it all starts with people  recognizing the potential.  So yeah.
[00:20:14] That's really my closing point on this one.
[00:20:19] You know, I mean,
[00:20:20] I've seen the nasty other side of it.
[00:20:24] Right.
[00:20:25] Sorry, where is it not working here?
[00:20:32] which is that side.
[00:20:34] I mean, I'm not going to I can't give too many details here, obviously, but you can imagine if you work at a company that doesn't use React and the other popular companies that are of the same size or caliber use React, there is definitely a friction and misunderstanding with developers.  I've witnessed this.
[00:20:51] You know, where, you know, there's this thinking that like, you're hurting their job, future job prospects, like you're hurting their resume.
[00:21:00] Um,
[00:21:01] I've been told that, that we're like basically we don't care about their future.
[00:21:10] because we might be making them use a framework that's not React.
[00:21:15] That's insane to me. Like, but I get it, right? Their view of the world is that they go into a resume, someone's going to ask, or sorry, into an interview, someone's going to ask them about the specific detail about hook rules and like when to use ref and stuff. And they're just not going to have that experience. Sure, they built a hobby project, but they never did anything to scale.
[00:21:32] For me coming up, it was all about just learning
[00:21:36] the framework and the tools and
[00:21:38] When I did one, I learned all about that. When I did the next one, I learned about that. And now that I know about two, I was able to connect the dots, see the similarities and my understanding of both increased.
[00:21:48] That's why I'm here today.
[00:21:50] because I spent so much time working on different solutions, benchmarking them, studying them.  It was understanding, you know, doing real work in one, doing work in another,  and then kind of learning the thing that's not written down in the docs.
[00:22:04] And
[00:22:06] But how do you tell someone that? How do you tell someone when it's like their first job out of college and they're like, I thought I was going to be able to use React and now where can I get hired?
[00:22:15] Um,
[00:22:19] Like it's a challenging thing.
[00:22:27] Yeah, yeah. Like, if you talk to hiring managers,
[00:22:32] Like I do hiring myself, I do interviews.
[00:22:36] But again, I'm not hiring for a React position, so maybe like...
[00:22:43] I'm excited when people have good React experience to that.  It shows that as long as you understand declarative libraries,  gone through the patterns of the trials,  that shows that you're able to learn it.  It's not like, you know...
[00:22:55] being able to recite the hook rules in reverse order or something, you know, while standing on your toes or standing on your head or something like that.
[00:23:04] But it's hard to appreciate.
[00:23:13] Thank you.
[00:23:15] Yeah.
[00:23:16] Sure.
[00:23:19] Ember was a fun framework, but yeah, this is the thing, right?
[00:23:24] Frameworks are a mode of space, just like programming language. At the end of the day, the finished project is all that matters. Yes.
[00:23:31] Do you know what's even a hotter space, in my opinion, than frameworks?  Or maybe it's why frameworks are a hot space? Syntax.
[00:23:39] That's why we're here today, talking about syntax, is because God is an area where people are opinionated and sometimes it matters. And I talked about the one I talked about compiler optimizations, but sometimes it does not matter and it's purely superficial and people just go crazy over the fact that they have to type four more characters on a few lines.
[00:24:00] even if it's conceptually one for one,
[00:24:04] It's not something that I appreciate enough, and that's kind of why I want to do this exploration today.
[00:24:10] Well, you know,
[00:24:11] Yeah.
[00:24:16] Yeah.
[00:24:17] Yeah, this is an interesting one, right? Because I think declarative frameworks are a skill. Like some people kind of talk and hire about talk about like hiring on like JavaScript and I'm not saying this is what you're saying, but like fundamentals, you know, and like accessibility, like there's a whole bunch of native
[00:24:35] you know,
[00:24:35] knowledge around the platform that's really helpful. Understanding progressive enhancement, like all these things. And
[00:24:43] I mean, we hire on JavaScript on our team  because we do a lot of platform work.  It makes a lot of sense.  But I do think declarative...
[00:24:50] I do think declarative
[00:24:53] frameworks are a skill set, but I don't care if it was Vue
[00:24:57] or Solid or no one's getting heard of Solid, sorry.  Like, or React, you know, or Marco or whatever.  I don't care about which library it is.
[00:25:21] Yeah. Yeah. I mean, this is why I want to explore syntax. And we'll get there in a minute. I just -- the ecosystem conversation was just too much of a hotbed. And I wanted to talk about it. So now I'm going to get back to where it's going. Because I still got a few more topics here. This week in JavaScript was rich. And it was really cool. So I want to talk about the Taylor Hunt story. Because how many times
[00:25:42] And I'm going to go into here. Yeah, let's click into this one. How many times like you see this situation this for some e-commerce site I think it's called Kroger. And how many times are you in the situation where
[00:25:54] you're, I don't know, tasked with like,  he was tasked to do with the rewrite  and he essentially was trying to get his company's metrics  up, right?
[00:26:04] And
[00:26:06] And basically they had React Redux set up.
[00:26:10] which was like 44.7 kilobytes before any feature.  And they were doing their page test scores,  and they just weren't good.
[00:26:18] They're like, how can we get better performance here?  And he goes and details this a bit.
[00:26:23] Okay.
[00:26:24] five stages of grief on performance.  Like this article is hilarious.
[00:26:28] And, you know, he spent a lot of time trying different stuff and testing it.  And what was really kind of interesting for me is
[00:26:36] You know, he looked around for suggestions and like help.  He was like, well, if I need to improve performance, how do I how do I improve performance?  Like, what are the things I have to do?
[00:26:48] And, you know,
[00:26:51] Alex Russell has a great article I've said in the past about can you afford it real-world performance budgets, which suggested that
[00:26:57] you know,
[00:26:59] Like, you know, he said he has a pretty high number that, you know, we should be in this 130 to 170 range. But like, I've seen the number like from Addy Osmone or was it Jake Archibald's articles about the cost of JavaScript that suggests that number should be more like 80 on the initial page load. But, you know,
[00:27:16] Essentially...
[00:27:18] - Like,
[00:27:20] He was trying to...
[00:27:23] you know, cut down his page. So for some reason, he did a bunch of math and he realized that he  wanted to get to 20 kilobytes.
[00:27:34] OK, so they bumped them up to 250 now?
[00:27:37] Yeah, I mean,
[00:27:39] I guess the bottom end devices were up, but his test frame that he had had a much lower number. So he was trying to get to 20 kilobytes.
[00:27:49] And then he started looking at like,
[00:27:52] He said, what I did, I went to Amazon and made up a really bad user agent to see what they loaded.  And he said, what I did, I went to Amazon and made up a really bad user agent to see what they loaded.
[00:27:59] Basically, it loaded like the most basic page and
[00:28:04] -
[00:28:05] Yeah, so he's like, okay, we can make things smaller. Like there's a way to get that kind of performance because Amazon actually is one of the actually for a large e commerce site has actually relatively pretty good performance. And if you saw tweets from a few months ago, part of that is because they don't use any JavaScript frameworks. They, there was like a whole thread that kind of raised some heat because they're like, yeah, we can't use react SSR. It's too slow.
[00:28:25] Um,
[00:28:26] So essentially,
[00:28:29] Thank you.
[00:28:30] What he landed on was MPAs, essentially, because that was the only way to cut the JavaScript down.
[00:28:38] And what was interesting, what I loved about this article was he was in this place where he wasn't allowed to touch the back end API. Right. And he had these cascading calls and he tried to optimize them as best he could.
[00:28:52] But, you know, so he, you know, dealing with time to first fight and all these things and the problem, web performance is other people.
[00:29:01] Basically, within his own organization, he didn't have enough control to actually change the back end.  There's so many places.  So what he ended up doing...
[00:29:10] was kind of realizing that he wanted to do an MPA for this case.  He did, again, figuring out, let's say what here,
[00:29:18] Figuring out -- what was this here? What are the odds my server can respond quickly enough?
[00:29:25] Yeah.
[00:29:26] He basically calculated that he would never have a chance of actually getting the fastest response.
[00:29:32] Like one in 10 would he get the response he wanted.  So blocking for time to first bite was just never an option for him.
[00:29:39] So eventually he came up, he realized that he needed streaming.
[00:29:43] And in this video, he showed the difference between streaming and not streaming. Right. On the right, you can see the same page.
[00:29:50] load right away while it streams in the content while the other page takes the full 2.5 seconds to load in. These take the same time to load but one feels a billion
[00:30:00] a billion times faster for the end user,  was essentially what the argument was.  And I mean,
[00:30:06] He goes on more, but I mean, okay, fine.  Was this just a big...
[00:30:11] He was like, why not Svelte?  He looked at Svelte.  He looked at a bunch of stuff.
[00:30:16] Basically, there was only one solution that did streaming. So, okay, maybe this was just a big ad for Marco, but...
[00:30:21] The point was, this wasn't made by the Marco team.  We didn't write this article.  I thought this was really cool.  If you want to learn more about Marco, check out my stream from two weeks ago.
[00:30:33] This article was really in depth with how he approached a real world problem.
[00:30:40] And, you know, he has a whole bunch of articles here about streaming and his history of streaming. And he did his research. And basically, at the time, his only solutions were Marco and Dust for Node.
[00:30:55] Thank you.
[00:30:56] So like
[00:30:57] And he's going to continue on it.  But I just thought this article was really awesome.  Not just because it plugs Marco at the end.
[00:31:04] But because essentially, like, it's nice to see a real world example of this stuff.
[00:31:10] Of course, this caused a whole other chain of reactions because, of course, Remix had the jump in because it was streaming and...
[00:31:22] They like to tell us that streaming isn't fast enough.
[00:31:30] But
[00:31:32] You know what?  I want to talk about this too because--  or sorry, that's not streaming as fast as-- the stream  doesn't have a big enough impact.  But actually, I figured out the problem why.  And we'll get to that in a moment.  Because there was another thing that was very similar.  Adi, Asmani, Chrome team made this chart.
[00:31:53] And he was trying to kind of show all the different ways to render the web. This is on patterns.dev, this chart. And it was
[00:32:03] they've been tailoring this chart for years.  They had it in some old articles from 2017,  18, 19. And
[00:32:10] In the past, I was just like, yeah, this is mostly right,  so I won't leave it alone.  But this year, they tried to add new topics and stuff.  And the one thing that actually was kind of funny,  and I'm not the only one who said it,  I read the chart and I was like,
[00:32:21] This person's been using Next.js.
[00:32:23] Because you could tell that all the numbers and all the considerations were very specific to the perspective one would have from using Next.js.
[00:32:31] Um,
[00:32:32] And
[00:32:34] especially this whole time to first-- time to interactive versus first contentful paint, this matters completely based on the hydration technique. And none of these actually define what hydration technique that you have to use.
[00:32:47] Right. Like, like,
[00:32:48] There is some.  Obviously, CSR doesn't hydrate.  But you can mix and match hydration techniques.  I'm working on an article to hopefully...
[00:32:57] bring some clarity to this because people pass this article to me and they're like, what does it mean by spa behavior limited?
[00:33:05] or caching minimum.
[00:33:09] And it's kind of like,
[00:33:12] I don't know.
[00:33:15] Um,
[00:33:18] Yeah, this current chart still has some things.  But...
[00:33:22] Okay.
[00:33:23] What was interesting for me for this chart was that Ryan Florence, Remix, decided to make his own chart, where he crossed off half the stuff.  At first, I was just like, oh, is this, especially with this red one, I'm like, is this just...
[00:33:37] are we inventing a category for our own framework? But he actually has a lot of really valid points because this whole hydration row is basically garbage, as I mentioned before, like it just doesn't have any correlation. And
[00:33:49] And
[00:33:50] There's some comments about caching and yeah, all the ambiguous areas, like why is it limited
[00:33:57] spa behavior in this case.  And like, basically, just this whole thing just
[00:34:03] I think we need a rewrite or redo of this at this point.  But the one point that he made that I thought was weird was he was like,
[00:34:10] On streaming, he crossed out this low and consistent across pages and said, "Depends on what first chunk does server side and user network slow.
[00:34:18] User networks have the same time difference byte as SSR.
[00:34:21] Okay.
[00:34:22] I was like, what?  That makes no sense.  How could--
[00:34:27] Like streaming, you literally get the response, start rendering,  and start responding right away.  You don't wait for any data.  How could that have the same time to first byte
[00:34:36] as like, wait for the data.
[00:34:37] Like we've seen on the stream, we've seen like the impact of streaming.
[00:34:44] How
[00:34:45] How could that be the case?
[00:34:48] And
[00:34:51] I was like, okay.  I hadn't been paying attention to time to first bite.  I've been looking at first paint.  And yes, first paint seemed to be the same on a slow network.  I've shown this before.  So like on a fast network, streaming looks much nicer.  But on a slow network...
[00:35:06] um,
[00:35:08] Yeah.
[00:35:08] Like...
[00:35:09] like the stuff kind of showed up at the same time.  And it makes sense to a certain degree,  because maybe the data's like kind of still coming  over the wire and it kind of all ends up at the same time.  But time to first byte should definitely be faster  for streaming.
[00:35:24] Definitely.
[00:35:26] It wouldn't make sense that it wouldn't. So I was like, okay, let's, let's, let's go look at this again, because
[00:35:33] Thank you.
[00:35:33] I mean,
[00:35:36] Because
[00:35:38] I mean, you've seen my timelines here, right? This is Solid Hacker News. This is the Remix Hacker News. And if we look at the performance, we've seen these charts and these graphs before, right?
[00:35:52] Did I compress something on the network side? Yeah.
[00:35:55] Let's open it.
[00:35:59] Like the whole thing where like,  actually I wonder if this has early chunks  working here or something, I don't know anyways.  But like essentially, usually the page loads  and then the assets load
[00:36:09] Um,
[00:36:10] for Remix, and then that pushes things out. This run here,
[00:36:16] was done on slow 3G. So essentially,
[00:36:20] Thank you.
[00:36:21] First paint is at $42.85.
[00:36:23] And large contentful page is at the exact same time.  This is what happens when you do async rendering.
[00:36:30] Because...
[00:36:31] at that point they have to go request the chunks from the server and then you know get sort of get  the javascript it takes a while for hydration to happen and it's at 13.594 in the solid hacker news  example while it's streaming here we're loading the stuff so you know yes our first paint is  is is around the same time on the slow network but then
[00:36:53] Um,
[00:36:55] Why is this not updating?
[00:36:57] Our largest Contentful Paint and
[00:37:01] And, uh,
[00:37:02] Thank you.
[00:37:04] And, you know,
[00:37:06] So our hydration is done about almost like three seconds sooner.
[00:37:11] Yeah.
[00:37:12] I
[00:37:13] The thing was, I was like, I've been focusing so much on this paint stuff, right? So clearly,
[00:37:18] like in my browser, I can see this event is like slight advantage on paint,  but it's like minor, like in the end, it kind of works out the same way.  It's hydration costs to kill,
[00:37:26] And that's a React problem, not a remix problem.
[00:37:31] Then I went to the network tab and I looked.  And it was like time to first byte on this  is 2.02 seconds for a solid version.  And on the remix side, time to first byte was 2.03 seconds.
[00:37:43] The time to first byte was identical.
[00:37:45] Thank you.
[00:37:50] This doesn't make any sense.
[00:37:55] And
[00:37:56] You know, and so Ryan Florence is right, right?  So what I did was I was like, okay,
[00:38:03] What if Chrome DevTools are lying to us?
[00:38:08] Because we're throttling it.  We're the ones who are causing...
[00:38:13] This.
[00:38:14] slow 3G. What if
[00:38:16] The Chrome DevTools are the reason that we can't actually see
[00:38:19] the performance difference.
[00:38:22] That was my hunch.
[00:38:24] And as it turned out, it was the right hunch.
[00:38:31] Because, I mean, we can run these again if we want to.  Like we're in slow 3D, like, let's just run these again  just to be sure because, you know,
[00:38:42] This takes a second, or like 15 seconds.
[00:38:46] Mm.
[00:38:49] Thank you.
[00:38:51] Thank you.
[00:38:52] Okay.
[00:38:53] Thank you.
[00:38:55] OK, there we go.
[00:39:00] And
[00:39:03] Thank you.
[00:39:04] Let's run this one again.  Slow through G.
[00:39:07] Thank you.
[00:39:09] Thank you.
[00:39:13] You can see the streaming.
[00:39:15] Right? Like,
[00:39:16] It's loading state loaded sooner, right?  OK, cool.  Now we're done.
[00:39:22] but...
[00:39:25] Again,
[00:39:28] 201.
[00:39:31] Thank you.
[00:39:36] Oh, this was 4.15. Maybe this is a bad run for Remix. It should be the same. I don't feel like we're running it again. But my point is that when
[00:39:48] I went to one of those sites, the same site that Taylor linked, and grabbed a 3G connection in Mumbai, India, and said, let's run this here instead.
[00:39:59] and see what the difference is.
[00:40:04] Honestly, if you look at these
[00:40:05] these
[00:40:06] Oh, what did I do? I went filmstrip view.
[00:40:10] If you look at these plots here, what you're gonna see,
[00:40:14] Can I scroll sideways?
[00:40:17] Maybe I do need to go to this filmstrip view.
[00:40:21] It takes basically 2.5 seconds to get to the loading.  So it takes a long time.  And then you see the final thing at three seconds.
[00:40:30] But...
[00:40:31] Our first byte is at 1.634 seconds. On the Remix one, first is at 2.387 seconds. So the first byte is pushback. And this isn't a big data request. This is not like that demo I had where we load like 1400 comments. This is just like 30 stories on the front page. The total time ends up being basically the same here.
[00:40:51] like for rendering it's like three second mark right so it's not like a big deal solid shows  the or streaming shows like the loading placeholder for about half a second before that so like the  page loads like maybe that's not the best experience if it's a longer data load like with more data  that would be more impactful but and the final time is about the same for visual not necessarily timed interactive
[00:41:13] But, but,
[00:41:15] The thing is, you can see
[00:41:18] Streaming actually has a benefit.  And look at this.  Look at the waterfall diagram here.  I want to show you something.
[00:41:24] Even under the slow network, we can see
[00:41:27] this the same here's the html coming in and the assets starting to get loaded  while the html is coming in which lets us get our work started sooner
[00:41:36] And in the Remix example,
[00:41:38] we see
[00:41:40] Here's us waiting for the HTML page to finish before we load anything.
[00:41:45] And I
[00:41:46] Yeah.
[00:41:47] which obviously pushed back hydration, which this does not measure here.  This is not this is not showing us hydration costs because you see it finishes visual here.  Hydration is still going out.
[00:41:58] out the four second mark beyond what we're looking at.  And it's still true here in solid two,  but it's just interesting to me that essentially,
[00:42:09] you can
[00:42:10] In Chrome, you don't actually get to see the benefits of the streaming in the dev tools when you have a slow network, when you're doing the artificial slowdown.  But you can when you test it in an actual environment.
[00:42:25] Yeah.
[00:42:27] Okay.
[00:42:28] *thinks*
[00:42:30] Okay.
[00:42:31] Thank you.
[00:42:31] Thank you.
[00:42:33] Sure. Probably. And all of this stuff is from Cloudflare.
[00:42:38] It probably isn't as big of a deal, but I did want to mention, like it is a 3G, so it is a slower network.
[00:42:45] is that we can make worse, more aggressive demos, which show streaming perform even better. I just wanted to show that the dev tools
[00:42:54] are actually misleading.  And I'm sure that's what everyone does, right?  You make an example, you test it, and then you go in the DevTools,  and you simulate slowdown.
[00:43:01] And that's not the full story.
[00:43:03] So time to first byte is faster with streaming.
[00:43:08] Makes sense. It's just the dev tools hide that fact.
[00:43:12] So,
[00:43:16] Yeah, I mean, there's a lot of things that you can't simulate properly. So I think I that was I know this is kind of a tangent on on this sort of chart thing, but.
[00:43:26] Yeah, this needs some reworking, but at least...
[00:43:29] Um,
[00:43:30] There is more benefit to streaming than the Chrome Dev tools would witness, which means that I think the...
[00:43:38] I do think that
[00:43:40] The whole thing about streaming here isn't actually correct. So just wanted to kind of throw that out there. So anyone who's like playing around with streaming and like playing down with network slowdowns, that's not the best way to kind of test it.
[00:43:56] Um...
[00:43:58] What else was fun this week? There's a couple more things.
[00:44:04] OK, yeah, we're not quite there yet.
[00:44:08] Mm-hmm.
[00:44:09] Thank you.
[00:44:10] This article from Igor Miner, for you guys who don't know, Igor was –
[00:44:17] one of the lead devs on Angular for, like, over a decade.  And he left Angular last year to join Cloudflare  to work on, like, the future of web, essentially.  He's working on the workers' pages team, or sorry, workers.  And, like, basically, he's there to kind of
[00:44:36] build a new, better experience around Cloudflare.  And this is a really powerful post.  He talks about the history of web dev from his perspective, which is great.  He goes through like,
[00:44:47] over a decade worth of history going through each stage and shortcoming and how the next thing replaced the previous.
[00:44:58] What I thought was really cool was that, let me see if I can find it here, was that, you
[00:45:06] He told this really personal story, which was really quite moving about experiences. And then when we got to
[00:45:13] to here. He talks about generation zero, which is what he calls the pre-Ajax age, and then generation one, which is like Angular 1, and then generation two, which is where we are right now. Solid gets a shout out, which is sweet. But then
[00:45:27] He's talking about the problem with single page apps and fate sharing. There's a whole bunch of stuff here. Basically, what he's signaling is about the return to server and more specifically,
[00:45:40] the return to the edge. And, um,
[00:45:44] He gives a little bit of thoughts on what he considers what Generation 3 looks like. He talks a bit about Qwik.
[00:45:50] And he talks a bit about Remix and Islands.  And he even gives Marco a shout out, which--  and Wiz, which was Google's internal progressive thing.  But basically suggests that a lot of the same stuff we've  been talking about on stream, talking about JavaScript first  architectures.
[00:46:05] talking about
[00:46:09] you know, making infrastructure accessible on the edge, you know, portability of
[00:46:14] compute monolithic versus distributed
[00:46:18] And he talks about streaming.
[00:46:20] So I thought this was really,
[00:46:24] Really interesting, detailed article.  And I think everyone should, if they get a chance,  should check it out.
[00:46:30] Um,
[00:46:31] And I mean, he wasn't done, like, honestly, um,
[00:46:36] Sorry, Taylor's follow-up article has this whole thing.  We'll go over that in two seconds.  But Igor also wrote another one about micro frontends, which I love just as much.  Check it out.
[00:46:49] We've been facing this a lot recently, a lot of conversations about micro frontends and like module federation. He's dead on here. Micro frontends leave a lot to be wanting. I'm really interested to see what Igor and team built over Cloudflare. It sounds like they're working on some sort of new micro frontend thing, or at least thinking about it, because clearly,
[00:47:09] this article is suggesting as much. So I'm pretty excited to see where that goes.
[00:47:15] One more thing on streaming before I move on.
[00:47:17] Taylor pulled out this article and I don't pull out this image and this is exactly what we showed earlier.
[00:47:26] Um,
[00:47:27] just a minute ago and see how the time to first bite and where it sits like i think  there's a good visualization of what i was trying to show with the the dev tools there um so i think
[00:47:37] Yeah, this is just this is pretty typical of like it's not just remix, but next and basically self-kid basically all the JavaScript frameworks we have today that don't do streaming. The timeline is considerably different. And I said I've shown this like a dozen times on stream, but I just it's cool that there's like they have a graphic for this now.
[00:47:59] Thank you.
[00:48:01] Yeah.
[00:48:02] Yeah.
[00:48:03] That one, the new types in JavaScript was the week before. I talked about it a little bit the previous week.
[00:48:11] Thank you.
[00:48:12] Sure, Theo. We can give a slot for that. I might have actually missed the new ping giveaway.
[00:48:22] Thank you.
[00:48:23] Mm-hmm.
[00:48:30] Yeah, maybe I can find this right now.  What's the ping giveaway?  The ping video if I got it.
[00:48:38] Thank you.
[00:48:40] Thank you.
[00:48:41] Thank you.
[00:48:42] Thank you.
[00:48:43] What's the pin giveaway?
[00:48:46] Here you go, free advertisement.
[00:48:48] Giveaway, level up your stream giveaway.  Want free stuff?  We're giving away...
[00:48:53] I don't even know what that is, Wave 3 and FaceCam.  See, this is cool streamer technology that I'm not aware of.  With six free months of Ping Pro,  follow the instructions below for a chance to win.
[00:49:05] There you go.
[00:49:06] Thank you.
[00:49:07] Right here.
[00:49:08] This is all you need to do.
[00:49:09] Better camera.
[00:49:11] Mike.
[00:49:12] Six months, you're set.
[00:49:14] Thank you.
[00:49:15] Thank you.
[00:49:16] Thank you.
[00:49:19] Thank you.
[00:49:22] - Yeah, my completely budget setup  could definitely benefit from this.
[00:49:30] Thank you.
[00:49:31] Thank you.
[00:49:32] Okay. So, yeah, we'll do that later.
[00:49:37] But yeah, definitely cool.
[00:49:39] Okay.
[00:49:43] That's most of this week in JavaScript, which we're at 15 minutes, but there's one more topic that's related to this week in JavaScript, but I'm going to give it its own banner because I think it's important.
[00:49:53] JSX.  I want to talk about JSX.  The reason I'm taking care of this one up front here is because this is not the main topic of what our stream is tonight.  Because I'm actually talking more about the compilation that happens for like on the code side, like the Svelte.
[00:50:10] I'm not talking about templating. We've been compiling templates since forever. Not forever, but for a long time. We've had template DSLs, whether they're runtime, just-in-time compilation, pre-compilation, renewing this forever. But there was this tweet, you know, after the types conversation, and we talked about this last week, there was this tweet that was like, JSX should be part of JavaScript. And I'm not going to lie.
[00:50:35] I was just like, oh, yeah, OK, yeah, this again.
[00:50:39] Right.
[00:50:40] Sweet. And I ignored it. I mean, I mentioned on stream, but I was just like, yeah, whatever.
[00:50:46] And
[00:50:47] Thank you.
[00:50:47] The reason I was just like, whatever, is because we've kind of seen this before.  I don't know if you, like, not JSX, but is anyone familiar with MDV?  Model Driven Views.
[00:50:58] This was a proposal from Google.  Look, what was this last worked on?  Nine years ago.  Here you go.  And they thought, okay, well, let's bring some templating things.  Now that we have templates, elements in here, we can add, you know, repeats, and we can do control flows and interpolation.  If this looks familiar to you, this is basically Polymer.  But, you know, this is nine years ago.  Well, that's 2000.  Yeah, I guess it's around the dawn of Polymer.  They were thinking that they would just bring the syntax to the browser.
[00:51:28] Kind of like, you know, the web component driven thing. And even if,
[00:51:35] you know, you don't care that much about MDV.  Well, it didn't die there.  In 2017, Apple came up with template templates
[00:51:43] HFL template instantiation and
[00:51:47] I remember seeing this one and being like,
[00:51:50] OK.
[00:51:53] And this one, it was also mustache syntax, but this time now, it started kind of looking like lit HTML.
[00:52:00] Um,
[00:52:02] you know, you basically could tell template and then you could feed it updated data like it's like we're.
[00:52:08] You know, you have your syntax and then you can pass the data through and call an update and template. Yeah, I think this became the template part thing like I'm a little hazy on the details, but every time I saw this, I was just like, oh, man.
[00:52:21] People really want their framework in the browser.  Like, maybe that's the solution.  Let's just bring the JavaScript framework in that thing.  First, it was like Polymer and then Lit.  Like, which Google framework next?  I mean, to be fair, I mean, this is a complete joke here,  but this tweet I saw just before I joined stream.  Browsers should ship with the top one gigabyte of NPM  built-in with the option to download the rest on demand.
[00:52:45] In my head, I was like, oh, so React should shift in every browser.  I know that's not necessarily what they're saying here, but when...
[00:52:52] you know, Seb visionary for React says this. I start thinking in my head, I'm like, yes, this is another way to get your framework in the browser. Then we don't have to worry about the size of React. It's already there for everyone.
[00:53:06] There's obviously problems with this. I love this reply by Mark Erickson. It's sad that I think this is a great idea and also immediately came up with at least three reasons why this won't work. And
[00:53:16] But I think it's funny. This isn't exactly the JSX conversation, but this is where my feelings went to right away when I saw this.
[00:53:31] Yeah.
[00:53:34] Thank you.
[00:53:35] Yeah.
[00:53:39] Yes. I mean, there's lots of concerns here.
[00:53:46] Yeah.
[00:53:46] Thank you.
[00:53:49] Thank you.
[00:53:50] Thank you.
[00:53:51] *ding*
[00:53:51] Thank you.
[00:53:52] I'm just reading through all the comments. I'll give them a second here on screen so you can see them.
[00:53:58] There you go. That's one.
[00:54:01] Yeah.
[00:54:03] Thank you.
[00:54:10] So,
[00:54:12] So
[00:54:13] Yeah, I mean, OK, this is that's this is unfair, but this is where my head went to right away.
[00:54:19] But...
[00:54:20] It's more interesting and nuanced than this because scroll up a bit and you're like, oh,
[00:54:27] Nicole Sullivan,
[00:54:29] who if you guys aren't aware of, it's a product manager at Google.
[00:54:34] really thought leader, she's a thought leader here, especially in terms of -- look at what she's doing here. She's trying to figure out how we can bring mobile-type gestures into the web because mobile web just sucks. Everyone knows. It's like this awkward stepchild.
[00:54:50] And she came up with this whole kind of idea of how we could use kind of like CSS to guide
[00:54:57] Um,
[00:54:59] updates to the -- like gesture types updates to the DOM. There's this shared state area  and a way of interacting with it. And she figured that something like JSX would basically be
[00:55:10] Thank you.
[00:55:10] the bridge that she needs to accomplish this.
[00:55:14] Really interesting stuff. Check out the thread. But like, and then you see stuff like this.
[00:55:20] These are not people just going to going,
[00:55:23] you know,
[00:55:25] I want my framework in the browser.  And they're not people just like lamenting that they have to download React on their page or whatever.  These are influential people who are talking about this.
[00:55:39] And
[00:55:42] I mean, this is interesting.  It's a funny topic because personally –
[00:55:51] I have...
[00:55:53] I have some thoughts here and I need to kind of think about what the implications are and why a bit further on why these kind of justifications are happening here. But
[00:56:09] But there is a reason I like JSX.
[00:56:14] And that reason I like JSX, I fear,
[00:56:17] would completely evaporate
[00:56:20] if we added it to JavaScript.
[00:56:23] I don't know how many people have ever looked at the JSX spec.
[00:56:30] Facebook has this page.
[00:56:32] Oh, it's been updated.
[00:56:36] They updated it. That's crazy. Because it's not a pros I'm going to do.
[00:56:43] No.
[00:56:47] Because JSX came in and basically said, we have a syntax with no...
[00:56:54] Semantic.
[00:56:55] Like without having any kind of execution
[00:57:00] They changed it. Literally, the homepage, the first line was essentially, we have no opinion on how you use JSX. Just like, here's the syntax.
[00:57:14] And they talk about why they don't use template literals.
[00:57:17] But there is a reason.  This is interesting.  They completely updated this, which is...
[00:57:23] thing because a while ago
[00:57:27] Um,
[00:57:29] Let me find it. I think it was like my first article in DevTU. I was running on Medium before that, but let me scroll really far back to the beginning of...
[00:57:38] beginning of time here. No. My first article in Dev2 was me complaining about TypeScript. Never mind.
[00:57:48] Thank you.
[00:57:49] Thank you.
[00:57:51] JSX is not hyperscript. Here we are.
[00:57:55] Thank you.
[00:57:59] I had big discussions with people, but from the JSX specification here, which used to be different, the first line used to read JSX and XML like syntax extension to ECMAScript without any defined semantics.
[00:58:12] That
[00:58:13] is JSX. They're changing the messaging slightly. Maybe they're preparing for this potential change.
[00:58:18] Um,
[00:58:20] This funny tag is neither string nor hf, it's called jsex and syntax attention to JavaScript.
[00:58:26] It is not a runtime. It is not a language. It is not a virtual DOM. It is literally just
[00:58:33] a syntax.
[00:58:36] People conflate it with Hyperscript.
[00:58:38] Like, they-- and if you--
[00:58:43] Like, and if you don't know what I mean by hyperscript, hyperscript is, I mean,
[00:58:48] Yeah.
[00:58:50] uh...
[00:58:52] So, hyperscript is, come on, why can't I just find, like, really, where's the GitHub for hyperscript? Yeah, here we go. Hyperscript is basically this, which is a function, which takes three parameters or more, depends on how it handles children, but essentially, you can define what the tag is.
[00:59:10] you can define what the props are, and you can do children.  And React create element or whatever VDOM uses,
[00:59:20] they tend to use Hyperscript. But here's the thing, JSX does not need to compile the Hyperscript. In fact,
[00:59:27] Solid does not compile to Hyperscript.
[00:59:30] Inferno does not.
[00:59:32] compile the Hyperscript. What do those two libraries have in common?
[00:59:36] Well, from a pure rendering standpoint, they're actually quite different. One's a VDOM.
[00:59:41] that's super perform-- and one's-- sorry, one's VDOM, one's a reactive, fine-grained reactive system. So it's not the underlying technology, it's the same. What they have in common is that both those libraries are incredibly performant.
[00:59:54] And the reason they're performant is because
[00:59:57] they look at the JSX and do smart things and
[01:00:00] Don't compile the Hyperscript.
[01:00:01] Hyperscript is not very optimizable.
[01:00:06] Yeah, I don't -- Quick does some interesting stuff, but they might actually keep the view, actually, a hyperscript variant with a read on.
[01:00:17] They do break stuff apart more granularly. So some stuff like event handlers also have to be handled differently. But I don't really want to get into Solid's JSX compilation. It doesn't really matter here, the fact that I make it into a string that I clone and all that stuff.
[01:00:38] But like at a fundamentals level,
[01:00:42] The key thing to understand is
[01:00:45] here when talking about JSX compilation is that-- let's add something here. Let's add something  to the counter, like something--
[01:00:56] Equals.
[01:01:01] Something made up. Okay. D.D.
[01:01:05] See how I compile this into a getter?
[01:01:09] This create component almost looks like a hyperscript function, to be fair.  But if you even ignore all the DOM-specific stuff,  like Solid has a universal render that works on any platform,  like for mobile or 3D.
[01:01:21] terminal or whatever, like it has a custom renderer.  We don't have the DOM specific stuff.  But at a baseline for fine grained reactivity to work, you actually
[01:01:30] care about what's in the holes.
[01:01:34] Like what's in here?
[01:01:37] Watch. Ooh, something used to be-- we analyze the parts that are
[01:01:43] the dynamic parts.  And if you look at something like view,  view is,
[01:01:48] analyzes the dynamic parts. That's one of their secrets. And
[01:01:52] Essentially, when you start breaking templates into this dynamic static mentality, it's the  holes of the dynamic parts that matter. I was talking to Dom, you know, creator of Infernos,  and he was -- he saws all. He understands. Fine-grained reactivity and VDOM aren't the same. But for him, he's like, yeah, it's the same thing. Because he's like -- it's just where the memorization is happening and
[01:02:16] For me, like for him, a VDOM is just the holes.  He doesn't care about the static part.
[01:02:20] Like, and...
[01:02:22] That's an interesting mindset because when people think of VDOM, they look and they go hyperscript. It's that tree. But for him,
[01:02:29] It's what's not the static tree.
[01:02:35] We looked at a conversation a week ago on stream where Seb was talking about introspecting children should be deprecated.
[01:02:43] And React kind of treats it like that in their thinking because, you know,
[01:02:46] you know, it gets in the way of potential optimization. I mean, there are
[01:02:51] holes in JSX in a sense in terms of
[01:02:54] its ability to optimize.
[01:02:57] The reason you can do all this stuff, you know, and get to this level of optimization, as I said, I'm sure Vue would be doing it if they weren't relying on the templates. They have JSX and they can go like, it's kind of like second class compared to like their string templates. But essentially,
[01:03:13] It's inevitable to me.
[01:03:14] that you want to analyze the template beyond what Hyperscript does for any library that  cares about performance. And the reason I chose JSX is because it's incredibly portable, right?  Everyone -- if, like, people haven't seen this, you know, I love the fact that I can just be like,  H1, you know, whatever.
[01:03:36] Hello.  And just be like, let's--
[01:03:39] Stick this in the-- let's stick this in the button.  You know, like, who--
[01:03:44] I broke this because D doesn't exist, but you know what I mean? Like,
[01:03:48] There we go. I just put a div. I love this element of JSX that I just threw an H1 in the button because I can. But I mean, hell, I mean,
[01:04:02] Yeah, I don't want to get too crazy on this example, but
[01:04:05] My point is...
[01:04:09] it's because it doesn't have runtime,
[01:04:12] semantics that it's so powerful.
[01:04:14] It's like a pre-existing AST that you can analyze,
[01:04:18] that can do
[01:04:20] incredible things for you.
[01:04:23] And,
[01:04:25] Every tool supports it.
[01:04:27] And that's the difference.  Tag template literals can do a lot of the same things,  but they're expected to actually execute in the browser.  Once you make these actually expect to execute in the browser,  then...
[01:04:40] There's just certain things you can't do.
[01:04:42] So I want to see you both in these comments.
[01:04:52] Yeah, what I'm saying is that output is basically useless for us. That's me being selfish, but it's basically useless because I need to analyze the dynamic parts.
[01:05:03] which
[01:05:04] at the time it makes the tree is already too late.
[01:05:10] Solids hyperscript requires us to actually wrap things  in functions ourselves.
[01:05:16] Like...
[01:05:18] At the basis, the reason we have a JSX compilation  is because of those lazy getters.  That's the power.
[01:05:28] Yeah.
[01:05:29] Like even if solid has these abilities, the reason JSX is so special for us is because
[01:05:37] I could make our HTML tag template literals work like the JSX and not need all that stuff, but then it would never run in the browser.
[01:05:45] That's essentially what the conflict is.
[01:05:52] it seems like this, right?  But like I said, there's more complexity  when you have to consider things like reactivity.  And this is part of me coming from that zone.  I've never had good luck with framework agnostic solutions  before Astro.  I know that's like such a big...
[01:06:06] boost to those guys, but it's because Astro doesn't get in the way of like Solids domain, but web components and like just like every like
[01:06:15] Every like, oh, we support everything has never worked for Solid, which you'd be like, oh, maybe Solid is just doing things wrong.  But sometimes doing things wrong is the way to do things right.
[01:06:26] Like
[01:06:28] So like reactivity is,
[01:06:30] makes this
[01:06:32] especially fine grain makes this just not align.  And again, this maybe just me being kind of selfish here,
[01:06:38] I really like JSX for what it is. The second they added to the browser and actually has a runtime potential,
[01:06:45] it's going to cause a ton of confusion.  We won't be able to use it anymore.  Last thing I wanted to do initially  was write our own language, which again is a topic for today  and why I wanted to talk about this upfront.  JSX is a--
[01:07:00] is really powerful as it is because you can do whatever you want with it and all the tools support it.
[01:07:13] Yes. Maybe. We'll see. They changed the compilation on us in React 17, right? We'll see.
[01:07:26] I don't know, like Inferno did.
[01:07:27] This isn't like a fine-grained only thing.  You can get a lot of information by looking at it.
[01:07:34] The problem, you see the problem with Hyperscript is
[01:07:37] I mean, it's fine. This just generates objects, or it could be an object, but
[01:07:41] These are functions and look at the way they execute.  If you have a function and a function and a function,  does anyone know what the first function that gets called  in this blob is?  Like you all are looking at this with me right now,  actually I'll go back about.  What's the first function that gets called here?
[01:07:56] I mean, other than the require.  Obviously, the require is the first one that gets called.  What is the first function?  Yeah, what's the first function that gets called here?
[01:08:04] I believe the answer to that question
[01:08:07] And I could have the spacing wrong.
[01:08:10] But my guess, the answer to that question is this function.
[01:08:14] It's not this function up here. It's not the first div page. It's this function.
[01:08:18] Thank you.
[01:08:19] Your stuff basically executes inside out.
[01:08:23] and  he
[01:08:25] It's all piecewise.
[01:08:27] There's no way to go, I structurally know what the thing looks like until you actually build the whole thing up.
[01:08:33] That's why Solid uses a lot of lazy evaluation getters.  We actually reverse the flow, essentially.
[01:08:38] We actually build it,
[01:08:40] downwards as we need it.
[01:08:44] Yeah, like...
[01:08:46] Is it this one?
[01:08:48] I can't tell from the spacing here.  I could be wrong.  Maybe this is nested.
[01:08:53] But I think it's one of these children, essentially.
[01:08:59] Yeah.
[01:09:00] Right.
[01:09:01] So like, and I've seen some clever solutions where you actually like build the,
[01:09:08] use a hyperscript to build the information about the tree and then like do something afterwards with it. But like,
[01:09:14] Yeah, I mean, as I said, this is probably just me being selfish and there's some really powerful things that you can do with this. But it just means that, like, if people expect JSX to be executable in the browser, we're probably going to need to find a new language because...
[01:09:31] This will never work for us in a nice way.
[01:09:39] Okay, so...
[01:09:42] Yeah. I mean, I'd love to see a JSX too, and I'd love to see more work going in. JSX hasn't been touched for ages. I know some people hate it.
[01:09:50] For all those people who hate it, you guys should just go use Marco.  Marco has the best templating syntax anyone has ever invented.
[01:09:58] you know,
[01:09:59] Sorry, I'm just playing with you a bit, but the whole subject matter here is kind of
[01:10:07] is kind of a funny one, right?  And this is actually sort of the preface  that I wanted to have before we actually got into this discussion  and showing the stuff today, because
[01:10:22] I mean...
[01:10:24] It is important.
[01:10:26] to kind of understand, you know,
[01:10:30] how syntax affects us. Like,
[01:10:34] You saw the hyperscript. I don't know if you all loved it, but there are some people, I saw a funny comment on Twitter where someone's like, what's your favorite JavaScript framework and why is it Mithril?
[01:10:45] Thank you.
[01:10:46] And I forget someone was like, oh, you know, oh, you spelt solid.js wrong or something.  You know, the chatter on Twitter is...
[01:10:55] But, you know, someone was like, ugh, JSX. But as anyone who's used Mithril, it's like all hyperscript. Like, people have really strong opinions about this stuff. And then you talk to someone from Svelte crowd, they'll tell you, well, Svelte's just JavaScript.
[01:11:11] HTML and CSS.
[01:11:17] I don't even know if it's worth trying to pop their bubble.
[01:11:22] That's about as far from the truth as possible.
[01:11:27] -
[01:11:29] But I mean, that's the thing. People have familiarity, they see it.
[01:11:35] And
[01:11:36] Like that is essentially like it makes this thing like I've shown people Marco and they're just like, hell no.  But like from like, as I said, my whole thing is like from like a mechanical standpoint, Marco six's language.
[01:11:50] is the tercest
[01:11:52] most to purpose and like
[01:11:55] I can come up with a billion examples where it's like quantifiably the best.
[01:12:01] But
[01:12:03] you know, in terms of its capability and mechanics. But obviously,
[01:12:10] it's enough of a turnoff for people to look at that they'll never give it a second look.
[01:12:15] So,
[01:12:16] You know...
[01:12:20] It's a funny range because...
[01:12:22] When someone says, for example, that a templating language is HTML, I think to myself and I
[01:12:30] Well, I
[01:12:31] I mean,
[01:12:34] Knockout was I guess just HTML, it used attributes
[01:12:38] For data binding,
[01:12:39] Is using handlebars like Ember does or Svelte make something  more or less HTML?
[01:12:46] I don't know, right?  When you see that stupid, stupid meme with the guy, you know,  in the Svelte, like, let count equals zero,
[01:12:55] and it's missing the script tag.
[01:12:58] Like, is that more or less JavaScript or HTML?  I don't know.  The funny thing is--
[01:13:05] When I told someone that script tag missing bugged me, they're like, well, it's a script tag. That's where your JavaScript goes in. And people can get accustomed to that. But that whole file is JavaScript.
[01:13:16] Nothing in that.
[01:13:18] it doesn't emerge as HTML.  The whole stout file is...
[01:13:23] compiled to JavaScript.
[01:13:24] Like...
[01:13:26] And that JavaScript looks nothing like what you wrote.
[01:13:29] So,
[01:13:30] What is just JavaScript or HTML?  It's like what you feel.
[01:13:38] Right.
[01:13:39] Like...
[01:13:41] This is one of those areas that for me is very hard to pinpoint and probably why I haven't
[01:13:48] spent as much time focusing here because it feels like
[01:13:53] almost like a waste of time because for me, it just doesn't feel logical.
[01:13:58] Like, people...
[01:13:59] get this kind of
[01:14:01] like,
[01:14:03] feverish, almost like, yes, this is the way I feel because it feels nice to use or something. And there's that ergonomic part and I'm just like,
[01:14:10] Sure. Okay. Then that works for you. That's great. But it's like, there isn't,
[01:14:15] and empirical best
[01:14:18] in many cases, and where there is, that isn't the defining
[01:14:22] quality that actually makes it good.
[01:14:32] People are still talking about JSX in the background.  I love it.
[01:14:36] Thank you.
[01:14:40] Yes, yeah, and that's the thing. These are all just DSLs, right?
[01:14:45] Everybody has a control flow, whether it's VIF or handlebars each or...
[01:14:52] something.map or for as a tag.
[01:14:57] These are-- they're all incredibly similar.
[01:15:02] JSX, for example, what's the difference between JSX and HTML?
[01:15:06] Well, JSX is XML based instead of HTML based. So void elements are something that comes to mind. In JSX, everything has to be closed with a slash.
[01:15:17] um closed like essentially there's no void elements
[01:15:21] And that's an XML thing.
[01:15:26] Like,
[01:15:27] Yeah, yeah. Yeah, yeah, yeah. I was going to say, Knockout is another example. Alpine is very similar to Knockout where it was just literally the data bindings or attributes and you actually parse the actual HTML when you enter the DOM. Incredibly slow and not perform way to do things, but that is real HTML.
[01:15:46] Yeah.
[01:15:50] Right.
[01:15:51] Yes.
[01:15:52] Don't get in the way. And that's the thing here, right?
[01:15:56] The funniest thing is how do you best not get in the way?  Like it's interesting because some people go, if you if you have an opinion solution, do really good with your abstractions.
[01:16:06] then you give people a happy path.
[01:16:09] And
[01:16:11] then they can just go
[01:16:13] do what they want.
[01:16:15] Right? Like they can...
[01:16:19] No, so not do what they want.  They can just...
[01:16:21] So follow this path and not get in the weeds is a better way of putting it. Like, essentially, you've constrained them, you've limited their options, but, you know, through constraint, they're free, essentially, because they don't have to worry about a whole bunch of stuff. And that's a certain...
[01:16:37] perspective on how you can approach this language thing.
[01:16:42] The other
[01:16:44] kind of perspective I had was
[01:16:46] If I make the smallest, most base primitives,
[01:16:52] then maybe I just don't have to worry about this.  I don't need to get into this battle.  If people want to build stuff and do this stuff, good on them.
[01:17:04] Great.
[01:17:06] you know,
[01:17:07] If I make my stuff as explicit, clear,
[01:17:10] and simple, not easy, simple as possible, then they'll have all the tools they need to do whatever they want.
[01:17:27] The funniest thing about the syntax pieces, I don't think it comes from necessarily...
[01:17:33] real
[01:17:34] Like sometimes there are real needs for syntax.  We've seen with Quick and Marco, the syntax  has a very important role to play in terms  of optimization and performance.
[01:17:44] But, you know, ergonomics is something that matters to a lot of people.
[01:17:52] For me,
[01:17:54] the most ergonomic thing I can have is the thing that has
[01:17:59] It's not about what I'm typing.
[01:18:02] how clear it is, like how
[01:18:05] how it flows, what sense of power control it gives me.  But maybe I'm just a control freak.  You know, maybe that's my curse here.
[01:18:16] Yeah, and I mean, at an extreme, that's right. That's why, you know, JSX is even just an add-on in a sense.
[01:18:22] So,
[01:18:24] Yeah, let's get going.  This has been the longest This Week in JavaScript podcast.
[01:18:29] you know, essentially.  Let's just start talking syntax.  I already started the conversation,  but let's kind of get into the actual thing.  I have some great projects to show you today.  I, you know, and I think this will kind of,
[01:18:45] kind of, we can kind of talk about, um,
[01:18:49] Yeah.
[01:18:50] you know, the implications of these things, even when talking purely from a syntax standpoint.
[01:18:56] So...
[01:18:59] Bye.
[01:19:04] So,
[01:19:08] As everyone knows, I just built these primitives up and that was really my goal.  But early on in doing so...
[01:19:15] I came across, someone reached out to me and they were like,
[01:19:19] Hey Ryan.
[01:19:20] We built our full IDE off of Solid. And this was the first time that I'd seen something like this done with Solid. Later on, I would go on to joke that there was more compilers for syntax in Solid than there are component libraries. But...
[01:19:38] The first thing that I ever saw was this glue codes, which is an online ID that basically...
[01:19:45] lets you write, I mean, let's see if there's an example of the code here. It's basically HTML.
[01:19:52] with some like special attributes and stuff, and pre-built components to kind of build the stuff you need. And it actually compiles it to Solids JSX and Solids Primitives to work. But essentially, the developer experience is nothing like solid.
[01:20:06] They obscure this all the way to make it easier and
[01:20:10] you know, plug and playable and cut and paste and, you know, make this easy IDE experience. But this was the first thing that I saw and
[01:20:18] Yeah, I mean, this is a paid product built on top of Solid.  And they chose Solid because of Solid's performance.  But this was like the start of it for me because I was like,
[01:20:27] Wow.
[01:20:29] you know, I'm opinionated and I have all the things and ideas I want.  These guys just went completely out of left field.
[01:20:35] and saw huge gains by switching to solid to do whatever syntax they wanted.
[01:20:43] Thank you.
[01:20:44] Thank you.
[01:20:45] But after that...
[01:20:48] We kind of got into...
[01:20:53] Sorry, I'm done with these. Done with these. We got into...
[01:20:59] Thank you.
[01:21:01] you know, more of a discussion. People start comparing us to Svelte and, you know,
[01:21:06] Thank you.
[01:21:06] people just started kind of going off on like, oh, how could they design different syntaxes? And,
[01:21:18] Okay.
[01:21:18] Those people are the same people that created some of the libraries I'm going to show off today. But it was funny because it infiltrated every single channel in our Discord. Like, they'd be discussing it in an off topic, and then they'd be in tooling, and then they'd be in help. And every channel was just people discussing about this syntax. And I was just like,
[01:21:37] Man, we have other things going on. Can we keep it?  So I actually made a channel just for the discussion and didn't even stay in the channel.  Just kept on going everywhere. As I said, people are very passionate about this topic.
[01:21:49] So what did I do? Well, I wrote an article on the subject. And it's kind of funny, because if anyone knows me and my kind of position on this stuff, I actually wrote the article just so that people would like have a direction and classification and then they maybe just...
[01:22:05] we could focus the conversation because I was kind of sick of hearing about people arguing back and forth.  This was the Quest for Reactive Script article.  And...
[01:22:16] Thank you.
[01:22:17] I kind of go through the history and the different approaches to compiled, um, JavaScript.  And that's what we're going to look at today.  Cause, um,
[01:22:26] The one thing is regardless of the framework, like whether it's Svelte or Vue or whatever,
[01:22:32] there's only so much you can do with the JavaScript language in terms of reactivity as it is.  And similarly, there's only really so much you can do with compilers in my mind.  There's only a few base patterns that you can kind of fall into.  And they each have their tradeoffs.
[01:22:51] And essentially, I lined up in this article four different things. But for me, this all started with literally, I love this article. If you've never read this article, go read, find this article. I'm going to post this in the chat right now just because of how awesome this article is.
[01:23:06] Here you guys go.
[01:23:08] Seriously.
[01:23:10] This was written in 2010, way before, you know,
[01:23:15] Thank you.
[01:23:16] It's time. And he was joking that like in 30 years or 40 years, everyone would just take for granted that we had reactivity built into the language. And his whole thing was, it was something called the destiny operator, this idea that you could just have variables. And then when there was the destiny operator, it worked differently than a normal assignment in that it was a reactive expression that maintained over time. So no matter when A changed, B would be updated.
[01:23:45] And, you know,
[01:23:45] To this day, I feel like this is still...
[01:23:49] the hallmark for when people look at using reactivity as language in  JavaScript, they're like, Oh, can we make the destiny operator?
[01:23:56] Um,
[01:23:58] Yeah.
[01:23:58] And
[01:24:02] Yeah.
[01:24:03] There are some issues with this in that
[01:24:09] Thank you.
[01:24:10] And it's the issue that we find in actually an all-bringing reactive language into JavaScript.
[01:24:15] Yeah.
[01:24:17] Essentially, reactivity is this declarative thing. Essentially, you set this relationship and the behavior holds. It's like be...
[01:24:28] is is destined to be a plus one
[01:24:32] Like it never has to change, never has to be updated, never has to be reassigned.  And it's very declarative.  And...
[01:24:39] If you've noticed, the gap or the bridge between declarative
[01:24:43] And empirical code is always a messy one.
[01:24:47] And that's where all the challenges come in.  HTML is very declarative.  But then once you get into event handlers,
[01:24:55] or you know that's when you enter this imperative zone and things like rxjs try and like bridge the  gap right from the get-go
[01:25:02] But they get very verbose.  So like...
[01:25:05] Living and working through this is always actually kind of a bit of a challenge.
[01:25:12] And
[01:25:14] The first thing that people kind of come to is you look at Svelte, right? Because Svelte actually kind of brought into the language. And
[01:25:24] This is--
[01:25:25] I had this bookmarked the other week.  Let's talk about this tweet again.
[01:25:30] This was...
[01:25:32] This was, when was this tweeted? October 30th. This is literally...
[01:25:36] like three days or whatever after the hooks announcement and rich harris suddenly goes
[01:25:41] Wait a second. I don't need hooks. I just need a compiler.
[01:25:45] Thank you.
[01:25:46] If you look, this isn't valid Svelte code, anyone who knows Svelte, because it's
[01:25:51] this wouldn't update.
[01:25:54] this is sort of where the challenge is, because this looks like JavaScript, right?  But if you wrote all JavaScript to be reactive like this, like, how do you represent all
[01:26:04] things that
[01:26:06] What's the difference between something that's assigned and something that is--
[01:26:11] Um,
[01:26:13] like a computation.  Like sometimes--
[01:26:17] you might, like if you're familiar with Sol, you know what I mean.  If you have a signal, sometimes you'll initialize a signal,
[01:26:23] to
[01:26:24] a reactive value
[01:26:28] that's transformed, but you don't want it to react.  Like sometimes signals need to mutate themselves and computations need to be update based on tracking.  Sometimes you track, sometimes you don't track. And having a let here is insufficient to do this.
[01:26:41] Right.
[01:26:42] So there's basically...
[01:26:46] a need for a different type of operator here, right?  And if you use Svelte, you know what they did is they added a dollar sign.
[01:26:51] label on the front to denote this.
[01:26:58] It's a little bit more complicated than this because...
[01:27:03] What if your reactivity is in more than a single file?
[01:27:10] And
[01:27:12] You can see this.  And the funniest thing is the first comment, let me see here.  Am I in here, right?
[01:27:19] Where is it? Maybe I'm not going to find it now that I'm actually looking for it. Basically, when when Rich posted this, Evan, you almost immediately was like, was like, that's all great. But how do you do composition? That's like literally the first thing Evan did when he saw it. He was just like, how do you do composition with this?
[01:27:38] Thank you.
[01:27:39] Yeah, here we go.  That would make it technically Svelte script, which is kind of like the theme of our stream.  How do you handle effects and composition in this case?
[01:27:47] very first thing, Evan's on the ball here, right? Because
[01:27:53] The answer is Svelte actually never solved this in Svelte 3.  They added stores, but they actually never solved composition  from a compiler standpoint.
[01:28:00] Um,
[01:28:01] and  and
[01:28:02] that this is a good starting point for us in our journey to look at it but one thing that you will  notice is there's while someone could take salt and compile it to solid you'll see stuff today that
[01:28:15] is actually similar-ish to Svelte syntax.  Like someone could have easily just made Svelte a solid,  like no problem.  None of the people who made these libraries decide to do that.
[01:28:24] And you're like, well, why wouldn't you want that for interoperable?  It's because not a single person who had used solid was willing to give up,  give up, like they weren't willing to give up composition.
[01:28:32] Like for them, that was a non-starter.
[01:28:35] And it's interesting because Svelte made that decision, and it seems to work well for them. But like, this persisting composition makes this actually very difficult to do with just this kind of syntax, because when you use these identifiers,
[01:28:57] They're keywords, kind of like if statement in
[01:29:02] in JavaScript.
[01:29:04] or for loop.
[01:29:07] You as an end user
[01:29:09] can't write your own for loop.
[01:29:12] Right. Like you can write.
[01:29:15] your own for each, like, you know, like, like a map function, you can write your own map function, but you can't write your own for loop.
[01:29:21] Thank you.
[01:29:22] Right. So the language primitive,
[01:29:25] isn't extensible.
[01:29:28] And hooks by the very nature and reactive variables are extensible.  So this is a very...
[01:29:33] using a language primitive to define that's whether something is reactive
[01:29:41] like as like a key word like that, can have its limitations, right? And how do you make it work across files? Is it like a variable declaration? Then it's where the assignment happens locally that matters.
[01:29:54] Or is it a type? Is it the thing itself that's reactive?
[01:30:02] Thank you.
[01:30:02] Thank you.
[01:30:03] Okay.
[01:30:06] Thank you.
[01:30:09] So,
[01:30:12] There's been a few thoughts on how to actually approach this.
[01:30:15] Right, because...
[01:30:17] Thank you.
[01:30:20] Essentially, I mentioned the identifier thing here first.  And what was my example?
[01:30:25] Yeah, so...
[01:30:29] We're going to...
[01:30:31] Thank you.
[01:30:37] Yeah, I'm just using this example where we could decorate the variable itself to say that's reactive. We're going to see that today. That's one way of doing it.
[01:30:45] Thank you.
[01:30:48] because then we know this is how Svelte stores work.  It's this concept that,
[01:30:53] If we look at this as a compiler, we go, oh, this is a reactive value.  Now we don't have to call as a function.
[01:30:58] But what was always interesting to me about this approach is
[01:31:03] Is this saving you characters over calling the function?  I guess it saves you from having to remember to call the function.
[01:31:09] But essentially, if we mark it, now we know that it's reactive.
[01:31:16] I'll get to what Bu does in a minute. So this is the first solution you'll find, which I call identifiers.
[01:31:24] Yeah.
[01:31:25] The second solution is what Svelte does to a certain degree.  I mean, this signal could just be let,  but essentially the idea is this could be dollar sign.  My point is if you label it,
[01:31:38] This is felt right here.
[01:31:40] then you can basically make a keyword. So as I mentioned, it makes it hard to make it portable  because like how do you import something that's reactive? Because like do you know
[01:31:49] what this is.
[01:31:52] And the third approach was which view ref sugar uses is this idea that you mark the function kind of like make it a hook Marco does this too in a sense because they make their.
[01:32:04] hooks, tags, you know that
[01:32:07] Thank you.
[01:32:08] While it's not like, it can be named whatever you want, but because it has a certain syntax around it, you know that it's reactive.  For example, like...
[01:32:18] This is view Raf Sugar here.
[01:32:21] Because $ref is special.
[01:32:24] The compiler looks for that, and then it knows how to handle this.
[01:32:27] I'm not sure.
[01:32:28] But it leads to this interesting like
[01:32:32] boxing and unboxing approach.
[01:32:37] it
[01:32:38] I had some other ideas, and if we go through the stream, I'll talk about where my thinking is on this.  But I just wanted to kind of introduce this as sort of like kind of top-level approaches, right?  There's a lot we can do with a compiler. And the very first thing that I want to show you is something that's probably going to make a lot of React users really happy.
[01:33:03] Orin, member of our community, actually, this is probably our most used compiler trick.  But what I did here, and I was going to show off this demo, is I
[01:33:16] I took a new solid start client-only rendered template and
[01:33:23] installed, I just kind of went in here.
[01:33:26] and install this plugin called undestructure plugin.  Babel plugin undestructure.  OK.
[01:33:31] So let's actually just restart this because--
[01:33:34] Why not? We're in dev and let's open this in a new browser window. And of course, it opens it in the wrong browser window. Let me bring it over here.
[01:33:43] This is the solid start thing, but okay.  People haven't seen it.  So what, it's just a counter that counts, not a big deal.  But what this plugin does,  if we look at our counter component in here,
[01:33:57] is
[01:34:02] it lets the user destructure their props
[01:34:06] and basically reverses it
[01:34:08] into here.
[01:34:10] And,
[01:34:11] This is kind of cool. I think if I open up this inspector again, which is in the wrong window, keeps on doing this to me.
[01:34:19] what we'll see is just how it ends up doing it.  So this counter TSX,
[01:34:26] starts its life
[01:34:29] Thank you.
[01:34:30] I don't get to adjust the size of these. It's a little bit awkward. Starts its life,
[01:34:36] as this destructured thing.  But then after it runs through Babel,  it actually reverses
[01:34:41] It looks at these, changes the props,
[01:34:44] into props.class, props.children,
[01:34:47] and essentially re-embeds
[01:34:50] the stuff in here so Solid knows what to do with it.  And then Solid transforms it into its JSX.  And then we're done. So ta-da, now we have destructured props.
[01:34:59] And
[01:35:01] As I said, for everyone coming from React, it's probably a big boon.  I was talking to Tanner Lindsay a lot this week, and he's
[01:35:08] You could tell this was like the thing, one of the things that just bugged him. He loved
[01:35:12] the dynamic dependencies. He loved the performance. He loved the execution. He loved all the pieces, but like
[01:35:19] As I mentioned, sometimes this stuff is just so hard to get out of. It's like, why can't I destructure?
[01:35:24] Well, you can do this as a plugin with Babel, right?  But I mean, it's interesting, right?  Because how does this know what to destructure and undestructure?  Well, the plugin is actually looking at your TypeScript types.  So the reason this one actually works is because there is a component type.  So it looked at the TypeScript and goes, oh, this is a component and did it.  There is a function you can import if you don't use TypeScript to do it.  But this is the nice path, essentially.
[01:35:54] He looks at your TypeScript and he goes, OK, type component.
[01:35:57] node-a-t structure.  But now I'm not 100% sure.
[01:36:03] But I have a suspicion
[01:36:06] that I can break this pretty fast. Let's see.
[01:36:13] Because the whole way this works is it has to know...
[01:36:19] what you're intending to do.
[01:36:23] Hmm, I'm in the wrong...
[01:36:26] Let me see if...
[01:36:29] This thing not like hot reloading.
[01:36:32] Okay, second.  I want to see...
[01:36:37] Thank you.
[01:36:41] I'd be wrong, though. This would be really cool if I'm wrong.  Wouldn't that be awesome if I'm wrong? Let's see here.
[01:36:46] Thank you.
[01:36:48] Femme.
[01:36:50] There's some little, let's see what this compiles to.
[01:36:57] Thank you.
[01:36:58] Thank you.
[01:37:05] Thank you.
[01:37:06] Thank you.
[01:37:08] Yeah, no.
[01:37:14] Thank you.
[01:37:14] Yeah, precisely right.
[01:37:16] Yeah, and then it doesn't know.
[01:37:20] Yeah, I'm not wrong. I don't know. I suspect we had a weird...
[01:37:26] with hot reloading. I don't know why it's still actually working, though. That's the kind of funniest thing is why is this example still working?
[01:37:34] Click count, count.
[01:37:39] Oh, do you know why it's working?
[01:37:41] This doesn't do this.
[01:37:45] Probably or something like that. No, that's funny.
[01:37:50] This is interesting because this technically should evaluate children, which means that it's not under attract context, which means it doesn't work.  But...
[01:38:00] Thank you.
[01:38:00] For some reason, it's still working for me, which I'm probably going to have to figure out at some point.
[01:38:08] Bye.
[01:38:09] It sucks when you try to make a point.
[01:38:12] Well,
[01:38:15] Thank you.
[01:38:15] Yeah, am I sure this example should break? Well, probably, right? Because...
[01:38:21] The count
[01:38:23] is a lazy getter.
[01:38:25] this expression, the children get the lazy getter here,
[01:38:30] And then...
[01:38:31] uh
[01:38:32] Oh.
[01:38:34] I wonder,
[01:38:35] It's because this is getting individually wrapped.
[01:38:38] That's funny. Like, does this break it?
[01:38:43] Yeah, that breaks it. It's because of the fragment. It's like nested reactivity, so it still works.
[01:38:51] It's basically because once it became a fragment, it's basically nested reactivity. And for that reason,
[01:39:02] So,
[01:39:05] Like it has its own reactive context.
[01:39:09] Now that works, right.  So essentially, yeah, smart, solid granularity basically allowed it to still get wrapped in it.  Like this children wasn't resolving it.
[01:39:19] He was individually wrapped.  But essentially...
[01:39:25] This only works because it's aware of what a component is, using TypeScript or using some kind of annotation, essentially.
[01:39:32] Other places that you access variables outside are still not going to work for you and you're going to need to do some other stuff.  So there is a question about like.
[01:39:42] If you started using things like this,
[01:39:45] you still have to be aware of the rules.  Otherwise you might like accidentally do something like,
[01:39:50] Oh, well, if...
[01:39:54] Thank you.
[01:39:54] children bigger than...
[01:39:57] five
[01:40:00] return
[01:40:03] Thank you.
[01:40:04] Yo.
[01:40:07] you know
[01:40:09] Okay, right?  Like, this is not going to work.  Because, like...
[01:40:18] essentially, we're not actually changing the way solid works.
[01:40:24] executes the function once, we're just hiding--  we're basically just reversing the props transformation.  So as I said, I think this is super powerful.  I think people will like it.  I bet you if this was the default for Solid,
[01:40:36] we would make a bunch of people super happy and they'd just be like, yeah,
[01:40:42] maybe even forget React maybe if we just did this. But I'm hesitant on these kind of things because
[01:40:49] it causes...
[01:40:50] a gap because it hides what's actually happening.
[01:40:55] So you think things like this would work and they wouldn't.
[01:41:00] Thank you.
[01:41:01] Thank you.
[01:41:02] So, yeah, this is where part of the tension is here when you're kind of coming at this from a design standpoint in terms of what goes in.  I think this is cool. And I think if you know what you're doing, this is incredibly powerful.  A lot of the tools in Vue are like that, where they have shortcuts and things that make it much easier for people who know what they're doing.  Um...
[01:41:21] I do think that sometimes complicates things in Vue,  because you're like, oh, there's like six ways I can do this.
[01:41:26] I know what I'm doing, so I'll do it this way. But for people coming in, they're just like, okay,
[01:41:30] Is it that or that or that or that?
[01:41:34] So, I think there's a balance to be made here, but this is definitely a really cool plugin. It's probably the first and most important thing that we've done for syntax and compilation.
[01:41:43] Thank you.
[01:41:45] Right, exactly. This will catch like 90% of the case, except when they go to do something else,
[01:41:51] because they didn't learn how solid works, it will not make any sense to them.  They'll just be like, what is going on?
[01:42:00] Like this is, this is one of those ones where like, it makes it really easy to just pick  up solid and then just be, but then like.
[01:42:09] when you try and go, okay, well, if everything executes once, why does this destructure props work here and not here?
[01:42:15] Like it makes things less explainable.
[01:42:18] But,
[01:42:20] As I said,
[01:42:21] I bet you a number of these people watching this video in this chat are just like,
[01:42:26] yeah why am i not using this especially if you came in here and you're like big fan of react you're  probably just like
[01:42:31] There we did. We just solved it.  But
[01:42:35] Like, how do you explain
[01:42:37] If this is the default behavior, how do you explain this to someone?  Why this works and other stuff doesn't work?
[01:42:43] So far, solid is very simple.  You just go, the JSX transforms, nothing else transforms.  Now we're starting to transform your code.  If we transform your code,
[01:42:52] why don't we just transform all of your code?
[01:42:59] Exactly. That's what the thinking here is. But I want to showcase this one off because this is probably...
[01:43:05] When people come to Seoul, this is probably their number one complaint.
[01:43:08] There is an easy solution for it.
[01:43:11] But...
[01:43:13] There's a reason why I haven't built this into the DOM expressions plugin. Here's the other challenge. I think this is good for people to put in their app code. If you write
[01:43:26] You write your libraries this way?
[01:43:29] And you have to pre-compile them.
[01:43:34] Or...
[01:43:36] Thank you.
[01:43:37] Sorry, you have to precompile them?
[01:43:40] for everyone who uses them, so it needs to actually use your plugin.
[01:43:48] Like if this was your component library and you use this plugin,
[01:43:53] and
[01:43:56] you want it to be SSR safe. Well, SSR, you need different outputs.  Like there might be a hydratable SSR output and non-hydratable.
[01:44:05] There might be a
[01:44:07] Yeah, like on the server, there's a client hydratable version and the client render version. Like there's different compiled outputs that are built for your specific app. There's a reason that Svelte ships source and Solid ships source generally. But if you make it source, then your end users need to include the plugins, which kind of puts this burden on everyone. So if we, if we
[01:44:26] This is a good thing to do for your apps, but it's not good for shared libraries, essentially, unless we made it official, but then it's a tax on everyone, right?  Unless it became part of the actual plugin.  So I think this is something to keep in mind for all of these is...
[01:44:38] There's a time and place for this kind of stuff.  But as I said, if this is your app that you're making,
[01:44:45] go for it, right? Because no one else is depending on that. So yeah, but this is a great thing.
[01:44:54] Yeah, but then you have to compile ahead into...  There's some issues in compiling ahead.  First of all, there's probably like five outputs.  Secondly, there's...
[01:45:03] like, which people, like, which have to be selected from. Secondly, it gets tied to versions a lot worse. Like, one of the coolest things about just shipping the source is that, like, it'll get the, as the people upgrade their apps, they'll get the latest compiled output and they'll get the bug fixes, they'll get the improvements.
[01:45:22] So I think this is just generally...
[01:45:28] beneficial to try and not compile ahead if possible.
[01:45:34] I wanted to show this one off first because I think this is just like the primary starting point for people coming in and thinking about...
[01:45:43] Compilation for syntax and solid. Yes, we can.
[01:45:46] Destructure props.
[01:45:48] if that is very important to you.  And if you use TypeScript, it's just like,  it's just automatic and it just works.  So pretty cool stuff.
[01:45:59] Thank you.
[01:46:00] Huh, compile-ahead only the plugin. There you go. There's your answer. Compile-ahead only the plugin. That's true. It's separate and that's one of the benefits of making it separate, actually.
[01:46:11] Thank you.
[01:46:11] Thank you.
[01:46:12] If it was part of the core library, I mean, I guess then it would be fine because everyone  would be installing it anyway. So, yeah, there you go. There's your answer.
[01:46:23] In any case,
[01:46:26] I want to showcase that one off because I feel like that's probably the most...
[01:46:31] you know, straightforward thing. But there's more we can do with this stuff.
[01:46:39] And, you know,
[01:46:40] Yeah, I wanted to kind of show off a few of those libraries.
[01:46:44] So I made a couple of examples in code sandbox.
[01:46:49] kind of look at those. We've got solid labels and solid reactive bars. And I'm going to pull up their repos here in a minute to kind of look at them. But
[01:47:00] Thank you.
[01:47:01] I'm going to start with Solid Reactive Arts. This is also by Oren, who's in our chat here tonight.  And he was showing off...
[01:47:10] I'm sorry, we were just showing off this undestructured plugin.  This one is what I was talking about in the article as the -- putting the identifier approach.  And it's kind of a cool example because this example includes destructuring.
[01:47:29] All right.
[01:47:30] And essentially what it does is it uses this dollar sign.
[01:47:34] as a means to identify variables that should be reactive.
[01:47:38] And then once you use them, it knows.  So in this example, we have a counter container,  which defines some state count.  It's kind of, you know...
[01:47:47] felt like in a sense and then double count and he's got this cool new syntax which lets you set  like uh
[01:47:55] derivation and a setter.
[01:47:59] transformation on both sides. Really good for two-way binding.
[01:48:05] And then we have an increment function, which has an expression, which updates these.
[01:48:11] And so this is like an event handler.  And then he spreads them into the counter, which he then
[01:48:18] destructures
[01:48:20] and then shows them both.
[01:48:23] And this example just updates like this.  So it's kind of an interesting authoring experience in that
[01:48:31] basically...
[01:48:33] Thank you.
[01:48:34] If you remove the dollar sign,
[01:48:37] I mean, it's gonna take me a lot easier  if I just changed all the things.
[01:48:41] essentially, things stop being reactive. Essentially, this is a way for the compiler to know what it transforms to. And let's
[01:48:49] I'm actually kind of interesting what it does transform to.  See if we can pull this up here in code sandbox,  because it's kind of interesting to see this.
[01:49:00] Thank you.
[01:49:00] Thank you.
[01:49:03] Interesting.
[01:49:07] Okay, cool, cool, cool. So let me see if I can put this code side by side with the code that it's...
[01:49:16] Hopefully people can see this.
[01:49:19] Essentially,
[01:49:22] This let gets turned into a createSignal call with the value.
[01:49:27] and then double count.
[01:49:28] Thank you.
[01:49:30] almost stays the same
[01:49:32] Um...
[01:49:35] with this array syntax.  But you notice how to access and count, yeah, 1 and 0.  Because this is the getter and this is the setter.
[01:49:44] So basically, because your dollar sign is basically the getter and setter tuple from CreateSignal,
[01:49:51] everywhere that it's accessed, the compiler is smart enough to go in and go, OK, double count, get the setter.
[01:49:57] getter plus two. And then when it's passing everything around,  it passes around both the getter and the setter.
[01:50:03] That's the whole secret here.  That's why there's no transformation here.  And similarly...
[01:50:08] When you destructure, you can destructure because these are passing the getter and the setter around.
[01:50:13] So basically, this whole syntax, all it's doing is hiding the getter and setter and
[01:50:18] essentially,
[01:50:19] Everywhere you use it, it goes, is this a read?
[01:50:23] call a function from zero, or is this a write?
[01:50:26] Um,
[01:50:28] essentially grab the setter from one.
[01:50:33] Oh, this, the zero here, this is, I don't know why it does this, but I've seen this a lot on like CodeSandbox and like...
[01:50:43] like webpack compilations.  Maybe someone smart in the chat,  i.e. someone from the Marco team, maybe,  knows why it does this.  But yeah.
[01:50:54] I've seen this a lot because the comma syntax just means it returns the second thing. But why does it bother doing the zero? I don't know.
[01:51:07] through just answering this question.
[01:51:17] Yeah, let's open the React of ours repo here.
[01:51:23] Thank you.
[01:51:24] Yeah.
[01:51:27] Yeah, showing some composition.
[01:51:31] What's Git double in this example? Oh, I see. It's like a custom hook.
[01:51:37] So
[01:51:42] Thank you.
[01:51:46] I see. So yeah, it's composable. Basically, the compiler knows how to handle this dollar sign. So as long as you make sure that
[01:51:55] you define your variables, it's like enter new scopes with dollar signs, reactivity is preserved, essentially.  So that's probably the biggest benefit of this approach is that because it just passes the whole thing along,
[01:52:06] as long as you use the dollar signs, you know that reactivity is going to get preserved around locations.  This is like the opposite problem.  On the Svelte side, it's almost impossible to preserve reactivity.  This makes preserving reactivity very easy.
[01:52:20] Thank you.
[01:52:21] and do and spread and yeah.
[01:52:26] I'm gathering this at the example you were talking about, Orin.
[01:52:37] Thank you.
[01:52:48] Thank you.
[01:52:51] Yeah, so yeah, this, let's go back to here. Yeah. So you can kind of see how, how this, this approach is very portable and actually solves a lot of the problems. The, the catches are
[01:53:07] Everywhere.
[01:53:08] you have to do the dollar sign thing,  which isn't that big of a cost to be fair.
[01:53:14] Other considerations, obviously, is
[01:53:17] you're always passing the getter and setters around, generally speaking. I think there's some ways to avoid that. But yeah, like everything is just implicit two way binding, unless there's a syntax for that. But like the default is basically implicit two way binding everywhere. So you just pass the stuff around. Some people like that experience. And this is one way of accomplishing it. Right. So
[01:53:41] But...
[01:53:42] As I said, local scope, it's nice.  I think I'd be interested to know if there's ways to control, like, passing the components, if you can pass only the read or write privileges.  To be fair, this probably defines that to a certain degree.  I think if I remember correctly, and I don't know if this is still the case, if I make this, like, double dollar sign count...
[01:54:06] No, okay. That's not it.
[01:54:12] There's a way to make stuff read only if I remember.
[01:54:17] But yeah, what's cool about this is you only have to  decorate everything coming into the variable scope.
[01:54:22] Yeah.
[01:54:23] So Solves Composition,
[01:54:27] And transport.  So, yeah, this is a cool one.  Solid reactivars.  I'm going to...
[01:54:33] drop this one in the chat for anyone who cares. I got to remember to make notes about this later.
[01:54:46] Thank you.
[01:54:51] Thank you.
[01:54:53] Here you go. Yeah. But yeah, orange is here.
[01:54:58] Thank you.
[01:54:59] Yeah, exactly. Because the way it's written, it always handles destructuring because it's, it's  literally just passing the whole getter setter pair. There's no like,
[01:55:09] reactive access involved.
[01:55:17] Thank you.
[01:55:26] Right. Yeah. This is the comment here, right? Cool. Let's look at another take. This is the first approach I was talking about using identifiers, essentially.
[01:55:37] Um,
[01:55:39] My example had a dollar sign at the end, but...
[01:55:42] Essentially, this is often the...
[01:55:47] the first thing. And what I wrote here is the crux is the syntax doesn't simplify the mental model. You still need to be aware exactly what is being passed around and what you're receiving. You're saving typing some characters. So
[01:56:00] Yeah, I mean, this probably does the least on top of what Solid does already.
[01:56:07] But essentially does let you destructure with a special syntax to indicate reactivity. Okay. So let's look at another one of these examples. Let's look at solid labels next. And what solid labels is, this is from another member of our community, Alexis, who makes a lot of examples.
[01:56:29] Solid labels is kind of interesting to me because he it's like he couldn't decide which paradigm was the best. So he made them all. You can use annotations, like comments to say if something's a signal. You can use
[01:56:47] Labels, if you want.
[01:56:50] Or you can basically use View Ref Sugar.  It supports all of these modes.
[01:56:56] Um,
[01:56:57] So when...
[01:56:58] I was-- yeah, that's her wrong example again.
[01:57:03] So,
[01:57:04] What do we have to do for solid labels here?  I think if we just get rid of this create signal,
[01:57:09] and just go-- there's a few different versions.  But if we go dollar sign signal, this is like the Rapshuger version.
[01:57:16] into that.  And we just make this account.  So I haven't actually changed this example over yet,  because I wasn't sure which one I wanted to show off.  But I think we just do this.
[01:57:28] And
[01:57:29] It still works, yeah.  So this is basically the solid label experience, right?  And if we wanted to make an effect,
[01:57:35] Thank you.
[01:57:36] Yeah.
[01:57:37] Let me look here. Is it always a label for the effect?
[01:57:45] How do we do it? He has docs for each one, which is awesome. Memo.
[01:57:51] Dollar sign. Here you go.
[01:57:53] You just wrap it in a dollar sign.
[01:57:55] for the function version.  So you just go--
[01:57:59] Oh, wrong one again. Sorry, I keep on going there.
[01:58:05] Okay.
[01:58:06] If we want to make an effect, we can just go console log.
[01:58:11] Count.
[01:58:14] Bye.
[01:58:14] And if we open up our console, hopefully, we clear it.  We click.  We'll see our console.  Interesting about this approach is the variables are left untouched.  So you don't have to do anything on your templates.
[01:58:27] Um,
[01:58:29] And it kind of knows what to do.
[01:58:35] Yeah.
[01:58:39] Better.  Make everyone feel better.  Let's make it a let.  It doesn't matter for the plugin, probably.
[01:58:49] It is funny because it's directly mutable. Let's take a look here for a second and see what we're actually looking at here from a compilation standpoint.
[01:59:07] I haven't looked too deeply at any of these.  So this is kind of cool for me  because I see people do this work.
[01:59:14] So, yeah, this splits us into our count set count.
[01:59:19] Yeah.
[01:59:20] unsurprisingly, and then the effect just wraps the expression.
[01:59:25] What we should try and do is maybe we should be making that example
[01:59:30] I don't know if this in itself handles destructuring.  I do not believe--
[01:59:34] It does, but it believes that there's a syntax like refsugar for the double dollar sign to get stuff back. So,
[01:59:45] Yeah, these examples are great and documentation great because you can see the compiled output for each thing you write, right? Whether it's a label.
[01:59:54] or, you know,
[01:59:56] these functions, you can actually see the compiled output.
[02:00:04] Yeah, this is actually a really good point to bring up. Sorry, I'm just reading this from the chat. All these plugins work with TypeScript.
[02:00:12] like quite nicely because,  um,
[02:00:16] Yeah, it's interesting because...
[02:00:23] Like if you see the example with the dollar sign
[02:00:29] counts or whatever we saw in reactive are like sure it's named a funny way but as long as you kind of
[02:00:35] define your types with the dollar sign.  Like it'll work like as you'd expect.
[02:00:41] -
[02:00:42] He's got functions for everything.  On, create selector, deferred.
[02:00:48] resource, reaction, cleanup, mount, error, observable from,  he's basically ported the whole API here.
[02:00:55] Destructure. Here we go. This is what I was looking for.
[02:00:57] Interesting. So there's a helper and then it destructures stuff. So this is kind of like views to refs I'm gathering.
[02:01:04] And it supports rest parameters. That's cool.
[02:01:09] it actually converts this destructuring into like,
[02:01:13] all these separate expressions
[02:01:17] Oh, interesting. And then it uses split props to get the rest parameters.
[02:01:21] Very clever.
[02:01:25] Yeah, in terms of the referencing, yeah.
[02:01:29] Yeah.
[02:01:30] Okay.
[02:01:31] Merge.
[02:01:33] component.
[02:01:35] Oh, that's how you do property scripturing. You use dollar sign component.
[02:01:40] you do a wrapper and then it supports property structuring. This is cool. Like the
[02:01:44] Thank you.
[02:01:46] Every...
[02:01:48] index, the full API looks like it's actually here, lazy.
[02:01:53] I guess the benefit of doing these dollar sign operators is you don't need to import anything.
[02:01:59] If you noticed, you can basically do complete development  without actually importing anything,  which is kind of interesting here, refs and derefs.
[02:02:08] Thank you.
[02:02:11] Right. So this is how you can go from a signal back to count. And then you get your count. And then if you want to get back to the normal solid tuple, you can use refsignal.
[02:02:29] Rough Memo.
[02:02:31] Interesting.
[02:02:36] You can always pull the value out.
[02:02:40] Well, a lot of thought has got into this.  It's like a whole language on top of language here.
[02:02:47] Thank you.
[02:02:49] Very cool.
[02:02:57] Thank you.
[02:02:58] Solid store.
[02:03:00] *cough*
[02:03:00] Yeah, so I see the motivation here. Basically, all these dollar sign things, by having defined symbols for them, you get to skip importing, right?
[02:03:12] Yeah.
[02:03:12] um basically this is like the trick so now you don't have any import statements
[02:03:18] Control flows.
[02:03:20] Hm.
[02:03:22] Very, very interesting.  I love that the docs have like so many examples here.
[02:03:28] And you can see the compilation, which all makes sense.
[02:03:33] I think it would take a little bit for me to get used to kind of the whole ref-d-ref passing stuff around, but it is actually very, very cool.  This is basically looks a lot like view ref sugar.  So if that's your kind of thing, we've got a plugin for it.
[02:03:51] Okay. And I actually, I can kind of see why he's, he's, he's going this way. Cause I'm,
[02:04:00] If you know Alexis' work, he's also created Solid Styled.
[02:04:05] which is like--
[02:04:07] Thank you.
[02:04:09] a CSS thing where you can just,
[02:04:12] put in a CSS tag template literal,
[02:04:15] and it just styles the component that it's in.  This is kind of a really cool solution, right?
[02:04:23] Thank you.
[02:04:26] How is globalized intelligence? Tree shaking is my guess.
[02:04:33] Right. The big thing here is
[02:04:36] we only bundle what's used, right?  I imagine using the compiler here, you can maintain that benefit of only bundling what's used.
[02:04:47] Thank you.
[02:04:49] - Yeah, and there are other plugins for auto imports.  And to be fair, Sol's control flows are auto imported.
[02:04:54] Um,
[02:04:56] But again, when you have TypeScript,  that doesn't really help.  That's the one thing I'm not clear about.  If you're doing all this auto importing stuff,  is TypeScript gonna be like, what the hell is this stuff?
[02:05:06] I guess you have a global focus
[02:05:08] You have a global TypeScript file, right?  So you define all those globally as like global types,  and then you don't have that problem.  So there you go.  Global types without global imports.  So it's an interesting future.
[02:05:23] But yeah, I wanted to show this off  because this is kind of cool, right?  It's a CS and JS approach to my knowledge.  But, you know, it looks like...
[02:05:33] Thank you.
[02:05:35] Yeah, you literally just use this somewhere in your template.
[02:05:40] Global Ford scope.
[02:05:46] use-- there's a directive.
[02:05:52] Interesting.  It doesn't work like solid's directives though,  because we can't put them on dynamic.  That's interesting.  Style JSX.
[02:05:59] supports like styled JSX too.
[02:06:03] to put them in template.  That's cool.
[02:06:06] Huh, it's a limitation.  Scoping CSS can only be called directly on components.  This is so that the Babel plugin can find and transfer the JS  to the component global CSS can be used inside functions.  This is actually really cool.  But the reason I was showing this off as a CSS compiled solution is
[02:06:19] This is all part of some grand vision that Alexis has here, which is this.
[02:06:26] Solid SFC.
[02:06:31] Essentially, I've always liked putting multiple components in the same file, but what if you
[02:06:41] Import some stuff.
[02:06:45] do it all top level and your file is the component. So essentially you have this, okay, so this is the trick.
[02:06:53] Oh, but it's only required for files that don't end in with a special extension, .solid.tsx or whatever.  But essentially, you just don't write the function.  You just...
[02:07:03] You default...
[02:07:06] export default, the return value essentially.  So your template is the default export  and then everything else is considered instance-based.  It's interesting 'cause I don't know how you hoist anything  here, but maybe you don't need to essentially.  Everything is like part of the component.
[02:07:20] Thank you.
[02:07:21] Mm.
[02:07:22] Suspense and fragments.
[02:07:26] and slots.
[02:07:29] This is interesting. I guess because you don't have props,
[02:07:33] In the same way, I wonder how we handle props here. Where are our props coming from?
[02:07:43] Thank you.
[02:07:45] Props.  Dollar sign props.  So, we have a magical props.
[02:07:52] props getter
[02:07:55] that you assign and then you can use it.
[02:07:59] What's our dollar sign view do?
[02:08:08] Oh, it's for TypeScript. See, this is cool. All this stuff is very TypeScript aware. I think it's interesting because I know a lot of the challenges over the last few years for template stuff like Svelte and Vue is going to get TypeScript support. And my understanding is it's gotten pretty good. But, you know, like, there's still a lot involved. I guess the way this approach works and banking on JSX, like you kind of still get all the benefits of TypeScript using this approach.
[02:08:33] But you start seeing all the pieces come together.  'Cause I showed you the CSS solution.  I showed you the solid labels and I showed you this SFC.  But this SFC, as you can see,  is mostly just using solid the way it is.  So I think,
[02:08:47] Alexis made a starter.  Maybe we should just download this  and actually play with it to actually see the whole  deal because...
[02:08:56] Thank you.
[02:08:57] Yeah, I kind of want to see what the starter is.  It's called SolidSFC Styled Labels Starter.  So he basically built all his plugins into a single starter.  And I don't know.  I haven't actually tried this, see if it's out of date.  But it uses SolidSFC, SolidStyled.
[02:09:14] and solid labels all in a single thing.
[02:09:17] And it's built in Veed.  So I should be able to just deget this.
[02:09:22] and we should be good to go.  So maybe we should give that a shot,  'cause I'm kind of curious what this looks like  to see like a full experience kind of built along with this.  Okay, I don't know, maybe.
[02:09:38] Let's make a new window here.
[02:09:40] Let's go examples.
[02:09:46] Thank you.
[02:09:47] Oh, what is it?  Never remember.  This particular--
[02:09:54] Thank you.
[02:09:55] Um,
[02:09:58] Just...
[02:09:59] This.
[02:10:03] Thank you.
[02:10:04] Thank you.
[02:10:05] Thank you.
[02:10:06] Oh, right. Make your, what do you call it? SolidSFC.
[02:10:15] Thank you.
[02:10:16] Thank you.
[02:10:17] Yeah.
[02:10:20] Yes. All right.
[02:10:22] And then let's open this in a new window.
[02:10:27] I'm kind of curious because it looks like he's basically built a whole experience here on top of solid.
[02:10:37] Um,
[02:10:38] That kind of does the whole deal.  So development...
[02:10:42] examples, solid S, let's do this.
[02:10:46] This is a VeeP project, it looks like. I'm just going to PMP.
[02:10:55] Okay. And essentially, you know, so it's got that whole index HTML. Let's blow this up so we can all see this a little better.
[02:11:05] Thank you.
[02:11:06] All right, and a little bit bigger.  Beautiful.  And then source...
[02:11:10] And in our source folder, we have what?
[02:11:13] Thank you.
[02:11:14] Style registry, I guess this is, is this one SSR friendly? I don't even know what's going on here. No, no, this is,
[02:11:21] This looks like it's just a client template.  Yeah, that's good.  So we have index.
[02:11:28] for our app, our app.
[02:11:30] You set some global styles with using the CSS.
[02:11:34] import some stuff.
[02:11:36] Yeah.
[02:11:37] Okay.
[02:11:37] Thank you.
[02:11:38] and then returns our view.  And then our view has a counter in it.  And our counter imports some stuff.  You write some code, set some CSS, and export some view.  It's interesting.  It's unreal.  I don't know.
[02:11:57] But if you look at the stuff it's importing,  it's just the other components and the CSS tag,  like all the solid specific stuff,  the control flow, I don't think,  what do we got here, message?
[02:12:09] Props.
[02:12:11] some TypeScript in here too.  It's kind of cool.  I don't know if I'm just used to just seeing everything  top level like this, but--
[02:12:21] Thank you.
[02:12:22] It kind of looks like that just works. Let's give it a run, eh?
[02:12:29] Okay.
[02:12:30] Okay, let's do this.
[02:12:35] Thank you.
[02:12:36] Wow.
[02:12:39] Thank you.
[02:12:41] Thank you.
[02:12:42] And we have an incrementing and decrementing counter. Unsurprising. And I guess the message  is that count five that's in the middle.
[02:12:50] Let's look at that code again just to see the message component is doing. Yeah, it's just span with that.
[02:12:57] Yeah, I don't know. I don't know what I want to do with this, to be fair. I just wanted to see it because...
[02:13:03] It is...
[02:13:05] Thank you.
[02:13:06] Does the message show...
[02:13:08] Yeah, like you're not even thinking about destructuring in this case because like...
[02:13:16] Bye.
[02:13:17] Yeah, but I think there's a helper for it. I wouldn't I don't think I can just go like message.  I think I'll just break everything if I do this. I just like messing with stuff.
[02:13:27] Pretty sure I just broke everything.
[02:13:31] Yeah, of course I broke everything. Okay. But just --
[02:13:36] Thank you.
[02:13:40] Okay. It'll be fun playing with this stuff.
[02:13:47] Yeah, that's what we really need, isn't it?
[02:13:54] Well, that's the whole thing, right?  Like, yeah.
[02:13:59] The possibilities are infinite. It's really cool that TypeScript is just working for these things. Like, I'm always afraid of the tooling capabilities when you go this direction. But if you look at what these guys have been doing, it's basically valid JavaScript, right? Like,
[02:14:17] There's nothing invalid about what you did here.  So this is kind of like an interesting half and half place  where you're actually, even though it's not like semantically,  like functions calling and that everything here  is valid JavaScript.  So like if I like go do some weird stuff and then I go,
[02:14:36] format document, like prettier -- that's on me, I did something weird. But prettier knows how to handle this. TypeScript knows how to handle this. Like, essentially,
[02:14:46] These whole experiences don't require a whole new tool chain, and they still just work with full TypeScript support. And again, I...
[02:14:58] Yeah, it's interesting because I mean, where's the counter with the state?
[02:15:06] Yeah, I don't know. Like, this is basically view ref sugar, essentially. That's what's going on here.
[02:15:14] But as I said, I think it's all labels support stuff.  Like we haven't done this one yet.  I think you can do this.  I think you can -- the cool thing with solid labels is I think you can mix and match.
[02:15:27] Thank you.
[02:15:27] the approaches, I think.
[02:15:30] Thank you.
[02:15:33] Yeah. Okay. So that's an interesting one with the label approach. We should actually go look at solid labels and see how does the label approach work. Because I didn't actually look at that.
[02:15:47] - Yeah, okay, so labels approach does probably have a little bit of
[02:15:53] TypeScript fun to it.
[02:15:56] Thank you.
[02:15:56] because you basically probably have to tell it
[02:16:00] to shut up, essentially.
[02:16:04] I wonder if this still works though, right?
[02:16:06] Because...
[02:16:08] Thank you.
[02:16:09] How do you do memo with the label approach?
[02:16:13] Thank you.
[02:16:14] Thank you.
[02:16:15] - Memo, yeah.
[02:16:17] Thank you.
[02:16:19] - Curious memo message.
[02:16:22] For people who really hate parentheses.
[02:16:26] Right? This is for you.
[02:16:30] Thank you.
[02:16:31] Does it still work?
[02:16:33] Did I break everything?
[02:16:35] That still works. Okay. Yeah. So I don't know if there's more tricks we have to do to make labels happy with TypeScript, but you know, if you really hate parentheses,
[02:16:44] you know, this could be for you.
[02:16:46] Thank you.
[02:16:46] Thank you.
[02:16:48] Thank you.
[02:16:51] Maybe mix it up.
[02:16:54] Take your signals like this.
[02:16:57] Thank you.
[02:16:58] effects like this. Let's just make effect.
[02:17:03] Console.log message. There we go. Get something in the console.
[02:17:13] Thank you.
[02:17:15] Did I do that wrong?
[02:17:21] Thank you.
[02:17:22] probably too.
[02:17:25] Thank you.
[02:17:27] Hmm.
[02:17:28] Thank you.
[02:17:31] Thank you.
[02:17:32] Let's see if I did it wrong.
[02:17:36] Thank you.
[02:17:37] I wonder if they have to be block expressions, maybe?
[02:17:49] Yeah, there you go. Yeah, so effects are block expressions. Okay. Cool. Count, count, count, count.
[02:17:58] I don't know, like count, create a signal, memo effect.  You can understand how the label approach doesn't actually  lend to composability, but it is kind of interesting
[02:18:08] just to see this world where, as I said, it's because they're using the CSS helper, but you could picture that if you actually want to do like a little bit work, you could actually make the CSS helper global and then, you know, add some Marco style component discovery, you know, and then essentially this part just disappears and then
[02:18:29] You're just...
[02:18:31] writing some reactive stuff, setting some CSS, and returning your view. I don't know.
[02:18:37] you
[02:18:39] Thank you.
[02:18:41] Thank you.
[02:18:49] Yeah, that's a good question. I don't know if we can -- I mean, message -- like, if I do this, will this make TypeScript shut up or will it --
[02:18:59] Nicholas Matsakis: Labels not allowed here.
[02:19:02] Interesting. It's probably with Svelte too.
[02:19:07] You're not allowed. Yeah, this is interesting. I wonder how you deal with this because it doesn't actually know
[02:19:12] Hmm.
[02:19:13] Labels might just not be as-- might have this limitation.
[02:19:20] Thank you.
[02:19:21] Thank you.
[02:19:26] Thank you.
[02:19:27] Thank you.
[02:19:28] It takes a little cadaver to go in the way that it's only initially rendered once in the server and the client just attaches to the existing DOM?
[02:19:35] I mean, that's...
[02:19:38] It depends on your definition, but that's what hydration is.
[02:19:42] We already have that.
[02:19:44] I, how hydration works is like a huge topic with lots of nuance and a lot of different approaches. And the whole reason why that article to respond to Addy Asimani's chart has taken me so long. But generally speaking, that's how like server-side rendering and hydration works in solid.
[02:20:03] if I'm understanding you correctly.
[02:20:10] Yeah.
[02:20:11] Yeah, I mean...
[02:20:13] you can sort of
[02:20:16] Well, actually, yeah, you got to do little tricks here.  Maybe we should play more and understand how composition works.  It's actually a little hard here in here because then you need a separate...
[02:20:28] How does this work? Let's play with this.
[02:20:33] OK, what if -- let's -- our message -- OK, I'm going to forget about message for a second.  Let's make a function that's like doubler, right?  And doubler is going to take a number that is a number.
[02:20:46] Yeah.
[02:20:47] and it's going to return num times two.
[02:20:52] Thank you.
[02:20:54] Right. And now, if instead of that we went count,
[02:20:59] And we went double our count.  I understand this isn't the kind of composability I like.  Because I'd rather--
[02:21:06] Like, what if you want an effect in a different file?  Like, this composability is like what people point me to  when I mentioned that like,
[02:21:14] How hard is it to write an encapsulated paginated for in Svelte or Vue?
[02:21:20] They're like, well, just use the each on the outside and then pass your own custom logic for how the four handles. No, no, no. You want to abstract away the each handler.
[02:21:30] And you want to use a component to interject  new variables in the scope.  And I've done that in a different video.  It's doable.  But see, what I'm interested in here is--
[02:21:38] Um...
[02:21:42] yeah i mean this probably just works though because count is being accessed here
[02:21:47] This isn't doing...  This isn't...  Because of the way that this is a read...
[02:21:53] Is there any way that I can do this where it doesn't read in the local scope?
[02:21:58] Oh, yeah, of course.
[02:22:01] Thank you.
[02:22:02] Huh.
[02:22:04] Thank you.
[02:22:06] Thank you.
[02:22:07] Bye.
[02:22:09] Thank you.
[02:22:10] That.
[02:22:11] Thank you.
[02:22:15] Bye.
[02:22:17] Okay.
[02:22:19] Thank you.
[02:22:20] Thank you.
[02:22:24] Okay.
[02:22:25] Bye.
[02:22:26] Thank you.
[02:22:27] It's doing it. So there you go.
[02:22:33] Right. You understand why this is a little bit...
[02:22:36] trickier, right? Because the effect is calling a function
[02:22:41] Which...
[02:22:42] wraps over
[02:22:45] I guess.
[02:22:47] Like, basically...
[02:22:49] it's still using solids auto tracking is what I'm getting at because counts only X,
[02:22:55] accessed in here.
[02:22:56] Right.
[02:22:57] I'm kind of curious. Does this work in Svelte? Does anyone know if this works in Svelte?
[02:23:02] Thank you.
[02:23:03] Let's find out.
[02:23:05] Thank you.
[02:23:08] Even within the same file, can I go like function doubler?
[02:23:16] And go let something. And then what are we doing? We're making this a button or something.
[02:23:29] Thank you.
[02:23:30] We'll put num in here for good case.
[02:23:36] Yeah.
[02:23:37] Um...
[02:23:43] Thank you.
[02:23:45] num++ doubler equals,
[02:23:50] return num.
[02:23:54] times two
[02:23:58] And then you want to go to dollar sign console.log.com.
[02:24:09] - True.
[02:24:11] No, okay, so this doesn't work in Svelte. I thought so.
[02:24:17] This is basically the same example, right?  You can see the count going up.  Declare num, make an effect, console log it, click increment num,
[02:24:28] put num in and then double read double num.  See the problem is this is not
[02:24:33] actually reading from this. Like if this was like,
[02:24:38] This.
[02:24:41] this would work 100%, right?
[02:24:44] You can see it is working down here.
[02:24:47] But...
[02:24:49] If it doesn't read within the local scope,
[02:24:53] Svelte can't tell that it's been updated.
[02:24:56] So this updates, but this never runs.
[02:25:03] Yeah.
[02:25:04] Bye.
[02:25:05] Thank you.
[02:25:06] I can't tell her if you're joking or if you're serious.  Is this like array equals array kind of joke?  But...
[02:25:17] Um...
[02:25:21] Thank you.
[02:25:24] Yeah, it's interesting.  Yeah, because this makes me kind of
[02:25:29] want to see, it's kind of cool that even though you're using like,
[02:25:36] like basically svelte syntax here.
[02:25:39] You actually still have the runtime reactivity thing.  I want to see what this compiles to.  That's what I wanted to see.  See if I can find that.
[02:25:47] Here. Just to understand what we're looking at, because
[02:25:52] Um...
[02:25:54] - Do do do do.
[02:25:58] Oh, is this like hot module reloading giving me like 10 versions of everything? Okay, there we go.
[02:26:03] So we are in debug mode.  Yeah, yeah, exactly.  'Cause it's just create effect console on doubler,  and then runtime tracking,
[02:26:11] Catches it.
[02:26:17] Yeah.  So I mean, the compilation is almost too easy.
[02:26:22] I'm always kind of skeptical on this stuff, but I will say this.
[02:26:28] This has a lot of the same qualities that Solace.js transforms have in that it's very much a one for one thing. When you write this code,
[02:26:38] You just go and find it and it's like, oh, it's right there.
[02:26:42] Like, oh, I made an effect, okay.  Now it's using create effect call, but it's not like it's suddenly,
[02:26:47] transformed your stuff like didn't I mean maybe this is unfair but you know what this felt code compiles to
[02:26:55] Let's make it human readable.
[02:26:58] Okay.
[02:27:00] So the create block, this is creating the button claim.  Okay, now mount, insert dev, if not mounted, dispose,  click handlers is fine, update, dirty check, set data,  context zero, no, create fragment, where are we?  Doubler, okay, here's our doubler function.  Okay, here's our script tag essentially.
[02:27:18] After we call these, we are let.  We got some more props coming in, validates.  OK.
[02:27:25] This is...
[02:27:27] This minus the reactive statements
[02:27:31] And then...
[02:27:34] Click handler got hoisted.
[02:27:36] And then a reactive statement down here.
[02:27:39] It is cool, though, I got a GIF that they actually keep this intact.
[02:27:45] They just kind of inject some...
[02:27:48] other stuff
[02:27:50] in the middle, but they do actually keep
[02:27:53] like all the lines of code, even though they rearrange it, they actually keep it intact.
[02:27:58] That is kind of cool.
[02:28:00] um,
[02:28:01] Thank you.
[02:28:03] kind of see that.
[02:28:06] Thank you.
[02:28:09] Yeah.
[02:28:09] Thank you.
[02:28:10] Hopefully that's visible on stream.  Okay.  Yeah, so I mean...
[02:28:16] That is kind of cool. I will say that, you know, this doesn't seem like it actually affects the transparency here.
[02:28:26] You know I'm a skeptic on this stuff to a certain degree, but
[02:28:30] It is very like one-to-one.
[02:28:34] So props on that.
[02:28:39] Thank you.
[02:28:40] Yeah, I mean...
[02:28:46] It is pretty optimal.  I mean, you make that joke, but...
[02:28:50] Svelte's compiler was an influence for some of the work that we've done on Marco 6.
[02:28:59] Thank you.
[02:29:00] Yeah, it's just...
[02:29:03] One of the biggest fears I have with compilation is transparency. And sometimes you just can't get to it in the same sort of way. Like, I imagine
[02:29:14] when like
[02:29:16] Thank you.
[02:29:17] But I think this actually kind of shows like how the power of the primitives here, right?  Like you can see like the primitives are just...
[02:29:25] almost map directly.
[02:29:27] almost into language features, right? So it's kind of cool.
[02:29:34] this.
[02:29:42] Yeah, I wanted to kind of touch back on -- unless anyone has any specific questions about this part, I wanted to kind of touch back onto this article about React to Script for a minute because --
[02:29:54] Yeah.
[02:29:57] Thank you.
[02:30:00] Thank you.
[02:30:00] Yeah.
[02:30:02] I didn't get into the D refs case, but
[02:30:06] There are edge cases here when you need to kind of go back and forth between the wrap value and the unwrapped value.  You'll see all of these because everything.
[02:30:14] Bye.
[02:30:16] The whole key to most of these approaches is you end up with a single variable that you get to write like a single variable, except
[02:30:23] The problem is when something is a single variable,
[02:30:26] It can only be treated in one way.
[02:30:28] Like, and this is the crux of the whole reactivity thing,  is you have a container.
[02:30:35] like a reference to
[02:30:38] and you have the value.
[02:30:40] And no matter what we do, we have both of these things.  Like sometimes you want to pass by reference.  You want to-- you don't want to read.  You just want to be like, here is the React value.  And you do with it what you will.  And sometimes we want to read the value.  So it's important to kind of go back-- be  able to go back and forth because--
[02:30:59] Essentially, when you use JavaScript,
[02:31:02] This is always the reference.  Like pure JavaScript, the variable is always a reference.  Then you might have to call it as a function or whatever,  but it's always the reference to the signal.  And then you have to do something to get the value.
[02:31:13] All compilation is doing is reversing it.  They're saying the value is the thing that you always have access to.  And you have to do some magic to get back to the reference.
[02:31:23] Okay.
[02:31:24] And
[02:31:25] with the...
[02:31:26] It's because this reversal makes things cognitively simpler.
[02:31:33] Yes, your plug-in...
[02:31:36] Well, I
[02:31:38] Yes, your plugin doesn't do it because you denote it with the dollar sign,
[02:31:46] that it's something special. That's the other way to do it. But
[02:31:51] If someone...
[02:31:53] wanted to get the reference to,
[02:31:56] they do have to do something a little bit
[02:31:58] different, right? Like,
[02:31:59] I mean, technically, the...
[02:32:04] Yeah, actually.
[02:32:05] Maybe you can help me with this, Oren.  I don't know if I have it still open.
[02:32:10] But --  Active bars.
[02:32:17] you
[02:32:22] Let's just go to your GitHub. It's easier, probably. Is...
[02:32:28] If I wanted to...
[02:32:34] - Like we were looking at the compile output  for this before, right?
[02:32:38] And
[02:32:39] You just write this, but what if I actually...
[02:32:42] wanted to get
[02:32:45] the getter, essentially.  Like, I appreciate that in this example, you can actually  show that it doesn't even have to be components.  Like, you can literally pass it into a--  like, you can actually compose it, like, make your own--
[02:33:00] custom hook and still preserve reactivity. But I'm just curious,
[02:33:04] if you wanted to get the getter, what would you do?
[02:33:06] Thank you.
[02:33:09] Thank you.
[02:33:09] Thank you.
[02:33:10] Okay, there's a dollar sign, dollar sign.  Okay, yeah.  And what I'm getting at is regardless,  like I realize that you don't need it most of the time,
[02:33:18] And this handles thing.  This is, you are correct on this.  But the reason I wanted to point this out is because
[02:33:26] because of this kind of conceptual back and forth that's present,  this is why there's always a thing.  That's why these things are never simple.  The only way to actually get rid of it
[02:33:37] that we've seen, Svelte actually doesn't do this.
[02:33:42] But...
[02:33:43] But...
[02:33:44] That's because nothing can leave the file.
[02:33:48] right? Like it's trapped by the local compilation. That's why it doesn't have this,  these, these concepts. So that was sort of what I was wondering, because if you take
[02:34:01] what Orin's saying, if you treat things like this all the time, you almost always avoid the need for the double dollar sign in the identifier case, even more so than other cases. So I was like,
[02:34:17] Oh, yeah, that's funny.  I remember this.  I was like trying to...
[02:34:21] Trying to...
[02:34:23] figure out if it would be possible
[02:34:26] to just...
[02:34:27] What if we reversed everything? What if we made...
[02:34:30] The JavaScript on the outside,
[02:34:33] the reactive thing. Instead of trying to denote reactivity with a dollar sign,  what if everything was reactive by default and you had to denote when things  weren't reactive?
[02:34:47] Right?
[02:34:48] That's where I kind of started this concept of reactive script. To be fair, part of the reason I wrote this was I said as I wanted to kind of like
[02:34:58] trim down the conversation into specific categories,  because these solutions, regardless of framework,  seem to only tend to fall in what I've showed you--  identifiers, function wrapping, or keywords.  Like, every compiled reactive solution
[02:35:14] or fall into those three.
[02:35:17] I was wondering if you could write something like this.
[02:35:21] And you knew that the grammar, even the if and else statements,  were always declarative.
[02:35:28] Thank you.
[02:35:29] Like picture like
[02:35:31] that this was reactive in the sense that it ran once,  but this if-else has the same behavior as a show component in solid.
[02:35:40] Like, essentially, because it's built in syntax to JavaScript, we can analyze it and we know this, that we could actually
[02:35:49] set a reactive value.
[02:35:51] write a condition around it, and actually have updating that condition
[02:35:57] cause reality to change.  Now, this is a complete mind-
[02:36:00] than coming from JavaScript.
[02:36:04] But...
[02:36:06] This is just -- I was like, what if you could keep JavaScript syntax to create a language that essentially was declarative, that was reactively declarative? The challenge here is that there's always going to be escape hatches and denoting those escape hatches is actually kind of challenging here. And if this escape hatches are also written in JavaScript,
[02:36:30] Um,
[02:36:32] It might be hard to tell what's imperative and what's declarative JavaScript.
[02:36:36] Yeah, what's looping look like? Exactly. This one bugged me too, right? Because
[02:36:43] You want a map function, not a for loop.
[02:36:46] And I've seen some people talk about like a JSX 2 where you can just put for loops in and they act like a map function. Essentially, like you need CoffeeScript looping back, right? Like, this is the first thing that I hit on the JavaScript side that I thought was really awkward because you want a syntax analyzable loop and four is all we have.
[02:37:07] And
[02:37:09] There's no syntax in JavaScript to treat for like an expression.
[02:37:14] It's a statement.
[02:37:16] That alone might actually be the end of my brilliant little plan here.
[02:37:22] do expressions in javascript are interesting but they don't support loops unfortunately but
[02:37:27] Have you all seen do expressions?  Do expressions?
[02:37:33] Puzzle.
[02:37:35] What is it? I don't even know what body is doing it. Oh, what do you know? There we go.
[02:37:41] Check this out.
[02:37:44] Some people want CoffeeScript.  No.
[02:37:46] what do expressions let you do is like turn something into an expression,  essentially like let X equals do blank.  But it's cool because like, look, let X equals do if like,  whatever the return value is,
[02:37:58] becomes the X here.
[02:38:01] And they're saying, oh, it'd be really cool to be able to do this inside JSX, because then you could--
[02:38:05] do this. It's a little bit like a nicer form of an iffy or whatever. I actually thought this was cool because
[02:38:14] If you watch the Marco stream, there's this cool demo where we're nesting state in line and technically solids capable of that mechanically, but not syntactically with JSX. So it's like, ooh, insert a do statement, and maybe we can do that. But the one thing that
[02:38:30] that was interesting about it is
[02:38:34] There's no declarations, low trailing declarations at least.  And they don't do loops, which is too bad because...
[02:38:43] Thank you.
[02:38:44] If they did loops...
[02:38:46] Thank you.
[02:38:47] that would be sweet because what CoffeeScript did is it would actually collect all the return values from each iteration of the loop and return that as an array.
[02:38:56] um,
[02:38:57] But essentially...
[02:38:59] We don't have syntax for this, which I actually said might be our...
[02:39:03] our thing.
[02:39:04] Well, perhaps, but...
[02:39:07] I mean, you know how solid does King, right Dylan? So, um,
[02:39:12] Thank you.
[02:39:13] I'm thinking fine-grained referential keying as the default here.  Obviously, there's probably a lot of edge cases, but...
[02:39:23] If there was a syntax that was analyzable in JavaScript for loops,  like for map especially, that could return--  that was an expression instead of a statement.
[02:39:35] Like, then, you know, I think...
[02:39:39] I think maybe this has some legs.
[02:39:44] I thought it was really interesting because then things like early returns are just like everything just becomes...
[02:39:53] a declarative statement. So you could just write this.
[02:39:56] And this would be the same as...
[02:39:59] what-- like using a--
[02:40:02] a memo or, you know, kind of wrapping it in a fragment for conditionals. Because as I said, Saul is capable of nesting stuff underneath these, but the syntax doesn't support it. So it would be because for someone writing this,
[02:40:15] It looks like Svelte.
[02:40:19] kind of, but, or slash react, like it looks like it has everything, but it would actually be using fine grain reactivity.
[02:40:26] Thank you.
[02:40:27] Because if you notice, I still got JSX here, because I still like JSX, because this approach
[02:40:34] lends to the portability of declarations because you'd still just want to sprinkle it in. This is like the most, even though it's not JavaScript, this is the most like JS forward thinking approach I could think of doing this, which is basically...
[02:40:49] on the opposite end of the spectrum to a certain degree, from the most HTML approach I can think of, which is Marco. It's funny, Marco for me has cemented what Svelte could be, right? And
[02:41:05] But
[02:41:07] The benefit of Marco's tags API in this scenario is--  and I have an example further up-- is it's very obvious when  you're in declaration land and when you're in--  where is this function decorators?  Here it is.
[02:41:21] It's very obvious when you're in JavaScript land
[02:41:25] and when you're in declaration land. Like tags,
[02:41:28] are all declarations.  These are declarative.  Everything that looks like JavaScript is imperative.  So it's very clear division.  I don't know how in like a reactive script  we'd be able to...
[02:41:41] denote the difference between the imperative and declarative zones. But I have to admit,
[02:41:46] If we could solve...
[02:41:48] If there was a syntax for for loops that made sense, and maybe it's just the semantics, like the do semantics,
[02:41:55] Thank you.
[02:41:55] essentially.
[02:41:57] Like maybe the return, maybe the last statement's always an implicit return or some like weird garbage like that.  I don't know.
[02:42:05] Writing code like this
[02:42:08] seems like it has...
[02:42:10] Notice the destructuring has basically
[02:42:15] the best of
[02:42:16] both worlds. That was where my thinking is.
[02:42:23] Thank you.
[02:42:26] Asterisk syntax.
[02:42:29] Yeah, we didn't talk about Aster today.  Should we pull up Aster?  Aster was another project built on top of solid.  How many...
[02:42:38] This is not it.
[02:42:40] Where is it?
[02:42:44] Thank you.
[02:42:45] Thank you.
[02:42:49] Thank you.
[02:42:51] Bye.
[02:42:54] Maybe this is why CoffeeScript comes back.
[02:43:00] Thank you.
[02:43:01] Why can't... Oren, if you can dig up the link...
[02:43:06] Unless I find my own Twitter tweet in which I promoted Aster.
[02:43:10] I did.
[02:43:11] Here we go. What is Aster?
[02:43:14] Guess what?
[02:43:18] Thank you.
[02:43:21] Oh, it's been replaced by KleinJS.  Interesting.  Basically, this was a framework built on top of solid.  I wonder what KleinJS is, just out of curiosity.
[02:43:33] Okay.
[02:43:36] Thank you.
[02:43:37] Okay. So he hasn't actually said anything yet.
[02:43:42] Thank you.
[02:43:44] Dino-based example. Sorry. I'm just curious.
[02:43:51] Thank you.
[02:43:53] Yeah.
[02:43:54] Thank you.
[02:43:55] So...
[02:43:56] There's no package.json or anything here.  But yeah, Aster was built originally, I believe,  on top of solid because of our fine grained mechanisms.  But essentially--
[02:44:09] Did he cut down the... There used to be
[02:44:12] Yeah, it compiles your Azure code down to SolarJS.
[02:44:16] It was another compiler that did aggressive co-location in its syntax, but I actually
[02:44:21] Yeah, okay, here we go. Yeah, so they just literally just assume that four returns.
[02:44:28] Which is what I was saying, but I think it's a little bit more awkward when you want it to assign to an intermediate variable.
[02:44:36] Thank you.
[02:44:36] Thank you.
[02:44:38] But I mean, I suppose you could make that work.
[02:44:41] My goal here is mostly around...
[02:44:45] um not making stuff that java like if you look at this javascript or typescript is  not going to complain at you like this is all valid javascript and typescript
[02:44:56] Mm-hmm.
[02:44:57] Yeah.
[02:44:59] I'm not terribly surprised.
[02:45:04] I think it's kind of one of those interesting cycles, because I think what happens is you do enough experimentation, then you're like, OK, I can build this myself.  There's been a lot of people who have been doing these experiments recently, especially on the GS Framework benchmark.  We see a few new fine-grained libraries.
[02:45:22] A lot of those people are still in the Solid community, which is great.  And actually, by building something like that from scratch, it gives them even greater appreciation for some of the work I've had to do with Solid.  Like, maybe that's the secret to getting new members on the core team.  Find people who try and rebuild, you know, fine-grained reactive systems in the cells and go through all the trouble benchmarking and going through all the trials and tribulations.  And then eventually they come to appreciate what we've got.
[02:45:50] Thank you.
[02:45:52] Thank you.
[02:45:55] Thank you.
[02:45:55] For an example, I was here to speak to the coding from Dragon.
[02:46:01] I don't know if you saw the Marco stream, right?  This is like a complete, this is like one thing.
[02:46:08] side of the coin. This is like if you liked
[02:46:12] JavaScript or you like the idea of writing stuff in code and you kind of just have this kind of
[02:46:20] flow, and this is what I've been playing with, right?
[02:46:24] And
[02:46:25] maybe this is just completely unnecessary. You know, this is just kind of,
[02:46:30] what I was thinking on that side. But if you, if anyone saw, let me see, dev two.
[02:46:37] Um...
[02:46:41] Thank you.
[02:46:44] Um...
[02:46:47] Thank you.
[02:46:49] Thank you.
[02:46:50] Thank you.
[02:46:51] Thank you.
[02:46:51] What am I looking for? Was it in the .  If you saw the Marco stream and the tags API,
[02:47:00] even though it has a specific syntax or whatever, you might not be friendly. One of the things that we were highlighting, and at least if I can get all the way down here, it's better in the stream, is that you can like make a for loop and then put state inside the for loop and just put the effects inside the for loop. Like you can basically put stuff as close as possible to where it's used. And that's
[02:47:23] This is a very...
[02:47:26] cut and paste kind of thing right because it's all just markup so if you're like oh  i need to extract this into a reusable part you just like
[02:47:33] copy or cut, select, cut, paste, drop.  And I think even for visual editors,
[02:47:39] that, you know, we're just building stuff, being able to generate this code would be super easy, too, because it's all localized. And then everything's basically there's no components, everything is a component, everything is just like these pieces that can just
[02:47:51] They just slide in where they're used.
[02:47:54] So like, this is one vision of the future. And what I was trying to show with the React script is like, the opposite end. I'm very much interested in pushing the boundaries on both ends. Like, I'm not completely sure. Like, when I saw Svelte, I was like, oh, wow.
[02:48:15] I wouldn't have gone that way, but that's really interesting.  So I wanted to look even further to see what you could do with these template DSLs.
[02:48:22] Right. And I've
[02:48:24] I found it's, you know, where they found me. Marco team has kind of taken that thinking and gone like way beyond in terms of like ergonomics performance like.
[02:48:35] like the pieces that would take to be able to build that
[02:48:40] almost each female first thing.
[02:48:42] I was kind of curious. I'm like, okay, well,
[02:48:46] There's that.  But what if we are kind of JavaScript first?  What if...
[02:48:50] We want to be able to
[02:48:53] Like, write everything as kind of portable code rather than portable tags. And it's funny, when you get to the extremes on things, like, sometimes they become the same thing almost. Like, it's hard to differentiate because, like, it's almost like it loops around. But...
[02:49:10] Essentially, that was kind of the question I wanted to ask.  Like, is there...
[02:49:15] a different paradigm. Like when, as I said, when Svelte came on the scene, there's this kind of  sense from a lot of people that are like, okay, there's React, but Svelte is the future. Like  these compilers and all this is a way we're going to do things.
[02:49:28] And to be fair, when I'm looking at reactive script, there's definitely compilation involved, right? But I wanted to kind of, I was kind of wondering, is there
[02:49:36] a future.
[02:49:37] where
[02:49:40] Like the compilation isn't all encompassing it from the,  from the perspective of like,
[02:49:47] Yeah, I don't know. It's interesting because I think reactive script actually kind of blurs those lines, too. But where like,
[02:49:53] you know, like,
[02:49:55] the JSX thing, like assign a div to a variable,  like where it's all like piecewise.
[02:50:02] That's sort of what the question is.  I want to know if there's a different future than that.
[02:50:14] Yeah, I mean, it all involves compilation.  We're hitting the limits of what we do with JavaScript right now,  which is interesting to me because...
[02:50:21] you know, there's a lot of talk about Wasm and stuff.  And I don't know what people do on the Rust side.  But one thing that I've seen is a lot of the templating and stuff is like,
[02:50:29] is not as focused on from a hyper-optimization standpoint.  You know, a lot of work has gone on the JavaScript side  and the tooling into templating and looking at how to optimize  these kind of seemingly micro-optimization.  But it's like for JavaScript and what we're doing in the browser,  it makes such a big difference.
[02:50:48] Thank you.
[02:50:50] Yeah, I'm going to read some comments now.
[02:50:56] Yeah, well, like you say plus Aster, but yeah, reactive script is sort of encompassing that a lot of the ideas of Aster and co-location, because the whole thing is declarative, right?
[02:51:11] Thank you.
[02:51:12] Yes, yeah, and we're already working on TypeScript support.
[02:51:15] should be backwards compatible too.  So TypeScript is coming.  We're using it, you know, in the same way as
[02:51:21] I want to see how it evolves, right? Because like, as I mentioned, Vue and Svelte have had some challenges, we can learn from them. But yeah, I imagine we have a somewhat similar approach, although we've been looking at what we can do with parsing in terms of better response to some errors and stuff.
[02:51:40] how is this often depressing as
[02:51:44] Yeah, I mean, progressive enhancement is one of those things where –
[02:51:49] How should I put it? To me,
[02:51:52] It's just one of those givens.
[02:51:54] Like,
[02:51:57] Like accessibility. It should be something that we are all doing when we design our sites because we care to do that. I think that one of the challenges is, like accessibility,
[02:52:08] Yeah.
[02:52:08] People don't do the right patterns.  They don't get the benefits.  And...
[02:52:13] It's kind of weird to have something like HTML
[02:52:15] and CSS and all the stuff we have, and not just have the right defaults out the gate that we have to work so hard to make.
[02:52:22] things accessible or progressively enhanced.
[02:52:25] I think...
[02:52:28] There was an argument and Dominic Ganaway again from Inferno came into our Discord a little while ago and he's been working on Lexical, which is a text editor, hyper-efficient editor.
[02:52:41] text editor basically has like has its own dom diffing and everything like  built specifically for the use case and he was like
[02:52:51] we need a different abstraction than HTML that we have today.
[02:52:55] He's not saying go to Flutter necessarily,  but he is kind of, that's where his thinking was.  He's like, for something to really change the game,  it needs to somehow succeed at changing the abstraction  in such a way that...
[02:53:08] Like stuff like accessibility is a problem of the past.  It just, that's how it works.
[02:53:14] Yeah, I'm not sure. Given the way people treat familiarity and how hard it is to get an edge here, I'm not sure if that's...
[02:53:23] you know where we like where things go right away or if it takes some time because you know
[02:53:31] Thank you.
[02:53:37] Yeah, some comments about GGS and Wasm from a few minutes ago.  Yeah, I understand that.
[02:53:43] And that's probably where more of the taxes like I made a comment or noticed a while ago that the gap between the most optimal WASM.
[02:53:51] code, vanilla JavaScript code, and the frameworks is a lot bigger than the gap between the most  optimal JavaScript frameworks and vanilla JS. Like, we're only trailing vanilla JS by, like,
[02:54:03] you know, 5% where the gap between the most optimal WASM and
[02:54:08] And vanilla JS is like--
[02:54:12] you know, in the JS framework benchmark is something like 12 or 13%, which might not seem like much, but it means...
[02:54:22] like I was trying to like project how much further Wasm has to get along and  how much faster it needs to be.
[02:54:27] be the vanilla before it actually allows those libraries to take a dent out of the fastest  JavaScript frameworks.
[02:54:34] So, yeah, I think there's still a little ways off.
[02:54:48] Yeah, I probably -- ASTRA doesn't have much documentation anymore. It looks like it's down or they gutted it. It might be worth giving it another look.
[02:54:57] As I said, I...
[02:54:59] I didn't see anything initially that was different than what I was already thinking. So I wasn't really crediting combining with Astrid. It's just like that is what reactive script is. So maybe it requires a further look.
[02:55:13] My dream of next version of React is just write JSX without function.
[02:55:24] Oh, probably not a cleaner Marco. It's harder to get cleaner than Marco. But like in terms of like terseness and stuff. But yeah, I, I, but yes, but it's actually, I think that's, isn't that similar to what we just saw, actually?
[02:55:41] the example here.
[02:55:45] the SFC example where we literally--  I mean, I guess he's exporting default here.  But like literally just--
[02:55:58] Thank you.
[02:55:59] like throwing some JS in, you know, you can pretend these are use states or whatever, and then just returning some JSX or whatever.
[02:56:07] Thank you.
[02:56:08] Yeah, it sounds a lot like what we were showing here. It's funny.
[02:56:14] Thank you.
[02:56:15] It's interesting.  I think there's a mental consideration here too,  because when something's HTML first, like this Marco example  that I had on screen, you kind of-- where is it?  You kind of-- like, if this was your whole file,  you don't feel uncomfortable with it, at least for me.  Because like, you start in HTML.
[02:56:36] and then you put your JavaScript in it, it seems to fit. For some reason,
[02:56:41] This feels disjointed for me.  Like even Svelte where you have the script tags,
[02:56:46] it feels like you're in an HTML file.  Like it feels like it's this,
[02:56:52] this block
[02:56:53] I guess this could be a script tag or sort of style tag.
[02:56:59] Like,
[02:57:03] It's-- I realize this is just JS, but on the other hand,
[02:57:10] expecting it to
[02:57:12] to be grouped as a component like this is already, for me,  a mental leap.  Because it suggests some sort of instance space.  Because there's a difference, like, say, if you make a component--  I mean, I've shown the silly example before, right?  But it's the difference.
[02:57:31] between this
[02:57:33] and this, right?  We all know that this still works in solid, right?  But when you have a SFC, there's no concept of this.  I mean, Marco has a keyword called static for this,  but there's no concept of hoisting like this.  Everything's instance-based.
[02:57:49] What I'm getting at is like,
[02:57:51] to enter a file and be acknowledging that I'm instance-based is already like a
[02:57:57] the cognitive switch overhead.
[02:57:59] to me. Like it's not...
[02:58:02] Thank you.
[02:58:04] It's not just JavaScript, just like, like,
[02:58:08] It's now a thing.  And I don't know.  It's fine.  You're authoring components.  You're allowed to have that abstraction.  It's a thing.  But I think for me...
[02:58:18] That's where like a bit of a gap, like kind of where I think where when I see this, I
[02:58:24] I'm like, no problem.  Or Marco?
[02:58:27] I'm just like, okay, I'm in some markup that has some JavaScript in it. But this
[02:58:33] by its nature, I can already tell it's magical.
[02:58:36] Like I can already tell that it's doing something special and it's not just  JavaScript. I don't, I don't know. It just,  it's funny because we all know this is not just HTML,  but it's,
[02:58:51] You can see it.
[02:58:54] Thank you.
[02:58:54] Thank you.
[02:58:56] Thank you.
[02:58:59] Yeah, I mean...
[02:59:02] Yeah.
[02:59:03] Yeah, I mean, that's why we keep on working at this, right?  I don't know if there's like an optimal place to be.
[02:59:11] As I said, my personal approach is...
[02:59:14] go for the extremes, go for the things that are don't seem possible. And then,
[02:59:20] see if where we land is somewhere. Like if you, if you don't test the boundaries, you don't, you know, from a design standpoint, try and push things that far, you're not going to know what you're capable of.  So hopefully some, some of this work, you know, has some impact and actually sticks, but that's just like where my thinking is at.
[02:59:49] Yeah, that's an interesting question. There is a proposal. I don't know if you still hear Joe. He's been looking at like, what if we could bring reactivity in.
[03:00:00] The funny thing is if we brought reactivity into JavaScript,
[03:00:03] what would it look like? Like,
[03:00:09] I don't know if we get away from...
[03:00:16] from the, I'm not in the right document anymore, but like, I don't know if we get away from the three styles of things that I took, like options that I talked about, like you could make it a type, essentially, like,
[03:00:29] But the funny thing about it is,
[03:00:33] Yeah.
[03:00:35] Everyone focuses on the destiny operator.  They focus on the reactive assignment or computation.  But for that to work...
[03:00:41] It's actually the letables that are the signals.  So if you had a destiny operator or something in JavaScript, every variable would have to be
[03:00:50] potentially reactive, which is
[03:00:52] Like that's too much overhead, I imagine.  Now, if you denoted what the reactive atoms were,
[03:00:59] Um,
[03:01:01] Like, how do you do that? Would it be, like, as I said, would it effectively be a type?
[03:01:05] Um,
[03:01:09] I guess it would be kind of like at which point,
[03:01:14] like
[03:01:16] I guess it would be cool to have signals in the browser, essentially.  But I don't...
[03:01:22] know if
[03:01:24] We would still have that problem of referencing and de-referencing.
[03:01:28] Maybe the engine could be smart enough, essentially, that it would take the compiler high road. It would say, no,
[03:01:37] you always read it as a value and you need to use a second special helper.  Like maybe we could get, uh,
[03:01:44] to that point.
[03:01:46] And maybe that would be the trick.  But I think it would have to be a type built into the language.  So yeah, maybe that's what we should do.  Maybe, you know, like those people trying to get JSX in,  you know, maybe we can try and get reactivity in.
[03:01:59] Yeah.
[03:02:03] Yeah.
[03:02:04] It would have to be explicit, I think.
[03:02:09] And, like, it's hard because...
[03:02:12] Like there's a coloration that happens from reactivity that you can't tell.  Like async await, like makes it very clear with your keywords.  But if you suddenly have a variable in scope and you're like, is this reactive or not?
[03:02:27] I mean,
[03:02:28] Thank you.
[03:02:28] And as I say that, Solid kind of hides our stuff behind props. And the idea is you know in our scope or context that you should treat things that you care to be reactive as reactive and trust in everyone to be reactive. But that works very well in a component or a framework mentality. I don't know if that works as a general language feature.
[03:02:55] Yeah.
[03:02:56] Bye.
[03:02:59] Yeah. And I was thinking away with the reactive script thing of how to make the imperative code more clear. But the problem is,
[03:03:06] It's kind of like the React server component, shared components, client component thing.  When you're in a shared component...
[03:03:13] Like,
[03:03:14] like some import.
[03:03:16] Like, could it be used under reactive scope or not reactive scope and, and actually behave differently? Like,
[03:03:23] It's kind of a funny question, right?  Because I don't know if you're familiar with serving components,  but essentially the serving components and the client components,  but shared components can be descendants of either.  And they have stronger restrictions to them for that reason.  But still...
[03:03:35] They actually can act as either depending. So they have different behavior depending on where they're used. And I think that's dangerous for something like reactivity in a language.
[03:03:48] Yep.
[03:03:50] Point user type.
[03:03:52] So like treating them as a type...
[03:03:55] is
[03:03:56] is the thing. It just, with JavaScript, it's kind of hidden. So,
[03:04:01] Mike.
[03:04:02] I don't know if that's...
[03:04:04] like makes things too hard.
[03:04:09] Right, yeah, I mean, they could solve this with the right explicit syntax. I'm more thinking about how usable this would be. Like, would you, like,
[03:04:19] Even with my reactive script,
[03:04:20] idea. I'm still proposing it as like a different type of block, a different language, essentially  just using the same syntax. Like, I don't know how you...
[03:04:29] It'd be interesting to try and mix them and...
[03:04:33] like still be very clear what you're dealing with.
[03:04:46] Thank you.
[03:04:47] Yeah, I don't know if my point's coming across clearly  because you guys are talking about mechanically how you do it.  I'm sure they could...
[03:04:56] Do it.
[03:04:58] But it's more of like...
[03:05:00] what does it actually look like to use or author is what I'm getting at. Like, will it make sense to you?
[03:05:10] Yeah, I mean, but it's literally taking the Svelte mentality of like stealing the syntax
[03:05:18] to make it behave completely differently, right? Like, like, self has JS syntax, and it looks yes,  but it is nothing like, yes, yes, it doesn't make it, you know what I mean? Like, it's not actually  JavaScript that when you're writing those script tags, it just steals the syntax. And that's  basically what I'm saying. Like, I looked at someone like, wow, like, as I mentioned at the  beginning of stream, there are people out there that are like, it's just JS, right? Like, that's
[03:05:48] cells script tags is just JavaScript, right?
[03:05:52] like,
[03:05:54] Like to take something that is like not even remotely true and actually like
[03:05:59] convincingly have that like
[03:06:02] like that discussion with a straight face, you know, like that is very successful abstraction.
[03:06:10] Thank you.
[03:06:13] Yeah, I mean, it's funny. We've been talking about compilation language and some of the  earliest compilation in the JavaScript space was Elm. Elm is 2012. That even predates Marco, right?
[03:06:33] Svelte 2019 in terms of when they went like full compilation into a language. So like
[03:06:39] Like Elm had signals in it, the primitive, but I think over time they're like,
[03:06:47] I forget what the pattern is, but they're like their model
[03:06:51] like they have like almost like a redux like pattern baked into it.  Kind of just was more predominant than any kind of signal triggering.  There are other languages and there's a lot of academic papers on the subject.  So potentially, but this starts entering one of those areas kind of like on the extreme functional programming side of things like,
[03:07:13] you know, we might as well be introducing algebraic effects to JavaScript, you know, like, which, you know, if we did that, the React guys would be really happy, right? Like, it's, it's kind of,
[03:07:23] at that level, in my opinion, where...
[03:07:27] It's a mind bend for how things semantically work. It seems like it's possible. So maybe this is an area that someone could look into.
[03:07:42] Thank you.
[03:07:43] Bye.
[03:07:45] Thank you.
[03:07:47] Yeah, I don't know. This is the problem with these things. And I knew that doing a stream on this would kind of get us into this zone, right?
[03:07:57] because
[03:07:59] As I said, so much cares on syntax, right? And these conversations have just been going on and on and on. I don't know if I gave it enough attention the other week because we weren't focusing on solid, but like...
[03:08:12] Thank you.
[03:08:14] Yeah, right, you can't see the code.  But like...
[03:08:19] Thank you.
[03:08:20] No, not that. Where are we?
[03:08:25] I don't even have it open anymore.
[03:08:28] Thank you.
[03:08:31] This is like...
[03:08:32] Hopefully you guys can see this a bit better, but this is like essentially
[03:08:38] React using signals without solid and I'm not going to show the code here because I shouldn't because didn't want to be shared. But like,
[03:08:50] Yeah.
[03:08:51] This doesn't actually change our React acts at all.
[03:08:55] But essentially,
[03:08:57] has hooks and composition and automatic dependency tracking all using React's own primitives.  So like if you look at this logger, it's like use effect if should log console log, otherwise don't, right?  I love this because look, you click this, nothing's happening.  Click this, conditional dependency tracking, right?  In React, this shouldn't even be possible.  So what I'm trying to get at is...
[03:09:21] we can do amazing things with the right primitives, even if even the bend the model. So,
[03:09:27] It is only a matter. It's not a matter of what we're capable of, but like,
[03:09:34] like what makes sense to do.  Like, is this the best model for React?  I don't know, but it's damn cool that Tanner Lindsay
[03:09:41] was able to basically...
[03:09:43] copy solid syntax and dynamic dependency tracking without an external subscription system in React and still basically have it act the same as React. Like, have the dependency arrays optionally if you want, you know, pull into props and also do conditional tracking like this. I think that's insane.
[03:10:02] So, I mean...
[03:10:05] There's a lot you can do.
[03:10:07] with the right primitives.
[03:10:11] So I feel like this is a huge area of research and there isn't a perfect solution yet, right?
[03:10:21] It's a lot trickier
[03:10:24] than some people might imagine.
[03:10:26] Like,
[03:10:27] In the same way that I've been saying server-side rendering isn't anywhere where it needs to be. It's just starting to get there, maybe. People were wondering, because every time a new feature came out, they're like, oh, blah, blah, blah, this amazing, best thing ever. And they're like, what do you think, Brian? And I'm like,
[03:10:45] In terms of where server side rendering needs to be, I said something a year or two ago that I think Next.js is a two out of 10. And people are like, "What?" I'm like, "No, this is not an insult to Next.js." We're just so far from where we need to be to actually leverage stuff.
[03:11:02] And
[03:11:04] you know, in the next few years, I think we're going to get to a much better place.  And I think on the syntax compiler thing,
[03:11:11] like there's still so much to solve, which is a completely different thing than say like DOM performance rendering benchmarks.
[03:11:18] We've capped those.  The JS framework benchmark, like we're not seeing,  there's no, we're not seeing any more improvement here.
[03:11:26] But, yeah.
[03:11:29] There are other interesting areas of research.  And for me, I've taken all myself to look at the server side.  That's why I'm not working on ReactiveScript.  I want to solve--
[03:11:41] I want to get server rendering from a 3 out of 10  to an 8 out of 10 or better.
[03:11:46] But, um,
[03:11:49] I think this is another area that's really worth attention and can people  kind of work through and think through,  but it's going to take a lot of work and a lot of,
[03:11:57] trial and error.
[03:12:00] Thank you.
[03:12:03] Thank you.
[03:12:05] So anyway, I don't know.
[03:12:09] That's
[03:12:11] That's kind of where I was at. I don't need to really say much more about this. If anyone else has any more questions. Otherwise, you know, I'm pretty good on this. This is really all I wanted to talk about this week. I just wanted to kind of show some different types of syntax and understand and talk a bit about the tradeoffs, as I said, and
[03:12:32] There's so much in this area.
[03:12:35] There's an old tweet a while ago that I think Jason Miller was making Svelte to pre-act compilation like
[03:12:41] There's so much...
[03:12:44] being done and that like,
[03:12:47] can be done here. We're just scratching the surface. As I said, Svelte's kind of led the way forward and we can now see that this is a possible future for us. But as I said, Svelte where it is today is also kind of like a two out of 10, you know, like
[03:13:03] like in terms of what we can do here. So yeah, I'm really excited for the future. See what we're
[03:13:10] we're going to build.
[03:13:12] And
[03:13:13] Yeah.
[03:13:14] Thank you.
[03:13:15] I think...
[03:13:17] Thank you.
[03:13:18] If you haven't, you should watch that Marco stream from two weeks ago.  I know I've said that like several times through every stream, but like,
[03:13:25] If you're interested at all what the future could look like,
[03:13:30] There's a lot of really cool futuristic stuff on that side of the thing.  I'm hoping that I can talk about...
[03:13:38] more about what the other side looks like in coming weeks. Um, because I've been, I've been giving a lot of thought of what this means for solid. But, um, for now, I'm kind of, as I said, focusing on SSR and focusing on what needs to come out for the immediate stuff. We're working a lot on solid start. Um, and we'll be demoing that in upcoming weeks on the stream. Um, we think we've done some really cool stuff and, uh,
[03:14:05] It's going to be really great to finally showcase it off.
[03:14:11] Yeah, no, I've never looked at Julia.  There's a few...
[03:14:15] Let's see if I can find it here.  There is a few...
[03:14:20] really interesting
[03:14:24] Thank you.
[03:14:26] Thank you.
[03:14:27] things.
[03:14:30] Like on the language side,
[03:14:34] Yeah, I mean, they're going to give me an example.
[03:14:40] Yeah.
[03:14:41] There's definitely really...
[03:14:44] cool things, especially on the more academic side of things, the functional programming side of things.
[03:14:49] But like,
[03:14:50] Yeah.
[03:14:51] This is literally--
[03:14:54] I want examples, not like --
[03:14:59] Thank you.
[03:15:01] Yeah, I don't know.
[03:15:05] Thank you.
[03:15:06] I'll have to leave this for another time, I think.
[03:15:09] Um,
[03:15:12] the
[03:15:12] Yeah, there's so much in this area. I dropped something in the solid discord a few weeks ago that was shared with me. I think Michael Rawlings shared it with me. It was like basically like never create your own language.
[03:15:29] like you'll never be satisfied with any other language again or something along that. It was a whole article and it was hilarious. And
[03:15:35] That's the thing.
[03:15:38] There's so many aspects of this and so many considerations when you go into actually building these things that it makes it hard to
[03:15:47] to accept the status quo in a lot of cases.  But it also-- like there's so many choices and micro decisions  that impact and use trade-offs that you--
[03:15:59] like there's just it's kind of like a land of it feels like almost infinite possibility and
[03:16:07] For every one of those possibilities, only...
[03:16:10] a fraction are ever going to succeed or get anywhere. So it's kind of like,
[03:16:17] You have to be doing it because of the love of doing it. You want to find and explore and learn.
[03:16:25] you know, what actually ends up sticking or actually is the future is a whole separate question.
[03:16:33] Yeah.
[03:16:35] - Constraints are key, yeah.  And I think that's with any kind of design thing.  You have to know what you're building towards  and constraints are key.  Constraints are also like,
[03:16:45] technical debt on arrival sort of I mean depends on depends on what you're doing obviously but  it's like one of those things where like
[03:16:53] the
[03:16:54] by setting
[03:16:56] the limits, that's your only way of actually being able to accomplish anything.  But it's also like your base assumptions are the things that are hard to
[03:17:04] get away from, which is why we have these cycles, which is why a JavaScript framework might last five to seven years before
[03:17:11] the next thing shows up.
[03:17:12] because you have to be able to work off those base
[03:17:17] That's how you push things forward.  And they just keep on tweaking slightly  and just enough that we reinvent the wheel over and over again.  And I don't think that's a bad thing.
[03:17:27] I know like
[03:17:29] That's where, you know, the sort of hope that, you know,  if we bring JSX into the browser, you know, hope that like we, you know,
[03:17:37] Sort of.
[03:17:38] kind of avoid it, you know, like a standard way, like standardization always trails innovation. And
[03:17:48] We have to be careful with standardization.  You can't be too ambitious.
[03:17:54] I think baby steps.  I think that's the thing.  But it's really hard because baby steps,  if you take a purely piecewise baby steps kind of,
[03:18:06] look, you might not actually end up with a cohesive product at the end.
[03:18:11] So there's a whole different set of
[03:18:14] guidelines you have when designing and standardizing a platform than you have when
[03:18:18] boldly innovating along a certain space with a certain project or with a certain library.
[03:18:29] Yeah.
[03:18:30] Thank you.
[03:18:32] Thank you.
[03:18:33] Thank you.
[03:18:39] Thank you.
[03:18:40] I feel like in any art, the love of doing it pushes it a lot further than the financial concerns, though, and it's the people that find the future.  Yeah, no, and that's the thing.  There's some amazing people working on these projects, looking into these things.  I have an incredible amount of respect for Rich Harris and Evan Yu and all the React Core team and, you know, who else is working on salt?  Ben McCann, Luke Edwards.
[03:19:05] I know who all these people are.  They do amazing work.
[03:19:10] And
[03:19:12] And, you know, obviously the Marco team, Michael and Dylan are both in chat.
[03:19:19] just
[03:19:20] It's so exciting to work in a space with so many intelligent people
[03:19:27] Like,
[03:19:28] kind of just constantly wanting to push the boundaries. I know people, like from a consumer standpoint, they're just like, do we need to do this?
[03:19:36] Are you just catering to Meta or eBay's use case?
[03:19:41] I just wanted to build a website.
[03:19:43] Yeah.
[03:19:44] I mean, I can identify with that.  I've been there a couple of times, you know,  as like building a storefront for when my wife had a spa  or like a wedding website.  And I was like bringing in like the full front end framework.  And I was like, oh, geez, like I probably could have gone a different way.
[03:20:05] You know, things can get complicated.  But if you see the work that everyone's doing,  like there's so much care and sensitivity,
[03:20:14] those user experiences and stuff.  'Cause it's not just about the performance  and the optimizations, like people kind of get
[03:20:21] think about that and they go, oh, you know, always just trying to like get that last little bit for, you know, such and such as use case. But if we if we wanted to make something super, super performant,
[03:20:34] There's always a solution to do that.
[03:20:36] It's called Vanilla JS. Like literally...
[03:20:39] you can make something really
[03:20:42] not ergonomic, perhaps not like as smooth to use. Expect everyone who uses it to be an expert. And then sure, we can make the most performant thing you've ever seen. And it would be a lot less work than trying to make a framework. But the work for the frameworks is all about developer experience. It's, it's, it's marrying those aspects together. People like people
[03:21:04] when people criticize like developer experience and stuff on certain tools,  you just go like, yeah, okay. It's not as good as maybe you'd want to be,  but like it's,
[03:21:13] The amount of thought and concern that goes into that from design perspective is immense.
[03:21:18] Because I said, there's a billion ways you can get the performance without caring about the developer.
[03:21:23] But...
[03:21:26] You want it to be fun.  You want it to...
[03:21:29] be empowering. You want to make the developer feel like they're in control, that their thoughts can be translated, you know, and, you know,
[03:21:40] This is like the number one concern, even beyond the performance and whatnot, because I said, you know,
[03:21:46] That's always achievable.
[03:21:49] It's whether we can have people feel productive and be happy about it during it.
[03:21:56] I mean, that's what we do.  That's why we do this.
[03:22:00] probably
[03:22:01] Thank you.
[03:22:03] Yeah, sorry, back to my comment a few minutes ago. Yeah, exactly. This is the problem with baby steps because then you don't get the cohesive picture. So this is a very hard place to be with. I think some of the CSS stuff that's been pushed and some of the kind of like
[03:22:20] The approach to web components in general has been a bit of this.  Like it's a combination of like super ambitious things and little things and  trying to,
[03:22:27] Build towards us.
[03:22:28] Peace.
[03:22:30] It's harder for me to identify on the standardization side.  I just haven't been there.  I think it's a much harder problem than the problem
[03:22:37] that
[03:22:39] we're working on in a sense.  When we're working on the frameworks, as I mentioned,  we only have to worry about our customers,  in a sense, or like our potential customers,  or like people who would be developers  in their potential customers.
[03:22:51] consumers other thing.  When you're designing and standardizing for a platform,  your scope is even wider than that.  And that seems like...
[03:23:00] It's incredibly difficult.
[03:23:05] Just write in binary.  There you go.
[03:23:07] Thank you.
[03:23:08] Nothing beats that.  So we wouldn't have a stream like tonight if everything was written in binary.  Really easy syntax choice there, right?
[03:23:20] .
[03:23:22] Tab source of spaces, right?
[03:23:25] Thank you.
[03:23:27] Sorry. It's just, it's just, it's,
[03:23:33] Thank you.
[03:23:35] I
[03:23:36] It's...
[03:23:38] It's incredible the amount of things and thought that go into these pieces and how non-obvious the outcome is.
[03:23:46] for these decisions may or may not be and the rippling side effects in terms of like the  implications that they have on others.
[03:23:54] Um,
[03:23:57] It's like, it's a very powerful thing.  And it's also like a very like...
[03:24:05] like,
[03:24:06] foray into the unknown like you don't know. So
[03:24:12] Yeah.
[03:24:14] I'm glad that people are continuing to work on things, continuing to make things better, make it easier.
[03:24:20] Um,
[03:24:21] you know, work on the web. And I think that that's, you know, all the articles that we read, you know, like one from Igor and Taylor from this week were both really great stories of, you know,
[03:24:33] looking at it.
[03:24:35] you know,
[03:24:38] like,
[03:24:39] somewhat like working through this for years,
[03:24:42] quite some time. In Igor's case, he's talking about the last decade, but even Taylor's is probably the last two years. And these are like,
[03:24:51] real stories and things that we can learn from.  So, I don't know, I'm just sort of rambling on at this point.
[03:24:58] So, yeah, I don't know if I have much more to say. I just think that it's incredible to see the nuance that comes into the impact of everything from like
[03:25:14] syntax and the way people get rallied behind
[03:25:20] their favorite tools, you know, and the like,
[03:25:24] And, you know,
[03:25:26] the way things have to be for them to feel comfortable for things to work. This is something that is kind of
[03:25:35] It feels sometimes always just outside your grasp as a framework designer.
[03:25:40] And it's almost like fashion.  It just kind of rolls with the trends.
[03:25:47] I'm interested to see where it goes. That's all I've got to say. I think I've given everyone enough time to ask questions, so I'm going to call it a night. The last half an hour has just been me meandering as I usually do, so let's just call it a night.
[03:26:00] I vote Vanilla.js. Yeah. But it was a, like, never bet against Vanilla.js, or now it's never bet against Vanilla.js and Wasm.  But I'm going to keep it with never bet against Vanilla.js. Brendan Eich statement.  Anyways. Yeah, I hope some people got some value from the stream. Thank you all for joining me.
[03:26:22] Yeah. Have a good night all. See you.
[03:26:26] Thank you.
[03:26:28] Thank you.