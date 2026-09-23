---
title: "Did AI Write This Summary? w/ Anthony Campolo"
slug: "2025-07-25-did-ai-write-this-summary-w-anthony-campolo"
duration: "4:27:39"
channel: "Ryan Carniato"
url: "https://www.youtube.com/watch?v=n0Xo_UU_iDY"
publishDate: "2025-07-25"
thumbnail: "https://i.ytimg.com/vi/n0Xo_UU_iDY/maxresdefault.jpg"
channelURL: "https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw"
description: "Today I'm going to step back and talk about a bit about what goes into creating these livestreams and educational content in general. Anthony Campolo joins us again, this time to talk about his work on AI summaries, RyanGPT, a chat bot that contains my expertise, and more."
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
[00:00:02] [1] All right, everyone, welcome to my stream today. How are you all doing? Come say hi in the chat.
[00:00:09] [1] Today we're doing something we haven't done in a while: we're going to have a guest on our stream.
[00:00:14] [1] Anthony Cappolo is joining us today. He's been on the stream before to talk about Redwood, the React Does-Everything framework, but today he's going to talk to me about some stuff that is closer to home.
[00:00:31] [1] Basically, as you guys know,
[00:00:34] [1] doing content takes a lot of time, and it takes time away from doing development.
[00:00:41] [1] Streams have been relatively easy, because I can just kind of press record and just go with it, and then I kind of talk about things.
[00:00:49] [1] And through teaching people, I end up learning stuff myself, and sometimes, you know, get great feedback from the chat and actually all lends to actually doing my research.
[00:00:58] [1] But then, at the end of the day, we want to get more value out of these streams.
[00:01:01] [1] And
[00:01:03] [1] I've, over the years, I've had amazing people like Jesse Pence, literally week after week doing the timestamps.
[00:01:10] [1] I used to do them myself. Once I realized we had that feature, it, well, it's not quite like super indexable.
[00:01:15] [1] At least, like, people could find key moments from the stream again and reference it, right?
[00:01:21] [1] Recently I've been doing shorter videos, which are really much more to the point, but sometimes the content on the stream doesn't really edit down very well.
[00:01:28] [1] But
[00:01:30] [1] there's still a lot of really important insights that we gain for it. S
[00:01:37] [1] o, anyways, I was, I've been stuck on this for a little while because I just really don't have time to do the timestamps.
[00:01:43] [1] And
[00:01:45] [1] Anthony showed up and started dropping these timestamps on me that were a little different than Jesse's.
[00:01:50] [1] So, you know, they were actually AI-generated, and I don't know, I realized I know absolutely nothing about this topic.
[00:02:01] [1] Like, almost zero. So I was like, okay, well, I maybe if there's something interesting for me.
[00:02:06] [1] Again, this is me using the stream to learn about stuff so that I can save myself time.
[00:02:11] [1] I could have just got on the call with Anthony and he would have shown me everything.
[00:02:14] [1] But maybe this will benefit some of you.
[00:02:22] [1] Is Mark, see,
[00:02:24] [1] I mentioned a couple weeks ago the Marco guys were like, hey, we should, you know, do something soon.
[00:02:28] [1] But
[00:02:30] [1] they didn't tell me that the, about, like, the release date. I guess they're on beta track and now that they have a demo site for it.
[00:02:41] [1] Warcraft 6 is the GTA of JavaScript, yeah. GTA 6, sorry, yeah. But hey, I mean, they're on version 6, right?
[00:02:49] [1] At this point, I got to, you know, it's worth the call that Solid Stone on version 1.
[00:02:54] [1] We haven't even got 2. So, I mean, they have 6 versions, you know, in what, 11 years?
[00:03:03] [1] Maybe 12 years? I have 1 version in like 7 years. So I think they're actually winning on that.
[00:03:12] [1] So I guess 2 versions if you count version 0, but yeah. S
[00:03:18] [1] o, yeah.
[00:03:21] [1] Hey, Johnny. All right. Well, it looks like people are starting to show up
[00:03:26] [1] .
[00:03:30] [1] S
[00:03:32] [1] o, yeah, just catching all the highs in here while we get this thing going.
[00:03:40] [1] We should get started here in a moment, shouldn't we? Just a second. Let me get Twitch going in the background so I'm good to go.
[00:03:47] [1] And maybe I should post on
[00:03:51] [1] a blue sky that the stream is starting because they don't get the live stream directly in the UI there.
[00:03:58] [1] Give me a second. And then I will invite our guest here. Just a second
[00:04:06] [1] . Yeah, we're good on Twitch. Good.
[00:04:12] [1] I usually do this long pre-roll to get more people in on Twitch, but it looks like all the viewers are on YouTube or on X right now.
[00:04:18] [1] S
[00:04:20] [1] o, all good. Let's see here. Just a second.
[00:04:29] [1] I'm just going to quickly
[00:04:32] [1] .
[00:04:41] [1] Yeah, here we are.
[00:04:49] [1] Sorry. Just getting going.
[00:04:53] [1] Twitch TV slash Ryan Solid.
[00:04:58] [1] All right. All right, all right, all right. Let's get going.
[00:05:06] [1] All right.
[00:05:08] [1] One last thing.
[00:05:14] [1] All right. Anthony, I hope you're ready.
[00:05:19] [1] Because
[00:05:23] [1] let's welcome Anthony back to the stream. How are you doing?
[00:05:28] [2] What's up, man?
[00:05:30] [1] How are you doing?
[00:05:31] [2] Doing super great. I just got off a week-long glamping trip. I don't know if you've heard of this.
[00:05:37] [2] It's when you camp, but they just give you like a giant tent with a bathroom in it and they deliver things to you.
[00:05:43] [2] It's very nice. But yeah, I was up in Michigan. I went to the Great Lakes for the first time.
[00:05:47] [2] I don't know if you've ever been there.
[00:05:51] [1] Not on the Michigan side, but on the Ontario side. I have been, yeah, Canadian here.
[00:05:56] [1] And
[00:05:58] [1] my parents are from Ontario, so.
[00:06:02] [2] Okay. Cool. How are you like in Portland so far?
[00:06:06] [1] It's been warmer than I expected. I was actually looking at the temperature and it was like warmer here than in San Jose, like the last month, which is crazy.
[00:06:14] [1] But it's very green here, which is nice. I miss the green. I miss the trees and the, and yeah, it just, it feels more like home, home, like which, yeah, Vancouver.
[00:06:26] [2] And remind me, how long were you living in San Jose for?
[00:06:28] [1] Five years.
[00:06:30] [2] Five years. Okay, cool. Yeah, because I was born in San Jose, actually, and then lived in the Bay Area until I was 30 and visited
[00:06:38] [2] a couple places in Oregon. Eugene also. I spent some time there. So, yeah, so I'm familiar with all those places and yeah, it's a good spot for sure.
[00:06:47] [1] Yeah, yeah. No, I, yeah, it's interesting. I guess it's slightly more inland than I've ever lived.
[00:06:55] [1] I, like Vancouver, even though it's behind Vancouver Island, it's kind of right on the water.
[00:07:00] [1] San Jose is like on the bay. It's like a little farther in Portland. We're actually like an hour and a bit from the coast, so.
[00:07:08] [2] Yeah, that's the same, similar for me, except now I'm in the Midwest. I'm in St.
[00:07:12] [2] Louis, you know. This is the first time I've ever been more than a half hour away from the ocean.
[00:07:16] [1] Yeah. So, yeah, but I mean, generally seems really nice. Really happy with the house.
[00:07:22] [1] Got everything set up the way I like it, as you can tell by the background here.
[00:07:26] [2] Yeah, no, I love the guitars he got up.
[00:07:28] [1] So, yeah, no, I'm having a good time. But what I have been missing the last few weeks is
[00:07:38] [1] timestamps. Someone was on actually asking me on Blue Sky, and they're like, Ryan, for the life of me, I can't find this clip where you were talking about something.
[00:07:47] [1] And I started looking through the videos and I realized that I've been lazy. I haven't been doing timestamps for a while.
[00:07:56] [2] When did Jesse fall off on that? Do you know?
[00:07:58] [1] Around Christmas break, around maybe like January. And the truth of the matter is when I used to do it, it took me forever because I would watch the
[00:08:10] [1] streams again to do it.
[00:08:12] [2] Yeah, you have to watch multiple times usually to actually do it, yeah.
[00:08:15] [1] To get the actual amount of detail. It meant like I'd stream for five hours and it would take, even if I tried to speed things up or kind of, I'd miss things that have to jump back or try and like skip over stuff.
[00:08:25] [1] It still took me about three hours to do the timestamps. Like it was over half the time again to do it.
[00:08:31] [1] I guess it's a little bit, because the problem is when you watch it, you kind of go, okay, I think this is a topic.
[00:08:36] [1] And then you realize that you get interrupted by someone and then you like, it's not the topic and then something else is the topic.
[00:08:41] [1] And then you have to readjust it and then you go back. Like it's not just a linear process always to get like the most accurate one.
[00:08:47] [2] As you're describing this, you're being a perfectionist about this. For some people who listen to it, they'll be like, what do I talk about for this half hour?
[00:08:53] [2] Like write a broad kind of outlet. But you're actually trying to get highly specific demarcations at the exact right time with the exact right title for the timestamp.
[00:09:01] [1] Yeah. Which, yeah, I mean, because then I can reference it, right? Because if I'm going to do the work, you know, it seemed like it was such a small addition initially to just add timestamps because I'd have something that
[00:09:10] [1] was like permanently indexable. But in a sense, it's not. Now that I have so many videos, it's actually not as indexable.
[00:09:16] [1] But at least it's still like, it's something. I mean, I think it's helpful, at least when like I go, oh yeah, I talked about this sort of topic for a while back then.
[00:09:29] [1] Like sometimes there'll be like a linked like playground or something. Like I'll know when I, like when someone asks that question, what I usually actually do is go, I know what example they're talking about.
[00:09:39] [1] I look up it in Discord, see when I originally posted in Discord. Because for those who don't know, yes, the stream is great.
[00:09:46] [1] I talk about stuff. The next channel on the Solid JS Discord is like the stream in real time.
[00:09:51] [1] Like all the time, it's not a video, but like every day I'm like posting what I discover.
[00:09:56] [1] I post new hack MDs. I started publishing even more of them. I think I've got like 60 or something.
[00:10:00] [1] I write like two or three hack MDs a week as I like do my research. So like usually the time on Discord's fine.
[00:10:10] [1] And then I go to the nearest stream after that and then search through the stream.
[00:10:15] [2] Somewhere in that headspace you were in, yeah.
[00:10:17] [1] And then search through that stream to find the topic that I'm looking for. Obviously, this is not a process that most people can do, but for me, it's at least enough.
[00:10:23] [1] Because if I was to make videos out of all the content that I did, or even trying, like first of all, editing down the stream doesn't really work.
[00:10:29] [1] Because like, I mean, I did that for one video. I did that for like the tier list.
[00:10:33] [1] And it took me hours to edit it to get it down.
[00:10:37] [2] Longer than if you just tried to make the video.
[00:10:39] [1] The first place. Yeah. Yeah, because I'm kind of terrible. So, yeah.
[00:10:44] [2] Which is a fluency thing. People who are, you know, lifelong video editors obviously could do that, but you're, that's not, you're a musician, you're a programmer, you're not a video editor, you know?
[00:10:55] [2] Yeah, but, so I'm super glad you brought this topic to me. This conversation is a very long time in the making.
[00:11:00] [2] So I've been seeding this and trying to get you interested in this and what the work I've been doing on it.
[00:11:05] [2] So this specific question, how do you generate timestamps, has led me on the last year and a half development mission I've been on.
[00:11:13] [2] I've built at this point like three or four open source projects and entire now paid app that I'm going to try and build a company around.
[00:11:20] [2] Entirely built that first started on this question. How do we get the timestamps?
[00:11:25] [2] It's spun out to all these things from here.
[00:11:27] [1] Yeah, how did you get there? I guess you were.
[00:11:30] [2] FSJM.
[00:11:31] [1] Yeah, yeah, exactly. For like the.
[00:11:32] [2] How do I get timestamps for FSJM? It was the exact same question. And that's an hour-long podcast.
[00:11:37] [2] So that's a lot actually simpler that I could have done myself if I really wanted to just suck it up.
[00:11:41] [2] But for like a five-hour stream, that's a whole different thing. So as I've been going on this journey, your stream is what I actually use as a test case to try and battle test this tool.
[00:11:50] [2] And in the process, I have transcribed and created broad chapter outlines for every stream you've ever done.
[00:11:57] [2] Every stream you've ever done. It's already generated in a GitHub repo right now.
[00:12:01] [2] And yeah, so we'll get into all that in a bit, but I want to kind of talk about this history here.
[00:12:06] [2] Because as I said, this is like a problem that now I've gotten so deep into and I have so many things to say.
[00:12:11] [2] And like I'm just very glad to have someone to talk about this with, first of all.
[00:12:15] [2] And for people who don't know me, I'm Anthony Campolo. You can watch my Redwood stream if you want to know kind of my background and stuff.
[00:12:21] [2] But mostly a DevRel person, create a lot of content, do a lot of tutorial live stream type videos.
[00:12:28] [2] You know, somewhat similar to Ryan, so obviously not even close to the level of complexity and length and depth.
[00:12:35] [2] But it's just a stream that I really, really admire. So I'm always super honored to be here, first of all.
[00:12:42] [2] And yeah, so I wanted, I have a podcast. I had a podcast, kind of defunct now, called FSJM that, yeah, maybe Dev, we can talk a little bit about Redwood SDK.
[00:12:53] [2] Not a tongue, because I'm not really the person to talk about it. But I had this podcast where I bring on people like Ryan.
[00:12:59] [2] He was on the show and we would, you know, have an hour to hour and a half long usually conversation about, you know, just web dev topics.
[00:13:06] [2] So I had every single framework was featured on the show at one point or another.
[00:13:11] [2] And I also am in a similar boat to Ryan where I, you know, do this just for the love of the game, for the passion.
[00:13:17] [2] And, you know, it's not for money. It doesn't monetize at all. And it's hard to kind of put the time in to really make them as high quality as you would like to make them in terms of assets, post, pre-production, everyth
[00:13:28] [2] ing. And so at a certain point, I kind of, as, you know, things like ChatGPT came out and I started playing around more with like AI stuff.
[00:13:36] [2] And I know you have not been doing that so much, Ryan. And this is definitely not going to be a stream where I'm going to try and like convert everyone to like AI.
[00:13:42] [2] We're not even going to talk about like AI coding. This is really completely separate topic.
[00:13:46] [2] Because this is about how content creators can use AI. Because ChatGPT is good at working with text, like along with code, you know?
[00:13:55] [2] So I, the first insight I had was you just have to first turn the video into text, you know?
[00:14:01] [2] So you have to run it through transcription. And then if you have the transcription and the transcription is attached to timestamps, then in theory, I was like the LLM could be able to read it, summarize it, chunk it, and
[00:14:12] [2] come up with some sort of chapters that may be broadly accurate, even if they're not necessarily written quite the way you want them to be.
[00:14:20] [2] And even if they don't necessarily align perfectly with the right timestamps, I just had this intuition that this is a problem it would be able to solve and that it had the capacity to do.
[00:14:29] [2] It does, but it's very, very challenging actually. And there's like so many things that go on to it.
[00:14:35] [2] And
[00:14:37] [2] that's funny, Dev saying you don't have a podcast. You have many podcasts. Technically, FSJM is my only podcast.
[00:14:41] [2] I also have a stream, I would say, called AJC and the Web Devs. But yeah, he is kind of right.
[00:14:47] [2] So yeah, I'll pause here in a second, but just to finish the thought. So I eventually got to the point where I was transcribing my content with Whisper CPP, handwriting a prompt that would explain what I wanted it to gener
[00:15:01] [2] ate for me, and then pasting that into just straight into the chat box on ChatGPT.
[00:15:07] [2] Like just go right on the website, you just plop it in, you have the prompt, you have the transcript.
[00:15:11] [2] And then that would then write me the chapters. And from there, I, you know, have tried dozens, if not hundreds of different models to do this with different ways of writing the prompt, different ways of kind of phrasing
[00:15:23] [2] it, giving it an example, writing the example in different ways. There's like so many different ways to tweak this, so many different variables that go into it.
[00:15:30] [2] And the outputs are incredibly all over the place and so many respects, both in how accurate they are in terms of the time groupings and how well they actually describe the content in it.
[00:15:40] [2] But I found that if you do it right, you actually can get super useful stuff. It won't be something that you might want to just copy-paste into your thing.
[00:15:47] [2] Again, that's what I was doing when I was putting them in the comments for your last couple of videos.
[00:15:51] [2] So those are not going to be quite up to snuff. They're going to be like 90% of the way there.
[00:15:55] [2] So the idea is it gives you a framework. So you're like, okay, I have all these ideas.
[00:16:00] [2] It kind of chunks the main sections. I can now watch the video and just kind of scroll to the beginning and endings of these chapter headings, see if it's really lining up with the content and kind of go from there.
[00:16:10] [2] So there's the huge blurb.
[00:16:13] [1] Right. Yeah, I mean,
[00:16:16] [1] yeah, I mean, I don't know almost anything about this. I just, I imagine that I do a lot of talking over the course of five hours.
[00:16:23] [1] Like are the transcript files like huge? Are they like.
[00:16:26] [2] There's multiple books, there's multiple books worth of text within the repo at this point.
[00:16:31] [2] Like more than thousands of pages.
[00:16:35] [2] It's wild.
[00:16:38] [1] And I guess what's interesting with the transcripts is do they, are they like, I haven't even looked at them.
[00:16:43] [1] Are these the ones that just come straight off YouTube or like, because they do something to auto gen from there or?
[00:16:48] [2] So that's where, so you can, you can grab the transcriptions right off YouTube if you want to do that really quickly.
[00:16:53] [2] If you want to get higher quality transcriptions, you can use, I think Whisper CPP's transcriptions are slightly better.
[00:17:01] [2] They're probably fairly comparable, honestly though. If you really want a super duper good transcript, and especially if you want speaker titles, like if you have a guest on like me and you want to separate between the tw
[00:17:10] [2] o, then you can use something like Assembly or Deepgram, which you have an API, you pay like, you know, a certain amount of cents per minute or whatever.
[00:17:19] [2] And so I've built tools that do all these now. Like I have an open source version you can use with Whisper.
[00:17:24] [2] I have a paid version you can use with Deepgram. So it's kind of, it's a whole spread of different things.
[00:17:28] [2] This question of do you actually need the transcript afterwards? Like is that important to you?
[00:17:32] [2] Are you using it just as a step to leverage the final AI output, which would give you like the chapter timestamps?
[00:17:39] [2] Because then you can kind of throw the transcript away at the end. And if it's like 99% correct, the LLM isn't going to be as worried about small word errors or extra like filler words and stuff like that.
[00:17:52] [2] It doesn't care about that stuff. Because it just kind of takes the whole text in and finds large chunks.
[00:17:57] [2] So you can go with lower quality transcription if you don't really need the transcript in the end.
[00:18:01] [1] Yeah, I was going to ask you that if it, like how it identified different speakers like on guest streams and stuff.
[00:18:07] [1] That's interesting. Okay, so it is something that it does do. Because you, I will get to that later, but you made a Ryan GPT, which I was like, is this the opinions of everyone who's ever been on my stream or is it my op
[00:18:20] [1] inions? So like.
[00:18:23] [2] Yeah, so that's such a good question. This is a really interesting facet of it.
[00:18:27] [2] I found that even if you do not include speaker labels, if you just give it a raw line of text, it is able to figure out most of the time.
[00:18:38] [2] And the better models obviously are able to figure out most of the time that there are multiple speakers talking to each other.
[00:18:44] [2] Because they're able to tell from the context of the text that like we're using each other's names.
[00:18:48] [2] Like just within this first 18 minutes, I introduced myself. I said my name is Anthony Campolo.
[00:18:53] [2] You introduced me. You talked about me. It's through, anyone could read the text.
[00:18:58] [2] And even if it was a straight line, any person could read that and figure out what's happening.
[00:19:01] [2] They could figure out there's two people there. So an LLM can do that as well. Giving it the speaker labels just makes it that much easier.
[00:19:10] [2] And lower, cheaper models can work better with that. So it's kind of this question of how much context do you need to give the certain LLM to have it figure out the thing it needs to figure out to generate the output at
[00:19:20] [2] the end. And there's a wide range of quality of models and price of models. So if you always go with kind of the best one, I find that giving it just the raw Whisper CPP output, which is the single line of text, is basic
[00:19:33] [2] ally good enough for it to figure out what's going on within the conversation.
[00:19:37] [1] Okay, yeah, I admit I never looked at these services at all. So I have no clue.
[00:19:43] [1] Like when you said Whisper CPP, I'm like, is that a C plus file? Like.
[00:19:47] [2] Yeah, let me explain that then. Okay, so this is great. Whisper was, is an open source transcription model that OpenAI released, which is funny.
[00:19:56] [2] OpenAI is now known for having no open source work whatsoever. They've been teasing an open source model for like six months now.
[00:20:02] [2] That's nowhere to be seen at this point. They will eventually put it out, I'm assuming.
[00:20:06] [2] But like three years ago, they created this transcription model, which is incredible.
[00:20:10] [2] Like for an open source transcription model, it completely blew. It decimated the entire open source transcription field.
[00:20:17] [2] It was the only thing that mattered. So that opened up a huge space. It was a Python tool, though, that was incredibly slow.
[00:20:25] [2] So someone then rewrote it in C plus plus. So that's Whisper CPP. It's the C plus plus version of the Python thing.
[00:20:32] [2] And then also now OpenAI hosts Whisper and they have a Whisper API endpoint. So you can send texture to their endpoint.
[00:20:39] [2] You can pay them to use their Whisper model. And then other transcription services host Whisper as well, since it's an open source model.
[00:20:46] [1] Okay, okay, yeah. So it is a C plus plus reference. It was just funny because I was like, I was like thinking of file extension and I'm like, am I downloading a C plus plus file like just .
[00:20:55] [1] cpp? Like.
[00:20:56] [2] If you use the auto show CLI, then you do have to, and you want to use it with Whisper CPP, then you will actually have to build a C plus plus kind of thing in your project.
[00:21:08] [2] But there's a kind of a setup script you can't do all that for you.
[00:21:11] [1] Okay, yeah. So people still use C plus plus. That's good to know.
[00:21:16] [2] It's faster in Python.
[00:21:17] [1] Yeah.
[00:21:18] [2] As far as I know.
[00:21:20] [1] That's interesting.
[00:21:23] [1] No, I've heard that they've actually improved a ton over the years. Last time I looked actually was when I think version 14 came out and it's like crazy the type of stuff they incorporate a lot of stuff that like was in
[00:21:35] [1] C sharp and stuff. Anyways, I'm not here to talk about backend languages. I just, it was just something that is kind of, I was like, what?
[00:21:41] [1] Okay, so, all right.
[00:21:43] [2] Yeah, and part of that is because the transcription process is very slow. And running your transcripts through Whisper CBP on the largest model, even the C plus plus version, takes like an hour and a half.
[00:21:53] [2] So that is nothing to keep in mind. There's the trade off and time factor when you're going with an open source one versus a paid one.
[00:21:59] [1] Okay, yeah.
[00:22:00] [2] That's something that for you, if you did a stream, you could just kick it off right after your stream's done, come back like an hour and a half, and then you'll like kind of have it generate.
[00:22:07] [2] It'll be that type of thing, like a background thing that would run for a while and then eventually deliver it to you.
[00:22:11] [2] If you want to use one of the paid services with their APIs, then you can get something like that within like, you know, a couple minutes, like a reasonable amount of time.
[00:22:20] [1] Okay, okay, okay. So just understanding the pieces, the first piece of the puzzle here is getting the transcript and.
[00:22:26] [2] Exactly, yeah. And that's a pretty big part. Although I should try to test out just pulling your YouTube transcriptions and kind of compare them, because that would simplify the thing quite a lot.
[00:22:37] [2] But this is all stuff that is not really super duper important to the final output.
[00:22:43] [2] And then what Dev is saying here makes sense. You have either expressive transcription, so a high quality, really well written transcript with speaker labels, or expressive LLM that is able to infer the meaning through the
[00:22:54] [2] text lines itself.
[00:22:55] [1] I think he actually said expensive. I think he was telling you on the call.
[00:22:59] [2] Sorry, yeah, I read that wrong, but expressive or expensive. Yeah, it's basically the same thing.
[00:23:03] [2] The more expensive it is, the more expressive it is.
[00:23:05] [1] Yeah.
[00:23:08] [1] Yeah, okay. Yeah, I mean,
[00:23:12] [1] that's an interesting thing you hit on either side, I guess. But you've been building the, are these wrappers or is it like, like the pieces.
[00:23:21] [2] I describe it as like a pipeline because it starts by running the, well, actually it starts with, okay, I didn't even talk about this part yet.
[00:23:29] [2] This might be kind of interesting to you, maybe not. Downloading the video from YouTube is a crazy hard problem because there's one specific library everyone uses called YTDLP.
[00:23:42] [2] Have you heard of this?
[00:23:45] [1] No.
[00:23:46] [2] Yeah, okay. So it has like 50,000 stars. It's an extremely like large, very highly used open source thing.
[00:23:51] [2] It's basically a tool that allows you to give it a YouTube URL and it will just download the video as a video file onto your computer.
[00:24:00] [2] Something that you think should be so simple and that there should be 10 different libraries that do this.
[00:24:04] [2] It's essentially the only one that does it. And there's a lot of libraries that kind of wrap it and do a million different things with it.
[00:24:09] [2] And there's certain APIs you can pay for, like on Rapid API that will download for you.
[00:24:16] [2] There's also like desktop apps like Downy that I use that can download YouTube videos.
[00:24:21] [2] But it's a thing that's very challenging because YouTube just makes it very hard to do.
[00:24:25] [2] They just go out of their way to make it extremely challenging. And if you want to like use this tool in production, you have to do all this crazy stuff with like IP routing and stuff.
[00:24:32] [2] So anyway, we don't need to go too far into this, but the first step is downloading the video from YouTube.
[00:24:38] [2] Then the second step is once you have the video.
[00:24:41] [1] Maybe I should be writing this down.
[00:24:44] [2] Yeah, we should do an Excel draw for this actually. It's a five-step process. It would be perfect for five boxes.
[00:24:49] [2] Do you want to do that?
[00:24:50] [1] Okay, I'm just going to, yeah, let me share my screen for a second. Yeah, because yeah, we're not talking about stores or air catching.
[00:24:58] [1] Let's just find some space here. Okay, so.
[00:25:01] [2] Yeah, so it's going to be a five-step process.
[00:25:05] [1] Video transcript.
[00:25:06] [2] And someone asked in the chat, is YouTube DL still a thing? YTDLP is the successor to YouTube DL.
[00:25:13] [2] YouTube DL is now a defunct project and YTDLP ported that project and they continue building on it.
[00:25:20] [2] So all of the old flags and options you would have used with YouTube DL are available in kind of somewhat deprecated version in YTDLP.
[00:25:29] [2] But at this point, if you've never even heard of YouTube DL, none of that matters.
[00:25:32] [2] You just use YTDLP and use their kind of the way they do in terms of their options and flags and stuff.
[00:25:40] [1] Okay, so sorry. First step, download YouTube video.
[00:25:44] [2] Download YouTube video. Yeah.
[00:25:45] [1] And for notes here, sorry, YD.
[00:25:49] [2] Yeah, so YT, so like YouTube dash DLP, YTDLP.
[00:25:56] [1] Okay.
[00:25:56] [2] I'm not sure why it's P and not DL, but yeah. And then extract audio from video.
[00:26:06] [1] Is that step two?
[00:26:07] [2] So still within the first step, I would say. So kind of like, yeah, as another, yeah.
[00:26:12] [1] Extract audio from video.
[00:26:15] [2] From video, yeah.
[00:26:16] [1] Yeah, what do you use to do that?
[00:26:18] [2] So YTDLP includes FFmpeg or you can just also include FFmpeg and do that. So you get the video, you just do an FFmpeg to extract a quick.
[00:26:27] [2] And this is important because you have to extract a WAV file in a certain specific format to get it to work with Whisper CPP.
[00:26:34] [2] If you're using the transcription APIs, you can kind of hand them almost any audio video file you want.
[00:26:39] [2] You don't have to hand them an audio file. Like you can give a video file to Deepgram or Assembly and it will just give you the transcript for it.
[00:26:45] [2] But for Whisper, you have to give it a specific type of WAV file. So that's why this extract audio from video step is kind of somewhat important.
[00:26:53] [1] Okay, okay. Yeah, yeah. It's been years. I used to, back when I used to, you know, download and pirate everything because.
[00:27:01] [2] I still do.
[00:27:02] [1] That was, well, I did a lot of encoding and stuff back then because I actually shared stuff.
[00:27:07] [1] Whereas these days, if I get stuff, it's for myself. Whereas back in the day, not everyone was capable of doing this kind of stuff.
[00:27:14] [1] But it's been years. But okay, FFmpeg, take the audio out, specific waveform, you said that for Whisper.
[00:27:23] [1] Whisper.
[00:27:25] [2] Whispers. Yeah.
[00:27:27] [1] Whispers with an S?
[00:27:28] [2] No, single Whisper uses Whisper.cpp. So it's clear that's for the CPP in particular.
[00:27:36] [1] Sorry, am I spelling it wrong?
[00:27:38] [2] So Whisper and then dot, and then the letters CPP.
[00:27:43] [1] Okay.
[00:27:43] [2] Yeah, that's it. Yeah.
[00:27:44] [1] Yeah.
[00:27:45] [2] Yeah.
[00:27:47] [1] And then.
[00:27:47] [2] Specific.
[00:27:48] [1] WAV.
[00:27:52] [2] Format. Okay, sure. Yeah. You got it. Cool. And then step two is run transcription.
[00:27:59] [1] Transcription, which is maybe Whisper, maybe something else.
[00:28:04] [2] Yeah, either Whisper or Assembly. I would just say, just say Assembly AI. We'll just keep it simple and only talk about the point of service.
[00:28:13] [1] Is it like this? Or is it like Azam?
[00:28:18] [2] It's capital AI without the period.
[00:28:22] [1] All right. Like Solid JS. Got you.
[00:28:25] [2] Yeah, exactly. Yeah. And so that would be either open source and free or third party hosted and paid.
[00:28:32] [2] So that's kind of the important distinction between there.
[00:28:37] [2] Ah, yeah, see, there's this huge lineage of different forks of these different projects and YTDLP is where it has ended up.
[00:28:45] [2] That's some good knowledge. I did not know that. Thank you.
[00:28:49] [1] Yeah, I'd love how like a number of people in chat just know this stuff. This is like complete news to me.
[00:28:56] [1] The only thing I've heard of so far is FFmpeg.
[00:29:00] [2] And I learned all of this over the course of the last year and a half, as I said, because I had this question of how do I create the tags?
[00:29:06] [2] That's why I'm saying like the journey this has taken me on, the tech I've learned, it's been absolutely fascinating.
[00:29:12] [2] So yeah, so from Theo talks about YTDLP all the time, that's what Dev is saying.
[00:29:18] [2] That doesn't surprise me.
[00:29:21] [1] Yeah, I have to admit,
[00:29:24] [1] and maybe this is bad and I should check into it, just where I've been at, I've ignored everything Theo has ever done on AI and most of the stuff that he's done on his content like set up because it's usually like beyond
[00:29:35] [1] where I am at. So.
[00:29:38] [2] So Theo has gone into an AI, the LLM stuff especially, which we're going to get to, is very similar to the similar journey I went on in terms of trying out all the different models and porting them into using all the different
[00:29:50] [2] AI. So you're going to get a huge chunk of that, through my opinion, is obviously instead of Theo's, but there's going to be a ton of overlap.
[00:29:57] [1] I was just going to comment that I watched him for his JavaScript framework stuff and that recently I haven't had the opportunity to watch as much stuff because he doesn't talk about it anymore.
[00:30:06] [1] S
[00:30:07] [1] o.
[00:30:08] [2] And so Fuzzy has a comment here saying, and Fuzzy, by the way, knows more about this project than anyone else except me.
[00:30:13] [2] He's watched almost every stream I've ever done about auto show. So he's like a total pro.
[00:30:17] [2] He says, I'm pretty certain Anthony made this so he can get transcripts for Ryan's back, how absent stream is.
[00:30:21] [2] And that is one of the first things I did after I used it on my own content as I did use it on Ryan's content.
[00:30:28] [2] So he's totally right about that.
[00:30:33] [1] I used this thing to clean up audio and add subtitles for a video I want to watch.
[00:30:37] [1] Download YouTube split audio track, back and forth, and add subtitles. Okay, yeah.
[00:30:40] [2] Yeah, and that's another thing Whisper CPP does. It can give you either a transcript in like a written format in like a file or it can give it to you in specific SRT and VTT are two of the main ones, subtitle formats.
[00:30:55] [2] So you could run it on a video and then you have subtitles for the video, which if that's important to you and you have something that you don't have that you need to create a quick one for that, then you don't have a w
[00:31:04] [2] ay to auto generate because it's not on YouTube. That's actually a really cool use case for Whisper CPP.
[00:31:11] [1] Very cool. Okay.
[00:31:12] [2] Okay, so now we should go step thre
[00:31:16] [2] e.
[00:31:17] [1] All right.
[00:31:18] [2] So step three is insert prompt.
[00:31:25] [1] Okay.
[00:31:26] [2] And then you should do, yeah, so you should do bullets after this instead of parentheses.
[00:31:30] [2] So we're going to do a list here. So the first thing I have it do is I have it give a short and long summary.
[00:31:40] [1] Sorry, short and long summary.
[00:31:44] [2] So what that means is I want it to describe the entire video in under 180 characters because that could be like a meta description if you think about it.
[00:31:53] [2] And then I also want to describe the video in a full paragraph, so three to five sentences.
[00:31:59] [2] So that gives you a very quick one-liner description of the whole video and then a slightly more in-depth, longer description of the video.
[00:32:06] [1] Okay.
[00:32:08] [2] Yeah, so what I'm describing right now is the default prompt. Auto show comes with like 40 prompts at this point that you can generate, but this is the default prompt.
[00:32:16] [2] So you have short and long summary, and then you get chapter titles and descriptions.
[00:32:28] [1] So when you're talking about insert prompt, what are we inserting the prompt into?
[00:32:33] [2] Yeah, so what I'm saying, so yeah, so.
[00:32:35] [1] I know this is general, but you're saying basically you could take any.
[00:32:38] [2] No, this actually works in a very specific, this works in a very specific way, the way I have my pipeline set up.
[00:32:42] [2] So after you have the transcript, you have a chunk of text, you also will have a front matter chunk that is extracted from the YouTube video that will grab your YouTube URL, your YouTube channel's title, the title of the
[00:32:54] [2] video, the date the video was released, and then the cover image of the video. So we'll grab all that and it'll create a front matter thing for you.
[00:33:01] [2] Then it will have the transcription, and then in between the two, it will insert the prompt.
[00:33:06] [2] So the prompt is what's going to have two pieces. It's going to have the description of what I want.
[00:33:11] [2] So plain English words saying, I want a summary written in this many words, and then a written example in Markdown with each section written out with one sentence, with one paragraph, and it's just like a generic example
[00:33:24] [2] of what I think the output should look like. That is then being inserted in between the front matter and in between the transcript.
[00:33:31] [2] And then that entire three-part piece then is what is given to the LLM. And then the LLM, just go to the full thing.
[00:33:38] [2] The LLM then gives the output. I then take the output and put it on top of the prompts and remove the prompts.
[00:33:42] [2] So then what you're left with is a website page with front matter, the LLM output, and then the transcription under it.
[00:33:49] [1] Okay, okay.
[00:33:51] [2] Yeah.
[00:33:56] [2] So after this part, step four is then give all of this to the LLM.
[00:34:05] [1] Okay, so when you say insert prompt, you actually meant like into the.
[00:34:09] [2] Yeah, it's just a big, it's a Markdown file. So you're working with a Markdown file with front matter, the transcript, and then the prompt is inserted under the front matter, but above the transcript.
[00:34:19] [1] Okay.
[00:34:20] [2] And after we write all this out, I can do a quick code demo and it'll make more sense once we kind of see this visually happening.
[00:34:25] [1] Yeah. And then, sorry, what did you say? Give it to the LLM?
[00:34:30] [2] Yeah, I would say run LLM processing is kind of how the phraseology I usually use for this.
[00:34:37] [2] And this can also be, you can use open source models. I wouldn't really recommend it.
[00:34:44] [2] They're not that great unless you're actually running a Linux server in your house.
[00:34:47] [2] You're probably not going to have a very powerful model. So usually what you're going to use is something like ChatGPT, Claude, or Gemini.
[00:34:56] [1] Claude, Gemini. Yeah, Gemini's good. Sorry, I don't know anything about this. Gemini's Google's one that I saw that show up recently.
[00:35:07] [1] The other two people.
[00:35:08] [2] Gemini is pretty legit, yeah.
[00:35:10] [1] Okay. The other two I've seen people like talk about for ages, obviously ChatGPT, it's been years.
[00:35:15] [1] Claude has been at least, yeah, I don't know.
[00:35:19] [2] Yeah, so ChatGPT came out first in November of 2022. Then Claude was kind of right on its heels around the same time.
[00:35:28] [2] So they've been around now for, you know, what's that, like two and a half years.
[00:35:32] [2] And Gemini is probably about a year old. They originally put out, Google put out an LLM called Bard, which has been totally memory hold because it was like an absolute embarrassment and it was really extremely bad.
[00:35:43] [2] And so they got their crap together and then shipped a really powerful model that is essentially up to snuff with ChatGPT and Claude.
[00:35:53] [2] Kind of which one you're going to use is
[00:35:56] [2] almost like a kind of a culture thing, really. I find for someone who's already all the way in like Google tech, then you'll kind of naturally be led towards like Gemini.
[00:36:05] [2] If you're someone who is not and you already are into ChatGPT, you kind of use ChatGPT.
[00:36:10] [2] And then a lot of people get kind of led to Claude because Claude is just extremely, extremely good.
[00:36:15] [2] Like I use Claude exclusively for coding and it was what I used for a long time to generate the outputs for auto show.
[00:36:24] [2] I still use Claude and ChatGPT kind of interchangeably in a lot of ways. What I'm going to show you once we actually finish this part is the outputs for your chapter titles from both two different ChatGPT models and a Cla
[00:36:36] [2] ude model. But with all this stuff, you kind of have to just try them all. You'll get a feel for different things, see which one you think works the best for you and your specific use case.
[00:36:45] [2] They're all kind of within, you know, spitting distance of each other and they're all constantly putting out new versions of their models like every three months or so.
[00:36:54] [1] So there is a question here and I actually realized this afterwards. I have to go back and actually edit some of the timestamps you gave me.
[00:37:01] [1] There are definitely places where instead of view, V-U-E, it has V-I-E-W, like literally my timestamps right now.
[00:37:09] [2] Yeah, this is a good question. So it will be fairly accurate off the bat. There's ways to feed it vocabularies of words.
[00:37:20] [2] So if you could create like a dictionary of all the main like JavaScripty kind of words you're going to be saying throughout the show, then you can feed that to Whisper to kind of, or to the paid transcription services as
[00:37:33] [2] well. So it's kind of a question of how much upfront work do you kind of want to do versus how much editing after the fact do you want to do.
[00:37:42] [2] You can kind of front load that work by creating that library of words it's going to need to reference and then giving that to the model before you generate the transcriptions.
[00:37:51] [2] Or you can kind of just run it with the default settings and then see what it gets right and wrong.
[00:37:57] [2] So yeah, so this is one of the, this is a big kind of challenge and this is where choosing different transcription things may come more into play.
[00:38:06] [2] I find usually Whisper CPP does get a lot of the technical terminology mostly right, but it's never going to be 100% correct.
[00:38:13] [2] So that's why I say almost everything that this tool is doing for you is about, like he's saying, the 80% solution, the 90% solution, trying to get you most of the way there.
[00:38:23] [2] So then there's minimal human effort after editing, but it's going to be very, that last mile is the most extremely challenging part and at a certain point it just doesn't make sense to pay so much more because you could
[00:38:35] [2] just pay for a human to transcribe it for you. And then it's like, it will be 100% correct, but you're going to pay like 100 bucks, you know, because forever, the length of time for that person's hourly rate, you know?
[00:38:47] [1] Yeah, okay. Yeah, no.
[00:38:52] [1] All this seems challenging, but I mean,
[00:38:56] [1] if the output's valuable, then it's worth it. So I mean, let's.
[00:39:00] [2] Exactly, yeah. Cool. So that's basically it. You could put step five, which is like print results essentially.
[00:39:08] [2] So I guess step five would be output complete Markdown file is what I would say with front matter, the LLM output, and the transcription.
[00:39:21] [1] Front matter,
[00:39:24] [1] LLM, sorry.
[00:39:27] [2] Yeah, LLM output.
[00:39:28] [1] And then transcription.
[00:39:30] [2] Yeah, and transcription, yeah.
[00:39:35] [2] Yeah, and Alex is saying here in the chat, I was thinking of a vocabulary dictionary too, which you could share it with AI.
[00:39:41] [2] Exactly. So if you have a couple transcriptions already that have the correct verbiage because you've kind of gone through those and corrected those, you can then give that to an LLM and say, hey, read through this trans
[00:39:52] [2] cript, give me this, you know, dictionary of words. That's a super good point.
[00:39:56] [1] As someone who just hasn't used these very much, like my extent of AI is literally Copilot.
[00:40:02] [1] I've like used ChatGPT a couple of times and just been like minorly frustrated and then given up because I literally have no idea how this stuff does it.
[00:40:12] [1] What I found was like.
[00:40:13] [2] It's about how you have to figure out how to work with it for sure.
[00:40:15] [1] Right, like I'm saying, like does it get smarter on prompt after prompt or do you have to like figure out how to combine everything to like, to like.
[00:40:24] [1] In one go to make sure because I felt like I would ask for something and then I was like, okay, this feels conversational, so I'll try and ask for the next thing.
[00:40:31] [1] And then it's like it forgot the first thing that I asked it, you know, like.
[00:40:35] [2] Yeah, this is like such an important key question and I will have a take on this.
[00:40:41] [2] That will be, everyone's going to have a take on this that may be wildly diverse.
[00:40:44] [2] And so this is just one man's opinion. I think the thing that really makes them useful and really supercharges them and fixes almost all the issues that you can potentially have with them is by figuring out what do you have
[00:40:56] [2] to give it in your first message so that it has the context it needs to actually solve your problem.
[00:41:04] [2] And the way that I do that in terms of code, I use this tool called Repo Mix, where you can kind of have it compress a lot of your code base into a single Markdown file that then I include in my message about what I'm tr
[00:41:16] [2] ying to ask it to do. So I don't use cursor. I use Copilot to fix type errors. I don't really have a chat.
[00:41:23] [2] I don't work with things that edit my code. I do everything through just a single chat window, which is I think kind of the idea with T3 chat, honestly, is being able to have that workflow be really, really nice.
[00:41:35] [2] So I think there's something here in terms of what me and Theo are doing, but.
[00:41:39] [1] Yeah, I need to bug him to get the free open source license or the cheaper open source license deal.
[00:41:45] [2] You need to get him on just to a stream with him about it because trust me, that will be worth your time.
[00:41:49] [2] So I'll just say that. But so I have it basically generate a large message that includes a whole bunch of context, including docs and code files about my code before I ask it to do anything.
[00:42:00] [2] And then I also have a written set of rules, which is like a cursor rules file that explains how I want the code to be written, what version of node I wanted to use, whether I wanted to use async await or .
[00:42:11] [2] then, whether I wanted to use the import or require. I just kind of define the code style in basic plain English.
[00:42:17] [2] So I give it that and my code context. And then I ask it what I want to refactor, the feature I wanted to write, the bug I wanted to fix.
[00:42:26] [2] And then I feed all of that to the LLM. And then it gives me an output that like for me, 90% of the time works on the first try.
[00:42:33] [2] And then the rest of the time it mostly works, but there's a certain error. So I feed it back the error and I have a quick back and forth with it to work that out.
[00:42:41] [2] But I never have a conversation that lasts more than two or three back and forth because the longer you talk to it, the stupider it gets.
[00:42:47] [2] And this is one of the most important things about LLMs that no one really explicitly tells you, but we all figure out and everyone knows the longer you talk to an LLM, the dumber it gets.
[00:42:56] [2] So you always want to have the shortest possible conversation you can with it because its intelligence will degrade with every output.
[00:43:03] [1] Yeah, okay. It conceptually makes sense to me too because you're broadening the context of what it thinks that the solution could be, which means that it makes it fuzzier what the options are.
[00:43:14] [1] You're actually giving it more choices or more places to go wrong, which is more likely to cause it like for it to miss than for it to hit.
[00:43:22] [1] I mean, just conceptually.
[00:43:23] [2] Yeah.
[00:43:25] [1] I don't know what this question means, but it's a question in chat, so I'll throw it up there.
[00:43:29] [2] Sure. Yeah, so I can answer this. So what this is, is for some reason, LLMs seem to speak XML.
[00:43:38] [2] It's not great, but it's just the way it is. So people will put basically tags like this because, you know, you probably know way more about XML than I do because it was a bit before my time.
[00:43:48] [2] But it's just, it's a way to
[00:43:52] [2] chunk large chunks of text and give them kind of conceptual boundaries.
[00:43:56] [1] That's what I'm saying. Yeah, exactly. It's very clear delineation where something starts or something ends.
[00:44:01] [1] Yeah.
[00:44:02] [2] Yeah, yeah. So the tool I use Repo Mix, you can have it output either a Markdown file or an XML file, which will do this.
[00:44:10] [2] I stick with Markdown just because for me, it's the language I already speak and know really well.
[00:44:15] [2] But I've been told and heard frequently that XML actually works better and it will have an easier time distinguishing your code context from your instructions, from your actual specific feature ask.
[00:44:28] [2] It sounds funny. No, that's exactly correct. That's a funny way to think about it.
[00:44:35] [1] All right. All right.
[00:44:39] [1] So yeah, where do we go next? Thanks for answering these beginner questions for me because as I said, I just don't know this stuff at all.
[00:44:46] [2] No, this is great. Yeah, at this point, I should just show you kind of what I now have generated for some of your streams.
[00:44:53] [2] So I'm going to share my screen
[00:44:57] [2] and I'm going to show you first
[00:45:02] [2] what I'm actually feeding it. So you want to bring my screen up on stream? So switch my figures.
[00:45:09] [2] Yeah.
[00:45:09] [1] Okay. I want to make sure you're ready. Yeah.
[00:45:11] [2] Yep, all good. Yeah. So, whoops. So as I was kind of describing, this is what you kind of get for the output after you run the CLI.
[00:45:21] [2] So you have first here.
[00:45:23] [1] Thanks for blowing it up. Yeah, I couldn't even read it myself there. Yeah.
[00:45:27] [2] So first we have the front matter. So as I said, this includes, this is the link to the video I grabbed, the last big one you did.
[00:45:34] [2] So the mutable signal is part two. And then you have your channel name, your channel URL, and then the description I usually then fill in after I get that from the LLM.
[00:45:44] [2] So that's why this is empty right now. The published date and then the cover image.
[00:45:49] [2] So if you open this, we'll see this is your video right here. So that's the first thing you get.
[00:45:55] [2] This you get from YTDLP after it downloads the video. You can also have it grab metadata for you.
[00:46:01] [2] And then I just write it into just a text string essentially and then stick it into a Markdown file.
[00:46:07] [2] Then that's what kicks off the process. Then you have the transcription down here, which is what was generated with Whisper CPP.
[00:46:15] [2] The way I do it, you'll see it looks kind of weird here. Some of the words are like cut in half.
[00:46:20] [2] This is because it's very hard to get it to give
[00:46:25] [2] consistent type, consistent lengths in terms of the transcript and the length. So you see here it's fairly consistent in terms of you're getting a lot for each.
[00:46:34] [2] I found that when I just ran Whisper CPP by itself, it was like super, super minutia.
[00:46:39] [2] It would mess up and start then giving me a single word or two per line. So I ended up with something that was like 10,000 lines long and it was just completely unmanageable.
[00:46:48] [2] So what I do is I have it give me word level transcription. I have this open right here actually.
[00:46:53] [2] So I have it give me word level transcription and then I have a regex that makes sure each line is roughly equivalent to a certain number of words.
[00:47:02] [2] That has the downside of that is you end up with this weird thing where my regex is not quite good enough to like figure out where words end.
[00:47:09] [2] But if you're throwing the transcript out at the end, it totally doesn't matter.
[00:47:13] [2] So you got the transcript there. And then as I said, now the prompt is injected in between the front matter and the transcription.
[00:47:21] [2] So step one downloads the audio and gets you this. Step two creates this transcription and then step three inserts the transcript or sorry, the prompt.
[00:47:32] [2] So the prompt then, I'm just going to read through it at a high level. It starts by saying, this is a transcript with timestamps.
[00:47:38] [2] I find that the best way to work with LLMs is just speak to them like they're a normal person that you would want to deliver information to.
[00:47:44] [2] So that's the first thing you want to tell it. It would frequently ask, it would frequently claw, especially sometimes would say, I'm sorry, I can't do this because it contains copyrighted material.
[00:47:54] [2] I would then just tell it, no, it doesn't. And then I would say, okay, cool, and do it.
[00:47:58] [2] So I started building it into the prompt. So these are kind of like things that I've added in over time just to fix certain stupid stuff it does.
[00:48:06] [2] The next one, most people here will understand, do not ever use the word delve.
[00:48:09] [2] It still does, which frustrates the hell out of me, but this will make it use delve less.
[00:48:15] [2] This is a whole joke about lots of LLMs use the word delve. It's like a running joke.
[00:48:20] [2] So anytime people see the word delve now, they think you wrote it with an LLM. You may or may not be aware of this meme, but it's pretty common.
[00:48:28] [1] Yeah, I'm not. But to be fair, I actually, that's not a word that I actually use as often as I should use it.
[00:48:34] [1] I use the word explore all the time instead of the delve.
[00:48:36] [2] You shouldn't use delve. People are not going to think you're a robot if you do.
[00:48:41] [1] All right.
[00:48:43] [2] It's a word I use a lot too. I love the word. I'm sad that we've had this word taken away from us.
[00:48:49] [2] But anyway, and then I tell it, do not include advertisements in the summaries or descriptions because I also, as I've been building this, I've started using it on, you know, like long form content, like Alex Friedman pod
[00:49:02] [2] cast or something like that. He doesn't have advertisements in the middle, but a lot of shows do.
[00:49:06] [2] So obviously when it's writing your chapters, you don't want to describe the ad that's in your video because that would just kind of be stupid.
[00:49:14] [2] And then I say, do not actually write the transcript because sometimes what it would do is it would, when I would give it the whole thing, it would write the LLM output and then it would just start writing the transcript
[00:49:23] [2] also. And it would just keep going and writing and writing and writing the transcript.
[00:49:26] [2] I'm like, no, don't do that. I have the transcript. You don't need to rewrite it, you know?
[00:49:31] [2] So that's what all these are for. So these are all the top level because these are all the errors that I kept getting that I just had to specifically say to it in plain language, don't do this.
[00:49:40] [2] Beyond that though, this only I need to do for your videos. So here's your.
[00:49:45] [1] XML comment. Wow.
[00:49:47] [2] So actually, I don't do it as a comment actually. So that was just, that was for me, I just wanted to distinguish that.
[00:49:53] [2] This is not part of the default prompt. This is something I then wrote in myself because your videos now are too long for some of the LLMs.
[00:50:04] [2] This is really, this is frustrating as hell for me because ChatGPT-01 handled them like a champ.
[00:50:10] [2] And for some reason, as they put out newer models, some of them have smaller context windows because for whatever reason, they have all these different models, all the different context windows.
[00:50:21] [2] So there's no model on ChatGPT except now 4.1 that I can give your entire transcript to and get an output.
[00:50:28] [2] But the output 4.1 gives is not very good because 4.1 is a smaller, different kind of, it's not a reasoning model.
[00:50:34] [2] So 01 was the only model that ChatGPT had that could handle these whole things and give you a good output.
[00:50:40] [2] And they deprecated it. It's not even there anymore. So what's going to work best for your stuff now is just chunk it in two halves.
[00:50:47] [2] So you give it the first two and a half hours and the second two and a half hours, you then can stitch those two chapter titles together fairly easily.
[00:50:55] [2] So in a year or two, as more models have bigger context, actually Gemini is one that might be better at this because Gemini is a very long context.
[00:51:03] [2] But this is why I use your streams in particular as I was kind of building this tool.
[00:51:10] [2] I wanted to be able to just give it this like large, huge chunk of content and just have it give me like 10,000 words back, but just some of them just make it really hard to do that.
[00:51:20] [1] How did you arrive at, sorry, like is there something special about arriving at approximately half the stream or it's just like approximating because like it just kind of gets worse over time or?
[00:51:29] [2] So I would say it tends to do very well with one to three hours length of content.
[00:51:35] [2] And then once you get up into the three or four, some of them will just straight up not allow you to have an output.
[00:51:41] [2] There is a certain amount of text you can give each model and it will say, this is too long, give me a smaller output.
[00:51:48] [2] And so some of them you'll reach that easily if you hit five hours of content. So all of them can handle at least two and a half hours of content.
[00:51:57] [2] So that's why I felt that that was, and then I just tested it. I just test stuff like this empirically.
[00:52:03] [2] So once I realized that it could no longer take five hour videos because they deprecated 01, they have these like now weaker models in terms of context length.
[00:52:10] [2] I was just like, okay, what's the first simplest thing I can do? I can cut it in half, get two outputs and stitch them back together.
[00:52:15] [2] So I tried that. It gave me a pretty good output. And I've been working with one to two hour videos is mostly the sweet spot, I think, with the tool.
[00:52:24] [2] So I already figured that going to two and a half, when get into any difficult territory for any of them, once you get up to three hours, it can be more challenging and it wouldn't really make sense to try and cut a five
[00:52:35] [2] hour video into like a three hour to two hour chunk. So for me, it was just a simple halving of it.
[00:52:40] [2] So that's in two pieces instead of one big piece. That's the thought process.
[00:52:44] [1] Okay, that makes a lot of sense. I can't remember if this one's the super long one or if it was the one before.
[00:52:48] [1] I did a six hour stream actually.
[00:52:50] [2] That's your first one. And that's your first one to cap six hours. So that's a new milestone.
[00:52:55] [2] This one only went five hours and 11 minutes.
[00:52:57] [1] Right, right. Which is more typical. Yeah, just one sec, one sec. Before we move on, this was shared in chat and I thought it was actually kind of funny.
[00:53:07] [1] The whole delve counted articles.
[00:53:11] [2] It's skyrocketed in like academic papers and stuff like that, I bet.
[00:53:15] [1] Yeah, yeah. This is, or in the title or abstract, like somewhere in 2023. It looks like it's slightly gone down in 2024.
[00:53:23] [1] I guess people are aware of this, but.
[00:53:25] [2] Because they're starting to put into their prompts not to say delve because this is a widespread problem people realized.
[00:53:33] [1] Yeah, yeah. This is just crazy. Anyway, yeah, I hadn't heard of this. For those of you who
[00:53:40] [1] haven't, this is kind of pretty funny. Anyway, back to the regular scheduled content.
[00:53:46] [2] Cool. So this is the really important. So this is included with every prompt, no matter what.
[00:53:53] [2] This is just a general instruction I give every single one of them. Then the way I set up the tool is you can inject as many prompts as you want.
[00:54:02] [2] And you do that either through the CLI or through the front end input. And it will insert two things.
[00:54:09] [2] It'll give you the instructions. So there's two prompt instructions here. There's the short and long summary prompts.
[00:54:15] [2] So just like we wrote in your doc, this is the short and long summary prompt. So write a one sentence description that doesn't exceed 180 characters, which is roughly 30 words.
[00:54:25] [2] So I tell it in two different ways what the length is because that gives it even more idea what the hell I'm asking it to actually do.
[00:54:31] [2] Because sometimes they can count characters, sometimes they can't, you know? And then I say I give it one paragraph summary, approximately 600 to 1200 characters, roughly 100 to 200.
[00:54:40] [1] So does this mean that the summary is generally based on the first half of the stream, like the first two and a half hours?
[00:54:48] [2] Yeah, so that's one thing that you can. So the ones that there are ones that can take the five hour chunk, the reason why I have to break it up is for the chapters, not for the summary.
[00:55:00] [2] If you wanted just the summary and not the chapters, you could feed this whole thing to ChatGPT 4.
[00:55:05] [2] 1 and it would work. It could give you a summary of the whole thing.
[00:55:08] [1] Usually my stream focuses in the first two and a half hours and then afterwards it's just like random crap and like this week in JavaScript.
[00:55:15] [1] So this works perfectly fine. It's just I was curious. Okay.
[00:55:18] [2] Yeah, no, yeah, that's a good point. And because yours are just longer or more complicated, probably what I would do is I would do two runs.
[00:55:25] [2] I would do one that would just give you the summary for the whole thing. And then I would do another for the chapters, which would then break it in half.
[00:55:31] [2] And then I would kind of combine all of that into the final output. So you have the summary and then you have the chapter titles and descriptions.
[00:55:39] [2] So this includes a whole lot of stuff that I don't necessarily need to read out.
[00:55:42] [2] I'm just kind of explaining to it how the structure should look because I wanted to have a very specific format in terms of the time, like actual timestamps.
[00:55:50] [2] It needs to be hours, minutes, and seconds because if it doesn't do that, then YouTube's.
[00:55:56] [2] So okay, so this is one of the cool things about the tool. I've designed it in a way where the chapter titles you get out of it, you can just copy paste directly into YouTube and YouTube makes chapters out of that.
[00:56:07] [2] So you probably know this, that if you write the timestamps in your YouTube description, it then creates links automatically that you can click on, right?
[00:56:17] [1] Yeah, exactly. That's the key. Yeah, yeah.
[00:56:21] [2] But that doesn't work if it's 70 minutes and 10 seconds instead of one hour, 10 minutes and 10 seconds.
[00:56:27] [1] Okay.
[00:56:28] [2] Yeah, so that's what this prompt is for. But anyway, and then I tell it the same thing.
[00:56:32] [2] It needs to be this long. I want, so you can do shorter chapter descriptions if you just want like a one.
[00:56:38] [2] And so you don't actually need to do chapter descriptions at all. You could just get the chapter titles.
[00:56:42] [2] I like getting the chapter descriptions because what I like doing is basically turning each video into a piece of content that I put on my blog.
[00:56:51] [2] So if you go to ajc.webdev and you go to like my videos, you have, these are all my auto show outputs where I have the episode description, which is one sentence.
[00:57:02] [2] I have the episode summary, which is about a paragraph. And then I have the chapter titles and descriptions.
[00:57:07] [2] So you could kind of read through this and it would be like a description of the entire episode, which is not quite the same as just getting the chapter titles because then you're just kind of getting a broad idea of wh
[00:57:18] [2] at are they talking about in this section of the video. And then usually you click it and you'll actually watch that section.
[00:57:23] [2] Whereas I'm kind of creating something where this could substitute entirely for even needing to watch the video.
[00:57:30] [2] You could read through this and basically get the gist of like what it is discussed throughout.
[00:57:35] [2] Like this is on Goose, which is like an AI agent kind of tool. This is actually a super fun stream.
[00:57:40] [2] But yeah, so then there's the instructions and then there's the example. So this is where I actually give it the output.
[00:57:47] [2] So this is what I was just showing you on my blog, but written in Markdown format.
[00:57:51] [2] You have the episode description, you have the episode summary, and you have the chapters.
[00:57:56] [2] So those are all H2s and then each individual chapter title is an H3. So there's a Markdown structure to the output as well.
[00:58:06] [2] So that's the whole thing. That's the whole document. Just zoom out so people can see the whole thing.
[00:58:11] [2] Front matter, prompt, and then transcript. So that is what gets fed to the LLM.
[00:58:18] [2] So before we go to feeding it to the LLM, do you have any questions or comments?
[00:58:23] [1] No, I think this makes sense. I'm following so far.
[00:58:29] [2] Great. So now let's look at kind of what we're getting here. So this is where I kind of want to talk about the different models in terms of what you can get and how it's helping.
[00:58:38] [2] So you see here.
[00:58:39] [1] Yeah, Alexander was asking like how accurate they were and he's trying to do stuff for his podcast.
[00:58:45] [1] But I think maybe we should just see that and then answer that after we go a little bit further along.
[00:58:49] [2] Totally. Yeah. So you're going to see here a wide range of outputs from not useful at all to hopefully more useful.
[00:58:57] [2] So what I was talking about how ChatGPT-01 was like the ultimate model, I'm showing here ChatGPT-4.
[00:59:04] [2] 1, which is a model that can take the whole thing. So you see here, I was able to get it to take the entire transcript in one go.
[00:59:11] [2] But the problem is it's not going to give very good chapter titles. So the description, let's kind of check this out first because these should be fairly, fairly good, fairly good.
[00:59:20] [2] So the way they're written is not going to be in your voice, obviously. It's kind of like a detached voice of God where it's just describing it from like a neutral third person kind of way.
[00:59:32] [2] So you may not like the exact voice it gives you and you can modify it or kind of, there's ways to prompt it in a way that can give it your voice.
[00:59:41] [2] So the thing it says here is Ryan Carniato explores latest advancements, immutable signals, and fine grain reactivity, diving into store design, projections, and the practical and theoretical challenges of state management
[00:59:52] [2] and modern JS frameworks.
[00:59:54] [1] That's a pretty good description. That sounds pretty good.
[00:59:57] [2] It's basically accurate. It sounds kind of generic and most people would read it and kind of sense it's written by an AI, but it's not wrong.
[01:00:04] [2] And it delivers the information to you in a way where you at least get the point, like what it's about, you know?
[01:00:11] [2] Then you have the longer summary. So here it says, in this episode, Ryan Carniato continues his exploration of mutable signals, focusing on the nuanced design decisions behind stores, projections, and derivations within
[01:00:23] [2] the context of solid JS and broader reactivity frameworks. He discusses the evolution of state management patterns, examining the trade-offs between immutable and mutable data structures and the implications for performan
[01:00:34] [2] ce and API ergonomics. Ryan emphasizes the importance of reconcilability, stable references, and source guarding in store implementations, drawing comparisons to practices in React views, felt, and preact.
[01:00:46] [2] He also highlights the challenges of efficiently mapping and diffing nested data, the pitfalls of over-relying on compilers and language abstractions, and the quest for universal primitives that balance power and clarity.
[01:00:58] [2] Throughout, Ryan shares practical benchmarks, code patterns, deep insights into architectural decisions, encouraging a thoughtful approach to both theoretical design and real-world applications.
[01:01:05] [2] So again, it sounds like an LLM, but it's a ton of information in there, actually.
[01:01:11] [1] That's a decent back of the book, you know, like when you flip the book over, the back cover.
[01:01:19] [2] Yeah. Yeah, so it seems like you would find this useful. This is giving you an output that is not just total trash, you know?
[01:01:27] [2] So that's good. Now, here's the issue though. The chapters, there's not a lot of chapters.
[01:01:31] [2] So it has a chapter at the zero mark, seven minute mark, 24 minute mark, the 54 minute mark, the hour and a half mark, and then the two hour 51 minute mark, four and a half hour mark.
[01:01:44] [2] And that's about it. What you want, you want like 30 of these. You don't want like seven chapters.
[01:01:49] [2] So that's the problem with ChatGPT 4.1. If I had given this to 01, it would have given me 30 chapters.
[01:01:56] [2] But unfortunately, you cannot do that with any of the current models on ChatGPT.
[01:02:00] [2] So there's been some sort of degradation at some point in time. And Swix actually texted to set it, had a tweet about this, saying 01 was the ultimate summarizer.
[01:02:10] [2] But if you see now, if we break it in half, we're going to have much more fine grain chapters.
[01:02:15] [2] So now what I'm doing is I broke them in half and I gave them to 03 Pro. So this is a larger model that is better at breaking down the text and doing more fine grain summaries.
[01:02:26] [2] So here we see we have chapters every six minutes, essentially. So we have the introduction, a stream warm-up, context, old topics, new urgency, benchmark culture, framework discourse, signal stores, and the physics met
[01:02:39] [2] aphor, mutable reactivity. Why bother? Incremental computation and signia.
[01:02:46] [1] Yeah, signia is, that's right. Yeah.
[01:02:48] [2] Yeah, I was not, I did not watch this one because I was on my vacation. Signal of signals, the knockout flashback.
[01:02:55] [2] Jovi's model-centric example, stores and motivating redux. And for each of these chapters is a two-paragraph description of what you're doing.
[01:03:03] [2] So this is pretty detailed and this gives you a lot of stuff. The issue with this is that it's not really looking for when the sections begin and end.
[01:03:13] [2] Every single time it's exactly six minutes. That's a huge, huge issue. This is something that the models didn't always do and it's something that I still kind of have to actually sit down and kind of work out within the
[01:03:26] [2] prompts. But if we look at some other models now, if we look at say Claude, Claude will break them up in a slightly more natural way.
[01:03:34] [2] We see here we have the error reduction and it knows that's just like a minute.
[01:03:38] [2] It's like a really quick kind of thing. And then you immediately dive into a topic.
[01:03:42] [2] And then it has it go at 5:53 and then 9:32, 17:27. So you have, you know, this chapter is only four minutes long, whereas this chapter is like eight minutes long.
[01:03:54] [2] So it knows that these chapters should not all be the exact same length. You want it to be the length of what the actual content is.
[01:04:01] [2] This is why I'm saying Claude is able to do that actually. So I would recommend using Claude Sonnet 4 to generate your summaries.
[01:04:09] [2] I think that will probably give you the best output at this point. But even still, you have to actually go watch the video and go to these timestamps to see if it's actually correct or not.
[01:04:18] [1] I mean, it looks roughly like the titles are what I expect, but yeah, I guess the timing is hard to say.
[01:04:25] [1] The only funny thing is that I thought the ChatGPT one had a sense of humor. Maybe it wasn't, but just the titles seemed funnier.
[01:04:33] [1] They're like, signal and signal flashback, knockout. Like it was, you know.
[01:04:39] [2] That's actually, that's a really good point. Yeah, there's different, they have different voices.
[01:04:43] [2] And something I've started to play around with is I have created a text document that has extracted every tweet I've ever written.
[01:04:52] [2] And I've started trying to take chunks of that and feed it to an LLM to say, write this in my voice.
[01:04:58] [2] So that's something that I'm just beginning to kind of like delve into in terms of how can you tweak the, how it speaks, like what its tone of voice is, whether it's like comedic or kind of just flat, you know?
[01:05:11] [2] That's a really good point. So yeah, so that's kind of, that's kind of my whole presentation on this half.
[01:05:17] [2] So what you would then do, if you didn't care about the descriptions at all, you could do a prompt that just gives you the chapter titles.
[01:05:25] [2] That would just output those. So let me just real quick, I'm going to just run an example on a minute-long video because yours, as I said, takes like an hour and a half, just so people can see this guy in action.
[01:05:38] [2] So, and this is all open source. Anyone can just download this repo. It's,
[01:05:45] [2] just so people have the link, github.com/autoshow
[01:05:51] [2] CLI. So this is the, if people want to use this guy, you can check it out here.
[01:05:57] [2] And
[01:05:59] [2] we have a bunch of examples in the docs here. And I want to do a prompt example.
[01:06:06] [2] So let me go to prompt options. So let me talk just briefly about kind of how I'm thinking about the prompt.
[01:06:13] [2] So you have a pretty narrow use case. You're looking for the chapter timestamps.
[01:06:18] [2] And as I said, that is the thing that spun me off to this whole project. But I found then once I built this pipeline, I could tell it to generate almost anything and it could do all sorts of crazy crap.
[01:06:29] [2] So I started writing all these different prompts. So what I showed, I just showed you two of the prompts.
[01:06:33] [2] I showed you the default prompt. So this is the default prompt, which is just summary and long chapters.
[01:06:41] [2] But I also have, you could get titles for the video. So if you want, like if you just did a, if you first create a video, like you didn't live stream, but you like just filmed something and you want to like have a title
[01:06:52] [2] for it, you could do that. You can ask it to give you some title ideas. You can do your summary in bullet points instead of a paragraph.
[01:06:59] [2] You can have short summary or a long summary. Then you can have short, medium, or long chapter descriptions.
[01:07:04] [2] Then though, you could do things like key takeaways, like what are the most important bits of information you would get from this.
[01:07:11] [2] You could have it write like a check for comprehension test where it will have questions based on the material in the video.
[01:07:18] [2] If you want to turn your videos into like a paid curriculum course, you could do that.
[01:07:24] [2] You can pull out quotes. So if you want actual specific language from the transcript, like you want to quote that you have actually said in your own words and own voice, you can do that.
[01:07:34] [2] And you can do like a frequently asked questions.
[01:07:37] [1] Just so I understand what I'm looking at here, because this is, sorry, I see auto show CLI.
[01:07:43] [1] This is what you're.
[01:07:45] [2] Yeah, let me run one. Let me run one of these first.
[01:07:47] [1] This is what you built and it looks like you're inputting from your RSS feed, whatever the source is.
[01:07:54] [2] Let me, sorry, I forget which prompt I was going to do chapter titles. That's right.
[01:08:00] [2] So let me do this real quick.
[01:08:04] [2] Actually, let me do chapter titles and quotes. That'll be interesting. So first, if you just run it without the prompt option, you'll get kind of what I showed you.
[01:08:15] [2] So this does the five-step process that I was describing. It starts by downloading the video and generating the markdown.
[01:08:21] [2] And it gives you all the steps in the terminal output. It then downloads the audio and strips it.
[01:08:28] [2] So this is kind of just like logging the CLI options so you can see what's happening in each step.
[01:08:33] [2] It then runs the transcription, which is giving it to Whisper and creating the transcription.
[01:08:38] [2] And then you see here is a progress bar as it goes.
[01:08:43] [2] Then it selects the prompts and inserts the prompts. So this is why I was saying there's a default prompt.
[01:08:49] [2] So the whole prompt that I've explained to you so far, that's just the default prompt.
[01:08:53] [2] And this is the thing that is highly configurable and really gives the tool like all of its power is the ability to select prompts.
[01:09:00] [2] And then the run language models and when then you have the whole thing and you feed it to the LLM.
[01:09:06] [2] And then the LLM kind of gives you this huge output with everything. And then with that, you have
[01:09:15] [2] this, which is kind of similar to what I had shown you. You have your front matter, you have your transcription, or you have your prompt, you have your transcription.
[01:09:23] [2] So this is what the tool does by default. And then what the prompt options do is it changes this section in particular.
[01:09:32] [2] So everything around this, you always get the front matter, you always get the transcript, but this part right here is what you can configure.
[01:09:39] [2] This is what changes the output. You can write all sorts of different things and different prompts.
[01:09:43] [2] You could ask it to write you a rap song. You could ask it to write you a blog.
[01:09:47] [2] You could ask it to write you a five-day schedule of social media posts. You can ask it to write you essentially anything.
[01:09:55] [2] So this is what the prompt configuration lets you do. Does that make sense now?
[01:09:59] [1] Okay.
[01:10:02] [1] Okay, yeah, yeah. But you just like, okay, I'm stepping way back. You have a CLI that has all these pre-configurations.
[01:10:10] [1] You run it based on these arguments and then it does all five steps of the process for you.
[01:10:16] [2] Yeah, exactly.
[01:10:17] [1] And this is an open source project or is this something you...
[01:10:22] [2] So what you're looking at right now, anyone could do this. They could clone this down, they could run this and there's no money required.
[01:10:28] [2] This is totally free. You don't even need an API key. If then you have, you can just go to a ChatGPT even free version, just plop it in and get the output.
[01:10:38] [2] If you want to use some of the services, then you need API keys. So you have things like OpenAPI, Anthropic, Gemini, stuff like that.
[01:10:46] [2] So let me show you now. Let me run this. So now instead of just running the same thing that I ran, I'm going to add dash dash ChatGPT at the end.
[01:10:55] [2] So now it's actually going to do the full process of not just giving you the prompt and transcription for you to give to an LLM, it's actually going to give it to the LLM and get the response back.
[01:11:07] [2] So this is the fully automated flow. And as I said, you can do this for free if you use an open source LLM.
[01:11:14] [2] There's a way to do this with Ollama. It's kind of extremely complicated and I have implemented and de-implemented it at lots of different times because it's just not worth the effort.
[01:11:25] [2] But
[01:11:27] [2] if you're just doing this with a one minute video with the ChatGPT, this costs fractions of a cent.
[01:11:34] [2] So it's really not that expensive. But what it's doing now is instead of giving you the prompt and everything, it's actually going to now we have the full things.
[01:11:44] [2] We have the front matter, we have the episode description, the episode summary, and the chapters.
[01:11:50] [2] If we do this, you can see the whole thing. So this, the example I use is an interview I did about Lambda School.
[01:11:57] [2] So exploration of Lambda School, personal experiences, programming frameworks, and the value of choosing unconventional education paths.
[01:12:03] [2] I made the case for why I dropped out of Lambda to do Redwood JS instead. So I always say I'm a proud Lambda School dropout.
[01:12:12] [2] And so yeah, so this is the entire automated process where you didn't have, literally you wrote a single command, which was this guy, and it goes through each step for you and then also gives it the prompt, gets the out
[01:12:23] [2] put, and inserts the output into the larger markdown file.
[01:12:30] [1] Okay. Yeah, okay, that makes sense.
[01:12:33] [1] Yeah, okay, so yeah, this has almost been a necessity to build this kind of stuff, just given like how many pieces this is a constant, like a lot of shared parts, but it's a constant like process that you have to go through
[01:12:47] [1] that you do, I guess with a podcaster or something, you do all the time.
[01:12:52] [2] This one, I use it for all sorts of stuff. I use it for content I create, both my podcasts and my videos.
[01:12:56] [2] I use it for content I listen to, like really long podcasts that I find are interesting, but I always just have way too much content to listen to.
[01:13:03] [2] I'm going to eventually turn this into a daily newsletter where I summarize all of the web and AI podcasts and give you these short summaries of each of them so you can then get a sense of what's happening in the whole e
[01:13:16] [2] cosystem in these short little blurbs. So I'm using it for all sorts of crap. But if you see here, I gave it just the prompt for the chapter.
[01:13:23] [2] So here you just got your chapter titles and your chapter headings. So this is an example of what you would want.
[01:13:31] [2] You would want to run exactly this command with, except maybe Claude instead of ChatGPT.
[01:13:38] [2] And you wouldn't do
[01:13:41] [2] , you wouldn't do dash dash RSS. You would just do dash dash video. And then you put the YouTube video right in here.
[01:13:48] [2] It would be, you know, youtube.com, whatever you're.
[01:13:51] [1] Oh, so this thing handles the downloading as well? Interesting.
[01:13:56] [2] Yeah, that's the YTDLP part. That's step one. So it can work with videos. You can give it playlists.
[01:14:01] [2] You could have it generate each video in a playlist, or you can have it, you can even do channel.
[01:14:06] [2] You could do just channel and then youtube.com/
[01:14:11] [2] RyanCarniato. That would take probably about a week to complete. So you don't actually want to do that.
[01:14:17] [2] But you could literally run it on every single video on your YouTube channel. And then you could do it on RSS feed.
[01:14:23] [2] And, oh, and then you could do it on a local file. If you have a file on your computer, then you can use it.
[01:14:29] [2] You don't need to grab something from the internet at all. So almost any content available anywhere, you can process through this.
[01:14:36] [2] And a lot of that power comes from YTDLP.
[01:14:39] [1] Very cool. Yeah, sorry, Dev was just saying, I could use this as a way of summarizing various things to figure out what to talk about in this week in JavaScript.
[01:14:48] [1] Earlier you said that before we started, you talked about look at the newsletter, but you could actually have this, look at all the newsletters that you care about.
[01:14:56] [2] Exactly. Yeah, yeah, yeah. And that's the thing. I'm like, I have all the infrastructure to do that right now.
[01:15:02] [2] I just have to like create the Substack and start actually dropping the inputs and then just hitting send.
[01:15:07] [2] Like I'm really close. That's going to launch within the next couple months or two, hopefully.
[01:15:11] [2] But yeah, so this is kind of, this is the first half of the presentation. I'm going to show you RyanGPT after this, but let me kind of go off
[01:15:20] [2] my screen sharing for a second. I haven't been seeing any of the chat.
[01:15:25] [1] You should really vibe code UI for this app.
[01:15:28] [2] There is a UI.
[01:15:29] [1] Oh, there is a UI.
[01:15:30] [2] That's autoshow.app. I can show that too. That's the paid thing. I didn't want to come here and chill an app.
[01:15:35] [1] No, it's okay. I understand that. I was actually going to ask this question because you were like, at the beginning, you're like the company paid thing.
[01:15:42] [1] And I was like, well, what you showed me is free except for the services you use.
[01:15:48] [1] So what's the paid thing? You can show it.
[01:15:53] [2] Yeah, okay, cool. Yeah, so this is available on autoshow.app. If anyone actually goes and
[01:16:00] [2] , sorry,
[01:16:02] [2] browser blocked the screen. I was just sharing it. What are you doing? Okay, there we go.
[01:16:07] [2] So
[01:16:09] [2] you can put me back up on the screen. Wait, that's the wrong one. I want the longest.
[01:16:17] [2] Okay, so this is the app. So I'm going to run it just locally on my machine, but it does exist on autoshow.
[01:16:25] [2] app if people want to go and create an account. I will say it's like, this is like in beta version.
[01:16:31] [2] This literally has just launched in the last like week. So you probably will hit bugs and using the video thing versus the file thing is slightly flaky just because I'm still working through the issues of downloading the
[01:16:43] [2] video. So I just want to throw that out there. But if people want to use this today, they can.
[01:16:47] [2] Let me go to just like the front page real quick. This is autoshow. Transform your content into anything.
[01:16:54] [2] This does not even work yet. I still need to create a video. So as I said, like super duper beta.
[01:16:59] [2] Still lots of things to do. But just to kind of show the functionality of it, I'm going to upload a file.
[01:17:09] [2] And you now can select your different transcriptions. So you see you have different versions here.
[01:17:13] [2] And there's a credit system. So you start by buying credits. And then the credits is what allows you to select whether you want higher or lower quality transcriptions.
[01:17:23] [2] There will eventually be more options.
[01:17:24] [1] Right, so from the app version, you're actually wrapping the other services. So
[01:17:32] [1] they don't, like I don't know what LLM you're using, sorry, LLM you're using underneath.
[01:17:39] [2] We'll see that part in step four. Yeah.
[01:17:42] [1] Yeah, but basically,
[01:17:45] [1] yeah, okay.
[01:17:46] [2] Yeah, so the CLI and the front end are basically doing the same thing. The CLI also gives you access to these different services, but you input your own API key to make that work and you pay directly to the service.
[01:17:57] [2] Whereas with this, you buy credits to use the app. And then once you have credits, you then have access to all the third party services.
[01:18:06] [2] You don't have to worry about API keys or connecting to any of them.
[01:18:09] [1] Makes sense. Okay.
[01:18:10] [2] Yeah. Then you have your prompt options. So as I was showing you all the prompt flags, now you just see these written out.
[01:18:16] [2] Now what I don't have yet, but I'm going to have very soon is you can hover over these and like a thing will pop up showing you what each one is actually going to look like.
[01:18:24] [2] Because right now it's kind of vague what these do. So that's like a thing that I'm going to work on very soon.
[01:18:29] [2] But these are all the flags that were available. So if you select short summary, long summary, and long chapters, this will give you the same thing we were getting before.
[01:18:37] [2] I'm going to just add a couple more in here. I'm going to have social and post.
[01:18:42] [2] And then I always like doing a rap song. I think it's always fun. And then so there's like 40 different prompts here to pick from.
[01:18:50] [2] And then if you want, you can actually just write your own custom prompt. So if for some reason you have a weird specific thing you want to do, you can just type that in right there.
[01:18:59] [2] And then the final point, you pick your LLM. So we have the same options I was showing before, ChatGPT, Claude, and Gemini.
[01:19:07] [2] And then you see there's a big discrepancy in credits. Claude 4, Opus will cost you up to 800 credits, whereas GPT-4.
[01:19:15] [2] 1 Nano is only five credits. And this is directly reflective of the different pricing of the models.
[01:19:20] [2] I'm not doing any kind of fakery in terms of like how I'm describing.
[01:19:24] [1] Are you scaling it based on the input? See, I don't know enough about it, but the stuff costs more based on how much it has to process or based on request.
[01:19:32] [2] Yeah, so the cost work out for transcription is based on per minute of audio you give it.
[01:19:39] [2] And then for the LLMs, it's based on input tokens and output tokens, both of which will be two different costs.
[01:19:45] [2] The inputs are very cheap, the outputs are more expensive. So the length of the transcription you give it will affect the amount of credits.
[01:19:53] [2] So if you do a one minute video versus an hour long video, that's going to be completely different in terms of both the transcription credits and the LLM credits because the input is scaling based on how long the video is.
[01:20:05] [2] And then the outputs is kind of fixed because there's only, they can give longer outputs versus shorter outputs, but the way the prompt is written, it's usually going to give you a fairly kind of similar amount of text.
[01:20:15] [2] So the really, the longer content you put in, the more credits it's going to be.
[01:20:21] [2] That's essentially the math that it works out to.
[01:20:26] [2] So after you pick your LLM, then it's going to generate the whole thing. It's going to give this weird, ugly output that I still need to fix.
[01:20:35] [2] But this will now be able to show you your show notes along with
[01:20:43] [2] the prompt as well. And this should usually go faster, but it's getting there. And then, because it kind of runs the transcription in the background.
[01:20:55] [2] There we go. Okay, so
[01:20:58] [2] now, so now this is your output. So this renders the markdown for you. So we see the same thing.
[01:21:03] [2] We have our episode description, we have our episode summary, and we were able to get this just through clicking through this UI.
[01:21:11] [2] So this requires no technical experience whatsoever. I just onboarded the most boomer dude you've ever met in your life, and even he was able to use it.
[01:21:19] [2] So that is kind of the goal that I had with this. So let's look at some of the more interesting ones.
[01:21:24] [2] So here we have the social post. Unlock real coding skills. Discover how frameworks like Redwood, React, and GraphQL can transform your learning journey.
[01:21:33] [2] Dive in now, hashtag web development, hashtag coding journey.
[01:21:36] [1] Right.
[01:21:37] [2] And then here we got our rap song. Yo, I started out with React, fresh stack, no Slack, learned modern JS, pushed the limit, never hold back, boot, camp ignition.
[01:21:46] [2] Ignition is a small piece, need the real deal, the skills to unleash, increase, hooked on Redwood, red hot pathways, no fuss, GraphQL queries, direct hits, got no mistrust, frameworks like a maze, I traced every turn from
[01:21:58] [2] lines of code to mastery, watch the bottle burn. So yeah, so there's a rap song about my journey learning React and Redwood in a boot camp.
[01:22:07] [1] There we go. I already hear
[01:22:10] [1] the eight mile song.
[01:22:14] [1] Anyways, okay, I got you. All right.
[01:22:16] [2] So yeah, so this is the app, autoshow.app. If you want to check this out, please send me bugs.
[01:22:23] [2] If you hit bugs, you will hit bugs. This is very, very new, very beta. If you want to try it out and you'll like kind of QA it for me, I can send you a promo code to give you credits for free.
[01:22:35] [2] Totally down to do that. If you want to try it out, you don't even want to pay, but you won't like understand it's a beta thing, just DM me.
[01:22:42] [2] Totally, totally down for that. So yeah, so thanks for giving me the opportunity to show that.
[01:22:47] [1] Very cool, yeah.
[01:22:48] [2] And it's
[01:22:50] [2] built with Solid, Solid and Astro. That's a solid front end you just looked at.
[01:22:55] [1] Nice, nice. But yeah, it's funny. When we started with the vibe coding, Jonathan was like, I thought it might be okay for that.
[01:23:02] [1] But you actually built, you built it yourself, right?
[01:23:07] [2] That's a great question. I would say I was vibe coding at least a year before the term existed.
[01:23:14] [2] This entire app I have built with LLMs kind of helping me get there. So I wouldn't necessarily say I vibe coded it, because when people say vibe code, they're like, oh, so you like plugged it into a freaking bolt and then
[01:23:27] [2] just wanted to shot it in. Then you had an app. Like no, I spent a year like building this and working through all sorts of different tech.
[01:23:34] [2] I originally had a Fastify backend and a React front end, and I turned that into an Astro full stack kind of thing with a solid front end.
[01:23:42] [2] And I've pulled in, pulled out all sorts of stuff, but I was using an LLM kind of as I was coding the whole time, because I have found it very, very useful.
[01:23:49] [2] Because I, unlike Ryan, am not a god of coding who can do anything he wants anytime.
[01:23:54] [2] So it's very useful for me to have an LLM that can kind of help me work through all sorts of weird bugs and issues as I've been building this, yeah.
[01:24:02] [1] No, okay. No, I mean, it's cool. And I'm always, the Astro Solid combination obviously is an awesome combination.
[01:24:08] [2] I tried Solid Star at 1.2, but then I heard that there's not going to be a Solid Star anymore.
[01:24:12] [2] I don't know if that's true. I heard it was like merging with TanStack or something.
[01:24:16] [1] That's not exactly true. The thing is the core of like the Nitro piece, or I want to call Nitro++ piece, was originally developed building Solid Start, then TanStack took it and then refactored it to make it better.
[01:24:32] [1] And then that will get back. Both projects actually have different goals, which I'm hoping integrate with each other eventually.
[01:24:38] [1] But TanStack wants to be a generic framework for all the JavaScript frameworks.
[01:24:42] [1] You know, like obviously.
[01:24:44] [2] Okay, I think Dev told me this, so that's the source of the misinformation, just so we're clear.
[01:24:49] [1] Okay, because basically like
[01:24:53] [1] React gets special treatment in TanStack land. Solid gets, I bought as best treatment as you can get.
[01:24:59] [2] So Solid Star can continue to be an independent project that's going to develop.
[01:25:02] [1] It's our starters. I wanted to create, it's our create React app or our beat.
[01:25:06] [2] RyanGPT is built with Solid Star, front to back. So we'll get to that. Is it cool if I take a quick like two minute break to use the bathroom and then we'll do the RyanGPT part?
[01:25:16] [1] Yeah, yeah, it sounds good, good idea. Pop off for a minute. That's cool. Yeah, yeah, no, it's, yeah, I sometimes forget.
[01:25:22] [1] Yeah, I get so into my stream that I actually, I rarely actually end up leaving here.
[01:25:29] [1] Anyway, yeah, yeah, just to clarify further in that gap, yeah, Solid Star is not done.
[01:25:37] [1] Solid Star is built in such a way that it's to support all Solid libraries, right?
[01:25:44] [1] I've talked about this before on stream a bit, but like its whole goal was to prove that you could be router agnostic, where TanStack start is very tied to TanStack router.
[01:25:53] [1] And, but it was to show you could be like render framework agnostic. So there's similarities there, but the goals end up being differently, right?
[01:26:04] [1] Like I want people to be able to use Solid Star and not even have a router. You know what I mean?
[01:26:08] [1] Like it's the lower level. If Veet continues to raise the bar on what they offer on their server rendering, Solid Star just shrinks, shrinks, shrinks off the map.
[01:26:16] [1] You know, things like Nitro as a Veet plugin, as you mentioned, or like if we can just shrink the baseline of like what is needed on the bottom, yeah, Solid Star gets smaller.
[01:26:29] [1] But the truth is today there is a gap between
[01:26:35] [1] like basic Veet setup and something that has full SSR in its consideration, right?
[01:26:41] [1] Because every framework SSR is a little bit different, right? So like we need a new type of create React app or create Solid app or whatever, one that has SSR in its DNA, but isn't so opinionated as a meta framework.
[01:26:55] [1] I know Solid Star has a lot of like opinionated pieces like the file system routing, but even Solid Star was actually built in such a way that the file system routing could actually feed into any router.
[01:27:06] [1] A lot of inspiration there actually from an old Veet plugin that was basically generating the FS that could be plugged into a router.
[01:27:13] [1] We kind of realized that kind of had the same goals. And at that point, it's just a toggle, like whether you like remixed off flat routing or you like more classic looking folder based routing like we use in Solid Star or
[01:27:27] [1] like I guess the old Nuxt structure or Sapper, or you like the new like I like naming all my files the same thing or putting plus signs in front of them.
[01:27:38] [1] Like
[01:27:40] [1] that's kind of like a you choice. But mechanically, you still need file system routing.
[01:27:45] [1] You can't just not include it because of the convenience that comes from, say, code splitting or automatic code splitting and bundling considerations.
[01:27:53] [1] Anyways, it's a whole other thing. But yeah, I got to plug that, so that's good.
[01:27:58] [1] And Anthony's back in yet. Astro+ anything is a solid choice regardless. That is true.
[01:28:04] [1] Well, although, I mean, you might be, if you put something exceedingly large on it, like React, you might be like sort of wasting it a little bit.
[01:28:14] [1] But yeah, Astro with anything small is a pretty solid choice.
[01:28:18] [2] I've really, really enjoyed the Astro Solid thing because I've been big on Astro for a while.
[01:28:23] [2] My blogs have been built with Astro for like three years or so. This is the first like dashboard kind of app type thing I've built with Astro.
[01:28:30] [2] The API endpoint has been working great. You know, it took me a little bit to figure out how to like use things like YTDLP in it.
[01:28:37] [2] But for me, what unlocked everything is just running the whole thing in a Docker container.
[01:28:42] [2] I don't try and deploy these things on like Netlify or anything. Like I'm running my entire app in a Docker container on Railway, and that works pretty well for me.
[01:28:51] [1] Yeah, no, for sure.
[01:28:55] [1] Yeah, it's interesting too because, I mean, I guess with your app, there's a decent amount of like, when you say like the prompts or sorry, the part we saw where you went through all the UI and went through all the selec
[01:29:05] [1] tion, that part's mostly interactive, which I imagine is where like the Solid part comes in.
[01:29:10] [1] The Astro is just like all, I guess, all the marketing pages and stuff around it, like the major branding.
[01:29:15] [2] No, the Astro is for the API endpoints because we need to call out to
[01:29:22] [2] , you know, Assembly AI's endpoints or OpenAI's endpoints or use like the first thing, like YTDLP needs to download the video.
[01:29:29] [2] So there's a server running in the backend. That server is a Docker container running Astro API endpoints.
[01:29:34] [1] So mostly, okay, yeah, yeah, okay. Interesting. Yeah, I mean, the funny thing is.
[01:29:39] [2] Like I said, it started as a Fastify backend. So it's like, it was like a node server that I had to port to Astro API endpoints.
[01:29:44] [2] And it eventually got there. It took some work, but it got there.
[01:29:47] [1] Yeah, I don't think people use Astro enough like that. They realize like Astro kind of, funnily enough, because it does more, but.
[01:29:55] [2] It became the opposite of its marketing. Like it used to say, "Astro is for content, not for apps.
[01:30:00] [2] " And then it made it a thing for apps. It's so funny.
[01:30:02] [1] Right, yeah. But it's just like once you use it as like an, as I said, like the API endpoint standpoint, it's one of the easiest ways just to lean up a server and just go like, "Okay, here's a file, do the thing.
[01:30:12] [1] " And it's like, "Oh, I need a page, do the thing." Like I think what makes Astro attractive is how quickly it can go from just being like, you know, "Here's an endpoint with some API," to like, "Here's an endpoint that's
[01:30:23] [1] HTML," or to, "Here's an endpoint that has an app on, like a Solid app on it." Like that transition from those three steps is very rapid and almost effortless, where in most solutions, going from the first one's easy, right
[01:30:37] [1] ? You pull in Express or Hono or even H3 or whatever, you can get an API endpoint up.
[01:30:44] [1] And then you go, "Okay, I need to serve some HTML." And you're like, "Okay, that's not too hard."
[01:30:48] [1] You know, but then when you're like, "Okay, now I need to bring in
[01:30:54] [1] a small view thing or something or whatever, pick a framework," you know, like now you're like, "Okay, well, I have to bundle this," or, "No, maybe I'll just use like the standalone mode.
[01:31:02] [1] " But like you're suddenly like, the jump isn't smooth. Astro makes it so that you can go from like basically basic HTTP all the way to like, you know, here, I just, like, it's funny, like in some of those cases, you might
[01:31:14] [1] not need Astro anymore, like you just made a single page app. But the fact that Astro can just go from like, "I'm fully backend with some dumb stuff," to "Now I have a single page app running out of Astro in just one go
[01:31:25] [1] without you having to worry about stuff" is incredible. I think that's.
[01:31:27] [2] That's exactly how mine's set up. I have like 10 API endpoints and I just have the single page app, which is the Solid app.
[01:31:33] [2] And there is a front page as well, but it's been super easy to do, yeah.
[01:31:39] [1] All right.
[01:31:40] [2] RyanGPT.
[01:31:42] [1] Yeah, yeah, yeah.
[01:31:45] [1] You showed this off in the Discord a while back and I was just like, "What? What is this?
[01:31:49] [1] "
[01:31:49] [2] Yeah, so this is something that I have wanted. And then I, again, use your streams as a test case.
[01:31:58] [2] So there's this thing called, there's two ways to do this. There's what's called embeddings and then there's fine-tuning models.
[01:32:04] [2] I have not fine-tuned a RyanGPT model yet, but that's coming next. That's coming soon.
[01:32:10] [2] So right now what I'm doing is I'm using something called embeddings, where basically you can take a ton of text that would be too much text for an LLM's context window.
[01:32:19] [2] So you already see how a single stream of yours is already pushing the bounds of what these LLMs can handle.
[01:32:26] [2] So if you wanted to work with it in terms of a hundred streams, you need a whole different way of doing that.
[01:32:31] [2] So that gets into things like embeddings, vector databases, all this kind of crap.
[01:32:36] [2] How this all works under the hood is not super duper important. Basically, there's just ways to turn text into something that LLMs can understand that then you can have it kind of search through like it's a database.
[01:32:46] [2] It can kind of read through all of your streams. It can pull out bits and pieces of information from different ones.
[01:32:52] [2] It can then assemble them into an answer to a query. So what I did is I built an interface where you could ask it a question and it would use the sum total of all of your transcriptions and show notes to give you an ans
[01:33:06] [2] wer. The idea being that it would be a better answer than if you just asked ChatGPT directly.
[01:33:10] [2] If you just asked ChatGPT, that's actually what we should do. I should ask ChatGPT with and without the RyanGPT bot.
[01:33:18] [2] And it would just give you a kind of very generic answer versus if you ask it, you know, with what you got, then it should give you a more specific answer.
[01:33:28] [2] So just probably, let me
[01:33:33] [2] fix it. That's a question for you.
[01:33:37] [1] Yeah, yeah, I've answered this before. Defensifying being breaking change, only in the configuration on the surface, but
[01:33:45] [1] it's less,
[01:33:49] [1] yeah, mainly a configuration change, but it will also affect like maybe how we approach adapters.
[01:33:55] [1] So it's on the deployment side. It won't break the code in your app per se, like we're not changing API there.
[01:34:00] [1] It's more of like how it gets deployed maybe and how it, like you configure the config file.
[01:34:08] [1] Okay, sorry.
[01:34:09] [2] You can flip over to my screen now.
[01:34:11] [1] Yeah, sure, sure.
[01:34:13] [2] All right, so this is RyanGPT. This is not yet deployed. I still got to figure out a couple of things in terms of how the embeddings are going to work in terms of the deployment version.
[01:34:24] [2] But if people want to clone this down, it's just a Solid Star app, so it should be very simple for you to do.
[01:34:28] [2] This is actually one of my most starred repos, by the way, just because you shared this.
[01:34:32] [2] So thank you for that. Every RyanCon you know I should ever summarize and turn into embeddings for chatting with.
[01:34:39] [2] Stupidly written description, but that's basically correct. So you can do this with a CLI also, because I kind of built in the auto show CLI into it, so you could do that.
[01:34:50] [2] And the question I asked it in terms of the README is why Marco is the most underrated framework ever.
[01:34:55] [2] And it gives this extremely long and detailed answer, but I don't want to go into that right now.
[01:35:00] [2] I want to just do this first question. So I'm going to ask it, what is immutable signal?
[01:35:05] [2] And we're going to compare the answer we get from RyanGPT with ChatGPT. So while that's running, ChatGPT says, "Immutable signal generally refers to a signal or piece of data that can change over time and be updated by some
[01:35:16] [2] processor system. The specific meaning of mutable signal can depend on the context.
[01:35:22] [2] " And then it kind of goes in and gives you different interpretations. And it gives you some code examples.
[01:35:27] [2] It also gives you some examples that have nothing to do with, you know, solid like engineering and physics, you know?
[01:35:33] [2] So it gives you a bunch of stuff that has nothing to do with what you really want.
[01:35:36] [1] Processing? What's the first answer? Just out of curiosity.
[01:35:39] [2] Yeah, so in programming, immutable signal is a reactive variable that holds a value and can be updated.
[01:35:44] [2] See, that's just a signal. Other parts of the program can just subscribe to it and automatically react when its value changes.
[01:35:49] [2] And then it gives you examples. You do get listed first, Solid JS, Salt Stores, MobaX, React, values, state, key trays.
[01:35:58] [2] You can both read and write its value.
[01:36:01] [1] I see.
[01:36:01] [2] So do you think that's a good answer or kind of an answer?
[01:36:05] [1] It's, yeah, yeah.
[01:36:08] [2] So now let's look at, let's see what RyanGPT gave us. So RyanGPT said, "Immutable signal is a reactive state container that lets you update its inner value in place rather than forcing you to replace it with a completely
[01:36:19] [2] new value every time. In other words, while a regular or immutable signal might require you to create a new value on each change, ensuring that every update is a new reference, immutable signal is designed so that you can
[01:36:31] [2] modify its contents directly. Despite these in-place mutations, it still remembers its dependencies and notifies any observers or computed values that rely on when change occurs.
[01:36:40] [2] " So is that correct?
[01:36:43] [1] That's a better answer, yeah, because I don't, yeah. I mean, immutable signal isn't really a thing per se, but yes, because it's actually a container of signals.
[01:36:56] [1] But I think the question kind of, like this is the right answer.
[01:37:00] [2] This is the more correct answer.
[01:37:02] [1] The right answer.
[01:37:02] [2] If it's in the context of Ryan Carneado's work, you know?
[01:37:06] [1] Yeah.
[01:37:07] [2] So yeah, so there you go. So that's RyanGPT. I gave it all transcripts ever, and we can see that in the thing.
[01:37:14] [2] If you go in here, you can go into, and this is still pretty rough. I'm going to update, like right now this is, I just had an on-deck thing because there's some that I hadn't quite run yet, but that's no longer needed.
[01:37:25] [2] I've run all of them now. So I separated them into years, and then you have a markdown file for each.
[01:37:31] [2] I had to update this. The last one is so long, Silicon Valley. And then I just drop in the raw auto show output.
[01:37:37] [2] So at this point, this should look familiar to people. You got your front matter, episode description, summary chapters.
[01:37:44] [2] And I had to break these up into multiple parts, even though I was generating these with O1, so I was getting these in one shot.
[01:37:51] [2] The embeddings can't take the full thing at once. So you have to break these down into smaller files.
[01:37:58] [2] So a lot of these are in multiple parts.
[01:38:01] [1] Yeah, I was going to.
[01:38:02] [2] All there.
[01:38:03] [1] I was going to ask, like, how do you keep this up to date? You just, like, periodically, like every few weeks, it's like, oh, just run the ones that I haven't run yet.
[01:38:09] [2] Exactly, exactly, yeah. Yeah, yeah. And then this is a higher level feature I'm going to build in auto show as a subscription thing where you subscribe to a YouTube channel, and then every time you do a new one, it will
[01:38:20] [2] just kick off that process for you with whatever prompts you select. So that will be it.
[01:38:24] [2] There'll be a way to automate this. So if you are a content creator, you could just always get new ones delivered to you as you push out new content.
[01:38:32] [1] Makes sense. Yeah, no, this is interesting. The Marco answer is very.
[01:38:37] [2] Let's look at the Marco answer. So Marco is considered the most underrated front-end framework ever because it pioneered many advanced features and techniques.
[01:38:44] [2] Sorry, go ahead.
[01:38:44] [1] Actually, that's interesting as this is. Can we ask a specific question? Like, can we go back to the other.
[01:38:50] [2] I want you, yeah, I wanted to just have you give me questions. I want you to feed me some questions.
[01:38:54] [2] So let's do that.
[01:38:59] [1] Why is fine-grained rendering better than a virtual DOM?
[01:39:05] [2] That's a great question.
[01:39:09] [2] And this will take roughly 10 to 20 seconds to run, just because the LLM processing part itself just takes a certain amount of time.
[01:39:17] [2] So you can only make it so snappy. Fine-grained rendering focuses on updating just the very specific pieces of the UI that actually changed rather than re-rendering whole sections or even full component trees.
[01:39:27] [2] I didn't do that. So that's a pretty good answer. In a virtual DOM system, every update triggers a diff between old and new virtual tree and then patches the real DOM based on those differences.
[01:39:36] [2] While this differing process can be efficient in many scenarios, it still involves some overhead, especially in complex or high-frequency update situations.
[01:39:43] [2] That seems pretty good to me.
[01:39:45] [1] With fine-grained rendering implemented right, as soon as the framework tracks exactly value, that's fine.
[01:39:49] [1] Let's keep on going. I want to see if it gets any of the harder nuance.
[01:39:53] [1] Lower CPU uses. Okay, let's keep on going. Reduce memory, faster overall, the finger in our division office.
[01:39:59] [1] Okay.
[01:40:00] [2] So that's all good, actually. So let's add to the question of go into extreme depth on specific use cases.
[01:40:09] [2] Let's try that.
[01:40:11] [1] Because I want to see if it actually gets that, like things like stores,
[01:40:17] [1] like
[01:40:18] [1] can basically cause the fine-grained updates without rerunning like everything in between.
[01:40:24] [1] I don't know if it'll actually get there.
[01:40:29] [2] Let's see.
[01:40:31] [2] So this is going to be mostly the same step. Let's start. Let's take a look from here.
[01:40:37] [2] Checks exactly which piece of state you're using each UI fragment. Instead of performing a diff between two virtual trees, they automatically know that updating one state variable only affects specific DOM nodes.
[01:40:47] [2] Use case counter or form input updates consider an application with multiple independent form fields with fine-grained activity.
[01:40:53] [2] If one input's value changes, only the DOM node directly bound to that. So this is kind of just describing the same thing.
[01:41:00] [1] Okay, I got a better question.
[01:41:03] [2] Yeah, okay.
[01:41:05] [1] Why will the React compiler never be as good as signals?
[01:41:13] [2] See, this is good. I like asking LLMs like a given opinion on things because this is where they have to actually make an argument for something.
[01:41:23] [2] It might equivocate and be like, well, maybe it won't be. React's approach is fundamentally built around a component re-render model and an immutable data philosophy.
[01:41:31] [2] The React compiler, no matter how many optimizations it incorporates, must ultimately work within this paradigm.
[01:41:37] [2] In contrast, signals offer fine-grained reactivity by tracking individual data dependencies and updating only the parts of the UI that truly depend on a change value.
[01:41:51] [1] B
[01:41:53] [1] ecause of inherent overrise of signal nodes who would depend on can propagate change to those consumers avoiding unnecessary recomputation.
[01:41:59] [1] Is there anything, is that the end? No. Now, I'll throw this away. It's on the React boilerplate.
[01:42:03] [1] It cannot finally do all the React render logic without its core mentality.
[01:42:14] [1] That's pretty acceptable. Yeah, it's just funny because I would.
[01:42:18] [2] So you wanted to go into further depth, though. You wanted to give a longer, more complete answer, which is something that I can build into the prompt.
[01:42:25] [1] Yeah, it's not about the length. It's about like highlighting like the really crux things that it can't do.
[01:42:35] [1] That's why I asked the question like that. But it's fine. Like that answer is pretty good.
[01:42:39] [2] Okay, cool. Yeah.
[01:42:40] [1] Like basically what I was thinking of, I recently did a video where I did the myths about signals, which is not my stream content exactly.
[01:42:46] [1] But I was.
[01:42:48] [2] That's a good one. What are the biggest myths about signals?
[01:42:52] [2] Keep going, though. Say what you're saying.
[01:42:55] [1] But it was like those questions are really good questions to test because they're very tricky, like the specific ones.
[01:43:02] [1] Like one of the biggest myths, in my opinion, is just adding signals to a solution is making it slower.
[01:43:12] [2] Okay, so the biggest myth that says that signals are a brand new concept, whereas they're actually go back to older, like knockout.
[01:43:19] [2] So that's important context. That's a good answer, I think. Myth, signals automatically eliminate all unnecessary renders.
[01:43:26] [2] What do you think about that one?
[01:43:31] [1] Okay, that's fine.
[01:43:33] [2] Okay. Signals are too low-level or complex for day-to-day use.
[01:43:37] [1] That's definitely a myth. Yeah.
[01:43:40] [2] Yeah. Signals require a total rewrite of existing application
[01:43:45] [2] s. I think myth five is what you were referring to.
[01:43:48] [1] Yeah, there's a concern that, take it a minute. Okay, yeah. Sorry, I want to read four for a second.
[01:43:53] [1] In reality, projects can influence adoption strategies. Signals can introduce an isolate part of the application
[01:43:58] [1] with proteins across grand scenes. Okay, that's true. Like ViewVapor can work inside of the DOM library.
[01:44:02] [1] Signals are definitely going to show it. But signals also come with their own trade-offs.
[01:44:06] [1] For example, bookkeeping track in a small independent VC, but less impactfully reducing the benefit of fine-grained updates.
[01:44:15] [1] Yeah.
[01:44:20] [1] Okay.
[01:44:23] [1] Okay. Okay, I got one more question. This might piss off some people in chat.
[01:44:27] [2] We need way more than what we just made.
[01:44:30] [1] Why will signals in Solid always be better than they are in Preact?
[01:44:40] [2] That's hilarious.
[01:44:44] [2] Yeah, and the idea here is that this should be based on the arguments you have made in the stream.
[01:44:50] [2] So that's why I knew that I had to actually get you and get some FaceTime to get you to ask these questions so I could not possibly come up with these.
[01:44:59] [1] Yeah, it was designed.
[01:45:00] [2] You should kind of read them out kind of for the audience.
[01:45:02] [1] Yeah. Signals in Solid come out ahead because Solid was designed with ground up with fine-grained reactivity.
[01:45:07] [1] And Solid signals aren't just an add-on. They're baked into the system and even into the compiler.
[01:45:10] [1] This allows Solid to eliminate extra layers of abstraction like virtual DOM diffing that libraries like Preact must contend with.
[01:45:15] [1] Here are a few reasons. Core design solids. Entire rendering models built around signals and fine-grained rendering.
[01:45:19] [1] Every piece of state is tracked at a very low level when signals change on the minimum update.
[01:45:22] [1] In Preact, contrast starting as a virtual DOM renderer and it's integrating signals to topics within the existing framework.
[01:45:26] [1] The extra visceral layer means that Preact signals can never fully escape the overhead or constraints of the system originally designed to rerun the compiler's wholesale.
[01:45:33] [1] That's compiler optimization. Solid's compiler's way of signals to start transferring code into direct DOM updates.
[01:45:37] [1] Hardwire that updates the code. This means extra bookkeeping work. So Preact signals on the other hand, it's written in the runtime that's built to support diff-based cycle.
[01:45:44] [1] Even if signals reduce the number of updates, it cannot completely remove the only consequences.
[01:45:49] [1] I mean, Preact has a few places it can optimize there. Okay, granular ownership.
[01:45:54] [2] So it's mostly right, but like you could quote more details.
[01:45:56] [1] Yeah, yeah. This enables precise isolated because the CSS levels on the virtual DOM can be changeable with workarounds.
[01:46:02] [1] Minimal level of design. Time philosophy solid is updating signals are adopted.
[01:46:06] [1] Extra re-entry on warranty and press signals are new additions. So while they may bring some granularity to their development and ecosystem originally.
[01:46:13] [1] But come up re-entry. Also true. In summary, Solid is built around signals with the compiler.
[01:46:17] [1] It's like being leaner, more predictable, more efficient. Preact signals are very prompt and you hear some of the constraints of the actual overhead of the original design for the fine-grained core.
[01:46:24] [1] Yeah, I like it.
[01:46:26] [2] Cool. Yeah, I know. That's a really good question. And I just think it's definitely giving you a high-level answer.
[01:46:34] [1] Yeah, I mean, this is good enough.
[01:46:36] [2] It hits the right main topics.
[01:46:39] [1] I literally have people just spout the absolute garbage on Reddit. Like whenever, like, and I have to correct them.
[01:46:46] [2] They say this is better than at least garbage Reddit human output.
[01:46:50] [1] No, no, but what I mean is like if I could just literally take any of their questions.
[01:46:55] [2] Just give them a list.
[01:46:57] [1] It would be like, it would be great. It would like save me time because I'd say.
[01:47:01] [2] You're wrong. Go spend some time with Ryan GBT to learn why.
[01:47:05] [1] Yeah, I mean, pretty much because it's just like, you know, like, yeah, I mean, just.
[01:47:11] [2] Dev says Twitter reply bot, yeah.
[01:47:13] [1] Twitter reply bot, yeah. Yeah.
[01:47:14] [2] I love that idea. I'm going to take that, Dev.
[01:47:19] [1] Yeah.
[01:47:21] [1] On a Reddit reply bot. Yeah, I mean, it just, there's always just like stuff that like, I mean, obviously I have my opinion, but it's like, it's just like, I don't even know what it's grounded on.
[01:47:31] [1] See, when you read something like that, you know, it includes a lot of my expertise.
[01:47:36] [1] So it sounds smart. Like it sounds like it knows what it's talking about. It has references to examples.
[01:47:41] [1] So like.
[01:47:43] [2] So it succeeds. That's awesome to hear. Because this is the thing that I was like, I was looking at some of the outputs.
[01:47:49] [2] I was asking some questions I thought would be interesting. And, you know, I was like, all right, this is actually pretty good.
[01:47:53] [2] I'm trying to get some good stuff. And I'm like, I really need Ryan to actually look at this and like, you know, fact-check whether this is actually good output.
[01:48:01] [1] There's still like some little nuances, but I think when most people, and it makes sense AI looks like it, when most people read what I say, they miss those nuances anyways.
[01:48:09] [1] So like, I think the chat or the GPT thing almost does better because it probably speaks in a, like, it doesn't waste time trying to explain.
[01:48:19] [2] It doesn't worry about, yeah, the hyper-nuance kind of like, yeah, it gets, it has more of a beginner's mindset, I think.
[01:48:25] [1] Right. Which means that like, they can pull away of what I'm trying to say anyways without getting like locked or mired on like some weird thing like, why did he say that?
[01:48:33] [1] Now those details might be actually important because someone will argue it, you know.
[01:48:40] [1] Okay, I got one. Sorry, can I open it one more?
[01:48:43] [2] Yeah.
[01:48:44] [1] Sorry. I don't know why I'm so adversarial, but these are the kind of things.
[01:48:47] [2] No, I wanted you to be adverse. This is the whole point of the stream, bro. This is for me to get you to ask adversarial questions.
[01:48:55] [1] Right. Because like, the thing is, people will say stuff and then.
[01:49:04] [2] All right, hit me with it.
[01:49:10] [1] I'm trying to think of the best way to phrase this question, but like, isn't SolidJS just view?
[01:49:18] [2] Just view? What is view signal thing called?
[01:49:24] [1] Composition API.
[01:49:26] [2] Just view composition. Because I want to be specific about that, like the signal part of view.
[01:49:32] [2] Because that will give it a better answer if we give it that kind of context.
[01:49:36] [1] It's because like,
[01:49:39] [1] I'm wondering if it can summarize because sometimes I do leave it on.
[01:49:45] [2] All right, go for it.
[01:49:48] [2] And you should read it a little slower for the audience.
[01:49:50] [1] Well, SolidJS and views composition share the idea of using reactive parameters.
[01:49:53] [1] Signals in SolidJS and reactive in view are not the same things and different significant in their approaches and architecture.
[01:49:58] [1] Solid is built from the ground up with fine-grained reactivity in mind. It's designed to compile your JSX code to highly optimize direct DOM updates without a virtual DOM.
[01:50:05] [1] This means that each signal tracks exactly what part of the DOM to update leading to minimal runtime overtime and cost.
[01:50:09] [1] View composition API is a way to structure and organize component logic within view.
[01:50:12] [1] It leverages views reactivity system, which based on proxies and watchers to track dependencies, but views still use a virtual DOM and diffing process update the UI.
[01:50:21] [1] Essentially, the composition API gives you a nice functional way to encapsulate reactive logic, but operates on top of views broader framework architecture.
[01:50:26] [1] SolidJS takes a compile time approach where many optimizations are baked directly into the generated code.
[01:50:30] [1] This enables bypass much of the dynamic. Overhead that rely on virtual DOM typically encounter the results of an extremely efficient update cycle without needing need for a reconciliation process.
[01:50:40] [1] So while both adopt reactive programming patterns and aim for performance, Solid isn't simply viewed composition API done differently.
[01:50:45] [1] It represents a distinct design philosophy that centers on compiler-driven fine-grained reactivity and minimal runtime overhead.
[01:50:51] [1] Yeah, I don't like how it emphasizes the compiler as much. I agree. But
[01:50:58] [1] this is, I mean, ViewVapor changes this, but this is historically the correct answer.
[01:51:05] [2] Why is SolidJS not just dependent on a compiler for its advantages? This is me kind of just trying to see what we get with this one.
[01:51:24] [2] And if people in the chat have questions, throw them out. We can ask anything.
[01:51:28] [1] Solid strains aren't just the result of compile time optimization. The real magic comes from how it's built around fine-grained reactivity model at runtime in more detail.
[01:51:35] [1] Runtime reactive model SolidJS is designed with each piece of state signal independent reactive unit.
[01:51:39] [1] When a value changes, only that part of the UI that depends on specific signals update.
[01:51:42] [1] That means updates are highly localized and efficient without diffing algorithm or fully rendered component trees.
[01:51:47] [1] Even without the compiler's transformation, the core minimizes unnecessary processing.
[01:51:51] [1] Minimal overhead by design, unlike frameworks that rely on virtual DOM diffing or ones that expect re-renders, Solid's runtime is structured to directly bind to DOM nodes.
[01:51:59] [1] Its underlying system ensures component functions run only once and establish reactive bindings.
[01:52:03] [1] The result in performance gains don't solely depend on compile time code rewriting.
[01:52:07] [1] Compiler as an enhancer, not the foundation. While the compiler and associated tooling plays an important role in stripping away redundant code and transferring JSX into optimized DOM operations, it's more of an enhancer.
[01:52:15] [1] The compiler optimization, such as static detection of non-reactive parts and wrapping only those expressions that truly change, make the final code leaner and faster.
[01:52:24] [1] But even if one were to use Solid without heavy compile magic or in environments with minimal build steps, the runtime's inherent reactivity and update management would still deliver many of the advantages.
[01:52:33] [1] Degraded owner disposal batching. Solid's runtime manages reactive skills using an ownership model that automatically cleans up once a DOM element is removed.
[01:52:40] [1] The careful runtime bookkeeping, including techniques like micro-task masking, is intrinsic to design and not something that compile step could do alone.
[01:52:46] [1] In summary, while compile time transference in Solid are highly beneficial by reducing overhead and assuming optimization, the framework's real advantage lies in runtime reactivity system.
[01:52:54] [1] The system built on signals, precise dependency tracking, and local updates ensures that SolidJS remains fast, efficient, and predictable regardless of built tool configurations.
[01:53:02] [1] Yeah,
[01:53:04] [1] it's pretty good. Micro-task batching is not a technique that we do in Solid 1.
[01:53:09] [1] 0, so it's interesting that that's got in there, but it's.
[01:53:13] [2] Ah, so that's, yeah, that's interesting. So this is trained on the sum total of all of your transfers.
[01:53:18] [2] So that means it's pulling in all the old stuff as well.
[01:53:21] [1] Yeah, yeah. Well, actually, it's 2.0 stuff. So it's actually pulling in the new stuff.
[01:53:25] [1] It's the opposite. It's pulling in the.
[01:53:27] [2] Yeah, yeah, yeah.
[01:53:30] [1] Oh, geez. Dev's got a good one. I was going to, before we do devs, sorry, I got one more I want to ask.
[01:53:36] [2] Sure. Yeah, yeah.
[01:53:38] [1] Why
[01:53:40] [1] can we consider Svelte 3 a virtual DOM?
[01:53:44] [2] Interesting.
[01:53:54] [1] I mean, I would go as far as saying everything before Svelte 5. Yes, Svelte 3 and 4 are basically virtual DOM.
[01:54:03] [1] The glass Svelte 3 is a virtual DOM framework in the traditional sense. It doesn't build a tree of virtual nodes at runtime then diff on every update.
[01:54:08] [1] Instead, the magic happens at compile time. When you write a Svelte component, the compiler converts it into a low-level imperative code that directly updates a DOM when the state changes.
[01:54:15] [1] Because the generated code knows precisely which DOM parts might change, Svelte 3 achieves the same fine-grained update benefits that many virtual DOM libraries aim for, but without maintaining or diffing runtime
[01:54:24] [1] data structure. Okay. In effect, Svelte compiler takes the job of tracking dependencies and figuring out what minimal DOM indices needed.
[01:54:30] [1] Since you can say virtual DOM like because it delays many of the performance of.
[01:54:33] [1] Yeah, no, this answer is completely wrong.
[01:54:35] [2] It's completely wrong? In what way?
[01:54:38] [1] I mean, the answer should be that components in Svelte 3 still run top to bottom.
[01:54:46] [1] It uses like shortcut memorization. Like there is no independent reactivity. And so it does like shallow diffing.
[01:54:53] [1] It kind of does like dirty checking.
[01:54:55] [2] Interesting. Yeah, I would say it's probably showy with this because how much have you talked about this under streams?
[01:55:00] [1] Only in the Svelte 5 stream with Dominic Gannaway. And Dominic himself said that
[01:55:08] [1] Dominic Gannaway himself said that it's called Svelte, like before Svelte 5, a virtual DOM.
[01:55:14] [2] Yeah, so this is an example where because there's only a single stream that you talked about this, it's hard for it to pull in explicitly that information.
[01:55:22] [2] This would actually probably be one of those questions where because it's not heavily represented within your transcripts, it would be better to ask just ChatGPT directly.
[01:55:30] [2] It might actually have a better response because they could then search the internet to pull in information about Svelte that is not present within your transcriptions.
[01:55:37] [1] Yeah, to be fair, I don't think anyone will get this one. This is an opinion that.
[01:55:43] [2] It's a hard question.
[01:55:44] [1] This is an opinion that I hold and like Dominic Gannaway holds, but very few people view it like this.
[01:55:52] [1] Okay, let's try to.
[01:55:53] [2] There's a way you wish you could ask the question to get it to probably pull that out, but let's go with Dev's question next.
[01:55:59] [1] How are single flight mutations better than React server components?
[01:56:02] [2] Sorry, could you repeat that slower? How are single flight mutations better than React server components?
[01:56:17] [2] All right. Is this one that you've talked about multiple times on the stream?
[01:56:20] [1] Yeah. Although I don't know if I straight out called them better, but I'm interesting what this says.
[01:56:25] [2] Okay. If these are both things you've talked about, I'm sure you've talked about React server components a bunch.
[01:56:29] [2] So this should be one that is probably better at answering.
[01:56:32] [1] Both approaches address updating a UI fresh, but they tackle the problem from a very different angle.
[01:56:36] [1] Single flight mutations and reactive modes aren't directly alternatives for every use case.
[01:56:39] [1] They solve complementary pieces of the puzzle. Here's a single flight mutation can be better or offer advantage compared to common patterns around reactive server components coming to me.
[01:56:45] [1] One round trip autonomy. Single flight mutations combine the update and subsequent data read refresh in one request instead of sending the mutation, then make a separate query to grab new state.
[01:56:56] [1] The server returns the updated data as part of the same call. Yes. This reduces work around triplancy, meaning the UI can update immediately with fresh state, whereas reactive modes might require a more layered approach
[01:57:06] [1] for data fetching and mutation are handled in separate steps. That's not necessary.
[01:57:10] [1] Let's see. Reduced client complexity. I mean, that's the one thing React server components do.
[01:57:15] [1] They do do a single flight mutation in a sense, but okay. The single flight mutation, but having to stale state or double fetch it logic in the client.
[01:57:22] [1] That's true. The server components already, or server response already include the update data.
[01:57:26] [1] There's no need for an extra cache and validation step. Yes. Otherwise, might implement.
[01:57:30] [1] Okay, yeah. I think maybe they don't. I wonder if they don't know what React server components are, and they think, I wonder if they like recognize RSC more than React server components.
[01:57:39] [1] Like, do you think it's possible that they.
[01:57:41] [2] Let me try that. Let me pull that in and see if that gives it additional context.
[01:57:46] [2] Yeah, that's a good. If you're saying the words RSC, that's something that might be kind of getting lost in the sauce.
[01:57:51] [2] And also, what we're doing here is we're pointing out the limitations of this, and there's already some steps in terms of improving this.
[01:57:59] [2] Like, this doesn't include like your blog posts. This doesn't include content from other people talking about these subjects.
[01:58:05] [2] So there's ways to pull in more context to even improve these answers more. This is one of the reasons why I wanted to be on the stream with you to see where those issues are and see how we could actually give this more
[01:58:14] [2] info to make these answers even better.
[01:58:16] [1] This answer already looks slightly better. Single flight mutations, bundle right mutation, and subsequent read UI into one atomic operation.
[01:58:24] [1] This means that you send the mutation immediately, get back the updated view, avoiding double round trip.
[01:58:27] [1] Good. In RSC scenario, though, you're relying on the server to rerender dynamic parts of your page, you may still face extra fetch or more complex coordination.
[01:58:33] [1] For example, if your UI's data requirements are spread among several components.
[01:58:36] [1] Yes, this is the answer. Single flight mutation keeps things simple by eliminating that.
[01:58:40] [2] That's the key. You got to figure out the right context. It's just like RSC, not React server components.
[01:58:44] [1] Simpler, fewer moving parts in client. With a single flight mutation, you sort of take full responsibility.
[01:58:49] [1] Once mutation is submitted, the server re-renders just the parts that really change.
[01:58:53] [1] The client doesn't have to manage multiple caches or track separate update cycles.
[01:58:58] [1] Okay. RSC is also going to have coordination between static server rendered output and client side interactory.
[01:59:02] [1] This can lead to subtle state or caching challenges when your data is standard across components.
[01:59:06] [1] Single flight mutations are often employed as a plain server functions that return exactly the updated data.
[01:59:11] [1] This cuts down application complexity. I might have made that argument. Optimistic updates without extra fetch logic.
[01:59:17] [1] Many inflation single flight mutations can be designed for immediate optimistic updates.
[01:59:20] [1] Blah, blah, blah. Kitchen up the complete unupdated responses. Merge a mutation and fetch minimizes perceived delays and costs.
[01:59:31] [1] RSCs rely on server diffing and stream the updated tree. Well, the powerfully made demands extra care caching boundaries.
[01:59:38] [1] Okay. Better developer ergonomics for targeted data needs. When your use case is simply update something, show the new result.
[01:59:44] [1] A single flight mutation is straightforward. No need to design component structure around it.
[01:59:47] [1] Okay. React server components about thinking about server render versus client render boundaries, which can scatter data across files.
[01:59:52] [1] Single flight mutations are more all-in-one for specific transitions. It's interesting.
[01:59:58] [2] It's hit and miss kind of.
[01:59:59] [1] Yeah, yeah. In short, both approaches move towards server and strive to minimize bundle size and clock complexity.
[02:00:04] [1] Single shined in providing mutation and update in one sec, reducing round trips and easing state management.
[02:00:09] [1] They're particularly protective when you want to have a pattern without extra coordinated entire React system may base.
[02:00:14] [1] Yeah, I mean, the summary is fine. It's mostly that they're atomic, that they're granular.
[02:00:19] [1] So you can basically do multiple of these things independently without having to rely on the server components to send the whole page back on every change.
[02:00:27] [1] And when you have, they did mention this, when you have this whole page back on every change, you can have multip
[02:00:34] [1] le, you have to fetch more data than you need, like on the server, because unless you use a cache, because you're going to like hit a code path of something you didn't update, but the server doesn't know that.
[02:00:42] [1] So the server's like, hey,
[02:00:44] [1] I'm here. I need all the data I need to render this part of the page, even the stuff that didn't update.
[02:00:51] [2] I now reran that same prompt saying, emphasize how it's atomic. So we don't need to read the whole thing, but let's just read the first paragraph and see if that sounds better.
[02:00:58] [1] Single flight mutations offer an atomic all-in-one approach that causes sometimes more fragmented lifecycle React server components.
[02:01:03] [1] With single flight mutation, a mutation request to say updating data on the server is sent, processing, resolving states, return to one continuous operation.
[02:01:09] [1] The single flight ensures the update and the subsequent data fetch, reducing the chance of immediate inconsistencies or extra round trips.
[02:01:15] [1] Sure. The termination key advantage. Sorry. One transaction.
[02:01:19] [2] You read the whole thing. Go for it.
[02:01:20] [1] Just keep on going.
[02:01:24] [1] Because I think it's not getting that
[02:01:29] [1] .
[02:01:32] [1] Yeah, this is not quite right. It's tricky.
[02:01:35] [2] Yeah, so this is where it gets hard. I think as we drill deeper and deeper into specific, not only concepts, but like specific technology, because like it only has so much context about React server.
[02:01:47] [2] The only context it has about React server components is what you have provided within your own streams.
[02:01:53] [2] So that's why it's probably struggling a bit, because it would need to bring in more stuff from the internet about React server components to give a really fully complete answer, because it only knows what you have told
[02:02:04] [2] it about React server components.
[02:02:06] [1] Yeah, yeah. And more so, I think I've talked about certain subjects more consistently.
[02:02:12] [1] Like when I talk about RSCs, I'll drop a comment here or there, or just be like, oh, in contrast to this.
[02:02:16] [1] And it'll only be like these little snippets all over the place. When I talk about signals, I basically taught signals.
[02:02:21] [1] And I've done this multiple times. So like the main argument, even the stuff with like Preact or whatever, I did a whole stream on that topic specifically.
[02:02:30] [1] Like I use Preact signals to make a Preact fine-grained render and then compared it to Preact itself to show the differences, right?
[02:02:39] [1] Like that's something that it can grasp on where RSCs are more that like I did HackMDs for freaking months working on single flight mutations and stuff in the small ecosystem.
[02:02:52] [2] That would be actually the thing to not even just your blog post, but we need to pull in your HackMDs, it sounds like.
[02:02:57] [2] And that would give it far more context. Because that's the thing is, I know that I can pull in your Dev.
[02:03:02] [2] 2 posts, but it sounds like you actually have a much larger base of written content that is not that.
[02:03:09] [1] Yeah. What model is this using?
[02:03:14] [2] That's a great question. Let's go take a look. I forget. I think it's using O1 preview.
[02:03:20] [2] I could be wrong, though.
[02:03:23] [2] Yeah, so this is using a very old model, actually. It's using O1 preview. So if I use a slightly newer model, it actually might get better answers, because this is something I actually, sorry, this is in the read me.
[02:03:33] [2] That's not correct at all. So let's see, let's look at this application first. So this is a Solo Star application.
[02:03:41] [2] We have one API route, which is the query. So this is, let's see, so it's running the query embeddings utility, which is, okay, this is where the magic happens.
[02:03:57] [2] So querying the embeddings. This is back when I still wrote comments in my code.
[02:04:03] [2] I don't do it anymore. This is the embeddings API with OpenAPI, and then this is the chat completion.
[02:04:12] [2] So it is
[02:04:15] [2] , where's the chat body? Chat body. Okay, so this is using O3 mini. So this should use O3 regular or O3 pro.
[02:04:23] [2] Let me try just changing this to O3 real quick and see if that still works.
[02:04:31] [1] So yeah, that's interesting. So yeah,
[02:04:36] [1] the way embeddings work, I just, sorry, trying to understand this a bit, because you just change the model and you're instantly good to go.
[02:04:45] [1] Like how does the.
[02:04:46] [2] There's two things. There's the embeddings, and then there's the chat model you use to interact with the embeddings.
[02:04:52] [2] So the embeddings are already created. They use something called the text embedding three large model.
[02:04:58] [2] That's OpenAI's most recent and up-to-date embeddings model. So those are already generated.
[02:05:04] [2] Those are not being regenerated at any point. Those are just sitting there, and that is from the sum total of these transcription files and summaries that I've written.
[02:05:15] [2] And that's also something that the embeddings do not have access to the original transcripts.
[02:05:20] [2] They only have access to the summaries. That is a decision that makes it easier and cheaper to do, but you do lose some of the more high-level fidelity of what you are actually expressing through your own words.
[02:05:34] [2] So if we actually had the transcript for every single episode, it might give slightly better answers, but it would be a lot more expensive, which is something you need to keep in mind.
[02:05:43] [2] But then once you've generated the embeddings, those just sit there. Those exist in this like massive asset JSON file.
[02:05:49] [2] It's 436,000 lines. So that's your embeddings. It's just sitting there. Then you query it using any model you want.
[02:05:59] [2] So the different models can now interact with these embeddings that you've created.
[02:06:05] [2] And the more high quality the chat model is, the better outputs it can give. So this did work.
[02:06:13] [2] So this was using O3 regular instead of O3 mini. And I probably can now change this, I think, to O3 pro.
[02:06:21] [2] And then let's see if that still works as well.
[02:06:26] [2] Okay, so that's wrong. That's not a correct model name. So yeah, so there's a bunch of different models.
[02:06:31] [2] This is using the
[02:06:35] [2] , okay, this is just hitting the endpoint directly. So this is using the completions endpoint for people who are into this kind of stuff.
[02:06:42] [2] That's how I'm used to. So I'm not using the OpenAI SDK, but I do use the OpenAI SDK in auto show specifically.
[02:06:49] [2] So you were able to change the model just by feeding it a different model. If you go to
[02:06:56] [2] ChatGPT models docs, it will tell you the different models that were available.
[02:07:01] [2] So like if we wanted to do GPT-01, we can do that. We can just hit that copy button, and then it gives you a name that corresponds directly to it.
[02:07:11] [2] So all the models are available on ChatGPT's docs.
[02:07:16] [1] Yeah.
[02:07:18] [1] Okay. Yeah, no. Yeah. I assume there would have to be some kind of indexing, but it can just scan the giant embeddings thing.
[02:07:25] [2] So the indexing is the embeddings is what is like an indexing. It goes into a database, and it gives the model an ability to read through the embeddings.
[02:07:36] [2] But it's not an index in the same sense that a database index is, but it functions in a similar manner in terms of what it does for you, if that makes sense.
[02:07:47] [1] This description is a little longer than the last one. I don't know if I'm correct.
[02:07:51] [2] Yeah, so this is 4.0 instead of O3. So let's see. Ryan Connor was a prominent developer, educator, open source maintainer, best notes creator, lead maintainer of solid, a high performance reactive JS framework.
[02:08:04] [2] He's recognized for his deep expertise in front of web dev, especially cutting edge topics like reactivity, SSR, hydration, and advanced optimization techniques.
[02:08:13] [2] He frequently hosts lengthy technical live streams where he discusses the design evolution of solid JS as well as broader trends in the ecosystem.
[02:08:22] [2] He often dives into advanced topics such as partial hydration, signals-based reactivity, server components, and comparisons between major frameworks like React, Nextflow, Qwik, and Marco, except they spelled Marco wrong
[02:08:34] [2] with a C. His conversations feature a mix of technical deep dives, live coding sessions, and interviews with other major framework authors.
[02:08:43] [2] In addition to building solid, he's known for his open and collaborative approach, inviting community contributions and fostering cross ecosystem discussions about web dev practices and future directions of frameworks.
[02:08:54] [2] He plays a key role in shaping new patterns for fast, scalable, and developer-friendly web applications.
[02:09:01] [2] In summary, he's a software engineer, educator, and open source leader, creator of solid who produces educational content about advanced front-end technologies and actively participates in the evolution of.
[02:09:12] [1] There we go. That's my conference talk description now. I just need to take that slide.
[02:09:17] [2] It's a pretty good bio. That's a pretty good bio. That's pretty solid. I would use that.
[02:09:23] [1] Yeah, yeah. It's funny because they always ask you for a summary, and I'm always like, what do I say?
[02:09:27] [1] I'm like,
[02:09:29] [1] performance enthusiast and reactivity super fan.
[02:09:35] [1] But
[02:09:37] [1] there you go.
[02:09:38] [2] Let me respond to a couple things here in the chat. So someone asked what model is it using, if it needs O3 minimum to consume more data.
[02:09:45] [2] Yeah, so I kind of went into that a little bit. I think you always kind of want to go with, if you want the best outputs, you want to use the best, most current model, really.
[02:09:54] [2] It's always going to be usually the most expensive, but it's pretty legit. And then would broken up embeddings help you think?
[02:10:02] [2] So that's a big question. I do not quite have the answer yet to. It's a very, very important question.
[02:10:09] [2] So I started with breaking them up enough so it did not break the embeddings generation.
[02:10:17] [2] So basically, I would just, I start with every episode. I ran them all. It would tell me which episodes were too long, and then cut those episodes in half.
[02:10:24] [2] Similar thought process when you're asking me, why is it two and a half hours? Like, this is too big, so I cut it in half.
[02:10:29] [2] So it's a similar thing. Now, it may be the sense that I could create embeddings where every chapter is an embedding instead of an embedding is just two episodes.
[02:10:39] [2] That might give a better response. I don't know the answer to that yet. So that's experimentation I still need to do.
[02:10:45] [2] And then somebody here has a funny comment. If devs in general don't understand RSC, then the LLM won't either.
[02:10:51] [2] This is such a key point because
[02:10:54] [2] all LLMs are trained on human data. If there's a bunch of humans out there saying stupid crap about RSCs, the LLMs are going to say stupid crap about RSCs.
[02:11:04] [2] They do it about all sorts of topics. You ask it who killed JFK, it's going to say Lee Harvey Oswald.
[02:11:09] [2] You know? So it's trained on the data it has.
[02:11:15] [2] Would graph rag help? You have to tell me what you mean by graph rag, dev.
[02:11:21] [1] You guys keep the questions going. I actually have to step away for two seconds.
[02:11:24] [1] Just ask Anthony a couple questions. I'll be right back.
[02:11:26] [2] Yeah, so it looks like graph rag. I see two different things here. I see a Microsoft thing, which is a modular graph-based retrieval augmented generation system.
[02:11:37] [2] Yeah, so I'll talk about rag real quick. Instead of embeddings, so what's Dev is saying here is that instead of just embeddings, it builds a graph of knowledge that links together concepts.
[02:11:48] [2] So it's a knowledge graph, which is a thing that has existed for many decades. I don't know.
[02:11:55] [2] I haven't tried that yet.
[02:11:58] [2] For people who are confused by the terms that are coming right now, rag is something called retrieval augmented generation.
[02:12:06] [2] Ryan GPT is rag. So what I've showed you is essentially a rag implementation. So if you've ever heard that term, you don't know what the hell it is.
[02:12:15] [2] You just saw it in real time. It's taking all of those files that have all of the transcription or not the transcriptions.
[02:12:22] [2] It's taking all of the files that has the summaries and chapter headings for each episode.
[02:12:26] [2] And it's creating a numerical representation of all of that text. And then it's allowing you to retrieve things from it to augment the generation of your text output.
[02:12:41] [2] So that's what the term retrieval augmented generation means, because you're augmenting your answers by giving it a base of knowledge it can retrieve things from.
[02:12:53] [2] And so someone's asking, does the vertex database come into that? So
[02:12:59] [2] it's a vector database, not vertex. That may just be a typo, but a vector database is what allows you to take those embeddings and stick them in a database.
[02:13:08] [2] So what I showed was a JSON file that has all the embeddings. So there's no vector database implementation with this.
[02:13:15] [2] But for auto show, the app, there's a vector database implementation that uses Cloudflare's Vectorize.
[02:13:22] [2] Actually, just did a stream a week or two ago with Dev about this. We talked about rag and vector databases in extreme detail.
[02:13:29] [2] There's SQLite, SQL Vec, VC. There's PG Vector for Postgres. And then there's Vectorize, which is Cloudflare's hosted vectors.
[02:13:40] [2] I really, really, really recommend Cloudflare's Vectorize. It's awesome. It does the chunking for you.
[02:13:45] [2] It figures out how to break down your different files. So there's a whole lot of stuff that you get from that.
[02:13:51] [2] So what we saw here is like the most dumbass way you can create embeddings with literally just writing them to a JSON file.
[02:13:59] [2] That's not really scalable. What you want is a vector database as is being asked here.
[02:14:04] [2] So that is the type of stuff. If you're trying to scale this up, you want to look into things like PG Vector or Cloudflare's Vectorize.
[02:14:15] [2] Cool. And that's pretty much my whole presentation.
[02:14:18] [1] Very, very, very cool. Is there anything else you want to plug?
[02:14:22] [2] I mean, Dev wanted me to talk about Redwood SDK just a little bit.
[02:14:27] [1] Sure.
[02:14:27] [2] I am not super involved with it. I had Peter on my stream to talk about it. If you want to talk to a framework creator working on a cool framework, you should get Peter on to talk about Redwood.
[02:14:37] [2] It's about leveraging Jest, React, RSCs, and Cloudflare. It's essentially about combining those to create a framework that does all the stuff Redwood did for you before, but without GraphQL and without serverless function
[02:14:53] [2] s, which were like the whole basis of the framework. The entire framework has been rewritten into a very, very basic, simple type of React Cloudflare setup.
[02:15:05] [1] No GraphQL.
[02:15:08] [2] No GraphQL. GraphQL is gone. GraphQL is dead. Shot in the head. They took it out back.
[02:15:12] [2] They said, sorry, it's over. You're sick. You got to go.
[02:15:18] [1] I was not expecting that. I mean, I don't know what people build with
[02:15:23] [1] Redwood these days.
[02:15:24] [2] I did a terrible job the last time I was on then, because that was kind of the whole point of our stream is that.
[02:15:28] [1] Yeah, yeah.
[02:15:29] [2] It's beyond GraphQL to use Jest React Server Components.
[02:15:33] [1] Yeah, I mean, I think at the point of stream, they had just introduced it.
[02:15:40] [2] Yes.
[02:15:40] [1] But.
[02:15:40] [2] They weren't able to fully say we're giving up on GraphQL forever, because every Redwood app previously was built on GraphQL.
[02:15:47] [2] So it was kind of a hard pill to swallow, I think, for people who already had all these apps built on it.
[02:15:52] [2] But that was the direction they were going. It's been clear for like two years, but it's been like explicit within the last six months.
[02:15:59] [2] So they're like, this new framework is called Redwood SDK. So it's a new site. It's totally new branding, and there's no GraphQL whatsoever.
[02:16:08] [1] Yeah, okay.
[02:16:09] [2] You don't even need to use Prisma. It comes with Prisma just kind of as like a legacy thing at this point, but it's really just a React framework that integrates with Cloudflare.
[02:16:17] [2] It's pretty cool. You actually might be really into it.
[02:16:19] [1] Yeah, I mean, it makes sense from the fact that Redwood was always about
[02:16:25] [1] coming up with a combination of pieces to make you productive. So they're just like, okay, Redwood version two.
[02:16:32] [1] It's like a different thing. I talked to Theo about this way back. I'm like, don't you, I mean, I love your piece-wise approach, but even your piece-wise approach, being that opinionated, will get outdated at a certain point
[02:16:43] [1] . It's just like.
[02:16:44] [2] Exactly.
[02:16:44] [1] It's just science, right? And I think that just the more opinionated it is. So they just did a refresh.
[02:16:52] [2] And they dialed the opinions way back. Yeah. The only opinion now is Cloudflare.
[02:16:57] [2] It doesn't work with other deployment platforms. So it's highly locked into Cloudflare, but I think it does it in a way that actually makes a lot of sense.
[02:17:05] [1] Right. It's just going all in on RSCs is a thing. I mean, that's a whole other topic.
[02:17:09] [1] It's fine. I can talk about that later.
[02:17:11] [2] That's why you should have Peter on to talk about it. I think you two would have an extremely productive conversation about it that I am not capable of having.
[02:17:19] [1] Right. Very, very cool. Yeah, okay. So that's that. And I think we went through all the questions for you.
[02:17:28] [1] So I guess the other question is, is there anything else you want to plug specifically, Nad?
[02:17:35] [2] No, I mean, all the stuff on the show is all the stuff I want to plug. People can check out autoshow.
[02:17:38] [2] app for the official thing if they want to sign up for that. I'm at ajcwebdev everywhere on the internet.
[02:17:46] [2] And yeah, if people thought this was cool, Anaxia said this has been really cool, learned a lot.
[02:17:52] [2] So super happy about that. I definitely had a blast. I'm happy to stay on for a little bit of this week in JavaScript if you want to transition into that.
[02:18:04] [1] Let me think here, because I actually don't have a ton of this week in JavaScript.
[02:18:07] [1] So I might actually be just deep diving into my theoretical stuff now, which probably is less.
[02:18:12] [2] Cool. Yeah, I can hop off then, but I'll still be in the chat and watching.
[02:18:16] [1] Yeah, sounds good, sounds good. Thanks for coming on again. And I've learned a lot.
[02:18:21] [2] Great.
[02:18:22] [1] I feel like I need to get my hands on these tools to actually do the thing. I feel like because I've been the guinea pig, if I want the look, I could probably find pieces already partially done and I could throw up.
[02:18:34] [1] Because the situation I'm in right now is I'm at a deficit. I'd like to use the stuff moving forward.
[02:18:38] [1] I just have like three or four streams that don't have subtitles right now that are timestamps that I need to catch up on.
[02:18:44] [2] I'll hop into the Discord and I'll just write a couple of the commands for you just so you can kind of see if you want to run this yourself.
[02:18:49] [2] I'll give you just a quick startup script. So then you can just let me know if you hit errors kind of building it on your computer.
[02:18:56] [2] But yeah, it should be pretty simple for you to use the stuff I've shown.
[02:19:00] [1] Awesome. I'm looking forward to it. So much time saved, even if they're not super accurate.
[02:19:05] [1] I know that was a concern earlier in the stream. But for me.
[02:19:10] [2] Yeah, you'll need to read through them and edit them, but they should cut your time down by at least a couple hours.
[02:19:15] [2] That's the goal.
[02:19:16] [1] Yeah, yeah. No, that's awesome. This has been great.
[02:19:19] [2] Cool, man. Well, thank you so much for having me. Thank you, everyone who's in the chat.
[02:19:23] [2] Lots of friends out there watching. So I really appreciate it. Always have a ton of fun on here.
[02:19:27] [2] So yeah, catch you guys next time.
[02:19:29] [1] All right. See you, Anthony.
[02:19:32] [1] That was good. I wasn't sure how it was going to be like doing kind of like a
[02:19:39] [1] yeah, Ryan GPT has been fantastic.
[02:19:42] [1] Doing something a little bit on the AI side, because I mean, I think it showed I literally know nothing about AI.
[02:19:50] [1] I use it to, as I said, Copilot and
[02:19:56] [1] to occasionally generate stream covers. Like the stream cover that I have for this one
[02:20:03] [1] was generated. But I actually ran out of my like was it like the open art or whatever?
[02:20:08] [1] I ran out of credits, free credits on there. And I didn't even bother buying them.
[02:20:11] [1] I just like went to the next free service. I think I actually made the stream cover on Canva or something.
[02:20:20] [1] AI coding with Dax, I mean, I would do that definitely. I mean,
[02:20:25] [1] I just don't I know like I don't even know if it's valuable teaching me this stuff at this point
[02:20:33] [1] . Yeah, he's a terrific team on the stuff. It's great to see him demo and showing it.
[02:20:38] [1] Yeah, yeah. And it sounds like he's got an approach. I mean, it's always tricky.
[02:20:42] [1] I mean, because as I said, I do watch enough of Theo's stuff to know that when you create stuff that targets content creators, it's like a tricky market because of the niche.
[02:20:51] [1] He always talks about the mistakes he made with Ping. But it sounds like there's like a maybe more general purpose thing here as well.
[02:20:59] [1] So I think that's interesting, right? Yeah, Dax would be a great topic for AI topics.
[02:21:04] [1] Yeah, for sure.
[02:21:08] [1] Dax's use case, at least when he was working a lot with the Zero and Replica stuff, has actually been something that's been on mind a lot.
[02:21:16] [1] So I'd like to get to a good place where I could both
[02:21:20] [1] learn AI from him and then show him also how
[02:21:24] [1] I've been solving his problems with Solid. Because he's a big early adopter of Solid and honestly
[02:21:32] [1] been very helpful to me personally. Just people you meet. I met Dax originally through, I guess, like Theo and those group of people.
[02:21:42] [1] Maybe I'm trying to remember. And he also very quickly got into the Solid bandwagon, which was huge.
[02:21:49] [1] And when I was like trying to figure out my next steps here, he's actually the guy who connected me with David, how I ended up at Sentry.
[02:21:57] [1] So
[02:22:00] [1] yeah,
[02:22:02] [1] definitely
[02:22:05] [1] would like to do some stuff. For a while there, he was doing some content and I was actually going to go on it.
[02:22:10] [1] But I don't think I'm that funny. He was doing that Between Two Trees thing he did with a bunch of people.
[02:22:15] [1] I was at one point going to be a guest on that. And then it was kind of like I realized that, yeah, maybe I wouldn't be the best person for that
[02:22:24] [1] .
[02:22:30] [1] I don't even know what this means, fuzzy. If Ryan took to AI SDKs, we will hit AGI a lot, fucking senior.
[02:22:37] [1] I don't
[02:22:41] [1] yeah. What's AGI? Artificial General Intelligence. Okay. Interesting. Yeah. Guess speak a different language than me.
[02:22:57] [1] No, Dax is awesome.
[02:23:02] [1] Yeah. No.
[02:23:05] [1] Okay. So I'm glad everyone's still here, still live.
[02:23:12] [1] I do have a little bit of this week of JavaScript that I'll get to in a bit. But I wanted to talk about kind of an afterword, a little cap up of the topic last week.
[02:23:22] [1] First of all, I got to say it out here. We were kind of mind
[02:23:28] [1] kind of doing a mental experiment on mutable reactivity and what behaviors and characteristics it should have, right?
[02:23:36] [1] And
[02:23:38] [1] if you remember, we talked about this stuff, right? I realized that I was slightly wrong about Svelte.
[02:23:44] [1] And actually, I think Svelte's model
[02:23:49] [1] is kind of might be the right balance. Because I showed off a really cool model last week that was super, super powerful and did everything I wanted in terms of the behavior of mutability.
[02:23:59] [1] But let me see if I can go back to when I first talked about
[02:24:07] [1] where
[02:24:08] [1] favorite feature. Yeah, yeah. In the responses here, yeah, Theo gives a nice example.
[02:24:16] [1] And I use this example to show how Svelte doesn't retain. I mean, we don't really care about anything below here.
[02:24:30] [1] So I'm just going to get it out of here. Actually, I got to keep the script tag, I think.
[02:24:37] [1] Svelte doesn't really care about references. So there was this thing where I said, you know, A equals reference, B equals reference.
[02:24:44] [1] And then we realized that A doesn't equal
[02:24:50] [1] A equals A, but A doesn't equal B.
[02:24:57] [1] And that
[02:25:01] [1] actually, I guess in our example, it should be true.
[02:25:07] [1] But you see how
[02:25:13] [1] where is it
[02:25:15] [1] ?
[02:25:19] [1] You see how when you at the end, when we've updated everything, that B
[02:25:27] [1] that A doesn't equal B and that B is 3 and A do when we write to it. What I did learn, though, is if in Svelte, if we go S.
[02:25:38] [1] A directly, they do end up being the same and they do end up equaling. So
[02:25:49] [1] ignoring this warning that they're talking about here, whatever.
[02:25:55] [1] As long as you don't keep the same external ref, like as long as you directly assign them, Svelte actually does
[02:26:03] [1] keep references. It's only the external ref that doesn't keep,
[02:26:08] [1] which is
[02:26:11] [1] reasonably sane behavior, right? You know that SA isn't going to equal ref. So why sho
[02:26:19] [1] uld this magic happen? You know what I mean? Why should these be the same? There's theoretical benefits to this, but I actually think that their model is more sane than I gave up.
[02:26:33] [1] Because what I ended up doing this week was I was working on some problems with proxies.
[02:26:41] [1] And then I was like, I finally got all the different functionality working. And I was like, okay, this is pretty cool.
[02:26:48] [1] And what ended up happening was
[02:26:52] [1] where is it?
[02:27:01] [1] I came up with this example where
[02:27:09] [1] I used a reference to create a store. I updated that store value. And then sometimes later, used the ref
[02:27:19] [1] to
[02:27:21] [1] create a new item on the store, also tried the direct assignment, and then did a structured clone.
[02:27:26] [1] And what you'll see in this example is that even though they're separated in tim
[02:27:33] [1] e, the first three are all the exact same object, whether they were assigned directly or assigned by ref.
[02:27:40] [1] And while
[02:27:44] [1] you could argue that this makes sense in one sense because they still have the same underlying object, you could also argue that you might expect B to be John Snow, like not the whole because it's coming from the original
[02:27:54] [1] ref again. Like you can picture at some point in the reason I hit this was because I was doing diffing.
[02:27:58] [1] And I was like, is it weird? I was doing like reconciling. And I was like, is it weird that if I like diff the original object back in, it holds the updates that previously have been done to that object?
[02:28:08] [1] It's a little bit odd, right? Like you might not expect it.
[02:28:14] [1] So like
[02:28:18] [1] because you might view this in like the case of diffing as like fresh data, even though technically you've made a proxy before.
[02:28:24] [1] And there's this interesting tension between like what's the identity of the proxy?
[02:28:30] [1] Is it
[02:28:32] [1] like something that you get from the path? Like is it like because the problem is when you're inside a proxy, you have this like
[02:28:42] [1] there's an internal value. And if you
[02:28:48] [1] that internal value is going to link to its own properties. So when you go and go to fetch that internal value, like to link to its own properties, to return yet another proxy.
[02:28:57] [1] Like I mean, I can show this
[02:29:01] [1] Solid signals.
[02:29:10] [1] I'll just go into here for a second and go into store implementation. Doesn't really matter what version or what I'm using.
[02:29:20] [1] You can kind of see this. When you get into the get trap, it does a bunch of stuff.
[02:29:24] [1] But ultimately, what ends up happening is it accesses
[02:29:30] [1] it gets basically sorry. It ends up getting a value either read from a signal that it internally has or from it.
[02:29:41] [1] But it reads the child value
[02:29:45] [1] that is derived from the underlying target. And then if it's wrappable, it wraps the value.
[02:29:51] [1] Otherwise, it sends the permanent value back. It's wrappable means is it an object itself?
[02:29:56] [1] Should it be tracked? What I mean is internally, you're not necessarily wrapped.
[02:30:00] [1] If you were wrapped, then you might wrap twice. You need some way of saying like, hey, I've already got this object.
[02:30:09] [1] You don't want to just
[02:30:11] [1] because you're accessing it, wrap proxy and proxy and proxy and proxy and make all these new proxies.
[02:30:15] [1] If you want to keep some kind of stable identity, you want to be able to do like some kind of lookup.
[02:30:20] [1] Now that lookup could be global in a week map or on a symbol like we do generally with Solid.
[02:30:25] [1] Or it could be based on the path. You could say like, I hold the proxy inside here.
[02:30:31] [1] And we always give the same proxy when you go to the same path.
[02:30:36] [1] I didn't actually test if Svelte does that, but I'm gathering if yeah, if I can do SA equals SA, that means every time that you go and access A here, it's the same proxy model for this to be true,
[02:30:51] [1] right? So there is a lookup. So it's either based on like reference, which it's not because otherwise SA would equal SB here.
[02:31:03] [1] Sorry. No.
[02:31:06] [1] Would be equal to SB here, which is not.
[02:31:11] [1] Or it's based on path
[02:31:14] [1] . Now, it's possible when you set it, you can see the existing proxy and assign that a proxy to a different path as well, which is what I think Svelte is doing when I do S.
[02:31:24] [1] A. They see the proxy coming in and go, okay, well, SB will be that proxy, right?
[02:31:28] [1] But my point is that
[02:31:31] [1] you have to be aware not to overwrap. And
[02:31:37] [1] there's only a couple of ways to do this. The challenge, of course, being path-based is like a race, right?
[02:31:46] [1] If you move items around. Now, you can say that once you're in a store, you should be internally referencing the store path.
[02:31:51] [1] So like if instead of our state being
[02:31:57] [1] an object, if instead our state was an array,
[02:32:03] [1] can we do this?
[02:32:05] [1] Sorry, I'm missing. Yeah.
[02:32:09] [1] Screw this.
[02:32:12] [1] Sorry, I shouldn't have I deleted too much. If instead our state's an array, right?
[02:32:16] [1] And
[02:32:18] [1] if we said S0 equals ref
[02:32:24] [1] and S1 equals ref
[02:32:31] [1] and S1A equals 3, and then we just replace all the A's with zeros
[02:32:47] [1] and ones. I think this should work out the same way, but
[02:33:05] [1] that's great.
[02:33:12] [1] Okay.
[02:33:15] [1] It's basically the exact same behavior we showed before. We're only this one updates.
[02:33:19] [1] And if I change this to be S0
[02:33:23] [1] , it will work as well as properly. It's just what I wanted to point out is that like if you're moving objects around in an array or something, you have to make sure that you aren't talking about fresh objects coming from
[02:33:34] [1] the outside, that you're self-referencing like, which is typically the case, right?
[02:33:39] [1] Like if you take an array and then you filter it or sort it, you're going to get the proxy objects back.
[02:33:48] [1] And then you can assign the new array proxy object to the you can like reassign the array, right?
[02:33:57] [1] I don't know how Svelte does at top level because it's a const. I can't actually reassign the array this way.
[02:34:03] [1] But I'm sure if I put like an object and then put like a list array on it and then reassigned it, it would work.
[02:34:12] [1] But what I'm getting at here is it's kind of like something you have to keep in mind, right?
[02:34:19] [1] And I think it makes a lot of sense. So I just wanted to kind of step back from that
[02:34:24] [1] from last week because I've kind of come around to this being probably the more sensible approach in terms of what mutable behavior looks like.
[02:34:36] [1] That being said,
[02:34:40] [1] that doesn't actually help us a ton
[02:34:43] [1] because I started doing some more work. And I want to talk about an interesting topic that you might not expect from me on my stream, generally speaking.
[02:34:53] [1] Let me see. First, I want to quickly see. Yeah, we got people still going. I was seeing if you guys are all live still on YouTube and on Twitch.
[02:35:02] [1] And yeah, we still got people watching. So that's good. I'm stoked. I wanted to talk about
[02:35:10] [1] I wrote a HackMD
[02:35:13] [1] that I want to talk about here for a minute because
[02:35:18] [1] I think I don't know if I've talked about it enough, but and I guess I should share this HackMD.
[02:35:31] [1] It's not like completely finished thought, but
[02:35:37] [1] I'll post it in here for you all to see.
[02:35:46] [1] Yeah, yeah, for sure. And I actually came up with a way to do this, but also keep the original references still referenced.
[02:35:56] [1] That's the weird part about this example that I was showing here is that the original object
[02:36:03] [1] here, this ref isn't actually mutated at all. I don't know. I didn't console log it.
[02:36:11] [1] Yeah, no, I console logged it afterwards. Yeah, it actually isn't mutated at all, but it depends on what you use as your identity, right?
[02:36:18] [1] What I'm saying is Svelte must be using part of the path as an identity where I was doing a global lookup.
[02:36:24] [1] Like this ref is always the same proxy, no matter where you put it, which is why even though technically
[02:36:32] [1] it's not mutated, it's still John Snow, not John Doe, it still kind of like acts like it, like in a weird way because it's like connected.
[02:36:43] [1] I've done some really weird stuff with proxies where creating swappable
[02:36:49] [1] underlying objects. So the proxy can change what its target is so that I can do immutable diffing under the hood while providing a
[02:37:00] [1] kind of like mutable interface. So when people do it, like all the stuff static looking like this, you don't swap everything out.
[02:37:07] [1] When you change an item, you don't clone its parent and its parent all the way down like an immutable structure.
[02:37:12] [1] But yet internally, it does do that so that you could like basically use referential diffing.
[02:37:19] [1] It was a cool idea. But I kind of realized a few more things kind of working along this thing.
[02:37:27] [1] As I said, I think a partial path-based approach actually makes a lot of
[02:37:35] [1] sense. It's tricky because sometimes at creation time, you have to be sensitive to when things get created.
[02:37:41] [1] But I think on access is generally fine.
[02:37:46] [1] It's one of those things because like if you're storing the proxy on the item,
[02:37:52] [1] then like every time you traverse I'm going to have to look internal to understand how you do it.
[02:37:56] [1] But I mean, conceptually, I think I get how I would create a solution that looked like that.
[02:38:01] [1] I just I've always done it with a global reference because it was mutable. I didn't care, right?
[02:38:06] [1] Like there was no reason not to use a global week map because if someone was going to like in the past with Solid because it was mutable, assign this ref here, like you mutated it.
[02:38:16] [1] So like it's the same proxy. You're good. Once I switched to a system that was swappable and not mutating, it got a lot weirder that these items were still intrinsically linked.
[02:38:33] [1] Yeah, we are talking about the benefits of the VDOM for the first time today because people I don't know if people understand this.
[02:38:39] [1] The whole
[02:38:45] [1] yeah, now I just got to decide if it's something that I can look at right now or not.
[02:38:53] [1] Maybe I'll look at it and then comment more on it after. But
[02:38:59] [1] I'll proxy traps can't be that hard, right?
[02:39:06] [1] Prototyped.
[02:39:11] [1] Okay, check. Proxy is array. Version stack.
[02:39:19] [1] Okay, let me see if I can find the new
[02:39:24] [1] proxy call. Okay, there we go. Right. Delete property. Get.
[02:39:35] [1] Proxy path symbol. Yeah, okay. Yeah, so
[02:39:39] [1] sources get prop. Sources is
[02:39:47] [1] scoped to the specific thing. Yeah, because I was using a our stores used also a global trap for all of them.
[02:39:53] [1] So this is scoped to the specific creation.
[02:39:59] [1] So sources is
[02:40:01] [1] a map. Yeah, okay. Yeah, yeah, yeah, yeah, yeah. Okay. So
[02:40:08] [1] map, it's undefined with parent sources set, sources descriptor value stack.
[02:40:18] [1] Massive estimate with parent. I'd have to look at doing that. But
[02:40:23] [1] again, with parent, interesting. I'm gathering this is path-based is the key to this, right?
[02:40:29] [1] Because that's why you care about the parent.
[02:40:58] [1] Oh, okay.
[02:41:05] [1] Okay, so this is actually more like the signals map underneath the proxy.
[02:41:10] [1] Yeah, special handling for length makes sense.
[02:41:20] [1] Sorry, I stepped out of the function for a second. Okay.
[02:41:26] [1] Okay.
[02:41:29] [1] Scope inside a closure. Yeah, yeah, yeah, yeah. Okay. Yeah.
[02:41:34] [1] Yeah, I'm going to have to look at this probably in more detail. But what I'm getting,
[02:41:40] [1] there's definitely like indirection, right? Like the target itself
[02:41:48] [1] let me see. Where's the new proxy call again?
[02:41:58] [1] Value.
[02:42:05] [1] Not used.
[02:42:10] [1] Prop in target. Okay, so
[02:42:13] [1] does look at the underlying thing in terms of like overriding.
[02:42:20] [1] Get target, targ
[02:42:23] [1] et, source target.
[02:42:33] [1] Flat get target prop receiver.
[02:42:37] [1] Okay.
[02:42:40] [1] Okay, so yeah, sources is like the signal map almost, I think. And then we are still using our target.
[02:42:47] [1] I was trying to see where the actual wrap happens, but
[02:42:54] [1] it's harder for me to see right offhand. Not undefined, uninitialized, undefined, reflect, target, prop, receiver.
[02:43:01] [1] So we don't actually
[02:43:07] [1] unless the new
[02:43:09] [1] unless it's pre-processing on the new value coming in that I'm missing.
[02:43:18] [1] Get prototype of value. Yeah, this is it here, isn't it? Oh, no, this is just saying if it's not wrappable, return value.
[02:43:26] [1] Proxy value array version.
[02:43:43] [1] Yeah, I'm still just missing something that I'm looking for. It's fine. It's interesting to see different
[02:43:50] [1] it's interesting to see different implementations. Yeah, maybe look where well, the thing is, if it wasn't if it was non-proxyable or already a proxy, like they wouldn't this check would have happened earlier, which is wh
[02:44:04] [1] y I think that anything that I'm looking for is after this.
[02:44:15] [1] Actually, maybe I can look at the set trap. That might help me see what I'm looking for
[02:44:22] [1] .
[02:44:37] [1] Oh, I see.
[02:44:42] [1] Yeah, I don't know exactly what it's doing, but it's because you also create the signals on write.
[02:44:49] [1] Yeah, yeah, okay. Yeah, yeah, that works. Okay, that makes sense. And then that acts as the override.
[02:44:56] [1] Otherwise, you pass through. Okay.
[02:45:03] [1] Yeah, yeah. State simple property. You can return the existing property, but preferably don't mutate the object you pass in.
[02:45:07] [1] Yeah, yeah. Yeah, yeah. Yeah. Yeah.
[02:45:14] [1] Yeah, this is closer to what I've been doing recently in my because yeah, I wanted to like with the overrides, I've gone to a place right now where the stuff I'm working on is really weirdly complicated because it both do
[02:45:26] [1] es overrides and also
[02:45:30] [1] lets the main target be swappable, which is complicated. But yeah.
[02:45:49] [1] Yeah, are you talking about not writing in the signal? Yeah, yeah, yeah. Yeah, and the other problem with you need the signals
[02:45:58] [1] if you want to do any kind of concurrency because otherwise, like that's the only way you're going to get versioning.
[02:46:03] [1] Like anything outside of the signals is not going to be versioned properly. This is something I had to change in 1.
[02:46:08] [1] 02. I mean, there's a bit of thought in like what you don't observe is like in a different dimension.
[02:46:15] [1] It's not observable.
[02:46:18] [1] Yes, yes. And this was the thing that was really attractive to me. Getting rid of like the
[02:46:25] [1] frozen and sealed object use cases is something I used to like clone, but then like it wouldn't diff properly.
[02:46:31] [1] And yeah, it just
[02:46:35] [1] yeah, I think this is the right general way to approach the what I called source guarding in the last stream.
[02:46:44] [1] Last time, as I said, I was a little bit harsher on the one behavior in Svelte, but actually, I think that behavior makes a lot of sense.
[02:46:50] [1] So yeah, I stepped back from that. I actually think like in terms of my expectations of how
[02:46:57] [1] shared references should work, I think this is the right model. So yeah, stepping mostly just want to say I'm stepping back slightly from last stream.
[02:47:05] [1] I wasn't sure. I said it kind of inconclusively, but I missed that this worked, that the direct assignment kept the references.
[02:47:12] [1] That changes everything. I think this is more than reasonable. So yeah, I think this is the right sort of conceptual model for the source guards.
[02:47:20] [1] But
[02:47:23] [1] now that we've gone down that tangent, kind of a slight addendum on what I was showing last stream.
[02:47:29] [1] Most of the stuff I was still talking about is still very important in terms of like
[02:47:35] [1] so that's source guarding. Svelte's model for source guarding is what we want and stable references.
[02:47:43] [1] Reconcilable, concurrent safe is what you get with the signals. Reconcilable is what I kind of want to talk about today because I actually went through, started working on my optimized version of deep tracking and got to
[02:47:56] [1] an okay place. And then I got to diffing and I started noticing some stuff. And I think we should probably talk about that today
[02:48:08] [1] because I mean, this kind of thing is probably fairly obvious to, say, Dominic, but I don't know if it's obvious to everyone else.
[02:48:19] [1] Did I actually paste the link to this article yet? I don't think I did
[02:48:24] [1] . I think I got
[02:48:27] [1] nicely sidetracked by Dom, which is good.
[02:48:32] [1] This is a quick way to get answers to questions that
[02:48:37] [1] having people literally there on stream to answer them for me. So that's good. Yeah, I like what Svelte is doing there.
[02:48:49] [1] Yeah, so I'm going to share it here so we can talk through it while I go. So the article today is called The Genius of the Virtual Dom.
[02:48:59] [1] Probably the last thing you expect me to write, but it's important to understand the powerful abilities of alternative solutions if you want to create the best solutions.
[02:49:04] [1] And there is some real genius here, whether initially intentional or not. To start, the virtual dom approach is not particularly optimal way of diffing as a baseline.
[02:49:13] [1] I'm not saying there aren't optimal approaches. You go check out Inferno or Eevee or IVY or however you say it.
[02:49:20] [1] There's definitely very optimal virtual dom approaches, right? Some of the block dom stuff.
[02:49:26] [1] But I'm just saying, let's just get in the perspective of like baseline what a virtual dom is, right?
[02:49:32] [1] It creates artifacts just to compare
[02:49:36] [1] which carry overhead versus just diffing the inputs. At its core, when fresh data comes in, it has no idea of what has changed.
[02:49:43] [1] It needs to diff everything from that point of change. It doesn't even necessarily have a way to shortcut that diffing, just on the baseline, okay?
[02:49:49] [1] Wait, what about memoization? Well, notice how almost no one was talking about memoization before React hooks.
[02:49:54] [1] I'm just talking about in the React community. People who actually built virtual dom libraries were already thinking in terms of memoization before or immutable virtual doms and all this stuff.
[02:50:05] [1] There's a lot of really great research on the virtual dom between 2014 and '16.
[02:50:12] [1] And you saw tons of innovation in that space, right, during that time period.
[02:50:18] [1] But the developer coming into using React never talked about memoization when it was class components.
[02:50:24] [1] Pretty much never. Like very rarely. It would come up in this thing. Don't get me wrong.
[02:50:32] [1] There's a couple of reasons for that, right? It was because, one, a lot of people were less performance aware.
[02:50:37] [1] Without having a smaller unit than a component, it wasn't nearly as common to deal with the way data linked together.
[02:50:42] [1] Like adding dependency arrays immediately made it very evident to people that like, oh, when this changes, this changes, this changes, this changes.
[02:50:49] [1] With the classes, a lot of people would just be like, oh, yeah, it's a render function that always reruns.
[02:50:53] [1] No one really thought too much about it. And because their logic wasn't embedded in it, like they weren't really feeling the consequences, the side effect of that re-render, right?
[02:51:04] [1] Don't get me wrong. There's shared component update. I've definitely written quite a few of those in my day, especially when I got started in React Native.
[02:51:10] [1] Performance was actually something really, really, really, really
[02:51:17] [1] a consideration with early React Native because
[02:51:21] [1] like some stuff you do, like especially around pieces with animations, like performance of the JS thread could actually completely slow down your whole application.
[02:51:31] [1] So like it was a thing when you
[02:51:36] [1] 're but React chose to take a broad stance early because there's always the worst case.
[02:51:40] [1] There's all the fresh data from server, which will not be equal. And users simply doing stupid stuff like this.
[02:51:48] [1] Hopefully, you guys can see this, but
[02:51:51] [1] list equals this list state, and then like somewhere else you go list, stop push new item, then you set state new list.
[02:51:56] [1] See, this is not an immutable change, right? People can do this in React and it still works.
[02:52:07] [1] It's like how Angular devs don't want to think about on-push strategy. Yes, right?
[02:52:10] [1] It's there for more performance-minded people.
[02:52:15] [1] I mean, people just like function components because it seemed like leading up to hooks, we had hawks and we had these patterns.
[02:52:23] [1] It was a lot easier to just think of like input-output. Like it was this functional component thing.
[02:52:29] [1] Yeah, so like yeah, I mean, people did overuse it per se, but there also wasn't
[02:52:38] [1] yeah, I mean,
[02:52:46] [1] yeah, it was a different time. I don't know. Like I'm not going to be too critical on that because like
[02:52:53] [1] they're just we didn't have the same level of awareness in the React ecosystem, which is kind of the selling point of React.
[02:52:59] [1] I mean, if people want to argue hooks made things go downhill, it was because people became aware of this stuff for the first time.
[02:53:08] [1] Right, you never because you didn't put much app logic in it.
[02:53:12] [1] And the same thing could be true of render functions.
[02:53:17] [1] I know it's a bit odd by current standards, but people still do this today. And the problem is that they raise the exact same reference.
[02:53:22] [1] So if we auto-memoize props, this would never show updates. Like if React just like because React could have always auto-memoized props.
[02:53:29] [1] They could have always been like, yeah, if the prop doesn't change, like the reference to the array doesn't change, we won't rerun that child component.
[02:53:36] [1] They could have done that, but they wanted to make sure that this worked because it would be kind of weird for people.
[02:53:43] [1] Like basically, React had no opinion about immutable versus mutable early days because their baseline is basically diff everything.
[02:53:51] [1] Throw it away. We don't care, right? It works as readily for when you have the ability to keep references, you're working in a single environment without serialization, or
[02:54:01] [1] you're working with the data from the server, right? Because like it's when you leave the environment and the web is by its very nature a server and a client.
[02:54:12] [1] So like there is going to be the serialization boundary that we must always face with, right?
[02:54:17] [1] So
[02:54:19] [1] yeah, all I'm saying is in this example, the set state is more like this render component, but this is just the baseline.
[02:54:25] [1] Because what I'm saying is you actually mutated the state here with this push, but no one knows to re-render, right?
[02:54:33] [1] This set state is actually more of just like render the thing, right? Like if this didn't do anything, like if you like I think if you just put like an empty object or whatever, like this isn't the right syntax actually
[02:54:48] [1] looking at this because I need to actually do
[02:54:55] [1] this. Sorry.
[02:54:57] [1] Fixed.
[02:55:00] [1] But what I'm getting at is like if you just put an empty object here, like the set state empty object, I think it would do basically the same thing in React.
[02:55:14] [1] Right?
[02:55:16] [1] I mean, some people were. They were just used to having like to deal with this kind of crap all the time.
[02:55:24] [1] They were just used to having to like deal with all the edge cases. Like I think there were super complex, maybe not super, super by modern days because they were limited a bit by tooling, but there were fairly complex app
[02:55:36] [1] s. But if you're coming from like dealing with like dirty checking loops in Angular or like butterfly effects and knockout or wherever you're coming from, like I mean, this is something you can live with, right?
[02:55:54] [1] Perhaps. But yeah, and
[02:55:58] [1] in a sense, do you know what this like reflection made me think of? Sorry, this is a this week in JavaScript topic, but I got to where is it?
[02:56:08] [1] Bookmarks. I got to throw this one out here. Using let in module scope as state management.
[02:56:16] [1] Right? Like if you think about React earliest days,
[02:56:24] [1] this literally could be like just some random state, and then you could have just been like this re-render component.
[02:56:33] [1] And if that let variable up here wasn't in the component and you just like how should I put this?
[02:56:42] [1] Maybe I should play around this for two seconds just to show what I'm talking about.
[02:56:46] [1] But like, you know what I mean? Like, I mean, I can't even do it in Svelte because Svelte doesn't re-render.
[02:56:53] [1] But I can at least show the code I'm talking about. Like if
[02:56:59] [1] I just made this
[02:57:03] [1] let
[02:57:05] [1] count. And now I know that I'm making global state here, but if I did let count and then
[02:57:19] [1] now we're going to pretend this is
[02:57:22] [1] instead of use state, I'm going to instead say that the framework has
[02:57:29] [1] re-render, okay? Or render comp, okay? This is going to be our new framework primitive, right?
[02:57:36] [1] Render comp, right? Then all we have to do is put count in here and then turn off Svelte's warnings.
[02:57:45] [1] And then in here, we could just be like count plus plus.
[02:57:55] [1] Actually, let's do parentheses.
[02:58:02] [1] Render
[02:58:04] [1] comp. There we go. There we go.
[02:58:07] [1] And now
[02:58:11] [1] like in something like React, this
[02:58:16] [1] would work. Sorry, I missed count equals zero.
[02:58:22] [1] Right? Like you could call this set state. You could do this thing. But generally speaking, you could just have something outside of the render function and then just update the state and then call render comp and then it
[02:58:34] [1] would update, right? And
[02:58:38] [1] if this was a class component,
[02:58:41] [1] you could even be like you could picture that this now is
[02:58:49] [1] class counter, right?
[02:58:53] [1] Not a function.
[02:58:55] [1] And you could do something along the lines of like
[02:59:11] [1] this.count++.
[02:59:17] [1] This.render. Like I'm oversimplifying it, but because you should schedule the render, you shouldn't call render yourself
[02:59:26] [1] , right?
[02:59:30] [1] But my point is
[02:59:52] [1] my whole point is like conceptually, oh, I missed the count equals zero, right?
[03:00:00] [1] Conceptuall
[03:00:03] [1] y,
[03:00:05] [1] you could basically have a let variable, so to speak. And like the framework
[03:00:14] [1] could basically operate itself
[03:00:20] [1] , right? Like this is kind of the initial promise of the virtual dom. It was just like we don't freaking care about your state, really.
[03:00:30] [1] Like React made a built-in state mechanism to make it like you not have to do this and this and kind of like manage it a bit better.
[03:00:39] [1] Like it's kind of weird to be like it doesn't feel automatic. Like people want a little magic when you call render, even though set state is the same thing.
[03:00:49] [1] But like essentially, this is like what you're dealing with. So when I see this, that's what I think about, right?
[03:01:01] [1] Are you making it so we all end up using a framework that only works if we all just use less?
[03:01:05] [1] Is use state and use ref any different than let?
[03:01:10] [1] Yeah, actually, use ref isn't, right? But use state is very different than let, right?
[03:01:16] [1] That was like the argument. You could say that Svelte made early days, but they used a compiler to do that.
[03:01:22] [1] Or you could say reactive libraries do it when they use proxies. But
[03:01:27] [1] trying to hide it behind a variable, you could argue.
[03:01:32] [1] But use state is not the same as let because
[03:01:37] [1] like essentially, as I showed here, it's like, sure, this is let, and updating the state is let, but use state is both.
[03:01:50] [1] It is both set the state and tell myself to re-render.
[03:02:03] [1] Yeah, or a getter.
[03:02:08] [1] Getter-setter combination. Could you define the state initially? So there's no reason why like if properties are fixed.
[03:02:14] [1] But I mean,
[03:02:16] [1] the nice thing about the React model is that
[03:02:21] [1] this is just this count is
[03:02:25] [1] just
[03:02:28] [1] a plain object or a plain value or whatever, right? I mean, in the old React model, obviously, it was this state, right?
[03:02:35] [1] You didn't just reference it directly. But I mean, it
[03:02:41] [1] because you don't need collisions, right? It should actually be
[03:02:45] [1] I guess it should be state equals count zero, and then we'd go this.state.coun
[03:02:56] [1] t. But I mean, we also weren't that worried about collisions on this.increment either.
[03:03:01] [1] So
[03:03:05] [1] this could have been optional, but set state gives it a name. Anyways, I'm just playing around here.
[03:03:12] [1] But like the thing is
[03:03:18] [1] , there's only so many ways to solve this problem, right? Like yes,
[03:03:28] [1] we're at the same mistake as Svelte again. Svelte did not use let the JavaScript here.
[03:03:31] [1] It used a syntax or custom JavaScript for runtime. Yeah, yeah, exactly. So
[03:03:36] [1] the opposite is forget it. You always know exactly where it is, and the only thing in the same scope can change it.
[03:03:41] [1] Yes. This is actually the power of runes. Side note is the scope locking. So like
[03:03:53] [1] this is
[03:03:55] [1] the thing that's missing about this is as magical as it sounds, you still something has there's only so many ways change management works.
[03:04:02] [1] Something has to tell it to change, right? Like either it's the world. You could pull.
[03:04:10] [1] Like the most naive thing you can do is pull, right? You can just go, I don't know what changed.
[03:04:15] [1] Every 60 milliseconds or whatever, pick a time, maybe 16 milliseconds so you get 60 frames per second.
[03:04:23] [1] I'm going to just check all the state in my whole app and see if anything is different, right?
[03:04:29] [1] But if you're not doing like immutable data or don't have history, like you're literally like you basically have to like keep a copy and then check against it.
[03:04:37] [1] I mean, this is what dirty checking in Angular is, except they very quickly got past let's pull.
[03:04:43] [1] And they're like, how about when someone does something, like an event happens or like some async thing, something happened in the system periodically.
[03:04:52] [1] Like if nothing happens, we won't do anything. But if something happens, we should check everything.
[03:04:56] [1] And that's what Zone JS is in that. But short of polling and just like casting out into the universe,
[03:05:05] [1] something has to go, okay, I should run the cycle again. It has to trigger or schedule the thing, right?
[03:05:12] [1] So like let as state management purely is not a real thing,
[03:05:18] [1] which makes tweets like this kind of interesting because it seems like it's kind of more for engagement than like because he'll come back and like there's only like so many places these solutions will come back to, but he
[03:05:31] [1] 'll kind of come back and then we'll have like grown there'll be like
[03:05:38] [1] this.render and then we'll have that kind of grown moment. Do you know what I mean?
[03:05:41] [1] Where it's like, okay, well, great, you have let, but like is this
[03:05:47] [1] better than
[03:06:00] [1] I mean, maybe it's less the typ
[03:06:05] [1] e,
[03:06:08] [1] right? Because then I guess that we have our answer actually. This is less the typ
[03:06:14] [1] e. Maybe, maybe, maybe, no, maybe we do it with a functional form. Maybe we do something like s.
[03:06:22] [1] count++. I kind of like this.
[03:06:37] [1] I don't know. Maybe this set state is, you know, like it's just
[03:06:43] [1] it's the same thing.
[03:06:51] [1] Oh, yeah, yeah, yeah, you're right. You still need to return this. Well, it depends on what you're doing.
[03:06:57] [1] I'm actually showing immutable API here.
[03:07:02] [1] You're right. Technically, it should be immutable. Probably. Does it need to be?
[03:07:12] [1] It doesn't actually immutable API top level would actually still work because you'd be like watching for these properties.
[03:07:18] [1] So you'd always be diffing top level. And then like if you had a complex object, then you'd have to do something like s.
[03:07:25] [1] user equals
[03:07:30] [1] previous s.user
[03:07:37] [1] name s.user.name plus exclamation mark or something like
[03:07:45] [1] I don't know. We could toy with the API a bunch.
[03:07:54] [1] What I'm saying is like a top level assignment, but yeah,
[03:07:59] [1] they wouldn't you're right. They would never use immutable API because people would think
[03:08:06] [1] that they could just do
[03:08:08] [1] this. And that is
[03:08:15] [1] harder to track because then yeah, yeah, you're right. They would never do this because of nesting.
[03:08:21] [1] Yeah. So yes.
[03:08:28] [1] But, but, but, but, but, but, but
[03:08:34] [1] to be fair, all things being equal, I'm going to go back to my
[03:08:41] [1] silly version here.
[03:08:44] [1] If this was the API and you're just using lets, well,
[03:08:53] [1] someone could do this pretty easily too, right?
[03:09:02] [1] So this suffers the same problem. It actually lends, arguably lends because it doesn't expect you to return the next value.
[03:09:10] [1] It arguably actually lends to people doing the wrong things or you having to basically diff everything and not be able to shortcut memoize.
[03:09:18] [1] Like this is actually kind of the problem with just running on lets. Like you're taking this original React mentality, generally speaking, is not performant, right?
[03:09:28] [1] Like the shape of the API with set state is actually I mean, sure, just replacing the new object is not a big thing, but like the fact that each hook is a separate thing, the fact that the functional form returns the ne
[03:09:38] [1] xt value, these are all subtle hints to make you do the right thing. The fact that the value doesn't update right away, it basically kind of like punishes you.
[03:09:47] [1] Like basically, it punishes you for doing mutable stuff, which is all good in React design.
[03:10:04] [1] Right. So like as I said, it's so funny because when people look at these tweets from Ryan Florence, they're like, oh, he must be talking about like signals or something.
[03:10:12] [1] It's like, no, he's not. He's just talking about like dumb, unperformant React, right?
[03:10:19] [1] Or like
[03:10:21] [1] basically, you're not going to need it moment, I imagine, right? So I mean, it's fine.
[03:10:28] [1] Let's continue on here. I don't want to dwell into this. There's a whole bunch of people like in the chats
[03:10:36] [1] speculating on this stuff. And I'm getting caught off topic, but I think this is probably the time to do this now before I continue.
[03:10:47] [1] No. It's going to be a direct mutation without any kind of set or getter. Lord help the spaghetti, right?
[03:10:51] [1] Let is bound as lexical, which basically opts the spaghetti. You always know exactly where things the same scope would change.
[03:10:55] [1] Well, no, answer. Yeah, but I don't worry about the lexical because as wide as it gets, multiple does work on the same lexical scope can work mutated and you find a large base.
[03:11:02] [1] Yes, yes, yes, yes. Okay, he's not going to say. I'm going to judge him. This is hard to take on lexical scope being large enough.
[03:11:08] [1] Yeah, but it's not about the lexical scope. The problem is like the size is the size is infinite if you don't have
[03:11:17] [1] a bound context. If you don't say like re-render this component, right?
[03:11:30] [1] Oh, here, David Corsted. I'm not wrong. I think this is a good idea. Please use a function to update, not a direct careless mutation.
[03:11:43] [1] Fair. Right. He's basically but you see how you walk along a set of steps here?
[03:11:49] [1] Like
[03:11:51] [1] once you're using a function, you're like, well, why don't you just have the function move the state?
[03:11:54] [1] Like you kind of naturally end up at React's API.
[03:12:14] [1] As I said, some of the responses make you not even tell if this is a joke or not.
[03:12:18] [1] I wouldn't be surprised if there's a manual render call right after. How can you tell this guy knows how frameworks work?
[03:12:25] [1] Yeah.
[03:12:29] [1] That is a very insightful insight
[03:12:33] [1] .
[03:12:39] [1] We hate you say I love let back then. Yeah, but
[03:12:46] [1] the point is
[03:12:48] [1] of this kind of whole discussion is like
[03:12:52] [1] and getting back to where I'm getting at is at its base, this is kind of what makes the virtual DOM powerful, even though it does not make it performant,
[03:13:02] [1] right? Like
[03:13:08] [1] just kind of something to throw out there. Like you can do pretty dumb stuff from an optimization standpoint and still kind of get by.
[03:13:16] [1] Don't get me wrong, but modern standards, the reason we have the React compiler and have all this stuff, we would reject this, generally speaking, which is why it's very interesting to see what they're doing in Remix 3 bec
[03:13:28] [1] ause it's like I think we're in like an interesting cycle where there's a return to simplicity and it's like I think like HTMX and stuff.
[03:13:38] [1] And I think it's popular enough that people there's enough buyers of this that it's a thing.
[03:13:42] [1] But on the other hand, it's like it's a very you're not going to need it attitude, like a very yagny kind of deal.
[03:13:50] [1] And it's like,
[03:13:54] [1] sure, but like
[03:13:58] [1] what percentage of the time do you like could you have taken the solution like a step just like a step further and just alleviated like tons of pain just to make your point, right?
[03:14:14] [1] Anyway,
[03:14:20] [1] so let's continue. Same issue is auto memorize. I know it's a bit odd. Yeah, blah, blah, blah.
[03:14:25] [1] It's more like render component, but that is the baseline. For the same reason, it can never depend on knowing what references are the same.
[03:14:31] [1] So for things that need to keep identity through moves, like items and arrays, you should be assigning a key property, right?
[03:14:37] [1] If you remember the spelled example that I showed here with moving items, because we're dealing with referential equality, we know these things are the same thing, right?
[03:14:45] [1] So like we can
[03:14:49] [1] we move them around
[03:14:51] [1] or like we can have like a map function or each and spelt or whatever and be like, okay, I have these DOM nodes.
[03:14:58] [1] I'm just going to move them. They're the same thing. But if you're getting fresh data in, completely fresh data in, you don't have anything to work with.
[03:15:06] [1] As I said, this is not immutable. This is not like mutable change. This is literally like blank slate baseline that I'm talking about here, right?
[03:15:13] [1] So to keep identity, you have to basically assign it, right? That's why there's a key prop in React.
[03:15:19] [1] So a VDOM, as far as diffing goes, is sort of dumb. It doesn't necessarily leverage the power of immutable diffing or fine grain ability to not re-execute
[03:15:29] [1] immutable systems with stable references, right? Yes, right. When fresh data comes from the server, even today, you are basically re-rendering the whole page.
[03:15:36] [1] Yes, you aren't necessarily updating the DOM everywhere, but the whole process is running from top to bottom, right?
[03:15:41] [1] Now, don't get me wrong. Every solution has this problem because almost all optimizations in the web are rooted in the fact that we don't have to cross serialization boundaries.
[03:15:51] [1] But I want to point out, like in a sense,
[03:15:56] [1] as an introduction, the VDOM actually
[03:15:59] [1] isn't smart that much from a DOM diffing standpoint, but it sets a baseline. Like this is the worst case scenario.
[03:16:08] [1] It basically built to handle the worst case scenario, right? So yeah, sounds stupid.
[03:16:14] [1] How is this genius, right? Well, we focus a lot on emphasizing the bends of both push and pull when introducing people to signals, right?
[03:16:21] [1] Push systems only notify things that are related to change and pull systems only do the work that is relevant, right?
[03:16:27] [1] So when you have a push-pull, like signals combines the benefit of both systems, having the best update characteristics of both systems.
[03:16:33] [1] They only notify the things that can change and only do the work that's relevant to the smaller scope that is actually being used.
[03:16:39] [1] So like the problem with React is you can have a whole bunch of state in the components and stuff.
[03:16:45] [1] And even in these silly components, the class ones or whatever, it doesn't really matter the shape of it.
[03:16:51] [1] And as long as sorry, this is such a great example of what React's doing. As long as this dot render is getting called, well,
[03:17:00] [1] we're going it's showtime. Like everything, even unrelated things, are going to just get pulled into the mix, right?
[03:17:08] [1] And
[03:17:10] [1] that's just how it works, right? Like
[03:17:15] [1] at the end, it does only do the work
[03:17:21] [1] that it needs to do, but it
[03:17:25] [1] , on the other hand, kind of like has to check with everyone along that scope. Whereas like a push-based system can go like, oh, only this one piece of data updated.
[03:17:36] [1] We know that we don't need to run the rest of this stuff. But that push-based system, purely on its own, doesn't know if that piece of data is even being used anywhere.
[03:17:43] [1] That piece of data could just be sitting off to the side of the screen. So like you could basically see in its extremes with React when you
[03:17:55] [1] set some state that's never going to be used because of some other conditional state.
[03:17:58] [1] It's going to rerun the component and it's going to immediately kind of pull all the values and stuff that it does use and then maybe see that those haven't changed and then kind of shortcut out maybe.
[03:18:11] [1] Or
[03:18:14] [1] but with a signal system, it's going to notify something and then it notifies the things.
[03:18:22] [1] It depends on and depends on and gets through the graph and then finds out that there's no effect on the end or no rendering or no nothing and doesn't do anything, right?
[03:18:31] [1] Signals aren't push-based. Sorry. I just mean like a naive push-based system like RXGS or something, right?
[03:18:38] [1] Signals actually do push-pull where they notify through the system, but don't do the work along the way to calculate.
[03:18:44] [1] And then they find the effects at the end and then they just pull. So like basically in a signals-based system, when you do that change, instead of like going through and doing all the work on each dependency, it'll just
[03:18:59] [1] notify them all and then see that there's no effects on the end and then we'll call it a day.
[03:19:05] [1] So it's the only system in this stupid scenario that doesn't end up like rerunning user code, right?
[03:19:13] [1] The push-based system will rerun user code because it needs to literally propagate through.
[03:19:16] [1] It goes, okay, you updated. Okay, you updated, you updated, you updated, you updated, you updated, and then it's like there's no sync, there's no effect.
[03:19:25] [1] So it's like you did all the work, but ahead of time because no one cares about it.
[03:19:30] [1] React will go, okay, component run and it goes, you didn't change, you didn't change, you didn't change, you didn't change, you didn't change, we're running your user code.
[03:19:40] [1] Only the signals implementation like doesn't need to like run your user code to make that decision.
[03:19:52] [1] Sometimes I wonder that. Is rendering going to be pre-active set state removed and force update renamed to remix?
[03:19:56] [1] Yeah, I mean,
[03:19:58] [1] maybe.
[03:20:00] [1] I don't know. I guess we'll find out.
[03:20:06] [1] It's funny. A lot of early virtual DOM, I think Mithril, there's a few of them that actually used basically this like force update thing.
[03:20:14] [1] And thank you for reminding me about force update. I forgot about that.
[03:20:19] [1] So
[03:20:21] [1] yeah,
[03:20:23] [1] let's go back to pull-based benefits of VDOM. It only does the work that's relevant.
[03:20:26] [1] If you have a large amount of data, but your VDOM is only looking at one item in it currently, the only thing is mapping over and diffing.
[03:20:33] [1] It literally could care less about any of the other existing data in your universe.
[03:20:37] [1] So what I mean is picture this component where you have some giant blob of data, but your item is literally just using item zero.
[03:20:42] [1] There could be like 10,000 items in this blob of data, but you only use zero.
[03:20:50] [1] And in, yeah, VDOM library, it literally could care less if the other 1 to 999,999,000 rows even exist or whatever, right?
[03:21:06] [1] Yes, this is the I told you DAX has been on my mind in terms of this, right? If fresh data comes from the server and replaces old data, it happens at no consequence.
[03:21:14] [1] It doesn't diff anything. It doesn't use it. It just throws it away. It's consistent because it has the fresh data available, but it doesn't have to deal with any existing references that aren't used.
[03:21:23] [1] Now, if a different component uses a different part of the state, it would also need to be set as well.
[03:21:27] [1] So there's like concerns around synchronization. But it's understood that each location in the VDOM is independent and things need to enter it state in order for it to update.
[03:21:35] [1] Like if you don't use state here, this is, again, good API design. There's no expectation that like in the other like if two things reference this giant blob, there's no expectation of anything updating unless someone call
[03:21:47] [1] s set state somewhere. It has to enter the state, right? But for that reason, state reason state isn't really ever truly shared, right?
[03:21:58] [1] Like not in this kind of granular sense that we're talking about here, right?
[03:22:06] [1] Because state's owned by the component, right?
[03:22:13] [1] Sorry, where was I? Anything that could share state is actually a descendant of the source of that state and would get rerendered anyway on that state change.
[03:22:19] [1] It doesn't truly exist in multiple locations unless it's a copy conceptually. What I'm trying to say is like even though this example doesn't show it, I'm using spelled here.
[03:22:27] [1] It could be solid. It could be whatever. Like you can basically clone the state and then have two different locations in your UI each independently listen to that state and independently update and like manage that stuff
[03:22:39] [1] . And in fact, they could be the same objects and have them both update on a change to either location of that state.
[03:22:45] [1] But because the React model is basically this, right? Like this dot render doesn't even really care about the data of the state or like VDOMs in general kind of work like this.
[03:22:59] [1] It's not really possible to like share the state. You have to like even if you assign that state, anything that could assign it, you think about it.
[03:23:06] [1] Like how does something else get user here? Like if user
[03:23:11] [1] is in here now, right? And this is going to be our user component. I know there's increment and other stuff to it, but what I'm getting at is
[03:23:24] [1] if user is in here, the only other thing that's going to get user is going to be something that you pass it down to here or something that you derive from somewhere else in your component logic here.
[03:23:38] [1] So like at minimum, anything that actually like sets user, I mean, it's more obvious with the React UI, it's going to call the setter from here and trigger it from here.
[03:23:53] [1] So like there's no way to like actually unlink like the state and have it be like
[03:24:05] [1] have it be the same thing. Like you have to synchronize it yourself, right? You'll get this props down and then you'll assign it to your local state or whatever.
[03:24:11] [1] Like synchronization is your responsibility. You can't just like pass a self-synchronizing thing like the same instance that will update and be like this thing that can basically update like wherever it is, right?
[03:24:26] [1] I mean, like a signal. You can't like it's not a signal. And this is part of, again, why React doesn't like signals.
[03:24:44] [1] Yeah, I don't think Preact's worried about or not Preact. I don't think Remix is worried about concurrency or like in that sense.
[03:24:52] [1] They don't care from a purist state point. They probably care about it from like can I show loading states, which you can get very far, especially if you control the router.
[03:25:03] [1] And they probably won't even go that far. Now, it's a different component to use a different part of state.
[03:25:08] [1] It also needs to set as well. Okay, where are you? But for the reason state isn't really ever truly shared, we talked about that.
[03:25:13] [1] Okay, which works nicely in VDOM's favor because while it isn't an immutable system, if you make your state immutable, which you can because the paths essentially identify it's identity in this tree structure, right?
[03:25:24] [1] Because it's whatever component it gets the state to. Sorry, I just want to check something.
[03:25:29] [1] That's what I thought of. My mic keeps on getting quieter. Sorry, I don't know why it just keeps like auto getting quieter.
[03:25:35] [1] Something must be doing that
[03:25:38] [1] .
[03:25:40] [1] No, I just generally just write my thoughts every it probably won't ever get published to be an actual article.
[03:25:48] [1] I do this. I write like four I just write my
[03:25:52] [1] I will publish this on HackMD, but I don't like this is just mostly for my usage.
[03:25:57] [1] Maybe this is something worth talking about. These days, I'm actually looking at like creating videos for topics that are important enough.
[03:26:09] [1] Where were you going? Okay, if you make your state immutable, which you can because paths essentially are identity in this tree structure, you can leverage immutable optimizations when it comes to diffing.
[03:26:16] [1] The React compiler is a tool for creating stable references and automatization, but you can also optimize by hand.
[03:26:21] [1] What I'm saying is because React can't share state really because it's like just inherent to the tree, even though at a baseline, it's dumb, they can use immutable diffing.
[03:26:36] [1] Like as I said, they're not going to say that's the prescribed way because
[03:26:40] [1] you could have fresh data from the server. Well, that doesn't care. That's not a big deal.
[03:26:43] [1] But because you have people like this, push state, the let people of the world.
[03:26:48] [1] But
[03:26:54] [1] if you want to and prescribe to immutability, which is what hooks kind of push people into, then you actually can get a fairly optimal version of this diff.
[03:27:03] [1] Is it as good as signals? No, we already saw Ryan GPT answer that. But it's not bad.
[03:27:11] [1] So the result is you have a system that when diffing only diffs what's being used, right?
[03:27:17] [1] We already saw that. It only needs to diff zero, right? Doesn't care about the rest of it.
[03:27:21] [1] And you get it, right? Like if the giant blob changes, like again, it's only going to diff zero again.
[03:27:28] [1] It doesn't care about 1 through 999, even if all the other data change, because you just replace the reference and there's nothing special about it, right?
[03:27:34] [1] It just keeps on diffing zero, right?
[03:27:40] [1] With plenty of options for shortcut optimization. So while nowhere near as optimal as fine grain rendering, when living in a world where you have the ability to apply these sort of referential optimization, it isn't that
[03:27:49] [1] bad considering how bad it could be. When you are in a world where you have fresh data from the server, though, it looks a lot more appealing only dealing with what is used.
[03:27:57] [1] So this is I want to talk about this because I've known this aspect to a certain degree for ages, but I didn't fully appreciate it until like just this past week.
[03:28:06] [1] But like this is why I created stores, not because I wanted a convenient syntax for people to do mutation.
[03:28:12] [1] I could care less about that, honestly. I created stores because I recognized there was a gap, right?
[03:28:20] [1] It's funny because like my motivation was completely different than, say, Vue 2's option API.
[03:28:27] [1] Vue created basically they were getter setters back then, but they're basically stores.
[03:28:32] [1] They're deep reactive
[03:28:35] [1] proxies of a sense. I know then it weren't actual proxies, but you get the idea.
[03:28:38] [1] They did it because, oh, look, it looks like plain data. You can mutate it. This makes development pleasurable, you know, whatever.
[03:28:45] [1] For me, I was like,
[03:28:48] [1] this is really freaking powerful if you think about it. Like React's diffing is really dumb, but the fact that it only cares about what you use is actually really powerful.
[03:29:03] [1] So let's move forward. The pitfall of granular reactivity, right? Maybe I should talk about this more because while it's fairly obvious to me, it may not be to everyone, it's always been about create versus update, right
[03:29:13] [1] ? I do say that the arguments that Pete Hunt and Jordan Walk and the whole crew came out in the original React days don't really hold anymore because they don't.
[03:29:26] [1] But
[03:29:29] [1] signals,
[03:29:33] [1] the only reason today that signals are the best of both worlds is pretty much because all benchmarks
[03:29:39] [1] sorry, the only reason that signals are the best of both worlds and pretty much all benchmarks is that you don't create what you don't need in these scenarios.
[03:29:45] [1] Like why would someone
[03:29:49] [1] benchmark having a bunch of extra garbage in there, right? It's the same reason that solids never been punished for having lazy versus eager computation.
[03:29:58] [1] Solids are actually eager computation. Even though we do push pull, that thing earlier where I was talking about
[03:30:05] [1] doing all the calculations down the tree, you know, when something's not being used, solid still does that.
[03:30:12] [1] It's push pull in the fact that it has algorithmic guarantees that ensure that stuff happens in order.
[03:30:18] [1] Most push-based systems can't handle diamonds. They can't handle advanced like shapes and graph, and they don't ensure each node runs once.
[03:30:25] [1] But solid 1.0's eager execution means that it doesn't only do the work that's actually being used.
[03:30:33] [1] And in benchmarks and in most cases, when you're building stuff, especially when you have hierarchical rendering and you have like ownership and stuff, this does not matter at all, right?
[03:30:43] [1] That it's eager or lazy. But
[03:30:49] [1] were there a scenario that is less optimal, it could,
[03:30:55] [1] right?
[03:30:58] [1] Right?
[03:31:01] [1] Because these are models based off stable reference. Creation is different from updates.
[03:31:04] [1] So we've been able to leverage that, right?
[03:31:08] [1] Especially because a DOM is also retained mode. Things like cloning elements can reduce overhead.
[03:31:12] [1] So basically, because of the nature of the fact that creation and update are differ
[03:31:19] [1] ent, we've actually kind of positioned ourselves in a way
[03:31:24] [1] that we can leverage that information more readily than something where update and creation are the same thing, like in most virtual DOM setups.
[03:31:31] [1] Don't get me wrong, block DOM approaches do actually do that same kind of optimization and separation, but it's not something that React has really cared to do.
[03:31:38] [1] You know, it's like theoretically an optimization that just hasn't been on their books, but could be.
[03:31:43] [1] We actually benefit from identifying what is dynamic versus static. And to be fair, fast VDOMs do this too.
[03:31:49] [1] This is how Inferno got so much faster than React.
[03:31:55] [1] And we avoid doing unnecessary work that VDOM isn't required to diff. Diffing begets more diffing, generally speaking.
[03:32:00] [1] I think I've showed that enough on stream. The more you diff, you end up diffing more.
[03:32:03] [1] It's just it's an endless chain.
[03:32:09] [1] And these solutions, like fine grain solutions, just sidestep it. But you are working on a single environment without crossing serialization boundaries.
[03:32:16] [1] So many optimizations are available to you, and fine grain solutions tend to leverage them all.
[03:32:21] [1] So yeah, like basically we've got us in this weird place where conceptually signals have more overhead to create than just using plain data.
[03:32:30] [1] I mean, I think that's pretty obvious. But
[03:32:36] [1] the reality is because of the optimizations we make in terms of static versus dynamic, because literally the shape of our solution is not rerunning and all this kind of stuff, we basically become faster at creation and up
[03:32:49] [1] date. Like I said pitfalls, right? Sorry. Like, well, I'm just established why in the happy case, fine grain rendering absolutely trumps the virtual DOM in pretty much every way.
[03:32:59] [1] Okay? Like there's a reason why other frameworks have moved off the virtual DOM or moving that direction other than React.
[03:33:06] [1] It's because like if you're in that state, you're just in the client, you're doing like SPA type stuff, doing client-side work, you're within your single environment, it is kind of better in every imaginable way, right?
[03:33:18] [1] It's just, but what about when the data exceeds what's being used? Or the majority of the data is coming fresh from the server in less than granular chunks.
[03:33:27] [1] Well, it's easy to point at those inefficiencies and say, fix them, right? Because it's like, why the hell are you doing that?
[03:33:33] [1] Like Ryan Florence's stock ticker demo is an atrocious way to build apps. If you've ever seen that benchmark where he originally showed React performance, like I've said that over and over and over again.
[03:33:43] [1] It's like the worst possible way someone could build an app. Why would you use a bandwidth of sending your whole database over the wire as many times a second?
[03:33:53] [1] It was just a demo that proved the power of React, which is incredibly good at that thing.
[03:33:57] [1] To be fair,
[03:34:00] [1] I've created solutions with Solid that are faster than React in that and kind of are very close to like, you know, I think in that specific demo, it's actually like very much the same as like something like Inferno or wh
[03:34:10] [1] atever. I think there's other overheads to consider, but my point is
[03:34:18] [1] while in most cases, and I'm saying like the 90% plus cases, like you don't need to worry about this, which is why virtual DOM kind of like don't need it.
[03:34:28] [1] What if you do want to take this responsibility on?
[03:34:33] [1] Yes, it is what makes Solid a great choice for local first completely. But
[03:34:39] [1] React has one property that is kind of good for local first, right? That's why I'm saying DAX has been on my mind, right?
[03:34:44] [1] Let's keep on talking. Let's look back at our large data blob. This time with a big reactive data store.
[03:34:49] [1] Now, I just called this create store and it's using basically the same API. I just changed this from use state to create store.
[03:34:55] [1] We don't know what the store is. I'm just, this is a hypothetical React store. Let's forget about Solid stores for a minute and approach this generally.
[03:35:00] [1] Let's pretend this is, it could be Vue Reactive, it could be Svelte's thing we were just looking at.
[03:35:05] [1] It could be whatever, right? Let's just assume that this is some deep nested reactive data, right?
[03:35:16] [1] Yes, yes. With signals, you have no need to diff at all because it's a graph chat.
[03:35:19] [1] In most cases, except the cases where you do need the diff, which is where I'm getting to, right?
[03:35:26] [1] A lot of times historically, people kind of got away from not diffing because like the places where you don't need the diff are generally large changes.
[03:35:33] [1] Like you change to a new page. You're kind of like, okay, well, if I'm going to change to the new page and I'm waiting 200 milliseconds for my API to respond, I can just blow everything out anyways.
[03:35:42] [1] You know what I mean? Like
[03:35:46] [1] I think it's important to talk about those edge cases
[03:35:51] [1] because it also makes it very clear where signals are just like if you could ignore those edge cases or marginalize them, I think it's a no-brainer to talk that fine grain rendering is better than the VDOM model.
[03:36:03] [1] Like I don't think it's even up to debate relatively. And I know I always generally come off fairly fair on this stuff.
[03:36:10] [1] It's just the thing is there are those edge cases and I can't ignore them.
[03:36:17] [1] And the impact of how edge they are actually matters. Let's look at this, right?
[03:36:24] [1] Let's look back at our large data blob. This time a big React store. Okay, got it.
[03:36:27] [1] Let's forget. Yeah, okay. So most naive implementations would involve mapping over all the data upfront to make it reactive.
[03:36:32] [1] Something like Joey's article. We covered this last stream. I love this article because it's like exactly what we used to do.
[03:36:41] [1] Like this is a really natural progression. You start with the React developer who's just doing everything in the use state in the component.
[03:36:48] [1] It's really inefficient. And then they, you know, then they pull the signals out into these models that kind of co-locate like inside the tree, but aren't part of the tree.
[03:37:01] [1] And like this is just such a natural evolution. Like this takes me back. But for me, this wasn't enough.
[03:37:08] [1] In fact, this approach got incredibly bloated for me in the knockout days. And I was like, React kind of has a point.
[03:37:16] [1] I came up with solutions to kind of solve this or smooth it out. But I call this like the double mapping problem because you have to like map the data to make it reactive and then map the data again to while you go over
[03:37:28] [1] it to render it, right? Sure, you only have to map the data initially, you know, maybe once, but how what if the updates coming from the server aren't granular?
[03:37:37] [1] Then you have a mapping diffing problem. But I just want to use this as an example, right?
[03:37:42] [1] That's definitely more expensive than just throwing data into a single signal or into a single state variable, right?
[03:37:49] [1] Like above in React, we didn't map over it. You just like picture mapping over 10,000 rows here.
[03:37:53] [1] That would be kind of expensive building all those signals. Whereas in React case, you literally just threw the data in and was like, done, done, done.
[03:38:00] [1] I only need the diff
[03:38:02] [1] .items0 and like whatever properties I use on item0, right? We use a store here though, because we want fine grained updates.
[03:38:10] [1] The cost of a few more signals down that path is we use is no worse than the overhead of the VDOM.
[03:38:16] [1] And on update, we don't need to recreate everything. Yeah. So the benefit here of a store, if you forget about the fact that you have to basically map over 10,000 items is
[03:38:27] [1] the actual path that you go on is only a couple signals here, right? It's like .
[03:38:31] [1] items, .0, .
[03:38:36] [1] a couple user fields, first name, last name, whatever, right? So we're talking maybe four signals and then you never have to rerender anything.
[03:38:42] [1] Do you know what I mean? Like it's just the things that update. So like this trade-off for a couple signals definitely worth it.
[03:38:47] [1] But for 10,000 items in some signal store you create,
[03:38:54] [1] might not be, right? That's a huge creation cost for really fast updates.
[03:39:00] [1] But yeah, what about the other data? Creating all the signals for all the data we may never use is definitely expensive.
[03:39:05] [1] And more so, when fresh data comes from the server, if we want to keep our nice stable references, right?
[03:39:09] [1] You don't want to lose those signals. You're going to need to diff all the data to update those signals we may never use.
[03:39:15] [1] You could blow them away, but at that point, it might as well be a VDOM as now our UI layer needs to do the diffing, right?
[03:39:20] [1] So there's a couple options. You can basically say like, oh, I'm just going to use a single signal, right?
[03:39:24] [1] And then have the UI do the update. Or like recreate all the signals every time too, like that the new data comes in.
[03:39:33] [1] Like, I mean, that's expensive too, right? Like now you're not taking the cost just on create, you're taking the cost on update, right?
[03:39:40] [1] The diffing might be expensive, a bit more expensive of diffing all 10,000 rows, but maybe the memory allocation of the creation is actually even worse, right?
[03:39:48] [1] If you're just like getting a new 10,000 rows and a new 10,000 rows. Like again, I'm not subscribing to the DBMON, you know, Ryan Florence stock ticker thing of the world.
[03:40:01] [1] I'm just saying like even if it's not happening 60 frames per second, the fact that it happens at all is actually considerable,
[03:40:09] [1] right? Most fine grain demos people made when React came out were like this because writing and diffing yourself was pretty tedious.
[03:40:16] [1] Between that and mapping, it was easy to make mistakes on something that in React was just setting a variable, right?
[03:40:21] [1] Can you picture the code you need to create this custom store to diff it when it updates and to map it and then have it do the fine grain updates versus literally the code that we used in React that just did it?
[03:40:32] [1] Like there was a reason people were not into signals at the time because they were just like, like for this use case.
[03:40:37] [1] I said, this isn't the common use case, but like you just had to show them this and the React solution was like, there, done.
[03:40:44] [1] And then the signal solution, this has a whole bunch of hidden stuff here, right?
[03:40:51] [1] You might be, as I said, you might be
[03:40:55] [1] creating maybe it's not specific wrappers, but custom wrappers or generalized wrappers that kind of go iterate through data.
[03:41:04] [1] You know, this is what's hidden behind that. And
[03:41:12] [1] yeah.
[03:41:16] [1] Okay. So where was I?
[03:41:22] [1] And in a sense, it's the worst of both worlds scenario for push-pull because something needs to be there to do the pushing, right?
[03:41:28] [1] That's why you create all the signals upfront. There's an upfront cost in addition to doing the necessary work, which is diffing in this case.
[03:41:34] [1] While diffing should be avoidable in 90 plus percent of cases, it isn't always avoidable.
[03:41:39] [1] Fine grain solutions got away with this fact. Most big changes were client page navigations anyway.
[03:41:44] [1] So blowing out more than they needed to, those cases was rarely felt since they're already dealing with larger affordances and usually waiting on server data.
[03:41:51] [1] So
[03:41:54] [1] like I was very aware of this when I created Solid. I wasn't going to create Solid if I couldn't basically be better than React in all things, even the worst case scenario, or at least like have a reasonable solution comp
[03:42:09] [1] ared to other virtual DOM libraries.
[03:42:14] [1] So yeah, change of the physics. Proxies became the game changer here because we can use them to lazily create signals.
[03:42:21] [1] This removes the initial overhead, right? You don't have to map. You map as you render, right?
[03:42:25] [1] When you have proxies, you call create store. And then when you go state.items, oh, that creates a signal.
[03:42:31] [1] .0, that creates a signal. You literally only create the signals that you use,
[03:42:37] [1] which it's good. We're
[03:42:40] [1] so far, so good, right? We're getting back to where we're doing.
[03:42:47] [1] This removes the initial overhead and things that haven't been created or no longer needed aren't going to notify downstream work.
[03:42:53] [1] We have been using this effect written Solid for years. Yeah, obviously. However, I realized work on Tuporin that our diffing wasn't as optimal as it could be.
[03:43:00] [1] We still diffed everything since we needed to update our fixed references. What I mean is
[03:43:07] [1] when I created Reconcile in Solid, it actually diffed the whole blob because any signals, you know, because basically we mutated the data, right?
[03:43:18] [1] We talked about this before. So like if
[03:43:24] [1] you have a proxy and you have the target underneath it and you need to like basically
[03:43:33] [1] update that, maybe you get some new fresh data and you need to kind of diff that data.
[03:43:42] [1] You want to make sure that the new data holds. And my thinking was the proxy has to be a stable reference.
[03:43:47] [1] So like it means that we couldn't just forget about it. We still diffed everything.
[03:43:52] [1] Maybe not everything had signals that notified, but we still diffed everything to make sure that we got the updated data.
[03:43:57] [1] We went through and updated those existing proxies. You know, if they existed, we'd have to walk through the proxies and update it.
[03:44:02] [1] Now,
[03:44:07] [1] so I had an idea. If we somehow made the proxy target malleable, swappable, we could just replace the things we didn't care about without diffing them, right?
[03:44:14] [1] Because if you basically use the linkage, we saw this when we were looking at Svelte or N with Solid's internals.
[03:44:20] [1] When you go to get the next thing, if there isn't a signal there or isn't, you know, isn't like some kind of reference wrapper there or whatever, we could just, we do a lookup based on the underlying target property, right
[03:44:34] [1] ? So
[03:44:38] [1] how do you work SveaChain? Where was I?
[03:44:43] [1] If we could just
[03:44:45] [1] do it kind of like a mutable system, basically just go, okay,
[03:44:50] [1] replace the underlying object and then update the signals. If there's no signals because no one's listening, then
[03:44:58] [1] any future lookup is going to walk through that underlying object, which means you've instantly, without diffing everything, replaced all the data that's there, right?
[03:45:07] [1] Because if someone's listening to it, then a signal would exist or a proxy would exist.
[03:45:12] [1] So like there'd be something to trace across and diff, but if no one's listening to it, none of these things exist, we can swap them without any cost.
[03:45:21] [1] So basically get that same behavior that React gets in terms of diffing.
[03:45:28] [1] Since Reactivity works via chain, we actually know what is being used. If you break the chain, Reactivity things won't update.
[03:45:34] [1] So generally speaking, you can always trace signals that are created through the store and those are the only values you need to diff because any chain, like here, state.
[03:45:42] [1] items0, like any chain through the Reactivity is only, like only thing you listen to, it's going to start from the root and it's going to go through a specific path or a specific chain.
[03:45:51] [1] The paths you don't take or ones that are no longer being listened to, I built in the stores now in 2.
[03:45:57] [1] 0 that they release signals that aren't being listened to anymore. Any path you go through that like doesn't exist, you don't care.
[03:46:05] [1] You can just swap the value and you don't have to diff any further. So
[03:46:09] [1] yeah, this makes us kind of get the benefit of both systems, right? But there's a reason I'm talking about this today.
[03:46:20] [1] Yeah. The results are drastically better. We basically hit the best of both worlds again.
[03:46:23] [1] Using laziness of Reactivity plus knowledge of the graph only to do exactly what is needed.
[03:46:27] [1] Except I noticed this.
[03:46:31] [1] So let's look at this example for a minute. We have a store which has an object A with props at high.
[03:46:39] [1] And then I create an effect that console logs A prop and console log B. And then
[03:46:50] [1] I set store s.b equals B1 thing. Now, we just saw with Svelte that they actually create the signals on write.
[03:46:58] [1] That might be the solution here, honestly, of kind of working through it. But at least in what I've been working on with Solid,
[03:47:09] [1] by setting SA down this chain under another object, no one's reading from it reactively.
[03:47:16] [1] So we have signals all along here. You know, A has a signal, prop has a signal, you know, in the store.
[03:47:20] [1] But B, we just set an object here. No one's walked into it, but this object happens to be store A.
[03:47:28] [1] Like it happens to be that same reference. And then I said, okay, let's diff it.
[03:47:32] [1] Let's diff B. S.B. Let's diff it with this new version of B with this new value.
[03:47:40] [1] And the problem is
[03:47:42] [1] , if you can figure it out, because this is disjoint, it's not connected, there's no signal here and definitely no signal here on B1.
[03:47:54] [1] So it just stops diffing. And while the object swaps and replaces, if after this operation I look at store.
[03:48:03] [1] b.b1, I'll get props.yo, it won't update A because it shortcut it on Reactivity.
[03:48:13] [1] This unfortunately only logs the effect once. Let me show you in a new tab.
[03:48:19] [1] Right? So it only logs high. And what I was going to say is if we go like flush sync,
[03:48:26] [1] sorry. And
[03:48:29] [1] this is all 2.0 stuff. If you're wondering what the difference in API you might be seeing, if you go flush sync and then I do something like, I mean, I don't need this flush sync here probably, but if I go console.
[03:48:39] [1] log store.
[03:48:42] [1] b1, because it actually, sorry, store.b.b1.prop
[03:48:50] [1] , you see that it's yo. It did update, right? Because this method of swapping works.
[03:48:55] [1] It just, because there's no signals, it doesn't notify A of change. It loses the identity of it, like of being the same object because it can't tell, unfortunately, because there's no, no one ever walked this path that's
[03:49:10] [1] getting diffed.
[03:49:15] [1] Which is kind of an interesting problem because you start going, when you look at this, you go like, why didn't React not hit this problem?
[03:49:24] [1] And it's because there's no way to walk, do any diffing in React that doesn't involve walking the path.
[03:49:32] [1] But this diff is arbitrary. Do you know what I mean? Like it's not based on
[03:49:41] [1] what's being used, right? It's reconciling everything within the range that we target because it doesn't know what's being used.
[03:49:52] [1] It only knows what's being used based on what's being actually used on the path.
[03:49:59] [1] And as I said, because state can't exist in two locations in React, not really.
[03:50:06] [1] Everything will have to re-render if that thing changes. Like
[03:50:14] [1] because this doesn't work
[03:50:17] [1] , they never hit this problem.
[03:50:21] [1] Does that make sense? Hopefully, that makes sense to somebody.
[03:50:26] [1] No one is listening on the path of B. So when we diff it, shortcuts early and replaces what isn't used.
[03:50:31] [1] It is updated, but it has orphaned A. Now, this makes a lot of sense for BDOM and immutable systems since you can't expect shared references to continue to react, right?
[03:50:38] [1] If you've ever
[03:50:41] [1] used IMR, for example, I think I did this example on stream and put something in two locations and then update one of the locations, it actually forks from the other location, right?
[03:50:51] [1] Because immutable data, if you have something in two locations, you have to update in both places.
[03:50:55] [1] Otherwise, you do not end up with the same object, right? It would be weird if you assign an object, then updated it and it not to show that update in a mutable system.
[03:51:04] [1] This happens in IMR, but pretty much nothing else. Because IMR is weird because it literally looks like you're mutating it.
[03:51:10] [1] Does IMR have a playground
[03:51:13] [1] ?
[03:51:23] [1] Whatever.
[03:51:27] [1] This is like more than I wanted to deal with.
[03:51:36] [1] I guess it doesn't really matter. It's fine. I think my point is clear.
[03:51:43] [1] Like
[03:51:45] [1] in IMR, when you have an example that looks like th
[03:51:49] [1] is, even though you do this, these won't be the same. Like updating S1A will mean that S0 is not updated.
[03:52:02] [1] Like we'll see SA as A1, B2, and then SB as 3 and 2, even though you've like directly assigned it.
[03:52:10] [1] It kind of defies the logic of like
[03:52:15] [1] of assignment. But on the positive, with that constraint, diffing works perfectly optimall
[03:52:24] [1] y.
[03:52:27] [1] So something has to give. Either we restrict the rules around diffing, we opt for V1 style, less optimal diffing where we diff everything, or we restrict rules around stores or, you know, make a new type of store.
[03:52:40] [1] I think one and three are interesting to explore. The fact that today, thanks to proxies, this isn't just an impossibility gets me excited.
[03:52:47] [1] And my gut is that I'm not done learning things from React. Basically, I think this is a very important problem to solve.
[03:52:56] [1] I think
[03:52:59] [1] diffing is the reason stores exist, which is kind of funny from, I guess, a lot of people don't realize that.
[03:53:05] [1] So it's probably the most important feature is to find a solution where this works.
[03:53:11] [1] Like there's lots of ways to get around this problem, right? Like if you had to reconcile the whole store, then this can't happen, right?
[03:53:21] [1] Or if you, but then like what if it's two different stores? What if you assign from store A to store B?
[03:53:27] [1] You could still reproduce this problem simply by trying to do update along, like a diff to update along a path which is shared somewhere.
[03:53:37] [1] As long as you have shared references,
[03:53:42] [1] then diffing won't work ideally. You could say that's the constraint. You can say like, look, if you're going to diff, your data should be normalized.
[03:53:50] [1] You could create a primitive that's like called like a create diff or something that only specializes in doing diffing and following the rules.
[03:53:58] [1] And it would restrict you from having, you know, different expectations on shared references.
[03:54:05] [1] These are all possibilities here. But it's important to understand that
[03:54:12] [1] if the goal is to have basically optimal diffing, basically something that matches the approach of React.
[03:54:20] [1] And a lot of times when you match the approach to React, you end up being faster than React because React is usually not the fastest at things.
[03:54:29] [1] We need to, we're basically left with restricting the rules around diffing or restrict the rules around stores.
[03:54:35] [1] That's as far as I got before stream. I literally wrote this up at 9 a.m. this morning.
[03:54:41] [1] But I want to share this with people just to kind of the progress from, you know, since last time I got here.
[03:54:49] [1] Because I think it's important to understand that
[03:54:54] [1] there are characteristics of the BDOM that are enviable, perhaps. Not in the general case, but in some very specific cases.
[03:55:12] [1] All right.
[03:55:15] [1] How's everyone doing?
[03:55:22] [1] I'm sorry. That was a bit of a deep dive. That's our technical design consideration for this week, I think.
[03:55:29] [1] I think it's time for this week in JavaScript, which doesn't have as much stuff.
[03:55:34] [1] We already dug a bit into the Rhine Florence stuff, but you know, we can still see what we can find.
[03:55:38] [1] Give me a moment and we can get prepped for that.
[03:55:45] [1] But yeah, someone say hi in the chat here so I don't feel like I'm completely alone while I get this stuff sorted out.
[03:56:11] [1] Hi chat. Holding cat. There you go.
[03:56:20] [1] This stuff makes me wonder if signals could actually enable actually performance with UI.
[03:56:24] [1] I think there's still room here. Like it's so funny when people think that stuff's fully explored.
[03:56:31] [1] I think we can still do better.
[03:56:37] [1] Having SSL issues.
[03:56:41] [1] Thanks, Buzzy.
[03:56:44] [1] Ever since I heard that iOS retain mode, yeah. This suggests if iOS is retain mode, it suggests that we can do better than React Native.
[03:56:53] [1] I mean, realistically, I don't know if there's enough investment here to do that.
[03:56:58] [1] But if these systems are using retain mode, and it makes sense that they would for performance, then like we can do better than React, right?
[03:57:11] [1] I mean,
[03:57:14] [1] yeah, I think it's interesting.
[03:57:19] [1] All right. Thanks for saying hi. Let me see if I can get a few more
[03:57:25] [1] tabs open here when I switch to this week in JavaScript. Okay, that one's good.
[03:57:34] [1] Solid.
[03:57:38] [1] Bookmarks.
[03:57:42] [1] Why not we throw Blue Sky in just for fun? I don't know if there's actually anything relevant on Blue Sky, but
[03:57:49] [1] there rarely is. But there might b
[03:57:53] [1] e. The other problem is I can't bookmark in Blue Sky, I don't think, which has made it basically useless for me
[03:58:00] [1] for the stream perspective, right? There's no bookmark reall
[03:58:07] [1] y.
[03:58:25] [1] Yeah. No.
[03:58:30] [1] Yeah. Blue Sky is pretty much has nothing. Okay. I needed to check.
[03:58:44] [1] Okay. Cool. I think that's good. All right.
[03:58:49] [1] This is going to be like the shortest this week JavaScript ever. I know that those are famous last words.
[03:59:07] [1] But yeah, I am serious this time.
[03:59:13] [1] Okay. So yeah, let's talk about this week in JavaScript, okay? And
[03:59:18] [1] I'm going to start with just doing some solid updates because there probably hasn't been a ton of things that I reposted.
[03:59:25] [1] Yeah. What do we got here?
[03:59:32] [1] I love seeing 3D demos. I'm not going to lie. When I see people combine solid and 3DS together, it just always makes me like really excited.
[03:59:39] [1] It's just such a cool application of it. I think this is using solid just for like the menu system on the game, kind of like the way people use React.
[03:59:47] [1] But it'd be still, it's still cool. Especially when, you know,
[03:59:52] [1] it's actually a game that gets sold
[03:59:56] [1] .
[04:00:02] [1] What do we got here?
[04:00:05] [1] Learn that 9 out of 10 dentists prefer signals too.
[04:00:09] [1] That's a little fun. Yeah. See, there wasn't much
[04:00:14] [1] new stuff on the solid side this week that I retweeted. But I actually didn't check if there's anything the last day or so.
[04:00:21] [1] But see, super short. Let's keep on going.
[04:00:28] [1] Let's look at
[04:00:32] [1] bookmarks. I think I only had one bookmark that we haven't talked about this week, which is, Dev, if you're still around, you got to tell me what inspired this.
[04:00:41] [1] Hey, Grok, make a list of 25 of my mutuals that talk shit about signals. I thought this was funny.
[04:00:47] [1] Signals are beloved in our community, so finding 25 mutuals talking shit is tough.
[04:00:52] [1] Most praise them. Based on analysis, here's your top 25 mutuals ranked by engagement.
[04:00:55] [1] Who's those? Any critical notes marked?
[04:01:13] [1] Brian Carneo, admits overhead. Limits for effects, API panic, side effects web, memory management issues, alt suggestion.
[04:01:24] [1] No lies detected.
[04:01:32] [1] There is a few other. Where's the rest of this? More people responded to this. I saw them earlier.
[04:01:39] [1] I swear I saw them earlier. Maybe it's on here. Yeah.
[04:01:43] [1] Unfair. I need a citation. Memory management issues. Strong thing I said using React for re-renders is bad.
[04:01:48] [1] If you have a profile, you can't diagnose with React again, then use solid or something more nightly.
[04:01:54] [1] Signals. Also write call it as a mace falls. Hitting signals is like hitting on Lego bricks.
[04:01:58] [1] They're great for building stuff. You should use them, but they hurt if you step on them.
[04:02:01] [1] So use them the right way.
[04:02:05] [1] Fair point. My note on mem was a loose reference to your warnings on state management falls over signals in React.
[04:02:11] [1] In your March post, we used to use state management protocols attempting to break signals into React.
[04:02:14] [1] Not a word hate, just caution. Appreciate the Lego analogy. Signals are indeed powerful when used right at.
[04:02:18] [1] For my current, even creators note trade-offs. Okay.
[04:02:28] [1] Tanner. Fair point. My list is taught me to any critical point. You weren't marked as no criticism found.
[04:02:34] [1] Your posts show strong support for signals praising their performance reactivity.
[04:02:37] [1] No super seats. Apologies for the implication.
[04:02:46] [1] In good company. Stellar learner thinkers. Yeah.
[04:03:00] [1] That's interesting. Okay.
[04:03:05] [1] Let's go to my stream or my feed and see what we haven't talked about yet. We talked about meta programming with proxies.
[04:03:17] [1] Oh yeah, here we go. This is just the other day.
[04:03:23] [1] Dominic was talking about, I think there's a missed opportunity to create a front-end framework that really works well with AI tooling.
[04:03:30] [1] The amount of times I've had to correct the AI output because it doesn't quite understand control flow around JSX is astonishing.
[04:03:34] [1] I still feel like JSX in its current state isn't ideal. We should be using in 2025.
[04:03:40] [1] Salt 5 fairs better, but AI gets confused around template modules versus non-modules when it comes to runes.
[04:03:45] [1] This might get better if Salt opens up declaring state and other bits of logic in control flow, but it's still not great.
[04:03:52] [1] And someone's like, this is exactly what Remix v3 is.
[04:03:57] [1] That's funny. Does anyone know what Remix v3 is?
[04:04:03] [1] Maybe everything. I think it's because Remix that they're making AI first framework, but
[04:04:11] [1] I also not sure they actually know what that means at this point or anyone knows what this means.
[04:04:16] [1] But this is an interesting
[04:04:20] [1] thing, kind of like observation specifically. See, this suggests at least that Dominic has actually looked into it.
[04:04:27] [1] He was working on v0 a little bit, I think, or playing with at least. He works at, he's at Vercel and the Spell team, right?
[04:04:33] [1] So he's been, you know, definitely, you know, had a chance to play with this stuff.
[04:04:39] [1] I think a more radical approach to JSX. I was hacking on Inferno a while back and got this working.
[04:04:44] [1] JSX has a statements rather than as expressions. This enables JS control flow around JSX rather than the other way around.
[04:04:50] [1] The funniest thing is
[04:04:54] [1] , this looks like Marco, right? I think I actually responded that somewhere here.
[04:05:01] [1] Maybe I didn't. I swear I responded this.
[04:05:08] [1] Thought I did.
[04:05:10] [1] What the best thing about Martin's template language is it came up streaming a while back and compiled their syntax and JSX to understand.
[04:05:14] [1] The biggest thing is how whizzy wig it is since fine grain renders can already handle state declared in the middle templates.
[04:05:20] [1] Everything can be cut and pasted. Yeah. See, the thing is, while this looks weird to someone with React, like thinking that these state variables could be like inside control flows or like inside the template, this temp
[04:05:30] [1] lating could compile to solid and work exactly how you'd expect it to with only running parts of the template once.
[04:05:38] [1] Like it's perfectly doable. We just don't have a templating language that can actually do this.
[04:05:43] [1] And Marco language actually can basically do this because they have the like the let tags and stuff.
[04:05:48] [1] So like Dylan actually showed it on stream, taking Marco and compiling it to solid, which is actually pretty cool.
[04:05:55] [1] I wish there was a world where this experiment can live in and stop experiment today.
[04:05:58] [1] It takes so many bucks. Marco has innovated so many ways, but syntax approach is ahead of its time.
[04:06:01] [1] Yeah, exactly. It's interesting in base parser, use Marco is quite fast and flexible.
[04:06:05] [1] The opinion stuff is in the compiler. Nowadays, yeah, simpler thanks to Bollaire with a chunk work with simple JSX transfer form though.
[04:06:12] [1] So yeah, I mean, I don't know.
[04:06:18] [1] At this point though, I would only trust someone like Dylan to make this templating language for me.
[04:06:22] [1] And I think he's a little bit busy with Marco 6 on the way.
[04:06:28] [1] But I did want to give the shout out because
[04:06:33] [1] it's sad how hard it would be to get updated templating language like this. Like erase, like forget about the runes.
[04:06:38] [1] Like he's got runes in here, but like just like basically or something like runes in here.
[04:06:41] [1] Just forget about that. Like that's obviously what he kind of was going for with his Inferno X.
[04:06:47] [1] But like this could be create signal for all I care. Just the fact that you could somehow have this kind of nested statements.
[04:06:53] [1] I don't know if this exact syntax makes a lot of sense to people. Like how it could decipher like what is expressions or not.
[04:07:03] [1] I don't know if this exact syntax works. Like there's a lot of rules you have to follow.
[04:07:08] [1] But I think that there is some kind of desire for something like this. I just, I'm probably not going to be the one that builds it.
[04:07:19] [1] Probably not. Because it, like,
[04:07:23] [1] yeah, I guess Bollaire can help with TypeScript. But then like you're taking on, like, I kind of like, even though it's not perfect with signals, I kind of like how TypeScript just kind of works.
[04:07:33] [1] Like our tooling with solid has always been relatively lightweight. We let React carry, you know, and everyone working React carry the work.
[04:07:39] [1] This is like, even if I think this is like amazingly better, it's a huge investment.
[04:07:49] [1] Like Dylan went through a whole stream. He said it's easier now, but he literally showed all the things you have to do to like make your own language.
[04:07:57] [1] This is a great stream. If you ever want to, like people want to catch back on that, let me just copy the link here.
[04:08:05] [1] And this is a great link too because he,
[04:08:08] [1] this is him actually showing Marco and outputting solid.
[04:08:13] [1] Yeah, what's Dominic saying in the chat here?
[04:08:20] [1] One of the benefits, sorry, get that saying. One of the benefits of review series that people are going to get a walk through all the steps that lead to solid.
[04:08:25] [1] Yeah, probably.
[04:08:28] [1] I actually have a fully working example locally. Use the Inferno extension that supports TS and Prettier.
[04:08:32] [1] Very cool.
[04:08:34] [1] And it doesn't use signals. It uses a new hybrid diffing model. Fair enough. I have that partial top down rendering that doesn't need two-way connections.
[04:08:40] [1] Gotcha. There is also no proxies on objects because it uses stack analysis to connect the object reactivity in the hood.
[04:08:46] [1] Yes. Okay. Makes sense. I said, I just want the templating language because I think like JSX, it could have more application than just what's going on there.
[04:08:58] [1] I think you have a different non-signals rendering model. I think that templating language should also work with signal.
[04:09:05] [1] Like I think the applications could work in multiple ways. Basically, I get a component-centric model is the only place where it doesn't make as much sense because I'm gathering your approach is still, well, actually, is
[04:09:17] [1] it completely? I'm gathering it's still using hybrid diffing, like some kind of partial mechanism, right?
[04:09:22] [1] Partial top down rendering. Okay. So yes, but you're not going to rerun the whole component because state in the middle runs.
[04:09:29] [1] You're going to run partway through the template when the state runs. Yes, yeah.
[04:09:34] [1] Yeah, exactly. Yeah. Yeah, so yeah, I just, yeah, I don't know. I mean,
[04:09:45] [1] maybe, I don't know. We should talk more. I think if the actual templating is
[04:09:53] [1] extractable, like just the core part of the templating ASTs and the TypeScript and the thing, I mean, it might be fun to play with.
[04:10:04] [1] Dylan did a stream the other week talking about R6. I thought he was brilliant, but the interviewer was a bit reductionist and you could see Dylan was like, I want out of here.
[04:10:10] [1] Oh, I mean,
[04:10:14] [1] I told them, I mean, maybe I should check my Discord. They can come, when they're ready, they can come back on.
[04:10:21] [1] I told them we weren't going to cover Marco until Marco 6 was like in thing, but now that it's like RC or beta or whatever, like it's like on the way out, I'm perfectly fine to start hyping Marco again.
[04:10:32] [1] So if he wants someone who will listen to him talk for several hours and ask pertinent questions, I'm all for it.
[04:10:40] [1] All right.
[04:10:44] [1] But yeah, this is cool, Dom. It's very, very cool.
[04:10:49] [1] And it feels more JSXy than the Marco language. So like I'm all for this.
[04:10:57] [1] Yeah, maybe we should do a stream together. This might blow your mind a bit. Yeah, there's no virtual Dom or holes.
[04:11:01] [1] It's just we don't associate, we don't associate the state with the effect. Instead, we always top down update and work out connections that way.
[04:11:09] [1] Okay. The downside is that state can't be created outside of a module. It has to loop quote in our function and run.
[04:11:15] [1] Okay. Okay. So it's a bit like a hook. Yeah. I'm, yeah, let's, when's it? Yeah, let's talk about that too.
[04:11:22] [1] I'm interested both in the templating and I'm definitely interested in
[04:11:27] [1] Inferno X or like this approach.
[04:11:31] [1] I know it's a long road from where you're at, where you have something working and can show people to getting stuff through and let's start that ball rolling, you know?
[04:11:39] [1] Let's do it.
[04:11:48] [1] Okay, so the stream ad. Okay, yeah. This was fun.
[04:11:55] [1] Yeah, sorry. I mean, you guys should know by now. I'm sure everyone here follows Dominic, right?
[04:12:00] [1] I'm actually just going to stick Twitter link right in here in case people don'
[04:12:06] [1] t, right?
[04:12:08] [1] Just throw in there.
[04:12:14] [1] I built it 7 days in February. I mean, you shared it. Yeah, you built it in February and then you shared it like beginning of March and I was just out with on paternity.
[04:12:24] [1] You want the show? We were going to do a call and I'm like, man, I just, now is not the time, but I'm more than ready to check the stuff out now.
[04:12:35] [1] Anyways.
[04:12:38] [1] Oh, okay. So this is official then.
[04:12:45] [1] I wasn't sure if this was public knowledge yet.
[04:12:51] [1] Software at Vercel, author of Lexical and Inferno, former core maintainer engineer on React and SvelteJS.
[04:12:58] [1] If I'm reading this correctly.
[04:13:02] [1] I didn't see, I guess it's not something people
[04:13:07] [1] advertise. Anyways, interesting.
[04:13:12] [1] Explains all the AI stuff and the v0 stuff. Anyways, we're all good.
[04:13:19] [1] I mean, Vercel caught them all a while ago.
[04:13:24] [1] Okay.
[04:13:29] [1] Where am I going?
[04:13:34] [1] I'm not working on the feature flag team at Vercel. Oh, you now are, so not. Okay, you worked with the feature flags team on Vercel.
[04:13:43] [1] Okay, so that's like build process, like terms of, okay. Interesting.
[04:13:53] [1] Yeah, which makes, as I said, I make sense. You need to get that outlet building some new framework stuff.
[04:14:01] [1] I want to see it. I think a lot of people here would want to see it too.
[04:14:07] [1] Okay. Yes. Someone asked earlier if I watched Async Spelt, learned with Jason. Yes, I definitely watched it.
[04:14:18] [1] I, you know what? Let's just, let's just, I'm going to pop this open and then we'll, and then we'll, we'll go from here.
[04:14:28] [1] Let me just, I need to change the way that I'm sharing my screen.
[04:14:37] [1] Because so you can actually hear this.
[04:14:47] [1] What do we want? Chrome tab. Yeah, let's do this one. There you go. I'm going to go down here so I'm out of the way.
[04:15:05] [1] Just an aside, the stream is great. Spelt has basically added server functions.
[04:15:12] [1] They've added
[04:15:15] [1] like, they have like query, command, and form, which are basically the equivalent to like wrappers.
[04:15:26] [1] Like we have query and action in Solid Router. So they also have management of
[04:15:35] [1] like granular cache invalidation in these patterns. And they actually did single flight mutations, as we found out last stream.
[04:15:43] [1] And that led to, he demoed it and I'd been watching quietly the whole stream because I'm super curious to see if, you know, what was new.
[04:15:52] [1] And, you know, some of the async syntax stuff is kind of interesting and, you know, it's cool to see these kind of patterns emerging.
[04:15:58] [1] But, you know, the part that I wasn't as familiar with was the, basically all the server function stuff, you know, the stuff that's
[04:16:07] [1] kind of very similar to what we put in Solid Start and that you've seen, started seeing now in TanStack Start.
[04:16:13] [1] So I was kind of curious like how that worked and if it was very similar. And it looks like they've actually implemented all the way to this kind of similar point that Solid Start did.
[04:16:22] [1] It was kind of funny watching parts of the stream and I'm like, Rich is better at explaining stuff sometimes than me.
[04:16:28] [1] Because I was like, parts of it, the stream felt like I did a stream with Jason about a year ago on the exact same topics where I showed server functions, showed cache and, or we call it query now and action and showed the
[04:16:41] [1] single flight mutations and showed like almost exact same demo in Solid and Spelt about a year ago.
[04:16:46] [1] And
[04:16:48] [1] Rich's explanation actually like made way more sense to me and I was like, oh man, people should just watch this and then kind of go back, you know, on the Solid one.
[04:16:56] [1] But this, the single flight mutations did lend to this funny moment. Hopefully you guys can hear this.
[04:17:01] [1] First version of the design. You can hear that, right?
[04:17:07] [1] Well, if you're not, it's only a 30-second clip, so I don't care.
[04:17:13] [1] First version of the design didn't have single flight mutations. And we were like, is that a problem?
[04:17:17] [1] I mean, it's probably not because like a lot of the time you actually don't know what data is going to be needed for the next thing.
[04:17:21] [1] So there's a risk of overfetching if you do a single flight mutation. But you know what?
[04:17:25] [1] If we don't have single flight mutations, Brian's going to kill us. Like he's just going to murder us on his stream.
[04:17:33] [1] So we iterated until we found a design that we liked. Carne auto driven development, I get it.
[04:17:38] [1] Yeah, exactly. I mean, that's been the story of front end for the last couple of years, right?
[04:17:44] [1] Indeed, indeed. First version of the design. But yeah, funny moment. I hope, I didn't think about it, but I mean, Dominic's been in the stream past when he's working on Spelt and stuff.
[04:17:55] [1] And sometimes I guess I am very critical of decisions on frameworks. I didn't really see myself as a bully, but I mean, if it's for good cause, you know,
[04:18:07] [1] yeah, you know, I'll take it.
[04:18:12] [1] To be fair, I said I slightly disagree. The problem of overfetching comes with route level hoisting, right?
[04:18:21] [1] Like it's present because you've hoisted stuff out to the route. If you do it lower, you can't remove the waterfalls necessarily on code splitting, but you can,
[04:18:32] [1] you can fetch slightly less. So, but the thing is, you made that decision already when you hoisted the stuff out to the route level, right?
[04:18:39] [1] So the whole trick to single flight mutations, at least I haven't looked too much in detail with the Spelt version was we use the router to make the, to do the information.
[04:18:49] [1] It looks like they do too as well. And then because you can choose to invalidate only certain query keys,
[04:18:56] [1] and we know which query keys are already on the page and which ones are new, we can actually do a differential on the server too.
[04:19:04] [1] So when we run the server loaders and actually like, you know, the loaders on the server and actually run all the separate queries, we hit the query and go, oh, we don't need this one.
[04:19:15] [1] Like it's already on the page. So we actually only fetch the differential of the new data.
[04:19:19] [1] So like if, if, if, if say like you have some stuff you fetched at the top of the page and then you, you know, it's nested router and then the section that you're updating, you're adding an item and then moving back to the
[04:19:31] [1] list page. So you're navigating away. What we can do is when you post the item on that page, the loaders are going to run for the whole, for the, for the whole page in theory, but it doesn't redirect.
[04:19:46] [1] It goes, okay, I'm going to the next page. So on the server, it's like, okay, I need top, top new page.
[04:19:51] [1] It's going to recognize that you should already have the data for the sections above.
[04:19:56] [1] And it's not going to refetch that. It's actually going to only, and if some of the data is shared or something, it's only going to fetch the stuff that you don't already have on the server or that's impacted by the inval
[04:20:04] [1] idation caused by the mutation. So in that sense,
[04:20:09] [1] it kind of solves the RSC problem of like having to fetch everything with a server-side cache.
[04:20:15] [1] Ironically, it's using the client-side cache knowledge to basically
[04:20:23] [1] not have to use caching on the server, which is kind of crazy. But what I'm saying is I actually think it is actually a general thing because you've already authored your app in such a way that if you consider that over
[04:20:37] [1] fetching, you wouldn't hoist stuff up to loaders. So I actually think this is a really relevant improvement, both because it turns it all into a single flight and because you keep all those aspects of a client where you don
[04:20:51] [1] 't have to, you know, fetch everything. When you on the client, if you're purely doing this on the client side, you would do two fetches, but the client would be like, yeah, I already have this data.
[04:21:01] [1] I don't need to do this and only fetch the new stuff. We just transcend that onto the server without needing all the cache APIs on the server.
[04:21:10] [1] So it's like super powerful in both ways. So yes, I'm slightly disagreeing with the importance of it, but Spelt implemented it anyway.
[04:21:18] [1] So I mean, I have nothing to complain about. Sorry, I know it's a tangent. You guys are all like celebrating the reference, right?
[04:21:26] [1] But I'm like still focused on the technical. But yeah, no, I, it's cool to hear.
[04:21:34] [1] And put out there the influence there, even if it's through bullying people on my stream, apparently.
[04:21:40] [1] I know he's not being completely serious there, but sometimes I wonder a little bit.
[04:21:45] [1] You know, I'm probably, it's weird being in the place of being the framework author of a competitive framework and also possibly one of the most critical people around decisions that frameworks make because it puts incredible
[04:21:59] [1] scrutiny on my own decisions, obviously, which means I have to be very, you know, when Fabio comes around and tells me that I'm doing things wrong, I have to be very cognizant of the fact that like, you know,
[04:22:12] [1] he is probably right on some things, at least on some elements. Where do we meet, you know, but on the other hand,
[04:22:19] [1] yeah, I don't know. It's probably a position I can't hold forever because, you know,
[04:22:25] [1] if Solid is successful, then eventually maybe it'll be a position that looks like punching down
[04:22:31] [1] . But I'm, I'm super stoked. Like this is one more thing that makes SpeltKit like, you know, alongside Solid Start and the direction TanStack Start, the direction that I thought things would go.
[04:22:43] [1] Like it's exciting. I did that talk at MVU Amsterdam in February 2024, and I did the stream back in December, I think 2023, where I said like, this is the shape of frameworks to come.
[04:22:55] [1] I was very, very sure that this was the right pattern, at least with what technology we had today.
[04:23:03] [1] And it's cool to see that SpeltKit is now also what I consider a framework in that scope.
[04:23:09] [1] They have their own details, which will say, you know, better make sense for Spelt.
[04:23:13] [1] I'm cool with that. Generally speaking, solution-wise, like this is, this kind of hybrid server model is a very powerful model compared to RSCs.
[04:23:22] [1] Can we augment RSCs into this? I don't know. Does it make sense? Maybe RSCs will eventually be get to a place where they could be arguably a better model, but right now, today, given what we have, this is, this is like,
[04:23:34] [1] this is really cool and really good. And I'm so stoked to see that like SpeltKit is joining us on this thing along with, as I said, like TanStack.
[04:23:43] [1] Now you can get these patterns in React, Solid Start, or sorry, React Solid and Spelt.
[04:23:55] [1] Yeah, it's actually very interesting to see that kind of influence of, you know, what we do in the stream there.
[04:24:03] [1] We haven't had the same impact on the Vue community, I admit, except for like, I guess Vue Vapor, but
[04:24:12] [1] , you know, like the meta framework side, it's kind of hard because Nuxt is like so good at what it does in terms of DX, in terms of things.
[04:24:18] [1] But architecturally, I think my gut is that Nuxt does a lot of the same stuff, but it presents it in a different way.
[04:24:27] [1] I never quite know how Nuxt works. Daniel wrote it, come and try and show me, but, you know,
[04:24:36] [1] I, there's something about the Vue that's always been a little bit alien to me.
[04:24:40] [1] And I don't mean like alien signals. I mean like just different from how I look or approach problems.
[04:24:50] [1] And I think that's part of what makes Vue very unique. I mean, every framework has its elements, obviously too, but I'm just
[04:25:00] [1] speaking of Vue specifically. Okay. But yeah, people should check out the stream.
[04:25:08] [1] Two very exciting things around async for Spelt.
[04:25:15] [1] And, you know,
[04:25:17] [1] actually, you know what? Let's just, let's just link the whol
[04:25:23] [1] e, let's just link the whole video here anyway.
[04:25:28] [1] Why not? People should check it out. It's, I love, I guess it's called Code TV now, but I was going to say I love Learn with Jason.
[04:25:36] [1] It's, it's always,
[04:25:39] [1] he's the best at taking the I'm a beginner and then where to go thing. Like I was trying to play that role a bit with the AI stuff today.
[04:25:46] [1] Jason knows exactly the right questions. And as I said, in the past for Solid, he's the one, like it was on his stream that I figured out how to actually sell Solid to React developers the first time.
[04:25:57] [1] It was like literally the first time, you know, one of the first times we like did the like hoist state example, you know, where it's like, oh, local state, global state, you know, so great stream.
[04:26:11] [1] I'm glad he's still doing it. And yeah, Code TV dev
[04:26:19] [1] . All right, that's it. I told you this one would be short. I don't really have any other topics to talk about.
[04:26:27] [1] It's only like 20 some odd minutes. I don't, I think I went through all our streams.
[04:26:32] [1] There was nothing on Blue Sky, right? Blue Sky.
[04:26:38] [1] Blue Sky. Nah. No.
[04:26:43] [1] I think I'm good for this week.
[04:26:47] [1] So
[04:26:48] [1] yeah, let's call it a stream and everyone have a great, great weekend.
[04:26:58] [1] I've got some more work to do to figure out how to fix, merge the immutable, immutable worlds of diffing.
[04:27:05] [1] So
[04:27:06] [1] hopefully next week I'll have an answer for everyone.
[04:27:12] [1] Yeah, definitely. Yeah.
[04:27:17] [1] Oh, yeah, yeah. Jason Brad Preston, two OGs in the onboard space. Yeah. All right.
[04:27:23] [1] Let's see. Is there anyone worth rating right now? I don't know. I never know. I don't fall enough people.
[04:27:29] [1] Yeah, it's all good. I'm just going to
[04:27:33] [1] call it then. All right. Have a good one.