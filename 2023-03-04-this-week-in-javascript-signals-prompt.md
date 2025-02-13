---
showLink: "https://www.youtube.com/watch?v=g584AIL1HtI"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "This Week in J̶a̶v̶a̶S̶c̶r̶i̶p̶t̶ Signals"
description: ""
publishDate: "2023-03-04"
coverImage: "https://i.ytimg.com/vi/g584AIL1HtI/sddefault.jpg?v=6402482e"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp).
  - Let descriptions flow naturally from the content, avoiding formulaic templates.

Format the output like so:

    ## Episode Description

    One sentence description of the transcript that encapsulates the content contained in the file but does not exceed roughly 180 characters (or approximately 30 words).

    ## Episode Summary

    A concise summary of a chapter's content, typically ranging from 600 to 1200 characters or approximately 100 to 200 words. It begins by introducing the main topic or theme of the chapter, providing context for the reader. The summary then outlines key points or arguments presented in the chapter, touching on major concepts, theories, or findings discussed. It may briefly mention methodologies used or data analyzed, if applicable. The paragraph also highlights any significant conclusions or implications drawn from the chapter's content. Throughout, it maintains a balance between providing enough detail to give readers a clear understanding of the chapter's scope and keeping the information general enough to apply to various subjects. This summary style efficiently conveys the essence of the chapter's content, allowing readers to quickly grasp its main ideas and decide if they want to dig deeper into the full text.

    ## Chapters

    ### 00:00 - Introduction and Overview
      
    A comprehensive description of the content, serving as an overview for readers. It begins by introducing the main themes and concepts that will be explored throughout the chapter. The author outlines several key points, each of which is examined in detail. These points are discussed in terms of their significance and potential impact on various aspects of the subject matter. The text then explores how these core ideas are applied in practical contexts, highlighting their relevance to current issues and challenges. Throughout the chapter, connections are drawn between different concepts, demonstrating their interrelationships and broader implications within the field of study.


## Transcript

[00:00:00]  Hello everyone, welcome to my stream today. Sorry I'm running a little bit late, a little bit less organized this morning. It's been a long week. How
[00:00:16] 's everyone else's week doing? This was not the week that I initially intended it having, I have to admit. "Is it about Solid 1.7?" I
[00:00:36]  was intending to talk about Solid 1.7, remember? I was like, "Yeah, we should talk about this really cool stuff we're working on." I did
[00:00:43]  not work on Solid 1.7 this week. Not very much, at least. Yeah, I need this orange juice, honestly. I am tired. Yeah, it
[00:00:58] 's Friday. Yeah, let's... Hi, everyone. Yeah, so many people coming in to say hi. Yeah, let's, we can go tell the Twitterverse
[00:01:15]  here that we're streaming. Give me two seconds. Although I admittedly just only advertised the screen 15 minutes ago, but, you know. We're live.
[00:01:32]  What is it? Sorry, I know I'm not sharing anything on my screen yet. Twitch. TV/RyanSolid. I said weird, but technically I
[00:01:48] 'm just live, right? I have no guest today or anything. All right. Cool, cool, cool. All right. Yeah, so for those unfamiliar with stream,
[00:02:01]  I don't have a cool intro music or anything. So this is where I just kind of kill some time while people join on, get past their lovely Twitch pre-
[00:02:09] roll content, because I'm not clever enough to figure out how to run planned ads and stuff. And honestly, like when I'm by myself, it's kind of fine
[00:02:17] , but like try and do like three hour streams with guests, like I usually do, and then like be like, Oh, sorry. Um, you gotta like stop
[00:02:25]  right now. We're gonna, we're gonna take a break. Like stuff doesn't flow on a schedule that well. I'll tell you that much. We were here
[00:02:34]  before the tweet. Yeah. I mean, we could talk a little bit about Dominic's framework as well. I think it's, it's worth talking about.
[00:02:46]  Um, yeah, no, there's, there's, there's lots of interesting stuff. We can, we can look at Signia a little bit too. Why not
[00:02:56] ? No, I, I don't ping people on our discord. I have to admit like there's occasionally times I'll do that. Like maybe if I do like a
[00:03:07]  major version release or something, but I, I get really, I get really annoyed by getting pinged on discord all the time and not by like individual people. That
[00:03:15] 's fine. They ask a question. I mean, those ones are fine. Cause I'm like, okay, someone wants to know something. I'll, I'll go
[00:03:20] , you know, see if I can help them, but it's like the, the everybody come check out our crap. Like I haven't figured out how to like mute
[00:03:28]  that. I can like mute the whole channel, but like, I still get pinged, pinged by that. And it's like, like marketing stuff that like,
[00:03:36]  isn't helpful. You know, I don't mind if people are like, Hey, I don't understand this question about solid, you know, whatever. But like
[00:03:43]  marketing stuff on channels, just, it drives me nuts. Cause like, I see a number and I'm like, Oh, I, I should, you know, have
[00:03:50]  like three or four of these that I should go and, you know, look at. And then it's all like, you know, whatever. We got the signal
[00:04:06]  that you were alive. See what you did there. Yeah, yeah, yeah. Yeah. Yeah. Yeah. This week in signal memes. I mean, we could talk
[00:04:13]  about that too. Michael, your, your work is, you know? Yeah. Yeah. I mean, I was busy doing a lot of things this week, honestly
[00:04:30] . Um, but yeah, I, it's, it's, it's definitely takes when, when you're, when you're in that position where you have the conversation
[00:04:40] , you definitely have to like, put a lot of thought in it. Not the amount of time it takes for Theo to intros, um, uh, um,
[00:04:50]  signals. Sorry. It was just, it was funny. He was covering the signal stuff on stream when Dan replied to my post. And then I, I was like watching
[00:04:59]  the stream in the background, kind of like, you know, going like, okay, I'm going to get started back on some solid JS work. And then it was
[00:05:06]  like, I was like, Oh, I'm going to have to respond to this. Aren't I? Uh, yeah, no. Okay. Have I killed enough
[00:05:14]  time yet? Uh, let's see. Oh, see, there we go. This, this is, this is important information. Yeah. Everyone and here pings are
[00:05:36] , are, are, especially on like other servers are really, really annoying. And I can't even keep up with chat. This is, this is, this is
[00:05:57] , this is not usual here. Okay. No intro music is fine. Okay. I think I've, I'm, I'm back on it. Yeah. Okay
[00:06:12] . So let's, let's, let's give this little history, a little context. Okay. The reason everything that happened this week and the whole, you know,
[00:06:23]  I don't want to call it drama. Cause some people are like, Oh, this is Twitter drama. This is kind of dull. And I, I think that's
[00:06:29]  right. Cause this isn't really too much drama. At least it's like, there's some like good discussion happening here, which is something that, you know,
[00:06:38]  I'm actually pretty happy about. Um, but the reason this all happened from my perspective is that, I mean, some people want to believe this, you know, even
[00:06:52]  though I've, I've been telling people, I've been paying attention to angular for the last several months. Um, I've mentioned this on stream and it's not
[00:07:02]  just cause I kind of knew they were going to go to signals. It's because there's been like a change in the, in the guard, so to speak,
[00:07:14]  like not completely, like there's a lot of old time angular people, but a lot of the people from the beginning moved on different projects and like there's new blood coming
[00:07:24]  in with new ideas. And the truth of the matter is angular was always probably not as bad as people like to make it out to be. Honestly, I don't
[00:07:38]  know angular enough to know this, but one thing that was interesting to me was that there's a lot of like, and I think this happens a lot of big companies where
[00:07:46]  you have like lots of people working projects. There's a lot of like experiments, little tertiary things you get a chance to actually work on and they never see the
[00:07:54]  light of day. And it's very interesting to me that like, you know, things like quick came from, you know, like Michiko actually presented it at an angular
[00:08:05]  conference in 2019. Well, he's still like Google basically, he's like, this could be the future of angular and people are kind of like, but the ideas are
[00:08:12]  there. And ever since I saw that, I'm like, okay, I was probably sleeping on angular unfairly because if I, if I'd seen quicks or
[00:08:20]  sorry, Michiko's presentation, you know, a couple years earlier, I feel like it would have saved a lot of time. But anyways, I've been, I
[00:08:33] 've had people from angular on stream, teach me adminco. We had Alex and power last week. And the thing is angular just has been coming back in the conversation
[00:08:46] , even for silly things like allowing self closing tags, which seems like such a inane, stupid thing, but people are talking about it again, they're actually only just
[00:08:58]  adding hydration. At this point, most frameworks have had hydration for like, you know, five ish years. Angular is almost there. They almost have hydration. So
[00:09:06]  it's not like necessarily pushing the, the, the, you know, door open on like bleeding edge innovation from like the outward perspective, but there's a lot of really
[00:09:17]  smart people re-examining like the, like the fundamental position of one of the most largest used frameworks in the, in the world, you know, so like
[00:09:31]  this is a huge impact. It doesn't matter what anybody on Twitter thinks about angular. Angular is a widely used framework and very smart people working on it, working on
[00:09:46]  attacking the problems of the day now, you know, and okay, this is a bit of like a lead in, you know, kind of like meander. But what
[00:09:53]  I'm getting at is when angular announced signals, and I think we all remember that, that was a couple weeks ago, maybe three weeks ago. Let's see if I
[00:10:04]  can find it. Actually, no, I'm just going to start presenting my screen. Cause like, why not? We'll just kind of go as we go.
[00:10:10]  Not slides. Sorry. All right. Sure. Um, where were we? I mean, I gotta go back a little bit here. Yeah. Today we are excited
[00:10:27]  to open our first PR of the exploration into fine-grained reactivity. Um, this is February 15th. From the moment this kind of was posted, a bunch
[00:10:39]  of people are like, first of all, like, like signals, you know, WTF, like what, what, what is this? But more, it's just
[00:10:47]  like a whole bunch of people came out of the woodwork to talk about it. Cause there's like a wave. Cause with view already on fine-grained react
[00:10:57] ivity felt having its own reactivity, but for most people's perspective, it kind of feels like this, um, solid, obviously preact. Um, I already mentioned
[00:11:08]  view. I have to make sure I mentioned view. Cause we always forget view. So I might mention view two or three times just and view. Um, so suddenly angular
[00:11:20]  coming on, um, sorry, and quick, sorry. It was like everybody talking about this reactivity thing. And, um, it kind of got pushed pretty hard
[00:11:34] . Like not just this, cause the angular guys are just like, oh, here's an idea. But then like, I think what really triggered this thing was builder guys
[00:11:43]  with the quick guys are like, uh, what was the blog? Use signal. Use signal is the future of frameworks. Interesting article. See, February 16th,
[00:11:56]  one day later from, um, Mishko Hevery, right? MobX nailed it. Yeah. I mean, MobX was very, very important to this,
[00:12:05]  right? Um, MobX and view both were I, and I, I, I, I want to talk about it cause you don't, it's kind of
[00:12:16]  funny. Like they both have slightly different philosophies from where we're sitting right now. Cause they, because of the time period that they came from, they, they probably
[00:12:26] , there's, there's certain elements of it that they like were value more than other elements. Although I think this has been changing in view. View's been evolving,
[00:12:36]  but in general, they solved a lot of the problems of the, of the previous gen in very short order. People don't realize this, right? Yeah.
[00:12:56]  I think that's what? Oh, solid. Yeah. Yeah. Yeah. Yeah. I, I guess I could say solid already has that. We released a library to
[00:13:04]  do that about five years ago. Um, but that's, I don't, I, we, we don't do what Preact does. We, our version was
[00:13:13]  more like what MobX does. Um, like Preact is actually doing something really cool with signals in a VDOM. And we've talked about it before.
[00:13:25]  Um, but that's not like where this started. Um, yeah, let me catch up with chat with a little bit. And can I open Twitch for a moment?
[00:13:33]  Just, sorry. Give me two seconds. My problem is I don't see all the extra stuff that comes in from Twitch. And I want to make sure that I don
[00:13:41] 't miss anything or miss anyone. Yeah. Here. How am I, how am I doing Twitch chat? You guys alive as well? Yeah. Okay. We're
[00:13:48] , we're, we're, we're here. Okay. So what I'm getting at is Angular basically being like, Hey, signals just causes like really aggressive push.
[00:14:12]  And it's funny because I was not part of this aggressive push. Some people call me like the CEO of signals. out of this whole thing. And because of,
[00:14:18]  you know, all the content and teaching materials and stuff. And it was actually kind of a joke actually, because on Twitter, you know, everyone's a CEO of a
[00:14:24]  company, you know, and they're like, you know, it's kind of like a fake title. That's where that came from. But suddenly there was very,
[00:14:34]  very not like, Oh, this is a cool idea, but like very, very strong language. Like this is why signals signals better, you know, et cetera.
[00:14:47]  And this article, I think might have been like the tip off point because sure, Angular gets them and people are talking about it and it's like hype. But then when
[00:14:58]  this article comes out, like, I think, where was it? Um, yeah, sorry, here's the CEO of signals thing, but let me get here.
[00:15:09]  Do do do do do do do. Um, yeah. Okay. Yeah. Yeah. See this, this article shows up in the this weekend react thread. Um,
[00:15:28]  and yeah, it took, it took about a week. Andrew Clark responds. I don't really mean to be too dismissive of the enthusiasm, but I just prefer
[00:15:37]  an imaginary world where the main thing you think about when building components is something other than optimizing update performance. And this kind of, this thread started really the debate. And then
[00:15:51]  we had a whole bunch of other, um, people kind of chime in. And I think I covered this on last week a bit, because this was like what, like
[00:15:59]  last, I want to say like Tuesday or something like week before, but I kind of involved myself in this, these conversations at the beginning of the week. And then
[00:16:10]  I was very busy working on, um, some other stuff. Uh, first, some of you who don't know, um, one of the biggest solid start production websites
[00:16:21]  was launched on Friday. Um, uh, and you know, with any first big production launch, uh, we, we needed to actually, um, spend some time
[00:16:32]  ironing out all the kinks that only happened in production. Right. And, uh, so I kind of tuned in off this conversation by about Thursday and it was kind
[00:16:51]  of, it was kind of funny because this just kept on going all weekend. People just kept on talking through Friday through Thursday having tons and tons of conversations about this stuff
[00:17:03] . And I was like, okay, let's, uh, let me, let me show you what I'm talking about. I was like, let's, uh,
[00:17:10]  where are my bookmarks? What I do for my stream, right? Cause I, I try and grab bookmarks, um, to people, um, to talking about
[00:17:18]  stuff. Um, you know, so that I can like talk about, about points on thread. And then I found that like, I was just like bookmarking
[00:17:25] , like a whole bunch of stuff. There's even more here stuff like I removed over time, like of just so many conversations. And I, I honestly couldn't be
[00:17:33]  everywhere at once and I couldn't respond to them all. So like I was, and I was like, it was, I was like, this is just like chasing
[00:17:38]  down craziness. Like it was, you know, like there's so many pieces to pick out and it's not just like, I highlighted a few, but like,
[00:17:51]  like, uh, what kind of stuff we have here? People from the community coming in, you know, Mark Erickson, uh, I, which, which
[00:18:01]  was the one that I was looking for? Like we've got people, Jason Miller from preact. There, there, there's a whole bunch of people, you know
[00:18:08] , um, like, like this one, like, I mean, there was, uh, like here's Pete hunt. I think you guys should be way more aggressive and
[00:18:17]  pushing back against this stuff, throwing out react programming model, adopting something like singles or worse signals plus a DSL. It's a huge step backwards. Yeah. Huge
[00:18:24]  step backwards. Most people haven't internalized that. No, can't change the, where is it? Uh, hi. I think today's react team navigate the transition
[00:18:36]  from upstart to incumbent way better than I ever could, but the barbarians are at the gates. Once again, it might call for some new tactics. Right.
[00:18:51]  Um, so like, like if you go through this thread, I think the other Android posted something earlier too, um, in a different thread, uh, let me see
[00:19:05] , was it not this one, this one. And then there, there's a whole, cause like this, the, this thread was all about signals are all about performance
[00:19:18] , not about developer experience. And then this thread was all about the original one was all about like, uh, it was also about DX, but then also devolved
[00:19:28]  into this thing. Reactive programming is mostly a dead end. It generally trades initialization speeds or update speeds. It's mostly the opposite of what you want in UIs
[00:19:36] . The hardest part of react fake reactors is lining up the data sources to screen once, you know, it's not, you know, and it's not, it
[00:19:49] 's not like the core team is without like their bias. Like I have my bias, like we're tweets like this get responses, like very wise, you know, like
[00:19:59]  it, it, it, it is the whole cast of the react documentary actually. Cause Jordan, oh, I guess Jordan walk wasn't here's Jordan walk creator react
[00:20:16] . I was going to elaborate on this exact point. So glad you mentioned it. Setting up subscriptions has a cost. And some of the most important updates are actually generating large
[00:20:23]  new blocks of content, such as writing new feeds story. As you go. Yeah, he's, he's absolutely right. This was a good argument 10 years ago
[00:20:31] , but like this is, this is, this is sort of the thing, as I said, I, there was so much of this from, you know, you know
[00:20:44] , I don't think Devin from parcel, like a whole bunch of people, just like a lot of stuff. And I was just like, there was no possible way
[00:20:52] . I got to Sunday and like trying to like turn off my phone, hang out with my family, you know, have a good weekend. And it's just like
[00:20:59] , it's like ding, ding, ding. Like, you know, I was like, let me, uh, uh, sorry. If I, uh, let me
[00:21:11]  go back to, to where I pulled this. No, I went too far. Um, is that this one. Yeah. Sorry. Yeah. I, I think
[00:21:29]  I went to the wrong one. What was I want to bookmarks. Okay. Like, um, this conversation where I got all these Dan quotes from where, you
[00:21:41]  know, I use them in the article later where he's talking about react solved, react fixed, sad to see this, you know, forgotten. Was this like conversation people
[00:21:52]  in the community were like having, you know, quite the conversation here going really deep into the weeds. Right. Um, and yeah, sorry. Here's the infamous
[00:22:04]  now, I guess the, the one that kind of like push more of the, like, Whoa, what's going on thing. Um, like there, there, there
[00:22:18] 's no way I think anyone could actually make sense of, of this. Right. I'm just setting up the stage here. Cause like, literally this is like my,
[00:22:25]  like, like this is Friday, Saturday, um, like, um, I don't know. I decided at the beginning of the week that, um, that playing
[00:22:53]  into this narrative was not going to be helpful or productive in any sort of way that I needed to focus the narrative and put everything side by side so that we could talk
[00:23:05]  about this in a, in a, you know, in a way I, I didn't abstain completely. I have to admit. Um, but because like it just
[00:23:15]  kept on coming up, but I tried my best to focus everything into a few discussions, a few focused perspectives or like narratives to talk about it. And then we can
[00:23:29]  move on from there. Um, so that, that's, that's what I did on Sunday. Just kind of recap. Cause I was like, I like, there
[00:23:42] 's a lot of like, does it scale and stuff? And I think these are fair, fair questions, right. Um, when I was talking about that Dax
[00:23:51]  conversation in here, uh, if we get to the very, no, not the raw values one, sorry. It's hard to keep track of all these threads in your
[00:23:59]  head. Um, no, not that one, not the, it's a fixed one, not that one. Sorry. There's so many of these. If you
[00:24:08]  get down to the does it scale thing, there's this like, you know, there's, there's, there's like whole range of degrees on this. Like it
[00:24:19]  might be my big companies talking, but I feel like I never know if something truly scales until there's a hundred people working on the same thing for a few years.
[00:24:29]  Right? Like this is a very fair statement to make. Right. Like you, you don't know completely like solid and a lot, you know, for, for,
[00:24:48]  for me was mostly because of, you know, continuing a pattern that I'd already had worked very well for our teams at our startup maintaining software over a long period of
[00:24:58]  time, but we were not a hundred person team. Right. I think that's why angular adopting signals is like a very different kind of signal part of language, because it
[00:25:09] 's like, if they think that this is something that could scale, that puts a lot more credibility than anything I could possibly say. Okay. So like, Oh,
[00:25:38]  sorry. This is just a complete tangent, but I can answer this really quickly. You can't, you'd have them then make it always an object, right?
[00:25:48]  Like if you just had a number, then you couldn't just, you'd have to pass the object and then get a property. What's the name of that property.
[00:25:58]  Maybe it's dot value in a sense, some signal implementations do this. Um, Preact does certainly, but at that point, because it's a fixed property name
[00:26:05] , you just like use a getter. You don't drop the promise. But yeah, the, the functions are actually incredibly valuable, um, for comp for like
[00:26:17]  composition and stuff. And I can talk about that in a minute, but I just wanted to kind of just very quickly put out there that like JavaScript language is why there's
[00:26:26]  basically two types of reactivity in these libraries, why there is a signal or shallow ref, if you use view or, or observable box observable, I think it
[00:26:36] 's called if you use mob X and there's like the store or reactive and view or whatever. It's because of this discrepancy of not being able to
[00:26:46]  watch atomic state in JavaScript. Okay. Sorry. A little aside, but that's, that's why we're here. Ask me questions. Let's keep, you
[00:26:57]  know, I'll do what I can. So anyway, this, this is, this kind of brings me back to like, like, this is good discussion to happen.
[00:27:12]  Like, I mean, I honestly couldn't hope for, for like, this is like a really good outcome because I can sit here and tell everyone, you know, like
[00:27:22] , there's really cool stuff with signals and you can do these cool technology things. And it's really great to develop on and you could do all this stuff, but
[00:27:29]  like, who cares? Right. Um, like up to this point, the react team has mostly been like, you know, if that, if that's a good model
[00:27:38] , we'll use it. You know, we're, we're not very interested, which is a very, you know, they don't have to be the incumbent.
[00:27:45]  They can be a little dismissive. They can just be like, you know, we're good. We're good. But this like completely invites the conversation. So
[00:27:56]  we get to have a discourse and a dialogue now. And that's great because then all those discussions from 10 years ago get to be revisited. Like I've been waiting
[00:28:05]  a very long time to revisit some of this stuff because I'm not going to tell you, like, I didn't completely agree with everything that reacts it when it came
[00:28:14]  out. I think there, there might've been like, you know, I, I, all I could do was like, you know, people seem to like this.
[00:28:22]  Well, who am I to say any different? Right. But now we get to have the discussion again and that is awesome. So thank you react team, because that's
[00:28:32]  why everyone's here to talk about this stuff. It's because of you that, that, that, that makes me excited. And it's a good sign, you
[00:28:40]  know, when we talk and think about these things for like how the web moves forward, because like now we get to, you know, you know, every once in a
[00:28:47]  while, it's good to reevaluate things. Right. So anyways, yeah, I, as I said, I've had a lot of time to think about this
[00:29:00] , you know, um, I cut a lot of stuff out of my articles about my own personal journey here, because when I realized it wasn't actually relevant to the
[00:29:10]  conversation. Um, but like, there was a certain point when I was both writing the first two articles that I kind of like, like wrote a bunch of content that was
[00:29:22]  kind of like solid specific about my journey. And then I was like, you know what, it distracts from what's important. Um, so I cut it all
[00:29:31] , but I want to say for myself personally, it's been incredible to see people talk about this again. Because honestly, I say this seriously, there was a very
[00:29:44]  long period that I just did not think I thought the, like the world had moved on. I didn't agree with it, but like, I mean, what can you
[00:29:51]  do? People like what they like. But the thought now that, you know, maybe people could like other stuff is actually really exciting. Yes, I published another article
[00:30:14]  today. Yes, I published three articles this week. Oh, did I miss a question, Kelvin? Let me see if I can go up. Yes, basically,
[00:30:34]  yes. Um, there might be like some small details in the implementation and stuff, but shallow ref in view and create signal and solid are basically the same thing. I've
[00:30:45]  said it over and over again. No one ever believes me. I'm just like, I didn't invent any of this stuff. This stuff has been sitting here,
[00:30:50]  like just waiting for people to like take notice. And the challenge is view view had a really difficult position to be in in their early years, because they were reactive library,
[00:31:01]  I believe they chose them mostly for DX, you know, Evan worked at meteor. He on the meteor project, he'd worked on some like, experimental kind of UI,
[00:31:10]  like watch the view documentary, it's great too. You know, and he liked just like the power and the connectivity of reactivity. You see, you see this
[00:31:22]  very prevalent, but his biggest concern was he wanted to present something that people could feel like they could just pick up. They could just, they could just use, they didn
[00:31:34] 't need maybe, you know, like they could just take their data, they can, you know, mutate it, and then just do the thing. And in that
[00:31:43]  time period, Angular react, both basically were like, we're, we're just using plain pojos, plain JavaScript objects, right? Yeah. I mean, even
[00:31:55]  better, you know, we'd gone from a world where we had these models like backbone, um, and you know, kind of NBC mentality to like one where we're
[00:32:05]  like trying to find smart ways that we could just like use JavaScript kind of loosely and then update UIs, you know, and knockout was like, here are these
[00:32:18]  things you have to deal with. It's not like RX, like here's like 70 operators, but like, there's still like, the data is a thing. And
[00:32:27]  view knowing this, we're like, let's hide that, you know, we'll just make something that's almost like a class people like classes from Angular that likes
[00:32:37]  class like things and react back on it was actually like a fairly common pattern. And they're like, what if we just got rid of all like the manual wiring, and
[00:32:44]  it just kind of just worked. So view had this reactivity, like, right at the beginning, pretty much, you know, except, you know, like, I
[00:32:52]  don't know if their version was always as sophisticated as it was during the 2.0 thing, I get I get an impression that view 2.0 and MobX
[00:33:02]  sort of like, are the same kind of level of like, things advancing, I feel like view one was probably closer to knockout. But I don't know this for
[00:33:09]  sure, I'd have to investigate. But essentially, they hid reactivity. It was not popular. React had already kind of made it like look like it was like a
[00:33:20]  faux pas, like, it was just like, not good. So like, coming up in that world was challenging to say, right. So I think I think this
[00:33:30]  is why view gets kind of missed on this a lot, because view didn't take up this like, modern signals looking API till 2020. Right. So people when they look
[00:33:43]  at the trace and stuff, they're like, Oh, yeah, solid JS did that since, you know, two years before them. And, you know, all
[00:33:49]  the other guys are like, like, it's almost like they just jumped in the fray now. But it's that's not really accurate. And because view is always
[00:33:56]  used it, they didn't want to bandwagon with, you know, the new trend, they're just like, what, what are you talking about? This is
[00:34:01]  us. Right? I like it didn't make sense for them to market that it was something that they saw a certain value with, but didn't understand, maybe how the
[00:34:13]  value in marketing it, I think Evan had a tweet where he said as much where he was like, I think, you know, we might have missed an opportunity here
[00:34:20]  to, you know. So, yeah, that that's, that's, that's, that's like kind of my perspective on view view, view was there all along
[00:34:33]  in a sense, like, I remember that there's times in my history where I was like looking at it, and I was like, like, maybe view is going to
[00:34:38]  be my framework. But the fact that they hid the reactivity, and I understand why just rubbed me wrong, really wrong early on, because I'm like,
[00:34:47]  I'm a bit of an enthusiast, because I'm like, the pieces that I actually liked about the reactivity weren't that like, oh, yeah, this just
[00:34:53]  auto updates, it was that the composition patterns, like the way we use hooks today, that same pattern of like wrapping and building primitives. And that wasn't what view
[00:35:02]  was. And I mean, even then I was kind of like, yeah, you know, we'll see how it kind of pans out around like early solid release days
[00:35:09] . And then they, they did the function RFC. And the view community was like, this looks too much like react hooks. And I was like, okay, okay
[00:35:15] , this is going to be a uphill battle for them, even though like, they have maybe more right to the paradigm than anyone else. Their community, like, there's
[00:35:25]  a perception thing on the community that has to, you know, looked over. Anyway, so how everyone's still here with me? Yeah, it's like, I
[00:35:41]  finally catch up to chat. So they are the same. Yeah, it's like, yeah, 10 minutes later. Yeah. Yep. Meteor. There was a lot
[00:35:51]  of reactive libraries. Like this was a thing like, like, coming out of that, just get in that perspective, this kind of, let's try if you weren't
[00:36:01]  there at the time. Like, you've got jQuery. And you've got this way of like, manipulating the DOM. But then you're like, you start
[00:36:13]  seeing like, hey, the server, you know, you can build more sophisticated apps. How do we build more sophisticated apps in the client? And you're like, okay
[00:36:20] , maybe like MVC is a really cool, good pattern, you know, like separates our logic concerns with from our view concerns. And we like, like, let
[00:36:29] 's build out this thing. And then like, we start doing that. And it kind of works, because this is like ghost in the machine, is the way I'm
[00:36:36]  gonna put it like, because like, on the server, it's kind of like stateless, you know, like, or the states in the database. So you're
[00:36:41]  kind of like, it's not like, really ephemeral state that much, you know, like, there's maybe you have the session or something, but you're
[00:36:48]  like, like, the timing of this stuff couldn't have been better, right? Because this is the same time that the backends are like, kill the monolith
[00:36:55] , move to microservices, you know, so you start distributing stuff, like, we want stateless servers. So it's like, where does the state go, like
[00:37:01]  the ephemeral state? And the problem is MVC doesn't really have a slot for an ephemeral state. Like, it's like, it's like,
[00:37:09]  we have our model, we have our viewer controller, it's like, where do we put, you know, state, like this little piece state? Do we, you
[00:37:17]  know, it was an ng scope, like, Angular actually, I think, hit this and Ember and some of the other ones, and they were kind of like
[00:37:24] , they had to like, invent more concepts. Like there's this joke about MVC++, like where they just kept on inventing concepts. And this is purely a
[00:37:32]  misalignment around what state is. And it caused basically a rewrite in almost all the initial frameworks. Interesting thing was, Knockout never had this problem, because the controllers
[00:37:43]  weren't singletons, they were instances. So the state got had a clear place to be owned, the view model. For people who don't know what view
[00:37:52]  models are, you can basically pretend they're components, like, there's some differences. But like, this was like a very early version of what would become the component model
[00:38:01]  later. But the difference is, it's more like solids component model, it's like, the it wasn't causing the components to update, it was just like a container
[00:38:09]  that handled instances of state basically wrapped in a closure. So people, you know, towards, you know, after like, the initial backbone kind of phase, like Angular
[00:38:22]  is really popular, because it's plain object thing. But like, there's people experimenting with this reactive stuff. And, you know, can JS, there's a few
[00:38:30]  others meteor we're talking about. And like, so at that time period, like people were playing around with these patterns. And yet, even stuff like backbone models with
[00:38:38]  their subscriptions stuff, weren't like completely out of the picture, like you could, like, because they have that same way of doing event propagation. So like, maybe you
[00:38:46]  don't want backbone views, but you could use backbone models. And this was, you know, kind of cool, because now we had state and all these driven things.
[00:38:58]  And you can, when you stop there from like a performance standpoint, you're kind of like, yeah, this makes a lot of sense. And we, you know
[00:39:03] , especially coming after jQuery, like we, instead of like, just gutting the whole DOM, or, you know, inner HTMLing it, we can just like
[00:39:11] , use events, and then do really like, up fine grain updates to make sure our stuff works. Like, what's better than that? That seems like the ideal.
[00:39:19]  The problem was, these state libraries were not sophisticated, they were like, basically little more than message queues. And you could just like, update a few things and be
[00:39:27]  like, you know, like, blow things up and make weird loops where you have one state update, cause another stuff state update, like people weren't like deriving data
[00:39:38]  properly, they were just like ping ponging, it was like playing a game of, you know, table tennis. And like, this was a mess. And then it
[00:39:46]  couldn't even be worse is that at the exact same time, this is happening. Okay. Okay. Everyone was like, kind of enamored with this magic of just
[00:39:58]  being able to like, update the DOM and the state and have it all just update and be very declarative. Like you just be like, look, my input is this
[00:40:06]  value, they are one. And then you don't need all this boilerplate from jQuery. It just was really clean. And everybody did this and it's called
[00:40:13] , it was called two way binding. So suddenly you're not only playing ping pong down the tree, you're like playing ping pong up the tree. Like it's like
[00:40:22] , and for different frameworks, this meant different things, but like it was, it was definitely a thing that was happening. Like I actually didn't bug me that much
[00:40:34]  with knockout because with a fine grain renderer, like, yeah, doing a bunch of extra executions bad, but what's the worst thing that happened? You end
[00:40:41]  up updating like the one text field that goes, Oh wait, I've already been updated. You know, why are you doing these loops a few times? But for things
[00:40:47]  like Angular, this was like terrible. Cause Angular's process was like, let's like dirty check the whole tree and you know, check each value. And then like
[00:40:55] , Oh, someone ping pong something back up the tree. And they're like, Oh, it could change. We should dirty check the whole tree. Oh, back up
[00:41:03] . You know, like this, this, this was like a really awkward thing. And at a certain point, logic differences would cause like things where like you'd shortcut to
[00:41:13]  get out of the loop or something. And suddenly you'd have stuff out of date. And this is the world that React came into, it was a, it was
[00:41:23]  a shit show. I'm sorry. Like, like I, I, I can empathize why, you know, 10 years ago, they felt like that. Yeah.
[00:41:34]  Elm had signals and the, and I, I didn't talk about Elm too much in my article, um, because they weren't my direct influences, but yes
[00:41:42] , Elm, uh, Elm was very, you know, Elm was in its principles. Um, I though they removed signals to my, uh, idea
[00:41:51] . They really focused in on having a single paradigm around their, like, what is it? Model update, whatever. I don't intend. I don't know. Model
[00:41:59]  view intent. I figure what their exact patterns called. But like, um, yes, Elm was, you know, so what do we got here? Uh,
[00:42:14]  yeah. Okay. People talking about view, hiding stuff. I got to catch up with chat. Sorry. I was, I was on a little bit of a tir
[00:42:21] ade. I, I think this is an interesting take and it came up in my discussion with Dan. He didn't really understand that, but like, or he didn
[00:42:35] 't like maybe the, like either I'm going to either the react team just literally just never looked at it that way. Or like they're like, it was kind of
[00:42:46]  like, like, I think the problem is like from a functional programming perspective, these concepts come up to like, to be fair, reactivity is also a branch of functional
[00:42:55]  programming. Like they tie into each other in academia, there, there's a whole long, you know, a bunch of like different approaches where these kind of overlap and
[00:43:06]  solve, you know, like different models. So like, they sort of never looked at it this way, even though like from like the surface level, like it, it
[00:43:17]  like really looks similar. But anyway, um, you start getting to understand where the react perspective came from, because basically the, the, the web of 2013 or 12
[00:43:35]  or whatever on average, even, and you have to understand, it's not really its fault. This was a time of innovation. There's so many new frameworks, new
[00:43:43]  ideas coming up that like, it hadn't settled down yet. And the react team was like, it, uh, retain mode is not good. You, you need
[00:43:55]  immediate mode. And people are like, what, how can you do that? You know, and for those who don't know in graphics, there's this, like,
[00:44:03]  there's two basic kind of concepts of how you handle UIs. You either have this idea of like a model that you mutate, um, that stays around.
[00:44:12]  And this is like the Dom is this, like a Dom is example of a retain mode thing. And what's amazing about it is like the performance is really good. And
[00:44:19]  you can have like these constructs built around. It's almost like OOP kind of feeling to it where you're like, oh, I have these objects and then I
[00:44:25]  changed them and they have special interfaces. And, um, that's how I manage, um, you know, updates. So positive here, really performant. But,
[00:44:36]  um, the opposite side, and you find this in actually most modern, like 3d games and engines is, is the idea of, um, immediate mode, which
[00:44:45]  is like, screw that. We're just going to render the whole next frame and you, we're not going to keep anything around and we're just going to do it
[00:44:51] . What's interesting about immediate mode and what makes it really good for graphics is that you, you have some kind of consistency and I don't mean consistency. Like there's
[00:45:05]  a point of like, if you re-render everything, it's going to be consistent to that point in time. It's hard to like, get out of sync
[00:45:11] , but not even that consistency. There's a consistency that roughly speaking, you know, how expensive it is to render a frame roughly because each time you render a frame,
[00:45:21]  you go through the whole same process again. So like there's consistency from the perspective of like, you know, how much need and resources this can fluctuate, you know
[00:45:31] , as more items get in the graph or what in the scene graph or whatever, but like generally speaking, frame to frame, you know what to expect. So you
[00:45:37]  basically schedule everything around there and there's less surprises and you get, you know, if you can get past the raw performance aspect of it, um, it's pretty smooth
[00:45:46] . The thing with retained mode is like, it's kind of like bursts. Like you don't know, like you, you literally could go multiple frames without practically updating anything
[00:45:57] , like super optimized and then have to do a whole bunch of changes and then suddenly like, right. I'm not like with a well designed, um, retained mode
[00:46:09]  approach. Yeah. You're not going to, um, do any worse than you're going to do on one of those frames in the, uh, in the immediate mode
[00:46:17] , but it's like less predictable. Like if you're basing your physics or your engine, you know, in the game loop and you're kind of going like,
[00:46:24]  you know, how long does it take? How should I schedule this? You don't really know with retained mode where with immediate mode, you kind of go like,
[00:46:32]  yeah, I can do about this much. This is how often I, you know, slice into the timing. So for game graphics, as I said, if you can
[00:46:40]  get past the raw performance, it makes a ton of sense. And that's the kind of philosophy that react brought into, um, into web front end. That's why
[00:46:49]  they care about things like time slicing and whatnot, because like fundamentally the approach is inefficient. Like it, it just, but the question is, is like, if you
[00:47:00]  can schedule it, you know, treat it like a game, then like, doesn't matter. And, and, and that's, that's kind of where react came
[00:47:10]  into this conversation. Oh, you all are great. Um, yeah, maybe, um, that, that, that might be fun. Okay. So yeah,
[00:47:44]  I mean, maybe one day we, we could talk this out. I don't, I don't, I don't know. Maybe it'll be easier to do in
[00:47:48]  person. The whole value of Vulcan is even more retained state, not reset. That's the thing. I don't know where three graphics are today. That was something
[00:48:01]  that I was really into when I was younger. So I'm very familiar with these analogs. Cause actually before I went to web dev, I wanted to be a game
[00:48:05]  developer. um, so but anyways, just let me pull up something to at least anchor our conversation for a minute. Cause otherwise I can tangent this like crazy. Right
[00:48:25] . So Sunday I was like, I'm going to have to address all these tweets, but I can't even address all these tweets without like giving people some context,
[00:48:38]  because if I go and respond to all the tweets and like, you know, that I've been collecting all week, people are going to like, just come back at me
[00:48:46]  and be like, I have no clue what you're talking about. Right. Like there's too much specific background knowledge. So I was like, you know what the
[00:48:53]  problem is I've been, we've been living in a, like a react world, V dom world. No one is really like, no, a lot of people don
[00:49:01] 't know all the stuff about view. I was just saying. and sorry, I guess. Sorry. This is, this is, this is. Um, Duncan
[00:49:24]  was a drummer of my band. Um, uh, where that, that, uh, solid JS got its name from. Um, so this is just a nice to have
[00:49:33]  you here, Duncan. Anyway. Right. So anyways, I, I want, I wanted to kind of talk about this and I, I just went in length about
[00:49:50]  what I was talking about here. Like, sure. This looks a lot like hooks, but like there was craziness. And if anyone, I showed this on my react
[00:50:02]  stream, uh, that I did a couple months ago where I was talking about, like, it was a react focus, the, you know, react most pro prolific
[00:50:10]  JavaScript framework, whatever. This talk by Jing Chen is like my favorite talk from the early react days. I know Pete hunted one and you know, uh, Tom is
[00:50:22]  like the intro of this and he's done other talks and stuff, but like, and obviously that early Jordan walk talk, you know, where people like really got confused about
[00:50:30]  JSX and stuff like Jing Chen just laid it out in a way that me as an engineer working in the field at the time understood. It was like, yeah, why
[00:50:39]  does this stuff just bounce back and forth? I'm not going to play the talk again right now. Um, but like there's, there was a point, there
[00:50:48]  was a point in, in the middle of the talk, which, where, where she showed this, she showed this graph and it's like, it was, it was
[00:50:58]  like, sorry, why did they put this up here? Sorry. It was like, it was like, it was like, yeah, man, like, ouch
[00:51:07] . And like this, this, this, this, this is a real thing that, you know, but the, the problem here is like the takeaway wasn't so
[00:51:23]  obvious. I think the takeaway here is like unidirectional flow is a good thing. Data binding, like two-way data binding can be really dangerous if it can
[00:51:32]  be cyclical. Right. And this was, this was the takeaway of the talk, but it, this is when I started paying attention. But I think the,
[00:51:42]  the challenges is that at the point that react came on the scene, people are just like, oh yeah, throw this garbage out. We got a solution. The thing is
[00:52:01]  the thing, the thing is like where I was getting at here is people worked on this problem. And we talked about MobX already. Someone's like MobX solved
[00:52:15]  everything. Yeah. MobX kind of did solve everything and they solved everything back when they're called Mobservable back in 2015. I mean, I understand why Mob
[00:52:24] X might not be as popular today in React as you know, other solutions, but that's because of the impedance mismatch. In the same way that React sits over
[00:52:33]  the DOM in kind of like a, like, this isn't quite the same thing, you know, like it tries to abstract putting like MobX on top of React is
[00:52:42]  kind of been the same sort of like, does this fit quite right? They've done an amazing job of kind of tying it together. But like you, this, the
[00:52:52]  thing is, regardless of how MobX has been, which has largely been tied into its success with React, it was the one that enforced the idea of deriving values
[00:53:06] , like what can be derived should be derived. This is like, probably like at the first line in the MobX docs. And Michelle goes into this like really well
[00:53:19]  in this article that I linked in here. This is one of the, like the algorithm isn't the same today, but if you do ever get a chance and you want
[00:53:26]  to like understand how like reactive propagation works, this, this, this article is great. And this graphic actually shows the key part of it, it, it actually can
[00:53:37]  walk through the graph to make sure that each node only executes once and in order for a given change or set of changes. This completely stops the problem we were seeing before
[00:53:50]  pretty much like, unless you're doing really dumb stuff here in red to cycle back into blue, generally speaking, it is one direction, it is derived, it is
[00:54:01]  consistent, it is predictable execution. And this alone, I would hope if I could like explain this would have been, would have been enough to be like, okay, case
[00:54:10]  closed, you know, but, um, I, I think a lot of this, this is why I started with this article, because I want to talk about these
[00:54:19]  solutions here because I think a lot of the sentiment is like, you know, heaven forbid, I, I write some articles and then, you know, I, I like
[00:54:27]  go on Reddit and, and see what the trolls have to say. Reddit, Reddit, Reddit is a fun one. You can, you can write something that is perfectly coherent
[00:54:35] , basically not arguable against from like, like both parties in a debate would agree on, and then people will download it. Reddit is, Reddit is a funny place.
[00:54:45]  Um, but I, I started to see, you know, reading around, I realized that like, sometimes you got to like, connect the dots. So you can
[00:54:53] 't just kind of stop here. But as a foundation, MobX started the progress of talking about the state in a drive way and move towards what we call pull based
[00:55:06]  semantics. Reactivity was push based originally, right? And the push based semantics, well, obvious, they have the ability to update things that change. We
[00:55:30] 're not nearly as good as deferring work to when you needed to work to happen. And this is a fundamental difference. React is what we call pull based, where,
[00:55:41]  you know, you say, Hey, I've updated some state. And then you're like, okay, now I know that something has changed at some point later,
[00:55:49]  I'm going to rerun everything, which is basically like pull through the system, like get the values, ask for them as I go, and then render the next UI
[00:56:02] . push based systems and pull based systems kind of fight against each other a bit because of when they do the work. And, but what MobX has started trend was
[00:56:13]  towards push pull, where it's still kind of, it's almost like react in the sense that you, you know, you push the notification of change, you know,
[00:56:21]  like you go set state, but then you don't do the work until you ask for it. And I think the earliest version of MobX weren't like purely this
[00:56:33]  way, but this was the start of that switch over in mentality because the difference is unlike react, which was obviously more knowledgeable than angular, angular was like, Hey, something
[00:56:46] 's changed. You know, zone.js has just told me that this event has ended. We should just check everything. React was like, okay, there's a component
[00:56:54]  here that has changed. Presumably anything below this component could have changed. With these reactive libraries, it was more like, yeah, generally speaking, this, this
[00:57:04]  is all the possible data points that could change. We should check that. So it's, it's, it's just a granularity question on the, on the same
[00:57:14]  thing. So from this point on, which is very early, like, uh, you know, 2015 time period, the, the major gripe about the difference between
[00:57:26] , um, frameworks, like, you know, like reactivity and reactive basically already vanished. Um, reactivity had a second. Okay. Sorry. Actually, before I
[00:57:41]  go here, Dev, you got a question. If a high pilot feature, some sort of reactive premise built into just like destiny, who would have an easier time adopting a
[00:57:48]  reactor solid? That's it. That is an interesting question. It depends on what it looks like. You're right. That the interesting thing is if you have a
[00:57:58]  reactive system already, reactive systems sometimes don't play with other reactive systems as well. But on the other hand, if it was designed in such a way that it could just
[00:58:08]  be the base primitive, then I, I think that it would probably like, if, if, if it could be a replacement effectively, it would, it would definitely
[00:58:18]  be easier to integrate into the reactive libraries because you already write that way in a derived way. Like that's already the approach. Solid is pushed now. Solid is still
[00:58:33]  push pull, but it's, if I go back to this silly graph here, solid is more like push the green stuff and then run the red stuff in a separate
[00:58:48]  queue. We actually multi queue and yeah, it's kind of funny. We push green and then like pull red, if that makes sense. So we're not as we
[00:59:00]  were based on SJS, which is a library that's actually older than MobX or as, and it was more push basis, you know, sign of the times.
[00:59:09]  But the one thing that I did with solid was actually separate the effects from the derived state. And this is why solid can do stuff like concurrent rendering, time slicing,
[00:59:18]  all most of the fancy react stuff is a little bit more complicated than I would like it to be admittedly, but it is because we are also a push pull hybrid.
[00:59:28]  So solid is not perfect in that sense. And we're working to making that better. But again, solid has all the glitch free guarantees here and has that same ability
[00:59:41]  to schedule. That's important. Otherwise we wouldn't be able to do like concurrent rendering. It's, or it's way more like the react they're building towards
[01:00:05]  than the react team realize. Okay. So there's another, there, there is another, there is another, um, concern that we don't talk about very much,
[01:00:24]  but I think it's important to build up, talk about here is that, um, you have to deal with memory, uh, leaky observer pattern. It's
[01:00:32]  classic gang of four stuff here. And that's that reactive libraries, the subscriptions usually happen on both sides. You have a state like a signal and you have an effect.
[01:00:42]  While it's true that the effect subscribes to the signal. So when the signal changes, it notifies and runs the effect every time. in order to do the
[01:00:54]  bookkeeping, we generally backlink. Otherwise we wouldn't be able to like unsubscribe when we needed to. So the, this, this is, this is just like
[01:01:05]  part of it. And if you watch my angular stream, the guys are angular, we're doing some really clever stuff with, um, uh, weak references in order to
[01:01:13]  like, try and like loosen this coupling. But generally speaking, there is a two like directional subscription mechanism in these observer things, which means that if you have a long
[01:01:25]  live signal, if you don't manually dispose of the side effects, they will keep there in memory forever and they can accrue and you can have memory leaks. This was
[01:01:35]  not fun in knockouts. It rarely happened usually, but when it did, when you're trying to do like fancy stuff, like you couldn't, you wouldn't
[01:01:41]  nest reactivity in knockout because if every time it ran, it created more reactive printatives, you'd have to like be bookkeeping it. I, I made patterns
[01:01:48]  that did this, but it was always complicated. Cause you're like, okay, now I'm at the register these effects. I got to keep track of them so that
[01:01:56]  on, and then when it runs again, I got to clean these and like, you have to do all this stuff. Luckily, um, luckily, luckily, luckily
[01:02:07] , um, this library SJS came out and SJS is really cool in that it took a really unique take. It, it's not that unique in the whole scheme
[01:02:17]  of the, you know, 40 years or 50 years of reactivity we've had, but it, it, they model their stuff after digital circuits. And this just spoke
[01:02:24]  to me. I mentioned on previous streams, I don't know if anyone's ever played with FM PGA boards or whatever, like the thing where you like do V
[01:02:30] HDL or whatever, and you design or Verilog, you like design circuit, basically we're using hardware descriptive languages. And you talk about everything in terms of like
[01:02:38]  almost basically like signals, the idea. So what's really interesting about these kinds of programming languages is that even though you have control flow, it, it, it has to
[01:02:49]  reach a steady state. The model is that like in your head is that like at any point of time when you change a value, like the whole system propagates at
[01:03:00]  the same time, it's not a this than this, you'd have to inject things like buffers in order to break up that, like there's this idea of a
[01:03:08]  clock. And it's funny, I remember this in school, cause we had labs. Some people had a really, really hard time with this. Like, cause it was
[01:03:17]  like, not like the programming. It's not like when you do C programming, like imperative, like, like style programming, because of this, like fact that like
[01:03:24]  that compromise very much like this, then this, and this, and this, this was like, no, when you update this, it applies everywhere at the same time.
[01:03:33]  And you know, the basic idea is you kind of build the logic around this driving of the clock cycle, the edges, and each on each clock tick, you have this
[01:03:43]  like change of state that propagates. And the way you write the program is like this. And I, I, it's so funny, I loved this stuff.
[01:03:51]  Like, I remember we like, even the lab, they'd have a bonus things and like make little graphics or like, make like a little video game type thing, like
[01:03:59]  make like pong. So I just, I sped through that stuff. I sometimes finished the lessons like four times faster than like the given time. Like I just love
[01:04:09]  this kind of thing. And it makes sense reactivity is kind of the same programming model. Um, and SJS really embraced this by making their whole setup around these clock
[01:04:24]  cycles. Uh, like basically you could only update a value within the same clock cycle or throws. That's a very hard constraint to live by. And even things like
[01:04:34]  mob X kind of slip, but it is a very good constraint to have solid, um, obeyed that constraint for quite some time, but it actually ended up being like
[01:04:41]  a little bit confusing. I did loosen up, but I have a lot of respect for the approach that S took. But as I said, the big thing that S did
[01:04:48]  was most reactive libraries are like, Oh, here's a signal. Here's an effect, go dispose it at. So it was like, no, no, if you
[01:04:54] 're going to create a bunch of effects, you need to give them a zone, like a area that they live in. And then, you know, if, when
[01:05:05]  you're done with your application, you can throw that away, you can dispose of it. But what we're going to do is inside that zone, so to speak,
[01:05:13]  using the same trick that we use to track dependencies, we're going to track every child reactive computation, every child computed value or derived value or side effect. And if the
[01:05:26]  parent reruns, it will release the children and so on and so on. So you can do this kind of nesting and you don't have to worry about dispose
[01:05:35] . You never have to call dispose yourself until the program is over. Like when you're done. And this is the foundation of what makes the rendering in solid, like it
[01:05:46]  is today work essentially where it didn't have to like hinge itself off, you know, keeping a strong tie between the like classically things in knockout, you'd
[01:05:57]  have like the DOM element, and these like data bindings being really strongly tied together. And then you'd have to do bookkeeping to clean up the data bindings.
[01:06:05]  Instead, the reactive system bound to itself, which basically meant that you could view the DOM as just a side effect that got automatically cleaned up. And that is just Adam
[01:06:18]  Hill, who created this library, and surplus, which is, you know, often called solid's predecessor, developed this approach, and basically, you know, put in the
[01:06:30]  benchmarks, no one paid attention, really, but showed that, like, he's the reason that solid exists, and that project exists. Early days, we were trying
[01:06:40]  to like merge efforts to a certain degree, but like, it never ended up panning out that way. But like, and he kind of moved on from the project largely
[01:06:48] , but like, SJS basically came up with the model that gets used. And it's basically the foundation. So this is for me is huge, because it's
[01:07:04]  funny, I was talking to some people, I forget it was like, Fabio from Vobi and a couple other guys, maybe as Alexis Compostate and stuff,
[01:07:11]  and the current reactive libraries, they were talking about the like, they're poking at something and like, Oh, this framework doesn't even have, you know, ownership
[01:07:23]  disposal or whatever. And it's like, this was not common. Vue just added that I think they call it effects scope or something. Like, in I think,
[01:07:31]  like, it was after Vue 3, it was like 20, it was like the summer after some it might have been still 2020 or 2021, or something like, like
[01:07:40]  this, this is a great concept. And as I said, SJS pioneered it to basically show how, you know, this could work. And the thing is
[01:07:52] , once you had that tree, you know, I just went wild with it. That's how solid context works, right? It doesn't use the DOM, it uses
[01:07:58]  the reactive, nested reactive tree. And this kind of approach to rendering is incredibly powerful. And I just, you know, want to give the kind of point out
[01:08:11]  that this is this is why some people are like, Oh, well, I don't want to touch these reactive libraries, they all, they all require compiler. So you
[01:08:20]  know, I, every platform would be different, you know, if I want to do 3d or native, I need to suddenly, you know, that seems like something
[01:08:29]  that I couldn't do, you know, I choose react because of, you know, cross platform. Guess what, this lets reactivity be cross platform, because I
[01:08:38]  told you it made the DOM just side effects. And when you make it just side effects, it doesn't matter what it's doing, it could be doing something for 3
[01:08:47] d, it could be, I don't know, rendering mobile stuff. Like, no one's made, you know, a solid native, because it's an incredible
[01:08:58]  amount of work. So people have actually started, there is actually a solid native project where they're wrapping react native, you know, but like, it's incredible work to
[01:09:06]  kind of do that. But like, it is not an obstacle for the approach. Like, you don't need, like, in solid's case, we actually have three
[01:09:17]  modes to our compiler. There's more like, smaller things, but like, like, hydrate or not hydrate, but like, high level, you have the
[01:09:25]  DOM, then you have the string compiler for SSR, and then you have the universal compiler. And there is differences between the DOM and the universal compiler, but they are
[01:09:35]  very similar. And that universal compiler can work with any target platform. Right? Right, we, someone made solid ink. I say someone, but Nikhil made solid
[01:09:49]  ink, he made solid three. Funny thing with Nikhil is he'll go build a library over the weekend, and then it will just sit there forever. But it's
[01:09:58]  like incredible, like, he literally learned solid the same week, and built three universal rendering things, because he just looked at the react version, he was like, okay
[01:10:06] , copied over and basically just worked. He had to do like a couple little things. But like, it's because the interface for like, what goes into defining custom render
[01:10:16] er is reactivity agnostic. It's just like, how do you create an element? How do you update properties? You define that behavior. And then like,
[01:10:27]  the reactivity just drives it. What's really cool, though, obviously, is like, with something like solid, then, I don't know if anyone's familiar
[01:10:37]  with react three, you generally don't use react state to update things. Like, they have their own clock cycle, they only update the reason react three is performing is because
[01:10:45]  you don't use react to manage the state. But it's kind of interesting with solid is like, like, it seems quite possible that you could just use the state
[01:10:57]  built into solid to actually update it because it's like, fine grained, it's that efficient. So my understanding with the experimentation is that there were still performance things.
[01:11:07]  So they a lot of people were still playing with like, very specific solutions. But I don't think that's unsolvable, because the model should be able to just
[01:11:15]  work without like, you should be able to use solid to do this stuff. And not need to like, other state because literally, that's what solid does. All
[01:11:26]  right. So a little bit of a tangent here. But I just wanted to kind of talk about like, just how important SGS and surplus are here people don't
[01:11:37]  like necessarily tie the dots. But so we got mob backs basically solved all the weird graph stuff, we have surplus taking care of disposal, showing that you can render, you
[01:11:49]  can basically render things without in such a way that you don't have to kind of worry about like, bookkeeping. And then view I gave as a third thing here is
[01:12:02]  because view has a virtual DOM, which makes it really interesting. It was, you know, mob express react or viewer kind of like similar in that sense. It's not
[01:12:12]  like the new signal stuff you see with pre actor quick with a virtual DOM, like both of those firms use virtual DOM signals in like a new way. But this is interesting
[01:12:20] , because if you had a virtual DOM, you know, kind of there, and you have these signals there, getting them to play together, sometimes isn't the easiest and
[01:12:28]  views cut probably has like, not probably definitely has the most experience of trying to, like, find the perfect balance, you know, with those tensions between like, the
[01:12:37]  fact that like, you know, virtual DOMs want really, really small components for updating. And but like, when you have reactivity driving those state updates, you
[01:12:52]  actually don't want like a billion like, effect wrappers everywhere, because they're heavier. So you'd rather have larger components, those two things kind of are at odds
[01:13:01] . So I've gone into that in a separate stream. But my point is, Vue has figured out how to navigate that with their making their optimizing their virtual DOM
[01:13:13]  with signals in mind. And one of the most interesting things to me about them was that they basically, most reactive systems are all about synchronous guarantees. So they don't really
[01:13:25]  worry about scheduling, like especially, kind of like in the MobX train a thing. Like you were like, if I update the state, I want to make sure
[01:13:33]  that it all synchronizes that clock cycle, so to speak, right? Vue was like, well, I want this to be easy. And we have a poll based
[01:13:41]  system. So if you ask for a value, we can always give you the most current value. So why don't we just queue it in a micro task, anything that
[01:13:48]  happens, you know, whatever, next micro task, pull it together. And at that point, do the work. And this kind of detachment, you know,
[01:13:59]  was like the next step on this whole, like the arrows are reversed, if this was push, it'd be state, you know, to derive state, maybe to the
[01:14:06]  effect. But this is this, this, the view kind of flopped this around. MobX had two, but view because of the VDOM showed how you could
[01:14:14]  put these things together. And like, for example, some people have been probably following and they react has been working on like an off screen component. keep pages cached,
[01:14:23]  and then like, go back to them. With a push based reactive system is, is that like, kind of awkward, because yes, you know exactly what changed, but
[01:14:36]  you might not care that it's something off the screen that's changed. So what view showed us was like, keep alive has been in view for years, they had that
[01:14:46]  off screen capability. How do you do that with a reactive system? Well, you know, the VDOM helps a little bit here. But it's actually more
[01:14:54]  the fact that they have reversed the flow. So they can just go like, okay, these effects don't need to run when they're not on screen. So we don
[01:15:01] 't need to do the work, and it doesn't propagate. So in a sense, like, this is the secret, like, this is how you can do all these
[01:15:09] , like, more fancy scheduling tricks that you're seeing in React in these reactive systems. Vue basically cracked the code for that. So between these three libraries, Mob
[01:15:20] X, SJS, and Vue, in my opinion, all the pieces were there, except, except, except, except, everybody like so in their ways,
[01:15:39]  generally didn't necessarily respect what React was doing. I'm a huge, huge, huge React fan. I think I think I've made that very clear at this point
[01:15:49] . React did really good things, right? So you, how, like, how do you get, take all of this stuff, and apply the, not like do
[01:16:06]  what React does, but apply the learnings that React had, like unidirectional flow, you know, explicit setters, all the kind of stuff that gives you
[01:16:13]  the control and composability of your applications. You know, because as I said, Vue was not into composition. MobX was, you know, you had your classes
[01:16:23]  and stuff. So how do you put this all together, you know, into the compelling story? Sorry, just catching up on chat again, because I was talking so
[01:16:49]  long. Greg from Leptos is talking about some stuff, like several minutes behind. Okay. Yeah. Okay. Where are we going here? Yeah. SJS
[01:17:02]  reminds me of something floating in my head. Really like what's all it is. It has a style to it. Yeah. Different styles work differently. Thank you. Yeah
[01:17:13] . Yeah. And I think that's something that I touched on in the last article. Yeah. What do I think about Vue Vapor? I mean, how
[01:17:23]  could I not like Vue Vapor? Vue Vapor is like, I saw when Evan put the slides on screen, I was like, I was like, wait
[01:17:33] , is this solids compiled output? And then I was like, oh no, he did this cool trick where he didn't put the closing tags in the string. And we
[01:17:39]  might do that at some point, but it's cool. You don't actually, if you know the structure, when you do analysis, you can actually string the strings smaller
[01:17:45]  because you don't need all the closing tags. The HTML will close it for you. It's funny. That's what I focused on when I watched it because V
[01:17:52] ue Vapor and what we're doing with solid is basically the same thing. I, when they release that, I have almost no doubts. It's going to have the
[01:18:00]  same kind of performance as solid. Like, like, you know, so if, you know, like just straight up, like people talk about like all these characteristics,
[01:18:08]  I talk about solid Vue Vapor will have it. There's, I'm not, you know, as sure about other techniques, you know, other compilation things people
[01:18:15]  are doing, you know, but this, I am sure about Vue Vapor will be fast. Um, the other thing though, is Vue Vapor is kind
[01:18:21]  of like, I only saw some of my work I was doing by putting solid components inside react. Um, Vue inside Vue Vapor or Vue Vapor inside
[01:18:30]  Vue is going to be a bit of that. There is a mismatch between Vue today and Vue Vapor. I think Vue Vapor is great
[01:18:35] . Um, I, I think that it's going to be, you know, interesting to see how like the, if Vue Vapor picks up, like how the
[01:18:43]  ecosystem shifts along with it. But generally speaking, like Vue Vapor, like how could I not like it? So, I mean, yeah, look, Evan
[01:18:58] , Evan, Evan knows what's up. You know, I'm Evan knows what time it is. Something we don't talk about here a ton is that with the react
[01:19:14] ivity, it's really easy to model other systems. You just have these primitives. So you're just like, okay, what do I need to do? Like
[01:19:22] , do I put a V Dom in my reactivity? Do I do this? Like, this is why Evan has been able to like, basically at any point go like
[01:19:29] , yeah, I like that. I like that. I like that. I like that. You know, you know, and it's why like, even with solid,
[01:19:36]  when I go and I, you know, especially early on, I was like, okay, react thinks this is valuable to do. Let's try it. You know?
[01:19:42]  And then you're like, how does this happen so easily or quickly? And it's just like the reactivity gives you this like, incredible ability to tie a bunch
[01:19:53]  of different things together on a single state system. So it's just like, it's, it's kind of like a superpower here, right? That Evan understands very,
[01:20:02]  very well. I, these things, these things are constantly evolving. View three had a big update that made it, you know, smarter, or maybe it's 3
[01:20:17] .2. Solids latest stuff that we're working on is even, you know, take it the next step, angular preact, everyone's kind of working in this
[01:20:23]  zone. I can say that at periods of time, this is true. I don't know at the current time, but at this point, I'm not, if
[01:20:30]  I say something now, it'll be wrong tomorrow. So we're not going to worry about that. Well, they, they, they almost went that way. And then
[01:20:41]  they pulled out last minute, which I think was really, really smart, but that's a whole other thing. All right. So yeah, I mean, this,
[01:20:56]  this Inc article kind of goes to the future. But this, I like starting here, because I got to celebrate a lot of really cool work happening, you know, those
[01:21:11]  libraries I was inspired by. And I got to talk about some really cool other projects, you know, Angular picking it up, preact quick, you know, the
[01:21:20]  quick does some pretty cool stuff with it. But for the most part, other than this piece at the end, where I'm just like, Hey, you know, there
[01:21:30] 's some cool stuff, you know, you know, that I hint at here, for the most part, I'm just suggesting that we're all kind of, you know
[01:21:38] , heading towards the same language. And even when you have people like Andrew Clark going, we might add a signals like primitive to react, but I don't like the way
[01:21:47]  you write code with it. It's great for performance. But I prefer reacts model where you pretend, pretend is the key word here, the whole thing is recreated
[01:21:54]  every time. Our plans use compiler achieve comparable performance, right? I think I like this is, to be fair, the first article and the third article kind of tie
[01:22:08]  up a noose where they kind of come to the same conclusion. But there, there is a lot of really cool stuff going on in which I talked about in the
[01:22:19]  third article and reactivity. But let's, let's get to the let's, let's, let's, let's, um, let's move, let's
[01:22:31]  move this forward and get to like the, I feel like what ended up happening was I wrote this article and I was like, okay, sweet. People are pretty happy
[01:22:44]  with it. Kind of covers it. But I was like, I'm going to have to address, you know, this thing, right? When I, when I make
[01:22:54]  comments, like, Hey, you know, it's not 10 years ago. I, I got to explain this a bit. And one of the challenges was I wanted
[01:23:02]  to try and take the, the quotes, which had so many of them and try to work them into a narrative, but it's, it's like, it's,
[01:23:08]  it's imperfect. Um, which was, which, which was a little bit of a challenge. Um, I mostly feel bad that I didn't respond to Dan directly in
[01:23:17]  the way that he was hoping to. And he clarifies it in the chat, but mostly what I was trying to focus on is perception signals are two way binding,
[01:23:26]  you know, mutable. They're just data binding, blah, blah, blah. Stuff's unpredictable. Okay. Right. So that's why I wrote the last article
[01:23:35] . Like this is not the case even remotely. So then, so I wanted to kind of go, okay, start there. Let's, let's, let's move
[01:23:44] , let's move past that. Now the, there, there's this thing that kept, I kept on noticing in all the quotes and I started honing in on
[01:23:53]  it was this idea that react fixed something. It fixed the fact that, um, you know, you, that in the past you would like create some stuff and then define
[01:24:07]  how to update it. They, they fixed that. Basically they made it like into immediate mode and that fixed the problem. a new question. Yeah. This felt also
[01:24:28]  considered signals. It's an interesting one. I've tied them into this conversation before because they have the language of reactivity. generally they're not, but you know
[01:24:40]  what, you know, you know, if you want to place Svelte in the, in the kind of whole spectrum of stuff here, Svelte is kind of
[01:24:50]  like what reacted when react talks about react, forget Svelte is like a simpler version of that. Like it's not doing the full story, right? Svelte
[01:24:57]  still has some of the stuff that solid has where like, if you don't put the thing in the dollar sign or, you know, don't wrap it in a
[01:25:04]  function, it's the same thing, then it won't update. Right? Like Svelte has the exact same characteristics of solid in that sense. But what, but
[01:25:13]  the funny thing is they don't actually have a runtime reactive system for like when you do all the, like the lets and stuff. So in a sense, like they've
[01:25:21]  already showed that you could in a, like compile away the reactivity, um, essentially, and, you know, do something pretty good with it. There are trade
[01:25:31] -offs to Svelte's version because, and they handle it well because they keep the scope more limited, right? And they, they keep the leaks out because they
[01:25:41] 're like, we're not going to be too ambitious here. We're not going to worry about dynamic dependencies and stuff. Like if something inside changes, it changes. And
[01:25:50]  that's because, um, they still kind of rerun components. You can almost picture like Svelte takes code that looks like solid ish with nicer syntax and
[01:26:01]  then compiles to react class components with mob X. That's, that's, that's roughly a good estimation of, of like what, what happens. Cause it's
[01:26:12]  like you write stuff in a kind of declarative way, you know, like with the derived state and then you assign something which calls invalidate or set state. And
[01:26:22]  then they isolate each component in its own reactive thing, kind of like mob X does or view views. Another example of this, but it's all a compile time. They
[01:26:30]  just know through simple checks. It's, it's basically an auto memoizing compiler, kind of like react forget. So in a sense, it's not signals. It
[01:26:40] 's like a basic version of what they want to do with react forget is, is almost the best way to put it except Svelte chose the DX of reactivity
[01:26:50] , which is like what the react folks are not about. If that makes sense. Isn't the end goal of react to come out basically what Svelte are to do
[01:27:05] ? No, except they they're more ambitious. They, what react wants to do is you to write anything like you can in react today. Like just like, spaghetti coded
[01:27:13]  up. I think Dan had an example at the end of this article of like the kind of spaghetti code you can write in react that still works. Let me see here.
[01:27:20]  Like not spaghetti code. I don't like the term spaghetti code. Spaghetti code is such a weird term, but like, where is it? Um, like, like
[01:27:28] , like have a bunch of local state and then like reassign it and then do a bunch of stuff. And then, you know, it's, it's not spaghetti
[01:27:35] . It's more of like, it's like an imperative control flow. That's a better term. Um, yeah, I regret saying spaghetti. I mean, the
[01:27:43] , the forget wants you to be able to do something like this and just kind of like write whatever, and then end up with what what Svelte is doing.
[01:27:57]  That's the best way I could put it. So anyways, we'll talk about that more in a second though. Like what I wanted to get at here is that
[01:28:25]  like if you take the advances, there's two things I want to talk about this article. It's the perception of reactivity being, or not reactivity, but
[01:28:36]  this like split model being a thing to fix. And if you, and the other side is if you took the, if you took the patterns, like if you took,
[01:28:51]  um, sorry, if you took the advances I showed in the previous article with reactivity, how we got that predictability, got that automatic management of memory, how
[01:28:59]  we got the scheduling and then applied react like patterns. Like I talk about this here, Dan has an amazing article. Um, one of his first articles on medium, you
[01:29:10] 're missing the point of react. I've shown this on stream, like multiple times because it's so good, where he said reacts, not like JSX or virtual DOM
[01:29:16]  or any of that stuff. It's just composition, unidirectional flow, freedom from DSLs. I would, we can debate about that, honestly,
[01:29:24]  because JSX is a DSL. I don't care what people say. Um, explicit mutation. Yeah, I like it. And static mental model. Like these,
[01:29:33]  these are, these are all really good things. And like, what if you just took the new approach to reactivity, which is kind of fundamentally better position to,
[01:29:50]  to take these philosophies and apply them? And that's, that's, that's, that was my argument to solid. There's a difference here because solid has that
[01:29:57]  split, right? Which is like what I showed here. It's like, everything's in effect. You just create a button, maybe use JSX, but you create
[01:30:03]  a button and return a button. And that, that was my mistake here. Cause I thought that was what the not scaling was worried about, but, um, we
[01:30:11] 'll get to that more at the later, but my point was like, if you can do set up immutable interfaces, so you're not like letting people like butterfly effect
[01:30:18]  stuff all of the way, you have a directed graph of deer derived data, like state, and you set up this unidirectional flow. Like I love this seriously
[01:30:27] . Like I tried so hard to make it impossible to do two-way binding in solid are really hard and people, you know, we'll still find a way.
[01:30:35]  Um, they actually, they're actually like spreading in getter setters to set stuff. I mean, it doesn't matter because solid doesn't rerun components. So
[01:30:44]  even if you push the change back up, like who cares, but it's like, it's just like, I really believe in the philosophies that are behind, you
[01:30:54]  know, react in terms of the mechanical parts. Um, and it's just, it's just, I talk about how we accomplish all this, but like generally speaking
[01:31:06] , like if you take all those things and kind of put them together, then could you have a compelling other model here? this is a good question. I think some
[01:31:24]  people might, some people noticed this actually in, in solid discord. I haven't, I can't say exclusively. I do think it is quite possible that views approach is
[01:31:35]  not as advanced as this, you know, along the line is the stuff that we've been seeing recently in pre-act or angular or, um, the new reactively
[01:31:43]  stuff, or, you know, so it is possible. I just, I, I, I need to confirm this for myself. Well, it's, it's
[01:32:01]  the other way around, right? Like mutation observer is awkward because you have to like, listen to the DOM, listening to the DOM and like changing the DOM and listening to
[01:32:10]  DOM. And because listening to DOM is not without side effects. It's kind of an interesting point. It's like, it can cause re flows or repaints and stuff
[01:32:18] . All right. I guess the reflows not repaints where it has to calculate the layout. Cause you change something. And then at that point you're like
[01:32:22] , the DOM would have scheduled it for later. But then you're like, I need to know this. And I'm like, oh crap, I have to do my
[01:32:26]  work now. So listening to the DOM is actually kind of like bad, like, like awkward, which is actually one of the values in all the JavaScript frameworks is that you
[01:32:36]  can abstract, you still abstract it. It's you, it's not going this way. It's the data is, it is still going the one way. Like you
[01:32:43] 're still going the other direction, right? Like it's not about reading the DOM. It's about, um, writing the DOM and still maintaining state independent of it
[01:32:52] . Okay. If that makes sense. Um, so yeah, I mean Dan put this tweet up, which was funny and he's right. Like this choice happens all the
[01:33:08]  time. Like you, you, you look at an API and you're like, is this the one that you do opt in or opt out of? What's a
[01:33:13]  good defaults? Like, and there's like a tension here. Cause you're like, you're like, okay, it's a lot easier to make stuff update more
[01:33:20]  than it's needed. Cause then like no one has to worry about it. You just kind of like do it. And then, you know, if like, maybe it
[01:33:29] 's good enough. So a lot of times you'll want to default that until you can't default to that. Right. Um, whereas on the other hand, when
[01:33:38]  you have a performance mindset, you're always going to say like, no, no, no opt in only do the work I want to do. The reason Dan asked this
[01:33:45]  question is because from a fundamental level, you know, you, uh, view equals function of state kind of react level. Um, the, the, the baseline you start
[01:33:55]  with is everything re-render, which means that you're, you're, you're, you're basically on the easy to update pattern. The truth of matter is when
[01:34:02]  you have to get to every decision point, you have to find ways to make it not update all the time. And that that's here. I think he's thinking
[01:34:10]  he was pitching this in a more fundamental way, like on the framework holistic philosophy thing. But the thing is, if you take this in a literal sense, you can find
[01:34:19]  lots of examples of where you make those decisions different ways. Like if you have server components and you have to opt in to use client, that's saying like, you know
[01:34:26] , you could like, there's a way of like looking at that as a way of saying like, you have to choose to, to like, you know, make
[01:34:37]  it, um, have certain kind of performance characteristics. Right. And dependency rates, right. If you have a dependency rate, well then it's possible to miss updates.
[01:34:44]  So like, I get what he was saying here. The interesting thing is like reality isn't always so clean. Um, then you have Michael Rawlings thing here,
[01:34:56]  which he looks like a slight at react and I get it there, but like generally Michael, the framework author himself, he's on the Marco team. Um, and like
[01:35:04] , we all know that this is just, this is always like, when you get to reality, you have to make these choices. They're not easy choices. But
[01:35:23]  yeah, I mean, in the end, my, my point is that like, when you, because we can't always live up to those ideals, we, we
[01:35:39]  kind of get into this situation where a solid dev looks at this and goes, yeah, those are two very different functions. Like, it's not even like, we can
[01:35:49]  see the difference immediately. We don't even have to like, like think or go, Oh, I missed that. Like it's, it's so obvious. Um,
[01:35:57]  but like, like if you did the same code in Svelte, it would be obvious too. Cause in Svelte, this doesn't update either to be
[01:36:08]  clear. So like, I understand from like where people come from the react side, they're like, what's going on? Well, it's because the template treats
[01:36:24]  like the JSX, the part wrapping these expressions, these expressions are unchanged. They are the same expression, but the JSX is like a new scope. JSX introduces
[01:36:33]  scope. That's something that react doesn't do with its JSX, but there's nothing in the like JSX spec. And I hate bringing this up every time
[01:36:40] , but it's like, it should, uh, you know, if you, if it should be like, not terribly, you know, like the reason spec here is
[01:36:51]  JSX is an XML syntax to enter to ECMAScript without any defined semantics. I love the second sentence too. It is not intended to be implemented in engines
[01:36:58]  and browsers. Yes. Um, and it's not in proposal to bring it into XML script itself. It's intended to be used with various preprocessors to transform
[01:37:08]  these tokens into something that is standard XML script. That's it. That is JSX. There you go. There's definition. It's not hyperscript. It
[01:37:14] 's not react script. It's not whatever it's, it is just a syntax, you know, without like specific semantics. So if JSX wants to introduce
[01:37:22]  scopes, it can. Right. So what I put here is it's like this, like for, for, for solid developers, it's like, oh, you
[01:37:36]  pulled it out of the function, you know, like, or self developers, the same thing. It's like, you're, you're asking for a value that's
[01:37:44]  already been evaluated once before. Like you ran the function, this is a function that runs once you get the value and then you put it in there. Like it could
[01:37:50]  never update. And I think, I think I understand this is a challenge for people. Um, but like, it's kind of par for the course on reactivity and
[01:38:01]  I have that bias. So I understand that maybe it's, it's a little bit more challenging for reactive to come in, but like, it's funny. Cause again
[01:38:07] , you get this argument about like semantics and purity and like, like this, like arguing kind of like on a technicality. And it's like, I understand
[01:38:19]  you didn't understand this at first, but we have a lint rule that could help you with this. But now that, you know, okay. And it was like
[01:38:27] , no, no, no, we need to keep on fighting against this point because this is wrong. It's like, no, to be fair. That's more of
[01:38:37]  like the, that's not like, I don't think anyone from like the, like thought leadership or react would like push on that, but it's just like,
[01:38:44]  this is kind of like, this, this is, this is why people have used, started using the term react brain. And it's not meant to be necessarily an insult
[01:38:55] . There's just a lot of people, especially react developers who've tried solid have had to kind of like go, Oh wow. And then you think, you're
[01:39:03]  like, Oh yeah, wait, how could have it ever worked in another way? If you, once you understand how solid works, like if I, you tell me it
[01:39:11]  doesn't re-render again, how could this ever work? You know? And I think, I think that's an interesting question. Um, when we start talking about
[01:39:22]  compilation, yeah, yeah. Like, don't like, don't get me wrong. There is something nice about it, but there's, there's a difference between
[01:39:33]  nice and this is something wrong. We need to fix, right? And these are completely analogous. You're right. It's like the different sides of the same coin
[01:39:45] . Right. Um, like, but I think this is, this is why I felt I had to respond to it. Cause at first I was just like, like
[01:39:58] , obviously like, I, like I could have just like gone Devon's tweet, posted this and called it a day. Why write three articles this week? Um,
[01:40:11]  it's because like, this one was really important to understand that it's more than just solving the problems or even aligning on some of the mechanical pieces, right?
[01:40:30]  It's that there, there is this perception here and let me see if I can get to it. Yeah. Let me get back to my bookmarks. Uh
[01:40:45] , where am I, uh, all right. I had it here a second ago. Here we go. I was trying to be specific, but maybe I wasn't
[01:41:04] . I do think expressing init and update render pass as a single unit in code is a lesson on the same level of structured programming over go to is a lesson. I think
[01:41:14]  qualifies as a fix to how important it is. Basically they view what w what we're doing here as akin to go to statements and everyone knows in programming, go
[01:41:26]  to statements are the worst. They lead to, you know, bad spaghetti code. This, this is, you know, because you, you know, you can, you
[01:41:34]  lose the flow of control of the, of the application. It's, it's very interesting to me though, because when I look at code written this way, it feels
[01:41:44]  more declarative, more clear what's going on because you actually reduce the space to do weird, not weird, but do like these imperative kind of local things. Dan
[01:41:57]  was started talking about react as extending the template to the whole component. And it's like, yeah, basically making things as coarse green as they could possibly do. I
[01:42:13]  don't know if you explained the templates the right word, because we have different definitions of what template is, but like reactivity and signals is like the opposite, trying to
[01:42:22]  shrink the pieces down to like the most singular declarer declarative atomic pieces that it can. Yeah. Anyway, I, where are we on chat? Yeah. And
[01:42:53]  I think, I think Evan, you actually sum this up really nicely here. I pulled some of this into my, my third article because he was like, look,
[01:43:02]  it seems to me that because react fixed the symptoms with a paradigm shift, its community believes its paradigm was necessary and fundamental for those fixes. The paradigm it shifted away from was
[01:43:12]  fundamentally wrong, but design choices are rarely that black or white solutions based on the signal-based paradigm have evolved to address the symptoms that were fixed with different trade-offs.
[01:43:21]  And to many people, these trade-offs turn out to be preferable compared to ones that perhaps react made. React thought leadership has long cultivated this narrative that our model
[01:43:30]  is more correct, almost becoming a dogma. In reality, many engineers are simply more productive with signals, mental model arguing on a philosophical level is pointless when that happens.
[01:43:43]  Yeah. I mean, that's, that's, I already told you, Evan, Evan, Evan, you knows what's up. Like it's like the whole
[01:43:53]  point of this is never about attacking react. I never actually attacked react at all or said like what they were doing was, was wrong. I was saying that like a different
[01:44:04]  paradigm can exist. And I think that's where like the tension is because it's like, it's like, no, a different paradigm is like going back to go
[01:44:13]  to languages, you know, like going back to you, I don't know, what's the language I go to basic or something. You know, like that's
[01:44:24]  a difficult place to kind of meet eye to eye on. Um, because obviously people aren't like, some people aren't going to agree with that, but I guess that
[01:44:35] 's the point. We're not all supposed to agree. So yeah, I mean, this is why I wrote the article, right? Um, I was trying
[01:45:11]  to, you know, highlight a few other cool things or people like, Hey, you know, signals are cool. You can trace them, you know, like, um
[01:45:17] , there, there is some cool debugger stuff that came out of the community that looks really promising where we can actually, and Primogen is going to funny. The
[01:45:25]  first time I ever used signals was for perf. It wasn't for perf. It was for understanding where changes happen easier. Um, plus you get, uh, LSP
[01:45:31]  references to change. Like basically he wanted accountability and traceability through his app. Primogen's a, I, I'm not gonna lie. He's got a bit of
[01:45:40]  bias. He's become quite a big signals fan with, uh, um, buddy Greg here in chat, creating, um, a version of this stuff in, um,
[01:45:49]  rust, um, with leptos, but like there are different perspectives here. Um, and to, to address what you were hinting at, uh, paras
[01:46:02] ocial, I think we can all agree that solid is clearly worse on every aspect of you compared to an idealist react framework that we've never seen. Um, well
[01:46:09] , the funny thing is what I was getting at is like, is that an idealist react framework? Or is that a, just an idealistic framework in general,
[01:46:17]  right? At a certain point, these lines might get kind of blurry when, you know, you have Andrew Clark going, Oh yeah, we'll probably just use signals under
[01:46:23]  the hood if you know, anyway. And then like at that point, who's counting? Cause like I did this on stream last time, last Friday, where I was
[01:46:31]  like at a certain point when you write code, like I wrote, I wrote an article, um, a couple of years ago, November, 2021. And I was like
[01:46:39]  talking about all the different ways you can compile reactivity. I started with this WhatsApp reactive programming. This I'm just gonna post this in chat right now. This is
[01:46:47]  like, I didn't see this two years later, but this is like one of my favorite articles anyways, anywhere of just like being like, Hey, let's, let
[01:46:55] 's just talk reactive programming. Let's just like get our head in the mindset of what it means to react, you know, program reactively, you know, and
[01:47:06]  like, Oh, sorry. I missed a tier one sub earlier from Luke dot sh. Thank you so much. Sorry. I'm just catching up on Twitch. I got
[01:47:17]  this. Okay. Anyways. He defined reactivity as this idea of a destiny operator. I don't know if you can see this, but he basically created a new
[01:47:31]  equal sign that said like, look, you got some state and then now you have derived state. I think Svelte three kind of started this way. And then they
[01:47:37]  realized like, no, actually we need to like a few more things to define it. But this is a very cute exercise. And I took that exercise and kind of thinking
[01:47:45]  in terms of the work we'd done in Marco and in Svelte and compilers about what we could do kind of under the premise of like, let's take
[01:47:52]  Svelte's premise. I don't know if you've, everyone's seen this, but Rich Harris, um, wrote this great little just a while ago,
[01:47:59]  um, Svelte language where he was like, he's like, look, look, I've been lying to you all. Svelte is a language, essentially
[01:48:07]  not a framework. Right. And he, he, he basically said like the reasons felt has succeeded is because he didn't try and mess with stuff. He kept all the
[01:48:16]  same syntax. He just like, kind of like just minorly messed with semantics. And we've seen this work tons of times in the past. If you think
[01:48:23]  about it, like the way directives work on elements, like control flows and view, like VF or NG four or whatever, like we're kind of messing with
[01:48:30]  the semantics of an existing syntax. And people kind of give that a better pass than inventing per case syntax. In a lot of ways, a DSL that's
[01:48:37]  like per purpose is a lot more efficient, a lot clearer, but people have like this natural revulsion to it. I've found. And Richard was like, look,
[01:48:47]  I just, I just kind of just kept things inside the box, so to speak. And so I was like, okay, let's play this exercise. Let's
[01:48:56]  pretend all we have is the syntax of JavaScript. Can we build a reactive compiler? Right. And I was like, okay, so I started with the destiny operator.
[01:49:15]  And then I was like, the destiny operator has some issues because it like, I don't, I get to it later in the article, but basically the destiny operator can
[01:49:25] 't really differentiate whether like it can, it knows what it first of all has no idea of side effect largely. And that's probably the biggest one. And it has
[01:49:35]  no real, it's not easy for composition. But anyways, I started talking about other ways to do it. And I, this identifier way is kind of cute. There
[01:49:46] 's a solid library for this called solid reactive ours. There's a framework called FIDAN that did this for a while, where you just put a dollar sign on the
[01:49:53]  end. What it does is you just, you're kind of telling the compiler, like, Hey, wherever I access the value, I'm going to just make it
[01:50:02]  turn into a function call essentially. Like it just, it, it just, um, it basically is a way that you can not call it, but use another symbol to
[01:50:11]  tell the compiler, like, Hey, this is reactive. So you treat it like the value everywhere on a certain level. You're like, look, I could just call
[01:50:20]  it with this, like it's two characters instead of one character, like who cares? But there is kind of like a semantic difference. Um, and the complexity that
[01:50:27]  comes when you have to pass it between templates, other approaches are used labels like Svelte's dollar sign, right. Or, um, you know, some kind of
[01:50:38]  decorator type syntax, but this has its own issues talked about function decorators, which is like the use prefix on hooks or, or the dollar sign stuff. This is
[01:50:47]  the ref sugar stuff that view kind of ended up rejecting. And then at some point, I was like, screw this all because I was thinking about Marco, Marco react
[01:50:55] ivities on the outside, not the inside. And I was like, what if we just lived in a reactive world, right? I was doing polls on Twitter too. Cause
[01:51:01]  I was like, how, how important are aspects of your favorite frameworks? Right. And I put this poll out there. Cause I was like, come people, what,
[01:51:10]  what's important to you? What do you want out of your JavaScript framework? And these are really hard things to choose between because you kind of want all of them,
[01:51:18]  but how important things are to you. And I wasn't expecting performance to be very high on this list. Let me blow this up. I barely blew it up. Whatever
[01:51:28] . I knew performance would be low. And I've, I figured, you know, it's just funny how this turned out because this poll was like, I just
[01:51:38]  like, I got the poll results and I'm like, you know what, Rich Harris, I should just shake your hand. Like you nailed it. People care about clean
[01:51:47]  syntax more than they care about any, like, which is kind of a little bit superficial, more than anything actually important. it's, I would say that maybe clear
[01:52:03]  execution model for Svelte is not like as clean, but it's, it's not bad here, but like this, this, this, this is like why we
[01:52:15]  go through so much struggles. Cause if you could just design the right language for it, you know, then, you know, maybe you could be fine, but people
[01:52:25]  will probably reject it based on syntax. And the, the, the thing is like me personally, level of control is like the most important thing. Cause I, I want
[01:52:39]  to exit that framework whenever, like, I don't want to fight the framework. If I bring something in, it's working for me, not, not it working,
[01:52:45]  you know, like it's for me, not for, you know, me working for it or so to to speak. So like, like most people are willing to
[01:52:53]  give up control, which is maybe a bad sign for my design philosophy. And I've had to like, think about this a bit, but like, I don't know
[01:53:03] , this is a small poll, but it was just something that I found really interesting. Cause like I thought performance would lose and people actually cared about, you know, being
[01:53:13]  in control even less than performance for me, clear execution model and control are basically all that matters, but like it's very interesting. Well, the thing is,
[01:53:36]  this is all DX. Like performance isn't performance is a UX consideration, but everything else here is DX. And that's why I thought performance would lose because literally DX almost
[01:53:50]  always trumps UX from when you ask developers, right? These are all DX. right. But Maple, I'm interesting out of these four. What do you think
[01:54:22]  is the most important to be able to ship the app at all? My guess would be clear execution model. A clear execution model has to be the most important thing,
[01:54:34]  right? On this list. Yeah. Yeah, exactly. Yeah. Yeah. Yeah. Level control is second. Yes. That's, that's, that's, that
[01:54:45] 's the logical, that's the logical, that's like, that's what I thought. I, I, I, you know, I, I, I'm a
[01:54:51]  bit of a zealot. So I might like, I might even sacrifice a clear execution model at times if I have more control. Um, but like, yeah,
[01:55:00]  the, the, when I saw this, I was like, okay, screw this, let's, let's design reactive script. And what I ended up doing in the
[01:55:09]  end was actually showing this little code snippet. Okay. And I haven't talked about this for a while, but I think it's actually important for the conversation here because
[01:55:21]  this code snippet, this code snippet is a solid, is this react, is this, uh, Dominic's new, um, uh, compiler based
[01:55:36]  framework? I don't know. Well, no, that's the thing I am saying we're building a compiled language, right? Like what I'm getting at is,
[01:55:58]  it's, it's, it's, it's, it's, it's, it's, it's obviously fun that reacts like, oh, we'll solve
[01:56:02]  this all with our compiler. And I, I can say that too. Guess what? We'll solve this all with our compiler. Good. I'm glad, I'm
[01:56:09]  glad we all agree. You know, like that, you know, so like, I, I proposed like, this is a solid compiler right here that I proposed.
[01:56:21]  It's got early returns. It's got destructuring. Um, it's got state defined after afterwards. I could show you in solid what this would compile to.
[01:56:30]  Like you could definitely compile this. We have a plugin for, for undestructuring props. You can do that today. Where are we at? Babel undest
[01:56:38] ructure solid. Let's pull this one up. Here you go. Okay. Destructuring really bugs you. Here you go. You have a, there's a
[01:56:48]  Babel plugin for that. A lot of, we've had a lot of compiler work in our community. Some people are like, I prefer Svelte like syntax.
[01:56:54]  People have done that because then they're like, oh, look, my Svelte's faster than Svelte, you know, like silly stuff like that. And
[01:57:00]  like, obviously it's not fully Svelte because Svelte's got the crazy animation stuff and the crazy features. No one's going to like replicate that.
[01:57:06]  But like what I'm getting, you know, that's like part of their specific unique set. But what I'm getting at is like, you've got some primitives
[01:57:12] . You can do a lot of stuff with a compiler. Um, and and what I was getting at it here is you could kind of like look at this at local
[01:57:26]  scope and go like, okay, what mutates? Then I could kind of like, you could kind of like, maybe be a bit like, it'd be better if
[01:57:31]  you knew which variables should be signals or reactive. Okay. And maybe I honestly, if there was a really good type system, we could do this, but otherwise you can
[01:57:39]  kind of look at this and go like, I'm going to make it kind of loosely go like, look at this flow and can assume most things are reactive. And you
[01:57:44]  could, you can make a compiler that, that does this that, and the thing is what, what's crazy about this to me, and I want, I want
[01:57:52]  to kind of point this out is, and the reason I asked you which framework it is, is on one hand, you look at this and you're like, oh,
[01:57:59]  it runs top down, right? Like, like, like if you did this, you define some state, if not visible, you early return. That means this doesn't
[01:58:08]  run. And then you're like, okay, next time it updates, visible is true. And now this runs. So it's like, it runs twice. But the
[01:58:15]  funniest thing is, if you built the, if you started putting console logs between every statement to observe what was going on, the optimized compiler would show you that the compiled
[01:58:27]  output ran more like solid.js. Like I could put a console log in the body. Um, and there's a very high chance that it's only going to run
[01:58:35]  once, you know, or it gets compiled right out of the output is what I'm getting at. Like the, we, it might like, you look at this
[01:58:44]  and you might go, oh, like, this is kind of like react model maybe. But then like, on the other hand, like it might not actually be so clear
[01:58:57]  when you try and inspect how it actually executes, because this, this, this early return maybe makes things a little bit easier to see. But what I'm getting
[01:59:07]  at is like, how do you know, like if I put a console log at the top of the function and it runs initially, and then the next time the component runs
[01:59:16] , it doesn't run the console log and just switches the branch. I've broken that, that thing because, you know, I've optimized the component so much that
[01:59:25]  it doesn't rerun, but that it, um, that it like just does a bunch of reactive branching. And then you go, well, the way I know
[01:59:34]  that this changed was because it depends on this reactive variable here. You start talking about the execution the same way you talk about reactivity, which is kind of interesting,
[01:59:45]  um, observation we made when we're working on Marco. Yeah, this looks like Svelte like JSX. That's, that's, that was my goal here
[01:59:52] . Except there's no dollar sign. This is, this is beyond Svelte. There's no like dollar sign thing here. Like this con statement is the dollar sign
[01:59:58]  statement, so to speak. This is, this is kind of like what everyone's working towards. Like it's unclear to me, like, like, I don't
[02:00:17] , like, I'm on the fence on this because I'm kind of like, we, we start building this system and then you're kind of like, you, what
[02:00:24]  if like this completely rearranges your code? Like you lose a bit of that transparency, but you can kind of pretend sort of it looks like it's top down as long
[02:00:33]  as we prevent you from introspecting the fact that it's not. right. So I, I, a couple of years ago, I wrote this down and I
[02:00:45]  was just like, someone build it and like, I want to try it and see if I like it. Cause I feel like I, I'm not sure, you know
[02:00:54] , like on one hand, it seems really easy and really nice. On the other hand, it seems like traceability might be out the window. Um, yeah,
[02:01:07]  exactly. I think that's, I think that's where, where it is, right? Why is the compiler reorder statement? It's not so much reorder.
[02:01:18]  It like breaks them into branches because the problem is you don't want to waste the time of rerunning things in Dominic's compiler. There's no V DOM, right
[02:01:25] ? And I don't know if react forgets going that way as well. So like, you don't want to recreate DOM nodes on different branches. So it basically works
[02:01:32]  like solid, but then you write it like this. That's where it is. It's not like, it's more like this whole thing becomes a show component and
[02:01:39]  it's all, you can nest like signals inside show components and stuff. There's no component re-render. So you can like, you can just like, you put
[02:01:46]  a signal anywhere, right? And it'll get disposed properly and all that kind of stuff. You can just nest, nest, nest. So like, it's like
[02:01:52]  untangling this stuff into like branched reactivity statements. That's, that's what these compilers do, right? So I, I just wanted to
[02:02:09]  kind of put this out here because yeah, I, I, I, something I was thinking about a couple of years ago and I was like, I was like, come
[02:02:17]  on community. Like, it's funny because the guy who, some of the guys in solid who've been doing these comp, this compiler work like alexis,
[02:02:24]  he, he actually made a library last week called, uh, forgetty. Um, he made his own react memoizing compiler. This, this is the one of the
[02:02:39]  fellows on the, in this, in the, in the solid ecosystem. He actually made a memoizing compiler for react. Look, this is, this is some lovely
[02:02:47]  output from it. So you can write this example, if type a returning this, else do this. And it generates this lovely code. Um, like I'm, I
[02:02:59] 'm glad he's doing these experiments. I think, I think more people need to do it. I do see there's this future here and if we can plug the holes
[02:03:06]  maybe, but I'm, I'm like, as I said, I'm one of those guys who are like, don't take away my control unless you know that
[02:03:12]  I'm never going to ask for it back. To the matter is like, I think he based his ideas mostly off this original video. And my understanding is that the react
[02:03:22]  forget project has almost like taken like a second phase or a new look. Like it's like they had the original approach and now they're kind of like on their second approach
[02:03:33]  of this. So I think they're making good progress. Every time you build something, you kind of learn, you know, like you have the, the prototype and
[02:03:39]  then you have like the alpha stage and stuff. So they're kind of, my understanding is like the react forget is taking things even further than what this talk showed. But
[02:03:50]  I think more people should be playing with this stuff if possible. I do, but I, again, I just put it out there. Hey, Theo, how's
[02:04:02]  it going. All right. Yeah. So I mean, compilers are interesting. Like this could be our solution, you know? Um, so, but the funny
[02:04:15]  thing is like, whenever we have these conversations, it's because usually I take the position. I'm like, yeah, solid can do really cool stuff without a compiler
[02:04:23] . And then the, and then the response was like, but with react compiler, then we won't have these issues anymore. That's like, okay. You know what
[02:04:29]  I mean? Like, so like, um, yeah, I don't know. We can have a compiler too. That sounds like fun. You know, like maybe that
[02:04:36] 's the funny thing is like, we all get compilers and all the frames the same. And then we all just keep on using react. Maybe, maybe that's
[02:04:42]  it. I'm not sure. I think what's going to happen is actually, we're going to, we're going to see and realize new trade-offs and
[02:04:48]  new places. I told you view vapor. I am a hundred percent confident in the performance of that. I am not a hundred percent confident in what the performance is going to
[02:04:56]  like look like with these, with these compilers. But I am very interested because it's probably going to be another, like, it's good enough scenario where
[02:05:08]  if people like the DX, DX always trumps, you know? Solid remember a thing. Oh man. The naming is brutal too. What solutions are being developed through
[02:05:33]  debugging apps and things. Yeah. I don't know if we're there yet. I think it's interesting too, because if you pretend like the reactive graph doesn't exist
[02:05:40] , I think it's going to be interesting in like what kind of traceability you're going to have in your apps. I don't know. Then again, reactivity
[02:05:46]  has classically been one of the harder things. People haven't done as much research resources of debugging. That's why I'm so happy with Damian's work. I
[02:05:55]  know the view community has done some amazing work as well, but of like being able to look at how we can visualize these graphs. MobX actually as well. Mob
[02:06:03] X has a really cool thing where their debugger, it's not like the visual thing I was talking about, but like they can actually give you a stack trace that's
[02:06:13]  based on the reactivity rather than the MobX's own execution. So you can actually like trace through and go like this changed because of this, it changed because of this
[02:06:20] . Like the, so like, I think, I think with compiled solutions, people, we will get to a point probably where we can solve that. I think the interesting
[02:06:29]  part that's really unclear is and is, is whether we'll like, no, how do I speak it? Like whether we'll have to be aware that we have
[02:06:37]  reactive variables or, or not. That's the point of contention, right? The React team right now is like, we will never like, we don't expose react
[02:06:43] ivity. You shouldn't think in terms of reactivity. I'm curious to see if like that can actually be the case. Yeah. Yeah. I mean, if
[02:06:57]  I, that's another way to look at it, right? If, if it takes every other framework to kind of like go like, Hey, this, there's something
[02:07:06]  here, but then in the end gets react to, you know, improve and move, then we're, we're all in a better place. Yeah. Idea stealing
[02:07:14]  is good for everyone. Thanks. Like, this is, this is, this, this is why I do it. You know? Uh, important. Okay. Am
[02:07:31]  I, am I gonna, am I gonna see what's important right now? Let's, let's see what's important right now. Important. Uh, can we
[02:07:53]  get you and Ryan on Twitch stream together at an hour or two, just talking about whatever. Yeah. I, I, I'm sure there's gonna be a conversation at
[02:08:03]  some point. We had the only time that we've had a public conversation, um, like me, me, me, me and Dan met in person and we've,
[02:08:14]  you know, chatted over DMs several times. But the only time we've ever had like a public conversation was actually on one of, uh, Theo's spaces.
[02:08:19]  And it was like completely impromptu. We both like, it wasn't planned. And we both just like happened to drop in that space. Just, you
[02:08:26]  know, just cause. Um, but yeah, you know, uh, anyway. So the only thing I've been trying to say here is like, there's, there
[02:08:52] , there's like a lot of room here. Right. I think, I think this is really exciting. Like the way all these things are changing. I, my
[02:09:01] , I do draw this out because I think this is the source of a lot of confusion. You know, I, I was come from here, saw this and I was
[02:09:09]  like, like, it's funny. Cause this is not the case. Even like once you, especially like if you really developed like this, like a lot of people
[02:09:18]  are used to going the other direction. So then like you guys kind of understand and go, okay, this is kind of like if I write everything with hooks, but the
[02:09:24]  funny thing is if you come from knockout and go to react, there's a similar kind of dissonance or come from solid and go to react. It's or
[02:09:30]  reactive line going to react the same thing. Cause you start going, okay, hooks look like this. So I'm just going to arrange all my code kind of in
[02:09:38]  this derived data hook like way. And then you kind of get confused when things over execute, when they don't need to, for the most part, this actually guards dec
[02:09:46] ently, but then there's those other cases and you realize, oh, this is actually very different. Like, like where you just kind of like in knockout the
[02:09:55]  way you like, I used to love making games in knockout, you know, because like I could wire the rules. It was like a game engine, you know,
[02:10:04]  like I remember making tic-tac-toe or Sudoku or whatever. And I just like, you know, or, and I just make the rules engine
[02:10:11] . And I just be like this, like, I just write everything out line by line. So it made sense so that I could express the states. It's almost
[02:10:18]  like writing state machines, you know, like I just write it and then I build the UI around it and it just kind of work. Like I just loved that kind of
[02:10:28]  mentality. And it's just like a different starting point than like where react is coming from here, which is why it's not clear. Like as much as I want to
[02:10:40]  be like, you know, go back to 2013. Like, um, I'm really happy to see that the actual current react core team isn't like that. Like
[02:10:50]  they, they, they do, they think deeply about this stuff. And I think that's really important. Um, and, and as I said, if, if,
[02:10:55]  if you have any doubts about the history and like how hard react, I mean, I might seem like I'm being like a little hard on Pete hunt, but he,
[02:11:02]  you know, he's being like a little bit perhaps obnoxious is that like, they had the fight tooth and nail to like, like you gotta remember at the
[02:11:12]  time, everyone was like, no, this is the way you have to do it. No MVC separations of concerns, blah, blah, blah, you know?
[02:11:19]  And like, they literally had to fight through like this giant pile of crap to like do something that was actually really, really, really logical. And it's like so obvious
[02:11:27] . And you're sitting there going like, like, why am I even discussing this stuff? Like, like, like, look, look, can I, can I
[02:11:36]  show you a demo? Can I just like, give me five minutes of your time? Like, you're not going to be, you're not going to feel like I
[02:11:41] 've wasted it. And I feel, I can understand you, you work really hard like that. And then you like, you go, you finally like conquer. And then
[02:11:50]  like, I don't know, eight, nine, 10 years later, people come back and go, Oh, this other way. And you like immediately see red. So
[02:11:56]  like, I get it. And this documentary, it's funny, you watch it one time, maybe you've already watched it, watch it again from the scope that
[02:12:05]  I've given here, you'll see what I'm saying, it actually captures it almost perfectly. So anyway, uh, this discussion is great, by the way,
[02:12:32]  the funny thing is, it's not this example, I shouldn't skim over this too much. But like, he was showing like, if you had some like logic
[02:12:39] , and I looked at this component. And the first thing I did when I looked at this component was, I was like, it's funny, I had no time,
[02:12:44]  because I was trying to respond. So I get Theo. And I'm like, man, I don't even know what this does. Like, give me a second.
[02:12:50]  Okay, so I have a count. Okay. And then I set a heading to something. And then if this, then I do some processing. And then I set the
[02:12:55]  heading to this, like, instantly my head, I just want to be like, what is heading, right, I want to refactor this. And it's funny
[02:13:02] , like, I just don't write code like this. It's funny, someone actually did an analysis of, I think it's Primogen did an analysis of the different
[02:13:11]  framework repos. And apparently, the code that I wrote has the least number of nodes or something like by a long part, I just write code in a really weird fashion
[02:13:20] . And part of me wonders if I was like, too inspired by looking at output from minifiers. But like, it just I have a very different style. It
[02:13:36] 's very distinctive. Sorry, I like this. If you're asking, it's been reactors to the world the whole time. And I can kind of see this perspective
[02:13:49] . It's so funny. Sometimes when I talk about react, and I like, like, wax poetic about how awesome it is. It comes from the point that even though
[02:13:57]  they won, I still times try to treat them like they're the underdog. And I know that's like, it's such a weird way to put it. But
[02:14:04]  it's like, I don't want react to go away. And it won't. So I don't have to worry about this. But like, it's because
[02:14:10]  like, I think the idea it's like, if you see something that like, it's like trying to approach the light, like, it's so good in idea that
[02:14:18]  you're just like, I don't want to mess with that. Like, even if like, yeah, you know, from my perspective, maybe there's like other things
[02:14:27]  you could be doing. You kind of go like, no, like, let it like this thing is reacts the winner, right? So like, it doesn't even
[02:14:34]  matter. But it's just it. It's funny that I can see where this react against the world thing is from. It's very interesting. Anyways, like, he
[02:14:50]  goes on and goes like, okay, well, in solid, you can't write it this way. So he writes it like this, which is okay. But like
[02:15:01] , I mean, someone might write it like this, I wouldn't, because like, the first thing I'm like, like, it's just, it's not functional
[02:15:09] . It's not like, it's, it's not to purpose enough. It's not, you know what I mean? So, you know, he had to rest
[02:15:16] ructure it. And then when he wanted to add something, he had that all this other logic. And then, you know, it's in react, he just added a
[02:15:22]  line down here and a line here, you know, so that you can kind of like tie it together. And then here, he had then two more things. And
[02:15:28]  then, you know, and he was like, going like, this is the process. But I was, I was kind of like, you know, but with react,
[02:15:35]  forget will just be the original thing. It'll be just as optimized, right? Okay, sure. So then, but so when I looked at this, and I mean
[02:15:42] , I cut it down another line, I realized I was like, Okay, no, I have a format thing, which in real library, you're probably using something
[02:15:48]  like I18n or something. So like, my head, I was like, Look, I'm formatting some data. So a transformation, and then I have account,
[02:15:55]  I have a heading, and I have something else, just tell me what those three things are. And then I'll use my template, like, it's just like,
[02:16:01]  123, ding, ding, ding. And that's, that's like, the starting point. Like, for me, like, like, I wouldn't even have written
[02:16:10]  the code up above in the first place. So when the refactor story comes in, because what's the refactor story here, you go count, you go heading,
[02:16:16]  right. And you just write this, this, and you have your format. And then someone goes, Oh, I want to add something else. And you just add
[02:16:21]  something else. Like, you don't touch multiple places in the code, like you do up here, or even in the react example, you still go in, where does
[02:16:29]  it go? Hmm. Do do do do do do do do do could do something here do something like you don't even like, try and have to parse through it to
[02:16:38]  figure out where it is, you just go bang, right. And I think like, this is definitely more constrictive, right. There's like a trade off
[02:16:46]  there, you still have to be like, you got to buy into this, you know, because it's sometimes control flow is what he's calling it is easier than data
[02:16:53]  flow. But data flow, like this, this is the gap, because people come in from knockout, and they go, or reactive library, and they go to react
[02:17:01] , and they just start writing stuff in data flow, because the hooks look like you can benefit from it. And sometimes it's like, maybe not, it doesn't like
[02:17:08]  make as big of a deal you want for react. But like, let me let me remove some of those extra function calls, you know, we get down to the
[02:17:14]  end here. And like, like, I kind of like, when I get to the future, when I write that compiler, I still kind of just want to write this
[02:17:22] . I just want to go, here's my formatting, then I'm going to drive account heading into something else like this is this is this is this is where I
[02:17:30]  want to be. Yeah, this is arguable, I could do that. But it was kind of like, at a certain point, you got to make that decision.
[02:17:39]  And I mentioned this in the thing, I'm like, I could pull count out if I wanted to, right? Because then I can be like, Oh, yeah,
[02:17:44]  like the whether I pull count out or not, like, the adding the like, the three extra characters, for the extra check, like, yeah, you know,
[02:17:52]  whatever, it's whatever you feel like, right? It's a stylistic thing. Like, I don't mind this duplication, if it was, you're right
[02:17:57] , if it was more, like, there was more logic, it was like, if count this and blah, blah, blah, blah, this, then yeah, extract
[02:18:02]  it out, you know, like, sure, whatever. Right, it was just interesting, because, like, a lot of responses, I was like, you know,
[02:18:11]  like, I saw some stuff and people like, I think this is a really powerful, you know, like, kind of understand the difference here thinking. And I was
[02:18:21]  trying to figure out how to best frame it. One thing I didn't mention was you could actually literally take the react component and stick inside create memo. And in solid,
[02:18:29]  like, you can always take a react component and stick it in. This is the thing I always talk about with reactivity, you put a whole V DOM inside an effect
[02:18:38]  or so, or, and in a sense, you know, this is the troll memers in the solid community. Again, if you've ever read the article from
[02:18:47]  Dan about when to use interval, he shows this, like, counter that, he explains how he ends up with a react counter that looks like this. And they decide that
[02:18:59] , like, someone made a solid react hooks library, I say someone, but it's the same guy who made the debugger, where you can literally use react style
[02:19:07]  hooks inside of create memo call in solid, which at first I was thinking was kind of funny. But now after having this conversation, it's funny, it's like,
[02:19:14]  maybe that's the, I wonder if that's like an easy way to port react, you can like literally take a react component and just like, stick it in a solid
[02:19:21]  memo, you know, and then keep on using your same hooks. That's, that's, I didn't realize what this was doing, but it was just amusing
[02:19:27] . Anyway, sorry, I, I tangent it off. Um, right. So anyways, I apologize. I was like a little bit off the side here. I
[02:19:45] 'm just, I'm just saying, like, I think the interesting thing here is that like, yeah, he was like saying like, when you put the component in,
[02:19:51]  then you're in react land, and then you don't get the grip, like some of the granular benefits, perhaps. And yeah, I mean, it's, you
[02:19:57]  guys can read the rest of the conversation yourself. I was saying like, that was a bailout. And, you know, I just, the whole point of this
[02:20:03]  conversation here is that like, look, I don't agree that this is a clear step backwards, but my react experience, you know, is less than yours. I've
[02:20:09]  only spent like, you know, three years here, another year, like four years using react, you know, and like it was, it was a shift. And Dan
[02:20:17] 's response here was pretty cool. He was like, yeah, that's pretty interesting. I haven't thought about it from that perspective. To me, hooks are very functional
[02:20:24]  in the classical sense. They're a universe apart from knockout style. So I was very surprised you mentioned trading away pure model. Well, it's here's where
[02:20:32]  the perspective is why it's like kind of feels like trading pure model, because you now when you use hooks have to be kind of, I forget what it was, I
[02:20:39]  saw some commentary where someone was talking about, Tanner was about referential equality in react, how you always have to like, make sure that stuff is different. And at a
[02:20:48]  fairly, like, like, you have to structure clone, because if you run a bunch of components, and you pull some state in, you have to make sure that like
[02:20:54] , in order for the hooks not to rerun, you have to actually like, do equality comparisons. And I think, I forget if it was Jordan or somewhere early
[02:21:02]  react is like, they're like react never used to be like that. Right? We kind of didn't care. And it wasn't until hooks came in that we kind
[02:21:08]  of like, basically, the patterns forced you now to like, do equality checks on all the data value before we it was just plain data. And I think this is a
[02:21:16]  really good point. Because Dan was saying in one of these tweets about like, yeah, here it is, the attractive react being about these raw values, if you want
[02:21:26]  to pass a list of things, you pass an array, if you want to store a number about it, and he's right, you don't wrap them in reactive wra
[02:21:31] ppers, but but but but you're, it is important to think about them in kind of like a structured cloning kind of way and referential equality. Because you are
[02:21:41]  doing with the dependency arrays, these reference checks, like it's not like old react literally was like, I can mute, nothing is a good thing. But I can
[02:21:49]  mutate some stuff called force update, like that was kind of the mentality behind it. It was literally just plain objects. But react today, it's not just like,
[02:21:59]  like, it's still a plain object, but not plain in like the arbitrary plain way, but plain in like the functional programming sort of sense of the plane. So it
[02:22:08] 's, it is interesting to see, because when I look at a lot of the stuff, even the rhetoric, if it, I'm not sure, like, I think
[02:22:15]  it maybe takes an outside perspective to kind of get see that react doesn't feel like react used to feel. Right. So like, I think, I mean, I
[02:22:31]  could have written more responses. It was just, I don't know how deep I want to get on to the I like ideological kind of like, functional programming side of stuff
[02:22:40] . I it was just, it was just, like people coming from reactivity, it does look like it. So like, and he's saying that's a superficial similarity
[02:22:49] . It's just like, when I think of pure functional composition, I don't think about things that inject state that persist between function calls, like the actual hooks mechanism doesn
[02:23:00] 't feel pure. I understand that in functional programming, there are mechanisms to do this, right. And I don't have the out, I guess I don't, I
[02:23:09] 'm not sure if I have the academic background to actually speak to what, to what those are called. I think somebody in the chat can probably tell me what those are
[02:23:16] . So there is like a precedence here. I understand this is deep in, you know, you know, there's academic, you know, work and in some functional
[02:23:23]  language, these are mechanisms that exist. It's just, but like, I like, I'm a dumb guy who's just like looking at this and like, suddenly
[02:23:34]  I call a function with the same inputs, outputs, like, I get different, like, you know what I mean? I like, there's this, there is the
[02:23:44]  state that persists between the function calls. And to me that, like, maybe that's still pure in some kind of purest sense, but I like, I
[02:23:52]  can't, I don't know. Monad, is that what I'm looking for? It's always monads, right? Yeah. So like, thank you
[02:24:11] . Yeah. So it's, it's tricky, right? The funny thing is I liked hooks. Like when hooks came out, I was like, I was like,
[02:24:18]  that's what made me want to try react more. I was already using react to be fair. I was using react native before I was using, um, hooks, but
[02:24:26]  then like react native is a whole other thing. It was a lot of fun early years. There's a little rough, but also you ended up doing a lot of optimization
[02:24:32]  because there was like stuff that was still on the, they hadn't moved to the GPU thread yet. So like you, you, and there's specific APIs that could
[02:24:39]  move some stuff to the GPU, but you have to do like a lot of like, I remember like writing my own infinite control, uh, scroll mechanism on top of like
[02:24:47]  the list view type control, like the container stuff like that they built into the framework. Cause it wasn't performing enough for us. Really, really fun actually, uh,
[02:24:56]  using react native early days, but like what got me later on to doing the web was I saw hooks came out and I saw suspense and I'm like, man,
[02:25:03]  this stuff is sweet. I want to, I want to use that. Um, so like, I think hooks actually have a lot of really good benefits. I just think
[02:25:11]  that it muddies the water a little bit on the discussion because you, I don't think you get to like hold as high of a higher ground, so to speak.
[02:25:18]  I mean, that's just my perspective. Right. But I think that's kind of the crux of, of it. Like there's like, it's fine though
[02:25:25] . Like we don't all like the world is messy and imperfect, right? Like that's, that's the thing. And that's why there's so many different
[02:25:32]  things we can do. Uh, the, well, the funny thing is they gave control. I mean, it's funny, like in a different way. Like I loved
[02:25:48]  it. I love the way that like, when you start, like, I like, where is it? I like this. Like, I like, you start grouping stuff
[02:25:54] . If you remember that, that image where they like took all the colors and the class components, had the stuff all over the place. And then you started like putting
[02:26:00]  it together. This here is the pattern of putting it together. Like this has a color, this has a color, this has a color, like this, this is,
[02:26:10]  this is good. Right. Um, so like, I don't know if I'm like, that's why I like it, like, yeah, you know what
[02:26:20]  I mean? Like that too. Yeah. I mean, that's probably the biggest win. Like the fact you just import them. Right. So anyway, you know
[02:26:45] , I, this is, this is a really like multifaceted thing. I'm, I'm super glad that Dan engaged me on here. Cause I, I missed
[02:26:52]  his point. I was, I have to admit, I was, I was focusing a little bit, I thought, I thought it was about immutability. Like
[02:26:58]  there's so many facets of this that tie together into the full, like, um, react kind of philosophy. It's so funny. I got, it's so,
[02:27:05]  I mean, I got called out a while ago in our docs for talking about the react philosophy. And I'm like, this is a real thing. Like, it's
[02:27:15]  like a very, very real thing. I'm not like trying to sound like some sort of like gatekeeping, you know, like it, if you want to talk
[02:27:26]  about react, you have to unders like, you should understand the philosophy of it. Um, anyway, anyway, I, I am, I told you I'm a huge
[02:27:44]  react fan. This is, this is, this is why I don't know. I, someone, someone wrote something in the comments here and I don't know if
[02:27:50]  I should call them out too much on it, but they, what did they say? They said, was it in this one? No, I don't think it was
[02:27:56]  in this one. It was in yeah, no, it's this one. Yeah. I said, I made this comment, react change, so front end world. Right
[02:28:03] . And I got a response in here somewhere where someone was like, I can't believe someone as knowledgeable as you, uh, about front end frameworks and blah, blah
[02:28:11] , blah, on the web would ever say something so nice about react. I was like, what in certain circles, I'm like kind of a moderate, like if you
[02:28:23] 've ever read anything by Alex Russell, like I, I, I, I'm maybe I'm a sympathist, you know? Um, yeah, I mean, I
[02:28:31] 'm not, there was a lot of talk here. I just remember like, it was just, I saw the comment and I was like, Oh, okay. Um
[02:28:38] , yeah, I mean this, this, this whole thing, there's so much great discussion here. Um, yeah, sorry. There's, there's even more,
[02:28:53]  uh, I didn't even see this comment. There's no Sniggles. Where's the Sniggles? Yeah, I mean, this is an interesting thing because I
[02:29:12]  think this is a question. I think this is what the Preact guys are asking themselves at some point. They're just like, but this is like a slippery slope.
[02:29:20]  Right. Cause like, you're like, once you go, well, if I could do signals instead of hooks, then at some point you're just like, and
[02:29:31]  if I believe it that much, I could do fine grained rendering instead of it. I, I'm not surprised that view ended up here. You know what I mean
[02:29:39] ? Like that, that's where view ended up ultimately. Um, because like, I told you, Evan knows where it's at. How many times did I have to
[02:29:51]  say that this stream? You know, meet me and Evan don't always agree on like philosophical stuff, but he understands the trade-offs about better than anyone. Cont
[02:30:08] ext. Most of the web is written in PHP and jQuery. Yes. Truth. Truth. Yeah, no, it's. So anyway, it's so funny
[02:30:38] . I spent this time kind of like defending the history, showing how signals have evolved. Then I, then I showed it how like solid is not the, the reactive framework
[02:30:47]  of the past. I talked about immutability, opt in, opt out, all those kinds of stuff and show that like there could be another model. I didn
[02:30:53] 't actually, in this whole debate of things, even talk about why signals are good. And it's funny. Cause I was fine after the second article, this I'm
[02:31:02] , I'm getting back to today. Cause the reason I'm so tired, see this stream, I'm pretty stoked to have you all here with me. Cause you're
[02:31:08]  kind of reliving. This is like a retro stream. This is in the middle of the day, but this is the kind of vibe that my earliest streams used to have
[02:31:15] . Cause I used to do the streams at like eight or nine o'clock at night or, and then like you get to an hour or two in and it'd
[02:31:21]  be like 10 or 11. I'm just beat after a week of work and I'm like half asleep. And I'm just like, we're just saying whatever's off
[02:31:26]  the top of my head. And, and, and you know, there, there wasn't that many people. And I just sit there with a chat and we, we
[02:31:32]  basically do this. And, and essentially I'm like that today. Cause honestly, I went to bed at like five o'clock this morning because I was writing this
[02:31:42]  article. I, it was 8 PM and I was like, damn, I need to write a third article. I need to finish the arc, you know, make the
[02:31:49]  trilogy. Um, and I knew this article was not going to be as popular as the other articles, but it was important to do this because even after I wrote the
[02:32:05]  first few articles, you know, I got a couple of DMs or I saw some chatter and and people were like, yeah, so like, why do I want to
[02:32:14]  use signals? Cause like, like no, all I did was actually defend stuff. I didn't actually at any point say like, oh, they're a good thing.
[02:32:26]  Like, um, I didn't, you know, like, I was just trying to say like, look, there is an alternative that is possibly viable. Right.
[02:32:36]  So like, yeah, I, I, I, I was like, okay, I need to write another article. I'll tell you this. It is very hard to
[02:32:50]  write three articles in a week. Um, I mean, that's difficult anyways, but it's actually hard to, they're about the same topic and each have independent
[02:33:01]  narratives that bring in their own points and, and what, and whatnot and kind of tie it all together. Um, it's, as I said, uh, I,
[02:33:11]  I, the second article changed form drastically over time. It started as more of like the story of solid. And then it turned into, I realized that the more important thing
[02:33:21]  to understand is the story of react. Um, so I never actually ended up writing the story of solid in the end, but we can talk about single signals. We
[02:33:31]  can talk about kind of like, so how they evolved, like why they're better today. We can talk about how react influenced the world of how we built front end.
[02:33:43]  And then finally, I wanted to actually say like, why signals are actually good. Like why, why, why, why, why are view and angular and preact
[02:33:53]  and everyone looking at these and quick. So, so, so I wrote the third article and basically I don't know if this is my best article. I made some
[02:34:19]  good points, but I think the, the crux of it though, even though I'm talking about signals is if the case for signals is suggesting that view equals function
[02:34:30]  of state is good, but not necessarily like maybe a practical ideal. Like in the end, we can't get there, which is always true of this. Like you
[02:34:45] , like there's your, it's almost like approaching infinity because like you have to retain something or you memoize or something like, I don't know. I, there
[02:35:01] 's probably some math behind this whole thing that when we have to talk about, when we step away from the, like the ideology and start talking about, um, like
[02:35:11]  the mechanics, um, then we can actually talk about this for real. I, I, it is basically what I was trying to say here. Right. Like, um
[02:35:18] , and I actually that came really obvious. Rich Harris gave a talk a couple of years ago called metaphysics and JavaScript, the rich Harris, the creators felt, and
[02:35:33]  it is probably the best talk he's ever given from these slides. I read these slides like once every six months, but it was never recorded for some reason. And it
[02:35:44]  is, I, I don't think he ever gave the talk again. And it's like a shame that it never came out, but this probably like from a framework author
[02:35:52]  perspective or like people kind of into this, like people like yourselves watching my stream, this is probably like, everyone talks about rethinking reactivity or versus on pure overhead
[02:36:00]  or some couple other things. This is probably in my opinion, the peak rich Harris talk, but you can't find it anywhere. And luckily for us, rich wrote all
[02:36:12]  he's like me. I do this too. He wrote his talking points into the bottom of the slides so we can see what he has to say. And, um,
[02:36:25]  let me actually see if I can find something here. because I'm going to pull this over here. I found an article that was quite cool. Um, uh
[02:36:43] , let me see if I can find it just a second. Um, that was really, really, really quite cool. Um, that was someone was reviewing the talk.
[02:36:47]  I guess they were, they looked at the slides or they were, um, yeah, let me see here. This blog post here. Check, check this one out.
[02:36:48]  Um, I know I'm tangenting a bit from my article, but this, this is so much better than what I was trying to say, but I needed,
[02:36:57]  I wanted to talk about signals and not focus on this point. Um, yeah, ironic, uh, ironic, eh, he, he, he, he, he
[02:37:21] , he, he, he. obviously the talk predates the meta rename but it's kind of funny love it um he he said there's a there's a snippet
[02:37:32]  in here um is i think ui equals a function state is an ideological statement this is rich harris i'm quoting here i just didn't find in the slides and what
[02:37:49]  i mean by that is that like any other ideology like capitalist ideology or communist ideology it is a collection of normative beliefs and values that an individual or group holds for other
[02:38:03]  than purely epistemic reasons which roughly translates as it describes the world people want to imagine rather than the world people actually inhabit i'm using the world ideology as a descriptive label
[02:38:14]  not as a dismissive one but ideologies can be dangerous because when they start to chafe against reality which they always do the ideologues impulse is to always res
[02:38:24] hape reality then modify the theory like this is deep deep we talk about philosophy right um i'm actually going to share this this thing because this is someone reviewing the talk but
[02:38:40]  i think it's like like like uh jim nilson i think this is just like like he said so what would happen if we took a very naive approach to functional
[02:38:56]  ui maybe it would look something like this we create a function that generates some ui from state including an event listener that calls a function again when the state changes do
[02:39:03]  you see what's happening here we are trying to create a very simple interactive experience illustrating the idea of ui as a function state we have some text blah blah blah basically
[02:39:10]  the input loses focus right this that's the whole point of this silly little demo here and yeah so rich rich harris is a poet you know like i don't know he
[02:39:24]  he he he he's an amazing writer he's also worked in journalism forever and it probably makes sense but like um you like this is like a very visual thing in reality
[02:39:38]  the we we kind of meet in the middle is really the point here but um let me kind of go back this talk is is is just great in general he has like he
[02:39:51]  quotes like different philosophers no man steps in the same river twice for it is not the same river and he is not the same man just just just gold um but what i
[02:40:04]  was trying to get at here is that this sort of holds the this whole conversation right it's it's the it's the go-to commentary it's the whole it
[02:40:21] 's the whole thing and it's always going to be hard this is what it was evan use evan you made the same point too when we were reading read what he
[02:40:30]  wrote earlier it's this is kind of the feeling it is talking about this so it's almost not worth it so instead you know what i don't even know how much
[02:40:40]  i want to get into this in stream but the the key things that i i wanted to emphasize in this article and i've talked about them before so i probably don't have
[02:40:48]  to convince anyone here on this is simply like there's a lot of power in decoupling um like the the component changes to the state changes this is the reason you
[02:41:02]  choose signals and not because of this this is how we go hey look this is different i'm not suggesting you do global state like this you're right this would be a mess
[02:41:11]  but no one's actually suggesting this is just illustrated to be like hey just like this console log here is illustrated to be like there's something different here you know in the
[02:41:20]  counter this only runs once and i i think um it's important to understand that like once you decouple this stuff so like you know changing the selected doesn't cause the
[02:41:33]  list to rerun you know or changing the item name doesn't cause the list to rerun that component boundaries just aren't something you're worried about anymore so this is reason
[02:41:43]  number one i'm telling you why you might be interested in signals you can put your whole app in one component or many components and get the same benefit you can break apart
[02:41:51]  components for your sake for organizational purposes it's like how you want to organize the app not because you get some isolate some part of the ui and the thing is if performance
[02:42:00]  was ever a concern here it's not going to be because of component boundaries one of the hardest things to do when developing is changing boundaries it's like really awkward once you like
[02:42:10]  this is why you know talk about early optimization you're like you know break it apart later like kind of like start learning stuff figure out what's going on and then like
[02:42:19]  when it gets to a good point and you know break it out if you start preemptively breaking stuff out and then you realize that the boundaries need to shift you have to
[02:42:28]  like go to a billion different points to kind of reconcile them fix that whereas if you just left it in one place you would have been better off this is a refactoring
[02:42:36]  lesson that we all learn over time and it's interesting to me because dan had actually like he didn't say in the component but this is his reason for not liking single
[02:42:44]  file components he's like i like kind of like hacking away in a single file and then like you know when it's time i pull this stuff out i forget where that tweet
[02:42:51]  was but i think this is a really powerful kind of mentality and i share it and in a sense signals let you do that about components as well right which might mean that's
[02:43:03]  why they've been a good choice for single file components because literally you can make your single file component as big or small as you want it doesn't impact it um but
[02:43:12]  i think that i mean that's not 100 true in all frameworks today because i mentioned reactivity does have an overhead depending on if you do more coarse grain updates and whatnot um
[02:43:24]  and like how you manage stuff like there is still impact but what i was mostly trying to say is like this is a dx benefit people often talk about this from oh because
[02:43:35]  you have good performance that's why you get these pinpoint updates but it's actually a huge dx unlock because you're not concerned with like oh like sure in react to me or
[02:43:49]  you know any video on library or whatever you can be not concerned with those boundaries but then when performance happens you suddenly become very concerned this is like i'm not this is just
[02:43:58]  not something i need to be concerned about at all i'm confident when i go and build my app i can break it up how i want to break it up okay point
[02:44:21]  number two separating dynamic from static and this is this is like the counterpoint to what um dan was emphasizing there right because he's he's saying like look we get a
[02:44:32]  single model it's straightforward it's like the immediate mode thinking then we just remove a whole bunch of things out of the equation we don't have to worry about you know it
[02:44:42] 's not it's a lot harder perhaps well in theory to like miss updates but i was like okay here's the opposite of take when you split things up intentionally you can
[02:44:56]  optimize for each case right we saw earlier the the conversation with jordan walk and stuff and andrew's things you know where andrew is like so right or whatever you know
[02:45:04]  they were talking about how creation is really expensive you know you got to manage those subscriptions but the funny thing is is reactive libraries basically like that hasn't been the case for several
[02:45:18]  years now because they were able to optimize the creation because it was split apart right like because they're like oh this is create versus update they like not only are the updates
[02:45:30]  fast but the creation could be faster too and i'm not going to say like vdom whatever like vdoms can be fast too i'm not like i'm not that
[02:45:37]  i'm just saying like it's not like a point where you're like oh just these can't be as good like it's it's like like it's just like
[02:45:45]  this is not what makes the difference here it's kind of like a few years ago when i first joined twitter everyone was like oh string templates are better for this or what whatever
[02:45:54]  custom dsl and the people take offense to string templates whatever or better for this and jsx is better for this and i was like no no not really i think you guys
[02:46:02]  are focusing on the wrong parts right like jsx is still very analyzable inferno has proven this right um and obviously solid later proved it but like the what the
[02:46:14]  point i'm getting at here is that uh what point am i getting at here so the problem when you kind of are tired and going on these rants this separation gives
[02:46:26]  us some incredible powers because we're aware of it right obviously like right like because the web is aware of it the web knows that creating elements is expensive so they've given us
[02:46:39]  methods that make it quicker to create elements in bulk vdoms don't take advantage of it because their update process and their create process is basically the same right in most you
[02:46:51]  know you don't need need a compiler for this but generally speaking if you use a compiler it's very easy to look at the creation logic and optimize it because you can
[02:47:00]  see the structure of the app um and because you don't have to worry about updates you can like you can just go all in on it so like and and the thing is
[02:47:15]  it doesn't these benefits don't stop with the browser so to speak like it's not just like you know everyone's like oh so update performance single page app navigation performance
[02:47:24]  or whatever like it's i mean give quick a quick shout out here we can do we're not nearly sophisticated but we have ability to kind of do bits of this as well
[02:47:36]  but um you could just if you have some reactive stuff and you know that the static part never makes it into the browser i mean i think i probably can show this right
[02:47:45]  now in using solid as well look it's funny what's it look uh search clear okay i'm gonna shoot okay i could probably show this in solid um if if you know
[02:47:59]  like here's a counter right click click click click click click click click click click click right if it's only the count text node that updates here right let me update my stuff
[02:48:09]  here i'm going to show you what i'm talking about right and if you know generally speaking i'm going to compile some stuff and i think i've shown this on
[02:48:20]  stream before but like the top of your component stays the same all we do is change this into a clone template call then we add a click handler and then we like create an
[02:48:29]  effect around the count that's what this is happening one two three there's the compiled code and this template is just a button that we clone but the thing is i mean
[02:48:37]  this is going to be very trivial here but for if we do a client side with hydration call it's a little bit more complicated because we have to either clone the template or
[02:48:46]  find it in the dom and then we do the same stuff and run any like hydration events but it's basically the same code i'm just gonna like this is just a compiler
[02:48:55]  flag that could be automated in the future i can if i said that this template is server only see see this template here did you do up here it just goes away and
[02:49:07]  what my point is is like if you know that you're never going to render this thing then you only need the reactivity to actually update the text the separation like basically makes
[02:49:18]  as i showed before not only rendering and hydration basically the same process but it means that if you know that something will only ever hydrate and not re-render you can
[02:49:27]  just ship skip sending the static code um so to speak and maybe not the most illustrated version but quick actually automates this that's like one of the one of the things that
[02:49:40]  they they automate um and they talk about that where if you if kind of they're more kind of preact style where the signal has to get down to the element directly like
[02:49:50]  if you do transformation stuff it doesn't work but if you get the quick signal down to the dom they can be like yeah we don't need to send the rest of
[02:49:57]  the component and i think i think this is like attacking this whole problem it's kind of the same motivation for stuff like islands and reactor components attacking this problem of like hydration and
[02:50:08]  and like this kind of performance is a really real issue and i link a alex russell um article um and reactivity is basically the baseline like you need to not maybe
[02:50:24]  need there might be other solutions but like make it a lot more possible to solve these problems because it's no longer the component you've broken it down to what changes it
[02:50:32] 's like the traceability of the debug is happening here it's like it's the traceability of what changes now we know that we don't need all the javascript
[02:50:40]  now we know we can like what to optimize for so my position here again we talk performance but performance of impacts dx overall my position is the separation leads to a certain amount
[02:50:54]  of transparency it makes it easier to explain and reason about what is actually going on while less simple than the ideal it makes this it makes escape hatches which are important part of
[02:51:03]  any system more coherent and maybe this is a silly observation from my perspective but i think use effects problem isn't that there's an isn't a need for effects or whatever
[02:51:14]  it's just that like use effect is an escape hatch and that's the point at which you realize the react model isn't what you thought it was and as long as
[02:51:29]  we have those escape hatches and the delta gets further between the abstraction and the underlying model i think there's a perceived complexity there i could be wrong maybe we can patch those
[02:51:42]  escape hatches they don't need to exist but i think that's the crux of the dx consideration there it's like how much are you fighting the fact that the dom
[02:51:52]  is the underlying model it's it's it's it's it's it's an interesting thought experiment so again this is this is i this is this is this is kind
[02:52:06]  of like an interesting place where you can you can definitely see that there's trade-offs both ways and then my third point so i have three points here unified universalizing the
[02:52:19]  language ui we already talked about it state drive state effects state memo effect ref ref computed effect signal memo effect observable computed auto run um observable pure computed computed let
[02:52:43]  dollar sign assignment dollar sign this language is literally everywhere with angular actually coming on signals every framework has pretty much has this language except maybe like lit or something i don't know
[02:52:59]  maybe lit does i know they have some kind of reactivity thing but i think i i think like we're we're seeing the convergence of language even if the implementations aren
[02:53:07] 't the same and obviously there's differences because like obviously for like react you have additional hooks up which kind of like um you can talk about performance and stuff you know you talk
[02:53:22]  about memorization and but when forget comes out those will go away so i think i think we can kind of like dan explains how those kind of work um and you can
[02:53:29]  it's good for understanding react mental model but kind of tertiary to the discussion here it's like we're converging on this universal language the the interesting part to me is
[02:53:40]  you know and we already had this discussion on this thread i'm just saying like how important is this versus this and which ultimately i think comes down the purpose of code should
[02:53:52]  we optimize making it easier to write or easier to read and i think i think that maybe isn't that profound of a question i think for a long time the answer would have
[02:54:04]  been easier to read right you don't write code for yourselves it's you know you write code for the computer but you also write code for other humans you work on a team
[02:54:13]  so like presumably maybe not maybe you're by yourself but easier to read probably has higher value but i think this is funny and it's going to get to the the end of
[02:54:26]  the article but i think i think there is a question that easier to write might actually have some benefits um right so like okay i i talked about trade-offs we talked
[02:54:45]  about these all before but i think the key one here is like javascript is not a reactive language it's not like a data flow language so it's possible to lose
[02:54:53]  reactivity it's signals have like one rule like which is like you know don't don't do like where they where they read are read matters but the problem is that
[02:55:04]  one rule gets manifest in a whole bunch of different ways so it's like it's not like there's like multiple different rules it's just like it's just the fact that
[02:55:13]  like this one fact that where you access the data matters is the single biggest trade-off and i can understand if people like that doesn't align with your mental model like
[02:55:24]  that's fine but like don't don't don't use this stuff you know it's good that we have alternatives um but like i think that's mostly the the big one
[02:55:36]  and it's a it is a big one don't get me wrong i'm just saying i talked a bit about disposal but we already talked about that you know sjs did
[02:55:43]  an amazing job there um talk about these uncontrollable graphs i i i just i don't see it um especially with the way things have updated over the last few years
[02:55:54]  so like really this is the crux of it like are should we be aware that the language has a reactive primitive or not should we and how do we deal with the fact
[02:56:05]  that javascript does not that that's the big trade-off uh quoted evan again not important but what yeah i i emphasize a bit at the end here that signals
[02:56:17]  don't require a compiler but you could use a compiler but i think what i was getting about about the read write i think this might be the last big point i want
[02:56:25]  to i want to talk about here is dominic annaway um creative inferno has been working on new a new um a new javascript framework and he kind of
[02:56:34]  shared a bit about it a couple weeks ago and he's like it has it's fully compiler driven there's no virtual dom no component re-rendering their signals but
[02:56:44]  they're never exposed essentially he kind of built something the compiler like you know that i was kind of pointing to when i was like theorizing you know he basically was like can
[02:56:54]  i saw someone i think it was maple wanted to know what um his dominic's uh framework looked like well guess what it looks like react like in the same way that my
[02:57:04]  reactive script example looked like react like you you you you generally just write code you know that like that kind of you know top down whatever and he compiles it into something
[02:57:20]  that kind of looks like solid right but he doesn't expose that to the end user that's that's basically it he's he he's he would resent me saying this because
[02:57:30]  he's done incredible work and he's taken it way further than anything that i talked about in the article but he's he sort of is completing like the mission you know
[02:57:37]  solving the reactive script problem right like like he's he's he's and he's quite successfully my understanding talking to different people he's showing others that using signals under the hood
[02:57:53]  is a very viable mechanical way of achieving stuff like react forget i i have a feeling the part of the reason why the you know like facebook uh or meta people you know
[02:58:04]  talking about react forget and the reactivity stuff are aligning like i think they're coming at the same same places where he's coming from so i think there's something here
[02:58:12]  um but what he was getting at and this is what the right person's read he's he's like he's like this whole debate about signals and react or whatever it doesn
[02:58:20] 't matter it's the compiler that matters right right he's like this the the he's like this is like a semantic syntax change thing he's like in his head already
[02:58:32]  solid's gonna basically be like whatever he's building reacts building forget he's like these are all just the same thing like dominic's already like three steps ahead or whatever right
[02:58:42]  um but he's like now imagine a ui compiler that leverages ai to self-improve not only itself in terms of output but also recognizing the source code that might
[02:58:52]  be the source of bugs critical analysis the error stacks this is what next generation ui frameworks are going to be about not some argument about which reactivity is what reactivity
[02:59:00]  is and how it's used yeah yeah basically like just just drop it and and thank you dom for that because i i think he i think he's he's right because the
[02:59:11]  cool thing about the language of reactivity rather than the implementation of reactivity like the is that it is analyzable and as we get better at analyzing it and like
[02:59:21]  there's so much more to be done like this is one facet of that another a facet of ai is the stuff that quick's been talking about but looking at page
[02:59:28]  loads to figure out what part of the javascript needs to be loaded basically if we build our libraries and our frameworks around primitives around building blocks that let us you
[02:59:41]  know estimate what the best possible solution is in the future in theory computer assisted tools could finish that story that's that's that is why signals are interesting because we've taken
[02:59:57]  we've taken the fundamental pieces that we need to be able to represent this stuff it's kind of like what i'm talking about evan you being able to like just with
[03:00:10]  view basically just pick and choose what he wanted and use the same data representation to do it it's this is why it is compelling whether or not we end up talking about
[03:00:23]  the syntax of it and like whether this should be a known thing from the language standpoint like like this is a react variable or we should like pretend that all variables are reactive that
[03:00:31] 's that's that's the distinction here it's honestly you know the thing is it's a lot harder to pretend all react to variables are are all variables are reactive because of
[03:00:43]  the class the same problem with uh ui equals a function of state right it that's less optimal right you you don't you you kind of work towards like this ideal
[03:00:55]  like it's hard to say where that lands but regardless recognizing the right building blocks is something of value whoo all right right and prime asked me when i when i when
[03:01:21]  i thought wasm would come into play because he was really stoked about wasm and i told him like there's gonna be like the current stage and then a web where
[03:01:34]  we are and then yeah i'm like there's gonna be the next stage and then there's gonna be the next stage and then it's gonna be wasm we've got
[03:01:40]  like three more like two more hops to get to wasm i i i this this this is this is this i think this is very much in line with that dominic's
[03:01:52]  hop is not the next hop but the hop after and the next hop is already happening right now it's the stuff that you're seeing happening with um quick and server components
[03:02:04]  and islands runner and all of this like just the breaking like it's this reactivity stuff we're talking about right now actually i can even put solid as part of this right
[03:02:14]  um like that's then there's doms and then there's whatever you're doing greg you're one two three that's that's that's my view obviously it's
[03:02:22]  really hard to project stuff that far into the future but yeah that that that that's that's sort of like that's that's like the simplistic one two three people
[03:02:51]  hate on the front end for too many frames except that's just how the front-hand community iterates you wouldn't go to a mathematician and tell them to stop writing proof
[03:02:57] s yeah yeah and let's be fair like there isn't that much churn i mean everyone's still using react so like yeah you know like i think i i think
[03:03:20]  this is really the like it's so funny because when you look to the future it's always here already it just takes it's it's about finding the right timing and the
[03:03:31]  right placement and the right product and all that kind of stuff and um there's so many factors that play into it that is always like that's why it's hard to
[03:03:41]  predict you can see the general trend but you can't like tell if something's too early and misses the mark so talking about this stuff is always completely speculative but the one
[03:03:54]  true thing is that these things will keep on coming up so i i i think i think that that like you know expect change right i mean this is that was the whole point
[03:04:07]  of my last like my article about predicting for whatever but um anyways i should get back to make sure i don't show any like hidden tweets but yeah this this article about
[03:04:19]  heading into 2023 it's just it's i i think last year was an incredible year for proving out technology we saw stuff like leptos you know like show capability of was
[03:04:29] m we didn't see before we saw quick um we saw server components and you know in a few different versions um you know you know stuff to be excited about right we
[03:04:41]  saw server functions and compiled rpcs we see a lot of really cool technologies they all they all came out last year um kind of like the end like part of this arc
[03:04:53]  that kind of started around 2020 i feel like and now it's like how do we actually integrate them how do we actually like get the dx to the place but the the stuff
[03:05:04] 's all sitting here it's just like putting together the pieces okay all right where was i okay so let's talk about some stuff here yeah i'm gonna look at chat
[03:05:14]  and see if i can catch up on it what are your thoughts about people not liking things like four so i just got here as a missionary oh yeah i mean this one's
[03:05:21]  always a little bit funny to me because it's like but i think it's a misunderstanding and i actually touched on it in my article like the tiniest bit but
[03:05:33]  like four is just a special map function is a runtime process the compiler is not doing anything special you could have written your own four you can use map you can do whatever the
[03:05:41]  hell you want so like four is just javascript see i said it four is just javascript see see how many people that's what people take offense to when i
[03:05:50]  say four is just javascript ups sets people i mean there's an interesting question if four is just javascript right this is this is this is this is the
[03:06:00]  thing because a lot of people disagree with me that four is just javascript um my question here and i'm going to pull this one down is is this if statement
[03:06:18]  just javascript right and this this this is not react this is the compiler like i right right like yeah in in normal react but i'm talking about when we move to
[03:06:41]  the point that the compiler is actually generating a solid show component basically under the hood for this is this just javascript like this is such a funny debate to me like
[03:06:52]  it's i know people like will like fight on this hill like it's it's like it's yeah four is literally like the component solid is literally basically literally a function
[03:07:07]  call so this four compiles to call the function named four like it it it's it's like the the funny thing is like in react if you wanted to optimize like i
[03:07:18]  think adobe has actually made four components for optimization purposes for memorizing the they didn't want to create all the vdom nodes because they had really large stupidly large uh
[03:07:29]  components uh like the thing is this is just a map it's it's it's kind of like you know when you write a layout component or something or paginated thing
[03:07:38]  or like suspense or air boundaries which are conditionals like the this is just a natural composition pattern right in a sense solid starts at the composable primitive instead of starting with the
[03:07:49]  non-composable and then moving it up to it but like if you have a if you have some kind of like conditional layout component or something with a render prop or
[03:07:57]  something like that's that's all that's all show is it's just like it's it's basically just a little wrapper you know so i i i feel like people
[03:08:10]  feel like four is too declarative it makes sense yeah like maybe but like it's going to be funny because like if like a compiler like this supports like for loop as language
[03:08:24]  syntax like four doesn't return stuff like like map statements do like i'm just i'm just really really like maybe they'll do it like do expressions or whatever but i
[03:08:37] 'm just like i'm really curious and this is part of a perception thing if people see a compiler you know see this and go yeah this is just javascript because they
[03:08:45] 're doing this right now with svelte to a certain degree for charis is always like no no svelte it's it's svelte weighing it's
[03:08:51]  not like or svelte script it's not it's not just javascript but you people are just like yeah i love svelte it's just javascript
[03:08:58]  and you're like i'm like not not really no right so i think this is one of the most funny pieces because if the perception continues on that like svelte or
[03:09:09]  react forget is just javascript when it's kind of like the furthest thing from it um then like like even debating about four is kind of awkward because then you
[03:09:19] 're like okay i guess i should maybe follow suit because somehow like a compiler generating completely different code and moving your code around is more just javascript than calling a function um
[03:09:30]  yeah it's mind-boggling but i also see a reality where people believe that so yeah i i yeah most of this is always this is why i don't
[03:09:57]  go to reddit because if i go to reddit you start you you just can't between like then you go in the reddit comment section people are going to say
[03:10:10]  stuff which is completely not true like just like like oh yeah solid has no story for universal renderers it's like it does but and they'll people argue it like in multiple
[03:10:21]  threads about how that's true and you're like no i created solid you can do this look here's an example and they'll keep on arguing you so like yeah i
[03:10:31]  it's what i'm getting at is like that kind of response youtube comments are pretty close actually surprisingly dev2 is actually much more thoughtful but like reddit and youtube comments are
[03:10:42]  are kind of a and hacker news are kind of approaching each other um reddit's probably the worst is like the if i try and debate the fourth thing i i i
[03:10:54]  will be there for a year because you can you can you can literally like point that out to someone and be like look look look and they'll be like down vote and then
[03:11:03]  everyone's like down vote down please it's like yeah uh it's funny yeah yeah exactly yeah yeah other common things i'm sure if we look at reddit people will be
[03:11:15]  like man yeah i i like they'll they'll look the response to my article which is literally like hey this is how we solve the problem will be people going like yeah
[03:11:27]  uh yeah i don't really like solid because it leads to big uh spaghetti code and uh two-way binding and mutability and stuff and and you like you know you know
[03:11:39]  like and you're just like i literally just wrote an article that said that that's not the case and like showed how that's not the case but now like are you
[03:11:48]  with you for like 10 comments like yeah no i everyone knows that reddit is basically a and hacker news is basically a waste of time i i don't i have to assume
[03:12:01]  people just like trolling there it's not that they're like just innately that stupid like it's just like it's just like it's it's part of the
[03:12:07]  culture yeah well the reason that we connect stuff to render roots is to handle the automatic disposal right because otherwise you'd have to dispose the effects all yourself manually um there's i
[03:12:24]  talked about this a bit on the trade-offs of the fact that disposal is a thing so it's it's best to keep the effects together otherwise um yeah i mean
[03:12:36]  you could have leaky programs global it doesn't matter because you're probably your app will go away but if people start like creating effects in like event handlers and stuff that
[03:12:46] 's why we give the warning it's it's something you got to be aware of but also like it's it's a restriction that makes sense and it's not any more
[03:12:54]  restrictive of saying like your state has to belong in a component tree that's the thing like just because you can pull stuff out you know like the the local global scope doesn
[03:13:02] 't mean that that's actually a good idea that's the thing they don't even read the articles yeah no that's probably it yeah we'll see how it goes i
[03:13:33]  think i think the difference here is like react's got like majority market share that's where all the misunderstanding is and then literally like i don't know if this is going to
[03:13:45]  be a solid win or who else win like everybody's doing a bit of what sol is doing to varying degrees and they and they have to the varying comforts right now
[03:13:54]  except for react so like yeah i don't i don't know it might be interesting we might we might be in a good place where people think we have a good solution but
[03:14:02]  there's a lot of choices out there it's funny like maybe if this was earlier on in the life cycle and it would have been more of a thing but like it's
[03:14:09]  almost like most of the ecosystem that isn't react has kind of come around to this and but react is still like the major player so it's like you know it's
[03:14:24]  not quite the same as tailwind hey dev welcome back turns out most frameworks are pretty good yeah what do you know people working on stuff and maintaining it for years and years
[03:14:44]  like get something somewhere yeah no what do you know yeah this is all i've been trying to to kind of put out there like over the years because like i think i think
[03:14:57]  one of the harshest i've ever been on people is when they tell me like it just and this is a little biased it's just i when i first started putting
[03:15:04]  solid out there i got like a lot of hatred about like how i could make the world suffer by introducing a new framework or you know a lot of like you the truth of
[03:15:14]  the matter is when you create a framework and put it out there and you know there's similarities and different things and the like the thing is because everyone could make their own framework
[03:15:23]  and change one little feature and then make it say like they needed to make a new framework and this happened a lot like web components made it so like everyone's like everyone
[03:15:32] 's like let's make our own framework and um the thing is like i get it so but the truth of the matter is like there's a natural phenomenon which stops those frameworks
[03:15:43]  from bubbling to the top like people kind of go oh like if they don't like that one thing and it was that easy to make a framework well then they'll make their
[03:15:52]  own framework you know what i mean like it's only when you get to a point that something substantial or important happens that these things actually get to a certain degree it was
[03:16:00]  just really funny right because like as you go through that process you know the truth of matter is most critics aren't going to actually look at what you're doing they're just
[03:16:11]  going to they're going to do a quick glance and go this doesn't offer anything new like my favorite ones for solid have always been where people are like yeah this is just
[03:16:19]  an evolution on react it's not revolutionary enough um this this won't really change things and it's like you know it doesn't do enough it's not 10x better
[03:16:27]  or whatever and it's just like sure like what does 10x better even mean and i i think i think people are actually starting to understand that the and this is why i
[03:16:40]  always share random articles when maybe i'm not very clear is the actual architectural impact and mechanical pieces that make solid and i guess different than reactor actually significance actually fairly significant um
[03:16:56]  to the point that like we're seeing a shift here so like i don't know i i leave that up to the historians you know like i'm not going to try and
[03:17:07]  guess what 10x better means but i mean it's a really good line to keep on saying when you want to like just like be like i don't want to look at
[03:17:14]  this right now which is perfectly valid just just do that next time someone's like yeah check out this library and you're like no the one i need the library the next
[03:17:22]  library look at to be 10x better than the one i just looked at there like that's a really easy way to end the conversation yeah i mean it's fine that
[03:17:47]  the he he's playing at it sarcastically right like i mean this is kind of the expectation i i i didn't find it very funny from a lot of um
[03:17:56]  influencers early on at this point you get past that at a certain point you're just like yeah you know whatever i it was more that like people who actually believe it but it
[03:18:06] 's i mean it's fine it's like enough is enough i get it you but the you just you just turn it off just dial down the headphones just ignore it you don
[03:18:16] 't you don't have to you know like it's good that work is happening you don't have to be so critical of it it's fine i think the tone of
[03:18:24]  this has changed so much people people are starting to see the need for innovation so it's so funny in the last two years there's been way less backlash like god 2018 2019
[03:18:35]  period wow like the seethingness like people got like angry like really angry you know it's like kind of funny almost you're just like wow i didn't realize
[03:18:48]  i could make someone so angry by you know spending my personal time trying to make something that could you know be valuable for someone it's like no yeah no dom's position
[03:19:04]  is awesome um tricky part is like it'd be awesome like we could work together and do like something it's tricky this is the thing that i've been navigating a lot recently
[03:19:15]  with like bling and and astro and stuff it's like there there is there is gonna be some converging and some team ups and there's gonna be some people
[03:19:24]  working on almost the same stuff but like independently because you know a few little decision point things and this is all okay not it's like there's two sides of the argument on
[03:19:34]  one side there's this like fatigue blah blah blah i think but on the other hand it's like it you know there's like you go too far the other way right like
[03:19:43]  sometimes the web component stuff feels like that where it's like oh no everything should be web components it's like maybe not you know like you can be just as like restrictive
[03:19:53]  on the other side of things like i i guess i get that it's well-meaning but like it's good that there's different choices and different options people still
[03:20:14]  attack you one yeah definitely the new tool that no one well yeah i mean there's a long thing and it's always the really experienced css people that tend like like the
[03:20:27]  old school guys who tend to not like tailwind because css meant something very different for them and css in itself is very very powerful if you like css the
[03:20:36]  problem is like i'm not sure everybody likes css right on the other hand tailwind keeps on going and at a certain point you're just kind of like they they kind
[03:20:50]  of won i mean maybe that's react story maybe like maybe that's what's happened with react i to a certain degree i think that is what happened with react so reading
[03:21:00]  up on the comments yeah i yeah i the performance is a fickle thing you you sell too hard on performance and the next thing that comes out faster is going to threaten
[03:21:19]  that a little bit you know i i hope that people who did come for performance do notice that performance has dx inputs not or like effects not just ux that's what i
[03:21:31] 've been trying to my last article was really trying to emphasize is because you can own and i actually wrote an article to that effect a few years ago of comparing solid i called
[03:21:40]  it the tesla of of uh javascript frameworks which is pretty bold i'd say but um what i was saying is that like when you talk about performance in terms
[03:21:51]  of efficiency you can always reverse the equation a little bit right like like if you look at like the value of electric cars being you know saving on gas and being more efficient in
[03:22:05]  a certain way then it's logical that performance could also be like the two sides of the same coin right being efficient can actually be a developer experience benefit too and i don
[03:22:17] 't just mean like build times i mean literally because performance stops being the focal point depending how things are architectured you can it actually gives you more room to work with like if
[03:22:28]  your library is small you're not you're not penny counting on every single you know live other third-party library you can use you know it you that's like an
[03:22:37]  obvious one but you can you can extend that really to to anything it just gives you more room to work with yeah i mean at this point i'm actually really glad that react
[03:22:54]  has taken on this thing they used to say that they weren't a reactive framework they now say that they have their own reactivity and i think this is the way healthier
[03:23:03]  thing this i wrote an article about this also of course i read an article about a lot of things but it was called like is react truly reactive and the funny thing is like
[03:23:09]  swix had written something a couple years earlier that said like react isn't really reactive because the core team guys had basically told them that and he kind of explained the difference with
[03:23:16]  push and all that kind of stuff but then i like i wrote my article and i was just like this is such a stupid distinction when when like are svelte's reactive
[03:23:24]  yet react isn't it's like kind of the same thing you know like like i explained earlier i mean there's differences but like my point is like the distinctions on
[03:23:32]  the reactivity thing is like everything that we're all reactive i i feel partially that the change in positioning on react to admit this is showing and it's not because of this
[03:23:43]  recent signal push they're repositioning themselves possibly because the way svelte did to kind of like tie into that same kind of idea of what the idea of react
[03:23:53] ivity imbues in people where for the longest time they actually were strictly like we're not like purely reactive or we're not like reactive like that because that was the differenti
[03:24:03] ating thing there's this conversation i i pulled it up on the thread there's some tc39 people talking about a dom try to propose something it is hit it did
[03:24:19]  hit a bit of a wall i don't think i'll find it right now but uh i remember like there's a lot of people who are like javascript's not
[03:24:26]  a control flow language but i i'm there's enough people to still push at it that i wouldn't be surprised if a proposal shows up it was just really funny i remember
[03:24:33]  brendan ike himself came up came responded to dom and was basically like no and when i talked about this in a previous stream but when brendan ike comes
[03:24:41]  and says no you're like okay you know like that's that's pretty big uh i need the nissan leaf i don't know i mean or maybe that's
[03:25:06]  svelte no i don't know like it depends what you mean by the nissan leaf because like neat and yeah but i think you're thinking you're talking
[03:25:16]  about from a performance standpoint but if you look at like the nissan leaf it's it's actually like efficient and small like it yeah i don't know if there's
[03:25:26]  like that's that would be like building for size rather than speed but on the the same vector yeah anyway sorry just trying to think yeah just catching up sorry react wasn't
[03:25:46]  reactive because they didn't want to be associated with rxjs yeah same reason why i didn't go with observable um it's funny because i didn't know like i
[03:25:58]  knew about i kind of knew about elm but i was just like yeah you know but it was kind of to the side and i was using sjs and so i
[03:26:04]  knew about signal but i was like this wasn't a common term and it was way more common to call them observables but rxjs like pushed me from that i was
[03:26:11]  like no not doing observable metaframents eventually start working on more background features and more common things background backgrounds um kind of maybe not i mean well here's the
[03:26:31]  thing i don't know if you saw netlify and versell both support cron jobs you know so they're setting stuff up to be serverless so what what you
[03:26:40] 're going to see is i think you're see the infrastructure allow for the decoupling of these kind of background things like into services that are easily consumed from these j
[03:26:53] avascript meta frameworks i think that's a better way of putting it like the thing is if you take solid start or svelte kit or remix or whatever we're kind
[03:27:04]  of like an express server like we handle request responses we have a middleware layer if people made stuff on top of the middleware layer um we could have a lot of
[03:27:14]  these things it's kind of you know what i mean like i guess most middleware is around handling the like the web server side and you're talking about other background processes but
[03:27:22]  like yeah i mean maybe if it makes sense i there's a lot of interesting work being done in in closing that gap on a service side like stuff like convex which wants reactive
[03:27:35]  databases and stuff like i i know like we have to be careful with some of these things like these aren't all good ideas you know like like putting graphql um
[03:27:50]  between your database and your web server that's not like not where it goes but like i think that um like i i i do think it's going to be more on
[03:28:04]  the infrastructure plays like the vercells and the netl5s and the cloud flares of the world now now now now now it's all just car comparisons for
[03:28:16]  his f-150 or react is the ford f-150 cell phone with you guys are just cracking me up yeah this is something i've been thinking about recently um i
[03:28:33] 've i i but only in the same way you know how we were talking about view and view vapor and what that migration is like i feel like we could play that game
[03:28:44]  with react and that's that's what i've been working on where it's like you have a react app you put solid components in it right i've i've made demos
[03:28:54]  of this i'd like to package up one of the challenges there is actually bundling you need a platform where you can do that and i know this doesn't work quite
[03:29:04]  as i hope today but maybe astro could be that platform what if you could build really nice i realize like next is somewhere else and that's where people really want to be
[03:29:14]  able to do it but beat you know if we can build some kind of common base i think there'd be a really interesting story about being able to do that like obviously event
[03:29:25]  like it is definitely possible to do it and figure out how to get like maybe turbo pack or whatever to do these things but um i think we're gonna see a lot
[03:29:34]  of really cool stuff coming out of the work that tanner with tan stack myself and fred are doing in terms of tying together you have this agnostic platform a place
[03:29:45]  where meta frameworks like even uh i saw brandon playing with some astro stuff with analog or whatever uh i think and some like the bling stuff we could we could see
[03:29:53]  a bunch of the frameworks come together on kind of a common deployment layer thing so like like i was talking about explaining how we're all express servers what if we were all
[03:30:04]  the same express server like if we if then it starts getting kind of interesting um to be able to like tell these interrupt stories because like maybe you have your content site in
[03:30:16]  astro and you use some react components with it and then you migrate your next app or react app into tan stack start which is a full react meta framework you're doing that
[03:30:29]  and it's in the same you know same setup with your astro project all using astro core same things can use your react components in your content site and then at a
[03:30:38]  certain point you're like i'm going to try some of these pages in solid start because i'm interested in that and then you know maybe you use some solid components in
[03:30:45]  your tan stack start app um because astro can support both compilations and then who knows like i i think i think i think there's there might be a really cool
[03:30:55]  story here you know um to you know take kind of that vision um and and take it a lot further i don't know something more interesting yeah i'm so far behind
[03:31:17]  you guys on stream not four minutes behind okay i'm not doing too bad oh man sorry i haven't like even moved this in front of me this is a great jace
[03:31:26]  felt quote but yeah he's the one who triggered me on this if you know jay phelps uh worked on um rxjs any big reactivity fan anyway
[03:31:35]  um yeah there's a there's a lot of potential here what's interesting to me is if we can figure out the right division of work kind of like beat was really good
[03:31:48]  at figuring out there's so much potential for everyone to win yep yep i mean this is react is king what what else are we gonna do call it the metaverse now
[03:32:12]  we we're we're not calling it the metaverse i know that's a joke but for the reactivity stuff it wasn't actually proposal like literally let let's should
[03:32:29]  we see if we can find it let's let's just like search on dominic's um true adm profile and and go down he was literally just on twitter being like
[03:32:41]  hey wouldn't this be cool if we could get this in jsx wouldn't this be cool if we could get a reacted primitive and then there's just like no i probably
[03:32:49]  saved it at some point but i don't trust my bookmarks one thing i wish jsx had okay so he's talking about putting executable blocks inside jsx all this
[03:33:00]  stuff takes me back to marco like we we talked about this kind of stuff the the reason this is nice is because like in something solid you literally could nest like stuff
[03:33:10]  in control flows and i mean you could yeah it's just i always find my break my control flows yeah okay that's not the one here we go bam i know it's
[03:33:22]  highly unlikely but i wish there was a reactive form of binding in javascript as a primitive like let bound x equals one and then let bound y x equals one x
[03:33:30]  equals two cost log y you know basically he's not even talking about effects yet he's just talking about like can we have reactive state and uh derived state i looked at this
[03:33:41]  example and i was like actually i'm not sure bounds makes sense here i think there's like some language things but i got what he was getting at right yeah i mean
[03:33:48]  the this this was basically the destiny operator right and yeah it's far lower than the previous principles around observables he's like i mean he wanted to simplify it a bit right
[03:34:05]  it wasn't too popular i guess it's still interested in controversial points and i i obviously said like hey you know there's stuff but what i say doesn't actually matter
[03:34:12]  svelte dollar sign and he's like yep basically yeah which again svelte dollar sends kind of the destiny offer operator if you understand it you look at mob x he
[03:34:21] 's like i know mob x but he wants it in the language yeah see this is the fun thing when you propose stuff people yeah yeah he's like it's not that different
[03:34:32]  except making a function but there's a there's a typescript different here too i think like luckily understand that it's a variable with a value that's i would die
[03:34:41]  for that i wish i could say like hey typescript this function is like a is like a variable like if we could just get that so much stuff yeah have you tried s
[03:34:50] velte yeah it's so funny he's literally he lit like people just keep on telling him to try svelte and it's like no here we go brend
[03:35:05] an ike welcome to the stage js is not a data flow language but you can use getter and setters to do this on an object container i get that but there
[03:35:14] 's actually far more involved when you treat this as a first class mining for one it handles the age-old problem of order dependencies inside and out which are generally problematic or incorrectly
[03:35:23]  handled yes yes yes yes yes yes tc39 might take this up but i doubt it'll go far quickly would need a champion who can do it he did tag some
[03:35:34]  people um that's gonna know to be honest i've been aware of previous pushback around reactivity at t39 i think there's still something worth pursuing yeah anyways so i
[03:35:47]  the be fair brendan didn't completely say no he but he was just basically like kind of like no yeah the the i think that's the biggest thing is if
[03:36:00]  they brought into the language now they're responsible for like the or like browser vendors are responsible for like the debugging experience right like but i mean it's kind of fine remember as
[03:36:12] ync await that took took a while to actually get good debugging you know where you have that like a continuation of context so long you know initially async await came out and
[03:36:22]  you basically were kind of on your own um oh oh here's another one too uh let me see if i can grab that one that looks like it's from alexis
[03:36:42]  mm-hmm also thank you code monument um gifted tier one sub thank you sorry just catching up on that that was probably like hours ago um let me see if i can
[03:37:00]  see this one i think this was the work that joe pia was working on he also solid community member um yeah i mean this is the problem we bike shed on
[03:37:14]  the stuff like all day long this looks like the labels um proposal this is this is this is why i enjoyed writing that svelte script or sorry reactive script article because i
[03:37:25]  actually think that there's a a finite number of categories of solutions that you can do to solve it here like um there isn't actually that many options so that we probably
[03:37:39]  could list them all and compare them and talk about them it's just it's interesting to me like each time you see the different things like yeah anyway i think types are probably
[03:37:51]  the most interesting i guess a keyword would kind of accomplish that but it's interesting when you start talking about composition what that means like if you have a function that returns something
[03:38:01]  reactive and you put this here does that mean that the whole function invocation is tracked or does that mean it returns a reactive variable you almost need a built into the language like
[03:38:12]  the type system to actually know that this function returns a reactive variable um sorry i'm probably getting like a little bit too all right yeah yeah and the thing is there's
[03:38:28]  been proposals before multiple times tc39 has a proposal for rx style observables there's a proposal for object.observe that actually got pretty far before it got canned
[03:38:41]  um i promise whatever gets added soon yeah this is kind of the funny part about this and the standard stuff it's usually because you have to compromise and like weigh everything out
[03:38:53]  that like in the end like sometimes the ergonomics don't matter so you're going to wrap over it anyways but like usually it's like a lot of the bike shedding is
[03:39:02]  about like api and tc39 doesn't care about your developer ergonomics as much as much as like being correct which is a good thing but it's just it
[03:39:13] 's interesting because like when it does happen people might would be like like i don't like how it looks or something you know like something really silly yeah it's standards are
[03:39:31]  hard i'm not i'm not making light of that uh but it's also i mean i would say that too the javascript framework people kind of just largely just go
[03:39:40]  yeah you know if you build something useful or we'll give our feedback with them like we're not going to stop us from building what we're doing but this is where a
[03:39:47]  lot of that tension comes in because they kind of like go off on their own and people like why aren't you adhering to the standards blah blah blah and it's
[03:39:52]  like there's there could be a lot of answers to that all right so i have caught up on twitch chat now and youtube chat so we're actually doing okay you guys
[03:40:15]  have started to slow down i i i thought i would never catch up yeah i mean yeah ah you know i we're at three hours and 40 minutes on a stream that basically
[03:40:34]  had no content before i started and i just spoke off the top of my head i think we're like i could i could finish up soon here honestly um i've covered
[03:40:42]  what i wanted to today i said today would be a shorter stream um yeah i i mean if i'm not going to get many more questions here and i think we're kind
[03:40:52]  of winding down um i unless there's like something that i missed that i think someone wanted me to look at a different reactive library um maybe maybe we can do that for a
[03:41:01]  minute yeah what was it what was what was the reactive library i i think someone people kept on telling me about something like signia or something signia excuse me yeah t
[03:41:24] ldrawsignia signals library for typescript there you go check the docs i love how they're now being branded as signals libraries this is this is awesome framework ag
[03:41:37] nostic okay so this is a state library so perspective wise what we're comparing it to here is mob x rather than to like or preact signals independent like rather into like
[03:41:54]  what solid's doing we're this is a state library um okay what are signals what are signals the value change of time trigger side effects and the furniture the funny thing is
[03:42:07]  i think well i think a lot of things are going to be called signals these days that that you know i mean this sounds like my rhetoric yeah okay so we're in
[03:42:21]  agreement here drive state exclusively okay that's good a lot of my biggest concern here on the stuff is i think some libraries are going to skip over this and it's the most
[03:42:30]  important part like it like if you just have state and you have effects and then you use effects to write back to other state you're back in knockout zone again you're
[03:42:41]  not actually have the signals like if if your library doesn't have a computed or a memo or something you aren't really like you're very much in danger of um like
[03:42:53]  you could you could do stuff with it and like get the fine-grained updates but you're very much in danger of like losing the guarantees maybe even 10 oh you mean
[03:43:08]  10 years not 10 libraries i thought you were making fun of the fact okay i hope so but i mean it's hard to say i i get in some gray zones when
[03:43:21]  talking around that like to me imperative code is code that like runs top down but it's like it's it's a little bit challenging because all code actually runs top down and
[03:43:36]  like control flow can be seen as imperative or declarative depend on like how it's used so yeah i i you're it's it's a little bit challenging distinction it
[03:43:47] 's still worth something something's like you still like it's almost like a meter you can still like use it as a as a way of like saying something is more on the
[03:43:56]  declarative side or not well i think that what they mean by declarative is sort of like my code looks more like this and less like this uh declarative data generally
[03:44:20]  is like every time every every variable is a const do you know what what i mean like but i mean this this is this is a very yeah i don't know like
[03:44:33]  that's not even completely true i i i'm not how do you guys distract me on talking about something completely inane like that sorry let's get back to this use
[03:44:48]  state show completed to news okay sorry this is a react example okay blah blah blah they're showing the fact that it literally re-renders everything explain the poll library i mean
[03:45:04]  so far this looks like a typical reactive library yeah yeah okay i think that's the most you don't think most interesting thing about creating an agnostic reactive library right
[03:45:20]  now or agnostic signals library is your target is probably um is probably like react like are you going to use an agnostic reactive library in solid or preact or
[03:45:34]  quick or view or angular it's funny this is this is just just gonna put it out there yeah i don't know i i mean i do know but do this is what
[03:45:55]  i'm talking about like i usually don't consider jotai recoil signals libraries but part of it is because the way they interact with react and probably less of themselves because it like
[03:46:06]  it starts getting into a very gray place where like the yeah honestly it's probably in this yeah i recoil and mob x classically have had a very very different way they
[03:46:25]  interact with react mob x wrapped parts of your react code maybe components in observers and then it's a tracking scope it's like making a create effect around it but it's more
[03:46:35]  complicated because you have to have to get react and do the re-rendering instead of mob x i think i i forget if i just explained how to do that on
[03:46:41]  one of my streams it's actually really complicated i think it might have done on the react stream uh i did a react solid stream where i was talking about how you can make
[03:46:50]  reactor and solid work together and i showed how i made a version of state management for um react like solids we have a react state management you can use create signal in react
[03:47:00]  but we work the way mob x does whereas recoil you don't wrap components with these wrappers you where you use the atom inside the component that's where it subscribes so
[03:47:17]  if you go use this atom that's the component that subscribes if you update it here use it here do something with there that's that's the component that reruns
[03:47:26]  whereas in mob x you could pull in through context a mob x variable you could pass it to down three children and then and then read it there and then set it up here
[03:47:39]  and it's only the child down there that reruns it's not coupled to the component because it just makes its own reactive scope whereas in recoil and jotai or whatever i
[03:47:49]  believe it's like where you actually use it that gets subscribed so um it's it's like the difference mobx uses automatic dependency tracking which i don't know that the
[03:48:00]  other two actually do which makes it different and i i typically consider automatic dependency tracking part of what makes signal signals all right let's see now i got some questions coming in you
[03:48:12]  can use jotai too outside of react yeah sure i mean i don't want to get distracted from what i was looking here so far this looks like um i guess i
[03:48:27]  i don't let's look at signia react okay so interesting so this is this is actually is this actually more like no no see this track function yeah so it's like
[03:48:44]  mobx see this is the observer tracking it and then it's like okay okay i think this is the mobx pattern rather than the joe classic joe type see
[03:49:01]  see how you actually wrap if you turn tracked version of each given component signals are red while the component renders are tracked yeah so this is basically okay so it's like mob
[03:49:11] x with a different api use adam use computed what's use value oh okay and then use value is like is basically joe type okay this is this is actually really
[03:49:27]  good for being instructional because this is actually i love this actually because track adam computed is essentially mobx use value is like recoil or joe tie right because if you have to
[03:49:44]  use trap if you use track if you use track that's the only ways you use adam or use computed um like these just inject into the scope and then when you read
[03:49:53]  full name dot value wherever you read it that track picks it up it's like it's like solids create effect right but if you don't track the component you can also
[03:50:06]  just subscribe directly by you by calling use value so at any point you can take your atom you pull into your component and use it so your choice is either track it mobx
[03:50:16]  style or use value um it's interesting it's interesting i understand why they offer both it's just it's just this is kind of an interesting thing about the use thing
[03:50:32]  because they're kind of basing this almost more off like react use and it's it i i wonder yeah i guess react use will be specific to what react wants to support
[03:50:43]  but it's like interesting if you had a universal use thing and then user space keeps on up with new things like this the use doesn't end up being that universal because
[03:50:55]  react is really happy that they can use use for promises and contacts and stuff and they just have like the one hook but then like stuff like this might not work in that zone
[03:51:04]  anyways do you do you all follow what i'm saying basically this combination makes it like mob x this lets you kind of do it like jota recoil and that's the difference
[03:51:15]  because you can basically use a value without wrapping the component um i was going to look at jotai too why not let's look at jotai what's up blah blah
[03:51:35]  blah core okay jotai gives you an atom thing so here you're describing your derivations top level but this is not the actual and then you use an atom does this
[03:51:49]  only really work for like can you have multiple copies of text atom i guess not so you do you define the state outside of the components any case and then handle text set
[03:52:05]  set set where's uppercase atom right so this is the derived value interesting this is kind of like quick actually where they pass the getter in that's interesting ergonomics
[03:52:18]  it's because they don't have automatic dependency tracking you have to explicitly say that you're tracking it i guess that's fine i mean it's an api choice honestly
[03:52:29]  compilers actually generate code more like this usually they don't they get the benefit using get is you don't have an extra um closure wrapper but it's it's usually
[03:52:39]  clunkier if you're like using it in general but because they give you a closure here then you get the get and you don't have to import it importing the gets
[03:52:48]  usually a little bit more of a pain for ergonomics but i'm following so far and then let's see here um how does this work documentation it's i want to
[03:53:03]  see the react bindings because i guess the react bindings are yeah see this is really simple actually if you think about this is why the library is so small right because
[03:53:22]  like basically this part's universal so you can define some state and derive state and it knows how to wire this for you right and then this subscribes this is use value in
[03:53:35]  the other library done so the thing is the expectation of if you are going to use jotai in your library this is this one of those interesting ones the expectation is that
[03:53:47]  you're going to be able to have to write your own use atom or way of subscribing to your to your component this is actually why jotai has never made it into solid
[03:53:55]  i don't think because people have made like jotai-esque apis around solids primitives but like it's funny we actually have a version of solid where you can actually
[03:54:04]  use other like we have a feature where you can actually use other reactive libraries like you can use mob x and have it track in solid without wrappers um if you set
[03:54:13]  it as an external source and then you can just use mob x as is in solid without changing anything which is really really cool feature um jotai is not compatible with that because
[03:54:22]  it doesn't have the same kind of auto tracking mechanism and the tricky part with solid or jotai jotai is expecting something here to subscribe i think you know like it
[03:54:37] 's like there's a component to subscribe to or something whereas like if you have no component what do you wire the jotai to you have to like make a signal and then
[03:54:47]  you you'd have to convert the actual signal like these into signals so that you could actually read them and actually get the tracking to happen so basically it's like it basically does
[03:54:56]  nothing so yeah this this is interesting i guess it's framework agnostic for libraries whose components re-render is basically probably what what i'm getting here which makes sense
[03:55:11]  because almost every framework's components re-render so okay so how we doing how so how is solid start changing i heard you talk last week i'm clear what it meant
[03:55:35]  oh no okay okay sorry did i did i not talk about this again last week was it no i didn't maybe i talked a little bit sorry i can make this really really
[03:55:44]  clear um again two different projects just sitting stand by side tan stack framework is a react framework solid start is a solid framework um we're talking about both sharing the same core
[03:55:58]  and astro we're extracting um solid server functions into something called bling which can be used so we're just we're just we're just working together on the shared parts
[03:56:07]  and tanner's going to help me with the types on the router and essentially it's it's a it's a react framework and a solid framework built on the same foundation
[03:56:22]  that that's pretty much all there is to it right so it's like like it's interesting because the shared stuff is sitting now underneath this tan stack brand but it's
[03:56:31]  just our stuff do you know what i mean like ten don't get me wrong like tenor's doing a lot of work and it's and like that but i mean it
[03:56:36] 's just like it's it's not migrating to tan stack the stuff doesn't exist essentially like we're we're just like nakil and tanner are working really
[03:56:46]  hard together to make an agnostic um baseline so it's it's it's more like yeah i don't know i'm hoping that makes sense um it likes it literally
[03:56:58]  the the why this is always confusing is because tan stack stuff is all agnostic this one isn't is is the way to put it okay yeah i'll bite this
[03:57:14]  is an interesting question my gut is no but let me explain a bit it's this is why rx is i don't call rx fine-grained reactive although you
[03:57:23]  could do it that way like i i built something like solid using rx it's just like the it's kind of like i i i even feel maybe this is why
[03:57:35]  elm got away from signals it's just like the the flow in cycle the whole point of it is that like you keep all the side effects outside the system and you just
[03:57:45]  have like a very like let me pull up cycle js for people who don't know okay let's see here um let's go to read the docs there's an example
[03:57:56]  like they're they're just building a big pipe so like the the sources coming in are streams the thing coming out is streams so like could like you could make you could do
[03:58:19]  some finer grain stuff instead of just calling combined latest here i guess but like i'm maybe getting the weeds most people like i don't care about your silly functional frp
[03:58:29]  javascript framework that that has hasn't been that popular in the last couple years but like okay sure i think what you could do is take the input sources map them to
[03:58:50]  signals it's really hard because it depends on how you make the driver here because of this rx cycle likes like that the fact that it's like that purity stream the
[03:59:03]  same thing that react does like they wouldn't do this on their own because they don't like want to retain a dom so to speak but this is declarative enough that the
[03:59:11]  space outside i'm gathering only runs once so i i could see a world where you took the sources converted them into signals um where you bound them directly to the dom and
[03:59:22]  then pass them as rx sources like stream still to other components i think it's a mess honestly can you yeah yeah we have a universal render i have a stream about
[03:59:39]  that um where i have two extremes i have one where nikil shows us how he made react 3 fiber react ink and react or pdf and solid so i guess a solid
[03:59:50]  three solid three solid ink and solid pdf um and um i actually have a stream where i actually make the universal renderer into um the dom like dom a really quick
[04:00:03]  dom renderer and then run it through the js framework benchmark um and it actually did pretty good i mean things have shifted around now but at the time it scored the the the
[04:00:12]  universal renderer was slower than solid but it was as fast as inferno so um yeah yeah it's really tricky to find like there's only a couple of us working
[04:00:43]  on stuff and i'm probably a bit of the bottleneck right now the pr is coming in right now are really great um we just need to this is why we're
[04:00:49]  doing this move and stuff with astro i just i want to i want to help streamline us being able to actually deliver on it it's it's hard with a small team
[04:00:57]  of volunteers to to manage the meta framework almost all the meta frameworks have a company behind them um like multiple people all right still reading oh i mean convenience at the time this
[04:01:34]  this the next version like the in the future of these will be separate we i i did a stream with milo where you kind of hinted at it you can like we
[04:01:42]  have a different reactive system that we're working on towards for future solid and it's act solid js reactivity so i just didn't bother because i'm a skeptic
[04:01:54]  of agnostic solutions a little bit like i i just i just mentioned if i made an agnostic solid um like reactive library where would you use it um i already
[04:02:05]  made one for react so i thought that was like good enough like react solid state the truth of the matter is like i thought the solid package was small enough that i was
[04:02:14]  just like whatever it's like six kilobytes like like your bundler is not going to pull the other code in anyway so like if you really want to use solid just
[04:02:21]  use solid js and like you can use it like you just use the packages as a reactivity library not really worry about it but yeah mostly that i set this up before
[04:02:32]  that was like a trend like before view did it before you know others are starting to do this this is a solid jota of course i mean there we go so it
[04:02:51]  can be done actually you know what i'm curious are you curious i'm curious what what does a solid jota library look like okay okay i like the api
[04:03:19]  ah see told you they call count as a function because it's so all this is is an api wrapper let's primitively based on jotai what is okay let
[04:03:45] 's see what a use atom does use atom value set atom value that's fine where's this coming from okay use atom value okay interesting so they have the map to
[04:04:31]  resources for stores otherwise oh cool okay so they're actually using um they're actually using um my approach to uh it basically it's a signal interface with a proxy in it they
[04:04:50] 've kind of unified it so you call as a function and then everything underneath it it's deep proxies and then they use a resource if it's a promise otherwise
[04:04:58]  they just create a signal out of it okay and then the store on submission writes to the signal okay yeah that makes sense to me okay so like what it does is it provides
[04:05:15]  a slightly more universal api that aligns with jota's way but generally speaking you're just creating signals like you could almost just put create signal out here but there
[04:05:29] 's like it handles a few other cases as well okay that makes sense that's what's the best way for sharing state with signals i don't quite understand what the question
[04:05:52]  is sharing state with signals maybe like talking about like nestory activity in stores i'm not i'm not sure can we send a signal for ourselves back right now only resources do
[04:06:04]  that um and only like during render we're not doing like websocks or something like generally speaking though when you're doing ssr and you create resources you're
[04:06:10]  doing ssr and you create resources we serialize the promise and it wakes up when the same resources you know hydrate in the client yeah sorry just reading through i
[04:06:30] 'm only catching up on the on the on the all the cycle js talk now um i did address this before but really simply it's they aren't any different like mob
[04:07:04]  it's not mob x and signals are the exact same thing the it's not mob x's fault it's react's fault if you if you want to say like but
[04:07:18]  the difference it's like essentially like it's not the reactivity is the same it's the way you use it that's different that's the way you use it that
[04:07:34] 's different that's the way you use it that's different that's where all the confusion comes in mob x is a fine-grained reactive library react is not a fine
[04:07:39] -grained reactive renderer whether i say that's a problem blame react but i mean like i'm just like that it's perfectly fine is what i'm getting at
[04:07:52]  it's like the hype though is about the renderer funnily enough not about the actual reactivity crd2.com sorry are you guys like talking about like
[04:08:11]  web sockets and stuff or like we like like you got like four editors open and they're all talking to each other and they need to stay and say i think the coolest
[04:08:23]  thing sorry let me let me did i miss any apis on the signia thing we kind of got distracted this all makes sense how about the core libraries okay there's
[04:08:34]  more here okay atom computed react which i'm gonna affect with the reactor thin layer effect scheduler fair enough transact like transfer does not create a new transaction transactions okay this is an
[04:08:48]  interesting idea okay set throw a new error oh okay cool cool okay interesting and there's a rollback okay cool yeah we don't have anything like this this is an interesting
[04:09:03]  addition i when i say don't have anything like this that's i'm online technically transitions are kind of like this um the mechanism that we use for doing uh for doing like
[04:09:15]  concurrent rendering concurrent rendering where you kind of like start something off on the side and then do this and it's basically when you commit the async stuff that everything merges
[04:09:23]  so like we have a bit like we have a bit of this but nothing as far as having rollbacks or what that's so it's funny i i copied transition because
[04:09:32]  of react naming but transaction is a much better name for what transitions are um but yeah this this looks like it's this is interesting i think this is interesting i think this
[04:09:45]  okay yeah because i was like looking at this i'm like yeah so it's mobx no this is the interesting piece here they have a they have a model for committing and
[04:09:52]  uh like not for batching so much but for like like making sure everything goes together and then committing it together right does this handle async async because if it's
[04:10:02]  synchronous it's it's it's if it's synchronous it's less interesting because like i mean i you still it's kind of like solids old version of solids batch command which
[04:10:19]  didn't commit the the s didn't write to the signals till the end and then yeah i just it wasn't particularly useful this must support because i have to imagine that
[04:10:30]  all these could apply at the same time yeah this is the piece that probably is worth looking into i have to i have to imagine this is actually the thing because like solid had
[04:10:41]  a batch command for a long time that basically would run everything we sold batch but we went with what the batch command did was it wouldn't it wouldn't set the signals
[04:10:51]  until the end so in theory yes if you threw then you would get this behavior um but as i said it was it wasn't a very common scenario async is the only
[04:11:05]  reason why this matters because otherwise you're in synchronous mode and i don't know that does this this has to support async transitions is that is that the trick yeah i
[04:11:17]  mean however you want signals aren't really worried about that like if you set up a some web socket or you played with like uh like some kind of local storage mechanism that
[04:11:43]  true like so that's more multi-window but yeah like set up some web sockets how are you serialize that like signals themselves are not concerned with that you
[04:11:50]  they're they're just they're the synchronous they're the synchronous piece right it's like that's why like angular doesn't see them contradicting with like rxjs because
[04:11:59]  you pipe out everything through rx and then they end up in signals and the signals like make sure everything is synchronous so whatever mechanism you use for that is kind of like it
[04:12:08] 's outside of the responsibility no but this is an interesting thing the dev tools i i am not the dev tools kind of do this because there's a root so actually as
[04:12:25]  long as we have the roots then yes technically yes we can do this this is what the dev tools do i i don't expose at the end user i've been thinking about
[04:12:32]  this a lot for problems like hmr and like resumability so technically yes this is where we're heading towards but right now it's not really refined but technically
[04:12:43]  because we have the roots and we have the dependencies we basically have the whole graph oh yeah yeah we have a method called reconcile um i i uh for our stores yeah so
[04:13:00]  basically yes it's at that point when you're getting fresh data you got to do diffing obviously it's better if you if you send patched updates that's better
[04:13:08]  for everyone you send less over the wire you send you send less to the browser you you do less work like it's just it's win win win win win but obviously that
[04:13:17] 's not always the case so um we have a reconcile function with our stores it's in our tutorial where i show how you can use solid with an immutable interface like redu
[04:13:27] x same idea um you it basically do i have the redux example with immutable stores yeah like solve this one essentially if i go into the store here that's a
[04:13:42]  redux store with some reducers if i my use redux hook takes our store passes it through reconcile on the state and what this will do is a data diff and then
[04:13:55]  the updates will flow out to it will flow out to solid stores are our nested proxies it'll just be the properties that change so like essentially load data from
[04:14:04]  the server get the big json diff it what notice that the one street name number on that one user changes that street name updates pinpoint to the that place in the dom where
[04:14:15]  you're showing that street name right yeah i mean i feel like it's kind of out of scope like like you could you could really use any solution like we wouldn't
[04:14:34]  really have any opinion about what you do there right like i think the idea of transactions and async sense is interesting maybe that'd help but like yeah like i the the core
[04:14:50]  library the core library wouldn't wouldn't really have like i don't even know what those primitives would look like like like because it's like yeah it seems a little
[04:14:57]  bit like we have from so we can convert to streams if there's like maybe a simpler interface with sockets but i feel like sockets you have to like do a dance
[04:15:06]  anyways so like it feels like a third party library yeah so this is like solids old batch yeah i don't know uh it's an it's interesting i i've
[04:15:35]  i've i've seen it a bit solid primitives is the one that um that uh the core team guys have been or the people like david and like the debug people
[04:15:46]  are doing which is a kind of similar thing but it does i'll check out it again like it has like all of these primitives um let me try solid use it is
[04:15:57]  it is it like a straight port of view use maybe oh it's a lexus's library oh he's still updating it i didn't realize that i thought this was
[04:16:07]  kind of like uh uh like what's solid use sorry maybe am i wrong okay yeah i guess these are just things that he wanted himself okay that's cool so it's like
[04:16:23]  it's a similar type of library just a just a some some some of these kind of patterns that he likes i see this is the whole thing you have primitives people can
[04:16:31]  go do this this is this is the power of composition right yeah and to be fair i was really anal about performance testing this early on i wanted to make sure that we
[04:16:46]  were as fast as any vdon library so i like all the benchmarks like the really nasty ones like dbmon where you're like splattering the screen and all that kind
[04:16:52]  of stuff i made sure that the reconcile function could keep up with inferno so like it's not our forte by far but solids reconciles about us about as fast as
[04:17:01]  the fast as the fastest feed on libraries so yeah it's it's it's it's good but what's cool about solid is like when you don't need that like
[04:17:12]  then you get the like this is kind of like the defaulting to the like the worst case scenario you're asking when the dev tools are going to come to start yeah
[04:17:23]  i'm not sure we don't even have the linter and start yet we um yeah honestly like at this point the type of stuff i'm looking at is way more mechanical
[04:17:23]  than that like just bug fixes like so much twitch twitch twitch twitch twitch twitch twitch twitch twitch twitch twitch twitch twitch twitch twitch twitch twitch twitch twitch twitch twitch twitch did i miss
[04:17:30]  a sub code monument gifted a tier tier one sub um to and see they've gifted three subs in the channel thank you very much code monument yeah i'm not sure we
[04:17:35]  don't even have the linter and start yet we um yeah honestly like at this point the type of stuff i'm looking at is way more mechanical than that like just bug
[04:17:45]  fixes like so many uh twitch twitch twitch twitch twitch twitch twitch did i miss a sub code monument gifted a tier one sub um to and see they've gifted three subs in
[04:17:57]  the channel thank you very much code monument yeah another one to rshig yeah honestly thank you um wesley coder gifted to dev oh and parasocial thank you very
[04:18:10]  much that's awesome having the having the people in the chat who are always engaging keeping stuff going have subs i very much appreciate you guys uh doing that all right cool sorry
[04:18:23]  i don't always see the subs so i appreciate that no i miss that whole conversation no i missed that whole conversation yeah yeah i mean this is the scariest thing when
[04:18:57]  you talk about benchmarks and then like like you invite the scrutiny and then you find yourself like having to debug someone else's benchmark and stuff um yeah no uh i have like 55
[04:19:11]  notifications right now on twitter i am not i i'm probably gonna not test look at them to laugh at the stream yeah yeah i don't know maybe some stuff i said
[04:19:30]  on stream got some people talking i i like the the thing the thing is like i can only know what i've measured and tested um in the truth of the matter is
[04:19:43]  i'm sure i i heard a story once that inferno um helped some startup costs but didn't make it any significant impact on the performance of facebook i don't know what
[04:19:56]  if if that says about facebook or if that says about inferno but um that's the challenge with with benchmarks i'm just kind of contending the the fact that like
[04:20:06]  we've done an incredible amount of work to reduce memory um of on signals and using techniques for you know improved creation costs that you know we're basically you know at a place
[04:20:22]  where like this significant like i can't speak to every benchmark but like any benchmark that i've ever seen so it's like it's tricky and i look at lots of benchmarks
[04:20:33]  um um but i mean the problem is there's a bias there because if you see benchmarks you build towards the benchmarks you might not be hitting the real cases so it's
[04:20:42]  it's you know what i mean like i should check that out probably when stream's over right right right what i was referring to is like if you look at the js
[04:20:54]  framework benchmark like and you look at the history of the js framework benchmark and i know i did this in a previous stream here but just yeah where is it the official results page
[04:21:04]  from 58 which is the first version that had surplus in it if i go here and you just kind of go let's let's jump a fusion 69 if you if you
[04:21:17]  just go through the history of this and this has large creations and stuff like here's dom c which is something else we have surplus and solid side by side right um actually
[04:21:30]  i guess this is the first one where solid got ahead of surplus like like we all the way to chrome 110 you know years and years later you're gonna see the same
[04:21:46]  trend uh there's see now we have like all these other libraries and that are like all flagged let's remove the flagged ones you know actually zania is a different
[04:21:57]  case but like what i'm getting at i mean these are vdom libraries by the way do do do they're fast i'm just saying like solid and these things it
[04:22:08] 's not any slower is what i'm getting at right right and obviously these are stupid stupid tests where you're creating you know 10 000 rows and we're talking about the difference
[04:22:22]  between solid at 441 and in uh what is that block dom at 447 and inferno at 451 it's oh it's five milliseconds like who cares but who
[04:22:33]  cares but what i'm getting at is like it's it's not i did a test where i actually scaled up the components years ago too was it fastest fastest way to render
[04:22:44]  the dom and again these are artificial tests but like you know that so now there's like we're you know like this is just silliness but like like it's not like
[04:23:00]  it's like drastic drastic like anyone's like drastically worse here like actually dom sees really fast where's ev 1682 like the yeah you know what i mean like yeah well
[04:23:14]  i'll look into it later it's it's i'm sure there's i'm always looking for an opportunity to learn and do better so yeah yeah and we've already
[04:23:25]  hit that equilibrium years ago that's the thing yeah i mean it's all good you know yeah yeah and this is what i freaking struggle with every single day stream you hear
[04:23:59]  this i'm and i'm not just talking about like it's like when you're sitting there and you're like and you're like man our server components the right direction
[04:24:06]  are we are we are we like have we convinced ourselves that we need to converge everything into a direction that doesn't need to be converged or should we look at specialization
[04:24:16]  it's not always that easy to know when the right time to put things together and keep them apart is and it's like certain decisions will definitely like have you stuck in the
[04:24:23]  right time to put things together and keep them apart is and it's like certain decisions will definitely like have you stuck in a little rut so to speak where you have to
[04:24:32]  actually kind of go back to pop out of it like i mean single page apps you can view kind of like that i think if someone said that single page apps were like a
[04:24:40]  local maxima kind of thing um as they are today that might be a fair thing but then you can go okay well how do you get out of it quick is a way
[04:24:48]  to get out of it server components are a way to get out of it but like those might be their own little directions like can i get a stock all right writing a
[04:25:13]  solid to next inflation maximum yeah i mean yeah i mean that's interesting you'll see what part of me suspects that that will not ever be my job if i get solid
[04:25:32]  start to where i want it to be i'm hoping that it will be the create jd apps of the world that do the next thing do you know i mean that put
[04:25:41]  the finishing touches you'd be able to use the power of the veet astro platform to do those finishing touches because i i'm never going to be able to keep
[04:25:52]  up with next never ever ever ever ever like they they that's what they focus on and i i feel like like they are also very good at that um i think the challenge
[04:26:08]  is like there's different layers and i i hope that we get even somewhere near the polish that next has in a in a solid framework at some point in the not
[04:26:20]  so distant future yeah you're going to cause major i'm not sure we should we could talk about this but i'm working on it what i've been i've been hey
[04:26:39]  i'll put it out to you guys i 1.7 has been a tricky one for me because it's like it's kind of breaking for typescript like it's
[04:26:46]  not breaking breaking and typescript always breaks but it's put me in a kind of interesting dilemma where i i need to figure out how much i want to like respect semantic version
[04:26:57] ing even though typescript doesn't respect semantic versioning and part of me kind of started thinking that like maybe we should just go for 2.0 early do a bunch
[04:27:07]  of the breaking like minor breaking changes that i've been kind of hinting at and then like leave the bigger like reactivity change to 3.0 later in the year and
[04:27:16]  we should just get in the habit of being able to do releases at a better interval um i know this is like i'm just throwing this out here i've only talked
[04:27:24]  about the core team with this so here he goes and this is kind of thing i'm talking about i'm not talking about big breaking changes and almost my idea would be like
[04:27:32]  in that case the 2.0 would would have everything in a deprecated state so it won't get removed yet um but basically serve as a transition period um that that
[04:27:43] 's that's sort of where my thinking is right like i'm not and i'm not talking about like big things i'm talking about tertiary api type stuff like
[04:27:52]  details around like on error how many of you use on error directly right how many of you use um it's another it's another one like that uh the once comment um yeah
[04:28:09]  this is what i'm thinking and it's funny because this was not my plan originally i was going to kind of like because i was looking at 1.7 and i
[04:28:19]  was like i can be kind of um conservative here but then i was like after all these discussions with dan and all this and he kept on pointing at the linter like like
[04:28:29]  it was like the the solid saving grace and i was like this is so weird to me because like literally it just never occurred to me that this was ever a problem but you
[04:28:37]  know what to each their own i started thinking you know the funny thing is 1.7 was about making typescript stricter making like you know how the linter
[04:28:46]  complains if if you like let me show this let me go back okay let's go result if i go in here and i don't call this as a function the l
[04:28:56] inter complains it goes hey i was thinking like my idea for 1.7 was actually get typescript to complain um and and and i started thinking like if i wanted
[04:29:08]  to be like even more aggressive here we we could like add a few more rules essentially um which you know and it's tricky to find the right balance from typescript in the
[04:29:25]  linter but like basically make solid a little bit stricter um and that was sort of where my thinking was because i want to avoid errors and i want to like
[04:29:38]  that that's i feel like this is an interesting uh kind of venture here where a lot of the confusion people feel with solid i feel i we can mitigate i've just been
[04:29:51]  very standoffish because i generally hate tools telling me what to do like i don't like them and it's funny but that's what we saw on the poll most
[04:30:01]  people actually want the tools to tell them what to do what to do it's just not how i develop it like irks me when i see that stuff because like if if
[04:30:09]  there's ever if there's a false positive i'll just like uninstall it like i'd rather like not get notified than like ever hit a false positive which makes me
[04:30:22]  kind of crazy i understand that but since most people aren't like that it's exactly why solids design is kind of like it is i could do we could do a lot better
[04:30:37]  well i mean breaking typescript as in like people would have to go around their app and update typescript on some specific things like yeah so it's like yeah i
[04:30:57]  i'm wondering if i'm playing too much into these conversations and been pulled too into it but after all this i was just like if this is the world that people want where
[04:31:08]  they want their tooling always shouting at them and i think i think i know this instinctually it is uh swix wrote a great article about the shift left what is it
[04:31:22]  swix shift shift left or something where is it it's not this third age article swix blog whatever swix io there we are am i gonna find it though shift
[04:31:49]  maybe he references in his third age article he talks about the shift left or that like all javascript frameworks are basically anyways language server that's that was the one he wrote
[04:32:04]  a blog where he was saying the language servers are the new javascript framework that's what i'm looking for in swix language server yeah there we go bam okay
[04:32:16]  and the whole premise here is that we're moving stuff this way so instead of getting you know errors and run time or build time commit time save save time like like the
[04:32:36]  like basically everything is going this way react is actually very much on the runtime side some people are more interesting compilers and then going here if you believe this is the case
[04:32:50]  then like this sort of strictness is kind of what people are asking you for so it's a kind of a different focus i was viewing 2.0 as like the
[04:33:03]  reactivity rewrite but i'm thinking now of you know and like kind of pushing forward that side i'm thinking 2.0 is actually making solid stricter and getting the
[04:33:15]  docs to where they need to be for the new docs so it's going to be a release about about basically documentation and and like making it you know more straightforward than ever
[04:33:28]  to to because like there's just something so huge for me um and i know the linter handles it but this to error tells you you're not in kansas anymore like
[04:33:39]  this is actually really important that when the person comes in from react they go do this and it goes hey that is not a function like because otherwise they don't know what
[04:33:50]  they're supposed to do with their signals maybe ryan mode yeah yeah exactly you might have to give up the idea that solid is something you should enjoy using i know that
[04:34:13] 's a crazy but yeah this is the trend especially when like our debate basically ends when dan's like oh yeah but you've got a linter or something it's like like
[04:34:21]  to me like that argument is so inane i'm just like you know like so what but like i i guess it's not for a lot of people you know like i
[04:34:32] 've i've never used linting i you know i barely use typescript you know it's just yeah yeah i didn't think it would be you guys are great
[04:34:47]  keep me energized i don't even know how i'm awake still it's been it's been in such a long week yeah yeah that's true it's it's yeah yeah
[04:35:04]  you're right like the only reason that this doesn't slip under you know i don't have to worry about batch batches it's not a thing you just write your
[04:35:23]  code it just works done the second thing is is we're getting rid of batch we're just gonna like we're always going to queue microtask you're not gonna have
[04:35:32]  to worry about batch batches it's not a thing you just write your code it just works done the second thing is i'm pretty sure on this but i'm willing
[04:35:40]  to like debate it with people stores are going to change from the path based syntax to the produce like immer style syntax by default you'll still be able to do path but the
[04:35:50]  the the the immer style is way less code it works better with typescript um and yeah you you know if you want to delete a property you just use delete in javas
[04:36:00] cript or whatever like it's just it's not fighting the stuff um and i feel like if we do that we can just send create mutable down a ravine or
[04:36:12]  wherever it wants to go die and like we have a really good solution with read write segregation control flows great type script you know and we we make those two kind of thing
[04:36:25]  but yeah obviously all the other stuff yeah and i guess technically deprecate create computed but i don't think anyone cares about that but like those though we we do those changes
[04:36:36]  i think we're in a pretty happy place 99 of your code is unaffected by those right it's just i think the stores will be like a refactor for
[04:36:45]  a few people and things i think the stores is probably a bigger one right right you've writable resources might okay you you got me there our resources are writable we have
[04:37:04]  a mutate function but you're you're hinting at the thing that i can't preemptively do is i suspect that when we're done the reactivity and
[04:37:15]  that might be like later later like 3.0 time period or whatever that the resource api will shift uh slightly and um this is a little long-term kind of flag
[04:37:26]  i i'm this is why like we just can't i think we should just do the stuff that we can do now and let's and then just kind of go from there
[04:37:36]  the the what one of the coolest things about primitives is that for the most part we can just put them in a repo and be like oh you want to use um
[04:37:49]  the old version of create store well we'll just export it from different things so you can just install the old create store and it'll be built on the new create store except
[04:37:58]  it'll be the like we can give you the old api as a compat layer um until you can migrate off it that that's the kind of thinking that i love with
[04:38:08]  the the primitives all this stuff like batch might just have you know are you know basically no ops and stuff but this is sort of the thinking here um i kind of
[04:38:18]  yeah we have to decide how far we go on that side but i think it's pretty clear um the general direction here yes this is still set store i'm literally suggesting
[04:38:36]  that um well actually is it on here where are we okay file new window file open recent solid where is it x reactivity example i'm basically suggesting this see store set
[04:39:07]  store and this is a silly example because it's just as you know you can use getters and stores right right create store count double count right and then in our root
[04:39:17]  here create effect i'm just suggesting that set store always takes a function and that function gives you a mutable proxy that that so like it's i mean maybe you would write
[04:39:39]  it more like this generally but what's cool about this that i love is just like little details like if i go do double count and i try and like like types it
[04:39:51]  just it just works nicer with with typescript you know what i mean like no you can't write to a getter you know like it's just i i like my imm
[04:40:00] utability and i will keep the path as an option like a like a like like reconcile is but this is generally what the thinking is does that make sense When you say
[04:40:16]  QTASingBet, does that mean a signal change marks dirty and the effects run on the next microtask? Yes, that's exactly what that means.
[04:40:33]  The funny thing is it doesn't make sense to do that until we get the new reactivity because then the lazy of the pull mechanism with the memos and everything makes
[04:40:47]  way more sense. But yes, it just means... The thing is it doesn't... Yeah, this has very minimal impact for main flow. It means that though when you
[04:40:56] 're in event handlers and you set like 10 things, it auto-batches. That's all it is. Oh, my screen's frozen? Oh, that
[04:41:04] 's lovely. Let me remove and add it again. Nope, still frozen. That's so weird because I'm not frozen. Oh, do you know what it is
[04:41:18] ? No. That's weird. I don't know why it was doing that. I was sharing my whole screen, but VS Code isn't showing up. Oh,
[04:41:39]  that's interesting. Like, on my window, I can see the VS Code window. That's so weird. Huh. Let me try and change my share one more
[04:41:54]  time. I'm sorry about that. It's weird though because I'm definitely sharing my whole screen. Maybe I wasn't. Yeah. Sorry about that. That description
[04:42:16]  probably made no sense then. Sorry. Let me see if I can show what I was talking about. Why is this not? There it is. Okay. Sorry.
[04:42:34]  What I was saying is it's like this. You still have a store. This example has, like, a count and a double count. And then, like,
[04:42:49]  essentially, the store always takes a function that passes the previous state. And what I was commenting on is, like, if you take the double count and you try and,
[04:42:57]  like, it just, the type script works a lot nicer because, like, you know what I mean? Like, it'll be like, hey, can assign to that
[04:43:03]  because it's a read-only property and stuff. It just, there's, can we delete s.count? The operand to delete it must be optional, right
[04:43:15] ? Like, I don't know. I, I think this is going to make things, yeah. Okay. Sorry. Just catching up. All right. So
[04:43:48] , yeah. Produce is more type state, but the path sentence has had all the fun tricks of filtering with modifying. Yeah. The biggest problem with the path, and
[04:43:59]  we still have the path, is that, like, there's inherent behaviors that are not obvious. Like, objects always merge, which would screw people up if they were writing
[04:44:09]  stuff a certain way. Like, they wouldn't realize that they were merging instead of replacing because they would, they, they'd write, like, set store something something
[04:44:19] . And that second something would be an object, which actually merged instead of replaced. Because they didn't inline the object, right? And, like, undef
[04:44:27] ined doing delete. So, just quirks that you have to do to have that DSL work nicely that, like, mess with perceptions and stuff on TypeScript and stuff
[04:44:37] . And while it's really compact to be, like, I can iterate over this thing, you know, like, filter function, like, you, you can still
[04:44:45] , I don't know, S dot map dot whatever. You know what I mean? Like, I, I think, basically, I, I just said I was
[04:44:54]  open to discussion on this. I, I'm, the path syntax will exist the way produce exists today, but I, I'm very much, um, on this kind
[04:45:04]  of thinking. Yeah, it's always hard to do this, because then you get into these APIs where you're hanging setters off the setters, because, like
[04:45:21] , I very much am, like, the, the whole reason this is still set store and not a separate proxy or the same proxy or whatever is because this part here is
[04:45:28]  still really, really important. Yeah, other than it's not create mutable. Really, really important that this is not create mutable. I, I actually think
[04:45:43]  this lets us get rid of create mutable for the most part. Yes. Funny thing is, yeah, I don't actually know what to call the variable, because to
[04:46:02]  me, it's just the, it's just the store state. I, I, like, if, I, I often call it store or state. The reason
[04:46:09]  it's S is for, for, for, for that reason, it's because it's not a draft in our case. Um, it is actually just a mutable
[04:46:16]  proxy. Right? So, yeah. So, you see the win here now is solid only has a single type of store. Right? So, like, this kind
[04:46:32]  of streamlining is like the stuff that we're aiming for, uh, generally with the reactive rewrite. But I, I, part of, I, I'm thinking that
[04:46:41]  we have a middle ground with 2.0, which starts guiding us in the right direction. And then we, you know, we kind of, uh, do the actual
[04:46:52] , like, yeah, it's interesting. You guys are right. If, if we change the API for 2.0 and we could actually replace the reactivity during
[04:47:03]  the life cycle of it, um, if there isn't huge behavioral changes. Yes. Yeah, yeah, yeah. But, yeah. Um, but it will probably be
[04:47:15]  replaced with another primitive. There, there, there's still a use case here, but yes. Anyway, my, my point is, the, the three primitives
[04:47:29]  I mentioned are other, like, obviously the store change and the, the store change and the, um, what was the other one? Um, the store change is probably
[04:47:44]  the, the most impacting one that I'm talking, and the batch store and batch are things that are felt. Um, the other stuff is probably generally not going to
[04:47:53]  be, the other stuff is generally probably, yeah. As I said, it's the key thing here is that we, those original versions of the primitives will be available
[04:48:08]  for people. So they'll be able to like, still like, if you do the quick, I mean, it'll be kind of annoying. You'll do the
[04:48:15]  update and then TypeScript will like yell at you that you're using a bunch of function methods that don't exist. If you don't want to go refactor your code
[04:48:20] , you'll just be able to like change the import. That's the kind of thinking that I'm thinking. Yeah. So yeah, my, my, my thing
[04:48:32]  here is I wonder if behavioral differences will be worth sembring, but I guess we'll see. Yeah. A simple code mod to updating ports. Yeah. Yeah.
[04:48:46]  Yeah. That could do it. Yeah. yeah, exactly. That, that, that's, that, that's the kind of thinking that I'm, I'm
[04:48:55]  having here. I don't want to pull our legacy around forever. And, um, they kind of, this is a beautiful thing about primitives, right? They're
[04:49:06]  like, yeah, but yeah, so I think, I think that's the, the thing we're going to do this stuff all in parallel, um, obviously, but
[04:49:15] , uh, I just, the discussion this week made me really appreciate how even more so how much people really like the tooling assist, so to speak. Um, and
[04:49:26]  yeah, I, I want to, I want to make it so that people get into solid that their first impression is like much more guided that they feel like, um,
[04:49:37]  like they know if they're doing the right or wrong things, which as I said, is not a quality that I actually have ever cared for that much, which is
[04:49:47]  funny, but, um, but it's definitely something that I think is meeting people in the middle, so to speak. Anyway. All right. How are we doing here
[04:50:01] ? I saw Theo came back for a minute. Do you not have Git on your machine? That'd be such a flex. I called it. You don't get
[04:50:22]  to enjoy solid anymore. No, I'm going to still enjoy solid. I'm going to enjoy the, enjoy the fact that people enjoy using it. I, I
[04:50:28] , I, I think, I think that like, I think this, this is a good step. I think there's, there's, there's, there's some
[04:50:43]  other cool stuff that I had fledged for 1.7 that we'll be coming out to, which is like the type safe control flow. Um, you know,
[04:50:51]  so that like your show components, um, don't, aren't keyed and are type safe. Like the, they do the proper, uh, narrowing. If
[04:51:02]  you use a callback form, I'm not going to let you guys, I'm never probably going to use the callback form and just put exclamation marks because I
[04:51:08]  just don't care enough. But you know, now you can do that. So yeah, I mean, this, this is, this is, this is, this
[04:51:23]  is, this is where we're heading. Right. Yeah. Um, yeah. Is there anything else that I, I, I think that's my biggest thing in
[04:51:40]  the same way that Dan kind of had that realization, perhaps that like people look at react hooks and see reactive libraries, which he apparently didn't realize. I had the kind
[04:51:51]  of realization that, um, people don't actually mind stuff complaining at them nearly as much. Like, even if like the rules seem weird, they'll just go along with
[04:52:02]  it, which actually, if that's the conclusion that is very positive for quicks future. Um, like I, the, that was a part I think that was
[04:52:12]  always going to think, cause I was like, why, why do I want weird rules and everything complaining at me, you know, kind of stuff. But like, if
[04:52:20] , if we're okay with just like doing a small code refactor and then it's like things airing at you being, Oh no, now this isn't serializable
[04:52:28] , blah, blah, blah. And like, if that's the kind of world you want to live in and it gets you optimal code and you're fine, as
[04:52:35]  long as things keep on like complaining at you, I think that actually speaks well to these crazier compiler futures. Like this is how we get there. like, I
[04:52:51]  mean, it's funny, like actually, Oh, can I find this on Twitter? Dan said something that I wasn't expected. Cause I was talking to him about the
[04:53:02]  linting and I was just like, Oh yeah, whatever linter. And he was like, in the future, someone was bugging him about it. Like
[04:53:08]  he's like in the future, react will error, like straight up error, um, on stuff that they use on the linter today, like dependency arrays and stuff.
[04:53:16]  Like he, like the, his intention is like, if you put an empty dependency array and it doesn't match, they will like straight up use the tooling to error on
[04:53:25]  you. So he's like, they're getting stricter and stricter too. That's their intention. Um, which is really, really interesting. Thinking
[04:53:39]  back to TD, that's exactly how so many people write code. What, what, but, but I, I didn't think anyone actually did TDD. I thought
[04:53:50]  that was like the thing that you like talk about and you're like, this is the good way to do things. And then you like, you write your first test and
[04:53:56]  then you just give up and you move on. Okay. Okay. Okay. Fair enough. But yeah, I mean, I see what you're saying though, from
[04:54:15]  a mindset. Yeah. Yeah. Yeah. And I think the other place where I saw this and I got to thank Greg for that was when he taught me rust,
[04:54:33]  I started thinking about this a lot more too, um, just like understanding how, like kind of pushing code in a certain direction. It's a very, it's very
[04:54:44]  interesting to me in terms of trends. Cause you, I was around when, you know, people were using like different variants of CNC plus, um, you know,
[04:54:57]  and I saw that involved into, you know, the, the Java and, um, and obviously like C sharp and.net and stuff. And, and it was just
[04:55:09] , and this like Ruby, like watching the advent of having these kind of strict object oriented languages and then the move to like more scripty type languages. Um, and
[04:55:21]  then like even JavaScript kind of getting pulled into there though, JavaScript, everyone knows the complete mess, but like, like watching it come back around again is really interesting, um
[04:55:33] , thing. And I obviously type script is an indicator of this, but like even more so it's, it's almost like the reason that we got away from all that
[04:55:44]  typing stuff wasn't, and like all the crazy tooling, it wasn't because, um, what it did was bad. It was just that we were too impatient to
[04:55:53]  wait for it. Do you like, do you know what I mean? Like I kind of bought into that it was bad. Like I was just kind of like, you
[04:56:02]  know, like give me a text editor and like notepad or whatever and like, let me go. But I, I, I, I'm actually starting to
[04:56:11]  think that it's more that like things are so slow and so bulky that it ended up being like prohibitive. Like I, I spent a lot of time in visual studios
[04:56:22] , not code, like original visual studios, like back in like, I have visual studios in 1997 dating myself. Um, and like, this is, this is high
[04:56:30]  school though, not, not, uh, not like professional and like, um, and like, I, I got it from a teacher for helping set up all the computers
[04:56:39]  in the computer lab one, one, one summer. And I, I, I, I used like, like, it's so weird when you, in those environments,
[04:56:53]  like I remember like all the auto-clitches, like you never typed anything. Everything was like one character, you just like do, do, like look up
[04:56:59]  API docs. Like, it was just like a very different experience. It was never like, like, let's just try it and see how it goes. It was just
[04:57:06]  like, it was like, do, tap, do, tap, you know what I mean? And, um, I kind of started liking flying blind after that period because
[04:57:17]  I felt that I was getting too distracted by like going through the list of possible completions and like doing that. I'm like probably the only person in the world who
[04:57:26]  thought that, but like, like, I don't know, it's just, it's very funny to me. Yeah. I mean, I think, I think
[04:57:48]  this is the thing. And luckily for us, we are structured in such a way that like, there probably is a fairly idiomatic form to how you should do stuff
[04:57:59]  so that we can do it. Like another idea that came in, um, um, from the, the great Michael Rawlings is, um, he was like,
[04:58:08]  Ryan, you could just make a special untrack for components. Right. And this isn't like a typescript kind of thing. Like this is still runtime error,
[04:58:18]  but he was like, if you make a special, if you make a special, um, untrack for components, then if people, um, yeah, maybe
[04:58:29]  I have to show this in the playground, but he was like, if, if people access a value top level and don't call untrack themselves, you just runtime
[04:58:39]  error on them. So if they destructure props error, if they, if they like access a value out here error, unless they explicitly untrack. So essentially
[04:58:50] , if you want to access the value, you have to intentionally call untrack on it. So components are untracked, but they're like a different special unt
[04:58:59] rack. And I mean, that's a pretty radical move, but on the other hand, I mean, I guess linter has helped with this too. Like,
[04:59:07]  but it's pretty powerful when the first time you go to destructure props, it's like you tried to access, um, you know, like you tried to access
[04:59:19]  reactive properties in an, in, in a, like something like, I don't know untrack, but like in a top level component context, uh, you know
[04:59:30] , don't do that. You know, if you, if you intend to, to listen to an untracked, wrap it in an untracked call, something
[04:59:36]  like that. Like, it's funny though. See, to me, that's a lot of friction for, because there's certain, I don't think I'm
[04:59:42]  the only person in a wild west, but over time, this is kind of, this is the kind of, um, scenario. And the thing is, don't get
[04:59:49]  me wrong. I'm only including that stuff in dev mode. like, don't, don't put stuff in my bundle, you know, but like, I'm
[04:59:57]  just saying like, this is, this is sort of the. Create computed. No, I mean, I'm talking about the component. Yeah. Create component, create
[05:00:15]  component already on tracks. Yeah. But I'm saying actually, I can't do much on with like, there could be compiler errors. I was talking about runtime though.
[05:00:22]  We could literally put a special, have a special on track. So when you're in the special on track mode, so like, like basically if, if you listen to
[05:00:33]  something in a timeout, it's not going to error, um, or an event handler, it's not going to error. Cause those are untracked contexts
[05:00:42] . It's not going to error. But if it's just like specifically for components, if you, if you top level access something, they're going to force you to
[05:00:50]  untrack. Yeah. Do you, do you, do you, do you follow what I mean? Compiler stuff would require being aware of what's the component,
[05:00:59]  but that's where stuff's heading. Like, it's just interesting. Like I'm, I'm less comfortable with the compiler thing. Cause it requires you to know
[05:01:09]  what a component is. I mean, yeah, I, I'm, I'm just throwing this out here to see what people think. I obviously I'm getting some positive
[05:01:17]  feedback in the, in the, in the chat here, but this is kind of like the question, right? Like I, what always bugs me about this stuff is incons
[05:01:28] istency, right? Cause sometimes you do want to, to access values and untracked context. In fact, a lot of times you want to. So it
[05:01:38]  is kind of interesting. Um, like the special case, the components. And say like, no, components are the one place for untracked context that you can't
[05:01:50]  track. that you, that you can't like, you can't do, do that. You know? Right. Exactly. Right. We, we'd have,
[05:02:07]  you now go the other way. You're like, no, you have to explicitly untrack it. With this untrack mode, you're forcing all of
[05:02:15]  us to, no, no, no, I'm not doing that. It's still untracked. I'm forcing you to manually call on track. If you want
[05:02:23]  this behavior, what I'm saying is top level stuff doesn't track. But if you, if you, if you were like, um, const static count equals, you
[05:02:35]  know, and you listen to count here. If you did this, see Linter rules complains. It should be. Yeah. I'm suggesting that this. I
[05:02:55]  think one of the interesting thing, like, yeah, I'm suggesting that like, this actually is an error unless you do this. And then now you're saying, hey
[05:03:10] . See, ESLint is, is doing an improper, uh, what's going on here? Oh, I didn't import it in track. Yeah. Sorry.
[05:03:27]  But yeah. Oh, that's why. Okay. Yeah. So you see what I'm saying? Yeah, yeah, essentially. Yeah. That, that, that
[05:03:46] , that's essentially it. Except. Yeah. That's it. Yeah, but it doesn't, it doesn't actually matter on track has a shortcut. Like.
[05:04:06]  Thank you. The interesting thing is, they don't... I see your argument, but the thing is, because this is a completely illegal state, they don't
[05:04:51]  know... The behavior of accessing it outside has no defined behavior. It's not untracked or tracked. You just say, look, you can't access reactive stuff
[05:05:12]  in the top of a component body. If you want to, you either have to use it in JSX or you have to say, I want it untracked.
[05:05:21]  It's an error, essentially. I don't think it's misleading. I think it's like... As I said, this is radical. I'm just throwing this
[05:05:28]  out here. We'll probably RFC this stuff and get more feedback. Yeah. So, yeah. Obviously, people here say they like it, but you can understand
[05:05:46]  that this... If we just came in with this, this is kind of a breaking change, eh? You know? I do think, actually, top level on tracks
[05:05:57]  are fairly uncommon, but I could be completely wrong, right? But, yeah. It's interesting, isn't it? Yeah. Just give me a way to opt out
[05:06:06]  of it. I think this is the thing. Are we gonna have to go the React path and add strict mode? Or you mean opt out of it like an ES
[05:06:16] ... Or like... Yeah. See, the problem is I can't... Here's the problem. What I'm talking about right now is a runtime mechanism. I can't
[05:06:25] ... You can't opt out of it. Okay. Make a top level of state in either tracked or untracked. Yeah. Well, no. It's...
[05:06:42]  It's... Yeah. It's not gonna be actually untracked. It's gonna be actually an error. That's... That's what I'm saying. But,
[05:06:47]  yeah. I mean, we'll have more discussions. This is just the kind of thinking that I... That... Yeah. Yeah. Yeah. Yeah. Yeah. Yeah
[05:07:06] . Yeah. Exactly. What I was thinking along that side is not per line, but like strict mode, right? Like, React, you pull in a component, wrap
[05:07:16]  it around your root, and now you're in strict mode. I don't know if that's the best pattern for it. But, yes. This... This... Fab
[05:07:27] io is the approach that I'm... That I am thinking about. Something like a global. I don't think you can do it per line. Yes. Basically.
[05:07:38]  Yeah. And anyway. I... I'm... Yeah. I... I... I... There's no way we could introduce this. Like... Like all... Like...
[05:08:03]  Something like that without... Without... Like... I think it would probably be pretty brutal on the ecosystem. But I... Um... It's... It's an interesting idea.
[05:08:12]  Introduce it tomorrow. You guys are hilarious. I'm... I... I'm... I'm just... I'm just throwing this kind of stuff out here. Because
[05:08:23]  this is... This is... This is where my thinking is at. Because... There's a couple benefits. What this does... Is... Opens up space for future comp
[05:08:34] ilers. Because we remove ambiguous behavior. This means that in the future things will be more optimizable. Um... It makes a clear path for people... It makes
[05:08:46]  a clear path for people learning. I think I... Despite what Dan is suggesting right now. I actually think that this removes a lot of ambiguity. Um... Like...
[05:08:59]  Like... And it... Like... Yeah. It's... My... My biggest concern... Is that... Existing code bases we didn't have this restriction on. So
[05:09:16]  there's no way we can force this on people. Right? That's... That's basically the... The gist of it. The idea is that like... New
[05:09:29] er solid stuff would... Perhaps... Take advantage of this and like it. But as I said... This is... This is still very much just a... Idea that I'm
[05:09:37] ... That I've been like... Playing with. What's the best API for reading? Value... Uh... I mean... It's a loaded question. The only...
[05:10:01]  Honestly, there's so many different... Variations on this... That... It's hard to say. Obviously, I'm gonna say that solid's version is the best version
[05:10:09] . Because that's why I chose it. I... There... There's been no new APIs... That I've seen... That I hadn't considered when I chose solid's
[05:10:20]  API. So... I... I'll say that. The only thing that I have any opinion on... Is that the getter should be a function. Um... I'm
[05:10:29]  not a fan of dot value. For like... Mechanical reasons. But TypeScript suggests that I should be. So I... I think that's about it. I
[05:10:40]  think that's about it. I think that's about it. I think that's about it. I think that's about it. I think that's about it. I
[05:10:45]  think that's about it. I think that's about it. I think that's about it. I think that's about it. I think that's about it. I
[05:10:50]  think that's about it. I think that's about it. I think that's about it. I think that's about it. I think that's about it. I
[05:10:55]  think that's about it. I think that's about it. I think that's about it. I think that's about it. Yes, you're, you're
[05:11:02] , you're right. And this might, this is something that requires future, like more further thought. It's just, this has been, if you've been watching this
[05:11:11]  whole section of the video since I started talking about this stream, like, there is an interesting, like, you're right, I don't actually like this particularly.
[05:11:21]  Um, but it has interesting implications, like, I'm not surprised when I suggested it, that this would have a lot of support on the stream. Yeah, I mean
[05:11:32] , there, there, there, there is an interesting thing there, though, the thing that I was just talking, talking about, though, is, uh, is a
[05:11:48]  runtime mechanism. So, like, if it's not an error, it would be a warning. Do you know what I mean? Like, and that, that's
[05:11:56]  a one, that's another way we can do it. We literally just warn people. Um, you know, it can be annoying, just like the create root one.
[05:12:03]  So, yeah, I mean, I, I can't make these decisions by myself. I just wanted to facilitate the conversation here, because I think it's an interesting one
[05:12:14] . Right? Yeah, it's interesting, because I feel like, um, I feel like there's a shift now where people think that the warnings are almost worse than
[05:12:27]  not having the warnings. Like, it's better to take a hard line stance. Um, so, yeah, it's interesting. I'd say carefully because I know
[05:12:38]  it's a small decision, but when it gets big, you can't break things fast anymore. Exactly. Which is why I've been very careful to this point, you
[05:12:49]  know, trying to, like, you know. But as I said, these, these are just, these are just interesting ideas, um, at this point. I
[05:13:07] , I am aware that the people who, who've chosen solids so far, um, like, people are building real applications on it. So it's not like you
[05:13:19]  go and cause them pain. I have no interest in doing that. We're way too early days. In any case, I think that's enough of a conversation about this
[05:13:31]  for now. I just want to kind of like put out there kind of sort of thinking, um, about this. Cause, um, it's very clear to me
[05:13:41]  that perceptions on this, on this sort of thing have changed drastically over the last couple of years. Anyway, I don't know. I think, I think I'm good
[05:13:51] . I was not intending this to be, uh, um, such a long stream, but, uh, here we are. So anyways, um, yeah,
[05:14:03]  I'm, I'm, I'm, I'm, I'm, I think I'm going to call it here. Yeah. Yeah. Yeah. Yeah. The timing
[05:14:26]  of solid start is definitely in my mind as well. Yep. Thank you very much. Have a good weekend, everyone. Thank you for joining me on this long r
[05:14:36] anting, rambling of a stream. Um, all right. So.