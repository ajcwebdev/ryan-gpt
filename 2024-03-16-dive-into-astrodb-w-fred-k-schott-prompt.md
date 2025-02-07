---
showLink: "https://www.youtube.com/watch?v=zaSvA6lorCA"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Dive Into AstroDB w/ Fred K Schott"
description: ""
publishDate: "2024-03-16"
coverImage: "https://i.ytimg.com/vi/zaSvA6lorCA/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 10-15 minutes long.
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

[00:00:00]  Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you
[00:04:28] . Thank you. Thank you. Right. I had to switch, right? Tropicana stopped funding my orange juice. No, I'm kidding. Yeah.
[00:05:38]  How's everyone doing today? Am I sitting in two chairs? No. That's just my couch, right? That's just my couch behind my couch behind me over
[00:05:52]  there. No, it's been a while. I haven't streamed for about three weeks, so I'm excited to have you all here again. A lot of
[00:05:59]  stuff, I'm going to talk about, a lot of stuff, so I'm going to talk about, a lot of stuff, so I'm going to talk about the
[00:06:05]  baby food company, so I'm going to talk about the baby food company, but I'm going to talk about the baby food company, so I'm going to talk about
[00:06:13]  the baby food company, so I'm going to talk about the baby food company, but I'm going to talk about the baby food company, so I'm going to talk
[00:06:21]  about the baby food company, so I'm going to talk about the baby food company, but I'm going to talk about the baby food company. We're, you
[00:06:29]  know, just doing our little preamble right now to make sure that everyone can get past that Twitch pre-roll. How are we doing on Twitch? Yeah, the
[00:06:38]  Twitch audience is not doing so good. They usually like when I do the retweet here, but we're going to wait until we have Fred with us to talk about that
[00:06:52] . That's right. Fred from Astro is joining us today to talk about what's been going on at Astro, and I'm pretty excited about this because Fred
[00:07:02]  was one of my original guests, and we haven't actually had him back on the show in the last couple of years. So, yeah, I'm pretty stoked to
[00:07:13]  have him back. He was, he's like OG, like when we used to like do it after hours, and it wasn't just coconut water we were drinking.
[00:07:22]  So, yeah, no, it was good times. Is Astro 6 out yet? Yeah, I mean at this rate, you would think that, right? Three releases
[00:07:35]  a year? No, or two releases a year? Three years? Yeah, I don't know. I mean, actually, that's not right because you don't
[00:07:43]  start at 1.0. You've got to get to 1.0, right? So, yeah, we're just chilling here. Fred will be joining us very shortly
[00:07:53] , actually. I noticed some people switching back between the Twitch and the YouTube. Thank you, BadgerDev, for the subscribe. Always helps. I probably should
[00:08:04]  set up some subscribe thing on YouTube. I just haven't yet. But if you want to help the channel, subscribing on Twitch is a great way to do that. Yeah
[00:08:11] , Friday streams are back. I mean, there's always scheduling considerations, but it just worked out that way. I was in Amsterdam talking at JS WorldConf, which has
[00:08:26]  an amazing talk that is not up yet. And I'm really excited to show it. I mean, everyone who watches the stream here regularly probably saw most of the contents
[00:08:34]  of it because I took that four-hour, you know, Shape of Frameworks to Come stream that I did a few months ago where I showed how Solid Start is kind
[00:08:45]  of like both retro and future. And I made it into a 25-minute talk, just, you know, playing all the hits back-to-back. And
[00:08:57]  it's a pretty good talk, and it would be really timely if it came out right about now, but we're going to have to wait for that. It was apparently
[00:09:05]  live streamed, but you can't find the live stream anywhere. Anyway, but we're actually here more to talk about Astro, and as I said, I
[00:09:15] 'm pretty excited about this. I was very early on the Astro adoption thing. First of all, Astro took a technology approach that I think is really important, islands
[00:09:29] , and they popularized them. They may have not been the first one to do islands or partial hydration, but they're pretty much anonymous with it now. And it
[00:09:39] 's very important to the progression of building on the web. So, you know, that alone holds it in high regard, but then you just have to look at what
[00:09:51]  they've been doing ever since, right? Even though Fred hasn't come back on to join us in a couple years, we've had Matt on here twice, you know
[00:10:01] , Matt Phillips. And, you know, I guess one time it wasn't about Astro, but, you know, we snuck some Astro in there anyway
[00:10:08] . And most recently when he came on to tell us all about the view transitions in Astro 3. Crazily, it's only been like seven months, and we
[00:10:17] 're talking about Astro 4.5, not even Astro 4. They've already done like a release and a half, you know, in the last six months time
[00:10:26]  period, right? Last year I built a site in Astro 2, yeah, exactly. Yeah, yeah, no, Astro is amazing in that, and this
[00:10:40]  is one of those freedoms that you get. When you can take like a server-centric mentality, a lot of the extra stuff that you have to worry about, like the
[00:10:53]  back and forth, can kind of fall away, right? Like, why not just await in a component and then, you know, or in a file and then render the
[00:11:02]  stuff? Right? Like, this is what we were used to in old templating languages. If you go back even early days of JavaScript, things like Dust, they
[00:11:11]  could do like streaming chain promises await through your templated code. Because it's just something you can do when you don't have to worry about dynamic updates and isolated, you
[00:11:23]  know, change sets. And when that all falls away, like you're just writing something that looks like HTML, though it's really JSX, I'll push that
[00:11:32]  to them every time. But you just end up writing this mostly HTML code, especially if it's static, and then just like fetching the data and just like sitting it
[00:11:43]  in. Like, it doesn't get easier than that. This is a large part of the appeal why I feel React Server Components went the way they did, too
[00:11:50] . There's just, there's always a trade-off when you try and put more things together. And right, Astro just keeps it simple, right? So
[00:12:02] , I think it makes it very, very clean. Yeah, this has been a pretty popular combination. We've seen Astro with solid islands, things like Capital One,
[00:12:18]  NordVPN, a lot of, like, big companies. I think I just saw a post that Astro would view islands as a new Porsche site. So, like
[00:12:27] , Astro's ability to be able to do this is quite impressive. And we're seeing it kind of using Astro the way of getting, you know, JavaScript and
[00:12:37]  this interactivity into large kind of corporate entities just because they do have a need of that marketing page or landing page. But they want to do a little bit more with it
[00:12:48] . So, yeah, I mean, I think it's a beautiful fit. Yeah, yeah, exactly, right? What's the best database I've worked on so
[00:13:06]  far? I guess this is on topic. This is fair. Honestly, I don't know if I've ever enjoyed working on databases. My earliest experience working on databases,
[00:13:18]  though, kind of tainted me forever. I mean, I guess it wasn't that bad. Microsoft SQL Server and Oracle. The company had to use both. And
[00:13:29]  Oracle was just the worst. I'm talking, like, mid-2000s, like early mid-2000s, like 2000. I want to say, yeah, actually
[00:13:41] , no, no, I guess I was doing some MySQL stuff before then. Yeah, I don't know. I really got into Postgres for a while.
[00:13:53]  Right. I liked that there was a lot of dynamicism inside, you know, just not just the simple, you know, schema. You started, like, getting
[00:14:07]  into a lot of advanced topics. But honestly, I haven't had to touch much databases out of making to-do apps in the last couple years. So, you
[00:14:17]  know, it's funny, like, it definitely got, for me, the peak was, like, 2018, 19, when we were moving our microservices across. And
[00:14:24]  I was, like, we were trying to switch to serverless setup. And we started realizing where the bottlenecks of our queries were. And we started to have to
[00:14:35] , like, look at the schedule of, like, in terms of, like, how SQL query resolution was going. And I feel like I got more into Postgres that
[00:14:44]  way than I ever did in the past. Like, at the beginning, you're just, like, a junior dev writing queries against the database to do reporting to getting to
[00:14:53]  the point where you're actually, like, Like, no, we have to change the way the query is executed in the database because of the way of what gets hit
[00:15:02]  often and what, like, what we, what we, yeah, what we know to be bottlenecked. Anyways. Yeah, I'm not familiar at all with any of
[00:15:18]  this, like, local DB. I don't even know what indexed DB. I don't, I don't know any of this stuff. I, I honestly
[00:15:28] , I, I kind of did a thing where we were all, like, I guess I wouldn't say on-prem. Yeah, we were on-prem. Then
[00:15:37]  we went AWS microservices. And then, then I moved everything to serverless. And, like, we, we got a big, a bunch of money our startup got
[00:15:44]  from, like, AWS to make this migration. So then, now, next thing you know, we're using, like, Aurora and, like, all their,
[00:15:51]  like, hosted services. And then, like, I got out of that and just started making JavaScript frameworks. So, yeah, I, I'm, I, yeah,
[00:15:59]  you can save JSON in Postgres. That was, that was a lovely thing. But, yeah, I, I, I have to admit, I probably haven't
[00:16:09]  touched much in probably about five years. So, yeah. Dynamo TV? Yep. Well, we had Mongo. So we went Mongo to Dynamo. And then we
[00:16:19]  went, uh, our old Postgres to Aurora Postgres. Anyways, let's, let's actually get on topic here today because I've, you know, I
[00:16:28]  could chat here with you guys forever and I probably will later. But we actually have a guest on our stream today, right? That's why you, why you all are
[00:16:36]  here. So, um, we definitely should get this going, right? What do you guys think? Should we bring Fred on our stream? Sorry, I just need some
[00:16:47]  coconut water. My voice is getting dry. Yeah, let's go, okay? All right, let's welcome Fred. I hope he's ready. How are you
[00:16:54]  doing? Hey, I'm doing well. Can you hear me okay? Yeah, you are good. Yeah. Unlike me, I was completely silent when I turned on the
[00:17:03]  stream and had to spend a minute figuring it out. So you're all good. You didn't miss much. So if I can paint a picture for you, because we
[00:17:09]  just did our launch week. On top of that, I just moved. So this is like an entirely new office. I haven't said, I'm like bringing all my
[00:17:16]  recording stuff into the office in like a big cardboard box and just like setting it up. I'm a guy, we're getting it together every day in case I need
[00:17:24]  to go on. So yeah, this is a real Friday energy coming into today. I've just reposted on Twitter so people know we're live. So we
[00:17:33] 'll get those more people getting in here. I probably should have done earlier so they could just hear me talk about how I use databases 10 years ago. But no,
[00:17:44]  yeah, no, big week for you, as you said. Lots of things going on. I was trying to like keep track of it, but then I realized I wasn
[00:17:50] 't going to keep track of it. And then I was like, oh, Fred's going to be here anyway, so he can tell me all about this. But it
[00:17:55] 's been a while. I was actually telling the crowd the last time you were on my stream was back when it was after hours when we, like, when I wasn
[00:18:02] 't drinking organic coconut water, you know? I still, I was talking about that with my wife. It was like, I think at like 10:00 PM you
[00:18:09]  started streaming and like, I think until like 1:00 AM we were live. It was, I don't think I've ever done anything like that before or after.
[00:18:16]  Yeah. Yeah. No, it was, it was a good time. It's right. Moving to earlier time meant that now that people in Europe are there. Yeah.
[00:18:23]  Anyone, anyone, anyone here from Europe? We got any, anybody from Germany in the, in the chat, there's gotta be a few of you. France. I
[00:18:33]  don't know if you know this, but people who aren't like us also have other things going on on Friday nights. So even people in America also, we're
[00:18:38]  not tuning in at like 11:00 or 12:00 PM. That's, that's fair enough too. Yeah. Yeah. Um, yeah. Uh, although I
[00:18:45] , the funny thing is, uh, I, I, even some people from India can make it to the stream time. I mean, it's pretty hard. It's
[00:18:51]  like midnight for them, but like the old stream would still somewhat catch Southeast Asia. So I'm, I'm sorry for all, all to all you people. Um,
[00:19:00]  you don't get, yeah. Anyway. Saturday morning streamer grind. Yeah. Oh, wow. Wow. See, some people are hardcore, right? Do you
[00:19:10] , what do we got here? I, sorry. Okay. So we've got Portugal, EU, Germany, Greece. I just saw something. Yeah. Berlin, Italy
[00:19:17] . I was expecting this. I mean, right. I'm never in your chat, but I like, I think I see everything, every stream I'm watching on the
[00:19:23] , you'd like, thank God you keep your VODs up. And then like, I like, we'll have some errand I need to run on Friday or like
[00:19:28]  Saturday morning. I'll be like, I'll be like doing chores. And like, I think I've seen every one of your shows going back, like at least
[00:19:33]  a year now. Indonesia. Oh, that's, that's, that's dedication. Yeah. And India. Yeah. Yeah. So I don't know. You
[00:19:44]  probably see this in your own stuff. We're not even talking about Astro at this point. The number of people who watch the video versus number of streamers, people
[00:19:50]  who watch the live stream must be like 10 to one. Right? Yeah, but the, the thing is the live streams when all the fun happens, right? That
[00:19:58] 's when you can interact with the people. I like hear people's names who I know. And I'm like, I want to be in chat with them. Like,
[00:20:03]  that sounds like fun. And instead I'm just like listening in some weird parallel universe. But no, uh, yeah, no, it's, it's great to have
[00:20:10]  everyone here. Great to have you here had our new, more responsible streaming time. Um, no, yeah, I, it's funny. Cause yeah, I, I
[00:20:19]  used to do this week in JavaScript first. So I'd be like this week at JavaScript for like an hour and then bring the guest on at like 9:00 PM
[00:20:27]  Pacific, which is just insane. Um, but showing you after for the first time, like pre-launch, I think at that point, like, I don't
[00:20:33]  know if we were even talking about it much, but like hitting it with that hacker news, like demo from hell and seeing it survive was like, was still one of my
[00:20:40]  favorite moments. Oh yeah. Yeah. Yeah. That, that video, um, is, is still circulating. You know, that it's my most watched VOD and
[00:20:48]  yeah, it was, it was a great moment. You guys linked it off when your release announcements and that's the thing. Like I created that test to basically show
[00:20:57]  off Marco, right. Show off Nyland's framework. So I, I knew Astro was going to do well. Um, what you guys snuck on me was
[00:21:04]  that, uh, client idol, um, which was that like extra little boost that I wasn't expecting. Um, so, um, it was good. It was
[00:21:15]  good seeing that 94, I haven't, you know, I haven't seen it ever since, um, to be fair. Um, but it was definitely a moment,
[00:21:23]  uh, for those who don't know what I'm talking about that on the previous stream with Fred, I had this hacker news demo page where I show the comments page from
[00:21:31]  hacker news. And there was this like Facebook story that had something like 1700 comments and most JavaScript frameworks cannot handle it. It's just, it's just too much data
[00:21:41]  in a real site. You'd probably use virtualization or other mechanisms, but this is a simple hacker news demo. And essentially because of hydration, because of all this
[00:21:50]  stuff, a single page app basically can't score higher than 50 on lighthouse on this. It's just, it's like scientifically impossible. I actually saw solid start managed to
[00:22:00]  get like a 51 or 52 ish at some point, but like, you know, me tweaking it up. But if you look, everybody's like 46, 47
[00:22:08] , the Astro version of that page, uh, is a 94 to be fair. There's other ones up in that range. Um, Marco quick, um,
[00:22:16]  basically anyone who cares about hydration solids, islands, experiment, uh, fresh, no, no fresh had a different problem. So fresh wasn't there. Neither were server components
[00:22:26] , but my point is like, it was, it was, this was the first time on air where I just been taking all the frameworks and just throwing them in there and
[00:22:33]  just like knowing what was going to happen and legitimately was surprised when it popped on and it was like 94, like Fred jumped out of his seat. Almost I remember like
[00:22:43]  you gotta think early in a project. You're like, this might just all break. And I like, just have to like vamp and like bandaid over it instead of
[00:22:51]  like, yeah, that was a, it's also midnight. So I'm like losing my mind a little bit. Yeah. Yeah. Yeah. But it was, it
[00:22:58]  was an awesome, legitimate moment that happened on stream. One of my favorites as well. Um, but yes, uh, time has, has passed. Um, that
[00:23:07]  was like two years ago, uh, roughly. And Astro's turns three today. Right. The first commit was three years ago. Yeah. Initial commit three years
[00:23:17]  ago today. Shout out to Theo. It used to be called magic thing. This is, we got there first before upload thing and off thing or whatever he's working on
[00:23:24] . We were magic thing first, but, um, I think the second commit is like a find and replace to rename it to Astro. I see. That's
[00:23:31]  I, yeah, I didn't, I did not, I did not know that. I actually just saw that on Twitter. Cause I was trying to pull up stuff.
[00:23:37]  Cause I told you, I have not been paying attention. So I'm like, what is my like guideline for how the stream should go today? And I was like,
[00:23:43]  okay, launch week starts Astro 4.5. Good Astro DB. Okay. We can talk about this, some mystery thing happened on Wednesday, the community day
[00:23:51]  Astro turns three. And I was like, okay, so at least I have an outline for, for some of the stuff we're going to be talking about today.
[00:23:59]  But, um, yeah, something that just, uh, I just saw posted, uh, yeah. Happy birthday Astro initial commit to snowpack.js magic thing.
[00:24:10]  Repo was pushed on March 15, 2021 renamed to Astro shortly after. Yeah. Oh, it's right here. How complete was this? Oh, well,
[00:24:23]  interesting ish I'd say, I mean, there, there, no, but I mean, if you've ever seen solids first commit and I had already been working on
[00:24:30]  it a year, there's a lot less stuff there. So yeah, this is when it's like, oh, like we just shipped syntax highlighting and you're like,
[00:24:37]  oh, okay. Like this is like, not for everybody. This is for like a very specific early adopter experimenter. Like I listen, I, I'm
[00:24:45] , I don't need syntax highlighting, but like, I do like it. That's cool. Yeah. So you, because you guys started the project. I'm
[00:24:55]  about a month earlier. Right. Um, if I understand correctly. Yeah. Probably at this point is about a month of development where we were like, I think it was
[00:25:03]  like over the holidays. No, I think even like December. Okay. A couple months of development where we were like, I mean, this is like going back to like
[00:25:10] , what is this thing we're building even? Like, um, so for people who don't know the team that built Astro originally was working on Snowpack and
[00:25:17]  Skypack. Um, it was myself, Matthew, Nate and, uh, Drew, uh, Drew powers who were on the team at the time. And we were working
[00:25:24]  on Skypack and Snowpack and like Snowpack was doing well, but like Veet was kind of coming out and seeing like, oh crap. Like Evan, you is
[00:25:30]  a legend and is doing a really good job at this. Like, I don't know if they were surpassing us, but like they were doing a really good job
[00:25:37] . And it was kind of like, oh, do we really want to like fight Veet on this build tool? Um, that's like, has a ton of adoption
[00:25:42]  from view already out of the gate. View too. That was also, oh yeah. Go ahead. I was gonna say view two would have been the game changer, which
[00:25:48]  I guess would have come out around them because view one was like Veet only or, or Veet one was like view only if I remember correctly or. So yeah,
[00:25:56]  I mean, this is all ancient history. Veet was originally built using Snowpack to do its, cause Snowpack was like, OG, a package installer. Basically
[00:26:03]  it was the thing you ran after NPM install and only later did we have the dev tool, um, the dev server, the build pipeline, all that stuff. Like
[00:26:09]  our, we started just as an installer for your packages to take any NPM package, make it run in the browser as like a script basically. Oh, okay. Interesting
[00:26:18] . I didn't, yeah. So we used that to like basically get their whole, like, what do you do with packages? And then from there, we both kind
[00:26:24]  of went our own path to like, okay, let's actually, instead of making these standalone ESM modules, let's actually build a whole build tool and a whole
[00:26:32]  web server around it so that you can still do import react and you'll get back the script that you've bundled, uh, but all invisibly. And with all
[00:26:39]  the cool web pack stuff that they've built. Yeah. Cause I, I mean, I know we're going back to old history, but we actually didn't talk about
[00:26:44] , I don't know how much we talked about this last time when we were on, because I didn't have that context because I was using Snowpack. I was
[00:26:51]  demoing it. I, I'd opened some issues actually. You guys weren't, didn't properly support export conditions, which isn't important for solids, uh, render
[00:26:58] er. So I was like trying to like hack around Snowpack. Um, and, and I guess, yeah, around this time was like, was it Snowpack three
[00:27:07]  or in V2? Like everybody decided that they're going to do SSR and, and this is around the time. Like, what, like, why it,
[00:27:17]  like, where did this come from? I might've been like, why Astro? Like, why did you guys like, we're building a bundler thing. We
[00:27:24] 're going to build Astro now. Well, so that was, yeah. I mean, that's, that's really at that moment, it was kind of like,
[00:27:29]  okay, Snowpack's cool, but VEAT's doing it as well. Skypack was this really interesting take where the whole pitch was instead of bundling your
[00:27:36]  NPM packages, what if you link to them on a CDN, like unpackage or JS deliver? What if they were all ESM? Basically what JSR kind
[00:27:44]  of is doing a little bit of this, um, this idea of like, what if everything was ESM and that meant that you can import it directly. So every website
[00:27:51]  would import from skypack slash react and get react. And the thinking was that if enough people started to do this, there'd be the snowball effect because browsers would start
[00:28:00]  to cache react and all of a sudden you're coming to someone's website and the react version is already cached locally, ready to go. So there's this idea of
[00:28:07]  like enough people start doing this. Those websites are actually gonna be faster than others. Not because they're like as optimized, but because they're going to be sharing a cache
[00:28:14]  that other websites won't be able to take advantage of. They have the warm react cache. So 40 kilobytes killed from your request, uh, bandwidth right out of
[00:28:22]  the gate. That was the original vision. I see. Okay. Okay. Yeah. No, I remember. I remember the browsers were like, um, no,
[00:28:29]  no, no, that's actually a security vector. We can actually see where you've been by checking your cache and requesting these types of resources. So right. As we
[00:28:36]  were building skypack, every browser was like, we're actually going to kill that feature. Every site has its own isolated cache. So just because we're both loading the
[00:28:44]  same JS file from the same website, we're, we're not going to share it. Even if the browser could make it more efficient, it's choosing not to for
[00:28:49]  security. Well, that's disappointing. Yeah, no, I didn't know. It was such a cool vision. I, they're going to bring it back eventually
[00:28:54] , but it was just like, oh, it was too soon. I mean, the thing that I, I, I'm such like a big bundler pro bundling
[00:29:03] . I, I've had a hard time with the, you know, those kinds of solutions. I guess I could bundle it. It just like tree shaking. I
[00:29:10]  live by tree shaking. So I'm like trying to picture a world in which I would even want a cache version of react and not the version of react that had only the
[00:29:16]  pieces that I wanted. Um, but yeah, it's interesting. Um, definitely. Um, and it does go both ways. Um, yeah. Well, you sound
[00:29:26]  like every user we talked to where it's like, yeah, this is kind of cool, but like, I don't know if I really want to do this.
[00:29:31]  And so that was, that was where we were at where it's like, these are cool ideas, but ultimately no one really wants either of these things. Is there a
[00:29:38]  way to kind of tackle the like faster websites from a different point of view, using everything we built. And that's essentially what Astra became is like realizing the web framework is
[00:29:46]  actually a really, really great place to be affecting change. Cause you're getting people bought in on opinions through your opinions. You can wrap best practices. And that was
[00:29:55]  just how we found Astra was like, let's build a framework that can take these things we love and come at it from a different angle than low level infrastructure, like a
[00:30:02]  CDN or like a build tool that you, that everyone ends up wrapping the way that people wrap feed now. Right. Right. Yeah. It is interesting though, because
[00:30:11]  even with that, people tried to tell you that Astra was like the underlying build tool that, that people would wrap anyways. People like you, you were trying to build on
[00:30:20]  top of Astra. Yeah. Yeah, no, exactly. Um, so, I mean, there's, there's, yeah, there's, there's clearly a
[00:30:28]  gap there in multiple areas and you guys found your niche, um, which started with the static content. We don't need to go through full Astro history. Um,
[00:30:35]  I just, it's interesting three years later to just kind of look at that point in time and look at where we are today, which is, um, you know,
[00:30:45]  Astro first Astro 4.5, again, using my list of things, which seems like you guys did a bunch of meaningful improvements around view transitions. Um,
[00:30:56]  and, uh, I'm, I'm like, look at the release notes here. Maybe, maybe this'll, I'm just trying to. Yeah. I mean,
[00:31:02]  the audit UI is my favorite thing. Like basically the Astro dev server. Now, when you are literally running the dev server, there's this little toolbar, you
[00:31:10]  click audit on it and it's going to basically do a full scan of your page and catch a bunch of accessibility performance, focusing on all the stuff that like automated testing,
[00:31:17]  can't look at just a file to understand, like images above the fold. You should make it a priority. This thing is way down the page. You can put
[00:31:24]  a, you know, a lazy fetch on it, that sort of thing. That makes, that makes sense. Yeah. Okay. Yeah. Yeah. Yeah. Cause that
[00:31:30] 's what actually been one of the hardest parts of that accessibility. People have been looking at like compiler tools to do it, but it's like when you have pieces that work
[00:31:38]  in independence, you can't see the relationship between them. It was, it was actually kind of funny. Uh, oh God, I'm not allowed to talk about this
[00:31:44] . Am I? Because I'm not allowed to talk about this framework anymore. do it, but when I was working on Marco, um, the, the, the
[00:31:51] , the cross compiler stuff they were working on was actually like, they started like theoretically talking about how they could check accessibility across files that build, like build time, like during
[00:32:01]  depth, which is kind of crazy, but otherwise, yes, you need to look at the final rendered HTML to be able to know this stuff. Um, and then this
[00:32:08]  gives you this tool as if I'm seeing this right, it gives you like a good visual indicator path of like what to do, gives you the suggestions, tells you
[00:32:17]  where to go in your source code to fix the problem. Um, that's yeah, that's awesome. Yeah. It's really cool. It's like, it's
[00:32:25]  one of those things where it's like, oh yeah, that sounds cool. And then you open up your own site with it. It's like, oh God, there
[00:32:29] 's all these problems I didn't realize that are like the accessibility, SEO, stuff like that. Okay. Yeah. So that, yeah, no, that this is a
[00:32:36] , it's funny. Cause like it's, it's, you can show a screenshot of it, but you can't like, like it's hard to capture the
[00:32:43]  whole thing. I think I just like scrolled right by this when I was, when I was looking at the release of that, of course, I'm a little bit
[00:32:48]  obsessed with view transitions and client side writing hybrid. So I'm always very interested. Two points are especially stuff that you've been harping on. I was like, how
[00:32:56]  do you control re-rendering and re-running of scripts? Like how are you keeping the state across view transitions? We're, we're tackling that from a bunch
[00:33:02]  of different ways here. Yeah, exactly. It's some of the mechanical pieces that people can do it. I think it's hard to orchestrate in general, like across
[00:33:09]  full applications. I also think it doesn't matter if most of your site doesn't actually share much state. Like if, if your site is on the content side of
[00:33:18]  the spectrum, view transitions are just like instantly nicer feeling and navigations without any costs. It's what you guys dropped one component in the page and you're just like,
[00:33:28]  you know, for the most part. So, um, but this, yeah, no, this is definitely interesting. I'm glad to see work continuing there. Uh
[00:33:36] , syntax highlighting, um, improvements. I'm guessing it's 4kish, yeah. Yeah. I mean, so much work has gone into AstroDB. Like
[00:33:46]  this was, you know, it's a minor release. It's, it's meant to be continuing iterating on the story and then setting us up for this future of
[00:33:53]  AstroDB being connected to the framework. I got to, yeah. So basically, basically like it was a good release week. We need, you need to represent
[00:34:00]  from all the points. This is, this isn't Astro five. This is Astro 4.5. So like it's got some good incremental improvements. It's
[00:34:09]  just funny at this point. I wasn't, I wasn't, I wouldn't half be surprising Astro five at the, at the, at the, at the pace
[00:34:15] . You guys have been going. No, you're getting it exactly what it is. It's like we release on a cadence. We have a basically a two week
[00:34:20]  cadence for minor releases. And it wasn't even like, oh, like let's make sure there's like this big, exciting launch. It was like, Hey, like
[00:34:25]  this is the week to launch. Let's make sure we get out of 4.5 and 4.6 in this, uh, in this week. Nice. Nice.
[00:34:31]  Okay. So yeah. So yeah. Okay. Streamlined. Yeah. Uh, launch cadence at this point. So I, I'm just, cause I'm going down
[00:34:37]  my, my, my list here of stuff that I was looking at in terms of that, what was the big Wednesday question mark thing? Then we'll start talking DB.
[00:34:45]  What was, yeah. You know, I, I did that as like, so the, the big thing was that we launched a developer portal, but I don't
[00:34:53]  think it's like, as it almost makes it seem like it's the big thing. Like Tuesday, don't worry about the DB, like dev portal. Um, it
[00:34:59] 's pretty limited in what its focus is. I think there's some cool stuff for the future here that like might make it bigger than the DB one day, but at this
[00:35:06]  point it's essentially to manage people who are submitting stuff to our theme portal. So if you've got the team catalog open, you can see all these different themes.
[00:35:14]  And right now that's all managed by like essentially like JSON files in a GitHub repo, the people PR too. And so it's like fine. But then we try
[00:35:22]  to like manage like a form to submit it. And then that goes into a discord thread where then we go up and it's always just been a bit of a mess for
[00:35:28]  everyone, for us to manage and for people to submit. So this streamlines that all into essentially a portal where we get the dog food AstroDB. It's
[00:35:35]  all built on AstroDB. So there's authentication, image uploads, um, form submissions. So, sorry, understand what does the dev portal do for like our developers
[00:35:49]  working on Astro developers who are like looking for tools for their Astro sites? Like what, what is a developer portal? Um, yeah, that was the thing.
[00:35:56]  It's like, it's really just for theme authors right now, which is like so niche. It's the question marks are just like, I don't really know
[00:36:02]  how to explain it. So I'm just going to put some question marks. Not like this is the biggest surprise we've ever launched, but it's for theme authors to
[00:36:08]  submit themes to our catalog, essentially. Does it, does this portal show the catalog to other developers so that they can find stuff or? Yeah, the catalog is actually
[00:36:17]  on our homepage. So you can go to the, I think it's resources theme. It's been a while since I've, I've, I've been here clearly
[00:36:23] . It's one of those things where like, it seems like just like it's, yeah, it's hidden under resources. This is like our most viewed page of the
[00:36:28]  entire site. Yeah, that makes sense. Again, people looking for, for theming. Um, uh, yeah, because they're, they're building a website.
[00:36:38]  They don't want to worry about the design aspects. They can tweak the specifics and then they're good to go. I mean, this is completely tangent, but it
[00:36:46]  was one of the, it was like the one use case I could see for server components because I don't actually believe they're truly composable, but that's for a
[00:36:52]  different stream. Um, let's, yeah, that, that makes a ton of sense. And this is why I, when I was, before the started, people started
[00:37:03]  saying, they're like, I've heard Astro is the new WordPress. I mean, that's, there's some truth to that in terms of what we're going
[00:37:10]  for here with the database, right? Like, yeah, the vision of the database, I feel like is it's a database for Astro. It's, it
[00:37:18] 's, it's got a great story there, but like, it really was this realization that what WordPress does so well is that it's not just a framework. It's
[00:37:25]  framework database all wrapped up in a server, deploy it. And, and how, how streamlined those things can become when you build them all together. Right. Okay.
[00:37:33]  So now let's, let's talk about that database for a moment here. Cause I'm, it's unfortunately, I feel like everyone else would probably cover this and I
[00:37:43]  have not been paying attention as I said. So I actually, this is all new for me. So I, I'm, I'm just looking here. I feel
[00:37:51]  like your stream is like, I feel like you like going deep, but I feel like that's actually something that like Ben's video is a great one. And I think
[00:37:57]  that's an awesome part of that, like what he was able to do with that video. But there's some really cool tech under the hood here. That's like more
[00:38:02]  than just, you know, how, what does it mean to build a database in 2024? That is like, not just wrapping Postgres or wrapping my sequel. It
[00:38:10] 's really interesting kind of tech story here that no one else is doing. That, that, that, that is good. I'm not gonna lie. I heard about Ast
[00:38:17] ro studio from, uh, alien when I was in Amsterdam at the conference. And then I, I didn't know anything about the database or anything. So like my first
[00:38:26] , uh, like exposure to the database kind of thing was around this where what, what, what, what's going on? People just started to claim that we was like
[00:38:36] , essentially we were just wrapping Firebase and calling it our own database. It's like, I don't know who started this. I think it was, uh, Ze
[00:38:42] ig, the, uh, David, David Kramer, the CTO of century, just like tweeted this out, like for fun. And then it just kind of stuck
[00:38:49] . Uh, you guys are having too much fun on Twitter. That's, that's, that's, that's, that's confusing. I hated it. I genuinely
[00:38:57]  like every bone in my body was like, okay, like, okay, these are just memes. People aren't going to think it's Firebase. It's okay. Interesting
[00:39:04] . Okay. Yeah. You guys wrote a deep, a deep blog article to a deep dive blog article. I'm going to pull that out here, but okay.
[00:39:13]  High level. What is Astro DB? Just so that I can. So that the audience here who, if they miraculously haven't been paying attention to the millions
[00:39:24]  of posts this week, can get an idea of what it is. Yeah. It's, I mean, it's a huge deal for us and I think it's really
[00:39:30]  unique for the JS ecosystem. I don't think anyone's done anything like this in a long time. It's a database that is built for Astro, designed for Ast
[00:39:38] ro, integrates with Astro. It's very much like the database for Astro and for what people build with Astro, which is mainly content focused sites.
[00:39:45]  It's the local development experience. So you spin up Astro and you get this local database that is, you know, it's essentially a SQLite database powered by lib
[00:39:55]  SQL. So it's a file on your system. It's not like a giant Docker container that you have to spin up. It's a file that we manage for
[00:40:01]  you super lightweight. And then when you're ready to go to production, you can either build a static site, in which case you never have to talk to any remote servers
[00:40:09] . It's a local database building your site database dies and you go and deploy those resources. It's a full kind of loop. Or if you want to have like written
[00:40:17]  data, dynamic data, something powered on a server, then you can talk to our hosting platform to spin up a database in a couple seconds. We handle scaling for you,
[00:40:26]  generous free plan, all that good stuff. Okay, so there's something. Our hosting platform. So there is also an Astro hosting platform for Astro DB.
[00:40:39]  Does it host just the database or does it host the site or what are you doing? Yeah, just the database platform for now. So just the database being hosted for you
[00:40:48]  spun up and scaled and managed for your traffic. And we're working with Terso. Terso is powering it behind the scenes. They've been awesome.
[00:40:54]  So there's really cool things you can get from SQLite and from LibSQL that they give us like the fact that it costs nothing at rest. It's just a
[00:41:01]  database that is kind of really efficient and can scale up, especially for read heavy workloads. Gotcha. Okay. Okay. You mentioned this already. SQL data is designed exclusively for
[00:41:15]  Astro. So people who want to use the database also like your hosted solution database also need to be using Astro, right? Yeah. Okay. We've done
[00:41:26]  a couple of things even internally where like the Astro site is actually shipping an API. And then the theme catalog is a perfect example. The dev portal owns the theme data
[00:41:34] . The front end is fetching it as an API call. So, you know, it's powering, it's built for Astro, but Astro can
[00:41:40]  build, you know, so many different things like an API that others can then talk to. Gotcha. Okay. Yeah. I mean, definitely. Right. You just have
[00:41:47]  a page and then putting a weight in it and you're like API endpoint. Exactly. Boom. Done. So, yeah. Okay. So, I'm trying to
[00:41:57]  think of how to phrase this because there's two sides of this. I'm curious of what this brings to the Astro experience specifically, because obviously, since it's Ast
[00:42:12] ro's database solution, you have the ability to have, like, you don't have to worry maybe as generalized in terms of like who'd be integrating it. You
[00:42:20]  can optimize for this case. And then the second thing, and this is usually not the topic of our streams at all, but it's kind of like on the other side
[00:42:28] . Just understanding. I'd love, I'm just picking your brain understanding how you ended up here, like a little bit. And like, why on the side? I
[00:42:39]  mean, people for a while have been trying to, they've been wondering. I mean, this came up. Every time I have a stream, I have somebody n
[00:42:44] udge me from the corner. They're like, can you ask the people from Astro and you nudge at them, like, what their long-term plan is,
[00:42:51]  like Astro the company? Because, you know, I love their framework, but like, are they going to become a hosting platform like Gatsby? Yeah, right
[00:43:02] , do a Gatsby. We're going to pull a Gatsby. Right. So, can you talk about that a little bit before we get into the technical
[00:43:08]  stuff? Just, I think that people kind of want to have a glimpse of that. Yeah, no, absolutely. It's something, I mean, it's never been
[00:43:14]  like a secret that we were working on this, but like you said, Eileen, and you were chatting about it earlier, but it's definitely been something we've been
[00:43:20]  kind of working towards. I think if there's been quiet about it, it's more just like, the only thing we really care about is making Astro as good as
[00:43:27]  possible. Like, everything else comes later, and I think that's something we've been trying to be true to, versus like, ramming. Like, all right
[00:43:33] , every Astro user now pays us some $20 to use Astro. It's like the last thing anyone wanted was to all of us. No credit card required
[00:43:41] . Cancel any time. But the whole thing for building with an open source project, a front-end framework, is trying to find the right way to build something for
[00:43:51]  an Astro user. So, I mean, we can get into the whole, like, economics of like, it's something we talk about a ton internally. Like,
[00:43:58]  there are projects like Tailwind, which say we're going to build UI kits, and we're going to charge, you know, 200 bucks for some components. There
[00:44:03] 's Gatsby saying, like, I'd say they even want to step further. It's not like a hosting company for Gatsby. It's like, really
[00:44:10]  the only way to make this site not a mess is to use our hosting platform. Like, our builds without it or instant builds with it. And like, it's not
[00:44:18]  required, but like, man, there's a kind of really heavy implication that you have to use their hosting platform. And there's like this whole spectrum of ways to build
[00:44:26]  a company that can support an open source project and vice versa, that it can support the people who use it also. Yeah, this is the way that we felt most
[00:44:33]  excited about it. It's not locking you into a hosting platform and a walled garden. It's a piece of your stack. So you can keep using the people like
[00:44:39]  Vercel and Netlify who are really good at this. Right. And we get to power one piece of it that we think we can improve in an interesting way
[00:44:45]  that no one's done yet, which is the database layer. Yeah, no, that sounds great. And yeah, there's a part of this, which I'd be
[00:44:54]  really curious to get your thoughts on, not to interrupt, sorry. But I think one thing that we talked about a lot for years now is like the server component story
[00:45:02] . And there's this parallel here for server components, which is that like this vision of I want to ship something to NPM that is both the client, the server,
[00:45:10]  and it's able to talk to like a backend database. Right. This idea of like a full encapsulation of logic and composability in a package. Right. And
[00:45:18]  I think there's this kind of dual vision here, which is it's not taking a component approach to it, but it is saying what happens when everyone in that framework has
[00:45:27]  the same API for talking to a database. This idea of actually can ship an off component package, everything that isn't just the front end presentation, but it's actually talking
[00:45:36]  to a database that is consistent across everyone who uses it. So you have this full kind of story from that login component all the way into actually writing or reading from the
[00:45:45]  auth table in your database. And you get to own it all on yourself. It's your database. You can export to SQL whenever you want, but it's fully kind
[00:45:52]  of encapsulated and composable inside of our ecosystem. No, I like this. The one key difference here is you're not, you have all the pieces, so
[00:46:02]  to speak, right? Like you don't have to worry about like react catering to the fact that next and remix and Gatsby and Redwood and whoever else tan
[00:46:14]  stack and whoever else exists. Like a lot of the difficulties in trying to make these composable pieces comes from the fact that like they, they all, there's too
[00:46:26]  many pieces that touch on each other. Like they need to be aware of routing. Well, they all have different routers or they like, it's very difficult.
[00:46:34]  Like cash caching rules around data fetching and all that. Like you, those depend on providers. They also depend on the architecture. Like these are very difficult problems.
[00:46:44]  What I'm seeing, what you're explaining to me here is just like a single system. So there's no, you don't have to worry about like this kind
[00:46:53]  of displacement problem. So like, yeah, if someone wrote a module or a piece and it referenced Astro DB and, you know, whatever view transition or whatever feature that
[00:47:06]  Astro has in it, people can assume that it'll work with everything Astro with the same can't be said about react. So like this, this is actually,
[00:47:14]  this, this makes sense. The, the, the challenge here obviously is the opposite problem where it's like you have the whole thing. So it's like, can
[00:47:23]  it will just, will it impact how, um, like other vectors come into play? And like, like, it's interesting, like would a different competitive solution then have
[00:47:39]  to be like the whole thing? Like there's the fact that there is no overlap, maybe it's fine though. People don't, people don't really like when
[00:47:49]  someone picks up Astro, it's like when they pick up a classical backend server thing, like a PHP or whatever. Like they're not worried about how these things interrupt
[00:48:02]  with like, uh, like stuff at the same layer. You're like, okay, can I, you know, if I want to use something other than Astro DB
[00:48:08] , can I? Yes, definitely. So like layer below, perfectly fine. It's, it was a weird thing on the web where we're like trying to like
[00:48:16]  interrupt at the same layer with everyone and in the browser, because it's like, we're stuck there and, uh, you don't have to worry about that. So
[00:48:24]  yeah. Yeah. I mean, if there is a like analogy there to use that, like react component all the way down to database, that react component still talks to
[00:48:31]  the backend through an API. There's no way to like, there's not server components. Like that react component is the front end component. So you can imagine like
[00:48:38]  if I'm a clerk, for example, and I wanted to build a layer on top of this, I could ship my react component, but then say, listen, if
[00:48:43]  you want to go build the view component or if the ecosystem wants to go build it, that same API endpoint exists. You would just be cloning the front end, copy
[00:48:50] , um, copying that code, transporting it to view. And then you have a view component. So there's work there for sure. It's not like, yeah,
[00:48:56]  it's, it's what you lose when you're saying we're going to let any framework build on top of us. It's react views felt they're all going
[00:49:01]  to have their own ecosystems that you have to support, but react is such a behemoth. And then I think there's still that space where the server code is the
[00:49:08]  server code and the front end talks to it versus every component top down, having to re-implement the full stack of logic. Right. Yeah. Uh, what I
[00:49:15]  was going to say is that that thing you're describing though happens within react itself, which is why react is having such a challenge on the RSC side. Yeah. Right
[00:49:25] . Oh, is this re is this next react? Reactor. Reactor. mixed reactor. Yeah, exactly. So yeah, I, it's interesting. It
[00:49:33] 's kind of nice to be able to just step back from that. Like, cause for you guys, it is just like a different layer. Now we're talking about a
[00:49:40]  layer, like I was using below and above, like we're talking about a layer above now. So like, it doesn't actually impact where you live. Like if people
[00:49:48]  want to add that stuff, that's fine, but it doesn't like, it doesn't fundamentally change your ability to package up these pieces together that you want to package up
[00:49:57] . So yeah, the alignment from like a, like spatial alignment makes a lot of sense to me. Um, I like it. Cool. Yeah. We're super
[00:50:05]  excited about it. So it's all, yeah, there's some cool tech stuff going on, which we can dig into. I mean, whatever, yeah, whatever
[00:50:11]  you kind of want to take this. There's a couple of good questions in the chat. People ask you about pricing. I think, I think I saw something. Yeah
[00:50:17] . Someone mentioned a, so it's not just a free plan, which I think is the big fear. Like, yeah, that idea of, okay, you guys have
[00:50:22]  a free plan. Are you going to have it in a year? Um, are you going to like yank this away from me when you've grown and got a
[00:50:28]  kind of mass market adoption? Um, for us, the whole reason we chose this tech stack was that it is actually going to work at scale versus I think what a
[00:50:36]  lot of other free plan, cause like adoption. And then like, they realize when they have, you know, so many people on their free plan, it's like,
[00:50:42]  Oh God, this is not scalable. This is costing us way too much money. The whole tech stack we have is basically designed for that free plan to work long-
[00:50:52] term. Got me logged. You got, got me logging in here. Ooh, I'm just, I'm just checking this out. I have not. Yeah. So
[00:51:02]  Astro DB is the database and then studio, you can think of kind of as like the dev console for logging in, managing your resources, spinning up new databases.
[00:51:10]  Because yeah, I went to go get me free Astro DB and then it sent me to Astro studio. So I, I, I do sign up for this,
[00:51:17]  right? Yeah. I mean, so it's kind of up to you how you want to go through this flow. We could start on just like the total open source side
[00:51:24]  of things, or we can jump right into a hosted database, whatever you think makes sense. Yeah. We can start on the open source side. I was just curious cause
[00:51:29]  people talking about payments. Okay. So I'm, I'm, I'm straight to the credit card. Oh, maybe later. Okay. Maybe later. Okay.
[00:51:40]  Okay. So that's fine. I, I just wanted to, I clicked the button on the link. We can actually go the other way. I was just, I
[00:51:46]  was just curious to see if I was trying to find pricing information. It was actually what it'd be because. All the way to the bottom of the page. Yeah.
[00:51:53]  Base plan. Dinner's free tier. No credit card required. Unlimited. Unlimited. Sorry. One gigabyte included per month. Okay. Okay. Yeah.
[00:52:08]  So someone asked like, how do you, yeah, how do, how do we align this? And the way it is, it's, it's as you grow,
[00:52:13]  if you go past the billion row reads or a million per month rights, then we charge for that. So there's no, like, you just are using this for like
[00:52:22]  a hobby project, your home homepage. It's totally fine. It's really hard to like break this in the way that like AWS, you get a runaway function
[00:52:29] . You're spending thousands of dollars. This is like, you know, I think we threw it at a live stream with like, yeah, billions of requests coming in,
[00:52:37]  I think over the course of the day. And it was like still basically just maybe five bucks at the end of like a huge day of traffic. It's really affordable.
[00:52:45]  And that was the main big thing about what we're going for here. Gotcha. Gotcha. Okay. Okay. Yeah, yeah, yeah, so there presumably will be
[00:52:55]  other plans, right? This is, this is just. I've been pretty, oh God, what's it like usage-based build? Is that a usage build?
[00:53:02]  Right. This idea of like, maybe there's a, maybe there's room for like an enterprise. Enterprise, yeah, yeah. You need like HIPAA compliance and
[00:53:10]  there's like kind of like next level of compliance and like auditing and security. Like I get that there's a room for that, but like this idea that if we
[00:53:18]  added like branching or a database for every PR, like that's not like a paid feature, that's something that should be there for free. Because at the end
[00:53:24]  of the day, it's leading to more usage and more databases. Like that's all just more usage at the end of the day. So what I love about AWS and
[00:53:30]  others, it's like any feature that is the killer feature for you should be the thing that like, why would you put that behind the wall? You're like locking out
[00:53:38]  someone's ability to fall in love with the product and become a paying user. Yeah. No, sounds good. I like the no credit card required. I always try and
[00:53:47]  do anything and they have my credit card. And then some point later, they'll, they'll get you. Even when you're like on the free plan, you
[00:53:51] 're somehow end up not on the free plan. You're just like. Yeah. People are saying, I agree. The one gigabyte is like pretty like generous in terms
[00:54:01]  of like, I don't know if I've, it's been a while since I've had at least a personal database that was that big. So yeah, the idea
[00:54:06]  is that this is meant to not. Yeah. You know, it's, it's big users that we want to make sure we're capturing here, but like anyone building
[00:54:12]  a hobby project, agency, like these things shouldn't be breaking the bank. And that's because of the tech stack we chose. Like this is not us going out
[00:54:19]  of pocket. This is like a fairly competitive model for us to run it at large scale. Nice. No, that's, that's awesome. Um, I, I
[00:54:27] . Shout out to Terso. Terso is pretty cool. Yeah, no, I, I, I'd never heard of Terso before this.
[00:54:35]  So, um, yeah. Okay. No, that's, that's definitely very cool. Okay. So, um, how do I actually get started then? Like if
[00:54:43]  I, if we're going to ignore this stuff, like I actually don't, I, I suck at building stuff now. Anyways. Um, I, I basically have
[00:54:49]  gone to the point that I only know how to make hacker news demos. Well, yeah, I was actually, that was my only suggestion I really had come into this
[00:54:57]  is like, is there anything that you'd want to add to the hacker news demo that would require some sort of database, like output system or. Yeah. The problem is
[00:55:04]  like, it's already on the, uh, like it, I, we'd have to like make our own hacker news at that point. Like set up. Yeah
[00:55:12] . Exactly. Let's do it. Add a comment on a post that's only on your clone, not on the real one. Yeah. Um, yeah, doing anything
[00:55:19]  with text input, I would say on the live stream is a little risky. It's, it's, it's okay. Don't I, I, I, I
[00:55:24] , I'm not gonna be able to top what you did with prime on the, on the visual thing. I still have that demo. If you want to just run through
[00:55:31]  that, I can show you exactly how that works. Yeah. Let's, let's, let's take a look at it. Cause I'm going to obviously have technical
[00:55:36]  questions. I don't think people are going to get value from me building this particular example, but you know, like from the, on that side, but I definitely
[00:55:42]  will have some questions. Uh, obviously just starting with how you chose the pieces that you're using in the stack. I, I did. What did I, did I
[00:55:52]  already, I already like lost the link. I was like so happy that I saw that you, someone had written an article that was seemingly interesting. Ooh, Matthew Phillips.
[00:56:01]  Yeah. This is probably good reading, but yeah, there's some, I mean, that's yeah, totally wherever you want to go with this. I think there's
[00:56:08]  some really cool stuff about the database layer. And how it works at scale. Like the whole idea that we could go down to zero is really unique for the space.
[00:56:15]  Like the whole idea that if anyone here has ever used like a free plan in another company, it's like basically, all right, we're going to have to start this
[00:56:22]  thing up. Cause you haven't used it in a couple of days. So like come back in five minutes or it's like, all right, this spun down an hour
[00:56:27]  ago. And now you're making a request. It's gonna be a five second cold start to talk to that database again. Do you want to solve it pay us
[00:56:33] ? But it's like, you can just tell that these are expensive resources being moved around to power these free plans. When for us, it's, it's all stat
[00:56:41] eless. It's all essentially a serverless database. Hmm. Right. Yeah. So like, this is just an extension. Like I, I see the whole story
[00:56:49]  cause you guys had the content collections, which is basically a way of querying, uh, like some kind of data source, like a CMS kind of, kind of thing
[00:56:57] . And now you've just, the whole thing just ties together. Oh yeah. You, you do mention word. Yeah. WordPress is mentioned here. Right. So
[00:57:04] , okay. So I think that's the thing. Everyone thinks that WordPress is a CMS, but for us, it's a database and a framework tied together. I think
[00:57:11]  that's the huge inspiration for us. Yeah. Contents reference database, like we're in propels system with challenges. Right. Um, SQLite. Right. Cause
[00:57:24]  this, this has to be it being portable enough to work on every plot. Yeah. I mean, here's the, so this is kind of lost in the interesting
[00:57:32]  thing here is I don't think this is a thing that anyone could have built even like six months ago, maybe nine months ago. Like there's a real time and a
[00:57:39]  place to this, which is pretty exciting, which is that when we tried this last year, like the ecosystem wasn't actually there for us to handle this. Like the SQL
[00:57:48] ite ecosystem even was all like native compiled by means to C plus libraries, talking to the SQLite database. it was like really heavy, kind of cumbersome and
[00:57:57]  like would never work on stack blitz, which was. Yeah. Like, yeah, deck blitz. Yeah. This, this is important. No, I love stack
[00:58:06]  blitz. It's the best thing possible for reproductions, but they don't support async local storage, which it's so funny in a short period of time is
[00:58:14]  become like this, the standard for any kind of like framework that does compiled RPCs. Like otherwise your API looks like crap. Well, that's what we did
[00:58:25] . Our server dollar sign was fine. But then like, it wasn't, it always bugged me that like, there was no way to get the request in.
[00:58:34]  I, and like, I, I refuse to budge from us being transparent. Like the function you call being the function you get. I didn't want to like put
[00:58:42]  in secret arguments and all that stuff. ALS. Next pushed it. Everyone got it. But stack blitz does not have it still to this day that I have to
[00:58:50]  like, do like pseudo patching. Luckily solid has some tools there that, so like it kind of works, but yeah, anyway, sorry. Was there any,
[00:58:57]  was it one of those things you realized way too late? Like, oh God, no stack blitz. Yeah. Yeah. I, I, I, I, because
[00:59:04]  I, I was dragging, like, I always knew ALS was going to be like a solution. And then I was like, but it's only a node. I
[00:59:10]  can never do this. So we started like coming up with crazy ways to abuse the JavaScript language and make it do what we want. And eventually like we're talking about using
[00:59:19]  bind and this and all these things to kind of do this. And all these things to kind of sneak the request in, but they didn't work with the arrow functions
[00:59:24]  versus not because of the, you know, you know, arrow functions don't have a this, you know, like this, like billions of little problems. And then eventually
[00:59:32]  like we never really solved it. And then next.js came out and we're like, yeah, we're just using ALS. I'm like, how do you
[00:59:38]  do that? Well, they, they released in a patch release, break cloudflare, Netlify, everyone else in 13.2, I think, or whatever
[00:59:45] . They did break every platform except for a cell. And they're just like, oh yeah. I remember, you know, Dino, I remember God, Luca
[00:59:51]  got so pissed. He was like, he's like, what, what's the point of having standards, you know, and their response to something like standards plus or something
[00:59:59] . Like in the end, all those platforms have async local storage. Now Netlify supports it on their functions in the edge, obviously. Cloudflare supports
[01:00:09]  it. Dino supports it. Everyone supports it. Thanks to next basically forcing it through. Except stack bullets. I didn't, I didn't realize that though.
[01:00:18]  Cause I was like, oh, everyone supports it. It's go time. Thank you. Next. And then it was like, oh, wait. Yeah. I was
[01:00:25]  worried for a moment until I realized that like the 90% case people aren't going to hit it. It was like, because there's tricks. We are really like
[01:00:33]  the, the reason async local storage is so powerful. I don't know if anyone on the stream about Astro cares about it. Um, is that, um,
[01:00:41]  the, there's a lot of time when you async, you got to resume context, whether it's reactive context, whether it's your framework context or whatever.
[01:00:47]  So we needed solutions for this to do async on the server, even before, um, ALS was available. So we were like patching globals, like with
[01:00:55]  like temporary, like, so it had a fixed location, but like would the framework would control swapping in, which the active process was. Okay. So we, we
[01:01:04]  had a mechanism to do it within our primitives. So I can make stack bullets work by using that mechanism to do it. But if you, if you're just randomly
[01:01:12]  going like, I'm going to wait something randomly over here, then yeah, it's not going to work. There's nothing you can do. But luckily for us
[01:01:18] , it's going to be a bunch of stuff for like, it's not actually production either. It's like just for development. So you can kind of probably get away
[01:01:24]  with some, like, I don't know, throw it in like an object store or something. Just like a dumb object in the runtime. Yeah. So yeah. Oh
[01:01:31] , Dave, Dave's coming in from a pretty late here. Sorry. I just, I'm trying to catch up with. He does like us. He's like,
[01:01:39]  all right, let's do it. 1:30 AM. All right. Friday night. Let's go. Yeah. Yeah, exactly. Yeah. That's like
[01:01:47]  the good old days. Um, but yeah. Uh, anyways, handing it away. Yeah. This is actually incredibly important. 90% of our, our repos come
[01:01:56]  back on stack blitz. I love that. I hate, honestly, if like I prioritize that way, I know it sounds bad. Like sometimes when there's an
[01:02:05]  issue that's just important, I'll prioritize. But I go through the reproductions usually. And if it's like stack blitz, I'll usually look at it right
[01:02:12]  away. Yeah. If it's GitHub, I'll usually look at it in a couple of days. And if, if it's like, like, uh, because
[01:02:18]  then I can, you know, port it to stack blitz. Maybe if it's like some like zip file or something, someone sends, uh, I'll see you
[01:02:24]  in a couple months. Like, so like, uh, it's dry hacker. Like it's, it's, it's, it's just like by the time
[01:02:31]  I actually get to it, it's, it's just, it's very, it's, it's stack blitz just completely makes it that much more pleasant to deal
[01:02:38]  with. Yeah. Yeah, I agree. I, yeah, I can't imagine. Yeah. The trade-offs for like, this is a whole, like, feature
[01:02:45] , like your trade-offs are probably different from ours, but for us, it was like so important that that worked. Like, I don't even know if it was
[01:02:50]  like, because stack blitz is so more, more like it represents how cumbersome, even though it's possible on node, it's cumbersome. And
[01:02:57]  then not possible on stack, but it was just like together. It was too much. Like, this is just not up to date. It's not going to work.
[01:03:02]  There's a world where we could have built our own maybe and compiled it from like go to whatever yes, build is doing and have a wasm build. But it was
[01:03:09]  just like, at the end of the day, we just couldn't do it. So we ended up giving up for actually a while for a couple months. I see.
[01:03:15]  Okay. So basically torso who I've never heard of before, cause I don't pay attention to this space. Basically we're like, okay, we, we have the
[01:03:24]  same problem. Um, and they found their solution in lib SQL. Yeah. Terso is actually, yeah. So they, um, I don't know, I
[01:03:33]  actually don't know the full backstory, but it effectively got to this point where they ended up forking SQLite. Right. They were kind of like frustrated with like
[01:03:40]  SQLite actually doesn't accept the external contributions. I think it's essentially a solo or team based project, not really focused on external contribution. So there wasn't really a
[01:03:48]  chance to get in the improvements they wanted. They ended up forking and basically building all these really cool features into SQLite while keeping compatibility with the syntax. So to
[01:03:56]  the user, it's exactly the same, but internally there's a lot more going on in lib SQL and including the new driver. So basically solving the problems with the existing
[01:04:05]  SQLite ecosystem. Now there's modern drivers wasm build. So you can actually run in stack blitz, all this cool stuff that brought this back into the focus for
[01:04:13]  us. It solved that huge ecosystem problem that we had run into six months ago. That's cool. Dev gets it. There's like a million different packages and they
[01:04:22] 're all in different states of repair. None of them work in stack, but just kind of the summary of where we were at. Gotcha. Yeah. Yeah. No,
[01:04:29]  this, no, this is very interesting because I've been obviously looking at different database solutions on the edge, mostly just to make really hot looking demos. You know, that
[01:04:37]  Trellix Ryan Florence demo. Like there's like, there's a real tension there between like copying his fly IO example, or like, or like deploying it to
[01:04:49]  like Netlify or Dino edge. And then like, and like have all the fast stuff. Like, like, don't give me like, if I, if
[01:04:56]  we're going to make that demo, I don't want to just get his like a plus. I want to smash them out of the water. So like, like,
[01:05:04]  yeah, I I've been looking at, you know, different things. Cause I'm like, I could use a KV for a demo that simple, but like
[01:05:10]  Brian would probably be like, it isn't SQL, you know? Right. Right. Are you really, are you really doing it the right way? Yeah. You know
[01:05:18] ? So interesting. Um, yeah. Okay. Yeah. So. Okay. Okay. Okay. Okay. Should I like, are you finding us just going on with
[01:05:30]  this article? Is there more stuff you want to add? Is this a good baseline? I want to see the example in a minute and we'll go over the code there
[01:05:35] . Um, which you sent along. Um, but I, I was, is it more of these are. The thing that you're here hovering over, I think
[01:05:42]  is the cool part. So the whole local dev story where we are not worrying about Docker, these like server kind of stateful heavy local databases. Yeah. You're actually
[01:05:51]  getting an offline, go on a plane. You can keep working on Astro DB, um, like fully kind of lightweight database that's local. And if you need
[01:05:58]  to clear it out and reset it, it takes a second. And it's basically just a single file. So we create the file. Right. We read a schema from
[01:06:04]  a DB config file. We read a seed information from a DBC file and it's good to go. Right. I mean, this is a property of live equal,
[01:06:14]  right? Like they, they, it's pretty common to have these like single database file, local databases. Right. Um, but just, just like, so I
[01:06:22]  like get, get here. This is if I'm understanding here is Astro will automatically do all those steps. You just talked about that are available because that's how,
[01:06:34]  um, lib SQL has the, uh, local support. Yeah. Gotcha. Okay. Doing this all invisibly behind the hood and is super lightweight. And this is one
[01:06:44]  of those things where it's like, this seems so intuitive, but if you actually ask or look at the ecosystem right now for. Local database development, you are either
[01:06:51]  saying screw it. I'm going to talk to a remote database for development. Who cares? I just can't. Right. If there's a network problem, like I
[01:06:58]  just hope there isn't basically. Right. Or you're saying, okay, I'm going to run this locally. So it's reproducible, but now I'm running
[01:07:05]  a database locally, which is not an easy. Um, it's people do it. It's, it's possible, but it's kind of a pain, especially if
[01:07:11]  you don't know what you're doing. Yeah. Yeah. And it's, and it also really sucks for demos or one of the perfect examples. I mean,
[01:07:17]  it's not a big deal, but I remember when, uh, the server component notes demo came out and I'm, I'm literally like, I've done a billion
[01:07:24]  times before on my work computers, but I'm like on my home computer. I'm like, oh, what? Okay. Yeah. Let me go set up post
[01:07:30] grads. Okay. Let's get the daemon running. Like, like, why am I doing this? I just wanted to see server components. Um, yeah.
[01:07:36]  Yeah. It's like this hard thing because it's, that's the, it all kind of flows down from that. Like it's a heavy resource when you talk about
[01:07:43]  databases traditionally. Right. Yeah. Everyone offering the free plan is dealing with a heavy resource. That's why they have the limitations or why they have to pull it out later
[01:07:50]  once they hit scale. Um, and it's like, why it's so hard to do is cause this isn't like a lightweight file for most people. It's
[01:07:56]  a big compiled, you know, binary that runs a server and has to be maintained. You need a daemon to manage it. Yeah. It's a whole thing.
[01:08:04]  And so, yeah, you get to just avoid that all in this model. Yeah. Docker crying in the corner. Yeah. Do I, do I want to deal with
[01:08:11]  Docker? I mean, I understand there are people who like live by that. And then they, I I've seen people like almost like live their whole dev dev experience by
[01:08:18]  Docker. Like their whole, everything is just like a bunch of Docker file. Like they just like, they just swap in their environments to do every different thing that they
[01:08:26]  do. I, I, I couldn't get there. Yeah. This is what feels so Asper to me is like, there's two approaches. That one is like
[01:08:31] , we'll just learn Docker. Like, what do you, we'll stop, stop complaining and just learn Docker. It's a really powerful tool to solve this really
[01:08:38]  complex problem. And then the Astro thing is like, why are we even doing the complex problem in the first place? Like that'd be our approach to like performance and
[01:08:45]  front end stuff and complex web bundles. Like what if we just actually change the formula a bit so that you're not shipping all this JavaScript. So you're not depending
[01:08:52]  on a really heavy database. And is there a great DX that's kind of hidden there by changing the variables around that's, that's always been awesome. That's
[01:09:00]  kind of feels, that's why this feels so, I think uniquely us. Yeah. So, yeah, I mean, I guess I'd have to dig more into lib
[01:09:07]  SQL to understand like other stuff. Cause obviously I I've seen here this configuration. There's also your seed data. Um, it ends up in the empty database.
[01:09:15]  Um, I guess approaches to my private chat at you, the repo that we can use to spin up. Definitely. Yeah. Yeah. Uh, but like do stuff like
[01:09:24]  migrations, all this, like there there's, I'm gathering, like there's, there's. Are, is Astro wrapping all of those elements of it?
[01:09:32]  Or is it at a certain point, like you're kind of just, um, uh, we even include an ORAM for you drizzle. Nice. Um, like
[01:09:39] , like database migrations and all these kinds of like other things. Like I, I'm, my head's going to rails now, because once you enter this place,
[01:09:47]  you, you get to a place where people are like, you know, start thinking about, oh, I remember back in the day when I had active record, you know
[01:09:54] , um, like it is. I guess you're, are you, is this is stuff after providing, are you getting this from other, other sources? Another way that
[01:10:04]  people ask this question a little bit more aggressively is like, well, why don't I just set all these things up myself? What are you like? Why would I
[01:10:09]  use your thing? And which is a fair question. But I think it's, that's actually the answer is it's the same answer to that question, which is there
[01:10:15] 's a lot of. That kind of, how do I do X that we basically not just give you an opinion and answer, but we actually built into the framework. Right
[01:10:23] . So you are totally welcome to, you can spin up a terse database. You can spin up drizzle. You can figure out how you want to do migrations
[01:10:29] . You can do all these things yourself. And what we do is we actually provide that in a, what I would say is a better approach for, for most people.
[01:10:35]  So our migration system is like totally automated. You're on DB push. It syncs the local schema change you've just made with the remote one. Okay. Autom
[01:10:43] ated if there's no data loss guaranteed. And if there is any data loss risk, it walks you through it. And it's all automated as much as possible. You
[01:10:49]  can connect into your CI. You can basically have a live database resolver connected to your main branch. So you're auto deploying on every commit. There's a bunch of
[01:10:57]  cool stuff you can do when you treat it like a deploy or like a git push versus a migration system. I see. Yeah. This is, this is interesting too.
[01:11:07]  I'm just like reading these notes and learning stuff that you guys actually looked into D1 because it came out earlier in the chat and I kind of ignored that because we were
[01:11:14]  talking about the local solution, not the remote solution. But, you know, I think earlier in the chat someone was like, how does it compare to Cloudflare
[01:11:21]  D1? You know, notably Cloudflare D1 has five gigabytes of free tier. But you guys mentioned here that the, to get to D1, you have
[01:11:31]  to abstract through the workers and the worker bindings. And like, whereas like LibSQL is like literally built to be that local database. You don't have to worry about
[01:11:42]  like any, like the, the Cloudflare isms. Um, yeah, I think it said in this post, but we actually started building this on Cloudfl
[01:11:47] are, um, like for six months, maybe like we really got pretty far on their platform. And it's, it's very similar in what it's trying to offer
[01:11:53] , but the implementation is like actually for a totally different user. Like we're trying to spin up lots of databases. Um, their model, it's like very much,
[01:12:01]  yeah, database and worker. So like, if you're a company, it kind of makes sense. Right. But for us that meant like, all right, 10
[01:12:06] ,000 databases, 10,000 individual workers to talk to those databases. And like, good luck when you need to go make a change to that, um, proxy layer
[01:12:13] , that script, you're going to have to redeploy 10,000 workers. And let's hope none of that fails. Like what if one fails and yeah, just
[01:12:20]  a very different model that for us was almost, yeah. Once we got deep into it, realized it was kind of a non-starter or at least would be very
[01:12:26]  difficult for what we're trying to build. Hey, Anthony, let's just see. Uh, sorry. I just, the, I, I saw this and FS jam
[01:12:34] , which is also the name of, I believe his podcast. Um, but full stack jam framework, I guess, I guess that's, I guess that's accurate.
[01:12:44]  Um, but yeah, no, this opens up different dimensions. Now when people think of Astro as a solution. Oh yeah. So you get zero downtime schema migration
[01:12:53] . Yeah. You get, see, I just didn't read far enough. Um, yes. A lot of words. I mean, it's a deep dive. I
[01:13:00] , I, I skim these things myself, but yeah, this is getting into like the schema migrations where we're actually encouraging a lot of best practices or we're
[01:13:06]  trying to in our, but in our opinions. So the whole thing is, let's say you want to rename a column. Um, we're actually like going to basically
[01:13:14]  explicitly walk you through how to do that in a way that doesn't lead to downtime, right? Cause what if old server code talking to new database, all of a
[01:13:20]  sudden you've renamed a schema. So the old column doesn't exist, but your deploy, no one's timing the deploy perfectly. It's very difficult to do that.
[01:13:28]  Right. Cause you have to build and deploy and maybe on for snow and Netlify. So there's all these best practices that we try to make as easy as if
[01:13:35]  you had just renamed. Right. But we abstract away and kind of walk you through the right way to do that in our opinions. Well, that that's, that
[01:13:43] 's awesome. Yeah. The classic problem of like, I've seen here, like changing a database, renaming a database field. Like, could you keep like trying to
[01:13:50]  keep the old field up while the new field comes in and have the old field leave. And like the whole swap over you guys, you're saying basically you just encode
[01:13:59]  the right practices in because yeah, it's not acceptable to just start swapping stuff when it's not all synchronized. Yeah. All right. All right. All
[01:14:09]  right. All right. Okay, fine. Let's look at an actual code. You guys want to see some code, right? We've been, we've been just
[01:14:14]  talking about drizzle versus backbone or M because backbone or M was a, or M that I worked on back in the day, um, which was, uh, uh, it
[01:14:25]  let you do like relational database queries with Jason at, uh, from the client and all the way through the whole, the whole thing. And it, um, it
[01:14:36]  was like MongoDB syntax. So yeah, this is a, this is a funny shout out. Um, anyway, uh, let's, let's pull that code.
[01:14:44]  Should you pull it up or should I pull it up? You get, you send it to me, but there's a link there. Um, I'm actually just pushing
[01:14:50]  the upgraded lock file just to make sure you're on all the latest stuff. Okay. I would say you run through if you're, if you're all right. Yeah
[01:14:55] , let's, let's do it. Yeah. All right. Here we go. DB place. I'm going to start it just cause I can now more people
[01:15:02]  will check it out. Maybe. Yeah. Trying to be like a, our place was always what I was going for with this demo. So this is not someone while you
[01:15:10] 're kind of cloning this, someone asked like, is this con like you're saying content based and content driven, but then like this demo especially is going to be like
[01:15:17]  a very interactive app. an interactive app. So I think there's a lot of kind of different ways to think through what you build with this. It is just a
[01:15:22]  database. You can build whatever you want, but obviously our focus, the Astro thing has always been content focused. So if you look at our homepage for this,
[01:15:30]  there's a lot of talk about if I want to add a comment system to my, to my blog, right? Or a reaction or a feedback widget. There's all
[01:15:38]  these things that content sites care about that might not even be like build my full app with Astro DB. It's one of the cool things about this is you can
[01:15:45]  kind of put it up next to your content. Like if you have a blog coming from his headless CMS, you can build a common system in Astro DB and you
[01:15:52] 're just referencing that blog post by ID. So you keep your CMS and now you've added this cool new story next to it. Yeah. There's some really cool stuff
[01:16:01]  you can do with how lightweight this is that you don't really have to jump all in and like rebuild my whole site with this new database tech. What do I want to
[01:16:07]  say? Examples DB place. DB place. Yes. I trust the authors. All right. Get his, get his tokens. Get his crypto. Go. All right
[01:16:21] . So let's see here. So NPM install. So this should be, oh, let me try and remember. So I think I ripped out anything that was like
[01:16:30]  opinionated about where you're going to deploy this. Okay. If I look at master config file, yeah, it's using the node server. So if you want
[01:16:38]  to deploy to notify that should be pretty simple. Originally this was written for view. That was also pretty simple. Okay. Cool. Cool. Cool. So we have here
[01:16:50] . Let me see. I just want to make sure. Let me full screen. To run this locally. All you should need to do is just Astro DB or
[01:16:56]  sorry. Astro dev in DB brand. Astro dev like any other site. What am I doing wrong? Oh, it's a script. So PM PM run.
[01:17:05]  Yeah. Yeah. Yeah. Localhost 4321. Okay. There you go. Collaborative drawing app. You should be able to. Now, the thing about this
[01:17:15] , I'm going to say the one thing I haven't implemented in this demo, you got to do that yourself is the actual database calls. So you have the UI here
[01:17:26] . It's working. But if you go to refresh your page, I think it all clears out because you haven't actually persisted this anywhere. Gotcha. Cool. So
[01:17:33]  let's see what we're dealing with here. We have Astro pages. We have some API for click and refresh. Um, and then we have some react components
[01:17:46] . I'm assuming. Oh yeah. The other fun. If we get to it, let's just rewrite all this in solid too. That'd be a good time.
[01:17:52]  Forward ref. What's this weird thing? Yeah. Yeah. Oh, react. Gross. Yeah. I'm just looking here. Most of this always finds an opportunity to
[01:18:03]  crap all over react. Huh? Yeah. It's basically a react app. And then I pulled a couple of components out, but at the end of the day,
[01:18:11]  it is fetching the grid full of data. It's painting onto a canvas and it's giving you this UI for updating the, uh, the UI, the, the
[01:18:19]  paint canvas. Um, the two places where I have left to do's are the two API endpoints. So everything is running right now and should be connected. I think
[01:18:26]  I even saw that in what you're doing and you see that refresh polling. Yeah. Yeah. Yeah. Yeah. Definitely. So, so this, you, this
[01:18:35]  app is kind of real time then like if other people. Big quotes around the real time. It is, it is real time in that it is, um, you know
[01:18:41] , it's basically pulling every second, I think, and pushing your changes. Not if you were really going to build this, you should have website. Cause you have a
[01:18:50]  bunch of crap. Yeah. That's not here. I added the protections for rate limiting. And so no one could kind of hack this while you're streaming. Yeah
[01:18:56] . So the, the fun thing about this is like, I could probably, I could probably port this from solid to react like the naive way in like two or three minutes
[01:19:07] . It's just, it's just, I'm like looking at this and I'm like, what, what is this? Like, is this a, like,
[01:19:12]  is this something we do like chaining use effects? Um, I, I, anyway, I, it's fine. I, I, we're not going to focus
[01:19:19]  on that part. There's only four files that change. You can do it. No, no, it's okay. That's not what we're here. I mean
[01:19:25] , let's get it working and then you want to do it. I think it'd be really fun to see. I, I'm always looking for more solid experience,
[01:19:30]  but, um, uh, let's, let's, let's start here. So we have refresh, which. So the do, I will say that to do comment
[01:19:38] , I just am realizing is out of date. It should be saying fetch all the cells in the database, not update. I just copy, pasted the, uh
[01:19:45] , got you from the other one. So this is the yet. And then the other is the post. Okay. So there's a bunch of stuff here that I just
[01:19:53]  wanted to be safe and give you a bunch of protections. Oh, I see. I see. Yeah. Let's go down here and you'll just see that like,
[01:20:00]  essentially this is the end point. Okay. Right. Cause I was, I was like looking at all this. I'm like, what are you, what are you doing
[01:20:06]  here with an LR? I need a big comment that says like, you don't need to worry about this. This is just for you live streamer to not
[01:20:11]  mess yourself up. This is the worst way to do real time. According to online blog posts. Okay. Yeah. I mean, you'll, if we can get this
[01:20:21]  deployed and getting people on it, it is like, you'll, you'll feel the warts. You'll feel what you're not getting with actual real time.
[01:20:26]  But yeah, a second refresh rate is not the end of the world. You get some. Okay. So the first thing we need to do is save our stuff to a
[01:20:34]  database. Uh, probably. Yeah. And we're at, we're at point you to, to see how this all kind of works is that DB folder is actually going
[01:20:41]  to give you a big kind of, um, walk through what you're working with here. Um, so you have the 2000 config and the seed. So this is
[01:20:48]  all you need. This gets fun up. Right. Fig is where we define our tables and then seed is where we see them with any local dev data you want.
[01:20:54]  Okay. Um, so okay. Astro DB. Um, okay. This API, is this your API? Is this a report of drizzle? I've never used any
[01:21:05]  of this. I built my own ORM back in 2013. I haven't used one other than my own, but I, I left the company in like 2019, still
[01:21:13]  using that same ORM. And then I, I basically haven't used like modern ORMs. That is the most you answer of all time. It's like, oh
[01:21:23]  yeah. I haven't used in a while. I did build my own once, but that's about it. It's like, oh, okay, cool. Yeah
[01:21:28] . You're already probably further ahead than like 90% of people in your audience by building your own ORM. Yeah. Okay. So yeah. Okay. This is all
[01:21:38]  us. So this whole idea of like the schema definition and the framework tied together, that's us. Okay. We're using drizzle behind the scenes. Like, oh,
[01:21:43]  this is powered by drizzle. And the whole idea that you're defining this and then we'll get to it when you're actually writing the DB client, that's drizzle.
[01:21:49]  That's type safe. Okay. You don't write a single line of TypeScript, but you get this type safety. I get it. Yeah. So basically every
[01:21:57]  row is an X, Y and a value. And then you precede it with the dimensions of the table and then some default value here. And then every right,
[01:22:09]  we're just going to be updating a single cell on a click essentially. But yeah, it's been a while. Okay. Yeah. That's interesting. So we
[01:22:20] 're actually updating instead of insert. It's an interesting case where it's like all updates basically all the time. Yeah. Okay. Okay. So then I'm gathering
[01:22:30]  everything directly from Astro DB, right? So I'm going to be like importing something from Astro DB. And that import is going to be, I have no clue
[01:22:42]  what the imports can be. What do those APIs look like over here? I mean, I should look at documentation first, right? No, you got me. You
[01:22:51]  don't need any documentation. What are you talking about? Yeah. Okay. So what? Yeah. DB is the client. So that's the RM client that you're
[01:22:59]  going to be working with. Yep. DB, not DBN. Right. And then somewhere here. Yeah. So the real answer is actually, you can get pretty
[01:23:07]  far just kind of guessing what Drizzle's doing, but I actually find, especially if I'm starting a new project or just use it for the first time. Yeah.
[01:23:14]  You can open up the docs and get a pretty good walkthrough of what you're getting. So I can still walk you through it here, but. Okay. So which
[01:23:19]  doc should I be looking at the Astro docs or the Drizzle docs? So for this client, this is Drizzle. So you can load up Drizzle's docs
[01:23:25]  to get like exactly what these APIs are for updating. Yeah. See? Yeah. Cause like, yeah, I don't know any of the syntax here. Cause I
[01:23:32] 'm like, probably going like, do I need the DB reference the table or do I just use the string? I used to like handwrite the everything myself using strings.
[01:23:39]  So, you know. Yeah. So we can load it up or I can tell you the answer. Yeah. You can tell me the answer. It's fine. All
[01:23:46]  right. So grid cell. Yeah. It's a grid cell, actual table reference. So capital G. Yep. And just importing that directly. That's how Drizzle
[01:23:54]  works. It's using these table references that match the schema you defined. Interesting. But like the fact that you can just import it from there, even though like this
[01:24:05] , this makes me think of all of like hand stack router for a reason for some reason, because like the imports actually change based on what the, I would expect this to
[01:24:14]  be from a local location, not like a library location because. Yeah. Right. Because, because like the imports change based on the schema. But I guess this is
[01:24:26]  one of the advantages you can have of Astro DB. I don't know about Drizzle, but I'm gathering like you don't, does it Drizzle work like
[01:24:33]  this? Import grid cell from Drizzle? Or do you make something more like, yeah, you're exporting the actual table from a file. Exactly. So this is
[01:24:41]  magic. You guys can do. Okay. That's, that's awesome. Okay. And then I can just put the information here. Yeah. So. X, Y
[01:24:51]  value, essentially. Almost. It's going to be another function called the Drizzle uses chaining. So it's update grid cell dot set is going to be the next
[01:24:59]  thing you do. Okay, cool. Update. I'm actually going to pull up my solution just to make sure I have everything. Yeah. So dot set after that
[01:25:09] . Yeah. And then, okay. Values. Which is, is it just the object? X. Yeah. Okay, cool. So then what are we updating?
[01:25:19]  Where are we getting this from? Is this just coming? Oh, it's literally right here. Isn't it? You got everything you need. Yeah. Right there.
[01:25:26]  So. Okay. Yeah. Yeah. The thing about SQL is that they're going to update the X, Y value of every cell. So you actually want to put
[01:25:34]  a where condition, right? You actually only want to update the value. Yeah. Yeah. Yeah. So what's the, yeah. What's the, what's the
[01:25:42] . Where another chain. Okay. Yeah. So this is a cursor based. And this is where Drizzle has a couple of helpers. So there's the end.
[01:25:49]  You're going to want to basically put and as the next argument. You'll see an import. Imagine a function that you're importing from drizzle. Andy. Yep.
[01:25:59]  Um, and you're going to get two things, right? Cause we want where X is equal to X and where Y is equal to Y. Um, so people EQ
[01:26:06]  is. Okay. Yeah. Yeah. You're right there. Actually. I think. Yeah. Literally that exact, exact code snip is what we're going to grab.
[01:26:12]  X is equal to grid cell.x. Yeah, sir. Okay. Yeah. Yeah. So we can actually get the. Is it. Oh, interesting. Then
[01:26:21]  where is. Oh, interesting. Okay. Yeah. I got you. Yeah. Sorry. I was just like looking at it. I'm like, where's the reference
[01:26:27]  coming from? But this is all this like almost like proxy magic. Cause I was like expecting a closure or something, but it's. Right. Right. This is
[01:26:35] , this makes it all typescript type script happy. That's, that's quick fix. It's where this. And I'm gathering. I just put multiple arguments
[01:26:43]  in here. Equal. Grid. So why? Why? Now this not import. Quick fix. Yeah. Okay. David in the chat is asking, can you drop
[01:26:57]  down to raw SQL if you need to? Absolutely. Especially after seeing somebody's like, I want to like wrap like multiple conditions together. That's where I start to want
[01:27:05]  to reach for SQL. Yeah. Yeah. Just like SQL operator, which is another thing you import from. It's a function or a template. Yeah. But yeah
[01:27:14] , people, people love this like typiness. But yeah. Well, what's cool about that is actually gives you pretty decent type. Cause template literals and types are
[01:27:21]  just so powerful now. You can do the thing where like, it feels like you're putting a string together, but it's actually doing the escaping and security for you.
[01:27:28]  Yeah. It feels like, yeah, this is why the cursor thing was like when we did back when or M is actually a lot of cursor stuff because we were,
[01:27:36]  or M worked both with SQL and Mongo. Um, and it could make relations between Mongo and SQL databases. But there's some wild stuff. So this is why I was
[01:27:46]  like, yeah, the syntax definitely has that feel. Okay. Um, you can go run this, but you're not going to see too much anything because I'm
[01:27:54]  not actually fetching it. Yeah. So we should do it on the other side too. We have to actually do both. Um, cause the, it's interesting though
[01:28:01] . I just started curiosity because the, the, um, like I can click this a bunch, but is the refresh doing anything at this point? Like is it,
[01:28:12]  I'm gathering it's getting called cause I can see it every interval, but are we just returning back empty and empty is not doing anything? Um, presumably. Yeah.
[01:28:22]  Um, cause does this only send back changes? Yeah. It basically sends back every cell in the database. So if you were actually returning every cell, it's going
[01:28:33]  to basically over only overwrite what it sends back. Um, this is not efficient, but right. This is not sending change sets or anything really complicated. Yeah. This
[01:28:42]  is the dumb version of give me every cell. And then for every cell, I'm going to go and overwrite the color. So because it's basically saying nothing.
[01:28:49]  Yeah. Yeah. This is DB mon all over again. Sorry. I was just thinking what the solid implementation look like. Cause this is like the worst case scenario for
[01:28:56]  solid, like for react. They like showing off how you can like be really inefficient and how react does decently and solid. It's like, no, you would never
[01:29:04]  want to send all the data. Like this is like a diffing problem now. Like you basically forced the client to like, do all the work. Hugely inefficient.
[01:29:12]  I built this in a night. Like, yeah. Yeah. I think one thing I love about this is it probably took me a couple of hours to build the full front
[01:29:18]  end, but like the database part took like 10 minutes. It was, it was for how inefficient it is. It's pretty cool. Just see how quickly you can
[01:29:25]  spin up. All right. So our cells are, again, we're going to probably have to await. Um, DB dot, uh, why doesn't my editor,
[01:29:37]  every auto import. Okay. Dot. Uh, what are we doing? Get. That's select. Select. Select. Yeah. Okay. Select. Like links.
[01:29:49]  Select. Doesn't take an argument, but then dot from comes after it. From. Okay. Um, that's where you pass your reference to. Oh, and well
[01:29:58] , but it's like every cell. Right. That's what I think. Select would have had the cells, right? Yeah. Yeah. All right. All right.
[01:30:06]  So now if you refresh and we can kind of use your, um, yeah. No. Oh, watch that. That was cool. Yeah. This is about the
[01:30:17]  real timeness of it. Right. Um, you know what? Oh no, I actually know what this is. Um, go back to the, this is it.
[01:30:21]  Again, as I was adding before, I was trying to protect the streamer and I've ruined it. Um, go to the refresh. Do you see that cache control
[01:30:27] ? Um, it's doing some really, your browser is actually caching it. Make S dash max age on the, um, cache control header. Um, since
[01:30:35]  that equals one, you want S dot dash max age. That's going to tell the cache on like the hosted version, but locally it can be as dynamic as you want
[01:30:44] . Gotcha. So now you should get like instant. Nice. Yeah. Okay. Cool. Cool. And we can paint in many different colors. So pretty. Yeah.
[01:30:58]  People in chat are like, what's the URL? It's, it's only running on, uh, Ryan's. I have to deploy it. Yeah. There
[01:31:04] 's no database, like no Docker, like nothing behind my sleeve. It's just a, you spun a faster and you barely even felt that there was this database there.
[01:31:12]  Yeah. I'm just thinking, sorry. You got me thinking now. Whoa. The problem is each cell. Doesn't have a unique ID. Uh, like there's
[01:31:23]  no primary key here. Listen, Ryan, we can put this, we can host this or we can just start to, I would love to optimize this thing. It
[01:31:29] 's inefficient as hell. It's just, let's deploy and make a solid. Uh, we could start. Yeah. We like, it's all right. I was
[01:31:38]  just like thinking of how to port it to solid. Like, obviously we can do the same thing. The, the unfortunate part on the solid side is, um, it
[01:31:45]  would be re-rendering and I was like, okay, well we could do a diff. Right. But if we did a smart diff, I need to,
[01:31:52]  I still need a, a key to diff on because these are, I guess then it's the combination of X, Y. I mean, this is a good, this
[01:32:01]  is, this is a good question of like, huh. Should we turn this into the new, like build Trello in every framework? It's just like, how
[01:32:12]  would you do this? Yeah, exactly. Actually it's like hard mode. There's a database involved now. How would you do it? Yeah. Basically what we'd
[01:32:19]  have to do is we'd have to combine the X and Y into a key and then use that as the, as the ID. And then if we, if we
[01:32:27]  did like a string, like X comma Y, then it said, uh, and made that the ID for the cells, then solid would be able to do like a.
[01:32:35]  Per pixel fine-grained diff. So no component, no components would re-run. It would just update the pixels, um, on the refresh. They're the
[01:32:43]  ones that changed. Yeah. You can keep the API how it is and just, yeah, on the front end, basically keeping the local map of every cell. And
[01:32:50]  then it's actually what's changed there would be like the dumb. I, if, if I change the API to add the ID key on the solid side, it would
[01:32:57]  be like a single, like create async and just like, or like create resources or actually. Yeah. I'd use the, would I use the rotary friends? Yeah
[01:33:05] . Create, create async store, uh, store would just automatically do that. You basically just go like create async store, await promise. And then you have that
[01:33:13]  behavior. Um, but Ryan, this is your app, whatever you want to do with it. Oh, I don't know what you want to do. What time
[01:33:21]  is it? One 30. I mean, we have plenty of time. Um, I think people probably want to see it hosted first and then we can mess with it.
[01:33:27]  That would be my guest. Okay. Let's host it. Let's host it. Um, okay. Let's go and create an adapter here. Uh, set up
[01:33:34] . Let's go here. So outputs node standalone. And instead of node, we're going to use Netlify and I'll install that in a second. Yeah
[01:33:45] . I would just run astro add Netlify. Yeah. That's our command for just automating all this configuration. Of course. That always gets me. We
[01:33:53]  need like a global CLI. Does this actually work though? Like, will it push it through? It might get mad. Let me see. It should. No,
[01:34:02]  no, this is, this is PMPM adding it. I'm not, I'm not running the Astro. Yeah. Yeah. Yeah. I, I
[01:34:09] , I, or PM, PM X. Yes. That works too. Yeah. Or I can just do what I should have done a long time ago, which is P
[01:34:17] MPM. I Astro. Oh God. No, no, no. Don't do it. Cause then if we push an update, you're not gonna know what
[01:34:23]  version you're running. Oh, there we go. So then. Okay. Fine. MPX Astro add. Netlify. Fine. Okay. What did I
[01:34:32]  do wrong? Did I screw up the config file? Yeah. I think that because you made that change to, although I'm surprised that you also installed it. Yeah
[01:34:43] . I would just go back to what you had before you touched it and then try again. Oh, oh yeah. PMPM add. Okay. That's fine.
[01:34:53]  Cause I'm like mixing and matching. Right. Right. We're complete. What am I saying? Continue to? I'm just saying yes. Right. Yeah. Okay
[01:35:03] . Bye-bye node. Get out of here node. Um, netlify options. Um, do we care? Does this work on netlify edge?
[01:35:13]  Do we care? Yeah. I don't care. Worth a try, but yeah, I don't, I cannot comment on whether it should work. Okay. That's
[01:35:24]  fine. Um, I'm just trying to decide if I want to like manually do this. I don't feel like pushing the repo up at the minute. I can
[01:35:32]  just go like PMPM build. Login required. What? So this is where, because of the live dynamic site, we actually are going to talk to a hosted
[01:35:45]  database. Gotcha. Okay. To do that, we're going to authenticate and, and, uh, push it up. All right. People are like, I
[01:35:53] 've seen this three times already. This is because, uh, I told you, I'm like, I did it again. I'm just, I'm just late.
[01:36:01]  I know. I hate it too, but it's like such a pain to show. I guess we could probably show it. With your DB login. Okay. What
[01:36:10]  the hell did I do? Okay. It's opening up over here. CLI login complete off screen. All right. Okay. So now I'm successfully logged in.
[01:36:21]  Okay. So because I didn't provide a credit card before I'm gathering, what's going to happen is we'll, if we guys use the site too much,
[01:36:39]  it's just going to be done. Or you guys are going to have like a bill for me that I, I, I don't. I would be shocked if you
[01:36:44]  get anywhere close and yeah, we would start to like be very soft limit to start. I'm just getting an email about, Hey, you're getting close. Directory
[01:36:51] , not linked. Okay. So what, what, what, what's the next step? So you logged in and then the next step is, I think it tells you
[01:36:58]  there. Can you actually scroll down? I'm just Astro DB link is the next thing. Oh, actually that might be outdated out, but it's Astro link
[01:37:04] . Both will work. Um, it's not supposed to be the DB subcommand, but that's fine. PNPX. Funny. I've never actually
[01:37:16]  used PNPX. I got into a whole discussion with people this week because bun X solid didn't work for solid start. And it's because it's,
[01:37:24]  you'd have to go bun X, create, create solid or something. Whereas if you just use bun create, it's because like the automatically remove the crate. Anyways,
[01:37:34]  uh, link. Yes. Right. Hmm. Link with an existing project. No, I don't have an existing project. Do I? Oh, you shouldn't
[01:37:46] . Yeah. It's a blank project. It's an interesting default. Create a new project in actual studio. Yes. What is the name of your project? DB place
[01:37:54] . It doesn't have to be unique. It's just mine. Right? Yeah. I like that. Um, where do I want to deploy to North America?
[01:38:02]  West. Okay. All right. Well, this, yeah. So project created, project linked. You're good to go. Um, the only thing you'll need,
[01:38:17]  which I don't know in Netlify. So I'm just going to say this ahead of time because you need to set a app token in Netlify,
[01:38:22]  like the permission that tells your Netlify app, how to talk to the database. Oh, okay. Okay. I know how to do that in the web UI.
[01:38:29]  I just don't know how to do that from the CLI. If that's what you're about to do. Yeah. Yeah. I wasn't going to do it
[01:38:34]  from the CLI. I don't actually know any of this stuff. Honestly, I've only, I use a CLI usually to deploy, but interesting. Yeah.
[01:38:40]  Okay. So, because the next thing that I usually do once I'm, once I'm built is just run the Netlify commands, but you're saying that
[01:38:51]  there's going to probably be. Okay. Cause usually I would just be like, I just feel like this. I mean, this will work. I think just when you
[01:39:03]  do deploy it at all. Oh, right. I don't even have the Netlify CLI on this computer. I think like one of them's Netl
[01:39:15] ify. One of them's like Netlify and one of them's Netlify CLI. Honestly, do you have the GitHub CLI? No, this computer
[01:39:23] , this is ironic, but it's just, I do all my work on my other computer. Right. So like, I can't remember if it's Netl
[01:39:29] ify or Netlify CLI. I know one of them between Vervecel and Netlify have different installs. Um, one of, yeah, this one
[01:39:36] 's the dash CLI one. Nice. Oh, interesting. Okay. I gotta add the eye. Oh, thank you. Really? I never actually, like,
[01:40:00]  did I, did I never do this? MPM? No, but how am I using MPM install for the global stuff? What, how did I, how
[01:40:10]  am I even using PMPM if I never, whatever, PMPM setup. Okay. You're done. Okay. Oh, it's probably cause I have to
[01:40:25]  like restart the terminal or some garbage like that. Um, it's fun. All right. Funny. I spent all week deploying, um, demos on every content provider
[01:40:53] . I used Vervecel. I used Netlify. I used their edge and their, uh, and Cloudflare and the functions. I use workers and
[01:41:00]  pages. I use amplify. I use GitHub pages. I literally just not on this computer. Um, yeah. Okay. Cause usually I, yeah, I just go like
[01:41:09]  this and I'm gonna have to, I'm, I'm clearly gonna have to Netlify link now because I'm not logged in on this computer. Um,
[01:41:15]  no, why is this not even, it's funny. It thinks I'm logged in though. Do they not even let you deploy a local folder? I've done this
[01:41:33]  a billion times before. Let's just, let's, let's, let's, what's going on Netlify, Netlify deploy. Yeah. Okay
[01:41:43] . There we go. Creating figure a new site. My team, not the solid team. Uh, DV place. Oh, someone's, somebody's already got it.
[01:42:00]  Uh, was it, you know, um, DV place two, uh, not a bad idea. Oh man. This is when I lose all the viewers. Um
[01:42:14] , uh, for you guys, it's a, is it dist? I can never remember like this. Yes. It's dist. Pretty sure this one's dist.
[01:42:25]  Cause there's dist and there's dot Netlify usually. Yeah. You're saying that I, I will have to actually set up the, uh, something so
[01:42:37]  that the, it will communicate with the database. Cause yeah. Which is just a secret in Netlify. So if you, again, the web UI is the only
[01:42:44]  thing I'm familiar with, uh, to do this. Function has crashed. Cannot find module. Lib SQL, Linux X 64, GNU requires stack. Oh
[01:42:52] , lovely. Okay. So maybe, maybe we were a little bit too aggressive on our choice here. No, because this, this is actually like a module bundling
[01:43:05]  thing. I think. Right. Which is weird. Cause this is, this is, this is node. We're not using, uh, edge functions. We're
[01:43:14]  just using functions. Hmm. I was gonna say, I've seen this running on node and on Vercel. I actually, I'm not sure if I've actually
[01:43:22]  ever verified it running on that file though. Hmm. That's, that's fun times. Okay. That's fun times. Okay. Can we clear out your lock
[01:43:30]  file just to make sure that's all up to date? Sure. Sure. Sure. Sure. Sure. Sure. Let's just. Do it. Let's. Our
[01:43:42] . Node modules. Clear it all out. Okay. Let's. Yeah. I can't find web SQL. Using PM PM, right? It's not using MP
[01:43:52] M to install. Right. No, it must be smart enough to. Yeah. All right. And then we're going to build it one more time. PM PM.
[01:44:12]  Build. This is where I start to throw out my caveats of it's early preview. It's early access. This is three days old. We haven't caught
[01:44:23]  every bug. Um, I know we've tested out a bunch of hosts, but maybe Netlify, um, it's having trouble. Oh man, you guys are
[01:44:33]  killing me. So that's what I've done. I know it's, I know it works on Vercel, but I haven't tested Netlify. Yeah
[01:44:40] . Oh, this is what we're here for. Dist. Someone's asking if you need to run PM PM build before deploy. I'd assume Netlify is
[01:44:49] . Oh, it's the way I'm, it's the way I'm doing. Oh, I'm, I'm doing it. Um, it's the reason I
[01:44:57]  run build versus cause I'm building it locally. So to see that functions internal. It is. My guess is that your install of node modules. Oh, this is
[01:45:08]  interesting. Yeah. My guess is that you want the build to run on the same machine as Netlify's Linux stuff. It looks like it's looking for a Linux
[01:45:15]  dependency that your local machine might not have because you're on what I assume looks like a Mac, right? Yeah. Okay. Okay. Fair enough. So then to
[01:45:25]  actually do this. Okay. Fine. Fine. Fine. Again, I don't know if that's true. Again, this wasn't a problem when I did the exact
[01:45:33]  same workflow for verse. No, the problem was I didn't fork your repo. So like, uh, sign. Oh, are you pushing this? Yeah. People
[01:45:45]  are saying pushing this could also be the problem generally. Yeah. Well, if I see, I was, was more likely a fix. Yeah. Cause the thing is like
[01:45:53]  the, Oh yeah. Wait, wait, wait. Yeah. If you're just for, if you're just pushing the disk directory that has imports to dependencies. The
[01:46:00]  thing is when I build, I'm pretty sure. Like it's usually a disk folder or a, yeah, this shows up. It's usually a disk folder or Net
[01:46:10] lify folder. Like that's usually the, the, what you, what you do. Well, you have the Netlify folder up there as well. The dot
[01:46:17]  Netlify folder is a little bit different. Um, it's like an internal folder. Hmm. Uh, just give me two secs. Okay. Let's go
[01:46:27] . Let's go. If you're saying this disk folder is a static site deploy that, that would definitely be causing you issues. Cause it's trying to import stuff
[01:46:35] . And the fact that it's a DB import that's failing could just be a red herring. It could just be literally any import inside that app's going to break
[01:46:41] . Um, okay. Let me go into my account and look at, I want to look at the site for a second. Um, why is it not. You
[01:46:54] 're showing this on stream. That's brave. Yeah. I guess so. It's a lot of hacker news demos. It's also the most brand. Yeah.
[01:47:05]  Yeah. The funniest thing about this is I'm, I'm not actually seeing, um, I'm not actually seeing our DB place for some weird reason. Uh, it
[01:47:16] 's like. Maybe a different team in your Netlify account. Yeah. That's what I'm looking at. I'm like, I didn't deploy it to
[01:47:23]  solid. I'm pretty sure. No, I didn't. Every time. Every time I want to ask you guys doing hosting, I'm always like, no, like
[01:47:30]  there's all these other great hosts. Like we don't need to do that. And then like, I run into so many trouble. It's like hosting is just so
[01:47:35]  complicated. This is the exact reason. I never want to build a web hosting product, but also like, oh, it'd be so cool if we could just streamline all
[01:47:43]  this. It's like that fallacy. Like we'll do it. Right. We'll do it. I found it. It was at the end of the list.
[01:47:49]  The site has not yet been deployed. Classic. And you're like, really? Isn't that what it, it, it's because we probably only have preview de
[01:47:59] ploys so far. Yeah. Deploy. Yeah. Deploy preview. Yeah. Which takes me there. Sorry. I'm just looking off screen here, but there's
[01:48:10]  no logs or anything. All files already uploaded. No redirect rules process. One function deployed. No ed functions deployed. Visit your function for more information. Yeah. Yeah
[01:48:22] . I don't. I think it's well summarized in his comment. Yeah. I, I, I don't. Yeah. I think you're right. Killer
[01:48:31] . Yeah. Yeah. So when you tried to. Yeah. So the other way of getting around this, uh, obviously is, um, getting the. Netl
[01:48:43] ify the builders part of their pipeline, which usually requires me to push a get repo. Um, which. I think one more quick thing. Yeah. Can you try
[01:48:54]  to just deploy the entire directory? Not just the dis folder. Sure. Cause I think that if I smart enough, like that dot netlify folder is actually built by
[01:49:03]  us. Like, I think we actually build into your dot netlify folder. Okay. Whole thing. No functions. No cache functions. Okay. You're right
[01:49:15] . It's did find one function still. Okay. So I guess is that this would actually be building now in a remote place. Maybe. I don't know.
[01:49:28]  No, it's, it's the same. It's the same thing. Cause. Yeah. Yeah. I get the same error. All right. Do you have this
[01:49:38]  problem? Yeah. So yeah. I mean, I it's yeah. I, it's so funny. It's just because I like, I, I never want to
[01:49:47]  build. I, I don't want to get to have like a billion get repos. So like, I never, I never push stuff off. And which means
[01:49:54]  I'm usually just like hacking this along. Um, so yeah, I mean, uh, I could just, I could just push this up. I would have been better
[01:50:04]  if I forked yours. I mean, I could probably just, um, add it. I don't have to get all new CLI. You get the GitHub CL
[01:50:11] I on this machine too. Then GH repo, create, and you get your own repo. Get your own repo. You can also rm dash rm, r
[01:50:18] f. Uh, the doc, get repo. Uh, some of the words. You can rm. Yeah. Get directory. Yeah. Yeah. So this is where
[01:50:27]  we are. So cause I, yeah, as I said, I don't even have the GitHub CLI. Um, so what we're doing here. Yeah,
[01:50:33]  I guess so. The other options. Yeah. Cause I don't want to start again. I mean, we haven't done anything. I have one more idea. I
[01:50:44]  have one more idea before we do this. What's the package it's saying that's missing. You can actually manually have that as a dependency of your, of your package
[01:50:51] . JSON. Um, yeah. Um, yeah. Oh my God. Galera. We're me and Galera are one-on-one here. So you
[01:50:59] 're saying that if I take. Well, I think it's saying that that dependency isn't existing on your machine. Cause your machine only installed the Mac one, right
[01:51:11] ? So if, if I do force it, okay. Let's then build. I'm just going to do anyways. And then. This is so funny. Yeah.
[01:51:31]  What did that say? Docker smiling in the corner. Yeah, exactly. Docker. All right. Drum roll. It's like a. It's I don't get
[01:51:54]  the error anymore, but it's a blank page. Let me show you. That's good. Cause there is a known error. We haven't even hit yet, which
[01:52:01]  is that you haven't put the secret in Netlify. So it's trying to talk to a database that doesn't exist yet. Yeah. So. I don
[01:52:08] 't know if that'd be killing your site, but it's definitely going to be a problem before we get this fully working. Yeah. I mean. Okay. Page rendered
[01:52:16]  some stuff. I see some console errors there. Fave icon. Oh, weird. Okay. Okay. Okay. So this is actually, okay. This is. It
[01:52:27] 's not actually even finding app JS. Okay. Okay. One more thing. Let's try this one more time. I'm going to try this. Dun,
[01:52:44]  dun, dun, dun, dun, dun, dun, dun, dun, dun, dun, dun, dun. Yeah. It works. Or it doesn't work.
[01:52:58]  Let's go. Yeah. It's that it was dissed. One thing I just kept fixating on this. Yeah. Don't listen to me about how to
[01:53:05]  deploy to Netlify. That's the worst thing you could do. Dissed. Right. Okay. See, so we have this. We do this. All
[01:53:13]  these API endpoints are going to fail. I'm sure. Yeah. Okay. All right. Okay. So, so the, yeah, we're, we're just
[01:53:27] , we just killed it. Yeah. Yeah. Refresh is just not being very happy right now. And as long as the page goes, I'm just going to
[01:53:36]  keep on hitting Netlify over and over again with an error. Okay. So let's, let's not do that for a moment. Um, what's, what
[01:53:44] 's, what's the secret thing that I got to do? So you're going to do this off stream because it's going to show a secret that talks to your database
[01:53:53]  directly. Yeah. That web portal, the studio.astro.build that place you created your account. That's going to have a link right on that project.
[01:54:00]  Um, to create an app token. It's called. Studio. Uh, sorry. What is it? Studio.astro.build. Okay. Yeah. Master.
[01:54:09] build. Sweet. And then I see my project. You can go into that, create an app token, and then you're going to save that environment variable in Net
[01:54:24] lify. Generate. Please fill out this name. I need to give it a name. Um, Netlify. Okay. So I copy this and then
[01:54:35]  I put it where? Um, in your Netlify, like wherever it is that you put environment variables in Netlify. That's a good question. Your chat
[01:54:47] 's roasting you for not being a very good dev rel and you're not helping. No, no, no. Yeah. Yeah. Site configuration, site details, environment
[01:54:57]  variables. It's fine. Add a variable. Do I, is it under a specific name? Yeah. Astro studio app token. Um, posted in, I
[01:55:07] 'm not, I'm not off on your chat. All uppercase underscores between words. Astro underscore studio underscore, um, app underscore token. Okay.
[01:55:18]  Contains secret values. Hell yeah. All right. All right. Um, same value for all deployments. Sure. No, they're not going to let me
[01:55:33]  do that. Okay. It's fine. We'll paste it in all of them. I guess. Yeah, pretty much. All right. Cool. Astro underscore studio
[01:55:48]  underscore app token. Okay, cool. And do I have to redeploy again? Or is this just gonna? Probably. And I think there's that dash dash prod thing
[01:55:58]  that you want to do anyway. So I think I read it. Yeah. Yeah. I mean, I, I will need to do dash dash prod when we,
[01:56:03]  we actually want it. Right. Yeah. Let's. Yeah. Fine. Let's go to prod. It's fine. It's gonna work though. I always,
[01:56:14]  what's the difference between the two? Besides the URL. I mean, that's, that's, that's, I think that's the main difference, right?
[01:56:18]  Like the, the preview builds. I don't know. There's some tooling. I, that I I've seen before on the, on the preview builds. Okay
[01:56:33] . Cool. All right. So if all goes well, I haven't actually seen any of your logs yet. So I assumed that this was the 500 you were saying.
[01:56:39]  Um, I guess we'll know for sure now. Yeah. Nope. Well, the problem is that, uh, the, the, the problem is, yeah,
[01:56:49]  I might have to, sorry. I know I'm off screen right now. You guys are missing all the good stuff. I'll pull, I'll pull it back on
[01:56:55]  here. Although I have to go back. Um, Oh, did I not deploy dist? Why is it doing this again? Unexpected and a JSON input at H
[01:57:07] . Oh, no, no, no. That's just, that's not the same thing. It's finding the app. It's just. Okay. So check
[01:57:12]  out your server logs and Netlify. I'm curious. Yeah, exactly. Yeah. Um, like how much of this do I put on the screen? Vox
[01:57:23] . Important question. Functions. Oh, Ben's here. Yeah. Classic Netlify. Okay. Netlify is always a. Okay. Now. Okay.
[01:57:35]  Now. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay.
[01:57:47]  Okay. Okay. So this isn't like, okay. So how do we do that, Fred? Um, so the last, the final piece, it's all
[01:57:55]  going to come together. Mwah. Chef's kiss. Um, Astro DB push, um, run that locally. Okay. Okay. Push up your schema to
[01:58:04]  your production. Okay. Astro. Remember we need that PM PM Astro. Yeah, exactly. We've finally been Pavlovian trained. He'd be pushed.
[01:58:15]  He'd be push two words, one word. Yep. Just like that. Okay. I see. So it doesn't even have the schema or anything at this point.
[01:58:30]  Yeah. So you created a project with just a blank database. This command is what actually filled it. So now actually, if you go back, I don't think
[01:58:37]  you need to redeploy. I think. Yeah. Netlify is not actually airing anymore. Beautiful. Share that link. I want to click it. I want
[01:58:44]  to play, I guess. What is it? Db place. To. Netlify.app. Was it? Yeah. Yeah. Where did I put the app
[01:58:53] ? I closed it again. Cause it was, uh, airing too much. Yeah. Oh, there's one more thing. So it's all, it's
[01:59:00]  all working out, but this is actually, this is me building a crappy demo. This is not indicative of how this would work in practice. Does it all work? Remember
[01:59:06]  how you ran that seed, uh, locally? Yeah. Right now there's an empty database. So the way I built this, it's empty and we're updating,
[01:59:13]  which means there actually isn't anything to update yet. Yeah. So the last thing you need to do is actually run that seed file, but now we want to run
[01:59:19]  it on production. Okay. Yeah. But what I'm getting at is, oh, it's. I know I did. I did already chef kiss, right? You
[01:59:28] 're updating rows that were never seeded. Okay. So the last thing you want to do is Astro DB execute. That's going to let you run any script
[01:59:36]  you want against your production database. And you're going to want to do dash dash. No, sorry. You're going to pass it the file, which is,
[01:59:46]  um, BB slash seed. Okay. So you mean like, yeah, this is going to see that. So as soon as it starts running, we shall be able to
[01:59:58]  color our hearts out. Um, you might need to do dash dash remote. I can't remember if that's required. Um, let's find out. Let's see
[02:00:05]  if anyone's still on the stream. I haven't been paying any attention to chat. I'm so sorry, guys. Uh, hey Tanner, how's it going
[02:00:17] ? Uh, yeah, you guys making fun of my, my, my net by def rail skills. I, I, I think you need that dash dash remote. Cause
[02:00:29]  it looks like it finished, but I don't see any, uh, any data. Okay. Where is the dash dash remote? Yeah. Take it on the end.
[02:00:37]  I'm so excited. I had it open. I'm looking to draw my little heart out. Oh, well YouTube still in the house. All right. I think
[02:00:54] . Let's see. All right. I've got, I've started drawing on the top row. It's going row by row. I think it's probably.
[02:01:00]  Query rollback full error, bad request stack trace. Did it work? No. There's one row. I can draw on one row. So yeah, something went
[02:01:17]  terribly, terribly wrong on the, on the, on the, on the schema setup. Well, no, I think that on the schema. No, it literally failed
[02:01:23]  the command that we ran. Oh, Ben. I did DB dot transaction. Not DB to branch. Is that a difference? Yeah. Like I have a 400 stack error
[02:01:29]  on the query rollback full error, 400 bad request as part of this. CD. Yeah. It's something about the transaction. Um, if you go back to
[02:01:34]  the seed file, I think we just need to change that a bit. Ben saying DB dot batch is the actual API. Ben look at my code. Tell me what I
[02:01:44]  did wrong. I'm going to go back to the seed file. I think we just need to change that a bit. Ben saying DB dot batch is the actual API.
[02:01:48]  Ben look at my code. Tell me what I did wrong. I'm going to go back to the seed file. I'm going to go back to the seed file.
[02:01:52]  I'm going to go back to the seed file. I'm going to go back to the seed file. I'm going to go back to the seed file. I'm
[02:01:55]  going to go back to the seed file. I'm going to go back to the seed file. I'm going to go back to the seed file. I'm going
[02:01:58]  to go back to the seed file. I'm going to go back to the seed file. I'm going to go back to the seed file. I'm going to go
[02:02:01]  back to the seed file. I'm going to go back to the seed file. I'm going to go back to the seed file. I'm going to go back to
[02:02:04]  the seed file. I'm going to go back to the seed file. I'm going to go back to the seed file. I'm going to go back to the seed
[02:02:07]  file. I'm going to go back to the seed file. I'm going to go back to the seed file. I'm going to go back to the seed file.
[02:02:10]  I'm going to go back to the seed file. I'm going to go back to the seed file. Okay. Is it db.batch? Yeah,
[02:02:17]  this is where db.batch is. This is where even I need to read the docs clearly. Okay. Okay. It does not take an async function.
[02:02:30]  What does batch take? It takes an array of queries. Oh, okay. Okay. Okay. Yeah. Okay. Cause right now. Yeah. So yeah. Yeah
[02:02:47] . Cause right now we're going through and we're doing a transaction per. Like call them. Okay. So, so basically you want to db.batch.
[02:02:57]  I guess you want to create a, do we want to like collect all the promises? And then it's like, is it like, it's like a, it
[02:03:04] 's like a promise all. Although I guess these are text TX inserts. So they actually do the call. I don't know enough about there. Yeah. Cause you
[02:03:12]  get the transaction. I mean, you can get rid of the transaction as well. And we just do the, yeah, basically Ben is saying there's two ways to go
[02:03:20]  here. You could remove the transaction entirely and it's going to be writing one at a time from your machine to the remote database. It's not super efficient. It ends
[02:03:28]  up being, you know, a slow process. Um, or you can turn this all into a batch, which would be using db.batch. Um,
[02:03:36]  but we have to refactor this code a bit. It's not going to be, um, a like closure. It's instead going to be your looping and pushing
[02:03:42]  into an array that you're creating and then running db.batch at the end. So the first thing I heard was that if I just did this, it
[02:03:52]  would be very slow, but it will work. Kind of fun to watch though. I would. Ben's going to hate me for this. I think it's fun.
[02:03:59]  It's like, you know, remember how JPEGs used to load? It's like that basically. It's going to make Ben so mad. Keep the please
[02:04:11]  use batch on the screen. Oh, did I, did I like get rate limited myself? I failed to execute. I'm just leaving. It's like permanently there
[02:04:26] . Please use batch. It's just running. Um, try to rerun link. I don't know what this I've never seen before. So we're,
[02:04:34]  we're in weird territory now. What was it? It was, uh, Athero length. Yeah, this is what you get. You're being punished for your
[02:04:48]  sins. Um, yeah, 401. Why was that? So now you're going to link it to an existing project. This is, this is a kind of a,
[02:04:56]  a shoddy. Um, actually before, if you don't mind canceling this real quick. Astro DB verify is like kind of just like a very no
[02:05:07]  op way to check. If you still have permission. I'm curious why that was saying you don't have permission. Oh, I have no idea why that'd be a
[02:05:21]  401. Try and run it again. I guess. Okay. Link or the execute. Yeah. Cause everything's succeeding to connect to your database. Okay. There's
[02:05:34]  no output. Cause there's no logs here. You are currently seeing the database one pixel at a time round tripping as we go. Okay. So you can see it
[02:05:48] 's reset a lot of the, uh, yeah, people are starting to draw. Oh, are you saying that it's like, it's working right now. It
[02:05:57] 's just, it's actually going much faster than, uh, in past attempts. You can kind of try and feel out where the, where the current insert is at.
[02:06:06]  This is where you could redeploy it and have the body of the page have a different color than the cells. So you could actually see it filling in. Small effect
[02:06:26]  for a, uh, small fail. All right. We're building a solid logo or what? What are we doing here? I was trying to start, but then
[02:06:33]  I got wiped out, which makes me think that it's like this, the seating will like coming across. Like it truly is like a JPEG. Just like if
[02:06:41]  we draw a line down the middle here, will we see how far it's gotten? Yeah. Uh, uh, uh, did it finish? Is this no,
[02:07:00]  it's still going. Oh, see, unless someone else did that gap. Yeah. Yeah. People are probably messing with you. I'm going to do, I
[02:07:07] 'm going to draw a little something. I mean, a little, little smiley face up in the top left. A bunch of artists. Hmm. It's not
[02:07:34]  actually bad. I guess the number of pixels is, yeah, I was just kind of curious, like how much downstream work we were actually getting from, from, from
[02:07:55]  this. Well, this is where if everything was right, that S max age that we touched at the top of the stream, that should be caching. So you
[02:08:03] 're only actually database wise making a fetch every five seconds. Sorry. Every one second. Um, right. The updates are definitely, you know, it's an update per
[02:08:12] , but, but yeah, like if you see those refreshes, like those should be, oh yeah, those are three or six seconds. That should be way faster
[02:08:22] . Yeah. Okay. Well, let's make sure I'm not throttling the network. I do that from time to time. Interesting. Why am I, why
[02:08:30]  am I responses? I mean, there's more fetches than you can resolve. I mean, that's all Netlify that should be going through there. Well,
[02:08:39]  I mean, it started nice. And then it, it just kind of, yeah, it just started getting 15 seconds now. Okay. So this is S max age
[02:08:51] , not cash. Let's look at the quote unquote real time. Yeah. Okay. What? Okay. Well, that's not great. That's weird though. We
[02:09:05] 're not on Netlify edge. Why would we? No cash. Okay. Um, that explains. You actually might want to take that. It's actually might
[02:09:17]  end up costing you a lot of money. Cause the database is fine, but the server function time to do all this is good. Yeah. Yeah. I'm just trying
[02:09:24]  to see if I can take this down quickly. Um, uh, do, do, do, do, do, do. Yeah. Oh, you have disabled cash
[02:09:32]  on. It's only you who's, who's affected by that. I think. Oh, okay. Of course. I always have disabled cash on. Did you check
[02:09:40]  the perf now? Yeah. That's way closer. Okay. Everyone should code with an audience. You've just like, that would have taken me hours to debug.
[02:09:49]  And then it's like, Oh, that, that obvious little thing. Yeah. Yeah. No, I, this is just me. I am. I am definitely a
[02:09:59]  disabled cash kind of person. Yeah. Okay. Here we go. Cache control, public hash, age, max, age one second. They'll revalidate
[02:10:08]  five. Yeah. Okay. Yeah. Yeah. Okay. Yes. I think we've, I think we've had, we've had our fun now. I think
[02:10:24]  someone's attempting the solid logo in the, in the center. Yeah. I think some people are messing with it. Yeah. There's a whole other dynamic on this real
[02:10:33]  time stuff. I've been, I've been thinking a lot about this recently. There's a PR to add web sockets to solid start just as a router. So
[02:10:39]  like you just go in your solid start project, like create web sockets. And then like everything works. Um, and uses nitro underneath and then this whole set
[02:10:47]  up. So real time. I, I haven't done much with stateful servers yet, but, um, yeah, this is an area. I definitely played with T
[02:10:55]  elder also. I just, I think anyone from Brazil explained to me anytime, anything gets posted the Brazil flag. I feel like the people of Brazil love Brazil and love
[02:11:07]  that flag so much. I feel like I see that as an emoji reaction on like discord servers everywhere. Brazil mentioned exactly. It's like, I love that. Yeah
[02:11:17] . Okay. That's awesome. All right. Come to Brazil. I'm such a boomer. All right. All right. All right. All right. All right
[02:11:27] . All right. All right. All right. All right. All right. Um, I know you don't have much more time with us today. So, uh
[02:11:34] , any, anything, anything else you want to do? I don't, we didn't get a chance to convert this to a hyper optimized solid app, but I think
[02:11:42] , I think people will live. Um, so, uh, yeah, Fred, I, it's been great having you on. Um, did anyone have any quick questions
[02:11:52]  for Fred? I know he's got to leave soon, but let's see if we can, if we can very quickly, maybe he has like two minutes. Yeah.
[02:12:00]  Okay. A couple of minutes. Send, send Fred some questions. I, I mean, I, I probably should put the screen up for a bit too more.
[02:12:07]  It's just, it's, it's so much fun to watch. And I, the thing that I think is funny is like, it's hard to do, like
[02:12:14] , it's easier to destroy someone's like malicious work. I don't know if this is good. Like this is bathing everyone, but I won't even say what I
[02:12:19] 'm going to say. Nevermind. It's like a self-correcting canvas is what I'd say. As long as you have good people in your audience.
[02:12:25]  Fred, do you have an Astro tattoo yet? No. I know the reference coming here. I feel like if I was, I guess that would be the thing
[02:12:33] . Oh, but no, I, I know what I have. I'm wearing today. My, one of my favorite shirts, the Astro Batman shirt. Um,
[02:12:41]  black on black. Yeah. It's, it's, it's a lovely shirt. Um, I'm very fortunate to be one of the few people that have one of
[02:12:48]  these. So I'm pretty happy about that. Nice. Right. Cause you, you guys never mass printed that one. That's not like on the Astro store
[02:12:56] . Right. I think that's just you and like a couple others. Yeah. Yeah. No, I, I've definitely appreciate it. This is one of the coolest
[02:13:03] , um, framework shirts that I've, I've seen. Uh, is, is Fred in a physical office? I, I thought that this new house where.
[02:13:13]  No, I, I'm trying how to, we work our house does not have an office for me. Okay. Uh, what do we got here? What are
[02:13:23]  the main areas of proving that? Uh, one thing I'll say while you're collecting questions is just, yeah. I appreciate the, uh, like we're in open
[02:13:29]  source projects. We have the tendency to just like, we'll ship the code and we'll fix it up. And yeah, we're still very much early preview. That
[02:13:33] 's the goal here. So appreciate your patients trying out new hosting platforms and all that stuff. Yeah. What do we got here? Uh, uh, what are your main
[02:13:43]  areas of improvement work on Astro DB? It's like, where, where do you go from here? I guess there's a question. Um, yeah. I
[02:13:50]  mean like literally what I just said about like, this is really. Yeah. So I'd say like, it was probably in a couple of weeks of, you know,
[02:13:57]  Hey, I deployed it with this, um, thing happening on this hosting provider, talking to this server and like figuring out all those edge cases. So we've tested it
[02:14:05]  on a couple. We've done our, our, as much as we can on our end. And now it's just trying to find out how to break it is basically
[02:14:11]  what we're finding out now. So. Right. And I'd say from there, um, I don't know. Yeah. I'd say like kind of trying
[02:14:18]  to see what people build. There's a big click kind of like letting the community play with us and seeing what people are looking for. There's a story where we have
[02:14:25]  a bunch of like apps that you can build. And like, there's an, you go to studio, the hosted portal and there's like your Netlify app or
[02:14:32]  your CMS app. Um, there's different ideas about the ecosystem integrations and packages that are all talking to your database. like, we're really kind of, I
[02:14:39]  think excited to see what people start playing with and use that to kind of guide it. Yeah. I was gonna say our, so is, uh, because there's a
[02:14:47]  question, do you see Astra CMS in the future? Or. Yeah. I think that's where it's like, I'd rather like, I would rather support like five
[02:14:55]  different CMSs being built on Astro than we should be in our own. Like maybe it comes one day, but I think that again, that's going back to
[02:15:02]  what I said at the start, like what WordPress is, is a database and a framework tied together. The fact that there's like a post editor is like a nice to
[02:15:08]  have in my mind. And really what they have is a database. So I can imagine someone else building it as a third party. Like we have a dark matter. If
[02:15:15]  you've seen that is like a third party CMS built for Astra before DB even existed. I'd love to see the ecosystem kind of spring up around this. Um, is
[02:15:23]  there any technical, I, this is a fair question. I guess people want to know if there was there any like technical advantage that you see, like a reason for
[02:15:32]  maybe choosing Astro DB over some of the other solutions out there. Is it just mostly that it's all like included that you guys have control to connect for the whole ecosystem
[02:15:41] ? Yeah. I mean, there's cool technical stuff and like features we can do. So like that DB push, um, if we were in a lot of other like
[02:15:48]  platforms, that would have been like, all right, so we're going to create a migration file and you're going to make sure that it's matching your schema and run
[02:15:55]  that. And like, like there's some cool stuff we can do that just simplifies because we have this kind of focus on content sites and, uh, and we
[02:16:02]  know what the framework schema DB are all talking to each other at that level. Um, and then the other side of just say like, it's because it's, um
[02:16:10] , it's so okay. What was I going to say? I think there's a lot about like when you, yeah, when you just design all those things together,
[02:16:17]  it's just a, a much, I dunno, the things you can do with it in terms of the ecosystem yourself, the composability of it. I think there
[02:16:24] 's a really cool story there that we're just going to start poking at today. Okay. No, these are all great questions. People. I, there's like a
[02:16:32]  few like off, like I I'm just trying to get through them all, but it's like people, I think, I think we're, we're pretty.
[02:16:37]  Oh wait. Yeah. No, I, is there an astro merge site? There is. Yeah. Uh, we might've actually, there was literally a giveaway r
[02:16:46] affled it. So it might be all sold out. Um, would that be swag dot astronaut build shop? I think it's a shop shop dot astro dot build
[02:16:56] . Yeah. Get your swag. Yeah. You can tell I've never been here before. Um, but yeah. Okay. Okay. Yeah. Yeah. I was
[02:17:07]  like looking at this black on black logo, but it's, I don't know. I still like mine better. Um, I remember what I was going to say,
[02:17:15]  which is also just like, I think that no one's really figured out like headless CMSs for like the dev audience. I feel like every, I don't know
[02:17:23] . There's a couple of the CMSs that are like, oh, build your blog with this headless CMS. It's like, there's just so much work and
[02:17:28]  effort involved in doing that. Um, yeah. I think there's something about this being developer focused, which is just really special. Like it can be a CMS and
[02:17:36]  put your content in it if you want. But at the same time, it's, it's a familiar SQL, like developer focused database. Yeah. Key static is really
[02:17:44]  cool. I would love to do more stuff with them. Yeah. I should have, I should have put the example, sorry, that we were playing with. I
[02:17:51]  should have put that in a chat much, much earlier. Um, people are asking if, if, uh, Hey, let's see a message actually, I think they
[02:17:59] 're doing the thing that blitz did, which is becoming a fork of next JS or maybe wrapping next JS. Uh, let's see. This is like going full next
[02:18:06]  to us now, which I think makes sense for them, but yeah, it's a very different kind of story from where they were at. Yeah. I, I
[02:18:12] , I really appreciate how, uh, this, this drawing is actually getting quite, quite beautiful. Like the way the colors and stuff, like I'm seeing, um,
[02:18:22]  but, uh, no, I'm quite impressed about how, like how simple it was until we tried to deploy it remotely. Um, it was actually really, really
[02:18:29]  quick and easy. Like obviously I'm not familiar with the drizzle APIs, but like, they're all kind of the same. And the fact that like, you could just
[02:18:36]  like go, uh, yeah, I want a database essentially. And then suddenly like you just, you know, see, set a schema, seed it. And then you
[02:18:44] 're just, you're, you're running. You don't like, it's, it's very, this is very straightforward. So I think a lot of people
[02:18:50]  are just going to pick this up simply on the fact of, well, just how easy it is. Um, so I'm looking forward to see you guys have success on
[02:18:57]  that and success in the hosting story as well. I think, uh, for the database, I think that's really powerful thing. And I'm, I'm glad you
[02:19:04] , as I said, I'm glad you guys found are kind of filling up that niche foundation, finding that angle and making that thing. Cause, uh, uh,
[02:19:11]  you know, there's, there, it was always one of those things that back your mind when you, you, uh, when you start a company and then it's
[02:19:19] , it's, you're doing like a JavaScript framework, like what, what, what are you going to do with it? Right. Um, cause a lot of the
[02:19:27] , the core technology is almost always free. So there's like nothing you, you, you get to. So it's like, how do you find that added value for
[02:19:35]  your specific audience? I think you guys really have here. So very, very, very cool. All right on. Yeah. Well, thank you for giving me the
[02:19:42]  space to come and demo this and yeah, it's a bright future kind of common. So keep an eye out. Try it out. Astro build slash DB is the
[02:19:48]  website. Um, there's docs. There's yeah. Studio where you can go and spin up databases and a CLI if you prefer that. So yeah, please check
[02:19:55]  it out. Give us feedback. We're busy at work. Um, watching this thing. I've here demo it again. I can, but Fred's gotta leave.
[02:20:02]  We gotta let, let Fred go. Um, I'm going to be still hanging out here. So everyone say bye to Fred. Thanks to Fred. Awesome work.
[02:20:08]  Um, till next time. I enjoyed to have you on the stream again. See you later, Fred. Thanks for having me. Yeah, no, this, this is
[02:20:16]  pretty cool stuff. Um, sorry for all the technical, uh, you know, pieces, but yeah, uh, definitely very, very, very, very cool.
[02:20:26]  Um, it was fun too. Right. It's always fun. Not all the issues were my fault, you know, and vice versa. So we've, you
[02:20:36]  know, we, we, we, we figured it out. We hobbled through it. Um, but I, yeah, I mean, I, I, I,
[02:20:42]  I think, uh, like given that we didn't look any docs, we were just in the salt, like basically off the top of Fred's head. We,
[02:20:48]  you know, it kind of speaks to like how straightforward this is. Um, but yeah. Okay. Where are we at now? It is two 20. So I'm
[02:20:59]  trying to think of what I want to talk about next. Um, yeah, yeah. I I'm, I'm, I'm, I'm interested to see.
[02:21:14]  I think these real time things are a place that we haven't completely tapped into yet. Uh, because at least on the JS side, because we build all our frameworks to
[02:21:25]  be, uh, like the biggest constraint for all our architecture, the fact that we, um, we, we have no persistent backend, um, essentially like that's the
[02:21:35]  assumption we make. And it's a good assumption for a lot of serverless platforms, but I like part of me wonders if technologies like durable objects basically are enough to
[02:21:46]  change the math here. Right. Um, again, you know, our stateful servers. Okay. Because like right now we have this like real split dichotomy between
[02:22:00]  the two sides. And it's like, either you're like going super hard this way, you know, like where you're stateless. And that's basically why
[02:22:08]  react service won't say look the way they do. Or then you have these staple servers, like, you know, stuff, you know, what Phoenix live view or whatever
[02:22:15] . We're like, the, you know, there's all this stuff on like the server doing the state and owning the state. But then like, when you want to
[02:22:22]  do something, JavaScript, I'm sorry, it kind of sucks. Um, it's fine. Maybe you don't have much to do, but like, is there
[02:22:29]  zones where this shift? Because I feel like if you could actually unlock that wall, we could probably do a lot more things than we even realize are capable of today. Um
[02:22:38] , especially when I think about like, how amazing stuff like server component technology is when you think about what it actually accomplishes. If you could apply that kind of thinking
[02:22:48]  or optimization and unlock this, like, I don't know, Sunil will probably go on and on about this, but it's probably an area worth exploring. Does
[02:23:01]  anyone remember Batman JS? Like people talk about like, you know, new, but like Batman JS was, was a JavaScript framework. Um, love rails. You'll love
[02:23:15]  Batman JS. Serious scalability. Batman JS makes it easier. Hmm. Different times. I'm a West coaster. Yeah. I'm born. I'm,
[02:23:37]  I'm from Vancouver, British Columbia. Um, actually Canada. I am not at J nation this year. Um, West coast, best coast, you guys are Batman JS
[02:23:54]  reference. Yeah. Yeah. No, I mean, this is the problem when trying to come up with JavaScript framework. Like they've all been taken. I was at
[02:24:01]  Shopify and Batman. Yeah. Coffee script. Yeah. Good, good times. Ooh, this is an interesting question. cause I've spent a lot of time on the
[02:24:19]  philosophy side of things and various articles, which can be kind of boring for a lot of people. Um, yeah. Um, cause I've spent a lot of time
[02:24:28]  on the philosophy side of things and various articles, which can be kind of boring for a lot of people. Um, yeah, but it's, it's, it
[02:24:41] 's, it's, it's, it's actually kind of tricky here because like, I'm trying to think if I can like, I have a lot of stuff about
[02:24:52]  how reactivity works, how rendering works. Like some of my favorites articles of all time were, uh, for that kind of stuff is like, uh, fast,
[02:25:04]  uh, the real cost of UI components. Um, the original, this is like a benchmark God. There's so much theory here that I don't know how to
[02:25:19]  package it up because, uh, this one, this one's pretty good, but it's, it's mostly a benchmark. Um, I don't know if that
[02:25:28] 's what you're looking for, but the funny thing is most of my articles are written from a framework author's perspective. So like they're, I know that's not
[02:25:37]  very helpful. Uh, what's the fastest way to render the Dom? Um, yeah, there we go. The fastest way to render the Dom. Um, these are
[02:25:49]  all articles I wrote in 2019. So they were very critical time period when I was like understanding that like essentially. Hmm. It's so funny because I, I,
[02:26:01]  I've said the same stuff so many times that I, I lose track of it. I, yeah, I don't know. This is actually a really good question and
[02:26:11]  one that I should have a better answer to because there's a difference between the JS frameworks and the meta frameworks. Um, and like I had a whole, okay,
[02:26:19]  maybe this is worth looking at, but it's, it's so like metaphysical designing solid JS. I created on medium. I had a whole series, um, of
[02:26:30]  like, like talking about opposite, like different design principles that I looked at, um, designing immutability. Um, there's, there's some, I,
[02:26:45]  I should put them into like a more final reactivity dualities components. This is just like, I spent like a year basically philosophical about, about like what a ideal UI
[02:27:01]  framework should do. Um, and talking about the cost of compilation, all this stuff. Um, yeah, I don't even remember the content of most of these articles
[02:27:10]  anymore. Um, reactivity. That was a good one. I remember. Talk about the problems of the react hooks, compilation shortcomings, granularity. I don't
[02:27:21]  know. There's a lot of stuff in my old medium, uh, content, uh, because that's when I was actually designing solid initially. And I feel like
[02:27:30]  that's probably a decent place to start anyway. The start suffix seems to be live and well. Yes. Uh, we're going to talk about that a little bit
[02:27:39]  of this week in JavaScript, because I haven't been on for three weeks and, uh, Tanner has been doing some awesome work. Um, so we, we,
[02:27:51]  we should look at that. Everything with a tan prefix rocks. Yeah. I think that's pretty fair. Well, it's the, it's a, it's
[02:28:11]  an interesting question, right? I'm just, just kind of like the talk about this for a moment. Not sure if the interest to everyone, but like, I got
[02:28:23]  a lot of this feedback and I was going to talk about this in just this week in JavaScript as well. But like I got a lot of feedback where people are like
[02:28:28] , well, just tell me the answer. Kind of, I know that's not what you're saying, but like the, the problem is before at the beginning, like
[02:28:37]  before react, we just had a bunch of different technical solutions. They're there, you know, that kind of fell into like certain categories of how they did it. You
[02:28:43]  had stuff like backbone, which kind of like rebendered everything over and over again. And then you had stuff like angular, which did like this dirty checking. Um
[02:28:51] , and then you had stuff like knockout, which is these fine grained updates in a lot of ways. This hasn't changed at all, but like they were in
[02:28:59]  inefficient or not in their own ways. And they had all their, you know, they, they were just trying to get the job done. And then react came out and
[02:29:06]  was like, no, like we are a best practice. We are principles. We believe in these design higher level design abstractions. And it like, it wasn't
[02:29:16]  just about having the features or, you know, like, you know, there are frameworks that were like, we don't care. We're just a library like knockout
[02:29:25]  was. And then there's like other ones like angular, which was like, you can get everything you need here. We have to like, it's not about either of
[02:29:32]  those. It's about understanding that there are important patterns that need to be applied over and over again. And if you follow these, you know, this kind of set
[02:29:42]  of rules, you'll end up with good software. And that's why this whole philosophy question kind of comes in into shape here, because from a technical standpoint, I can
[02:29:56]  point you to why different solutions are, are, are perhaps better in the micro sense, like in a benchmark. But what I can only really talk to you about in
[02:30:08]  the general architecture sense from a philosophical sense. And sometimes like API design is an aesthetic. It is a thing that is, has art to it. So like, when
[02:30:21]  you take a space like that, when you combine both the technical aspect of the micro and the kind of art artistic high level, it's honestly, people have preferences here.
[02:30:36]  We're, we're spoiled for options, which means that like, it's very hard to definitively say anything, which is quite awkward, right? Right. Because
[02:30:50]  someone could make fairly definitive claims if they want to, but it's like, I asked someone this the other day, like, do you guys like, do you have a
[02:31:01]  matrix to decide between different programming languages? These answers, like, even when someone says like, okay, if you're doing machine learning, use Python or whatever, like
[02:31:13] , even if people have like a set of guidelines like that, they rarely are accurate. So like, to like, what the capability of the tool is, it's
[02:31:21]  just that, like, they might be set up a certain way. And there's certain languages that are more beautiful than other languages are more pleasurable, like more enjoyable.
[02:31:28]  But like, it's very hard for anyone that close to it to ever be able to just say like, Oh, yeah, use this is better. It's never
[02:31:36]  a simple thing, right? Like everything is somewhat capable of doing some things. The question is whether the abstraction sits well with you, because that's what we're doing
[02:31:44] , just building abstractions. So that's why I like, I don't worry or consider myself with JS fatigue too much, because like, things that people don't
[02:31:55]  care about just won't rise to the surface. It's unfortunate sometimes like good things are missed, but you know, at a certain point, like, the things that need
[02:32:06]  to rise to the top will rise to the top. Anyway, here we go. Three weeks of JavaScript. Let's just talk about it right now. What do you
[02:32:27]  want to talk about, Tanner? I'm just rambling here. But yeah, I mean, we can, we can, we can. Wait. Like, what
[02:32:43]  do you want to talk about? All right. Sorry, I got on my own rant. That's like four years on. All right. Give me a second here.
[02:33:01]  Um, thanks people for their patience. Let's do. Sorry. One second. I was going to do this week in JavaScript, but we can take a moment.
[02:33:28]  Maybe I, maybe I can have some help this week on JavaScript. In fact. Right. Sorry. What's it? Oh, it's one of my favorite,
[02:33:40]  uh, uh, writers. Um, every framework is an exploration and experiment in the problem space. Love to see more. Yes, exactly. If you haven't, you
[02:33:48]  should definitely read articles published by this author. I've covered them in stream. You should go. Do you have a link to like your blog? I mean, I
[02:33:58]  can go look it up, but just send me the links to the blog. I'm going to post it on here again. Cause it's just stuff. Yeah.
[02:34:03]  is just amazing oh yeah right youtube chat it's fine yeah yeah i i i i can get in in like two seconds here yeah let's check this out that's all i
[02:34:27]  gotta say obviously i love stuff that has some pro solid slant on it which is definitely in there but you know very good honest takes also about other uh emerging technologies that
[02:34:44]  show promise you know things like htmx and react and you can be like it's the last thing ryan's gonna say but actually these are these represent different philosophical
[02:34:53]  views and i think that's what the important part is this is this is the part that i think people get challenged with because like i i don't get hung up on
[02:35:01]  syntax you know what i mean like that's that's not what we're we're doing here right it's more interesting to get uh like the the why is to understand like
[02:35:13]  like his syntax can always be produced you know um but i mean sometimes the syntax aligns with the philosophy stuff like spelt like rich actually deeply cares about making the getting into
[02:35:24]  web easier to make it you know give people the tools they need at the lowest floor so to speak anyway that's all cool but actually uh we're gonna have another we
[02:35:35]  have a surprise guest um here so let's let's let's welcome on how are you doing mr tanner lindsley you and you are mute hello i come
[02:35:47]  in peace oh i forgot that apple is doing that stupid crap now what's up good to be here sorry i just maybe i'm just lonely today no it's all good i
[02:36:02]  just wanted to hang out and just chat and we can talk about whatever you want we can talk about whatever let's go start x start yeah no i mean that that that
[02:36:15]  was that that was exciting we can we can we can we can start there let's just let's just give me two seconds i'm just gonna uh i'm just gonna like
[02:36:23]  set up my background here well you know maybe maybe tanner tells us a little bit about what he's been doing the last week and then we'll be jumping to this
[02:36:33]  week in java javascript why not right okay is there any updates on 10 stack router people or is there anything new how's that going talk about 10 stack router all
[02:36:42]  right well um yeah i mean there's some new stuff we are we're shipping a bunch of stability improvements obviously the more people that use it the more we find little edge
[02:36:54]  cases here and there um most of the work that i have been putting in on and off over the last few months has been for full stack stuff so um i've been adding
[02:37:07]  a ton of cool new utilities and doing some small internal okay not small i've been doing some moderate refactoring internally uh that should have zero effect unlike anybody using it
[02:37:20]  for client but is setting the stage for all of the full stack stuff so being able to use the router um on the server really well uh being able to do things like s
[02:37:32] sr and redirects um also setting up the relationships that it has with vinci vinci vinci vinci i'm i've heard it both i don't know
[02:37:42]  how to say it i was actually going to ask you it's vinci like leonardo da vinci he's he's that's that's that was my preference so
[02:37:51]  vinci i've been setting things up with vinci so it does like server functions um and then that opens a whole can of worms so i've been looking into like middle
[02:38:01] ware and authentication and cookie handling and been looking into all of the json um serialization request response patterns uh just lots of things just needed to work well um it's
[02:38:17]  really interesting so let me tell you something that's really interesting this is the most interesting thing for me recently that maybe is obvious to other people but it wasn't to me
[02:38:27]  is that i feel like um the unique position that tan stack router and start are taking on react is that both remix and next have jumped full throttle to the server um i mean
[02:38:41]  when you do something on the server you know like if you're going to use the server then they just start you there um and so getting into the client is is more
[02:38:52]  of the um like everything just kind of feels like you're on the server all the time um as far as like the developer experience and the syntax and everything goes the api
[02:39:03]  design um i obviously really like a lot of remixes apis so i have um you know been taking the things that i like about the remix apis and reworking
[02:39:16]  them um for a client side first a client side focused router that can do server side things so i really like the idea that like we we have loaders in tan stack router
[02:39:29]  these loaders are 100 isomorphic they run on the client and they run on the server and they run during ssr they're not these server only things um
[02:39:40]  and if you want to do something on the server and keep it there you just make a server function very similar to start um solid start and i think that is a cool distinction
[02:39:51]  because i still think that a lot of react developers and probably just a lot of front-end developers want to they want to stay um focused on the client and focus on
[02:40:03]  the front-end and let their back-end team that probably exists for a lot of companies and a lot of people keep doing their thing right they don't need to own
[02:40:14]  everything on the server and do everything themselves on the server in fact there's a lot of front-end devs who are building wonderful applications that have never written a lick of
[02:40:25]  mysql in their life and they've never interacted with a database and they don't want to um that's fine that's up to them and and i want
[02:40:35]  it i don't want it to feel like a chore to have to get back to that experience you know so that's kind of the unique take i think it's it's
[02:40:44]  almost like if you were to take my hope is that if you if you were to just take next.js and remix and all the tansec utilities and smush them
[02:40:53]  together and kind of stay in the old isomorphic style of writing web applications that that's what's that's what tansec start is going to be right um see what
[02:41:05] 's it's perfect the reason you saw as you were talking i was like bringing all this stuff across is because this was actually the oldest tweet that i actually want to talk about
[02:41:13]  today and it's actually what you were touching on a bit because um ryan florence posted this and this is where he's reaffirming that they're
[02:41:20]  building towards rscs but you notice they had to build a bridge back to cra you know like it wasn't yeah like like they didn't start from the csr and
[02:41:32]  kind of build up on there they they went to ssr and now they're kind of back porting to see it which is it's similar but it's a
[02:41:40]  slightly different um thing i think it's obviously it's good they are actually putting the the branch out there so to speak but it is it is a little bit different from building
[02:41:51]  with this the csr apis in mind in the first place like for example remix now has client loaders so you have loaders and client loaders like you have
[02:41:59]  multiple the isomorphic way feels like it makes a lot of sense if you start from the client side uh approach um obviously solid start and tan stack uh router have this s
[02:42:11] velte and svelte kit started with the isomorphic as well and sapper so like this is this is not just in our jsx ecosystems as well um just
[02:42:21]  to kind of give a little bit of a broader look on that so yeah um yeah it's it's interesting there's a lot of people in chat here kind of going
[02:42:31]  talking about this whole rsc thing um because i mean i can i can jump to it i i'm pretty sure i reposted it in here somewhere um that you uh
[02:42:43]  you where were we do you yeah here we go a wild full stack react framework appears this tweet um you you've actually moved tan stack dot com over to this to this
[02:42:59]  setup which is which is pretty cool yeah i mean that honestly like that i don't see any other way to make it work to make it happen um i would love to like
[02:43:12]  drop this into nozzle obviously um but it would be a bigger lift and i was just looking at all the projects that i'm involved in and one of them was staring me
[02:43:24]  right in the face it's like oh hey tan stack dot com is using remix and that's awesome remix is great uh that's what has helped me learned like a lot like
[02:43:34]  a lot about why i love the request response primitives so much you know and help me learn what i like about the primitive web that remix has you know taught me you
[02:43:48]  know hey guess what not all of this primitive stuff is terrible a lot of it's really good and then obviously there's some things that i'm like you know what sometimes the
[02:43:58]  primitive stuff is pretty terrible um and it's just not likely to change and that's the stuff that i'd like to paint over um but tansac.com was
[02:44:06]  a was a prime candidate to be like hey you know what if i could get tansac.com running fully like server-side rendered with uh with loaders and actions
[02:44:19]  and um you know deployed to versell using tan stack router and and vinci then there's no reason that we couldn't just take that experience and package it up somehow
[02:44:34]  um so that's kind of been my goal i i we just had our third child probably about five weeks ago and so i've been in i've been on fraternity leave
[02:44:43]  um but you know that's mostly the the few little moments that i get in the open source side of things um that's kind of where my focus has been is like
[02:44:55]  let's and there's been a lot of people helping me do this as well obviously but let's get all of tan stack.com running on ten stack router so it's
[02:45:03]  been an interesting journey doing that we have a branch it's running and it works you can go there right now i think it's maybe my latest deployment didn't break anything it
[02:45:16] 's tsr.tanstack.com and it should just work like everything is there um it's server-side rendered it's not it's not the most perform
[02:45:26] ant yet um you know nobody benchmark it or anything like that because obviously we're we're doing like terrible things and i don't have any code splitting in place like i'm
[02:45:38]  loading megabytes of crap you know so right um i'm seeing like server functions running on page load and other fun stuff yeah it's it's really cool so it is cool
[02:45:47]  though i i like seeing underscore server on a different project other than my own yeah it's it's really fun so like that underscore server is is mostly just calling out to
[02:45:57]  go get like sponsor information to make to build that sponsorship bubble um you'll also occasionally see that underscore server to go grab documentation off of uh of our github branches nice
[02:46:08]  um and like that sponsorship bubble is really cool because if you if you refresh the the first the front page all of it comes in immediately um but that sponsorship bubble is actually
[02:46:22]  deferred using suspense so that it comes in when all of our slow apis resolve um mostly like uh air table and right some of the github stuff and it
[02:46:37] 's a lot of information as well but that's cached um hopefully you know we're going to figure out a lot of this out eventually yeah no that's that's that
[02:46:46] 's nice people are people are already liking what you're doing here um one of them one of them at last night i was like i loaded the page i was like dang
[02:46:54]  we're loading a lot of javascript we want to be great so we can do code splitting well i have some code splitting stuff in there and you can use like dot
[02:47:00]  lazy dot tsx to like move components over so they're automatically killed split but i was like that's really annoying i don't want to go through all these routes there's
[02:47:08]  tons of routes yeah components for 10 seconds i was like i don't want to do that and migrate all that stuff so i put an rfc out there um last
[02:47:16]  night to ask anybody if they wanted to work on like the veet plugin to kind of make some of this um a little bit more automatic uh and i'll tweet that to
[02:47:29]  you but i put it out there and it's really simple just like what we've always talked about just hey take this component property yeah replace it split it tree shake it you
[02:47:39]  know and uh jessica sacks decided to take it on so jess jess is doing that right now and it's really exciting so yeah so i mean like
[02:47:50]  we you know if we install that we run that and then you'll you'll load just a small portion of that javascript um right right get some better performance out of
[02:48:01]  it i see so yeah so this is just removing the need for all those yeah i mean this is i've talked a lot about this file system routing challenge here because of
[02:48:12]  like this is part of the problem like i actually did a talk where i show how to do everything manually and then i'm like okay or we just do like some kind of
[02:48:20]  convention and just works like there's a lot of boilerplate wrapper type stuff that you need to do if you don't if you like it's it's it's a tension
[02:48:28]  right i know you've never been a fan of file system routing but then again like you know what i mean like for easy use yeah yeah i get it it's and
[02:48:38]  you know i talked i talked to nikhil a little bit about this and he's like oh yeah you know vinci convinced you do this yes it could like in a
[02:48:47]  roundabout way it'd be very hacky right but already like i'm kind of breaking out of the normal flow for what a lot of the deep plugins do where they
[02:48:56]  do like top level exports a lot of people get away with really simple plugins that do this because you're just looking at top level exports and trimming those away and then just uh
[02:49:07]  and you can trim those using something like es build if you wanted like remix was doing or maybe you're still doing for a while um that's not a problem but because i
[02:49:19]  had to write everything so that it would be type safe top level exports are terrible for type safety right yeah because then you have to cast uh you have to cast arguments and
[02:49:29]  import types and and there's no you've seen the the you've seen our routes what is it satisfies blank or whatever like right you're writing satisfies or something like that yeah
[02:49:41]  and that's that's fine you know but i didn't i didn't want any of that so all of my all of my stuff that i need to split and like
[02:49:48]  you know do the compiler work on is inside of a function call usually just one like create file route or create route right um so already i can't use a lot of these
[02:49:58]  like generic tools out there that are like oh yeah we'll code split your stuff for you uh yeah can't do it it's gotta be custom tricky all right um all right
[02:50:10]  where am i here yeah okay yeah so very very very excited stuff um yeah i i wanted to kind of jump right into that yeah experimental deployment you had the link right here
[02:50:19]  hi you didn't you have to look for it um but yeah let's should we continue our chat i gotta i got a bunch of topics this week so yeah let's just
[02:50:28]  let's let's let's go back i'm gonna scroll back down a little bit um do do do do i a couple i'm gonna get a couple quick solid things
[02:50:38]  um actually maybe maybe this was actually the first thing that i have here um i remember i remember this one right because dan did a nice thread that we he's talking about people
[02:50:51]  talk about streaming in react framers they tend to focus on html hat arriving in the stream did you know rcs use streaming as well for all future spawn navigations
[02:50:57]  um you can think of it as pressing loaded json we're sending json with holes and and it later gets filled however in the ui we never we never show
[02:51:06]  the arbitrary holes instead the ui states are determined where you put suspense boundaries traditional data fetching approaches most other frameworks are you fetch everything first and then you start rendering with r
[02:51:15] cs you start rendering in memory right way without waiting for data as soon as enough data stream i the thing is i i don't know if this is like he talks about r
[02:51:24] cs but it's because react specifically chose to use rcs here in general if you have suspense i think this is true right because like what's the difference between streaming back
[02:51:37]  the next page response and doing like five independent requests that can all arrive at different times like right yeah like like you know i mean like if you go to the next page and
[02:51:48]  you have five requests you fire off at the same time and they take different lanes and suspense fills in the holes that is no different than streaming after the fact not really like streaming
[02:51:57]  just means like the data comes in as it's ready and that's the same thing you to get with separate requests what streaming is powerful is it lets you use an one
[02:52:03]  request to get that effect and there are places where that matters like when the page initially loads is one place another place that matters basically it matters any place that you would have to
[02:52:14]  go to the server anyway and then you're like well why do i want to multiple trips so like mutations that's a place where streaming could benefit um initial page loads where it
[02:52:24]  can benefit actually next navigation i'd argue doesn't benefit from streaming as much because you just get separated requests uh we'll probably get tanner back in a bit but he
[02:52:41]  he had to drop off the stream it looks like for a moment um but yeah i thought this was an interesting uh thinking here obviously um because i i think like even view
[02:52:56]  or like anybody who has like kind of inverted svelte i think they all actually category here i i said like i'm proud not to be part of most other frameworks here
[02:53:06]  but i actually think most other frameworks do okay here i think mutation is the one exception where rscs really excel because they can go to the server and like redirect to
[02:53:18]  the next page and i'll do it on the same response right and that's where the streaming matters but for straight navigation i'm not sure it actually matters that much which actually
[02:53:27]  brings me to the next uh topic in solid start version 0.6 we added single flight mutations which exactly solve this gap i've showed this on stream now like multiple times
[02:53:39]  so you guys are probably all familiar with it that i don't need to demo it again but essentially when you're in solid um if you do like a mutation of some sort
[02:53:50]  like use a server action we actually send back the data for the next route um in the same process so if you're on a details page and you click save we'll
[02:54:00]  actually send back the data for like the the the you know listing page that you redirect to and the client will get the redirect like response right away and then the rest of the
[02:54:12]  data will stream in all in a single request see that's an example of where streaming matters um so yeah i the timing of this was actually almost perfect because we he literally
[02:54:24]  posted this and then we released the feature not using rcs the very next day so anyway um let's keep on going chat still live you guys you guys got kind of quiet
[02:54:34]  for a bit and i know it's friday afternoon but i don't have tanner here now right now to keep me keep me company he still wants to talk rcs
[02:54:47]  though so he's got a baby emergency maybe he will uh maybe he'll uh come back in a bit yeah okay good good good i'm just making sure we're still
[02:54:56]  we're still we're still we're still going going here so yeah let's let's continue with this week in javascript there's there's plenty of these hot topics
[02:55:04]  i'm i'm i'm not i i think it's important i'm not opposed to server components i actually see value here you got to remember i worked and i always
[02:55:20]  remind people about my work on marco and islands frameworks and all this the html partials are really powerful way to reduce javascript they're an absolute way to
[02:55:27]  reduce javascript so conceptually server components are really powerful i'm not 100 happy with the react implementation today but it could be improved so like this is the problem is that
[02:55:37]  it is a trade-off like architecturally it has different constraints it it doesn't just fit the gap um you can't just be like okay now i'm in circum
[02:55:46] vent lands now i you know other pieces stuff you know change you know you're waiting for the rackets conversation i had a really good conversation with him yeah definitely here for the
[02:55:59]  ten rcs we'll bring it back around for him we'll we'll focus on on on solid for a moment here um but yeah sorry tenor hopefully we'll be back
[02:56:08]  in a in a bit we'll see um so so yeah uh what do we got here react summit stage meet ryan solid yeah okay yeah i'll be i'll be
[02:56:18]  talking there let's just go through the solid news really quick well well tenor is away we'll see um yeah ebenezer's got a new linkedin course i i
[02:56:28]  just posted this off usually i don't necessarily post people's like paid content type stuff but ebenezer has been such a uh you know help to the community he's
[02:56:38]  been posting content on solid ever for four years now um part back when he originally was working at jetbrains um and uh they were doing weekly newsletters over there jet
[02:56:49] brains is one of our big uh sponsors on open collective i never would have guessed it but uh we a lot of solid love over there um so yeah just gonna put
[02:56:59]  that out there i i love i love seeing i'm just gonna go burn through these because a lot of these i reposted just because they have like little interest pieces like
[02:57:07]  i love the seeing that different patterns can apply across different jsx frameworks this is just an example of panda css using it with solid versus react but like it's it's
[02:57:19]  very cool to see that because the templating being shared that you can actually you know share some other assets what do we got here take flight we already talked about um is
[02:57:29]  there anything else actually interesting in it v5 support i guess that's pretty good um yeah react summit talks oh yeah news for everyone crate jd app is back um uh
[02:57:45]  which for you who don't know it's basically a solid port of create t3 app you know the whole next off upstash trpc you know i think pr
[02:57:57] isma or whatever database is the latest one that people like but built on the new solid start beta it's up there full off solution everything you need to make a modern you know
[02:58:10]  web application get started i'm super stoked to see this come back yeah i i i gave a really cool talk at in amsterdam i would love for this to go live
[02:58:22]  the the live stream apparently isn't available yet maybe like i could snipe the video i i got a dm from someone that said they have the live stream link but it
[02:58:32] 's not supposed to be posted yet i don't think i should post it on stream though probably um yeah what did they what did it say i was watching a stream i
[02:58:42]  remember that i have the link from dev world stream with your talk here but i'm not sure they wanted to make it public because it was a paid thing yeah i'm probably
[02:58:49]  bending the rules a bit aren't i okay let's keep on going it was it was a really uh emphasized the power of our apis and solid start let's keep on
[02:58:57]  going yeah daniel alfonzo new solid newsletter check it out um we have people working actively on dx now this is amazing to see this kind of growth in our community
[02:59:10]  people actually out there uh other than myself promoting i don't have to travel as much it's it's it's it's it's great to be able to spend more time
[02:59:18]  with my family so i i appreciate it a lot i'll be back in amsterdam like you just answer down to give a talk in june friend yeah that that that
[02:59:31]  that's that's it right we're all friends here right uh what else what do we do oh yeah there's there's some really cool articles and stuff pushing solid start i
[02:59:47]  there is so much news here like here's the websocket stuff like in vinci and in salt using solid like a lot of really cool tech that's just like
[02:59:59]  coming to the surface here another great one i missed a lot in these three weeks it's been a busy time period uh daniel again got us into testing libraries funny kent
[03:00:08]  c dodds was like hey would be great to have you know solid testing library i'm like we've had that for four years haven't we it's like we just never
[03:00:15]  gone with the docs i i think there was a perception at least when i started that like if we asked to be on people's official docs they wouldn't include us before
[03:00:22]  and then at some point that tipped and i never kept up with it yeah what do we got here udemy course okay fine i guess i'm posting people's courses another
[03:00:35]  solid start release not much going on here honestly um yeah just okay i i wanted to talk about this one with tanner on stream i wonder if he'll he'll he
[03:00:47] 'll come come come back for this um we'll get there we'll get there the rest of the stuff is just okay one last solid thing before we move on phaser has
[03:00:57]  anyone heard of phaser i hadn't never talked to these people but i was like i was like okay let's they they tweeted something with solid let's check out what
[03:01:09]  this is and as it turns out it is um let's see sorry it is like i think it's a game engine that uses salt that uses solid for the or or like
[03:01:24]  adding like ui pieces this newly launched phaser 3 solid js project template is a game changer for web game developers seeking an efficient project of workflow this template harnesses the
[03:01:34]  strength of phaser 3 for game mechanics with the reactivity of solid js creating a seamless development experience key features include a bridge for solid to phaser communication hot reloading instant
[03:01:43]  feedback template simplifies development blah blah blah yeah there you go i don't know who this target audience is for it but it's really cool to see like as a blend
[03:01:55]  of phaser 3's game development capability solid reactivity performance yeah it's interesting to see like people applying solid to like different locations yeah i like in different ways that i i
[03:02:09]  hadn't anticipated okay that's enough for solid news okay let's let's let's let's let's talk let's talk stuff um what do we got here why did i
[03:02:20]  take this quote from dan oh yeah it was the same thread again yeah do you i i probably quote i probably bookmarked this for fairly petty reasons he's explaining that
[03:02:48]  the difference between rscs and like like with with streaming or not is the difference between block like a weight and then set state and just set setting the stream but like
[03:02:58]  in my head when i saw this i'm like i thought of like the difference between react and solid being react awaiting in their components and solid just doing non-blocking i
[03:03:09]  i yeah this is this is not an important post i was just kind of i realized like if i took the parallel there like he's talking about why this isn't good
[03:03:18]  and why this is better but it's also the same argument i'd make for why solids async models better than async await in components sorry um this is a problem i
[03:03:26] 'm looking at stuff that i that i flagged to talk about like three weeks ago well phaser is good they don't have react in the tool so using solid we
[03:03:40]  can make or give me okay that's cool so you guys know about this more than i do phaser is awesome yeah see yeah see there you go oh yeah this was
[03:04:01]  this was a fun one i don't know how i've been kind of vocally critical of stuff around react recently and we'll talk about that in a minute so i a
[03:04:14]  lot of these tweets look funny in hindsight but man it's really odd to see like it's not odd like i get it i get why react devs are really excited about
[03:04:26]  react use but it's like i i really feels like a poor man signals i don't know how else to put it like they're they're like they're like look
[03:04:37]  i can just use the thing like this and it's great and then i you know and and the what's the first thing you see in this example like what what stands out
[03:04:46]  to me in this example is why are there two components why couldn't i just write my code and just go like use this thing and use it can can anyone tell me
[03:04:56]  why there's two components here you guys can you see the code ryan just take the win wine it's just it it's because you have to read it under the suspense
[03:05:10]  boundary yeah you can't really read it let me see if i can blow it up yeah it's the coloration this is like the worst like even if i had a
[03:05:21]  white background this would be terrible there has to be two components otherwise this doesn't work in react this is why react has like i think this is the biggest reason why next has
[03:05:35]  like dot fallback dot like all the different files like in their in their app directory rather because every place you'd have to make like a bunch of components just to get
[03:05:44]  the like the wrappers going because in like react works like component granular level so when you like use here it throws so it has to throw up to something like there has to
[03:05:54]  be a try catch yeah tanner if if you if you're busy that's fine if you want to come back you can come back but um it's it's all good
[03:06:11]  um but yeah like i i saw this is this is this is the kind of thing like i i saw the post and i didn't want to be the guy that'd be
[03:06:21]  like huh you could just do this in like a one you could just literally put the crate resource at the top of the status and just call it a day and have one component
[03:06:28]  it's just this is this is just i'm not a solid dev or even work a solid but they're two-year-old inflation creator it doesn't require you to
[03:06:34]  create a wrapper with suspense due to the nature signals right the same as solid as a test you might be surprised yeah this isn't 100 right because um i think they forgot
[03:06:47]  to wrap something but yeah it's essential yeah they forgot to wrap the get resource calling a function it's like should be a function arrow but like it's it's like
[03:06:57]  90 right anyway i i'm sorry this isn't like my gloat about hustle it just there there's there was really there's just so much react conversation this last little while
[03:07:17]  you understand react first you have to understand um the only secret thing is composition yeah server responses is rough too i don't know this is one of the trickiest ones that
[03:07:36]  i haven't figured out on the server component side because see in when you know you have a client render what solid does is we actually just throw to them the error boundary
[03:07:44]  and if it's already been flushed on the stream then the client handles and and if it hasn't then the server handles it like we we can just throw the error across
[03:07:52]  the network and it just lands in the right error boundary but if you have server components and the error boundary is only on the server and you've already flushed that part
[03:08:00]  of the stream like then what the hell are you supposed to do i don't know right like it was really easy for me to just re-throw through the network you
[03:08:13]  know i mean i could say that's because of cerebell or whatever but yeah right you have to turn your suspense boundaries into error boundaries as well and i i i could do
[03:08:23]  that i just wasn't really sure if that was the right move we actually do that we that's like when i say throw across the network it's a suspense that takes
[03:08:32]  care of it the suspense boundary goes oh i got an error thrown to me and is there anybody left above me no i'm the top most oh crap then i will serialize
[03:08:41]  it send it across and then the client side version of it goes oh you got an error well i don't know how to handle errors i'm going to throw that up to
[03:08:48]  the error boundary and then the error boundary handles it right which is different and they do that because of rcs where like i didn't when i implemented server suspense in solid four
[03:09:01]  years ago i i didn't know about rscs i didn't like i didn't really have a like concept in my head so i wasn't thinking that way so i
[03:09:08]  just made error boundaries on the server work um so yeah it's it's tricky so anyway um the only the this is so funny because everyone talks about this is truth if
[03:09:34]  you want to understand react you have to understand that the only secret thing is composition everything else is rejected or takes back as an acceptable trade-off this is a good thing
[03:09:42]  like mostly like i i actually think composition is incredibly important i i but see the funny thing is the way that react emphasize it makes makes makes you think that no one else
[03:09:56]  does it when it's like most frameworks are reasonably composable and this is the one that's gonna like you know drive those guys signals are more composable than components they're
[03:10:10]  smaller the more granular just think about it like react can't be the most composable framework because it doesn't have the granularity i that's the argument i'm going
[03:10:21]  to put out there and think about it like when it gets a compiler it's not getting more granular you you're actually blending the lines inside your component now like yes they can
[03:10:32]  isolate the execution by letting you not control the boundaries like the compiler is almost like opposite a composition so like this is this is one of those things where it's like there
[03:10:51]  there's everything works in ranges right yeah they view literally calls their their reactive primitives apis when they switched from their objects into something more you know using primitives the
[03:11:07]  composition api like yeah yeah i mean we'll get there i i don't like sitting there sounding angry though all the time like there's good stuff happening in the react
[03:11:32]  ecosystem stuff like can stack start that we were already talking about and and there is like you know what i mean like i i see it when other people sit there angry all the
[03:11:47]  time i i get i get my chance you know here and there to kind of let a little steam off but like it just it doesn't help anyone it's just i
[03:11:56]  i think the biggest thing that i want to challenge here is assumptions things that we see to know to be true that aren't untrue but mask the whole story so to speak
[03:12:06]  right i i i will give you this right because jsx is actually a really important part of the composition story i actually love jsx as a template language because you can
[03:12:25]  literally like move the stuff around obviously in solid like move the stuff around and wrap it in a function but like you still get the the same feel like that you can just be
[03:12:34]  like bam here's an element that there there is that feeling that's arguably smaller than a component but like like i i think that like yeah that definitely adds to the composition
[03:12:50]  story it definitely makes it feel it's just like as i said react's not the only one but it is what we learn from react i actually go on and talk about that
[03:13:00]  a bit i think where was i just side shout out love the work that's been going on with valorbot um it's getting big we use like a lot more popular
[03:13:11]  we use it in all the solid start uh validation uh examples sorry zod um i i can't not even though the other libraries more popular zod is and whatever i can't in
[03:13:22]  good conscious promote the library that's larger and um i think even slower so it it is what it is speaking of view i i finally got to meet evan you but
[03:13:37]  sorry that's not what i was looking for oh god there's so many good topics this week i'm gonna have to come back to that one and that one that one
[03:13:48]  because we're talking about here is actually this is actually this no where is it here because dan does this thread because chantastic um said one day we'll talk about how
[03:14:19]  react as a marketing phenomenon i don't think anyone is ready to look at through that lens yet but i believe react success is far more cultural than technological and i believe this
[03:14:26]  was by design this is a great interesting take because while not marketing in the sheer sense they built they designed uh because of their philosophy the whole thing they designed the culture essentially like
[03:14:38]  they designed uh like like i was talking about this before we had like backbone and whatever and these are just like solutions and reacts like no we're a way of life and
[03:14:48]  i i i think i i think there's there's elements of this that are really important for people to take and step away from it's designed to be easily marketed it might
[03:15:01]  even the key when he asked to write his composition right this is why i went here because like composition composition composition it doesn't matter the tech is good if it doesn't compose
[03:15:13]  see old svelte he didn't say new svelte because we know what new svelte is it's solid js but he said old svelte and
[03:15:21]  it doesn't matter if the marketing is good it doesn't compose see gatsby components for the composition for ui it's weird if you recall systems around that time that
[03:15:37]  didn't compose the same way you couldn't put two jquery plugins or two angular directives or two backbone views written by different people and have them work together seamlessly
[03:15:44]  then hook solve composition for state effects it's funny because like the the reason that the well could you put two jquery plugins together and have them work together fine like the
[03:16:00]  the reason you couldn't is because they might like they might like point at the same place as the dom right because they didn't own the whole thing each one is isolated good
[03:16:08]  point two angular directives um is the two backbone views but can you you could put two backbone views written by different people and have them work together seamlessly couldn't you like
[03:16:18]  backbone oh i guess maybe not nested because backbone was like re-render it all see i i this is not my memory this time i was using knockout and knockout
[03:16:29]  everything was fine-grained so like yeah okay let's keep going then hook solve composition for state effects if you recall sharing code via inherence or react style semi-
[03:16:39] composable mixins or hawk-like pattern there's no good way to isolate composable state it doesn't clash your local reasoning now suspensive rc solve problems
[03:16:48]  with data fetching loading blah blah blah so i agree it's cultural but maybe not the way you meant not how good marketing was so react won't get where without focusing on
[03:16:55]  composition refusing to adopt or even entertain any non-composable solutions even when everyone asks for something different yeah good good on you for me a key aspect in reac
[03:17:04] cess is really how composition avoids future refactor costs in other frameworks that allow it you tend to write code that fits the current assumption this prop won't ever change this will
[03:17:13]  only render once now the funniest thing is i i saw this this on will only render once and i'm like is this like trying to like make it i don't think it
[03:17:21]  is um make a jab at uh you know you know render once frameworks which is something that we've been popularizing once but being a one render once framework only matters if
[03:17:34]  you put the choice if people don't treat everything as being reactive and i i this is why i wrote this article which is i i i had the post like six times this
[03:17:45]  uh this this week this is criminally under under uh under read article of mine is it's probably one of my most important articles on the reactivity side no one's
[03:18:00]  read it doesn't matter but it is explaining how solid does not compromise on any of react's philosophies and in in in some ways exemplifies them and talks about like
[03:18:18]  yeah it's just so funny because like the the first thing devon gavin did when he posted you know during what i call signals week now and people are like talking about
[03:18:27]  this people were ready to jump with those old arguments and i was like no no no no no no we've been doing it the right way the way we learned from react for
[03:18:35]  like years now so like those old assumptions are useless right and i think i i don't know i can say it till i'm blue in the face but this this is
[03:18:45]  why this is a way of taking something from react the thing that's most valuable for them arguably and applying it in a different way i hope that makes sense to people i just
[03:18:58]  this was this is why i wanted to talk about this because it's just like we hear composition this composition that composition whatever and it's like yeah composition super important where it
[03:19:09] 's viable i mean i'm still suspect that server components are actually that composable um right i covered that on a previous stream um but that doesn't matter for the most part
[03:19:22]  i agree with all the design stuff about react and i think that's what people need to learn this is why i was talking about learning the philosophies understanding like what actually
[03:19:33]  goes into the design to understand what leads to that can lead people to success you you really you i i don't do i want to get in their crosshairs he's
[03:19:45]  talking about this uh can i sign in no i'm github who am i kidding here we go here we go donut components yeah yeah because i i someone linked
[03:20:21]  me that article i'll check it out at some point i think the problem is like astro doesn't suffer from this it's got to do with the layers and react
[03:20:29]  that makes it hard yeah it's not about i'm less worried about the fuzziness i'm talking i i what i want to talk about is that you actually the way
[03:20:43]  the data flows like the pieces are dependent on like you can have composable next js server components you can't have composable react server components is is the way i'm
[03:20:59]  going to put it you you we're basically forcing ourselves into each platform unless the server components are basically shared components yes astro when it gets into the space has a different
[03:21:14]  problem but that's that's that's that one's the different thing altogether generally speaking simplification often just bypasses a whole category of of issues um yes i i'm
[03:21:28]  i'm sure it does come up a lot um anyway yeah i mean i i've talked about this one on stream before it's fine i've shared it you guys can
[03:21:42]  see it see it with that right i i don't need to go here again um but what in any case and that article would need editing and be nicer and whatever you know
[03:21:57]  it doesn't really matter it just i think that it's it's it's tricky um to just kind of just look at composition and call it the end of the day
[03:22:09]  you know um astro 4.5 oh yeah this was this was a cool shout out i'm a fan of tom mechwright's writing he does like he's
[03:22:29]  very good at writing those like where the js ecosystem is today and he he gave solid starter shout out even though we're not released yet so props to him i i don't
[03:22:38]  have much to say about this like he's he he he he really likes remix it's not surprising um you know like there there's there's middle grounds and whatnot but it
[03:22:51] 's it's it's cool to be fair svelte kit i feel it's unfair for svelte kit to keep on getting piled into this because they've
[03:23:03]  had production now for two years their framework does basically everything remix does in some ways the framework does more actually it's a little bit more interesting people just don't realize it probably
[03:23:16]  because it's felt but like i i it's fine like i'm just doing this from an empathetic standpoint because i'm sure like you know six months into solid start
[03:23:26]  after 1.0 out i'm gonna be feeling the same thing being like seriously look at this thing it literally does what you want to so much smoother but you know it's
[03:23:35]  not react so i i i can empathize with uh rich and gang here i i mean it's it's fine okay oh man we'll get we'll get there i
[03:23:49]  think that's what i want to end on okay um should we talk about this trellix demo i don't have much to say i'm looking here well it's
[03:24:11]  because angular d like left the throne they like they were like here you go king or whatever like they they decrowned like they basically just they don't they didn't realize
[03:24:25]  it but they just like hopped right out of the conversation with the angular one to two migration react literally would have to like drop the ball and the there's a great
[03:24:35]  team and they they have a good pulse on things they they get it like i i i still stand by the that they like that they're they're working on their philosophy i
[03:24:46]  think it's a philosophy worth going the worst thing to happen is that frameworks like don't have the ability to continue work when they're innovating like that we can't
[03:24:56]  like continue to work towards this future that things just get homogenized like the obvious is that there's no alternatives to react but to even talk about alternatives to react react has
[03:25:06]  to exist in the first place and i you know i would hate you know there might be some consolidation right now like a lot of people are pointing out that like svelte
[03:25:16]  5 and view vapor are basically just becoming solid js and like but like there's still some philosophical differences there that make it worth you know talking but i mean we'll get
[03:25:27]  to that in a minute actually i just want to give trellix a quick um a quick shout out because i actually don't have much to say about this yeah i mean
[03:25:38]  yeah the the i this demo is an interesting one we we've been we've been making this one in solid as well uh he's going to be pretty critical of all
[03:25:48]  of them this next mutation glitch is basically unacceptable but my understanding is that yeah i i think all the frameworks will be able to do a decent job of of this everyone this is
[03:26:04]  this demo shows what remix biggest innovation was which is the optimistic updates this approach optimistic updates makes this demo possible and makes it really nice and everyone who has the the action ap
[03:26:19] i type approach can remake this demo i'm excited about showing this demo obviously because uh single flight mutations um but this isn't even the best example for us because there's only
[03:26:30]  a single data source like a we can do way more granular updates you know it would be interesting i could probably put an example that would make solid solution look a lot better
[03:26:41]  than the others because of the guard granularity but even then like this this is a cool demo and i'm i'm i'm the version i actually want to see i'm
[03:26:51]  not going to lie i didn't tell the people who were like randomly volunteering to make it because they're working on the solid one right now i want to see the ht
[03:26:57] mx version of this because my gut is you will be able to make a nice htmx version of this in a certain way but this will be like the
[03:27:08]  example where you're just like yeah you know what i actually prefer to use react over htmx or any client-side library because it's just like i think the
[03:27:17]  authoring this this is a good example to show a place where you're interacting with the server so it's like reasonable to fall into this domain but that also you do
[03:27:25]  dealing with javascript and optimistic updates and stuff like this and it's kind of it's kind of awkward um to handle it properly i i think this might be the example
[03:27:36]  for that anyway i'm not 100 on that i did see dominic's example and uh again with query and stuff can definitely do that and he had the the client-
[03:27:52] side stuff um it was very awesome even uh uh i think ryan gave it a pretty good score other than you guys didn't implement the whole app it was just the board
[03:28:01]  which is honestly let's face it the only part that actually matters but what you know whatever it reminds me of pressing you know when we ever got 100 yeah yeah i i
[03:28:19] 'm i think the single flight mutations are gonna like look nice but to be fair the rsc version is probably fine other than it ships a whole bunch of html i
[03:28:31]  i just think i i think we could i think we could do better i think we could i haven't thought about this from an offering perspective but i think it's possible that
[03:28:41]  we could update on a per column basis and like actually only send the data the diff the column and then like only up yeah i think we can i don't know if i
[03:28:52]  want to go there because like it's much easier just to write his version from a code perspective even though the solid start version probably can be pretty slick um you know i'm
[03:29:01]  always looking at ways to optimize yeah i think someone did but i i want to see it with the optimistic updates yeah yeah okay exactly yeah yeah that makes a lot of sense
[03:29:26]  ben yeah i i i it's gonna take a while for people to understand the shortcomings of htmx i think we have to go here though because we need
[03:29:43]  to understand why i think a generation brought up on react doesn't understand why we have client-side stuff yeah the the problem is like an htmx plus alpine
[03:29:55]  solution is almost strictly worse than any other solution i can think of like it's it's funny like it's well i i i want to see it from a like a
[03:30:06]  developer experience angle but like i think people like alpine is actually relatively large and i'm relatively slow too like it's like people on the htmx side will do
[03:30:19]  exactly this but then like the solution will actually be worse it's just like why didn't you use a front-end framework that could just do this produce faster page smaller
[03:30:28]  javascript like it's it's it's or do honestly just do what ben said just just just do it you know like do it vanilla but you then you kind of
[03:30:39]  acknowledging you're probably not going to scale it too far but it's fine for this demo yeah exactly i mean this is the the question but on the other hand god there
[03:30:55] 's so many elements that we do in solid like little details that i think start that i think people would be like wow you know like yeah like maybe maybe we shouldn't
[03:31:17]  draw his attention to us again uh oh yeah i actually we'll test it once felt five's up um the the faster is like by 0.01 so he dominic
[03:31:36]  was on our stream he probably like he he mentioned that he noticed like a few optimization things that we weren't doing in solid like he's like use uh var here instead of
[03:31:46]  letter like very micro micro things from perspective anyone looking at it so i've seen more variation change from run to run that being said i've seen the news felt consistently get that
[03:31:57]  0.01 or 0.02 ahead of solid here recently so i will say that those optimizations seem to be more than what do you call it uh like variance so
[03:32:08]  it's probably worth looking at it but it is like micro of micro i i'd be like effectively i'd i i always consider anyone above 110 basically the same performance it's
[03:32:19]  it's basically not noticeable right there there's there's like it's it's a very micro kind of thing like in terms of yeah like i i mean i i don
[03:32:34] 't 100 know the exact thing i'd have to spend a bunch of time benchmarking which is actually someplace i'm going to again soon but what i mean by that is like
[03:32:45]  i mean you could probably tell me as good as i i can okay solid maverick and stuff five and maverick is another one that's basically the same uh
[03:32:57]  reactivity of solid 2.0 okay so our select row is faster than svelte but svelte has better memory releasing like we're talking about fractions of like when
[03:33:11]  i clear like 5 000 dom elements it tick and i slow the computer down cpu by four times um it's 0.4 millis like 0.5 milliseconds difference
[03:33:26]  like i i i honestly can't pinpoint that one anyway sorry just just a tangent like yeah it's 0.01 this time 0.107 versus 108. same as raw
[03:33:41]  wasm apparently anyway let's see that's all i gotta say about the trello benchmark yeah we we like remix um most people i know uh have always been big fans
[03:33:57]  of remix they might have had trouble with some personalities around remix but like remix the framework and what it stands for again i'm talking about the philosophy is is great and i think
[03:34:09]  everyone who cares about performance in the react ecosystem and cares about like you know keeping things to the baseline should should care about remix i think this i don't think it's
[03:34:23]  flawed i mean all benchmarks are flawed it's one of the least flawed it's just it's it's gone to a point now that like it's it's hyper it's
[03:34:31]  hyper like it's like it's way it's way too like we're optimizing now in a zone that like isn't like it's it's lost its purpose it served the
[03:34:43]  job early on nowadays it doesn't do nearly much it's not hard to get into the 1.2 range if your framework gets into like 1.2 or better you
[03:34:53] 're probably fine like the benchmark has done its job it's not it's actually one of the harder benchmarks to game like people can go game it but we actually have categories
[03:35:08]  for it i went through one time and categorized i went through all 100 implementations and categorized them and looked for for gaming or cheating of them at this point i'm
[03:35:16]  pretty good at looking at frameworks code and understanding what they're they're doing there uh it was a couple years ago i'm not as involved in the repo anymore it's actually
[03:35:26]  it's yeah it's actually one of the better examples of js benchmarks out there it's just it's not as it's it's outlived its usefulness yeah yeah
[03:35:36]  yeah yeah like anything from about lit which i would say on the slow end faster is like who cares like even lit it's like who cares yeah yeah i i do think
[03:36:01]  that up to about 1.2 it actually does say some amount of things about the performance characteristics things that score above that aren't in what i consider necessarily the op because
[03:36:14]  this is just looking at pure raw dom operations i think it's still an important place to optimize and like row uh reconciliation and whatnot there you go right there's always a new
[03:36:26]  author in in the audience uh we we're not gonna win a popularity battle today let's but we'll get there okay so march 10. what was this responding to i
[03:36:49]  remember this being really good yeah okay let's okay let's let's let's keep going um okay so i think i'm done on bookmarks except for the last one so
[03:36:59]  let's let's go back and talk about some of the crap i posted this week that got people going so what else did i do this week i've been working a
[03:37:11]  lot on hacker news demos for solidstart they now all basically work with caching but it was definitely fun to find some bugs in nitro and vinci and get them worked
[03:37:21]  out so solidstart is in a good place but that was what i was doing monday tuesday but on the weekend i forget what this is subtweeting but i
[03:37:32]  saw someone post something um and i was like man it was so easy back in the day like when i built solid i noticed there's a gap i've actually had an article
[03:37:45]  about this uh what every framework could learn from react okay and this is like again i told you i've talked about the same the same topics over and over again but i
[03:38:00]  look at the history of javascript frameworks in this article right and and i talk about coarse versus fine grain and strict data flow versus loose data flow i didn't know
[03:38:14]  what to call these categories when i wrote the article and people tell me that this makes no sense but i've been making this my head i've had this graph and i talked
[03:38:24]  about it again on like solid history uh past present future stream and people are like ryan what the hell are you talking about the stupid graph that you keep on doing but
[03:38:33]  it's where i recognize that there was a gap in one of the quadrants conceptually there was like i i didn't have the right names for these terms and i've
[03:38:42]  been working on this chart and i talked about historically how like everyone was here and then they were trying to go here where knockout was which i thought was a good place and
[03:38:51]  then like react came out so everyone started going here you know because they wanted to be more like react but they didn't realize like they're they're they weren't in
[03:39:00]  the same like it's like when you're in they're working in one dimension when you when you don't see that like it's two dimensions right you're just like oh
[03:39:08]  react is this way not that way you know like if it's like a 2d 2d point in 3d like 3d plane like it just you know i mean like
[03:39:18]  you got 3d zone and then you have a piece of paper sitting there you know you see stuff like that might be a distance from you don't realize that it's like
[03:39:27]  on the other side does that make any sense and i i recognized that there was there was like a gap here and now i've never been very good at expressing this until
[03:39:42]  danian abramoff and i had that conversation after the signals uh article where he wears in the chat and he made me realize what these quadrants were i talked about this
[03:39:52]  before being like fine grain and coarse grain and this being like philosophy or like like there's so many dualisms like immutability versus mutability um uh what's another
[03:40:05]  example of those i had all those articles i was showing earlier um uh oop versus fp um like there's a lot of things that seem are seemingly opposite uh fine
[03:40:17]  grain versus coarse grain um in any case i took the same graph it's kind of rotated but i realized when i when i created solid um and this is before svelte
[03:40:30]  actually came out completely but like it's it's not hard to picture that there's that there's there's frameworks that are in this zone but like there was a gap
[03:40:41]  here there was no really data flow frameworks that were simple versus easy most people saw signals saw signals as a oh automatic reactivity this is a way to make things easier and so
[03:40:55]  there's a lot of things like in the view maybe angulars over here somewhere space and then like over here you have react you know we're just javascript just
[03:41:05]  functions very simple model you know like redux but and this always got people because people are you're calling react simple well what they value like for example they could have not had
[03:41:15]  you put hooks array in right they could have like they could have been like oh yeah we we whenever you use use um our compiler will just uh you know we'll just
[03:41:26]  like figure out the arrays for you people need plugins for that but react core team didn't do that because they value simpleness over being easy that's part of the composition thing
[03:41:36]  you'll find that simpler things are easy to compose easier like or easier to compose if you if you try you can always make something um easier by adding abstraction but it makes
[03:41:46]  it harder to compose usually this is my complaint about react forget it's side note but basically from my perspective the frameworks actually found the space and i'm like there is a gap
[03:41:57]  here now this is my own framing everyone has their own thing of why there needs to be a javascript framework but i decided that this was a zone that i wanted to
[03:42:05]  live in and that was unique because philosophically i did not think the other frameworks would move this is a clear space if someone else was just going to do what we were
[03:42:15]  going to do then why don't you just work with them so like and the thing that the common pattern was after 2015 16 or whatever whenever react came out most frameworks focused on
[03:42:27]  being easier than react they're like oh this is our angle we can get the early adopters we can get we get the people just coming in we can be easier than react
[03:42:35]  we can take away steps this will make us more desirable to new newcomers we can be progressive we can do that whole thing and just like essentially like you know like get
[03:42:48]  the people just starting and circumvent react altogether it's it's a really smart move for adoption i mean i wasn't that smart i i i decided to build in a hard
[03:42:57]  place but this is arguably the hardest quadrant to build in but like this this is a very fundamentals kind of question this is why i knew react was not going to cross this
[03:43:14]  line so to speak these guys you know they don't want to cross this line like this is a place where you can say the solutions aren't equivalent right so i mean
[03:43:32]  you you all following so far right like it was very easy for me to see the space i know not everyone sees it a bunch of people saw solid and we're like oh
[03:43:40]  isn't this pre-act see again not seeing this line sorry switch um you know like people seeing you know what was actually interesting because people talk about the future now and
[03:43:55]  they're like well what's going to happen when all these guys come here because svelte is like doing a diagonal pretty quick these days views going here but the truth matters
[03:44:05]  they don't want to give up they like being in the easy quadrant so my i'm actually more seeing these two colliding into each other rather than coming all the way over
[03:44:14]  here they might like svelte might have like backtrack like a step but they they don't want to go here they they are the easy framework view is progressive framework
[03:44:23]  still on this side they don't they don't want to come all the way back here so like it's actually these two that are colliding once felt is moving from control
[03:44:34]  flow coarse grained essentially to to data flow like fine-grained data-driven of things so i hope this graph and this explanation makes sense to people but for me
[03:44:48]  this was always a way that i knew that react is actually kind of was in a zone of its own and kind of solid was too and there's a there's a lot
[03:44:56]  of tools that are over here anyway where does the htmex sit htmex i don't think is control interesting it's up it's htme
[03:45:15] x is up here with react isn't it it's control flow and it's simple right like it doesn't really deal itself with data but in a sense um it switches
[03:45:33]  the way it swaps stuff out is is it's not granular it's not like about data and mutation and diffing it's like literally swapping crap out so it's
[03:45:44]  it's control flow and i'd say is it simple or easy i i think i think it's simple i think it's more on the simple side it just doesn't
[03:46:02]  do enough right problems on the simple side usually are under engineered solutions slightly that you have to add stuff you have to do more things on top so yeah i think htme
[03:46:13] x sits in the same quadrant as react i mean we the problem is like it's got to do with values i guess a certain stance and it's hard for me to
[03:46:29]  judge on htmex completely it's just like like yeah you it's hard i actually don't know where it sits on the simple versus easy scale so yeah i
[03:46:49] 'm not sure but it's definitely on the top side of the quadrant because it's definitely controlable anyways um yeah what to say the subject are in this the discussion choosing frameworks
[03:47:02]  these days these sorts of philosophical differences still exist and impact every design decision this is where the enjoyment of these tools originates it isn't about performance or popularity i think someone was
[03:47:11]  trying to and and we wonder why people aren't satisfied when they set down a single path part of the situation i i think somebody was just i think i just read some
[03:47:20]  some more stuff about you know how you know yeah i forget what it was now but i i realized that i finally had the right stuff to put here like i think frameworks want
[03:47:33]  to live in a certain zone do you know who's down here with view quick quick state of flow driven and it wants to be easy over simple right they might be like here
[03:47:43] -ish but like automatic compiler to handle the stuff like they're definitely like on on on this side like yeah i don't know it's it's it's not a
[03:47:53]  single point in time you you know i mean like there's there's there's different decisions you make different decision points on it's it's like it's an average but i
[03:48:02] 'm hoping that but like there's some good comments the distinction is easy and simple too many conflate the two it's why react devs love solid this is actually explains
[03:48:12]  a lot when you look at positionally right because now you're like why do you think it's not just the jsx it's it's that react devs fear crossing
[03:48:23]  this line 10 generally they fear crossing this line too but like like some of them will cross this line some of them across this line the line they they don't actually this
[03:48:34]  is probably the farthest from each other it's it's you know what i mean like similar solid devs some will cross this line some across the spot it's funny i
[03:48:42]  have a huge amount of admiration for svelte on the other side but like until v5 it was not even remotely in my interest of actually using i just didn't
[03:48:53]  care about anything they were doing like like like the stuff that was important to us over here and important to them were just so far removed right like whereas here is like oh well
[03:49:05]  view that's interesting it's almost what i want but not quite react it's almost what i want but not quite right and view community probably the same thing they're like hmm
[03:49:14]  svelte i like that it's easy but hmm solid kind of like thing but it's not as easy like you like there is definitely this tension this is why like
[03:49:25]  these guys like as i said we we're we're like passing ships and i think actually react and view are kind of passing ships too um i don't know well the funny
[03:49:36]  thing you mentioned it's someone in the center of the whole thing um how it started how it's going ricky posted this uh ricky handling from the react core team i
[03:49:53]  i mean he's just he's kind of playing with it a little bit but like yeah i i spent a lot of time in this thread explaining to people the difference between simple
[03:50:04]  and easy like incredible amount of time i i did post about this in the past but like but yeah it's felt three is the epitome of easy over simple yeah
[03:50:14]  exactly people i think this is a really important distinction for people to make this control flow versus data flow is less important this is a technical distinction but but this is a very important
[03:50:25]  philosophical distinction um to make where's angular um angular is angular is actually something that's closer to the middle it's angular ironically is itself control flow but rxjs is
[03:50:45]  data flow so like it tries to hover this line and it's values angular values easy over simple somewhat maybe not as hard as these guys because they're they're willing to
[03:51:06]  but like so angular is like over here somewhere we're going to go to the middle here we're going to do it it's just like we're going to do it
[03:51:25]  we're going to do it we're going to do it we're going to do it we're going to do it and we're going to do it we're going to
[03:51:27]  do it we're going to do it we're going to do it we're going to do it yeah yeah marco marco marco is uh is down here it's
[03:51:30]  like easy and data flow it's like i i i enjoy marco because it's so far on the on the like it's it's so funny because the syntax gets in
[03:51:46]  the way of it being easy by most people but if people actually accepted the syntax it's actually conceptually like like it's not on the simple side it's actually like
[03:51:56]  very hard on the easy side i use marco a lot because it lets me flank these guys because when they'll say something they'll be like oh yeah it's so much
[03:52:04]  easier i'm just like easier in marco and it's like oh but more performant and solid marco was me doing the pincer attack or a bit because it let
[03:52:13]  me explore what it meant to be hyper on this side of things you know where everything's automatic you know but at the same time you know understand and appreciate what that means
[03:52:26]  and also have basically the foil to basically anything that these guys do i mean it just it just helped me get perspective angular with signals is interesting because now they're getting it that
[03:52:43] 's the move angular is moving out of control flow i think they're going to again this is it's a convergence going to be down here everyone's going to be like
[03:52:50]  react pulled everyone up to control flow again angular was already there but is is signals going to pull everyone down to data flow but down here is like this is the quadrant that i
[03:53:01]  don't want to be in coming up no offense to these frameworks it's just you guys are all basically doing the same thing philosophically the truth is some of these people
[03:53:09]  are going to start moving back this way too so it's not like that clear you know but like i i'm not worried about reactor solid i'm i'm you know
[03:53:20]  yeah anyway yeah this has just been my mental model like i like mapping stuff this helped me a lot simple means yeah i mean it depends what it is sfcs are an
[03:53:40]  example of some of something that it was done for easiness rather than simplicity that's one example yes they are they are they are working that way it depends on yeah it is
[03:53:54]  quite possible that angular actually is less concerned with being easy and more like it's possible that angular is walking more this way as well yeah i mean it's going to start
[03:54:13]  with some people like tanner and then hopefully grow from there um you know yeah so yeah i i this this i this is how i think and i hope people can appreciate that
[03:54:28]  i had a a lot of really good how i think uh threads this this this week um yeah easy generally more as magic the funniest thing is at a certain point in time
[03:54:40]  pre-compilers if you like zoomed in this scale most reactive solutions were on the easy side like in a sense react classically might be slightly more harder simpler
[03:54:55]  than say solid but react itself has moved itself like when they added hooks we're not we're not we're we're getting very quickly out of simple yes yes and then
[03:55:12]  and this is exactly what exactly benton lit is over here it's in control flow and simple it's like here there it i think it's easier to be simpler in a
[03:55:21]  control flow based framework than in a data flow based framework because of the language like i think language thing but yeah lit is probably over here preact is still probably slightly left of
[03:55:32]  of react um yeah yeah no exactly yes of course there's a whole ecosystem training teachers there's a huge amount of money in react just like sitting there like being around react
[03:56:01]  we'll talk about more yeah we'll talk about that too um yeah so i don't know if i was i looking at bookmarks here yeah this is this was an
[03:56:17]  amazing article um i've never read this before this is an old paul graham article i've read some of his stuff obviously but this is from like 2004 i'm ready
[03:56:27]  for a post react world oh there's a quote this article is called the python paradox and it is amazing let's just it's not that long maybe we'll read some
[03:56:42]  of it to you in a recent talk i said something about that upset a lot of people that you could get smarter programmers to work on python project than you could to work on
[03:56:49]  a java project i didn't mean this that java programmers are dumb i meant that python programmers are smart it's a lot of work to learn a new programming language and
[03:56:57]  people don't learn python because it'll get them a job they learn it because they generally like the program and aren't satisfied by the language they already know i like comparing j
[03:57:05] avascript frameworks to back-end languages because a lot of the comparison between them and the stuff is actually very very similar kind of like mentally about breaking it apart which makes
[03:57:15]  exactly kind of programming companies should hire hence for the lack of better name i'll call the python paradox if a company chooses to write its software as a comparatively esoteric
[03:57:23]  language they'll be able to hire better programmers because they'll attract the only those who cared enough to learn it and for programmers the paradox is even more pronounced the language to learn
[03:57:31]  if you want to get a good job is the language that people don't learn merely to get a job only a few companies have been smart enough to realize this so far
[03:57:38]  but there's a kind of selection going on here too they're exactly the company's programs you most want to work for google for example when they advertise java programmer jobs they
[03:57:46]  also want python experience a friend of mine who knows nearly all widely used languages uses python for most of his projects he says the main reason is that he likes the way the source
[03:57:55]  code looks that might seem frivolous reason to choose one language over another but it's not so frivolous as it sounds when you program you spend more time time
[03:58:02]  reading than writing this is actually one of rich harris's big philosophical things he that's why he wants svelte to look beautiful you push blob the source code around the
[03:58:13]  way a sculptor pushes blob of clay so language that makes a source code ugly is maddening to an exacting programmer as clay full of lumps would be to a sculpt
[03:58:21] or at the mention of ugly source code people will think of pearl but the superficial ugliness of pearl is not the sort i mean see this article is so dead on
[03:58:30]  do you do you know what i mean like the difference between solid and svelte is solid might be like tiny bit uglier now compared to svelte 5 but it
[03:58:42] 's that's the superficial type real ugliness is not harsh looking syntax but having to build programs out of the wrong concepts pro may look like a cartoon wearing character swe
[03:58:54] aring but there are cases where it surpasses python conceptually so far anyway both languages are moving targets but they share along with ruby and icon and joy and j and l
[03:59:02] isp and small talk the fact that they're created by and used by people who really care about programming and those tend to be the ones who do well 2004 guys here's
[03:59:14]  here's here's a here's a knowledge bomb just this yeah the python paradox i mean it's fine like obviously this was a real thing that was happening then but it
[03:59:32] 's it feels as applicable as it is then as it is now yeah 20 years ago yeah i thank you nick for sharing this article i'd never read it before but this is
[03:59:58]  this is like if i would start scripture i'd probably pick felder solid for the same reason paul graham lays out essentially i think i'd get more switched on
[04:00:05]  better developers it's definitely a trend of react apps who barely know js yeah yeah so this is why i i have a soapbox right now so to speak because this is this
[04:00:27]  is kind of the part of the the conversation and it's so funny how this stuff all winds up in a single week right because we might have started here right no let
[04:00:41]  me go back this is where but like the very next thing where was i going yeah here it is right yeah it's where the jobs of money are right it's a
[04:01:06]  funny comment doesn't require good parents to flock to the language of bad rumors avoid it yeah yeah because yeah the the funny thing is the a lot of responses to this and
[04:01:23]  i didn't talk about them yet is people what i was saying earlier stream where people wanted wanted to essentially be well ryan don't be so wishy-washy look
[04:01:33]  at the responses to this see i think i'm being very you know i'm putting my belief system here into claims ryan over there just being a cool dude be like
[04:01:43]  ryan right it's because like ryan florence was basically like insulting everybody's projects while i'm posting this but i'm i'm i'm being very definitive about
[04:01:54]  like things i can't consider valuable maybe focus on writing things we don't know about solid these subjected tweets are what confuses everyone imagine tim cook coming out and like android
[04:02:06]  has some great futures it's a tough one i'm not saying that i'm saying that this is by far the best quadrant to be in and this is why you want to
[04:02:16]  come here this is why we're not view or svelte or react and why these we're not worried about them absorbing us right oh did i reply to this one
[04:02:35]  someone's talking about the react compiler i wouldn't say the react plan makes anything simpler easier sure this represents a shift in position react from my perspective yeah yeah because like if react
[04:02:45]  has a compiler they're kind of going over to a little bit maybe they don't cross this line but they're definitely going towards where old or old svelte is well
[04:02:53]  svelte's moving down this way it's like a little bit of a revolution here um yeah but like anyway the the you know what i'm trying to say here
[04:03:08]  is like it's not simple right it's not like one back-end language can do what another one can't or even necessarily the right tool for the job we just have
[04:03:21]  to recognize that they actually have deserved space that they aren't all the same thing it's not even inside if web adventures post react world it's all js is a
[04:03:50]  solid place thanks no i i don't think so people don't want to be on this side this is this takes perseverance this is why i have such an admiration of historically of
[04:04:09]  react and whenever they move this way i get concerned those are the things like this is the react that i love this is the react that i learned to appreciate as they if
[04:04:21]  they move this way and i think it's inevitable here's the thing you guys got to understand these places aren't fixed over time if your solution gets popular in the adoption curve
[04:04:31]  like you have to move this way it's it's it's kind of there's an inevitability of having to move uh right to you know continue to grow when you
[04:04:39] 're already at the top of the mountain or there and react isn't even at the top of the mountain you know like like they they they only make up like a small percentage
[04:04:47]  sites compared to jquery but for them to get to their next stage they have to move this way this is a smart move it's just i'm an early adopter
[04:04:55]  type i miss this react this is the react that i respect do you know what i mean like this is why i've always been so positive about react because this is a
[04:05:10]  place i that i respect on this side it's just like maybe it's like too punk rock like don't sell out you know what i mean like that that's why i
[04:05:21]  i struggle a lot with some of the stuff that's been going with react recently it's a philosophical shift a very slow one a very calculated one and a very important one
[04:05:34]  ultimately because they got bigger fish to fry bigger fish than us down here but like you know things change you could stay left for pretty long do you know what i mean like
[04:06:04]  you could stay left for quite a while react stayed left the whole first decade the other the the truth of the matter is we we started from a place that was slightly right of
[04:06:16]  where react started anyways so we have even more time conceptually it's it's not too far of a jump to see us from where we are to where view is in
[04:06:26]  the at least the important place ways but no you know what i mean like i'm not too worried about our right shift anytime soon but yeah i mean the you have to understand
[04:06:47]  how much i like react to understand this chart anyway perhaps from my perspective it's it's funny um i actually wanted to talk about this a little bit um but it's
[04:07:12]  it's like the the next thing i start doing is i post a bunch of stuff and i was just looking at the deployments but everyone's telling me performance stuff between cs
[04:07:20] r and the next thing i know the the team at google release imp like imp officially in which is a big deal because it actually handles page performance which will tie to the
[04:07:33]  next topic and really quick but for those who don't know input to next paint is different than first input delay because it actually handles the responsiveness more it's not just about
[04:07:45]  like how long it takes for javascript code to run when you click something it's actually about expressing that to the end user it's till next page so i asked
[04:07:54]  i asked people a question don't worry we'll get back to react in a minute this this is semi tied in and i want to keep that kind of like on this chain
[04:08:00]  of events it's i i got a question for you picture the difference between clicking a button on the screen and the code is already loaded in the browser and it renders synchron
[04:08:13] ously or the or you click the button and the code is lazy loaded at the point then rendered both actually run some amount of code immediately one will actually go render immediately the
[04:08:23]  other one will go okay hey i need to lazy load this and then render it the but the thing is the second one will be done first synchronously because it differs the
[04:08:38]  work it'll just see oh lazy load the code done with the second one where the first one actually like you'd have to wait till all the rendering happens synchronously so one
[04:08:47]  will block longer but it completes the interaction first so my question here is what is more responsive right is it the thing that blocks more but like finishes first that you actually see
[04:09:09]  the result of first or is it the thing that um takes longer to finish but didn't block well i'd argue that's one right generally speaking it's not until you actually
[04:09:22]  see the the result of you doing something that it's responsive you could click it you don't care you need to see the thing but if two immediately indicated that work was
[04:09:34]  being done then that would be responsive even if it took longer but you showed like a hey i'm thinking that would that would at least you know show that it's alive and
[04:09:44]  that's what imp is testing it wants to know how long till you actually like can show something that updates you don't have to finish the thing but it's it's
[04:09:52]  a hard metric because every interaction is different right if so like the i i think what we want is more responsiveness we want to be able to have indicators that stuff has updated
[04:10:09]  rather than necessarily it finishing first and this this is an interesting metric because it does punish a lot of single page app type situations um it it's it's definitely hard it
[04:10:22] 's the reason why if you guys have ever noticed on my uh oh is it not on it's is it i'm like wondering if it's on this one i might not
[04:10:31]  be on yeah yeah if you ever notice i always have these web vitals things open see imp i whenever i'm on any website i'm actually you can track imp um this
[04:10:42]  is all imp here this is something i've been watching for the last little while i'm very interested in this in this metric and now it's an official metric for um
[04:10:51]  for uh like core web vitals yeah see react used to be so simple news line was really rich we entered deep into experimentation hawk blah blah blah blah caesar rap wants
[04:11:13]  to do our thing yeah the the chat see i actually yeah it's one of those interesting challenges because um sometimes like there's a being completely simple is is hard because it
[04:11:27]  can lead to more boilerplate so there there is a question where the sweet spot is and that can shift over time like tanner lindsley will tell you straight up
[04:11:35]  that like react simplicity of not having a state management system means that every third party library basically needs to invent its own state management system if it wants to like handle state you
[04:11:45]  know in any kind of independent sort of way um so like example of being overly simple but they can be good right as you said the ecosystem was able to to live off
[04:11:56]  of that so like i think it's important that we can you know can see that kind of balance um the solid beat to become even simpler yeah i mean i've learned how
[04:12:09]  to better reorganize stuff my goal is as a framework author is always how to make stuff simpler going left is incredibly hard from any starting point it's painful um so but
[04:12:20]  it it's the thing that i can offer you right because you can always add more abstractions you can always make something more easy if people can always do that out in the
[04:12:29]  ecosystem so to speak but it's very hard to get the right set of primitives and stay left and that's that's what i see my mission is yeah i mean
[04:12:37]  it's i'm not the mental model is we're not shifting anywhere yet i the solids hacking these are simple interactions are imp is what do we got here which one should i
[04:12:55]  do start netlify sure okay so yeah what do we get lcp444 imp zero so very good first input today one millisecond apparently i don't but
[04:13:07]  let's go here so 16 milliseconds yeah see let's go to this one i'm not getting all interactions this way it's interaction maybe it's the first time you hit a
[04:13:15]  certain type of interaction 16 milliseconds is good as long as you're sub 50 but like this is a dirt simple page so it's not really yeah anyway simplicity of mental model
[04:13:29]  versus simplicity of implementation yeah i mean these things can move apart apart i think the i i don't i don't care about the simplicity of implementation so to speak is something
[04:13:48]  uh it depends it depends yeah i the the this this is i i think the mental model piece is more important to the consumers of the thing but it does impact as soon as
[04:14:05]  you have to debug soon you have to go through that's what makes react hard because it's gotten it's simple mental model hasn't stopped awining with it's simple
[04:14:13]  like simple implementation um but like for me it's a values philosophical thing which is why i was looking at it not implementation that's why it's fair when people go react simple
[04:14:24]  are you crazy well no i'm talking about values mental model like that's that's where people can carve out unique spaces someone can always go in and try and make a simpler
[04:14:33]  version of react maybe preact simpler than react for example but that's that still overlaps in the same space it's the mental model that's important i think people like
[04:14:44]  the right side you guys wouldn't be here if you didn't have some preference towards the left anyway let's get to the next one matt billman um ceo of
[04:15:05]  netlify asked devin to make him um you know a nice to do app and have it deployed to netlify so this is awesome technology don't get me
[04:15:20]  wrong like this is very cool that it can do this kind of thing i realize that it's only slightly better than what is existed previously and it's just all incremental but the
[04:15:28]  fact that we're getting here is very cool and it made a pretty cool app you know you can do this i don't think enter key works no it doesn't you can
[04:15:36]  add functions so it's like you can't actually uh cross things out but you can edit and you could save and you know it's a simple to list with actually less
[04:15:49]  functionality to the mvc but it looks pretty is there some animations when i delete yeah i mean there might be some stuff happening here i don't know so this is cool
[04:15:58]  and matt was showing this off which is definitely cool stuff and he's showing you know this this is something get excited about right but you know me what's the first thing
[04:16:07]  i do when i see something like this well first thing i did was i looked at the console and i was like 130 kilobytes of javascript there's only one
[04:16:13]  framework i know that would do that this is react um for like an app this simple um pretty much i mean i guess it could be angular but like let's devon's
[04:16:25]  not yeah i i was like okay this is gonna be react so i actually looked in the code and i found framer motion and i found chakra ui and it's
[04:16:35]  react right so what i i decided to benchmark in lighthouse and it's about an 80. i think i got an 82 once but most time i get it actually between 75 and
[04:16:44]  79. this was actually a pretty good run um odd total blocking time pretty high largest contentable paints high because yeah it's a single page app it's a client-side
[04:16:53]  rendered spa it's not a ssr so like you know it is what it is but i mean don't get me wrong this this is absurdly low like i
[04:17:04]  would have a like there's nothing in that to-do app i i can't think of a single framework that if i went and said i'm gonna make it to do
[04:17:11]  happen right now that won't get a hundred with like it's like you could penalize it you could like load blazer in there and probably still get a hundred um
[04:17:20]  okay maybe that's a little far blazer probably is an exaggeration but like like i'm not sure blazer could get a hundred but anyway you get my point so like
[04:17:33]  this is pretty bad like it's it's it's just it like i could i could look i could see some web packs there's basically no tree shaking going on um but
[04:17:45]  it started getting me thinking right like yeah it's it's chakra yeah yeah chakra you're on frame of motion um why did it choose these libraries and is this what developers
[04:18:02]  just do they go oh i'm making my new app i'm just gonna grab the giant libraries in the ecosystem i don't care that they're you know humongous or
[04:18:10]  whatever um and it makes i mean i think some problems like accessibility are just actually hard which is why a lot of ui component libraries are much larger than you'd hope they
[04:18:20] 'd be i'm pretty sure chakra and cobalt are about the same size or like 60 some odd kilobytes for the whole thing hopefully tree shaking improves that considerably but
[04:18:31]  like like i i guess there's not much to gain on that side you know but like you know right tool for the job kind of consideration i said that's not like
[04:18:40]  an overall thing i'd consider for a framework but like the animations in a to-do mvc could be done with css you don't need frame or motion probably
[04:18:47]  but it's but but our default right now because we have these ecosystem libraries is let's just load all the ecosystem libraries in like it's it's not necessarily a good
[04:18:57]  thing to just rely on all these libraries um obviously not everyone's building a to-do app granted but it made me you know think about this because to do mvc
[04:19:06]  in most frameworks that i consider you know modern and fast and smaller it's about five kilobytes or six kilobytes um i did a comparison a couple years ago
[04:19:16]  if you remember um what was it like dev2 um i can't even remember where was it it was uh to-do mvc javascript framework comparison this is
[04:19:29]  the one where it showed that svelte used to scale really really really really bad um but svelte 5 fixes that so we're all good um yeah exactly right
[04:19:44]  so and but like it's like as like do we want our ai to do this like is this what we want our ai to do like we do this because it's it
[04:20:00] 's easy but do we want our ai to pick all the things we'd rather them get closer to the vanilla right like maybe maybe not maybe you can't tweak it so like
[04:20:10]  basically i was just noting that it just basically didn't do anything for our complaints to see when making the right technical decisions a popular governance of the trends does ai just propagate the
[04:20:21]  same average expectation as a future everything being mid i meant mid in the middling sense i'm not not some 20 year old kid but yeah maybe i'm maybe i'm
[04:20:36]  talking to the young folks fine today but like like this is kind of this is like the question it's like would you rather have it generate the most optimal code for you
[04:20:49]  that you can't edit or would you rather it just pulling all the same crap and follow like what what they think you would know yeah i'm i probably am i think i
[04:21:03]  might ran out of characters um after i saw the reaction to that i just kept on i kept on going with it i have to admit yeah um yeah no it's it
[04:21:25] 's a good term honestly it makes middling sound even worse because it is middling uh but i i had some reflections after this right because i was being hard on the
[04:21:43]  api pretty the ai pretty hard here saying like you know how does it make these choices and the problem i started thinking i'm like well it makes these choices because people make
[04:21:51]  these choices because yeah we don't want the this optimal ai at least yet we're not ready for that level of abstraction yet we might one day i think the truth is
[04:21:59]  we have to find better primitives because whenever you get a new layer like something above what you already think is the highest level of abstraction what usually happens is the next levels like
[04:22:08]  the things you built up to get to there to get to that level get ripped out and then you go okay wait a second now that this is where we're at we actually
[04:22:15]  need different primitives this happens all the time the because when you get to the most opinionated level you have to make very conscious trade-offs if you find a new higher
[04:22:24]  abstraction usually those trade-offs end up shifting or changing which means that you actually end up having to rip out the previous high abstraction to actually best benefit the new higher abstraction
[04:22:35]  so i actually think that like generally speaking um like we won't have that duality that i was saying like we won't have just like unreadable code the ai
[04:22:52]  produces or um you know this garbage to be quite quite honest um it's going to land somewhere in the middle so i'm not actually too worried about that it's just more
[04:23:05]  that why are these initial steps looking like this right that's interesting so sounds like an instruction clear error requirement sometimes in customers themselves don't know what they want and yeah yeah
[04:23:32]  yeah i mean that's the thing ai will better capture our intent but it's also like this is kind of i i i see this as pretty representative of where things are
[04:23:43]  today i actually think most people go make a project and this is like they'll look at better than 79 hopefully god like getting 100 on a 2d app you should be able
[04:23:51]  to do blindfolded but like like like like yeah next js to do app 100 pages server components whatever gets 100 like i don't know if that doesn't scale maybe to
[04:24:06]  hacker news demo but to do app yes um my i even yeah like this is just not a hard performance perspective but yeah i i think i think that i think that it is
[04:24:21]  kind of representative actually of what people do now when when they get started they're just like oh i'll just pick these tools because they're popular and it's fine that
[04:24:29] 's always going to happen and this is this is kind of like a bunch of popular libraries together um so i saw primogen's polls and this is just the youtube one but
[04:24:41]  there's also two twitter polls and the results are basically identical what primogen was actually after was he was like you see here i think h21 seconds a big surprise it's
[04:24:50]  not a big surprise to me because this is a good site best of js projects this will give you a very good idea of where the hype meter is at any given time
[04:25:01]  so we can go stars yesterday and then we can pick a project like react and go ui frameworks and you'll see as of yesterday well you had a good day yesterday solid
[04:25:12]  had a mediocre day so it's felt um views in the mids react usually has good days as it is htmx htmx has been having good days
[04:25:20]  for eight months eight months in fact you know so like it's unsurprising that that at that kind of growth rate that that the hype cycle is where it's sitting
[04:25:31]  um you can see other frameworks yesterday yeah but you know let's push it up to last seven days and this is just github stars but i find that this is reasonably
[04:25:43]  reasonable on the hype meter solid's been kind of on the low recently right not as low as some other frameworks these days but like you know and we can look at the
[04:25:53]  last 12 months and we can see you know you know stuff is kind of like i pay a lot of attention to this i guess htmx still is higher up than
[04:26:06]  maybe even prime realized but i this wasn't what i focused on i actually focused on this if i was to start a company and offer you a job front-end development which
[04:26:13]  would you prefer the complexity of an app of the application is nearly six years ago and i like this question because thank you i like this question because like if you pick
[04:26:39]  something for six years ago i think actually htmx probably could have done netflix six years ago it's not what i would pick but it it's it's probably
[04:26:51]  reasonable answer here more reasonable than you think but if you're gonna start a new company i mean i actually think the react numbers in reality are much much much higher than this
[04:27:04]  but it i was just like what did i what was i writing here i i thought it was really funny that he used netflix six years ago because netflix six years ago
[04:27:17]  was exactly the time everyone knows that story about how like it's in the react documentary how they went hard on react in 2015 but in 2017 they actually started removing react from
[04:27:27]  their client side to improve performance which is crazy because react ssr isn't actually particularly fast at all but they i guess they were already invested in it and then they started
[04:27:37]  like doing react ssr with doing javascript on top of it by 2017 six years ago roughly um this was october so like six years and a few months
[04:27:46]  they basically you know started you know being very selective about what react js they kept on the client yeah yeah sorry react hooks well no reactions wasn't quite six years ago it was
[04:28:04]  a little bit more is 2000 it was like the end of 2018 so yeah it's five and a half years ago so somewhere in between that um so like it was just
[04:28:14]  kind of a very interesting example for me because i i hear i do talk to people on netflix occasionally people auditing solid for different things mostly low-end devices they've
[04:28:24]  been kind of struggling with some performance access with react for years they have inferno actually a lot of mobile tv platforms and stuff so like like there's a question of if
[04:28:34]  they can like shift off of this stuff so it was really interesting to me because like in my head i'm like how many people just chose react because you know it's a
[04:28:43]  default choice or like actually now like i know with my research i wouldn't choose react knowing what i know from what actually happened right like reality is react is not the right
[04:28:56]  choice for probably for netflix six years ago right and i mean react has improved but like yeah i guess a little harsh here right this is the mid thing because it was funny
[04:29:14]  when ricky said that this was react now i didn't think that was a good thing i that it's like right in the middle right um and like it's just
[04:29:23]  funny because when you talk to people about this about like actual case studies everyone's just like don't worry the new react compiler is going to fix everything or rc is going
[04:29:34]  to fix everything like there's always a promise of some better future and and as long as you're the most popular solution you can just keep on promising something that will never come
[04:29:42]  perhaps or will you know not quite deliver on the promise and that's okay but it was like at a certain point i was just like that ai thing tripped me in
[04:29:54]  the weirdest possible way i was just like sitting there and i was like i i got lots of bad habits you can see it i twitch around a lot i can't help it
[04:30:05]  and my son started like imitating my excited thing and he yeah i was like oh crap like i got made fun of a lot for that but he wasn't doing it
[04:30:17]  because of like the same condition that i have he was doing it because he saw daddy doing it and he thought that you know that's you know a cool way to act and
[04:30:26]  i was like i was like oh man we got to do something about that because he just wanted to be like daddy which is very cute but when i saw ai make that
[04:30:36]  react app i was like man that's that's like not cute like you know it's it's not its fault you know like like it's just reflecting our i just saw
[04:30:53]  a big mirror being held up in the exact same sort of way when i saw that what devin outputted yeah and i mean ai is always watching right so like
[04:31:22]  yeah you know me and adam rackets went deep it's it's not that important i i it's just i'll talk about it in a minute but it was it was
[04:31:39]  just like i don't know i i guess this was chan i this is more aggro than i like being this is channeling my alex russell a little
[04:31:50]  bit it's just like come on at a certain point and i know that the devin example is not a great example it's just like when that the reality kind of sinks
[04:32:01]  in that this is where web dev is and where it's going to remain for quite some time it's it's it's it's it's a challenging thing to kind
[04:32:14]  of deal with from where i sit because it's like you know like what's the point and um yeah i the this this this is this is why i decided to speak out
[04:32:29]  um on this more than anything because i've already clarified i like philosophically reacts doing and i like this and it's a hard problem it's just like it's it
[04:32:39] 's not the react core team it's the ecosystem of people not interested in learning i i you know which is you know people like don't blame the people right but it
[04:32:54] 's like at what point do you like at least ask you know to discern the critical questions yeah i i think i think it is but it's like the python it
[04:33:32] 's like the python thing you know yeah i mean ai will get better and i think we'll we'll rapidly get to that point but like i i don't even think
[04:33:44]  people realize where the problems are right now enough to get ai i think ai is gonna is ending up being a reflection of ourselves more than anything else yeah and we we know
[04:34:06]  this this is a scientific like it's we we know this it's just i don't know i i feel like prime and i could be wrong i might have to ask him
[04:34:18]  next time i'm chatting with him this this next netflix six years ago was a very intentional thing i think i think netflix had a choice six years ago to go a
[04:34:26]  different path or seven years ago and i like i feel like i you know what i mean like yeah like this is maybe i'm reading too much into it it's just
[04:34:40]  every opportunity to to try a different answer and i guess htmx got that so i mean maybe this is success of a change and that'd be good if ht
[04:34:53] mx can gain popularity and knock what we're doing down a few pegs i think it would be good because then people would appreciate what these frameworks can do that h
[04:35:03] tmx can't anyway um so me and adam continued on and on and on because he if you go deep down this thread we start talking about alternatives to react actually let
[04:35:25]  me just pull this out here um where is it let me just scroll down a little bit see if i can get to some of the adam stuff right i was like because
[04:35:36]  he's talking about investment right it's all start next focus yet is there a solid shad cdn and somebody starts actually like posting stuff we actually have these libraries to
[04:35:50]  be fair um but that's besides the point because tomorrow there'll be something else new and i think this is the biggest standoff here that's tricky part people don't like
[04:36:03]  about this when you're talking about something like the incumbent like that has an infinite resources to deal with they're always going to be ahead on like some kind of new thing
[04:36:13]  because people build stuff for them right so but on the other hand if someone else does something important before that that solution it's not seen as important because no one's using it
[04:36:22]  yet like it's this terrible catch-22 right like basically even if like everything that adam listed here was thumbs up tomorrow like like like how long has shad cn even
[04:36:41]  been around for what's like like how long is it sheds cn ui yeah okay 375 commits okay let's let's just uh let's jump here it
[04:37:07] 's plus 104 let's jump plus 300 okay let's let's do this i don't even know if it was good back here but let's let's go back to the
[04:37:16]  beginning we're gonna go back to the initial commit okay less than a year ago or no just over a year ago yeah it's been around for one year and probably at this
[04:37:28]  point no one knew what it was and then like it kind of blew up from there i i'm not going to say the history but my point is like there's going
[04:37:35]  to be a new random library written in the most popular thing that everyone likes and like like you you can't win on that when you don't have investment but on the other
[04:37:46]  hand it's it's it's i love this thread because it's so it's so circular because yeah because i'm like well look i'm not i'm like use felt
[04:37:57]  don't use solid but the blanket blanket is always a moving target even if one caught up for a moment you can't stay unless you have the same backing yes and back
[04:38:06]  in a huge amount of people choose react but it's self-propagating which is why the change has to start with people right and if if i think this keeps
[04:38:14]  on going for a bit if you don't move nothing changes the gap is getting so large that other players have not only found you know better ways they basically reach consensus and consolid
[04:38:23] ating a better solution blah blah but like uh where was it i i'm gonna have a hard time actually probably finding the exact set of replies here yeah it's too bad
[04:38:40]  i didn't bookmark deeper it's fine but like eventually it gets someone's like why don't you use nox i think it was benton and and he's like
[04:38:49]  it doesn't have out of order streaming and i have to admit i almost kind of like like you know when you're drinking the the meme when you're drinking the coffee
[04:38:59]  and you spit up out of order streaming was never important until rscs came out in x13 there were frameworks that did out of order streaming marco but even solid since
[04:39:10]  like 2020 for years and no one cared that's why it's talking about the moving target it doesn't pay to be ahead it doesn't you know like ahead of the
[04:39:19]  trends actually like it pays to be ahead enough that when people move to it you're already there with the right solutions and you understand exactly what the problem space is and you can
[04:39:29]  and you can like hit the ground running but it doesn't pay to actually be that far ahead and on the other hand you're always going to be behind right so it's
[04:39:40]  like the whole ecosystem thing is such a dumb dumb argument because it's self-propagating like you know what i mean like it's anyway right so like it
[04:40:03]  okay the whole design system is built on react yeah so you guys didn't grab third-party ecosystem library you have your own design system right i want to clarify this because
[04:40:15]  like a lot of the large companies i talked to to they don't go like necessarily you know like they build their own anyways like if you're invested on react yes god
[04:40:29]  keep on building and react i'm talking about this nude greenfield development what do you mean nothing can we be convinced nothing will change things are always changing i don't understand
[04:40:56]  that right right right i i understand that right that that is fine i'm just saying like then there's no point arguing it i mean the only reason you'd be arguing it
[04:41:14]  i feel like is if you want to justify it otherwise you just be like yeah no it is what it is people people actually want to argue this point and it's like
[04:41:22]  of course there's no point arguing it this is the default answer right i think it says more about the people arguing it back than like and like how they they feel about the
[04:41:34]  situation i mean it does suck right if you want to try these new shiny things and you don't get to it kind of sucks so you have to like you know yeah
[04:41:42]  i mean it's it's fine that you're you clearly on react i'm i i understand i'm not gonna you know tenors on react with nozzle like i'm never
[04:41:57]  gonna tell people that they should just like migrate off the thing like that you know do what makes sense it's just like here's an opportunity for change let's talk about
[04:42:07]  it that's not how this is the problem it's where the opportunity for change comes the python conflict or whatever because like people are like like the the self-propag
[04:42:25] ating because like we're like oh we should build in react we'll be easy to hire developers it actually has to start with the companies not with the develop like the like the
[04:42:33]  developers already there there's already passionate people building in svelte because they love svelte it actually has to be the companies to offer more svelte jobs like like
[04:42:44]  that's actually where it has to the shift has to happen so you're right polling the actual people who are just average developers is not helpful because they they they are just
[04:43:02]  putting on what they know but yeah i mean this is this whole conversation about moving targets is eventually it was because of this attitude like it's fine i i get it but
[04:43:23]  like what it led to was this this thing if you think saving a few tens of kilobytes in javascript's bundle size more than what dan described you're focusing
[04:43:35]  on the wrong things i don't think anyone is purely focusing on the js size right and i'm like why not both right like what why can't we you know do
[04:43:51]  things smaller and have these benefits and i'm like honestly there's way more to consider here than bundle size there are tons of features in our frameworks that aren't in react that
[04:44:03]  are impactful both to developers and end users maybe fine-grained reactivity would be cool but i really wonder how often it's needed outside performance extreme edge case like f
[04:44:11] intech dashboards so i mean nothing is needed this do you need to use rust do you need to use go i mean you could just build everything in java but
[04:44:32]  this started me on a kind of tirade where i said look okay here's the pitch there's an advantage to to your framework understanding how data flows to your application that that
[04:44:43] 's that that's it yeah remember when the default for a new web app was was very else yeah i do remember that this is the funniest thing because the people someone actually
[04:44:59]  told me that we needed to make solid react compat better like like the way that quick has solid uh react quickify or whatever and and their example was like jquery and
[04:45:11]  something i'm like did did did react be was it particularly backwards compatible with jquery like i i do think the opportunity is from the leaves like not like you don
[04:45:29] 't you don't you don't like replace the react app right away you have a solid sub app inside the react app i think there's value there i don't think making
[04:45:38]  solid apps or the react components it's just the react zone would slowly grow over time and then it'd be worth it we've actually seen this with pre-act pre
[04:45:46] -act is actually a a tale tale of like their compat actually hurt them in my opinion it helped them in one side but ultimately it hurt them so yeah yeah i mean
[04:46:08]  depends where you are in the world view view is view is is is an and view and angular are both reasonable sizes it took a long time yeah the bottom-up change
[04:46:31]  and the thing is any frameworks that like the sit on the easy side of things as i call it will have a better entry to junior developers which isn't it's funny solid
[04:46:40]  attracts not junior developers generally speaking so it's like but most people who get past that stage don't freaking care about the front-end framework until they get like really freaking frustrated
[04:47:00]  yeah he's he's actually not a bad guy honestly um and he gave me an opportunity to say what i wanted to say he sometimes walks into it so well that it
[04:47:14] 's like the perfect setup yeah yeah they don't care about that stuff they they literally care that reacts react adam is our foil anyways i'm not here to talk about adam
[04:47:49]  i i wanted to say that i i hope that people get the pitch a little bit here um like if you understand how data flows to your app you can start you know
[04:48:00]  like we everyone knows about update performance obviously it's fast it's always been the fact the like it's the fastest way to update the dom rendering is a different question there's
[04:48:10]  memory overhead but updating always been super fast when you deal with signals and data flow and also because it isolates components don't matter like the units that you can that you
[04:48:23]  um author your code in aren't the units of change which means that like essentially you can you know have things that sit together because they're in the ui but update completely
[04:48:37]  independently and this this these kind of things happen you know because a prop drilling and stuff like in the ideal world maybe all the data would be pulled out but we want to
[04:48:46]  co-locate because we have modules you have teams you have different sections you things that kind of sit together because of people reasons and because like they have to ui and
[04:48:57]  data not the same thing which is a problem with the more core screen models so like there there's there's that aspect then you can look at render performance you know a
[04:49:09] iden's in the chat i'm giving a shout out here um because what with these reactive systems you separate update from create because it's not just a re-render um so
[04:49:20]  it can be optimized and in fact in a sense that's what million js does for react it actually separates the update like from the crate which lets them considerably optimize the the
[04:49:31]  update performance um and actually create performance to be fair you can you can actually optimize both sides um mostly create actually uh because like when i say update i mean like the components still
[04:49:44]  rerun right so you still have like the react structural you know memo problem but like like so it doesn't it doesn't deal with like this what i was talking about the
[04:49:54]  cluster scale um in terms of like isolation but like this is one part of our model that something like million has already shown can be incredibly applicable and beneficial to to rendering right
[04:50:12]  hydration you know i worked at ebay um because they saw that fine-grained reactivity was how we were going to solve hydration right and quick came to the same
[04:50:23]  conclusion with resumability like ebay had islands like astro style for like a decade but they're like we can do better than this like when you understand the data flow
[04:50:34]  like parts the of your app can you know either lazily load like quick does but just wake up or do what they need to do as needed instead of just like rendering a
[04:50:46]  thing you know uh i mean i go a little deep here you know another thing you don't have the re-render model and the hook rules you know i actually don
[04:50:58] 't think use effect necessarily is a it's a bad thing it's it's kind of a necessary thing but i feel like use effect is when react developers realize that react doesn
[04:51:07] 't work like signals right and then like picture and you're not needing stuff like react memo or use memo use callback without actually adding um or sorry or third-party
[04:51:19]  state libraries without actually adding like a compiler like picture picture like a world where you don't have to add an abstraction to accomplish this kind of fundamental execution property because the abstract like
[04:51:37]  i guess you could say signals are an abstraction but like so are components like the you don't have to add like a compiler like some kind of more hidden abstraction in order
[04:51:47]  to to accomplish these things right tanner can release this one picture building third-party libraries without having to introduce your own state solutions picture dev tools where you can see the user
[04:51:58]  action calls what uis update solid dev tools are a little rough right now i believe like they're not like fully polished but they can accomplish this great demo from uh dam
[04:52:07] ien um showing like how you could he clicks a button and can actually show the state through the the you know run through his app picture where your ide can link to you all
[04:52:18]  the places like when you have a set state it can actually show you all the places that update because of it like these are all things that can be done when you could
[04:52:28]  understand the data flow of your application what do i just keep on going how long do i go for oh end to end dbs updating the right uis without re-render
[04:52:40]  you know yeah i i'm just whatever and then finally i just end with like literally every other framework kind of consolidating in this zone you know i i don't know
[04:52:55]  i i think there's a lot of benefit here see the problem is we spend so much time talking about now which makes sense because people are like okay like you'll have a
[04:53:07]  conversation that's like should i choose solid or react it's like we'll clearly choose react as the ecosystem the hiring the all the stuff right so you're like okay okay that
[04:53:16] 's fine and then you're like okay but actually um it doesn't accomplish some technical thing you want to accomplish performance whatever and when that conversation happens it's it suddenly it
[04:53:27] 's not about now it's about the future it's like oh but react will solve that um react 19 uh you know i react forget react or see like you know that's
[04:53:38]  what the conversation becomes so i was like why don't i just talk about the future of signals insta instead instead because you know it's all fine that we keep on
[04:53:51]  hearing about how one day their model will be good i the stuff that they're trying to tell us is good we've already got so i why don't i tell about the
[04:54:04]  stuff that will be good here in the future because you know that might actually be unique i don't know i'm i'm i'm rambling we're we're good
[04:54:15]  well this this this is kind of like where like my my head's been at here because it's like i don't i don't people are gonna keep on using react it
[04:54:29] 's just and it's good like there's nothing wrong with choosing react it's just it's so easy to dismiss um new things because they'll never have the backing like
[04:54:49]  of the of the bigger thing it's not even new things because we're not even talking new anymore we're talking about different things things that challenge the the norm but like because
[04:54:59]  you can always say because the the the the incumbent always has today so they can always just focus on the future and used like use today to disqualify um the immediate
[04:55:15]  concerns and then use the future to disqualify future concerns and i i don't think that's a fair position to take there's a reason that people are getting off that
[04:55:24]  train at a certain point yeah it's just a matter of time yeah i i to be clear i'm i'm not saying that um i'm not saying that there
[04:55:52] 's not trade-offs here you have to understand here i was just pointing out things that are different that could also be seen as beneficial because i always hear the you know like
[04:56:05]  it's always the you know i don't think the stuff in that list actually gets highlighted enough it's so funny earlier in the in this thread someone's like why don
[04:56:15] 't you just tell us you know what you know but sol instead of all this wishy-washy stuff that and i was like no i mean it's it's nuanced
[04:56:23]  and then i go and write that thread after all um because the thing you have to understand is everybody believes that their future vision is the right future vision react um has been
[04:56:39]  very prominent with their position to say like look we are taking things in the right direction we're we're heading the ship the right way and i i guess i don't feel
[04:56:50]  often that i have to disagree with them because for their vision they are but the thing that i think i i lack or missed on this side is most people think that there's
[04:56:58]  a single solution to these things they think that there should only be one and if you work on that assumption that it's zero sum then like then essentially if someone would accept
[04:57:10]  that reacts vision is one that has interesting potential then you're saying oh then you must not it's it's not zero sum there's literally just different ways to solve these problems
[04:57:22]  different approaches to take it is okay not to consolidate but that's not like that's not a that's not a message people want to hear they they want to hear here
[04:57:36]  is like the one way that's better and i'm not i'm generally not comfortable saying that not because i don't think it could be or is it's just because i
[04:57:51]  don't think that's accurate and i don't like being inaccurate the part is the tool that wins will be the one that has the most resource supporting not the quality engineers
[04:58:08]  such as a yeah i mean that's it's challenging what we've managed to accomplish with the team and the volunteers and the people we have is almost miraculous out of what people
[04:58:19]  now would call the at least on the hype cycle not on the usage side but like of the top five or so frameworks we are by far the least resourced like
[04:58:27]  officially resourced we do our best with you know our use of funds and stuff and you know what we can do but it's like it's it's just not even
[04:58:40]  close but when you consider the impact sol has had over the last couple years on others like it's it's it sometimes feels very disportional yeah that's fine you
[04:59:01]  know like it is just a paycheck i mean ultimately it's a job there's not not everyone's gonna be as passionate as the people watching this stream that's why you
[04:59:09] 're here there's there's more to life um but so yeah do you think vdom frameworks have any future at this point yeah i mean there's there's been three
[04:59:31]  basic approaches to rendering for the last decade they'll continue like they'll continue to do that like for example vdom is an easier model to represent something like server components with
[04:59:44]  it's not the only model too but it's an easier model so like there's places they can explore that are uniquely interesting signals can explore areas like presumability like good luck
[04:59:57]  with that without you know signals you know but like like there's different zones of of of that you can you know do like do these things so like i don't i
[05:00:11]  don't think it's as simple as saying like oh vdoms are bad that's an easy message but it's it's not that simple yeah it's just gonna
[05:00:35]  be choosing creating parents for us i mean maybe that's more important target to convince yeah i mean that maybe that was like the whole point of my my thread here right that
[05:00:47]  like where things are right now we i'm i've been pretty positive for the future because i think focus on primitives like i think ai will figure out that that's like
[05:00:57]  like if you don't have to show people the signals and if the best like just think about it the best that forget or compiler that can accomplish is going to be the equivalent
[05:01:08]  to what we do with signals that's the that's the best possible outcome the dx will be better so for me it's a syntax thing right but like mechanically the
[05:01:18]  best they're going to be able to accomplish is you know compiler analysis plus signals essentially so you could say like you could do a bit more compiler analysis than we do with raw
[05:01:29]  signals today like you can learn when to not use signals like some of the stuff that's felt five um is kind of theorizing but like generally speaking mechanically for any given
[05:01:37]  situation that's the best that they can reach so it's like at that point is syntax and does ai care about the syntax like what is i think a more declarative
[05:01:50]  i mean i don't know this but a more declarative approach to designing your data flows and stuff seems like something that would make sense to me because it does ai care about
[05:01:59]  the the fact that you can make a let variable and run a for loop and reassign it 10 times like the i'm using that silly example dan gave at the end
[05:02:07]  of the signals article or does it like or do you just set up these spreadsheet like statements and have everything update exactly as needed but i can maybe we'll just end up with
[05:02:19]  130 kilobyte to do apps for a bit until you know that gets sorted right anyway it's five i am done we are good the my only final leaving point uh
[05:02:36]  today was you know i know tanner wanted to talk more about rcs he wasn't able to come back to the stream but um he's he's he's really
[05:02:48]  trying here in the react ecosystem he wants to get his fine-grained updates and his current currency and transitions and again why not both kind of answer it's kind of too
[05:03:00]  bad because most of the responses to him were like here's reactive libraries you can use inside react but the problem is they like they don't work properly there's a reason
[05:03:10]  why i stopped doing this because i think concerns the concurrency working and it's it's hard for these libraries like tanner's built his own reactive library he understands that you
[05:03:22]  can't just go like put this thing in and just have it just like straight work i don't know voltio might try and like figure out how they can make that
[05:03:31]  work but it's it's actually very challenging problem and i guess maybe sometimes there is the right tool for the job i don't like to kind of go that way generally speaking
[05:03:42]  but this was a fun one please people don't do this i know tanner he was on the stream earlier i can say this please don't be that guy um but this
[05:03:54]  was fun for a week that was a little bit tiring so to speak anyway uh for me this was a funny note and probably a bit uplifting you know at at the
[05:04:06]  end because oh yeah i missed one more story i just i just gotta sorry i missed one last one and i realized actually it's actually one that i wanted to cover where
[05:04:17]  is it it was this one hence also tanner related tan stack query just crossed 500 000 downloads uh a week which is really cool because this is a solid js project so everyone
[05:04:32]  you know when you go and get v5 of react query dev tools you are installing a solid project to be fair if i look at all versions of react query dev tools
[05:04:42]  there is there's like i think 1.5 million so this is only like two thirds of people haven't upgraded yet oh yeah yeah you're right yeah um but the part
[05:04:55]  that struck me was i was like wait that's i'm like at first i'm like huh this must be where all solid downloads are coming from but then i realized that solid
[05:05:03]  gets half as many downloads and the reason is because they bundle it right they don't install you who use the dev tools don't install it so in a sense this is
[05:05:11]  a production app um of of solid so you don't actually install solid if you install the dev tools you installed like a bundled version so it doesn't count towards our downloads
[05:05:21]  but it's it's this one of those things where like pretend that the you actually did install solid like it would we'd have triple as many downloads as we have now
[05:05:32]  it's just it's just kind of insane that like and by the time everyone migrates you know like considerably more that a dev tool for one library for a react ecosystem has
[05:05:45]  that much over a very short amount of time of adoption here has that kind of impact um it's good it's good it's good to see this because it's like
[05:05:57]  it's it keeps the reality in check and i think that's actually really really important so you know i there's been a lot of react type stuff here a lot of it
[05:06:12]  back and forth but shy brings up a very good point and when i said we had him on the stream before analog 1.0 is out it's the angular meta framework
[05:06:21]  um so last but not least this has been you know a long journey especially when you consider where angular was when brandon started and all the work he's done and the angular
[05:06:31]  team as well during this time to get things where they are today um this this really does bring angular into like a modern feel like they've been revolutionizing renaissance across
[05:06:42]  the board anyways but the the the meta framework has become like the pinnacle like the next js you know of the framework in the current dialogue i don't know if
[05:06:52]  it should be so this is incredibly important to show angular sitting right next to the others so to speak and i i'm i'm it's awesome to see him make the journey
[05:07:02]  it's it's hard when you are you know i he's not quite a lone dev i think there's a few other people working analog with him but like you know
[05:07:10]  you know small amount of people he might be the only like actual like guy and a bunch of other contributors but like to see him get across the finish line i think should give
[05:07:20]  hope to all of us really awesome to see so the future is bright angular b17 i hear is a lot of good things about it especially the work towards signals and stuff
[05:07:39]  people really optimistic in that community so yeah i mean this is cool yeah yeah anyway i think i'm gonna leave it on that note thank you shy for the reminder of some good
[05:07:54]  and more positive thoughts out there let's get them out in the universe um and you all have a great weekend uh hope to see you all next week that was yeah