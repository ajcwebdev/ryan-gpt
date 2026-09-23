---
title: "aA7Xeh7WG4E"
slug: "aA7Xeh7WG4E"
duration: "5:16:57"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/aA7Xeh7WG4E.m4a"
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
[00:03:00] All right. Hello, everyone. How are you doing today?
[00:03:03] Mm-hmm.
[00:03:05] Sorry for a bit of delay.
[00:03:07] The spider cage on my mic completely came off and I was like sitting there trying to like wind it back and
[00:03:13] Um,
[00:03:15] like the
[00:03:16] Anyway.
[00:03:18] Thank you.
[00:03:19] Thank you.
[00:03:20] Oh.
[00:03:23] Mike is too complex, obviously.  Yeah, yeah, we'll talk a bit later about this whole complexity simplicity thing.  I think it's important to...
[00:03:31] to get into that. But yeah.
[00:03:34] How's everyone doing today? CEO of Signals Returns.
[00:03:40] Yeah, sorry for really making you guys wait. I'll have my preamble a little shorter today.
[00:03:47] Ah, hey Dev, how you doing? Yeah, no.
[00:03:52] Thanks everyone for joining.
[00:03:56] Juice, oh sorry, juice at the ready.  No, I just, I have this lemon,
[00:04:01] Chucumber water again
[00:04:03] Thank you.
[00:04:04] I don't know. I'm a
[00:04:06] I don't know, maybe having less sugar actually will be a negative for the stream, lose energy over time, but...
[00:04:13] I've been drinking less orange juice, even though orange juice has always been like my favorite thing.
[00:04:20] Yeah, right. The Twitch pre-roll.
[00:04:24] Yeah.
[00:04:25] Yeah, I like the coconut water.
[00:04:27] Definitely.
[00:04:28] Okay, let's let's see if I can tell people we're live and get get stuff rolling. I I
[00:04:35] I've been feeling mighty philosophical recently, if you can tell.
[00:04:41] by the title of the stream today. I've been looking at, uh, let's get to my channel. Um, just looking at Twitch, make sure everything's going. Yeah, I've been looking a lot at, um,
[00:04:56] Cut.
[00:04:58] Well,
[00:05:00] how we got here in front end because a lot of our conversation the last you know several there's  been a few arcs on the stream like long running arcs and the initial one was just like what
[00:05:09] Okay.
[00:05:11] I'm skeptical of meta frameworks.
[00:05:13] Thank you.
[00:05:14] Let's talk to every meta framework creator and see what the hell they're doing.  And then the next arc feels like this long, like...
[00:05:23] journey into understanding partial hydration solutions, especially stuff like React Server Components.
[00:05:31] and wrapping our heads around what the whole space is, data flow APIs,
[00:05:35] you know, what that all means. And
[00:05:41] I feel like we're getting to a point where...
[00:05:46] the pieces are all kind of there and can start making some sort of conclusion. I know you're  like, it should have taken less than a year to figure that out. But our understanding of these  things continue to evolve, especially as people start developing patterns and  like learning more how to use things.
[00:06:01] So like
[00:06:02] But like at a certain point, you know, it's too easy to think like, hey, have I, you know, as Ryan Florence often goes, he always thinks he's getting nerd sniped.  Like, have we like gone so far down on the specific avenue that like we were losing the big picture?  And for me, I...
[00:06:21] I'm at one of those reflection points where I'm like, OK,
[00:06:24] Let's kind of
[00:06:25] really question again why we're here in terms of where front-end development JavaScript frameworks are today. Why have we spent the last three or four years doing what we're doing? Like, you know, what's going on? It was really interesting when I did the stream.
[00:06:40] last week that, um...
[00:06:44] There's a lot of people who are arguing...
[00:06:47] about
[00:06:49] Not arguing, but we're like, Ryan, why aren't CSC...
[00:06:55] Why aren't, like, why isn't CR, CSR SPAs fine?  Like, why can't I just do client side rendered?
[00:07:03] SPAs, why are we even still talking about this?
[00:07:07] Right?
[00:07:08] and
[00:07:11] You know, maybe that's a fair question.  Similarly, I got to a different part of the stream  and everyone's like,  why can't I just use Rails all the time or HTMX?  So like...
[00:07:23] It does feel like a time to justify where we are.  And I realized that I spent more time,  even though I was trying to talk about one specific thing  in terms of HTML partials,  like trying to get to the end of the conversation.  Actually, even kind of by the time I was too tired,  I didn't even finish where I was going,  like what I was intending to do,  because I spent so much time...
[00:07:43] Really roundabout going about talking like Billy and back history so to speak like and I realized that maybe instead of like coming at it like as in such a roundabout way we should just actually just look at
[00:07:55] at the whole spectrum with that intent instead of just getting kind of like sidetracked a billion times.  Not that we won't get sidetracked a billion times.  I just mean like let's actually look at this instead of like jumping to the end of the story.  I've been...
[00:08:09] got to the end of the story now because we've been spending so much time over the months and months, but like
[00:08:15] That's, who knows, that's like 50 hours of video to get from A to B, and that might not even contain the full context.
[00:08:23] I think it's
[00:08:25] worthwhile trying to
[00:08:28] Look at the whole spectrum and trying to understand why we're here
[00:08:32] where we are right now.
[00:08:34] If that makes any sense. So yeah, how are you guys all doing in chat? I just posted on on the Twitter or X or whatever that I'm live. So hopefully some more people will be joining in on Twitch here. YouTube audience is strong. Twitch is just getting started.
[00:08:56] Thank you.
[00:08:57] So yeah, how are we doing chat? Let's see here.
[00:09:05] Front-hand is getting easier today with native accessibility dialogue, container scope, yeah,
[00:09:12] Front end technologies are better than they've
[00:09:15] ever been, right? We continue to improve on them. Like it's, it's a long jump from where
[00:09:23] where we started. We'll talk about that in a minute, actually. But, um,
[00:09:30] Thank you.
[00:09:31] But yeah, it's, let me see here.
[00:09:35] Um...
[00:09:37] What's the Twitch URL? Let me...
[00:09:40] the
[00:09:41] Keep...
[00:09:43] quotes
[00:09:45] Twitch URL, hopefully it's there. TwitchTV/RyanSolid.
[00:09:49] Um...
[00:09:52] But
[00:09:53] Sorry, that was the answer to this question.  But going back to this whole thing, it's like...
[00:10:00] Even if the technology is more powerful than ever,  the expectation of what you get out of front end,  like on what you're building,  has continued to grow and grow and grow  at a rate that I think the expectation of where we get to
[00:10:13] has far outpaced the ability for the platform itself to keep up with just in general i mean
[00:10:19] it's the growth has been enormous in terms of what people expect out of the web apps
[00:10:26] and during different periods of time there's been different reasons for that which again is why i  feel like i just want to start
[00:10:33] start today's conversation with a timeline and we start filling in the blanks.
[00:10:39] Yeah.
[00:10:40] *sniff*
[00:10:40] Yeah, or signaling a change in front.  And we'll talk about that, but it's not just about signals.
[00:10:46] Baby Yoda.
[00:10:48] Yeah, I mean, I updated my background. See, technically my background is my actual office, but I use a green screen. So over Christmas break, you see all...
[00:11:03] I hadn't updated in over a year, so a lot of new LEGOs have snuck in.
[00:11:08] in there and different stuff. We got some Grogu,
[00:11:13] Optimus Prime, you'll see Groot behind Optimus Prime's gun.
[00:11:18] Got the Transformers car...
[00:11:21] you know,
[00:11:22] There's actually even like a scene from the Return of the Jedi and like the Mandalorian and like many ones all along the back.  Just might be able to see some Naruto.
[00:11:30] Gone from Hunter x Hunter.
[00:11:34] Yeah, anyways, enough looking at my shelf.
[00:11:41] Yeah. And I, yeah, I wrote, I wrote something again, beginning of the week about unifying the data model. We'll get there, but it's like, this is why I'm here because I could just continue that conversation, you know, that we left off on at the end of the last stream.  Yeah.
[00:12:00] But like...
[00:12:03] We'll get there anyways.
[00:12:08] I haven't heard anything recent from Alex. I'd love to hear. Alex is actually really
[00:12:13] fundamental in understanding.  Like, he's...
[00:12:16] sometimes seen a bit like over the top a little bit too aggressive but i think it's important  that he does represent
[00:12:23] a certain perspective that, um,
[00:12:27] I...
[00:12:28] I feel is actually relatively small, like not as heard in the ecosystem.  Because right now, and it hasn't always been this way, and again, this is a timeline important.  We have this front-end, back-end thing.
[00:12:41] split, which, you know, okay, for the most majority of the history of the web, there's a front and back and split. But like,
[00:12:49] Alex Russell is not coming from the perspective of
[00:12:55] of like
[00:12:56] like the back end guy necessarily. He's he's he legitimately cares about front end.
[00:13:04] Yeah, he said, "Bray, sometimes I hardly ever disagree with him." Yeah, that's a good way of putting it. Because like,
[00:13:10] I posted
[00:13:13] I posted my stream today, right?  Um...
[00:13:16] And I actually think I just had it on the screen again.  Let's throw this up again for a second.
[00:13:24] I had this quote to me. While multiple back-end frameworks are pushing for UI-rich SSR, adepts of React mess crying over existential crisis. The biggest issue is that businesses are still pushing for React.
[00:13:36] Now, you could argue...
[00:13:38] that
[00:13:40] the statement is correct that maybe not everyone should be pushing for React, there's other options out there. But it also kind of
[00:13:50] Thank you.
[00:13:51] It kind of echoes for me and I'm not picking on this guy specifically.  That's not really my what I'm getting at is like,
[00:13:58] I do think that
[00:14:00] There's still...  The gap is big enough between front and back end that the back end folks don't even understand the problem, largely.  Like, they just...  It's so lost in them because...
[00:14:10] Perhaps in the realm that they're working on there's no expectation they don't have the same expectation of what the
[00:14:16] like the experience should or could be like.  So it's like hard to even...
[00:14:21] like frame it in a way that like everyone can get on the same page to have this conversation.  The split's been like so long and so hard down the middle that like I'm not even sure if each  side understands what the other side is like missing on.
[00:14:36] Um,
[00:14:37] I'm going to make a little bit more.
[00:14:38] Alex would say like, you know, the business is all pushing for react.  It's a mistake.  But I
[00:14:43] the
[00:14:44] But and that's the biggest mistake.  It's a management problem, not even a technology problem.  But.
[00:14:51] I think
[00:14:53] that
[00:14:54] there is a bit of a miss right now where, you know, the complexity, the involvement of these  technologies gone such that, you know, there is really that specialization front and back end. And
[00:15:05] There's a bit of a gap of even understanding...
[00:15:08] using the same language to understand what we're talking about.
[00:15:13] There's so much new statistics in your mobile dev. I mean that's part of the web's history, right?
[00:15:22] All right.
[00:15:25] Thank you.
[00:15:26] Thank you.
[00:15:27] All right.
[00:15:29] Oh, nice.
[00:15:30] Nice. Awesome. Yeah. People joining on now because I posted on Twitter and I'm like six minutes behind the chat already.
[00:15:41] I got a question. Are the websites and apps today on better average or second order?
[00:15:44] Better in what sense? I mean, this is a fair question.
[00:15:48] Better in...
[00:15:49] that they are reaching the expectations that people would have wanted out of them, definitely.  But they've lost...
[00:15:58] other aspects, I think.
[00:16:05] Thank you.
[00:16:06] You could do much less, but I remember being able to always blame my A6 for everything someone wanted to do in the front end.
[00:16:15] Let's start this dream with a timeline, yeah, probably.
[00:16:21] Thank you.
[00:16:22] Yeah, I mean, this is an interesting observation.
[00:16:27] Why...
[00:16:28] Why is there too much change?
[00:16:33] Thank you.
[00:16:34] I...
[00:16:41] Right?
[00:16:44] Like, a lot of the back-end technologies say that there's less flux in them,  and then they go to JavaScript, and there's a new framework, a new technology, a new approach.  Right?
[00:16:55] And
[00:16:56] It's not...
[00:16:58] like there isn't, you know what I mean? It's not like
[00:17:01] people are just like
[00:17:03] going between frameworks because the syntax changed generally.
[00:17:07] There's a technology...
[00:17:10] Um...
[00:17:11] consideration here.
[00:17:13] And it's like, why can't we all...
[00:17:17] Thank you.
[00:17:18] Yeah.
[00:17:19] Thank you.
[00:17:22] Like, why can't we, you know, just find the right solution and go with it? Why does this keep on changing?
[00:17:29] Like, will it ever settle down?
[00:17:32] And these are all really good questions because it's one thing to point out that, you know, too much change too often and it breaks everything.
[00:17:41] But it's like,
[00:17:42] Why is the web that way is a better, more fundamental question, because I don't think saying like, like, you can use this argument for why everyone should continue to use React, for example.
[00:17:56] Thank you.
[00:17:58] Um...
[00:18:01] I'm not saying that's the best way to go about it.
[00:18:05] But
[00:18:06] I think it's fair to say...
[00:18:09] that
[00:18:11] you
[00:18:12] Thank you.
[00:18:12] And this happens for a reason.  And just because we...
[00:18:18] will it not to doesn't change this fact.
[00:18:22] In fact, I think the like, I don't want JavaScript fatigue, I want stability maturity.
[00:18:28] push has been so strong is largely why
[00:18:33] React, you know, is so dominant. It's not just because there's a great ecosystem libraries and many users and all that. It's because  people
[00:18:41] don't want change, they've had enough change.
[00:18:45] So like you can't kind of come at it
[00:18:48] Like you don't get it both ways, you know, like
[00:18:52] And
[00:18:54] You can't say you want change and then be like...
[00:18:57] But, you know, we shouldn't choose anything but say React or something like it just it doesn't work like that.
[00:19:05] Ha.
[00:19:08] Thank you.
[00:19:10] It's just
[00:19:12] Thank you.
[00:19:20] Just catching up on chat. Sorry. So many of you today chatting. We have already over 200 people on the stream.
[00:19:27] um which is incredible which means if i do a little bit of math here there's 64 of you on
[00:19:34] Um...
[00:19:36] Twitch, which means that there should be at least 140 likes on the YouTube right now, right?
[00:19:44] Thank you.
[00:19:46] Thank you.
[00:19:47] I think there's too much change because there's too many people trying to do the same things.  Or rather, what you're saying is too many people trying to solve the same problems.
[00:19:54] But is that...
[00:19:58] a problem, like
[00:20:00] Isn't it good?
[00:20:01] I guess your thing is like, if we all work together on the same solution to solve the problem, then we would like...
[00:20:09] combine our efforts rather than that, right? So like the idea is like we should all just work on making react better and
[00:20:17] Thank you.
[00:20:18] Of course, if we did that, we wouldn't have signals now, would we?
[00:20:25] Thank you.
[00:20:29] .
[00:20:31] I see some chat people talking about comparing apps and web apps and
[00:20:37] Thank you.
[00:20:38] So this is always part of front end conversation because there's different ways that people get their UI. Because like if we just took my timeline here, you know, this big long timeline, and we go back at the very beginning, I don't know what year this is.
[00:20:56] We can pick a year. The web started like 91 or something, maybe even earlier.
[00:21:02] My personal journey of the web started around 1994.
[00:21:06] 596 but let's say
[00:21:11] Let's just pick 1993.  I don't know if most people...
[00:21:15] used...
[00:21:17] use the web
[00:21:19] Before 1993 that I feel like this is when the ISP started showing up and you were like people would mail  um
[00:21:27] males you like get like
[00:21:31] Join our internet service in the mail. They mail you like disks, essentially. Like, like, like, floppy disks. You gotta run around. 1994, we didn't really even have CD-ROMs in our computer. 93, we didn't have CD-ROMs in our computer. It was like 94, 95 that CD-ROMs showed up, like, that you could have.
[00:21:51] that you could have that. And I mean, for a lot of you, like I'm talking about 30 years ago. Just for context here, yes, I've been doing web development for about 30 years.
[00:22:03] So I'm hoping to pull from my
[00:22:07] influence, or sorry, not influence, might influence
[00:22:11] my experience over that time to kind of paint a picture, at least from my perspective,
[00:22:15] of why we are where we are right now. But
[00:22:19] the the funny thing about the web during this initial time period and i i will say
[00:22:26] I'm not going to differentiate it much until...
[00:22:29] I'm going to put another marker here around 1998.
[00:22:32] And we can we can talk about it.  It happened a little bit earlier, but
[00:22:36] I'm just going to roughly...
[00:22:40] put something around here. There's more important timeline pieces. If you want a really detailed thing, I'd suggest watching Steve Sanderson's talk. Steve...
[00:22:48] Sanderson...
[00:22:51] Web something. I can't even remember what it's called. Um,
[00:22:55] Hawk, Sydney...
[00:22:57] Let me...
[00:22:58] he did it in Sydney Australia. Why web tech is like this. This is
[00:23:03] an amazing talk big inspiration of what we're talking about today i'm going to just  post this link for everyone if you haven't seen it um
[00:23:10] He does a much...
[00:23:12] good job of going to the very specific details but i want to dwell on it more than you can do in uh talk
[00:23:20] Thank you.
[00:23:24] Thank you.
[00:23:29] Yeah, sorry, just catching up so much chat here.
[00:23:33] Thank you.
[00:23:33] Thank you.
[00:23:34] Alright.
[00:23:36] Steve is a legend. For those who don't know,  Steve Sanderson also is the creator  of Knockout Jazz.  And he's also...  I don't know if he's the only creator,  but he's behind Blazer as well.  Um...
[00:23:51] All right.
[00:23:52] So, what I'm getting at here is, do you know what it was like building a website?
[00:23:57] generally between this time period, 1993-98,
[00:24:01] You would like...
[00:24:02] I mean, maybe we can do it right now.  I haven't done this in a while.  Can I go...
[00:24:07] You can tell it's my desktop because of all the benchmarks, but can I go like, man, I'm such not a Mac user. What is it? TextEdit?
[00:24:15] Thank you.
[00:24:17] Um...
[00:24:19] Let's go to my desktop and let's make a new document.
[00:24:22] And let's go like
[00:24:25] HTML. I'm not even going to properly...
[00:24:28] case this thing.
[00:24:31] slash HTML
[00:24:34] And then...
[00:24:35] Let's put a body in here.
[00:24:38] Thank you.
[00:24:39] Like,
[00:24:39] This was what web dev was like when I started web dev.  We kind of opened up notepad.
[00:24:46] and let's put an H1 in here.
[00:24:49] The only difference between this example and back then is everything was a table. I'm not I'm not kidding you everything everything existence was a table, but
[00:24:57] Hello.
[00:24:59] And then...
[00:25:01] button
[00:25:03] I probably got some typos in here.
[00:25:06] and go click.
[00:25:09] Me.
[00:25:11] And then what do we want?
[00:25:12] On click.
[00:25:15] Probably going to be like security stuff to prevent this. Let's go alert.
[00:25:20] "Hi" or "alert" I'll use single quotes, "Hi"
[00:25:25] Thank you.
[00:25:27] And then we want to go file, save as.  Sorry, see, I'm not-- I came to the Mac later,  but this will hopefully give me a save as thing.  Let's put this as--
[00:25:38] Home.
[00:25:40] And we'll save this as a HTML page.
[00:25:43] Thank you.
[00:25:45] There we go, home.html. And then I'm going to open it with Google Chrome, hopefully.
[00:25:56] Okay, something did not work properly here because...
[00:26:00] It's it's just showing me the text of the markup.
[00:26:04] which is odd
[00:26:06] to be fair. Did I screw that up? Chat's probably going to tell me that I screwed it up somewhere. But
[00:26:14] Yeah.
[00:26:15] Thank you.
[00:26:16] *laughs*
[00:26:18] Some people mentioned Doctype, but we didn't even have Doctype back then. Like I mean we might have but like no one was no one was paying attention to that.  Um...
[00:26:28] I feel like.
[00:26:29] Yeah.
[00:26:30] Eh.
[00:26:31] I've done this on Windows a billion times.
[00:26:34] I never...
[00:26:36] I mean...
[00:26:41] When's it like this?
[00:26:50] Yeah, this is interesting because I would have expected this to...
[00:26:56] Like if I open this up in VS Code,
[00:27:03] this looks no this
[00:27:06] Yeah.
[00:27:07] Thank you. I forgot. I still haven't updated my device. Sorry, guys.
[00:27:13] Thank you.
[00:27:15] Go away
[00:27:21] Play device.
[00:27:26] The funny thing is I put an HTML extension on it, which is the funniest thing about this.
[00:27:30] uh where is okay not this one where's my text edit
[00:27:35] Text edit. Okay, let's go here.
[00:27:39] Mm.
[00:27:40] Yeah, I'm just yeah, everyone's it's just it's just funny because like.
[00:27:46] I thought that saving it with the right extension would be enough, but you're right.  It's probably it has everything to do with how this is saved as right.
[00:27:54] 'Cause...
[00:27:55] Um...
[00:28:00] Yeah, I mean...
[00:28:05] It's weird though that the VS Code opening it didn't work. It's funny that I can't make this go away either. It's like refusing to go away.
[00:28:13] I think they're getting more insistent here. Let me open VS Code.
[00:28:17] Thank you.
[00:28:19] Because this is not the whole, this is not what I wrote, right?
[00:28:24] Like what's going on here in this home?
[00:28:27] thing.
[00:28:29] This is... oh, they literally encoded it. Okay, screw this. It's just text edit being stupid. Let's just...
[00:28:37] take our text from from
[00:28:39] from text edit and put in VS code. I mean, it, it, uh,
[00:28:46] This ruins my magic a little bit because I didn't want to use a modern tool, but
[00:28:51] Let's just do this.
[00:28:53] All right, done and done, whatever.
[00:28:57] I didn't have text edit back then either, so.
[00:29:00] you know,
[00:29:03] The funniest thing about this is I literally can't move this.
[00:29:10] Um...
[00:29:11] So it's like...
[00:29:14] Yeah.
[00:29:16] Oh, man. Let's get there with Finder.
[00:29:21] Uh...
[00:29:22] Open with...
[00:29:25] Google Chrome.
[00:29:28] All right.
[00:29:32] Thank you.
[00:29:34] Come on, alert.
[00:29:40] This is the worst demo ever. I'm sorry guys.
[00:29:50] See, if I open up it this time, yeah, this is so funny.  Like, it literally...
[00:29:56] The text edit is just not the app you want to use.
[00:30:02] it actually shows me the rendered HTML.
[00:30:05] Okay.
[00:30:05] So screw you, text edit. I'm sure there's a way to solve this.
[00:30:14] Thank you.
[00:30:15] Ooh.
[00:30:16] Looks like this is a good update.
[00:30:19] But we'll have to
[00:30:20] Push that till later.
[00:30:23] I'm probably done playing with TextEdit, right?
[00:30:29] Uh...
[00:30:31] Thank you.
[00:30:35] All right.
[00:30:45] I think this is like just such a combination of annoying things happening on my computer right now.  I'll open VS Code again, open the file, I'll go in here.
[00:30:56] Um, you're right, it's the stupid quotes.
[00:31:00] Tech said it actually doesn't use-- Mac doesn't use real quotes.
[00:31:07] So now...
[00:31:08] We open up Chrome.
[00:31:11] to
[00:31:12] Did I close Chrome? I don't feel like I closed Chrome.
[00:31:16] But it's like, where did you go?
[00:31:18] No. Fun times. OK.
[00:31:27] There we go. Chrome, Chrome.
[00:31:32] you go
[00:31:33] Thank you.
[00:31:34] Let's open up.
[00:31:36] this inside Chrome
[00:31:40] We click, we get our alert. Okay, there we go. Demo done. So this is all because
[00:31:45] of how far the tools have gone.
[00:31:47] In back in the day, when you'd open a Windows notepad, that would have worked first try. There would have been no encoding of the HTML. There would have been no weird string wrappers or whatever. Like essentially, you just, you know, here you go. I build my website and deploying your website was really easy, too.
[00:32:06] Thank you.
[00:32:08] Yep. Painful.
[00:32:12] Thank you.
[00:32:14] Yeah, the problem is I should have tried this before, right?
[00:32:18] Like literally any note, like back in the day, like any text editor would just let you do this because they weren't aware of HTML.  They didn't have fancy features to preview it. You would literally open the text editor.
[00:32:30] type the stuff in,
[00:32:32] Update it.
[00:32:33] open it in the browser,
[00:32:35] And then, you know, change the text, refresh the page, you know, change the text, save, refresh the page.  And then you're like off to the races.
[00:32:43] Right.
[00:32:45] And then deployment was, yeah, FTP.  You know, you would just use an FTP client,  take all those files off your desktop,  stick them...
[00:32:55] Up.
[00:32:55] on it. And the only reason I'm focusing so much on this is because
[00:33:01] the development experience
[00:33:03] even though it was like there was no front end and back end of the web at this point, right?
[00:33:08] You would just go on here...
[00:33:10] You would build a single page
[00:33:12] You'd view your page source, you would see all the code, the JavaScript, the HTML, that
[00:33:19] that you that other people used you'd go back you'd like figure out what they're doing and  the whole app basically existed on this page in a sense everyone was a front-end developer
[00:33:32] Um,
[00:33:34] like some people could argue this is backend too, but it's not like basically the beginning of the web, everyone was a frontend developer from, from my perspective. Like,
[00:33:42] I built websites for people
[00:33:45] plenty like this. I built band websites. I built local business websites. I built, you know, I was like,
[00:33:54] 12 years old at, I think, when I was at 12, yeah, so like 95, I was like 12 years old,  and then it was like, it was better than babysitting in terms of getting cash, you know, so like,
[00:34:06] At this point...
[00:34:09] We weren't even thinking front end, back end.
[00:34:12] Right.
[00:34:13] Thank you.
[00:34:14] That's all I'm going with this year, okay?
[00:34:18] I don't.
[00:34:20] So,
[00:34:22] Yeah.  Okay.  But like...
[00:34:25] It happened.
[00:34:26] within the first couple years,  it was before 1998,  but, like, by 1998...
[00:34:32] real businesses had moved to the web.  Like, you gotta understand, like, in 93...
[00:34:36] Every website was like that. You didn't have search engines, you had
[00:34:40] listing directories. You go to a website and they'd like regularly update the links so that like you could like check out what was going on. You wouldn't search, you would just
[00:34:49] look at their curated list of website links.  And I mean, you could think it's pretty easy to do.  You just go update the text and now
[00:34:58] FTP it up, and now your website has been updated.  And everyone...
[00:35:02] You can see the latest links, right? There's nothing dynamic here.
[00:35:07] And as I said, the dynamic stuff did start somewhere, you know, earlier, but
[00:35:13] I'm just talking from a consumer standpoint and what people are looking for up till
[00:35:18] Around 97, 98, no one really cared about to do much more.  You know, it was around then that people were like trying to do these like Java embed applets and trying to do like
[00:35:28] we need to do dynamic stuff, like guest books and stuff. And these technologies were always  existent through the early 90s. I'm just saying that it wasn't until like, like, a little bit  later that, you know, it went beyond just having a Perl script in a CGI bin, and like being able to  like, rewrite that HTML. So like, if you want the mental model of the early dynamic stuff, it was like,
[00:35:52] You'd write scripts knowing that there was an HTML file in this folder, and then the script would
[00:35:57] load the HTML file from the file system,
[00:36:02] into memory, and then you'd like...
[00:36:04] search through the text or whatever the HTML in this file and then be like okay
[00:36:09] I'm going to find a certain marker, maybe like a comment marker or something, and then I'm going to append
[00:36:16] more text to there and then save the files.  So then again, you're already on the server.  So you just...
[00:36:23] basically rewrote the file in place and you've updated the website.
[00:36:28] And, I mean, like a lot of times, like I remember setting up simple websites for businesses where I believe the form post just went to an email.  You know how you can use Mail2 as a protocol?  Like the action was like, anytime someone posts a form, just send it to my email.  Like, no validation or anything.  Just like, no need for a back end.
[00:36:50] email me this form.
[00:36:53] content and I
[00:36:56] This is kind of...
[00:36:58] *click*
[00:37:00] Thank you.
[00:37:00] The reason I'm bringing this up is because the early web was basically, as I said, front-end.
[00:37:09] At some point, we needed to do more than that.  It was a pain in the ass to manually stuff.  Like, can you picture a site with a lot of pages?
[00:37:20] Like how many pages are you going to make every time you get a new page?  You know, copy, paste, swap the content. I mean, this was a thing, right?
[00:37:29] Yeah, ASP came out end of 96.  That's what I'm saying.  Like gearing into 97, 98.  Maybe I should say 1997 here, right?  To be fair.  So, or end of 96.  But...
[00:37:39] But what I'm getting at is
[00:37:41] *laughs*
[00:37:42] *laughs*
[00:37:44] So if we call this region like static web...
[00:37:52] The next region of time
[00:37:55] And I'm going to draw a line here.
[00:37:58] That's going to say 2005.
[00:38:03] Thank you.
[00:38:03] -
[00:38:04] is
[00:38:06] is probably, you know,
[00:38:09] I'm going to call it like
[00:38:11] dynamic,
[00:38:16] backend. And what we got was we got technologies like ASP, PHP, um,
[00:38:26] Essentially, instead of like taking just simple Perl scripts that like
[00:38:30] wrote to an HTML file because you know it was there,  you'd actually get descriptive languages that would template out what
[00:38:38] the HTML should look like.  And then on request,  instead of just necessarily serving stuff  from a static location,  you would...
[00:38:45] render the appropriate response page
[00:38:49] based on data you loaded from the database. But like,
[00:38:54] essentially
[00:38:59] instead of having like
[00:39:00] folders with thousands of files, you could write one PHP file that could serve all thousand variations of those pages. Don't get me wrong, the static web didn't last very long for anyone trying to do anything
[00:39:11] dynamic, but it's important to understand, like the web started with file system routing, right? Like, and basically everyone was a front end developer.
[00:39:19] Um,
[00:39:20] we realized the limitations there and
[00:39:24] you know, real backend technologies, databases, you know,
[00:39:28] you know, got involved because before that, if you wanted to do kind of semi-dynamic stuff and with data backend, you'd basically
[00:39:35] have a, it's almost like a static generation.  You just have databases spitting out HTML pages.
[00:39:42] Right.
[00:39:44] and then upload those, right?
[00:39:48] This is...
[00:39:50] You could do that with the static web, whereas the dynamic, you know, web or the dynamic backends I'm calling here, it wasn't like that. Instead of like doing pre-rendering of the HTML, you would actually do it all on demand, which was, you know, a lot more dynamic.
[00:40:06] I do. Twitch TV rhymes solid.
[00:40:13] - Thank you.
[00:40:15] Yeah, I mean, that's the thing.  The earlier this technology was, like, the, you know...
[00:40:24] *sniff*
[00:40:27] Mm-hmm.
[00:40:27] the more like you didn't have other options at the point.  So like as think about how much the web grew during this first 12 year period.
[00:40:36] It makes a lot of sense.
[00:40:44] Just reading the comments here.
[00:40:57] Thank you.
[00:40:58] 2005 Google Maps. No, 2005... it's funny because this switch was... isn't a concrete point in time, it's a range. Because people just realized the limitations of the system and they needed to do better. This switch I'm putting on here was because a very, very important technology came out at this point. Very, very important. And that technology is Ajax.
[00:41:26] You have to understand before 2005,
[00:41:30] You couldn't do asynchronous requests from the client.
[00:41:35] Thank you.
[00:41:36] Like...
[00:41:37] You essentially
[00:41:40] *sniff*
[00:41:41] loaded a page, and then you were stuck with it until you went back to the server and reloaded the whole page.
[00:41:47] Like,
[00:41:49] Like...
[00:41:50] Thank you.
[00:41:51] If there was a way of doing direct request...
[00:41:58] it wasn't async, it was blocking, right?  Like, there's no...
[00:42:03] Basically there was no point even... I don't know, I honestly never even tried it. I don't know if there was any technology to actually do...
[00:42:13] synchronous requests before that from the client without reloading the whole page. There may have been, I've just never used it because it would have been completely
[00:42:19] it would have blocked the main threat.  Like, you wouldn't have been able to do anything.  It just, that's not how JavaScript in the browser works.  I'm pretty sure it just wasn't a thing.  I could be wrong.  Somebody technical out there probably knows the answer to it.  But the big thing is Ajax...
[00:42:32] Came out in 2005.
[00:42:41] Thank you.
[00:42:42] you
[00:42:44] Flash existed somewhere in this dynamic period.
[00:42:50] It came out, you guys can tell me, somewhere between 2007 and 2005, which allowed...  It's important to...
[00:42:58] Yeah, maybe I should just call this dynamic web, because it's not just dynamic backends.  It's also, there was, like, Flash during this period.  Basically, it's continuing on the whole, like...
[00:43:11] applets and stuff. There was this idea with Java and ASP and stuff that you could build these little mini apps that you would load into the
[00:43:18] browser, like basically they'd be full applications because people understand the app and server models were pretty far apart.  You couldn't really do anything interactive if every time you like, especially before Ajax, every time you did something, it was like full page reload, you know, wait for it to come back.  It's like, oh, he clicked their full page. Can you picture trying to play like even like a snakes game?  I'm the funny thing is people made stuff like like snakes.
[00:43:45] You know, like where the snake, you know, goes around.
[00:43:48] But it would like the snake would move one step.
[00:43:52] Pedro Loves.  Pedro Loves.  Like...
[00:43:56] I don't even know.
[00:43:57] *laughs*
[00:43:58] Like, it just...
[00:44:02] The apps needed...
[00:44:04] You know, to be able to be interactive, JavaScript was dirt slow during this time period, too.  So like, you know, people thought that it would never have the capability of what, you know, being performant.
[00:44:22] It wouldn't need to reload on a snake game.  I'm saying is if you tried to build something  with pure JavaScript and HTML,
[00:44:29] They're like...
[00:44:31] I guess it depends on the... You're right, you're right, you're right, you're right. Technically speaking, you could... Yeah, yeah. Sorry, the reload. Snake game is a bad example because there's no back-end state.
[00:44:40] Yeah, I'm sorry about that on the snake game.  I'm just trying to say, like, basically...
[00:44:45] A lot of times you'd like hit a dropdown in a form and then be like, okay, whole page is going to reload to load the list of possible.
[00:44:53] destinations and then you know
[00:44:56] drop down on a form, whole list to get the possible dates that are available and stuff. Like, there's a lot of back and forth to write. A Snakes game you could write completely in JavaScript. It'd be slow as molasses, but not because it needed to do page reloads. That was...
[00:45:09] Thank you.
[00:45:11] Thank you.
[00:45:12] Thank you.
[00:45:13] But like what I'm trying to get at is like these tools using HTML using JavaScript was not
[00:45:22] good enough to really build
[00:45:24] Applications.
[00:45:30] ActiveX, yeah, and Java is all non-IRC.  Java rooms work back then.
[00:45:35] So, the reason Ajax is a big deal is suddenly
[00:45:39] You could do partial updates.
[00:45:42] So...
[00:45:43] these big things like ASP.NET,
[00:45:48] and PHP and all those things.
[00:45:53] Suddenly we're like, okay, we can make our apps way more...
[00:45:56] interactive, you know, like all our, I call them apps in the loosest sense, but like, you know, like admin sections of pages where you were like managing crud stuff. We can now like...
[00:46:07] potentially
[00:46:08] update part of a form and not have the whole page go back, just swap out the panels. You know, HTMX, right? This is basically  when something like HTMX first became
[00:46:19] possible. And that's exactly the way people used it originally. Early
[00:46:24] Ajax was largely to...
[00:46:27] You know it's Ajax, asynchronous JavaScript and XML.
[00:46:33] Right. Like people were
[00:46:36] Okay.
[00:46:37] People...
[00:46:38] People were using...
[00:46:40] Bye.
[00:46:41] sending like HTML, XML extensions like SOAP over
[00:46:51] XML was used for HTML, not for serialized data.  Yeah, it's true.  But we actually used XML for serialized data, too, with SOAP.  I know that, like, the...
[00:46:59] like RPC type stuff from back then.
[00:47:06] But, okay.
[00:47:09] Thank you.
[00:47:10] The thing is...
[00:47:16] Even with these partials, it was getting really nasty because
[00:47:20] client state,
[00:47:21] Kept on...
[00:47:24] Thank you.
[00:47:26] kept on increasing, right?
[00:47:28] Um,
[00:47:29] And if the next line I'm going to draw is actually 2010.
[00:47:35] Let's go 2010.
[00:47:37] Okay, let's put two thousand...
[00:47:41] Thank you.
[00:47:42] Thank you.
[00:47:44] because during this intermediate period of Ajax,  we had like,
[00:47:50] Partials.
[00:47:52] We had...
[00:47:54] .
[00:47:55] JS faster
[00:47:57] You know, I'm not going to use slashes.  Like, Chrome showed up during this time period, right?  Chrome came out, and if anyone remembers, it was like...
[00:48:06] this like this browser is like 10 times faster than any other browser like they optimized  javascript but all the engines did right the um v8 spider monkey they all made huge  like pushes in javascript performance in in this midsection so
[00:48:22] But people were still basically building websites either statically
[00:48:27] or dynamically, mostly dynamic. Most people had moved into these big
[00:48:33] ASP things and they were the problem is like static web.
[00:48:36] When you were building, I mean, I don't know if I should be using like color coded bar sections, but
[00:48:42] this time period
[00:48:44] Thank you.
[00:48:45] was...
[00:48:46] Front End.
[00:48:48] oriented right i'm gonna put something right
[00:48:51] I'm going to use green for front-end oriented.
[00:48:54] this time period
[00:48:57] I know there's front end stuff with Flash.
[00:49:00] But...
[00:49:01] So maybe it's not front end versus back end more like
[00:49:04] like, how should I call it? Like,
[00:49:08] single mental model, split mental model. This time period was
[00:49:14] was mostly like
[00:49:16] back-end or split model thinking.
[00:49:19] Right?
[00:49:25] But the problem was,
[00:49:26] It got really, really, really...
[00:49:28] nasty because who owns the state? Well,
[00:49:32] Here,
[00:49:33] client-owned estate,
[00:49:35] Here, for the most part, server owned the state.  These are stateful servers at this time period.  And what ended up happening was that in order for the client to be really interactive, we did a lot of back and forth serialization.  We'd like serialize the state from the server.
[00:49:52] so the client would be aware of it.
[00:49:55] And then, sorry, when you updated the client,
[00:50:00] It would send back its updated state to the server so the server could update its state.  And what ended up being was we were just like serializing this big blob back and forth.
[00:50:09] Right.
[00:50:12] Yeah, here's a good stat. JS increased in speed 50 times between 2006 and 2009.
[00:50:17] Do you know how incredible much that is?  Like, you know how there's Moore's Law and we watch, like, this is harder, again, for  you younger folks, but like, when I was a kid...
[00:50:27] computers doubled in speed.
[00:50:29] basically every two two and a half years so like you'd you'd buy uh you know a pc and you'd be like  holy crap
[00:50:37] This thing is 33 MHz, like...
[00:50:40] The...
[00:50:41] you know,
[00:50:42] Like...
[00:50:43] before we had these 16 megahertz, but it's twice as fast, right?
[00:50:48] It...
[00:50:49] And then, like, by the next time we bought a computer, there were, like, 200 megahertz.  Like...
[00:50:55] it
[00:50:56] four times faster.
[00:50:59] this time of JavaScript speed up between 2006 to 2009 makes that kind of jump seem like nothing.  Like...
[00:51:08] It was incredible.  Like, it's hard for me to put into words.
[00:51:21] Thank you.
[00:51:22] Thank you.
[00:51:24] Right. So as I said, in general, like,
[00:51:30] Yeah.
[00:51:32] This is when the topic comes to solve, right?  Because HTMX is innately stateless, which is...
[00:51:38] I think really, really smart. Like you can use it with stateful backends, but the fact that it didn't tie this, like you have to understand the technologies at this time assumed a stateful server. So even when they were doing partials, it was a,
[00:51:47] It was a mess.
[00:51:49] I called, I, I, everyone has their own preference. See, I started the web here. So I was a front end developer. I got my first professional development jobs, you know, through here, right. By the time I was in here, I refer to this period here as the dark ages. Um,
[00:52:04] And it's just because we got to a level of...
[00:52:09] complicatedness, complexity, whatever you want to call it, like all factors,  that was just insane because the model no longer aligned.
[00:52:17] Nicely.
[00:52:18] because this model was always, there's a single model. This model started with like client server,  clearly separated. And by here, they were trying to merge it back together again. And
[00:52:29] It...
[00:52:30] It was...
[00:52:31] It just...
[00:52:33] Something had to give.
[00:52:37] Right?
[00:52:38] Like,
[00:52:39] It was so...
[00:52:42] awkward that you'd get to this point where you'd be duplicating your logic between the JavaScript on your front end and the back end and that over time you're watching because of the demands of interactivity.  So see if you're building apps, right?  You have to understand most of the web was still here doing this 90 percent still even today, you know, but you people were trying to build apps because of mobile.  See what else happened in 2005?
[00:53:06] Or 2006?
[00:53:07] the iPhone.
[00:53:08] So like...
[00:53:11] We, a large part of like,
[00:53:15] what was happening here was that
[00:53:17] the web technologies, browser teams, Chrome, people who cared about the web, were like, we can't lose out to mobile. That has to be what was driving a lot of the JS improvements during that time period. It was like,
[00:53:31] they knew that people were expecting app-like experiences and
[00:53:36] they were not getting them. Unfortunately, the dynamic web stuff of the early days of that worked really well for the type of sites that we were making. It was way better than the static web. It was it was
[00:53:48] it was dynamic, it could do the stuff. But when it came to taking that technology and applying it to stuff that would be comparable to mobile apps, it fell flat, like not even close, it was embarrassing.
[00:54:00] Right?
[00:54:01] And again, it was because...
[00:54:05] By the time you got here and you're serializing the state back and forth, and you're running just as much logic in JavaScript, the apps are just ballooning in size.  And this is because of...
[00:54:16] Misalignment.
[00:54:17] of
[00:54:18] expectation, like no one wanted to touch JavaScript in this period.  JavaScript was a joke language back here.  No one really did anything but like marquees across the page or like funny little alert messages.  Like people back in the static web days used to a lot of times like hide Easter eggs in their website  just because like that's about all you could do with JavaScript, like was do something funny.  If you found, you know, a certain location on the page or scrolled somewhere like
[00:54:43] But when we got to here, the developers didn't even want to touch JavaScript. It was like, this is dirty. Like, don't get me wrong, jQuery showed up after Ajax and most of the early JavaScript libraries, you know, to enable is just because it was inevitable at this time period that you needed everything.
[00:55:01] more, right? This is when, like, as I said,
[00:55:04] I'm just going to summarize this period with J period.
[00:55:07] query appeared.
[00:55:09] jQuery. I'm just putting jQuery here.
[00:55:12] But like
[00:55:14] So yeah, I mean, here we should talk about ASAP.
[00:55:19] PHP and Flash, just to kind of
[00:55:23] Fill that in.
[00:55:25] But like...
[00:55:28] Even if...
[00:55:30] I mean, this was pretty good.
[00:55:32] generally speaking for people building web pages, but I said for people building apps,
[00:55:36] you use Flash. Like, you just...
[00:55:39] There's a whole different technology. You wouldn't expect the web to be able to support applications.
[00:55:53] basically just each one standard.  Yeah.  He forced it because,  you know,  when he put out the iPhone,  right?  Like they,  they actually were like,  yeah,  what they didn't support flash at first.  And then they,  they,
[00:56:04] That like never changed everyone else's fault suit was the but essentially
[00:56:08] A bunch of companies wanted to bet on the web at this time as well.  Facebook did, right?  Right.
[00:56:15] They...  They...  Facebook...
[00:56:17] If you go back to around 2000...
[00:56:22] I'm trying to remember what we want to go to, but at a certain point they tried the bet on the web and then they decided later it was a mistake and they focused on mobile development and that's what led us to React Native. But, but like everybody wanted to bet, was hoping to bet on the web and
[00:56:36] They needed to get out of this...
[00:56:39] Honestly,
[00:56:41] The complexity and the disgustingness people feel with their tools these days doesn't even touch on how bad it was
[00:56:49] right in this period. Because people were expecting one kind of experience, and you were almost completely unable to...
[00:56:57] provide it with the tools given unless you like had some mismatch of a bunch of different  technologies that didn't really want to play together.
[00:57:06] All right.
[00:57:08] All right.
[00:57:13] People talking about the different logos and Mozilla. Yeah, Mozilla was Netscape Navigator, right? But by 2005, 2006, we had the modern Firefox and we had Chrome, 2007, sorry, 2008. We had the beginning of the modern web.
[00:57:31] I'm not.
[00:57:32] - Thank you.
[00:57:33] Thank you.
[00:57:34] Okay, sorry, just catching up with chat here.
[00:57:40] Yeah.
[00:57:40] so
[00:57:43] What did we...
[00:57:45] do next.  Because I'm kind of...
[00:57:49] Tip.
[00:57:50] I'm going to put another line here.
[00:57:51] And I don't know if the line's in quite the right spot.  I'm going to put one here and I'm going to
[00:57:57] I'm going to put
[00:58:00] We're gonna get a little bit more granular  at the end of the chain here.
[00:58:04] I'm going to put
[00:58:06] 2016  here roughly. This is not the right  year. It's like 2000.  We're in a range again scenario.
[00:58:14] I can't...
[00:58:16] We'll continue going.
[00:58:18] -
[00:58:20] Thank you.
[00:58:21] I'm feeling so old right now. Yeah, that's I feel like that almost every stream
[00:58:27] Thank you.
[00:58:28] Uh...
[00:58:31] *sigh*
[00:58:33] Thank you.
[00:58:34] What I'm trying to get at is...
[00:58:37] The green came back.
[00:58:40] And the green came back
[00:58:41] hard.
[00:58:42] People just...
[00:58:43] dropped
[00:58:46] We'll figure out how long this green bar is in a minute.
[00:58:49] But...
[00:58:52] People just basically...
[00:58:55] who
[00:58:56] Like...
[00:58:58] In the same kind of way...
[00:59:00] that like
[00:59:02] when you're doing static web,
[00:59:04] You know, when you're, like, making these files and doing, like...  Like, it was just dumb to try and, like, make, like...
[00:59:10] dynamic content.
[00:59:12] You're like, okay, I need a declarative
[00:59:15] way of doing this. I need a structured way of doing this.
[00:59:19] In that same way, we had another one of these ones where people...
[00:59:23] Thank you.
[00:59:23] had gotten used to stuff like Flash or whatever, like essentially being, um,
[00:59:32] you know,
[00:59:33] the thing they had to use...
[00:59:36] so to speak, to build these interactive experiences.  So when it was shown that you could combine Ajax technology, fast JavaScript,
[00:59:45] Like these are already like apps loading in on the page.
[00:59:49] you know html5 standards all the all the new technology and actually build
[00:59:54] stuff that was similar to flash, you know, basically pushed as mentioned by the iPhone and Apple. People are like,
[01:00:00] Okay, like don't get me wrong, most companies stayed on this technology
[01:00:04] for years and years and years. Probably not even thinking about switching until about 2015 and 16, which is why I think
[01:00:12] that this marker is important.  But during this early period,
[01:00:17] all the people trying to build more application type stuff got freed up and
[01:00:21] It was amazing again.  I remember 2010 seeing Knockout and people feel angular.  It felt like this web again because you had that single model and you like, sure,
[01:00:31] Like you could, in fact, go back to using Notepad to do all your development.  Not a slow IDE.  The thing I didn't mention on here is like during this time period,  we got to the place where we were waiting for like,
[01:00:42] 30 second minute long build times and like,
[01:00:45] you know, or even longer, you know, you're like compiling down that C-sharp code, you know, it wasn't like text files safe. Like it wasn't that experience anymore. This got rather like bulky feeling here. It was back to like back to text files safe.
[01:01:01] and the experiences you could build
[01:01:06] dwarfed anything you could do with this. It wasn't even comparable.
[01:01:11] You had to accept that you're using JavaScript, but like...
[01:01:15] it got to a point that there was so much loading back and forth  during this period for anything that was like complicated that just like
[01:01:23] sending the JavaScript on the page, on a blank page,
[01:01:26] made your app feel like
[01:01:29] 10 times faster.
[01:01:31] And suddenly you weren't trying to layer your JavaScript inside your ERB templates.
[01:01:39] Thank you.
[01:01:40] Basically, this was just a large misalignment.
[01:01:44] in that there was no good way to build apps on the web.  You know, you had Flash, but like Flash was getting phased out.
[01:01:51] You...  Like...
[01:01:54] You didn't have...
[01:01:55] Like...
[01:01:57] Yeah, it's hard for me to put in words because like this, like when I first went into developing again into this phase, when I left from here to here, it was like the biggest weight ever had been lifted.
[01:02:11] Which is why you find a lot of pushback when people talk now about going back to the server.
[01:02:16] from a lot of people who came up during this time period.  Because a lot of them might have either started here  or cut their teeth during this time.  And if they were building a certain type of application,
[01:02:28] Like.
[01:02:28] you would never in a million years want to go back here.
[01:02:36] I had a CRA app take two minutes to start three years ago.  Yeah, I mean, we're getting...
[01:02:41] there again, but can you picture a CRA app taking two minutes every time you change the line of code?
[01:02:47] like that's more like that but i mean it's fine the difference is
[01:02:52] different feel to development, right? If you know your compiler takes a long time, you do more changes at once, you rely on the type system, you rely on all the tooling to make sure like if you ever use VS Code during this time period and still to this day, not VS Code, sorry, Visual Studios, Visual Studios was amazing, right? Like, it might have been slow and all this, but like the code completion for its time, like documentation link, all this, you felt that you could just like write the code
[01:03:17] And then like,
[01:03:18] it would work like you because like you had all the tools at your disposal and
[01:03:25] It was just very different than Notepad,  where the thing didn't work,  but then you're like, okay, it doesn't work.  Where is it fixed?  It doesn't work.  Okay, okay, got it, got it.  Like, you could...
[01:03:34] In a notepad file, you could probably change and refresh the page like,
[01:03:40] Who knows, a dozen times.
[01:03:42] before
[01:03:44] You know...
[01:03:46] you'd get one thing, you know, change. And
[01:03:50] This is why during this time period, stuff like again, stuff like I love stuff like even CoffeeScript or whatever, because it was like hyper prototype kind of language.  We didn't have TypeScript in JavaScript and we didn't care because everything was so fast.
[01:04:03] Um...
[01:04:05] And because we got getting away from static types was like very desirable.  Just like again,
[01:04:13] people
[01:04:15] Felt like it was a lot of ceremony.  It slowed down their development.
[01:04:19] Obviously, a large company wasn't ready to take on these early...  Like, this is all...  The people adopting this stuff early stages were all...
[01:04:28] They're all trying to change the way they did stuff.
[01:04:32] Big companies did not move to this technology in 2010.
[01:04:36] That's for sure.
[01:04:42] Yeah, nothing compared to Vista back in 2006. Definitely. Okay. So,
[01:04:49] Thank you.
[01:04:51] We went through a few cycles. It's so funny because
[01:04:54] If you watch Steve Sanderson's video, he basically spends like all of 30 seconds talking about 2010 to 2016.  He's like, and there's some JavaScript frameworks.  And then he moved on.
[01:05:05] But in a lot of sense,
[01:05:08] It's kind of true when you look at it from full picture,  because whether you pick Angular or React or Vue or whatever, you know,
[01:05:15] they're all kind of just doing the same thing fundamentally.  We could talk in microcycles about React's virtual DOM, and some of the choices React made actually end up impacting us down the line now.  But generally speaking, from a high-level perspective,
[01:05:30] New potential technology approach introduced to 2010s. It took till about 2013 or 14 for a technology that addressed most of the use cases to kind of get out there. I mean, there's a lot of different stuff happening during this time, right?
[01:05:47] Um,
[01:05:48] Thank you.
[01:05:49] And then by 2016, we had a clear winner, right?
[01:05:53] essentially
[01:05:55] And around that time, that's when large companies decided that maybe they should move off this because they want to deliver better websites.
[01:06:03] Because there's some benefits to having that single model. You can have a developer team trained in a single technology. Marco at eBay was developed in 2012, 2013 period, and all of eBay.com moved to it. So...
[01:06:18] They bet on JavaScript on their backend, not for their full backend, they have a Java backend, but for web
[01:06:25] The whole web server is all JavaScript.
[01:06:28] And.
[01:06:29] Obviously, there was like being e-commerce, there's a huge push there.  So the technology had to be very...
[01:06:36] performant that they couldn't lose against Java, essentially.
[01:06:40] in terms of performance, they had to maintain the speed.
[01:06:43] So Marco was made in a very specific way.
[01:06:46] But the point was that like...
[01:06:50] Thank you.
[01:06:50] the idea and
[01:06:52] You know,
[01:06:55] PayPal, a bunch of
[01:06:57] companies started going, okay, if I can hire JavaScript developers full stack, as they're not doing our APIs or our data services, but just to do our web services,
[01:07:06] you know,
[01:07:06] This simplifies things from whatever the hell...
[01:07:10] we were doing back here because this was a mess.
[01:07:13] Right?
[01:07:17] Yeah, TypeScript did come out in 2012.
[01:07:21] which was interesting because obviously,
[01:07:27] People like Microsoft ahead of the curve going hard on JavaScript are like, okay, yeah, we still need a type language.  Like, let's face it, you know, it's hard to develop large projects and not have contracts.
[01:07:39] Thank you.
[01:07:42] But I just kind of, the reason I'm focusing here, and let's put a few notes around this time period is,
[01:07:53] is
[01:07:55] I mean, call them libraries, whatever. JS Frameworks.
[01:07:59] Because let's face it, um...
[01:08:05] *sniff*
[01:08:07] Whether you call React library or framework,
[01:08:10] It definitely feels different than jQuery.
[01:08:13] There was...
[01:08:17] This side went declarative the same way that this side went declarative when it went to PHP.
[01:08:27] *sad*
[01:08:31] It was a significant improvement of quality of life for a certain type of application.
[01:08:39] But obviously...
[01:08:43] those days
[01:08:45] There is a trade-off here, right?
[01:08:48] And I feel like this is why 2016 is an important time period for marking that this mid life zone is I don't.
[01:08:55] think anything particular was released in 2016 that triggered this change.
[01:09:01] Right? Like...
[01:09:03] One of the things that happened around 2010,
[01:09:07] Well, actually...
[01:09:08] people might know, or 2011 specs were talking, we had HTML5, we had like,
[01:09:14] Like...
[01:09:16] But what I'm talking about, stuff like push state, stuff like
[01:09:20] Um...
[01:09:22] We started getting...
[01:09:24] Like, we needed to enable a new router paradigm here, because this is the dawn of client-side routing too.
[01:09:37] Thank you.
[01:09:38] like static web had one type of routing,  which was literally static routing,  right?  Right.
[01:09:47] This period had...
[01:09:49] server routing.
[01:09:52] And then this...
[01:09:53] time period added client routing. Like you can see where the big
[01:09:58] Swaps happened.
[01:10:04] Thank you.
[01:10:05] Thank you.
[01:10:12] Okay, let me see, Chad, how you doing?  React is a framework mentioned.
[01:10:26] Well, we'll get there.  See, the Chrome team and the guys working the browser
[01:10:31] basically were a huge part of
[01:10:34] of moving the web in a way that could compete with mobile through this 2005-2010 period.
[01:10:41] But as people started adopting this idea,
[01:10:45] technology, this kind of very early technology, they adopted it.
[01:10:50] Sup?
[01:10:51] certain degree very quickly. Not the biggest companies, but this was so new at the time. There's a reason why React has such a huge market share. You're starting from zero here at this change. They came in maybe later in the cycle, but they were the winner of this time period. And they're
[01:11:10] they represented...
[01:11:12] ultimately this whole change.
[01:11:15] So like...
[01:11:16] In the same way that this
[01:11:18] huge, this huge, so to speak.
[01:11:26] And yes,
[01:11:29] Client routing is where we started the drift off web standards and native browser functionally. Definitely. Because the problem was,
[01:11:35] the browsers just weren't
[01:11:37] capable of doing what was needed to be done.
[01:11:40] They were moving too slow.
[01:11:42] I mean, it's no fault of anyone.  They just literally, it just wasn't
[01:11:47] Like if you have, if you're running client state and basically your idea is to fight with an app, you know, with apps where basically the whole thing is client state, like.
[01:12:01] Thank you.
[01:12:03] What tools do you have
[01:12:06] to do this and it doesn't help see sometimes the thing is there's always other macro things that  happen during these changes right monolithic servers everything you know when do microservices get popular
[01:12:19] Around 2010. Coincidence? I don't know.
[01:12:24] Like...
[01:12:25] People realize that this stuff got bigger, didn't scale.  People, like...  Things should have always been restful, arguably, stateless.  But, like...
[01:12:36] There is no
[01:12:37] impulse not to, you know, like...
[01:12:42] this time period, like think about when did Twitter, when did Facebook, all these companies show up, 2005, they needed to change the way they were doing it. The dynamic wasn't dynamic enough.
[01:12:54] And don't get me wrong, they stayed mostly on the backend dynamic stuff, PHP type solutions.
[01:13:02] they are also mega companies.
[01:13:04] people wanting to get like a cheaper version of that without
[01:13:08] going into that level,
[01:13:11] Ended up just...
[01:13:12] going
[01:13:13] fully on these client side stuff rapidly, too rapidly, perhaps.
[01:13:18] things are still getting figured out, especially during this time period.
[01:13:22] Thank you.
[01:13:22] And
[01:13:25] Essentially...
[01:13:27] Even if
[01:13:28] if this is a single standard, in a sense, it wasn't standard. So,
[01:13:32] everything kind of split off here, right?  This red area continued on.
[01:13:38] and this green area kind of spurted out.
[01:13:41] Whereas like back here...
[01:13:43] it's kind of clear...
[01:13:46] that
[01:13:47] Thank you.
[01:13:49] like that this was almost strictly better. There was more computational cost required definitely, but
[01:13:57] Like, maybe not in the end.  But it is interesting when you look at this web  and you look at this web, the similarities.
[01:14:02] Like, think about when we start talking about static prerender and SSG and everything again, it's a throwback.
[01:14:08] to this web.
[01:14:10] Essentially.
[01:14:11] in terms of tech, in terms of technology.
[01:14:13] It's like skip those 10 years,
[01:14:16] go back, go to these ones, right?
[01:14:18] Thank you.
[01:14:19] The challenge, obviously, though, is...
[01:14:22] If you're not relying on the browser,
[01:14:24] You're not using the standards.
[01:14:27] You're shipping.
[01:14:29] Lots of JavaScript.
[01:14:31] Right?  JavaScript basically ran everything.  The model was so much simpler,  so much more capable of delivering what was there.  But you're like...
[01:14:42] It's just a ton of JavaScript.  And when people were making their small little apps,  or people were making these various things, that worked fine.
[01:14:51] But then the big companies started showing up, you know, around 2014, 15, 16.  They're like, OK, React's the clear winner.  We should we should give this a shot.  Netflix picked up React.  As I mentioned, Marco built their own framework.  You know, all this work has been going on internally in Google.  You know, everyone's kind of building their JavaScript frameworks because they wanted to have developers being able to be functional, you know, writing interactive apps.
[01:15:18] Thank you.
[01:15:20] And...
[01:15:25] It's one of those things where like,
[01:15:30] At some point around here,
[01:15:36] we started becoming conscious of this at a certain scale, but it was too early.  This is kind of the problem.
[01:15:42] Around 2000...  I need to make this shorter...
[01:15:47] Because it's
[01:15:49] Let's do that.
[01:15:53] Yes, routing.
[01:15:54] The thing is, 2016 is probably when Next.js showed up.
[01:16:00] Probably.
[01:16:03] But we started doing SSR, essentially.  Other, you know, because basically people were trying to use single page apps and like this doesn't really work for SEO.
[01:16:14] Not really. And...
[01:16:16] Like there's like there's pieces that are we that the web platform is built on that  we need to leverage.  And these tools, while they're like, you know, powerful, like Flash, they're not
[01:16:29] You know what I mean? They're not like
[01:16:32] giving us the same experience, right?
[01:16:35] you know, page being white,
[01:16:37] slow loading times on JavaScript.
[01:16:40] It takes a while because these kind of migrations take years.
[01:16:44] So,
[01:16:45] What kind of happened is 2015-16, the companies start going, okay, yeah, let's do it.  Let's move to React.
[01:16:52] Let's plan a two to three year migration.
[01:16:54] And it wasn't until 2018 that some people realized that, oh, crap, what a mistake we built.  See, the funniest thing is the developers were really happy.
[01:17:05] Right? But...
[01:17:07] I doubt the company's bottom lines were...
[01:17:11] But it took three years.  I remember Netflix was one of the earliest companies to go on React in 2014-15, and then
[01:17:21] 2017 they released something saying like, "Oh yeah, we're not using React on the client side."
[01:17:26] Like what? We use it for SSR. Well, I guess the SSR, even though React's pretty slow at SSR, I guess that...
[01:17:33] the they felt bigger impacted by
[01:17:37] the like the hydration costs and like the other rendering stuff in react that they just  server rendered react and then used sprinklings of js to update it some companies like amazon  never were able to move to any of these frameworks i'm calling out react but it's not just react it's  basically every javascript framework um with exception for those built for this use cases you  know things like
[01:18:00] Marco or Wiz or whatever, which wasn't even, isn't even open sourced. Like,
[01:18:05] They realized...
[01:18:07] that for a certain category,
[01:18:10] the performance
[01:18:11] was not up
[01:18:13] to snuff.
[01:18:14] Right.
[01:18:15] but they were already kind of sunk, right?  And if you listen to Alex Russell,  this is what he goes on and on and on about.
[01:18:22] Bye.
[01:18:23] There we go. Next was really sometime in 2016.
[01:18:27] Okay.
[01:18:30] Thank you.
[01:18:31] Right. Next, sorry, no. My problem with current SSW is it's stuck using JavaScript. Well, it's stuck using JavaScript for a really good reason.
[01:18:39] Like, we can talk about this from a fundamentals level in a minute, but think about...
[01:18:45] Single model, split model.
[01:18:47] SSR is just pre-rendering, it's just the static web again.
[01:18:51] like on top of
[01:18:53] of a model.
[01:18:55] There's no way...
[01:18:57] It...
[01:18:58] There's no way for SSR kind of not to be JavaScript unless you had a different language producing the exact same output because if you're trying to serialize
[01:19:07] Uh...
[01:19:08] a declarative model across the boundaries,  like, there's data involved, right?  The biggest thing with any declarative model  versus an imperative model  is imperative model, you have instructions.  You have one, two, three, four, five, you know,  you do, do, do, do, do.  Declarative model suggests transformation.  It's saying like, hey,
[01:19:25] I have stuff in a certain state
[01:19:28] I declared it.
[01:19:29] And then the output is...
[01:19:31] a related but different...
[01:19:34] output. So once you go declarative and you're going across
[01:19:39] boundaries.
[01:19:40] there's a bit of complexity there, especially because you're also
[01:19:44] writing code that executes. This isn't just static templates.
[01:19:48] You know, like...
[01:19:49] There's no part of the November old separation of concerns that would help in this situation, perhaps.
[01:19:59] But...
[01:20:00] But in another sense, it was also an inconvenient mental model to have...
[01:20:08] when your whole world lives in JavaScript.
[01:20:11] Because it's like those boundaries are artificial.
[01:20:14] By merging it all, like what React does with JSX, you have complete control of every aspect.
[01:20:20] So like,
[01:20:22] and you can slice things the other way, which is important in the browser
[01:20:26] for performance because
[01:20:29] How should I put it?
[01:20:31] You didn't want the Angular problem.  You didn't want to, like, dirty check the whole page.  I mean, obviously, like Angular 1 I'm talking about, or AngularJS, you want it...
[01:20:42] to have it sliced the other way.
[01:20:47] Okay.
[01:20:49] Yes, Netflix is still using React.
[01:20:54] Thank you.
[01:20:55] And Amazon.com is too huge to use. But I presume they could have made that choice at some point.
[01:21:00] the same way eBay did.
[01:21:03] Amazon of
[01:21:04] over of like back in say 2012.
[01:21:08] Could have made that choice or 2010 could have.
[01:21:11] Amazon today, probably not.
[01:21:17] So Amazon AWS uses React.  You might find React in sections of Amazon.  We had this at eBay.
[01:21:27] Contractors and teams would put React on widgets around ads and stuff.  But the core experience that they need to load and get those SEOs
[01:21:37] SEO Scores is not going to use React.
[01:21:43] you
[01:21:49] That depends a lot on Wasm itself.  And right now, Wasm is not...
[01:21:55] It doesn't like...
[01:21:56] .
[01:21:57] it doesn't address some of the issues that I want to talk about in a minute in itself.  The biggest problem, though, the crux is that to have the green model, you do need JavaScript.
[01:22:07] because you have the single language, right?  Like you, you, JavaScript's the only language in the browser.  You're stuck.
[01:22:13] So WASM could break the chain cycle. WASM being good enough would be something that would be notable enough to actually change the math here. Add maybe another one of these lines, but we're not there.
[01:22:29] silver light I didn't mention silver light but flash silver light almost the same kind of thing um
[01:22:38] Thank you.
[01:22:39] Yeah, Wasm has use cases. It is very good for certain stuff, but...
[01:22:47] The web still has this whole spectrum here where
[01:22:51] loading speed matters.  Because a lot of those performance concerns  I was talking about  aren't update performance things.  They just need to show the page pretty fast,  you know, for e-commerce and stuff.  But during this time period,  the people who were in the React zone
[01:23:05] didn't really care because they were building apps or competing against mobile. Mobile, you've got to download the whole app.
[01:23:10] Right. So around like up to this point,
[01:23:13] coming in this frame, we were like offline first PWA, like
[01:23:17] Like, who cares about the server, you know?
[01:23:20] you
[01:23:22] But so like, yeah, maybe this line should actually move further back.
[01:23:26] Like more to 2018.
[01:23:28] Because I brought 2016 as being SSR, you know, becoming a thing.  But the truth of the matter is the real change happened in...
[01:23:37] after this.  Like, when...
[01:23:41] the companies that adopt in 2015 realized the issues,  realized the performance thing.  And then they're like,
[01:23:48] Yeah, we need to do something about this...
[01:23:52] Right.
[01:23:53] Because
[01:23:55] I don't know what happened.  If you ever...  Do you guys ever watch Google I.O.  or, like, the...  Chrome developer summits and type stuff?  They do them every year.  Well, if you watched it in 2017...
[01:24:11] they were talking about
[01:24:13] maybe even 18, I can't remember,  but they were talking about PWAs, Purple, AppShell.  They're talking about Polymer and web components.  They were talking about like...
[01:24:25] this like PWA,  uh,
[01:24:27] Fueled future, offline first, power the browser, mobile. And then like the very next year is either 2018 or 2019. Zero mention of all that technology. And like it was just like,
[01:24:41] Let's talk about Next.js. And you're like, what? Well,
[01:24:45] It...
[01:24:46] This switch
[01:24:50] I think was fueled by...
[01:24:53] And this is kind of where I'm getting at is like,
[01:24:58] Something
[01:25:00] took us off
[01:25:01] what seemed like a very happy path.
[01:25:04] And that reality is that when people built the full thing with our client side rendered single page app,
[01:25:11] technologies.
[01:25:14] It was not...
[01:25:17] fully replaced the red stuff.
[01:25:20] Even if developing in the red stuff to get the certain app type features and stuff we wanted,
[01:25:26] was miserable,
[01:25:28] It
[01:25:29] wasn't strictly better.
[01:25:32] so to speak.
[01:25:36] Thank you.
[01:25:38] Thank you.
[01:25:40] Yeah, they ditched the PWA thing.  It's interesting, though, because like...
[01:25:45] If you look at...
[01:25:49] the way...
[01:25:52] Like a lot of the push towards, you know, the server again has to do with page load performance.  E-commerce has to do with these large companies that were expecting a certain kind of like
[01:26:00] native experience and getting slogged down when they went to single page app, but I
[01:26:05] Ironically, if you go to places in the world that have the slowest internet connection,
[01:26:09] where they still have a large amount of commerce, where people are buying stuff like
[01:26:14] Southeast Asia, areas of India, I believe.
[01:26:22] Like, they don't actually care as much about the page load performance, even though that's a metric that we kind of shove down everyone's throats. They actually, a lot of stuff is like mini apps, like offline first actually is their savior.
[01:26:39] ironically, not
[01:26:41] So like something though happened
[01:26:44] And I haven't put my finger on it exactly, but around 2018 to 19 time period,
[01:26:49] we suddenly were like, okay, let's give up on offline first and move to a server centric model.
[01:26:56] We need to do better. So, I mean, SSR already existed back to 2016, but...
[01:27:02] We need SSR. The problem is
[01:27:05] SSR?
[01:27:06] didn't solve
[01:27:08] the didn't solve the didn't solve the problem.
[01:27:12] SSR is funny. I'm going to do a little aside here on SSR.
[01:27:16] for a moment because people are like, okay, yeah, now we can see the page.
[01:27:21] But SSR does not
[01:27:22] actually reduce the size of your JavaScript bundle.  It makes it probably larger.  Like it could reduce it 'cause you like move some logic  into your API if you wanted to.  But generally speaking, it makes your JavaScript bundle larger,  which means that although you see the page,
[01:27:36] sooner, it doesn't become interactive any sooner.
[01:27:39] Um,
[01:27:42] So like...
[01:27:43] And now you are serializing all the data.
[01:27:47] that you need to reboot Hydrate the app. So...
[01:27:53] you're actually sending twice as much over the wire again, right?
[01:27:57] Remember, I was lamenting over the red zone where you're sending all this data over the wire.  I mean, it was brutal in updates because every interaction was like that.
[01:28:05] Here, you know,
[01:28:08] That initial load...
[01:28:11] took a significant hit.
[01:28:13] Like SSR in some ways...
[01:28:16] Um,
[01:28:17] can be slower, but don't get me wrong, like...
[01:28:19] CSR
[01:28:21] is also slow because then you have to wait for the JavaScript to load to even fetch the data.  So like don't don't don't get me wrong on that side.  I'm just saying like SSR doesn't actually solve the problems of CSR on its own.  Like it's in fact,
[01:28:34] In some ways, it makes a couple of problems nicer.
[01:28:37] Makes a couple things slightly worse.  On the whole, it's better.  Like, it solves the problems better, like, in the space, like, on the whole.  But it's not comparing to what we had back in the red days.
[01:28:50] Mostly because the red days were kind of broken, like they completely incapable of giving us, you know, that client side experience we wanted.
[01:28:58] But
[01:29:00] on the positive,
[01:29:01] for loading a website
[01:29:04] They didn't completely tank
[01:29:06] the performance.
[01:29:08] You could like look at a page without downloading the whole world and running a bunch of JavaScript and and whatnot.  Basically, SSR fixed one aspect.
[01:29:20] potentially,
[01:29:21] And
[01:29:22] But it didn't.
[01:29:23] It didn't actually...
[01:29:26] Like it still wasn't as nearly as good as the red zone for just that simple use case of I want to load a website.
[01:29:35] Yeah, yeah, this is a good point, Maddie, yeah, because...
[01:29:41] This is around...  That happened, I think, in 2020.
[01:29:45] We're already on this trend. I think Google saw the danger.
[01:29:49] And was like, okay...
[01:29:52] And things just keep growing and growing and growing.  We're going to put our...  You know, we're going to put our...  What is it?  Put our...
[01:29:58] What's the saying?
[01:30:00] where our mouth is, you know, like they decide that they're going to take action on this.
[01:30:03] and help correct the direction of the web.
[01:30:06] I believe that this really started becoming a factor in 2020, which is when things really started happening.
[01:30:13] accelerating in the current direction, but the seeds of it
[01:30:18] started back in 2006.
[01:30:20] Which...
[01:30:21] was the large companies trying to start or 2016 which when large companies started to try and pick up this model
[01:30:38] SSR plus H-C-S-1 alpine.
[01:30:41] Thank you.
[01:30:42] .
[01:30:43] I don't know if I should comment on this.
[01:30:45] Thank you.
[01:30:49] Thank you.
[01:30:51] Thank you.
[01:30:53] Because it's like what you're describing is using three different technologies.
[01:31:00] and kind of making them interact together to basically...
[01:31:04] do something that one technology could do in one go, so to speak, right?
[01:31:09] Like...
[01:31:12] And
[01:31:13] The weirdest thing about Alpine that always gets me is...
[01:31:16] it's designed to handle the client side part but it's like one of the slowest javascript frameworks and it's like
[01:31:22] much larger
[01:31:23] because we use the way people package it, I guess, because we avoid tools, then other solutions that would be better handling the client side aspect of it. It's like,
[01:31:32] It's like a slower reactive
[01:31:34] system, but what I'm getting at is  I don't know if there's
[01:31:38] a specific stack here. The problem is people right now are like, well, how do I solve this problem? I'm going to pick a different stack. The problem is all it doesn't matter what technology you choose, if you're still going to do the same thing that
[01:31:50] like,
[01:31:51] either solves or doesn't solve the problem.
[01:31:55] So like...
[01:31:57] Sorry.
[01:32:01] Like, this is why I want to talk about this high level,  because we actually got to talk about what the actual problem is
[01:32:07] because...
[01:32:11] Like...
[01:32:14] there's relative scales. The cost for SRR, that is hydration, right? But the thing is like,
[01:32:20] Hydration is not worse than CSR.
[01:32:23] so to speak, right? Like...
[01:32:26] You still...  Like, if you...
[01:32:29] If you SSR an app,
[01:32:33] The problem is more that SSR isn't a significant improvement over CSR.
[01:32:38] I think is the problem.  Like, in a sense, like...
[01:32:42] Rendering on the client is more expensive than hydration.
[01:32:46] fetching the data after the fact,
[01:32:48] from an endpoint after the JS loads in CSR is more expensive than serializing it into the page, generally speaking.
[01:32:55] And...
[01:32:57] Um,
[01:33:00] The only place where SSR is slightly worse is that the code is probably slightly bigger than the CSR version.
[01:33:08] When you include stuff like streaming in, then like...
[01:33:11] the into SSR then stuff like, uh,
[01:33:16] the timing of a of
[01:33:18] of requests that get significantly better
[01:33:22] than the CSR story, but
[01:33:26] It's not enough.
[01:33:27] That's actually the problem.
[01:33:30] And the thing is, is it enough for you who buildings like not you, Matthew, but like some buildings?
[01:33:37] specific person building a website using a spot framework.
[01:33:40] It might be.
[01:33:42] But generally speaking, as it scales, we know it doesn't.  There's a limit there.
[01:33:48] to it, right?  SSR can be better than CSR.
[01:33:51] you know, like client side rendering.
[01:33:53] generally speaking.
[01:33:56] But...
[01:33:57] It actually didn't push the dial enough
[01:34:00] in
[01:34:01] in the way that was impacting
[01:34:05] these companies moving from the red to the green, from this zone to this zone.
[01:34:14] Thank you.
[01:34:18] So I propose that's really quick. Why not just use quick then?
[01:34:23] Honestly, Quick does everything that Astro does pretty much.
[01:34:27] Maybe not the content collections, but from a pure technical standpoint. I don't want to get completely into it because it's a little bit more complicated than that. Let's continue here.
[01:34:43] Thank you.
[01:34:46] Calling things together with Arden and jQuery will... yeah. I don't know. I disagree hard on this, but it's fine. People might have rose-colored glasses, but...
[01:34:57] Like...
[01:34:58] Yeah, I did plenty-- I actually call this time period the Dark Ages for a reason.
[01:35:05] *sniff*
[01:35:07] Yeah.
[01:35:08] Yeah. Anyway.
[01:35:11] Quick doesn't hydrate, but it kind of does.  Depends on your definition of hydration, which...
[01:35:16] Let's talk about what these problems are.
[01:35:21] Thank you.
[01:35:22] Thank you.
[01:35:25] I think we're in the dark region now. I think that's fair. I think we are in the same way, we are in the end of the cycle here. We are the end of the cycle here.
[01:35:36] or beginning of the new cycle and we haven't seen it yet.
[01:35:39] We are definitely in the dark ages now, like by comparison, I'm very uncomfortable with
[01:35:45] how stuff is going.
[01:35:48] In that sense, like we haven't taken the full leap.
[01:35:53] on that side. I don't think we're quite as bad as it was there, but every...
[01:35:57] Every indicator suggests that we're heading towards another one of these
[01:36:03] zones like in that in that time period.
[01:36:08] Right.
[01:36:10] See, in some sense, jQuery was freeing.  So, like...
[01:36:15] because it was the start of this.
[01:36:20] but
[01:36:21] the the mix match of the technologies of the time was
[01:36:26] really awkward. Luckily nothing was too heavy that you couldn't work around because they had clear responsibilities. Our problem right here is there's no clear responsibility. This is why. We merged everything together and now we can't split it.
[01:36:39] But we merged it together for...
[01:36:43] We...
[01:36:45] We merged it together
[01:36:49] For good reason?
[01:36:51] It's all about...
[01:36:52] boundary alignment, but sometimes we got to realign our boundaries.
[01:36:58] .
[01:37:04] Gary is talking on expansion, contraction, or capability versus suitability fits a lot here.  Natural expansion phase on capability is now hitting pressure to contract to suitable solutions.  Yeah, yeah, no.  And that's happening, yeah, a ton right now.
[01:37:19] we're so interested in stuff that does less, right?
[01:37:23] On one hand, stuff like HTMX is showing that, hey, look, we can just do partials. Nice. Or Astro, they're kind of in the same kind of category.
[01:37:31] Um...
[01:37:33] Signals actually are that.  We've boiled all of the...
[01:37:37] modern front-end web development now to a simple primitive that just updates.
[01:37:41] That's why people are stoked on solid, generally speaking, because instead of like being like having all these frameworky things, we do have those constructs.  But someone conceptually can just walk in and go, OK, signal update UI.  It's kind of like jQuery almost like in that sense where you're just like I declare some signals and then my UI updates like you kind of have that same really low level simple feel, especially when you go div and you get an actual div in your hand, not some virtual DOM element or something.  So.
[01:38:09] I see it.
[01:38:12] Is it possible that the Dark Ages are simply the result of building more and more abstractions on top of an idea than fundamentally wrong? No, that's exactly what I think the problem is. But I mean, fundamentally wrong might be strong, but generally it's like you keep on going down this path and then you're like...
[01:38:30] you make too many assumptions at the base that you can't like, uh,
[01:38:35] pivot or change the direction.
[01:38:42] Most of the invention is CW source, right.
[01:38:46] So, I mean, we can blame large companies moving to this model.  We can blame Google's focus on core web vitals,
[01:38:56] to be pushing this. But mechanically,
[01:39:01] we're in this zone where there's this tension now between
[01:39:07] you know, a desire clearly because we're in a green phase right now of keeping
[01:39:11] this model and then delivering on the goods, so to speak.
[01:39:18] So would the component problem be wrong? This is one of the ones that people argue the most.
[01:39:23] And the answer to me, like, because Matthew Phillips talks about this a decent amount.  My perspective on this is that, like...
[01:39:32] Yes and no. Usually we overcompensate when we go to the next phase, we pendulum it a bit too much.
[01:39:38] My gut is that the component model has a lot of nice properties that we want to keep, but it's not like we can't...
[01:39:46] Put it
[01:39:47] like can't take it in its on a whole. I mean, this is this is this is what my argument's been with solid, right?
[01:39:55] that components are useful abstraction for the developer, but not useful from the runtime.
[01:40:03] Amen.
[01:40:12] Yeah, no, it's...
[01:40:15] And there's companies that do stuff like signals on the server, even stuff like Convex.
[01:40:21] Thank you.
[01:40:24] Actually, going back to this comment, I should probably bent and see what you linked just, you know, because...
[01:40:31] You linked it, so let's see here.
[01:40:35] Oh, this is a great one.
[01:40:38] Oh, I love I love I like this because I was literally talking.  I was having this exact conversation with Dev before the stream.
[01:40:46] Sometimes another layer of abstraction is not the answer, and sometimes the path that led you to believe that you needed one actually should tell you that you've built so many layers on the wrong foundation that it's time to burn it all over and start over. I like this idea.
[01:40:55] I don't...
[01:40:56] This is...
[01:40:58] I'm going to bring this back in in case I want to talk about this later.
[01:41:02] Um,
[01:41:05] And I mean, it comes down to something.  I mean...
[01:41:09] you can always add another abstraction,  but it's almost impossible to take one away, so to speak.  Like, you can always make something...
[01:41:18] Easier.
[01:41:20] to do, but you can't
[01:41:22] make it simpler.
[01:41:23] Like,
[01:41:25] Um...
[01:41:26] Thank you.
[01:41:28] And the adding abstraction is basically a sign of complexity.
[01:41:35] So...
[01:41:38] Yeah, I...
[01:41:39] This is great.
[01:41:50] Thank you.
[01:41:54] .
[01:41:59] see okay this is what i was trying to say a bit earlier csr and spas are bigger issues for  emerging markets they definitely are but the ironic part is a lot of them prefer a lot of  those markets prefer offline first over to faster server rendered stuff anyways like  was i mentioning mini apps and stuff so it's like
[01:42:17] It's kind of a really odd tension where...
[01:42:21] I wonder if we're missing the point. Don't get me wrong, large companies
[01:42:25] Okay, like think of a global e-commerce company like eBay.
[01:42:29] right?  Collect metrics out,
[01:42:31] everywhere, right? Like,
[01:42:33] device speeds, everything as much as possible. Sales directly related to bounce rate, like,  there is a huge amount of research, um, externally and internally,
[01:42:42] Stuff that I can't share, obviously, from my time period being there.  But, like...
[01:42:48] It made a huge difference, the performance characteristics that I'm talking about in terms of page load, in terms of like...
[01:42:56] uh,
[01:42:57] you know interactivity being you know, but
[01:43:02] There's this other side that I always wonder about is like,
[01:43:05] If you never get there, like if you bounce, like if your internet is that bad, you're slipping through the metrics. Like sometimes you can improve the performance of your page.
[01:43:15] and get worse metrics because now you're picking up more of the people who have slower connections than you did before or like cases.  We've seen this happen before, which is really weird where you're like, I did a bunch of performance improvements.  I can visibly see the performance improvements, so to speak, but I'm like, but but like I'm getting worse, worse metrics.
[01:43:38] It's kind of like...
[01:43:41] It's kind of like...  I mean, I don't know if any of you guys watch Theo Brown on YouTube.  And he likes to talk about his YouTube stats and stuff.  And he says sometimes he wants worse metrics.  Because like...
[01:43:52] like worse click through because like the viewership's higher.
[01:43:55] kind of scenario. It's like that effect where sometimes
[01:44:00] Um,
[01:44:02] you
[01:44:04] like sometimes it's better to actually get more eyes on it, like get more things through it than actually have like other metrics. And in fact, when you get more eyes on it, it will drive down the other metrics.
[01:44:21] No, I'm not there again.  I was always...
[01:44:27] With everything balanced,
[01:44:35] I'm sorry.
[01:44:40] I wonder if vanilla.js was his framework.
[01:44:43] It would be the winner of the JS Framework benchmark.
[01:44:48] Yeah, and that's the whole thing, right?  Like, this is the thing, though.  Sometimes you just want to restart.  Like, you pick up HTMX, for example, and then you're like, you know what?
[01:44:56] I'm just gonna write vanilla JS because I don't need much. So, you know, changes that go to the server, I'll use htmx and then I'll just patch the rest of vanilla JavaScript. I don't need a declarative model. And as I said before, if this is good enough for you, then you're fine. But what I'm getting at is,
[01:45:11] There was
[01:45:12] a need to go here in the first place and there was a need to go here
[01:45:16] Afterwards.
[01:45:18] So for this side
[01:45:21] The green spectrum here
[01:45:23] - Yes.
[01:45:24] they've been trying to solve hydration.
[01:45:27] Right?  That's been basically the goal of this whole...
[01:45:31] era here, right?
[01:45:35] So they're like, they're like, we have to solve hydration.
[01:45:38] because
[01:45:39] The thinking is, if we solve hydration,
[01:45:44] like actually solve it, then there's no
[01:45:47] reason
[01:45:49] to compromise, add the complexity in like
[01:45:55] Make it more complicated for the end user.  I'm going to use the word complicated here.
[01:45:59] Um,
[01:46:00] because we can keep our single model
[01:46:04] And if you could solve hydration, so to speak, then...
[01:46:08] Um,
[01:46:12] Like, why would you not just keep...
[01:46:15] over here. There's no reason to go back here.
[01:46:20] You have the full interactivity view one of apps.
[01:46:23] and you have all the page load
[01:46:26] considerations that you have of,  uh,
[01:46:30] of, you know, this kind of time period, right?  Like, what if we could like unify the models?  What if this wasn't red and green?  What if...
[01:46:39] if the new section out here
[01:46:42] Whatever comes next
[01:46:44] I don't have that color.  I'm like, what if it was purple?  You know, like...
[01:46:49] I don't think I have a purple.
[01:46:52] Whatever. Like, what if...
[01:46:55] Thank you.
[01:46:55] What if we could like...
[01:46:58] 'Cause I'm gonna say that there's another line here,  and that line is a moving target,
[01:47:04] Um...
[01:47:06] But.
[01:47:08] this is what's driving everything.  And the weirdest part of this,  this phase has gone...
[01:47:15] Like you think we would have got here already, right?  Like if you look at the history of the web  and the time period here, like this was relatively short.  This was about a 13 year period.  This was about a 13 year period, do you think?  Like we should be here,
[01:47:29] Stuff like React Server Components suggests that maybe we're on the
[01:47:32] verge of here, but
[01:47:34] The problem is
[01:47:36] Have we solved the problem?
[01:47:39] So speak. What is hydration?
[01:47:40] It's execution-
[01:47:42] Cost.
[01:47:44] Oh.
[01:47:46] on page load. It's
[01:47:48] It's code
[01:47:50] Actually, let's start.
[01:47:53] code size
[01:47:55] And this affects like
[01:48:00] This is a bandwidth...
[01:48:05] parsing cost. It's like both. It's an execution cost, you know, of what you actually run when you  load up the page. And it's a serialization cost that you also pay on both sides, like the data  that you need to send and parse on both sides. Hydration can be broken down into basically three categories:
[01:48:24] And
[01:48:27] The awkwardest thing here is
[01:48:31] Okay.
[01:48:33] No solution has actually, like, is this even solvable?  I wrote an article about a year ago.
[01:48:39] about solving hydration.
[01:48:42] And I was talking about Quick and Mark 06, you know, solutions that work on resumability.  But...
[01:48:48] Like...
[01:48:51] In my opinion today, no solution has perfectly...
[01:48:54] completely solved hydration.
[01:49:01] Thank you.
[01:49:04] Okay.
[01:49:12] Thank you.
[01:49:14] Yeah.
[01:49:15] Thank you.
[01:49:17] Thank you.
[01:49:19] Yeah, and I think this is important.  There is always two sources of truth.
[01:49:24] Every website starts from the server.
[01:49:26] So like...
[01:49:28] Thank you.
[01:49:28] Even with the unified model, the only difference is in one model, it's like,
[01:49:34] It's like...
[01:49:36] you know,
[01:49:37] the, the,
[01:49:38] It's.
[01:49:39] It's kind of like
[01:49:41] Hmm.
[01:49:48] Yeah, I don't know how to put this. I'm trying to think of if I can draw up with circles because like like in the in the more spa like
[01:49:55] model.
[01:49:57] It's more like there's like a server over here.
[01:50:02] and
[01:50:05] a certain subset of the...
[01:50:09] So
[01:50:10] of the spa, so to speak.
[01:50:13] is
[01:50:14] is kind of designed
[01:50:16] Maybe I'll give it like a little bit of
[01:50:19] like to be a proxy of the server, essentially.
[01:50:23] And then...
[01:50:25] like communicate
[01:50:28] both directions.
[01:50:30] Right. It's like you have the server here and then you have a proxy of it communicating both directions.  And like this is kind of like the spa model, whereas like.
[01:50:42] You know,
[01:50:43] the more even keeled model, so to speak.
[01:50:49] where you have like the distinct split
[01:50:52] these circles might be closer
[01:50:55] in size.
[01:50:59] And there.
[01:51:00] - Yeah.
[01:51:02] And
[01:51:04] -
[01:51:07] Interestingly enough,
[01:51:09] maybe a little bit smaller.
[01:51:15] this is almost...
[01:51:18] projected
[01:51:19] Out.
[01:51:21] of it. It's like you took a piece out of it and
[01:51:25] Put it up there.
[01:51:28] Right? Like it, it almost like it shot out from here, you know?
[01:51:35] That's... I don't know. My drawings are probably crap, but I don't know if...
[01:51:43] If...
[01:51:46] If that makes any sense, like one
[01:51:48] There's also server...
[01:51:51] first models, which are basically the opposite of this, right? Where this is
[01:52:02] bigger.
[01:52:05] And then there's...
[01:52:08] a
[01:52:09] Very small client.
[01:52:14] Thank you.
[01:52:15] that is essentially...
[01:52:19] Uh...
[01:52:21] mimic of a client synchronization place on the server.
[01:52:26] Right.
[01:52:28] So like this last drawing I'm doing is like a Phoenix live
[01:52:32] live live view or whatever right like when you maybe use web sockets or something you know
[01:52:38] Right.
[01:52:40] Okay.
[01:52:42] Thank you.
[01:52:43] Thank you.
[01:52:45] Okay.
[01:52:45] I'm not sure if I'm conveying this properly with my Excalibur draws here. This is not something I practice. I'm just thinking out loud.
[01:52:59] Thank you.
[01:53:03] Thank you.
[01:53:04] Let's get rid of the boundaries. Well, this is this is not exactly simple.
[01:53:15] Thank you.
[01:53:17] Okay, let's talk about why not.  Well, okay, first of all, the reason I can still consider resumability a form of hydration is a weird one.  It's a technical one, not one that doesn't actually...
[01:53:30] Um...
[01:53:32] One that doesn't actually...
[01:53:36] you
[01:53:37] probably makes sense to a lot of people when most people define hydration as like
[01:53:41] you know, whatever it takes to make the app interactive.  But I was trying to figure out a while ago,  why is quick different than jQuery?  Because I always say like hydration wasn't a problem  that we had in the jQuery days, you know,  classic, you know, kind of statement.  And the difference is that jQuery is not declarative.
[01:53:59] So it has no intent, it doesn't
[01:54:01] care about the state of the app. It inspects it on execution. So like,
[01:54:07] I give this a sec.
[01:54:08] last stream.
[01:54:10] But if you rendered a page on the server that may or may not contain a certain section, and you run the jQuery code that updates that, you know, on interaction, the jQuery code is going to look at the DOM and go, oh, is this here?
[01:54:22] Yes or no?
[01:54:25] then I'll decide to do the right
[01:54:28] the right thing.  But like even with a resumable framework,
[01:54:33] you have the expectation that the thing that ran on the server...
[01:54:37] is in the same state as the client. Even if you're not hydrating it, you expect that your data  is right. Like the state that you serialized
[01:54:46] Is correct.
[01:54:48] You know any modern declarative framework isn't going to introspect the DOM because usually you don't want to do that on a per operation basis. It's slow and
[01:54:56] So like,
[01:54:57] Even if quicks like I'm not hydrating,
[01:55:01] when it wakes up it expects things to be there.
[01:55:03] So even if it's not doing that extra work,
[01:55:07] Quick has solved the execution cost problem in a beautiful way.
[01:55:14] Okay.
[01:55:16] you
[01:55:17] You
[01:55:19] are still in the category of hydration because you need the state to match. That is why
[01:55:25] I still consider hydration. Now, why have I said that quick hasn't completely solved hydration? That's a slightly different
[01:55:32] question answer.
[01:55:35] It's...
[01:55:36] Because, and don't get me wrong, it is possible using...
[01:55:41] a technology like quick to, uh,
[01:55:45] basically zero or to,  to,  to kind of,  how should I put,  to solve it to a certain extent,  but basically,
[01:55:52] I described
[01:55:54] hydration is three pieces.
[01:55:58] And each of these has their own consideration.  Resumability is...
[01:56:02] is the solution is a solution
[01:56:07] is a solution here.
[01:56:08] to code execution. It's not the only solution, but it's an absolute solution in the sense that
[01:56:14] You just don't run the code.
[01:56:17] Partial hydration solutions, like ILINs or RSCs, just don't run some of the code, but they do run others. Resumability, for example,
[01:56:26] the ability to not run the code,
[01:56:28] doesn't run the code, right?
[01:56:31] Code size.
[01:56:33] Again, you can have different types of solutions. Partial solutions like islands or, you know, React server components,
[01:56:41] Solve code size partially.  Quick.
[01:56:45] Or something that's just resumable doesn't solve code size. So quick has a second mechanism for lazy loading, which is separate from resumability. It's kind of like progressive hydration. Again, it's awkward calling it hydration because it doesn't execute. But if we're okay calling this hydration because of the fact that the states have to match, there's still that requirement.
[01:57:06] Sorry.
[01:57:07] Let's get me out of here.
[01:57:10] Then
[01:57:11] quick solves code size using progressive hydration.
[01:57:15] which means it loads incrementally.
[01:57:18] versus
[01:57:22] you know, say like islands or RSCs, which load only parts that it knows for sure. See, in this sense on code size,
[01:57:29] Islands on RSCs are absolute. They know this is server, this is client.
[01:57:34] Quick does not know.
[01:57:37] It could be either or.
[01:57:38] So it just loads it
[01:57:41] as it needs it and tries to be smart about it. It can use static analysis, because it can use the fact that it has a fine-grained reactive system. So it can go, "Look, if you can't write to this state, then we know it can't change," which means that
[01:57:55] Um,
[01:57:56] which means that we don't need the code for that, right? So Quick is pretty smart there, for example.
[01:58:04] Which leads me to the last problem: serialization and data, the double data problem.
[01:58:10] Islands solve the double data problem because the stuff you don't need to hydrate
[01:58:15] you don't need the data for, so you can basically only ship the data you need for the client components you need. So,
[01:58:22] any kind of static HTML you don't need the data for, you know.
[01:58:25] stuff that doesn't update.  RSCs in theory could solve the problem, but they don't,  because it's complex when you have the async model  of something like React.
[01:58:35] And
[01:58:36] They end up serializing everything twice, both as HTML in the rendered markup and as JSONX or whatever the JSX transform port thing. So they actually don't solve the double data.
[01:58:50] Quick,
[01:58:51] can use that same static analysis I was talking about before in terms of what can change to solve the serialization problem. Except
[01:58:59] Here's the challenge.
[01:59:01] What happens
[01:59:03] If
[01:59:07] the point of change is at the top of your app.
[01:59:10] Like you say, have a client side router.
[01:59:14] What happens?
[01:59:16] Thank you.
[01:59:18] A system
[01:59:19] With explicit boundaries, like server components or islands,
[01:59:23] but not islands because
[01:59:24] islands are
[01:59:25] Kind of like MPA, but...
[01:59:27] they're server routed, but a system with serialization boundaries that are clear and marked like server client, knows 100% like this can't come to the server so it doesn't have to worry about it. But a system that's based on analysis
[01:59:41] doesn't know
[01:59:43] that. It can't. There isn't a separation of the trees.
[01:59:46] you hit a decision point, it could go either way. You may need this code later.
[01:59:51] right? And this applies to data too, right? Even though you don't read from the data  initially, you might need that data afterwards. It could be on code you have
[02:00:00] It could be on a different page if you're talking about client-side routing.
[02:00:04] So once you got client-side routing,
[02:00:08] Unless you can promise complete isolation, and I know Quick's been working on some kind of solutions in that zone, but I actually don't know what the solution looks like.
[02:00:16] you actually don't solve the data serialization problem.
[02:00:20] And it's tricky because
[02:00:23] The size.
[02:00:25] of the data serialization might actually increase when you do resumability  because that's what you're trading for the execution cost.
[02:00:32] So,
[02:00:34] I know.
[02:00:35] that Quik's working on their next version that improves their approach to serializing.
[02:00:40] And that.
[02:00:42] hopefully will make the resumability serialization cost even less.
[02:00:46] you know, than it is today. But what I want to point out here is
[02:00:49] from a pure abstract theoretical standpoint, talking about these different trade-offs,
[02:00:55] No solution actually solves all three of these clearly, cleanly. There's always some kind of trade-off.
[02:01:02] Right. You could argue that islands come the closest of ticking off all the boxes here.
[02:01:09] And that may be resumable islands.
[02:01:11] Um,
[02:01:12] Do so.
[02:01:14] -
[02:01:16] But
[02:01:17] They haven't sold client-side routing.
[02:01:20] So if you're going into application mode and you're dealing with data and you're in that zone of thinking,
[02:01:25] then
[02:01:26] this isn't actually...
[02:01:28] a solved problem.
[02:01:29] Because
[02:01:31] Thank you.
[02:01:32] The difference between islands and RSCs is that
[02:01:35] tagging client side routing onto islands
[02:01:38] does not make them RSCs.
[02:01:41] There's problems with that fundamentally, which I've talked about in previous streams.  That's actually what my last stream was about, was about how just tagging, you know,
[02:01:51] view transitions, flamethrower, turbo onto islands does not make it RSCs.
[02:01:58] Anyway.
[02:01:59] I'm sorry, a little bit of side rant, but I hope that answers your question.
[02:02:09] Thank you.
[02:02:10] Thank you.
[02:02:12] I hope it wasn't blocking anything too important.
[02:02:17] *laughs*
[02:02:18] uh,
[02:02:19] Thank you.
[02:02:21] and this is
[02:02:31] This is kind of
[02:02:32] the problem we have right now in general
[02:02:37] when we look at this problem space. It's that
[02:02:41] We're trying to, we've been approaching this like it's something we can solve.
[02:02:46] Because...
[02:02:48] Um...
[02:02:50] is we desperately want to solve it.
[02:02:54] but I like it.
[02:02:57] I'm concerned that
[02:03:00] Every set of trade-offs
[02:03:02] is presenting us with a difficult challenge. One of the kind of...  Where I can reason that I'm kind of getting cured right now is like another way to look at this is
[02:03:15] that we haven't talked about is a theoretical RSC model
[02:03:19] could be
[02:03:22] The best.
[02:03:23] option that does everything.
[02:03:25] What if you had explicit client-server boundaries...
[02:03:29] So the code size reduced significantly.
[02:03:33] Thank you.
[02:03:34] you had a solution where the islands were resumable.
[02:03:39] So the execution cost
[02:03:41] was
[02:03:42] Basically none.
[02:03:44] And because you're using server components,
[02:03:47] And you...
[02:03:48] do something smarter than what RSCs do today,
[02:03:51] you keep the properties of islands and you solve
[02:03:54] data serialization. Did this goal
[02:03:58] has been what I've been after for the last little while.  This is why when people talk to me about, oh, what if I mix Alpine with HTMX or whatever?  I'm just like, sure, go for it if it works for you, because
[02:04:11] If you combine it like that, you're not solving
[02:04:16] this.
[02:04:16] like,
[02:04:17] you're not building the system that can handle
[02:04:20] all three of these cases. You're just kind of
[02:04:23] Doing something that works for you.
[02:04:27] So like...
[02:04:29] In this sense,
[02:04:36] It's why I think a lot of people are excited about RSCs, that if someone could implement a better version than React has today, and React knows that they're still improving it.
[02:04:46] Could that be this next thing?
[02:04:48] and
[02:04:50] And a lot of...
[02:04:54] Thank you.
[02:04:58] Thank you.
[02:05:00] Yeah, so Shai's reiterating what I said about quick serialization costs substantially, which is reducing the...
[02:05:08] the resumability cost into serialization.  But we still have the core serialization data
[02:05:14] data concern.
[02:05:16] Thank you.
[02:05:20] I think this is interesting.  I mean, this is the kind of out-of-the-box thinking you have to think of.  The only problem is...
[02:05:29] Thank you.
[02:05:30] Thank you.
[02:05:31] How do you solve getting rid of client side routing and making stuff still
[02:05:36] Good.
[02:05:41] It's interesting.
[02:05:47] Thank you.
[02:05:50] Because we want to persist state.  That's the whole point.  If we did not, like, no, this switch wouldn't have happened halfway through the red zone, like Ajax, if we didn't want to persist state.
[02:06:03] Thank you.
[02:06:12] But the challenge I've had on the RSC side,  just kind of put it out there, and I wrote an article  or another one of my HackMDs,
[02:06:18] This is a...
[02:06:20] And HackMDs is I
[02:06:24] I'll share this with you all here.  See if you...
[02:06:31] faster yeah no I don't think that's enough
[02:06:34] No, we need to persist. The persistence is the key.
[02:06:41] Thank you.
[02:06:43] Thank you.
[02:06:45] Thank you.
[02:06:52] I actually, I made a comment here, because I was struggling with some data loading API stuff, right? I was trying to figure out
[02:07:00] what to do, because I made a realization, I was talking about it, where I was saying that like,
[02:07:05] The interesting thing about RSCs is once you go to the server, once you invalidate, you have to fetch all the data again, unless you have server-side caches, which anyone who's doing a server backend goes, oh, of course, you know, but it's because we've entwined the whole server tree together too much.
[02:07:21] And
[02:07:22] Um, I kind of...
[02:07:24] laid it down in this article here where I was saying that
[02:07:29] Like when you talk about client versus server component data, like...
[02:07:32] Client component data can be fetched initially during SSR, it can be stored in the browser, persist client navigation, and can be updated granularly
[02:07:39] and cause granular updates because
[02:07:43] you're not starting from an endpoint. You're not starting from a single source. You're doing a bunch  you can make it as micro as you want. You have signals attaching the data to every piece
[02:07:55] that updates.
[02:07:56] - Thank you.
[02:07:57] Server component data lasts the life of the request unless you opt into some other persistence.  Rendering is always a new creation, it's never granular, it's always top-down.
[02:08:06] All data required to render UI must be present in order to render on the server.
[02:08:10] See, the difference of the client model is because you persist that temporary state, you don't generally fetch it all when you do updating a part that's not related. On the server,
[02:08:19] generally, if your life is only as long as the request,
[02:08:23] like you're restful.
[02:08:24] you're not stateful, then
[02:08:28] you have to
[02:08:29] Right.
[02:08:30] it's a little bit more constrained.
[02:08:32] Code data for UI is not required in the browser. That's the benefit here.
[02:08:40] In a sense, people who've been building apps in React
[02:08:46] you know, for the people who've been living in this zone here,
[02:08:51] Server component data doesn't necessarily give them that same level of control and power.  It's the slippery slope that I was talking about last week from...
[02:09:00] from going from GraphQL or the really client cache heavy stuff to the server style.
[02:09:06] But,
[02:09:08] Thank you.
[02:09:08] I like, it's not that important. I lay out how I could design an API
[02:09:13] that could do everything in single flight, like mutations,  do key-based invalidation.  And basically, it doesn't matter.  This is using solid...
[02:09:22] I explain how every piece works from client-only routes to client mutations. This is just like, it could be done in basically any server component framework. It's a different pattern than what Net...  I think like the Remix guys, if they implemented RSCs, would be interested in this approach because it kind of covers the whole basis. But like,
[02:09:43] it's actually more like TanStack.  It's more like Tanner's, like, query stuff.
[02:09:49] you know, with the data because
[02:09:51] and the key-based validation.  Because if you combine the knowledge of keys  and routing data together,  you have the ability to do granular
[02:09:59] updates, single flight, and you put that with streaming and stuff.  Basically, I came up with this really cool system that does kind of
[02:10:08] everything you want except for there's this one little snag  if you want granular updates and data
[02:10:14] It has to be in the client.  And if you...
[02:10:16] And the stuff that doesn't update often has to be in the server.  And that sounds like a reasonable split.
[02:10:22] I guess. But it means that  for the stuff that
[02:10:26] that updates that much, then you don't get to leverage all the hydration
[02:10:31] benefits. So there's this argument that over time,
[02:10:35] You just move everything to the client anyways.
[02:10:39] And...
[02:10:43] I think this is sort of where like this tension arises because ultimately,
[02:10:49] Funnily enough, the server component model
[02:10:51] is
[02:10:53] two models beside each other, especially as in React.  And here I actually presented a unified data model,  so you can actually use the exact same APIs  on client and server and have them do a wonderful handoff.
[02:11:03] I don't want to necessarily get into this too much, but you can see that the client component and the server component both use create async.  They basically...
[02:11:12] both can leverage
[02:11:15] cache and action functions.
[02:11:17] And they do exactly and invalidate exactly what they need to.  But,
[02:11:24] you there is definitely two systems just having rscs didn't save it like you have async components  if i'm talking react and use components in the client using tan stack query or whatever like
[02:11:36] We have two data fetching models.
[02:11:39] - Yeah.
[02:11:40] to leverage the benefit of both systems. And it's not only the data, but the view rendering that's impacted by the split of this decision.
[02:11:49] So, as I said, this is a pretty sweet proposal.  You know, I could see...
[02:11:57] You know, I even talk about like maybe React type patterns where we get rid of the hoisted load.  There's definitely tradeoffs to there.
[02:12:04] you know,
[02:12:05] And
[02:12:07] I kind of dismiss it.
[02:12:09] Ultimately,
[02:12:10] I think...
[02:12:12] you need to be aware of...
[02:12:16] If you're aware of route data,
[02:12:18] You basically have the ability to do single flight and get rid of waterfalls on the client.  That's the biggest thing.  React wants to pull everything into RSCs so that you can remove client data fetching waterfalls.  But then they can't...
[02:12:31] But then the granularity
[02:12:33] doesn't kick in.
[02:12:34] You need the granular, you need to move your client. There's this tension.
[02:12:38] And
[02:12:39] Ultimately,
[02:12:41] where it has me wondering
[02:12:43] And this is kind of where I'm kind of getting to is we understand the problem space now and we're understanding what these solutions are starting to look like.
[02:12:50] You start going...
[02:12:52] Is the develop, like...
[02:12:55] is the developer experience actually better here?
[02:12:58] Like I've tried my best to unify both models so that you're not like getting  torn out and be like,  have a whole crap load of concepts.  You don't want to like have like,
[02:13:09] like different data fetching models on the client and server and have to like think about how that handoff, you just want it to kind of just work. That's why I designed this system.
[02:13:17] But...
[02:13:18] and
[02:13:19] If you go down this path,
[02:13:22] If the dx...
[02:13:24] Developer experience.
[02:13:26] isn't less.
[02:13:27] Right? Like you're basically just having the old system you had before because you still have to fetch certain data from the client technically to handle its mutation cycle. It's declarative, right? It feeds in a single loop. The source is the thing that does the rendering. You can't like...
[02:13:42] disperse it because if it's on the server you won't have the code to render it in the client, right?
[02:13:46] And
[02:13:47] And if it's in the client, then, well, you need the code there.  So, like...
[02:13:53] essentially you lose the benefits for hydration.
[02:13:58] So I started wondering, like at that point,  are server components just an optimization?
[02:14:06] not a DX improvement because you still have to handle both.
[02:14:10] Which is...
[02:14:12] Interesting, because as I was trying to say before, a lot of these... DX and UX are not separate. I care about UX a lot more, but you have to actually think about...
[02:14:21] both of these things when designing because you want the developer to fall into the pit of success  so to speak. You want
[02:14:27] them...
[02:14:28] by using what you give them to produce
[02:14:31] Good UX.
[02:14:33] That is the goal. I care about DX as far as you producing good UX. If something
[02:14:37] If DX,
[02:14:38] just impacts the developer and doesn't impact the UX. It's much lower for me on my priority scale.
[02:14:45] But...
[02:14:46] The interesting thing about introducing new models, things like server components, is you have a chance to realign the boundaries
[02:14:52] And in so...
[02:14:53] find some simpler approach to it.
[02:14:57] And then, yes, there's gonna be trade-offs, there's gonna be other places, but if you keep the model simpler,
[02:15:04] Thank you.
[02:15:06] and can accomplish the UX that way, then the DX actually becomes quite important.
[02:15:10] You might even sacrifice a bit of UX
[02:15:14] if you know that more people will be successful with that model.
[02:15:18] Yeah.
[02:15:19] But if the model doesn't improve the DX, it's...
[02:15:25] and is purely a UX improvement when you know what you're doing,
[02:15:29] then you start questioning if there's not better ways to get that UX improvement.
[02:15:35] So what I'm kind of saying is,
[02:15:38] are other technologies like if
[02:15:42] I mean, it's related to like maybe client side routing is the mistake.  I'm not going to say it is because I don't see another solution at the moment there.  But...
[02:15:54] is the complexity to achieve something  like an optimal version of server components
[02:16:00] worth the amount of work
[02:16:02] to build compared to investing in other optimizations like resumability?  That's the interesting question. And especially if
[02:16:10] Nobody has actually solved everything yet.
[02:16:14] Is it even solvable because of the innate nature of declarative data going over a boundary?
[02:16:20] you
[02:16:21] The more we waste cycles here, I don't know if it's wasted, the more this is going to feel like the end of the red section before, or that Dark Ages.
[02:16:32] But when we're stuck, that's all we can do.  We keep spinning our wheels until the next...
[02:16:37] thing comes across. It suggests that it's being led by Red
[02:16:42] But.
[02:16:45] I kind of feel like the red side has completely missed the problem space. They just don't even understand what the problem is.
[02:16:52] So we're kind of...
[02:16:55] at an impasse right now
[02:16:57] We're kind of stuck.
[02:17:01] The things that make...
[02:17:02] client side rendering, make the green the best, are the same things
[02:17:06] that are hurting it.
[02:17:10] the single model.
[02:17:12] the
[02:17:13] the, you know,
[02:17:15] Complete control.
[02:17:17] all the pieces that we've worked towards making it incredible,
[02:17:20] are the same things are holding us back.
[02:17:26] Thank you.
[02:17:28] Thank you.
[02:17:30] Thank you.
[02:17:31] and it's hard. Sorry, I'm just going to catch up with chat here for a minute after I gave my long  rant.
[02:17:44] See, I should probably, the thing kept on scrolling a bit with me, but I almost have to go back to where I posted the article. How long ago did I post the article? There it is. Yeah, yeah.
[02:17:54] 10 minutes of me ranting. Thank you all for still being here. We have like 300 people watching the stream right now. This is my most viewed live stream that I've had to date.
[02:18:02] I guess, as I said, Theo was right.
[02:18:08] - 80 people on Twitch, which means that there are now
[02:18:12] 210 people roughly on YouTube, so I'm hoping that the YouTube stars actually reflect that.
[02:18:19] I'm sorry for self-advertising.  It just helps so much when people actually
[02:18:24] Go in.
[02:18:25] And
[02:18:27] like,
[02:18:28] It means more people are actually watching.
[02:18:31] and stuff. Yeah, see we got 108 stars. That means half of the people watching him not thumbs up
[02:18:37] this video, which is a lot of you.
[02:18:40] Thank you.
[02:18:41] Just...
[02:18:42] Just...
[02:18:43] Please help out
[02:18:47] Amen.
[02:18:48] Yeah.
[02:18:50] Right.
[02:18:52] It's
[02:18:54] I have to admit, this is probably a pretty interesting place for people because you're out there and you're thinking, should I use server components?
[02:19:03] Is this worth it?  And the answer is like,
[02:19:05] It is...
[02:19:07] approaching solving those problems
[02:19:09] But kind of like SSR before, this is incremental.  This is a really hard problem space.  People who don't recognize that aren't even on the first page.  That's why I'm having such a hard time here.  Sometimes...
[02:19:20] Answers come from left field.
[02:19:21] But they also have to understand what the fundamental
[02:19:26] This is why I always look so wide out at the ecosystem, because someone's probably figured something out and they don't realize what they have yet.
[02:19:37] You know,
[02:19:40] Thank you.
[02:19:41] So like...
[02:19:43] This is actually
[02:19:45] Tricky.
[02:19:49] Thank you.
[02:19:50] - Sad part is most people in the bookends, never face AJX, they're in a directly dive into React here. So knowledge of data fetching, adaptation, and rare-minded new jobs. Yeah, and this, this waterfall problem was for years in React. Other frameworks maybe had better tools to solve it. It's why Remix pushed so hard on their loader patterns and stuff. It just like, literally for the long time React,
[02:20:09] Like...
[02:20:10] I think Seb wrote a post,  and I think I've had at the end,  where he said almost all the performance problems  he'd ever hit in his career were related to waterfalls.
[02:20:20] And like, or loading timing, race condition type stuff.  And to be fair, I've hit other type of performances,  like update performance kind of issues.  But yeah, for page...
[02:20:28] Like a lot of the initial thing people hit on page loading is just such terrible setup in terms of just loading the data in the first place.  I was telling people last stream that for the longest time, Solid was just...
[02:20:40] absolutely demolishing all the SSR frameworks using CSR on initial page speed, like lighthouse speed. And you're like, that makes no sense. It has to wait to load the assets. It doesn't know what page it's going to be on. Like, how could it possibly outperform stuff that where everything's on the server? And it was just because
[02:20:55] They weren't streaming, well, they didn't support it, but like just the way everything was architected was just so waterfall inherent. And I'd basically implemented like something very similar to the loader pattern, you know, because we've had that in other frameworks for years and years and years before Remix.
[02:21:12] with nested routing and all this kind of stuff. And
[02:21:17] Bye.
[02:21:17] That's...
[02:21:19] It's hard to say because when I'm talking about problem space where there's very complicated...
[02:21:24] problems. It's understandable why people don't know the basics or understand the fundamentals.  We've abstracted it so far. Like, there is a desire to get back to the basics. It's just, how do you get back there without...
[02:21:37] sacrificing
[02:21:40] Like.
[02:21:41] in one other aspect that's actually important.
[02:21:48] Thank you.
[02:21:51] Thank you.
[02:21:52] Is there a way to know that the list with three items for hydration is exhaustive and fully orthogonal? Seems like there might be more details. I mean...
[02:22:02] I don't know.
[02:22:03] As far as I know...
[02:22:04] These are the three things that affect hydration cost.
[02:22:07] Like there's obviously...
[02:22:09] more details on to what degree.  All of this has made me want to go back to benchmarking again,  like go back to the fundamentals.  When we started...
[02:22:17] So Solid got a big bunch of money coming from the Google Aurora, from the Chrome team to help, you know, do research into improving this performance on the web.  And very grateful for that, because first step was Alexa set up a benchmark as a baseline for us to do.
[02:22:39] you know, notice changes. We just want to know where things are at. Um,
[02:22:45] The problem was that it's always a lot of work to set up like different frameworks, different toolings and make sure that stuff's accurate, but it was a starting point.
[02:22:53] Um,
[02:22:54] But at a certain point, then we're like, okay, we got a baseline.  Let's start implementing what we needed.  And the thing that we realized is that certain pieces...
[02:23:02] to solving this are commonplace, right?
[02:23:06] So to be fair, I didn't dig as far.  Like what I use...
[02:23:10] Classically, the way that Solid got so fast, the way that we've always been so good at benchmarks, is that
[02:23:18] I would take an existing benchmark, I usually rarely wrote them myself, and then I would write
[02:23:23] the best implementation I could think of in Vanilla JS.
[02:23:27] What was great about the JS framework benchmark was it had a vanilla JS implementation.  So I rewrote it.
[02:23:31] to make it faster.
[02:23:34] Um, and to this day, I think both of the vanilla JS, uh,
[02:23:40] Um...
[02:23:41] implementations are largely still. I don't think anyone's really updated them from when I've updated them in the JS Framework benchmark.
[02:23:48] In the, I did the same thing in the isomorphic benchmark, the one that Marco did to figure out that's how solid so fast at SSR.
[02:23:55] I figured out how I would write
[02:23:57] the code...
[02:23:58] using vanilla JS.
[02:24:00] And we need to do the same thing here for hydration.  We need to get back to just being like,  okay, what would this look like in a declarative way from JS?  It's not...
[02:24:10] It's not just like writing vanilla JS and going like, oh, vanilla JS is faster.  It's writing it in such a way that it would be what you pictured the optimal framework would do.
[02:24:20] I
[02:24:21] I do think this is the list, but I can't tell you to what degree each of these things matter.  And I think that's actually a very important detail that we're all missing right now.  We're all speculating because it's hard to know what these real costs are.
[02:24:32] But these are the things that are taxing us.  It's like the code size or like the bandwidth coming in of the actual content that you need to...
[02:24:41] use the page, the execution cost when it comes in, and it's that serialization cost. These are  definitely the things that are expensive.
[02:24:51] Thank you.
[02:24:57] I don't understand the whole problem, but isn't it all this performance related and specifically performance on first load? Are we actually building different things with all this? Or is it just off the first load for things we're building today? Yeah, that's, that's, well, the perspective of people working in this green zone right now is that we're just trying to make the first load more performant. But because of the sacrifices or the trade offs to do that, it might be better to look at a different UI model.
[02:25:23] To actually change, shift the boundary so it's easier for people to write performance code.  Maybe there's something simpler hidden behind it.
[02:25:35] Thank you.
[02:25:36] Thank you.
[02:25:37] But it depends, right? Like sometimes, like if you have an MPA, every load is first load. So, you know, there's an argument there too.
[02:25:53] Thank you.
[02:25:56] How's chat doing?  Just catching up here, I'm still so far behind.
[02:26:03] Yeah, this is how I'd describe Elm. Elm is a really strong structured language. It's got a really ahead of its time in terms of concepts, language, compilation. It's like one of those things where it's like, it's a lot harder to write errors in, but it doesn't, Elm is primarily client side.
[02:26:29] Net-Negadal DX, in my opinion, boundary is much fuzzier, and user and user client and I don't save client. Yeah, the funniest thing is like,
[02:26:37] This is actually one of the stronger contracts that we see.  Like Astro is probably the strongest boundary  between client and server, in terms of like,  that you have a different file format.  This is like a bit fuzzier.  But then when you're getting over to like Marco or like Quick,  the boundaries are like,
[02:26:52] any piece of code could be server or client.  We're going to, instead of worrying about where that shift is,  you're only going to worry about that.  Like, hey, this has to be serializable for us to figure out the best thing for you.
[02:27:04] I do agree with,
[02:27:06] that
[02:27:08] It is definitely tricky.
[02:27:10] to wrap your head around
[02:27:12] this if you're thinking about it. I think
[02:27:15] the
[02:27:16] I think it's more that when people see user server, user client, now they have to think about it.
[02:27:21] If there's a model where you didn't have to think about it, perhaps...
[02:27:26] the fuzziness wouldn't matter.
[02:27:28] But once you see it, you're like, oh, maybe this should be harder.  I went through this whole cycle, and all you on stream went through it with me.  I think I was talking about a universal JSX format for server components and SFCs.  About a year ago, on stream, you've watched the evolution of going through this whole cycle.
[02:27:48] Thank you.
[02:27:52] Can we render everything to the client? If you've been watching the course of the stream, the answer is no.
[02:27:58] Thank you.
[02:28:00] Thank you.
[02:28:04] Thank you.
[02:28:05] I'd rather have CSR and backend separate than solution. Yeah, but then can you deliver the experience that's expected?
[02:28:14] I don't think RSC...
[02:28:17] I mean, SvelteKit isn't doing anything special in general anyways, like from this perspective. SvelteKit is the same as Remix, is the same as Soul Start or whatever. RCs are different.
[02:28:34] Thank you.
[02:28:35] All right.
[02:28:39] Thank you.
[02:28:42] Thank you.
[02:28:43] Thank you.
[02:28:44] Local first is consistent, so that's good, but like, are you
[02:28:49] Local first is not...
[02:28:52] not going to satisfy the middle ground or the low middle ground on like a lot of these e-commerce sites, which gets me to it.
[02:29:00] 2020...
[02:29:02] finally pushed it with the C, the Core Web Vitals scores.  That's what kind of pushed over the way.  And we are in a very interesting zone now where we have
[02:29:12] you know, Next.js...
[02:29:14] working out of her cell.  And,  you know,  I,  I see the same thing when I work in,  uh,  Netlify is that like,  you know,
[02:29:20] There's just a lot of companies that kind of bought in on the DX and stuff of React and now they're like, okay,
[02:29:26] can you know we want that performance we want to get more out of it so this is this is the compelling argument the question is like
[02:29:34] For them, RSC model might actually be really good.  I always thought about that when I saw Shopify.  I was like, RSCs seem like really good.  I'm just saying like...
[02:29:44] Maybe it's okay that it isn't the silver bullet, but then you have to decide what you really want to focus on.
[02:29:53] A lot of front-end people in the React crisis.  Well, it's not just...
[02:29:57] a React crisis, though. It's funny
[02:30:00] Mental. If, if,
[02:30:01] If I go pull up Light's...
[02:30:04] house or you know, kind of Core Web Vitals stuff.
[02:30:08] All single page app style rendering, not even React, faster ones, like solid, like sure, we win a few points.
[02:30:15] But fundamentally,
[02:30:16] have the same problems.
[02:30:20] There are some solutions that solve it, but like...
[02:30:23] It's interesting.
[02:30:24] If...
[02:30:26] There's still friction. All the, all the, for example,  all the solutions that have resumability, people balk at their syntax.
[02:30:31] to a certain degree. Like it's too much to adopt. Like they, they, the people are only willing to go so far so fast.
[02:30:38] I'm not.
[02:30:39] Signals are a hard sell on people. Can you picture them trying to pick up dollar sign, like go, okay, now you need signals and now you need dollar sign serialization boundaries.
[02:30:48] Like,
[02:30:49] It's a simple thing, and once you get up that little curve, you're like, okay.
[02:30:53] But
[02:30:55] Do people, you think people like will accept that? Where were we sitting today? No.
[02:31:01] It's almost like a hard stop.  Like, it's almost like, no.
[02:31:04] like non-starter.
[02:31:05] So like,
[02:31:07] How...
[02:31:09] How do you meet people where they're at?
[02:31:13] Ooh, sorry. Did I miss gift subs?
[02:31:18] Oh, I did. Insanity later. Thank you for tier one subs. Very, very much appreciated.
[02:31:30] I'm sure everyone on the channel who got them very much appreciates them too. Thank you.
[02:31:39] The longer I've been in dev, the more apparent there is always a balanced trade-off to everything.  There's no perfect solution that is easy to take things too far in one direction versus another.  You may solve your current issue you have and create new ones that weren't a problem the old way and constantly yo-yo, there's a balance somewhere.  Yeah, the challenge is, though...
[02:31:54] is once you've been sitting at a certain spot for long enough,
[02:31:57] And like,
[02:31:59] It's because people will buy into a certain solution, though.  Like...
[02:32:04] you'll inevitably hit a limit to it.  And...
[02:32:07] This is what we're talking about at the beginning.  Like, even back in the day, people used to be like,  okay, this for this, this for that.  But we're so focused now on not changing  that we're, like, we're forcing it.
[02:32:19] If we're all going to be like...
[02:32:21] Okay, we don't want
[02:32:23] stuff to change, we're all going to buy into this React solution, for example.
[02:32:29] Someone else is going to fall through the cracks.
[02:32:32] And then they should use different stuff.  But then they're like, oh, no.
[02:32:36] We don't want different stuff.  We're all going to use React anyways.  Like it's it's kind of funny.
[02:32:42] The tension, like we're doing this to ourselves by forcing everything along a single path.  We shouldn't be so worried about different solutions.
[02:32:54] Thank you.
[02:32:56] Thank you.
[02:33:06] If we're watching the stream on the stream, the viewer should be double.  Yeah, that's how the math works.
[02:33:12] We need to make rubstock. See, a lot of stuff is infrastructure. I told you micro frontends and the rise of single page apps happen at the same time. Well, what edge functions?
[02:33:22] are also...
[02:33:23] a factor here. This is one, might be one of the biggest drivers to not have
[02:33:28] and serverless in general, is one of the biggest drivers to not having stateful servers.  Maybe we'd all be on Phoenix Live View by now,
[02:33:35] if it weren't for the fact that infrastructure basically suggests that we should have a different model.
[02:33:44] My gut feeling, though, is that like...
[02:33:48] the clients
[02:33:50] The closer you move into the processing of interaction to the client, the better the experience is.
[02:33:54] Server first.
[02:33:56] can never be...
[02:33:58] correct for the end user completely.
[02:34:00] Thank you.
[02:34:03] But then again,
[02:34:06] I'm going to go ahead and get some more.
[02:34:07] Every site starts on the server.
[02:34:15] Yeah, we might be leaning on the wrong tree, but it's like, are we going to do, try and like hop it over?  You know, like you're at the top of the lavender and you're like...
[02:34:24] You know?
[02:34:25] I don't think the tree is that far off. Maybe it's hard to say. It's like,
[02:34:32] Maybe something just fundamentally has to shift here.  It's too...
[02:34:36] There are requirements here to be met, and sometimes using requirements is a way that we make the shift.
[02:34:43] But...
[02:34:44] Where I'm sitting right now,
[02:34:45] and maybe this is because of my own bias and stuff, client side routing, for example, is
[02:34:49] Because of the persistence of states. Persistence of client state, the importance of client state is
[02:34:54] Very important. So any solution has to solve that. And that's why going back to here doesn't do it. That's why all the stuff I was talking about, the HTML partials, persistence of client state is a problem for those.
[02:35:06] So
[02:35:08] Because you start getting fundamental.  Okay, well, then should we not be declarative?  Well...
[02:35:12] There's a reason.
[02:35:14] Every time these changes happened, it was introducing a declarative system over an imperative one.
[02:35:20] It was also...
[02:35:21] marked a change in how we viewed routing.
[02:35:24] Static routing, dynamic routing,
[02:35:26] Um...
[02:35:28] client side routing,
[02:35:30] Here is actually a
[02:35:32] I mean, push state happened earlier, but if you think about it, SSR was only enabled because push state exists, because you need to be able to refresh on the page before we had hash state back in 2010.
[02:35:41] Like...
[02:35:43] there's
[02:35:45] It's funny how many different aspects line up on each of these changes.
[02:35:55] See, I don't know. I was fully on server components and said resumability later because resumability is clearly an optimization.
[02:36:06] Like it's just, it's the code that makes it to the client runs less.  It just, it's the smallest scope in terms of the problem space.  But the real question is like,
[02:36:16] This is why you gotta look at the fundamental models more. That's more important.
[02:36:19] In a sense, the thing that you don't pick on, it's quick...
[02:36:23] The part that makes quick hard isn't the or like a bigger shift, not hard, but a bigger shift is not the resumability necessarily, but the progressive hydration that has more of an impact on the way you have to think about it.
[02:36:35] Um...
[02:36:36] I'm not sure.
[02:36:37] RSCs are of that level too.  And if you told me to choose between RSCs and progressive hydration, like lazy linocholic,  that I'd take RSCs every day of the week.  But...
[02:36:48] Um,
[02:36:48] It's...
[02:36:49] It's like...
[02:36:51] It's
[02:36:53] It's time to step back is mostly what I'm saying.  Because I think...
[02:36:57] that
[02:36:58] this requires more thought. We don't actually know
[02:37:01] what the most expensive part of the equation is. We're just guessing and trying different things and hoping that the DX... I feel like I've spent a year talking about DX. Like, how to accomplish the UX with a DX. You know, like, how to get...
[02:37:15] like certain mechanical things happen to DX and then like basically
[02:37:19] niggle over these details to kind of produce that experience people like that can mechanically check off the boxes.
[02:37:26] But I think we're also at a point where
[02:37:29] It's not clear, like wouldn't it be funny
[02:37:31] I'm not saying this is the case, but wouldn't it be funny if something like the code size didn't matter very much?  That it was actually serialization costs that was the most expensive and execution costs second.
[02:37:42] Then you look at certain solutions and be like,
[02:37:45] What a waste.
[02:37:46] Or what if it was different?  What if execution cost...
[02:37:50] Wasn't that big of a deal. It was code size and serialization.
[02:37:53] You know,
[02:37:56] then like you'd look at resumability and be like, man, you know, like
[02:37:59] Thank you.
[02:38:00] Thank you.
[02:38:02] We don't actually know right now and I think that's the problem. And as much as Google's trying to give us the best metrics for this,
[02:38:08] using their different tools.
[02:38:11] I don't.
[02:38:12] No, if they...
[02:38:14] there needs to be a connect on the framework side.  So we understand this from the mechanics side.
[02:38:20] and somehow correlate that to what we see in the metrics.
[02:38:28] WebSockets are underrated, but yeah, possibly a little bit blocked by stateless and by other, you know, other concerns like...
[02:38:40] how long they take the Kinect in the first place.
[02:38:46] Thank you.
[02:38:47] Thank you.
[02:38:49] Okay.
[02:38:51] Thank you.
[02:38:51] *clap*
[02:39:02] All right, chat, I'm trying to catch up  'cause I'm like 10 minutes behind.
[02:39:11] Problems that we were also looking for different generic solutions, different types.  Because that's for us what a sign of maturity looks like in this ecosystem, right?  Everyone's like, there should be like one good solution. I'm just building a website.
[02:39:23] How hard can it be?
[02:39:29] Thank you.
[02:39:30] Thank you.
[02:39:33] Thank you.
[02:39:34] Thank you.
[02:39:36] That's interesting. "Signals feel like it has the same niche audience mainstream rejecting
[02:39:41] Um...
[02:39:43] Perhaps. The only...
[02:39:45] The reason I think this is different
[02:39:47] A little bit.
[02:39:48] is because
[02:39:51] *sniff*
[02:39:53] Thank you.
[02:39:56] For everyone who's not a React, who isn't developing React, and React is the majority...
[02:40:01] you're going to be on signals.
[02:40:04] And the reason for that is because
[02:40:06] - Right.
[02:40:08] Unlike RxJS, all the framework authors basically know signals do what they want it to do. Even the React team knows that like, well it doesn't fit quite with the model, the result of signals is exactly what they're looking for.
[02:40:20] So...
[02:40:21] Whether, you know, this comes down to like how a compiler kind of hides something that signals-esque.
[02:40:26] it's,
[02:40:28] It seems pretty clear at this point that...
[02:40:32] Thank you.
[02:40:33] at least for the next while. In the same way, we could be wrong. It's like the virtual DOM, right?
[02:40:38] There was this gravity well with React in 2014,  once people realized the virtual DOM was legit...
[02:40:44] Every framer tried to make their own version of the virtual DOM. Every framer basically had a virtual DOM. Even reactive libraries like Vue were like, "Okay, virtual DOM."
[02:40:53] the whole ecosystem basically gravitated around that
[02:40:57] whole. And now React was the biggest player in the field, but we've seen that exact same
[02:41:03] gravitation around signals.  Every framework is picking it up.
[02:41:08] There's something legit here.  Just because the biggest player isn't playing along  doesn't mean that it's actually just not...
[02:41:14] Like,
[02:41:14] as big as a gravity pole.  I'm sure 10 years from now,  we'll be like,  oh yeah,  signals,  whatever.  There's like some kind of aspect we got to,  but compare it,
[02:41:22] to where we're sitting on the model right now,  I don't think...
[02:41:26] Signal rejection is not something I'm even relatively worried about.  We're already past that.  Signals have won.
[02:41:38] Thank you.
[02:41:46] What if we support... This is what Marco does, right? But people are so sensitive about syntax.
[02:41:53] right? DH is right, we just need rails, yeah.
[02:41:56] I mean, this whole...
[02:41:57] In one sense, if you could just pick a direction, you wouldn't have this crisis.  The reason there's this crisis is that you basically have a bunch of front-end developers now who are like,
[02:42:07] The very essence of what makes it so good is basically...
[02:42:12] what's
[02:42:13] we need to fix, but we gotta do it without losing anything we care about.
[02:42:18] It's tricky.
[02:42:21] It's one of those paradoxes, just like the paradox of like, you know, if you want to have less JavaScript...
[02:42:27] the best way to do that is use a JavaScript framework.  Like that's a paradox.  Like,
[02:42:32] Like...
[02:42:33] Okay, Vanilla.js is fine, but if you want...
[02:42:38] to improve...
[02:42:41] Once you get to a point of statefulness...
[02:42:43] you know,
[02:42:44] You want JavaScript on the server.
[02:42:47] Thank you.
[02:42:47] It is very perplexing, these kind of paradoxes. And it feels like if there's so many of these  things that are like a little off, we must be sitting in the wrong place.
[02:43:03] - Does anyone know why solid jobs are less?  Why they don't trust them?  I mean, there's no meta, right?
[02:43:09] But, you know, Svelte's at Vercel, let's pretend like that's the same kind of push. Like, I honestly think it doesn't, the meta angle doesn't actually matter. I think it is simply the fact that the ecosystem wants to mature. It wants to feel like it's legit.
[02:43:26] This has nothing to do with technology at this point.
[02:43:30] I did a quote tweet, we'll talk about it this week in JavaScript, where Ben Lesh, RxJS guy, was like...
[02:43:39] You know, we'll talk about it.  But essentially, I was like, but is it 10x better?
[02:43:45] And
[02:43:46] you know, because using solid was better than React or something, which is kind of silly, but
[02:43:50] Like...
[02:43:52] It has nothing to do with any...
[02:43:56] of the like concrete metrics.  It's nothing that I as a framework developer can develop.
[02:44:01] that actually like there's no technological
[02:44:05] Peace to this.
[02:44:16] of course, yeah, I mean  that's the problem with the React model
[02:44:23] Generally,
[02:44:24] If you think about RCs are a way of trying to rip...
[02:44:26] the TRIA part of it.  But on the flip side...
[02:44:32] F. There's always overlap here.  So, and there is...
[02:44:38] modular, like, compartments, compartmentalization.  You don't...  Like, the extreme of pulling it out is MVC, right?  Where you have ModelViewController.  But the thing is, we know...  There's a reason we got away from ModelViewController.  Again, too simple of a model.  Like...
[02:44:52] There are
[02:44:54] I worked in MVC frameworks for years in a stateful environment.  See, MVC in stateless is lovely. MVC in stateful,
[02:45:01] is
[02:45:01] a disaster. And I think that like,
[02:45:07] I
[02:45:08] The truth is you want...
[02:45:10] regions that are tied to the tree, but you
[02:45:14] But you don't want...
[02:45:16] it always to be one for one. This is why I like things like Signals because  you can kind of live in the tree but not be owned by the tree
[02:45:24] One for one, you can kind of diverge in that.
[02:45:26] And I think
[02:45:28] You know, RCs are kind of trying to do it in like make it two trees and
[02:45:36] Just pulling it separate doesn't actually end up completely working because...
[02:45:41] you actually have trees.
[02:45:43] And there's a lot of duplication when you have, you know, it's not one for one.  That's the mistake.  It's not a mistake.  It just reacts over simplification.
[02:45:53] But it is.
[02:45:55] it is correlated. Acting like it's not, they don't correspond
[02:46:00] it ends up making things a lot more complicated.
[02:46:10] Thank you.
[02:46:11] Yeah, so I mean, servers, is the critical change that we have to go back to stateful servers? Is that where the next thing is? Because nothing else I'm seeing suggests any other...
[02:46:24] But if we have stateful servers,
[02:46:26] Can we...
[02:46:29] Can we still...
[02:46:31] pull off what we want to.
[02:46:34] I mean, maybe that's the solution, right?
[02:46:37] Convex, reactivity on the server, stateful, websoc and communication, fine-grained updates in the client. Don't diff, use signals in solid.
[02:46:45] There, that's the future architect.  We solved it.
[02:46:50] No, it's a little...
[02:46:54] There's always UI state. There's always ephemeral state related to how the end user works. And we need a way of persisting that.
[02:47:04] I guess we could persist it back to the server...
[02:47:06] In a smart way.
[02:47:10] But then it's like, staple servers have all those trade-offs of like persistent connection.
[02:47:16] This is not...  There's not like a single solution here, unfortunately, which is...
[02:47:21] what it's interesting to because we're still exploring new space circling  around the same perhaps inevitability I think it's good
[02:47:29] that
[02:47:31] Thank you.
[02:47:32] I think it's good that we are exploring this new space.
[02:47:36] Because otherwise we don't know it until we explored it.
[02:47:40] But then again, going back
[02:47:42] is also something where it's like, we have to make sure that if we look at the same thing again,  we look at it differently. We can't just do the same thing because we know that it won't work still.
[02:47:55] I keep imagining how early we could take the current tooling back in time.  There were some milestones from which I don't think it's possible,  neither technically or mindset-wise.  Yeah.
[02:48:03] yeah I mean technology isn't it's not always about the first to have the technology usually  there's like some silly detail like didn't we have like
[02:48:11] Like...
[02:48:11] not touchscreens, but we had like, we, we had a in, uh, inductive touchscreens or, uh, sorry, not, um, sorry. We, capacitive touchscreens are what started with the iPhone, which let you use your finger before that we had, um, resistant.
[02:48:27] touchscreens. And you had to use a pen.
[02:48:32] we kind of knew that we were going to have this tablet smartphone kind of future in the 90s but like
[02:48:38] a little detail like that on the technology prevented us from getting to where it needed to at the time, even though like there were those things. Obviously size improved and stuff, but like,
[02:48:47] It took the right
[02:48:49] factors it's almost like people are the slowest thing to change
[02:48:57] Thank you.
[02:48:57] Thank you.
[02:48:58] *puff*
[02:49:00] I don't know. I've been...
[02:49:02] Yeah, maybe they're smarter people than me.
[02:49:06] But I think the problem is because it's not a singular problem.  Like you can't just like solve it.  You have to put all the pieces together and find it on balance.  You don't really know that until you try it.
[02:49:18] Thank you.
[02:49:19] If you've got me thinking future references live browser matches and morph during runtime,
[02:49:26] Quick does do that.
[02:49:29] Quick has amazing analytics for doing that.  Quick has some of the coolest technology that I've seen for handling some of this stuff.  It's just...
[02:49:40] There's some things I still need to get figured out.
[02:49:51] Thank you.
[02:49:54] Thank you.
[02:49:55] Thank you.
[02:49:58] Time to revisit Wasm? Yeah, I mean...
[02:50:03] The thing is, Wasm will allow us to use other languages, which will improve our server rendering prize, but it feels like an optimization.
[02:50:10] I think our problem right now is we're trying to find an architectural solution
[02:50:15] and
[02:50:19] Like we're, you know, like...
[02:50:21] Ew.
[02:50:22] It's tricky.
[02:50:24] Like, it's not about the speed we render on the server.
[02:50:28] So while I'm
[02:50:30] It's not about the...
[02:50:31] Yeah.
[02:50:32] It's like...
[02:50:36] It's about...  Essentially...
[02:50:41] these
[02:50:43] It's either on one side, if you're saying like,
[02:50:46] Client-routed,
[02:50:48] It's like about combining these things here
[02:50:51] with the ability to persist client state on the other side.  So if you take a server solution,  ask how you can consistently...
[02:50:58] persists client state. And if you take a client's solution, ask how you can consistently reduce the cost here.
[02:51:03] It's it's it's
[02:51:05] um
[02:51:08] Thank you.
[02:51:13] Thank you.
[02:51:15] There's a lot of great chat here.  I'm trying to highlight the pieces that I can.
[02:51:21] Yeah.
[02:51:23] You know?
[02:51:25] So I was trying to say, but I'm still 10 minutes behind because you guys are putting such great conversation in.
[02:51:31] I suspect Apple's locked down from PWAs.
[02:51:35] Yeah, I mean, they killed it. I mean, I was building a PWA in 2017-18.
[02:51:40] And
[02:51:41] They basically refused.  It's so funny because like Android got push notifications and it literally took Apple five years to...
[02:51:48] to get push notifications through PWA.
[02:51:51] Like...
[02:51:52] Like,
[02:51:54] Or six years, I think. It was just insane. They just really dragged their feet.
[02:52:02] But that being said, I mean, offline first has a whole slew of other synchronization considerations and problems because like,
[02:52:11] So offline is kind of the nicest when it's a short-term thing.  It's like lets you do optimistic updates.  It lets you do, you know, as soon as you're trying to consolidate optimizations,
[02:52:22] larger histories of offline, you hit all the distributed computing problems, which
[02:52:27] You know, caching is one of those really hard problems in computing, so is distributed computation.
[02:52:41] All right.
[02:52:42] it's a conversation I've caught up to the
[02:52:52] Thank you.
[02:52:54] RC is like deferred tree, right? Leaf nodes are in two different...
[02:52:59] Thank you.
[02:53:00] Yeah, yeah. Yeah, I mean...
[02:53:05] The thing is, on initial SSR, though, they do it all on the server.
[02:53:13] Thank you.
[02:53:15] Thank you.
[02:53:17] Thank you.
[02:53:19] Thank you.
[02:53:21] It would be kind of interesting if you did a stream that tried to imagine what frontend dev would look like in five years, like, to go create a future view. I mean, this is why we're asking these questions right now, right? Like,
[02:53:30] We're trying to think about what characteristics we want in them.  Because I like characteristics of RSCs, but I don't like some of the trade-offs.  I can say the exact same thing about resumability.  Yeah.
[02:53:43] Um,
[02:53:43] My gut is that the trade-offs of the resumability...
[02:53:47] are solvable.
[02:53:49] Um...
[02:53:51] Thank you.
[02:53:53] But...
[02:53:54] I think...
[02:53:55] I think the serialization problem...
[02:53:59] Mm.
[02:54:00] I think my current problem is I've been focusing too much on the serialization problem.  I think serialization, like my gut is, I'll benchmark it, but my gut is serialization is a big part of the cost.
[02:54:12] And
[02:54:14] essentially...
[02:54:20] Yeah, it makes it tricky because you're kind of...
[02:54:25] I wonder...
[02:54:27] If there is...
[02:54:28] if there is a solution
[02:54:31] Like if we remove serialization from the equation,
[02:54:35] if there's a happier solution there, because
[02:54:41] *sigh*
[02:54:44] Like there's different, if you take any individual one of these problems, there's different solutions to them.
[02:54:50] Like,
[02:54:52] Coatsize.
[02:54:53] As long as your core app is small enough,
[02:54:57] You can lazy load stuff.
[02:54:58] To a good degree.
[02:55:01] Right?
[02:55:02] So like, for example, if your baseline of your framework already is like four or five times smaller,
[02:55:11] than another framework,
[02:55:13] it takes significant time to catch up.  You might be able to like,
[02:55:17] Build a good app.
[02:55:19] in
[02:55:20] in the same size of like Hello World in the other framework.
[02:55:25] Then like
[02:55:26] Code size might not matter that much because anything beyond that you can, you know, lazy load.
[02:55:36] Thank you.
[02:55:37] Yeah, I think we just, we need better understanding of what
[02:55:43] where...
[02:55:46] like what of these constraints we can loosen,
[02:55:50] And then just push forward with it.
[02:55:57] Thank you.
[02:55:59] Thank you.
[02:56:00] People helping with job advice. I'm so happy to see that in chat, people helping other people.
[02:56:04] I think my problem is I'm not used to having so many people in chat, so I'm used to answering everybody's interaction.  I just can't do that. It's amazing to see you all here today.  This is an exciting topic, definitely.
[02:56:19] Thank you.
[02:56:20] you
[02:56:21] Like, okay, I'm still six minutes behind.  Wasm won't save you.  From the creator of Leptos.  There we go.  Can we, like...
[02:56:28] Quote it.
[02:56:33] Uh...
[02:56:35] Thank you.
[02:56:38] I mean, don't get me wrong. I'm kind of excited about the aspect that you start thinking WASM and you start going, well, can I or can I build like something like when the boundaries are clear, like RSCs, you start thinking I can make like one part in my backend language.
[02:56:51] And then another part, you know, the client components in JS.  But the funny thing is you still want a client render,  server render the client components.  So like...
[02:57:00] Yeah.
[02:57:01] I don't know.
[02:57:03] Thank you.
[02:57:05] I guess it's Wasm.
[02:57:08] Okay, I think I've actually caught up to chat, which is amazing.
[02:57:13] Give subs.
[02:57:16] All right.
[02:57:20] Let me... let me...
[02:57:21] Get there. Chat.
[02:57:25] Oh, wow. Patrick JS, thank you so much for 20 GIF subs.
[02:57:32] I'm sure everyone's happy about that. This is
[02:57:35] This has been amazing.
[02:57:37] The last couple of streams, we've had so many gift stubs on the stream, which helps out a lot.
[02:57:42] Um...
[02:57:44] Sorry, I don't know what's up with my phone.
[02:57:47] Yeah.
[02:57:48] Thank you.
[02:57:50] Thank you.
[02:57:53] and there was a question here can i talk about the trade-offs between uh
[02:57:58] between quick...
[02:58:01] and RSCs and I actually
[02:58:03] Thank you.
[02:58:04] I guess I didn't put the list there, but I actually did a...
[02:58:07] I feel like a few minutes ago I did a fairly good job of of of of doing that I should have  written it down while I did it I don't feel like I think I already covered that like
[02:58:17] maybe 20 minutes back.
[02:58:24] Hydration is probably cold side, but even then, probably not a real issue making it reliable is one issue.
[02:58:29] Well, the thing is,
[02:58:30] I don't even know, like, if you load the code, but you don't execute it,
[02:58:34] Like, if a tree falls in the woods, does anyone hear it?
[02:58:40] I...
[02:58:41] I
[02:58:43] Yeah, I'm not actually sure the code size...
[02:58:47] necessarily is the most important factor.
[02:58:52] Since I had something very cynical from...
[02:58:56] Okay.
[02:58:57] I love insights here.
[02:59:04] Thank you.
[02:59:06] Yeah. I mean, yeah, I should definitely look and see. I trust...
[02:59:14] the creator of Erlang on this largely.
[02:59:18] Do we need one size fits all?
[02:59:23] Maybe we just need someone to make a best-in-class composition of the top solutions for each problem.  Well, in a sense...
[02:59:29] RSCs are very close to that.  Like you could take my unified data fetching model here,
[02:59:35] which shows the best client side and arguably the best server side
[02:59:40] model for that, add some resumability, and then you just stick them next to each other.
[02:59:47] maybe it's good enough.  I just...
[02:59:49] I wonder...
[02:59:52] Like,
[02:59:53] I guess that's the thing, right?
[02:59:55] maybe it's just a matter of what to focus on first, because if you come into
[03:00:00] this zone, right? If you're like here,
[03:00:03] Do you care if your islands get bigger, if they're resumable?
[03:00:08] Do you know what I mean? Like...
[03:00:11] Maybe like that's what it comes to.  We just have to do both.  We need...
[03:00:16] We need...
[03:00:17] the power of something like presumability to reduce the cost of our client islands. And then we need the division boundaries of something like RCs to make sure that our serialization costs are reasonable.
[03:00:29] So
[03:00:31] It just still seems like a lot.
[03:00:35] I'm very cognizant of this time period right before we went here and just how
[03:00:42] much right now feels like that.
[03:00:49] Hi Dylan.
[03:00:55] Thank you.
[03:00:56] Okay. Yeah, our programs are probably bigger than our data still.
[03:01:04] So we still have some room to grow the data maybe.  I don't know how much the network...
[03:01:12] Thank you.
[03:01:13] Okay.
[03:01:21] Thank you.
[03:01:22] Thank you.
[03:01:24] Did I miss something again?
[03:01:28] Damn it.
[03:01:31] Thank you.
[03:01:32] Okay, five tier one guest subs from, I'm gathering this is Greg, GBJ Leptos.
[03:01:41] Thank you so much.  And then Patrick dumps another holy...
[03:01:45] 100...
[03:01:47] Tier one gift subs.
[03:01:49] That's literally everyone...
[03:01:51] in the channel.
[03:01:54] Well, you're all subscribed.
[03:01:57] Thank you, PatrickJS, lowercase x.
[03:02:01] You... Wow.
[03:02:03] *laughs*
[03:02:06] There we go. Aren't you glad you joined the Twitch stream today?
[03:02:11] *sniff*
[03:02:12] Everyone gets a sub.
[03:02:15] It's a party.
[03:02:19] I don't know.  I need to think of better incentives for people.  I wish I had a better way to thank them if they had something they want to say or whatnot.  But thank you very much.
[03:02:33] Thank you.
[03:02:36] Thank you.
[03:02:39] There you go. Thank you, Patrick.
[03:02:44] Thank you.
[03:02:49] Party kit? No, it wasn't party... You mean party town. Party kit is the multiplayer action stuff from Sunil. Party town is great for third party scripts.
[03:03:05] Thank you.
[03:03:07] Thank you.
[03:03:07] Yeah, no, seriously. Thank you, Patrick. That's I,
[03:03:10] That's just wow.
[03:03:13] Um...
[03:03:14] Yeah.
[03:03:17] *sniff*
[03:03:18] It's funny because there's a whole conversation about the economy going on in chat and...
[03:03:25] There you go, Patrick. And quick, we have dollar signs everywhere, so I have to share it.
[03:03:29] There we go.
[03:03:30] Yeah, Patrick's definitely interfaced him quite a few times on Twitter, always talking about the latest tech and quick.  And we had a...
[03:03:41] Good conversation about Quik today because as I said, Quik does a lot of really...
[03:03:45] really good things.  Um,
[03:03:49] I think...
[03:03:50] I think there's still a balance to be found.
[03:03:54] But I think that like
[03:03:55] When you look at it on the technology side, it's incredible.
[03:04:04] I think we need better state management tools.
[03:04:07] Yeah.  I mean...
[03:04:09] It's because it's quiet right now because outside of React...  Not even outside of React.  Every JavaScript framework is pulling...
[03:04:16] their
[03:04:17] state management tools into the framework.  They've decided that state is something that they do care about.  Even React, think about it.  Like to get concurrent mode, they need to control the state.  That's why there's like use external source or something.  But it's like I hear it's kind of miserable, but like generally speaking,
[03:04:32] React has pulled it all in.  When they went to hooks, they were on this path  to pull it all in.  Everyone using signals, they're pulling the state in.  Angular switching, everyone's pulling the state  into the framework because it's the most optimal way  to do UI.
[03:04:45] Updates.
[03:04:47] It doesn't have to be tied to the tree, but the framework being aware of the specific state mechanisms allows it to optimize significantly.
[03:04:59] Taking them up from stream islands that magically auto convert to continents at a certain size and maybe all the way up to urban.
[03:05:06] Yeah.
[03:05:07] Yeah.
[03:05:09] This is a sub-only chat now.
[03:05:11] Honestly, you've hijacked the whole conversation, Patrick.  Thank you so much.
[03:05:17] *cough*
[03:05:18] Ugh.
[03:05:25] I'm going to go.
[03:05:33] Thank you.
[03:05:34] Here's a dumb data, can you use the 10 megabytes or so browser local storage as a way to cache? Just literal DOM state to speed up reducing.
[03:05:44] Yeah, I mean, this is interesting because...
[03:05:47] At what point are we talking about like...
[03:05:49] doing work ahead of time and then caching it. I always feel like that's like my last resort, like  stuff like SSG or ISR or whatever. It's like, I want the architecture to be sound before I optimize it with caching.
[03:06:02] I think this is probably my biggest resistance to RSCs.  They almost tell you half the cash.  And I really don't want to ever be in that state.  Like, I understand now.  I watched this great video from Lee Robinson.  Let me see if I can...
[03:06:17] find it here for a second. I think it was in, uh, when did I drop it? Not this. Uh, it was on my next channel.  Do do do do do do do do do do do do do do do do do.
[03:06:28] Seriously.
[03:06:30] Great.
[03:06:31] Great video.
[03:06:34] Let me pull this into the screen you guys can see.
[03:06:38] I'm not going to watch it right now, but he goes in detail of every little way that Next.js does its caching.  Let's pop this into chat for those people.
[03:06:50] And...
[03:06:56] It's really interesting because...
[03:07:00] It all makes sense when I frame it in the way that I've been talking about in terms of RSC's requirement for caching. Like next looks
[03:07:07] at every route and if you don't read something off the request
[03:07:10] It
[03:07:11] caches it immediately. Like that's its default. Like everything is cached.
[03:07:15] Obviously, like in my head, I'm like, I've only ever built apps, like really, like, I'm sorry, my experience was building stuff that looks a lot like,
[03:07:22] I worked in social media for almost a decade.  Then I worked at eBay.  eBay was sites, not apps.  So I can understand it from the eBay side more.  But when I was doing like...
[03:07:32] you know, the app side when I was doing development, the difference that eBay has to work on the framework, but when I was building like actual products,
[03:07:40] Like.
[03:07:42] you
[03:07:43] I, like, we're talking applications, so it's a lot harder for me to wrap around, like, all this stuff.
[03:07:51] caching because basically I could cache almost nothing.  I could cache...
[03:07:55] Like, everything was personalized. Every part of it was. So, like, I could cash, like,
[03:07:59] common shared organizational queries. I could cache, sometimes we'd even like for our top users or you know, important people cache like their their newsfeed like the first page of it. Like we did lots of different optimization caching techniques. But like,
[03:08:15] Caching as an architecture was not on our list of things because we'd have to invalidate it so often.
[03:08:23] Especially because of the amount of like right heaviness of like social media.
[03:08:29] So, anyways.
[03:08:32] But...
[03:08:34] Yeah, like, this is very interesting.  I got this link from Tanner, who at first, because of the key-based caching, thought he was talking about something, Tanestack Query, but it's not actually in the client.  It's actually a server cache.
[03:08:46] Um,
[03:08:47] And in a sense, this unified caching model that I'm talking about would have the client cache and the server cache be the same.  So I don't know.  I don't think Next.js is going to...
[03:08:59] hoist their loaders to get the full...
[03:09:02] like single flight multi-client server communication thing.  But,
[03:09:07] Um,
[03:09:08] I expect that they're part of the server caching story is very similar to what I wrote up in that unified cache thing.  But this is a great...
[03:09:16] explanation. This is an amazing video. I'm surprised I haven't thumbs up it yet. Oh,  it's because I'm on this. Yeah, I have no clue why. This is a great video. People should watch it.
[03:09:28] Okay. Sorry. Uh...
[03:09:33] Let's, how we doing chat?
[03:09:39] You should enable channel memberships on YouTube.
[03:09:42] Yeah, I probably should.  And they added that after I started streaming, so I never looked at it.
[03:09:50] Yeah, MobX State Tree is actually really, really cool.  It's fairly opinionated, but building out a whole solution on MobX is cool.  The only challenge with MobX is it had the deal with React the whole time.
[03:10:03] See, like, picture if someone built MobX state tree on top of solid signals.
[03:10:08] I mean, it would be amazing, right?  Like, if you cared about that level of state management,  you'd also have the perfect renderer to go with it.
[03:10:16] Like for anyone building reactivity, this should be like,
[03:10:19] Like, I'm surprised people haven't done something like this because it's like, it's exactly what they're looking for.
[03:10:26] MST was wasted on React.
[03:10:29] Thank you.
[03:10:30] Thank you.
[03:10:31] Thank you.
[03:10:36] Thank you.
[03:10:39] Thank you.
[03:10:41] Yeah, I mean, I built GeoCities, Tripod, my old band site, right?  If you ever want to feel nostalgic, you know, you can always still go to Space Jam, and
[03:10:53] 1996.
[03:10:55] And, you know,
[03:10:57] Where is it?
[03:11:00] And
[03:11:01] You can just come back to the golden age.
[03:11:06] .
[03:11:09] Kind of want to view source here.
[03:11:14] Okay, so we just have CSS, image, and the page. Okay.
[03:11:20] Is there any JavaScript on this page? Probably not.
[03:11:24] Let's actually view source. I went to inspector. Where's view page source? Why am I not seeing it here?
[03:11:34] Thank you.
[03:11:35] God, what?
[03:11:37] View Source.
[03:11:41] I wonder if this page truly is unupdated from there. Everything's a table. I already told you guys that. See there's a table and then there's another table and there's a table and that table. Sometimes the TDs are capitalized, sometimes they're not. Good times.
[03:11:54] Oh...
[03:11:57] It says alt text, which is incredible for this time period, probably because like, I mean, accessibility would have been important for a major website like this.
[03:12:07] Like, I wonder if we can find hints in the HTML to say that this actually has been updated.
[03:12:13] Hmm.
[03:12:15] Don't touch the ad stuff. Okay.
[03:12:17] Thank you.
[03:12:18] Understood.
[03:12:20] Ooh, there's some JavaScript on here.
[03:12:23] tracking code?
[03:12:25] Window data layer, yeah.
[03:12:27] Oh, this is just Google Analytics, it looks like.
[03:12:32] Hmm.
[03:12:34] Anyway.
[03:12:35] Enough nostalgia for one moment.
[03:12:47] *sad music*
[03:12:59] Talking about Lee, yeah, I know.
[03:13:02] I mean, DevRel is a critical area, right?
[03:13:07] I'm going to go.
[03:13:08] Well, I mean, I guess. Yeah, no.  This has been one of the
[03:13:13] the challenges, like,  think about the challenge he has  where he's trying to move people  to a new technology. I mean, even the React  core team has been working on this, has been having  challenge explaining this stuff. I think  the amount of polish on a lot of  explanations from Lee, and it's to the  point, because they get the focus...
[03:13:31] On the specific proms,
[03:13:33] or the space related to their specific product.  But he still manages to like get deep enough that the general knowledge is  there.  So yeah,  no,  definitely.
[03:13:44] that
[03:13:45] Service workers, client.  I know technically...
[03:13:49] It's because it's in the browser.  I understand it's like another layer.  You could say edge, you know, but...
[03:13:55] Yeah, I mean,
[03:13:58] It's... it's interesting.
[03:14:00] You can run your service worker either way, right?  You can act it, treat it like a backend framework, which is fair, but.
[03:14:07] Eh...
[03:14:10] Yeah, it's interesting.
[03:14:15] But like you need to open the you need to open the page to get it the first time. I think that's why like
[03:14:22] Yeah, I don't know.
[03:14:23] That's interesting.
[03:14:26] It's your former external language, yeah.
[03:14:33] Well, the thing is...
[03:14:38] Client and server cache
[03:14:41] don't have to, can't, they, they,
[03:14:44] They aren't in the same place, but the thing is, people's conception of what they are caching, the data,
[03:14:50] could be the same. So it's really when you have a client and server cache, you can basically just have
[03:14:57] you can view it as actually layers of this,  like different caching layers on the same data,  essentially.  People conceptually think about data,
[03:15:05] And
[03:15:06] as a
[03:15:08] And the funny thing is like,
[03:15:10] depending where the root of the invalidation is,  it doesn't actually matter as long as it invalidates through.
[03:15:16] Like,
[03:15:17] I don't see a problem...
[03:15:19] with having the same
[03:15:21] API in the same key system
[03:15:23] in such a system because...
[03:15:25] You only invalidate as deep as you go.
[03:15:28] As you care to go, yeah.
[03:15:30] Thank you.
[03:15:35] Thank you.
[03:15:42] Nice. All right.
[03:15:46] Web 2.0 was a mistake.  Uh...
[03:15:52] No quotes around HGN attributes. I mean, it's optional, right?
[03:15:57] Right in the spec.
[03:15:59] Thank you.
[03:16:01] Thank you.
[03:16:03] Taliban. Oh, I, yeah, he,
[03:16:10] People still talking about MST. Okay. To be fair, I've never actually built an app with MST. I'm just, what I was trying to say is that like a very advanced,
[03:16:18] State management solution based on top of signals seems like it would be very valuable for people who have a certain type of needs around it.  I don't know enough about the specific conventions to make a comment either way.  It just seemed...
[03:16:29] logical to me that someone would take the framework primitives and build something
[03:16:33] more powerful on top.
[03:16:37] Oh, so you agree with me, Dev.  Okay.
[03:16:41] Thank you.
[03:16:43] Thank you.
[03:16:44] All right. Anyway.
[03:16:47] It's still funny, when I get into these chat stream parts, I kind of lose track of where I was at.
[03:16:52] Thank you.
[03:16:53] But...
[03:16:55] Let's see if we can draw this together before going to this week in JavaScript. Honestly, I guess it's just you guys having YouTube and Twitch open at the same time, but this is significantly more viewers than we have without a raid.
[03:17:11] Okay, actually, let's see here. You cannot cash fill out the full content that I'm building. Sometimes it is even out of our hands on what latency we are okay with. You can make assumptions around 90% of it. I can get that, but you can make 100%. So as long as the API is under that, you need to opt out.
[03:17:25] That's all I have.  So there was a name.  Oh, yeah.
[03:17:28] Yeah. And actually, generally speaking,
[03:17:31] Um,
[03:17:33] I'm not a big fan of...
[03:17:36] This is why I'm not a big fan of providing cache solutions.  Even this universal data fetching thing,  where I have a cache primitive, it's default behavior
[03:17:45] is ephemeral, essentially. It lasts the length of the request on the server,
[03:17:50] And on the client, it's basically a preload cache that lasts less than like a couple seconds.
[03:17:56] because it's just literally over the course of a navigation.
[03:18:00] It...
[03:18:01] I did implement a
[03:18:02] I did keep it around as a back cache so people get the browser back behavior.
[03:18:08] So like,
[03:18:09] if they navigate to a place they've been before, fresh data. If they press back in the browser, it
[03:18:16] it loads the previously loaded data. I wanted to kind of emulate how the browser works. But generally speaking,
[03:18:24] Yeah, once you...  The idea would be that we could extend this  to allow people to have their own  caching rules in stores and stuff.  Like, generally speaking,  this is my problem partially with cache solutions  is that, like...
[03:18:36] there's always different needs and it needs to be customizable. And that is challenging. In my opinion, you can't just have one overall rule. And it puts a lot like no one wants to write to the cache and cache invalidation. Like part of what makes Remix so beautiful is that they're like,
[03:18:52] We just aren't worrying about any cache except for the HTTP browser cache.  You know what I mean? Like they're just like,
[03:18:58] Generally speaking,
[03:19:01] you know,
[03:19:02] And that's why their optimistic updates are so cool, because it's like literally it doesn't involve cache reading or writing.
[03:19:09] So, yes, I...
[03:19:12] I actually aim generally to avoid caches as an architecture for largely for this reason, because the needs are different.  But the challenge is if you have a.
[03:19:22] If you try and pull everything together and you have like a diff based...
[03:19:26] Like,
[03:19:27] which you might want to do with a diff-based framework, you're going to find yourself relying on caches more.
[03:19:32] Because you're going to be...
[03:19:35] It's like relying on memoization. You're gonna be running code and
[03:19:39] that you don't need to run because it's not granular, which means that like you need to cache like
[03:19:46] Like, how else are you going to do it?
[03:19:51] Anyway.
[03:19:56] You were about to give a solution to all friends as well as after talking about the problems.  Right, right, yes.
[03:20:02] No, I...
[03:20:05] I don't have a solution currently.  I've been exploring this like crazy.  I'm just trying to frame it for everyone here so they understand, like...
[03:20:14] it is this challenge, right? Like, I don't think this is imagined. I mean, that's the problem. It's funny because you talk to people very much in the back end sphere, and they're just like kind of laughing at us. And it's like,
[03:20:26] Sure. You know, because like from a distance, they might even think like, oh, they're just returning to service stuff that we've known for years, blah, blah, blah, you know, but it's like.
[03:20:35] They have never solved this problem.
[03:20:38] and the closest they ever got to solving it,
[03:20:41] basically right here.
[03:20:45] they haven't moved an inch in over a decade.  Like,
[03:20:49] like
[03:20:51] It's almost comical, but I mean, that's how it is, you know?
[03:20:57] Like, it's fine. We all have different problem spaces, but...
[03:21:00] But it's like,
[03:21:02] In this area,
[03:21:06] Thank you.
[03:21:09] Thank you.
[03:21:10] So, yeah, I don't know.  I think we need to kind of, I think frontend needs to accept...
[03:21:19] It's...
[03:21:20] flaws, needs to understand its true nature, and maybe we can't fight it
[03:21:26] too much. We just have to, because right now,
[03:21:33] It feels like we're trying really hard to go back against what we are.
[03:21:39] And...
[03:21:44] We probably don't need to.
[03:21:46] These things will...
[03:21:47] improve incrementally as long as we let them to, or let them
[03:21:51] And it's not about...
[03:21:55] Like,
[03:21:56] Thank you.
[03:21:59] I don't think it's about revolutionary change right now.  It's going to be funny when someone figures something out that just cracks it and everything flows through.
[03:22:07] But I think that might be the only way to stay sane right now.
[03:22:14] Thank you.
[03:22:17] I think the best friend is not the cash and developers must take responsibility. We should continue not thinking about it.
[03:22:22] She ain't gonna...
[03:22:24] Do it for them.  Framework superIQ is they must be told on how to use the tools to keep them in a room.
[03:22:28] girls never learned a problem. Yeah. Yeah. Yeah. Yeah.
[03:22:32] Yeah, I mean, this is part of the automation problem. We try to automate everything right now because there's this incredible push to make things easier for people, which means we can take those things off their hands.  But I am, as I said, I'm always a little bit uncomfortable on the caching side. That's why I was very shocked when Next so aggressively cached.
[03:22:55] But I think that's the only way it really works.
[03:22:58] Thank you.
[03:23:02] this is the way to stay sane i've just ignored front and going back and going to back end yeah
[03:23:09] Yeah, but that's kind of like...
[03:23:11] From my perspective, that's just like
[03:23:14] Putting your head under a pillow so to speak like that doesn't exist see no evil and
[03:23:19] You know.
[03:23:21] it doesn't actually solve the problem.
[03:23:26] Although is your goal to find solutions to these problems that pretty much like React  and X can get better or is it in continually?
[03:23:35] I am just trying to find solutions to these problems. There are places where React won't  follow us, so I'm not too concerned. The space is different enough with our solutions. Like,  perfect example, people don't realize this, zoomability
[03:23:48] kind of requires signals, just putting it out there,  or something signal-like.  Otherwise, it doesn't quite work.  In fact, EarlyQuick didn't, and it wasn't quite.  I think in an article I called Misko out, and he's like...
[03:24:00] Okay, okay, well, it's coming in a future version and then it like they got there, but
[03:24:05] Like...
[03:24:08] React can't follow everywhere because the solutions are different.
[03:24:15] Right. So I think it's okay. We're allowed to have different solutions. That's kind of what getting at. In a sense, RSCs are a lot easier for React than they are for other solutions.
[03:24:26] So I think that's fair game.
[03:24:32] Thank you.
[03:24:33] You can follow everyone everywhere. Sometimes that makes for very happy developers.
[03:24:44] I'm sorry.
[03:24:45] Thank you.
[03:24:47] Should have stuck with Laravel. Yeah.
[03:24:49] Thank you.
[03:24:51] It's like Pandora's box. Once you open it, it's too late.
[03:24:55] Thank you.
[03:24:58] Thank you.
[03:24:59] Thank you.
[03:24:59] Thank you.
[03:25:01] Thank you.
[03:25:02] Thank you.
[03:25:04] Yeah, I mean, I mean, it's a thing. I mean,
[03:25:12] Thank you.
[03:25:14] This is why there's pushback, you know?
[03:25:18] I'm actually really happy on that note.
[03:25:21] I don't know if I should show this off.  We got a few minutes.  I don't want to switch gears yet,  but I've added get server functions,  i.e. cacheable server functions in solid start  with the latest release.
[03:25:32] Um,
[03:25:33] which I think will make people excited.
[03:25:35] Um...
[03:25:37] I don't know if I, we'll see if I want to talk about that, but
[03:25:41] I'm trying to...  I'm trying to get to...
[03:25:49] get to something here. And the truth matters, this is a hard topic that I could probably ramble on for ages. I think the core of the content you guys get, you understand why this is a hard problem. There isn't a simple solution. I think we need to
[03:26:01] I think it comes with acceptance and re-evaluation in terms of space.  I think perhaps my own...
[03:26:08] This is a reflection of my own expectations being too high.
[03:26:12] Maybe that's what has to...
[03:26:14] be grounded a little bit.  I'm always an optimist when it comes to this stuff.
[03:26:19] And
[03:26:22] I try to be pragmatic when it comes to actual implementation, but I'm always an optimist when it comes to like the direction of the web in general.
[03:26:31] And
[03:26:32] I think perhaps I have to be a little bit more realistic here.
[03:26:37] Um...
[03:26:39] I
[03:26:41] I'm struggling here. It's funny. I've talked to a few people where they don't see
[03:26:47] what this next thing is.
[03:26:50] Right.
[03:26:51] People throw out their suggestions.
[03:26:54] And it's funny, Dan Abramoff said something along this lines a few couple of years ago about like how nothing outside of React excites him.  And I'm like, what are you talking about?
[03:27:02] There's plenty of exciting stuff outside of React that's exciting and developing in these directions.
[03:27:09] I'm not saying that. I think there's a ton of interesting work going on.
[03:27:13] I just saying that I don't, the reason I don't know what this is,
[03:27:16] Like we haven't
[03:27:18] If there is going to be something like this, I don't think we've seen it yet.
[03:27:22] Thank you.
[03:27:23] Not quite, it's possible that
[03:27:27] like someone fixes server components. Maybe that's a direction. It's possible that someone makes resumability easy.
[03:27:34] So, like...
[03:27:37] But it's possible that it's none of those.
[03:27:41] And usually when we're in these kind of stuck tough places, we have to just...
[03:27:47] back off on one of our constraints or assumptions and
[03:27:50] rethink the problem.
[03:27:52] And I think...
[03:27:54] for me, at least personally, it's going to be to figure out
[03:27:58] Perhaps.
[03:27:59] through benchmarks or whatever.
[03:28:01] what is actually important.
[03:28:03] Anyway.
[03:28:04] That's mostly what I want to say.
[03:28:08] Okay, chat, how are you doing?
[03:28:18] Thank you.
[03:28:19] Thank you.
[03:28:21] With your friend on older doors in the 90s, 2000s.  Yeah, completely completely.
[03:28:28] I was joking, like...
[03:28:29] To be fair, in this period, there was just web developers.  There's no back-end, really, running.  But the split definitely happened during this time period.  I remember...
[03:28:42] I guess there wasn't, not in this phase, because front end was basically nothing, but from about 2005...
[03:28:48] Onwards, there's been
[03:28:50] front-end developer, back-end developer split.
[03:28:53] This was like, this jump was basically like all web developers kind of became back end developers. And then this phase, the front end developers, I worked on teams, but back then front end developers usually meant like CSS.
[03:29:07] more like they did HTML and CSS.
[03:29:09] Um,
[03:29:10] You know, even through this phase, like...
[03:29:13] They needed people to actually build the views and what they look like.
[03:29:20] So like,
[03:29:22] In a sense, this continued on into here. So it wasn't like there was ever a gap.
[03:29:26] There's been front-end developers on the web the whole time.
[03:29:33] Thank you.
[03:29:35] Right. Yeah, I think this is fair.  Like depending on how you put it in the in the 90s,
[03:29:40] There's just web developers.
[03:29:42] Like, yeah.
[03:29:44] But in a sense,
[03:29:46] Some of those web developers became the front-end developers...
[03:29:49] of the next phase.
[03:29:58] Thank you.
[03:29:58] Thank you.
[03:30:00] Maybe it's because I don't know that it takes more time for Sigma to advance. I mean, we are getting there. That's why stuff is so slow.
[03:30:13] Alright.
[03:30:15] You have two takes, let's hear them.  I've enjoyed your discussion so far,  so I'll air these out.  Send the program to data, read, tweet, send,  okay send a wasm module instead of asking the backend for data.
[03:30:27] system, not a single app. Architecture is eventually
[03:30:31] Right.
[03:30:32] Okay.
[03:30:35] Yeah, yeah. I mean, CQRS is the trick to managing distributed systems, essentially.
[03:30:44] and eventual consistency. So apply that to your web. I mean, how do you make that into an API or a surface area that
[03:30:52] um...
[03:30:54] that works for everyone. I don't know. It's interesting. Like, but we're acting purely architectural. The first one I'm not
[03:31:04] Read the tweet I sent. Yeah, I might have to go back and see that. The first one, I'm not clear what you mean, data sent wasmshift module instead of asking the backend for data.
[03:31:12] The funny thing is, I know this isn't probably what you're saying, is that
[03:31:17] We're actually...
[03:31:20] server functions these days,
[03:31:21] like our APIs are actually sending live JavaScript basically over the wire.  Like we're,  we're actually executing code.  I showed this in a few streams back,  but like we're,
[03:31:31] Our data is actually executing JavaScript code.  I don't know if that's kind of similar idea, but we're actually sending data as code.  It's cool.
[03:31:50] Interesting.  Yeah, you're saying that the main advantage of Wazim  is to provide an excuse to adopt language-level solutions.  Yeah.  I mean, we've been struggling against the language of JavaScript for ages now.  This is why all the frameworks have compilers, right?  Like, it doesn't quite...
[03:32:03] Fit.
[03:32:04] what we're looking for.  Interestingly though, these days JavaScript frameworks  really just want compilers to make signals  easier to use in JavaScript.
[03:32:11] I mean...
[03:32:12] Basically, you could say that React is different, but another way of looking at it is that.  They just want to forget so they don't need to write signals the way signals work, but they basically want them to act like signals.
[03:32:25] So...
[03:32:26] I don't know. We...
[03:32:29] Anyway.
[03:32:35] Thank you.
[03:32:37] Thank you.
[03:32:38] Yeah, see if you have local data pieces.
[03:32:41] Yeah, I mean...
[03:32:46] Yeah, compared to but I mean,
[03:32:50] Yeah, nothing is without trade-offs.
[03:32:55] Thank you.
[03:32:58] Yeah, I'm going to have to keep the rest of this conversation probably.
[03:33:03] probably, um, in chat. I don't think I'm a whole street, like whole topic doing this,  but you guys keep on talking about, I'm going to move on to probably the next topic.
[03:33:14] Thank you.
[03:33:15] Thank you.
[03:33:16] Oh, you're saying that Remix's approach is embracing CQRS.  Yeah.
[03:33:24] Yeah. What I'm actually looking forward to seeing is more
[03:33:28] more data dependency driven stuff. In a sense, Tansac query
[03:33:34] and its keys is just signals.
[03:33:36] like
[03:33:37] Bear with me, like it's manual in that it's marked by keys as a way of like connecting the dots.  But the invalidation system is basically like a dependency graph that you trigger.  So I want to see more solutions around granular invalidation and
[03:33:54] tying those systems together.  That's,  that's what I want to see.
[03:33:58] Thank you.
[03:33:59] Okay.
[03:34:04] Alright, anyway. Let's talk about a couple other topics and then we're going to get into this week in JavaScript.
[03:34:13] Mmm.
[03:34:15] All right, cool, cool, cool.
[03:34:20] Um...
[03:34:22] I'm going to take a bit of time now to talk about solid and solid start.
[03:34:28] bother anyone hopefully.
[03:34:30] Um...
[03:34:33] Okay.
[03:34:35] Uh...
[03:34:36] I do have a fairly
[03:34:38] Um,
[03:34:41] important topic I want to talk about. Um,
[03:34:45] So...
[03:34:47] Yeah, let's talk SolidStart. For those who aren't familiar, though, I imagine a lot of you are, although this is more viewership live than I'm used to. SolidStart is Solid's meta framework like Next, except it's an anti-meta framework in that we try and keep things...
[03:35:04] Low level that we don't include as many pieces as possible to leave it open for you to make your to have your own opinions. I'm not a big fan of
[03:35:12] of,
[03:35:13] Thank you.
[03:35:14] Bye.
[03:35:15] Shoving opinions on people if I can get stuff as low as possible. I will try obviously sometimes it is hard
[03:35:21] And my dislike...
[03:35:24] of pushing opinions on people,
[03:35:26] also makes me dislike accepting opinions of others.  So it's,  it's,  it's one of those interesting balances because the whole existence of
[03:35:36] of solid start and this thing is basically
[03:35:40] But it
[03:35:41] a bit hypocritical.
[03:35:42] Because in a sense, I'm trying my best.
[03:35:46] But I'm struggling with the fact that I wish
[03:35:50] that it
[03:35:51] didn't need to exist.
[03:35:54] Anyway.
[03:35:58] So a barely meta framework.  Yeah, I mean, generally speaking, I view this mostly as a templating thing.  We have a whole stream about it when I call you the shape of frameworks to come.  The initial load of solid start, if you just take the most base template or just install it in your NPM and just like
[03:36:16] you know, add the couple files it needs to get started. Solid start.
[03:36:21] is basically a client-rendered app in five kilobytes of JavaScript. It's basically
[03:36:28] like CRA, if CRA was small. Every piece, the router, everything else can be brought in.  It's not SolSTART specific, it's just solid ecosystem. Generally speaking,
[03:36:37] All Solid Start is, is a way to get...  So you can hit a switch and go SSR true  and be able to deploy it to Vercel Netlify everything that you need.  It's not...
[03:36:47] it's designed to be open, it's router agnostic.
[03:36:52] within the solid ecosystem.
[03:36:53] but it has file system routing.  But we use convention as a way of driving configuration.
[03:37:01] So it's not about...
[03:37:03] Like,
[03:37:04] Obviously, we could probably...
[03:37:06] make the convention customizable at some point.  But essentially the idea is that
[03:37:12] Um,
[03:37:13] everything is configurable, you can avoid our convention, essentially. So we just use convention as a way of short-cutting it. So there's a file system routing router that you can
[03:37:22] take the configuration out of the file system router and plug into the router of your choice, essentially.
[03:37:28] Pass it in.
[03:37:29] So that's like the high level gist of it.
[03:37:35] Thank you.
[03:37:40] Thank you.
[03:37:43] So I'll start a library, God, I dare you.
[03:37:51] Thank you.
[03:37:54] I, thank you. I, this is, I, I'm, that's my hope, but who knows.
[03:38:04] Thank you.
[03:38:08] Thank you.
[03:38:10] Thank you.
[03:38:15] Is SolidStartRouter capable of TAN stack?  It's capable in different ways.  TAN stack router isn't as
[03:38:22] at least how should I put it?  It's built for react.  Um,
[03:38:27] It has some great stuff. He's added granular updates and stuff. Solid's router is obviously built with Solid in mind. It supports all the Solid features as natively as possible, but it doesn't have Tanstack's typing ability, so...
[03:38:39] Like, they're just a little bit different.
[03:38:42] If there was a solid TanStack router though, you could use it in Solid Start. That's like my point, right? Slide it right in. Okay, so
[03:38:49] I'm going to post this up here.
[03:38:51] because...
[03:38:52] I want to talk about, it's been one month since we released Solid Start Beta 2, and I want to talk a little bit about it.
[03:39:03] I'm pretty happy  with how things have been going
[03:39:11] There's been, you know, some growing pains with Vinci.
[03:39:14] Actually, you know what? Let's take a moment to talk about Vinci.  Vinci...
[03:39:17] is kind of the core of Solid Start.  It's a wrapper over nitro NH3.
[03:39:23] And it's like a...
[03:39:26] Nikhil Seraph created it. The guy who did most of the first Solid Start beta, Solid Core member, does amazing work. He's also the guy we've had on stream several times. He's also responsible for getting RCs to work in VEAT.
[03:39:41] Um,
[03:39:43] for example. And
[03:39:46] The more I use it and follow the vision, the more excited I get about it because
[03:39:51] I just told you a minute ago how important it is to me to shed convention.
[03:39:56] Vinci, everything is configuration. Like you can literally just go like, oh, I want
[03:40:01] I want...
[03:40:02] it to work like remix.
[03:40:04] And you just...
[03:40:05] put it, you just put in some configuration,  and then now your code splitting works exactly like  remixes, loaders, and actions.
[03:40:10] I was showing it to Tanner Lindsley the other day and I got excited about it again because he was like, okay, well, how do I make TanStack SSR framework? And, you know, he saw some demos, but he asked me about, he was working on some new code splitting for his router. And I'm like,
[03:40:25] Oh yeah, you just go to Invinci and just like drop this configuration and it'll do exactly what you want.
[03:40:31] It feels a little bit like...  Do you know what it reminds me of?
[03:40:36] The first time I use VEAT.
[03:40:38] Where it was like, you're like, why has this thought about all the things I want,
[03:40:46] Why does it make it let me make it feel like it's my own?
[03:40:50] You know, and then you use it for a while and then you're like,
[03:40:55] This is kind of brittle a little bit.  Like beat one, you're like...
[03:40:59] Somehow they've hacked
[03:41:01] ES build and I guess that would be too ES build, but like ES build, roll up,
[03:41:06] Like, a bunch of stuff  all together, and...
[03:41:10] On the surface, it's exactly what I want, but
[03:41:13] You know, there's some stuff.
[03:41:15] But you know 100% that it's like the way things should be.
[03:41:20] And then by the time you get to be five, you're just like, you got the sunglasses on, you know, you're just like, heh heh heh.
[03:41:26] That's what Benchy feels like, but for the server.
[03:41:29] Like.
[03:41:30] Yeah.
[03:41:32] this kind of capability, being able to like,
[03:41:35] handle stuff like server components. It has a custom setup for making your own use client, use server, use whatever kind of thing. It's all built in to this, all via configuration. And the bundler handles those kind of directives. It handles file system routing conventions. It handles...
[03:41:53] It's...
[03:41:54] And then you basically take Nitro's
[03:41:58] like runtime and bundling piece, and suddenly you're not worried about
[03:42:04] Any of that. You just know that
[03:42:07] you can take these conventions and you can deploy it anywhere.
[03:42:11] So,
[03:42:12] I'm very happy about Vinci in general.
[03:42:16] There's bugs.
[03:42:18] Things that you're like, eh, that's kind of weird.  But...
[03:42:21] It's coming along.
[03:42:26] *laughs*
[03:42:29] Yeah, no.
[03:42:33] Yeah.
[03:42:36] This has been the joke in the solid Discord for like the last...
[03:42:40] Little while I know that like next has that stuff too, but it's really funny when when you have like
[03:42:45] Um,
[03:42:46] You have Vinci, you know,
[03:42:50] you know, like a system generically made for it, not just like a specific implementation of a webpack plugin.
[03:42:58] But yeah, people have been just
[03:42:59] Yeah.
[03:43:01] Anyway, um...
[03:43:04] I actually don't know what it would take to make that work, but it just it is interesting.
[03:43:11] Well, whatever happened to Bling is this, essentially.  The problem was Bling was a compiler solution, and we needed a bundling solution.
[03:43:20] That's that's the summary of it.  In fact, to be fair,
[03:43:25] we need a bundling and compiler solution to get stuff to work.  You need a compiler to hoist stuff.
[03:43:30] Use.
[03:43:31] sections or server functions out of the flow.
[03:43:35] but you need a bundler to do the proper code splitting, and you need a bundler
[03:43:40] to manage like
[03:43:42] the trees, so to speak. You don't want
[03:43:45] code behind a lazy load import not to run because your stuff's all runtime and
[03:43:49] Like you need to, it's a bundling problem.  Bling could never solve the bundling problem on its own.
[03:43:56] Okay. So my comments here. So,
[03:44:01] Uh...
[03:44:02] There's four major topics related to Solid Start that I think need to be addressed.  And that's why I want to address this on stream.
[03:44:10] Since we have a few minutes.
[03:44:11] First of all,
[03:44:13] Thank you everyone for their patience. I'm going right to the end here.
[03:44:17] Solid start beta 2 switched the default from wait till render to streaming. We've had both modes for years.
[03:44:24] I thought it was time.  We were finding lots of bugs with SolidSCR streaming online.
[03:44:29] I am doing...
[03:44:31] releases to fix some of the issues around hydration with streaming. It's taking a little bit of time. I'm glad we're finally getting there. You can always turn this off. You can just go SSR async. But I just wanted to kind of point out that
[03:44:45] There are some streaming bugs and I'm thankful for the people who are braving getting streaming to work.
[03:44:55] Thank you.
[03:44:59] - Does use server make bundling easier than server-dossering  or are they the same and the convention is the same as you?  It's the latter.  It doesn't make it any easier for bundling.  It's just that we needed a solution that, that,
[03:45:10] included bundling. The syntax doesn't actually matter. We just react syntax reacts kind of...  There's a better chance that other solutions... like Vinci was based on BunApp and this is where we  like first saw it. Jared Sumner came to me and he was like, "Hey,
[03:45:28] What do you think of the solution?
[03:45:30] You can have server components in solid, essentially.  He's like, this is a framework agnostic way of using these directives.  And I was like, I was like, oh, but we use server dollar sign.  And he's like, eh.
[03:45:42] And I realized at that moment, I was like,
[03:45:45] The rest of the ecosystem is not going to play ball.
[03:45:49] so to speak.
[03:45:51] Like we could build a compiler on top of it or whatever, but like,
[03:45:56] If I just want all the bundler support out of the box, it's probably best to align with React.
[03:46:02] I'll show you
[03:46:03] Some consequences there.
[03:46:07] in a minute, but I, I,
[03:46:09] I just want to talk about the three main things coming and how this right now we're on 0.4 of solid start, how this is going to affect 0.5.
[03:46:18] - Thank you.
[03:46:20] First thing,
[03:46:23] API routes.
[03:46:26] One of the funniest consequences, not funny, but interesting consequences of having...
[03:46:31] uh,
[03:46:32] bring your own router is it's really apparent that page routes and API routes are different things.
[03:46:38] because people can literally add routes programmatically.  They can insert routes at different paths.  And suddenly you're in the situation where,
[03:46:45] The file system router for the pages and for the API routes
[03:46:49] are not aligned at all.
[03:46:52] And there's no way we can even matching patterns that someone came in and they made a
[03:46:57] what was it, like a catch-all API route,  and they're wondering why the pages...
[03:47:02] in that directory weren't
[03:47:04] getting hit. And I'm like, it's because we had to process the API route first, because
[03:47:09] the we don't
[03:47:11] if you can think of it as like a server router,  essentially,  um,
[03:47:16] We process the API first and then the catch-all is the page router because we
[03:47:21] we don't know what the page routes are until runtime, until the point that we're actually rendering the page.
[03:47:28] We have the file system routing, but we can't,  because it's completely configurable,  we can't trust that that's the final version of the routing.  This is a trade-off that comes up with being router agnostic.
[03:47:39] So what this means is that we're going to split
[03:47:42] the API routes or like the direct handlers,
[03:47:46] out of the page routes. So essentially like the main route thing for your app,  like where the pages are, where, you know,
[03:47:54] where you like writing your app code, your server functions, all that kind of stuff.
[03:47:59] It's going to be in one folder.  And if you want file system routings for generic handlers,  that will be in another folder.  And I know this is not
[03:48:06] the greatest from people, you know, trying to put stuff side by side, but it actually makes sense from how things actually work and
[03:48:14] If you think about it,
[03:48:15] Stuff like server functions, page rendering, those are innately tied together. Whereas API routes can be separated out, like deployed to different serverless functions. Like, like,
[03:48:26] They aren't, you know, a server function or a server action case might redirect to a different, you know, server system.
[03:48:36] component or whatever and like re-render on the server or feedback through the loop, through some data fetching mechanisms and stuff that I've been
[03:48:42] API routes are a lot simpler. They just spew out JSON. Or whatever you want. They're generic. They're just like a basic
[03:48:51] Route handler. So
[03:48:53] um they aren't the same so we are going to split them out
[03:49:00] It just removes confusion and...
[03:49:05] Yeah, it's just an interesting trade-off.
[03:49:16] Just a comment here. I love Nikhil's energy and vision behind Vichy. What feels a bit off is how much is focused on serverless for someone coming from PHP to Node.js for the Node.js use. Well, I mean, to be fair, almost all the meta frameworks are focused on serverless because that's like the path to deployment. I mean, to be fair,
[03:49:34] You can take a node server anywhere.
[03:49:38] I do feel that we we might be victims of being Vercel or Netlify.
[03:49:45] users generally, Cloudflare, big Cloudflare fans over here as well. So that might influence us
[03:49:52] But if you look at all the...
[03:49:54] a lot, most of the frameworks, Remix might be a little bit different, but like most of them,  it's all about these adapters and it's very serverless catered because basically if you  want a lowest common denominator here, we have to assume serverless essentially.
[03:50:06] Thank you.
[03:50:09] So yeah.
[03:50:13] There's some convention questions here about like having a namespace path or what folder naming.  I'm very open to people joining this discussion to give their input.
[03:50:24] Thank you.
[03:50:28] Uh, base path fiasco.
[03:50:37] Thank you.
[03:50:38] Are you purely thinking about the web server as a web server or server? Sometimes you want the same route path because of
[03:50:48] Thank you.
[03:50:50] Thank you.
[03:50:52] Thank you.
[03:50:54] Yeah, I'm not sure actually what that means.
[03:51:00] Do you think there'll be SST support? Yeah, I mean, Dax is already looking at it, so I imagine it'll be coming soon.
[03:51:11] The thing is, you literally, I think our start command literally just runs node right now  straight off the bat.  Um...
[03:51:20] Thank you.
[03:51:21] Like if you by default, if you build solid start project and then just want node dot output index MGS or whatever, it runs a node.
[03:51:30] Okay.
[03:51:32] Um...
[03:51:34] But there's a couple other topics here that are worth getting into.
[03:51:45] Thank you.
[03:51:46] Mmm. Are you talking about using extensions to differentiate them?
[03:51:57] or like content type. It's interesting. I
[03:52:00] This might be tricky in general.
[03:52:04] But yeah.
[03:52:06] Content type.
[03:52:16] - Yeah, and especially with the desire  for splitting API routes,  that kind of decision would have to happen
[03:52:23] before you even hit
[03:52:26] Like our application server. I don't know. That's interesting.
[03:52:33] Okay, except header, okay. But yeah, the content type, yeah, yeah.
[03:52:39] Thank you.
[03:52:41] Yeah.
[03:52:42] - Yeah.
[03:52:43] Thank you.
[03:52:45] Yeah, I mean...
[03:52:46] Okay.
[03:52:49] I think that's tricky in general.
[03:52:55] I'll keep that in mind if there's an easy solution, but it's not the priority if people can't
[03:53:00] Yeah.
[03:53:03] Thank you.
[03:53:08] AppRouter for the way they combine them, but AppRouter also doesn't, isn't router agnostic.
[03:53:15] Thank you.
[03:53:16] So, yeah.
[03:53:18] Yeah, that's interesting.
[03:53:23] Okay, moving on here.
[03:53:28] Yeah.
[03:53:29] Yeah, we actually, I think we updated this in release. We're still working on this, but just so people know, we've had some issues with base path handling. There's a difference between where your assets go and a difference between what the server thinks the base are.
[03:53:44] We didn't realize this and we treated everything as a base path. So I'm expecting this
[03:53:49] to be updated in Vinci coming up very soon.  One thing I do want to mention to people though is
[03:53:55] I think I might have...
[03:53:57] overstepped
[03:53:59] in
[03:54:00] SOLID GS Router version 0.10.
[03:54:05] What I mean is I pushed everything back to lower anchor tags,
[03:54:08] There's lots of nice benefits of using lower anchor tags.  It makes the templates larger.  There's no confusion in whether this is a client component.  It's just a link.  The...
[03:54:18] And...
[03:54:19] But the problem I realized only after the fact is a lot of routers have a way to setting the base path.  And we have no way to interact with the URL directly if we use lowercase anchor.
[03:54:29] The base path can be applied to uppercase anchor, but not to lowercase anchor.
[03:54:33] So,
[03:54:36] It means it basically makes the base path argument to the router useless if you use lowercase anchor.
[03:54:42] And I don't know if that's acceptable.
[03:54:44] I mean, I was avoiding it because I wanted to keep this as a client component when we get to server component type stuff and keep this as a server component, essentially.  Like we didn't need to send client stuff for the lowercase anchor.  But resolving base path seems important.  I don't think it's a feature that we can just remove because it puts the onus on the developer to go and add the base path to every single URL in their app.
[03:55:09] Um, usually it's like an environment variable or something, but it's still like
[03:55:14] You don't want the person to do that.
[03:55:16] Um...
[03:55:18] The only way to keep anchor lowercase and not force people to run it through a base path function or something like that would be to use the compiler and a special directive, kind of like Svelte does.
[03:55:30] That's just not us.
[03:55:31] So I think, sadly, we might have to go back to capital A here.
[03:55:36] as a convention in the router moving forward. I just wanted to put this out there. I don't know
[03:55:40] This was an oversight on my part. I was so anxious. Everything was... Basically, I can't have all...
[03:55:46] Three things I can't have progressive enhancement working and
[03:55:50] Um...
[03:55:52] or I can't have base path automatically applied,
[03:55:55] Um,
[03:55:57] essentially,
[03:55:59] Because we could just have the lowercase anchor lie and use the route interception to make it the right path.
[03:56:08] Obviously that's awkward when you hover over links and they're the wrong URL, but it would work.
[03:56:13] without intercepting it. But then if there's no JavaScript on the page, then it would link to the wrong place.
[03:56:19] and
[03:56:21] Yeah, so there's just like no winning.  I can't, you can't have lowercase a, progressive enhancement, a,
[03:56:28] And, uh...
[03:56:30] Thank you.
[03:56:31] And base path.
[03:56:34] You can't have all three.
[03:56:38] Like, we already have capital A.  I just... I just  was...
[03:56:43] I was like we never took it away people can use it. I was just pushing all our examples and everything to lowercase a I think it's weird
[03:56:53] To have both.  If basically...
[03:56:57] Yeah, I don't know. Maybe this is what people think. Maybe it's fine to keep lowercase age if you know that you're never going to do base caps. We do have both.
[03:57:06] We never took it away. I just pushed the lowercase anchor as working.
[03:57:14] We had other ways to force regular browsing, like using Target or RHEL external. There's other ways to opt out of the anchor. I was never really worried about that. It was more that...
[03:57:26] Um,
[03:57:27] So
[03:57:28] There's a lot of really nice benefits to using lowercase a.
[03:57:33] In fact...
[03:57:34] Can I show you one of those benefits? This is the kind of stuff you get as a framework author.
[03:57:40] Picture this fun one.
[03:57:44] Thank you.
[03:57:47] Here's a fun one.
[03:57:49] Okay, no, not that one. That's a TypeScript thing. I don't clear about that.
[03:57:53] Top-level anchor breaks out of SVG namespace.
[03:57:56] Okay.
[03:57:59] Here's a fun one.
[03:58:01] See how this is black?
[03:58:03] There should be a red square in it.  If I get rid of this show...
[03:58:08] There is a red square in it.
[03:58:10] Okay.
[03:58:11] And it's a link. See that? Do you know why this works? Because an SVG element
[03:58:16] There's an SVG anchor tag.
[03:58:19] Okay.
[03:58:21] Thank you.
[03:58:22] It is not the same as an HTML anchor tag.
[03:58:25] So my problem is, when you make this a show, if you look at the compile output, you can kind of understand what happens. Let's remove this for a second.
[03:58:32] I'll keep the show up there first
[03:58:35] You can see that the anchor and the SVG are in different templates.  So it knows this one's SVG.  It does not know that this one's an SVG.  If I remove the show here,
[03:58:45] and make it part of the same template,
[03:58:47] It's like, okay, well, it's...
[03:58:49] in the SVG, it's the same template. Now,
[03:58:53] Um,
[03:58:53] Why does this matter? If I get rid of the anchor,
[03:58:57] and use a rect,
[03:58:59] Rect actually works.
[03:59:03] And you know why Rekt actually works?
[03:59:05] There's an interval in here, that's why it's flickering.  The reason the rectangle actually works  is because we can see that rect is an XML element or SVG,
[03:59:16] and we actually wrap it in an SVG element  when we clone it, okay?
[03:59:19] Whatever. And then we pull it out. There's different ways to solve this problem.
[03:59:24] I'm reviewing them right now, but generally speaking, we know that a rect is an SVG element, so it always creates it properly.  However, an anchor tag could be either/or.
[03:59:34] So, it's one of only four elements that we have, I think, that can be either/or. But,
[03:59:40] Um...
[03:59:42] You know, we have to default it to being, um,
[03:59:47] Uh...
[03:59:49] HTML element. It occurs to me that I can look at this template and realize, because this child is an SVG element, that this should be an SVG. But...
[03:59:56] What if this was just
[03:59:58] Hi.
[04:00:00] It's not very easy to know that this should be an SVG.
[04:00:03] We could say, "Okay, well, what if you analyze the whole thing up to function scope?" Sure, then you could probably figure it out.
[04:00:09] Like...
[04:00:10] Generally speaking, each context is analyzed independently. Like, what if this is a expression, you know?
[04:00:18] Like, not...
[04:00:20] They're like,
[04:00:21] What if we're entering in and out? What if there's a callback here?
[04:00:27] You know,
[04:00:28] Let's say I can still solve this.
[04:00:32] What if I pull this out into a capital A component?
[04:00:36] There is basically no way that capital A could know...
[04:00:42] whether it's used in XML or SVG or not.
[04:00:54] Thank you.
[04:00:55] Thank you.
[04:01:00] Thank you.
[04:01:04] Thank you.
[04:01:09] So like this is this is one of those things that like there there isn't a great way to solve it the way you could solve it.
[04:01:17] is if you basically know that you're in the scope of an SVG,
[04:01:22] And at runtime...
[04:01:24] create the element the right way based on what the current running scope is.
[04:01:31] I'll tell you right now, Svelte doesn't even do that. Svelte just analyzes the template, right?
[04:01:36] React probably does the scope type thing because it can just...
[04:01:41] it can render it all and then process the VDOM in one go.
[04:01:45] For us to do this, we'd have to invent context, because picture what would happen
[04:01:51] If
[04:01:54] Sorry, let me go back to the issue here.  Picture what would happen if you put a show component...
[04:02:00] inside an anchor tag like this.
[04:02:03] you'd have to be able to like start and stop the SVG again.
[04:02:08] This is harder for me to explain, but my point is...
[04:02:14] Thank you.
[04:02:15] If this was just a lowercase a, this would be way simpler.
[04:02:19] Just putting it out there.  Anyway.
[04:02:21] Yeah.
[04:02:23] Yeah.
[04:02:24] like compilers have limits on the scope of which they can analyze.
[04:02:30] So it's always possible to find a way to break a compiler.
[04:02:34] if you depend...
[04:02:37] on
[04:02:38] scope analysis purely.  But runtime approaches are probably...
[04:02:44] Um,
[04:02:48] much more expensive. Basically, you could never know what it would be inserted with. So you'd  have to check for the SVG scope, even in an app that has no SVG.
[04:02:59] Do you know what I mean? Like...
[04:03:02] And you'd have to maintain that scope.
[04:03:05] being able to start and stop it when
[04:03:08] partials re-render.
[04:03:11] So my gut is we just say that like, okay,
[04:03:15] Anchor is a weird special case.
[04:03:18] And we go with that.
[04:03:19] But I just wanted to kind of point it out there that if...
[04:03:24] This means that
[04:03:26] Right now, any capital anchor tag in SVG generally just doesn't work.
[04:03:30] Because, and as I said, same deal with Svelte or whatever too.
[04:03:34] This isn't solid specific.  It's just...
[04:03:37] It can't know.
[04:03:39] from compiler analysis.
[04:03:46] Who could check? Because the element gets created without knowing about its parent and then inserted into its parent.
[04:03:53] Right.
[04:03:54] Like,
[04:03:55] There's...
[04:04:00] No, no, that's not enough to accept it. This is just a completely unrelated issue that just happened to happen to get reported this week. So I was like, I was like,
[04:04:11] I was just... I wanted to throw this out here, because like...
[04:04:16] Thank you.
[04:04:17] Thank you.
[04:04:18] This is just an oddity.
[04:04:22] Any other element, it would be fine. It's just really...
[04:04:25] We like.
[04:04:26] Yeah.
[04:04:28] -
[04:04:29] This is part of that like you can never win.
[04:04:32] Um,
[04:04:34] Art.
[04:04:35] But yeah.
[04:04:36] Just for people's information, if they're interested in why I went one way and then completely back traced in the next release, I apologize.
[04:04:46] This is an oversight problem.
[04:04:53] Okay.
[04:04:57] Thank you.
[04:05:02] At least it wasn't over three major versions.
[04:05:15] Yeah, I know where you're going with that.
[04:05:23] Anyway,
[04:05:25] Last topic I want to talk about with Solid Start before we get into this week in JavaScript is...
[04:05:32] I
[04:05:34] kind of realizing that
[04:05:38] We have to take a stance here on wrapping or not versus wrapping.  What I mean by that is
[04:05:45] SolidStart uses vtconfig.
[04:05:47] But it's not really vconfig, it's actually
[04:05:50] ViteConfig.com
[04:05:51] passed into multiple Vinci configs.
[04:05:54] Thank you.
[04:05:55] Which means certain properties don't work properly.
[04:05:59] Because Vinci handles it.
[04:06:01] Which is fine. I can live with that.  And there's certain other side effects.
[04:06:05] Like,
[04:06:06] Thank you.
[04:06:08] you can have multiple
[04:06:10] Instances.
[04:06:12] builds use the same plugins.
[04:06:14] So actually you kind of want to wrap plugins in a function, but Vee doesn't support wrapping plugins in a function.
[04:06:20] So...
[04:06:22] And there's a split between Veed and VTest.
[04:06:25] a bit because...
[04:06:27] like you set things up differently.
[04:06:29] To be fair, we could just name it SolidConfig or StartConfig.
[04:06:33] But it is basically vconfig.
[04:06:35] so I didn't really see a point. But it's something that I'm getting increasingly sensitive to when we want to solidify for 1.0.  Because my point here is, I actually think from features are pretty good.
[04:06:46] Um,
[04:06:47] We're approaching RC pretty quickly here.
[04:06:51] And my similar concern is with start.server.  It's basically nitroconfig, but it's again, not nitroconfig.  So we don't do everything nitro does  because Vinci only uses nitro
[04:07:02] for your final build, not in dev.
[04:07:07] So...
[04:07:10] Yeah, I'm looking for opinions or thoughts here.  I don't know, you know, any big...
[04:07:15] Uh,
[04:07:18] you know,  Nitro fans out there,  people who care about these kind of functionalities,
[04:07:24] Yeah, like, again, not wrapping the smarter idea, because essentially,
[04:07:29] This is the Benton. You're exactly the kind of person I want to kind of
[04:07:34] Thank you.
[04:07:34] blow the trade-off, too, because I know for sure you'd be on the not-wrapping side.
[04:07:39] Um...
[04:07:39] Mm-hmm.
[04:07:41] I know that you're talking about anchors, but actually I'm hoping you have an opinion about this.
[04:07:50] Yeah, yeah, I think this is a fair thing. The only funny thing is it's basically vconfig except for like a couple
[04:07:58] settings and those settings might actually get supported in the future.
[04:08:01] So the
[04:08:03] There is a question there.
[04:08:07] Thank you.
[04:08:08] But we have the same problem with start server being not actually Nitro.
[04:08:13] So there's a config problem.
[04:08:15] There's the server utilities problem.
[04:08:17] Right now we re-export everything through solid start.
[04:08:21] Instead of going directly H3.  And largely that was because Vinci did the re-export.  Because Vinci...
[04:08:29] basically controls the version of Nitro we use in H3, so it didn't make sense to go straight to it.
[04:08:34] But it's also...
[04:08:36] Um,
[04:08:39] there's like some tension here a little bit because right now I kind of mashed H3 event and solids event together
[04:08:46] which is awkward. I think that's a mistake.
[04:08:48] Solid needs its own event,
[04:08:50] You know, like because
[04:08:52] It needs to be able to work in the ecosystem libraries.  That's how we can be server agnostic, or server agnostic, because we have our own idea of what a server request looks like.
[04:09:04] So
[04:09:05] It shouldn't be H3s, they're separate.
[04:09:07] But it's awkward when you, what are you going to do?  Like go like event.h3 every time.  One way to, you know, here's my example.  One way to solve this is,
[04:09:18] would be async local storage.
[04:09:21] because then you could just get rid of this.
[04:09:24] and just go setHeader.
[04:09:27] you know, name value.
[04:09:29] and the event could come from async local storage.
[04:09:31] Um,
[04:09:32] Obviously,
[04:09:33] There's gaps there today, and there's a reason that H3 doesn't support that yet, though it's on the roadmap.
[04:09:39] Similar, we could, I figured out, you could use a trick or like a special symbol where non-H3 events could be passed to H3 handlers.
[04:09:48] Um...
[04:09:49] And...
[04:09:50] Uh...
[04:09:51] You know, still work.
[04:09:54] by looking for a special symbol.  That's how RxJS Compat works.
[04:09:59] there is a slight, mild performance consideration to this.
[04:10:03] But yeah, like with the problem is if
[04:10:07] Async local storage doesn't work.
[04:10:09] and you don't accept the event,  it's kind of awkward because middleware and stuff...
[04:10:14] Thank you.
[04:10:15] Stuff that's innately async.
[04:10:18] perhaps won't work properly.  It's always fine to like, I have some like right now we work on stack blitz.
[04:10:26] without async local storage because we can kind of depend on the fact that like
[04:10:31] At the beginning
[04:10:32] you have access to it.
[04:10:34] when we, you know, like most people don't do something async and then fetch our event.  You can always hoist to the top of the context, the top of the API you're using, the top of the server function you're using.  But.
[04:10:46] Um,
[04:10:47] when you pull it up to the middleware level it's it's troublesome so
[04:10:52] There's like a temptation here to wrap H3 and...
[04:10:56] functions and basically manage all these cases ourselves.
[04:11:01] Until some point in the future where H3
[04:11:04] will support it, essentially.
[04:11:08] because otherwise
[04:11:10] Trying to ship like this right now is really awkward.
[04:11:12] There's no single purpose solution.  And I understand why something like H3 wouldn't do that today.
[04:11:26] Right?
[04:11:31] But I mean, you're not importing it from H3, right?
[04:11:35] This is sort of
[04:11:37] Thank you.
[04:11:38] where I started kind of working on a bit of a,
[04:11:41] Like,
[04:11:43] Okay.
[04:11:45] bit of a proposal.
[04:11:49] So like we could do this, right? What I'm saying is,
[04:11:54] We...
[04:11:55] instead of being exported from solid,  we note that this is a Vinci thing.  And essentially...
[04:12:01] the
[04:12:02] I think one of the challenges we have here is we've been talking a lot about nitro. We've been talking a lot about H3, which I would love to bring up to the surface. But if we can't bring it up to the surface, we shouldn't be pushing people towards nitro. We should be...
[04:12:14] giving
[04:12:16] like pointing people to where the thing is.
[04:12:18] Instead of saying like, go look at the Nitro docs, which we can't fulfill.
[04:12:22] And in fact, if you go look at the NitroDocs,
[04:12:26] It looks like a very different thing.  Auto imports.  We don't do auto imports.
[04:12:31] routing, it has all these like, hello.get, we don't do any of this.
[04:12:36] Right.
[04:12:38] like completely different conventions, all this stuff.
[04:12:41] Auto imports like in the examples,
[04:12:44] You know, like...
[04:12:47] Maybe we shouldn't.
[04:12:48] push people to nitro and instead...
[04:12:51] push people to the consolidated API of Vinci, so to speak.
[04:12:56] That's kind of where I'm sitting at right here.
[04:12:58] I would love...
[04:13:00] if we could expose the stuff, but it doesn't make sense to...
[04:13:03] H3 might...
[04:13:05] at some point.
[04:13:07] But.
[04:13:09] We get in a pretty awkward state if we wait for it.
[04:13:14] Nitro?
[04:13:18] I don't know if we could ever...
[04:13:20] I mean, it's interesting question.
[04:13:22] Could we ever just...
[04:13:24] support its conventions like
[04:13:27] We want to have our own conventions.  That's why we use Vinci.
[04:13:33] We do store it inside the other event, but the thing is...
[04:13:45] What you're saying is like, you have to go both ways because not all places you have access, like for example, in a server function, you get request event, you're getting a solid event, then you have to get back to the H3 event.
[04:14:00] Essentially.
[04:14:03] So the question is like, when you're in middleware, which event should you be
[04:14:07] kidding.
[04:14:11] It's interesting.
[04:14:15] Thank you.
[04:14:16] I do think there is an argument
[04:14:20] for pushing the H3 event
[04:14:23] forward in some of the server-based stuff, but it would never be consistent. Whereas if you look
[04:14:30] at this proposal,
[04:14:32] When async local storage actually works, you never actually see the H3 event anymore.
[04:14:40] Thank you.
[04:14:40] Thank you.
[04:14:43] Thank you.
[04:14:54] For me, it's a simple decision. It's around asking who owns the specification and the signature of the data you expect.  For me, to find the spec and data should give me the capability of dealing with that data because those...
[04:15:02] Yeah, basically what I'm getting at is  Vinci has kind of opted to own that level,  so we should be nodding to Vinci, essentially.  If they're the ones who decided...
[04:15:13] to diverge from pure nitro,  um,  then that's who gets the nod.  And I think that's essentially,  even though that means that there's some underlying thing that,  uh,
[04:15:25] - Yeah.
[04:15:26] might change.
[04:15:28] It's really on them, I think.
[04:15:34] Yeah, that would be the best case, but I don't see that happening.  I think they're very happy with their conventions.  It's odd to me because it makes Nitro...
[04:15:42] kind of unlike all the rest of on JS, because it has file-based conventions and stuff that's very
[04:15:50] It makes it trickier.
[04:15:53] The thing that always goes good for Nitro is everything that's convention based can be configured.  So we should be able to get around it.
[04:16:03] And it's important to us because we want to
[04:16:04] We want to use our conventions, use our approaches.
[04:16:12] Yeah.
[04:16:14] I was kind of downplaying Vinci early on because...
[04:16:17] you know,
[04:16:18] give a lot of credit to where credits do.  Nitro's incredible, you know, but...
[04:16:23] Um,
[04:16:25] If Vinci has wrapped, then we follow suit, I think.  And that's basically the conclusion I came to, right?
[04:16:33] Like,
[04:16:34] There's we won't support all the nitros stuff. It's just that's how it is. Um,
[04:16:42] Right. Like in Nux, they have a server folder, which is like you have Nux over here and then you have Nitro over here and like two worlds.
[04:16:50] That's not really what we're going for.
[04:16:54] Vinci's all about you setting your conventions, so we have to trust in Vinci. Which means that Vinci's got some work to catch up with, right? It's not as...
[04:17:04] proven as nitro, even if we can take some of the good parts of nitro, um,
[04:17:10] So yeah, this is just something that we have to consider as part of stuff like even the docs are missing.
[04:17:16] pages on certain stuff.
[04:17:18] But...
[04:17:19] You know, that's a lot of pressure to put on our man, Nikhil, but I think...
[04:17:25] The thing we have to walk away with here is...
[04:17:28] As I said before at the beginning of this, what I was very excited about Vinci is Vinci allows us to build exactly what we wanted.
[04:17:34] We looked at Viq. We looked at vPluginSSR.
[04:17:38] I kind of even saw Nitro and skipped over it, you know,
[04:17:42] And all for the same reasons, right?
[04:17:45] These guys have their own conventions, their own way of doing things.
[04:17:48] which is fine.
[04:17:54] But Vinci actually lets us deliver what we want.
[04:17:56] It's that simple.
[04:17:58] So, yeah, it was actually really tricky. I had a conversation. This conversation, this discussion helped me a lot.
[04:18:06] talking to people.  I talked to a bunch of people in the community,  even Tanner, you know, to get his alignment.  And I think we're all on the same page.  Nikhil's approach, or Jared Sumner,  if you prefer to trace it all back to BunApp,
[04:18:17] is...
[04:18:18] is the way things should be.
[04:18:20] So, you know, we'll just kind of work through it.  There's probably technical shortcomings, hacks, all the fun stuff.  Reminds me of the early days of VEED. But
[04:18:29] This is exciting.  You know, it's,
[04:18:31] It's like...
[04:18:35] this is the way it should be as I said
[04:18:38] Thank you everyone who's participated in the conversation here. It helps me up.
[04:18:43] us a ton to make these kind of decisions and feedback.
[04:18:48] Um...
[04:18:50] Yeah, no. Anyway.
[04:18:54] Does this mean it just, well, that's the question.
[04:18:58] Docs are an interesting question when you have something like this. We saw this with Crate T3. Who's responsible for documenting what?
[04:19:05] you
[04:19:08] If you wrap everything, then you kind of own the docs for everything.
[04:19:12] I actually, we have a choice of how far we document into Vinci.
[04:19:16] But in our, in an ideal case,
[04:19:18] We actually...
[04:19:20] I think we only document
[04:19:23] Like this doesn't actually change it the stuff that we were pointing at nitro or maybe h3 or whatever we just point to vinci and
[04:19:30] So it puts more pressure on Nikhil, but generally speaking, because Saul's start is not taking over any more additional onus, um,
[04:19:41] I think we are free to decide how far up we want to document here.
[04:19:47] Um, we're not taking on any more.
[04:19:54] Right. So truth, truth of the matter here is like,
[04:19:57] The biggest part probably for documentation is the configuration.  The Vite config is probably the most that we're using or start config is probably the most specific to us.  It's not just a Vinci config.  You won't find that in Vinci.
[04:20:11] So,
[04:20:12] I think other than the config...
[04:20:15] There isn't really many other...
[04:20:18] imports or whatever from solid start. Let me pull up, let me see fork.
[04:20:26] Let's find solid start.  Let's pull the latest.
[04:20:34] Thank you.
[04:20:35] Jump way ahead.
[04:20:37] Um, let's go to
[04:20:42] main here. And what I want to show point out here, we go to if we go to main,
[04:20:48] Is that...
[04:20:51] Yeah.
[04:20:53] I wonder why this is still there.
[04:20:55] Delete.
[04:20:57] While this is still there, delete.
[04:21:02] is that
[04:21:04] Thank you.
[04:21:05] For the most part, the only things that you actually end up
[04:21:10] Exporting.
[04:21:13] Oh, this is, is this on the video?
[04:21:14] On the Vinci branch.
[04:21:16] with the
[04:21:17] Second.
[04:21:19] Oh, let's go main.
[04:21:24] Pull main. Sorry, my bad. The only things that that we actually export from solid start
[04:21:32] are...
[04:21:34] Generally,
[04:21:36] the entry stuff, but for the most part, the only stuff that needs to...  Not even all of this. It's basically HTTP status code, HTTP header...
[04:21:44] error, this is hidden, this is internal, so you don't really see it. Client only,
[04:21:50] Um...
[04:21:51] file routes,
[04:21:53] This new Git helper.
[04:21:56] Maybe there'll be a couple others, but like
[04:22:00] mostly and then yeah the middleware setup needs document i mean we can go through the  docs and point gaps there's tons of those gaps but most it doesn't there's there's only a
[04:22:11] There's only maybe...
[04:22:13] a
[04:22:13] Dozen exports from solid start.
[04:22:18] Thank you.
[04:22:22] Oh yeah, yeah, yeah. You were talking about this way. Well, because those middlewares are like, they're called hooks and there's like almost no documentation for them yet.
[04:22:30] So yeah.
[04:22:31] I think we're all...
[04:22:33] open source, trying to do our best with docs.
[04:22:36] The people who can afford docks are the big companies.
[04:22:39] It's just the way it is. It's hard.
[04:22:41] But what I, yeah, I mean, while I'm here, I can show, um,
[04:22:46] I can show one more little quick thing here. It's in the experiments demo.
[04:22:52] Um,
[04:22:54] I made a cacheable...
[04:22:58] server function. See?
[04:23:03] Oh, right. I should do.
[04:23:05] PMPMI here to get the latest to the browser.  I added a JSON helper, purely for the fact that I
[04:23:11] that I wanted
[04:23:13] I think people will be excited about this.  You know how you used to only be able to throw redirects?
[04:23:18] or
[04:23:19] reload or JSON or whatever. We didn't have JSON before because that I actually fix the typescript. So
[04:23:26] Now, if...
[04:23:28] Thank you.
[04:23:28] I think maybe you guys will find this example a little bit,
[04:23:32] Um...
[04:23:34] Amusing. I...
[04:23:36] Example experiments.
[04:23:39] I created a server function.
[04:23:42] I wrapped it in get...
[04:23:44] which
[04:23:46] makes it a get instead of a post.
[04:23:49] I'm still playing around a little bit on figuring out the best patterns here.
[04:23:52] But now it's a get request into the post request, so it's cacheable.  And then I set a cache control header for 60 seconds.
[04:23:58] And this returns JSON.  Of course, it's not normal JSON.  It's an object...
[04:24:02] that returns a promise that fills the name you sent through it a second later.  And so essentially what we're doing here is we're calling hello, John.  Then we're taking the data and we're console logging it.  And then we're awaiting the hello on it and console logging.  So we're kind of throwing a promise over the wire, right?  Right.
[04:24:20] And
[04:24:21] Um...
[04:24:24] And
[04:24:25] We're also caching the response.  So let's open that up.
[04:24:29] Okay.
[04:24:30] Go to good old localhost3000.com.
[04:24:35] We're in dev.  Takes a second.  Okay, cool.
[04:24:39] network or console.
[04:24:44] Thank you.
[04:24:45] Hello, you see it, and then you see John come in later.
[04:24:48] Um...
[04:24:49] And
[04:24:52] Yeah, there's all the JavaScript.
[04:24:55] Refresh the page. You can see it again.
[04:24:57] Hello, wait a second, then John comes in. Right now, if I turn off
[04:25:02] Stop disabling the cache.  What you're going to see is
[04:25:05] is that...
[04:25:07] when I refresh it,
[04:25:09] they come in at the same time because it's a cash response.
[04:25:14] So it just plays back the network just using HTTP cache.  This isn't using our cache API or solid serialization  or anything, I'm just playing,  I'm basically in the client making the call again.  If this was hydrating or whatever,  part of a create async call, you wouldn't see that.  But if I go to the network here and I look at fetch, sorry,  you can actually see that this now is a get request
[04:25:37] Um, this is longer or sorry, not this one. Uh,
[04:25:42] Yeah, no, this one. It's a get request.
[04:25:44] Um,
[04:25:45] that passes in this information. And then the response is one of these fun, self-resolving promise things, executable code. But
[04:25:57] that streams in as it completes.  So it gets cached.  So you see it's from disk.  If I refresh the page right now,
[04:26:04] It's been 60 seconds, so we got a new response and it took about a second, which makes sense.
[04:26:10] If I refresh again, it's there immediately from the disk cache.  So, yeah, cacheable server functions now on the fetching side.
[04:26:19] So
[04:26:21] And what's cool is, as you guys can all imagine,
[04:26:25] You don't always have to write Get.
[04:26:27] Solid router cache function automatically uses get.  So you don't have to worry about that.  So if you use our cache in action APIs, you automatically get get.
[04:26:37] get. So it's all good. It's all good to go.
[04:26:43] So, um...
[04:26:46] Yeah, you just... yeah. But yeah, what's cool is look at the types.
[04:26:51] This knows that this
[04:26:53] Oh, why is TypeScript being-- this is the fun part when you're all like, look at the types.  It's because I didn't refresh TypeScript server after I updated the router.
[04:27:03] Okay, let's go here.
[04:27:06] Okay.
[04:27:10] OK.
[04:27:11] It knows that V is hello of promise string. And the reason it knows this is because
[04:27:18] Um...
[04:27:19] JSON...
[04:27:22] returns
[04:27:24] the type of
[04:27:26] of this.
[04:27:27] It returns like it's the type of not the response.  It tells it's the type of the data you pass to it.
[04:27:37] Similarly, if I go into the with auth example, for example,
[04:27:42] So we can now go into here. And this is a little bit awkward to get like the this working because if it I would try catch it and if something through like if they're like if I tried to like throw a log out or something, it would it would get caught and then it'd be really.
[04:28:01] annoying using throw sometimes it's just easier to return right and but the problem before was when you returned a redirect it would
[04:28:09] mess up the types. It'd be like, oh no, get user can return a response or, um,
[04:28:18] or a
[04:28:20] Thank you.
[04:28:22] or a user. But
[04:28:25] What we managed to do now is redirect is of type never,  and it actually excludes it from the types.  So redirect,
[04:28:38] reload JSON, don't mess with the types of your actions, essentially, even if you return them.
[04:28:45] they're basically kind of voided out.
[04:28:49] Yeah, all these pieces working together, quite nice. Yeah.
[04:28:54] Thank you.
[04:28:56] Thank you.
[04:29:00] Yeah.
[04:29:01] Yeah, no, I, I, I, this was a gap.  So I'm glad.  So yeah, a solid start, 0.5.
[04:29:08] 4.11 supports this stuff.  Plus it has some bug fixes updated from Vinci.
[04:29:15] So yeah, never say never. Funny. Anyways.
[04:29:21] Stuff's looking pretty good.
[04:29:24] Yeah, so it starts coming along.
[04:29:27] I think our plan is,
[04:29:29] One of the cool things about this API change,  sorry, to Vinci,  is it removes the circular references.  So we'll be able to simplify the exports  and get rid of the entry.  There'll be a release probably in the coming week  for 0.50, which changes the API.  I don't know if we can get
[04:29:46] uh the the Vinci wrappers yet but once we go this direction and export from Vinci it'll be up to Vinci
[04:29:54] And we don't have to worry about it anyway, so...
[04:29:56] Um...
[04:29:59] Yeah.
[04:30:00] I...
[04:30:00] I think this is the course.
[04:30:02] It is a bit...
[04:30:05] Thank you.
[04:30:07] It is obviously a bit tricky because, you know,
[04:30:13] As I said,
[04:30:14] It's better not to rap where you can, but sometimes...
[04:30:17] um,  you don't have much choice.  And I don't,  I think with nitro,  we're kind of stuck having to wrap just because we're,
[04:30:23] we don't want to
[04:30:24] we can't,
[04:30:26] We don't want to deal with, we want to set our own conventions.  And I, I think that's just the reality of things.
[04:30:33] Okay.
[04:30:34] Cool.
[04:30:35] Let's do this week in JavaScript.
[04:30:38] uh give me a second to get all set up awesome for everyone who's still here this has been an
[04:30:43] amazing stream
[04:30:46] So many people here, so many gift subs.
[04:30:50] Thank you.
[04:30:52] Thank you.
[04:30:53] All right. Let me get set up here for this week in JavaScript. Two seconds. How's everyone else doing? Still alive? Still awake?
[04:31:05] Feels good, man.
[04:31:09] Yeah.
[04:31:11] Yeah.
[04:31:11] Good time to be on.
[04:31:13] Be on Twitch. Thank you, Patrick JS.
[04:31:19] Eating dinner, yeah, I need to do that pretty soon.  I'm West Coast, so...
[04:31:25] I'm the tail end of the...
[04:31:30] North America train at least. Okay. Talked about that. Yeah. Okay.
[04:31:39] I'm just setting up my Twitter, so give me a moment.
[04:31:44] Um...
[04:31:45] and will be set here
[04:31:53] Okay, and then duplicate.
[04:31:57] We have...
[04:32:01] Solid.js and then
[04:32:05] bookmarks. It's always just the three areas that are
[04:32:09] Do you have any good bookmarks?
[04:32:14] Only a couple. We already talked about them, I think, though, ironically.
[04:32:22] That's fine. We'll bring them in.
[04:32:27] Thank you.
[04:32:29] All right.
[04:32:31] Sounds awesome.
[04:32:33] Uh...
[04:32:39] Thank you.
[04:32:40] I'm glad you guys all connected.
[04:32:44] Gonna have to watch the first four hours later, yeah.
[04:32:47] Yes. Thank you, Patrick.
[04:32:52] It's midnight here after work, David. I'm excited. Good.
[04:32:56] I'm excited too.
[04:32:59] All right.
[04:33:06] Thank you.
[04:33:07] Thank you.
[04:33:09] Cool. Okay, I think I got everything I need to scroll in down.
[04:33:16] Um...
[04:33:22] Okay, cool, cool. Okay. Let's...
[04:33:27] Get the banners going. And...
[04:33:32] I don't know why I do this, but let's do it anyways. Let's talk about this week in JavaScript.
[04:33:38] Um,
[04:33:40] I've been...
[04:33:41] really heads down on development as I've been the last little while.  So I feel that the section
[04:33:45] is...
[04:33:46] you know, maybe not as interesting as it could be.  I probably missed a whole bunch of the drama, uh,
[04:33:52] Eh.
[04:33:53] Some stuff's been going on, because clearly...
[04:33:56] Over the course of the stream since I last checked, I have 43 notifications and 22 on
[04:34:02] I think on Solid.js. So yeah, who knows? Let's
[04:34:07] Actually, no, never mind. This is just...
[04:34:08] outdated browser. Anyways, let's uh
[04:34:12] Thank you.
[04:34:13] and
[04:34:15] Let's talk about a few of the things that caught my eye this week.
[04:34:21] Thank you.
[04:34:23] To begin with,
[04:34:25] We already talked about this a bunch on stream, but I think this is really the starting point for me this week.
[04:34:30] I left the stream last week.
[04:34:32] talking about HTML partials, not getting into the data fetching stuff as much as I wanted to.
[04:34:37] And...
[04:34:38] I realized...
[04:34:41] you know,  what led to me writing that article I,  we talked about earlier that like,
[04:34:46] Thank you.
[04:34:47] Okay.
[04:34:48] Because of the difference between server component and client component loading,
[04:34:52] There's like
[04:34:53] still
[04:34:54] trade-offs, like as much as Vercel and Nex have been focused on the server component stories, a bunch of people are still just going to tend to stack query things and like,
[04:35:05] Unless you handle it properly, you're going to end up with all the same waterfalls and you end up there inevitably as your app gets more complicated or if you need heavy writes.
[04:35:14] Right?
[04:35:16] Um, and so the way I described it here is like server points are like a page only had a single get endpoint. Every mutation grabs everything. A write heavy workload or lots of independent touch points struggles under it. Luckily you can still do client data patterns plus SSR, but that means you still solving waterfalls. It's like the old app versus site argument. We blur the boundaries better now, but we,
[04:35:35] And we can stick them side by side.  We have the flexibility to choose the right tool for the job seamlessly, but we haven't produced a universal model yet.  And that's fine as long as we understand that.
[04:35:42] That's most of what I wanted to see.  I got in a good conversation with Dan Shipper because he was talking about how you can probably pass data from the server functions.
[04:35:55] I actually asked Tanner about this because I was like,
[04:35:58] He's like, yeah, obviously that works, but there's an interesting struggle on source of truth here in terms of synchronization, because like, say, in a component model like React, where you re-render...
[04:36:07] you don't know why you re-rendered necessarily, right?
[04:36:11] It...
[04:36:12] If
[04:36:13] If a component could re-render because a server changes its prop,
[04:36:18] So you get new...
[04:36:20] initial data from the server, so to speak,
[04:36:22] that can also be different
[04:36:24] from data invalidation
[04:36:27] due to tan stack saying, hey, I need to update this specific piece of data. So
[04:36:32] when you revalidate,
[04:36:34] How do you know it's the prop you grab
[04:36:36] or the tan stack data that you grab to merge it in.  I'm not actually sure.
[04:36:40] Um,
[04:36:41] Because the initial isn't just initial, because the props can update with server components.
[04:36:46] So,
[04:36:48] Yeah, it's an interesting thought.
[04:36:51] I think there's a lot of room for patterns to still grow here. It's fine. We haven't worked through all of these.
[04:36:57] But I do think that...
[04:36:59] Um,
[04:37:01] we can't just ignore one as much as like RSCs make us want to fetch  everything on the server.  Like there's a,
[04:37:08] There's situations where it doesn't fit.
[04:37:11] necessarily or that's more complex and you know in a lot of ways this realization was part of my  semi you know crisis here looking at this because i was like
[04:37:23] Now I just have...
[04:37:24] my old React app beside my server component app.
[04:37:27] Like I didn't, this is more, not less.
[04:37:30] I didn't... Did I actually simplify anything?
[04:37:34] Not really, actually, I made it more complicated.
[04:37:36] And it's tricky because server components are a simple model, arguably simpler model.
[04:37:42] But if the requirements force me back into the same zone and now I have
[04:37:47] you know,
[04:37:48] what I had before, plus just more.
[04:37:51] it's not really doing it for me.
[04:37:53] So this, you know, just kind of a thought exercise, but I think, I think, um, I,
[04:37:59] I
[04:38:00] I think there's still a lot more room on the client side part of server components.
[04:38:05] more looking at how they unify that model.
[04:38:09] All right, let's continue.
[04:38:14] This was a bit of a treat.
[04:38:17] I
[04:38:19] Ben Lesh on a podcast...
[04:38:23] Sid, what did he say? Let's see if we can. Thal.js is definitively better than React. Like, I don't think anyone really questions that, right?
[04:38:32] Uh-huh.
[04:38:33] Obviously he was just getting a like a hot soundbite. Um...
[04:38:37] But,
[04:38:39] It...
[04:38:39] Bye.
[04:38:40] I don't think a lot of people understood my response tweet to this.  Um...
[04:38:44] Which is fine.
[04:38:46] I was being a bit sarcastic, obviously.
[04:38:48] I don't know if you people who follow the stream know what I'm talking about. There's there there's been there was a wave of like responses when solid started getting a little attraction and people talk about signals that they're like, well, I'm not going to touch anything but react unless it's 10 times better. That was like this kind of statement. But a few people wrote articles like that, like it would need to be 10 times better.
[04:39:10] Okay.
[04:39:11] I'm just jabbing at that. Honestly, I...
[04:39:15] I will,  nothing is ever 10 times better.  React wasn't 10 times better than AngularJS.  Like,
[04:39:22] It can be better across multiple metrics, but nothing is ever 10 times better. I'm going to
[04:39:28] job at this for till the end of time, you know, just
[04:39:32] that's all there is.  I got some really nice, honest responses  where people are like, you know,  both sides are improving, you know,  a real, you know,
[04:39:41] honest look at like how good solid is and where, you know, docs are weak and
[04:39:46] you know, you know,
[04:39:47] Yeah.
[04:39:49] I was amused at this. I wonder if 10 times better was enough to break inertia. 10 times smaller bundle, 10 times use. Because the funniest thing is, in many cases, solid on pure metrics has been 10 times better than React at various times at different metrics. 10 times faster SSR, 10 times smaller bundle, 10 times this. So the whole 10 times better thing is kind of funny. So maybe it's just my personal joke.
[04:40:11] But yeah, I had a lot of people saying nice stuff about Solid in here or being critical on specific shortcomings. We're aware of it, I understand.
[04:40:21] 20x.
[04:40:22] I'm just going to
[04:40:24] I'm just going to play with it, you know.
[04:40:26] Um...
[04:40:27] So I didn't mean too much by it.  I just thought this quote tweet was cool to see Ben Lashoff, the RxJS community.
[04:40:36] I don't know.
[04:40:40] There are trends that happen in web dev in the same way when React came out in 2014 and the whole ecosystem warped around it in terms of technology.
[04:40:49] not just adoption, but technology, everyone picked it up.  The same things happen with Solid. People aren't just adopting signals, they're adopting Solid's rendering patterns. Like, I think we can definitively say,
[04:41:00] that solid is one of those points
[04:41:03] on the graph in the same way React was in 2014.
[04:41:06] What does that mean for adoption? Although the other stuff you said doesn't matter, but we can say that solid
[04:41:11] majorly impacting the
[04:41:15] direction of upfront on web development.
[04:41:18] definitively we can say that, but yeah, I can still be cheeky about it.
[04:41:24] Thank you.
[04:41:31] okay i'll bite bank it worked at react deficit rate almost cost us 10 million in the lawsuit
[04:41:36] because an infinite loop request token
[04:41:41] Love.
[04:41:42] Wow.
[04:41:44] Thank you.
[04:41:45] Anecdotally, it's always interesting...
[04:41:49] to hear stories like that.  I think it can happen in any system, to be fair.  It's just, you know.
[04:41:56] Real concepts facilitate users' login monies.
[04:42:05] Yeah, that's fair.
[04:42:10] Thank you.
[04:42:14] Does it make React feel like GoTo? I know what you're getting at because at one point, Dan Abramoff compared signals to GoTo statements.
[04:42:22] I did take slight offense to that.
[04:42:25] Um...
[04:42:27] But...
[04:42:28] You know, it's all part of the same thing.
[04:42:31] Thank you.
[04:42:32] Thank you.
[04:42:33] Right, because if you get a 10 times better tool, that makes you a 10 times better developer.
[04:42:38] Yes, there is proven science, right? Everyone wants to be a 10x developer.
[04:42:42] So,
[04:42:43] you have to choose a 10x framework to have a 10x to be a 10x developer.
[04:42:52] Thank you.
[04:42:53] *Sigh*
[04:43:00] Yeah, so 10x to become 1x developer.
[04:43:05] But yes, this is a part of, that part is inherent to the re-render model bit, right?
[04:43:10] you separate the state updates from the
[04:43:14] encapsulation modularization, then you don't
[04:43:17] have that problem, you could still cause state updates to
[04:43:21] produce loops, to be fair.
[04:43:24] *sniff*
[04:43:27] I just want two ex me, then another me to make food.
[04:43:34] I do think 10x is possible.  It doesn't make 10x fewer decisions during development since that's what takes time and not the framework.  Yeah.  So...
[04:43:41] Yeah.
[04:43:41] This is kind of making fun of the whole something being better.  Because the truth of the matter is it doesn't matter if Saul is better.  I don't even think...
[04:43:53] I've said this before, you don't even get to be in the conversation unless you're in a zone where you're arguably better at multiple things.
[04:44:01] If you weren't better, there's no point to even look past income, even for anyone.
[04:44:08] You have to push the expectations.
[04:44:12] Yeah, I'm also on Ben. Ben is just being technical here. I love like his previous thing we covered last week when we talked about the UI function state. Like,
[04:44:22] People like Ben, people like myself are always looking for like
[04:44:27] where things should be heading, like what are the pieces that go together and where we're sitting right now, obviously signals look pretty hot.
[04:44:38] Why isn't my notifications?  That's so weird, I was on my profile page.
[04:44:45] That's annoying.
[04:44:49] Okay.
[04:44:51] Let's continue going.
[04:44:55] Okay, I'm going to get into this conversation in a minute. Let's...
[04:45:00] Let's take a look at our...
[04:45:02] our bookmarks for a second because I only had a couple here. This one
[04:45:07] Um...
[04:45:09] This one here...
[04:45:11] was related to the conversation today.  I should have pulled it out earlier.  Um,
[04:45:15] But it's interesting.
[04:45:20] It's very relevant, but it was like
[04:45:22] He's talking about going from Rails to Next.js in this post on Reddit.
[04:45:31] and
[04:45:33] What he said is, "After three plus years developing in the React ecosystem using Next.js to build my startup, I ran into an issue that I had a lot of files in one single project. One week without coding in it, I was already lost. I'd spent almost one entire day trying to figure out stuff. As for every project, my main focus of the project succeeds and then worry about coding minor issues."
[04:45:51] you know, later. So it's all about shipping the MVP. It's funny to me, though, is like I actually don't associate next with having lots of files like to a certain degree.
[04:45:59] you know, page or sorry, app router pushes more files.
[04:46:03] But generally speaking, I remember the first time I opened an Angular project, and I was like, oh.  If you look at TodoMBC, the React version is like three files, and the Angular version was like 12.
[04:46:16] 26. I'm sure the like
[04:46:19] There are a C version of whatever it will be like.
[04:46:22] 12 or 15 files, but he's talking the last three years. So I doubt he's just talking about the, the app directory.
[04:46:30] Um,
[04:46:31] Anyway, it is interesting though, because the...
[04:46:35] the file complexity being a perception thing anyways i have about two months in and i already  feel the power rails bring i can testify coming from the react world but i cannot understand why  people aren't starting to use and teach rails instead of learning react next solid js and so  on when you tell them that they're now developing in rails they laugh that it's a dead technology  they say end of the line i'm amazed at by how easy is to grow a business worrying about more  important part making it work and growing it
[04:47:00] clients and not if you use XYZ on your stack.
[04:47:02] Well, first of all, good for him.
[04:47:06] Thank you.
[04:47:08] I think this is how it should feel like when you use a tool. Obviously, React wasn't the right cadence. He's talking about files, which is funny to me because like doesn't Rails have like a crazy file system thing like with tons of files. I suppose it's all like convention based like auto generations. So like if you don't.
[04:47:26] There's a default behavior if the file's missing.
[04:47:29] But like...
[04:47:31] Yeah.
[04:47:31] As soon as your stuff grows, you end up with like even more files.
[04:47:35] But.
[04:47:37] Yeah, files isn't one thing, but that's beside the point.  I'm getting hooked into that.
[04:47:41] Rails obviously isn't a dead technology.
[04:47:44] Thank you.
[04:47:45] And it's unfortunate that people feel like the need to kind of laugh about it.
[04:47:49] Because clearly for his business needs,
[04:47:52] he doesn't need these other solutions.
[04:47:58] So, I mean...
[04:48:03] It's interesting to me because like...
[04:48:06] I think this is kind of like...
[04:48:09] The reason people aren't teaching or using Rails is because people have taught and used Rails for years.
[04:48:15] over for what 15-20 years now
[04:48:19] Right.
[04:48:20] There's tons of content.
[04:48:23] people are always going to gravitate towards the newer thing.
[04:48:26] There's things that Rails...
[04:48:28] doesn't solve at all. We've talked about that. But
[04:48:32] I guess...
[04:48:33] The problem is that the conversation doesn't
[04:48:36] include that possibility for
[04:48:38] For these people. From the sounds of it, if he thought Rails fit his use case, then I'm gathering what he's doing is dead simple, but that's still perfectly fine. He's shipping his MVP.
[04:48:52] Yeah, I don't know. This is obviously from a Rails community thing on Reddit, but...
[04:48:57] Um,
[04:48:58] Thank you.
[04:49:00] Thank you.
[04:49:01] I...
[04:49:01] I think this is kind of part of the problem is that he felt like he didn't have a choice, which is really weird. There's always a choice.
[04:49:16] Thank you.
[04:49:22] "The lack of self-awareness about Rails, how many people feel the same way about React Next as he does about Rails, kinda very preachy." Yeah, a little bit, yeah. I mean, you always see the converts both ways, right? Like,
[04:49:32] Because you use Rails enough and you're like, suddenly get to a point where you're trying to build something like
[04:49:36] more app-like or this, and you're just like...  I'm familiar with that story.
[04:49:42] Vitagami, that social media startup, was built on Rails in 2010.
[04:49:47] Um...
[04:49:47] And we went to full JavaScript and man, like,
[04:49:51] It got so much better.  And you could be like, okay, well, clearly any rewrite makes something better.  And you should do that.  That should be the skepticism in your mind.  But it just fit better for the social media thing.  Like, the Rails app was fine for page rendering and stuff, but it was dreadfully slow for the interactive bits.
[04:50:08] We were just like re-rendering stuff and
[04:50:11] compared to like using knockout and it said, you all know knockout,
[04:50:15] in 2010 was,  you know,
[04:50:18] The goat or whatever you young folks say.
[04:50:23] Thank you.
[04:50:24] Thank you.
[04:50:25] Right. And this is the other thing always tricky.
[04:50:29] And the reason we see that is your first experience into any new thing, hopefully it solves your problems and you're on the up and up, right?  Like this is what you want to happen.  If you tried something for two months and you weren't happy with it.
[04:50:42] then, you know, like,
[04:50:44] You should feel this kind of positivity...
[04:50:56] Thank you.
[04:50:58] Thank you.
[04:51:02] Interesting. I was reading the rest of it, sorry, I didn't read it out loud about the, about, you know, concerns around the app router.
[04:51:13] Anyway, yes, objectively no best choice.
[04:51:21] Yeah, this is what I was thinking about you end up with lots of files anyways. It's interesting.
[04:51:28] Thank you.
[04:51:31] Thank you.
[04:51:31] Cool. Yeah, a lot of opinions about piles.
[04:51:37] Thank you.
[04:51:39] Thank you.
[04:51:43] *shrie*
[04:51:50] I mean, someone responded, developer skill issue.
[04:51:55] Amen.
[04:51:57] *sniff*
[04:51:59] Thank you.
[04:52:00] Thank you.
[04:52:03] Thank you.
[04:52:03] Thank you.
[04:52:05] It's hard to say.
[04:52:11] When you have something like React that's so...
[04:52:16] I want to see, like inbred in its own...
[04:52:19] Jargon in its own
[04:52:21] language in a sense,  like community,  um,
[04:52:24] It's hard to know
[04:52:26] like how much this, how hard this is coming from the outside.
[04:52:31] There's always a skills issue.
[04:52:32] That's why you guys are here, right?
[04:52:35] Thank you.
[04:52:37] *sigh*
[04:52:39] Thank you.
[04:52:42] Anyways, this just caught my eye.
[04:52:49] Like, oh.
[04:52:51] Sometimes this is just fine and you don't need the other stuff.
[04:52:57] Okay, let me go here.
[04:53:01] Before I get to my last topic, a couple of SolidJS news things, Alexis just doesn't stop. He finished...
[04:53:08] you know, the work you've been doing on the serializer,  and you decided to get granular HMR working a solid.  What is granular HMR?
[04:53:14] Yeah.
[04:53:15] It's...
[04:53:17] While we have a hard time with data,
[04:53:19] refreshing because the way solid doesn't like diff so the components don't have instances. One thing that we can do
[04:53:26] is
[04:53:29] because everything's split apart and granular is swap out sections,  uh,
[04:53:34] of the code without unmounting the components.
[04:53:36] So it's subcomponent...
[04:53:40] HMR.
[04:53:44] So it's not diffing the whole thing or rerunning the component.  It's subcomponent HMR and
[04:53:51] I don't know how well it works.  We've released it now with Solid Refresh 7,  which is not the default for V-Plugin...
[04:53:57] solid, but it's pretty cool tech.
[04:54:01] - -
[04:54:02] Just putting it out there. Subcomponent HMR. We should market that.
[04:54:06] you know, um,
[04:54:08] Or he calls it granular JSX HMR.
[04:54:12] To be fair,
[04:54:14] So solid still can't preserve state above, below the change, but it is definitely cool to see the component you're working on not unmount every time you change code in it.
[04:54:29] you can say Alexis for that one yeah
[04:54:35] All right, what have we got here? Yeah, this is fun.
[04:54:40] I it was I did a podcast with the guys from
[04:54:45] Uh, this is learning like.
[04:54:47] This is their tech talks.  If you haven't noticed, I publish all my stuff on there,  from Dev2.  Just great group of guys, open source, open.  They supported me early days when I was doing publishing,  originally out of the Angular community,  and helped a lot improve my writing.
[04:55:05] Um, cause I, I was just kind of writing into space on medium and then they're like, they, there's a couple of publishers that picked up my big, like my good solid articles, but these guys encouraged me to write more technical.  I remember Lars, uh, feedback on some of my technical writing early on that helped me a ton.
[04:55:22] Um, so yeah, I did a podcast and then that was fun.
[04:55:26] I love seeing Attila doing more DevRel and stuff, solid related.  Obviously, he's working with Tori, but we have people out there in the community sharing the good word.  So I couldn't be happier.  That's really it for solid stuff.  We already covered solid start.  Okay, let's talk about...
[04:55:43] I guess the last topic of today, not a not a big one.
[04:55:46] But there's been...  I knew immediately when I saw Dev's...
[04:55:52] Um...
[04:55:54] tweet that he was talking about server components because nothing else is more complex right now, right?
[04:56:01] And to confirm this,
[04:56:03] um
[04:56:04] I looked...
[04:56:05] at
[04:56:06] the post engagement
[04:56:08] and looked at the quote tweets and I see
[04:56:11] I elaborate more here.  I elaborated more here.  And then I looked and I saw,  and he's responding to Dan Abramoff talking about
[04:56:18] probably server components.
[04:56:20] Yes, server components.
[04:56:23] And
[04:56:24] Here.
[04:56:26] Yeah.
[04:56:27] Also server components, the same tweet. Okay. I still don't see how server components add complexity. For me, they have done as remove complexity. Every single app I built to this day would get a massive simplicity boost with server components. They removed the parts of web dev that annoy me the most.
[04:56:38] That's awesome to hear.
[04:56:40] See, my biggest concern is I actually don't...  I'm not sure that they do for the majority of apps that I built over time.
[04:56:46] because I still need the client data.  Like I'm kind of on Tanner's side of the spectrum.
[04:56:51] Um,  uh,
[04:56:52] who got shoved far on the opposite defend working on Marco, but still generally leans towards apps and granular.
[04:57:01] But the word,  the use of the word complexity here is actually really important.  Um,
[04:57:06] *sigh*
[04:57:08] Sorry.
[04:57:09] Yeah.
[04:57:11] Because he goes in, there's two types of complexity.  Complexity of how things work and complexity of using them, right?  Which is fair.
[04:57:21] You're not being crucified.
[04:57:25] -
[04:57:27] Thank you.
[04:57:27] Sorry, I guess I should have checked with you first, but your free game.
[04:57:31] Right.
[04:57:33] *laughs*
[04:57:35] *laughter*
[04:57:36] *crying*
[04:57:38] I agree.
[04:57:41] When I saw this, I was just like, yes, that's exactly it.  Sometimes these two do not grow with each other.
[04:57:47] one will increase, one will decrease, you know.
[04:57:50] And
[04:57:51] you know, don't get complex, don't get caught up on which one versus which one is more important. Because like,
[04:57:57] look at the value you get.  I think this is like great advice.  The reason I jumped on this wasn't,  was because the message was right on.  It's just,  I'd come to my own way of describing this based on the classic,
[04:58:10] simple versus easy. So, yeah.
[04:58:15] Yeah, which we'll get to in a minute.  There's something that...
[04:58:20] There's a few tweets here that I thought were kind of interesting.  Like Ryan Florence goes, I call two incidental complexity and one essential complexity, which  is a pretty...
[04:58:28] Um...
[04:58:29] pretty reasonable way of looking at this, right?  'Cause the first one is like how things work,  you can't really avoid it,  but complexity of using things
[04:58:37] could be incidental. The only thing is from my perspective,
[04:58:41] Um,
[04:58:42] -
[04:58:44] Not all complexity from using things is accidental or incidental.  It could be...
[04:58:51] intended so
[04:58:53] That's where my framing comes from, because I think incidental
[04:58:57] complexity could be
[04:58:59] It's something that you don't necessarily realize.  And that in itself is just complexity in itself.  And it could be on either side, so to speak.
[04:59:10] Uh...
[04:59:11] So let me show my framing here.
[04:59:16] Thank you.
[04:59:18] Thank you.
[04:59:19] All right.
[04:59:21] Thank you.
[04:59:23] Thank you.
[04:59:27] Okay.
[04:59:31] I consider the first case simplicity versus complexity, right?
[04:59:37] And the second case actually easiness versus how complicated something is.  So basically I defined simple versus complex based on like how predictable a system is from looking at the properties of individual elements.  What I mean is if you can reduce.
[04:59:52] things into
[04:59:53] clearly defined bounded pieces
[04:59:57] And each thing does its thing perfectly.
[05:00:00] and clearly, then the system is relatively simple.
[05:00:03] so to speak. It's when you put the pieces together and emergent behaviors occur that things become more complex. When the combination is not the sum of its parts directly, that's when things are harder to tell. Or when you look at anything and you stop being able to see the division between parts, they're more involved. They have multiple behaviors. Things change differently based on different inputs in ways that you wouldn't expect. Things stop being linear. You know,
[05:00:33] That's where complexity comes from, is the lackability to break pieces apart to be able to explain the system.
[05:00:41] Whereas easy versus complicated scales on how involved it is,
[05:00:45] to achieve the desired task, right?  Like something is easy.  If it takes little effort, there's less moving pieces.  There's all that.  Something can be complicated.  So what I'm trying to say is something complicated where there's like lots.  It's very involved.  You might have to put these things together in this specific way for it to do  this, the thing you want.
[05:01:03] But what it means is it's quite possible for a simple system to be complicated and for an easy system to be complex.  In fact, those two options.
[05:01:12] opposites often go together. The simpler the system is, the more complicated the
[05:01:18] it ends up
[05:01:19] being in practice and often the easier a system is the more complex it actually is like under the hood.
[05:01:28] So, um...
[05:01:32] Thank you.
[05:01:33] A couple examples here, right?
[05:01:35] Redux, people always told me how complex Redux is.  But Redux is one of the simplest things possible.  People look at me and they're like, what?
[05:01:44] How can you say VDEX is simple? It's complicated because you have to set up a reducer and set up the actions and put this up.
[05:01:50] Fundamentally, Redux is like
[05:01:53] data equals function of previous data.  Like there is almost nothing simpler in the world than Redux.
[05:02:00] Um...
[05:02:02] But sometimes systems can be too simple.  Redux is so simple,
[05:02:07] that it doesn't map necessarily to the real world problem you had.  So you'd have to layer so much information
[05:02:13] stuff.
[05:02:14] together with it to actually accomplish what you wanted because you needed to follow its very simple rules.
[05:02:21] So sometimes when a system is too simple,
[05:02:23] it leaves too much open and the gap between it and the work you want to achieve is is too far.  And it forces you into, you know, complicated solutions.
[05:02:35] Similarly on the other side,
[05:02:38] Everybody seems to want to complain about how complicated things are, right?
[05:02:44] Right.
[05:02:45] Sure, there's more to see.
[05:02:46] But the thing is, you can always make something complicated.
[05:02:50] easier.
[05:02:51] Right?
[05:02:52] You can reduce complication by adding abstraction. That's what abstraction does. You take something complicated, a lot of parts, and you abstract away those details, and now it's easier.
[05:03:01] But...
[05:03:03] I would argue by adding abstraction, you're making it more complex.  There's no shortcut to making...
[05:03:09] an existing
[05:03:10] system simpler. Like you can't take something that's complicated, sort of complex, and make it simpler.
[05:03:16] You have to change how the system works.
[05:03:19] You can't remove abstraction, so to speak, generally speaking.  It's a much harder task to make, which kind of ties into what I was talking about looking  at the bookmark.  Sometimes another layer of abstraction is not the answer.  Sometimes the path that led you to believe you need one actually should tell you that  you built so many layers on the wrong foundation that it's time to burn it all down and start  over again.
[05:03:37] Generally, the solution to complexity
[05:03:41] is burning it all down and starting all over again.
[05:03:46] Bye.
[05:03:48] That's why, you know, we have different opinions. That's why we build different stuff.
[05:03:54] But I wanted to talk about this balance because...
[05:03:57] One of the largest regions for React's longevity is that it was simple.
[05:04:04] Not the easiest solution, it was simple, and that scaled well.
[05:04:08] So even though...
[05:04:10] it could lead to it getting complicated.
[05:04:14] Thank you.
[05:04:14] .
[05:04:15] It never...
[05:04:16] it prevented it from getting complex.
[05:04:19] My concern...
[05:04:20] With the current trajectory of the web is...
[05:04:25] We're understanding that
[05:04:27] that complexity...
[05:04:28] is
[05:04:30] Thank you.
[05:04:31] is perhaps, or a certain degree of complexity is perhaps unavoidable.
[05:04:37] And it's kind of like pushing us
[05:04:40] harder and harder into easier solutions.
[05:04:45] Like, it's feeding, they're feeding into each other at kind of an exponential rate. Like, the more things get complex, the easier trying to force it, which makes things more complex. You know, all this compiler stuff, all this. This is, this is like my...
[05:05:01] one of my biggest fears here. I always... you always want to try and push towards easy and simple.
[05:05:07] But the reality is...
[05:05:10] Error on the side of simplicity, generally speaking.
[05:05:14] It's, as I said, if it's a little bit too complicated, someone will figure out how to make it easier.
[05:05:19] but you can't... if you err on the sides of easiness,
[05:05:22] No one is ever going to make it less complex for you.
[05:05:31] Thank you.
[05:05:33] Thank you.
[05:05:35] Thank you.
[05:05:38] Anyway, just catching up with chat here, but I think...
[05:05:45] I think that
[05:05:47] I think we're good for this week.
[05:05:49] Um...
[05:05:51] I'm sorry, Dave, for putting you on the spotlight here.
[05:05:56] But
[05:05:58] I think this is a really good topic.  It's very relevant right now with the talking about RSCs,  about React for Git, because React...
[05:06:06] also initially valued
[05:06:08] Simple.
[05:06:09] Above all else.
[05:06:12] And when I look at frameworks, I always look at where they sit on the scale.  And this is one of the most important pieces to me.
[05:06:20] Um...
[05:06:21] to understand
[05:06:23] when you want to talk about philosophically where things sit.
[05:06:27] But yeah.
[05:06:28] Yeah, Rich Hickey, easy versus simple.  I'm just reiterating this.  I'm not sure if he got into the complex, complicated side.  It's been a long time.  I don't even know if I ever watched the...
[05:06:40] the whole talk.
[05:06:41] But, um,
[05:06:43] Thank you.
[05:06:45] Yeah, I mean, I think this is pretty...
[05:06:47] There's a universal truth in this.
[05:06:52] Oh, yeah, you guys are all talking about ReactMoopMiami.
[05:06:56] Yeah, it's it seems pretty cool. I've been hearing
[05:07:00] Because clerk sponsoring, yeah.
[05:07:06] You want me to watch this? Yeah. I can do that on stream maybe sometime. I actually haven't watched it.
[05:07:12] income in its fullness that might be a stream in itself.
[05:07:21] Thank you.
[05:07:23] Yeah, you're right. Hard might be better. I was trying to show that
[05:07:29] Yeah.
[05:07:30] Yeah.
[05:07:34] Yeah, hard is probably better.
[05:07:40] Bye.
[05:07:41] I think...
[05:07:48] I think that's the reality. I thought RSCs were simple, but there's a lot of complexity here to actually pull them off.
[05:07:57] So...
[05:07:58] Yeah, I think that's where we're at.
[05:08:02] Thank you.
[05:08:04] Thanks, Shai. It's been a while. I'd love to hang out again sometime soon. I don't know when I'm traveling a lot less, but...
[05:08:10] Good to see you around, man.
[05:08:13] Thank you.
[05:08:18] Okay. Yeah, I'm familiar with the topic. I just, I don't think I've watched the whole talk.
[05:08:28] Thank you.
[05:08:29] You can make a complex system by breaking a part into its individual parts. Okay, so there is a solution to this. I just don't know if...
[05:08:34] If you break it apart, you end up with the same system again.
[05:08:38] Right. You have to be very careful when you define your boundaries and how you break it.
[05:08:47] People applying it to React in general.
[05:08:52] Because, yeah, there's a lot of great tweets.  I guess this is why this...  Everyone knows this already,  which is why this tweet never caught on.  It's fine, right?  I'm just saying the obvious.  I just...  I feel sometimes we have to think about it.  I spend...  Or talk about it,  because I spend...
[05:09:07] a lot of time thinking about this.  I'm very driven by this when it comes to all the API designs and stuff with Solid.
[05:09:18] Thank you.
[05:09:20] Thank you.
[05:09:25] All right. So yeah, React Miami. Give it a shout out.
[05:09:30] Oh yeah, are you at JSWorld? That'd be awesome, man.
[05:09:33] Yeah.
[05:09:35] Alright, anyways. Signals of closure is coming. I've been seeing signals in DART and like tons of other languages. It's kind of crazy, honestly.
[05:09:46] Thank you.
[05:09:51] My tweet never caught on until I mentioned it under a RC tweet.
[05:09:56] Yeah, Helms should bring back signals. They were they were the one that they were early.
[05:10:00] Definitely early.
[05:10:02] Anyway, um...
[05:10:05] I think we're good. I'm good.  I think the biggest thing I want to say before I sign off here
[05:10:10] is that
[05:10:15] How should I put it I am
[05:10:18] I've been struggling to last a while.
[05:10:21] figuring out where I want to go next with the stream.  You know, I talk about long arcs.
[05:10:25] I had a long arc.
[05:10:26] through discover the frameworks.  I had a long arc through exploring the API of the,
[05:10:33] you know, attacking this hydration problem.
[05:10:37] I'm...
[05:10:38] I could talk for hours about anything.  You guys are pretty clear about that at this point, I'm sure.  But I'm actually running out of...
[05:10:46] I need to get more work done to fuel into it.  Like, and then the last bit of work I've been doing,  it's been a lot on building the meta framework designs stuff.  And it's fed into what we talked about looking at doing R and D, you know,  thanks to the support of like the Chrome team, you know, helping Alexis along  and myself working, you know,
[05:11:05] Along that stuff.  So I'm...
[05:11:11] I don't know, like, should I be building benchmark tools on stream?  I can't benchmark on stream the...
[05:11:17] stuff's too variable.  Like I need to think a bit about where we want to head next because I feel  like,
[05:11:22] I'm we're in another arc here and
[05:11:27] Um,
[05:11:29] I'm sure topics will come up, but...
[05:11:31] I generally never plan, except for guest streams, I never really plan much more than a week. I only know the stream a couple days ahead, and I feel like it's getting harder these days to figure out what the stream topic is.  So...
[05:11:45] We'll see. I'm sure stuff will come up, but stuff hasn't been coming up as much because I've been, you know,
[05:11:52] you know, hitting the end of certain exploration paths.  And we need this...  There needs to be...
[05:11:57] New directions.
[05:12:01] Right, that's what I was saying, the only way we know where we're going to go is benchmarks.
[05:12:06] Right? So...
[05:12:09] Hey, Lynn.
[05:12:10] Yeah.
[05:12:14] Yeah, I feel like I'm in that zone. I took a break before where I was okay, but that's because I was doing conference talks and that actually didn't fill the tank. In fact...
[05:12:21] Um,
[05:12:22] You know, I got to meet some amazing people like Daniel Attila, like,
[05:12:30] you know,
[05:12:31] Like, we...
[05:12:32] shy, like a bunch of people were talking to me on the stream because of the conferences, but I didn't actually fill the technical tank, so to speak.
[05:12:41] Um,
[05:12:43] So
[05:12:45] Yeah, I could reduce it to just this week in JavaScript.
[05:12:52] Thank you.
[05:12:54] So, deep jive into solid code?
[05:12:59] It's not that interesting. I've done bits of it at times. It's just, it's not that interesting.
[05:13:06] Um...
[05:13:07] Yeah, I can interview some more people, but I mean, it's like,
[05:13:12] I usually introduce things that I'm like really
[05:13:17] looking into
[05:13:19] And I think like when a new performance optimization comes up or something like jumps on a benchmark, I feel like
[05:13:25] I'm at an interesting point now where...
[05:13:29] We've talked to, we've seen the different architectures.  We've learned about view transitions from Matthew Phillips to master.  We learned about block Dom from Aiden.  You know, I actually don't know if there's a lot of different technology.  You know, we learned about zoomability from Quick, from MISCO and, uh,
[05:13:45] Adam and Manu.
[05:13:46] I've learned, I don't know if there's
[05:13:49] Any new technology that's jumping at the seams for me right now?  I think we just need to figure out what's important again. It reminds this is what I did in
[05:13:58] at every major stage of solid,  back when I first got the signal rendering working,  back when I got SSR working,  I need some time.  So I'm just going to put it out there  just so you guys know in case there isn't a ton of...
[05:14:13] You know, there's some more breaks in my stream schedule coming up.  Just letting you know, I'm, you know, I might not stream next week.  We'll, we'll see how things go.  Leave it, you know.
[05:14:22] Kind of on the fly.
[05:14:25] Right. If I start work, work on solid 2.0 should be coming up and that'll be interesting topics. I'm going to be working on an article talking about lazy versus eager. Like there'll be opportunities for sure. I'm just saying like.
[05:14:37] It's hard to have...
[05:14:39] this much content every week um so to speak uh you know
[05:14:45] So there's something to take into consideration.
[05:14:50] I sit about stuff that I care about.
[05:14:53] Uh...
[05:14:55] stream D&D. We were streaming and then we, I think we, uh, Jacob had some, uh, technical things. I can, I could stream me playing, um, magic games.
[05:15:04] arena.
[05:15:11] Yeah, one to two hours is probably fine.
[05:15:15] Ryan can't do short streams.  She's right.  Almost every time I've tried, it's been at least three hours plus.  But I think...
[05:15:22] I think maybe that I think my biggest concern is actually coming up with these nice videos with good covers and stuff.  You know, like if I'm just doing this week in JavaScript, you know, coming up with a topic.  Yeah, I don't know.
[05:15:35] we'll see
[05:15:37] I'm sure I'll still be around  and maybe I just say this and then literally  just keep on banging them out for the next like
[05:15:44] six months and like it's nothing. I'm just, it's something that I'm conscious of. It's been
[05:15:48] It's been...
[05:15:49] it's just been trickier to think of ideas and I feel almost like
[05:15:54] you know,
[05:15:55] There's, you know...
[05:15:57] Yeah.
[05:16:01] Yeah, yeah. Longer is good, yeah.
[05:16:04] yeah thank you Shia anyways
[05:16:07] I'm hungry. I believe I'm having nachos tonight, so...
[05:16:12] I will catch you all later. Thank you for joining me.  This stream has been amazing. There's still 175 of you all here.  And I'm sure if I go on YouTube,
[05:16:21] There's we haven't  hidden 175 likes.  So, you know,
[05:16:27] Please go on YouTube.
[05:16:29] And
[05:16:30] Give the thumbs up.
[05:16:31] You know, we have 100...
[05:16:35] Oh, there's 212 likes on YouTube. I take that back.
[05:16:39] Thank you all.
[05:16:41] Have a good one.
[05:16:42] And, uh...
[05:16:44] I.
[05:16:44] I will try to stream because I know you guys all got subs on Twitch, but, uh,
[05:16:49] If not, you know...
[05:16:51] I appreciate it, PatrickJS.
[05:16:55] Bye.