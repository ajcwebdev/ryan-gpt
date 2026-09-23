---
title: "jHDzGYHY2ew"
slug: "jHDzGYHY2ew"
duration: "3:57:33"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/jHDzGYHY2ew.m4a"
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
[00:00:02] Hello everyone, welcome to my stream today. I'm going to be flying this one solo.
[00:00:08] going to be talking about
[00:00:11] what it
[00:00:12] went into building solid 1.5. So this isn't going to be just
[00:00:17] a stream about, uh,
[00:00:20] Um...
[00:00:21] The features.
[00:00:22] I'm going to actually talk about the implementation, the design, the decisions that went behind it.
[00:00:27] So this is probably going to go pretty in-depth. Hopefully you're all in for that.
[00:00:32] That's what we do around here, right?
[00:00:35] So I'm going to give everyone a second to join in on the stream.  I'm just going to,
[00:00:39] pump it here on social channels just give me a second
[00:00:42] while we get started.
[00:00:47] See here, yeah.
[00:00:50] I've been trying to decide whether I should be pushing Twitch more or should be pushing YouTube. It's kind of a...
[00:00:57] interesting balance i i started everything on youtube and i quite like that but um
[00:01:04] Thank you.
[00:01:04] To be fair...
[00:01:06] Twitch has a certain amount of interactivity that's pretty cool.
[00:01:09] So
[00:01:10] Yeah, let's just...
[00:01:12] People are starting to trickle in.
[00:01:14] Um...
[00:01:17] Alright.
[00:01:19] Perfect.
[00:01:20] Thank you.
[00:01:21] How's everyone doing today?
[00:01:27] Okay.
[00:01:28] *click*
[00:01:29] *chewing*
[00:01:31] There you go, see we got some different opinions here. Some twitch bias going on.
[00:01:36] And apparently YouTube has less  Sorry, where is it?  YouTube has some less latency in South Africa apparently
[00:01:46] So maybe there's no clear winner here.
[00:01:49] -
[00:01:50] All right.
[00:01:52] I always enjoy these streams like this one because I get to kind of talk about what I've been working on in more detail.
[00:02:01] - Thank you.
[00:02:01] half the time we're looking at what other
[00:02:04] more than half time probably what other people are working on.
[00:02:07] But these ones always get to be a bit of a showcase and kind of like talk through a lot of the decision points that matter to me, so to speak.
[00:02:17] Okay.
[00:02:19] Yeah, thank you. Yeah, no, 1.5 has been going on for a little bit now, honestly.
[00:02:26] So...
[00:02:28] Yeah, it's...
[00:02:30] We'll talk about that in a minute. I'm just welcoming everybody on here as we get started.
[00:02:38] It's given a couple more minutes. I think I've shared the link in all the proper places now.
[00:02:44] Um, so...
[00:02:47] give just another minute or so.
[00:02:50] *clicks*
[00:02:52] I'm going to do this week in JavaScript later, like I've been doing recently with the guest streams.  I think it just works better that way.
[00:03:01] You gotta wait for my hot takes, so to speak.
[00:03:06] Not that I'm sure they're that hot, but you guys definitely...
[00:03:12] got me last week with the bun announcement. I wasn't prepared for that.
[00:03:16] or not button announcements or the Dino announcement. I wasn't prepared for that. It was pretty
[00:03:24] pretty, pretty, uh,
[00:03:25] I don't know what the term is, just like off the cuff.  Like I was not ready.  This week I did pay a little bit more attention in there  because, well, I mean, how could you not?
[00:03:35] The conversations this week have been all around that, but we'll get to that later on in the stream.
[00:03:42] It's...
[00:03:43] Right.
[00:03:44] Because we're here mostly to talk about what's been new with Solid and Solid 1.5. Yeah.
[00:03:49] Nice. People coming in from all over the world, it looks like.
[00:03:52] That's awesome.
[00:03:53] - Yeah.
[00:03:56] Alright.
[00:03:59] Looks like we have more YouTube representation than Twitch right now though, so...
[00:04:02] People on Twitch got some work to do.
[00:04:05] I don't know. It's probably work I have to do.
[00:04:07] I think there's a big gap between having...  I think I have like 3,000 subscribers on YouTube and like...
[00:04:13] 200 on Twitch.
[00:04:15] So we got a bit of a
[00:04:17] gap to cover.
[00:04:23] Alright, how's...
[00:04:25] People still coming in, yeah. What do we got, Pakistan?
[00:04:31] Well, I guess the new streaming time has helped some people. It's probably pretty late where you are, but I used to stream at 8pm Pacific, which meant it would be like 3am or 4am for you. So...
[00:04:44] Glad you can all make it.  It's hard.  You can never get like a...
[00:04:48] perfect time for everyone someone was like oh i can you stream something more eu friendly and
[00:04:53] It's...
[00:04:54] it's possible obviously.  Um,
[00:04:57] We went a little bit earlier, but...
[00:04:59] Perfect time for you.
[00:05:01] Great to see you, Alex.  All right.
[00:05:05] Lots of hot topics. Yeah. Yeah. And honestly, for the stream, I want you guys to kind of keep me honest because I'm going to be
[00:05:12] I'm going to be talking about implementation, I'm going to be talking the details, and sometimes I get caught up on those.
[00:05:20] you know if you have a question you don't understand what I'm talking about please ask in chat
[00:05:24] Please, you know, like no bad questions here. I want to make sure what I'm saying makes sense because sometimes the stuff is pretty complicated and I've spent so long in this like narrow focus that I'm like, I don't realize like how off the deep end I've gone.
[00:05:41] Alright, yeah, okay, I guess it's been five minutes of me just rambling, waiting for things to get started, so I probably should get started, right? Like...
[00:05:50] That's
[00:05:51] That's why we're here.
[00:05:54] Yeah.
[00:05:56] Maybe I should create a banner so I can remember where I started.
[00:06:02] Até.
[00:06:04] Here we go.
[00:06:05] See, so is everyone ready? Better than five in the morning. Yeah. Oh yeah.
[00:06:10] Alright.
[00:06:11] Well, it looks like we got some people here. Okay. So let's, let's, let's get started and talk about solid 1.5. Um,
[00:06:18] which is a release that's been in the works, I would say, since...
[00:06:23] July-ish. Sometimes when I'm working on one minor release, like, there's so many bug fixes that I'm just chasing the previous one
[00:06:33] for quite a while, like between 1.3 and 1.4, there was a lot of bug fixes. We did a lot of SSR work in 1.3, like streaming and did like basically completely updated our capabilities on what we could do with SSR. And this is really important for working on things like Solid Start.
[00:06:52] And I was working and ironing out bugs for weeks and weeks and weeks.  Thank you to everyone who jumped in on those newer SSR technologies right off the bat and helped test it.  It was incredibly valuable.  But one point...
[00:07:08] 5 was
[00:07:09] Kind of...
[00:07:11] Uh...
[00:07:12] was kind of a funny one and let me explain why. Let me get my screen in here.
[00:07:20] not like that like this 1.5 almost started
[00:07:26] immediately...
[00:07:28] Um...
[00:07:30] after
[00:07:32] the 1.4 release.
[00:07:33] Like, sometimes you do everything and you plan everything out and then you miss something small.
[00:07:42] That's essential.
[00:07:43] And
[00:07:44] You go, "How did you miss that?" Well, in our case, in Soled's case,
[00:07:49] Um...
[00:07:51] There's certain APIs that we have that I never use, never recommend,
[00:07:55] and like just like I basically say like avoid unless you need to know what you're doing and
[00:08:02] That seems like a weird choice. Like why would you have APIs in Solid that you should never ever use?
[00:08:09] and
[00:08:10] the reason is it's not never ever it's just sometimes there's edge cases when you
[00:08:16] live in a reactive declarative world
[00:08:19] there's boundaries to other code, other systems, and, you know, imperative procedures, things that already exist that you don't have control over. And,
[00:08:27] Um...
[00:08:28] Essentially...
[00:08:30] Okay.
[00:08:32] In those situations...
[00:08:34] you do need other tools.  You need to bridge that gap.  And it's important to me,  and it's always been important to me with Sol to bridge that gap because...
[00:08:41] that's how you can slide in and make the same kind of comparisons and stuff. Like if we didn't have our like in solid you almost never need the data diff.
[00:08:49] But...
[00:08:50] if we didn't have the ability to,
[00:08:53] I couldn't show how fast our approach is compared to VDOM libraries in heavy data diff situations.
[00:09:00] You know, like
[00:09:01] like we wouldn't be able to like someone would have to build that and
[00:09:06] for those like cases, you know, that you needed.
[00:09:10] It needs to be there, but not every tool is for every job.
[00:09:15] and
[00:09:15] What happened in 1.4, I know this is a long windup, is
[00:09:19] I added two features at the same time, top-level arrays in stores, which is
[00:09:23] the chef's kiss or whatever. Like, this- this- I wish I'd thought of how to do this earlier. This is- this was the thing that suddenly made
[00:09:31] stores and signals top level feel really nice because you were kind of tempted previously to kind of
[00:09:37] put them all into like a single store and make these big singular store objects.  Once we got top-up arrays, you could just be like this is store, this is signal,  I understand, everything works nicely, you get rid of a
[00:09:47] Unnecessary nesting. It's a really big feature, but at the exact same time
[00:09:52] we added
[00:09:54] Uh...
[00:09:55] It's funny, it's like a liner note here somewhere. It's not even like...
[00:10:01] something that
[00:10:02] like made the headlines.
[00:10:05] But...
[00:10:06] I fixed a very, very long time bug in Solid.
[00:10:11] Um...
[00:10:12] which I don't even... like did I even mention it in the release notes? Probably it was just like a simple bug fix.  But it's like, it's probably buried in here somewhere.
[00:10:23] Um...
[00:10:26] yeah well it's not even that I'm probably just not seeing it right now  anyway that the problem was that
[00:10:32] Thank you.
[00:10:33] Solid had this batching mechanism, this ability to kind of like
[00:10:36] put some changes together and apply them at the same time.  Because if you're gonna update a bunch of stuff,  you don't wanna like,
[00:10:42] always just immediately update. And the problem was that
[00:10:48] Stores never listened to it. They just ignored this mechanism and since it came up so rarely no one really noticed.
[00:10:54] Um, and
[00:10:56] that
[00:10:57] you know, seemed
[00:10:59] like a good thing to fix. Like when we were thinking about, they also didn't obey concurrent rendering properly. You could get leaking and bleeding. So I was like, this is something really high priority from a mechanical standpoint, kind in the background, not even maybe release worthy.
[00:11:13] that I want to fix. And I did that as part 1.4. And we talked about on the building 1.4 stream.
[00:11:20] and
[00:11:22] ...
[00:11:24] And what ended up happening was, I was pretty happy with myself, I did the release, and within the first day, someone's like, "Create Mutable's broken."
[00:11:36] I'm not sure.
[00:11:37] And I was like,
[00:11:41] Wow, yeah, you're right.
[00:11:43] This actually just doesn't
[00:11:44] work.
[00:11:46] And that's pretty huge, right?  You do this release, you work on it for, you know,
[00:11:52] months and you kind of figure out where the right balance of pieces and features are where you want to be and then you break something that again, I never use and never recommend. But there are use cases and some people like this primitive, and it's just completely busted.
[00:12:06] Because I fixed a bug.
[00:12:09] So right off the bat, I was like, okay.
[00:12:12] I didn't rush to it and try and patch it or something.  This was too fundamental and I didn't want to lose...
[00:12:18] Like I didn't want...
[00:12:19] to just like trying to hack in some fix here because like then it wouldn't make sense. I realized I had to rethink
[00:12:26] things a bit.
[00:12:28] And this kind of came at a perfect time where we started rethinking
[00:12:33] the future of Solid anyways. If you aren't, you all aren't aware, started a working group here. It's pretty empty right now in terms of discussions. I think there's only like
[00:12:43] thing, but I started
[00:12:44] kind of pitching ideas towards the future of reactivity in Solid 2.0. And there's actually a decent amount of discussion here and people had ideas and proposals and stuff like you see, I'm still scrolling like this. This has been a really good process for us. And I hope they engage this more in the future. But
[00:13:02] what I want with all these kind of conversations happening simultaneously  1.5 started a different place so it wasn't trying to
[00:13:10] necessarily chase the bugs even though there was a big bug here but like actually go well
[00:13:15] We can't release this until we actually know what our future looks like.
[00:13:20] And that was a big part of it.
[00:13:23] you
[00:13:24] Sorry, I just caught up on a comment on stream. I just want to throw this one in. I'm disappointed the name for 1.5 isn't the good batch, referring to the Star Wars the Bad Batch. The funniest thing is,
[00:13:34] I had suggested the Bad Batch, but then people were like, oh, they might, people might not get that reference and think that it's like a bad release.  It just didn't occur to anyone to say the Good Batch is like a...
[00:13:45] reverse play on it.
[00:13:47] Um,
[00:13:48] But yeah, I wanted to point this out because this was definitely in the short list.
[00:13:54] Anyway, so on that note, that's where I kind of want to start talking about Sol 1.5 today, because every piece of this basically started with us asking about what the future should look like.
[00:14:08] Thank you.
[00:14:10] Solid loses in drop to the rxJS
[00:14:14] I hope not. There is actually some feature improvements that were made as part of 1.60 and even improve
[00:14:21] um,
[00:14:22] observability. There's some small bug fixes and tweaks.
[00:14:27] I believe there isn't an issue.
[00:14:31] Unless you're aware of one that I'm not aware of.
[00:14:33] There was actually work done on the RxJS integration stuff  as part of 1.5, but it was pretty minor, so I didn't end up
[00:14:40] talking about in these release notes. But yeah,
[00:14:45] And...
[00:14:46] So what I've done here is going to set the stage, right?
[00:14:50] So
[00:14:51] We had a whole bunch of issues that kind of opened up all around the same time too.  And before I talk about what we didn't,
[00:14:59] 1.5, I want to perhaps highlight what we didn't do.
[00:15:09] Okay, sorry, I should have made a banner for that.
[00:15:13] Because what we didn't do
[00:15:16] in 1.5 is actually more than you'd think.  And I think it's important here to kind of
[00:15:23] give a basis so you can kind of understand a bit on this decision
[00:15:26] process.
[00:15:28] Thank you.
[00:15:29] Um, there's a couple issues here, um, and I'm just gonna pull them up right now so you can kind of see what I'm talking about.  But they were just like...
[00:15:37] Let me see if I can find it.
[00:15:46] This is a good one, Boolean attributes. Another one,
[00:15:52] Yeah.
[00:15:52] Okay, cool.  I'm just going to show you all a couple kind of funny issues you get when you're building a framework and you're just like,
[00:15:59] what, like a little bit of like, what's going on?
[00:16:04] Because...
[00:16:04] The answers aren't always obvious, right?
[00:16:07] For example...
[00:16:09] This one was a funny one. Someone pointed out that error boundaries do not catch falsy values.
[00:16:15] And
[00:16:17] I went down a crazy rabbit hole here because people were like, no, if I throw undefined,
[00:16:23] I want it to properly work with errors.  And the same thing with create resource. Create resource, error boundaries.  People are throwing undefined and going, "Why is this not working properly?"  And you can understand why.
[00:16:35] because if you hold the error in a variable and the value is undefined, that's the same as if there is no error. So I went down this whole
[00:16:44] rabbit hole of trying to change everything so we could have undefined errors.
[00:16:48] And I realized that was like
[00:16:50] You know, this is one of those things. You can look at the discussion here.
[00:16:54] I started making like special symbols to define like
[00:16:58] There is no error
[00:17:00] But then once you started moving things across...
[00:17:03] Boundaries every single place
[00:17:06] I took an error as an argument. Now I needed to go like
[00:17:09] past the second argument that's like, is there an error?
[00:17:12] and just kept on branching out and out and out, kind of coloring the whole code base.  And I was like...
[00:17:18] People have got to be messing with me. At a certain point I got so frustrated with this issue that I was just like,
[00:17:26] Like...
[00:17:27] Why are you throwing undefined errors?
[00:17:30] So we actually changed the behavior here in a different way.  We actually ended up saying if you throw undefined errors,  we're just going to make an error object that's unknown error  and handle it that way.  I know that's kind of taking a pretty big assumption there,  but this had kind of gone...
[00:17:46] completely out of hand because
[00:17:48] It was funny because I went through the code and I thought I hit all those points.  But then when I re-implemented it with this undefined error, I found a whole bunch of bugs.
[00:17:56] because of stuff like invisibly failing because of this whole undefined thing.  Now that partially could be my fault because of my lack of TypeScript skills or whatever, but...
[00:18:07] Trying to account for things that aren't there but are there is the weirdest experience. And I wasted like a week on this and
[00:18:16] It was the biggest waste of time ever, but I learned something important here because like,
[00:18:22] Yeah, I mean, it's there's a lot of thought and talking in here, but this was just like the perfect example of how you can kind of get pulled down a rabbit hole for something that's like,
[00:18:34] Like, there's always edge cases, and you have to...  I think the almost most important part is being able to explain them, rather than actually...
[00:18:44] even more so than the fact that they exist, because sometimes it's not worth thinking
[00:18:49] Fixing them. It's and this was one of them. I
[00:18:52] We had another really interesting one, and I'll kind of leave this open to you all to decide...
[00:18:57] which way you think was the best way to handle it. But
[00:19:01] Boolean attributes. This is something that
[00:19:04] In the end, we decided to not make a change, but there was...
[00:19:08] there was...
[00:19:09] It was noted that in Solid...
[00:19:12] If you had a Boolean attribute, an element,
[00:19:14] It would...
[00:19:16] put in quotes here, essentially, like it does in HTML.  But if you put a Boolean attribute on a component,
[00:19:24] it would pass true through.
[00:19:28] And...
[00:19:29] this was kind of inconsistent.
[00:19:32] But,
[00:19:33] The challenge here is you can spread.
[00:19:37] Thanks.
[00:19:39] You can spread values coming in
[00:19:42] from a component.
[00:19:44] And if the component that you lose the information on whether
[00:19:49] it's boolean or not once you just have an object of props that is like foo true.  So you have two options: foo can either be true or foo can be empty string.
[00:19:58] when you have a Boolean property. And
[00:20:02] Our...
[00:20:03] Uh...
[00:20:05] Our position here is kind of inconsistent because on a regular element it's a string, but on a component it's true.
[00:20:13] And in a sense on a component, it has to be true.
[00:20:16] Because...
[00:20:17] As I said, you can't differentiate.  So there was...
[00:20:20] What, unless...
[00:20:21] the proposal is to make...
[00:20:24] He had always...
[00:20:25] an empty string, which is where we were kind of debating it.  And this seems very logical from the HTML side of things, right?
[00:20:36] because this is what you'd expect from HTML.  But the funny thing is, I looked at JavaScript frameworks,
[00:20:40] And not a single one had taken this decision seriously.
[00:20:44] Point.
[00:20:45] I already knew this way back, but
[00:20:49] Most people want...
[00:20:52] True?
[00:20:54] Um...
[00:20:55] Funnily enough,
[00:20:56] Like, to be...
[00:20:59] Um,
[00:21:00] true, which is kind of interesting, right? Because the problem is,
[00:21:07] if you look at the difference between
[00:21:10] The rose?
[00:21:12] There's like a difference here. And to be clear,
[00:21:14] This is only for non-Boolean attributes. I know I'm getting kind of technical, but the way that React, most frameworks handle this is they keep track of which
[00:21:22] attributes are actually Boolean attributes.
[00:21:25] Um...
[00:21:26] versus not. And actually, you know what, I'm going to show you something really quickly here. So you, so you guys can understand what I'm saying. There are actually
[00:21:34] Oh.
[00:21:35] different, like there are different attributes
[00:21:39] that actually
[00:21:40] work differently. Like, draggable
[00:21:43] only works
[00:21:45] If...
[00:21:47] if uh let me see can i put drag on the button yeah there it is only works if if you put true
[00:21:53] If Dragon Ball is just there like this...
[00:21:57] it doesn't actually work. So there's like,
[00:22:00] Boolean attributes and pseudo Boolean attributes. And this is kind of like
[00:22:05] Why is a DOM so freaking weird, right?
[00:22:11] And...
[00:22:12] essentially, um,
[00:22:16] I...
[00:22:17] None of the frameworks actually have chosen the line with HTML.  There's basically only two approaches that frameworks have chosen here.
[00:22:26] One is the way that Solo does, where it treats
[00:22:28] the element
[00:22:30] Boolean special?
[00:22:32] and actually felt has the exact same behavior.
[00:22:35] And the other one is you treat this one as true. So if you do this,
[00:22:39] It's the same as
[00:22:41] This.
[00:22:42] which is what Preact React Inferno does. And arguably,
[00:22:45] in a sense that one's more consistent, but it breaks expectation on standard DOM.  So as I said, this is a very technical
[00:22:54] Um...
[00:22:55] scenario and
[00:22:57] You notice on the React version,
[00:23:00] "Draggable" would be "sufficient"
[00:23:03] Like this?
[00:23:04] would work in React because it would make it draggable true. But in solid,
[00:23:09] you actually have to
[00:23:11] Make it.
[00:23:12] true to actually do this, whether it's, sorry, whether it's, uh,
[00:23:17] like this or the string
[00:23:18] and
[00:23:20] This is...
[00:23:22] This is like one of those interesting things and actually the same is true as svelte as well. It's just like
[00:23:28] The DOM under, how much of the DOM do you hide from people and
[00:23:32] how much do you change expectation here? Because on one side,
[00:23:36] you kind of wish that this would just work.
[00:23:38] for draggable, but if this just works for draggable, then Boolean properties
[00:23:43] Um,
[00:23:44] and stuff like I think people are talking about, sorry, not there, people were talking,  not that one, people were talking about things like data properties don't work properly.
[00:23:54] like DataHK and a bunch of
[00:23:57] dom stuff like there's actually this is another one of those places where the compromise is not
[00:24:01] Great.
[00:24:03] Right?
[00:24:05] Luckily, there's far less of these...
[00:24:09] Boolean thing like
[00:24:11] Basically, we know which properties are the defined DOM Boolean properties and how to handle them.  And then we handle the rest in...
[00:24:17] in a way that reflects how they would be handled in HTML. So I think this is one of those
[00:24:23] interesting cases where
[00:24:26] Some people are very strongly on one side, some people are very strongly on the other side.
[00:24:30] And...
[00:24:32] It's weird, but we landed in the middle still, which meant it was no change and we continued on.  But I just I just want these are the kind of conversations that you start having when you get into this zone.
[00:24:42] Right.
[00:24:42] Um,
[00:24:44] something has a question.  What about an own language like salt or script,  body,  textile,  and just like,  I,  people have done that.  If you are interested in this,  um,  there are projects,  um,
[00:24:54] where people have done stuff similar to it.
[00:24:57] my opinion on this is like if someone wants to put in the effort to do this go for it but it's a ton of
[00:25:03] work. Like, could you suddenly don't get the free syntax highlighting and the prettier and linting and
[00:25:11] TypeScript and like you basically have to build the whole ecosystem from scratch.
[00:25:19] Um
[00:25:19] Thank you.
[00:25:20] But yeah, I mean...
[00:25:21] If that's where you want to spend your time,
[00:25:24] then that's maybe something worth doing.
[00:25:28] Anyway.
[00:25:29] So
[00:25:34] There was one other issue...
[00:25:36] but I'm not going to get too far into it, but it was about stores and wanting to remove the symbols.  And I went through a bunch of benchmarking and realized that, you know, there's performance implications. So again, we left it as no change. But really with this
[00:25:50] The reason I wanted to highlight this before we got into the guts of it is I just wanted to talk about a show that
[00:25:55] How...
[00:25:56] how much like
[00:25:59] debate and deliberation went over, um,
[00:26:02] these very might like seemingly minor details um because these conversations are happening again  right
[00:26:08] Um,
[00:26:10] And
[00:26:12] Yeah, I think that's enough for this preamble here.
[00:26:17] Let's talk more about what we actually did with Solid.  And a couple of them is...
[00:26:23] uh, the ones that I was pretty happy with before we again,  get into the more technical stuff is I feel like this release again,
[00:26:31] Um...
[00:26:33] kind of improve...
[00:26:35] How should I put it?
[00:26:38] quality of life improvements. That's how I'm going to say, call it. I was actually really stoked that a lot of other people came in and kind of helped contribute.
[00:26:46] One of them was Milo from the core team. Solid is now, if you notice, a PMPM workspace
[00:26:54] Turbo Repo.
[00:26:55] It's easier than ever to get started, to download the project, run test, build, all that stuff.  There are some clunky bits that were kind of awkward with all these manual scripts.  Everything is so much faster and nicer to use if you want to contribute.  You can literally just pull it down, run the commands.  There's no weird like, "Oh, you have to build before this." Turbo repo takes care of everything for us.  I've been super stoked on this change and that was a big one that came in here. So thank you, Milo.
[00:27:24] And there were a few small,
[00:27:28] features like things people probably have been asking for forever like
[00:27:36] As everyone knows,
[00:27:38] Solid has a
[00:27:39] children helper
[00:27:41] which helps you get the children.
[00:27:43] if you need to process them specially.  So you might be like,
[00:27:47] C equals children.
[00:27:50] props.children in a function.
[00:27:53] And this will kind of like
[00:27:56] deeply resolve the children for you and and um actually i'm on 1.4.1 so i can't show you here um
[00:28:05] Let me...
[00:28:07] hack the URL so I can get the latest.
[00:28:12] Now...
[00:28:13] The thing is, if there is a single child,
[00:28:16] what ends up happening is it's just a value.  And if it's an array, it's an array.  But now if you want,
[00:28:24] it to always be array you can just go
[00:28:27] Sorry the types aren't updated in here, but you can actually just call to array on this thing, right?  So you can either access the children directly like this.
[00:28:34] or you can call to array
[00:28:37] and you now
[00:28:39] will get...
[00:28:41] will get the children as an array. And just in case you don't believe me, because TypeScript
[00:28:47] We haven't actually updated this. The release just came out today. We need to get this updated. There is actually some simple array handling. Just a small thing. People have been asking about this a lot recently, porting React libraries. They're like, how do I...
[00:29:00] How do I simply move the children to an array so I can iterate over them?  These patterns all work in solid even without a B DOM. There's just some subtle differences.
[00:29:12] TypeScript.
[00:29:13] stuff has definitely been a lot on our mind here.
[00:29:17] Um...
[00:29:21] Like, uh...
[00:29:23] And one...
[00:29:24] There's something called Node Next, which I knew nothing about before this release.  But again, this is another place where someone from the community came in and
[00:29:34] and basically...
[00:29:36] updated everything, added extensions everywhere, explicit extension export fields across solid and
[00:29:43] DOM expressions to support Node Next, which is the new kind of TypeScript
[00:29:51] resolution.
[00:29:53] So, yeah, I mean, these things are just...
[00:29:56] They're small things, but they're really nice things that make
[00:30:00] stuff, you know,
[00:30:01] Um,
[00:30:02] easier to use. And actually while I'm on TypeScript, we're going to nail off one
[00:30:06] More feature.
[00:30:08] before, which is actually probably...
[00:30:11] One of...
[00:30:12] the, um...
[00:30:14] I have to put it one of the ones that I actually thought was worth highlighting on the release notes
[00:30:20] Um,
[00:30:21] Which is...
[00:30:26] keyed control flow.
[00:30:27] And some of you might be like, well, what?  Why am I thinking about keys again?  I thought you didn't need keys in Solid, right?
[00:30:37] And the answer to that question is actually...
[00:30:41] Which...
[00:30:42] a little bit more involved but the simple thing is the reason you don't need keys in solid is because
[00:30:48] use mutation to update things, so we keep static references. So you don't need keys because the actual instance of the thing is the same.
[00:30:56] But there's two different behaviors you could have with a conditional.
[00:31:01] Like
[00:31:02] See this conditional that's in front of us right here where we go show when there's a user and we have a div with a username.
[00:31:08] I think that's
[00:31:09] pretty straightforward scenario. You expect when there's no user
[00:31:13] Um,
[00:31:14] That this doesn't show but when there is a user this this shows  the the challenge here though is that
[00:31:22] and this doesn't come up too often, there's two different ways you can update this in a fine grain system.
[00:31:27] In a VDOM system, you don't care, right? You'll just re-render. When this changes, you're going to re-render the children every time anyways. You just re-render, re-render, re-render.
[00:31:37] When you have a
[00:31:39] when you have a fine grain system,
[00:31:41] You could either...
[00:31:43] re-render the children
[00:31:44] every time like a VDOM.
[00:31:47] or you can just
[00:31:49] up only update the fine grain bindings and update the specific
[00:31:53] places inside
[00:31:55] it. So when user changes, you actually only care if it goes from
[00:31:59] true to false,
[00:32:00] not if user changes because user is bound here, maybe it's bound somewhere else.  Those will independently update anyway. And by default, that's how our shell component works.  It only cares if it switches from truth to falsy and every little piece updates independently.  But there are use cases where you want to "key it", so recreate the DOM nodes
[00:32:24] when you when you when you go to the new area and
[00:32:28] like whenever the user changes. And people have asked for that, like, do you have a keyed component? Well, the truth is, Show has always done that through the form of a callback like this, where you can tell this user is just the user passed in. And whenever user changes, it just reruns this function, which means it recreates this div and reevaluates this. And
[00:32:48] Because this user is coming from here and it's not a function, it can never update independently, it's pretty clear what it does and it has one other really nice benefit to it.
[00:32:56] which is:
[00:32:57] you know here that it's resolved.  Like, because of the way this sits in, TypeScript has no way of knowing
[00:33:05] that a user here
[00:33:08] is resolved. Like,
[00:33:10] I can probably show this very easily in the playground, but this is going to complain at you because they're going to be like, I don't know if there's a user.  Because it's possible for user to be undefined.  Being inside here, TypeScript has no knowledge. But here we can actually type user and be like, look, user is defined.  So a lot of users using TypeScript are
[00:33:30] were using the callback form just so that they can save themselves from putting exclamation points in.
[00:33:38] and
[00:33:40] That works, but that's not...
[00:33:42] Great because we just talked about it. Do you actually want to?
[00:33:46] to
[00:33:46] blow out the children every time? Like, do you actually want to recreate all these DOM notes? Most of the time the answer to that is no.
[00:33:52] and
[00:33:55] While this was a really reasonable split from a normal standpoint, because again, you would only ever really want the callback in this form if
[00:34:04] you were keyed and otherwise this is just shorter and nicer why don't you do it that way
[00:34:09] TypeScript,
[00:34:10] makes us completely change what we want to do.
[00:34:12] essentially, which is a very common theme with TypeScript. There's benefits, but it sometimes likes to kind of like
[00:34:21] get in your way when you're trying to design clean APIs.
[00:34:26] and
[00:34:28] Though
[00:34:31] The way we ended up actually...
[00:34:34] Yes.
[00:34:35] Well, someone's mentioning the chat here.
[00:34:37] is yeah pass render
[00:34:41] Yeah, render props, right? Well, render props is the only way for us to type narrow here because there's no connectivity between these two things.
[00:34:52] This has been my philosophy, unfortunately.
[00:34:56] It's not...
[00:34:58] good enough at a certain point. People into TypeScript, this angers them furiously.
[00:35:04] Like my early take to API design was like, make something that is like good, like look at it,
[00:35:11] work through it and be like, this is something that is innately good, and then try and do your best with TypeScript.
[00:35:17] I was never willing to suffer
[00:35:19] TypeScript for API design. I'd never make something worse because of TypeScript.
[00:35:23] Um,
[00:35:25] Over time, I realized that the better way to do it is make the good version and then make the TypeScript version.  And that way, people who are willing to go through those hurdles,
[00:35:35] can because they get benefit from it.  Like there's no denying the benefit of TypeScript.
[00:35:39] Um, it's just like,
[00:35:42] It's
[00:35:42] There's only so much we can do.
[00:35:44] TypeScript just can't
[00:35:46] do everything, right?
[00:35:51] So like it just it is what it is, right? So
[00:35:56] Yeah, I mean, what we've done in 1.5 is add this keyed prop.
[00:36:02] and
[00:36:04] What it does is say, yes, I want this keyed.  I mean, if you think about it, this is a better API anyways.  You're explicit.  You're like, when I want this keyed, I want this keyed.  So you can now make it keyed.  And whenever user changes, it will re-render this whole thing.  Well, it's kind of wasteful.
[00:36:19] Or like...
[00:36:21] like, sometimes that's desired, but now it's explicit when you want it. And similarly,
[00:36:27] For the callback, we have this. Now, my challenge here is that
[00:36:33] Um...
[00:36:34] We don't want this change to be breaking.
[00:36:37] And there's a reason why I went this approach with Keet, and I'll explain it here, is that
[00:36:44] with a callback that passes a function
[00:36:48] instead of just the value,
[00:36:50] It is possible
[00:36:52] to have type narrowing via a render prop in the same way this is, and have it update fine-grained.
[00:36:57] It can still only run the function once, but now that you have an accessor in here, it can type eliminate the faulty values.
[00:37:05] So, you know, you can use your TypeScript, you know, what's it?  Make your cake and eat it too.
[00:37:10] and
[00:37:11] But the problem is,
[00:37:12] we think callbacks are always keyed the way Solid is right now.  So this is kind of a preemptive approach to it.
[00:37:19] Today, callbacks are always keyed.
[00:37:22] And I can't break it, right?
[00:37:25] If I tried to add this function, things would go bad unless we added other prop tricks and it's a nasty business. But what we can do today is if you go and try and use a callback because you're a TypeScript user and you think you want the type narrowing and you don't put the key property on, we can yell at you and you can be like, oh, I have to add the key property, which I'm hoping.
[00:37:44] discourages you or makes you realize that you're actually opting into something of behavior, right? Like go "Oh,
[00:37:52] By doing this, it is now keyed. I have to actually consider that.
[00:37:58] Eventually,
[00:37:59] when we can do a breaking change, we'll add the callback that's type safe.
[00:38:04] You can still, as I said, always just put a question mark or an exclamation mark here.
[00:38:09] as I said, from the perspective of, you know, it's kind of like a TypeScript purist.
[00:38:14] Here's a solution for you and
[00:38:16] It, you know...
[00:38:18] It kind of makes sense.
[00:38:22] Sorry, uh, refresher again. Just yeah, I think it's a fair question. I did explain it a minute ago  what keyed does is saying
[00:38:27] key it specifically to the value.
[00:38:29] So re-render the children whenever
[00:38:32] this value changes, which is slightly different because on the normal operation, it's whenever it changes from true to false.
[00:38:39] Keith is actually saying like, no.
[00:38:41] Going from user1 to user2 means I want to re-render this.
[00:38:46] which is it is not the most common case, but it is an important case.
[00:38:51] So...
[00:38:52] Yeah. Does anyone have any more questions?
[00:38:55] like this
[00:38:57] on this, sorry, specifically. I think I just want to show because TypeScript is always kind of there and something we always have to kind of be aware of. And honestly, everyone knows, like most people know that, like, I'm like, I usually can avoid it.
[00:39:10] The last three or four months I haven't been. I almost start every new project in TypeScript.
[00:39:16] And the reason for that is,
[00:39:20] I think it's fair to say that as an end user, as a developer using TypeScript,
[00:39:26] it's a lot nicer than being a library writer and other people have said this before but like
[00:39:32] If I start a project and the types work and I kind of do it,  and like if something doesn't work, I just go like any and move on.  Like, especially if I'm making quick demos.  So it just helps me a little bit.  And when stuff doesn't work and I'm frustrated and any doesn't work,  I can always go as unknown as any.
[00:39:46] Like, there's...
[00:39:48] it's not going to end my day. I can keep the red squiggly and move on. On the library side,  you don't get to do that. Your types have to be correct. And it's like this constant,
[00:39:58] I think I showed once that at a certain point, half our PRs are TypeScript related.
[00:40:04] That's either just suggests how bad I am at TypeScript, or just like how nuanced it is to get the right types.
[00:40:10] um so yeah i i just wanted to kind of throw that out there just from a
[00:40:16] perspective side that I am
[00:40:18] as much as it might sound like I'm kind of
[00:40:20] - Thank you.
[00:40:21] anti-TypeScript. It's more that I just don't find it
[00:40:24] enjoyable.
[00:40:25] But...
[00:40:26] There is a certain practicality of it, and it has been affecting how I've been writing Solid. As you all know, we did convert Solid to TypeScript back very early on, I think late 2018 or in 2019. So Solid's core has been written in TypeScript for two, three years now.
[00:40:43] Um...
[00:40:45] There is a...
[00:40:46] it's definitely something we consider.  It's just...
[00:40:49] I still try my best to make the best possible API.
[00:40:54] and then think of TypeScript later.  I know some people will say,  TypeScript will help you build better APIs.
[00:40:58] I call BS on that.
[00:40:59] because
[00:41:01] In some ways, you can make clear APIs, but it limits--  you're already putting a restriction on what you can think.
[00:41:07] like what you're capable of doing. You're applying these assumptions. And I don't like how that gets in the way of
[00:41:13] innovating.
[00:41:15] But,
[00:41:16] Like once you get there, you know, reconcile it and figure out what you can do with it.
[00:41:23] Okay.
[00:41:24] So yeah, there's a lot of open issues.
[00:41:29] related to JSX and stuff on TypeScript.  You can read them when stuff comes out.  I think one of the ones that
[00:41:36] really been challenging for me is the one that you
[00:41:39] return JSX is always JSX element. You can't make a div a div.
[00:41:43] Which is like...
[00:41:44] Think about how much that unlocks for us.
[00:41:48] I'm hoping one day.
[00:41:49] Right, solid containers get more popular, other solutions get more popular.  This is sort of an inevitability.
[00:41:55] But until that happens, we just have to
[00:41:58] kind of be patient okay so yeah is that it for my my little bit on type script  was there any other quality of life things oh yeah um
[00:42:06] Some small stuff, like the inn operator, like...
[00:42:10] Uh, like...
[00:42:12] Like, um, that's...
[00:42:14] Do something like this.
[00:42:16] this now
[00:42:19] can be reactive in our proxies. So, and solid now, if it sees an in operator inside like the JSX will actually
[00:42:28] recognize it as a reactive
[00:42:32] expression and wrap it properly. So again, these are just niceties that come as you use solid and you realize, hey, you know, there's new patterns you can build. I love this because when you give someone a bunch of primitives, like,
[00:42:46] they can kind of build anything on you. So, um, yeah, this, this has been really kind of fun.  And a lot, what's cool about all these quality of life improvements is almost
[00:42:55] all of them except for the key control flow one.
[00:42:58] came from
[00:43:00] uh
[00:43:01] the community making the PRs and doing the work. So big on people getting involved and helping making this release.
[00:43:10] what it is.
[00:43:13] Okay, so...
[00:43:14] Should we get into the guts of things?  How are you all doing now to chat?  This is the light topics.  I want to talk about it.
[00:43:22] I want to talk about
[00:43:23] the big topic for this release.
[00:43:26] Thank you.
[00:43:28] What do we got here? Types are great until I need to change types themselves.  Or types are great until you need to change TypeScript itself.
[00:43:36] Maybe that's a better quote.
[00:43:38] I guess that doesn't happen.
[00:43:42] for people as much as it happens for me. But the prospect of having to change TypeScript comes up like every
[00:43:48] every day or every week it feels like.
[00:43:52] A lot of just random people asking about Solid Start. I did do a stream about this. Do check it out, like SEO and SolidJS and all this stuff. Yeah, like we have SSR and stuff and I'm going to talk about SSR improvements a little bit later in the stream. But yeah, I mean,
[00:44:07] Solid is.
[00:44:09] you know,
[00:44:10] a newer framework, you know, there's probably some rough edges,  especially on some of the newer features, but generally speaking,
[00:44:16] it's a fully featured framework capable of doing anything you can do with React or
[00:44:22] viewer Svelte or any of that we might be missing some third-party libraries but like
[00:44:26] If you can do it in them, you can do it here pretty much.
[00:44:30] Coffee script for the win.  Yeah, we managed to get here without talking about coffee script.
[00:44:36] Man...
[00:44:37] It's like the opposite world.
[00:44:41] Um...
[00:44:42] But it was fun. Anyway, okay, so let's let's let's talk about the
[00:44:48] the big one here.
[00:44:51] Good luck throw a banner here.
[00:44:55] Thank you.
[00:44:59] Here you go.
[00:45:02] For reference from earlier in the stream. Let's talk about the new batch.
[00:45:06] Yeah, I definitely missed an opportunity there.
[00:45:11] Um,
[00:45:13] batching
[00:45:15] The funny thing about this topic...
[00:45:17] and the new batching, which is, as I said, the core feature here, is
[00:45:20] I'm hoping that after I do this stream and talk about batching, like we pretty much never talk about batching again.
[00:45:26] Like the part of the goal here was, um,
[00:45:30] understanding
[00:45:31] how we can...
[00:45:33] shift our thinking and to a point where maybe batching isn't something everyone has to worry about.
[00:45:39] That's really where I ended up. But I did not start here. If anyone follows me in my writing on Dev2,
[00:45:47] one of the coolest things is i tend to write about what i'm thinking about right like
[00:45:52] Um,
[00:45:53] And what's
[00:45:55] what I'm actually working on at the time.  I think there's a certain learn in public element to it  that maybe not everyone realizes,  but like when I read an article,  it's usually incredibly relevant to what I'm working on  at that time or what I'm thinking about.
[00:46:09] And this
[00:46:11] um... this topic of batching  uh...
[00:46:15] is no different. I actually wrote an article a few weeks back called "The Cost of Consistency in UI Frameworks." I've been staring at this problem
[00:46:22] for months and months and years it feels like.
[00:46:25] and I mentioned it in here,
[00:46:26] But I posted something January 2021, so a year and a half ago or something, about how every framework does this code snippet differently.
[00:46:37] and
[00:46:40] I think this is a kind of good insight into the frameworks because it reflects not just like some mechanical thing, but their philosophy and their understanding what change means in their.
[00:46:51] in the framework.
[00:46:54] and
[00:46:55] how they view the role of JavaScript and the language and all that.  Someone was asking earlier about Svelte and stuff.  And Svelte has a very different view of what...
[00:47:05] the programming languages for building UIs are and different goals for that, which is why
[00:47:13] I don't often...
[00:47:15] compare Sola to Svelte just because like they have completely different motivations.
[00:47:22] Huh.
[00:47:23] So like...
[00:47:28] - Yeah.
[00:47:31] *sniff*
[00:47:35] Sorry, I'm just catching up on chat.
[00:47:38] Oh, okay.
[00:47:41] Sorry, okay, cool.  Anyways, what I wanted to kind of point out is that
[00:47:47] Yeah, React was 0, 0, 0. And just so people who haven't seen this, though, imagine a lot of you have this situation has
[00:47:54] the three primitives, which I call the three main building blocks of modern UI, which are the state or signal,
[00:48:01] the derived state or memo
[00:48:04] And...
[00:48:05] the side effect, which we're going to read with a ref.
[00:48:08] And this example, um,
[00:48:11] like as it all frameworks have those three mechanisms,  even though they're hooks or reactive or spelt or whatever.  And,
[00:48:17] Every single one gave me a different answer when used from...
[00:48:22] from an event.
[00:48:24] And
[00:48:25] Yeah, I mean...
[00:48:27] This
[00:48:28] This isn't
[00:48:29] I've talked about this before on stream.
[00:48:31] There is something I do want to bring up in this is this is just the default behavior when you're outside of the normal flow of the reactive system.
[00:48:41] And one of the things that I pointed out as being important is that in React,
[00:48:47] 0, 0, 0, 0.
[00:48:48] Everything is consistent.  Because if this was a sum, count, or count, double, count, and double count in the view,  essentially...
[00:48:56] If they're all zero...
[00:48:58] They're all...
[00:49:00] like, correct, like, count is still double count, and the view responds. And in solid,
[00:49:04] if count is one,
[00:49:05] then double count is two, and then the view is two, like it's consistent.
[00:49:09] But in the middle two, we lose consistency.
[00:49:14] And...
[00:49:15] At one point, I was like, okay, well, clearly React and Solid are the best ways to approach this.
[00:49:20] Right. And...
[00:49:23] Sorry, that's my like...
[00:49:25] strictly better kind of
[00:49:29] faux thing, but the reality is a lot more subtle than this.
[00:49:35] - Yeah.
[00:49:36] and
[00:49:39] essentially, um,
[00:49:42] Yeah, like react we really like consistency read the article for more details on this  but what I want to point out is this example is a
[00:49:49] is sort of outside of the reactive system.
[00:49:54] the handling here
[00:49:56] While interesting...
[00:49:58] things aren't actually as different when you get into the internals.
[00:50:03] At a certain point when you're inside a framework,
[00:50:07] you're going to have to decide, you're going to have to update things and code runs top to bottom.  Like, you know, I mean, like code runs like in a sequence. At some point, things are going to be inconsistent.
[00:50:16] outside of the system
[00:50:18] Should you be able to observe that inconsistency?
[00:50:20] was the question here that's all i was asking but more interestingly internally
[00:50:25] Obviously, if you update some state,
[00:50:28] and then some drive state up before that drive state updates it's going to be out of sync  and before those effects run well that's going to be able to sync this is just a natural evolution
[00:50:37] Um...
[00:50:39] of
[00:50:40] Like...
[00:50:40] like, or so not evolution, it's just a natural flow of things updating. So,
[00:50:46] The only guarantees we can
[00:50:47] keep our things outside of the system.
[00:50:50] and i want to make it clear solid's new batching behavior right off the bat does not change this  nothing in this table actually changes for solid's new batching behavior but  the reason i wanted to talk about this is because of the non-default case
[00:51:01] Like,
[00:51:02] What?
[00:51:02] If...
[00:51:03] I had more than count I updated, and I wanted to update
[00:51:07] like
[00:51:08] count one and count two
[00:51:11] I might not want to run
[00:51:14] Everything.
[00:51:15] Twice like the way I do in solid and
[00:51:18] It's not bad in solid because solid, as many of you know, does find great updates.  So if one cell has count one in it and one cell has count two in it,
[00:51:27] And you go count one, count two.
[00:51:30] Like, there's no overhead.
[00:51:31] Like,
[00:51:32] You can.
[00:51:33] But if...
[00:51:35] somewhere those converge.
[00:51:37] than
[00:51:38] In this situation, there's intermediate results, right?
[00:51:43] count one is one while count two is still zero and so on.  So there are situations where you want to group
[00:51:50] changes together. And the truth of the matter is
[00:51:52] inside the reactive system, we already do that. The only reason that solid has this behavior  is because it runs synchronously. And because it runs synchronously, there's no
[00:52:04] opportunity, except maybe intercepting the click handler to
[00:52:08] insert the batching ability. Whereas in some frameworks that run on microtask cues,
[00:52:15] they can batch
[00:52:17] automatically because the first place you call count they're like okay look we're not going to run anything
[00:52:21] to later, so we're just going to queue it up.  And then you can call 10 different things,  and then later we'll do it.  But because it's all synchronous,
[00:52:27] you need to kind of manually wrap it, which is the batch function, which is where this whole conversation stemmed from.
[00:52:33] Thank you.
[00:52:34] Now...
[00:52:37] If that makes sense.
[00:52:39] This whole conversation is not about
[00:52:43] generally is not about how things work inside the reactive system.  It's about how things like event handlers or timeouts or async
[00:52:50] calls work.
[00:52:52] And that would have been the case, except for solid did one
[00:52:56] kind of funny thing which is a thing that broke things is it batched all side effects
[00:53:02] Um...
[00:53:04] which meant that essentially...
[00:53:08] or
[00:53:09] Actually, I should actually explain this a little bit.
[00:53:12] before
[00:53:14] Solid 1.5.
[00:53:16] Even though solid worked like this most of the time,
[00:53:20] when you entered a batch, it actually worked like React.
[00:53:23] I very much cared about this consistency.
[00:53:27] thing.
[00:53:29] Okay? Like, and I can show you what I mean in a playground.  It's probably the easiest way to actually do this.
[00:53:37] So if I had two signals
[00:53:42] And I'm going to go back to...
[00:53:44] 1.4 here
[00:53:46] Sorry.
[00:53:46] deleted the whole thing.
[00:53:48] Go back to 1.4.
[00:53:50] And
[00:53:51] Okay, well, there we go. Let's...
[00:53:53] Let's create two signals.
[00:53:56] and just gonna show you what I'm talking about. I'm gonna count one
[00:54:00] and count two
[00:54:02] we're not going to worry about
[00:54:03] returning anything for the moment.
[00:54:06] Let's then count.
[00:54:07] One.
[00:54:08] Count two.
[00:54:10] Yeah.
[00:54:11] And let's...
[00:54:13] create an effect
[00:54:16] - Thank you.
[00:54:18] And...
[00:54:19] in our effect.
[00:54:21] Um
[00:54:25] I'm trying to think of the best way I want to show this
[00:54:28] In effect,
[00:54:32] Thank you.
[00:54:33] I'm gonna actually have to create a couple effects to show you what I'm talking about. We're gonna listen to count one.
[00:54:38] And we're going to listen to count two.
[00:54:48] and I'm going to console.log
[00:54:50] - It's the only way to it. - R effect. Okay. Sorry, I probably should have set this example up before I even started here, but...
[00:54:56] Let's just...
[00:54:57] Let's just do it.
[00:54:58] Right.
[00:55:00] and
[00:55:01] Thank you.
[00:55:02] I'm going to also
[00:55:03] do this
[00:55:05] a little bit funny in that I'm going to
[00:55:07] I'm going to just use a timeout.
[00:55:09] to start our
[00:55:11] things because I want to show batching outside of the system, okay?
[00:55:16] so
[00:55:18] Thank you.
[00:55:19] We're going to
[00:55:21] Set count
[00:55:23] to...
[00:55:25] Actually, we'll give it a nice pause of like a second.
[00:55:28] and we're going to set count 1 to 1
[00:55:32] And...
[00:55:33] for kids.
[00:55:35] Actually, let's just...
[00:55:37] listen to them both in the console log so we can
[00:55:40] see what happens.
[00:55:48] Okay.
[00:55:49] Beautiful, okay.
[00:55:50] So originally we were 0, 0,
[00:55:53] And then
[00:55:54] when we set count one,
[00:55:57] this. Hopefully...
[00:55:58] you all can see this maybe i can make it a little bigger
[00:56:02] Um...
[00:56:03] but essentially
[00:56:06] In our timeout, we set count to one. It updates the first count.
[00:56:11] And
[00:56:12] it runs the effect a second time.
[00:56:18] and if
[00:56:19] I do it
[00:56:21] Set count two.
[00:56:23] you're going to be like, "Oh, wow, you actually ran this effect three times. Once initially,
[00:56:28] And then
[00:56:29] on each update. And this is where the desire for batching comes in.
[00:56:33] because
[00:56:34] if
[00:56:36] This was just...
[00:56:37] somewhere else in the reactive system,
[00:56:40] Like, I'm...
[00:56:41] I'm going to pull this other one in here. Let's call it "CreateComputed".  If I just made this "CreateComputed",
[00:56:48] Um...
[00:56:49] Though I guess CritComputed
[00:56:51] It's
[00:56:52] Well, let's see what happens. This is a little bit...
[00:56:55] Yeah, that's too quick.
[00:56:58] Yeah, okay.
[00:57:00] So this is one of the challenges here, because once you're in the reactive system, everything's batched and it's optimized.  So it's hard to show the...
[00:57:06] Okay, so, but my point is, at a certain point, you're like, okay, well, I don't want these to update separately, so you create a batch, okay?  Okay.
[00:57:15] And now when you create your batch,
[00:57:20] Thank you.
[00:57:23] Create batch.
[00:57:25] I'm sorry, what do I call Crate Batch? It's Batch.
[00:57:28] when you batch it.
[00:57:29] you'll see that it now applies both these changes at the same time, right? That's
[00:57:34] That's the...
[00:57:36] That's like the basic...
[00:57:40] the basic scenario here, right? It applies them both at the same time. But what I wanted to show out is,
[00:57:45] if
[00:57:47] We read Count...
[00:57:48] here.
[00:57:52] Actually, you know, I can just pull it all the way to the bottom.
[00:57:56] If we go...
[00:57:57] console.log
[00:57:59] count
[00:58:02] One.
[00:58:03] and count
[00:58:05] Two.
[00:58:06] And we kind of
[00:58:08] do something like this
[00:58:11] Let's call this
[00:58:12] Time out.
[00:58:16] It's all right.
[00:58:17] There's a map. What you're going to see...
[00:58:19] is
[00:58:21] the effect runs, then timeout runs, and the values still haven't updated yet,
[00:58:26] And then
[00:58:27] and then the effect runs with the values.
[00:58:30] at
[00:58:30] If I pull this...
[00:58:32] Actually, let's call this batch.
[00:58:36] If I pull this...
[00:58:37] outside of the batch, like after...
[00:58:40] here
[00:58:41] and call this
[00:58:42] Time out.
[00:58:44] What you're going to see...
[00:58:46] is
[00:58:47] Effect runs
[00:58:48] then batch runs with the old value,
[00:58:51] And then at the end of the batch, the effect runs and you have the value.  And finally, the timeout console log runs with the value.  So it runs synchronously, like at the end of this batch line, everything is updated.  But inside the batch,
[00:59:03] the values haven't applied.
[00:59:05] And
[00:59:07] This is essentially why...
[00:59:11] batching is a thing and
[00:59:14] What Solid did was it auto-batched effects so it pushed all the
[00:59:18] basically held the values of the signals
[00:59:22] um, till
[00:59:23] all the effects had run.
[00:59:25] And this is good in a sense because you really shouldn't be writing signals and effects too often.
[00:59:32] But
[00:59:33] Um...
[00:59:34] It was kind of...
[00:59:35] awkward
[00:59:38] Okay.
[00:59:38] when
[00:59:40] You
[00:59:41] Did.
[00:59:42] And the problem is with immutable data, it's usually easy to represent
[00:59:48] Um...
[00:59:49] stuff as
[00:59:50] separate independent changes, like these counts are separate.
[00:59:54] But with mutable data,
[00:59:56] I'm getting kind of full circle here. We actually hit
[00:59:59] really weird
[01:00:00] problem.
[01:00:00] Um,
[01:00:01] so
[01:00:03] This is what I wanted to kind of show here and which I had there.
[01:00:07] This takes a minute to kind of wrap your head around, but pretend you had an immutable array.
[01:00:14] So
[01:00:15] Thank you.
[01:00:17] And actually, if anyone have questions so far, I realize this is
[01:00:20] a lot. Um...
[01:00:28] Let's see
[01:00:42] Okay, yeah, yeah. So these guys are going back and forth about reactivity. As I said, we started the discussion on reactivity for solid 2.0, and there's a debate right now about the best way to model some stuff.  We're going to get there, actually, a little bit later in this explanation, but what I wanted to kind of show here...
[01:01:04] with this example.
[01:01:06] um...
[01:01:08] is that
[01:01:09] Um...
[01:01:10] Sorry, and it's this example I want to show here is that if you have something that's like an array that's immutable picture you have already that's ABC and
[01:01:18] you want to perform two operations on the array.
[01:01:21] you want to
[01:01:22] Remove the item at the first index.
[01:01:26] Like, um...
[01:01:28] Maybe remove...
[01:01:29] item
[01:01:30] What is here?
[01:01:31] Maybe remove item B or something.
[01:01:34] and then you want to take that removed item and put it at the beginning of the list
[01:01:39] you have to do two operations, right?  If this was immutable, you would just return the new cloned object, right?  You would, like...
[01:01:46] uh,
[01:01:47] like
[01:01:48] If we hadn't...
[01:01:49] let me just find some space down here if you had an ABC right
[01:01:55] Okay.
[01:01:55] const
[01:01:56] list and you went like
[01:01:59] a...
[01:02:00] B.
[01:02:02] C.
[01:02:03] If you wanted to like
[01:02:05] grab
[01:02:07] Like...
[01:02:08] if you want to do this move operation with the mutable thing, you'd be like, okay, well, actually, um,
[01:02:14] I'm going to... I mean, this is kind of messy, but you could basically go
[01:02:20] Take
[01:02:21] List...
[01:02:22] one
[01:02:23] put it there
[01:02:25] And then...
[01:02:27] Take the
[01:02:29] I'm trying to think of how I...
[01:02:33] Yeah, I mean...
[01:02:33] You you kind of give I mean the proper way would actually involve like a bunch of slicing and stuff  I don't feel like doing that right now, but like you could picture you could just I
[01:02:41] You could just rearrange the order
[01:02:44] of the list.
[01:02:46] And then if I console
[01:02:48] dot log
[01:02:50] new list and new list.
[01:02:53] You're going to...
[01:02:55] You're going to see
[01:02:57] Maybe I should...
[01:02:58] turn off our time mode and stuff for a second, you're going to see
[01:03:01] Um...
[01:03:02] Thank you.
[01:03:03] like what you expect because you're always setting a new list.  But when you do mutation,
[01:03:09] on a list.
[01:03:10] Um.
[01:03:11] Like...
[01:03:13] It takes steps.
[01:03:15] You're going to
[01:03:16] splice out the piece that's missing
[01:03:19] And then...
[01:03:20] you know,
[01:03:22] Inserted in and it could be a pusher and unshift or something, but I just I just took this example  But if I if I take this here and
[01:03:29] and do this with...
[01:03:31] do this with a mutable...
[01:03:35] uh
[01:03:36] list so let's go
[01:03:38] uh...
[01:03:41] Beautiful.
[01:03:43] equals...
[01:03:45] ABC.
[01:03:54] Then we get the move.
[01:03:55] And then...
[01:03:57] Mutable splice.
[01:03:59] You notice we never...
[01:04:01] sign we never make a new list in this example
[01:04:04] because we actually mutate the original list
[01:04:08] What you're...
[01:04:09] Like...
[01:04:12] Thank you.
[01:04:14] - Thank you.
[01:04:14] Like...
[01:04:15] you can see that you get the right output, right?
[01:04:21] And this is a common pattern, like common thing.  When you have immutable data, you express,  you're kind of pushed to expressing all the changes  as a single operation.  It's kind of also why maybe batching isn't as important  'cause you'll tend to represent things as a single change.
[01:04:35] Okay. Now,
[01:04:37] But with mutable data, you're like constantly like it's sequences.
[01:04:41] because you're changing this and moving this. The order of the operations matter if you
[01:04:45] If you add something,
[01:04:47] It can...
[01:04:48] change future moves.
[01:04:51] and
[01:04:52] This is really awkward if you're in a batch, like our crit effect was, because what would happen, and this is the bug that showed up right away, someone did this example with this,
[01:05:03] thing that's designed to be mutable is it would
[01:05:06] grabbed, it would splice out, so it would go, "Okay,
[01:05:09] I'm going to queue up
[01:05:11] removing the item and but it actually grabbed the item and then when it went to do the second change is like okay well I still haven't applied the first change and I'm so I'm not going to apply the first change I'm just going to take that item and
[01:05:22] and put it at the beginning. So what we end up with
[01:05:25] is...
[01:05:27] B, A, B, C. Essentially, the first remove operation never happens because we kept the value in the past, right? And if that's not clear why that happens...
[01:05:37] Let me show you
[01:05:40] subtly different, but it's the same idea. If I bring back our example here, and instead of setting count two,
[01:05:47] I set count one twice.
[01:05:50] to
[01:05:52] In our batch?
[01:05:53] Um.
[01:05:56] What ends up happening is you don't see the effect of count one.  It's as if setting count one to one never happened  because it only needs to apply the last change if you keep things in the baths.
[01:06:09] Every...
[01:06:10] every subsequent change just overrides the previous change. That's how
[01:06:16] react and keeping things in the past works.
[01:06:18] So, like, it's innately broken for things that are sequences.
[01:06:24] So like, as I said, I was very proud of the fact that I like,
[01:06:27] fixed concurrency and all this stuff. Um,  and I basically had alienated these kind of create mutable things.  I said, I never used create mutable, so I never really,
[01:06:36] thought about it, unfortunately. But this is
[01:06:39] This is...
[01:06:41] kind of the problem.  And I think...
[01:06:45] it goes further than this because
[01:06:48] As a person using these APIs, if I go back to this example,
[01:06:54] It's fine because I called out this batch.  You get it.
[01:06:57] The default behavior is nice. But what I was trying to get at is
[01:07:02] If this instead...
[01:07:04] was
[01:07:06] In-- let's--
[01:07:08] like put it in an effect or something.
[01:07:10] Okay, so let's get rid of the batch.
[01:07:13] Um...
[01:07:15] And now this timeout has no meaning.  And this was just in a second create effect, okay?
[01:07:21] Right?
[01:07:22] If I did this,
[01:07:25] Thank you.
[01:07:26] solid 1.4 auto-batched effects, which meant that
[01:07:30] Sorry, I need to...
[01:07:34] that this in...
[01:07:36] that this in the past behavior here
[01:07:39] you were opted into without actually calling back yourself.
[01:07:44] It's a good default.
[01:07:45] It makes a lot of sense.
[01:07:48] people
[01:07:48] Like, we're not ready for this.
[01:07:51] Because they're just writing some code somewhere, gets called in effect, doing some reactive stuff.  And it wasn't, they're like, why is this?
[01:07:58] the old value, didn't I update the value?
[01:08:00] Um,
[01:08:01] I see this really good because it's consistent.
[01:08:04] If we added...
[01:08:06] double count,
[01:08:08] in here
[01:08:10] Um...
[01:08:12] Yeah.
[01:08:15] No.
[01:08:19] Count.
[01:08:20] one
[01:08:22] times 2
[01:08:23] Let's get a memo in here.
[01:08:25] Create memo.
[01:08:27] If we added...
[01:08:29] double count in our thing here,
[01:08:32] Um...
[01:08:36] Mm-mm-mm.
[01:08:39] what we're going to see is double count is still in the past.
[01:08:42] Right?
[01:08:43] Um,
[01:08:45] Our effect runs, zero, zero, zero.
[01:08:48] Yeah.
[01:08:49] so
[01:08:51] this is kind of
[01:08:54] Um...
[01:08:55] consistent but kind of counterintuitive for a lot of people.
[01:08:59] and it doesn't work with mutable data, period.
[01:09:03] And I started having to ask myself,
[01:09:06] Like...
[01:09:07] How much does this actually matter?
[01:09:15] Like, this is really, it's very dissettling to go between something that, like,
[01:09:20] updates automatically and then suddenly something that doesn't update. This inconsistent instance bugged me.
[01:09:27] But...
[01:09:28] Like I could argue that it was consistent.
[01:09:32] And...
[01:09:33] The thing is,
[01:09:35] With a reactive system,
[01:09:38] we actually even without this hold the signal right
[01:09:41] We already have batching built in.
[01:09:47] and
[01:09:48] This is kind of the funniest thing about this.
[01:09:52] Because...
[01:09:55] You...
[01:09:56] The truth of the matter is
[01:09:58] You don't...
[01:09:59] In this situation here, I mean, this is not very deep, but you don't necessarily want
[01:10:05] set count to update immediately before this next line. Like you do want
[01:10:10] these batches to happen naturally.
[01:10:14] You just don't want to see the old value, right? You like innately you're like, yeah, I don't I don't I
[01:10:19] I want these both to apply at the same time. Because sometimes you can get some weird infinite loops where you trigger something for set count one and it like...
[01:10:28] changes the conditions of
[01:10:31] what this effect is running on. It might even cue this effect to run again
[01:10:35] before it's even gone to the next line. That would be bad. We do actually not want things to always propagate immediately because you get really weird plays. You want your code while it's executing top to bottom to be consistent.
[01:10:47] Um...
[01:10:48] And for that reason,
[01:10:51] Um,
[01:10:52] at a certain point
[01:10:54] I kind of gave in and I realized that we didn't need to keep things in the past.
[01:11:00] really for any particular reason
[01:11:04] And
[01:11:05] While I don't care about CreateMutable, I don't think people should be using it.
[01:11:09] for the most part.
[01:11:11] There's no reason for it.
[01:11:13] to break. And honestly, sometimes when you're doing stuff,
[01:11:16] you do think in sequences. So let people
[01:11:20] operate in sequences.
[01:11:22] The funniest thing, and I'm going to explain how...
[01:11:25] This works in solid in a second here.  But if I go back to the code to actually implement this,
[01:11:32] Um...
[01:11:34] where was it? Simplify Batching
[01:11:37] Where's the original one?
[01:11:39] Sorry, give me two seconds here.
[01:11:41] Um...
[01:11:42] It's right at the beginning here.
[01:11:44] I actually do this as two  versions because when I first
[01:11:50] tried new batching, I was like, oh, I should...
[01:11:53] Maybe we should do things like Svelte does, like make it inconsistent so that the initial values update
[01:11:58] But
[01:11:59] Um...
[01:12:01] but everything stays in the past. But what I want to show you and really highlight, which is kind of funny about this PR,
[01:12:07] is
[01:12:08] or sorry, this commit,
[01:12:10] Sorry, I'm in the test file. Where's the signal file? Yeah.
[01:12:15] All this PR does is delete things out of solid.
[01:12:19] for the most part. I mean, these lines change, but if you actually look, the replace line is simpler than what it left before. We actually, I just went in and deleted the batching stuff. Solid's underlying system actually
[01:12:31] already
[01:12:32] Choo!
[01:12:34] To basically get the behavior everyone wanted already, I just needed to delete stuff. I just make solid smaller.
[01:12:42] for the most part. And the funny thing is this first PR got us to Svelte level
[01:12:48] And
[01:12:49] or not PR, this first commit
[01:12:52] And then our next commit, which happened a little bit further down here,
[01:12:56] Um...
[01:12:59] I saw it a minute ago.
[01:13:02] something about batching
[01:13:03] Probably should have...
[01:13:05] To do to do to do to do
[01:13:08] Um...
[01:13:15] Continue to delete more stuff is what I was trying to show basically
[01:13:19] all we had to do
[01:13:20] to get what we were looking for.
[01:13:22] was actually delete a bunch of stuff out of solid.
[01:13:26] Actually, like, make it smaller.
[01:13:28] And,
[01:13:31] Yeah. And let me show you...
[01:13:38] what the key difference is here because we were holding the values we had to make a construct to hold the values
[01:13:44] And
[01:13:47] it isn't really necessary
[01:13:49] because
[01:13:50] of a couple things. So I'm going to--
[01:13:53] pretend to share this link.
[01:13:55] which should hopefully I'm gonna save this just in case it doesn't allow me to
[01:14:02] change this to 1.51.
[01:14:04] and show you what happens now.
[01:14:07] Thank you.
[01:14:09] Thank you.
[01:14:10] Mm-hmm.
[01:14:15] Basically...
[01:14:18] The batch now is observing...
[01:14:20] the latest values.
[01:14:23] And we basically just went straight to where we needed to be.
[01:14:28] And...
[01:14:30] Thank you.
[01:14:31] It's not just create effect, it's actually the batching in general.  There's some subtlety here, but I want to show you something that's important.  The reason that we can do this
[01:14:40] And React doesn't do this.
[01:14:41] is because we use getters.
[01:14:43] Because we use getters,
[01:14:46] you don't have to worry about
[01:14:49] Two.
[01:14:51] Like this not being updated.
[01:14:53] we can both
[01:14:55] apply
[01:14:56] the change at the end,
[01:14:58] And...
[01:15:00] Eagerly evaluate any drive data.
[01:15:03] without it being inconsistent.
[01:15:06] This is... this is... this is... this is Vue.
[01:15:09] But it was also always solid.  It was just solid...
[01:15:13] How solid worked.
[01:15:15] outside a batching but inside the reactive system. I realized we just had multiple  batching systems so I just deleted one of them.
[01:15:22] That was the revelation here.
[01:15:25] right because solid already
[01:15:28] has this
[01:15:30] this ability to evaluate. And let me put batch, let's go back to our set timeout so I can
[01:15:37] show you this a little bit
[01:15:39] because I think the set time out better is more visual.
[01:15:42] I just want to show that in effect this works fine but
[01:15:46] If we bring back our batch...
[01:15:52] Right.
[01:15:55] First of all, there's no need to put...
[01:15:58] This.
[01:15:59] Here.
[01:16:01] Because...
[01:16:02] It's already updated.
[01:16:07] But I will anyways.
[01:16:10] -
[01:16:12] Thank you.
[01:16:15] But...
[01:16:16] The reason I want to illustrate this more in steps is...
[01:16:20] This is actually
[01:16:22] You know what? I'm going to show you.
[01:16:24] This is how we're going to do it. We're going to console log
[01:16:26] in the memo.
[01:16:29] It's a little trick
[01:16:31] We're going to console log inside the memo to show you what I'm doing.  Again, you shouldn't do side effects in a memo, but...
[01:16:38] let's console log inside the memo. So,
[01:16:42] Look what happens?
[01:16:44] in our system here.
[01:16:47] remove this one so that I have less noise.
[01:16:52] What you see happen is the memo runs the first time,
[01:16:55] and the effect runs,
[01:16:57] And then when we do the timeout,
[01:16:59] - Thank you.
[01:17:00] Again, the memo runs.
[01:17:03] And then the effect...
[01:17:04] the
[01:17:06] the effect runs.
[01:17:11] This, you might be like, okay, no big deal.  But look what happens if I remove...
[01:17:16] double count from here.
[01:17:22] This is important.
[01:17:23] Because...
[01:17:24] It goes memo effect
[01:17:27] batch or memo effect originally, and then we do our timeout, and then our batch goes, batch memo effect.
[01:17:34] If you notice, me moving the double count in, and I'll put it back in again for a second,
[01:17:39] actually moved
[01:17:41] where the memo happened. When I put it inside, it actually
[01:17:45] Ran...
[01:17:47] before
[01:17:48] the batch command, and when I deleted it, it ran after.
[01:17:52] And the reason it runs before the batch command is it's literally running right here in line when we're asking for it.
[01:18:00] So you can't console log until this has already ran, right?
[01:18:04] but
[01:18:06] When I get rid of it,
[01:18:08] It runs...
[01:18:10] at the
[01:18:11] end of the batch like everything else.
[01:18:13] Um,
[01:18:15] So it runs basically just before the effects run.
[01:18:19] So...
[01:18:20] What...
[01:18:22] Basically, the reason this whole mechanism works is we can defer executing everything in a batch
[01:18:28] Unless you ask for it.
[01:18:30] which means we can always show you the latest value if you ask for it.
[01:18:35] Because we have this push-pull ability and I can explain a bit better what that means. But essentially
[01:18:42] It will run eventually anyways, but this way,
[01:18:46] If you choose to opt into reading stuff ahead of time, we can preemptively calculate it for you in the case of things like memos because
[01:18:53] memos
[01:18:55] are derived so we know the second you set this signal even if we haven't propagated the change
[01:19:00] we know that
[01:19:02] that this memo is out of date and that the next time you read it, you're going to have to recalculate it.
[01:19:09] Right?
[01:19:09] So this is why we didn't have to be too hardcore on this.  Even with stuff like transitions, suspense, and concurrent rendering,
[01:19:17] I don't, because we already fork
[01:19:20] and this is more technical, fork the reactive graph
[01:19:22] It's okay to be like this because
[01:19:25] those eager values aren't going to, they're already forked. They're not going to merge with the existing graph. So,
[01:19:34] Like, essentially,
[01:19:35] Um,
[01:19:37] We can do this eager thing.
[01:19:40] and
[01:19:40] To be fair,
[01:19:42] There are cracks in this, in that...
[01:19:44] If you go back to my original article that I was showing here, the cost of consistency,
[01:19:49] you're going to see view
[01:19:51] when you're inside the effect, like while the reactive system's running, because like while you're in that batch,
[01:19:56] one runs, you're asking for two, so it calculates, but until the end of the batch, we can't possibly
[01:20:05] apply the DOM effect.
[01:20:09] So when you're in a batch, it looks like this.
[01:20:11] And when you're outside of a batch, it looks like this.
[01:20:16] But the funny thing is, in reality,
[01:20:20] inside a batch
[01:20:21] If you don't ask for it,
[01:20:23] It's actually like this. It does the least amount of work up front.
[01:20:30] and
[01:20:31] This has huge impact. As I said, most of the work here was deleting code, but the bigger thing here is
[01:20:39] people were batching before to try and
[01:20:43] do things like, okay, I want to apply these together and do...
[01:20:47] The only place you need the batch is in that set timeout or callback, whatever.  Like, essentially...
[01:20:51] you can now pretty much forget
[01:20:53] that batching is a thing for the most part, because in the simple case like the create effect I showed you before,
[01:20:59] you know, you'll just do stuff and then if you read double count, well, it'll be up to date. You don't have to worry.
[01:21:06] about this yeah so someone's asking bi-directional reactivity yeah it's called push-pull  um is is kind of like technical thing and i didn't again did not invent this this is how mobx works um
[01:21:20] and it's actually quite clever because
[01:21:28] Because what push-pull
[01:21:31] It does. And I'm gonna open Excalibur here. It's probably got some garbage on here. I don't even remember what this was. You guys remember this stream? I don't know.
[01:21:39] Um...
[01:21:41] looks like some out of order streaming thing.
[01:21:44] The whole thing with push-pull is that
[01:21:50] I'm not.
[01:21:50] Thank you.
[01:21:52] We...
[01:21:54] We mark...
[01:21:56] the reactive graph.
[01:21:58] before we actually apply the changes.
[01:22:01] so
[01:22:02] Like...
[01:22:04] I'm gonna go left or right because it's easier, but I'm just gonna pretend like we have some kind of graph here and
[01:22:11] And we're going to...
[01:22:14] kind of branch out. I always like doing branches, but we'll probably only
[01:22:18] follow one branch out.
[01:22:20] Um...
[01:22:23] I'm just going to
[01:22:24] show some kind of propagation. You can think of the start of the propagation
[01:22:28] as...
[01:22:31] as a signal,  right?  Like,
[01:22:33] the thing that sort of
[01:22:35] un unwritten here is and again these don't have the perfect lines but
[01:22:40] Essentially...
[01:22:41] more often than not,
[01:22:43] You've got like...
[01:22:46] these kind of
[01:22:47] Three...
[01:22:49] zones and this is this I'm stealing this straight from MobX if you go find him Mikkel Westrate article you're gonna see this like a
[01:22:57] immediately on any of this, right? Because he'll be like because this will be like signal
[01:23:04] And then this will be...
[01:23:05] memo
[01:23:07] And this will be, let's say, effect.
[01:23:10] It doesn't have to be, but this is essentially--
[01:23:14] like a representation of our reactive graph.
[01:23:18] And...
[01:23:20] -
[01:23:21] Like, to be fair, this probably...
[01:23:24] It's kind of like like something like this and
[01:23:29] All we need to do, essentially,
[01:23:32] is...
[01:23:34] is kind of moved when someone updates this goes like, hey, this thing's updated.
[01:23:40] We just...
[01:23:41] kind of move through the graph and I guess maybe color selection is the best way to handle this but  I'm going to be doing a lot of copy and pasting I guess to kind of work our way through it we  have a video so we can we can do this kind of live um
[01:23:53] I don't need to produce artifacts.  But essentially, someone goes in and goes, okay...
[01:23:58] Bam.
[01:23:59] We update this.
[01:24:00] Right?
[01:24:01] Next I'm gonna use orange. Okay. Can everyone see that? Maybe I should make the lines a little thicker.
[01:24:06] Um...
[01:24:12] Okay.  And someone's updated the signal.
[01:24:15] At the second that the signal updates,
[01:24:19] We know
[01:24:21] that
[01:24:22] this
[01:24:23] memo needs to reevaluate. We know for sure
[01:24:26] This thing is dirty.
[01:24:27] So let's do that.
[01:24:30] And this one too.
[01:24:31] Because this is definitely updated. This is now dirty.
[01:24:35] Okay.
[01:24:36] So
[01:24:37] But these ones?
[01:24:39] We don't know because the memo could evaluate to the same value.
[01:24:42] So...
[01:24:44] For these ones, suddenly,
[01:24:46] Let's make them kind of like a greenish color, okay?
[01:24:53] And do this, okay?
[01:24:56] and
[01:25:08] Thank you.
[01:25:09] Oh man, you're gonna get me into an argument on stream aren't you?
[01:25:12] strongly disagree with this, but we'll get back there.
[01:25:15] Um, okay.
[01:25:17] I
[01:25:19] Uh...
[01:25:19] the...
[01:25:20] essentially
[01:25:24] with this kind of propagation we mark the whole tree and that what's what's  important about this is even if we do something like go depth first in our  decision I don't know if I should actually
[01:25:36] use effects here as an example.  I wanted to show that there's layers, but the truth of the matter, this only gets interesting
[01:25:45] if I do this, actually, and make the memo layer a little bit
[01:25:50] more complicated and maybe put an effect out here that
[01:25:54] listens to these.
[01:25:57] Because...
[01:25:58] Actually,
[01:25:59] I'm gonna take a prop from Milo who made these boxes
[01:26:03] Um...
[01:26:05] - Thank you.
[01:26:07] What I wanted to point out here is
[01:26:10] At this point,
[01:26:14] And actually this box can be green.
[01:26:17] We.
[01:26:18] Don't know if these actually need to update.
[01:26:22] Okay.
[01:26:22] But we know that these ones definitely do and
[01:26:26] If we take something like a
[01:26:29] like a depth-first algorithm.
[01:26:32] And I mean, you can pick which side we traverse first.
[01:26:36] Um,
[01:26:38] we can actually
[01:26:40] like the signal itself gets updated it's fine but then we can like run
[01:26:45] this one first and it goes, "Okay, I need to rerun."  And on it updating, realizing that it gets a new value,
[01:26:52] Let's say if the signal went from 0 to 1, like our example,
[01:26:56] It goes, hey, buddy, you...
[01:26:59] Need...
[01:27:00] to update.
[01:27:03] *sniff*
[01:27:04] Right. And
[01:27:05] And...
[01:27:07] We're going deft first here.
[01:27:11] When we get to this guy here,
[01:27:15] he's gonna be like, okay, well, I need to update.
[01:27:19] But when he runs, and you can picture this like,
[01:27:22] This grid, if you need a visualization of what's going on here, picture this as...
[01:27:28] some signal S
[01:27:29] And I'm gonna make this block.
[01:27:31] And then...
[01:27:33] These are...
[01:27:35] memos
[01:27:37] a...
[01:27:41] B.
[01:27:45] I'm doing it upside down for most people probably.  But what I wanted to show is like something that looked like this would essentially have
[01:27:56] have...
[01:27:57] essentially
[01:28:01] be
[01:28:02] Or A equals...
[01:28:05] some function of S. I know I'm getting into math terminology here, but then
[01:28:10] C
[01:28:13] see here
[01:28:14] is actually
[01:28:16] some function of
[01:28:17] A and B.
[01:28:19] So a lot of times when I do these, I just
[01:28:22] skip the function of and just go like it's a plus b right
[01:28:26] and
[01:28:27] And this is just
[01:28:30] derived from s. Okay now what I'm getting at is
[01:28:34] If you have c equals a plus b,
[01:28:37] and A is updated because we went down this track.
[01:28:40] It's in black, so...
[01:28:42] This is now one
[01:28:45] This is now one.
[01:28:50] But B is not one yet. It's still orange.
[01:28:54] So it's still zero.
[01:28:56] When you get to see
[01:28:59] If you're not smart about this, you're going to go C equals A plus B, and you're going to end up with one, which is not...
[01:29:06] the right reality you want to be in.
[01:29:09] What you want is you want to go, oh.  So what we actually do in a system like Solid is when we go...
[01:29:16] In this case, we know we have to run C,  so we're gonna go run it.  But when we get to A, we're like, okay, yeah, no problem.  A, get the value.
[01:29:25] get that one, and then when we get to B, we're gonna like, oh B, you're out of date, you better run.
[01:29:32] So while we're in the middle of C here, like I showed earlier with the double count, that's the same kind of pull mechanism, we essentially go, OK, let's evaluate this right now.  So we solve it.
[01:29:42] We make that.
[01:29:44] now is 1.
[01:29:46] And then C is like, okay, good.  Now you're up to date.
[01:29:49] I'm going to
[01:29:51] I'm going to get my proper thing of two.
[01:29:53] sorry when b updated it also set this one to
[01:29:56] to orange as well.
[01:29:59] But you
[01:30:00] You can kind of see how this propagation
[01:30:01] Works.
[01:30:04] Thank you.
[01:30:04] Right.
[01:30:06] And...
[01:30:08] I mean, it gets...
[01:30:09] it can be a little bit more complicated than this because sometimes the like
[01:30:15] Sometimes...
[01:30:17] this arrow isn't so direct.  Sometimes this arrow isn't here.
[01:30:21] And...
[01:30:24] sometimes
[01:30:28] There's some other convergence. Basically, there's all variety of diamonds.
[01:30:33] You can make...
[01:30:34] when you're playing with this.
[01:30:37] Right.
[01:30:37] But once you have a degree of separation,  you can see how this gets a little bit more complicated.  We're going to do one more example.
[01:30:47] here
[01:30:48] So I'm resetting the board so you can get it.  But I'm hoping after this example,
[01:30:53] Solids reactivity will make a little bit more sense
[01:30:56] and
[01:30:58] we can...
[01:30:59] we can kind of move on from this whole batching thing, right?
[01:31:02] But...
[01:31:03] All right.
[01:31:05] Let's get all the way back to the beginning.
[01:31:07] These are all black.
[01:31:11] These are all black.
[01:31:12] Okay.
[01:31:13] and, um...
[01:31:15] I'm just going to
[01:31:17] put another little circle in here. Let's add E to our equation.
[01:31:22] All right.
[01:31:23] You all still with me?
[01:31:27] Someone's asking if this change affects any benchmarks. No, that's what I'm saying, please.
[01:31:32] All the stuff only...
[01:31:35] affected things kind of like
[01:31:37] outside the reactive system. Like if you're writing signals from effects, which never happened in any benchmark, or if you're like,
[01:31:45] writing stuff from event handlers
[01:31:48] where you're introspecting values. So basically,
[01:31:51] This was just simplification and deletion. So me spending this much time on this topic
[01:31:56] is probably...
[01:31:58] unwarranted because you guys will just be like, "Oh yeah, so everything just works." You know, and forget about it. But
[01:32:04] I think
[01:32:07] this is an opportunity to actually
[01:32:09] explain reactivity a little better.
[01:32:15] Right? So, like...
[01:32:17] Let's run this example one more time.
[01:32:19] Um...
[01:32:20] And...
[01:32:22] Thank you.
[01:32:22] And can I... you can...
[01:32:24] You can now picture that this
[01:32:27] C is just a function of a and the actual interesting one is e and
[01:32:33] which is now a function of CND, right?
[01:32:39] Thank you.
[01:32:41] Right, and I guess I'll just add this one back up.  What was it? C is equals A.
[01:32:47] I'm just doing one layer, I'm going along the bottom here.
[01:32:58] Yeah, so let's just run this.
[01:33:02] Update our signal to one.
[01:33:04] Do-doom!
[01:33:06] See, this stuff would be good for the old RxJS style diagram, so people can see change propagation.
[01:33:13] Update to one.
[01:33:15] You are now invalid.
[01:33:18] Thank you.
[01:33:19] Okay.
[01:33:20] And
[01:33:21] You notice we only have to do this dance
[01:33:24] on
[01:33:25] signal
[01:33:27] on signal rate, okay?
[01:33:29] So we actually--
[01:33:31] go all the way through. So there's definitely need to work
[01:33:34] maybe needs to work.
[01:33:36] Like, we don't know these ones need to rerun, but it's important because
[01:33:40] If you...
[01:33:41] go up this chain right so like if we set one and like okay so now we need to recalculate a so
[01:33:47] becomes that
[01:33:49] And A gets its one, right?
[01:33:51] We're just doing a straight pass through.
[01:33:53] This now becomes orange.
[01:33:57] But you know something here.
[01:33:59] This example is a little bit different this time.
[01:34:02] Because...
[01:34:04] Now...
[01:34:05] Okay, we're like, okay, done.  Then we run this one.  'Cause I just said, we add them depth first.  So we're actually going A, C, E, B, D.
[01:34:14] So we go here.
[01:34:16] And you might be like, why do depth first?  Breath first would probably solve a lot of these problems.  It would, but when you write code the first time,
[01:34:23] Like...
[01:34:25] Think about nested things like components and components.
[01:34:29] or even this console log,  the children...
[01:34:35] You essentially have to be able to
[01:34:38] Like everything does execute
[01:34:40] depth first. You hit what's ever inside this line before you hit what's in this line. So if you want to maintain that consistency, you actually want the reactive system to also propagate depth first.
[01:34:56] So in any case, um,
[01:34:58] Thank you.
[01:35:00] Where am I going?
[01:35:02] Oh man, there's so much discussion going on in the chat that I want to jump in on because it lacks...
[01:35:10] the cross framework nuance element of it, but we'll get to that in a minute.  Anyways, so we have C here.
[01:35:18] And
[01:35:20] We're updating it, so now it goes black.
[01:35:22] and we know that this one is now orange.
[01:35:26] - Thank you.
[01:35:27] And
[01:35:30] Now we go to
[01:35:31] Update E.
[01:35:32] and E knows it has to rerun, right?
[01:35:40] And
[01:35:41] When E goes to rerun,
[01:35:45] He gets C, and he's like, okay, cool, C's won.  But when he goes to get D, D's like...
[01:35:50] Um, I might be okay, but I actually don't know.
[01:35:54] So we actually have to, D has to like actually go back up here and go, okay B. And again, we can do this with your derivations because we both know what listens to a memo and what it depends on. We can actually walk up the graph and be like, okay, let's go back to B.
[01:36:09] And B is like, "Okay, yeah, I definitely need to run." So B runs.
[01:36:12] Right?
[01:36:13] and B gets the one.
[01:36:18] Now...
[01:36:19] At this point,
[01:36:23] Um...
[01:36:26] D becomes...
[01:36:28] Orange.
[01:36:30] And, um...
[01:36:34] then it runs and you can see how it funnels in and we get the right value.  But it's more interesting if the situation around D was like,
[01:36:43] only
[01:36:44] if it was conditional.
[01:36:45] Like what if D actually
[01:36:48] Or like what if what if one of these actually didn't need to update?
[01:36:55] In that case,
[01:36:56] Um,
[01:36:58] we're still good and i guess the best way to show that this i said that was the last example  uh this is going to be the last example i promise
[01:37:04] Um...
[01:37:06] is
[01:37:09] What if
[01:37:11] C is some kind of conditional. Like C basically goes
[01:37:15] only updated if
[01:37:17] if a is bigger than one. Otherwise, keep it at zero.
[01:37:21] So if C was like, nah, we're going to return...
[01:37:26] Uh...
[01:37:27] a
[01:37:29] If
[01:37:30] If A is bigger than 1...
[01:37:33] then we're going to return 8, otherwise we're going to return 0.
[01:37:37] Right? So...
[01:37:40] Thank you.
[01:37:41] Basically, C remains unchanged in this scenario.
[01:37:45] If we actually did this propagation,
[01:37:49] And we kind of get back to where we were, where
[01:37:52] I'm kind of rewinding it a bit, but where these are all green still
[01:37:57] Right.
[01:37:59] And...
[01:38:02] Thank you.
[01:38:03] Thank you.
[01:38:04] And we get...
[01:38:05] We just finished doing a...
[01:38:08] So A marks this one
[01:38:11] as...
[01:38:12] needing to work. So I kind of rewound to this point, right?
[01:38:18] And if we got to this point,
[01:38:21] Right.
[01:38:23] And...
[01:38:24] C evaluates and C goes, "Okay, A bigger than one, no, A equals one." Okay, so I'm going to stay at zero. If C doesn't update, it's just going to go black.
[01:38:33] and it's not going to notify this one it's going to stay green
[01:38:41] At which point
[01:38:42] E doesn't need to run.
[01:38:45] he doesn't know if it actually needs to run. So we end up doing is going back to
[01:38:52] to be.
[01:38:53] Um,
[01:38:55] and working it out that way. So, I mean, there's some subtlety here.
[01:39:00] Actually, I guess that's not true.  Actually, sorry.  I'm confusing it again.  But it's interesting because you can get to E, and before you run E, because it's green,  it knows it doesn't...  Let me correct myself.  Because it doesn't know it needs to run, it asks the question like we did a minute ago.
[01:39:16] like it goes up the tree and if by chance D is the same
[01:39:21] And I hope this makes sense.
[01:39:23] This one could go orange.
[01:39:26] depending on if this one actually successfully updates and makes this one orange, then E will run.
[01:39:32] But if this one also bails out,
[01:39:37] E will go, "Okay, well, I asked everyone and nothing changed and it just won't run."
[01:39:41] So we have this ability to stop the propagation
[01:39:45] anywhere along this
[01:39:47] this tree and I'm sorry this is very technical but this is probably
[01:39:52] Maybe the last time you're ever going to have to worry about this.
[01:39:56] Um.
[01:39:57] Because this behavior happens for you automatically.
[01:40:01] But--
[01:40:02] If there's any kind of...
[01:40:04] takeaway from from this one two three thing is is
[01:40:07] Solid, very, very, very clearly here.
[01:40:11] has
[01:40:13] Um...
[01:40:14] an update stage,
[01:40:20] It has a...
[01:40:21] Pure...
[01:40:22] computation stage.
[01:40:24] and it has a side effect stage.
[01:40:30] And these things are actually...
[01:40:32] clearly scheduled.
[01:40:44] Right? Like, there's clearly...
[01:40:47] I'm going to go to the next one.
[01:40:47] Like one, two, three.
[01:40:53] And the reason I wanted to show this is this is not unlike...
[01:40:59] react
[01:41:01] Right?
[01:41:03] Because in React, and let's give ourselves a nice React blue here,
[01:41:08] You're still going to like...
[01:41:10] Upset state here right do the update and
[01:41:13] And then you're going to go and go, what is it?
[01:41:16] view equals a function of state
[01:41:20] Right? You're going to run all your components.
[01:41:23] And then,
[01:41:24] then you're going to diff and patch over here.
[01:41:26] Okay?
[01:41:29] these systems actually
[01:41:32] lay on top of each other with the same kind of split.
[01:41:35] which is really important because
[01:41:38] This is...
[01:41:41] why we can do things like run all the pure computations
[01:41:44] and hold the side effects till later.
[01:41:46] for things like suspense.
[01:41:48] or concurrent rendering.
[01:41:50] or all the things that apparently you can only do with a VDOM.
[01:41:54] because we actually have
[01:41:57] the same stages.
[01:42:03] So, I think this is...
[01:42:12] I think this is important to kind of talk about because I was on Twitter and someone, they'd released the TANSTAT query and they're talking about suspense and suspense lists and Adam Maracus was like,
[01:42:25] What? Solid has this without a VDOM? Blah, blah, blah. How is this possible? And
[01:42:31] It's possible because...
[01:42:33] reactivity
[01:42:35] is like
[01:42:36] Thank you.
[01:42:38] It's like promises.
[01:42:39] It's a primitive, right? A VDOM is a system, like a...
[01:42:45] you know, like you're building a specific engine or building a specific thing. But reactivity
[01:42:49] is just
[01:42:50] a way of modeling something. Like, how should I put it? Like,
[01:42:54] Go back in the day to something like Node, when everything was written in callbacks, right?  And then someone introduces promises.
[01:43:02] Like you can do all the same stuff without promises that you can do with promises. Promises just let us model stuff slightly different so that it like made it easier because now suddenly our ability to kind of pass them around gave us the ability to kind of make the async guarantees portable.
[01:43:17] But if you look at it,
[01:43:19] Like you can do the same stuff and the truth of matters with
[01:43:22] But if you've written your whole architecture on node callbacks,
[01:43:26] then doing that migration was actually kind of
[01:43:29] painful.
[01:43:29] because you kind of had to switch every place, kind of invert the pattern a little bit.  And there was nothing wrong with necessarily doing the callbacks,  but suddenly promises kind of changed...
[01:43:42] the way you could do things.
[01:43:46] that's really the way that I look at reactivity and,  and whatnot.  Cause like you can build a VDOM in a reactive way.
[01:43:55] library like it's just a representation we don't need it in the same way once we had promises we no longer need it like it has any you ever use Q or Q async with the old callbacks and node like the you had special libraries or even like some of the cool stuff people are doing with generators not the generators are bad thing I'm just saying you basically structurally set up your program around these cues and
[01:44:17] and had these libraries and you made like the queue system was the base of it. I did this kind  of development and then the callbacks would all kind of feed into it and that would be your architecture.
[01:44:26] But once you had promises, that whole thing just disappeared.  You're just like, okay, well, I'll just use a promise.
[01:44:30] And that, to me, is very similar parallel here.
[01:44:34] There's no reason...
[01:44:35] You couldn't do anything.
[01:44:38] with a VDOM that you can do with a reactive system.  The only challenge is maybe the differences  or complexities of modeling it,
[01:44:45] and
[01:44:46] whether you want to take on certain kind of overhead because like a VDOM is like yes
[01:44:50] we need the VDOM, we want to do this diff. That's the assumption. The same way it'd be like having callbacks with that queue library. You could always press promises into that queue library. You can do that, but when you're like, "Well, I got promises, I don't really want to use the queue library."
[01:45:04] That's where the thing is.
[01:45:07] can do it.
[01:45:08] But you're kind of like, I'm going to try and avoid doing this if I don't have to.
[01:45:13] Not everyone's on that boat. Vue does both or whatnot. You can definitely put them together
[01:45:19] But it's kind of like...
[01:45:20] Do you really need it?
[01:45:22] And, um,
[01:45:23] I don't know. If anybody's an old node developer who witnessed going between callbacks and promises, I feel like it's the same kind of thing here.
[01:45:31] I'm not suggesting that promises and effects are the same thing,  that they're replaceable with each other.  But more the similarities between using callbacks and promises.  Once you have a primitive...
[01:45:42] you know,
[01:45:43] that gives you this kind of power built in
[01:45:45] it compared, like as they promised, compared to callbacks, you suddenly can do more. Like you can, you can suddenly go, Oh, okay. Yeah, I actually don't need the model at this way. It helps in the simple cases that even helps in the complicated cases, it just scales.
[01:45:58] differently because you've changed your mindset.
[01:46:03] Yeah, I don't know. Sometimes I go on these little side rants and I don't know if they make sense to anyone.
[01:46:09] Yes.
[01:46:11] So some of you get it.
[01:46:13] Man, there's this discussion going about how close you are to the DOM or just JavaScript between VDOM and non-VDOM.  And it's like...
[01:46:21] I think some people are just uncomfortable with compilers.
[01:46:25] Like...
[01:46:29] I'm just going to address this one in chat because people keep on going back and forth with it.
[01:46:34] Okay, actually, sorry, before I do that, someone's asking, can you please explain the difference between push and pull here?  Yeah.
[01:46:39] Push was a process where we went forward, where we went orange, and then we're like, okay, you become orange.
[01:46:45] You go, come on.  Can I...
[01:46:47] pushes down the line. Pull is when we got up to E and we were like, oh,
[01:46:51] I don't know about you.  Oh, actually, I don't know about you.  And you went back and it was actually from accessing the value that you're like,  okay, I actually need to look up.  I need to look up.  And then you pull it up.  And this is actually a big...
[01:47:03] difference between like
[01:47:05] RxJS.
[01:47:07] And, um...
[01:47:09] like signals or like Malbec style stuff because stuff like RxJS is push only there's no concept
[01:47:15] Until you get to behavior subjects and stuff, but there's no concept...
[01:47:18] in the basic observable of owning a value.
[01:47:21] An observable is an event stream. It's just a series of values.  You never ask the observable what your current value is.  It's like, what is current? It's just a moment in time.
[01:47:32] Whereas,
[01:47:32] in fine-grained systems, which are kind of like synchronous by nature,
[01:47:36] the primitive, the signal, actually represents the value.
[01:47:41] In a sense,
[01:47:42] these names are almost reversed.  I think observable is like a terrible name for a stream.
[01:47:46] and maybe Signal's a better name for a stream, I don't know.  But, like, one...
[01:47:53] intends to represent the value that it is, like it is the thing.
[01:47:58] And the other one represents the container.
[01:48:01] It's a very subtle kind of difference.  And I think it even comes down to even
[01:48:07] some people's opinions on what naming and stuff should be around this stuff.
[01:48:12] But that's the whole thing. When you do a change and you propagate it out and you propagate it out, that's push.
[01:48:18] I want to cut the fans out.
[01:48:20] is when you're like,
[01:48:21] Oh.
[01:48:22] This is stale. Let's walk back up and figure it out.
[01:48:32] uh yeah but the thing is the reason you were in this yes but yes it is eager versus legacy but it's also because
[01:48:42] Um,
[01:48:42] There's strictly pull-based systems and strictly push-based systems. I used RxJS as an example of a strictly
[01:48:48] push-based system, but you can look at React as a, like a
[01:48:52] pretty much strictly pull-based system. It's not 100% true, but like
[01:48:57] Um,
[01:48:58] when you rerun the component and then you check the dependency array,
[01:49:02] to decide if you're gonna rerun something, but then you, you, you, you, each time you're, you're the, as you run through the code, you're asking the question always.
[01:49:10] You're not like going like, "I'm pushing this out to this specific place." You're just like, "Update this component and let's pull what we need to pull from it." So, React is like very much on the pull side.
[01:49:20] RxJS is very much on the push side, solid and viewer in the middle.
[01:49:29] Yeah, so
[01:49:31] Yeah, so...
[01:49:32] Yeah. Is there actually...
[01:49:36] Can you play some examples from real life?  Yeah, I guess my examples with the stuff was not very clear with the equation.
[01:49:45] But...
[01:49:46] Hmm...
[01:49:48] It always gets harder to abstract it out.  I think things like the show component  are where you get graphs like this, where like,
[01:49:56] We talked about keyed and non-keyed earlier in the stream.  And the way that something can decide...
[01:50:04] Like...
[01:50:05] The keyed versus non-keyed is actually really important if you have a situation
[01:50:11] where,  um,
[01:50:13] I mean...
[01:50:14] Let's quickly...
[01:50:15] kind of pull this out, but if you have a situation like
[01:50:20] Um...
[01:50:24] Thank you.
[01:50:30] I'm gonna quickly
[01:50:32] Just make a div here.
[01:50:34] with a--
[01:50:35] with a count in it. And luckily we already have our count one, so we can, we can use, we can re-leverage, leverage this, right? Um,
[01:50:43] this might not completely answer your question but I think it's important for this because
[01:50:48] um
[01:50:55] to actually accomplish things like the show component requires this kind of knowledge because if you're going to say
[01:51:01] Um...
[01:51:03] Count one.
[01:51:05] is bigger than five. And to be fair, this will actually force us into a boolean anyways.
[01:51:11] But,
[01:51:11] You...
[01:51:12] you got to ask yourself,
[01:51:16] How do you isolate this change? Because
[01:51:19] if
[01:51:21] If count is bigger than five,
[01:51:25] Show count. Okay, that's easy. But what happens when count is
[01:51:29] is
[01:51:31] 5, 6, 7, 8, 9, 10.
[01:51:34] This statement is still true,
[01:51:36] If you reevaluate this every time count changes,
[01:51:41] Um,
[01:51:44] Thank you.
[01:51:44] like we need two memos, we need to actually split the graph because if this side effect was just like if you kind of naively thought about this and you're like okay well
[01:51:53] I'm kind of thinking of this like a crate effect
[01:51:57] And
[01:51:58] I'm going to
[01:52:00] Go if
[01:52:01] count
[01:52:03] is bigger than five
[01:52:07] Bigger than five, yeah.
[01:52:10] console log
[01:52:12] expensive work.
[01:52:15] Okay.
[01:52:17] Right. Let's quickly...
[01:52:20] Yeah, I'm going to go back to not returning anything. And we're doing count one. Actually, no, that's not true. I'm going to use a button. Let's get a button.
[01:52:31] Let's get about it.
[01:52:35] Right.
[01:52:36] and we're going to say, call it click me, right now. And we're going to do something like
[01:52:41] on click
[01:52:46] What is it? Set count.
[01:52:51] One...
[01:52:52] Can't see if it-- yeah, set count one, previous count,
[01:52:56] plus one.
[01:52:58] Okay.
[01:53:00] and maybe we can format the document, but it won't work because we're blowing up.  Okay, and did I spell create?  No, I didn't. I just put a const in front of it.  Okay, so now when we click it,
[01:53:12] Right.
[01:53:15] We also kind of actually know what we want to see what the count one is in the view.
[01:53:19] just so that we can...
[01:53:21] Um...
[01:53:22] you know, no...
[01:53:24] Get some feedback on our progress here. So
[01:53:27] Okay, click me one, click me two, three, four, five.  Okay, so far so good.
[01:53:33] Now we got the six and we're bigger than five, so we did our expensive work.
[01:53:36] Oh.
[01:53:38] We're still doing every time we're redoing our expensive work.
[01:53:41] This isn't good.
[01:53:49] Right?
[01:53:50] This isn't good.
[01:53:53] Right.
[01:53:54] You can't just make a reactive system out of signals and effects.
[01:53:58] Right.
[01:54:00] Um...
[01:54:01] you would do stuff very wastefully.
[01:54:06] Right?
[01:54:08] And
[01:54:09] Even if you try and do smart batching,
[01:54:12] And splitting?
[01:54:14] you're still going to get
[01:54:15] It's possible with a deep enough tree kind of like what I showed here where these are like
[01:54:20] different depths, even if you try and group things together,
[01:54:22] Like if I delete D...
[01:54:24] Like...
[01:54:25] that pulls E up and then...  Even if you try and...
[01:54:30] Like
[01:54:31] use scheduling as a way to get around it.
[01:54:33] you're still going to do unnecessary work.
[01:54:37] Um...
[01:54:38] So...
[01:54:39] This is part of why memos are so important because you actually
[01:54:44] If you actually want to make the show component,
[01:54:48] you do this: cause, condition,
[01:54:50] This is all show is, honestly.  Like, it's a little more complicated.  But if you ever want to, like...
[01:54:55] I always say, oh, you can just make your own control flow.  It's super easy, right?  Um...
[01:55:00] We just need to...
[01:55:02] Extract this out.
[01:55:04] If you make a memo around the condition now,
[01:55:08] and say instead of this,
[01:55:09] Check the condition.
[01:55:14] As we click...
[01:55:15] Sorry.  Um...
[01:55:17] Let's refresh that. Oh, yeah, I got cream in my mouth.
[01:55:21] As we click,
[01:55:23] and now it's going to do the expensive work, right?
[01:55:25] But now because of the memo, it's only did that expensive work once because this resolves to true, never changes again between true and false, which means that this effect never runs again.
[01:55:35] Right.
[01:55:36] And
[01:55:37] kind of get back and I hope I'm answering the question properly. This is why you can
[01:55:41] come up with some of these advanced graphs because yeah you could compress everything into the effect
[01:55:46] In theory,
[01:55:47] but that would be incredibly inefficient.
[01:55:55] Right? Because effects don't have this two-way graph. If you have more effects,
[01:56:01] You just have...
[01:56:02] More effects.
[01:56:04] They're just like a...
[01:56:06] They're just like a...
[01:56:08] align, right? You just, they don't have this kind of depth thing.  All they have is dependencies. They don't talk to each other.
[01:56:19] Right.
[01:56:23] How do we write the create_memo function? That is super hard. This is the most trickiest part of the reactive system and the most important part.
[01:56:31] That's why I said like create memo is the reason why reactivity works today.  MobX, that was the thing.
[01:56:38] because the basic version of this was like an effect writing a signal.
[01:56:42] That was...
[01:56:44] That was like, when I teach reactivity, I'm like, oh, just pretend like an effector, it's a single. But that is,
[01:56:48] not sufficient here.
[01:56:50] um
[01:56:54] Right.
[01:56:55] And it's not just to avoid effects, it's to avoid expensive calculations like other memos.
[01:57:00] Sometimes the other memos are expensive too.
[01:57:04] The reason the system is so complicated is because if they always update it, if there's no conditional updating here, like if C or D couldn't drop the line, then it would be a much simpler system because you'd be like, okay, well, I know all the effects.  Once I queued them, all these effects are going to have to run anyways.  And then you can just pull the values and make the system much simpler.  I think someone was actually showing that view...
[01:57:26] I said view was like MobX.  Someone was showing me that view actually doesn't solve  the diamond problem and actually,
[01:57:32] is inefficient in the way that I'm talking about here.  I don't know if that's true. I haven't verified it myself. I just, someone was showing like, oh, view, some example of you not solving the diamond problem.  I think that requires verification because I'd be very surprised if that was true.
[01:57:45] Um,
[01:57:46] But this is why, as I said, memos are super, super important.
[01:57:52] And kind of like a piece of this puzzle. Like if you don't
[01:57:57] Like, it's more apparent for us being a fine-grained library, because we rely on this behavior.  That's how we get every pinpoint.
[01:58:04] Update.
[01:58:10] - Yeah.
[01:58:15] Right. This is why solid is what it is, right? And why React Memo everything. You can't remember the name, it seems like...
[01:58:21] The thing is you don't...
[01:58:23] Do you know, the power here
[01:58:26] is the explicitness.
[01:58:29] Like...
[01:58:30] You could also not, right? There's a lot of times where the memo isn't necessary.
[01:58:36] Right.
[01:58:37] Like this control react kind of gives you this control. I think when you go to a compiler like one of the things I always talk about with Svelte or  whatever is without the ability to be explicit about these things I
[01:58:48] you can't optimize like like because if every let
[01:58:52] is a signal...
[01:58:54] That's an easy one to actually optimize out of, but then every let's a signal.  And if every dollar derivation is a dollar sign, then every
[01:59:01] derivations of memo. Like, you don't
[01:59:03] you can't make that distinction and optimize for your situation. And it's all often I'm like, actually, guys, don't worry too much about the memos. Most of these things are handled in important
[01:59:14] pre-made stuff for you, like control flow components and stuff.  You need to know this to write libraries,  but if you're writing an application code,  you can base most of your own code,  unless you know it's expensive, probably doesn't need memo.  It's the...
[01:59:27] It's like the glue that needs to do the memoization.
[01:59:32] we can set you up on defaults that generally are less overhead than just auto memorizing everything.
[01:59:42] If you have a memo that stays in an unupdated state for a while if it's not used, say used later in Satamo.
[01:59:51] Right now, no, but there's potential for this. Right now because
[01:59:56] of
[01:59:57] this situation that I was showing here
[02:00:00] here.
[02:00:00] where like it might never get to the end or whatever.
[02:00:03] I do have like this
[02:00:05] When you get past the execution, get past the batch,  I'm like, okay, let's clear out the pure computation queue  because I want to make...
[02:00:14] sure that like we didn't leave any loose ends.
[02:00:18] But,
[02:00:19] Um,
[02:00:20] It's...
[02:00:21] because you have both ways of tracing and
[02:00:24] you could say like if something's not listened to then it doesn't actually need to run. I believe doing the right stuff with auto cleanup you could probably make a system like that but I this is something I'm still
[02:00:34] evaluating. There's some details of solid specifically that make me not as confident there,  mostly because like I think in the pure reactive system you could, but in solid we do
[02:00:44] other fun stuff with effects, like the concurrent rendering stuff.  And that always plays into how we approach these solutions.
[02:00:53] Yeah, you just missed probably the most technical explanation part of the whole thing, so...  Uh, yeah, so...
[02:01:03] Yeah, I mean...
[02:01:05] The takeaway here is...
[02:01:07] I'm hoping...
[02:01:08] that for the most part, none of you need to work. Now that I've explained how everything works,  none of you will ever have to worry about this.
[02:01:15] That's why we did this work, because it disappears into the background
[02:01:20] And I'm very stoked about that property here in terms of batching.
[02:01:25] But yeah, this was the big one.
[02:01:27] Um...
[02:01:29] The one that required the full Excalibur draw.
[02:01:34] Um...
[02:01:36] Yeah. I think this is... I was really torn because I was like, okay...  Like, part of me was like, maybe...
[02:01:43] I once felt,  but this...
[02:01:45] because I don't like inconsistency, like I really dislike
[02:01:50] I mean, it's funny, Svelte is inconsistent, but it's like a very explainable thing.
[02:01:53] but one of the biggest conversations we had was getting rid
[02:01:57] Making sure that pure is pure.
[02:01:59] I don't know if this means strict mode in the future,  if this means that Solid's going to go on a path  where we live long enough to be our own villain,  you know, like the whole, like, react thing,  where it's like strict mode is too strict.
[02:02:12] But I think...
[02:02:12] we really should get into a zone here where create memos, don't write signals, and that we can depend on this part of the graph being derived.
[02:02:22] Because as long as no chaos happens in here,
[02:02:26] we can make huge amounts of assumptions,  not just for optimization, but like...
[02:02:34] Um...
[02:02:35] for consistency.
[02:02:40] - Okay.
[02:02:40] Alright, so how are we doing? How far are we in here? Ah, two hours in, wow.
[02:02:45] That was a big one. Okay. So we still got two big topics though that are for the release. We have, I want to talk a little bit about resources and SSR still. So, um,
[02:02:57] Let me see here.
[02:03:03] Peace out.
[02:03:04] I can make a little thing here.
[02:03:06] Alright, let's get back to our release page and let's
[02:03:09] talk about resources. There's no more questions here, right?
[02:03:15] create signal inside of create memo.
[02:03:17] Yeah, we don't have hook rules, so don't worry about stuff like this.
[02:03:24] Um...
[02:03:25] It's all just the same. When I say create, you could create, actually creating a signal inside create memo is okay.
[02:03:31] because you're actually like it's a derivation you're creating like you're
[02:03:35] You're taking some data and using that data to create a memo. The problem is writing a signal and
[02:03:41] inside
[02:03:42] a memo because then you're like,
[02:03:44] triggering another update.
[02:03:46] But actually creating one inside a memo is
[02:03:48] Perfectly valid.
[02:03:56] To our benefit here, I don't think we have to worry about this too much, because I actually made another primitive called create computed.
[02:04:02] that is set up to be clearly for this case so people shouldn't be using memo this way already  like like i don't think this is actually a real problem it's more of that people were using create  effect or create computed and people using create effect aren't going to have a problem here they  might be doing stuff that's unoptimal but they're not going to like it's not a big deal people using  create computed we're going to move people off create computed in 2.0 and that was part of why  i was able to do this batching because once i resolved that yes we don't need to worry about
[02:04:32] from the commit, I literally just deleted a bunch of code out of solid and it's probably
[02:04:37] faster now and smaller.
[02:04:40] So, you know, this is for me spending a bunch of work and time to, you know, to maintain something for your sake.  And maybe it wasn't maybe it wasn't needed.  I do that a lot.
[02:04:54] Maybe go back and look at the stream a little further.
[02:04:59] half an hour I literally was just explaining how all this works.
[02:05:03] Thank you.
[02:05:05] Yeah.
[02:05:06] Happy about this? Yeah, it's a good step forward. I'm glad everyone's happy about this.  Okay, so let's talk resources. Resource stuff is actually a little bit more straightforward.
[02:05:14] The first one that's really easy, and again, a TypeScript thing that everyone's going to love, because people love TypeScript, is that we're going to add a new state field to create resource.
[02:05:23] which means that all the five possible states
[02:05:27] are all representable here, like whether it's ever resolved the value, whether it's currently loading or whether it has an error.
[02:05:35] People love this with TypeScript, obviously.  And I'm going to pull up not the JS Framework benchmark.  Um...
[02:05:43] Why is the JS Framework benchmark like the only...
[02:05:45] thing I have open.
[02:05:49] Actually, let's see. Do I have another one? No.
[02:05:52] New window
[02:05:53] It's open solid here for a second to just show you what I'm talking about.
[02:05:57] Um...
[02:05:59] I could just go to the repo, but whatever.
[02:06:05] Let's go to...
[02:06:09] Solid...
[02:06:11] Not SSR.
[02:06:13] Source.
[02:06:15] reactive signal, yeah.
[02:06:17] What I want to show here is that
[02:06:20] Create.
[02:06:28] is now with the resources. Because of this, we get to do fun stuff like this where we create interfaces for each potential state, which are type narrowing. So essentially, if you indicate...
[02:06:40] the specific string, we know whether the value can possibly be undefined or not, or whatnot. So this is kind of nice.
[02:06:51] for TypeScript.  The ironic part about this change is
[02:06:56] If you're using error boundaries,
[02:06:58] and suspense, you should never use this really.  Like, this is really good for like people doing basic stuff,  but error boundaries and suspense are designed to automatically  handle the stuff for you on read.  So I added this because it was very, very,
[02:07:12] wanted and it gives people more insight into what's going on, especially if they're not using these features. But like the
[02:07:20] golden path probably suggests you should never use this.
[02:07:24] because you shouldn't be the one taking care of like all these conditions.
[02:07:30] But
[02:07:31] So, anyways, it is very powerful though because type narrowing is important and
[02:07:38] Uh...
[02:07:39] Just wanted to show that because like, yeah, the resource type literally just becomes a union of
[02:07:44] of these different states.
[02:07:47] Um...
[02:07:48] That one's an easy one.
[02:07:49] I think the...
[02:07:51] I think the most requested one is this one.
[02:07:54] How about resources?
[02:07:57] that
[02:07:58] Our stores.
[02:08:00] Now,
[02:08:01] I haven't landed on a final API here, and there's some...
[02:08:06] There's some interesting decision points because if you
[02:08:09] If I made a create resource store,
[02:08:12] suddenly we have like a split where now whoever implements
[02:08:16] react...
[02:08:18] our solid query
[02:08:21] or turbo query or whatever has to make this choice and like expose it to the end user and stuff like  do they have two primitives do you know there's this natural split on reactivity so instead as i  said this is kind of copping out kind of doing like the uh experimental unstable whatever like  kind of thing but essentially
[02:08:39] I've created the ability for you to just
[02:08:42] Um,
[02:08:43] pass in the underlying signal, and if that signal happens to work like a store, that's cool.  I think what's cool about this is we'll be able to play with things and decide what kind of patterns we want to do.  For example, in this example I gave here, I make something that looks like a signal, right?  It just grabs a value off the store and it sets it, but I create a store under the hood,  and I actually call it with reconcile to do data diffing.  So what this means is every time you, like let's say you refresh a list from an API,
[02:09:11] Um,
[02:09:13] and get the full list back,
[02:09:15] it will just data diff and it'll be like, "Okay, bang, you changed only the completed field on to-do 2."  And then just fine-grained update that instead of rerunning anything.
[02:09:25] It will just jump through. And that ability for fine-grained is super powerful.
[02:09:29] um and
[02:09:31] Like...
[02:09:32] Don't get me wrong. This is going to be part of  Solid Start. I showed that cool to-do  demo the other day using our  actions and loaders. We're going to
[02:09:41] Bootstrap this in so that you know,
[02:09:44] we can do the almost remix-ish
[02:09:47] if we want to reload all the data without re-rendering anything and still getting our fine-grained updates. It's super powerful. And for those of you, those who know, Reconcile has been benchmarked and it's very, it's basically very similar performance to stuff like Inferno, like the fastest feed on libraries. So I,
[02:10:03] I think having this ability is really powerful.
[02:10:06] And people don't realize yet, and because I haven't wrapped this into a nice create resource
[02:10:13] crate store resource or whatever primitive this one might be slow to catch on but I wanted to show you guys if in case you want to tinker with this and come up with ideas of how to um
[02:10:24] mess with the storage and resources and do a lot of different stuff with it. I think this keeps the API really open.
[02:10:29] And as I said, this case, which is the obvious case,
[02:10:33] Okay.
[02:10:33] I'm already seeing benefits with the work we're doing on Solid Start.
[02:10:37] It lets me do smarter stuff.  Like if you did watch my stream,  there was a to-do example, right?  I probably have that like,
[02:10:47] up here somewhere
[02:10:49] where was I yeah like  not the bear one
[02:10:54] Oh, yeah, to-do example, right?
[02:10:56] Um...
[02:10:59] If...
[02:11:00] If without this kind of deep fine grained
[02:11:05] ability to do the updates, the resource, what ends up happening is
[02:11:08] every time you pull from the server,
[02:11:11] It's going to need to recreate that list item.
[02:11:14] which means that there's no way that the actions all have to be declared
[02:11:18] top level if you want them to kind of like be an overarching thing. As soon as you have this dip thing, then this no longer becomes a problem and you can actually nest the action stuff. This was very essential for the work in
[02:11:32] solid start so I just wanted to kind of
[02:11:34] point out  this is super powered because  this is like the the
[02:11:40] the kind of use case that I feel that's been missing for people. Because like, what if the data does come from an outside source and you don't get to do fine grain updates? Well,
[02:11:51] Now you do.
[02:11:53] All right.
[02:11:54] No comments on this one. I thought this one, like in my mind, this is the one people would be most excited about, but... eh.
[02:12:00] Maybe apps aren't there yet.
[02:12:03] *laughs*
[02:12:04] The last thing I want to talk about on resources
[02:12:07] is something called
[02:12:09] Um...
[02:12:10] is...
[02:12:11] This one is probably not gonna matter to most people on the stream, but unless you're someone working on Astro or Fastify,
[02:12:22] actually sorry one question did come in
[02:12:27] is something like solid query bound to create reserves?  I think it's something to describe. It should be.
[02:12:32] The thing is, we don't just throw promises, which is a difference from React.  So the resource is that async primitive.  So like...
[02:12:43] People have been talking about stuff like, I haven't looked at Solid Queer yet and seen all that, but like,
[02:12:48] what we want out
[02:12:50] of these kind of integrations is just a caching system.  Solid already often handles all the mechanics around refetching and suspense and all that kind of stuff.
[02:13:00] It's kind of, unfortunately, on the React side, it's like the opposite, where when Tanner had to go and add...
[02:13:05] The suspense stuff, you have to actually go and add the suspense stuff and figure out how to handle it. You have to toggle it with a flag. With Solid, you just use create resource primitive and it's all built in. It just works. Transition, suspense, all that stuff.
[02:13:18] But it means that universal solutions, maybe the boundaries are different.  Like, really, we just need...
[02:13:24] the caching mechanism. And you can always abstract the caching through using the resource fetcher. There's been multiple libraries that do that. Maybe none of them are as featured as
[02:13:34] Um...
[02:13:35] solid query or tan stack query is.  But like if
[02:13:39] You can see how you get there because if you get to use these primitives that are baseline and solid anyway,  it's the same thing used in a router, the same like primitives,
[02:13:48] those libraries get small. Like, there's no reason
[02:13:51] for a query add-on on top of Solid's resources to be more than
[02:13:56] 5k and i mean even with
[02:13:59] all the features of like tan stack router or tan stack query.
[02:14:04] Uh,
[02:14:05] Like...
[02:14:06] It's just like all the...
[02:14:09] all the pieces you need, all the
[02:14:12] All those just
[02:14:13] are built in.
[02:14:15] So I think that's one place where the agnostic solutions are going to
[02:14:19] there's a shift because of this primitive, but we need the primitive, as I mentioned, because
[02:14:26] we...
[02:14:27] it's not just a promise we don't throw a promise and throw away your stack our suspense
[02:14:32] resumes
[02:14:33] fine-grained.
[02:14:44] Yeah, this is something this works perfectly fine if
[02:14:49] If we can, because you get to write the setter.
[02:14:52] Um...
[02:14:53] If I can pull up this code again, the only problem is you're going to have to figure out how to make TypeScript not complain.
[02:14:59] because
[02:15:00] I don't know how to yet but people tell me it's possible because look you write the setter so if your setter
[02:15:06] You could do something like--
[02:15:08] If you need deep updates, like,
[02:15:10] Like, you can write whatever center you want.
[02:15:13] The thing is, you just have to recognize that
[02:15:16] If it's coming from...
[02:15:19] Uh...
[02:15:21] If it's coming from the create resource itself, it's just going to pass you the data.  So you might have to do a little bit.
[02:15:29] Fancy, but you can you can anchor stuff off here like you have this is what gets passed right back out through mutate again  So you have complete control here?
[02:15:39] Is a minimal caching thing outside the scope solid? Yeah, yeah.  But it's super easy. I-- have I showed this on stream?  You could literally make a simple caching thing by just, like,  going outside the resource and going, like, const some object and put a key,  and then using the fetcher, like, um...
[02:15:54] I probably haven't actually showed this on stream.  Maybe that's worth doing at a different time.  But like...
[02:15:58] The problem is, it's so hard to make assumptions about
[02:16:02] caching like there's a billion different ways to do it and I tried stuff like coming with cache components and all this stuff and just  It was a mess and I realized at every point even if I came up with a custom cache thing the custom cache thing would have to have a
[02:16:14] Like...
[02:16:14] a way to inject a custom cache into it.
[02:16:17] And then I was like, well, what's the value here?  Because it's hierarchical?  Well, sometimes caches aren't hierarchical.  There basically was no...
[02:16:24] I couldn't
[02:16:25] I spent a long time on this pre-
[02:16:28] I don't remember what release it was, but like I spent over six months toiling on this and writing in discord about that. Um,
[02:16:38] Right? So like,
[02:16:41] So like, yeah, I mean, if you think about it, it's just because it's, as I said, these mechanisms are really because because there's a fetcher.
[02:16:50] in createResource, you can always intercept
[02:16:52] Um,
[02:16:53] the query coming in and then be like, oh, don't run the request.  Just fetch it.  Just grab it out of the cache.  So you have completely the ability to then once you write this custom caching logic to wrap your own cache.
[02:17:09] Crete.
[02:17:10] blank resource and be able to use it caching and solid start doesn't
[02:17:14] do much with the caching, but it does use key and validation  similar to React query.  So it's just an example of this kind of
[02:17:21] being used because these are all just options and things you can pass in.  It's very composable.
[02:17:26] As I said, I couldn't make...
[02:17:29] Create resource is kind of complicated, but in my mind right now, it's as simple as I can possibly
[02:17:35] Make it.
[02:17:36] Um, and I know there's a lot of stuff on here.  Like why did I add all these states if it's as simple as you can make it, but like, I
[02:17:42] the real attempt here is to make this as
[02:17:44] basic as possible.  It's just...
[02:17:47] The...
[02:17:48] part of that is slicing up the responsibilities and understanding what pieces you need, right?
[02:17:54] All right, sorry, not this one. So that's it for resources. There isn't actually
[02:18:00] Oh, no, that isn't. Sorry. I didn't get to do the last one.
[02:18:04] I got interrupted. The
[02:18:07] Which is good. Just double checking. Anyone else have any more questions about stores and whatnot?
[02:18:14] In Crate Resource. Just take a drink here.
[02:18:19] Thank you.
[02:18:20] Bye-bye.
[02:18:22] -
[02:18:23] Bye.
[02:18:24] *clap*
[02:18:27] The funny thing is what I love about some of these changes is, and this is why I'm emphasizing so much on the decision-making process,
[02:18:34] here is because
[02:18:36] A lot of thought went into these and like a lot of conversation.  But the implementation for some of these things is really simple.  Like look at this.  Option.Storage or createSignal.  Like the implement this was literally passing an option through and just like...
[02:18:50] There.
[02:18:52] implemented. This is very easy because then
[02:18:57] This is the same stuff as before, set value, which then gets passed in, out,
[02:19:03] as Mutate later.  Like...
[02:19:06] This...
[02:19:07] I did try and keep things as simple as possible and a lot of these things actually
[02:19:12] weren't hard things to do, they were just things that required a lot of thought in terms of API design and where this goes.
[02:19:19] Um...
[02:19:21] Okay, so the last thing on the resources is something that probably won't apply to most of you. Mostly interesting, probably people who write like FastifyDX or like Islands Frameworks around Solid is
[02:19:33] Sometimes,
[02:19:34] you want solid
[02:19:38] Sometimes you want solid to more or less
[02:19:42] Uh,
[02:19:44] how should I put it? You want to have resources and do all the stuff when it wakes up in the client. You want to be able to do client-side routing and transitions and all the nice stuff. But when you initially render the page,
[02:19:55] probably from a server rendered page. You don't actually want solid to fetch the data.
[02:19:59] Like maybe it's islands, maybe it's coming in through props, maybe you have some...
[02:20:03] serialized data that you do in your framework to do data fetching and you don't
[02:20:07] want solid to handle the data fetching. What's wonderful about solid solution is
[02:20:11] if you embrace it completely,  like Solid Start or Rigidity or whatever...
[02:20:17] the resources just do all the work for you.  Like you just create the resource, it does the fetching on the server,  auto serializes the data across the line,
[02:20:28] And then...
[02:20:30] wakes up, hydration is like, "Oh, okay, there's the data source."  And it does everything and then it updates on change.  And you don't have to do anything.  It just magically automatically works.  This is the other reason why we have resources, because it just connects the server to the...  You don't have to worry about double fetching.  You don't have to worry about serialization.  Everything automatically works.
[02:20:46] But if you have a solution where it's in your benefit to do the fetching out front, like these ones, Solid has parallelized
[02:20:54] data fetching and nested routing. So we generally don't need it for our own solutions, but let's say  you're Fastify and you want to build your own framework around Sol and you want to do the  data fetching or your Astro and it makes sense to do the fetching outside the islands.
[02:21:06] Sometimes you
[02:21:07] not only
[02:21:08] don't want to fetch on the server
[02:21:10] and you don't want to fetch on the client, you just want a way of injecting the data and going like, "It's good."  And the thing is, resources already have something called initial value.
[02:21:19] But initial value is more just a placeholder, like what if you never fetched?
[02:21:24] Or...
[02:21:26] you know,
[02:21:26] and what if or you want something in place before you fetch.  And what we want is something to say, hey, actually don't do the fetching.  And there's ways to do that already. You can already set, like, we took the same convention as SWR,  whereas if your source, like your query, is null or undefined, we just don't fetch.  But it's really awkward to have the server
[02:21:49] not fetch and then the client not fetching like well no actually
[02:21:53] Like where's the data coming from? Like there's this weird
[02:21:56] Like, because the second you actually, you want the source to actually be subscribed to something, you want to go like on this parameter change, update.
[02:22:04] So, people have been doing weird hacky stuff where they do an isServerCheck and then they create a signal on the server and then they create a resource on the client and they set it false and add all the conditions. I was just like, "Oh man, this is nasty."
[02:22:18] What we do now is we can say when you
[02:22:21] Set
[02:22:22] set up your resource, you can just go like, tell me where I initially want to load that data from. Is it from a fetch on the server? Or is it from this initial value blob?
[02:22:30] And because it's part of the SSR process, it's not going to refetch on the client regardless.  But this will tell the server, like, "Hey, don't serialize the data.
[02:22:38] it's already in this initial value, which will also be in the client code, obviously.  So you have the ability now
[02:22:45] that the resource...
[02:22:47] data gets serialized however you want, maybe you put on this dot data thing.  And then in the client, when it wakes up, it goes, okay, I'm going to fetch it from there.  But it still runs the source, the reactive part of it, so that it creates the subscription.  It just doesn't do the fetch. And then when the next time that subscription changes, well, then it updates.  And this gets rid of like a whole bunch of custom code these people were writing,  and they can literally just go initial SSR load from initial value.
[02:23:14] yeah this is i said mostly for those kind of framework writers but  this is just it takes away a whole nastiness
[02:23:23] you
[02:23:24] Is this discussion all reflected? It should be merged imminently. I've created a PR. I imagine it's just getting reviewed and it'll be in the docs now. The cool thing about this release, as I already mentioned, is there are some behavior changes.
[02:23:37] and like a couple small things but it's
[02:23:42] It's about the direction more than anything.
[02:23:45] But yeah, for now, use the release docs as docs, but these will be merged.
[02:23:50] very soon.
[02:23:53] Alright, so that's it for resources.
[02:23:56] Let's talk about SSR.
[02:23:58] Okay.
[02:24:00] I'm going to make a quick banner here for myself.
[02:24:05] So
[02:24:06] I spent...
[02:24:08] Yeah
[02:24:09] I spent a lot of time on SSR in this release. A lot of time.
[02:24:14] Uh...
[02:24:16] It's been this continuing cycle. I don't know if
[02:24:20] if everyone probably knows or wants to know the history here,  but when I...
[02:24:24] First created solid, I didn't care a bit about SSR.  Solid's client-side rendering is really fast.  In fact,
[02:24:31] Funny story, I was doing a benchmark with the builder guys and we were all like sitting there and I was trying to figure out why is
[02:24:38] hydration so slow in solid, but the rendering so fast and all this. And actually the answer to the question was solid was server rendering and then completely reclient rendering in this benchmark.
[02:24:48] Um,
[02:24:49] And the funniest thing about it was...
[02:24:52] It wasn't even the slowest...
[02:24:54] it was still faster than most of the frameworks doing twice the work.
[02:24:58] but I
[02:25:00] Again, I was doing a lot of this benchmarking, and that was kind of... part of this was because this kind of picked up the conversation with Builder, and I...
[02:25:12] I finally...
[02:25:14] got to do a bunch of work I wanted to do in a long time.
[02:25:17] and what this comes from is okay at the beginning solid sorry kind of step back in the beginning  with solid we didn't do ssr and then the first version of ssr was really quite bad we put
[02:25:28] The Dom?
[02:25:29] and reactivity.
[02:25:31] Um,
[02:25:33] yeah i don't know if sometimes it's easier to to maybe just write this out okay so version one  next let's get this here
[02:25:41] Just so you can see this kind of progression.
[02:25:43] I don't know if this is value for anyone, but we got we had the Dom
[02:25:47] plus reactivity
[02:25:48] on the server.
[02:25:50] Which...
[02:25:50] don't ever do this. So we had like JS DOM,
[02:25:54] Plus like client
[02:25:57] version of solid, right?
[02:25:58] - Thank you.
[02:26:01] And...
[02:26:03] The reason I wanted to do this was because I had no idea how I could possibly update things after the fact and stitch it all together.
[02:26:10] Um,
[02:26:12] So...
[02:26:12] The first thing I did was like, I was like, okay...
[02:26:15] Let's get rid of the DOM and do a string concat.
[02:26:22] Thank you.
[02:26:26] This is probably like too lengthy.
[02:26:27] So now
[02:26:28] We just have the client version and
[02:26:30] It could do all of this...
[02:26:33] Um,
[02:26:34] stuff and this version
[02:26:36] was okay, but honestly...
[02:26:39] reactivity on the server put us into like
[02:26:42] really slow on benchmarks and stuff. We were as slow as React or Preact or something. And I was like, "I guess, oh, fine." But we were no Marco, we were no Inferno, we were no Svelte or
[02:26:55] view even, like, we weren't in a good place here. And
[02:26:59] I was like, okay, well, what can...
[02:27:01] What can we do differently? Well, and when I did my research,
[02:27:06] What I realized was...
[02:27:09] We didn't need reactivity for synchronous rendering.  So there's a couple different methods.  There's renderToString.
[02:27:17] Right?
[02:27:18] which just runs synchronously. And then
[02:27:23] I created renderToString
[02:27:24] async
[02:27:26] And this is why I need the reactivity because if like some data fetching happened and then it loaded, I needed to be able to update stuff.
[02:27:32] This is where render.stringAsync came in.
[02:27:35] Right. And to be clear, at this point, we already had suspense on the server and stuff. This is like three years ago, but like the mechanism was still kind of similar to what we have now.
[02:27:44] but it was using all this reactivity.
[02:27:48] And
[02:27:49] But it was really slow. So what I ended up doing, I was like, okay, I realized when I joined the Marco team in 2020 that I wanted Render to Stream.
[02:27:57] Okay.
[02:27:58] And
[02:27:59] The problem...
[02:28:01] was like
[02:28:03] I could do a third version here, which was string,
[02:28:08] concat
[02:28:10] plus
[02:28:10] faux
[02:28:13] Like, plus like, Mach.
[02:28:15] functions. What I mean by that is
[02:28:19] I could concatenate strings instead of using a DOM.  And then instead of using signals,  I could literally just return a function that returned a value,  like just fake reactivity.
[02:28:30] And
[02:28:30] Like...
[02:28:32] you can tell that each one of these is like slowest, slow, faster. And when I did this,
[02:28:38] and did a bunch of optimization.  I wrote that article a couple of years ago.  Solid, I came up, solid was the, where was it?  Like medium.
[02:28:45] Uh, sorry.
[02:28:47] Maybe it's easier to go.
[02:28:49] How...
[02:28:50] We...
[02:28:51] I wrote the fastest JavaScript framework.
[02:28:56] There we go, again, yes.
[02:28:59] Um...
[02:29:00] Yeah, you just search on Google, you'll find all my old articles.
[02:29:03] Yeah.
[02:29:04] Um...
[02:29:05] and
[02:29:08] This synchronous approach, anyways, and we're working with this, is eventually what led to the...
[02:29:15] kind of huge performance gains that we had still hold true to this day.  But the problem was it didn't work with render to string async.
[02:29:26] Right?
[02:29:28] So let's see if there's...
[02:29:29] Oh...
[02:29:30] garbage in the chat. Let me change that.
[02:29:35] Okay.
[02:29:40] So essentially I was like,
[02:29:43] I was like, "Oh man, this sucks. I could do this work, but it, you know, okay." So it's like optimal.
[02:29:50] To, uh...
[02:29:52] And then when I looked at Render to Stream...
[02:29:54] I realized something.
[02:29:56] originally. I was like
[02:29:58] because I was like  oh this is
[02:30:00] is going to be poor, right? But what I realized was
[02:30:02] If I didn't
[02:30:04] If I only stream the data,
[02:30:07] but didn't
[02:30:09] But if I rendered the shell synchronously,  the same as rendered a string,  but then only stream the data so nothing like...
[02:30:16] re-rendered or did like
[02:30:18] updated on the server, I could actually
[02:30:21] and this was the revelation around that time, use option three,
[02:30:26] to have super fast streaming and then sync the data over and then have the client render the data after the fact.
[02:30:32] Now, this isn't pure streaming, but it allowed me to basically...
[02:30:37] I...
[02:30:38] have two modes of SSR and two different compilations actually originally.  So essentially, if you wanted rendered a string async, you got the poor version.  Otherwise, you could do the optimal version. And you might be asking, why the hell would you bother with having this poor version? Well, the reason is,
[02:30:54] SSG.
[02:30:56] Thank you.
[02:30:57] Because...
[02:30:58] There's no... I didn't want a browser to do SSG. I needed the whole thing to resolve. So SSG could be slow.
[02:31:05] And then I was telling everyone else, use render to string or render to stream.
[02:31:08] So this is like a really simple way of doing it. Um,  it's different than what we do today, but essentially, um,
[02:31:13] you could basically do that first render where you render the page and render the header and maybe the sidebar.
[02:31:22] then
[02:31:25] Essentially...
[02:31:27] could have like
[02:31:28] Sections
[02:31:30] No, this is black still, sorry.
[02:31:31] could have like sections here where like oh the content like obviously the main content needs to be
[02:31:36] loaded in after
[02:31:38] Right. But maybe even
[02:31:41] the contents of the sidebar,
[02:31:43] could be loaded in
[02:31:44] after and what we would do
[02:31:47] is we client render them.
[02:31:49] Yeah, sorry, SSG is static site generation.
[02:31:54] But my point is, what we do is we render this black shell and then
[02:31:59] after the client, instead of doing, and we'd hydrate it,
[02:32:02] And then
[02:32:04] when we hit these boundaries, which happen to be suspense boundaries,
[02:32:07] we would just always client render the suspense boundaries.
[02:32:11] So replace the fallback with client rendering.
[02:32:14] And this was actually like,
[02:32:15] Pretty performant, pretty...
[02:32:17] pretty easy to do. And it meant that I was pretty happy that we basically had the fastest SSR solution because of
[02:32:24] I could make this assumption.
[02:32:27] But this is a terrible place to be because we had like...
[02:32:29] six different compilation modes and different versions, and it was not fun. So over time, and this is a really long explanation obviously to get to where I'm getting at, we started
[02:32:39] I started merging them with every release, kind of getting them closer. The first thing
[02:32:45] Um,
[02:32:46] And finally, I think around when, when I want to say, around 1.0,
[02:32:52] Um...
[02:32:54] I managed to...
[02:32:56] get rid of reactivity.
[02:32:57] on the server
[02:32:59] Um...
[02:33:02] Like, I got the... First, I was able to get rid of reactivity on the server.
[02:33:08] And then I was able to
[02:33:10] merge the, like have them running on
[02:33:15] like the same compilation.
[02:33:17] And then finally...
[02:33:19] uh,
[02:33:22] around
[02:33:23] Yeah, I guess around 1.3 when I did the new streaming,
[02:33:28] They actually
[02:33:30] share most of the same code
[02:33:32] except
[02:33:33] Um...
[02:33:34] there was specific hooks like in the code like if your async do this if your stream do this
[02:33:39] So there was specific code paths.  I almost had like...
[02:33:43] two versions of everything on the hydration and the server.  It didn't affect hydration that much. For 1.3, I managed,  the big thing that I did with 1.3 was merge the hydration logic.  So the client could hydrate the same, whether it was async or streaming,  but the server still had different paths.
[02:34:02] With 1.5, I finally merged this into the same thing completely. And I mean completely. Like if we go to DOM expressions now,
[02:34:13] Um...
[02:34:14] and you look at the implementation,
[02:34:17] of
[02:34:18] of the
[02:34:20] of the server
[02:34:21] rendered a string here.
[02:34:23] are sort of rendering async.
[02:34:25] It's literally...
[02:34:26] calling render to stream
[02:34:30] and there's a promise. It's like render to stream then. And I actually,  the way I implemented this was use the same render to stream code
[02:34:37] and then added a then. Right now there's like a pipe
[02:34:41] and a pipe two.
[02:34:42] Which is...
[02:34:43] which is how we, uh,
[02:34:45] Like...
[02:34:46] do the difference between node streams and readable streams.
[02:34:49] But what this, I mean, even though I still ship the separate APIs, what we're moving towards here is actually having a single render function on the server, more or less.
[02:35:01] basically...
[02:35:03] basically an async render is just a stream that flushes at the end.  And this is no revelation, that's how React works.
[02:35:12] works too, with their streaming renderer. But it took us a long time to get to this point.
[02:35:18] And...
[02:35:20] the benefits there
[02:35:22] Well, it's not the benefits.  The reason we...  I, like...
[02:35:25] How should I phrase this? The reason I wanted to go here is because these worlds kept on colliding.
[02:35:32] Because...
[02:35:34] in in a
[02:35:36] Okay.
[02:35:37] In a-- let's get back to my scale draw.  In a streaming version,
[02:35:43] Of something.
[02:35:44] you can always know that the shell is going to have streamed at the beginning.  So like when you do like an error boundary,
[02:35:50] If something throws an error later, you just throw it across the network and the client renders the error boundary.
[02:35:56] But...
[02:35:57] And similarly, when you have suspense,
[02:35:59] um you render the client and then as the parts come in you ship the html
[02:36:05] and you insert them.
[02:36:06] Right. And that's like with 1.3, we had the full HTML streaming and that just kind of worked.
[02:36:13] Async
[02:36:15] You do all those insertions on the server. So I had like slightly different code paths because I was like, okay  We need to do a string
[02:36:23] insert rather than flush a script that makes the browser do it.  The same thing with error boundaries.  While these things were separate,  it was a lot of extra code to manage.
[02:36:33] I knew I wanted to put them together, but I was forced to it because we added a feature called defer stream.
[02:36:39] Um...
[02:36:42] .
[02:36:42] I understand.
[02:36:47] We added a feature called DeferStream. I've talked about this before. What DeferStream does is it lets you selectively choose when to do that first flush. You could be like, "Oh, I actually need this sidebar.
[02:37:00] content before I flush.
[02:37:02] the stream. And again, I'm not getting into too much detail. We've done this on a different stream. But essentially, you could select like on the resource go,
[02:37:09] Wait for this one.
[02:37:11] And in that case, you actually do want to do this insert on the server
[02:37:15] instead of in the client. And I
[02:37:18] While I optimize some of those cases, for the most part,
[02:37:21] I did what I always did. Async was the one that took the hit. So essentially
[02:37:26] you know,
[02:37:27] if, like error boundaries always rendered on the client.
[02:37:30] even if they could
[02:37:32] render on the server simply because it's way simpler
[02:37:35] because I have that logic.
[02:37:37] And
[02:37:38] Now that those lines had blurred because of this whole defer stream thing, I knew I needed to come up with a...
[02:37:45] with a...
[02:37:47] a different approach.
[02:37:50] So
[02:37:51] This is what motivated that.
[02:38:02] *laughs*
[02:38:03] I booted this person twice. They're like different people.
[02:38:08] Mm-mm.
[02:38:10] Yeah, and I'm the only person who can do it apparently.
[02:38:13] Anyway, um...
[02:38:15] I guess if I had mods in YouTube or something, I just don't know enough about that.  Anyways, what I'm getting at is these lines very quickly blur.  And with 1.5, we actually now...
[02:38:27] If you defer a stream...
[02:38:29] We'll do the work.
[02:38:30] on the server.
[02:38:31] Always.
[02:38:32] Because that's the same as the work we do if it was async.
[02:38:35] And if...
[02:38:37] If it's streaming, it's working in the way that it has since 1.3.  And what this means is ultimately...
[02:38:43] we've taken what started as like,
[02:38:47] two completely separate systems, separate compilations, separate runtimes, and now have finally merged them into the same routine, the same everything.
[02:38:54] and it's just a spectrum.
[02:38:56] which is really cool because, as I said, it made me
[02:38:59] focus on
[02:39:01] adding more features and being able to improve stuff. Now that we have those guarantees around server rendering, we added on cleanup on the server, which you might think is weird, but we do do render effects on the server, like things to do rendering, so you might need to do a cleanup, like if you hit a branch,
[02:39:16] This came up in Solid Start. What if you set a status code
[02:39:20] on one branch and then
[02:39:22] It fails.
[02:39:23] and it goes to the error boundary, well, then you might want to, like,  unset the status code or the header or the whatever, right?  Like, you know, like the meta tags.
[02:39:32] Because we build this all into the way Solid renders, being able to use the same mechanisms  to clean up makes a lot of sense.
[02:39:39] Um,
[02:39:40] But yeah, I spent a whole bunch of time benchmarking.  I managed to improve the rostering rendering by about...
[02:39:47] 8%
[02:39:49] And I want to give a quick shout out here.
[02:39:54] uh,
[02:39:55] A lot of libraries
[02:39:59] Serialization is a big cost and a big thing. A lot of libraries
[02:40:04] use a library by Rich Harris called devalue.
[02:40:09] Um...
[02:40:10] I don't know if you've ever seen this one.
[02:40:12] devalue. I think even Vue uses it.  devalue rich.
[02:40:17] Harris.
[02:40:18] Um...
[02:40:20] It's very easy.
[02:40:21] to use and it lets you serialize stuff across the wire. You just, you can basically just go devalue this object and then
[02:40:29] inside your
[02:40:30] your script tag, you can literally just like read it in, um, and server rendered. Um, what I ended up doing, um, was
[02:40:40] get a little Marco magic in here.  Dylan...
[02:40:43] from Marco had written his own serializer a couple years ago anticipating Marco 6 and they're still working on it. Their serializer for actual Marco 6 is crazy because of like all the resumable stuff.
[02:40:55] But he gave me access to his repo
[02:41:00] where he wrote his serializer and I mean, we benchmarked it. It's like six times faster than D-Value.
[02:41:06] so
[02:41:08] Even in simple benchmarks I was doing, I was seeing
[02:41:12] like
[02:41:13] two or three times improvements on the overall server rendering speed.  So I am pretty stoked to have to have access to this hot piece of Marco technology.
[02:41:24] So
[02:41:25] I give him credit and whatnot and link back, but he might want to release it at some point so I can give him proper MIT credit and stuff.
[02:41:34] I'm guarding him on MIT. No, seriously, I didn't cover this, but I was doing benchmarking and he
[02:41:41] Yeah.
[02:41:42] I don't know if this is the right time to talk about it. Yeah, it probably is.
[02:41:46] You all might have seen that tweet that I talked about from last week.
[02:41:54] No, no, no. This one.
[02:41:56] The benchmark one where I was showing...
[02:42:01] the numbers from Builder or whatever, this one.
[02:42:04] and I'm just going to talk about this
[02:42:09] talk about this for a moment  this one was a raw rendering one  so it was fine and solid  has a good score and it's very simple it's like a hello world  so like this doesn't show very much
[02:42:19] Solid has a very fast renderer. But...
[02:42:22] Steve?
[02:42:24] backed up a bit and took a more advanced example, and he freaking autocannoned it. And what was noticeable is like Solid was still like top four-ish or whatever in Svelte, and we were kind of all in this kind of range. Like everybody was like at like,
[02:42:39] Like the throughput on them,
[02:42:42] uh...
[02:42:43] was at
[02:42:45] I'm trying to remember what the numbers were.  But I don't remember the scale.  But let's pretend everyone was like 9, 10.
[02:42:52] 10, like I think Svelte and Solider around 12. I think Fresh actually beat us around nine. Quick wasn't in it because they had a bug or something apparently. But, you know, and all the way up to like things like Angular or Next who are around like 16 or 18 or something, right?
[02:43:09] Marco was one.
[02:43:11] Like everybody was like in this range from the tens to the teens and Marco was one.
[02:43:16] Like, like...
[02:43:17] It was just insanely faster. I started looking into it and there's just so many details that you don't realize. Solid might have the fastest string renderer. The actual rendering is the fastest and you're not going to get penalized too hard for how you string render in JavaScript.
[02:43:34] Um, but like,
[02:43:36] I started, like...
[02:43:37] the length of the HTML actually started making more impact on compression. So like how much you serialized or all the overhead. In our case, we're using SolidStart and actually converting to the response request objects that we're doing, where Marco was just using Node directly, had an overhead. That's another thing. And almost
[02:43:59] The meta frameworks have a bunch of unseen overheads that are probably more impactful
[02:44:05] than the rendering that you do with them.
[02:44:08] Like...
[02:44:10] I know from benchmarks how fast solid renders.
[02:44:12] But...
[02:44:13] whether Salt... Salt Start still does decently, but...
[02:44:17] It's only one piece of the puzzle.  And I think we haven't done enough good benchmarking on seeing the whole...
[02:44:24] overhead of the meta frameworks because in a lot of cases the bigger meta frameworks
[02:44:29] Um...
[02:44:30] have
[02:44:31] like,
[02:44:32] like that overhead makes way more of a difference than like how slow react is.
[02:44:36] Anyway.
[02:44:37] Just... just...
[02:44:38] I spend a lot of time in here because one of the benchmarks, I couldn't get the number down in solid and I tried all this stuff and I changed the asset insertion and like a whole bunch of things. But we got a bunch of performance improvements out of this. They're all measurable. So I'm like happy about that. But
[02:44:54] ultimately, like...
[02:44:57] I...
[02:44:57] inkling out throughput numbers when put into like a real world situation.  So I think,  I think it's,  I think it's interesting.  I said,  I'm proud of where solid start is given,  you know,  how new it is and,  and whatnot.  We're,  we've,  we score pretty well on those benchmarks,  but like,
[02:45:14] You look at something like Marco and you're like almost embarrassed. You're like, like it's just so much faster. Um,
[02:45:20] So,
[02:45:22] You know?
[02:45:24] Sorry, a little tangent, but just kind of...
[02:45:28] talking about the benchmark because you're only as slow as the next bottleneck. Um,
[02:45:33] We're going to do more work here in SolidStar in the beginning, or coming up as we gear up. Right now, it's pretty safe to say when you step out holistically from it, actually SolidStar and SvelteKit are very, they're neck and neck on performance. They're almost identical.
[02:45:50] So,
[02:45:51] Even though some of the benchmarks would suggest that solid is much faster than Svelte, when it comes down to actual holistic benchmarks, I think today we're very, very similar.  Coming out, it slightly had a remix and next and nuxt and Angular universe and all those solutions.  So, yeah, still places to work on. We've optimized some areas, but there's more work to do.
[02:46:12] Anyway, but yeah, that's the thing.
[02:46:16] I did some good work that improved some benchmarks, but we still need to
[02:46:21] really
[02:46:23] engage the whole holistic view of performance.
[02:46:26] on server rendering. And that's why I'm very glad by the work that Steve and Builder are doing there.
[02:46:33] All right.
[02:46:34] Sweet.
[02:46:36] I think that's in on SSR. The cool thing about SSR is you don't have to do anything, it's just faster.
[02:46:40] That's the...
[02:46:42] the key part here
[02:46:44] I think...
[02:46:45] we actually talked about most of the things. There's just like,
[02:46:48] a lot of low-hanging fruit stuff like CSS types.
[02:46:51] now in our types, which improved our JSX type slightly.
[02:46:57] I fixed a bunch of bugs.
[02:47:01] fix that scheduling benchmark someone had made. Someone had a benchmark that showed React was faster, like in current rendering.
[02:47:06] I fixed it so it works in solid.
[02:47:08] Um...
[02:47:09] That's most of 1.5 release, to be fair.
[02:47:13] As I said, it's a bunch of little things.  It took a lot of work and a lot of decisions in the process.
[02:47:21] It just makes the whole overall package just feel a little nicer less places where you're gonna get a
[02:47:26] caught up or stuck. Um,
[02:47:28] Well, I hope at least.
[02:47:30] I still occasionally watch streams when people pick up solid for the first time and don't
[02:47:37] Um,
[02:47:38] look at the docs.
[02:47:39] and then they have a really hard time,
[02:47:41] and
[02:47:42] I still reflect on that a lot, trying to figure out how do we make things easier.
[02:47:46] because that's the last thing anyone wants, you know.
[02:47:50] So...
[02:47:52] Yeah, I...
[02:47:54] I hope that we can avoid that more in the future. There is definitely a balance between giving people
[02:48:01] the right level of control.
[02:48:03] and power to make performance apps and making it
[02:48:08] intuitive to people coming from all different sorts of backgrounds.
[02:48:14] You guys are
[02:48:17] Killing me.
[02:48:18] Yeah, but not only him. I watched a Casadoo stream that was like that too. But yeah, that was the one that was most recently.
[02:48:30] Yeah, and a lot of great stuff's been happening, especially since the Astro release. You know what? Let's shift gears. Unless there's more questions about 1.5, I think it's time to get into this week in JavaScript.
[02:48:43] Um...
[02:48:46] let's get ourselves...
[02:48:49] All ready for that.
[02:48:54] It's funny though, because I actually don't think this week in JavaScript has a ton to do on...
[02:48:59] on my uh
[02:49:02] on...
[02:49:03] my thread. Let me just pull out my notes. Give me a second.
[02:49:09] Everyone still doing good?
[02:49:11] my batching explanation didn't uh... cause your brain to melt
[02:49:16] You still here with me on a Friday afternoon?
[02:49:20] or whatever time it is where you are.
[02:49:22] Alright, yeah, okay, let's clean up a bunch of...
[02:49:24] stuff.
[02:49:34] No.
[02:49:35] No, that's not what I wanted to do.
[02:49:37] Um...
[02:49:41] All right.
[02:49:44] Okay, give me two seconds here.
[02:49:46] All right.
[02:49:47] Thank you.
[02:49:49] Thank you.
[02:49:50] I could do this all off screen but that would ruin half the fun, right?
[02:49:55] Thank you.
[02:49:57] Sweet.
[02:50:00] It's funny, this week in JavaScript for my personal stuff wasn't actually
[02:50:06] a ton of things until like the last couple days when everything kind of started blowing up. But on the
[02:50:14] on the other side,
[02:50:18] And there's been a lot of other conversations that I see are probably...
[02:50:23] worth talking about.
[02:50:26] Let's start that one there. Okay, cool. And there, okay. I'm all set.
[02:50:31] So let's get ready here.
[02:50:34] Yeah, not the afternoon for you. You're a trooper. That's all I gotta say.
[02:50:43] Um...
[02:50:49] Yeah, thanks for that.
[02:50:51] I'm going to start clipping the "This Week in JavaScript" separately. If you notice, I've been doing that recently, how I've been approaching it.
[02:50:57] Um,
[02:50:59] So, um,
[02:51:01] So yeah, I...
[02:51:03] I
[02:51:05] We're gonna be...
[02:51:08] making these
[02:51:09] pieces more accessible in the future. That's my hope.
[02:51:12] I don't think my content really lends to being like clipped 8 billion ways.  If you ever watched Theo stream, he literally just like, he's just like, okay, let's,
[02:51:20] get ourselves situated in these like
[02:51:22] on for like
[02:51:24] 10-15 minutes gets the perfect clip
[02:51:26] Then he's like, okay, what's next, guys?  And he lays out his stream in these segments, and then they just make...
[02:51:33] the perfect YouTube videos. I don't think I'm ever going to be on that kind of thing. All the stuff gets too tied together and in depth, but we can pull out This Week in JavaScript, so that's something I want to do.
[02:51:43] Alright, so let's get that ready.
[02:51:49] All right, it's time to talk about this week in JavaScript.
[02:51:54] Um...
[02:51:56] For me, I have to admit,
[02:51:59] I was detached from a lot of the other conversations that have been going on.
[02:52:05] I've been thinking a lot about the future of Solid, right?
[02:52:09] Solid 1.5 we were gearing up to, which was the theme of the stream today.
[02:52:14] Um...
[02:52:15] and
[02:52:17] Mm.
[02:52:18] I...
[02:52:19] can't think about the future without thinking about
[02:52:22] the problem of hydration and, uh, resumability and, uh,
[02:52:27] I kept on seeing these discussions where people were talking about resumability and like,
[02:52:32] Equivaluating it with like what Quick does.
[02:52:36] And I felt that that wasn't a really accurate
[02:52:39] view of it.
[02:52:41] I wrote an article and the funny thing is
[02:52:44] I had a lot of fun with this one because it's a tough technical problem, but the whole situation is kind of absurd.
[02:52:51] So,
[02:52:52] I hope that came across on this article.  Google apparently didn't like it.  This article did not get picked up by Google search or Android search, which is usually  like my bread and butter.
[02:53:04] maybe they just,
[02:53:04] didn't appreciate the title and stuff,  but,  um,
[02:53:08] What I mean by the situation so absurd is that things like hydration
[02:53:13] in a sense, have no business existing.
[02:53:16] And, um...
[02:53:20] Resumability as a solve for that, sort of, is in the same boat.  And these are also the terms that no one really gets.  Like, I'm sure Mark Daglash knows what hydration is,  but it's still a funny joke because, let's face it, like,
[02:53:35] Hydration makes you think about water and  um
[02:53:38] I mean, there's so many levels on this one.  But essentially, you can read the article to get more details.  But I'm a big...
[02:53:47] I'm very excited by the work that
[02:53:49] Um,
[02:53:51] Mishko and all the guys over at Builder are doing in terms of resumability with Quick. And also the work being done with Marco 6, which is also along that same path.
[02:54:04] and
[02:54:07] I thought it would be worth trying to, yet again, trying
[02:54:12] generalize this because
[02:54:15] I guess I have a slightly different opinion.
[02:54:18] then
[02:54:20] than what's been
[02:54:21] Telegraph so far on this thing. I think there are things about Qwik
[02:54:26] and Quix architecture.
[02:54:27] that make it
[02:54:28] very impossible or very difficult to impossible for other frameworks to replicate. There's a reason why quick is the way that it is and  there's a reason
[02:54:38] Those other frameworks the way they are and they split and
[02:54:41] However, I'm not convinced
[02:54:43] that
[02:54:44] resumability, the actual core resumability part couldn't be applied to other frameworks.
[02:54:50] Which is a...
[02:54:51] is why I'm spending so much time generalizing it.  'Cause I've watched Quik take it one way,  and Marco take it like a completely different way,
[02:54:58] and see that
[02:55:00] There's a huge amount of similarities, but where the common ground is, is enough of an overlap
[02:55:05] that
[02:55:05] it should be possible
[02:55:07] if your framework meets a few criteria.
[02:55:11] And
[02:55:13] That's something that I'm going to probably establish more in the future and write more about. But I just wanted to start establishing the baseline here and the thinking so people can understand exactly what resumability means.
[02:55:26] Um,
[02:55:30] And, um,
[02:55:32] That's why this is important because the work here is important because we do want to get away from hydration. And the key there is getting rid of the runtime components, which if anyone's been following me and solid know that that is what solid does. Solid is not resumable.
[02:55:47] but
[02:55:48] The key part
[02:55:49] to make something resumable is being able to break
[02:55:53] Thank you.
[02:55:54] something that looks like this.
[02:55:57] a part into something that looks like this. And that is, I mentioned earlier about promises and reactivity. That's definitely something you can do with reactivity.
[02:56:05] You just need to be able to serialize it. So yes, this has been all my focus and
[02:56:10] The thing is,
[02:56:11] I think there's multiple ways...
[02:56:13] to approach this um...
[02:56:16] Right.  This, this, what I, what I, I'm about to draw right now, actually, I'm going to slide down  just so I can keep it.
[02:56:23] Um,
[02:56:24] It might not make sense to a lot of people
[02:56:26] But I want to show you
[02:56:31] a sort of path that probably...
[02:56:34] I've been thinking about because
[02:56:38] Yeah.
[02:56:40] This is probably not the path that you think about.
[02:56:44] But...
[02:56:46] Thank you.
[02:56:51] If I'm...
[02:56:58] There's a certain...
[02:56:59] common mindset here in terms of approach,
[02:57:04] And
[02:57:05] It's not about where you fall in this list.
[02:57:09] But it's about understanding...
[02:57:11] the shared heritage
[02:57:14] here and this is an idea that I'm just kind of playing with but I wanted to kind of
[02:57:19] throw out here for you all.
[02:57:22] Because...
[02:57:25] It might give some...
[02:57:27] indicator.
[02:57:29] Here, yeah, I didn't forget view.  View is just not on the same...
[02:57:34] side
[02:57:42] And this, people are probably going to be like,
[02:57:47] offended by this because people are offended by every chart.
[02:57:50] but this is not a philosophy chart like I usually do or values chart this
[02:57:56] is
[02:57:59] This is...
[02:58:02] This is about an implementation
[02:58:04] chart and why
[02:58:07] I'm not...
[02:58:09] I'm not convinced that not all frameworks can
[02:58:14] not do resumability eventually.
[02:58:16] If you follow this.
[02:58:19] The funniest thing is between each generation,
[02:58:22] the people they look at the other side to get influence
[02:58:27] on the solution, it's like this is just kind of something I've been working with here.  But what's what's common about this side, the top side here,
[02:58:34] is that it's like...
[02:58:39] this top down thing.  And to be fair,  quick isn't a perfect representation of an extension of solid.  It's just the best,
[02:58:46] that we can have.  But this is the difference between the fine grained
[02:58:51] And...
[02:58:52] like event based and the difference between the
[02:58:57] the like,
[02:58:58] top-down compiler-centric approach. And to be fair, React is not a compiler, but you have to understand that
[02:59:05] Um...
[02:59:06] And when we get over here, the lines blend enough that I don't know if this is exactly true.  But what I'm trying to get at is, in Angular...
[02:59:14] you had this digest cycle where you made everything dirty and you were re-rendered, essentially.  It could be Backbone, you could put whatever. React added a VDOM that improved on it,
[02:59:23] And it kind of borrowed from the MVM model from Knockout, essentially, of components. Like the idea of making instance-based stuff where Angular had ng-scope, it didn't account for it.
[02:59:36] came from...
[02:59:37] the knockout school, but it borrowed from Angular a lot of the stuff it did for binding and whatnot, right? Like in terms of like how syntax and how what it represented. To be fair, it added a VDOM also from React. So like you can see that it's kind of kind of coming from that side.
[02:59:54] Svelte took that simplicity from view,
[02:59:57] Um,
[02:59:57] but kept a component-based system
[03:00:00] where
[03:00:01] essentially components are what we render. It's not reactive in the
[03:00:07] the more common, like the, like the
[03:00:10] It's not reactive in the way that like reactive systems are reactive.
[03:00:15] And...
[03:00:16] Then...
[03:00:17] Solid, borrowed from React.
[03:00:20] on top of
[03:00:22] view side to take the philosophy. But what it did when it went from here to here is it actually
[03:00:29] further
[03:00:30] granularize the rendering.
[03:00:34] Right? So like there's this like API cross matching while the technology
[03:00:40] of this is going here.
[03:00:43] Yeah, I mean, maybe this end part isn't exactly correct,  because technically Marco is more fine-grained than...
[03:00:50] than quick, but Marco is using
[03:00:53] a compiler
[03:00:54] To basically...
[03:00:56] Like this part is arguable, okay? But what I wanted to get at is
[03:01:01] the way the hoisting
[03:01:04] It's actually possible that I actually have these switched.  It's actually possible that Marco belongs here and Quick belongs here.  These are closer, but that's kind of the point.  We're hitting a potential convergence point here.  And what I'm trying to get at is when I look at Svelte's compiler  and how it influenced how Marco does resumability...
[03:01:24] and I look at how quick serializes reactivity that's similar to solid,
[03:01:28] It's not quite as fleshed out. They still have a VDOM.
[03:01:32] C.
[03:01:33] that
[03:01:35] Like the reason I have this line here is react forget.
[03:01:37] basically could make React into Svelte, right?
[03:01:41] Like...
[03:01:42] It's essentially memoizing
[03:01:44] at all the decision points.
[03:01:45] and View Vapor could make View into Solid.
[03:01:49] Right?
[03:01:51] So how far do we have to go to make solid into quick or svelte into Marco?
[03:01:58] And
[03:02:00] I'm going to argue maybe not that far.
[03:02:04] Right? I mean,
[03:02:07] There is a question here, and that's sort of what I'm looking at here because
[03:02:13] it's harder to do the whole mile.  Like...
[03:02:17] it's very hard to picture React becoming quick.  Like, it's...  But it might not be because they can't do that.  But maybe that, you know, Michiko is very...
[03:02:27] vocal about his generations. Maybe there's already been a generational
[03:02:33] architectural...
[03:02:35] middle ground that's already happened that we just didn't acknowledge, so to speak. And
[03:02:39] It's because these have to leapfrog to
[03:02:42] that it's harder to picture
[03:02:44] you know,
[03:02:50] right so like
[03:02:52] Like...
[03:02:54] It is like when I look at this when I look at quick
[03:02:58] And I look at
[03:02:59] Svelte.
[03:03:00] They seem the closest to being able to do resumability similar to Marco or Quick.
[03:03:06] Right?
[03:03:07] But when I look at what React and Vue are doing, they're
[03:03:10] they're looking at how they can become svelte and solid.
[03:03:13] And at the point that view becomes solid...
[03:03:18] Can it also become quick?
[03:03:20] Like...
[03:03:25] Yeah, I mean, to be fair, these two are so experimental that I don't feel like we've seen their final version. I want...
[03:03:32] Personally, I want to see Quick get more fine-grained
[03:03:34] with this reactivity.
[03:03:36] And I want to see Marco's solution is actually amazing.  I just want to see it actually...
[03:03:41] Um...
[03:03:43] uh,
[03:03:43] I want to see it actually
[03:03:46] come out, right?
[03:03:50] Ha ha!
[03:03:51] There, this is the question you should be asking, right?  Because what do these have in common?
[03:04:00] This has been what I've been struggling with since January.
[03:04:04] and this is what I talked about in the future of SolidStream,  is...
[03:04:08] Are we inevitably forced
[03:04:10] into heavy compilation. Because that's a place that I don't necessarily want to go. But to be fair, the compilation might not be that heavy depending on what the patterns fit. Because like Marco,
[03:04:21] very heavy, like Svelte level, like more than Svelte because Marco cross file and analyzes  everything and knows the whole universe. And it's,
[03:04:29] going to be pretty hard for any framework to come even close to it from a performance optimization standpoint. It's just, it's, especially with Mark Sakes, it's just, it's just so far
[03:04:39] like down that path, it's insane.
[03:04:43] But...
[03:04:44] The question is,
[03:04:48] how composable can we get this
[03:04:51] stuff and quick already has with a dollar sign has already suggested that there's a path there. But I mean, I think it goes beyond that because
[03:05:00] you know, thinking even further in terms of primitives and what that means.  Like even with the server function solid start, I have this feeling of these kind of pieces.  I feel like there might be a place where the compilation can still be reasonable.
[03:05:16] Yes.
[03:05:16] Yes, exactly. And that's what I mean by React becoming Svelte.
[03:05:20] Um,
[03:05:22] Right.
[03:05:23] Like...
[03:05:24] Like you...
[03:05:25] In this view of the world,
[03:05:28] they're just further behind on this curve.
[03:05:33] Right.
[03:05:35] I don't know if everyone can go down this path and it makes sense for them, but...
[03:05:42] Well, it's not a matter of... I don't think so.
[03:05:47] It's...
[03:05:48] is a hydration technique.
[03:05:50] So if
[03:05:51] Partial hydration could be deferred to solid start.  And the whole lazy loading bit, like solid start.  I've had conversations where using solid in quick could maybe be the holy grail of that.
[03:06:02] Thing have solids fine grain with quick stability to slice some stuff up  I think there's still like questions of how big those chunks are  I'm not completely sold as I mentioned multiple times on how big those lazy loaded chunks should be I
[03:06:15] Right?
[03:06:16] But I think it's...
[03:06:19] I think there's still details to work out on the quick side of that, but generally speaking,
[03:06:25] Resumability is just a hydration technique. So if we can come up with
[03:06:29] a compilation that lets us do better hydration
[03:06:32] and better SSR, I think that's something within our wheelhouse.
[03:06:35] orchestrating it, islands, wet lazy loads, all that stuff, that definitely can be separate.  But for me, resumability and why I'm so focused on it is
[03:06:43] actually a core concern.
[03:06:47] Well,
[03:06:48] Astro.
[03:06:49] is, like we were just talking about,
[03:06:53] One of the...
[03:06:55] Orchestrators.
[03:06:56] like Astro is not
[03:06:58] on this chart because Astro
[03:07:00] doesn't worry about any of this, right?  Astro will be like, oh, you want to do this interactive thing.  You can use jQuery or you can use Solid.  Like, Astro doesn't care.
[03:07:11] Um,
[03:07:13] Like they're working on patterns to
[03:07:16] improve the orchestration, like the routing and the islands and stuff.
[03:07:21] The way I see Astro in this picture and why I'm so stoked on people using Astro...
[03:07:27] and with Solid and doing that stuff is like
[03:07:32] Astro makes it really nice to build.
[03:07:34] certain types of sites and content sites and even
[03:07:38] go beyond that astro can get pretty complicated uh there's an example that i  want to probably show on the stream um in a minute but like
[03:07:49] This is...
[03:07:50] Resumability is a core framework concern. So if solid becomes resumable,
[03:07:55] then astro with solid becomes resumable.
[03:07:58] You follow me? So this is just where all this
[03:08:03] thinking goes because...
[03:08:08] you can have resumable islands.
[03:08:09] Resumability is independent of how you slice up the code.
[03:08:12] And I don't think--that's why I wrote the article. I don't think that is understood.
[03:08:17] by most people when they read something because
[03:08:21] It's of no fault. Quick is an amazing solution that takes all the considerations into play and builds the whole thing. And I think that's amazing.
[03:08:30] But, you know...
[03:08:31] It's funny because I'm not a framework agnostic kind of guy.
[03:08:34] But I am definitely like a lessons learned generalist because I like weaving, threading the needle. I like finding
[03:08:42] the path that lets me navigate
[03:08:45] things in a slightly
[03:08:46] more optimal way. And from that perspective where I'm sitting, I'm very,
[03:08:51] curious on what things are rules and which things can be bent.
[03:08:55] So, yeah, I think...
[03:08:57] I think...
[03:08:59] I think Astro and Solid have a long future of being best buds, so to speak, because
[03:09:06] As we improve these core mechanisms,
[03:09:09] And Astro works on their
[03:09:11] you know, ability to orchestrate it to make the best possible content sites and those kind of like that area where they focus on.
[03:09:20] you're going to have the best combination there.
[03:09:22] Salt Start.
[03:09:24] might be able to do the same stuff as Astro. But as I said in a previous stream, like even
[03:09:27] if we were like technically more performant or whatever,  it's not going to attract the same kind of
[03:09:33] thing like
[03:09:34] we're focusing
[03:09:37] on a different sort of experience.
[03:09:40] even as things converge, experience is going to be important.
[03:09:44] Yeah, yeah, yeah. A lot of Astro love here.
[03:09:47] So that's the thing.  The...
[03:09:50] The challenge on that side is that...
[03:09:55] Do the lines between the...
[03:09:59] Meta framework.
[03:10:00] and the...
[03:10:02] like core framework blur when you have to do anything.  The thing that Quik and Marco have in common is  they realize they're like, crap, if we're gonna do this,  no one else is doing this, like Astro isn't,
[03:10:12] bundling the way we need to bundle.
[03:10:14] If you're gonna do this, you end up...
[03:10:17] Um,
[03:10:18] putting all the work in to build the whole infrastructure from end to end because it didn't exist for you at the time.
[03:10:25] And depending on your approach, you can get a
[03:10:29] you know,  you couldn't...
[03:10:31] get in there. Like people asked, or I saw a thread where someone was like, Oh, so quick plus astro and kind of, but you wouldn't get the best out of, like, it just doesn't make sense. You wouldn't necessarily get the best out of quick. Like you could do that in a sense.
[03:10:44] and maybe someone will,
[03:10:46] Um,
[03:10:46] And in a sense, Quik's core experience is more or so, feels more like something like
[03:10:51] Solid start, so maybe Astro from a content side would give that experience thing. But Quick has already completely decided that it's going to handle that part of the puzzle and it's still working hard on that side. Containers, micro frontends, they're doing more work there. They're going to just deliver their solution.
[03:11:07] Marco is a little bit more interesting because now as other frameworks have abilities to bundle stuff in ways that are Marco compatible, I could see them more likely to slide into them.
[03:11:16] the
[03:11:17] the thing with Marco is like the primary use case or like experience is similar enough to Astro that the
[03:11:23] that's probably why they want to integrate because they're like both like
[03:11:26] I'm HTML first, you know.
[03:11:29] So...
[03:11:31] Yeah, there's more nuance and complexity when talking about how these different frameworks come in. But all the ones I put on here are your typical client side single page apps.
[03:11:44] I think,
[03:11:46] I think there's a path forward.  That's all I'm saying.
[03:11:49] Yeah.
[03:11:52] Can you please show a real world example for resumability?
[03:11:55] And this is the thing that I, why I suggest like reading the article, it's every, resumability is good in,
[03:12:02] in theory is good in any case because all it means is
[03:12:07] we don't hydrate. So when the page loads,
[03:12:10] JavaScript.
[03:12:11] doesn't run.
[03:12:12] and then when you interact with it, some stuff runs.  But it has nothing to do with lazy loading. So a real-world example for resumability is literally anything.  That's the problem. It's just like it solves hydration if it successfully does it.  I think we need to measure and understand the trade-offs in serialization, but in theory,
[03:12:28] there is no use case for resumability.  It's just better...
[03:12:31] Period.
[03:12:32] Which is a weird statement to say.
[03:12:38] can presumably have slow numbers.
[03:12:41] Oh, yeah, yeah.  Everyone sees...
[03:12:44] is what I was talking about, that lazy loading thing.  I've done this so many times on stream where people--  I pull up the quick hack and use the example, right?  And I go to look at a story.
[03:12:53] And then...
[03:12:55] Um...
[03:12:56] I...
[03:12:57] I go here.
[03:12:59] And then I go, oh, look.
[03:13:01] slow 3G, and then I click the button,
[03:13:04] And then you're like,
[03:13:09] Oh, there we go.  But the reality of it is, you're going to
[03:13:12] preload that in the background,
[03:13:14] and resumability has nothing to do with this.
[03:13:16] That's what I was trying to say if you read the article.  This lazy loading thing is something that Quick does, and you can always preload.  But you could also just have all this JavaScript to begin with, and it work instantly.  It's--renewability is about not executing code. It has nothing to do with loading code.
[03:13:31] I just I want to make that very clear. This is what people associate with resumability,  this lazy loading. This is not resumability.
[03:13:38] I think this is, I've been trying to shift the message there, and I think Michiko has been recently as well because of this backlash.
[03:13:45] Quick does multiple things that are not resumability.
[03:13:53] Yes, yes, it may never be an awful solution for everything, but will be a great place for other servers to converge and some things.  Yeah, it's a great platform for experimentation to try different things.  And honestly, for its baseline case, it is just so great.  That's why you keep on seeing people using Astro because they're like, they're just like, wow, I just I just grabbed a website and dumped it in.  It just worked. And I'm happy because for a lot of things, that's all you need.
[03:14:23] Yeah, if you watch the stream, we do support stuff like islands and client site navigation with islands. So it's experimental. But yes, Solistar, in theory, technically could do the same stuff. But I think you're underselling Astro if that's the only thing you're looking at.
[03:14:41] Yeah, it's also very easy.
[03:14:44] thing to kind of put out there. I agree completely. Like people are just kind of looking and be like, oh yeah, like this is an easy...
[03:14:50] uh...
[03:14:52] point to me, but the unfortunate thing, and you're going to see this as benchmarks and stuff,
[03:14:57] come out
[03:14:59] Astro is really good for its use case, so not for that.  But for Svelkit...
[03:15:04] is really, really quite good.
[03:15:06] Solid Start is going to be really, really quite good. And I hope that people give it a chance.
[03:15:12] Astro is an easier sell
[03:15:13] But, like, again...
[03:15:15] That's because of the migration story, because maybe you start with your Next.js app, you move to Astro, and you maybe switch to Preact at that time, and you're in a pretty good place. Or maybe you switch to Solid.
[03:15:27] Um, like...
[03:15:29] It's a really nice story that just works really well for a lot of things.
[03:15:36] StreamYard does this automatically. I need to...
[03:15:39] If I'm not careful, I tell it to use my last category and it just keeps on switching it on me.
[03:15:55] Well, yeah, I mean...
[03:15:57] This is why I'm saying that  resumability getting conflated is really  where my concern is.  And the reason I wrote the article, because
[03:16:06] quick
[03:16:07] is resumable, period. You can use the optimizer to decide how it bundles. So you could just say,  like, load all the JavaScript up front, and it just won't execute it.
[03:16:15] And I think...
[03:16:16] Funnily enough, for most of the type of sites where people are making like the head-to-head comparison with Astro or whatever, that's what they should be doing. Like it really, that lazy loading thing is a...
[03:16:26] kind of a cheap parlor trick.
[03:16:29] But this is my own personal feeling. I think with a really
[03:16:32] really
[03:16:35] like
[03:16:36] expensive
[03:16:37] complicated app. Like the thing is, Qwik can scale all the way into SPA mode, like full SPA feeling stuff. If you're going to go there, yeah, you want to be able to slice stuff up like this.
[03:16:47] I think for most people, if they could just be like client load, like the, or whatever, like the way that they mark the islands, that's all they need.
[03:16:54] Like that, that handles like the 90% case, like the Astro thing. I think
[03:16:59] That's... But...
[03:17:01] Resumability, the actual hydration story, that's important. That makes a difference. And that's why I want to draw or separate those lines.
[03:17:11] Thank you.
[03:17:15] Yeah, right. But once you understand that that's the mechanism, you don't
[03:17:20] it's not about what I just showed everyone.  Um,
[03:17:24] with the whole lazy loading thing. It's literally just boot up where you left off. The funny thing is, sometimes with those demos, they kind of get a little overstated because like,
[03:17:36] Yeah.
[03:17:37] any SSR page
[03:17:39] if you copy the HTML boots up like that, I mean,
[03:17:43] Like, because there's a script tag that starts the process, which means if you
[03:17:48] Copy and paste it.
[03:17:49] Like it works. I think the challenge with some of these demos is like there's elements of this that will literally happen
[03:17:58] We need better demos to differentiate the elements of it because you can go, yeah, sure, I can copy this HTML and have it boot up.
[03:18:05] Like...
[03:18:07] I think, because the script tags in the JavaScript are present. So I think the difference also is quick is you don't run the JavaScript, which is what the whole point is and why the rhythm ability is important.
[03:18:25] Yeah, and that's the thing. I'm sorry for anyone who's newer on here. I've been writing articles about this for months and doing streams about this stuff for months. There's a lot of back context that people have been following along, but it was still worth me writing this new article about resumability because of this. So...
[03:18:40] Um...
[03:18:42] Thank you.
[03:18:43] So I think that we need to measure these things and understand the cost.
[03:18:49] - Okay.
[03:18:49] Quick
[03:18:50] brought today, like the status of it right now, is it is
[03:18:54] proves
[03:18:56] the potential that this architecture works. Like there's no gaps
[03:19:00] in the API design or like the cover the base case.  There's probably more things we want to do with it, but it shows like this is a doable thing. But
[03:19:09] the implementation probably still
[03:19:11] needs.
[03:19:11] They've been doing a lot of work now. They're kind of like on the second phase now where they're like, okay, we made it all work, but our server rendering is fine.
[03:19:18] bloody slow, so they just replaced the DOM renderer with a string renderer much faster, right? We saw that in the benchmark. But, you know, still figuring out
[03:19:27] edge cases on server rendering, client performance. These are all areas where they haven't given
[03:19:32] any consideration to and now they're like, okay, now that we've shown it's a thing, can we make it fast? So we're gonna, we're gonna see over the next few months,
[03:19:40] if they can make it fast.
[03:19:42] There's different types of fast.
[03:19:45] Quick has an advantage over almost everything.  But in practice, we don't know that yet.  We need to see the cost of serialization.  Like, is it better to have an app...
[03:19:57] that is 4 kilobytes loaded eagerly with Astro, or one that's 25 kilobytes with Quick, but you didn't load it eagerly.
[03:20:05] Like, there are devils in the details here.
[03:20:08] And I think that's what we're missing today.
[03:20:12] Anyway.
[03:20:14] so
[03:20:16] Yeah, I mean, that's where I started this week.  And this helps you understand why I've been thinking about it. But
[03:20:22] Yeah, this is a good read if you really want to get into the resumable discussion.
[03:20:28] Thank you.
[03:20:30] Okay.
[03:20:31] And
[03:20:32] I'm
[03:20:34] I said for myself...
[03:20:36] I jumped right to the 1.5 stream because there really wasn't much else for me.  But what was happening, interestingly, is
[03:20:44] Solid's been getting a lot...
[03:20:45] more attention the last few days.
[03:20:48] which I like. I've been seeing these great demos, partially because of Astro.
[03:20:52] We got this Tori app thing. I love Nikhil's work on Solid and 3JS.
[03:20:58] But we're just starting to see
[03:21:01] this kind of like
[03:21:03] Um,
[03:21:05] Like, here's the...
[03:21:06] the suspense list and the 10 stack query example or whatever, we're starting to see like how solid can actually integrate into other things, real workflows that people are having.
[03:21:20] Yeah, here's one.
[03:21:22] migrated Zap run to Astro Build with Solid. I gotta say I'm really impressed.
[03:21:26] Right, another great Astro tweet, and why is this not liked? Okay.
[03:21:31] Astros in app mode they actually use client load and it's actually just a solid app on an astro page but because they have that kind of
[03:21:38] flexibility, they could just
[03:21:40] Like...
[03:21:41] Wait, the whole Zap app is Astro now. Well, technically it actually sounds like it's solid, but you can kind of see how these two pieces work
[03:21:49] together really
[03:21:51] really nicely for a lot of situations.  And this has been like, I highlighted a few of these,  but this has been the whole week,
[03:22:02] for me really. Oh, side note, if you saw this, this is pretty cool. It's like a,
[03:22:06] little RPG type stuff where you pick your framework.  And I was absolutely delighted to see Solid showed up on the,  on the list here of eight bit icons. Um, so yeah.
[03:22:17] Yeah.
[03:22:18] Really fun.
[03:22:20] Anyway, yeah, this has all been about 1.5 and thinking for the future for me, but...
[03:22:27] There's more outside of the spectrum of solid and all the great stuff that's been going on with us this week.
[03:22:35] So we probably should...
[03:22:38] should talk about that and a lot
[03:22:40] a lot of it seems
[03:22:42] to
[03:22:44] come down to this
[03:22:47] framework wars. I don't know what else to call it. The JavaScript runtime
[03:22:52] Uh...
[03:22:53] side of things is heating up
[03:22:56] big time. And as I said, last stream I was caught a little bit off guard
[03:23:00] when people are like, "Oh, did you check out the
[03:23:03] Dino announcement, and I was like, no, I haven't checked out the Dino announcement, and I
[03:23:07] and
[03:23:09] you
[03:23:10] This week had its own share of controversy. Before I get into that though,
[03:23:16] I just want to highlight this because this flew completely under the radar.  I didn't retweet it or anything because I don't know enough about Next, but maybe you've
[03:23:25] people in the stream know about next,  but it,
[03:23:30] the
[03:23:31] Like, let me open this thing, 'cause...
[03:23:33] Like, what is this? 54 likes and 31 retweets for this.
[03:23:38] this thing. But if I understand correctly here,
[03:23:42] Netlify has created their own...
[03:23:46] Next.js Edge runtime is
[03:23:48] that offers a bunch of features that Vercel doesn't.
[03:23:51] Especially things that I would consider
[03:23:54] Like...
[03:23:55] Pretty...
[03:23:58] standard, like being able to like
[03:24:00] you know,
[03:24:01] modify the HTML. I just don't understand what this is about because admittedly,
[03:24:06] When I picked up Purcell...
[03:24:08] with SolidStart, like the day they released Edge functions, I literally just put SolidStart on  for cell Edge streaming and had it working. And I was like, bam, like,
[03:24:16] drop the mic, you know, kind of thing. It was just it was easy. It worked great. I've been working on the build API's, but it sounds like next. Yes, actually doesn't actually leverage
[03:24:24] the edge functions very much at all.
[03:24:26] Um...
[03:24:27] Yeah, I'm very curious to understand this better, because from what I'm reading here,
[03:24:34] This...
[03:24:35] Like if Vercel
[03:24:36] Next doesn't have this, I would be
[03:24:39] I'd actually be compelled to
[03:24:41] pretty... I'm just surprised no one's talking  about this. Maybe there's too much other drama.  But this seems like...
[03:24:48] quite capable.
[03:24:50] It sounds...
[03:24:51] Like...
[03:24:53] just from the way it's saying it sounds like a lot of the edge like lower lower features aren't
[03:24:57] available from inside next and i'm confused by that a little bit so
[03:25:01] Hopefully,
[03:25:03] someone actually has more clarity there, but maybe worth...
[03:25:07] people checking out.  This feels...
[03:25:10] very different ways.
[03:25:12] from what I've seen from Netlify and Next in the past where there's always these things like, "Oh,
[03:25:18] Do you support this for self-feature? Do you have ISR? Do you have this? But this is like, Netlify is like mouse.
[03:25:22] Bah!
[03:25:23] Forget that, we're actually just gonna give you features that
[03:25:27] in Next that Fercel doesn't even have.
[03:25:29] Um,
[03:25:30] I don't know.
[03:25:30] Surprised more people aren't talking about this.
[03:25:35] Oh, awesome news.
[03:25:38] the salt side is on 1.1
[03:25:40] Five, one, and the docks are up.  So there you go, everyone.
[03:25:45] So yeah, this is interesting.  Netlify Edge obviously works on Dino.  So I mean, there's obviously some benefit...
[03:25:52] from
[03:25:53] I mean, what's interesting, Vercell's on Cloudflare.  But from my understanding, the way Vercell uses Cloudflare  is a little bit indirect, so there's still some--
[03:26:01] Like...
[03:26:02] I've actually seen this slightly in benchmarks that if you go straight to CloudFlare, it's a little bit more performant.  I haven't seen the same difference when I compared Dino to Netlify Edge, but I feel like I'm not qualified enough to make a full statement on that yet.  I've only played with it...
[03:26:17] cursive, cursive,
[03:26:19] What is it? Like a little bit.
[03:26:22] Okay, so...
[03:26:25] Yeah, but this is only like one thing, right?  I mean...
[03:26:30] We've been...
[03:26:31] We've been seeing like...
[03:26:33] Where is it?
[03:26:35] Yeah, I mean, how can we not talk about what's been going on with Oven?
[03:26:40] or bun or whatever.
[03:26:43] Unsurprisingly to most people in my circle, at least, the oven has raised 7 million
[03:26:51] to basically
[03:26:53] fuel a company built around fun.
[03:26:56] Um...
[03:26:57] So
[03:26:58] This is pretty big.  I...
[03:27:02] Jared is going legitimate, you know, so to speak.
[03:27:06] Although, to be fair...
[03:27:08] Um...
[03:27:09] There is a whole drama around their hiring thing and honestly I
[03:27:14] I'm not going to comment on it because it doesn't have to do with the technology. People can
[03:27:21] people can kind of feel what's comfortable for them. I've overworked
[03:27:25] at startups,
[03:27:26] I don't feel worse off for it.
[03:27:28] But I...
[03:27:29] like it's a choice you have to make, you know, and
[03:27:34] I wouldn't be surprised.
[03:27:36] Even though this is like a
[03:27:38] overwhelmingly negative thing for a lot of people, like in the sense of like,
[03:27:42] the vast majority of people when they see this will go like
[03:27:46] I wouldn't surprise that posting.
[03:27:49] that he did get some exactly what he's looking for so
[03:27:54] So I'm...
[03:27:56] I'm a...
[03:27:57] I'm
[03:27:58] I think the posting might have been a little bit aggressive. You never have the context in Twitter to explain what you mean.
[03:28:04] But I...
[03:28:05] Yeah, I'm.
[03:28:07] this is not my area to comment on. I'm more interested on
[03:28:13] the evolution of how the whole bun
[03:28:17] and Dino thing of the coin, because if we go on Twitter here and we look up
[03:28:23] Dino, because I said last week Dino was like, yeah, we're going to be the fastest.
[03:28:27] Right.
[03:28:28] Straight up.
[03:28:30] and then release this 1.25 release.
[03:28:33] But
[03:28:34] Like...
[03:28:37] Some people are like, "Well, why isn't bun in this benchmark?" for example, and then
[03:28:42] There's some shots fired going here.
[03:28:45] Um...
[03:28:46] Basically, yeah, correctness is important for datemates. We're comparing production software, not demos, right?
[03:28:52] There...
[03:28:53] At some point,
[03:28:55] I think there's going to be a...  I think it looks like...
[03:28:58] Unfortunately, I mean, we're going to see a little bit of
[03:29:02] fighting past each other like
[03:29:05] Yeah.
[03:29:06] I like when there's a focus on performance.
[03:29:10] always kind of
[03:29:12] concerned when
[03:29:14] Um...
[03:29:19] you know,  like it goes to a place where like,
[03:29:22] And it's hard not to.  Like...
[03:29:24] you almost need like a third party to come in and kind of,
[03:29:28] moderate this whole thing.
[03:29:32] Like...
[03:29:33] we may or may not have just shipped a new experimental HP server that's faster than all the other general PCS web servers, period.
[03:29:41] Okay.
[03:29:44] *laughs*
[03:29:45] You...
[03:29:49] It is.
[03:29:50] I, I, like...
[03:29:52] I think once you get into a game  where you're kind of like posturing over who's the fastest  like as I said just show me the numbers  I'm not
[03:30:00] I can't comment on any of this until we see some numbers.
[03:30:06] So, yeah, I think that...
[03:30:11] I'm hoping there's some good competition here and that drives people to make a better platform.
[03:30:19] I am cons--
[03:30:20] I do see a bit of...
[03:30:21] already aggressive jabs kind of going back and forth. So let's hope that curbs out. Um,
[03:30:28] is all I'm gonna say about this for now.
[03:30:32] I
[03:30:33] I...
[03:30:34] It's tricky because
[03:30:37] you have companies that are funded and
[03:30:40] And like
[03:30:42] that are
[03:30:44] you know
[03:30:45] mission driven and they're trying to like, they're like, we have to be the best. And there's this like,
[03:30:50] kind of
[03:30:52] tension there, right?
[03:30:53] And
[03:30:54] It makes me sad sometimes because
[03:30:57] you know,
[03:30:58] Then I see stuff like this, which is, again, kind of a continuation of the Lovefest from last week, where we had 11D and Astro.
[03:31:06] Um,
[03:31:06] We got Quick and Astro here. I think they're at some conference in Zurich or something, and both of them have been posting how much fun they had with each other, comparing notes, talking about the different ways they can improve performance for page loads. I saw Nate did a whole thing where he was like,
[03:31:24] Resumability blew my mind. You know, I just love
[03:31:28] uh... you know
[03:31:30] seeing this other side of it, which is very far removed from
[03:31:35] Like,
[03:31:37] The...
[03:31:38] the
[03:31:39] Yeah, it's interesting because both of these companies actually
[03:31:42] our companies as well. So it's not like this is completely removed from the VC side of things. It's just, it just, it has a very different feel
[03:31:50] than some of the conflicts that we've seen in the past few weeks.
[03:31:54] Thank you.
[03:31:55] Right. I think the thing with
[03:31:57] on this side is on the Astro and the Quick Marco side. We're at a point where we're building the benchmarks together because we're carving out new ground and we're showing what the performance can be. I don't know if it gets competitive at a certain point, but right now we don't even have the way of measuring it. So this is all just...
[03:32:13] Like...
[03:32:14] We know
[03:32:15] that we should have an advantage over the incumbents.  So like we're doing work to that,
[03:32:19] that can showcase it and,  and,
[03:32:22] better understand so we can improve because that's what our goal is. I'm hoping that kind of improvement is the goal that comes out of this whole Dino bun thing and it's not just like who can post the fastest numbers this week.
[03:32:35] Um...
[03:32:39] Okay.
[03:32:39] Yeah, I, you know what I mean? It's just,
[03:32:43] Yeah, I...
[03:32:45] - Ready?
[03:32:45] Yeah.
[03:32:46] I'm looking forward to that.
[03:32:49] I did actually pick up this tweet.
[03:32:52] Um,
[03:32:53] not to do with JavaScript, but just something for people to think about, because I will have to admit,
[03:33:00] The deletion of tweets on Twitter, um,
[03:33:02] bug me a lot.
[03:33:05] because as someone...  Because you don't have the source of thing to reference from.  And since I was involved with a scuffle here recently,  I actually...
[03:33:13] feel like maybe it's worth a comment or two in here.
[03:33:17] There are a lot of situations where it's good to delete a tweet. Yeah. Um,
[03:33:22] It's spreading information due to misunderstanding or situation change.
[03:33:25] It's being misinterpreted. Your position changed. It's causing harm. You think better of it. You want to.
[03:33:30] Honestly, it's causing harm is the only thing on this list that I think is
[03:33:34] probably a legitimate thing. If your position changed,
[03:33:38] I guess I wonder if it's a different problem when you're like a different scale.  Like if you have someone with 100,000 followers, you never get to correct what you've said on the Internet.  Someone will...
[03:33:46] quote you
[03:33:47] on something that you don't even believe in anymore.
[03:33:50] Um,
[03:33:51] Like something that you...
[03:33:53] like literally could have changed your mind on it the same that same day you posted it.
[03:33:59] And it's there forever. So
[03:34:02] I...
[03:34:04] I do wonder if
[03:34:06] It's easy for someone who doesn't have that same kind of following to just go like, "Oh, I stand by what I say."
[03:34:12] Um,
[03:34:14] So, yeah, I think it's interesting to say it at least.
[03:34:19] I do.
[03:34:20] like that Kent is addressing it though, because this did get a lot of flack from people.
[03:34:24] and understandably so
[03:34:27] Um,
[03:34:28] Yeah, I don't know. I think this is an interesting...
[03:34:31] thought experiment.  And I think...
[03:34:33] understanding the scope of your influence and being conscious of it is part of this. In a sense, Kent would know better than me or anyone because
[03:34:40] He...
[03:34:41] He...
[03:34:43] he has that kind of
[03:34:44] push your thing. You've got almost 200,000 followers.
[03:34:48] Um,
[03:34:52] Right  Like
[03:34:55] And some of these lines are pretty arbitrary. Like, "it's causing harm" could mean
[03:34:58] could be in lots of ways, you know.
[03:35:00] Um,
[03:35:02] So,
[03:35:02] Yeah, I think it's interesting.  And then there's a question  if there should be a memorandum on deletion.  Like, even if you would delete,  should you leave it around for a week or something?  Like...
[03:35:16] I don't know. I think...
[03:35:19] I think this is an interesting...
[03:35:22] Question note. The best we can do is hope to post something that we would never delete.
[03:35:26] Um...
[03:35:28] - Yeah.
[03:35:29] That's worked for me so far.
[03:35:31] But, um...
[03:35:33] I don't know if...  Maybe there's a future where that isn't the case.  So, anyways.  It's just a...
[03:35:38] It's interesting, something to reflect on.  I'm glad that they addressed it head on, at least,  because this was kind of a criticism.
[03:35:45] Um...
[03:35:47] Oh, I didn't talk about...
[03:35:49] I got off Bunn without talking about the last thing that I thought was really cool about Bunn. We'll sneak it in here.  "While standard web APIs are great for compat, React is designed to be compiled for multiple host environments. We don't mind maintaining special builds for specific host environments to maximize performance."
[03:36:03] I thought this was really cool because
[03:36:05] Jared has come up with a way to make reacts
[03:36:09] stream rendering faster on Bun. And he said it would work for Solid, which I'm pretty stoked about. And
[03:36:14] Seb is like, yeah, you know what?
[03:36:16] you come up with something for your platform,
[03:36:18] like
[03:36:20] will build towards that.  And I think it makes sense from like,  we see this in meta frameworks with like the adapters,  but it's interesting about this kind of thinking in core.  And I'm glad...
[03:36:30] that this is the thinking.
[03:36:37] So, yeah.  Um...
[03:36:44] Alright.
[03:36:45] Yeah, uh...
[03:36:47] Let's see, where was I? Do-do-do-do-do.
[03:36:50] I guess
[03:36:52] Is there only one other big topic for this week in JavaScript?
[03:36:56] I want to talk about
[03:36:59] routing.
[03:37:00] because I love routing and
[03:37:03] It came up again.
[03:37:05] Thanks Theo for this one. Svelte's been proposing
[03:37:09] a new
[03:37:12] a new router, and it's been kind of controversial.
[03:37:16] and
[03:37:18] Yeah, I don't even think I have it up anymore. Let me see if I can grab...
[03:37:23] The discussion, like, just new, hot off the press this week...
[03:37:26] Um,
[03:37:27] making huge strides here
[03:37:30] in terms of what the ideal way...
[03:37:34] the structure stuff is. And
[03:37:36] A lot of people when they see this are just like, "What is going on?"
[03:37:40] on
[03:37:41] But...
[03:37:42] I...
[03:37:42] I think this is worth a review by pretty much...
[03:37:46] everyone who's kind of in this space because
[03:37:50] I think that on the routing side,
[03:37:54] There's actually a few
[03:37:59] in terms of these file system running...
[03:38:01] solutions. I mean, the first consideration is whether you should be file system running at all.
[03:38:06] Um...
[03:38:08] And
[03:38:09] To be fair,
[03:38:18] there's obviously that first level
[03:38:22] Um...
[03:38:23] Where people are like...
[03:38:25] Well...
[03:38:26] Um...
[03:38:30] How should I put this? They're like...
[03:38:32] See, I put a little bigger.
[03:38:35] where you're like, "Yeah, I just don't like file system writing."  But I mean actually at a more granular level as well.
[03:38:40] Should...
[03:38:41] APIs we file system routing versus pages.
[03:38:44] Should actions be file system
[03:38:46] Routing alongside with routers.  Like, there's a whole...
[03:38:50] question of
[03:38:51] what the split is and you know
[03:38:54] Even like...
[03:38:55] depending on the frameworks that they're single file components, where the different pieces of the routing story get
[03:39:01] situated because you immediately have this question of like,
[03:39:06] I guess the second question, which is,
[03:39:09] how should you split the files, right? Like, should it all go in one file? Should it go in
[03:39:16] in multiple files. And once you start kind of like going through the degrees of this decision matrix here, I think you start realizing what RichSys has
[03:39:25] Um...
[03:39:26] Um...
[03:39:28] has maybe some more legs to it than you might have thought, right?
[03:39:32] Because...
[03:39:34] This makes a huge difference. If your routing setup pushes you to have lots of files,
[03:39:39] Then it can look really nasty and
[03:39:42] Like, I think...
[03:39:43] I think...
[03:39:44] Where is it here?
[03:39:47] No, it's not a reply to this one. I saw an example where it's like,
[03:39:55] The old version of Svelte Routing versus the new version is like...  The new version is like a thousand times better.  They've gone to a really nasty place.  And this is actually...
[03:40:05] way better but you look at these pluses and you're like why are there pluses well it's because he wants to indicate
[03:40:10] when you have multiple files that these are
[03:40:14] pages or things that
[03:40:16] need to be added as routes versus not because once you go multi-file
[03:40:20] putting things as not, like, you hit an inflection point
[03:40:25] between like
[03:40:27] What...
[03:40:29] What is part of the route versus what is...
[03:40:32] like not part of the route, right? Like, like, like should be
[03:40:37] bundled in and this plus says like it's opt-in instead of the the usual opt-out so i think this  is actually really interesting i like these uses of shadow routes like this remix and solid start  have this but they use underscores but i i don't know i like the aesthetic of it so it's kind of
[03:40:54] The page versus layout thing
[03:40:57] though almost prices you more into the plus thing because suddenly
[03:41:01] you now have
[03:41:03] more files right off the bat so the i think that the the first the the next question here
[03:41:08] is should your nested routing
[03:41:10] B.
[03:41:11] Explicit?
[03:41:14] like that, you know, pages,
[03:41:16] Layouts.
[03:41:18] Or should it be
[03:41:21] Shout out.
[03:41:22] And by that, it's the thing that Nux does and Remix and this all start to do.  Whereas if you have a file, the same name as the folder, then the folder is the children.
[03:41:32] Right?
[03:41:34] and
[03:41:35] Um...
[03:41:37] Yeah, you can start seeing how these decisions start chaining into each other.
[03:41:43] Right.
[03:41:43] So, like, it was funny.  I took...
[03:41:46] I took the really crazy...
[03:41:48] Svelte version.
[03:41:50] that this guy posted. I don't have an example of, sorry, I don't have it at the moment, I'm not going to dig it out.  And then he had converted it to the new Svelte router, which was like half the size, and then I converted it to solid and it was even smaller.
[03:42:02] and the remix style.  But the thing is, after I showed it to some people,  they looked at it, and they're like, wait,  but I don't know what this does.
[03:42:10] Like, I forget what the rules are for shadowing.
[03:42:13] So like, it's not as simple as just making it shorter  and making it more compact, but there's a question of like,
[03:42:21] explicitness, right? But there's trade-offs. If you have a billion plus pages and plus layouts,
[03:42:25] then like
[03:42:26] Good luck.
[03:42:27] finding which version of the files  or whatever you're using, but
[03:42:32] Yeah.
[03:42:33] Thank you.
[03:42:34] I think this is...
[03:42:39] At minimum, this is kind of
[03:42:42] an interesting topic to go through the decision points on.
[03:42:47] Because
[03:42:48] It might start...
[03:42:51] Yeah, I'm missing the last point, right? What was the last one? After we do Shadowed, it's
[03:42:58] opt
[03:42:59] opt in
[03:43:00] versus opt out.
[03:43:03] you kind of have to run through the whole tree and think about how the scales and i'm
[03:43:07] And...
[03:43:08] I wouldn't be surprised because next
[03:43:10] JS already decided to go explicit with the new routing.
[03:43:15] instead of shadowed, I would not be surprised if they come to
[03:43:20] a lot of the same decisions that SvelteKit does. Because like, just simple consistency things, right? Because
[03:43:25] If you don't put the plus,
[03:43:27] Also, then like...
[03:43:29] Um...
[03:43:32] like it helps indicate what the page is, right?
[03:43:37] Like,
[03:43:38] or the layout is like
[03:43:40] What if you had a rope?
[03:43:41] called
[03:43:42] Layout.
[03:43:44] Right. I mean...
[03:43:46] There's complexity here, but
[03:43:48] Like, this is a...
[03:43:51] I think this is getting bad beats and I think that when we look into this
[03:43:57] further in the future, people are going to be
[03:43:59] kind of surprised that maybe we didn't do things this way before. I'm not convinced completely, but I want to re-evaluate everything along those decision points.
[03:44:07] But I'm not done talking about routing because
[03:44:10] Um,
[03:44:13] The, uh...
[03:44:14] - Thank you.
[03:44:15] There was this really cool demo against Astro in the...
[03:44:20] where
[03:44:21] it's essentially doing these new page transition APIs.  The interesting thing for me is,  page transition APIs don't support MPAs yet,  so they're definitely hacking something to make this look
[03:44:33] the way it does. But I'm still pretty stoked on the prospect here.
[03:44:39] Um...
[03:44:40] because I think that this is kind of illustrating what MPAs could look like in the future, um,  without single page apps. So this might be a world where for
[03:44:51] you know, another place where like maybe you don't need a single page app, right?
[03:44:56] We saw a week or so back, Flamethrower from Fireship talking about doing some client side, kind of turbo-like routing in our solid start stream showed how to do nested server-rendered client routing.
[03:45:12] hybrid, kind of like Turbolinks, but nested. I think we're going to see a lot of cool experimentation here.
[03:45:20] I think examples like this are showing the way. I think the transition ape
[03:45:23] the shared element transition API is probably going to be a big part of this, right?  I talked previously about the generations of frameworks being defined by the routing solution and
[03:45:34] in a sense, we wouldn't have isomorphic
[03:45:37] Uh...
[03:45:38] apps today
[03:45:39] if we didn't have
[03:45:40] Um...
[03:45:43] the history API and push state,  because you wouldn't be able to refresh on a page
[03:45:48] What?
[03:45:48] and have the slash URL because navigating to it would have caused the page reload. To have client side handle the URL bar gave us a
[03:45:57] gave us this ability to have isomark frameworks and that's something the  browser gave us. I feel like shared element transition API is probably
[03:46:04] a big part of what enables the next generation of routing, which means it enables the next generation of frameworks.
[03:46:16] Yeah, but do you know what my understanding is that the single page app mode was behind a flag that MPA hadn't even
[03:46:24] Actually, no, maybe he explains how he does it
[03:46:27] on the stream.
[03:46:30] Um,
[03:46:34] Because that was my understanding at least.
[03:46:40] Since the API doesn't support MPAs at the moment, I need to intercept the route change with navigation to add event lists or navigate to handle the DOM updates.
[03:46:48] Okay, so yeah.
[03:46:57] Yeah.
[03:47:02] - Yeah.
[03:47:03] Yeah, it might be interesting to see how that looks on a slow connection.  One thing that I will point out, though, is presumably you're going to have to fetch for data on a slow connection network.
[03:47:14] anyway
[03:47:15] so
[03:47:16] I wonder how different this would look like from like, say, concurrent suspense,
[03:47:21] type,  uh,
[03:47:23] situation where you basically...
[03:47:25] hold the current page and then swoop into the next page as it finishes.  It would be interesting to see.
[03:47:32] To be fair to date
[03:47:35] client side HTML swaps have been
[03:47:38] felt slower than client render.
[03:47:41] So I don't know. I think that you're right. It's worth checking out.
[03:47:45] But yeah, this is interesting stuff regardless.
[03:47:51] Um,
[03:47:52] And...
[03:47:54] I just kind of wanted to talk about that and kind of showcase it.  The last thing I want to talk about routing was...
[03:48:00] Going back to this question where we're like, should we file system route? And probably the biggest reason not to is the TypeScript side of it.
[03:48:07] And I know people have been looking into it.
[03:48:10] Tanner has made it very clear that he's very interested in React location, having full ZOD-type scriptability on the query parameters, like on every piece of it. And file system routing...
[03:48:21] makes that...
[03:48:24] Challenging.
[03:48:25] To say the least.  I'm sorry.  Just going to...
[03:48:28] Um...
[03:48:29] And
[03:48:31] I think...
[03:48:33] there are actually only limited options that you can do there
[03:48:37] Um...
[03:48:40] I...
[03:48:41] I would love...
[03:48:42] to see
[03:48:43] away
[03:48:45] that we can get
[03:48:47] Yeah, it's a hard balance because...
[03:48:50] The file system routing is becoming more and more prevalent and important as we continue to add loaders and actions and more
[03:48:58] pieces that can integrate into the routing story.
[03:49:01] wiring it up is...
[03:49:04] Honestly, a lot.
[03:49:06] Um...
[03:49:07] and
[03:49:08] It's just...
[03:49:12] But on the other hand,
[03:49:16] There is this desire for this TypeScript ability, and I...
[03:49:22] As I had mentioned...
[03:49:25] Like,
[03:49:26] There are other solutions that people are looking at.  Someone has this code generator.  Again, I don't know if this is my favorite approach,  but it parses all your remix loaders and actions and automatically documents
[03:49:37] and it's all typings per each route.
[03:49:39] Right?
[03:49:39] That's,
[03:49:40] That's interesting.
[03:49:41] I think there's solutions I'm hoping with compilers to actually...
[03:49:46] get us there because
[03:49:48] Well, I'm not going to push anyone to file system routing, and I'm not saying file system writing is the best.
[03:49:52] It has
[03:49:54] that
[03:49:56] low effort launch point.
[03:49:58] that
[03:49:59] is essential, I think, for
[03:50:01] you know, the HTML first content
[03:50:03] built side like I think
[03:50:05] if frameworks that are more like
[03:50:07] JavaScript-y, did JavaScript routes, no one would make as big of a deal out of it, but
[03:50:13] It kind of takes away a little bit from that like, oh, I just have some HTML file feels for stuff that
[03:50:19] feels more static and I don't think
[03:50:23] I don't like that we have to choose.
[03:50:25] Right. And as usual, if TypeScript makes me have to choose,
[03:50:30] Like...
[03:50:31] I'm going to brute force them side because that's what it comes down to.
[03:50:36] Um...
[03:50:39] Right. It's the same kind of question of like,
[03:50:42] Should uh
[03:50:44] Should TypeScript dictate your APIs or should TypeScript work for you?
[03:50:50] Anyway.
[03:50:53] Alright.
[03:51:08] Anyway, I think that's...
[03:51:10] That's mostly it.
[03:51:13] As I said, this week in JavaScript,
[03:51:17] was
[03:51:19] Maybe...
[03:51:20] I kind of wish there was more releases, but I, you know, and more new things to talk about.
[03:51:25] The stuff like the Netlify stuff and the Dino stuff, like the announcements were made, but I haven't seen as much chatter.
[03:51:32] But I'm still stoked to see all the new Astro projects coming to fruition this week, seeing awesome demos like this.
[03:51:39] So...
[03:51:41] Hopefully we can keep things positive into the next week.
[03:51:45] And, uh...
[03:51:47] And have another good week in JavaScript.
[03:51:50] So,
[03:51:51] Till next time.
[03:51:55] All right.
[03:51:56] I'm going to go.
[03:51:57] *sad music*
[03:52:01] How's everyone doing?
[03:52:04] Thank you.
[03:52:06] Thank you.
[03:52:06] Uh...
[03:52:11] It is hot where I am.  Um...
[03:52:15] It is definitely hot.
[03:52:18] Yeah, no, we've been going now for almost four hours.
[03:52:28] So.
[03:52:29] Um...
[03:52:31] I think...
[03:52:33] I think we've pretty much covered it, right? Talked about Solid 1.5, talked about this week in JavaScript and some of the stuff that's been going on.
[03:52:43] I don't think there's any sneaky benchmarks or
[03:52:47] hidden Dino announcements that I missed this time, but what do I know?
[03:52:51] Um...
[03:52:52] And it seems like the--
[03:52:54] the stream's kind of chilled down so i don't know if there's nothing else i think we call it
[03:53:00] Ryan, any thoughts on solid start timing?
[03:53:02] to do a beta release.
[03:53:04] Yeah.
[03:53:05] I've been working on 1.5 because those features are key. I am now literally working on
[03:53:11] the last
[03:53:13] Two features that I care about on solid start.
[03:53:18] which is, uh,
[03:53:20] we're doing a little more work on the action.
[03:53:22] API?
[03:53:24] It's good, but I feel like we can do better.
[03:53:27] It's just clunkiness that's inherent to using forms everywhere. And I want to smooth that out a bit. I mean, it's not
[03:53:35] It is the trade-off.
[03:53:36] And it has other places where it
[03:53:38] alleviates things, but I feel like there's still room. I want to review the routing. I think Rich Harris stuff was important. But yeah, this is all kind of implementation stuff. And then, yeah, I mean, it's just switch to docs and see if we can get the release out.
[03:53:55] We'll have hopefully a more stable, usable version even before the docs come out.  And that's what I'm focusing on the next few days.
[03:54:03] Um,
[03:54:07] So I think
[03:54:09] I think  I'm
[03:54:13] I'm hoping that
[03:54:16] we can get the beta release out in the,  uh,  towards the end of September.  Um,  maybe,  maybe,
[03:54:21] Maybe when I come back from Finland, I'll be speaking at React Finland.
[03:54:25] Um...
[03:54:26] September 15th.
[03:54:29] So, got a lot of work ahead though. Like when I did
[03:54:33] we're going to have to find the right level of balance.  It took me six weeks to do...
[03:54:37] the solid docks originally. And I feel like we've raised the bar every time that people  will expect more out of their docks. Um, and that's probably what's going to,
[03:54:47] push things back. But again, this is just a beta release. So as long as we have some stuff
[03:54:52] you know, and make that clear, I think it's okay that the docs remain a bit of a work in progress, but we need to cover the key parts.
[03:54:59] So,
[03:55:00] That's what I'm looking at next.  Solid Start is...  Now that 1.5 is out,  Solid Start becomes more of the focus again.  We got the pieces we need to...
[03:55:10] to get beta out the door so
[03:55:11] That's what you have to look forward to. In terms of the stream,
[03:55:17] I'm hoping Dylan Piercy from Marco
[03:55:20] um
[03:55:21] will join me if not next week.
[03:55:25] possibly the week after to talk about what it takes to make a language, like a TypeScript language server,
[03:55:31] If someone asked earlier, like,
[03:55:33] What if we could just
[03:55:36] you know,
[03:55:37] use solid and build something like Svelte on top of it. I'm like, yeah, I mean, people have done that. But if you actually want
[03:55:43] to get the full benefit there,  you have to do work.  And Dylan's done this for Marco and Marco six coming out.  And,  um,  I think it'd be great to talk to him to understand,  um,
[03:55:51] what it takes to really make your own language
[03:55:55] in a JavaScript framework.
[03:55:57] So...
[03:56:00] Yeah, I think that's what we have to look forward to.
[03:56:05] I said some great talks coming up.  I'm really stoked for Finland.  I'm stoked for beat conf.
[03:56:10] Um...
[03:56:11] So many conferences coming up, Jamstack, Conf,
[03:56:16] Thank you.
[03:56:17] JavaScript days with JetBrains. I could go on. There's something every week. JS
[03:56:23] JSConf Poland, I think. I'll see how that goes. So yeah, there's just a lot of really great things coming up. So
[03:56:31] uh front-end masters actually uh plan is to do front-end masters um first week in november so um
[03:56:39] Yeah, a lot of really good content coming. Some more beginner focused content, hopefully. Today's stream was all about all the advanced stuff.
[03:56:48] But, you know,
[03:56:49] This is all part of the pieces that go into building
[03:56:52] Um...
[03:56:53] of.
[03:56:54] performant, powerful UI framework.
[03:56:58] Alright, well...
[03:56:59] A lot of you stayed all the way to the end today, so that's awesome.
[03:57:03] So,
[03:57:04] Um...
[03:57:05] Yeah, let me see here if anyone else is streaming.
[03:57:08] on
[03:57:10] on Twitch, although I'm not really good at this. I don't follow anyone or anything, so unless it's like...
[03:57:15] someone I know that's probably unlikely
[03:57:18] that I...
[03:57:19] Yeah, no.
[03:57:21] I'm not a big Twitch person.  So I think we're just going to wrap up.
[03:57:23] Tonight...
[03:57:24] uh, this afternoon, depending where you are. Um, thanks for joining me. And, uh,
[03:57:29] See you all next week.