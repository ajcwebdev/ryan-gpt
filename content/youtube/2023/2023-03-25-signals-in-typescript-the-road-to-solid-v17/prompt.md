---
title: "2fW6JaJHoCE"
slug: "2fW6JaJHoCE"
duration: "5:27:07"
channel: "Local"
url: "file:///workspace/output/ryan-solo-verified-source/2fW6JaJHoCE.m4a"
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
[00:00:00] Hey everyone.
[00:00:01] Welcome to my stream today.  Sorry, just, just, just, there we go.
[00:00:07] I'm
[00:00:09] How's everyone doing today? Come say hi in the chat.
[00:00:12] Plus, you know,
[00:00:13] Get past that Twitch pre-roll if that's how you're joining on.
[00:00:17] See here?
[00:00:20] Okay.
[00:00:21] Cool.
[00:00:24] Today, I want to talk about Solid 1.7.  I've been pushing this one off for weeks.
[00:00:31] Um,
[00:00:32] And I honestly thought it would be released by now, but here we are.
[00:00:37] Thank you.
[00:00:38] *click*
[00:00:38] And that's largely...
[00:00:41] Thank you.
[00:00:42] kind of my own fault because I knew that I was going to make this release all about TypeScript.
[00:00:49] which meant, uh,
[00:00:51] Kind of...
[00:00:52] Getting up to date and understanding where
[00:00:55] you know, we were on TypeScript and, you know, what was possible and not possible.
[00:01:00] Biggest challenge for me is
[00:01:02] I am not a TypeScript
[00:01:05] I am passable at TypeScript. I understand enough to make it work. I've said this many times before.
[00:01:15] If Solid has good types, it's thanks to...
[00:01:18] um
[00:01:19] Otonashi, who basically, if not providing the types
[00:01:26] of cells basically has guided every TypeScript decision in the repo.  So, um, it is not me. I am not particularly good at TypeScript.  I don't,
[00:01:37] think in TypeScript. I don't know if thinking in TypeScript is
[00:01:40] I guess thinking in TypeScript is a thing, right?  It's kind of funny because like...
[00:01:44] I...
[00:01:45] I, uh...
[00:01:47] I previously beef there's like a time gap between like a
[00:01:53] when I was originally doing JavaScript,  and then when I got back into JavaScript,  and in that middle time period,  I obviously used a lot of Java,
[00:02:00] Visual Basic.net and C#.net and C# in general. I was building game engines in C+ and C# as well.
[00:02:10] Those as typed languages
[00:02:12] I'll get.
[00:02:13] TypeScript, I don't. For some reason, TypeScript is like this weird language that's an anomaly to me.
[00:02:19] So, um,
[00:02:22] part of this process for me has been
[00:02:26] talking to people
[00:02:28] who either understand TypeScript better or have a unique perspective on TypeScript.  Because for me, TypeScript feels a lot like art, like painting.  You know, you're kind of like...
[00:02:38] You kind of like...
[00:02:39] get a feel for it and then, you know,
[00:02:42] kind of like painted on as this like
[00:02:45] extra color, you know like
[00:02:48] Bob Ross adding little, you know, green bits to his, you know, trees.  I...
[00:02:57] It's an interesting challenge for me, definitely.
[00:03:07] So yeah, I was seeing some people join up on the stream while we're getting this rolling.  I'm going to retweet here that we're live.
[00:03:15] Where is my stream advertisement?  I don't know if you guys like the thumbnail.  Some people were...
[00:03:21] Let me actually share my screen for a second here.
[00:03:24] Uh, present...
[00:03:27] This is your screen.
[00:03:30] Mm.
[00:03:32] So
[00:03:33] Uh...
[00:03:34] Where are we at?
[00:03:38] Oh, right, I'm alive. I can't show the thumbnail anymore.
[00:03:41] It's all good.
[00:03:43] Yeah.
[00:03:44] um
[00:03:46] Sully me. But yeah.
[00:03:49] This was not a result of me trying to game the algorithm as...
[00:03:54] uh,
[00:03:55] some people might think. I honestly
[00:03:58] usually try and come up with some kind of clever symbolism or some kind of connection in thumbnails,  or I get David to make them, which is, you know, a much better option.  But this time, I literally just couldn't think of a better cover.  I was like...
[00:04:11] This is all about...
[00:04:13] me puzzling over TypeScript.
[00:04:15] So, you know...
[00:04:19] That's... that's...
[00:04:21] That's where I'm at.
[00:04:23] This is the most accurate
[00:04:25] cover I could come up with.
[00:04:28] All right.
[00:04:32] I hope that's right. I always like forget if that's right.
[00:04:40] Sanity check.
[00:04:41] Yeah, okay, we're good. So how are you doing today, chat?
[00:04:48] I'm doing pretty good.
[00:04:49] Luckily for me, I'm
[00:04:51] West Coast.  So, you know, spending six hours on a Twitter space last night with Theo, Dan Abramoff,  Dan Jutan, Sam.
[00:05:01] A few others joined in at various places.
[00:05:03] points, Ben Humphrey, Sophie Albert,
[00:05:08] uh...
[00:05:10] So
[00:05:12] So yeah, it was an incredible stream or space.  It was actually two spaces.
[00:05:17] Each like two to three hours each.  And I don't know, maybe my voice is a little...
[00:05:24] Scratchy after that but luckily for me it was only midnight when we ended and I still had time to work on some stuff, but  Yeah, let's let's see how we're doing chat
[00:05:37] Hey.
[00:05:39] Hey, everyone.  Yeah.  Just catching up.
[00:05:42] I don't like TypeScript at all.
[00:05:45] And you don't even...  Are you a library or framework author?
[00:05:51] Uh
[00:05:54] Yeah.
[00:05:56] No, not late at all. I like wasting time.
[00:05:59] at the beginning here, because we got pre-rolls, and, you know,  I should have some cool intro music, you know, like, coming soon, but...
[00:06:07] This is me on StreamYard. This is about as high-tech as I get.
[00:06:19] Thinking TypeScript is creating interfaces first.  I mean...
[00:06:23] I think a lot of time when design, you can kind of approach design like that.  The problem is what if TypeScript can't represent that interface?  I think this is one of the...
[00:06:32] things I find the most amusing about people who are like really into TypeScript and then people who tolerate it is like,
[00:06:39] People really into TypeScript will tell you that TypeScript is a superset of JavaScript.
[00:06:44] - Thank you.
[00:06:45] Whereas, in my opinion, I mean, it's fine.  It's a very powerful subset, but TypeScript is a subset of JavaScript.  It's just a very powerful.
[00:06:53] Powerful, I realized that you could just like opt out of things and then like use the full power of JavaScript  But no one actually wants to do that and
[00:07:03] pretty much ever. So it's like in practice, it's like TypeScript is a very powerful subset of  JavaScript is the best way to put it, which, you know,
[00:07:12] Having strong limitations is a powerful thing.
[00:07:15] especially from a design standpoint.
[00:07:24] Yeah, I mean, JavaScript was never designed for it, so this is one of those challenges.
[00:07:36] My problem with types is it's fun.  I was creating the most correct types  than writing the code.  Yeah.  See, this is kind of a funny thing, right?  When you think about like meta programming or whatever,  like we've got a program to program our programming language.  Like we get into this kind of zone where it's like  you can actually just spend...
[00:07:51] you know,
[00:07:52] Hours perfecting the like...
[00:07:57] this layer on top of the actual functionality of the code without actually  changing the functionality of the code.  I definitely found that when I was working,  um,
[00:08:06] When at least on my first TypeScript code base large one when we were writing a new react app and my startup is that  I
[00:08:15] All in TypeScript on the client and the back end. The back end was actually really easy, but on the client we  Definitely were learning things as we were going so like we spent an enormous amount of time just like trying to perfect how types worked and
[00:08:35] Yeah, yeah. Yeah, exactly. That's the thing. There's like different styles and different things. So you can definitely think about it like the painters. Yeah, I like this.
[00:08:57] You can do that parasocial, that's better than being called someone I suppose.
[00:09:02] uh,
[00:09:09] Thanks. Yeah.
[00:09:10] Um,
[00:09:12] I made that one myself too, so this might be the best thumbnail I've ever made.
[00:09:23] I'm not.
[00:09:26] Alright, how am I doing chat? Oh, we're already 10 minutes in, geez. We wasted more time than usual.
[00:09:42] that's the thing.  You're always going to find these exceptions.  And it's, it's, it's, I've learned a lot about TypeScript in this process.  And that's kind of why I wanted to share it.  Like we're going to cover the 1.7 release and look at the features and how I  develop them, which is always fun.  Some of my people's favorite streams, especially after the fact,  like almost these streams always get the most watched because like I go into  how I build the framework or approach the design problems.  But this one just felt like it had that TypeScript element to it.
[00:10:14] I wish people listened to me. Is this, this is, this is about the,
[00:10:17] Uh...
[00:10:19] the recording.
[00:10:21] I suppose.
[00:10:23] How about that Twitter space?
[00:10:24] Yeah.
[00:10:25] I
[00:10:26] uh,
[00:10:27] Yeah, it's so random too. Every time this happens, and I'm sorry we never advertise, it happens really randomly.
[00:10:34] It's happened twice now with Dan Abramoff, but we've had a few other of these runaway ones where like it'll start with like Jacob.
[00:10:41] or Theo, but
[00:10:43] just doing a random stream talking about a topic.  Like, hey, I want to talk about blank.  Theo did this, I want to talk about server components space
[00:10:51] I want to say...
[00:10:53] Cha-cha-cha.
[00:10:54] maybe it was like a week, two weeks ago,  like at the beginning of like everyone talking  about server components again.  And you know, we just hung out and talked a lot about
[00:11:05] We didn't get really technical.
[00:11:07] I was there, but I was trying to hold back. And we just kind of talked about, you know,
[00:11:12] DX and how this is like a
[00:11:14] new thing and looking at how people create content and all this kind of stuff. But then what happens is
[00:11:22] They're having this debate because, I forget his name, but someone's on the space debating the merits of...
[00:11:29] Svelte's DX versus React's DX.  And I was like, okay, I'll bite.  Because I'm actually a pretty big supporter of React's developer experience.  I understand where Svelte comes from, but there's trade-offs there.  And...
[00:11:42] At a certain point while I'm talking and I see Dan in the audience, you kind of bait people up. We were talking about dependency arrays and it's interesting, the shift of React from being explicit to maybe being more implicit, especially with the compiler. And then actually Dan's there and we just...
[00:12:02] kept on going. So...
[00:12:04] You know not planned completely impromptu.
[00:12:08] You know so
[00:12:10] Yeah, it's tricky.
[00:12:13] The recording would have been good. We talked about a lot of stuff. I mean a lot of it was like you could have to listen to it twice to really let it sink in which is probably why the recording would have even been better.
[00:12:24] I learned things, which was huge for me because it's sometimes hard.  There's like a couple...
[00:12:30] details that I almost have to be in a conversation for an hour or two to actually get around to to be like
[00:12:35] Wait a second.
[00:12:37] Let's clarify that.
[00:12:40] Um, yeah, sorry, enough on that. I'm probably giving people even more FOMO about it.
[00:12:44] Thank you.
[00:12:45] Thank you.
[00:12:48] We'll talk about it maybe a little bit later in this week in JavaScript, about any kind of specific elements of it.
[00:12:58] When do you sleep? I'm dead at midnight.  Yeah, I was starting to get pretty tired.
[00:13:06] Yeah, and TypeScript can't assume things.  I think ultimately where we land is...
[00:13:14] understanding that. And actually, I'm going to tell you, Greg, Rust has been
[00:13:19] more and more of the influence of my decision making recently. Because Rust has been showing me
[00:13:24] you
[00:13:25] What the...
[00:13:25] almost complete opposite mindset looks like.  And I noticed it the second that you showed me  how to code and rust on a previous stream.  For those who haven't checked it out,  Greg joins me on stream about, I think in December,  talking about his library Leptos, which is a
[00:13:44] It's very similar. It uses the same kind of foundation fundamentals as solid, but written in Rust and WebAssembly.
[00:13:52] and he was teaching me Rust  because like...
[00:13:55] I understood the reactivity, I understand the model, I understand the rendering, I understand how that works.
[00:14:00] in that way we could build something and the only difference i had to worry about was the language  pieces rather than like the rest of the functionality because like there's differences  but leptos to solid are very close on like a surface one-to-one kind of basis and the one  thing that i really stuck stuck with me with the rust stuff was like how explicit and like how you  had to like work around stuff to make it happy but when you made it happy you knew you were done
[00:14:30] back and
[00:14:32] I realized watching the trend with people in TypeScript that
[00:14:38] This is what we want.  It's that shift left.  Get errors while I'm typing.  The sooner you can find them, the better.
[00:14:46] And intuitively, we know this, but, you know, this is very different.  I came from a, you know, sometimes like...
[00:14:55] when people at the beginning you want those guardrails you want them they're fixed when  you're a bit like maybe more like senior developer you you know that there's
[00:15:04] Uh...
[00:15:05] There's...
[00:15:06] There's exceptions to every rule.  So getting warned or getting pestered about stuff  that you know that you can get around  and you know what you're doing,  it's really, really annoying.  And when I built Solid,
[00:15:18] I just inherently brought that mentality with me.  There were rules, things I was very strict about, because I understood the importance of them.  But there are other things where I was like...
[00:15:29] You know, I'm not going to stop you.
[00:15:31] - Thank you.
[00:15:32] And...
[00:15:35] After the whole signals, like where all the React core team kind of came out and like Devin from Parcel and a bunch of them were kind of like poking at like our model, I started thinking like,
[00:15:48] Maybe the Rust approach is just more clear to people, because it's not like what we're doing is actually breaking anything, but how do you deal with ReactBrain? I actually loved last night in the space, Dan admitted, or can I put out there, that ReactBrain was real.
[00:16:06] how do you how do you know like if this is kind of guided the ecosystem and people  see stuff in a certain way even if it's not like
[00:16:14] necessarily...
[00:16:15] the truth or the only way to look at something,  how,  how do you like give them those tools?  Right.  And what came out of that discussion was,
[00:16:23] was that Dan basically was like, yeah,
[00:16:25] He's like, when I went and played with Solid,
[00:16:28] Um, let me reset this. What is this? I don't even remember. Okay. Yeah, this is from previous stream.  He goes, "When I go play with Solid now and I do this,
[00:16:38] ESLint tells me that this is no good.
[00:16:41] Uh, sorry, let me move this over to my screen.
[00:16:45] Here, let me get this. Yeah, sorry. Where I was going here is when I...
[00:16:49] like...
[00:16:51] If...
[00:16:52] When he first tried solid...
[00:16:57] This wouldn't warn or do anything.
[00:17:01] It's a simple thing like this, but this kind of guideline, right?  When you get that first counter, like if you come in and you think you're using React and you go, okay, yeah, count, set count, increment, button,
[00:17:13] Count.
[00:17:14] and you just kind of go here this
[00:17:16] first squiggly line
[00:17:18] is the best thing possible from my perspective. Because
[00:17:23] Technically
[00:17:25] and I can get into that a bit later,  Solid actually accepts the functions directly,  but we don't want you to.  It's non-edimatic for lots of reasons.  And...
[00:17:34] This is like the first indicator like, hey, you're in a different...
[00:17:39] place. Like this is not React anymore. And I started thinking about the effect of that on tooling and that
[00:17:47] basically is what guided me to deciding what we should put in solid 1.7.  That's,  that's the kind of origins of solid 1.7.
[00:17:57] um
[00:17:59] -
[00:18:01] It's my wife. Yeah.
[00:18:06] That's not true. I sleep some...
[00:18:12] Yeah, just catching up on chat.  There's a lot of you.  Everyone has a TypeScript story, right?
[00:18:16] My team is knowing the right functional code, you know.
[00:18:24] Yeah, like
[00:18:25] Sorry, I put that down too fast.
[00:18:27] Luke.
[00:18:28] Like you said, the subset, not a Super Saiyan. Okay.
[00:18:33] Don't get me wrong, TypeScript is incredibly valuable. I'm not a TypeScript hater, I'm just a TypeScript realist. Like my example here, TypeScript is just the best linter that we have. It's the best auto linter.
[00:18:48] I'm...
[00:18:49] I have to admit, I don't trust
[00:18:52] TypeScript completely because I'm aware of all the places, not all the places, but many of the places it breaks down.
[00:18:58] But in those cases, the proper answer is like,
[00:19:01] be less strict, don't lie. And that's been kind of the challenge that we've had to play through here.
[00:19:15] Alright.
[00:19:19] Let's keep on going.  Elixir.  People are talking about Rust because I was waxing poetic about it.
[00:19:28] Yeah, if you have any misconceptions about where or questions about where Wasm is, I do really strongly suggest watching one of Greg's videos. He let me see if I can find one right now for us right now. Let's see. I don't know. Is it just Greg?
[00:19:43] Maybe I should go to Twitter.  I can find it.
[00:19:45] I'm not going to find Greg Johnson.
[00:19:48] Greg Wasom.  Maybe...
[00:19:51] Here we go. See, Greg Wasm. That can be his name.
[00:19:57] Truth about Rust and Web's assembly performance  Here you go
[00:20:00] Get rid of that timestamp because you are not me and you don't need to jump to where I was watching the video. This video
[00:20:08] is great and it clears up a lot of the misconceptions. It's true. Wasm doesn't directly interact with a DOM, but that's actually not where the bottleneck is.
[00:20:17] So yeah, check this out.
[00:20:20] on.
[00:20:35] Yeah, the thing is
[00:20:36] I've never really used a lint you gotta this is coming back to my whole thing, right? I  If a linter would even yell at me once in a place where I'm like, no, I want to do that  I just feel like throw the whole thing out like I'm I
[00:20:48] You are not helping me.  And I even felt a little bit about that with TypeScript.  But, like, linters notoriously have annoyed me.  But I'm, you know, you can't teach an old dog new tricks.  Like, I like to think that...
[00:21:05] I'm as open-minded as I can be given how ancient I am when it comes in the scheme of web dev.
[00:21:17] I, I, this is the only reason why it's not present. Because I, like, I never trusted that it wouldn't annoy people. But I think people don't mind being annoyed.
[00:21:25] They're kind of like used to it now.
[00:21:27] Like that's the difference.
[00:21:36] Don't have ad blocking? Nah.
[00:21:42] I mean, I have some ad blocking, but not specialized.  Actually, on this computer, I don't even have it.  I think that's where you hit it on the head.
[00:21:53] And
[00:21:54] This is the thing, though...
[00:21:56] It's kind of like one of those like
[00:22:00] *sigh*
[00:22:01] Sometimes,
[00:22:03] Going to the opposite extreme is acceptable. It's just the middle ground that sucks.
[00:22:08] I think that's the best way I can put it.
[00:22:11] Compromise is like the worst.
[00:22:13] So when I saw Rust, I was like, okay, this is a different model
[00:22:19] consistently true to itself.  It's kind of like, this is how I'm able to appreciate  things like React.
[00:22:25] Um...
[00:22:27] It's when you get messy in the middle that I have less patience.
[00:22:31] Probably why I've had you know
[00:22:33] a harder time of view, for example.
[00:22:36] And
[00:22:38] Yeah, it's tricky though because no one's completely in the middle or completely on side. This is always a gray spectrum, but it's the perception.
[00:22:59] Yeah, I mean, that's a hard line. And I feel like that might be the final answer, you know?
[00:23:06] We talked about a strict mode stream or two back, you know, like maybe
[00:23:11] I mean, that's a runtime mechanism, but still, maybe we should be okay with being...
[00:23:19] Like not a warning be like no like you're done you know.
[00:23:26] Anyway,
[00:23:28] Enough on that.
[00:23:31] Let's get started here.  Because...
[00:23:36] I mean, we're already getting started, so let's just keep on rolling.
[00:23:41] Kind of put 1.7 in the spectrum and I don't have like the full like nice release notes. I just have like the...
[00:23:47] the changelog that's nice, and this will become like the release article, but it's just like the rough version.
[00:23:54] Put it simply, where solid 1.7 kind of fits into the...
[00:23:59] the timeline of things here is that solid
[00:24:02] 1.0.
[00:24:04] Took a while to come out because I delayed it for server rendering.  I knew we wanted server rendering.  So in 2019, instead of just going 1.0, I spent another two years doing a bunch of server rendering stuff.  The truth was I didn't actually finish that story until solid 1.3.
[00:24:21] So everything from solid 1 to 1.3, like in my head, was the true 1.0.  But like anyone who knows when dealing with deadlines, you just...
[00:24:30] put out what you can and then kind of get there in the next couple of releases. And you might be like, why is there a deadline? Well,
[00:24:39] I wanted to get to a point where people could trust using solid in production.  And that's an important milestone to hit.  So...
[00:24:47] you know,
[00:24:48] We were pragmatic, practical about it, decided on pretty good API choices, and got all the  way through solid to solid 1.3, which is...
[00:24:57] all in the first six months of that, I think December 2021 was when solid 1.3 came up.  But 2022 was a much more interesting year because
[00:25:08] At that point...
[00:25:09] It was...
[00:25:11] it was like, okay, roughly we're going to start working towards a solid 2.0,  but now people are actually using this thing.
[00:25:18] We start finding the quirks, things you only find when people are actually using stuff  in production, you're actually getting downloads, you're actually building real projects that  aren't hacker news clones, or real world demo, or to do MVC.
[00:25:34] I guess MovieZap is a new one. Like when you're just not building like the simple
[00:25:37] basic things. The basic ones are good  in showing like
[00:25:40] I have all the features I need to tell the story, but they're not good to handle like, you know, what random developer decides is a good idea to do.
[00:25:48] And this led us to, in Solid 1.4,
[00:25:54] I'm not going to be able to do that.
[00:25:55] kind of
[00:25:56] doing our first check of like,
[00:25:58] oh, there's some inconsistencies in the model,  specifically around the way we were batching updates.  So we did some work there.  Unfortunately...
[00:26:07] the fix, which made everything more correct, you know, from like the...
[00:26:11] Thank you.
[00:26:12] I don't know what term used the word, the React use of the word correct, I guess, or whatever, the functional programming use of the correct. It actually broke a bunch of our stuff.
[00:26:21] and
[00:26:23] I, uh...
[00:26:25] It wasn't the stuff that I used, right?  This is the kind of thing.  It was like people using things like CreateMutable,  which again, we're already kind of warned,  like you probably shouldn't be doing this.  But take my philosophy.  I was like, you know, coming into 1.0,  I was like, look,
[00:26:37] I can't stop people from doing stuff.  So...
[00:26:40] Should I let them go do that stuff themselves...
[00:26:43] or should I just write it myself so that they have a good version of it? That was my thinking.  If people are going to want a mutable proxy, they're going to hack together some terrible stuff potentially.
[00:26:54] until they figure it out or learn what they need to, why don't I just make it? And we hadn't really established solid
[00:27:02] Primitives at the time so we didn't have a really good home solid primitives if for those who haven't seen is a
[00:27:08] this
[00:27:08] amazing collection of
[00:27:12] of like, it even has its own website now,  of like hooks basically,  or you know, that you can use with Solid.  It's a full...
[00:27:21] set of different libraries and
[00:27:27] like mini packages to do all sorts of patterns
[00:27:30] in your Solid app.
[00:27:32] and
[00:27:34] Essentially, with that kind of home, I was just building stuff in core that...
[00:27:41] maybe wasn't the most core, but was common enough, or people complained about enough. And I didn't...  Here's the thing, when you're building with primitives, you can kind of get away with it a bit, because like,
[00:27:53] if it's not too entangled with the rest of the system,  you can always move it to a different package later,  deprecate it, replace it, whatever,  because the primitive itself is really modular.  So like...
[00:28:04] It's not like, I didn't feel too tied down to it, you know.
[00:28:09] if one day I didn't
[00:28:11] want create mutable somewhere we could find a new home for it and then people just have to update  their imports
[00:28:16] You know, like, that's not a...
[00:28:17] Difficult.
[00:28:18] you know,  code mod or whatever that would need to happen.  And,
[00:28:23] Essentially...
[00:28:25] That was kind of the situation where...
[00:28:29] I was...
[00:28:30] very much focused on what we were doing and the vision.  And missed that I had introduced a few things that
[00:28:38] maybe I personally even didn't like and kind of broke it.  So 1.5, we kind of fixed that up, got ourselves in a good place,  and gave us a better understanding where we wanted to head for the future.  That's when we understood that we wanted to do lazy,
[00:28:51] change the batching for 2.0, do a lot of
[00:28:54] you know, kind of like really define our model. And we created the solid working group on reactivity at that time, and started the conversation. And since the summer, we've been working on solid 2.0's new reactivity model.
[00:29:09] -
[00:29:11] But after that, it wasn't really clear  like if there would be any more releases  and what they would look like.  So like solid 1.6,
[00:29:19] had some stuff, but it was mostly to support partial hydration and server components in Solid.
[00:29:24] And we did a great stream on that.  So it was pretty cool.  But 1.7...
[00:29:29] Similarly, I wasn't sure what it was going to be. It looked like it was going to be some dev tooling improvements and performance improvements for our dev tools. For those who haven't seen it,
[00:29:37] I've shared it several times on stream, but solid dev tools are really coming along and they have the ability to visualize the reactive graph, which is crazy because then you can like see with any change you make, you can actually see it propagate through your app.
[00:29:52] It's not a component thing. It's like you can see the flow of data. I mean, this component
[00:29:56] tree as well so you can like have both views but really really quite cool
[00:30:00] And...
[00:30:01] So
[00:30:03] You know, understanding all of this stuff,
[00:30:07] Honestly, as I said, it wasn't until that whole signals thing that happened that I was like, okay...
[00:30:16] The gist of it was...
[00:30:18] Yeah, sure. ESLint.
[00:30:21] squiggly line, but
[00:30:23] Why?
[00:30:24] can't types why isn't that why is that a yellow line there why isn't it not a red line
[00:30:30] Why can't TypeScript?
[00:30:32] B.
[00:30:33] be that? Why can't we just use the best linter we have available that almost everyone's using in every project?
[00:30:41] I got some notifications on Twitch.  Sorry, catching up.  Thank you.  Insanity later with tier one subs for six months.  What else do I get notified?  And JulianNG, another tier one subs.  Scribed for three months now.  Thank you so much.  I very much appreciate you coming back with the subs.
[00:30:57] with PrimeSub.
[00:31:00] Three months. Yeah, a lot of people, I guess new crew kind of come in.  Gabriel, well, there's been a whole bunch of subs.
[00:31:06] Uh...
[00:31:08] Thank you so much.  Sorry for not keeping up with Twitch.  I really appreciate you guys taking the time,  show the support,  and also save your guys from those terrible, terrible ads.  They're not that terrible, but I'm just not...  I was thinking about doing what...
[00:31:23] other streamers do where they take a pause for an ad break and stuff. I just never, you guys know how the stream goes, just like streaming conscious off the top of the head. Especially when you have guests, I find it really hard. If your guest is for like 30-45 minutes, you can make a scheduled pause and I guess you can kind of work that into your flow. But like,
[00:31:39] Yeah, I don't know.  I feel like...
[00:31:43] Yeah.
[00:31:44] It's too much for me to think about.  Oh, thank you, Kyle.
[00:31:47] for the prime sub. Very nice. First time sub here. Yeah.
[00:31:52] Alright.
[00:31:59] Create signal needs better types.
[00:32:02] Probably. I don't know.
[00:32:07] That might be true as well.  CreateSignal seems like a fairly...
[00:32:12] simple primitive
[00:32:14] to type from the like,
[00:32:17] like the basic sense, the problem with signals is a little bit trickier.
[00:32:23] And we should get into that. But for me, this is where it started. You start kind of going,
[00:32:30] can we do more with the tooling to indicate
[00:32:34] that, you know,
[00:32:36] like right from your first experience that you're in a different...
[00:32:40] paradigm. I also started getting interesting issues on GitHub, okay?
[00:32:45] Can I, can I like, let me show you, show you one of those interesting issues on GitHub.
[00:32:50] People would do stuff like this.
[00:32:53] and
[00:32:56] And, okay, see this works? Because I told you, solid accepts functions technically, because it needs to because of dynamic control flow. It needs to, like the function or the signal, whatever, has to get down to the rendering. But...
[00:33:10] This makes no sense.
[00:33:12] from my perspective, or anyone's.  Why should a DOM node accept a function as children?  And what if this is capital button?
[00:33:23] Do you know...
[00:33:25] What
[00:33:27] Button does with its children.
[00:33:29] Like...
[00:33:30] One of the biggest things that people...
[00:33:33] Shh.
[00:33:34] probably know about solid
[00:33:36] But...
[00:33:37] - Yeah.
[00:33:38] But, you know, just in case you didn't, is that...
[00:33:45] I'm just gonna...
[00:33:46] fake it right now.
[00:33:50] It's fine. We have a component type and stuff, but...
[00:33:53] is that  like...
[00:33:58] I guess I'm not going to do the whole TypeScript thing.  But the thing that I want to kind of point out here is...
[00:34:06] Yeah, actually this is a terrible example for pointing it out.  Because it's like...
[00:34:10] native element
[00:34:12] Um...
[00:34:13] I'm
[00:34:14] Let's just make another component that just has a simple value on it, something like
[00:34:19] value
[00:34:21] you know, is a string or something, right? Okay. And when I want to point out
[00:34:27] and I've probably shown this on stream a bunch before,  but if our...
[00:34:33] let's just call it like comp.  If our comp here,
[00:34:41] takes a value,
[00:34:47] I think it's like that, right?
[00:34:49] My problem is I gave it children.  It's my fault.  Um...
[00:34:55] Ah.
[00:35:03] Whatever. Okay. If...
[00:35:06] If I give it a value here and I pass D, you access that value by doing props.value, right?
[00:35:13] And
[00:35:14] Actually, I'm not gonna call it value. I'm gonna call it something else.
[00:35:18] Just call it something.  The reason I call it something is 'cause some reactive libraries use .value as some special property.
[00:35:25] I'm going to do it like this.  What I'm saying is
[00:35:28] This is stringer_undefined.
[00:35:31] Instead,
[00:35:32] of passing it as a string.  I took count, right?  I'm just gonna complain.  Whatever, to string, I don't really care, okay.
[00:35:40] it's still props.something, right?  And the reason we do this is
[00:35:47] that we're not passing a signal, so to speak,  is so that you have this locality.  You don't actually need to worry about how comp is...
[00:35:57] passed. Don't worry whether the parent passes something reactive or not.
[00:36:02] Just decide for yourself as the component author here, does it need to do something reactive?  Well, yeah, I put it in this create effect.  And now...
[00:36:12] you know, it does something reactive.
[00:36:15] *sad*
[00:36:19] Right? And
[00:36:22] Like, or it goes into JSX binding.  You author with this local mentality.  You're not like tracing through your whole app.  There's this local thing that...
[00:36:31] Like local thinking that goes into this and this is really really important to me. I didn't want an is signal or whatnot
[00:36:39] but
[00:36:40] The reason I'm...
[00:36:43] getting at this, uh, is that, uh,
[00:36:47] Understanding
[00:36:49] This. Sorry.
[00:36:53] *sad music*
[00:36:56] Thank you.
[00:36:58] Okay.
[00:36:59] *sad*
[00:37:00] -
[00:37:03] Thank you.
[00:37:04] Yeah, why was I getting at this? Sorry, I got distracted for a moment with the chat.
[00:37:08] - Okay.
[00:37:12] Mmm...
[00:37:14] I actually don't remember, but I'm sure it'll come back.  I think this is an important piece of prerequisite knowledge, though, to understand...
[00:37:21] Um,
[00:37:23] basically the way props work and the locality of it.  You need that as a prerequisite to get into the rest of this conversation.
[00:37:32] Right. Oh, yeah. I was talking about about about this. What I'm getting. Yeah, exactly. The, you know, thank you. This is this is where I was.
[00:37:42] Thank you.
[00:37:42] chat.
[00:37:44] because
[00:37:45] Like...
[00:37:50] Sure, if a DOM node might know what to do with this,
[00:37:54] But how is this poor component
[00:37:57] supposed to know
[00:37:59] what to do with it.  Like, it might just insert it in the DOM,  so it's like, who cares?  But why should a random component...
[00:38:04] know how to handle
[00:38:06] a function because we pass values
[00:38:08] not functions.
[00:38:10] That's the...
[00:38:15] Like that's like...
[00:38:17] what we do here because of that locality of stuff.  So this actually has not really any meaning.  It gets inserted, it would work,  but it's actually really quite awkward.  And I got an interesting issue on our GitHub, which was,
[00:38:33] I mean, this issue spans more than...
[00:38:35] Like
[00:38:36] this is like a general thing.
[00:38:39] But...
[00:38:41] Thank you.
[00:38:42] and
[00:38:44] They were like...
[00:38:44] When I have suspense, where is it? Yeah, playground example.
[00:38:49] Yeah, here we go.
[00:38:52] See? Suspense wrapper.
[00:38:54] this, which is
[00:38:57] Like, I don't know what the D is there for.  I can't remember.  But...
[00:39:00] Where's suspense wrapper in this one?  Suspense wrapper...
[00:39:04] Okay, so...
[00:39:09] But
[00:39:10] basically...
[00:39:13] Having gone through multiple components...
[00:39:16] Um, I think this was them just playing with something.  Um...
[00:39:20] Like, who--
[00:39:21] anybody could insert in the dom or intercept it like unless the component is expecting a function
[00:39:29] We shouldn't.
[00:39:31] just randomly expect it to work. This puts onus on each component to handle it. And the,
[00:39:39] Yeah, I just--
[00:39:40] Like this whole thing is really weird to me. And I think it's really rooted
[00:39:45] in that first example at the very, very beginning, you know, when we go back to like, I'm going to erase this now, but when we go back to the beginning here,
[00:39:53] And you did this.
[00:39:55] That is the root of
[00:39:58] of this problem.
[00:40:01] Like...
[00:40:11] Something something don't want his signal.  It's important though because like...
[00:40:17] - Yeah.
[00:40:19] *sigh*
[00:40:20] Maybe I'm not doing the best job of explaining it, but as soon as you start having to account for that,
[00:40:27] Like you don't get to live in this world where
[00:40:31] you know,
[00:40:32] Everything can be reactive.
[00:40:34] It's funny, this is something that myself and the React team actually share in common.  We just have a slightly different view of what it looks like.
[00:40:40] Um,
[00:40:52] Like from a props perspective, yeah, like why not?
[00:40:56] Like, the JSX has to.  If it's a function call or property access,  it has no way of knowing whether it should wrap it or not.  It doesn't, like...
[00:41:07] Because you can always...
[00:41:10] Do this.
[00:41:11] Like, this property of solid
[00:41:15] is
[00:41:16] very
[00:41:17] Important.
[00:41:18] to me.
[00:41:22] Because it gets away from, like, explicitly...  Like, if you go the other way, you have to, like...
[00:41:29] make wrapper after wrapper after wrapper, you know, of these computations and stuff.  And it's like the over-memoization. It's like, what happens if you memorize everything?  Sometimes you don't. It's too expensive. The fact that this...
[00:41:42] just works, you can just double count it.
[00:41:45] means that this...
[00:41:47] isn't a signal, it's not identifiable as a signal,  but it's purpose.  And in a sense, any expression in your JSX
[00:41:56] is the same thing.
[00:41:57] This is like how we reduce the cost.  Like if we had to memoize every single prop and do you do memo,  if you memoize every expression you do,  and then we memoize every single prop and like,
[00:42:08] I mean, luckily we're getting smarter in our reactive systems.
[00:42:12] are getting more efficient so that like blowing up the world that way
[00:42:16] isn't as expensive in the past, but like...
[00:42:20] And our compilers will probably move to be more lenient that way for that reason.
[00:42:26] I didn't want that to be a fundamental caveat of the system, so to speak, that you couldn't just do this.
[00:42:33] you know,
[00:42:34] Which is a big part, that's why I'm talking about this right now, because it's a big part of understanding why functions are so much better than dot value.
[00:42:41] And why people who feel this way
[00:42:44] It's not even a debate.
[00:42:48] Which is interesting because I know there's, you know, libraries that think differently and we'll talk about those in regards to TypeScript soon.
[00:43:03] Right. We always pass down observers if we expect the component to modify them. Right. And that's the thing. I want to keep unidirectional flow. This is the other reason. By separating the count from the set count and by forcing values to keep things localized, this scales better for your mind and it enforces unidirectional flow.
[00:43:25] We talked a lot about this on the last couple streams with Dan and stuff.  I just wanted to kind of like...
[00:43:31] Put that out there.
[00:43:37] Thank you.
[00:43:37] There's a way you can skip thinking about TypeScript.  Just let people write React,  forget it and compile the solid.  The funny thing is,
[00:43:44] React itself, like the language today with hooks, is really hard to be like the compile source.  Mitosis does miracle work, and even then it has gaps.  But if you can reduce the possible syntax of React, get rid of all the memoizing stuff,  and just leave their intent, it looks like a reactive system.  At which point, compiling React forget to solid...
[00:44:00] it's actually a much easier prospect than...
[00:44:03] than compiling React today to Solid.
[00:44:08] A.K.A. Svelte, yeah. Good call.
[00:44:12] Main argument for job value is TypeScript. We're going to talk about it today. I accidentally think the TypeScript argument is good, but I think TypeScript is actually the main...
[00:44:23] Like,
[00:44:24] the main argument towards doing it. There's also people like mutation.
[00:44:30] Um...
[00:44:31] But for me, I'm very much in the school of unidirectional flow. Two-way binding is not a good thing, so to speak. I think there's even context to the discussion. I saw Quick added two-way binding, and I started writing an article to explain the nuance there.
[00:44:47] Um, but I never finished it, you know, too busy talking to people about TypeScript.
[00:44:55] Yeah, that's a great question. We're collecting the list now. That's the thing. It's starting to happen. I remember, you know, like,
[00:45:04] It's not like a huge number, but it was actually kind of funny.  I saw some stats or something, and it was shared.  I remember it was a netlify, and I'm going to give you numbers because I'll obviously, you know,
[00:45:15] privacy thing.  But they were looking at the numbers,  and Solid had a lower usage than, say,  a lot of the other frameworks,  especially the stuff like Remix or Next, obviously, and stuff.  But what was surprising was...
[00:45:29] Solid's enterprise usage was actually higher than some of the like
[00:45:32] smaller of the big frameworks than you'd expect it. So like there are people using us out there. It just we're still like we don't know that we have to go like
[00:45:39] Ask them.  People have just been starting to use it.
[00:45:46] I mean, the irony is not lost on me or anyone, I think, except for those guys on Reddit who, when I tried to explain this, didn't get it.
[00:45:55] But, you know...
[00:45:56] That's Reddit for you.
[00:45:59] I mean, don't get me wrong, JSX TypeScript...
[00:46:03] is
[00:46:03] painfully, painfully bad.  And I'm not going to...  We can take a quick jaunt into that,  but I don't...  I don't...
[00:46:09] want to distract too much where I want to get to.  I want to talk about reactivity.  But like this...
[00:46:15] Thank you.
[00:46:16] is
[00:46:18] Like,
[00:46:19] What's div?  It's JSXElement.  There is no way...
[00:46:23] I mean...
[00:46:24] except for me to tell it.
[00:46:25] -
[00:46:26] to tell it that's an HTML, sorry, div element.  To actually do, like, there's no way in TypeScript  to actually type the div to return an HTML div element.
[00:46:38] There's an open issue, we've been following up, they said it would be complicated, but  just the way the types work in JSX and TypeScript, you cannot actually just
[00:46:47] Like...
[00:46:49] do this and end up with a development.
[00:46:51] It's just not possible.
[00:47:00] - Yeah.
[00:47:01] Yeah, I mean, we tried to work with Reskip. The problem with them is, again, like certain tooling assumes that everybody compiles JSX the way React does. And it's kind of funny because React changed the way they compiled JSX. Not everyone follows suit even. Like it's hard to move the tooling that makes those assumptions.
[00:47:15] And, um...
[00:47:17] It's funny, in the future, I expect more changes to compile JSX, because JSX is actually quite capable to be analyzed for, you know, compilation. It's like a decent language, even though it's not like a custom DSL. It's a little bit more permissive, which makes it harder, but it actually does that well. And the problem is like...
[00:47:33] rendering hyperscript
[00:47:34] like the way we like the standard way is just not optimized it will never be optimized so like  generally speaking everyone who's working on this compiler stuff like they know kind of like that  can't be the end game you know i was covered last week a bunch of like vdom libraries that have been  improving the performance stuff like block uh dom and uh million js and uh the latest version of ev  like these smaller vdom libraries are like right up there solid on javascript performance and
[00:48:04] compilation of JSX.
[00:48:06] Like, that's, and so is Inferno.  Basically, anyone who's performant,  just doesn't use JSX the way all the standard tooling supports.  Knowing that,
[00:48:15] Like,
[00:48:17] it seems like kind of obvious to me that all these people trying to like put it in the browser all that like like
[00:48:22] That's like not the thing, you know what I mean?  Standardize it.  Like, build it into Dino.  Like...
[00:48:27] No, not a good idea.
[00:48:37] I struggle with JSX, but I like JSX. Picture if I didn't have all the tools. On the parser stuff, I built custom template DSLs, like string based or whatever you want to call them, like Svelte style, and then I pulled the acorn in and did that whole thing.
[00:48:53] GSX is really great and anyone can just get it out of the box, you know, you just like
[00:48:57] Fire up Babel. You're good to go.
[00:49:01] I struggled with it because of the opinionated tooling,  like the next level up, the typescripts,  the prettiers and all that stuff.  But even prettier was fine, like code highlighting.  Once I gave in a little bit and conceited,
[00:49:11] Honestly, TypeScript's the only problem, but I mean, that's the common thread here, right?
[00:49:18] Yeah, I mean, div as a div as const isn't
[00:49:21] Maybe I missed the rest of the thing.  Um...
[00:49:27] Interesting.
[00:49:35] Huh.
[00:49:36] *sniff*
[00:49:36] Maybe there's something to that.  But anyways, it doesn't work, but maybe...
[00:49:42] Yeah, it would be neat.  Yeah, there's the rest of the sentence.  Yeah.
[00:49:45] Mm-hmm.
[00:49:49] I mean, this is a whole stream.  I'm not going to cover it right now.  Lots of little things and a couple big picture things.
[00:50:01] I mean, for climate,  I think very much will come close.  I think that's the thing.  In the future, they're going to come close.  I just don't think we're going to get
[00:50:09] considerably faster.  Like, I...  The...
[00:50:13] Like,
[00:50:14] it depends on like how you measure and how you benchmark.  Like Inferno had basically got there.  And it's funny right now,  Inferno and Solid are almost like,
[00:50:23] like next to each other, but that's because of like warmups and stuff. But for the longest time,
[00:50:28] Stuff had gone to inferno level performance.
[00:50:30] And then like Solid was like this little bit more than that.  And we've been stuck here for five years.  I don't expect anything to move.  I think what you're seeing is other ones catch up.  If you release the View Vapor, I am pretty positive they will be right up there with Solid and Inferno and all that stuff.
[00:50:46] I'm less confident about React Forget, but...
[00:50:49] It will be, I'm sure it'll be significantly better as well.  So everyone's just getting faster.
[00:50:53] But we are kind of maybe at a local maximum, and it's really up to the browser to make our performance any faster.
[00:51:06] JSX isn't perfect, but it's free. Yeah, there we go. Thank you, Michael.
[00:51:12] -
[00:51:20] Yeah, and that's fair. That's the way we're handling it. Although I've thought about handling it in a different way, which is cool. But yeah.
[00:51:25] I guess I...
[00:51:27] Yeah, that's interesting.  I've been playing around the idea that div is actually a bind instead of a call, but I'll leave that for another time.
[00:51:37] Wasm is fast enough today.  It's not the performance of Wasm that's holding it back in terms of like...
[00:51:44] DOM updates or stuff, what's holding Wasm back is you've got to load it into the browser. It's big, it's slow. You're not going to build your e-commerce site doing that. There's a lot of websites that barely need JavaScript and definitely don't need Wasm from that perspective. Faster Wasm frameworks are closer to solid in performance than Vue, Svelte, React, any of the major frameworks.
[00:52:14] I think the WASM update performance thing is just not true anymore.
[00:52:20] Okay.
[00:52:23] I don't know.  That's a great question.  That's why I didn't like quite fit in.  Um,
[00:52:31] *laughs*
[00:52:32] Thank you.
[00:52:33] Ooh.
[00:52:36] yeah,  Dioxys, to my understanding,  uses this block compilation  that I was talking about,  like, blocked all my millions  and all that,  and it's Wasm,  and it's...  Ed and Leptos and stuff  are right up with us,  you know, like...
[00:52:49] few steps behind, but like, maybe, and maybe when Wasm gets Dom access,  it'll be a few steps ahead, but that level of distinction isn't like,
[00:52:57] Why...
[00:52:59] like people are choosing to use or not use Wasm at this point.
[00:53:03] Yes.
[00:53:04] Okay.
[00:53:06] So...
[00:53:08] I hope I kind of laid out the problem a bit.  So I'm going to skip the controversial one.  I mean, it's all controversial.  And just kind of go straight into...
[00:53:21] I already gave the counter example, but what
[00:53:25] what  My solution for this problem as I mentioned this this thing of my comp in my comp my comp and then this having no meaning and
[00:53:34] Like,
[00:53:35] The thing is, in Solid, if nothing happens,
[00:53:38] what ends up happening is this function doesn't get called by my comp three.  It gets passed to my comp two, to my comp, and then into the DOM, like up the tree,  which means it gets like pulled out of that context, so to speak.  And that's why, you know, suspense...
[00:53:57] didn't work in that one issue that I said because it was actually...
[00:54:00] pulling the reed out of the suspense panel. Now obviously I can make the choice of
[00:54:06] you know, resolving all the children. But I don't, it's kind of expensive and pointless to do it at every single step. So, you know, with Sol's built in components, we only actually resolve the children when you have a context provider, because that's like when you have to set the context.
[00:54:22] And by that, I mean, like, use the children helper.
[00:54:25] It's this extra overhead that I didn't see any point doing.
[00:54:29] Like, this is why...
[00:54:32] I don't like this because it just doesn't make any sense. So the solution
[00:54:37] actually was kind of simple.
[00:54:40] And, uh...
[00:54:42] It would simply say that you can't accept functions
[00:54:46] For JSX.
[00:54:47] Like you just can't pass a function to the JSX.
[00:54:52] If the types don't allow it like obviously if you have a div it's not gonna expect it function anyways  If you have a component your components like hey, I take a function and
[00:55:01] then it will take a function.
[00:55:03] But if this component doesn't expect a function,
[00:55:06] you're not going to give it a function.  So let me pull up solid for a minute,  and I'll show you what I'm talking about.
[00:55:16] JSX.
[00:55:17] See, we have this set of...
[00:55:20] of legal elements in here. I haven't actually built this with the latest or installed it.
[00:55:27] Let me see here.
[00:55:30] Get pull. Am I up to date?
[00:55:32] Thank you.
[00:55:33] Oh man, this is my fun, eh?
[00:55:36] Do you ever do this? You've been using this Mac for years and then they tell you that your XPath command tools are missing?
[00:55:45] That's actually really quite annoying for the sake of the stream because I hadn't actually run this locally.
[00:55:53] Oh man.
[00:55:55] I mean like
[00:55:57] I'm gonna be like running Xcode in the background for the few minutes here until we get this set up.
[00:56:03] Oh man.
[00:56:05] - Yeah.
[00:56:05] I'm not.
[00:56:06] After every macOS update, and this is my...
[00:56:10] How do you do this again? Why am I getting this? I gotta remember what the actual thing is. I have to like
[00:56:18] Yeah.
[00:56:20] Yeah, here we go. It's always this, right?
[00:56:25] Amen.
[00:56:31] I agree.
[00:56:33] Sorry, this will delay this a little bit.
[00:56:36] 41 hours
[00:56:38] It's going to be fun. Fun wait. You guys stay with me for 41 hours.
[00:56:41] *sniff*
[00:56:42] Hmm, it's only five minutes now, so...
[00:56:46] All right.
[00:56:48] Two minutes.
[00:56:50] .
[00:56:52] It's fine. This will take a couple minutes. It's fine.
[00:56:55] But this lets me show the before and after a lot more effectively.
[00:57:00] Because...
[00:57:01] Thank you.
[00:57:02] Essentially,
[00:57:04] We allowed this function element, which is just a function of element.  Same way we would think.  The thing about solid is we don't have VDOM nodes.  So it's not just VNode.  Because we just have functions that return...
[00:57:15] DOM elements or whatever
[00:57:17] Like it can be a DOM node, it could be an array of DOM nodes, function of DOM nodes.
[00:57:23] a string and some crazy typescript trick. I can't remember why we had to do this, but
[00:57:27] Number...
[00:57:28] Boolean, null, you could almost return anything except for a normal object to our JSX element.
[00:57:37] Right.  Right.
[00:57:38] Amen.
[00:57:39] .
[00:57:39] And
[00:57:41] And that makes things a little bit tricky, right?  So...
[00:57:46] I mean, it's accurate because you can.  They're just function calls that can return anything.  But what I did was I was like, okay,  what if we just delete function element, right?  'Cause if we delete function element,  now we don't accept functions, then we're, you know,  where are we?  Sorry, not, we don't want to solve primitives.
[00:58:05] -
[00:58:06] Then suddenly we're in this different world where you can't pass a function unless the component expects a function.  So to illustrate that, I actually got an example for everyone right here. See, pretend we have a layout component.
[00:58:18] that just takes JSX elements. So there's no
[00:58:21] You know it takes children
[00:58:23] There's nothing special about it. It does its internal thing. It just wraps some children. And then I made my own for loop component. I didn't implement it here, but essentially it takes an each.
[00:58:34] And then the children...
[00:58:36] or a function with a callback or whatever for each item to it. And
[00:58:44] What this new change means is this is all still valid.  You can go like my layout pass in the string, my layout pass in an element, my layout
[00:58:52] you know
[00:58:54] access a signal, my layout, do some conditional logic and signal return an element.  My layout, call an iffy.
[00:59:02] If you want to, you can have it like,
[00:59:05] This is sometimes fun if you want to inject state in the middle of your JSX. Remember, solid components don't rerun, so this is completely legit. You can probably just make a component instead of doing this, but yeah, you can put signals and state and life cycles will be managed automatically anywhere in your JSX.
[00:59:22] You can call on track on this thing and haven't, you know, not track something.  You can use a for loop exactly the way you would expect to.
[00:59:31] But with this change, what ends up happening is,  if you just try and pass the name or the count straight in,  it errors.  If you try and pass a function to my layout,  which is not expecting a function,
[00:59:44] It errors.
[00:59:46] All of these variations
[00:59:48] And the thing is because in solid you don't need to pass this function if you want this to be reactive and dynamic and
[00:59:55] like name and hello,
[00:59:57] Just put name and hello, you don't need to
[01:00:00] wrap it in a function here.  That's what the JSX compiler does.  The reason the compiler does this is so that we get  that transparency I showed earlier,  where everything is just props dot blank.  And we're not worrying about like is signal.
[01:00:12] and
[01:00:14] Similarly, if you use an each component,
[01:00:17] Um...
[01:00:19] And what's wrong with this one?  Ah, okay.
[01:00:23] We, I mean, this one's, this one's actually kind of off topic.  It doesn't matter.  It just shows that if you don't pass...
[01:00:28] a function to users at errors
[01:00:31] And
[01:00:32] Here, in this case, if you tried to pass a development, because this one specifically doesn't...
[01:00:38] fact that it expects the children to be a function, it also errors.
[01:00:41] Thank you.
[01:00:43] So, so far so good, right?
[01:00:54] Question.
[01:01:00] Yeah, I mean, that's essentially... Dan actually answered this on The Space yesterday when he first jumped in because...
[01:01:09] React
[01:01:11] React doesn't...
[01:01:14] compiling the dependencies
[01:01:16] because
[01:01:17] Like, it can't.  It's actually probably pretty easy to compile in the dependencies.  It's because it's, like, inconsistent with the model.  Unless they can patch all the little leaks and little holes or, like, exceptions to the model,  it's actually a lot more explicit and clear to have that dependency array because...
[01:01:32] There's always edge cases.  And they weren't confident when they first put it out that people wouldn't need it for edge cases.  And I think that's a very smart move.  Especially because, think about it, React runs top-down, line, line, line, line, line.  Like...
[01:01:42] If that's your mental model, you've got to see the dependency arrays to kind of understand what changed.  See, with the reactive system, that's not the mental model.  You're just like, this reruns when it changes.  And I feel like because of that kind of guarantee, it's a lot easier to get rid of the dependency arrays.
[01:02:00] And in fact, it's why we'll talk about this later on stream, React renamed their auto-memoizing compiler
[01:02:06] which makes no sense to talk about from a top-down sense,  to an auto reactivity compiler.
[01:02:11] Because they had to start talking about React in terms of reactivity as soon as they started compiling.
[01:02:17] .
[01:02:19] Yes, you're right.
[01:02:20] You're right. Before I release this, I'll do that. Yeah. Name and users are signals in this example.
[01:02:29] But to be fair, it doesn't matter if they're actual signals or if they're just any accessor, because the way solid works, these could be actually any function, right? That's the thing. This part aligns quite well with TypeScript.
[01:02:42] There's a gotcha here, right? Because if this is just true, why didn't we do this from day one? Isn't this a win?
[01:02:50] I mean, I can get a sense from chat here, but like...
[01:02:54] Uh...
[01:02:55] If I just came in and this...
[01:02:58] redlined on me the very first time I tried to do it like that that's kind of like a win for  everyone why weren't we doing this and
[01:03:06] the reason is
[01:03:07] *sniff*
[01:03:09] I felt that TypeScript
[01:03:11] was there for...
[01:03:14] being kind of like,
[01:03:17] the truth.
[01:03:18] So that people could understand the state of the system.  Kind of like when you write--
[01:03:24] In C-sharp.
[01:03:27] or roster whatever and you don't like if the types aren't right
[01:03:30] Like the code doesn't compile, like, like in a sense, like things have needed to work.
[01:03:35] But...
[01:03:37] Then I realized
[01:03:39] That TypeScript's just a linter.
[01:03:40] which means we can lie to TypeScript on purpose, and as long as we can never be caught in that lie,
[01:03:48] And, you know, it's not like a harmful lie, like where we're like over stricting some value.  It can be or something like in a negative way.
[01:03:56] Then like...
[01:03:57] TypeScript is a tool for us, right?
[01:04:00] Even if this technically can accept a signal, we can
[01:04:04] error and say it doesn't for our purposes.
[01:04:07] - Yeah.
[01:04:08] So...
[01:04:09] Yeah, a lot of this realization, it comes from the fact that like,
[01:04:14] In one sense, I see that you can't completely trust TypeScript and it's a subset and all that.  But knowing that empowers you because now you can use it to how you want to use it.  And that was something that I never really understood.  I was thinking too, it's a typed language kind of thing.  And not like it's whatever.
[01:04:34] It's kind of like JavaScript in a way where you kind of approach the problem and go like,
[01:04:40] How can I hack this thing to make it do what I want? That's what TypeScript is. It's like super hacky like JavaScript.
[01:04:46] Um...
[01:04:48] Yeah.
[01:04:49] Chinese.
[01:04:54] Good.
[01:04:54] Yes, yes. Yeah, of course. I mean, that's what it's there for. Why else are we doing TypeScript?
[01:04:59] Because it's safe.
[01:05:05] It's the best autocomplete we have in JavaScript.  It's the best linter we have.
[01:05:13] for
[01:05:17] So,
[01:05:19] Okay, so there's a gotcha in here a little bit because if it...
[01:05:24] There's a reason we accept functions and the reason we accept functions is because
[01:05:29] Technically speaking,
[01:05:31] If a part of our DOM needs to update like a for loop or a show component like something that switches or we need
[01:05:38] like something to listen to it.  'Cause these are expressions.  They're like basically like memos, right?  Like a four component is like, or a show component,  you can think of as a memo essentially, where it's like,
[01:05:47] doing some condition. It's like a ternary, right? Like you can visualize it like
[01:05:51] You know.
[01:05:54] Count
[01:05:56] bigger than five or four or whatever.
[01:05:59] something
[01:06:02] Thank you.
[01:06:03] Nothing, you know what I mean?  Like, you can view this as basically like a reactive memo.  So whenever count changes, and because of that,  something needs to subscribe to actually do the DOM.  Like, how does this get inserted in the DOM?
[01:06:17] This memo has to feed into an effect.
[01:06:19] that actually does the insert
[01:06:20] insertion. That's kind of like the mental model we have here. So if you make a component that returns
[01:06:27] Like...
[01:06:28] a memo, essentially.  You need, like, it needs to be able to do it.  There's no way to pass it in a dynamic way  unless you pass the function directly
[01:06:35] into the underlying create effect renderer.  Like, I've displayed this...  If you don't know what I mean,  watch the intro solid...  Like, where is it? Sorry.  Uh...
[01:06:47] w-w-s-solidjs.com, whatever.  Like, watch the, like, advanced intro 10-minute video at some point.
[01:06:54] But like, Solid renders everything with effects. You need to pass that signal to the effect. So,
[01:07:02] So for the most part
[01:07:05] We do need to support this somewhere.  But the secret to this is that like...
[01:07:11] Let's implement my for.  So let's go const const.
[01:07:15] My for so this is my own for loop and we're gonna this is gonna be really dumb for loop and solid because the thing you have to remember I  Say this like a billion times. I never know if people believe me is that I
[01:07:26] Solid...
[01:07:30] is, how should I put it,
[01:07:33] it's all runtime, right?  The compiler isn't like doing fancy like DSL type stuff.  So like my four could just be what props dot,
[01:07:43] each.map
[01:07:46] Um...
[01:07:48] props.children or something.
[01:07:50] That's roughly what a four component is, right?
[01:07:54] And...
[01:07:56] we'll say that
[01:07:58] Um...
[01:08:00] Let's make it...
[01:08:01] What is it? Generic...
[01:08:04] Um...
[01:08:05] I'm doing something terribly wrong here.
[01:08:08] I had an example of what a for component might look like here. Is this it?
[01:08:13] Yeah.
[01:08:14] There it is, beautiful. This is what I want.
[01:08:17] Yeah.
[01:08:19] My four.
[01:08:21] Um...
[01:08:30] Where are we going? My 4...
[01:08:33] Okay, it's never read. And what's this one's problem?
[01:08:44] Okay.
[01:08:45] I don't need it to run.  I just need it to type check.  Okay.
[01:08:49] My...
[01:08:50] *sniff*
[01:08:54] I am missing something though, aren't I?  Chat, tell me what I'm missing.
[01:09:10] Okay, but I can still illustrate this without it running for the moment.
[01:09:18] Yeah, like I literally have like dangling stuff in here.
[01:09:23] Uh, it's all good. I don't know how that disappeared.
[01:09:27] Um...
[01:09:28] Anyway, let's not worry about that for a second.  My point is, I could write my own for loop component like this, right?
[01:09:35] And...
[01:09:37] Yeah, and essentially...
[01:09:41] write it like this and it's just a map function. But there's a problem here because this is only going to run once.
[01:09:46] So even if each
[01:09:49] updates, this can never run again the way Solid works. So the answer to that is
[01:09:54] is
[01:09:55] The same answer they give other people is...
[01:09:59] You just wrap it in a fragment. You know, like...
[01:10:03] I know that's a little bit magical for people, but essentially, if you wrap it in a fragment,
[01:10:08] this now is a reactive context that you can pass through.
[01:10:13] The other option is you can wrap it in a create memo. And actually the funny thing is,
[01:10:17] Okay.
[01:10:18] Yeah, because this isn't compiling
[01:10:24] Let's like get everything else going.
[01:10:28] Something I'm doing here
[01:10:35] Okay.
[01:10:37] Let's do...
[01:10:38] this
[01:10:40] this just in case I don't want to lose it when I refresh the page.
[01:10:44] Sometimes...
[01:10:45] the playground gets in a weird place
[01:10:48] Return outside of a function, okay.
[01:11:01] I'm missing a brace, yes, okay, that's the problem.
[01:11:04] My example
[01:11:06] is
[01:11:07] Phew.
[01:11:08] Which one am I missing?
[01:11:14] Line 4.
[01:11:17] "Ew, props, is this each item?"
[01:11:21] Oh, I'm like literally missing the open brace for the function.
[01:11:25] Thank you.
[01:11:27] *laughs*  Okay.
[01:11:30] Okay.
[01:11:33] See this?
[01:11:35] Memo.
[01:11:37] Okay.
[01:11:39] I
[01:11:41] Uh...
[01:11:45] Thank you. Chat is great.
[01:11:49] But...
[01:11:51] Essentially,
[01:11:54] A fragment...
[01:11:56] expression is a memo.  So...
[01:11:59] The thing is, you can write this. This will be legal.
[01:12:02] You can also write create memo.  But if you write create memo in this world,  this is the gotcha here, and try and return it,  it's going to say...
[01:12:12] JSX element can't be a function or something.  And the only way to solve that is cast as unknown as JSX element.  That's the gotcha.  If you're returning functions from your component  to make like custom control flow as like a memo,  you have to cast it
[01:12:29] Here?
[01:12:31] Or Return as a Fragment.  I don't think that's probably...
[01:12:39] So
[01:12:40] a big deal
[01:12:42] so to speak.
[01:12:45] Like...
[01:12:47] It means for people authoring libraries, they have to be aware of this stuff a little bit.  But for most developers, the solution is really simple.
[01:12:54] I mean, I just showed it.
[01:12:57] return a fragment if you have a reactive expression.  It's the same thing you do in all your components.  So we basically get the TypeScript win  of tightening up all the ambiguity around the function calls
[01:13:08] And
[01:13:10] for a pretty reasonable trade-off.  Of course, this is a breaking change  from a TypeScript perspective,  but if TypeScript's willing to break stuff  on minor version releases, then like,
[01:13:22] You know, I'm going to play ball at least for now.  I think there's a point in the future where we have to consider differently.  But, I mean...
[01:13:29] This is a big part of 1.7, and I think it's going to make the...
[01:13:33] like the end user use of solid so much,
[01:13:36] clearer like all that ambiguity goes away
[01:13:46] Thank you.
[01:13:47] Well, technically, yeah.  Like, but the thing is,
[01:13:50] if you think about it,
[01:13:53] What
[01:13:54] would you do anyways? You wanted this to update so you needed it to be a reactive expression.
[01:13:59] This is like, you know how I say that we have no cost components?  It's not 100% true in the sense that...
[01:14:08] Yes.
[01:14:10] If an expression could have been grouped at a higher level and you have to break it into a component you might need a
[01:14:16] a way of passing it back up.
[01:14:18] um,  um,
[01:14:19] So technically speaking, like, a function is lighter than a memo.  So, like, maybe you're okay to just return a function and then you have to cast it.  But, like, I'm not...
[01:14:27] I'm not like, what's a, like,  nickeling over that kind of thing.  Like, just, this doesn't matter much.  And it's not just that a fragment is a memo.  Um...
[01:14:36] Let's add another expression to our fragment.
[01:14:39] And
[01:14:39] It's that the expressions...
[01:14:43] In the fragment...
[01:14:44] that could be dynamic or memos. So like if I put "hi" in here, it's just a string.
[01:14:49] Fragment is just an array.  It's the expressions that get memoized.
[01:15:06] Does it have to be a component function or can you just call functions in JSX? I might need a better
[01:15:15] Yeah, I mean, can you just call...
[01:15:17] I don't quite understand the question.
[01:15:20] Like...
[01:15:22] What am I going to do here?
[01:15:23] Count.
[01:15:25] Sorry, I actually need...
[01:15:28] Can't just do that. I need to do this.
[01:15:31] Um...
[01:15:34] Memo count  The...
[01:15:40] -
[01:15:44] yeah so this this is illegal now right that's that's the whole point we're making the reason  that i put the restriction on the authoring side which is a little bit unfortunate
[01:15:54] is because, so that this would be illegal.
[01:16:01] Can you have a thunk calling mapray in a JSX expression in the parent?
[01:16:06] Um...
[01:16:08] You could, but as long as you...
[01:16:10] Like...
[01:16:12] how are you passing it in if you're wherever you're passing in you should call that function
[01:16:16] Unless the component wants a function and puts it in its typedef, you should always be passing the value, not the function.
[01:16:23] the function.
[01:16:27] It's the way.  Like, I really wanted to, like, if a component expects a thunk, it gets a thunk.
[01:16:31] That's the same as true today, right?  But, like...
[01:16:36] I want to remove that whole ambiguity that children could just be thunks.  Thunks are gone unless like they're good for local reasoning, but past values.
[01:16:52] Um,
[01:16:53] Yeah.  Like, basically, all of these things...
[01:16:56] Thank you.
[01:16:57] in a situation like this where they're not asking for functions,
[01:17:01] All are invalid.
[01:17:08] But the thing is, like, you don't need to do this, because this...
[01:17:11] is the equivalent...
[01:17:13] of this.
[01:17:16] Like, this was like...
[01:17:22] There was a couple other solutions before we end on this point, which one of them was that...
[01:17:28] Otanashi or whatever is very, very clever  and was like, well, what if we leave  the function element in, right?  Right.
[01:17:37] Let me get here.
[01:17:38] uh where is we're solid here
[01:17:44] Can I get pulled yet?
[01:17:46] Alright, beautiful.
[01:17:48] What if we leave the function element in, but instead...
[01:17:52] Go like...
[01:17:55] super secret
[01:17:59] Is at.
[01:18:01] element
[01:18:06] Like something like this, never or something.  Basically, what if we added a...
[01:18:12] TypeScript symbol, like this isn't quite right, but like added a TypeScript symbol that never existed on the actual interface.
[01:18:21] And if we did that, we could say like memos or accessors
[01:18:26] like signals or memos could...
[01:18:30] essentially have this secret property that was like an error message.  So like if you tried to pass a function,  it would be like,
[01:18:38] your function is not an accessor
[01:18:42] up solid or something.
[01:18:44] And this has no runtime implication, but could tell--
[01:18:50] Like, it could give us the error message.  And, I mean, this is a pretty clever trick.  The problem with it is the message was really unclear, right?  Like, you start, like, how should I put it?  Like...
[01:19:01] Like, sure, this part of the message was clear, but when you're reading it, you're like,
[01:19:06] What?
[01:19:08] So functions are okay if they have this hidden property,
[01:19:11] Do I add this hidden property?  Like, it was...
[01:19:16] And the biggest problem with it I had was this initial scenario here, like the...
[01:19:22] We'll just go back to it.
[01:19:24] because we can.
[01:19:26] This initial scenario
[01:19:28] would pass still with that thing.  So while we remove the fragment return memo issue,  this scenario would pass because it'd be like,  "Oh, it's a signal, it's fine."
[01:19:39] The only way to actually restrict it was just say no.
[01:19:43] The no error is much more straightforward.  Let me see if I can show you that.  Let's get rid of this.  Let's go back to where we were.  Not that it really matters.  And let's...
[01:19:53] I'm up to date. Let's...
[01:19:56] PMPM build.
[01:19:59] our solid repo.
[01:20:02] All right.
[01:20:07] Why did that belt fail?
[01:20:13] Let's try building one more time.
[01:20:19] Sweet.
[01:20:21] So the thing currently...
[01:20:23] pushed up on git does not build properly actually you know what let's
[01:20:29] This is probably so out of date. Let's PMI. There we go.
[01:20:33] Whoa, okay.
[01:20:37] Yeah, that's what it was.
[01:20:39] - Yeah.
[01:20:43] So...
[01:20:46] Yeah.  See?
[01:20:48] No more function element here, okay.
[01:20:51] Mm-hmm.
[01:20:53] How's chat doing? How's Twitch doing? Did I miss anything?
[01:20:56] People on Twitch, tell me if I miss anything.
[01:21:00] Alright.
[01:21:01] Thank you.
[01:21:08] Alright, so here we go. Okay, so...
[01:21:12] Now, let's mess with things a bit. Let's go into one of the
[01:21:17] Web tests, maybe...
[01:21:19] Where is it?
[01:21:21] source
[01:21:22] Let's...
[01:21:22] or tests, let's just pick
[01:21:25] one of these, maybe...
[01:21:29] Let's make this a little bit bigger.
[01:21:32] Um...
[01:21:33] element
[01:21:34] Okay.
[01:21:36] The element test actually have any DOM elements in it.
[01:21:39] Okay, whatever.
[01:21:40] Now, if I go in here,
[01:21:42] And I can go high, obviously, but if I go in here,
[01:21:46] and do this:
[01:21:48] It's going to complain at me and the error is going to be,
[01:21:50] function string is not assignable to type element. Like this is a much clearer
[01:21:55] error message so to speak like it's like just straight up just tells you that you can't do this um
[01:22:01] So,
[01:22:03] While we could get clever with it,
[01:22:08] Yeah, it's just nicer that way.  That's a unique ID.
[01:22:14] Do you have an example here with
[01:22:15] Um...
[01:22:18] Yeah, I think...
[01:22:19] There's a couple other variations of that error, but you kind of know what to expect.
[01:22:29] Yes, because for expects a component. That's what I was trying to say. Sorry, expects a function. So if the types expect a function, then you can pass a function, but the types don't.
[01:22:38] And what's really cool about this is we've long time had this little
[01:22:42] adjacent bug that I haven't talked about a bunch, but
[01:22:46] It's almost impossible for Solid's show component
[01:22:50] Let me just make a show component for fun.
[01:22:57] Um, I don't actually...
[01:22:59] Whatever.
[01:23:00] We'll just leave it there.
[01:23:03] It's almost impossible for Solid's show component to differentiate between...
[01:23:09] two scenarios and those two scenarios are
[01:23:13] Um...
[01:23:14] So when...
[01:23:18] Count...
[01:23:21] It's bigger than five.
[01:23:23] Okay.
[01:23:24] Let's say smaller than four.
[01:23:26] Okay. It's impossible...
[01:23:29] Yeah, I don't even know why I kept the button there.  It's very difficult for solid to tell the difference.
[01:23:34] Between...
[01:23:39] um
[01:23:41] This
[01:23:42] Like...
[01:23:43] A signal?
[01:23:46] And...
[01:23:50] Um...
[01:24:05] and
[01:24:06] Thank you.
[01:24:07] Why isn't this just like yelling at me? This is so funny. I expected this. Oh, it's because I have an imported show. Okay.
[01:24:17] I'm still surprised this isn't yelling at me.
[01:24:20] This should be yelling at me that it needs a keyed prop, but...
[01:24:24] It's very difficult.
[01:24:27] for Solid to tell the difference between like
[01:24:31] someone using the callback form and passing a function.  Because when show gets at a runtime,
[01:24:36] It's a function in both cases.
[01:24:38] Okay.  And
[01:24:40] What we did was kind of like this hacky thing where we look for the argument count.
[01:24:46] Because that's the only difference between, you know, as I mentioned,
[01:24:51] it still gets wrapped, right?  So that was like the only difference.
[01:24:54] Like we couldn't really tell the difference.
[01:24:58] Now that we have this rule that's, you know,
[01:25:02] Sorry, yeah, I was wrong, sorry. It's not count. Count is fine. When you put in curlies and passing count, that's obvious. It couldn't tell the difference between this and someone just passing...
[01:25:12] Count in naked.
[01:25:14] Like it couldn't tell if it should be calling that function as a callback or calling the
[01:25:19] or that it was just like the signal.  And now that it's illegal to pass functions arbitrarily,  we can actually type it so that when people do this,
[01:25:30] It's an error. Now, I understand you might think this should work.
[01:25:34] But...
[01:25:35] Um,
[01:25:36] now it's like, now this will error.  And the thing is, this is useless again in this scenario  because if you were fine using show,
[01:25:46] And you didn't need a...
[01:25:47] didn't need the argument.
[01:25:49] Why are you even doing this?  Do you know what I mean?  Like...
[01:25:55] So we actually solved a weird, interesting problem.
[01:25:59] thing with the show component as well, because we can now detect the difference between those  two scenarios from a TypeScript level.
[01:26:11] Hopefully that's a good explanation.
[01:26:13] Thank you.
[01:26:17] Yeah, I mean that was basically what we were doing, which I understand that's like
[01:26:22] Not great.
[01:26:23] but now TypeScript will prevent you from screwing it up.
[01:26:30] No, we haven't got into even the fun types of script issues yet.  This is just like the, you know, the...
[01:26:39] I was thinking this a little controversial at first as well, but I think like the winds here are pretty evident like in terms of like
[01:26:48] How much?
[01:26:48] Like,
[01:26:50] It's weird, because like...
[01:26:52] If you're coming from this from a pure reactive side, like Fabio and Vobi or Sinuous or Surplus even, the roots of where solid came from,
[01:27:03] This approach seems bonkers. You're like, wait, no, everything's a function. Why are you like trying to force everything not to be a function? Make, you know, make these rules around it, but...
[01:27:14] Once you put all these pieces in place,
[01:27:18] you have one consistent way of doing things for this that,  um,  is not ambiguous.  Right.  And,  um,
[01:27:27] Basically, this is all a product of the fact of the way we change the props and the way that is signal is not a thing.  You basically, once you start making those decisions, I think you logically get to this place where you have localized component and you can think of things in values and you don't have to think of the whole tree and if signals are being passed through or that.  It's not your responsibility.
[01:27:54] How do I type? Yeah, Solid has some great utilities.
[01:28:00] built in for,  for handling,  uh,
[01:28:03] Let me see here if I can find it.  It's under render, components.  We have a bunch of types for this.  Well, obviously there's types components.  So yeah, there's a generic for a normal one.  There's a generic.
[01:28:17] for like, you can never have children.
[01:28:20] void props, void component, parent props.  This is a component that can have children.  Flow props...
[01:28:28] Uh...
[01:28:31] So I guess it's for the...
[01:28:32] flow components, props with children.  There's a whole bunch of variation component props.  This is a very helpful, I love this one.  This is how you can extract the props.
[01:28:40] from a component. But essentially,
[01:28:42] The common pattern is you either just, like, with your function, set the props, like whatever, or you use a generic with one of these, like, component or probably parent component.  One of those two are fairly common.
[01:28:58] It's a breaking TypeScript change.
[01:29:00] So, depends on how you feel about that. We've broken TypeScript like almost every release. I mean,
[01:29:07] TypeScript's grown with us too.  I know this one's on our side of things, to be fair.  But over time, TypeScript's broken us as well.  So it's like...
[01:29:17] I feel like that's the relationship here.
[01:29:22] If TypeScript feels like they can just break on every minor,
[01:29:26] I feel like for us, TypeScript breaking on minor is okay.
[01:29:33] *chewing*
[01:29:36] Thank you.
[01:29:36] forward.
[01:29:37] Yeah.
[01:29:44] Yeah, we're going to get here.
[01:29:46] Thank you.
[01:29:53] Right. So...
[01:29:55] Okay.
[01:29:56] I think we're good on...
[01:29:58] Where's the beard?
[01:30:00] - Good.  Yeah, I mean.
[01:30:02] Yeah, I don't know.
[01:30:04] The beard actually was more of just like after signal week and stuff. I was just like so like out of my like I went really hard for a little period of time and I just let it grow and then I was like oh it's still growing and then I can let it go for a bit but you know.
[01:30:18] We're back. I have...
[01:30:21] conferences to do coming up and,  uh,
[01:30:24] Talks and streams and all that stuff. So I I
[01:30:28] I don't know.
[01:30:30] Anyway, let's...
[01:30:33] Let's continue.
[01:30:34] onto more TypeScript goodness, because this whole...
[01:30:38] Thing is about TypeScript almost. I mean there's a few other things we could talk about a bit later, but the what other one was fun  No, we're not gonna do that one yet
[01:30:48] Let's talk about better types
[01:30:50] For input elements, okay.
[01:30:53] This one's going to be a quick one.
[01:30:55] But it's an important one to point out because...
[01:30:59] It confuses everybody and I blame React.
[01:31:02] I'm not.
[01:31:04] Right.
[01:31:06] Let's do this.
[01:31:11] Reset. Okay.
[01:31:13] So...
[01:31:16] Let's...
[01:31:18] Let's make an input element.
[01:31:20] whose value...
[01:31:21] equals
[01:31:22] count
[01:31:24] that on
[01:31:26] input
[01:31:29] We...
[01:31:32] Set it. Okay. And I'm calling it count.
[01:31:35] It can now be a string.  We don't really...
[01:31:38] you know.
[01:31:39] I don't really care, okay, on input,
[01:31:43] we set it. And how do we set it? Well, we go set count
[01:31:47] equals...
[01:31:48] E dot target dot
[01:31:51] Um...
[01:31:53] Value right?
[01:31:56] What the hell is going on?
[01:32:03] This is so weird when TypeScript's not yelling at you, when it should be yelling at you.
[01:32:06] Ah, there we go. Just had to toggle it.
[01:32:09] Thank you.
[01:32:10] Wait...
[01:32:11] What? Value does not exist on type element?
[01:32:15] Yeah.
[01:32:16] There's a couple things here.
[01:32:18] I want to talk about.  Because...
[01:32:22] First of all,
[01:32:23] OnChange is a blur event.
[01:32:28] Every framework, the web itself,
[01:32:30] Everything out there uses on change
[01:32:33] as a blur event.
[01:32:35] On input is a keystroke event.
[01:32:38] Right.
[01:32:40] What I mean by blur event...
[01:32:43] Let me just put it in here.
[01:32:46] Let's just...
[01:32:46] do this just because
[01:32:49] Let's put our count in here
[01:32:54] format.
[01:32:59] Okay.
[01:33:02] Okay, yeah, right. So I type...
[01:33:05] Where is it? Oh, I clicked out. Oh, there it is.
[01:33:07] Let's do a div. Let's pick it up on the next line. Okay.
[01:33:11] That is a blur event.
[01:33:13] Okay?
[01:33:15] Toot toot toot toot toot toot.
[01:33:17] Right? I had to click enter for this to show. I'm clicking...
[01:33:20] I click enter, it shows, or I do here, I click out, it shows.
[01:33:24] That is what the onChange event
[01:33:27] in the DOM is.  That's what the on-change event in every JavaScript library is.
[01:33:34] Except for react now to be fair I
[01:33:38] A lot of libraries have two-way binding for this use case, so you don't-- it doesn't--
[01:33:44] become
[01:33:45] You don't become like conscious of this too much.
[01:33:48] But like...
[01:33:49] react.
[01:33:50] Does a bunch of stuff around...
[01:33:53] their change event.
[01:33:55] To make it work and there's historical reasons too because like
[01:34:00] I remember even the knockout, here's a little history for you all.
[01:34:04] Knockout DS.
[01:34:06] has a...
[01:34:09] Let me look here.
[01:34:10] What is it?
[01:34:12] Is it text binding? No, no. What's the one for the input? Uh...
[01:34:16] Value binding, where is it?  Value, value, value, value, value binding.  Not gonna have this value binding, right?
[01:34:22] Where you just go like...
[01:34:23] input value user thing and don't worry too much about this but what's funny is value worked like  change like i just showed you and then you'd have to like
[01:34:32] pass an additional value update property,  and, like, you'd set...
[01:34:36] set like when it set the value. Because back in the day,
[01:34:41] We didn't actually have...
[01:34:43] the DOM input event.  It's kind of funny, like...
[01:34:48] because people want the support stuff back to like IE6 or stuff. So there's like a long history here, but
[01:34:53] I just wanted to start here because...
[01:34:55] The proper event...
[01:34:56] to update is called on input.
[01:35:00] Doot doot doot doot doot.
[01:35:02] Um...
[01:35:03] Thank you.
[01:35:05] And...
[01:35:08] *sniff*
[01:35:10] You know like this this is
[01:35:14] this is basically...
[01:35:19] Yeah, I tended in here, but I just wanted to kind of...  The number of people I've seen come on stream,  they're like, I'm learning solid, and they go on change,  target value, and they hit those two issues.  Like...
[01:35:30] is significant number like because they they're like oh this is weird why is it not updating and  then they like move and they're like oh wait it updated now what what happened
[01:35:39] And
[01:35:40] It catches like...
[01:35:42] so many people and I realized why was because I'm like if it's just react okay that's understandable but it's because they're if they're using svelte or view they're using two-way binding and it never occurred to them like no one types on input.
[01:35:57] Even though technically that is the only actual answer here.
[01:36:03] So,
[01:36:05] Anyways.
[01:36:10] Getting back to our example, now that we fixed it and changed it from onChange to onInput,
[01:36:16] Why is this value
[01:36:18] It's because...
[01:36:20] From its perspective, TypeScript is like, oh, this can be an element.  It can be any element.
[01:36:27] And the reason for that is...
[01:36:36] What happens if I move my input event
[01:36:43] Onto this div.
[01:36:46] Thank you.
[01:36:47] Will this work?
[01:36:52] It's an interesting question.
[01:36:53] I wasn't actually sure if it would work.
[01:36:59] the...
[01:37:00] The fact that it works is actually cool.
[01:37:04] Well, actually, the reason it works is actually pretty obvious, actually.
[01:37:08] Sorry.  I...
[01:37:09] I needed to...
[01:37:11] It's because the target is this input element, right? Sorry, I had it backwards, right? It's bubbling, right?
[01:37:17] - Yeah.
[01:37:19] - Yeah.
[01:37:19] But the truth is, if I'm TypeScript,
[01:37:23] And I'm looking at this,
[01:37:25] How am I possible and you put an input element on some div. How am I?
[01:37:32] How is it possible...
[01:37:34] that I know that this target is this input.
[01:37:39] Thank you.
[01:37:43] Like, there's no way for TypeScript to know, anticipate what the end user's going to click on.
[01:37:51] Like, all it can be is, like, it's a DOM node.  Like, it has no way of knowing, like...
[01:38:00] Like...
[01:38:03] What if I had a text area under here as well?
[01:38:09] I had both of them, right?
[01:38:17] You know why this is working again, because...
[01:38:22] It's actually picking up the input event from both of these.
[01:38:27] So if I type in here,
[01:38:28] Or type in here, but this one's not getting synced because I didn't put value count on it.
[01:38:35] But...
[01:38:35] Let's do that now.  Do-do-do-do.  In this one.  Do-do-do-do.
[01:38:41] Like...
[01:38:41] *coughs*
[01:38:44] that.
[01:38:44] My point is...
[01:38:48] TypeScript doesn't know
[01:38:50] Which one of these...
[01:38:52] the end user is going to type in
[01:38:57] Right?
[01:38:58] Like, it just sees this div and goes, OK, you've got an event handler on it.
[01:39:03] It is impossible for it to know that the target
[01:39:09] what element the target is.
[01:39:16] There is a solution to this, though, but we'll get here.  Because the thing is...
[01:39:23] There's another...
[01:39:25] There's another thing on the event that tells you what the current target is. Now, if I change this to current target,
[01:39:30] current target.
[01:39:32] It's still going to complain because a div...
[01:39:34] does not have a value.  But look now.
[01:39:37] This is a div element.
[01:39:41] This isn't...
[01:39:42] going to work because...
[01:39:46] you know, it has no idea what's going on.
[01:39:49] But,
[01:39:50] My point is...
[01:39:52] The current target is the element you put the event handler on. So
[01:39:57] If
[01:39:59] I move.
[01:40:00] are
[01:40:02] Event handler back onto our input.
[01:40:08] Value is there and it's the HTML input element.
[01:40:12] So now when
[01:40:14] We type.
[01:40:15] We're back in our happy zone.  Of course...
[01:40:19] This one's no longer picking up the events, so it's not doing that.
[01:40:24] what I'm getting at is that like
[01:40:28] TypeScript cannot know the target of your event, so it can't give you this. But
[01:40:34] you might be like, wait a second,
[01:40:36] doesn't react...
[01:40:38] Why doesn't this error in React?
[01:40:40] Thank you.
[01:40:43] and
[01:40:45] This is one of those things where like...
[01:40:47] Sometimes...
[01:40:49] You shouldn't just stop...
[01:40:50] at like the truth. This is again where, like the theme of this stream is going to be like,
[01:40:56] lie to TypeScript for your benefit, right?
[01:40:59] Like that's what TypeScript's there for, to be lied to.
[01:41:02] And...
[01:41:04] I
[01:41:05] You...
[01:41:06] No, this doesn't air in React.  Let's just pull it up.  Vite...
[01:41:11] React...
[01:41:13] something
[01:41:15] like template
[01:41:17] *fart*
[01:41:18] Thank you.
[01:41:19] vtemplate react, or actually we want vtem, typescript react, we want a typescript vt react.
[01:41:25] Um...
[01:41:31] There we go. That... is that... can I... actually no, let's do like stack blitz.
[01:41:36] stack
[01:41:38] Blitz.
[01:41:40] TypeScript
[01:41:41] React.
[01:41:42] Okay.
[01:41:44] Beautiful.
[01:41:47] Okay.
[01:41:48] I'm going to go.
[01:41:49] Let's add an input. Let's not put in the ul.
[01:41:53] Let's add an input element.
[01:41:56] And
[01:41:58] Let's
[01:41:59] Give it a...
[01:42:01] on
[01:42:02] change event
[01:42:05] and then go E is
[01:42:09] whatever, something, we don't even care.  E.target.value.
[01:42:16] Well, if I look here,
[01:42:17] e.target
[01:42:19] is...
[01:42:20] their change event with an HTML info download. It knows this.
[01:42:24] is true.
[01:42:26] Look at Chat Ryan.
[01:42:28] Yeah, okay, yeah. It's a little slow. People found React.nu, yeah. Okay. Yeah, this is probably the right answer.
[01:42:36] Yeah.
[01:42:39] - Okay.
[01:42:40] Right.
[01:42:41] That, see...
[01:42:43] that
[01:42:45] You...
[01:42:45] You're right. This is the key to the solution.
[01:42:50] If you put on the div, it does error.
[01:42:52] Uh...
[01:42:55] So...
[01:42:57] But...
[01:42:58] Like, if you think about it, what I showed earlier...
[01:43:05] I'm sorry.
[01:43:06] you're like, but the target hasn't changed.  The target's still this,
[01:43:10] In front of the moment.
[01:43:11] Why does it error? Well, this is the little trick we can do. We can assume something here. Because...
[01:43:21] the source of
[01:43:23] these sort of events, like the change in input event or whatever,
[01:43:26] R-
[01:43:28] only like if you go on MDN and you're like MDN,
[01:43:31] input event or something.
[01:43:34] Right.
[01:43:36] Input events fire with the value of input, select, or text area.  Like, basically because you know that these events...
[01:43:43] no matter where they are in the tree, are going to
[01:43:48] be sourced from these...
[01:43:52] And...
[01:43:53] Because these generally don't have...
[01:43:58] Other...
[01:43:59] Elements of these types inside you don't put an input inside a text area. You don't put a  Put inside a select or you know a text area inside a
[01:44:07] Because you don't do that...
[01:44:11] Right?  You can...
[01:44:13] basically assume...
[01:44:15] that
[01:44:17] If...
[01:44:18] Thank you.
[01:44:19] The handler...
[01:44:21] is on...
[01:44:22] an input or a select or text area element,  that the current target equals the target.
[01:44:30] That's the trick here.  So...
[01:44:35] While
[01:44:36] Target won't work if you hoist it up to a div because it has no way of knowing.
[01:44:42] and current target
[01:44:44] won't functionally work up here because it it it it's it's this one that you want
[01:44:50] It means that this very, very, very common case of just...
[01:44:54] working on it on the element itself
[01:44:57] works. And it's so funny because like
[01:45:01] .
[01:45:01] Didn't really think about this hard because like we caught we could have fixed this at any point  But like we were like following the truth that like TypeScript can't know this and
[01:45:11] But we can give it a white lie
[01:45:15] And get there.  So...
[01:45:17] Let's look at our JSX types.
[01:45:19] JSX DTS and
[01:45:23] We have something in solid because we support a few, but we have event handler and bound event  handler in the union. But now we have input event handler. And what does an input event handler do?
[01:45:32] Well,
[01:45:33] The normal event handler is...
[01:45:35] The event plus we added a couple things specifically.
[01:45:39] saying that, look, target can be any DOM element, current target is T.
[01:45:43] for our event handler.  But our input event handler says, look, current target is T,  but then if T extends,
[01:45:50] input, select, or text area element
[01:45:53] then target is also t, otherwise it's DOM element.
[01:45:57] Um, so like...
[01:46:02] it's like a slight little...
[01:46:06] manipulation, so to speak.
[01:46:08] But that means that in solid 1.7...
[01:46:10] Um,
[01:46:13] you will be able...
[01:46:16] to do this and it will not error at you because you will get an input element because it'll know that
[01:46:22] In the case of adding an input event or a change event or whatever to an input element,
[01:46:28] The target equals the current target.
[01:46:40] Yeah, and the change event is special in so many ways.
[01:46:45] So yeah, they...
[01:46:47] But the thing is, even solid event handlers are also what I call semi-synthetic. I got that term from Inferno.
[01:46:54] Because we do event delegation...
[01:46:57] We have to fake
[01:46:59] the current target. The target itself
[01:47:02] is fine except for web components where we actually have to undo the shadow dom  which is something we do in solid
[01:47:08] but I,
[01:47:09] Because, like, they kind of...  If you have a web component and you click an element inside it, the...
[01:47:16] the
[01:47:17] when you're outside of the web component, and if that element was in the shadow DOM, it will report the custom element as a click target instead of the specific button or whatever.
[01:47:28] What we actually do in Solid is the current element, because what we do is we catch all the stuff up at the document, the current element,
[01:47:35] element we actually replace the getter like with an object not defined I mean I
[01:47:39] Why don't I just show you... Since we're talking about it, why don't I just show it?
[01:47:45] DOM expressions, DOM expressions, source, client.
[01:47:54] Um...
[01:47:56] Not that, not that.
[01:48:00] What was it? Event.
[01:48:02] Handler.
[01:48:07] Yeah, here.
[01:48:10] Object defined property current target, get node or document.  And what's this node?
[01:48:16] it's,
[01:48:17] The node is actually this node that when we receive it at the top of the document, we actually
[01:48:25] Go back to the target and walk up the parents and
[01:48:28] in this wild loop.
[01:48:30] And then...
[01:48:31] the current node is so it as we walk up the parents and fire off your event handlers
[01:48:37] When...
[01:48:39] you're at a particular event handler and you call get,  it's just a getter.  It returns the node that it's on its own.
[01:48:46] that we're at on our current walk.  So we actually patched the native events slightly to do this.  It has the same interface.  We didn't like change it or add missing properties or whatever,  but to simulate,  um,
[01:48:58] like event bubbling, we actually do this.  And you'd be like, this is a lot of extra work,  where you just use the DOM EPS.  As it turns out, attaching a bunch of event handlers,
[01:49:09] is expensive historically.  I need to test this again,  but for the longest time,  vent delegation was a significant performance win.
[01:49:24] Keep in mind, I'm not patching all global events.  Literally...
[01:49:29] It's the event.
[01:49:31] Well, I guess technically fine. I'm not like patching a constant object, it's the event
[01:49:39] When we get an event and we realize that we should handle it,
[01:49:42] than that event object.
[01:49:44] Like when we handle it, when the document's done with it, we mutate that specific event instance.
[01:49:52] So I don't consider this the same as patching global event.  This is more of like mutating an instance of event once
[01:50:00] Everyone else is done with it.
[01:50:03] Thank you.
[01:50:04] reverse Shadow DOM retargeting.
[01:50:06] I mean,
[01:50:07] I did just explain it.  It's the fact that the
[01:50:11] Um...
[01:50:12] If you click inside a shadow DOM,
[01:50:15] Um...
[01:50:16] It reports the element.
[01:50:18] as the click target instead of the button.  So we actually have to walk down the composed path  to actually find the target,  and then we make that the target.
[01:50:28] So we--
[01:50:29] the shadow we kind of reverse that tendency of it
[01:50:33] Yeah.
[01:50:35] Yeah, I had a stream on Web Components a while ago.
[01:50:40] I'm not going to get into all the weirdness of Web Components.  Web Components have a lot of very interesting things.
[01:50:46] choices.
[01:50:47] Okay.
[01:50:49] Thank you.
[01:50:50] So yeah
[01:50:53] Yeah, long story short, solid 1.7.
[01:50:57] Let's, again...
[01:50:58] Kind of just playing with the types a bit and, you know, a nice convenience factor. Okay.
[01:51:07] Yes, but if you remember, Solid was built for web components originally.
[01:51:18] Thank you.
[01:51:23] Alright, so there is...
[01:51:26] Let me see here. There's a couple other smaller...  We've been adding types that we've been missing from the JSX types, but
[01:51:34] Thank you.
[01:51:34] I think it's time for the big TypeScript issue, right?
[01:51:39] Um...
[01:51:41] Let's talk about
[01:51:43] what I'm now calling "Null Asserted Control Flow".
[01:51:47] This is what everyone's here for, right?
[01:51:50] Mm-hmm.
[01:51:53] - Oh.
[01:51:54] Alright.
[01:51:56] I'm going to go.
[01:51:58] Give me a second because this topic is why the stream had that cover.
[01:52:04] So
[01:52:09] I've known about this problem for over a year, for quite some time. And it's always been on the list. You can see solid...
[01:52:18] 1.5 was building towards it when we introduced the keyed.
[01:52:23] Um...
[01:52:24] the keyed property for the keyed control flow, we're building towards
[01:52:29] Um...
[01:52:32] Letting...
[01:52:33] for this kind of simple case that's fairly common
[01:52:38] getting past this problem, which is when someone has a show component,
[01:52:46] I mean, maybe I should just make the example in the playground so we can, you know, do this.
[01:52:53] Right.
[01:52:57] Show.
[01:52:58] Thank you.
[01:53:03] - Active.
[01:53:09] Everything's count, right?
[01:53:15] when...
[01:53:22] count
[01:53:25] Count.
[01:53:27] show.
[01:53:28] Yeah, for sure.
[01:53:31] And actually
[01:53:34] We're going to say that Count...
[01:53:36] is...
[01:53:37] a little bit more complex.
[01:53:40] We're gonna say that count
[01:53:44] is
[01:53:48] Um...
[01:53:49] an object
[01:53:51] with
[01:53:52] I don't want to use dot value because dot value is let's
[01:53:59] Let's do data.
[01:54:00] which is a string,
[01:54:04] It's a complaining vote.
[01:54:12] Oh, right, because I can't put it in, right.  Because I need to access data, right?
[01:54:17] - Yeah.
[01:54:19] Thank you.
[01:54:21] So we got a problem here, right? So...
[01:54:26] You look at this.
[01:54:27] And you're like...
[01:54:29] So
[01:54:30] Show this only when...
[01:54:31] There's a count.
[01:54:33] and count
[01:54:35] dot data
[01:54:38] You're telling me that Count could possibly be undefined, but I just... Sid...
[01:54:42] Only show this one count.
[01:54:46] Thank you.
[01:54:57] Thank you.
[01:55:03] And the truth of the matter is, it's because TypeScript has no clue what to do with this.
[01:55:08] Mike.
[01:55:09] This is just JSX.  There's no idea of
[01:55:13] context there's no idea of a flow like
[01:55:16] How is it supposed to know that this is supposed to type narrow?
[01:55:20] And the solution
[01:55:22] is this. Sorry, no, it's
[01:55:24] It's this.
[01:55:26] Thank you.
[01:55:27] For some reason.
[01:55:29] TypeScript user is absolutely
[01:55:33] detest this
[01:55:35] Right.
[01:55:37] Hello?
[01:55:38] blame them to a certain degree, but like...
[01:55:42] They...
[01:55:43] They might even rather do this.
[01:55:48] But...
[01:55:51] The...
[01:55:52] - What?
[01:56:00] You know, like...
[01:56:01] They have no way of possibly knowing.  Without knowledge of the compiler step, type would correct.  The thing is TypeScript is correct,  but it's actually not the compiler.
[01:56:10] that
[01:56:11] that does this. As I mentioned, show is just a function. Like, solids compiler doesn't do anything special in terms of this.
[01:56:18] And in fact, if TypeScript saw the compiler,
[01:56:21] Um...
[01:56:23] It might be even more inclined, yeah.
[01:56:26] to do this.  Like...
[01:56:28] This actually from like a pure...
[01:56:30] Um...
[01:56:33] um
[01:56:34] Basically the root of this problem is even deeper than this.
[01:56:42] you know what I'm doing TypeScript operator. Sorry, where's that comment? I need that.
[01:56:56] Right, but TypeScript isn't aware of that.
[01:56:59] step, so to speak. Like, it...
[01:57:02] It's like all TypeScript knows. The problem is actually like even more fundamental. Like, first of all, JSX
[01:57:09] TypeScript would have no way of handling this anyways.  So we'd have to do something, which we'll get to.  But like...
[01:57:15] um sorry here it is the i know what i'm doing operator
[01:57:20] I love that. But what I'm getting at is like there's even more fundamental problem here, which is this.
[01:57:28] Pretend I wrote this expression now.  Count...
[01:57:31] and count
[01:57:33] dot data.
[01:57:36] - Yeah.
[01:57:38] Object is possibly undefined.
[01:57:43] Don't worry about the limp thing, we can put this.
[01:57:47] in here.
[01:57:48] Doesn't really matter, let's put it here.
[01:57:50] Even doing this
[01:57:53] doesn't actually solve our problem.
[01:57:58] So
[01:57:59] And I mean, the reason for that is that from TypeScript's perspective, this is a function call.
[01:58:07] It has no way to know that during a synchronous execution that it could return the same value, that it's the same thing.
[01:58:16] And...
[01:58:20] There are ways to solve this, and the key way to solve this is usually...
[01:58:24] around some kind of like type guard or null,
[01:58:27] is Null Guard. And...
[01:58:30] - Thank you.
[01:58:34] Let me show you an example of playing around with that Null Guard, okay?
[01:58:42] I went to the TypeScript Playground...
[01:58:45] And I wanted to try a bunch of different scenarios.
[01:58:49] Essentially...
[01:58:53] I wanted to see if we can look at something synchronous.
[01:58:56] And can I play with it?
[01:58:58] You know what? Actually, I'm jumping ahead. We'll get back here in a minute. Sorry, my bad.
[01:59:02] I need to choose one to show that playground.  This isn't quite right.  I got ahead of myself.  Okay, so...
[01:59:09] If you've seen type assertions and stuff, you know that you can do stuff a little smarter.  And one thing that you may have seen in Solid,
[01:59:16] is that
[01:59:18] If we use a callback,
[01:59:20] we have more control
[01:59:22] over what
[01:59:24] Um...
[01:59:28] like what we passed through here. And it's going to complain here because
[01:59:32] It needs to be keyed.  And this is important because...
[01:59:37] Thank you.
[01:59:39] Um...
[01:59:42] We're passing the value through.
[01:59:44] So, you could think of show almost as like an assert or a guard function in this case,
[01:59:50] we're passing the value through.  So now it knows that it's only running through  and that it has this value.  So count now becomes...
[01:59:57] this object, there's no possibility
[02:00:00] of
[02:00:01] of it not being that object
[02:00:03] And...
[02:00:05] TypeScript is happy
[02:00:08] Yes.
[02:00:09] The problem with this is
[02:00:12] is not granularly reactive. What I mean is,
[02:00:16] Our original statement didn't re-render the div.
[02:00:19] if
[02:00:20] Count was still true...
[02:00:22] and
[02:00:23] we just replaced it with a different true value.
[02:00:26] it would only update this content.
[02:00:29] If the value is coming back in through a callback function like this,
[02:00:35] Well,
[02:00:36] it has to recall the function, which means every child from this point needs to be recreated.
[02:00:53] Okay, how's chat doing? Sorry, I...
[02:00:59] Thank you.
[02:01:02] Yes, this is true as well.
[02:01:04] - Hmm.
[02:01:07] Time-narrowing is beyond what I'm capable of, to be fair. Well, I have to put it, you can use the same
[02:01:15] You can use the same sort of technique
[02:01:18] to
[02:01:19] Like for specific cases...
[02:01:22] Like you can be like, I want to type narrow this and write a guard for specifically that.  But in a general sense...
[02:01:28] I can't...
[02:01:30] The guards have to be specific.  So...
[02:01:33] in our case a show component is designed to
[02:01:37] basically be nullable to be a switch.  So this is only about nulling,  not about typed arrowing.
[02:01:43] At the moment.
[02:01:45] But where I'm getting at here is that
[02:01:49] This is kind of a solution and people who use TypeScript are just like, "Oh, yeah, sweet. Callback form, keyed, done."
[02:01:57] But this is kind of like...  And in a lot of cases, when you change something major,  you are kind of like going to a new place and you're replacing it.  The problem is like...
[02:02:08] If it were not for TypeScript,
[02:02:10] - Yeah.
[02:02:11] Mm-hmm.
[02:02:12] Almost no one would use this keyed property and they go for the more optimal updates.
[02:02:17] There's almost...
[02:02:19] Like there are reasons you want to use Keyed sometimes,  but there's a lot of reasons where you wouldn't.  And what I was finding was I was talking to developers,
[02:02:27] And I would never recommend Keyed because I understand, you know, like when you didn't need it, because I understand the performance implications.
[02:02:35] But then every TypeScript developer we're going through is like, no, types and solid are sweet.
[02:02:40] show keyed
[02:02:42] Got it. And I'm just like, what? Why are you guys using Keyed?
[02:02:46] Like, this is like not good.
[02:02:49] - -
[02:02:53] Yes, our match has the same thing.
[02:03:04] So,
[02:03:08] This is...
[02:03:10] Yeah, the problem now is it becomes a React.  Kind of, yes.  Except a bad React.  A React that actually recreates like...
[02:03:16] real DOM nodes. So like, there are times you do want it to be keyed. That's the point, right? Like, you want to swap out that section for consistency. You know, you don't want bleeding animations and all that, you know, data model, but there's plenty of times you don't want it to be keyed.
[02:03:31] And forcing everything to be keyed is not a good thing.
[02:03:34] So...
[02:03:36] The solution:
[02:03:40] seemingly, you know, that we talked about for a while was, well, what if
[02:03:44] Without the keyed,
[02:03:45] This could be...
[02:03:48] This is going to complain about me right now, but this could be a function...
[02:03:53] And now...
[02:03:54] It can still go through this guarding process...
[02:03:58] And now you go,
[02:04:00] I have a function that I don't need to check on.
[02:04:03] Because
[02:04:05] We control it from show, and now you don't need to do the checks.
[02:04:09] Pretty straightforward idea. Seems like a good one.
[02:04:12] People had been selling it on me, you know, ever since we, you know, even before we introduced Keyed.
[02:04:18] just needed to find the right time to introduce it.
[02:04:23] *sniff*
[02:04:27] You move too fast.
[02:04:28] Okay.
[02:04:29] I'm just saying...
[02:04:30] If you had a callback form that was not keyed, you could pass a type narrowed function
[02:04:36] version through and that way this would retain the fine-grained tracking.
[02:04:43] Right
[02:04:46] So...
[02:04:48] Basically,
[02:04:50] If I go to the change log and I can show you,
[02:04:52] We're talking about
[02:04:53] Before, you had this keyed version, right?
[02:04:56] where you can do this, get the non-null user and use it.
[02:04:59] You had the non-keyed version without the callback,
[02:05:02] where you'd have to null assert, but it would only update the one thing.
[02:05:06] And the new thing would be,
[02:05:08] Mm-hmm.
[02:05:09] You can now get the null-none user...
[02:05:11] when you don't use a key callback and you get a function and you can use name directly.
[02:05:18] Exactly.
[02:05:21] Yes.
[02:05:28] Mm-hmm.
[02:05:30] Thank you.
[02:05:31] So,
[02:05:33] If you exist on Twitter, you know...
[02:05:37] that
[02:05:40] I got here.
[02:05:42] And I was like, all right.
[02:05:44] Sounds good. And all I did was basically pass the signal straight through
[02:05:48] Because we do the check, the type narrowing, everything just kind of worked, and I was just like, done and done.
[02:05:54] All good.
[02:05:55] Let's ship it.
[02:05:57] It's been a long time coming. This looks good.
[02:05:59] Well,
[02:06:00] Not exactly. Had some astute people
[02:06:04] In...
[02:06:05] in our discord kind of be like,
[02:06:08] Ryan...
[02:06:13] What if you hoist the value out of that context?  Like what if you put it in a set timeout?
[02:06:19] Right. And that gets us to
[02:06:23] to my
[02:06:25] my Twitter examples here.
[02:06:29] Right.
[02:06:31] What?
[02:06:32] If...
[02:06:33] Someone...
[02:06:35] Did this. It's so funny. In Discord, when you post  the Twitter link, it gets code syntax highlighting,  but on Twitter you don't have code syntax highlighting.
[02:06:42] Yeah, yeah.
[02:06:44] Big props to Fabio.
[02:06:46] always thinking of these things.
[02:06:48] Honestly, part of this gap is...
[02:06:51] I'm not heavily a TypeScript user.
[02:06:53] So like...
[02:07:04] So...
[02:07:06] When I understood this, because this is definitely null, if someone switches user to false and then like,
[02:07:13] Four seconds later runs this timeout.  It's false.  Like, it's no longer there anymore.
[02:07:19] And I put the poll out there.  It's null or undefined or whatever, you know, it is.
[02:07:25] There is a big difference of opinions on how this should go.
[02:07:31] Most people...
[02:07:33] actually said null, or at least initially. Some changed their mind, but I think a lot of people their first gut reaction is like, it's a signal.
[02:07:40] Like...
[02:07:42] when it go like signals you always get the latest value that is the rule we have all these like the thing is with react
[02:07:49] It's immutable, it's in the past.
[02:07:52] you get the pass value.  With solid, it's,
[02:07:56] kind of like deeply mutable. It's not like each atom is immutable but like the structure is mutable. And you always get the latest value. Always, always, always get the latest value. So,
[02:08:09] In both cases, if there was ever a tear where you could get a mix and match of those things,
[02:08:15] We bail.  Like, we do suspense.  We do transitions.  We do stuff.  We're like, consistency is king.
[02:08:27] And...
[02:08:28] But the problem here is
[02:08:30] I mean,
[02:08:32] I could show you, and I will with the TypeScript Playground,  but essentially this will tell you that this can't be null.  Like if you hover over narrowed user,
[02:08:43] It'll be like, oh no.
[02:08:44] narrowed user...
[02:08:47] Um,
[02:08:48] can't be null. And actually, because I've implemented this, we can actually probably look at this in one of our
[02:08:56] Tests the show spec. Yeah.
[02:09:00] Let's look at this.  Testing non-key show control.
[02:09:05] Testing show control flow.
[02:09:10] I want non-keyed
[02:09:12] function show control flow.
[02:09:16] I guess this one isn't like a good example because it's
[02:09:20] like it starts at zero. If I made this like undefined or something,
[02:09:28] And then, so this was like...
[02:09:30] Number...
[02:09:33] or undefined
[02:09:34] Let's pretend this was the case. What you're going to see here is count is number undefined.
[02:09:40] but this one is an accessor of numbers. So here,
[02:09:44] The Undefined is God.
[02:09:46] But the problem is
[02:09:48] Thank you.
[02:09:51] you know,
[02:09:52] uh...
[02:09:54] Can I do this as a matter of expressions? Maybe?
[02:09:57] Set.
[02:09:58] Timeout.
[02:10:02] Count.
[02:10:06] If I go here,
[02:10:10] it's still number, even though it potentially could be null.
[02:10:22] Thank you.
[02:10:25] Thank you.
[02:10:36] So like this is problematic because TypeScript's
[02:10:41] you know, lying to us. I implemented this and I was like, it's fine.
[02:10:46] But
[02:10:47] I don't know if everyone who read the Twitter poll understood what I was trying to say here, but
[02:10:52] This is the base behavior. If you're in solid, you get a null.
[02:10:57] even though TypeScript would tell us that it can't be null.
[02:10:59] So there's a problem here.
[02:11:01] When I put this post up,
[02:11:04] I was like...
[02:11:05] Screw it. Let's just throw an error, right? This was actually where I was sitting. The least popular answer.
[02:11:12] And the reason I put the poll up was because in my head I only had these two options.
[02:11:17] And...
[02:11:18] Fabio and people in Discord and a bunch of TypeScript users were like, "No, just make this a previous value."
[02:11:28] And...
[02:11:30] I didn't...
[02:11:31] Like the previous value.
[02:11:33] Because of the consistency thing.  And I'm going to show what I mean by that in a minute.
[02:11:37] Um...
[02:11:40] Thank you.
[02:11:42] And
[02:11:44] The previous value
[02:11:48] While you could say, make a stipulation where you're like, this is always the previous value.  It's not.  Solid is not immutable.
[02:11:55] So,
[02:11:56] It's
[02:11:56] If you get past the fact, it's not previous value, it's previous value
[02:12:02] for when it was true.
[02:12:03] So if...
[02:12:04] If user changes 10 times, it's the last user before it goes,
[02:12:08] to know
[02:12:09] And secondly,
[02:12:12] If this condition
[02:12:14] isn't just user. Let's say it's user.visible or something.
[02:12:20] You have a new problem.  And actually, I made a second poll to show the problem with...
[02:12:25] using it in the past.
[02:12:28] -
[02:12:31] Now I'm using a store, which is deeply reactive.  So if you're basing this on user.visible,
[02:12:38] And you're using this narrowed thing for visible.
[02:12:41] What?
[02:12:43] should you do here? Because
[02:12:45] Here's the thing, even if I keep the value
[02:12:50] for when it was last true.
[02:12:52] Visible will have updated.
[02:12:54] So...
[02:12:56] In a sense,
[02:12:57] Thank you.
[02:12:59] You will still have...
[02:13:01] this narrowed user, right?
[02:13:04] who kind of shouldn't exist in this context anymore  because it's been unloaded.
[02:13:10] But now...
[02:13:12] visible
[02:13:13] is false
[02:13:15] Even though...
[02:13:16] You know, it was initially true.
[02:13:29] Yeah, because I mean, here's the thing, right? No, you should never actually hit this situation. This is the crux of the problem, right?
[02:13:38] If you have a timer like this, you should be releasing it.
[02:13:40] If you expect it to exist past the lifetime of the show component,  then don't use the narrowed version.  Use the original user version.  You know what I mean?  Like, this example is kind of weird, right?  And you shouldn't be doing synchronous setting either.  Like, while you're rendering, you shouldn't be setting.  Like, basically, the situation should...
[02:13:59] never happen.
[02:14:01] But,
[02:14:02] It's an awkward place because
[02:14:06] Like we're showing something top level.
[02:14:08] What if you're passing it through to
[02:14:12] other components and stuff, using it in their hooks and stuff.
[02:14:17] It actually works differently.
[02:14:19] Most of the time when you change something, it changes it, right?  And in here, this one doesn't change.  So like if you set two things at the same time, like set user to...
[02:14:28] Like pretend this user is selected user.
[02:14:30] that changes the user and there's a user.visible.  So let's pretend you change both user.visible  and selected user at the same time.
[02:14:40] You get inconsistency
[02:14:42] in this leaving it in the past thing.
[02:14:45] - Yeah.
[02:14:46] So like very, very, very not stoked with this solution. It makes TypeScript
[02:14:52] Happy
[02:14:53] But on the other hand, it basically...
[02:14:56] throws away many of the kind of consistency guarantees that we've come to expect from
[02:15:06] you
[02:15:14] Well, I mean, it's not my responsibility. This clear timeout could happen inside a child component that has no...
[02:15:20] knowledge of the show like but you're right the end user should be cleaning this up
[02:15:26] so to speak. It's kind of like when people access state and react after the component's unmounted.
[02:15:33] And the problem is,
[02:15:36] Thank you.
[02:15:37] The only true way of doing this is degrade the data all the way to pure immutable cloning stuff.
[02:15:44] That's not how solid works.  It's just not happening.  We're not going to like...
[02:15:48] We're not going to...
[02:15:49] Um...
[02:15:50] make our data structures completely immutable. Like again, you're back at react, you can't, you can't do that.
[02:16:04] Yeah, I think you're onto something there in this sense. This is a huge argument for why values should stay in the past.
[02:16:14] That being said, it's not our model.  And basically, you're never going to hit this case anyways.
[02:16:20] So like
[02:16:23] This is the kind of thing when you get nerd sniped by people in your Discord.
[02:16:27] But...
[02:16:28] knowing this is still...
[02:16:31] an important thing from a design standpoint as a framework designer.
[02:16:57] Probably, right?
[02:17:07] And there's a lot of arguments with Fluram, because they're like, "Look, keyed would work this way." Like, you'd get the previous value.
[02:17:15] from a reactivity standpoint, it's very
[02:17:17] awkward that you ha you can be in a situation where you have the thing but shouldn't have the thing like you're not getting the latest
[02:17:24] thing, but you are getting the latest update of that thing, that kind of inconsistency is
[02:17:30] Like from my perspective, almost unacceptable.
[02:17:36] Thank you.
[02:17:39] *sniff*
[02:17:39] yes this is such an illusion  no
[02:17:51] The truth is...
[02:17:53] And we're starting to hit on it.
[02:17:58] Right?
[02:18:00] Like we're starting to hit on like this problem...
[02:18:07] is
[02:18:09] comes down to the basics of TypeScript. Let's just get into the TypeScript.
[02:18:14] Playground and play with a few things and
[02:18:16] uh,
[02:18:17] And...
[02:18:19] And look at that.  So...
[02:18:22] Let's...I have the open one. Let's just...
[02:18:29] Let's just start with the most basic
[02:18:32] version of this. I'm gonna...
[02:18:34] We'll get back here in a minute.
[02:18:36] because
[02:18:38] I'm
[02:18:39] If...
[02:18:40] real value
[02:18:43] in TypeScript.
[02:18:46] real value.
[02:18:47] Pretty obvious what's going to happen here.  It's just a string, right?  And if you go setTimeout...
[02:18:56] you know, real value.
[02:18:58] what you're gonna see here is we're back to stringer undefined.
[02:19:01] Okay, this is basic.
[02:19:02] TypeScript.
[02:19:04] Now, couple things to consider about TypeScript.
[02:19:06] If I go in here and go real value equals undefined,
[02:19:12] TypeScript.
[02:19:13] knows that it's undefined.
[02:19:15] Right, so now
[02:19:17] you know,
[02:19:19] At this point, it goes back to stringer undefined, but TypeScript's smart enough.
[02:19:22] If I go...
[02:19:24] Update.
[02:19:25] Let's make it more close to home.
[02:19:29] Thank you.
[02:19:33] .
[02:19:41] If I do this
[02:19:43] TypeScript has no clue. It thinks it's still a string, right? So the second you
[02:19:50] have a system...
[02:19:53] where you
[02:19:57] where you're not inlining the mutation or whatever,  as soon as you're hoisting into setter functions and all that stuff,  unless the value is locked in the past...
[02:20:08] Um,
[02:20:09] you're going to have trouble.  So this is kind of true of signals in general.  Just like...
[02:20:15] Because the scenario here is that, and not just like reactivity, period.  The problem is TypeScript...
[02:20:22] works off the premise that your code is immutable,
[02:20:26] Um, essentially.  And like in the past.
[02:20:30] Which is, you know, a reasonable place to be coming from.
[02:20:39] Right? But...
[02:20:42] It's a little bit more complicated than this. Yeah, I mean a decorator would be nice. I'd be into that, but it's  There's ways to kind of
[02:20:52] like,
[02:20:53] lie. And I'm going to continue a bit with that because like, the problem is, it still just comes down to the fact that TypeScript can't handle that initial situation where we had which was signal and signal dot value, like it can't,
[02:21:07] handle those two function calls.  But you might be going...
[02:21:10] Ah!
[02:21:12] What if
[02:21:15] .
[02:21:15] We made our signal getter a property like a getter value.
[02:21:23] As it turns out, if I do that,
[02:21:24] And then I go a.value, I get a string.  And then I go set type out, and it's back to stringer undefined.
[02:21:30] We're solved, right?
[02:21:31] -
[02:21:32] I'm going to go
[02:21:34] Actually, no.
[02:21:37] Like this is like the first level thing where you're like, okay, well, that's it. We shouldn't use functions. Even though functions are incredibly composable. We should just use dot value. And I was like for a while going,
[02:21:48] TypeScript, can I decorate my signal to tell it to act like a property?
[02:21:53] right? Like, if we can do this, then, you know, we're in a better place. And don't get me wrong, this is
[02:21:59] Better.
[02:22:01] I don't know.
[02:22:08] - Yeah.
[02:22:09] But,
[02:22:09] there's still a problem here because TypeScript has to assume that every function
[02:22:15] is going to be called at a different point. It has no clue.
[02:22:17] And the truth is, what do we do in reactive systems?
[02:22:21] To...
[02:22:23] propagate reactivity so we don't lose reactivity.
[02:22:26] Even if stuff executes synchronously, what do we do? We wrap it in functions. So the second, even if this worked, the second that you go to like put it in a reactive expression that runs synchronously,
[02:22:40] It's gone.
[02:22:42] Right?
[02:22:44] So like...
[02:22:45] dot value
[02:22:47] can't, like, TypeScript can't tell the difference between a synchronous executed function and
[02:22:57] And like...
[02:22:59] a callback like this.  So we almost lose the value immediately.  And some people might argue that this is a very big lie,  because,
[02:23:12] This is a function call. So math.random.
[02:23:17] is a real thing, you know.
[02:23:22] You know, like...
[02:23:25] So...
[02:23:26] I'm not saying...  We know the rules of signals.  This is not going to happen.  So this is actually kind of convenient.  But in general...
[02:23:34] The fact that this works in TypeScript
[02:23:36] is kind of a hack. Like, it's not telling us the truth.
[02:23:40] Because there is no guarantee...
[02:23:43] with a property access.
[02:23:45] in reality.
[02:23:46] and TypeScript can't tell you that.
[02:23:49] So like
[02:23:52] As much as we want to believe that this is type safe, and that's a good assumption, it's not the truth.
[02:24:03] Right.
[02:24:06] So like
[02:24:08] Okay.
[02:24:10] This isn't bad.
[02:24:12] It's slightly better.
[02:24:13] I don't like the trade-offs because of the composability,  but it is slightly better for TypeScript, but it's still...
[02:24:19] has a bunch of traps in it.
[02:24:22] The other reason I don't like it is because it's like immutable and we can...
[02:24:25] Thank you.
[02:24:26] We can talk about that as well, but like...
[02:24:29] .
[02:24:30] like you pass the getter and the setter together. But I've talked about another stream. So it's a whole other thing. But essentially, even this
[02:24:37] Isn't like...
[02:24:39] the whole truth. So can we do anything else?
[02:24:42] Well, we already showed
[02:24:45] - Thank you.
[02:24:46] the naive thing, right?  If we, if we make a real value,  a signal,
[02:24:51] And then we call as a function, unfortunately, string or null.  It doesn't remember.  SetTimeoutString or null.  So this is good, but this is bad.
[02:25:02] Um...
[02:25:03] How about a non-null assertion? I learned about this in the process of making the stream, where you can actually retype the getter
[02:25:11] in a certain way. Like, check its value and then say it's a non-nullable getter.
[02:25:17] This is really cool.  And in a sense, this is kind of like what we're doing with the show component.  Because now, with this cool little helper, which I'm even debating publishing it for  Solve maybe, you can basically go non-null-b, and now...
[02:25:31] B is fine here as a string.  Of course, it's still narrowed here, which is our problem.  But, you know,
[02:25:38] We can do this now.  B and...
[02:25:41] B dot value.  Like, obviously B doesn't have a value, but this...
[02:25:46] Sorry, not beat. You can do...
[02:25:48] non-null
[02:25:50] B.
[02:25:52] and b.value, right?  Obviously, this isn't the right type,  but this actually works.
[02:25:57] works.
[02:25:59] So every instance of B,
[02:26:01] from that point on.
[02:26:03] now thinks it's the narrowed version
[02:26:05] That's the string.
[02:26:15] Does that fix user.filterdirtless? No, because
[02:26:19] We keep all our values in the present
[02:26:21] All this...
[02:26:22] Like, this is the problem that the show component has.  It would be null.
[02:26:26] Even though it says it's just a string. Do you know what I mean?
[02:26:32] so
[02:26:33] Okay.
[02:26:34] This is this. So let's do something even crazier.
[02:26:39] What if we let our signal instead of costing it?  Well, as it turns out, because if you let it, it thinks it can be reassigned.
[02:26:47] It actually works properly.
[02:26:49] So you can actually go non-null C string, setTimeoutStringerUndefined. So funnily enough,
[02:26:54] this little
[02:26:56] trick in TypeScript lets this work. Problem is we can't really leverage this trick because
[02:27:01] Introducing a variable into a context
[02:27:03] There's no way to say that this is...
[02:27:05] like,
[02:27:06] it thinks it's a const coming in.  If you, like, in a sense.  Like, it sees no opportunity of reassignment.
[02:27:13] So...
[02:27:15] we don't get this behavior. And I understand why not. Like in theory,
[02:27:19] you know,  this would be kind of cool.
[02:27:22] Like you think, think about it in a callback, when you get a variable in technically it's not.
[02:27:27] a const, you can reassign it locally. But they treat it like a const for convenience, I think.
[02:27:33] which makes sense.  But otherwise...
[02:27:36] you know, we could actually get the right behavior.
[02:27:42] Right? It's funny. It's because this assertion here...
[02:27:46] makes it think that it can be reassigned.
[02:27:48] But I tried this.  This doesn't work for us.  So.
[02:27:52] Mmm.
[02:27:55] *sad*
[02:28:02] So...
[02:28:06] Yeah, I mean...
[02:28:08] No, if this was a Matt Polcock screen, you guys would be learning something valuable.
[02:28:14] .
[02:28:16] Oh.
[02:28:16] ...
[02:28:17] So...
[02:28:19] Thank you.
[02:28:21] You are almost at the exact moment when I took the thumbnail shot.
[02:28:28] Like, I'm probably making the same face right now.
[02:28:31] - Thank you.
[02:28:32] -
[02:28:34] *sniff*
[02:28:37] Like...
[02:28:41] It's really painful, all the different variations on this, and
[02:28:47] Like from my perspective...
[02:28:49] Value in the past...
[02:28:50] might be acceptable for TypeScript, but it's the kind of decision that as a framework designer, I would regret in the future.  It would introduce some unexpected variable that then suddenly I had the support for all of time because of my stupid mistake.  And I've made those kind of mistakes in the past.  And it's the thing that you learn over time to get better at avoiding them.  We all make them initially.
[02:29:12] But like...
[02:29:14] Like, it's one of those.
[02:29:17] Just letting it null through, I mean, I was fine with that initially.
[02:29:23] The funny thing is, I couldn't make up my mind.  I actually...
[02:29:26] Nulled through originally, then I went to previous for like a couple days and
[02:29:31] And...
[02:29:34] I talked to a whole bunch of people.
[02:29:44] and like basically the the challenge i had is if
[02:29:51] Even if they would never hit this use case,
[02:29:53] People really into TypeScript did not want to use the non-null assertion and if
[02:30:00] - If they knew
[02:30:01] That it was...
[02:30:02] could be broken, like in the set timeout case that they will never use.
[02:30:06] they just put Kied on.  And the second they put Kied on...
[02:30:10] I lose.
[02:30:11] Like the whole thing is pointless.
[02:30:14] Thank you.
[02:30:15] Yeah  I think
[02:30:26] I think you're starting to get where I'm getting at.  Because what I started realizing was...
[02:30:35] I care about runtime consistency.
[02:30:38] Of course I would.
[02:30:40] TypeScript,
[02:30:42] heavy people care about
[02:30:44] Type consistency.
[02:30:46] They will give up.
[02:30:48] Okay.
[02:30:48] all the performance in the world,
[02:30:52] which is like, this is the problem I was having.  I couldn't get in their mindset.  I'm like, you're telling me you'd re-render your whole thing.  Like you go back to Backbone style updates.
[02:31:02] Just...
[02:31:03] to save yourself from putting an exclamation mark.
[02:31:06] Like I couldn't understand that thinking.  It was like so foreign to me.
[02:31:12] That someone would like
[02:31:13] Basically, like, why use a JavaScript framework?  Why don't you just, like, spin around on a chair?  Like, it's...
[02:31:21] From where I was sitting, it takes a lot of empathy to be in my position, but this was something that I was having a very hard time.  And every person that was very heavy on TypeScript was just, yeah, keyed, keyed.  And I was like...
[02:31:34] Like,
[02:31:35] - Yeah.
[02:31:37] You know
[02:31:40] - Uh.
[02:31:41] Yeah, yeah, I guess so. Like,
[02:31:44] This was one of those ones that was just like, man.  So I want...
[02:31:52] And some people are like, well, you should pull the key out of the show component.  I'm like, yeah, fair, fair.  But that doesn't change it.  People go looking for it.
[02:31:57] So I need to have a solution here.
[02:32:01] that satisfies
[02:32:02] Everybody. And I was even for a moment considering giving past values because I could kind of make some pseudo explanation of it. But...
[02:32:13] .
[02:32:13] Yeah, I mean...
[02:32:14] It's been hinted at a chat
[02:32:16] Punch.
[02:32:17] If this situation should never happen,
[02:32:19] Like, look.
[02:32:20] The only overlap of type consistency
[02:32:24] and of runtime consistency,
[02:32:29] It's a thrown error.
[02:32:32] Right.
[02:32:33] - Thank you.
[02:32:35] I... this made a huge...
[02:32:40] come back after I did it. People still... LogFalls is definitely still the winner here  on this side, but you start thinking about it, it's like the only way that we can actually guarantee
[02:32:54] that it is not null and at the same time that things aren't consistent.
[02:33:04] Thank you.
[02:33:05] Yeah, I know. And the thing is, you can't really explain it.
[02:33:09] *sniff*
[02:33:15] - Yeah.
[02:33:16] Yeah, yeah, yeah. I mean, you could do this thing, but...
[02:33:20] Yeah, so it's tricky with an expression because you gotta like layer the expression. Yeah, I know there's ways that you could like add one  additional check and then do it like you can add my non null here and then I
[02:33:31] It's still tricky though because like...  The non-null is kind of lying to you even.  Unless your solution is to throw...
[02:33:40] As we see here,
[02:33:43] This is lying to you.  Any level of this guarding is lying to you.  Because the truth of the matter is...
[02:33:50] a signal
[02:33:52] which is always the latest value,
[02:33:55] can be undefined in this case.
[02:33:57] The exclamation mark is...
[02:34:00] the most accurate
[02:34:02] thing. You're saying like, hey, I know it's not null here.
[02:34:07] TypeScript will probably never help us with this.
[02:34:11] Maybe like we can convince them to make it
[02:34:15] like a way of decorating it so that it looks like this,  and we can kind of get halfway through.  But as I mentioned, the problem with reactivity  is you pass everything in function,  so you almost immediately lose this benefit.
[02:34:26] And...
[02:34:27] Even this is a lie.
[02:34:30] But you know,
[02:34:32] As we've learned here today,  line to TypeScript is a good thing,  like from a library perspective,  because it lets the end users...
[02:34:39] Like,
[02:34:40] You know, it's like a white lie.
[02:34:47] Well, I don't think it's a big performance thing because you'll never throw the error because you'll never do this.
[02:34:57] - Thank you.
[02:35:04] Yeah, I know. But the reason I did the poll is not to get the answer initially. I mean, the later ones, like this one, the second one was probably like, you should completely ignore this. I wanted to know people's gut feeling. When they first saw it, and they just clicked on it, and they weren't really reading, and they're just whatever, and they didn't understand the situation, what their gut read. And their gut read is a signal is a freaking signal. That's what I read here.
[02:35:30] Right.
[02:35:31] That's the gut read.  Like you call the function, you get the value, you know?
[02:35:36] So that's sort of where it starts and really where it should end.
[02:35:42] I'm okay. I would be fine with Null.
[02:35:46] generally because, you know,
[02:35:48] This is, you know, I could be like, it's a TypeScript problem.
[02:35:50] I'm fine with an error because it's consistent.  Because at least we didn't break things.  You know, like we didn't like tear our consistency.  And it seems like most people that are talking to TypeScript are fine with an error.  Because then TypeScript's not lying.  So this is, as I said, the only real overlap here.
[02:36:10] Yeah, this is for 1.7, right? This is a new feature.
[02:36:22] *sniff*
[02:36:30] The biggest thing for me is having to do derived signal that returns null if it's not type asserted.
[02:36:34] to then being able to do non-knowledge search and stuff.
[02:36:43] Too many, too many, too many, Sammy.
[02:36:45] Institute.
[02:36:50] Yeah, maybe I'm not quite following.
[02:36:53] Thank you.
[02:36:54] This stuff drives me nuts too.
[02:36:57] I don't like it.
[02:36:59] But I'm willing to be like, okay, if you care enough about it, do it.
[02:37:08] So
[02:37:09] Yeah, though the problem is...
[02:37:13] I could kind of do it, but solid...
[02:37:17] isn't a compiler in the same way Svelte is. So our control flow isn't special.
[02:37:23] for better or for worse it's so funny like because sometimes we don't get credit for this piece because people are like
[02:37:29] They see the four component and they're like, "Oh, it's like freaking Svelte."
[02:37:33] view or whatever and it's like no actually it's way more like react
[02:37:37] Like it's not a compiled control flow like solid doesn't know if the control flow our compiler doesn't actually know that and
[02:37:46] For component could have been written in user space.
[02:37:50] So, like, we could make four special for...
[02:37:54] a plugin because we're being practical, but from like a language design standpoint, we have no foot to stand on because solid is just JavaScript.
[02:38:05] which is a whole other topic which I find amusing because as React gets less just JavaScript,
[02:38:11] Yeah, anyway.
[02:38:16] Yeah, I mean,
[02:38:20] Yes, exactly. Like...
[02:38:25] that's the thing you should be cleaning up events go away automatically because the dom goes away like
[02:38:30] This is such an edge case and if you really want it to happen, I wrote two error messages. Maybe  some people can help wordsmith the error messages for me. But what I ended up doing here was
[02:38:42] I mean, a dev error and a non-dev error.  And in the non-dev error, it's just like stale read whatever,  because I didn't want to use a package space.  But you have to err in both modes to be consistent.
[02:38:52] Um,
[02:38:53] You know, live up to the guarantee.  But what I did...  Sorry, it's in Flow...
[02:38:58] was I was like, look, attempting to access a stale value  from name a component that could possibly be undefined.  This may occur because you're reading the accessor return  from the component.
[02:39:07] at a time where it has already been unmounted. We recommend cleaning up any stale timers or async  or reading from the initial condition.
[02:39:14] I mean it's a bit wordy but
[02:39:17] This gives me the possibility to give you a really detailed error message.
[02:39:21] Um...
[02:39:22] and basically tell you what to do.  And we can even link docs to it, you know, if it, if it, you know, makes sense.
[02:39:29] and
[02:39:31] It's very clear what the solution is because it's like if you want to do something out of the loop there, just pass the outer user in.
[02:39:40] Just like pass this version to in, not this version, you know.  I named it the same in this example so it's not good, but you know what I mean?  Like pass in user...
[02:39:49] rather than a non-dual user.
[02:39:52] Thank you.
[02:39:57] -
[02:40:02] Yes.
[02:40:03] It's based on the condition.  It's not based on whether it's null or not.  It's based on the condition.  In this case, like...
[02:40:11] These it's the same thing because it's the nulc
[02:40:14] but it's based on whether the condition is true or not.
[02:40:21] Thank you.
[02:40:27] Yeah, I'm this is someone can help me with the text to make it nicer. I'm not used to writing this but this is the new norm, right? We're gonna we'll have like a string lookup table for our for in dev mode or like paragraphs of explanations. I like well.
[02:40:41] When strict mode happens, we'll have to do this too, right?
[02:40:51] Yeah.
[02:40:52] That's where I think I landed.  I only landed on that this morning.
[02:40:59] I posted the stream before even...
[02:41:02] having made that decision.
[02:41:04] Um,
[02:41:05] But like...
[02:41:06] So I have to give it a day because every other time I made this decision, I've had to sleep on it.  And then I went back and changed my mind.  But...
[02:41:15] This...
[02:41:16] After talking about it, once I convince people that the past is a terrible idea...
[02:41:22] What they come back with is like
[02:41:25] most TypeScript users are like, okay,
[02:41:27] Fine, get rid of this feature.  Don't add it.  And, you know, if we need to, we'll use the exclamation mark or the, you know,
[02:41:37] Thank you.
[02:41:38] optional chaining and then i then i like i stopped them for a second i go so you're just  going to use key control flow they're like yeah we're just going to use key control flow and i'm  like no okay that's like that's not that's not working for me
[02:41:57] Thank you.
[02:41:59] Yeah, I have no real guard against that.
[02:42:03] This isn't guaranteed. It's kind of like when people set state.
[02:42:08] in React after component amounts. It's the best example I can think of because it's like
[02:42:12] If you do stuff, like this is the kind of thing, that's why you got to error and prod too.  Like you just got to error.  So people like go, oh, there's this bug that we haven't reproduced and we have to find it.
[02:42:28] No, not quite.
[02:42:31] I did want it to come out this month, but we've been working with library authors. I got to get into the docs, make the proper updates to docs. I've been talking and putting the betas out so the ecosystem team goes in. A few libraries have mentioned that they have some breaking stuff. I want to look at that personally myself and make sure that it makes sense. See, the cool thing about these breaking changes is that
[02:42:53] from an end user standpoint,
[02:42:55] Unless you're doing some more complicated or weirder stuff, it's not going to hit you.
[02:42:59] It's just going to make everything a little stricter, maybe a couple things here and there. Library authors, this is...
[02:43:04] Not this one so much, but...
[02:43:08] the
[02:43:11] this,  uh,  like stricter,  uh,
[02:43:14] Not the input one, the stricter JSX element one that we've been talking about.
[02:43:18] earlier
[02:43:19] You probably might feel that a bit more because of the whole like
[02:43:23] return a memo now you have to cast it or return a fragment so
[02:43:34] Hey.
[02:43:39] Yeah, so if it switches but falls to back true, that would be...  I mean...
[02:43:42] This is why you should do cleanups.
[02:43:47] But like, yes, it's still going to be true at that point.  So it's...
[02:43:51] Not inconsistent.  Because, again...
[02:43:54] The way solid works, you get the latest value.
[02:43:57] You get the truth.
[02:43:59] It is not null.
[02:44:00] So it is fine.
[02:44:07] You're going to have to be more specific, I think.
[02:44:17] Thank you.
[02:44:18] We can, is it off the TypeScript topic though?
[02:44:22] Or the solid one for the topic? If so, I want to...
[02:44:25] Save that for maybe about 30 more minutes, and we'll talk about this week in JavaScript.  Because there's a couple other things in this release that I want to go over, just so everyone, you know...
[02:44:36] is on the page.
[02:44:37] Uh,
[02:44:39] This...
[02:44:41] - Yeah.
[02:44:42] Um,
[02:44:43] There's the small stuff.
[02:44:45] I'll
[02:44:47] Actually, these are all actually kind of fun.
[02:44:49] Haha.
[02:44:52] Yeah, let's let me I'll just go top down for the rest of these.
[02:44:55] Okay, check this one out.  This is a small one.
[02:44:59] Solid has this odd error
[02:45:01] Handler?
[02:45:02] And we're going to continue supporting it until we can deprecate it, but we are moving from on error to catch error.
[02:45:09] Um,
[02:45:10] Again, people don't use this.  This is the underpinnings of error boundary,  and you probably should just use error boundary.  But the problem with on error was...
[02:45:16] You could have like siblings.
[02:45:19] This is how you could do error boundary catching.
[02:45:23] Because what it did is it would be like odd error.
[02:45:28] Do something.
[02:45:30] Right?
[02:45:33] And then he could go...
[02:45:35] on error, do something else, right?
[02:45:39] You could register as many of these as you want, and you'd register with a parent context.
[02:45:44] The problem was people had really different mental models of what this meant.
[02:45:47] Some people are like, oh, this is a sequence of try catches, almost like they wrapped each other.  I'm like, no, no, no, these are siblings because you have no knowledge.  And there's a difference when you're initially rendering and you haven't registered them all.  And some people are like, well, maybe you should reverse the execution of on error.
[02:46:02] So that, like, it, like, bubbles.  And I'm like, no, they're like...
[02:46:05] What if the error is registered in something that happens after your component? So if you would have errored
[02:46:12] on initial render.
[02:46:13] Your handlers
[02:46:15] the first one that gets hit, and if you error
[02:46:18] Later, it's some other handler that was defined after you that you're not even aware of.
[02:46:23] All this stuff is just terrible. So the solution is model after try catch. It should be very explicit that errors should have a single handler and that you can go up them perceptually, kind of the way error boundaries work, and not register multiple handlers.
[02:46:38] If you need a second handler, you have to make the decision to wrap it so that there's a clear progression.
[02:46:44] So...
[02:46:45] that's just what we did.  So...
[02:46:47] Catch error.
[02:46:48] do the stuff
[02:46:50] Handle the error.
[02:46:52] 90% of you will never use this.  I just wanted, this is one of those kind of primitives we're working towards.
[02:47:02] Just use error boundary.
[02:47:05] Just, you know, this is how we're approaching it.  The beautiful thing with primitives is you can just, like, introduce a new primitive and kind of slide the old one out.  And you can even implement the old primitive using the new primitive, generally speaking.  So usually, like, there's a good deprecation story here because we can, like, piecewise...
[02:47:22] Um...
[02:47:23] You know.
[02:47:25] Mutate salt like in theory, I'm we're gonna obviously do a bigger change with 2.0 and I don't mean bigger  That's an APS. I just like some behavior things, you know important for a breaking standpoint, but like in theory one could take this approach and
[02:47:37] And as long as they named the new thing a new name, you could literally migrate
[02:47:44] the framework almost without like,  um,
[02:47:48] losing anything as long as you exported the old things.  Like, it would get bigger, but you'd actually
[02:47:53] Like you could actually like just migrate, like you could stay like 1.0 forever.
[02:47:59] - Okay.
[02:47:59] You know, I'm not suggesting that that'd be kind of terrible, but like you could just like deprecate everything and just like
[02:48:05] because it's so piecewise anyways.  Um,
[02:48:08] Okay.
[02:48:12] Yeah, some...
[02:48:13] standardizing of un... I mean, it's hard to tell where the line is on breaking changes. This one I look as more of a bug fix, but
[02:48:21] You guys can decide on it, but...
[02:48:24] We had
[02:48:26] this behavior
[02:48:28] Where we
[02:48:29] cast some errors to errors and other ones like strings not to
[02:48:34] Now we're just like, when we handle an error with solid errors, they're always error objects.  And if you want your original object, it's going to be tagged on as .cause.
[02:48:44] *sigh*
[02:48:45] this we should have been doing this anyways and the inconsistency was weird um
[02:48:51] I hope this doesn't cause...
[02:48:52] too many
[02:48:54] issues, but...
[02:48:55] It's a very edgy kind of case.  Again, almost everything was cast in errors except for strings.  But now we have better error information.
[02:49:03] Um
[02:49:05] Big things, DevTools.
[02:49:06] Performance. In dev mode, we had really slow performance.
[02:49:13] And, um...
[02:49:15] It was because I was doing this weird thing where I was like trying to generate unique IDs for every signal in the graph.
[02:49:21] and I thought the dev tools would need it.
[02:49:22] It turns out Damien has way smarter ways of doing this.  And we just removed it.  Because you'd see when you enlarge stores,  Solid got really slow in dev mode.
[02:49:31] Um...
[02:49:32] Obviously in production it was fine, but in dev mode it wasn't. Now with this change dev mode it's gonna be a lot
[02:49:37] faster when you have stores of like tens of thousands of items.
[02:49:43] Okay, let's get into a few of the fun ones.  We had a support for prop and atra in our spreads.
[02:49:48] which is good. This helps with people working with custom elements specifically.
[02:49:52] it's
[02:49:54] Uh...
[02:49:55] So
[02:49:56] Yeah, people using web components really appreciate this one.
[02:50:00] We also...
[02:50:02] Again, this is a PR from the community. I'm gonna put all the like apps in this when I do the actual release  So how I'll thank all the people the actual contributors  Don't apply special props. We basically the way we did like I
[02:50:14] Special handling of props was based on
[02:50:17] like the property name.  And again, custom elements,  you can reuse certain property names  and use them differently.  Like read-only, we handle the Boolean always.  But if someone had a read-only  on their custom element,
[02:50:30] It wouldn't have the DOM's native behavior, but Solid would treat it like it did because it was read-only. So now...
[02:50:40] The special behaviors are actually scoped to specific elements, which means that, again, custom elements have better support to be able to use the same attribute names as special properties on other DOM elements.
[02:50:55] No clue what profit attribute are?
[02:50:57] These are namespaces that force the compilation  and the runtime to work in a certain way.  What I mean by that is,
[02:51:04] We assume in Solid...
[02:51:06] Let me clear this out.
[02:51:09] These are all attributes.
[02:51:10] So if I...
[02:51:12] If I want like...
[02:51:14] Type's not a good one. Let's do...
[02:51:16] placeholder
[02:51:20] and I put count or something, okay.
[02:51:23] I know it should be a string, doesn't matter, but...
[02:51:25] If I do this,
[02:51:27] or you're gonna see here a set attribute
[02:51:30] placeholder.
[02:51:31] Like, it thinks it's that.  But what if...
[02:51:34] Especially...
[02:51:36] What if I wanted to actually set the DOM property instead of setting the attribute?  Well, if you put prop colon in front of it,
[02:51:43] Now it's l.placeholder equals count.  So these little,
[02:51:49] Yeah, this makes a huge...
[02:51:51] a deal for GSX because it, like, the problem is a DOM can't handle special objects. It can only handle, like, strings. So if you're, like, trying to use web components that, like, and you want the API to be able to accept
[02:52:07] Like...
[02:52:08] you know, like an array and you want to keep references and not serialize it to a string, you need a way of indicating it. So we have prop for prop and then we have atra, which forces attribute. Of course, the default for stuff is attributes, so it's not a big deal, but on
[02:52:24] Custom Elements.
[02:52:25] again, this comes from my experience with it,  we actually default to props that
[02:52:29] Because...
[02:52:30] Like it was actually a satyr default because
[02:52:34] Most things...
[02:52:35] actually kind of want to be props because they treat it almost like custom components, you know, so
[02:52:39] We have Atra to force it back to attributes for custom elements where you want it to be.
[02:52:47] Yeah, I mean, again, this comes from the fact that Solid was built with...
[02:52:52] custom elements in mind at the very beginning.
[02:52:56] But we supported that for a while, but I didn't support it for spreads.  So now you can actually spread in...
[02:53:01] prop colon or attribute colon.
[02:53:05] Uh...
[02:53:06] Okay.
[02:53:10] *stutters*
[02:53:12] Read only read only. Okay, big one. Our guy, Alexis, who writes great plugins around solid stuff like...
[02:53:25] react of ours. He's been working on his own react for get compiler called  forgetty recently. He builds, you know, a good chunk of our ecosystem, uh,
[02:53:35] He has been working on a new serializer and he found some issues in Solid Serializer, which was a port of an early version of some stuff the guys from Marco were working on, where it wasn't handling circular trees and stuff.
[02:53:48] I'm very impressed with his work.
[02:53:50] So we've changed our serializer now to use his serializers.
[02:53:54] Still a very small project, but...
[02:53:57] Yeah, I mean...
[02:53:58] It's not as fast as the one we were using...
[02:54:01] But to be fair, it's still five or six times faster than dValue, which is what is used as Svelte and a lot of other libraries.  Um...
[02:54:10] It's very similar in performance, slightly edges out Warp 10, which is what eBay uses today for their serializer with Marco.
[02:54:18] So this library is...
[02:54:23] is set up to be, you know...
[02:54:26] You know,
[02:54:27] pretty good performance, better than industry standards significantly, and it handles a little bit more of the better, harder use cases that are super fast, one that we were using the last couple releases do. So very...
[02:54:41] Stoked about that.
[02:54:46] Okay.
[02:54:47] Yes, but we switched to the faster serializer in like 1.5.
[02:54:52] So
[02:54:54] Like...
[02:54:55] We've only been on the fastest, I guess, sterilizer the last, like,
[02:54:58] for six months.
[02:55:01] But...
[02:55:03] To be fair, as I said, it's still...
[02:55:06] much faster than what you find in most libraries.
[02:55:14] I'd probably have to have Alexis on stream to talk about the details here.  Um,
[02:55:18] He, uh...
[02:55:20] He was explaining some stuff.  I asked him that question,  but I couldn't repeat it for you in detail.  This is not an area that I've spent a lot of time on.  Kind of the reason why I went to the other one  because I was like, I trust the Marco guys,  but it was kind of like an early prototype  and I was like missing some features.  And...
[02:55:39] I realized, like, I wasn't going to keep on top of it, so...
[02:55:44] How we doin'?
[02:55:50] All right.  Thank you, Julian, for giving, uh, gifting a tier one sub to Andres.
[02:55:57] Much, much appreciated. Oh, wow. Julian gifted five tier one subs. See, I am so far behind.  I missed that. Thank you so much.
[02:56:06] Uh...
[02:56:09] Very awesome.
[02:56:14] Well...
[02:56:15] Yeah, I'm still always amazed when I get like a bunch of gift subs come in. It's
[02:56:21] It's kind of unexpected.
[02:56:26] Okay, um...
[02:56:30] OK, I got two other things before this week in JavaScript that are actually kind of cool.
[02:56:37] One of them...
[02:56:38] is
[02:56:39] I was...
[02:56:41] Have you all heard of View Vapor?
[02:56:45] Vue has been making...
[02:56:48] Let's see if I can actually find the original tweet. That might be actually kind of fun.
[02:56:51] *scoffs*
[02:56:52] This is the kind of reverse engineering I do, right?  View...
[02:56:56] Vapor
[02:56:58] I think, who posted it? Was it Jess?
[02:57:02] I could actually remember.
[02:57:06] Maybe I should just start with their...
[02:57:10] Can't remember what her actual...
[02:57:12] You're going to just...
[02:57:13] I'm sure her actual
[02:57:15] Yeah, underscore Jessica, okay.
[02:57:20] - Last one you open on the page.
[02:57:22] View. I'm getting too much. I think it's vapor.
[02:57:32] Oh yeah.
[02:57:32] Okay, here it is.
[02:57:36] Thank you.
[02:57:37] This is when they released View Vapor, right?
[02:57:41] I showed the idea off and I looked at this code.
[02:57:46] And...
[02:57:48] I mean,
[02:57:49] You you
[02:57:50] Does this look familiar to any of you?
[02:57:54] Like...
[02:57:59] Like...
[02:58:00] I mean...
[02:58:03] I think we were just looking at it, weren't we?
[02:58:06] template
[02:58:08] Thank you.
[02:58:09] Signal...
[02:58:11] clone...
[02:58:13] Let's add a child here.
[02:58:17] Yeah, clone, walk to the first child, add a click handler, insert, run an effect,
[02:58:23] Anyway...
[02:58:24] My point is, if you looked at...
[02:58:27] at this.
[02:58:29] What is it? Set attribute? We were just looking at set attribute, weren't we?
[02:58:33] Um, run an effect.
[02:58:35] Add a click handler. See, get the template, go to the first child.
[02:58:42] Here's your template function.
[02:58:45] *laughs*
[02:58:46] .
[02:58:48] Yeah.
[02:58:49] Yeah, it's Knockout.  That's what it looks like.  I mean...  Yeah.  I mean...
[02:58:57] Reactivity aside, it's very similar.  Like the whole template cloning...
[02:59:02] walking the tree, breaking things down to effects and event handlers.
[02:59:08] The funniest thing for me was...
[02:59:10] Like I saw that obviously it was like okay obviously right, but I
[02:59:14] You know what stood out to me in this example?
[02:59:19] Out of everything. Here you go, chat.
[02:59:22] Yes.
[02:59:27] Thank you.
[02:59:29] - Mm.
[02:59:30] What do you think stood out to Ryan? I want your guesses here.
[02:59:36] I'll give you a minute to put them in.
[02:59:41] Thank you.
[02:59:45] No one gonna guess?
[02:59:48] Thank you.
[02:59:50] Pfff.
[02:59:52] What about template?
[02:59:57] The top value
[03:00:00] No, I mean, return div is fine. I mean...
[03:00:05] They called it Div. We called ours L, so...
[03:00:08] See Return L, it's right there.
[03:00:10] um
[03:00:13] uh...
[03:00:16] Yes.
[03:00:17] Yeah, this was it.
[03:00:22] Yeah, yeah, exactly.
[03:00:23] Div Buttint, what the hell is this?
[03:00:29] What kind of template is that?
[03:00:32] -
[03:00:35] *sigh*
[03:00:37] Yeah.
[03:00:39] Thank you.
[03:00:41] Well, let's find out what could it do.
[03:00:43] What can... let's find out what kind of template that is.
[03:00:47] - -
[03:00:50] - Thank you.
[03:00:53] -
[03:01:01] All right. So now I have a div. Okay. And then I'm going to go innerHTML equals...
[03:01:07] Div.
[03:01:08] Button.
[03:01:10] What kind of template is this?
[03:01:14] Oh, I can't do this on Google's homepage.
[03:01:16] I have to go to somewhere that's unsafe. Okay, just a second.
[03:01:21] They changed that recently.
[03:01:25] Okay.
[03:01:30] Let's try this again.
[03:01:42] Oh, there we go.
[03:01:44] Here we go. We got a div button. Let's actually see what the integration HTML is.
[03:01:50] Huh.
[03:01:52] That looks a lot nicer.  Yeah.
[03:01:56] Yeah.
[03:01:57] I was aware of this.
[03:01:59] We...
[03:01:59] -
[03:02:00] We talked about it in Marco.  There's some interesting rules here, though, like...
[03:02:05] Like...
[03:02:06] Where does the five go, right?
[03:02:12] Five goes...
[03:02:13] Inside...
[03:02:14] The Butt-ed.
[03:02:16] It wraps inside out.
[03:02:19] Essentially...
[03:02:19] Thank you.
[03:02:20] It'll close like the you know, it makes sense. If I wanted the five to go
[03:02:26] in the div.
[03:02:28] I'd actually have to
[03:02:29] Like, I'd have to close the button myself.
[03:02:33] But...
[03:02:45] Ooh.
[03:02:46] Do we have an edge case?
[03:02:48] I have to do a table to do this.  D equals document...
[03:02:55] Got create element.
[03:02:57] table
[03:03:00] - -
[03:03:07] Was it T-body?
[03:03:11] TR?
[03:03:13] TD?
[03:03:34] - Yeah.
[03:03:34] Yeah, I mean this is completely like the funny thing is Gzip probably handles this fine anyways, but
[03:03:40] I thought it was kind of cool.
[03:03:44] And as it turns out,
[03:03:46] The timing was...
[03:03:51] Yeah, I mean, a table without a tea body...
[03:03:54] Um...
[03:03:55] is a whole other thing.  And...
[03:03:58] Here's the problem. Solid had this validation that we did at runtime to protect against people doing stuff like table in tbody, right? Without tbody, because like,
[03:04:08] we clone templates and then suddenly the browser likes to add the T-body in for you.
[03:04:13] If I did this,
[03:04:17] See you.
[03:04:18] our table and we do this.
[03:04:21] Wait, where did this T-body come from?  Okay.  And...
[03:04:27] Because the browser does that,
[03:04:29] At template barriers, unfortunately, there's almost nothing I can do but like an after the fact runtime check, which is super expensive.  We are doing that, but I analyze your JSX.
[03:04:40] that you put in.
[03:04:42] we had this check for the longest time let me see if i could find it uh
[03:04:48] You can see it right here.
[03:04:51] If you've ever seen the compiled output for solid,
[03:04:57] In dev, we send a check, which is the number of tags that are in it, and then
[03:05:06] When we're in dev mode, we actually split on the number of tags and count them, like opening and closing tags, and say, like, hey,
[03:05:14] something didn't match, you know, an extra element was added.
[03:05:17] And if you try and put a block element inside an inline element,  it'll get hoisted out.
[03:05:21] It'll add a different closing tag in.
[03:05:24] It'll do all these weird things.
[03:05:27] This check.
[03:05:28] with being very dumb, not knowing anything about the structure,
[03:05:32] Actually...
[03:05:33] detected most issues.
[03:05:36] But it was less than ideal.  So during the lifetime of 1.6, we snuck in...
[03:05:42] a smarter checker called like validated nesting that looks at your tags in your JSX and at compile time for June. I think this is actually in the playground today.
[03:05:53] Um...
[03:05:54] Let me see if I can try it.
[03:05:56] Like,
[03:05:57] What if we did this? What if we went...
[03:05:59] table
[03:06:03] Let's put our table in here, okay.
[03:06:06] and
[03:06:07] Let's add a tr to this table.
[03:06:18] had they had
[03:06:19] Let's add...
[03:06:24] Yeah, I don't...
[03:06:25] Know if this version of the Playground has it.
[03:06:29] Thank you.
[03:06:32] Invalid JSX, TR cannot be a child of table.
[03:06:36] Sorry, it's blocking here. Let me get that out of the way.
[03:06:42] We actually error at a compiler level if we
[03:06:45] come across, uh,
[03:06:47] invalid HTML that--
[03:06:52] that should be structured that way.  And I...
[03:06:55] It took us a while to get to this point, but this is good because it gives you immediate feedback and you...
[03:07:02] Like the compiler could basically tell you, hey, you're messing up.  Yeah.
[03:07:10] And the reason this matters, again, is because we hoist the templates and we clone them and we walk them.  So the browser changing the templates is detrimental.  And the funny thing is a lot of frameworks, like VDOM frameworks, don't actually hit this until they actually...
[03:07:23] Because you can insert elements yourself for the most part and break the rules.  They don't hit this until they try to do hydration.  But for Solid, if you've noticed...
[03:07:32] And...
[03:07:33] - Yeah.
[03:07:34] I mean, this code example from Vue is a better example of solid code.  Like, with solid here, what do you notice?  Like...
[03:07:43] you clone the template and then you do the walk. If you just don't clone the template, hydration is the same
[03:07:49] as
[03:07:50] Um...
[03:07:52] as actual rendering.  You just go get the elements and then set the effects.  You don't actually clone the template,  but it's the same code logic.  So as I said, a lot of like VDOM libraries
[03:08:01] Did...
[03:08:02] which create elements one at a time,  didn't actually hit this problem until hydration.  This consolidates hydration and rendering flows.
[03:08:12] Yeah.
[03:08:12] - Thank you.
[03:08:13] But in any case...
[03:08:14] Because we had that validator, and because a really weird
[03:08:19] issue. Can I show you a weird issue? Let me duplicate this. Let me
[03:08:24] Let me show you a weird issue. Let's go here.
[03:08:27] Thank you.
[03:08:28] Someone was using NoScript
[03:08:33] It wasn't this one.
[03:08:35] Firefox.
[03:08:36] This is just a weird bug where you put no script and Solid's template validation was breaking because
[03:08:44] in every browser except Firefox,
[03:08:47] When you make a no script in your template, it just...
[03:08:50] works that way. It matches the input.  But for some reason...
[03:08:54] Firefox escapes
[03:08:57] the stuff inside the no script
[03:08:59] Um...
[03:09:00] only when JavaScript's turned on.
[03:09:03] When JadaScript's turned off, then obviously the NoScript works the way it's supposed to.  But they actually escape it based on whether the user has JavaScript on.
[03:09:12] You could imagine from my horror as a compiler guy,
[03:09:17] This is kind of like the TypeScript with the current target target problem. You're like
[03:09:21] How am I supposed to know if the user has JavaScript turned on?
[03:09:25] Well, there's a piece there that if they're running my framework, clearly JavaScript's turned on.  But how am I supposed to even know...
[03:09:32] that they're using Chrome or Firefox or whatever.  Like...
[03:09:35] I could check the... like, I'm just not doing this, okay?
[03:09:39] So, a combination of this kind of weirdness
[03:09:43] I was just like, "Okay, screw it. We should just rely on the validation
[03:09:48] and
[03:09:50] Once that template counting was gone, I was like, okay, well screw this. Let's do the view optimization. Like, why not? So...
[03:10:00] Yeah.
[03:10:00] Um,
[03:10:04] I don't... Yeah, I mean... Do I have dog expressions locally? I might not. I could show it to you. You guys could just trust me that, um...
[03:10:11] In 1.7 we're going to have
[03:10:16] In 1.7 view vapor and solids are going to look even more similar.
[03:10:19] We could do cool stuff like div butted.
[03:10:22] Anyway.
[03:10:23] *sniff*
[03:10:28] All right.
[03:10:29] little view vapor
[03:10:31] Okay, let me...
[03:10:34] Where is the changelog?
[03:10:37] Thank you.
[03:10:39] - Oh my gosh.
[03:10:40] All right.
[03:10:45] I've
[03:10:51] I do have a whole video on this topic.
[03:10:55] But the main reason is,
[03:10:57] Solid needs to wrap everything in functions.
[03:11:00] If I didn't, you would have to wrap everything in functions.  And if you had to wrap everything in functions, then...
[03:11:05] the whole thing that I was talking about, locality of change and all that would go away earlier in the stream.
[03:11:11] That's the key point. It's because we want reactivity to flow through the tree, so we can't access the values until where they're used.
[03:11:21] Yeah, thanks.
[03:11:22] This is a great resource.
[03:11:27] Okay, so...
[03:11:30] I found something else weird.
[03:11:32] I noticed that Salt's bundle size had gone up.
[03:11:36] Obviously we've been adding features, but it had gone up, but I was rewriting to do MVC in TypeScript.
[03:11:41] Because...
[03:11:43] I wanted to feel the whole experience here.  I noticed all our original demos were to TypeScript, so I was like, let's update this to the latest solid run in TypeScript.
[03:11:51] And I looked and I'm like, the bundle size had gone up.
[03:11:54] How much was it?
[03:11:59] Something like 400 bytes.
[03:12:03] And I was like, "Whoa, whoa, what's going on here?"  I knew it would be bigger, but 400 bytes?
[03:12:09] And...
[03:12:12] Like, I was like, what's going on?  So I looked...
[03:12:16] And I found...
[03:12:18] out that tree shaking,
[03:12:20] has stopped working properly in Rollup after Rollup version 2.69 or something.
[03:12:28] and
[03:12:30] There's a few reasons for this, but I started looking into it and I was like, man, this is...
[03:12:38] Like...
[03:12:38] Kind of annoying because
[03:12:39] For those who don't know, Solid is amazingly good at tree shaking to the point that like...
[03:12:46] If...
[03:12:47] If you don't use...  Obviously, if you don't use hydration, you don't get hydration.  This was actually what Roll-Up broke.  But also, if you don't use...
[03:12:55] Like here's one of my favorite ones. Our router is built on transitions, right? The whole use transition thing, which is like it's probably one of the biggest chunks of code, you know, to get like concurrent rendering working.
[03:13:08] and the router has to implement it in the core of the library.
[03:13:12] But what I did was in such a way that if the user doesn't use suspense,
[03:13:19] not only does it tree shake out the suspense code,  it can actually tree shake out the transition code.
[03:13:26] And if you've ever seen Solid's Core...
[03:13:29] - Yes.
[03:13:30] I could show this kind of briefly here. I'm not gonna explain how it works. If you look for the word transition in here,
[03:13:37] Thank you.
[03:13:38] Transition.
[03:13:39] You're going to see...
[03:13:40] A lot of code paths have these like extra
[03:13:43] transition checks that are like
[03:13:46] if like whole blocks of code in the middle of like the most core parts of the library like
[03:13:52] Let's get in there.
[03:13:54] load we're still we're still at resources let's keep on going
[03:13:59] Oh yeah, no, start transition, no...
[03:14:01] transition, transition, transition,
[03:14:05] Use transition.
[03:14:06] Recycling, transition, transition.
[03:14:09] like this is the core of the reactivity  and transitions are just layered throughout the code.
[03:14:20] Yeah, so today isn't a diagramming day unless we do some during This Week in JavaScript.
[03:14:30] And it's because transitions fundamentally introduce...
[03:14:34] Splitting the model in the middle of the reactive system you you should be able to shake it out and
[03:14:40] But...
[03:14:40] Guess what? With Roll Up, you can.
[03:14:42] You don't get any of this transition code...
[03:14:45] if you don't use them.
[03:14:49] Like it's literally like when people tell me that like, oh yeah, you know, no bundle.
[03:14:54] Okay.
[03:14:55] Yeah, okay.
[03:14:58] Yeah, no, bundling is a marvel.  Um...
[03:15:01] Well,
[03:15:02] But I found that we weren't tree-shaking properly.  And so I started...
[03:15:08] Looking at it, like, can I show you? Before we talk about the issue, I actually opened up an issue with Roll Up and then they told me it was expected behavior and they gave me a fix. But let's look at this issue before we actually look at this issue.
[03:15:20] Okay, here's the basics.
[03:15:23] Okay.
[03:15:24] Um...
[03:15:25] And actually, I'm just going to delete this for now,  and then we'll reopen the issue when I want to get to the specific issue.
[03:15:31] Okay.
[03:15:33] This is how crazy Roll Up is, okay?
[03:15:37] I've showed this before on stream.
[03:15:38] It never gets old from my perspective. Pretend
[03:15:41] you have a library that has a main feature  and a specific feature.  So you can pretend this is like...
[03:15:46] signals and this is like
[03:15:48] transition or suspense or hydration or something.  And inside the library, it's really simple.  You have a let that says, hey...
[03:15:58] Use this feature.
[03:16:00] Like this feature is being used.  So somewhere in your code, you're gonna be like,  if you use specific feature,
[03:16:05] do something that special way, else just do the normal way, right?
[03:16:09] - Yeah.
[03:16:10] And what you do is when you import...
[03:16:13] or call that feature for the first time,
[03:16:16] You...
[03:16:17] you set it to true.  So like,  as long as it's something that's like higher up,
[03:16:22] Or something that you enable.  Like...
[03:16:24] like when we have experimental flags and we say enable scheduling,  you just call this,  or if you use suspense,  uh,
[03:16:30] solid creates a suspense context object.  At that point,
[03:16:36] we say, yeah, we're using Suspense.  Or when you call Hydrate, which is like the first thing you call in your app.  Again, we just say, yeah, you're using Hydrate.
[03:16:45] We set it to true.
[03:16:47] And the thing is...
[03:16:50] I'm gonna uncomment this. This is you get full code in full code out so you end up here with like
[03:16:56] you know
[03:16:57] Use it false, use it true.  So, you know, if you...
[03:17:01] Call it.
[03:17:02] And you don't even have to call it, you can literally just import it in and like the symbols... I guess... I guess Rollup's smart enough. But what I was trying to get at is like...
[03:17:12] "We're gonna use it.
[03:17:14] And now when we get here, it can choose. But even if
[03:17:17] Like, the second that it realizes
[03:17:21] that it needs this symbol,  Rollup goes,  oh,  damn.
[03:17:26] Use specific feature can be set to true, which means we need to be aware of this branching.
[03:17:32] But the cool thing about bundling and tree shaking is
[03:17:35] If I comment this out so you do not use this feature,
[03:17:41] Rollup can go, "Okay, this is false.
[03:17:45] I don't have this.  So nowhere in this code could this ever be anything but false.  So then it looks here and goes, oh,
[03:17:51] If false, oh, I don't need this.
[03:17:53] Okay, yeah, so just do this.
[03:17:55] So what you end up in your bundle is just main feature,
[03:17:59] Console log do normal.
[03:18:02] So it's not just like tree shaking out the imports.  It dead code eliminates the stuff completely.
[03:18:09] Like...
[03:18:10] inside your bundle
[03:18:15] right? This is, Solid uses this religiously as a way to like shrink bundle size.
[03:18:24] You guys there or are you guys doing a call for paper for React by Abby?
[03:18:31] *laughs*
[03:18:36] But yeah, yeah, like...
[03:18:39] But basically you control it by what you use.
[03:18:42] This is a really powerful pattern.  And...
[03:18:47] Learned some really cool stuff when I was when I was working on it because there was three things that
[03:18:51] That solid...
[03:18:53] Um,
[03:18:54] Did...
[03:18:55] do properly that had broken because Rollup had done bug fixes
[03:18:59] and I didn't realize it, which had broken the tree shaking for solid.
[03:19:08] Okay.
[03:19:09] Thing number one.
[03:19:12] - Yeah.
[03:19:15] I'm not going to be able to reproduce it easily in this playground, but I can show you the change in solid's code. Let's go...
[03:19:21] to solid repo
[03:19:23] and
[03:19:25] uh...  Tree Shakeup
[03:19:29] Let's just look at the...
[03:19:31] Let's just look at the changes here.
[03:19:36] Thing number one, that I ended up having to change a bunch.
[03:19:41] Where's the diff view? Commit?
[03:19:44] Signal.
[03:19:46] Thank you.
[03:19:46] Mm-hmm.
[03:19:48] I could have sworn there's a Diffue in here.
[03:19:50] changes?
[03:19:56] Ah, there we go.
[03:19:57] Sorry.
[03:19:58] I got it.
[03:19:59] Thank you.
[03:20:00] Okay.
[03:20:09] Really? I'm not gonna get a...
[03:20:12] That's so weird.
[03:20:14] Oh, here we go.
[03:20:15] - Right.
[03:20:16] The funny thing is, I don't know why I wrote the code this way.
[03:20:19] but...
[03:20:21] - Bye.
[03:20:22] This is...
[03:20:24] or statements, and I know this from when I do my compilation...
[03:20:28] Thank you.
[03:20:28] The problem with an or statement,
[03:20:30] see ads are fine and turneraries are fine but probably the or statement is technically speaking the first argument
[03:20:37] can be returned.
[03:20:39] Thank you.
[03:20:40] If you know what I mean, let me explain.
[03:20:44] .
[03:20:45] Consider
[03:20:47] const c equals a
[03:20:50] Or...
[03:20:51] B.
[03:20:53] Yeah.
[03:20:56] If...
[03:20:57] A is false.
[03:20:58] C equals B.
[03:21:00] Peace.
[03:21:01] If.
[03:21:02] A is true, C equals A. Okay.
[03:21:12] Whereas like...
[03:21:19] I mean...
[03:21:21] Maybe we should just...  Yeah, let's just...
[03:21:24] console log this so like we can just observe the behavior here let me
[03:21:31] Get rid of our TR here.
[03:21:36] - Okay.
[03:21:39] Oh, right.
[03:21:41] I actually have to do this for real.
[03:21:43] Thank you.
[03:21:50] Okay.
[03:21:57] uh...
[03:22:03] Basically,
[03:22:07] The thing you can assume here
[03:22:09] is that uh it's funny because this is not showing what i wanted to show
[03:22:14] THE END OF THE END OF THE
[03:22:16] .
[03:22:20] Maybe I should do like zeros and ones.
[03:22:23] Amen.
[03:22:25] And maybe this is something I only assume because the way my compiler works and for effective falsiness I only care about truthiness. But if you're considering, if you're putting it in a Boolean expression where you only care about truthiness,
[03:22:40] Um...
[03:22:41] You have this situation where...
[03:22:43] If...
[03:22:45] Obviously we get one here for A or B, but if we change this to two,
[03:22:49] we get two, so you return a.  If it's an and statement,
[03:22:54] Um...
[03:22:57] -
[03:22:59] It returns one.
[03:23:02] Right.
[03:23:03] It's actually...
[03:23:04] be that you end up with.
[03:23:08] Right?
[03:23:10] So if it passes, so you actually get to where it's not falsy, it's actually the last argument. So you never return a.
[03:23:18] And if it's a Tertiary, it's wherever you get to.  But Or is special because Or
[03:23:24] actually
[03:23:25] is the one scenario...
[03:23:28] where you actually return the first argument. And this is such a subtle
[03:23:34] thing, but it meant that
[03:23:36] I was writing all these expressions as like, let's see, can I blow this up at all? No, not easily. Sorry. I hope you can see this. But I was writing all these expressions as like this and this.
[03:23:45] or this and this, because I had to basically determine, like,  are you in a transition? Check here.  If you're not in a transition, check here.  So if either...
[03:23:53] these two were together or these two weren't,
[03:23:56] You could do it.
[03:24:02] - Thank you.
[03:24:02] Yeah.
[03:24:03] It does when it's falsely, but in the case of a conditional, we only care about it being truthy.  So the falsely part can get thrown away anyways.  Yeah.
[03:24:12] Right?
[03:24:13] which is important here because
[03:24:17] The reason it's important here is because
[03:24:22] Essentially, if I rewrote these, and it turned out it was shorter to rewrite them as turnararies, because they actually were checking against the same state, it was like not running versus running.
[03:24:31] I don't know why I wrote them as or statements.
[03:24:33] habit and like adding them after the fact you know because i think originally i
[03:24:38] I only had half of it. I wasn't doing the right code for the transition.  I was only doing like, if not a transition, this, do this.  And when I added them later, I was just copied the expression and negating them.
[03:24:48] Everywhere would I switch them to Tertoraries
[03:24:51] it was able to tree shake him where at some point roll up stopped being able to  tree shake,  um,
[03:24:57] uh,
[03:24:58] these oars properly because probably someone corrected them.
[03:25:01] because it was working, but it was a bug that was working.  So I went through, and actually the code ends up cleaner and shorter if I do that.  So there's a whole bunch of these where all these ores...
[03:25:10] all become turneraries.
[03:25:12] And it's pretty much just a straight win from a size perspective, and it actually lets the tree shaking work to remove all those transition statements.  The...
[03:25:22] Other one.
[03:25:25] that I, the thing is, I got through this whole thing, and I had removed all the transitions,
[03:25:32] Except for...
[03:25:35] let me see if i can find it here
[03:25:38] There was one place...
[03:25:40] that the transitions did not go away.
[03:25:43] And it was bugging me.
[03:25:48] And...
[03:25:49] Let me see if I can find it.
[03:25:52] I'm not going to find it easily here because I wasn't able to actually fix solid code.  I made a bug against rollup about it. But essentially there is a place here
[03:26:03] where we were checking transitions in a pretty big chunk. Yeah.
[03:26:08] Inside right signal.
[03:26:10] Yeah.
[03:26:11] And essentially,
[03:26:13] It does a whole bunch of these transition checks.
[03:26:15] inside a run update function. For some reason,
[03:26:18] inside this function,
[03:26:20] the transitions would not go away.
[03:26:22] And...
[03:26:23] At first I was like, oh, maybe it's like TypeScript.  You put something in a function, it doesn't know.
[03:26:29] Right? You know. But that's not true because the top level functions
[03:26:39] The top level functions are
[03:26:42] Like work.  So what's going on?  Well, I found, I figured out what the issue was as it would turn out.
[03:26:50] Let's go back here.
[03:26:51] If you put the statement,
[03:26:54] inside a try catch and it doesn't even have to be directly in any function called inside a try block and
[03:26:59] Tree Shaky gets turned off.
[03:27:05] Yeah, I mean, to be fair, it's 400 bytes G-zipped.
[03:27:10] Um...
[03:27:13] bitified in gzip. So like the actual code size, like when you look at the code,
[03:27:18] It was more.  We were getting a bunch of extra function calls and all that stuff.  So it's like, if it's 400 bytes GZIP, it's probably...
[03:27:26] About, I don't know, at least
[03:27:29] three or four times that much midified
[03:27:32] Yeah.
[03:27:33] Thank you.
[03:27:35] But if you look at it,
[03:27:38] It still has do it normal and it still eliminates the other branch, but it leaves the conditional
[03:27:45] statement in here.
[03:27:47] Which...
[03:27:48] Honestly,
[03:27:51] *pfft*
[03:27:52] gets rid of most of the work so to speak. But the problem I was having was that
[03:27:57] Um...
[03:27:59] It meant that all the references of this,  all the transition references, all stayed in.  Because once you get...
[03:28:05] rid of it, like all the references, everything just drops off.
[03:28:10] Um...
[03:28:12] So...
[03:28:14] I submitted the bug.
[03:28:16] And they told me that...
[03:28:20] It was by design, and they had a whole explanation of it that was really good.
[03:28:24] "Relevant assumes that many built-in globals, blah, blah, blah, according to the latest spec." So you can say, "Try catch de-optimization and set it to false." So in our little demos where we know we don't have to worry about it, we can set this one little setting and it eliminates the last bit of the transition code.
[03:28:38] But I could never set that as a global setting for our bundlers and stuff because there might be some kind of...
[03:28:44] feature detection that you need to use. And that's why they do this so that feature detection works and doesn't get tree shaken out. So there's a good reason for it. But
[03:28:54] I finally found the answer for something that has been bugging me forever.
[03:29:00] Fork.
[03:29:03] *laughs*
[03:29:05] - Yeah.
[03:29:06] Anyway, uh...
[03:29:11] The last thing that I found out
[03:29:13] This one's kind of cool.
[03:29:15] Was it...
[03:29:16] When we do hydration,
[03:29:19] It's solid.
[03:29:20] Um...
[03:29:21] We, uh...
[03:29:24] We use something called
[03:29:26] shared
[03:29:27] config?
[03:29:30] And it's just like this
[03:29:31] kind of context that lives outside of the...
[03:29:35] the tree.
[03:29:37] and
[03:29:39] We use this a lot of places to guard.
[03:29:41] Like, for hydration.
[03:29:43] And...
[03:29:45] this is how we get our unique identifiers that match across server client and all this kind of stuff.  And,
[03:29:51] Amen.
[03:29:52] It wasn't tree shaking out after roll up 2.7 or something.
[03:29:55] And...
[03:29:56] It was bringing all this hydration stuff, even when you're doing it to do MVC.
[03:30:00] So,
[03:30:00] I managed to find out
[03:30:02] that they had made a change
[03:30:04] where it's kind of stuff you'd never guess on your own.
[03:30:09] But...
[03:30:12] this
[03:30:14] was like this.
[03:30:15] where it was just an object.
[03:30:17] And we just... Rollup used to assume if you had an object...
[03:30:21] If nowhere in it
[03:30:24] you had a feature which wrote to the object
[03:30:28] that you could just similarly like our...
[03:30:32] Boolean conditions.
[03:30:34] just like drop them, like the use specific feature.
[03:30:38] After rollup 2.7,
[03:30:41] Again, this is like a year ago. This has been bugging me.
[03:30:47] you have to actually set those properties to undefined for rollup to have that behavior.  So it's kind of silly that I have to go in this object and do this.
[03:30:55] But if I go through and set context undefined
[03:30:58] and registry to Undefined Now.
[03:31:00] all hydration code will tree split properly  and you won't end up with like these random functions  getting pulled in.
[03:31:06] Again.
[03:31:10] It is interesting because obviously different bundlers have different patterns and I think that's probably one of the most
[03:31:16] tricky parts about this.
[03:31:18] But...
[03:31:19] Yeah, it's like another dimension.
[03:31:26] Ooh, good question, does it midify to that?
[03:31:28] - Oh.
[03:31:29] Uh, what's the best way to check?  Uh...
[03:31:32] Thank you.
[03:31:33] - Thank you.
[03:31:38] Okay.
[03:31:42] Let's try.
[03:31:46] Thank you.
[03:31:47] Thank you.
[03:31:49] Thank you.
[03:31:50] Yes.
[03:31:58] Just get rid of the TypeScript.
[03:32:03] Nope.
[03:32:07] No, it looks like because I set the properties, minification assumes that...
[03:32:13] It's there. Undefined always get minified to void zero. So it's interesting. It just like saves a couple characters.
[03:32:19] But, um...
[03:32:21] Yeah, it looks like
[03:32:22] This does not go away.
[03:32:30] Thank you.
[03:32:31] Oh well.
[03:32:34] I'm okay with that compared to like the number of bites the hydration.  The hydration was literally pulling in functions.
[03:32:41] But...
[03:32:41] Yeah.
[03:32:47] Yeah, there's a lot of little details like this.
[03:32:53] But yeah, this is the kind of fun stuff you get to do when you work on a framework.  Someone was mentioning, you know, about the bytes and stuff, but it's like...
[03:33:01] At one point, we had a bit of a jump.  I think it was 200 bytes between solid 1.0 and solid...
[03:33:09] I want to say like 1.2 time period of stuff.  It's like a lot of bug fixes and little things like,
[03:33:15] And like
[03:33:17] You know, someone was like,
[03:33:19] You told me you were the smallest, blah, blah, blah.  I'm like, we are still.  But they're like...  Those 200 bytes were like...  They were considering that...
[03:33:29] They'd lost trust in the project
[03:33:31] Um
[03:33:34] I do take it seriously.
[03:33:36] Not seriously enough to prevent...
[03:33:39] Uh...
[03:33:40] like progress and bug fixes and stuff. Like, you know, I won't be like, I'm going to block this,
[03:33:46] PR because... I mean, I might rewrite it because I want to make it smaller, but I'm not going to...
[03:33:51] You know, like, I'm not going to be like, no, we can't get this important bug fix in because it would add bytes and we can't say we're the one kilobyte library anymore. We don't advertise on size like that. Like, we're not the, you know, whatever, four kilobyte library. But, like...
[03:34:07] It's still something that I take pretty seriously.
[03:34:11] Thank you.
[03:34:14] Alright.
[03:34:17] I don't know.
[03:34:19] That's a lot of stuff, isn't it? Like, is that enough for a minor release?
[03:34:24] What do you all think?
[03:34:27] It's been quite a ride to go through all this, but...
[03:34:31] That's that's what solid 1.7 shaping up to be. There's like a few other things that
[03:34:36] that if I look through the
[03:34:39] change log on the repo, I can probably...
[03:34:43] bugs and stuff, but I think we hit the big ticket item, so to speak.  Where's our...
[03:34:52] Change sets. This is always fun.
[03:34:55] Control flow
[03:34:57] type narrowing templates and hydration,
[03:35:00] - Okay.
[03:35:01] challenges
[03:35:05] Oh yeah, this is a minor one.
[03:35:09] There's some hydration improvements around the way that we...
[03:35:15] Handle that I don't know if I want to talk about that. It just hydrating fragments is actually a little bit tricky because there's no template the clone  but
[03:35:24] Um,
[03:35:25] I'll talk about that for very briefly.
[03:35:29] show the problem. I think that this one is, if you want to build a solution on cloning templates, you should be kind of aware of this.
[03:35:41] It's...
[03:35:41] Let's manufacture a scenario on the client side so you can understand the problem.
[03:35:48] It's actually not very hard to manufacture.
[03:35:58] Okay.
[03:36:01] I put a bunch of text with spaces in between.
[03:36:04] And there's a space between these ones and there's a space at the end.
[03:36:08] Is...are we gonna get there?
[03:36:10] No  Um
[03:36:13] The reason we're not going to get there...
[03:36:15] is because
[03:36:16] we trim the extra spaces. Now,
[03:36:18] We're going to get there because now the space is clearly there. Okay. So space, space.
[03:36:25] And
[03:36:26] You might be like, okay, so what?  Great.  Great.
[03:36:29] But the problem is
[03:36:31] When you're clothing a template or doing
[03:36:36] SSR and hydration.
[03:36:38] This is...
[03:36:39] I can...
[03:36:40] This block of text
[03:36:42] is a single block of text.
[03:36:45] Right?
[03:36:46] Like...
[03:36:48] When you're creating it...
[03:36:52] element of time or something, it's, you know, it's no big deal. But
[03:36:56] when you're getting it from a template,
[03:36:58] It's a single block of text.
[03:37:01] I think the easiest way to do this is actually put...
[03:37:03] I'm gonna use one count and I'm gonna go high
[03:37:09] And then I'm going to go
[03:37:10] Bye, okay?
[03:37:12] Let's forget about the single lighter.  This is the easiest way to show it.  You're going to get high...
[03:37:17] Whatever.
[03:37:18] by here as a single block of text.
[03:37:22] So how does Solid know where to put the count in?
[03:37:25] if this is a single block of text.
[03:37:29] - Thank you.
[03:37:30] This is the only place we need it, but what you'll see here,
[03:37:34] is
[03:37:36] A comment note, some of you might be going, what?  What the hell is this explanation mark?
[03:37:41] You know, you work on these frameworks long enough,
[03:37:44] You learned all the tricks.
[03:37:45] Can I show you something?
[03:37:47] - Thank you.
[03:37:49] Let's bring back our div here. D dot
[03:37:53] innerHTML.com.
[03:37:54] equals...
[03:37:56] Exclamation mark.
[03:37:58] Hello.
[03:38:00] As it turns out,
[03:38:06] they will...
[03:38:07] serializer, it becomes a comet node.
[03:38:10] Essentially.
[03:38:11] Um...
[03:38:13] - Yeah.
[03:38:15] So you can skip the explanation dash dash
[03:38:18] you know, thing, dash-ass thing.  So you could write an empty comment as literally just square brackets with an exclamation mark.
[03:38:26] Or...
[03:38:30] Well, how would we possibly know how to split into two things?
[03:38:35] We wouldn't know where...
[03:38:37] It is. We just have this one string. We clone the nodes and we end up with just one string here. High
[03:38:44] high zero buy. Like,
[03:38:48] I'm showing it here in the template, which is a little bit
[03:38:51] unfair because like the zero isn't in it but like if you were actually ssr-ing it
[03:38:57] you would also have high zero buy.  And if you look at SSR,
[03:39:03] output.
[03:39:06] We actually wrap
[03:39:08] We have an open and a close comment.
[03:39:13] because
[03:39:14] there will be
[03:39:16] a number in here in the rendered you
[03:39:18] the rendered thing.
[03:39:21] And this is important...
[03:39:24] Because...
[03:39:25] As I said, you have a single text node.  How do you find where to do the insert?  One thing you could do is just diff the full text.
[03:39:31] chunk of text.
[03:39:34] like replace the whole text every time.
[03:39:37] And that's an interesting choice, and it wasn't one that I made.
[03:39:42] I...
[03:39:43] Because as you create it and stuff, you don't generally need this and this is something,
[03:39:48] We handled each text node separately.
[03:39:53] Yes.
[03:39:53] So
[03:39:55] Essentially, it means we have comments.
[03:39:58] And we can find that location, so we can actually literally
[03:40:01] walk to the comment.
[03:40:03] And insert...
[03:40:06] insert the count before that comment.
[03:40:08] So we actually insert a text node before the comment node.  So we go, OK.
[03:40:14] First element, next, sibling.
[03:40:17] And then...
[03:40:18] Yeah, so it's right here.
[03:40:20] we walk in first element is this high
[03:40:24] Next sibling is this comment node.
[03:40:27] Insert...
[03:40:30] Insert count...
[03:40:32] before that.
[03:40:36] That's like...
[03:40:38] That's fine.
[03:40:39] The problem is
[03:40:40] Yeah.
[03:40:41] And this works for SSR as well.  The problem is, look what happens when I change this
[03:40:47] to a fragment.
[03:40:51] Okay.
[03:40:54] Well,
[03:40:56] There's no more...
[03:40:58] Um...
[03:41:00] marker because it's just an array we don't know we don't have the parent to insert into
[03:41:05] so to speak.
[03:41:06] So we don't know.
[03:41:08] Like...
[03:41:09] We can't clone this template.
[03:41:12] It's actually, it could be multiple templates.  If you put elements in here, like a span,
[03:41:17] you know,
[03:41:18] Now...
[03:41:19] we have
[03:41:21] our own template.  Like look, the last element's a template.  We have an array and one of them's a template.
[03:41:27] For client-side, this works perfectly fine because we instantiate that array.
[03:41:31] It's all separate.
[03:41:33] We're not cloning anything. And we can, you know, piece each piece in one by one.
[03:41:45] Yes, because we broke up the string.  Like, instead of having one giant string, we actually wrote a comment out.
[03:41:53] element like
[03:41:54] like HTML element in the middle, which means that the strings on each side become two different text notes.
[03:42:04] So...
[03:42:07] - Yeah.
[03:42:10] This is fine.
[03:42:12] for client but for
[03:42:15] Server rendering
[03:42:17] This is a little bit more awkward.
[03:42:18] So what I ended up doing is
[03:42:21] as a fix in solid 1.6 was insert...
[03:42:27] comments...
[03:42:29] as like SSR templates in between and then
[03:42:33] Thank you.
[03:42:34] If you look here in the fragment, you see these SSR
[03:42:37] uh,
[03:42:38] things. So this is a bug that we've had for a while that I fixed it in one of the later versions of 1.6 by inserting
[03:42:44] comments.
[03:42:46] so that hydration matched up.
[03:42:48] Yeah.
[03:42:51] The problem is
[03:42:53] Okay.  I did it for Fragments.
[03:42:55] Thank you.
[03:42:56] Maybe, and I noticed this bug, but other people...
[03:43:00] Probably didn't.
[03:43:02] Um...
[03:43:03] and I fixed it in a different way,
[03:43:05] but
[03:43:06] - Bye.
[03:43:07] If this is a component...
[03:43:11] Now...
[03:43:13] - Okay.
[03:43:14] I didn't do that.
[03:43:15] Mm-hmm.
[03:43:16] And we have the same problem if this fragment ends up getting inserted in the DOM from this component.
[03:43:23] And...
[03:43:26] Solid's hydration is kind of...
[03:43:29] resilient in the fact that because...
[03:43:32] if it doesn't match, it'll end up creating new DOM nodes.  And the way the nodes get removed and added,
[03:43:40] You just end up with extra DOM nodes that are not attached to the DOM temporarily before they like...
[03:43:45] like lose their reference and they get garbage collected with like a small,  the way we were working that way,  um,
[03:43:54] meant that
[03:43:56] essentially
[03:43:58] these kind of hydration errors
[03:44:01] kind of
[03:44:02] were not noticed...
[03:44:03] except for some really edgy cases
[03:44:07] So even after I fixed the fragment one,
[03:44:10] to match up and not create extra notes.  Because you've got to understand the challenge here.
[03:44:15] is
[03:44:17] When you come in and it doesn't match, we don't know that...
[03:44:21] Like the by is the same vibe we're passing a string in and
[03:44:25] Like if it doesn't match,  we're going to create a new text node
[03:44:29] even during hydration. We'd ideally not create any DOM nodes during hydration.
[03:44:34] - Yeah.
[03:44:35] And
[03:44:36] so
[03:44:36] I realized that my solution here was incorrect.
[03:44:39] It was okay, and...
[03:44:42] but it didn't solve the problem.
[03:44:44] And the reason that I don't want to insert
[03:44:48] The...
[03:44:48] markers in here is because we're actually changing.  This component could care about its children  and introspecting it.  And then it'd be like,
[03:44:56] Like what if
[03:44:57] instead of
[03:44:59] It being...
[03:45:00] this, like some DOM nodes.  What if...
[03:45:04] AB
[03:45:06] The children were actually
[03:45:10] Um...
[03:45:11] like something else that you introspected.
[03:45:14] Like, putting markers in that are unseen to the end user would be really weird because, like, you'd be like, why does it have all these children?  Like...
[03:45:21] This could like I wrote count count. Why am I getting?
[03:45:25] these in. Like with a fragment it doesn't really matter but with a component people might actually  introspect the children and see this trick. So this was not not going to be the solution.
[03:45:35] So,
[03:45:37] What I ended up doing is realizing that I needed a runtime solution.
[03:45:41] That is, instead of the compiler inserting these markers,
[03:45:46] I'm like,
[03:45:47] the runtime at the point that it was inserted into the DOM.
[03:45:53] on the server
[03:45:55] using the same kind of rules, but at runtime, essentially, it would look...  We have this function in...
[03:46:04] on our server side called
[03:46:06] SSR Resolve...
[03:46:09] No, okay, it's not going to show up
[03:46:12] What am I in? Dom expression server, yeah.
[03:46:14] - Thank you.
[03:46:16] Where is it?  SSR...
[03:46:20] resolve, no, resolve SSR node. And this gets, whenever we have a template, we call something called the SSR function.
[03:46:28] Which...
[03:46:29] is just like a
[03:46:30] tag template literal style function,  which goes through the static strings and the expressions
[03:46:36] and kind of inserts them in and calls this resolve SSR node.
[03:46:41] And...
[03:46:44] Basically, this is like the point of insert in the DOM.  It's the same as saying insert is a DOM in our string renderer.
[03:46:49] So all I needed to do
[03:46:52] was in this process...
[03:46:54] where we're resolving them, like check if the previous ones were strings.
[03:46:59] So like check if you need to insert a marker and then insert an extra marker. So doing it at runtime, we get the same output from the server that I showed without
[03:47:07] messing with the templates themselves.  So this could work for both components
[03:47:13] and fragments because you wouldn't be applying it to the component you'd be applying it to when the  component took its like children and inserted them at the dom and then on the client side
[03:47:23] do the exact same, do almost the opposite thing.  When hydrating, if you come across the comment markers, remove them.
[03:47:33] - Thank you.
[03:47:34] I actually tried to match them up for a bit, and then I realized that that was a...
[03:47:39] kind of a fool's errand because the way stuff comes in. I'm not going into it too much.
[03:47:45] But
[03:47:47] Yeah, I don't know.  Kind of an interesting solution, uh...
[03:47:52] to the problem, so to speak.  But the end result now is that for,  we don't have this weird compiled thing,  but we have a consistent runtime way that,
[03:48:00] at hydration we can match up the nodes properly in fragments.
[03:48:05] All right.
[03:48:09] *sigh*
[03:48:11] Thank you, Jutanium, Dan Jutan, for gifting Jazzy Pants 420 with a gift sub.
[03:48:19] All right.
[03:48:20] So everyone's still alive?  We good?
[03:48:23] I I think I
[03:48:26] That is most of what I wanted to do for 1.7.  So we should get ready for this week in JavaScript.
[03:48:31] Um...
[03:48:36] All in all
[03:48:38] I think this release...
[03:48:40] for 1.7 is kind of
[03:48:42] Got us on a path which will be a lot
[03:48:47] It's heading us on a path which will make it a lot easier for people new to Solid to have better guardrails.
[03:48:54] And I'm kind of excited about that. I think that better TypeScript support, like just in these little areas, makes all the difference for people having their first impression.
[03:49:11] Yeah, I mean it felt like that. It was funny because Dan was exhausted. You could tell like
[03:49:16] Even me getting towards midnight, I was starting to get tired because I was like...
[03:49:21] I would stay muted longer and be like happy with that. I'd be like, okay, I don't have to respond to this part. I can just like
[03:49:26] You know, sit for a moment.
[03:49:29] But...
[03:49:31] No, it was awesome.
[03:49:33] Let's get...
[03:49:35] I'm just gonna get all my stuff set up here in the background.
[03:49:39] Um...
[03:49:41] Make sure that I don't leak any...
[03:49:44] Um...
[03:49:45] What is it?
[03:49:47] private circle tweets or anything.
[03:49:51] Okay.
[03:49:54] Alright, my profile.
[03:49:56] Thank you.
[03:50:01] Alright, solid.js. I wonder if I bookmarked anything this week. I feel like...
[03:50:16] Oh yeah, I did.
[03:50:17] Okay.
[03:50:20] One sec.
[03:51:08] Alright, I'm back. Sorry, I just needed a moment.
[03:51:14] Thank you.
[03:51:15] Okay
[03:51:23] Okay, what's it at 24th? Okay.
[03:51:28] Okay.
[03:51:30] Cool.
[03:51:33] Yeah, I haven't made the move to Mastodon. Okay, I'm gonna tell you. I mean, this is probably just silly of me.
[03:51:41] And I can't believe I haven't done this on stream yet.
[03:51:43] And I don't know if I'm supposed to but at this point I'm gonna do it anyway and
[03:51:49] I know Mastodon's a thing and all this.
[03:51:52] I...
[03:51:53] I was kind of, uh...
[03:51:57] Oh, yeah, I've not even logged into here.
[03:52:00] I've been trying out this other site called Post.News. It's pretty new.
[03:52:06] Um...
[03:52:08] So
[03:52:09] I tried posting things. There's no dev community there.  They haven't really officially launched...
[03:52:14] But it was interesting. It's basically very similar to Twitter.
[03:52:23] *laughs*
[03:52:24] So unfortunately, there's no dev community here, but
[03:52:27] I was definitely very like the,  the,  you know,  it has a lot of the kind of same feel to it.  And I,
[03:52:33] One of the coolest things about Post.News is it has these data HK attributes.
[03:52:40] Um...
[03:52:41] other elements and
[03:52:45] I heard when your site has data age
[03:52:48] on your elements.
[03:52:53] That you know good things happened
[03:52:58] So I've been just kind of trying it out.
[03:53:01] Actually, solid start, actually. So it's it's kind of cool.  This is a, you know, full production, basically.
[03:53:10] similar to Twitter type experience built completely on solid start.  Um,  they have something like 600,000 or maybe 800,000 signed up users,  you know,
[03:53:22] Um...
[03:53:23] I
[03:53:24] We don't have a community there or anything. I just... this is where I've been kind of checking out.
[03:53:31] to be fair, there's so much still going on  on Twitter, it's hard  for all these guys to have an incentive to
[03:53:38] to
[03:53:38] to, you know,
[03:53:40] Go but you know this is pretty cool for us right to see solid start used in production on a site with almost a million users so
[03:53:49] Yeah, and they've been hiring. They have solid devs. If you look for a job in solid, like these guys.
[03:53:56] they've been hiring you know
[03:53:59] So just throwing that out there.
[03:54:01] I've been waiting for their official push or whatever. They're still ironing out bugs and stuff, you know, but...
[03:54:07] Um,
[03:54:09] It's kind of cool.
[03:54:12] All right.
[03:54:13] - Yeah.
[03:54:20] I missed that. You're going to have to send that link.  Okay.
[03:54:25] All right.  Anyway.
[03:54:26] *sad*
[03:54:28] Sorry. All right. Um,
[03:54:33] How should we go here?  Um...
[03:54:36] Yeah, let's just go.
[03:54:39] I
[03:54:40] Let's just talk about this week in JavaScript.  Um...
[03:54:43] High level...
[03:54:46] Okay.
[03:54:48] Might have not been...
[03:54:49] It didn't start...
[03:54:51] For me, at least, it's the most...
[03:54:54] engaging week but there there was definitely a few um
[03:54:58] different...
[03:54:59] things going on and uh...
[03:55:02] Definitely the highlight of my week was the Twitter space on React server components with a...
[03:55:10] Theo, Danny Ramoff, Dan Jutan, Sophie Alberts.
[03:55:17] uh...
[03:55:18] Ben Holmes and Ben Dumfrey were on a few parts of it too, and like...
[03:55:25] Colin from Clark, and there was a really good conversation around just framework, framework design, server components, the future.  And what I really liked about it was...
[03:55:36] Um,
[03:55:38] You know what? We'll get to it when we get to it.  But that's how this week...
[03:55:44] ended for me, so...
[03:55:46] Let's go for the start.
[03:55:49] Thank you.
[03:55:53] All right.
[03:55:55] Just start with little solid news like I always do.
[03:56:01] Yeah.
[03:56:05] We need more representation. It's been great. I've been seeing people give talks.
[03:56:10] Um,
[03:56:11] But...
[03:56:13] You know...
[03:56:14] Our man Dan, hook him up.
[03:56:18] He is a great speaker.
[03:56:23] He gave probably my favorite solid talk of all time in Brussels last year.  So, yeah.
[03:56:31] Quick shout out to that.
[03:56:36] Yeah. It's been doing a lot of streaming. I thought this was pretty cool. Um...
[03:56:41] The...
[03:56:43] I don't know what it was.  Maybe it was that signals debate.  Solid's NPM downloads have been soaring recently.  We're on a good up trajectory,  but it seems like the more the debate gets...
[03:56:55] you know, the more people are trying to using solids. So it's been really good, lasted a while.
[03:57:02] Speaking of that, also about conference talks,
[03:57:06] - Yeah.
[03:57:07] I don't speak German.
[03:57:11] But...
[03:57:13] This is so awesome to see the community grow.
[03:57:17] different languages, different locations,
[03:57:20] I...
[03:57:21] I'm not the only one giving solid JS talks anymore. So let us know when you're doing this and we'll try and promote it, you know.
[03:57:29] I found out about this after the fact, I guess this is a podcast, but...
[03:57:34] you know
[03:57:36] If you're involved in Solid community, come by, drop a link, we'll promote it.  Really important to us to promote Solid into a variety of communities.
[03:57:52] Yeah, honestly, invite...
[03:57:57] Yeah.
[03:57:57] Yeah, honestly, invite Dan out to do stuff.  I'm getting...
[03:58:02] busy. I think from
[03:58:04] end of April to...
[03:58:07] June I want to say like 12th or something I have like a
[03:58:13] at least one event a week that I'm flying to like a different location to do.  Um,
[03:58:19] So...
[03:58:20] Yeah.
[03:58:22] Thank you.
[03:58:24] Which is gonna affect the stream schedule, so good to know.
[03:58:26] Okay.
[03:58:28] Let's let's get back.
[03:58:30] We already talked about a lot of this stuff on the stream because it was very topical.
[03:58:35] .
[03:58:38] Yeah, I think...
[03:58:41] the you know all the typescript stuff we've covered
[03:58:44] Couple interesting things though. We'll get to that in a minute. I think the big...
[03:58:50] piece of news which was came out midweek was that the react team posted their update on  where they are in terms of all the projects they've been looking at i'm i skim this i didn't  actually read this in as heavy detail as i probably should have um
[03:59:09] But...
[03:59:11] They're obviously...
[03:59:12] I'm very excited about the progress on React Server components.
[03:59:17] And they talk a bit about Next App Router, which is like the first implementation process
[03:59:23] of what
[03:59:24] this kind of future router is going to look like.
[03:59:28] Okay.
[03:59:30] But they're very clear it's not the only way to build server component compatible router.  So they're trying to emphasize that this is a general pattern, but they're very excited, obviously, that...
[03:59:40] that it's coming in. I thought this was interesting.
[03:59:44] Little side note.
[03:59:45] they talk about using suspense
[03:59:47] to use asset loading.
[03:59:50] One of the challenges they have with this, in my understanding, is their suspenses blocking.
[03:59:57] And this has made stuff like...
[04:00:00] like, say, using it to load images and stuff a little bit trickier.  I didn't really explore this stuff, but solid suspense is not blocking, so
[04:00:08] In theory...
[04:00:09] it could load all the image assets in parallel.
[04:00:13] Um,
[04:00:14] So this is kind of cool.
[04:00:16] I definitely want to see what they're thinking of and see if there's any like  good ideas there for us as well.  But like,
[04:00:23] I could very easily see how you could
[04:00:25] build
[04:00:26] Okay.
[04:00:27] image loading into using a resource into an image tag.
[04:00:31] And then if you did that...
[04:00:33] - Thank you.
[04:00:34] It could actually hold suspense or transitions.  So you wouldn't navigate.
[04:00:39] to the next page.
[04:00:40] until the images are actually ready.
[04:00:43] Present in the browser. So I think that's I think that's really cool. I
[04:00:50] Yeah, I mean at this point is the reality. We talked, this is why I did this first before talking about specifically the conversation, you know, with Dan. Because this is kind of the basis of why people are having the conversation right now, why Dan was probably out there like seeing like, hey, what's the chatter?
[04:01:06] of,
[04:01:09] This is also fairly interesting.
[04:01:12] Thank you.
[04:01:12] Because this is something we've been considering as well for Solid.
[04:01:16] - Mm-hmm.
[04:01:16] They want, they're thinking of moving...
[04:01:20] Well, not thinking of moving like meta tags into the framework to handle
[04:01:25] because the way asset handling is streaming makes this really difficult in our case we have it in a first-party library and
[04:01:31] But yeah, this is with streaming, it gets a lot harder to figure out how to do head insertions.
[04:01:37] and
[04:01:39] you want to give the frameworks the right tools.  It's a lot to push on all the frameworks  to implement their own way to handle this for streaming.
[04:01:47] I think React team's seen this now that React, like, Remix has done their own thing and Next had their thing and like, how can they streamline this?
[04:01:57] And they basically explain that there's two main techniques that are used right now.  One of them is using a third...
[04:02:03] party components.
[04:02:05] that kind of move things into the head that you can stipulate anywhere.
[04:02:11] But they say the problem is this relies on JavaScript.
[04:02:13] The other one is to...
[04:02:18] kind of like delay stuff in pieces.  So you can like render the head  and then render the rest.  And that obviously doesn't really work
[04:02:26] with streaming. So,
[04:02:28] This is why they're looking at a way to do this kind of like built it.
[04:02:35] I think that's cool.  And then something actually Alexis, you know, again...
[04:02:38] is looking into for solid on the solid ecosystem and actually Astro as well.  He was looking into,  so I,  I,
[04:02:44] This is definitely a really cool feature. I think this is a
[04:02:48] I'm glad that React came to a point where they can look at those add-on features.
[04:02:53] And get to see how to kind of like
[04:02:55] Thank you.
[04:02:56] you know,
[04:02:57] show people the value of stuff like suspense and transitions, which are so powerful.
[04:03:03] But as you guys can all imagine, my favorite part of this article was the part on the...
[04:03:09] optimizing compiler.
[04:03:13] - Yeah.
[04:03:14] So,
[04:03:14] because
[04:03:15] As everyone knows.
[04:03:18] I have been...
[04:03:20] Excited, but also a little bit like...
[04:03:25] Okay.
[04:03:26] How do I put it?  Very interested to see the way they talk about it.  Because in a lot of ways...
[04:03:30] I see a lot of similarities between different projects doing
[04:03:33] kind of similar things and reacts
[04:03:36] Optimizing compiler reminded me a lot of the way Marco
[04:03:40] or Svelte works.
[04:03:42] And the thing is, in those libraries,
[04:03:45] Okay.
[04:03:46] you can't easily talk about their execution model
[04:03:50] as top-down or memorizing. It just doesn't make any sense anymore because you've  eliminated all the explicitness of like how things are
[04:03:58] are you know
[04:03:59] Sequential
[04:04:02] And...
[04:04:03] I think the React team is going to come to the similar conclusion where they are now rebranding it as a reactivity or an automatic reactivity compiler.
[04:04:12] Which...
[04:04:13] It's something...
[04:04:14] that
[04:04:15] makes a lot of sense to me. Um...
[04:04:18] Yeah.
[04:04:22] I think it's interesting because obviously...
[04:04:27] They want to be very specific here about what they mean by reactivity.
[04:04:32] Like they're not talking about like introducing a concept of signals.
[04:04:37] Or at least visibly doing so.
[04:04:40] And they're not even suggesting necessarily that the implementation...
[04:04:44] would follow reactivity that way.
[04:04:47] but that the mental model of explaining it would. And to me,
[04:04:54] That's a bigger deal.
[04:05:01] Because...
[04:05:02] Implipitation aside,
[04:05:04] The way we think...
[04:05:06] about how our
[04:05:07] program executes
[04:05:10] is in my opinion much much much more important
[04:05:18] And it was interesting because a week ago...
[04:05:23] or a couple weeks ago when the singles thing came up,
[04:05:25] It was that mental model that they so carefully wanted to guard.
[04:05:30] And...
[04:05:32] I could see the tension, that's maybe why I was a little bit short with Andrew.
[04:05:36] Clark if you remember that thing back and forth where I was like, you know guys go implement your compiler come back and then we can talk about mental model  um
[04:05:46] And Andrew thought I was being kind of rude. And I was being like a tiny bit rude. He got that.
[04:05:52] correctly.
[04:05:53] But it's because...
[04:05:55] They're...
[04:05:56] premise coming out was to say that like
[04:05:59] that the signals are that kind of reactivity model,  like the way I,  like it's funny because he's looking at solid from an implementation process.
[04:06:06] or like look at these reactive libraries even quicker, whatever, pre-actuals from an implementation standpoint and saying like, oh, I only care about performance and all the reactive guys like Vue and everyone's like, no, it's the DX. We care about the mental model.
[04:06:18] So, like, to be fair...
[04:06:20] that exchange would get me to be like, hey, you know, if you're going to be like that,  how about you go build your compiler and then we'll see actually how different things are.
[04:06:31] So, yes.
[04:06:32] That...
[04:06:34] I'm happy to see this shift because it aligns very much with my experience and my expectations on this side.  And...
[04:06:42] Even
[04:06:43] Like, it's not about...
[04:06:45] having a signal primitive.  It's about the...
[04:06:48] idea of your app being something that is
[04:06:52] has
[04:06:53] implicit dependencies that update
[04:06:57] And that's the way you think about how your code executes.
[04:07:06] Thank you.
[04:07:10] So like
[04:07:13] Part of this change, I think, is the fact that this wasn't
[04:07:17] Let me pull something out here.
[04:07:21] Did I bookmark it?
[04:07:32] Yeah, I'm going to get back to that in a minute. I skipped to the juice.
[04:07:36] I did not bookmark what I was looking for.
[04:07:41] Um,
[04:07:42] Thank you.
[04:07:43] Thank you.
[04:07:43] It's funny, I ended up bookmarking this, but this is what I actually wanted to find.  Give me two seconds.  It's one of the quote tweets.  There's a lot of quote tweets.  This might take me...
[04:07:51] a while, I'm pretty sure it's right at the beginning.
[04:07:55] Joe Sivana, who's kind of in charge of React Forget,
[04:08:00] gave a better insight into this.  And I think this is...
[04:08:02] This is something we...
[04:08:03] to recognize starting late last year.  So remember, React Forget started
[04:08:08] Fall, I think fall 20...
[04:08:12] 20...
[04:08:13] one, I want to say, like a few months before the, uh,
[04:08:18] the conference where they showed it off.
[04:08:21] Starting late last year, so say fall 2022,
[04:08:25] They completely rewrote the compiler from scratch.
[04:08:29] Basically, they had moved off the auto-memorizing thing that Huxpro had shut off to align with this auto-reactivity model.
[04:08:40] And...
[04:08:42] I like...
[04:08:43] I'm glad he's talking about this because I'm gathering this is not very known.  They gave a few updates, obviously, because they've been releasing these articles.  But this is the most direct that I've heard it where they basically built it that way.
[04:08:55] And then we're like, "Hey, we need to actually do this differently."
[04:08:58] And...
[04:09:06] Essentially, like...
[04:09:09] Um,
[04:09:11] What's cool to know about Joe is he worked on Relay,  but he also worked internally on reactive language inside Facebook.  And I feel like that kind of influence is coming into the solutions.  And when I consider stuff like what Dominic Ganaway has been doing with his like
[04:09:24] Octane compiler framework that he's
[04:09:28] been working on where he basically takes something that looks like React and
[04:09:33] not react today, but more like react forget would and compiles it and
[04:09:37] down to something like solid, you start seeing like, in a sense, reactivity, like whether  you show the signals or not, it's kind of irrelevant, is
[04:09:45] an easier target
[04:09:48] for the implementation part of it.
[04:09:50] This is part of why I like reactive primitives from the AI standpoint and the building the right primitives thing.  Because you start understanding...
[04:09:59] What are the building blocks that language or compiler might consider, you know,
[04:10:07] So
[04:10:08] I think this is a good point because I think what happened is the project...
[04:10:12] fell under new leadership and new direction,  and now our auto-memoizing compiler  is an auto-reactivity compiler.
[04:10:29] They do want to say here that the mental model is that reactor we render whenever the application
[04:10:34] "We believe the simple model will keep close to JavaScript semantics, blah blah blah. The catch is that React can sometimes be too reactive."
[04:10:40] Bye.
[04:10:42] I actually think the catch is that with auto...
[04:10:46] ...matic memoization...
[04:10:49] It's a lot harder to reason about.  Like if you could observe that the key to all this stuff is being able to not observe side effects.
[04:10:56] Then it doesn't matter top-down
[04:10:59] or not.
[04:11:00] is identical. Once you can observe side effects, it becomes a lot harder to reason about.
[04:11:05] Because like...
[04:11:07] If you had
[04:11:08] two different expressions and you put a console log in between them that log the value of one of them.
[04:11:15] you know what I mean?  Like,
[04:11:17] How do you...
[04:11:19] When does that console log log?
[04:11:21] If you're being very careful with your memoization.
[04:11:28] Anyway.
[04:11:29] Yeah.
[04:11:31] Okay, in terms of concrete progress, since our last update we have substantially iterated  on design.
[04:11:36] automatic react approach and incorporate feedback from the compiler internally.
[04:11:42] They started using it in production and limited tests. Great. Okay.
[04:11:52] So they use Babel.
[04:11:53] But it's decoupled.  They just use Babel as the delivery mechanism...
[04:12:02] Basically, it only supports a subset of features so far.
[04:12:06] That makes sense.
[04:12:10] Making play JavaScript in React Kappa's reactive requires a compiler with deep understanding of semantics,
[04:12:21] instead of being limited to a domain-specific model.
[04:12:24] I think this is...  I always find this statement...
[04:12:27] Kind of funny.
[04:12:30] By taking this approach, we're creating a system free activity  within JavaScript that lets you write product code of any complexity  with full expressivity of the language,  instead of being limited to a domain specific model or language.
[04:12:45] Take that statement, okay?
[04:12:47] In your head.
[04:12:48] Go up here.
[04:12:50] However, JavaScript has lots of ways to express each of those features. If else, ternarys, for, for, and for of, etc. Trying to support the full language up front would be delayed, put to Valibate, or core model.
[04:13:00] Instead we start with...
[04:13:01] you know, a subset, okay.
[04:13:06] - -
[04:13:07] What I'm trying to get at is
[04:13:11] This
[04:13:13] is true in the ideal sense,
[04:13:16] But...
[04:13:17] If you are changing the semantics in any sort of way...
[04:13:21] not true in the real sense.
[04:13:26] Thank you.
[04:13:26] As long as JavaScript isn't executing the way that JavaScript would normally execute,
[04:13:35] then I would say that it's basically...
[04:13:40] impossible to view this thing as anything but a DSL.
[04:13:44] Thank you.
[04:13:46] So
[04:13:47] I get from an idealistic standpoint taking this stance.
[04:13:52] But I don't think anyone should kid themselves. React is creating a DSL. This is... they might not, like...
[04:14:00] make dollar signs, you know, colon things like Svelte, but you should view this the same sort of way. Like,
[04:14:08] This is not just JavaScript.
[04:14:11] It's plain and simple.
[04:14:14] um
[04:14:16] I wonder if people will try and argue this point with me in a few months.
[04:14:20] I think this is amusing.
[04:14:22] Because like...
[04:14:24] There's no way this could possibly be true.
[04:14:26] That's interesting.
[04:14:33] In theory, there's no difference between theory and practice. I love that.
[04:14:38] *laughs*
[04:14:45] .
[04:14:50] .
[04:14:50] Oh man.
[04:14:54] Yeah.
[04:14:58] Yeah, I mean that's that's the thing like I
[04:15:03] I wrote about this and I want to do a follow-up article about this because...
[04:15:08] I wrote about this...
[04:15:11] actually before the reaction...
[04:15:13] compiler was
[04:15:15] Even...
[04:15:17] was even announced.
[04:15:19] I started thinking of
[04:15:21] what an automatic reactivity compiler would look like back in November 2021.
[04:15:26] Um,
[04:15:28] And...
[04:15:29] I basically, funny enough, even when I look at this now,
[04:15:34] and look at the examples. It's like exactly the kind of examples they're going to show you for React Forget.
[04:15:40] Um,
[04:15:41] And that's why I immediately like latched onto this idea that like,
[04:15:46] It's a reactivity model more than a memoization model.
[04:15:53] I need to do a follow-up to this article, definitely.
[04:15:58] Because...
[04:15:59] I think a lot of people don't,
[04:16:01] I think there's still things that people don't understand about the implications of
[04:16:04] of this stuff and what the restrictions are and what it means.
[04:16:09] But like...
[04:16:11] What I'm getting at is...
[04:16:14] Look at this component.
[04:16:15] with an early return.
[04:16:21] Like,
[04:16:22] If this
[04:16:26] Without side effects, you could view this as something flat that runs top down.  But if you understand that not all of these expressions are going to run on every render,
[04:16:38] Like,
[04:16:38] if
[04:16:40] Yeah, I mean, it's a bad example because he only stated this component's first name and last name, but
[04:16:43] I guess it's visible.
[04:16:45] But like, Visible could change...
[04:16:48] And you don't actually need to run any of this code.  Or no, I guess you need to run this.
[04:16:54] But like,
[04:16:55] Yeah.
[04:16:57] Okay, fine. I don't actually have a good example here for this because the state's too tied. But like...
[04:17:04] Essentially, it's possible that pull blocks your code will or won't run.
[04:17:11] Like,
[04:17:12] This is not top-down anymore.
[04:17:15] and the meaning of an if statement
[04:17:18] is kind of like the way Hooks
[04:17:21] Like, it doesn't mean...
[04:17:24] Like,
[04:17:27] Yeah.
[04:17:28] Yeah, these things don't exist in a single moment of time.  It completely warps...
[04:17:34] the actual like meaning of conditional statements in your code.
[04:17:39] - Ooh.
[04:17:45] Oh wow we got a raid right right right coming in how's everyone doing?
[04:17:52] Hey, Austin.
[04:17:54] I'm just doing my segment right now in This Week in JavaScript where I kind of review some of the stuff that I
[04:18:00] was going on.  And we were just talking about React for Git, and the stuff  from the React Labs announcement.  And I was just pulling out this old article  I wrote two years ago.
[04:18:08] describing what an auto reactivity compiler could look like.
[04:18:13] a month or so before they announced React for Git,  like the auto-memoizing compiler,  I was like thinking about  how an auto-reactivity compiler would look like  and how you could compile like early returns  and stuff using reactivity.  And it's really fascinating
[04:18:28] Interesting to me kind of revisiting this thought because react just announced that their auto memoizing compiler is actually an auto reactivity compiler kind of kind of I guess more similar to what?
[04:18:40] I kind of was thinking about a couple years ago. So, um,
[04:18:45] Yeah, just kind of...
[04:18:47] Talking the stuff.
[04:18:51] The whole thing isn't four hours. We talked about TypeScript most of the stream. We just got here. Although I could easily talk four hours on this subject. As anyone who's around for the Twitter space last night with Dan Abramoff knows, we talked for quite some time.
[04:19:10] Yeah, we already talked TypeScript.
[04:19:13] But yeah...
[04:19:15] I...
[04:19:15] I think the article had one more thing that I think is cool.
[04:19:19] I'm excited about off-screen rendering.  A lot of people don't realize that Vue actually  has this feature already.  It's called Keep Alive.  But it's very powerful, again, for routing.  And I think they're looking at this for server component  routing.
[04:19:36] you can emulate browser-like condition,  where you can return back to the previous page
[04:19:43] and not fetch everything again.
[04:19:46] and have it happen in kind of a natural way.  So I think that's the interesting thing.  I'm actually very interested about off-screen rendering myself.  This is part of the reason for Solid 2.0's laziness.
[04:19:58] we will be able to do stuff like off screen without a virtual DOM with Solid 2.0, which makes me very excited because that's fairly unprecedented.  This is one of those techniques that has precipitated a virtual DOM from the point of view that...
[04:20:15] If you have a reactive library, yeah, sure.  It's really easy for me to rip something off screen.  It has nothing to do with the renderer, right?  You can take a component in solid and just be like, yeah, I'm just going to stick it over here for a minute and then bring it back.  Off screen is easy.  But the problem is with a reactive system, you update something, everything updates.  So you're actually rendering the off screen page off screen if it shares state.  It's isolated in the sense that...
[04:20:40] If you update a signal that's only on the current page and not available on the off-screen page, then yeah, no work's getting done.  Who cares?  But if you have some global store...
[04:20:50] you know, something higher up in the tree, and it's used on the on-screen page and the off-screen page, and you start updating it on the on-screen page, it's going to, like,
[04:20:58] be rendering the off-screen page on the, you know, even though you don't need to. And, um,
[04:21:05] That's why I'm very interested around lazy, computed model, because then
[04:21:12] we can not only do fine-grained updates to push out the changes, so we know exactly what changes, we can actually control when we do the
[04:21:20] the actual changes themselves.  So we could be like, okay, this is off screen.  Don't do the work yet.
[04:21:26] Right?  That way, all those changes can batch up.  And then you just pull the trigger and do the render once.  So we kind of get the best of both worlds, which  is why I'm very excited about the approach for Sall2.0.  And again, it ties into that compiler thing, because--
[04:21:41] Again, you create a reactive system like that,  it's a really good target for a compiler  that looks kind of like React for Git  because it just...
[04:21:51] Like, this is one of the funniest things about these...
[04:21:55] kind of mechanisms is that
[04:21:57] and I've talked about this in talks,  but like,
[04:22:01] Solid gets the performance.
[04:22:04] benefits or like the like
[04:22:07] of a compiler like that.
[04:22:08] Like, the...
[04:22:10] to get like, you know, people like, you know, only run the code that needs to run all that kind of stuff.  That happens automatically in a framework like Solid without a compiler.  Like the compiler...
[04:22:20] actually might have... I know this from my work with Marco. Actually, I think the compiler...
[04:22:26] Unless you do some crazy stuff like what Dominic Gannaway was working on...
[04:22:30] Um,
[04:22:31] Compiler is actually, and even then in some cases,  compiler actually is slower than the runtime approach.  Like, you can't actually know enough and...
[04:22:40] to the point that I actually think that even with the compiler,
[04:22:43] It will still be slower than approaches like solider view vapor.  But, but...
[04:22:49] You also get that without a compiler with a reactive library. So you want the compiler for ergonomics so you don't have to worry about losing reactivity.
[04:22:57] Mm-hmm.
[04:22:57] But...
[04:22:59] Yeah, it's kind of...
[04:23:01] interesting that this is where the world start colliding.
[04:23:05] because like
[04:23:08] you have something that's like reacted,  like we want it for performance and optimization and to make our DX,  um,
[04:23:14] Nice, because the problem is in React today, to get the performance, like you can write code a really easy way and don't care about it. Then you're like, I need to optimize this. And then suddenly you have to write your code differently and do more work.
[04:23:23] I
[04:23:24] React library would be like, right at the beginning,  they're like, no, no, you can't write your code quite like that.  You've got to write it a little bit differently, but  you know it's performant, and that code  that's performant isn't
[04:23:34] Any, like...
[04:23:36] isn't any uglier than...
[04:23:40] like the React performing code would be much uglier.  It actually probably looks more like the React original code.
[04:23:47] But like, you know, slightly different.
[04:23:49] So
[04:23:50] Reacts really cover the gap so that like all their performance stuff can get swept under a rug.
[04:23:56] And reactivity,
[04:23:58] is trying to
[04:23:59] you know, might work on a compiler like that. So that like, those like couple little like ergonomic things kind of, so I find that interesting.
[04:24:11] Thank you.
[04:24:12] Yeah, which means like Svelte, which is also compile time, it's kind of closer to React.
[04:24:19] Thank you.
[04:24:20] But the way Marco gets away with this is Svelte is very limited because of this choice.
[04:24:27] Because they don't have a composition model in their...  You have to get out of Svelte to do the composition model.  I mean, it's fine.  They have all the composition.  But when you want to do composition in Svelte, you're not writing Svelte.  You're writing JavaScript in your use actions or in your stores or something.  You're suddenly no longer...
[04:24:47] Svelte proper.
[04:24:49] Marco pulls us off because literally they created the most advanced compiler language thing, you know, so like it's not an easy task to do it and like,
[04:24:59] stuff that Dom was doing.
[04:25:01] even crazier.
[04:25:03] runtime reactivity at its core, but compiler optimized to the point that it actually looks at the branches and conditions in your code in your reactivity itself. It's like if you had a memo that had two different paths, so it had different dependencies.
[04:25:16] like inside that computed thing,  DOM's compiler, like to the best of its ability,  would like look at it and be like,
[04:25:22] Okay.
[04:25:23] These are the depths for this branch. These are the depths for this branch.
[04:25:28] And these are the depths for this branch.  And it would actually pre-calculate what the depths are from a compiler perspective.  And then based on what changed, swap the depths.  So he was working on some crazy stuff, which basically got the...
[04:25:43] the uh
[04:25:45] Okay.
[04:25:45] I don't want to call it granularity, but it is kind of like it's granularity in time.  Like basically got like the, the problem with compiling reactivity is you just look at something and you say everything's adept.  So you over execute it.
[04:25:58] Um,
[04:25:59] like you can't handle conditional dependencies. He basically had solved the conditional dependency problem
[04:26:05] with a compile time approach that kind of fell back to a runtime approach. Really, really clever stuff.
[04:26:10] Thank you.
[04:26:12] - Okay.
[04:26:20] So yeah, I think
[04:26:21] I think this is really interesting stuff. Yeah, I mean, what do we got here? What's the last one? Transition tracing.
[04:26:32] Ooh.
[04:26:37] That's a cool idea.
[04:26:38] Oh, it's on hold.
[04:26:39] Okay, fair enough.
[04:26:42] I didn't thought about that.  As you guys may know, Solid has transitions as well,  but I never thought about timing them.  That's interesting.
[04:26:48] Okay.
[04:26:50] Anyway.
[04:26:52] Really cool news.
[04:26:53] - Thank you.
[04:26:56] Yeah.
[04:26:57] Okay, let's keep on going.
[04:26:59] -
[04:27:05] Thank you.
[04:27:06] 102.
[04:27:09] I thought this was cool.
[04:27:11] Um...
[04:27:13] I shared this again this week.
[04:27:15] Um,
[04:27:17] After the
[04:27:19] after the web component stream,
[04:27:21] I've been writing docs, right? And I wrote this article
[04:27:25] It's not really an article, just a gist essentially, where I describe how someone could implement server components in any framework.
[04:27:31] Essentially, like I was like talking about all the way to handle routing, considerations for single file components, considerations for multi file components, APIs, what kind of primitives you need to handle it, routing semantics and different like things, how async works.
[04:27:45] thing, how to design suspense-like primitives, patterns for mutation, how the
[04:27:51] RPCs played in, optimistic updates, cache invalidation.  Basically...
[04:27:57] It's not like a perfect article, but it's rough notes that someone could probably kind of pick this up and then kind of use that as a guide and
[04:28:04] to basically build server components for any JavaScript framework.
[04:28:08] Um...
[04:28:10] And I've been working on this because I was looking at Astro, I was looking for solid.
[04:28:15] Um...
[04:28:17] And...
[04:28:18] I finally published, you know, put it out there.  And I don't know if it's related, but like...
[04:28:25] literally like  the next day or so it's a
[04:28:31] they officially put client-side routing
[04:28:34] on the roadmap for Astro. So they're looking basically at their server component type solution, which is kind of cool because this means if Astro has something server components set up,
[04:28:43] where .astro files are the server components,  essentially you can get this client hybrid routing mechanism  for literally any framework.  You'd be like, oh, Svelte here, view here,
[04:28:54] You know...
[04:28:56] This is a very, very cool feature.
[04:28:58] Um...
[04:28:59] And as I mentioned when I started to download stream as well, Astro already has all the pieces. Their HMR, I know there's been bugs with it, but generally their HMR, the way they do hot model reloading, is kind of like how server components work.
[04:29:12] They don't want to kill your island state
[04:29:15] but they want the server-rendered HTML to update without reloading the page, right?
[04:29:23] In a sense, Astro's already been working on a lot of the pieces. And one of those is Nate's library Micromorph, which is what Solid also uses for our server component.
[04:29:32] Um...
[04:29:33] implementation.
[04:29:36] And yeah, Nate's kind of excited because it looks like they're pushing this forward and
[04:29:39] Yeah, I'm...
[04:29:41] This was just notes. I'm very open to helping Astro get to the next stage with this.
[04:29:56] .
[04:29:56] So, yeah.
[04:29:58] um
[04:30:01] Is it though? It's not really CSR unless they're doing something different that I don't
[04:30:06] understand.
[04:30:10] Yeah.
[04:30:12] Right? Because it's like...  We're talking about Dom diffing, and then the...
[04:30:17] Client components are still responsible for the CSR.
[04:30:21] rebrand to red yeah i mean of course that's what this is this is always what ryan thinks is cool
[04:30:30] Bye.
[04:30:33] - Thank you.
[04:30:34] Yeah, yeah, they're doing something like Flamethrower. But the thing you have to understand is, does Turbo Elixir Flamethrower preserve the client eyelids?
[04:30:41] That's the key here.
[04:30:44] I think nested routing is actually important. I think they're not looking at that right now.
[04:30:48] But I think...
[04:30:49] I think...
[04:30:53] I think it's very powerful.
[04:30:59] I gotta do something about this.
[04:31:03] HTM Max and Livewire?
[04:31:05] Like...
[04:31:06] Those technologies each are actually quite different from each other and this is also different from them. Like all three of those are actually distinctly different models.
[04:31:14] HTMX is lakes.
[04:31:18] Astro is eyelids.
[04:31:21] Ed.
[04:31:23] Live view is...
[04:31:26] Like, I don't know, I'm just going to call it web sockets, but it's like...
[04:31:30] I mean, the websocket isn't what matters, though.
[04:31:33] It's...
[04:31:35] Ah.
[04:31:39] Yeah
[04:31:46] Oh, that's interesting.
[04:31:48] yeah I saw the tweet I just didn't get into it
[04:31:53] It's funny because...
[04:31:54] There's that one at Taco Bell, I think, that they have like a hard shell with a soft shell inside.  So it's like a double layer taco.  Yeah.
[04:32:01] And actually, funny enough, I actually really like that one.
[04:32:03] Um...
[04:32:04] - Thank you.
[04:32:05] But yeah, tacos generally, ah, man.
[04:32:09] That's hard.
[04:32:10] Usually, like, when you get the nicer, fancier ones, they're soft-shell.  But, like, if I'm going to opt for a taco, I usually actually want a hard-shell.  Like, I'm a big burrito person.  I eat more burritos than I eat...
[04:32:20] Tacos
[04:32:22] Oh, man, that's...
[04:32:24] That's hard.
[04:32:30] Yeah.
[04:32:32] This is something I don't care to give my opinion on.
[04:32:36] That was the right answer.
[04:32:38] - Okay.
[04:32:41] Okay, um
[04:32:43] Let's keep on going.
[04:32:44] Amen.
[04:32:48] uh...
[04:32:53] Okay...
[04:32:58] - Thank you.
[04:32:59] Okay, get to that in a second.
[04:33:02] Let's get back here.
[04:33:05] Because there's a few other little things here.
[04:33:09] Let's get it.
[04:33:10] I want to get back to my bookmarks.
[04:33:13] There we are.
[04:33:14] Thank you.
[04:33:15] Earlier in the week...
[04:33:18] Um
[04:33:20] Eh.
[04:33:22] There was a bit more other stuff going on.
[04:33:27] Actually okay.
[04:33:28] I should have covered this earlier.  I'm just going to cover it now.
[04:33:31] - Thank you.
[04:33:33] Thank you.
[04:33:35] Ori here sort of predicted where I'd land.  Ryan Carnio, just throw an error.  I thought this was cute.  But, generally speaking,
[04:33:43] If someone wants the most up to date,
[04:33:46] value, even if it's null, she could use the same expression
[04:33:51] of when. If someone wants the old value,
[04:33:54] she could cash the value we've
[04:33:55] before until it tear down. If someone wants to make bad code, you don't need to help them.
[04:33:59] -
[04:34:00] I could have just summarized the whole stream right here.  I saw this go up like right before the stream, but I'm like, ha ha.
[04:34:06] Yeah, there we go.
[04:34:08] Wise words of insight.
[04:34:11] Okay.
[04:34:13] Let's go back to earlier of the week.
[04:34:15] before we go to catch up the end of the week.
[04:34:20] Uh...
[04:34:21] Okay.
[04:34:26] Let's go here.
[04:34:31] I don't know. Do we need to get into another Matthew Phillips and Dan debate about...  There was some more heated...
[04:34:38] MPA versus SPA stuff. I think I think this is kind of like the new norm  Unfortunately, I don't know how I feel about it, but I mean it's fine. It's it's just like really close solutions to
[04:34:49] and mentality is kind of going against them.  Basically, Matthew Phillips...
[04:34:53] Um...
[04:34:56] talking about how
[04:34:58] Like...
[04:35:00] you know,
[04:35:01] Sometimes you don't need RSCs, you know?
[04:35:03] Islands are good enough. And I kind of agree with him.
[04:35:06] But this debate has just been going on...
[04:35:10] Now for ages.  I don't know.  I feel like there's a bit of a...
[04:35:15] Yeah.
[04:35:15] We don't need to go here too much, I think.
[04:35:19] uh
[04:35:20] Another example of this that I think is actually better, and I'm going to open another tab to show this, is...
[04:35:28] Let's find him. What's his name? Guillermo?
[04:35:32] Let's see if I can find this.
[04:35:35] Because I read something and I...
[04:35:37] that he posted and I was like okay yeah
[04:35:41] So this is cool.
[04:35:43] Supporting Remix, you know,
[04:35:48] on Vercel.
[04:35:49] And, you know, Remix is great because like a lot of frameworks, Remix works
[04:35:54] well on all the service providers use it for sale using Netlify, you know, same way as Feltkit, Solid Start, we built on multi adapters and generally, every hosting provider is kind of like treated as equal game. So it's cool to see, you know, Guillermo taking the time to kind of look at it.
[04:36:11] Thank you.
[04:36:12] and making this integration.
[04:36:16] But there was an interesting little thread here because
[04:36:22] - Thank you.
[04:36:23] Could you- what does it say?
[04:36:27] The Jordaner understand the trade-offs more deeply.
[04:36:30] I think this is going to be part of the new narrative right now.
[04:36:36] And I'm actually looking for a quote tweet. Yeah, Michael Jackson.
[04:36:42] - Yeah.
[04:36:43] And this is going to be like the new conversation. Does Remix doesn't fully embrace React?
[04:36:51] you know,
[04:36:52] Opinion for simple apps loaders, easy to read.  For market complex, I expect lots of gotchas,  like forgetting to promise all are complex.
[04:36:59] This...
[04:37:00] This is an interesting one from Guillermo, because...
[04:37:05] I think...
[04:37:06] for this
[04:37:08] complex case
[04:37:11] Actually, loaders are probably a win.
[04:37:14] Because the problem with the complex case in RSCs is you're not going to realize that you're causing waterfalls when you start fetching stuff all over the way that have all these dependencies, and you're going to send your performance through...
[04:37:27] the floor, whereas with a loader pattern, you actually see all the code in front of you.  It might be messier, but it's like there's the source of the problem.
[04:37:37] Interesting. Anyways.
[04:37:39] I love the way Michael responded, though.  Very even-keeled.  You know, he's, like, talking about the differences.  Yeah.
[04:37:46] you know,
[04:37:48] - Yeah.
[04:37:51] Thank you.
[04:37:54] Oh yeah, I want fetch based cache facilities. I'm actually, this is probably the piece I'm most concerned. I want to build solutions that don't depend on caches. I think cache is an important tool. But if you use cache as your like,
[04:38:07] gap, stop gap, you're gonna hit use cases where it doesn't fit
[04:38:11] And then,
[04:38:12] You know, your cash misses are going to be really expensive.  I think fundamentally, we shouldn't design with the cash in mind.  I think that's a flawed approach.  So it's funny because that's like Vercell's thing.  So like...
[04:38:23] Mmm, this is this is this is interesting. I think caching is important, but I think it's like what you add later once you have a good design. So...
[04:38:31] Huh, yeah, this is interesting.
[04:38:34] -
[04:38:36] But I love how he's very...
[04:38:38] down to earth on this and i i i should have actually liked all of these tweets
[04:38:43] Anyway, um...
[04:38:46] This is a much more even keel thing because like...
[04:38:50] - Thank you.
[04:38:51] I think Remix is going to get a lot of criticism for not
[04:38:54] you know, adopting all of React's stuff. And like, you know,
[04:38:59] - Thank you.
[04:39:01] I'm sure they have their reasons.  I think it's tricky, though, because they're in a position where, like,  React server components are still kind of experimental.  Yeah.
[04:39:08] If they decided that React Server components weren't for them and they had valid reasons, maybe stuff they learned through Hydrogen Project or stuff like that made them think like, hey,
[04:39:17] There's trade-offs here we're not willing to go on.
[04:39:21] If Remix tried to air that right now, I think people would... yeah, I think the sentiment would be like, "Oh, you're holding it wrong," or, "It's too early."
[04:39:30] You know?
[04:39:33] Good on you, Michael.
[04:39:35] You know, just address what you can.
[04:39:39] And I think you're doing a great job.
[04:39:43] I'm not.
[04:39:45] Thank you.
[04:39:47] Yeah, talked about this with Dan a bit as well.
[04:39:54] Which is...
[04:39:55] Yeah, this dialogue about fully embracing React, remember, like,
[04:40:01] I said it a couple weeks ago, right? What did I call it? It's the beginning of the fully react. I
[04:40:06] Here it is. "So begins the age of Foley with React." I don't think people got it then, but I hope that you get it now. This is going to be a thing. Sorry, one sec.
[04:41:38] Sorry about that, yeah. Uh... Um... Yeah. Duh.
[04:41:46] Yeah.
[04:41:47] Calling it now, it's pre-act in two years.
[04:41:51] Yeah, I mean...
[04:41:52] There's some, they're close proximity that we might land there. I think React's still like the biggest framework. There's no way you can ignore what React's doing. But at this point, it's one of those like, be careful junctures. Because you got to let React do what it's doing.
[04:42:07] you know
[04:42:10] It's so tricky because...
[04:42:14] -
[04:42:16] I'm trying to think of how I want to...
[04:42:19] how I want to phrase this. The stuff wasn't ready.
[04:42:23] Like, we were talking.  For those who...  I keep on bringing up this Twitter space because it was really good.  It was...
[04:42:31] It was a- I'm sorry it wasn't recorded.
[04:42:35] It was really good.
[04:42:37] And
[04:42:40] Dan Jutan did a great summary at the high level, but talking about this Remix thing in depth, there was a point where we were having this discussion and Dan was like, hey, I went and opened an issue on the Remix repo to say, hey, let's get suspense and transition in here.
[04:42:58] And
[04:43:00] What had basically happened, which is good, but like...
[04:43:05] Dan Dutan had also said something like, "Hey, do you need React server components to do all this streaming and...
[04:43:13] You know...
[04:43:15] on the server and doing all this like fetching the component and all this kind of like all this kind of stuff.  He's like in solid,  we've been doing that for like years and we didn't need server components to do it.
[04:43:24] And he's right, obviously.  But, like...
[04:43:28] Um...
[04:43:29] it was because React didn't have that data fetching primitive, right? Like,
[04:43:33] when...
[04:43:34] When Solid added suspense and stuff, we added data fetching right away, you know, back in, what was that, like 2019 or something.
[04:43:42] Everything was built on top of it.  So people have been like, part of the awe of server components that are coming in right now, where people are like, "Wow, this is so cool."
[04:43:50] you've been able to do in solid for like three years.
[04:43:53] But the problem was...
[04:43:54] I knew that.  Because I was designing solid,  I knew what primitives I was building,  and I built every piece...
[04:44:02] of the core library and stuff like the router or stuff that was close, I built it
[04:44:07] and guided people to build it following these things.  We've had transitions in our router since 2020.  This was just part of the model.
[04:44:16] And,
[04:44:17] Remix.
[04:44:19] didn't have that advantage because they had no clue when
[04:44:23] React was going to release these things. So they had to literally rebuild all
[04:44:27] not rebuild,  like at the same time,  build all the same stuff,  like loading states.  Um,
[04:44:33] Race condition handling, transition loading, transition
[04:44:38] handling mutation, like all these pieces that you almost get for free with the underlying react model.
[04:44:45] that they had to handle things like the way they handle streaming.
[04:44:48] And...
[04:44:50] It was unfortunate because I watched this happen.
[04:44:53] And if you guys know, SolidRouter is very inspired by React Router.  And we were building these things at the same time.
[04:45:00] And I was seeing Remix develop out, and we were doing our thing, and I'm like...
[04:45:05] every piece would be that much simpler and easier if they could just tap into stuff like suspense, like, and, um, and transition stuff like we already had because it was built into the core library and remixed instead. And I saw this with Tanstack too, like the, like Tanner had to go and like build all these mechanisms.
[04:45:22] And
[04:45:22] they were something that could have just come from the framework.
[04:45:28] Thank you.
[04:45:31] And this is...  This is like...  A really tricky thing.  Because they had no option.  They had to build today.  And now...
[04:45:41] They've built all their mechanisms and React's like, look, we have a good solution for this.  You should build on that.
[04:45:46] That's tricky.
[04:45:48] Right.
[04:45:50] So like...
[04:45:52] And it's really tricky when elements of it
[04:45:56] might not even look as good from your perspective.
[04:45:59] Remix had put a lot of thought and parts of their stuff
[04:46:03] have made it into other things. Their approach to optimistic updates
[04:46:08] I've said this like a dozen times
[04:46:11] will be copied by everyone.
[04:46:13] All the other pieces, you know, here, there, that...  Like, you know, the whole action loader thing...
[04:46:19] like half of it's...  That part is probably going to fall away in a sense.  React doesn't have...
[04:46:27] Like RSCs, you don't need to have explicit loaders in the same way.
[04:46:30] You could though.
[04:46:32] And...
[04:46:33] Actions...
[04:46:35] for RSCs are gonna be actually more like solid start.  They're gonna be RPCs.
[04:46:41] not like route based kind of like rails model, like remix.
[04:46:46] But like...
[04:46:48] Those optimistic updates
[04:46:50] Everybody is going to copy because that was such an innovative...
[04:46:55] realization and the way it plays with progressive enhancement.
[04:46:58] That is...
[04:47:00] That is like...  And it's all theirs.  Um...
[04:47:03] So, like, it's an interesting place because like,
[04:47:08] We're gonna see elements of Remix in other things.
[04:47:12] But they might not want to adopt
[04:47:15] it fully because it
[04:47:17] like doesn't align with what they've been building the last several years.
[04:47:22] Next basically gutted itself for React.
[04:47:25] Um,
[04:47:28] which seems like a pretty good gamble for them, but not everyone else is going to...
[04:47:32] easily follows suit.
[04:47:38] So yeah, it's not an easy topic.
[04:47:41] But this fully in react stigma thing is interesting because this is the kind of thing that
[04:47:46] is such a delicate balance because on one hand, like even Dan brought up some really, really good points about this from a doc standpoint.
[04:47:56] Yeah, let me... it's time to pull up the Dan Jutan. I should have bookmarked this before. I know it's in the chat, but let's just go to this. He...
[04:48:06] He did the work of actually...
[04:48:10] Uh, where are we, Dan?
[04:48:16] So
[04:48:20] Is it his latest tweet?
[04:48:24] Nope.
[04:48:31] All right, here we go. Yeah, he gave a nice summary of this stuff that went on. And I can talk to a few of these points.
[04:48:39] before we wrap up tonight.
[04:48:42] Okay, yeah, stateless component can be used as server component and run the server or  import a client and run on both sides.
[04:48:48] Um...
[04:48:49] The shared component idea, this is something where you have strict boundaries like Astro you don't get.  This was one of the tricky things that I had to think about.  To be fair, you can always write something shared as a client component and get this in Astro by using client only.  Or sorry, not passing a directive to it.  So you can do this with Astro if you want to stay in your framework.  But the boundaries are less permissive.
[04:49:13] RSCs and Astro components are the same server-only mental model.
[04:49:17] and they both let you use top level weight,
[04:49:19] So,
[04:49:20] and can serialize directly.
[04:49:23] New world order data fetching is part of the component tree.
[04:49:27] Yeah.
[04:49:30] It's interesting, though, because they accomplished this.
[04:49:33] is actually tricky.
[04:49:37] Do you know what the problem with async/await is?
[04:49:39] on the server.
[04:49:42] How do you resume context?
[04:49:45] you have to use stuff like async local storage or whatever, like Node has, but not every platform has that. So like, I feel like
[04:49:52] This is an example, which is smart on them, is where they're leading the cart before the horse, so to speak.  Where they're like, they don't have server context right now.
[04:50:02] Um,
[04:50:03] And it hinges on this feature.  And like they might be able to add it in Vercel if Vercel, like if Next only works on Node.com.
[04:50:12] based environments.
[04:50:13] like only running on AWS or whatever.
[04:50:17] And then like...
[04:50:18] You know what I mean? Like, this is an interesting place because...
[04:50:22] I think they start polyfilling...
[04:50:25] I think this is what actually happened. They started polyfilling async local storage, and suddenly Cloudflare guys and Dino are like, "What the hell are you guys doing? We were standardizing this stuff."
[04:50:35] Standard plus like there's no such thing as standard plus like what is that? So like I
[04:50:42] This one's tricky for me because I was thinking about it yesterday.  I was like, okay, yeah, I can...  What would it take to implement async components in Solid?  And I realized I need async local storage, which not all platforms support.
[04:50:56] So it's a very
[04:50:59] it's interesting.  Something like Astro,  where you just do it page level,  might not matter,  but context considerations,  like, you know,  things like generating hydration IDs,  you know, unique identifiers,  all that kind of stuff,  requires that you have something  that, like,
[04:51:15] lives in
[04:51:16] across async boundaries within the same request, like resuming reactivity, you know, like that kind of stuff.
[04:51:22] And
[04:51:23] Without that, you can't actually implement that model.
[04:51:27] So like,
[04:51:30] Only React could make a bet like this, I think.
[04:51:33] Because they know if they do it, everyone has to follow.  They can just...
[04:51:36] Hold them at gunpoint.
[04:51:38] It's interesting.
[04:51:46] The other problem with async components, you don't actually want a top level of weight.  I've talked about this before.
[04:51:52] Um,
[04:51:54] This is the other thing that I've been...  In some ways, it's...
[04:51:58] It's simpler.
[04:51:59] But it's...
[04:52:02] In a general sense, you don't want a top-level weight.  It forces you to break things into a whole bunch of components that...
[04:52:07] leaves you only
[04:52:09] with a file system router basically as any kind of way to
[04:52:13] deal with that. Basically,
[04:52:15] Because of suspense, you don't want to await above the suspense boundary.
[04:52:20] You want to do it below the suspense boundary and you know if you want to break stuff up into streaming and stuff. So like essentially
[04:52:27] At minimum, you need a suspense component with a suspense boundary above...
[04:52:32] your top level of weight.
[04:52:36] from a React standpoint, which means that every route
[04:52:38] starts with two components instead of one component.
[04:52:41] It's interesting to me because the as I said file system writer can can hide this but it's it's a huge assumption that
[04:52:49] from like a generalizable standpoint so
[04:52:53] Um,
[04:52:54] Yeah, I don't know. It's interesting.
[04:52:56] Thank you.
[04:52:59] uh yeah competing patterns loader action championed by this jsx didn't knock the  templating off easier but loader here won't be fully resources
[04:53:07] I'm not so sure about this.
[04:53:08] Thank you.
[04:53:09] Okay.
[04:53:10] I think it's possible that the loader pattern is a subset
[04:53:14] of this architecture.
[04:53:16] if you hold it the right way. I'll talk about this more in a future stream, but I've been designing what a generic server component
[04:53:22] slash spa router would look like that could handle both use cases.  I realized that if you design it in a certain way,
[04:53:29] It's all the same thing.
[04:53:45] Yeah, basically that's the way to think about it, right?
[04:53:48] The first component is your Git Service like props and then the rest of the tree is.
[04:53:54] We've done this for...
[04:53:55] patterned forever, you know, with lazy components and routing before it was built into file system. You could like have the first
[04:54:02] component of the route, fetch the data, and then lazy...
[04:54:05] the rest of the tree. So you could fetch
[04:54:07] Improved.
[04:54:08] and load the code in parallel.  Nested routing
[04:54:12] made that bad though.
[04:54:14] because you couldn't get the next piece of code or data fetching until that one loaded and you get waterfalls.  So the thing is, you pull out the loaders to parallelize the data fetching.  But what if we just pulled out the routes and parallelized the routes?
[04:54:28] *cough cough* Sorry.
[04:54:30] That's more interesting to me.
[04:54:32] But if you do that, you have to start rethinking context and dependency injection.
[04:54:37] Maybe that's the place we want to go to.
[04:54:44] "A key RSC features this protocol.  This lets server expose a special endpoint.  The client can hit the endpoint and ask for part of a tree.  The server generates a serial." Yeah.
[04:54:53] It's interesting though,
[04:54:55] Is this as a React server component feature?
[04:54:57] Don't actually think server quotes in general need this feature. I mean there needs to be somewhat of a format because you need to handle a
[04:55:05] certain amount of asset loading and stuff.
[04:55:08] But
[04:55:10] I don't know if it needs
[04:55:12] The way React is chosen to do it isn't the only way to do it.
[04:55:16] But it is...
[04:55:17] It is important to understand
[04:55:21] that this is architectural paradigm shifting.  Right.
[04:55:29] Yeah, talking about the, this was an interesting part of the conversation where they were talking about like how much in the future they talk about.
[04:55:36] because suspense left people waiting.
[04:55:40] - Yeah.
[04:55:41] Okay. Yeah, now we're getting to some of the cool...
[04:55:43] Thank you.
[04:55:45] At a certain point,
[04:55:47] people were trying to suggest that server components were more complicated
[04:55:52] and trying to like
[04:55:54] Um,
[04:55:55] kind of take that stance of being like, hey, you know, maybe I just don't need them.
[04:55:59] And...
[04:56:00] On this, myself and Dan
[04:56:03] completely agreed, which was that, no, no, no, no, you, you got to flip the thinking around. Um,
[04:56:09] Which is that like...
[04:56:12] Server components are just functions that return...
[04:56:16] JSX or HTML conceptually.
[04:56:18] And if you start that as your base of talking about React and forget about React today,
[04:56:25] then it's actually a lot simpler model because if you're coming in you just go okay
[04:56:29] I want to make a website.
[04:56:30] I'm going to create a component.
[04:56:31] And I'm going to return some JSX.
[04:56:34] Done.
[04:56:36] So if you start from that point of view and start with the server components, not even really calling out that the server components is saying like it renders some stuff and it sends it to the browser, you can build on the client side and the interactivity afterwards. And in that mental model, it's very similar to something like Astro or Marco or something which does partial hydration, because you start with talking about the web by talking about just shipping HTML.  Right.
[04:56:59] Um...
[04:57:00] And...
[04:57:01] what kind of prompted part of this conversation was, um,
[04:57:05] Dan was talking about a bunch of pieces and I was like, hey, remember that conversation we had two years ago where I told you you introduced everything backwards and I finally got it.  It was about two years ago.
[04:57:16] But I understand why no one else is getting it.  And it prompted him to kind of, he was like, yeah, maybe I should give a talk about this, where he was like,
[04:57:23] an alternate history of,
[04:57:25] where he described if React had actually started from this model and actually built up on it.  And the most interesting thing about that story is his story of that reminded me of the actual story of Marco.
[04:57:36] Um, like that, that is what Marco was built to do. It was, if you had started that way and built up
[04:57:43] that way. The parallels are incredible  because even when he was talking and Sophie was  talking about some of the
[04:57:49] earlier prototypes and things they tried to do with server components before they realized server components were the patterns. These are things that Marco went through in its history, except like eight years ago.
[04:57:58] And, um...
[04:58:01] I mean, I don't say everyone gets in the same place, but it's interesting because Marco basically got something like server components and
[04:58:08] Um...
[04:58:08] or our islands or whatever.
[04:58:10] And then now they're trying to take it further.  I wonder if there's any hints there of how React would take it further one day.
[04:58:27] Yeah, the thing is I never saw it that way because you're just shifting the mental ball. The reason it's complicated is because you're asking people to think backwards, right? It's like the silly guy who made this the solid video where he's like, it's like twisting my handlebars backwards. And I was like, what if your handlebars were already backwards and this is setting them the right way? You know what I mean? Like,
[04:58:49] There's a little bit of that, you know, like,
[04:58:51] It's okay.
[04:58:53] Sometimes we just need to change the perspective and it unlocks an incredible amount of stuff.  Single page apps hit a local maxima.
[04:59:00] Years ago.  There's a reason Reacts been working on this forever.  There's a reason there's been a shift.  And there's like...
[04:59:06] We've been building towards this future.
[04:59:10] And not just react, everyone's been doing their part in little ways.
[04:59:13] That's why I'm very excited because it's very clear to me that in the next 12 months,
[04:59:18] There's going to be alternate solutions to React that are...
[04:59:21] going to be quite compelling.
[04:59:23] in this zone.
[04:59:29] Yeah, I mean, okay, don't get me wrong.  Server Components is a terrible brand.  It's like the worst name you could have picked for it.  Because the branding suggests that it's the addition of...
[04:59:37] and I understand because it's a feature,
[04:59:38] But it's like, it's suggesting that like...
[04:59:42] uh
[04:59:43] It makes people think of what I call the Lakes architecture.
[04:59:45] It's like suggesting you have a client app and then you do server components.  No, no, no.  It's more, it's more like, it's really tricky because it's like,
[04:59:52] I'd...
[04:59:53] The part you're supposed to denote is the client components, you know, or as Theo likes to call them, the isomorphic components.
[05:00:00] I just call them islands now because that's the term for them, right?  Like...
[05:00:04] React will never call them that, but that's what I call them islands.
[05:00:09] Because they are islands.  I know sometimes when I talk with Dan and stuff, he doesn't like that and he tries to say they're like donuts.
[05:00:16] Or something like that.
[05:00:18] Um...
[05:00:21] Oh, no, not isomorphic. Sorry. Interactive. Sorry. Interactive. No, no, no. Interactive. Sorry, Theo. You're right. I misquoted you. Interactive.
[05:00:29] interactive.
[05:00:31] Right, I meant I meant interactive.
[05:00:35] So,
[05:00:36] Yeah.
[05:00:37] Sorry, I got the word it was another I word and
[05:00:42] *laughs*
[05:00:43] Yeah.
[05:00:45] Sorry.
[05:00:46] Interactive. Thanks for correcting me. I didn't mean to misspeak, but like interactive
[05:00:51] components.  Um...
[05:00:54] - Thank you.
[05:00:55] Of course, I completely lost my train of thought there, but well-deserved.  I know you don't like the word isomorphic.  I don't think anyone likes the word isomorphic.
[05:01:03] Um...
[05:01:04] But that's the special part. That's the thing that... These are interactive components. But you can't brand that because that's what everything's been to this date.
[05:01:15] Sorry, where I was getting with Dan, sometimes we're talking about donuts and mussels and all these things.  But the truth of the matter is the island's pattern is identical to...
[05:01:23] to the server components pattern from a design DX standpoint.  Obviously, the UX is different, the way that you handle it, but the actual structure, the rules, everything is identical to a T.  It's not like the shape is different, it's not like now we're dealing with donuts or lakes or anything.  They are islands. It is an islands architecture.
[05:01:46] Thank you.
[05:01:50] Yeah, but what I'm getting at is...
[05:01:53] Is that islands work that way as well. They've always worked that way. You could this pattern is how Marco's worked.
[05:02:01] you know,
[05:02:03] all along as well, right?
[05:02:05] Um
[05:02:07] So like maybe the naming of islands isn't right.  Cause like they can be like donuts in that sense.  Yeah.
[05:02:12] But that is what islands are.
[05:02:22] I think there was an interesting question about docs and how to teach it, because you should start from RSCs conceptually or like the basics. And because if not every framework adopts it.
[05:02:31] Um,
[05:02:32] there's that friction that I was talking about, like with Remix.
[05:02:36] because it's like
[05:02:38] you can't it's hard to be your starting point if it's not everyone's starting  point you can always like add it on as a feature but if if if
[05:02:44] If you're trying to teach it as like, this is React, people are going to get really confused.  The thing is, React can do this, though.
[05:02:52] And they probably will. Dan was like, Dan Jutan was trying to suggest you couldn't do this, but React is fully in its right to do this and it's just going to make...
[05:03:01] Alienate Remix, but they can do that.
[05:03:04] So...
[05:03:09] Not everyone uses Marco. Oh, I know.
[05:03:12] Marco is just where you go to get all the good ideas.
[05:03:22] Yeah, we're going to talk about the router in a minute. Sorry, Parasocial, you have your own summary of events as well?
[05:03:35] Oh yeah, this was actually kind of cool.  This one thing.  There was a part of conversation where they were talking about how to put server components inside Astro.  Which is kind of like two levels of huh.  But I love it because...
[05:03:49] It's part of that story that I love seeing of Astro literally just supporting everything.
[05:03:55] So looking more at Astro as an alternative to Next rather than React, which is really what Astro...
[05:04:01] you know,  like,
[05:04:02] Astro should embrace React, like why not? Like it's just another piece of the like another feather in their hat. So like
[05:04:10] you know,
[05:04:11] Astro shouldn't be worried about React. The more they integrate with React, the better. We can have React RSC framework sitting next to Solid Start on a different page.
[05:04:22] Let's let's do this.
[05:04:24] So yeah.
[05:04:33] I thought this was a really interesting part of the conversation and insight.
[05:04:37] Oh, we got Dev in here. What do you got for me, Dev?
[05:04:41] Oh, you're just quoting me.
[05:04:48] *laughs*
[05:04:51] Sorry, the replies here are good.
[05:04:56] Okay, we'll get to it in a second.
[05:05:01] Let's keep on track here for a moment, as on track as we can.
[05:05:06] whoo
[05:05:07] Did I lose Dan?  No, I'm a superior parasocial.  Yeah, okay.  Okay.
[05:05:14] Hmm...
[05:05:15] Here's Dan, okay.
[05:05:17] Anyway, um...  Yeah, I mean, there were so many topics, I can't... I can't...
[05:05:25] I can't get into the mall.  Um...
[05:05:28] honestly
[05:05:31] Oh, man.
[05:05:33] I shouldn't like overhype it for the people that missed it, but like...
[05:05:37] This is...
[05:05:38] It was better than any framework panel that I've done all year. We talked about like
[05:05:42] Oh, man.  Anyway, sorry.
[05:05:45] - Thank you.
[05:05:47] Um...
[05:05:48] *bark*
[05:05:49] Yeah.
[05:05:53] Okay, whatever.
[05:05:56] Okay. It's weird how adamant both Dan and Sophie seem to be about building a router. It seemed really like a natural extension to me. Yeah, let's talk about that.
[05:06:04] Um,
[05:06:09] Thank you.
[05:06:10] *sniff*
[05:06:13] Thank you.
[05:06:14] Sorry, I was just reading another comment that made me laugh.
[05:06:20] because the...
[05:06:22] *laughs*
[05:06:25] uh
[05:06:27] Yeah, sorry. It was just funny.
[05:06:30] I think spaces are different. I'd agree with Theo that spaces are different when you know they're gonna be recorded or not and Theo likes
[05:06:37] likes that like authentic real kind of thing. It is unfortunate for those who missed a
[05:06:43] missed on that but it's it's it's always hard to know
[05:06:46] Anyways, sorry, back to where I was getting about the router.
[05:06:52] Thank you.
[05:06:53] Let me put this why...
[05:06:56] I agree, and also why...
[05:06:59] I can see why they're not going to go there.
[05:07:07] I mean, I think I've already said it a bunch of times.  Router equals framework.  So when React is telling you that you need a framework,
[05:07:13] to use React, they're actually telling you you need...
[05:07:16] a modern router to use React.
[05:07:19] Thank you.
[05:07:20] So in a sense, they don't want to take that all on.  They want to leave that open in the ecosystem.  That's like the place where
[05:07:28] They feel like a lot of the opinions can come in to kind of build on.
[05:07:33] It's funny because...
[05:07:35] I...
[05:07:36] When I introduced server components in Solid,
[05:07:39] I didn't introduce them as server components.  I introduced them as a routing feature.  Like, it was actually a new router.  What was it, like...
[05:07:46] Uh...
[05:07:47] Let me see what was the story called.
[05:07:50] not two-way binding as a two-way street, what was it called?
[05:07:55] Client-side routing without the JavaScript.
[05:07:59] This may be buried the lead about server components, but
[05:08:03] It explains...
[05:08:04] It basically explains how Solid does server components. And my focus was on the routing because the routing is actually the fundamental piece that everyone needs to actually put everything together.
[05:08:15] And it's what makes an architecture.  What's the difference between an MPA and a single page app?
[05:08:19] The routing.
[05:08:22] What's the difference between a modern isomorphic SSR single-page app and the original...
[05:08:27] single page apps that came out before that.
[05:08:30] It's actually the routing again every time we've had a shift or generational change  It's the routing that is a thing and this is why I
[05:08:38] I got interested and went this direction because I understood that the routing was the new paradigm and that's what unlocked it.  Routing is always what to pay attention to if you want to understand generational architecture on the web.  The web is just a giant router, so if you change the routing, you change the paradigm.
[05:08:56] Thank you.
[05:09:04] In any case...
[05:09:07] Thank you.
[05:09:08] It is kind of an interesting topic because...
[05:09:14] Again, I was starting to look at... Let's just go home.  I was starting to kind of look at this, and I actually wrote this tweet, because...
[05:09:24] I'd already been thinking about this.  I wrote a document that I haven't shared with people yet,  but I'm explaining this.  But I was looking at this and I was like,
[05:09:31] Could we just reduce...
[05:09:33] All routing...
[05:09:35] server, spa, whatever, to essentially this one thing. If the router
[05:09:41] owns the HTML and is aware of the routes,
[05:09:46] and you have the proper locations to handle server context and client context.
[05:09:53] Could you not...
[05:09:56] just make a single router to rule them all, so to speak.  Because, like, what I mean by this is, like...
[05:10:03] initial page load you can just run the router as normal, render everything, but like after the fact, you could, because the way this is wrapped, you could always choose to skip
[05:10:15] Rendering the children and because you know the routes you can jump straight to the outlet without actually rendering the outlet like the router could render the outlet and
[05:10:21] And once you can understand this, you can emulate...
[05:10:26] server components because you can literally have the router initially do the render, do the HTML body, whatever, and then
[05:10:32] on subsequent renders only choose the routes that it needs to based on the request?
[05:10:37] You can do client-side routing by, at build time, running the top section to generate the HTML and body stuff, and then...
[05:10:46] The client router basically starts from the outlet, so your app actually starts from there.
[05:10:52] You can, like...
[05:10:54] So that's full CSR with no backend. And you can basically,
[05:10:59] Once you can do that, you can basically mimic any pattern in between. And you could even do it on a per route section level.
[05:11:07] Right? So,
[05:11:09] Like...
[05:11:10] When I attack these problems, I love writing routers.  I wrote my first router in 2000-- nested router back in 2014 for web components and
[05:11:17] It's funny, I don't like frameworks, but I like routers.  So it's...
[05:11:21] This is like an alternative...
[05:11:24] tact.
[05:11:24] to it.
[05:11:26] And
[05:11:28] if
[05:11:29] You could write the router
[05:11:34] or you had the router and anyone could use that router,
[05:11:38] And you had...
[05:11:40] The bundler, if you have those two pieces,
[05:11:42] A bundler?
[05:11:44] capable of knowing how to split stuff up
[05:11:46] You know, whether it's use or bling or whatever.
[05:11:49] And you have a router...
[05:11:50] capable of handling SSR, single page apps, whatever.
[05:11:54] If you have these two pieces...
[05:11:57] Do you need a framework?
[05:12:03] Like a meta framework like that.  Do you need a Next.js?
[05:12:14] I would argue you don't.
[05:12:17] I think it's good to have. I think people should build those things. I think it's good to have those opinions, but those opinions...
[05:12:23] travel much
[05:12:24] faster.
[05:12:26] The interesting part is the infrastructure piece.
[05:12:29] and those specific tie-ins.  But I'm gonna argue that if you make the right paradigm  for the router, that tie-in happens at the bundler level,  not at the runtime router side.
[05:12:41] It's the bundler that interfaces...
[05:12:44] with
[05:12:45] the infrastructure piece. So if you look at it that way,
[05:12:49] And the router is actually
[05:12:51] isolated from it
[05:12:57] You could approach this in such a way that you could use stuff like deployment adapters
[05:13:03] to handle the gap.
[05:13:07] And in a sense...
[05:13:09] we just moved down another level.
[05:13:12] The framework is like the
[05:13:14] It's not the bundler, it's not the router, it's the infrastructure tie-in, it's the deployment adapters, so to speak.
[05:13:23] And then when you think about that,
[05:13:25] What solid starts doing with astro starts making like a whole ton of sense doesn't it? I
[05:13:33] Just saying.
[05:13:34] Thank you.
[05:13:35] - Yeah.
[05:13:36] Thank you.
[05:13:39] I-I-I-
[05:13:40] I think it's interesting where these layers sit.
[05:13:44] But I...
[05:13:45] I think the opinion of like framework versus non-framework
[05:13:51] is always a moving target.
[05:13:56] It's all about having the right primitives.
[05:14:04] So...
[05:14:05] Moving into this new age...
[05:14:08] React will be the framework.
[05:14:10] like need the framework,
[05:14:14] and other solutions
[05:14:16] are going to be the flyberries.
[05:14:19] Anyway.
[05:14:20] We've talked about this before.  I just, this is why I want to spend time on these kind of things to understand them.
[05:14:27] But yes, everybody...  I love this, Jenna. She wrote a whole  thing here on March 10th going like, why aren't you guys  writing your routers? Like, when is this going to  happen? And like...
[05:14:37] We pressed on it a little bit in the space.  Like, come on, you guys are going to write a writer at some point.
[05:14:43] We're going to have to see if this is going to be something kind of like the auto-memoizing compiler.  Are we going to just...
[05:14:49] you know,
[05:14:49] or auto reactivity compilers. It's just one of those inevitable things that
[05:14:53] you know,
[05:14:54] Where we end up anyways.
[05:14:56] I don't know.
[05:15:02] Thank you.
[05:15:18] Sorry, the HL body elements, this was so we could get the head tags and stuff on the initial render.  I think you guys are...
[05:15:24] hinting at it here.
[05:15:27] You also, in the structure,  would put your nav...
[05:15:31] maybe out here.
[05:15:33] Things that don't change.
[05:15:36] Um...
[05:15:37] And the reason this works...
[05:15:40] Yeah, I think there's a few details here, but the reason this works again is because the client components never re-render on the server.
[05:15:47] So you don't actually have to, you can just skip that part of the tree.
[05:15:53] I actually think client context needs to move for the story to be true.  I think you have to move it above the router, I realized as I wrote in the comments.
[05:16:00] I think this sort of thinking is interesting, to say the least.
[05:16:13] Yeah, I mean...
[05:16:15] Yeah, I...
[05:16:16] I mean, React is still a library.  That's why they don't want to build the router and whatnot.  But like...
[05:16:22] -
[05:16:25] I guess there's just a difference between what is and what the result is. I talked about this a bunch when we were talking about the whole Vercel React alignment thing where people were like,
[05:16:39] talking about them colluding and stuff. I'm like, no, they're not actually colluding with each other, doing some weird, sketchy stuff, but like...
[05:16:47] like the result even whether they are or aren't doesn't matter because the result is the same
[05:16:53] Um...
[05:16:56] React is looking at itself as like
[05:16:59] providing more of these primitives,  um,
[05:17:01] - Thank you.
[05:17:03] So in a sense, they're kind of being what they've always been.
[05:17:07] But if they push hard on this fully react thing,
[05:17:13] That's where the identity changes. It's not...
[05:17:16] what they offer
[05:17:18] it's what the philosophies.  If there is a concept of fully react,
[05:17:25] That's when they become the framework to me.
[05:17:27] Or whatever. It's a spec or whatever.  But that's when the shift is.
[05:17:32] React never had the concept of fully React before.
[05:17:48] Is this rather a concept of... No, I was trying to unify the concepts of server components with client things. General purpose APIs can't...
[05:17:57] don't handle the structure needed to do...
[05:18:00] like a server component architecture.  Even if you think about it, even handle the architecture to do...
[05:18:07] a client-side single-page app. There's
[05:18:11] they are architected a certain way.  So I was like looking to see if there's like overlap.
[05:18:19] But yes, we are talking about...
[05:18:21] frameworks like Solid, React, but presumably like
[05:18:25] This pattern can apply, I'm using JSX here as an example, but if this pattern worked, it could work for anyone who wanted to do this kind of nested server component routing, Svelte, Astro, or everyone, who knows.
[05:18:39] Okay.
[05:18:40] Yeah.
[05:18:42] Alright.
[05:18:44] Yeah. So, I mean,
[05:18:46] It's so awesome to see this kind of thinking...
[05:18:52] you know,
[05:18:53] kind of promote more thinking.  I learned so many things on that,  like that they weren't actually parallelizing stuff.  And I kind of knew how server contexts work,  but they kind of confirmed that they worked like ASP.net.  And I mean, that's why they're being careful with it.  But you start...
[05:19:07] I don't want people to walk away and be like, server components are ASP.net.  They're not.
[05:19:11] actually all these decisions actually
[05:19:13] remove the downside. It's very clear they understood the problem with ASP.NET when designing server components.
[05:19:20] um...
[05:19:21] Server context is bad.
[05:19:23] Should be very limited so like all these pieces are coming the design and why we're very different now than they were like 15 years ago  but
[05:19:31] There was just a lot of interesting little snippets, even from myself, which got me very excited.
[05:19:39] my takeaways
[05:19:41] -
[05:19:42] this use client use server thing
[05:19:45] React has a lot of push and bundlers will try and follow to try and make things work.
[05:19:51] You know, regardless,
[05:19:53] So fighting it might be battling upstream a little bit.  This use server, use client thing might be like the new JSX,  where a bunch of frameworks just pick it up  if they want to use this kind of technology.  It might not be, but if bundlers work hard to support it,  I'm already seeing it with people like Jared and Bun,  but to be fair, Jared and Bun,
[05:20:12] Bun is right on the cutting edge of things. But if that's the approach,
[05:20:17] It makes a much harder story for stuff like Bling, which will still work, but it's different if every bundler just supports it instead of us having to write a plugin for every bundler.
[05:20:28] And like, don't get me wrong.
[05:20:30] Server dollar sign.
[05:20:32] is way more powerful than use server.
[05:20:36] And I don't mean because you can embed in client.  Take that away.  If you don't like that, don't worry about that.  I mean more that...
[05:20:41] it's very hard to figure out how to inject the request response model into these things right now.  And actually...
[05:20:48] That was...
[05:20:49] leads me to my second takeaway and Colin from Clark really kind of put it out me and
[05:20:56] There's parts of this, like request response model,
[05:21:00] that are getting generalized, but every framework handles them different, which makes it really hard to be aware of this stuff inside the React server component land
[05:21:07] Yet, because they're the API, we must.  And I think this might be the biggest point of friction around this whole...
[05:21:15] Thing
[05:21:16] is that how do you write a third-party library?
[05:21:19] with those kind of details have to be specific to the framework.
[05:21:24] - Thank you.
[05:21:25] Is React going to standardize on that?
[05:21:28] They can't without knowing the underlying infrastructure. Dino is different than
[05:21:33] Cloudflare, like...
[05:21:37] Our library author is going to have to have detection on these environments and put all that logic into their components.
[05:21:45] Maybe.
[05:21:46] This is the new world we're entering into.
[05:21:52] Thank you.
[05:22:06] Just catching up with chat.
[05:22:14] Thank you.
[05:22:17] I've been using Blink, you know what is working slowly? You can't send a request until that...
[05:22:25] Oh, yeah, yeah, yeah. It's the way the compilation works. Um...
[05:22:32] Yeah, with code splitting.  That's interesting.
[05:22:36] We...
[05:22:37] Yeah, we need to finesse some of that stuff probably.
[05:22:45] Yeah.
[05:22:57] I'm not getting into that part of chat. Okay, so what do we got? We got one more thing before head off. I don't...
[05:23:04] I'm just going to look at the replies for this.  We started with TypeScript.
[05:23:08] Let's end with TypeScript.
[05:23:10] TypeScript is a subset of JavaScript. Not too many people are buying this.
[05:23:18] Long, it's a superset.
[05:23:19] Yeah, no.
[05:23:22] *sigh*
[05:23:23] uh,
[05:23:38] The funny thing is every time I read comments like this, like...
[05:23:44] It's true, literally, but again, this is the difference between what's written on paper and what the actual reality is.
[05:23:50] If people treated TypeScript this way, I'd have way less headaches, but no one actually treats TypeScript this way.
[05:23:57] is trans-node-jab the exact same picture in the C+ was for use trans-node-C
[05:24:03] That's definitely the way to conceptualize it.  You get a hard...
[05:24:06] It's a super-sadded draft, not a subset of all files.
[05:24:08] But the opposite is not true.
[05:24:10] See, again...
[05:24:11] In theory...
[05:24:13] Except in practice, we know
[05:24:16] Thank you.
[05:24:17] Set three clear states otherwise.
[05:24:22] uh
[05:24:32] Yeah. I mean, this is the response I expected from this.
[05:24:37] Thank you.
[05:24:42] It's a super set and that's a hill I die on. Yeah, I mean...
[05:24:47] Until you realize that there's a bunch of ugly JavaScript code that you would never write in TypeScript and that you consider unacceptable from a TypeScript perspective.
[05:24:58] And then at that point, it becomes a subset.  There's just no other way around it.
[05:25:03] uh
[05:25:11] -
[05:25:12] All right.
[05:25:13] Ready to be rated. Okay. Yeah, see this is being smart.
[05:25:18] All right.
[05:25:19] -
[05:25:20] He knows I'm done. He knows that I am going to eat whatever yummy food
[05:25:25] that is sitting just out that hallway.
[05:25:32] Yeah, who's live?
[05:25:35] Let's see how this raid business works.  I'm wrapping up here.
[05:25:42] I appreciate you all joining me today.  Let's get back here.
[05:25:49] this was a
[05:25:52] Fun one with all the TypeScript stuff.  I hope you all get something valuable out of it.
[05:25:56] Let me refresh Twitch and see who's going...
[05:26:00] CM Griffin...
[05:26:02] uh,
[05:26:04] Yeah, okay, fine. There's no way I can't raid Dan at this point. What are you doing today, Dan?
[05:26:16] Are you still here? Maybe he's already started his stream.
[05:26:19] Let me get in here and get that raid going.  Yeah, thank you all.  Let's raid...
[05:26:27] Jutaneum. That's just his username, right? Jutaneum.
[05:26:34] Oh wait, I like, said it in Dan's chat, that's hilarious. Sorry, I need to go back to my chat.
[05:26:39] *laughs*
[05:26:43] What is Dan working on? I think he told me he's been doing a lot of Astros, this Astrosolid project that he's been working on.
[05:26:50] Um,
[05:26:52] So let's go see him there.  And until next week.
[05:26:56] See you all.