---
showLink: "https://www.youtube.com/watch?v=6RIPfwxj24s"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "JavaScript Frameworks in 2023"
description: ""
publishDate: "2023-01-07"
coverImage: "https://i.ytimg.com/vi/6RIPfwxj24s/sddefault.jpg?v=63b71818"
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

[00:00:00]  Hello everyone, how are you doing today? Sorry to not forget about you all. I was just you ever get that thing where you're like at the end of your
[00:00:08]  day, and it's like almost five and you're like, I just got to finish this last little thing. I was like that a moment ago, because I was working
[00:00:17]  on a pretty cool demo, I have to admit. And I was just like, I know I can finish this if I have a second I was, I was like,
[00:00:27]  just like so, so so close. To finishing this demo that I had to push it and get it out there. So I apologize for being late. This is also
[00:00:36]  true. This is this is this is the important part here. This orange juice. All right. How's everyone doing today? Yeah, how is everyone doing today? This
[00:00:58]  could be a fun topic. There's so many ways and metrics we can like look at JavaScript frameworks and in terms of just kind of like understanding, like how do you make
[00:01:08]  any kind of decision on them. And I have to admit, hanging out with me today might not make any of these decisions easier for you. The truth of everything,
[00:01:19]  obviously, is like the it's complicated or, you know, it's nuanced or whatever. And there's different people are gonna have different reasons for talking about different frameworks and
[00:01:29]  different solutions and tools and what to use. And for me, what overwhelmingly led to me wanting to do the stream today was that I don't know, I just saw
[00:01:43]  a lot of takes out there and a lot of things where I was like, I don't like from where I sit. And again, everyone has their own levels of
[00:01:49]  depth. I was just like, it's, you know, missing some important details or not really, you know, understanding, you know, in our way, the a
[00:02:00]  lot of the like nuances behind, you know, the thinking, the direction, you know, the alignment of these frameworks of what you're trying to do. Right?
[00:02:12]  Like, we can we can go like, oh, compilers are cool. But like, what does that mean? And that's a bit why I wanted to talk
[00:02:18]  about this, because, you know, the new year is always like the time of hot takes the time of, you know, everyone's got like their picks and reflecting on
[00:02:27]  the year and it's good. As I said, I listened to several podcasts and looked at several things the last couple of days because like, it's a time when
[00:02:36]  everyone starts reflecting on where things are at and what the future is going to look like. And I find that really interesting. It's also interesting to me, personally, I
[00:02:45]  would have loved to get an invite on some of those podcasts because I feel like this time of the year is probably when what I have to say is the most relevant.
[00:02:56]  Because what what everyone who watched stream knows what I do, I just dissect every tool in the space, that's what we do, I just look across the board, look
[00:03:07]  at all the frameworks, look at all the tools and figure out how they work and what they're doing and what's behind their motivations for doing those things. So for
[00:03:18]  that reason, yeah, I'm pretty, I'm pretty stoked to be here and talk about this. Yes, people saying hi in the chat. Yeah, I'm due
[00:03:26]  for another FS Jam. Yeah. Yeah, and okay, here's the thing. I mean, there's no way this isn't going to be an Excalibur
[00:03:36]  stream to a certain extent, right? Like, but what Theo tried to do, this is something that I recognize. As soon as he started, I'm like,
[00:03:46]  oh man, this is ambitious. Like, he's going to be, he's going to be like trying to find the framing he wanted because I understood what he was trying
[00:03:52]  to do. If anyone hasn't checked it out, Theo's JavaScript framework stream the other day was pretty good. He'll probably release a video coming up. And for
[00:04:02]  him, it was, he was framing stuff on how him as a average, practical, pragmatic developer, how he is going to choose between stuff. He didn't cover every
[00:04:14]  framework. He didn't, you know, he skipped a whole bunch of them or didn't mention them or just kind of like they didn't fit into his graph because he
[00:04:21] 's like, look, ultimately, end of the day, I'm going to make a product and the type of products I look at and the kind of considerations. He
[00:04:27] 's like, he tries to expand his bubble a little bit further where he's like, okay, look, if I was this person in this case, I would kind of
[00:04:33]  go this way. Or if I, this person in this case, I'd kind of go that way. And I think that that's a difficult task to do because it
[00:04:41] 's a, it's a categorization problem. But, and it's framing it in terms of users, which is probably the most useful thing. I'm probably not going
[00:04:50]  to be so ambitious. I think where I sit right now, I don't have the authority to be able to do that. Anymore, because my biases and my
[00:05:00]  interests no longer, I've worked to the last few years, very close in the framework space that I feel like I can't, I can't as clearly articulate that position
[00:05:12]  from like a practicality use point standpoint, as someone like Theo would. I do have some perspective on that. I don't know. I do feel sometimes like when
[00:05:25] , when I, when I'm working in the framework space that strangely enough, I'm a bit of an oddity, mostly in that before I got into this and JavaScript
[00:05:37]  frameworks, I almost had two decades of experience in the industry. And that's, that's kind of a different, should I say, like framework authors and stuff are
[00:05:46]  usually the really young, smart people who like are brilliant and they're working on the hard problems and they're figuring out the space. And I was just this senior engineer
[00:06:00] , engineering manager guy who just really liked reactivity. So, um, my perspective is a little bit different and that helped me design the stuff I did for SolidJS
[00:06:12] , but it also means that like, now that I've been on frameworks pretty much for the last three or four years, three years now full time. Um, I
[00:06:20] 'm, I'm, I'm, I'm, I'm not as up to date on like best practices in a react app. You should ask Theo for that. You
[00:06:29]  know? Um, but yeah, I mean, just to kind of frame the conversation here. Um, yeah, I'll talk about it. This is why I was late
[00:06:39] . Um, I, we will talk about that. Um, yeah, I'm hoping people get some kind of value through it. Do you have a reference to Theo
[00:06:50]  talk? Uh, it's probably on his Twitch channel still. The, I don't know if he takes his stuff down right away. He's, he, Theo is
[00:06:56]  a content guy, right? And he knows the power content. So generally he'll stream it and then he'll produce really good content out of it. So I don't
[00:07:04]  know in the intermediate, how much of his stuff's available. I mean, Okay. Mishiko Hevery is, is, is not a young guy. Right
[00:07:15] . Um, but, uh, Mishiko Hevery, I, I also feel like, uh, yeah, I mean, he's, he also had angular for
[00:07:25]  that. Like he was already in the framework game, um, before quick, you know, um, All right. Yeah. VODs on YouTube, but un
[00:07:39] listed. Okay. Yeah. So that's a little bit tricky to find. Cause he doesn't, he does it on purpose too. I think now, cause he doesn
[00:07:45] 't share the YouTube channel link when he just goes live. All right. Um, anyway, uh, let's actually tell people we're live. I know you guys
[00:07:58]  know that I'm live, but other people might not know that I'm live. So let's, I usually just ramble a bit here at the beginning. Cause I
[00:08:04]  like to, uh, uh, I like to make sure that people get patched past those annoying Twitch ads. Um, actually I'm going to share my screen. I
[00:08:17]  didn't, I rushed in here. So fast that I didn't even do that. And these really agnostic ad software removals. All right. Okay.
[00:08:26]  All right. Let's, let's, let's, let's go to my profile. So I don't accidentally leak out some secret tweets someone made. Um, but
[00:08:34]  yeah, let's, what do I advertise this one? This one. Yeah. And just to talk a bit about the image for this, cause I got drew some heat
[00:08:43] . Um, Um, this is, this, this image is actually something that, uh, I was kind of playing around with as an idea and I pitched it to
[00:08:58]  David, uh, who runs the solid community and he like just did it for me. Um, and, but this was not recently, this was like almost two years ago
[00:09:09] . I think it was like a year, a year and a half ago. Um, And basically I, I, I, I just like went with it. I
[00:09:22]  was like, wow, this is really cool. You know, um, I, I basically was just an idea I had. And then I wanted to use it to
[00:09:29]  promote a few different ideas, like web, uh, mostly astro, but then, uh, as it turns out, everyone's been telling me that that's the angular
[00:09:39]  JS logo, not the angular, like not the angular two onwards logo. So I apologize to anyone from the angular community who was like, what's going on here?
[00:09:49]  Or put off. I have to admit outside of the angular community. Probably almost no one knows that the logos are almost like they are similar enough to actually, you know what
[00:09:59] ? Look, look, let's just look here. Oh, sorry about that. Back stream. You guys probably can't hear that. All right. Cool. Um
[00:10:09] , I was just hoping Twitch to make sure that I actually see everyone in Twitch. Um, cause sometimes that does not, that does not happen. Um, I don
[00:10:20] 't get, I don't, I don't see subs and stuff through the, through the, through the channel. Sorry. What I wanted to just put out here is
[00:10:26]  look angular. Let's search for angular. Okay. This is the angular logo. This is the angular JS logo. Right. A designer will tell you that these are infinitely
[00:10:36]  different. Um, or maybe top, you know, anyway, sorry about that. No, angular isn't dead. Not, no, no, no, not,
[00:10:55]  not, not thing. I mean, it's, it's funny because at this time of year, this is the kind of hot takes that everyone's going to have.
[00:11:02]  I mean, you do have to look about trending up and trending down in terms of mindshare, but like angular still firmly holds like, uh, like on NPM
[00:11:11]  downloads. I think, I think view and angular have been like on par, like for ages. Um, unfortunately we can't use NPM downloads. We can't
[00:11:18]  use NPM downloads anymore because the stupid view and felt, uh, spike of this year basically mess that up for us all, you know, go here and you're like
[00:11:27] , okay. Yeah. Uh, was it, was it NPM trends or something? I can't remember the name of the site. Yeah, sure. Let's go
[00:11:36]  in here. And you're like, okay, I'm going to look at react because it's a, you know, everyone uses react. Okay. This is the Christmas
[00:11:42]  drop. It happens every year. Don't look too much into it. Um, And then you're like, okay, let's look at view. And then it
[00:11:53] 's like, this is, this is, uh, this is, this is just messing with everything. How about, how about Svelte? Um, and then
[00:12:05] , uh, most people are aware of this, but like NPM downloads for stats have kind of gone, are kind of, are kind of lost because of this. It
[00:12:16]  just, it's, I mean, you could kind of interpolate because when the, when the blip goes away, they continue back to where they were. Um,
[00:12:25]  and honestly, the other thing about NPM downloads is if you put react in the graph, no one else is even showing up here. Um, let's put angular
[00:12:33]  in here at angular core, I believe. Oh, okay. Yeah. See, look, here's angular. See angular and view are basically just sitting on top of each
[00:12:43]  other. So I don't know what kind of indicator this is of anything. I just want to point out that angular is not dead. All right. All right.
[00:12:56]  But we'll talk about angular today. Cause it's one of the things. And that's, that's, that's the question. How do we, how do we
[00:13:01]  frame this conversation? Right. And will there be Excalibur involved? Um, and the answer to those questions is both. Yes. Yes. So, um
[00:13:12] , yeah. How are we going to frame this? Well, to me, there's two ways I can attack this, this, this, this question. And one of
[00:13:22]  them, the obvious one is just talk about what's going on at, in each framework. The other one is to talk about areas of interest, right? And I
[00:13:28] 'm also going to pull up at this time, just in case anyone hasn't seen it. Surprisingly, I got, I got like a tiny bit of a story behind this
[00:13:37]  one is I wrote an article on December 29th. Um, and it's about to eclipse my, um, my most viewed article. Um, it's my most viewed
[00:13:48]  article. Um, it's my most viewed article on dev2, but it's about to eclipse my, uh, my GS performance article from a couple of years ago,
[00:13:54]  um, on medium. Um, on medium. And the funniest thing is I wrote this article just because Theo was like, what's your best article this year? And
[00:14:02]  I'm like, I looked at them and I'm like, these are good, but they're not like that good. I'm just going to write a new article and
[00:14:07]  that one can be the best article. Um, obviously you don't do that. Like the day before everyone's trying to like compile things, but I did. And apparently
[00:14:15]  it is. So, um, the, the, the, I'm going to, I'm going to talk a bit about the stuff in this article as well to kind
[00:14:23]  of frame it. Because this is, this is, this is where I wrote down, you know, a few days ago. Um, a lot of my thoughts looking
[00:14:30]  to what the past year has looked like. Um, and where we're heading to, um, next year. All right. How are we doing so far? We are
[00:14:39]  15 minutes in or so, and we've got some people in here. All right. So I guess it's fair to say before we get into like 2023, we
[00:14:57]  should talk a bit about 2022. Um, and the, the truth of the matter is if, if, if, if we're going to like sum up 2022, we
[00:15:09]  have to mostly just talk about the incredible things that have happened on the, uh, uh, meta framework side, right? Everyone's released a meta framework. Server rendering
[00:15:22]  has been the focus. And I think that's been obvious. It's been the focus for a couple years now, really like the difference was like through 2020, 2021
[00:15:32] , there wasn't such a feeling of like things getting there. We all knew like there's a goal it's out there. Like it's coming and 2022 actually saw
[00:15:43]  most things arrive, right? Yes. December, 2020 was the first RC drop. Right. And I, and I, I expected that some people thought in 2021, we
[00:15:52]  would see that, but the truth of the matter is, I mean, and that this is a whole other topic. I don't, I don't, I almost
[00:15:59]  made the stream today about react server components again and server components again, because I've, I've been, I've been diving very deep to understand all the trade-offs
[00:16:07] , all the context, all that kind of stuff, because, um, I've been, as you guys know, the, the solid version of the server components demos is
[00:16:16]  very, very, very impressive. And I, I want to make, put that in everyone's hands, but it's an experimental right now. Cause there's a
[00:16:22]  lot of questions around some of the edgier cases. So I've been exploring a lot and coming to like even new res, uh, new, what's the term
[00:16:30] ? Sorry. Like new, um, revelations that I wasn't even aware of at the time that I talked about next last time, or even when I demoed a
[00:16:39]  solid. So I've got a lot more to talk about server components, but that's not probably the primary focus for today. Um, though it might come up, but
[00:16:47]  yeah, the thing is, I like this mention because how is it that it's always react because it's the big player that actually causes the move to happen. The
[00:17:00]  conversation on SSR began maybe with next and, you know, react kind of back then, but the actual shift to like, not SSR as an add on, which
[00:17:08]  is kind of like how you might view it in most single page apps. You just go like, here's my single page app. Now I SSR it, but actually
[00:17:15]  as being a first class citizen, obviously in the mainstream thinking also showed up around 2020. So like how, how, how, how do we, how do we,
[00:17:33]  how do we like, it took react to actually like push people and go, Oh, there's something here. But like, if you just look at it, like Jason
[00:17:43] 's article about islands showed up in 2020. It's already on thought leaders minds. My personal story, as many of you might remember is in March, 2020, I
[00:17:51]  joined eBay to work on Marco, which is a server thing. Like you could tell that the shift was happening. When did Misko leave Angular to work on quick also around
[00:18:03]  this time. I, I, I don't have the exact dates on it, but if I had to guess it was late 2020. So, um, this stuff
[00:18:13] 's been in the, in the works for awhile, but it hasn't really been realized until now. It takes like, I've been telling everyone, it takes 12 to
[00:18:21]  18 months to write a meta framework. Like we shouldn't be too critical of, of Svelte kit's time, you know, to release other than maybe the fact
[00:18:29]  that, um, rich slightly underestimated, but like, that's how, that's the work it takes. Oh, you guys are talking about me preambling.
[00:18:40]  Yeah. Sorry. Redwood took three years. Yeah. And the funniest thing is I bet the more opinionated you are, the more, like the more, this is
[00:18:51]  true. Right. It's like, this is like, this is like a huge challenge. And I mean, this is a whole other tangent. I don't want
[00:18:58]  to go too far down, but like the more opinionated you are, the slower you move. Right. And I mean, this, this is one of those, like
[00:19:07] , this is one of those, this is one of those challenges. Right. Because like the, in a sense, the more value you bring to those people, but
[00:19:17]  the thing is the opinions on the edge, like the things that you have to build up to are the, are the things that change the quickest. So you're both
[00:19:27]  the slowest to move and you're subject to the highest volatility, the further you take the opinions. So it's, it's, it's, it's one of
[00:19:35]  those very challenging things. Six months. Yeah. Yeah. Yeah. Yeah. I, I, I, yeah, definitely six months. Yeah. Uh, it was,
[00:19:42]  it's analog, right? Yeah. I was going to mention analog today when we talked about angular. Um, we had the, yeah. Okay. Sound deployment integr
[00:19:52] ations. I mean, there's that. These things have gotten easier. Thanks to Vite. Thanks to other people all working on the exact same things. What do
[00:20:06]  we got here? Maple? Uh, I haven't read this yet, but I trust anything you say. The amount of work it takes to actually solidify a metaphor and
[00:20:12]  cover all the use cases. That's the reason I haven't made my own yet. I also lack back in infinite knowledge. Yeah. Yeah. So, yeah. I
[00:20:20]  mean, this is, this is, this is like, uh, this is a long time. Yeah. I'm, someone was asking about Astro too. I mean
[00:20:27] , I Astro came out, I want to say February, 2021. If, if my, if my memory is correct. So like, Um, you know,
[00:20:37]  I, I, I think this is all like just kind of putting this into perspective of what the last year has kind of been like. Um, for me personally, I
[00:20:46]  talked about a few topics. I talk about hydration. I talk about the new routing stuff that I've been working on signals everywhere and typescript driven development. And the funny
[00:20:57]  thing is these topics are still the topics that are, that are going to come into 2023. So let's, let's get to Excalibur and kind of like
[00:21:04]  talk a bit about what are the areas that are going to come into 2023. that are like moving in frameworks, you know, we'll just make a list at first
[00:21:09]  and then we can kind of decide what we're going to do with it. But like, like this, this kind of helps frame our discussion today. Right. Cause we
[00:21:16] 're going to be like, okay, uh, JavaScript frameworks. I don't want to call it. So it's not like areas. It's like, like it is
[00:21:26]  areas. We'll figure out if there's a better word for it, but okay. What do we got first? I think the first area we should talk about,
[00:21:33]  um, it's not even talk about, I'm not gonna put these in any order actually. So let's, but yeah, um, these are things that we,
[00:21:40]  we, we, that are our topics. Um, there's stuff like, uh, update models. Okay. Stuff like rendering performance. Stuff like async consistency.
[00:21:58]  I I'm going wide here. These, these are, these are things I just want to kind of collect everything that everyone's working on right now. server rendering performance
[00:22:13] , um, hydration performance. Yes. These are two different things. Um, and then maybe something around compilation. Cause that's a buzzword people like to talk about.
[00:22:24]  And I also want to talk about like tooling integration pieces. largely about typescript, but just kind of understanding. I think that let's see if anyone else for the
[00:22:36]  chat has any kind of ideas here, but I think this is generally like what we're looking at as kind of hot topics, um, in JavaScript frameworks right now.
[00:22:47]  Right. So integration with react. Uh, yeah. I mean, resumability is, is hydration or not hydration. I mean, it's part of that same thing
[00:23:05] , right? Um, yeah. And there are, don't get me wrong. I told you at the beginning, I'm not picking the list of things that you should
[00:23:15]  consider for choosing your framework. I'm talking about, about what frameworks, like what the, what frameworks are doing. Like a lot of people are processing. They're
[00:23:26]  like, are they twiddling their thumbs to like react? Didn't do anything for like five years, right? Like it's, it's not, it's not
[00:23:32]  true. Um, and these are areas that these are feature and technology differentiators. We'll talk about the other aspects too. Um, as we talk about this framework specifically
[00:23:42] , but I just want to highlight some of the topics so that when we, it's, this is almost like our, our glossary. So that like, when
[00:23:48]  we go and talk about the individual frameworks, you guys have, you know, we've ever framed a bit of an understanding of, of like what these areas are.
[00:23:57]  Right. Yeah. So state management is part of update models from my perspective. Um, that's what I mean. When I talk about, when I talk about update models
[00:24:06] , I'm talking, I'm, I am talking about state management to, to, to, to a degree, right? So let me, let's, so
[00:24:13]  let's elaborate on these a little bit more so people can kind of get a better idea when I mean, yeah. So when I'm talking about update models, I want
[00:24:18]  to talk about signals. I want to talk the impact of things like, like, like signals. I, I, I mentioned this in the blog post. I thought this
[00:24:25]  was really quite an awesome tweet for those who don't know, you know, getting some angular love. Angular love again. Uh, Powell Kozlowski is a
[00:24:33]  core Angular team member works, works for Google. Um, and wrote this signals are the new VDOM. There's an explosion of interest. Many people are trying things
[00:24:43]  that will let us explore the space, try different strategies, understand it, and optimize things. Not sure where we're going to settle in the end, but this collective exploration
[00:24:49]  is great. That is a statement, right? That is a statement. And again, it's, it's from the core team member of Angular. I have learned
[00:25:01]  not to sleep on Angular recently. I know, I know everyone in the React community kind of likes making it, you know, butt of the jokes a little bit. And
[00:25:09]  I can see why. And when we talk about Angular, people might see why. But here's the thing. If I had been paying attention to Angular in 2019,
[00:25:22]  I would have known about resumability before having to basically completely with the Marco team, we basically rediscovered ourselves about a year and a half later. And when I
[00:25:32]  say we, I mean, Michael Rawlings, the guy's a genius, but like, essentially, Angular was not on my radar. And I'm, and I missed
[00:25:42]  a very important technology that we basically had to discover it ourselves independently. And I feel like that would have saved us six months of, of like, thinking and working through
[00:25:54]  problems. If we had seen Mishko's talk from ng-conf 2019. So I just want to kind of point that out there. Don't get me wrong.
[00:26:08]  On the other hand, side of things, Angular might be on the metrics that I like the things I talk about. here. Like when I talk about like where progress
[00:26:18]  and innovation is happening. Angular might be one of the furthest behind, generally. Right? So yeah, I just want to talk about signals. It might be worth talking
[00:26:30]  about like, state management. I'm, I'm going to call it atomic state management in React. Atomic state management. There are similarities to signals. I feel
[00:26:44]  like, I feel like these are both suggesting the same kind of thing. Right? So when I talk about this, I'm talking about Jotai and recoil.
[00:26:52]  These are not the same. I have a whole stream on how these are not the same. Um, and, and the funny thing is, this ties into rendering performance,
[00:27:01]  because on the DOM side of things, just just for clarity for anyone kind of following along here, rendering performance has like not changed in like six, seven years, when In
[00:27:09] ferno like came in and was like, we're way faster than everything else. Nothing. Nothing has really changed very much from that. Solid added a couple things that
[00:27:18]  improved, um, performance. Uh, from the raw standpoint, you have to understand what's a benchmark like JS framework benchmark. It's, it's, it's
[00:27:29] , it's, it's, it's more about the DOM overhead than it is about like the, the cost you in impose by, uh, um, how do I
[00:27:37]  say about it? The cost you, you impose by, by like you writing your end user code, like optimal VDOM, uh, written code and optimal, any
[00:27:48]  system code is going to perform relatively similar as long as the engine underneath it is pretty fast. So it's, it's, it's not that, but, um
[00:27:58] , there are places where you can still optimize, obviously. Um, and we've covered this on stream, uh, a couple of times, both in the, my last
[00:28:09]  stream about reactivity and rendering. We also covered this, um, when I showed how to use preact signals to make a solid like renderer and show how like it
[00:28:17]  significantly outperforms preact or preact with signals. So like, but there's efficiencies and inefficiencies everywhere. So I'm going to talk about this
[00:28:28]  cause I think just to kind of put it out there signals for rendering performance in VDOM is an interesting topic. Again, I'm, I'm highlighting this. I
[00:28:38]  don't going to spend a ton of time on this today, but I'm going to use examples like preact and quick are good examples where you can kind of like get
[00:28:45]  very, um, specific optimizations. Out of this, um, rather than like, uh, yeah, anyway. So I think, I think this, the other
[00:28:54]  place of this is no VDOM. And, and I think, I think that we were seeing stuff like view vapor that, that, that is heading this way.
[00:29:05]  Okay. So we're going to talk a bit about rendering performance in, in this thing, async consistency. What am I talking about? This is not a new
[00:29:12]  topic, but I think, I don't know if there's been a ton of movement here, but I think suspense transitions can current mode are all parts. And most
[00:29:23]  frameworks have some of, some of the tools here, but not all of the tools here. So I'm just, this is, these are areas that people are, are
[00:29:31] , are working on. When you bring async into a framework, you have some very serious decisions to make. Yeah, but the, the, the, the,
[00:29:48]  the funny thing is, this is not going to, um, react's not going to let you forget about it. Right. Um, yeah, I mean, this
[00:30:08] , this, this, this, this, this, this, this is a very good point. The fastest VDOM libraries don't use signals. It's, it
[00:30:16] 's, it's that simple. Right. Because each has a trade-off where they're like more expensive. So, and, and it's, it's easier to
[00:30:27]  remove stuff than add stuff, so to speak. So like essentially you can add something to improve one other area at the cost of somewhere else. Generally speaking, ultimately,
[00:30:41]  going one way or the other is, is, is actually going to be the best for performance. All right. Uh, server rendering performance. Um, string rendering is a
[00:30:55]  thing. This is like, instead of using a VDOM, you can render to string. Um, I'm going to mention, obviously, solid, svelte
[00:31:04] , have been doing this for years. But Qwik and Preact added this, this, this past year. So it's a big one. Improved
[00:31:13]  server rendering performance. Um, uh, but, and the other one I'm going to talk about here is, I think we should mention is streaming. Right. Streaming
[00:31:24]  is, um, the ability to, uh, control how your pages serve back. And we've been seeing a lot of frameworks add streaming support. Uh, again,
[00:31:35]  I've covered almost all of these topics in, in, in other streams. Um, but I just want to kind of point out, these are areas that people are working
[00:31:47]  on. Right. Um, solid added streaming in 2020 or, and then react added in 2022. And we're seeing it quick astro. A lot of solutions
[00:32:01]  are adding streaming, um, hydration performance. We probably want to mention, uh, what, what should we mention here? Actually, you know what? There's, there
[00:32:11] 's more on the server running performance. I mentioned streaming, string rendering. Um, we should talk about, we should talk about edge and caching, right? Street
[00:32:22]  hydration performance. Um, obviously islands, uh, server components. Resumability. And funny enough, I think routing is actually a next frontier on the, on this
[00:32:45]  sort of stuff. What's going on in Excalibur? Can I not scroll? Yeah. Okay. Sorry. It's, I'm getting, this list is
[00:32:53]  getting too long, isn't it? Okay. And then compilation. This, this is a tool. I, it's, I don't think people should be, uh
[00:33:06] , the only thing I really want to say about compilation is it's everywhere. It's, it's a tool. Essentially. It doesn't, it lets us do
[00:33:16]  some stuff ahead of time, but in it, in itself is not like, it's not the paradigm. Everything that gets compiled runs something. So I might just leave it
[00:33:32]  at that. And then tooling integration, um, another area of focus frameworks, a lot of stuff is like getting better typescript support. We've seen in the past
[00:33:39]  couple of years view and Svelte just get way better in this area. Um, but we're, this thing, this, this is including into like automated stuff.
[00:33:47]  Like it honestly, like stuff like what TRPC is doing right now for refactors. Like when you change, um, um, schemas and stuff is insane
[00:33:57] . So people are working on like, on this kind of type stuff. I've been seeing a lot of like auto generation type stuff based off Zod schemas for forms
[00:34:07]  and all, all this kind of stuff. So I very, very quickly here went, went through a list of what, where I see from a JavaScript framework standpoint,
[00:34:18]  a lot where, where the work is happening. And I've bucketed it into, um, uh, into these kind of categories to help me at least be sane about
[00:34:31]  this. Yeah. How are we doing chat? I've been, I've been, I've been just running my head off for a few minutes. Um,
[00:34:42]  yeah, how are we doing? Sorry. Just, it's just catching up with, with all that. Make sure that I didn't miss any, any subs like day
[00:34:51]  dev subscriber prime. Thank you very much. Um, yeah, I don't have mods. So I'm like the worst, like people would've got code monuments subscribed at
[00:35:07]  here one. Thank you very much. Um, you troll like subscribe to the prime as well. Thank you. Thank you. I appreciate the, if you, for
[00:35:18]  those of you don't know, if you have Amazon prime thing, you can choose one, you know, Twitch streamer and just give them $5 a month and it
[00:35:26]  costs you nothing. Just use your prime subscription. Amazon gives you that for free. If you just leave it sitting there, you're, you're just losing the opportunity to
[00:35:34]  give someone money. All right. Cool. Cool. Cool. All right. What? Soggy as pizza. What are you guys talking? Okay. I'm
[00:35:53] , I'm, I don't know what, this is, this is what happens. I can't keep up a chat. People are talking about Google. This is
[00:36:05]  Marco's feature list. Oh man. I have often said that Marco may be the most advanced JavaScript framework. As we all know, that might not necessarily be the most important
[00:36:21]  thing, but yes. All right. All right. All right. All right. All right. All right. So let's keep on going. How do you fix
[00:36:30]  a soggy pizza? Seriously? Do you like put it back in the oven? Like you got to worry about the outside, like kind of burning while you're trying to
[00:36:41]  like deal with the extra moisture? Don't forget to mod me. Don't forget to mod me. I don't even know how to mod someone in Twitch. Let
[00:36:56]  me see. Where is AGC dev pin reply? I don't, I don't know how to do anything in here. Sorry. Okay. I'm not going
[00:37:20]  to get distracted by this right now. We'll just keep on going for now. Mod username. Thank you. See, this is, this is such an easy, easy
[00:37:28]  interface, right? Sorry. Give me a second. Hopefully that worked. Oh, okay. Hey, we got subscribes, uh, subscriptions coming in. Thank you
[00:37:47]  very much. Uh, um, Julian NG subscribed to tier one. Thank you very much. Ubuntu Riki, um, created, or sir, what else do
[00:37:58]  we got here? Um, I can't say that yet. Deal 458. Thank you. Thank you with prime as well. All right. Cool. There we
[00:38:14]  go. And less spicy baguette. I appreciate it. Uh, and. All right. Cool. All right. So the mod thing is solved. We're
[00:38:38] , we're in good place. Sorry. I am just a noob when it comes to this stuff. I don't know anything. Um, I, I, this
[00:38:44]  is part of me. It's funny. I did watch a lot of streaming Twitch over the years. Um, really enjoyed speed running. Um, not playing it, just
[00:38:54]  watching it. Um, and so that's how I got into Twitch, especially when my, my youngest was very young. You'd be up like late at night and
[00:39:03]  bright colors, super, a lot of, a lot of watching a lot of Super Mario Maker, a lot of, uh, Grand Pooh Bear. Okay. Let
[00:39:09] 's keep on going. Sorry. You guys are like moving on. Come on, move it on. Okay. Let's keep on going. Okay. Hot takes come later
[00:39:16]  after I like established the knowledge base so that everyone can talk on the same language here. Of course, many people who follow the stream usually are like, yeah, I
[00:39:26]  know all this stuff already. Ryan, you're just rambling like you always do. Okay. Okay. All right. So I think these are all interesting topics and I
[00:39:39] , I, and I think that not only this year, next year is going to be still about all of these topics. Um, because we don't know the extent
[00:39:50]  to which they will impact the JavaScript ecosystem, right? Like last year is really easy to kind of point out a lot of the hydration work because it's finally here, but
[00:39:59]  it's also like, if you read, read this stuff and I actually made a big deal about Tanstack router. I, I think this is really awesome. I
[00:40:07] 've seen TypeScript routers before, but they never felt like something I'd want to use, um, where this is actually quite impressive. But my big, my
[00:40:17]  big overarching prediction for 2023 was around not prediction, but thing areas that I thought in addition to 2022 that we wanted to kind of look at was complexity around server rendering hydration.
[00:40:32]  I think we're getting to a point where you're, you're going to go like, look, we can do all the things, but it's really hard to
[00:40:41]  determine like how much you want to have in mind when, when you have this authoring experience. Um, and what I mean about that is like, I've used,
[00:40:52]  I used all the experimental stuff this year. And when I say experimental, I mean, some of it's now beta and stuff, but I, I, I,
[00:40:59]  I was working on the Marco team, so I was using Marco six. I, I, I spent a lot of time in quick, everyone who's followed the stream knows
[00:41:06]  I've, I've, I've built one of the first like quick routing demos. I, I, I built many, uh, apps and over the year,
[00:41:13]  quicks DX one, like, like 200% improvement, right? I've worked with server components was involved in making server components for solid the thing that, you know
[00:41:24] , and I, and, and then I also got to play the Astro a number of times, um, and remix and Svelte kit and literally all of them
[00:41:31] . And one thing that I noticed is like, there's, there's a, there's a, there's a significant difference for the most part between stuff that's being
[00:41:40]  built currently off the existing spa plus architectures. Things like remix, um, and Svelte kit and even solid start where you can come in and you're like
[00:41:49] , this makes sense to me. I'm familiar with this. And the DX feels really good. It's like, it's like, there's been this kind of jump
[00:41:56]  up, you know, like, like next showed the way. And now you're like, okay, all the pieces that come together, we have mutation stories. We have
[00:42:01]  like a full picture here and we got to thank remix for this largely, um, for pushing a lot of stuff along this direction. But I have to admit it was going
[00:42:10]  to happen this year. Anyways, before I ever saw remix or Svelte kit saw remix, we were building this story. Um, it just so happened that remix
[00:42:19]  because they had react router and stuff had mo and because like Brian Florence is basically remade and remix probably like, I don't know many times over the last five years for
[00:42:28]  demos he's done in his talks. Um, they basically were able to get there first, but essentially on the meta framework side of things, the stuff on that side
[00:42:44] , it's very clear. Like how that DX story is improved and how, how it's easier now ever that it gets server side rendering full back in on the other
[00:42:56]  hand side of things, we start talking about react server components, solid islands that are, are island routing and, and quick in general. And Marco six and Marco six
[00:43:04]  and stuff, you start getting into the zone where you're like, I have to know these new concepts and you could argue you need to know that a bit with reactivity
[00:43:12]  and solid, but I mean, like I need to be very conscious of the server client divide and what it means and how it affects how I author things. And I
[00:43:22] , I made, I made, I made a remark here, um, in this article that might seem a little bit, um, I, I don't know. Some
[00:43:33]  people took, might not take it the right way. Right. Where I said something along the line and I haven't mentioned Astro yet because Astro is interesting, but
[00:43:43]  I, I, which I'll elaborate in a minute, but I said Astro and remixes returned to it's just PHP rails for MPAs and single page apps
[00:43:50]  respectively. Right. Astro is on the MPA side, remix on the single page app has been largely really successful. And I said, even if both lack the
[00:43:57]  benefit, important benefits of the, of more sophisticated solutions. And some people are like, what do you mean? You're calling remix, not sophisticated. And I was like
[00:44:04] , no, no, no, no, no, no. You have to understand that these solutions are like the entry level from the tech complexity side of things. They're
[00:44:15]  like, we're going to solve the most minimal part of that equation and show it to you. So in a sense, you could consider, you know, what quick
[00:44:23]  or Marco is doing as a more sophisticated version of what Astro is doing, or you can consider react server components, a more sophisticated version of what remix is doing.
[00:44:33]  What I was saying is once you get out of that side where things seem, you know, simpler, you're into a world of complexity where suddenly you're writing custom language
[00:44:43]  server plugins to make sure you can like understand when you're dealing with server components or, you know, and special linters and stuff or needing to like be very conscious.
[00:44:54]  It's just like, oh yeah, this gets serialized or this doesn't get serialized. Like this can't be let, it has to be a const because
[00:45:01]  it can't change. This gets hoisted. You know, this, this is a, this is a type of thing that can't be, you know, like once
[00:45:09]  you get into this zone, the complexity skyrockets. And that's why I'm, I've been like looking a lot here because I think 2022, we showed
[00:45:20]  what was possible, but we need to kind of like dial it back for a second and figure what's enjoyable. And you're going to see this throughout, throughout,
[00:45:29]  I, I, you know, I, I've, I've been seeing a lot of this messaging going around to you. Um, I didn't bookmark it.
[00:45:35]  Maybe we'll get to it later. So, uh, Manu main dev behind quick these days, what a great, uh, tweet thread talking about what he wants to
[00:45:43]  see in quick in 2023. And a large part of it is about DX wins. We've got some questions in here in chat while I'm going off. Uh,
[00:46:00]  the only person who's tried every framework that's on FSJAM. Yeah, maybe you guys cover a really wide range. I got to give you props there. FS
[00:46:11] JAM and PodRocket. I've always, I've shown my love to both of those podcasts and yes, FYI, I was on PodRocket last month
[00:46:20]  talking about SolidStar, talking about islands and server components. Um, it dropped today. So do check that out. Um, maybe I'll drop it in chat just
[00:46:33]  cause, um, uh, here we go. Let's just drop that in. This did happen. All right. Yeah. Yeah. And sorry, when I was talking
[00:46:53]  about tooling integration. Um, yeah, there, yeah, there's just so much stuff here. Let's, let's just keep on going. Um, so what
[00:46:59]  I was, what I was trying to say is that I think these technologies really are the future. Having used them, what they achieve is amazing. Um, but I
[00:47:12]  want to like have a sobering moment here for everyone who's chasing after, you know, these kind of hydration type technologies, um, in that we've tried some of
[00:47:28]  this stuff in the past. You, you, you gotta go back far enough, but in the mid 2000s, everyone was really keen on server side rendered technology because
[00:47:39]  that's what it was. It was .NET's, the PHP's, the Rails. And we're like, they didn't want to write JavaScript. Now,
[00:47:45]  our motivations for not writing back-end code in Go or PHP and doing everything in JavaScript might be different. But there, there is some commonalities here because part of it
[00:47:59]  is like, you don't want to have to deal with two different languages. right, and you might have been saying like for them is a losing battle because JavaScript is
[00:48:09]  the language of the browser, but they tried and we ended up with monolithic messes of crap update panels, view state, anyone who like I literally was the most miserable
[00:48:22]  time in web dev from my perspective, single page apps, like saved us from like this huge slough of complexity. Like it was just, it was so messy back
[00:48:32]  then, like the, like trying to write your C sharp code and, and then knowing that like some of it would run on the client only and then update and rerun
[00:48:41]  parts of it on the server and then being aware of those boundaries and, and keeping track of app state, view state, multiple different types of serialization patterns to communicate both
[00:48:50]  ends of things. And it's, it's, it's, it's, it's, it's, it was, it was kind of terrible. And when
[00:48:59]  I started seeing the movement into this zone again, I got, I was like, man, this is, this is, this is like not a happy place. And I
[00:49:09]  think we've done a lot to alleviate that, but we can't forget this because. As ambitious as we are, it's not like the people who are working on
[00:49:25]  those solutions are any less clever or any less, you know, motivated. So, you know, we do need to answer what's, what's, what's different this
[00:49:36]  time. And I do want to ask that question, and, and, and I think that's going to be the critical question on the, on the hydration side in
[00:49:46]  2023 is, do we believe that what could be shipped to the browser should be shipped to the browser? Eventually quotes or should, what, um, can run on the
[00:50:01]  server, always run on the server. And it's funny because there's a lot of people talking about, oh, MPA single page app, that distinction is melting away
[00:50:15] . But it doesn't necessarily melt away in a single direction is how it'd be. And I think there is still a fundamental question split that we have to ask ourselves
[00:50:26]  here, even as things stop being MPA or SPA, there are different ways things can stop being an MPA or SPA. Yeah, it depends is always
[00:50:40]  the case. But I don't want to cop out with an it depends. I actually think for, for, for, for this side, there's, there's kind
[00:50:50]  of two perspectives. And I, I was going to like graph it, but it doesn't actually make any sense to graph it here. There's, there's a,
[00:50:56]  there's the idea that there, there's going to be one solution that does all things. And the, the other one is that there's going to be multiple solutions
[00:51:09]  that you can choose between. And different technologies are aligning around that vision because yeah, actually let's, let's talk about this. One solution. And I apologize to
[00:51:25]  anyone who thought like, we'll get to where we're going to get it to, but we never get there the most direct route. I, so I, I
[00:51:39] , you know, when I'm talking about one solution versus multi-solution, these, these things have been given sort of like, while these aren't all the same
[00:51:53]  technology, it's the same way that like backend framework languages, like people working in PHP can align with web components. It's, it's, it's those kinds
[00:52:01]  of alignments that I wanted to talk about here. So when I talk about multi-solutions, I'm going to bring up a term you might have not heard for
[00:52:06]  a while, hashtag transitional apps. That's the champion really of the multi-solution approach. And the one solution approach, um, I don't know. It
[00:52:25]  doesn't actually have a, it doesn't actually have a name. Right. But what I'm getting at is the one, there's one school of thought that's like
[00:52:33] , okay, some of my pages are multi-page app pages, you know, so let's see how we're going to write this. But like, the idea
[00:52:41]  is like some MPA, some SPA, you know, put them together. And this side is more of like server components. Right. there's, there's
[00:53:06]  basically like, I'm trying to think of the best way to visualize this. Yeah. I saw, I saw what they did with the SvelteKit analogy. I
[00:53:19] , I'm, I'm only going to accept Rich's original, original kind of definition of it. Right. This side very much aligns with what will be client
[00:53:35]  will be. No, what could be, will be. And this side very much aligns with, it's, it's, it's, it's, it's
[00:53:46] , it's, um, it's funny. Cause this, this, this alignment probably is less obvious to people, but this side actually aligns much more with like.
[00:53:59]  On the server, stay server. Right. So like people picturing, like another example, this is like starts partial becomes spa. Like that fits on this side
[00:54:21] . Um, hybrid routing fits on this side. Yeah. The one in the talk is the only one that matters talking about transitional apps. I agree. How am I
[00:54:52]  going to put frameworks in each solution? Well, that's the thing. I don't, the choice here isn't necessarily, it's a direction. Frameworks don
[00:55:11] 't have to choose, like maybe frameworks have to choose a side, but they don't like, they don't have to choose a particular side because of the way they're
[00:55:20]  architected is, is what, is what, is what I'm trying to say here. Like, I just want to point out that like some are choosing sides right now
[00:55:31] , but yeah, exactly. Right. I mean, I can give you a hint stuff like Svelte and SvelteKit definitely was on the trans, trans
[00:55:47] , transitional app side of things. Right. But like, I think another example on this multi-solution side is this is how we're recommending people use Astro
[00:56:01]  right now. Right. I don't want to put, the only reason I don't want to put frameworks here is because they, they might change. Right. Because the
[00:56:10]  multi-solution way is actually existing. Right. Like, people can already do the multi-solution thing today. They just have to be like more conscious of
[00:56:21]  it. Like, your next app doesn't give you the best MPA solution. So like, maybe what you actually want to do is like use something Astro, which
[00:56:31]  optimizes your, like your marketing site and your MPA side of things. And then you maybe want to somehow do, like in a monorepo or something,
[00:56:39]  have a next app that does your app part of the side. Or maybe you put, make a page in Astro that has a React app on it or whatever. My
[00:56:46]  point is like, the multi-solution approach exists today. The one solution thing is where all the really ambitious work is happening right now. I want to know what
[00:57:00]  side has the framework that's most suited for that side. You start one darting to fail one. Well, I can make a couple comments on that to you,
[00:57:29]  AJ. On the multi-solution side, if we're ignoring like the current state of things, where MPAs are not optimized, generally speaking, there's
[00:57:51]  going to be two thoughts here. There's going to be islands like Astro, right? And then there's going to be things like Quick. Because Quick can literally go
[00:58:04]  from, like, optimal MPA style to SPA within one app, with one thing. But you could argue that that Quick's ability to do that is sort of
[00:58:15]  also one solution, right? Like, but it's different than the on-server, stay-on-the-server hybrid routing side. The funny thing is
[00:58:31] , if you look at Quick, they almost never do this. They never start parsing them and come spot. All Quick apps are MPAs today, pretty much
[00:58:38] . So, like, they could fit on the one solution side as well. So, right now, they're kind of going either way. Another interesting one, though,
[00:58:52]  is like, on the one solution side, clearly React server components and Solid are basically the only ones over here. Right, like, on the one solution side, right
[00:59:03]  now. Like, so, like, React is betting hard over here. Solid is, like, if this was, like, a spectrum line of who's, like
[00:59:26] , who's going to cross here, right? Like, we start from here to here, and we're, like, we're, like, sorry. And we're
[00:59:34] , like, where do you fit on the spectrum I'm betting on this side? But I feel like React's over here, and historically, Svelte has been
[00:59:44]  over here. And historically, Remix has been over here, too, okay? I don't know if they're going to change. I saw a tweet where it suggested
[00:59:55]  that Rich Harris wants to add server components. But historically, it's been a bit like this, right? And what's interesting is, like, you got Quick is
[01:00:05] , like, think is, like, right here. And Solid is, like, right here. That's how, and I'm sure Vue and others have their opinions
[01:00:20] , but I feel like, I feel like Vue is, like, right here. They're, like, they're, like, maybe we're not with those
[01:00:26]  guys, but we're, like, we're here. But the challenge with this line is, you're asking me, what about Marco, Fresh and Hydrogen? Any
[01:00:38]  of the partial hydration solutions aren't... Yeah, yeah. The thing is, any of the partial hydration solutions, yeah, classically might have been really hard on the
[01:00:54] , on this side, because they're, like, look, an MPA is an MPA. The only reason that I know for a fact that, like, like
[01:01:02] , the only reason that I know for a fact that, like, like, because you could argue that we should put Astro, Fresh, Marco all over here somewhere.
[01:01:21]  They're not betting as hard as some of these guys, because they're, like, like, these guys also are not very optimal as an MPA. So,
[01:01:28]  like, they're kind of like, yeah, you know, there's somewhere over here. But if you talk to the developers behind them... They are very interested in
[01:01:44]  the potential of the One Solution, because server components and islands have a lot in common. So, this is more about historical positioning of where the frameworks have made messaging
[01:01:57]  about this, but it's not about... This is why I have a hard time putting them in, because it's just as easy to see these guys jump right over here
[01:02:06]  if it looks... If it looks proper. Quick, right now, can go either way and might try and do both. Solid definitely is leaning more on this side because
[01:02:16]  of the work we've done. But there's obviously interest in this zone. So, I don't know if it's the best line graph, but I just want to
[01:02:25]  put it there. Hybrid routing is when you, like, server components. Like, when you route and you render stuff on the server and you keep the client side refreshing
[01:02:40] . Because that whole routing mechanism is based on this idea that, hey, this stuff is server only. It stays on the server. It's the idea that you, like
[01:02:48] , server render the next parts of the next page, rather than client render them on navigation. Okay. So, we're going to move on from this point here.
[01:03:03]  Um, but How is that different than a Node app? Well, most Because the The Most apps, like MPAs, Every time you go to a new page,
[01:03:20]  you re-render the page on the server. The whole browser goes away. It comes back. You know, like, you reload the page. You lose any client side
[01:03:27]  state. Like, it's gone. So, there's been very two camps, right? There's the MPA side, where everything just goes away on navigation,
[01:03:35]  full server render. Or there's the single page app where everything's client rendered and navigating. The hybrid approach is saying, like, actually, the server is going to render
[01:03:42] , like, the next page or part of the next page, but we're not going to lose the client state. That's very much on the one solution side of
[01:03:49]  things because the belief there is, if you can do that, you don't need MPAs anymore. Because you can do all the server-only stuff, and
[01:03:58]  you can get the benefits of client side. It's like trying to get both. Instead of saying, like, this part of my app's an MPA, this part
[01:04:04] 's a single-page app, it's like saying, like, literally, we can do both. It's a better SPA, but it has a different philosophy
[01:04:11]  that it's coming to, which is, like, what should be on the server stays on the server. Resumability in itself does not. It's just a hydration
[01:04:21]  technique or not hydration technique. The way that Quick does its partial loading is an interesting question because left alone, it might suggest what can be in the client should be in
[01:04:37]  the client. Quick sort of sidesteps this a little bit. That's why I have a hard time positioning it, but there is a choice there because if left to
[01:04:50]  its own devices, it is much more aligned with current single-page app thinking than it is with, like, the server-component-type thinking. Yes.
[01:05:07]  And we talked about this a lot on streams previously, so maybe that's why I skipped over it. Well, the thing is... Okay, we can talk about Quick-
[01:05:18] A-Bit here if you guys are interested. Quick City lets you choose whether you want to do client routing or server routing. It's, like, the multi
[01:05:27] -solution transitional app thing. Like, that's why I put Quick more on this side, even though they could choose differently. When you build a Quick app, you
[01:05:36]  either use a lowercase anchor and it does an MPA, or use an uppercase anchor, and then it loads the next page as you need it. It transitions
[01:05:43]  between the two as you choice. But it is not the same as saying, like, server is server, client is client. They're kind of... That's why
[01:05:55]  I put it more on this because you, as a developer, choose what pages are MPA and which pages are not. Right. Someone's talking about Astro.
[01:06:09]  Astro is also typically over the side. Because, as you said, Astro lets you build a server render pages, spa for admin, and type save. Yeah,
[01:06:15]  exactly. But the idea is you'll have some MPA pages, and then you'll put a spa on a page. It's, like, it's a multi-
[01:06:20] solution. Whereas, like, what React server components are trying to do is literally go, like, everything is in this paradigm. It just works. There's not
[01:06:30] , like, there's not, like, all your anchor tags are the same. They all do the same thing. Like, there's, the way, yeah, I
[01:06:39]  might not be making this clear enough. Anyway, okay. We probably should move on and talk about... I don't know if there's any other questions about the specific
[01:07:01]  technology overview here before we talk about the specific frameworks. But, you're right. I did need to clarify a bit on this. Actually, you know what? Sorry,
[01:07:12]  I'm getting ahead of myself. Because I talked a lot about this piece, the other piece on the technology. There's two other pieces on the technology that we should
[01:07:20]  talk about before we talk about the frameworks. And so, I think part of the confusion is some of these projects, to be able to do multiple things, while some
[01:07:45]  want to do one thing. So, you've got different projects taking multiple strategies. Yes. And I think that, with Quick in particular, I think that's the
[01:07:56]  trickiest one, because even though it's not released, they will have a version of hybrid routing. So, like, when that happens, it becomes a little bit
[01:08:09]  more interesting. But on the same hand, anything that does the one solution version can become the multi-solution thing. You can just put a lowercase anchor tag in
[01:08:21] , and now you're an MPPA. And you're optimized if you're using something like server components because you only need to send the JavaScript for the island. So
[01:08:29] , like, maybe this chart, maybe this framing is bad. But I've been trying to figure out how to split this apart. So, this is going to
[01:08:49]  be a TanStack Meta Framework. Not if Tanner can help it. He already does enough. We'll see. Yeah, I'm sure someone is creating
[01:09:25]  it. Yeah, well, okay. The thing is, with server components, is the re-triggering of the server components needs some kind of boundary or it
[01:09:55] 's the whole app. And while the islands are more granular, like, the actual, like, client components inside, than the routing, the routing still, like,
[01:10:07]  the first server component demos were full page. So, like, essentially, it was an effort or a design decision to figure out how to split up that full page.
[01:10:23]  The server component mechanism itself actually starts almost like an MPA. Like, it's a mentality that's, like, a full page reload. Yeah. Yeah, so
[01:10:33] , I think I understand what you were saying. It was just funny because, like, in server components, it's the not server components that are, yeah. That
[01:10:45]  naming bugs me. Okay, let's keep on going. I mean, it seems like there's still a lot of questions about server components. I've tried to do streams
[01:11:05]  on it. They're not my most popular streams. Maybe I'll do another server component stream soon. Yeah, as I said, this might be a DX thing.
[01:11:19]  They shouldn't be. Having used, like, the end result, it's very nice. It is, like, it is best of both, it feels best of both
[01:11:30]  worlds. But the authoring experience is definitely not right now. But, yeah, this is, again, why I don't like server components. It's the client
[01:11:45]  components you're talking about, not the server components. Right. And the question is, can they be more granular? And this is why I talk about these things in terms
[01:11:53]  of routing, okay? Because the server component part is the not interesting part. It's like, yeah, this renders on the server. Done. The interesting part
[01:12:03]  is, like, the islands. And if you're asking if the islands inside the server components can be more granular than component boundaries, yes. The hydration strategy you choose inside
[01:12:12]  of the routed, hybrid routed sections is up to you. We can decouple these things. React did not, but we can. Conceptually, as
[01:12:23]  we design these solutions, decouple the server re-rendering components from the hydration strategy. This is why people have been doing some fun experiments where they, like,
[01:12:35]  kind of, like, jump in on React server components and then, like, stick their own framework in. I don't know if people have seen, if you've seen
[01:12:41]  this, anyone seen this? Like, where they, I think Quick guys are playing with this, where they, like, took a Next app that was, like,
[01:12:47]  server components and then were, like, let's see if we can just, like, bootstrap Quick into, like, into the little islands there. I think they
[01:12:54]  were playing around with it. The thing is, they don't, they're not going to spend a bunch of time there because Quick's solution to the server component problem,
[01:13:03]  other than the routing part, which they're working on, is more sophisticated, as I was using it as a term before. Like, it's, it's more
[01:13:11]  granular, it's more consideration, but this is why it's important to separate the routing from the, from the hydration strategy. Can server components be only possible compilation? No
[01:13:29] , it, it depends when you talk about compilation. The, the mechanism for this whole server component thing is, it's bundling, really. It's about recognizing
[01:13:40]  how to split the bundle up to ship the right pieces to the client. So, bundlers are a big part of it. This is why Marco built their own bundler
[01:13:51]  years ago, and they, like, they managed the bundling. Quick's all about their bundling. Server components now are like, look, we actually care about how
[01:13:58]  bundling works, right? So, it's a bundling problem rather than a compilation problem is the best way to put it. It's like, mechanically,
[01:14:07]  you're just rendering your templates to HTML on the server, and on the client being selective of where you set the hydration boundaries, or in case of resumability, not
[01:14:18]  hydration boundaries. It's possible, Nate, it is very, very, very possible. And this is why I'm not, like, rushing out the door to release
[01:14:31]  the solid version. But that's why this year is going to be about DX. Right? That's what it's about. The problem is, from a server component
[01:14:43]  perspective with, like, React and stuff, is, like, their decisions are actually really good decisions. They made smart decisions for the most part. I mean, we
[01:14:52]  can talk about patching global fetch. That's a whole other thing. But the design, the consistency, even the way context works and everything, actually makes sense the way
[01:14:59]  it has to work mechanically. But that's sometimes not enough. It doesn't matter if it makes sense. It matters if you, as a developer, using it can
[01:15:05] , like, differentiate and don't trip over yourself all the time. So, I think that's why this is kind of interesting. Yep. Deployment's a big
[01:15:18]  part of it. This is why, you know, Vercel's got a bit of a leg up when it comes to Next and them kind of making that whole
[01:15:24]  thing. But we're generalizing this these days, you know, and a lot of different deployment partners. Right? Well, it's an interesting thing. So, you
[01:15:37]  know what? Let's move our Excalibur a little bit around. And I'm going to check on Twitch chat because I've been neglecting you all a little
[01:15:44]  bit. Apparently, there was a hype train, which means that probably some stuff came in. I don't know. I'm so sorry, Twitch chat. Anyways,
[01:16:04]  I am, like, so far behind. Let's see. Yeah, there we go. Choo-choo. Okay. It doesn't matter. We missed
[01:16:17]  the hype train. The real question is, yes. Not everybody uses UX, but the thing is, this is why this is such a hard push for people. Because
[01:16:32] , like, for some users in some categories, the UX win is huge. Like, e-commerce, it's like night and day. But the thing is, because
[01:16:46]  they care about that. If you're trying to use Nex to build your blog site, like, who cares? Although, I admit, if you go this way
[01:16:58] , it'll, you know, it should feel snappier and whatnot. But the problem is, the challenge, the challenge with, with the server components, if you
[01:17:09]  guys really, everyone really seems to be on server components in the chat today, is this. And it's a matter of ratios, right? How, you, you
[01:17:19] , people make the, make the scale. They're like, they're like, how static is your site? How much content is interactive and dynamic, right? And,
[01:17:30]  and the thing is, you will see the greatest savings with server components, the more static your page is. Right? Because the, the less client interaction needed, you
[01:17:41] 're going to see the biggest benefits there. But, if, if that's the case, how much JavaScript are you actually, actually sending? Right? Because, like,
[01:17:57]  um, I feel like I almost want to do this with squares or something. Like, you can picture this, right? Like, if you, I'm going to
[01:18:04]  transparent, but if, if you've got, like, a, a box, let's say this is your app. I'm going to start with a small box.
[01:18:10]  And then you're like, um, this, uh, let's do this. And, no, actually transparent for this. And let's draw a new box. Okay
[01:18:21] ? And then we're like, this part of the box is static. And this part of the box is, like, interactive. Okay? So, your app is
[01:18:36] , is, like, 70% static and then, like, 30% interactive. Okay? Right? If your app is small, like, if this, if this
[01:18:50] , if this, if, so, yeah, let, let's, let's draw some stuff for people here. Um, interactive. I almost want to make a legend
[01:18:59]  here, but I never publish these images anyway, so who cares? But, like, interactive. Static, okay? Now, if your site is really, really
[01:19:17] , really, and, uh, and, uh, uh, how do I want to do this? I want to stretch this out a little bit more. Not that.
[01:19:27]  I want to stretch this. I'm going to add a little bit more. In addition to being interactive, code, you know, like, your component code you write
[01:19:40] , we're going to add another, another box, which is, give it a different color, like, green. The framework, okay, libraries, whatever you import
[01:19:59] , okay? How do I define interactivity? Like, requires JavaScript in the browser. Like, you, like, you click a button and it does something. Like,
[01:20:16]  like, add to cart or something, right? Um, like, anything that, like, not, like, an anchor-tang navigation, but, like,
[01:20:23]  where you actually, like, need to actually have JavaScript running on the, in the browser. Right? And what I'm trying to get at is, if this is your
[01:20:32]  box, right, and classically, if I took the same kind of thing, this, this, this, this is like a server component or islands kind of look of
[01:20:42] , of it. But if, if, if classically, if, if, if, if I had a single page app, so this is, yeah, let
[01:20:50] 's do, this is like islands or server components. If I took a single page app, like, remix or something, okay? Just use them as an example.
[01:21:03]  What's going to happen is, this part, that is, the static part, is now, that. Okay? Like, you're shipping all, this is all the
[01:21:25]  JavaScript you're shipping. You're shipping, the, the pink and the green are the only things that ship. The blue stuff doesn't need to ship. So,
[01:21:31]  when you're in a spa, you're actually shipping, like, the whole thing, essentially, where, for the islands, you're only, like, shipping this much
[01:21:40] . But, the, the challenge here is, like, if you have a very, very small site, this is very, very, very small, right? And
[01:21:54] , as you scale it, let's take this, can you, so here's a small one. Scale it. Okay, let's move this down a bit.
[01:22:19]  I hope people are, kind of, get what I'm getting at here. But, as you scale it, I scaled it so that this section now is basically, the
[01:22:30]  thing is, if you scale this, this should actually remain relatively the same, same size, right? Because the framework size is, because the framework size is, size
[01:22:43]  is constant. So, I'm going to do, like, that. And, this, let's, let's, like, split the difference here, okay?
[01:23:04]  The bigger you scale this thing, the, the framework size stops mattering as much. But, you, you, you could see that the total amount of savings, compared
[01:23:14]  to this, is, is considerable. Because, if I took the same thing here, and did the same exercise, right? If we did this, sorry, too
[01:23:30]  big. It's actually. Okay. Where the challenge comes in, is, if you're comparing a solution that looks like, like, if you're building a simple
[01:23:58]  blog site, or something, you know, like, if you're building, like, a simple blog site, or something, what ends up happening is, you, you
[01:24:12]  look at your small JavaScript bundle, and you're really happy with it, with yourself. And, you kind of, like, okay, this is good. And, you
[01:24:22]  know, I mean, this could scale pretty indefinitely. Because, like, even if it's, even when it gets to here, you're still smaller than here
[01:24:28] , right? Like, you're, you're generally fine. The challenge is, if, when you're small, like, I don't know how to draw this.
[01:24:39]  But, like, what if this ratio, actually, maybe I'll start with something bigger. Okay. Maybe this will make it easier for me to draw. What if
[01:24:51] , instead of being a small framework now, it's Next.js? Okay. Like, Next.13. And, it looks a little bit more like this.
[01:25:01]  Okay. So, yeah, this isn't quite fair, because we want, we want these to be the same, the same site. so we actually need to build
[01:25:20]  this up this trying to think of the best way to show this but like because this isn't even right it's like it's like it's like it's like it's
[01:25:38]  like considerably more framework the problem is every page has code splitting basically so when we're talking about this there's there's these sort of upper and lower bound considerations and what i
[01:26:00] 'm what i'm trying to trying to express here is that if if next at this scale this is still a very nice like you can picture if this was all purple you
[01:26:20]  know this is still a very net nice savings but when you get when you try and take this and shrink it down to this sorry wrong one delete and take this and
[01:26:41]  you try and shrink it down to this you end up sorry you end up with this right and what i'm i'm i'm trying to what i'm trying to
[01:27:19]  say is the difference between this and this sorry i delete the wrong one is is the difference between this and this is very little you essentially have to scale up
[01:28:19]  to a level where you overcome the framework cost for this for this to actually be worth it especially because the thing i didn't highlight is the green part gets a tiny bit
[01:28:34]  bigger with with this compared to to the other one right so like it's actually more like this this was the challenge of the react server component release when they released it people
[01:29:01]  were like i don't get it my next app is bigger now or like the same size right it's like like i i just i i wanted to highlight this because the the
[01:29:24]  total size roof here is often defined by the size of any it's not your whole app it's any given page uh or along code splitting routes so like there it there
[01:29:37]  isn't only like it's easy to see how this scales really nicely um because as this gets bigger the green stays constant and the the blue and pink ratio might stay the same
[01:29:53]  and if they do then you're you're just making those like clear percentage wins over doing this however what i'm saying is there's there's there is a there is
[01:30:05]  a bit of a ceiling here for a lot of sites because they're like they never get that interactive and the which means their size never gets that big you're right i
[01:30:18]  have to go back to the beginning interactive framework static okay sorry i i i tend to tangent i hope everyone's still here everyone's still alive we're okay here this
[01:30:42]  is my problem for listening to chat too much okay we we're we were going to talk about javascript framework today weren't we uh how are we doing okay you
[01:30:56]  know what it sucks because excalibra oh no excalibra does have three they have three so let's do this um interactive framework where we're going to make
[01:31:08]  it solid sorry excalibra has three three fill styles this is something that i've had to learn uh in terms of colorblind um is that is that um is
[01:31:31]  that we can use different fill styles here so we're going to do static as the crosshash all right i'm as long as it just means that for diagrams with fills
[01:31:47]  you can only use three colors i i i i'm sorry i should have done that earlier i i apologize yeah all right so this is just a server component spa versus
[01:32:34]  island comparison when the framework size is is is different and how that impacts things because the thing is most mpa frameworks the framework is really small like astro or um uh
[01:32:57]  fresh or whatever framework's really small you know and even but the thing is server components so far there's only two that kind of do it which is experimental solid and reacts
[01:33:12]  and reacts and reacts are actually you know you're still in for the parcel so it's like it's it's much harder to find that sweet spot range because you can picture
[01:33:20]  like for really large really large where you like really interactive things but it's not it can't be really interactive because otherwise you end up with spot it has to be really large
[01:33:32]  really complex pieces of interactivity with also a lot of static content like just really big things oh man you know that's like my least favorite thing in the world i
[01:33:52]  i unless you guys are talking about like uh uh graceful degradation all right all right so okay let's let's let's get somewhere else again okay so how should we talk
[01:34:11]  about frameworks today because i think there's a lot of frameworks here in fact there are so many that if i listed them we were we were just gonna we're gonna you
[01:34:23]  know we're not gonna get anywhere but i i mean i do have a list personally um and we can just we can just talk about where they're at so let maybe we
[01:34:33]  should just write them down so that we can we can talk about them we're going to start with react because of course we're going to start with react and by talking about
[01:34:41]  react we're going to talk about next we're going to talk about remix and we're going to talk about um remix slash hydrogen okay because this the react may be one
[01:34:55]  library slash framework but when we talk about react we're actually talking about four so i don't know if there's anything else relevant on as a framework on the react side right
[01:35:05]  you're right you're right you're right you're right you're right redwood um um yes yes uh sorry i moved this now i gotta move this all right yes
[01:35:29]  i'm i'm sorry i did not mention redwood i should mention redwood i should also mention even though it's not a full framework uh in a sense i i
[01:35:37]  should it's built on top of truck create three app and blitz um right so i was typing that before you typed it i'm saying don't forget the all right so
[01:35:52]  let's let's start with the react ecosystem and talk about a bit what's going on um we've been talking about react probably this whole time so um as as i
[01:36:07]  said this escalator on now is more for my for oh yeah we shouldn't mention rack rackus as well i mean there's a lot i don't did i say at
[01:36:14]  the beginning i wouldn't talk about every framework yeah i did say that it's fine i'm not talking about every framework no preact gets its own category okay so let's
[01:36:25]  talk react for a moment um big thing on react which as we all know um is server components okay and uh next is the funny thing is when we talk about react now
[01:36:41]  we literally are talking about next js um we might be talking a bit about remix or hydrogen um this is why i wasn't talking about redwood as much but i i i
[01:36:52] 'm gonna give redwood create t3 app and blitz a bit of a nod here because um they've kind of they're they're worth a mention because they've
[01:37:02]  made great strides in changing uh like being able to show people what best practices look like and giving the complete uh package which i think it makes it very compelling the thing you
[01:37:14]  have to remember with the opinionated frameworks is they're usually lagging behind the ones that are less opinionated all the way lagging behind react so it's kind of
[01:37:22]  like a trickle down effect yes it makes a ton of sense why um yeah again gatsby uh i don't know what what let's maybe i should have just
[01:37:42]  not listed these guys because they're outside of what i'm really want to talk about because while this is probably very useful for people trying to make a you know solve a particular
[01:37:54]  thing that they want for their business need um i i want to talk about these four primarily so let's talk about 2020 uh 2022 um we we saw react 18 come out
[01:38:12]  um in march we saw next 13 come out in october and then we saw the remix hydrogen mer shopify merge ish thing happen in november now to be clear
[01:38:30]  to me those are the the three big milestones but it's it it it's we haven't fully realized the impact of what these mean i i'm just getting started man i
[01:38:44]  stream for like four hours i i i haven't even got yeah i haven't got to angular or whatever i just i'm just starting you know so yeah let's let
[01:39:05] 's talk a bit about what's going on in react land so big thing here and the topic for react for 2020 23 is going to be undoubtedly server components what does this
[01:39:25]  mean for you as a someone interested in react reactive we're going to be talking about things like use and async components a lot more where we are also going to be talking
[01:39:39]  about caching because caching is very important for server components and the reason for that is the the this is sort of the challenge when we i don't i i watched a
[01:39:52]  great talk from uh i was actually in person tom ocino was talking about um his work with the react team and what he said is when they introduced server components the
[01:40:01]  performance wasn't good enough like at facebook like they they like it went through several iterations um and it was like it was like it wasn't quite there yet and i think a
[01:40:11]  lot of this comes down to the fact that server components kind of like do like a full page reload mechanically um and this is how nested routing came in because it allows
[01:40:22]  us to do much more um and optimization and parallelization to kind of get us to that next level unfortunately one of the challenges here is if you get to that level everything
[01:40:36]  gets parallelized and split up and suddenly if you if you're rendering like i'm hope by now most people are familiar with nested routing like this one two three picture
[01:40:48]  you go from sales to accounts and you load actually two sections right or let's say we're on dashboard and we went to sales we're loading both the sales panel and we
[01:40:57] 're loading this oh three sections in this case if if we're like looking at how we parallelize this data fetching and stuff you start getting into like weird or like only
[01:41:08]  do only replace this part when you navigate like change something here and it only replaces this part we're we're looking at new kind of constraints right and caching becomes the
[01:41:22]  key here um because like if you're fetching like i'm assuming that both this and this needs that sales record data you know about stanconia you don't want to
[01:41:36]  fetch it twice so this is why next like patched global fetch right because they're like they're just doing like a almost like a tan stack query kind of thing where
[01:41:44]  you're just like shared key so they're doing by the fetch but like if i'm doing in multiple places i don't want to fetch multiple times um it gets it goes
[01:41:55]  further than this and the reason i want everyone to be aware of caching here is because and i showed this on a previous stream before but essentially if you route to a
[01:42:06]  new route section so i'm gonna draw transparent background okay let's pretend this is our is our web page okay right and then let's pretend i'm just gonna draw red
[01:42:22] raw that remix example essentially okay three boxes but inside this box these boxes we have some client components that update you know that have interactivity so let's let's just like draw
[01:42:41]  um draw a couple in here okay what i want to point out is these maintain state even if like parts of this page refresh like if this section replaces itself these parts retain
[01:42:55]  state so what ends up happening is the outside here the here so to speak and let's do that with one of these this gets server rendered again but then this is handled completely
[01:43:09]  on the client and it means and it means that you have to serialize the props coming into here but uh you're re-rendering all this stuff i i what
[01:43:19]  we're gonna see is what's cool about on one hand sorry just to kind of show an example and i've showed this before is in some cases if this blue section
[01:43:35]  took up the whole red section all you would need to send is json basically server components devolve into a spa with json apis depending on the size of the client
[01:43:47]  side islands right so once once you recognize that it's not just about server components you're going to start talking about oh can i cache sections of the view almost like the
[01:44:02]  way you cache responses so i i expect caching to go into a very interesting place over the next uh 12 months and this is something i'd have my eye out on in
[01:44:14]  terms of frameworks looking at solutions in this zone um again this is very react heavy right now but i yeah i think i think i think this is important to solid start support
[01:44:29]  sharing state across multiple routes yeah of course do you just have it higher up in the tree um con context yes exactly so this this is mind warping you know i i just
[01:44:41]  wanted to kind of point out this here so this is a conversation here and this is like where next is at they're like they're very much like going this is where
[01:44:50]  i am right so let's give this diagram a thing you know but when you talk about remix and hydrogen hydrogen had server components they just had v1 where this red section i
[01:45:01]  call it v1 but the the difference with hydrogen is this red section was like this and they were like they saw performance wins it was really cool but they had a really hard
[01:45:12]  time with developer experience and it like it still wasn't very good right so i think i think they they struggled a lot with hydrogen uh because they like they weren't as
[01:45:28]  like on the same page of the react team with was with next remix basically was like yeah we're not we're not interested in this stuff until it's actually production ready um
[01:45:36]  they have nested routing but the thing you have to remember with remix is everything is like after that initial render everything is client side like it i i i don't want
[01:45:46]  to go too harsh on this line here but and maybe that's for some people who consider this my hot take remix and next js before uh app directory are like basically the same
[01:46:00]  thing like remix has features that care about data mutation but you can also add features that care about data mutation to next like it's it's like if someone there's a philosophical
[01:46:11]  piece but if someone so chose to do so they could like whip that up in a couple days like it's it's not it's not it's it's not yeah
[01:46:20]  so like i just i just want to kind of under kind of point out here that i think this mixture is interesting because i think hydrogen sees the value of server components even without
[01:46:30]  the dx they need remix a story they'll put them together and probably come up with something that is server components based and uses remix's data loading patterns and that's where
[01:46:40]  i expect them because here's the thing remix patterns and server components are like this even though remix likes to kind of generally how should i term it be pragmatic about new technologies and
[01:46:57]  generally speaking the alignment i was talking about the difference between sophisticated not sophisticated but they are very much in alignment so um yes i think i think server components are going to be
[01:47:10]  the big topic of 2023 the thing is okay do you know where the the subtle challenge is here do you know where the subtle challenge is here and this is the challenge i
[01:47:32] 've had with remix and i've had this challenge previously with like some of uh tanner's libraries don't get me wrong i love tanner's libraries but like like when
[01:47:40]  i was looking at react query and they had like turn on suspense check mark and it's not their fault it's because react ecosystem like react itself wasn't ready is like
[01:47:48]  once react is building these internal tools into react that when you leverage them will be more performant and save on code size and they built all half this like a quarter of the
[01:47:58]  stuff that's remix uses or maybe half the stuff they use for their data loading stuff react has built internally transitions loading states all all the mechanisms that they need to do it but
[01:48:07]  because of that like as someone mentioned like i'm not working close enough together and you know react being solely focused on server components for implementing these kind of features remix kind of
[01:48:16]  split off and have to build everything themselves when they go back together there might be some friction here because the colliding worlds of who's responsible does remix just give up what they
[01:48:27] 've been building to actually use react the way like there's a real risk here too because like if they don't are we forking react essentially right to be fair i
[01:49:02]  think i get remix here mostly keep answers soon to you yeah i disagree with this one i i like and maybe this is just from an execution javascript mechanical side of
[01:49:13]  the spectrum of which remix like remix from a dx side has established the patterns and has shown you know and it's funny they didn't like they're literally taking like it's
[01:49:27]  the way the web works like form submit like you know but they've they've added that next level for the javascript so like good on them on that but the thing
[01:49:37]  is as for execution cost all that stuff this optimization is like the 15 percent optimization right like maybe this should go over here somewhere but like when when when i look at that
[01:49:54]  scale of like javascript optimization let's let's draw another line here you know you know and i talk about stuff and i put stuff here it's like it's
[01:50:05]  like spa today loader loader action so let's put a little tick here it looks a little bit it's kind of it's kind of it's kind of
[01:50:38]  like it's kind of like this islands and delete this stupid blob and delete this stupid blob yeah resume ability it looks it looks like this like if you pretend like this is
[01:51:10]  like an arrow shooting it's going going going this way you know like this you know so like this is definitely an improvement and when this was your whole scale of view like
[01:51:29]  like let's get rid of this like when you're sitting there in react land and you're like what could the world be like for a spa this is like i can
[01:51:37] 't even count like i'm sorry and when i say spa sorry let's let's let's let's let's extend this out i i'm some people are like huh spicy
[01:51:47]  or like i i'm gonna expand this out even further i i meant ssr spa here so i'm gonna put that down here so i'm gonna put that down
[01:51:59]  here and then i'm gonna do like this it's it's kind of like this so and then that maybe i'll move this a little bit back okay it's kind
[01:52:19]  of it's kind of like this okay yeah yeah the hydrated spa is my ssr spa okay like this this isn't exact science this is my feeling of of scale here
[01:52:42]  right um the the here's the thing the fact that it's ssg or not doesn't matter like ssg just means that you render the page sooner but
[01:52:53]  it doesn't actually change how the page operates what i'm trying to get at is like when we're talking about like i don't know what what you want to call this
[01:53:02]  it's not even amount of javascript because this approach can approach this approach on amount of javascript it's like javascript overhead because it includes execution size
[01:53:14]  and everything it's it's it's like the world made a like this is people were critical like i was really critical of this stuff a few years ago i have to admit
[01:53:28]  people were like you know i was like the problem of the world right now is people think that like next js in terms of ssr is like a eight out of ten
[01:53:36]  you know of like where we can go and i'm like no it's like a two out of ten like and everyone will have their own scale on this this is this
[01:53:52]  a level of typically graph it might be it might be but it it doesn't it doesn't have to be i actually think that the loader action pattern actually makes certain things
[01:54:03]  easier than than the like the typical ssr spa um so it's it it it isn't um i just want to kind of like just talk about from like a
[01:54:17]  javascript overhead like hydration execution side of things going from spa to single page ssr spa was a nice thing um it didn't really affect javascript overhead it
[01:54:29]  got us first paint but he like he might it might have been like okay i can do some stuff better with an api here and stuff so like it did a little
[01:54:35]  bit going to this loader action pattern and enforcing it the way remix does actually like for where it helps it actually lets you remove like maybe like 10 15 of that overhead
[01:54:47]  right but going from that to islands and server components is like this like massive savings now on on that and then going to resumably from there is about the same distance
[01:55:01]  from from like ssr spa to loader actions but like that that is like in my at least in my opinion how how how where where this kind of fits in right
[01:55:15]  um because obviously there's some movement you can be like really efficient on this and get like a few more points um we're watching we're seeing right now this approach
[01:55:25]  this um but like i just want to kind of put it out there that like from my view of the spectrum at least like this stuff is like it's very good but once
[01:55:42]  you look wider it's kind of like it's kind of like yeah oh sorry i have the chart wrong uh it's it's it's the other way around it is
[01:56:03]  as you go this way this is this is this is more this is less yeah anyway yeah i was trying to yeah yeah the arrow doesn't help sorry all right is
[01:56:51]  this a little clearer but it's a choice to make because of how much this matters to you i'd like the comment about complexity because like maybe the sweet spot that we
[01:57:05]  can achieve right now is like over here somewhere like maybe we can get here and not all the way here this is already a big enough of a win that like it's it
[01:57:19] 's not the best solutions technically that win it's the ones that like like like like from like a technical standpoint it's the ones that combine all the elements you know that
[01:57:30]  like that actually like let you do what you're trying to accomplish it's not just about being the best you know and sometimes you know similar to like the cost of i
[01:57:39]  see i know this because i'm canadian um and other people might know it too but like there's a certain cost to you know overhead for where you get your oil from
[01:57:50]  like when you're drilling oil you know and like infamously uh like in alberta or whatever we had the tar sands and like at certain times when the
[01:58:01]  oil prices are low and there's abundance of oil it's like not worth digging there because it's too expensive um like you're not making enough for the amount of effort on
[01:58:12]  on the cost of barrel so to speak and what i'm getting at is like the tooling timing might not be right for resumability yet like maybe the sweet spot is
[01:58:25]  here something i i think we are definitely seeing that we are moving past this though this is definitely where like maybe like the last few years has been like conceptually moving passes like
[01:58:39]  remixes it kind of came here right at the end of this kind of phase and we a lot of people are already kind of like a lot of frameworks and thinkings
[01:58:46]  we're already migrating here right but yes there's diminishing returns potentially over here we have to be careful so this is not a thing but i want to talk about that
[01:58:57]  so just kind of go back here now this is essentially what where reacts at um i'm going to sneak one more in here we we can't forget about or sorry i
[01:59:13] 'm gonna we can't forget about react forget um this is reacts compiler i said compilation won't come into the conversation too much because confirmation doesn't change what it does people are
[01:59:32]  like getting optimistic and they think like the compiler improved performance i'd be surprised if it did more than like a 10 in client thing but it is a dx win that they're
[01:59:40]  what they're looking for i think it makes it i think i have a lot of thoughts on react forget um but i i think that it will be interesting to see how
[01:59:51]  it develops because there is a whole team working on it at facebook oh yeah okay yeah so they've released something in june about it no no no uh let's talk
[02:00:04]  about view next because react forget is just like a svelte like compiler okay and svelte like what i mean by that is if you've ever seen svelte
[02:00:18]  it basically compiles uh stuff into like more javascript like uh stuff into like more javascript like it takes more javascript like code and compiles into
[02:00:31]  a bunch of like breaks it up and then like basically lets you check it dirty checks at each point like should i go this way or that way um but like the case is
[02:00:41]  it's still a component rerunning and in the case of react it's still gonna be a vdom generated um view actually does a lot of optimizations like this too
[02:00:50]  on their templating side not so much on their logic side but in their jsx so i think that it's that kind of thing like okay 10 might be an exaggeration
[02:01:01]  but i would be very surprised if react got similar to uh preact in client side benchmarks um through this i think that's about the the upper range of what i'd
[02:01:10]  expect on performance gains through this this is much more about making writing cone sane but it doesn't come without trade-offs and i'm looking forward to seeing what those trade-
[02:01:19] offs are because the problem is or the challenge depending on how you look at it is if you start writing react code and the mental models things rerun and re-render and
[02:01:30]  those things don't rerun because they auto memoize it's a lot harder to reason about what actually changes and right now react has dependency arrays for that but if you
[02:01:39]  start compiling with the dependency arrays on that you actually have to start talking about it like it's reactive and i think that's a very weird mental hurdle for people to get
[02:01:47]  through so i'm looking forward to seeing how that works out for them um because it we we went through this with marco because marco 5 was a vdom marco
[02:01:57]  6 is fine grained and we instantly realized that while we could talk about it like a top-down system and in a lot of ways it could be kind of like
[02:02:03]  a top-down system um it didn't make sense explaining this to people using the system for development okay let's move on because i got we got a lot to cover today
[02:02:13]  sorry now that i'm talking about another framework people probably are like uh done done with react okay so let's talk view big things for view uh this year was i mean
[02:02:26]  the thing is view's been kind of like on this trajectory for a little while um uh i'm gonna put some dates out here just so i remember but first talk about view
[02:02:36]  we're talking about nuxt um there are other view frameworks just like there's other things like docu soar and stuff in react i didn't talk about but um
[02:02:46]  we're gonna talk about view and nuxt here primarily and thing with view is 2020 view 3 composition api 2021 script setup uh ref sugar and that and we can see if
[02:03:00]  we can find this evan you actually uh wrote an article uh and i should have looked at this before stream uh what was it end of year 2022 someone someone someone no
[02:03:15]  here we go he's gonna tell you better than i can but this is this echoes a lot of stuff we talked about here right because what does he talk about right here first
[02:03:31]  of all this year was when view 3 became prime time right they switched everything over efficiently but look first thing they get to is volar and the typescript and tool integration
[02:03:43]  for view more so than others view and svelte are very much we going back to our table here um on this like lower side here uh of the tooling integration this is
[02:03:56]  a place that they innovate they are they aren't always the first people to like this side of things like all the interesting technologies but when it comes to like the refinement
[02:04:07]  around compilation and tooling integration no one else touches them okay so yeah let's so yeah volar is getting um and my understand is volar 1.0 is like what's
[02:04:26]  what's fuller it's it's it's bet they had something else that was similar that did typescript but this is like now the blessed version of of it and
[02:04:37]  it's a lot better than what came before it so i my understanding is views typescript like leveled up immensely this year yeah but uh talking about knox3 and
[02:04:56]  beautify that's their uh if i understand that's their material design component library um okay so okay they for next year they only brought up two things you know what the
[02:05:13]  two things they brought up were the fact that they're going to have less releases i think they're trying to show people that they're that they're they're it's going
[02:05:23]  to be stable this year the the biggest thing is that they want to pull the new transform the ref sugar transform or script setup stuff and uh and suspense out of experimental but
[02:05:38]  they're they're they're for them this is a dx year of stabilization the other thing though they mention is vapor mode and we should talk about vapor um when talking about view
[02:05:50]  uh so let's add that to this so i remember yeah vapor for those who don't know view vapor is a new experimental compiler that you enter view code and get solid
[02:06:02]  code out no not not exactly um but very close to that um they said it was inspired by solid.js um but the idea here is that you can take views sfc
[02:06:16]  or sfc format the single file component format and it compiles out in such a way that they don't need a vdom anymore and it's just does fine-
[02:06:25] grained activities using reactive uh using their reactivity because view and solids reactivity are very very very similar um we could go into detail on a different stream about like differences and
[02:06:36]  trade-offs in terms of the reactivity propagation but for someone generally coming in here you can assume that the reactive models are very very very similar what's different is view then
[02:06:47]  kind of goes back to a component model so even though they have lots of optimizations and how to cache and store vdom nodes and shortcuts certain execution paths generally speaking they
[02:07:02] 're still like signal updates this component listens to it re-trigger um and view vapor is intended for use cases where performance is primary concern is often does not affect existing code
[02:07:15]  bases good at least you will be able to embed a vapor component subtree into any view 3 app see what they're suggesting here is that you use vapor at the leaves
[02:07:34]  because you use vapor's execution model and you use vapor content and you use vapor as well and what i'm getting at here is with they're saying we hope to achieve
[02:07:45]  granular option at component level which means freely mixing vapor and non-vapor components the same app i believe they can do that um honestly and the reason i believe they can do
[02:07:54]  that is i was doing this with react today um which we might talk about later but you have to understand that vapor execution model is completely incompatible with views execution model
[02:08:07]  today that's just it's the reason why solid doesn't have react compat or you know it's the same way that view vapor and view are not compatible they they can interface
[02:08:18]  with each other but view vapor is to you know is basically like it's it's basically like solid essentially um so like it's just not compatible with these vdom um
[02:08:30]  excuse things building an app with only vapor components allows you to drop the virtual dom runtime completely significantly reducing bundle size and baseline in order to achieve the best performance vapor mode will only
[02:08:42]  support a subset of view features so they're basically dropping off all the classic view features and saying you have to use composition api so essentially this this is cool and the
[02:09:03]  fact that they're mentioning this means that they're taking this more serious i wasn't sure if they were going to because here you know what if there's a time to do
[02:09:12]  this it's now because because like like look what's happening in the react ecosystem it's like server components are like kind of like we didn't talk about this that much
[02:09:37]  but it's this paradigm shift in the way data fetching if things do go the way to server components the way that i suggested then like it displaces stuff like react
[02:09:45]  query a little bit don't worry there's still places for it and there's client-side stuff but like the the like i'm just building an app story and the basic
[02:09:52]  libraries you need and stuff it actually changes it's actually very ecosystem resetting and shifting view vapor is like that as well it is like yeah like they're talking like like right
[02:10:02]  now they might solve this right where you can bring in other view components but what they're telling you is if you switch to vapor you can make some stuff lower in your
[02:10:10]  tree but then you but under view vapor in those components you can't use like beautify or whatever like you can't like you don't get access to your same ecosystem so
[02:10:18]  they're probably going to work and figure out how to kind of make that kind of work together but my point is is like this is a big step towards um like like like
[02:10:30]  kind of starting over with another like an older framework view today kind of as a way of like bootstrapping it in you know that's a key thing for a good
[02:10:39]  migration is figuring out how to like bootstrap it in but like it's an interesting place to be me personally obviously because then it's like if you're resetting your
[02:10:48]  framework anyways maybe it's a good time to look at other options but i think it's good that you do this at the same time because if view doesn't do it
[02:10:55]  this kind of shift at the same time as react they're going to risk it when other solutions are more stable right now if everyone's in turmoil you you know it's it
[02:11:06] 's time to go out there and and shake things up yeah the the the puns will will keep on coming no uh view vapor as far as i know is just experimental
[02:11:19]  mode but if it succeeds um if it succeeds um then like i i think you you will see a shift over time yeah yeah view people find solid interesting including myself so vapor modes
[02:11:43]  future right the biggest thing i think dividing view people quote unquote in solid for example is just uh philosophies and stuff like like what you think and what you value i i
[02:11:52]  find this very amusing because like obviously view is a much bigger player so um acknowledging solid in this sense for performance and kind of similarity is a big one because it might like uh
[02:12:07]  it might make sol look more attractive there's actually someone in the process of a very large project porting i think they said something like 300 components right now from view 3
[02:12:18]  to solid um and i've been kind of like interacting with them on twitter on that it's just kind of like seeing that because like view and solid actually have a lot in
[02:12:28]  common other than the philosophy um so yeah it's interesting um and honestly some people were like oh react compat view compat would be easier for us than react compat um and when
[02:12:44]  view vapor comes out like like who knows like it's like basically the same thing um so i i think this is really interesting do i have any notes to write here about
[02:12:56]  view um vapor may or may not be a big thing but i think it's really really cool um i i i think that um i think that we shouldn't forget to mention
[02:13:14]  nuxt here he he kind of glanced over nuxt had a hard year but i i my understanding is they are finally here like i am now on the nuxt
[02:13:24]  page it's not telling me about experimental docs or whatever when i go to the docs page we are now on nuxt 3 right like um and i've had daniel
[02:13:37]  on here nuxt is it's very nice like the way everything auto imports and like stuff they put a lot of thought about like nuxt might be the most it's funny
[02:13:49]  i i don't know about like the the migration because people said nuxt 3 was like it's been like a long road but i feel like if someone is starting from scratch
[02:13:59]  in nuxt 3 from what i've seen out of all the meta frameworks it might not be like the most cutting edge technology wise or all like this is the fastest whatever
[02:14:08]  but if feel like when i saw what daniel is doing it just feels like so nice kind of like everything is taken care of for you i kind of feel like nu
[02:14:19] xt 3 might be what angular wishes it was like like it just it just has this sort of like it's just a really like so many considerations into like the little details and
[02:14:31]  it's so funny because whenever i've been on like a chat with daniel or that or like a framework panel and i'd be like i'd make some like offhand
[02:14:38]  comment like yeah well i mean you could always do that but that'd be crazy that'd be like so much work and you have to wrangle it in daniel just very
[02:14:43]  politely puts up his hand like yeah we we did it and i'm like of course you did you know because it's like i identify things from like that are from
[02:14:52]  my perspective too small wins for the amount of effort that goes in um and things that maybe the users like if you really care about having that nicer dx piece like at that level
[02:15:04]  that last 10 or 15 on the dx i put that on the user space like i don't want to be too opinionated it's not where i could spend my time
[02:15:12]  but like nuxt that's what they did that last 10 or 15 percent on the dx side they got you so like yeah i i think we can't understate this is
[02:15:26]  again i mentioned the further out you get there the harder it is to migrate with change maybe out of all the meta frameworks nuxt is the furthest out there from view
[02:15:34]  like in terms of like um the ones that we consider like the blessed options yeah and i've been looking at the js stuff here and there i i it is very interesting i
[02:15:52]  think part of this thing is like yeah it's it's also interesting because nuxt is largely on veet now but i see originally they weren't and they had their
[02:16:01]  own kind of like engine and like so some of the njs stuff almost required some more buy-in but yes njs is great i need to look at it more anyways
[02:16:10]  so yeah big glowing um comment on on nuxt here yeah no i don't know much about nuxt history but that makes sense to me um yeah that's that's
[02:16:28]  very cool um as i said and developers like daniel are up on it they understand where stuff's heading they're just kind of like they have a more tempered approach they
[02:16:38] 're not like so much like it's funny out of the frameworks view and nuxt kind of like proportionally like where they sit on their philosophy is not so like in
[02:16:52]  a sense react is is bigger on taking risks and pushing boundaries view is very i don't want to say safe because they were safe in the past they've been they've been
[02:17:02]  more adventurous the last couple years and forging their own path too a bit more but like in the relative scheme of of of of things view is definitely uh a bit more on
[02:17:11]  the play it safe side of things and but it means that when it comes to that dx side like the polish is like gleaming so definitely consideration if if that's what
[02:17:25] 's important to you and it's and whatnot so yeah that's interesting uh it doesn't that's actually one of my criticisms i feel like view probably tries to take on the
[02:17:42]  most the problem is react didn't but now they're trying to wrangle it in with what's happening now with next and serving components which is why it feels messy for
[02:17:54]  the longest point time react actually felt smaller and more to purpose for a lot of developers like people who like react like that was like its selling point and view is kind of
[02:18:07]  like in between react and angular which is like very larger scoped what's happened though is because view now has blessed libraries and all this churn's kind of been happening it
[02:18:19] 's a lot easier for the view community to go like this is a bless solution this bless solution this best solution and react now is kind of carrying the weight of its ecosystem with
[02:18:26]  it and being like like in this sort of mess these aren't reacts thing and when you look at react in isolation it's this kind of more pure perhaps beautiful thing everyone
[02:18:39]  knows i love react um but when you look at the whole mess yeah i can understand why people from the outside might not feel that so yeah i i don't so much agree
[02:18:51]  with that especially because like in my spectrum of like size and like scope view is on the the larger size of most of the frameworks that i'm going to talk about today
[02:19:04]  maybe except maybe the next framework let's talk about angular yeah you will this is a reactivity thing i've talked about this before for i here's the thing from a change
[02:19:26]  management standpoint uh react uh has hooks for both state and memoization like how state updates which is very different all the reactive libraries only have hooks for state they're like they
[02:19:41] 're like yeah we just need three essentially we just need like or maybe four because there's a difference between primitives like atoms and like proxies but it's like ref
[02:19:49]  reactive computed effect right or solid it's signal store uh memo effect or svelte it's let dollar sign variable dollar sign expression and stores but like my my point is
[02:20:09]  like these are all state management hook solutions react has another layer of like memoization hooks like use ref you use callback um react dot memo and that's the thing because like
[02:20:26]  like they do have the state hooks they do have use state use memo use effect but the the like that's where the kind of complexity comes in so it's interesting yeah
[02:20:47]  i i can't help it in my react i'm sorry to everyone all right okay so let's talk angular so when we talk about angular what do we talk about we
[02:20:59]  talk about universal we talk maybe about analog analog is analog is is analog is fun yes angular was the first to hop on the type script train so they deserve a lot of credit
[02:21:18]  for that doing that like what like 2014 ish time period i don't know exactly what it's like eight years ago so let's let's let's talk angular for
[02:21:28]  a minute but i'm i'm not gonna pretend like angular oh is my is my is my whole uh like that i have you know a terrible frame of reference here but my
[02:21:41]  understanding of this is angular has been on one of those like really long journeys like kind of like react has been people react has been big and popular and like ecosystems kind of
[02:21:53]  carried it the last few years but between like 2017 or 18 around the hooks announcement let's say 2018 and i'd say like now essentially i know there's that like one
[02:22:11]  like react forget talk and like the one thing where they drop the the server components like it's it's basically been five years since like the dial really moved forward from the
[02:22:22]  core team they've been working on something for a very long time well as it turns in out in angular land they were also working on something for a very very long time and
[02:22:30]  um the the thing is like it's it's difficult when you're in one of those projects because you got to see it through because it's so ground shifting like everything gets
[02:22:41]  pulled into it and my understanding and again i don't know the full details here but they spent several years working on a new compiler called ivy yeah yeah nux server
[02:22:53]  engine nitro is pretty nice yeah and and essentially they they and ivy was was a big step forward changed how they do the compiler but the thing is they i think they
[02:23:16]  saw they're like okay we're in this zone and we need to pardon the pun um and we needed to kind of figure out how to move beyond that um and essentially
[02:23:25]  they they saw the dx of other frameworks um kind of moved sorry i i know the angular work ivy work was mostly like what 2018 right and but i mean the big
[02:23:42]  the big one recently i guess for this past year was what standalone components essentially they've been on this path for a uh uh a particular for a for a few years now where
[02:23:55]  they kind of were like what does angle look like in the future and they were building out this path and they watched the dx of other frameworks improve and they were like okay let
[02:24:03] 's build out these pieces to kind of modernize angular and its angular build chain that's my understanding i could be wrong but that's what my thing is i went to
[02:24:13]  mg conf and tried to pay as much attention as i possibly could um in in in october and some of the core team members what's cool about this though is they've
[02:24:23]  hit the end of that road like as i mentioned some mentioned ivy is the default compiler for probably a a couple years now i i can't remember when when does angular
[02:24:34]  ivy come out was it 2020 2019 yeah it's it's somewhere around 2020 like first look is different from when it actually rolls out my understanding is that they they tried
[02:24:57]  to do like basically an invisible switch and things didn't work the way they expected and then the angular team was like well those are bugs but the problem is when you have people
[02:25:10]  depending on bug behavior for years because no one knew they existed it's a lot harder so like this is like the full like pull the tablecloth off the table without the
[02:25:19]  without the you know things falling off scenario um yeah okay 2019 perfect yeah that that fits roughly with my timeline okay right yeah so coming out of this working through like the angular
[02:25:39]  does a major release like like we're talking about what angular 8 is talking like angular does several major releases a year it looks like over the last couple couple years right so
[02:25:51]  like they're on angular 15 now angular 15 came out uh like a month ago or something so just to kind of like show how rapidly they've been kind of going through these
[02:26:04]  breaking changes because they here december this is turned from being like instead of having one big breaking change like angular 2 was from angular like basically a different framework they've been
[02:26:14]  doing much more incremental breaking changes and they've been kind of like turning stuff around bit by bit it's funny because i i actually like this there was a j the state of
[02:26:22]  javascript it's not too obvious to people all the time here but like if you look at stuff on satisfaction angular angular started pretty high like not the highest but slowly
[02:26:40]  been going down and down and it's funny it's going down on the chart but around 2019 38 42 45 it's climbing back up it doesn't look that because the new
[02:26:52]  entries on the chart but angular is like the only framework i've ever seen in history actually go back up in satisfaction after going down like this is more typical ember 40
[02:27:12]  40 40 like i guess there's some variance that year but like we're we're generally heading down here right it does some of the more popular ones view 87 91 91
[02:27:23]  87 85 80 alpine 82 79 lit state flat 78 77 preact 84 78 78 74 like it just it just goes down this this is a stat that goes down every year
[02:27:36]  88 89 90 okay spells been going up by one percent but like it's it's not it's nominal right angular looks like it was tail diving like tail spinning down actually
[02:27:49]  going back up slightly it is on the way up but on the the way down it's it's it's harder because if you have a memory like i've ever used angular
[02:28:08]  then it starts you actually get hit harder and harder as time goes on right so just kind of just kind of like putting it out there so angular is a funny one because
[02:28:32]  they've gone through some tough times and they're kind of been trying to set themselves up to bounce back right and if if if we're going to be talking about j
[02:28:42] avascript frameworks into 2023 i want to i want to i want to make sure we we recognize that bit okay so like i mentioned angular universal and angular universal is their s
[02:29:01] sr solution i've never touched it all i know is that angular has angular doesn't really hydrate they call it destructive hydration but i don't i call that not hydration
[02:29:12]  um they they they basically re-render the app and the client again and destroy what was there that's that's not hydration that's client-side rendering um but the angular
[02:29:23]  team when i was at the conference they brought that up as a high priority of something they want to work on this this coming year so yeah we're talking about hydration they
[02:29:32]  want to they want to they want to be able to do hydration which is funny because everyone's trying to not do hydration right now i i get why that's humorous um
[02:29:44]  that they're trying to add hydration at this point but i'm sure they will do it in a smart way another thing they're talking about change management signals right they want
[02:29:58]  the zone js they they they want they i mean they have rx js but they're like rx js isn't the best reactivity for templating like for it's
[02:30:11]  good for data transforms and all that but and it's very hard to convince rx people that it isn't the best for templating but it actually just isn't i i
[02:30:20]  talked about this in the last reactivity rendering stream it's it's fine if you think otherwise if you're very functional programming oriented and you like virtual doms and stuff
[02:30:27]  like that maybe but like it just isn't the most optimal thing for rendering sup bigger nerd hey theo uh man we're getting deep into this now so anyways i like still
[02:30:50]  hate rx yeah oh man yeah but i meant more of the fact that like you can say that like your views are pure and they're derived and immutable and then they
[02:31:01]  change each time that's where rx is good core screen updates it's just you're trying to wire a bunch of stuff into a template where you have expressions rx is
[02:31:09]  prohibitively clunky i think rx has some value um the same way like you you know when something breaks and you grab some duct tape you know like you have
[02:31:19]  a quickly have like uh maybe your plumbing is coming apart under your sink and you're just like oh and you like knock it together and grab some duct tape the rx js
[02:31:27]  is kind of like that um so like anyway let's not dwell on rx js um but i i think they they've shown interest at their keynote at the conference on
[02:31:42]  both of these topics so angular is looking at how to add hydration signals and this is really important too because universal needs a boost and every framework has had hydration for several years now
[02:31:53]  um so like this is drastically behind if you care about ssr maybe you don't care about ssr angular didn't really because they're like look we giant we
[02:32:01]  build apps why does everyone care about ssr i want to highlight analog for a second before we move on because it's a veat based angular framework that's getting
[02:32:14]  built and i think it's cool to see angular come into the veat community because angular's classically had its own tooling i i don't even know what a basil is
[02:32:23]  but i've heard of it thanks to michiko is basil any good i actually don't tell me i don't want to know about basil um or basil or whatever the
[02:32:31]  hell it is um i think it's really cool to see angular kind of come back in um to the into the like mainstream of tooling and be part of that conversation again and
[02:32:41]  they are paying attention i i there's been some big changes over there in the leadership big shout outs to people like sarah drasner um and the whole angular team
[02:32:51]  just kind of looking outwards you know doing bake-offs between frameworks to understand them better i think i think i think we're seeing a transformation right now in the angular team
[02:33:02]  and i'm i'm i'm excited personally to see where it goes because i said i often kind of count them out but you know i don't anymore oh framework is
[02:33:17]  ssr because you seem to make something that's a problem oh thank you for that one um it's funny because if you've ever heard my description of uh the history
[02:33:27]  of the web which i don't know one of my earlier streams i used to say that the history of the web is the history of state management and about passing the bag like
[02:33:35]  a like hot potato like any you know like we we had stayed on the server and they're like no no go in the club like you know what i mean like everyone just
[02:33:43]  keeps on like like like it's when the music stops you know who's holding the who's holding the bag you know um so i find this take amusing because like at
[02:33:51]  a certain point sim solutions are like yes i want to own that state but it's still as messy as as it as it's ever been okay um yeah so yeah for angular
[02:34:07]  summary they're going to take ssr more seriously and they're going to look at signals they're they're in a portion of a modernizing so i would i
[02:34:16]  as i said i if i don't know if i'd look too hard here if i wasn't in the angular community but if i was an angular dev right now i might
[02:34:26]  be getting a little bit excited and go reach out get involved in the conversation stuff is changing i know a lot of angular devs love how things have been set in their way
[02:34:36]  for ages and years but if you are you know in a place with angular where you're like maybe less happy with the status quo i feel like now is a really good
[02:34:43]  time to get involved in the conversation okay let's move on number four svelte all right so what do we want to talk about svelte well svelte kit
[02:35:02]  out of any of the meta frameworks spell kit is probably the closest entwined with the vision of the framework for the future like to the point that i'm almost positive
[02:35:21]  like we know that react and next are like tied at the hip here a little bit but like i feel like svelte kit like there's another framework we'll get
[02:35:32]  to later that has this kind of relation to but they basically just they're just like just use of svelte kit svelte kit is svelte sapper
[02:35:43]  sapper doesn't exist anymore um yeah i'm not gonna talk about sapper but um yeah cell kit hit 1.0 and in uh december very recently it had
[02:36:08]  a lot of interesting talk uh this year because they they really pushed the conversation what like file system routing should look like um and i think that in general svelte kit
[02:36:24]  um for a lot of people who maybe are more reactive svelte kit is kind of like remix like they kind of sit in the same thing maybe it's better to say
[02:36:35]  that remix is like reacts version of svelte kit um like when i think of those frameworks even though i made a comment about remix being like next in a sense you
[02:36:44]  know it's it's like they're they're kind of view themselves with the same sort of values sitting in the same sort of place i feel like svelte kit dev
[02:36:53] s if it wasn't for the jsx and the react hate would and remix guys would you like essentially occupy the same sort of zone so um that's like like where that
[02:37:05] 's kind of sitting where like it's about progressive enhancement it's about using forms and and the web the way the web was designed it's about the only the place where
[02:37:18]  they kind of separate a bit is remix went very hard on like the specific ssr only kind of thing you know cdns are just caches at a different time
[02:37:28]  you know what i mean like the the whole like no static thing so it's actually interesting because they have you know static uh generation they have like modes for every page like
[02:37:41]  there's a lot that they're doing here um the truth of the matter though is for svelte and if we're talking about that's where they've been if we
[02:37:50] 're talking about where they're heading what you should pay attention to um there's two there's two things that are on my radar for svelte and svelte
[02:38:00]  kit first of all i don't know how much you want to trust adam rakis but he was hanging out with rich harris and there was some comment about server components for
[02:38:09]  svelte i don't know if this is just your typical like don't want to be left out kind of conversation where people like oh yeah i saw that but my gut
[02:38:19]  here is this rich has very much stayed out of the partial hydration stuff and the cervical stuff because he basically said it wasn't worth it from his perspective he just didn't
[02:38:27]  see the value of it um and i had a lot of conversations with him you know on twitter and type like on this side and he was just like you know he basically was
[02:38:37]  like when someone comes up with a good enough solution we'll copy it right and in my head i was thinking well maybe copying it won't be as easy as you think
[02:38:47]  but it depends on where these things land um i think i think he's like now maybe that he's seen the next example or whatever he's trying to get a picture what
[02:38:57]  what this could look like i feel like he should come uh take a look at my notes if this is what he's interested in because i think the approach that we've been
[02:39:05]  working with solid on server components is one that is more copyable by other frameworks than what react is doing yeah i i i i that i'm not gonna lie this this
[02:39:22]  is the thing that i regret most about not being around for nextconf and doing that other the thing is if i was at nextconf i wouldn't have been at ngconf
[02:39:30]  and i wouldn't be such an expert on angular now um but um i have not met rich in person yet and uh that's something i need a remedy we just haven
[02:39:42] 't we just haven't crossed paths haven't crossed yet so i so he's very high on my list of people that i hope that i hope to bump into at some point
[02:39:49]  at a conference um i i got the chance to meet uh dan abramoff when i was in london so that that was really cool he was also like high
[02:39:58]  on my list so anyways to be fair i was speaking at it about solid js so i i think i get an excuse on that not ng was like the js path of it
[02:40:11]  but it was it was an ng comp that had a javascript portion um okay so yeah server components and so fuck it this one might be more of a rumor i wouldn
[02:40:25] 't i wouldn't i wouldn't put too much here yet but something to pay attention to second thing on svelte svelte 4 is coming up as part of
[02:40:34]  the conversation and i think this is something more tangible they've been focusing so long on kit they're like it's time to it's time to take a look at 4.
[02:40:42] 0 and see where we're heading what does svelte 4 mean so far to my understanding two major features have been talking about one nested reactivity they specifically references
[02:40:56]  to solid stores okay something along those lines second piece that they've mentioned smaller component compiled output i've heard some talk about their svelte hydration not being great but i
[02:41:20]  don't know enough about that it seems to score okay on performance i don't know if there's bugs so the these these are these are two areas where you can expect some
[02:41:32]  movement from from on the on the uh on svelte 4 that they talked about um because i i mean i made this comment a while ago if you have a reactive
[02:41:42]  system and you just have only signals for like nested reactivity and like especially when they're tied specifically to the component like svelte's lets are like you can't
[02:41:53]  there's certain things that you can't you have to overrun them and this is why svelte can never like never touches solid on the these kind of performance benchmarks
[02:42:04]  because like um i think if some people i've shown on stream in my chat if you remember the react forget um demo with the to-do mbcs um if you
[02:42:16]  don't have nested reactivity you can't update a field on a particular to-do without re-rendering the list svelte re-renders the list
[02:42:25]  it doesn't like do the dom rendering but it does go through a list re-rendering cycle and there's no way in svelte to not do that um
[02:42:33]  nested reactivity will solve that if svelte breaks it into separate components so it's not perfect because svelte still updates or component based like they're not they
[02:42:45]  don't do fine-grained rendering but it will be a big step forward um and able to do those kind of optimizations because right now if you just put like all
[02:42:54]  your data in a store anytime any of that data that store changes you're just like re-rendering a bunch of components um so you it kind of pushes you to
[02:43:01]  making smaller stores uh which is like fine but then it's harder to synchronize that when you react to state you have to synchronize it so it's like this i wrote
[02:43:11]  an article about this a couple years ago about like how what you can learn from react to be a better svelte developer it's they're going to finally address some
[02:43:19]  of those kind of criticisms and concerns uh around uh where svelte's compiler is kind of limiting from a performance and like reactive ergonomic standpoint the other big one is smaller
[02:43:35]  component compiled output and what i mean by that is i don't know if evan you popularized this comparison originally but i wrote an article a little while ago and it
[02:43:47]  was like to do mvc and this comparison article which i guess i will drop in the in the chat svelte stores are like a bit like redex stores
[02:43:59]  they're simpler and they're they're more like rxjs if you didn't have any operators right um but one of the things here is they're very conscious the fact
[02:44:15]  of by the time you get to again, rather large size, but like 80 to do MVC size of components, Svelte is like 30% larger than pretty
[02:44:27]  much any framework. It's even like larger than React. It scales particularly poorly compared to other frameworks. A lot of the frameworks are like, you know, kind of lock
[02:44:40]  and step once you get past like their initial cost. Like when you're building small stuff, Svelte is very small, solid and preact are right behind it
[02:44:48] . But very quickly, once you get to like five components, once you get to three components, essentially, solid is smaller than Svelte. And while I'm not
[02:44:56]  going to nickel and dime over a couple kilobytes, you just see that gap widen and widen and widen until like, I hope you don't have pages that are like
[02:45:06]  much larger than than this on on on pure component size. I'm not talking about like third party libraries and like things that are heavy, but I mean pure like UI
[02:45:16]  code size. But like this, this, this is starting to get to a point where it actually affects your page load and your performance. So they are looking at this.
[02:45:31]  right. So this is this, these are the two things for Svelte and Svelte 4 and I expect that kind of movement to happen there. Okay.
[02:45:41]  We still doing good. Everyone's still alive. I see, I got a lot of frameworks to cover here. I figured people would be like requesting the framework they want me
[02:45:52]  to talk about in the chat, but they really haven't been. Okay, let's keep on moving. um, I think I'm going to do some of the
[02:46:01] , the smaller frameworks now. Um, who's next? Uh, sorry. Uh, let's see who's next. Oh, I got to click outside of the,
[02:46:17]  this, this text box is too big. Okay. All right. Five. Let's talk about Preact. And does Preact have a meta framework? Well,
[02:46:30]  Preact does have Fresh. Um, I don't know. Does Preact have any other meta frameworks? Um, Remix? I mean, I'm not getting
[02:46:50]  into like agnostic meta frameworks. It's more like Fresh has Preact. Right. I can argue about stuff like agnostic, like, like, like,
[02:47:01]  uh, like Astro or whatnot, but I wanted to talk, uh, I actually think Remix probably deserves first party attention here just because of like the, the
[02:47:11]  sort of thing forming over at Shopify between Hydrogen, Remix and Preact. Yeah. Yeah. I mean, it, yes. Remix, uh, Preact
[02:47:25]  has all the React frameworks. Um, I'm being a little bit, uh, what's the term? Facetious. Um, that I'm talking about Pre
[02:47:34] act first meta frameworks. Um, and I, I'm kind of joking here that Remix could become a, a Preact first meta framework, or at least a certain
[02:47:47]  version of it. I'm not saying that's what's happening, but that's like, I think it's enough of a point for me to, to bring up
[02:47:54]  to be fair, Preact probably gets its biggest wins. And you're right. It's probably, I'm going to mention Astro again here, but it's
[02:48:03]  probably worth mentioning Astro. Even though I want to talk about Astro separately as well, because everyone who's moving their next app, you see all these people are like
[02:48:14] , I, I don't even have to go far. And I got Theo in chat. If you go to astro.build and they're like, Holy, I
[02:48:21]  rebuilt my Astro site out of curiosity. And I went like this to this, anyone who does this, and like Jason did, uh, Langstrom or anyone who
[02:48:30]  does this when they do this move, they aren't using React. Astro with React is not 7.6 kilobytes. I just want to point it out here
[02:48:45] . So this is, in a sense, there's probably two or three frameworks you should use with Astro. And I'm, so I mentioned it here we'll
[02:48:57]  come back on Astro on that. Um, but I, for, for, from a Preact perspective, like generally speaking, this is what you're looking at.
[02:49:12]  And the big thing for the big new news for Preact this year was signals. Um, because, but I, we're, we're yet to see how that perme
[02:49:22] ates through the ecosystem because it changes the authoring experience enough and the impact of like how updates happen that a component that uses, like you have to put signals on the
[02:49:32]  leaves, right? Because I mean, I guess you could always de-opt at the point of the component level, but like you, you can't just be using components
[02:49:40]  and then like add signals and then go, you, you, you have to, and you go, Oh, I want to use that component that doesn't use signals.
[02:49:47]  Then you have to like go, okay, now I'm going to just de-opt at this point and then do it. Like you have to make the conscious decision
[02:49:52] . When you add a component in Preact, you have to go, is it signal aware? Like that's the question you're asking. Um, and then you,
[02:50:00]  that determines how you pass the signal to it. So, um, if signals in Preact are, are, are, are a real thing, it's also another ecosystem
[02:50:14]  resetter. Like we've talked about with Vue and with React. It's a good time to do an ecosystem reset. And let's face it, Preact
[02:50:22] 's ecosystem is not particularly large. It's like React's ecosystem, uh, when you have Compat, but if you're talking not about Compat, like it doesn
[02:50:31] 't matter. Their, their ecosystem is not particularly large, right? So like from, from that perspective, this, this is this, like, like I, I
[02:50:44] 'm just going to erase this at this point. Cause like there's, there's no ecosystem really to reset here. Um, so like they're, they're, they
[02:50:52] 're, they're pretty good on that. Um, they've been working again. I don't know when it's going to come out. Uh, let's see.
[02:51:00]  Preact 11. Yeah. It's not out yet though. Right? Yeah. I don't think it's out yet. They've been working on Preact 11
[02:51:10]  and Preact 11. Jason has been hinting that he's doing incredible performance improvements, um, in Preact. And he keeps on showing this like spinny thing that
[02:51:24]  spins around over and over again. I don't have the tweets in front of me, but he's every like six months, he shows how he got like it a little
[02:51:31]  bit faster. Um, and he's talking about how it's like X times faster and all this stuff. Apparently this, um, rendering and performance improvement, it's
[02:51:41]  going to be in, uh, it's going to be in Preact 11. Um, he has stated though, that he doesn't expect it to compete with, um
[02:51:52] , like stuff like solid in terms of performance, but he, he does vary. Uh, he has been hyping this. So I'm looking forward to see where
[02:52:02]  they take, take this next. Um, but it's an interesting story now because Preact has signals and they're, and they're working on some performance improvements. I
[02:52:13]  don't know how these sit together nicely, but, um, they're definitely kind of upping their game. And I look into 2023 for them to, uh,
[02:52:25]  kind of establish more of an identity outside of React. They've been kind of under React shadow. They made it very clear this year that they want to get out of that
[02:52:33]  shadow. So, um, I think it's an interesting time. I think you choose Preact for utilitarian reasons right now, because it's like React, you
[02:52:43]  can just port your next app into Astro with it. Um, but I, I think generally speaking, um, it still remains to be seen how good of, uh
[02:52:54] , like a first party choice it is not because you're kind of just being pragmatic in terms of where you're at. Um, only other thing to mention here, Fresh
[02:53:05] . Fresh had a, a big swell right off the gate. Um, a lot of times I forget to mention Fresh. Fresh is the framework that I always slips my
[02:53:15]  mind because it's a lot like Astro, except like for one framework, it does have an interesting authoring experience because of that. Um, both because it's all
[02:53:23]  TypeScript and it's all Dino and it does this whole thing. There's like no build step and no, like it, like it builds in the background, but
[02:53:29]  like essentially you just get this environment where you just start, start your Dino process and you just go, there's no NPM install or whatever. It makes this
[02:53:37]  really compelling feeling like thing where you're just like, you feel like, like the old days when you just opened a notepad plus plus and opened it in the browser
[02:53:46] . That's not what's actually happening. But for a lot of people, um, this illusion of no build makes them happy or feel like things are simpler. The problem
[02:53:56]  is of course, when things go wrong, which tend to happen on my stream, and then you're like trying to debug stuff and you can't find anything. So
[02:54:02]  it isn't actually no build, but because it feels like it, I think it's a very attractive to a certain audience of people. I think fresh, I think
[02:54:14]  we should, we should see how it progresses and how much work they put it over in the next few months. The Dino got team, core team, uh, made
[02:54:23]  it and they like, they have lots of stuff they're working on right now. So I don't know how much they're prioritizing it. It had a few rough
[02:54:29]  edges when I used it. They probably made some improvements, but like, I don't know how high priority it is. Um, and currently, unless you're in
[02:54:37]  this very specific niche, it's not really offering, and even in that niche, it's not really offering much of an advantage over something like Castro. Um, I'm
[02:54:45] , I think though, that it's a very good showcase of what Dino is about. All right. Next framework. Who's next? Yeah, I think we
[02:55:07] 're on, I think we're on, we're on solid now. Um, and solid start. Should I put Astro here? Why not? Do you know why
[02:55:26]  I'm putting Astro here? I mean, I could put Astro everywhere. Oh, you're right. I'll do lit next. I'll do lit number
[02:55:36]  seven. Yeah. Sorry. My bad. Yeah. Lit, lit, lit, lit should have been next. Um, mostly because, um, before solid had solid start
[02:55:46] , like there was like a good, and then we're still in beta, but like there's, there's definitely use cases where Astro still makes the most sense.
[02:55:54]  But before we really had solid start, I was just like pointing, I'm like, guys, just go use Astro, you know, like, unless you want
[02:55:59]  to build your own SSR solution, which you can. And few people tried there was snap from the builder guys. Um, there was something called liquid. Um, but
[02:56:09]  these projects never really got very far. Um, obviously the builder guys, uh, uh, found quick, uh, after, you know, getting a few steps into snap
[02:56:19] . Um, and, uh, liquid just lost its, uh, momentum. Um, but, uh, generally speaking, Astro is a solid choice for solid.
[02:56:33]  Solid start is kind of are more specific. Like solid start today is very much on the Svelte kit remix side. It's solid version of those. Um,
[02:56:42]  I think you could really just put Svelte kit remix and solid together and just be like, it's the same framework for different, like tailored specifically for what those frameworks
[02:56:54]  feel is important or valuable to them. Um, I'm not going to focus too much on like the things like we, we do want to get some of this like static
[02:57:04]  generation for every page stuff. Um, but yeah, if I'm looking to 2023 server components, everyone knows I'm hot on those. After being able to show that
[02:57:14]  you can do server components with about five kilobytes of JavaScript, that demo, that drawing that I showed earlier here, this one about scaling doesn't apply. Suddenly it
[02:57:25] 's scales like MPAs. And when you make your little blog site, you don't have to worry about this. You're just shipping this. So it makes
[02:57:34]  all the difference, um, for perception, at least on the small side and on the larger side, you're going to get to point a page complexity until I guess you
[02:57:43] 're getting into like stuff larger than the stuff I saw with e-commerce. That's what I got to say. Maybe like some Google level stuff. Okay. And yeah
[02:57:56] , so that's on the solid start side. Um, what else we want to, what else are we going to looking forward to for 2023? Solid 2.0
[02:58:06] . Yeah. Yeah. Let's talk high level solid 2.0. What are we going to, what are we looking at? Updated reactive core. Um, this
[02:58:20]  is interesting. Um, we're looking a lot at how we can not, performance for performance sake on the reactive core is not terribly important for me. I know I've
[02:58:31] , I've been sleeping on performance improvements through solid reactivity for, for years because like it wasn't worth the complexity. However, uh, fundamental change in the way
[02:58:42]  we drive data to be lazy, um, is, is, is something that's going to enable us to do. We're basically for those who aren't too familiar
[02:58:54] . Solid's reactive core is what we call push pull. And, and essentially on the push side, you have things like RxJS. Like it's always not
[02:59:10] ifying. It's always an event things. Solid and auto tracking does this kind of thing where it actually pulls sometimes, like when it asks for the value. And it's
[02:59:17]  this kind of combination of both like pushing updates and then pulling. And we kind of settle in a way that's predictable and topological and all that kind of stuff.
[02:59:25]  However, with 2.0, the reason we're doing this change is we're going to go from, we're going to stay push pull, but we're going to
[02:59:34]  be more pull, which will make things like virtualization, um, easier. Basically we're looking at optimizing the paths not taken, which isn't something that was really
[02:59:44]  important for like most applications that are doing, uh, like you're interacting with them. But what this is important is, is it's basically building printers into the language to
[02:59:56]  handle virtualization. Like as I'm looking at stuff like large tables, I'm looking at, you know, reacts pull based primarily. And for that reason react,
[03:00:08]  you know, a lot of certain types of problems are simpler for them to solve. And I'm not saying you need a virtual DOM to solve these problems, but being pull
[03:00:16]  based makes it a lot easier to schedule when you do that work. Solid has scheduling by using this kind of hybrid, but I want to make it much simpler and consistent.
[03:00:26]  And that's really what what this is about. A lot enabling things like off screen, um, making suspense and transition logic a lot simpler to write, um, from
[03:00:35]  an authoring standpoint from like me as a framework author. Did the small guy bully me? No. Yeah. Um, essentially, um, I want to, I
[03:00:54]  think this is going to be the main movement. I want to look at stuff like create computed for the most part, this isn't really an API change on any of the
[03:01:01]  core primitives and anything that kind of goes out the door will be supported through, uh, like a legacy import package because we can always just replace primitives with other prim
[03:01:10] itives or like remake our existing primitives with old, with new primitives. Like, so like migration path here should be relatively straightforward. Um, the other thing is
[03:01:24]  I, I, I, I built solid 1.0 basically ignoring TypeScript existed. I did write it in TypeScript. I just ignored that TypeScript was a thing
[03:01:34] . Um, if that makes any sense to people, um, mostly cause I just didn't like it, I, I, I, I saw it as a necessary
[03:01:44]  evil. Um, I don't like compromising cause of TypeScript. I'm not saying I'm going to change, but there's a few places where we can ease
[03:01:54]  people on TypeScript a little bit. Um, if I give it like a tiny bit more consideration. So, um, we're, we are looking at that. Um
[03:02:04] , but yeah, most of the rest of 2.0 is all based off, extensions on top of this core. This is what, this is like why the breaking
[03:02:13]  changes are happening. But once we have the, this kind of mechanism, we're going to be able to do a lot more things than we can do today. And this
[03:02:22]  will play into, you know, even, uh, problems to improve hydration and stuff. The hydration stuff is outside of the reason we're breaking it. We're breaking it
[03:02:35]  for this. Then the hydration stuff will be built, the built on top of it. I do hang with Tanner and I, the, the, a lot of the
[03:02:46]  work right now about this new push-pull reactivity, that we're getting to test because of Tanner, um, uh, this Tanner, uh, Linds
[03:02:57] ley makes a great set of, uh, tools around agnostic tools now with TanStack, um, that rely on these kinds of mechanisms, um, like
[03:03:07]  virtualization and performance for large tables and whatnot. And that's actually where solid 2.0 is getting its testing ground. Um, so like the reactivity system, um
[03:03:20] , is, is if some people have been watching PRs, it's been sneaking its way into, um, the agnostic core of TanStack. Um
[03:03:29] , so yeah, I, I, I'm, I obviously have more insight into this, so I'm not gonna like sit here and like compare to the other frameworks,
[03:03:38]  like go over all the cool stuff coming in solid, but I, I just want to kind of put that out there. Someone asked earlier if, if islands or server
[03:03:45]  components and solid are going to be a start are going to be stable. Um, I'm not sure yet. It's not part of my 1.0 goals for solid
[03:03:53]  start. I want to just get solid start stable as is. Um, it might happen at the same time because of the timeline and who can work on different things at certain
[03:04:01]  times. But the biggest thing is I'm not, I'm not happy with the DX story on server components right now. So I'm not shipping this. I don't
[03:04:10]  want to be stuck with that DX story. If we can find some smart solutions, things will move faster, but it's all about what resources help, uh, have
[03:04:18]  like, if I'm sitting doing all the bug fixing on solid start right now, I'm not working on that. Uh, it's not anything. Solid's TypeScript
[03:04:30]  support is fine. And we've learned how to wrestle around with TypeScript. I'm just kind of done fighting it in certain places that aren't, that were mostly my
[03:04:42]  stubbornness. Um, things like, like, I think it's, I'm not going to lie. I think it's really dumb to have to use a call
[03:04:49] back in a, in a control flow component just to narrow the, the type of something coming through. Like, I understand why you would want to do that from TypeScript
[03:04:56] 's point. But if I like ignore TypeScript for a second, pretend it doesn't exist, I would never create that API. it would be a, it's
[03:05:04] , it just wouldn't be a good API. Why would you add all that extra stuff? I'm, I'm, I'm bending a little bit more, um,
[03:05:12]  to being, you know, agreeable to stuff like that. I just, things that require extra function wrappers, like there's just places where TypeScript forces worse
[03:05:21]  ergonomics for TypeScript sake. And I have no, like, as long as there's an option that doesn't do that, I'm fine. But I have no
[03:05:31] , like, like if someone's like, no, that's the way the API be, I'm just like, no, no, like, like I, like
[03:05:37]  I, I won't suffer for my tool. Uh, but yeah, I, it's, oh, multiple parameters or config objects. Huh. That's interesting. I
[03:06:01] 've always liked parameters because most stuff with solid is wrapped in functions. So configs are op, like you now have objects with functions in them. Um, but it
[03:06:10] 's, it's, it's where the case makes sense. I usually have to do a split. Um, but yeah, I, examples of this too are around create
[03:06:22]  store and stuff. Like I, another example, if you want to know is like, I really liked the path syntax. It's very concise. It lets you do
[03:06:34]  really powerful things for less time, but TypeScript absolutely hates the, the path syntax, like trying to get like functional program path type stuff. Like we've had experts come
[03:06:45]  in and work on it. It's still not perfect. I would never get rid of the path syntax for store setters, but the, like the produce syntax,
[03:06:58]  the mutation, the localized mutation syntax doesn't have all those problems. The types work so easily, read only, all that stuff just works. And it's kind of like
[03:07:07] , the funny thing is the path stuff actually requires significantly more code. Um, so like swapping around defaults like that while still doing, you know, I'm
[03:07:17]  balancing that or the kind of things that, that, that I'm thinking about. I hear this, everyone tells me this, those people should come help on the solid project
[03:07:30] . Cause I have people who like, there are some experts on TS and then I bring this stuff up and they're like, yeah, not really like yes. And
[03:07:38]  no TypeScript is working on it, but it's like, it's, it's like, will it ever come? Um, there's a working group around the react
[03:07:47] ivity. Um, I haven't kept up on it. I'll funnel stuff back in, but there, if you look on the solid org, there is a reactivity
[03:07:56] , there's a working group and then there's like a reactivity discussion in that working group. But, uh, right now just working on the reactive core. So
[03:08:06]  it's still early days, but, um, I'm hoping that we'll start seeing, like, I don't know if this will affect everyone this year, but we
[03:08:16]  should have progress during this year. Okay. I don't know if there's anything else I want to say about solid, um, right now. We'll talk a bit
[03:08:26]  more about stuff in this week in JavaScript. Let's keep on moving. Lit. Um, yeah, I mean, in the framing of this, lit is lit.
[03:08:43]  Uh, there's, there's, it's not like an, it's, it's the platform, right? So you don't, it's not the platform,
[03:08:50]  but there's no meta framework, right? Um, oh, man, the, the, the web component, uh, way. So yeah. Um, yeah.
[03:09:13]  I mean, lit is a framework. I don't know if it's meta framework or thing, but yeah, I guess, I guess lit has been adding, uh,
[03:09:21]  just to summarize, um, it's web components. It's a framework for authoring web components, right? Work for, for web components. It is a framework
[03:09:36] . It is not the platform. It is the framework. And they've been working a lot on SSR, uh, primarily. They've been working a lot of stuff
[03:09:50] , but SSR has been a big thing. Now that we have declarative, uh, shadow DOM, people are like, oh, now we can do, uh
[03:09:58] , SSR web components. Well, the answer is like, not really like you have a mechanism now to communicate this over the wire, but you still don't have a
[03:10:10]  way of rendering web components on the server. And if you tell me that you're going to bring in like Domino or JS Dom, like that is just terrible.
[03:10:20]  Like you don't want to do that. The lit guys know you don't want to do that. Like that is not the option. Right. Like it is,
[03:10:31]  it is not like this is the missing gap. And the, uh, so the, the one cool thing that the, the guys that lit there, they're,
[03:10:43]  they work at Google, they're tied with like the old polymer team. Like they're, they're, they're, they're, they're, they're, they
[03:10:48] 're, they're, they're, they're, they're definitely invested in web components succeeding. Um, is that they've been opening a bunch of groups of like open
[03:10:54]  standards and stuff. And I covered this in my web component stream at the very beginning of this year, like around February and they are, whatever they put in lit,
[03:11:02]  they're trying to figure out if it's generalizable, um, for all web component frameworks, um, I've had bad luck with agnostic solutions, um,
[03:11:10]  on the web component space. I've, I've had to create my own every single time, but that's largely because of fine grain reactivity. But, um,
[03:11:19]  yes, there are groups here. I, my expectations here is that, um, uh, I'm saying lit, but we're, we're, we're gonna
[03:11:26]  treat lit as, um, web components. This is, this is your, this is our chance to talk about web components today. Um, what we're gonna, my
[03:11:37]  expectation is we're gonna, we're gonna, we're going to see like legit SSR web component solutions. Okay. But I mean, I, I don't
[03:11:51]  know if, uh, yeah, I mean, I, I've seen stuff like talking about standards on like context and that the problem is they're trying to design, like
[03:12:05]  they understand that doesn't belong in the standards, but now that they have these tools that are standardized, they're trying to design like, uh, do you know what the
[03:12:11]  challenge is? Like best thing about web components is that like anyone can build a framework and that's what's happened, right? Solid started because of web components. I
[03:12:21]  was like, oh, I can build a framework. And the problem is it's not really a framework. It's like a rendering library more or less. And then what
[03:12:30] 's happened now is for web components to succeed because it's like fractured because you, that's the whole point. You don't want it to be a single way.
[03:12:37]  You can only put so much into the standards because you can't alienate different approaches, but at the same time, you want them all to work with each other.
[03:12:44]  So you have to define interoperability layers. So let's kind of heading up, um, kind of like, uh, unofficial standard, um, around how you
[03:12:56]  can do stuff like context, how you can do stuff like, uh, SSR, basically trying to build a framework for the web on web components where you can use any
[03:13:10]  web component. That's kind of their goal. That's what they're working for. Um, I, if that sounds good to you, maybe check it out and
[03:13:18]  get involved there. There's a lot of great minds kind of working towards this because like web components, um, in theory, get us away from frameworks. I just want
[03:13:33]  anyone who goes there to understand that they're building a framework by doing this. So, and as we talked about earlier in the stream, when you kind of go from
[03:13:40]  the base level, like the core library approach, like maybe let's lit HTML and move outwards to the framework, you move slower and you make more opinions and it gets
[03:13:52]  riskier. Like more things, your work gets slower and opinions change faster, the further out, like the more abstracted you get. So don't, the value
[03:14:03]  of the future proofing of web components gets lost the farther up framework land you go. So yeah, I don't, I can't say anything more about lit right now
[03:14:16] . Otherwise I sound like, like I don't have nice things to say. Okay. Let's move on. I love that the chat now is like talking about
[03:14:30]  like Go and Haskell. Like what's, what's going on here? I'm sorry. Theon Maple, I'm, I'm not following you guys, but
[03:14:37]  I think that's, that's probably the thing. Um, yeah. And if I am going to talk about web components, I want to talk about Eleventy and
[03:14:43]  WebC, um, which adds kind of like these islands, um, in the Eleventy. I think, I think this is a very cool approach. And
[03:14:52] , uh, I think while I'm not like the biggest web component advocate, I think using web components to solve specific problems, like expanding kind of the dynamicism of Ele
[03:15:02] venty or whatever is a really good use case for them. I think web components are really great for, for that, uh, Zendesk widget, like where you
[03:15:11]  have to like insert it. Like, I think there's things I just, when you're getting into framework zone and start thinking about that, I, I, you
[03:15:18]  really got to realize that you're just doing the same thing as everyone else. So like the superiority complex should just kind of go away. Um, but it tends to not
[03:15:29]  anyways. Okay. Where are we? Um, let's see. I got to look at my list here. Preact. Okay. We, we, we've
[03:15:52]  got a few left. Um, uh, yeah, I'm trying to choose which one I want to do next. I mean, I could do a really short one
[03:16:20] . If Marco six doesn't come in in 2023, um, I don't, I don't think I can talk about Marco anymore. Just legit. Um, I
[03:16:37] , I, I, I'm, I'm, I'm throwing this out here that we've made great progress. The guys working with Marco are some of the smartest people
[03:16:45]  I know in this space. I come, I bring them on regularly cause they always instill insight and widen perspective. But at a certain point, it's got a ship
[03:16:56] . I was really hoping that we'd get there for, for the, for like the, the, uh, the fall of this year. Um, I,
[03:17:14]  the thing is we just, someone showed a curve where like you, you're building a project and then you have to like cut scope to meet expectation. I saw this on
[03:17:22]  Twitter. I think it was somebody from the react team, maybe a sub or something, or like Marco six is kind of at that point where like, it's just like
[03:17:30] , it can't, the problem is they're, they're building. If you have the picture, you have the smartest minds in the world and the funding, the back
[03:17:38]  it, and the most ambitious goal, they're building the perfect framework. And I know not everyone's going to like it necessarily, or, you know, whatever,
[03:17:45]  but you know, the same way, not everyone likes felt or like solid or whatever, but like they're the stuff. And even the prototypes and demos, you see what
[03:17:57]  it's capable of, um, you know, and I've seen more because I'm closer to it, but like it ships the least possible amount of JavaScript that I can
[03:18:06]  picture. It's much smaller than what I've done with the solid router. It's much smaller than quick. It's much smaller and it's resumable.
[03:18:13]  And it's like the way they do the authoring and the analysis, everything is so smart, but like, it's also, we talked about like the long haul thing
[03:18:25] , like, uh, angular Ivy or the react stuff they've been going on for a few years. Marco six has kind of been like, it started internally, like
[03:18:35] , I guess, 2019 it's, it's been three years. Like it's, it's, it's, it's, it's one of those kinds of efforts
[03:18:41] . Um, do you know what the challenge, the challenge is, what are we selling right now? Right? Like this is, this is, this is where the
[03:18:55]  thing is like, there's, there's, there's understanding that it's like, everything is on hold. When you get the larger project, everything just gets pulled into
[03:19:03]  it. And it's just like that, that Marco six in a sense is, is like a new framework, you know, like it almost has to start from scratch
[03:19:13]  and it just needs to ship. Um, but the problem is it, or the challenge there is eBay relies on Marco. So there is like, that whole thing,
[03:19:33]  uh, router is out past this, right? Cause you can just use the, the server router because Marco is an MPA, but they, but there is talk
[03:19:41]  about building a smarter hybrid router. So any, yeah, it's cause all the work isn't happening on the main repo. It's happening on a secret repo. Look
[03:19:57]  for, I don't know. I think it's visible, but it's, it's, it's called X. Um, no, no, yeah, this is
[03:20:05] , yeah. Um, yeah, so it is moving along. I just wanted to give it a quick shout out. Cause like the problem is things are missing that are
[03:20:21]  business critical for eBay and like the streaming and the async stuff is missing still. And it's absolutely vital for eBay's main, uh, use case. So it's
[03:20:33]  almost like not even worth it, but like a lot of the other stuff is there, like for people building, you know, simple stuff, you know, it works
[03:20:41] . We're able to make hacker news. We're able to make to do MVCs and all that, but the Marco six is a bit like trying to make the jump
[03:20:50]  that Svelte did to reactivity in the, in the, in the compiler, the jump that, uh, quick did for resumability, the jump that,
[03:21:00]  um, uh, solid did for fine grain reactivity and the jump, uh, I'm trying to think. I think it's mainly those three. Um, and
[03:21:15]  just like doing it all in one go. Oh no. And the jumps, uh, react made going to concurrent rendering, like do, you know, in suspense and streaming
[03:21:26]  like react 18, like the, from 16, 18, that three year gap or whatever, or longer than that, whatever. Um, it's like trying to do
[03:21:35]  all of those in one go. So ambitious project, speaking of which, uh, let's talk about quick and quick city. I, I, I, I,
[03:21:56]  I had a funny chat with, uh, someone the other day. I don't know if they want to remain anonymous, but then they're like, I don't understand
[03:22:04] . I don't understand what quick city is like, what's the difference between quick and quick city? Yeah. Theo asked me, which is, yeah. Theo asked me
[03:22:21]  what the difference between quick and quick city is. And I, and I, and I, and it's funny cause he talked to Mishko himself, you know
[03:22:26] , people, people, you know, can they go and they like, and the truth of matter is quick, like Marco is just, is, is the full framework.
[03:22:35]  It does the server branding, does the partial hydration, does the optimizing. So what, what is quick city? Um, quick city is you want to say this,
[03:22:49]  but it's not in a sense because quick has SSR and partial hydration or whatever quick does and progressive things like quick by itself does all this, like does a lot
[03:23:05]  of the stuff that, you know, like the core stuff you expect from next or, um, you know, solid start or noxt or spout kit or whatever.
[03:23:14]  Quick does that by on its own, same way Marco does. Like it's a server first framework, quick city. Yes, that's the answer. Quick C is
[03:23:26]  a router. Quick city is a router. Yeah. And it's maybe, uh, a couple, uh, uh, primitives around like, uh, uh,
[03:23:43]  resource loading and stuff like, uh, they're looking at adding mute. Yeah. Let's talk a bit about, there's some stuff that's on their roadmap that they
[03:23:52]  want to add big thing with quick is they, they went from a very beat on centric approach this year, this year saw that like, they're still beat on,
[03:23:59]  but they went from very beat on to like beat on plus reactivity. This is, this is, this is what they, what they did. They, they added signals
[03:24:09] . Um, they, they, they added the pre act style signal optimization where you can get those like specific winds in the, in some narrow areas. And like that
[03:24:17] , that's kind of like pre act and quick are very similar in that sense. Um, they, they went beta and beta for quick city was big thing, but when
[03:24:29]  we're looking as continued, they're going to continue on this path to see what more they can get out of reactivity. They're going to look at out of order
[03:24:36]  streaming right now you can do out of order streaming in solid. You can do it in, uh, react. You can do it in Marco. I don't believe
[03:24:49]  it's in most other frameworks. Um, they have in order quick has in order. So does Astro. Um, I was talking to someone view has in order.
[03:25:03]  I'm not sure if they have out of order. I don't think they have out of order. Yeah. Um, with Nux, but I was trying to
[03:25:08]  Daniel and it, I wasn't a hundred percent clear on that. So that could be a correction. Oh yeah. Well, sorry. Remix is out of order.
[03:25:20]  It's, it's react. Sorry. All the react based frameworks have out of order. So quick wants to add out of order. Um, right. Yeah.
[03:25:30]  So yeah, sorry. When I say react has out of order, I, I, I extend that to all of the them. So these are, these are things that
[03:25:38]  they're going to, they're going to be working on, uh, uh, out of order streaming, um, their version of hybrid routing. I mentioned there, there
[03:25:51] , they have something called containers. So it's kind of like micro front ends for quick. And they're using that as the, the mechanism for doing their, their
[03:26:03]  routing as well. Yeah. Actually, maybe I should just say containers hybrid routing, micro front ends. Um, seeing what chat's doing. Oh, it's a
[03:26:33]  bunch of quick stuff shared. We call enough things. Talk to me, talk to me. Go. I mean quick, if you don't let them call it containers,
[03:26:44]  they might call it like something fun, like party town or quick city. So, you know, do keep that in mind. If you don't want them to call it
[03:26:53]  containers, you don't know what kind of name you're going to end up with. Party town is still the best name ever. That's like one of those ones
[03:27:09]  where like, like, it's like a split vote, vote where people are like, it's the best name or the worst name ever. Um, party town is amazing
[03:27:16] . Um, the thing is, when you talk about frameworks, every framework should integrate with party town right now. Party town is like one of a kind. Like it
[03:27:26] 's, I didn't, I, I, I gave my pick for JS survey or whatever. I should have picked party town. Um, I don't know if it
[03:27:39]  came in 2021 or 20 either way, party town should have been my pick. party town name is so bad. It wraps around to be good. Yeah. I'm
[03:27:53]  giving Theo a little bit of air time here, but yeah. Um, anyway, um, yeah, this, this is the kind of stuff I expect from, from quick
[03:28:17]  on the technology side. Um, I didn't talk about quick much for those who aren't familiar. Um, quick and Marco are two frameworks that are investing a lot
[03:28:28]  in resume ability. Um, which is this idea of being able to not run hydration and serialize the data instead when it wakes up. Quick also has some cool stuff around
[03:28:39]  progressive lazy loading of code. But, um, generally the, the big interesting thing from my perspective is resume ability, because as we showed in the chart earlier, the
[03:28:48]  spectrum of JavaScript overhead resume ability really can make that last bit of difference if, if for optimization, um, here. So like, I think that like we, there,
[03:29:04]  there is some interesting range. I think right now the problem is we go from here to here and it's like a chasm. I think it'd be interesting to
[03:29:13]  see if there's more play through here and, and I'm, I'm right now very much exploring if this is actually a range because this also right now is a little
[03:29:22]  bit of a chasm, but I don't think it should be. Um, so yeah. Uh, just so you understand, that's kind of the thing.
[03:29:30]  Uh, and, and to understand this JavaScript overhead, mostly 99% is about, um, initial page load. Um, and it can also be about future navigations,
[03:29:44]  but it's about big motions. It's not about interactivity. Um, these kinds of technologies will not impact how responsive your app feels when you're like doing
[03:30:00]  actions in it and doing that stuff. This is, this is about like navigation. Just on, just on a side note, tan stack wasn't, it was like Tanner
[03:30:24]  didn't come up with tan stack. People just called it that. And he was just like, um, where does live view go? Side note. Sorry. Uh
[03:30:43] , I can announce this right now. I'm doing a live view JS stream. I believe my next week I'm going to have the critter live view JS on my
[03:30:53]  stream. I don't know anything about live view and obviously maybe the Phoenix version is better, but I'm gathering my audience does not know about live view. Um,
[03:31:01]  so this is going to be my entry. Maybe if I, if I like it a lot, I'll, I'll get into Phoenix and talk to people about that.
[03:31:09]  But since we're like a JavaScript focused, um, stream, I'm going to kind of defer to, uh, live view JS and hopefully it's a good representation.
[03:31:22]  What live view JS uses Phoenix JS library as is. Yeah. There's a fee. Yes. So Phoenix is a, I'm not touching other languages. I mean
[03:31:34] , I guess I did. I touched rust in tie. Huh? Yeah. It's a free Phoenix is a backend framework like rails is. So someone can make Phoenix for
[03:31:44]  JavaScript or JavaScript. Okay. Phoenix is the meta framework. Yeah. Okay. I got you. I got you. Yeah. Okay. And Elixir is kind
[03:32:02]  of like Erlang, but different. Okay. I'm not, I'm not, this is not my area. I did some backend, but not like this kind
[03:32:13]  of stuff. I was doing like Microsoft stuff. I spent a lot of time in like.net and I did some Java. I'm not, I am not like,
[03:32:20]  I'm not in this area. Erlang's a VM. So it's like, like all the lovely flavors of Java then like how you can. Yeah. Okay.
[03:32:32]  Okay. Yeah. I actually have some Ruby. I did rails back in the day too, but okay. All right. Okay. Okay. Thanks. Thanks for that
[03:32:48]  thing. I am not covering live view today. Cause I don't know enough about it, but I think that's enough for quick. Just know that, um, they
[03:32:55] 're, they're doing, they're going to work on some, some of the gaps as long as well as like stabilizing, like shouldn't be understated
[03:33:02]  that, uh, I would be very surprised if quick doesn't 1.0 in 2023. I should just put that in stabilize for 1.0. I think they thought
[03:33:17]  that their beta period was going to be pretty short and that they might even 1.0 towards the end of this year. But I think, um, I think like all
[03:33:25]  of us, when you try and introduce a meta framework, you start finding real bugs and since the fate of quick and quick city are kind of tied together like that,
[03:33:32]  I imagine it will take quick cities stabilization for, um, for quick stabilization to happen. That's my, that's my hot pick or take, you know, not hot
[03:33:44]  take, but that's where I'm thinking. Um, okay. Let's talk Astro. Um, Astro was my pick for 2023. Right. Could you
[03:33:56]  not? Um, so like, um, it's a, it's an interesting one because these other ones are frameworks and they have meta frameworks built on top of them.
[03:34:06]  Astro is a meta framework. It's, it's an agnostic one. So, um, like I haven't forgotten any other framework, have I like
[03:34:16] , this is the worst thing. Yeah. I covered fresh cause I was doing preact. I always forget fresh. Everyone's like, what, what have you done this
[03:34:23]  year? And it's like, it's like fresh. I always forget fresh. Um, it's a poly framework. It's not meta. It's poly. Yeah
[03:34:31] . Okay. We need a new term for it. Oh yeah. Yeah. Yeah. The quick react thing. Yeah. And there's going to be more of that,
[03:34:41]  actually. You're right. Let me add that quick react thing in here. Um, cause there's quick solid too. Okay. Call it quickify. I,
[03:34:50]  I guess that's kind of like the obvious name for it. Part of me, me wonders where they got it from. I guess that's like the obvious name. Cause
[03:35:00]  see, I made demos showing how to put react and solid together about two or three years ago. Um, I mean, I've, I've, I've worked
[03:35:10]  on it recently and I'm going to show that in a little bit, but I, in my demo, I called the, the, the functions reactify and solidify
[03:35:22] . And I got the idea cause of solidify. Um, because I was thinking it was a joke. Cause it's like, take react code and solidify it
[03:35:32] . Um, you know, by turning it to solid. I'm not sure if that, if they like saw, um, that at all, but, um, yeah
[03:35:44] , I, I love solids. The best thing about solids name is like the puns, right? Like you just, it's never ending. Like the, the
[03:35:52]  application, like the fact that you could take a react component and solidify it, you know, anyway, um, in any, in any case, yeah, they're
[03:35:59] , they're, they're working on getting other frameworks in because they like, they can kind of act like a meta framework, like Astro. So that's, um
[03:36:08] , so that that's kind of like an, of interest in them. Cause one, one path is you can keep, and if you think about the containers and the micro
[03:36:17]  frontends, quick kids thinking big, they're thinking enterprise, you can tell they're thinking about like move to quick and then serve your old stuff underneath quick. Cause
[03:36:30]  quick gets, you get the value of quick mostly when it's the orchestrator, you can put anything inside quick and get a bit of quick value from it. So putting
[03:36:40]  quick inside other things doesn't make sense. You don't get any of the value or the benefit. So that they, that's why they're working on this kind
[03:36:49]  of thing. Cause like if they have a good solution for micro frontends, then you can run part of your app can be quick. Your main app can be quick.
[03:36:55]  And now you can run your old react app inside of it. Um, and quickify lets you do that. Maybe if you want to take some stuff from the ecosystem,
[03:37:04]  sure, you'll be paying the full cost of react. Um, once the component loads, you'll be able to like use this stuff and that's kind of where
[03:37:16]  they're focusing on because they like on the scale of like meta framework to core framework, if you ever talk to Mishko, he wishes he could spend more time on
[03:37:27]  the meta framework side. He, they don't really care about the renderer. They don't care about it. It's less important to them to worry about like
[03:37:34]  the details of how things render the composition of reactivity and all that kind of stuff. They, they, he was very much more concerned with like, how do we get
[03:37:42]  this partiality controlling the bundler, like loading the JavaScript, that kind of stuff. He didn't really care how, how, how that kind of, you know
[03:37:51] , worked in quickify turns reacted strings on the server, but you can, you can also run react components in the browser, like Astro to my understanding. If you
[03:38:05]  don't do that, sure, then you don't have to ship react, but, um, my understanding is that you still have to hydrate a react component if
[03:38:17]  you actually want to do the react thing with it. Yeah. And that's an interesting because it like building like a react compat. Well, it, it doesn't
[03:38:36]  really work like that. To actually have react compat, you have to build react compat. So like you're kind of the best you could do is build something that's like
[03:38:45]  preact, but even preact doesn't have perfect react compat. Yeah, but okay. So you're using react as a design system. Like the logic is valuable there
[03:39:00] . Right? Like, like, like, for example, like things around accessibility, a lot of it is encoded into the HTML, but a lot of it actually requires
[03:39:12]  just a JavaScript to actually do the accessibility. And a lot of those libraries like react area and whatever, they're actually doing a lot of important JavaScript things to ensure accessibility.
[03:39:23]  React as the design tool is, it's not, it's I guess if you're like pulling stuff in from Figma and like, if you're a builder and
[03:39:36]  you're like a CMS and stuff, but like, it's like, if that's what you're doing, it's the wrong tool for the job. Yeah.
[03:39:52]  Um, as I can see where that's coming from, especially when you consider the CMS angle of that and with Builder, but like, like at that point, like
[03:40:05]  you're hoping people get to mitosis and they just like, they're just not there. Yeah, they have mitosis for that. Thank you. Yeah. That
[03:40:15] 's exactly where I was getting to. Yeah. Yeah. It's the JSX, right? And this is why, again, people have had really easy time porting
[03:40:25]  certain libraries across between solid and react and whatnot. Okay. And Astro is built on JSX as well. Um, and yeah, if we're, if we
[03:40:37] 're going to talk about Astro, Astro has, um, has a few, uh, really great, uh, frameworks for it. It has Preact. It
[03:40:51] 's solid. It has Svelte to the little green and X element. Um, I mean, you could use other stuff with Astro if you can do whatever
[03:41:08]  the hell you want with Astro, that's why it's kind of cool. But from my perspective, when you talk about Astro, you really talk about the small
[03:41:14]  things. Um, so this is usually the thing. Um, Preact is the obvious choice for anyone moving from next and react code bases. Solid has been the obvious
[03:41:32]  choice for anyone who just wants to use Astro for Astro's sake. Um, we've been seeing a ton of this, uh, Nord VPN rebuilt their site on
[03:41:40]  solid or Astro with solid islands. This is, this is a very, very popular combination. Um, Svelte is if you hate JSX, it's a
[03:41:50]  good option. And then X element, I'm going to throw this in a little shout out to, uh, I hope I got the name right with X element,
[03:41:58]  but to fuzzy, um, it, it's essentially like, it's almost feels like it's, it's, it's, it's, it's, it's
[03:42:07]  kind of feels like web components a little bit, but it's not web components. It's basically using Astro's own templating as a way of injecting JavaScript.
[03:42:13]  So it feels like very Astro native. And if you're like a vanilla JS kind of person, and you really want to like minimize, like you don't need
[03:42:21]  a JavaScript framework and you just want to use Astro for what it is. Cause here's the thing you'd understand. Astro is a language. It is a framework
[03:42:28] . People like focus on the fact that it can do all the islands, but if, if you write Astro code properly, the size of your solid islands should be very
[03:42:36] , very small. The majority of your code should be Astro code. So Astro code is a real thing. And for that reason, X element is a way
[03:42:44]  of almost like feeling kind of like native Astro. Um, because it just like, it just sits right in the templating and it feels kind of natural. So like
[03:42:58]  you can obviously use Astro to do what someone mentioned fat islands and like nest a spa inside Astro and do that. But I'm just saying like, that's
[03:43:07]  part of the versatility and power of Astro as a project. Um, but it's, it's, it's like, you have to understand that Astro also
[03:43:19]  is its own identity and its own thing. I tried to tell the Astro guys this like really early on. And I don't know if any of them got what I
[03:43:26]  was talking about. I was all, I was, I was just, I was like, like, you guys aren't like, but it's because I, it
[03:43:33] 's because I'd seen Marco and Marco and Astro have a lot in common. They both HTML first, you just write HTML, you just author, and then you add
[03:43:42]  bits of interactivity to it. Um, you know, like little islands, so to speak, Astro and Marco, Marco feels very similar to Astro. Um,
[03:43:50]  just, you know, no one really appreciated it at its time. And in a sense for adoption standpoints, JSX is just a better language for that, not
[03:44:00]  for every million things Marco wants to accomplish, but it's for people just being able to jump in. It's, it's a better language for that. Astro was
[03:44:09]  a, I told you it was my pick for 2022, because it was just an easy win. It's not easy for like the Astro team when you're like
[03:44:24]  close to and you're like looking and competing with next and all that. But for Astro's use case, it's just like, why aren't you using it?
[03:44:30]  Like it's, it's like, and I loved how they narrowed their advertising that way. They're like, look, if you're building a big complex app,
[03:44:37]  maybe don't use us. But like, let's face it, most sites are sites. So like, you know, like most things out there are sites. Astro
[03:44:45]  is just like an easy choice for anyone kind of doing this stuff. Plus, you know, if you, if your project, like there's like, there's a
[03:44:52]  hidden one here. I didn't put it in. There's a hidden one. React is actually really big for Astro here. Because I think the, I think the
[03:45:03]  real key here, you got to kind of think about is if you already got, if you want to use Astro for your content site, and you already have your app
[03:45:11]  in React, Astro lets you now share components between that, you know what I mean? Like, and bridge that gap. So like, there, there is a
[03:45:23] , there is this option. But so Astro, probably, um, generally, this is how you kind of see it. And actually, over time, I actually think
[03:45:36]  this one's less relevant here, especially with the release of SvelteKit, even though Astro does certain things much better than SvelteKit does for those
[03:45:43]  use cases. It really does start to kind of look like, like, like, like, without this, and basically this, this is kind of Astro. So let
[03:45:55] 's talk about the future of Astro, then let's continue. So what are we looking for out of in 2023 from Astro? Well, I mean, they
[03:46:06]  had an amazing 2022, they added SSR support, they ought to, they did that. They added a lot of interesting things, things I know Astro is playing around
[03:46:16]  with forms, I don't know what the solution is going to be here. But they are definitely looking at forms, they've seen Remix, they've seen solid start
[03:46:24] , they've seen SvelteKit, they're looking at their, their look, they've looked at all, if you look at Ben Holmes, his tweets,
[03:46:31]  he was gushing over forms for all three of those frameworks incrementally, as it helped form his picture, what form solution should look like. So you, I expect to
[03:46:40]  see something more on forms. Do you disagree? Like, it's funny, because I got, I got Maple here. So, um, yeah, see, because
[03:46:52]  they're, the things they want, or the, and they're interested in are a little bit different than the other frameworks where I'm talking more about, like, I
[03:46:58] 'm talking about technology, someone talking about, like, CMS integrations are obvious, but I'm talking about, like, feature technology thing. Another thing. Uh, I
[03:47:07]  don't know. But I, I saw the, I saw the Astro guys drooling over my movies demo. This one's a bit of a long shot
[03:47:15] . I've been bugging them for a while. But, um, I, I think this is, these, this is kind of part of the conversation here. You
[03:47:24]  know, they, they toyed with Turbolinks. The, the library that Solid's Island router uses for diffing was written by a core team member of, uh
[03:47:34] , Astro, by Nate. I, they're part of the same story, but yes, yes, yes. They, they, they are very much because if
[03:47:53] , if forms are a navigation technique, then like routing and forms are not, um, independent of each other. Yes. That's, that's, that's what
[03:48:07]  you followed up with. That's, it's interesting because the transition API for client side has been experimental. I've recently seen there's been movement on the MPA side
[03:48:21] , but I don't, I, I'm a performance nut. I think we're going to use the, that API, but I'm not sure that it actually
[03:48:31]  addresses like all the performance issues. This just handles the smoothness. Like I actually don't have a problem with MPA navigations. I think they're, when you
[03:48:43]  have streaming, they're actually pretty smooth. They actually look a lot like a single page app, but yeah, I don't think the transition API gets rid of
[03:48:55]  rid of the need for hybrid routing. Currently trying to implement Spotlight page navigation in Astro and running into, yeah, I mean, if the problem is, if you
[03:49:10] , if you do spot page navigations in Astro, it should be for client rendering. If you're trying to like server rendering into the Turbolinks thing,
[03:49:19]  it's complicated. Yeah, it's more complicated than this, but I am very much talking to Fred in that because Astro's wins on DX have definitely influenced Solid's
[03:49:38]  perspective on what server components should look like. But yeah, I feel like these are the two things I want to see. I know they have a, probably a whole
[03:49:53]  list of things that they're working on. Um, I know that these are part of the conversation, so I'm not, I'm not speaking about this just being like
[03:50:01]  what I want to see. I know that these are considerations and things I'd be looking out for. Um, yeah, these things are generally thought to be not doable
[03:50:14]  together. That's, that's why no one, that's why it's been so hard to do this right. And that's why we haven't seen this kind of
[03:50:22]  routing until, uh, the stuff that, uh, we've been doing a solid start and, uh, react really. I mean, the, there's the big page
[03:50:33]  style stuff that you see with like Turbolinks, but when you're talking about laying or declarative JavaScript framework over it, it's a little bit more complicated.
[03:50:40]  Um, but yes, these things are at odds with each other. Okay. Um, yeah, I think that's Astro. So what's, what's left?
[03:51:01]  Well, there's there, I got one more special mention. Cause if you, if I go back to the article, um, we didn't talk about edge too
[03:51:13]  much. I, I would meant to do this on the technology side, but I got sidetracked. All I'm going to say, um, on the edge side
[03:51:23]  of stuff is that other than like some big players, like next JS, which have their edge solution, which the, you know, they've been working on most of
[03:51:33]  the frameworks like work on every edge provider. Like there's built their stuff off the web response model. Right. Um, so this is kind of like everywhere. The challenge
[03:51:45]  right now is most meta frameworks deploy to a single edge function and edge functions have size constraints and, you know, be, and also the bigger any service function gets,
[03:51:57]  you know, you have cold start considerations, which makes it a little bit tricky because sure, we're making great hacker news demos, but like, let's, let's
[03:52:06]  face it, like a huge app might still be very huge, um, on a single function. So, and the second tier problem is data, because I know there
[03:52:22] 's stuff like, was it R2 or R, I can't remember the name, what the Cloudflare is working on, on, uh, on like SQL databases
[03:52:32]  at the edge and other type of databases at the edge. And like the, the, why is it not, there's another one. There's two projects that's slipping
[03:52:41]  my mind right now. D1. There's like D1 and R2. Is there an R2? Am I just thinking R2, D2? Yeah
[03:52:48] . Yeah. Okay. Thank you. Okay. Yeah. I know about the KV stores. It was, it was D1 and R2 that I was specifically,
[03:52:56]  or that I was specifically talking about, but like, even with that, there's industries, there's situations, you can't put your data at the edge. It just
[03:53:06]  does not make sense. I worked in education for like a decade, like never happening, never, ever, ever happening. Um, so we have to think about like
[03:53:15]  where the processing is, put database at a data center, site at the edge. How do you best respond? How do you handle it? And I think the answer to
[03:53:26]  this is monolithic authoring with the ability to break up deployments and stuff and stuff like, uh, the build API from Vercel, you know, helps
[03:53:37]  with this, you know, the file system routing kind of things. But I think that this is still manual. I expect work being done at some point on frameworks to kind
[03:53:45]  of automate this ability to split and deploy across. Cause like there's one approach, a very manual, like micro front ends approach, which kind of could work, you
[03:53:53]  know, for some things. And it's what big enterprise is going to do, but you do that for organizational reasons. You do that because your company is too large and
[03:54:01]  it's hard to coordinate teams and stuff. You don't do micro front ends for performance. You know, it's, it's like that it doesn't benefit you.
[03:54:10]  I'm talking about from a performance standpoint, I want the pairing of, uh, kind of the benefit of monolithic art, um, authoring with being able to
[03:54:20]  split stuff out, um, you know, in an effective way on the infrastructure for, for performance reasons. And I think that's a gap. I don't know what
[03:54:28]  that looks like. I'm being completely hypothetical, but I, I want to mention that the edge we see today, um, is barely tapping into what we can do.
[03:54:41]  Yes. Yeah. I mean, it's, it's just not, it's, it's, it's going to happen for a few lucky people. Um,
[03:54:52]  yeah. So like, I, I, I didn't mention this anymore. I, I should have just, this is one of those like throwaway comments, or we
[03:55:02] 're just talking about the edge. Um, but what reason I want to come back here is in my article, I brought up three last topics on technology and their proximity
[03:55:12]  to JS frameworks. Strings. Um, uh, how do nodes being represented on the server? Are they resident on server much different than Dom V Dom? Yeah. Consider
[03:55:28] ably excellent. We just compile the strings. We add the strings up and we don't create the whole V Dom structure, which is why solid has such incredibly fast,
[03:55:35]  uh, server side rendering. There's Svelte does this as well in that. Um, but, uh, yeah, this is, this is one of the reasons
[03:55:42]  we basically, when you're already doing kind of special compilation, it doesn't take very long to just do a slightly different compilation for a different target. So that was the
[03:55:51]  approach. Um, so, so frameworks that do this string type rendering and actually preact added this string type rendering, I think recently, um, I haven't seen the
[03:56:01] , it's funny, the benchmarks didn't really move much. I don't know if they added to preact, but they've definitely experimented with it. Um
[03:56:06] , what I'm, what I'm getting at is this kind of string based server side rendering is much faster than the V Dom. So, um, on the server.
[03:56:14]  Right. So yeah, we already talked about web components. I'm just bringing this up again, because I like laughing at my own jokes because literally I kid you not the
[03:56:23]  day after I post this article, will two 23 be the year of web components. And I said, well, it's likely to be the year of the Linux desktop.
[03:56:29]  Take that how you will. Cause I understand some people think it will be there. There's like, there's, there's like literally like something where they're like
[03:56:36]  2023, the year of the Linux desktop. And I read the article cause I thought it was kind of funny. And like, I'm, I dunno, maybe, maybe
[03:56:43]  it was the most convincing article that I've seen 20 years of articles. Yeah. Um, yeah, it's, you know, we'll see. Um, then
[03:57:00]  the next thing that, uh, that I wanted to talk about actually before that AI and no code, um, uh, because, you know, everyone's been talking
[03:57:14]  about this and especially cause that, you know, the, there's a, the reason it comes up to me is because there's like a bunch of like framework, you
[03:57:20]  know, people are like, oh yeah, I'm not going to move off react until the AI, you know, comes in and like starts writing code for me. Cause
[03:57:27]  like, they're basically, I think react will be the last framework of its type because nothing will migrate or move because like the AI will be writing the code for you
[03:57:37] . Um, you know, obviously that's not happening next year, but, uh, I just wanted to again, point out, um, I think, I actually think
[03:57:46]  even though it's not there yet, uh, an interesting use of AI is people using it for code mods and migrations. Um, I I've seen a lot of
[03:57:53]  work, uh, on some companies and some like groups and using it to like migrate between like next, like different versions and next like minor versions and helping these kinds of
[03:58:03]  things. Um, so I don't know, maybe those people who are waiting on AI to, you know, move, um, you know, frameworks, well, maybe
[03:58:14]  the AI will just move the frameworks for them. I don't know that finally web assembly. I don't think that's a hot take, but for some parties it is
[03:58:24] . I kind of started this role a little bit. I don't know if you remember, uh, I didn't start it cause I didn't write it, but
[03:58:32] , uh, Greg from Leptos and this actually spare QR thing, both showed up in the JS framework benchmark very, very recently. Sycamore has been here for
[03:58:43]  like a year or so, but they show, Leptos showed up and being someone who sits there and follows the JS framework benchmark, I saw it immediately. And I
[03:58:52]  went on Twitter and I shared with everyone how Leptos had basically caught up to solid on client side render performance. So yeah, let's, let's talk.
[03:59:04]  I've got one more category here on JS frameworks and let's, even though it's not JS exactly, let's talk Leptos, Sycamore, I
[03:59:18] 'm making a funny note here, um, about the meta framework thing because I, for those who aren't aware, Leptos did not only recreate solid essentially in
[03:59:39]  Rust, Leptos recreated solid start in Rust as well. They have server functions and like I found this incredibly amusing and they have the progressive enhanced forms and the whole
[03:59:53]  thing. And I actually think the progressive enhancement in a wasm setup is actually way more impressive and useful because wasm unfortunately, as of today, still has a long
[04:00:04]  loading time. You're not going to be using it to build your e-commerce site. Um, but the fact that it works with no JavaScript for a bit, um
[04:00:12] , or no wasm loaded is actually quite novel and quite powerful. Like, don't get me wrong. I, I don't think that progressive enhancement is at all
[04:00:22]  a replacement for hydration, but the fact that like, I don't know how big, how it scales exactly. Cause I know the components do get larger, but like I
[04:00:32] , I looked at the JS framework benchmark on size and stuff and I'm like, this is like no worse than react. So like if remix thinks that progressive enhancement, you
[04:00:42]  know, is good enough, I, maybe you can make that argument for leptos, you know, it's like, so in general, no, I don
[04:00:55] 't think 2023 is the year of wasm frameworks, even though they've done an incredible job now of closing the gap. And, and the thing is the incredible job has
[04:01:05]  been done by the community largely. It's not actually the spec getting better or like all the, like there's all those things that have been promised that like they've been
[04:01:13]  waiting on for like improving wasm performance, haven't actually arrived yet. They're still, they're still waiting on several of them, you know, being able to
[04:01:21]  get past some of like the awkwardness of the communication, the bindings. I don't know the details there. So I'm not going to get too much into it
[04:01:27] , but what I, but the thing is others have worked around it, recognizing the bottlenecks on the solutions there are today. And basically finding other ways to leverage the
[04:01:38]  stuff without waiting for like the wasm spec to move. And it started, as I said, with stuff like leptos, which showed if you took fine grain react
[04:01:48] ivity and applied it basically as they remake solid and rust, it way out shoots stuff like you and like the stuff that was based on react. See, like you could
[04:01:58]  argue they just were using the wrong thing as the model. Like why, why, why were they basing it on that? Interestingly enough, that like, yeah, this
[04:02:15]  isn't the whole story. But sorry, I don't know if I'm going to pull it up right now. Probably not. It's okay. Interestingly enough with
[04:02:24]  the, with, with the whole wasm thing is someone yeah, I mean, but it's, but it's like slower than Inferno or preact is what
[04:02:35]  I'm getting at. Like, like, I don't know if they copied react exactly. but like it's, it's where I'm getting to. I'm
[04:02:49]  going to, I'm going to break one of my own rules. But I, I'd be for track. One of my own rules is I never talk about a framework
[04:02:58]  that claims fast benchmark performance that doesn't officially submit to the benchmark. Um, I, I've seen too many frameworks do that and just fail the test and not be doing
[04:03:13]  it right. Or like this worked on my machine type syndrome, you know, and then we get really disappointed, right? You know, stuff like million JS or whatever,
[04:03:25]  like you just, it, you know, even some of the hype around like stuff like, uh, preact signals. Right. And then you're kind of like,
[04:03:33]  oh, it's, it's not actually that fast. And I don't, I don't like that, but today, this is going to make my point. So
[04:03:41]  I'm going to break that rule. Um, the, I don't know why they haven't submitted yet, but there's another Rust framework called, uh, di
[04:03:48] , what is it called? Di, di, di, di, di, I can't. Dioxis or something. Dioxis. I'm just typing in
[04:03:58]  chat and you guys can tell me how this pronounce it. Like, what is this? Um, and it's a virtual DOM framework. Dioxis. Yeah.
[04:04:19]  Yeah. It's a virtual DOM framework that claims to have matched leptos basically on performance. And they did it in two ways. They use something that's lower level
[04:04:31]  than rust bind gen, which is the rust, uh, runtime, like the vanilla JS, uh, you know, they've that specially optimized around string handling. And
[04:04:40]  the second thing they do is they do template cloning with a V DOM. So it's kind of like block DOM for you who, for people who are familiar with this
[04:04:48]  stuff. Um, my understanding is actually they combine it also with something similar to what Mikado or sinuous does. Um, and if that is the case, they
[04:04:57]  would get flagged, um, as, uh, one of the flags on the benchmark is like not quite following the rules. Um, but I think, well, it
[04:05:09]  actually Mikado got out of it. So maybe, maybe it would work, but essentially where they do one-to-one bindings. So like you, you like
[04:05:17]  your data is tied to your DOM element directly, and it's not like data driven, it's like locked. It's sort of like cheating the benchmark a bit.
[04:05:26]  But my point is, my understanding is that they, they showed a virtual DOM, uh, implementation in Rust that also gets up to the front. So it's not just
[04:05:37] , it is possible with the right sort of tweaks, you know, the same way we see in JavaScript, um, that virtual DOM and reactivity can both be very
[04:05:47]  fast. Um, they're showing that virtual DOM can be fast in Rust as well. So that's, that's interesting. Um, so I, I, I,
[04:05:59]  I, all of this doesn't change the fact that Rust is kind of clunky to load into the browser. Um, so like you gotta like love Rust or love
[04:06:08]  these things to really like use them for much right now. Like, I, I wouldn't like, you wouldn't like build your website with this when the JS options generally
[04:06:17]  are going to be better for some of those like loading time considerations and like just, just that kind of piece. And, but, but for specific projects, I mean,
[04:06:29]  we're gonna have to see in terms of the size and the loading pieces stuff like Leptos probably compares really favorably against React. Well, I'm sorry,
[04:06:39]  when I'm talking loading, I'm talking about like hydration and like that side. Right. No, I, I'm, I'm not going to talk about you,
[04:06:53]  um, specifically. I mean, I just wanted to give the Rust stuff a bit of a shout out and talk about the ones that left, like the, the progress
[04:07:03]  that's being made in 22, 23. What I expected 23 is that people like Primogen, like after I made that tweet where I showed the performance thing, um,
[04:07:13]  I, I was like straight up, I like flagged Primogen. I'm like, this is the framework you're looking for. Um, and I, I t
[04:07:20] ipped him off to Leptos. Um, and people like him are going to take that to the next level, start using it, showcasing it. Greg's
[04:07:30]  going to keep on working on it. It's going to mature. And I expect to start seeing kind of maturity and like these things be like a niche, but like quite
[04:07:40]  usable solution as they work out these patterns. And I, I don't expect much in the way of adoption outside of that niche anytime in the near future, but I
[04:07:52]  think maybe by the end of 23, 23 of these Rust frameworks will be legitimate enough that they won't be laughed out of the room. I feel like, like no one
[04:08:09]  could take them seriously to this point. And I'm very impressed with the work that's gone in. Yeah. Like maybe on the next spec and that like this is
[04:08:19]  this, this waiting on standards is what is, is where kind of like why web components are where they are today. I don't trust it. I'm, I'm
[04:08:29]  actually stoked that the community around Wasm has stepped up so much like, and it's been like, look, this is a bottleneck, but let's work around
[04:08:38]  a creative with their solutions. All right. I think, I think that's it for the framework side of things, right? I, we talked about all the major frameworks
[04:09:01]  that I wanted to talk about. We talked about the technologies, um, involved. We didn't really talk too much about movement and async consistency. Um, into
[04:09:15]  going back to this, um, like we talked about update models, about signals and whatnot. And I think my previous stream is the best. If you just want to understand
[04:09:26]  how this impacts rendering, we talked about view. We talked about, um, string rendering came up a bit here. Um, just now we talked about edge caching
[04:09:37] , streaming, um, a little bit. Most, uh, I think we're going to see more solutions to streaming this year. Talked about, uh, hydration,
[04:09:47]  compilation, a little bit about TypeScript and tool integrations. Um, only thing I didn't talk about today was async consistency and suspense. Most of that work happened
[04:09:57]  a couple of years ago. The only reason that I'm bringing it up is I think it's a very important area that I, that some frameworks aren't really acknowledging
[04:10:08]  exists yet. And I think they're in for more of a, an awakening as they kind of work through these new areas that they're taking on as they're expanding more
[04:10:21]  into the different patterns around, um, server rendering and hydration. I think, I think, I think there are some good solutions. I think some are maybe too complicated
[04:10:31]  the way they are today. Um, one of the interesting observations that I have for you all today on that side is like suspense is an inversion of control trick, right
[04:10:42] ? You throw a promise up to a boundary and, um, then it like re-renders. At least that's the way it works in React. And what we
[04:10:52] 're seeing with, um, and React, what they were thinking very much originally was that they're going to have a primitive that they could kind of pass around and going
[04:11:02]  to get more granular on where they knew where the reads were so that they could like, it's not about where you create the resources, so to speak. It's about
[04:11:10]  where you read from them. And what we see with server components is just like async await. So there is movement on the side in patterns because on the server, you
[04:11:20]  don't care about that because like as much because no one's seeing the intermediate results. In the browser, while you're awaiting that promise, the world moves on.
[04:11:32]  Things progress. You have to show UI. Async await is a very blocking, abrupt pattern for something that represents concurrency. But on the server, no one sees what
[04:11:48]  you don't render. So like you can just async await it, you know, that being said, waterfalls are a real thing. So like you should be
[04:11:57]  doing stuff in parallel. So I, I think, I think that I, I'm mentioning async consistency here because mostly because of the mental reconciliation between async models,
[04:12:10]  between server and client side rendering. And this is a very technical topic. I just wanted to point it out that I do think we'll see more movement and thought here
[04:12:18]  in, in the 2023 Yeah. Someone's asking about seeing stuff throughout the DOM manipulately. Yeah. I mean, there's, there's, there's a whole
[04:12:34]  bunch of standards and things that they're working towards standardizing on how to do a lot of this stuff. So the performance definitely could get better. It's very cool
[04:12:42]  that, um, the way that the WASM developers have kind of worked around it. Yeah. And yeah, it's, it is interesting because the way it's funny
[04:12:54] , someone asked me, um, on, uh, on a, on the chat of my last stream, they're like, this is something along the lines of like
[04:13:02] , why are all the frameworks, like not good at async except for quick. And I was like, where did you get that idea from? And then I stopped and
[04:13:10]  I'm like, no, no, I'm pretty sure MISCO has said something like this before, and it's not really accurate. And, um, and so
[04:13:17]  I, I, I kind of launched into a description of how async works in the other frameworks. And it's largely like the, the thing is quick, still
[04:13:29]  kind of working out the patterns here, but largely what they do is they let you write your code almost like it's synchronously happening. And then if it's async
[04:13:39] , it just, it just works. Um, so like the async is built into the component model, kind of like the server model we were talking about, um
[04:13:47] , the challenge with that, as I mentioned, is it's, it's, it's not, it's not concurrent natively, right? So it's like,
[04:13:54]  you have to think about like, what happens with quick is like, you click a button and it hasn't loaded the code yet. Well, it has to, it has
[04:14:02]  to then go load the code. And if it's there, then it gets pretty quick, but it's still async. And if it's not there, then you
[04:14:09]  have to wait for it. So it treats those as the same thing, which means that every say button click is actually async and quick. Like every single place that
[04:14:17]  it's broken has to be async because it could be async. Um, and so in that sense, they do have to get into consideration, but it becomes much
[04:14:25]  harder challenge when you have to think about how to handle concurrency. And the fact that like, while this is happening, you want to show a loading state, but that
[04:14:30]  loading state hasn't loaded yet. So you're waiting, like figuring out how to actually, um, handle consistency and concurrency becomes, comes, comes tricky in this
[04:14:42] . And, uh, what I was saying is that a lot of frameworks, their solution to it is move back, move things back into the synchronous state, which is where
[04:14:50]  they care, right? They, they care about synchronous X, like we were all about keeping everything in sync with the data. So essentially turn async back into a
[04:15:05]  primitive, almost like a signal. That's, that's one way. The other way is bail out until you're ready, which is like, like React does with suspense
[04:15:14] . But essentially you need a, you need a mechanism to kind of interact with that asynchronicity immediately, um, in order for these kinds of solutions to
[04:15:29]  work. And that's why I'm talking about suspension transitions. These are actually fairly good solutions to these problems because, um, they acknowledge asynchronicity in a
[04:15:39]  way that they step outside of it. Like it's like the, either by, as I said, like the way solid does it where it converts it into a, uh
[04:15:48] , synchronous time and gives, you know, proper blockers or state to represent it or react does where they use the handle of render. If you just kind of like
[04:15:57]  blindly handle async, you like sure it can work, but not in a way that makes sense for a user interface. It might not even be blocking, but it's
[04:16:06]  blocking. If you don't handle the right way, it's like blocking in a different sense. It's not like blocking up the CPU thread. It's just not letting
[04:16:13]  anything else happen at the same time. Anyway, uh, that, that, that was my little asynchrant react, throw everything TM. It's part of
[04:16:34]  like re-render, re-render everything. It's, it's, it's, it's, and I don't say that in a sarcastic way though
[04:16:43] , because it's like you can, you can always throw it away and start over. You know, it's, it's, it's, it's like when you
[04:16:49]  have a computer issue, turning it on and off again is often the most effective way of handling it. If you do not use the suspense tag with route loaders and
[04:17:03]  it waits on the previous page. No, we, we do use the suspense tag. What you're seeing is the router, the router has transitions built baked in and because
[04:17:12]  as transition baked in, it, it actually renders the next page off screen, keeps the current page and screen. You have the ability by using like is router to,
[04:17:22]  to actually update, like the page on screen is still live while it's concurrently rendering the next page. Um, and then it doesn't show the content until the
[04:17:32]  next page is ready. These kinds of patterns, like you can play with it. You can go, you can like put nested suspense boundaries and go wait for this,
[04:17:38]  but not this. These kinds of patterns and understanding of treating, um, async as a range of your view or template is a very powerful because it, it mirrors the
[04:17:49]  way you think about UI. It mirrors the way like that, that, that things are kind of like ergonomic, like, because you're now co-locating that
[04:17:58]  iteration with your view code, you can go like, yes, I want to wait for like this part of the page is related to this stuff. I want to wait
[04:18:05]  there, but not wait for this and let that like, you can kind of choose like, you can kind of control for this aspect. And this, the same applies for
[04:18:13]  streaming as well. Isn't there a term for this immediate mode versus retained mode or something? Um, yeah, the, the, and a lot of game devs
[04:18:28]  do like that kind of mentality. The problem is like, it's just a, it's just not, the dom is not a cheap abstraction. It's just, it
[04:18:36] 's so like, I guess a virtual dom is a cheaper abstraction, but like, yeah. Okay. All right. Are we ready for maybe this week in JavaScript?
[04:18:55]  Let me kind of switch everything around. Give me a couple seconds here while I adjust my stuff. Huh? Looks like I got a few notifications. It's been
[04:19:19]  a couple of weeks, hasn't it? Okay. Sorry. Give me two seconds while I just kind of queue up with this. I'm going to start here for
[04:19:41]  that tab. Just a second. How's everyone doing? You guys still, still alive? Yeah. We're getting towards the end of the stream now where we talk about
[04:19:54]  stuff. And the funny thing is I don't have a lot of time. Um, I knew the framework conversation would take would take a decent chunk of time here so
[04:20:07]  I think most of my big headlines I can get off the solid one funnily enough yeah - - - - - and one more All right I think we're pretty
[04:20:42]  much ready to go let's let me just reset everything all right all right need to grab a little bit of water I should cut I should check up on twitch chat you
[04:21:08]  guys still alive sometimes I don't get to see the the stuff mostly first-time chatters telling me how awesome react is don't have to convince me oh I missed
[04:21:27]  an interesting question in the middle of the R2 thing about explain the difference between Jotai and solid signals and the signals are closer to MobX than Jotai for
[04:21:42]  scientific reasons I don't have time to get into that today I talked about it in the last stream the one I talked about reactivity rendering so yeah but it not been
[04:22:00]  30 minutes but yeah knowing me it probably would have been 30 minutes yeah solid puns write themselves they do I it's not something I can get mad about or like what not
[04:22:14]  okay so okay all right all right all right oh yeah yeah yeah yeah I would love to talk to uh daishi or all right let's just do this um banners
[04:22:37]  all right all right all right it's been a bit of a break over christmas so let's uh talk about this week in javascript for this week in j
[04:22:50] avascript um there's a bunch of unrelated things uh a lot of hot takes kind of flying around on the internet um I I just picked a few things that um that
[04:23:02]  I thought were interesting to kind of talk about today um and I'm actually gonna start before christmas because we haven't streamed for a while and I just wanted to pull
[04:23:13]  something out for people just because even me as a react dev and I figured this audience uh especially appreciate this does anyone know what this actually logs um I I I did
[04:23:25]  not know the correct answer to this and I had to test it a few times but this is this this does not log what people would expect because you see something that is you
[04:23:43]  state zero so it's rendering then it goes to the effect obviously so it renders everything it's render zero then it renders then it does the effect set count one
[04:23:54]  which then causes a re-render which causes rendering to happen again right and then you have you state and then you you get to the effect again obviously or and then it sets
[04:24:08]  count to one again and it's already one so that should be the end of the story right so you'd think it would be rendering effect rendering effect but as maple points
[04:24:20]  out it's rendering effect rendering effect rendering this is not strict mode this is literally just how react does it does it because of some cases it can't know that setting the same
[04:24:35]  value is sufficient stopper it actually goes and renders everything a third time but doesn't run the effects on them it basically bails out early when it gets that component
[04:24:45]  and like it goes oh yes in fact nothing has changed but it has to double check that nothing has changed so an effect causing uh a re-render like causing a state
[04:25:00]  update in react and it's not even effect uh this is true with event handler too um if setting the same state in react is not free it can lead to two it
[04:25:11]  can basically render one and a half um more times i i figured people in the stream would would would appreciate this because i did not realize this i i assumed like most people would
[04:25:25]  be rendering effect rendering effect but it does render a third time so it's initial re-render because of update and then re-render just because so if you if you
[04:25:38]  i don't want to think about strict mode um i does it render like six times or five times i'm not sure yeah i mean that that was the point i guess
[04:25:57]  because it it sets the same value that was the point but yeah i mean it's it's a primitive value it's like a one it shouldn't change but i i
[04:26:10]  actually tried this with an event handler and saw the same double render um like so like without the effect here just picture if it's like a bottom you press click um press
[04:26:25]  click i mean i don't have it uh sorry i jumped into the thread i didn't mean to if you had a button here that you press click on it will if you
[04:26:34]  ignore the initial render it will then go rendering rendering yeah so any in any case i i know weird way to start this week in javascript but it was just like
[04:26:53]  this is this has got to be one of the weirdest reactisms um yeah i'm not going to talk too much about my hope for typescript um we already talked about this
[04:27:05]  article this today's uh stream was largely about the content of this article um only thing i want to say is and i think i mentioned earlier in the earlier in the stream
[04:27:15]  somehow this article that was inspired by theo asking me you know what my best article was this year ended up being my most viewed article that i've ever written so there you go
[04:27:26]  what about weird solidisms interesting solidjs quirk when making a library for other libraries you must specify as an external dependency or else oh i mean this is true of every
[04:27:55]  javascript framework though like more so solid stops being reactive because the compiler like the the compiled jsx is different than the runtime but having multiple versions of the framework interacting
[04:28:09]  on the same portion of code um is going to always cause weirdness and double your bundle size yeah okay sorry i thought there was something real um moving on yeah we have
[04:28:28]  dev mode warnings i don't know i guess it was the production build yeah dev mode warns you about this um okay where was i um moving on uh no not this
[04:28:51]  one we'll get there sorry my whole screen jumped i mean dev mode exists everywhere it just depends on if you turn it on or not if if the app it's probably
[04:29:10]  for the app i guess when the app is running it will see that there's two versions of solid and complain at you when you're writing the library it's not going to
[04:29:19]  be able to tell because there's only one version of solid there yeah i mean okay someone could probably submit an issue or something the the code is very specific like it literally
[04:29:32]  checks a global and if it's there it it basically errors i've seen the warning multiple times debugging people's stuff um moving on uh oh more theo stuff hey uh theo did
[04:29:54]  his uh uh award show for which is very i don't know put it inbred award show uh in terms of all his takes t3 community it was a really
[04:30:05]  cool idea because a really good chance to celebrate people involved around uh the community um for t3 and the incredible work that that community has done because you remember he did not create
[04:30:16]  t3 app he just like said hey i i'd like stuff you know like this like this and this and people actually went and built it so um his way of kind
[04:30:24]  of giving them recognition was really clever and i quite i quite enjoyed it um i actually watched it with the whole family which was kind of fun on youtube and yeah really super
[04:30:41]  stoked to see special shout out to uh nakil getting nominated for contributor of the year and i'll and javascript framework the year for solid js was amazing um all
[04:30:53]  right let's switch over to solid js for a bit there was a bit of solid js uh stuff uh over the last couple weeks um uh storybook looks like we're like
[04:31:04]  i've had trouble with storybook over time apparently someone has gotten it working properly so pretty stoked on that did i retweet that twice that's how stoked i am about it
[04:31:17]  i literally retweeted it twice okay um coming up if you're in the area uh solid js miami meetup um yeah january 25th um solid js meet
[04:31:40]  up in miami who's going david's going i do not believe i'm going to this one um i i'm actually speaking at another conference in the morning but
[04:31:50]  it's an online one but yeah uh it's it's put on with boomy um so some of you guys might know dax from the community um he's putting it
[04:32:00]  on usually usually usually usually these are about a month month and a half uh this one got posted december 29th um yeah it's usually about a month where are
[04:32:20]  we going here here's another cool one remix router done with solid js i i thought this was this is cool i've talked about how difficult this would be but people kind of
[04:32:35]  misunderstand it it's not it's not necessarily it's doable i'm more talking about the fact that solid's paradigms makes me not want to write a router in
[04:32:47]  this fashion but i think that it existing is very cool and i'm glad that people are excited to do this um another huge one from the creator create jd app or t
[04:32:59] 3 app port um we now have solid start off from which is basically a port of next off they kind of broke it out before the holidays and they announced that they had
[04:33:12]  support for um next obviously in svelte kit um solid start also uses next off right so this is this is this is huge um uh he's been killing it he's
[04:33:29]  actually now part of he got he's part of the ecosystem on discord um so another one of those really smart kids um i can't wait to see what he builds next
[04:33:39]  honestly um yeah another one this we've been waiting for this cobalt a library for unstyled components for building accessible web application systems i love the responses to this um
[04:33:56]  talk people talking about tailwind uh you rename solid area project cola or are these two parts different it's different solid area is a set of parameters cola is more like rad
[04:34:06] ix ui in terms of dx however both takes our uh um a whatever accessibility features from react aria um so so i guess it's more like um radix i
[04:34:20] 'm not as familiar with that but yeah what's cool is the dock site was built in solid start um and it's completely headless it's kind of like um this is
[04:34:33]  either headless kimosas is too clean i'm jealous of the solid js ecosystem i think that's funny um but yeah we're starting to see really good high quality
[04:34:42]  libraries coming into solid um and i'm pretty stoked about this i don't i don't know too much about these kind of systems but everyone who's looked at it said that
[04:34:52]  this is very very cool he's he's also the creator of hope ui um yeah i i don't know the mappings for this stuff like when when when hope
[04:35:05]  was compared to chakra and now this is compared to radix um it's just because people come by and i'm like i can them ui libraries because they're like oh
[04:35:14]  where's your component system they're like well i feel like something more like manteen and i'm like i don't know maybe there's a solid manteen maybe
[04:35:20]  it's called like like i don't know sardines or something like i i hopefully we can figure out a way to make our ecosystem um more discoverable uh because
[04:35:33]  it's really cool stuff it's funny though we do a lot of effort on this we have a resources page um where we search and we list every project so people wonder about
[04:35:42]  the ecosystem like like solidjs.com ecosystem packages and resources okay okay uh what do i want um components like did i like i don't sd style components in motion
[04:36:06]  like i i maybe the search is just i don't know solid ui solid form handler blah blah blah i guess the problem there's like so many libraries to go through that
[04:36:16]  even when like i don't know maybe that's the problem maybe there's just too many solid libraries to go through here all right but yeah very cool stuff um this is
[04:36:34]  another cool one sorry we're just doing the solid strip before we get into some of the more spicier stuff um derek got solid start running on bun um and it
[04:36:50]  was significantly faster uh for you for those of you who were wondering about that um and he was in chat earlier to i don't know if he's still in chat um
[04:36:59]  what is it that one bro or bra yeah yeah he's still there 434 yeah you're still here we we've been kind of bouncing back like i was talking about like
[04:37:11]  how i was frustrated with the streaming performance at various points and at one point he came he came in and he was like uh remix actually has their own package instead of using d
[04:37:20] c or whatever um for doing the the streams and um i was i was like looking at it uh and yeah i mean the numbers looked impressive and we were talking about doing
[04:37:32]  a pr and then what ended up happening was um spawned by this piece of news is quick kind of was gushing about node 18 because node 18 finally brings all these kind
[04:37:45]  of like web stream stuff into the you know like the reason we have all these polyfills on like undc and whatever into the main node runtime and they're like they
[04:37:52] 're so excited about it i'm like well now we just have to wait for aws lambda you know sometimes you make cheeky remarks um and they're really unwarr
[04:38:00] anted and you look like a fool after well for me this is one of those remarks um because as i found out is like even before i was paying attention to node 18 aw
[04:38:10] s had added support to it so like usually i'm used to it taking them like like a good year you know to get in and and and and like people are very quick
[04:38:21]  to point out to me they're like aws supports node 18 now i'm like what like honestly i every year i went through the cycle for like oh i mean i
[04:38:31]  i was when i was working on that startup because there's always new features i i feel like like since node version 0.06 um like i i i'm talking like
[04:38:43]  a decade of this expectation this is like the first time like the first time that they've like got to it this quick in like 10 like it feels like 10 years um
[04:38:56]  so i i just assumed which was stupid of me and i had to kind of eat my words on that um i'm i apologize um but once that happened i was like
[04:39:10]  okay let's let's just do it let's drop support for node 16 like who cares like versell netlify like they're they're right on the edge of it
[04:39:16]  i'm sure they'll get there by the time we get out of beta so i got so i we were chatting here and it was like okay he already had the setup i
[04:39:25] 'm like can you can you uh test node 18 for me right and he tested it and he's like yeah it's it's better but uh the the remix stuff is
[04:39:35]  still faster than the node 18 implementation slightly like 10 and we're like oh you know okay well maybe we'll just do the polyfill anyways and i guess i mean i i
[04:39:47]  i guess you know he was bored and he decided he's like oh let's see what it looks like in bun and bun blew it out of the water so i don
[04:39:58] 't know i think this is cool i think if we could look at getting some kind of setup so we could get this like more than just you know like make other a lot
[04:40:09]  of others to work on bun maybe you know i'd be accepting of a pr if it made sense but this is very very cool so thank you very much derrick um
[04:40:18]  uh great sorry it jumped twitter likes to jump up now all right um oh no that was my bad i yeah my bad little couple more pieces of uh solid news before we
[04:40:43]  kind of get past it here tan stack uh solid query five is getting dev tools which is really cool we can always use more dev tools so i'm pretty stoked about this um
[04:40:54]  so yeah uh now when you use tan stack query with v5 you're gonna have dev tools which is very very cool um okay um okay i think i think i'm
[04:41:10]  off that let's move forward all right um i'm gonna actually go to the bookmarks now let's talk about a few other things i forget if i talked about this
[04:41:23]  on stream before this was amusing um but i i i don't think it's important i want to talk about personnel changes um over the new year is often when people actually move
[04:41:34]  between projects and i think we've had a few interesting moves people that we watch on the stream because they were doing really impactful stuff in the community and one of those is hu
[04:41:45] x pro or i never i'm sure i'm sure if i say his name correctly uh i think it's like shun but the truth of the matter is i mentioned
[04:41:53]  his name every single solid talk because it's part of my world beyond components talk um for his work in react forget this is the guy who headed up the original react forget compiler
[04:42:03]  project um he's left meta and i think from the sound of it he's actually um left like he because he's not worked for meta he can't work on the
[04:42:19]  closed sourced part of it anymore so he's actually kind of left the project a little bit um so forget is in good hands as we now have a team behind it i
[04:42:26]  already knew that and mentioned it perhaps on stream but this is like more confirmation there is a team of individuals working on the react compiler it's not just like an offshoot like
[04:42:35]  project of one person we don't see this as much externally because the core team is kind of like the external facing part and we only ever see like a couple people you
[04:42:45]  know like we like and they kind of dwindled in size the last few years um but now what from my understanding meta has several teams working on particular parts of react that
[04:42:58]  don't get the public facing part of it while the core team has kind of been more distributed between companies like next and uh replay so this this is interesting anyways because i
[04:43:11]  don't know what hux pro is going to do next but um and it says i'm looking forward to continuing to work with the team when it's open sourced
[04:43:21]  but essentially um there is a team working on the compiler officially here and uh we're gonna see how that goes another interesting meta thing i think meta's stock has been hitting a
[04:43:38]  bit of a hard place and people are looking for their new options or whatnot um dominic ganaway um some of you might be familiar with him on the stream because
[04:43:47]  he is the creator of inferno he's also the creator of uh one of the creators i don't know one of the primary creators behind lexical and the text
[04:43:56]  editor um and after he he he joined meta back in 2016 or 2017 around then right after inferno 1.0 went out and it made made waves and he actually dropped working
[04:44:10]  on inferno to work at meta stopped supporting it and the project continued on without him but he's he's now leaving meta six years later and um it took a few
[04:44:30]  months but he actually uh or no it didn't too no it didn't take a few months sorry no my bad it's i've known this for a while that's probably
[04:44:37]  why he posts that one day and then on the next day he posts what he's doing next he's joining bloomberg um bloomberg terminal is based on chromium so
[04:44:48]  the ui is nearly all dom rendering i'm working on the js infrastructure to make terminal blazingly flat or blazing fast so he's up to he's up to
[04:44:57]  he's up to his performance game again he's going to be working on um the terminal for for bloomberg um which is interesting because i also know that he has aspirations a
[04:45:08]  bit to get back in the js framework game and he's been it's interesting how much a lot of our thinking is aligned i've been talking to him and seeing that
[04:45:16]  because he's very much on reactivity more on the pulse side because in his mind a virtual dom is the holes in the in the in the in the jsx so
[04:45:32]  to speak which is basically what reactivity is so our idea of virtual dom and reactive context is almost identical so i think i i think i think i think i think it
[04:45:44] 's i think it's interesting um and i think this is a very interesting tough performance challenge for him and i think he's gonna love it so i'm i i think this
[04:45:52]  is awesome oh wow viewership just spiked did i miss a raid i did get raided sorry i'm never looking at twitch chat i am just talking about what's
[04:46:08]  been going on with this week in javascript sorry for some reason i missed the raid so i don't actually even why am i didn't know why am i so
[04:46:15]  blind i usually can see the raid well thanks for joining me i've been talking about javascript frameworks and um yeah it's because i stream from stream yard i'm i
[04:46:33] 'm i'm sorry yeah yeah yeah okay anyways i'm talking about news and javascript for the last uh i i we did the stream on javascript frameworks talking
[04:46:42]  about like what they look into 2023 and latest trends and uh now we're talking about hot takes and what's going on in javascript um this past few weeks and the
[04:46:58]  next one we're talking about i want to talk about bun and i love uh for those of you who don't know this is fabio um creator of vobi uh very
[04:47:10]  active speaker uh in our community discord um uh one of the our local reactivity experts framework guys he's often in our chat here he he he kind of stirred up a
[04:47:23]  bit of a of a storm here because i a bit jared added punning which is a shorthand of compiling boop to boop as he says here um
[04:47:35]  to to bun i really i i think a while ago i just i remember jared talking about this with me like in september or i don't know if he had
[04:47:43]  added it yet but he essentially had added this and fabio went went into the typescript uh went into typescript uh went into typescript uh or uh github
[04:47:55]  and was like hey you guys should support the typing of the jsx um which is a very aggressive move see a lot of times we don't it wouldn't be
[04:48:09]  that hard to patch babble but the standard exists because all the tooling is based on it like prettier and code highlighting and you know like all there's a whole bunch
[04:48:22]  of tooling around this i did a whole stream on that back uh should watch uh if you're interested in what it takes to build a language in javascript uh i had
[04:48:29]  the uh one of the critters of mark or maintainers marco dylan piercey go lead us through that so he like yeah this it's funny how many thumbs
[04:48:38]  up this has like there this is just the jsx standard kind of feels like it's been dead for like a decade like this is one of the most requested features and
[04:48:46]  it's been the issue's been open since like 2013 or no 14 2014 for this particular issue and it's funny because like no one wants to move because you like break types
[04:48:56] cript you break something else and jared's just like who cares you know i'm just gonna do it you know if not me who's gonna do it right and uh sorry
[04:49:08]  i'm not ready for that take yet um and so he did and a lot of people reacted uh kind of negatively to this one um um yeah some people positively but this
[04:49:26]  was this was a hot one remember the time when react community was constantly abuzz with trying out new ideas and pushing the needle this absurd over the top reaction to this is a
[04:49:33]  sign that that's changed unsure whether that's good or bad but it's definitely different the needle's always on point at some point let's give that a like um um
[04:49:42]  um this reads like an elon tweet with all the controversial discussions yeah someone talking about something they can't do that no one cares about um there's a great discussion in
[04:50:02]  the github to check out too kind of a back and forth between seb um and fabio and them involved um but there was a lot of i'm trying to find
[04:50:06]  some of the bigger retweets um this one is this a smart idea is this a smart idea syntax aside making your runtime the place where cool stuff happens but other
[04:50:24]  tools are default and not compatible seems risky either you force a standard in a new direction or you create a new smaller ecosystem here's the thing here's the thing here's
[04:50:30]  the thing i i get jared here completely this i tooling is supposed to work for you right like that's why you do this you you use tools to make your life easier
[04:50:44]  at what point do tools become the shackles right like that says and obviously working on a framework like solid js has made this uh the case for me right because like i
[04:50:55] 'm trying to like push boundaries and then like typescript or pretty or someone's gonna be like no you can't do that i had this problem early on because i i wanted
[04:51:03]  to do a way of indicating in the jsx what was dynamic or not and i realized i could use parentheses and typescript would get past them but the problem was uh
[04:51:14]  like uh prettier would erase them and basically every kind of time i was trying to toggle to get around stuff i'd like hit oh but this won't work or this won't
[04:51:26]  work and at a certain point you're just like why aren't these things there like for me and the problem is the more useful tools become on a specific path like like the
[04:51:37]  the the more like like valuable they become for like the the the mainstream path and the more opinionated they can be like prettier is a perfect example like we got to a
[04:51:46]  point where it was very cool to have no config you're like no no you have to go this way because in a sense that means the tool for that audience is more valuable
[04:51:55]  because you've it's better at streamlining right um but on the other hand it's incredibly restrictive to innovation and i've spent my whole time assault basically fighting tooling it
[04:52:09] 's people wonder why i always have like a little chip against typescript and all this stuff it's just because like i'm being told what i can't do and i don
[04:52:17] 't like being told what i can't do right um so uh pizza's ready apparently yeah um what what i'm getting at here is i i i like that this this
[04:52:35]  is like the stupidest little feature that like doesn't even matter i like what this kicked up because like this this this this this is this is something people want but it's
[04:52:46]  also kind of inconsequential but the amount that it fired up the ecosystem is it fired up the ecosystem and people talking about this is not minor and i think that
[04:52:55] 's something that we should really consider when you know looking at this right um so yeah i i think i i i love that this spawn this kind of things and this isn't
[04:53:06]  like a hit at matt or anyone else here it's just it's just it's it's good to see that people are thinking about this change i i love um that
[04:53:17]  jared pushed the thing he had more guts than me uh on that side i fought i i fought this stuff for ages but like when it comes to the conveniences you find
[04:53:30]  in vs code uh i got beaten down so this is this is he's still carrying the torch i will i will join him when the opportunity is right all right all right
[04:53:41]  that's my perspective i know people are like it's a bad thing it is kind of a bad thing there's a reason i didn't do it but like this is also
[04:53:48]  like kind of great all right let's keep on going what do we got here okay i like this take we'll leave i want to end on that one so let's
[04:54:00]  keep on going um do to do um do do okay cool actually i got a couple more okay rising stars of javascript is out um um so it is um
[04:54:18]  you guys just seriously discussing my pizza uh thank you okay this is out also related bun had the most stars this year um for for any javascript uh peripheral repo um
[04:54:39]  honestly this was the i think it was the most in a month that these guys had ever seen it was 20 000 stars in one month the the wall curve for this is insane
[04:54:50]  um so yeah i mean they basically went from zero to like like in my opinion github stars works like levels um you get to certain stages and then it comes really hard
[04:55:03]  to burst through the next thing until the project gets to a a certain point like you kind of like it's a stepped thing bun went from like zero to like as far
[04:55:11]  as you can go from for in uh kind of like early adopter kind of range in like a month that's insane like it's hard to get more than 30 000 stars
[04:55:21]  um for anything that's kind of like an early adopter phase and bun likes just straight up did it tori gets a good honorable mention here um they had a really good
[04:55:31]  year um but generally speaking look at the top 10. there's there's a couple really ones that that surprise me and excite me even more as well you know alongside
[04:55:43]  but i knew bun was going to be here but just going down here check this out trpc and astro are very high up on this the the they had very good
[04:55:54]  years um obviously utility libraries that can be used in every framework have an easier chance but like like like this is this is this is this is huge um you know kind of
[04:56:05]  getting into that list right this is also kind of fun i i i do want to prefix this um that the value of github stars is mostly a vanity metric and
[04:56:21]  this is not saying what's the most popular the best to use just that this is the thing that has kind of captured the most mind share on a delta because like over a
[04:56:30]  short period of time so it's like a it's a hype metric essentially and if you look at it um things are changing if the hype metric has reversed in such a
[04:56:43]  way front-end frameworks react is obviously stable where it is and that but we see solid is still carrying on from last year with very similar numbers svelte went down a
[04:56:55]  little bit from last year but it's still in the same range quick spiked it this year getting in here but they're all kind of in this 10 000 range this
[04:57:04]  year this this is quite a like push down of the angulars and the views and uh you know the world right um so like don't get me wrong views total amount puts
[04:57:16]  them in second but they're split between two projects right angular htmax lit alpine preact um marco relate like this this is this is this is this is
[04:57:29]  definitely interesting um just to kind of see where people this is where the conversations on tech twitter are happening essentially um so very cool this means that coming to next year you're going
[04:57:41]  to hear a lot more about quick so you're going to continue to hear a lot more about solid um and svelte's held its ground but you know this this
[04:57:49]  is kind of you know it it it's interesting times to see this kind of change because it's been a very steady react view whatever for quite angular for many years and that
[04:58:01] 's not the case right now react ecosystem again trpc just sneak it just getting right in there right um which is completely awesome again back end full stack trpc
[04:58:15]  just sneak it in there what's cool is astro really is the number two meta framework in general uh from for for for hype right now and i i think that's great
[04:58:27]  like if you see that this chart on meta frameworks you know um next like svelte kit had a big year last year um for the meta frameworks thing that's when they
[04:58:38]  spiked it you see fresh kind of new entry this year um but yeah really big on astro salt start got its first notice we're we're we're just entering
[04:58:47]  the fray here um basically they looked at i think stuff had to be in they had to be tracking it for x number of months before they looked at it the create t
[04:58:57] 3 app should be in here from star amount um they should be up here by remix i think between remit astro and remix but they weren't um there here at the
[04:59:09]  beginning of the year right so like if we go to best of js if you're wondering where they get their numbers from it's this this website best of js okay and
[04:59:17]  you can follow this all your like i already knew what the results are going to be because i checked this from time to time so you can pick a category here um and like
[04:59:28]  ui framework and you can still see the the numbers for quick solid for the past 12 months right but you know if you look the last seven days it's different you
[04:59:37]  see svelte's back up on a hype because of uh svelte coming out right so you know essentially you can get all the numbers in the date and the data
[04:59:49]  that they have from this website but what if i look up create teeth or it's called t3 stack in here that's funny um these numbers uh and look like if
[05:00:02]  these are good numbers um 33 you know averaging you know but unfortunately for them they're they're they're under next js i guess which doesn't put them on the back
[05:00:18]  on the framework category perhaps and secondly if i change these results so let's say i choose things that are next js and i move to 12 months they don't have enough data
[05:00:31]  to show up um on the categories so they couldn't be included but i just wanted to give them a little shadow because their star growth would have had them on this chart
[05:00:39]  definitely yeah especially because the way these growth metrics work in terms of early adopters we'll see how the top thing the the the the trends work this was a critical year in
[05:00:54]  my opinion because they they jumped out the gate really strong it's hard to keep that growth um uh like i think it'll be steady but it's hard to keep like
[05:01:05]  the you know the spike so to speak little spikes but i i you know i'm sure i'll show i'm sure they'll be up there next next year um but yeah
[05:01:16]  i mean all in all um yeah turbo repo it's been great this is an interesting thing to look at as i said it's more about hype than anything but um again
[05:01:32]  next in astro like just astro is is is definitely the hype um right now um uh i know t tk dodo thought this was amusing that under graphql
[05:01:46]  tan stack query was the highest but it's based on stars not necessarily how good of it is as a graphql client here's redwood getting a bit of a
[05:01:53]  shout out um but yeah no uh best of js check check it out all right let's let's keep on going all right i didn't miss anything else on twitch did
[05:02:08]  i all right keep yeah um where are we here um yeah i was on pod rocket this is cool if you want to hear more about server components and stuff in an audio format
[05:02:25]  you can just like turn on the background okay last two things for for today yeah there's pizza but i got two more things i got two more things okay that but um
[05:02:37]  okay thing number one i want to talk uh we we've got aj here i kind of forced him to wait the whole stream for this um but uh hopefully he's been having
[05:02:49]  fun um i saw this take and at first i got like a little bit like ruffled by it but then i stepped back and i and i and i i i want
[05:02:58]  i i want i i want to kind of talk about this for a minute i haven't retweeted it yet i want to talk about it first um i don't know
[05:03:05]  i haven't looked at the quote trees yeah this i agree with quick but i'm more optimistic about bun than that okay okay okay okay check this out look i'm just
[05:03:22]  gonna read this verbatim and then we can talk about this for a second okay react is to note as solid as to dino as quick is to bun hold on let
[05:03:30]  me explain both sets represent partly the competitive landscape for front-end and back-end for javascript projects reacting node are the clear incumbents front runners they have the most
[05:03:38]  usage largest blah blah most reference material enough legacy code being written both that valor's busy maintaining them for decades okay in contrast solid and dino are the challengers they have
[05:03:46]  cheap notable and measurable gains over the previous paradigm both in terms of ux due to performance wins and dx due to better tooling but it's not clear that either are better enough
[05:03:55]  to drive a migration away from reactor node they may be two to three times better but 10x i don't know quick and bun aren't even on the playing field yet which
[05:04:02]  is certain extent simply because they're still too early stage in life cycle but more importantly they've been off inventing brand new paradigms entirely from scratch instead of adopting incredible
[05:04:09]  improvements their benefits aren't marginal they're exponential but comes at a cost of even more painful migrations and mental model shifts i think there's a handful of insights you can
[05:04:17]  take away from this analogy reactor node are still the safe bets that will be guaranteed for production apps and jobs at least for the next decade no other project will have this kind of
[05:04:24]  guarantee the 2020s will be decade like ibm and microsoft no one will be fired for choosing reactor node if you're hitting the pain points reactor node you should look forward
[05:04:32]  to marginal improvements to solid or dino and find the shortest path towards getting them integrated into your stack they're up and coming but they're becoming ready for serious production use
[05:04:40]  three it's unclear that what impact bun or quick have or what kind of traction they will attain they're the biggest risks to take right now but if you generally care about problems
[05:04:47]  they're solving you know performance hydration cold starts they're already made their predecessors obsolete if you come to the shred say what about my framework i'm sorry cause great pain
[05:04:55]  a defense adding projects were an analogy i agree yeah okay so generally speaking i agree with the statement i think where i started kind of going off it was around here when we
[05:05:12] 're talking about the 2x to 3x but not even that um it's not clear where was it the benefits aren't marginal they're exponential but it comes at the cost
[05:05:26]  of even more painful migrations and mental model shifts and are working heavily on ecosystem compatible although both working heavily on ecosystem compatibility i think they're handful in sites okay cool so
[05:05:39]  this this this this is this is what i want to want to talk about here for a moment is it it it's talking there's there's a statement here about where it
[05:05:52]  says they went off to invent new paradigms instead of adopting incremental improvements and that that was the statement that i took more the the most offense to because and i i
[05:06:04] 'll explain this i think that i think the analogy is right and i think in the terms of progress and the outcomes and and the and the analysis in terms of how that is
[05:06:13]  actionable is is there is there is the right analysis but from my perspective it's a little bit different you have to remember that both solid and dino opted for not compat
[05:06:29]  right i i just want to point this out here so i view this a little bit differently because dino thought they were going out to build something new that didn't work like
[05:06:45]  node or npm like they changed the the underlining building blocks uh to like what the what they were doing they might you might say that they did it to do similar
[05:06:57]  things but they actually went and they they they were like no no we don't want to use npm they they weren't compatible with the existing ecosystem right and solid similarly it
[05:07:12] 's funny people keep on like saying oh it's like react incremental solid started from the ground up not using reacts uh model and also was not compatible so it wasn't that
[05:07:28]  these solutions were aiming for marginal improvements what these solutions were aiming for was how should i put it they were aiming for being able to provide a solution that could replace the existing
[05:07:45]  solution holistically across the board where at that point when they came into being no one assumed that you could make a different solution like like don't get me wrong like in the
[05:07:57]  framework space there is more of that like there's felt and stuff but no no one assumed that you could make something that looked or felt like react and do everything that reacted
[05:08:06]  but not do it reacted and and the same thing with dino like that you could just like walk away from you know node stuff and that it would be viable to do not
[05:08:16]  node so the priorities are different these frameworks like solid or you know you know platforms like dino tried to go how can we cover the whole range of solutions so that we
[05:08:29]  could be a viable replacement with completely new architecture and underpinnings what are the building blocks whereas if you look at maybe bun or quick they didn't go that way they're
[05:08:48]  like how do i solve one like more specific narrow problems and get incredible gains that because what they tend to do is they when you ask them about when you when you'd
[05:09:00]  ask them about the wider solution they'd be like oh yeah i'll just do what dino does or i'll just do what solid does do you know what i mean like
[05:09:09]  and i i don't know about bun completely into in relation to dino but the way i'd put it this way is that the dino solid kind of tier is
[05:09:24]  about changing the underpinnings so it's like about it's about i i it's it's about innovating by changing the the the core mechanism like in our case react
[05:09:38] ivity um whereas say quick and bun is are about optimization it's about taking that on particular vectors very very very very far and then just kind of shrugging off the
[05:09:54]  rest of the space because they've seen what um solid or dino has in this case done it's kind of like it it's kind of like assumed that um the
[05:10:07]  rest will fall into place and i i think i think that that's the key the key difference right because you have the situation and again i can't speak completely for bun versus
[05:10:18]  dino but you when you look at the way that the dino team or luca can reply to jared and that jared's always like pushing very specific benchmarks and
[05:10:27]  and the dino team's always like well yeah but what about the whole system like what about the like what about the whole entity that's great you made that one thing fast
[05:10:35]  and i i guess in this analogy i can relate to that right because it's one of those things where like quick is really good at that one particular area you know for
[05:10:45]  loading and page load and stuff but like if you look at the spectrum of performance on javascript framework solid is faster on like 80 right so it's like it it's
[05:10:57]  kind of like one of those things where it's like it it it i i think the i think the like comparison is apt actually when i'm looking at it and i
[05:11:10]  think the result of how like the reason you choose dino or solid in that traction and the reason that it's like a 2x or 3x is because it's a
[05:11:18]  2x or 3x across the board instead of 10x and like one one one area or a couple areas that merit future potential i i guess that's the best the
[05:11:32]  best way i i could i could put it um it's unclear if that 10x expands the whole range and in fact i would say if you asked anyone working on d
[05:11:44] ino or solid it most definitely doesn't right so it's it it's it's it's one of those kind of interesting uh tensions because i think someone showed me something called
[05:11:57]  like an adoption curve um and you know in terms of like like bleeding edge like early adopters you know considerate people behind the edge you know like behind that and like
[05:12:12]  laggards or whatever and i think it's one of those things where like the focus is different as the projects mature in terms of like where where the where the winds
[05:12:27]  are i guess right yeah so i mean so yeah the the answer for a lot of people in new french yeah of course right and that's the whole thing here right um this
[05:12:43]  isn't saying that any of these stages are better or worse than the other the only the only reason i wanted to bring up this up was because i i think i i
[05:12:55]  think the part about the incremental improvements is is difficult to kind of because i like i don't again i don't know in the dino and bun thing but it's the
[05:13:11]  reactivity that enables quick to do what it's doing do you know i mean like it's it's the cool it's it's the work that goes into understanding that
[05:13:18]  the component model isn't the right way to break stuff up that allows to optimize on a specific vector but to get there you first have to understand how um to get away from
[05:13:33]  the current architecture hey okay i don't know i guess i said my piece on that there are too many js turns exactly that's the problem i'm like having this debate
[05:13:45]  here and people in chatter just like what all i noticed is you just named six different projects right um so yeah the the as i said i i stand by like the first
[05:14:11]  statement and i stand by like the last statement in terms of like like the the results of this like like if you're hitting pain points this is when you should do it if
[05:14:25]  it's uncle you know like that part it was just i think the reason for why is that and maybe this is always what happens in these patterns it it takes it takes
[05:14:34]  basically understanding that there can be an alternative before you can basically take your mind off to optimize on very specific things i am yes i am aware of it and i've showed
[05:14:51]  it to few people i think is a great starting point to compare syntax i think it's a little bit svelte centric is my best way to put it because it
[05:15:00]  doesn't include any of the stuff that's like svelte doesn't do but you can do in react that like uh component composition and a few other things but i
[05:15:10]  think in general is very useful website uh the problem is like hml syntax is fine people have made us as sfc file stuff it's more of this like jsx is
[05:15:27]  kind of useful and powerful and it's established syntax i don't have to worry about like all the tooling exists typescript everything works um um but like tag template literals
[05:15:39]  for example aren't particularly good anything that has runtime um implicate like expectations i don't think is a good choice because you then have to do all the reactive wrapping yourself and
[05:15:48]  that's clunky so i definitely like a compiled template um type of thing right i definitely like uh if you're gonna go with template language it should be compiled yeah exactly
[05:16:01]  i i that's why that silly bun conversation is you know with the punting is so important because like it's just a thermometer about can we change how jsx works do
[05:16:11]  you know what i want for jsx i'm sorry sub grant but almost all the stuff they suggest for jsx 2.0 is actually really interesting one of the most interesting
[05:16:21]  ones for me is the potential of using do statements in expressions and basically having it implicitly do statements if they do that this is incredibly powerful because it means that you can
[05:16:33]  use for loops in jsx and if statements but most importantly for loops and if you can use for loops in jsx that means you have a language um a language feature that
[05:16:43]  is analyzable in the same way that we analyze ternararies we can analyze for loops like i can't analyze a map statement like a map statement is just
[05:16:52]  a function you can't compile it compile it but with a for loop you can analyze it and i mean i'm not saying i necessarily go this way because i do kind of
[05:17:01]  like the ergonomic look but if it worked fine you wouldn't need show or for components if they if they had that because we could actually analyze it from a compiler standpoint but
[05:17:09]  yeah i it's it's interesting all right um we got one last one before we go um right and this is the reason i was late for the stream so we're
[05:17:25]  going to end the same way we started a long time ago i built a really simple wrapper to show how you put reacting in solid and solid and react and as usual i
[05:17:39]  just didn't think of anything on it like it's funny like people usually like make big um deals out of you know like these kind of things but like honestly i didn't
[05:17:50]  really care about adoption at all i didn't really care if anyone used solid and i didn't care you know i like what you know it seemed like cool but i'm
[05:18:00]  like are you really going to do this in your react app but someone um convinced me that i should look at it again and i was like okay sure and i'm like you
[05:18:10]  have a compiling jsx and in you know the same project well that's what i was working on i managed to get two different jsx's compiling in the
[05:18:17]  same project and i i managed to make it so that in the simple simple simple app i have a react app use state you know and this is interval so you can just change
[05:18:27]  the interval right now it's it's a one second so a thousand milliseconds and i have a counter component where i pass that interval to and then as children i put in some
[05:18:36]  buttons um that update but the fact that children doesn't really matter uh or the fact of children is important but the fact of what i put in here doesn't really matter
[05:18:47]  it you let's just like this is not a real case you never pass buttons to a counter child i just i just did this for sake what's interesting about this example is
[05:18:55]  this looks like a normal react app and if i speed up the counter gets faster and if i slow down it's it gets slower well way too slow did i yeah okay let
[05:19:03] 's speed it up a little bit again and it just kind of works and but the the fun thing about this example obviously is that while this is a react app doing this
[05:19:15]  kind of stuff this counter looks uniquely different um what's this create signal garbage so i'm sorry i'm going to zoom out a little bit i zoomed in too much okay
[05:19:27]  um this is it's it's getting some props in which is an interval that it either defaults to a thousand or sets the interval and then there's a crate effect and
[05:19:40]  a cleanup and then it inserting props children and it's and it's displaying the count um we could we could do something here maybe like maybe we should put this in a
[05:19:52]  separate div or something um give it i don't know should we put this in a div too i don't know i'm just i guess none of this actually changes anything um
[05:20:05]  sorry that part doesn't matter but what i'm getting at is like this is a solid component compiled into solid where we're passing in props and jsx children and what
[05:20:17]  you end up with is a working working solid inside of react how i did this really simple actually um i just made a this wrapper which i called reactify after my original
[05:20:34]  reactify um thing and all it does is use this memo to create a store like a solid store and then every time it renders it sets the props of or it sets
[05:20:45]  the store with the most recent props and it has to do one smart thing it has to go through all the props and it looks for anything that contains a virtual dom node
[05:20:55]  um like this vdom node and i identify it using this this is not the best thing but just you get the idea and if it finds a vdom node it creates a
[05:21:04]  a portal against an arbitrary element and then it ends up passing that element which is a dom element as the prop so that's what becomes the prop becomes the dom element and
[05:21:20]  then the portals are made as children of the of this of this element that we use as a ref so that react stays stable so react basically renders um solid inside
[05:21:31]  the span um it could be div or something i was just playing around and essentially renders all the portals that it needs for any children like it doesn't have to be
[05:21:40]  children we could pass jsx as a prop if we wanted to into here like it doesn't it doesn't it doesn't really matter um and that way for any jsx
[05:21:49]  prop it'll pass it'll create a portal um where it's red and solid and essentially what's cool about this is from the solid component thing other than the portal wrapper
[05:21:59]  which you need for uh event delegation unfortunately but other than that dom wrapper for the thing the authoring experience for solid is identical you don't actually because solid knows how to deal
[05:22:11]  with dom elements it doesn't like there's no extra wrapper here this is normal solid authoring this is normal react authoring and you have a solid component working in react
[05:22:21]  yeah and i i did solidify um for the opposite direction originally solidify is making a react component solid um that's where i got the name from this is just i originally
[05:22:36]  did solidify because i was thinking oh maybe we could put react in in components inside solid and then i was like after a while i was like i don't i don't
[05:22:44]  know if i want react components inside solid like kind of like like so but i know a lot of people who want to try try solid inside react so it's like portal
[05:22:56]  islands the portal islands of solid inside react kind of but what happens is solid is just rendered into a dom node in react but then we have to portal the react children into like
[05:23:10]  the jsx into the solid so this is how we get transclusion so like we have these are react vdon nodes these buttons but they're getting rendered inside props.
[05:23:21] children inside solid this is how we we do that essentially um yeah so i just wanted to kind of show that off a little bit because um why is it forking it oh
[05:23:35]  i'm not signed in whatever it doesn't matter um this is cool i think that that we we build this a bit up into a library or something and you you know
[05:23:46]  this could the the hardest part about this is just making the right um vt config and i feel like i could package this in a way that it's universal enough because all
[05:23:56]  solid packages have a solid export that exports gsx generally and then we can basically use that as an identifier plus if you put your solid code that's in your app
[05:24:05]  inside a folder the combination of those two will let us uh basically know how to process the solid components before sending them to react what about ssr yeah this doesn't this
[05:24:18]  does not solve ssr so this is ssr would be incredibly more complicated um but i i know there's a whole ton of react apps that are not ss
[05:24:30] r um and we can make this kind of work like seamlessly with ssr from the sense that we can make it so that like it works kind of like uh client
[05:24:38] -only components so essentially it doesn't ssr but then wakes up the client kind of like web components so yeah yeah i mean people could do micro frontends but people
[05:24:50]  can do micro frontends already and that's not enough micro frontends suck like you don't want to do micro frontends no one no one wants micro frontends not a
[05:24:57]  good thing sometimes you need micro frontends but they're not something you want um yeah i think if you have both sides you could honestly i i don't i think if
[05:25:11]  you're on a migration path you want reactify more than you want solid solidify or whatever because the problem with solidify is you don't want to start if possible
[05:25:23]  i i i understand if you wrote your design system in react um it's kind of hard and then you want to use in a solid but i think that's where things start
[05:25:33]  getting a lot more messy um especially because of expectations on context and stuff right now these solid islands are islands essentially and if you wanted to string together the context connectivity between the
[05:25:46]  solid and react app it's a little bit trickier right now this is clear separation this is basically letting you essentially go i want to rewrite a portion of my app i think
[05:25:57]  i think the cool thing about solid is it's small so it's like adding solid to your react app is like a few kilobytes you know so it's like
[05:26:05]  not a huge hit i mean if you're already using something much larger with react it's like smaller than react router um but yeah i i think i think it starts getting
[05:26:15]  yeah i i will probably do both but i i do i do think there's some consideration there just use astro for ssr yeah but i i i know some people
[05:26:28]  will find this interesting yeah i mean yes i mean the the thing is no no one other than the docs that we provided so far and the github issues which we
[05:26:48]  talk about decisions and some and the discord discussion you're not going to find like no there's not there hasn't been enough guides on it um there's been a few i
[05:26:58]  think i think i i gotta pull it up there's been a few good intros i think uh aj who is with us uh in the chat wrote a good solid start
[05:27:07]  uh introduction article but if you really want to dig into it like this the everything's new it's it's only the work that a couple people like we need better docs probably
[05:27:17]  before even get better guides like you're not going to find a ton of content yet please don't create nextify uh i mean that would be the the maybe like an
[05:27:31]  ssr version yes thank you aj for linking your article yeah this is this is yeah oh i missed this one thank you maple um uh no there's places where micro
[05:27:55]  front ends make sense but even then like fight them you know as long as you can as yeah anyway how's everyone doing um i got i got i got a cut stream now
[05:28:13]  um it's been it's it's been it's been a it's been it's been a good week i'm i hope everyone enjoyed what we talked about i'm
[05:28:21]  looking forward to the this this new year um but i'm hungry and i need to eat some pizza so uh yeah i'm out of here have have a great weekend everyone and
[05:28:32]  uh see you next week when we talk about live view js all right see ya