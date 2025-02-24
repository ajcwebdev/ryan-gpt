---
showLink: "https://www.youtube.com/watch?v=iuwqOkH6jKY"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring 11ty with Zach Leatherman"
description: ""
publishDate: "2022-08-19"
coverImage: "https://i.ytimg.com/vi/iuwqOkH6jKY/sddefault.jpg?v=62fd39f4"
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

[00:00:00]  All right. Hey, hello, everyone. Welcome to my stream today. Today, we're going to be looking at 11D, which is a JavaScript static site generator
[00:00:15] . I have to admit, I know nothing about static site generation. I've been doing web dev now for like 25, 26 years, and I've made static sites,
[00:00:25]  but I have never used a static site generator in 26 years. This is not the area that I am an expert on or know anything about at all. Just a heads
[00:00:36]  up here, almost everyone in the audience probably has more experience with static site generators than me. Come say hi in the chat and let me know how you're all doing.
[00:00:49]  I just wanted to throw that out there because this is going to be a journey exploration for me because I've heard about stuff. I understand the mechanics of it, use
[00:01:01]  of CDN, but my idea of static was always single page app, like static single HTML file and some assets serve it from a CDN. That's as far as
[00:01:12]  static was, except for in the really, really old days when I used to actually make static HTML files. I'm curious because I know so little about this space,
[00:01:22]  but I mean, it is the other side of the diamond. What I'm seeing recently is this kind of convergence now, now that we have the edge, you know,
[00:01:31]  and as this company becoming even more aware of, you know, working at Netlify and whatnot, that like, you've got like the classic concept of what you can
[00:01:38]  do with static things like Jamstack and bringing dynamicism to static. And now we have, you know, more dynamicism at the edge. And there's like
[00:01:48] , there's a whole different balance, I think, than it ever has been historically. And it's my opinion that we can't really make decisions between these kind of technologies
[00:01:58]  and understand what's, you know, unless we take the time to understand what's going on. So I'm pretty lucky to actually have the creator of Leventy.
[00:02:06]  And to my knowledge, Leventy is like, like, there's other static site generators written other languages of Leventy is like, the first JavaScript first one
[00:02:15] , um, um, to be here and talk about like, how he did it, you know, what we're what, how this all kind of came about and what
[00:02:24]  we can do with this, um, you know, more than anything. Yeah. So I'm gonna, in just a second, I can keep everyone can hear me
[00:02:32]  fine, right? You all can be a little louder in the chat, eh? Say hello as you drop in, you know, given given people a couple minutes here to
[00:02:43]  join on. Awesome. I see people from Twitch and from YouTube. I've been streaming to Twitch the last couple times. I'm still getting the hang of that,
[00:02:57]  but, um, glad to see you all here. All right. All right. Well, I guess we should probably get started pretty quick here. So I'm, I
[00:03:07] 'm actually going to welcome Zach on to the show. And, uh, hello, Zach, how are you doing today? Hey, good. How are you? Thanks for
[00:03:17]  having me. Yeah, I'm, I'm doing pretty good. Uh, just a typical Friday morning where I am aware that the stream is coming and I know that
[00:03:26]  I'm never going to be prepared enough. Um, this one actually, I'm maybe been a bit lazy. I, I, I, I, I have an excuse
[00:03:32] . I, I, I honestly don't know about the subject matter we're doing today. So I'm going to, I'm going to leave that kind of knowledge in
[00:03:38]  your hands and just to learn along as we go. So that made my life a little easier. How about you? How was your morning? I was good. Uh
[00:03:45] , shipped a new 2.0 canary of 11d this morning. So. Oh, that's, that's awesome. Busy busy. Yeah. See like,
[00:03:52]  and I didn't even know that. So we're 2.0 is coming pretty soon. Is that, is that what's going on? Yeah. I would say that
[00:03:59]  horizon is, um, definitely within the next one or two months. Nice. Nice. Okay, cool. So there we go. New version of 11d coming soon too
[00:04:06] . But, um, before we even get into that, uh, Zach, how about you tell us, uh, uh, maybe a little bit about yourself and how
[00:04:13]  you got into, I, I don't know how far back we want to go, but how do you got into the point where you decided that you're like, Hey
[00:04:19] , I'm going to make a static site generator? Well, that's a good question. Um, so I used to work at a place called Filament Group, which
[00:04:27]  was an consultant agency and we did front of the front end work. And so, um, at that time I was a big Jekyll user. Um, and
[00:04:36]  11d started, I think around 2018, 2017. Um, and it was really just as a way to do Jekyll style sites, um, or, um,
[00:04:48]  clients. So that's really the core of, um, one of the, maybe the weirdest, but most popular original feature of 11d was that it supported a bunch of
[00:05:00]  different templating languages simultaneously. And the reason that that requirement came about is that I wanted 11d to use for our agency work. Um, and when you're working
[00:05:10]  in an agency, a lot of the requirements are, um, dictated by the client. So you don't necessarily get to decide what templating language that you use
[00:05:20]  in that context. Right, right, right. But I mean, you were using Jekyll at this agency, right? Um, yeah, Jekyll,
[00:05:27]  um, and Jekyll on my personal side as well. I used to have a WordPress and then went to Jekyll, I think 2012 or something like that.
[00:05:35]  So what, what, what, what did you think you could do differently? Like what, what was it that made you go like, Hey, like, cause I
[00:05:42]  get it. You're working and you're like, man, maybe this could be better. Maybe we could do something a little differently. Um, what, what was it
[00:05:49]  for you? I mean, and this is going to sound like it's, it's not very flattering for me, but I did not like Ruby. I did not
[00:05:57]  like writing in Ruby. Um, and I wanted the JavaScript version of Jekyll and that's really where it started. Um, there's not much more to it than
[00:06:06]  that. Okay. I mean, that's, that's fair. Right. Um, it's funny, like, cause on the backend side, like, it's funny
[00:06:14] , like on the front end, we have this whole like frameworks are religion thing, but on the backend side, languages are, you know, like there's, there is
[00:06:20]  a, there is a split there and, you know, like preferences and, and whatnot. Um, and I, I guess your like love of JavaScript, uh,
[00:06:30]  to spawn from just having worked a lot in the front end and having used JavaScript pretty much. Yeah. I mean, I've been building websites for 24, 25 years now
[00:06:41] , and JavaScript has been with me the entire way. Um, the, obviously the syntax has evolved over time, but, um, yeah, I'm real, I really
[00:06:50]  have a love hate relationship with JavaScript. And I think that that's maybe the, the, and that is resembled in the interesting space that Eleventy occupies
[00:07:00]  as well. Okay. Yeah. That makes sense. Yeah. As I said, um, it's, it's interesting that like, cause what you first created the Ele
[00:07:09] venty went, was it, it was mid to like 2015 ish or am I, am I off? Was it, I think the first version was in 2017.
[00:07:17]  Okay. So it was actually later than that. Yes. For some reason I thought it a little earlier. Yeah. So yeah, it's interesting that we hadn't
[00:07:23]  really seen much in the way of JavaScript, uh, static site generators before that point. Right. Yeah. I don't think that that's necessarily true. There were quite
[00:07:32]  a few that predated Eleventy. Okay. That weren't necessarily Jekyll like. Um, so I think metalsmith was a big one back in the day
[00:07:41]  and I don't really remember a lot of the other ones, but there was a lot of very popular JavaScript. static site generators at that time. Um, but they
[00:07:49]  really took more of an API approach rather than a file system driven approach. So I really liked that Jekyll was sort of driven primarily from files on the file system.
[00:07:59]  And that's when I wanted an Eleventy as well. Right. Yeah. See, as I said, uh, this is me showing, I know nothing about this
[00:08:06] . Um, so that's good context. Cause yeah, like Eleventy was actually how this came into my scope of view again. Cause I was familiar with like
[00:08:15]  Hugo, like I'm, but Jekyll mentioned, but like I said, these are things in like the outside of it. And then someone's like, Oh
[00:08:22] , Eleventy. I'm like, Oh, okay. And they're like, no, it's JavaScript. I'm like, what, what? That was like
[00:08:26]  actually a big difference for how this came into my sphere of things. But as I said, I'm, this is not my typical sphere. As you said, you're
[00:08:34]  working at agencies, you're generating lots of content. A lot, a lot of like, like the types of sites who you built an agency. Again, I,
[00:08:41]  I never really, I've never worked in an agency. I worked at a startup for eight years, maintaining a single page app and built mobile apps and like web apps and
[00:08:49]  very app, app, app, app. So I, I, what is it like working at an agency? Like, just like, I, I've heard good stuff
[00:08:55] . I heard bad stuff, but what, what, what, what, how did that influence your experience? Yeah. I mean, there's just so many different,
[00:09:03]  I mean, there's different agencies obviously, but filament group was really kind of known for their progressive enhancement delivery and their accessibility delivery and their performance delivery. So all of the
[00:09:14]  things that filament group has known for is, are things that I have carried forth in my career and definitely learned a ton from working there. Um, so yes, I
[00:09:23]  mean, the clients can be difficult, but filament group was kind of known for those things and, um, was really big in the jQuery community at the time. And
[00:09:31]  so they really get to select clients that were also interested in those same kind of things. So, um, yeah, it was a good gig. I liked filament group a
[00:09:40]  lot. So like, like you mentioned jQuery and that was like, I'm just trying to get back into when you were working there mid 2010. So 2015,
[00:09:49]  16, 17, 18, whatever, like that time period. And, and you're building static sites mostly because they're content sites or things or marketing sites or those kinds
[00:10:00]  of things. Right. Yeah. Or design system style where you're just delivering the like static assets that get, then get integrated. Right. Okay. And like the,
[00:10:12]  where they're like CMS is on the backend. I'm just trying to like paint the picture of, of this. Um, yeah, there was some WordPress. Um
[00:10:19] , uh, yeah, Meg Magneto. Okay. That's another one. I don't know. There's a lot of different, uh, different backend systems that are
[00:10:27]  integrated. And then like the JavaScript layer typically there, was it still largely stuff like jQuery kind of, and vanilla, like stuff like, like it was a, I
[00:10:36]  just don't know, did people pull stuff like react into that? Or was that like, not even a thing or. No, I mean, um, react wasn
[00:10:44] 't really our forte because we really wanted the, uh, to control the entire baseline experience. So our, the specialty was mobile first, uh, progressive enhancement driven applications.
[00:10:56]  And so, uh, to best deliver the performance that you need for those, you need a streamlined, a JavaScript experience as you can on the client. I mean. Um
[00:11:05] , so it really became, how can we control. Uh, the entire front end experience without delivering too much overhead, not too much react in that, in that space
[00:11:15] . Okay. Okay. That, yeah, that, that makes sense. And then that's what I was kind of picking up on, because I can, this is a
[00:11:23]  very different world than I was living in at the, at that standpoint. I was five years into maintaining the same single page app that I've been maintaining for years. And
[00:11:31]  like. In this, like if you go back to 2015, it was more like, everyone's like, Oh, I guess it's time to finally get, get
[00:11:41]  off whatever we were using before and move to react. That was like the, that was the time period. And, but for, in the agency side of things, it
[00:11:48]  was just like, this is like, it's just kind of outside of the scope or the area that you're doing this stuff. Doing this stuff just because like the
[00:11:55]  control, the amount, the amount of content you're pushing out, just the, I guess, workflows even with, uh, you know, designers and different, just different
[00:12:05]  kinds of patterns. Yeah. And I, I wouldn't argue that you couldn't deliver that experience using react, but all, all, all, a lot of the
[00:12:14]  tooling around react is a single page application based and starts from that mindset. So, um, yeah, the defaults there are very important. Right. Yeah, no,
[00:12:22]  that makes a lot of sense. As I said, I'm just trying to like paint that picture of it. So then we're kind of like, enter 11d,
[00:12:28]  right? So, um, did, I guess my first question was, did you, did you get to use. 11d at projects at this, uh, agency
[00:12:36] , or was it just kind of like one of those things where you're like, oh, this would be really, really freaking cool. And then by the time you like
[00:12:42] , make it like, sorry, I'm talking to my own experience. By the time you make it, you're, you've actually moved on to something else, but
[00:12:48]  no, uh, go ahead. Yeah. I mean, filament group.com is written with 11d. That was previously a Jekyll site. Um, I don
[00:12:55] 't know how much we used it in actual client work because, um, right around the time that 11d started to take off, I started working at Nellify.
[00:13:03]  So, um, yeah, just the timing there was a little, yeah. How, how long have you been with Nellify? Cause for those who don't
[00:13:12]  know, Zach is like the, like, before I joined Nellify there, um, and like, and I was talking to them for a little bit, I had
[00:13:21]  no clue what the role was or what I was going to do. And then all they could do is they could point me at Zach cause Zach is the first of the
[00:13:29] , of his kind, essentially where we have a framework, um, maintainer, um, getting to basically work full-time on open source. Um, so, but
[00:13:39]  you didn't start at Nellify like that. So, uh, yeah, just speak to that. Yeah. Right. So I, I started at Nell
[00:13:46] ify, uh, two, two and a half years ago and I was hired on to do the marketing sites. So, uh, we have a bunch of different marketing properties
[00:13:55]  at Nellify. We have the .com site, uh, not to be confused with the app, which is a separate team. Um, but we have Jam
[00:14:01] stack properties as well. Jamstack conf, jamstack.org. Um, and a lot of different microsites just for, um, yeah, just small
[00:14:10]  marketing things that we wanted to do. So like the year, your year on Netlify project, um, was one of the big ones. And then we also
[00:14:19]  had like a 1 million developers when we had 1 million, um, at Nellify, we did a little microsite for that too. Um, so yeah, just
[00:14:26]  a lot of little microsites and, uh, and some larger, longer term properties as well. That makes sense. And, but, but even Eleventy itself really
[00:14:34]  fits so well with like, um, Netlify's Jamstack kind of mentality in that. So, I mean, I guess I imagine it wasn't too
[00:14:43]  long before, like there's just such a nice synergy kind of work together thing there. Yeah, it was really interesting when I came to work at Netlify specifically,
[00:14:54]  there were a lot of fans of Eleventy already here. And that's probably why I was able to get a job here. So, um, yeah, that was
[00:15:01]  kind of the secret. So I didn't, it wasn't, didn't really take a lot of convincing or folks on the marketing team to use Eleventy because
[00:15:08]  Eleventy was already here. But when I did start, we did do a rewrite of, uh, the dot com property from, or the dub dub dub property from
[00:15:16] , uh, Hugo to Eleventy. Uh, and that was kind of one of the first huge projects that I worked on here. Nice, nice. And yeah,
[00:15:23]  so things just evolved. You got, you were doing some Eleventy work at Netlify doing, doing, using Eleventy to do work for Netl
[00:15:32] ify doing all this stuff. How has this changed in the last few months where now you are, you know, work, you get to, you know, you get to
[00:15:41]  come in every day to work on Eleventy specifically. Yeah. I mean, there's just, there's a lot to unpack with this question because, uh, I
[00:15:49]  think about it a lot. Um, yeah, I mean, the, the requirements are marginally different because I basically set the roadmap exclusively. Um, but I still
[00:15:59]  do a lot of discussions with the old marketing team about what they want and, um, bug fixes that they need in. So, I mean, there's some synergy if
[00:16:10] , if I can use that word, um, in the space as well. But I think that the biggest difference for me is that, well, there's probably two big
[00:16:17]  differences. And one is that I just feel less burned out. Um, because I'm not managing two separate jobs because it felt like when I was doing the marketing sites
[00:16:30]  before it was, uh, I was doing two things simultaneously, right? I have these sites that I need to deliver for Netlify. And then I also have to
[00:16:37]  maintain and, um, deliver new features for Eleventy. And so that, that, I don't know, weighs on you. It's hard to manage both
[00:16:45] . Um, and now that I get to do it full time, I, I feel more energized. I have to like stop myself at the end of the day so that
[00:16:54]  I don't work overtime. Um, yeah. Yeah. And it's just different. Um, I definitely do less hacking at night too, which is not as,
[00:17:03]  I mean, I would say that's probably a con, but, um, it also, I don't know, it keeps me more fresh during the day as well.
[00:17:10]  Yeah. That makes sense. Sometimes, uh, I've got some like terrible stuff I'd like do at night and then I'd like wake up the next morning.
[00:17:18]  And it's funny cause I wasn't working on solid at that point. I'd like have to go into Marco, but I'd be like, what the hell did I
[00:17:23]  do? Like, what, what, what, what was that? Yeah. I mean, just even context switching on, on a full night's rest can be difficult.
[00:17:31]  So, um, yeah, I'm definitely doing less context switching now too, which is really nice. Yeah. And that's, that's, that's awesome. No
[00:17:39] . I'm glad to hear it. See, I actually, I've asked Zach this question offline before, because like, even before I joined on Nutfly, I
[00:17:45]  was trying to ask him and I'm like, I'm like, oh, so it's, it's been a month now or so. What's the catch? And
[00:17:50]  he's like, I don't like, like, he's like, no, there's no catch. Like he's like, I have no clue. I'm just
[00:17:56]  like, so ecstatic every day. I get to go to work to work on my passion project. And yeah, I, I it's, it's funny. Cause
[00:18:02]  I I'm now like more in the position he was in when I asked him that question. And I asked him that question. I can understand where the, where,
[00:18:09]  where his answer was coming from. Um, you know, that's awesome to hear. And I'm, I'm super stoked that we've been able to, uh,
[00:18:16]  have this opportunity to do this kind of work. Um, it's, it's amazing. So again, thank you Matt and all the Netlify team. Um
[00:18:25] , yeah. Plus one. This is, this is the best job I've ever had. Yeah. So, uh, enough, uh, Netlify love for a
[00:18:31]  moment. Um, let's, let's turn this back around to, uh, Eleventy. Um, because, um, yeah, like I, I told you
[00:18:41] , I barely even know what a static site generator is. Um, so that's might be a good place to start. I'm, I'm, I'm,
[00:18:47]  I'm going to pull up the docs screen for Eleventy just because, well, I can. Not that I'm probably going to speak to it yet. Uh,
[00:18:55]  where am I? No, that's not right. This is it. Uh, here we go. Um, but just, just like, we, we don't have
[00:19:01]  to speak to what's on screen here. Just, just to start off with like, what is a static site generator? Like what does it do? Yeah. I
[00:19:11]  mean, I like to think of Eleventy specifically as it just takes a folder of files and then transforms them into a website. Um, and that's really all there
[00:19:21]  is to it. I mean, at its core, it takes HTML as an input and gives HTML as an output. And there's a lot of additions on top of
[00:19:31]  that, obviously, but, um, right. That's it. That's the core of it. Right. Which is interesting. Cause you mentioned something that, you know
[00:19:40] , just like on the surface, the inputs the same as the output. So what, what is it doing? Right. Um, uh, I get, I'm gathering
[00:19:47]  that the input obviously isn't just HTML, HTML plus other stuff. Um, but maybe we'll look at that in a minute, but, uh, okay. So
[00:19:56]  broad definition, it takes a, basically a bunch of files on your system and turns it into a website. Okay. Um, from, and I guess you were mentioning already
[00:20:08]  that Eleventy was very inspired by Jekyll. Um, some people in chat are actually already asking me, like, they're like, Hey Ryan, what
[00:20:19] , you know, will you ever look at Hugo and how does, you know, basically how does Eleventy compare to other static site generators? Or someone was like,
[00:20:29]  why, why is it hard to convince people to switch from Hugo to Eleventy? Like, I don't know any of this stuff, honestly. Um, but
[00:20:36]  like, yeah, so I, I would say that, I mean, Hugo is the, is a legend in the space in terms of the speed that you can get out
[00:20:45]  of the tool. Um, it's by far the fastest tool to generate files. Um, and yeah, it's just, you can get incredible speed out of Hugo.
[00:20:55]  Um, not, not everyone likes, uh, go syntax and Hugo syntax. So, um, that's really the space that Eleventy occupies is that we
[00:21:05] 're just marginally slower than Hugo, uh, but in JavaScript. Right. And we get a lot of, a lot of projects that, that like to live in that
[00:21:14]  space as well. Because there's a lot, there's a lot of benefit that you can get from having JavaScript and the same language on the, in the client space and
[00:21:21]  the server space at the same time. Um, but it's really dangerous how different frameworks leverage that. Right. Okay. Let's go here. So I've just
[00:21:31]  pulled up the doc site here and I'm just kind of browsing a little bit just to understand, cause we're still talking. Okay. So input, here's our input
[00:21:39] , right? HTML markdown, Eleventy JS files. Oh, I'm interested in that liquid templates and nunchucks and handlebars and mustache and EJS
[00:21:48] . Basically every templating language. I used a lot of pub back in the day, but a ton of data. But a ton of different templating languages, mark
[00:21:55] down, whatever the special JavaScript format thing you have going on is. And that's kind of what our system is. And then we get our site out on the other side
[00:22:06] . So yeah, a lot of testimonials. Let's see here. I mean, there's some command line instructions and some tutorials, but if I was just wanting
[00:22:17]  to be like, okay, I guess the first question is, when do I want to use a tool like this? Like what, what type of site am I going to
[00:22:27]  be building here? I mean, that's a very contentious question. I know a lot of folks sort of buy into the apps versus websites dichotomy. I
[00:22:37]  don't necessarily buy into that as much as I feel like a lot of people do. And so I kind of believe that you can use Eleventy for any kind
[00:22:49]  of site. Even if you're building an app. I mean, obviously we don't have the integrations in Eleventy specifically to do like the nice page transitions that
[00:23:00]  you would need if you need to maintain state on your page when you're doing navigations. So that's not built in. But again, I would say that the
[00:23:10]  tooling kind of drives the output. The defaults that you have in your tooling drives the output. Right. So I would say traditionally folks have used Eleventy for content
[00:23:20]  driven sites. Right. But I would not say that Eleventy cannot be used to build apps. Right. It's just at the baseline, you have basically a multi
[00:23:30] -page app, right? An MPA. Yep. So you've got multiple pages and I guess it's static. So it's not even like you have express
[00:23:39]  generally routing in the background. You'll deploy that to a CDN and then you just hit a bunch of different assets essentially. And that's what you see in your website
[00:23:50] . Maybe deployed to Netlify like we were talking about. Maybe deployed to some other places as well. But that's essentially it. That's it. Yeah. And
[00:23:59]  we have a deployment page on our docs that kind of lists all the different options. Yeah. Yeah. How are these structured? We've got, we've got using
[00:24:07]  data, which is a big part, which we'll talk about. Talking templates, templating languages, plugins, partial hydration. I'll ask you about that later.
[00:24:15]  Yeah. And yeah. Sorry, my. You said deploy. Will I find the word deployment? Yes, I will. I mean, they're getting started. I really
[00:24:23]  feel like, and I know a lot of folks have started with the starter projects that we have. I mean, I really feel like the best way to get started with
[00:24:33]  Eleventy is to build a project from scratch. And that's how you know everything that goes into it. And how are kind of best informed about what the tool is
[00:24:43]  doing. Um, a lot of times when you get a starter project, you get a lot of extra tooling that, um, a lot of more opinionated tooling that
[00:24:52]  comes in. Um, and you don't really know how all the pieces fit together. So, I mean, really, I just, I do kind of encourage folks to
[00:24:59]  build something from scratch rather than start from a starter template, but we do have an official like base blog. Okay. Yeah. It is like one of our primary,
[00:25:09]  um, starter templates though that's available. Yeah. I mean, for my own software sake, I might go starter template here just to see the different pieces rapidly, but
[00:25:19]  yeah, I mean, there's a, there's a, that's a fair, that's a fair point because I guess, and, and, and it's kind
[00:25:25]  of stepping back a bit when you have something so baseline, so like extensible as you were talking about, so kind of agnostic, it's almost more of
[00:25:38]  a platform than like just a library or like framework. Like, cause it's, I don't know if it's as much of a framework cause it's not necessarily pres
[00:25:45] criptive, but it's definitely more than a library. Right. In a sense, like, I don't know how it fits into this, but from what you've
[00:25:53]  described, like you have to keep like considerations pretty wide if that's the best way I can put it. Is that, is that accurate? Yeah. I mean,
[00:26:02]  I could, I, yeah. So you could build your own static site generator on top of Eleventy, uh, that has more opinions. And that's really what
[00:26:10]  I think a lot of folks have done with the starter projects. So they, that's like their Eleventy based configuration. Um, so yeah, I mean,
[00:26:20]  it's, it's hard to, to say, but I, I really do feel like the Eleventy needs to serve the baseline use case of, um, someone
[00:26:29]  wanting to just, just, so let me just step back a little bit because when, when a beginner first starts to create a website and they know nothing about creating a
[00:26:40]  website. Really? I think a lot of folks should start with just a basic HTML file on their file system and opening it in their web browser without a web server at
[00:26:50]  all. Um, and I think as projects evolve, you might get a, a couple of different HTML files on your site, or you might add a web server on top
[00:26:59]  of it. And really Eleventy wants to live in the space right above. I have a bunch of HTML files that I'm manually editing. Um, yeah,
[00:27:09]  that's, that's, you're taking me back at first because that, I mean, that is where it started, you know, I was on a windows machine and
[00:27:18]  had like notepad. And then you, you know, you would put copy this kind of code you got somewhere or get started, make some HTML tags. You
[00:27:30]  stick them in the file and then you'd save it on your desktop. And then you'd open Netscape and then like, ta-da, you know, this
[00:27:39] , this, the, and then, you know, I remember, I remember the feeling of that. Cause it's like, it's like, it's kind of almost
[00:27:44]  like the simplest sort of programming you're ever going to do because you immediately go, okay, I can add something. Now I added some text and then you press refresh and
[00:27:54]  it was right there. I learned C and like the other programming languages first. And, you know, there's that compile step and all that. And I think that
[00:28:02]  was like the magic of the web to begin with, you know? Um, so anyways, sorry, my little side tangent, but that, I don't know.
[00:28:10]  I do, it was kind of funny cause I have actually seen over time, especially when I was training new grads out of university, there's like a split. Like
[00:28:18]  that, what you just said to me makes complete sense to me and how I learned the web. But there's also like this weird split where I was getting like comp
[00:28:27]  side grads. And they were just like going to HTML was like really weird to them. They're like, where's, where's main, where's main. You
[00:28:33]  know, this, this is just like a completely meta side of the thing. It was just, it got me thinking because it, um, anyways, like I could definitely
[00:28:44]  relate to the, to the, to this, even though I'm usually more on the app space, but it's just like, there, there's like this.
[00:28:50]  Yeah, I think that that, that dichotomy exists professionally too. I think that you, in my mind, it, it really represents as like front of the front
[00:28:59]  end, HTML first developers versus, um, JavaScript first developers. And I think that there really is two different ecosystems that exist. Um, and tooling, uh, may support
[00:29:12]  one or the other. Uh, it's rare to see a tool that would support both. And, and, and actually the very important question before, like, we
[00:29:21] 're going to start playing with an 11d project here in a minute, or just kind of get a feel for it. I must ask. I didn't even notice this
[00:29:27]  at first. And it was actually David from our community who made the graphic, who snuck this onto our awesome Lord of the Rings cover. But can you tell me a
[00:29:35]  little bit about this possum balloon thing in the corner here? Yeah. So I, I think if you click on the popcorn, it will take you to like the region
[00:29:43] . Like the reasoning behind it. Oh, there you go. So that makes sense. Yeah. So we, we have been rotating through different, uh, commissioned artists
[00:29:53]  to create, um, 11d mascots. And if you scroll down a little bit, you can see some of the history behind it, um, maybe.
[00:30:01]  Oh yeah. So it really started with, um, this, these two on the left that came from James Williams, Williamson. He just sent me these images on Twitter
[00:30:12] , like early in the project's history. Uh, and I was like, well, he sent me the cat and I was like, well, can you make it a
[00:30:19]  possum? I don't know why I asked for a possum. I think that possums are funny. I think that the idea of a possum rooting through
[00:30:27]  a garbage can is a hilarious thing and a nice metaphor for open source in general. Um, so yeah, I don't know. That's kind of the history behind
[00:30:35]  it. The balloon thing was random. The cat thing was random and then it evolved into the possum and we just stuck with the possum. All right. Well,
[00:30:43]  that is cool. Yeah. I don't know. I, I mean, I'm, I'm just thinking of the time period. I mean, like I remember Em
[00:30:49] ber has the, what is it? The hamster or whatever. Yeah. So the, you know, the cute animal worked into the logo, but yeah, I see
[00:30:58]  kind of evolution here. That's cool. Okay. Yeah. Like it's got a prominent placement and like you have like the 11d logo over here and now you
[00:31:08]  have the 11d mascot. Okay. So just. Yeah. And if you have, um, uh, one of our open collective supporter accounts, your avatar is rendered right
[00:31:17]  in the middle of that balloon. So. Oh, very cool. Yeah. No, that is awesome. Okay. So yeah. Where am I best to start? Cause
[00:31:27]  I mean, you, you mentioned we could just start with something empty, but then I'm going to have to do the work of actually generating HTML and CSS myself,
[00:31:34]  which I'm, I'm, I'm like the laziest person ever. So I am semi tempted to just look at a blog site. Uh, would that be
[00:31:43]  okay? Or. Yeah. Let's do it. Actually. I would love to actually go through, um, version two of our 11d base blog, which I haven
[00:31:50] 't really talked about at all yet. Yeah. Yeah. Yeah. Using the new 2.0 canaries. Yeah. Let's, let's, let's do
[00:31:57]  2.0. Let's, you know, I, I'm always about the latest stuff. So let's, let's do 2.0. Yeah. Yeah.
[00:32:03]  And hopefully it'll, it'll work. Yeah. That's, I mean, people are used to coming and watch my stream and have stuff like mostly work, but not
[00:32:10]  quite. So I think this is not, not out of the ordinary at all. Um, that's part of the final. Go to the, if you go to
[00:32:16]  the starter projects, it should link you to. Did I go too far? Is it back in docs? Okay. Yeah. Started projects. And it's the first one
[00:32:25]  linked up there. Yes. This one. Oh, and then it takes you to the demo, but there's a link to the repo there at the top. Deploy
[00:32:34]  to Netlify source code. Try on stack blitz. What's what should I do here? Yeah. Go to the source code. Probably. I don't know
[00:32:41] . Do you want to do local development? I generally like local. Okay. It's, it's, it's a little bit easier. I like using my VS
[00:32:47]  code and whatnot. Um, and then we have a V2 branch here that you can check out. Sweet. And if I switch to our V2 without internationalization with
[00:32:57] , does it matter? Uh, with internationalization. Yeah. Yeah. I would take that. Yeah. Cool. The other one's just a benchmarking comparison. Gotcha
[00:33:07] . And then does this use this template still work from this branch? This should be, or is this my way? Let's see. Okay. Try it out.
[00:33:15]  Try it out. Try it out. And I'm just going to, it's a blog site, right? So if I call this Eleventy blog, because I
[00:33:23] 'm not very creative, this will be a blog made in Eleventy. Wow. Okay. I'll make it public so everyone can laugh at me and let's
[00:33:35] , let's do this. Okay. It's happening. Yeah. All right. So now I have my initial commit. It's all in here. Let me do
[00:33:43]  the blog baseline. Okay. Let's put this on our showcase real quick. Just one second. I'm kidding. Okay. Let's, let's, let's,
[00:33:50]  uh, let's actually get this cloned. Oh, see, this is convenient. Cause I'm, I'm, I'm, I'm, I'm,
[00:33:58]  I'm too lazy to actually type anything. Although I probably, probably doesn't seem like that's going to your, yeah. Yeah. Yeah. I know. That
[00:34:11] 's the thing. I'm going to, I mean, I, I'm going to have to, I'm going to have to do all this stuff myself anyways. Oh
[00:34:14] , well. Okay. That's all good. Um, let's, let's open up a VS code here, but I got it. Let's all start. Let
[00:34:20] 's go new window and what do I want to put it? Um, let's do examples. Okay. And actually easiest way to do this is probably just here.
[00:34:37]  See, there we go. All right. So now we have that and let's open this up. Okay. Cool. And close down use all the start. Yes.
[00:34:52]  I trust the authors. Yeah. Yeah. It's, it's a, it's an important thing. Okay. Yeah. Okay. Okay. Cool. And close down
[00:35:03]  use all the start. Yes. I trust the authors. Yeah. It's a, it's an important security feature we have now. I've never seen someone say
[00:35:11]  that they trusted me on that button before in live, live mode. Yeah. Well, there you go. Um, okay. So yes, people are asking if I
[00:35:22]  have like the default theme in VS code. Probably. I am the, I am the war, like the worst, worst, worst person. Like I know some people are
[00:35:32]  like, Oh yeah, I do minimal tooling. I don't really do tooling. I am like, I am even worse than those people. Like, like, like
[00:35:40]  my, I, I install VS code and I don't change. Like the only thing I I've changed historically is the tab versus spaces, but I've been told that
[00:35:47] , that I'm on the wrong side of that, which I understand. But I, I, I, I, I got to change all my projects to tabs.
[00:35:54]  Yeah. But that's the only thing that, that I ever do, but okay. So let's just not press the wrong button. Um, let's, let
[00:36:05] 's go full screen here. Okay. There we go. Okay. So first off, I got a bunch of stuff in here. And as you mentioned that there's a
[00:36:12]  lot of stuff that comes in. Um, and I'm not going to worry about this. I'm not going to worry about this. Let's just get up stuff funding
[00:36:19] . Okay. So I've got some structure of something here. I've got some config files and I got, it looks like some nunchuck templating. So should
[00:36:28]  I get the nunchuck extension? This is going to be part of this development experience. It doesn't look like you're on the V2 branch for whatever reason
[00:36:35] . Oh. Um, can you just check that out real quick? Is there, is, or so you, you mean like check it out in the get sense, not
[00:36:44]  check. Right. Yeah. You're using the master branch right now or the main branch. Do I get that when I fork the template the way I do? I do
[00:36:51]  not. Ooh. This is, this is part of that fun. Fascinating. So what I, I need to do is actually go to your original template. Are
[00:37:01]  they just templates? Like I can go to your original template. I can fork the original and then I'd get your branches essentially, instead of using the used template. Yeah
[00:37:12] . Oh man. Do I feel like. You can just clone the original project on your local. Part of me just wants to just, just not worry about this right now
[00:37:22] . Was this 11? Yeah. Just do it. Delete it. Yeah. Delete. Uh, 11 T dash vlog. Do they not? Oh, Ryan solid.
[00:37:32]  Yeah. Okay. That's right. I have to. Yeah. That no Jekyll file is just because this, um, this project gets deployed in a bunch of
[00:37:41]  different deployment. Um, context. Oh, what? So I think, I think GitHub is, uh, is, is, is cracking down on accidental deletions
[00:37:51] . So I actually have to use two factor authentication here. I mean, good on, good on them. I've heard some, I've never had to do this before
[00:37:59] , but, um, I'm going to type it live on the stream. Um, whatever. It's, it's, it's one of those, like,
[00:38:05]  this will self-destruct things. All right. So, um, yeah, no, it's, it's, uh, yeah, no, it's crazy.
[00:38:11]  Okay. So let's go back to 11 T I'm going to go like the long way, but okay. So here, here, uh, where were we, uh
[00:38:24] , starters, 11 T blog source code. Um, and actually I can just, uh, I can just, um, I mean, I could just, whatever,
[00:38:36]  I'm just going to fork it. No. Yeah. That should give you the branches. Yeah. It'll give me the branches. I'm just, this is,
[00:38:45]  I'm not going to wrestle with this again. So even though technically I'm editing the actual template, I don't actually care. So let's do. Yeah. It
[00:38:56]  doesn't matter. What am I not doing right here? Okay. It's you all branches, right? What do they not? What? Okay. My, my
[00:39:06]  knowledge of get apparently is nothing too. I could have sworn. I should get all the branches. I, what is going on? I know I get all the branches.
[00:39:14]  I guess I can, ah, fine. You can just clone directly from 11 debates blog. Yeah. Um, you should, it's a public repo. You shouldn
[00:39:23] 't have to copy it to your own. Fair enough. Fair enough. And we can just run it locally, but, or yeah, he won't be able to
[00:39:29]  deploy it. Well, I mean, you could push it somewhere else, but we can worry about, we can cross that bridge later. Get not equals GitHub. Thank
[00:39:37]  you. Thank you, chat. Um, so anyway, as I was saying, this project is actually deployed on GitHub pages and Netlify. And I think I
[00:39:46] 'm, uh, a few glitch as well. Yeah. Someone's mentioning, I did use the template button and it actually grabbed the wrong branch. Um, because I'm
[00:39:53]  trying to get a very specific branch off here. Um, so, uh, I usually just use the SSH method and copy that URL. That, that should give you
[00:40:08]  the, the full version on your localhost. If you just clone that locally. Yeah. Actually, I'm using the H2E S because I don't have
[00:40:18]  access rights to your, to your, it's not a big deal. Okay. So let's go back. It's RM-RF with all of this. Let
[00:40:28] 's get clone this. And if everything works properly, I should be able to just check out the right branch, um, which is V2. Let's open.
[00:40:42]  Okay. Um, T base blog. Yes. I trust the author again. And what, what branch is this? It's V2. Just V2? Yeah.
[00:40:55]  Check out. What is it? Slash B V2. You can tell how little. Okay. Okay. All right. Did that work? Seems good. Okay
[00:41:07] . Good. Okay. Then I would do, uh, the next thing you need to do is, well, I mean, you just need to NPM install at this
[00:41:16]  point. All right. Then you should be good to go. All right. Now that I've, I've done showing everyone how little I know about anything and how
[00:41:24]  I'm like the absolute worst with tooling. Um, I mean, everyone comes from different contexts. I really enjoy, uh, not that I'm enjoying seeing you stumble
[00:41:33] , but I do enjoy like just seeing people with different backgrounds trying to use Eleventy because I, I can learn a lot. It's very good user testing and
[00:41:42]  having someone that's willing to, especially with someone with so much JavaScript expertise and JavaScript experience and really comes from the JavaScript heavy world. Um, it's really great to,
[00:41:55]  to see, um, the baseline experience and the baseline installation experience. Um, so what I was going to ask though is, is nunchucks pretty valuable here?
[00:42:05]  Like, should I be grabbing this templating syntax highlighting stuff? I don't use it, but you can try it. Yeah. It'll probably make me like, I
[00:42:14]  don't even know if VS code makes me restart again. Now you start to update. Yeah. And are we back? All right. And we're back. There you
[00:42:32]  go. Okay. Interesting. Wow. Sorry. I've, I've actually never looked at it. So it's like, it's, it's like an interesting
[00:42:42] , it's just very similar to, um, handlebars, very similar to liquid. Yeah. I was gonna say, it's kind of like, like I was gonna
[00:42:53]  say, it's kind of like, like the mustachey kind of thing, but then there's also like front matter kind of like, yeah. Okay. Anyway.
[00:43:00]  The front matter thing is similar to Jekyll. Um, but yeah. And you can use a bunch of different from editor formats as well. You don't have to
[00:43:07]  use YAML if you don't like YAML. But, uh, now that I'm in this project, I jumped right to page list and there's tags
[00:43:14]  list. What, what is this a good place to start? Or should I start somewhere else? Like what, what is this stuff? I'm starting the index page
[00:43:18] . The index is the homepage. So index.nungex. Right. Okay. And that is, I mean, the, I think the best place or the best
[00:43:27]  thing to do next is probably just to start it up and get it, get it running and see what it looks like. So NPM start, we'll do it.
[00:43:32]  Yeah. Okay. And we are on 80, 80. Okay. Um, can you close this? It doesn't look like the new version still. Okay. Um
[00:43:39] , does not look like the new versions. Yeah. This is brother sync. V2. Did you NPM install before you switched to V2? Maybe, but no
[00:43:45] . Is it, did I just, oh man, this people might create a new branch. That's what I'm, that's what I'm getting at. Like,
[00:43:50]  okay. See, I use visual tools for everything. So you know what? Let's, let's open a new branch. Okay. Yeah. That's what I'm
[00:43:56]  getting at. Like, okay. See, I use visual tools for everything. So you know what? Let's, let's open a new branch. That's what I
[00:44:01] 'm getting at. Like, okay. See, I use visual tools for everything. So you know what? Let's, let's open the repo as I have it
[00:44:12]  in fork. See, this is fork. Okay. I've been getting used to GitHub desktop the last couple of days. I used to use source tree. Yeah. I
[00:44:20]  used to use source tree too. Atlassian's one. Yeah. Okay. I had trouble with, I don't know. So we got, interesting. Okay.
[00:44:30]  So it's my V2. Oh, weird. I'm on like my own V2. Yeah. I would delete that and then just check out the V2
[00:44:38] . So I go switch back to main, delete that. Way not to do things properly with Git. And then just check this one out. Track it as V2.
[00:44:49]  And that looks right. See, I should just... You're good now. I need an NPM install again. Yeah. I was wondering why that NPM install seemed
[00:44:58]  to take a lot longer than I would have expected. Yeah. The version 2 is much faster. You've slimmed things up? Yes. All right. There we
[00:45:06]  go. That's right there. And it says canary. That's the secret code. That's what you want to see. All right. So we're going
[00:45:12]  to bring that over and then I'm going to bring this over and then we're going to bring this in here. I'll just put it right in here. Okay
[00:45:23] . All right. So now that we've struggled with stuff, we'll talk about that later. Oh, no. We have a blog and we have a home and we
[00:45:37]  have an archive. And yeah, we've got some MPA navigation about me. I am a person that writes stuff. Sounds good. And a few example blog posts
[00:45:48] . This is interesting. So I just started to do this. Does the build just happen in the background? Because nothing is being served dynamically. Did MTN start actually build
[00:46:01]  the stuff or was it already there? Yeah. So when you start with 11D, it generates all of your output into the underscore site folder. And those are all
[00:46:12]  static files. And then we just start a very lightweight. We have an 11D dev server that we use. Okay. That's new in 2.0. And that
[00:46:21]  just serves the static files. Oh, does the dev server do cool stuff like where like only regenerates the stuff that changes and all that kind of cool, cool thing?
[00:46:30]  Well, the build is separate from the dev server. So the build is in charge of what is generated in the underscore site folder and the dev server. Really just serves
[00:46:40]  static files. But then it also injects the live reloader JavaScript and does a very light touch on some of the reload client stuff. Reload client. I have
[00:46:51]  some CSS coming in. And I have an HTML. So this is a JavaScript list page beyond getting hot or reloading working so that you can do some live changes.
[00:47:01]  Do some live changes. Okay, cool. So I got the kind of feel for the shape of the site we have. We have some tabs. Pretty typical. Do you
[00:47:10]  have a... I'm seeing an extra network request. This is like for a web font. And there's no web font in this project. It must be on one of
[00:47:18]  your... Extensions? Yeah. Yeah. Where is this coming from? I mean, we can... We can... We can do something. I mean, we don
[00:47:28] 't need to debug it now. But... Let's do something. I would just be wary of that if you're running other benchmarks in Chrome. Yeah. Yeah.
[00:47:38]  Yeah. It's fine. Yeah. Yeah. I never use... I can never use the main one. Yeah. It's this... CS2. Yeah. It's
[00:47:48]  from an extension, clearly. Cool. So... Yeah. Okay. Whatever. I'm not going to worry about that too much. Huh. That's my money.
[00:47:57]  You don't want to see that. Okay. Way not to close down windows. Way not to close down windows, Ryan. Okay. So... But I get this basic
[00:48:07]  structure of the project. And we're... There's an archive page for, I guess, old blogs. And this is just a bunch of placeholder stuff. And then
[00:48:15]  when I click to it, I have blog, blog ID, pattern. Some tags. Okay. Cool. So there's tags too. So there's a bit of
[00:48:24]  functionality in this project. See all tags. Nice. Okay. Yeah. Okay. Tags and other tags. So it looks like we're... Structurally, we
[00:48:37]  have a blog with blog name or slug. And then we have tags with tags, tag names or... Yeah. Or tag slug. And then we have a
[00:48:46]  few top level listing type pages and about me. Okay. Yeah. And the other thing that's kind of interesting here is that if you go to the fourth post, there
[00:48:54] 's some internationalization in here as well. So at the bottom, there's a Spanish version of this blog post and it just adds a new slug at the beginning
[00:49:06] . And yeah, this is one of the new features that we're kind of going in deep on the new version 2 of the blog. Nice. Okay. Okay.
[00:49:18]  So let's look at this and see what we're actually dealing with. Okay. Again, solid start go away. All right. So... All right. So what do
[00:49:29]  we got here? So we started with our... First thing is, yeah, this project structure... Yeah, that must have been confusing. The project structure changed now.
[00:49:36]  So I do not have... Yes. All of your content is in the English folder, which is the EN language code. Got you. Makes sense. If you want to
[00:49:46]  supplement with Spanish content, there's an ES folder as well. Interesting. Yeah. Yeah. Because there's only some Spanish content, not all the Spanish content. Correct.
[00:49:58]  Yeah. Okay. We actually look at build time to see what is available for internationalized content and only show that. So, and then you, I guess you do
[00:50:08]  some amount of auto aliasing on the, or the routes and stuff. Because like, I didn't see EN when I was navigating around. Right. Because it knew that
[00:50:18]  EN was the default or based on whatever reason. Yeah. So one of the, one of the unique features about 11D specifically is we have this thing called a data cascade
[00:50:27] . And that means you can set data for an entire folder of templates using a file name convention. So you'll notice that we have this EN folder. Yeah. And
[00:50:39]  then you'll notice inside of that EN folder, we have an EN, the 11Data.js file. And this sets data that can be used in every single one
[00:50:48]  of the templates in this folder and it cascades it for you automatically. So inside of all the templates in our EN folder, we have this LANG property that
[00:50:58]  we set that sets the LANG on the HTML element. And then permalink is, it controls where the, where the file ends up in the output. So
[00:51:05]  this is a little bit complex. I'll probably simplify this before it gets shipped stable. But really what's happening here is it's removing the EN from the beginning of the
[00:51:16] , of the output target before it decides where to put it in the output folder. And I can go to underscore site at any time to actually see the output, right
[00:51:25] ? Correct. This is the right place. Yeah. Okay. Yeah. That's the live. Okay, cool. That's what gets deployed after your Netlify build
[00:51:33]  is done. Right. Okay. Sweet. Yeah. It's generated stuff. Um, and we were looking post feeds and then we have, yeah. So the base
[00:51:42]  one, there is actually no EN folder. It is just the base one. And then ES has, has it right there. Okay. All right. Um, but you
[00:51:52] , you, you have this ability to do this mapping of kind of tying the stuff together. Um, yeah, and you can do that for anything that gets, that
[00:52:00]  you want to be available as, as data throughout your templates. Right. So there's some configuration you can do as well to set options on a per folder level. So
[00:52:09]  you don't necessarily have to do all or nothing when you're building your site. Right. So what I'm looking at here, and I think this will help me with
[00:52:17]  the data flow right straight up. Cause obviously there's some, some stuff I'm gathering that are used for informing, what's this metadata location type stuff for the routing
[00:52:30] ? Well, that key specifically is used for, um, looking up the, uh, string that's going to show up in your navigation for, uh, internationalized content
[00:52:41] . So I think that is actually in your, uh, 11d config file in the route. I think that might be where the, there's like an, I
[00:52:53] , Oh no, it's an I 18 n.js file. Um, and that's, you know, just the internationalized content for stuff that shows up in your
[00:53:04]  layouts. Okay, cool. So like, this is kind of like a map of, of, of, of, okay, cool. Okay, cool. And then
[00:53:12]  getting back around to here collections, this is, is this a, where, where are these coming from just sort of curiosity? Is this something that is. Yeah. So
[00:53:23]  collections is something provided by 11d as a means for you to group content together. So anytime you set a tag in your front matter or in whatever, uh, data template
[00:53:35]  data that you want to set, um, there's a bunch of different methods to set template data, but we'll just, talk about front matter just to keep it
[00:53:42]  simple. So if you set a tag inside of your front matter, that will put that, uh, template into a collection for you. So you can group a bunch of
[00:53:50]  different content together. So if you look in the blog folder, right there, more than blog.json file, uh, and that controls the tags for all of
[00:54:01]  the posts in here. So you don't need to set it individually on all. Right. Otherwise you would have maybe something per, but this gives you a global way of
[00:54:09]  doing it for this whole folder. Yeah. And it will merge those arrays for you. Perfect. Right. Okay. Different ones. So then we've got the blog
[00:54:17]  and this blog looks like it's marked down MD. Nice. Okay. That makes sense. It's feeds into is in our layouts folder, which. Oh, that
[00:54:26]  will be in your underscore includes folder in your route. Okay. The includes folder is just kind of like a catchall for stuff that won't be built as a separate templates
[00:54:38] . So, uh, so like reusable. So, I mean, I, I've used this kind of pattern in pug and stuff before it. I see it's
[00:54:44]  like part of the, it's, is this, is this like, this is a special folder or is this a convention? It is a special folder. You can change
[00:54:53]  the name of the folder, um, in your configuration file, but, um, it is a special folder that just gets ignored when we're looking for, uh, templates
[00:55:02]  to build when we, uh, lob the files. Makes sense. Okay. So then, okay. So then we have some layout partials here where we can see like
[00:55:10] , yes. Okay. Yeah. That makes sense. Yeah. So if you go to base, actually, uh, maybe the surprising thing about the, uh, the
[00:55:19]  data cascade might show up here, um, because you can actually use, um, data variables set in your, uh, content templates inside of layout files. So, uh
[00:55:32] , if you look at this at the very top, we set the lang, the lang attribute on HTML tag using that lang property and that gets set inside of a data
[00:55:42]  cascade folder in our content. So you do have access to those, um, variables that can get set lower, lower down in your data cascade. Okay. That makes
[00:55:53]  sense. Okay. That's cool. And then, so this base template is actually, um, like this is like every page cause the HTML tag and our index uses layouts
[00:56:05]  home. Yeah. And if I'm going to guess home chain together and home uses layout base and the, Oh, interesting. So basically all home does over base
[00:56:18]  is just provides an insertion. Point. Um, let's just know the only thing this layout is doing, and I might delete this in the final version, but the
[00:56:27]  only thing this layout is doing is setting a template cap class data property for all of the templates that use it. So if you go into that base again, you can see
[00:56:36]  template class and that's just a class. You can search for template class in this file. Um, that just outputs a class on your main element that you can use
[00:56:46]  for styling. Right. Okay. So it composes specific styling. It composes that way. And then this is literally putting the base content in, which is okay.
[00:56:57]  Yeah. So yeah, that's the way it composes. Yeah. So you'll see in base none jokes, that base none jokes file, you'll see a content
[00:57:03]  output as well. Okay. Yeah. So if you go scroll down, it's probably near the bottom. It's the last one. Yeah. There it is.
[00:57:14]  Interesting. Okay. Yeah. So you can chain those, those layouts together, however you want. Okay. Makes, makes sense. So, okay. Um, okay.
[00:57:24]  Yeah. Just getting my, my bearings here. So this, this makes sense. It's funny. I, I'm, I feel like I'm like the chat's
[00:57:32]  not saying a ton right now, except. Yeah. It reminds me a lot of mustache, but, but I guess we're just doing the non, non Chuck or
[00:57:40]  Chuck's way of doing things like. Yeah. Yeah. Um, so. I don't feel very similar to liquid. Um, yeah. Yeah. I mean, interestingly
[00:57:52] , the netlify.com site is built using view components, which statically render. So all of the netlify, uh, www site is view single
[00:58:01]  file components that get generated. So, I mean, there are options to use other things as well. Interesting. Okay. It's so you're saying it's like server
[00:58:12]  rendered view, but like it doesn't, doesn't hydrate or. Yeah, correct. Yeah. Interesting. Okay. people just like their templating language and you
[00:58:22]  can just kind of slot it in. That makes a lot of, a lot of sense. Okay. So yeah. Okay. So this is kind of like our baseline.
[00:58:30]  Um, and then, okay. Okay. What I'm seeing here though, is we have some pages so far. So this, this site is sort of very,
[00:58:42]  it's one, it's kind of one for one, right? Like if I read a new blog post, I, I like writing my blog posts and markdown.
[00:58:51]  I do that when I work in dev two, I just pop it in here. And then, um, because of some of the, the non juxt code that
[00:59:01]  I have like an index or whatever, it'll go. Okay. With the tag. Now it's part of this collection. And now the next time that the index page
[00:59:09]  generates, my new blog post will be part of, part of the page. Okay. Um, yeah. If you want to do a one to many output, then you
[00:59:15] 'll use a feature that we have called pagination. And I think you can see that in the tags list file. Perfect. And the, yep. Right there.
[00:59:24]  Nope. Tags file. Sorry. And so this will generate a page for each. Um, it will actually, it will just iterate over the array that we have set
[00:59:34]  up or this collection that we, no, let me backtrack. It will iterate over this object that we have to store the collections. Um, and it will give us
[00:59:45]  a page for every key in our collections. Um, we have some that are filtered out, but, um, yeah. Yeah. So this is basically like a no
[00:59:53]  configuration. Nice. Uh, tag page. It's funny. Cause I've actually played around a little bit building stuff. Not, not, not in, not in,
[01:00:01]  uh, like 11 T or something like built for this purpose, but like I, I built a very simple blog site in Marco for a tutorial. Right. These are
[01:00:11]  the Marco obviously is one of those kind of like view where it's like an HTML or Svelte where it's like an HTML first experience. You drop in that and
[01:00:18]  then you add functionality, but coming up with stuff like pagination and all like, like you had to kind of do this all yourself to be fair. It's a
[01:00:25]  dynamic server versus static gen, but it was just, it was just one of those kind of things. So where, okay. So we can do the tags and we,
[01:00:34]  and these tags are different than the other tags we were talking about here. But essentially they're the same. They're the same. Okay. Yeah. So the,
[01:00:45]  the weird part of this is that our collections object has an entry, excuse me. It's just an object with a key for every tagged collection. So if we have three
[01:00:58]  different tags, we'll have three different entries in our collections object. Okay. And this generates a page for every key in that object. Cool. I understand that's
[01:01:08]  probably not the best place to start with pagination because usually when I teach pagination, it's just like you're iterating over an array and you're generating a page
[01:01:16]  for each entry in that array. But I mean, this is the same thing, but for an object. We can, we can see it. Like there is no tags
[01:01:24]  source folder here, but when I go inside our site, we have generated pages per tag. Um, uh, so, okay. Uh, so, okay. Let
[01:01:40]  me, that makes sense. And that's very powerful to have these kinds of things built in. Um, cause like part of me, when, when, when we first
[01:01:46]  started to like, when I first was like doing this, I'm like, what, what kind of demo or what kind of thing can I do? I'm like
[01:01:51] , I like how this is, this stuff so far is all structural based, right? Like it's based on like, like the, we, we, we, we
[01:02:00]  have rules and we follow those rules. We set the rules and then we're, we're good. We add a new page. It does this. We add a new
[01:02:07]  tag. We generate these pages. We, you know, get so much content. We paginate on it. We, we basically set this up and it just,
[01:02:12]  you, it lets you just very easily add new content. And it just builds from there. Um, I guess when the hacker news demo came in my head, I was
[01:02:20]  like, well, maybe I could just grab the last, I don't know, 30 postings. And to do that, like how do, how do like,
[01:02:29]  uh, external data sources and stuff kind of play into this kind of generation? Like, I guess there's two ways. Obviously there's the dynamic way in the client,
[01:02:39]  but let's pretend that once you get the data, once you won't need to generate it again. Um, is like, or am I just talking in like a completely
[01:02:46]  different space? I don't know. It makes sense. Um, so usually we use JavaScript data files to, uh, do API fetches. Um, and we
[01:02:56]  have some plugins that will cache those locally for us as well. So we can, um, we don't hit our API room rate limits or whatever. Um, so yeah
[01:03:06] , we have an eleventy fetch plugin that is just like a light wrapper around node fetch, but, um, really the, where you want to start is with global
[01:03:14]  data files, I think. So you can make an underscore data folder and files in that folder dictate, um, the global data that's available to all of your templates
[01:03:27] . So because this file specifically have metadata.json up, the file name here, um, is a convention that then controls the variable name that's available inside of your
[01:03:37]  template. So you can use metadata.title in your templates and it will just pull from this file. Um, and you can use a JSON file here, or you
[01:03:45]  can use a JavaScript file and do a dynamic API. Cool. And I can just name it whatever I want. Okay. Yeah. Okay. Yeah. That makes sense
[01:03:55] . I mean, yeah. Okay. The baseline, you have the data and someone like, again, very much on that file kind of thinking way where you're like
[01:04:03] , okay, well, I'm going to add some new data and then this stuff's going to get generated. That's the baseline. The second tier is like, I
[01:04:10] 'm going to fetch that data from an API and write it to file. So then that it generates and, you know, I can just add more data later and just
[01:04:19]  append to it. But it's, it's, it's still like the extension of this, of this kind of, as you said, right at the beginning, input
[01:04:26]  files in website out. Okay. Yeah. Okay. I'm, I'm getting, I'm getting the flow, the flow of this. Uh, yeah. So it
[01:04:34] 's, it's all part of the data cascade. So, um, global data is, exists at a different layer than our template data files or our directory data files
[01:04:44] . And all of the data gets merged together when we render these templates. So, um, is, is there like a structured nesting going on? Like you mentioned this
[01:04:54]  global data and I'm looking at global data right now. Um, everything we've done is like top of, like, it's a little different. Like, I
[01:05:03] , you know, I'm like, like if you're in the blogs section, is there data only available to blogs? You know, like, like does the folder structure
[01:05:15]  kind of lend into this kind of sub nesting? Yeah. That's exactly what the, what the data cascade does. So those are directory data files. So any,
[01:05:23]  uh, yeah, this blog.json is a good example of that. Um, when the file name, not json matches the name of the folder that you're
[01:05:31]  in. Um, we use that as a directory data file. So any data that you send inside of blog.json there will apply to all of our blog posts
[01:05:39] . And you can use that directly inside of our blog posts. Okay. Okay. Yeah. I mean, I, I'm, I'm approaching this at a very like
[01:05:48]  detached high level, but this is, this is helping me at least see it. Um, some, there's some questions coming in from chat. How is global.
[01:05:54]  Is it pass through props or important? I, it, it. Yeah. How, how is this? It's, it's just global available in the template. And
[01:06:00]  it's the, if I got it right. Is it the hierarchy of this merging? That'll determine almost like context. Like what you end up with in the end.
[01:06:04]  Like, like it's. I mean, I feel like that question is a little bit hard to answer because we haven't gotten into anything at the component level yet.
[01:06:20]  Are, are we conflating components and templates or, uh, maybe if we could get some clarification around the question. Yeah. Yeah. Yeah. No, just
[01:06:34]  not sure. Like our, I, I guess the question we've been looking at pages and how we can generate them from Markdown and non-jucks templates. Is
[01:06:39]  there a concept of components or is that just like, is that like a, like a detail? Yeah. Yeah. So those are handled at the plugin level. Um
[01:06:49] , and that kind of gets into the, the islands, um, component that, uh, that we kind of showed earlier in the documentation. And, um, if we
[01:06:58]  want to talk about components, we can, we can do that and we can switch, but, um, yeah, I, I think, I mean, just to try
[01:07:06]  and answer the original question, just from the context that I think we're at, I think that when you set something in global data, it's available throughout all of your
[01:07:14] , um, templates. It's globally available to your templates. So you can use it anywhere inside of your template. So if, if you have a, a component
[01:07:22] , uh, that renders on the client or on the server, you can use that global data the same as you, as you would in any other template language. Um
[01:07:30] , but yeah, the, the template just needs to, uh, know how to, how to inject data. Um, in 11 D you just said on the client
[01:07:40]  or on the server. Everything we've seen so far is completely server. Uh, what, what did you mean by that? Is there a, like, is this all
[01:07:48]  plugin type stuff? All the, yeah. So maybe the, maybe the next best thing is to, I mean, to answer that question, the best is probably just good
[01:07:55]  to go to the 11 D, um, island documentation. This is, this is a relatively new feature too. Right. Um, that we're, we're talking
[01:08:05]  about here. The, I saw you post something. Um, and it was, I think it was like April or may, it was only a few months ago, uh
[01:08:14] , that you were kind of playing around this. Although I've, I've heard of libraries or plugins built on top of 11 D like, uh, familiar with Ben
[01:08:20]  and slinkity, um, and whatnot. Um, but you kind of made an example where, okay. We talked about data. Was it just an example or it
[01:08:31] 's in the plugins, you know, down at the bottom. Yeah. Okay. Once the second one I'm going to do is give me two seconds, Zach, just
[01:08:42]  cause I like doing this for cutting points, partial hydration. I'm going to put this better. I like the question mark. Well, I mean, it's,
[01:08:52]  it's, it's interesting, right? Um, because this is a conversation that we've been having a lot more, uh, recently. Right. Um, like you
[01:09:01] 've been building sites, you've been adding JavaScript as you see needed. Um, you know, so like you build your Eleventy site, you write some JavaScript,
[01:09:11]  maybe import it into a file, put in some script tags, whatever you need. And like hydration isn't even a question because like, you just include the JavaScript you
[01:09:20]  need and then it does what it needs. So why like, there's nothing to hydrate it. Just like, there's no need for hydration. If you just have
[01:09:29]  JavaScript on a page. But yeah, I mean, oh, go ahead. Yeah. But I mean, I guess the, the question comes in and why people are
[01:09:37]  curious about this is this is, this is the push to being like, can I use my JavaScript framework in a, in Eleventy? Right. Yeah. Yeah
[01:09:46] . I mean, that's kind of the next step beyond the island web component that we have delivered. Now we will, we will likely deliver a, um, server side
[01:09:56]  framework, uh, plugin for rendering different, um, server side frameworks for, to, to use with this, with this plugin. Right. I mean, right now
[01:10:07]  it's basically your, your, your, um, hydrating if you will, like server rendered markup. Um, and you're doing that either using, um,
[01:10:19]  client side rendering of, of server templates, or you can generate. So, I mean, it's, it's hard to even talk about this because all of the different
[01:10:28]  frameworks do it a little bit differently. Right. There's a bunch of different, um, frameworks that we support in this, in this demo even. So it's
[01:10:37] , it's hard to make like, to use these terms when you're speaking more generally about like five or six frameworks at the same time. Yeah, no, that's
[01:10:45] , that's, that's fine. Okay. So what, what you're, what I'm following here is this is a very generic mechanism though. Like essentially at its
[01:10:54]  core, this island thing that we're looking at here is literally just, um, how should I put it? It's just like a way of isolating a certain portion
[01:11:06]  of the DOM and a script tag with it essentially, so that it can have the behavior of progressive loading. And you don't really care what the JavaScript does. Right.
[01:11:19]  like, like the, the, the baseline example of this could be vanilla JS or jQuery type thing. And it, it, it doesn't actually hydrate,
[01:11:29]  but what you did accomplish was lazy load it on visible. Yeah. Okay. Yeah, exactly. I mean, the, the kind of the interesting piece of this is how
[01:11:40]  it fits in with web components. So island is a web component. Um, and you're, it's, uh, it, the web component controls how the child
[01:11:48]  content gets initialized, uh, inside of here. So, um, maybe the most interesting technical piece of this, the islands, uh, web component itself is that
[01:12:00]  it automatically will, uh, behind the scenes, hide any child web components inside of here for you. Um, and so that it can initialize them later. So,
[01:12:12]  I mean, there is some, some fancier, like, I don't know what hydration things happening here. Um, because if you put any web component inside of an
[01:12:22]  island, it won't initialize until these loading conditions are met. Um, okay. So I, I guess, yeah, I mean, just cause I'm,
[01:12:29]  I'm familiar with islands and this kind of stuff. The, the interesting part here is like when I'm, when I'm doing this with quick or astro or whatever
[01:12:38] , like Mark, like when, when we have those boundaries, um, they are actually follow the rules very similar to web components. Even react server components actually follow this kind
[01:12:50]  of, uh, this shadow dom type enclosure where the, the parent is essentially responsible for the children because of like the, the way that it wraps. But that's
[01:13:02]  because those components have internalized state. Like you, it's not, it's, it's like how should I put it? It's like the, if I put
[01:13:11]  this in a web components perspective, um, this is about authoring, not what we actually output. Cause we, we probably output something very similar to this, but
[01:13:18]  from an authoring standpoint, you make your component like whatever it is. Like, and this is a nested example, which takes me back to like my hacker news comments
[01:13:26]  thing in the toggle switch is you, you make a island. Let's say that adds the ability to collapse some comments. Let's say it adds JavaScript to collapse comments
[01:13:36] . But the thing is in those things, the component has the logic to do the collapsing and the statefulness to do the collapsing. And the children you pass to it are
[01:13:47]  actually static rendered by the parent. And in, so we have this separation of zones because you know that anything passes a child is static because it's coming from the server
[01:13:56]  and you can actually put other islands inside that. And they get treated independently because they're not part of the same tree. Like basically the internals of the, of
[01:14:08]  like the component are in a separate, like shadow tree compared to the parents, like light on coming through. Whereas. I, I hope that makes sense to people losing viewers
[01:14:22] . Yeah. No, uh, what I'm getting at is the difference on this is that it's the web component. That is the, the mechanism here. So
[01:14:32]  is island has nothing internal to it. So you have to be aware of all children, which means that like, there isn't like the classic, like slotting. Like
[01:14:44] , is that, is that like the different, like, because like this island isn't like it, if this island had children, they would be here. Right.
[01:14:57]  Not inside, like not, like not inside the component where I can't see it. Oh, you're talking about shadow DOM. Yeah, exactly. Like this is not
[01:15:07]  a shadow DOM. Is this a shadow DOM mechanism? Like, I guess is, is my question like, or. No, no, no. This has nothing to do
[01:15:15]  with shadow DOM. Right. Um, this was all about light DOM and controlling the, the initialization of light DOM content. I mean, you can have web components
[01:15:23]  that use shadow DOM internally, but, um, you need some like top level, like tag name for those to, for those to contain the shadow DOM. Um,
[01:15:35]  and eleventy will, uh, lazy initialize those, um, using the same mechanism because it really all, it all comes down to this like colon defined, uh
[01:15:45] , mechanism in web components. Like whether or not a component has been registered and the component registry, um, as a valid web component, um, controls when it, whether
[01:15:57]  it gets, um, initialized. Right. Yeah. Yeah. Yeah. And it doesn't need to know like what child components are available and it doesn't even
[01:16:06]  need to know like, um, well, maybe I should backtrack a little bit, but yeah. So this is, this is the, uh, this was just the
[01:16:16]  thing that like struck me immediately in terms of the difference here is because in the, even though they don't use the actual shadow DOM in like. Like the framework's
[01:16:23]  perspective of like their zones, it's almost like the framework's equivalent to the, the shadows on like you, you have like a react component. Um, like I,
[01:16:33]  this is not like I, the output, for example, from Astro is probably more similar to this, you know, not using the shadow DOM, but like the way
[01:16:43]  you author it is like the react component has its internals. Like as if it's in the shadow DOM and then the, the, the slotted children are,
[01:16:52]  are kind of owned by the parent. And that's how, that's how it knows where the separation is between where the island starts and ends, so to speak. Whereas
[01:17:01]  if I'm understanding, this is you're looking for the, the, the, I go, I guess the island tag and the specific, um, the specific mark marker
[01:17:11]  here or whatever to know what, where the child islands are. If, if, if, if that makes sense. Yeah, exactly. Yep. This is just,
[01:17:20]  this code right here is just a first party web component. Right. Okay. Um, all right. Okay. Interesting. Yeah. Yeah. Cause as I said, mechan
[01:17:30] ically, this is how it works. It's, it's, it's, it's like a subtle difference on, on authority. And then you're saying,
[01:17:35]  you're saying that this web component has to be like, the idea is you use this with web components as well. So this will be smart enough not to initialize because
[01:17:45]  this kind of makes sure that doesn't happen. Yep. Gotcha. And like, is it similar like script tags inside here or is it, or is this mainly a
[01:17:55]  web component mechanism? Yeah. So we have a, a, an additional feature if you scroll down a little bit. Yeah. Um, that will let you do run your
[01:18:06]  own custom JavaScript. So we just changed the type and then swap it. We got Astro in the chat. Hey, what up? Y'all want to do
[01:18:16]  a coach week? That was awesome. By the way. Um, um, I might mention that later, but that, that was absolutely awesome. Yeah. Fred and I
[01:18:26]  had been DM, DMing about that for a while. Yeah, no, I actually loved all the love. I actually almost want to just see if I can find it
[01:18:32]  right now again, although I might have to do a quick search. Cause it's not on my quick links that I have right now. Astro. Let's look
[01:18:40]  here. Okay. I guess I go to 11. Do you guys both have it? I just, I, I learned a couple of things about co-tweets
[01:18:47]  that I did not know before that. Uh, it turns out like when you have, when you post a co-tweet, um, the original poster gets all of
[01:18:56]  the replies. I didn't see any of the replies. All the replies are just to one account, which doesn't seem like it's in the. In the design
[01:19:07]  goals of co-tweets. I mean. I would have expected both authors to see. I mean, this is, this is awesome. But if you actually look
[01:19:15]  down, this is one of the most heartwarming things I've seen. Like it's such a contrast to the, the, the feeling of the previous week on Twitter
[01:19:23] . You guys. Yeah. This is awesome to see, but just, just watch this. Oh yeah. like quick and Marco in here doing fist bumps too. Like
[01:19:33] , this is like the whole, the, the whole like zero JS by default crowd. The, uh, you know, MPA Alliance, if you'd call it.
[01:19:41]  And, and I, I thought this was just like such a, like a, like share the love kind of thing. Uh, we need co-tweets
[01:19:48]  to support four or five different accounts. Yeah. Well, exactly. That's, that's, that's, that's what happened. Uh, Fred was like, I
[01:19:56]  checked guys. I'm sorry. I could only do, we could only do two on it, but I mean, every, everybody was here. I, I just
[01:20:05]  thought this was, this was just so maybe the real static site builder was the friends we made along the way. Yeah. That's great. I mean, to me,
[01:20:17]  that comment's very interesting too, because you can have zero JavaScript without a static site. Yeah. Yeah, exactly. And it doesn't need to be. And in fact
[01:20:25] , these guys aren't really static site generators. Um, but they're also on the zero KB. Yeah. I love that. Yeah. Yeah. No,
[01:20:34]  this was, this was, this was just such a like, like, like love fest. I don't know. I, I, I, I was, I was
[01:20:40]  super stoked about this anyways. Um, made me very happy to see. Um, but okay. Yeah. Like this is cool. I, I'm, I'm getting
[01:20:50] , yeah. So auto init. So you have way. I mean, I feel like, I feel like another interesting point here is that, uh, again, I worked
[01:20:59]  on Netlify.com for like a year and a half, almost two years. Um, that was using server rendered view components or server rendered views, single file
[01:21:08]  components. Um, but really for the client stuff, we were generating just, um, web components. It was all web components for any client side interactive stuff that we
[01:21:18]  wanted to build. So even though we were using web or our view components on the server side, the only thing that we're using on the client is web components.
[01:21:26]  So, uh, yeah, I re I really feel like web components is kind of the, the, the next step. Once we get declarative shadow Tom, um,
[01:21:36]  that will be, it will be the next step that we can take in terms of the zero JavaScript baseline experience. Yeah. In terms of getting interoperability, this is
[01:21:44]  a place where web components actually really, really flourish. cause they, they set the clear boundaries. Like, and what, when I was talking about the shadow DOM and
[01:21:52]  that in terms of authoring, because like this is a DOM level contract on where that split is, you know, like you can, like you don't have to do
[01:21:58]  anything. You should see some of the fun stuff that we do to, to do this kind of insertion stuff in JavaScript frameworks, uh, that take care of it
[01:22:07]  stuff like quick or, or, or, um, maybe even after, but I know Marco definitely, where we kind of like, uh, streaming is a big part of
[01:22:15]  what we do in Marco. And we, we can't do certain things with web components. Otherwise we'd be like all over them. Like the declarative shadow root doesn
[01:22:22] 't support streaming. Um, and won't when it comes out. So it's like, ah, so you end up doing like funny things where you're almost f
[01:22:30] aking the templating mechanism of the shadow, like DOM insertions and stuff. And the, the web component APIs, like this is the, this is one place where,
[01:22:40]  um, they could just take care of that for us, you know, um, the completely. Yeah. I mean, I'm with you. I've, I've
[01:22:48]  kind of avoided shadow DOM, uh, for a long time, um, because I didn't feel like I had the correct, uh, baseline JavaScript experience that I wanted
[01:22:57]  and the correct progressive enhancement experience that I wanted. Um, so really I just put everything in light now. Um, and I still get a ton of benefit out of doing
[01:23:05]  that. So yeah, I mean, and I think, I think anyone who's on like coming on from the more static, uh, side of things. Uh,
[01:23:13]  if you, I mean, this is a little bit off topic and we're talking a little bit, got astro in here in the crowd, but they, they're
[01:23:20] , they're new, they, they just had their 1.0 release. Um, and like, this is basically a static site and it, this is like the
[01:23:28]  interactivity here, this little card thing. And I forget if I can see it here, but literally I think there's like one hero card. Yeah. It's just
[01:23:37]  a light DOM web component that, that they didn't bother put a framework on this page. They just, you know, they just did like a light DOM web component.
[01:23:45]  And I mean, uh, Cynic might point out that like, it's, it's like a easy way of packaging up mutation observer, but like, that
[01:23:54] 's all we ever asked for. Right. We're just like, tell me when this DOM element mounts. Mm. Like, I mean, I don't want to get
[01:24:00]  into that debate. That's that there's like a whole debate that if, if we literally gave an API to tell people when elements mount and gave people a way to do
[01:24:08]  scope styling, like that would have taken care of like 90% of the, of the stuff. But I mean, that, that's, that's a, that
[01:24:15] 's a conversation for another day. I was actually on a panel, um, on web components about a week ago and it was, it was supposed to be the state of
[01:24:24]  web components, but it was like, put Justin from lit and I guess one of the guys from stencils in a room with a bunch of framework authors and see. Oh
[01:24:32]  no. See how that goes. How was it? I mean, if you want to watch, um, everyone was civil. I got to give them credit there.
[01:24:43]  But if, and, and Justin handled himself perfectly, like to make sure like, it's like, you know, there's a little bit of heat coming in there.
[01:24:49]  Um, but if you, if you want to see like a modern version of that debate, um, check out that dot media stream from last week. Um, because there
[01:24:59] 's a, there's a lot of perspectives of where the future of the web will go. But the truth of the matter is there are definitely places where the mechanics of
[01:25:07]  web components are very, very valuable. Hmm. Yeah. Yeah. So yeah. Uh, anyway. Uh, yeah. So this, yeah, I'm just seeing
[01:25:16]  here. Like, so this is funny. Cause like, I'm literally seeing a V scope on here. Like kind of. Yeah. That's petite view syntax there.
[01:25:23]  Yeah, exactly. Kind of fitting, fitting into it as the wake up point. Exactly. I was gonna say this is view right here and this all kind of just slides
[01:25:32]  in and then you got like a couple of examples. Yeah. Oh, doing Svelte must've been fun because of the compiler bit, but I guess as long
[01:25:39]  as you can hook it into a build step plugin, then you can do it. And then, yeah, I really like Svelte compiler. It's really nice.
[01:25:46]  Yeah. And yeah. Most of the little petite type libraries in here. That's, that's cool. And you actually, if I remember, uh, people should check
[01:25:54]  out this video, maybe the demos here, you literally just put it, you did the thing where, where you put all the frameworks on the same page. Yeah. Yeah
[01:26:02] . Actually, I don't think all of the frameworks are on the same page, but yeah, there's demo pages. I mean, one of the cool things about
[01:26:10]  MPAs is that like, like, let's face it. You don't want to put every framework on every page. Like you just, just like, just cause
[01:26:17]  you can do something doesn't mean you should do something. You know what I mean? There's, there's, there's, I, I, I, I,
[01:26:23]  I, there's a great, someone paraphrased some quote, but it's like, just because you can put every framework on the page doesn't mean you should put
[01:26:29]  every framework on the page. But yeah. But that, yeah, I mean, I, I came from like, uh, even before I was working in an agency
[01:26:37] , I worked at a giant, like fortune 200 company that was enterprise software. They were all about portals and getting everything on the same page at the same time.
[01:26:48]  And was he wick dashboards and all that stuff. So I, I understand the performance history of that. I remember working on a jQuery application that had like four
[01:26:58]  or five different versions of jQuery loaded on the same. Very real, very real thing. Right. Microfrontends and all that. But on the interesting side,
[01:27:07]  um, MPAs in a sense deferred off that decision a lot longer. It's as things got more single page app, we hit these things. Cause the
[01:27:17]  cool thing about an MPA is you could be like, I'm going to do this all static. And then I'm going to go to the next page. And we
[01:27:22]  built our stuff all doing view. Cause we like view template historically. And then, you know, it's like two, three years later and you're working on a new
[01:27:31]  section. And you're like, you know what, I'm going to try this new thing with a lit web components. And you just do it on a separate page
[01:27:42] . And in that sense, you didn't put all the frameworks on the page. They might have a bunch of frameworks in the project, but, uh, like essentially you
[01:27:51]  already have a bit of that isolation, obviously at scale. And I know this from working at eBay, like there's no avoiding the call for even with an optimized M
[01:28:01] PA setup. The, the, the micro front ends will catch up with you eventually at scale. It just, it's from maintenance thing, but it is very, very
[01:28:11]  cool. Um, to just, you know, as a starting point, like this is one place where you can use all the different, uh, frameworks. Right. Um
[01:28:21] , you know, and hopefully the demo works. Scroll down. Did I break the demo? What happened? Um, that one's fine. Okay. Weird. It
[01:28:33]  was like, it was like a delay. Okay. Maybe I like messed with it. Okay. Yeah. We're, we're good. Okay. That was just like
[01:28:44]  a weird glitch. Okay. Yeah. Um, we're all good. I mean, to your, to your point. I'm, I want just going back to
[01:28:51]  the dub dub dub Netlify site. We, uh, migrated from Hugo and that migration was not like it wasn't instant. It was over months and months and months
[01:29:00] . So we actually had the Hugo tech stack and the Eleventy tech stack running side by side as separate projects. Um, but just controlling, which got, got
[01:29:09]  loaded via Netlify redirects. And yeah, on a per route level, which, which project we wanted to load. Yeah. And mix and match things like
[01:29:18]  that. And when you're dealing with static and you're dealing with MPAs, you can like, you could just, you just, as long as it makes its
[01:29:25]  way to the same folder or redirect through the same routing thing, you're set, which is really interesting because if you want to start getting into like crazy stuff, you on
[01:29:34] , I think we're going to see more of that coming in kind of sort of on the, uh, with edge on the dynamic side. Um, so like,
[01:29:43]  like, but I mean, that's, that's also another topic, but yeah, I, I, I think, I think that's, I think that's cool
[01:29:50] . And it, it's cool to see this kind of consideration going in. As you said, you build a simple primitive and now, um, you can enable these kind
[01:29:58]  of little hook-ins. Um, yeah, I'm, yeah, there's definitely more to come in terms of like the component compilation piece of this. Um, yeah
[01:30:09] , I'd like to put the, like the Svelte compiler stuff. Svelte compiler stuff as like a first party, uh, plugin to 11D as
[01:30:16]  well. Yeah. I mean. One off. Yeah. Part of me is like, just completely curious what like it takes to write one of these little adapters, but
[01:30:25]  you know, uses it. Yeah. Is it. Is this it? Is this the Svelte? Yeah. That's the entirety of this Svelte component
[01:30:34] . And it's mostly just around, um, orchestrating the CSS. Yeah. So getting. Usually do you have an example for the same kind of example for Preact
[01:30:44] ? Cause I feel like Preact is always the simplest one to, or. Oh. Mm. I mean, let's see. Yeah. Rendering mode. Server
[01:30:52]  only server. Yeah, I do. Yeah. Is this. Cause I get help link go to just the HTM. Talks. Oh, maybe. HTM
[01:31:04]  docs. Yeah. If you go up and there's the, all the source code is in the GitHub Island repo. Is this. Is this. All the way to the
[01:31:12]  top. Yeah. Well, yeah. It's the same. Yeah. I was just getting in there. Uh, demo Preact HTML. Which, where was this?
[01:31:19]  This was in. Uh, 11D Svelte plugin CJS. So if I could go here. Yes. Should I have the same thing? Beautiful. Go
[01:31:29]  up one more. Okay. Oh, okay. No, you found it. Yeah. You're right. Add filter Preact. Refile blank. And this is for
[01:31:38]  HTM. So this is, this is super. Yeah. This is super simple. Okay. Yeah. But I mean, this is, this is, this is what
[01:31:45]  I wanted to see. I want to see the most minimal thing. And it's literally get the Preact render to string call, which is how they do the server rendering
[01:31:51] . So there you go. Server render the output and then client JSS URL is target. And that's the, uh, the file that gets loaded when, uh
[01:32:03] , as part of your Island initialization. So that's like the compiled component JavaScript. Yeah. Yeah. I guess what I'm missing is there's a hydrate call
[01:32:14]  somewhere for the Preact demo. Oh, uh, that's probably the auto in that stuff that's built into islands. So if you go back to the Island source
[01:32:23]  code, there's a couple of, yeah, there. And then maybe dot 11 D not JS. No, I'm going to go down. Sorry. No, not
[01:32:32]  at the one. Uh, yeah, no, that's probably Island.js. Yep. Okay. And then if you look for Preact in here, you'll
[01:32:36]  probably see the auto in it. Oh, there it is right there. Okay. Okay. Okay. Okay. And so that's the, that's just the generic
[01:32:48]  JavaScript that comes back for initializing. Gotcha. Okay. Yeah. Okay. And yeah, I see all the, like the basic hydrate calls like view mount and
[01:33:02]  yeah, exactly. Okay. Yeah. Okay. So that makes, that makes sense. So there's, yeah, there's the, that's the, those are the
[01:33:09]  two pieces. Okay. Put them together. Yeah. Probably more interesting to me than other people. Cause I'm like calculating in my head what it'll take to get the
[01:33:18]  solid integration. Right. Yes. I would have liked to get that in before I finished the demo, but yeah, I ran out of time. It's fine.
[01:33:26]  We're, we're, we're still like to see it in there. If we're going down this list, we're about, we are about next actually. So
[01:33:33]  I'm, yeah, I think, I think we're, I think we're prime for that. Although, I mean, to be fair, the react isn't here
[01:33:42] , but, um, fair enough. Sure isn't. Okay. So, um, let's, uh, let's keep on, keep on. Let's keep
[01:33:54]  responding. Uh, so yeah, no, this, this, this is cool. This is really cool. And I like to see this kind of growth, right? Cause
[01:33:59]  this is, this opens up another whole avenue. Uh, and it just fits into what you're, you're doing, right? Like it just fits in, you know
[01:34:07] , you start with HTML, you add dynamic stuff. Now you have a story to add some, you know, more interactive widgets and it costs you nothing. Like,
[01:34:19]  yeah, it's pretty small. Yeah. So that's, that's, that's cool to see. Um, yeah. So like, I guess that's, that
[01:34:26] 's the challenge with like looking at something like Eleventy, right? I was talking about being a platform. I'm, I could sit here with you for hours and
[01:34:33]  we could just talk about all the different features that the platform can enable. Right. Like, because like plugins are probably a huge thing about this. Right. Cause we
[01:34:45]  talked about templating. We talked about data. That don't make sense to me. Could come up with examples, but I'm okay with that. But like, this
[01:34:52]  is the, we talked about internationalization. I'm glad we did. Cause that's a big deal. But, um, this is probably the area where, you know
[01:35:00] , people are just like, oh, I didn't know that static could do that. Yeah. Yeah. I mean, we got edge plugin. We have a very
[01:35:08]  mature, um, image plugin as well. That's, that doesn't require any dependencies on Eleventy too. So, I mean, even if you wanted to use
[01:35:16]  this in a, in your like node script or whatever, you can use that independent of 11. So is this one of those ones that generates the format? So like runs
[01:35:24]  like sharp on this? Well, actually there's no server. How to, or like, how, how does, yeah, actually talk to me a bit about this.
[01:35:31]  Cause we've been talking static so far, but you know, like an image plugin requires a server, doesn't it? Like it needs something to do the format generation
[01:35:39]  or do you do all pre-do? Not necessarily. We can do it in a couple of different ways. So I, I use it in production in both ways.
[01:35:46]  So you can do it at build time, which is the kind of the baseline usage. And there's a bunch of different performance optimizations that we have in this plugin
[01:35:54]  specifically to like deduplicate, uh, calls to the same source URL and with the same options and all that stuff. So it's, it's very fast and
[01:36:04]  it works great, but you can also run it in a serverless, uh, mode as well. And we do actually have like a services API section on the left
[01:36:12]  hand of the documentation. If you go to the bottom API services, and we have a bunch of different. Open graph. Runtime services that we host, but also
[01:36:22]  just really, we provide the source code if you want to host it yourself. Gotcha. Gotcha. Okay. So yeah. So is there like a, yeah, I
[01:36:32]  guess it's interesting because you have deployment targets, obviously, but is there like also like a server, like, is there like serverless, like a plugin or like an
[01:36:43]  adapter where you can be like, okay, generate your static site, but like be able to, yeah, like, I guess a better question is let's pretend, let
[01:36:50] 's do a specific example. I, in, instead of having the static image or whatever, which you do at build time, let's pretend for some reason that I
[01:37:00]  wanted to only generate the images at runtime on the cross time. Yeah, yeah, exactly. Yeah. So my site's static, but this is a one place where I
[01:37:08] 'm going to make an exception. Um, how would I approach that? Yeah. So, I mean, it's really about using these API services. So maybe the
[01:37:17]  best example I can give you is if you go to our leaderboards, which is just like, uh, up to the top of the navigation, maybe like in the community
[01:37:27]  section, sorry, still on the left-hand side. There's like a leaderboards link on the left-hand nav. Sorry. No, you clicked away to
[01:37:35]  a different page, but it's yeah, there's a community section right there. Yep. We have this leaderboards, um, uh, which is it basically, I
[01:37:44]  have this, um, script that iterates over all of the sites in our showcase and performance test them. Um, and I need to performance or work on the performance of
[01:37:54]  this page too, because it's huge. Now the number of sites in our showcase has kind of outgrown this page, um, because there's like 600 sites on
[01:38:04]  this and you can already see it lagging terribly. But if you go back to the top, all of these, um, avatars next to the URLs are server
[01:38:14]  generated, um, serverless requests. So that's just an API service that uses that, um, that, uh, uh, uh, like avatar favicon,
[01:38:24]  uh, dynamically fetches the favicon from the site and then returns it in a, in a serverless context. And same with that built with, um, column as
[01:38:36]  well. That's, that gets the meta name generator tag from the site, um, and sees or checks what the, what the site is built with. Um,
[01:38:45]  and then shows the fabicon of that. Um, and yeah, that's kind of. Uh, that's kind of the crux of it. It's just using
[01:38:54]  those, those, um, API services that we have to, to run the same code, but in a serverless mode. Right. So like, and like in
[01:39:03]  the case of something like Netlify, can you like, can you basically configure your site to deploy them together? Right. You could just like add, I guess,
[01:39:11]  Netlify functions or like, how do you. Yeah. Yeah, exactly. So you just put, um, this, you can check out the, the source code
[01:39:20]  of one of those API services and it's linked up from the docs. Right. Um, but really it's, it's just a single file that you, that
[01:39:27]  is a serverless function that you can use. Okay. Um, so yeah, if you click open source. Why not? And then. Functions avatar. Yeah,
[01:39:35]  yeah, yeah, yeah. Yep. There's just a single serverless. This should be familiar to anyone who's seen any of my stuff talking about how to deploy to
[01:39:41]  Netlify. Yeah. Yeah. Yeah. Um, yeah, exactly. And then we've got our next HTML, which has our handler and yeah. And this
[01:39:50]  actually uses the, I believe it uses the 11d image plugin. Nice. Just in a serverless mode. So cool. Cool. Cool. Cool. Yeah. I
[01:40:00]  think it's in the other file. Probably. Yeah. Which does the actual work. Yeah. That makes sense. 11d image right there. Yeah. And 11d
[01:40:09]  fetch. Yeah. 11d story. No, that's, that's awesome. And that's the thing. Cause I, I mean, maybe, maybe it's
[01:40:17]  time to switch to next thing, but what I was probably, what I was going to ask you is it's kind of like looking forward, right? Cause it's clear
[01:40:27]  that static is more than static today, right? With, with examples like this and there's, and things are kind of progressing and you're working towards this 11d 2
[01:40:36] .0. I don't know if we highlighted many of the features of that, but I just kind of want to know like what's, what's next for 11
[01:40:41] d and like how, how that kind of, you know, where, where do you see things going? Yeah. I mean, we have just a lot of, a
[01:40:49]  lot of things planned. I think the 2.0 release is probably our next big thing on the radar. And that will, as I mentioned, we'll probably have a
[01:40:57]  horizon of the next month or two. But really the big thing that comes into 11d's 2.0 release, and there's a lot of big things, but
[01:41:06]  the big thing is we have a new dev server and we're sort of moving away from browser sync that we've used for many years. And going with a little bit
[01:41:16]  more streamlined dev server that allows us to install a lot quicker and allows us to manage our dependencies a little bit nice, more nicely. And to deal with security audits from
[01:41:28]  NPM on a little bit better way. So yeah, lightning up the, the code base is a big one. Yeah. That's probably the biggest one for 2
[01:41:38] .0. That's cool. But okay. Let's, let's talk even further out. Cause that's what I love. I love the speculating talk about.
[01:41:43]  Like, is there any exciting things, you know, towards 11d and like, I don't know, leveraging some of the more of this dynamic stuff on top of the
[01:41:50]  edge, you know, all the, the hype stuff going on right now, even, I mean, we've, you've already showed islands. So you, you
[01:41:56]  clearly have a path there, but just any other cool ideas or things you want to play with or, you know? Yeah. I mean, I'm hesitant to give away
[01:42:03]  all my secret sauce since the Astro's on the stream here. Um, but yeah, I mean, we, we do have an edge plugin and I think the really
[01:42:10]  interesting thing about our edge plugin is that, um, you can use it today on Netlify specifically, but the interesting thing is that you don't need to go all
[01:42:18]  in on an edge. You can have a, a single project that deploys partially to the edge and you can control that on like a per route basis. Nice.
[01:42:27]  So I think a lot of frameworks require you to either go all or nothing on edge. And 11d says, Hey, let's just use edge for this group of routes
[01:42:36]  or one route or no routes. So we're really starting from, um, build first, but we're like layering these new features as they come in on top, uh
[01:42:47] , as enhancements. And it's, it's really the, the architectural like strategy behind 11d has always been layering. Right. It's all about starting from
[01:42:57]  a good baseline. And you can see that with the HTML first thing that we've talked about for years. Um, and layering enhancements on top of it. Um,
[01:43:06]  and sort of not getting rid of the best practices that we've used before. Makes a lot of sense. Yeah, no, it's, it's, it is
[01:43:14]  definitely an interesting space just to see this kind of stuff coming in. And yeah, there's, there's people talking about different stuff in, in the chat. Um
[01:43:22] , to see if people got any specific questions for you. Now we're getting to a point where it's probably a good time to start asking Zach some of these questions.
[01:43:30]  Um, obviously there's some, some, some, some, some, you know, little joking, pushing things. Not a fan of JSX. Uh, no,
[01:43:40]  no comment. I mean, I'm fine with that. I don't know. I'm fine with JSX. I'm not a fan of react more generally.
[01:43:47]  Hmm. Oh, no, that's good. Yeah. So if you've got some questions for Zach, please ask them in the stream. I'm yeah, no,
[01:43:54]  it's, it's, it's fun. I mean, uh, it also from your perspective, not having to deal with the builds, like I, it's interesting
[01:44:02] , like not having to take that extra layer in is, you know, like, like being able to use preact with HTM, uh, HTM in probably cases
[01:44:07]  like this or stuff like petite view is probably like a, a gift. Like it just, it just, you don't need anything extra. You just kind of slide it
[01:44:14]  in and it just works with everything that's already there. Um, going to that next step of JSX or even spelled, you, you now have a, like
[01:44:20] , you got a little bit more work to do. I mean, it's completely doable, but it's, it's just a little, it's a little bit,
[01:44:24]  you know? Um, yeah. And I, I really think the interesting space that Eleventy is going to occupy moving forward is that, uh, we're going to
[01:44:31]  be bundler independent. We're not going to take on a first party bundler inside of our package. Um, and that means we're not going to do V as
[01:44:39]  a first party thing. Um, and I know a lot of frameworks are moving in that direction, but, um, I think that's that, um, yeah,
[01:44:46]  I really feel like to maintain the most control over the long-term of the project. Uh, we need to be bundler independent because bundlers come and go, man
[01:44:56] , I've been working on Eleventy for, uh, what, four or five years now. And there's already been three or four very high profile bundlers coming
[01:45:04]  and going in that time. So, um, yeah, I don't want to hitch my wagon to a bundler in any way. Yeah. It's, it
[01:45:11] 's interesting. Right. Cause like, yeah, I've seen so many bundlers and it's funny, like the bundler technology changes and just like completely everyone's like
[01:45:20] , Oh, move to the next thing. Yeah. Yeah. Yeah. What we're seeing right now is a huge consolidation around V because they like, like, they
[01:45:27]  clearly address something that was very missing. Uh, uh, but V is great, but I think, but I think the interesting part is we've outlined this along the whole
[01:45:38]  thing. this platform element of Eleventy, like, like you're already so close to that space because you, like, you need to have to be able to
[01:45:48]  go that wide. If I'm building meta framework for Svelte or solid, like that's the part that we're, that's the secondary part. Like we're
[01:45:58]  focused on like that authoring experience maybe, or those other elements, like getting too far into like how many different types of plugins we've solved for all platforms. Maybe
[01:46:07]  not as high priority, but if you're coming from the perspective, like Eleventy and like, this is the platform that makes a ton of sense. People are asking
[01:46:17]  about bun, you know, that's a different, that's a completely different discussion. I mean, I would love to see. And I, I think that you will
[01:46:26]  see Eleventy running in Dino, uh, at some point this year. So, um, yeah, I would love to see that. And people have already
[01:46:35]  demoed Eleventy running in a bun. Um, so. Yeah. Yeah. No. And yeah, I guess, yeah, no, that's, that's
[01:46:42]  awesome. I guess the node compat made that not too bad and you weren't doing any of the things that break bun at this point. There's, there's a few
[01:46:49]  things where you just can't do yet. So, but as long as you're on the happy path, you can get incredible things at a bun. I mean,
[01:46:56]  interestingly, the, the nullify edge functions run on Dino and we have, uh, that code in place to do runtime Dino stuff. But, um, in
[01:47:06]  terms of running Eleventy on your command line and Dino, that's a, that's a, an additional work, uh, step that we need to do.
[01:47:13]  Yeah, no, that's, that's, that is actually a good point. Interesting. Cause like there is effort for example, to get beat on Dino and
[01:47:21]  that's a big effort. And there's a lot of things you control every piece of it. So like destiny of Eleventy getting on Dino is completely up to
[01:47:29]  your prerogative. So, I mean, that's pretty powerful for man. That's what I'm telling you. Yeah, no, for sure. For sure
[01:47:38] . Um, but yeah, no, uh, yeah, it's interesting. I, I think, I, I think we're seeing it. I, I,
[01:47:46]  I, I, you know, I draw solutions on like a rough, I did an article a while ago, you know, where I kind of put all the solutions by
[01:47:57]  holotype on like across a, a range. And obviously every time you do that, you get criticism because people are like, you can do this over here and you can
[01:48:04]  do this over here. And I know it's not perfect. And I tried to do it in the most generic way. Cause like, it's even worse when you talk
[01:48:10]  about features, because if you talk about features, everybody's going to have that feature next week. So like, you know, you can't do that, but I
[01:48:16]  was trying to get general and still like, regardless of, of like that aspect of it. It's clear. It's, it's fair to say that 11d is
[01:48:27]  one of the solutions furthest on the left, on a left to right scale. You don't know what a left or right is, but you know what I mean?
[01:48:32]  If you could picture there's a left and a right 11d can be very far on the left where say react is very far on the right. Yeah. I can
[01:48:40]  see that. Yeah. And the beef, the be fair. But what we're seeing now is the, those ranges, which were narrower are expanding and the overlap gap
[01:48:51]  is getting bigger to the point. Now that between each solutions, expanded range and new solutions, filling the gap, we really have like a very gentle slope across left to right
[01:49:04]  now. There's, there's almost no gaps. And it's really cool for me as I said, this is why I want to look into this to see how
[01:49:09]  11d is, is kind of taking that range and spreading along the gap. Cause someone was asking, you know, about new here, 11d versus Astro, right
[01:49:18] ? Like at one point they're like, there might've been a bigger split where they kind of sit, but 11d's branched out, Astro's branched
[01:49:28]  out. Everybody's kind of overlapping. It's still like a rainbow. There's still like a spectrum where you might fit more in, but it's, it is
[01:49:36] , it is interesting. You know what? Uh, you're probably going to be asking this question for a while. Um, there's going to be little details here and
[01:49:43]  things to make your decision, but like generally speaking, we're seeing more and more overlap, um, to certain things. So what it ends up coming down to is a
[01:49:54]  lot of experience type things. like how, where you value, um, uh, certain parts of the authoring experience, where you value certain parts of, uh,
[01:50:06]  you know, you know, build times and like all, like all those like experiential things where the focus is in terms of like how content it feels, how dynamic
[01:50:16]  it feels like, is it interesting? There's going to be a lot of like, what is it? Uh, different strokes for different folks kind of, kind of stuff
[01:50:23]  going on. That's me answering the question. I don't know if Zach wants to say anything. I gave him a way to politely back out of that question,
[01:50:28]  but. No, I'm fine answering it. I think that there's a lot of, um, there is a lot of overlap and I think Astro specifically has a
[01:50:36]  better component story. So if you want to do components first, Astro has a better component story right now. Um, I would say Eleventy's performance story
[01:50:44]  is a little bit better because we've opted out of the, uh, or excuse me, build performance story is a little bit better because we've opted out of the bund
[01:50:52] ler. Um, and I, I really think that opting out of a specific bundler is going to serve us better in the longterm. Um, I think
[01:51:01]  that hitching your wagon to a bundler is a, is a dangerous thing. Um, especially when you need to, uh, when the next bundler comes out and
[01:51:09]  you need to like do a bunch of maybe breaking changes, migrating to a different bundler under the, or behind the scenes. So, um, yeah, I mean
[01:51:19] , I, I think that there is a lot of overlap between the two. And I think that that overlap will probably, um, or the differences might even shrink over
[01:51:28]  time. Um, yeah, it's interesting. I don't know. Is that a good enough answer to the question? I think that, I think, I think that
[01:51:36] 's good enough. Yeah. I was, would I kind of got stuck for a second when you talk about the bundler thing and thinking and thinking about how modular, even
[01:51:42]  the levels are happening on the bundler level. Like beat uses roll up and ES build, which is sometimes, sometimes that's a mess. I know from working on
[01:51:52]  the internals, it can be sometimes a mess, but like, like we now have meta bundlers. Like that's what the beat is a meta bundler. I
[01:52:00] 'm, I don't know. I don't know. I guess you could call maybe Snowpack was the first of that type of like, it's kind of like
[01:52:05]  meta bundler, basically. Like essentially we, we have meta bundlers, just like we have meta frameworks. Um, and I, it's, it's,
[01:52:14]  it's, it's wild. I, as I said, I don't know where, where this goes, but it just, when you were talking about like the sw
[01:52:21] apping out the internals and stuff, I was like, like they actually did that. You know what I mean? Like they actually brought ES build in to replace part of
[01:52:27]  the rollup stuff. And yeah, it's, it's, it's interesting where those lines get drawn and where the boundaries change. I think that's always really interesting
[01:52:35] . Yeah. Yeah. Yeah. Yeah. I think that we'll probably see more and more bundlers coming out and it'll be interesting to see. Cause I really
[01:52:43]  think that Vita is like the combination of bundler slash web server at the same time. Yeah. And I think Remix is like an interesting thing too, because Rem
[01:52:52] ix has kind of taken their own route with the web server too, doing full request mode stuff without the build stuff. Um, so I mean, yeah, it's just
[01:53:02] , it's an interesting time to be a developer. You certainly have a lot of options for what you want to do. I wouldn't be surprised to see. Uh
[01:53:10] , uh, more remix style version of V where everything is that. I mean, did you, I mean, did you check out fresh? Right. Where there's like
[01:53:23]  no. Build step. Period. Like there's no temporary cause even with Remix, it's, it's a little bit like Svelte and solid start and
[01:53:32]  all that work. We build cause we need the trans pile, like the JSX and that kind of piece. And then we generally render. I mean, be fair S
[01:53:40] velte kit and solid have static adapters where we can do a poor man static, so to speak, basically do enough so that we can supplement our SSR.
[01:53:49]  It's like a caching method kid method you can look at, but you know, I mean, obviously Remix has been very straight on it. But the thing is
[01:53:56]  they do have a build step. Like we do have build steps because we, we, you can't serve JSX to the browser, but Dino does, does it
[01:54:05]  fully just in time. And it's interesting cause there are trade-offs to that too. Cause Marco may not know this eBay's, um, built a bundler
[01:54:14]  back in like 2014, 15 called Lasso. And this, this is just, and this is just one of those kinds of funny things. Cause no one really knows about
[01:54:23]  Lasso anymore except Dylan, who's in the chat here. Hey Dylan. Um, but, uh, we still use Lasso at eBay and it was an interesting
[01:54:32]  lift and move because Lasso was a no bundle bundler back in 2015. It's like way ahead of its time in that when you ran into dev, it didn't
[01:54:40]  build anything until you requested something. So it was all on request bundling and we actually use that in production. Um, and it started as a really good thing,
[01:54:50]  but over time, obviously, like it can also be a very bad thing. You're right. Like you save the build times that deploy, but then, you know,
[01:54:59]  certain, certain hit cases where stuff takes time to actually generate. But what was interesting though, is, I mean, it's still very, very powerful, especially when you
[01:55:07]  have stuff like, uh, like, um, I 18N. Right. And being able to like put in those flags and generate the internationalization on the fly and
[01:55:15]  the built and all that. Because like. We actually had some fun trying to figure out the solution there, because like, if you just switched to a web pack build,
[01:55:22]  it like the deployment went from a couple, like a minute or two to like 45 minutes. Like. Oh, wow. Like to actually figure out how to do it because
[01:55:33]  of the on demand actually sheltered off. Like how many languages and places and dialects that do you think eBay gets served around the world? Yeah. I mean,
[01:55:42]  that's a, that's a fascinating point because I really feel like in my heart of hearts that you cannot go all in on request only, and you cannot, you should
[01:55:51]  not go all in on build only. You need a combination of both. If you're going to serve a long term project maintenance that has a bunch of different use cases
[01:56:01]  available to it. And yeah, I would be very wary of, of doing all of one or all of the other. And I, I mean, my more opinion
[01:56:09] ated stance is that I think it should be build first because the sites are more portable, but that's kind of a different discussion from. Yeah. I really think that you
[01:56:20]  should not have a tool that goes all in on one or the other. Yeah. And, and that's actually where, where it's getting is like the cautionary
[01:56:26]  tale because we've, we've actually seen what a system like that goes across. Like a lot of benefits, but like there are those kinds of trade-offs.
[01:56:32]  So it was just, it was interesting because like w we've watched tools go more that way recently. Like we've watched VEAT's bundle lists in depth, which
[01:56:41]  is fine in depth. That's great. Right. But I'm just like, but we've, I mean, you're going to see bundle lists, um, on
[01:56:49]  like if they get VEAT into Dino, someone's going to do bundle lists, you know, like you're going to see bundle lists on a request as well
[01:56:56] . Um, and yeah, I think that, I think it's gonna be interesting to see how that plays out. Cause I, it isn't just a straight win
[01:57:02] . Um, so yeah, it's funny. Of course I got the static guy here when I'm talking about this, but yeah, it was, it was one of
[01:57:10]  those, it was one of those things. Like it is, it isn't that simple. Um, yeah. And I really kind of feel like not just that, but
[01:57:17]  build unlocks a type of application that you can build that you like couldn't do on request. So just like, as an example, I have this Twitter archive on
[01:57:27]  my personal website that generates a page for every one of my 35,000 tweets. Um, I could generate each one of those tweet pages on request, but I wouldn't
[01:57:37]  be able to do any of like the aggregate data analysis without a build step. And I have a bunch of different, like here's how many tweets where I've used
[01:57:44]  curse words or whatever, you know, like data analysis on my tweets just to show, um, just a bunch of different patterns that I have for my tweeting habits.
[01:57:52]  And there's no way I could build that page on request because I'd have to do a ton of like data crunching that I would not want to do on, on
[01:58:00] , uh, on first request. Yeah. I mean, yeah, if you're talking about the value of build type stuff, yeah, I speak to the choir. Cause
[01:58:07]  like I do compilation, um, in JavaScript, JavaScript frameworks and that build ahead is a big part. It's not the whole story as people know who use solid,
[01:58:16]  like it is a runtime thing and it's actually the runtime. That's super fast. We don't need JSX, but it's, it's, it is a
[01:58:23] , it does offer the ability to do stuff like better tree shaking better. Like the, you know, there's a whole layer of performance. And I think even, especially
[01:58:33]  when we're talking about the server client split, like we, we, the optimally I want to use all pieces of it. I want to, I want to use
[01:58:40]  the build step to learn as much as I can. I want to use that initial server render to use as much as I can to inform hydration. I want, I
[01:58:47]  want, I like, I want to get as much information as I can. And, uh, denying the build step is just like denying a phase where you can optimize.
[01:58:55]  Like the optimize, like you, it's not a hundred percent optimization kind of thing. Like you can't do everything there, but you can do a lot. And we
[01:59:01] 've seen that even on the framework side with stealth or solid. Right. So, um, yeah, I, I think I, yeah, you speak to the choir on
[01:59:09]  that side. That's why it's, it's been interesting. Cause actually, I guess you're in kind of a interesting space. Cause yeah, I guess,
[01:59:18]  how does it work? I guess, I guess it's still aligned. See, one thing I've been noticing is like on the more web components side and like non JS
[01:59:26]  background side, they're the, you know, they've been really excited for like the no build thing. And I can actually kind of see that like, even like
[01:59:34]  the HTMM on pre act, like the way it fits in. Like it's, it's kind of nice. And then, you know, import maps and all these
[01:59:41]  new technologies to be able to not build the JavaScript app. And that's kind of beneficial there. But like, I wonder, is that in contradiction? Like if you
[01:59:50]  feel like like so hardcore on the no build side, like some, I remember someone trying to suggest that, um, minification didn't affect anything. And they use CSS
[01:59:59]  as an example, which is like really dumb because CSS basically is like way less minifiable than JavaScript. Like you can't like you, because you don't get to
[02:00:09]  like mangle the arguments. You don't get to like, it's just, and it was like, but like build has value even there. But there's like this
[02:00:19] , I wonder if there's like a tension or there because like, on the other hand, you're kind of like, Oh, I wish I didn't have to build
[02:00:23]  my JavaScript. I don't, I feel like maybe in the zone where you sit, you probably see both sides of that argument. Like on the app side, like where
[02:00:31]  I am, everyone's like, obviously you need build stuff. Are you crazy? But like, like on, on the static side, I bet you there is still
[02:00:38]  like a little bit of tension there. I don't know. Do you see any of that? Yeah. I mean, I, I feel like to me, it comes
[02:00:44]  back to the education thing, right? Like, what are you starting as with, as your, as your baseline and what do you want to teach? Like brand new people
[02:00:53] , um, that are coming into development to do. And really I, I live in two worlds right now, right? Because I want Eleventy, as I
[02:01:01]  mentioned, to live right above the layer at which you start to need a build step. But I would love to, for Eleventy to be the lightest build step
[02:01:10]  possible. So, um, I'm pro build and anti build at the same time. It's, it's, um, yep, uh, an interesting space to
[02:01:19]  live in. But really, to me, it all comes back to, uh, you shouldn't like all or nothing. It's, do you want to live in absolute
[02:01:28]  absolutes? Or do you want to live in the real world where things are a little bit more gray? Someone wanted you to clarify a bit when you're talking about
[02:01:34]  bundler agnostic or no bundler. Like w w w how does that work in Eleventy? Um, well, when I say bundler, usually I
[02:01:45]  mean module bundler, which is a JavaScript bundler. But, um, Eleventy really has no, like CSS or JS, um, bundling built in.
[02:01:55]  And we might do some like asset optimization stuff, um, in that space in the future. But, uh, we really haven't hitched our wagon to any third
[02:02:05]  party tool to do that. Gotcha. Okay. Cause like, it's mostly, we do have plugins and integrations that other people have worked on to do that. But
[02:02:12]  we haven't taken an official stance on one of those. Right. Right. Yeah. No. And that's the thing, like, cause mostly you're just generating HTML
[02:02:19] . So like at the point, like you can just do some JavaScript stuff at the point. Yeah. Be like, I need this official solution. Yeah. That makes
[02:02:27]  a lot of sense. Yeah. Uh, yeah. So yeah. Some people are talking more about the build, no build thing. No build and fresh is just a way
[02:02:33]  to make your, just playable kind of like interpreted versus compiled. You can do a URL if node, you have an install package and stuff around it. Yeah. I mean
[02:02:41] , it makes it convenient. Um, I'm just saying like, I, I, I, I, I, there's probably trade offs since at a certain point on
[02:02:48]  a production side of things. Um, so yeah, I mean, yeah, I mean, we've got a question. Nice thing about build step, though, is
[02:02:56]  it decouples the app build environment and the server environment. For example, I can deploy a solid app on a go server because the build step renders on building to
[02:03:03]  desk and conserved by anything. Yeah. Yeah. I mean, and they're curious to do something with 11d, but I think, I think the point is,
[02:03:09]  this is just, it's at like at the plugin level. Yeah. I mean, if I'm understanding what you're saying, Zach, like the core part is
[02:03:14]  you just generate the site you need and the JavaScript stuff could get pushed to wherever you need to do it. Right? Yeah. I mean, we have the, we have
[02:03:26]  a feature called pass through copy that lets you just copy files wholesale to your output directory. And that's usually what you'll do if you want to use something in your
[02:03:35]  node modules folder or something like that. You'll copy it to a, to your output folder and then load it. Um, using the normal JS loading mechanisms that you you
[02:03:45] 're used to. Um, so I don't know. Did that answer the question? I think, I think, I think, I think, but I think, I
[02:03:53]  think the other point that I want to make, sorry, I just thought of it. The other point I wanted to make is that 11d doesn't care what output format
[02:03:58]  you're going to, you could output, you could have a template that outputs to chase on. You could have a template that outputs to, um, a text file
[02:04:06] . You could have a template that generates JavaScript itself. And I've done that too. I may have an ungex template that basically just aggregates a bunch of JavaScript
[02:04:14]  or CSS files together into a single, uh, a single file in my build folder. So, um, you can kind of do whatever you want in 11d. There
[02:04:25]  is, it doesn't assume that you need to output HTML. And I've seen actually folks use 11d to generate their Apache server config files, which is kind of
[02:04:35]  an interesting use case. Like I saw someone that was generating like four different server configs at the same time using 11d script. So I don't know. It's
[02:04:42] , it's pretty flexible to do whatever you want to do. That's cool. Yeah. You said it's just like a transform engine. So like we could have
[02:04:50]  like, um, we could have some, uh, yeah. Like it's interesting. You can like generate configuration files using the same templating mechanism, which is pretty crazy
[02:05:06] . Um, okay. Okay. I got you here and we're getting towards a time where I probably should let you go. But I have to ask about this just
[02:05:12]  because we talk about benchmarks and we talk about performance a lot. And I have to, I have to put this out here because at one point I, I think I
[02:05:21]  get, I get the thing and I get the, the, you know, stuff going on, but this is, I mean, not a joke at anyone's expense,
[02:05:27]  but this is one of the funniest things I've ever seen when you, I opened up a blog article and you, and I see this red line and I'm like,
[02:05:35]  Oh, is that like a weird CSS style thing? But it covers the text. Maybe they broke their styles or something. And I saw this line and I was like
[02:05:42] , okay, markdown generator. I'm just, I'm just like, huh, this is maybe this is some nouveau kind of, kind of thing. And then I
[02:05:48] , I scroll down and I realize that it's just the end of a graph that is so off the charts. It extends past the top of the page. Um, uh
[02:06:01] , I mean, as I said, it was just, it was just, I mean, the, the interesting thing about this. The interesting thing about this graph is
[02:06:08]  that when I originally wrote this blog post, I didn't want to, uh, have my own graphs embedded in the thing. So I use Google sheets and I put up
[02:06:16]  Google sheets, um, embeds for the graphs, um, which is just like a stupid, simple way of doing it. And the Google embeds were not responsive and
[02:06:25]  somebody complained to me that they were not responsive. So I ended up using like an old charting library that I had used for like the Jamstack conference or the Jam
[02:06:34] stack community survey last year. And the feature set is not great. And yeah, this was like the easiest way to have the graph be like embedded and responsive on
[02:06:46]  my blog without having to do a bunch of extra work to like label. Cause that would have had to do a bunch of like extra coding work to make the labels.
[02:06:55]  Like so that the, they didn't overlap because this, if I put this line visible on the chart and bound correctly with the chart chart, charting library expected.
[02:07:08]  Um, and the labels did not have been readable because all the other ones would overlap. I don't know. There's some, there's some tech backstory to this,
[02:07:20]  but yeah. Yeah. Yeah. Yeah. No, that, that makes sense. And I wanted to do chances to explain that. Cause like, I have to admit when
[02:07:27]  people open this blog for the first time, they were just like, like at first like confusion. And then just like, like, you know, the, the,
[02:07:35]  like, I mean, this blog did not even get, it did not, it got zero attention before I, before I changed this charting library. The chart, I
[02:07:43]  didn't, it was out for four days before I changed this chart. Yeah. And then once I put the chart out, that's when people started sharing it and
[02:07:51]  talking about it. So I don't. Yeah. I mean, I guess it just has to have some funny for people to share it. Yeah. I mean, I
[02:07:58]  mean, this line, as I said, it was just, it's, it cracked me up and I mean, it's, it's not good. But I mean
[02:08:04] , honestly, this was just the funniest thing. Can we actually talk more seriously about what this benchmark is and what it, what it's showing? I just, I
[02:08:11]  was just, it was just, it was just, you wrote this article and obviously because of the line and the thing, it kicked up a little bit of controversy, but
[02:08:19]  I'm like, I'm too worried about that. Like what, what is this? What is this test that you were doing? What is this benchmark? Yeah.
[02:08:25]  So I wanted to, I wanted just to test how different static site generators or site generators more generally compile markdown and the speed of those. So I ran a bunch of
[02:08:38]  tests using, I think anywhere from like, I don't know what the bottom was like a hundred files to 4,000 files. Okay. 4,000 files to 4
[02:08:48] ,000 files. And you asked on Twitter, I remember this, you asked people, you're like, what's the size of a, of a, of a
[02:08:55]  small or medium or what do you say? Was it a large, what would you. Large, a large project. And most folks like thought that 2,000 files was
[02:09:05]  a pretty large project. And I think later, like I discovered that MDN itself, like the MDN website has like something like 11,000 or 12,000 different
[02:09:16]  pages of content. And so that's a, yeah, this is a, this is a very different world because like, when you're like, when you're building
[02:09:23]  stuff on the app side, like while, um, there'll be lots of files. Cause components and breaking things down on this complexity there from like a hierarchical page perspective
[02:09:34] , you might actually only like, even in a media, a large size app might only have. 50, 60, 50 pages or something, because that 50 pages generates
[02:09:44]  tens of thousands of pages essentially at runtime. So like, you're like, like, it's a completely different scale when you're kind of looking at it that way.
[02:09:52]  But in, in the case of like MDN or something, it's like a markdown file or it's per page. Like it's, it's. Yeah.
[02:10:00]  And I don't, I don't know necessarily the MDN is statically generated. It's just a data point to use to when you're thinking about larger sites
[02:10:06] . Right. Yeah. Yeah, exactly. But when you go the static route and the thinking there and it's all unique content, you're going to have a lot of
[02:10:13]  pages. It's like a different. Okay. So I'm following you here. So we have giant project with up to 4,000 markdown pages. Hugo's
[02:10:21]  incredible. Unless you just made that the baseline and flattened it because. No, Hugo is very fast. And you can see what the actual number is. If you scroll
[02:10:30]  down to the table below. I was like, is Hugo zero? And the, and the answer is yes. Hugo is zero. Okay. Yeah. I mean, Hugo
[02:10:40]  generates 4,000 markdown files a lot. In many cases faster than a lot of other pages start their empty servers. There's empty development servers. So he goes
[02:10:51]  incredibly fast. It's amazing. Yeah. Yeah. I mean, this is, this is, this is, this is incredible. So if someone was asking what the,
[02:10:59]  the line was, I mean, we'll talk about that more in a minute, but it, the line is remix. Um, but we'll, we'll,
[02:11:05]  we'll, we'll talk about that more in a second. Um, but yeah. Yeah. Hugo is basically zero. And, um, which is just fricking incredible
[02:11:16]  at the scale. And then, uh, what was the other one you had? Oh, Eleventy. Yeah. So we, we, sorry, question. Could
[02:11:23]  you mentioned Jekyll before? Is, is it also kind of something that would fit into this or? Yeah. So, uh, I didn't put Jek
[02:11:30] yll on this and I think that next is another one that's missing from this benchmark. Gotcha. Um, I just ran out of time. Right. No, fair
[02:11:39]  enough. So, yeah. So, and what we see here with Eleventy is you have, obviously there's a bit more, slightly more overhead, but it's
[02:11:45]  actually very similar type of scaling. Cause once, once you get past like the 0.0 something of Hugo and you can just scale up to 0.1, like these
[02:11:56]  steps, like the, the curve. Yeah. I mean, proportionally is, is actually, it scales up pretty well because you go from something that's 200 to
[02:12:06]  something, uh, 20 times that essentially. You, and it's only times four. Right. And this benchmark is a little bit unfair to Eleventy because it has
[02:12:16]  a bunch of, uh, of those plugins that are used on the Eleventy base block. I use the Eleventy base block for this and I used like basically
[02:12:23]  an empty project, an empty Hugo project to build Hugo's version. Right. But yeah, I mean, I get the idea, right? Where you go from,
[02:12:30]  we, 20 times, only four times the build. Um, and yeah, I mean, that's what I'm saying. The scaling there is, is quite good.
[02:12:39]  Um, in fact, it might, even though Hugo's like way slower starting point, it might actually even scale better. I, I mean, you, you'd
[02:12:50]  have to see this probably like a cricks point, but like, cause this is actually more like, uh, 20 times as 10 times. You're, you're,
[02:12:57]  you're, you're. I mean, let's not get carried away. Yeah. It's incredible. Is there, is there a convergence point? We get to,
[02:13:03]  yeah, I don't know. I don't know. I don't know if there's actual. I didn't test. I mean, I could test. I
[02:13:06] 'm just saying. The way the graph's working right now, I mean, it'd be absurd number to get to the, that convergence point that the way the graphs
[02:13:14]  are going right now suggested there could be a convergence point that it's just, it's not important, but. I mean, I think that, I think that every static
[02:13:21]  state generator has a top level limit. Right. Makes sense. How many files it can build. And it would be an interest, interesting test to see what that limit is
[02:13:28]  for each of those as well. I think I'm done benchmarking for a while. Yeah. Controversy that comes with this is stressful. Yeah, it
[02:13:36]  is. I, I sometimes welcome it. Um, but to be fair, it is challenging. I'm going to talk about that later in this week in JavaScript. I
[02:13:43] 'll talk about benchmarking some more, but I just, cause I had you here. I had to just talk about this. Cause you, you can just see like.
[02:13:49]  Eleventy and Hugo are just on a completely different scale. These are tools. Built for this use case. You can just tell that. The second you get into
[02:14:01]  the others, like it, like there's just, there's just some kind of jump up to be fair. Um, uh, it's surprisingly how well, um,
[02:14:14]  uh, next does. There's an initial overhead of next, but it actually, it actually stays relatively good with JS. Yeah. There's some nuance there too. You
[02:14:24]  know, it's different to JS routing and file, file routing. Yeah. So that, that came out of some discussions with the remix folks after, um, the
[02:14:32]  blog post was published and, um, just thinking about how, so in next specifically, you can have a, a JavaScript file that basically will, will iterate over your mark
[02:14:43] down file. So you're setting up the route ahead of time. instead of having a markdown files littered throughout your project. So it's, it's kind
[02:14:53]  of a way to say I have one route or one route and I'm, uh, the, the markdown is secondary to that request. Right. Okay. And
[02:15:04]  so remixes complaint with the benchmark was that they, uh, don't really encourage people to do a file routing, but I stumbled into this performance problem with remix.
[02:15:14]  It's not intentionally, I started building a remix project from scratch, trying to test these markdown things. And I encountered this, this performance bug that they have when you
[02:15:25]  put your markdown files in a certain folder and your routes folder, which is a feature they support. Um, and it does build time compilation of markdown when you
[02:15:33]  put your files in there. So I, I don't, I, I mean, I can see why it's not like, it's not the canonical way for them
[02:15:45]  to, to like build markdown files, but really they're doing a build time step, um, with a feature they support. So like, depending on where you put
[02:15:53]  your markdown files in a remix project year, your, um, build time. Um, build time, uh, the build time that you get out of the tool
[02:16:02]  can be very, very large and huge. Yeah. I mean, I'm not even sure how you measure this in some of those tools because remix generally doesn't do SS
[02:16:12] G type stuff. So there's it's you. Yeah. So if you scroll down, I do have another table that supplements with, uh, the remix numbers. No
[02:16:19] , go up. Sorry. There was, it was right below the first table. Yeah. Yeah. So I did add a, a separate table, but this is
[02:16:27]  just server tart startup times because they're not doing any markdown processing. Right. Right. When you use JS routing. Right. Cause that, that, that was sort
[02:16:36]  of what I was trying to get at. Like there's, there's the, there's the, like w w was this just. Yeah. Like, was it trying
[02:16:44]  to each, they compile each markdown file into a JavaScript file. Right. Um, which yeah. Right. When you're using file routing. Right. is actually
[02:16:53]  not actually that surprising but is this measuring that compilation or is this measuring that compilation plus serving it that was the part that i wasn't clear about no it's just a remix
[02:17:04]  build or whatever their export command is or whatever so it's just the okay gotcha okay that makes that makes sense okay um okay okay the production build that you do for your
[02:17:18]  deployment right so this is just showing after it's already been processed how long it takes to serve it no no no no it's the same uh so the two different remix
[02:17:29]  entries here one is markdown files in your roots folder and the other is markdown uh markdown files outside of your roots folder when they're outside of your roots folder how
[02:17:44]  how do they get processed like what do they do they don't you're just using a javascript file that will load those and parse them and serve them on request
[02:17:53]  oh okay okay and that's actually relatively fast on demand but obviously it's there's no no this is production build this is a production build that's what i measured it's
[02:18:03]  not measuring how long it takes remix to um generate those markdown files i did not measure runtime markdown parsing in this case this was just project build time right project
[02:18:16]  build time so if you don't process the markdown files this is how long it takes because literally okay i see yeah because literally it doesn't do any additional work between 4
[02:18:27]  000 or 250 gotcha um yeah okay so then that that's as long as you put your markdown files in the right place remix is much faster than next right because next
[02:18:38]  is actually sort of do yeah i don't even know what next is doing i guess that's a because it looks like it's doing some work here so yeah it's
[02:18:51]  i mean we if we we don't i i guess is next processing the markdown files ahead of time too um i did not investigate that fair enough it was not requested to
[02:19:03]  investigate that by the next team fair enough okay so this kind of left that where it is and then yeah the rest of this is you know gatsby astro um
[02:19:13]  yeah yeah and astro i did actually rerun the the numbers after astro did their 1.0 release because when this blog came out right i was just using its release
[02:19:22]  candidate like the 1.0 release candidate and uh yeah it did actually speed up by about 20 25 when astro 1.0 came out so nice nice yeah because they
[02:19:31]  did a lot of work um with the mdx stuff for the 1.0 release to my knowledge so that's that's that's good to see and i i'm
[02:19:37]  glad that this all got updated but yeah so that that's that's that's the story behind it everyone if you're if you're kind of interested how we ended up with
[02:19:45]  the the line to the top and what this is actually showing um i'm i it's interesting because this is this is a situation that is so common in the static generation
[02:19:57]  side of thing and when you're building dock sites and stuff um but maybe not something that i mean admittedly the remix guys are thinking about a ton i mean but it is
[02:20:06]  interesting because when you you have to when you build a solution build a zone you have to design like what part what range and what your your your product is good for um
[02:20:19]  and what it's focused on um this is why i'm a big big big fan of astro and when people have been making content sites with solid and you know i'm
[02:20:28]  just like just go over there just just use it and i'd love i'd love to add 11d to that list as well um so uh yeah no this yeah this is
[02:20:36]  this is this is good and thanks for talking about this i know that there was like some controversy and it's always a little bit hard uh to be at the brunt
[02:20:45]  of that but um yeah i was curious yeah i have no problem talking about it um yeah i just it's a little stressful when it's going on but i feel like the
[02:20:56]  the resolution was satisfactory yeah no that's that's good and yeah it's it's not always like that it's sometimes hard um i as i said i've been doing a
[02:21:04]  lot of benchmarking again this week and working on some new benchmarks so it's been it's been uh definitely a challenge but yeah no i'm it's funny i left
[02:21:11]  this to to the end but i probably should have like slid this in a bit earlier into the conversation because now i'm just like is this a good note to end on
[02:21:18]  no it's not a good note to end on so let's let let's actually uh let's give let's flip back to eleventy one more time before i let
[02:21:26]  you go and i just just just a reminder for everyone um anything you want people to check out uh you you've been working on these canary builds as you said ele
[02:21:37] venty 2.0 is probably in the works for the next couple months we're we're we're we're getting there yeah i mean the the big features that um we
[02:21:48]  kind of already talked about eleventy 2.0 but i need to get the 2.0 release out before we can start doing ecma script modules that's like
[02:21:56]  a first party thing so i'd really like to see that and that will be the next step that unlocks dno so um after 2.0 is when that will that
[02:22:05]  will likely come into play yeah i'm looking forward to it um if i get a chance uh definitely look and see what it would take to get a integration going with ele
[02:22:15] venty i i it looks i mean at least from what i saw the stuff looks pretty straightforward and easy but i know it never is so um yeah i really don't think
[02:22:24]  there'd be much to it to putting solid um in the is land web component for sure yeah is land yeah i love that you you it's because you wanted to keep with
[02:22:33]  the web component naming convention oh man that's that's fun um yeah uh it's also a nod to the to the is attribute that um has been waffling back
[02:22:48]  and forth for years and years and years i don't know if you know that one um oh yeah yeah yeah yeah where you can redefine an existing html element as
[02:22:58]  a web component using it yeah yeah yeah native built-ins uh which is an interesting one i mean that's its own form of controversy i actually did a lot of web component
[02:23:06]  work uh especially between 2013 and 2018. and i wrote polyfills and stuff and the funny thing is that i have stories about the is one because like literally it's
[02:23:17]  not that hard to to like there's there's this problem where the browser vendors can all agree chrome went and implemented it and then so far as like we're never implementing it
[02:23:29]  or webkit and and and and they're like they're worried about security and chrome's like well if we don't have progressive enhancement why are we even doing this so
[02:23:37]  they they basically tabled this they couldn't solve it for years and they're like okay we're just gonna like put in the spec as speculative and we'll just see how
[02:23:46]  things go and it never came back around again um so to speak right like it's still outgoing and people wrote polyfills for it like uh a web reflection andre gi
[02:23:57] amachi uh like like i i i love those libraries and the thing was but he focused on like component register and all this i was trying to use the other official web
[02:24:06] component.com um polyfills for years you know stuff for shadow dom or like templates and all the missing pieces and i still i think i might have an open pr
[02:24:15]  still or it moved repos and got closed i i i just wanted them to pass the second or third argument from the custom element creator through because if they do that i
[02:24:26]  could just pass is through to my my component that could handle it like but they were they were hijacking the the constructor so that they could do their polyfill for shadow dom
[02:24:37]  or whatever and i was like all we just just literally it comes in here just pass the argument through like can you do that and yeah in like i don't know how long
[02:24:46]  has it been like six years that never got merged so i couldn't use that like i patched it myself but essentially the official version of that library could couldn't support
[02:24:56]  is because the pr to just pass the argument through wouldn't wouldn't be accepted um yeah anyway yeah i don't think is will happen i would give up hope on is at
[02:25:07]  this point yeah i know and i think andrea uh did as well he he actually built like other libraries that look like their web components or weren't what he he's
[02:25:17]  crazy he's he's anything related yeah any iteration yeah i don't mean that a negative way he's he's come up with like different versions like if you are if you
[02:25:25] 're like looking at web components and looking at custom elements together shadow dom separate thing and you and you're like what can i do with this technology like if could i do it
[02:25:33]  like this could i do this weird thing could i attach it like this could i make it look like a react component but be a web he's look at look at his
[02:25:40]  repos he's made a like a framework or library for every one of those permutations um yep and yeah they're og too they've been around for a really long
[02:25:51]  time yeah yeah yeah like yeah exactly like so many useful little patterns and libraries i think that the challenge that's been on on it on his stuff and he's the creator of
[02:26:01]  uh lighter html and uh html and hyper html um is is is kind of like dom is another library like dom yeah yeah yeah yeah is that
[02:26:10]  like sometimes people come in and they're just like you have like i don't know like 40 different library frameworks to show all the different combinations because it's very much unix
[02:26:19]  mindset and they're like which one what's the one you suggest i use and like that's never that's a blog post answer like which which is fine but i think that
[02:26:28] 's that's where the the challenge is i actually felt bad because when i was i didn't actually i had a benchmark article a couple years ago where i took the 20 top
[02:26:35]  frameworks and did the performance of the js framework benchmark and i didn't have any of his frameworks on there and like i was looking at it because he one of his frameworks was
[02:26:43]  like number 21 and i'm like if i could just add up all the like github stars from his frameworks even or just like two of his frameworks like he'd be
[02:26:52]  easily in there i just couldn't like i was like oh man like i need to draw the line somewhere right i just keep on adding mention yeah it pretty much right it was
[02:27:01]  just yeah it's yeah it's challenging but on the other hand from an innovation standpoint you know pushing the boundaries check out his stuff i mean again he he came up with
[02:27:14]  the whole lit type approach before lit did so like like or at least he published it first there's arguments over who did it first internally in google or outside but like this
[02:27:25]  like check out andrea's stuff um uh web reflection is his handle twitter github whatnot and the show notes yeah when i when i get around to writing those which i
[02:27:37] 'm so good at getting around to i'm i am terrible i i usually get the time stamps and anyway um yeah i think i think we probably should let zach go it
[02:27:46] 's been great chatting with you um give me great perspective on an area that i just don't have as much perspective on i hope everyone on the stream enjoyed it as well um
[02:27:55]  yeah i gave everyone a chance to ask all their questions so i hope they're all good but um i think you can always hit me up at zach elite on twitter yeah
[02:28:05]  yeah check my questions yeah yeah thanks for having me i really enjoyed this chat even though i feel like we might have gone over time but i did not notice we were going over
[02:28:13]  time so i i always enjoyable i always go over time that's a guarantee i did try to keep it shorter but you know trying to move stuff on but yeah the discussions
[02:28:21]  always get us there so yeah you said checking on twitter um is there discord or any kind of others like community stuff where you spend spend time or slack or whatever yeah i mean
[02:28:30]  11d has a discord i am not super active on it but we do have a great team of moderators on there perfect perfect okay that's that's awesome um yeah so
[02:28:40]  i'm gonna let zach go with that um thank you for joining us today zach um have a great one yeah thank you see ya okay but the stream is not over okay
[02:28:49]  we are going to continue the stream here because we're gonna we're gonna do this week in javascript for a second let me just set up my screen so that we
[02:28:58]  are all ready to go um that was awesome having zach on um honestly that so silly that but that trend line on the one graph i mean i would hate to be the
[02:29:12]  the one at the receiving end of that but it was like the funniest thing that i've seen and it was completely like not intentional so it's just like yeah i don't
[02:29:22]  know um anyways let's let's let's let's let's let's get our our banner going here right and get into that mode yeah people are saying yeah let's
[02:29:34]  let's get this going okay yeah so let's talk about this week in javascript it's been a couple weeks um since i talked about um javascript because i
[02:29:46]  took last week off um and a lot has happened in the last couple weeks um so but i i think i'm only going to really focus on a couple of things um
[02:29:59]  so let's get started um all right first thing um uh for me at least two weeks ago um started with me releasing this article if you haven't checked it out yet i
[02:30:18] 'm just going to throw a little props in um javascript paradox it's it's a it's a it's an interesting article in that i'm i'm i
[02:30:26]  propose that javascript is how should i put it it's basically the thing that we're trying to get away from certain degree you talk about performance you're always like how
[02:30:38]  do i run less javascript how do i ship less javascript right and and even like on the back end you know a lot of people like don't want to
[02:30:45]  touch javascript they're worried about different things like security or or you know best practices or whatever i don't necessarily subscribe to all of that but the interesting thing that
[02:30:55]  i've noted and it's why i call this the paradox is that javascript is the best way to ship less javascript i mean some people some people might consider
[02:31:08]  that uh weird but it was what we were talking about today with um with zach um in that essentially when you have the build step and you have the runtime step and you
[02:31:22]  have all the pieces available to you you want to be able um to use them to the full potential and in fact running javascript applications on the server inform hydration to
[02:31:34]  reduce the hydration cost now we could avoid this all to get there by using like jquery or something you know or htmx or something um but there's like
[02:31:43]  different set of trade-offs and if you actually want to be able to develop data-driven declarative uis you do need to you know build and run it the application
[02:31:53]  like that so like it's actually the javascript on the server that gives you more performance and my my argument here is even if the performance delta of how much time
[02:32:04]  you take on the server um you know is considerable like go is much faster or rust or whatever the the impact on the end user is more felt on the client side when
[02:32:16]  you consider the cost of hydration and the cost of the web frameworks building and the cost of the network you know when you consider all these elements you're actually making a bigger impact
[02:32:26]  on your end user by saving on that side like sure your requests to your data have uh you know 10 milliseconds more latency or whatever but we're on the on the server we
[02:32:41] 're talking in tens of milliseconds on the client we're talking hundreds of milliseconds like this is just a different scale and some people don't agree with this some people pointed me
[02:32:52]  to web assembly we're it's unclear if web assembly is going to be that solution honestly um and there's actually a great thread that i pointed out a couple weeks ago you
[02:33:00]  know if you didn't check it out talking about um how it doesn't even make sense to write frameworks in web assembly like it it's novel but it's not going to
[02:33:08]  do better than what the javascript frameworks are the way things are today that could change in the future but we still have a long road to go um so yeah i
[02:33:15]  mean someone mentions resumability here i'm actually working on a new blog post about resumability right now because it it was very clear from some of the conversations that are
[02:33:25]  happening that there's there's there's a lot of misunderstanding of exactly what resumability is but it does tie in to it does tie into the to this conversation because
[02:33:40]  that's an example where running on the server actually makes a considerable difference on the hydration cost in the client and i was talking to mishko about it because you know he
[02:33:51]  and he was like well no i mean wiz at google has a java backend we don't need it to be javascript and i'm like the more we move
[02:33:58]  to resumability and isomorphic the more coupled these things get i you're you're not telling me the full story and i did get the full story they have a
[02:34:07]  compiler that compiles java to javascript like like they're i mean and i we've tried that in the past and maybe there's still potential there you know but
[02:34:16]  this is this is a thing it's not as simple as just going i'll take my backend language and take my javascript you know templating or whatever and just
[02:34:26]  like not do any javascript because it's all templating no like if you're going to be sharing the stuff with the client and in all cases you some cases you
[02:34:32]  aren't you're going to have a certain amount of business logic that makes its way into the components and do you want to write and maintain that twice i mean it's a
[02:34:40]  fair question so like this this is the tension someone's writing the problem with this approach is one that you want to move a whole ecosystem to javascript to solve that
[02:34:51]  problem just call it an api yeah yeah sure yeah we could we could definitely yeah exactly like wrap the apis don't talk to the database directly from the javascript
[02:35:02]  player what i'm saying is i want a javascript web server i don't care how you do the rest of your back end because that latency compared to the the client
[02:35:10]  server rendering stuff like is is probably not going to make as big of an effect it will affect your bottom line don't get me wrong um there's a reason why i
[02:35:19]  i work hard to make solid so fast at server-side rendering like i do care about performance on the server i'm just saying that that difference isn't actually as much felt
[02:35:30]  and i'll actually talk about that a bit more when we get into some of the benchmarks i've been looking at this week and okay similar question so here's the question does
[02:35:41]  it make sense to develop those server tools in javascript if so that could be anything else or develop api is that okay yeah so this is kind of asking and
[02:35:48]  i mentioned this it's it's fine use rust or es build to create your javascript bundles you know you know if it makes sense you know use builds built in
[02:35:58]  go right and the tooling is moving that way so maybe like eventually we do kind of want to just take it further and do that bridge but that there is a there's
[02:36:07]  a tension there like es build doesn't support plugins in the same sense like that babel does um and that's actually like a pretty big bounds to entry for certain types of
[02:36:18]  projects the things that you know want to leverage it like babel i love primitives i love building the builds these building blocks babel for solid meant that people have felt templates
[02:36:29]  compiling to solid i didn't even make it like there's a whole community of developers just going like oh yeah sure let's do something like that like we have custom
[02:36:36]  dsls and stuff like it's a whole area of print it's just like our reactive primitives because of how easy the developers can just get into it if you have
[02:36:44]  to write your plugins in rust it's a bit more of a journey like with swc if you don't really have the plugin system for it like es build it's a
[02:36:54]  little different type of plugin system you just don't get to do it and some people like okay well obviously you wrote solid so you're going to be like particular about that
[02:37:00]  but like look at what happened when react introduced their new jsx transform like es build was doing the old one and it's like okay well how do i get the new one
[02:37:09]  i was like oh maybe we'll get to it like this is this is the challenge when you don't build your stuff module to be fair that was the trade-off es
[02:37:18]  build intentionally made to get the performance to show people where they can do but i'm you know that's why i'm excited about stuff like bun or whatever because um j
[02:37:26] ared's like very much interested in in how he can get both right and i mean that's a harder line to follow but he's he's confident enough that if he can
[02:37:36]  get enough performance he can find ways to let us author stuff in javascript if it makes sense or you know even even if it has to be zig you know just have
[02:37:46]  that layer like he's been working on a macro level that looks uh for bun that looks amazing so just just kind of on a tangent but i it's i i think
[02:37:53]  we will see other languages here the challenge and what i proposed here is that javascript is the language of the web it's the language of the browser and in so hate
[02:38:04]  it or not it's the lowest common denominator like you need to cater to it it's unfortunate in a sense that like it's basically pushed itself into it i mean j
[02:38:14] avascript has gotten better over the years and i never hated javascript but just like it's it's developed because everyone uses it they have to use it and it's
[02:38:22]  it's gone like much much better and you consider things like typescript and like the the whole gambit like it isn't the language that it was at the beginning completely anymore
[02:38:32]  i i actually i actually have like a fun little quote in here that uh someone mentioned that it was like good but i was talking about like the difference between the machinery around
[02:38:40]  javascript and the and the actual language right and i what did i say here the machine of javascript has long replaced the soul well that's that's my attempt
[02:38:51]  at being poetic but what i'm getting at is that like the machine of javascript doesn't actually have to be completely javascript but understand that javascript is
[02:38:59]  like the common denominator here it's from making the most minimal um hydratable pages to making like the uh you know these mini apps that are very popular um in southeast
[02:39:14]  asia um which is a completely different model right that that's where people are like oh why don't you just use phoenix live view or htmx kind
[02:39:20]  of fall apart because some places don't want to rely on the network and the server like you you there is a tension where we're like right now we're like working really
[02:39:28]  hard like especially on the e-commerce side you see this and the reason for stuff like quick and and marco and stuff in ebay and amazon and google and like
[02:39:35]  all this to like reduce costs so we minimize the impact of the network so that we can get the best performance in our browser but like many apps or many programs or whatever they
[02:39:45]  are are like on the other side they're just like look the network is so bad it's just not even worth it like we actually just need to figure out how we can
[02:39:52]  do as much as we can offline and do really smart stuff you know behind the scenes and in that world like it's fine we can have different tools for different projects and
[02:40:01]  different things but it is interesting that all of this even the reason hydration exists is because of this motivation to try and unify things like maybe this is terrible i i remember uh
[02:40:13]  i was watching a stream the other day and theo draws in escala draw like a venn diagram right and and you know so he's like okay we'll draw this circle
[02:40:23]  here and he's talking about css or something right and it doesn't really matter what what what we're talking about right he he draws like a a diagram kind of
[02:40:32]  like you've all seen before where he highlights what the different stuff is and he's what he's trying to point out here is that that you know for this particular problem he
[02:40:44]  was looking at these things weren't um like they weren't the same things they existed in different zones but he was showing that like there's overlaps here there's overlaps
[02:40:54]  here there's overlaps here and then he wrote something at one point in the stream although he might have backed off on it because of something else he's like we want
[02:41:04]  to to uh be here and i i was only half paying attention at that point because like i was i was doing work and we always kind of this is the feeling that
[02:41:15]  we we have right where we're like yeah we want to just have the thing that does everything and at some point later in the stream he actually finds a solution that actually sits
[02:41:22]  there and he's like yeah what i meant when we want to be here is we want to be able to make the thing in here we don't actually want someone to give
[02:41:30]  us the thing here and sometimes i wonder with this question about web dev if we are chasing here and if here is even a place that's desirable do we really want to
[02:41:41]  be at the intersection of everything to be the best at everything but only occupy this space like i mean i don't know i don't know like you you could bring the circles
[02:41:52]  closer together like this is why i like the diagram because it made me feel like i i what i ended up focusing on was how small this space was compared to any of
[02:42:03]  the particular circles and obviously it's the way i you draw it but i it was just this is this is what got me thinking about this because we've been we've been
[02:42:11]  trying to unify everything in the and and it's good reason and this this kind of comes down to actually a conversation we had on twitter um like uh what what was it
[02:42:23]  uh i'm gonna jump a little way way way ahead for uh to like the most recent tweet but um i i woke up yesterday morning and alex russell was telling
[02:42:36]  how js industrial complex which is like all the corporations everyone using javascript frameworks all that kind of stuff is lying about performance lying about ux lying about dx lying about return
[02:42:46]  investment you know he's basically saying like i mean he comes off fairly negative at times because he's seen a lot of crap um in his years um and as much as
[02:42:54]  someone might want to be like cynical about it and be like well you know alex pushed web components which is like a definite way that you need to ship javascript right
[02:43:04]  um web components aren't just html i'm i don't that's not the point here like the point is this is something he sees every day and it's challenging
[02:43:14]  and he's like look we're not helping people build better sites i i'm paraphrasing him in a way that's actually constructive he tends to not be as constructive
[02:43:22]  but that that's that's essentially what i took from it right and it was just kind of funny because um ryan ryan florence had basically showed that how he
[02:43:31]  could take a simple website and got um almost a hundred on mobile like he basically turned off javascript on this simple like to do app or hello world i forget what
[02:43:44]  it was and he he got a 97 on mobile so he got like uh he got about a hundred on um on desktop which is not terribly difficult but he got 97 mobile and
[02:43:54]  and then when he turned the javascript on he got like 94. it was like three points it was nothing to turn the javascript on so he was like you
[02:44:00]  know what i think we're past javascript framework is your performance problem i i disagree with the statement and but it was really weird the the watch this kind of ju
[02:44:11] xtaposition of these things together right um where it's like like how how how should i put it like a lot of the he in this blog i i i highlighted this
[02:44:25]  to be fair he went through a whole bunch of stuff to improve performance this is a great thread if you're like going like how do i get my 52 up to 97.
[02:44:32]  a lot of times the framework isn't your bottleneck right like there's simple things you can do like images and and yeah a lot of stuff around images funny enough people
[02:44:42]  don't handle it well and stuff around css and a bunch of ways to improve your score without even talking about the framework right so if you go through all this is like
[02:44:52]  huge performance gain but at what scale a simple app definitely at a certain point and maybe not everything hits a scale so that he's got a good good question there but at
[02:45:04]  a certain point your architecture does actually define what happens you know like there's some discussion here about module soup where you just like go oh i need this i'll just include it
[02:45:13]  i'll need this and you just your app grows grows grows grows grows with certain architecture your app will grow grow grow grow grow other frameworks actually do solve that problem so it
[02:45:24] 's not necessarily that your framework is your web performance problem it's just like there are frameworks lend to certain architectures and different architectures do actually solve certain problems better um my
[02:45:34]  whole point was i don't think either side is wrong it's just it's such a big gap here in in terms of the message right um yeah let's see we
[02:45:46]  got some comments here yeah mini apps would still investor for edge serve streaming without order flushing no blocking yeah i mean to be fair this is all good stuff right the the biggest
[02:45:59]  thing that that was the shocker to me when i was talking to him and he's like no no no like he he was the the i just talked to the guy
[02:46:05]  from free which is another javascript framework and he many apps aren't necessarily built in javascript but it's super super common um and let me see if i can
[02:46:17]  pull up this framework the tiny footprint concurrent framework ui libraries basically it's like the pre-active react fiber right uh pre-act didn't do fiber they need to concurrent
[02:46:28]  rendering they did their own model and they kept things small this guy tried to make the smallest possible concurrent renderer and at 2.3 kilobytes he he managed to
[02:46:36]  do it i don't think he has as much compatibility so to speak like i don't think this library is as compatible as pre-act is with react or like it's
[02:46:43]  missing some of those pieces but he didn't manage to get a super small concurrent rendering framework and he was he was like he was so much more worried about that kind of performance
[02:46:54]  than load because he's like like look he's like this stuff's gonna take seconds anyways we're gonna load it in the background like it's just it's obviously if
[02:47:00]  we can make things faster we'll make things faster but the amount of benefit you get from um working on concurrency on these low power devices um figuring out how to do things
[02:47:13]  offline way out balances any performance stuff um that you know on the server side which is funny because it's like the exact opposite argument that a lot of like the web native like
[02:47:24]  performance people do like if you follow some twitter accounts they'll they'll just tell you like oh yeah don't do streaming just make your database faster it's like yeah that
[02:47:33]  how convenient for you you know like yes all of these are good things you don't get to just like dismiss something because like you decided that this is the solution the problem is
[02:47:45]  every problem is different and all these solutions help in different ways to varying degrees so you can't just go like oh i found one solution solution to this problem that must apply
[02:47:53]  to everyone um so yeah i mean that was the big thing here and this conversation was good because um i think a lot of people actually uh kind of got in on it talked
[02:48:07]  about it feeling i saw some really good takes in here talking about coming from middle ground even alex and and um and uh ryan got in and it was actually pretty
[02:48:18]  cordial it was not very aggressive people weren't getting at each other's throats too much right you know like ryan's just like look our stuff works without j
[02:48:28] avascript we're not saying don't send html and alex is just like i come from a viewpoint that from doing all my consulting work he's like well obviously
[02:48:36]  these antidotes aren't evidence the lies teams have been sold are now self-perpetuating and taken over my web dev education content like he feels like when he talks
[02:48:43]  to these people they like when he shines the light on the situation they're like they're in disbelief like they feel like they've been betrayed or lied to i mean that
[02:48:52] 's extreme but when you think of companies that invest lots of money on building sites and building these things and then they're like but isn't this the truth and alex is
[02:49:00]  like no i mean alex might have a specific view of that truth which you know juxtaposes that and makes that more of a strong message but i think it's
[02:49:00]  important to to to to to realize like there is something going on here the witness thing like like there there is a reason like even even like when you think about remix and
[02:49:08]  the performance remix brings to react and the patterns you know which is really good and amazing and progressive enhancement all that good stuff you wouldn't go that way in a sense or
[02:49:16]  i mean you go that way because it's good but you wouldn't prioritize that unless you kind of got that sense the feeling that these are important things in a sense on
[02:49:25]  the react side of the sphere remix is actually one of the farthest over towards where we were alex is sitting right so you like it's it is kind of interesting
[02:49:47]  because when you say you know we're past frameworks doing this stuff for you you know and being the performance thing remix exists to show people that there's better patterns right it
[02:49:59] 's a framework that helps solve performance so i mean i think it's all a matter of scale that's that's my take on this all right some people making vdom comments
[02:50:10]  in the chat it's always it's always like that isn't it i mean there there's there's elements of truth to all of this but you know like maybe like
[02:50:26]  as i said if we don't want to be in that center and don't get me wrong i'm working very hard hard to see what that center looks like maybe fast
[02:50:35]  spas are what we want for things like someone uh one of the interesting tangents of this argument was someone saying that if you've ever seen the recommendations on javascript
[02:50:44]  like they're like something around like classically it was like 80 to 100 kilobytes if you want to get like a certain load or something it was a little more but
[02:50:50]  i know from e-commerce thing to get that three seconds we wanted about 80 kilobytes according to some like 2018 study or whatever alex updated his article kind of
[02:50:59]  did an updated version for 2021 and he i did the math again and that number is up to about 150 and if you think about that's almost double that completely changes the game
[02:51:09]  at 80 you can't use react server components like you literally can't use react for big e-commerce it's like literally impossible it's like non-starter um but at
[02:51:19]  150 for small to medium size react is actually an option so like it changes the threshold of the solution because you know the the threshold baseline devices are are faster or whatnot i
[02:51:33]  don't think that any of that just like gets in the way of just wanting to do things smaller and faster anyways like why not so like my point is yeah you don't
[02:51:43]  have to accept it you don't have to adopt it but like it's still a worthwhile place to do work and investigate and learn because we can always make things better all
[02:51:54]  right so continuing on this because i jumped way out of stuff because that was like the first article and the last you know kind of tying together my two weeks here um a lot
[02:52:06]  of other cool stuff happened um happened during this time period um biggest one for me and we talked a bit about it's astro 1.0 big big exciting thing right
[02:52:17]  this is they've had the beta we played with the beta fred was on our stream we looked at ssr um but now it's stabilized and it took a little
[02:52:25]  longer than they hoped for admittedly but i i think what they got out of it was was amazing the big thing was the shift to mdx it just makes so much
[02:52:33]  sense astro is the site for content and um honestly um some people didn't get my joke um but i i all i meant was i i liked when they launched with
[02:52:48]  build faster websites that that's where i sit on build faster websites is me saying a dedication to ux because you're saying i want i want websites that are fast when you
[02:52:58]  i was joking that there's been some uh kind of slogans are the other way that's like build websites faster because that's that's a testimony to dx right and these
[02:53:08]  things don't have to be separate competing things but it's it's it's it's funny to me um that uh essentially we like just the slight nuance and positioning here
[02:53:22]  right i i i love that astro did this and for those who didn't get my joke i'm i'm sorry it was just um yeah build faster websites to me at
[02:53:32]  least is where i live more than build websites faster but i know that's not where everyone lives i just i think it's awesome like for sales yes i i also said
[02:53:45]  that for sales tagline was very clever because people instantly also think like like when you say build the web period fast or something like that i can't remember the exact or
[02:53:57]  building the web period faster or something people still think it means faster websites even though it means faster build times but yeah i i think i i just said i think for sales thing
[02:54:08]  is clever too in its own way but i like i like owning the ux thing that astro has done um and also we've been talking about this a lot another
[02:54:18]  like it seems like every week somebody working solid core has found their way into working in open source full-time uh dan who's been in charge of our docs effort is now
[02:54:27]  working at astro um on their product side and i think this is again i'm so excited you know we had ryan the other week joining the marco team um
[02:54:35]  myself joining netlify it just to see more people from the solid community be able to work on open source full-time like obviously there's a bit of a split you
[02:54:43]  know i had the split for a while too when i was working on marco and solid but being around this stuff it does help because you are in there you're always seeing
[02:54:53]  this stuff and even if you don't get to work on you know solid during the day which you weren't doing before anyways um you're just so much closer it makes
[02:55:01]  life so much easier as i said obviously being able to work at netlify full-time as well as make a huge difference to me but i even even working on these
[02:55:09]  other projects it just it's it's such a like it's such a good thing and i'm so happy to see this um and actually while we're on some solid-
[02:55:22] esque type moves getting oh you know with the astro stuff david was nice enough to send me some merch in the in the mail so actually i i got myself a
[02:55:30]  solid baseball cap i got mugs i got a whole bunch of stuff i didn't i didn't actually end up ordering it myself but i don't know it's cool now
[02:55:38]  i have a bunch of merchandise this is this is this is fun i can i can wear it on stream you know just like i'm wearing a marco shirt right now
[02:55:48]  and i i'm i'm pretty stoked i've seen a few people post on twitter uh i guess david sent some stuff to a bunch of people i think adam rakis
[02:55:58]  and a few other uh influencer types and um it's cool it's just nice to have some some products be able to support solid solid and uh yeah i i i'm my
[02:56:10]  wife actually helped a lot with getting that store set up so um yeah i do do do do check it out if you haven't yet um all the proceeds go back into
[02:56:20]  our open collective to support solid i'm probably yeah there is right on the top of of there there's lots of stuff stickers cups mouse pad if you use one of those
[02:56:31]  patches hats toques we got some water bottles too i got a whole bunch of stuff but um yeah i just grabbed the hat there so yeah oh there you go look at this
[02:56:42]  pride solid stickers that's it's actually really cool how our logo can play into that i like that it's awesome design anyway um yeah just obviously a little shout out there
[02:56:54]  but what's a mouse pad confused vim user yeah i know what how else do you say toque is it like a beanie sorry i'm canadian what do people
[02:57:09]  call call call them is there an official name okay sorry i'm i'm canadian okay um anyways let's let's keep on going on here um there was one more
[02:57:25]  thing that they announced um for the astro release that got me kind of really excited and i didn't know was coming they added in order streaming you know i'm a big
[02:57:34]  fan of streaming and this one slipped under my radar i did not see this before the release thing and then matt phillips just goes oh yeah we got in order streaming and
[02:57:44]  we've talked about out of order streaming before in this on the stream before um and out of order streaming is is all cool right but in order streaming is as simple as
[02:57:56]  you think it sounds but there's a reason that we don't see it as often in most firms like marco supports in order streaming but a lot of frameworks don't and
[02:58:04]  i can explain why but like in order streaming literally is like it sounds like you you you start flushing the head and you just your the chunks come down top down you
[02:58:16]  just kind of go okay maybe the next section the next section the next section and at any point where you stop you hit something async like let's say you need some content
[02:58:28]  to load the page only loads to this point and then it continues from where it left off this is different than in order which actually switches in placeholders where you actually like in
[02:58:37]  in order or sorry out of order you'll like actually at first render the whole page and maybe it'll have some of the sections maybe it'll have like like this one
[02:58:50]  and maybe it'll have that this one and then you're like waiting for these and you put some placeholders in place and then when they finish they slot in right like after
[02:59:00]  the fact you're like okay now we sorry i'm not green um now we get some new boxes here that come in and let's use a nice different color like pink
[02:59:11]  you you'll be like okay now the async content loads in and then these load in after the fact right that's out of order that's what react has that's what
[02:59:18]  solid has and marco supports as well but in order it goes top down and you might be going okay well what's the big deal with that well it's actually hard
[02:59:24]  to do top down in jsx type frameworks because your components return things so like you render the children hit something async and go okay actually i got to stop here if you
[02:59:35]  actually stop it doesn't make sense you're like in the middle of a function whereas you know that's expected to return something to its parents so out of order is actually a
[02:59:45]  lot easier because you can return and go okay i'm just skipping this and then i'm going to get to the end and then i'll flush that and then later i
[02:59:51] 'll insert these things where in order you know your apps is big jsx tree and then you get to a point and you stop and you're like you can't stop because
[03:00:00]  you you can't return the children which means you can't render the parents which means you can't render anything which is why technically react before react 18 had in order streaming but
[03:00:10]  it literally you could reach you could send ahead that's about it once you started the app it was all nested and you couldn't do it but with stuff like ast
[03:00:18] ro or marco which actually write to a buffer you can get to a certain point right to the buffer and go like you know i'm just gonna stop here and wait for
[03:00:28]  this async thing you what marco actually does is actually forks it that way can keep on doing other work and just not combine it into the stream yet it can like
[03:00:37]  continue and go okay we're waiting for this and then we're going to keep on going and we just won't send it along the stream until the thing above it finishes
[03:00:45]  and we know this because that's just the order executed and at that point we forked off to a different process so to speak and i i hope i'm explaining this okay
[03:00:54]  um but basically the nature of how our frameworks work actually make it harder um especially jsx frameworks to do in order streaming because they're all hierarchical and they a component
[03:01:07]  returns something so um so essentially yeah marco does both react and solid only do this side and um astro added this in order streaming approach um and on a similar note
[03:01:23]  so i thought this was super cool on a similar note um also at the exact same time uh the builder guys announced that they also added streaming to quick this week um which is
[03:01:36]  awesome and my understanding from what they described was they actually added in order and they're looking at ways of doing out of order in the future and again part of this comes down
[03:01:46]  to i mean it occurred to me after the fact that it is possible to do in order streaming um with an out of order streaming system you would just have to when you
[03:01:56]  get to the point that pauses like when you get to this first block do finish rendering everything but just like keep the buffer separate so that you could like like you return the
[03:02:07]  the yeah i mean it's it's it's actually a little bit trickier right because you you you can do it as long as you keep the strings separate and do it
[03:02:17]  in a smart way and as i mentioned in a previous stream a lot of solid's raw rendering performance comes into the fact that it doesn't actually keep the virtualized objects
[03:02:26]  in place it actually does string and cat immediately this is much lower on memory and why solid tends to perform three four times even six to ten times faster than other frameworks in s
[03:02:38] sr so there's like a bit of a trade-off there with like jsx frameworks when doing in order generally speaking i need to actually look at quick and see
[03:02:47]  how they're in order works but generally that's usually what the problem is whereas but if you control the compiler to be fair like if you go to the level compilation that quick
[03:02:55]  does or like marco it doesn't matter if your components don't actually return stuff and they just write to a buffer then you can easily do in order and that's probably
[03:03:03]  um what they might be doing but it changes the semantics of jsx slightly so i'm interested to look into that um so someone's asking what's the advantages of
[03:03:13]  in order streaming and the advantage is i mean obviously out of order has layout shift considerations and it's very good for apps but in order sometimes is yeah for long scrolling pages it
[03:03:28]  gets rid of that feeling of of uh of layout shift like even even if you don't lay out and use placeholders it still works better when you like have an have an
[03:03:38]  app because you see the shell and then stuff loads into it if you've got like this long page that scrolls on and on and on and on um then uh in
[03:03:48]  a sense uh like having the stuff slot in might not be as good of a user experience as just having the stuff roll down as it's available there is a couple technical advantages
[03:04:01]  the first one is out of order streaming 100 requires javascript to be present you don't need the framework to be there like in solid we do out of order streaming
[03:04:10]  and we do that before the framework there we just flush a script tag same with marco like you don't need the framework you can basically have a zero javascript page
[03:04:19]  and do out of order screaming it's not zero javascript it's zero bundle like essentially you just flush a script tag and it just moves the stuff into place like you
[03:04:25]  don't need the framework to do it it's very little javascript but in order actually works with no javascript in the browser like you don't even need
[03:04:34]  a script tag it literally you're just waiting and flushing it all in order so um it's better for bots and and stuff right obviously there's other ways you could just
[03:04:43]  do like static wait for all the data thing but like we use in order streaming at um ebay it is actually very valuable um all right the real trick would be to
[03:04:56]  do critical content above the fold in order and then the rest of whatever yeah i mean and that's the thing like when you have both you can do some really cool tricks although
[03:05:05]  i i'm trying to remember there is some restriction to marco about embedding in order and out of order and and there are tricks with suspense list i believe that will
[03:05:13]  kind of spoof in order in an out of order system so i mean there there is work here to get those kind of experiences but i just wanted to highlight that there's
[03:05:22]  like some differences there obviously out of order was much easier for me to implement in solid and for me it gives you the that trance that like seamless change from like if you
[03:05:32]  had a client-side app and you fetched on the client or now you made it ssr and now you're doing streaming it feels the same except stuff loads
[03:05:38]  faster you know you get the same affordances to know when things are loading and stuff like i i really like out of order but in order does make a lot of sense for
[03:05:46]  like long scrolling content sites like let's go to ebay.com you know like this one's not the longest but i like we might have actually seen the stuff come in
[03:05:56]  top to bottom i i mean i i but like when you have sites look look at this layout like this is an in order layout for for for for all purposes right like
[03:06:06]  this is essentially the type of layout which which out of order probably wouldn't make as much sense right so yeah there there's definitely um different usage and combining them gives you the
[03:06:22]  most power middle out streaming there we go that's what that's that that's the real secret right that that's how we'll crush the benchmarks we'll we'll invent middle
[03:06:32]  out streaming pretty here first sorry green scars i'm gonna i'm gonna take credit for that one all right um uh right okay what do we got here yeah so yeah i
[03:06:47]  i just want to point out that they did a great stream talking about it um checked it out in terms of the streaming um i've been i've been enjoying a lot of
[03:06:55]  the content coming out of builder and quick stuff um mostly that it's interesting to see how they've been exploring a lot of the same problems and how it applies specifically to
[03:07:04]  quick um uh as long as you kind of come in with that in mind i think you get get a lot from their videos um because they are very quick centric um i
[03:07:13]  spend a lot of time looking at what other solutions do in the ecosystem so there'll be moments um on those streams where they'll be like oh yeah and quick does this
[03:07:22]  without doing any of this and the truth matters everyone does it that way but um i think i think i think it's important that we uh we kind of like understand that there
[03:07:32]  is a lot of thought that goes into trying to do these uh types of solutions right so um yeah definitely check this out um i use your i use your frameworks you take
[03:07:45]  my jokes seem fair yeah yeah i i didn't see the mitosis one but i i i believe that completely the routing one was another one great conversation we um and i i
[03:07:56]  joined them on one of their streams a couple weeks back well almost joined them i had a technical problems but yeah i i i i think i think that it's it's
[03:08:05]  it's it's very very cool the work they've been doing um so yeah i i let's let's fast forward a bit because yeah i mean this i mean i've
[03:08:15]  been jumping around a bit but um i mean there's no way i can go this week without mentioning um that we did have a bit of a confrontation uh last week with um
[03:08:25]  remix and um well there isn't much of a history for you to go off of because the tweets were deleted um it definitely definitely was an eye-opener for me
[03:08:37]  and it is maybe not the way you think i've been we've been a little bit sloppy um this when you started the project as like a single maintainer and then you
[03:08:48]  try and wrangle more people in um like you you're so happy for the help and you just keep on pushing things forward like you always did and you it's important
[03:09:00]  to step back and and just kind of like look at process and things like it's like building a little company and i've i've got more time now i don't have
[03:09:09]  the excuses before to actually organize this thing into a well-oiled machine where we can make the most of all our contributions and contributors the this thing in itself you know
[03:09:18]  like the whole you know copying of the remix docs as a like um uh infrastructure prototype for the our doc site or whatever like neither here nor there like we should have credited them
[03:09:29]  or we should have done something different i think the treatment we should just not done it but it it's kind of not in the end of the day that's not what people
[03:09:38]  remember like it's not that important it's it's unfortunate and i feel bad about it but the the the important thing is to understand like what this meant in terms of
[03:09:47]  our process and what we should be doing and how how we manage an open source community and an open source in general it's it's it's something that i've been putting
[03:09:55]  a lot of thought in and actually went on uh jacob's stream uh it's i think i posted here this this interview um if you do get a chance to
[03:10:05]  check it out um you should i you might put it on youtube eventually i mean if you if someone just wants to know what i'm thinking how i approach these things that's
[03:10:14]  the place this week in javascript is not it i don't want to spill the whole thing but we had a great conversation on that stream about the whole situation and how
[03:10:24]  you know uh just social media growing uh a project from one person you know in open source like what it means to do that and i think this has been my probably my
[03:10:35]  best stream i've ever done on that subject so do check that out um i i'm what i will say is i'm very very very very proud of how the uh solid
[03:10:45]  team uh approached it i mean we were getting it from all sides when we woke up that morning just people just sending even really mean dms and just sending like just people
[03:11:00]  calling out my bosses at work and just like just crazy stuff like trying to shame and all this stuff and there was nothing we we didn't come back on the aggressive or the
[03:11:10]  defensive we just we just owned our mistake and i'm i'm i'm i'm i'm i'm i'm hoping that like as i said i don't i get where
[03:11:21]  the outrage came from i'm hoping that you know like it's something we can get past and i i very much think so i it's funny i never sent a d
[03:11:29] m to ryan before this whole thing and we've never really talked but we have talked since then and uh we've made uh big progress and just hopefully kind of getting on
[03:11:39]  the same page about stuff i mean from time to time we do have different opinions and i mean you saw the tweet that we were talking about a few minutes ago like you know
[03:11:47]  i i think there's a lot of nuance and angles into these kind of conversations but it's not going to change how i approach things but in terms of like you know
[03:11:57]  talking about performance talking about the future of the web but i'm hoping that um we can be in a more amicable place where like big things like this don't blow up
[03:12:07]  because it's it's it's not good for anyone like it's hard on a project you know to be labeled that way and then the backlash that happens to you know the
[03:12:17]  the larger player in it you know when people are like you're picking on the little guy like like it just it's just lose lose um i mean i i the fires
[03:12:26] hip put out a video this week talking about how they're making what was a he made this new kind of router thing uh similar to turbo links in javascript a fl
[03:12:35] amethrower and in that video he he made nice mentions to solid start and quick city you know because we've been making good progress but he also mentioned the remix thing without
[03:12:43]  actually even mentioning solid like at the end of the day it wasn't our involvement which really was our involvement it was it was our fault you know um we did make the
[03:12:52]  mistake it was remix's reaction that ended up getting memed on the video so to speak like that was the takeaway no one even people forgot it was even us so i mean
[03:13:02]  i guess it's a lesson to learn for everyone it's it's it's you know it it's tricky um but yeah if you want to know more just watch the
[03:13:11]  stream with with jacob um it really got into it make js frameworks not war and that's why it was so warm that that that astro 11d co-t
[03:13:20] weet where marco and quick and everyone it was like a couple days later and everyone's just like fist pumping and and and and love and the truth of the matter is we
[03:13:28] 've been seeing a lot of that and i gotta give theo some big credit on that um he kind of ended up ghostwriting astro that's where it started i don
[03:13:36] 't know if if the tweet kind of went a little bit um under the radar here but if we go to astro um um astro's uh timeline history and there's
[03:13:47]  a lot here because astro released 1.0 like that's a big freaking deal so you're gonna have a lot of discussions new learn with jason's themes and
[03:13:57]  all that but in between all of the the hype and all the new stuff that's been going on with astro and people blogs astro makes this tweet august 12th
[03:14:08]  and this is the start of everything in this tweet astro just tweeted html and yeah this this this was theo he was just like he he was he was just
[03:14:22]  like let's let's like let's just tweet like let's just tweet each html and this everyone's just like yeah you know like bandwagon behind that one
[03:14:33]  that one thing and after that happened i mean you can see this kind of got a good amount of attention here it's funny that i haven't started i definitely did yeah
[03:14:44]  it's just twitter being bad um the the uh a couple days later fred's like yeah man i'm gonna roll and he ends up they they end up posting another another
[03:14:58]  one and i can see if i can find it css right it just that's what astro is right he's just like look we have html we have c
[03:15:08] ss this is the baseline of what we are um so like after as i said after this huge amount of kind of like negativity and open source like future like like i said
[03:15:22]  there were so many players in that that pylon like they're i'm glad it's good a lot of those tweets got deleted because like if if people saw what some of
[03:15:33]  those people said like like even there's some stuff even said by like some of the like capitalist or sort of the venture people behind remix that were pretty nasty towards me and
[03:15:44]  tried to like call out netlify and stuff like that like that stuff's all gone now it's good because like you don't want to look back at that and be
[03:15:52]  like whoa you know like that like that that's not good we juxtapose that with with these simple just like astro 1.0 out html c
[03:16:03] ss and honestly this thing has been has been everywhere right i still get notifications about it but the the you don't have to look far right then after the css went out
[03:16:17]  solid immediately got in on that and again it's it's about expressing what you stand for what you are we put in our parentheses probably because the you know that's what
[03:16:27]  the the signals or the function thunks or whatever you want to take it that's what quintessential solid right um and after that it just took on uh i think the next
[03:16:39]  one was quick um added put their dollar sign in and then honestly for everyone who was wondering like planet scale put sql v v test view a whole slew of
[03:16:55]  open source projects like you just look all started and different like all started just putting like their quintessential thing to being noxed like there's so many of them just started
[03:17:07]  making these one emoticon one symbol tweets one word kind of tweets and it all started from that astral html tweet but um that that's that's essentially the
[03:17:18]  order of things and it was really cool because everyone was having fun with it all like regardless um so you know it was really awesome to see um you know this kind of spirit
[03:17:31]  of friendliness um on twitter um after you know everything else yeah yeah no exactly yeah um and uh yeah i mean i don't usually give him the full the full props
[03:17:46]  on the stream but this was all theo like a hundred percent all all theo so um you know if you haven't checked out his streams you know haven't don't know
[03:18:00]  what he's about i'm gonna i'm gonna pull him right up on here so you guys can all see see him this this was this was his doing a positivity and look
[03:18:08]  yeah it's funny a couple months ago we had the same number of followers on twitter i've gone up like a thousand he's gone up like ten thousand he's doing great
[03:18:15]  work teaching great things to the slightly more advanced uh developer crowd you should check out his stuff um and as i said i'm just so happy that something so silly that he
[03:18:27]  kind of instigated you know for a couple days put so much positivity across the tech twitter stack so awesome awesome work theo um sorry where am i going i want to go
[03:18:42]  to my profile yeah where's this for stealing the dollar sign well our actual joke was that that uh theo actually came up with uh an idea for spelt he said they should
[03:18:56]  post equal sign which i think is kind of more clever even than the dollar sign like you sure the dollar sign does the thing and obviously jquery is the one who gets
[03:19:05]  the dollar sign uh references but quick was kind of like yeah okay well think of us as jquery if you want like there's like there's a certain parallel there between
[03:18:52]  like the resumability aspect but yeah we're svelte and the equal sign is kind of almost more fundamental like the way that they just use assignment to to basically
[03:19:23]  update their world anyways it's interesting um yeah so i was thinking about in some remix internal they know what it's not oh we we we also uh used remix's session
[03:19:39]  stuff and we but we we like we didn't properly credit them but we credit them like this is from remix thank you so much for me and drop the link uh we didn
[03:19:48] 't have the copy of the mit license so that's i meant by sloppy there was there was code but i mean this is mit open source stuff we did we did attribute them
[03:19:55]  or whatever like we're you know we just it wasn't done completely by the book um so there was some code involved but the big blow up was about the the prototype
[03:20:05]  docs site the the problem was just for a little bit thinking i said watch the stream to get more details the other one i mentioned with jacob was that um it wasn
[03:20:13] 't like linked to any of our like like our website or anything it was like a but it did get merged into our future docs um thing so it did get deployed somewhere that
[03:20:24] 's like like it wasn't part of our like you go to solid.js that you see docs it wasn't part of that it was like a future docs thing and
[03:20:31]  it did get deployed so yeah i mean there is not like there it wasn't great to say the least um but yeah firebase yeah firebase tweeted fire exactly yeah yeah
[03:20:47]  it's funny because i it's kind of like even telephone because i wonder if the whole meaning was like somewhat lost because at the beginning it was like especially for uh um where
[03:20:57]  it started with astro um and solid it was it was actually there's like a little nerves there because we'd always taken our stuff a little bit seriously on a lot of
[03:21:07]  the like tweeting and making sure like through the brand and all that and it was like it was almost embracing like yeah we are html like we are the functions like the
[03:21:17]  the thing that someone might even think is like the ugly side like it is what we are it's like accepting what what's fundamental to you um kind of element to it and
[03:21:28]  by the end of it we were seeing like hearts and stuff and flames and lightning bolts so like we might have lost that element by the time the meme finished but i mean
[03:21:38]  it did its impact because like when i see firebase and fire i'm like i i i would take it in a very different way than i take solids parentheses almost like are
[03:21:49]  they saying that like they are on fire like yeah but it i i think i i or yeah v test was the the check box that makes a lot of sense like yeah
[03:22:01]  i don't know i thought everyone's very clever and spent a lot of it's funny you think not much time to go into an emoticon but trying to pick the right
[03:22:09]  symbol the right thing to represent you it's it's it's sometimes harder to do something in fewer words um and i i just said i just it was an awesome thing to
[03:22:17]  be a part of dumpster fire god uh i mean i've heard people say that so but um yeah it i mean this is just such a happy topic i almost want
[03:22:31]  to end on it but the truth of the matter is i want to i want to talk about one more thing i want to talk about um yeah sorry there's this all i
[03:22:39]  i retweeted i want to talk about benchmarks um before we we wrap up what's marco's emoticon i don't know i mean that's a challenging one
[03:22:48]  we should have we should have workshopped it i'm sorry i was i i i that that that you're right that was me dropping the ball we definitely should have workshopped
[03:22:56]  that get a meeting going yeah yeah yeah yeah actually yeah i like it what do you think dylan yeah yeah yeah that's there you go that's marco's i
[03:23:17]  i actually you know what that that is actually perfect that in the same way the parentheses was perfect for solid that's that's awesome yeah go for it i i honestly it
[03:23:28] 's i don't think it's still too late i think i think it's it's good to to get in on it i don't know if you're serious dylan
[03:23:35]  but yeah go for it um yeah anyway uh yeah i want to talk about benchmarks for a minute um because benchmarks are a big part of what i do and it's one of
[03:23:47]  the places where i'm actually the most helpful um because you don't have to dig too deep into something to figure out where the bottlenecks and the problems are like you
[03:23:58]  have to dig deep but you don't have to like it's harder to write the solution than it is to find the problems um and understand and they have good understanding of like
[03:24:05]  what to look into like it still requires a certain amount of expertise and this is a place that i find that i'm exceptionally uh sexual it's live is it actually live
[03:24:14]  so now now i want to check now i want to check uh let me see is it live it is live okay i'm in everybody everybody should come over to marco dev
[03:24:30]  team and and give a heart i'm i'm actually gonna retweet this one yeah yeah all right yeah honestly this this this one actually captures the thing because as you know
[03:24:55]  the the the tags are marco's power like they're part of the analysis especially tag api this is why marco six is so incredible like the way that it
[03:25:04]  can do fine-grained partial hydration at a level that no framework has ever done before like just it's amazing but it's also the thing that kind of is the stigma
[03:25:14]  they're like oh yeah i'm gonna do the syntax like this is owning it this is what the meaning of this tweet uh in essence like as i said it's like it
[03:25:21] 's like this the parentheses and solid i think this is this is this is yeah i really dropped the ball on that one i should have got it got in earlier david
[03:25:30]  and i want to take credit for it yeah it was mit licensed i know that joke's not going to get old is it um yeah no yeah yeah no that's that
[03:25:46] 's awesome i'm just happy to see everyone in on this um all right uh sorry so yeah benchmarks um what i want to talk about benchmark well i i was i was
[03:26:02]  doing a few different benchmarks um type topics and the the first one here was actually the builder guys are like it's time it's go time like let's start talking about performance
[03:26:14]  with quick we've been working on this stuff for a long time i think the big thing is they finally got rid of their domino that you're using html
[03:26:21]  like um on the server like using like a emulated dom on the server which is super super slow and they've replaced it with a string renderer this week so they're
[03:26:30]  like let's let's do this like i think they were testing stuff and they're like oh yeah our server rendering is not very fast um our hydration is amazing but server rendering
[03:26:38]  is not fast so they replaced it and they're like okay it's go time so they started working on this benchmark and honestly in the process benchmark we've hit you know
[03:26:47]  every little trap that you hit this is the hardest thing i love this process and maybe i think the results were posted public too soon i because i think i think you need to
[03:26:58]  you know i mean there's a question where if you create a benchmark you just post it and they get other people to come and help you fix it and learn stuff because it
[03:27:06]  does like if i'm next to remix and in this one or nux i'm like not very happy i mean obviously i posted this so you guys are gonna be like
[03:27:15]  but i to be fair um it was in like this stuff was already posted i like the cat was already out of the bag um and what what i what i noted was that
[03:27:26]  um like some of these sizes seem weird like this is way too big for astro this um and if i open this one up so yeah this is way too big for ast
[03:27:36] ro this is way too big for quick um you know what the hell is going on over here well some of it is some of those frameworks weren't g-zipped
[03:27:44]  in the case of the react frameworks um they were pulling in components from other pages and they weren't getting proper tree shaking so these things all affect and directly impact these kind of
[03:27:54]  things but there was actually a really positive that came out of this because i was working on solid 1.5 and i was working on performance measuring things and the first version
[03:28:04]  of the benchmark that steve posted um uh not the first version even the second version this is the first one that was like half decent the first one was like really bad but
[03:28:14]  this one was like better had solid at 1.1 and i was like we ate a second we got really fast server rendering and i know for a fact much faster than
[03:28:24]  say like i don't know about marco's fast or whatever quick has got this new one i know it's fast astro i haven't tested yet but i suspected it
[03:28:32]  fast but i knew for a fact that like compared to preact like which isn't fresh we should definitely be much much faster on server rendering this this is just i've measured
[03:28:40]  this in several places so why are we so slow and this was legit i i looked into an issue and i found out that the way we're inserting assets in the head
[03:28:53]  was actually causing a huge bottleneck um way bigger than you'd expect obviously that's a hello world page so it might get buried in larger pages but it was actually causing a
[03:29:02]  noticeable bottleneck on first paint it was actually like slowing things down considerably even on the basic case and by doing that it like i fixed it as part of 1.5
[03:29:14]  beta um which we're getting close to 1.5 release now i was able to completely uh change the dynamic here and and fix it so like benchmarks are great for framework authors
[03:29:24]  to find um bugs and issues like this this test here isn't it's a it's a static html page that happens to serve javascript there isn't really
[03:29:34]  any hydration i mean this one's this one actually i'm looking at here is a to-do app but still minimal hydration hydration shouldn't be the thing that's bottlene
[03:29:39] cking here this is mainly showing what the overhead of the framework is it might not even be the renderer like like like how fast pre-act or solid rendered had no impact
[03:29:50]  compared to some like secondary thing that we're doing in solid start to inject the assets right the fact that you know svelte is 1.3 here probably is not a
[03:29:59]  testament to how fast svelte server renders but a testament to some mechanism bottleneck you know in something about svelte kit or whatever like you're only as
[03:30:08]  or even the way the comp you know you're only as fast as the the next bottleneck you hit so to speak and this is important to understand when you're looking at
[03:30:17]  performance one of the challenges this benchmark has in particular is that it uses mitosis to generate the components it's really clever because that means there's one component implementation and all the
[03:30:26]  frameworks get their framework version so this is like a really cool use of mitosis to kind of show off how you can like build the same thing but the problem is mit
[03:30:34] osis isn't going to be equivalently optimized for every framework like in solid it's using so many unoptimal patterns right now and i'm sure there'll be bugs and
[03:30:41]  stuff we'll find in the other frameworks too but i mean in terms of quick way of just taking the cli of all these frameworks out of the box without doing any
[03:30:50]  tweaking like literally like this is rendering a sync page but we're not using render sync he's using render async he's using like the default settings um for all these
[03:30:59]  frameworks you just get this like just this general idea of what's going on and i actually think maybe that this sort of test with mitosis might only be good for the hello
[03:31:11]  world so that to do mcc is a very simple application of the world simply from the fact that um there's like so many other details that go into this stuff but
[03:31:20]  what it did do as i said which was real value was show the cost of just having a framework present um so um i think that's cool i think there's gonna be
[03:31:29]  more work into cleaning this up he's added hydrogen and gatsby and a bunch of stuff there kind of going back to drawing board i've been working with them closely
[03:31:37]  like reporting on bugs and stuff i find and stuff i i'm very intent in seeing this um because as you guys all know i want to start working on benchmarking tools and
[03:31:45]  there's parts of this harness that i kind of want i have a slightly different goal um i want to test the framework themselves in the most optimal way so i when i get
[03:31:53]  to round to benchmarking i won't be using mitosis i won't be looking at comparing nuxt to remix to svelte kit to quick city or whatever i don
[03:32:01] 't care about that i'm going to be testing like react versus felt versus solid versus preact like view like the underlying libraries and look at the costs of their hydration techniques
[03:32:11]  and rendering i don't really care about the meta framework but i think for end users these kind of civil baseline tests might actually give them decent indications of stuff so i think i
[03:32:21]  think this i think there's still a lot of work to do but i thought um it is interesting because i said we've found issues with bundling we've found issues
[03:32:28]  with gzip and these are it's tricky because you don't want to depict anyone wrong as i said i yeah i i don't know i think i think this is going
[03:32:37]  to take a little bit of time to get right but i i i'm very happy to see some new end-to-end type tests that aren't just like the js
[03:32:44]  framework benchmark um uh some questions here why no load event right this is a good thing he he was playing with lcp and he was getting wacky numbers i actually
[03:32:57]  saw some the other day that he hasn't that steve hasn't posted yet and i was just like okay yeah stuff is just bonkers like there's there's some frameworks
[03:33:05]  that we're getting like a first paint of like i don't know like let's say one second or something and then getting like it was a different demo than this one but
[03:33:15]  then getting like a larger contentful paint of six seconds and it's like it's a synchronous render async render there's like nothing should be rendering on the client it
[03:33:23] 's literally the page you see like there's no possible way that the fcp and the lcp should be different and yet they were in a number of places so
[03:33:29]  i think there's still a lot of stuff to figure out um that's what i'm saying these benchmarks are not ready in any sort of way this might have been posted premature
[03:33:37] ly but i'm glad because i got involved and i've been working on i've been improving solid because of it and i've been working on making these benchmarks better because i
[03:33:44]  think there is value in it if we can make it work um what do we got here does quick use vdom or adding stuff on an answer um quick does use a
[03:33:57]  vdom in the browser on the server they use string concatenating similar to marco or solid or svelte um or view actually i was talking to evan he
[03:34:06]  actually been doing string concatenation and view but on the client they use a vdom so it's kind of it's a little bit pieces of the code smaller to
[03:34:16]  import um you know like the event handlers and stuff but then and the the effects you know so you can perform side effects you know based off those inputs but like if something
[03:34:27]  would cause a component to update you end up downloading the uh component view code or whatever like it it does do a vdom thing where it renders a virtual dom and
[03:34:40]  diffs it and does that thing so at instantiation time it gets all the information it needs to to like know where to point things from the html and it does
[03:34:52]  store a bit a bit of state in html um but the vdoms then do the updates to my understanding um and actually i have a better understanding because i
[03:35:02] 've been working with the quick guys to get the js framework benchmark for quick um it's still too early to give results it was a first run but i we you know i
[03:35:12]  i had made an implementation i just like guys we don't have keyed they're like they implemented keyed i i was able to run the tests all the way through so
[03:35:20]  they have the correct behavior um i noticed a couple like memory leaks and stuff so they're going to work on that and get an implementation for the js framework benchmark um similarly
[03:35:29]  million js um which i pointed out last week or whatever um they have an open pr on the js framework benchmark so um we're going to get some normalization on the client
[03:35:37]  side performance on some of these new fast frameworks and see where things land so yeah again people want help or working on that stuff i'm more than happy to this is part of
[03:35:46]  this is part of my work i enjoy i get that purview to help other frameworks improve their performance um especially around benchmarks i'm very very um i've spent a lot
[03:35:55]  of times in benchmarks so um yeah i'm pretty happy about that would quick be more efficient to find green rendering um it depends on what you talk about like okay on client side
[03:36:09]  updates like i probably like quite likely um i mean here's the thing there's a trade-off on serialization when you go fine-grained um because you you
[03:36:22]  end up like in theory having more data points although you can skip them and if you haven't checked it out aiden um the creator millions by the way um go back and
[03:36:33]  check out my stream on marco six marco six is like if you took svelte's compilation with solids fine-grained and made it resumable it
[03:36:44] 's literally like from a pure technical standpoint probably the most optimal i've seen the whole resumable thing code splitting tree shaking it's it's kind of in insane like we
[03:36:56]  like obviously these aren't g-zipped these numbers here right like uh like this like quick is 55 and but if you g-zipped it it'd be more
[03:37:09]  like 22 let's say okay so let's pretend quick's like 20 ish okay like something around here right for this to do mbc um and obviously marco's
[03:37:18]  in this range too which is marco five but marco six um a to do mbc or two app in marco six i think michael made an example
[03:37:29]  it was uh it was 2.2 kilobytes all in like basically the because uh marco doesn't have that loader thing where it does the lazy loading it's
[03:37:43]  all eager it's basically the size of the it's probably very similar i mean this isn't zipped so it's not quite the right comparison but essentially marco 6
[03:37:52]  you know i don't it's not the same to do example but like i i we're talking about two kilobytes instead of 20 kilobytes like it's using
[03:38:01]  fine-grained reactivity for for doing this stuff is insane um honestly like if you're into the the future of web dev and compilers and like want to understand
[03:38:12]  like the best possible way to do something i would look at marco six for inspiration um it's incredible amount of work to get to that level to cross-file
[03:38:20]  analysis to understand exactly what's reactive across every like interaction like marco six compiler is insane but um yeah i think fine-grained reactivity could improve the performance i think
[03:38:33]  it's a lot of work to get there and it i've had discussions with with uh with michael about this and like he's like i don't know if it
[03:38:41] 's worth the effort you know but um in my opinion definitely um i i talked about it previously but i gotta i gotta wait to see the benchmarks on this one because here's
[03:38:55]  the thing can i can i show you guys something i i didn't get too technical but since we're talking benchmarks i probably should i'll i'm gonna grab something like
[03:39:02]  the js framework benchmark and um and i'm going to grab the current results i can't remember where we're at on these i mean yeah okay so yeah we were seeing vanilla
[03:39:14]  getting farther away from the frameworks i actually got 1.5 is going to improve the performance in solid on the js framework benchmark for for the first time in years um i
[03:39:23]  i haven't been able to find performance improvement and our buddy fabio of critter bobe pointed me into some places like and legit performance improvement on select like look at his
[03:39:34]  select 12.9 for solid form 14.3 he found a place where i could make uh improvements so um that's the awesome part about working with people in the community and
[03:39:44]  doing this kind of benchmarking stuff with the framework authors and people on the discord and stuff you know a lot this conversation came on solid discord i've got a lot of
[03:39:51]  you know framework authors hanging out i want to show you something okay what do i want to show you what i want to show you and let's blow this up a little bit
[03:39:58]  so we can see better but what i want to show you is the fastest vdom library in here um is let's see who is it this week it always changes a little
[03:40:11]  bit okay it's in one more it could be inferno it could be evie these guys are all super fast vdoms okay let's use inferno as an example
[03:40:17]  it sits about here about 112 right let's say um i mean it really depends but essentially this is a range of the fastest optimized vdom technically block dom i guess is
[03:40:27]  the tech the the very fastest because it uses html clone templating similar to solid um as i said we're battling it out on small numbers and small increments we
[03:40:37]  keep on switching places but what i want to what i want to get at is that preact today is somewhere over here yeah there it is okay we have preact today
[03:40:51]  right and preact is actually pretty good at most things it's just not very good it gets hurt a bit by partial updates and it gets hurt a lot by the selection and
[03:41:00]  what partial updates is is updating every 10th row by uh like like adding there's basically a thousand rows and there's a label and basically update that label on every 10
[03:41:10] th row that's partial update and select rows is basically like a single select where you select row two row three and stuff so this is where it gets hurt these are fine-
[03:41:18] grained things these are things that benefit from fine-grained uh reactivity but the challenge is more granular rendering generally or more granular like tracking actually adds to creation costs
[03:41:34]  usually takes more memory and it's usually more expensive at creation time and to be fair um if i scroll up here view is a lot is an example of a library that combines
[03:41:44]  fine-grained reactivity with a renderer in a very internally optimized way and historically view was actually back by preact actually on these benchmarks they made a huge jump
[03:41:58]  and kind of leapfrog svelte when they made one small change which was the ability to memoize their their templates because the problem is that in a reactive library um
[03:42:10]  you actually want less components um you want less of these boundaries i know it seems weird you want to be less fine-grained because the fine-grained has a creation
[03:42:19]  cost um as long as the boundary is in the right place but in a vdom library you want more components because each component um lets it um separate its um it's
[03:42:31]  run more specifically so basically it's okay in a fine-grained library because you update things fine-grained to have bigger components because you don't want to pay the
[03:42:42]  creation cost uh of being so fine-grained so but on the vdom side it's the exact opposite so you have view which is sitting there getting the boast the
[03:42:52]  worst of both worlds essentially until they figured out a way to basically inject memoization into their templates so you you could basically for the vdom's sake make smaller components but keep
[03:43:02]  your components large for the reactive sake and that's how they finally kind of slide it in i would not be surprised if the preact thing lands them in view territory because all
[03:43:12]  you're doing is trading numbers right you're like in theory unless they implement something like block doms cloning you're going to make these numbers better at the cost of
[03:43:22]  these numbers right and as long as the the balance is in the balance is fine you know because those numbers are really hurting them in theory that should leapfrog their overall performance
[03:43:34]  a bit but what i'm getting at is look at the preacts uh uh selection and partial performance in this benchmark it's 118 and it's 30 okay let's
[03:43:46]  go to inferno inferno not only is already faster to render it's already in the 14 and the 93s so like i'm we're gonna have to see and how
[03:43:58]  this benchmarks but my my and this doesn't add the extra overhead of a reactive system to apply here so my gut feeling is this will have big dx improvements for people using
[03:44:09]  preact it'll be easier to write more performant things because they won't have to worry about re-renders it'll actually let people write faster apps but from a
[03:44:17]  pure performance rendering standpoint i it might move things forward a little bit this is my gut like my what i think may begin to view territory but like a fast vdom is
[03:44:28]  going to be still much faster that's that's probably but i mean i don't know it's possible that we got we got aiden here for millions and he might know
[03:44:36]  something that i i don't know um right so because he's been working on something similar with a compiler so that that that's just that if you wanted me to speculate that
[03:44:49] 's that's what i would expect because there's always a trade-off with reactivity yeah i mean we could release it i think the thing keeps on changing if you
[03:45:02]  if the if you look hard enough i think you can find the implementation and i actually did post the results a month ago or so or two months ago in an article um if
[03:45:11]  you wanted to know but the the problem is the whole measuring scale changed because essentially um they changed computers and it moved but if you want to know last time i tested um
[03:45:22]  tested marco it was in the mid-teens so i don't know where that sits up in the current world but essentially i think it was faster than it was between
[03:45:32]  inferno and lit um essentially so somewhere in the marco 6 is somewhere in this range um i i won't know until we actually officially submit it but if you want
[03:45:41]  an idea it's kind of it's kind of like it's an it's a it's an it's a it's a it's a in a good good zone in
[03:45:49]  here of the fastest libraries yeah i mean i don't want to speculate on on the pre-act solution i think it's it's a fine-grained if it is
[03:46:03]  a fine-grained update mechanism baked on top of a vdom thing then those other libraries will have to adopt it right like in order to actually get the granular updates
[03:46:13]  so i'm not sure but we'll have to learn more current stage of millions of flattened vdom hoist vnodes currently does but in the future we're looking
[03:46:22]  at how to apply vdom entirely possible yeah okay yeah and i think that i think that that's interesting but yes the the the hoisting and the static stuff is
[03:46:29]  actually a big part is the view does it um and interestingly inferno has its own data structure that's when i when i looked at um millions generated code in that code bl
[03:46:39] itz that's the first thing i looked at i was like uh-huh not using functions where possible like hyperscript functions and compiling to objects for jsx that's
[03:46:46]  something that inferno has always done and worked to great to their benefit i'm looking forward to see how that all pans out but right now the guy who maintains the benchmarks on
[03:46:54]  vacation for a few weeks much deserved so we're not going to see any updates soon yeah thank you for joining um yeah so i mean this this is this is this is
[03:47:07]  this is an this is an area where this is this helps framework authors we we have conversations like this like i learned some more optimizations right the um fabio from bobe
[03:47:18]  has been on a roll right i was talking about benchmarking and stuff he was sitting there doing some benchmarks you know and he was like he was like you know what element
[03:47:27]  dot append can be much faster than append child and i i when he said this i was like what do you what are you what are you talking about that's crazy i know
[03:47:34]  that seems weird to you all but this is the kind of stuff that i'm used to seeing like it's kind of insane you would expect calling append with a list of a
[03:47:43]  like a list like an array of children this is the kind of stuff you have to deal on the performance side you know you'd expect it to be faster than iterating
[03:47:50]  over a list and calling append like n times but it's actually not and it's like never been and you're like oh maybe it's the spread deop no it's
[03:47:59]  not that you put you can go apply you can do whatever it literally is just half the speed and has been that way and it's not just chrome this is done in chrome
[03:48:09]  it's in firefox it's pretty much in every browser so there's probably something that i'm not aware of here where what would clearly make sense to be the more
[03:48:17]  optimizable api is actually slower than doing this yeah i i honestly i wish i knew more to to explain this and this this this was taken like just the other day so
[03:48:29]  this is still true and testing firefox and chrome generally speaking calling separate append calls instead of child calls instead of like a big append is faster um in solid we actually have
[03:48:41]  an like a a section when you do a diff and you realize that nothing at the end of the list is in the old list and you can just add the rest of the
[03:48:49]  nodes you know in the in the data diff we actually have a function that does this rather than call append it adds more code but we literally have append children to do this
[03:48:59]  so we don't do this i know that seems insane right but it it is actually twice as fast so when when fabio looks at this and finds out that he hits this
[03:49:15]  credible slowdown mutation observer if if you add a mutation observer each separate append child call gets a mutation record so it balloons huge when you have thousands of records whereas a single
[03:49:27]  append call would only create one mutation observer record and again this makes sense right like you're doing separate calls versus a single call they just trigger it maybe they should batch it but
[03:49:38]  like that's just how it works but it completely changes it um i think somewhere in here he was he was like like it was 350 milliseconds instead of 30 milliseconds like like like
[03:49:51]  almost half a second like on on whatever he was looking at this huge and jason's like it's also true document fragment yeah like and the funny thing is i love
[03:50:02]  it because we got all the framework authors here andrea jason we we we all use append child we we always have because the appends like the newer api and it
[03:50:11] 's never been as fast so like we're more likely to have been using append child instead of append just because like history and then it was never slow so we never switched it
[03:50:19]  but and look at this i proposed batch dom mutations in an api and they laughed at me yet again he's he's had some friction you just experienced what i would i
[03:50:31] 've said would perform better in practice there should be a dom api to stop repainting and pre-flowing and dispatching until it's explicitly resumed and also that
[03:50:38]  won't happen right like that i mean benchmarking is how we find out stuff like this like weird browser act you know stuff you know and as i said i couldn't
[03:50:55]  help but like put the eyeballs up because like the truth of the matter is what am i supposed to do now like where was i i made a joke solid i mean we use
[03:51:08]  append child everywhere because it's twice as fast until it's not you know um i have like historically i've actually like benchmark suites where i test different micro implementations
[03:51:20]  to see if they ever change to know like where things are at um so like this i guess this is one of those ones you want to keep track of but i mean it
[03:51:29] 's yeah i mean it's kind of crazy right like how you know a mutation observer is like throwing a hand grenade into a well-established thing that like all the
[03:51:38]  frameworks are doing it's possible but but if if i'm reading andrea's comments properly it's intentional so yeah i mean yeah yeah yeah exactly so i mean i don
[03:52:02] 't know what kind of message to leave that with but yeah benchmarking um like this is the work we do so you don't have to do it so to speak right um
[03:52:16]  so when stuff like this comes across like i mean this seems like such a small issue but it's just like yeah i don't know is this why there's the like
[03:52:28]  always like little bits of friction on the browser side and the framework authors and like just it it's an ongoing conversation um you know originally i was gonna have that lead into
[03:52:39]  this conversation which we already had but um i mean things keep on getting better um there's hope there's funny memes so um you know i'm we'll get there yeah as
[03:52:55]  dylan was saying there's about five small things the platform could do to make framework so happy yeah yeah and i i'm gathering some of the things are just hard to
[03:53:05]  do for some legacy reason and they have some reason not doing it and just we are where we are um i i mean i got that real impression uh when when we brought up
[03:53:15]  uh streaming shadow dom with justin he was like you know i i really want that to pass he's like i'm gonna keep on fighting for it too it's just these
[03:53:25]  things take time and there's just a lot of standards are hard um but with that and this lovely marco tweet i'm gonna call it for this week in javas
[03:53:39] cript so thank you okay anyway um yeah if you guys have been noticing i've been like addressing doing stuff a little bit more that i have been clipping this week in j
[03:53:55] avascript for separate shorter videos i haven't actually released um any of them yet i wanted to make some nice covers but um i'm gonna start making uh shorter clips where it
[03:54:04]  makes possible i know it's more time investment but i think it's worth it um better look on content i don't know if anyone else has anything they want to add to
[03:54:12]  the stream but um i'm i'm getting ready to wrap up here i think so uh thank you all for for joining me oh wait there's one more benchmark from steve
[03:54:24]  this week in javascript did he publish it today is this what's happening like i'm in the notifications and i haven't looked yet i'm not gonna make this
[03:54:32]  obviously is not gonna make the this week in javascript but let's let's see if we can find it he just posted it of course he did oh what
[03:54:54]  kind of what kind of what kind of yeah i guess he probably made like a very large html demo yeah i want to i want to look at this as i
[03:55:13]  said because to my knowledge um to the the performance of the raw html um rendering is basically yeah yeah i'm gonna have to look at this one oh yeah yeah
[03:55:42]  hopefully you get some insight from this i mean obviously a very specific viewpoint on this stuff but i i do try and look into as much stuff as i can yeah i mean it
[03:55:54] 's i've been going now for like four hours i i we aren't there's a there's a there's a challenging uh balance here right because you know we got
[03:56:05]  at a certain viewership you can almost have the streams self-propell each of themselves i don't know if you watch some of the bigger streamers on twitch and whatnot
[03:56:14]  even on the tech space they'll have like four or five hundred six hundred people watching and the conversation will just propel itself and keep the stream going and engaging it and
[03:56:23]  whatnot um it's like this catch-22 right until you get to um to that kind of like interactivity and that kind of thing um it's it's hard to kind
[03:56:34]  of keep that going i don't know maybe that's just my opinion maybe i can just sit here drinking my drink all uh all evening too and no one would uh yeah
[03:56:52]  so yeah um oh yeah some other questions here yes yes uh what do we got here quick solid start update um solid start um has been waiting there's one api that has
[03:57:05]  been finalized and that's the action api i showed you guys in the to do it's almost there but we want to refine it a little bit better someone pointed out
[03:57:14]  the error thing and i was aware of it and i had some ideas but actually playing with more i want to change how the error apis work on the on the um
[03:57:22]  on the um on the uh sorry on the on the actions so we're going we're we're we're we're we're adjusting that but i think the the bigger thing
[03:57:31]  though is um how should i put it um we're waiting on 1.5 i'm just wrapping up the bow on solid 1.5 that's a bunch of performance
[03:57:44]  improvements it lets us put stores and resources which is going to be critical here and once we have that basis i can finish the action stuff um and the resource the server data stuff
[03:57:56]  it's called um and we we can basically just put a stamp on the api and change into our next mode which means we'll get like a beta version minus the docs
[03:58:06]  which then i will change my focus to work on but essentially what we're sitting right now is we're like it's it's just like solid 1.5 shoring
[03:58:14]  up this last api implementation like i need like a day to do that so like it just i i'm streaming here if i if i wasn't streaming today the solids that
[03:58:24]  part of solid start probably would have already been written so yeah it's just a matter of uh probably sunday or early next week we'll kind of stabilize on those ap
[03:58:34] is um feeds get us all 1.5 release out hopefully beginning of next week and uh we'll we'll we'll be working towards the the official beta release this whole start
[03:58:46]  um yeah and that's the thing stop getting distracted by benchmarks like as i said from a pure html standpoint i i know solid's rendering is super fast so um
[03:59:02]  i am i i'm curious to see what's going on there um i've never there's never been a benchmark even after i went in and like looked at the the other
[03:59:11]  ones which were steve originally posted there's i've never seen a benchmark where solid wasn't the fastest server render so i do want to actually see what kind of scenarios we
[03:59:20]  are slower in yeah if there's routing in that example it's it could definitely be that i've actually i take that back the fastify um ssr demo um
[03:59:31]  that was done um actually um if there's routing that one could do it because the fastfire demo actually showed um that the router was actually a bigger bottleneck than a lot
[03:59:43]  of the other stuff um on solids ssr and the examples we've done to date haven't actually had the router in it so that might be my next place of
[03:59:50]  focus that's a good point right and you've got to remember the guys using non-client side routing like the mpa frameworks are going to have like a a leg
[03:59:58]  up essentially um but i think that's solvable if we approach the route um generation and initialization the right way on the server um because yeah i i think there's solutions
[04:00:15]  to that but that's that's a good insight um dylan i mean we've seen that repeatedly as well um so yeah we'll we'll take a look um oh
[04:00:27]  someone who mentioned also of the the the demo note the dino announcement right i actually didn't see this so maybe you guys can can help me find it because i i i
[04:00:41]  saw some chatter but i actually didn't see this and you're right i probably should have done this big changes ahead for dino right yeah compatibility with node that's huge
[04:00:51]  i remember that fastest javascript runtime huh oh this is gonna heat up interestingly this is this is something worth talking about competition go think our goal is to make you know the
[04:01:02]  fastest javascript runtime full stop oh that's that that that's that's that's commitment i i i i often say that you shouldn't sell yourself completely on performance
[04:01:21]  because someone else is always going to come that's going to be faster it's just unavoidable because like there's always going to be someone willing to spend more time on
[04:01:32]  speed than you like i i acknowledge this like salt's fast i got like really far ahead and and jump-started it um but like the the reason i'm looking
[04:01:41]  into this benchmark with steve here on in terms of like figuring out like why salt's in the middle is because there's probably a bottleneck or something to address not because
[04:01:51]  i'm trying to edge out the the next two percent or something you know what i mean like it's there's there's probably a problem and we need to know about it
[04:01:57]  to have better experience but to say to to actually commit to being the fastest like for all time is an incredible investment you basically need to like be doing performance all the time
[04:02:12]  and being like like just religiously working on it um and the thing is i think dino is the project where like they're trying to build stuff and ship products and
[04:02:26]  do things you know they they have a team and they're working on this stuff like i don't know about you but i wouldn't want to be in a competition with j
[04:02:33] ared summer like straight up i know that guy is going to make sure that his thing's faster you you will never be fastest like i'm like i've got people in solid
[04:02:45] 's community like that i don't want to take on uh fabio because i'm going to be working on solid i'm going to be working on this ssr
[04:02:52]  stuff if if if he wants to make if he wants vobi to win the js framework benchmark he will make vobi win the js framework benchmark i have no doubts about it
[04:03:00]  so like yeah i mean you got to choose your battles and i mean i mean good on them i think taking performance seriously is is it's good saying that you're going to
[04:03:17]  be the the fastest javascript runtime um that that takes balls um because some little guy is going to ruin your lunch like it's just that's how these things go
[04:03:28]  um oh man that's yeah this is almost yeah i mean this is you're watching a reaction video here this is this is like news to me and um yeah yeah yeah
[04:03:45]  um i guess we're gonna have to see how this goes i i mean i love dino i think they have great edge functions that i think they have a great runtime i
[04:03:57]  i'm super stoked to get more stuff on there i want to i want more solid stuff on there i want to be able to do more with it but like there's
[04:04:06]  always someone who's going to be faster and like are you prepared to to take that on uh i'm just watching some of the comments in the stream um let's see what
[04:04:25]  we got here i like the four hour streams yeah i mean if it works for you i'm hoping it does yeah somebody doesn't need to worry about legacy or existing use
[04:04:36]  cases yeah yeah i mean these are all true things you know um every time ryan says um we take a drink next stream there you go my wife has created a drinking game
[04:04:53]  for you all uh yeah yeah yeah oh okay here we go yeah like do you think you you think you think yeah this this is this is this is this is this is
[04:05:10]  this is good this is good stuff i wish i could maybe i can copy this yeah that's streamer it's not gonna let me copy it let's just go to j
[04:05:16] ared's account and see it because like i i don't know uh yeah yeah okay so this is thing fast all in one javascript like don't get me wrong
[04:05:33]  bun's missing stuff we know that there's gaps and the things are being worked on and it's you know this but reset expectations did i miss it feels unnatural did the
[04:05:54]  chat wait is there something am i going to find this on my own or just jared post so many performance things that i'm never going to find it oh right sorry
[04:06:12]  i'm not sharing my screen huh thank you sorry uh i yeah because i yeah sorry i i was i was reading the dino article without actually sharing my screen on it um
[04:06:30]  this this whole thing right yeah sorry this this is this is this is the phrasing that i that they got that got me we are 100 confident that in the stack and
[04:06:38]  that they're gonna be but sorry yeah i wish i could get maybe i should just type in the the number oh man those numbers are so long this is so annoying that i
[04:06:50]  can't actually copy it from here one five six oh five eight maybe i can somebody like maybe discord it to me if you can get it um let's see if i can
[04:07:02]  find it uh where is it let's see i i i have to i have to imagine that someone has been talking about this somewhere yes somebody somebody send me a private chat
[04:07:20]  on discord so i can get the link this is actually really annoying that i can't actually copy this in stream yard uh sorry uh am i not showing the the link here
[04:07:33]  it is i don't i mean i could type it in maybe maybe that's what i'm down to here status one five six zero five eight four eight two one five
[04:07:54]  two four four two six i gotta give twitter some credit that at least the these are okay here we go that at least the the um the like being a number sequence and
[04:08:10]  not an alphanumeric sequence actually makes a little bit easier to type all right thanks you all i ended up typing it anyways i was just too lazy oh there we
[04:08:21]  go next version bun is two times faster at async ht requests yeah i mean this is this is this is going to keep on happening you realize like you're going to
[04:08:32]  post a benchmark and then jared's going to be like no i need to be faster and then you can go back and be faster and then like like you don't
[04:08:38]  want to waste your time on this there's better things to waste your time on i don't know i i i this this this i mean i don't know if i'm
[04:08:51]  supposed to make sense of all this but all i know is that this is what you're getting into um yeah anyway um yeah performance and benchmarks are nasty business um so yep
[04:09:20]  here's the thing i want to i want to call out this comment because there's two sides of the coin here bun looks scary fast so what's going to happen to d
[04:09:31] ino nothing being the fastest never actually did anything being fast is important being dedicated to performance is important when you can make changes that drastically improve the experience of people because you've
[04:09:50]  cleared some kind of performance cliff or something that makes a big deal but if performance is hardly everything um and it's easy to get suckered into these like spending all your
[04:10:10]  time there working on it um because of that like as i said like and it's tricky because once you're invested you're invested you're invested right um but if it
[04:10:21]  if it goes beyond the point of you you know offering the the experience here's the thing solid super performance because and it's kind of similar to what we're doing marco
[04:10:34]  six we wanted to know what was possible with this approach so we were like like some people build products different ways some people build products from like a mvp kind of
[04:10:48]  mentality you know in different ways like even even when they're considered minimal viable products some people like just go okay i'm just gonna get something was it make it like was a
[04:10:58]  good fast right or something like i can't remember the order of it but like that whole thing is like make it good make it right make it fast i can't i
[04:11:07]  can't remember but you you know what i'm saying like but sometimes when you're prototyping a new technology a new area you're like it's not even worth going to
[04:11:17]  if the performance isn't good enough like people won't accept it so it's like working on something like resumability or that you you have to actually confirm that you're
[04:11:26]  going to get the benefits with it otherwise why are you going to spend a whole much time sinking into it you need to make the prototype and you need to push it when
[04:11:33]  i made solid it was like reactivity already existed we didn't need a new framework did we i needed to see that the performance was real like that's why i got into
[04:11:44]  performance and since that point the performance you know i've kept vigilant but essentially it hasn't changed very much and i feel like with like with bun and stuff like that's his
[04:11:55]  approach he's like i want to show that javascript run times can be fast or whatnot like you know he wants to show that he could accomplish this and that's
[04:12:07]  his whole mission almost like the prototype thing things obviously change when you get to 1.0 you lose a little bit of your edge you know whatever but you you start in this
[04:12:13]  place where you're just like some projects are just about proving what is possible but if trying to chase performance after the fact is incredibly expensive endeavor right like anyone who's tried
[04:12:33]  to like who's written a site and then have it like get to a point you're like oh crap we we need to look at performance you know there's a low-
[04:12:40] hanging fruit there's expensive fruit and you don't get to do a rewrite and not very often at least and so like i i i guess that's sort of what
[04:12:51]  what i'm getting at with with this whole angle and performance thing like at a certain point you have better things to do better ways to provide better stuff for your customer as long
[04:13:02]  as long as you are performance and you do a good job you'll you'll you'll do fine yes because there will be someone like that if you do a really good
[04:13:15]  job on performance though like a really good job you'll find that the those other people will come to at least respect you which is which is good because sometimes those people can be
[04:13:28]  a little bit you know facetious or not you're sorry they can be like a little bit aggressive because like they're they've got something to prove one of the
[04:13:35]  things i've benefited on the solid side is a lot of people have come in and been like oh yeah i can do that i can make something fast like solid and they they
[04:13:43]  have but they've gone like right up to it or even in some cases like beat it on metrics and stuff but the amount of work that they did to get there it took
[04:13:52]  them months every time you know uh like they they by the end of it they come they're appreciated because they had to work so hard to get there um so like don
[04:14:01] 't get me wrong i think this is like the opposite message to like don't work on performance that you hear people talk about or like it's good enough even though i am
[04:14:10]  saying in this case it's good enough it it's more of like someone will be faster than you and it's good that they're working on something faster than you don't
[04:14:20]  be angry about it just it you choose what what you value at what stage you're at oh man advocating for you it's funny i mean we talked about rust and j
[04:14:36] avascript frameworks um it's it's it's i i i love that people are working on this and like maybe one day something like you could kind of enter into the
[04:14:47]  same category as some of the fastest javascript frameworks um that day isn't today that day isn't tomorrow that day isn't probably for two or three years at least
[04:14:58]  but um i i know there's people hot on it and hot on rust and i think that's great i think i think the javascript paradox i talked about earlier is
[04:15:06]  is going to be the the challenge there um so we'll we'll have to you know we'll have to see how things evolve um you know but it's cool because
[04:15:17]  like rust or sorry you is almost like you is decently performant enough that like you could argue that it's like more performant than react or something so like it's
[04:15:30]  not a terribly bad option to use right um so like it is a choice you develop in rust you have a way i don't know what other overheads are hidden behind things
[04:15:41]  like sometimes the benchmarks only show how optimal the framework could be not how optimal the end user code can be so i guess there's more to learn there but um yeah why
[04:15:50]  not i mean i think we need more people working on wasm type solutions and not having alternatives because the deadlock that javascript has on things is is harsh and honestly
[04:16:02]  it's going to take a while the thing that i noticed is the overhead of javascript frameworks over vanilla is generally been smaller than the overhead of baseline rust fine gen
[04:16:13]  you know over the frameworks it's like javascript's gone frameworks have gone so optimized so concerned and like localized optimizing around templating and all the stuff that like even if
[04:16:28]  rust um wasm or whatever was as fast or faster than the military yes i'm not sure it'd be the a framework built on rust wasm would be faster than a
[04:16:37]  javascript framework at this point just because like they'd have to do the work to get like all the little inklings of edging out that javascript
[04:16:44]  frameworks have been to to be optimized i mean there's so much perform uh sorry competition here that they're they're like very optimized on what we have what do we got
[04:17:01]  here yeah i mean this is the thing right jared beat jared basically from the ground up chose every decision based on performance like this is like this is i say it
[04:17:18] 's not slight against denno or anything it's just like okay you know yeah i mean so yeah maybe maybe maybe there's more to the story right so maybe maybe i don
[04:17:37] 't know what what i'm talking about but the funniest thing is here's the thing like someone like jared you know he that's what he'll do right it doesn
[04:17:47] 't actually matter what technologies he's using today guys crazy you know i i think i think yeah i don't know i mean maybe this sounds like i'm just like push you
[04:17:58]  know pushing jared's thing and like i'm a big fanboy or something but it's more of like when you do business and you work with developers you see different
[04:18:08]  types of developers different different motivations different uh things that make them tick and as a manager what you're like one of your most important skills is be able to identify that and figure
[04:18:20]  out how to create a work environment where they do their best work um and give them what they need because like that that's how you succeed um right i i don't
[04:18:31]  talk about it much but i i was an engineering manager for years i was i was actually also like a like an engineering director for for for years too smaller startup smaller scale but
[04:18:42]  i have you know decent experience dealing with developers at different levels um and understanding how to you know create products and there are certain types of motivations and certain types of developers that
[04:18:59]  um like you you just know i i don't know how else to put it essentially like like that that that's that's i i that's where i'd place my bets
[04:19:12]  i'm not an investor so i don't like i think that's a whole other thing about a business or whatever but if if i'm confident that someone is going to be
[04:19:20]  able to crack a performance thing um that's that that's who i'd be confident in anyway oh that's that's a that's an actually interesting take full stuff means
[04:19:36]  they just don't want to talk about it after i don't know if that this is a serious take but okay i mean that is a different take yeah yeah i've
[04:19:46]  been i've been following just js as well i i think i think i think it's interesting i i i i i want to see i want to see if there's more
[04:19:58]  you can do with it like i know but yeah just js uh showed up a couple years ago and it's been like the top of those benchmarks which has been kind of
[04:20:09]  funny because like they're dominated by back-end languages and then suddenly you have this javascript runtime like right right at the top um yeah i mean that that's
[04:20:22]  that's that's the thing right like someone who will spend 90 hours a week working on the stuff and with no like no no other drive than to be the fastest like uh
[04:20:35]  two things will happen they'll be the fastest so they'll burn out i mean that that concerns me in its own sense but like you're you're probably thinking well put a
[04:20:46]  whole team on it you know versus one person but this kind of work if you can delegate it and split it properly yeah maybe a team could help but this kind of work
[04:20:56]  like it's down to the details and the specifics i'd rather have like one really good or two really good people working on the problem then you know what i mean like it
[04:21:06] 's just the kind of zone it is then like having like maybe a team on it i mean you could get wider range but if if you're if yeah i i probably
[04:21:13]  should just stop talking about this i don't know it's uh it's it's it's interesting um yeah i guess you're right this should have been in this week in
[04:21:28]  javascript because uh this is one of those ones where you're just like kind of surprised by it but maybe i shouldn't be i mean do you know has a
[04:21:41]  certain aggressiveness around it i like i like it but i i like it they have that certain push like like they didn't need to make their own javascript framework like
[04:21:51]  fresh but they did right and it showcases off do you know very well because like old typescript no build you know like it kind of fits up but like it's a
[04:22:01]  very deliberate choice for a runtime to do that right um it's been kind of interesting because a bunch of people like why can't i use fresh with solid and it's
[04:22:12]  like no we can't leverage the same build stuff you know and like when you align that way like there's you're trading off the perception that this is what you're about
[04:22:23]  versus like what if there's a better solution that's different but if you're presenting a unified front and you're like look we have all the pieces you need let's
[04:22:35]  go i mean it's kind of like building uh libraries into the framework or relying on third-party ecosystem it's the same kind of mentality then that's very very effective way
[04:22:44]  of telling that story right um but it is it is it is interesting and so i guess this could kind of fit in the same way like fresh kind of fits and it
[04:22:56] 's it's kind of like an aggressive move um right because like i mean introduce a whole new framework what what if there are other frameworks that are just other people want to use
[04:23:09]  for other reasons maybe they're better at something or they have better performance or all that like it's it's fine but it's like yeah you know what i mean yeah i
[04:23:18]  i guess we'll we'll see how this all this all plays out um i i'm very i'm i'm i i very much am in a thinking where i think
[04:23:29]  i appreciate at least a lot of the more it's funny i agnostic solutions drive me nuts because they usually don't work except for astro which i've said a
[04:23:37]  million times it actually works but it's more of that keeping things open keeps you open to change and that's the that's the most important thing but it's it is it
[04:23:48]  is it is a tricky balance because this happens at different levels and people have different tolerance because when you can build something specifically for a target you can always make it more optimal
[04:23:56]  from a performance standpoint to do i love this comment to do improve this later fill those in my code base yeah yeah of course yeah some yoda's talk in there yeah
[04:24:18]  it i mean it's the reality of every every code base there's even solid has a to do in it that i haven't gone into uh i mean we don't have
[04:24:28]  suspense list on ssr yet it's like it literally has a to do comment um i gotta add it one of these days um but it doesn't do like the
[04:24:38]  full behavior just like it just treats it as like a suspense round and dumps the whole thing right so i guess someone was doing streaming it wouldn't work properly um in all
[04:24:47]  the modes so yeah i i think yeah yeah this is all about prioritization this is all about understanding the cost of the decisions this is a very interesting one i'm glad
[04:24:59]  that you guys pointed me to it because that is definitely spicy one and as i said jared's gonna be their front row sender and i don't know maybe just js
[04:25:11]  can get into the conversation i think that's a really interesting point about fresh it's true that the demo already had next yeah yeah yeah you know yeah that autocorrect
[04:25:29]  is killing people um yeah yeah a def and well part of the thing too i was wondering about this this whole thing is like why is it even a for dino thing
[04:25:40]  i guess for the build cycle considerations and stuff but if you if you look at like the runtime perspective we can all run on dino right um but i guess like the problem
[04:25:50]  is like like beat isn't on dino they want to be able to tell the whole story with bundling and that and that makes it like on dino um that
[04:26:00] 's good for where they're at but like if you from mainstream perspective it like as soon as bigger players come into that ecosystem i like yeah i don't know you have to
[04:26:12]  suddenly compete on different things some people were trying to push me to push solid harder on dino initially because they're like you'll be like the first one in there um
[04:26:21]  you know and that could be like a real cool angle and i'm i'm like yeah but then i'd also be the one doing all that work um carrying the bundlers
[04:26:29]  and the stuff across the finish line um i i look forward to the day when we can be in there and i said that when that happens the the conversation changes a bit doesn
[04:26:40] 't it um yeah i i'm looking forward to this like here's the thing you all might have heard something called winter cg um which is like cloud flare and d
[04:26:51] ino and node and versell and a bunch of companies all kind of getting together to standardize on the runtime which is good because it's going to help us be able to
[04:27:00]  build to a common base but the funniest thing is while this is all happening the infrastructure guys are all diverging right like they're building all their own edge features and special tricks
[04:27:10]  and and stuff you know um you know different cachings layers and stuff stuff that's like sits above the runtime so like like i think we're going to need adap
[04:27:20] ters and frameworks for uh for a while to come and as i said like i'm interested to see how far all this cooperation goes um because we need it like a standardization
[04:27:33]  same way the web has standardization but like everyone's probably still got an angle you know on top of it um yeah it's interesting that's that's that's that
[04:27:47] 's all i can really could say about that i i think i i i i hope that we can find more ways to share stuff but i mean that always that doesn't always
[04:27:59]  turn the way you hope it does you know like things like web components or whatnot like um i think there is potential there so i i'm looking into those options but yeah
[04:28:11]  not not not not exactly um i i mean i guess i'm hinting at it but you i mean to be fair i don't know if netlevi is part
[04:28:24]  of winter cg i'm just saying that like you you got i mean you got these new edge functions you're you're doing stuff with them you know what i mean i
[04:28:33]  i was actually more talking about some of the stuff that versell has been announcing as well but like but you know you know this is like you know like a perfect example build
[04:28:43]  api from from versell right like that is something that's above the runtime that isn't standard that's a versell so if you want to leverage for sales features
[04:28:54]  you have this amazing ability now to not just be next it's amazing now any framework svelte solid whatever we get to use for cells infrastructure the same way next does and
[04:29:02]  be able to place stuff in the right folder structure and magically we get instant ability to fully leverage for cell but that layer is not part of like winter cg or whatever like
[04:29:10]  it'll be different compared to how netlify's builds structure is or cloud flares or whatever and you know the features are going to be different like i i think
[04:29:21]  i think this is an interesting challenge because the runtimes are trying to get more standardized the same so that things are more interchangeable between them but i don't know if the
[04:29:30]  infrastructure is going to allow for it that's that's all i'm i'm suggesting right because yeah i don't know maybe maybe i've just gone too long the stream
[04:29:41]  um but it's just it's it's just one of those things that i'm i'm thinking about a lot because i'm building adapters for solid start and then and
[04:29:50]  i'm posing this question like if you saw the stream uh nikil made this awesome durable objects demo based on cloudflare and then you're like okay well i want to
[04:29:58]  bring this to netlify it's like well they'll have their own thing or you know what i mean or dino whatever dino's doing right and i think
[04:30:05]  i think that's where like there is like even as these things kind of get more consolidated so we have the core runtime there's there's like maybe that's like the next
[04:30:17]  layer of the battle you know i'm i'm speculating here but like maybe this goes even beyond like the meta framework yeah i don't know i could speculate about this
[04:30:30]  forever um and probably interest is already waning on that anyways but i don't know i guess now we're pretty good for the stream um i guess i think this is kind
[04:30:44]  of uh it's kind of wrapping up here um but thank you very much for directing me to this uh uh dino or deno whatever announcement because i i think this
[04:30:55]  is really relevant option paralysis oh you're giving me stuff to work off of oh man yeah yeah man i i have so many i i gotta remember to do this in another stream
[04:31:13]  too because i think option paralysis is part of this like you're saying it's kind of like javascript framework fatigue but i think i i think the reason this one
[04:31:22]  caught my eye is that um i think that there's actually more i'm actually concerned on the javascript framework side a little bit um because i think it's more than
[04:31:35]  just uh option fatigue i think and it goes right back to that madison canna of um tweet that i put in my article and i talked about a couple weeks ago
[04:31:47]  um did i actually put it in this article i can't remember which article i had it in this one everything okay babe you barely touched the newest javascript framework we
[04:31:57] 're we're we're we're in a we're in a place now where um it isn't this isn't even javascript fatigue anymore i know i have diverting
[04:32:07]  stuff this isn't option paralysis because people are just keep on trying the newest thing you know they're just tired i don't know it's funny it's fatigued
[04:32:18]  but in a in a different way it's not like the angry indignant like you created a new javascript thing what could you what what what are you and you know
[04:32:28]  putting on the world evil it's just like this acceptance and yeah we don't have time for this this rant um this stream but remember remind me to bring this up again
[04:32:38]  in the future um that i i think i think in certain spaces we're we're moving beyond option paralysis and we're getting to an actual place where um where something else is
[04:32:52]  going on okay right you guys are cracking me up but on a side note maybe i should get ryan points on this on on the stream at some point um i think
[04:33:03]  it'd actually interesting he he has a lot of experience he's a lot he and to be fair i yeah i'm now that i'm talking to him he might be down
[04:33:12]  we we could talk remix we can talk about web dev i think i think he'd have a lot of insights very valuable insights all right all right i am gonna end it for
[04:33:24]  real now though thank you all for joining me it was a lot of fun and uh this time when i'm seeing it next week we're going to talk about solid 1
[04:33:34] .5 um and gonna cover what went into building it um and uh yeah it's gonna be a lot of fun so join me then have a good one