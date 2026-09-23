---
title: "6RIPfwxj24s"
slug: "6RIPfwxj24s"
duration: "5:28:37"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/6RIPfwxj24s.m4a"
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
[00:00:02] Hello everyone, how are you doing today? Sorry to not forget about you all, I was just...
[00:00:06] You ever get that thing where you're like at the end of your day and it's like almost five and you're like, I just got to finish this last little thing.  Um,
[00:00:13] I was like that a moment ago because I was working on a pretty cool demo, I have to admit.  And I was just like, I know I can finish this if I have a second.  I was...
[00:00:26] I was just so...
[00:00:29] so, so close to finishing this demo that I had to push it and get it out there.  So I apologize for being late.
[00:00:35] Um...
[00:00:37] This is also true. This is the important part here. This orange juice.
[00:00:49] Alright.
[00:00:51] How's everyone doing today?
[00:00:54] *sniff*
[00:00:56] Yeah, how is everyone doing today? This could be a fun topic. There's so many ways and metrics we can look at JavaScript frameworks and in terms of just kind of like understanding
[00:01:07] um
[00:01:08] Like, how do you make any kind of decision on them?  And I have to admit, hanging out with me today might not make any of these decisions easier for you.
[00:01:17] The truth of everything obviously is like the it's complicated or you know, it's nuanced or whatever and
[00:01:23] Thank you.
[00:01:24] There's different people who are gonna have different reasons.
[00:01:26] for talking about different frameworks and different solutions and tools.
[00:01:31] what to use. And for me, what overwhelmingly led to me wanting to do the stream today was that, um,
[00:01:41] Thank you.
[00:01:42] I don't know. I just saw a lot of takes out there  and a lot of things where I was like,  from where I sit, and again,  everyone has their own levels of depth. I was just like,
[00:01:51] you know, missing some important details.  They're not really...
[00:01:55] Um...
[00:01:56] you know, understanding
[00:01:58] you know, in our way, a lot of the nuances behind
[00:02:05] you know, the thinking, the direction, you know, the alignment of these frameworks of what you're trying to do.
[00:02:12] Right? Like, we can go like, oh, compilers are cool, but what does that mean?
[00:02:17] And
[00:02:18] That's a bit why I wanted to talk about this because the new year is always the time of hot takes, the time of everyone's got their picks and reflecting on the year and it's good.  Yeah.
[00:02:30] As I said, I listened to several podcasts and looked at several things the last couple of days because like...
[00:02:37] It's a time when everyone starts reflecting on where things are at and what the future is going to look like.  And I find that really interesting.
[00:02:44] It's also interesting to me personally,  I would have loved to get an invite on some of those podcasts.  Cause I feel like this time of the year,
[00:02:51] is probably when what I have to say is the most relevant.
[00:02:56] Because everyone who watches the stream knows what I do.
[00:03:02] dissect
[00:03:03] every tool in the space. That's what we do. I just look across the board, look at all the frameworks, look at all the tools and figure out how they work and what they're doing and what's behind their motivations for doing those things.
[00:03:16] So
[00:03:18] So for that reason, yeah, I'm pretty stoked to be here and talk about this. Yes, people saying hi in the chat.
[00:03:24] Um...
[00:03:26] - Thank you.
[00:03:27] Yeah, I'm due for another FS Jam.  Yeah.
[00:03:30] - Yeah.
[00:03:31] Yeah, and okay, here's the thing. I mean, there's no way this isn't going to be an Excalibur stream.
[00:03:37] to a certain extent, right? Like, but...
[00:03:42] What Theo tried to do, this is something that I recognized as soon as he started, I'm like, oh man, this is ambitious.  He's going to be trying to find the framing he wanted because I understood what he was trying to do.
[00:03:53] If anyone hasn't checked it out, Theo's JavaScript framework stream the other day was pretty good.  He'll probably release a video coming up.  And...
[00:04:01] For him, he was framing stuff on...
[00:04:07] how him as a
[00:04:08] average practical pragmatic developer how he is gonna choose between stuff he didn't cover every framework he didn't you know he skipped a whole bunch of them or didn't mention them or or just kind of like
[00:04:19] They didn't fit into his graph because he's like, look, ultimately, end of the day, I'm going to make a product.
[00:04:25] and the type of products I look at, and the kind of considerations. He's like, he tries to expand his bubble a little bit further, where he's like, "Okay, look, if I was this
[00:04:32] person in this case, I would kind of go this way. Or if I'm this person in this case, I'd kind of go that way. And I think that
[00:04:38] That's a difficult task to do.
[00:04:41] because it's a categorization problem, and it's framing it in terms of users, which is probably the most useful thing.
[00:04:50] I'm probably not going to be so ambitious. I think where I sit right now,
[00:04:54] I don't have the authority to be able to do that anymore because my biases and my interests
[00:05:01] no longer, I've worked to the last few years very close in the framework space that I feel like I can't, I can't as clearly articulate that position from like a practicality use point standpoint as someone like,
[00:05:17] Theo Wood.
[00:05:18] I...
[00:05:21] I do have some perspective on that. I don't know. I do feel sometimes like when I'm working the framework space that
[00:05:29] Strangely enough, I'm a bit of an oddity, mostly in that
[00:05:35] Before I got into this and JavaScript frameworks, I almost had two decades of experience in the industry.
[00:05:40] Um...
[00:05:41] And
[00:05:43] That's kind of...
[00:05:45] Different?
[00:05:47] should I say like framework authors and stuff are usually the really young,  smart people who like are brilliant and they're working on the hard problems and  they're figuring out the space.  And I was just this senior engineer,  engineering manager guy who just,
[00:06:03] Really liked reactivity.
[00:06:04] So my perspective is a little bit different.
[00:06:09] And that helped me design the stuff I did for Solid.js.
[00:06:12] But it also means that, like...
[00:06:15] Now that I've been on Frameworks pretty much for the last three or four years now, full-time,
[00:06:20] Um...
[00:06:22] I'm not as up to date on like...
[00:06:25] best practices in a React app. You should ask Theo for that.
[00:06:29] you know,
[00:06:30] Um,
[00:06:32] But yeah, I mean, just to kind of frame the conversation here, um,
[00:06:37] Yeah, I'll talk about it. This is why I was late.
[00:06:41] *sniff*
[00:06:42] we will talk about that um
[00:06:46] Yeah, I'm hoping people get some kind of value through it.
[00:06:49] Do I have a reference to Theo Talk? It's probably on his Twitch channel still. I don't know if he takes his stuff down right away. Theo is a content guy, right? And he knows the power content. So generally he'll stream it and then he'll produce really good content out of it. So I don't know in the intermediate how much of his stuff's available. I mean...
[00:07:09] Okay, Mishikyo Hevery is not a young guy.
[00:07:14] Right.
[00:07:15] But Mishiko Hevery, I also feel like
[00:07:21] uh,
[00:07:22] Yeah, I mean, he also had Angular for that.  Like, he was already in the framework game before Quick, you know, and
[00:07:31] Thank you.
[00:07:35] Alright.
[00:07:37] Yeah, VODs on YouTube, but unlisted.
[00:07:40] Okay, yeah, so that's a little bit tricky to find because he doesn't he does it on purpose too, I think now because he doesn't share the YouTube channel link when he goes live.
[00:07:53] Alright, anyway, let's actually tell people we're live. I know you guys know that I'm live, but other people might not know that I'm live. So let's...
[00:08:02] I usually just ramble a bit here at the beginning because I like to
[00:08:07] uh...
[00:08:09] I like to make sure that people get past those annoying Twitch ads.
[00:08:14] Um...
[00:08:15] Actually, I'm going to share my screen. I rushed in here so fast that I didn't even do that.
[00:08:21] And these really agnostic ad...
[00:08:24] software removals. Alright, okay.
[00:08:27] Alright, let's go...
[00:08:30] to my profile so I don't accidentally leak out some secret tweet someone made
[00:08:34] Um, but yeah, let's
[00:08:36] What do I advertise this one?
[00:08:38] This one. Yeah. And just to talk a bit about the image for this, because I got drew some heat. Um,
[00:08:45] Thank you.
[00:08:49] Um...
[00:08:50] *sniff*
[00:08:51] This image is actually something that I was...
[00:08:57] kind of playing around with as an idea.  And I've pitched it to David,  who runs the Solid community.  And he like just did it for me.  But this was not recently.  This was like,
[00:09:08] Almost two years ago.  I think it was like a year, a year and a half ago.
[00:09:12] Um,
[00:09:15] And
[00:09:17] -
[00:09:18] basically
[00:09:20] I just went with it.  I was like, wow, this is really cool.
[00:09:26] Basically, it was just an idea I had.  And then...
[00:09:28] I wanted to use it to promote a few different ideas, mostly Astro.
[00:09:34] But then, as it turns out, everyone's been telling me that that's the AngularJS logo, not the Angular 2 onwards logo. So I apologize to anyone from the Angular community who was like, what's going on here? I have to admit, outside of the Angular community, probably almost no one knows that. The logos are almost...
[00:09:57] Like, they are similar enough to actually, you know what?
[00:10:00] Let's just look here.
[00:10:02] Oh, sorry about that.
[00:10:04] backstream you guys probably can't hear that
[00:10:07] Alright, cool.
[00:10:09] I was just hoping Twitch to make sure that I actually see everyone in Twitch.
[00:10:15] Because sometimes that does not...
[00:10:17] That does not happen.
[00:10:20] I don't see subs and stuff through the...
[00:10:23] through the channel. Sorry, what I wanted to just put out here is look,
[00:10:27] Angular?
[00:10:28] Let's search for Angular.  This is the Angular logo.  This is the AngularJS logo.
[00:10:33] Right?
[00:10:34] A designer will tell you that these are infinitely different.
[00:10:38] Um...
[00:10:40] Or maybe...
[00:10:45] You know, anyway.  Sorry about that.
[00:10:50] - Bye.
[00:10:52] No, Angular isn't dead. No, no, not a thing. I mean, it's funny because at this time of year, this is the kind of hot takes that everyone's going to have. I mean, you do have to look about trending up and trending down in terms of mindshare.
[00:11:05] But Angular still firmly holds--
[00:11:10] like on NPM downloads, I think Vue and Angular have been on par for ages.
[00:11:16] Unfortunately, we can't use NPM downloads anymore because the stupid view and Svelte spike of this year basically messed that up for us all. You know, you go here and you're like, okay, yeah, what is it?
[00:11:30] Was it NPM Trends or something?  I can't remember the name of the site.
[00:11:35] Yeah, sure. Let's go in here. And you're like, okay, I'm going to look at React because it's a, you know,
[00:11:40] Everyone uses React, okay.
[00:11:42] This is the Christmas drop. It happens every year. Don't look too much into it. And then you're like, OK, let's look at.
[00:11:50] view.
[00:11:53] And then it's like,
[00:11:55] this is this is uh this is this is just messing with everything how about how about svelte
[00:12:04] Most people are aware of this.
[00:12:06] Oh.
[00:12:08] But like...
[00:12:09] NPM downloads for stats are kind of...
[00:12:13] are kind of lost because of this.
[00:12:17] I mean, you could kind of interpolate because when the blip goes away, they continue back to where they were.
[00:12:24] Um...
[00:12:25] And honestly, the other thing about NPM downloads is if you put React in the graph, no one else is even showing up here anyways.  Let's put Angular in here.
[00:12:35] at Angular core, I believe.
[00:12:38] Oh, okay, yeah, see, look, here's Angular.  See, Angular and Vue are basically just sitting on top of each other.
[00:12:45] I don't know what kind of indicator this is of anything, I just want to point out that
[00:12:50] Angular...
[00:12:52] is not dead.
[00:12:53] All right. But we'll talk about Angular today because it's one of the things. And that's  the question. How do we frame this conversation, right? And
[00:13:04] Will there be Excalibur involved? And the answer to those questions is both yes, yes.
[00:13:11] So, yeah, how are we going to frame this?  Well...
[00:13:15] To me...
[00:13:16] There's two ways I can attack this question.
[00:13:23] One of them, the obvious one is just talk about what's going on in each framework. The other one is to talk about areas of interest, right? And I'm also going to pull up at this time, just in case anyone hasn't seen it.
[00:13:33] Surprisingly,
[00:13:35] I got like a tiny bit of a story behind this one is I wrote an article on December 29th.
[00:13:41] And it's about to eclipse my...
[00:13:45] my most viewed article. It's my most viewed article on DevTube, but it's about to eclipse my JS performance article from a couple years ago on Medium.
[00:13:56] And the funniest thing is I wrote this article
[00:13:59] Just because Theo was like, what's your best article this year?  And I'm like, I looked at them and I'm like, these are good, but they're not like that
[00:14:06] I'm just gonna write a new article and that one could be the best article.
[00:14:09] Obviously, you don't do that the day before everyone's trying to compile things.  But I did, and apparently it is.
[00:14:18] I'm going to talk a bit about the stuff in this article as well to kind of frame it because this is where I wrote down a few days ago.
[00:14:27] A lot of my thoughts looking to what the past year has looked like.
[00:14:33] and where we're heading to next year.
[00:14:36] All right.
[00:14:38] How are we doing so far? We are 15 minutes in or so and we've got some people in here.
[00:14:46] Thank you.
[00:14:48] All right, so...
[00:14:52] I guess it's fair to say...
[00:14:55] before
[00:14:57] we get into like 2023 we should talk a bit about 2022.
[00:15:02] Um...
[00:15:04] And
[00:15:05] The truth of the matter is, if we're going to sum up 2022, we have to mostly just talk about the incredible things that have happened on the...
[00:15:17] meta framework side, right? Everyone's released a meta framework. Server rendering has been the focus. And I think that's been obvious. It's been the focus for a couple years now, really. Like,
[00:15:29] The difference was through 2020, 2021...
[00:15:33] - Okay.
[00:15:34] There wasn't such a feeling of like,
[00:15:37] things getting there. We all knew like,
[00:15:38] There's a goal. It's out there. Like it's coming. And 2022 actually saw most things arrive. Right. Yes. December 2020 was the first RC drop. Right. And I expected that some people thought in 2021 we would see that.
[00:15:54] But the truth of the matter is, I mean, and this is a whole other topic. I almost made the stream today about React server components again, and server components again, because I've been diving very deep.
[00:16:06] to understand all the trade-offs, all the context, all that kind of stuff. Because
[00:16:11] Um,
[00:16:13] As you guys know, the solid version of the server components demo is very, very, very impressive.  And I want to put that in everyone's hands, but it's experimental right now because there's a lot of questions around some of the edgier cases.  So I've been exploring a lot and coming to even new...  What's the term?  Yeah.
[00:16:31] new revelations that I wasn't even aware of at the time that I talked about Next last time or even when I demoed Solid. So I've got a lot more to talk about server components, but that's not probably the primary focus for today.
[00:16:45] Though it might come up.  But yeah...
[00:16:48] The thing is,
[00:16:50] I like this mention because...
[00:16:53] How is it
[00:16:55] Thank you.
[00:16:55] That it's always react because it's the big player that actually causes the move to happen the conversation on SSR is
[00:17:01] Began maybe with Next and React kind of back then.  But the actual shift to...
[00:17:08] not SSR as an add-on, which is kind of like how you might view it in most single page apps. You just go like, here's my single page app, now I SSR it. But actually as being a first class citizen,
[00:17:19] Obviously, in the mainstream thinking,
[00:17:22] also showed up.
[00:17:24] Around 2020.
[00:17:28] Thank you.
[00:17:29] Thank you.
[00:17:31] So like, how do we, like, it took React to actually,
[00:17:38] like push people and go, "Oh, there's something here." But like, if you just look at it, like Jason's article about islands showed up in 2020. It's already on thought leaders minds.
[00:17:48] My personal story, as many of you might remember, is in March 2020, I joined eBay to work on Marco, which is a server thing. You could tell that the shift was happening.
[00:17:58] When did Misko leave Angular to work on Quick?
[00:18:02] Also around this time, I don't have the exact dates on it, but if I had to guess, it was late 2020.
[00:18:10] - Thank you.
[00:18:11] So, um,
[00:18:14] This stuff's been in the works for a while.
[00:18:17] but it hasn't really been realized until now. It takes like,  I've been telling everyone it takes 12 to 18 months to write a meta framework.
[00:18:23] We shouldn't be too critical of SvelteKit's time to release.
[00:18:28] other than maybe the fact that Rich slightly underestimated.
[00:18:34] But like, that's the work it takes.
[00:18:37] Thank you.
[00:18:41] You guys are talking about me preambling. Yeah, sorry.
[00:18:44] Redwood took three years. Yeah, and the funniest thing is I bet the more opinionated
[00:18:49] you are, the more, like, the more this is true, right? It's actually, this is like, this is like  a huge challenge, and I mean, this is a whole other tangent, I don't want to go too far down, but like,
[00:18:59] The more opinionated you are, the slower you move.
[00:19:02] - Thank you.
[00:19:03] *sad*
[00:19:03] Right?  And, I mean, this is one of those, like...
[00:19:07] *bip*
[00:19:08] This is one of those challenges, right? Because like...
[00:19:14] in a sense, the more value you bring to those people,
[00:19:18] But the thing is, the opinions on the edge, like the things that you have to build up to,
[00:19:23] or the
[00:19:24] are the things that change the quickest. So you're both the slowest to move and you're subject to the highest volatility the further you take the opinions.
[00:19:33] So it's one of those very challenging things.  Six months? Yeah.  Yeah.
[00:19:38] Yeah, yeah.
[00:19:39] Yeah, definitely six months. It's analog, right?
[00:19:44] Yeah, I was going to mention analog today when we talked about Angular.
[00:19:48] .
[00:19:50] We have the, yeah, okay. Sound deployment integrations. I mean, there's that. These things have gotten easier thanks to Vite, thanks to other people all working on the exact same things.
[00:20:06] What do we got here, Maple? I haven't read this yet, but I trust anything you say. The amount of work it takes to actually solidify Metaferm and cover all the use cases, that's one of the reasons I haven't made my own yet. I also lack background and inferred knowledge, yeah.
[00:20:17] Yeah, so...
[00:20:20] Yeah, I mean, this is...
[00:20:22] This is a long time.  Someone's asking about Astro too.  I mean, Astro came out, I want to say February 2021.
[00:20:32] If my memory is correct,
[00:20:34] So like
[00:20:36] -
[00:20:37] I think this is all like, just kind of putting this into perspective of what the last year's kind of been like.
[00:20:44] For me personally, I talked about a few topics. I talked about hydration.
[00:20:50] I talk about
[00:20:51] the new routing stuff that I've been working on.
[00:20:54] signals everywhere and TypeScript-driven development.  And the funny thing is these topics are still the topics  that are gonna come into 2023.  So let's get to Excalibur and kind of like talk a bit about,  what are the areas that are like moving
[00:21:08] in frameworks, you know, we'll just make a list at first and then we can kind of decide what we're going to do with it.  But like, like this, this kind of helps frame our discussion today, right?  Because we're going to be like, okay.
[00:21:17] uh,
[00:21:18] JavaScript,
[00:21:20] frameworks... I don't want to call it.  It's not like areas. It's like
[00:21:25] Like...
[00:21:26] It is areas, we'll figure out if there's a better word for it, but okay, what do we got first? I think the first area we should talk about
[00:21:34] It's not even to talk about it. I'm not going to put these in any order, actually.  So let's... But yeah...
[00:21:38] Um,
[00:21:39] These are things that are topics.
[00:21:44] There's stuff like
[00:21:48] uh update models
[00:21:50] Okay.
[00:21:51] Stuff like
[00:21:53] - Okay.
[00:21:54] Rendering performance.
[00:21:56] Stuff like
[00:21:58] Async consistency, I'm going wide here. These are things I just want to collect everything that everyone's working on right now.
[00:22:06] Server rendering
[00:22:08] performance
[00:22:14] Hydration performance, yes, these are two different things.
[00:22:18] Um...
[00:22:20] And then maybe something around...
[00:22:22] compilation, because that's a buzzword people like to talk about. And I also want to talk about like,
[00:22:26] tooling
[00:22:27] integration
[00:22:29] pieces. Largely about TypeScript, but just kind of understanding. I think
[00:22:34] Let's see if anyone else for the chat has any kind of ideas here, but I think this is generally what we're looking at as kind of hot topics in JavaScript frameworks right now.
[00:22:47] Right, so...
[00:22:51] Thank you.
[00:22:53] *sad*
[00:22:54] Integration with React.
[00:23:00] -
[00:23:01] Yeah, I mean, resumability is hydration or not hydration. I mean, it's part of that same thing, right?
[00:23:07] Um...
[00:23:08] Yeah, and...
[00:23:09] Don't get me wrong, I told you at the beginning, I'm not picking a list of things that you should consider for choosing your framework.
[00:23:17] I'm talking about...
[00:23:19] about
[00:23:21] what frameworks are doing.  A lot of people are probably sitting there like,  are they twiddling their thumbs?  React didn't do anything for like five years, right?
[00:23:32] It's not true.
[00:23:33] And these are areas...
[00:23:35] that these are feature and technology differentiators.  We'll talk about the other aspects too,  as we talk about this framework specifically,  but I just want to highlight some of the topics so that when we,  this is almost like our glossary,  so that like when we go and talk about the individual frameworks,
[00:23:50] You guys have a bit of an understanding of what these areas are.
[00:23:58] Right.
[00:23:59] Yeah, so state management is part of update models from my perspective. That's what I mean. When I talk about update models, I am talking about state management to a degree, right?  So let's elaborate on these a little bit more so people can get a better idea of what I mean.  So when I'm talking about update models, I want to talk about signals.
[00:24:20] I want to talk about the impact of things like signals.  I mentioned this in the blog post.  I thought this was really...
[00:24:26] Quite an awesome tweet.  For those who don't know, you know,
[00:24:29] Getting some angular love again.  Paul Kozlowski is...
[00:24:33] a core Angular team member, works for Google,
[00:24:37] Um...
[00:24:38] and wrote this: "Signals are the new VDOM. There is an explosion of interest. Many people are trying things that will let us explore the space, try different strategies, understand and optimize things. Not sure where we're going to settle in the end, but this collective exploration is great."
[00:24:50] That is a statement.
[00:24:53] Right?
[00:24:54] Thank you.
[00:24:55] That is a statement.
[00:24:57] And again, it's from Corti member of Angular.
[00:25:00] I have learned not to sleep on Angular recently. I know everyone in the React community likes  making butt of the jokes a little bit.
[00:25:11] I can see why, and when we talk about Angular, people might see why, but
[00:25:15] Here's the thing.
[00:25:18] If I had been paying attention to Angular in 2019,
[00:25:22] I would have known about resumability
[00:25:25] before having to basically completely with the marco team we basically rediscovered ourselves  about a year and a half later and when i say we i mean michael rawlings the guy's a genius but like
[00:25:36] - Yeah.
[00:25:36] Essentially...
[00:25:39] Angular was not on my radar.
[00:25:41] And I missed a very important technology that we basically had to discover it ourselves.
[00:25:47] independently. And I feel like that would have saved us six months
[00:25:52] of like thinking and working through problems.  If we had seen Michko's talk from ng-conf
[00:25:59] 2019.
[00:26:02] So I just want to kind of point that out there.
[00:26:06] Don't get me wrong.
[00:26:08] on the other hand side of things,  Angular might be...
[00:26:13] on the metrics that I like the things I talk about here,  like when I talk about like where progress  and innovation is happening,  Angular might be one of the furthest behind generally.
[00:26:24] Right?  So, yeah.  I just want to talk about signals.  It might be worth talking about...
[00:26:31] - Okay.
[00:26:32] like state management...
[00:26:36] I'm gonna call it atomic state management in React.
[00:26:40] atomic state management, there are similarities to signals
[00:26:44] I feel like
[00:26:45] I feel like these are both suggesting the same kind of thing, right?
[00:26:48] So when I talk about this, I'm talking about Jyotai.
[00:26:50] And Recoil.
[00:26:52] These are not the same. I have a whole stream on how these are not the same.
[00:26:57] And the funny thing is,
[00:26:59] this ties into rendering performance, because on the DOM side of things, just for clarity for anyone following along here, rendering performance has not changed in six, seven years. When Inferno came in and was like,
[00:27:11] We're way faster than everything else.
[00:27:13] Nothing has really changed very much from that. Solid added a couple things that improved
[00:27:20] performance.
[00:27:21] uh
[00:27:23] from the raw standpoint,
[00:27:25] You have to understand with a benchmark, like JS Framework benchmark, it's more about the DOM overhead than it is about like,
[00:27:32] the cost you...
[00:27:34] in pose by uh
[00:27:37] how do you say it, the cost you impose by writing your end user code.
[00:27:44] Like optimal VDOM written code and optimal any system code is going to perform relatively similar as long as the engine underneath it is pretty fast.  So it's not that.
[00:27:57] But...
[00:28:01] there are
[00:28:02] places where you can still optimize, obviously.  And we've covered this on stream a couple times,  both in my last stream about reactivity and rendering.  We also covered this when I showed how to use preact signals  to make a solid-like renderer and show how it works
[00:28:17] significantly outperforms Preact or Preact with signals.  So, like...
[00:28:23] But the...
[00:28:23] There's efficiencies and inefficiencies everywhere. So I'm gonna talk about this because I think just to kind of put it out there signals and
[00:28:31] for rendering performance.
[00:28:34] In VDOM is an interesting topic
[00:28:36] Again, I'm highlighting this.  I'm going to spend a ton of time on this today,  but I'm going to use examples like...
[00:28:42] Preact and Quick are good examples where you can kind of like get very specific optimizations out of this rather than like a...
[00:28:51] Yeah, anyway.
[00:28:52] So I think this, the other place of this is...
[00:28:56] No VDOM.
[00:28:58] And I think...
[00:29:00] I think...
[00:29:01] We were seeing stuff like View Vapor.
[00:29:03] that is heading this way. Okay? So we're going to talk a bit about rendering performance in this
[00:29:08] thing. Async consistency. What am I talking about?
[00:29:11] This is not a new topic.
[00:29:13] But I think...
[00:29:16] I don't know if there's been a ton.
[00:29:18] of movement here, but I think suspense, transitions, current mode are all parts.  And most frameworks have some of the tools here.
[00:29:26] but not all of the tools here. So, these are areas that people are working on. When you bring async
[00:29:34] into a framework.
[00:29:36] you have some very serious decisions to make.
[00:29:45] Yeah, but the...
[00:29:50] The funny thing is, this is not going to...
[00:29:55] - Yeah.
[00:29:56] React's not going to let you forget about it.
[00:30:06] Right.
[00:30:09] Yeah, I mean this is a very good point. The fastest VDOM libraries don't use signals.
[00:30:16] Yeah.
[00:30:18] It's that simple.
[00:30:19] Yes.
[00:30:21] right? Because each has a trade-off  where they're, like, more expensive.  And it's...
[00:30:27] it's easier to remove stuff than add stuff, so to speak. So essentially,
[00:30:33] you can add something to improve one other area at the cost of somewhere else
[00:30:38] generally speaking
[00:30:40] Ultimately,
[00:30:42] Okay.
[00:30:43] going one way or the other is actually going to be the best for performance.
[00:30:47] Bye.
[00:30:48] All right, server rendering performance.
[00:30:53] I...
[00:30:54] String rendering?
[00:30:56] is a thing.
[00:30:57] This is like, if you're using a BDOM, you can render to string.
[00:31:00] um
[00:31:02] I'm going to mention, obviously, solid, svelte,
[00:31:06] I've been doing this for years, but quick,
[00:31:08] and preact.
[00:31:10] added this past year. So it's a big one, improved server rendering performance.
[00:31:15] Um...
[00:31:17] uh...
[00:31:19] But...
[00:31:19] And the other one I'm going to talk about here is, I think we should mention is streaming.
[00:31:23] Streaming is the ability to control how your pages serve back.
[00:31:31] And we've been seeing a lot of frameworks add streaming support.
[00:31:35] again, I've covered almost all of these topics in...
[00:31:40] in
[00:31:41] in other streams. Um, but I just want to kind of point out,  these are areas that people are working on, right? Um,
[00:31:50] ...
[00:31:51] Solid added streaming in 2020, and then React added in 2022, and we're seeing it quick, astro. A lot of solutions are adding streaming. Hydration performance, we probably want to mention...
[00:32:08] What should we mention here?
[00:32:10] Actually, you know what? There's more on the surrounding performance. I mentioned streaming
[00:32:14] string rendering, we should talk about
[00:32:16] We should talk about Edge.
[00:32:19] and caching, right?
[00:32:23] -
[00:32:24] street hydration performance
[00:32:27] Obviously, islands.
[00:32:32] uh server components
[00:32:35] Thank you.
[00:32:37] Resumability
[00:32:39] And funny enough, I think routing is actually...
[00:32:43] a next frontier on the on this sort of stuff
[00:32:47] Thank you.
[00:32:48] What's going on, Excalibur? Can I not scroll? Yeah, okay.
[00:32:51] Sorry, this list is getting too long, isn't it?
[00:32:55] Thank you.
[00:32:58] Okay, and then compilation.
[00:33:01] This is a tool, I don't think people should view,  the only thing I really wanna say about compilation is,
[00:33:10] It's everywhere.
[00:33:12] It's a tool.
[00:33:13] Essentially.
[00:33:14] It doesn't...
[00:33:16] It lets us do some stuff ahead of time, but in itself,
[00:33:21] is not...
[00:33:22] Like...
[00:33:25] It's not the paradigm. Everything that gets compiled runs something.
[00:33:29] so
[00:33:32] I might just leave it at that. And then tooling integration, another area of focus frameworks, a lot of stuff is getting better TypeScript support. We've seen in the past couple years, Vue and Svelte just get way better in this area.
[00:33:42] um but we're this thing this this is including into like automated stuff like
[00:33:49] Honestly, stuff like what TRPC is doing right now for refactors, like when you change schemas and stuff, is insane.
[00:33:58] So people are working on this kind of type stuff.  I've been seeing a lot of auto generation type stuff based off Zod schemas for forms and all this kind of stuff.
[00:34:10] I very, very quickly here went through a list of where I see...
[00:34:16] from a JavaScript framework standpoint,
[00:34:18] A lot where the work is happening.  And I've bucketed it into...
[00:34:23] Um...
[00:34:24] uh,
[00:34:28] into these kind of categories to help me at least be sane about this.
[00:34:36] Yeah, how are we doing chat? I've been just running my head off for a few minutes.
[00:34:41] Um...
[00:34:44] Yeah, how are we doing? Sorry, just catching up with all that. Make sure that I didn't miss any subs.
[00:34:51] Day Dev subscriber Prime thank you very much.
[00:34:55] Um,
[00:35:01] Yeah, I don't have mods, so I'm like the worst.  Like, people would have got Code Monuments, subscribe to your one.  Thank you very much.
[00:35:12] You Trolleg subscribe to Prime's Wealth.
[00:35:15] Thank you.
[00:35:16] Thank you. I appreciate it. For those of you who don't know, if you have an Amazon Prime thing, you can choose one Twitch streamer and just give them...
[00:35:25] Five dollars a month and it costs you nothing just use your prime subscription Amazon gives you that for free if you just leave it sitting there and
[00:35:32] You're just losing the opportunity to give someone money.
[00:35:37] Alright, cool, cool, cool.
[00:35:40] - Thank you.
[00:35:41] Alright.
[00:35:45] um
[00:35:50] What? Sogiest pizza? What are you guys talking about? Okay, I'm... I don't know what... I... this is...
[00:35:56] This is what happens if I can't keep up a chat.
[00:36:02] People are talking about
[00:36:04] Google, this is Marco's feature list.
[00:36:08] Oh, man.  I have often said that Marco...
[00:36:12] Maybe...
[00:36:13] the most advanced JavaScript framework.
[00:36:16] As we all know, that might not necessarily be the most important thing.
[00:36:20] but
[00:36:22] Yes.
[00:36:24] .
[00:36:26] All right. All right. So let's keep on going.
[00:36:30] -
[00:36:32] How do you fix a soggy pizza?
[00:36:35] Seriously.
[00:36:36] Do you like put it back in the oven? Like you got to worry about the outside like kind of burning while you're trying to like deal with the extra moisture.
[00:36:45] No? Okay.
[00:36:48] Um...
[00:36:52] Don't forget to mod me.  I don't even know how to mod someone in Twitch.  Let me see.  Where is...
[00:36:58] uh, AGC dev.
[00:37:03] Pin reply. Yeah, I don't I don't know how to do anything in here.
[00:37:19] Sorry. Okay. I'm not going to get distracted by this right now. We'll just keep on going for now.
[00:37:24] mod username, thank you, see? This is such an easy interface, right?
[00:37:30] Sorry, give me a second.
[00:37:35] - Okay.
[00:37:37] Hopefully that worked.
[00:37:44] Oh, okay. Hey, we got subscriptions coming in. Thank you very much. Uh,
[00:37:49] JulianNG, subscribe to tier one, thank you very much. UbuntuReiki, create it, or sorry, what else do we got here?
[00:38:01] Cut.
[00:38:01] I can't say that yet. Deal458, thank you, with Prime as well.
[00:38:06] .
[00:38:10] Thank you.
[00:38:11] All right.
[00:38:13] Cool.
[00:38:14] There we go.  And Le Spicy Baguette.
[00:38:18] I appreciate it.
[00:38:21] And
[00:38:31] Alright, cool.
[00:38:32] Thank you.
[00:38:34] Thank you.
[00:38:37] Alright, so the mod thing is solved. We're in good place. Sorry, I am just a noob when it comes to this stuff. I don't know anything. Um...
[00:38:44] I, I,
[00:38:45] This is part of me.
[00:38:47] It's funny, I did watch a lot of streaming Twitch over the years.
[00:38:52] really enjoyed speedrunning, not playing it, just watching it.
[00:38:56] And so that's how I got into Twitch, especially when my youngest was very young. You'd be up like
[00:39:02] late at night and bright colors,
[00:39:05] Super, a lot of watching a lot of Super Mario Maker, a lot of, uh...
[00:39:08] Grand Pooh Bear. Okay, let's keep on going. Sorry. You guys are like moving on. Come on, move it on. Okay, let's keep on going. Okay.
[00:39:15] Hot takes come later after I like establish the knowledge base so that everyone
[00:39:20] can talk on the same language here. Of course, many people who follow the stream usually are like,  "Yeah, I know all this stuff already. Ryan, you're just rambling like you always do."
[00:39:29] Okay.
[00:39:31] Okay.
[00:39:32] All right, so
[00:39:34] I think these are all interesting topics.
[00:39:38] and
[00:39:39] I-I-I...
[00:39:41] - Yeah.
[00:39:42] And I think that...
[00:39:44] not only this year, next year is going to be still about all of these topics.
[00:39:49] because we don't know the extent to which they will impact the JavaScript ecosystem.  Right. Like last year is really easy to kind of point out a lot of the hydration work because it's finally here.  But it's also like.
[00:40:01] If you read...
[00:40:03] read this stuff and I actually made a big deal about TAN stack router. I think this is really awesome. I've seen TypeScript routers before but they never felt
[00:40:10] like,
[00:40:12] Something I'd want to use where this is actually quite impressive.  But my big overarching prediction for 2023...
[00:40:22] was around, not prediction, but areas that I thought in addition to 2022 that we wanted to kind of look at was...
[00:40:29] complexity around  server rendering hydration. I think  we're getting to a point where you're going to go like, look,  we can do all the things and
[00:40:36] but it's really hard to determine
[00:40:40] Like,
[00:40:41] How much you want to...
[00:40:45] have in mind when you have this authoring experience.
[00:40:49] Um...
[00:40:51] And what I mean about that is like I've used...
[00:40:54] I used all the experimental stuff this year.  And when I say experimental, I mean, some of it's now beta and stuff.  But I was working on the Marco team.  So I was using Marco 6.  I spent a lot of time in Quick.  Everyone who's followed the stream knows I built one of the first, like,  Quick routing demos.  I built many apps.  And over the year, Quick's DX went, like,
[00:41:15] 200% improvement, right?
[00:41:18] - Thank you.
[00:41:19] I've worked with Server Components, was involved in making Server Components for Solid. The thing that
[00:41:25] And then I also got to play Astro a number of times, and Remix, and SvelteKit, and literally all of them.  And one thing that I noticed is like...
[00:41:36] There's a significant difference for the most part between stuff that's being built currently off the existing Spa Plus...
[00:41:43] architectures, things like Remix,
[00:41:45] Um...
[00:41:46] and SvelteKit and even Salt Start where you can come in and you're like,
[00:41:50] This makes sense to me. I'm familiar with this.  And the DX feels really good.  It's like there's been this kind of jump up.  Like, next showed the way, and now you're like, okay...
[00:41:59] all the pieces that come together. We have mutation stories. We have like a full picture here.  And we gotta thank Remix for this largely.
[00:42:06] for pushing a lot of stuff along this direction, but I have to admit
[00:42:09] It was going to happen this year anyways. Before I ever saw a remix, or SvelteKit saw a remix, we were
[00:42:15] building the story.
[00:42:16] Um...
[00:42:18] It just so happened that...
[00:42:20] Remix, because they had React Router and stuff, and because Brian Florence has basically remade and remixed probably like
[00:42:26] I don't know many times over the last five years for demos he's done in his talks. They basically were able to get there first.
[00:42:34] Thank you.
[00:42:34] but essentially
[00:42:38] Mm-hmm.
[00:42:39] on the meta framework side of things.
[00:42:42] The stuff on that side, it's very
[00:42:45] clear
[00:42:46] like how that DX story has improved and how,
[00:42:50] how
[00:42:51] It's easier now ever that it gets server-side rendering folks back in.
[00:42:55] On the other side of things, when we start talking about React server components, solid islands or island routing and Quick in general and Mark06 and stuff, you start getting into this zone where you're like,
[00:43:08] I have to know these new concepts.  And you could argue you need to know that a bit with reactivity and solid.  But I mean, like...
[00:43:15] I need to be very
[00:43:16] conscious of the server client divide and what it means and how it affects how I author things.
[00:43:23] I made a remark here in this article that might seem a little bit...
[00:43:31] I don't know. Some people might not take it the right way.
[00:43:35] Right.  Where...
[00:43:37] I said something along the line, and I haven't mentioned Astro yet, because Astro...
[00:43:42] is interesting, which I'll elaborate in a minute.  But I said, Astro and Remix has returned to its just PHP rails  for MPAs and single-page apps, respectively.  Astro is on the MPA side, Remix is on the single-page app.  It has been largely really successful.
[00:43:57] And I said, even if both lack the important benefits of more sophisticated solutions.  And some people are like, what do you mean?  You're calling Remix not sophisticated?  And I was like, no, no, no, no.  You have to understand...
[00:44:07] that
[00:44:09] Thank you.
[00:44:09] These solutions...
[00:44:12] are like the entry level from the tech complexity side of things.
[00:44:15] They're like, we're going to solve the most minimal part of that equation and show it to you.  So in a sense, you could consider...
[00:44:22] you know, what Quick or Marco is doing as a more sophisticated version of what Astro is doing,  or you can consider React Server Components a more sophisticated version of what Remix is doing.
[00:44:32] And...
[00:44:34] what I was saying is once you get out of that side where things seem
[00:44:38] you know, simpler,
[00:44:40] you're into a world of complexity where suddenly you're writing custom language server plugins to make sure you can understand when you're dealing with server components.
[00:44:49] or special linters and stuff, or--
[00:44:52] needing to like be very conscious like oh yeah
[00:44:55] this gets serialized or this doesn't get serialized. Like this can't be let it has to be a const because it can't change.
[00:45:03] This gets hoisted...
[00:45:05] You know, this is a type of thing that can't be...  You know, once you get into this zone, the complexity skyrockets.  And that's why I've been looking a lot here, because...
[00:45:17] I think 2022 we showed what was possible.
[00:45:22] But we need to kind of like dial it back for a second and figure what's in
[00:45:26] enjoyable and you're gonna see this throughout um throughout i i you know i i've been seeing a lot of this messaging going around to you um
[00:45:34] I didn't bookmark it.  Maybe we'll get to it later.  Manu, main dev behind Qwik these days,  wrote a great tweet thread  talking about what he wants to see in Qwik in 2023.  And a large part of it is about DX wins.
[00:45:56] Got some questions in here in chat while I'm going off.
[00:46:03] The only person who's tried every framework that's on FSDAM. Yeah.
[00:46:07] Maybe you guys cover a really wide range.  I got to give you props there.  FSjam and PodRocket, I've showed my love to both of those podcasts.  And I...
[00:46:17] Yes.
[00:46:18] FYI, I was on PodRocket last month talking about SolidStar, talking about islands and server components.
[00:46:26] It dropped today, so...
[00:46:29] do check that out. Maybe I'll drop it in chat just because.
[00:46:33] -
[00:46:34] Okay.
[00:46:35] Here we go.
[00:46:38] Let's just drop that in. This did happen.
[00:46:41] All right.
[00:46:51] Yeah, yeah. And sorry, when I was talking about tooling integration,
[00:46:55] Yeah, there's just so much stuff here. Let's just keep on going.
[00:46:59] Um,
[00:47:00] So what I was trying to say is that I think...
[00:47:03] these technologies really are the future. Having used them,
[00:47:07] What they achieve is...
[00:47:08] Amazing.
[00:47:11] But
[00:47:14] I want to have a sobering moment here for everyone who's chasing after...
[00:47:19] you know, these kind of hydration type
[00:47:22] technologies.
[00:47:24] in that
[00:47:27] *sigh*
[00:47:28] We've tried some of this stuff in the past.
[00:47:33] You've got to go back far enough.  But in the mid-2000s, everyone was really keen on server-side rendered technology because that's what it was.  It was .NETs, the PHPs, the Rails.  And we were like, they didn't want to write JavaScript.
[00:47:45] Now our motivations for not writing back-end code in Go or PHP and doing everything in JavaScript might be different.
[00:47:54] But...
[00:47:56] There is some commonalities here.
[00:47:58] Because...
[00:48:01] Yeah.
[00:48:02] Part of it is like you don't want to have to deal with two different languages.
[00:48:06] And you might have been saying for them it was a losing battle because JavaScript is the language of the browser.
[00:48:11] But they tried. And we ended up with monolithic messes of crap. Update panels, view state, anyone who, like, I literally was the most miserable time in web dev from my perspective.
[00:48:24] Single-page apps saved us from this huge slough of complexity.  It was so messy back then, trying to write your C-sharp code  and then knowing that some of it would run on the client only  and then update and rerun parts of it on the server  and then being aware of those boundaries  and keeping track of app state, view state,  multiple different types of serialization patterns  to communicate both ends of things.
[00:48:52] Um,
[00:48:54] And it's...
[00:48:57] It was kind of terrible, and
[00:49:00] when I started seeing the movement into this zone again,
[00:49:03] I was like, man, this is this is
[00:49:05] This is like not a happy place.  And I think we've done a lot to alleviate that.
[00:49:12] But
[00:49:13] We can't...
[00:49:15] Forget.
[00:49:17] this because...
[00:49:19] *sigh*
[00:49:21] As ambitious as we are,
[00:49:25] It's not like the people who are working on those solutions are any less clever or any less, you know...
[00:49:29] motivated. So I,
[00:49:32] You know, we do need to answer what's...
[00:49:35] what's different this time.  And...
[00:49:38] I do want to ask that question.
[00:49:41] Thank you.
[00:49:42] And I think that's going to be the critical question on the hydration side in 2021.
[00:49:47] three is
[00:49:48] Do we believe that what could be shipped to the browser should be shipped to the browser?
[00:49:55] Eventually...
[00:49:56] Quotes.
[00:49:58] Or...
[00:49:59] Should what?
[00:50:03] can run on the server, always run on the server.
[00:50:08] And it's funny because there's a lot of people talking about, oh,
[00:50:13] MPA single page app, that distinction is melting away.
[00:50:17] But it doesn't necessarily melt away in a single direction, is how I beat it.  And I think...
[00:50:22] there is still a fundamental question split that we have to ask ourselves here.  Even as things stop being MPA or SPA, there are different ways things can stop being an MPA or SPA.
[00:50:34] Um...
[00:50:37] - No.
[00:50:38] Yeah, it depends is always the case.
[00:50:41] Um...
[00:50:42] But I don't want to cop out with an it depends.  I actually think...
[00:50:46] for this side
[00:50:49] There's kind of...
[00:50:51] two perspectives, and I was gonna graph it,  but it doesn't actually make any sense to graph it here.
[00:50:56] There's...
[00:50:56] There's the idea that
[00:50:59] there's gonna be one solution that does
[00:51:03] All things...
[00:51:07] And the other one is that there's going to be multiple solutions
[00:51:09] that you can choose between.
[00:51:13] Thank you.
[00:51:14] and different technologies are aligning around that vision.
[00:51:19] Because, yeah, actually, let's talk about this.
[00:51:22] One solution
[00:51:29] And I apologize to anyone who thought, like, we'll get to where we're going to get it to, but we never get there the most direct route.
[00:51:39] I...
[00:51:40] So I, you know
[00:51:42] - Yes.
[00:51:43] When I talk about one solution versus multi solution,
[00:51:46] These things have been given
[00:51:48] sort of like
[00:51:52] - Ooh.
[00:51:53] While these aren't all the same technology, it's the same way that like back-end framework languages, like people working in PHP, can align with web components.
[00:52:00] It's those kind of alignments that I wanted to talk about here.  So when I talk about multi-solutions, I'm going to bring up a term you might have not heard for a while, #transitionalapps.
[00:52:10] That's the champion, really, of the multi-solution approach.
[00:52:15] So
[00:52:16] And the one solution approach
[00:52:21] Um...
[00:52:22] - Ah.
[00:52:25] I don't know, it doesn't actually have a name, right? But what I'm getting at is,
[00:52:32] there's one school of thought that's like, okay, some of my pages are multi-page app pages.
[00:52:38] You know, so let's see how we're going to write this.  But like the idea is like...
[00:52:42] Some
[00:52:44] MPA, some spa...
[00:52:46] you know, put them together.
[00:52:49] And this side is more of like...
[00:52:54] Server components.
[00:52:57] Okay.
[00:52:58] Okay.
[00:53:00] Right?
[00:53:02] - Yeah.
[00:53:04] There's basically...
[00:53:09] I'm trying to think of the best way to visualize this.
[00:53:16] Yeah, I saw what they did with the Svelte kit.
[00:53:19] analogy. I'm only going to accept Richard's original
[00:53:25] original kind of definition of it.
[00:53:27] Right.
[00:53:28] This side very much aligns with
[00:53:32] What will be...
[00:53:34] client
[00:53:35] will be
[00:53:37] No, what could be, will be.
[00:53:42] And this side very much aligns with
[00:53:45] It's it's it's it's it's it's it's
[00:53:49] Um...
[00:53:51] It's funny because this alignment probably is less obvious to people.  But this side actually aligns much more with like...
[00:53:59] on the server, stay server.
[00:54:02] um,
[00:54:05] Right.
[00:54:07] Thank you.
[00:54:11] So like people picturing like another example,  this is like,
[00:54:16] starts
[00:54:17] partial,
[00:54:18] becomes...
[00:54:19] Spa like that fits on this side and
[00:54:23] Um,
[00:54:29] Hybrid.
[00:54:30] Routing.
[00:54:32] fits on this side.
[00:54:47] Yeah, the one in the talk is the only one that matters, talking about transitional apps.  I agree.
[00:54:52] - Thank you.
[00:54:57] Am I going to put frameworks in each solution?
[00:55:00] Well that's the thing, I don't, the choice here,
[00:55:03] isn't necessarily
[00:55:07] It's a direction.
[00:55:10] Frameworks don't have to choose, like maybe frameworks have to choose a side
[00:55:16] But they don't have to choose a particular side because of the way they're architected.
[00:55:21] is what I'm trying to say here.
[00:55:24] Like...
[00:55:27] I just want to point out that some are choosing sides right now.
[00:55:31] Thank you.
[00:55:32] but
[00:55:37] Yeah, exactly, right?
[00:55:41] Thank you.
[00:55:42] I mean, I can give you a hint. Stuff like Svelte and SvelteKit definitely was on the transitional app side of things.
[00:55:51] Right?
[00:55:54] But another example on this multi-solution side is, this is how we're recommending people  use Astro.
[00:56:01] Right now.
[00:56:02] Right.
[00:56:04] I don't want to put the only reason I don't want to put frameworks here is because they might change.
[00:56:09] Right. Because the multi-solution way is actually...
[00:56:13] existing.
[00:56:15] Right? Like, people can already do the multi-solution thing today.  They just have to be, like, more conscious of it.  Like, your next app doesn't give you the best MPA...
[00:56:26] solution. So like maybe what you actually want to do is like use something Astro, which optimizes  your like your marketing site and your MPA side of things. And then you maybe want to somehow do  like in a mono repo or something, have a next app that does your app part of the side. Or maybe you put
[00:56:43] make a page in Astro that has a React app on it or whatever.  My point is like,
[00:56:48] The multi-solution approach exists today
[00:56:52] The ones...
[00:56:53] solution thing is where all the really ambitious work is happening right now.
[00:57:02] I want to know what side has the framing that's most suited for that side.
[00:57:12] You start wondering to fail once.
[00:57:18] *sigh*
[00:57:25] Thank you.
[00:57:27] I can make a couple comments on that to you, AJ.
[00:57:31] On the multi-solution side,
[00:57:34] Thank you.
[00:57:36] If we're ignoring like the current state of things and
[00:57:39] where MPAs are not optimized.
[00:57:45] Um...
[00:57:49] So generally speaking, there's going to be two thoughts here.
[00:57:53] There's gonna be islands.
[00:57:55] Like Astro?
[00:57:58] Right?
[00:57:59] And then there's going to be things like Quick.
[00:58:03] Because Quick can literally go from optimal MPA style to spa within one app.  With one thing.  But you could argue that Quick's ability to do that...
[00:58:15] is sort of also...
[00:58:17] Thank you.
[00:58:18] one solution, right?
[00:58:21] *sniff*
[00:58:22] Like, it... but it's different than the on-server, stay-on-the-server hybrid routing side.
[00:58:31] Um,
[00:58:31] The funny thing is, if you look at Quick, they almost never do this.  They never start partial income spot.  All Quick apps are MPAs today, pretty much.
[00:58:40] So like...
[00:58:42] - Okay.
[00:58:45] they could fit on the one solution side as well.  So right now they're kind of going either way.
[00:58:51] Another interesting one, though, is like on the OneSolution side, clearly React server components in Solid are basically the only ones over here.
[00:59:01] Right? Like on the One Solution side right now?
[00:59:04] Like...
[00:59:08] So like
[00:59:11] Amen.
[00:59:13] Like...
[00:59:14] React is betting hard over here.
[00:59:20] Solid is like
[00:59:21] I'm like...
[00:59:23] Like, if this was like a spectrum line of who's like,
[00:59:27] who's going across here, right?  Like, we start from here to here, and we're like...
[00:59:33] All right.
[00:59:34] And we're like...
[00:59:35] Where do you fit on the spectrum on betting on this side?  I feel like Reacts over here...
[00:59:42] And historically,
[00:59:44] Svelte has been over here.
[00:59:49] And historically,
[00:59:50] Remix has been over here too, okay? I don't know if they're gonna change. I saw a tweet where it suggests that Rich Harris wants to add server components, but historically it's been a bit like this:
[01:00:00] And
[01:00:03] What's interesting is like you got quick is like
[01:00:08] is like right here.
[01:00:11] And Solid is like, right...
[01:00:13] right here.
[01:00:16] That's how-- and I'm sure Vue and others have--
[01:00:19] their opinions, but I feel like
[01:00:22] I feel like Vue is like right here.  They're like...
[01:00:25] Maybe we're not with those guys, but we're like, we're here.
[01:00:33] But the challenge with this line is, you're asking what about Marco, Fresh and Hydrogen, any of the partial...
[01:00:39] hydration solutions
[01:00:41] *sniff*
[01:00:42] aren't
[01:00:47] Yeah, yeah. The thing is, any of the partial hydration solutions
[01:00:50] Yeah.
[01:00:51] classically might have been really hard
[01:00:54] on this side, 'cause you're like, look, an MPA is an MPA.  The only reason that I know for a fact
[01:01:00] that
[01:01:03] Thank you.
[01:01:03] Like...
[01:01:06] you
[01:01:07] Yes.
[01:01:09] The only reason that I know for a fact that like...
[01:01:12] Because you could argue that we should put Astro...
[01:01:17] fresh, Marco,
[01:01:20] over here somewhere
[01:01:22] They're not betting as hard as some of these guys because they're like...
[01:01:26] Like these guys also are not very optimal as an MPA.
[01:01:29] so like  they're gonna like yeah you know there's some over here but
[01:01:33] If you talk to the developers behind them,
[01:01:41] Thank you.
[01:01:43] and
[01:01:44] They are very interested in the potential of the OneSolution because server components and islands have a lot in common.
[01:01:51] so
[01:01:53] This is more about historical positioning of where the frameworks have made messaging about this, but it's not about
[01:02:01] This is why I have a hard time putting them in because it's just as easy to see these guys jump right over here if it looks...
[01:02:07] if it looks proper.
[01:02:10] Quick right now can go either way and might try and do both.
[01:02:14] Solid definitely is leaning more on this side because of the work we've done.
[01:02:18] But there's obviously interest
[01:02:20] Um...
[01:02:22] in this zone. So I don't know if it's the best line graph, but I just want to put it put it there.
[01:02:31] Thank you.
[01:02:33] Hybrid routing is when you, like server components,  like when you route and you render stuff on the server  and you keep the client side...
[01:02:40] Refreshing because that whole routing mechanism is based on this idea that hey this stuff is server only it stays on the server and
[01:02:47] It's the idea that you server render the next
[01:02:50] parts of the next page, rather than client render them on navigation.
[01:02:57] Okay, so...
[01:03:00] We're going to move on from this point here, but
[01:03:06] How's that different than a Node app?
[01:03:08] Well, most...
[01:03:10] Thank you.
[01:03:11] Because the...
[01:03:15] The...
[01:03:17] Most apps, like MPAs,
[01:03:19] Every time you go to a new page, you re-render the page on the server, the whole browser goes away, it comes back.  You know, like you reload the page, you lose any client-side state, like it's gone.
[01:03:30] There's been very two camps. There's the MPA side where everything just goes away on navigation, full server render.  Or there's the single page app where everything's client rendered navigating. The hybrid approach is saying, actually the server is going to render the next page or part of the next page.
[01:03:44] but we're not going to lose the client state.
[01:03:46] That's very much on the one solution side of things, because the belief there is if you can do that, you don't need MPAs anymore.
[01:03:55] Because you can do all the server-only stuff.
[01:03:59] And you can get the benefits of client side.  It's like trying to get both.  Instead of saying like, this part of my app's an MPA, this part's a single page app.  It's like saying like, literally, we can do both.
[01:04:08] It's a better spot, but it has a different philosophy that it's coming to, which is like what should be on the server stays on the server.
[01:04:17] Resumability in itself does not. It's just a hydration technique or not hydration technique.
[01:04:24] The way that Quick does its partial loading...
[01:04:31] is an interesting question.
[01:04:32] Because Left Alone...
[01:04:34] It might suggest what
[01:04:36] can be in the client, should be in the client.
[01:04:41] quick sort of sidesteps this a little bit. That's why I have a hard time positioning it. But there is a choice there because if left to its own devices,
[01:04:52] it is much more aligned with current single-page app thinking
[01:04:57] than it is with
[01:04:58] Um...
[01:05:01] like the server component type thinking.
[01:05:07] Yes.
[01:05:09] And we talked about this a lot on streams previously, so maybe that's why I skipped over it.
[01:05:13] Well, the thing is,
[01:05:15] Thank you.
[01:05:16] I...
[01:05:19] Okay, we can talk about Quick a bit here if you guys are interested. Quick City
[01:05:23] lets you choose whether you want to do client routing or server routing.  It's like the multi-solution transitional app thing.  Like that's why I put quick more on the side,  even though they could choose differently.  When you,  when you build a quick app,
[01:05:36] you either use a lowercase anchor and it does an MPA, or use an uppercase anchor and then it loads the next page as you need it.
[01:05:43] it transitions between the two as you choice.
[01:05:46] But it is not...
[01:05:48] The same as saying like,
[01:05:50] server is server, client is client.  They're kind of
[01:05:54] That's why I put it more on this, because you as a developer choose what
[01:05:59] pages are MPA and which pages are not.
[01:06:06] Right. Someone's talking about Astro. Astro is also typically over the side because as you said, Astro lets you build a server render pages, spa for admin and type save. Yeah, exactly. But the idea is you'll have some MPA pages and then you'll put a spa on a page. It's like it's a multi solution.
[01:06:21] Whereas what React server components are trying to do,
[01:06:25] is literally go like,
[01:06:26] Everything is in this paradigm. It just works.
[01:06:30] There's not like, there's not like,
[01:06:32] All your anchor tags are the same.
[01:06:34] They all do the same thing.
[01:06:35] Like...
[01:06:37] The way...
[01:06:40] Yeah, I might not be making this clear enough.
[01:06:47] Thank you.
[01:06:53] Anyway, okay. Um...
[01:06:55] We probably should move on and talk about... I don't know if there's any other questions about the specific technology overview here.
[01:07:03] before we talk about the specific frameworks.
[01:07:07] You're right. I did need to clarify a bit on...
[01:07:10] Actually, you know what? Sorry, I'm getting ahead of myself.
[01:07:14] because I talked a lot about
[01:07:16] This piece the other piece on the technology is
[01:07:19] There's two other pieces on the technology that we should talk about before we talk about the frameworks.
[01:07:29] Oh.
[01:07:31] And
[01:07:40] I think part of the confusion is some of these projects to be able to do multiple things,  while some want to do one thing.  So you've got different projects taking multiple strategies.  Yes.  Yes.
[01:07:50] Um...
[01:07:53] Yes, and I think that with Quik in particular, I think that's the trickiest one because
[01:08:00] even though it's not released, they will have a version of hybrid routing.
[01:08:06] So like,
[01:08:08] when that happens,
[01:08:09] becomes a little bit more interesting. But on the same hand, anything that does the one solution version can become
[01:08:16] sorry, can become the multi-solutions thing.  You can just put a lowercase anchor tag in,  and now you're an MPPA.
[01:08:24] And you're optimized if you're using something like server components because you only need to send the JavaScript for the island.
[01:08:30] Maybe this chart, maybe this framing is bad.
[01:08:34] -
[01:08:35] But I've been trying to figure out how to split this apart.
[01:09:00] Thank you.
[01:09:02] Thank you.
[01:09:03] He's so going to be a Tanstack meta framework. Not if Tanner can help it. He already does enough. We'll see.
[01:09:14] Thank you.
[01:09:20] Uh...
[01:09:25] Yeah, I'm sure someone is creating it.
[01:09:41] Thank you.
[01:09:43] Thank you.
[01:09:44] Yeah, okay. The thing is with server components,
[01:09:49] is
[01:09:50] The re-triggering of the server components...
[01:09:53] needs some kind of
[01:09:55] or it's the whole app.
[01:09:58] And while the islands are more granular, like the actual client components inside, um...
[01:10:04] than the routing.
[01:10:07] The routing still, like, the first server components demos were full page.
[01:10:12] So...
[01:10:14] Um...
[01:10:16] We like essentially
[01:10:18] It was an effort or a design decision to figure out how to split up that full page.  The server component mechanism itself actually starts almost like an MPA.  Like it's a mentality that's like a full page reload.
[01:10:31] Um...
[01:10:32] Yeah, I...
[01:10:36] Yeah, so I think I understand what you were saying.  It was just funny because like...
[01:10:41] In server components, it's the not server components that are
[01:10:44] Yeah, that naming bugs me.
[01:10:46] Okay, let's keep on going.
[01:10:58] .
[01:11:01] I mean, it seems like there's still a lot of questions about server components. I've tried to do streams on it. No one
[01:11:06] They're not my most popular streams. Maybe I'll do another server component stream soon.
[01:11:12] Thank you.
[01:11:17] As I said, this might be a DX thing.  They shouldn't be.  Having used...
[01:11:22] Like...
[01:11:23] The end result?
[01:11:27] It's very nice. It feels best to both worlds.  But the authoring experience is definitely not right now.
[01:11:39] But yeah, this is, again, why I don't like...
[01:11:41] Server components...
[01:11:45] It's the client components you're talking about, not the server components.
[01:11:48] Thank you.
[01:11:49] Right, and the question is, can they be more granular? And this is why I talk about these things in terms of routing, okay? Because
[01:11:56] you
[01:11:57] The server component part is the not interesting part.  It's like, yeah, this renders on the server.  Done.  The interesting part is like the islands.  And if you're asking if the islands inside the server components can be more granular than component boundaries, yes.  Yes.
[01:12:09] The hydration.
[01:12:12] strategy you choose inside of the routed hybrid routed sections is up to you. We can decouple these things. React or not, but we can.
[01:12:21] conceptually as we design these solutions, decouple the server re-rendering components from
[01:12:29] the hydration strategy.
[01:12:31] This is why people have been doing some fun experiments where they like, kind of like jump in on React server components and then like stick their own framework in.  I don't know if people have seen, if you've seen this.
[01:12:41] Anyone seen this?  But I think Quick guys were playing with this,  where they took a Next app that was like server components,  and then were like, let's see if we can just like...
[01:12:50] Bootstrap quick into like into the into the little islands there  I think they were playing around with it the thing is they don't they're not gonna spend a bunch of time there because  quick solution
[01:13:01] to the server component problem.
[01:13:03] other than the routing part, which they're working on,
[01:13:07] is more sophisticated, as I was using as a term before. Like it's more granular, it's more  consideration. But this is why it's important to separate the routing from the hydration strategy.
[01:13:20] Thank you.
[01:13:26] Can Silver Components be only a possible compilation?
[01:13:31] No, it depends when you talk about compilation.  Yeah.
[01:13:34] The mechanism for this whole server component thing is bundling, really.  It's about recognizing how to split the bundle up to ship the right...
[01:13:44] pieces to the client.
[01:13:47] So...
[01:13:47] bundlers are a big part of it. This is why Marco built their own bundler years ago and they managed the bundling. Quick's all about their bundling. Server components now are like, look, we actually care about how bundling works, right?
[01:14:01] So it's a bundling problem rather than a compilation problem is the best way to put it. It's like
[01:14:07] mechanically you're just rendering
[01:14:09] your templates to HTML on the server and on the client being selective of where you set the
[01:14:15] hydration boundaries or in case of resumability, not hydration boundaries.
[01:14:25] It's possible.
[01:14:26] Nate, it is very very very possible. And this is why I'm not like rushing out the door to release the solid version.
[01:14:33] But that's why this year is going to be about DX.
[01:14:39] Right? That's why it's about...
[01:14:42] The problem is, from a server component perspective with React and stuff, is like...
[01:14:47] Their decisions are actually really good decisions. They made smart decisions for the most part. I mean, we can talk about patching global fetch, that's a whole other thing. But the design, the consistency, even the way context works and everything actually makes sense the way it has to work mechanically. But that's sometimes not enough. It doesn't matter if it makes sense. It matters if you as a developer using it can differentiate and don't trip over yourself all the time. So I think that's why this is kind of interesting.
[01:15:17] - Yeah, deployment's a big part of it.  This is why Vercel's got a bit of a leg up when it comes to Next,  and them kind of making that whole thing.
[01:15:26] We're generalizing this these days, you know, and a lot of different deployment partners.
[01:15:32] Right.
[01:15:35] Well, it's an interesting thing.  So, you know what?  Let's move our Excalibur a little bit around.  And I'm going to check on Twitch chat because I've been neglecting you all a little bit.
[01:15:45] Um,
[01:15:46] Apparently there was a hype train, which means that probably
[01:15:50] Some stuff came in.  I don't know.
[01:15:56] I'm so sorry, Twitch chat.
[01:16:03] Anyways, I am so far behind.
[01:16:10] Let's see
[01:16:14] Thank you.
[01:16:15] Yeah, there we go.  Choo-choo.  Okay.  Doesn't matter.  We missed the hype train.
[01:16:19] Um...
[01:16:21] The real question is,
[01:16:22] is...
[01:16:24] yes, not everybody's  uses UX, but the thing  is, this is why this is such a hard  push for people, because like
[01:16:33] For some users in some categories, the UX win is
[01:16:38] huge like e-commerce
[01:16:40] It's like night and day.
[01:16:44] But the thing is,
[01:16:46] Okay.
[01:16:47] If...
[01:16:47] because they care about that.
[01:16:51] If you're trying to use Nex to build
[01:16:54] Your blog site...
[01:16:55] Like, who cares?
[01:16:57] Although I admit, if you go this way, it should feel snappier and whatnot.  But the problem is...
[01:17:04] The challenge with...
[01:17:06] With the server components...
[01:17:08] if you guys really, everyone really seems to be on server components in the chat today, is this.
[01:17:16] And it's a matter of ratios, right?
[01:17:21] How you people make the make the scale they're like they're like how static is your site?
[01:17:27] How much content is interactive and dynamic, right?
[01:17:32] And the thing is, you will see the greatest savings
[01:17:35] with server components, the more static your page is.
[01:17:39] because less client interaction needed.
[01:17:42] you're going to see the biggest benefits there.
[01:17:45] But
[01:17:46] If
[01:17:46] If that's the case,
[01:17:49] How much JavaScript are you actually
[01:17:54] actually sending.
[01:17:56] Right? Because like...
[01:17:59] I feel like I almost want to do this with squares or something.  Like, you can picture this, right?  Like, if you... I'm going to transparent.  But if you've got, like, a...
[01:18:06] box let's say this is your app I'm gonna start with a small box and then you're like um
[01:18:13] Okay.
[01:18:14] No.
[01:18:15] This
[01:18:16] Let's do this and no, actually transfer it for this. Let's draw a new box, okay?
[01:18:21] And then we're like, this part of the box
[01:18:24] is...
[01:18:27] Static
[01:18:30] And this part of the box
[01:18:33] is like interactive, okay? So your app is like 70% static and then like 30% interactive, okay?
[01:18:44] Right.
[01:18:45] - Thank you.
[01:18:46] Amen.
[01:18:47] If your app is small, like if this, if this, if this, if so, yeah, let's, let's draw some  stuff for people here.
[01:18:54] Um...
[01:18:55] Interactive...
[01:19:00] I almost want to make a legend here, but I never publish these images anyway, so who cares?
[01:19:05] but
[01:19:06] Like...
[01:19:07] interactive,
[01:19:09] Thank you.
[01:19:10] static okay
[01:19:13] Now...
[01:19:15] Thank you.
[01:19:16] If your site is really, really, really...
[01:19:18] And...
[01:19:19] Eh
[01:19:20] And of...
[01:19:22] How do I want to do this? I want to stretch this out a little bit more.
[01:19:26] Not that.  I want to stretch...
[01:19:28] this
[01:19:30] I'm gonna add a little bit more.
[01:19:34] In addition,
[01:19:36] to being
[01:19:37] interactive,
[01:19:39] code, you know, like your component code you write,
[01:19:42] We're going to add...
[01:19:44] another another box and
[01:19:48] Which is...
[01:19:50] Give it a different color like green.
[01:19:57] the framework.
[01:19:57] Okay? Libraries, whatever you import, okay?
[01:20:09] How do I define interactivity? It requires JavaScript in the browser. You click a button and it does something, like add to cart or something.
[01:20:19] Um...
[01:20:20] Like anything that, not like an anchor tag navigation, but like where you actually need to actually have JavaScript running in the browser.
[01:20:29] And what I'm trying to get at is if this is your box,
[01:20:33] Right. And...
[01:20:36] Classically,
[01:20:38] if I took the same kind of thing, this is like a server component or islands kind of look of it. But if classically,
[01:20:46] If I had a single page app.
[01:20:49] So this is...  Yeah, let's do...
[01:20:51] This is like islands or server components.
[01:20:54] If I took a single page app,
[01:20:58] Like...
[01:20:59] Remix or something, okay?
[01:21:01] just use them as an example.
[01:21:03] what's gonna happen is,
[01:21:07] this
[01:21:08] Part that is...
[01:21:10] The static part?
[01:21:14] is now
[01:21:17] that.
[01:21:18] Thank you.
[01:21:20] Okay?
[01:21:22] Like...
[01:21:23] You're shipping...
[01:21:24] This is all the JavaScript you're shipping. The pink and the green are the only things that ship. The blue stuff doesn't need the ship. So when you're in a spa,
[01:21:33] you're actually shipping...
[01:21:35] Like...
[01:21:36] the whole thing, essentially.  Where, for the islands, you're only, like, shipping this much.  But the challenge here is, like...
[01:21:48] If...
[01:21:49] You have a very, very small site.
[01:21:51] this is very, very, very small, right? And as you
[01:21:55] Scale it.
[01:21:56] Let's take this, can't we?
[01:22:00] So here's a small one.
[01:22:04] Scale it.
[01:22:11] Thank you.
[01:22:17] Okay.
[01:22:18] Move this down a bit. I hope people are kind of get what I'm getting at here, but as you scale it I
[01:22:24] I scaled it so that
[01:22:27] This section now is basically...
[01:22:32] The thing is...
[01:22:33] If you scale,
[01:22:34] This...
[01:22:35] this should actually remain relatively the same
[01:22:39] same size, right?
[01:22:41] because the framework size is constant.
[01:22:44] So I'm going to do like that.
[01:22:47] and
[01:22:50] this
[01:22:52] Let's split the difference here, okay?
[01:23:01] Thank you.
[01:23:04] The bigger you scale this thing,
[01:23:08] the framework size stops mattering as much
[01:23:11] But you could see that the total amount of savings compared to this is considerable.  Because if I took the same thing here and did the same exercise, right?
[01:23:20] Um...
[01:23:27] If we did this.
[01:23:30] Sorry, too big.
[01:23:33] It's actually...
[01:23:43] Okay.
[01:23:44] Thank you.
[01:23:47] where the challenge comes in is
[01:23:50] If you're comparing...
[01:23:52] a solution that looks like
[01:23:56] Like if you're building a simple blog site or something, you know,
[01:24:00] Um
[01:24:02] I'm not.
[01:24:07] If you're building a simple blog site or something, what ends up happening is you look at your  small JavaScript bundle and you're really happy with it.
[01:24:16] with yourself
[01:24:19] And you're kind of like, "Okay, this is good."
[01:24:23] I mean, this could scale pretty indefinitely, because even when it gets to here, you're still smaller than here, right?
[01:24:30] you're generally fine. The challenge is
[01:24:34] If...
[01:24:35] When you're small,
[01:24:37] I don't know how to draw this, but...
[01:24:39] Like...
[01:24:41] What if...
[01:24:44] This ratio, actually maybe I'll start with something bigger.
[01:24:48] Okay.
[01:24:48] Maybe this will make it easier for me to draw.  What if...
[01:24:52] instead of being a small framework now,
[01:24:54] It's Next.js.
[01:24:56] Okay.
[01:24:57] Like next 13.
[01:24:59] And it looks a little bit more like this.
[01:25:02] Okay?
[01:25:10] So yeah, this isn't quite fair because we want these to be the same
[01:25:14] the same site.
[01:25:18] So,
[01:25:19] We actually need to...
[01:25:23] Build this up.
[01:25:25] This.
[01:25:26] I'm trying to think of the best way to show this.
[01:25:29] Thank you.
[01:25:31] But, like...
[01:25:34] Because this isn't even right. It's like, it's like, it's like,
[01:25:36] It's like,
[01:25:37] It's like considerably more framework.
[01:25:46] *sigh*
[01:25:49] Thank you.
[01:25:50] The problem is every page has code splitting basically. So when we're talking about
[01:25:55] this, there's these sort of upper and lower bound considerations.
[01:26:00] Thank you.
[01:26:01] And...
[01:26:02] what I'm trying to express here is that
[01:26:09] If next--
[01:26:12] At this scale,
[01:26:14] This is still a very nice, like...
[01:26:17] You can picture if this was all purple.  This is still a very nice savings.  But when you get...
[01:26:24] When you try and take this...
[01:26:28] and shrink it down
[01:26:30] to this
[01:26:33] Sorry, wrong one. Delete.
[01:26:35] and take this
[01:26:39] and you try and shrink it down to this.
[01:26:58] Thank you.
[01:27:00] *sniff*
[01:27:01] You end up...
[01:27:03] Sorry.
[01:27:08] you end up with this.
[01:27:10] Right?
[01:27:11] And
[01:27:18] What I'm trying to say is...
[01:27:21] - Yeah.
[01:27:23] The difference between this
[01:27:30] Thank you.
[01:27:31] Thank you.
[01:27:39] Um...
[01:27:46] And this?
[01:27:51] Sorry, I deleted the wrong one.
[01:27:54] Wow.
[01:27:58] Thank you.
[01:28:07] Thank you.
[01:28:08] is the difference between this and this is very little
[01:28:17] You essentially have to scale up to a level
[01:28:22] where you overcome the framework cost
[01:28:26] for this to actually be worth it.
[01:28:31] Especially because the thing I didn't highlight is the green part gets a tiny bit...
[01:28:35] bigger
[01:28:36] with this
[01:28:38] Compared to the other one.
[01:28:41] Right?
[01:28:43] So like...
[01:28:44] It's actually more like...
[01:28:48] this
[01:28:56] This was the challenge of the React server component release.
[01:28:59] When they released it,
[01:29:01] people were like,
[01:29:02] I don't get it.
[01:29:05] My next app is bigger now.
[01:29:08] Or like the same size.
[01:29:10] Right?  It's like...
[01:29:12] Eat it.
[01:29:16] Like...
[01:29:17] Thank you.
[01:29:19] *laughs*
[01:29:20] I wanted to highlight this because the total size roof here is often defined by the size of any, it's not your whole app, it's any given page along code splitting routes.
[01:29:34] So, like...
[01:29:36] There isn't only, like, it's easy to see how this scales really nicely.
[01:29:43] - Okay.
[01:29:44] because as this gets bigger, the green stays constant.
[01:29:48] And the...
[01:29:49] The blue...
[01:29:51] and pink ratio might stay the same, and if they do, then you're just making those clear percentage wins over doing this.
[01:30:00] However...
[01:30:01] So
[01:30:02] what i'm saying is there's there's there is a there is a bit of a ceiling here
[01:30:06] for a lot of sites.
[01:30:09] Because they never get that interactive.
[01:30:12] which means their size never gets that big.
[01:30:17] You're right. I have to go back to the beginning.
[01:30:20] Interactive Framework Static.
[01:30:27] Thank you.
[01:30:28] Okay.
[01:30:29] Sorry, I...
[01:30:32] I tend to tangent. I hope everyone's still here. Everyone's still alive? We're okay here?
[01:30:37] *clicks*
[01:30:39] Thank you.
[01:30:40] Thank you.
[01:30:40] This is my problem for listening to chat too much.
[01:30:45] Okay, we were going to talk about JavaScript framework today, weren't we? How are we doing?
[01:30:53] *laughs*
[01:30:55] Okay, you know what?  It sucks.
[01:30:58] because...
[01:31:00] Excalibur, oh no, Excalibur does have three. They have three, so let's do this.
[01:31:04] Um...
[01:31:06] interactive framework where we're going to make it solid.
[01:31:13] Thank you.
[01:31:15] Sorry.
[01:31:16] Excalibur has three fill styles.  This is something that I've had to learn  in terms of colorblind.
[01:31:23] is that
[01:31:27] Is that
[01:31:30] Bye.
[01:31:32] is that we can use different fill styles here.  So we're going to do static as the crosshash.
[01:31:39] All right.
[01:31:40] I'm...
[01:31:45] It just means that for diagrams with fills you can only use three
[01:31:49] Colors.
[01:31:51] I'm sorry, I should have done that earlier.  I apologize.
[01:32:32] Yeah.
[01:32:37] All right, so this is just a server component spa versus island component.
[01:32:43] comparison when the framework size
[01:32:46] is...
[01:32:47] is different.
[01:32:48] and how that impacts things. Because the thing is,
[01:32:52] Most MPA frameworks, the framework is really small, like Astro or...
[01:32:58] fresh or whatever.  Framework's really small.  You know, and even...
[01:33:04] But the thing is...
[01:33:06] Server components so far, there's only two that kind of do it, which is experimental solid
[01:33:11] And
[01:33:12] Reacts and reacts are actually
[01:33:14] you're still in for the parcel.  So it's much harder to find that sweet spot range  because you can picture for really large...
[01:33:22] Really large where you like
[01:33:24] really interactive,
[01:33:26] things but it's not it can't be really interactive because otherwise you end up with spot it has to be really large
[01:33:32] really complex pieces of interactivity,
[01:33:36] with also a lot of static content.
[01:33:38] Like, just really...
[01:33:40] Big
[01:33:41] Thanks.
[01:33:46] Thank you.
[01:33:46] Oh man  You know that's like my least favorite thing in the world
[01:33:52] I...
[01:33:53] Unless you guys are talking about graceful degradation.
[01:33:59] *laughs*
[01:34:01] So
[01:34:04] All right.
[01:34:05] Alright, so, okay, let's get somewhere else again.
[01:34:11] How should we talk about frameworks today? Because I think there's a lot of frameworks here.
[01:34:17] In fact,
[01:34:19] There are so many that if I listed them, we were just going to, we're going to, you know,
[01:34:24] We're not going to get anywhere. But I mean, I do have a list personally. Um,
[01:34:30] And we can just talk about where they're at.  So maybe we should just write them down so that we can
[01:34:36] we can talk about them.  We're going to start with React because...
[01:34:39] Of course, we're going to start with React.  And by talking about React, we're going to talk about Next.  We're going to talk about Remix.
[01:34:44] And we're going to talk about...
[01:34:47] Remix slash Hydrogen, okay?
[01:34:51] Because...
[01:34:53] React may be one library/framework.
[01:34:57] But when we talk about React, we're actually talking about 4.0.
[01:35:00] So,
[01:35:00] I don't know if there's anything else relevant as a framework on the React side.
[01:35:05] Right, you're right.
[01:35:07] You're right.
[01:35:09] You're right, you're right, you're right.
[01:35:11] Redwood
[01:35:12] Okay.
[01:35:12] *laughs*
[01:35:16] Um,
[01:35:18] Thank you.
[01:35:20] *laughs*
[01:35:21] Um...
[01:35:24] Yes, yes. Sorry, I moved this...
[01:35:26] Now I gotta move this.
[01:35:27] All right.
[01:35:28] Yes. I'm sorry I did not mention Redwood. I should mention Redwood. I should also mention...
[01:35:35] Even though it's not a full framework, in a sense, I should
[01:35:38] It's built on top of a truck, create three app in Blitz.
[01:35:44] Right. So I was typing that before you typed it. I'm saying...
[01:35:49] Don't forget the d-
[01:35:52] Thank you.
[01:35:55] All right, so let's start with the React ecosystem.
[01:35:59] and talk about a bit what's going on.  We've been talking about React probably this whole time.  So, um...
[01:36:06] As I said, this Excalibur on now is more for my-- for-- oh, yeah, we shouldn't mention Rakus as well. I mean, there's a lot. I don't--
[01:36:14] Did I say at the beginning I wouldn't talk about every framework?
[01:36:16] Yeah, I did say that. It's fine. I'm not talking about every...
[01:36:19] framework.
[01:36:21] No, Preact gets its own category.
[01:36:24] Okay, so let's talk React for a moment.
[01:36:27] Um, big thing on React, which as we all know,
[01:36:31] Um,
[01:36:32] is server components.
[01:36:34] Okay.
[01:36:35] And
[01:36:36] Next is, the funny thing is, when we talk about React now, we literally are talking about Next.js.
[01:36:44] We might be talking a bit about Remixer Hydrogen. This is why I wasn't
[01:36:50] talking about Redwood as much.
[01:36:52] But I'm going to give Redwood, Crate T3, App, and Blitz a bit of a nod here because...
[01:36:58] So
[01:36:59] They've kind of...
[01:37:00] They're worth a mention because they've made great strides in changing
[01:37:05] Uh, like...
[01:37:06] being able to show people what best practices look like, and giving them a complete package, which I think makes it very compelling. The thing you have to remember with the opinionated frameworks is they're usually lagging behind
[01:37:19] the ones that are less opinionated,
[01:37:21] all the way lagging behind React, so it's kind of like a trickle-down effect.
[01:37:29] Yes, it makes a ton of sense why...
[01:37:31] Um...
[01:37:33] Thank you.
[01:37:33] Yeah.  Again, Gatsby, uh,
[01:37:37] I don't know.
[01:37:39] What? Let's...
[01:37:40] Maybe I should have just not listed these guys because they're outside of what I really wanted to talk about.  Because while this is probably very useful for people trying to make a, you know, solve a particular thing that they want for their business need.
[01:37:57] Um...
[01:37:59] I want to talk about these four things.
[01:38:03] Primarily.
[01:38:04] So let's talk about 2022.
[01:38:10] We saw React 18 come out.
[01:38:13] In March...
[01:38:15] We saw Next 13 come out in...
[01:38:19] October, and then we saw the remix hydrogen mer
[01:38:24] Shopify...
[01:38:25] merge-ish thing happen in November.  Now...
[01:38:29] To be clear,
[01:38:31] To me, those are the three big milestones, but we haven't fully realized the impact of what these mean.
[01:38:46] I'm just getting started man. I stream for like four hours.
[01:38:55] Thank you.
[01:38:56] I haven't even got to Angular or whatever.  I'm just starting, you know.
[01:39:02] So
[01:39:03] Okay.
[01:39:04] Yeah.
[01:39:05] Thank you.
[01:39:06] Let's talk a bit about what's going on in React Land.
[01:39:10] Big thing here, and the topic for React for 2023,
[01:39:16] is going to be undoubtedly
[01:39:19] Server components.
[01:39:20] Thank you.
[01:39:24] What does this mean for you as someone interested in React Reactive?
[01:39:28] We're going to be talking about things like
[01:39:30] use
[01:39:33] and async components a lot more.
[01:39:36] We are also going to be talking about caching.
[01:39:41] because caching is very important for server components. And the reason for that is
[01:39:46] the directives
[01:39:48] This is sort of the challenge.  When we...
[01:39:51] I watched a great talk from, I was actually in person,  Tom Ocino was talking about his work with the React team.  And what he said is when they introduced server components,  the performance wasn't good enough.
[01:40:03] like at Facebook, like they went through several iterations
[01:40:07] And it was like, it wasn't quite there yet.  And I think a lot of this comes down to the fact that server components kind of like do like a full page.
[01:40:15] Reload.
[01:40:16] mechanically. And
[01:40:19] This is how nested routing came in because it allows us to do much more granular updates and optimization and parallelization to kind of get us to that next level.
[01:40:29] Unfortunately.
[01:40:30] One of the challenges here is
[01:40:32] is...
[01:40:34] If you get to that level...
[01:40:35] everything gets parallelized and split up.  And suddenly, if you're rendering, like,
[01:40:42] I hope by now most people are familiar with nested routing.
[01:40:46] Like this, one, two, three.
[01:40:48] Picture you go from sales
[01:40:50] to accounts and you load actually two sections right or let's say we're on dashboard and we  went to sales we're loading both the sales panel
[01:40:58] And we're loading this, oh, three sections in this case.
[01:41:01] If we're looking at how we parallelize this data fetching and stuff,
[01:41:05] You start getting into like...
[01:41:07] weird
[01:41:08] Or like only replace this part when you navigate...
[01:41:11] like change something here and it only replaces this part.
[01:41:14] we're looking at
[01:41:17] new kind of constraints, right? And
[01:41:21] Caching becomes the key here.
[01:41:25] Because, like, if you're fetching, like...
[01:41:29] I'm assuming that...
[01:41:31] both this and this needs that sales record data,  you know, about Stanconia.  You don't wanna fetch it twice.  So this is why next like patched global fetch, right?  'Cause they're like,
[01:41:40] They're just doing almost like a tan stack query kind of thing, where you're just like, shared key, so they're doing it by the fetch.
[01:41:48] But like,
[01:41:49] If I'm doing it in multiple places,
[01:41:52] I don't want to fetch multiple times.
[01:41:54] It goes further than this, and the reason I want everyone to be aware of caching here is because
[01:42:00] And I showed this on a previous stream before.
[01:42:03] But...
[01:42:06] Essentially, if you route to a new route section, so I'm going to
[01:42:10] Draw...
[01:42:12] Transparent background, okay. Let's pretend this is our is our webpage, okay?
[01:42:17] Right. And then let's pretend, uh,
[01:42:21] I'm just going to draw, redraw that remix example essentially. Okay.
[01:42:25] three boxes
[01:42:27] Thank you.
[01:42:30] But...
[01:42:31] Thank you.
[01:42:32] Inside...
[01:42:33] This box, these boxes we have...
[01:42:36] some client components that update, you know, that have interactivity.  So let's just like draw...
[01:42:42] Um...
[01:42:43] draw a couple in here, okay?  What I wanted to point out is...
[01:42:48] These maintain state even if parts of this page refresh.  If this section replaces itself,  these parts retain state.  What ends up happening is,
[01:42:56] the outside here
[01:42:59] the here, so to speak, and let's do that with one of these.  This gets server rendered.
[01:43:07] again, but then this is handled completely on the client.
[01:43:11] And it means that you have to serialize the props coming into here.
[01:43:15] But,
[01:43:16] Uh...
[01:43:17] you're re-rendering all this stuff.
[01:43:19] What we're going to see is...
[01:43:24] What's cool about...
[01:43:25] On one hand, sorry, just to kind of show an example, and I've showed this before, is
[01:43:30] In some cases,
[01:43:31] If this blue section
[01:43:34] took up the whole red section
[01:43:37] All you would need to send is...
[01:43:39] JSON, basically server components
[01:43:42] devolve into a spa with JSON APIs
[01:43:46] depending on the size of the client side islands.
[01:43:48] Right? So,
[01:43:52] once once you
[01:43:54] recognize that it's not just about server components you're going to start talking about oh can i cache
[01:44:01] sections of the view, almost like the way you cache responses.
[01:44:05] So I expect caching to go into a very interesting place over the next 12 months.  And this is something I'd have my eye out on in terms of frameworks looking at solutions in this zone.
[01:44:20] Again, this is very React-heavy right now, but I...
[01:44:27] Yeah, I think this is important.  Does all start support sharing state across multiple routes?  Yeah, of course.  Do you just have it higher up in the tree?  Context.
[01:44:37] Yes, exactly. So this, this is mind warping, you know, I just wanted to kind of point out this here. So this is a conversation here. And this is like where next is at. They're like, they're very much like going, this is where I am, right? So let's give this diagram a thing.
[01:44:53] you know
[01:44:54] But when you talk about remix and hydrogen hydrogen had server components  They just had v1 where this red section is
[01:45:02] I call it V1, but the difference with hydrogen is this red section was like this.
[01:45:07] And they were like,
[01:45:08] They saw performance wins.
[01:45:10] It was really cool, but they had a really hard time with developer experience.
[01:45:16] the
[01:45:17] It still wasn't very good.
[01:45:19] Right?
[01:45:20] So...
[01:45:22] So
[01:45:23] I think they struggled a lot with hydrogen...
[01:45:26] because they weren't as
[01:45:29] like on the same page of the React team was with Next.  Remix basically was like, yeah, we're not interested in this stuff  until it's actually production ready.  Yeah.
[01:45:36] They have nested routing.
[01:45:38] But the thing you have to remember with Remix is, after that initial render, everything is client side.
[01:45:45] I don't want to go too harsh on this line here.
[01:45:49] But
[01:45:51] and maybe that's for some people who consider this my hot take, Remix and Next.js
[01:45:56] before App Directory are basically the same thing.
[01:46:01] Like...
[01:46:02] Remix has features that care about data mutation, but you can also add features that care about data mutation to next like it's
[01:46:08] It's like if someone there's a philosophical piece, but if someone so chose to do so, they could like.
[01:46:15] Whip that up in a couple days like it's it's not it's not it's it's not it's
[01:46:19] Yeah. So I just want to kind of point out here that I think this mixture is interesting, because I think hydrogen sees the value of server components even without the DX. They need remix a story. They'll put them together and probably
[01:46:34] come up with something that is server components based and uses Remix's data loading patterns.  And that's where I expect them because here's the thing, Remix patterns and server components
[01:46:44] are like this.
[01:46:46] Even though Remix likes to kind of generally, how should I term it, be
[01:46:52] pragmatic about new technologies.
[01:46:55] And
[01:46:56] generally speaking, the alignment
[01:47:00] I was talking about the difference between sophisticated and not sophisticated, but they are very much in alignment.  So...
[01:47:06] Um,
[01:47:07] Yes, I think server components...
[01:47:10] are going to be the big topic of 2023.
[01:47:20] The thing is, okay, do you know where the subtle challenge is here?
[01:47:28] Do you know what the subtle challenge is here?
[01:47:31] And this is the challenge I've had with Remix.  I've had this challenge previously with some of Tanner's libraries.  Don't get me wrong, I love Tanner's libraries.  But when I was looking at React query,  and they had turn on suspense check mark, and it's not their fault.  It's because React itself wasn't ready.  React is building these internal tools into React,
[01:47:51] that when you leverage them will be more performant and save on code size.  And they built half the, like a quarter of the stuff that Remix uses, or maybe half the stuff  they use for their data loading stuff, React has built internally, transitions, loading states,  all the mechanisms that they need to do it. But because of that, like, as someone mentioned,  like them not working close enough together, and, you know, React being solely focused on server  components for implementing these kind of features, Remix kind of split off and had to  build everything themselves. When they go back together,
[01:48:21] There might be some friction here because the colliding worlds of who's responsible does remakes just give up
[01:48:26] what they've been building to actually
[01:48:29] used react
[01:48:30] The way like there's a real risk here too,  because like if they don't,  are we forking react essentially?  Right.
[01:48:41] Thank you.
[01:48:47] Thank you.
[01:48:51] Thank you.
[01:48:57] Thank you.
[01:49:01] Yeah.
[01:49:02] To be fair, I think I get remakes here. Mostly Key Bench's students here.
[01:49:06] Yeah, I disagree with this one.  And maybe this is just from an execution JavaScript mechanical side.
[01:49:15] of the spectrum of which Remix, like Remix,
[01:49:18] from a DXed side has established the patterns.
[01:49:21] And has shown...
[01:49:23] you know,
[01:49:24] And it's funny, they're literally taking...  It's the way the web works.  Forms submit...
[01:49:30] But they've added that next level for the JavaScript.
[01:49:34] Good on them on that.
[01:49:37] The thing is,
[01:49:38] As for execution, cost, all that stuff,
[01:49:41] This optimization
[01:49:43] is like the 15% optimization.
[01:49:47] Right? Like...
[01:49:50] Maybe this should go over here somewhere, but like...
[01:49:53] When I look at that scale of like JavaScript optimization,  let's draw another line here.
[01:49:59] you know, and I talk about stuff
[01:50:02] and I put stuff here, it's like...
[01:50:04] It's like
[01:50:05] Spa today
[01:50:11] loader action.
[01:50:15] So let's put a little tickier.
[01:50:17] Check.
[01:50:19] Tuck.
[01:50:25] Chuk.
[01:50:29] Check.
[01:50:31] It looks a little bit...
[01:50:37] It's kind of like this.
[01:50:45] Islands
[01:50:46] /servercomponents
[01:50:54] Delete this stupid blob, yeah.
[01:51:02] Thank you.
[01:51:04] Resumability.  It looks like this. If you pretend like this is an arrow shooting, going this way, like this.
[01:51:16] - Yeah.
[01:51:21] So like...
[01:51:24] This is definitely an improvement.
[01:51:26] And when this was your whole scale of view, like...
[01:51:31] Let's get rid of this.  Like, when you're sitting there in React land,  and you're like, what could the world be like for a spa?  This is like, I can't even count, like...
[01:51:39] I'm sorry, when I say spa,
[01:51:41] Sorry, let's extend this out.
[01:51:44] Some people are like, huh, spicy, or like...
[01:51:48] I'm going to expand this out even further.
[01:51:51] I meant SSR Spa here.
[01:51:56] So I'm going to put that down here.
[01:51:59] And then I'm gonna do like this.
[01:52:03] -
[01:52:12] It's kind of like this.
[01:52:16] And then maybe I'll move this a little bit back. Okay.
[01:52:19] It's kind of like this, okay?
[01:52:21] I
[01:52:24] Yeah, yeah. The hydrated spa is my SSR spa.
[01:52:29] Okay.
[01:52:29] Thank you.
[01:52:34] Like...
[01:52:35] - Thank you.
[01:52:36] This isn't exact science.  This is my feeling of scale here.
[01:52:42] Right?
[01:52:44] um
[01:52:45] Here's the thing, the fact that it's SSG or not,
[01:52:48] Doesn't matter.
[01:52:50] Like...
[01:52:51] SSG just means that you render the page sooner, but it doesn't actually change how the page operates.
[01:52:57] what I'm trying to get at is like when we're talking about like,  I don't know what,  what do you want to call this?
[01:53:02] It's not even amount of JavaScript because this approach can approach this approach on amount of JavaScript.  It's like...
[01:53:09] JavaScript...
[01:53:11] overhead.
[01:53:13] Because it includes execution, size, and everything.
[01:53:17] It's...
[01:53:18] *cough*
[01:53:19] Thank you.
[01:53:20] It's like...
[01:53:22] The world made a-- people were critical.  I was really critical of this stuff a few years ago, I have to admit.  People were like-- I was like, the problem of the world right now is people think that Next.js--
[01:53:34] in terms of SSR is like a 8 out of 10.
[01:53:37] you know, of like where we can go. And I'm like, no, it's like a two out of 10.
[01:53:42] Like, I
[01:53:44] And everyone will have their own scale on this.
[01:53:51] Is this a level of difficulty graph? It might be. It might be, but it doesn't have to be. I actually think that the loader action pattern actually makes certain things easier than the typical SSR spa.
[01:54:08] So it isn't.
[01:54:11] Um
[01:54:15] I just want to talk about from a JavaScript overhead, hydration execution side of things.
[01:54:24] Going from spa to single page SSR spa was a nice thing.  It didn't really affect JavaScript overhead.  It got its first paint, but it might have been like, okay, I can do some stuff better with an API here and stuff.  So it did a little bit.
[01:54:36] Going to this loader action pattern and enforcing it the way Remix does actually like for where it helps it actually lets you
[01:54:43] Remove.
[01:54:44] like maybe like 10-15% of that overhead, right?  Right.
[01:54:48] But going from that to islands and server components is like this like massive savings.
[01:54:54] Now,
[01:54:56] On that...
[01:54:57] and then going to resumably from there is about the same distance from
[01:55:01] from...
[01:55:02] like SSR SPA to loader actions.
[01:55:05] But like...
[01:55:08] That is like, at least in my opinion,
[01:55:13] how, how, where, where this kind of fits in, right?  Cause obviously there's some movement.  You can be like really efficient on this  and get like a few more points.  We're watching, we're seeing right now this approach this,
[01:55:26] Um...
[01:55:28] But like...
[01:55:31] I just want to kind of put it out there that, like...
[01:55:35] From my view of the spectrum,
[01:55:37] At least...
[01:55:38] Like, this stuff is, like...
[01:55:40] it's very good.
[01:55:42] But once you look wider, it's kind of like...
[01:55:45] Yeah.
[01:55:48] Thank you.
[01:55:56] Thank you.
[01:55:58] Oh, sorry, I have the chart wrong. It's the other way around.
[01:56:02] As you go this way, this is...
[01:56:05] This is...
[01:56:07] More?
[01:56:10] This is less.
[01:56:32] Yeah, anyway.
[01:56:37] Yeah, I was trying to yeah
[01:56:39] Yeah, the arrow doesn't help.
[01:56:45] Sorry.
[01:56:46] Thank you.
[01:56:50] All right.
[01:56:52] Is this a little clearer?
[01:56:54] Thank you.
[01:56:56] Thank you.
[01:56:57] But it's a choice to make because of how much this matters to you.  I like the comment about complexity.  Because maybe the sweet spot...
[01:57:06] that we can achieve right now,
[01:57:08] is like over here somewhere.
[01:57:10] Like,
[01:57:11] Maybe we can get here and not all the way here.
[01:57:14] This is already a big enough of a win.
[01:57:17] that like
[01:57:21] It's not the best solutions technically that win.
[01:57:24] It's the ones that, from a technical standpoint, it's the ones that combine all the elements.
[01:57:29] You know, that like...
[01:57:31] that actually let you do what you're trying to accomplish.  It's not just about being the best.  And sometimes, similar to the cost of...  See, I know this because I'm Canadian.
[01:57:42] um,
[01:57:43] and other people might know it too,  but like,
[01:57:46] there's a certain cost to,  you know,  overhead for where you get your oil from,  like when you're drilling oil,  you know,  and,  you know,
[01:57:53] Like...
[01:57:55] infamously, like in Alberta or whatever, we had the tar sands. And like at certain times,  when the oil prices are low, and there's abundance of oil, it's like not worth...
[01:58:06] digging there because it's too expensive.
[01:58:08] Um,
[01:58:10] Like you're not making enough for the amount of effort on the cost of barrel, so to speak.
[01:58:16] and what I'm getting at is like
[01:58:19] The tooling timing might not be right for resumability yet,
[01:58:24] Like maybe the sweet spot is here.  Something.  I think we are definitely seeing...
[01:58:29] that we are moving past this though. This is definitely where
[01:58:33] like maybe like the last few years has been like,
[01:58:37] conceptually moving past this.
[01:58:39] Remix came here right at the end of this phase.  A lot of frameworks and thinkings were already migrating here.
[01:58:49] Right.
[01:58:50] But yes, there's diminishing returns potentially over here.  We have to be careful.  So this is not a thing, but I want to talk about that.
[01:58:57] So,
[01:58:58] Just kind of go back here now. This is essentially
[01:59:03] where reacts at.
[01:59:07] I'm gonna sneak one more in here.
[01:59:10] We can't forget about...
[01:59:13] Sorry.
[01:59:14] I mean, we can't forget about React Forget.
[01:59:17] Thank you.
[01:59:18] um
[01:59:23] This is React's
[01:59:26] compiler
[01:59:27] I said compilation won't come into the conversation too much because confirmation doesn't change what it does.  People are, like, getting optimistic and they think, like, the compiler will improve performance.
[01:59:35] I'd be surprised if it did more than like a 10% in client thing,  but it is a DX win that they're looking for.  I think it makes it,  I think I have a lot of thoughts on react forget.  Um,
[01:59:47] But I think that it will be interesting to see how it develops because there is a whole team working on it at Facebook.
[01:59:57] Oh yeah, okay.
[01:59:58] Yeah, so they've released something
[02:00:00] in June about it.
[02:00:03] No, no.  Let's talk about Vue next.  Because React Forget is just like...
[02:00:08] of Svelte-like compiler, okay?
[02:00:12] and
[02:00:13] S-S-S-S-Felt.
[02:00:15] Like, what I mean by that is,
[02:00:17] If you've ever seen Svelte,
[02:00:19] It basically compiles...
[02:00:23] uh, stuff into like more, uh,
[02:00:26] JavaScript-like
[02:00:29] It takes more JavaScript-like code and compiles into a bunch of, like, breaks it up and then, like, basically lets you check, dirty checks at each point, like, should I go this way or that way?
[02:00:39] Um...
[02:00:41] But the case is it's still a component rerunning, and in the case of React, it's still going to be a VDOM generated.
[02:00:46] Um,
[02:00:47] Vue actually does a lot of optimizations like this too on their templating side.
[02:00:51] not so much on their logic side, but in their JSX.  So I think that it's that kind of thing.
[02:00:58] Okay, 10% might be an exaggeration, but I would be very surprised if React got similar to...
[02:01:04] pre-act and client-side benchmarks.
[02:01:07] Um,
[02:01:08] I think that's about the upper range of what I'd expect on performance gains through this.  This is much more about making writing cone...
[02:01:15] Sane, but it doesn't come without trade-offs and I'm looking forward to seeing what those trade-offs are because the problem is I
[02:01:21] or the challenge, depending on how you look at it, is
[02:01:24] If you start writing React code,
[02:01:28] and the mental models things rerun and rerender, and those things don't rerun because they auto-memoize,
[02:01:33] it's a lot harder to reason about what actually changes.
[02:01:36] And...
[02:01:38] Right now, React has dependency arrays for that, but if you start compiling away the dependency arrays on that, you actually have to start talking about it like it's reactive.
[02:01:44] And I think that's a very weird mental hurdle for people to get through.  So I'm looking forward to seeing how that works out for them.
[02:01:51] Um...
[02:01:52] because
[02:01:53] It...
[02:01:54] We went through this with Marco because Marco 5 was a VDOM, Marco 6 is fine-grained.  And we instantly realized that while we could talk about it like a top-down system,  and in a lot of ways it could be kind of like a top-down system,  um...
[02:02:06] It didn't make sense explaining this to people using the system for development. Okay.
[02:02:10] Let's move on.
[02:02:11] Because we've got a lot to cover today, sorry.
[02:02:14] Now that I'm talking about another framework, people probably are like, "Oh, done with React."
[02:02:19] Okay.
[02:02:20] So let's talk for you.
[02:02:22] Big things for Vue this year.
[02:02:25] was
[02:02:27] I mean, the thing is, Vue's been kind of like on this trajectory for a little while, but
[02:02:31] I'm going to put some dates out here just so I remember.
[02:02:35] First, talk about Vue.
[02:02:37] We're talking about Nuxt. There are other
[02:02:41] Vue frameworks, just like there's other things like DocuSore and stuff in React I didn't talk about.  But we're going to talk about Vue and Nuxt here primarily.
[02:02:49] And the thing with Vue is 2020...
[02:02:52] Vue 3 Composition API.
[02:02:55] 2021 script setup, RefSugar, and that.
[02:02:59] We can see if we can find this.  Evan, you actually--
[02:03:04] wrote an article, and I should have looked at this before stream. What was it? End of year 2022. Someone
[02:03:12] someone...
[02:03:13] Someone...
[02:03:15] No.
[02:03:18] uh...
[02:03:20] Here we go.
[02:03:23] He's going to tell you better than I can.  But this echoes a lot of stuff we talked about here, right?
[02:03:29] Because what does he talk about right here? First of all,
[02:03:32] This year was when View 3 became prime time.
[02:03:36] They switched everything over efficiently.  But look, first thing they get to is Volar and the TypeScript and Tool Integration.
[02:03:42] For view,
[02:03:44] More so than others.
[02:03:46] Vue and Svelte are very much
[02:03:49] going back to our table here,
[02:03:52] On this like lower side here of the tooling integration. This is a place that they innovate they are they aren't always the first
[02:03:59] first people to like this side of things,  like all the interesting technologies.  But when it comes to like the refinement  around compilation and tooling integration,
[02:04:10] No one else touches them.
[02:04:13] Okay.
[02:04:14] so yeah, let's I
[02:04:17] -
[02:04:19] So yeah, Volr is getting... and my understand is...
[02:04:24] Voler 1.0 is like
[02:04:26] What's Fuller?
[02:04:28] uh...
[02:04:30] They had something else that was similar that did TypeScript, but this is now the...
[02:04:35] Blessed version of it and it's a lot better than what came before it. So I my understanding is views typescript like leveled up immensely this year and
[02:04:54] Yeah, but talking about Nuxtry and Vueutify, that's their, if I understand that's their material design component library.
[02:05:02] Um,
[02:05:03] Okay.
[02:05:05] So
[02:05:07] Okay.
[02:05:09] For next year, they only brought up two things.
[02:05:12] You know what the two things they brought up were?
[02:05:18] the fact that they're gonna have less releases.  I think they're trying to show people that they're,  that they're, it's gonna be,
[02:05:25] stable this year.
[02:05:29] The biggest thing is that they want to pull the new transform...
[02:05:33] the ref sugar transformer script setup stuff and the,
[02:05:37] and suspense out of experimental. But for them, this is a DX year of stabilization.
[02:05:44] The other thing, though, they mention,
[02:05:46] is vapor mode and we should talk about vapor when talking about view so let's add that to this.
[02:05:53] So I remember, yeah, vapor. For those who don't know,
[02:05:56] ViewVapor is a new experimental compiler
[02:05:59] that you enter view code and get solid code out.
[02:06:03] No, not exactly.
[02:06:05] but very close to that.  Um,  they said it was inspired by solid JS.  Um,
[02:06:12] Mm-hmm.
[02:06:12] But the idea here is that you can take Vue's SFC format, the single file component format, and it compiles out...
[02:06:22] in such a way that they don't need a VDOM anymore, and it just does fine-grained activities using their reactivity.
[02:06:29] Vue and Solids reactivity are very, very, very similar.  We could go into detail on a different stream about like differences and tradeoffs in terms of the
[02:06:38] reactivity propagation but for someone generally coming in here you can assume that the reactive  models are very very very similar what's different is view then kind of
[02:06:48] Ah.
[02:06:50] goes back to
[02:06:52] Component models so even though they have lots of optimizations and how to cache and store VDOM nodes and
[02:06:59] shortcuts certain execution paths, generally speaking, they're still like,
[02:07:04] signal updates, this component listens to it, re-trigger.
[02:07:07] Um...
[02:07:09] And Vue Vapor is intended for use cases where performance is primary concern, is opt-in and does not affect existing code bases. Good. At least you will be able to embed a Vapor component subtree into any
[02:07:19] View 3 app.
[02:07:20] See, what they're suggesting here is that you use vapor at the leaves.
[02:07:25] Because...
[02:07:35] Thank you.
[02:07:39] And what I'm getting at here is with...
[02:07:43] They're saying, "We hope to achieve granular option at component level, which means freely mixing vapor and non-vapor components at the same time."  I believe they can do that, honestly. And the reason I believe they can do that is I was doing this with React today.
[02:07:57] which we might talk about later.  But you have to understand...
[02:08:01] That vapor.
[02:08:02] Execution model is completely incompatible with Vue's execution model today. That's just
[02:08:09] It's a reason why Solo doesn't have React Compat.
[02:08:12] Or, you know, it's the same way that view vapor and view
[02:08:16] are not compatible. They can interface with each other, but ViewVapor is
[02:08:21] to
[02:08:22] you know, it's basically like solid, essentially. So it's just not compatible with these VDOM
[02:08:30] um...
[02:08:31] Excuse things. Building an app with only Vapor components allows you to drop the virtual DOM runtime completely, significantly reducing bundle size and baseline.
[02:08:39] In order to achieve the best performance, Vapor Mode will only support a subset of new features. So they're basically dropping off
[02:08:45] all the classic view features and saying you have to use Composition API.
[02:08:58] Thank you.
[02:09:00] So essentially,
[02:09:02] This is cool, and the fact that they're mentioning this means that they're taking this more serious.  I wasn't sure if they were going to, because here...
[02:09:11] You know what? If there's a time to do this, it's now.
[02:09:14] Because
[02:09:20] Because, like...
[02:09:22] Like...
[02:09:24] Uh...
[02:09:26] Look what's happening in the React ecosystem.
[02:09:29] It's like...
[02:09:30] Server components...
[02:09:32] are like,
[02:09:33] Thank you.
[02:09:35] Kind of like...  We didn't talk about this that much, but...
[02:09:38] This paradigm shift in the way data fetching,  if things do go the way to server components  the way that I suggested,  then it displaces stuff like React query a little bit.  Don't worry, there's still places for it,  and there's client-side stuff.  But the I'm just building an app story,
[02:09:52] and the basic libraries you need and stuff, it actually changes. It's actually very ecosystem resetting and shifting.  View Vapor is like that as well. It is like, yeah, they're talking like,
[02:10:02] Like right now, they might solve this, right?  Where you can bring in other view components.  But what they're telling you is if you switch to vapor,  you can make some stuff lower in your tree,  but under the view vapor in those components,  you can't use like Utify or whatever.  Like you can't, like you don't get access  to your same ecosystem.  So they're probably gonna work and figure out  how to kind of make that kind of work together.  But my point is like this is a big step
[02:10:25] towards...
[02:10:28] Like, like,
[02:10:30] like kind of starting over with another, like an older framework view today, kind of as a way of like bootstrapping it.
[02:10:37] That's a key thing for a good migration is figuring out how to bootstrap it in.
[02:10:42] But like,
[02:10:43] It's an interesting place to be, me personally, obviously, because then it's like, if you're resetting your framework
[02:10:49] Anyways...
[02:10:50] maybe it's a good time to look at other options.  But I think it's good that you do this at the same time,  because if Vue doesn't do this shift at the same time as React,
[02:10:58] they're going to risk...
[02:11:00] when other solutions are more stable. Right now, if everyone's in turmoil,  it's time to go out there and shake things up.
[02:11:12] Yeah, the puns will keep on coming.  No, View Vapor, as far as I know, is just experimental mode.  But if it succeeds...
[02:11:20] Um...
[02:11:26] If it succeeds, then I think you will see a shift over time.
[02:11:36] Thank you.
[02:11:39] Yeah, view people, find solid interesting, including myself, so vape your most future. The biggest thing I think dividing view people, quote unquote, in solid, for example, is just philosophies and stuff like what you think and what you value.
[02:11:52] I find this very amusing because like obviously
[02:11:56] Vue is a much bigger player, so
[02:11:58] Um,
[02:11:59] acknowledging solid in this sense for performance and kind of similarity is a big one because
[02:12:06] It might, like...
[02:12:07] It might make Solid look more attractive. There's actually someone in the process of a very large project porting, I think they said something like 300 components right now from View 3 to Solid. And I've been kind of like...
[02:12:21] interacting with them on Twitter on that.  It's just kind of like seeing that because like,
[02:12:26] Vue and Solid actually
[02:12:27] have a lot in common other than the philosophy.
[02:12:30] Um,
[02:12:31] Thank you.
[02:12:35] So yeah, it's interesting.  And honestly, some people were like, oh, React Compat.  Vue Compat would be easier for us than React Compat.
[02:12:44] And when View Vapor comes out, like,
[02:12:46] Who knows? It's basically the same thing. So I think this is really interesting. Do I have any notes to write here about Vue?
[02:12:57] Vapor...
[02:12:59] may or may not be a big thing.
[02:13:05] But I think it's really, really cool.
[02:13:08] I-I-
[02:13:09] *cough*
[02:13:11] I think that we shouldn't forget to mention Nuxt here.  He kind of glanced over.  Nuxt had a hard year, but my understanding is they are...
[02:13:21] finally here.
[02:13:22] like I am now on the Nuxt page, it's not telling me about experimental docs or whatever. When I go to the docs page,
[02:13:28] we are now on Nuxt 3, right?
[02:13:32] Um...
[02:13:35] And I've had Daniel on here next year.
[02:13:39] is...
[02:13:41] It's very nice. Like the way everything auto imports and like stuff, they put a lot of thought about like...
[02:13:49] Nux might be the most... It's funny, I don't know about the migration, because people said Nux3, it's been a long road.
[02:13:56] But I feel like if someone is starting
[02:13:58] from scratch in Nuxt 3, from what I've seen,
[02:14:02] Out of all the meta frameworks, it might not be like the most cutting edge technology wise or all like this is the fastest, whatever.  But if you like when I saw what Daniel is doing, it just feels like.
[02:14:13] So nice. Kind of like
[02:14:15] Everything is taken care of for you.
[02:14:18] I kind of feel like Nuxt 3 might be what Angular wishes it was.  Like, it just has this sort of, like...
[02:14:26] It's just a really like so many considerations into like the little details. And it's so funny because whenever I've been on like a chat with Daniel or that or like a framework panel, and I'd be like, I'd make some like offhand comment like, yeah, well, I mean, you can always do that. But that'd be crazy. That'd be like so much work and you have to wrangle it in.
[02:14:42] Daniel just very politely puts up his hand and is like, we did it.
[02:14:46] And I'm like, of course you did. You know, because it's like,
[02:14:50] identify things from like that are
[02:14:53] From my perspective,
[02:14:55] too small wins for the amount of effort that goes in, um...
[02:14:59] and things that maybe the users, like if you really care about having that nicer DX piece, like at that level, that last 10 or 15% on the DX, put that on the user space. Like I don't want to be too opinionated and it's not where I spend my time.
[02:15:11] But like Nuxt, that's what they did.
[02:15:14] That last 10 or 15% on the DX side...
[02:15:17] They got you.
[02:15:20] Thank you.
[02:15:21] So like,
[02:15:23] Yeah, I think we can't understate.  This is, again, I mentioned the further out you get there,  the harder it is to migrate with change.  Maybe out of all the meta frameworks, Nuxt is the furthest out
[02:15:33] out there from view, like, in terms of, like...
[02:15:38] Um...
[02:15:40] the ones that we consider like the blessed options.
[02:15:46] Yeah, and I've been looking at the JS stuff here and there.  It is very interesting.  I think part of this thing is like...
[02:15:56] Yeah, it's also interesting because Nuxt is largely on Veet now, but I see originally they weren't, and they had their own kind of like engine and like so some of the M.J.S. stuff almost required some more...
[02:16:05] buy-in, but yes, UnJS is great. I need to look at it more.
[02:16:09] Anyways, so yeah, big glowing...
[02:16:13] comment on Nuxt here.
[02:16:21] Yeah, no, I don't know much about NUX history, but that makes sense to me.
[02:16:27] Yeah, that's very cool.
[02:16:30] As I said...
[02:16:31] And developers like Daniel are up on it.  They understand where stuff's heading.  They're just kind of like...  They have a more tempered approach.  They're not like...
[02:16:39] so much, like, it's funny, out of  the frameworks, view...
[02:16:46] And Knucks, kind of like, proportionately, like, where they sit on their philosophy is not so...
[02:16:51] In a sense, React is bigger on taking risks and pushing boundaries.  Vue is very...
[02:16:59] I don't want to say safe, because they were safe in the past.  They've been more adventurous the last couple  years in forging their own path, too,  a bit more. But, like,
[02:17:07] In the relative scheme of things, Vue is definitely a bit more on the play it safe side of things.
[02:17:14] Thank you.
[02:17:15] But it means that when it comes to that DX side...
[02:17:17] Like,
[02:17:18] the polish is like gleaming.
[02:17:21] So definitely consideration if that's what's important to you and whatnot. So yeah, that's interesting.
[02:17:34] - Yeah.
[02:17:36] It doesn't. That's actually one of my criticisms. I feel like Vue probably tries to take on the most. The problem is
[02:17:45] react didn't
[02:17:48] But now they're trying to wrangle it in.
[02:17:50] with what's happening now with Next and Serving Components,  which is why it feels messy.  For the longest point in time,
[02:17:57] React actually felt smaller.
[02:18:00] and more to purpose for a lot of developers, like people who like React. Like that was like  its selling point. And Vue was kind of like in between React and Angular, which is like
[02:18:10] very...
[02:18:11] larger scoped. What's happened though is because Vue now has blessed libraries and all this churn  has been happening, it's a lot easier for the Vue community to go like, this is a blessed solution,  this is a blessed solution, this is a blessed solution. And React now is kind of carrying the  weight of its ecosystem with it and being like, in this sort of mess. These aren't
[02:18:30] reacts thing and when you look at react
[02:18:32] in isolation.
[02:18:33] It's this...
[02:18:36] kind of
[02:18:37] more pure, perhaps beautiful thing. Everyone knows I love React. But
[02:18:43] When you look at the whole mess, yeah, I can understand why people from the outside might not
[02:18:46] Feel that.
[02:18:48] So yeah, I don't
[02:18:50] so much agree with that, especially because
[02:18:53] Like in my spectrum of like size and like...
[02:18:56] scope, view is on the larger size of most of the frameworks that I'm going to talk about
[02:19:03] Today, maybe?
[02:19:05] Except maybe the next framework.
[02:19:10] Let's talk about Angular.
[02:19:14] you
[02:19:19] Yeah, well, this is a reactivity thing.
[02:19:22] I've talked about this before.  Here's the thing.  From a change management standpoint...
[02:19:29] So, you know, I think it's a lot of
[02:19:31] Uh...
[02:19:32] has hooks for both state and memoization.
[02:19:36] like how state updates, which is very different.  All the reactive libraries only have hooks for state.  They're like, yeah, we just need three, essentially.  We just need like, or maybe four,  because there's a difference between primitives like atoms and like,
[02:19:47] proxies, but it's like ref reactive...
[02:19:50] computed
[02:19:51] effect, right? Or...
[02:19:53] saw at its Signal Store
[02:19:56] memo effect. Or Svelte, it's
[02:20:00] Let
[02:20:01] dollar sign variable dollar sign expression.
[02:20:06] And stores.
[02:20:07] But like my point is like
[02:20:11] These are all state management hook solutions.  React has another layer of memoization hooks, like use ref.
[02:20:20] Use callback.
[02:20:22] React.memo.
[02:20:25] And that's the thing, because they do have the state hooks.  They do have...
[02:20:29] You state...
[02:20:31] Use memo.
[02:20:32] Use effect.
[02:20:34] But that's where the complexity comes in.
[02:20:39] It's interesting.
[02:20:44] yeah I uh
[02:20:48] I can't help it in my react.  I'm sorry to everyone here.
[02:20:54] So
[02:20:55] All right, okay, so let's talk Angular.
[02:20:58] So when we talk about Angular, what do we talk about?  We talk about universal.
[02:21:03] We talked maybe about analog. Analog is...
[02:21:06] Analog is fun.
[02:21:09] - Thank you.
[02:21:12] .
[02:21:12] Yes, Angular was the first to hop on the TypeScript train, so they deserve a lot of credit for that, doing that, like, what, like,
[02:21:21] 2014 ish time period. I don't know exactly what it's like eight years ago.
[02:21:26] So let's talk Angular for a minute. I'm not going to pretend like Angular
[02:21:31] Is my is my
[02:21:34] is my whole, like, that I have...
[02:21:37] you know, a terrible frame of reference here. But my understanding of this is Angular has been on one of those like really long journeys.
[02:21:46] Like,
[02:21:47] Kind of like React has been.
[02:21:49] People,
[02:21:49] Thank you.
[02:21:50] React has been big and popular and like ecosystems can have carried it the last few years, but between like
[02:21:56] 2000 and...
[02:21:58] 17 or 18 around the hooks announcement let's say 2018.
[02:22:03] and
[02:22:06] Mmm.
[02:22:09] I'd say like now, essentially.  I know there was that one React for Git talk  and the one thing where they dropped the server components.  Right.
[02:22:16] Like...
[02:22:17] It's basically been five years.
[02:22:19] since the dial really moved forward from the core team.  They've been working on something for a very long time.  Well, as it turns out, in Angular land,  they were also working on something for a very, very long time.
[02:22:32] And...
[02:22:32] the
[02:22:33] The thing...
[02:22:34] The thing is, it's difficult when you're in one of those projects, because you've got to see it through, because it's so ground shifting, everything gets pulled into it.
[02:22:44] My understanding, and again, I don't know the full details here, but they spent several years working on a new compiler called Ivy.
[02:22:56] Yeah, NUX server engine, Nitro is pretty nice.
[02:23:02] - And
[02:23:04] And essentially, they...
[02:23:08] *laughs*
[02:23:10] And Ivy was...
[02:23:11] was a big step forward, changed how they do the compiler.  But the thing is, I think they saw, they're like,  okay, we're in this zone and we need to...
[02:23:19] Pardon the pun.  And we needed to kind of figure out how to move beyond that.
[02:23:24] And...
[02:23:25] Essentially,
[02:23:27] They saw the DX of other frameworks
[02:23:32] I know the Angular work, Ivy work, was mostly 2018?
[02:23:38] Right?
[02:23:39] I
[02:23:41] And but I mean, the big the big one recently, I guess, for this past year was what standalone components?
[02:23:47] Essentially, they've been on this path for a few years now where they kind of are like,
[02:23:56] what does Angular look like in the future?  And they were building up this path.  And they watched the DX of other frameworks improve,  and they were like, okay, let's build out these pieces  to kind of modernize Angular and its Angular build chain.  That's my understanding.  I could be...
[02:24:10] Wrong, but that's what my thing is.  I went to MGConf and tried to pay as much attention as I possibly could in October and some of the core team members.  What's cool about this, though...
[02:24:22] is they've hit the end of that road.
[02:24:25] Like, as I mentioned, some mentioned, Ivy is the default compiler for probably a couple years now.  I can't remember...
[02:24:32] When does Angular Ivy come out? Was it 2020?
[02:24:36] 2019
[02:24:44] Thank you.
[02:24:46] Yeah, it's somewhere around 2020, 20...
[02:24:51] Like, first look is different from when it actually rolls out.  My understanding is that they...
[02:24:57] They tried to do like basically an invisible switch and things didn't
[02:25:02] work the way they expected...
[02:25:04] And the Anglican was like, well, those are bugs.  But the problem is when you have...
[02:25:10] people depending on bug behavior for years because no one knew they existed, it's a lot harder. So like,
[02:25:15] This is like the full pull the tablecloth off the table without the things falling off scenario.
[02:25:23] Yeah, okay, 2019, perfect, yeah, that fits roughly with my timeline.
[02:25:28] Okay.
[02:25:31] Right. Yeah. So...
[02:25:36] Coming out of this
[02:25:38] working through, like, Angular does a major release, like,
[02:25:41] We're talking about what Angular 8 is talking-- like, Angular does several major releases a year, it looks like, over the last couple years.
[02:25:50] So they're on Angular 15 now.
[02:25:54] Angular 15 came out like a month ago or something.
[02:25:57] So just to kind of like
[02:26:00] - Okay.
[02:26:01] show how rapidly they've been going through these breaking changes. Because here in December, this has turned from being like, instead of having one big breaking change like Angular 2 was from Angular, basically a different framework, they've been doing much more incremental breaking changes. And they've been kind of like turning stuff around bit by bit. It's funny because I actually like this. There was a J...
[02:26:22] The state of JavaScript...
[02:26:27] - Yes.
[02:26:28] It's not too obvious to people all the time here, but like...
[02:26:32] If you look at stuff,
[02:26:34] On satisfaction?  Yeah.
[02:26:35] Angular started pretty high.
[02:26:38] Like, not the highest.
[02:26:39] but slowly been going down and down.  And it's funny, it's going down in the chart, but around 2019,
[02:26:47] 38%, 42%, 45%.  It's climbing back up.
[02:26:51] It doesn't look that because the new entries on the chart,  but Angular is like the only framework I've ever seen in history
[02:26:57] actually go back up in satisfaction after going down.
[02:27:09] Like, this is more typical. Ember 40, 40, like, I guess there's some variance that year, but, like, we're generally heading down here.
[02:27:17] Right?
[02:27:19] Some of the more popular ones...
[02:27:20] view 87, 91, 91, 87, 85, 80.
[02:27:25] Alpine, 8279.
[02:27:27] Lit State Flat 78, 77. Preact 84, 78, 78, 74. Like it just goes down. This is a stat that goes down every year.
[02:27:37] 88, 89, 90. Okay, it's felt something going up by 1%, but like it's not...
[02:27:41] It's nominal, right?
[02:27:43] Angular.
[02:27:45] Looks like it was tail-diving, like tailspinning down.
[02:27:49] Actually...
[02:27:50] Going back up slightly.
[02:27:57] It is on the way up, but on the...
[02:28:00] The way down...
[02:28:01] it's harder.
[02:28:04] Because...
[02:28:05] If you have a memory like I've ever used Angular,
[02:28:08] then it starts, you actually get hit harder and harder as time goes on.
[02:28:16] Right?
[02:28:19] So...
[02:28:21] Just kind of...
[02:28:23] Thank you.
[02:28:25] Just kind of like putting it out there.
[02:28:30] Angular
[02:28:31] is a funny one because they've gone through some tough times and they're kind of
[02:28:35] been trying to set themselves up to bounce back.
[02:28:38] Right?
[02:28:40] And
[02:28:41] If we're going to be talking about JavaScript frameworks into 2023,
[02:28:46] I want to make sure we recognize that bit, okay?  So, like...
[02:28:52] I mentioned Angular Universal.
[02:28:59] Angular Universal is their SSR solution. I've never touched it.
[02:29:02] All I know is that
[02:29:05] Angular has
[02:29:06] Angular doesn't really hydrate. They call it destructive hydration, but I don't I call that not hydration.
[02:29:12] Um,
[02:29:13] They basically re-render the app and the client again and destroy what was there. That's not hydration.
[02:29:20] client-side rendering.
[02:29:22] um...
[02:29:23] But the Angular team, when I was at the conference,
[02:29:26] They brought that up as a high priority of something they want to work on this coming year.  So...
[02:29:31] Yeah, we're talking about hydration. They want to be able to do hydration.
[02:29:36] Which is funny because everyone's trying to not do hydration right now.  I get why that's...
[02:29:41] Humorous?
[02:29:44] Um...
[02:29:45] that they're trying to add hydration at this point, but
[02:29:48] I'm sure they will do it in a smart way.
[02:29:51] Another thing they're talking about, change management, signals.
[02:29:55] Thank you.
[02:29:57] Right?
[02:30:00] Zone.js, they have RxJS, but they're...
[02:30:05] ArcGIS isn't
[02:30:06] the best
[02:30:08] reactivity
[02:30:09] for...
[02:30:10] It's good for data transforms and all that, and it's very hard to convince Rx people that it isn't the best for templating, but it actually just isn't.
[02:30:20] I talked about this in the last reactivity rendering stream. It's fine if you think otherwise if you're very functional programming oriented and you like virtual doms and stuff like that maybe but like it just isn't
[02:30:30] the most optimal thing for rendering.
[02:30:40] Sup, bigger nerd? Hey, Theo.
[02:30:44] Man, we're getting deep into this now.  So anyways.
[02:30:49] I like still hate RX.  Yeah.  Oh man.  Yeah.  Yeah.
[02:30:54] But I meant more of the fact that you can say that your views are pure...
[02:30:59] and they're derived and immutable and then they change each time.  That's where Rx is good. Core screen updates.  It's just trying to wire a bunch of stuff into a template where you have expressions.  Rx is
[02:31:09] prohibitively clunky.
[02:31:12] I think Rx has some value.
[02:31:15] The same way when something breaks and you grab some duct tape, you quickly have a...
[02:31:21] Maybe your plumbing is coming apart under your sink and you're just like, "Oh shit." And you knock it together and grab some duct tape. RxJS is kind of like that.
[02:31:28] So
[02:31:30] like
[02:31:32] Anyway, let's not dwell on RxJS.
[02:31:37] But...
[02:31:37] I think
[02:31:39] They've shown interest
[02:31:41] at their keynote at the conference on both of these topics. So Angular is looking at how to add hydration signals. And this is really important too because
[02:31:48] Universal needs a boost.
[02:31:50] Every framework has had hydration for several years now.
[02:31:54] So this is drastically behind if you care about SSR.  Maybe you don't care about SSR. Angular didn't really because they're like, "Look, we build apps. Why does everyone care about SSR?"
[02:32:05] Thank you.
[02:32:06] -
[02:32:08] I want to highlight analog for a second before we move on, because it's a Vite-based Angular framework that's getting built.
[02:32:14] And I think it's cool to see Angular come into the Vite community, because Angular classically had its own tooling. I don't even know what a Bazel is, but I've heard of it, thanks to Michiko.
[02:32:25] Is basil any good?  Actually, don't tell me.  I don't want to know about basil or basil or whatever the hell it is.
[02:32:33] I think it's really cool to see Angular kind of come back into the, like,
[02:32:38] mainstream of tooling and be part of that conversation again and they are paying attention i've
[02:32:43] There's been some big changes over there in the leadership.
[02:32:47] Big shout-out to people like Sarah Drasner and the whole Angular team  just kind of looking outwards, you know, doing...
[02:32:55] Bake-offs between frameworks to understand them better.  I think...
[02:32:58] I think...
[02:33:00] We're seeing a transformation right now on the Angular team.  And I'm excited personally to see where it goes, because as I said, I often count them out.
[02:33:06] But,
[02:33:07] You know, I don't anymore.
[02:33:15] Framing conditions, that's so sorry because you seem to make some minutes and that's a problem.
[02:33:21] Thank you for that one.  It's funny because...
[02:33:24] If you've ever heard my description of the history of the web, which I don't know, one of my earlier streams, I used to say that the history of the web is the history of state management.
[02:33:33] and about passing the bag like a hot potato.
[02:33:36] Like,
[02:33:37] We had stayed on the server, and they're like, "No, no, no, go in the club." You know what I mean? Everyone just keeps on like, it's when the music stops, who's holding the bag. So I find this take amusing.
[02:33:53] At a certain point, SimSolutions are like, "Yes, I want to own that state."
[02:33:57] But...
[02:33:58] It's still as messy as it's ever been.
[02:34:02] Okay.  Okay.
[02:34:04] yeah so yeah for angular  summary
[02:34:10] they're going to take SSR more seriously and they're going to look at signals.  They're,  they're in a portion of a modernizing.  So I would,  I,  as I said,  I,
[02:34:18] And
[02:34:18] if
[02:34:19] I don't know if I'd look too hard here if I wasn't in the Angular community.
[02:34:23] But if I was an Angular dev right now,
[02:34:26] I might be getting a little bit excited and...
[02:34:28] Go reach out, get involved in the conversation.  Stuff is changing.  I know a lot of Angular devs love how things  have been set in their way for ages and years.  But if you are...
[02:34:39] you know, in a place with Angular where you're like maybe less happy with the status quo,  I feel like now is a really good time to get involved in the conversation.
[02:34:46] Okay, let's move on. Number four.
[02:34:49] Svelte.
[02:34:52] Alright, so what do we want to talk about Svelte?
[02:34:57] Well...
[02:34:58] Svelte kit.
[02:35:01] Thank you.
[02:35:02] Out of any of the meta frameworks,
[02:35:10] SvelteKit is probably the closest entwined with
[02:35:15] the vision of the framework for the future.
[02:35:18] Like to the point that I'm almost positive.
[02:35:22] We know that React and Next are tied at the hip here a little bit, but I feel like SvelteKit...
[02:35:30] Ah, ah, ah.
[02:35:31] There's another framework we'll get to later that has this kind of relation too.  But they basically just use SvelteKit. SvelteKit is Svelte.
[02:35:42] Sapper.  Sapper doesn't exist anymore.
[02:35:55] Yeah, I'm not going to talk about Sapper.
[02:35:59] But, um...
[02:36:01] Yeah, Svelkit hit 1.0.
[02:36:05] And
[02:36:06] in uh december very recently it has a lot of interesting talk uh this year because they they  really pushed the conversation what like
[02:36:15] file system routing.
[02:36:17] should look like.
[02:36:19] And I think that...
[02:36:23] in general, Svelkit, um...
[02:36:27] For a lot of people who maybe are more reactive,
[02:36:29] SvelteKit is kind of like Remix.
[02:36:33] Like, they kind of sit in the same thing.  Maybe it's better to say that Remix is like React's version of SvelteKit.
[02:36:38] Um,
[02:36:39] Like when I think of those frameworks...
[02:36:42] Even though I made a comment about the remix being like next in a sense, you know...
[02:36:46] It's...
[02:36:47] it's like they kind of view themselves  with the same sort of values  sitting in the same sort of place.  I feel like spell kit devs,  if it wasn't for the JSX and the React hate,  and Remix guys would...
[02:36:58] essentially...
[02:37:00] occupy the same sort of zone.
[02:37:02] So that's like where that's kind of sitting, where it's about...
[02:37:09] progressive enhancement. It's about using forms and
[02:37:13] And the web, the way the web was designed.  It's about...
[02:37:17] The place where they kind of separate a bit is Remix went very hard on like...
[02:37:23] the specific SSR only kind of thing,  you know,
[02:37:27] CDNs are just caches at a different time. You know what I mean? Like the whole no static thing. And SvelteKit is actually interesting because
[02:37:34] They have, you know,
[02:37:35] static generation, they have like
[02:37:39] modes for every page like there's a lot that they're doing here um
[02:37:46] The truth of the matter though is for Svelte, and if we're talking about, that's where they've been.  If we're talking about where they're heading and what you should pay attention to,
[02:37:53] Um,
[02:37:55] There's two things that are on my radar for Svelte and SvelteKit. First of all, I'm going
[02:38:01] I don't know how much you want to trust Adam Rackis.
[02:38:04] But he was hanging out with Rich Harris and there was some comment about server components for Svelte.
[02:38:11] I don't know if this is just your typical like...
[02:38:14] Don't want to be left out kind of conversation where people like oh, yeah, I saw that but my gut here is this and
[02:38:19] Rich has very much stayed out of the partial hydration stuff and the cervical stuff because he basically said it wasn't worth it.
[02:38:25] from his perspective. He just didn't see the value of it.
[02:38:29] And I had a lot of conversations with him, you know, on Twitter and type like on the side.  And he was just like, you know...
[02:38:36] He basically was like, when someone comes up with a good enough solution, we'll copy it. Right? And in my head, I was thinking, well, maybe copying it won't be as easy as you think, but it depends on where these things land. Um...
[02:38:50] I think
[02:38:51] I think he's like now maybe that he's seen the next example or whatever he's trying to get a picture what what this could look like and
[02:38:59] I feel like
[02:39:00] He should come take a look at my notes, if this is what he's interested in.  Because I think the approach that we've been working with Solid on server components is
[02:39:08] more...
[02:39:10] copyable by other frameworks than what React is doing.
[02:39:18] Yeah, I'm not going to lie. This is the thing that I regret most about not being around for NextConf and doing that other... The thing is, if I was at NextConf, I wouldn't have been at ngconf and I wouldn't be such an expert on Angular now. But...
[02:39:36] I have not met Rich in person yet and that's something I need to remedy. We just haven't
[02:39:42] paths haven't crossed yet.
[02:39:45] So he's very high on my list of people that I hope to bump into at some point at a conference.
[02:39:51] I got the chance to meet Dan Abramoff when I was in London, so that was really cool. He was also high on my list. So, anyways.
[02:40:02] To be fair, I was speaking at it about Solid.js.
[02:40:05] So I think I get an excuse on that.
[02:40:10] - Yeah.
[02:40:10] Not an ng, it was the JS path of it, but it was an ng comp that had a JavaScript portion.
[02:40:16] Okay, so...
[02:40:19] Yeah, server components in self-fucket
[02:40:22] This one...
[02:40:23] Might be more of a rumor.
[02:40:25] I wouldn't put too much here yet, but something to pay attention to. Second thing on Svelte,
[02:40:32] Selt 4.
[02:40:34] is coming up as part of the conversation.  And I think this is something more tangible.  They've been focusing so long on Kit.  They're like, it's time to take a look at 4.0  and see where we're heading.  What does Felt 4 mean?
[02:40:46] So far, to my understanding...
[02:40:48] two major features have been talking about.
[02:40:51] One, nested reactivity.
[02:40:55] specifically references to solid stores.
[02:41:00] Okay.
[02:41:01] Something along those lines.
[02:41:03] second piece that they've mentioned
[02:41:05] smaller
[02:41:07] component
[02:41:08] compiled
[02:41:12] output.
[02:41:16] .
[02:41:17] I've heard some talk about their Svelte's hydration not being great, but I don't know enough about that. It seems to score okay on performance. I don't know if there's bugs.
[02:41:26] So, the...
[02:41:28] *sniff*
[02:41:30] These are two areas where you can expect some movement on the...
[02:41:36] on Svelte 4 that they talked about. Because I made this comment a while ago: if you have  a reactive system and you just have only signals for like, necessary reactivity, and like,
[02:41:46] especially when they're tied specifically to...
[02:41:49] to the component like Svelte's Letts are.  Like...
[02:41:52] You can't...
[02:41:54] There's certain things that you can't, you have to overrun them.
[02:41:58] And this is why Svelte can never, like, never touch his solid on...
[02:42:02] these kind of performance benchmarks because like, um,
[02:42:07] I think if some people-- I've shown on stream in my chat.  If you remember the React forget demo,
[02:42:14] with the to-do MVCs.
[02:42:17] If you don't have nested reactivity, you can't update a field on a particular to-do without re-rendering the list.
[02:42:24] Svelte re-renders the list. It doesn't do the DOM rendering, but it does go through a list re-rendering cycle.  And there's no way in Svelte to not...
[02:42:31] Do that.
[02:42:33] Um,
[02:42:34] Nested reactivity will solve that if Svelte breaks it into separate components.
[02:42:40] So it's not perfect because Svelte still updates are component based,
[02:42:44] Like they're not, they don't do fine grained rendering, but it will be a big step forward. Um,
[02:42:50] enabled to do those kind of optimizations because right now if you just put like all your data in  a store anytime any of that data in that store changes you're just like re-rendering a bunch of
[02:43:00] So it kind of pushes you to making smaller stores.
[02:43:03] which is fine, but then it's harder to synchronize that.  When you have reactive state, you have to synchronize it.  So it's like...
[02:43:11] I wrote an article about this a couple years ago, about how what you can learn from React to be a
[02:43:16] better Svelte developer, they're going to finally address some of those kind of criticisms and concerns around
[02:43:23] where Svelte's compiler is kind of limiting from a
[02:43:27] performance and like
[02:43:31] reactive ergonomic standpoint.
[02:43:34] The other big one is smaller component compiled output.  And what I mean by that is...
[02:43:38] I don't know if, Evan, you popularized this comparison originally, but I wrote an article a little while ago and it was like, to do MVC.
[02:43:49] This comparison article, which I guess I will drop in the chat,
[02:43:56] Svelte stores are a bit like redex stores, they're simpler.
[02:44:01] And they're more like RxJS if you didn't have any operators.
[02:44:05] Thank you.
[02:44:05] I
[02:44:09] Right. But one of the things here is they're very conscious of the fact of
[02:44:16] by the time you get to again.
[02:44:20] rather large size, but like 80 to do MVC size of components. Svelte is like 30% larger than pretty much any framework. It's even like larger than React.
[02:44:31] it scales particularly poorly compared to other frameworks.  A lot of the frameworks are like,
[02:44:37] you know,
[02:44:39] kind of lock and step once you get past like their initial cost.  Like when you building small stuff,  Svelte is very small,  solid and preactor right behind it.  But very quickly,  once you get to like five components,  you're,
[02:44:51] Once you get to three components essentially, solid is smaller than svelte. And while I'm not going to nickel and dime over a couple kilobytes, you just see that gap widen and widen and widen until... I hope you don't have pages that are much larger than this on pure component size. I'm not talking about third party libraries and things that are heavy, but I mean pure UI code size.
[02:45:16] But this is starting to get to a point where it actually affects your page load and your performance.  So they are looking at this.
[02:45:31] Right.
[02:45:33] I'm not sure.
[02:45:33] - Thank you.
[02:45:34] So these are the two things for Svelte and Svelte 4, and I expect that kind of movement to happen soon.
[02:45:40] There, okay? We still doing good. Everyone still alive?
[02:45:45] *BEEP*  I- see I got a lot of frameworks to cover here. I figured people would be like requesting the framework they wanted me to talk about in the chat, but they really haven't been.
[02:45:54] Okay, let's keep on moving.
[02:45:57] Um...
[02:45:58] I think I'm going to do...
[02:46:00] Some of the
[02:46:02] The smaller frameworks now...
[02:46:05] Who's next?
[02:46:08] Sorry.
[02:46:09] Thank you.
[02:46:10] Uh...
[02:46:12] Let's see who's next.
[02:46:15] Oh, I gotta click outside of the...
[02:46:17] This...
[02:46:18] This text box is too big.
[02:46:20] Alright
[02:46:22] Five.
[02:46:23] Let's talk about PREACT.
[02:46:25] So,
[02:46:26] and
[02:46:27] Does Preact have a meta framework?
[02:46:30] Well...
[02:46:32] Preact does have fresh.
[02:46:37] I don't know...
[02:46:38] Does Preact have any other meta frameworks?
[02:46:42] Remix?
[02:46:45] -
[02:46:46] Okay.
[02:46:48] I mean...
[02:46:50] I'm not getting into like agnostic...
[02:46:53] Metaframeworks.
[02:46:54] It's more like Fresh has a free act.
[02:46:58] Right, I can argue about stuff like agnostic, like Astro or whatnot, but I wanted to talk... I actually think Remix probably deserves first-party attention here, just because of the...
[02:47:11] The sort of...
[02:47:12] thing forming over at Shopify between hydrogen...
[02:47:17] remix and preact?
[02:47:20] Yeah, yeah. I mean,
[02:47:22] It...
[02:47:23] Yes, Preact has all the React frameworks.  I'm being a little bit-- what's the term-- facetious.
[02:47:32] I'm talking about preact first meta frameworks.
[02:47:36] Um
[02:47:39] And I'm kind of joking here that Remix could
[02:47:44] become a preact first meta framework, or at least a certain version of it.  I'm not saying that's what's happening, but that's like,
[02:47:50] I think that
[02:47:51] It's enough of a point for me to...
[02:47:53] to bring up. To be fair,
[02:47:56] Preact probably...
[02:47:58] gets its biggest wins and you're right, it's probably, I'm going to mention Astro again here, but it's probably worth mentioning Astro.
[02:48:05] Even though I want to talk about Astro separately as well.  Because...
[02:48:10] Everyone who's moving their next app, you see all these people are like, I...
[02:48:15] "I don't even have to go far and I got Theo in chat."  If you go to astro.build,
[02:48:20] And they're like, "Holy, I rebuilt my astrocyte out of curiosity, and I went like this to this."  Anyone who does this
[02:48:27] and like Jason Langstrom or anyone who does this,  when they do this move, they aren't using React.  Astro...
[02:48:35] with React is not 7.6 kilobytes.
[02:48:41] Bye.
[02:48:44] I just want to point it out here.  So, in a sense...
[02:48:49] There's probably...
[02:48:51] two or three frameworks you should use with Astro.  And so I mentioned it here.  We'll come back on Astro on that later.
[02:49:00] But from a Preact perspective,
[02:49:07] Like...
[02:49:09] Generally speaking, this is what you're looking at.
[02:49:13] And the big new news for Preact this year was Signals. But we're yet to see how that permeates through the ecosystem, because it changes the authoring experience enough.
[02:49:26] and the impact of how updates happen,
[02:49:29] a component that uses-- you have to put signals on the leaves, right?
[02:49:34] I mean, I guess you could always de-opt at the point of the component level, but like,
[02:49:39] You can't just be using components and then like add signals and then go you you have to and you go oh  I want to use that component that doesn't use signals you then you have to like go okay now  I'm gonna just do opt at this point and then do it like you have to make the conscious decision when you add a component in preact and
[02:49:54] You have to go, is it signal aware?
[02:49:56] Like that's the question you're asking.  And then that determines how you pass the signal to it.
[02:50:03] So, um...
[02:50:05] If signals in Preact
[02:50:08] are a real thing.  It's also another ecosystem...
[02:50:14] resetter like we talked about with Vue and with React.
[02:50:18] It's a good time to do an ecosystem reset.
[02:50:21] And let's face it, Pre-Acts,
[02:50:23] ecosystem is not particularly large.  It's like React's ecosystem when you have Compat.  But if you're talking not about Compat,
[02:50:31] Like it doesn't matter. Their ecosystem is not particularly large.
[02:50:35] Right.  Right.
[02:50:36] .
[02:50:38] - Thank you.
[02:50:39] So like from that perspective,
[02:50:42] This is like... I'm just going to erase this at this point because like...
[02:50:46] There's there's no ecosystem really to reset here.
[02:50:50] Um,
[02:50:51] So they're pretty good on that.
[02:50:55] They've been working, again, I don't know when it's going to come out.
[02:50:58] Uh...
[02:51:00] Let's see, Preact 11.
[02:51:03] Yeah.
[02:51:04] It's not out yet though, right?
[02:51:06] Yeah.
[02:51:07] I don't think it's out yet.
[02:51:09] They've been working on Preact 11.  And Preact 11...
[02:51:15] *repew*
[02:51:16] Jason has been hinting that he's doing incredible performance improvements.
[02:51:21] in Preact and he keeps on showing this like spinny thing that spins around
[02:51:25] over and over again. I don't have the tweets in front of me, but every six months he shows how he got it a little bit faster.
[02:51:33] Um,
[02:51:34] And he's talking about how it's like X times faster and all this stuff.  Apparently this...
[02:51:39] rendering performance improvement is going to be in
[02:51:42] Uh...
[02:51:44] It's going to be in...
[02:51:46] pre act 11.  Um,  he has stated though,  that he doesn't expect it to compete with,  um,
[02:51:53] Like stuff like Solid...
[02:51:54] In terms of performance,
[02:51:56] But he does very, he has been hyping this.  So I'm looking forward to see where they take place.
[02:52:03] take this next um
[02:52:05] But...
[02:52:06] Uh,
[02:52:06] It's an interesting story now because Preact has signals and they're working on some performance improvements.
[02:52:14] I don't know how these sit together.
[02:52:16] Nicely.
[02:52:17] But...
[02:52:18] Um,
[02:52:19] They're definitely kind of
[02:52:21] upping their game and I look into 2023 for them to kind of
[02:52:26] established more of an identity outside of React. They've been kind of under React shadow
[02:52:31] They made it very clear this year that they want to get out of that shadow.
[02:52:35] I think it's an interesting time. I think you choose Preact.
[02:52:40] For utilitarian reasons right now.
[02:52:42] Because it's like React, you can just port your next app into Astro with it.
[02:52:47] But I think generally speaking,
[02:52:52] It still remains to be seen...
[02:52:55] how good of a first-party choice it is,  not because you're kind of just
[02:52:59] being pragmatic in terms of where you're at.  Only other thing to mention here, Fresh.  Fresh had a big swell right off the gate.
[02:53:11] A lot of times I forget the mentor Fresh. Fresh is the framework that always slips my mind because it's a lot like Astro.
[02:53:17] except for one framework. It does have an interesting authoring experience because of that, both because it's all TypeScript and it's all Deno and it does this whole thing. There's no build step. It builds in the background, but essentially you just get this environment where you just start your Deno process and you just go. There's no NPM install or whatever. It makes us really...
[02:53:38] K...
[02:53:39] compelling feeling like thing where you're just like,  you feel like,
[02:53:43] Like the old days when you just opened a Notepad++ and opened it in the browser.
[02:53:46] That's not what's actually happening.  But for a lot of people, this illusion of no build...
[02:53:53] makes them happy or feel like things are simpler.  The problem is, of course, when things go wrong,  which tend to happen on my stream,  and then you're trying to debug stuff  and you can't find anything.  So...
[02:54:03] It isn't actually no-billed.
[02:54:06] But because it feels like it, I think it's very attractive to a certain audience of people.
[02:54:12] I think fresh...
[02:54:15] We should see how it progresses and how much work they put it over the next few months. The DinoGut team, core team, made it and they have lots of stuff they're working on right now. So I don't know how much they're prioritizing it. It had a few rough edges when I used it. They probably made some improvements.
[02:54:32] But like
[02:54:33] I don't know how high priority it is.
[02:54:35] Um,
[02:54:36] And currently, unless you're in this very specific niche, it's not really offering...  And even in that niche, it's not really offering much of an advantage over something like Astro.  Um...
[02:54:46] I'm
[02:54:47] I...
[02:54:48] Think, though, that it's a very good showcase of what Dino is about.
[02:55:00] All right.
[02:55:01] Thank you.
[02:55:02] Next framework, who's next?
[02:55:11] Yeah.
[02:55:12] I think we're on solid now.
[02:55:16] Um...
[02:55:19] And solid start.
[02:55:23] Should I put Astro here? Why not?
[02:55:26] Do you know why I'm putting Astro here? I mean I could put Astro everywhere.
[02:55:31] Thank you.
[02:55:34] Oh, you're right. I'll do Lit next. I'll do Lit number 7.  Yeah, sorry. My bad. Yeah, Lit...
[02:55:38] Lit should have been next.
[02:55:41] Mostly because
[02:55:44] Before Solid had Solid Start,
[02:55:46] There was a good...
[02:55:49] And we're still in beta, but there's...
[02:55:51] There's definitely use cases where Astro still makes the most sense.  But before we really had Solid Start, I was just pointing.  I'm like, guys, just go use Astro.  Unless you want to build your own SSR solution, which you can.  And a few people tried.  There was Snap from the builder guys.  There was something called Liquid.  Yeah.
[02:56:09] But these projects never really got very far.  Obviously, the builder guys found quick after getting a few steps into Snap.  Yeah.
[02:56:21] and Liquid just lost its momentum.
[02:56:26] um
[02:56:28] but generally speaking,  Astro is a solid choice for solid.  Solid start is kind of our more like solid start today is very much on the  Svelte kit remix side.  It's solid version of those.  I think you could really just put Svelte kit remix and solid together and  just be like,  it's the same framework for different,  like tailored specifically for what those frameworks feel is important or  valuable to them.  Um,
[02:56:58] you
[02:56:59] I'm not gonna focus too much on like the things like we do want to get some of this like static generation for every page stuff and
[02:57:06] Um,
[02:57:06] But yeah, if I'm looking to 2023...
[02:57:09] Server components.
[02:57:10] Everyone knows I'm hot on those.
[02:57:13] After being able to show that you can do server components with about 5 kilobytes of JavaScript, that drawing...
[02:57:19] that I showed earlier here, this one,
[02:57:22] about scaling doesn't apply.
[02:57:24] Suddenly it scales like MPAs and
[02:57:28] when you make your little blog site you don't have to worry about this
[02:57:31] you're just shipping this so
[02:57:34] It makes all the difference.
[02:57:35] for perception, at least on the small side. And on the larger side,
[02:57:40] You're going to get to point a page complexity until I guess you're getting into like stuff larger than the stuff I saw with e-commerce.  That's what I got to say.
[02:57:48] Maybe some Google-level stuff.
[02:57:52] *sniff*
[02:57:52] Thank you.
[02:57:53] Okay.
[02:57:55] Eh...
[02:57:55] And...
[02:57:58] Yeah, so that's on the solid start side.
[02:58:00] Um...
[02:58:01] What else are we looking forward to for 2023?  Solid 2.0.
[02:58:09] Yeah.
[02:58:09] yeah let's talk we high level solid 2.0 what are we going to what are we looking at
[02:58:16] Updated.
[02:58:17] reactive core.
[02:58:19] Um...
[02:58:21] This is interesting.  We're looking a lot at how we can
[02:58:26] Performance for performance sake on the reactive core is not terribly important for me.  I know I've been sleeping on performance improvements through Sol's reactivity for months.
[02:58:35] years because it wasn't worth the complexity. However,
[02:58:40] So
[02:58:41] A fundamental change in the way we drive data to be lazy
[02:58:45] is something that's going to enable us to do...
[02:58:51] We're basically, for those who aren't too familiar, Sol's reactive core...
[02:58:56] is what we call
[02:58:58] Push.
[02:58:59] Pull.
[02:59:01] and
[02:59:04] *sad*
[02:59:05] And essentially on the push side,  you have things like RxJS.  Like it's always notifying.  It's always an event things.  Solid is,
[02:59:12] and auto tracking does this kind of thing where it actually pulls sometimes, like when it asks for the value,
[02:59:18] And it's this kind of combination of both like pushing updates and then pulling and we kind of settle in a way that's predictable and topological and all that kind of stuff. However,
[02:59:26] with 2.0, the reason we're doing this change  is we're going to go from...  We're going to stay push-pull, but we're going to be
[02:59:33] more pull.
[02:59:36] which will make things like virtualization easier.  Basically, we're looking at optimizing the paths not taken.
[02:59:43] which isn't something that was really important for...
[02:59:45] like most applications that are doing,
[02:59:49] Like
[02:59:50] you're interacting with them. But what this is important is, is it's basically building primitives into the language to handle virtualization.
[02:59:58] I'm looking at
[03:00:00] stuff like large tables. I'm looking at, you know,
[03:00:03] So React's poll-based primarily.  And for that reason, React, you know, a lot of certain types of problems are simpler for them to solve.  And I'm not saying you need a virtual DOM to solve these problems, but being poll-based makes it a lot easier to schedule when you do that work.  Solid has scheduling by using this kind of hybrid, but I want to make it much simpler and consistent.  And that's really what this is about.
[03:00:33] fish us
[03:00:34] a lot simpler to write.
[03:00:37] from an authoring standpoint from like me as a framework author.
[03:00:41] Did the small guy bully me? No.
[03:00:45] Thank you.
[03:00:47] Um...
[03:00:49] you
[03:00:51] Essentially,
[03:00:53] I want to...
[03:00:54] I think this is going to be the main movement.  I want to look at stuff like create computed.  For the most part, this isn't really an API change on any of the core primitives.
[03:01:02] and anything that kind of goes
[03:01:04] out the door will be supported through like a legacy import package because we can always  just replace primitives with other primitives or like remake our
[03:01:12] existing primitives with old, with new primitives. So migration path here should be
[03:01:18] relatively straightforward. The other thing
[03:01:22] *sigh* is...
[03:01:25] I I I I
[03:01:26] I built solid 1.0 basically ignoring TypeScript existed.  I did write it in TypeScript.  I just ignored that TypeScript was a thing.
[03:01:34] Um, if that makes any sense to people, um,
[03:01:38] Mostly because I just...
[03:01:40] Didn't like it.
[03:01:41] I saw it as a necessary evil.
[03:01:45] I don't like compromising because of TypeScript.  I'm not saying I'm going to change,  but there's a few places where
[03:01:51] Where...
[03:01:53] we can ease people on TypeScript a little bit,  if I give it a tiny bit more consideration.  So...
[03:02:00] Um...
[03:02:01] we're we are looking at that um
[03:02:07] But yeah, most of the rest of 2.0 is all based off extensions on top of this core. This is why the braking changes are happening. But once we have this kind of mechanism, we're going to be able to do...
[03:02:19] a lot more things than we can do today.
[03:02:21] And this will play into, you know,
[03:02:25] Even problems to improve hydration and stuff.
[03:02:29] The hydration stuff.
[03:02:31] is outside of the reason we're breaking it. We're breaking it
[03:02:35] for this.
[03:02:36] Then the hydration stuff will be built on top of it.
[03:02:43] I do hang with Tanner. And a lot of the work right now about this new push-pull reactivity, we're getting to test because of Tanner.
[03:02:54] This
[03:02:55] Tanner Lindsley makes a great set of tools around agnostic tools now with Tanstack.
[03:03:03] that rely on
[03:03:05] these kind of mechanisms like virtualization and performance for large tables and whatnot. And that's
[03:03:12] actually where Solid 2.0 is getting its testing ground.
[03:03:16] Um...
[03:03:17] So like the reactivity system is...
[03:03:21] is...
[03:03:22] If some people have been watching PRs, it's been sneaking its way into the agnostic core of Tanstack.
[03:03:29] Um,
[03:03:31] So, yeah.
[03:03:34] I'm...
[03:03:35] I also have more insight into this, so I'm not going to sit here and compare to the other frameworks, go over all the cool stuff coming in solid.
[03:03:41] But I just want to kind of put that out there.  Someone asked earlier if islands or server components in solid are going to be a start are going to be stable.
[03:03:50] I'm not sure yet. It's not part of my 1.0 goals for SolidStart. I want to just get SolidStart stable as is. It might happen at the same time because the timeline and who can work on different things that the
[03:04:01] certain times but the biggest thing is I'm not
[03:04:05] I'm not happy with the DX story on server components right now,  so I'm not shipping this.  I don't want to be stuck...
[03:04:11] with that DX story.
[03:04:12] If we can find some smart solutions, things will move faster.  But it's all about what resources can help have.  Like if I'm sitting doing all the bug fixing on Solid Start right now, I'm not working on that.
[03:04:27] I'm going to go ahead and get a little bit.
[03:04:28] It's not anything. Solid's TypeScript support is
[03:04:32] fine and we've learned how to wrestle around with TypeScript, I'm just kind of done
[03:04:38] Fighting it in certain places that aren't that were mostly my stubbornness. Um, and
[03:04:44] Things like, I think it's, I'm not gonna lie,  I think it's really dumb to have to use a callback  in a control flow component just to narrow the,
[03:04:53] type of something coming through.  I understand why you would want to do that from TypeScript's point,  but if I ignore  TypeScript for a second, pretend it doesn't exist, I would  never...
[03:05:02] create that API. It would be a, it's, it just wouldn't be a good API. Why would you add all that extra stuff? I'm, I'm, I'm bending a little bit more to being, you know, agreeable to stuff like that. I just things that require extra function wrappers, like there's just places where TypeScript forces worse ergonomics and
[03:05:22] for TypeScript's sake. And I have no, like, as long as there's an option that doesn't do that, I'm fine. But I have no, like,
[03:05:32] if someone's like, no, that's the way the API  be, I'm just like, no, no. Like,
[03:05:37] Like, I won't suffer for my tool.
[03:05:49] uh...
[03:05:52] But yeah, I, I,
[03:05:54] It's...
[03:05:57] Oh, multiple parameters or config objects. Huh.
[03:06:00] That's interesting. I've always liked parameters because most stuff with solid is wrapped in functions.
[03:06:05] So configs are op.
[03:06:07] like you now have objects with
[03:06:09] functions in them. But it's where the case makes sense. I usually have to do a split.
[03:06:15] Thank you.
[03:06:16] So
[03:06:17] Um...
[03:06:19] But yeah, examples of this too are around create store  and stuff like, another example if you wanna know is like,
[03:06:29] *chokes*
[03:06:31] I really like the path syntax.
[03:06:32] It's very concise.  It lets you do really powerful things with less time.  But TypeScript absolutely hates...
[03:06:39] the path syntax, like trying to get like functional program path type stuff.  Like we've had experts come in and work on it and it's still not perfect.
[03:06:48] I would never get rid of the path syntax.
[03:06:51] for store setters.
[03:06:52] But...
[03:06:53] The...
[03:06:56] like the produce...
[03:06:58] syntax, the mutation, the localized mutation syntax.
[03:07:01] Doesn't have all those problems.  The types work so easily.  Read only.  All that stuff just works.  And it's kind of like.  The funny thing is the path stuff.  Actually requires significantly more code.
[03:07:12] Um,
[03:07:13] So swapping around defaults like that while still doing it, balancing that, are the kind of things that I'm thinking about?
[03:07:23] - Yeah.
[03:07:24] I hear this.
[03:07:26] Everyone tells me this.
[03:07:28] Those people should come help on the Solid Project because I have people who...
[03:07:31] Like, there are some experts on TS, and I bring this stuff up, and they're like, yeah, not really.
[03:07:37] Like yes and no.  TypeScript is working on it, but it's like, it's, it's like, will it ever come?
[03:07:44] *sniff*
[03:07:45] There's a working group around the reactivity. I haven't kept up on it. I'll funnel stuff back in. But if you look on the Solid Org, there's a working group and then there's a reactivity discussion in that working group.
[03:08:02] But right now, just working on the reactive core.
[03:08:06] So it's still early days.  But...
[03:08:08] I'm hoping that we'll start seeing
[03:08:12] I don't know if this will affect everyone this year...
[03:08:15] But we should have progress during this year.
[03:08:20] I don't know if there's anything else I want to say about solid.  Um,
[03:08:23] right now.  We'll talk a bit more about stuff  in This Week in JavaScript.  Let's keep on moving.  Lit.
[03:08:31] Um...
[03:08:33] Thank you.
[03:08:39] Yeah, I mean, in the framing of this,
[03:08:41] Lit is lit.
[03:08:43] there's there's
[03:08:45] It's not like an... it's the platform, right? So you don't... it's not the platform, but there's no meta framework, right?
[03:08:53] Thank you.
[03:08:56] Um...
[03:08:57] -
[03:08:59] Oh man, the web component...
[03:09:06] Where's the old five-comment metaphor?
[03:09:11] Yeah, um...
[03:09:12] Thank you.
[03:09:13] Yeah, I mean, Lit is a framework.
[03:09:16] I don't know if it's meta framework or thing.  But yeah, I guess Lit has been adding-- just to summarize,
[03:09:23] It's web components.
[03:09:26] It's a framework for authoring web components, right?
[03:09:32] work
[03:09:33] for
[03:09:34] for web components
[03:09:35] It is a framework, it is not the platform, it is a framework.
[03:09:42] -
[03:09:44] and they've been working a lot on...
[03:09:47] SSR.
[03:09:48] They've been working on a lot of stuff, but SSR has been a big thing. Now that we have declarative
[03:09:53] Shadow Dom.  People are like, oh...
[03:09:57] Now we can do SSR with web components. Well, the answer is like not really.
[03:10:02] Like...
[03:10:03] You have a mechanism now to communicate this over...
[03:10:07] the wire, but you still don't have a way of rendering
[03:10:13] web components on the server.  And if you tell me that you're going to bring in Domino or JS DOM...
[03:10:18] Like, that is just terrible.  Like...
[03:10:21] you don't want to do that. The Lick guys know you don't want to do that. Like that is not the option.
[03:10:27] Right? Like...
[03:10:30] Okay.
[03:10:32] It is not...
[03:10:35] This is the missing gap. One cool thing that the guys have lit, they work at Google, they're tied with the old Polymer team. They're definitely invested in Web Components succeeding.
[03:10:51] is that they've been opening a bunch of groups of open standards and stuff.  And I covered this in my web component stream at the very beginning of this year, like around February.
[03:11:00] and they are, whatever they put in lit, they're trying to figure out if it's generalizable.
[03:11:05] for all web component frameworks.
[03:11:07] I've had bad luck with agnostic solutions on the web component space.  I've had to create my own every single time.
[03:11:14] But that's largely because of fine-grained reactivity.  But yes, there are groups here.  My expectations here is that...
[03:11:23] Um, I-
[03:11:25] I'm saying lit, but we're going to treat lit as...
[03:11:29] Um...
[03:11:30] web components. This is our chance to talk about web components today.
[03:11:36] What we're going to... My expectation is we're going to see...
[03:11:41] legit
[03:11:42] SSR web component solutions
[03:11:47] Okay?
[03:11:50] But I mean, I don't know.
[03:11:54] If...
[03:11:55] Yeah, I mean...
[03:11:58] I've seen stuff like talking about standards on like context and that. The problem is
[03:12:03] They're trying to design like
[03:12:05] They understand that doesn't belong to standards, but now that they have these tools that are standardized, they're trying to design like...
[03:12:10] Fre-
[03:12:11] Do you know what the challenge is?
[03:12:13] Best thing about web components,
[03:12:15] is that anyone can build a framework.
[03:12:18] And that's what's happened. Solid started because of Web Components. I was like, "Oh, I can build a framework."
[03:12:23] And...
[03:12:25] the problem is, it's not really a framework, it's like a rendering library more or less. And then
[03:12:30] What's happened now is for web components to succeed because it's like fractured, because that's the whole point, you don't want it to be a single way.  You can only put so much into the standards because you can't alienate different approaches.
[03:12:41] But at the same time, you want them all to work with each other.  So you have to define interoperability layers.  So let's kind of heading up kind of like an unofficial...
[03:12:53] Standard.
[03:12:54] Um...
[03:12:55] around how you can do stuff like context, how you can do stuff like...
[03:13:00] SSR.
[03:13:02] basically trying to build
[03:13:05] framework
[03:13:06] for the web.
[03:13:08] on web components where you can use any web component.
[03:13:11] That's kind of their goal.  That's what they're working for.  Um...
[03:13:16] If that sounds good to you, maybe check it out and get involved. There's a lot of
[03:13:21] great minds kind of working towards this because like web components
[03:13:25] Um,
[03:13:27] In theory...
[03:13:29] get us away from frameworks,
[03:13:33] I just want anyone who goes there to understand that they're building a framework by doing this.  And as we talked about earlier in the stream, when you kind of go from
[03:13:40] the base level, like the core library approach, like maybe let's
[03:13:44] Lit HTML.
[03:13:45] and move outwards the framework,
[03:13:47] You move slower.
[03:13:49] And you make more opinions and it gets riskier.  Like more things...  Your work gets slower and opinions change faster.  The further out, like the more abstracted you get.
[03:14:01] So...
[03:14:02] The value of the future-proofing of web components...
[03:14:07] gets lost the farther up framework land you go.
[03:14:10] So...
[03:14:12] Yeah, I can't say anything more about lit right now.  Otherwise, I sound like I don't have nice things to say.
[03:14:20] Okay.
[03:14:21] Let's move on.
[03:14:24] Thank you.
[03:14:27] I love that the chat now is talking about Go and Haskell. What's going on here?
[03:14:32] I'm sorry.
[03:14:35] Theon, Maple, I'm not following you guys, but I think that's...
[03:14:38] That's probably the thing. Yeah. And if I am going to talk about web components, I want to talk about 11D and WebC.
[03:14:44] Um,
[03:14:45] which adds kind of like these islands in the eleventy. I think this is a very cool approach and I think while I'm not like the biggest web component advocate, I think using web components to solve specific problems is
[03:15:00] like expanding kind of the dynamicism of 11d or whatever is a really good use case for them
[03:15:06] I think web components are really great for that Zendesk widget.
[03:15:11] Like, where you have to, like, insert it.  Like, I think there's things.  I just...
[03:15:14] When you're getting into framework zone and start thinking about that...
[03:15:18] You really got to...
[03:15:19] realize that you're just doing the same thing as
[03:15:21] everyone else, so the superiority complex should just kind of go away.
[03:15:27] but it tends to not.
[03:15:29] Anyways.
[03:15:31] Yes.
[03:15:32] Thank you.
[03:15:33] Thank you.
[03:15:43] Okay, where are we? Let's see, I gotta look at my list here.
[03:15:49] Preact. Okay, we've got a few left.
[03:15:55] uh...
[03:16:03] Yeah, I'm trying to choose which one I want to do next.
[03:16:11] I mean, I could do a really short one.
[03:16:15] Thank you.
[03:16:19] Thank you.
[03:16:21] if Marco six doesn't come in in 2023,  um,
[03:16:29] I don't think I can talk about Marco anymore.
[03:16:31] *snap*
[03:16:33] Just legit.
[03:16:37] So
[03:16:38] I'm throwing this out here. We've made great progress.
[03:16:43] The guys working with Marco are some of the smartest people I know in this space.  I bring them on regularly because they always instill insight and widen perspective.  Yeah.
[03:16:54] But at a certain point, it's got a ship.
[03:16:57] I was really hoping that we'd get there for the fall of this year.
[03:17:10] Yeah.
[03:17:11] Um...
[03:17:13] The thing is, someone showed a curve where you're building a project and then you have to cut scope to meet expectation. I saw this on Twitter. I think it was somebody from the React team, maybe Seb or something.
[03:17:28] Marco Six is kind of at that point where it's just like
[03:17:31] The problem is they're building...
[03:17:34] If you have the picture, you have the smartest minds in the world and the funding, the back it and the most ambitious goal.
[03:17:40] They're building the perfect framework.
[03:17:42] And I know not everyone's gonna like it, necessarily, or, you know, whatever.  But, you know, the same way not everyone likes felt or, like, solid or whatever. But, like,
[03:17:50] they're
[03:17:51] - Yeah.
[03:17:52] The stuff, and even in the prototypes and demos you see,
[03:17:57] what it's capable of.
[03:17:59] you know, and I've seen more because I'm closer to it, but like,
[03:18:03] it ships the least possible amount of JavaScript that I can picture.  It's much smaller than what I've done with the solid router.  It's much smaller than Quick.  It's much smaller.  And it's resumable.  And it's like...
[03:18:15] The way they do the authoring and the analysis, everything is so smart.
[03:18:20] But, like...
[03:18:22] It's also...
[03:18:24] We talked about the long haul thing,  like Angular Ivy,  or the React stuff that's been going on for a few years.  Marco Six has kind of been...
[03:18:34] like it started internally,  like I guess 2019 it's,  it's been three years.  Like it's,  it's,
[03:18:40] It's one of those kind of efforts.
[03:18:42] Um,
[03:18:47] I know.
[03:18:48] Do you know what the challenge is?
[03:18:52] what are we selling right now? This is where the thing is. There's understanding that. Everything  is on hold. When you get the larger project, everything just gets pulled into it. And it's
[03:19:05] Marco 6, in a sense, is like a new framework. It almost has to start from scratch and it just needs to ship.
[03:19:14] Um...
[03:19:15] But the problem is, or the challenge there is eBay relies on Marco.  So there is like that whole thing.
[03:19:25] Thank you.
[03:19:33] I'm going to go.
[03:19:35] - Routers out past this, right?  'Cause you can just use the server router,  'cause Marco's an MPA, but there is talk  about building a smarter hybrid router.
[03:19:47] So.
[03:19:48] Any...
[03:19:51] - Yeah.
[03:19:52] Yeah, because all the work isn't happening on the main repo.  It's happening on a secret repo.  Look for...
[03:19:58] I don't know. I think it's visible, but it's it's it's called X.
[03:20:02] Um,
[03:20:03] No, no, yeah. This is...
[03:20:07] Thank you.
[03:20:07] Yeah.
[03:20:09] Thank you.
[03:20:09] *clap*
[03:20:10] Um...
[03:20:12] Yeah.
[03:20:13] *sniff*
[03:20:14] So it is moving along.  I just wanted to give them a quick shout out because like...
[03:20:20] The problem is things are missing that are business critical for eBay.  And the streaming and the async stuff...
[03:20:27] is missing still and it's absolutely vital for eBay's main use case. So it's almost like not  even worth it. But like a lot of the other stuff is there.
[03:20:37] Like, for people building, you know,  simple stuff, you know, it works.  We were able to make hacker news, we were able to make  to-do MVCs and all that, but...
[03:20:45] the
[03:20:46] Marco 6 is a bit like  trying to
[03:20:50] make the jump that Svelte did to reactivity in the compiler
[03:20:55] The jump that...
[03:20:56] Quick did for resumability.
[03:20:59] The jump that...
[03:21:02] uh
[03:21:03] Solid did for fine-grained reactivity.
[03:21:06] and the...
[03:21:08] jump
[03:21:11] I'm trying to think.  I think it's mainly those three.  Um,
[03:21:15] and just like
[03:21:16] Doing it all
[03:21:18] in one go. Oh no, and the jumps React made going to concurrent rendering.
[03:21:24] You know, in suspense.
[03:21:26] and streaming like React 18, like from 16 to 18, that three year gap or whatever.
[03:21:31] or longer than that, whatever.
[03:21:33] It's like trying to do all of those in one go.
[03:21:41] So, ambitious project. Speaking of which...
[03:21:47] Let's talk about Quick.
[03:21:51] And Quick...
[03:21:53] City.
[03:21:55] I had a funny chat with someone the other day
[03:22:00] I don't know if they want to remain anonymous.
[03:22:02] Then they're like, I don't understand...
[03:22:06] I don't understand what Quick City is.
[03:22:09] Like what's the difference between quick and quick city?
[03:22:17] Yeah, Theo asked me, which is...  Yeah, Theo asked me what the difference between Quick and Quick City is.  And it's funny because he talked to Mishko himself.  You know, people kind of go and they're like...
[03:22:30] And the truth of the matter is, Quick, like Marco,
[03:22:33] is...
[03:22:34] just is the full framework.  It does the server branding,  does the partial hydration,  does the optimizing.  So what is QuickCity?
[03:22:40] Quick City is
[03:22:46] -
[03:22:47] - Thank you.
[03:22:49] It...
[03:22:50] You want to say this, but it's not.
[03:22:54] in a sense, because quick...
[03:22:57] has SSR and partial hydration or whatever quick does and progressive things like quick by itself does
[03:23:04] All this, like does a lot of the stuff that you know, like the core stuff you expect from Next or...
[03:23:09] Um...
[03:23:10] you know,  uh,
[03:23:11] SolidStart or Noxt or SvelteKit or whatever.  Quick does that on its own, same way Marco does.  Like, it's a server-first framework.
[03:23:19] Quick City
[03:23:22] Yes.
[03:23:24] That's the answer.
[03:23:26] Quick C is a router.
[03:23:34] I'm not.
[03:23:35] Quick City is a router, yeah. And it's maybe a couple primitives around like
[03:23:43] resource loading and stuff. They're looking at adding
[03:23:48] Yeah, let's talk a bit about there's some stuff that's on their roadmap that they want to add.
[03:23:53] Big thing with Quick is they went from a very VDOM-centric approach.  This year saw that they're still VDOM,
[03:23:59] But they went from very VDOM to like VDOM plus...
[03:24:03] reactivity. This is what they did. They added signals. They added the Preact style signal  optimization where you can get those specific winds in some narrow areas.
[03:24:16] And
[03:24:18] Like that's kind of like preact and quick are very similar in that sense.
[03:24:23] Um,
[03:24:25] They went beta, and beta for Quick City was a big thing.  But when we're looking...
[03:24:30] has continued. They're going to continue on this path to see what more they can get out of reactivity.  They're going to look at out-of-order streaming.
[03:24:38] Right now you can do out-of-border streaming in solid,
[03:24:42] You can do it in...
[03:24:44] react
[03:24:46] You can do it in Marco.
[03:24:48] So
[03:24:50] I don't believe it's in most other frameworks. They have in order. Quick has in order, so does Astro.
[03:24:59] Um...
[03:25:01] I was talking to someone.  Vue has In Order.  I'm not sure if they have Out of Order.  I don't think they have Out of Order yet.  Yeah.
[03:25:06] um...
[03:25:07] with NUX. But I was talking to Daniel and I wasn't 100% clear on that. So that could be a correction.
[03:25:18] Oh yeah, well, sorry, Remix is out of order. It's React, sorry. All the React-based frameworks have out of order.
[03:25:26] So Quik wants to add out of order.  Right.  Yeah.
[03:25:30] So yeah, sorry, when I say React has out of order, I extend that to all of the...
[03:25:37] So these are things that they're gonna be working on
[03:25:42] out of order streaming
[03:25:44] Um...
[03:25:47] Their version of hybrid routing, I mentioned
[03:25:50] They have something called containers.
[03:25:54] So it's kind of like...
[03:25:56] micro front ends for quick
[03:25:58] And they're using that as the...
[03:26:00] the mechanism for doing their
[03:26:03] The routing as well.
[03:26:07] Yeah, actually, maybe I should just say...
[03:26:10] Containers?
[03:26:11] -
[03:26:13] Thank you.
[03:26:14] Hybrid routing.
[03:26:16] Micro front ends.
[03:26:25] Um...
[03:26:31] Seeing what chat's doing. Oh, it's a bunch of quick stuff shared.
[03:26:35] We can't enough things...
[03:26:37] Talk to Mishiko.  I mean...  Quick...  If you don't let them call it containers,  they might call it, like, something fun.  Like...
[03:26:47] Party Town or Quick City.
[03:26:49] So...
[03:26:50] You know...
[03:26:51] Do keep that in mind. If you don't want them to call it containers, you don't know what kind of name you're going to end up with.
[03:26:56] .
[03:26:58] Um...
[03:26:59] *Sigh*
[03:27:04] *sniff*
[03:27:06] Party Town is still the best name ever.  That's like one of those ones where like,  like it's like a split vote where people are like,  it's the best name or the worst name ever.  Party Town is amazing.  Um,
[03:27:17] The thing is,
[03:27:18] we were talking about frameworks.  Every framework should integrate with Party Town.  Party Town is like one of a kind.
[03:27:25] Like...
[03:27:26] It's...
[03:27:29] I didn't...
[03:27:31] I gave my pick for JS survey or whatever.
[03:27:36] I should have picked Party Town.
[03:27:38] I don't know if it came in 2021 or 20.  Either way, Party Town should have been my pick.
[03:27:50] Party Town name is so bad it wraps around to be good.
[03:27:56] *laughs*
[03:27:57] I'm giving Theo a little bit of air time here, but...
[03:28:01] Thank you.
[03:28:06] Thank you.
[03:28:08] Yeah. Anyway, yeah, this is the kind of stuff I expect from Quick on the technology side. I didn't talk about Quick much. For those who aren't familiar, Quick...
[03:28:24] and Marco are two frameworks that are investing a lot in resumability,  which is this idea of being able to not work
[03:28:33] run hydration and serialize the data instead when it wakes up.
[03:28:36] Quick also has some cool stuff around progressive lazy loading of code.
[03:28:41] But generally, the big interesting thing from my perspective is resumability, because as we showed in the chart,
[03:28:47] Earlier,
[03:28:48] the spectrum of JavaScript overhead,  resumability really can make that last bit of difference  if for optimization,
[03:28:56] Um,
[03:28:57] Here.
[03:28:58] So, like...
[03:28:59] I think that like
[03:29:02] Thank you.
[03:29:03] There is some interesting range. I think right now the problem is we go from here to here and it's like
[03:29:10] a chasm.
[03:29:12] I think it'd be interesting to see if there's more play through here.  And and I'm right now very much exploring
[03:29:19] if this is actually a range, because this also right now is a little bit of a chasm, but I don't think it should be.
[03:29:24] Um...
[03:29:25] So,
[03:29:26] Yeah, just so you understand, that's kind of a thing. And to understand this JavaScript
[03:29:32] Overhead?
[03:29:34] Mostly, 99% is about...
[03:29:37] um,  initial page load.  Um,
[03:29:42] And
[03:29:43] It can also be about future navigations, but it's about big
[03:29:47] It's not about...
[03:29:49] interactivity.
[03:29:50] Um
[03:29:52] These kind of technologies will not
[03:29:54] impact.
[03:29:55] how responsive your app feels when you're doing action
[03:30:00] in it and doing that stuff. This is about like navigation.
[03:30:19] Just on a side note, Tanstack,
[03:30:22] It was like... Tanner didn't come up with Tanstack.  People...
[03:30:26] called it that, and he was just like...
[03:30:30] Um...
[03:30:37] Thank you.
[03:30:38] Thank you.
[03:30:40] What is life, Hugo?
[03:30:44] But
[03:30:44] Side note, sorry, I can announce this right now.  I'm doing a LiveView.js stream.
[03:30:50] I believe my next week I'm going to have the creator live view JS.
[03:30:53] on my stream.  I don't know anything about Live View,  and obviously maybe the Phoenix version is better,  but I'm gathering my audience does not know about Live View.
[03:31:01] Um, so
[03:31:03] This is going to be my entry. Maybe if I like it a lot, I'll get into Phoenix and talk to people about that. But since we're like a JavaScript focused,
[03:31:11] stream, I'm going to kind of defer to LiveView.js and hopefully it's a good representation.
[03:31:22] What?
[03:31:23] LiveView.js uses Phoenix.js library as is.
[03:31:27] There's a Phoenix...  Yes.  So Phoenix is a...
[03:31:31] I'm not touching other languages.
[03:31:34] I mean,
[03:31:35] I guess I did. I touched Ross, didn't I?
[03:31:37] Huh.
[03:31:39] Yeah, Phoenix is a backend framework like Rails is.  So someone can make Phoenix for JavaScript.
[03:31:45] Okay.
[03:31:48] Phoenix is the meta framework. Yeah, okay. I gotcha, I gotcha.
[03:31:55] Yeah.
[03:31:57] Okay.
[03:32:00] And Elixir...
[03:32:01] is
[03:32:02] Kind of like Erlang but different.
[03:32:07] Okay, I'm not... This is not my area. I did some backend, but not like this kind of stuff. I was doing like Microsoft stuff. I spent a lot of time in like...
[03:32:17] Dot net and I did some Java. I'm not I am not I
[03:32:20] Like, I'm not in this area.
[03:32:26] Erlang's a VM, so it's like all the lovely flavors of Java then, like how you can... yeah, okay.
[03:32:39] Okay. Yeah, I actually have some Ruby. I did Rails back in the day too, but okay.
[03:32:44] Alright, okay, okay. Thanks for that thing. I'm not covering live view today because I don't know enough about it, but I think that's enough for quick. Just know that...
[03:32:54] They're going to work on some of the gaps as well as stabilizing.  It shouldn't be understated that...
[03:33:04] I would be very surprised if Quik doesn't 1.0 in 2023.
[03:33:08] um,
[03:33:12] I should just put that in stabilize.
[03:33:14] for 1.0.
[03:33:18] I think they thought that their beta period was going to be pretty short and that they might even 1.0 towards the end of this year.  But I think...
[03:33:24] I think like all of us, when you try and introduce a meta framework, you start finding real bugs.  And since the fate of Quick and Quick City are kind of tied together like that, I imagine it will take Quick City's stabilization
[03:33:36] for, um...
[03:33:38] for quick stabilization to happen.
[03:33:41] That's my hot pick.
[03:33:43] Or take, you know, not hot take, but that's where I'm thinking.  Um, okay.
[03:33:48] Let's talk Astro.
[03:33:49] Um...
[03:33:52] Astro was my pick for 2023.
[03:33:55] Right, could you not...
[03:33:56] Um, so like...
[03:33:59] Um...
[03:34:01] It's an interesting one because these other ones are frameworks.
[03:34:04] And they have metaframes built on top of them.  Astro is...
[03:34:08] a meta framework.
[03:34:10] It's an agnostic one.  So, um...
[03:34:14] I haven't forgotten any other framework, have I?  This is the worst thing.
[03:34:18] Yeah, I covered Fresh because I was doing Preact.  I always forget Fresh. Everyone's like, "What have you done this year?" And it's like,
[03:34:24] it's like
[03:34:24] Fresh, I always forget fresh.
[03:34:28] It's a poly framework. It's not meta, it's poly. Yeah, okay, we need a new term for it.
[03:34:35] Oh yeah, yeah, yeah, yeah. The quick react thing.
[03:34:40] Yeah, and there's going to be more of that, actually.
[03:34:42] You're right, let me add that quick react thing in here.  'Cause there's quick solid too.
[03:34:48] Could you call it Quickify?  I guess that's kind of like the obvious name for it.
[03:34:53] Pardon me...
[03:34:54] me wonders...
[03:34:56] where they got it from. I guess that's like the obvious name.
[03:34:59] Because...
[03:35:00] See
[03:35:01] I made demos showing how to put React
[03:35:05] and solid together about two or three years ago.
[03:35:09] I've worked on it recently and I'm going to show that in a little bit.
[03:35:14] In my demo, I called...
[03:35:17] the the functions that
[03:35:20] Reactify
[03:35:22] and solidify.
[03:35:24] And I got the idea because of Solidify.
[03:35:26] because I was thinking it was a joke  because it's like, take React code and
[03:35:31] Solidify it.
[03:35:32] by turning it to solid.
[03:35:35] I'm not sure if they saw...
[03:35:40] that at all, but...
[03:35:44] Yeah.
[03:35:45] I love Solids. The best thing about Solids' name is the puns. It's never ending, the application.
[03:35:53] the fact that you could take a React component and solidify it. Anyway.
[03:35:58] Yeah.
[03:36:00] In any case, yeah, they're working on getting other frameworks in.  Because they can kind of act like a meta framework like Astro.
[03:36:09] Thank you.
[03:36:10] So that's kind of like of interest in them because one path is you can keep
[03:36:16] And if you think about the containers and the micro frontends, Quick is thinking big.  They're thinking enterprise.  You can tell.
[03:36:21] They're thinking about like...
[03:36:24] Move to quick.
[03:36:26] and then serve your old stuff underneath quick.
[03:36:30] Because quick gets you get the value of quick
[03:36:33] Mostly,
[03:36:34] When it's the orchestrator.
[03:36:36] You can put anything inside Quick and get a bit of Quick's value from it.
[03:36:40] So...
[03:36:41] putting quick inside other things
[03:36:43] doesn't make sense. You don't get any of the value or the benefit.
[03:36:47] So that's why they're working on this kind of thing, because if they have a good solution for micro frontends, then you can run...
[03:36:53] Part of your app can be, your main app can be quick,  and now you can run your old React app inside of it.
[03:36:58] and Quickify lets you do that maybe if you want to take some stuff from the ecosystem. Sure you'll be paying the full cost of React
[03:37:07] once the component loads...
[03:37:09] But at least...
[03:37:11] you'll be able to like,
[03:37:15] use this stuff and that's kind of where they're focusing on because they
[03:37:20] like on the scale of like,
[03:37:21] meta framework to core framework
[03:37:25] if you ever talk to Mishko,  he wishes he could spend more time  on the Metaframer side.  They don't really care about the renderer.  They don't care about...
[03:37:32] it's less important to them to worry about like the details of how things  render the composition of reactivity and all that kind of stuff.  They,  he was very much more concerned with like,
[03:37:41] How do we get this partiality, controlling the bundler, loading the JavaScript, that kind of stuff.
[03:37:48] He didn't really care how that kind of
[03:37:51] you know, worked in.
[03:37:56] quickfire turns react to strings on the server but you can also run
[03:38:01] React components in the browser like Astro to my understanding if you don't do that sure then you don't have to ship react or
[03:38:08] But...
[03:38:09] Um
[03:38:13] My understanding is that you still have to hydrate a React component if you actually want to do the React thing with it.
[03:38:23] .
[03:38:31] Yeah, and that's interesting because building a React compat
[03:38:36] Well, it doesn't really work like that. To actually have React Compat, you have to build React Compat. So like you're kind of the best you could do is build something that's like,
[03:38:45] But even Preact doesn't have perfect React Compat.
[03:38:53] Yeah, but okay.
[03:38:55] Shh.
[03:38:56] So you're using React as a design system.  Like the logic is valuable there.
[03:39:02] Right?
[03:39:04] Like
[03:39:06] For example, things around accessibility. A lot of it is encoded into the HTML, but a lot of it actually requires JavaScript to actually do the accessibility. A lot of those libraries like React Area and whatever, they're actually doing a lot of important JavaScript things to ensure accessibility.
[03:39:23] React as a design tool is not...
[03:39:27] It's...
[03:39:31] Okay.
[03:39:33] I guess if you're pulling stuff in from Figma, and if you're a builder and you're a CMS and stuff...
[03:39:39] But like...
[03:39:40] It's like...
[03:39:42] If that's what you're doing, it's the wrong tool for the job.
[03:39:47] *sniff*
[03:39:52] Yeah.
[03:39:53] Um...
[03:39:54] It...
[03:39:55] I can see
[03:39:58] where that's coming from especially when you consider the cms angle of that with builder but like
[03:40:05] Like at that point, like you're hoping people get to mitosis and they just...
[03:40:08] Like...
[03:40:09] They're just not there.
[03:40:10] Thank you.
[03:40:13] Yeah, they have my ptosis for that. Thank you. Yeah, that's exactly where I was getting to. Yeah.
[03:40:21] Yeah, it's the JSX, right? And this is why, again, people have had really easy time porting certain libraries across between Solid and React and whatnot.
[03:40:29] Okay.
[03:40:30] And
[03:40:31] Astro
[03:40:32] is built on JSX as well.
[03:40:34] um
[03:40:38] And yeah, if we're going to talk about Astro,
[03:40:42] Astro has a few really great
[03:40:48] frameworks for it. It has Preact,
[03:40:51] It's solid.
[03:40:54] It has...
[03:40:55] Svelte to the Loon.
[03:40:57] and x element.
[03:41:00] Thank you.
[03:41:02] Um...
[03:41:06] I mean, you could use other stuff with Astro.  You can do whatever the hell you want with Astro.  That's why it's kind of cool.  But from my perspective, when you talk about Astro, you really talk about the small things.
[03:41:17] Um...
[03:41:18] So
[03:41:20] This is usually the thing.
[03:41:24] Preact is the obvious choice for anyone moving from Next in React codebases.
[03:41:30] Solid has been...
[03:41:31] the obvious choice for anyone who just wants to use Astro for Astro's sake. We've been seeing a ton of this. NordVPN rebuilt their site on Astro with solid islands. This is a very, very popular combination.
[03:41:45] Um,
[03:41:45] Thank you.
[03:41:46] Svelte is if you hate JSX.
[03:41:51] It's a good option and then X element
[03:41:53] I'm gonna throw this in a little shout out to uh... I hope I got the name right with Xelement, but to Fuzzy.
[03:42:01] it's essentially like...
[03:42:04] It almost feels like it's...
[03:42:07] It kind of feels like web components a little bit, but it's not web components.  It's basically using Astro's own templating as a way of injecting JavaScript.  So it feels like very Astro native.  And if you're like a vanilla JS kind of person and you really want to like minimize like
[03:42:21] you don't need a JavaScript framework and you just want to use Astro for what it is because
[03:42:24] Here's the thing you'll understand. Astro is a language. It is a framework. People focus on the fact that it can do all the islands, but if you write Astro code properly...
[03:42:34] The size of your solid islands should be very, very small.
[03:42:37] the majority of your code should be Astro code.
[03:42:40] So AstroCode is a real thing.  And for that reason, Xelement is a way of almost like
[03:42:46] feeling kind of like native Astro.
[03:42:48] um because it just like it just sits right in the templating and it feels kind of natural
[03:42:57] So like,
[03:42:59] You can obviously use Astro to do what someone mentioned,  Fat Islands, and nest a spa inside Astro and do that.  But I'm just saying...
[03:43:08] That's part of the versatility and power of Astro as a project.
[03:43:12] Um...
[03:43:14] But it's...
[03:43:16] It's like you have to understand that Astro also is its own...
[03:43:21] and its own thing.  I tried to tell the Astro Guys this, like, really early on,  and I don't know if any of them got what I was talking about.  I was just...
[03:43:29] I was like, what, what, like,
[03:43:30] You guys are like...
[03:43:31] But...
[03:43:33] It's because I'd seen Marco, and Marco and Astro have a lot in common.  They both HTML first. You just write HTML, you just author, and then you add bits of interactivity to it.
[03:43:44] you know, like little islands, so to speak. Astro and Marco, Marco feels very similar to Astro, just
[03:43:51] you know,
[03:43:52] No one really appreciated it at its time.  And in a sense, for adoption standpoints, JSX is just a better language.
[03:43:59] for that. Not for every million things...
[03:44:02] Marco wants to accomplish, but for people just being able to jump in, it's a better language of that.
[03:44:17] astro was a i told you it was my pick for 2022 because it was just an easy win
[03:44:21] It's not easy for the Astro team when you're close to it and you're looking and competing with Nex and all that.  But for Astro's use case, it's just like...
[03:44:29] Why aren't you using it?
[03:44:31] Like, it's...  And I loved how they narrowed their advertising that way.  They're like, look, if you're building a big, complex app, maybe don't use us.  But, like...
[03:44:39] Let's face it, most sites are sites.  So, like, you know, like, most things out there are sites.  Yeah.
[03:44:45] Astro is just like an easy choice for anyone kind of doing this stuff. Plus, you know, if you if your project like there's like there's a hidden one here.
[03:44:54] I didn't put it in.
[03:44:56] There is a hidden one.
[03:44:57] React is actually really big for Astro here.
[03:45:01] Because...
[03:45:03] I think the real key here you got to think about is if you already got
[03:45:08] If you want to use Astro for your content site,
[03:45:10] and you already have your app in React,
[03:45:14] Astro lets you now share components between that. You know what I mean? Like, and bridge that gap.
[03:45:21] So, like...
[03:45:23] There is this option.
[03:45:25] But...
[03:45:26] So Astro...
[03:45:27] *sniff*
[03:45:28] Probably
[03:45:30] generally, this is how you kind of see it.  And actually, over time,  I actually think this one's less relevant here.
[03:45:38] Especially with the release of Svelte kit, even though Astro does certain things
[03:45:42] Much better than SvelteKit does.
[03:45:43] for those use cases.
[03:45:47] It really does start to kind of look like
[03:45:50] like, like, like without this and basically this, this is kind of Astro. So let's talk about the future of Astro then.
[03:45:59] Let's continue.
[03:46:00] So
[03:46:01] What are we looking for in 2023 from Astro?
[03:46:04] - Yeah.
[03:46:05] Well, I mean, they had an amazing 2022.  They added SSR support.  They did that.  They added...
[03:46:12] a lot of interesting things. Things I know Astro is playing around with
[03:46:17] Forums. I don't know what the solution is going to be here, but they are definitely looking at forums. They've seen Remix, they've seen Solid Start, they've seen Sulkit. They're looking at, they're looking, they've looked at all, if you look at Ben Holmes' tweets, he was gushing over forums for all three of those frameworks incrementally as it helped form his picture of what forum solution should look like. So I expect to see something more on forums.
[03:46:43] - Thank you.
[03:46:45] - Yeah.
[03:46:46] Do you disagree? It's funny because I got maple here.
[03:46:51] Yeah, because the things they want and they're interested in are a little bit different than the other frameworks where I'm talking more about like, I'm talking about technology. Someone's talking about like CMS integrations are obvious, but I'm talking about like feature technology thing. Another thing.
[03:47:07] I don't know, but I saw the Astrograds drooling over my movie's demo.
[03:47:14] This one's a bit of a long shot.  I've been bugging them for a while, but...
[03:47:18] Um...
[03:47:20] I think this is kind of part of the conversation here.
[03:47:24] They toyed with Turbolinks.
[03:47:27] The library that Solid Island router uses for diffing,
[03:47:32] was written by a core team member of Astro by Nate.
[03:47:40] - Thank you.
[03:47:44] I
[03:47:46] They're part of the same story, but yes, yes, yes, they are very much because if forms are a navigation technique, then like routing and forms are not...
[03:48:00] independent of each other.
[03:48:06] Yes, that's what you followed up with.
[03:48:10] Thank you.
[03:48:11] That's...
[03:48:13] - It's interesting, 'cause the transition API for client side
[03:48:18] It's been experimental. I've recently seen there's been movement on the MPA side.
[03:48:23] But...
[03:48:24] I don't
[03:48:25] I'm a performance nut.
[03:48:27] I think we're going to use that API.
[03:48:29] But I'm not sure that it actually...
[03:48:33] addresses
[03:48:36] Like all the performance issues.  This just handles the smoothness.  Like I actually don't have a problem with MPA navigations.  I think they're, when you have streaming, they're actually pretty smooth.  Yeah.
[03:48:46] They actually look a lot like a single page app.
[03:48:49] Thank you.
[03:48:50] But
[03:48:52] Yeah, I don't think the transition API gets rid of the need for hybrid routing.
[03:49:03] currently trying to implant Spotlight,  PayChallenge, and running into...  Yeah, I mean, if...
[03:49:09] The problem is if you...
[03:49:11] If you do SPA page navigations in Astro,
[03:49:14] it should be for client rendering. If you're trying to like server rendering into the Turbolinks thing, it's complicated.
[03:49:26] Yeah, it's more complicated than this.
[03:49:30] But...
[03:49:31] I am very much talking to Fred in that because...
[03:49:35] Astros...
[03:49:36] wins on DX have definitely influenced Solid's perspective on what server components should look like.
[03:49:47] Thank you.
[03:49:48] But yeah, I feel like these are the two things I want to see.  I know they have probably a whole...
[03:49:54] list of things that they're working on.
[03:49:56] I know that these are part of the conversation.  So I'm not speaking about this just being like what I want to see.  I know that these are considerations and things I'd be looking out for.
[03:50:06] um...
[03:50:11] Yeah, these things are generally
[03:50:13] thought to be not doable together.
[03:50:16] That's why it's been so hard to do this right.  And that's why we haven't seen this kind of routing until...
[03:50:25] the stuff that,  uh,  we've been doing a solid start and,  uh,
[03:50:30] react really I mean the there's the big page style stuff that you see with like turbo links  but when you're talking about laying or declarative javascript framework over it's a little bit more  complicated right
[03:50:41] um,
[03:50:43] But yes, these things are at odds with each other.
[03:50:49] Okay.
[03:50:51] .
[03:50:55] um
[03:50:57] Yeah, I think that's Astro.
[03:50:59] So what's left?
[03:51:01] Well?
[03:51:05] I got one more special mention because if I go back to the article
[03:51:11] Um...
[03:51:12] We didn't talk about Edge too much.
[03:51:14] I meant to do this on the technology side, but I got sidetracked.
[03:51:18] All I'm going to say is
[03:51:21] Um...
[03:51:23] on the edge side of stuff, is that...
[03:51:26] Other than some big players like Next.js, which have their edge solution, which they've been working on, most of the frameworks...
[03:51:33] like work on every
[03:51:36] edge provider. They've just built their stuff off the web response model.
[03:51:42] So this is kind of like
[03:51:44] The challenge right now is most meta frameworks
[03:51:49] deploy to a single edge function.  And edge functions have size constraints,  and also the bigger any service function gets,  you have cold start considerations.  Which makes it a little bit tricky because sure,
[03:52:03] We're making great hacker news demos.
[03:52:05] But let's face it, a huge app is...
[03:52:10] My
[03:52:11] still be very huge on a single function.
[03:52:16] So...
[03:52:18] And the second tier problem is data.
[03:52:21] Because I know there's stuff like, was it R2 or R...
[03:52:25] I can't remember the name. The Cloudflare is working on
[03:52:30] on like SQL databases at the edge and other type of databases at the edge and,
[03:52:35] Why is it not...
[03:52:38] There's another one. There's two projects that's slipping my mind right now. D1,
[03:52:43] There's like D1 and R2. Is there an R2? Am I just thinking R2-D2?
[03:52:48] Yeah, yeah. Okay, thank you. Okay. Yeah, I know about the KV stores. It was D1 and R2 that I was specifically...
[03:52:57] Are that specifically talking about but like I
[03:53:01] Even with that, there's industries, there's situations, you can't put your data at the edge. It just does not make sense. I worked in education for like a decade, like never happening.
[03:53:11] Never, ever, ever happening.
[03:53:13] Um...
[03:53:14] So we have to think about where the processing is.  Put a database at a data center...
[03:53:21] ...
[03:53:21] Sight at the edge.
[03:53:23] how do you best respond, how do you handle it? And I think the answer to this
[03:53:27] is...
[03:53:27] monolithic authoring.
[03:53:30] with the ability
[03:53:31] to break up deployments and stuff. And stuff like the build API from Vercel, you know, helps with this, you know, the file system routing kind of things. But I think that this is still manual. I expect work being done at some point on frameworks to kind of automate this ability to split and deploy across because like, there's one approach very manual, like micro front ends approach, which
[03:53:52] kind of
[03:53:53] could work for some things and it's what big enterprise is going to do. But you do that for organizational reasons. You do that because your company is too large and it's hard to coordinate teams and stuff. You don't do micro frontends
[03:54:05] for performance.
[03:54:07] you know,
[03:54:08] It's like that it doesn't benefit you.  I'm talking about from a performance standpoint,  I want the pairing of kind of the benefit of monolithic characters
[03:54:18] authoring with being able to split stuff out in an effective way on the infrastructure for performance reasons. And I think that's a gap. I don't know what that looks like. I'm being completely hypothetical, but I want to mention that the edge we see today,
[03:54:33] is barely tapping into what we can do.
[03:54:44] Yes.
[03:54:44] Yeah, I mean, it's just not...  It's going to happen for a few lucky people.
[03:54:50] -
[03:54:51] Um...
[03:54:53] Yeah.
[03:54:55] So like...
[03:54:57] I didn't mention this anymore.  I should have just...  This is one of those throwaway comments.  We're just talking about the Edge.  Um...
[03:55:03] But the reason I want to come back here is in my...
[03:55:07] article I brought up three last topics on technology.
[03:55:11] And their proximity to JS frameworks.
[03:55:19] Strings.
[03:55:20] Um,
[03:55:23] Uh...
[03:55:24] how do nodes being represented on the server?  Are they represented on the server much different than DOM, VDOM?  Yeah, considerably, actually.  We just compile the strings, we add the strings up,  and we don't create the whole VDOM structure,  which is why solid...
[03:55:33] has such incredibly fast server-side rendering. Svelte does this as well in that
[03:55:39] But yeah, this is...
[03:55:42] This is one of the reasons.  Basically, when you're already doing kind of special compilation, it doesn't take very long to just do...
[03:55:48] a slightly different compilation for a different target.  So that was the approach.
[03:55:53] frameworks that do this string type rendering,  and actually Preact added this string type rendering,  I think, recently.  I haven't seen the...  It's funny, the benchmarks didn't really move much.  I don't know if they added to Preact,  but they've definitely experimented with it.  Um...
[03:56:07] What I'm getting at is this kind of string-based server-side rendering is much faster than the VDOM.  So...
[03:56:13] Um,
[03:56:14] on the server.
[03:56:15] Right. So yeah, we already talked about web components.
[03:56:18] I'm just bringing this up again because I like laughing at my own jokes.  Because literally, I kid you not, the day after I post this article, will 2.23 be the year of web components?  And I said, it was likely to be the year of the Linux desktop.  Take that how you will, because I understand some people think it will be.  There's literally something where they're like, 2.23, the year of the Linux desktop.  And I read the article because I thought it was kind of funny.  And I don't know, maybe it was the most convincing article that I've seen.
[03:56:45] 20 years of articles, yeah.
[03:56:47] *laughs*
[03:56:50] You know...
[03:56:52] Yeah, it's...
[03:56:55] you know
[03:56:58] We'll see.  Um...
[03:57:00] The next thing that...
[03:57:03] that I wanted to talk about.  Actually before that, AI.
[03:57:08] And no code.
[03:57:09] Um,
[03:57:12] because you know everyone's been talking about this and especially because you know that there's a
[03:57:17] The reason it comes up to me is because there's a bunch of...
[03:57:20] framework you know people are like oh yeah i'm not going to move off react until the ai you know  comes in and like
[03:57:26] starts writing code for me.  Because like,  they're basically saying,  React will be the last framework  of its type  because nothing will migrate or move  because like,
[03:57:34] the AI will be writing the code for you. Um,
[03:57:38] Obviously, that's not happening next year.  But I just wanted to, again, point out...  I actually think even though it's not there yet...
[03:57:48] An interesting use of AI is people using it for code mods and migrations. I've seen a lot of work on some companies and some groups and using it to migrate between different versions and next, minor versions and helping these kind of things.
[03:58:04] So, I don't know.  Maybe those people who are waiting...
[03:58:08] on
[03:58:09] AI to move frameworks,  well maybe the AI will just move the frameworks for them.
[03:58:17] I don't know. That...
[03:58:18] Finally, WebAssembly.
[03:58:22] I don't think that's a hot take, but for some parties it is.
[03:58:25] I kind of started this role a little bit. I don't know if you remember. I didn't start it because I didn't write it, but Greg...
[03:58:33] From leptos.
[03:58:36] And this actually spare QR thing, both showed up in the JS Framework benchmark very, very recently.  Sycamore has been here for like a year or so.
[03:58:44] But Leptose showed up.
[03:58:47] And being someone who sits there and follows the JS framework benchmark, I saw it immediately and I went on...
[03:58:53] Twitter and I shared with everyone how Leptos had basically caught up to solid on client-side  render performance.
[03:59:02] So yeah, let's
[03:59:03] Let's talk...
[03:59:04] I've got one more
[03:59:07] category here on JS Frameworks and let's
[03:59:11] even though it's not JS exactly, let's talk
[03:59:15] Leptose
[03:59:16] Sycamore
[03:59:20] Waslim in general
[03:59:25] -
[03:59:26] I'm making a funny note here about the meta framework thing,  because for those who aren't aware,  Leptose did not only...
[03:59:37] recreate solid, essentially, in Rust.
[03:59:42] Leptos recreated SolidStart in Rust as well. They have server functions and like...
[03:59:47] I found this incredibly amusing.  And they have the progressive enhanced forms and the whole thing.  And I actually think the progressive enhancement in a WASM setup is actually...
[03:59:58] way more
[03:59:59] impressive
[04:00:00] and useful because Wasm, unfortunately, as of today, still has a long loading time.  You're not going to be using it to build your e-commerce site.
[04:00:07] But the fact that it works with no JavaScript for a bit
[04:00:11] or no WASM loaded is actually quite novel and quite
[04:00:16] powerful like don't get me wrong i i don't think that progressive enhancement is at all a replacement for hydration
[04:00:24] But the fact that
[04:00:26] Like...
[04:00:27] I don't know how it scales exactly, because I know the components do get larger.
[04:00:32] I looked at the JS Framework benchmark on size and stuff, and I'm like,
[04:00:36] This is like no worse than React.
[04:00:38] So if Remix thinks that progressive enhancement...
[04:00:42] you know,
[04:00:43] is good enough
[04:00:45] Maybe you could make that argument for leptos.
[04:00:49] you know,
[04:00:50] It's like,
[04:00:51] It...
[04:00:52] So
[04:00:54] In general, no, I don't think 2023 is the year of WASM frameworks.
[04:01:00] even though they've done an incredible job now of closing the gap, and the thing is, the incredible job has been done by the community largely. It's not actually the spec getting better or like all the, like there's,
[04:01:11] All those things that have been promised that they've been waiting on for improving WASM performance haven't...
[04:01:16] actually arrived yet.  They're still waiting on several of them.
[04:01:21] you know, being able to get past some of like the awkwardness of the communication, the bindings. I don't know the details there, so I might get too much into it. But when I put the thing is,
[04:01:29] Others have worked around it
[04:01:31] Recognizing the bottlenecks on the solutions there are today
[04:01:35] And...
[04:01:36] basically finding other ways to leverage the stuff without waiting for the WASM spec to move.
[04:01:43] And
[04:01:44] It started, as I said, with stuff like Leptos, which showed if you took fine-grained reactivity and applied it, basically as they remake solid and rust...
[04:01:52] It way outshoots stuff like you and like the stuff that was based on React.
[04:01:57] See, like...
[04:01:58] you could argue they just were using the wrong thing as the model.
[04:02:01] Like why?
[04:02:03] Why were they basing it on that?  Interestingly enough...
[04:02:08] um
[04:02:09] the
[04:02:11] That like...
[04:02:14] Yeah, this isn't the whole story, but sorry, I don't know if I'm going to pull it up right now.  Probably not. It's okay.
[04:02:22] Interestingly enough,
[04:02:23] With the...
[04:02:25] with the whole...
[04:02:26] WASM thing is
[04:02:28] Someone
[04:02:30] Thank you.
[04:02:33] Yeah, I mean, but it's slower than Inferno or Preact is what I'm getting at.
[04:02:39] I don't know if they copied React exactly.
[04:02:42] Me.
[04:02:45] but like it's where I'm getting to.
[04:02:49] I'm gonna break one of my own rules
[04:02:53] But for a fact, one of my own rules is I never talk about
[04:02:57] a framework that claims fast benchmark performance that doesn't officially submit to the
[04:03:03] Benchmark.
[04:03:06] Um...
[04:03:07] I...
[04:03:08] I've seen too many frameworks do that and just fail the test.
[04:03:12] and not be doing it right or like
[04:03:15] ...
[04:03:16] this worked on my machine type syndrome, you know, and then we get really disappointed, right?
[04:03:22] stuff like Million.js or whatever.
[04:03:25] -
[04:03:26] It, you know...
[04:03:27] Even some of the hype around stuff like pre-act signals, right?  And then you're kind of like, oh, it's not actually that fast.
[04:03:35] And I don't like...
[04:03:38] That.
[04:03:39] But today this is going to make my point, so I'm going to break that rule.
[04:03:43] I don't know why they haven't submitted yet, but there's another Rust framework called Di-Rust.
[04:03:49] What is it called diet?
[04:03:50] Di- Di- Di- Di- I can't f-
[04:03:54] Dioxys or something.  Dioxys.  I'm just typing in chat and you guys can tell me how this...
[04:04:00] pronounce it
[04:04:02] Like what is this?
[04:04:04] Thank you.
[04:04:05] And
[04:04:10] It's
[04:04:10] a virtual DOM framework,
[04:04:13] uh...
[04:04:14] Uh...
[04:04:17] Dioxys, yeah.
[04:04:20] Yeah.
[04:04:22] It's a virtual DOM framework that claims to have matched Leptos basically on performance. And they did it in two ways. They use something that's lower level than Rust Bindgen, which is the Rust runtime.
[04:04:35] like the VanillaJS, you know,  that's specially optimized around string handling.  And the second thing they do is they do...
[04:04:43] Template cloning.
[04:04:44] with a VDOM. So it's kind of like BlockDOM for people who are familiar with this stuff. My understanding is actually they combine it also with something similar to what Mikado or Sinuous does.
[04:04:56] And if that is the case, they would get flagged as...
[04:05:01] one of the flags on the benchmark is like not quite following the rules.
[04:05:05] Um,
[04:05:06] But,
[04:05:07] I think, well, it depends.
[04:05:09] Mm.
[04:05:09] Actually Mikado got out of it, so maybe it would work, but essentially where they do one-to-one bindings. So like you
[04:05:16] You like
[04:05:18] your data is tied to your DOM element directly, and it's not like data driven, it's like locked.
[04:05:24] It's sort of like cheating the benchmark a bit. But my point is,
[04:05:29] My understanding is that they showed a virtual DOM
[04:05:32] implementation in Rust
[04:05:35] that also gets up to the front. So it's not just
[04:05:38] It is possible with the right sort of tweaks, you know, the same way we see in JavaScript.
[04:05:44] that virtual DOM and reactivity can both be very fast.  They're showing that virtual DOM can be fast in Rust as well.  So that's interesting.
[04:05:53] Um,
[04:05:56] So I...
[04:05:58] All of this doesn't change the fact that Rust is kind of clunky to load into the browser.
[04:06:03] Um...
[04:06:04] So like...
[04:06:06] You gotta like
[04:06:07] love Rust or love these things to really like use them for much right now. Like I wouldn't like
[04:06:13] You wouldn't build your website with this when the JS options generally...
[04:06:18] are going to be better for some of those like loading time considerations and  like just,
[04:06:22] just that kind of piece and
[04:06:24] But, but,
[04:06:25] For...
[04:06:26] specific projects.
[04:06:30] I mean, we're going to have to see in terms of the size and the loading pieces...
[04:06:34] Stuff like Leptose probably compares really favorably against React.
[04:06:41] I'm sorry, when I'm talking about loading, I'm talking about like hydration.
[04:06:43] And like that side didn't
[04:06:48] Right.
[04:06:49] Thank you.
[04:06:51] No, I'm not.
[04:06:53] I'm not going to talk about you specifically. I just wanted to give the Rust stuff a bit of a shout out and talk about the progress that's being made in 2022-23. What I expected in 2023 is that people like Primogen...
[04:07:09] Like,
[04:07:10] After I made that tweet where I showed the performance thing, I was straight up, I flagged Primogen.  I'm like, this is the framework you're looking for.
[04:07:19] And I tipped him off to leptose.
[04:07:23] Um...
[04:07:23] And...
[04:07:26] people like him are going to take that to the next level, start using it, showcasing it,
[04:07:30] Greg's gonna keep on working on it. It's gonna mature and I expect to start seeing kind of maturity and like these things be like a
[04:07:38] a niche, but like quite...
[04:07:41] usable solution as they work out these patterns. And I,
[04:07:46] I don't expect
[04:07:47] much in the way of adoption outside of that niche anytime in the near future. But
[04:07:52] think
[04:07:55] Maybe...
[04:07:56] by the end of 2023.
[04:07:58] these rest frameworks will be legitimate enough that they won't be laughed out of the room.
[04:08:06] I feel like...
[04:08:08] Like,
[04:08:09] No one could take them seriously to this point, and I'm very impressed with the work that's gone in.
[04:08:16] Yeah, like...
[04:08:17] Maybe on the next spec.  This is...
[04:08:20] This...
[04:08:21] waiting on standards
[04:08:24] is kind of like why web components are where they are today.  I don't trust it.  I'm actually stoked that the community around Wasm has stepped up so much.
[04:08:34] Like, and it's been like, look,
[04:08:37] This is a bottleneck, but let's work around creative with their solutions.
[04:08:45] All right, I think...
[04:08:49] I think that's it for the framework side of things, right?
[04:08:57] We talked about...
[04:09:01] all the major frameworks that I wanted to talk about. We talked about
[04:09:05] the technologies
[04:09:07] Um...
[04:09:10] Involved, we didn't really talk too much about movement and async consistency.
[04:09:15] Um,
[04:09:16] Going back to this
[04:09:19] Like, we talked about update models, about signals and whatnot, and I think my previous stream is the best if you just want to understand how this impacts rendering.  We talked about view...
[04:09:30] We talked about
[04:09:32] String rendering came up a bit here just now. We talked about edge caching,
[04:09:38] streaming a little bit.  I think we're going to see more solutions to streaming this year.  We talked about...
[04:09:45] hydration compilation,
[04:09:48] A little bit about TypeScript and tool integrations.
[04:09:52] Um...
[04:09:53] Only thing I didn't talk about today was async consistency and suspense.  Most of that work happened a couple of years ago.
[04:09:58] The only reason that I'm bringing it up is I think it's a very important area.
[04:10:03] that I...
[04:10:04] That...
[04:10:07] some frameworks aren't really acknowledging exists and,
[04:10:09] Yeah, and I think
[04:10:11] They're in for
[04:10:13] more of a
[04:10:16] an awakening as they kind of work through these new areas that they're taking on  as they're expanding more into the different patterns around
[04:10:23] server rendering and hydration. I think
[04:10:26] I think...
[04:10:28] There are some good solutions. I think some are maybe too complicated the way they are today.
[04:10:33] One of the interesting observations that I have for you all today on that side is like,
[04:10:39] Suspense is an inversion of control.
[04:10:41] trick, right? You throw a promise up to a boundary.
[04:10:45] And...
[04:10:48] then it re-renders. At least that's the way it works in React. And what we're seeing with
[04:10:54] And React, what they were thinking very much originally was that they were going to have a primitive...
[04:10:59] that they could kind of
[04:11:01] pass around and
[04:11:02] going to get more granular on where they knew where the reads were so that they could like, it's not about where you create content.
[04:11:08] the resources, so to speak. It's about where you read from them. And what we see with server components is just like,
[04:11:14] Async await.
[04:11:16] So there is movement on this side in patterns.  Because on the server you don't care about that because like,
[04:11:22] as much because...
[04:11:25] No one's seeing the intermediate results.
[04:11:28] In the browser, while you're awaiting that promise, the world moves on. Things progress. You have to show UI. Async await,
[04:11:37] is a very...
[04:11:39] blocking abrupt pattern
[04:11:42] for something that represents...
[04:11:45] concurrency
[04:11:46] But on the server...
[04:11:48] No one sees what you don't render, so you can just async await it.
[04:11:52] That being said,
[04:11:54] Waterfalls are a real thing. So like...
[04:11:58] you should be doing stuff in parallel.  So I think...  I'm mentioning async consistency here because...
[04:12:05] Mostly because of the...
[04:12:07] mental reconciliation between async models between server and client side rendering. And this is a very technical topic. I just wanted to point it out that I do think we'll see more movement.
[04:12:17] and thought here in the 2023.
[04:12:29] Yeah, someone's asking about seeing stuff throughout the DOM manipulatively.  Yeah, I mean, there's a whole bunch of...
[04:12:35] standards and things that they're working towards standardizing on how to do a lot of this stuff. So the performance definitely could get better. It's very cool that
[04:12:43] Um...
[04:12:44] the way that the WASM developers have kind of worked around it.
[04:12:50] Yeah.
[04:12:52] Yeah, it is interesting because it's funny.  Someone asked me on a...
[04:12:58] on the chat of my last stream.  They're like...
[04:13:01] They said something along the lines of like, why are all the frameworks like not good at async except for quick?
[04:13:07] And I was like, where did you get that idea from?  And then I stopped and I'm like, no, no, I'm pretty sure Misko has said something like this before.  And it's not really accurate.  Yeah.
[04:13:15] And
[04:13:17] And so I kind of launched into a description of how async works in the other frameworks. And it's largely like,
[04:13:26] But the thing is
[04:13:31] Quik's still kind of working out the patterns here, but largely what they do is they let you write your code
[04:13:36] almost like it's synchronously happening. And then if it's async, it just
[04:13:40] It just works.
[04:13:42] So the async is built into the component model, kind of like the server model we were talking about.  The challenge with that, as I mentioned, is it's not concurrent.
[04:13:52] natively, right?  So it's like, you have to think about  like, what happens  with Quick is like, you click a button, and  it hasn't loaded the code yet. Well, it has to
[04:14:02] It has to then go load the code
[04:14:04] And if it's there, then it gets pretty quick, but it's still async.  And if it's not there, then you have to wait for it.  So it treats those as the same thing,  which means that every, say, button click is actually async and quick.
[04:14:14] Like, every single...
[04:14:16] place that it's broken has to be async because it could be async.
[04:14:20] So in that sense they do have to get into consideration, but it becomes a much harder challenge when you have to think about how to handle concurrency and the fact that like,
[04:14:28] While this is happening, you want to show a loading state,  but that loading state hasn't loaded yet.  So you're figuring out how to actually...
[04:14:36] handle consistency and concurrency becomes tricky in this.
[04:14:43] What I was saying is that a lot of frameworks, their solution to it is move things back into the synchronous state, which is where they care, right?
[04:14:54] They care about...
[04:14:56] synchronous X, like we're all about keeping everything in sync with the data. So essentially,
[04:15:02] turn async back into...
[04:15:06] primitive almost like a signal that's that's one way the other way is bail out and
[04:15:11] until you're ready, which is what React does with suspense. But
[04:15:15] Essentially, you need a mechanism
[04:15:18] to kind of
[04:15:23] with that  asynchronicity.
[04:15:26] immediately,
[04:15:27] in order for these solutions to work. And that's why I'm talking about suspension transitions. These are actually fairly good solutions to these problems.
[04:15:34] because
[04:15:36] Um...
[04:15:37] they acknowledge asynchronicity in a way that
[04:15:41] they step outside of it. Like, it's
[04:15:43] Like either by, as I said, like,
[04:15:46] the way Saul does it where it converts it into a
[04:15:48] synchronous time
[04:15:50] and gives proper blockers or state to represent it,  or React does where they use the handle render.  If you just kind of like blindly handle async,
[04:15:59] Sure, it can work.
[04:16:02] but not in a way that makes sense for a user interface.  It might not even be blocking, but it's blocking.  If you don't handle it the right way, it's like blocking...
[04:16:10] in a different sense. It's not like blocking up the CPU thread. It's just not letting anything else happen at the same time.
[04:16:19] Thank you.
[04:16:27] Thank you.
[04:16:28] Anyway, that was my little async rant.
[04:16:32] React throw everything TM.
[04:16:35] It's part of re-render everything.
[04:16:38] It's...
[04:16:40] And I don't say that in a sarcastic way, though, because it's like...
[04:16:45] you can always throw it away and start over.  You know, it's like when you have a computer issue,  turning it on and off again  is often the most effective way of handling it.
[04:17:00] If you...
[04:17:01] "Do not use the suspense tag with route loaders and it waits on the previous page." No, we do use the suspense tag. What you're seeing is the router has transitions baked in. And because it has transition baked in, it actually
[04:17:16] renders the next page off screen,
[04:17:18] keeps the current page and screen. You have the ability by using like is router to actually update. Like the page on screen is still live.
[04:17:26] while it's concurrently rendering the next page.
[04:17:29] And then it doesn't show the content until the next page is ready. These kind of patterns, like you can play with it, you can go, you can like put nested suspense boundaries and go wait for this but not this. These kind of patterns and understanding of treating...
[04:17:42] async as a range of your view or template,  is a very powerful because it,
[04:17:49] it mirrors the way you think about UI. It mirrors the way like that,  that things are kind of like ergonomic, like, because you're now co-locating,
[04:17:57] that consideration with your view code, you can go like, yes,
[04:18:01] I want to wait for...  This part of the page is related to this stuff.  I want to wait there, but not wait for this.  You can kind of choose...
[04:18:10] you can kind of control this aspect.  And the same applies for streaming as well.
[04:18:19] Isn't there a term for this immediate mode versus retained mode or something?
[04:18:24] Um...
[04:18:26] you
[04:18:27] Yeah, and a lot of game devs do like that kind of mentality.  The problem is, like, it's just a...
[04:18:33] It's just not...  The DOM is not a cheap abstraction.  It's just...
[04:18:36] So I guess a virtual DOM is a cheaper abstraction,
[04:18:39] But like
[04:18:44] Yeah.
[04:18:45] Thank you.
[04:18:49] Okay. All right. Are we ready for maybe this week in JavaScript?
[04:18:55] Let me kind of switch everything around.
[04:18:59] *sniff*
[04:19:08] Give me a couple seconds here while I adjust my stuff.
[04:19:12] Thank you.
[04:19:15] Huh, looks like I got a few notifications.
[04:19:21] it's been a couple weeks hasn't it
[04:19:31] Okay.
[04:19:35] Sorry, give me two seconds while I just kind of cue up with this.
[04:19:41] I'm going to start here for that tab, just a second.
[04:19:46] Okay.
[04:19:47] Okay.
[04:19:49] How's everyone doing? You guys still alive? Yeah, we're getting towards the end of the stream now. We're...
[04:19:54] we talk about stuff. And the funny thing is I don't have a lot of time. Um,  I knew the framework conversation would take,
[04:19:59] would take a decent chunk of time here.
[04:20:05] So...
[04:20:06] I...
[04:20:08] I think most of my big headlines I can get off the solid one, funnily enough.
[04:20:12] Um...
[04:20:16] Yeah. Do-do-do-do-do-do-do-do.
[04:20:23] And one more.
[04:20:30] Thank you.
[04:20:31] Thank you.
[04:20:33] Thank you.
[04:20:37] Thank you.
[04:20:38] Thank you.
[04:20:40] All right.
[04:20:42] I think we're pretty much ready to go.
[04:20:46] Let me just reset everything.
[04:20:54] Alright.
[04:20:58] All right, you need to grab a little bit of water.
[04:21:05] I should check up on Twitch chat.  Are you guys still alive?
[04:21:09] Sometimes
[04:21:11] I don't get to see the...
[04:21:12] This stuff
[04:21:17] mostly first time chatters telling me how awesome React is.
[04:21:22] Don't have to convince me.
[04:21:31] Oh, I missed an interesting question in the middle of the R2 thing about explaining the difference between Jyotai and solid signals.
[04:21:41] And the signals are closer to MobX than Jyotai for scientific reasons.  I don't have time to get into that today.
[04:21:46] I talked about it in the last stream.
[04:21:49] the one I talked about, reactivity and rendering.
[04:21:53] So...
[04:21:54] Yeah.
[04:21:55] blue
[04:21:58] Um, it might have not been 30 minutes, but yeah, knowing me at Walla-Looly would have been 30 minutes.
[04:22:04] Yeah.
[04:22:07] Solid puns write themselves.  They do.
[04:22:11] It's not something I can get mad about or whatnot.
[04:22:16] So...
[04:22:16] Okay.
[04:22:17] Thank you.
[04:22:20] Alright.
[04:22:22] Thank you.
[04:22:24] Alright.
[04:22:27] Oh, yeah, yeah, yeah. I would love to talk to Daishi or...
[04:22:33] All right, let's just do this
[04:22:37] banners
[04:22:40] Thank you.
[04:22:42] All right, it's been a bit of a break over Christmas, so let's talk about this week in JavaScript.
[04:22:50] For this week in JavaScript...
[04:22:54] There's a bunch of unrelated things.
[04:22:57] A lot of hot takes when flying around on the internet. I just picked a few things that
[04:23:03] that I thought were interesting to kind of talk about today.
[04:23:08] And I'm actually going to start before Christmas because we haven't streamed for a while.  And I just wanted to pull something out for people...
[04:23:15] Just because...
[04:23:16] Even me as a react dev, and I figured this audience would...
[04:23:19] especially appreciate this
[04:23:21] I
[04:23:22] Does anyone know what this actually logs?
[04:23:27] I did not know the correct answer to this and I had to test it a few times.
[04:23:34] But this does not log what people would expect.
[04:23:40] Because you see something...
[04:23:42] That is...
[04:23:43] You stayed zero.
[04:23:46] So it's rendering.
[04:23:47] Then it goes to the effect, obviously, so it renders everything.  So it renders zero. Then it renders-- then it does the effect.  Set count one.
[04:23:54] which then causes a re-render,
[04:23:56] which causes rendering to happen again.
[04:23:58] Right?
[04:24:00] And then you have a U-State, and then you get to the effect again.
[04:24:04] Obviously.
[04:24:05] Or...
[04:24:06] And then...
[04:24:07] It sets count to one again,
[04:24:10] And it's already won, so that should be the end of the story, right?
[04:24:14] So you'd think it would be rendering effect, rendering effect.
[04:24:17] But as...
[04:24:20] Maple points out
[04:24:22] It's rendering effect, rendering effect, rendering.
[04:24:26] This is not strict mode. This is literally just how react is
[04:24:30] It does. It does...
[04:24:32] Because of some cases it can't know that setting the same value is sufficient stopper. It actually goes and renders everything in
[04:24:40] a third time,
[04:24:41] but doesn't run the effects on them.  He basically bails out early when he gets that component,  and like he goes, "Oh,
[04:24:47] Yes, in fact, nothing has changed, but it has to double check that nothing has changed.
[04:24:53] So...
[04:24:55] an effect causing
[04:24:57] Uh...
[04:24:59] a rerender, like causing a state update in React,
[04:25:02] And this is not even an effect. This is true with Event Handler, too.
[04:25:06] if setting the same state in React is not free,  it can lead to
[04:25:11] It can basically render one and a half
[04:25:14] more times.
[04:25:19] I figured people in the stream would appreciate this because I did not realize this.  I assumed like most people would be rendering effect, rendering effect, but...
[04:25:28] it does render a
[04:25:29] third time.
[04:25:31] So it's initial,
[04:25:33] Re-render because of update.
[04:25:35] and then re-render just 'cause.
[04:25:37] So if you, if you, I don't want to think about strict mode.
[04:25:40] Does it render like six times or five times? I'm not sure.
[04:25:52] Thank you.
[04:25:55] Yeah, I mean, that was the point, I guess, because...
[04:25:58] It sets the same value. That was the point.
[04:26:03] But yeah, I mean,
[04:26:06] It's a primitive value. It's like a one. It shouldn't change.
[04:26:09] But I actually tried this with an event handler and saw the same double render.
[04:26:15] Um, like, so, like, without the effect here, just picture if it's, like, a button, you press click.
[04:26:22] in
[04:26:23] Um,
[04:26:25] Press click. I mean, I don't have it.
[04:26:27] Sorry, I jumped into the thread. I didn't mean to. If you had a button here that you press click on, it will...
[04:26:34] If you ignore the initial render, it will then go rendering,
[04:26:38] Rendering.
[04:26:39] Okay.
[04:26:45] Yeah.
[04:26:46] So in any case,
[04:26:50] I know a weird way to start this week in JavaScript, but it was just like...
[04:26:54] This is going to be one of the weirdest reactisms.
[04:26:59] Yeah, I'm not going to talk too much about...
[04:27:01] my hope for TypeScript.
[04:27:03] - Thank you.
[04:27:04] We already talked about this article. Today's stream was largely about the content of this article.
[04:27:10] Only thing I want to...
[04:27:12] say is, and I think I mentioned earlier in the stream,
[04:27:15] Somehow, this article that was inspired by Theo asking me what my best article was this year,
[04:27:21] ended up being my most viewed article that I've ever written.
[04:27:24] So there you go.
[04:27:33] What about weird solidisms?
[04:27:38] Let me see what... I'll bite.
[04:27:46] Interesting solid JS Quirk, when making a library for other libraries, you must specify it as an external dependency or else...
[04:27:54] Oh.
[04:27:55] I mean, this is true of every JavaScript framework, though.  Like, more so Solid stops being reactive  because the compiler, like, the compiled JSX  is different than the runtime, but...
[04:28:06] having multiple versions of the framework
[04:28:09] interacting on the same
[04:28:11] portion of code
[04:28:12] is going to always...
[04:28:15] cause weirdness and doubled your bundle size. Yeah. Okay. Sorry. I thought there was something real.
[04:28:21] Moving on
[04:28:28] Yeah, we have dev mode warnings.  I don't know...
[04:28:31] I guess it was a production build.
[04:28:33] Yeah, dev mode warns you about this.
[04:28:42] Okay.
[04:28:46] Where was I? Moving on. No, not this one. We'll get there. Sorry.
[04:28:55] My whole screen jumped.
[04:29:01] I mean, dev mode exists everywhere.  It just depends on...
[04:29:05] if you turn it on or not.
[04:29:08] It's probably for the app, I guess. When the app is running, it will see that there's two versions of Solid and complain at you.
[04:29:18] When you're writing the library, it's not going to be able to tell because there's only one version of solid there.
[04:29:23] Yeah, I mean,
[04:29:25] - Okay, someone could probably submit an issue or something.  The code is very specific.  Like it literally checks the global and it,
[04:29:35] it's there.
[04:29:36] it,
[04:29:38] basically errors. I've seen the warning multiple times debugging people's stuff.
[04:29:44] Moving on.
[04:29:49] Thank you.
[04:29:51] Oh, more Theo stuff, hey?
[04:29:54] Theo did his award show, which is very...
[04:29:59] I don't know how to put it in.
[04:30:00] award show.  Uh,
[04:30:02] in terms of all his takes.
[04:30:03] T3 community. It was a really cool idea  because a really good chance to celebrate  people involved around
[04:30:09] Uh,
[04:30:10] the community.
[04:30:11] for T3 and the incredible work that that community has done.  Because you remember, he did not create T3 app. He just like said, "Hey, I'd like stuff, you know, like this, like this and this." And people actually went and built it.
[04:30:22] So his way of kind of giving them recognition was really clever.  And I quite enjoyed it.
[04:30:29] actually watched it with the whole family
[04:30:32] which was kind of fun on YouTube.
[04:30:36] - Thank you.
[04:30:37] Um...
[04:30:39] And
[04:30:40] Yeah, really super stoked to see special shout out to Nikhil getting nominated for Contributor of the Year.  And I'll...
[04:30:48] JavaScript framework of the year for SolidJS was amazing.
[04:30:52] Um...
[04:30:53] Alright.
[04:30:54] Let's switch over to Solid.js for a bit.  There is a bit of Solid.js stuff over the last couple weeks.
[04:31:01] storybook
[04:31:03] Looks like we're...  Like, I've had trouble with storybook over time.  Apparently...
[04:31:07] someone has gotten it working properly.
[04:31:10] So pretty stoked on that.
[04:31:13] Did I retweet that twice?  That's how stoked I am about it.
[04:31:17] I literally retweeted it twice. Okay.
[04:31:22] Um,
[04:31:24] coming up if you're in the area.
[04:31:27] Solid JS Miami meetup.
[04:31:33] Um...
[04:31:37] Yeah, January 25th, SolidJS meetup in Miami.
[04:31:42] Who's going? David's going. I do not believe I'm going to this one.
[04:31:46] I'm actually speaking at another conference in the morning, but it's an online one.
[04:31:51] But yeah.
[04:31:52] it's,
[04:31:53] It's put on with Boomi,
[04:31:56] Some of you guys might know Dax from the community.
[04:31:59] he's putting it on
[04:32:02] Thank you.
[04:32:06] Usually these are about a month, month and a half. This one got posted December 29th. Yeah, it's usually about a month.
[04:32:18] um
[04:32:21] uh... where are we going here
[04:32:25] Here's another cool one. Remix Router
[04:32:28] Done with SolidJS?
[04:32:30] I thought this was cool.  I've talked about how difficult this would be,  but people kind of misunderstand it.  It's not necessarily...
[04:32:39] *sniff*
[04:32:41] It's doable. I'm more talking about the fact that Solid's Paradigms makes me not want to write a router in this fashion.
[04:32:48] But I think that it existing is very cool, and I'm glad that people are excited to do this.
[04:32:54] Um...
[04:32:56] Another huge one.
[04:32:58] from the creator create JD app or T3 app port, um,
[04:33:02] we now have
[04:33:03] Solid start off from...
[04:33:06] which is basically a port of Next off.  They kind of broke it out before the holidays,  and they announced that they had support for Next, obviously, in SvelteKit.
[04:33:15] Solid start.
[04:33:16] and also uses NextAuth.
[04:33:20] Right. So this is huge.
[04:33:23] Um...
[04:33:25] Uh...
[04:33:28] He's been killing it.  He's actually now part of the ecosystem on Discord.
[04:33:33] So...
[04:33:34] another one of those really smart kids um i can't wait to see what he builds next honestly uh yeah
[04:33:41] Another one, this...
[04:33:44] We've been waiting for this.
[04:33:46] Cobalt, a library for unstyled components for building accessible web application systems.
[04:33:50] I love the responses to this.
[04:33:55] Um...
[04:33:57] People talking about Tailwind.
[04:34:01] You rename solid area project to Cola, or these two products are different.  It's different. Solid area is a set of perimeters.  Cola is more like radix UI in terms of DX.  However, both takes are...
[04:34:09] whatever, accessibility features from React ARIA.
[04:34:17] So I guess it's more like...
[04:34:18] Um...
[04:34:20] Radix. I'm not as familiar with that, but...
[04:34:22] Thank you.
[04:34:24] Yeah, what's cool is the dock site was built in Solid Start.
[04:34:27] Um...
[04:34:28] And it's completely headless.  It's kind of like...
[04:34:31] Um...
[04:34:32] I'm sorry.
[04:34:33] This is "I am the headless commons is too clean. I'm jealous of the Solid JS ecosystem." I think that's funny.  But yeah, we're starting to see really good high quality libraries coming into Solid. And I'm pretty stoked about this. I don't know
[04:34:47] too much about these kind of systems,  but everyone who's looked at it said that this is very...
[04:34:54] Very cool.
[04:34:56] He's also the creator of Hope UI.
[04:34:58] Um...
[04:35:01] Yeah. I don't know the mappings for this stuff. Like when, when, when hope was compared to chakra and now this is compared to radix, um, it's just cause people come by and I'm like, I can them UI libraries. Cause they're like, Oh, where's your component system? They're like, well, I feel like something more like Mantine. And I'm like, wow.
[04:35:18] I don't know. Maybe there's a solid man team.  Maybe it's called like
[04:35:21] Like...
[04:35:22] I don't know, sardines or something. Like, I...
[04:35:27] Hopefully we can figure out a way to make our ecosystem more discoverable because it's really cool stuff.
[04:35:35] Okay.
[04:35:36] It's funny though, we do a lot of effort on this.  We have a resources page where we search and we list every project.  So people wonder about the ecosystem.
[04:35:44] Like...
[04:35:45] Solidjs.com
[04:35:49] Ecosystem, packages and resources.
[04:35:52] Okay.
[04:35:55] What do I want?
[04:35:57] Components...
[04:35:58] like
[04:36:01] Did I...  Like, I don't...
[04:36:04] SD style components of motion.  Like, maybe the search is just, I don't know.
[04:36:09] Solid UI, solid form handler, blah, blah, blah.
[04:36:12] Cut.
[04:36:13] I guess the problem, there's like so many libraries to go through that even when like
[04:36:18] I don't know. Maybe that's the problem. Maybe there's just too many solid libraries to go through here.
[04:36:27] All right.
[04:36:28] But yeah, very cool stuff. Um,
[04:36:32] Thank you.
[04:36:35] Mmm-mmm-mmm-mmm-mmm-mmm-mmm...
[04:36:39] This is another cool one. Sorry, we're just doing the solid strip before we get into some of the more spicier stuff.
[04:36:46] Derek got solid start running on Bunn.
[04:36:49] And it was significantly faster.  For those of you who were wondering about that,
[04:36:55] And he was in chat earlier to,  I don't know if he's still in chat.  Um,
[04:37:00] Bye.
[04:37:00] Was it
[04:37:01] That one bro? Yeah, he's still there. 434. Yeah, you're still here. We've been kind of bouncing back. I was talking about how I was frustrated with the streaming performance at various points. And at one point he came in and he was like, Remix actually has their own package instead of using DC or whatever for doing the streams.
[04:37:25] I was looking at it and the numbers looked impressive.  We were talking about doing a PR.  Then what ended up happening was,
[04:37:35] So
[04:37:36] Um...
[04:37:37] spawned by this piece of news is that
[04:37:41] Quick kind of was gushing about node 18, because node 18 finally brings all these kind of like web stream stuff into the, you know, like the reason we have all these polyfills and like undc and whatever into the main node runtime.
[04:37:51] And they're like,  they're so excited about it.  I'm like,
[04:37:53] Oh, now we just have to wait for AWS Lambda.
[04:37:56] You know, sometimes you make cheeky remarks,
[04:37:59] and they're really unwarranted,  and you look like a fool after?  Well, for me, this is one of those remarks.  Because as I found out, is like,
[04:38:08] Even before I was paying attention to Node 18, AWS had added support to it.
[04:38:12] So, like, usually I'm used to taking them, like,
[04:38:16] like a good year, you know, to get in.
[04:38:19] And...
[04:38:20] And people are very quick to point out to me,  they're like, AWS supports Node 18.  I'm like, what?  Honestly, every year I went through the cycle for like,
[04:38:30] Oh, I mean, when I was working at that startup, because there's always new features, I feel like...
[04:38:36] since node version 0.06.
[04:38:40] Um,
[04:38:41] Like, I'm talking like a decade of this expectation.
[04:38:46] This is like the first time...
[04:38:49] Like the first time that they've like got to it this quick in like 10 like it feels like 10 years.
[04:38:56] Um,
[04:38:57] So,
[04:38:58] I just assumed, which was stupid of me, and I had to eat my words on that.
[04:39:03] Um,
[04:39:04] I apologize.
[04:39:06] um...
[04:39:08] But once that happened, I was like, okay, let's just do it.  Let's drop support for Node 16.  Who cares?  Vercel, Netlify, they're right on the edge of it.  I'm sure they'll get there.
[04:39:17] by the time we get out of beta.
[04:39:20] So I got...
[04:39:21] So we were chatting here and it was like, okay, he already had the setup.  I'm like, can you test node 18 for me?
[04:39:28] right
[04:39:28] And...
[04:39:29] He tested it, and he's like, "Yeah, it's better, but the Remix stuff is still faster than the Node18 implementation."
[04:39:38] Slightly, like 10%.
[04:39:40] and we're like, oh, you know, okay, well, maybe we'll just do the polyfill anyways. And I guess...
[04:39:46] I mean...
[04:39:48] -
[04:39:49] I guess, you know,
[04:39:52] he was bored and he decided, he was like, "Oh, let's see what it looks like in bun."
[04:39:56] Bun blew it out of the water.
[04:39:59] I don't know. I think this is cool. I think if we could look at getting some kind of
[04:40:05] set up so we can get this, like...
[04:40:07] more than just
[04:40:08] you know, like make other, allow others to work on Bun. Maybe, you know, I'd be accepting of a PR  if it made sense, but this is very, very cool. So thank you very much, Derek.
[04:40:16] Um,
[04:40:17] *sniff*
[04:40:23] Oh, great.
[04:40:26] Sorry, it jumped.
[04:40:27] Twitter likes to jump up now.
[04:40:29] All right.
[04:40:30] Um...
[04:40:32] Oh, no, that was my bad.  I...
[04:40:35] Yeah, my bad.
[04:40:38] - Okay.
[04:40:39] A couple more pieces of solid news before we get past it here.
[04:40:46] SolidQuery 5.
[04:40:47] is getting dev tools, which is really cool. We can always use more dev tools. So I'm pretty stoked about this.
[04:40:53] Um...
[04:40:55] So yeah, now when you use hands-ex query with v5, you're going to have dev tools, which is very, very cool.
[04:41:03] Thank you.
[04:41:04] Okay.
[04:41:05] Ummm...
[04:41:09] Okay, I think I'm off that.
[04:41:12] Let's move forward.
[04:41:15] All right.
[04:41:17] I'm going to actually go to the bookmarks now. Let's talk about a few other things.
[04:41:22] I forget if I talked about this on stream before.
[04:41:25] This was amusing.
[04:41:26] But I don't think it's important. I want to talk about personnel changes. Over the new year is often when people actually move between projects.
[04:41:36] And I think we've had a few interesting moves, people that we watch on the stream because they were doing really impactful stuff in the community. And one of those is Huxpro, or I'm sure if I say his name correctly, I think it's like Shun. But the truth of the matter is,
[04:41:53] I mentioned his name...
[04:41:54] every single solid talk because it's part of my World Beyond Components talk for his work in  React Forget. This is the guy who headed up the original React Forget compiler project.
[04:42:04] Um,
[04:42:05] He's left meta and
[04:42:08] and
[04:42:11] I think from the sound of it, he's actually...
[04:42:15] Um...
[04:42:15] left, like, because he's not worked for meta, he can't work on the closed sourced
[04:42:20] part of it anymore. So he's actually kind of left the project a little bit. So forget is in good hands as we now have a team behind it. I already knew that and mentioned it perhaps on stream. But this is like more confirmation. There is a team of individuals working on the react compiler. It's not just like an offshoot like
[04:42:35] project of one person.
[04:42:37] We don't see this as much externally because the core team is kind of like...
[04:42:40] the external facing part, and we only ever see like a couple
[04:42:45] people, you know, like we like, and they kind of dwindled in size the last few years.
[04:42:50] But now, from my understanding, Meta has several
[04:42:55] teams working on particular parts of React that don't get the public-facing part of it.  Well, the core team has kind of been more distributed between companies like Next and
[04:43:05] and replay.
[04:43:08] So...
[04:43:09] This is interesting anyways because I don't know what Hux Pro is going to do next.
[04:43:14] But
[04:43:16] And it says, I'm looking forward to continuing to work with the team when it's open sourced.
[04:43:21] But...
[04:43:24] essentially...
[04:43:26] Um...
[04:43:28] There is a team working on the compiler officially here, and
[04:43:32] We're going to see how that goes.  Another interesting meta thing.  I think meta stock's been hitting a bit of a...
[04:43:38] hard place and people are looking for their new options or whatnot.  Dominic Ganaway,
[04:43:44] Some of you might be familiar with him on the stream because he is the creator of Inferno.
[04:43:49] He's also the creator of one of the creators, I don't know, one of the primary creators behind Lexical.
[04:43:55] And the text editor.
[04:43:57] Um...
[04:43:58] And he joined Meta back in 2016 or 2017, around then, right after Inferno 1.0 went out and it made waves.  And he actually dropped working on Inferno.
[04:44:11] to work at Meta.
[04:44:12] Stop supporting it.
[04:44:14] and
[04:44:16] The projects continued on without him.  But...
[04:44:21] He's...
[04:44:22] He's now leaving Meta six years later.
[04:44:25] And, um,
[04:44:27] Thank you.
[04:44:28] I...
[04:44:29] It took a few months, but he actually
[04:44:32] Or no, it didn't take three months.  Sorry, no, my bad.  I've known this for a while.  That's probably why.  He posts that one day, and then on the next day he posts...
[04:44:41] what he's doing next. He's joining Bloomberg. Um,
[04:44:46] "Boomer Terminal is based on Chromium, so the UI is nearly all DOM rendering. I'm working on the JS infrastructure to make the terminal blazing fast." So he's up to his performance game again. He's going to be working on...
[04:45:02] the terminal for Bloomberg
[04:45:05] Which is interesting because I also know that he has aspirations a bit to get back in the JS framework game and he's been
[04:45:12] It's...
[04:45:13] Interesting how much a lot of our thinking is aligned.  I've been talking to him and seeing that because he's very much on reactivity and
[04:45:21] more on the pull side.
[04:45:23] - Okay.
[04:45:24] And...
[04:45:25] Thank you.
[04:45:26] Because in his mind, a virtual DOM is the holes in the JSX, so to speak,  which is basically what reactivity is.  So our idea of virtual DOM and reactivity,
[04:45:38] Context is almost identical. So I think
[04:45:43] I think it's interesting.  And I think this is a very interesting, tough performance challenge for him.  And I think he's going to love it.  So I think this is awesome.
[04:45:54] Wow, viewership just spiked. Did I miss a raid?
[04:45:59] I did get rated.
[04:46:02] Sorry, I'm never looking at Twitch chat.
[04:46:04] Thank you.
[04:46:08] I am just talking about what's been going on with This Week in JavaScript.  Sorry, for some reason I missed the raid, so I don't actually even...
[04:46:14] Why am I so blind?  I usually can see...
[04:46:17] The raid. Well, thanks for joining me. I've been talking about JavaScript frameworks
[04:46:22] And, um...
[04:46:30] Yeah, it's because I stream from StreamYard.
[04:46:33] I'm sorry.
[04:46:35] Yeah, yeah, yeah, okay.
[04:46:37] Anyways, I'm talking about news and JavaScript for the last...  We did a stream on JavaScript frameworks talking about what they look into 2023 and latest trends.
[04:46:49] Now we're talking about hot takes and what's going on in JavaScript.
[04:46:54] Um
[04:46:56] this past few weeks.
[04:46:57] and
[04:46:58] I...
[04:46:59] The next one we're talking about, I want to talk about bun and...
[04:47:03] I love, for those of you who don't know, this is Fabio, creator of Vobi.
[04:47:09] uh,  very active speaker,  uh,  in our community discord.  Um,
[04:47:14] Uh...
[04:47:15] One of our local reactivity experts framework
[04:47:20] Guys, he's often in our chat here. He kind of stirred up a bit of a storm here because Jared...
[04:47:28] added punning, which is a shorthand of compiling boop,
[04:47:32] to boop, as he says here, to bun.  I think a while ago, I remember Jared talking about this with me in September.  I don't know if he had added it yet, but he essentially had...
[04:47:47] added this and
[04:47:48] Fabio went into the TypeScript
[04:47:52] went into TypeScript or GitHub and was like, hey, you guys should support the typing of the JSX shorthand.  Yeah.
[04:48:02] Which is a very aggressive move. See, a lot of times we don't-- like, I would have loved to add this feature, but I didn't with Solid. It wouldn't be that hard to patch Babel.
[04:48:12] The standard exists because all the tooling is based on it, like prettier and code highlighting and, you know, like text me grammars and like all there's a whole bunch of tooling around this.  I did a whole stream on that back. You should watch if you're interested in what it takes to build a language in JavaScript. I had the one of the creators of Marco or maintainers Marco Dylan Piercy lead us through that.  So he like, yeah, it's funny how many thumbs up this has. Like this is just the JSX standard.
[04:48:41] kind of feels like it's been dead for like a decade. This is one of the most requested features and the issue's been open since like 2013 or no, 2014, for this particular issue.
[04:48:53] It's funny because like no one wants to move because you like break TypeScript you break something else and Jared's just like oh
[04:49:00] Who cares?
[04:49:01] You know, I'm just going to do it.
[04:49:02] you know,
[04:49:04] If not me, who's going to do it, right? And, uh, sorry.
[04:49:08] I'm not ready for that take yet.
[04:49:10] And so he did and I
[04:49:14] a lot of people reacted kind of,
[04:49:19] negatively to this one um
[04:49:24] Yeah, some people positively, but this was a hot one. Remember the time when React community is constantly abuzz with trying out new ideas and pushing the needle? This absurd over-the-top reaction to this is a sign that that's changed. I'm sure whether that's good or bad, but it's definitely different.
[04:49:37] Sunil is always on point.  Let's give that a like.
[04:49:41] Thank you.
[04:49:43] Um...
[04:49:43] This reads like an Elon tweet with all the controversial discussions.
[04:49:48] Yeah, someone talking about something they can't do that no one cares about.
[04:49:52] Um...
[04:49:56] To do to do
[04:50:00] There's a great discussion in the GitHub to check out too, kind of a back and forth between
[04:50:06] and Fabio and them involved.
[04:50:09] Um,
[04:50:12] But...
[04:50:13] There was a lot of... I'm trying to find some of the bigger retweets...
[04:50:18] This one?
[04:50:21] Here's the thing.
[04:50:32] Fuck.
[04:50:32] I get Jared here completely.
[04:50:36] This...
[04:50:37] I tooling is supposed to work for you, right? Like that's why you do this. You use tools to make your life easier.
[04:50:45] At what point do tools become the shackles
[04:50:48] Right? Like that says, and obviously working on a framework like solid JS,
[04:50:53] has made this the case for me, right?  Because I'm trying to push boundaries, and then TypeScript or Prettier,  someone's going to be like, "No, you can't do that."
[04:51:00] I had this problem early on because I wanted to do a way of...
[04:51:05] indicating in the JSX what was dynamic or not.  And I realized I could use parentheses
[04:51:10] and TypeScript would get past them.
[04:51:12] But the problem was...
[04:51:15] Like...
[04:51:16] prettier would erase them. And basically every kind of time I was trying to toggle to get around stuff, I'd like hit "oh,
[04:51:24] but this won't work or this won't work.  And at a certain point, you're just like,
[04:51:28] Why aren't these things there for me?  And the problem is...
[04:51:32] The more useful tools become,
[04:51:34] on a specific path,  like,  like the,  the,  the more like,  like,
[04:51:39] valuable they become for the mainstream path, and the more opinionated they can be. Prettier is a perfect example of that. We got to a point where it was very cool to have no config. You're like, no, no, you have to go this way. Because in a sense, that means a tool for that audience is more valuable, because it's better at...
[04:51:57] streamlining, right?
[04:51:59] But on the other hand,
[04:52:01] It's incredibly restrictive to innovation.
[04:52:05] And I've spent my whole time in solid.
[04:52:07] basically fighting  Tooling it's people wonder why I always have like a little chip against typescript and all this stuff. It's just because like I'm being told what I can't do and
[04:52:16] And I don't like being told what I can't do, right?
[04:52:24] So...
[04:52:26] Oh, pizza's ready, apparently.
[04:52:30] What I'm getting at here is
[04:52:33] I like that this is like the stupidest little feature that doesn't even matter.  I like what this kicked up.
[04:52:40] Because...
[04:52:41] Like this, this, this, this is, this is...
[04:52:43] something people want but it's also kind of inconsequential but the amount
[04:52:49] That it...
[04:52:50] fired up the ecosystem and people talking about this is not minor. And I think that's something  that we should really consider when, you know, looking at this, right?
[04:52:59] Um,
[04:53:01] so
[04:53:03] I love that this spawned this kind of thing.  And this isn't like a hit at Matt or anyone else here.  It's just...
[04:53:11] It's good to see that people are thinking about this change. I love
[04:53:16] that Jared pushed the thing.  He had more guts than me on that side.  I fought this stuff for ages.  But when it comes to...
[04:53:29] the conveniences you find in VS Code...
[04:53:31] I...
[04:53:32] I got beaten down, so...
[04:53:33] This is...
[04:53:35] He's still carrying the torch.  I will join him when the opportunity is right.
[04:53:40] All right.
[04:53:42] That's my perspective. I know people are like,  it's a bad thing. It is kind of a bad thing. There's a reason  I didn't do it, but like...
[04:53:47] This is also kind of great.
[04:53:53] Alright, let's keep on going. What do we got here?
[04:53:56] Okay, I like this take. We'll leave. I want to end on that one. So let's keep on going. Um, do do do do.
[04:54:04] uh...
[04:54:07] Okay, cool. Actually, I got a couple more. Okay, Rising Stars of JavaScript is out.
[04:54:15] So...
[04:54:17] It is... You guys are seriously discussing my pizza...
[04:54:23] *laughs*
[04:54:26] Thank you.
[04:54:30] Okay, this is out.
[04:54:32] Also related, Bun had the most stars...
[04:54:35] this year for any JavaScript peripheral repo.
[04:54:40] Honestly, this was the I think it was the most in a month that these guys had ever seen it was 20  Thousand stars in one month the the wall curve for this is insane. I
[04:54:50] Um
[04:54:52] So...
[04:54:53] Yeah, I mean...
[04:54:55] They basically went from zero to like...
[04:54:57] Like, in my opinion, GitHub Stars works like levels.  You get to certain stages, and then it becomes really hard  to burst through the next thing until the project gets  to a certain point.  You kind of like, it's a stepped thing.
[04:55:09] Bond went from zero to as far as you can go from...
[04:55:13] for in a kind of like early adopter kind of range in like a month.  That's,  that's insane.  Like it's hard to get more than 30,000 stars.  Um,
[04:55:22] for anything that's kind of like an early adopter phase and bun likes just  straight up did it.  Tori gets a good honorable mention here.  Um,  they had a really good year,
[04:55:32] But, generally speaking,
[04:55:35] Look at the top 10.
[04:55:37] There's a couple really ones that surprise me and excite me even more as well, you know, alongside Bun.  I knew Bun was going to be here.  But just going down here, check this out.  TRPC.com.
[04:55:49] And Astro are very high up here.
[04:55:51] on this, they had very good years.
[04:55:55] Obviously utility libraries that can be used in every framework have an easier chance.
[04:55:59] But like
[04:56:01] Like...
[04:56:01] This is huge, kind of getting into that list, right?
[04:56:08] Okay.
[04:56:08] This is also kind of fun. I do want to prefix this.
[04:56:12] Um,
[04:56:16] that
[04:56:17] the value of GitHub stars is mostly a vanity metric.  And this is not saying what's the most popular,  the best to use,  just that this is the thing that has kind of captured the most mind share on a  delta.  Yeah.
[04:56:30] Because, like, over a short period of time.  So it's like a hype...
[04:56:33] metric, essentially.
[04:56:35] And
[04:56:37] If you look at it,
[04:56:38] Um,
[04:56:40] things are changing if the hype metric has reversed in such a way. Front-end frameworks, React is obviously
[04:56:46] stable where it is and
[04:56:48] that but we see solid is still carrying on from last year with very similar numbers  Svelte went down a little bit from last year, but it's still in the same range and
[04:56:59] Quick spiked it this year, getting in here, but we're all kind of in this 10,000 range this year.
[04:57:04] This
[04:57:05] This is quite a push down of the angulars and the views of the world.
[04:57:11] So
[04:57:11] Right.
[04:57:12] Um, so like, don't get me wrong views, total amount.
[04:57:16] puts them in second,
[04:57:18] But they're split between two projects, right?
[04:57:20] Angular, HTMLX, Lit, Alpine, Preact,
[04:57:24] Um...
[04:57:25] Marco relate like this this is this is this is definitely interesting just to kind of see
[04:57:32] Where people...
[04:57:33] This is where the conversations on tech Twitter are happening, essentially.
[04:57:37] So,
[04:57:38] Very cool. This means that coming to next year, you're going to hear a lot more about QUIC.
[04:57:42] So you're going to continue to hear a lot more about solid.  And Svelte's held its ground.
[04:57:47] But, you know, this is kind of...
[04:57:50] you know
[04:57:51] Eh?
[04:57:52] It's interesting times to see this kind of change because...
[04:57:56] It's been a very steady react view of
[04:57:58] whatever for quite angular for many years.  And that's not the case right now.
[04:58:04] React ecosystem, again, tRPC, just sneak it, just getting right in there, right?
[04:58:09] Um...
[04:58:12] which is completely awesome.  Again, back end, full stack, TRPC just
[04:58:15] Sneak it in there.  What's cool is Astro really is the number two meta framework.
[04:58:22] in general for hype right now.  And I think that's--
[04:58:26] Great. If you see this chart on MetaFrameworks,
[04:58:31] You know...
[04:58:32] Um,
[04:58:33] Next, like SvelteKit had a big year last year for the Metaframeworks thing. That's when they spiked it. You see fresh kind of new entry this year.
[04:58:41] Um...
[04:58:42] But...
[04:58:43] Yeah, really big on Astro. Sol Stark got its first notice. We're just entering the fray here.
[04:58:49] Basically, they looked at, I think stuff had to be in, they had to be tracking it for X number of months before they looked at it.  The Create T3 app should be in here from star amount.
[04:59:00] They should be up here by remix.
[04:59:04] I think between Astro and Remix,  but they weren't
[04:59:08] Um,
[04:59:09] they're here at the beginning of the year.  So if we go to bestof.js, if you're wondering  where they get their numbers from, it's this website,  bestof.js.
[04:59:17] And
[04:59:18] You could follow this all your-- I already knew what the results were going to be because I checked this from time to time.
[04:59:23] so
[04:59:24] You can pick a category here.
[04:59:26] Um,
[04:59:27] And
[04:59:28] like UI framework and you can still see the numbers for quick solid for the  past 12 months.  Right.  But you know,  if you look at the last seven days,
[04:59:37] It's different. You see Svelte back up on a hype because of Svelte coming out. Right. So, you know, essentially,
[04:59:45] - Thank you.
[04:59:46] You can get all the numbers and the data that they have from this website, but what
[04:59:51] If I look up create...
[04:59:53] It's called T3 stack in here, that's funny.
[04:59:58] These numbers
[05:00:00] And look, like if
[05:00:03] These are good numbers.
[05:00:06] 33, you know, averaging, you know,
[05:00:09] But,
[05:00:11] Unfortunately for them,
[05:00:13] They're under Next.js, I guess, which doesn't put them on the framework category, perhaps.
[05:00:21] And secondly, if I change these results, so let's say I choose things that are Next.js.
[05:00:27] And I moved to 12 months.
[05:00:30] They don't have enough data to show up
[05:00:32] Um...
[05:00:33] on the categories so they couldn't be included. But I just wanted to give them a little shout out because their star growth would have had them on this chart, definitely.
[05:00:44] Yeah, especially because the way these growth metrics work in terms of early adopters, we'll see how the trends work. This was a critical year, in my opinion, because they jumped out the gate really strong.
[05:00:58] It's hard to keep that growth...
[05:01:01] Um,
[05:01:01] I think it'll be steady, but it's hard to keep...
[05:01:06] You know, the spike, so to speak.  Little spikes.  But I...
[05:01:10] I'm sure they'll be up there next year.
[05:01:18] But yeah, I mean, all in all,
[05:01:23] Yeah, Turbo Repo, it's been great.
[05:01:25] This is an interesting thing to look at as I said it
[05:01:29] It's more about hype than anything, but...
[05:01:31] Um...
[05:01:32] Again, next in Astro.  Astro...
[05:01:36] is definitely the hype right now.
[05:01:39] um,
[05:01:41] Uh...
[05:01:43] I know TK Dodo thought this was amusing, that under GraphQL, TanStack query was the highest.  But it's based on stars, not necessarily how good of it is as a GraphQL client.  Here's Redwood getting a bit of a shout-out.
[05:01:56] So,
[05:01:56] But yeah, no.  Besta.js, check it out.
[05:02:02] Alright, let's keep on going.
[05:02:05] All right.
[05:02:07] I didn't miss anything else on Twitch, did I?
[05:02:13] All right.  Keep...  Yeah.  Um...
[05:02:16] Where are we here?
[05:02:21] Yeah, I was on PodRocket.  This is cool if you wanna hear more  about server components and stuff in an audio format,  you can just like turn on the background.
[05:02:28] Okay, last two things for...
[05:02:30] for today.
[05:02:31] Yeah, there's pizza, but I got two more things. I got two more things, okay?
[05:02:35] But...
[05:02:36] Um...
[05:02:38] Okay.
[05:02:38] Thing number one.
[05:02:40] I want to talk-- we've got AJ here.  I kind of forced him to wait the whole stream for this.  But hopefully, he's been having fun.
[05:02:50] I saw this take and at first I got a little bit ruffled by it, but then I stepped back and I want to talk about this for a minute.
[05:03:01] I haven't retweeted it yet. I want to talk about it first.
[05:03:04] I don't know. I haven't looked at the quote trees.
[05:03:09] Yeah. This...
[05:03:11] Thank you.
[05:03:16] I agree with Quick, but I'm more optimistic about Bunn than that. Okay. Okay.
[05:03:20] Okay, check this out.
[05:03:21] Thank you.
[05:03:23] I'm just going to read this verbatim, and then we can talk about this for a second.  React is to Node, as solid as to Dino, as quick as to Bun.  Hold on, let me explain.  Both sets represent partly the competitive landscape for front-end and back-end JavaScript projects.  React and Node are the clear incumbents, front-runners.  They have the most usage, largest, blah, blah, blah, most references, material, enough legacy code being written, both that Valor's busy maintaining them for decades.  In contrast, Solid and Dino are the challengers.  They have cheap, notable, and measurable gains over the previous paradigm, both in terms of UX due to performance wins and DX due to better tooling.
[05:03:53] are better enough to drive a migration away from reactor node they may be two to three times better  but 10x i don't know quick and bun aren't even on the playing field yet which is a certain extent  simply because they are still too early stage in a life cycle but more importantly they've been  off inventing brand new paradigms entirely from scratch instead of adopting incremental improvements  their benefits aren't marginal they're exponential but comes at a cost of even more painful migrations  and mental model shifts i think there's a handful of insights you can take away from this analogy  reactor node are still the safe bets that will be guaranteed for production apps and jobs at least
[05:04:23] No other project will have this kind of guarantee. The 2020s will be a decade like IBM and Microsoft.
[05:04:28] No one will be fired for choosing Reactor node. If you're hitting the pain points of Reactor node, you should look forward to marginal improvements of solid or Deno and find the shortest path towards getting them integrated into your stack. They're up and coming, but they're becoming ready for serious production use.  Three, it's unclear what impact Bun or Quick have or what kind of traction they will attain. They're the biggest risks to take right now, but if you generally care about problems they're solving, you know, performance, hydration, cold starts, they're already made their predecessors obsolete. If you come to the thread and say, what about my framework? I'm sorry, cause great pain and offense, adding projects ruined the analogy. I agree.
[05:04:58] Yeah.
[05:04:58] Okay.
[05:05:01] So...
[05:05:03] Generally speaking,
[05:05:05] I agree with the statement.
[05:05:07] think
[05:05:08] where I started kind of going off
[05:05:10] It was around here when we're talking about the 2x to 3x, but not even that.
[05:05:19] It's not clear where was it?
[05:05:23] Their benefits aren't marginal, they're exponential, but it comes at the cost of even more painful migrations and mental model shifts.
[05:05:29] And...
[05:05:30] are working heavily on ecosystem compatibility. I think they're helpful insights. Okay, cool.
[05:05:37] So,
[05:05:39] This...
[05:05:40] This is what I wanna talk about here for a moment is
[05:05:46] It...
[05:05:48] It's talking there's there's a statement here about where it says you
[05:05:53] They went off to invent new paradigms.
[05:05:56] instead of adopting incremental improvements.
[05:05:59] And that was the statement that I took the most offense to.
[05:06:04] Yeah
[05:06:04] Because...
[05:06:05] And I'll explain this. I think the analogy is right. And I think in the terms of progress and the outcomes and the analysis in terms of how that is actionable is the right analysis. But from my perspective, it's a little bit different.
[05:06:19] You have to remember that both
[05:06:22] Solid.
[05:06:24] And...
[05:06:25] Dino opted for
[05:06:28] not compat.
[05:06:33] Right?
[05:06:35] I just want to point this out here.  So I view this a little bit differently because...
[05:06:40] Dino thought they were going out to build something new that didn't work like Node or  MPM.  Like...
[05:06:47] They changed the
[05:06:48] the underlining building blocks
[05:06:51] to what they were doing.  You might say that they did it to do similar things,
[05:06:57] But they actually...
[05:06:59] went and they...
[05:07:01] They were like, no, no, we don't want to use NPM.  They weren't compatible with the existing ecosystem.
[05:07:09] Right?
[05:07:11] And
[05:07:12] Solid, similarly, it's funny, people keep on saying, oh, it's like React incremental.  Solid...
[05:07:16] Started from the ground up.
[05:07:18] not using React's model
[05:07:22] And also was not compatible.
[05:07:25] So...
[05:07:26] It wasn't that...
[05:07:30] These solutions were aiming for marginal and
[05:07:33] Improvements.
[05:07:35] What these solutions are aiming for
[05:07:37] was
[05:07:39] How should I put it? They were aiming for being able to provide a solution that could replace the existing solution.
[05:07:46] Holistically across the board.
[05:07:49] Where...
[05:07:50] At that point when they came into being, no one assumed that you could make a different solution.
[05:07:56] Like,
[05:07:57] Don't get me wrong, in the framework space there is more of that, there's felt and stuff.  But no one assumed that you could make something that looked or felt like React
[05:08:05] and do everything that reacted, but not do what reacted.
[05:08:08] And the same thing with Deno, that you could just walk away from Node stuff and that it would be viable to do not Node.
[05:08:17] So the priorities are different.  These frameworks like Solid or platforms like Dino
[05:08:23] tried to go, how can we cover the whole range of solutions?
[05:08:28] so that we could be a viable replacement with completely new architecture
[05:08:34] and underpinnings.
[05:08:35] What are the building blocks?
[05:08:40] Whereas
[05:08:43] If you look at maybe Bun or Quick,
[05:08:47] They didn't go that way.  They're like, how do I solve one more specific, narrow problem?
[05:08:52] problems
[05:08:54] and get
[05:08:55] incredible gains that because what they tend to do is they when you ask them about when you when you'd ask them about the wider solution, they'd be like, Oh, yeah, I'll just do what Dino does, or I'll just do what solid does.
[05:09:08] Do you know what I mean?  Like...
[05:09:12] And I don't know about Bunn.
[05:09:15] completely into in relation to Dino.
[05:09:18] But the way I'd put it this way is...
[05:09:21] that
[05:09:22] The Dino solid kind of tier...
[05:09:25] about changing the underpinnings. So it's like about... it's about... it's about...
[05:09:30] innovating by changing
[05:09:33] the
[05:09:34] the
[05:09:35] the core mechanism.
[05:09:37] Like in our case, reactivity.
[05:09:40] Whereas, say, quick and fun are about optimization.
[05:09:46] It's about taking that on particular vectors
[05:09:50] Very, very, very, very far.
[05:09:53] And then just kind of shrugging off the rest of the space because they've seen...
[05:09:58] What?
[05:09:59] Um...
[05:10:00] Solid or Dino has in this case done. It's kind of like it. It's kind of like assumed that
[05:10:06] that
[05:10:08] the rest will fall into place.  And I think that's the key...
[05:10:13] the key difference, right? Because you have the situation, and again, I can't speak completely for  Bunn versus Dino, but when you look at the way that the Dino team or Luca kind of reply to Jared  in that, Jared's always like pushing very specific benchmarks.
[05:10:26] And the Dino team's always like,
[05:10:29] Well, yeah, but what about the whole system? Like, what about the whole entity? It's great you made that one thing fast.
[05:10:35] And I guess in this analogy, I can relate to that, right? Because
[05:10:40] It's one of those things where like...
[05:10:41] Quick is really good at that one particular area, you know, for loading and page load and stuff.
[05:10:47] But if you look at the spectrum...
[05:10:50] of performance on JavaScript framework.  Solid is faster on like,
[05:10:55] 80%.
[05:10:56] Right? So it's like...
[05:10:58] It's kind of like one of those things where it's like...
[05:11:01] It...
[05:11:03] I think the...
[05:11:07] I think the comparison is apt actually when looking at it. And I think the result of how, like the reason you choose Dino or Solid in that traction,
[05:11:15] And the reason that it's like a 2X or 3X is because it's a 2X or 3X across the board instead of 10X and like one...
[05:11:22] one area or a couple areas that merit
[05:11:27] future potential.
[05:11:31] I guess that's the best way I could put it.
[05:11:35] Um,
[05:11:36] it's unclear if that 10x expands the whole range. And in fact,
[05:11:42] I would say if you asked anyone working on Dino or Solid, it most definitely doesn't.
[05:11:47] Right?
[05:11:48] So it's one of those kind of...
[05:11:52] interesting...
[05:11:53] tensions because
[05:11:56] I think someone showed me something called like an adoption curve.
[05:11:59] Um,
[05:12:00] And in terms of like,
[05:12:02] Like bleeding edge like
[05:12:04] early adopters...
[05:12:06] you know,
[05:12:07] Considerate people...
[05:12:09] behind the edge, you know, like behind that and like laggards or whatever.  And I think it's one of those things where like the focus is different as the  projects mature in terms of like,
[05:12:24] Where...
[05:12:26] where the winds are, I guess, right?
[05:12:34] Yeah, so I mean...
[05:12:36] So, yeah, the answer for a lot of people in New French, yeah, of course.  Right.  And that's the whole thing here, right?
[05:12:43] This isn't saying that any of these stages are...
[05:12:46] better or worse than the other.  The only reason I wanted to bring this up was because...
[05:12:52] So,
[05:12:53] Bye.
[05:12:54] I think
[05:12:56] I think the part about the incremental improvements
[05:13:00] is...
[05:13:03] is difficult to kind of
[05:13:07] Again, I don't know the Dino and Bun thing, but it's the reactivity of
[05:13:12] that enables Quick to do what it's doing.
[05:13:14] Do you know what I mean?  It's the work that goes into understanding...
[05:13:19] that the component model isn't the right way to break stuff up.
[05:13:23] that
[05:13:24] allows to optimize on a specific vector. But to get there, you first have to understand
[05:13:30] how
[05:13:31] Um,
[05:13:34] to get away from the current architecture.
[05:13:37] Hey.
[05:13:38] Okay.
[05:13:40] I don't know. I guess I said my piece on that.
[05:13:42] There are too many JS learners.  Exactly.  That's the problem.  I'm having this debate here,  and people in chat are just like,
[05:13:47] What the... All I noticed is you just named six different projects.
[05:13:55] I
[05:13:56] Thank you.
[05:14:01] *laughs*
[05:14:04] Right?
[05:14:05] Um...
[05:14:07] So, yeah, as I said, I stand by the first statement.
[05:14:14] And I stand by the last statement in terms of like,
[05:14:17] like the results of this like like
[05:14:22] If you're hitting pain points, this is when you should do it.  If it's unclear, you know, that part, it was just, I think the reason for why is that
[05:14:30] And maybe this is always what happens in these patterns,
[05:14:33] It takes...
[05:14:36] It takes basically understanding that there can be an alternative before you can
[05:14:40] basically take your mind off to optimize on very specific things.
[05:14:48] I am, yes, I am aware of it, and I've showed it to a few people.  I think it's a great starting point to compare syntax.  I think it's a little bit...
[05:14:56] Svelte-centric is my best way to put it.
[05:14:59] Because it doesn't include any of the stuff that's...
[05:15:02] Svelte doesn't do, but you can do in React,
[05:15:06] component composition and a few other things, but I think in general is very useful website.
[05:15:17] The problem is...
[05:15:20] HTML syntax is fine. People have made SFC file stuff. It's more of this JSX is kind of
[05:15:28] useful and powerful and it's established syntax I don't have to worry about. Like all the tooling exists, TypeScript, everything works.
[05:15:34] Um,
[05:15:36] um
[05:15:38] But like tag template literals, for example, aren't particularly good. Anything that has runtime
[05:15:42] I don't think it's a good choice because you then have to do all the reactive wrapping yourself and that's clunky.
[05:15:49] So definitely like a compiled
[05:15:52] template.
[05:15:53] type of thing.
[05:15:54] If you go with template language, it should be compiled.
[05:16:00] Yeah, exactly. That's why that silly bun conversation with the punting is so important. It's just a thermometer about can we change how JSX works. Do you know what I want for JSX?
[05:16:13] I'm sorry, sub-rat, but...
[05:16:15] Almost all the stuff they suggest for JSX 2.0 is actually really interesting.  One of the most interesting ones for me is the potential of using do statements in expressions  and basically having it implicitly do statements.  If they do that...
[05:16:30] This is incredibly powerful because it means that you can use for loops in JSX and if statements, but most importantly, for loops. And if you can use for loops in JSX, that means you have a language feature that is analyzable.
[05:16:45] In the same way that we analyze turnararies...
[05:16:47] We can analyze for loops.  Like I can't analyze a map statement.
[05:16:51] Like a map statement is just a function.  You can't compile it.  But with a for loop, you can analyze it.  And I mean, I'm not saying I necessarily go this way,  because I do kind of like the ergonomic look,  but if it worked fine, you wouldn't need show or for components
[05:17:05] if they had that, because we could actually analyze it from a compiler standpoint.
[05:17:09] Yeah, I...
[05:17:12] It's interesting.
[05:17:16] All right, um...
[05:17:18] we got one last one before we go.  Um,
[05:17:24] And this is the reason I was late for the stream, so we're going to end the same way we started.
[05:17:28] Thank you.
[05:17:29] Long time ago.
[05:17:30] I built
[05:17:32] A really simple...
[05:17:33] Rapper to show how you put reacting to
[05:17:36] in Solid and Solid and React.
[05:17:38] - Thank you.
[05:17:39] And...
[05:17:40] As usual, I just didn't think of anything on it.
[05:17:43] It's funny, people usually make...
[05:17:45] big
[05:17:47] deals out of you know like these kind of things but like honestly i didn't really care about  adoption at all i didn't really care if anyone used solid and i didn't care you know i like what you know
[05:18:00] It seemed like cool, but I'm like, are you really going to do this in your React app?
[05:18:04] But someone convinced me that I should look at it again.  And I was like, "Okay, sure."  And I'm like, "Yeah, but compiling JSX in the same project."  Well, that's what I was working on.  I managed to get two different JSXs compiling  in the same project, and I managed to make it so that
[05:18:20] In a simple, simple, simple app,
[05:18:21] I have a React app.
[05:18:23] You state:
[05:18:24] You know, and this is interval, so you can just change the interval. Right now it's at one second, so it's 1,000 milliseconds.
[05:18:31] I have a counter component where I pass that interval to.  And then as children...
[05:18:35] I put in some buttons...
[05:18:37] that update. But the fact that children doesn't really matter, or the fact that children is important, but the fact that what I put in here doesn't really matter.
[05:18:47] Let's just, like, this is not a real case. You'd never pass buttons to a counter child. I just did this for sake.  What's interesting about this example is this looks like a normal React app, and if I speed up, the counter gets faster, and if I slow down, it gets slower. Well, way too slow.
[05:19:02] Did I? Yeah, okay, let's speed it up a little bit again. And it just kind of works.
[05:19:06] And
[05:19:08] But the fun thing about this example, obviously, is--
[05:19:11] that while this is a React app,
[05:19:14] doing this kind of stuff. This counter
[05:19:17] Looks...
[05:19:18] Uniquely different.
[05:19:20] What's this create signal garbage?
[05:19:23] so i'm gonna zoom out a little bit i've seen them too much
[05:19:27] um
[05:19:28] - Thank you.
[05:19:30] This is...
[05:19:31] It's getting some props in, which is an interval.
[05:19:34] that either defaults to 1000 or sets the interval, and then
[05:19:39] There's a crate effect and a cleanup, and then...
[05:19:42] It inserting props children and it's displaying the count.
[05:19:46] Um
[05:19:48] We could do something here, maybe.  Maybe we should put this in a separate...
[05:19:53] div or something.
[05:19:54] Um...
[05:19:56] Give it...
[05:19:57] I don't know.
[05:19:58] Should we put this in a div too? I don't know.
[05:20:02] I guess none of this actually...
[05:20:04] changes anything.  Sorry, that part doesn't matter. But what I'm getting at is like this is a solid component compiled into solid and
[05:20:13] where we're passing in props and JSX children.
[05:20:17] And...
[05:20:18] what you end up with is a working
[05:20:21] working solid inside of React.
[05:20:25] How I did this? Really simple, actually.
[05:20:29] I just made this wrapper which I called Reactify after my original Reactify.
[05:20:34] thing and
[05:20:36] All it does,
[05:20:37] is use as memo to create a store, like a solid store.
[05:20:40] And then...
[05:20:42] Every time it renders, it sets the props of
[05:20:45] It sets the store.
[05:20:47] with the most recent props and it has to do one smart thing.  It has to go through all the props and it looks for anything that contains a virtual DOM node.
[05:20:55] Like this VDOM node
[05:20:57] And I identify it using this. This is not the best thing, but just
[05:21:01] You get the idea.  And if it finds a VDOM node, it creates a portal against an arbitrary element.
[05:21:09] And then...
[05:21:10] It...
[05:21:11] ends up
[05:21:12] passing that element, which is a DOM element,
[05:21:15] as the prop.
[05:21:17] So that's what becomes the prop, becomes the DOM element.
[05:21:20] And then...
[05:21:21] The portals are made as children of this element that we use as a ref.
[05:21:26] so that React stays stable.  So React basically renders
[05:21:30] solid inside the span.
[05:21:33] It could be a div or something, I was just playing around.  And essentially renders all the portals that it needs for any children.  It doesn't have to be children. We could pass JSX as a prop if we wanted to into here.  It doesn't really matter.
[05:21:48] That way for any JSX prop, it'll create a portal  where it's red and solid.
[05:21:54] And
[05:21:55] Essentially, what's cool about this is from the solid component thing, other than the portal wrapper, which you need for event delegation, unfortunately, but other than that DOM wrapper for the thing, the authoring experience for solid.
[05:22:07] is...
[05:22:08] Identical you don't actually because it's all knows how to deal with dom elements. I
[05:22:12] It doesn't, like there's no extra wrapper here.  This is normal solid,
[05:22:16] authoring. This is normal React authoring, and you have a solid component working in React.
[05:22:23] - Yeah.
[05:22:24] Yeah, and I did solidify.
[05:22:28] for the opposite direction originally.  Solidify is making a React component solid.
[05:22:33] That's where I got the name from. I originally did Solidify
[05:22:38] Because I was thinking, oh, maybe we could put React components inside Solid.  And then I was like, after a while, I was like, I don't know if I want React components inside Solid.  Like...
[05:22:47] Kind of like
[05:22:49] like
[05:22:49] But I know a lot of people who want to try
[05:22:54] Try Sol and Side React.  So it's like Portal Islands...
[05:22:58] The portal islands of Solid inside React, kind of, but what happens is Solid is just rendered into a DOM node in React.  But then we have to portal the React children into, like the JSX, into the Solid.  So this is how we get transclusion.
[05:23:16] These are React VDOM nodes, these buttons, but they're getting rendered inside
[05:23:21] props.children inside solid. This is how we do that.
[05:23:25] essentially.
[05:23:27] Um...
[05:23:28] yeah, so I just wanted to kind of
[05:23:31] show that off a little bit because
[05:23:33] Um,
[05:23:34] Thank you.
[05:23:35] Why is it forking it? Oh, I'm not signed in. Whatever, it doesn't matter.
[05:23:39] This is cool. I think that
[05:23:41] Yeah.
[05:23:41] that
[05:23:42] We build this a bit up into a library or something.  And, you know, this could, the hardest part about this is just making the right, you know,
[05:23:51] um vt config and i feel like i could package this in a way that it's universal enough because all  solid packages have a solid export that exports gsx generally and then we can basically use that  as an identifier plus if you put your solid code that's in your app inside a folder the combination  of those two will let us uh
[05:24:09] basically
[05:24:11] know how to process the solid components before sending them to React.
[05:24:15] What about SSR?
[05:24:17] Yeah, this does not solve SSR.  So SSR would be incredibly more complicated.
[05:24:25] But,
[05:24:26] I know there's a whole ton of React apps that are not SSR.  And we can make this kind of work seamlessly with SSR from the sense that we can make it so that it works kind of like client-only components.  So essentially it does an SSR but then wakes up the client kind of like web components.  Yeah.
[05:24:45] So...
[05:24:45] Yeah.
[05:24:47] Yeah, I mean, people could do micro frontends.
[05:24:50] But people can do micro frontends already and that's not enough.  Micro frontends suck.  Like you don't want to do micro frontends.  No one wants micro frontends.  Not a good thing.
[05:24:58] Sometimes you need micro frontends, but they're not something you want.
[05:25:02] Um...
[05:25:06] Yeah, I think if you have both sides you could. Honestly,
[05:25:10] I think if you're on a migration path,  you want Reactify more than you want Solidify or whatever.  Because the problem with Solidify is...
[05:25:20] You don't want to start, if possible, I...
[05:25:24] I understand if you wrote your design system in React...
[05:25:28] Um,
[05:25:30] It's kind of hard and then you want to use it in a solid,  but I think that's where things start getting a lot more...
[05:25:35] Messy
[05:25:37] Especially because of expectations on context and stuff right now these solid islands are
[05:25:41] islands, essentially. And if you wanted to string together the context connectivity between this all and the React app, it's a little bit trickier. Right now, this is clear separation. This is basically letting you
[05:25:53] essentially go, I want to rewrite...
[05:25:55] portion of my app. I think the cool thing about Solid is it's small, so it's like adding Solid  to your React app is like a few kilobytes, you know, so it's like not a huge hit. I mean,  if you're already using something much larger with React, it's like smaller than React router.
[05:26:12] But yeah, I think it starts getting... Yeah, we'll probably do both, but I do think...
[05:26:19] There's some consideration there.
[05:26:23] Thank you.
[05:26:24] Just use Astro for SSR.  Yeah.
[05:26:26] But I know some people will find this interesting.
[05:26:31] Thank you.
[05:26:35] Yeah, I mean...
[05:26:37] it
[05:26:39] *sigh*
[05:26:40] Yes, I mean, the thing is...
[05:26:42] No one...
[05:26:44] Other than the docs that we provided so far and the GitHub issues, which talk about decisions, and the Discord discussion, there hasn't been enough guides on it.
[05:26:55] um there's been a few i think i think i i gotta pull it up there's been a few good intros i think uh
[05:27:02] AJ, who is with us in the chat, wrote a good SolidStart introduction article. But if you really want to dig into it, everything's new. It's only the work that a couple people... We need better docs probably before we even get better guides. You're not going to find a ton of content yet.
[05:27:25] Please don't create Nextify.
[05:27:28] I mean, that would be maybe like an SSR version.
[05:27:37] Yes, thank you, AJ, for linking your article.  Yeah, this is...  This is...
[05:27:42] Yeah.
[05:27:47] Oh, I missed this one. Thank you, Maple. No, there's places where micro-frontends make sense, but even then, like...
[05:27:57] fight them, you know, as long as you can.
[05:28:01] Yeah.
[05:28:02] I
[05:28:03] Oh, we...
[05:28:04] .
[05:28:10] Anyway, how's everyone doing? I got a cut stream now. It's been a...
[05:28:16] It's been a good week.
[05:28:19] Everyone enjoyed what we talked about. I'm looking forward to the this this new year. I
[05:28:23] Um, but I'm hungry and I need to eat some pizza.  So, uh,
[05:28:28] Yeah, I'm out of here. Have a great weekend, everyone, and see you next week when we talk about LiveViewJS.
[05:28:35] See ya.