---
title: "82dzMKZzHrY"
slug: "82dzMKZzHrY"
duration: "5:05:14"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/82dzMKZzHrY.m4a"
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
[00:02:25] Hey everyone, how are you doing today?
[00:02:30] Sorry for a bit of delay, just getting myself ready here.
[00:02:35] But we're still going to preamble here for a moment anyways,  while people join the stream and we advertise that we're live.
[00:02:40] I didn't bought... It's interesting. Midweek, we hit that 30k stars on GitHub.
[00:02:47] And, uh...
[00:02:49] I did like a mini stream and I tested streaming directly to...
[00:02:55] Twitter. I'm not doing that today. I'm just going to go with my normal Twitch and YouTube combo.
[00:03:02] But, you know,
[00:03:04] Anyways, let's get this party started here in a minute.
[00:03:08] *thud*
[00:03:11] Okay, okay, let's advertise that we're actually live now.
[00:03:17] *sigh*
[00:03:19] I'm excited. I did a little bit of prep today, although, you know, me, I never really get around to doing very much prep, but...
[00:03:29] I, uh...
[00:03:30] I think this topic, I like at least once a year checking in on what everyone is doing in framework land and...
[00:03:39] So let's let's see if I can get this started here in two seconds or I just
[00:03:45] Getting...
[00:03:47] Um...
[00:03:49] Oh, I see. Sorry, give me two seconds here. Just a little bit of technical fun. My...
[00:03:57] I wish my computer monitor was smarter to detect when I have multiple screens detected.
[00:04:02] Captain, but it's all good. Um,
[00:04:06] Let's see here.
[00:04:08] Thank you.
[00:04:09] Let's get Twitter going.
[00:04:11] Thank you.
[00:04:16] Thank you.
[00:04:23] All right. So everyone have a good new year. Come say hi in chat if so. Let's go here.
[00:04:37] Yeah.
[00:04:38] Bye.
[00:04:40] Um.
[00:04:42] Which
[00:04:43] TB/RyanSolid
[00:04:47] That's right. God, every time when I've been around a while, I just like never remember anything.
[00:04:54] Yeah, that's right.
[00:04:57] All right.
[00:04:59] The absent-minded professor.
[00:05:02] All right.
[00:05:04] All right, cool.
[00:05:07] But yeah, lots to cover today. I'm pretty excited about that.
[00:05:13] I did this very similar stream last year. I want to do it again. It turned out pretty good.
[00:05:19] Can anyone tell me if RSC requires a server?  Yeah, maybe we'll talk about that a bit today.  Last day, last time we spent a lot of time talking about this general...
[00:05:29] move to the server and talking about the tension between, you know, different approaches, different frameworks we're taking, kind of like a sub context. I think there's gonna be a bit of that today because
[00:05:39] We're talking about JS frameworks and we can't talk about JS frameworks without talking about HTMX.
[00:05:43] in 2024. So this is all kind of
[00:05:47] gonna be part of that perspective uh talking about today so yeah
[00:05:51] Yeah, sorry for making people stay up late.
[00:05:55] Lots of lots of highs in the chat.
[00:05:59] Hey, Nate.
[00:06:00] All right. Good.
[00:06:03] Yep.
[00:06:04] People come in all over. Hey, Alex, it's been a long time.
[00:06:07] Southeast Asia. Oh yeah, this is like the worst time, isn't it?
[00:06:12] It's probably like two in the morning or something even.
[00:06:15] 3:00 in the morning? Yeah, I don't even know.
[00:06:19] Philippines. You guys are in Peru.
[00:06:24] You guys are crazy.
[00:06:26] Ethiopia. Oh man.
[00:06:29] What?
[00:06:31] Thank you.
[00:06:33] Thank you, Fuzzy.
[00:06:35] All right.
[00:06:36] Yeah, happy Friday. I'm glad to be back. I'm glad everyone's here.
[00:06:42] Um,
[00:06:43] Uh...
[00:06:44] All right, all right, all right.
[00:06:46] I should have made myself a little bit more prepared.  We've got to get some Excaladraw, probably.  Maybe I just need a clean slate on Excaladraw, because...
[00:06:56] I mean, there's a lot in this one.
[00:06:58] I could like just take over a different portion.
[00:07:02] of it.
[00:07:05] You can just like work somewhere out here.  Funny. I know people like hate me for this, but I still prefer the white of Scaladraw to the black of Scaladraw. I don't know.
[00:07:17] Thank you.
[00:07:17] mmmm
[00:07:24] Hey Greg, how are you doing?
[00:07:29] If there's some like Leptost or Wasm in general news, I'd love to hear about it.  That's a place where I got a gap on my knowledge.  There's a lot happened in Wasm frameworks in 2022, like an insane amount.  2023 hasn't, I haven't heard as much.  So when we get around to there, if you're still around, I'd love to have a little bit  input.  Either that or just like send me a message somewhere, maybe on Discord if there's anything  I should know.
[00:07:58] You prefer the white too?  Yeah.
[00:08:01] Thank you.
[00:08:02] I'm not.
[00:08:02] Light mode for the win.
[00:08:08] Yeah, that's awesome. I mean, I think you learn a little bit each time you try a different tool, you see like a slightly different perspective.
[00:08:14] Um,
[00:08:16] Yeah, light mode. Ooh, did I just blind everyone?
[00:08:21] I mean, to be fair, I think I did the video last year in dark mode.
[00:08:26] I don't know. I can't make up my mind. Maybe I'll just like strobe it and make a lot of people. No, that's not funny.
[00:08:31] Um...
[00:08:33] God.
[00:08:37] Yeah, I feared as much.
[00:08:42] Theorosm after all.
[00:08:45] Okay, so
[00:08:47] I've got a couple things how we're going to run this today.  First of all, um...
[00:08:53] 12 websites every developer must know.
[00:08:57] First of all, I got my article, which is a good baseline, and I think I'm going to...
[00:09:04] Look at my last year's Article 2.
[00:09:08] Second thing is I want to talk about every framework I can, at least a little bit, talk about what they've been up to, where things are kind of heading.
[00:09:19] Everyone has their favorites, but I got to pick an order. So we're going to do hype.
[00:09:22] driven prioritization. So it's going to be based on
[00:09:26] stars in the last 12 months to get an idea.  That's how I'm going to order my conversation on frameworks, right?  This number is very...
[00:09:37] It's a bit different for each framework, which means, as usual, we're going to start with React pretty early here.  But if you look, actually...
[00:09:47] Actually...
[00:09:49] Huh, Next.js is like the biggest. That still means React's the winner, technically. I'm gonna focus around the...
[00:09:55] main like framework or library or whatever the hell you want to call it, and then talk about the meta frameworks at the same time, because usually you can't really talk about them without the other. So react is clearly the first one on the list. But funnily enough, not because of react because next js.
[00:10:12] is
[00:10:13] apparently the highest starred JavaScript framework on average over the past 12 months.
[00:10:21] even more than React itself. Of course it makes sense. React already has like 220,000 stars. And Next.js had a bigger range to come into. They're at 117,000, which is not too shabby.
[00:10:37] We'll get there. I also want to talk about trends, I want to talk about some technical stuff. Very important when considering the direction of the web in the future.
[00:10:48] There's been a lot of conversations.  People don't get, you know, where does HTMX fall short?
[00:10:54] Can I just use islands and be done with it?  I've heard a lot of interesting takes like that.  And I think it's important that we can understand the differences here as they...
[00:11:06] Um,
[00:11:07] affect how we are going to purchase stuff in the future? Has web development gotten too complicated? You know, these are these are all really good questions. So, you know, we're just going to roll with that.
[00:11:17] I'm not.
[00:11:18] *cough*
[00:11:20] Alright, here we go. How we going? Just say hi to more people.
[00:11:24] uh,
[00:11:26] Where are we?
[00:11:28] "Is there any book you'd suggest to become a better developer?"
[00:11:33] That's an interesting question.
[00:11:35] I feel like there was a time period where I would have had answers for that.  But like, for me, the book part of my journey was like,
[00:11:42] very, very early, like,
[00:11:44] 30 years ago or something. Um,
[00:11:47] I'm kind of bad now. I kind of just do everything by doing. That's why I don't know.
[00:11:52] Um, I think people maybe a bit closer to it might, might be, uh,
[00:11:58] might be better at answering that question.
[00:12:01] So
[00:12:03] I'm here watching me sleep for us both to be blinded by the flash of a bite mug
[00:12:07] Sorry about that.
[00:12:11] It's funny. I used to watch streaming with the little one way back.
[00:12:18] It was actually speedrun streaming.
[00:12:21] Bright colors, but not too bright, like a lot of blues, greens, like Super Mario speedrunning.
[00:12:29] When my oldest was very, very, very young and very, very late, I just like turn on a Grand Pooh Bearer video or something.
[00:12:39] Take you in my favorite Ryan. There's some pretty great Ryan's. Honestly,
[00:12:46] Obviously, Ryan Florence is one that comes to mind, but there's also Ryan Dahl.
[00:12:50] I'm probably forgetting other great Ryans, but, you know.
[00:12:54] -
[00:12:57] Now, I don't know anything specifically about that. For me...
[00:13:01] When there's issues like security holes,
[00:13:04] Sometimes they're systematic because like perspective, you know, and like what responsibility the library of the framework is.  But sometimes...
[00:13:13] It's...
[00:13:14] literally just
[00:13:16] Like,
[00:13:19] like someone will find a solution for it.  So like these dramas are like, oh, how did we not know?  But then like afterwards, everyone, you know,  you're kind of done with it.
[00:13:28] Thank you.
[00:13:33] Hey Johnny.
[00:13:36] Alright, I'm glad to see everyone starting to show up here.
[00:13:40] 30 years ago. Okay, I like I'm exaggerating. That's when I learned the program. I, I, I turned 40 in 2023.
[00:13:47] um so uh
[00:13:50] No, I've been developing in some sort since I was about 10.  I was learning quick basic.
[00:13:58] I guess I was, I was 91.  Was I younger than that?
[00:14:04] My dad went back to...
[00:14:05] to school to college he was like an iron worker and he decided to take computers  and he brought um he he started into programming he showed me like quick basic and then my uncle um
[00:14:17] gave me some of his university textbooks. He was like the youngest uncle, you know,
[00:14:21] Um,
[00:14:22] And yeah, I want to say I was about 10.  Yeah.  I mean, I,
[00:14:28] Sounds about right. I feel it was before '93.
[00:14:31] It's hard to say, right? Because web
[00:14:34] got big around 1994 and I was front door almost like immediately building websites.  I started my band in 1995.
[00:14:42] and
[00:14:44] like
[00:14:46] like we all needed a website. It was the hot new thing. So I got into HTML like very early on.
[00:14:54] Gosling is crazy.  I was thinking about developers, but...
[00:14:58] You know, Ryan Reynolds. Okay, fine.
[00:15:02] I look late 20s.  Yeah.  Do you know why?  Because I'm Canadian.
[00:15:05] No offense to Americans, but Canadians look younger.  I've noticed this.
[00:15:10] It's crazy.
[00:15:13] Thank you.
[00:15:13] Yeah.
[00:15:15] *sad*
[00:15:20] Thank you.
[00:15:21] Thank you.
[00:15:22] Yeah, my I did a stream right
[00:15:27] I mean, I didn't cover the migration...
[00:15:30] I did a stream showing the features and what had changed is the best way to put it right before I break.  But migration is tricky because it's not because it starts tricky.  It's because the router is just not the same thing.
[00:15:42] Like it's like it's a different router. So it's like,
[00:15:47] It's just different.
[00:15:49] I think if you took current start and then took the old version of the router, like version 0.9, you might have an easier job migrating if that's what your goal is.
[00:15:58] Anyways, anyways. Yeah, not as much sun damage.
[00:16:01] *sniff*
[00:16:04] I'm just, we're just, you know.
[00:16:08] We could actually get started on the topic of the day at some point, right?
[00:16:14] Um, all right.
[00:16:19] Thank you.
[00:16:21] you
[00:16:21] Let me see if I can pull up. I had some notes that I took before the stream.
[00:16:27] Um,
[00:16:29] that
[00:16:29] you know,
[00:16:31] are actually
[00:16:33] Means that I'm like semi prepared for this.
[00:16:35] which is unusual.
[00:16:38] Uh...
[00:16:39] Where did those notes go? Here they are. Yeah.
[00:16:43] Sorry, just juggling the double screen deal.  But yeah, as I said, we're just going to kind of go down.  We're going to talk about the different frameworks.  I think we should really start actually, though.
[00:16:52] We should go back to 2023.
[00:16:55] article which I released, I think, December 29th, 2022. Okay, so snuck in on the previous year. But
[00:17:02] I remember this article because this is probably my most successful article of all time, and it only came out because
[00:17:11] Theo Brown, T3, GG. He was like, "Ryan, what were your big articles of the year?" And I noticed that in 2022, I had some good ones, but none that really were ground shaking. And I was trying to give him articles. I'm like, "Yeah, this one's not right. This one's not right." And I'm like,
[00:17:26] And he's like, yeah, I'm trying to do this award show thing.  And I'm like, I don't know.  I'm just going to write an article right now.
[00:17:32] And...
[00:17:33] Thank you.
[00:17:34] So I did. And anyways, it ended up being this article. I guess people are interested in trends of stuff around this time of year, so...
[00:17:44] Anyways, let's let's let's what did I predict in 20 at the beginning of January 2023?
[00:17:51] I basically made a few statements.
[00:17:55] I thought that wrangling in complexity was going to be the main focus of 2023. I was like 2022, we all showed which technology was possible. But, um,
[00:18:06] we have this kind of problem where all the solutions are kind of unwieldy.  People are having a hard time wrapping their heads around it.
[00:18:12] Um,
[00:18:14] you know,
[00:18:15] And it was a
[00:18:16] I figured people like we need to deal with the complexity.  What did I write here?  Um,
[00:18:22] You don't dump a bunch of innovation in space in a short time and not expect something to give.  Astrome Remix Return to is just PHP Rails for SP...
[00:18:29] MPAs and single page apps, respectfully, has been largely successful, even if they both lack important benefits of more sophisticated solutions.  Having time spent with Quick, Marco, server components like.
[00:18:40] Bunch of a mess.
[00:18:42] And
[00:18:44] I think the tricky part is, I mean, obviously, it's not hard to say that I was right here is we spent a lot of time on this and a lot of people just were like, this is too complicated.  They just jumped ship.  I mean, I showed.
[00:18:57] HTMX here being like the second most star JavaScript framework, UI framework in the past year on average. But that doesn't really give it the right showing here, right? Because like,
[00:19:09] Until June, like no one's heard of it. And then suddenly it's like...  This is almost like Bunt. Bunt went from 0 to 30k stars in like...
[00:19:17] A month?
[00:19:18] month and a half.
[00:19:21] This is very similar rise for HTMX. Where essentially out of nowhere this summer it basically just, you know,
[00:19:29] took took over, so to speak. Astros also had a very strong year. So like, this is this is the thing we I guess we haven't succeeded
[00:19:38] on the more typical JS framework side and wrangling that complexity, since people are trying to escape. We'll talk about that more later. But yeah, that was one of the big ones that I kind of predicted coming in over a year ago. The other one was, I figured people would be doing a lot of stuff with edge functions.
[00:19:54] Um,
[00:19:55] obviously, because coming out of 2022, everyone's like, yeah, we have edge functions, we have edge functions, but like, we weren't,
[00:20:03] Sure, you can deploy to them, but no one else could do much with them.  Edge function, we all have this idea of maybe edge functions could just replace normal functions and everything could be on the edge.
[00:20:14] Thank you.
[00:20:16] It's kind of obvious this wouldn't work. So I was hoping that we'd have a lot of improvements here in terms of
[00:20:23] being able to develop in a monolithic style, but then, you know, be able to basically automatically distribute it across infrastructure.
[00:20:32] And
[00:20:34] We'll get to it, but we did have one example of this being built into a framework this year.  So we are still in its infancy.  I thought we'd get further in 2023, but it at least got started.  Other things I said, will 2023 be the year of web components?  I don't know.
[00:20:51] I wish I wish I should do like a Twitch poll. Does anyone think 2023 was your web components?
[00:20:58] *sad music*
[00:21:02] Thank you.
[00:21:03] Okay.
[00:21:04] Thanks.
[00:21:05] *Ding*
[00:21:06] Well, I guess a better question is, was it the year of the Linux desktop?
[00:21:12] *laughs*
[00:21:14] All right.
[00:21:17] *sniff*
[00:21:18] Okay. So will 2023 be the year wasm?
[00:21:23] That's an interesting question, right? This is why I was like, kind of get see if, uh,
[00:21:28] If maybe I can sneak this out in the background, if Greg could fill me in.
[00:21:41] Yeah. Oh, Greg wrote me a whole like article like a few minutes ago. I got it like.
[00:21:49] Thank you, Greg. I'm just like reading it off screen. But they pick up some of the things here. He agreed that late 2022, like over the break into the like January or whatnot, February of 2023 is a big wasm time period.
[00:22:05] most of 2023 is consolidation, which is
[00:22:09] honestly what we've seen in most frameworks.
[00:22:12] But okay, Dioxys had enough full-time funding for full-time work for a couple of devs, which is pretty exciting.
[00:22:22] Ooh, dioxys is adopting signals. Okay, we should talk about that in a minute. Um...
[00:22:30] Yeah, I'm just going to talk about this stuff right now. I'm going to put Greg on here. I hope he doesn't mind.
[00:22:35] Because I'm probably not going to talk about
[00:22:38] um wasm outside of this point in the stream so i this is a good time to see to get a little wasm update
[00:22:45] Zillum is a Rust native  GUI framework in development that's
[00:22:49] with a bunch of support at Google.
[00:22:51] Right. First real Rust native GUI, not Elm, not React, not Solve. It's a secret fourth thing, kind of like Swift.
[00:22:58] Um...
[00:23:00] Yeah, and then lepto's
[00:23:03] Leptos, I could do a Leptos update later actually. We'll do the Leptos update later. Although,
[00:23:10] - Good.
[00:23:10] Um,
[00:23:13] Yeah, yeah, I think, I mean...
[00:23:16] Yeah.
[00:23:20] Nah, I've got it here, Greg. You get first shot. I said I was doing a Hype Order, but you know, Leptos gets first shot here. Big server function rewrite that supports a bunch of additional encodings. That's interesting. Right, so similar to the work Sol has done in CeroVal and Quik. I've done experimental work on more statically typed view tree, universal rendering, reducing sizes.
[00:23:39] Yeah, so some stuff can work.
[00:23:43] Getting Leptose Hello World size down to 10 kilobytes.
[00:23:49] Thank you.
[00:23:49] That's awesome. Signals coming popular in Rust. Even smaller island demo hopefully coming this spring. Okay.
[00:23:55] Cool.
[00:23:56] All right.
[00:23:57] Leptose might come up again, but I'm glad to at least get a bit of an update there.
[00:24:04] I said it was still a little bit early for Wozom when I made my predictions a year ago,
[00:24:11] You know, I'm glad to see that it's still coming along.  I mean, this was quite the showing in the end of 2022,  when it was like vanilla JS solid,  and then like all the Rust frameworks,
[00:24:22] And then like Svelte and...
[00:24:24] Vue and Lid and Preact and everyone else. It was quite a showing. But something else has happened, started happening this year where other JavaScript frameworks are crossing the divide.
[00:24:37] And it
[00:24:39] And joining solid up at the front, which we'll talk about.
[00:24:44] The year of boring maintenance. Yeah, there we go. There we go. Okay, so
[00:24:50] Yeah.
[00:24:51] Yeah, I mean, will AI no-code take my job?
[00:24:55] No, but it might help you migrate from one framework to another. Yeah, I see why this article did good. I was like a little bit spicy here. I feel like I pulled some of the punches on my latest article because I didn't want because I wasn't prepared to summarize my opinions on this.
[00:25:11] the
[00:25:12] you know, the simple path of JS frameworks, you know, the HTMX Astro side.
[00:25:19] Essentially in like a one sentence or in an article and
[00:25:23] But that's why we got a stream today so we can talk about this.
[00:25:28] I unfortunately did not use AI to migrate anything.  I was pretty optimistic that in 2023, we'd see it.  I did, we did see some cool code gens and stuff,  but I think the work into AI,
[00:25:41] is getting more interesting than I even saw in 2023.  Anyways, that's basically...
[00:25:47] what I was trying to predict a year ago.
[00:25:49] Um...
[00:25:51] -
[00:25:52] My reflection on 2023 is a little bit different.
[00:25:55] we'll get to some of these topics anyways but let's let's let's change gears and um
[00:26:02] talk about what actually happened in 23 instead of my, you know, predictions coming in.  And let's just start, let's just get into the frameworks.  Okay.
[00:26:13] Thank you.
[00:26:14] Thank you.
[00:26:15] Thank you.
[00:26:16] Thank you.
[00:26:17] Thank you.
[00:26:19] hmm there we go
[00:26:25] Having a new job in 2023 is good.
[00:26:30] a lot of layoffs in 2023.  Um,  on the other hand,  uh,
[00:26:35] Tough year for tech.
[00:26:37] I usually don't really comment much on the social side of things.  I work purely on the technology, but...
[00:26:43] Um,
[00:26:45] definitely was a hard year for a lot of people.
[00:26:52] Thank you.
[00:26:53] .
[00:26:56] Thank you.
[00:26:57] Thank you.
[00:26:58] Thank you.
[00:26:59] So, okay, so let's talk React. What was the big stuff that we want to talk about for React? I'm just going to give React a header here.
[00:27:11] React.
[00:27:12] And we'll just kind of go from there.
[00:27:17] Well,
[00:27:18] For React itself, I don't even remember if there was any...
[00:27:22] big releases. See, in 2022, they released React 18.
[00:27:27] Or is it 2023 now?  I can't even remember.
[00:27:29] Yeah, it was 2022. They released React 18, which was like a big React release. And then
[00:27:36] The real React 18 release happened in October 2022 with Nex13.
[00:27:44] End quote. And
[00:27:47] Um,
[00:27:49] I think...
[00:27:50] that what we've seen is React been very aggressively pursuing Canary releases, where they've been like kind of sliding out all these new experimental features on people. I expect that to continue, honestly, with React.
[00:28:05] I think the most interesting thing for 2023...
[00:28:09] with React is I want to talk about React server components for a moment, which is unsurprising to anyone here.
[00:28:15] I even went to a conference where I went to a React conference to talk about React server components, which was...
[00:28:21] Reactathon San Francisco, which was amusing because obviously I have nothing to do with server components.
[00:28:29] That was-- it was definitely interesting to have a panel of myself, Ben from Astro, and Tanner Linsley to talk about React Server components, all people who generally don't use React Server components.
[00:28:42] I know Ben's a big fan.  I just,  just in the general sense,  but I think what the React team did do a good job of doing this year was  trying to at least get people to understand why they would even think of  doing this crazy thing.  I don't know if you guys saw this,  um,  probably have,  but like,
[00:29:00] Dan Abramoff had a really cool concept for the talk.  I don't know if the talk itself ended up as great as I'd hoped.  You could tell, like...
[00:29:08] It was more of a raw idea, like the first version, and you might need a little more polish.  But he went on RemixConf, and he basically described what if React had...
[00:29:16] been server first and then added the client features later. I always liked this talk because it's a story of Marco, essentially. He decided to tell the story of Marco.
[00:29:30] it's interesting to see the kind of parallels there.
[00:29:34] Of course.
[00:29:35] in reality we live in,
[00:29:38] React has been a client single page app framework this whole time.  So expecting the millions of react users to swap over to RSCs is pretty,
[00:29:48] Big ask.
[00:29:50] So,
[00:29:52] you know,  got to put that on balance.  But I do think this is interesting because I think,
[00:29:56] This is the first time in years that we've seen the React core
[00:30:00] - Partee.
[00:30:00] Come out and engage people.
[00:30:02] Dan was always good at engaging people on Twitter.
[00:30:06] But we actually saw them going to conferences again, talks, trying to, you know, both from the face of the core team type people who all work at Bricell now.
[00:30:16] And from the people who work at Meta who are doing a lot of work but aren't as known anymore, people aren't as known yet, perhaps, like Josephana, Eli White, these people are working with teams in Meta to work on React.  Yeah.
[00:30:37] No, they might not be as...
[00:30:39] face using, say, Andrew Clark or Dan Abramoff,  but...
[00:30:43] I saw like a two prong
[00:30:46] where they were actively engaging the communities, getting in Twitter spaces,
[00:30:51] conference talks,
[00:30:53] Making presents that I haven't seen them heard, you know from them for I'd say like three or four years. So um,
[00:31:01] The end result is hopefully that there's a certain group of people that are
[00:31:06] at least getting the whole server component thing.  I know a lot of people have their, you know,
[00:31:13] concerns around this model, but I just wanted to kind of like put it out there  that the React team is starting the effort to actually
[00:31:20] find a way to talk about them in a way that people can understand.  This is part of that wrangling the complexity, right?
[00:31:26] Right. Yeah. And React for Git, we'll talk about it in a second, seems to be coming pretty soon.
[00:31:33] Oh, yeah.
[00:31:34] On that mark, I mean,
[00:31:39] Dan's been writing, trying to work on these...
[00:31:44] things. Oh, okay. That post is probably on Twitter. Maybe we can ship that along and we can  talk on this week in JavaScript. I was going to mention that Dan actually has... She checks out
[00:31:55] Something MPN audit. Okay, before you memo. February 2021 was the last React topic
[00:32:01] that Dan wrote about it on his blog.
[00:32:04] I've referenced this article a ton.
[00:32:07] This is one of my favorite articles to reference when talking about why signals are better than Reacts model.
[00:32:15] But it's a very clever model
[00:32:20] article because he brings comparisons between stopping re-renders and react to optimizing  server components even though like server components weren't even really i mean they did a
[00:32:32] Something you can go use back in February 2021.  But...
[00:32:37] It wasn't until December 2023, so almost...
[00:32:42] what, three whole years, Dan...
[00:32:45] blog sat quiet and he's back now.
[00:32:48] Dan is back. So yeah, the two reacts, this is kind of the...
[00:32:55] This mentality I'm talking about, like...
[00:32:58] Trying to find the right way to talk about server components, right?  Because sometimes...
[00:33:02] it might be easier to talk about them as a new framework wrapping an old framework.
[00:33:06] how do you unify that model?
[00:33:15] Alright, so I got a tweet here. Let's see if it's a this week in JavaScript tweet, or if it's a different kind of tweet.
[00:33:28] All right.
[00:33:30] Okay, well, sure, I'll give it. React server components does not require a server it never has. I get that this is confusing, but I'm at a loss of what to do. People keep repeating that it does and
[00:33:37] speak about it as if we're too fat.  Can someone please spread the word?  Yeah, of course not.  The very first React server components demo,  the notes demo didn't do server rendering.
[00:33:47] I don't know if people remember this.  In 2020, December, they...
[00:33:52] did a demo, it was a notes demo, and it was not server rendered.
[00:33:56] And
[00:33:58] This is actually really, really important.
[00:34:03] When we get to talk about Astro...
[00:34:05] I'm going to...
[00:34:07] bringing this up again, because otherwise we'd spend our whole time talking about
[00:34:11] react here. But
[00:34:15] There is...
[00:34:16] E.
[00:34:17] Server components are in one way I told everyone you know early in the year. I'm like just think about them like islands  It will make your life way easier than trying to get all fancy because most there's this problem server components where a lot of people were like  Let's picture that they're like API requests that send back HTML. That was like the mentality they were taking and
[00:34:36] That's
[00:34:37] mechanically how they work, but that's not actually how you should treat them.  Because then people will start going like, "Well, why can't I import server components to my client components?"
[00:34:45] And then,
[00:34:46] React teams like, no, no, no, structurally that doesn't make sense. But then other people like Next or Nuxt was like, oh yeah, look, we got server components. See, you can just import them. Look, we kind of solved that problem for you. And...
[00:35:00] I'm like, no, no, no, no, no, that's a very...
[00:35:03] that's not the way you solve that problem like that's like this is not a good pattern we had  people uh jack herrington making you know i think he was making some videos about this talking about  like if they would just fix it i think it's not it's inside the react community too um
[00:35:16] what's his, Daishi, who does all the state managements, he made a framework called Waku, I believe, in React ecosystem around server components. And he was doing the same thing. And it was like, no, no, no, don't do this. And
[00:35:31] This was like early in the year because the problem is,
[00:35:35] you're inherently...
[00:35:36] can create waterfalls just because if the server...
[00:35:40] If the client can call the server at any number of points, which can have client components in it that can also call the server, there's no way for those server pieces to know about each other.  And then you're just like, oh, I have to do a piece of state.  And then I went, wait for it, wait for it, wait.  Like it's inherently waterfall prone.  It's not a good pattern.  Do not do this.  So I was like, think islands, guys.  Just please think islands.  Now we've come far enough on this that it's like, no, we're not server ready.  We're not like islands.  Yeah.
[00:36:08] I...
[00:36:10] This is really why I believe that we're talking about a new paradigm. I've been trying to explain this to people that there were single page apps or small page apps and then there's this. This is not a single page app. This is not a multi page app. This is something else.
[00:36:24] Okay.
[00:36:26] Of course, I probably have the chat going off now going like, what the hell are you talking about, Ryan?
[00:36:34] Oh, sorry. There we go. 4%
[00:36:39] market share.
[00:36:43] Oh no, no, sorry. No offense to Kensey Dodds and his categorization, but
[00:36:51] I...
[00:36:52] I... the whole...
[00:36:56] Pespa
[00:36:58] Pempa, whatever the whole progressive enhancement at least from my perspective is not a
[00:37:05] axis on trying to figure out what these architectures are.  You could basically ignore the progressive enhance part and actually...
[00:37:13] Unless that's his naming for...
[00:37:16] what we've been doing in Next since the beginning, which is like server render once, then pick up and become a client app, unless that's what the naming is.  But I call those single page apps. I call them spas.
[00:37:25] I think it's easier to do that. I know some people consider single page apps SPAs as like only client render, but they haven't been only client render for like,
[00:37:34] eight years. So I think it's easier to retroact the
[00:37:38] the client render only ones as client render only or CSR, rather than to try and come up with a bunch of these other terms because like,
[00:37:48] It's like filling out a table and then the intersection of the axes, there's a bunch of gaps because the actual choice of the axes is incorrect.  That's just my perspective.  I'm pretty...
[00:37:58] critical or anal about categorization.  It helps my thinking model, but
[00:38:03] Um, yeah, I...
[00:38:06] Yeah, I feel like we talked about we'd agree about all the things like technically this is just like an actual
[00:38:12] matter of like, I've refused to acknowledge that categorization.
[00:38:19] -
[00:38:21] Thank you.
[00:38:26] Thank you.
[00:38:28] Anyway.
[00:38:32] Yes, exactly.  I spent a lot of time looking at that,  thinking of what's a category,  what's an architectural consideration,  versus what's an optimization consideration.  It helps me.  I realize everyone's going to have their own perspective on this,  but it's one of the reasons why I've never picked up the PESPA, PEMPA, whatever.  It does annoy me a little bit when people call,  when they say spa mode, and they mean CSR.
[00:38:59] You know, but...
[00:39:01] F.
[00:39:02] It's not that big a deal.  Anyways.
[00:39:04] Server components are pretty cool.
[00:39:07] I am bullish on server components.
[00:39:11] So...
[00:39:13] This is a great tweet. I need to add this to my bookmarks. In fact, I'm
[00:39:19] I need to just retweet this right now because...
[00:39:23] I need to help Dan spread the word.
[00:39:26] And...
[00:39:27] I mean,
[00:39:28] Even more so, like check this out, CodeSandbox.
[00:39:31] Not that one.
[00:39:33] Did you hear CodeSandbox is going to limit free accounts to 20%?
[00:39:37] To 20th?
[00:39:38] Um,
[00:39:39] Makes me very sad. I'm pretty sure I have way more than 20 code sandboxes. I use this to actually do my development, like when I've got a prototype idea.
[00:39:46] Like this is what I do.  I go and code sandbox usually.  I like stack blitz, but usually I've always found code sandbox when you're not trying  to do a full stack app a little bit quicker or lighter.
[00:39:58] than booting up a web container.  But now they're kind of going that way.  And so, yeah, starting January 3rd,  your free plan will be limited to 20 sandbox.  Take action, avoid destructing your service.  Yeah, there's no action for me to take here.  Like...
[00:40:11] Like...
[00:40:11] I am screwed, pretty much.  Let me go.  My drafts.  I do reproductions here, too.  I think I have more than 20.  That's not including...
[00:40:20] the ones that are actually like
[00:40:23] you know,
[00:40:24] Solid demos, yeah.
[00:40:26] Anyways, why do I want to look my drafts?
[00:40:30] So
[00:40:31] I was playing.
[00:40:32] We built kind of like an islands thing in Solid Star.  And then we built kind of like a server component thing in Solid Star about a year ago.  But I was playing and I was like...
[00:40:41] I was like,
[00:40:42] I was like, what if I just started again with no server?  So here you go.  Here is...
[00:40:47] Here is server components with no server. I call it on server, but literally this is just a client-side code sandbox.
[00:40:53] I made a server component, which is just
[00:40:57] Div
[00:40:57] counter provider, which is a client component, let's say,
[00:41:00] counter which is the client component, another one and see I'm nesting it all nicely in here.
[00:41:04] And then...
[00:41:05] The...
[00:41:07] the counter component
[00:41:09] has state and uses context,
[00:41:12] So there's an interval, which is a context that updates, and then there's a state, which is the name, and then it has.
[00:41:18] some children it passes through. And the context is your typical context provider creates a signal,
[00:41:23] And then on an interval of every second, it updates it.
[00:41:27] Reason I'm showing you this is
[00:41:28] This is exactly Dan's point.
[00:41:30] This is all client-side, essentially.  I just kind of denoted stuff with server versus client  by instead of using a bundler,  what I did was you'll see I called wrap island or whatever,  but it doesn't matter.  I just made like a...
[00:41:42] Instead of a bundler trick, I just wrapped it in JavaScript to like
[00:41:45] to eliminate the difference.  And if you look at this example, I'm here,  I'm updating it.  When there's more than five, it shows the next thing.
[00:41:53] But then, at an interval, I send in the new...
[00:41:58] stuff and it's able to continue
[00:42:01] the persistence of state and the stuff comes through. Like if I
[00:42:05] didn't go all the way, I clicked it a few times, and then the server update came in, and then when I added after, see it comes in. There's only one trigger event, I'm not requesting more data from the server, there is no server in this case, but I just wanted to show, I wrote a diff file in about
[00:42:20] 100 lines of code, and then the index file is basically take those components I showed you and then pretend this is the update coming from the server, some serialized data, basically a template.
[00:42:30] Children's templates, some updated names here. Update the name to capital letters and template.
[00:42:36] And then
[00:42:37] Sure enough, we have working context.  This is basically server components in the client without SSR, in 100 lines of JavaScript.  It's not using the fancy JSX format, it's just like using some HTML, but you get the idea.  The concept here,
[00:42:55] is really one of a client-side diff, so to speak. Anyways.
[00:43:01] I
[00:43:02] No server, server components.
[00:43:05] I don't know if I'll come back to this example.
[00:43:07] It is a pretty cool example.
[00:43:10] But.
[00:43:11] That's that's a whole other thing.
[00:43:13] Um...
[00:43:16] Maybe I'll just stick this in chat in case anyone wants to check this out at some point.
[00:43:22] Thank you.
[00:43:24] Thank you.
[00:43:28] Thank you.
[00:43:30] So if you wanna know what server components  are from this perspective,
[00:43:34] I'm sorry.
[00:43:36] Yeah, I mean, we talked a lot about, I was excited about the bundling thing, giving this ability.  Again, this is that whole idea of what I was talking about prediction, where I was like, be able to, you know, separate a monolithic system.
[00:43:49] development experience into different places where it goes. The thing is, it is really just about
[00:43:56] having two trees
[00:43:58] interweave around each other, maybe even more,  you can maybe do three trees,  and basically have some kind of system rules  in terms of that weaving so that you can basically extract
[00:44:08] one tree from the other tree.
[00:44:10] and have each work in its expected environment,
[00:44:14] while completely being able to share context and talk to each other between the pieces.
[00:44:19] Share context isn't the right term because you can't put context as server component, but the client components can talk to the other client components. It's a way of basically interweaving these trees so they are separatable, but you have a single experience. It's very cool, but yeah.
[00:44:36] Anyways, this is just some experiment I was playing with. I'm going to talk about this, though, probably more a bit later.
[00:44:44] regarding Astro, but we're still talking server components right now. Anyway,
[00:44:51] Anyway, anyway, anyway.
[00:44:54] Thank you.
[00:44:56] Where are we?
[00:44:59] RSCs.
[00:45:00] Finally,
[00:45:03] kind of coming into their own. People... next 13...
[00:45:07] might have
[00:45:09] put them out there for the world to try.
[00:45:12] It might have been a little bit early,
[00:45:14] I get a lot of flack sometimes when people are like, "Why is Solid Start still in beta?" Right? A lot of people are kind of figuring out stuff right now. It's fair.
[00:45:23] In a way, I view all of Next.13 a beta, right?  Even though it was a production release, it was kind of like the beta run, right?  They learned a lot in this year.  A lot of things changed.  A lot of things broke along the way.  Yeah, let's talk about Next.js next.
[00:45:39] Right. Let's talk about next.
[00:45:41] Um,
[00:45:43] Yeah, this has just helped me keep
[00:45:45] I'm trying to think if there's anything I want to say about RSCs.
[00:45:48] starting
[00:45:49] starting to
[00:45:51] Adopt, right?
[00:45:53] I'll just leave that there. Let's talk next, JS.
[00:45:57] Yeah, I mean, people didn't know what they were dealing with. It took the React team stepping in and being like, "Hey, guys."
[00:46:05] But for me,
[00:46:07] Um,
[00:46:08] Next.js's story kind of continues where this React story came from.  It's interesting because obviously they were the first to get...
[00:46:17] like the RSC stuff, right?  If you go back to the end of 2022,
[00:46:21] Um,
[00:46:24] There was the whole, you know,
[00:46:26] Here's how you...
[00:46:29] do like the, like render them.  But there was this like thing, it's like,  how do I mutate my data?  What if I want things to actually update?  And,
[00:46:40] Um,
[00:46:42] There wasn't like a clear story coming in the whole beginning of the year.
[00:46:46] So people build these read-only kind of apps,  but then when they had the update data,  they were like, okay, well, I guess we'll jam  some client state library in there.  There was no story on how to do mutation.
[00:46:56] And it took until about April,
[00:47:01] to actually even get to...
[00:47:03] that story, so to speak, right? Because
[00:47:07] They needed a...
[00:47:09] interface for passing this stuff along and figuring out how to do a mutation, stream back the RSCs, have that whole cycle work, what's the API. And they ended up consolidating around use server, right, which as a
[00:47:25] many of you know, is basically a variation of server functions, which are basically these compiled RPC calls, very similar to what we added to SolidStart back in 2022.
[00:47:38] But they also...
[00:47:43] Um,
[00:47:45] wanted the action semantics, kind of like the remix style, right? Which is also something we had in Solistar in 2022. But they decided to just combine the whole thing into a single interface. There's no difference between a server function and a server action. There are only server actions.
[00:48:02] And
[00:48:04] So reactions are pretty cool because they feel like old actions.  You get rid of the what I call is the the.
[00:48:13] the cascade.  If you've ever used tan stack query  or any of the tan stack libraries,  and I've talked about this in previous streams,  like usually,
[00:48:23] what you will do is you'll be like, okay, I'm going to like, I don't know, update post, right?
[00:48:29] and you'll send the new post data, right?
[00:48:33] And then you'll get a response back from the server.
[00:48:37] That's like,
[00:48:40] Yay!
[00:48:42] It succeeded. And then
[00:48:45] then you'll be like, okay, revalidate
[00:48:49] Post.
[00:48:52] or revalidate. I mean, it could be everything. It could be post.
[00:48:56] It doesn't matter, but you go revalidate.
[00:48:58] And then it's like,
[00:49:02] update
[00:49:03] UI. See, this is a waterfall, the two cascade. Now to be fair, this could have returned the data you need
[00:49:14] Thank you.
[00:49:15] But we kind of got really not psyched about this because sometimes you'll update one thing that can impact other places.  And we got to this point, like GraphQL was like, we can handle this all for you.  So when you update, you get back exactly what you need and everything will propagate.
[00:49:34] People really hate writing to caches.
[00:49:37] I really hate writing to couches to the point that I think...
[00:49:41] almost every application that was not needing it for performance reasons,  everyone just was like, screw this, just revalidate post, move on.  This is why TanStack query got so popular.  People didn't want to deal with revalidate, like worrying about caches.  So the standard pattern for clients at apps is a two
[00:49:57] Um,
[00:49:58] It's like a two request request.
[00:50:01] process and and to be fair
[00:50:03] We've been dealing with this to some degree on client-side single-page apps forever.  Because, like, picture the classic example.  You're in a new...
[00:50:13] post thing, you click submit and then you go to the next page and you show the list of posts again after you're done. In that scenario,
[00:50:21] Yeah, you're going to be on the page, you're going to post your new post, create it, and then
[00:50:26] Even if you got the data back, when you go to the next page to start the listing, you usually
[00:50:32] fetch the list again.
[00:50:34] So like this double thing is something we're very used to.  And a lot of times from an afforded standpoint,  you could say like, look, when I'm doing a mutation,
[00:50:42] Yeah.
[00:50:43] The user just performed that action.  They're accepting more of a little bit of time.  They expect this action to actually...
[00:50:50] require doing something, you're saving something. Mentally speaking, you understand that this,  you know, might take a couple hundred milliseconds longer than, like,
[00:50:59] you know,
[00:51:00] you know, some other more trivial action.
[00:51:04] - Yeah.
[00:51:06] But I just wanted to kind of point this out here.  I mean, you could argue this is why optimistic updates for really light actions like Harding,
[00:51:14] a post or liking, you know, a tweet or whatever is, is,
[00:51:19] is so popular because we didn't want to like have that delayed feedback for  something that didn't feel like it was, um,
[00:51:25] worthy, but this is very common.
[00:51:28] in client-side apps, whereas in
[00:51:32] Multi-page apps, you just send back the next page.  And in React Server Components, you just send back the next page.  But...
[00:51:38] This is essentially kind of like at the heart of...
[00:51:43] To be fair,
[00:51:45] You can solve this.
[00:51:47] with a cache API.
[00:51:49] And like, if you have the knowledge of the cache  and you control both sides,  you can do this in a single request, right?
[00:51:55] and you know the router.  Like it is possible to basically send the post,  know that it's gonna redirect to the next page,  and return with the data for the next page,
[00:52:04] here without rendering on the server. You don't need RCs to do this fundamentally. You just need  a router where cache, like something that we have in SolidRouter.
[00:52:14] But I don't, I haven't seen anyone actually
[00:52:18] Do this pattern.
[00:52:20] But I just want to kind of throw out there, this is one of the wins on the RSC side in the server actions.
[00:52:27] You guys are giving me too much credit.
[00:52:32] my understanding is Svelte's form actions,  like remixes,  like are very similar to like remixes essentially,  or solid starts today.  Like when you're not considering like,
[00:52:46] islands or like a server component type stuff.  Like basically we
[00:52:52] we go through this kind of exercise. The action part is just telling you it's
[00:52:59] on the server right or like the form like the idea here you you you i don't think it's the action  part you literally install go like dot server if you want the thing to like be on the server that  you're calling and svelte wires it all up for you if you name your file appropriately but generally  speaking svelte remix solid start we all kind of use the the same patterns for mutation we use forms
[00:53:21] this lets it be progressively enhanced, but it doesn't actually fundamentally change
[00:53:25] Um,
[00:53:26] the process that we we do, so to speak.
[00:53:31] That being said, um...
[00:53:34] If.
[00:53:36] Svelte.
[00:53:37] or remix.
[00:53:40] explicitly pushed you into using keys,
[00:53:43] then they could do a single request  with this model without RSCs.  I just wanted to kind of
[00:53:49] Throw that out there. But mechanically, they work the same
[00:53:53] when JavaScript is enabled as the stuff that we've been doing since the dawn of time with single page apps.
[00:53:59] The difference is the API is nicer.  Instead of going like, hey, I have to make an API route, you're just like, oh, okay.
[00:54:05] you know,
[00:54:06] uh
[00:54:08] action this or dot server this or use server this or whatever.  Like it's just a nicer way of like not getting rid of all that boilerplate, so to speak.  But mechanically...
[00:54:21] Nothing has changed.
[00:54:24] Okay, so...
[00:54:28] I just kinda wanna kind of push that there on server actions.  It took some time to figure out what the patterns are,
[00:54:33] The one thing that...
[00:54:37] React wanted to be able to do, I'm pretty sure, is they didn't want to ship a ton of JavaScript to the client when you have server actions and server zones, right?  Like, obviously, you can make the RPC call, but how do you handle that request response back, right?  You don't need any more JavaScript to do. So one of the interesting things that the next guys did was they overloaded the basic form element to push actions through.  So you didn't need like a form component because a form component would probably have to be a client component because it'd have client...
[00:55:04] javascript logic and react wanted it to work
[00:55:07] both
[00:55:09] when the JS was off.  So it's just normal form, which is fine.  You can do that with a capital form component,  but also not require the JavaScript at the element level.  So when you're in a server component area,  it doesn't suddenly have to become a client thing.  A client router that's higher up in the page  that's handling event delegation could handle this.  That way, like if someone posted to a form
[00:55:30] that was not in a client component, that form didn't have to be of client component itself, and then it would just
[00:55:36] to a submit event,
[00:55:37] The outer app would catch it.
[00:55:39] There would be client JavaScript to handle it and do the proper insert, but the form component itself wouldn't have to be a client component.  So all these details are very important here and very interesting.  I was very inspired by Next Forms when I designed the ones for Solid Start, which have that same kind of characteristic where you can just stick a form element
[00:55:59] and just passing the action. It involved some trickery. I think Next actually uses a compiler,  and this got us to our first like controversial thing in the year for them because
[00:56:09] Even though they made a very big deal about the fact that you can't just put server functions and client components because the closures might accidentally pull in something that
[00:56:20] could get bundled somehow if the module wasn't side effect free or whatever, they're worried about that.  Well, as it turned out, even putting server inside server
[00:56:31] could still leak stuff to the client because
[00:56:34] Those server, the server in your component that gets rendered initially and the server in the server function that happens when you like perform the action.
[00:56:43] Those are two different servers. One is happening initially when you render, and the other one's happening when you request from the client. So any data that's implicitly passed between those via Clojure,
[00:56:54] is going to have to go to the client.
[00:56:58] There's no way to avoid that.
[00:57:02] Um, so like there was a bit of a, like, you know, them putting passwords out in the open, you know, that whole kind of thing.  Um...
[00:57:12] This is why I'm skeptical of closure extraction a little bit, because like one of many reasons, actually.  But that's a whole other topic that's not deserving of today.  Today, I just want to say is they next ended up adding encoding to make sure that this stuff was, you know, obscured and couldn't be cracked into.  And next also, obviously, or React added the Taint API so that you can.
[00:57:37] You...
[00:57:39] I think one of the challenges, and this is something we're going to see kind of a theme coming in the rest of your react is, you know,
[00:57:46] How many new hooks have they proposed this year?
[00:57:50] Like,
[00:57:51] They're mostly aimed at framework authors and library writers, but there's getting to a complexity that, no, you as the end developer might not need to worry about them. But like,
[00:58:01] There's a lot of new use something because as we enter this world, so to speak, so that we can handle...
[00:58:09] handle this stuff and I'm
[00:58:11] Not going to lie, I am not up to date on it.  I honestly like when I try and follow a conversation about suspense on react on Twitter, I honestly don't know what's going on.
[00:58:25] I think if I spent some time, I'd be able to figure it out.  Like I was watching, I was seeing a chat between like Dominic who maintains react query and  like some react core people members.  And I was like.
[00:58:36] there's a lot here that I don't understand what's going on.  Like they're speaking their own language.  And I thought I knew that language so I can understand why other people might be  feeling that way.
[00:58:48] Okay.
[00:58:49] I'm going to get to why the complexity is good or important in a minute, but...
[00:58:56] I mean, complexity isn't good, but why it's merited, um...
[00:58:59] But...
[00:59:02] Yeah, it's kind of interesting. Okay, what do we got here? For server actions, if a brother has a different version of the server
[00:59:08] Support function got renamed. Should the framework solve that or the infrastructure? That's interesting because on Vercel actually has been solving this through infrastructure because like people deploys around.
[00:59:19] I have my mental model here is we should treat it like API endpoints.
[00:59:26] What would you do
[00:59:28] for an API.
[00:59:31] Like they might look...
[00:59:33] trivial, but like if you had slash API slash update post or whatever posts post to like,
[00:59:39] I think people should treat these with the same thing.  I guess the problem is I'm saying that.
[00:59:44] without the fact that it's so easy to rename a variable or so easy to do this.  But this is not a new problem for us, I don't think.
[00:59:54] I mean, obviously the challenge is like new version of the function and front and back  and get deployed at the same time.
[01:00:00] You can go wipe your hands, but what if a client has a long lasting client and it's still pointing to the old versions? Tricky.
[01:00:06] Um,
[01:00:09] I,
[01:00:11] I've never worked in a framework that offered API versioning itself.
[01:00:17] But if that was where you would get to normally, I think this is where we'd get to.
[01:00:33] Thank you.
[01:00:35] or the run for the pages of the path of the post.  So, actions are literally...
[01:00:40] Yes, kind of. Yeah, that's a good way of thinking about it. Like from a classic website example, you might post to something for and then it will do whatever that action is. And then you like if it's remixed or whatever, like you'll respond with a redirect or something, just like when you do a post request, you'll like post to.
[01:01:01] post ID something or
[01:01:03] posts at a new thing, right without the ID.  And then it will redirect you back to get.
[01:01:08] you know, page posts or whatever, and you'll get the HTML back, right? Like,
[01:01:13] it's the same kind of mutation cycle that you have with classic website.  You post and then, you know, redirect to the new page or whatnot.
[01:01:32] - Use, use form status, use form state, use optimistic,  and cache are the only new things from React  in terms of this stuff, I think.  Yeah, there was some stuff around suspense though  that was happening at the same time.
[01:01:42] Use external store is not that new, but like,
[01:01:45] basically
[01:01:48] I forget that there's a couple other ones. I saw one. I was like, I haven't even seen that one. Um, like,
[01:01:54] And there's been some stuff that doesn't get talked about.  Some of these unstable underscore use blanks as well.
[01:02:03] Amen.
[01:02:05] It's really useful.
[01:02:08] With the use,
[01:02:10] Helper, hopefully you won't. They recommended this at first because they didn't want everyone just going around throwing promises.
[01:02:20] Yeah, and I do think there's easy for people to mess this up. I was talking, Dax posted something the other day on Twitter for those people who know him. And he basically said that, what did he say?
[01:02:34] I finally built something with SR plus Server Action Management, not Next.js, so you know he's talking about us.
[01:02:40] It would be us or Quick, but knowing Dax, it was us.  It's kind of crazy how I can leak all this stuff by just submitting a single keyword.  He's not saying that it was a security hole.  He was just saying that he forgot to put used server...
[01:02:51] Like he decided, like he forgot to just like say it was a server thing and it ended up in his bundle.
[01:02:55] Because like...
[01:02:57] it was arbitrary, like whether
[01:03:00] You know, I get the feeling people are more like less likely to name a file.
[01:03:05] But I mean, it could even happen.  You could just write a file and not put .server in the file name as well.  Like it's that level of error.  So there's like this tension between being really stripped here.
[01:03:15] but then it not being permissive or like being like,  uh,
[01:03:21] Like having this flexibility where, you know, as things change, you can adapt it.  This is kind of the challenge like Astro's had.  I know they feel it.  They they're very strict because you have like a whole different dot Astro thing going on.  Right.  But like that makes stuff less permissive.  There are.
[01:03:38] I don't know if people know this, there's no such thing as server components.
[01:03:42] Like not actual, like from a definition standpoint.  Sure, there are components that are rendered as server components,  but there's no such thing as server components.  There are client components and there are...
[01:03:52] shared components, there's no server components. Either you
[01:03:56] have a component that does not have useClient on it, so it does not
[01:04:00] a client component or you have one that does.
[01:04:02] That's it. So if you are starting from a server root,
[01:04:06] So it is like the beginning of your app.
[01:04:09] Then,
[01:04:10] a shared component is going to be rendered on the server  and it's effectively a server component.  If you take that same component and stick it
[01:04:16] Imported from a client component and then use it in your client component. Guess what? It's now in the client scope  so like
[01:04:23] Okay.
[01:04:24] This is incredibly powerful when it comes to being able to
[01:04:29] Um...
[01:04:32] like build these dynamic
[01:04:36] pieces, but it is maybe too flexible and permissive that people can screw it up.
[01:04:48] Thank you.
[01:04:49] Encryption can change in every next build, so this isn't really a paper, you can change something, well that's unfortunate.
[01:04:56] Hey Kelvin, how you doing?
[01:04:58] Yeah.
[01:05:00] *sigh*
[01:05:01] Thank you.
[01:05:02] Yeah.
[01:05:07] Oh.
[01:05:11] That's a whole other topic.  We can get meta on that, but no, not today.
[01:05:21] - Yeah, I mean, to be fair,  this should be solved by mVariables,  and in a sense, a beat has a certain amount of that  functionality actually built in too, as well.
[01:05:30] Um,
[01:05:31] write the VEAT prefix in Verznot.  Almost all VEAT frameworks have a defense against this.
[01:05:37] But, uh,
[01:05:39] I'm pretty sure he was literally just like hard coded in the file.
[01:05:44] So, yeah.
[01:05:50] I know some people are working on it. No news on that yet.
[01:05:56] Linting, yeah. And one thing that people have been doing is Next.js has like a side effectful import called import server only.  And that import server only basically...
[01:06:08] If
[01:06:10] It basically does a check, like, am I in the client build?  Then throw.  It just kills-- it nukes the thing.
[01:06:19] There is an import you can stick in to be like, I want to make sure this never gets to the client.  And anything that imports it will die because of it.
[01:06:28] A lot of the times this just happens naturally because you can't use it, but in his case he had isomorphic
[01:06:32] APIs that could work server or client. So it didn't catch them. Like 90% of the time you do this and it will be like,
[01:06:38] you'll get like a client builder,  like,  or not builder,  but you try and run the client and it'll start complaining to you about  Postgres.  And you're like,  no,  okay,  something really bad happened here.  You know,  they would never deploy,  but,
[01:06:51] or if it deployed basically.
[01:06:52] die yeah i don't know it's it would never pass any kind of test
[01:06:58] Anyway, um...
[01:07:01] Yeah.
[01:07:02] I just wanted to kind of throw that this example out here. Um,
[01:07:05] *sniff*
[01:07:07] Uh...
[01:07:09] I, I, that was like a heated thing, but for me, um...
[01:07:14] That wasn't the only heated thing for next, um, this year. Uh,
[01:07:19] There's something earlier in the year that people didn't pick up on.  And that was, and this relates to that edge runtime stuff, right?
[01:07:27] Thank you.
[01:07:28] And
[01:07:31] Everyone at the end of last year was really hopeful about the edge. So they were like, hey, let's
[01:07:38] Let's all, you know,
[01:07:39] work together and make a new standard.  You know, we don't want a repeat of what happened in browsers, right?  Because if you remember the browser wars, there literally was like,
[01:07:47] Features only available in IE and Chrome and Firefox and standardization was out the window and it was just like a big mess.  And then we all ended up having to like polyfill everything for different platforms and everything.
[01:07:57] Honestly, this is like what it's like to write a JavaScript framework these days.  I honestly didn't want to do that.  So I, you know, it was like,
[01:08:04] Thank you.
[01:08:05] Nitro, you know, so to speak.  But...
[01:08:08] But like...
[01:08:09] That's the kind of scenario we're in now.  So they're all working together, trying to standardize.  And then next releases, I think it was like...
[01:08:16] They're...
[01:08:17] Teen point.
[01:08:19] one or something, 13.1.4, like some kind of like minor patch release.  And suddenly they added async local storage.
[01:08:27] to their runtime. And like,
[01:08:30] Netlify and a bunch of the other like do you know like a bunch of other providers Cloudflare that like
[01:08:35] did use Next.js all died immediately. Someone did the update and then all the deploys died. And they're just like, what the hell happened?
[01:08:41] And these people were not very happy about this because as we've already talked about, next is the most powerful.
[01:08:49] popular, you know, this year hype-wise, the biggest number of new stars for JavaScript
[01:08:53] framework
[01:08:56] over the 12 month period.
[01:08:58] So,
[01:08:59] And it's one of the for the meta framework side of things. It's it's it's the
[01:09:03] It's probably the most, like React itself, the most out there, the most used.
[01:09:11] It's really awkward when they do release and it just breaks everything. Now,
[01:09:16] -
[01:09:18] Wasn't the committee supposed to prevent this from happening?
[01:09:24] Thank you.
[01:09:26] It's like the new Google, yeah.
[01:09:34] Thank you.
[01:09:35] So like, this is Luca Casanato. Hopefully I got his name right. You should get it. Like I'm Italian somewhere as well. And I think I'm pretty sure that's his background too. His last name's almost the same as mine.
[01:09:51] But he is known because he works on Dino.  He was one of the, I think, the original creator of Fresh framework.
[01:10:02] You know how Vercel said the Next.js Edge runtime  would be totally standard and portable and such?  Well, Next.js now requires these standard Edge runtimes
[01:10:09] to implement node.js specific APIs like async local storage API with no specification.
[01:10:15] Yeah, January 2020, pretty upset.
[01:10:18] I saw this firsthand because I was working at Netlify, obviously, and people were just scrambling because
[01:10:26] you know, in
[01:10:27] typical manner for cell likes to launch next and for cell features together.  Like it's like they make a big launch out of it and it's like the big versell event.  So basically it means that they don't always share it like versell is great.  Like when I want to work on stuff, solid specific features or whatever, I've been working with them, you know, hand in hand, you know, what the new build API, you know, like these things were awesome.  But.
[01:10:52] when it comes to Next,
[01:10:53] Next doesn't
[01:10:55] have that same feel to it. It's almost like they launch with the for sell infrastructure,  and then everyone has to go like,
[01:11:00] Catch up.
[01:11:01] And this was another one of those cases. And
[01:11:05] Um,
[01:11:08] Thank you.
[01:11:08] The funniest thing about this is...
[01:11:11] Yeah, I can understand why everyone got upset about this, but...
[01:11:15] Thank you.
[01:11:16] Async local storage is actually really, really, really, really, really useful.
[01:11:20] Um...
[01:11:22] Like we almost need it.
[01:11:24] if you wanna have nice API on server functions.  'Cause the whole promise of server functions  or server actions is that you can just
[01:11:31] function here, call it here, and it works.  But there's metadata, like how do you get the request  when you're on the server?
[01:11:37] You don't want to make that like a fake argument or whatever, because then you don't keep the transparency of signature.  The beautiful thing about server functions is.
[01:11:43] TypeScript and everything just works because the function is a function is a function.  You just go, okay, here's the arguments.  Then when you use on the client, well, same arguments, you know, same return type.  You have this function.
[01:11:54] you know,
[01:11:55] ability to get
[01:11:57] basically perfect type information, and it makes it really nice. Just without like,
[01:12:03] any extra code gen or anything. It just works. You just import the function
[01:12:07] Ta-da. But how do you get this metadata? Well,
[01:12:12] At the front of the function, it's not too hard. You're handling a request, you have the request event, you could call some kind of global thing that reads from the current request, you know, you could probably figure it out.
[01:12:21] But what if someone goes await, and then you gotta get it.  After the first await, you're down in some library or something.  It turns out,
[01:12:29] There is like almost zero ways
[01:12:31] to actually polyfill that.
[01:12:33] Um...
[01:12:34] It kind of actually sucks.
[01:12:37] Which is really, really, really unfortunate.
[01:12:44] I...
[01:12:45] So when I designed server dollar sign for solid,  originally we'd like use server dollar sign dot request to get the request.  We did a bunch of stuff and there was no perfect solution.  We tried to use this, but like...
[01:12:57] this doesn't work with arrow functions you know so we're trying to transform them but then we don't  know like if someone defines the function somewhere else and then imports it into the server like there
[01:13:06] holes with every single approach we took here. And then I remember looking and going, oh, well,  if we had async local storage, but no one supports that. Oh, well.
[01:13:14] Oh, there's this async context proposal. Well, I'm sure we'll get that in five years.
[01:13:19] And I kind of gave up and I was like, whatever.
[01:13:22] Next goes and adds this in January.
[01:13:25] By March, every single platform supports async local storage.
[01:13:29] So...
[01:13:31] You know,
[01:13:34] Might not be.
[01:13:36] what, you know, everyone wanted.
[01:13:38] But, uh...
[01:13:40] Thank you.
[01:13:41] It is what it is, you know what I mean?
[01:13:44] So.
[01:13:45] Thank you.
[01:13:46] I can understand why, if this was your problem,
[01:13:52] I'd be angry about this.
[01:13:54] but
[01:13:56] Um...
[01:13:57] I'm kind of like
[01:13:59] I kind of like thank you, because now it all starts new version using global search.  I did find out that not every platform supports it.
[01:14:06] SPAC Blitz doesn't support it.
[01:14:08] So I had to do a partial patch polyfill that works in some cases. But generally speaking,
[01:14:17] This is a very important API for server functions, server actions, the whole thing.  And now we have it in Cloudflare.
[01:14:26] We have it on.
[01:14:28] Vercel Edge, Netlify Edge.
[01:14:30] We always had it on Vercel functions and Netlify functions, because they're AWS, which also has it, which is Node.  But DinoDeploy, yeah, like,
[01:14:39] They all support async local storage now.
[01:14:43] Thank you.
[01:14:44] The Apple style force.  Yeah.
[01:14:48] I guess they got more than their keynotes ideas from Apple.
[01:14:54] Thank you.
[01:14:56] Yes, server functions are more complex than extra code gen, but I'm, but like from the developer standpoint, like the actual type part is not the type part is literally import to import.
[01:15:12] Yeah, yeah, yeah. We're excited about this, but standards take years and years and years. And I mean, you could take it two ways. The other thing is once Next made this move, we had no choice but to follow because otherwise our API, like I struggled with this when we were originally designing server functions for Solid, right? And this, this was like, that was, I don't know, that was like months before Next released anything, almost a year, actually. And yeah,
[01:15:41] Like...
[01:15:42] Like I've just sat there and I gave up because I'm like, what can I as one person do?  Right.  Right.
[01:15:48] And then we conceded to like a slightly worse API. Now that Next has a better API, why would anyone accept any less?
[01:15:54] So...
[01:15:56] Yeah.
[01:15:58] When it comes, 100%, I'll be stoked.
[01:16:00] But where we're sitting right now, like that's where it is.
[01:16:05] Um,
[01:16:07] So,
[01:16:09] It's unfortunate because I'm here. I was sitting with Luca and we were sitting there and we're talking about this.  And he's just like, it's really annoying when you work to try and standardize a platform and then.
[01:16:20] you know, it turns into like, let's all decide what our favorite node APIs are, you know, like,
[01:16:26] I mean...
[01:16:29] There's always the pursuit, right?  And you almost made some kind of post at some point about, like, how, like, winter's, like...
[01:16:36] like two things he learned this year one thing was about uh bundles and uh bundling uh at on  demand or whatever and he you know that kicked up a
[01:16:45] bit of a fight from Evan U going like,  what's your problem with V?  V is super performant.  Sorry if your guys' stuff isn't performant, right?  But on the other side,  he was talking about like the standardization of edge functions  and basically saying like it wasn't a thing.  And it's like...
[01:17:00] I'm still optimistic.
[01:17:02] I think...
[01:17:04] it's too early,  but you have to start the process early because it takes like,
[01:17:07] Years and years and years, you know, it's so funny because like on the website, I'm like a level I'm like a different layer. So I'm like, you know, I'm like, oh, man, those guys on the standards is killing me. I'm just gonna implement the stuff myself, right?
[01:17:20] So,
[01:17:22] So like I can see the tension there, right?  We talk about web components and I'm like,  but you know, now I'm talking about this.
[01:17:28] uh
[01:17:30] I think both pieces are really important.  I think we have to work together to getting the standards there eventually.  We just can't wait for them pretty much ever.
[01:17:38] It is what it is.
[01:17:42] Bye.
[01:17:43] So, yeah, I think...
[01:17:49] This was an interesting topic from a framework standpoint because
[01:17:54] Now this is a real option and this has enabled the stuff that, you know, that I quite like for solid. I imagine it will enable it for other frameworks as well.
[01:18:03] so
[01:18:05] Yeah, that's enough on that one.
[01:18:09] There was one other Next14.
[01:18:11] I wanted to talk about or next really feature I want to talk about, which is next 14, which is and this is important again to talk about the big picture here, which is the experimental pre rendering.
[01:18:24] partial pre-rendering, which is this idea where you can like render the static part
[01:18:30] outside and then like ahead of time and then have the rest of the stuff stream in. See, at first,  I didn't get this feature because stuff that is static that's already available,
[01:18:41] If you have streaming,
[01:18:43] This is how it already works.
[01:18:45] Every framework that has streaming can do this.
[01:18:47] whether it be next 13, whether it be solid start,
[01:18:52] Marco, um,
[01:18:55] At least out of order streaming.
[01:18:58] I don't think Quick has it.  Who else?
[01:19:01] Next, Remix has it out of order streaming, right, with the defer.
[01:19:06] Mm-hmm.
[01:19:07] Why make a big deal about this?  Well, I think when we realized the edge  was not going to be the database solution...
[01:19:15] And
[01:19:15] I like to cheekily add the fact that React server component design and routing design specifically encourage server-side waterfalls.
[01:19:24] *sniff*
[01:19:25] Um,
[01:19:27] Thank you.
[01:19:28] they need to get rid of those waterfalls. So what you can do here is
[01:19:34] respond immediately on the edge while keeping the red stuff back on your server
[01:19:39] like close to your database.  So those waterfalls,
[01:19:42] don't matter as much.  I mean, they still matter a bit.  I worked on an ORM before I worked on Solid,  and I spent my whole time trying to kill  suicide waterfalls.  But it's a lot less going from your...
[01:19:53] In AWS's
[01:19:55] serverless function going to some database service than it is going from like some edge function, you know, something out on Cloudflare and going to that database.
[01:20:04] Those waterfalls have very different latency.
[01:20:09] So...
[01:20:10] Mm-hmm.
[01:20:11] There's that aspect.  But the other one is this is our first showing that I've seen where we have distributed infrastructure where you write your code in one way.
[01:20:20] and it automatically generates both a edge function proxy and the serverless function.  We're actually distributing the work without the developer having to like
[01:20:31] manually do it.
[01:20:33] There might be a setting you have to turn on, but it's not like you have to...
[01:20:36] Go, hey, run this code here, run this code here.
[01:20:40] So from my perspective, this is actually a huge
[01:20:44] show in what I was talking about, monolithic offering with distributed deployment.
[01:20:49] Thank you.
[01:20:52] Oh yes, SvelteKit has out of order streaming. It didn't originally, but it didn't when it was in beta. Did SvelteKit get out of order streaming by the end?
[01:21:04] I think it did.
[01:21:05] It must have by this point. I can remember. I remember checking Svelte back in like 2020, 2021.
[01:21:10] And.
[01:21:11] and it 100% did not but I have to assume by the time they released it in 2022 they have out of order streaming.
[01:21:18] Okay. So that's Next.js.
[01:21:23] Um...
[01:21:25] Right. So we talked about server actions. We talked about.
[01:21:31] Async.
[01:21:32] Local storage.
[01:21:36] And we talked about...
[01:21:38] What was the last one? Um...
[01:21:41] partial prerender.
[01:21:44] Just gonna get some cliff notes for people paying attention.  I don't know if there's anything else. Anything else big on next for you guys that really stood out?
[01:21:54] So chat's gotten quieter and I'm disappointed. Maybe I'm just talking too much.
[01:21:59] Okay.
[01:22:00] Where did you go, chat?
[01:22:03] Thank you.
[01:22:03] Thank you.
[01:22:07] Thank you.
[01:22:07] *laughs*
[01:22:09] Alright, it's all good.
[01:22:16] There's a local first trend with the conflict. Yeah, yeah, yeah. I think the approach can also move to the edge because you didn't think of it. Exactly. I mean, to a certain degree, a lot of that approach can move directly to the browser. Um,
[01:22:28] I've been waiting. It's funny when there's trends like these cycles that go around every time it's a little bit different, but I've been like waiting for local first to make a comeback local first was like hot for a bit around 2015 16 17 and then around 2018.
[01:22:44] we completely dive away from local first again.
[01:22:49] I expect my estimate was that 2027 would be when we would be talking about local first again.  Maybe it'll happen a little sooner. I guess we'll find out.
[01:22:59] Yeah, I'm not going to get into comments here about Evan picking a fight.  Evan is tenacious.  Um...
[01:23:08] Definitely. But he defends what's his. And we'll talk about Bune in a bit.
[01:23:13] No, I'm doing it in hyperorder, so quick will be a bit later.
[01:23:18] Um...
[01:23:22] My high port is determined by GitHub stars, new GitHub stars this year. Okay, so who else do we want to talk about?
[01:23:29] Remix.
[01:23:30] No, no.
[01:23:31] Yeah, I think I don't.
[01:23:32] Out of...
[01:23:33] Thank you.
[01:23:34] React frameworks
[01:23:35] Next is number one.
[01:23:37] Next is number two.
[01:23:41] Um...
[01:23:44] They're probably tracking the wrong repo for Remix.  Maybe not. Svelkit's here too.
[01:23:51] To be fair, this is the whole framework, both
[01:23:54] Quick and QuickCity.  So that's why...
[01:23:57] it's combined. But yeah, it looks like my next one
[01:24:01] is
[01:24:02] is remix. I don't think there's Gatsby here.
[01:24:05] I wonder if Gatsby doesn't even show up.  Like, what category is Gatsby?  Gatsby?
[01:24:10] duplicate, let's look here. What is a Gatsby?
[01:24:14] Gatsby.  They probably made it like a static site...
[01:24:19] a static site framework or something. Static Site Generator
[01:24:25] by total number of stars.  No, last 12 months, I only care about.
[01:24:32] 2.4. Okay, yeah, Gatsby's last. Okay, so...
[01:24:36] Let's talk about Remix then. I'm going to give a quick shout out to Create T3 app.
[01:24:40] This is amazing growth over the last year.
[01:24:44] Um,
[01:24:45] This is obviously it helps when you're built on React and Next, you get a certain amount of free stars, so to speak. But this is still amazing.
[01:24:52] you'll find the React ecosystem  and the Next ecosystem, as you  go out from it, will always  have an easier chance  because there's that many  more users you tap into. Still,
[01:25:05] When you see Create T3 app up here,
[01:25:08] And you see like...
[01:25:10] This just gives you an idea, you know...
[01:25:12] And this is hype, it's not total, but this just gives you an idea, right?
[01:25:15] Like,
[01:25:17] Redwood or Gatsby or whatever blitz.
[01:25:21] This is very impressive regardless.
[01:25:25] Oh.
[01:25:26] So we're going to talk about Remix next, not Gatsby.  I just wanted to double check.  We'll talk about Gatsby in a minute.  But Remix...
[01:25:34] Um.
[01:25:35] For me, highlights for Remix this year and why you should be paying attention is they've been obviously they did a bunch of work.
[01:25:43] Is Remix 2.0 officially out yet?  They changed the router and the flat route stuff, but I think for me,
[01:25:51] That stuff aside, you know, like API changes,
[01:25:54] Viet move. Move to Viet.
[01:25:59] This is huge. Mark Daglash joined the team, and I know he's not the only one involved. In fact, the beat move involved some other contributors from the open source. But
[01:26:07] Like,
[01:26:09] They're part of the family now with the rest of us, which is cool, because a lot of the shared plugin infrastructure, when you build a plugin for VEAT, you're building a plugin for SvelteKit, SolidStart.
[01:26:22] Um...
[01:26:24] Nox to analog
[01:26:27] uh, Rakis, um, god why can't I think of Marco,
[01:26:34] Quick.
[01:26:36] Like basically everybody but next.  I think it's easier to say that.  You're building for everyone but next.
[01:26:43] Yeah, so yeah, Remix 2.0 did come out. Yeah, yeah. I remember with the new flat routing and all that stuff, yeah.
[01:26:49] So, Astro, yeah, sorry, yeah.
[01:26:52] So that's huge because now they're part of the family.
[01:26:57] which is exciting.
[01:27:00] The the they they've been like slowly refining their technology and obviously their APIs, just like doing the tweaks.  They basically pioneered optimist ephemeral optimistic updates.
[01:27:16] Like,
[01:27:17] I said popularized in a tweet, but I meant pioneered.  No one was doing that.  When I saw Remix, I realized that was the thing.  People talk about actions and loaders and nest around it.
[01:27:25] All this stuff actually kind of in certain ways, not the actions necessarily, but the loaders and all that stuff existed in other frameworks in slightly different forms before.
[01:27:34] nest routing, all of that stuff.
[01:27:37] you know, smarter data loading, all that.  But ephemeral optimistic updates,
[01:27:41] Um,
[01:27:42] Even like...
[01:27:43] GraphCup, Apollo didn't do that, Relay didn't do that, TensecQuery didn't do that. No one in this query space was doing that. They all said write to the cache. Writing to the cache sucks. I'm sorry, no one wants to write to the cache.
[01:27:55] Remix let you basically
[01:27:57] not have a catch on the client side or ignore that it was there simply from an API standpoint.  Absolutely genius. If you have any doubts in your mind about that, I strongly, strongly suggest  checking out any of Ryan's demos. In fact, we can just go to my profile here, and I think  Ryan did one this past week. Here you go.
[01:28:17] Yeah.
[01:28:19] You can...
[01:28:20] Yeah.
[01:28:22] Like, let's...  Yeah.
[01:28:25] Yeah.
[01:28:26] Remix is sweet.  Um...
[01:28:30] No, we'll talk about fresh when we talk about Preact.
[01:28:33] I don't know.
[01:28:36] Thank you.
[01:28:40] Thank you.
[01:28:41] Thank you.
[01:28:42] so like...
[01:28:45] This is just a great demo.  One of the cool things they've been working on  is making Optimistic Update shareable across components.  This is a big part of the new SolveStart API.  So I'm almost 100% positive.
[01:28:57] Ryan could be talking about solid start as well here.  Um...
[01:29:01] But even in the basic form, stuff like SvelteKit can do this.  Any of the new kind of...  This is just...
[01:29:10] The optimistic, I think cell kit has optimistic updates, right?
[01:29:14] This...
[01:29:16] Thank you.
[01:29:17] This...
[01:29:18] He's showing how with Optimum Updates, he can still...
[01:29:22] He can still, like...
[01:29:24] Let me see if I can find it.  He can still, like...
[01:29:28] Let's...
[01:29:30] Stop.
[01:29:31] He's gonna just add a card here.
[01:29:36] So he's not...  While it's being saved, he's moving it.
[01:29:46] So, like, basically all the, like...
[01:29:50] cancellation, all the stuff that's happening automatically.  He basically created its stuff while it was still pending in the server.  He actually moved it to a different location.
[01:29:58] Um...
[01:30:00] This is, and the thing is the code to do this is actually dirt simple.  I'm not going to go through it all.  I just want to say that Remix's approach to update is something that, you know, they got a little flack for saying people stole stuff from them and everyone's like, no, we didn't steal from you.
[01:30:13] Everyone stole this from Remix.
[01:30:15] Like this is this is the the gold from Remix.  As I said, it's the ephemeral optimistic updates, using feeding state back into your component  rather than using a cache.  It's it completely changes the game.  I'm pretty sure when
[01:30:31] I saw that I adopted it to solid start, and I'm pretty sure the patterns in solid start influenced the next APIs. So like, like there was like this kind of change.
[01:30:43] chain through and quick APIs, I should mention as well. So I'll start
[01:30:48] probably influenced the quick APIs as well. But yeah, remix
[01:30:54] was on it on this. And yeah, I just
[01:30:58] Yeah.
[01:31:02] Where do I want to go here? Oh, right, right. You're right. I forgot to talk about Forget.  We're going to talk about Forget in a minute. It shouldn't be...
[01:31:10] We're going to add forget here so I don't forget about it.
[01:31:13] Where is it? Here, let's add forget.
[01:31:16] Good.
[01:31:17] We'll talk about that in a minute.
[01:31:19] Good.
[01:31:23] I built a way to synchronize stores between certain clients that include Opnix Office for one of my projects.
[01:31:33] Do you have a stateful backend?  Um,  probably too many deals for me to get into right now.  Um,
[01:31:40] *Sigh*
[01:31:42] *cough*
[01:31:43] In any case,
[01:31:47] Remix, um...
[01:31:48] continues to impress with like these kind of details.  One thing that was actually really cool that I want to talk about
[01:31:54] specifically is that, um,
[01:31:57] they added CSR mode.
[01:32:00] Which...
[01:32:01] Don't get me wrong.
[01:32:03] is not a new thing outside of React.
[01:32:06] Stalkit supports CSR mode, Nuxt supports CSR mode, SolidStart supports CSR mode,
[01:32:15] I don't know about analog, but I wouldn't be surprised because Angular basically couldn't do SSR until last year properly anyways. So
[01:32:22] Um...
[01:32:25] But in React, this is kind of unheard of for meta framework.  I mean...
[01:32:31] And it makes so much sense.  It's funny because Ryan posted a tweet today  about how everyone's talking about RSCs  in terms of this announcement,  but that's exactly why this is so genius.  There are so many people out there on React Router
[01:32:43] even who can't just migrate to next react comes in and is like hey
[01:32:47] You need a meta framework.
[01:32:49] even going to straight normal remix
[01:32:51] from React Router is a hop for some people.
[01:32:54] So Remix is like, okay, fine, take your CRA React Router app and just drop it in and have it work.
[01:32:59] This is the same messaging that I've been doing on Solid as well.
[01:33:03] This is...
[01:33:04] This is a...
[01:33:05] very good. My only gripe with this is calling it SPA mode, because technically all remixes are SPA.
[01:33:12] Um, but
[01:33:14] You know, so I call this, you know, SSR false or CSR mode, but this makes a ton
[01:33:20] of sense.
[01:33:24] What's the advantage of CSR over plain solid JS?
[01:33:29] Um,
[01:33:30] There's a couple, right? You get file system routing, if that's something you care about. Some people don't, but that's something you might care about. You get API and server routes. If you do want to split it between a static hosted endpoint and an API, you could build in a single monorepo. You could do that anyways, but...
[01:33:47] you know, server functions are a thing.  I guess that's not true CSR,  but the thing is, like,
[01:33:52] If you...
[01:33:53] you know, could just
[01:33:55] If you...
[01:33:56] If the problem is the client component's not running on the server or that kind of thing,  like it's very easy to just like migrate your app and then add the APR.  It's incremental.  So like I'm of the opinion with Solid Start that I want
[01:34:07] just to replace the templates eventually. When we get to a good place, every solid project, you know,  you could go build a solid project, use Astro, use stuff, but like the generic starter,  who cares if it's Veed or SolidStart? SolidStart will just let you
[01:34:21] continue the build from that, right? Obviously, there's the VeeT template, like the official VeeT  template that like VeeT ships, but you start with solid start, you can just go from that.  And Remix is definitely on that same kind of wavelength.
[01:34:38] I don't necessarily agree with that.
[01:34:43] Actually, I don't agree with this at all, but I do.
[01:34:48] see how this argument could be made.
[01:34:53] Thank you.
[01:34:55] I don't think CSR means better DX necessarily.
[01:35:00] It's...
[01:35:01] There are benefits.
[01:35:03] Oh, the...
[01:35:05] The thing is, the inverse argument here is that an SSR, I had a whole stream about it right before break, an SSR,
[01:35:12] single page app.
[01:35:14] like your typical next remit. Basically, as long as it can render once on the server,
[01:35:19] is already basically CSR+.
[01:35:23] Like, because after that point, it is like clients rendered single page apps.  So like the differences is like non, sometimes that initial jump is significant, which is why this release is important.  But like, generally speaking, it's just the same thing, but better in the past.  This hasn't always been the case because people would wait for data fetching.
[01:35:40] and it would get jammed up.
[01:35:42] And it's not too hard to see the difference between a page.  Like sometimes you could like load the page in the client, then go fetch the data and then
[01:35:51] because the resources like the JS was already loaded in the client and images, maybe some like you could get a better experience even on initial page load in a client rendered app than a single page app. But since streaming, again,
[01:36:03] There are cases where streaming doesn't work perfectly, but when you have the control over streaming and when stuff streams, it's just basically straight up win for SSR.
[01:36:12] from a
[01:36:15] from a UX standpoint, but I guess you said DX.
[01:36:17] And yeah, I guess making something do more is fine.  Isomorphic JavaScript in JavaScript frameworks is kind of fundamentally
[01:36:27] Awkward. It's like expecting it to run on both sides when one side you have a dom and the other side you don't. It's never perfect.
[01:36:33] Which is why stuff like certain components are interesting or islands, because it shrinks the size of that. The isomorphic stuff kind of sucks.
[01:36:39] So I can see that. Sorry, I was reading UX, not DX. I don't care about DX nearly as much. So I jumped on this. You said DX. Yeah, sure. If you only have to worry about one environment, yeah, the DX is probably better for highly interactive applications. But sorry, I saw UX in my head and UX is what I care about.
[01:37:02] Yeah, yeah, sorry.
[01:37:06] Jason Svelkit, SSR is easier than CSR. It shouldn't be. Like, you could argue that you, if it is, it's because you can wire data sources easier and basically like, okay, the data's on the server. It's like using a server function. That's easier than setting up an API endpoint. But in general, the same code is like your component code is the same, except now there's like this extra dimension where you might have something that doesn't work on the server.
[01:37:34] .
[01:37:39] Thank you.
[01:37:43] Thank you.
[01:37:44] You're making more, yeah, I mean, it's hard to say. The time spent rendering and booting up, it's like the cost of, but then you're making more calls, which means you're spinning up more instances, yeah, I...
[01:37:57] I'm sure there are some parts of these solutions that are more expensive by going server rendering.
[01:38:06] Thank you.
[01:38:08] Right. The JSON payloads are more, but running React on your server...
[01:38:16] um might be more expensive
[01:38:20] like when you do a comparison between like say a Svelte server rendered page or solid which compiles  to string decadding like this and compare it to uh like React there's already a huge  difference almost 10x difference in performance because of React rendering the virtual DOM.
[01:38:39] Um...
[01:38:41] Yeah, anyway.
[01:38:44] Yeah, this topic's going to be hot. Someone said that, I didn't put this in my article,  but someone's saying CSR will be hot in 2024, and I agree. This is part of
[01:38:52] This is part of the like,
[01:38:54] that step back movement that I want to talk about. This is part of that like stuff's too complicated
[01:39:00] I'm going to just do CSR.
[01:39:01] Remix is well suited for it.
[01:39:04] Solid starts, falcon, nux.  There's a solution in every framework for this now, right?  It's just not next.  I mean, next can do it.  You can do it.  The thing is, these things kind of superset themselves.  So, like...
[01:39:17] you can always take an SSR app
[01:39:20] And then like
[01:39:21] Um,
[01:39:22] basically wrap a route in like, they do this in the client,
[01:39:27] And then...
[01:39:28] you kind of essentially
[01:39:30] Git.
[01:39:31] a CSR experience.
[01:39:34] Um...
[01:39:35] So I'm not gonna say Nex doesn't do it, but it's a different mentality feel when you come in and you're just like, yeah, I'm not doing SSR.
[01:39:42] SSR false.
[01:39:44] Bam. I just moved my app over. Oh, look, it worked.  You know, like, I think that's the thing. I don't know if it's that easy with Remix, but
[01:39:51] Um...
[01:39:53] But I mean, it's it's hopefully it's pretty close.
[01:40:01] Thank you.
[01:40:06] I think it's hard being in Remix's position.  This is a gamble that Tanner is taking as well.
[01:40:14] I mean, if you look at this, I don't know if this is accurate, but...
[01:40:18] Remixes.
[01:40:22] Yeah, they had a decent year. They're just kind of like in the middle of things, you know, Sveltec. I mean, like Remix and Sveltec having equal stars in terms of hype is not fair because...
[01:40:35] Svelte has a much smaller pool than React does. Do you know what I mean?
[01:40:39] This is...
[01:40:42] You know what I mean?  Like, this is why...  I'm not sure if...
[01:40:47] I think the React audience has this kind of knowledge that Remix is always kind of a step behind. Like, it, I, I, you guys are getting me to bring all the This Week in JavaScript stuff up right now, but it pains me to see stuff.
[01:41:00] around this because like, let me see, can I go to bookmarks?
[01:41:04] Look.
[01:41:07] Where is it?
[01:41:10] There were no server actions when we created Remix, so we created Route Actions. Now React has server actions.
[01:41:17] There was no fetch data in components on server before Remix, so we created route loaders. Now React can fetch in SSR with RCs. React had no way of knowing pending statement actions, so we added use navigation, use fetcher hooks in Remix. Now React has use form status, and React has suspense and transitions, things that were not publicly available when Remix was built.
[01:41:36] React had no way to know the result in action.
[01:41:39] So, you know, use data now has used form state.  React in a way of the state of a transition.  So we had to use...
[01:41:45] Transition, now React has you transition, so we changed to use navigate. React had no way of optimistic updates. People criticized remarks for not doing the React, must not be paying attention to the timeline. React merged, remix into main.
[01:41:57] It'll take a bit of--
[01:41:58] Time to adjust, blah, blah, blah.  Okay.
[01:42:00] this is the thing, Remix did not wait.  Even the streaming solution they came up with,
[01:42:06] There's.
[01:42:07] All like,
[01:42:08] You don't need server components to use suspense and streaming
[01:42:13] on the server.
[01:42:15] for React.  This is just, like, it's not necessary  to use server components.  But React themselves kind of pushed that narrative,  especially with Next.js.  Remix just went and implemented it themselves.  And for me, this is always...
[01:42:29] touched me a bit because I was working on Solid at the same time. The difference was Solid released all the suspense stuff early, like 2019-ish time period, 2020, some of it by the time we were done when we got the streaming working for the HTML logist data. And...
[01:42:46] So I'm sitting there working on SolidStart,
[01:42:48] They're working on Remix, we're working on exactly the same problems, except I'm watching the Remix guy like reinvent all the wheels. I'm like, the framework should take care of that, the framework should take care of that.
[01:42:57] In Solid, I was just like, oh, sweet.
[01:42:59] You start trans-- like, I had all the pieces already,  because I'd built stuff that was kind of like similar to React
[01:43:06] upcoming APIs that hadn't come out yet.
[01:43:08] So like
[01:43:11] when I released a router or a piece, it was like so much smaller in code and complexity because I already had the tools.
[01:43:16] And I knew the tools were coming in React.  Everyone knew the tools were coming in React,  but Remix had no choice. They couldn't wait for it.  I watched the same thing to a smaller degree with Tanner,  but it was just like, it was so...
[01:43:27] awkward because like I remember when they're adding these transition stuff and I was like I did this actually in a talk about suspense and
[01:43:34] where I literally implemented like remix style actions in like 10 lines of code and all the race conditions, all the stuff taken care of because this react primitive.
[01:43:43] If you go look at the remix code for it,  it was much, much, much more complicated.  I was able to ensure the race conditions  just by being like, okay, do this, start transition, done.  Like, it was like a two-liner.  And it was just like...
[01:43:55] It was so hard knowing what was coming in React
[01:43:59] And.
[01:44:01] Like just.
[01:44:02] Like some of the stuff wasn't known about.  We didn't know about the next specific APIs,  like he starts with,  but they had to build the whole thing from scratch.
[01:44:09] in their own zone, which is very similar to what I was doing in Stratch. I just was able to put the stuff in the right places.
[01:44:15] And then it comes out in React a year or two later.  And now people are like, oh, why didn't you do it the React way?  Well,
[01:44:22] *laughs*
[01:44:24] You know?
[01:44:25] Thank you.
[01:44:26] Thank you.
[01:44:28] Thank you.
[01:44:29] Thank you.
[01:44:30] Yeah, I mean, they thought that for a while, but the truth of the matter is I think Preact has different goals, right?
[01:44:36] They really want to play into the simplicity stuff.  They didn't follow React into fiber, concurrent renderings, you know.  And I...
[01:44:45] like
[01:44:46] I think server components are where, say, Shopify wants to be.  They started with Hydrogen. It wasn't there yet. I think, I think,
[01:44:52] They have a lot of data from early...  I don't think anyone will ever get the Remix guys to go on the record  or Hydrogen guys about...
[01:45:02] issues with server components, but like...
[01:45:05] *cough*
[01:45:07] They picked up Remix without RSCs.  When RSCs are like.  Mentally the perfect solution for Shopify.  Like.
[01:45:14] Like that's what I would want them to be.  Performant partial hydration.  It's like e-commerce.  It makes sense.  Yet they kind of went back to remix.
[01:45:23] DX is way better with Remix.
[01:45:24] compared to the early
[01:45:27] that's what they're doing with hydrogen.  But it tells you just like,
[01:45:32] There's more to that early story that no one's talking about.
[01:45:36] I think they'll get there again, but I don't know if server components are up to the task as they are today.  I think like maybe.
[01:45:41] like there's some performance concerns.  I think there's more going on.  I think,  I think we still need to weigh this out and watch very carefully.  Like remix keeps on hinting RSCs,  but like,
[01:45:53] And it's like committal, the not committal, like you're kind of like, what's going to happen here?  They're probably coming, but I think they're biding their time quite purposely.  And I think there's stuff we don't know.
[01:46:02] Just throwing it out there.
[01:46:06] Thank you.
[01:46:07] Thank you.
[01:46:09] Thank you.
[01:46:12] Remix is the same thing jQuery is with jQuery. Eh, sort of. It's... Remix, it's... I don't think that's actually good at it. Because React team knows what's up. And they work on stuff, but to come up with a proper solution that's generalizable takes more time than coming up with a specific solution for your zone.
[01:46:42] So I wouldn't say that like Remix actually
[01:46:46] Like there's elements of it that React learn from and put in and they're going to give them credit.
[01:46:50] But I'm not on the React team, so I don't have to give them as much credit.  I think React would have landed in mostly the same place otherwise.
[01:46:56] Um,
[01:46:57] So it's just that
[01:47:00] We all knew
[01:47:02] the problems that needed to be solved. And it just takes a little bit of time to find the right fit, when like, from the React brain rather than the Remix brain.
[01:47:14] Yeah, they might have been, but I mean, sometimes people will be like, "Oh, is that a skill issue? Is that like your architecture issue?"
[01:47:29] you
[01:47:33] Maybe that's better. Yeah, maybe that's better.
[01:47:39] Maybe that's better. Yeah.
[01:47:41] It's hard for me on the side,  because we'd say for React, but the problem is  then you look beyond Remix and everyone is  also doing the same stuff. Like, the React  ecosystem was just kind of in this bubble waiting for the  core team to do something. And like, Svelte  and Vue and...
[01:47:55] Solid and whoever else we're already doing a lot this stuff to like it  It wasn't
[01:48:02] specific to Remix so much.  It's just in the React ecosystem it was  because for some reason,  everyone was just like waiting for the React core team  to park the clouds and shine down their light or whatever.  It's like...
[01:48:14] When is it going to drop? And Remix, and guys are like, no, I need this today.  I'm going to build it.
[01:48:22] Thank you.
[01:48:22] You know?
[01:48:28] No, no, not at all.  Like, maybe some of their closed source stuff, but like the Progressive Enhanced demo that Remix is really popular for when they release that beta,
[01:48:38] Rich Harris did the same demo with Smeat Feltkit four days before it.
[01:48:44] I think
[01:48:45] that the Ryan Florence had better showmanship.
[01:48:50] But...
[01:48:51] All these frameworks started back in 2020.
[01:48:56] Solid Start didn't start until...
[01:48:59] Um...
[01:49:01] I want to say January 2021.
[01:49:05] But SvelteKit was summer 2020.  Remix was around the same time.  Yeah, they really don't predict.  Remix might have been the first one to release.
[01:49:16] like trying to sell it but um yeah they don't predate
[01:49:21] Thank you.
[01:49:21] Thank you.
[01:49:23] *sad music*
[01:49:24] Thank you.
[01:49:27] Thank you.
[01:49:28] And like a lot of these patterns like run data patching and routing, like nested routing with with parallelized data loaders. We had that in solid.
[01:49:38] in 2020 officially in the router, but actually we had it in demos going back.  But that's how I was killing everyone at SSR benchmarks back in 2018.  Sapper had that same pattern as well as the predecessor to spell kit.  So it's like it's not actually new in the wider JavaScript
[01:49:53] range of things. It was just that like, I mean, you can go back to Ember router, but they didn't do the parallelization properly or, you know, they weren't even worried about async in the same way because it was like 2012. And Ember routers would inspired original react writer. I mean, it's complicated. There's bits that each I'm approved upon. So I'm not gonna like take it out of the thing. But I'm thinking like,
[01:50:15] on broad strokes.
[01:50:19] Remix pushed React, but the rest of the ecosystem was already kind of already there.
[01:50:24] Thank you.
[01:50:26] There is a bit of a narrow scope when it comes to React.  It's funny because the Remix developers, a lot of them were Ember developers back in the day.  They knew about how to...
[01:50:37] constructed the apps. That's why React Router, you know, it's
[01:50:41] you know, is designed the way it is.
[01:50:43] I like.
[01:50:45] The whole...
[01:50:47] use of the word link as a route component, I think we deserve, goes back to Amber.
[01:50:53] It's like so annoying to me, like why couldn't it? But it's fine because a link component in HTML has a different meaning.
[01:51:03] Yeah, I was there too. I put some knockout.js in my jade templates.
[01:51:09] Anyway.
[01:51:12] Thank you.
[01:51:15] Yeah, which is why...
[01:51:17] I agree. There's skill issues. That's why I think Remix was the right move. But I think idealized server component platform makes a ton of sense for them. And they're willing to back back.
[01:51:29] on that.
[01:51:30] You know, so like, yeah.
[01:51:32] Anyway.
[01:51:35] Anyway, a lot of sympathizing here.  Um,
[01:51:40] you know, with this kind of situation.
[01:51:43] Okay, so what do we got here? Move to beat.
[01:51:48] boss CSR mode.
[01:51:52] Thank you.
[01:51:52] re-inventing the wheel.
[01:51:58] I'm excited for Remix.  As I said, we'll talk more.  But I think...
[01:52:05] If Next represents where the React team sees the future going, there's going to be good stuff next year, Remix,
[01:52:11] bringing their more tempered
[01:52:14] mentality to these solutions is something I'm looking forward to even more because like,
[01:52:21] We kind of have a lot of similar mindset and thinking like waterfalls are bad. I don't care where you put them. Yes, you can say that they're good enough.
[01:52:28] you know but
[01:52:31] Push comes to shove.
[01:52:33] maybe they're not and maybe you shouldn't help people make waterfalls i think like that's where  remix is heads at right
[01:52:39] But then again, like React right from the beginning was
[01:52:41] A, it's good enough, right? That's why we have virtual DOMs everywhere and not signals. So,
[01:52:47] You know, sometimes it is good enough.
[01:52:50] So...
[01:52:51] I don't know, hard to say.
[01:52:53] I
[01:52:59] Right. Next can provide CSR and SSR at the same time. I think anyone...
[01:53:04] can do that, as I said, if you have that ability to say client only and then delay the timing of the rendering. I was just commenting on there's a difference between
[01:53:13] by making a SPA mode or CSR mode.  It's way more of a nod that we're gonna help you  come over from CRA.
[01:53:23] I think that's why the RSC conversation comes in and stuff, because it's like a very... It's not like, "Oh, you can do this." This is just like,
[01:53:32] Bring your app across. We accept you.
[01:53:40] Not really. Those are different waterfalls. Those are JavaScript loading waterfalls that quick causes themselves.
[01:53:48] Thank you.
[01:53:49] Um...
[01:53:55] Okay, Gatsby. I'm only gonna talk briefly about this. The only reason I can talk about Gatsby is  because I have not looked into Gatsby at all. However, however, however,
[01:54:11] Netlify released a blog December 18th that told me that Gatsby was not dead.
[01:54:15] And that, in fact, people are developing stuff in Gatsby.  So let's see what happened to Gatsby in 2016.
[01:54:21] Um...
[01:54:23] 2023.
[01:54:25] Thank you.
[01:54:26] Stability issues?
[01:54:28] support for different platforms, so not just Gatsby Cloud. So now they can deploy to different ones. So my understanding is that it's just Netlify right now. So you can deploy Gatsby or Netlify, but having the mechanism so you can swap it as a good start. Let's see.
[01:54:43] Gatsby adapters.
[01:54:47] Okay, you can deploy to Netlify.
[01:54:49] I'm sure getting deployment for Rissell would not take very much for AWS. Okay.
[01:54:55] Image CDN, which is, okay, so they're leveraging new Netlify platform features.
[01:55:02] Okay, there we go. So Gatsby is not dead. And
[01:55:08] Admittedly, probably not the framework that I'm going to talk about much on these kind of things because I'm always on the cutting edge.
[01:55:13] But...
[01:55:15] It looks like it's continuing to get support, especially with stuff that's actually useful for developers.
[01:55:22] which is never the stuff I talk about.
[01:55:25] But, you know, these are actually useful features for people building real apps.
[01:55:33] I don't know if there's any talk of RSCs, probably. I heard some murmurs at some point.
[01:55:38] Let's see, if I, can I search for RSC in this?
[01:55:42] No.
[01:55:43] Thank you.
[01:55:43] server
[01:55:45] Come.
[01:55:46] Nope. Okay. So, I think that pretty much
[01:55:51] Walking Dead. Um...
[01:55:54] Thank you.
[01:55:57] Yeah, and it's not just from the be fair. It's not just from the merger with Gatsby Cloud.
[01:56:04] Um,
[01:56:05] There are a certain portion of enterprise solutions that have used Gatsby.
[01:56:10] Outside, we had a decent Gatsby deployment even before we merged them. We already had customers.
[01:56:20] It's just the Gatsby is really smart, like one of the smartest systems for using data invalidation.
[01:56:28] further like incremental static
[01:56:31] generation or whatever. Like a lot of platforms have the ability to do that, like for seller Netlify or Gatsby Cloud. But Gatsby was like one of the only ones I know of that would actually like, because they had the full data pipeline where you could be like, update one field in the database and they could be like, okay,
[01:56:48] exactly these pages need to invalidate.
[01:56:51] Like that, it was complicated with those, with the Gatsby solution is not generalizable, but that like, that is the kind of power that they were looking for.  And the kind of optimization that mattered to people who have like hundreds of thousands of pages or whatever, you know what I mean?  Like.
[01:57:06] millions of pages like so I get why people still use it.
[01:57:11] But yeah, I mean,
[01:57:12] We...
[01:57:14] What is it? 2.4 stars a day.
[01:57:17] It on most most of it at the beginning of the year.  Yeah, this is tailing off like.
[01:57:22] Yeah. Okay. It is what it is.
[01:57:25] I probably won't talk about Gatsby next year because it doesn't really fit into my...
[01:57:31] my scope of the world. But I just wanted to mention that
[01:57:36] it is important to know that it is not
[01:57:38] Unsupported.
[01:57:40] Okay. Because of GraphQL? Yes, largely because of GraphQL.
[01:57:45] So
[01:57:47] Yes, largely. It's smart.  We've been thinking about other types of solutions using signals and using reactivity to do the same thing.
[01:57:56] So like, I'm looking forward to that future.  'Cause if we can...
[01:58:00] Thank you.
[01:58:01] There's a really cool stuff when you understand the data dependencies of your app and it's not just
[01:58:06] Like,
[01:58:07] The level of granularity in theory we can get of the solutions we're working on is insane, right?  Because it's...
[01:58:14] If you've ever seen Convex work with Solid or whatever, you literally go...
[01:58:20] and you update a field in the database.  And if you feed that through...
[01:58:26] to a solid store
[01:58:29] then it can literally be filled in a database, single field in the DOM.  No re-rendering, no...
[01:58:35] you know, like no
[01:58:38] you know, diffing or whatever. It's like literally the pipe connects almost directly.
[01:58:43] which is...
[01:58:45] Like, okay, fine.  There's a little bit of diffing.
[01:58:48] To be fair, I guess there's data diffing.
[01:58:50] But generally speaking, there's no re-rendering or virtual DOM creation or intermediate throwaway objects or any of that stuff.  It feels like you essentially go in, update a field of the database,
[01:59:04] field and DOM updates directed, right?  And you can take that same kind of mentality  when you start thinking about partial pre-rendering,  when you start thinking about suspense boundaries  being cache boundaries, to the point, like,  you get to a place where you're like,  I'm updating my data, and because I understand  the data shape, and I understand how these pages use that data,
[01:59:26] I can invalidate parts of the page.
[01:59:29] not even the whole page and not even every page,  just like parts of different pages in a way more granular level where things  that like generally you're like, Oh, I thought it used all this data,  but it was actually only a child of it. It uses like,
[01:59:42] This could be insane.
[01:59:44] But again...
[01:59:47] It's also a question of who needs the solution.  I don't know.
[01:59:50] I don't.
[01:59:51] someone might, but it's just like the potential there is just through the roof.
[02:00:00] Thank you.
[02:00:01] Yeah, yeah, yeah. I'm not saying the API is
[02:00:04] are good.  And this is the thing.  You already get a considerable improvement in these cases.  That's why.  Like, you would, to actually benefit from this granularity,  you'd have to have such a large scale.  I'm seeing this granularity could be,
[02:00:18] for people at that larger scale could be even like,
[02:00:22] exponent, like an order of magnitude better than what, like, you can offer with a more, less granular solution. But
[02:00:33] You know, like, I don't know if I need it.
[02:00:35] Anyway.
[02:00:37] Let's talk about Forget. One last thing. Forget was actually talked about. I think the most interesting news for me this year was that Forget...
[02:00:45] became
[02:00:47] the auto
[02:00:48] reactivity
[02:00:51] compiler, not the auto memoizing compiler.
[02:00:55] they change their terminology.
[02:00:57] Um...
[02:00:59] I, they, people don't know, sometime in 2022, they kind of like rebooted the Forget project, like,
[02:01:07] It basically...
[02:01:08] There was that old demo that they did, like, I think, React Conf 2021.
[02:01:14] And, you know, Sean was working on it and it was a very smart memoization. They reset it in the summer. They're like, OK, new approach, new team. Josefana took over and he actually wrote reactive languages at Facebook before he was on this team, like kind of like a language design perspective.
[02:01:33] Really smart guy.
[02:01:34] And they have done incredible things with Forget.  They really wanna make it so that you aren't
[02:01:43] aware of the memoization going on in the background.
[02:01:48] That's the key. The second you see a leak, something doesn't make sense, there's some side effect that you can track, then you immediately realize that JavaScript is not JavaScript, which is like often why people's.
[02:01:59] you know,
[02:02:01] Concerned with Svelte might be.  Like, when you write something, what you write is not what you get.
[02:02:07] Um...
[02:02:08] I actually think Svelte 5 solves that a lot better, but forget Compiler is like hyper on that side where you're going to write a bunch of stuff that looks like JavaScript, but doesn't actually execute the way you'd expect it to if you were actually watching it, but maybe you can't notice.  As long as there's no side effect, no one knows.
[02:02:25] Um,
[02:02:27] I...
[02:02:28] Some people call this the impossible project.
[02:02:30] React's been using this a little bit as like a...
[02:02:33] How should I put it?  It feels like whenever there's a signals conversation or some kind of thing, everyone's like, oh, yeah, forget.  We'll solve this.  So it's very easy to be semi-dismissive because you're just like...
[02:02:43] you know,
[02:02:46] Like, every time it's like, "Oh,
[02:02:49] Whoa, how does React handle this?  And you're like, oh yeah, it'll be solved and forget.  It'll be solved and forget.  You repeat that enough times and you're just like...
[02:02:57] like,
[02:02:59] I mean, it's a pretty good mantra, I guess, right?
[02:03:01] Um...
[02:03:02] I think the more interesting part about Forget is whether, like, we're talking about wrangling this complexity. There's different ways to wrangle complexity, right? Like,
[02:03:12] Complexity is complexity.
[02:03:14] Right.
[02:03:14] Um, it's this whole...
[02:03:17] easy versus simple thing, right? React was always like, we're simple, not easy.
[02:03:23] Right?
[02:03:24] The thing is, you can have something that's simple but becomes kind of complicated or involved because you have so many pieces that are simple, but...
[02:03:33] You gotta put them together, and it's a lot.
[02:03:35] Thank you.
[02:03:37] complexity, at least by my definition, is in this zone where you can't
[02:03:42] It's no longer easy to break the pieces apart.  Like, they're entwined in such a way that it's harder to reason about them anymore.  There's a difference.  So in the same way there's a difference between easy and simple, I'd say there's a difference between complicated and complex.
[02:03:58] I, that's probably not as well founded, but I'm just saying like, there's two concepts that
[02:04:03] that describe a characteristic,  and I don't know if I named them properly,  where these are similar concepts,  but they are actually different the same way easy and simple are.  For Git,
[02:04:14] is an easier, not a simplifier, it's an easier.
[02:04:17] You only pull off simple if the abstraction has no leaks.
[02:04:22] zero leaks, which is almost
[02:04:25] which is pretty difficult.
[02:04:27] For something like Forget...
[02:04:28] you have to have a boundary of your compilation, because you live in a JavaScript world.
[02:04:33] So the component is that boundary.
[02:04:36] which means that there is an edge, right?
[02:04:38] People have seen Svelte 5.  It's the same kind of question, right?  Like, do you process all the files  or just the ones that end with .Svelte?
[02:04:47] There is a boundary to the range of where this language lives.
[02:04:51] And...
[02:04:52] I think the biggest question we'll forget is
[02:04:54] is
[02:04:56] In this world,
[02:04:59] and
[02:05:00] is React just JS anymore? That was its selling point.  That was what got it to where it was, right?
[02:05:07] Yeah, we're just pulling all of this week in JavaScript in here. Why not?  Because I think it's all relevant to when we talk about frameworks because
[02:05:13] Where is it? Bookmarks.
[02:05:16] Then
[02:05:19] Do I not have it?
[02:05:21] Did I not bookmark it?
[02:05:22] Yeah.
[02:05:23] April.
[02:05:23] We didn't.
[02:05:24] This is so sad.
[02:05:26] You think you have like the perfect thing lined up?  That's fine. That's fine. We're going to find it.
[02:05:31] Dan Shipper.
[02:05:36] JavaScript Java, great guy, performance expert.
[02:05:41] Thank you.
[02:05:41] Um...
[02:05:43] He did a poll. He did a poll.
[02:05:46] Okay.
[02:05:47] Which...
[02:05:49] Framework is the most unreact.
[02:05:53] It's funny.  Yeah, okay.  I'm like, this is not what I voted.
[02:05:56] But EHT-Mans for it, one.
[02:05:59] and
[02:06:03] The funniest thing is when I...  When I...  Years ago, I would have said Svelte was the most unlike React.
[02:06:10] Because of this philosophical...
[02:06:12] divide of just JavaScript
[02:06:15] being simple, not easy.  But React is like very quickly becoming svelte.
[02:06:20] ironically.
[02:06:22] And it's funny,  I don't think HTMX should win necessarily,  but out of these choices, it's fine.  I actually put other because I said the most,  to me, the most unreact framework is React itself.
[02:06:33] But because of like
[02:06:35] Everybody...
[02:06:37] The best way I can put it positionally, you can think about it, is React started in one place.
[02:06:42] where it's kind of out of left field.
[02:06:44] And then everyone else,
[02:06:46] or
[02:06:47] admired portions of react took elements of it um moved closer from where they were to where react  was and like kind of like it's it's it's a multi-dimensional thing you can't think of it  as a straight line but like from their different vantage points kind of
[02:07:02] you know, adopted React because that's what was accepted and everyone kind of moved a little bit closer.  In the meanwhile, React moved right across the field themselves. So if you actually look at the full delta of the distance,
[02:07:13] where React's heading is probably further from its initial starting point than...
[02:07:17] any other framework would be because React kind of passes past those frameworks.  It's not going further out from where it started. It's actually
[02:07:24] coming closer
[02:07:26] you know, or like at least on one dimension.  Maybe it's going out like, sorry, I'm, the spatial stuff is so,
[02:07:31] or I wish I could draw better like Theo or whatever. This is how I view things and I've had these streams and everyone goes, "Ryan, what the hell are you talking about?" every time I try and do this, but I always view things in kind of like a multi-dimensional plane and I use it to kind of like pick certain axes that I care about.
[02:07:47] And
[02:07:48] That mental model helps for me to understand the value of different frameworks and features.  But it isn't a single map, that's why I can't just like
[02:07:55] drop a 3D or a bunch of
[02:07:58] things on you. I just occasionally make those two axes graphs and like try and show it to people  and people like explain this and I'm like, I'm sorry, if you don't get it, you don't get it.
[02:08:07] Thank you.
[02:08:08] Yeah, Saul took a ton of influence from React in a certain aspect.
[02:08:15] In a sense, I think there's somewhere where I actually wrote here that I said that  Solid is actually almost swooping up in the space that React used to live in.
[02:08:22] Like React started further over on one side, but they've actually kind of walked past us now at this point, right?
[02:08:28] Because like
[02:08:29] Like...
[02:08:31] React was, we're just a library. Now, you need a meta framework.
[02:08:38] React was like,
[02:08:39] We're just JavaScript.
[02:08:41] Now we're suggesting we compile your JavaScript so it acts in a different way because it's easier for you.
[02:08:47] React was simple versus easy, but...
[02:08:50] or simple is better than easy. Now it's like, nah, easy is pretty good too.
[02:08:54] Like,
[02:08:58] Like just waiting for, would the compiler react supporting like mutability instead of immutability? Like, you know what I mean? Like...
[02:09:06] That...
[02:09:08] Yeah, I don't know.
[02:09:11] It's...
[02:09:14] It's kind of funny.  And I think this is the biggest takeaway from React.  Even like some people say, oh, yes, React was client and now it's server components and all that.
[02:09:24] It's not as big for me as understanding
[02:09:28] how one shifts as they go through the adoption curve. React now
[02:09:32] is
[02:09:33] well into the mainstream.
[02:09:36] Right. It was it's funny because compared to jQuery.
[02:09:40] And like the big...
[02:09:42] JavaScript things that are used on more sites
[02:09:45] React could still consider itself kind of at the front of the curve, like it's still gaining adopters.
[02:09:49] But for it to get to its next stage in life,
[02:09:51] its priorities have to change for it to succeed and i think it's doing the right stuff it's just like
[02:09:57] it's a departure from where it was.  And it's crazy when you think of something from our scope, how popular react is.
[02:10:03] But like there's a much bigger world out there.
[02:10:06] Anyway.
[02:10:08] -
[02:10:11] I think Forget is very interesting.
[02:10:15] I...
[02:10:16] worry, it's not like you have to change all your code to forget, but I worry a little bit that like
[02:10:24] And maybe I shouldn't be worried, like React is just not the React...
[02:10:27] that
[02:10:28] you know,
[02:10:29] I initially inspired solid or like, you know, was the thing that basically, you
[02:10:35] had that impact on the ecosystem that way.  A lot of the things that made React React are still there,  but a lot of things are changing.  And I think that pretty much sums up React for, you know,
[02:10:46] for 2023, 2024. We're going to continue to see the most popular solution go through a migration. They've had successful migration in the past. They never had an Angular 1, Angular 2 moment.
[02:11:00] Um,
[02:11:03] The tricky part is like it might be happening to them right now, but there's no like react to pick up the pieces.
[02:11:09] You know, there's no clearly different approach for people that like is is
[02:11:15] Has a like quite in the right place. There's everybody's like almost too
[02:11:20] Similar to react for for it to be obvious to people where you
[02:11:25] The better solutions are.
[02:11:28] So people look at stuff that's
[02:11:30] drastically different and that might not be the best thing to do.
[02:11:35] Like sometimes you got to acknowledge even when you're on the outside, the React does a lot of things well.
[02:11:42] even if not everything.
[02:11:46] Thank you.
[02:11:50] Okay.
[02:11:58] Thank you.
[02:11:59] I think you should show people how to contribute to SolidJS for the sake of Solstreeture.
[02:12:03] Yeah, I have no clue what that even means. How do you show someone to
[02:12:06] I don't even... The funny thing is,
[02:12:09] I...
[02:12:10] How many React developers have ever contributed to React?
[02:12:15] I don't...
[02:12:16] Like the React Core, I don't even think I could...  I go in the React Core codebase and I...  I've spent a lot of time there looking at the features.  I don't even understand how it works, honestly.  I haven't spent as much time, but like...
[02:12:27] I don't know.
[02:12:29] It's interesting. I honestly just don't know what this even means. Like, what do you mean show people how to contribute?
[02:12:36] If I...
[02:12:38] knew what they would contribute, then I just read it myself. Perhaps. I don't know.
[02:12:42] It's interesting.
[02:12:46] Thank you.
[02:12:48] It's gotta be like...
[02:12:50] Probably much less. Yeah, I think it's much less.
[02:12:55] Yeah.
[02:12:58] Yeah. And it's not about more necessarily. We got some good libraries. It's about continued maintenance and stuff. People...
[02:13:06] People create stuff and then, you know, it's like...
[02:13:09] They use it and then like other like you just need a volume of people in these other frameworks that can continue to maintain stuff and keep the ball rolling because otherwise you have like a solution for everything. And then it's like one last updated two years ago.
[02:13:25] Thank you.
[02:13:27] Ryan said, "How are the frames to be the performance stuff and react to YouTube?" I mean, generally speaking, they're just more performant and you don't need that stuff.
[02:13:34] One of the big reasons for that...
[02:13:37] is signals.
[02:13:39] That's kind of like why framework authors drool over signals.  People can write code that seems fairly logical and it's just that much more performant.
[02:13:48] But there is a catch. So, but this is why signals are so hot.
[02:13:55] Thank you.
[02:13:57] Yeah, honestly, I talked about this in a previous stream, but like Doc's effort, God,
[02:14:03] It's so sad. The best way people can contribute is honestly docs. I know I'm just keep on shoving everyone over to Sarah, but like, like in general, it's, it's, it's really tricky. And so I'll start.
[02:14:14] There's more...
[02:14:15] Contributors to Sol Start to Sol Core, it makes sense. The further you get from the core, the more loose things get in, the more opportunities there are for contribution.
[02:14:25] Right.
[02:14:26] So anyway, but we're not talking about solid right now.  We'll talk about solid in a minute, a few minutes.  I got to hurry up though.
[02:14:32] React I knew was going to be the longest. Let's keep on going.
[02:14:35] What's our second most popular JavaScript framework?
[02:14:38] Um,
[02:14:39] this year.
[02:14:41] It's HTMX, I think.
[02:14:46] Yeah, I haven't looked at Hermes. It's interesting. That's the compiler, like that's the engine that they're like using behind Forget, right? Like that they intend to for for optimization.
[02:14:58] Will React adopt signals? No, probably not. Or they'll do something that's kind of like signals.
[02:15:04] God, you guys...
[02:15:05] Fine, before we go into HTMLX, I want to show you one more thing. One, one, one, one more thing, sorry.
[02:15:10] Bookmarks.
[02:15:11] No, profile.
[02:15:14] I saw this. It's pretty cool. Um,
[02:15:18] Dominic did this. Reacts looking at a way that through the context API, if you use use inside another hook,
[02:15:27] it can trigger this hook to run without the dependency changing.  And if the return value of foo is different, it then reruns the component.  Basically like a signals ask thing where use has the ability to re trigger a component.
[02:15:41] if our rerun specific hooks independently
[02:15:46] of the component rewriting.
[02:15:49] So they won't do signals.  And the reason they'll do this is because use memo,
[02:15:54] Thank you.
[02:15:55] is
[02:15:56] what React Forget will make disappear.  So what their hope is that eventually you'll just go use my context in a component
[02:16:03] And then they'll memoize...
[02:16:05] Um...
[02:16:06] wherever this is essentially--
[02:16:10] the values taken or where it's used, and then they'll be able to like,
[02:16:14] tell because it uses foo to just update the component only if foo changes.  And they'll be able to do this by you basically just writing,
[02:16:24] use this foo.
[02:16:27] That's the goal, right?
[02:16:30] Because they'll basically be able to erase all this kind of extra boilerplate, so to speak.
[02:16:38] So they won't go to signals.
[02:16:40] That's their plan.
[02:16:45] Yeah, the thing is...
[02:16:50] There's a control aspect of it that I think is interesting because they have a zone they work in.  It's so funny because React Team talks about, forget a lot, it's like, oh, we're just making it so things are reactive everywhere.  You don't need a signal.  The whole component's reactive or whatever.  But the problem with that is...
[02:17:05] What happens when you go outside of the component?  Like, the reason you use signals isn't because you consider about the component being reacted.  It's because you want the whole world to be able to interact with your...
[02:17:16] Uh,
[02:17:17] reactivity and not have it being contained inside a component.
[02:17:23] Yeah, not the same, but probably.
[02:17:28] Thank you.
[02:17:29] Yeah, I have a lot of shirts. I have almost... I don't have a React shirt, I don't think.
[02:17:36] Today I'm not wearing any frame of shirt, just good old Guardians of the Galaxy, but you know.
[02:17:43] Thank you.
[02:17:45] Thank you.
[02:17:51] - Yeah, I mean, will they adopt signals?  I'm not sure, but I mean, one of the big trends here  is we're gonna continue talking about signals.
[02:17:59] Right.
[02:18:03] Thank you.
[02:18:04] Yeah, huge difference.  Docs.solidjs.com is the new docs.  Solid.com slash docs, I think...
[02:18:09] is the old docs.
[02:18:14] yeah these are what i wrote in a the week before i did the 1.0 release and i just like wrote a single file
[02:18:23] I spent most of my time actually on a tutorial. I did this in about a day. This
[02:18:27] is the multi-month effort
[02:18:31] of the of the solid docs team
[02:18:35] Um...
[02:18:37] So yeah.
[02:18:39] Very different.
[02:18:41] Thank you.
[02:18:45] No, I don't think...
[02:18:51] So React is all about composability. So their solution is much closer to Svelte 5.
[02:18:58] They were hoping Svelte 5 would be the same,  but because of the boundaries and Svelte 5,  you know, you have to do the API wrappers and stuff.  They were like, okay, fine.  We admit this isn't good.  We're going to solve this.  They want to make it somehow that something you import into React  can also not need to be like in wrappers.  Like they want to do cross...
[02:19:14] module analysis, essentially, kind of like what we do in Marco.
[02:19:19] So, yeah.
[02:19:22] No, it will definitely be composable still. React, at least, will never give up that. There's no way that they would go to old Svelte. Old Svelte, like Svelte 4 earlier, is kind of like a non-starter for a lot of people who have the same philosophy beliefs that React and Solid have. It just doesn't.
[02:19:42] It's just not the way to do things.
[02:19:47] Um, okay.
[02:19:48] OK, sorry.  So let's move on here.
[02:19:55] We need to send you 20 React shirts.
[02:20:01] Okay, so how are we doing here? Okay, HTMLX. Let's talk about HTMLX. I don't have a ton to say about HTMLX, admittedly.
[02:20:10] Mostly because I think
[02:20:12] HTMLX
[02:20:13] is kind of
[02:20:15] Maybe I have something to say, but only because HTMLX is kind of misunderstood.  And maybe it's me misunderstanding it.
[02:20:22] but
[02:20:23] HTML,
[02:20:25] is
[02:20:25] mostly a primitive.
[02:20:27] Like, it's a way to...
[02:20:30] do
[02:20:31] HTML partials.
[02:20:32] It's not really a framework. It'd be like if I ship signals with Solid and then I was like, "Look guys, here are signals."
[02:20:41] You can do amazing things.
[02:20:44] reactive updates that only affect one part of the DOM and it's declarative  because you just declare your data and then it'll update those specific places
[02:20:52] And then ta-da, you don't need a JavaScript framework, you have signals.
[02:20:56] That's what HTMX feels like.
[02:20:58] to me, you know.
[02:21:00] We could argue actually maybe one step further where like maybe signals plus like a JSX...
[02:21:05] binding thing so that you could like go here a div is a div so you can do declarative
[02:21:10] Some people actually find solid really attractive because of how you could just like literally
[02:21:16] go in, just go on the playground, and forget about all this React-looking stuff.
[02:21:21] and just be like, oh, you know, I can just, you know,
[02:21:25] Const.
[02:21:26] my div equals, you know, this, you know, like there's no components needed.  It's just like a div is a div, you know, like,
[02:21:35] If I create it this way,
[02:21:38] And and then, you know, go document.
[02:21:43] dot append
[02:21:45] you know, like,
[02:21:46] Let me put something in here so you can see it.
[02:21:51] You know, I can go, hi, and then go, let's time the div.
[02:21:55] then at least in theory,
[02:21:58] Amen.
[02:21:59] Maybe make an h1.
[02:22:01] Oh, I actually have to probably append it to the body being dumb body.
[02:22:06] Like...
[02:22:07] Ta-da! Like...
[02:22:11] Sweet.
[02:22:12] You know?
[02:22:13] And guess what? There's signals that update it.  If that was your mentality of the world,
[02:22:18] then like
[02:22:22] There's a certain simplicity there that's really nice. And there are people who view solid this way. But the reason I'm making the drawing the comparison to HTMX, because to me, that is not what solid is.
[02:22:31] Like, it's an aspect of it. It's how we keep the level of transparency. It's one of our philosophies.
[02:22:38] but it's not
[02:22:39] what, you know, makes Solo powerful. It's the fact that we have the full abstraction that handles all the pieces
[02:22:46] around the library that makes it consistent that
[02:22:50] is what's interesting. The fact that I can do this is trivial and that's kind of how I feel about htmx.
[02:22:56] Thank you.
[02:22:58] Bye.
[02:23:00] Thank you.
[02:23:11] Right.  H&L being your state is...
[02:23:16] problematic, but we'll get to that in a minute.
[02:23:20] um
[02:23:23] Yeah, I mean, we are kind of going for a circle. I used update panels in .NET in 2005.
[02:23:29] And,
[02:23:31] I mean, people who watch my stream regularly know I call that the dark ages of web development.
[02:23:37] Um...
[02:23:38] It was...
[02:23:40] But there is a major difference with HTMX that I actually like.
[02:23:45] because it assumes one thing that all those other frameworks that did this kind of stuff before
[02:23:50] didn't assume it or did assume
[02:23:53] HMACS doesn't assume that your server has to be stateful.
[02:23:58] It might help that your server is stable, but it doesn't assume it has to be.  It's not worried about freaking serializing all the data state of your DOM back so that the server knows what's up.  You know, update panels on their post backs and all.  They were horrendous.  HTMLX is like, no, screw this.  We're just sending HTML.
[02:24:14] So it's great.
[02:24:16] In the same way,
[02:24:18] This is great. In fact,
[02:24:20] Like,
[02:24:21] Like, I'm not done my demo.  I guess my real...
[02:24:24] Show of why this this is great would be like I
[02:24:29] Uh, update.
[02:24:32] count or set count. I don't really care. The reason this is great is
[02:24:38] picture
[02:24:40] Thank you.
[02:24:40] Thank you.
[02:24:41] Thank you.
[02:24:42] zero, and then I was like, okay.
[02:24:51] Yeah, sorry, it's not.  The playground's not clearing properly with me, just appending it to the body like this  when it does the reload, but let's say I was set count.
[02:25:04] C equals C.
[02:25:06] plus one and I do it
[02:25:08] every
[02:25:10] Second. Okay, sweet. Okay, let's do this.
[02:25:14] What I'm getting at is, look, now I don't need a React or JavaScript framework. This is incredibly powerful. I can do all my updates and it's succinct and it's nice. The API's...
[02:25:25] you know,  pleasant enough to deal with,  like,  like,
[02:25:30] Bye.
[02:25:33] This is not
[02:25:35] a web application.
[02:25:39] Thank you.
[02:25:40] and I think, I think,
[02:25:45] If my requirements for a website were simple enough to some degree or they're server-stateful,
[02:25:55] then something like HTMLX is more than adequate.
[02:25:59] Right?
[02:26:03] I think Theo did a drawing.  And I could, like, look it up,  but I could also redraw it in two seconds, right?  He did this, right?  He...
[02:26:12] He...
[02:26:14] He made...
[02:26:15] a line and he was like
[02:26:18] He's like,
[02:26:21] - Ss.
[02:26:22] Server.
[02:26:23] Thank you.
[02:26:25] client
[02:26:27] Thank you.
[02:26:31] Thank you.
[02:26:32] Thank you.
[02:26:37] And then he was like...
[02:26:41] Thank you.
[02:26:42] Thank you.
[02:26:46] What is it?  Uh...
[02:26:48] Like here.
[02:26:51] Let's do like this.  He was like...
[02:26:55] He called this Next.js.
[02:26:59] And then he called...
[02:27:02] basically this htmx more or less
[02:27:07] Something along these lines, right?
[02:27:09] And he's like, "It's really sweet because people who don't need to go here can do so much with here and they won't get angry that someone's forcing them over here or forcing them to have this."
[02:27:18] Right.
[02:27:19] I'll agree with that take pretty well.
[02:27:23] Thank you.
[02:27:24] And it's a very clear visual way of explaining where these zones split.  But I think there's a more fundamental question.  In the same way we're asking ourselves about CSR these days,
[02:27:39] We're kind of re-asking the question about stateful servers a bit because
[02:27:46] The challenge is
[02:27:48] with partials.
[02:27:51] Thank you.
[02:27:52] is understanding...
[02:27:54] Where
[02:27:56] Like especially the challenge actually with having two solutions in these zones is understanding where the ownership is because you can you can still use HTMLX and then add like a client framework. Some people I've seen people trying to use HTMLX with React and stuff like and doing that.
[02:28:12] The challenge is
[02:28:14] Okay.
[02:28:15] If your state is all server based,
[02:28:17] then like
[02:28:18] You have no problem here.
[02:28:22] You might have a really hard time here, though, if your state is completely server-based.
[02:28:27] It's a little bit tricky. I mean, it's not impossible, actually. You can just keep on fetching from APIs, but you got a little bit more work.
[02:28:34] If you're...
[02:28:35] If your state is all client based, well this is very easy, this is not
[02:28:39] very easy because
[02:28:41] Like,
[02:28:42] As you switch these partials, how does the server know about what's in the client?
[02:28:48] I think I should start by saying what statefulness is.  An example of that is...
[02:28:53] There's a difference.
[02:28:54] When you're in a UI, you might
[02:28:57] have
[02:28:58] pieces of state that you update or change
[02:29:01] that aren't
[02:29:02] stored to a database.
[02:29:04] Like they're actually UI state, like you toggle the view, you collapse a div, you know, details, you do these kind of interactions, you're scrolled on a scroll bar, you do all these things.
[02:29:16] And
[02:29:18] Thank you.
[02:29:19] That stuff
[02:29:21] starts
[02:29:24] Usually, the easiest mental model for us is to have them in the client, but you could have its statefulness be on the server. This is like .NET did, and it would transfer it back. So if you collapse something and went back to the server,
[02:29:36] you know, it would communicate that so when it sent the page back out, the thing would still be collapsed.
[02:29:42] And what's happening in my opinion right now is a lot of people are living in this zone in the center where there's a third place that state can live.  It can live in the client, persist in the client, it can persist in the server, or it can live only within side of the server.
[02:29:56] chunk component in the general sense, not in the React sense,
[02:29:59] Peace.
[02:30:00] If the state only exists in the piece that you're swapping out,
[02:30:04] But call it an island.
[02:30:06] if you want, then you don't have any real problems. Because like,
[02:30:10] If.
[02:30:11] If you ship out an island...
[02:30:14] and send it to the browser and it contains all the state it's going to need to interact with.
[02:30:19] then it will work properly.
[02:30:22] If...
[02:30:24] If, however, that state
[02:30:27] exists outside it and you and multiple multiple of these islands half
[02:30:31] to communicate with each other,
[02:30:33] There's no way...
[02:30:35] unless you send it back yourself for your serialization,  that these different islands are going to be aware of it.  Like when you go to server render the next page or the next partial page,
[02:30:44] it needs the information
[02:30:47] and it needs information that's persisted on the client, you have to send it back
[02:30:50] Otherwise, this piece will have the old information
[02:30:55] because it never got it and whatever else you're
[02:30:57] have in your view on the other side will have the current information. I don't know if this makes much sense to people. I'm terrible at explaining things these days, I find. But essentially,
[02:31:08] Thank you.
[02:31:10] without manually sending it back and forth, if it lives outside on the client state,
[02:31:16] There's
[02:31:17] potential for tearing. Now you could say that this is fine for a state that's only client-side because you only render it client-side.
[02:31:25] This is why people are putting web components in HTMLX. It's why people are doing client rendering in HTMLX.
[02:31:32] i.e. if you put React in your HTML page, only render it, or partial, only render it in the browser. Don't try and do SSR.
[02:31:41] Because the second you do SSR,
[02:31:43] with partials,
[02:31:45] you have a tearing of state. You have a client that, you know, has updated count to 10.
[02:31:50] And that partial piece isn't aware of that when it's on the server unless you explicitly send it back.
[02:31:56] And the bigger that stake gets on the client,
[02:32:00] the less likely you're going to be controlling that sending back.
[02:32:04] So for like something that cares about client state in this zone here,
[02:32:12] HTMX's solution, or assumption rather, to not, you know,
[02:32:17] worry about that kind of state.
[02:32:19] It's a good thing.
[02:32:21] But it means that if you actually do need to worry about the state, you have to do manual stuff.
[02:32:25] That's just the reality of it.
[02:32:28] .
[02:32:29] So like it's hard to consider these even solving the same zone of
[02:32:33] of issue.
[02:32:36] Obviously, React with Server Components is trying to go further and further and further and further
[02:32:41] um back
[02:32:43] Um...
[02:32:44] Thank you.
[02:32:46] But like...
[02:32:47] This...
[02:32:49] moving forward
[02:32:52] would require a significant investment on the client side of it.  One that I'm not sure a lot of these frameworks care to do.
[02:33:01] HTMLX might be one of the exceptions. I know there's like a hyperscript thing people are working on, but like historically stuff like Alpine JS.
[02:33:10] um
[02:33:12] stimulus.js from Rails, like these as client frameworks are not
[02:33:19] particularly
[02:33:21] Impressive.
[02:33:23] I don't know why it is.  We built a petite...
[02:33:26] Solid.
[02:33:27] on stream one time.
[02:33:30] Right.
[02:33:31] um just for fun and we scored about the same as like Inferno at the time it was more up by lit like somewhere over here
[02:33:38] But like, can you guess where AlpineJS is on these kind of,
[02:33:44] Client side benchmarks.
[02:33:47] right beside its buddy Blazer.
[02:33:50] Um...
[02:33:54] So like,
[02:33:58] like there's some overlap but like
[02:34:04] I guess I'm not making this clear enough.  There's a fundamental issue here with,  with,
[02:34:11] the idea that if you preserve client state, you have to be able to send it back to the server.
[02:34:17] So I think this is going to be a world where
[02:34:21] Are, I mean, let me ask the audience here.  Are we going back to,
[02:34:25] to
[02:34:27] server, stateful servers.
[02:34:36] Thank you.
[02:34:42] Like, is that the thing? When I say state, I don't mean like you're loading stuff in a database. I mean, literally, I'm keeping track of every...
[02:34:50] Like...
[02:34:51] temporary
[02:34:52] thing like I moved some piece of my UI or whatever, like every piece of state
[02:34:58] needs to be communicated back to server. Stuff like Phoenix Live View does an amazing job of this.
[02:35:05] There are these solutions that exist.
[02:35:12] I'm just catching up here with the chat because I was talking for a while.
[02:35:19] People are liking Alpine with HGMEX, of course they are.
[02:35:22] Thank you.
[02:35:23] Ugh.
[02:35:25] Thank you.
[02:35:29] Right, exactly. But it's like
[02:35:32] Thank you.
[02:35:33] it doesn't even it doesn't solve remotely what react solves like
[02:35:39] And
[02:35:40] overly, it's unfair to make a comparison like this, because HTMLX deals with a primitive that I think is very powerful. In a sense, you could say that server components
[02:35:49] are kind of like HTMX.  Like the idea of serving up partials,  the difference of server components
[02:35:55] can persist state.
[02:35:57] Right? Like,
[02:35:59] Client-side state works seamlessly in server components.  When I had that diff up earlier...
[02:36:05] and
[02:36:07] I had state in the client
[02:36:10] If you pretended that update came from the server,
[02:36:15] Then like...
[02:36:16] The reason server components work is because the client components only render during SSR.
[02:36:22] Like the problem is if you don't render the client components during SSR and you have lots of stateful interactive pieces, you get a really weird experience where like.
[02:36:31] It's like the way we did websites in 2010, where you load the shell of the page, and then you have the JavaScript stuff
[02:36:39] all popping in.
[02:36:41] Right? The reason Astro, which we'll talk about very soon, I think it's the next one on the list, is so powerful, it's because it does SSR. If Astro did not do SSR for those islands and just did CSR,
[02:36:52] It's kind of like, who cares?
[02:36:55] Like I understand that they advertise that as like something they can do, which is cool that they can do it. But generally speaking,
[02:37:01] like
[02:37:04] an express server with
[02:37:06] Like that's how we built websites back in 2010 or 12.  Like what ended up happening is our, the islands got bigger and bigger and bigger.  The power of islands is not that.
[02:37:16] Island's power is that
[02:37:20] you can...
[02:37:22] nest them and you can
[02:37:24] Project them
[02:37:25] It's not like micro frontends.
[02:37:28] Microfrontends are like, here are isolated things.  Like in one sense, microfrontends are great.
[02:37:33] Cause like
[02:37:34] you know, big teams need them and they can move independently.  But the actual power of Island's architecture, like we've been able to do micro frontends, like, sure, wrap it with a nice DX, but...
[02:37:43] And
[02:37:44] It's because
[02:37:46] of that kind of transclusion, that like projection of stuff, the way that you can get two trees woven together.
[02:37:57] If people just wanted to stick...
[02:38:00] like some client JavaScript inside a server rendered thing, you know,
[02:38:05] we've been doing this the whole time. There's no revelation there.  You know, like, I don't know, sales.js is another one like,
[02:38:13] But literally, Express Server or anything
[02:38:17] Like that's how client side JavaScript frameworks work.  Maybe this is part of why CSR is on the comeback.
[02:38:24] But it's like...
[02:38:29] There's a reason we ended up here in the first place, because you don't want
[02:38:33] At a certain point you start and you go, okay, that's fine. I can render my HTML and I have a few of these island little pieces. But at a certain point you're like, I have too many of these to manage the states of them connect, they are related to each other. And
[02:38:47] If your only option there is to blend them all into one giant island, at a certain point you're just like, I'm just going to...
[02:38:53] do the whole thing as a single page app anyways.  That's how it got there.
[02:38:58] That's why I'm saying the fact that Astro does server rendering is what changes, breaks the pattern, for example. It's because
[02:39:05] the solution isn't necessarily just make a big island.  It's like,
[02:39:09] Let's talk about how we can share state.
[02:39:12] Thank you.
[02:39:13] What makes React server components so compelling is they actually can persist this through route navigation, something that even the Vue transition API and Aster doesn't really succeed at.
[02:39:25] As for htmx,
[02:39:29] Thank you.
[02:39:31] It seems like a good solution for some things.
[02:39:33] I think it will continue to gain popularity.
[02:39:36] I think people will be hyped about it.
[02:39:42] But it's like, I guess in a sense, when you leave someone in a place where you're like,
[02:39:52] they need to find a solution that doesn't exist. They end up building their own framework.
[02:39:55] HTMX is the framework
[02:39:58] that backend developers built every single time they're like,  "Oh crap, I got to put some React piece on my page."
[02:40:04] Like every time they're like, okay, I need to, I've got my express server here.  That's JS, but let's, let's say, you know, Django and Python or something.  And they're just like, crap.
[02:40:14] I need some interactive part, I need to put React into it. Do I use Next.js?
[02:40:18] No, I'll just build something myself.  A lot of them were like, yeah, sure, I'll make myself.  And they spend like a day and they do it.
[02:40:23] HT Max
[02:40:25] is like
[02:40:26] that person decided to spend a couple months on it instead of a day, and took it to that next level.  Where it's like, "Okay, look, this has all the niceties you need.
[02:40:36] And this can do partials and more interesting stuff.
[02:40:40] have at it. That's where I'm sitting on it. It's like we shouldn't be comparing like
[02:40:46] Like,
[02:40:47] Uh...
[02:40:47] I guess the only reason HTMX haven't existed in the past is because this was...
[02:40:52] Kind of so easy to do yourself anyway.  Like you didn't really even...
[02:40:55] bother with it. Maybe not all the way to what HTMX does, but you're just going to go like, okay, sure. Like, I'll just like,
[02:41:02] you know, put a web component on a page or whatever, like,
[02:41:05] I think HTMX is kind of
[02:41:07] taken
[02:41:09] They've gone like, okay, no, this is a real pain point.
[02:41:12] And as I said, people are loving it.  I do expect sometime in the next year  where people realize like,  oh, this isn't really a replacement.  Like this is good for a lot of stuff.
[02:41:21] But like...
[02:41:22] We're not really even comparing apples to apples here.
[02:41:26] But who knows, maybe that won't happen.
[02:41:32] Thank you.
[02:41:38] So stateful servers on the edge seem pretty hard.  Yeah, getting back to my question I asked six minutes ago.
[02:41:43] Atrex doesn't need a stateful server.
[02:41:46] But
[02:41:47] If the state doesn't live inside the component you're swapping,
[02:41:52] It has the same issue that like Vue transition API has.
[02:41:57] Like,
[02:41:59] uh, Astro's view transition API, like,
[02:42:03] I showed it on my Astro stream.  Like essentially the server is not aware of the state that you change in the client.
[02:42:10] when it goes to render the next piece.
[02:42:16] Thank you.
[02:42:18] Thank you.
[02:42:22] What if you only do HTMLs for stuff you'd use RSCs for,  and keep your URI frame for URI frame for,  can you server render
[02:42:27] the JavaScript inside the components initially.
[02:42:33] Can you transclude? Can you send the HTML...
[02:42:38] between from the client components through
[02:42:41] Like, can you send additional server children through which have more client components?  Can you set up the hierarchy so you don't just hit that first island and die?
[02:42:57] Yeah, RCs are stateless.  That's the whole, the state's in the client.  The client is the source of truth.  That's why it's a very smart design in that...
[02:43:05] the... it's... the...
[02:43:08] initial SSR
[02:43:12] solves the initial page load issue
[02:43:14] and the continued updates
[02:43:17] using reacts, coordination, mechanisms, suspense, and transitions, makes the swap in, even if stuff's only getting client updated or rendered,
[02:43:28] Like, uh...
[02:43:30] Smooth.
[02:43:31] Basically.
[02:43:34] you
[02:43:37] Yeah, I mean, I've thought about that, right?  Like, it would be nice primitive to have.
[02:43:43] Um...
[02:43:44] It would save...
[02:43:46] It would definitely save me from writing
[02:43:50] The funny thing is I don't need the declarative bits.  I just need the mechanical bits.  And I kind of...
[02:43:55] Thank you.
[02:43:55] Yeah, I mean, it's
[02:43:57] It's interesting.
[02:44:00] I would use it for like router.
[02:44:02] I think the one place I'd use it is nested route sections.
[02:44:12] Thank you.
[02:44:18] Thank you.
[02:44:20] Right, right. And the performance on the server render is huge, right? That's a big thing like that. The only problem is...
[02:44:27] Yeah.
[02:44:29] I mean, this is a tricky one. I kept on trying to explain this to people.
[02:44:36] Um, and
[02:44:40] Thank you.
[02:44:41] Okay.
[02:44:44] it doesn't end with just rendering the server on the page.  Like the cost of...
[02:44:50] Like if you're gonna need to do that decline JavaScript anyways for stuff like, yeah, if you can get away with jQuery, then good on you, I guess, right? That's how we like the role that Amazon or like, or that's how Amazon rolls, right? But like, generally speaking,
[02:45:06] You don't control the end user's device.
[02:45:10] you control the number of servers you have.
[02:45:13] So like,
[02:45:14] While there's a cost on that initial load, if you're going to push stuff like onto the client anyways, having JavaScript on both sides is the only way you can actually optimize the handoff in a reasonable way.
[02:45:24] the reason why partial hydration for quick or RSCs, all these things that actually reduce the load up page.  Because it's not over when you put the HTML on the page, your page has to be interactive.
[02:45:36] And
[02:45:38] the network latency and those aspects are much
[02:45:43] bigger than your CPU.
[02:45:45] So while at a large enough scale, CPU cost becomes a big concern,
[02:45:50] and you'd want to optimize it,
[02:45:52] the impact you make to your end user is way more considerable.  Like basically, if you care about your end user, you choose JavaScript.
[02:46:01] You will give them a better, you have the potential of giving them a better experience unless you're ready to hand write.
[02:46:09] like jQuery style, practically all the JavaScript you want to use,  and you can scale that on your developer team. Otherwise, no.
[02:46:17] How are you doing, Theo?
[02:46:18] Glad you can join us today.
[02:46:21] It's actually 200 viewers across Twitch and YouTube, but
[02:46:26] It's...
[02:46:27] Yeah.
[02:46:28] Yeah.
[02:46:30] I...
[02:46:32] Uh...
[02:46:34] Yeah, completely.
[02:46:38] Yeah.
[02:46:40] And to be fair, this graph I said next because that's what Theo used, I think...
[02:46:46] This has been the goal.  The goal of JS Framers for a while now has been trying to pull this over.  The thing is, I don't see this red line moving over here.
[02:46:57] We'll see.
[02:47:00] Okay.
[02:47:03] Did I summon Theo with HTMAX? I'm not sure.
[02:47:08] Ugh.
[02:47:15] The concept of H2Critability around the time is really just, but I never, yeah. And that's kind of like the scenario we're in, right?
[02:47:23] I'm going to go.
[02:47:25] Thank you.
[02:47:27] Thank you.
[02:47:30] Anyway, just catching up with chat here. I finished all my coconut water.
[02:47:35] Um.
[02:47:37] Thank you.
[02:47:39] Thank you.
[02:47:41] Yeah, okay. I'm actually very... This is one of the most exciting things about server components, potentially, is if you could get the logic. I think one of the challenges here is like,
[02:47:52] Some large companies do stuff like this.
[02:47:54] Google compiles Java to JavaScript.  I think the problem people miss here is stuff is not just templating.  There is actual JavaScript logic involved.  So if you're finding...
[02:48:06] having GoLogic working and then JavaScript logic, the, the,
[02:48:12] The key, though, is you got to get the...  I think you need to get...  Do you have a way of rendering...
[02:48:17] the JavaScript
[02:48:19] Pieces.
[02:48:20] like the client components on the server in your Go server.
[02:48:31] - Right, right.  This is what I'm saying.  On a cost basis,
[02:48:36] Yes, but end user basis. I'm saying
[02:48:38] Yes, it could be prohibitively costly to a certain degree.
[02:48:43] Mm-hmm.
[02:48:44] But like...
[02:48:47] At a certain point.
[02:48:48] I don't know what your user base is onto that,  but until you get to the scale where that's going to kill you,
[02:48:55] Because of the cost?
[02:48:56] you'll be delivering a better end user experience for end users.
[02:49:00] And your developers might actually even be happier.
[02:49:04] I'm not going to take that take. That's Theo's take. I don't really know anything about developer happiness.
[02:49:12] Thank you.
[02:49:14] Thank you.
[02:49:16] Thank you.
[02:49:22] It's the knowledge of hydration, right?  The problem is...
[02:49:28] Your JavaScript needs to
[02:49:30] wake up in the client. Now, if your JavaScript is related to like some pinpoint interactions that you don't need very much, then you're fine. But if you're trying to do anything substantial there...
[02:49:42] You have JavaScript that needs to run in the client.
[02:49:45] And
[02:49:46] needs to do stuff. And you have data you need to send with that JavaScript in order for it to  interact with it. So there's a data serialization consideration as well.
[02:49:58] Um, so if you increase the amount of
[02:50:01] of data serialization and the amount of JavaScript
[02:50:05] Essentially,
[02:50:07] What I'm arguing here is...
[02:50:10] You can...  No.  In that zone, which is now owned by JavaScript...
[02:50:15] because it needs to run on the client.
[02:50:17] The only one who can optimize
[02:50:20] it to send less is
[02:50:22] that JavaScript framework itself. The fact that we run JavaScript on the back end or in SSR is what lets us know how to skip serialization of certain parts of data. It's what allows us to know what JavaScript is. The optimization
[02:50:37] happens in the JavaScript layer. If you don't do that, yeah, you can client render it, then that's fine. But I'm saying it's like,
[02:50:45] *sad*
[02:50:47] Like, you inevitably get here as...
[02:50:51] your need for client interaction goes up.
[02:50:56] I wrote an article about this.
[02:50:59] Ooh.
[02:51:00] a year and a bit ago.  Let me see if I can find it.  I called it the JavaScript paradox.  I go into this more detail, but it's basically explaining  why the only way to get less JavaScript in the browser  is to use more JavaScript.
[02:51:17] Thank you.
[02:51:18] Thank you.
[02:51:20] Thank you.
[02:51:21] My take is less rent is always cheaper even if you're doing SSR.
[02:51:25] Thank you.
[02:51:29] Yeah, it would be interesting to know, um...
[02:51:32] That came up a little bit earlier, but yeah, definitely be interesting to kind of know that for sure.
[02:51:42] I think  HTMX, as I said, will continue to gain popularity.  I think people who try and use it  for a lot  of basic stuff
[02:51:52] Like, the site that I'm looking at right now,
[02:51:55] HTMX could probably...
[02:51:58] Handle it.
[02:51:59] Probably. Getting much beyond this though, I think people are going to get disappointed. But it's fine. Like, to be fair, we have a decent range here. We're talking about HTMX right now.
[02:52:17] Do any SSR frameworks embed data for the client who has to use initial algorithm? Pretty much all of them.
[02:52:24] That's like, like,
[02:52:27] Um, that's basically...
[02:52:30] Thank you.
[02:52:31] That's pretty much how they all work.
[02:52:33] You pull the data on the server and you send it along.
[02:52:37] You could stream it too.
[02:52:38] And that way, you need the data for the hydrate. Now, arguably, if you don't hydrate, like we create the problem, you know, in a sense, if you're just doing jQuery, then maybe you don't need all of that data.
[02:52:50] But like you're going to get to there's a point.
[02:52:52] there's an influx point, which happens early enough on the app cycle that you're going to hit this.
[02:53:05] This covers almost every...  Yeah, yeah, I'm not saying that, but like...
[02:53:11] The funniest thing about this is
[02:53:13] that aspect
[02:53:15] hasn't changed
[02:53:18] If anything,
[02:53:19] The ones that need more have only gone up in time.
[02:53:22] So...
[02:53:24] Why were you guys tempted by React in the first place?  Like, why weren't you just not like, why weren't you just using whatever tool you had available?
[02:53:33] To you.
[02:53:35] Like.
[02:53:36] That's the part I don't get about this. I'm not saying that there aren't more sites
[02:53:42] like that.
[02:53:44] I'm just saying like,
[02:53:48] That's always been the case.  If anything, there's actually less proportionally now than before.
[02:53:54] you know, like the interactive bar has gone up higher. So then like,
[02:53:58] How would you ever expect that to actually replace...
[02:54:02] the thing that was...
[02:54:03] developed because of
[02:54:05] The shortcoming.
[02:54:09] Thank you.
[02:54:14] Thank you.
[02:54:21] Yeah.
[02:54:22] Yes.
[02:54:23] Probably.
[02:54:27] I mean, Marco, when they developed it at eBay, there was a real performance. They had the show. The problem is,
[02:54:36] If you have the need, which is probably more people than they realize, you get to a certain level of complexity.
[02:54:42] And like,
[02:54:43] you're like, I want my developers to be able to
[02:54:46] work with one mindset. Like, none of this has fundamentally changed. I said the only thing that I think makes HTMX really appealing is that they, they're unlike any solution in the zone before they, they're not forcing you to have a stateful server in the back end, they're saying you can do this without a stateful server in the back end, which I think is the it's that's the piece.
[02:55:08] which makes it more approachable.
[02:55:10] So there is a certain subset of people where now this is actually an approach that's viable where it wasn't before.  And then there's another group of people who at least think it's a viable approach when it really won't be for them, but at least they can come in.  So like...
[02:55:26] This is...
[02:55:28] The...
[02:55:29] This is the biggest strength of HTMX here.  And I said over the next year or so,  we're going to see that shakeout between the people  where this new zone enables them,  which probably the majority of this section,  and the other people...
[02:55:44] that will realize that where this falls short.
[02:55:55] Thank you.
[02:55:58] Thank you.
[02:56:01] No enforcement, yeah. Pretty much. But no, I guess it's nice.
[02:56:07] I think this is like, there's probably some, it's so funny for all the complexity complaints, I think there's a DX piece here.
[02:56:13] I don't think, power marketing maybe, but like,
[02:56:17] React is such a small piece compared to WordPress or whatever.  You know what I mean?  Like...
[02:56:23] Like,
[02:56:25] react's market share on top sites is like i don't know i forget what it's like the 10 and like
[02:56:30] You know what I mean?  Like the most sites out there are actually using a lot of other stuff.
[02:56:36] It's just funny when it kind of creeps into like our tech sphere of influencer sphere of like mindshare side.
[02:56:43] It's good. HMX, as I said, is getting a lot of attention. It's
[02:56:46] This is the most I've talked about at HTMX pretty much ever because it just hasn't interested me because I know...
[02:56:52] that it just doesn't matter where I care.
[02:56:56] It's that simple. I think it does matter to a lot of people though. So it's cool that continues to grow. I just literally, there's almost no part of it that.
[02:57:04] Like I'm going, hmm, interesting.
[02:57:08] you know,
[02:57:10] Thank you.
[02:57:12] Thank you.
[02:57:13] WordPress is for dental offices. There you go.
[02:57:20] Thank you.
[02:57:21] All right.
[02:57:24] Thank you.
[02:57:25] I'm...
[02:57:26] So that's not happening probably anytime soon, unfortunately.  I think React is going to be the default choice for quite a while.  Okay, who's next?
[02:57:34] on our list. That's enough HTMX.
[02:57:43] Um...
[02:57:47] you
[02:57:49] It looks like
[02:57:50] Astros at 38. Let's see here. So actually, why do I have a separate category here? Yeah, so Astros at 38.
[02:57:57] And then Svelte's at 28. Okay, so Astro's next. Let's talk Astro. Um,
[02:58:04] What do I, it's funny, HTMX, I just draw this diagram.  I don't have anything else to add here.  Okay, let's talk about Astro for a moment.
[02:58:10] Okay.
[02:58:16] Yeah.
[02:58:17] This is in the last 12 months  So this is about hype  We're doing hype order
[02:58:27] Dental.
[02:58:30] Thank you.
[02:58:31] Oh, there you go.
[02:58:35] Okay, what do I want to say about Astro?
[02:58:39] Thank you.
[02:58:40] Lots
[02:58:41] of
[02:58:42] Growth.
[02:58:44] and releases.
[02:58:46] I want to talk about both of those. First of all, Astro
[02:58:50] really came into its own last year.  Like, I remember for the longest time,  me and Fred would talk,  and we were kind of lockstep with Solid and Astro  in terms of adoption and stuff,  and we had a little bit of a head start,  but, like, it was always pretty close.  This last year, Astro just...
[02:59:03] Kind of like really took off.
[02:59:06] Again, it's kind of like the HTMX thing.  There's a certain aspect to it, right?  Um...
[02:59:11] you know, people mentally wanting to get away from single page apps, SSR,  all this complexity that we've been talking about today and
[02:59:19] Astro
[02:59:20] is...
[02:59:21] brilliant when it comes to like
[02:59:23] figuring out their niche.
[02:59:25] And
[02:59:27] And like...
[02:59:28] you know, just owning it, right?  The thing is, like,
[02:59:32] I've never
[02:59:33] Early, the first release in this year was Astro 2.0 in 2023.  Let me...
[02:59:38] I feel like it was.
[02:59:40] It might have not been. Astro 2.0.
[02:59:43] Yeah, January 2023.
[02:59:46] Right?
[02:59:48] Um,
[02:59:50] Content Collections came in.
[02:59:53] Right.
[02:59:53] better error handling all this stuff and update to beat but whatever my point is
[02:59:58] First Astro 2 comes out.
[03:00:00] which doubles down on basically making this kind of like
[03:00:04] Turning the
[03:00:05] front matter of their files into basically a database, which is
[03:00:09] with type safety, you know, which is incredibly powerful.
[03:00:14] That's part of the story.
[03:00:19] At this point, when Two Point came out around this time, people kind of just
[03:00:23] it's like the United Nations.  Like everyone's like, okay, you know,  if I can't choose between what JavaScript framework  I'm gonna use, I'm just gonna use Astro.  And again, kind of like,
[03:00:35] It's just HTML. This kind of mentality...
[03:00:38] Um...
[03:00:40] Thank you.
[03:00:41] kind of got us to this zone now where we're sitting
[03:00:45] where
[03:00:47] Um,
[03:00:51] People have, you know, had enough.
[03:00:54] Right. And if I'm building that site, why would I bother to do anything else or anything more?
[03:00:59] Um...
[03:01:02] This is...
[03:01:04] Pretty powerful. I think MPAs have been...
[03:01:07] Just like we said CSR is underrated, I think MPAs have been underrated for the last several years.
[03:01:14] Just because.
[03:01:16] It's been a long time since the browser was a problem.
[03:01:20] This site is an MPA.
[03:01:23] You know, like...
[03:01:24] Yes, I can see this thing spinning when I switch between these pages. Sorry, documentation is not where I want to go. It says home.
[03:01:31] showcase.
[03:01:33] vlog.
[03:01:34] But like...
[03:01:36] We don't have to worry about the paint.
[03:01:38] And the truth matters is with streaming,  you can even show loading indicators here.  That's like Marco's old trick.
[03:01:45] It's not a problem. In fact, when I went and did the the start, the solid start docs, and it looks like I'm loading everything in the computer. I did it with islands and an MPA myself. This is with solid start, but I just wanted to like kind of point out that MPAs.
[03:02:01] are
[03:02:02] are not
[03:02:04] particularly problematic for
[03:02:06] you know, a doc site or lots of different kind of content sites anyways.
[03:02:10] So Astro is really cool because literally you, it's funny, it's JSX, but it feels like HTML. So people just kind of come in and they just like drop their thing out and you can just do whatever you want. Astro equals convenience, right?
[03:02:23] We've had a great time with them.  Like this NordVPN site is an AstroSolid site.  A lot of that combination was used a lot.  That's why I'm also a big fan  because we've always really worked closely together  on a lot of large deals and they come in through...
[03:02:37] Astro.
[03:02:41] Right, which leads to this kind of Astro because V for SSR.
[03:02:47] And I think that's a pretty fair thing.  This is something that I was kind of touting even most of the year  because it kind of seemed like the obvious thing.  You could just bring in whatever you want.  Astro has its own opinions, which...
[03:02:58] Um,
[03:02:59] go a little beyond that, which is why I might not make that statement today. But for
[03:03:06] general purpose standpoint, I would say close enough.
[03:03:13] So,
[03:03:19] Astro...
[03:03:22] It's so funny, when HTMX came out, I went to a friend and I was like, "So are you supporting, like, Astro supporting HTMX?" He's like, "I don't know why you do that." I'm like, "Trust me, Astro is where people are going to go first for HTMX on the JS side." You're right, for Go and whatever other Rostla language, they're gonna do something else. But Astro is like the logical place to put HTMX. And actually later in the year, I think Astro 3, they released
[03:03:44] support for
[03:03:47] Uh...
[03:03:49] the blog here, can I see all the releases?
[03:03:53] whatever, let's go.  Astro...
[03:03:57] 3.0, they added support for
[03:04:02] Partials.
[03:04:03] Maybe it's not that one.
[03:04:07] Is it Astro 4.0 that added support for Astro?
[03:04:10] Astro did three major releases this year,  not because of,  you know,  it's terribly unstable.  It's just because the team's been a,
[03:04:17] a complete beast.  Let me see here.  Partial...
[03:04:22] What do they call them? Fragments?
[03:04:25] Let's try this one.
[03:04:27] Partial.
[03:04:31] Fragments.
[03:04:33] Yeah, like, we...
[03:04:35] It happened this year.  I'm not finding it in the release article.  Maybe it was like in a minor update.
[03:04:40] My point is...
[03:04:43] Astro...
[03:04:44] very much is the place where people can try any idea out and they can just do it and not be they can kind of
[03:04:52] push away that framework knowledge thing. You can make a site and then put a little piece on.
[03:04:59] It's that same kind of ease of use that I was talking about, you know, in that HTMLX might give to other languages.
[03:05:07] you know one of the big parts with astro this year also is they got like proper hmr working
[03:05:13] Inside the islands like this is the kind of stuff that I
[03:05:17] you know,
[03:05:18] In one sense, you go like, oh, I've had HMR working in my client side framework forever, but have you had it in a place that it also works with your landing page of your marketing site?
[03:05:31] So, like...
[03:05:33] Astro is definitely...
[03:05:37] you know, well-deserved in terms of a lot of its...
[03:05:40] you know,
[03:05:41] kind of gain in here. People
[03:05:43] always come to me and, and like, you know, should I use that solid with Astro?  I'm like, yeah, probably it's, that's a good way to go, depending on what your use case is.
[03:05:54] But in a lot of cases, it's a great way to go.
[03:05:59] Thank you.
[03:06:01] Thank you.
[03:06:05] 3.4 was the release.  Okay, there we go.
[03:06:09] I'm on everyone's team.
[03:06:14] So,
[03:06:15] - Yeah.
[03:06:17] Yeah, I think...
[03:06:20] I, it's funny, I got so much spicy stuff to say about React and HTMX, I don't have much to say about Astra. I think the only thing that I'm going to...
[03:06:28] going to say about Astro, which is a little bit tricky here,
[03:06:34] Astro
[03:06:37] is...
[03:06:37] If I go back to my Scaladraw,
[03:06:42] Thank you.
[03:06:43] Thank you.
[03:06:47] Thank you.
[03:06:48] It's still in this red zone, even with view transition APIs.
[03:06:53] Right? Like no one's expecting Astro to be a client side framework.  It literally has no client side portion is literally purely in the server.  I'm saying Astro Islands.
[03:07:03] with view transition APIs still is in this zone, not the full zone.
[03:07:10] Um,
[03:07:12] And it's for the same reasons...
[03:07:15] that I was talking about with HTMX, right?  Client's persisted state,
[03:07:20] literally breaks hydration in frameworks.
[03:07:22] You can't render the next page and reference
[03:07:27] state that's been updated on the client when the server doesn't have it.
[03:07:30] This can even happen with lazy...
[03:07:33] Um...
[03:07:34] lazy hydration if you aren't waking things up via reactivity.  Like if you have islands and you say, "I'm going to wake that up later," and if the state that it depends on changes,
[03:07:43] Hydration won't match and it'll break.
[03:07:48] Thank you.
[03:07:49] But that's not the concern. Astro's assuming that the majority of the cases when you use Astro, the state is in that third zone, inside the component itself, the island itself, not...
[03:08:00] persistent on the server, not persistent on the client.
[03:08:03] majority is in the component itself. So it works in a very nice range and it's very happy there.
[03:08:10] The thing you have to understand about these
[03:08:13] partial solutions, even ones that can persist islands is
[03:08:17] Yeah.
[03:08:20] How?
[03:08:22] This is actually something I hit with solid, actually.  I was thinking about it as...
[03:08:26] It's actually very hard. HTML,
[03:08:30] is an output format.
[03:08:33] I have to put it like
[03:08:35] Think about when you...
[03:08:37] Maybe I can...
[03:08:38] Discord up on my computer and see what I... Give me two seconds. I'm going to pull out an example piece of code for you to look at and think about here.
[03:08:48] Consider
[03:08:50] Thank you.
[03:08:53] Consider this component.
[03:08:54] Okay, I'm going to just put it in a solid playground just so you can see it.
[03:08:57] Consider this component.
[03:08:59] This is a React component.
[03:09:01] Pretend it's a server component, I'm telling you it's a server component. And inside you have some data
[03:09:06] It comes with props and you're mapping over it.
[03:09:08] and you're setting a client key.
[03:09:10] In fact, you know what?
[03:09:13] I'm gonna make another one too. Consider
[03:09:16] Even this component.
[03:09:19] Amen.
[03:09:20] Thank you.
[03:09:23] If...
[03:09:26] The HTML that you get at the end,
[03:09:30] is not the same as the intermediate
[03:09:33] virtual DOM output that you get from something like React.
[03:09:36] What I mean by that is like,
[03:09:38] Obviously
[03:09:39] Um,
[03:09:41] Like,
[03:09:43] In a...
[03:09:44] Let's pretend this client component rendered to a span.
[03:09:47] And
[03:09:47] In one example,
[03:09:49] If show is false, you're just going to spam back.
[03:09:52] If a show is true, you get a div and a spam back.  Okay.  Okay.
[03:09:59] But when you only get the span back  or the client component back,
[03:10:03] The rendered HTML has no knowledge that this
[03:10:06] expression even exists.
[03:10:09] If this
[03:10:12] was client as well.
[03:10:17] How could it even hope to know the difference between these two?
[03:10:23] on an update.
[03:10:25] What I mean by that is like,
[03:10:29] unless they had an ID.
[03:10:32] Like a key, so to speak.
[03:10:35] When you're doing your HTML diff, if you initially just rendered client and then your update has client client, how does it know which of the two clients is the one that it should persist and which is the one that it should create new?
[03:10:51] Now, don't get me wrong, Astro has an ID mechanism where you can actually like say persist with an ID.  But I'm saying in the general case here,
[03:10:58] So
[03:11:00] HTML,
[03:11:02] loses this information.
[03:11:05] it doesn't know to resort existing items a list. It has to do non-keyed updates basically for everything. And this is true for
[03:11:13] any persisting HTML-based system.  I know a lot of the swap...
[03:11:17] things like TurboLynx or HTMX don't do diffing, right?  They just like swap panels, so it's easy.  But I just wanna kinda point out here,  this kind of an interesting side effect
[03:11:29] of this, the combination of both client state
[03:11:33] living
[03:11:34] in
[03:11:35] the browser and hydration basically breaking
[03:11:38] because server has isn't aware of it when it tries to render the next page.  And the fact that
[03:11:43] Um.
[03:11:45] HTML loses information. It's the same, like similar to like, I don't know if you ever seen people, I have talked about this before, experiments where people render, try not to do the double data, they try not to render that big blob of JSON on the bottom.
[03:12:00] and in HTML. Someone asked earlier, like, does any JavaScript framework send the JSON along the bottom of the page? And I said, like, every framework. Well, if I just pull out, like,
[03:12:10] our favorite Hacker News demo that's not
[03:12:13] That's not CSR.
[03:12:17] Right.
[03:12:18] you'll always see this big
[03:12:20] where is it script at the bottom that has all the data.
[03:12:24] And that same data will be rendered into
[03:12:28] the page, right? Like we'll find the same text multiple, like two times on the page.
[03:12:35] What's interesting...
[03:12:38] Is that
[03:12:40] Sorry, where was I?  Trying to think of my explanation.  I was talking about the diff, right?  What's interesting is that it's almost impossible  to avoid that in these hydration frameworks  because the final output in the HTML
[03:12:54] let's say it's a formatted date, you don't have the original date.  So if something changes the date,
[03:12:59] You need the original date, not the formatted date.
[03:13:02] It's lossy in the same way, Dom structure wise, HTML is lossy.
[03:13:08] Having these updates be non-keyed is probably...
[03:13:11] Okay?
[03:13:13] Potentially.
[03:13:14] But I just want kind of like
[03:13:17] just kind of pointing out there that
[03:13:19] the stuff that React Server Components does
[03:13:22] is not exactly
[03:13:24] equivalent to an HTML diff.
[03:13:29] And
[03:13:31] these kind of gaps...
[03:13:33] are kind of part of what makes server component solution um kind of compelling because it it does actually
[03:13:41] you know, deal with persisted client state automatically. It, you know, it,
[03:13:46] It does deal with the fact that the structures are, you know, it can do keyed updates.
[03:13:53] Thank you.
[03:13:55] Oh, big raid coming in right now.  So I got to switch to Twitch and see what's going on.  Oh, wow.  That's a lot of people.
[03:14:02] Um...
[03:14:04] Coding Garden must have just closed down.
[03:14:07] Wow.
[03:14:09] Thank you for joining my stream. I'm talking about JS frameworks.
[03:14:13] kind of talking about a year in a review, talking about where the frameworks are, talking about the technologies,
[03:14:20] So far we've talked about react.  We talked about HTMX and I'm just wrapping up here with Astro.  Um,
[03:14:27] But yeah, welcome everyone.
[03:14:32] Yeah.
[03:14:33] Yeah, no, a lot of spicy takes about HTMX.  Unfortunately, I still got a lot to cover,  so I can't get back to it.  But thank you very much for joining the stream.  What I'm doing is I'm going over a lot of the trends  in JavaScript frameworks.
[03:14:50] past year and going into 2024. And I'm going over each framework in what I call hype order,  which is the number of new GitHub stars.
[03:14:59] over the course of years. So that was Astro.
[03:15:02] Um...
[03:15:04] Do do do do do.
[03:15:06] I guess my biggest takeaway on the Astro side is I think it's going to continue doing what it does well.  And I think people are going to continue using it because it does fit a good majority case.  I think...
[03:15:18] there's I still I still think that there's this gap
[03:15:23] Um,
[03:15:24] in this zone.
[03:15:25] that is
[03:15:27] Like,
[03:15:28] only currently really supported, um,
[03:15:32] you know, by client side based frameworks.  Basically what I'm suggesting is this,
[03:15:37] happens before
[03:15:40] this and I'm not even sure if this ever happens.
[03:15:43] Not that it needs to, it's just interesting.
[03:15:45] Um,
[03:15:47] some of the kind of technical problems you have when you face when you work on these problems.
[03:15:53] If you've been doing PHP and Laravel, uh...
[03:16:01] *sniff*
[03:16:04] Yeah, yeah, it does help.
[03:16:07] Definitely.
[03:16:10] But some of the serialization cost isn't just over the wire.  It's actually the cost of serializing the data.  I don't know if you guys remember from a couple of years ago, I did a demo with Ryan Florence made some comment about streaming not mattering and islands not mattering.  I can't remember.  People are talking about it.  And I pulled up Marco and Remix on a large Hacker News page.
[03:16:30] And I did the, like, the...
[03:16:32] the web
[03:16:34] perf test page thing where they record the video of it loading.
[03:16:38] Um...
[03:16:39] And it was like, it was like a blowout.  Like Marco was, was like visible in two X, like two and a half seconds and like hydrated by like,
[03:16:52] three and a half seconds and remix like showed up at like
[03:16:56] nine seconds and was hydrated at like 14 seconds.  Like it wasn't even remotely close, exact same demo.  I built them both myself by hand using a specific data set.
[03:17:07] And yeah, that example was purely data serialization cost overhead, not the cost of actually
[03:17:14] necessarily sending it, though sending it would be a portion of it, but even the cost of actually serializing it would actually be considerable.
[03:17:22] I
[03:17:23] it's hard to say.  There's a niche need.  Wazim frameworks are good
[03:17:29] Yeah.
[03:17:29] It's...
[03:17:31] I think I can see why people would use a Wazom framework, but like,
[03:17:35] the fundamental like
[03:17:37] I know Greg from Leptos has been working at shrinking the stuff down, you know, like getting it into a reasonable range.  If that's the case, then we can probably.
[03:17:47] talk, but the biggest problem with walls and framers is that the upfront cost
[03:17:51] can never really compare to the JS frameworks.  Like update performance is not a problem.  Like they can update and
[03:17:57] for live site, perfect fine. It's just the actual
[03:17:59] like code, like the actual like, I built a site that I need to load a page, that overhead will be prohibited for a lot
[03:18:07] of types of sites. And don't get me wrong, you don't all need that, but it's ironic when the people building and choosing that probably do it because of like the
[03:18:16] better server-side rendering.  Like, if you just love Rust, go for it.  But if, like, if you care about the server rendering speed  and you're like, yeah, I'm going to deliver  the best experience from my customer...
[03:18:24] that they're kind of funnily at odds at
[03:18:27] with each other. You're almost...
[03:18:29] As I said, better to use a JavaScript framework on both sides.
[03:18:34] Thank you.
[03:18:35] So, yeah, that's my summary of Astro.  Lots of growth, lots of releases.  I'm very excited.  I think they're going to continue on this trajectory.  Astro is one of the greatest communities.  So, yeah.
[03:18:51] Who's next on my list?
[03:18:53] Okay.
[03:18:55] Next, what Nux is at 21. Let's go back to frameworks.
[03:18:58] It's felt.
[03:18:59] Let's talk about Svelte.
[03:19:00] Svelte is next on our list.
[03:19:02] Okay.
[03:19:05] It's felt
[03:19:07] on the hype meter was...
[03:19:10] had kind of taken a break for the last couple years. They wouldn't have been early, as early on my list. If you go back like
[03:19:17] 2022, 2023.
[03:19:19] Like a lot of us in the JavaScript framework world where we don't have many resources,  they spent two and a half years building a meta framework,
[03:19:26] So
[03:19:27] Yeah, Svelte was very quiet pretty much all of 2022.  They released SvelteKit like right in December.  I think it was like right at the end of 2022.
[03:19:37] 2023, Svelte bounced back completely.
[03:19:48] The streaming wasm.
[03:19:51] It helps.
[03:19:52] Sorry, just on a side note, it definitely helps.  And progressive enhancement.  If you use Lepdose, he has progressive enhancement and streaming, I believe.
[03:20:03] Um...
[03:20:04] That being said, uh,
[03:20:09] Mm-hmm.
[03:20:09] Like,
[03:20:10] You can also stream in... like...
[03:20:13] It
[03:20:15] So it's going to be a question of if it's good enough for your use case.
[03:20:23] People seem to...
[03:20:26] It's a different order of magnitude.
[03:20:29] difference. Like, even when I say that React is like
[03:20:33] 10 times slower than solid and server rendering.  And I think Leptos is 30 times faster than Reacts,  so another additional three or four times faster than solid  at server rendering.
[03:20:43] like,
[03:20:45] How long does it take to server render, at least the static part of the initial render of the page on a server?  We're talking like...
[03:20:52] 2-3 milliseconds.
[03:20:55] How long does it take to send crap over the network? We're talking in hundreds of milliseconds.
[03:21:00] Even if React is really slow compared to the other solutions and it takes like 20 or 30 milliseconds to render a page, it is like...
[03:21:07] 10 times less impactful than the difference you can make over the network.
[03:21:11] It matters if you have a lot of servers and it's going to be expensive and a lot of stuff hitting you.
[03:21:18] you know, like when you get to that scale,  I know everyone's been like drinking the Primogen juice or whatever.  Right. And he works on a large service like this.  I can respect that, but it's like,
[03:21:29] Bye.
[03:21:34] like the the difference you can impact
[03:21:37] over the network is going to trump the difference you can make on the CPU rendering on the server. It's not even close.
[03:21:48] Definitely. Definitely. I had a great conversation with a guy who was working on a real-time, uh,
[03:21:57] game dev stuff. We do. Part of the... and he was talking about like how they're encoding stuff, but part of the problem here, they should be worried about data on the wire and they should be worried about CPU speed of the devices you don't control, which is like people's phones.
[03:22:16] So just coming up with a super good encoding that's expensive to run on someone's device is not going to help you either.
[03:22:23] Um,
[03:22:24] Part of the reason partial hydration like islands is attractive and server components
[03:22:28] although maybe not React server components,  but the concept of this thing  is not just the partial execution of JavaScript,  which reduces the execution cost of JavaScript  and the size of JavaScript.  It also reduces the serialization size in theory.  It doesn't in RFC's case we've shown necessarily,  but in theory, it should be able to reduce  that serialization size and the amount of data required
[03:22:47] over the wire compared to traditional SSR.
[03:22:53] Because you don't need the hydrate at all, which means you don't need the data for it all.
[03:23:00] Thank you.
[03:23:02] Thank you.
[03:23:03] Thank you.
[03:23:05] Yes, I think this is a very attractive premise. As I wrote in that article I talked about a bit earlier about the JavaScript paradigm. I don't have it open anymore. It's very awkward that JavaScript is like the only way we can actually viably do this these days. There is a big benefit.
[03:23:20] for having the same language on both sides.
[03:23:27] Thank you.
[03:23:28] I think Lane seems to be a little bit more at the bottom of the top of the top of the top.
[03:23:37] Yeah.
[03:23:39] We should learn about makeshift and learn fast, change fast, and deliver fast.  I mean, there's that side too.  And some people...  So, like, people usually put those...  They think a lot of people...  Some...
[03:23:49] amount of people obviously not if you have a back-end house and you have all the stuff but  the reasonable amount of people think that like javascript and the ecosystem the dx around that  makes you ship faster so if you put both pieces together it gets even more compelling but i'm not  going to comment on that
[03:24:02] Thank you.
[03:24:05] Thank you.
[03:24:09] Thank you.
[03:24:12] - Oh, right.  So we were talking about Svelte.  This is why the stream is fun.  'Cause we just keep on going, Svelte.
[03:24:19] Um,
[03:24:20] What's the big headlines?
[03:24:21] Well, Spelkit...
[03:24:22] 1.0 came out right at the end of last year.
[03:24:25] But big thing happened this year was felt
[03:24:30] four and four.
[03:24:32] There's also SvelteKit too.
[03:24:34] But...
[03:24:36] It was a nominal change.  I think the adoption of SvelteKit speaks more than the stuff they added in SvelteKit 2.  I think the big key thing here is Svelte 4 was the first major release of Svelte in four years, basically.  And then they very quickly...  5 isn't out yet, but we need to talk about it.  They put the preview out.  5 is coming out...
[03:25:01] imminently, I think. Right? Svelte 5 isn't out yet, right? Just like, it could have been released yesterday and I wouldn't have known.
[03:25:10] Thank you.
[03:25:15] Yeah, it's not out yet. It's fine. But why is Svelte 5 exciting?
[03:25:22] Well,
[03:25:23] I'm gonna go back to my post here for a moment here.
[03:25:25] Uh, not that one, this one.
[03:25:28] .
[03:25:32] Here's another Theo tweet. "The current state of JS frameworks. Carsonization is example of a phenomenon called..." I don't know if this is intentional to play off my last name, even though that's an actual thing, but basically, why do JavaScript frameworks keep evolving into SolidJS?
[03:25:48] Essentially...
[03:25:50] Svelte 5 marks the adoption of Signals, and we talked about Signals
[03:25:57] Last year, Signals...
[03:26:00] kind of started popping up
[03:26:03] or 2022, right? Signals became a big deal, right? Solid obviously had them, but then Preact and Quick added them. Vue had them as well, to be fair too, sorry. Sorry.
[03:26:15] Sorry, Solid and View had them, but then Preact and Quick added them, and then
[03:26:19] the beginning of this year, Angular announced signals.  And I actually want to talk more about Angular when we get there.  So
[03:26:27] I will do the majority of the...
[03:26:31] Thank you.
[03:26:31] Thank you.
[03:26:32] But it's tricky. How do I talk about this in order? It doesn't matter. My point is,
[03:26:38] With Angular adopting signals...
[03:26:41] the whole conversation kind of blew wide open.  And then,
[03:26:46] Um,
[03:26:49] ruins for Svelte 5 basically change Svelte's reactive system to signals. And I think this is an important trend to understand for 2024 because
[03:26:57] It's not just about signals. Everyone's like, "Oh, what's the big deal? Signals, signals. They've been around forever, signals. I don't want to hear any more about signals." And...
[03:27:03] The truth of the matter is...
[03:27:07] It's not about having signals, it's about what you do with them.
[03:27:09] And that was why Solid...
[03:27:12] You know, signals of some form have been around forever. You know, as I mentioned, Vue didn't expose them as signals, but they have the reactivity. I think the API choice
[03:27:21] of bringing them out
[03:27:23] you know, is...
[03:27:25] an important part of the piece to have that
[03:27:27] that control, right?  And in that sense, we can say Solit pioneered that, right?  View didn't
[03:27:33] Like solid.
[03:27:35] I mean, it's hard to say. Knockout was first, but then Solid was published in 2018, very signals forward. Vue did not switch to being signals forward until like 2020 when they did the Composition API a couple of years later.
[03:27:51] Then shortly after we got Preact, Quick, you know, and the whole thing kind of cannonballs.  But the thing is you have to do something with those signals.  Otherwise, everyone would ignore them because we had them in Knockout and MobX.
[03:28:03] And that's fine-grained rendering.
[03:28:05] And.
[03:28:06] What's very exciting for Svelte is that Svelte 5
[03:28:11] not only has signals, but it basically...
[03:28:15] compiles to what solid compiles to.
[03:28:18] like it has that performant rendering that's made,  you know,  solid kind of,
[03:28:23] stand out for the last six years.
[03:28:27] That is the thing.
[03:28:29] I we were talking about wasm a minute ago, right?  And stuff like JS framework benchmark.  I think I had it in the old article.  Let me see if I can pop this out again.
[03:28:38] I shouldn't have closed it, open link in a new tab. What I meant is we talked about how
[03:28:43] Bye.
[03:28:44] Coming into...
[03:28:46] 2023, there was like
[03:28:48] Vanilla JS solid Wasm frameworks
[03:28:52] than like
[03:28:53] every other framework, you know, kind of fast ones like Svelte or
[03:28:57] view and then like preact and then finally react and angle in the mainstream ones kind of over here.
[03:29:04] This, what we're seeing right now is
[03:29:07] BrainWorks adopting signals so they can jump the gap
[03:29:11] get in front of the WASM frameworks.
[03:29:13] and join solid up here. Svelte 5,
[03:29:17] is up there.
[03:29:18] right next to solid.
[03:29:20] Um,
[03:29:21] And that's part of the trend here.
[03:29:25] Um,
[03:29:29] Thank you.
[03:29:30] You're right.
[03:29:31] Thank you.
[03:29:36] Thank you.
[03:29:38] So where I'm getting to here is that...
[03:29:43] Yeah.
[03:29:44] I'm very excited because Svelte got so much more interesting to me in this period of time, not because...
[03:29:55] The
[03:29:56] Signals and ruins
[03:29:58] like it's funny  some people will say
[03:30:00] It loses its feltness and I can get it because it honestly, I think people will feel that it, like when they use it, it feels a lot more like using solid rather than using Svelte for it.
[03:30:09] But,
[03:30:11] .
[03:30:11] What...
[03:30:12] is kind of cool about this whole thing is that like,
[03:30:17] go
[03:30:18] - this
[03:30:20] is like
[03:30:23] Okay. Better
[03:30:25] Performance.
[03:30:28] in the client.
[03:30:30] Secondly,
[03:30:31] smaller build output. This makes a difference. I don't know if you've ever seen
[03:30:36] this stuff before, but like,
[03:30:38] to do
[03:30:40] MVC size comparison
[03:30:44] Um,
[03:30:45] Okay, obviously I'm the author of this article, so take that with a grain of salt.  But it came from originally a comparison...
[03:30:55] Thank you.
[03:30:56] Thank you.
[03:31:04] - Right, like Svelte had this problem  where its compile output didn't scale very well.  Like Svelte was the smallest, right?  So here's Svelte, here's Solid, here's Preact.  But then as you added more components,
[03:31:15] Like basically by the time you hit five, Svelte was already bigger than solid in Preact.  And by the time you hit 80 components, like a large site,
[03:31:22] felt was considerably larger than even React.
[03:31:26] So like somewhere around 50 or 60 components felt...
[03:31:30] You can actually see it here. Svelte's almost caught up at 40 components.
[03:31:33] unique component instances. The curvature on code size for salt was very poor because they basically  put too much in the component code. They had no change management system. So again,
[03:31:47] Stalt.
[03:31:48] Five solves that as well. What else does Svelte 5 follow? Composition.
[03:31:53] You can now use the same reactive primitive everywhere,  not just in Svelte files, you know,  before they had these two things with stores, right?  Basically every gripe I've ever had about Svelte,
[03:32:04] they, they,
[03:32:05] they solved, essentially, with Svelte 5. Now, of course, I'd be biased, because, you know, that whole joke about now Svelte is solid. So obviously, if they made Svelte into solid, I would be happy with it. But like,
[03:32:18] Um...
[03:32:19] Thank you.
[03:32:20] Thank you.
[03:32:20] I think it's very exciting when you consider that.  Rich gave a recent talk, sold the superset HTML, and I think that's why I prefer writing  spells over other firms, because it lets me write websites how when you first learn  HTML and not write JS to produce HTML templates.  Yeah.
[03:32:36] Yeah, I think there's a certain thing where people like SFC formats and other people will swear by JSX because like,
[03:32:42] It's one of those transparency things. Because the truth of the matter is, Svelte's HTML is not actually HTML, right? Like,
[03:32:49] To do anything in Svelte, you actually have to be using a lot of JavaScript.  So Svelte hides that detail from you.  Or other people like JSX because it's closer to how the stuff actually gets constructed or updated.  So this is like that whole kind of mentality switch.  It's like if you know what's up.
[03:33:05] maybe this doesn't matter to you as much kind of scenario.
[03:33:09] So...
[03:33:11] It's one of those tricky ones because I actually really like Svelte's direction with the ruins in the dollar sign because it makes it clear when I'm not in JavaScript anymore.
[03:33:20] Olds felt...
[03:33:21] Like you wrote stuff that looked like JavaScript, but it wasn't JavaScript.
[03:33:24] Right.
[03:33:25] I think when it comes to templating and syntax stuff, like
[03:33:28] everybody's kind of you they're all kind of similar at I sometimes like posting if you follow me where like I compare some syntax pieces because like there's some things that felt or like you also do very well but there's some things they do very poorly around competition like try make your own four component in Svelte review it's much more awkward than doing it in like JSX and I think
[03:33:48] Like...
[03:33:49] I think there's like interesting trade-offs in this but I think people do have preferences and I think that aesthetic bit is something that Rich constantly nails because like he understands that kind of emotive feeling people have towards those kind of decisions.  I have to admit I don't get it.
[03:34:06] very much. I did a poll a few years ago and I was like, "Oh, what's the most important thing?" And  basically the answer that won the poll was things that are superficial.
[03:34:14] I know that's not what I wrote there, but that's what I was fishing for.  So I think that, like...
[03:34:20] Sh-
[03:34:21] I think there's part of the human developer psyche that's important to understand when designing a framework to kind of get there. I'm very much more concerned on mechanics, but I do think that Svelte 5 in pretty much every way is an improvement.
[03:34:40] Thank you.
[03:34:48] And for other people, the opposite is true.  They'll never be able to stomach it.
[03:34:53] Right.
[03:34:54] Right. So like it's I think Saul got like some attention initially because the like more than looking like React, the JSX.
[03:35:03] is something that people like. There's this feeling that you can just hold it in your hand
[03:35:08] It's funny, I had that in a playground before I put these server component comparisons in here, and I was talking about like HTMX.
[03:35:14] Oh yeah, oops.
[03:35:16] Oh, let's put a timer in there.
[03:35:19] I mean, whatever.
[03:35:21] This is a div you can hold in your hand.
[03:35:26] Nothing feels lower on the abstraction tree really than a div you can hold in your hand.
[03:35:32] Right.
[03:35:36] So like  Yeah
[03:35:44] Right, so I think we're never going to have... this is why I actually don't... the number one reason I  don't focus on the syntax stuff is while it's important and I think it helps a lot with adoption,  especially with learning and beginners,
[03:35:57] It's literally the thing that I don't like, we'll never agree on.  Like you could, people swore by the BDOM.  People swore on, you know, the different technical approaches, like Svelte compile away components  and all that stuff.
[03:36:09] Now everyone's going towards signals and fine-grained rendering like solid, but the thing that stays the same or
[03:36:14] doesn't converge is this UI DSL thing. People will never agree on that piece.
[03:36:21] They might all be compiling to solid under the hood.
[03:36:24] But they'll, you know, and for me, that's why I'm like, I'm not touching that with a 10 foot pole.  Like, it's fine.  There's single file components.  Yeah.
[03:36:32] libraries for solid you can like write stuff that looks like svelte and then  get solid out i mean you don't need to do that now because svelte
[03:36:39] Five is basically that, but like we've had that for years.  I've never officially sanctioned them because like, honestly, that's a piece I know I will never win.
[03:36:48] people have opinions like there's no winning or like having edge is a better term.  It's not about winning, it's about having an edge.
[03:36:57] on that side.
[03:36:59] So like,
[03:37:02] Yeah, I can like React. I can hide behind philosophies and stuff. But I'm like, that's why I like div or this isn't even a div anymore. It changes to H1, but you get what I mean.
[03:37:17] It's a lot to maintain and then you're responsible for it and then you fragment the ecosystem.  It's kind of dangerous.
[03:37:25] uh
[03:37:26] I felt comfortable with this because like with solid's approach of primitives and this,
[03:37:31] Anyone who wants a DSL can go make it.
[03:37:33] You can go find DSLs out there and use those.
[03:37:39] Thank you.
[03:37:39] because you start from the fundamentals, but like
[03:37:42] Supporting yourself is more work than I have time for.  I have a whole stream about that.  If you're interested in the work of managing your own DSL,  which is insane work to do,  you can watch my stream with Marcos Dillon,
[03:38:00] where he literally goes through all the things you have to maintain to maintain your own language. Marco has arguably the nicest
[03:38:09] It's the smallest, it's the most performant, the smartest language, pretty much.
[03:38:15] ever designed for a JavaScript UI framework,
[03:38:17] I like using Marco sometimes because the small guys go, I prefer writing less code.  I'm like, you can't beat Marco. Sorry, guys. Marco always wins.
[03:38:26] But this is why you don't do this.
[03:38:29] if you don't really believe in it, like you want to commit.
[03:38:33] Go for it. Check it out sometime.
[03:38:35] strongly
[03:38:37] strongly recommend this one.
[03:38:41] Thank you.
[03:38:44] Yeah, it could have been. And it's kind of funny because
[03:38:48] I think this is why Dominic was excited.
[03:38:51] I was trying to get Dominic to work with us, I think mentioned,  but I couldn't pay him.
[03:38:57] And he joined the Svelte team and he ended up just,
[03:39:00] You know what I mean?
[03:39:02] Eh...
[03:39:03] It is what it is.
[03:39:07] Thank you.
[03:39:09] Thank you.
[03:39:09] Thank you.
[03:39:12] I agree, but it's not even close. The reason why a lot of new frameworks to start with JSX, you can literally make the JSX DSL work for you over a weekend.
[03:39:22] um single file component dsl you know with all the tooling and everything will probably take you and  get typescript working will take you like it's supposed to be your first goal probably take you  about a year
[03:39:33] Like it's, it's, it's, it's just not even, it's not even close.
[03:39:40] Thank you.
[03:39:43] Thank you.
[03:39:44] I'm not worried about the analysis. I'm worried about the, for me, the reason I don't like template literals is
[03:39:50] for my purposes was that
[03:39:52] Um,
[03:39:53] they
[03:39:55] they have a runtime semantic.
[03:39:57] like they have an expectation that you can just use them in the browser and they work.
[03:40:00] And I wanted to do more with the compiler than I could do with that. I need to analyze the holes, not just the static parts. And with tag template literals, if you change that behavior, it'd be really weird, like to have them like not work at runtime and only compiled.
[03:40:20] Yeah, I mean, this is part of that signals conversation, which I'll get to when I talk about Angular. I'm going to save the signals conversation to Angular because I feel even though there is a bit here, it's less about Svelte adopting signals, even though that means we're in another, you know, before I was saying VEAT, everyone but next, signals is like everyone but React.
[03:40:42] Um,
[03:40:45] But we're kind of like in a zone right now where
[03:40:50] Uh...
[03:40:51] It's not just about
[03:40:54] adopting signals, which is what I was trying to get at. It's about
[03:40:58] It's about what you do with them.  And Svelte 5 is very...
[03:41:02] exciting.
[03:41:04] Thank you.
[03:41:04] So
[03:41:06] I imagine...
[03:41:09] that we're going to, that's the big one for Svelte rolling out this year.  They might have more stuff that I'm not aware of.
[03:41:15] I know, for example, I missed this on Astro. Astro is releasing something pretty big coming up as well. Some kind of thing, like service they're offering. But I'm talking pure technology here. And Svelte 5 is a...
[03:41:28] absolute game changer.
[03:41:31] Right.
[03:41:33] So, I don't know. Svelte 5... some people might have dismissed Svelte prematurely because of the language stuff.
[03:41:40] Come back and look at Svelte 5. Honestly, like...
[03:41:44] It is...
[03:41:45] they've addressed a lot of the stuff.
[03:41:49] Thank you.
[03:41:50] Okay, let's keep on going. Who's after Svelte?
[03:41:54] Million. Okay, let's talk about Million.js.
[03:41:56] Very good year for million JS.
[03:41:59] For those who aren't aware of Million,
[03:42:03] Million is a...
[03:42:06] JavaScript framework.
[03:42:08] Mm-hmm.
[03:42:09] But it actually started its life as just an optimizer for React.
[03:42:15] Essentially...
[03:42:16] Aiden applied a lot of the same optimizations that we do use with signals.
[03:42:20] Um,
[03:42:22] to
[03:42:24] React templates. There's basically two types of optimizations that Solid does that made it really unique as a renderer. One of the optimizations we did was fine grained updates, not component level.
[03:42:33] reduce the cost of components compared to other reactive libraries, and at the same time reduce the cost of reruns compared to VDOM libraries.
[03:42:41] But the other thing we did was template optimization, where we cloned templates.
[03:42:47] Okay.
[03:42:48] And
[03:42:48] and essentially do them in blocks.
[03:42:51] and then kind of go in and then attach the reactive pieces.
[03:42:57] And Svelte 5 has the same optimization in it.  Million was like, what if we took that approach to VDOM?  What if we...
[03:43:04] block the, instead of having multiple VDON nodes, just make a big like HTML block and just treat it as a single node essentially.  Could we improve the performance of React? Well, as it turns out,
[03:43:14] The answer to that is a resounding yes.
[03:43:17] JS Framework Benchmark, for example, which we've already been looking at,
[03:43:21] Million, I think, even jumped out in front of Solid or any of the...
[03:43:27] Yeah, yeah.
[03:43:28] Yeah, it's the fast. Yeah. These, these are all block VDOM libraries in this benchmark. They're,  they're actually ahead of the reactive libraries here. Um, as I said, they're almost all tied at  the same score, but the, the, the blocked libraries are like fractions, um, faster in  this venture. The reason is that they have better memory, um, release timing. It's not  about allocation. It's about memory, uh, garbage collection, um, because they don't,
[03:43:55] allocate as much like reactive nodes.  So they have a slight advantage on memory.  They have a slight disadvantage, I think, on
[03:44:08] No, they're actually pretty in line across the board.  So it's just the memory allocation for the signals.  The thing is this benchmark won't capture is that
[03:44:16] Thank you.
[03:44:18] this benchmark won't
[03:44:19] leverage the fact that the partial updates to signals actually have
[03:44:22] benefits when you consider
[03:44:24] Like,
[03:44:25] not just cloning a single template, so to speak. So this kind of gets buried here.
[03:44:32] often when
[03:44:34] when like when you ask Aiden if he was going to make a full JavaScript framework,  he's like, I would have just created solid. Um, so, uh,
[03:44:44] There is that to kind of keep in mind, but he he he part is he's figured out how to make react.
[03:44:52] at least on the leaf nodes, more performant. And anyone who can make React more performant gets a lot
[03:45:00] of attention.
[03:45:03] Because, like, let's face it.
[03:45:05] Lots of React users.  I already talked about that before being a big thing.  So Million has had quite the year.
[03:45:13] I had Aiden on stream  and we kind of talked about this
[03:45:17] My prediction,
[03:45:19] I mean, it's not even a hard prediction. React for Git is not going to outperform million.js, not even close.
[03:45:26] But that's because they're trying to add different things.
[03:45:31] Thank you.
[03:45:33] Okay.
[03:45:34] Thank you.
[03:45:35] Thank you.
[03:45:40] That's his.  Now almost as good as Marco  if you ignore partialization. Yeah, the cross-file  analysis of Marco is kind of
[03:45:49] It's kind of like a different level.
[03:45:52] Yeah.
[03:45:55] But that's on you.  You can always turn off my stream.
[03:46:01] Sorry, I have so little...
[03:46:03] Um,
[03:46:04] sympathy for the fatigue thing.
[03:46:07] Thank you.
[03:46:09] I understand that there's a paralysis consideration, but honestly...
[03:46:19] There's an easy answer to your solution.
[03:46:22] Use React.
[03:46:24] We already talked about it.
[03:46:26] Um,
[03:46:27] Just use React.
[03:46:29] I know I want to change that trend, but as long as people are in a zone where there's  like too much going on, then like, that's where we're going to be.
[03:46:41] Yeah, I mean, we actually even measured million versus concurrent rendering, and million was killing concurrent rendering, too. It was fun, because...
[03:46:50] These things...
[03:46:52] Yeah, like...
[03:46:55] We'll see, but my wager is that Million...  The thing is, Million doesn't handle the state situation, so like...
[03:47:04] In a benchmark, million will always win. In reality, I'm not actually sure. It's more complicated when you consider state propagation. Million just optimizes the pure rendering side of things.
[03:47:14] But...
[03:47:16] Yeah.
[03:47:20] Thank you.
[03:47:21] But yeah.
[03:47:23] you
[03:47:29] Thank you.
[03:47:34] so like I don't know I don't have a ton more to say about million I just wanted to kind of give
[03:47:40] Aiden a shout out.  Kids brilliant.  And,  um,  like,  um,
[03:47:45] He well deserved in getting the hype.
[03:47:49] this year, because if you look at it, millions showed up even ahead of view.
[03:47:54] and Angular and obviously solid and quick.  I'll talk about those in a few minutes,  but let's keep on going.
[03:47:59] There isn't much more to say.
[03:48:02] The only thing I want to add about Million is...
[03:48:05] Aiden got some money to do some...
[03:48:09] some, uh...
[03:48:12] do more work with million. And he put up, he's been working on like having a performance optimizing,
[03:48:19] AI. So this is what I was talking about AI being more prevalent coming into this year. Last year, not much, you know, some code gen, maybe some UI stuff. This is kind of interesting, right? This is a very cute video. It's not letting me go full screen here, but...
[03:48:34] Yeah, so you probably can't see it very clearly.
[03:48:37] Why is this slow?
[03:48:41] Yeah.
[03:48:43] The markdown component is likely being re-rendered unnecessarily each time TaskView component updates.
[03:48:48] which can be inefficient if the markdown content doesn't think.  And it actually shows the code change. Basically,
[03:48:52] His whole thing here is like
[03:48:55] He's making AI that you can ask why your React app is slow and it should help you fix your React app's performance.
[03:49:02] I think this is...
[03:49:06] really interesting space.
[03:49:08] I...
[03:49:11] I mean, I ironically say that, like, you know, the answer is because it re-renders.
[03:49:17] But I do think he is doing interesting work.  So...
[03:49:23] Big props to him and what he's accomplished already with Million.
[03:49:30] This was their release year, so they had a really good boom, but already at almost 14,000 stars on GitHub, so good on them.
[03:49:41] Thank you.
[03:49:45] Thank you.
[03:49:47] Thank you.
[03:49:49] Okay. Okay, so let's continue. What's next on the list? Let's talk Vue. Vue, I got a comment on Twitter, which is fair. Um...
[03:49:59] After I released my article, um...
[03:50:02] this article that we're reading right now.
[03:50:04] Uh,
[03:50:06] There was a comment that was along the lines, "Quite interesting that you don't even mention Nuxt, as SolidStart uses Nitro, which is born from Nuxt."
[03:50:13] And yeah, I have a terrible...
[03:50:19] tendency to kind of like ignore view a lot of times.
[03:50:23] Because I focus on unstable software, and if you've seen anything,
[03:50:30] view
[03:50:31] ecosystem stuff, they're all about  what makes the developer happy.  See, if Svelte, historically, was about  how...
[03:50:39] Do I make this as
[03:50:40] easy as possible.
[03:50:42] Svelte's always the winning, it's the easy framework.
[03:50:45] Vue is like...
[03:50:48] the comfortable framework.
[03:50:51] How do I make you most comfortable? It's not necessarily easy. It's easy most of the time, but I'm going to focus on making like
[03:50:58] you comfortable, so to speak. And I, so I, I was, I was actually like fishing a bit, trying to figure out like,
[03:51:03] What do I want to talk about Vue this year because
[03:51:07] First of all,
[03:51:08] I wanted to talk about Vapor, but Vapor's not out yet,  but coming up it should be.  Vapor is Vue's version of Svelte 5, or SolidJS,  depending on what you call it.  They also showed a benchmark part where the year,  where again, Vue jumped that gap, like we just talked about.  So Vue, with Vapor, will have...
[03:51:24] another framework with a solid like renderer. So it's not just about having the signals,  it's about doing the performant rendering, you know, so views there. But what
[03:51:32] You know, that's what I'm looking forward to for the future.  What did you do this year?
[03:51:37] Well, as it turned out, they released two minor versions, version 3.3
[03:51:42] and version 3.4.
[03:51:44] And the headline for each of them
[03:51:47] Well, 3.3
[03:51:49] Script Setup.
[03:51:51] Which was a nicer way to...
[03:51:53] initiate your components in your single file components and 3.4
[03:51:57] was the improved template build speeds.
[03:52:02] and some other quality of life things. Basically,
[03:52:05] If you follow what I'm getting at is this is stuff that I would never, ever cover on one of my streams or really talk about much because I...
[03:52:12] don't care how fast your build is, you know, someone else works on it. And again,
[03:52:18] I'm appreciated of that someone else because
[03:52:21] what the whole ecosystem now, especially Remix, is on VEAT.
[03:52:25] Again, from the Vue community.
[03:52:28] I'm not worrying about deployment adapters and winterCG and async local storage gate.
[03:52:35] Because...
[03:52:36] I'm Nitro.
[03:52:37] and Un.js's amazing ability to polyfill across these environments.
[03:52:43] So really important work.
[03:52:46] Um,
[03:52:47] that I depend on every single day.
[03:52:52] So...
[03:52:53] I'm very happy for the Vue community and the individuals who do the work around it because they build...
[03:53:00] amazingly
[03:53:01] fast things that make developers happy.
[03:53:04] That's the way I'm going to put it.
[03:53:09] Thank you.
[03:53:12] Right? Developers happy.
[03:53:14] Thank you.
[03:53:15] Thank you.
[03:53:16] the easiest
[03:53:18] framework.
[03:53:20] Right.
[03:53:24] - Okay.
[03:53:25] But,
[03:53:26] As I said, this is just not a zone that I have much to comment on because...
[03:53:33] the Vue community is already doing such a good job.
[03:53:36] So, um,
[03:53:38] Yeah.
[03:53:40] I should admit, like...
[03:53:42] Nuxt 3, I think, finally officially came out this year.
[03:53:47] because they were on beta. When's the next 3 release? When was the official stable release?
[03:53:52] Oh, no, it came out right at the end of 2022.
[03:53:57] NUX4 is coming very soon.
[03:54:01] I know Nuxt added like their version of server components, which got my attention when I said, no, those aren't server components, those are lakes.
[03:54:08] But actually, unfortunately,
[03:54:09] don't actually know anything
[03:54:12] Beyond that, I know it's it's a
[03:54:16] uh let's see here next is there next 3.1 i just i want to make sure i remedy this a little bit
[03:54:24] Okay.
[03:54:27] and see January 30th.
[03:54:32] Let's look, do I have Nuxt release notes?
[03:54:37] Thank you.
[03:54:40] This is Nuxt 2 release notes.
[03:54:44] Alright.
[03:54:47] Thank you.
[03:54:49] Thank you.
[03:54:50] It's fine. I'm not going to look too much forward. The biggest thing is Nuxt has always impressed me with the ease of use stuff like automatic imports, and they continue to improve...
[03:55:03] Especially, as I said, evident through stuff
[03:55:05] exposed through Nitro, that kind of core stability in such a way that everyone can use. It's incredibly admirable of Nuxt and the Vue community in general. But...
[03:55:18] It's the headlines in terms of tech that I always chase.  So unfortunately, I don't have much more to add to view.  I'm very, very excited to see how Vapor impacts the ecosystem.
[03:55:27] Um...
[03:55:29] Thank you.
[03:55:29] Good.
[03:55:30] But...
[03:55:31] you know, there's kind of gaps and...
[03:55:34] busy years and I think today I think I think this was like 2023 for Vue was just like a holder steady kind of year versus like Svelte where it's like finally like here's all the stuff getting unleashed out and to be fair when we get to a few other frameworks it was also hold holder steady as well.
[03:55:51] so to speak.
[03:55:59] That is a hot take. I don't know if people would agree with that.
[03:56:05] Yeah, Nuxt dev tools. Yeah, you're right. They had those really cool dev tools where you could inspect the code and the UI and it would show up in the code.
[03:56:15] Again, make developers happy.  Like this kind of stuff is really cool, what they've been able to, you know, accomplish,  like being able to like look at your site.
[03:56:26] like let's not stop with HMR, let's actually be able to like inspect a piece here and then have  it actually take you straight to the code.
[03:56:35] Thank you.
[03:56:36] They're on 3.9? Yeah.
[03:56:39] Yeah. Yeah. I,
[03:56:41] Yeah.
[03:56:42] I want to give a shout out to because Nux, sorry, one of the more, one of the template optimizations I added ended up adding to solid more recently.  It's not, it's a size optimization.  It's not a performance optimization.  I actually got by seeing Evan's keynote on Vapor.  He showed off reducing the HTML template size and we implemented it in solid this year.  So that was very cool kind of back coming from Vapor.  He, I noticed he wasn't using closing tags.
[03:57:11] And we added that optimization, I think, a solid 1.7%.
[03:57:15] So, yeah.  All right.  Um...
[03:57:17] next framework on the list.
[03:57:20] Um...
[03:57:24] We talked about view.
[03:57:26] And noxed.
[03:57:28] Quix 13.8, so that's not right.
[03:57:32] Oh, interesting. Quick and Quick City actually...
[03:57:35] I have different numbers, I was wrong. Anyways, next framework is Angular. Let's talk Angular.
[03:57:41] Does anyone care about Angular? No, I...
[03:57:44] I think...
[03:57:45] Angular has had quite a year. This was a Svelte year. This was an Angular year as well.
[03:57:53] And
[03:57:56] For me,
[03:57:58] It started really subtly, but Angular has kind of
[03:58:03] really come back. And I think
[03:58:05] It's not...
[03:58:06] It's not because they're gaining ground against React or anything like that.
[03:58:12] It's that their developers...
[03:58:18] are just...
[03:58:20] feel like they're getting hurt again. Angular spent its head down, they were working on Ivy, they were working on all this stuff, and
[03:58:26] And essentially, some of the people are like,
[03:58:29] Felt like
[03:58:30] They're happy with it. And I went to an Angular conference a couple years ago. I was surprised at the positive attitude compared to when I had been to a few React conferences during that time period.
[03:58:42] But
[03:58:43] it's a whole other thing when you kind of feel like that the team is really putting that love out there.
[03:58:51] So
[03:58:54] The be fair, Angular had SSR, they just didn't have hydration.  They called it destructive hydration, but it was really just like...
[03:59:00] I server render now I client render.
[03:59:02] But yes, let's see.
[03:59:06] They use the term non-
[03:59:08] non-destructive
[03:59:11] Hydration. This is the question.
[03:59:17] Thank you.
[03:59:19] Thank you.
[03:59:20] See, they're the only ones who use the term non-destructive hydration, because let's face it, destructive hydration is not even hydration. It's not even a real thing. But this is how you can find it that's Angular.
[03:59:30] Um,
[03:59:32] It looks like they released it this year in April.
[03:59:35] So they, they, they, Angular now has hydration.
[03:59:39] you
[03:59:40] Um,
[03:59:43] But essentially...
[03:59:47] Yeah, I mean, we could summarize stuff.
[03:59:50] pretty quickly here with the Renaissance. Okay.
[03:59:53] For me, it started with self-closing tags.
[03:59:56] Which was the end of last year.
[03:59:57] I know this seems silly because everyone has
[04:00:00] self-closing tags.
[04:00:01] But like,
[04:00:02] Angular, for some reason, because of the HTML spec and stuff, didn't have self-closing tags allowed in templating.
[04:00:08] which is, you know, crazy to people.  I remember people making jokes about it when they released it.  But this was a sign of things to come.
[04:00:16] Then, signals.
[04:00:20] They really were the tipping point.  A lot of frameworks already moved to signals by this point,  but Angular signals was a big...
[04:00:28] motion that this, like these things were, you know, times were a changing. Um,
[04:00:34] So
[04:00:37] Today we are open to their first PR. We're very open to the community. I worked a lot with Alex and Pavel on this. Amazing guys. I love every time I sit down with them and also jad them from Wiz and get into the depths with signals.
[04:00:52] They really got into this.  They were on stream with me at the beginning of the year in 2023.  Great stream to watch if you care about the details of that.  They got the old React team out of the woodwork,  like Pete Hunt and Jordan Walk coming into diss signals, which was like,
[04:01:10] I couldn't do that on my own.  I couldn't ask for that publicity.  I wrote...
[04:01:15] One of my favorite articles of all time, which is the
[04:01:19] my perspective of the React versus Signals, it was a, it was, you know, it's pretty,
[04:01:30] Thank you.
[04:01:31] Yeah.
[04:01:34] Yeah.
[04:01:36] So funny, actually, uh...
[04:01:38] Yeah, Michael doing his parody of this was just too funny.
[04:01:43] Um, anyway, I, I, uh,
[04:01:47] I think...
[04:01:48] that
[04:01:50] Funnily enough, I don't think 2023 was the year of signals.  I think 2024 is the actual year of signals, even
[04:01:57] even in this case, because
[04:02:00] Oh, I...
[04:02:02] Where did I go?
[04:02:04] I closed my article. I'm so silly.
[04:02:07] Step two.
[04:02:09] Thank you.
[04:02:09] Thank you.
[04:02:12] It's
[04:02:16] Thank you.
[04:02:18] It's basically...
[04:02:21] It's not just, as I said, people adopting it.  It's because...
[04:02:25] And actually the Angular guys said the exact same thing.
[04:02:30] When you now have every JavaScript framework except React using signals, adopting fine-grained rendering, understanding the patterns, there's no way this doesn't get attention. And one of the big ones here is...
[04:02:44] Basically...
[04:02:45] There are representatives from every JavaScript framework sitting in a TC39 group meeting almost every Tuesday. I miss a few of them because I have to drop my kids off at school to talk about bringing signals into as a browser spec. It has not been released yet. So, you know, to the public so that people can like comment on it yet, but there is a reference implementation and we're testing ideas and kind of agreeing on stuff. This is...
[04:03:09] This is going to continue to be a topic.  As I said, standardization is probably going to take...
[04:03:13] a while.
[04:03:14] But I think that it is very exciting to see this kind of progress.
[04:03:24] Um,
[04:03:26] We've been talking, you know, it takes a while. We've been talking since September, I guess. Dominic kind of triggered this originally from Svelte when he was like on Twitter trying to like stir things up. Actually, before he even joined Svelte team, he was kind of like hot on it when he first made Octane, which was like his like React signals kind of implementation. Like what would forget look like if it was implemented with signals? And then those guys, you know, after Angular announced and then like,
[04:03:55] People kind of, they want to see this happen.  Um...
[04:03:59] Milo is probably doing most of the representation for Solid. In these conversations I've been busy working on Start, but
[04:04:06] Yeah, there's key people from, you know...
[04:04:11] you know, from the different frameworks all sitting there. We even have like, uh, people Ember, like
[04:04:17] We've been last to his RxJS, not even the signal side.  Like this, this is a, this is quite a group.  And.
[04:04:24] Things are looking pretty positive, so I am pretty excited about this.
[04:04:29] Yeah, they're trying to propose  the DOM spec.
[04:04:32] But I think people are kind of, I don't know if this will ever work, but people are kind  of excited for the potential signals there, like just have this reactive kind of DOM thing.  I honestly think because of side effects and DOM is side effects that this is,
[04:04:45] kind of fundamentally at odds with things but who knows well maybe eventually um
[04:04:51] Yes, Rx is trying to, Rx style observables are trying to get in through that. I think there's  a reason why people are hesitant on bringing reactive pronouns into the language.
[04:05:01] But there is definitely a feel that's a gap.
[04:05:04] I am a bit worried that this is a bit trendy, like, yeah, sure.
[04:05:09] It's kind of like bringing JSX into the browser.  It's like, you know, 10 years ago, everyone was like,  "Yeah, we need a VDOM."  You know, React did it, and then like by 14,  everyone went to VDOM.  Signals seem to be equally overhyped right now.
[04:05:21] Um,
[04:05:23] But, you know...
[04:05:25] We'll see.
[04:05:26] Can't be worse than web components, right? Famous last words.
[04:05:35] *cough*
[04:05:41] I don't know if it'll have a significant performance. It might. That is the attractive part because the dependency graph can be resolved through the C plus layer or the underlying thing. But what I'm excited about is the potential for things like dev tools. Like, what if we all have the same signals implementation? What if we could track...
[04:06:01] through dependencies rather than code execution.  Like we could actually go like, oh,
[04:06:05] You know how you have async await and you can actually see the async await path in the debugger?  So like you can go, okay, I'm in this code after the await, but you know, like before Chrome added that it was hard, but now you can like actually see.
[04:06:17] like what you can follow the whole async thread.  Picture if you can follow the whole dependency thread,  like this is updating 'cause this updated, you know,  'cause this updated.  And you could actually see that in debug tools.  That would be amazing if the browser, like,  we all have signals so we can all just kind of look and go,  "Oh yeah, it's just a signal."  So we can see this dependency track update.  Like, that would be huge.
[04:06:40] Thank you.
[04:06:41] Not an initial proposal. I think that's dangerous. I very much vied against it. I don't want it to have to do with DOM. It'd be the worst if, like, because there's a temptation, but, like, mechanisms like suspense and that involve our ability to schedule, and I think it's important that we don't just, like,
[04:07:01] try and force it into prematurely.
[04:07:04] So we're not trying that with the TC39 spec right now.
[04:07:11] Yeah, I don't think so, if that makes any sense.
[04:07:20] Yeah, proxies are proxies.
[04:07:24] Like,
[04:07:25] Right now we are literally just focusing on the signal primitive and
[04:07:29] the drive signal or memo or computer, whatever you call it, primitive,  with the acknowledgement that we need a solution for effects as well.
[04:07:36] Thank you.
[04:07:37] But you can you can understand why people yeah, like I mean this local surf you can picture like in any of the dom  Maybe I saw people be excited about it because picture if you could just like go I
[04:07:46] Like what I showed here.  Sorry, where is it?  What if you could just go like...
[04:07:51] instead of the declarative, but just be like, you know, create element this.
[04:07:55] Text node equals...
[04:07:57] signal
[04:07:59] Like what, like,
[04:08:01] And then you could just, like...
[04:08:03] You could do this.  That would be pretty crazy.
[04:08:07] My main goal is not that I even care about them interopting with each other in terms of, you know, a lot of people care about like the API interface. I don't care about that. I think we all have our different needs. I think it's challenging because I think that.
[04:08:21] we need internals exposed to fully leverage them,  but they're also not what we want to expose to the end developer,  generally speaking.  So like...
[04:08:30] any standard thing wouldn't really
[04:08:32] It could be end user...
[04:08:34] usable, but I don't really want to expose it to them. My interest is, as I said,
[04:08:39] having
[04:08:40] the graph.
[04:08:42] be knowable in a consistent way in the browser so that tooling could work.
[04:08:47] I don't like building tooling, if you've noticed.
[04:08:50] Like,
[04:08:50] Thank you.
[04:08:51] I like solving complicated mechanical problems.
[04:08:58] I'll leave the tool building to the Vue community.
[04:09:07] Thank you.
[04:09:11] Thank you.
[04:09:12] Yes, either we have to schedule
[04:09:17] either there will be a schedule piece...
[04:09:20] And, uh,
[04:09:21] I think that this is the part where there's little details, but generally the effects...
[04:09:26] are the only scheduled part.
[04:09:28] So you will have the ability to schedule when effects run because the computers are all lazy, they're pulled. So you have, we should have the ability to like schedule when they actually grab the value.
[04:09:40] - Thank you.
[04:09:41] Yeah, there'll be more details and the spec kind of like thrown out.  But yeah, this is a very exciting update.
[04:09:50] And I think it's
[04:09:53] It's definitely
[04:09:56] why signals like signals have a lot of momentum behind them right now.
[04:10:03] There we are.
[04:10:10] All right, let's continue on.
[04:10:14] We were talking about Angular, right? That was the signals part of Angular.
[04:10:18] Um...
[04:10:21] They got hydration.
[04:10:23] That's exciting.
[04:10:26] They got new control flow.
[04:10:30] You know what? I'm just going to pop up Angular 17...
[04:10:35] release announcement because it came out in November.
[04:10:42] Their new control flow instead of this ng-template stuff is more like...
[04:10:48] Svelte, essentially.  I think it's interesting.  I think language-specific DSLs,
[04:10:54] have composability concerns.
[04:10:57] But on the other hand,
[04:10:59] Thank you.
[04:11:00] I definitely like using Svelte's templating more than, say, Angular views.  So, like...
[04:11:06] That's kind of cool.
[04:11:07] Um...
[04:11:09] And the big thing here is they've actually improved the performance.  This is Angular 17, not like signals or anything.
[04:11:17] Plane Angular 17 is in...
[04:11:21] view svelte
[04:11:24] performance territory.
[04:11:26] Just like straight up
[04:11:28] They've jumped, they've been lockstep with React for years.  Now they're caught up to, like, Vue and Svelte.  Ironically, Vue and Svelte are about to jump,
[04:11:37] up to solid
[04:11:38] but like this  this is still very significant here
[04:11:45] Um,
[04:11:46] there's going to be a time period,  I think where,  where,
[04:11:49] most
[04:11:50] JavaScript frameworks are going to like React is going to be in a performance category all of its own, like not in a good way.
[04:11:57] Um...
[04:11:58] I
[04:12:00] To be fair, this benchmark only has a very simplistic thing.  If you remember my stream with Dominic Ganaway, he was saying that
[04:12:09] Inferno and React for Meta's codebase made a very...
[04:12:15] insignificant difference. The startup was slightly better, but it didn't actually help them very much. So to be fair, this benchmark is not everything, but
[04:12:24] It's still nice to see this kind of consideration
[04:12:26] being taken by the Angular team.  So like...
[04:12:29] This is, you know, this is, you know, much better performance, like hugely better performance.
[04:12:36] Um...
[04:12:39] you know,
[04:12:40] even before the control flow change,
[04:12:43] which is only like 10% here, Angular is in like the 180s.
[04:12:48] 176, 180s range. So like
[04:12:51] I said it when Vue 3 came out, that it's not often you see a major framework make that kind of jump.
[04:12:58] I can't say that anymore because Angular just made the same kind of jump.
[04:13:03] Very similar to the Vue 2 to Vue 3 performance jump.
[04:13:06] It's quite impressive.
[04:13:08] Anyway.
[04:13:09] I think that's all I want to say about Angular.
[04:13:14] They had a good year, brought them back in the conversation, which is quite, quite impressive.
[04:13:20] All right.
[04:13:22] All right, where are we at next?  I think we're at solid.
[04:13:29] Classically, I'd say Svelte was the easiest framework.  Not even close.  Vue used to be the easiest framework, especially for beginners.  And they kind of...
[04:13:40] they lost some ground to Svelte.  And you could tell they were kind of jealous for a bit.  And they were working on like syntax,  trying to match with Svelte.  And then they,
[04:13:46] smartly, I think, step back from it.
[04:13:48] And ironically, Svelte 5 syntax resembles...
[04:13:54] what Vue was proposing.
[04:13:57] It's actually really...
[04:13:59] interesting to me. The whole dollar sign ruins thing is very, very, very similar to what Vue's RefSugar was.
[04:14:07] So much so that we actually have solid libraries that look like Svelte 5 because like Alexis copied views Svelte 5.
[04:14:15] views  Ref Sugar and yeah  it amuses me to no end because it
[04:14:21] I can't remember what it was called.
[04:14:24] God.
[04:14:26] solid
[04:14:28] labels just for fun here.
[04:14:31] Um...
[04:14:35] See, it's just amusing to me because if you look at this, it's like it came out three years ago. Here you go, Svelte Ruins three years ago.
[04:14:43] It's not identical, but it's just...
[04:14:47] So
[04:14:47] It's amusing.
[04:14:52] Thank you.
[04:14:55] Ooh, no zone with signals? That's interesting.
[04:15:05] Yeah. To be fair, I didn't give
[04:15:11] React title either. I just wanted to kind of
[04:15:15] I don't actually know. React, I mean,
[04:15:19] Angular is so
[04:15:22] Like,
[04:15:23] all-encompassing, it's hard to give it a single title.
[04:15:26] Um,
[04:15:28] and
[04:15:30] I think the biggest headline for Angular here is what I put there with the Renaissance. It's like,
[04:15:36] You know, like,
[04:15:39] Come back.
[04:15:40] kid, but it's not a kid and it's not even
[04:15:45] I'm not necessarily saying the comeback is impacting any kind of like meaningful metrics. It's a mindshare comeback. I think it's it's huge, you know.
[04:15:54] Yeah, of course, yes. Spell 5 is... I already talked about... I think spell 5 is going to be pretty sweet. Um...
[04:16:04] It's just amusing to me that...
[04:16:07] essentially
[04:16:09] because
[04:16:11] Thank you.
[04:16:12] This compiles down to solid.
[04:16:14] Unlike Vue's RefSugar,
[04:16:15] Alexis basically copied...
[04:16:20] views API, applied it to Solid three years ago and basically had
[04:16:25] had ruins
[04:16:27] Which is, which is just...
[04:16:29] funny to me.
[04:16:31] Because it's the same thing where there's no function call or
[04:16:35] He did this ref signal thing, which is weird and deref signal.  I understand because that's in the view APIs.
[04:16:39] He could have wrapped it himself and not used it and used functions like the way
[04:16:43] Like, Vue didn't, or Svelte didn't give you this primitive, but technically speaking, they could have.  Anyways.
[04:16:52] Thank you.
[04:16:56] put it in javascript.
[04:17:04] Yes, they're not nice.
[04:17:07] We're so back. Yeah, I like that. That's better. We're so back.
[04:17:17] Yeah, thank you, Greg. Okay, sorry. Solid.
[04:17:22] Um, yeah.
[04:17:25] Solid.
[04:17:28] Thank you.
[04:17:29] Solid had a slow year, which is why it's so low on the hype train, I think.
[04:17:36] We had no major...  We had a couple minor releases...
[04:17:40] Um,
[04:17:41] Flight View...
[04:17:43] We had no major releases this year.
[04:17:47] So you can kind of understand why...
[04:17:51] This is probably the lowest we've been on the hype train for the last couple of years. We focused a lot on Solid Start. Solid Start pretty much occupied most of this year and finally got the beta out like right at Christmas time, which is a lot of people.
[04:18:05] As I said, it doesn't help us in the last 12 months.  If I look at this last week, though, solid is, you know,
[04:18:12] Number three, again,  HTMLX is just killing it right now,  but, um...
[04:18:17] you know, this kind of
[04:18:19] Thank you.
[04:18:19] you know,
[04:18:20] Just this...Solid had a very slow year.
[04:18:24] Thank you.
[04:18:26] That's... that's...
[04:18:28] you know, like Vue.
[04:18:30] I think I've talked a lot about this before.  I think the big headline for solid is start with,
[04:18:36] is close to 1.0
[04:18:39] And
[04:18:40] We owe the Vue community for that Vite.
[04:18:44] Nitro, Nux, like all of those people are a big part of this.  It freed me up the time to actually work on the features that I care about.
[04:18:51] Um,
[04:18:53] So we have bugs right now.
[04:18:57] we're working on, but the category of bugs of like, oh, this isn't bundling right, or this isn't working on the right, it's not like...
[04:19:03] these features are difficult to implement.
[04:19:06] Every bug now, I'm just like, oh, man.
[04:19:08] Like,
[04:19:09] These are probably not my problem.  They're probably...
[04:19:13] Nitro problems or, you know, like some integration piece that I don't understand, you know,
[04:19:18] It's it's
[04:19:19] I think the most exciting result of this is...
[04:19:23] focusing on
[04:19:25] stuff.
[04:19:26] other than start.
[04:19:28] You know, this is a big win.
[04:19:33] Um,
[04:19:34] Start
[04:19:38] was very ambitious.  The reason Solid Start matters for people who don't follow Solid,  probably not many people follow the stream in that case,  is Start...
[04:19:46] is
[04:19:47] decomposed the meta-framework. It's basically said that
[04:19:51] I don't own basically anything except a place to put stuff together.
[04:19:56] We have.
[04:19:57] a great server runtime in Nitro and H3.
[04:20:00] We have a great build process in Vinci on top of Vite. And
[04:20:05] Guess what? Routing, data loading, that's not my concern.
[04:20:09] Use solid router, use tan stack query,  use tan stack router when it's ready.  It's router agnostic.  And you're like, how can you make a framework  that has the features you want?  Well, as it turns out,
[04:20:18] with the right primitives
[04:20:21] you know, you can do so.  And in a lot of sense, it's very similar to some of the approaches that React has been doing.  Um...
[04:20:29] making these primitives that can work across meta frameworks.
[04:20:33] In our case,
[04:20:35] Start is a really nice layer to get in.  It's a starter template.  It has, you know,
[04:20:41] CSR mode or spa mode if people care about it.  So people can just...
[04:20:44] start out on it as if it was just a basic V template and then add the router. It's CRA all  over again and then build up from that. Except when none of the bad stuff, you don't have to eject. It's all in your fingertips thanks to
[04:20:56] Beats amazing plugin system. So
[04:21:00] I'm super happy because like,
[04:21:01] If I want to worry about islands and
[04:21:04] Server components
[04:21:05] Guess what?
[04:21:06] That is not Solid Start's responsibility.
[04:21:08] There might be like a couple tweaks we need, you know, the server to handle, you know, some special headers to to, you know, pass them through or whatever.  But this is not.
[04:21:18] A solid start.
[04:21:20] issue, you know.
[04:21:21] We have Cerevel handling our serialization. We generalize. This whole year has been about making it possible for a small team.
[04:21:29] to us, not you guys who are developing, but a small team of developers maintaining Stark and Solid, to be able to be productive and be able to manage it.
[04:21:39] we cut the start code base by 10x.
[04:21:42] Right? Like the CLI is moving into the community project, um,
[04:21:47] You know, going to be dropping that in a moment.
[04:21:50] like essentially,
[04:21:53] When everything does...
[04:21:55] only as much as it needs to, life gets a lot easier. So I'm excited because
[04:22:02] Pfff.
[04:22:03] This year...
[04:22:05] Yeah, we get to continue looking at stuff like server components. I showed that diffing example earlier.
[04:22:10] you know, kind of finish up the work we have on islands.  SolidStar 1.0 probably will have its basic version of islands,  but I want to get to that next step.
[04:22:18] with like server component type scenario.  The other...
[04:22:22] thing is freeing up to work on Solid 2.0, which is a big one. A lot of async updates, store updates, basically getting to correct some of the
[04:22:34] assumptions I made.
[04:22:36] Ooh, I feel like solid 1.0, even though it came out in 2021, basically...
[04:22:41] We've been 1.0 since 2019, conceptually.  We haven't really changed all that much.
[04:22:46] It's been five years. It's time to take what we've learned. And, um,
[04:22:51] Yeah, I am very excited.  There's slow years like last year.
[04:22:57] where you know that you're not going to get as much hype,
[04:23:02] But that's so that you can, you know, kind of like
[04:23:06] um,
[04:23:06] You know what, this...  Remember I said in 2022...
[04:23:10] Svelte in 2021, Svelte had a slow year, and then they released SvelteKit right at the end of 2022.  And then 2023 was an amazing year for us, for them.
[04:23:18] For us...
[04:23:19] 2023 was our 2022 for Svelte.
[04:23:23] This next year everything blows open so I am I'm very excited. Um, I
[04:23:29] for where solid's going. This, you know, even for a slow year, we didn't do bad.
[04:23:34] Um,
[04:23:35] so to speak.
[04:23:37] So,
[04:23:38] Yeah, solid 2.0.
[04:23:41] On the way...
[04:23:43] Well, I'm not going to give you any promises on the date on that, but
[04:23:47] Start is close, so I'm pretty excited.
[04:23:52] Thank you.
[04:23:53] Yeah. Later, later in the year. Um,
[04:23:58] But yeah, I get to focus on it again, which is huge.
[04:24:02] The meta meta framework, the unmeta framework. Yeah, you guys can choose.
[04:24:09] Yes and no.
[04:24:14] There is a certain amount of that responsibility pushed onto Nikhil from that sense.
[04:24:23] So
[04:24:24] So I'd say...
[04:24:25] You're right. My 10x isn't fair.
[04:24:28] Um...
[04:24:30] we did reduce
[04:24:32] I...
[04:24:33] Like, it's...
[04:24:35] E-e-e.
[04:24:36] Nitro took a nice chunk out of it.
[04:24:40] Probably almost half.
[04:24:43] But you're right, the other half of the savings are probably mostly sitting in Vinci.
[04:24:47] But Nikhil got to redesign it in a...
[04:24:51] way that was more module and,  and,  uh,
[04:24:56] agnostic in a sense. So because we were able to separate those concerns, things like bundling around server functions and
[04:25:02] and islands like the bundling solutions um
[04:25:06] Like, he built them for React and they worked for Solid.  Uh...
[04:25:11] Yeah, I think it's good that you point out Vinci because...
[04:25:14] Technically, it's probably the biggest risk factor of this...
[04:25:17] Gotcha.
[04:25:18] But.
[04:25:19] It also...
[04:25:21] It's very generalized.
[04:25:24] Like...
[04:25:25] There is a bit of this pile into the other pile, but it's not quite the same. We had the most maintainable VeeP plugin before in SolidStart, and now we have...
[04:25:35] Like.
[04:25:36] The separation of responsibility is a lot cleaner now.
[04:25:41] - Signals 2.0, I'm hoping for.  I think the work that we're doing on async
[04:25:45] could be that significant.  That's why I'm really dragging on the spec a little bit,  because I'm like...
[04:25:52] Like,
[04:25:53] The stuff that we have in mind, it could be a game changer.
[04:25:58] You know, and then it's going to be like, is everyone going to get signals 2.0? You know,  they've got to branch out.
[04:26:07] Thank you.
[04:26:11] Thank you.
[04:26:16] Yeah, to be fair, all those choices are just because we had templates available. They're actually just templates. My intention eventually is just to...
[04:26:31] kind of combine that template repo with the solid template repo.
[04:26:36] And then like,  we could just have a nicer CLI there.  Like,  honestly,  we just needed the examples to push the development forward.  Um,
[04:26:44] and kind of show people how they can do things.
[04:26:47] that's what they're there for. A lot of frameworks have those.
[04:26:52] Thank you.
[04:26:53] For most people, they should just be starting with basic and we should make that a lot clearer.
[04:26:58] Thank you.
[04:27:00] It's tricky because my actual expectation is I want more CreateT3 apps in the world.  I think everyone... It's so funny.  I give React crap about frameworks, and it's because I want to have that control.  I don't want to be forced to use a framework.  But I think a lot of people do want frameworks, and I think those opinions...
[04:27:20] are
[04:27:22] more like templates. Like they're not like
[04:27:27] like they're fashionable, they come in and out.  And that's why I want to enable.  I want to enable all the Create T3 apps out there possible.
[04:27:33] Cause you know,
[04:27:35] Yeah, honestly, create three app is is amazing project and what those guys have done.
[04:27:40] um there's something coming up for solid along the same lines i think i'm trying to remember  what it's called it's called like solid
[04:27:47] I don't even know what it's called, but it's built on top of Solid Start.  And it's, is it UI kit or something?  I don't even know.  Media kit, solid media kit.  It's built on top of Solid Start, but it has all those opinionated pieces, like opinion, like, like, you know, image generation and like all the like.
[04:28:04] you know, it has more of the stuff that people expect from a framework. But that's, as I said,
[04:28:10] That's good for the people maintaining that. I'm really focused on making sure the core building blocks are good.
[04:28:19] All right.
[04:28:21] Solid 2.0, signals 2.0, okay.
[04:28:24] I've been talking about solid a bunch this whole year, so I don't think there's any surprises here for anyone. But I am, I'm happy about these unlocks. It's so exciting when, like, start's been this monkey on my shoulder for, for a while. I think the biggest blocker to start 1.0 getting out the door now is going to be docks.
[04:28:42] It's that simple.
[04:28:46] It's unfortunate because I put unduly pressure on people.  Because I would love the release start probably in a month, month and a half-ish time period, if possible.
[04:28:56] maybe two months being realistic, but there's no way I can picture the docks being anywhere where I want in that kind of time zone.
[04:29:04] It's funny, Start has so little features,  but we need guides.
[04:29:08] The solid start docs right now suck because they have a bunch of references to libraries that aren't even part of start.
[04:29:13] Like how do you document a framework that has no pieces?
[04:29:17] Like has nothing that actually belongs to it.  Interesting.
[04:29:22] Okay.
[04:29:23] Question for a better docs writer than me.
[04:29:26] Because if you let me write your docs,
[04:29:28] You just end up with the...
[04:29:30] the slowjs.com slash docs, which we already talked about.
[04:29:35] is not the greatest...
[04:29:37] thing in the world. Yeah, this is what you end up with.
[04:29:40] This was copied directly from some readme files in the SolidStart GitHub repo.  And I apologize to everyone for that. I tried my best.
[04:29:48] I can write okay when I want to, but yeah.
[04:29:51] I
[04:29:52] All right.
[04:29:54] Thank you.
[04:29:55] Next.
[04:30:01] Thank you.
[04:30:03] But do you feel comfortable releasing something as 1.0 with crap docs?  I don't know if you can call something 1.0 unless the docs are good.
[04:30:12] Like the docs have to come before the 1.0 in my mind.
[04:30:20] Otherwise, like, like, I think we could go to 1.0 pretty quick here. You know, we got a few bugs that iron out, but nothing that should take more than a month or so between, you know, a few more releases testing or whatever, but.
[04:30:33] Okay.
[04:30:36] Best docs? Astro?
[04:30:40] Vue's pretty good too, but Astro probably.
[04:30:45] Thank you.
[04:30:50] React's rewrite has been pretty good, but...  And we're modeling a lot of stuff after the React rewrite. It's just, it's challenging. React is...
[04:31:01] It's challenging.
[04:31:04] Call it an RC. Yeah, you're right. That's what we're going to do. We're going to RC run it. Yeah.
[04:31:08] Give me about a month and then we'll just start RC running and convince people to help us with docs.  Yeah, I think that's good.
[04:31:18] Yeah, I mean, we have docs right now. I'm just saying they suck.  Like, to the point that I am embarrassed of them.
[04:31:25] Okay, next framework, quick.
[04:31:32] Quick, quick, quick.  Quick's an interesting one because
[04:31:39] On the hype train, they're below solid.
[04:31:43] But this was a big year for QUIC. They had their 1.0 release.
[04:31:49] I think this is just a testament of how much harder it is
[04:31:55] as a JavaScript framework year after year based on your release date.  How much harder was for solid after, you know, it's felt, you know,
[04:32:04] Our 1.0 was after Svelte 3.
[04:32:07] how much harder it was for Svelte than it was for Vue,
[04:32:10] how much harder it's for Vue and Angular than it was for React.
[04:32:14] Like,
[04:32:14] This should have been...
[04:32:17] the like
[04:32:21] the big push, right?
[04:32:25] And they're almost at 20,000, but...
[04:32:29] Like release and then do, do, do, do, do, do, do, do, do.
[04:32:33] the sad part about this is quick
[04:32:38] It has you know how I I don't talk about view I like talking about quick because it
[04:32:44] Yeah.
[04:32:45] The innovation that they have going on is really interesting. I find myself
[04:32:50] always been like interesting you know
[04:32:54] Thank you.
[04:32:57] because they finally get an astro integration.
[04:33:04] Thank you.
[04:33:07] Thank you.
[04:33:12] So like Quick is a signals framework and they have resumability.  And as in the previous year, resumability was like a big...
[04:33:22] you know, RSCs versus resumability is a big topic that I focused on, but I actually don't think there's actually
[04:33:29] Like the...
[04:33:30] It's very clear to me now how those are different buckets.  I was talking earlier
[04:33:35] about how...
[04:33:38] Thank you.
[04:33:44] like, resumability was basically an optimization.
[04:33:48] And
[04:33:50] Uh...
[04:33:51] Thank you.
[04:33:52] It's kind of tricky because...
[04:33:57] all those considerations about when I was going over the templating,  when I was talking about Astro and talking about like,
[04:34:03] HTML template diffing versus not.
[04:34:06] Like, it's that same level of...
[04:34:09] question that you kind of hit here the resumability in one sense is like
[04:34:14] the most optimal islands because they're small,
[04:34:18] and they wake up
[04:34:20] at just the right time every time.
[04:34:22] But on the other hand,
[04:34:25] auto detection
[04:34:27] can't tell
[04:34:28] if something should be client or server.
[04:34:31] Once you hit a decision point,
[04:34:32] that can change after initial render.
[04:34:35] it has to assume it's in the browser.
[04:34:37] via auto detection.
[04:34:38] So like,
[04:34:40] If you hit and if that detection point
[04:34:43] is high in the hierarchy tree.
[04:34:46] like say at a route
[04:34:48] Then when you go to the next page, you load all the JavaScript.
[04:34:52] Is that a problem?
[04:34:53] I don't know.
[04:34:55] But it's very different because it's harder to keep those models clear from each other.  You can go like, well, it's fine.  I have server functions.  Those are only on the server.  But the fact that any piece of code at any point can run in either place is...
[04:35:08] is a tricky mentality to get around. And I think this is, the thing is, I like presumability
[04:35:14] from
[04:35:15] the optimization standpoint of saying this JavaScript doesn't load. I think a lot of the quick isms have been challenging for people, even if the syntax looks like react, it's a lot.
[04:35:25] to kind of
[04:35:26] think about like where my code is running.
[04:35:30] They'd argue you don't need to worry about it.
[04:35:32] but people still do. So it's, that's, that is one of the challenges. Um,
[04:35:40] I know for a fact,
[04:35:43] that they are doing a lot of cool stuff.
[04:35:47] If you watch my Solid serialization stream,  Solid may have been the first...
[04:35:52] to have server functions out of like the popular frameworks.
[04:35:56] like quick out of them after and next out of them after.
[04:36:02] But...
[04:36:03] quick
[04:36:06] I've talked about this
[04:36:07] this demo before.
[04:36:10] I'm not.
[04:36:11] But like where we're misco,
[04:36:14] basically touches a file.
[04:36:17] on the file server
[04:36:18] And because he's just wrapped his watch method on his server, it's not loading for me, lovely, in a server function,
[04:36:26] he's able to just like
[04:36:28] touch a file and have it kind of stream in
[04:36:30] into the client.  Basically, he has a stateless backend
[04:36:33] Like not completely persistent, but his server functions can exist over time.  You can do the exact same thing in SolidStart.  And in a sense...
[04:36:41] You do the same thing when you do server components in Next.js as well.  But these guys are constantly...
[04:36:48] pushing the boundaries here. I know that they're working on new serialization formats to optimize.  One of the challenges with resumability is that
[04:36:56] Um,
[04:36:58] you have to serialize the complete state of your app.
[04:37:02] Thank you.
[04:37:02] Not just the...
[04:37:04] like the like stateful parts but like the internal framework representations of the data so
[04:37:10] They got hit early in the year where I think it was Evan Yu again being like, hey, is resumability actually faster? And he actually showed, you know, where Quick wasn't really any faster than Vue for booting up in this like extreme demo. And that just pushed Manu to go, oh yeah, this is unoptimal. Like we run this way, but we don't have to, we can defer this work.
[04:37:28] And he fixed it and then suddenly quick was much faster on this boot up, you know.  And similarly, right now, they dump a whole bunch of crap into the HTML, which increases the size of their HTML, which actually has negative performance impact.
[04:37:40] So they've been working on new techniques to reduce the amount in the thing.  Serialization has a real cost.  We've been talking about this in bandwidth.  Resumability actually increases bandwidth and bandwidth.
[04:37:50] serialization. It can improve bandwidth serialization by having the same trick as islands to be  able to reduce the data you need for partial hydration.
[04:37:57] you
[04:37:57] But,
[04:37:59] resuming itself is a solution
[04:38:02] that involves
[04:38:04] on a base level doing more serialization.
[04:38:06] So this is not like a, this is why we need to figure out what the right balance is and have the right, and you kind of can't tell with these kinds of solutions until you optimize and optimize and optimize. This is the challenge. It's a challenge I went through with solid when I was trying to prove signals.
[04:38:21] Doing signals and treating them the way Knockout.js did wasn't going to convince people that signals were good.
[04:38:30] I mean, sure, nice DX, you know, view, borrowed that,  and then just feed into a VDOM.  To actually get to the point where the rendering was good,
[04:38:37] we had to optimize to a degree that we showed what was possible.  And I think that's where Quik's sitting right now,  which is tricky because they're solving a problem  that people haven't necessarily realized
[04:38:49] that they have or that there can be a solution for.
[04:38:52] So
[04:38:53] It's hard. This should have been a really good year for Quick.
[04:38:56] Instead, it was mediocre.
[04:38:57] And
[04:39:00] I hope that they continue to have the space to be able to continue to innovate because they're doing amazing things.
[04:39:06] And it'd be a real shame if they can't continue to do that.
[04:39:13] Manu is a machine, yeah.
[04:39:17] Thank you.
[04:39:19] I find reasonably bit limiting for case where you need to store the state on the server and doing client-side navigation after the first load. Yes, it's exactly what I was describing.
[04:39:30] Thank you.
[04:39:31] At some point parents will get so fast they will update in time, like every time you hit the counter you become
[04:39:36] Yeah.
[04:39:37] Yeah, exactly. With all the time travel we do and
[04:39:41] Shadow.
[04:39:42] Doms and portals and
[04:39:45] All the magic, yeah.
[04:39:47] Thank you.
[04:39:48] - -
[04:39:52] Yeah, it's all H2E. To be fair,
[04:39:56] quick only has uh in order streaming they don't have an order like react or marco or solid does so
[04:40:05] there
[04:40:07] And then the streaming that they do over server functions is just like literally just like
[04:40:13] Yeah, we're just chunk, sending the chunks over piece by piece.  It's all H2B.  The key to this stuff is that it's not...
[04:40:20] Yeah, this is not about...
[04:40:22] like WebSocket.  So I actually had LiveView on it.  We were testing it.  WebSocket's actually suck for startup.  Um...
[04:40:28] So like,
[04:40:30] Yeah, it's.
[04:40:31] generally we're all working in a zone of stateless.  This is why I want to talk about HTMX.  The question of stateless versus stateful backends  is going to be a question that comes up a lot  in the next little while.
[04:40:41] It's kind of obvious where the web's been heading with serverless and stuff that we'd want stateless.
[04:40:46] But...
[04:40:47] I don't know.  People...
[04:40:49] like there are use cases and you can get really good experiences and it's very clean.  Having seen like Phoenix or even LiveView JS,
[04:40:58] It's a clean model to have the server run it.
[04:41:01] Um, so I like, I get it. It's just like, I don't think that's what most people have for infrastructure. I could be wrong though.
[04:41:09] Thank you.
[04:41:10] I mean, WebSock is after the fact, maybe, but initials all about HTTP.
[04:41:21] Thank you.
[04:41:23] Yeah, so it could be faster, but you'd have to have persistent connection. And I don't think most frameworks are going to design with persistent connection in mind.
[04:41:33] Thank you.
[04:41:38] So like
[04:41:40] Yeah.
[04:41:45] Thank you.
[04:41:47] if stateful is on the table,
[04:41:51] which it hasn't been for years for most things,  then all the math changes.
[04:41:58] Thank you.
[04:42:01] But yes, right now I'm looking at quick and talking about it a bit.
[04:42:05] a bunch of really innovative technology,
[04:42:08] But
[04:42:09] What's the package? And I think that's going to be the trickiest part. I'm hoping
[04:42:16] Bye.
[04:42:16] Yeah, I don't know.
[04:42:18] We'll see how things run for them for the rest of the year.
[04:42:21] Um...
[04:42:23] We already talked about Remix because of React.
[04:42:26] Um...
[04:42:28] I'm looking forward to Quix Innovation.
[04:42:31] Um,
[04:42:35] What did I say here?
[04:42:37] better
[04:42:39] serialization.
[04:42:42] that these are actually real problems, especially having large enterprises.  This is, you know, it's like it's just like
[04:42:50] How do you sell this to a developer who thinks a single page app is fine?
[04:42:55] like CSR.  Like,  Quick has like,  if people think
[04:42:58] CSR is fine. QUIC has no ground to stand on, which is really unfortunate for them.
[04:43:04] If people think that on the opposite side, they think that like,
[04:43:08] Astro or HTMX is fine,
[04:43:11] you know,
[04:43:12] then Quick has to look around the stand on it. It's just a very awkward place to be. That's why it's good that they integrated with Astro and stuff because then they can be part of the dialogue. But the problem is,
[04:43:21] Quick is more optimal than Astro is at the Astro side of stuff, or it's close to. Like, in theory, it's more optimal. I think in practice, Islands versus the stuff might not actually make any difference.
[04:43:32] It's like the last X percent.  We talked about that before, but like
[04:43:37] This is why Quick was having a hard time  letting me go there. They were like, we already do what Astro does  better, but that's missing the point.
[04:43:50] Thank you.
[04:43:51] Thank you.
[04:43:51] Thank you.
[04:43:52] Do you think Dino is basically dead early?  No, I think Dino's still going.
[04:43:56] Let's keep on going.
[04:43:59] Dino...
[04:44:01] I'm not going to... Companies, I can't tell you about...
[04:44:05] I don't care. I only care about their technology. Um,
[04:44:09] So yeah, it's
[04:44:11] Yeah.
[04:44:11] Let's keep on going. Okay, lit.
[04:44:15] Okay.
[04:44:16] Lit. I'm going to skip over you. We already talked about...
[04:44:20] I don't have much to say about most of them.  These guys are like...
[04:44:24] U hasn't moved much, the React WASM framework.  I don't believe U has, like, server components.  If they do, then they...
[04:44:32] they deserve a big mention.
[04:44:36] I think for the most part, you is just like React Classic.
[04:44:40] Um,
[04:44:41] like VDOM style in Rust.  So I don't have much to say for them.  Let's tackle it.
[04:44:45] Um...
[04:44:48] Scalagra lit.
[04:44:51] Thank you.
[04:44:52] Thank you.
[04:44:53] Thank you.
[04:44:55] Give me a letter, not a pencil.  Lit, big thing for this year for Lit,
[04:45:00] was free release
[04:45:03] where, again, I've been mentioned them earlier.
[04:45:06] Guess what? Support for signals.  Like, um...
[04:45:11] They also have new optimized templates, which I wouldn't be surprised is similar to the templates that we do in Solid or Millian or that.  So like...
[04:45:20] Yeah, compiler optimized...
[04:45:23] Templates compiler optimize.
[04:45:27] My is
[04:45:28] templates.
[04:45:30] *sniff*
[04:45:33] I don't have specific stuff to say about Lit.
[04:45:35] other than they make web components viable to use.
[04:45:41] Because you need a framework, really, to get the same support out of web components that you want out of...
[04:45:46] other frameworks. So
[04:45:49] Yeah, neither here nor there. Lid is pretty good at what it does, so I don't have much else to say about it.
[04:46:02] Use React circa 2020, there you go.
[04:46:05] They only added SSR at all last year, yeah.
[04:46:14] Thank you.
[04:46:15] We just haven't got the Leptos yet. I don't know. Is Leptos not on this list at all?
[04:46:23] I assumed it was just further down.
[04:46:29] that's otherwise we should get leptos on this list yeah we should get leptos on this list it's not  we'll get to leptos i'm almost done the list that i actually care to cover
[04:46:36] Alpine
[04:46:40] I already showed the benchmark. That's all I have to really say about them.
[04:46:44] they're still growing, which is good on them.
[04:46:50] Let's talk Preact.
[04:46:58] Yeah, I wonder if Fresh is on this list.
[04:47:05] I'm going to talk about fresh.  Yeah, it is.
[04:47:10] But I'm going to talk about Preact first.  Preact's just been steady.
[04:47:13] See, just like steady.
[04:47:15] They're at 35,000 stars. It's a hard  zone when you get into the 30Ks to get  like, gain ground. You gotta like
[04:47:21] breakthrough like Svelte has.
[04:47:23] Otherwise, we all kind of sit around 30K. 30K is like the new 20K, which is the new 10K. Like,
[04:47:29] That's that's my my feeling. Like back in 2010, getting to 10K star was impressive.
[04:47:35] 30K is like that now.
[04:47:37] Um,
[04:47:38] It's like where you're kind of like,
[04:47:41] Things have slowed down.  All the early adopters know who you are, but you know...
[04:47:46] mainstream is a whole other thing.
[04:47:49] And don't get me wrong, you can be around 30k stars and have, you know,
[04:47:54] you know, a million downloads a month or whatever.
[04:47:57] But...
[04:47:58] Yeah.
[04:47:59] Preact, um,
[04:48:01] again, is another framework that I haven't been keeping up
[04:48:06] as much tabs on. They did a lot of good optimizations around SSR earlier. Let's see, Preact. Let's go to Preact. Do they have any
[04:48:15] What's the... Let's go... Let's...
[04:48:17] They're deep into version 10.
[04:48:24] uh releases
[04:48:27] Is that like the only, okay, there we go, 1910, 192.
[04:48:32] precompiled JSX transform
[04:48:35] Yeah, I mean, my understanding is Preact has been doing meaningful
[04:48:40] Continued maintenance stuff. This wasn't like like solid and view this wasn't like a particularly exciting year for them.
[04:48:47] Until you get into the...
[04:48:50] the meta framework area and we can talk about fresh.
[04:48:54] Fresh has been doing cool stuff.
[04:48:55] partials,
[04:48:57] Um, what else is on the list? Uh,
[04:49:00] uh,
[04:49:02] I think that they solve nested.
[04:49:05] Hmm.
[04:49:05] Yet. Um...
[04:49:08] I'm trying to think of...  Partials is the big one that comes to mind when I think about Preact.  Obviously, um...
[04:49:14] Marvin from Friak core team is now working on fresh officially, which is huge. They've been doing minor releases like crazy. Like if I go fresh, I think 1.5 is the partials. Are they already on 1.7 yet? No, maybe not. Maybe 1.6.
[04:49:30] Thank you.
[04:49:30] Tss.
[04:49:32] simplified typings,
[04:49:34] Yeah.
[04:49:36] There is regular work happening now.
[04:49:40] really cool to see this HTMX-like
[04:49:43] API in here. This is what I was talking about where the attraction of this is. Preact likes keeping it to the basics. As I said,
[04:49:50] fundamentally,
[04:49:51] The only reason why I haven't really considered this kind of approach mostly is because fundamentally these
[04:49:56] I was talking about the preserved state problem. I don't think preact
[04:50:01] I don't think fresh Astro
[04:50:04] Um,
[04:50:06] HT Max.
[04:50:07] pretty much any of the island's solutions have actually
[04:50:11] really focused on this flaw.  I went to add client-side navigation.  For MPAs, it's perfectly fine.
[04:50:18] You don't have this problem.
[04:50:19] But once you get to client-side navigation,
[04:50:22] Um,
[04:50:23] you need a solution more like React Server Components.  You don't necessarily need to not use HTML, but this is why I actually put a halt on the work I was doing with our...  SolidStart had something along its lines just over a year ago, around the time the Next13 released, we had our version.  I realized this flaw, and I've been thinking about it and working through it ever since when I'm not working on PrimaryStart.
[04:50:48] None of these other frameworks have actually solved it yet.  So...
[04:50:53] Yeah, I do think it's...
[04:50:55] On the other hand, I do think that this...
[04:50:58] in general is progressing.  We're starting to get focused.  I think all this evolution here  will have us start focusing on the right thing.
[04:51:07] Uh...
[04:51:11] Yeah, layout to this nested routing support.
[04:51:13] Yeah, yeah. Fresh has been like regularly doing updates now for a while there.
[04:51:21] I think it was Fresh 1.3 or whatever.  It felt like Fresh hadn't
[04:51:26] uh hadn't done
[04:51:28] very much recently, right? It basically they came out like, like, what was it?
[04:51:35] beginning of 2022, maybe even 2021, I can't remember.  And then it was like, we didn't hear anything before it.
[04:51:42] We can report that Fresh is not only still alive and kicking, but it's actually...
[04:51:46] adding new stuff that's actually very interesting.
[04:51:51] Fresh as a build step now. There we go.
[04:51:54] Yeah.
[04:51:56] Yeah.
[04:51:56] *sniff*
[04:51:57] -
[04:52:02] Is that basically, no, I, I, what's Prevall.js, I think that's what they,
[04:52:08] Yeah, that's a good question. What's a pre-compiled JSX transform?
[04:52:11] I'm not sure. Isn't all JSX pre-compiled? I'm a little bit confused. You're right on the Preact stuff. I wasn't sure what I was reading.
[04:52:19] I suppose that's worth looking into, but not right now.
[04:52:23] Um...
[04:52:24] Generally speaking,
[04:52:26] Preact's going to continue keeping to the basics.  It's kind of stepped out of React Shadow.
[04:52:31] I think right now there's a lot of people looking for simpler solutions and Preact is going to, you know,
[04:52:38] I talked about solid, keeping it simple.
[04:52:40] Preact is really the...
[04:52:43] keep it simple framework now, now that I think about it, I'm going to say that.
[04:52:46] Keep it simple.
[04:52:50] Right.
[04:52:51] So I like...  You can see initially that they saw HTMLX CC partials.  That's a primitive you can work with.  They're going to integrate that primitive directly.  Give people a lot of control.  Gives people a lot of power.  Ultimately, I'm suspect whether that will actually be...
[04:53:09] the right abstraction, but I think I'm learning...
[04:53:13] As pre-act goes along I'm glad they I'm glad they made that step because technically for doing stuff like nested routing I
[04:53:19] I kind of want a partial mechanism under the hood.
[04:53:23] All right.  Who's next?  There's not that many...
[04:53:28] Marco.
[04:53:31] Sure, what do I want to say about Marco?
[04:53:33] Uh, yes.
[04:53:38] Well, I
[04:53:40] This is what I have to say about Marco.  We had Michael in the stream.  They released Marco Run, which was their meta framework.
[04:53:48] which is very similar this year, which is very, you know, it's on Vite.  It's like we all have meta frameworks now.
[04:53:55] Um...
[04:54:00] A year ago, I told everyone on the stream that if Marco 6 wasn't released,
[04:54:05] In the next year.
[04:54:06] I would stop talking about Marco.
[04:54:09] Thank you.
[04:54:10] Um,
[04:54:16] We're here now.
[04:54:18] So...
[04:54:19] Uh...
[04:54:20] I guess
[04:54:22] I guess I'm done talking about Marco until Marco 6 comes out.
[04:54:28] Hmm.
[04:54:29] Thank you.
[04:54:29] I don't know what the...
[04:54:33] To be fair, I haven't been involved very much in the Marco team the last several months. Over time, you guys figured that the gap would get bigger. Wherever I get an opportunity, I do try and promote and look into stuff, and I'm always very interested in the work. I do keep my tabs on it.
[04:54:57] Yeah, it's a bit like quick in the side.  They're doing stuff that is
[04:55:02] groundbreaking, completely groundbreaking in terms of technology, more so than pretty much  anyone else on this list. But if it's not in people's hands, what can we talk about?
[04:55:15] The real Marco has never been tried. Yeah. I, I know they're getting a lot closer, but I said that a year ago too. So, um,
[04:55:24] To be fair, there's one other topic.
[04:55:27] which is a miracle in itself too, TypeScript.
[04:55:32] Run the meta framework and typescript to Marco. I know
[04:55:36] There's TypeScript in most frameworks automatically.  And then obviously stuff like Vue and Svelte made big moves.  Getting TypeScript in Marco is almost no short of almost miraculous because Marco has the most advanced UI language.  So like trying to map that was incredible.  So, I mean, again...
[04:55:54] There's something I can talk about because it's absolutely kind of miraculous how they pulled it off.
[04:56:01] But yeah, I think that for Marco,
[04:56:04] Here, let's continue.
[04:56:06] I'm almost at the end of my list.
[04:56:09] We already talked about Leptos earlier on in the stream at the very beginning, because it's the most hyped framework, clearly.  But now we're getting into frameworks that average less than one GitHub star a day.
[04:56:20] I mean, the stencil.
[04:56:22] But...
[04:56:24] I mean, these are still getting updated. Pushed a day ago, pushed 12 days ago, two days ago, days ago. These are these are
[04:56:30] these are still being maintained, which is a good, good, good sign.
[04:56:34] mithril. It's just...
[04:56:37] Oh, except for Knockout. No one's pushing Knockout in two years.
[04:56:41] Sadly.
[04:56:42] But I think I'm basically at the end of my list, so to speak.  We talked to...
[04:56:46] about
[04:56:48] Leptose and Dioxus a bit at the beginning of the stream, so I'm good on my WASM.
[04:56:54] And
[04:56:55] I'm good on my frameworks. So let's wrap up here with a little bit of some conclusion thinking kind of stuff.
[04:57:03] Right.
[04:57:04] I covered most of the topics I want to in my article.
[04:57:10] I don't even know if I like this conclusion completely that I wrote in the article, but my feeling here is...
[04:57:17] is that
[04:57:18] Thank you.
[04:57:19] We're kind of
[04:57:20] entering this zone where
[04:57:24] Even though it's kind of obvious,
[04:57:28] that
[04:57:30] things are converging.
[04:57:32] I'm going to full screen for this one.
[04:57:33] So I can talk it.
[04:57:35] and fix my
[04:57:36] like my camera here.
[04:57:38] Even though it's kind of obvious that things are converging,
[04:57:42] *sniff*
[04:57:45] We're now going to start to get that. We're starting to get that push back from people who are like, prefer being on one side versus the other side.
[04:57:53] Last.
[04:57:55] Right. You're in JavaScript.
[04:57:59] Um,
[04:58:01] No.  Like...
[04:58:03] I think stuff like...
[04:58:06] I've been talking about all these server first frameworks based on some kind of partials, whether they're RSCs or Astro or Marco or.
[04:58:15] Thank you.
[04:58:15] Um...
[04:58:17] HTMX.
[04:58:18] especially the ones that are toying into getting client navigation, working with that.
[04:58:23] With the exception of React server components, I think they're going to realize really quickly that they have huge shortcomings.
[04:58:28] Now, there might be other ways to solve this other than the way React has been solving it, but I think like,
[04:58:34] While the developers of these frameworks might know that, I don't think that the general population understands these limitations.  But on the same time, I don't think they care to. I think there's enough overhead here that people
[04:58:45] like mentally have had enough and they just want like that little piece they  can attach to,  you know,  use.  And honestly,  that's perfectly fine.  Cause like,
[04:58:54] the cool thing about the web and website.  So you can just build them yourself and you're good to go.  You know what I mean?  Like you don't need,  uh,
[04:59:02] Like...
[04:59:03] crazy degree to figure this stuff out. So I understand the pushback.
[04:59:08] It's...
[04:59:10] It is funny that...
[04:59:12] I'm the guy who never, I'm never like right tool for the right job kind of person, but I would rather people use.
[04:59:19] the right tool for the job.
[04:59:21] At least, you know, to a large degree rather than suffer the pain of like...
[04:59:26] of, you know, using the wrong tool. And
[04:59:30] as
[04:59:32] these things converge, it's harder to identify that. It's like, and
[04:59:37] even the things claiming to cover the whole range,
[04:59:39] don't necessarily cover it completely. So I, I can definitely understand that tension.
[04:59:46] But I think the kind of key takeaway from that is nothing is replacing something else here.  Like, it's not like...
[04:59:53] like HTMX now can replace
[04:59:55] This, it can maybe in your specific use case, but in the general sense,
[04:59:59] nothing.
[05:00:00] Things completely made something else obsolete on both sides.
[05:00:03] They're just extending their range.
[05:00:06] Um, which means.
[05:00:08] In a sense, not much has changed, except arguably that complexity that we've been trying to wrangle in.
[05:00:15] So I get
[05:00:16] I get, you know,
[05:00:18] why
[05:00:20] You know, there is that skepticism, but...
[05:00:23] I'm remaining optimist here because I think 2022 showed what was possible.  2023...
[05:00:30] for a lot of frameworks was heads down,  doing the work, trying to like,
[05:00:35] like make it viable for people to use. It's gonna, that's gonna continue bleeding into 2024. Um,
[05:00:43] The unfortunate thing here is some of us were kind of hoping by this point to be very clear what the path forward is.  And I don't I don't feel it right now.
[05:00:53] Um,
[05:00:55] One of the ironies here might be that what reacts doing with RCs
[05:00:59] might be technically
[05:01:02] The best.
[05:01:04] direction of solution out there.
[05:01:06] Like if I was trying to choose a direction to follow,  but the implementation makes it harder to swallow  and the complexity that comes with it does as well.
[05:01:14] So
[05:01:17] *sad*
[05:01:18] It's not easy. I think for most people,
[05:01:21] making a choice on frameworks this year, they're going to continue to go with most of the status quo.
[05:01:28] Um,
[05:01:29] Although I wouldn't be surprised if that...
[05:01:33] involves a little bit more on the RSC side,  and in a sense, ironically, using stuff like Astro  to maintain the status quo,  because while the frameworks themselves are trying to advance...
[05:01:43] Astro kind of acts like a time machine. And I feel like HTMX does as well, where people kind of like, don't worry about the new advanced frameworks features and use them like the way they use them in the past. And that's going to continue to be the case here.
[05:01:57] I feel that's probably a temporary step.
[05:02:00] Because I think the stuff that's being worked on has the potential to outshine
[05:02:05] But that's kind of where we're at.
[05:02:08] I did update my background.  I had too many new Legos to add.  And it was just getting, it was kind of dark in here.
[05:02:17] *Sigh*
[05:02:19] .
[05:02:21] Less complex than the demo prototypes we showed in 2022, but we also learned all the shortcomings.  So then we gained back complexity when we're like, oh, crap, this didn't work right.  Think about it. We did these server component things that are rough.  And then we started refining them and we're like, yeah, we're in a sweet spot.  And then we're like, oh, crap, there's security concerns and stuff.  And then like now we're next to us is, you know, encoding stuff, for example.  Like I think there's I think.
[05:02:43] Ultimately, I think we may have come out uneven because we improved some stuff, but then found gaps in other places.
[05:02:51] Oh yeah, and the award that was, yeah, I forgot that. That was a Community Hero Award from NG Poland.
[05:02:58] Angular, I guess it was JSPullen, but an Angular conference that gave me a community
[05:03:03] award, which is really nice of them.
[05:03:05] And beside it, though, you can't see it behind the Quik logo, I think there's also my...
[05:03:10] by JS Nation Breakthrough of the Year Award.
[05:03:13] Yeah, probably. Honestly, this quick thing you see maybe in the corner is really cool. Misco's 3D printer was...
[05:03:20] big part of that, which is really awesome.
[05:03:25] But yeah, I did what I set up to do today, which was talk about the different frameworks.
[05:03:33] To be fair,
[05:03:34] there's a whole bunch of like
[05:03:36] This Week in JavaScript type stuff, but...
[05:03:39] I covered like half of it, you know, other than
[05:03:44] Yeah, I covered like half of it in the course of the stream anyways.  Um...
[05:03:49] So I'm not terribly choked.  I'm trying to see if there's anything that I...
[05:03:53] I missed.
[05:03:54] And I think...
[05:03:56] that
[05:04:00] Yeah, I don't think I actually missed very much.
[05:04:04] I mean, I didn't mention this during the million part of the stream, but they joined a Y Combinator. So...
[05:04:11] Yeah, I think that's basically it.  I would love to dig into like Dan Abramoff's function of state and data thing,  because I think there's some subtlety there that's not there,  but we'll leave that for another stream and we'll call this one.
[05:04:23] where we are
[05:04:28] Thank you.
[05:04:31] Thank you.
[05:04:35] - Yeah, I can see that where you're saying like,  because then you fill in the gaps  and you end up there again anyways.
[05:04:40] I do think some abstractions work better than others.  I like there's a,
[05:04:44] Like...
[05:04:46] these things are evolved. So as we
[05:04:49] change the boundaries and move the pieces around a bit.  Like,
[05:04:53] it does generally shuffle in better over time.
[05:04:56] But yeah.
[05:04:57] - Thank you.
[05:04:58] All right. Yeah, I'm going to call it. It's after five. I need to eat some food. I am hungry. Um,
[05:05:04] Thank you for joining me on this stream.  And, uh,
[05:05:09] Figure out when I'm going to stream next week.  See you till then.