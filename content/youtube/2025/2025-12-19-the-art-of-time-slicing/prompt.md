---
title: "YNdrWgWuUOc"
slug: "YNdrWgWuUOc"
duration: "5:59:31"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/YNdrWgWuUOc.m4a"
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
[00:00:02] Thank you.
[00:00:03] all right
[00:00:05] Hello everyone and welcome
[00:00:07] to my stream today. Um, yeah, we're talking about transitions again. Um, come say, um,
[00:00:14] Hi in the chat.
[00:00:16] Once you're here,
[00:00:17] Um...
[00:00:19] But,
[00:00:21] I wanted to get
[00:00:23] down today into the real
[00:00:27] like what are we actually technically solving here like how does it work i want to get a little bit  deeper we do a lot of scaladra i imagine um but yeah this should be fun let me just get
[00:00:38] some stuff opened and set up here, but
[00:00:43] So
[00:00:45] This is kind of the next logical place where I'd end up. If you watched any of my last stream where I talked about async signals,
[00:00:52] I've been I've been kind of hovering around this whole transition topic and implicit versus explicit transitions and
[00:01:02] even if you go back to the very, very first demos done earlier,
[00:01:07] around React 16.
[00:01:10] They were looking at
[00:01:11] this feature from two different angles.
[00:01:15] I want to...
[00:01:17] look at those and I want to look specifically at the demos and examples that have been put on and  talk about what's good and what's
[00:01:22] not good. And like, as I said, approach these from like a general engineering standpoint, like forget transitions exist. What, how would you approach this? All right. Um, yeah. Hey.
[00:01:36] Hi everyone. Yeah, this is also going to be my last stream of this year.
[00:01:43] Um...
[00:01:45] So,
[00:01:46] I know some people probably have already gone on break, but...
[00:01:51] Thank you.
[00:01:51] I think there's going to be some interesting content here.
[00:01:58] Yeah.
[00:02:00] Let's see here. I'm going to get
[00:02:02] Twitch chat open too.
[00:02:07] Uh.
[00:02:10] Thank you.
[00:02:12] Thank you.
[00:02:15] Yeah, okay, there we go. Good. Yeah, okay.
[00:02:18] Yeah, Stern.
[00:02:21] Eh...
[00:02:24] Thank you.
[00:02:25] Yeah, I actually think I started on time today, which is the first time in a while.
[00:02:31] But just give people a couple more minutes to kind of start on but
[00:02:39] Where I've spent a lot of my time talking about transitions, I've been talking about
[00:02:45] one side of the two.
[00:02:49] pieces i've been talking about what the the reacting called the io side i've been talking  about parallelizing you know like the tab demo when you go back and forth and
[00:02:59] Um...
[00:03:01] Thank you.
[00:03:04] I, uh, let me put this...
[00:03:07] Today, I want to look at the CPU side a little bit because we never really, really focus on that. And I think
[00:03:15] Yes, the CPU side.
[00:03:17] um,
[00:03:18] is less important, but you got to kind of understand what the problem is.
[00:03:23] is solving and these topics often get kind of wrapped up together.
[00:03:27] Um, like you can have what I consider transitions without time slicing.  Like you can put them separate.  For me...
[00:03:35] Transitions is like more of a general envelope talking about this a way of tangling almost transactionally async work.
[00:03:45] And for me, time slicing is specifically the preemptive scheduling around this.
[00:03:54] And
[00:03:56] You don't need
[00:03:58] to have interruptive or preemptive scheduling to to be concurrent right you can just like you you  you need scheduling to a degree but you you can be like okay
[00:04:08] I'm going to run this here and then run this here.
[00:04:11] You don't need to be like, okay, something new came in, I need to interrupt it.
[00:04:17] you can just lay the stuff out, you know,
[00:04:21] like finish the current stuff you're working on,
[00:04:23] schedule some, you know, transition quote work, and then, you know,
[00:04:28] run it at the appropriate times without necessarily ever interrupting anything.
[00:04:32] So why time slicing? And what is time slicing? How does it actually work?
[00:04:38] As I said, I think...
[00:04:40] We're going to look at those demos today.
[00:04:42] And we're going to look at...
[00:04:45] what makes them good or what makes them not good.
[00:04:47] But I think first we probably should get started here is we should get into talking a little bit about the JavaScript event loop.
[00:05:00] Thank you.
[00:05:01] Thank you. Yeah, I am having...
[00:05:06] I'm, well, I'm looking forward.  I go on holidays as of, uh,
[00:05:10] Today's my last day and then I'm taking Christmas, so look forward to that.
[00:05:15] Yes.
[00:05:16] Thank you. And yeah, I'm going to put this right at the beginning.
[00:05:20] If you like the content of this video, I know that's too early already, but please like and subscribe.  By the end of the stream, if I say this, not as many people are going to see it.  So it does help the channel a lot, you know, getting more views.  If people actually, you know, go and like and subscribe.  If you're here right now, you know you're going to watch this.  So might as well just, you know.
[00:05:41] go in and hit that like button. It definitely helps, you know.
[00:05:46] Okay, so...
[00:05:49] We definitely let this kind of...
[00:05:52] meander a little bit and let's get started here. I'm going to pull up an Excalibur draw and I'm going to share my screen and we can
[00:06:02] we can talk a little bit about the
[00:06:05] JavaScript event loop.
[00:06:09] I actually need to find a nice spot in my
[00:06:11] I've got like this giant canvas that I've been
[00:06:15] Um...
[00:06:19] um
[00:06:23] Mm-hmm.
[00:06:24] that I've been...
[00:06:27] working on here to throw stuff in. Let's find a space that hasn't been occupied. Okay.
[00:06:36] All right.
[00:06:37] Somewhere over here.
[00:06:40] Thank you.
[00:06:41] Okay, so, um...
[00:06:46] Let's talk a bit about...
[00:06:51] the JavaScript event loop here.
[00:06:53] Yeah, that's good.
[00:06:54] I'm sure most of you are...
[00:06:57] familiar with this, but I think
[00:07:00] it's important for us to like start
[00:07:04] on this topic here because
[00:07:07] it's kind of foundational.  I've,
[00:07:10] There's some great articles out there.
[00:07:14] Um,
[00:07:15] Lydia Hall
[00:07:16] Formerly Brasel, now, Bun, whatever, did a great article explaining how the event loop works.  Or read that probably.  But I've even watched content from, say, like Theo or something where, you know, he's talking about it and trying to explain it.  And he doesn't still quite get it.
[00:07:33] Right. And the reason the JavaScript event loop is...
[00:07:37] Mm.
[00:07:38] really quite powerful, but it is, you know, all the details make it a little bit complicated, um,  how they in, in, in act all together, but they're kind of like this very
[00:07:50] powerful primitive so like anyone who's working on javascript frameworks  is very very um familiar with the event loop because it
[00:07:59] really dictates how we can approach problems.
[00:08:05] Okay, so
[00:08:08] The first thing is,
[00:08:09] JavaScript event loop has actually evolved over time.  Just going to put that out there.
[00:08:15] Because originally...
[00:08:16] You could kind of view it like, um,
[00:08:18] Right? So we can make
[00:08:21] uh what do we want to do here maybe some dotted line but we can just like make this giant queue  we'll make it empty right
[00:08:30] And, you know,
[00:08:32] generally speaking, first in, first out, right? Like, gen, like,
[00:08:37] There's exceptions.
[00:08:39] But...
[00:08:40] you know,
[00:08:42] stuff kind of
[00:08:43] flows down through our queue. Let's remove the reversed arrowhead.
[00:08:51] yeah
[00:08:54] Yeah.
[00:08:56] Stuff kind of flows down through our queue, right?  You put it in, you know, we'll make ourselves a little task
[00:09:04] you know,
[00:09:06] All right.
[00:09:09] Yes.
[00:09:11] Thank you.
[00:09:12] Make yourself a task. Okay, here we go. Task. And as we
[00:09:16] Thank you.
[00:09:17] Go through.
[00:09:20] We add tasks to the queue.
[00:09:23] The first one that goes in is the first one that comes out. Okay?  So this is not like a stack or something. We're just
[00:09:29] And then, you know, I'm just cuing these things on.  Okay.  Add it, comes out.
[00:09:35] And
[00:09:38] Thank you.
[00:09:39] Examples of things that are queued are basically like setTimeout.
[00:09:44] is probably the most
[00:09:45] common one, right? You're running a task, right? Which is just some synchronous execution of JavaScript and you call set timeout and then
[00:09:54] So that's saying, hey, you know, after X number of milliseconds, roughly, it's not a guarantee.  We'll explain that in a minute.  We're just going to add something else.
[00:10:02] and run it at that point. So we just kind of just
[00:10:05] have this running queue, right?  Now, every once in a while between these tasks,  the browser might be like, hey,
[00:10:14] we have our own pass that we want to run.
[00:10:19] Let me see if I grab one of these.
[00:10:23] And the browser might be like, "Hey,
[00:10:25] Um...
[00:10:28] It's a little browser task.
[00:10:32] Thank you.
[00:10:33] I should use a small one. Why am I using Excel here?
[00:10:38] Browser tasks, let's get these smaller.
[00:10:48] Bye.
[00:10:49] Sorry, medium...
[00:10:53] All right.
[00:10:54] Thank you.
[00:10:56] All right.
[00:10:57] So
[00:10:59] you know,
[00:11:01] Because each task has a boundary, we can kind of like insert in
[00:11:07] like there's tasks that we set up and then there's tasks that the browser needs to do like paint or you know
[00:11:14] Run your event handlers, right? Like there's basically
[00:11:18] Bye.
[00:11:19] Mm-hmm.
[00:11:20] There are other tasks other than the ones we create in here.
[00:11:23] But and the important thing is because
[00:11:25] You know each task is a finite length. We're able to just like
[00:11:29] Schedule stuff and keep it going right like this is why you don't do do while loops in  JavaScript for infinity right like there's no this isn't parallel right um
[00:11:39] like this isn't like, you know, go start a sub process kind of thing.  Like you find in languages, you don't block things.
[00:11:47] in JavaScript. You don't hold the execution. You yield to our task queue. Okay.
[00:11:54] Right?
[00:11:55] So I'm pretty sure everyone should be familiar with us with this, you know,
[00:12:00] This is fairly...
[00:12:02] straightforward kind of like basics.  And this is kind of,
[00:12:08] Where...
[00:12:09] Things were through most of the 90s and the 2000s.  And then some stuff happened.
[00:12:19] I guess I should introduce, there's a couple little
[00:12:24] Um,
[00:12:26] caveats here because you guys are familiar with set timeout, right? This is one that just kind of uses a timer. The browser also wants to refresh or
[00:12:36] uh paint right and it tries to do that roughly 60 frames per second so every 16 milliseconds so
[00:12:44] There is like
[00:12:45] I'm just going to kind of talk about a few other things here, right?  We talked about...
[00:12:50] SetTimeout, right? SetTimeout.  Another one you've probably seen is RequestAnimationFrame.
[00:13:00] And requestAnimationFrame
[00:13:03] Basically, because basically every
[00:13:07] So the long let's let's add a dot dot dot.
[00:13:12] here.
[00:13:14] Every so often,
[00:13:17] the browser will want to kind of
[00:13:20] I mean, we'll use this as where it interjected, uh,
[00:13:23] It's browser task, yeah.
[00:13:26] Every so often the browsers
[00:13:28] I'm going to try and
[00:13:30] render the page, right? So setTimeout just kind of sticks it in this stack, you know, as it goes, right? And, you know, based on the milliseconds, like, okay, three milliseconds, zero, we'll try and get it in. But you can tell if there's something already there, it's not gonna run in zero, it might run in one or two or three or whatever. But requestAnimationFrame is like, okay, before the next time we yield to the paint task specifically, which, you know, is another maybe browser task,
[00:13:55] that's going to come up here.
[00:13:57] Um,
[00:13:58] Thank you.
[00:13:59] try and sneak in
[00:14:01] our task, you know,
[00:14:03] Sorry.
[00:14:04] Let's try and sneak in our task before that.  That's what requestAnimationFrame is.  It's like before the next time you paint,
[00:14:12] sneak in a task here, which is a little bit different because you're starting to see that there's kind of like priority.
[00:14:19] If we're getting close to paint,
[00:14:21] And...
[00:14:22] you have a set timeout
[00:14:25] SetTimeout doesn't really care about paint, it might go after.
[00:14:29] our browser paint.  Our request animation frame will try to get in before...
[00:14:35] the next
[00:14:37] one of these yielding tasks, right?  So we're already getting to something a little bit more complicated.
[00:14:44] Whoa, chat's really, really quiet right now.  Is this just because you got, like, I'm covering the basics and you guys are familiar with this?  Or, um...
[00:14:52] or is, um,
[00:14:54] Or if you guys, like, tuned out, you guys gone to sleep.
[00:14:56] Bye.
[00:14:57] Thank you.
[00:14:59] you
[00:15:00] Thank you.
[00:15:02] Thank you.
[00:15:03] Yeah, just sleeping.
[00:15:06] No.
[00:15:08] -
[00:15:11] Thank you.
[00:15:12] All right.
[00:15:18] Yeah, all good. I'm just making sure you're live. Whenever chat's quiet for like five minutes, you know,
[00:15:23] It's like, I got like a little guy around right now.  He's nine months old, you know.  If he's walked out of the room and he's quiet, you know he's into trouble, you know.
[00:15:34] Yeah.
[00:15:35] Not walked, crawled out, yeah. Okay, cool. So...
[00:15:39] - Yeah.
[00:15:40] This is sort of like...
[00:15:42] the fundamentals of like browser based. Then something happened in around 2007 where like Node,
[00:15:50] Came out and people were trying to do like server stuff and they're like I
[00:15:54] We really, really...
[00:15:56] want
[00:15:57] to preempt.
[00:15:58] like insert tasks that happen before other tasks.  And they kind of came up with something called set immediate.  Now set immediate is not
[00:16:06] Part of like, like I think maybe one of the
[00:16:10] browsers like IE or something try to implement, but it's not like JS spec. But the idea,
[00:16:16] Node had it was, I'm in this task right now and I'm running.
[00:16:21] I don't want
[00:16:23] Thank you.
[00:16:25] you know, and someone else has queued some timeouts,  but I actually want to sneak a task in between these two.
[00:16:30] Right? Like...
[00:16:31] Even though these are supposed to kind of
[00:16:33] Yeah, these are supposed to, you know,
[00:16:36] you know, queue and run relatively in order if they're like both setTimeout0.  I want something even faster than setTimeout0 because I want to actually
[00:16:45] Sneak in.
[00:16:46] you know, right in here. I want to sneak in there, right?
[00:16:51] And...
[00:16:52] There's a lot of reason to do that because you do something in your tasks and then you can't run it synchronous.
[00:16:59] but you kind of want to make sure that you get first crack before anyone else does.  That's where, um, set immediate came out. And, um,
[00:17:10] It's...
[00:17:12] *sniff*
[00:17:13] Yeah.
[00:17:14] - Thank you.
[00:17:15] It...
[00:17:17] as it never got standardized.
[00:17:20] But I do want to talk about it because it's important.
[00:17:23] Set immediate...
[00:17:24] is still a task, right? It is taking one of these. It's just trying to jam it in between what was already there, which is important because
[00:17:34] With tasks, there's always that opportunity to be preempted, right?  You know, be like, oh, we're going to do a paint.  You can't interrupt a synchronous task, but you can be like, I can get in front of it.  Right.
[00:17:48] you know,
[00:17:49] But like, generally speaking,
[00:17:52] this was like the first attempt at kind of trying to do this preemptive scheduling. And  it's important because not all
[00:17:59] tasks are equal. We saw the browser doing like a paint task or handling event handlers as not being equal. Another
[00:18:09] Another task that is not equal is
[00:18:13] is window.postMessage. These are faster than setTimeout0.
[00:18:20] For example,
[00:18:22] So there are like, I remember in JavaScript frameworks, a game we used to try to play and you guys can kind of try and answer this yourself, right?  Assuming that there's no set immediate or the closest we have is window.com.
[00:18:38] post message.
[00:18:40] Thank you.
[00:18:40] How, when you do work,
[00:18:43] do you say, do the work after the next paint, right?
[00:18:47] This is kind of an exercise. The answer is actually you set
[00:18:55] two timers because request animation frame gets you right before the paint
[00:19:01] And then if you want to do work after the paint, so you're like, hey, I want this work, but I want it to happen as soon as possible, but let the browser paint.
[00:19:10] what you have to do is say request an animation frame and then do a set timeout  inside the,  the animation frame.  So like,  basically you can view it here is you,  you,  you,
[00:19:20] Our queue is a little busy right now.
[00:19:24] alleviate a bit a bit so
[00:19:27] I'm gonna pull this one out. So what you do is
[00:19:31] You're in your task that's running.
[00:19:32] You go, OK, requestAnimationFrame, which schedules it right here.  And then inside this task, you basically do like,
[00:19:40] setTimeout0 or
[00:19:43] post message set immediate essentially like the soonest you can do it and
[00:19:48] then it will put the task here. And now you have a task as soon as possible
[00:19:53] Um,
[00:19:55] after the paint.
[00:19:58] So there is some kind of
[00:20:01] funny little
[00:20:02] games you end up playing when you kind of play around with the timer but this is kind of like
[00:20:08] What?
[00:20:09] JavaScript scheduling looked like up to about 2012.
[00:20:17] Thank you.
[00:20:19] chat's quiet because it feels
[00:20:21] Feels like the introduction of a lecture. Fair enough. Insert
[00:20:25] Don't be so vicious gif here.
[00:20:27] Timeout 0, yeah, exactly right. So yeah, we use windows.closeMessage instead of setTimeout.
[00:20:33] timeout zero.
[00:20:36] because it's like slightly faster.  But generally this is, if you've ever seen this code,  it's kind of, it's kind of an, you might've seen it around,
[00:20:45] Why was sent immediate not adopted? Well,
[00:20:48] I think it's because of what...
[00:20:51] I think it's partially because the behavior might be a little bit
[00:20:54] ambiguous, um,
[00:20:57] And...
[00:20:57] the problem it was trying to solve
[00:21:01] Um,
[00:21:02] might be better
[00:21:05] solved by the next part I'm going to actually show here. Okay, but that's a good question.
[00:21:09] Let's flip that. Why was set immediate never adopted?
[00:21:18] Yeah, that's right, non-standard Microsoft creation, but it's
[00:21:22] What does AI say?
[00:21:26] Thank you.
[00:21:28] Because major browser distributed Microsoft's proposal eventually into the application in favor of QMicroTask. Yeah. Okay. Yeah.
[00:21:33] But yeah.
[00:21:34] lack of consensus among vendors, web compatibility issues,
[00:21:38] Early attempts to browser engine mix set timeout0 behaved immediately as immediate broke many  existing websites that relied on small none to interpret
[00:21:45] Deterministic delay of set time. Select reluctance to introduce new similar global timer, superior alternatives, which we'll talk about.
[00:21:55] node found a permanent home, but its behavior there is specific to the node event loop.  It's created a split in the JavaScript ecosystem.
[00:22:02] And it's been deprecated. Okay.
[00:22:05] developers are advised to use QMicrotasks for Microtasks or message channel as a polyfill task deferral.  Yeah, so message channel is what I was talking about in terms of post message.  Like, it's close enough, basically...
[00:22:16] people were using set immediate for two use cases and they wanted to be more explicit because
[00:22:22] The example that I was talking about with post message is this one that introduces
[00:22:28] this task, right?
[00:22:30] which is like, "Hey, let's try and sneak a task in between here," so to speak. That's not actually, this is not the right example. It's more like if they were next to each other, like this was a setTimeout0 and I want to sneak a task in between.
[00:22:44] Um,
[00:22:46] Uh,
[00:22:47] but it's still a task because if there's a browser task or something someone could  come and preempt. There's a second case is what if
[00:22:56] You want something to basically be like it's synchronous, so it's not preemptible, right? So...
[00:23:02] And and.
[00:23:03] In order to do that, we need
[00:23:07] a second cue. So, so far we've been talking about
[00:23:11] the
[00:23:12] Thank you.
[00:23:13] I- the- the macro task view, let's call it, okay?
[00:23:20] Now, there's another queue that, to my knowledge, cannot be preempted.
[00:23:24] Right. It doesn't have this like these lines and stuff. And this is
[00:23:31] the micro task queue.
[00:23:36] Thank you.
[00:23:37] And the Microtask queue is,
[00:23:42] Thank you.
[00:23:43] It's another cube.
[00:23:44] Obviously you can just queue your tasks in here.
[00:23:48] The difference with the Microtask queue
[00:23:51] is that
[00:23:54] Thank you.
[00:23:55] before the browser will go to the next task,  it doesn't matter what it is, it could be our paint task,  it could be our animation frame, any of these tasks,  it makes sure to completely flush
[00:24:09] the micro task queue. So if you're in a task
[00:24:12] and some micro tasks come in.
[00:24:14] Doesn't really matter.
[00:24:15] this queue will be completely drained
[00:24:18] before...
[00:24:22] Sorry, I might stop doing it.  Like, trying to make the stupid...
[00:24:25] Thank you.
[00:24:26] Thank you.
[00:24:27] Okay. This queue will be completely drained before it runs the next task in here. And this is important because
[00:24:35] This task, microtask queue, can't be preempted. Some people make the mistake early on where they like,
[00:24:40] like keep on queuing microtasks
[00:24:43] and they can starve the browser just as much as if it had been synchronous.  Like if you just keep on queuing micro tasks, the browser will not paint.
[00:24:51] you will lock up the browser.  The benefit of microtasks is...
[00:24:57] Hmm.
[00:24:59] Framework has a perfect example.
[00:25:01] What if you call setState?
[00:25:03] 12 times in an event handler.
[00:25:05] Right.
[00:25:07] Do you want to go?
[00:25:08] And...
[00:25:09] Do...
[00:25:10] the work 12 times, like do you wanna like, let's go one, two, three, four, five, same state, just update it.  Or two different states or three different states, but they cause the same components to re-render.  I'm using a React example, but this could be signals, it doesn't really matter.
[00:25:24] Signals, sometimes you don't really care because they only impact a smaller segment of your node graph, but pretend you're React and every time, every component they use that state is going to, and downstream is going to re-render.  If you...
[00:25:37] Either update the same state four times
[00:25:40] Inside an event handler or
[00:25:43] you update like five different states. You don't want five separate renders, generally speaking.
[00:25:48] You don't want
[00:25:51] to necessarily, like, if the user has, like, set timeout,
[00:25:55] like, or their own kind of time.  You don't want to like yield and just like do it at some random time, right?  Like, like come in and go, okay, now I'm going to do the work.
[00:26:04] you want it to run basically synchronously right away,  but you want enough time to be able to collect all the stuff that happens during that synchronous frame.
[00:26:12] So like
[00:26:14] This is like con thing, as I said, Solid didn't have that.  So we literally had a batch where we had to wrap the call.  So at the end of the batch, we would run it in Solid 1.0.  And so our default was non batching when you're outside of the reactive system. But
[00:26:26] almost every single other framework, especially because they have the whole component tree to worry about re-rendering. Essentially,
[00:26:35] uses a micro task because they can basically collect as many they want and
[00:26:39] do all this, basically go "okay" like at the end they just see "okay this, if you updated
[00:26:45] called setState five times on the same piece of stating,  went from counter one to five somehow,  all within a single task.  Obviously, clicking an event button can't do that  because each button click is distinct.  But I don't know why.  You just did a loop that went setState
[00:27:00] One, two, three, four.
[00:27:03] With a micro task, instead of seeing those distinct events, it'll just be like, okay,
[00:27:08] I've set the value
[00:27:11] At the end, it'll be like, I need to go do some work.
[00:27:13] And then when it goes and checks that state, it'll go, "Oh, it's values 4."  It didn't see the 1, 2, 3. It didn't care. It just sees the 4 at the end.
[00:27:24] this is part of maybe an argument why React stays in the past side note  because until it actually runs that thing in the micro task
[00:27:32] You know what I mean?  Like,
[00:27:33] the value hasn't propagated.
[00:27:36] But I'm just kind of
[00:27:38] Pointing out that there are a lot of benefits to micro tasks.  The reason they were created in the first place
[00:27:44] was promises.
[00:27:45] Right.
[00:27:46] If
[00:27:47] you essentially, I mean, if you essentially
[00:27:52] Thank you.
[00:27:52] have a then chain. So you await something and then something else awaits it and something else awaits it.
[00:27:59] They wanted a guarantee that stuff would basically run, um,
[00:28:04] and always
[00:28:06] not synchronous. Like they want to make sure that like
[00:28:10] I mean, you can...
[00:28:11] Let's open a playground right now so you can see.  This is one of the most painful, annoying problems with callbacks.
[00:28:18] was that like
[00:28:19] If you had a code block,
[00:28:21] And you were like,
[00:28:23] Um.
[00:28:24] You guys familiar with the old callback syntax, like in Node and stuff, where you can be like value. So what you do is you'd be like,
[00:28:32] I don't know, do some async.
[00:28:34] And then
[00:28:36] essentially
[00:28:38] you get a callback like this, right?
[00:28:43] And then it would do something
[00:28:46] with value, right?
[00:28:51] Very common in this pattern was like if error blah blah blah, right?  Do something with this value.  The reason I want to point this out here is that
[00:29:00] With callbacks, let's pretend this is do something
[00:29:06] Doom.
[00:29:09] More async.
[00:29:11] which takes that value
[00:29:14] and then return to callback itself.
[00:29:16] Thank you.
[00:29:18] Thank you.
[00:29:22] Thank you.
[00:29:23] Thank you.
[00:29:25] Thank you.
[00:29:27] One of the challenges was
[00:29:29] We called this async, but if I remove this,
[00:29:35] We have no knowledge of whether this runs synchronously or asynchronously. Do the more things we add here actually block the main thread? I don't know. Do they do it all the time? Sometimes. This was a lot of fun in...
[00:29:47] reactive systems like signals that do a synchronous based tracking,  because if someone did something that was like, you know,
[00:29:56] Um...
[00:29:58] you know,
[00:29:59] - Come on.
[00:30:00] V equals, you know, signal whatever, right?
[00:30:04] in here.
[00:30:05] And in here.
[00:30:06] They had, you know.
[00:30:08] Sorry.
[00:30:10] They had like.
[00:30:11] some other signal, signal 2.
[00:30:14] Um...
[00:30:17] Depending on if this decided to run async or not,
[00:30:20] Decided on whether these got actually tracked like
[00:30:24] You can picture this whole thing could be inside and up back.
[00:30:28] I mean, this is the worst code, but this is what using...
[00:30:35] signals back in 2010 look like.
[00:30:37] Um...
[00:30:38] Okay.
[00:30:39] But this is not unique to signals, right?  This is like...
[00:30:43] pre
[00:30:44] async await pre promises,
[00:30:48] my point is like
[00:30:50] What tracks? Zalgo. Like, I have no clue what tracks.
[00:31:01] "Raph is such an untuned name, shouldn't it be more like a next frame or run after Paint? I know these are not great either, but what's the request you can come from?" Well, okay, I can explain that. First of all, it's actually before Paint, which is the really kind of thing. And the reason it's called request is because they didn't want to promise it.
[00:31:19] Because if you request
[00:31:22] Um...
[00:31:23] If you request
[00:31:25] like let's pretend this is the paint here.  If you request animation frame  and there's already other stuff queued up  for the animation frame  and it runs out of time,
[00:31:34] One cool thing about requestAnimationFrame, again,
[00:31:38] I don't know how many people know this, is...
[00:31:41] It has...
[00:31:43] The callback
[00:31:44] has a timestamp in it with a high-DOM high-resolution timer. It's one of the cues that actually keeps track of how much
[00:31:54] Like,
[00:31:54] times processing because it wants to keep that 60 frames per second so sometimes it goes okay crap i  don't have enough time to run this before the next um paint so to speak so it goes it bails out and
[00:32:09] make sure that it runs before the following pane.
[00:32:12] So, um,
[00:32:13] They called it request because it was a suggestion. It was a request, not an actual promise that it will happen.
[00:32:23] Right. Um,
[00:32:27] So like, yeah, just kind of to get that out there.
[00:32:35] Anyway, um...
[00:32:38] Yeah, as I was showing earlier, it
[00:32:43] If you actually want something to be after
[00:32:45] the animation, you actually have to use two timers.
[00:32:49] And
[00:32:50] Hopefully.
[00:32:53] Um,
[00:32:55] your request animation frame because your timer is so quick like  like it literally just calls like set time out of post message right in it gets in there but you're
[00:33:05] It is possible, I presume, with this approach, to actually skip a whole paint, um...
[00:33:12] Uh, if you, if you're not careful, um,
[00:33:15] Because if there's too many things in the request for animation frame,  it runs out of time and then it doesn't run your set timeout  and has to run it before the next animation frame,  you actually skip that whole frame and it ends up on the frame afterwards.  Yeah.
[00:33:28] So, I mean, I guess if you really want to make sure it gets in, you kind of create like a cancellation queue.  It's kind of like a, like if you're like, like a racing timer.  So you call, um...
[00:33:42] Actually, could that even work?  Because there's a possibility that it'd still get in beforehand.  Yeah, yeah.  I...
[00:33:49] Thank you.
[00:33:50] I think it's just something you kind of accept.  I mean, if you're willing to push something out past the paint,  then you're probably, it's not the most urgent thing.
[00:33:57] Um, anyway.
[00:33:59] Where was I? Um...
[00:34:01] You might scale a draw.
[00:34:03] Uh, no.
[00:34:08] Yeah.
[00:34:10] God, what was I talking about?
[00:34:13] Right before that.
[00:34:18] We were talking about the Microtask queue.
[00:34:20] I actually completely lost my train of thought.
[00:34:24] Hmm.
[00:34:25] Thank you.
[00:34:27] Thank you.
[00:34:28] Thank you.
[00:34:30] Alright, we're in this playground. Yeah, okay. Yeah, synchronous. Um...
[00:34:34] synchronous running. So they wanted to make sure that promises were always async. So like when you hit something like this, like now do some dot then
[00:34:44] you know,
[00:34:46] API is a little different, but
[00:34:51] I mean...
[00:34:57] They wanted to make sure that this
[00:35:02] would always break up
[00:35:04] Um,
[00:35:05] the like,
[00:35:06] resolve. It's just because it means that the difference between the first time you call it and the second...
[00:35:11] Obviously like
[00:35:14] Promises only run once.
[00:35:16] And if you're actually generating like if you actually it could be more like that if you're actually generating a promise, then like when I call you back in, it's going to remake the promise. But like in a situation like this, let's say where the promise.
[00:35:30] has already run before, right? So we actually
[00:35:35] It's more like...
[00:35:36] something.
[00:35:38] Like...
[00:35:39] "pont something" = "do some"
[00:35:43] Right.
[00:35:44] And then.
[00:35:45] Like this.
[00:35:47] He wanted to make sure that
[00:35:49] at minimum, like,
[00:35:50] Like, let's say we do something over here, console...
[00:35:55] dot log
[00:35:56] Hey, they want to make sure that like
[00:36:00] the first time it runs,
[00:36:03] He will run before...
[00:36:06] anything in here, right?
[00:36:08] And the second time it runs, hey, we'll still run before anything in here, even though this promise is already resolved.  They wanted to make sure that the behavior from like a synchronous flow standpoint was identical.  Like, don't get me wrong. I curse it all the time that promises can't be synchronously accessed. Every framework,
[00:36:24] especially ones that do hydration, hack this.  They like add extra fields to the promises  so they can be processed synchronously.
[00:36:31] because we need that to hydrate properly. But
[00:36:34] Generally speaking, the reason they're designed this way
[00:36:39] is so that like
[00:36:41] the same function, same piece of code that runs multiple times, it doesn't create the promise but runs the promise, will always
[00:36:47] basically from a synchronous standpoint act the same way. It was very confusing.
[00:36:51] you know, back in the day before promises, um, that sometimes, Hey, with log first,
[00:36:57] and sometimes.
[00:36:59] Um...
[00:37:00] K2 would log first.
[00:37:03] Um...
[00:37:05] So...
[00:37:07] Yeah, I hope you all are following why this is the case, right?  This is...
[00:37:15] Thank you.
[00:37:15] This is why.
[00:37:17] And, um,
[00:37:20] Obviously this is a huge, one of the biggest changes to the JavaScript engines ever.
[00:37:26] I people complain about, you know, old Internet Explorer and they should.  I think it's kind of fallen out of memory. Right. But the
[00:37:33] biggest gift that
[00:37:35] IE 11
[00:37:36] Gave us?
[00:37:38] was that...
[00:37:40] One of the last features they snuck in, they didn't have promises, which everyone's like, oh, it's ancient, but they snuck in something, um, mutation observer, which is a browser API to notice like if a Dom node updated.
[00:37:51] And mutation observers
[00:37:53] were specced to work on the Microtask queue.  And I don't even think they had a Microtask queue  in old Internet Explorer, but what they ended up doing,  they might've just kind of faked it.
[00:38:03] Just...
[00:38:03] like preempted in the task queue and just been like, okay, if anything comes up here, we'll for sure just stick it in and make sure it runs before we run paint.  Like, I don't know if they hacked it in or whatever, but they snuck this little thing into IE11 and,
[00:38:16] And because I did that,
[00:38:18] we were able to polyfill promises in IE,  even though they didn't exist there natively,  which is great because basically,  and I've written this in the past,  you could polyfill a promise by making like a DOM node
[00:38:31] Uh...
[00:38:33] and then setting up a mutation observer on it. And this would...
[00:38:37] have the right timing so you could basically just like every you know
[00:38:41] take some kind of function you created and then have it listen to the mutation observer on this dom node and get microtask queuing timing.  I was able to...
[00:38:51] some old app I had that had the support IE11. I was able to basically support it because they snuck this in.
[00:38:59] Yeah, literally code that has nothing to do with the DOM. We'd just use, we'd use like a crit a div element just to fake the timing for a micro task queue.
[00:39:09] Um,
[00:39:10] Okay, anyway, my point is...
[00:39:13] Um...
[00:39:15] Micro tasks are very powerful thing. Okay. So let's kind of let's, sorry, let's,
[00:39:20] Accident.
[00:39:22] I accidentally hit the wrong thing here.
[00:39:25] and want
[00:39:26] This to go away.
[00:39:29] but we have
[00:39:33] to Microtask.
[00:39:35] Um,
[00:39:36] which is probably the most
[00:39:38] Um,
[00:39:39] Kind of like
[00:39:40] This is a superpower.
[00:39:42] As I said, a lot of people have animations of this thing to show what the order things are.  Because every time a micro-task queues, the current task will finish.  But this will completely drain.  And these can queue on other ones, right?  If you've ever seen like Promise Then, Promise Then, Promise Then.  It'll completely go through the whole chain of promises before it gets to the next task.  So...
[00:40:04] Like there's obviously the explicit then, then, then, then, then.  The reason is everything you return from a promise becomes a promise itself.  And this is like one of those classic things.  Again, just something some people aren't aware of, especially with ASIC functions.  Because ASIC functions...
[00:40:20] have this funny way, and it's not funny, it makes perfect sense, but an async function
[00:40:25] Um...
[00:40:28] Whatever.  An async function...
[00:40:31] Even if you don't await,
[00:40:33] Even if you just go like return hello or hi,
[00:40:38] This still
[00:40:41] will resolve on the micro task when you call it like
[00:40:44] when you call h here,
[00:40:47] It's not going to like, you know...
[00:40:54] Uh...
[00:40:58] It's so funny because the problem is if I console.log on here, this will still run first.
[00:41:03] But
[00:41:06] Uh.
[00:41:08] Yeah, I mean, I could come up with some more convoluted way of showing this.  And this code doesn't run because I have a bunch of broken code.  My point is that this line here, console log D,
[00:41:20] I mean, it doesn't really matter because you're not awaiting this.
[00:41:24] But like...
[00:41:26] This, like, and there's not, so there's nothing after here, so to speak.
[00:41:30] But the point is that this...
[00:41:33] but still,
[00:41:35] awaits.
[00:41:36] This is an implicit, almost like hidden away dope, right?  Which is why...
[00:41:42] if you actually want something to run synchronously,  you don't use this.  If you look at like the internals of something like create async,  where I want it to either, you know,
[00:41:52] run synchronously, like say you grab it from a cache or something, or async, or take a promise, if it takes both APIs, the actual internal implementation can't use an async function because it'll always force it into a microtask queue.
[00:42:07] Another small detail, like cases when you still use then.
[00:42:13] Anyway, um...
[00:42:15] It's also why, like...
[00:42:18] Have you ever seen someone do this?
[00:42:24] This works perfectly fine.  But you're actually awaiting and then you're awaiting.  You're actually chaining two...
[00:42:31] two thens, so to speak, right? You could just return, like assuming fetch returns a promise,  you could just return the promise and you actually remove one micro task.
[00:42:42] Um,
[00:42:44] Thank you.
[00:42:46] it's not terribly important for most things,  but you'll,  you,  when you start coming up with,  cause the micro task queue isn't preemptive and it orders,  um,  in order,  you will hit scenarios eventually,  which some people probably hit the seat when they're doing testing on  async stuff and they don't have good tools.  That's why most tools would testing,  like testing library and stuff,  like have good tools where you'll be like queue micro task,  um,
[00:43:11] QMicroTask. If you actually look in solids,
[00:43:15] internals around streaming, we have stuff like this, which seems really stupid, but it's because I have to ensure
[00:43:22] that this micro task runs after any other micro tasks that might get queued
[00:43:30] during like
[00:43:32] Um...
[00:43:33] this frame.
[00:43:35] Like, it's a way of, like...
[00:43:38] Like, you still...
[00:43:41] you still might have to play with ordering here where you're like, cue this task,
[00:43:47] And cue a task in it so that it comes after any other task that would have been queued by this task.
[00:43:53] Thank you.
[00:43:53] Um,
[00:43:55] It's funny. And again, you'll see these tests. They're really funny in our especially old stuff where I wasn't using Solids internal scheduler. We're like,
[00:44:09] You'll see a test and it'll be like this.  It'll be like await.
[00:44:13] Promise.
[00:44:16] Dot resolve. Sorry.
[00:44:19] Promise not resolve.
[00:44:21] And we'll do it twice. We'll just be like this. We'll just be like this. And then do the thing.
[00:44:27] Thank you.
[00:44:28] And you're like, why do you have to do this?
[00:44:33] It's just because of the ordering of the microtask queue can matter.
[00:44:37] This is kind of craziness.
[00:44:38] That's my micro-taster super powerfulness.
[00:44:41] Because the hope is that the end developer, the actual developer, is just going to do this.
[00:44:46] setTimeout0.  Microtasks aren't for you, they're for library maintainers,  usually, not in all cases, but usually.  So you just call setTimeout, and it, setTimeout0,
[00:44:56] will always run after all the micro tasks.
[00:44:59] So like this is just your guarantee, you know, like, hey,
[00:45:03] I'm clean. Set timeout VRO means that
[00:45:07] um,
[00:45:08] I've completely depleted the microtask queue. The task before me is completely done.
[00:45:13] I'm just gonna run this at a reasonable time.
[00:45:20] Yeah, yes, Tri-Catch matters because...
[00:45:28] But I mean, you just write it with .catch.
[00:45:31] It matters because...
[00:45:34] Try catch has to have special behavior in terms of where it actually can grab.  Like if you want to use synchronous try catch, you need to be using a weight.  If you just put promise dot then the try catch has no clue what it's hooking into.
[00:45:47] It's kind of like we'll see later, like why started transition wraps actions like we need.
[00:45:54] If you just like,
[00:45:56] If you just do like
[00:45:58] Thank you.
[00:45:59] Try...
[00:46:01] Catch.
[00:46:02] and go
[00:46:04] you know, promise, some promise, p.then this.
[00:46:09] Well,
[00:46:10] it's not hooking into anything.
[00:46:13] Right? Like, it's not Denning.  It's not like... The Tri-Catch has...
[00:46:17] No idea.
[00:46:19] what this code is. It just sees... like, it doesn't even see it. Like, it just goes, "Okay,
[00:46:23] You're putting a Venn handler on this,  and then it runs through.  There's no error.  There's nothing that could possibly...
[00:46:30] thing, right? Whereas you have to actually, if you awake the promise, then the try catch is like, oh,
[00:46:38] In here, we're actually waiting for this thing.
[00:46:42] there's a promise here. Like this is how it actually knows there's a promise.
[00:46:47] The code doesn't get executed in the block exactly. Yeah.
[00:46:52] Uh.
[00:46:54] Yeah, I don't know how...
[00:46:57] Like,
[00:46:58] It's an interesting question. I mean, I don't, I mean, there's,
[00:47:02] There's some languages that guard heavier.  I, Java scripting based on Java is interesting, but we, we don't even use it.  A lot of people like, does anyone here?  I mean, I do it sometimes now, but it's like, there's that very OOP stance, you  know, where you could like type errors.  JavaScript's usually never been that crazy, but I mean, the more complicated  system, the benefit is I know there's other systems that just like avoid  exceptions or the concept.  I like try catch being in the language, um, because it gives us a, a way of.
[00:47:32] bailing out of code, which is really powerful, right? You know,
[00:47:36] I obviously I'm going to say that because, you know,
[00:47:40] Who's throwing promises?
[00:47:42] You know.
[00:47:42] I am, you know, I'm not even just throwing errors. So, you know, like the whole, you know, fake algebraic effects thing, which is another topic that we shouldn't get into today.
[00:47:56] Thank you.
[00:47:58] Thank you.
[00:47:59] Thank you.
[00:48:01] Yes, yeah, yeah, yeah. And this is kind of...
[00:48:05] Um,
[00:48:06] I think the bailout behavior is interesting.  This is...
[00:48:12] And
[00:48:13] But in a sense, it is a legitimate state to be in, right?  As long as you've handled it, right?
[00:48:19] Handled error is a legitimate state.
[00:48:23] An unhandled exception is a whole other thing.
[00:48:27] Thank you.
[00:48:29] Thank you.
[00:48:30] So anyway, micro tasks, super cool, super powerful, gonna be very core in what we do. But yeah, it's important to understand that these will start just as readily as if you do a do while loop. Okay, continuing.
[00:48:50] Then the next one in our timeline is requestIdleCallback.
[00:48:55] This one isn't as fundamentally changing.
[00:48:59] This one is just like, okay, hey, task.
[00:49:01] You're coming in and you're like,
[00:49:03] When do I run? And you're like,
[00:49:05] Um...
[00:49:08] whenever you're free so kind of stick it at the end here and then it's like oh something else came in well
[00:49:14] I'll just keep on bumping you back up. RequestAidleCallback is like,
[00:49:20] Whenever the browser has nothing else to do, then run me, right?  But it basically gets preempted by...
[00:49:28] Everything almost
[00:49:31] So,
[00:49:33] It's useful when you're saying, "This is stuff that I don't really care about."  Just when you have a free moment, can you run it?
[00:49:40] Simple enough.  Um...
[00:49:43] Interestingly difficult to implement without it.
[00:49:49] We have a polyfilled implementation site, Solid 1.0,  that I'm going to remove because I don't really care about the scheduler  coming to Solid 2.0.  But we kind of polyfilled it based on some React code that I've seen.  And what they did was they basically did a...
[00:50:03] animation frame because if you think about an animation frame is about as lazy
[00:50:07] as you can get in a generic sense, like set time out.
[00:50:11] Um...
[00:50:13] has no guarantees.  And whenever,  you know,  the time comes,  it will,  um,
[00:50:20] It will...
[00:50:22] try and, you know, get in there.  So the idea with the request animation frame
[00:50:29] approach is like
[00:50:31] is essentially using the dead letter...
[00:50:35] like pushing it basically to the end of the frame before the animation, before the next thing, and then using a certain dead letter cue, it's called like where you're basically using the remaining time in the animation frame to run some of the tasks. And then when you get to a point where you're like, hey,
[00:50:49] there's not enough time left.  You just kind of keep the queue,  like manage the queue yourself and go,  okay, I'll wait till the next animation frame.  So basically before every paint,
[00:50:59] If there's time left, sneak in a little bit of work.
[00:51:02] That was kind of pre-request animation frame and it was an important part of actually how time slicing worked in the React scheduler for a while.
[00:51:12] Um,
[00:51:14] This idea of like before every paint, see if there's any time to, you know, fit in a little bit of extra work.
[00:51:21] But we have this in the browser now, so that's great. And then the last one I want to talk about is scheduler.yield, which is a relatively newer
[00:51:33] timing thing. And what schedule.yield does is this is the first time out of all of these  where a task can be actually running. So actually let's...
[00:51:44] A task can be running.
[00:51:48] Um,
[00:51:50] And and what happens is let's let's clear this out a little bit.  Task is running and it's not done.
[00:51:57] But it's like I'm taking a while.  And what it does is it will actually...
[00:52:04] Stop.
[00:52:06] And then it'll yield to let's let's actually sorry, let's put this back in.
[00:52:10] Let's pretend there's some other important tasks that are in here, like,
[00:52:14] user events, you know, or paint or whatever, some task that the browser does.  Let's say it's not paint.  Let's say it's like.
[00:52:23] like handle event handler, like a button clicker,  some typing in an input field.  If the task is running part way, it will go, okay, I'm going to stop.
[00:52:32] And then,
[00:52:34] it will basically...
[00:52:37] Okay, sorry, get this one out of the way. It will basically go stop partway, so it's like
[00:52:42] run half the task
[00:52:45] it will yield to the browser task.  Important thing to note,  before it yields to the browser task,  guess what?  It flashes the microtask queue.
[00:52:53] It could be a browser task, it could be event handler, whatever. But it flushes the microtask queue. Always flushes the microtask queue.
[00:53:00] And then...
[00:53:02] essentially
[00:53:04] it will sneak
[00:53:06] The yielded task...
[00:53:08] Back.
[00:53:10] at the front
[00:53:11] of the task list generally.
[00:53:15] Um,
[00:53:16] Like...
[00:53:17] It depends on what's there. If there's nothing there that's important, like more important like that, it will just...
[00:53:23] you know, it'll be at the front. But if there's something, you know, basically when yield splits,  it tries to find the most appropriate place to put it. If there's something more high priority,  it'll put it afterwards. Otherwise it'll put it right at the front of the list.  But this task that's been split now, right?
[00:53:37] So basically yields to the more important tasks. And then the process goes, okay, gets there, yields, flushes the microtask queue, runs the higher importance task, finishes itself, and then continues on with the macrotask queue.
[00:53:52] But that's essentially what scheduler yield does.  It lets certain higher priority, like,
[00:53:58] user input based macro tasks
[00:54:02] run before the current task finishes, but it makes sure that the current task still keeps its place in the queue, so to speak.
[00:54:09] Um, and as it incidentally, it also flushes out the, the micro task queue, um,
[00:54:15] so
[00:54:17] That's...
[00:54:18] Kind of...
[00:54:19] the JavaScript event loop in a nutshell.
[00:54:24] Any questions so far?
[00:54:27] *chokes*
[00:54:30] Thank you.
[00:54:31] Thank you.
[00:54:32] Thank you.
[00:54:33] Uh...
[00:54:37] See, hopefully now that you all are experts in this, the rest of what we have to talk about today is going to make a lot more sense.
[00:54:50] from microtask yields as requested in the next follow-up task good question um
[00:54:55] Thank you.
[00:54:56] Yeah, that's a good question. Let me think here.
[00:54:58] What happens with the microtask fields?
[00:55:02] I have to assume it flushes the
[00:55:04] The
[00:55:05] It would have to...  Imagine what happens after...
[00:55:10] the yield becomes basically a macro task.  So like,
[00:55:15] It would have to flush the rest of the micro tasks.
[00:55:18] and then run the higher priority thing and then
[00:55:23] then continue the rest of the
[00:55:26] micro
[00:55:27] task is a macro task, essentially.  The thing is,
[00:55:32] Once a task is running, I don't think it's aware of its identity anymore.
[00:55:36] I could be wrong about this. I don't know the internals.  But conceptually, once  it's been picked up...
[00:55:42] this part doesn't matter anymore. Right. So where what QE came in doesn't matter. Like once this is running,
[00:55:50] Like,
[00:55:51] It doesn't...  It goes, okay, I hit a yield...
[00:55:54] So it goes, okay, I'm going to take the rest of me, you know, the second half, the part that doesn't run, and then I'm going to stick it in here.  Like, I think...
[00:56:02] I think that's essentially...
[00:56:05] the way it works. I could be wrong, but that's conceptually what I guess. I mean, we could probably ask AI.
[00:56:14] What does request idle callback for? It's just for
[00:56:19] Stuff that's really low priority.  This is what we used to use.  Or like the fake version is what we used to use for transitions.  When you're like, hey...
[00:56:27] The stuff off screen?
[00:56:29] Only do it if there's free time to do it.  We'd be like, okay, main task stuff,  stuff that you're animating, fine.  Stuff that's in a transition lore thing,  let's just, whenever you've got time.  And I'm going to show it again today, actually.
[00:56:43] Thank you.
[00:56:44] Thank you.
[00:56:47] Thank you.
[00:56:48] Yeah, the end of the queue is just, it's more like if there's just too much work going on, how do you say like, this is the least important thing?
[00:57:00] What if you yield scheduling microtest?  Does it then force the next microtest to run before the next micro?  No, I doubt it. Let's find out.
[00:57:11] I mean, Google could be wrong, but let's go scheduler.
[00:57:14] dot yield
[00:57:16] in a micro task.
[00:57:18] still wash.
[00:57:20] MicrotaskQ.
[00:57:30] Huh, apparently I'm wrong.  Inside a microtask does not cause the event loop to flush the microtask queue, instead
[00:57:38] Instead, the continue to
[00:57:40] of the function at the uterus scale as a new prioritized macro task. Okay, yeah, that's true.  Effectively breaking out of the current micro task processing. Okay, I got that right. And allowing for anything.
[00:57:54] But what about the existing stuff in the...
[00:58:06] Thank you.
[00:58:06] Yes, maybe I used the wrong term, but listen here, microtask Q-draining.
[00:58:12] The event loop specification requires that the micro-task should be completely emptied after the current task.
[00:58:17] before the next task rendering occurs.  This process continues, right?  So this is saying what I thought it would say  is that the continuation gets queued as a macro task,  which means that you would have to flush the micro...  If this is true, you would have to flush the micro task queue  before the continuation of the...
[00:58:37] Of the...
[00:58:38] previous micro tasks because
[00:58:41] Um...
[00:58:44] It's no longer a micro task, it's a macro task.
[00:58:49] I don't know for sure. I mean, I don't know if I want to spend the time right now to make an example to test this.
[00:58:55] But...
[00:58:57] My guess would be the way that I described it, even from reading this.
[00:59:05] If the tools to seed back the main thread, then you have to drain the micro task queue.
[00:59:15] So, and
[00:59:19] This phrase is different.
[00:59:31] Yeah, I think AI is confused here. In fact, the continuation runs the micro tasks, basically, they give the browser transfer from other, including processing the micro task queue. No, it doesn't.
[00:59:42] during the microSQ because it yields to process
[00:59:45] the Microtask queue.
[00:59:46] Yeah, I think AI is confused.
[00:59:51] Schedule or post task.
[00:59:53] My guess is scheduler post task. I'm not as familiar with that, but I'm guessing it's the new post message. It's probably a
[01:00:00] higher priority macro task.
[01:00:12] Thank you.
[01:00:13] Okay, okay, cool. Yeah, this is fair. This is fair enough. Yeah, yeah. So this is how you define the...
[01:00:20] the, the,
[01:00:21] the macro tasks. So yeah, this is, you're right. This is, this is important. Um,
[01:00:27] Bye.
[01:00:28] I didn't realize this was in user space, which is freaking awesome.
[01:00:32] Just a side note, so yes, I would consider this very important. Sure. Okay.
[01:00:35] Let's talk about scheduler.posttask.  Because scheduler.posttask is the other piece  that kind of goes hand in hand with this, because
[01:00:44] I said a browser task is high priority, but you could also queue tasks yourself that are high priority.  Keep in mind, they're not micro tasks, they're macro tasks.  So...
[01:00:55] This is how you can say, look, user blocking, user visible background.  So right away, you can see that there's three different priorities here.  User blocking is probably the highest priority that always preamps user visible background.
[01:01:08] Um...
[01:01:09] is...
[01:01:11] Yeah, I and I'm gathering set time out is probably considered background.
[01:01:15] generically. So this is actually probably
[01:01:20] These are basically...
[01:01:22] three different versions of set timeout zero in your mind right where this one is like
[01:01:27] Set immediate user blocking is set immediate. And then these are like three different scales of it. So this is
[01:01:33] I'm
[01:01:33] In a sense, this is the
[01:01:35] actual
[01:01:37] I said there's two different...
[01:01:39] uses of set immediate.  There's the micro task version.  And then the full task version is this.  This is probably the equivalent.  If you got the most blocking,  um,
[01:01:50] This would be a very good example.
[01:01:55] I don't know if user blocking,
[01:01:58] Uh...
[01:02:00] is higher than paint.
[01:02:02] But imagine that inputs like
[01:02:04] typing keyboard is at user blocking height.
[01:02:08] Paint is probably at user visible.
[01:02:10] And then background is like set time up.  That would be my guess.  I do not know for sure.  But yeah, this is a good question.
[01:02:18] Thank you.
[01:02:21] How about making your own cue and wrapping up promises like it manages to do when you're singing? Yeah, I mean...
[01:02:27] Yeah.
[01:02:28] There's benefits to pulling it into your own timing.
[01:02:32] This is yielding to the browser. You still have to yield to the browser if you make your own timing. This is what I was describing earlier how React used to request animation frame in the past to be able to schedule their transitions. This is an example of it.
[01:02:44] If you look here, micro task queue on NPM,
[01:02:49] Thank you.
[01:02:50] or two micro...
[01:02:52] What's it?
[01:02:54] uh,
[01:02:56] That's it.
[01:02:57] Let's go on NPM.
[01:02:59] Thank you.
[01:03:00] Not QMicroTab, Microtask.
[01:03:04] - Huge.
[01:03:06] Thank you.
[01:03:11] Thank you.
[01:03:11] You'll find a library that barely ever used.  But this was my original polyfill that I wrote to use Mutation Observer so that it would work back in IE.  It was published nine years ago. No one uses it.  But the way I managed this was...
[01:03:31] essentially
[01:03:34] I collected all the stuff.
[01:03:37] You can build promises on top of this, essentially.  And then when the mutation observer fired off, I'd run the queue myself.
[01:03:44] But yeah, I mean...
[01:03:46] What was cool about this is I removed a lot of the browser overhead because instead of scheduling a billion timers,
[01:03:54] I only scheduled one timer. So there was also a performance aspect of why I did this 10 years ago or whatever. It's funny.
[01:04:02] to do right test.
[01:04:04] Thank you.
[01:04:05] Thank you.
[01:04:06] Oh, man.  Wonder why no one uses library.
[01:04:14] Thank you.
[01:04:16] oh man
[01:04:21] Anyway, uh...
[01:04:23] Okay.  Um...
[01:04:28] Thank you.
[01:04:32] I think the most important concepts to walk away from here...
[01:04:38] is that like
[01:04:42] There are two major queues, and this queue is actually kind of simple.  The microtask queue, it was literally just like,
[01:04:48] send it through, queue it. The macro task queue, the main queue, is complicated as hell and has all these scheduling rules to kind of get around stuff.
[01:05:00] The micro task queue is like the bailout queue. It's like, okay,
[01:05:04] whatever you can't manage in a reasonable way here,  let's make sure this happens like
[01:05:09] This is like super super immediate.
[01:05:11] This is basically like MicrotaskQ, you can think of it as like, we wish we were synchronous, but for reasons we aren't.
[01:05:17] And then the MacroTask queue is like the actual complicated scheduler.
[01:05:23] The tests were never written, no.
[01:05:28] I have a few libraries like that.
[01:05:33] I don't think we use it.  No, we probably...
[01:05:36] We might still use it actually in solid HTML, like tag template literal thing.  I had like, I came up with like an HTML parser, um, for breaking up tokens so that we could like,
[01:05:48] get basically tag template. A lot of people obviously use the browsers built in to do that now, but like I wrote the thing like eight years ago when I was writing, doing the original templating stuff for solid, like even before I landed on JSX.
[01:06:01] Anyway, I don't think that library ended up with much in the way of tests either.
[01:06:07] Thank you.
[01:06:08] Anyway, okay. I think I hope that we just a bit. Okay, so I
[01:06:14] Now that we've done talking about this and you've hit the like button on the channel because or sorry, on the video to help.
[01:06:23] you know,
[01:06:23] I'm possibly subscribed at this point.
[01:06:26] We're going to talk about...
[01:06:30] transitions right a bit. But before we even like,
[01:06:36] I think it might be better.  Instead of like saying like, here's transitions, how they work.  I'm going to show you a couple of the examples that people made to...
[01:06:46] show like why transitions are good. And then we're going to just try and solve them without even having transitions. And we're just going to like,
[01:06:52] kind of work through it, like what's happening and whatnot. So the first example I want to get to is
[01:07:02] I wonder if I actually...
[01:07:05] If I go on my blue sky timeline, will I eventually find it?  Let me see.  Can I go my profile?  It's been a while.  I should have pulled this up before we did the stream, but a while ago,
[01:07:16] It's around the time we talked about this demo with I want to start here for a reason.
[01:07:21] but with Ricky Hanlon,
[01:07:26] Because we were having a bunch of really great...
[01:07:29] a great discussions around the stupid demo. I just I don't know if I have it. I want to pull out the old million JS.
[01:07:38] I did this one on stream before.  Million...
[01:07:41] Yes.
[01:07:42] versus react concurrent
[01:07:48] Thank you.
[01:07:50] I'm never gonna find this stupid demo am I?
[01:07:53] It's the Dan Abramoff spinner one.  You know what?  I think I saw a version the other day  where someone did it with solid.  Just sorry.  Give me his bookmarks.
[01:08:03] Um...
[01:08:08] Can I bind it?
[01:08:09] Thank you.
[01:08:11] Thank you.
[01:08:15] Thank you.
[01:08:18] Thank you.
[01:08:20] Oh yeah, yeah, okay, cool, cool. You guys all seen this demo before, right?
[01:08:27] Thank you.
[01:08:29] I'll explain that in a minute.
[01:08:31] Kind of a silly thing, but you'll see why in a moment. Okay. So this, this demo is infamous because
[01:08:38] The solid implementation actually is not
[01:08:41] optimized here exactly. But I think I should be able to still show this example. If we go up to  some stupid amount of rows like 10,000, which is going to take forever. And you remember this,
[01:08:53] When I click on this,
[01:08:57] there will be a little gap but what you're going to see is
[01:08:59] I'm going to click on this.
[01:09:00] and then I would lift my hand and then two, three.  You see this updates right away on the button  because they opt into tearing here.  But generally speaking, when I click the button,
[01:09:10] there's like this delay, right?
[01:09:13] And if I go into the solid version,
[01:09:15] Okay.
[01:09:18] The delay is shorter, actually.
[01:09:20] It's not just because of the tearing, the delay is slightly shorter.
[01:09:23] And
[01:09:25] but it has that same kind of gap, right?  The reason, no one does that, but basically, there's a slight overhead on React interrupting, which causes it to lag more. So when I click it 1, 2, 3,
[01:09:37] One, two, three, four.
[01:09:40] Actually, what's going on? Am I too high up? I'm not even...
[01:09:45] 1, 2, 3
[01:09:48] One, two, three, four.
[01:09:49] You can see that it lags slightly more up here, but the results show up in a shorter period of time.
[01:09:56] *sniff*
[01:09:58] It's an interesting trade-off, and I'm going to...
[01:10:01] This demo came out and it was trying to show like
[01:10:06] This is a dumb framework is more blocking because you know, like this.
[01:10:10] It updates faster, click, click, click, click, click, click, click, click.  But it's blocking your animation, which you want to be smooth.  Whereas if you have reacts
[01:10:18] concurrency here and I click click click click click click it's not blocking quite as much I mean it's still blocking pretty badly but
[01:10:25] It...
[01:10:28] me and Ricky talked about this, how this demo is basically a complete loss because like,
[01:10:33] There's just no winners here.
[01:10:36] Right. You're trading to trade offs.  Either you block and have the whole time of everything happen faster, or you
[01:10:47] uh,
[01:10:48] Mm-hmm.
[01:10:49] Don't block, but then the whole thing takes longer.  But if you look here, when the workload gets high enough...
[01:10:54] They all kind of suck. And the reason for that, I'll show in a minute, but let's look at the code here.
[01:11:03] Right.
[01:11:05] Thank you.
[01:11:06] This demo is honestly...
[01:11:09] kind of a waste of a demo. But let's see, do I have the React version in here?
[01:11:13] I think this will help us understand what's going on here.
[01:11:19] Does this not even use a transition?
[01:11:23] Is it just using deferred value?
[01:11:26] Anyway, the point is that there's the arrays of rows
[01:11:30] And then...
[01:11:32] you're just setting a count click
[01:11:34] And that click.
[01:11:36] causes basically
[01:11:38] every row,
[01:11:40] The array stays fixed.
[01:11:42] At least it's not getting bigger.
[01:11:44] Um...
[01:11:46] but every single row
[01:11:49] Um...
[01:11:51] has a count.
[01:11:52] the count. So it like it updates every single row. There's also some fake extra work here, which I'm gathering they have in there to test the react compiler or something because for react, this would kind of suck if you had to actually every time you clicked and made a bunch of extra work rendering.
[01:12:07] Obviously, Solid only runs the component once, so this isn't a problem here, but generally speaking,
[01:12:14] The thing is, this is like, it's a shallow array where every single row updates.  This is basically...
[01:12:22] If you're comparing signals to like a BDOM, this is like
[01:12:25] the most beneficial to the VDOM benefit because there's nothing granular about this.  Like if you have to update all the rows, you have to update all the rows.
[01:12:33] You know what I mean?  Like, yes, there's elements you have to take care of,  but conceptually, if you have a good memorization...
[01:12:40] the overhead of the signals existing and communicating each of those 10,000 rows independently versus just running the one thing, you know, running just a for loop and just updating the one thing in each row.
[01:12:54] Technically, signals should be
[01:12:57] either equivalent or slightly worse in this scenario.  So this is basically React's best case scenario.
[01:13:04] And
[01:13:05] Um...
[01:13:07] because every row updates.
[01:13:09] And
[01:13:11] The thing is, the truth of the matter is they both kind of suck.  And the reason is because this has nothing to do with the framework, this problem.
[01:13:21] Thank you.
[01:13:21] No, it's only using use deferred value. Oh this one. Okay, you got it for me. Thanks Ricky, give me two secs. Let's see if I can pull this up.
[01:13:34] uh
[01:13:36] No, no, it wasn't that one. Yeah. Yeah. This is the, this, sorry. The one you shared was the,  yeah. I'm yeah. Sorry. This one is, this is the, what I call the IO one. I love this example,  by the way. I,
[01:13:48] This is this. The time slicing is the one that we talked about where we said that it's kind of a useless example.
[01:13:59] *sniff*
[01:14:04] yeah yeah yeah the problem is the the uh yeah sorry
[01:14:10] Yeah, sorry, getting back to where I was here.
[01:14:16] Um...
[01:14:21] Yeah, sorry.
[01:14:22] Thank you.
[01:14:23] Yeah.
[01:14:26] Thank you.
[01:14:26] Thank you.
[01:14:28] In the demo you have to uncheck use void to see the leg. Yeah. Well, I, I, I, right, exactly. And I, I purposely unchecked use void, which we'll talk about in a minute. Cause I,
[01:14:38] - Thank you.
[01:14:42] The reason for if there's leg. Yeah, let's just scale draw this. Okay. Next is scale draw. Okay. So what's happening here in this in this silly demo?
[01:14:51] If you've got like a...
[01:14:53] a timeline
[01:14:55] of the work.
[01:14:57] Each bar, let's go back to this single solid stroke. Okay. Um, and let's not make it sloppy. Let's make it tight. Okay. So
[01:15:07] The first part.
[01:15:09] is
[01:15:10] The event, the user clicks it.  And this is going to be so small  that I'm not going to be able to put it in here.  So you guys will just have to know  that this red here is...
[01:15:20] Click, okay.  Then, there is
[01:15:27] Thank you.
[01:15:28] Let's add the next thing.
[01:15:30] thing we're gonna, our next thing is going to be
[01:15:35] Green.
[01:15:37] And the green is going actually, yeah, the green is going to be
[01:15:44] Thank you.
[01:15:45] our event handler. And our event handler is where we call setState, okay?
[01:15:49] Thank you.
[01:15:51] See, I'm going to
[01:15:53] I'm new.
[01:15:54] duplicate this so that they're the same size.
[01:15:59] Green, green.
[01:16:00] And then the next part,
[01:16:02] is...
[01:16:03] Like...
[01:16:05] This.
[01:16:09] I think I mean being generous here, maybe like this.
[01:16:12] where it's blue, and the blue
[01:16:15] is
[01:16:16] Framework does work.
[01:16:19] As in the framework is doing like the, like going through and updating all the signals or going in and doing like.
[01:16:27] rendering all the React components.  And the length of this might differ  between different frameworks.  Some might be...
[01:16:34] You know, let's pretend that in solid's case it's like this, even though I said because of the case, I actually think React and Solid are probably fairly equivalent here.
[01:16:41] Okay. But let's pretend like, you know,
[01:16:46] Like, you know, this can vary a bit.
[01:16:48] Right. And then
[01:16:51] The next one,
[01:16:54] Thank you.
[01:16:54] which we're going to do in our
[01:16:58] Brown.
[01:17:01] is the dot.
[01:17:02] which takes up this much.
[01:17:05] Okay?
[01:17:10] DOM updates, so actually updating the DOM.
[01:17:15] Okay. That's roughly the breakdown of the work in this demo. Okay. And now if you,
[01:17:24] They've got a trick here in this demo where they use void rendering, which means they don't really paint it.  They stick it like in a portal in the head or something, I believe, where it doesn't participate in the thing.  Basically, if I click void rendering...
[01:17:39] the rose disappear.
[01:17:41] Now there's no rows.
[01:17:42] And with this demo, it's like, okay, smooth.
[01:17:46] And then here,
[01:17:48] Oh, not quite as smooth.
[01:17:51] See, actually it is still smooth.  Yeah, I mean, maybe you have to up the rows more.  Like...
[01:17:59] You're kind of like, well, if you're not...
[01:18:03] Low blocking time, low delay in updating UI  responsive while updating.
[01:18:08] Low blocking time and low delay in updating UI, unresponsive while updating.
[01:18:15] yeah I mean maybe we have to put more rows in but like theoretically you could understand why they're
[01:18:21] could be a benefit because what this does is what if you got rid of this or let's say reduced it down to
[01:18:30] about here. That's what that example is doing. But I'm actually not seeing a huge difference here, unfortunately.
[01:18:37] The problem with this whole thing
[01:18:39] Is.
[01:18:40] Okay.
[01:18:42] See, can I line these all up beautifully?
[01:18:45] Now pretend.
[01:18:47] Now let's wrap this whole thing in white.
[01:18:52] Transparent.
[01:18:53] and white. Okay, so this is
[01:18:56] our work unit, okay?
[01:19:02] Yes.
[01:19:05] So like...
[01:19:06] This is why both demos kind of look like garbage like you're just trading one timing for another but there is some benefits to time something I want to talk about this.
[01:19:15] Now,
[01:19:17] Thank you.
[01:19:18] When there's one, and we see that lag,
[01:19:20] Um,
[01:19:24] It's not like they kind of look similar.  The problem is what happens when more than one come in?
[01:19:30] Right?
[01:19:31] Let's pretend we have
[01:19:33] that and depending on the time now if
[01:19:36] If
[01:19:37] Let's use our knowledge of what we just learned in terms of scheduling here to figure out here. I'm going to move this one down here.
[01:19:44] Out of the rage. So let's start here. So if our second click happens
[01:19:50] Here.
[01:19:52] Thank you.
[01:19:53] Well, we can't interrupt the DOM doing its updating.
[01:19:56] So,
[01:19:57] Even... argh.
[01:19:59] Sorry, I hate it.
[01:20:00] Where's my Skellidraw? Did I accidentally
[01:20:03] back out of it. Okay, good. Okay, sorry.
[01:20:06] This is wrong. I should take this out because the click itself is not within our workflow. The click itself is the browser. So let's take it out here.
[01:20:15] So,
[01:20:16] If the second click happens anywhere,
[01:20:19] in here.
[01:20:20] Write this event.
[01:20:24] The earliest that we're going to do any more of the work is right here, right?
[01:20:32] Right? So you kind of start seeing like the basic problem, right? Because let's do this again.
[01:20:44] Alright, I got deleted. This is our unit that we want to copy.
[01:20:51] This whole thing.
[01:20:54] Thank you.
[01:20:55] Thank you.
[01:20:59] So, wait.
[01:21:01] You know what?
[01:21:04] For sake of us doing this, I'm going to shrink this down.
[01:21:08] so that we can
[01:21:10] We can do this easier.
[01:21:12] Because I need to...
[01:21:13] Show this.
[01:21:19] Thank you.
[01:21:19] Go away. Delete.
[01:21:23] and shrink this down to about here.
[01:21:29] Beautiful. Okay.
[01:21:32] So...
[01:21:34] Okay, first one.
[01:21:36] Thank you.
[01:21:38] Thank you.
[01:21:39] Thank you.
[01:21:43] Second one.
[01:21:45] Click happens here.
[01:21:48] And
[01:21:49] Honestly?
[01:21:52] Third one.
[01:21:58] Click happens here.
[01:22:02] This is kind of the problem with the naive approach.
[01:22:07] Right? Because you click, let's say you click multiple times.
[01:22:12] While this is doing the DOM work.
[01:22:15] Okay.
[01:22:15] It's just going to...
[01:22:17] not be able to process the event handler,
[01:22:21] Because, like, this is the classic, like, QMicroTask problem.  Like, you...
[01:22:25] Now, between the event handler and when you process, is there an animation frame, things change.  But if we just assume that when you call setState, it cues a microtask,
[01:22:35] which isn't interruptible, essentially...
[01:22:40] I guess.
[01:22:42] Uh...
[01:22:44] And that the work from the framework work to the DOM work all happens basically synchronously.
[01:22:51] Um...
[01:22:52] Which it should. This is important because you see this and it's kind of terrible because you click three times. You could have canceled the work, but you you're doing it's going to take you all the way to here to finish. Right. This is a really naive approach because it does Dom work here that it's literally going to throw away.
[01:23:08] Um, so,
[01:23:09] But the problem is, and this comes down to framework design,
[01:23:13] If...
[01:23:14] The blue and the brown have to happen synchronously, generally speaking.  You want the blue and the brown to happen together synchronously because you want those guarantees.  If you broke the brown apart...
[01:23:22] part of the screen is going to show one number and the other part's going to show a different number. If you don't finish the blue and you chunk up the blue and brown parts, you're also going to see the same kind of tearing.
[01:23:34] If you
[01:23:36] generally speaking,
[01:23:39] You can choose the delay when you do the brown, for sure, but the blue has to be completely finished before you do the brown, and you have to do the brown all in one chunk.
[01:23:49] And because it's like
[01:23:50] Like once you start the brown...
[01:23:52] you're kind of
[01:23:53] You're kind of in trouble now. I could see
[01:23:57] that if you got
[01:24:00] To the end of the blue
[01:24:03] And you realize...
[01:24:05] like,
[01:24:06] like this click had already happened, you could do something right.  But generally speaking, this is this is what the naive framework does right in front of us.
[01:24:14] Right.
[01:24:17] Only if the user mashes fiercely to cause things to overlap.  Yeah.
[01:24:20] Right.
[01:24:21] But...
[01:24:22] That's the point of this demo, right?
[01:24:27] So,
[01:24:28] What can we do here?
[01:24:31] Thank you.
[01:24:33] Right.
[01:24:34] Thank you.
[01:24:36] What can we do here?
[01:24:40] Now...
[01:24:41] As I said, assuming we can't interrupt the Brown,
[01:24:45] One thing that we could like,
[01:24:47] One thing that we could do smarter is
[01:24:50] Um...
[01:24:51] make sure that all the green
[01:24:53] runs first.  So like,  what if
[01:24:56] This wasn't one.
[01:24:57] consolidated unit. What if
[01:25:00] there wasn't a QMicroTask, there's a requestAnimationFrame.
[01:25:03] If we did that and we pulled the green out,
[01:25:06] Sorry.
[01:25:08] Let's try this again and we pulled the green out.
[01:25:11] I'm gonna copy this
[01:25:13] We'll keep the naive thing on the screen.
[01:25:16] Okay.
[01:25:18] So this is naive.
[01:25:24] Thank you.
[01:25:26] And let's call this one
[01:25:34] Thank you.
[01:25:35] animation
[01:25:36] frame.
[01:25:39] Dom.
[01:25:40] OK.
[01:25:41] The first thing we can do is kind of pull the green thing out so we can click into it.
[01:25:47] It's gonna be so small, let me see if I can click into it.
[01:25:50] If we pull the green thing out,
[01:25:55] So it doesn't happen...
[01:26:00] as part of this.
[01:26:02] Then,
[01:26:03] In theory,
[01:26:07] we could possibly...
[01:26:12] Thank you.
[01:26:13] Thank you.
[01:26:15] It's so annoying. It's fine, I'll delete this one.
[01:26:19] And I'll grab this one.
[01:26:23] Thank you.
[01:26:27] So you don't need this. It's possible that we could do this.
[01:26:31] You could do this.
[01:26:32] And then
[01:26:32] essentially
[01:26:34] because the framework never saw the update,
[01:26:40] Do this.
[01:26:42] So that's this is our first
[01:26:45] our first
[01:26:46] our first win, right?
[01:26:49] If we can process all the events before
[01:26:53] we do any framework work.
[01:26:56] We like this, this cues it.  As I said, if we use a micro task, we're kind of stuck.  But if we use an animation frame,
[01:27:02] Uh, animation frame...
[01:27:06] Framework. Animation frame, it's actually not the DOM.
[01:27:14] frame
[01:27:15] uh
[01:27:17] Okay.
[01:27:18] framework work.
[01:27:20] We already have a win here, right?
[01:27:24] To be fair...
[01:27:29] Thank you.
[01:27:30] In this kind of basic case where the clicks happen at this time, this is
[01:27:34] honestly probably
[01:27:37] the best thing we could do when the clicks happen like this.
[01:27:41] There's another option here.  Now, I mean...
[01:27:45] And which is kind of where I want to get at is
[01:27:51] Let's move this down here.
[01:27:54] Let's move this down here for a second.
[01:28:00] The other thing here is, okay, this is like all we can do essentially if
[01:28:08] if the work is happening
[01:28:09] during the DOM work. But the other timing is
[01:28:15] Thank you.
[01:28:16] Click.
[01:28:19] Thank you.
[01:28:23] Happens.
[01:28:26] Thank you.
[01:28:27] Thank you.
[01:28:28] during
[01:28:31] Whatever, I'm just like, slapping right now doing brain work.
[01:28:37] work okay.
[01:28:39] Because...
[01:28:40] Another thing is what if
[01:28:43] the click happens earlier. Now, if the click happens before
[01:28:49] And we've split it like this.
[01:28:52] If the click happens, um,
[01:28:57] Here, let me zoom in again so you can see it. If the click happens,
[01:29:01] beef
[01:29:02] like at the same time as the green.
[01:29:07] like sneaks in in between, then we're we're in the best space.  But let's do
[01:29:11] What click happens,
[01:29:13] Um...
[01:29:15] before framework work.
[01:29:18] Let's show what this scenario happens.
[01:29:21] I'm only going to be able to do this with one, so we won't worry about having two here because like the timing is too quick. But if we...
[01:29:29] kind of go in here, sorry,
[01:29:31] I have to
[01:29:32] This is the only one that I did that was not
[01:29:35] separated.
[01:29:38] So.
[01:29:39] Sorry.
[01:29:41] This...
[01:29:42] Thank you.
[01:29:43] here.
[01:29:48] Okay, look, this goes here.
[01:29:54] This goes here, sir. Okay. Hopefully you're still following. But if the click happens here,
[01:29:59] It is
[01:30:00] conceptually possible that we could
[01:30:03] essentially
[01:30:09] Because it's outside.
[01:30:11] do this.
[01:30:12] And then...
[01:30:18] You know, actually I just delete this.
[01:30:20] We don't need any of this.
[01:30:28] There.
[01:30:29] Uh.
[01:30:30] It's funny, the reason this is so hard to draw is the same reason it's so hard to actually do this in this example.
[01:30:37] Because
[01:30:38] the amount of time is passing here, we could do this, right? If you took the same kind of thinking, if we were, if this is clicking during the DOM work, but if you somehow managed to click in that very, very small, before the framework works, this set state could happen, then this set state could happen, basically preempting it, and then you could do the work.
[01:30:58] Right.
[01:31:01] Thank you.
[01:31:02] What happens if we...
[01:31:06] Thank you.
[01:31:10] See, but the problem is, classically speaking, in our naive example,
[01:31:15] If
[01:31:17] We
[01:31:18] Hook this original example here,
[01:31:20] Um,
[01:31:23] Sorry, I'm going to need to
[01:31:29] I'm going to
[01:31:31] I want to make sure this is in the right spot.  OK, yeah.
[01:31:37] This is so funny because it's so tedious because it's so small.
[01:31:42] What happens if the click happens during framework work?
[01:31:47] Okay.
[01:31:49] Let's take our original example here, actually.
[01:31:51] That's why I updated this one.
[01:31:55] So before framework work, we're golden. If we do animation frame, then we can improve stuff. And to be clear, solid 1.0 is completely synchronous, and most QMicrotasks are doing it so they don't actually get the advantage of this because they don't actually run this way. I think some frameworks do run this way.
[01:32:11] But I want to show what happens during framework work.
[01:32:15] So what happens, bang, right here.
[01:32:18] Well,
[01:32:19] Thank you.
[01:32:20] Unfortunately, because these get tied synchronously,
[01:32:26] And this essentially, the rest of this timeline doesn't actually change at all.
[01:32:30] Right.
[01:32:31] Um,
[01:32:34] Thank you.
[01:32:35] I'm gonna remove the second click just
[01:32:38] so that the last two are comparable.
[01:32:40] But essentially,
[01:32:42] Or the third click?
[01:32:45] you're still basically here, right? You only get the benefit
[01:32:50] if the click happens before the framework does the work.  If the click happens during the framework work or during the DOM work,
[01:33:01] like,
[01:33:02] We're going to get jammed up, basically.
[01:33:09] Thank you.
[01:33:13] Thank you.
[01:33:17] Thank you.
[01:33:20] Well, I mean, in this demo, the DOM is...
[01:33:25] is super slow, which is...
[01:33:28] why there's a leg. I mean, you can when I put the void rendering on in this
[01:33:32] demo.
[01:33:33] I click it, I wait for it.
[01:33:35] I can definitely click this before twice before it updates.
[01:33:41] Thank you.
[01:33:42] Thank you.
[01:33:42] Thank you.
[01:33:46] Right? Like, did I not add enough roads?  Let's go 20,000.
[01:33:51] Pfff.
[01:33:53] Mm-hmm.
[01:33:54] Right. I can definitely click this before it updates. See, this updates fast, but look at this one. This is because it tears. Look at this one.
[01:34:00] Thank you.
[01:34:01] I mean, even here, it's because the challenge is because this one's tearing where this one's not tearing.
[01:34:09] I can show better on the solid version,
[01:34:11] because it's not tearing, I can definitely click this
[01:34:14] multiple times click click click click before before this this happens because the DOM work.  What's happening here in the react version here is it updates the one
[01:34:25] element first and then it defers the rest of the work here, which is
[01:34:29] which is why it's responsive.
[01:34:32] But...
[01:34:33] You could also accomplish this
[01:34:36] in the solid version without anything fancy by just decoupling the signal like like
[01:34:41] Thank you.
[01:34:42] Like a very basic idea is...
[01:34:45] - Yeah.
[01:34:46] I've...
[01:34:47] two signals, one signal updating the button,  and one signal updating this table.  And then when you click the button,  have the first signal update the button
[01:34:58] right away and have the other one call it in a set time up.
[01:35:01] you would get the same delayed thing without doing anything fancy. Right.  It doesn't really matter in this example. I'm not saying you should do that.  I'm just saying it doesn't matter in this example because the size of the DOM  update is so freaking huge.
[01:35:14] Right?
[01:35:18] Thank you.
[01:35:23] Thank you.
[01:35:26] Thank you.
[01:35:28] Who's interrupting?
[01:35:33] But what I'm getting at is the base JavaScript has no interruption.  Like there's no interrupting.  That's why we went to the micro task.  You're basically once you're in the sync execution,
[01:35:44] Bye.
[01:35:45] There's no interruption. But let's get here. The DOM
[01:35:51] Thank you.
[01:35:52] updates. This brown thing.
[01:35:55] I mean, the browser might have some scheduling side in its world that I'm not talking about here.  You know, like little things like separation between layout and paint and all this kind of stuff.  But like.
[01:36:05] It doesn't matter. The brown section, the media part is rather large. And what I'm trying to get at here is
[01:36:13] If a click happens during the framework work, you're still in the same boat.  The only way you win here in this example is if you can...
[01:36:20] really win.
[01:36:21] Like,
[01:36:23] First, you can win if you defer the framework work, you split it from calling the event handler. But otherwise, you basically only win if you can click so fast.
[01:36:37] that the framework hasn't even picked up, like essentially like in less than like a millisecond, like.
[01:36:44] you know, like it's that time on zero timing.
[01:36:47] So,
[01:36:48] What does time slicing have to do with this?
[01:36:51] What if
[01:36:53] You could
[01:36:54] interrupt the framework work, right? So this is
[01:36:57] Thank you.
[01:36:58] Thank you.
[01:36:59] This is like no time slicing. No time slicing.
[01:37:05] Now let's add time slicing.
[01:37:09] The idea with time slicing is
[01:37:11] Thank you.
[01:37:13] grab this whole thing.
[01:37:17] The idea with time slicing is
[01:37:24] Thank you.
[01:37:26] you
[01:37:29] Thank you.
[01:37:32] Now, this is where I'm just going to get rid of my...
[01:37:36] my whole thing. The idea of time slicing is
[01:37:47] The framework,
[01:37:49] These...
[01:37:50] the event click so it shrinks the blue down
[01:37:53] thanks to the event click that happened while it was working.
[01:37:58] Right?
[01:38:01] And then it grabs this, or sorry, it grabs this,
[01:38:13] And that...
[01:38:17] Thank you.
[01:38:19] then it runs the full that
[01:38:24] And then it runs this.
[01:38:27] We'll just get rid of this.
[01:38:29] So you can see that
[01:38:33] By interrupting the blue.
[01:38:36] when the next event comes in.
[01:38:38] we can...
[01:38:39] Thank you.
[01:38:40] drastically, we can basically get the same impact as before the framework work.  It's a little bit longer because it has to redo the blue here, like part of the blue, because it interrupted it.  But what's cool about
[01:38:52] this is that we kind of end up
[01:38:56] with the same
[01:38:58] this kind of same timeline, right?
[01:39:02] But you start seeing
[01:39:07] Thank you.
[01:39:08] Well, use like scheduler.yield or something. In the blue work, the framework controls its own queue of stuff. It queues a bunch of work and it gets partly through the blue. It hasn't impacted the DOM yet.
[01:39:20] So it's like, it just knows that it's like rendered your React components.  And then it's kind of like, okay, I'm doing some work.  And then it's like,
[01:39:25] Oh.
[01:39:27] Let's like,
[01:39:29] like maybe it's rendered half the components and then it's like oh crap
[01:39:33] DOM input.
[01:39:34] Thank you.
[01:39:34] Throw that away.
[01:39:37] I
[01:39:39] you know,
[01:39:39] Yield.
[01:39:41] You know.
[01:39:42] Let the browser do it.  It gets a new set state.
[01:39:45] And then it doesn't necessarily have to throw it away, to be fair. It could keep on going. But when the new set state comes in, it goes, "Oh, actually what I was doing before doesn't matter anymore." So basically it's like, I'm going through some components. Oh, something more important comes in. So every X amount of milliseconds, I'm going to yield to the browser while I'm running my fiber, whatever React internal thing is. It gets to a certain point where it's like, I've run some components and it goes, "Oh,
[01:40:09] Let's pause. Let's check. Oh, there's something more important. Stop. Then...
[01:40:15] It runs the event, sets the state, and goes, oh, I actually have to re-render these components anyways.  So old work, thrown away.  Does the whole re-render, and then gets to the end and finishes.
[01:40:25] Right.
[01:40:26] Um...
[01:40:27] So the blue can be interrupted because the framework is aware.
[01:40:31] Brown cannot really be interrupted. So,
[01:40:35] I'm hoping you start understanding why this demo is terrible.
[01:40:40] Like it literally shows nothing because it could show if a framework uses request animation frame to handle, um,
[01:40:49] the difference between when it calls the...
[01:40:52] event handler code and the set state.  But guess what?  I mean, I'm not suggesting you do this,  but you could do this yourself.  Inside your click handler, you could say,  requestAnimationFrame setState.
[01:41:02] just
[01:41:03] just
[01:41:04] I'm not suggesting this is the way you want to do it. A lot of frameworks use QMicroTask because they want to keep those guarantees. Because it's one thing for the user to go, okay, I want to use a set timeout, I'm going to schedule stuff. You understand you did it. But if the framework starts...
[01:41:19] Acting unpredictably like because you and your set timeouts are sneaking in between you calling set state you get inconsistent. I don't even think.
[01:41:27] React necessarily uses requestAnimationFrame. I'm pretty sure they use QMicrotask. But
[01:41:34] It doesn't matter here because
[01:41:36] they can interrupt with the blue, right? Like, so they can do this. So anything  that happens before or during the framework work, they can essentially end up with this last.
[01:41:46] picture with their time slicing.
[01:41:49] But if something naive like Solid,  you're going to end up
[01:41:53] with this, generally speaking.  Even if we shrink the blue...
[01:41:57] a little bit.
[01:41:59] Um...
[01:42:00] The problem is,
[01:42:02] I'm going to go.
[01:42:03] In order to see the difference in this demo, like in order to actually see the difference,
[01:42:08] actually see the slowdown, we have to crank the rows so high up. And what does cranking the rows do in this demo?
[01:42:15] It just makes the brown bar longer.  It makes the blue bar longer, too, but it actually
[01:42:22] even if it was linear, and I'd say it actually makes the brown bar exponentially longer,  but even if it was linear, like they'd added the same amount to both,
[01:42:29] The brown bar is basically running away with this thing. So the more we scale up the nodes, it doesn't actually prove anything. It just makes the length here that's interruptible
[01:42:43] slightly larger, but more than likely,
[01:42:46] I'm gonna be clicking
[01:42:48] under the brown section of the timeline.
[01:42:52] Right?
[01:42:56] React currently throws away interrupter work. If it didn't have to do that, it would actually help that demo. Yeah, I agree.
[01:43:08] Like if React could...
[01:43:11] continue
[01:43:12] But all that would do, essentially,
[01:43:16] is
[01:43:18] I...
[01:43:19] In this demo, again, it's only the blue part. It might only help the tiniest bit.
[01:43:24] because some of the work does need to be redone because like in this demo actually wouldn't help  because they're all the same count so like all the nodes you already worked on you have to redo anyways
[01:43:33] But in a different demo, I could picture where this mattered.  But because the count actually impacts all the nodes,  you have to redo all the work you did anyways.  In general, React interruption, having to redo all the work is...
[01:43:43] perhaps, you know,
[01:43:44] are prohibitive.
[01:43:46] I'll...
[01:43:47] It's tricky. I mean, one of the cool things that we've been working on with the Solid 2.0 reactivity system is using a heap so the work gets sorted.
[01:43:56] Um,
[01:43:57] But I mean, it's the same problem when you get to this.  Like so and technically because the reactive graph is not the rendering, like we don't have to re-render the components.  We only have to like propagate the data.  So but this demo again, it wouldn't help us because.
[01:44:09] The topmost thing in the reactive graph is the thing that re-triggers, and you re-render, you re-propagate the whole thing.  But in a different world, the fact that we reuse it.
[01:44:18] our nodes instead of
[01:44:21] re-rendering them is a slight benefit. React is looking at doing that in the future as well, but this demo doesn't even actually get to leverage that because it literally updates all the counts. And as we scale it, we just make the brown bar longer. So this is the most useless demo
[01:44:38] ever, ever.
[01:44:39] for showing the value of time slicing. What it does show you though is
[01:44:45] the difference of feel between something lagging
[01:44:49] And something...
[01:44:51] Like something being non-blocking, but high latency,  and something being blocking, but quicker updates.  And since in both examples, this bar gets chomped up
[01:45:05] Thank you.
[01:45:06] And less you're clicking jamming it.
[01:45:10] you probably are going to prefer the blocking shorter than the non-blocking less latency.  That's my...
[01:45:17] That's my perspective from this demo, but I honestly, I could go either way. This demo sucks.
[01:45:24] And
[01:45:25] I don't know where this originally came from. I know Million did something like this. I, I, is this Dan's fault? I don't know. This whole radar thing and CPU thing is just.
[01:45:34] Everyone who started using the stupid radar thing...
[01:45:38] did examples that were basically large brown bars.
[01:45:42] Which is like, doesn't do anything.  And then they're like, look how it handles these large brown bars.  And you start going...
[01:45:48] Like they're the kind of things that, as I said, someone literally putting request
[01:45:52] animation frame in a click handler
[01:45:55] would get you the same results.  Do you know what I mean?  Like there's a lot of benchmarks like that.  I think I wrote an article years ago  about how to cheat at benchmarks.
[01:46:04] And...
[01:46:05] Or like...
[01:46:06] Let me look at medium. Maybe that's good reading for someone.
[01:46:12] View profile.
[01:46:16] uh...
[01:46:18] Stories.
[01:46:21] Thank you.
[01:46:22] No, not drafts scheduled.
[01:46:26] No, published. Sorry.
[01:46:27] I haven't worked on Medium for ages.
[01:46:31] Thank you.
[01:46:32] I want to understand your JavaScript UI benchmarking.  Here we go.  2019.
[01:46:38] Oh, it's a member-only story? God, why do I keep this stuff in here? I'm sorry, guys.
[01:46:42] Anyway, it's probably because I published it on JavaScript in plain English.  I published it on publications and they made me...
[01:46:48] my stuff behind walls. It's not like I'm making any money off this stuff.
[01:46:52] Okay, but there's a part where I was talking about different benchmarks, right?  And we've all seen that, but animation benchmarks are ones that have, like,
[01:47:02] like this one with this radar or this Sipirsky or the oldest version is the actual uh one of my the  you guys ever seen this one circles benchmark?
[01:47:14] uh ember and knockout had um
[01:47:19] This old benchmark back in the day here.
[01:47:22] This is the oldest animation benchmark. And the funniest thing is everybody's really good now except like Backbone.
[01:47:29] Like,
[01:47:31] He just sits there and spins a bunch of circles.
[01:47:33] Um,
[01:47:34] Five milliseconds for backbone. Okay, how's Inferno? Ooh, guess what? Also five milliseconds. Knockout.
[01:47:40] Oh, 5.3 milliseconds per loop.  Okay, it's a little...
[01:47:44] I mean, I don't even know if... Lit?
[01:47:48] Five. So Knockout was a little bit slower. I guess it reacts to them. How was Preact doing?  Oh, around the same as Knockout.
[01:47:53] React? Is this one going to be super slow? No. 520 actually beats up Preact.
[01:47:58] Is this old solid one good?
[01:48:00] I don't even know.
[01:48:01] About five. Okay. It's about the same as Inferno.
[01:48:05] Solid with proxies?
[01:48:07] Oh, about the same as, like, basically, how about Svelte?  Well, Svelte?
[01:48:12] About the same as solid.
[01:48:16] Third plus?
[01:48:18] Also about the same.
[01:48:20] How about raw vanilla JavaScript?
[01:48:23] Oh, slightly under five.  We have a winner.
[01:48:26] My point is this benchmark used to be a big deal. It's literally doesn't do anything anymore.
[01:48:33] Um...
[01:48:36] Uh...
[01:48:37] But this is the classic animation benchmark.  There's only so many types of benchmarks.  And when we talk about this, like transitions and time slicing,  their animation benchmark, I say, what to expect?  These traditionally catered reactive DOM libraries over virtual DOM libraries,  immutable over immutable data.  A similar technique was used for MobX versus Redux comparison.  These tests are usually too extreme to be considered real world,  but they do give visual idea how libraries do great as browsers get overloaded.  Watch out for it.  These benchmarks test scheduling over it.  So implementations using different methods make the biggest difference.
[01:49:07] RequestAnimationFrame, Promise.Resolver, Request.AdleCallback made a much bigger difference than most things the library does. These are techniques anyone can use. A lot of these tests are from an earlier time where these techniques were not expected, so implementations can make certain libraries appear quicker than others purely by using these techniques.
[01:49:21] I'm not.
[01:49:22] I had the right conclusion six years ago.  Um, okay.
[01:49:26] Thank you.
[01:49:26] Bye.
[01:49:28] Yeah, yeah, yeah, yeah. I mean...
[01:49:31] It's
[01:49:33] It's
[01:49:34] It's compelling, right? It's the drawing one.
[01:49:37] Apparently this is like the demo that the React team did to compare...
[01:49:42] signals to...
[01:49:45] to the store, sorry, to, to react update thing, except they put the whole thing in one signal, essentially, instead of using stores or doing a fine grain. So it's like, it's like,
[01:49:56] Yeah.
[01:49:57] Mobex should be faster on this test because it's more granular.  It's just...
[01:50:01] conceptually...
[01:50:04] It's...
[01:50:05] Anyway.
[01:50:06] It's a, it's a, it's...
[01:50:09] It depends, I guess.  Like if, if what this is overloading is if every cell is a component, then you're basically just testing the speed of Redux's, um,
[01:50:19] connect middleware, essentially,  versus MobX's signal notification thing.
[01:50:25] In an actual granular system, you could get even more benefits by going directly to the DOM, yeah.
[01:50:31] I'm going to...
[01:50:34] I'm not sure.
[01:50:35] Yeah, still kicking around ideas description. That's true. Yeah, yeah, yeah. I had some great chats with Mark Erickson, who, uh,
[01:50:42] For those who don't know, he's the maintainer of Redux.
[01:50:45] and  and
[01:50:47] kind of looking at this because these problems are kind of fundamental, right?  But it is the classic immutability versus immutability kind of like selectors versus reactivity question.  And like, can each learn from each other?  Can, you know, but it is, it is, it is kind of funny because, you know,
[01:51:05] A lot of times,
[01:51:06] these tests literally come down to, "Oh, I put a request animation frame somewhere."
[01:51:11] And it's because in order to show the
[01:51:15] It's because the load is generally going to be the DOM, which means that you end up a lot in these scenarios where the brown bar is absurdly long and we're like doing it.  Don't get me wrong.
[01:51:25] benchmarks, the brown bar is absurdly long.  It's kind of interesting why in stuff like JS framework benchmark,
[01:51:33] Um,
[01:51:34] you know,  where the brown bar is actually the longest part,  we actually see benefits for fine grained things over BDOM.  And it's because what they,  with the slowdown,
[01:51:42] They really just blow up the blue section on these kind of simple table tests.
[01:51:49] When you have async involved like this where you're talking about multiple tracks, it's not, it's how do you combine this blue section with this blue section? You know what I mean? Like that or like this blue section with this blue section. Like how do you count that? I think that makes it a lot harder to measure where it's like really easy to count the whole time, you know?
[01:52:07] Yeah.
[01:52:08] like start end, but like counting the specific tracks  of performance is a lot harder.  And the problem is even if you do that,
[01:52:16] let's say I count all the blue,  but like,  let's say the blue is shorter,  but then the brown is longer.  When people actually look at it,
[01:52:23] They're going to be like,
[01:52:24] Yes, this is faster, but I'm not seeing it, so who cares?
[01:52:30] Thank you.
[01:52:34] Thank you.
[01:52:35] So like, like, this is why,
[01:52:42] I'm not like this whole, I should put a header on this whole section here with Excel. Let's do this. This is, what do you want to call this stupid demo?
[01:52:53] Radar demo? Yeah, let's call this radar demo.
[01:52:57] Thank you.
[01:52:58] Um...
[01:52:59] Radar
[01:53:02] demo.
[01:53:02] I talked about this on stream before, but you kind of...
[01:53:08] you kind of understand, like I was going to go and actually make a solid implementation that was faster and stuff, but I can't even get a good slow baseline to work off of to actually doing it because by the time I push the thing far enough that solid is like slower than react react looks like crap to like it's just like there's, there's no winning at this, this demo like, um,
[01:53:31] Hey.
[01:53:32] And it's because the blue part is so small.
[01:53:40] Yeah, which brings it to here. This has been one of the challenges because it's like, when does the blue bar actually get large? And...
[01:53:51] The answer is, I mean, people, this is where people make like snide remarks.  It's like when your components re-render over and over again,  like people like, like giving little jabs at React.  Like this is, this is where the whole,  they're solving their own problem aspect comes from.  But,
[01:54:07] Yeah.
[01:54:08] The blue bar becomes long when the computation gets extreme and when end-user code is involved, not benchmarks.
[01:54:17] Like,
[01:54:18] It's very hard to make the blue bar long in a benchmark.
[01:54:22] It's not something you can just go in and go...
[01:54:24] Guess what, guys?
[01:54:26] Blue bar, let's turn it up.
[01:54:28] Usually.
[01:54:30] You can do it artificially, but you can't do it through anything real, which actually brings us to our next example.  The actual good thing.
[01:54:38] Um,
[01:54:39] concurrent demo, or at least in the past good concurrent demo, because
[01:54:44] The answer is, in real life,
[01:54:46] It happens.
[01:54:48] but you're never going to see it in a toy demo. It's going to be caused by some weird interaction.  People can get here accidentally by causing too many re-renders, but generally speaking,
[01:54:59] This has been my problem. I added time slicing, like React-style time slicing, to solid in 1.0 as an experimental flag.
[01:55:06] And then, you know, so I could test it over time.  And I never, ever, ever saw...  And it's probably because of the apps that I've been used or playing with or the demos or stuff I've got my hands in, not some like...
[01:55:17] I just never saw a use for it
[01:55:20] it generally speaking like it like in the small place where you're like okay there was a benefit  there you're just like
[01:55:26] So what?
[01:55:27] Like...
[01:55:28] Like it wasn't like a defining thing.  Like if you want to make this work better, like this example in front of me,
[01:55:34] just make the DOM work more reasonable. At 20,000 rows, I think we can use virtualization, right?  Like we're kind of at agreement here. Like just, just,
[01:55:43] Your problem here is the brown. That's not changing, right? So like
[01:55:49] The framework is
[01:55:50] not the problem.
[01:55:54] Thank you.
[01:55:56] See, even when you sort 20,000 rows on the client,
[01:56:00] Um,
[01:56:02] The blue, the sorting is blue.
[01:56:06] And then a lot of the work is also brown.  The brown is actually still huge in there.  But yes, this is what the JS framework benchmark will test.
[01:56:16] unless your sorting algorithm is really naive,
[01:56:21] Which in React's case, it is naive, because I think they made a call.  They're just like, why do I need a crazy reconciliation algorithm when literally you should virtualize at the point this matters?  Like, okay.
[01:56:31] If you look at JS Framework benchmark,
[01:56:34] And the one place that reacts, you can tell there's like a split.  There's like guys who have smart, it's the swap rows, which is the closest of sort.  It's literally just like switching two rows near the end.
[01:56:49] There's like a wall here.  You start, and all these things,  this is not a gradual climb as you get into slower libraries.  You start...
[01:56:58] And then you'll start seeing these spikes. Oh, what's this one? 97, 96.
[01:57:02] Okay, those ones are really bad, but what you'll get to is everybody having these smart ones around 15, 13, 15 milliseconds, and then you'll get
[01:57:11] to here, where you're like, "Imba, 25."
[01:57:14] Angular nozone 25. Angular 25.
[01:57:18] which is the middle ground.  And then you get into React,
[01:57:21] Hooks. And where does vanilla React?
[01:57:23] "It should be in here."
[01:57:25] React hooks is basically vanilla React, right?  And then where it's React compiler, it should also be right next to it.
[01:57:31] Tuck.
[01:57:32] They're basically the same.
[01:57:34] in performance. React books, can I find the compiler?
[01:57:41] Oh, actually, the React compiler has...
[01:57:43] Thank you.
[01:57:45] Oh.
[01:57:46] This last run, it went slightly slower. I mean, whatever. It should be like, it doesn't matter.  React classes is here. React hooks is like... My point is, you'll get to here and you'll see that it's 103.  So basically there's frameworks that are 13 milliseconds and there are ones that are 100 that do the naive like React.
[01:58:02] This is...
[01:58:05] just like it's a choice.  React could do a smarter reconcile if they wanted to.  They just don't think it's worth it.  So if I remove...
[01:58:14] swap rows from the benchmarks. How does that change stuff here? Well, I mean, the front of the graph, it doesn't really change stuff all that much, right?
[01:58:22] solid and felt. And this is a very crowded space now. It's funny. This back in the day, you look at the old charts and it was just like three of us. Now it's like everyone.
[01:58:32] But my point is
[01:58:35] Where does React sit if we remove this benchmark?
[01:58:39] Okay, so we have Preact.
[01:58:43] Preact.
[01:58:48] Yeah, okay.
[01:58:49] Yeah, 145.
[01:58:54] I don't think that actually ended up changing stuff. It actually moved react ahead of angular.
[01:58:58] Usually React and Angular are very close. Oh no, actually there's an Angular right here, never mind.
[01:59:03] Angular's usually they're right next to each other and they've been keeping lockstep over the years. But then I think react are angular slightly pulled ahead recently. But yeah, I mean,
[01:59:14] And
[01:59:15] But if you look at this, and I look at the React implementation, there's nothing really...
[01:59:20] low here. There's a bit of a release timing  because the memory is a little high, but like
[01:59:25] Everybody's green.
[01:59:26] Pretty much.
[01:59:30] Like, obviously not as green as...
[01:59:35] as down here.
[01:59:38] But...
[01:59:39] Thank you.
[01:59:41] Yeah.
[01:59:42] Thank you.
[01:59:43] You kind of get what I'm saying.  Honestly, that's probably the biggest difference between JS frameworks right now in this kind of benchmark is the row sorting.
[01:59:53] Thank you.
[01:59:54] Thank you.
[01:59:56] Yeah, I mean...
[02:00:02] Again, there's a reason these tests exist, right?  Because the idea is...
[02:00:10] *sniff*
[02:00:11] If you put a big enough load on something, you can kind of...
[02:00:17] anticipate how it might scale in reality but this is not actual reality so yeah
[02:00:26] Thank you.
[02:00:31] With custom, yeah, yeah, yeah.  Both of the logs up, yeah.
[02:00:36] Most, a lot of the benchmarks have been using, like, the tools that are coming in the browser and stuff.  Like, this benchmark does a good job in terms of keeping itself out of it.
[02:00:46] Stefan is still working on it notoriously, like...
[02:00:51] constantly trying to improve on it. So like it runs actually in the background as a process that spins up
[02:01:01] isolated...
[02:01:02] Chrome instances and then clears it, does warm ups, and then like isolates the part of the actual timeline to actually do the measurements. This is one of the best
[02:01:12] benchmarks out there, but all that being said,
[02:01:17] Thank you.
[02:01:18] Brown bar, right?
[02:01:22] Um...
[02:01:26] Okay. Um,
[02:01:28] Thank you.
[02:01:31] I mean, it does have impact. I said that doesn't matter much because of the scale of things, but like,
[02:01:39] 245 milliseconds to show a page with lots of elements on it, let's say, or 250.
[02:01:45] And
[02:01:47] If you
[02:01:48] you know,
[02:01:48] Yeah.
[02:01:49] Sorry.
[02:01:50] Scroll this way back to wherever.
[02:01:53] wherever React was, um...
[02:01:57] React.
[02:01:59] Thank you.
[02:01:59] - Right.
[02:02:00] Yeah, I mean, where is it?
[02:02:06] React hooks 400 like it is it is suggesting that in this case, react takes almost twice as long, you know, 66% longer to show your content like.
[02:02:19] That might scale up, that might make a difference with snapping us.  200 milliseconds might be noticeable, you know, like,
[02:02:26] I don't know.
[02:02:28] Maybe your app's more complicated than a flat table with 10,000 elements.  I don't know.
[02:02:33] So, I mean, there's a world this could
[02:02:36] could not be a thing, but I just wanted to kind of like,
[02:02:40] talk about like the nature of of these kind of benchmarks and actually I talk about them the  snapshot benchmarks which is a diffing benchmark which is which favors vdom and then if I in my  article if I go down here the last one I called the to-do's benchmark JS framework benchmarks  is the to-do's benchmark it's basically just used as a large table um almost all javascript frameworks  are benchmarks for ui frameworks fall into these three categories um but yeah we're focusing on
[02:03:10] you.
[02:03:10] The other example,
[02:03:13] is this one, Sierpinski.
[02:03:16] Right. Well,
[02:03:17] Now,
[02:03:18] This was this was a very
[02:03:22] Misunderstood.
[02:03:24] Benchmark?
[02:03:25] I tried collecting all of them, I could, for all the different frameworks here.  And if you actually go into almost all of these frameworks,
[02:03:31] They're like, look how great my thing is.  And they did stuff like this, increase the number of dots.
[02:03:37] Oh, okay, I increased it too far, sorry.
[02:03:39] Um,
[02:03:44] Thank you.
[02:03:45] But like almost everyone missed the point of this demo when it came out.
[02:03:52] Thank you.
[02:03:54] Thank you.
[02:03:55] Thank you.
[02:03:57] Sorry, I need to get out of here, I killed the imbo one. Okay.
[02:04:00] I'll double it. I'll decrease. Okay, I'll double it.
[02:04:03] And then they go in and they do slowdowns. And like, obviously this is updating fine with like these number dots. The problem is these demos didn't do one thing that reacted in the demo, which is really important.
[02:04:15] See increasing the dots.
[02:04:17] All that's doing,
[02:04:19] is increasing the brown, essentially.
[02:04:21] As you can tell,
[02:04:23] Any framework can
[02:04:25] do a lot of dots here. Let's do here. 4,000.
[02:04:29] It's starting to sluggish a little bit, but you look at the updates are keeping up with me. Yeah.
[02:04:34] So,
[02:04:36] If I go back to 1000,
[02:04:37] Everyone can do a thousand.
[02:04:39] In their sleep.
[02:04:40] Right, even under probably significant slowdown.  I'm just using Inba here as an example, but if I went to performance here and then I was like, okay, let's do something like throttling.  Let's do like 6x.
[02:04:51] 6x, not a problem. Can we do 20x?
[02:04:55] Okay, 20x is starting to be a problem.
[02:04:58] Which makes sense because 20,000 was too much.
[02:05:01] But.
[02:05:03] You know, because what
[02:05:05] My point is, like...
[02:05:08] Yeah, it's not having a problem with 6x slowdown.  Like, this is not...
[02:05:13] you know,
[02:05:16] This is not...
[02:05:19] This is not testing anything.  It's scaling up the DOM elements...
[02:05:22] Not testing anything.
[02:05:24] what if we go back to the original
[02:05:29] Examples without slowdown. Yeah.
[02:05:32] What stencil do. I thought the stencil was cute.
[02:05:35] Because the stencil version works fine at first.
[02:05:40] But they do, and they do have the slowdown.  So they are doing the thing right.  I think Stencil was really cute  because you could get an idea of how frameworks worked.
[02:05:47] Actually, this one stays smooth. Good on them. Okay. Yeah, so they did a good job. Okay, never mind.
[02:05:53] Okay, so Stencil did it properly. I don't know if they did originally, maybe they've updated it.
[02:05:59] But the whole point of this demo was the original React demo looked like this.
[02:06:04] Oh.
[02:06:06] Thank you.
[02:06:07] with old React...
[02:06:11] EWE.
[02:06:12] You guys can see a jump.  Every...
[02:06:15] It's not even animating in between.
[02:06:17] I...
[02:06:18] I don't know if the old React could even render the circles properly, but definitely every time the count goes up, it has an issue, right?
[02:06:25] And then the React Fiber version obviously was butter smooth like we're seeing, right?
[02:06:30] Right.
[02:06:30] Beautiful.
[02:06:32] Thank you.
[02:06:32] I also made a solid version
[02:06:36] for Solid 1.0, and this is actually using time slicing, similar to the React version. Okay, cool.
[02:06:42] Um,
[02:06:43] Let's look at the code for this for a bit to understand what it's actually doing. I actually
[02:06:47] Um, remade it.
[02:06:52] Sorry, it's factblast.
[02:06:55] Let's look at this one.
[02:07:00] Ah.
[02:07:02] Thank you.
[02:07:04] Are they gonna make me?
[02:07:07] Okay, let's sign in. Okay.
[02:07:13] Thank you.
[02:07:13] Give me a second.
[02:07:16] Thank you.
[02:07:19] Okay.
[02:07:20] Thank you.
[02:07:22] I feel like security has gone up everywhere recently, which is good.
[02:07:25] It just feels like I'm always getting booted out of everything.
[02:07:30] you
[02:07:33] Thank you.
[02:07:34] Okay, cool.
[02:07:35] Thank you.
[02:07:37] I'm going to show you the code. This example is not
[02:07:42] doing what we want it to, but you can pretend that the original code
[02:07:46] is essentially this. Like this example is
[02:07:50] It's smooth.
[02:07:52] except when the numbers count.
[02:07:54] Smooth jump. This is kind of like what I'd expected to do. But I'll show you the code. The original demo code was in class components.
[02:08:02] Let's ignore this for a reason. I'll explain why this is looking like this. But this is essentially the equivalent React code so that we can understand what this demo is showcasing and why it's so cool that in our old version of the demo here with React Fiber that we're getting this butter smooth animation, hover states are updating and whatnot. So
[02:08:24] The idea is this:
[02:08:26] The triangle demo has basically two states in it.  It has an elapsed timer that updates
[02:08:33] Um,
[02:08:34] It's using request animation time. It's basically the total time that's happened since the app started.
[02:08:42] Using the timer from the request animation frame, I think. Let me see. Let me look at the update. No, it doesn't actually use the timer. It just does date now versus like the current start times. Whatever. It doesn't matter. And then
[02:08:54] The second thing it has is
[02:08:57] it updates the seconds mod 10.  So it goes one, two, three, like every second,
[02:09:05] with, um, on an interval.
[02:09:08] It updates.
[02:09:09] That 10, 1, 2, 3, 4, sorry...
[02:09:14] Okay.
[02:09:15] So every second it's 8, 9...
[02:09:18] 10. And the trick is the trick to this app is that the elapsed time
[02:09:25] here is only being used
[02:09:27] to calculate the scale.
[02:09:30] which is just like the math here and the scale.
[02:09:34] is being used
[02:09:36] in the root component to do a style transform on the DOM.  So the scale never goes down to the children.  It's literally just the whole animation you're seeing  where they're shrinking in and moving here  is actually controlled by CSS, which is,
[02:09:52] the way it should be, arguably, right? But
[02:09:56] the the children
[02:09:59] Get the seconds.
[02:10:00] and each triangle
[02:10:02] down to a certain thing where we finally render the dots, basically passes those children through. It's three children, so triangle begets triangle begets triangle. The big gotcha here, and the thing that a bunch of them skipped, is
[02:10:16] In the middle of each triangle component,
[02:10:19] we have a synchronous blocking loop.
[02:10:22] Which is...
[02:10:24] Thank you.
[02:10:25] Oh.
[02:10:26] Which is heavy, right? It's... you might be like, okay, performance now 0.8, so like...
[02:10:34] How much is that? Like 0.8?
[02:10:38] Like that's not much, right?  But if you add it for every single triangle,  and you have to think about it, you hit the component,  render the children, render the children, each one,
[02:10:48] It just keeps on adding to it because you start rendering and you wait, then you get the next round, then you wait.  It's cascading. It's like a waterfall.  This is a beautiful example of making the blue
[02:10:59] large because
[02:11:02] they actually get through the React component tree
[02:11:05] is...
[02:11:06] kind of
[02:11:08] expensive here, right? It's like boom.
[02:11:10] You know
[02:11:12] Each one.
[02:11:14] Now,
[02:11:16] I'm gonna remove this transition for a second.
[02:11:19] Start transition.
[02:11:21] Just for the sake of
[02:11:23] Okay, let's see if I can do this.
[02:11:28] Yeah, and keep in mind I'm in dev mode. You get better performance outside demo, but everything I'm doing here today is gonna be in dev mode  So it doesn't really make a huge difference. But the point is
[02:11:36] You see it animates.
[02:11:38] And then every time the number
[02:11:40] It happens.
[02:11:41] it freezes. And the reason for this is
[02:11:44] See, we memoize the component. This is the key to this whole thing.
[02:11:47] We memoize the triangle, so every time the scale updates, like the elapsed time updates, we don't have to re-render any of the React tree. It just stops at the top. So the animations can happen without re-rendering the tree. But every time the seconds go, it has to get all the way down to the dots, and every piece in the middle is this expensive thing.
[02:12:11] Thank you.
[02:12:13] I mean, as long as it's not too long.
[02:12:18] I mean, this...  But this is clever, because...
[02:12:21] If I remove this,
[02:12:25] Thank you.
[02:12:25] Thank you.
[02:12:27] It's easy. Right? Nothing happened. Like, this is easy, right?
[02:12:35] Thank you.
[02:12:36] If I add this back in,
[02:12:39] we start having some fun.  Now, here's why the fun is a problem.
[02:12:44] Let's see if you can see it on stream.
[02:12:45] Do you see how the hover state is not keeping up with me?
[02:12:52] When it freezes up, the hover state, the yellow, stays away from where my mouse is.
[02:12:58] Can you see that on the stream?
[02:13:11] You can see that, right?  Like when I move the mouse, like it,
[02:13:14] Thank you.
[02:13:15] the old hover state when it freezes up.
[02:13:18] Happens.
[02:13:20] Yeah, okay.
[02:13:23] This is not responsive. This kind of sucks.
[02:13:28] Well, the hover state is happening from JS.  It's the animations are CSS,  but the hover state is happening because
[02:13:40] We go,
[02:13:42] on mouse enter on mouse exit we have events
[02:13:45] And we go setHover true useState.
[02:13:48] And then that updates whether we
[02:13:50] Apply, where's the hover, up here. There's two places. Background, we change the background color from blue to yellow.
[02:13:57] and we also add these stars around the children.
[02:14:02] But you can see the problem.
[02:14:05] Thank you.
[02:14:09] I mean, you could do, hover with CSS, but the point of this is to show that the whole thing lags, even though the user input should take priority, like whether this was typing or clicking.
[02:14:24] So you start understanding this demo a bit better, because it's dirt simple to render a thousand circles, but it's not dirt simple to render a thousand circles that are artificially long.
[02:14:37] Bye.
[02:14:39] If we use what we've learned about React's transitions and time slicing,
[02:14:45] then this example gets a little bit more
[02:14:49] interesting, right? Like, you know, how to solve it, right? What's beautiful is that the blue outweighs the brown in this example. So,
[02:14:57] We have a very different scenario.
[02:15:05] Right, so let me continue.
[02:15:11] We can almost...
[02:15:13] Thank you.
[02:15:15] We can almost keep these exact
[02:15:18] Thank you.
[02:15:19] Same.
[02:15:21] things
[02:15:22] like examples, except like to scale down the brown part, like,
[02:15:27] Like if I move...
[02:15:30] Second, zoom out.
[02:15:35] and move over here.
[02:15:48] Instead of click,
[02:15:49] Um...
[02:15:51] This is hover, but you get that it's the same thing.
[02:15:55] You get that it's like the same thing, right? So you're Pinsky.
[02:15:59] Right.
[02:16:02] Thank you.
[02:16:09] And to the click it's hover, but
[02:16:11] But instead, now,
[02:16:15] I'm going to delete the whites.  I want to delete the white circles,  because I don't think they're actually that useful.  I thought they'd help me group.
[02:16:24] the stuff but
[02:16:29] Thank you.
[02:16:32] Thank you.
[02:16:33] Okay, so now we're in a world where this is small,
[02:16:40] Thank you.
[02:16:42] Kind of like this.
[02:16:49] Thank you.
[02:16:51] And again, if we have a couple of clicks happen,
[02:16:58] You know, it doesn't matter if it's on blue or on brown or whatever.
[02:17:02] We take our...
[02:17:06] Thank you.
[02:17:08] Thank you.
[02:17:10] Kind of a little further, sorry.
[02:17:11] Thank you.
[02:17:12] We take our thing.
[02:17:16] for so long it was off the end.
[02:17:18] Um.
[02:17:28] Thank you.
[02:17:29] Thank you.
[02:17:32] The naive approach is still going to end up stacking it like this.
[02:17:36] But
[02:17:37] Um,
[02:17:43] Yeah, I'm just gonna skip this example. I don't care about this. Keep on going.
[02:17:49] We're just going to focus in on the last two scenarios.
[02:18:01] Right.
[02:18:09] Hover happens during,
[02:18:12] with or without time slicing.
[02:18:16] Yeah.
[02:18:17] All right, so we only need two of these. Okay.
[02:18:23] Thank you.
[02:18:23] Thank you.
[02:18:28] Thank you.
[02:18:30] Let's start with--
[02:18:32] Thank you.
[02:18:33] You know what, actually?
[02:18:37] We don't even need naive because like you can, this is actually the same example here, right? See how the first two are the same?
[02:18:44] Thank you.
[02:18:45] Um...
[02:18:46] So what does time slicing allow for us to do here?
[02:18:50] That's where it's interesting.
[02:18:52] because we can
[02:18:54] Now interrupt the blue.
[02:18:57] Skip the brown.
[02:19:02] and do this:
[02:19:06] And because most of the work is happening during the blue,
[02:19:10] Um...
[02:19:13] This is actually a much more significant issue
[02:19:18] win.
[02:19:20] especially if we get multiple of these events stacking.
[02:19:24] Because...
[02:19:26] um,
[02:19:28] I mean, if you take my original example again, let's pretend it interrupts it again.
[02:19:33] I'll add another one of these.
[02:19:40] Thank you.
[02:19:47] Thank you.
[02:19:50] Trying to get as close as I can to the original
[02:19:53] Um,
[02:19:54] demo up here.
[02:19:56] you know,
[02:19:58] I'll move this one back here.
[02:20:03] This compared to this
[02:20:06] is actually a significant difference.
[02:20:11] Right?
[02:20:14] Thank you.
[02:20:15] In fact, this is why I've always liked this
[02:20:20] This demo.
[02:20:25] Thank you.
[02:20:29] The trickiest thing about all these demos is they all involve propagating fully through a tree, and it always starts at the beginning, so you don't
[02:20:36] You always have to do all the work when you resume from interruption.  There's no way to continue because you've lost that state.
[02:20:42] In real world applications, there's probably some state that you didn't have to resume.  But your question is, how is the slice interruption? Well,
[02:20:49] Back to our old cue.
[02:20:53] React queues up work.
[02:20:56] Yeah, I guess I haven't talked about
[02:20:58] Uh...
[02:20:59] framework timelines yet. You know, this is a good point. Let's take a little sidebar here because I, I, uh,
[02:21:06] I talked about the...
[02:21:10] the dom...
[02:21:13] Like,
[02:21:14] the browser scheduler, but I didn't talk about the framework scheduler.
[02:21:19] I've talked about this in previous streams a little bit,
[02:21:22] There's actually probably a drawing in here where I talk about this. Is it way up here? What's this?
[02:21:27] zoom it onto this.
[02:21:29] No.
[02:21:31] Move way up over here.
[02:21:36] This is going to be useful here a little bit, but
[02:21:41] Okay.
[02:21:43] Bye.
[02:21:44] Generally speaking, there's like
[02:21:47] four phases that happen when you do an update, right? So like, first there's the browser event, like click whatever, whatever. And then
[02:21:55] So you do the thing and then you run your event handler and during your event handler you write some state, right?
[02:22:00] I don't know why this...
[02:22:01] It's weird, I don't know why. The React one is slightly out of line with the other ones, or why this one is here.
[02:22:08] My point is, you write your statement in the event handler.
[02:22:12] then
[02:22:14] This usually...
[02:22:16] schedules some kind of work to happen.  And in the case of React,  it schedules your React components to re-render.
[02:22:23] Right?
[02:22:24] which is,
[02:22:25] when it commits the new values,
[02:22:28] Basically, when it goes, okay, state is...
[02:22:32] was one, now it's two. And it also, during this, runs all your components. And then
[02:22:39] At the end of this,
[02:22:40] Um,
[02:22:42] This isn't actually correct. I said this is scheduled, but to be fair, it's more like...
[02:22:48] this just continues on from this. It's not, it's not, it's usually not scheduled.
[02:22:53] Um,
[02:22:55] I mean, it's part of the same scheduling.
[02:23:00] Thank you.
[02:23:00] Continued.
[02:23:03] You can...
[02:23:05] Yeah.
[02:23:06] It's not scheduled. This is more like...
[02:23:10] continuation of the scheduling.
[02:23:12] for these two.
[02:23:18] What I was trying to get here is that
[02:23:21] During this pure computation, when the state gets committed is
[02:23:29] arguable, maybe that happens on the other side, but in turn inside the graph, you see the next value and you're running it.
[02:23:35] And then...
[02:23:37] at the end of running all the components and you figured out your vdom or whatever,  you then apply that to the real DOM.
[02:23:46] If
[02:23:47] But this process of running the components,
[02:23:50] Classically,
[02:23:52] If you look at a tree, you're like, oh, well...
[02:23:55] I mean, I mean, let's look at a...
[02:23:57] Open another Playground.
[02:24:00] You see these JSX elements, right?  Kind of conceptually, and you see this as a function.  So you call a function and then you run all this stuff.  But the reality of it is,
[02:24:10] The thing is JSX,
[02:24:13] Thank you.
[02:24:14] I'm going to remove a bunch of extra...
[02:24:17] Stop here.
[02:24:18] and just focus on
[02:24:21] our JSX call here.
[02:24:26] Shut up, TypeScript. Okay. I mean, in React, it essentially gets turned into, like, these functions. I call it hFunction. It's like, let's create a select element.
[02:24:36] And then it has some props.
[02:24:38] And those props are essentially...
[02:24:42] what I'm seeing here, so
[02:24:46] X.
[02:24:48] Thank you.
[02:24:49] Thank you.
[02:24:51] Whatever. And then
[02:24:53] It also has children and those children are going to be like, I'm going to put an option element in here.
[02:25:00] Let's make an array and then
[02:25:04] Some of them can take N arguments, but I'm just gonna make an array to kind of hopefully clear it up. And then there's a component in here. Now this is a solid component for but it doesn't actually matter. The h call could also be for a component. So instead of string, it's a function. And again, we pass our props through.
[02:25:20] Um,
[02:25:24] And...
[02:25:27] In this case,
[02:25:29] Um...
[02:25:31] that children,
[02:25:34] So it's just each and then the children.
[02:25:38] is a function.
[02:25:41] Okay.
[02:25:44] Actually, let's keep on going. Children is a function.
[02:25:47] And then...
[02:25:49] the
[02:25:50] Children also have an age function in it, which is an option.
[02:25:54] which has props,
[02:25:56] value
[02:25:59] uh...
[02:26:01] Yeah, it's funny, I got the one problem, I'll fix it in a second.
[02:26:06] value equals this, and then also has children
[02:26:13] Color zero.
[02:26:17] Thank you.
[02:26:19] *took, took, took, took*
[02:26:22] you
[02:26:30] Missing curly braces.
[02:26:34] And then these are
[02:26:38] not equal signs anymore.
[02:26:40] Poland's
[02:26:43] And instead of being...
[02:26:46] Delimited.
[02:26:48] Here's just the value.
[02:26:56] Thank you.
[02:26:58] Thank you.
[02:27:01] I screwed something up. I knew it wasn't going to be that easy.
[02:27:06] Um...
[02:27:10] Thank you.
[02:27:13] Thank you.
[02:27:14] Thank you.
[02:27:16] Oh, I didn't close the array.
[02:27:24] No. Here?
[02:27:29] format.
[02:27:33] Okay.
[02:27:35] It doesn't matter on just
[02:27:39] Options.
[02:27:43] Child one...
[02:27:45] Child two
[02:27:51] Thank you.
[02:27:53] Thank you.
[02:27:55] Yeah.
[02:28:03] um
[02:28:07] Thank you.
[02:28:08] Thank you.
[02:28:11] Thank you.
[02:28:18] Thank you.
[02:28:23] Okay.
[02:28:25] Yeah.
[02:28:29] *click*
[02:28:35] Thank you.
[02:28:37] Oh.
[02:28:38] Yeah, silly me.
[02:28:40] No, that closes that.
[02:28:42] And then that closes that.
[02:28:44] Then
[02:28:47] That should have worked. Whatever. Hopefully you can, you, you familiar with this. Um,
[02:28:54] Thank you.
[02:28:55] Thank you.
[02:28:56] Thank you.
[02:28:59] Thank you.
[02:29:01] Thank you.
[02:29:02] Sorry, just catching up with chat. What do I think of ViewVapor? I love it. Obviously, it's basically SolidJS.
[02:29:09] Um...
[02:29:11] I need a comma before on change. Oh, yes.
[02:29:15] Thank you, chat.
[02:29:18] Ah.
[02:29:19] It's always one thing, okay.
[02:29:22] Thank you.
[02:29:30] Yeah, thank you. Okay, so my point is, though, is that if you look at this,
[02:29:38] even
[02:29:39] These functions execute
[02:29:42] Inside out.
[02:29:43] Right? Like, this h function can't call until this h
[02:29:47] until it gets this array, until this h function, the h function. And we know that in React,
[02:29:53] components don't render inside out, they render top down, like the actual component body.  So what's important to understand is
[02:30:00] It's not just like the single pass.
[02:30:02] Component generates
[02:30:04] like some VDOM markup here. This will
[02:30:07] like produce a bunch of objects, but
[02:30:09] Then...
[02:30:10] the four
[02:30:12] The for doesn't run as part of this app running.  The for makes the decision to run afterwards.  So you get this these this output back.
[02:30:22] And then you go, okay, now I run four.  It's not like...
[02:30:25] Like if four was like...
[02:30:28] Whatever.
[02:30:30] down here.
[02:30:31] and you put a console log
[02:30:33] Hi.
[02:30:34] And you also had a, like, this didn't return.
[02:30:38] you had a console log.
[02:30:42] Thank you.
[02:30:44] Um.
[02:30:47] Uh...
[02:30:48] Yeah.
[02:30:49] Okay.
[02:30:50] And then
[02:30:51] We went.
[02:30:53] Const.
[02:30:55] V DOM equals whatever and then we return our V DOM.
[02:31:01] I don't know if a lot of people spend time to think about this, but my point is,
[02:31:05] App logs before high.
[02:31:10] Right.
[02:31:12] like the function produces a bunch of artifacts,  then decides what children to render when,  which means there's an opportunity here  that React is actually like,  I'm not going to explain how Fiber works right now.  I don't even probably know in any kind of detail,  but my point is that
[02:31:29] There is an...
[02:31:31] time period when it goes between it running this component and it running this component where it can go, should we continue? It's like a queue. Like you can go, it can produce this go, okay, I'm going to need to render for coming up and can queue it and go, okay, I'm actually not going to continue, you know, like, like,
[02:31:49] It's not just like it calls one function and the whole thing just...
[02:31:54] runs.
[02:31:55] which is actually how solid works.
[02:31:57] which is the way we solve it is how did the children not run before the  parents?  Well,  we wrap everything together,
[02:32:04] in functions, more or less.
[02:32:06] So,
[02:32:07] And because we wrap the things and functions,
[02:32:10] Kind of similar idea. It's more granular. It's not like the whole block, but it means that like
[02:32:16] we don't immediately...
[02:32:19] We'll immediately run four.
[02:32:21] Ironically, we'll actually immediately call for.
[02:32:25] In solid, it's just a function. So we'll run down your whole tree.
[02:32:30] But, um...
[02:32:32] When it comes to the elements,
[02:32:34] Uh...
[02:32:35] these
[02:32:35] When we actually will create the elements, um,
[02:32:40] Yeah, actually, you know what? Where am I going with this?  We actually do just kind of create everything
[02:32:44] The thing is RJSX
[02:32:47] just doesn't
[02:32:49] nest like this. Like if it did where it does nest we have function calls.
[02:32:55] So like...
[02:32:58] But generally speaking, when you call app in solid, the whole tree just runs in one way.
[02:33:03] One go.
[02:33:06] Thank you.
[02:33:07] Yeah, yeah. So basically there's a list of components where in solid, it's the reactive system that does that scheduling to a certain degree.
[02:33:19] Um...
[02:33:21] But this is important to kind of understand.
[02:33:24] Um,
[02:33:25] there is a natural place to split.  And
[02:33:31] Thank you.
[02:33:32] It is useful on creation, right?  On React, the updates and create are the same process, right?  Whereas in like a fine-grained system,
[02:33:41] the updates are
[02:33:43] different. They only need to rerun the parts that change, and all that work is scheduled into separate places in the queue. Whereas, um,
[02:33:55] Generally speaking, the only part of...
[02:33:57] Solid renders everything initially synchronously.
[02:34:01] Um,
[02:34:03] So,
[02:34:04] There are consequences of that, but it is important to understand because when you ask how things can be interrupted, it's because...
[02:34:13] React
[02:34:15] does multiple
[02:34:16] It's like a multi-pass almost.  It renders, analyzes what it renders, then renders some more, and there's a natural place for it to break up.
[02:34:29] Thank you.
[02:34:33] Thank you.
[02:34:37] Also, in my own wonder, I thought about  lazy version, but I can't find any solution on the wrapping thing  calls or generously. I mean, that's
[02:34:43] That's what you have to do.
[02:34:47] Thank you.
[02:34:47] Thank you.
[02:34:48] I mean, the thing is, we don't actually have to wrap that much stuff.
[02:34:53] We only care about the stuff we wrap in terms of what will update independently.  It just kind of works out that way.  Context is an example where...
[02:35:04] Yeah, I mean, the thing is because our siblings are basically parallelized.
[02:35:10] And then like like a for loop.
[02:35:13] Because this, in solid this will run, and then this will run.
[02:35:16] Like, this one's already wrapped in a function, it's fine. And then this will run.
[02:35:20] Um,
[02:35:23] So
[02:35:24] But because of the like instead of us making a hierarchical where you can't create select until you create this,
[02:35:30] solids output is more like, well,
[02:35:34] I will refresh this and hide it. We'll lose what I just wrote. But solids output, if you look at it, the same stuff.
[02:35:40] .
[02:35:41] is
[02:35:42] It creates the elements up front at the top, or at least the first element.  So it creates the select.  This is it creating the select.  It's actually a
[02:35:51] creates it from a
[02:35:53] template here, it's the select option.
[02:35:55] And then another template for the option, but it actually creates the element here.  So doc, like it creates it here.
[02:36:00] And then it's not nested. So it creates the element first. And then what it nests are like the insert. So then it creates the component.
[02:36:06] Here.
[02:36:07] also not nested.  So it goes...
[02:36:09] It flattens out the set of instructions.  The only thing that's actually nested here is the children where we do the like the.
[02:36:16] the for loop.
[02:36:17] But, and even the setting the reactive props is also not nested.  So solid has its funny way of un-nesting everything, flattening everything, um,
[02:36:28] which means that most things actually just execute in the order you see them because we just
[02:36:33] we basically flatten the templates.
[02:36:35] So, anyway.
[02:36:37] Okay. So we like the things that need to be wrapped in functions are a lot less than you think. It's just it's because we don't generate a hyperscript.
[02:36:44] Okay.
[02:36:46] So...
[02:36:49] Yeah, I hope that answers the question of how they can interrupt.
[02:36:54] But it's important to understand, like, this blue part can be interrupted.
[02:36:59] um
[02:37:03] Which is interesting. To be fair, in Solid 1.0, I showed you that demo working, we interrupted the green part.
[02:37:11] Um...
[02:37:15] Right.
[02:37:16] -
[02:37:17] So getting back to my stack blitz, you might be going, well, if the original react demo acted so awesome, why is this one?
[02:37:25] Like this.
[02:37:28] Well, first of all, it's not just naked using setState, where you see how the delay happens.  The solution to this problem...
[02:37:38] is transitions, right?  So the original version had batched updates,  but it's basically the equivalent of this start transition thing.  Now, what happens when I change this to start transition?
[02:37:49] Well,
[02:37:50] It's still
[02:37:53] having an issue and we'll talk about this in a minute but
[02:37:56] If you look now,
[02:37:58] the the the hover state
[02:38:01] Oh.
[02:38:03] I guess it still gets locked up.
[02:38:07] What's interesting is if I leave it alone,
[02:38:11] It smoothly animates until it hits a number.
[02:38:15] So it's like smooth number update, smooth number update, smooth number update.
[02:38:19] But as soon as I start hovering it,
[02:38:22] It actually stays...
[02:38:24] Smoother?
[02:38:27] It skips some numbers, but actually stays smoother
[02:38:30] Um,
[02:38:30] but it's not as smooth as the animation.
[02:38:33] And the reason is,
[02:38:35] The biggest difference between the original demo and what happens here is in the original demo,
[02:38:42] they decided that transitions were lower priority. So,
[02:38:45] when you say this is in a transition, the set seconds
[02:38:48] is always interrupted
[02:38:51] by
[02:38:52] the elapsed time.
[02:38:54] Essentially, whenever the like the animation changes, it always interrupts, which meant it was always smooth.
[02:39:00] Thank you.
[02:39:01] And what's happening here is when I hover,
[02:39:04] The hover is like, I'm beating all of you.  I am super high priority.  So...
[02:39:09] it will try and render at that point in time.  If you notice, when I'm sitting there over it,  the number freezes for a very long time,  like it's still showing two.
[02:39:17] Even okay now it goes to seven but if I stay on here okay but it's it starves the transition for a while and then eventually it will jump like five numbers because of it will go you've been starving too long I'm going to run you that's kind of how they work and when it goes I'm going to run you that's when the whole thing freezes up again.
[02:39:35] But see, if I leave it to its own devices and I'm not hovering,
[02:39:38] Amen.
[02:39:39] It's not going to miss a single number because it's not getting interrupted.  And it's just the pure bulk.  The only time it's getting interrupted is when the new second comes in.
[02:39:50] So they basically made a decision here that,
[02:39:55] Um,
[02:39:56] Where
[02:39:57] they decided that
[02:40:01] Because we don't want transitions to starve,
[02:40:05] we are going to,  um,
[02:40:08] we're going to not make transitions a lower priority. They're the same as the main thread priority. The only thing that's higher priority is when the user clicks. And at that point, the transitions do starve, you see the numbers get frozen. And, but
[02:40:19] until a certain point when they finally force themselves in.
[02:40:23] So that's why this demo is no longer good anymore, because the priority
[02:40:29] isn't being said in the same way. In the old one, they said that transitions were always lower priority.
[02:40:35] Does that make any sense? I mean, we can go back to Scaladra to explain this, but essentially
[02:40:41] If we look at the
[02:40:43] our drawing here.
[02:40:48] Let's go back to where I was...
[02:40:52] I was rendering these things down here.
[02:41:04] Here, zoom back in here.
[02:41:08] Thank you.
[02:41:09] Thank you.
[02:41:10] What I'm saying here is the way this interruption works,
[02:41:15] The framework chooses whether it interrupts or not. If it doesn't interrupt you end up with this. So essentially
[02:41:22] What's happening
[02:41:24] currently in this...
[02:41:27] in this demo is
[02:41:29] that
[02:41:33] there's basically two types of workflows there's one that has a short
[02:41:37] blue workflow that happens all the time.
[02:41:40] and one that has a long blue workflow, but it happens once a second.
[02:41:45] And
[02:41:46] Every time...
[02:41:48] Thank you.
[02:41:50] They hit each other, they interrupt.
[02:41:54] So, like...
[02:41:56] So
[02:41:57] or they don't interrupt because of the same,  sorry,  they're the same priority.  So,  um,
[02:42:04] Essentially, the long blue workflow is pushing out the shorter blue workflow.  And that is...
[02:42:11] what you're seeing here when I'm not hovering. It's just
[02:42:15] It's short, short, short, long, short, short, long, short, short, short, long.
[02:42:20] Whereas in the original demo,
[02:42:22] Here.
[02:42:23] They decided that the
[02:42:25] The short always interrupted the long.
[02:42:32] Okay.
[02:42:33] So...
[02:42:36] *punch*
[02:42:39] *Bell rings*
[02:42:40] The tricky part here is
[02:42:42] I'm hoping from this, you can see the value of transitions.
[02:42:47] a bit like the problem is most workflows that people are used to look like this where there's a lot of brown, which means the transitions aren't doing anything. This one shows that if the blue was hypothetically large enough,
[02:42:58] You know, again, snide remarks people make towards React, like, oh, it's because your framework is so slow.  That's why the blue is long.  But, like, we can at least artificially...
[02:43:08] Um...
[02:43:09] produce the same
[02:43:11] Bye.
[02:43:12] Thing you can conceptualize that there could be a place where the blue is longer than the brown and that you could benefit from it the tricky part is
[02:43:22] Um...
[02:43:26] Well, what we're seeing here is like,
[02:43:28] You've got to put the control back in the developer's hand. We can force flushing
[02:43:32] right like what we're doing the hover
[02:43:35] But then what we're going to end up with
[02:43:36] is...
[02:43:38] This is how the stencil demo used to work, by the way.  It would look kind of like mini choppy instead of big choppy.  Like it looks similar to like when I'm hovering over this.  The problem is as a developer, how do I make...
[02:43:49] this demo nicer, right? And the answer is, it's like,
[02:43:53] It's not...
[02:43:54] really
[02:43:56] obvious because
[02:43:58] Before when we said transitions were lower priority, that's easier. In React, if you call flush sync yourself, you set higher priority so you can interrupt stuff, which makes sense.
[02:44:07] But...
[02:44:08] You know, someone's going to start if everything's high priority.
[02:44:11] or higher priority, then the thing that's not higher priority is going to start, like the transitions here, you know, when I get stuck on the number in the old demo.
[02:44:19] Um,
[02:44:21] Thank you.
[02:44:21] I
[02:44:23] If I put the slowdown slow enough,
[02:44:26] without even hovering, that number is never going to change. I don't know if you can see
[02:44:31] But it's stuck at 10.
[02:44:33] Like,
[02:44:34] I it's not even hovering that needs to cause it. I'm literally this number will never leave 10.
[02:44:40] This was kind of what they wanted to solve.
[02:44:42] because transitions just starve for all eternity out here.
[02:44:46] Thank you.
[02:44:49] I mean,
[02:44:51] Oh, interesting. Part of the triangle became a one.
[02:44:54] I think we snuck something in somehow.
[02:44:57] Um.
[02:45:01] Is there a way to get smooth behavior in the current React? Seems like a valid use case. Well, I don't know if they have hidden APIs to deprioritize. They have a, this is higher priority, but I don't know if they have a deprioritized way. I'm not sure. I, I, I,
[02:45:13] I... uh...
[02:45:16] Ricky was like, oh, thinking of using a different solution.  When I talked to Ricky about this in the thread...
[02:45:22] He was like...
[02:45:24] It's funny, some of these are four and eight.  He was basically...
[02:45:27] Like...
[02:45:29] It kind of sounds like this is just not a good demo for time slicing anymore.
[02:45:33] Right?
[02:45:35] Um,
[02:45:37] So,
[02:45:39] It's kind of like
[02:45:40] You're kind of like, but how do you do this then, right?
[02:45:43] And I was kind of like really struggling with this because the reason I'm built through React Fiber example is because this is this has been the other benchmark sucks. We already it's completely useless. But this benchmark at least showed trans transition time slicing in action. So I was like,
[02:46:00] Is there a way...
[02:46:01] that, um...
[02:46:04] You know, like I wanted to look at what React's doing now and see, you know,  because I've been debating whether I want to do time slicing.  Now, one of the cool things about R3, the new React system we've been working on,  being heat based is...
[02:46:17] Unlike current solid,
[02:46:19] like the way time-placing works is really naive.
[02:46:22] we have a queue.  And when new work comes in,  we just keep on queuing the stuff on the end of the queue.  And...
[02:46:29] If it processes it, it marks the node as being processed.  So if no other updates happen and you hit it again in the queue, it just skips over it.
[02:46:38] But if an update happens and you hit it again in the queue, well then, so you can kind of like pause the queue and then continue the queue.  And then, you know, eventually when the queue is empty, then you can.
[02:46:47] put the thing on the page. That was basically how I designed time slicing because our pure  computations like our memos and whatnot essentially all just get queued up in current solid. It's eager.  Every time you do a reactive change, it adds it to a list.
[02:47:01] Whereas in the new system, it's heat-based.  So instead of queuing everything on the end,
[02:47:06] It checks, it goes, am I already in the heap?  And if it isn't,
[02:47:09] If it...
[02:47:10] If it is, it doesn't add it again.
[02:47:13] and then it removes itself
[02:47:15] When it does and whenever it gets inserted doesn't insert at the end it inserts it in the right order and
[02:47:19] like at the right height in the queue.  That's why we don't need to add it again.  The reason I kept on adding at the end is because
[02:47:26] in the old version is because even if you said like hey um
[02:47:30] I've, you know...
[02:47:32] I've already been processed or whatnot.  The problem is, if you've already gone past where it is or not past where it is,  you'd hit a place where stuff could get skipped.  So the easiest way of checking instead of going, "Am I in the queue?"
[02:47:43] Um,
[02:47:45] And am I going to execute in the right order?
[02:47:47] It's really important like you don't like you don't want the
[02:47:50] You have to make sure that stuff always executes before the other thing, like because of the graph propagation.  It was kind of a mess, but it just kind of worked.
[02:48:00] Whereas in the new system,
[02:48:01] if we don't get to processing something, we can just start the heap at the top.  And as long as you run the things higher before the things that are lower in the heap,  you order them in the right order and you won't have to keep on expanding the heap.  And because of the reactivity, we get to reuse the nodes.
[02:48:16] It's almost like the perfect data structure for time slicing.
[02:48:21] Thank you.
[02:48:25] Thank you.
[02:48:26] Thank you.
[02:48:27] Yeah, I mean, possibly. The tricky part is,
[02:48:32] Well, this is what I was talking to Ricky on the discussion here is because I was like,
[02:48:37] If...
[02:48:38] This, the other demo is garbage.
[02:48:41] what's a good time slicing demo because this was the only good one and if this  one's not good we have no time slicing demo anymore
[02:48:48] And
[02:48:49] He pointed me at a bunch of previous talks, you know, and
[02:48:53] Uh...
[02:48:54] One of the challenges there, obviously, sorry, I want to
[02:48:58] Scored.
[02:48:59] I just keep on the notifications.  Nothing, Solstart stuff.
[02:49:04] those talks, the things, they were great IO demos. They're great at showing like
[02:49:10] page navigations, but the time slicing demos actually all suffer from
[02:49:14] the problem we have.  We actually don't have a good time slicing demo.  And again,
[02:49:20] Pessimists could argue,
[02:49:22] Well, I don't.
[02:49:23] That's because time slicing is useless.
[02:49:25] It's not. Ricky actually pointed out a few places where like bursts.
[02:49:30] could be valuable.
[02:49:33] Let me see if I can find it on my profile.  I can dig into this because...
[02:49:42] Yeah, I was trying to figure out why my demo wasn't good, right?
[02:49:49] Someone wrote an article and I'm actually going to link this article here because they basically were like their solution was like, just don't.
[02:49:56] use.
[02:49:57] Pimes slicing this way. They found the same thing I did.
[02:50:00] And they actually found this earlier in the year. I didn't even realize this.
[02:50:04] Um...
[02:50:05] But their conclusion was like, we should just move every all the animation into out of JavaScript.  And it's like that's great. But they saw the exact same thing I'm talking about where
[02:50:13] This actually shows it better than I was doing, where like,
[02:50:19] *laughs*
[02:50:20] Thank you.
[02:50:21] Like the stream I don't think actually shows it. Read this article if you really want to understand why this
[02:50:26] like not why, but how it doesn't work anymore. If you want to understand
[02:50:30] like this is how you fix the demo in React, I guess is the thing.  But you fix it by just not using JavaScript.  Like, you know what I mean?  Like by not using the framework is how you fix it.
[02:50:45] Thank you.
[02:50:46] Thank you.
[02:50:49] In Chester Live, I'm getting told I have internet connection problems by StreamYard right now.
[02:51:00] Thank you.
[02:51:03] Thank you.
[02:51:04] Thank you.
[02:51:06] Thank you.
[02:51:13] Fixed-wise smoothies, yeah, I know, but I mean that's kind of like basically just saying it's the wrong example.
[02:51:19] Yeah, so Ricky talked about this. Yeah, that's roughly correct. There are multiple differences. First, we don't use wrap for scheduling anymore.
[02:51:25] See?
[02:51:26] So the timing of wrap updates and timer updates are different. Second, we don't interrupt default updates for transitions anymore. The event is starting the transition updates. So the update is scheduled in the wrap, will not interrupt the rendering of the transition. You can see that as the update blocked in the performance trait. Right? Which is cool. Their performance trait thing is awesome. User events like hover do interrupt transitions, which is why hover is smooth. We also flush all scheduled sync updates at the time, which is why the animation
[02:51:48] is less jittery as you hover.  It kind of goes like a slow jitter.
[02:51:52] You can see he's interrupted by render, yes.
[02:51:54] You can kind of fix this by wrapping set elapsed in flush sync so the animation updates and the transition. But then you'll see a different kind of issue where the numbers don't update and a bunch of frame drops after a few seconds. And yeah, it's like as if you were hovering the whole time.
[02:52:07] which is also not really what you want.
[02:52:09] because Fletch is starving the transition by interrupting it, and then it finally overruns the timer and stuff.
[02:52:16] Basically, no one wins in these scenarios.  And this has been kind of my hardest part about time slicing, because it's like...
[02:52:25] people want a demo where you're like win and the answer is always like
[02:52:30] Yeah, this is like...
[02:52:33] This sucks less.
[02:52:37] Time slicing. We suck less.  You know? And it's like... Because it's like  dealing with a reality that Thumb Software  sucks. And it's like...
[02:52:44] The problem is like,
[02:52:47] Is it easier to fix the problem or let it continue to suck
[02:52:51] for a bit longer.
[02:52:52] is basically what we have here.
[02:52:59] There are plans on improving this in the future though, for example if we added reusability then we can interrupt
[02:53:03] When we interrupt, we don't need to throw out the whole screen start over, we're allowing to complete before expiring. Now, again,
[02:53:09] I don't think these demos will actually benefit from reusability as much.
[02:53:17] They might a little bit, but like it's because they're stupid.  Like literally every node is touched like as part of the update.  But conceptually, I agree because we have reusability essentially in our transitions in solid to a minor degree because we reuse the reactive graph.
[02:53:33] Um, and
[02:53:34] Penn State, so it's essentially we have this. So yeah, I mean it's one of the reasons again why  we edge out slight performance things, but demos like this aren't really
[02:53:43] showcasing it because like every node gets re-hit.  Like you start over from the beginning.  You don't get to save any of the work.  We can also yield less often.  Yeah, I mean, fair enough.  But you understand, he's not making excuses.  It's just literally...
[02:53:56] It's a crap situation.
[02:53:58] There's no good solution for it, generally. Overall, this kind of shows how much we de-emphasize the CPU case, which has been kind of my hunch all along. Recording for async now animation, not the speed of our slow rendering. In this case, a better way is to drive smooth animations. Agreed.
[02:54:12] I was going to say it must be the interruption that is expensive because updating a laptop almost immediately memos out.  It has nothing to do with the count.  It isn't that deep of an update.  Thank you for answering my question.  So I guess we need a new time-placing demo.  I wonder if one, like the UI mirrored with your mouse position would be the right sort of thing or expensive to happen.  But the more I think about it, that's not even the case.  That's like him calling flush sync inside the timer.  Yeah.
[02:54:34] As long as you're not willing to let something starve, you're going to have crappy UI experience.
[02:54:42] But it's hard to make that decision from a generic standpoint.
[02:54:47] Thank you.
[02:54:49] Oh man. You gotta put them all over your UIs to make it real? Or it was like that time period where like Dan Abramoff's radar started showing up on like every demo.
[02:55:02] Ah.
[02:55:06] Thank you.
[02:55:07] Thank you.
[02:55:08] Animation red herring you'd have the same issue with imprinted counter or live data. Yeah, yeah, I mean we saw it in the bad example. Yeah
[02:55:18] Well, the problem is the blue has to be big enough.
[02:55:24] Which...
[02:55:26] I'm going to get to this. So I guess we need a time slicing demo.
[02:55:30] All the triangle demo did was leave me to that. Just to clarify for readers, it's not the interruption itself, like the overhead of interrupting, but the need to restart the entire render once you start back from the transition. Yeah, I wasn't clear about that. I do think we have better time slides now as part of Dan's two part.
[02:55:43] Um,
[02:55:44] Yeah, and he points at the IO part, which is great. This is the tab demo. That's what sold me on...
[02:55:50] And Andrew's talk, the one with hooks,
[02:55:53] Right. And
[02:55:54] Yeah, Dan's demo is what sold me. People were like, if you go back to 2020, I wrote a post on X that was like, or Twitter at the time. And I said, you know, I'm noticing this negative sentiment around react. And I'm like, I don't think it's.
[02:56:07] called for at this, you know, at the point I was saying that because like I,
[02:56:11] React innovating really cool stuff on this concurrent stuff, you know, and people are just like,
[02:56:17] like wearing a badge around frameworks like we don't have concurrent rendering, you know,
[02:56:21] And
[02:56:23] Transitions were a great feature.
[02:56:27] I might not be on the time slicing part being important, but
[02:56:30] Like...
[02:56:31] people were like wearing it as a badge that they didn't have this like
[02:56:34] ace inconsistency and it's like
[02:56:36] You guys are crazy, right?  Like React is working on something important here.
[02:56:40] Um...
[02:56:42] And it's because right from that first demo I was sold. With the tabs, it was like a movies app.
[02:56:48] It's time-slicing matters for other features like suspense. If you're mounting a new route that is suspended on data and after the data comes back, but before the data it paints, the user switches routes, the UI should stop doing whatever is due to handle the bend, or on hydration if the user interacts while hydrating.
[02:57:02] Two things. I trust you all have done the research.  It just feels to me in both of those cases, the actual latency is a limiting factor, right?  Like if you're fetching data, it's actually like the freaking 200 milliseconds you're waiting for the data.  Like is probably longer.
[02:57:15] maybe like the render, like if you click to the next route,
[02:57:20] and then click back again or click a different route.
[02:57:24] you're perfectly fine until the exact moment it's rendering
[02:57:27] that route.
[02:57:29] So like, again, it's
[02:57:32] Is it...
[02:57:34] How much of it is
[02:57:36] Where's Mike Scaldra? How much of it is like
[02:57:40] This sort of problem where instead of like, instead of being an event, there's a very long async.
[02:57:48] thing, like a different thing out here.
[02:57:51] And then there's this, and there's literally just this sliver of a blue.
[02:57:55] that you can perfectly hit it where you can
[02:57:59] where you can actually make a benefit.
[02:58:01] is sort of what I was wondering.
[02:58:03] Um,
[02:58:05] Like,
[02:58:05] When data comes back, the person could have interacted with the page without issue until that moment.  And the time between the page being visible and JS loading is probably significantly greater than the hydration cost.
[02:58:14] For the former, there's that burst, I suppose, that could be curbed.  And for the latter, you probably need to record the event and replay anyway.  Pre-hydration for reasons above.  The reason I was looking at demos was trying to determine how much I wanted to invest here in time slicing.
[02:58:25] I do like the direction you have taken to time slicing now is easier to replicate.  You don't care if it is a transition or not.
[02:58:31] But if it was sourced from a high priority event, which means
[02:58:34] on versus off screen isn't like a consideration.
[02:58:37] Right?
[02:58:39] Yeah, I mean from the user perspective, since async is in the background, they will only  see the input or animation jitter from mounting the new page in the background. For new routes,  it's not uncommon for those just to take a while to render and commit the entire page.  In other cases, scrolling, if you select a
[02:58:52] filter in a list or get a WebSocket message in the background update.  You don't want to scroll to feel janky.  So like these are these are hard to test because you're not going to see these  on animation benchmarks. These are bursts.  These are things that happen where everything just happens to happen  at the wrong exact time and you get that small glitch.
[02:59:11] Um, and funny thing is people kind of used to this, especially around the fournces around loading, but they're hoping to.
[02:59:17] Like, you see, like, these are actual use cases where you can understand where you have, like, a sudden burst of rendering or something.
[02:59:25] And
[02:59:27] The trickiest part though, as I said, is
[02:59:30] It has to be a blue burst. It can't be a brown burst. It has to be a blue burst.
[02:59:37] Thank you.
[02:59:38] Thank you.
[02:59:40] Thank you.
[02:59:41] Thank you.
[02:59:42] No, the benefit of transitions is not this stuff. Time slicing and stuff is not it.
[02:59:50] the benefit of transitions
[02:59:53] is
[02:59:54] is being able to load the next page while showing the current page. It's being able to
[03:00:00] have the page be live this has nothing to do with time slicing it it's being able to you know
[03:00:07] be updating something, have work be going on in the background,
[03:00:12] while keeping the current state of the page consistent.
[03:00:15] You can do that without time slicing. You don't need
[03:00:19] You don't need to split up the execution, you know, and interrupt it and stuff to do that. You just need to
[03:00:24] hold the committing of values and updates to the UI until a point.
[03:00:30] I'm actually going to show you.
[03:00:35] Yeah, but...
[03:00:37] Okay.
[03:00:38] Maybe it'll help people understand a little bit better by actually showing
[03:00:46] showing the solid version of
[03:00:49] of these demos because I pulled this out. Okay, this is the original demo. And if you look at the source code for the original demo,
[03:00:57] Thank you.
[03:00:59] Uh...
[03:01:03] It's...
[03:01:06] we calculate the scale.  And then the more important part thing is,  you notice is where the work happens.  We have create memo.
[03:01:11] and we have create memo for artificially long delay.  And the reason I wanna point this out is,
[03:01:18] Solid components render only once.
[03:01:20] Right?
[03:01:22] Okay.
[03:01:24] So if I just took the React example that we've been looking at here and wrote this, you know, and translated it to solid.  And some people who didn't add the slowdown were reactive libraries where they're like, look, we added the slowdown and they literally stuck in the component body.  I'm sorry, this component is never running again.
[03:01:42] in a fine-grained thing so this slowdown is never happening again that's not testing what it's  supposed to test
[03:01:48] You have to understand what the slowdown is doing, which is basically, since these are all static props,
[03:01:55] The slowdown is basically being, it's a calculation based on...
[03:02:00] The children. That's the way you should view it.
[03:02:02] when the second updates, each component along the path has to calculate something really expensive based on that second...
[03:02:09] and it passes that expensive calculation down to its child, which has to calculate something expensive off that expensive calculation that cancels something expensive off that.  So the way you model that in solid,
[03:02:20] Sorry, not this. The way you model that in solid is you create a memo and
[03:02:26] that basically...
[03:02:28] takes a while and then returns seconds back through. And then you pass that as the child to the triangle.
[03:02:33] and then it gets it again and then also
[03:02:38] calculates it and you just do a bunch of memos all the way down and if you naively take this example and do that um
[03:02:48] It's going to look
[03:02:49] identical
[03:02:51] to the version
[03:02:52] of this.
[03:02:54] that doesn't have transitions.
[03:02:56] If you just literally just took this exit,
[03:02:58] This version?
[03:03:00] Um,
[03:03:01] Right, so to have that same like
[03:03:04] I'm not gonna bother
[03:03:06] But it's identical to this. In fact,
[03:03:09] I think Ricky tried to add it in, but he actually added a second delay.  I already had the delay in there.
[03:03:14] Um,
[03:03:16] Uh, you know, let's just do this for fun. The problem is if I do it for fun, I'm going to show the solution off that I don't want to show yet. So let me...
[03:03:26] Let me grab this.
[03:03:29] I'm going to fork it.
[03:03:31] And then
[03:03:33] I'm going to
[03:03:34] I'm going to make it
[03:03:42] Yeah, let's just do this and then I'm going to remove...
[03:03:51] All of this stuff, sorry, give me two seconds, I just... I know it's not much of a reveal, but just humor me here.
[03:04:00] Thank you.
[03:04:02] Thank you.
[03:04:04] Thank you.
[03:04:06] Thank you.
[03:04:07] Thank you.
[03:04:08] Uh-huh.
[03:04:15] Okay, cool. I've remade
[03:04:18] the demo here. Sorry, we've got the wrong window.
[03:04:24] Give me a second.
[03:04:27] Bye.
[03:04:29] Thank you.
[03:04:30] Thank you.
[03:04:31] Thank you.
[03:04:33] Thank you.
[03:04:35] Thank you.
[03:04:38] There we go.  Okay.
[03:04:42] Thank you.
[03:04:44] So here is the updated, it's using the SOLID 2.0,  but this is the updated,
[03:04:50] version of that demo, right? So look, it's just like React.
[03:04:56] Mm.
[03:04:57] It skips on the numbers, it's smooth in between.
[03:05:00] and then when we hover on it, we can get locked out of the hover state.
[03:05:05] See, it's delayed.
[03:05:07] It's a little bit performing a little faster in the React version, but like not acceptably so, minutely so. Anyways, but you get the idea and
[03:05:18] How did we do this? Well...
[03:05:21] we
[03:05:24] Our slow children, we created a memo, passed it through,
[03:05:29] And this behavior is identical to the React version without a transition.
[03:05:34] And you're probably like, oh, what if I add a transition to solid?  Will that help us?
[03:05:38] Um, no, because...
[03:05:41] There's nothing async here. We don't have
[03:05:44] time slicing in this version.
[03:05:46] So,
[03:05:48] This is our baseline.  You just have a memo.  But I want to show is that
[03:05:52] conceptually because the component runs once this is actually a really good show because you understand like
[03:05:57] It's this that's expensive.
[03:06:00] Um...
[03:06:01] You don't.
[03:06:02] When you're writing an app in solid,
[03:06:05] because the components don't render and you notice something that's slow and updating,  more than likely it's going to be
[03:06:10] some point in your reactivity where you're doing like a calculation or something stupid or like, like,
[03:06:15] This is...
[03:06:16] you know,
[03:06:17] it's going to be wrapped in a memo somewhere, or it's going to be wrapped in a function call or  something. Essentially, it's not going to be part of the component body,  it's going to be a very specific, isolated chunk.
[03:06:27] Right?
[03:06:28] So...
[03:06:29] Okay, I've made this now. But it's important to understand the difference here so you can understand
[03:06:35] Wake.
[03:06:36] Yeah.
[03:06:40] Doesn't matter, I'm going to delete this after anyways. But yeah, okay. So now I have this silly example that's not very useful, but I showed you that the old...
[03:06:51] Solid example.
[03:06:54] Hey Luca, how's it going?
[03:06:56] He managed to open the door to my office.
[03:06:59] It's time to get it.
[03:07:02] My point is, I showed you this demo and it was butter smooth.
[03:07:07] How did that work?
[03:07:10] Yeah, we graphed the whole graph, so we could definitely measure the execution time of, I suppose, if we wanted to, of specific computations. I mean, that instrumentation might be expensive, but...
[03:07:24] Mmh.
[03:07:25] Thank you.
[03:07:25] Anyway, how did we do this? Well, we called it "enable scheduling," which
[03:07:31] turns on time slicing in solid 1.0.
[03:07:35] Right?
[03:07:36] so
[03:07:39] The the funny thing about this is
[03:07:41] Time slicing is awkward because
[03:07:46] If you interrupt the memo,
[03:07:49] on its initial execution,
[03:07:51] Um,
[03:07:53] It.
[03:07:55] hasn't processed yet and it's undefined
[03:07:57] Um,
[03:07:59] Sure, we don't end up running it in the effects, but there's some weird oddities...
[03:08:06] here.
[03:08:09] Live.
[03:08:10] Yeah.
[03:08:11] Lucas slicing time for a moment there, yeah.
[03:08:18] Uh...
[03:08:21] You know, party Friday. It's the last day of work for a lot of people. Go party.
[03:08:28] I guess the whole point of ReactMerm is that it shouldn't be interrupted at all costs.
[03:08:32] you need the graph to be consistent and, you know,
[03:08:36] But it only matters at the end if you can see it.
[03:08:39] If you keep the cool thing about transition, there's two things here.  I showed you actually, the second thing that happens is we call start transition.  This means we're not committing the value.  So if something outside reads, it's consistent.  It's only inside the transition, which hasn't committed any effects.  So you're kind of safe, except for like, I.
[03:08:56] Occasionally, I never debug this enough with the time slicing that I'd hit undefined, and it was kind of annoying, and then I'd fix it to do a null check, and then everything would work. But I never felt comfortable taking this out of experimental. But I could remake any React demo I wanted to, and it worked, because I did the same thing. I said transitions.
[03:09:13] are what
[03:09:15] make it lower priority. Obviously, React has walked back from that.
[03:09:19] But the demo otherwise is the same, right? We don't have the memo. Instead of wrapping a memo around the component, our components run once and then it's our expensive memo that reruns. Okay, so...
[03:09:31] So then the question is,
[03:09:32] I was looking at this and I was like...
[03:09:37] Yeah.
[03:09:38] Thank you.
[03:09:39] Can't we just solve this?
[03:09:42] without time slicing.
[03:09:46] Thank you.
[03:09:48] Thank you.
[03:09:51] Thank you.
[03:09:53] I mean, we talked about the JavaScript scheduler at the beginning.
[03:09:59] Thank you.
[03:10:01] I mean, there's similarities between all of them, like the way the browser schedules paint and the way we schedule...
[03:10:08] Our effects to run are kind of like,
[03:10:11] you know,
[03:10:13] But yeah, I mean, the problem is like what I'm going to say is this is not like database transaction scheduling.
[03:10:20] All right.
[03:10:22] Like a framework scheduling is more similar to a browser event loop than it, than it,  I would say than it is to like a database.
[03:10:28] which is transactional and stuff like there's but like a browser,  I imagine they're like at least the UI part.
[03:10:34] are sort of like a OS, like the UI part.  There is a need to show stuff on the screen and not lock up.
[03:10:42] Thank you.
[03:10:44] I don't know. That's a good question.
[03:10:49] We're also in JavaScript environments, so we're single-threaded.  The overhead of multi-threading was something that React looked into, and they decided it was not...
[03:10:58] Like there's a framework that does multi-threading, uh,
[03:11:02] I...
[03:11:03] I can't remember what it's called.
[03:11:06] Thank you.
[03:11:07] - Thank you.
[03:11:08] But yeah, okay.  So how can we solve this?
[03:11:12] Um,
[03:11:14] solve this. And the first thought is like, what if we made this async?
[03:11:18] Right.
[03:11:18] We need, so I'm actually, let's do this.  Let's make this async.  Create effect, the best way to make things async, right?
[03:11:27] as I like hovering over create async. No, let's make this async.
[03:11:31] So how would we make this async?
[03:11:33] Well, let's go const
[03:11:36] Let's make slow children.
[03:11:37] equal
[03:11:40] or
[03:11:41] This is called slow.
[03:11:43] That slow
[03:11:45] Equals create effect. There's a reason that I'm doing it this way.
[03:11:49] Um...
[03:11:51] props.children
[03:11:55] Thank you.
[03:11:58] Thank you.
[03:11:59] The reason that I'm doing it this way
[03:12:02] Um...
[03:12:05] Thank you.
[03:12:07] Yeah, Neo, yes.
[03:12:08] Yes, that's it. Yeah, Neo MJ. Yes, I still like saying the OVM and I'm like, that's not it.
[03:12:16] Thank you.
[03:12:20] - Well, the reason that I'm doing it, sorry, props.
[03:12:25] Look, let's...
[03:12:25] So...
[03:12:28] Let's see if we can offload this.
[03:12:32] Sorry.
[03:12:35] This is create signal.
[03:12:38] that's going to default to, again, right away you were like, well, what's the original value?
[03:12:44] Um...
[03:12:45] Let's...
[03:12:47] Let's just...
[03:12:49] I mean,
[03:12:54] I mean, you start hitting the problem immediately there because you realize you have to have a default value.
[03:13:00] I guess it could be zero, because all the clones render at the beginning. Let's just make it zero.
[03:13:05] Okay.
[03:13:06] And then...
[03:13:08] I
[03:13:09] Uh...
[03:13:10] Let's
[03:13:11] make it so that
[03:13:13] Let's set timeout.
[03:13:17] inside our effect, right?  And let's make it so that...
[03:13:26] We take our expensive work
[03:13:30] Thank you.
[03:13:33] Thank you.
[03:13:34] And then...
[03:13:37] Let's call set slow.
[03:13:39] equals
[03:13:42] our value.
[03:13:43] And then...
[03:13:46] Sorry, slow children.
[03:13:50] And
[03:13:54] Thank you.
[03:13:54] Does this work?
[03:13:56] Thank you.
[03:13:58] Oh, nice. Does it work?
[03:14:03] Thank you.
[03:14:06] Oh, sweet. It works. Okay. Not quite. You guys won't be able to see this.
[03:14:11] Thank you.
[03:14:12] I mean, this basically works.
[03:14:14] But there's a problem with this.
[03:14:17] D...
[03:14:21] I can see it on my computer, but you're probably not going to be able to see it.
[03:14:27] Let's...
[03:14:28] increase this briefly to something bigger.
[03:14:34] Maybe you can see it now.
[03:14:35] Thank you.
[03:14:36] Thank you.
[03:14:38] Let's do something even...
[03:14:39] Insaner 6.
[03:14:45] Thank you.
[03:14:47] Okay, yeah.  I mean, you're seeing it super slow down.
[03:14:53] But...
[03:14:54] Uh...
[03:14:55] And actually, we should do one other thing here.
[03:14:57] We should uh...
[03:14:59] we should go const t equals
[03:15:03] timeout and we should
[03:15:05] we should clean up our timeout, right?
[03:15:08] We should.
[03:15:09] We should go.
[03:15:10] What was it?
[03:15:14] Clear is a clear timeout.
[03:15:16] Clear timeout T.
[03:15:18] Okay, let's do this. Because we're chewing too many timelines too.
[03:15:23] Six is absurd.
[03:15:25] But I'm hoping you can see it.
[03:15:29] it's fanning out through the app.  It starts up near the top and then 5, 5, 5, 5, 5, 5.  Like, it's hard because, like, this example is probably not as zoomed in as it's,
[03:15:41] needs to be.
[03:15:42] I mean, maybe if I can...
[03:15:45] open in a new tab and then like really zoom in.
[03:15:48] Yeah, okay.
[03:15:49] Thank you.
[03:15:50] Thank you.
[03:15:52] Do you see it fanning out?
[03:15:56] Like the numbers aren't all updating at the same time.
[03:16:03] This is why...
[03:16:07] react
[03:16:09] Didn't.
[03:16:10] Want.
[03:16:11] to do this.
[03:16:13] Because you're present if this is part of your data grid,
[03:16:17] you're presenting an inconsistent UI.
[03:16:23] I mean, increase the added number enough and it will lock up. I mean, that will happen in every scenario. It will happen even in that old original React Fiber
[03:16:32] thing
[03:16:34] I already showed it when I just went to slowdown times 20 when I was in the old Fiverr demo, that even the old React.  This number is not...
[03:16:43] There's no permanent solve. Something starves.
[03:16:48] Thank you.
[03:16:49] So you're trying to reflect him right immediately in this case? Well, yes, exactly.
[03:16:55] Yes.
[03:16:56] So,
[03:16:57] This
[03:17:00] Um,
[03:17:02] Yeah, 6 is insane. Let's move it back down to our 0.8.
[03:17:07] A lot of people probably would be
[03:17:12] okay with this, but
[03:17:14] I can actually see the ripple effect.
[03:17:16] I don't like this.
[03:17:18] because it's inconsistent, UI framework shouldn't be inconsistent. And for the longest time,
[03:17:22] I'm just kind of acknowledging this in my head, and especially the ways, you know,
[03:17:26] Stuff works in solid 1.0.
[03:17:29] I got it. I was like, you guys,
[03:17:31] Like...
[03:17:32] Yeah, sure, you can always opt out. You can always go async in a granular way. This was super easy.
[03:17:41] But
[03:17:42] This is not an consistent API.  What if...
[03:17:46] like clicking on the button did something based on the current number and then like
[03:17:51] Bye.
[03:17:53] I don't know.
[03:17:57] Personally, I thought render effects are deferred until the graph is settled.
[03:18:02] Will the graph get settled?
[03:18:05] Thank you.
[03:18:07] The graph is settled.
[03:18:10] Because it doesn't know that you're going to call set slow.
[03:18:15] Right?
[03:18:15] It doesn't know that.
[03:18:18] When you call
[03:18:19] Like I could do this in React too, right? We don't need to use a transition. I can just call it use state. I think it'd be more expensive because they're re-rendering in React.
[03:18:26] But like,
[03:18:30] Yeah, we use setTimeout. Yeah, they call setSlow.
[03:18:35] Right, and we can get fancy or we can go like, ooh, let's do request idle callback.
[03:18:41] Thank you.
[03:18:43] and then go clear, is there a clear idle callback?
[03:18:49] Cancel.
[03:18:51] Cancel idle callback. There we go. Ooh.
[03:18:54] It's even lazier now.
[03:18:57] Okay.
[03:18:58] Yeah.
[03:18:59] So this...
[03:19:03] Thank you.
[03:19:05] So it's like updating async and nothing is waiting for it. Yeah, exactly. And this is the state of every framework and everyone for years and years and years and years and years.
[03:19:14] Um,
[03:19:16] This is...
[03:19:17] This is the state of things.
[03:19:21] Right.
[03:19:25] Okay. So...
[03:19:31] Something occurred to me.
[03:19:33] A few weeks, a couple of weeks ago when I was like looking at this, because I knew about this crit effect problem.
[03:19:39] Right. And I knew about the time slicing and that, but I was like,
[03:19:42] Why create a crazy async graph if we couldn't just...
[03:19:48] I had a hunch.  I was like,
[03:19:50] Right. Like.
[03:19:52] I had a hunch and I was like,
[03:19:54] What if we...
[03:19:56] What if...
[03:19:58] Or...
[03:20:00] Thank you.
[03:20:01] I'm hoping my posts now
[03:20:04] What if we didn't time-sizing with stem1 async?
[03:20:07] So I'm going to show the example again in Solid 2.0.
[03:20:11] Again, there's no transition or anything because the transfers are implicit.
[03:20:15] But...
[03:20:16] What if...
[03:20:19] Instead of calling useEffect, we just called createAsync, which is our async part of the graph.
[03:20:25] and then did our same request I call back.  I put it in a promise so that it would know when it was done.
[03:20:31] But now...
[03:20:33] It resolves the promise
[03:20:35] using repressor item callback for the cleanup or whatever.
[03:20:39] into create async.
[03:20:42] If we did this,
[03:20:43] Obviously, it works like our other example still, but
[03:20:47] If we did something stupid, like make it five,
[03:20:52] Maybe five is too long.
[03:20:54] Because it's starving.  The tricky part about
[03:20:59] async starving, because I put it inside a...
[03:21:04] I want to find something that's suitable here.
[03:21:07] The trickiest part is if
[03:21:09] Bleh.
[03:21:14] Okay, cool. This will work.
[03:21:18] I don't have hot model reloading, unfortunately.
[03:21:21] in this example. But
[03:21:24] What you're going to see here
[03:21:27] is
[03:21:28] It's not
[03:21:29] flickering down. All the numbers are
[03:21:31] are actually...
[03:21:33] updating at the same time. And the reason they're updating at the same time is because the graph, it's not effect calling setState, it's createAsync, which means the graph is aware of itself. It means that the children
[03:21:45] and the parents don't update independently until the whole graph has,  and because solid 2.0 has implicit transitions, um,
[03:21:54] which we'll get to in a minute here, or at least the newest demo that I was talking about in my last stream,
[03:22:00] Um,
[03:22:01] everything's automatically under a transition,  which means it'll automatically paint holes like this.  It doesn't mean the transition can starve,  obviously in these...
[03:22:07] really stupid cases where you're
[03:22:10] I don't know what the you're doing, but.
[03:22:13] you know, until we build some kind of async starvation thing.  But this has never been a problem for anything that I've actually
[03:22:20] built to date at least.  But the point is, you already identified the expensive thing.  You would have had to install it when you're doing the Create Memo anyways.
[03:22:27] And now by just making async,
[03:22:30] We get the perfectly working demo here.
[03:22:33] even
[03:22:35] As I said, back to the original here.  The original, that's timing, I think it's chosen intentionally, where it's long enough that...
[03:22:43] It's definitely more than...
[03:22:46] Um,
[03:22:47] like it delays things, but it's not more than like,
[03:22:51] Um,
[03:22:53] It doesn't accumulate beyond.
[03:22:56] I actually had some fun making this demo.  Obviously, I'm canceling the idle callback.  But the difference between...
[03:23:02] ensuring that you get the next number.  Like here I'm calling set seconds with the callback version  where it's calling from the previous value.  So it always updates.  And if I was, but if I was reading  and I was reading in the past  instead of calling from the callback version,  which is the future,  if it ever kind of like,
[03:23:17] got a new update before it finished.
[03:23:20] it would see the same number again.  And then it wouldn't,
[03:23:23] Whereas this one always sees the next number, then it would actually like let the original finish and then it would continue on.  So it's actually less jittery if you're not trying to like.
[03:23:31] if you care see the thing the way this is  right now is the number and the  point it is in the animation is
[03:23:38] are always going to like from when you start at the beginning are always going to be aligned
[03:23:43] Whereas if you didn't care about that and you allowed the number to get out of sync or
[03:23:50] you know,
[03:23:52] like let it like
[03:23:53] be a little bit behind.  Because when this skips,
[03:23:58] Like if I get to a point where this skips, like I put some slowdown on, it's going to skip numbers.  Whereas if I had this read from the value, not the future value, then it wouldn't skip numbers.  It would just take longer for the next number to show up.  It's a subtle difference, but it means because you set the same number multiple times, they don't end up.
[03:24:18] making extra work.
[03:24:20] I don't know if that makes sense to anyone.
[03:24:25] Can I? Yeah, actually I can.  If I want to add back that Flickr,
[03:24:30] All I have to do
[03:24:32] is,
[03:24:33] go in here
[03:24:35] and go
[03:24:37] add the pending operator. And what pending does is it reads the latest value instead of the transition value.
[03:24:44] So if I go in here and put in the pending value, I believe...
[03:24:49] I can just...
[03:24:51] If I wrap these slow children, or actually, where do I want to do it?
[03:24:57] I'm
[03:25:00] I was playing around with a C. I guess it's Rapping Slow Children.
[03:25:04] pending
[03:25:06] All right.
[03:25:06] Thank you.
[03:25:07] Maybe it's actually in the dot is the best place to do it.
[03:25:11] Um...
[03:25:16] Yeah.
[03:25:18] Pending.
[03:25:20] This is one of the things I was actually experimenting with.
[03:25:24] If I put the pending
[03:25:27] around this that I was not showing the transition value.
[03:25:32] I do it at the dots so it doesn't impact the graph.
[03:25:35] Yeah, you can see it. It's doing the Christmas tree light out. It did it right at the beginning. See how it was blank and then it went to zero?
[03:25:43] And it waved out.
[03:25:44] So I can get the tearing behavior if I opt into it.
[03:25:49] Um,
[03:25:53] Right.
[03:25:57] Right.
[03:25:57] So yes, I can make it flicker like the Christmas tree still.
[03:26:01] Um,
[03:26:03] by opting into Terium, but...
[03:26:05] Generally speaking,
[03:26:07] Thank you.
[03:26:08] We don't want to do that and we want to have perfectly consistent UI that's smooth.  But my point is,
[03:26:16] I don't know. Do we do we need time slicing?
[03:26:20] Right. Um,
[03:26:22] It's an interesting question.
[03:26:26] But I wanted to talk about it so you can understand
[03:26:28] what's wrong with these demos and what you can solve.  Because at a certain point, what's cool about time thing slicing conceptually is,
[03:26:36] You
[03:26:38] The framework automatically pulls out synchronous work and makes it async, essentially. It's the way you should view it.
[03:26:46] it doesn't necessarily...
[03:26:48] deprioritize it unless
[03:26:51] something more priority comes in.  But the question is like,
[03:26:55] Kind of like at the beginning, in the first example, I'm like, if you just put request animation frame inside the event handler, you know, in that one place, everything would go here. I kind of just.
[03:27:04] took our expensive thing and said, hey, process this when you can.
[03:27:08] And this is the power of the async graph.
[03:27:12] Because
[03:27:13] The ASIN graph is super powerful because
[03:27:16] It doesn't have to be this.
[03:27:17] This is what if you want to, you did want to offload some work to a web worker.
[03:27:22] or something the interface that you're going to deal with there is going to be either something like a generator
[03:27:27] or it's going to be like a promise.  And the create async gives you that interface where you're just like, OK,
[03:27:33] This is...
[03:27:35] this work, whether it's
[03:27:37] As I said, I made it up here. It was on the main thread and I extended it. This is still on
[03:27:42] Technically, the main process is just getting scheduled now.  But if you wanted to move it on another process, well, it's the same thing, right?  You just change the implementation of this and say, do this work on a WebWorker.
[03:27:57] Non-tearing time-slices and state updates. This is the kind of entertainment I join on a Friday evening.
[03:28:02] Bye.
[03:28:03] Hopefully some people get some value from this.
[03:28:08] But yeah, this is sort of where my thinking ended up here, because I was like,
[03:28:16] Couldn't we just, you know,
[03:28:18] Couldn't we just do it? You know,
[03:28:21] I
[03:28:22] uh...
[03:28:24] Where's the demo?
[03:28:28] I'm going to delete this one because I don't need it anymore. This is the...
[03:28:32] the bad version.
[03:28:34] But yeah, I think...
[03:28:37] It's very interesting to live in this world, right? Because
[03:28:42] What's cool about this example now is there's no transition.
[03:28:46] Right. Did I get rid of the pending? Yeah.
[03:28:51] Thank you.
[03:28:52] There's no transition.
[03:28:56] - Right, you just write the graph as it normally is.  The only place where you need special knowledge  is you're like, hey, this work is slow,  I need to offload it.  It reverses the mechanism.  It's like, the problem with this is you have to be able  to identify what's slow.
[03:29:13] But...
[03:29:14] On the other hand,
[03:29:16] Huh.
[03:29:17] If you're working in a world where you don't identify what's slow, then like...
[03:29:23] Eventually you're just going to drag your whole app down anyways.
[03:29:29] Thank you.
[03:29:31] Okay, do you guys want to... I showed this little in my last stream, but now that I've actually incorporated the JSX,
[03:29:38] Yeah.
[03:29:39] This is the idea that I showed Tanner that got him really excited a little while ago. But let me go collections.
[03:29:48] solid 2.2 experiments.
[03:29:51] Let's start with the multiply demo, which is
[03:29:57] Thank you.
[03:29:58] uh,
[03:30:01] one of Rich Harris' favorite.
[03:30:04] Pimple, you have a signal.
[03:30:07] Um,
[03:30:08] whenever you increment it.
[03:30:10] Um, I don't know why they, we pulled the increment out there.  It feels like you could just inline this increment or whatever.  It doesn't matter.
[03:30:16] n + 1,
[03:30:18] And then you...
[03:30:19] It starts five async requests,
[03:30:22] And each one of these async requests
[03:30:25] set the timeout.
[03:30:26] that is random.
[03:30:28] Random timeouts. These are all
[03:30:30] each one, so if I go to two, each one of these will calculate at a random time.
[03:30:36] And then...
[03:30:38] it will show one times the number in the thing.
[03:30:41] And
[03:30:42] the "is pending"
[03:30:46] by that open.
[03:30:47] is pending, N is saying is the number pending.
[03:30:50] Right?
[03:30:51] It's like, is it in a stealth state?
[03:30:53] So because
[03:30:54] So there's no transition. There is just the question of like, has this not
[03:31:00] Is this like
[03:31:02] in flight.
[03:31:03] When I click on this, you can see dot dot dot loading state.
[03:31:07] And then when it's done, they all update it all the same time.
[03:31:11] So
[03:31:13] or dot dot dot, and then when it's done, it's not pending anymore and it shows the thing.
[03:31:17] Because the thing is, if we didn't have this as pending,
[03:31:21] Which is kind of the default case.
[03:31:25] and you wired off all this async, when you clicked something,
[03:31:28] You'd be like, "Oh, nothing happened. Oh, there it is."
[03:31:31] So it is important
[03:31:34] to say, you know, you kind of want to ask yourself, you're like, oh, wait, um,
[03:31:39] I need a pending state, right? I or like I need to show that some kind of loading state.
[03:31:44] So,
[03:31:45] Definitely you have to opt into that. But what's cool also, all these different times, and if I click it four or five times right here,
[03:31:51] It's not gonna like jumble through it all. It's just gonna settle when it settles so I
[03:31:58] they all come in together smoothly. Um,
[03:32:02] Thank you.
[03:32:07] I'm not sure what this question means. Is this actually better than per-value loader?
[03:32:14] I mean, this demo is...
[03:32:19] artificial. It's designed to show a
[03:32:23] like a bunch of separate async streams coming together.
[03:32:29] Yeah, this is what I showed on the last stream. The difference now is this is in the JSX.
[03:32:33] Right.
[03:32:34] I just I find sometimes that the JSX makes it more visual because like the thing is,
[03:32:40] I'm going to decide how to demo this, but
[03:32:44] Okay.
[03:32:45] Like
[03:32:53] If you started making an app,
[03:32:55] And...
[03:32:56] You just were like, okay, I've got some data, or I got state, and I click it, I update these five things, and then I render in the UI like this, and you just made this app.
[03:33:06] with no
[03:33:08] other than maybe knowing about CreateAsync.
[03:33:10] But no like advanced topic, like knowledge, I guess.  The problem is most people come in, they're going to use effects for this, which is unfortunate.  But if we could teach people that, hey, here's signal and then here's...
[03:33:20] Async.
[03:33:21] You refresh the page.
[03:33:24] It's kind of weird.  You see the equal sign kind of go in the two.  There's like a delay between showing the value in this.  You click it a few times and you're like, oh, nothing updates.  What's going on?
[03:33:34] But I feel like this is the base level.
[03:33:37] But then how do you solve these problems?  Well, you're like, okay, well...
[03:33:42] I need to show an initial loading state while this stuff is not
[03:33:47] loading so then you import the loading component right
[03:33:52] and it shows a fallback. So now when I load it, I see loading. And then you're like, okay, well,
[03:33:58] How do I...
[03:34:00] show that this is updating.
[03:34:02] then you import as pending.
[03:34:04] And then...
[03:34:06] you're off to the races. That's the design goal here of this. There's no transition. There's just
[03:34:14] Consistent state.
[03:34:16] Um, there's no-- you never fetch any use effect. That's just not a thing. You just go, "Oh, I have async. This is a primitive that takes a promise." So you go, "This-- it's a signal promise," you know, like,
[03:34:28] turn your signals and promises, and then you're off the races.
[03:34:34] Thank you.
[03:34:35] Why is it isPending and Impending? Well, it's because isPending takes a function.
[03:34:42] I could also go is pending a...
[03:34:45] And B,
[03:34:48] It...
[03:34:51] So like this should still work?
[03:34:56] Yeah, I mean, why wouldn't it?
[03:34:58] Because essentially you can ask this question about the whole expression, because the reason it's not N dot is pending is,
[03:35:07] and pending is the same reason that
[03:35:10] Do you need to put that on every single signal? What if someone passed you a function?
[03:35:15] but they passed you this functon. What if it's props?
[03:35:18] Props.
[03:35:21] Something.
[03:35:22] And the problem with props.something is
[03:35:27] How do you get...
[03:35:28] dot is pending off of it.
[03:35:30] It's just a function, right?
[03:35:33] Like, you can ask this about anything.
[03:35:36] Expression.
[03:35:38] Um, which is, which is key.
[03:35:43] Thank you.
[03:35:46] Yeah, I mean...
[03:35:49] Thank you.
[03:35:51] Yeah, sure. Do we want to show the n in real time?
[03:35:54] Thank you.
[03:35:55] Sure. Pending.
[03:35:58] I showed this in the last example.
[03:36:03] isPendingN, and then let's show the pending N value.
[03:36:09] Do-do-do-do-do. Now what should happen
[03:36:13] Yeah, it's still showing loading, but now it's tearing. It's showing the five before it's ready.
[03:36:18] See, now as I click on it...  Doo doo doo, three, four, five...
[03:36:22] Thank you.
[03:36:23] Thank you.
[03:36:26] Yeah. Sorry, that's the answer to this question.
[03:36:32] Does that answer the question?
[03:36:34] Doo doo doo doo.
[03:36:37] Yeah, I mean, it's super easy. I named them the same thing. I don't know if it's a good naming. I was just kind of playing around with it because I was like,
[03:36:43] loading is for initial loading, pending is for when stuff is updating, and then
[03:36:48] Pending shows the new value is pending is...
[03:36:50] is a pending.  With these...
[03:36:53] Three primitives, async's done, you know.
[03:36:58] Thank you.
[03:36:59] Yeah, this is uncolored async programming. That's the goal.
[03:37:04] Because what's cool about this too is like,
[03:37:07] Look at the type of eight.
[03:37:09] It's accessor number.
[03:37:11] It's not accessor...
[03:37:13] undefined or whatever. The async is not nullable, so it's not only there's no async await, there's no null checks. Like, which is really helpful for me because
[03:37:23] Signals being a function not being a depotent makes it a pain in the ass for like conditionals and stuff where people are like they get really frustrated because like I
[03:37:31] you know,  like conditionals,  like in for loops and stuff.  And they're like really angry with TypeScript.  They're like,  I'm inside a show.  This can't be null.  Well,
[03:37:40] Hopefully now you won't even need to bother with the callback version for most things because they just won't be nullable to begin with. Right? You design your data, you're like, this is a number.
[03:37:51] It's a promise of a number, but from our perspective it's a number.
[03:37:57] Thank you.
[03:37:58] Thank you.
[03:37:58] .
[03:38:03] Thank you.
[03:38:04] Thank you.
[03:38:04] Yes, yes.  Stuff is...
[03:38:08] Stuff is by default entangled together when it's on the same frame.  This is something I took from React.  Sorry, from Stultz.  They don't entangle in the same way.  But the idea is that the same stack frame becomes entangled.  It's like your event handlers are wrapped in a transition.  And at first, I was completely scared by that until I saw Rick Hanlon's talk where he was trying to convince the React ecosystem that literally they should wrap all their...
[03:38:34] design systems, all their event handlers in transitions. And at that point I was just like, if we're going to go tell the whole ecosystem to migrate, why not just build it that way in the first place?
[03:38:44] This will make life infinitely easier. Oh my god. Oh yeah, this is why Tanner lost it. I just feel like when you're using the JSX, this is just so much easier for people to see. Um...
[03:38:55] This is, yeah, I guess I'm spoiling why Solid 2.0 is going to be a complete game changer.  I mean, I've been spoiling it all year, but this is just...
[03:39:06] Yeah, I mean...
[03:39:10] I hope the React team gets jealous, yeah.
[03:39:14] Thank you.
[03:39:18] Thank you.
[03:39:20] I always code in a way that where the value is not resolved yet, there's a loader per value within some values. Yeah, yeah, yeah. Well, exactly. Well, this is the thing. When people try and do transitions on their own, they have to fork. Um,
[03:39:32] So transitions are great, because then you don't have to fork.
[03:39:34] which is really cool.
[03:39:36] I mean, there's still some overhand, I'm still doing performance benchmarks.
[03:39:40] Let me show you something.
[03:39:44] Yeah.
[03:39:47] This approach I've done doesn't work.
[03:39:51] So, like...
[03:39:53] I don't know if you've ever seen...  No, not on here.
[03:39:56] I mean, I don't use JS framework benchmark for everything, but I want to, this just helps me show something that I want to show.
[03:40:03] Someone...
[03:40:04] Thank you.
[03:40:05] Someone made React with use transition.
[03:40:09] in React 19, and it's way down here in 192.
[03:40:14] versus like when you go to actual React and it's about one
[03:40:19] 150. Like, React with  use transition is right...
[03:40:23] Is that free, the transition only, automatic transition framework?
[03:40:30] I'll talk about that in a minute.
[03:40:33] But
[03:40:33] Or time slicing. But my point is, you're now back in like Ember territory or Aurelia. Like, yeah, here's Ember up here. You're not
[03:40:43] Because you're forking everything, there's a certain overhead that's just inherent to you opting into these features with the scheduling.
[03:40:52] And to be fair, this is actually updated to 19,  so this probably has the newest stuff.  So this is not like the old Fiber demos. Yeah.  So whereas this approach,
[03:41:03] is neck and neck with solid is today.  Like basically we get this with no performance overhead.  Now obviously Svelte gets it with no performance overhead  because they literally use the compiler to analyze.  So there's no async in this.
[03:41:14] But I've managed to design and react a system that without a compiler just works this way with basically no performance overhead.
[03:41:25] But have you covered what Create Async has under Toad? So if you catch up on the recording?  Not this stream. I talked about Create Async a lot more, but in the previous stream. The  idea of Create Async though is it's a...
[03:41:44] it's a reactive computed that's async.  So it takes a value in
[03:41:50] And it...
[03:41:53] Let me see here.  It takes a value in.
[03:41:56] a promise in and it returns out
[03:41:58] Um,
[03:42:00] an accessor of the value like signal. The benefit of it is that
[03:42:06] It's graph aware because it's derived. Something reads A, something reads B, unlike create effect where you write to it. This is the benefit of something like tan stack. But when you, you can think of this like tan stack query without the cache. Like that's what create async call is. But because we have a reactive system, we know exactly what reads A. So when
[03:42:26] this goes async, we can inform the rest of the graph below it.  It can propagate this knowledge, which means that we can do smart things, you know,
[03:42:36] Yeah, you know, and I find these defaults
[03:42:41] really intuitive. Let me go back here. Do you remember Ryan Florence's demo?
[03:42:47] Thank you.
[03:42:48] Thank you.
[03:42:49] We all remember Ryan Polorence's demo.
[03:42:52] Uh...
[03:42:55] Oh, did it not get the new update signals? What project signals are we running here?
[03:43:01] Signals no, sorry, I broke briefly broke.
[03:43:05] Uh...
[03:43:06] Let's rm.rf node_modules, rm.rf pnpm lock.  I briefly broke.
[03:43:15] Um,
[03:43:16] this demo in version 0.84, but it's fixed in 0.85.
[03:43:21] Okay, cool. So...
[03:43:23] Ryan Florence's demo.
[03:43:26] Right. With a state selector.
[03:43:28] Again, loading, fallback, select, on take.
[03:43:32] This is a Kasking dropdown. Whenever we change the state, it loads the cities.
[03:43:37] then you change the cities, but then we do it. So again, create async gets the states.
[03:43:43] then we derive from the states
[03:43:46] whenever the state changes, our signals also can be derived. Whenever the state changes,
[03:43:51] Um,
[03:43:52] we trigger the signal to reset itself with the first state.
[03:43:56] are the first city from the
[03:43:59] or from the first dates. Now, the states never reset, so this doesn't really matter.
[03:44:03] And then that becomes the selected state. So we reset the selected state to the first one. And then when
[03:44:10] We also, whenever the selected state updates, we call create a sync, which calls get cities, which does a second request, which gets the cities. And whenever cities updates,
[03:44:20] Um,
[03:44:22] we,
[03:44:23] we grab the first city and make that the selected city.  But obviously we can override it.  So as I change San Diego, it updates.  And then we just output the selected city and selected state.  And then our select components are really easy.
[03:44:38] a loop over the states to show the option and a loop over the cities.  And what I did is I added a disabled is pending.  So basically if I could have added a disabled to to this one too,  but there's no source state, but it could have been disabled if
[03:44:53] there were no states.
[03:44:56] Basically, if the options are pending...
[03:45:00] then
[03:45:02] we disable it. That's essentially it.  Like you can pull this out into a component generically.  And then there's no transitions or nothing.  But if you notice when I change California, what you're going to see is San Francisco is going to go to pending.
[03:45:14] And this is not going to update till it's all loaded.  Watch. New York?
[03:45:18] New York, New York.
[03:45:21] Thank you.
[03:45:24] Thank you.
[03:45:26] I mean, promise all settled is sometimes not what you want when it comes to UI as well, because it's blocking. All these things are blocking. Async await is blocking. You don't want to block your, I mean, you want async to block, but you don't want to block your component code. You want to kind of run through it. So like,
[03:45:46] I don't want an await in my component.  This is doing an all settled, but it's like a more advanced all settled.
[03:45:56] Thank you.
[03:45:57] Thank you.
[03:45:59] When async starts to update, can the component distinguish between async pending and async  itself being finished?
[03:46:04] And all the children with the async are finished.
[03:46:09] He he he he.
[03:46:15] It's all kind of the same thing.  I'm not sure I quite understand the question.
[03:46:18] The JS framework benchmark is currently real out of date and you want to use the official results page to get the latest from there.
[03:46:25] Yeah, yeah, yeah. Yeah, per run. Yeah, I mean...
[03:46:28] - Fair enough.
[03:46:31] I just...
[03:46:33] Um...
[03:46:39] Yeah, sorry. I don't think this is going to change what we were seeing around React transitions.
[03:46:47] versus React Hubs without the transitions.
[03:46:52] Yeah.
[03:47:02] Have you thought about then chaining, but with async nodes, like reading some async value than another async value than it?
[03:47:08] I mean,
[03:47:10] Yeah, I mean...
[03:47:12] This example, the Sapirsky is chaining each component.
[03:47:16] creates an async node,
[03:47:17] which passes to another triangle,
[03:47:19] which creates an async node,  cross another triangle, creates an async node.
[03:47:23] This is a that's and when we were talking before about how it all updates together,
[03:47:30] Basically, async runs through the graph.
[03:47:34] I mean, I showed some earlier demos,  if you've seen the last thing where like,
[03:47:38] I mean...
[03:47:39] I guess there's some people who haven't seen some of the previous demos that I did, like from my talk, but like,
[03:47:47] Let me...
[03:47:49] Beyond Signals talk.
[03:47:50] really quickly on this one.
[03:47:53] just so you can understand a bit of the nature of the nesting. If I had a component A,
[03:47:59] that renders a component B.
[03:48:01] that renders a component C, and each one has their own async and reads it inside their component.
[03:48:07] Like,
[03:48:09] Because of the way our components run once and that it's only this that doesn't evaluate, we can still evaluate this like their siblings like we don't await we don't need to chain it.
[03:48:20] See, these are all complete in two seconds. What I'm trying to get at is
[03:48:24] Even though they're nested and they all take two seconds to load, like,
[03:48:27] This one's two seconds, then this one's two seconds, and then this one's two seconds.
[03:48:31] they all render at the same time in fetch and parallel.
[03:48:34] automatically because we don't block the rendering.  We block the data.  If this depended on some data, like if
[03:48:40] Like if C
[03:48:42] required B.
[03:48:44] and then use that here, yes, it would take four seconds. But
[03:48:48] I mean, even me passing...
[03:48:51] Thank you.
[03:48:52] Let's pass B into here for fun. Like, it doesn't really matter. Let's pass. There we go. Pass B in for fun. And now we have props.
[03:49:01] Props.
[03:49:02] And then we go,
[03:49:04] Let's add
[03:49:06] B again here as props.B.
[03:49:10] Like,
[03:49:11] It's still gonna all render in parallel, right?
[03:49:16] Right.
[03:49:17] Right. Uh,
[03:49:19] Thank you.
[03:49:21] So we block on the data graph.  We don't block on the
[03:49:27] on the rendering.
[03:49:28] combining that with the other stuff is kind of like the whole story yeah
[03:49:36] The thing is, I talked about this on a previous stream, the challenge is a lot of times people with async return to a set state. Sure, they're not using useEffect, but they might as well be because they have to set a state.
[03:49:48] This is kind of like...
[03:49:50] I saw actually a demo the other day, RSC demo, where
[03:49:54] Dan Abramoff was using his RSC Explorer, and his pagination demo used actions.
[03:50:02] That makes no sense. That's like using useEffect to write to setState. Pagination is a read
[03:50:08] mechanism. It's like...
[03:50:11] It's like anything you put in the URL perceptually is a read, right?  So if you're like, show me...
[03:50:19] you know,
[03:50:20] after this cursor or, you know, page five to seven or whatever, like anything like that.  It's not, you shouldn't be triggering it with an action to get the new stuff.  It should be a read.  It should be like,
[03:50:32] It should be like
[03:50:34] you should be updating the state and then that's what you see. An action should actually perform a mutation, but I think we get this so backwards. It's also the issue that I, my concern around like remix patterns a lot of times are like, oh, we, we get rid of, you know, the updates because we, we don't, you know, you can use ephemeral state and you don't need to use component state and then you call this update when you want to. But the problem is,
[03:50:56] If you don't have derived state, if you're not making the graph,  you're going to have a bunch of intermediate states anyways that you have to write to.  Sure, you're only calling it once with the update, but you've actually...
[03:51:08] instead of it being like a chain, you've
[03:51:11] you have you have like
[03:51:13] the multiple things. This is why I made the X state comment on that stream. It's because
[03:51:19] when you don't derive, you end up just calling a lot of sets.
[03:51:22] start setting multiple, multiple values, when a lot of times the things could just fold out. Now, don't get me wrong,  derivation is sometimes harder to track, harder to write. But once you set up the rules,
[03:51:32] you feel really confident.
[03:51:34] I think one of my favorite parts like this demo
[03:51:37] is fine, but I did an earlier version of, let me see if I can find it.
[03:51:44] I think it was in my old solid experiments thing.  I did an example that was called countries.
[03:51:51] And
[03:51:52] I asked Brian Florence to remake this demo because
[03:51:57] This one still has transitions in it, to be fair, but I generalize the select component.  This is what moved me to the latest thing to get rid of the explosive transitions, because it's like pretty awkward to force the people to make transitions inside each thing.  And then know that these are inside transitions, like it said, the select component on change has to wrap in its transition.  And then you like now they call change action.  And then, you know, like I didn't want to go down that path.  But the more important part here is.
[03:52:23] Adding
[03:52:24] the country to the front of the list here,
[03:52:27] You know, I made some different logic where switching the country doesn't automatically switch the set of state because I didn't want to do triple cascading.
[03:52:35] The logic of deciding this stuff,
[03:52:37] is all right here. It's like, okay, get countries. Whenever countries change,
[03:52:44] set the country to the first one,
[03:52:46] And then you're like, OK, git states.
[03:52:47] get it to the selected...
[03:52:51] country
[03:52:53] And then here, whenever the states come in,
[03:52:56] Just reset it to zero.
[03:52:58] thing that's what like that thing whenever this triggers just set it back to blank
[03:53:02] which is why when I change the country,
[03:53:05] It sets it to blank.
[03:53:06] And then finally, if there is a state, get the cities for it.  Otherwise, just return an empty list.  And then finally...
[03:53:16] whenever the cities change,  uh,
[03:53:19] take the first city or set it to empty.
[03:53:22] And
[03:53:23] Yes, there's a bunch of logic here, but
[03:53:27] If you look at my components, this is just a generic thing, right?  The thing, the reason I wanted to do this, and I probably should just make this in the  new solid 2.0 is I can just delete the transition and then literally everything is
[03:53:38] works like it
[03:53:39] I can just go on change call.
[03:53:41] Um,
[03:53:42] on change, you know, instead of change action. But
[03:53:47] Just with a bit of logic here, generically about placeholders saying like, hey, disable this if there's no options or if.
[03:53:54] or if the Props options is pending,
[03:53:58] You know, I just made a generic component that has reasonable behavior here.
[03:54:03] The logic is just the derived things. There's no calling set states. I remember Ryan having that demo where he was like, "Oh, I just want inside the change handler, I just want to go loading true.
[03:54:15] Do my work. Loading false.
[03:54:18] And I was looking at this example with three of them, and I'm like,
[03:54:21] Which loading are you setting?
[03:54:23] Like, how do you
[03:54:24] Because this one triggers...
[03:54:27] Like this one triggers this one's loading, and this one triggers this one's loading.
[03:54:31] How do they communicate? How do you compartmentalize that into a component? And the thing is,
[03:54:36] With these kind of tools,
[03:54:39] You can make a generic component with rules about how the updates happen,
[03:54:43] And then with people, it's like,
[03:54:44] I, yeah, the only suspense here is the outside because the app developer is responsible for  suspense boundary, not the, not the, the component library, because you can't really override that.  I guess you could by like playing around with async values, but I don't want to think about  that. I just literally want to go
[03:55:00] when I on change set country, on change set state, you know,
[03:55:04] and then write some rules simply about like, hey,
[03:55:08] what should the state be? And then the rest of this just works. Like if I wanted this to auto,
[03:55:14] select the state, I would just change it to instead of being this
[03:55:19] I would just say make it state zero.
[03:55:22] Okay.
[03:55:24] Beautiful.
[03:55:26] Now, see, it took longer to load because it automatically thing.  But when I switch to the US, it's going to automatically load California.  Yeah.
[03:55:34] Thank you.
[03:55:35] Canada and automatically load British Columbia.
[03:55:38] but
[03:55:41] I didn't have to trace down all these setters. It's literally everything I need to know
[03:55:45] is right here.
[03:55:49] Thank you.
[03:55:51] Thank you.
[03:55:53] Yes. We'll be able to ship a backwards compact create resource on top, but yes.
[03:56:02] Thank you.
[03:56:04] Thank you.
[03:56:08] Thank you.
[03:56:10] Thank you.
[03:56:12] JSRAMBRET vision, they've been changing on the single base rumors with the latest Chrome changes seems... I haven't looked at it yet.
[03:56:18] Thank you.
[03:56:21] Thank you.
[03:56:24] But you see the implementation of adapting signals to be async can have an impact on  benchmarks now there's overriding Calparasync. I wonder how it's going to sell to one oh yeah.
[03:56:35] Thank you.
[03:56:36] Thank you.
[03:56:42] Thank you.
[03:56:43] So I just at a glance, we believe the states are initialized, understand the interpolation, that code I can sell to the hardest React bros on my team.
[03:56:50] I feel it's a good pretty dependent states async stuff.
[03:56:54] Will there be a version of create async for a stream value like WebSocket?
[03:56:58] I mean, there already is.  I mean, it...
[03:57:02] It takes an async generator function so you can, I mean, I think streams have a different use case. So the answer to your question, yes, I think there's a slightly different primitive you want there. But as a baseline, we it takes promises.
[03:57:18] Or, um...
[03:57:20] async iterables. So technically you can just feed a stream and yield the values through and it works.
[03:57:27] Thank you.
[03:57:30] Yeah, but I mean, as we showed in our Spearski example or whatever, it's
[03:57:36] Async whatever, you know, it doesn't have to be fetch or whatever. It's literally oh, I have some expensive work. Let's just do it  and what's beautiful is
[03:57:44] Yes.
[03:57:45] You have to be aware of what you're doing in this work here, but the framework, the UI part, the part on the outside doesn't freaking care. You know what I mean?
[03:57:55] This is kind of like your dip into that world where you do the fetching or decide what you do.  I just love this kind of stuff because like Git Cities here, who knows what that is?  Could be a server function, right?  This is why I love server functions, right?  Like in Solid Start, you just put in use server in here.
[03:58:09] Right.
[03:58:10] Um, it's, it's not like,
[03:58:15] That's why that's why it like actions and like
[03:58:17] I think we have to be very
[03:58:19] careful on the language on the stuff. I mean that's a whole other tangent but like
[03:58:23] Yeah, this this this just feels really good now.
[03:58:29] Obviously,
[03:58:30] Um...
[03:58:32] I'm not done. So
[03:58:34] Maybe we'll realize something in the course of the beta testing for 2.0.
[03:58:38] I'm still missing the last couple of action based and optimistic updates on this new branch.  I haven't implemented those yet.  I have them on my previous branch here, but
[03:58:48] It...
[03:58:49] Yeah, I just...
[03:58:51] I got to give it this felt.  And I guess Dominic Ganaway,
[03:58:55] in chat deserves a big thing, because I hear he was a big influence on Svelte's final solution here in terms of like,
[03:59:03] you know, where they ended up.
[03:59:05] and then just pulling a bit more of the React influence, and I think we end up in a really, really cool place.
[03:59:13] Should one show errors or error boundary or returning some error as a value from create async?
[03:59:19] That's up to you, but if
[03:59:20] Great.
[03:59:21] It's so funny. I feel like I redo the same demos every week.
[03:59:26] Uh...
[03:59:27] I have a demo for this. Uh...
[03:59:30] Uh...
[03:59:32] What's up with this one? Did I? I don't remember changing anything in it. I hope I didn't. Oh, right. I did. I, I had to update it to the new version of solid. Yeah.
[03:59:40] Let's go back.
[03:59:40] Collections?
[03:59:42] Thank you.
[03:59:42] Uh...
[03:59:44] No, collections?
[03:59:46] solid experiments.
[03:59:48] Error Fetch Counter.
[03:59:50] Dev's original example.
[03:59:52] Thank you.
[03:59:54] I think you could make it a value if you want to.
[04:00:00] to.
[04:00:00] But
[04:00:01] Error boundaries are great, right? So we have our loading, then we have our errored. I'm playing around with like simpler names.
[04:00:06] But,
[04:00:07] This is basically...
[04:00:10] Dev set up this thing where you get a phrase and like,
[04:00:13] every
[04:00:14] 30% of the time it airs out.
[04:00:16] Right.
[04:00:17] And
[04:00:18] This is the updated version now with the transition stuff in here, right? So basically when we load,
[04:00:26] load in, and then when I click this, transition,
[04:00:29] Because there's an is pending here, yes. Style is pending, upper phrase, that's the opacity.  And eventually it's going to error here, right?
[04:00:37] Thank you.
[04:00:37] Eventually.
[04:00:38] Okay.
[04:00:39] Now,
[04:00:40] Clicking the next number,
[04:00:42] Updates the graph.
[04:00:44] where this error boundary is showing this message here and passes in a reset. Now, clicking the next number will reset the reactive graph, which will remove the error, but it's still under transition.
[04:00:55] and then we get through.
[04:00:56] but also calling retry
[04:00:59] It uses the fact that the error, it knows it was an error and they create async.
[04:01:05] So like, and this async is actually...
[04:01:08] derived from memos. You got phrase and then upper phrases phrase to uppercase notice no null check because again phrases
[04:01:16] a string. It cannot be
[04:01:20] in
[04:01:21] It's not null.
[04:01:23] which means that upper phrase is also string, not null.
[04:01:26] But if
[04:01:28] Something happens and it errors out on this upper phrase, and we click Retry,
[04:01:32] It will try to...
[04:01:36] It collected the effect that failed, which is specifically actually in this component right here, props.text.  It collects this effect and then tries to get the value again. It looks up the graph.
[04:01:45] And what will happen is we'll trigger transition
[04:01:48] and it will fix itself.  It'll actually fetch the data again in the background.  And you're right, you could have returned a value,  but then you don't get this ability.  If you actually,
[04:01:58] The graph understands that if an error happened in the past and it needs to recalculate it, it should try to recalculate it.  It doesn't cache the result. It kind of breaks the memorization.  So one of the coolest things is error boundaries have the ability to collect the error data.
[04:02:12] nodes at the bottom and then pull through the updates.
[04:02:18] Thank you.
[04:02:22] Thank you.
[04:02:23] Will there be the create async in stores?  You could use the getters,  but I think what's more interesting is the idea of creating async stores.
[04:02:35] - Like,
[04:02:36] The way I use it is I actually derive stores from async, generally speaking. You can use the store as a diff, but instead of having specific, sure, you could have a store, like a giant store, and derive a specific value from an async.
[04:02:52] Value like use the getter and kind of isolate but in that case the store is just a container. It could be an object. It doesn't really matter  What's more interesting is if you have a
[04:03:00] Um,
[04:03:01] async sources that can do fine-grained updates on stores.  And again, I haven't updated it  'cause I don't have the action part,  but I have a to-do app that kind of shows this potential here  where we can combine it with optimistic updates and get
[04:03:14] fine-grained optimistic updates, and then when the data comes back from the server and diffs and doesn't see a change, it doesn't update anymore. So the store story or the local first story with this is actually really cool.
[04:03:25] One of the things I've been working on, we talked about async generators.
[04:03:29] in create async, well, that sends back a whole new value, right, each iteration. What if
[04:03:37] each iteration just wrote to or updated part of a store.  So you can progress the fine grained all the way through.
[04:03:47] We don't have a permit that quite works that way yet,  but it seems reasonable that we could basically
[04:03:52] derive
[04:03:53] stores from streams and then only stream in the parts that change instead of
[04:04:00] doing any diffing.
[04:04:03] Thank you.
[04:04:06] Could React introduce implicit transitions if they wanted?
[04:04:11] Maybe. I don't know if there's a performance cost.  I mean, they have to do the render anyways.  It was hard for me at first to figure it out because I...
[04:04:18] Cloning was kind of expensive.
[04:04:20] But now that they're not using it for prioritization, maybe.
[04:04:25] The other thing is we support parallel.  It's hard to do implicit transitions if everything entangles.  They only have one future transition at a time right now, I believe, or at least one  per create root.  Because we have parallel transitions, again, I have a demo for this probably somewhere.  Let me see if I can...
[04:04:42] Leave. Where is it?
[04:04:47] uh multiply oh i haven't moved this demo over yet
[04:04:52] um
[04:04:54] We'll see the
[04:04:56] old version of it, which is,
[04:05:04] Uh, where was it?
[04:05:11] Oh, I don't I don't remember.  I showed it on
[04:05:16] Oh, but then that wasn't the JSX version. I have a very simple
[04:05:22] demo that's like
[04:05:25] Go back to my profile. That's like.
[04:05:29] Thank you.
[04:05:29] Um...
[04:05:36] Async holding and then parallel async. Yeah, we'll just use this for a second to kind of show off this demo. But what I was pointing out is because
[04:05:44] Because of like
[04:05:46] See how these are still independent even though
[04:05:49] Thank you.
[04:05:49] We have two separate transitions in flight.
[04:05:52] Um...
[04:05:54] Thank you.
[04:05:55] I think that's another piece that's kind of important if you go on plus it. See, Svelte solves this by not actually having transitions. Like, I think I showed in the Svelte version of the demo here that, like,
[04:06:12] Um...
[04:06:14] like the multiply demo that I was just doing. If I click this like five times in Svelte, you're going to see it update five times. Sure, it waits to make sure everything is consistent. But if I click like da da da, you like depending on how long each one takes,
[04:06:27] they kind of all just
[04:06:30] You know what I mean? Um...
[04:06:32] like,
[04:06:34] I...
[04:06:35] I think there's some
[04:06:37] Thank you.
[04:06:38] Yeah, I think you need to be able to support multiple transitions if you want to get there.  They could get there. It is theoretically possible, definitely.
[04:06:48] But yes, compatibility issues is an issue. This is a breaking change. This is like when React changed the set state like solid 2.0.
[04:06:56] The funny thing is the breaking happens in the event handlers. It happens outside of the system. Inside the graph, everything's consistent anyways. But yeah, this is kind of a...
[04:07:04] big breaking behavior change but i mean i think we're still at a point where we can be
[04:07:09] bold it's you know i i get it it
[04:07:12] It is a change. React probably can't easily go here.
[04:07:16] Instead, you have to, I don't know, will every component library go and wrap every event handler? We'll see.
[04:07:24] Thank you.
[04:07:24] Again, you derive it. I wish I could show examples, but the key
[04:07:31] to a lot of these patterns is you drive it.
[04:07:34] See how? Yeah, right here.
[04:07:36] Am I... Am I...
[04:07:39] Thank you.
[04:07:39] I'm setting country zero, but what you see is
[04:07:43] If I took create async,
[04:07:44] And then I rap.
[04:07:46] the countries in a signal that derives from it,
[04:07:49] then I can override that value.  So even though this initially is country zero,
[04:07:55] I can change this to United States.
[04:07:58] And I'm basically writing to that.  So to answer your question,
[04:08:03] The async printouts we have here aren't writeable directly, but you can always derive from them and write to the derived.
[04:08:13] I did that because I didn't want to have all these combinatorics, like create async, create async memo, all the creating signal.  But I actually think guarding this way is important too.  Usually there is no is pending, like dot is pending or dot pending.  The one exception I have right now, there is a countries dot refresh.  So if you want to re-trigger your async, there is a hanging method on the async primitive that makes it special.  That's the only one that has it.
[04:08:43] See the refresh?
[04:08:45] there is a country's doctrine.
[04:08:46] refresh.
[04:08:48] so
[04:08:49] We'll see if that sticks through all beta, but, uh, generally speaking, you can always just derive it. And the fact that driving
[04:08:58] I love this fact that you can use a signal now, you can have drive signals, just makes this whole thing just lay out really nicely.
[04:09:07] Thank you.
[04:09:08] Events already wrapped in start transition to what React calls actions, yeah.
[04:09:12] Okay.
[04:09:14] Thank you.
[04:09:16] Thank you.
[04:09:17] Yes, but the problem with that API
[04:09:21] is...
[04:09:23] The problem with that API is
[04:09:26] This is different than the other case.  The problem with that API is  what if someone just passes a function?  Do they have to...  It needs to be...
[04:09:35] I
[04:09:37] Yeah.
[04:09:39] I've mentioned earlier that with errors we could pull through because we know that they're erred and it's valid. I can't take something downstream derived from async or like function wrapped up a function and be able to tell it to refresh because if I pulled on it, it would hit a memoize value and go, okay.
[04:09:54] Stop.
[04:09:55] I have a value.
[04:09:56] So refresh actually has to start from the top.
[04:10:00] So it has to be the create async if someone
[04:10:03] had props stopped, like passed countries through as props,
[04:10:07] then I lose that.
[04:10:09] So I can't, this API shape doesn't work.
[04:10:16] I mean...
[04:10:17] You can refresh something that's still loading if you want to.
[04:10:20] just like I can click faster than the loading comes in.
[04:10:23] Um,
[04:10:24] I was having some fun with Dev's example the other day, where I was clicking the counter before the loading boundary had finished.
[04:10:34] uh,
[04:10:35] Yeah, I really should remake this demo.  I'm really digging not calling this suspense.  Side note.
[04:10:41] I know it's funny. I just
[04:10:42] There's just something now for me that just feels so natural about
[04:10:48] Let me go in here and Dev's example here, but
[04:10:53] Thanks.
[04:10:53] uh,
[04:10:56] It's...
[04:10:57] Yeah, this one.
[04:11:02] There's something that feels so natural now when I look at this.
[04:11:07] around just like loading an error.
[04:11:11] You know, like, I don't know.
[04:11:13] Maybe "Arid" isn't the best name. It's shorter and it's to the point. You're like...
[04:11:19] I loaded this app and
[04:11:21] I started up this app and it looks all janky. How do I, I mean, I could call it a placeholder, I guess.
[04:11:28] Whatever. I think this is the term you search.
[04:11:32] Thank you.
[04:11:36] All right.
[04:11:37] I don't know. This is what I want to cover. So I think we should probably move on to this week in JavaScript and the other topics unless people...
[04:11:45] unless people have any.
[04:11:49] Mm-hmm.
[04:11:50] Yes, yes, yes. CreateSignal if you pass a function to it is also createMemo that's writable.
[04:11:57] um
[04:11:59] Yeah.
[04:12:01] Thank you.
[04:12:02] This is one of the key pieces.  I wanted to make sure that people never use effects for synchronizing state.  And from my point of view, there's three ways you do that.
[04:12:13] Well, there's four pieces to that puzzle.
[04:12:16] Peace number one.
[04:12:18] Um,
[04:12:19] have signals that are derived.  That's hard in state in React.  Like they tell you can just update.  But if you read like the React docs  about like you don't need an effect,  just write in line in the component.  Well, our version would be
[04:12:32] Write it in a memo, right? So you need to be able to have, uh,
[04:12:36] like this that I'm showing, right?  Second thing, you need a way to do data fetching,  create async, right?  You don't want people to like fetching effects.
[04:12:44] Third, you need a way to write to...
[04:12:47] stores, like, you know, like more granular spread thing.  That's why we have drive stores.  That's why we have projections.
[04:12:54] And then finally,
[04:12:55] Make using useEffect as painful as possible.
[04:12:59] And I think I've accomplished that by making an API that even React devs would hate.  So I think all of those things together really get us there.  No, I'm kidding about that.  The effect API is important.
[04:13:12] But
[04:13:14] Um,
[04:13:15] But if you notice in my examples, I've been splitting it where there's a reactive function and then there's the effects separately, kind of like the depends ways or watch and view.
[04:13:23] Um,
[04:13:24] The...
[04:13:27] but like,  I also have a version that can handle errors separately.  If you notice this effect,  airing doesn't trigger an error boundary,  whole other conversation.  But the idea is I wanted to give effects more power,  but at the same time,  um,
[04:13:41] make them much more special purpose.
[04:13:44] Thank you.
[04:13:45] How does solid 2.0 compare to view vapor?  I don't know. View vapor is basically solid 1.0.
[04:13:52] like they I mean it's hard to compare like the alien signals is a
[04:13:58] faster reactive thing. But View Vapor is basically what we released in 2018.
[04:14:03] Um,
[04:14:04] It's all 2.0. We're kind of going a completely different. I'm not saying that view doesn't have other features that we don't have and they don't have a more advanced thing, but the core thing that view vapor is putting out there is what.
[04:14:15] solids had from the very, very first version.
[04:14:20] Thank you.
[04:14:22] It's been great work, Biggin. Thank you. Yeah, it's been tricky. I go through moments  of wondering if this is even possible to being like, okay,
[04:14:33] So, I mean, we're getting there.  I do feel bad.  I was ready to ship the previous stuff when I did that talk back in September, October,  but I spent the last couple of months getting us there and I'm not there yet, but.
[04:14:43] I'm sorry, I was expecting like a beta release this year, and it's not going to happen.
[04:14:50] But, um,
[04:14:52] We, uh...
[04:14:54] we're we're I'm getting there, you know, we're a lot of work from different  members like R3 with Milo's work and kind of refining this.  There's a lot of cool little hidden features we're getting to like,  like automatic disposals, which is actually broke my tab demo that the look into.  But we
[04:15:11] All those things that like this isn't created inside of root will be limited to certain types of primitives now like effects. We have auto disposal memos and stuff. It's a lot of great work from other people like alien signals guys actually influencing Milo's work and then R3 and all that. Yeah.
[04:15:29] Thank you.
[04:15:30] Yeah, yeah, yeah, yeah, yeah. Like, if someone stopped, I mean, MobX has this already, but if someone stops listening to something, then it gets disposed of on the drives thing. It's the only thing that needs...
[04:15:41] explicit disposals or basically the effects which need to be created under a root essentially but  it means that like people can just like make global
[04:15:50] People could always make global signals, but we weren't
[04:15:53] Like other signals libraries do this like, um,
[04:15:56] for years, but our derived values like our computed or whatever,
[04:16:01] you have to be under root because otherwise they won't get disposed.  The biggest problem with signals based systems is that it links both ways.  So if you have a long lived signal,
[04:16:11] and you stop like
[04:16:13] you have to actually explicitly
[04:16:15] unsubscribe from it or like remove it.  Otherwise it's going to sit like the thing listening to it,  like some computed value, it's just going to sit there forever.  And for the most part, the UI does that for us.  But if people, you know,
[04:16:26] Um...
[04:16:28] made things globally more like,
[04:16:31] you know, did something weird, like create something in an event handler.  I don't know why they do that.  That's why we had this warning.  But now if someone stops listening, then it detaches that part of the graph.  Unfortunately, there's a missing case.  I'm somewhere right now where I with my deferred disposal with, uh,
[04:16:49] Bye.
[04:16:49] transition tab, like UI navigating it's, it's, it's disposing too soon and it's breaking one of my  demos. But once I get that working, I think it'll be a good place.
[04:17:02] Thank you.
[04:17:04] Hmm. Okay. That makes a lot of sense.  You're supposed to read. So if the concurrent throws away the component.  Yeah. Yeah. And it's,
[04:17:11] Which is, it's awkward for MobX, the same reason it would be awkward and solid in that...
[04:17:17] MobX does have automatic disposal, but once you dispose, you have to redo all the work when you...
[04:17:24] subscribe again. So if you have something like React as being kind of ephemeral, which is just like kind of like going, oh, I'm just going to render it, then I'm going to dispose of render it. You're actually instead of the graph keeping its value and being good, you're like,
[04:17:34] causing mob x to kind of have bits of fits because it's like okay i do my work okay i'm good and then  you get rid of it no one's listening and they're like okay good i can release and then you come  back and you're like ha i'm gonna do the work in the mob x so okay i have to recalculate everything  again
[04:17:49] Thank you.
[04:17:50] Yeah, there's different...
[04:17:53] Yeah, there's different timing. It's like, how long do you wait to dispose? The end of the propagation, the end of the current frame, the end of async, the end of what?
[04:18:03] A feeling that adding JS in this is more real for chat. Welcome to the excitement club. Yeah, it's so funny. I posted the first version on here and so powerful, blah, blah, blah. And I'm like, this has like 65.
[04:18:15] Arts. People are like people I haven't posted like the actual demos on on Twitter yet because I was like like  Some of them are broken. They're changing between versions. We'll get there  I'll get to a single place but when I post this like I don't think anyone understood what the hell I'm talking about on these demos  Like it's I was just like I mean, I still love that I literally hand bake a
[04:18:35] This thing, like there's no GSX here.  Like I'm literally just, this is like what solid compiles do.  I just literally just.
[04:18:42] Here's the logic for this thing. I made a component. Guess what? It's just a function. This way -- oh,
[04:18:49] create a DOM element. This way Solid Deconstructs is really educational, but for a lot of people, they don't picture themselves using it. It's just funny that this code here that I wrote is basically
[04:19:03] what the final...
[04:19:05] uh,
[04:19:07] states demo code probably generates like that code.
[04:19:11] is this code.
[04:19:13] you know,
[04:19:14] Thank you.
[04:19:17] It's almost one for one.
[04:19:19] Thank you.
[04:19:19] Thank you.
[04:19:24] Would we ever have a memory space somehow, maybe one time in JavaScript engines that gives us a book service over one day?
[04:19:34] Yeah, I'm not sure. I. It's weird with like.
[04:19:40] JavaScript is a weird language, the way everything is dynamic and
[04:19:45] Bye.
[04:19:46] scripted and it has to like
[04:19:48] be discovered. It's one of the most, one of the more dynamic languages and the fact that we have any expectation around it is crazy.
[04:19:56] It is like the perfect kind of mess for the web, which...
[04:19:59] has to handle messy stuff like this. Sometimes a messy language is a
[04:20:05] Good.
[04:20:07] tool for a messy world.
[04:20:10] Anyway,
[04:20:13] Let's switch gears. I'm going to get ready for this week in JavaScript.
[04:20:21] Give me two seconds, I'm just going to flip to this view.
[04:20:24] Keep on throwing questions in the chat or whatnot.  I'm perfectly open to answering those in a second here.  Also,
[04:20:34] So
[04:20:35] What was I going to say?
[04:20:40] Oh, great. Like, comment, and subscribe. Really gotta push this on the stream.
[04:20:45] It's funny.
[04:20:47] I really don't push it enough.
[04:20:49] And
[04:20:51] If you're around, yeah, it definitely helps.
[04:20:55] Okay, when was the last time I streamed? I guess is the first question.
[04:20:59] Go bookmarks.
[04:21:02] Thank you.
[04:21:03] Thank you.
[04:21:05] I have so much open stuff right now.
[04:21:08] Uh.
[04:21:12] Just gonna close down some of these windows.
[04:21:20] All right.
[04:21:25] All right, this book...  All right.  Like, bookmarks in Blue Sky.  I've only ever bookmarked one post in Blue Sky,  and that was Riches Harris's...
[04:21:34] Forking post.
[04:21:36] I don't know.
[04:21:40] "Hotting these sounds together, so satisfying. They have the same, of course, this is how it should always work, the elegance of signals." Yeah, I mean, that's really what I'm doing here. I know it's taking a while, but now it's kind of more in the open and people are watching, but I feel like
[04:21:54] when this lands again,  it's going to be this,  it's going to be like the same thing.  Like solid.  It's so funny because solid changed so little in seven years.  And now we're talking about big changes again.  And most people are just like discovering it now.  It's kind of funny.  It's like,  people are like,  Oh wow,  this is so crazy.  This way it should all have been.  And this is really awesome.  And it's like,
[04:22:12] That's like, for me, it's actually longer. That's like a decade old for me now. It's like I'm ready for the next thing. I hope.
[04:22:21] I hope it happens faster this time.  I hope.
[04:22:23] you all are ready for the next thing as well.
[04:22:28] Thank you.
[04:22:30] Uh, scheduling window.
[04:22:34] Playground, okay.
[04:22:38] Alright.
[04:22:39] All right, all right.
[04:22:44] Okay.
[04:22:45] Cool. Okay. This, this, and then I'm almost ready. Give me two seconds. When was the last time I streamed?
[04:22:52] Okay.
[04:22:54] Thank you.
[04:22:55] November 21st. Wow.
[04:23:00] Okay.
[04:23:03] Has much happened since November 21st?
[04:23:07] Thank you.
[04:23:08] I guess we'll find out in a moment.
[04:23:11] Thank you.
[04:23:11] Thank you.
[04:23:12] Thank you.
[04:23:16] Oh yeah, there's some fun stuff. And then...
[04:23:27] Thank you.
[04:23:28] Thank you.
[04:23:30] Thank you.
[04:23:32] Although, to be fair, I haven't been as busy myself. Okay, so let's...
[04:23:37] Let's get going here.
[04:23:39] Thank you.
[04:23:41] The problem is...
[04:23:44] It's not the problem, but we have to realize this. I'm very close to
[04:23:49] being like finalizing the features on the client side,  which is what I thought I had done a couple of months ago.
[04:23:54] But then we have to apply everything to SSR.  So even though this is like the...
[04:24:01] This is why I have so many phases, like multiple phases here.
[04:24:06] The client side stuff is like getting very close to being like, let's RFC it.  Let's stamp it.  Let's get the feedback.  Let's work through it.  Let's see if this works for real applications.  Let's try integrations.  But the server side stuff is actually also...
[04:24:20] Thank you.
[04:24:21] A fairly big update.
[04:24:23] Probably, although change of R3 changes everything again.  So yeah, I...
[04:24:28] I...  You're only seeing half the story.  So...
[04:24:32] Yeah.  Yeah.
[04:24:34] Thank you.
[04:24:35] Huh.
[04:24:39] Okay.
[04:24:42] This Week in JavaScript.
[04:24:46] Let's get going.
[04:24:48] Start with some solid
[04:24:50] news.
[04:24:54] I talked about this previously. It's always cool when Dax, you know, draws attention to it. But he was really excited because he built his whole company on solid like
[04:25:03] terminal apps like people talk i still to this day people are always like
[04:25:08] Hey, um...
[04:25:12] You know, React's advantage is like you can do things outside the browser.  You have like React Native and Ink and 3GS.  People don't realize that it's just as easy to build those kind of things in solid as it is in React.
[04:25:25] Like people are like, oh, you need a special compiler.  You need something like that.
[04:25:29] There's a...
[04:25:30] The reactivity, while I show the DOM stuff being specialized,  you can generalize it.  Like, while the compiler isn't the...
[04:25:40] standard solid DOM or SSR compiler, we have a third compiler that is basically the catch-all.
[04:25:47] we could make everything use this third compiler.
[04:25:52] But then it wouldn't be as optimal specifically for
[04:25:55] the dom environment.
[04:25:58] Right.
[04:25:59] which is what I focused on, or SSR. So the way you should actually view solid is, there's a generic compiler and then we've made specialized compilers for DOM and for server.
[04:26:10] So, like...
[04:26:12] it has all the same properties as, as react does, um,  in terms of that.  And you can even interchange elements like Dom and canvas together and all  this stuff. Um,
[04:26:22] like other compilers together.  It's some work.  Nikhil did a couple of years ago,  which is amazing.  But it means is that
[04:26:28] DAX is using solid in the terminal. He's using solid on the desktop. He's using solid on the web.
[04:26:35] And
[04:26:36] also for enterprise.
[04:26:38] People don't realize this.
[04:26:40] like,  outside the browser,  is like,  cursor is a perfect example,  right?  Cursor,  everyone knows,  the Next.js is their  cursor web app.
[04:26:49] But when you're using the cursor IDE, like on your desktop, that's solid.
[04:26:54] So...
[04:26:56] like
[04:26:58] Um,
[04:26:59] Yeah, this is just awesome to see. Obviously he's talking about our growth. I didn't realize the six acts we went.
[04:27:06] from
[04:27:07] last
[04:27:09] year at the beginning of the year at around 200
[04:27:12] 250 ish to now being over 1.2 million downloads a week.  So yeah, solid's growing in a nice, nice clip.  So thank you all those people, you know, companies, you know,
[04:27:23] that have been adopting. There's been a lot of really nice growth. Some large companies too, like Bloomberg and obviously Xfinity, Comcast, Universal using us on television apps, just really...
[04:27:35] really nice, solid growth.
[04:27:37] Oh yeah, here's one. Bell launches new five...
[04:27:40] TV app built using Lightning JS and Solid JS. Millions of Canadians will experience Solid daily. Yeah, that's that's awesome. As I said, the TV apps, it's funny, it's actually everyone assumes that this is a weakness of our approach and that we should, you know, like, this is why you react, we get used to
[04:27:55] probably at larger companies more often on non-web platforms.
[04:28:00] Stop.
[04:28:00] Like,
[04:28:01] Bye.
[04:28:02] yeah it's kind of it's kind of funny
[04:28:09] Thank you.
[04:28:14] It's not that simple.
[04:28:18] you
[04:28:19] I... I...
[04:28:22] have
[04:28:23] If you guys aren't aware of my funding, I get paid...
[04:28:28] by Sentry, and before that by Netlify.
[04:28:32] Um,
[04:28:34] It's not like stock options or whatever.  I don't have an investor.  I don't have like traditional investors.  I don't have a company.  I literally get paid.
[04:28:44] salary working for a company that lets me work on open source.
[04:28:48] Um,
[04:28:50] Similar to the deal Rich Harris has with Verzell and whatnot. We're not owned by the company, but we're given leeway and license to be able to work on our projects, which is amazing.
[04:29:06] I sold my eBay. Think about when I worked at eBay and
[04:29:10] the tech stuff. I,
[04:29:12] The eBay options are fine, but I did not make much money off of them.  I know that was a joke, but yeah.
[04:29:21] Thank you.
[04:29:22] No, no, that's the thing. I didn't even know until the, the, like this CTO reached out to me or whatever. And I talked to him and I saw the code base and then they started trying to hire people in the core team, you know, as I'm part of that, you know, like looking at like, we're, you know, they, I guess they're also seeing if I want to work, but I have such a great deal with Sentry, you know, I, I,
[04:29:43] But like, um,
[04:29:46] Yeah.
[04:29:47] This is the thing.
[04:29:49] People...
[04:29:50] Yeah.
[04:29:55] Thank you.
[04:29:56] You can't be acquired if you're not a
[04:30:00] company, I think.
[04:30:03] Yeah.
[04:30:09] Yeah, no, and the fact that I've been able to have two jobs like that in a row, it's amazing. Netlify and Sentry. Clearly, there's people who believe in what I'm doing. I think it's like the long shot bet, honestly. Tanner, kind of similar situation, although he gets funding from different locations, but...
[04:30:28] I think there's a lot of goodwill that comes from it and a lot of my research ends up
[04:30:33] helping more than just
[04:30:36] like it has a ripple down effect that creates goodwill across the board,  which I didn't realize at first.
[04:30:43] I was actually talking to Adi Osmani at the conference recently because I was mentioning how Google's funding of solid actually really helped research that would lead to...
[04:30:51] work being done on like Cerevel, which was our serializer and like in a sense,
[04:30:57] *sniff*
[04:30:58] Like,
[04:30:58] Thank you.
[04:30:59] you can't look at stuff like Tanstack Start
[04:31:02] or even some of the newer features in felt kit and not see
[04:31:04] solids influence there right and um
[04:31:09] Like.
[04:31:11] the ability to kind of build out the stuff and have it kind of trickle out into the ecosystem.
[04:31:18] is
[04:31:19] I think it does net positives.  Even the server component,
[04:31:25] feature that they're working on, Tanstack, was influenced by
[04:31:28] work that I'd done in research into server component approaches. Right. So like,
[04:31:34] Everyone practically realizes that reacts popular after you react.  Everyone wants.
[04:31:40] a lot of people want Tanstack to succeed.  So in a sense, by supporting my work on open source and solid,  you're actually also supporting Tanstack as well.  For example, like in terms of some of the design stuff that comes there,  like, like,
[04:31:51] And they're supporting us right back again. If you want to talk about download numbers, a lot of that comes from, um,
[04:31:58] the exposure solids getting through, uh, 10 stack dev tools. Um, so like, uh,
[04:32:04] there's just, there's like a nice alignment  between a lot of parties in open source,  you know, where, you know, who knows,  maybe in the future you take your React app,  you move it to TanStack,  and then you move it from TanStack to TanStack Solid, right?  So like, this is kind of,
[04:32:22] I think there's people who are interested in alternatives to React, alternatives to Next.js.
[04:32:28] all actually end up aligning and wanting
[04:32:30] the work.
[04:32:31] even though I'm like as far upstream as it probably possibly comes,  the work that we're doing on Solid and myself they're doing ends up
[04:32:41] probably a leading to that eventually eventuality.
[04:32:44] Like it helps.
[04:32:47] Thank you.
[04:32:49] Thank you.
[04:32:52] Thank you.
[04:32:53] Thank you.
[04:32:54] To be fair, the guys from Cursor have found...
[04:32:59] Thumb.
[04:33:00] Thank you.
[04:33:01] issues that they want to work through in terms of some performance pieces. The type of ways they're  using store and stuff might not be correct and we have to work through that. Their biggest problem  was actually TypeScript, ironically. They're using giant stores and because of our typesetters, this  is Fixed in Solid 2.0 because we have a different API for the setter, was actually causing probably  wasn't the actual performance of Solid so much, but that their TypeScript compilation was taking so long
[04:33:27] Yeah, anyway, yeah. But mechanically, yeah, I mean,
[04:33:31] Highly interactive stuff, embedded systems, this placement makes a lot of sense.  I mean, Netflix was looking at us for a while until they realized the migration of React,  so it's going to be a little bit too hard.  But...
[04:33:42] I think
[04:33:43] I think it's a great option for a lot of green.  I always hear about these like little side projects from Apple and all these  like things that we never get the front page web stuff.  We always end up with like the crazy performance people who need to,
[04:33:54] Stuff that happened.
[04:33:57] Thank you.
[04:33:58] Yeah, I mean, the TanStack team are paving the migration path.
[04:34:07] Yeah, I mean, part of it is the sheer amount. Part of it is there's a couple of things that were designed that I thought were impossible for TypeScript to type. Someone figured it out, but in a very expensive way, you know, places that can be improved.
[04:34:21] Thank you.
[04:34:22] Yeah, I heard there's some views libraries coming in, spelled into tan stack, especially like start, which people are excited about. I think Sebastian Lourier, the guy who does React, he's like, now they're framework agnostic. It's like, no, guys, Solid's been there since day one. I guess it wasn't so obvious because there was no announcement because literally it was implied when a new tan stack library comes out, it comes out for React and Solid.
[04:34:43] Okay.
[04:34:46] Other interesting demos. Durable streams, tanstackdb plus solid.js. He just did it for fun. He just tried in a different thing. But this is a perfect example of showing where the solid and tanstack, you know, is just...
[04:35:00] He didn't use React.
[04:35:02] just to do demo. There's a comment, it's like, are you using solid much? He's like, no, not really.
[04:35:08] Not really, just did Wim for dollars. Some community members did integration DB, so it's pretty easy. You know what I mean?
[04:35:14] I think this goes to what I was talking about earlier, where is if all the expensive or tricky specific logic is in create async and the rest of the framework just renders,
[04:35:23] like outside of the create async call in all those demos, it just looks like synchronous, plain, solid, super easy.  Then
[04:35:30] Stuff like this is really easy because Kyle can just take a demo that's any transitions or weird or whatever, and he just writes the logic the way he expects it to be.  And then all the work is in that.
[04:35:42] wrapper, essentially, like whatever they wrapped HandStackDB over Create Async, that's where all the work is.
[04:35:48] And then seriously, you just then you're just taking TANSTACKDB API and plugging it or, you know, with the stream support and then plugging it directly into a very basic.
[04:35:57] user interface that is designed to be rendered optimally by default.  It's just win-win. I've been saying the local first story is just like
[04:36:06] It's just this is this is where things really go to new gear. Okay, let's continue on. Um,
[04:36:13] Let's look at bookmarks.
[04:36:18] Uh...
[04:36:21] Yeah.
[04:36:21] I'm going to go back to this one in a minute, but...
[04:36:27] Thank you.
[04:36:29] Thank you.
[04:36:34] Hmm.
[04:36:39] Ah, this is an interesting conversation.  Let's see what here is.
[04:36:42] Oh yeah, this one.
[04:36:44] React is slow. This is
[04:36:46] This is 3.js running in the echo server, rendering real time 8,000 things. Here's Shopify and just how we pulled it off.
[04:36:53] - Then why do you have this code?
[04:36:55] Is it slower than plain 3GS? No, there's no override. Components render outside of React.
[04:36:59] What's the next sentence say?
[04:37:01] VJS and Scale do to React scheduling abilities.
[04:37:04] That's...
[04:37:05] That time slicing is awesome.
[04:37:08] can't have time slicing with a render model that allows it no matter how it comes rendered.
[04:37:13] Oh, that's been cheeky.
[04:37:15] What kind of render model allows it?  Or guess more clearly, what render models do you think not allow it?
[04:37:18] Writer model for view, angular, or even solid, correct me if wrong, is to compute and apply all DOM dates to a single tick. You can still do slicing, of course, you just have to cut the slices yourself.
[04:37:27] How is React model different than compute and apply all DOM up to a single thing?
[04:37:31] We talked about this on stream. Sometimes on Twitter this doesn't come across properly.
[04:37:37] Dev's right, though.
[04:37:40] it's hard to get to the nuance of it.
[04:37:42] If the compute part takes 200 ms in large 3D and the DOM update gets deferred, this means the browser still has to fire 10 to 10nm frames while rendering. In the other frameworks button, it's about to work with rendering.
[04:37:56] *sniff*
[04:37:56] Thank you.
[04:37:57] But by interrupting the work, you don't render the lower priority stuff until you hit some sort of threshold or input stops. Time slicing ends up spinning its wheels and then throwing away potentially multiple times. The end result can be smoother in some ways, but also prone to latency as responsible ends up dragging. Seeing things seize up and then update it.
[04:38:13] in bursts, things look like
[04:38:15] maybe they are mostly updating but delayed maybe a couple of mils hundred milliseconds like it's  moving slow motion honestly neither is the place you want to be now i take time slicing i think if  it didn't come into cost i implement time slicing blah blah blah what i found was that threshold in  which things get weird happens a lot quicker because the overhead of the mechanism itself  and by similar consideration there are ways to reduce the overhead of work of process it's
[04:38:33] So, clearly better results.  If you don't expect to exceed the bounds very often or rarely, burst, seize ups, feel fine.  Expect to hit all the time.  You should fix what you're doing.  Yeah, I think this is kind of a summary of what we talked about on stream.  I think 3D is an interesting area.  Yeah, let's talk about this for a second.
[04:38:48] in that there could be considerable costs in setting up the scene graph data, things that happen off screen, things that become part of the pure render, which in the browser wouldn't be our responsibility. So smoothing over these burst allocations is actually nice. I think the thing we often find
[04:39:00] Interesting note.
[04:39:01] about things like React 3.5er is that in order to get the performance generally, you do granular updates outside of React's update model anyways. Yeah, they don't call set state to update the stuff. They have their own update timer. React is only there to set up the scene.
[04:39:15] where the time slicing is helping and then bypasses for updates.  So when used as a performance example for React, it always feels suspect  because the most glaring fact is the updates escape React's update model.  Time slicing is nice here, but almost a product of the abstraction in the first place.  To be fair, every framework needs to render on creation so they are impacted.  But if the parts of the scene graph that weren't represented as components
[04:39:36] then we could break them out as
[04:39:39] out of this synchronous lockup. What I'm saying is if you could just pull the expensive stuff into like create async,
[04:39:44] you know, pull it out of the rendering,
[04:39:46] then you don't need the time slicing initially either.  It's just odd to use an example that basically poses the model at every turn as a performance example.
[04:39:55] What I'm saying is I actually...
[04:39:57] What I was trying to show earlier were the superior scrimmage.
[04:40:00] Pinsky examples.  I actually think...
[04:40:03] that this
[04:40:05] this basically suggests that we don't need time slicing. It's always interesting to me because like
[04:40:10] -
[04:40:13] these kind of updates
[04:40:15] almost never have anything to do with React's performance.  React just sets up the graph.
[04:40:21] And then the splitting helps there.  But if you could just...
[04:40:24] pull the graph setup out of the component rendering, then you don't need it splitting in the same way like I showed. So I think this
[04:40:32] I think this is one of those places where this perspective is going to change.  I want to point this out because this is like another example of like,  Oh,  time slicing.  You,
[04:40:41] you can't do this any other way.
[04:40:50] Handstack is using creative resource. Yeah, that makes sense.
[04:40:54] Where do Tanstack start and Solid Starts for the long term? They seem very similar. What's their distinct role? Why would Tanstack start just be the default? What do they do differently?  Well, the problem is we need...
[04:41:02] We need like a create...
[04:41:05] VDAP for solid that supports SSR.
[04:41:08] That's why I made solid start. I don't care about the advanced features. The problem is to get all the pieces together, there are things you need, like SSR, suddenly deployment becomes a thing.
[04:41:20] And the thing is, I wanted this design permit that were specifically designed for solids
[04:41:25] uses. Tanstack's great in that it's general and it has like way more stuff and opinions and stuff, but I need something more core, like...
[04:41:34] Like,
[04:41:35] things that I could pull into SolidCore itself, like...
[04:41:40] Like the hardest thing is if you have to build an adapter for next JS react  router seven or tan stack,
[04:41:50] Like you have to build three different adapters right now if you're clerk for auth.
[04:41:54] I didn't want that to happen with Solid.  So,
[04:41:57] I'm intending certain pieces
[04:42:00] I think actually belong in the framework, like having a shared request model so that the router can tap into it.  I want to make it so that any solid router can work in SolidStart because I want to make it that any solid router can work with Solid in all these scenarios so you can build any meta framework you want.
[04:42:17] But to do that, certain pieces and certain interfaces have to be established by the core framework itself.  And so SolidStart is designed to be solid specific starter that aligns with all these feature goals of all the features fitting together quite nicely.  And very primitive. It doesn't care about like, oh, you want a special validation library?  Go use, you know, obviously a Valabot here, but use Zod if you want.  Like, go ahead. We're not going to make those kind of...
[04:42:44] decisions for you. We just need to look at things from a very primitive level. I don't even want to tell you which router to use necessarily.
[04:42:51] So like
[04:42:52] So generally speaking, TanStack start is always going to be more opinionated.  I'm hoping there's a future in which TanStack start is just some opinionated wrappers.  The same way you create async for query, you wrap these primitives that we built in solid itself or even something, anything that can stay within solid start in TanStack start.
[04:43:22] as responsibilities fit into the right places.  But there's definitely that core piece.  Like part of Solid Start exists because of say,
[04:43:32] Deficiencies in bead itself, for example. Things that are missing.
[04:43:36] You know, they add the environment API, suddenly those things shouldn't. But like server functions, they have to come from somewhere, right? You know, maybe they're just a V plugin. Beautiful. Now that piece doesn't need to exist.
[04:43:47] Um,
[04:43:48] Tensek Start and Solid Start are very similar, obviously, because Tensek Start's design was basically based on Solid Start. It's like literally our architecture just moved in a more generic way, right?
[04:44:00] the whole isomorphic data loaders and the server functions and the single flight mutation potential. And like all those pieces are basically the cornerstones of what makes Solid Start API design. So obviously, uplining these projects is fairly easy. But there's a lot of like
[04:44:16] the details in the implementation that has to happen while we continue to do the updates. So the biggest thing is like,
[04:44:22] Originally, I was spending a lot of work in making stuff
[04:44:26] that didn't exist, and Nikhil was.
[04:44:28] And then Stack started by just using the stuff we built.  And then they're like, things have changed.  We can do better. We can cut out those pieces.  We can do stuff. And they rebuilt it.  And then we're taking pieces of their stuff back and using it.
[04:44:42] Um, you know, like the server function plugin that's.
[04:44:45] So that's where I want to go. I have no ambition in terms, in a sense, you could say that SolidStart could melt away, but we still need a CLI and we still need a way to start solid projects with SSR without saying, here, you have to use a framework. I don't want to tell people they have to use a framework.
[04:45:02] ever really so
[04:45:05] Um,
[04:45:06] Yeah, these projects have distinct...
[04:45:10] purposes. I think for a lot of developers, they'll just be like, yeah, tan stick starts exactly what I need. I want to opinionate it. I want it just to work out of the box and just go and they'll go use that. And we'll be using a lot of the same pieces. But for other people,
[04:45:22] They don't want to be told what to do.  I'm one of those people.  I hate people.
[04:45:25] being forced opinions to a certain degree. Obviously, I have opinions, so
[04:45:32] you know, there's always going to be things you disagree with, but trying to keep those to a minimum is like part of the goal here. So yeah, I,
[04:45:39] I doubt we're never probably we're probably not going to default to tan stack start that.
[04:45:45] ever. I mean, it's, I, I don't mind it being a choice, but we still need like a base template,  at least from my perspective.
[04:45:55] um okay
[04:46:00] Uh...
[04:46:02] That's why I don't just bookmark this because I thought it was funny.  That's the same guy who gave us a demo that we're using for time slicing earlier, which is very helpful.
[04:46:11] Apparently doesn't.
[04:46:12] like us.
[04:46:13] That's why I don't like the community around SolidJS. Arrogant, Selfish Talks is built on an anti-react guise.
[04:46:19] That's funny. Brought in from the author, Ryan Carter, his marketing for solid. It's so funny.
[04:46:24] Are we anti-React?
[04:46:27] I guess...
[04:46:30] from the perspective that if we want to succeed,
[04:46:34] And we want people to choose using our project.
[04:46:38] then
[04:46:39] We...
[04:46:43] you
[04:46:43] We're not necessarily always pro-React. We have to disagree with them on certain decisions or certain design points.
[04:46:53] But I have a lot of respect for React and the React core team.  I wouldn't, you know, have Ricky on stream or jump at the chance to talk to Dan and stuff.  Like if it wasn't a matter of like, you know.
[04:47:04] You know, the great work they do, it's influenced our work a ton, you know.
[04:47:11] Probably shouldn't waste too much time on this guy. Clearly doesn't know what he's talking about.
[04:47:16] Um...
[04:47:19] Yeah, it's trolling.
[04:47:21] Thank you.
[04:47:22] Thank you.
[04:47:24] Thank you.
[04:47:26] Thank you.
[04:47:28] Thank you.
[04:47:28] But I just don't get what people get out of doing that.  I don't know. Whatever.
[04:47:33] Maybe this works.
[04:47:36] more on people who get angry about stuff and then like they,  like they get to them,  but yeah,
[04:47:44] I don't know. I stopped.
[04:47:47] I stop sometimes to think of like,
[04:47:51] If this is the kind of stuff you write on Twitter, like
[04:47:54] What do you do when you're not on Twitter?
[04:47:59] I don't know. Maybe I'm...
[04:48:01] I worry about other people too much.
[04:48:04] Um...
[04:48:07] So
[04:48:08] Thank you.
[04:48:10] But Bun is joining Anthropic. I don't have a ton to say, honestly. Theo covered it better.
[04:48:16] I, again, I flagged this because it's interesting.
[04:48:19] Um,
[04:48:23] I-I- what's cool is...  Bun is...
[04:48:27] And Jared is like my kind of guy.  You know what I mean?
[04:48:31] He's fine. He's running a company. He does it. I think he gets to focus on the engineering again is just like probably the best thing.
[04:48:39] I mean, he's more ambitious than me in terms of running a company, but I,
[04:48:43] I
[04:48:44] I think he's probably very happy where he is now.
[04:48:51] Thank you.
[04:48:52] Thank you. Yeah, that's fine. I only flagged because it was interesting. Whenever I see something that's like so...
[04:49:01] so like negative, you're going to go like stop.  I think there's an article I saw a while ago that's like solid is not the future or something.
[04:49:10] And it would.
[04:49:14] Bye.
[04:49:14] Can I even find any more? Solid.js is not the future. Yeah, here it is.
[04:49:18] And
[04:49:20] I was going to cover it on stream, but I read it and I was just like,
[04:49:25] You can't even really engage with it.
[04:49:27] I agree, this entire discussion is pointless and stupid.
[04:49:31] Because I was going to argue with the points they were making, and then I was like,
[04:49:36] I...
[04:49:37] It's you.
[04:49:39] It's tricky, you have to like,
[04:49:41] In order to actually talk about something in good faith,
[04:49:44] Um.
[04:49:45] You have to at least like there has to be good faith to be able to talk about something right?  So when you like when you read something like that and you're just like you
[04:49:52] This person is either like
[04:49:54] the stupidest person who's ever lived or like,
[04:49:59] Like, there's no common ground. You can't even have the discussion because you're just like, this person must be coming from some alternate universe where like,
[04:50:11] Like,
[04:50:11] up is down and whatnot because like when you like when you
[04:50:15] Like, there's no way that someone is, like...
[04:50:20] You know what I mean?
[04:50:21] Yeah, it's hard. It's basically no thing.
[04:50:29] Thank you.
[04:50:31] Thank you.
[04:50:33] Thank you.
[04:50:34] Yeah, I mean, prioritization, but I mean,
[04:50:40] I
[04:50:41] So
[04:50:42] I don't know if Bun was always the best at prioritizing.  Jared is kind of a loose cannon sometimes.  Did you ever hear the story about like the day before he released open source Bun or like two to three days before he wrote a solid JSX compiler, you know, just for fun?  Instead of focusing on bug fixes to get that out the door, he decided to write a solid JSX compiler.  Yeah.
[04:50:59] You know, that...
[04:51:01] It wasn't fully featured, but it was just like a proof of concept.  I just said...
[04:51:06] Let Jared cook.
[04:51:08] Thank you.
[04:51:09] Uh...
[04:51:10] I don't know. I doubt they're going to change the core aspect of the open source and like the core aspect of what makes fun fun.  Like, so.
[04:51:20] them influencing direction.  Like we just need the runtime to be well tested.  I think that's the most important thing.  We need it to be solid.
[04:51:30] Yeah, I'm sure there's going to be anthropic specific stuff and like runtime, like they're going to go off thing. But the most important thing for for for.
[04:51:38] for people using Bun is that it's stable.
[04:51:42] Right? Like, is it, do you guys find bun is missing many features?
[04:51:47] Right? Like he was, they were making like their own Redis and stuff.  Like if, if, if they're already doing that, you know,
[04:51:56] I don't care.  Like,
[04:51:58] Beep.
[04:51:59] go help spend that effort doing something for Anthropic.  That part's like tertiary to what I'd be using Bund for,  which is it's bundling,
[04:52:06] It's a package, like install thing and it's runtime. Like I'm, I,
[04:52:11] Whatever else, you know,
[04:52:14] Whatever. I guess I'm not like a huge Bunn fanboy, so I don't really care. I just I want the fastest runtime. I go to Bunn.
[04:52:24] Let's move the banner for a second.
[04:52:31] Thank you.
[04:52:33] Thank you.
[04:52:36] Oh yeah, Ryan Florence...
[04:52:40] Ryan Florence
[04:52:44] performance benchmarking arc. We can do that in a minute.
[04:52:49] Maybe before that I should look at one more thing.
[04:52:55] This is a kind of interesting thing.  I often find really interesting posts.  For those who don't know, Aaron is...
[04:53:03] CEO of Rosicorp, you know, like Zero and...
[04:53:08] RepliCache and
[04:53:10] You know,
[04:53:12] And
[04:53:14] He makes really astute observations, and this one is kind of a funny one.
[04:53:18] And this one, I wouldn't mind putting out to the chat to see where you guys fall.
[04:53:24] Thank you.
[04:53:25] Um.
[04:53:30] So basically software engineering
[04:53:32] likes to crash early and ops likes to degrade gracefully.  I think this exposes something kind of interesting about both
[04:53:39] disciplines and settle about running software at scale.
[04:53:43] It's very important. In fact, when I talk about framework design,
[04:53:46] I like my software to fail early.  Do you know what I mean?  Like, I don't want my React app
[04:53:53] to get slower and slower over time because of re-renders I don't notice.  I'd rather the reactivity just stop working the second I make a change.
[04:54:02] But there is a certain practicality here. Graceful degradation, which is something that React spends a decent amount of time supporting, time slicing, that's the whole topic of the stream.
[04:54:13] Um,
[04:54:14] You could view...
[04:54:16] Time slicing is a grateful degree.
[04:54:18] - Okay, Gai-shin.
[04:54:21] is actually a fairly high React priority where
[04:54:25] you know,
[04:54:28] when I'm designing stuff.
[04:54:30] I do like it to crash early.
[04:54:34] Right.  In before Erlang.  Right.  Because aren't they the set thing where it's like basically not possible to write
[04:54:41] correct wrong code if the code's wrong it just won't compile it won't run
[04:54:46] React compiler, yeah, that's another great example of
[04:54:49] Like it's like optimizing to try and degrade gracefully, like all the stuff that prevent you from just writing the right code in the first place.
[04:54:58] Um,
[04:54:59] Like art.
[04:55:00] not even write code,  like remove the ambiguity of what is right or not.
[04:55:07] Thank you.
[04:55:08] - Or letting me say, let it crash.
[04:55:11] Yeah.
[04:55:12] And also...
[04:55:13] I'm not.
[04:55:15] I think there's more to it than that, right?  Because Erlang, the stuff can also...
[04:55:21] be stopped and resumed and moved across. Like it's very portable. It's very modular.
[04:55:26] Because the process,
[04:55:27] Supervisor will just start another one that will crash again. Yeah. Yes. Yeah. Um,
[04:55:36] Yeah.
[04:55:36] Yeah, because it's isolation to handle it.
[04:55:39] And
[04:55:40] But this is a very interesting fundamental question, right?
[04:55:46] I like Crash Early, and I think most software developers lean towards that
[04:55:50] But then when you become a product manager, they say ops, but people, you know, when you're on the other side,
[04:55:58] Degrade gracefully is what you actually want.
[04:56:00] And these things are fighting with each other.  I think this whole thing could actually be the fundamental...
[04:56:07] gap or difference between perspective on like when you
[04:56:11] Why like say solid JS is a.
[04:56:13] Thank you.
[04:56:14] engineers framework, so to speak, because
[04:56:16] like we cater to software engineers where like
[04:56:20] Mm-hmm.
[04:56:21] you know, crash early where it's like,
[04:56:23] react.
[04:56:25] and the role of meta like they've been forced to worry about degrade gracefully  that's like really important to them and when we look at them they're like you're
[04:56:34] How could we not look at that and be like, that's craziness.
[04:56:38] Right?
[04:56:39] Idealism versus reality.
[04:56:41] So by that scope,
[04:56:43] We're the more idealist one and React's the more realistic, which is funny because a lot of people paint the React team as being in their ivory tower, you know, being like sitting there and going, oh, concurrent rendering, algebraic effects, time travel, things.
[04:56:56] time slicing...
[04:56:58] you know,
[04:57:00] you know, they're just making up stuff to make things more complicated.
[04:57:04] Or maybe not.  Maybe...
[04:57:08] they are actually trying to engineer for a reality that isn't so clean.
[04:57:13] But it's also like where the values are. Software engineers don't want to return incorrect results, rather be down than do something wrong.
[04:57:20] Yeah, this is true too, right?
[04:57:22] There's probably an unstated bias towards having a debug state bugs.  Oh God.  We had a bug.
[04:57:28] one of my old companies, where we were basically deleting data
[04:57:34] Like not like not the photos, not the assets themselves, but deleting data records.  And like it was happening really weird thing.  It was like a bad SQL query kind of thing, but it was very subtle.  It only happened in a certain thing and it was generated from the ORM.  And like, I, it turned out that I was missing an S on a table join schema thing.  Anyways.
[04:57:56] It took forever because it still kind of worked and it was like we had one of those kind of rails like auto generating thing. It was in JavaScript or something called backbone or am that I worked on anyways.
[04:58:06] And it took us weeks to figure out because it's so subtle.  We didn't notice at first and people complained.  We're like,  are you sure?  Like you just hallucinating things.  But then we had logs and history that'd be like,  no,  the stuff's actually missing.  There was a user action.  Like,  and it took us forever to figure it out.  And,
[04:58:21] - Good.
[04:58:22] Like,
[04:58:23] as a soft renderer.
[04:58:24] 100%
[04:58:26] would prefer,
[04:58:28] if the thing just crashed or errored on the user,  then it kind of worked because...
[04:58:33] Over those, there's no way to unwind weeks of subtle changes. You don't know what was the user did or what happened accidentally.
[04:58:41] Like, and...
[04:58:45] Like
[04:58:46] When you're looking at something debugging it and the status in makes no sense, like this is impossible to get here.
[04:58:51] Like that is the absolute worst feeling in the world.
[04:58:57] Thank you.
[04:58:59] Thank you.
[04:59:01] Yes. Obviously when the Night of the West are done with the devs we'll have a device
[04:59:08] way to clean up the silent data corruption.
[04:59:12] devise away, yeah.
[04:59:14] Amen.
[04:59:15] I think React needs focus on gridlock because it's easy to do things the wrong way.
[04:59:19] Right. I mean, and that's part of the ambition of the DX, right? I never understood this until I had that conversation with Dan at the end of my signal article where he, he wanted developers to be able to just like.
[04:59:28] right to some temporary state in a for loop in the middle of a component.  And then when I talked about expanding on that, I was like,
[04:59:36] just freaking declare the state const const, like write it as derived. I still use that example to this day because it's supposed to be intentionally convoluted, but it's like,
[04:59:45] You just switch the thing around and it's just a billion times.  It's so funny. Both of us feel like we made our point.
[04:59:51] But, like...
[04:59:54] Oh.
[04:59:55] If you don't know what I'm talking about, I'm talking about...
[04:59:57] signals,
[05:00:00] 10 years later.
[05:00:04] conversation I had with
[05:00:06] Dan Abramoff in the comments here because I quoted him a bunch.  Unfortunately, he deleted all this stuff.  So I have a bunch of white spots.  Someone went in the in the chat and tried to add these missing tweets back.
[05:00:17] But
[05:00:19] Um.
[05:00:20] Yeah.
[05:00:22] He was talking about like,
[05:00:27] like count videos length let heading empty heading if count bigger to zero cons noun  verb videos or video heading plus count plus noun this isn't even the
[05:00:40] Yeah, okay, that's fine, but...
[05:00:42] Yeah, so then you--
[05:00:43] Wrap it in here.
[05:00:46] Okay, yeah.
[05:00:49] So we go through this whole thing where he's like, okay, but then you can wrap it in functions. And I was like, okay,
[05:00:56] When I responded to his thing, I was like,
[05:00:59] First of all, we could just take the...
[05:01:02] We could simplify the logic ladder and then it, where did I say, we could also just take all your React logic and just stick it in a memo. I'm not saying you should do that, but you could. Anything you do in a React component body, you can
[05:01:12] doing a pre-memo, but my final version
[05:01:16] Where is it?
[05:01:19] is
[05:01:21] Here's my final version.
[05:01:25] I thought...
[05:01:27] Maybe I wrote it in an edit. My final version that I wrote back to Dan, I was like,
[05:01:33] Yeah. Like,
[05:01:34] Why won't you just write it like this in React in the first place?
[05:01:39] Instead of
[05:01:40] having like
[05:01:42] Okay.
[05:01:42] This.
[05:01:45] like logic, why don't you just write it like this?  This isn't solid. It's solid. You just wrap these in functions, but like
[05:01:53] This is a billion times easier to read because you're just saying like you're basically saying this is a state and this is how it's derived.  There's none of this like.
[05:02:04] mutating variable garbage, you literally just write it as a set of three rules.
[05:02:12] And it's not always the right, easily the right code. Yes, it's duplication. Look, count is bigger than zero. It's duplicated here, but it's...
[05:02:20] Better, arguably,
[05:02:21] You could argue that, oh, what if this condition changes?  Well, then extract out that condition.
[05:02:26] I repeat it. Maybe this should just be like
[05:02:31] condition function or something. We could we could strike count zero out here and go
[05:02:36] const condition equals count bigger than zero and add an extra line. But my point is like,
[05:02:42] Writing it this way
[05:02:44] as like declarations, i.e. declarative, is always...
[05:02:49] better than whatever the hell is going on here.
[05:02:54] Imperative versus functional, right? But that's part of why, I mean, React's whole component rerun model is very much more imperative, right? People are like, "Oh, declarative framework." What makes React so genius is that they hide an imperative
[05:03:08] architecture with with like declarative syntax that's that's why it's genius it's not because  it's declarative there is already other declarative things everyone's like oh react makes it declarative
[05:03:21] knockout, Angular back then was declarative. It's that
[05:03:26] React does a really good job of hiding its imperativeness.
[05:03:33] There are devs that prefer for loops versus map. I mean, I prefer for loops versus map because it's more performant.
[05:03:39] Um,
[05:03:41] And for loops also suggest mutation.  Yeah, I mean, it depends on what it is.
[05:03:47] But you're right.
[05:03:48] This is...
[05:03:51] There...
[05:03:52] Yeah, I do hit this when there's a performance consideration.  Yeah, definitely.
[05:03:59] Okay.
[05:04:01] It's just, but you're right.  Logically, when you're writing your logic, yeah.
[05:04:05] Media work very well with imperative. It does because you know, you can throw it away. You can just write whatever you want, which is kind of coming back to what our point was. Right. Um,
[05:04:16] But going here,
[05:04:17] uh don't want to get page crash inserts to lead to cascade and failures in most  cases return corrupting press state is not that bad
[05:04:24] In reality, all software is a little buggy anyway.  So if there's not really a difference,  the amounts of bugginess goes up a little bit,  probably an unstated bias  for having product emergencies,  even if that pushes work onto software engineers.  I find this a little uncomfortable.  The SEP...
[05:04:36] position feels closer to the truth.
[05:04:38] even though my values align more with the SWE position. Right. So
[05:04:43] He's saying that like
[05:04:48] The ops people are probably more right.
[05:04:52] because being pragmatic i mean he's a ceo of a company he has to be pragmatic
[05:04:58] Um,
[05:05:01] E...
[05:05:03] Even though like personally, he's clearly has an engineering background.  He feels like his values align more with engineers.  So yeah.
[05:05:11] Yeah, I love this.
[05:05:13] Thank you.
[05:05:17] Thank you.
[05:05:19] Thank you.
[05:05:20] Yeah, I mean, people are arguing the details and it doesn't actually matter.
[05:05:26] Though it's technically possible to separate grays of the aggregation for incorrect results,
[05:05:29] In a software engineer brain, it's not because that graceful degradation could be an imp
[05:05:33] B.
[05:05:34] would have to be implemented with code and every line of code is a risk. Yes. Yeah, yeah, yes.
[05:05:41] I think this is a very interesting...
[05:05:46] challenge, right? I feel like
[05:05:49] And this idealism versus reality, I feel like the higher up you are in the chain,
[05:05:55] the more likely you're going to be on this idealist side.  It's more likely that a framework
[05:06:01] author will want things to crash early.
[05:06:04] But.
[05:06:06] So you could argue that one of the biggest benefits of the React team working so closely with Meta was that they kind of have to get pulled out of that bubble a little bit.
[05:06:15] There is a reality to it.
[05:06:18] It's hard though, because you know, like,
[05:06:20] When you're on the product side and you have customers, you have to learn to say no, right?
[05:06:25] Like it's a,  it's a push and pull.  Right.  So like,
[05:06:32] Thank you.
[05:06:33] It's interesting.
[05:06:39] Right. Do we create tools...
[05:06:42] in a more general sense, or do you cater to software engineers? I never thought about my work that way, but I definitely cater to software engineers.
[05:06:51] Thank you.
[05:06:53] Um...
[05:06:56] Okay.
[05:06:57] Thank you.
[05:06:57] Ryan Florent's performance arc.
[05:07:04] Yeah, we talked all about the impf mode.
[05:07:08] Okay.
[05:07:10] It's time to stop using RSCs and put your fetch call back in use effect.
[05:07:15] God, David cracks me up sometimes, where you can DDoS your servers because of a missing dependency fault logic instead of worrying about RSC exploits.  Oh man, this is the whole damned if you do.
[05:07:25] Damn it, if you don't think...
[05:07:26] I...
[05:07:28] Someone probably was like, use TAN stack query.
[05:07:33] But most of those problems are self-imposed.
[05:07:36] This is just responding, obviously, to their security exploits.
[05:07:40] I do have something to say about this, even though this is the only thing that I actually highlighted on this topic.
[05:07:46] I think that
[05:07:49] Thank you.
[05:07:51] Okay.
[05:07:53] actually i want to quickly check one thing i want to make sure that i
[05:07:58] that I don't actually have any new posts on here that I haven't covered. And I don't think I do. I think everything that I've covered since
[05:08:04] Here is we talked about on stream. Yeah. Okay.
[05:08:09] Except for that. I'll leave that for last. Okay, cool. It was bound to happen. I mean,  there's been other ones that have happened in the past.
[05:08:22] I think if people looked
[05:08:24] more closely at most of their front end
[05:08:28] frameworks, they probably would be able to find security stuff.  We always try and patch it right away and stuff, but like
[05:08:35] I think
[05:08:36] I think it requires a certain amount of usage and a certain amount of, like before people actually spend the time.
[05:08:42] I...
[05:08:43] The stuff getting found in React,
[05:08:48] Probably in...
[05:08:49] Maybe not the same thing, but probably similar things could affect other projects. I think we all can learn from this. I think
[05:08:55] React being the popular project is going to be one that where you get all the kind of pushback and stuff because like they should have known and millions of people use it and all this kind of stuff, obviously. But
[05:09:04] Like, on the other hand,
[05:09:06] Um,
[05:09:12] I think this is more of an opportunity than anything.  I think it's really interesting.  I think the fact that we can use like,
[05:09:19] AI to look at these things and try and like, I think there's just a lot of applications of being able to improve security now when we have better tools to kind of look at how these exploits happen.
[05:09:32] It was pretty bad exploit to be fair.  The fact that they can do remote code execution, right?  It's basically the payload that they communicate back  to the server.
[05:09:43] was able to remotely
[05:09:45] Right.
[05:09:46] run code on that server.
[05:09:48] Which is...
[05:09:49] Yeah, honestly, about as bad as things can get.
[05:09:52] So you were like, how did that ever slip by for sure?
[05:09:55] But like
[05:09:57] After they patched that, they found two other subsequent
[05:10:01] Um, issues.
[05:10:04] These are, you know,
[05:10:06] Thank you.
[05:10:07] Thank you.
[05:10:08] This is all part of...
[05:10:09] higher usage and maturing and everyone kind of benefits from this.  Obviously the people who were hit this exploit, um, are not as happy about this  as I am that we're actually learning from this.
[05:10:22] Thank you.
[05:10:24] Thank you.
[05:10:25] Thank you.
[05:10:27] Thank you.
[05:10:27] Security and security. Not that I'm aware of. The thing is, the biggest difference, like,
[05:10:39] Our payload to the server is...
[05:10:42] is a little bit
[05:10:44] different. We're not sending as much kind of stuff. We don't have the full serialization thing like the way react does, but
[05:10:51] I don't know. There's probably some kind of
[05:10:54] I mean,
[05:10:56] I'm guessing that's what people start testing next time.
[05:11:00] I we actually after this
[05:11:04] We actually assigned some people on the team to go preemptively look at our security. We determined that the same kind of exploit wasn't possible, but we were able to do that.
[05:11:14] Um...
[05:11:16] There's still...
[05:11:17] It's still an ongoing thing, but to my knowledge, it's because this had more to do with the ways server code, um,
[05:11:24] The way we do the server function stuff,
[05:11:29] where we kind of have this like live executing code.
[05:11:32] like through the serialization, that only in SolidStar's case is the way that it works from going from server to client, not from client to server.  So the same kind of...
[05:11:42] If your server was trying to maliciously run code on...
[05:11:48] someone's browser, it would be possible, but
[05:11:51] I mean,
[05:11:52] eat.
[05:11:54] You kind of get what I'm getting at like, um,
[05:11:59] The.
[05:11:59] That would have to be an exploit some other way where someone
[05:12:03] change the response from the server that should be a trusted source. So it's like,
[05:12:09] that's, it's not the same sort of thing. The exploit would have to come in from somewhere else.
[05:12:14] So like...
[05:12:16] there's a slight difference in the way that we're using it.  Because we're not using, as I said, we're not using Sarah Bell's...
[05:12:24] The way we serialize from the server is not the way we serialize to the client or to the server, from the server to the server.  So yes, we're currently doing an audit on stuff.  This particular issue, not an issue, but obviously we...
[05:12:38] the way that it spun off multiple other issues,  we're definitely looking into it.
[05:12:47] Thank you.
[05:12:48] This has happened many times in many lines when you shift from sending data info over the wire to sending objects behavior instructions. JS is particularly vulnerable due to oddities.
[05:12:56] Yeah.
[05:12:57] prototype.
[05:12:58] Prototype injector. Yeah.
[05:13:02] Amen.
[05:13:03] Thank you.
[05:13:06] Thank you.
[05:13:11] Thank you.
[05:13:12] Your server already gets to run arbitrary code in the browser by setting JS so that direction isn't quite as fatty.
[05:13:21] But yeah, I mean, we're, as I said, we're in the process of doing auditing because of  what happened here. So if we turn anything up, we will definitely
[05:13:33] uh,
[05:13:34] Get that fixed and let everyone know.
[05:13:38] - Yeah.
[05:13:40] I...
[05:13:41] Mm-hmm. Mm-hmm. Mm-hmm.
[05:13:46] Thank you.
[05:13:47] Thank you.
[05:13:48] Thank you.
[05:13:50] Thank you.
[05:13:53] Thank you.
[05:13:55] Thank you.
[05:13:56] Thank you.
[05:13:57] Thank you.
[05:14:00] What is this? The idea that arbitrary object constructor allows you to evaluate a string  as JS is indeed bonkers. Yeah, I mean...
[05:14:12] I know this is a weird take, but I do think that...
[05:14:19] The ecosystem in general...
[05:14:22] needs to get stronger on this side.
[05:14:26] I know ourselves, if you guys remember about a year ago, we actually had three critical, not like 10 out of 10, but three critical vulnerabilities that we fixed in solid.
[05:14:40] which had to do with injection through SSRs and USL.
[05:14:45] I...
[05:14:47] Yeah.
[05:14:47] I mean, this is just something that things tend to get more surfaced when projects get used more.  So...
[05:14:55] I think there's a road ahead for everyone. Um,
[05:15:03] As I said, I think one of the biggest benefits, I think AI is going to help a lot in terms of analyzing these kind of things.
[05:15:17] um i i think we're okay right now uh alexis is involved in and if and when we have a small team  a few others uh
[05:15:26] I...
[05:15:27] who
[05:15:28] I...
[05:15:29] I'll get back to you, Fuzzy. I'll let you know. Um...
[05:15:32] I, I, I, I,
[05:15:34] I'll let you know when I know more.
[05:15:38] Thank you.
[05:15:39] Thank you.
[05:15:43] Anyway.
[05:15:46] React's had a hard year between crashes and, uh...
[05:15:50] and security stuff, you know,
[05:15:53] I just
[05:15:54] Being all is fair.  I,
[05:15:58] I don't know if we can blame React for all this.  I mean, part of it is I do think...
[05:16:02] At React scale, you'd hope you wouldn't hit this kind of thing, but...
[05:16:08] Thank you.
[05:16:10] This fort was found by  Rees of Right. It's weird because the only app in the fort was  published people got hit with it. Yes, pretty much.  This is the...
[05:16:18] This is, I think, one of the more interesting things is...
[05:16:21] I think
[05:16:23] - I think you have to.
[05:16:27] disclose because it's important that people update and they know they need to update. But often more damage happens after the disclosure than the original vulnerability. So like, it's almost better to like,
[05:16:40] fix it and then like have it if you don't think like it's leaking, you know,
[05:16:45] have it actually propagate out before people actually.  Yeah, this is a really hard catch 22.  And I think something we're going to have to
[05:16:52] like
[05:16:53] people figure out in the future.
[05:16:56] Thank you.
[05:16:57] It's not just hard because it looks bad.  It actually...
[05:17:00] causes more problems often.
[05:17:03] It's...
[05:17:06] it.
[05:17:07] Like...
[05:17:08] It's- ideally you could just-
[05:17:10] get the message to the good players and not the bad players, you know, here. But the reality is,
[05:17:17] It's more likely that there's lurkers waiting to exploit
[05:17:21] you know, and move on it right away, then people are going to update their projects.
[05:17:29] It's very hard to patch release in open source line and know seeing that you fixed and exploit.
[05:17:33] what you fixed and exploiting it.  Yeah, I mean, that's...
[05:17:36] That's true too.
[05:17:39] give them candy  you can't
[05:17:44] That's the problem, you don't.
[05:17:47] So I think
[05:17:50] Yeah.
[05:17:51] Yeah, it's a catch-22 because as you said, if you open source, you fix something, you send it out,
[05:17:58] Someone is going to notice that
[05:18:00] And you're right, it's even more likely that those bad...
[05:18:04] players, you know, will notice before the people who, you know, are good ground because they're
[05:18:11] looking to exploit it. So
[05:18:14] Yeah.
[05:18:15] Thank you.
[05:18:18] Thank you.
[05:18:19] Thank you.
[05:18:20] Thank you.
[05:18:21] Thank you.
[05:18:22] Thank you.
[05:18:25] Thank you.
[05:18:27] Thank you.
[05:18:35] Thank you.
[05:18:37] Thank you.
[05:18:39] Thank you.
[05:18:41] Sorry, it's just some noise.  I've got Discord in the background.  It's like...
[05:18:47] I ended up
[05:18:48] ringing in my ears.
[05:18:51] Thank you.
[05:18:53] I thought streamer mode automatically turned that off. Anyway.
[05:18:56] Uh...
[05:18:58] What?
[05:19:00] while the best part of the year and the number of reporters are very low since the factors load those new one those using it. Anyway, I think this is one of those things where
[05:19:12] Thank you.
[05:19:14] Yeah, I don't know.
[05:19:18] It has a ripple effect, and I think in the end, we'll all be better for it.
[05:19:24] Um...
[05:19:28] We talked about this.
[05:19:32] Yeah, okay, so Ryan Florence's performance
[05:19:37] Thank you.
[05:19:37] Arc. It's funny that the order of this is out of order.
[05:19:44] A weird thing happened when Redux took off.
[05:19:46] Thank you.
[05:19:47] Everybody started freaking out about re-renders and we haven't stopped since. Now we've got signals, fine-grained reactivity, react file, react scan. I think the VDOM is enough.
[05:19:55] Clean up network waterfalls render less better design.
[05:19:58] Cool. Keep it simple.
[05:20:02] Thank you.
[05:20:05] Thank you.
[05:20:06] Thank you.
[05:20:07] Reactivity was a mistake in my opinion. There are some obvious reactive services, but in most cases you're already turning changes somewhere. Calling a method to re-render when you
[05:20:15] No, you need to just make life easier for everyone.
[05:20:18] It's...
[05:20:20] Oh, man.
[05:20:22] I don't even know if I want to talk about it. There's a bunch of fanboys that really like this update and remix.
[05:20:31] It's like a...
[05:20:32] It's like a red herring.
[05:20:35] It actually doesn't make anything simpler.
[05:20:39] exposes more service area for you to screw things up.
[05:20:43] Um,
[05:20:51] Thank you.
[05:20:53] Thank you.
[05:21:03] Thank you.
[05:21:10] Sorry in a second.
[05:21:18] Thank you.
[05:21:22] Just sorry two seconds
[05:21:23] Okay.
[05:21:24] Thank you.
[05:21:26] Thank you.
[05:21:27] Thank you.
[05:21:31] All right.
[05:21:36] Yeah, sorry. Uh...
[05:21:39] Bye.
[05:21:41] The funny thing about this,
[05:21:43] Thank you.
[05:21:49] It's just an interesting...
[05:21:53] Take he...
[05:21:55] He said that
[05:21:57] I think in a Neverlord post, Ryan blames himself.
[05:22:01] for part of this with context, he basically said that context was the problem, right?
[05:22:05] Do I have that tweet somewhere? I have to look at this.
[05:22:10] Thank you.
[05:22:13] Thank you.
[05:22:14] Thank you.
[05:22:15] Thank you.
[05:22:16] Sorry, I didn't bookmark the one I wanted to.
[05:22:20] Thank you.
[05:22:23] Okay.
[05:22:24] Thank you.
[05:22:27] uh
[05:22:32] Oh yeah, this one. I should have bookmarked this one.
[05:22:36] I have a hunch. Please pardon my threading. React V DOM became a bottleneck for one reason: global context. And guilty parties are Redux and me.
[05:22:42] When Redux got popular, suddenly React router state updates weren't making it through the
[05:22:47] tree down to the link.
[05:22:54] They stopped knowing they were active or not. Why? Because Redux Connect blocked context updates.
[05:23:00] Redux knew if all state lived in a global store, every action would cause too much scripting by rec-calling the entire VDOM tree.  So, connect did two things: connected the component to the store and memorized the component so it wouldn't update if the props didn't change.  Problem was that React Router state didn't live in the Redux store, it lived in a parent component.  When React Router said this set state location, the rec-cow bailed on every Redux connected tree and didn't get the update.  Thinking this through, we created a funny library called React Broadcast with similar looking API, consumers subscribe to providers, blah, blah, blah.
[05:23:27] All right.
[05:23:27] Easy to see the value, hard to see the cost.  Can't link because the account got deleted.  Soon after, React adapted to the wrapper.  Cast API directly into React itself.  Sebastian's right, all hell broke loose.
[05:23:37] The problem isn't that there's a dozen global providers. The problem is that to update a provider's value for consumers to read requires reconciliation of the provider value. Sometimes consumers don't even render the value either.
[05:23:48] And that brings me to the React3 context API. Context files you just variable sign in the component's internal function scope. They don't require update to be set.
[05:23:57] With this tweak, you can update a group context without triggering reconciliation. You localize component update by putting an event targeted, blah, blah, blah, blah, blah, inside Git provider at event listener, blah, blah, blah.
[05:24:11] I've been targeting the part of the platform, the updates are localized, blow it block.
[05:24:15] Thank you.
[05:24:16] And...
[05:24:18] He's right, to a degree. But...
[05:24:21] Thank you.
[05:24:22] Thank you.
[05:24:23] I think...
[05:24:24] I come to a different conclusion from reading all of this.
[05:24:30] Thank you.
[05:24:34] I love the...
[05:24:39] the trail of context providers, but
[05:24:43] Like,
[05:24:45] We can blame bad context use, but as long as state
[05:24:48] update equals component update, we hit this, right?  So he's saying state update doesn't equal component update,  because he's just setting a value  and then he's calling update himself.  But that's because his components don't re-render essentially.
[05:25:00] Only the views do.
[05:25:03] Mm-hmm.
[05:25:04] And he's saying like,
[05:25:05] The thing is, when he does call this update, it's still going to be wherever the this is.
[05:25:10] So,
[05:25:14] Thank you.
[05:25:15] Like
[05:25:16] There is still this kind of like he's not firing it like a billion times.
[05:25:22] or more importantly, he's not overriding someone else's work.  This is the problem with memorization of trees.
[05:25:29] All it takes is one change for the whole memoization tree to get thrown away.
[05:25:36] Thank you.
[05:25:37] So any use case where the runtime reactivity adds up in the manual approach pays off?
[05:25:44] Generally speaking, definitely.
[05:25:46] Manual is always going to be
[05:25:48] faster if done efficiently.
[05:25:51] And so it's always possible that
[05:25:55] You know, the overhead of even tracking the reactivity is an overhead.
[05:25:59] The challenge here, though, is
[05:26:03] Um...
[05:26:06] I'm not.
[05:26:09] you have to know exactly what to change here and when you're starting talking  about data that gets distributed through a tree
[05:26:15] He's not talking about doing things smartly. He's talking about just like deferring, re-rendering everything.
[05:26:20] Do you know what I mean? Like,
[05:26:26] The problem with the memorization approach is that, as I said, one piece
[05:26:30] hire needs to rerun or one thing invalidates or one thing like
[05:26:34] above decides to recreate the whole thing below and you lose it.
[05:26:38] And
[05:26:40] So what did I say here?
[05:26:48] We can blame bad context use, but as long as we hit this, the inability for these to be innately  decoupled is the issue. Now obviously we could be smart about not trampling each other, maybe  schedule better, but this needs to go from somewhere above to somewhere below.
[05:26:59] And if the only path through is rewriting components, you'll be picking up extra work.  Memorization can cut off the untaken path, but it can't do anything about the path you have to travel.
[05:27:07] Yeah, that's what I was trying to say here, is that like,
[05:27:11] Even if
[05:27:12] This is kind of like
[05:27:14] a common thread that I'm seeing with
[05:27:16] a lot of the remix kind of stuff is
[05:27:20] They understand the problem.
[05:27:22] Right.
[05:27:23] They see it. They can see the symptoms of the problem.
[05:27:25] So they go, okay.
[05:27:27] This is running too many times.
[05:27:29] This invalidates this.
[05:27:31] So they're like, if we take the control ourselves and not do the dumb thing,
[05:27:35] then we'll be better off.
[05:27:38] But the thinking is still the same thinking that led React to where it is today.
[05:27:43] So it's like,
[05:27:44] you're not actually
[05:27:46] you're pushing back
[05:27:49] The...
[05:27:50] you're pushing back, hitting the symptoms, but you're not fixing the problem.
[05:27:54] It's like,
[05:27:55] It's like...
[05:27:57] Getting rid of use effect, but then still writing to state everywhere.
[05:28:01] instead of driving.
[05:28:03] You...
[05:28:04] You get rid of the performance problem because you're not triggering a bunch of separate updates.
[05:28:09] But, and to be fair in React it's batched usually, but you're not actually
[05:28:15] solving the problem why the logic is so disoriented and why you can't actually make sense of what's  happening and why it feels like it's coming from all over the place.  Like the same reason that you don't know why your component's re-rendering 10 times,
[05:28:26] Thank you.
[05:28:27] Sure, now you're not re-rendering 10 times?
[05:28:30] but you still don't understand your component any better.
[05:28:35] Athleanse is how you can use a web program without considering global state in the first place.
[05:28:39] I'm sorry.
[05:28:41] Bear?
[05:28:43] Thank you.
[05:28:45] If do is yes.
[05:28:47] I mean, this is why you choose reactivity systems, not because they're more performant, because it makes it
[05:28:52] easier to manage
[05:28:55] Consistency.
[05:28:57] There is a point here where the perform for the move to high end hardware is better now than say in 2015 and we can always yearn for simplicity. Yeah, yeah, yeah. So this is the counter argument, right? Like you can just be like, look, the baseline has changed. The assumption has changed. Good enough is better than it ever was. And it's true. Remember that circles demo I showed earlier where every framework, even backbone, is the same? Backbone was not...
[05:29:18] I mean, it was faster than Ember or whatever, but it was not fast. But that circles demo now, they're all the same.
[05:29:26] whether you're using backbone or you're using...
[05:29:28] Um...
[05:29:30] Vanilla JS. It's like
[05:29:32] Each loop is
[05:29:33] the tiniest bit. Now, obviously I'm not drawing enough circles, so if I draw more circles, but
[05:29:39] I think it's important to re-ask these questions often because of this reason.  Because even if nothing's changed, things change.
[05:29:47] So we have to most often innovation comes from
[05:29:51] recognizing a simplification somewhere, and then going, okay, well, now that we can change our assumptions, we can go slightly different direction, and then unlock a whole bunch of stuff.
[05:30:00] I am.
[05:30:00] all for that. As I said in the past, I think a different stream, I said, you know, there's the classic, you know, step
[05:30:05] one step backwards, two steps forwards.  So you step back and then pivot, and then you do this.  The Remix guys are the best step backwards,
[05:30:14] Like one of the best step backwards
[05:30:16] group in in this industry i always look to them when they when they go when they like realize
[05:30:23] that an assumption can be changed.
[05:30:28] I think that kind of thinking is really necessary.
[05:30:32] Um,
[05:30:34] I don't know if they're always the best step forward people.
[05:30:37] But that's fine. I'm biased. I feel like I'm a very good step forward person.
[05:30:41] But...
[05:30:42] I would be biased.
[05:30:45] Alistair is always there to point the lower end to have not kept up at all  Yeah
[05:30:48] So,
[05:30:49] Yeah.
[05:30:50] That's fair.
[05:30:54] But it is...
[05:30:56] It is...
[05:30:59] There's something here. This is kind of the common thread that I'm seeing a lot. It's like
[05:31:05] Bye.
[05:31:08] A lot of the same stuff that inspires Remix is what inspired my work in Solid, and continues to, so...
[05:31:13] It's just like,
[05:31:20] Yeah.
[05:31:21] It's interesting.
[05:31:24] Thank you.
[05:31:26] I do think, though, that like,
[05:31:30] this isn't their fault. I think this is inherent. Like I, I,
[05:31:34] What ends up happening in a system like this conceptually is...
[05:31:40] you eventually end up calling
[05:31:42] this.update yourself.
[05:31:44] Too much.
[05:31:46] because you start overcompensating for like, oh, why did this thing not update that time?  Oh, let's put this not update here.
[05:31:53] So like
[05:31:55] The React problem ends up coming back. It just comes back slower. And in this case, it's kind of your own fault.
[05:32:03] Because you're the one who did it.  But you didn't have to add the this.update.
[05:32:09] I'm feeling that I talked about later non-terrain kinesiology opt-in without much co-oping
[05:32:15] Thank you.
[05:32:16] Okay.
[05:32:21] I'll take a look at that later.
[05:32:27] Yeah, I mean, when I talk about opt-in,
[05:32:32] of this stuff. It's most
[05:32:34] it's,
[05:32:37] I don't want modes.
[05:32:40] I'll have to look later to see what you're talking about, but like, I don't want modes I want.
[05:32:43] Um,
[05:32:45] It's the wrappers at the API service I'm trying to avoid.
[05:32:53] In 2026 is going to change about web components.
[05:33:03] No, no. See, the thing that you have to consider is sometimes, like, performance. Like,
[05:33:08] For example,
[05:33:10] If Web Component
[05:33:12] performance got
[05:33:13] significantly better.
[05:33:15] to the point that it was almost
[05:33:17] Nothing over vanilla JS like over like just plain like doing it like they were basically invisible from a performance standpoint.
[05:33:24] standpoint. They're not today, but let's pretend they were. Would that change my opinion that they're the wrong abstraction?
[05:33:29] No.
[05:33:30] So yeah, I actually don't think that changes anything.
[05:33:36] Right. Usually it's the capability of the hardware, something fundamental, something that changes the performance.  I often...
[05:33:43] When I talk about performance, usually it's about like budget.  It's not about like necessarily being the absolute fastest.  It's sometimes performance can make good enough
[05:33:51] Good enough.
[05:33:52] Right?
[05:33:53] Um...
[05:33:54] Which is which makes react generally like
[05:33:57] a good bet, right?  Because they're kings of good enough.  And in theory, over time,  the universe will be good enough  that they're good enough, you know,  continues to be good enough.  Even better than good enough.
[05:34:11] Perhaps. But...
[05:34:14] You know, I'm not necessarily satisfied with that.  But his conclusion, Ryan is satisfied with that.  He's just like, if we fix a couple things, right?  Like, this...
[05:34:25] Which is fine, because to him this is still the simplest model. It's not surprising that
[05:34:30] That this is the conclusion he'd come to right he's like this is the simplest model if I can just get rid of the slow piece and
[05:34:37] then I can continue with my model and it'll be good enough.
[05:34:40] That's the conclusion. And that's fair. Where I'm arguing,
[05:34:43] you know,
[05:34:45] Sorry, I have to go back to--
[05:34:49] uh...
[05:34:53] Thank you.
[05:34:55] Where do my bookmarks go? I was in my bookmarks on this tab, I think.
[05:34:59] Um,
[05:35:00] Thank you.
[05:35:01] Thank you.
[05:35:01] Thank you.
[05:35:03] Thank you.
[05:35:03] Where I was basically going like...
[05:35:06] This one. He's saying, "I think the VDOM is enough." That's its conclusion. I was like, "It's not your fault. The architecture is slow."
[05:35:17] good enough versus not good enough.
[05:35:23] Thank you.
[05:35:25] Thank you.
[05:35:26] Anyway, uh, but yeah, okay, let's talk a little bit more about this. A new abort controller is kind of expensive.
[05:35:32] I'm glad he's testing it.
[05:35:33] People are going to give them a snark about this.  Use the platform, let's do the term cost, then use the framework.  I mean,
[05:35:39] I feel like
[05:35:42] This is a real, this is, this is, this is a very framework author,
[05:35:46] thing to write.
[05:35:47] Because this is the reality. You don't think every framework author would want to use the platform as much as possible. Although the platform changes, right? So we make assumptions based on what was available at the time. As new stuff comes, we can't always keep up with it, so maybe we'll change it. So Ryan's coming as, say, the newest framework author. So he's seeing new tools that we didn't have available when we made our assumptions. But the truth is, sometimes these things,
[05:36:10] are not fast.
[05:36:11] And.
[05:36:12] or the abstractions, not quite right. And we just, instead of waiting 10 years for it to change in the standard, we just do our own thing.
[05:36:19] We're still using the platform under the hood, but just not using that particular feature. And I think
[05:36:23] I think that's a very important thing.
[05:36:25] So
[05:36:26] you know,
[05:36:27] Years later, someone will be like,
[05:36:30] "Oh, why didn't you complain to us loud enough? We could have fixed it. It was just a performance progression."  It's like, how the hell are you supposed to know that a board controller is supposed to be slower or fast? Like, what's kind of expensive?
[05:36:39] What?
[05:36:40] I'm talking specifically about an issue that came up around clone nodes versus...
[05:36:48] uh,
[05:36:49] import node or whatever, you know, like, because you have to use a different one with web components versus normal DOM nodes and extra.
[05:36:58] one was way more expensive.
[05:37:01] Apparently there was a bug.
[05:37:02] We didn't know that. We just spent almost a decade working around it.
[05:37:08] So like
[05:37:11] I don't know. I...
[05:37:13] Thank you.
[05:37:16] Yes, that's a few notes.
[05:37:21] That's a decent amount.
[05:37:27] Do you know why I don't? Also, you should get better at time right? The platform constantly gets faster.
[05:37:33] I love how these things are all on point.
[05:37:41] Thank you.
[05:37:43] Thank you.
[05:37:44] Anyway, it's just interesting. I'm glad that he's testing these things. That's the important thing. He's actually made his own kind of fork of something very similar.
[05:37:53] To uh
[05:37:54] like these are the categories from the JS framework benchmark, if you noticed,  and he's kind of testing all the frameworks in here.
[05:38:05] Thank you.
[05:38:11] So I've been really enjoying following along.
[05:38:16] One thing that I thought was interesting about this is
[05:38:18] He's basically showing...
[05:38:21] where PREACT signals
[05:38:23] has certain overhead versus not. This is just the JS framework benchmark again. I guess it's a little bit different.
[05:38:29] Uh,
[05:38:30] but it has the performance characteristics are the same.  As I mentioned, every JS frame, every benchmark is kind of the same.  And I think
[05:38:39] Even if you modify it, you end up seeing consistent results usually because there's only a certain type of benchmarks.
[05:38:48] good enough, good enough-ish enough.
[05:38:51] Well, the problem is there's two different things.
[05:38:53] The good enough argument is like,
[05:38:55] The Theo argument. He makes this all the time. He's like things are only getting better. So react will be the king forever and
[05:39:01] Because if it's good enough today, it'll be more than good enough tomorrow.
[05:39:06] I am...
[05:39:07] more optimistic than that.
[05:39:09] I think people's expectations of what they get will continue to
[05:39:12] grow and whenever the baseline we get closer to the baseline
[05:39:19] we realize that we can achieve more and we get more ambitious.  So I think this is moving goalposts. I don't think good enough stays good enough.
[05:39:27] even if
[05:39:28] the base moves up to meet.
[05:39:31] There's always something better.  And the thing that,
[05:39:34] If it doesn't change, the tool used in the middle does actually end up sliding down over time if it doesn't update.
[05:39:39] I, I, that's my belief.  Even if the hardware comes to meet it, they, that hardware coming to meet it also raises  the ceiling on expectation.
[05:39:48] This constantly happens over and over again.
[05:39:51] Good enough.
[05:39:52] rarely remains good enough, even if
[05:39:56] It's better than it was before.
[05:39:58] You know, like...
[05:40:00] Like even if
[05:40:03] the good, like the good enough has improved.
[05:40:10] Um.
[05:40:16] It's funny.  There's more Ryan Florence.  He just kept on going.
[05:40:23] Oh, I did bookmark that one.  There is one more that he did.
[05:40:27] I think somewhere in his chain of crazy benchmarking, he called us out.
[05:40:33] Because you've added SolidJS to it, and it's like
[05:40:35] one at every single one of the benchmarks he did.
[05:40:39] It's not surprising though, so there's probably not much to say about that.
[05:40:43] Um...
[05:40:45] Yeah, I think that's fine.
[05:40:47] Okay.
[05:40:48] I think...
[05:40:50] I think I'm pretty much done here.
[05:40:55] Um...
[05:40:56] Thank you.
[05:40:57] I've got one more story here.
[05:40:59] And it's related to what I was doing the time slicing.  I want to thank Replay.io.  I don't know if you guys remember this company,
[05:41:04] It's ironically the one that...
[05:41:07] Mark Erickson Redux guy also works for.  Um,
[05:41:12] who was on the stream earlier talking about stuff through the chat. But they have a
[05:41:20] AI Gen product, but they're
[05:41:22] original product was this time travel debugger.
[05:41:24] Honestly, this is the best thing ever.  I almost feel like I want to look at it a bit on stream at some point to show how I fix issues.  But you literally can record the browser and replay every browser event.
[05:41:36] That was the only way I fixed that time slicing demo.  There was a weird thing where it was sticking on a couple numbers because of  like some timing thing and I was missing setting modified on effects under some
[05:41:45] -
[05:41:46] I would have never found it because it was so hard to reproduce.  And if you tried to put a break point, it would break before you could reproduce it.
[05:41:54] instead of record it walk forward and backwards until i could find exactly what was missing and then
[05:42:00] Eureka moment. Honestly
[05:42:03] This is the best
[05:42:05] The best.
[05:42:06] thing ever for hard debugging.
[05:42:10] They don't talk about it much in here.
[05:42:13] Um...
[05:42:15] Thank you.
[05:42:16] I think you, yeah, replayed it.  Basically what ends up happening is,  you can install it in the terminal.
[05:42:24] And then you can just tell it to open a browser window and record it.  And then when it's done, you close the window, close everything.  It's like a separate isolated Chrome browser window.  You can then open the replay.  Actually, you know what?
[05:42:36] Let's see if I can...
[05:42:39] I'll show you guys a replay right now.
[05:42:41] I can actually show you the replay that
[05:42:43] Fix the bug.
[05:42:45] Thank you.
[05:42:46] Really quick.
[05:42:48] Sirupinski
[05:42:50] Bye.
[05:42:52] Okay.
[05:42:53] I just want to show this because it's so freaking cool.
[05:43:01] Thank you.
[05:43:02] Okay. Actually, quick question, a little off topic. Is it you work on Solid2R as a team effort?  Different people that work in different parts. The actual putting it together...
[05:43:13] is mostly me.  A lot of people help me test, which is important.  Even some people not on the core team, actually.  People in chat here are actually testing my demos  and poking holes in it.  But the core reactivity, R3, Milo,
[05:43:29] been building.
[05:43:31] The
[05:43:34] But yeah, when it's coming to most of the trying to put it all together,
[05:43:39] Dev was making demos and examples and testing features.  A few other people in the chat, like, I don't know,  actually username, Kevin.
[05:43:48] People have been helping a lot and actively in the discussion, but yes, for the most part, um,
[05:43:55] Doing the release and stuff has been mostly...
[05:43:57] me on my own. We have
[05:43:59] other people working on other parts of the ecosystem, like docs people.  There's already been a beginning of a little bit of a docs effort. Um,
[05:44:07] Uh,
[05:44:08] It's a testing against...
[05:44:09] AI and testing like that. There's people using it to do stuff, but the core development is
[05:44:16] been mostly myself and Milo, um,
[05:44:19] So far.
[05:44:20] uh
[05:44:21] Because most of it's been the signals work, to be fair.  Tito also, sorry, I should mention Tito.  He's been doing all the updates to DOM expressions,  aligning stuff with the new standards, types.  Yeah, so actually he's done a huge amount of stuff.
[05:44:35] on the JSX compiler as well.  But each person's kind of like in their lane,  when it's the actual core signals library,
[05:44:43] Milo and myself, CoreSolid packaged myself, and then Tito did all the JSX compiler stuff.
[05:44:50] Um, primarily. So I'd say, yeah, mainly three of us.
[05:44:54] Um,
[05:44:56] We've had other people working at different points on the implementation, but yeah, I'd say mainly the three of us.
[05:45:07] web fragments because it'll make it easy to migrate. Yeah.
[05:45:12] Yeah, for, like, Enterprise, I think that's the way...
[05:45:14] But we also have to be able to provide a good enough solution that's worth migrating to.  Okay, cool. Do you want to see this out? Check it out. DevTools?
[05:45:21] Bam.
[05:45:22] Now, this is
[05:45:24] crazy because this replay
[05:45:27] is nuts because like it's gonna take forever to load because
[05:45:31] there's like thousands of nodes here, like in lines that are running a quick succession over 10,000 times. So,
[05:45:39] What was really kind of cool about this is
[05:45:42] You.
[05:45:43] You just you can go in
[05:45:47] Oh, it's funny. It remembers my breakpoints.
[05:45:49] But see, too many times
[05:45:53] over 2,400 times. So what I ended up doing is setting a window
[05:45:58] Here you can actually move the window to a certain
[05:46:02] point in time, but even this window is too big.
[05:46:09] The... okay. Before this I'm going to show you the bug. We're going to look at the viewer here  and we're just going to play and I'll show you the bug.
[05:46:20] So I move the mouse over, I highlight the one, and then when I move away, the one stays there while the two
[05:46:25] Is there a seat?
[05:46:26] See how it's one and all the other ones are two?
[05:46:30] This was the but. It's like, how the hell do you isolate
[05:46:34] that bug, like why this one stayed one.
[05:46:37] Right.
[05:46:39] Thank you.
[05:46:40] So,
[05:46:42] I'm trying to remember, I'm not going to go through the whole thing of how I found the exact...
[05:46:47] moment but I basically focused in
[05:46:51] to that moment in time
[05:46:55] Essentially, let's crunch this. We don't need any of this.
[05:47:00] where it went from one
[05:47:03] To two.
[05:47:04] Somewhere around here.
[05:47:07] It's funny because this is so...
[05:47:11] *laughs*
[05:47:12] I'm we're really making it work here.
[05:47:16] Thank you.
[05:47:18] Um...
[05:47:22] See if I can move this back to here because you can scrub it backwards.
[05:47:31] Let's see if I can grab it even further. Because there's just so many events happening.
[05:47:38] Over this.
[05:47:39] Time.
[05:47:40] But I was able to get to a point
[05:47:43] in the schedule here.
[05:47:45] Yes, now runs only 24.
[05:47:48] four times
[05:47:51] Is it not showing up?  Yeah, here we go.
[05:47:53] you can actually move forward to each time the function
[05:47:58] runs this chunk of code, like hits this thing, you can, or you can go back to it, go into it.  And then when you're in here, you can literally like go, okay, let's step out.
[05:48:09] Oh, let's step back in again.
[05:48:11] Tip over this.
[05:48:13] Do, do, do, do.
[05:48:15] Oh,
[05:48:16] Okay, I'm reading this. Oh, wait.
[05:48:19] Let's go back.
[05:48:21] You can actually walk forward and backwards through the code and at any point,
[05:48:26] Like, look at what...
[05:48:28] Okay, C is null in this case. What's L?
[05:48:32] So like...
[05:48:35] I was able to find...
[05:48:38] essentially that we weren't that we
[05:48:41] I was in a loop, let me see if I can find it. It's in Flash.
[05:48:50] I was what I ended up finding is that I was inside
[05:48:54] Um...
[05:48:56] this pending loop.
[05:48:58] which is when we
[05:48:59] set the final values. And this loop still gets called absurd a number of times in this thing,  which is why I probably can't put a break point here. I need to focus even thinner, unfortunately.
[05:49:10] Oh wait, did I lose my window?
[05:49:12] No, I didn't.
[05:49:14] Um...
[05:49:21] But I went, I managed to narrow it down to looking in here and I saw that one of the nodes was not marked as modified because it had run in a previous cycle outside of the transition.  And then I was able to realize that in this loop I needed to set it to modified if every time the pending value was set. It's kind of a silly bug fix. But what I want to highlight is just how freaking hard this would be to solve otherwise.
[05:49:50] Thank you.
[05:49:51] Thank you.
[05:49:52] Thank you.
[05:49:54] Yeah.
[05:49:59] Thank you.
[05:50:00] Thank you.
[05:50:02] Well, that's the thing, it just opens a browser. They basically hijacked a version of a browser to record every single possible event.
[05:50:08] So it really replays.  This one doesn't have any clicks, but there's no events in this one.
[05:50:14] But if I go out of this example,
[05:50:20] and go to tab auto disposal. This is a more
[05:50:23] Traditional.
[05:50:24] kind of
[05:50:25] scenario and I go into depth tools, what we'll see right away is
[05:50:29] that there is three click events. I clicked here to dose,
[05:50:32] Click back to UNO.
[05:50:34] And then I click back to dose again.
[05:50:37] Right?
[05:50:39] .
[05:50:39] And then unfortunately for me,
[05:50:41] when I get the next thing.
[05:50:44] the page is gone. I still need to fix this bug. I'm looking into it. It has to do with automatic  disposal during transition. But what's cool is like
[05:50:54] you can just jump to this point in time of when you did the click and then be like, okay,
[05:51:00] you know,
[05:51:02] Let's go source explorer, look at my code.
[05:51:06] And just, you know,
[05:51:08] This one's a little bit more manageable. I think there's a...
[05:51:15] Thank you.
[05:51:15] I don't know if I have any breakpoints in this one, but...
[05:51:19] I'm not doing the best demo of this, obviously. It's just...
[05:51:24] It's so crazy that you can look at some kind of
[05:51:28] Yeah, handle node.
[05:51:29] This is the event handler. Yeah, it disappeared. But see, these are what happens when you click in solid and the event delegation goes into the handler three times.
[05:51:41] You know, I can go to that.
[05:51:43] then like...
[05:51:44] What happens?  The first...
[05:51:47] time I click and I call handle node and then when I step into this
[05:51:52] Oh, I clicked one, set tab one.
[05:51:56] except have one set signal.
[05:51:58] Value change equal
[05:52:01] equals function A equals B. Yeah, okay, good.
[05:52:04] So it's equal.
[05:52:06] then
[05:52:08] Has the value changed?
[05:52:10] Yes, value changed. Is the element optimistic? No.
[05:52:15] So set a pen, it's not pending, add it to the pending queue, set pending, pending signal, status flood, and then, you know, like,
[05:52:24] Let's, you know, status flag, let's find those depth.
[05:52:27] Back.
[05:52:30] out.
[05:52:33] And then notify subs, schedule the update. Anyway, you get the idea.
[05:52:39] Oh, it's like, oh wait, let's go backwards before we notify the subs. Oh, let's go forward to after we notify the subs. Oh, like.
[05:52:49] Thank you.
[05:52:50] Yeah, I mean, it's
[05:52:52] Let's go... where is it? Flush again.
[05:52:57] Blush.
[05:52:59] Let's go to when the transition ends.
[05:53:03] if
[05:53:03] there's a transition and it's not complete do this if it is complete here
[05:53:08] It looks like the transition ends
[05:53:13] I'm going to remove this one for a second.
[05:53:16] Transition ends.
[05:53:19] after a click right here.
[05:53:23] Okay, so we jump to where the transition ends. And then we're going to walk through. Okay,  let's do the storing. Okay, good, good, good.
[05:53:31] And then...
[05:53:33] Let's...
[05:53:34] Update our pending values and commit them, good.
[05:53:38] dispose anything that's not used anymore.
[05:53:40] um
[05:53:42] Okay.  Okay.
[05:53:44] How many padding nodes are in this one? Not that many, right?
[05:53:47] 56 okay like walking through that
[05:53:50] Let's just jump to there.
[05:54:00] Where am I?
[05:54:04] Jump to 257, yeah, there we go.
[05:54:07] I'm just going to get rid of that break point for a second.
[05:54:10] Let's
[05:54:11] Let's walk over there. Let's run the render effects.
[05:54:18] All right. Oh, it's funny that UI didn't update. If I actually look at the DOM here, we're going to actually see
[05:54:26] the page dose here.
[05:54:29] Um,
[05:54:30] See, let's go back before we rendered.
[05:54:34] Um...
[05:54:37] Uno.
[05:54:39] Apply render effects.
[05:54:42] Dos.
[05:54:44] So, that's where it did the actual rendering of the DOM elements. Of course, we can walk into it if we want to and
[05:54:50] go through our
[05:54:52] effect code. But you can see the thing, you're like, oh, crap, I missed it. You can go, okay, let's go back.
[05:54:59] Let's try it again.
[05:55:03] Anyway, you get the idea.
[05:55:09] Thank you.
[05:55:10] This tool is just amazing.
[05:55:13] I can't speak enough about how amazing it is. Anyways.
[05:55:16] Um,
[05:55:18] Yeah.
[05:55:19] I think I'm done for today, done for the holidays.
[05:55:25] So...
[05:55:27] Yeah.
[05:55:31] I think if nothing else is going on, I think I'm going to call it quits here.
[05:55:41] There's a couple more questions in the chat. Let me see if I can see that.
[05:55:49] It's funny, I see the questions in Twitch, but not in here.
[05:55:54] Thank you.
[05:55:55] Thank you.
[05:55:56] Could I use actually hands of testing anything or something? Come to the next channel.
[05:56:02] I was. We were at a really good place where like
[05:56:05] a bunch of people who actually started were testing stuff, but then I, when I got went to implicit transitions, I kind of had to restart everything. So like,
[05:56:12] there was a lot of people moving stuff forward for a while.  And then I kind of pulled the reset about a month ago when I realized I could  do this new reactivity model. Um,
[05:56:21] You know, so then it was back to basically just me and Milo working on stuff.  But we are...
[05:56:26] getting to a pretty good place. I'm only missing a couple more features on the client side, and then we start like testing and trying this stuff out more. I mean, you can do all the stuff in stack blitz, although you can download the it's all an NPM and get up under the next branch. So you can definitely install and try it in projects. The V plugin solid, I think it's getting updated for next. I saw someone else
[05:56:47] post something there for solid 2.0, but I haven't tried it yet.  I've been just using a, like a rollup build essentially, but yeah. Um,
[05:56:55] I like the stuff I'm showing on stream is very hot off the presses.
[05:57:00] So very close early in the new year. We'll be in a good place to have more people testing this stuff out and we'll probably do an alpha release at that point.
[05:57:09] Do you play those guitars on the wall?
[05:57:11] Yes.
[05:57:12] Yeah.
[05:57:15] Thank you.
[05:57:17] All right.
[05:57:19] Um, yeah, I think...
[05:57:23] It's so funny, I don't see these messages.
[05:57:26] But I guess they happened a while ago.
[05:57:30] do solid contributors use coding agents on the project? And, um,
[05:57:35] I don't.
[05:57:36] I have to admit, I haven't really used
[05:57:39] Much I mean I used like co-pilot but that's about it so um
[05:57:44] I we do have like
[05:57:46] people working specifically on like
[05:57:48] testing how well ai works but i i don't tend to use ai on the work i do anyways
[05:57:56] We just play guitars. I don't know if that'd be that much fun.
[05:58:03] Thank you.
[05:58:03] Oh wow.
[05:58:09] Mm-hmm.
[05:58:11] Uh...
[05:58:12] Bye.
[05:58:13] I haven't paid too much.
[05:58:15] We won't know until it's actually like the APIs aren't even finalized.  This right now, I call it experimental.  The next phase will be alpha.
[05:58:23] then beta, then RC, and then release. So right now,
[05:58:27] because like I just did a big reset like that the answer would have been different a month ago
[05:58:32] So
[05:58:33] Um,
[05:58:33] Until we get to alpha when I feel that like I'm the desk done testing ideas and I'm very very close to it again
[05:58:41] then I can't really say for sure.
[05:58:46] On the positive, the core APIs, like Surface,
[05:58:49] hasn't really changed too much like there's some differences in stores and like
[05:58:53] new primitives like async, create async versus create, uh, um,
[05:58:59] Signal or create resource, but I think there are some behavioral differences that are worth
[05:59:07] talking about that are, you know, trickier, like that I'm looking at, I've talked about them a bit on stream, but those details are also, you know, like,
[05:59:15] automatic batching and stuff like those are details that still like need to be you know put up to rfc and stuff
[05:59:20] All right.
[05:59:22] Anyways, you all have a great holidays and I hope you
[05:59:27] See you guys all soon in the new year.  All right.  Have a good one.