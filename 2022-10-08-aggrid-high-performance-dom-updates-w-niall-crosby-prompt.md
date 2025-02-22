---
showLink: "https://www.youtube.com/watch?v=QRtrS_SvR4w"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "AGGrid: High-Performance DOM Updates w/ Niall Crosby"
description: ""
publishDate: "2022-10-08"
coverImage: "https://i.ytimg.com/vi/QRtrS_SvR4w/sddefault.jpg?v=633de746"
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

[00:00:00]  - Hello everyone, welcome to my stream today. Let's give everyone a few seconds to join on. Can you, if you're here, come say hi. I'm
[00:00:10]  gonna dump some stuff into socials right now. Let's get that going. How's everyone doing today? I'm pretty excited for the stream, honestly. Every time,
[00:00:22]  like, it's sometimes hard to get a lot of libraries in the ecosystem, you know, and people keeps on pointing to solve. They're like, oh, it's
[00:00:28]  really awesome, but there's no ecosystem and all this. And I think the no ecosystem thing's a little bit unfair, but I admit, it's always hard when
[00:00:36]  there's a whole set of rich libraries already out there for a lot of different frameworks and technologies that have been around longer. But I am pretty stoked whenever someone comes to me
[00:00:48]  and is like, hey, we're working on integration, and actually it's almost done. So this is pretty good too, because AG Grid, which we'll be
[00:00:57]  looking at today, I think, is a really major player. We'll hear more about it. I have to admit, I've worked a lot in kind of custom shop
[00:01:08] , startup kind of situations. So I haven't, it didn't come across in my previous travels, so to speak, but every time I mention it, people are like
[00:01:15]  pretty hyped about this. So I think it's gonna be pretty great. Hey, hi, hello everyone. Getting past the pre-roll on Twitch, hopefully. I
[00:01:25]  gotta decide what I wanna do about that, and the affiliate stuff. Let me just see here what we got. How's everyone doing? Okay, I probably should have checked
[00:01:39]  that my screen sharing was working before I even started here, shouldn't I? Haha, just kidding. Um, let's go. Yeah, let's tell everyone in
[00:01:54]  Twitterverse that we're live. All right. There's also gonna be some hot ones for this week in JavaScript, I think. A lot, a lot of stuff
[00:02:07] 's been going on. I'm pretty excited about that. Second. Let's get, get Twitch stuff going out. Two. I don't know. How are people finding
[00:02:20]  Twitch versus, uh, versus YouTube? Is it, I've been, I've been trying to, I've been trying to decide how I want to handle, handle this
[00:02:28]  stuff. I've been sharing Twitch recently, but then all the stuff happened in Twitch, uh, the last week, you know, and everyone's making a big fuss
[00:02:36]  about the way they changed their rates and all this stuff. And it is funny, the same week I got an affiliate and then selling, I'm like, oh, I
[00:02:42]  have to think about ads. It's really cool on YouTube. I don't have to think about ads. I just like set them up. Everything just works. But I
[00:02:49]  think Twitch is one of the things maybe you got to work at to get, uh, to get, uh, like, benefit from. Like I've, we have like
[00:02:59]  five times as many people who watch the stream on YouTube than on Twitch. So yeah, but the chat on Twitch is pretty lively. Um, when, when it gets
[00:03:07]  going. So yeah, I don't know. I feel like every time I have to tell people, like I always post a YouTube video because they have the nice thumbnails,
[00:03:15]  but I always feel like I have to tell people like, Hey, um, you know, I'm streaming on Twitch. Otherwise they, they won't go to Twitch.
[00:03:25]  Maybe for anyone who does want to go and watch this on Twitch, just because I never, I never post it. I'm just going to drop this in here so
[00:03:33]  you can check it out. Twitch TV slash Ryan solid, follow the channel, subscribe, whatnot. Um, it always helps. Also if you're, if you're already
[00:03:43]  here, give, give that old thing, uh, a thumbs up helps with the algorithms and whatnot. I don't know. People, people tell me that you have to
[00:03:51]  tell the audience to do that. Otherwise they won't do it. So why does Theo have a next JS talk and you don't? Well, part of it is
[00:03:59]  I'm, I'm not really a react developer. Um, but, uh, I think it's awesome that Theo has a next JS talk. Um, uh, he
[00:04:09] 's been really, he's also a big advocate for next JS and, um, his take on, you know, how to use next, um, full stack is,
[00:04:19]  I believe what he's going to be talking about, which is pretty interesting. Cause I think he obviously has experience there. And also, um, he's, he
[00:04:26] 's taking the time to look into other solutions like Astro and remix and really appreciate next for what it is with. So I think that's really, um, gonna be
[00:04:33]  important part of that. Unfortunately, I won't even be at next conf. It looks like, um, I was, I got an invite to come see it in person
[00:04:41] , but I am going to be in Poland, uh, JS conf Poland, I believe that day. So yeah, a lot of, a lot of traveling, a lot
[00:04:48]  of events coming up. Um, so, um, exciting stuff, but yeah, I prefer you to have you to, I don't want to watch Twitch ads yet
[00:04:58] . There exactly. Um, only for partners, not for affiliates. I don't have any sort of, uh, any sort of limitation there. Yeah. Theo is
[00:05:13]  great. so is this person. So is this person. Let's check out new YouTube videos. Um, that's one thing. Uh, uh, Twitch added this
[00:05:28]  new shout out, um, capability that I think is pretty cool. I wonder if I like put it through streamer, or if it will come back out through Twitch.
[00:05:34]  I haven't actually tried it. Um, might have to go directly to Twitch chat, but you can shout out like other people and their channels. So. Yeah.
[00:05:43]  Steve's been doing a lot of interesting work. Steve, if you, for you who, uh, aren't familiar, he's a CEO, built builder IO, you
[00:05:49]  know, the guys who got mitosis and quick and whatnot. And he's been building, he's always built e-commerce with next.js. And he's also
[00:05:56]  built quick, um, to try and make faster e-commerce. So it's an interesting thing. Cause he's wrestling like the differences between things like server components and what
[00:06:03]  they do with quick. So, um, I think that'll be really interesting talk. Definitely. Funnily enough, while next conference going on, I'm in
[00:06:10]  Poland. I'm going to be there with Mishko Hevery. Um, and, and basically we're going to, we're going to be actually, there's
[00:06:18]  a few quick talks are going to be at the Poland conference. So it'd be interesting. All right. Okay. Have I, have I killed enough time now? Or
[00:06:24]  are you, are you, are you, are you, are you all here? Hey. Yeah. Yeah. Let's, let's get this thing actually started. Um
[00:06:33] , everyone got past the terrible, terrible Twitch pre-rolls. Yeah. Okay. So, um, maybe without further ado, I'm going to actually, um
[00:06:41] , actually, you know what I said that, but I'm getting ahead of myself. Um, I, I, I, I wasn't as prepared as I should have
[00:06:49]  been. I like adding banners so I can like make the editings easier. You know, when I do a five hour stream and then I'm like, Oh crap
[00:06:55] , where's all the time points. It helps a lot when I like actually bother putting the banners up. So let's do this properly. All right. Everyone
[00:07:04] 's ready. I think the pre-roll is 30 seconds. That's fair. It's not seven minutes. All right. All right. Okay. So without any further
[00:07:11]  ado, um, let's welcome Niall Crosby onto the show. Uh, who is the, um, I believe the founder of AG grid. Hi, Ni
[00:07:20] all. How are you doing? Ryan. Very well. Thank you, Ryan. How are you doing? I'm doing pretty good. Um, as you can see,
[00:07:26]  a little bit disoriented as I, sometimes I'm at the beginning of stream, but gives everyone a time to, uh, join on and say hi. That's
[00:07:33]  okay. I'll, I'll fit right into that. I'm a bit like, I was just going to go freaked. So it'll go fine. It'll go
[00:07:38]  fine. I'm breeding. Um, yeah, I'm the founder of AG grid. Uh, AG grid was my pet project that I started back at the start of 2015
[00:07:44] . And it was genuinely just a pet project and, um, I released it as open source for the benefit of the world and didn't expect other people to go,
[00:07:51]  Hey, that pet project, I actually would have a use for that in my work. And it just grew from there. So, um, yeah, I'm the guy
[00:07:58]  who created a pet project called AG grid. And from that then grew this, this massive project. And it's been a, an absolute mad journey for the last seven years
[00:08:06] . Well, I mean, at the beginning, I'm like getting like, what time period was this? Like, what, what was your motivation when you first created it
[00:08:14] ? Were there other competitors where you just like looking for a gap? Or as you said, it was just something for yourself kind of deal. Yeah. First frustration,
[00:08:20]  absolute frustration. I was, I was working at the time at a day job, like everybody else working for a bank in London, and I needed a data grid for a
[00:08:27]  financial application that I was building. And the data grids out there were just so hard. They didn't do what I wanted them to be able to do. Basically do
[00:08:33]  simple things like pin columns, sort rows, and then do with large amounts of data. And, um, I set myself a challenge over the Christmas at the start of 2015
[00:08:40] , in two weeks, got to come up with something that would be better than what was there. And, um, I thought I could. So I brought it into
[00:08:47]  work. I started using it in my project in work. So it was for, for just my own personal benefit, but, um, I released it as open source and
[00:08:55]  either way, and then the traction that got online was a surprise to me. And then was like, Oh my God, this problem I'm working on is a, you
[00:09:02]  know, a global problem. And then once I realized that, then I went, Oh, let's, let's work on this a bit more. and made it
[00:09:07]  my open source baby project. Nice. Nice. Yeah. I mean, grids and tables, I guess, are something that we almost all use, but I guess sometimes
[00:09:16]  there's challenges like into how to, how to approach it. Because I mean, there's a lot of interactive data, sometimes like being like lots of data, right
[00:09:25] ? Like being displayed, like what, what, what kind of just from like a high level engineer, what kind of problems or challenges face with these kinds of things? Yeah
[00:09:33] . I think the challenge is that so many features in the grid interact with each other, that it has an exponential amount of complexity as you add more features. So like,
[00:09:43]  if you're writing an app and you write a page, you can focus on that page and then write the next page and then focus, or that, that screen and focus
[00:09:48]  on that screen. And you can just continually adding screens and screens and screens. But when you're designing something like a framework, maybe it's the same with a bigger
[00:09:54]  part, with a grid, maybe the same with a framework. So you'd start off with one feature, then you add another feature and the complexity grows. Then you add
[00:10:00]  another feature, complexity grows even more. And what happened with pretty much all of the grids out there that I could see is they'd start off with a good intention and
[00:10:07]  they'd implement maybe four or five good features. And then as they began to grow, they, they, they didn't scale well feature wise. So yeah, for me
[00:10:16] , the most difficult bit is, is getting all those features working together in one grid without suffering quality was, uh, I had, I had headaches trying to work on
[00:10:25]  some of the features because they're honestly just like blowing my mind. Um, it was tricky stuff. Right, right. Yeah. No, that, that, yeah,
[00:10:33]  I, especially depending on, I guess, the types of workflows, I, I, I have to admit, my longest time working on a, as a developer was actually
[00:10:43]  doing like a social media startup. We had like, we saw all the admin pages. That seemed like the main places where we, we all grids and tables were
[00:10:50]  always kind of the consideration, but I can picture like for some sort of, some types of applications, this goes well beyond, uh, what, what I was doing.
[00:11:00]  You mentioned you were working for a bank at the time you were, you were building this. Yeah. Yeah. Yeah. That's right. Um, actually here's an
[00:11:07]  interesting one. So in the bank, um, they really wanted to stop people exporting from your app, export to Excel. So basically what I was kind of saw it
[00:11:15]  is if you had an export button on your app, your app has failed because your user has gone someplace else with the data, whether that's to do a pivot grid or
[00:11:21]  do some charting or do something. Um, so what we challenge ourselves is, can we stop people leaving your app and bringing the data someplace else? So we tried to
[00:11:30]  put into the grid, the type of features that somebody was going to Excel for, or going to be a business intelligence tool for. So what we've developed is kind
[00:11:37]  of a real kind of rich Excel style, reporting style, um, experience inside the grid, which then the users will get inside your app. Okay. Okay. So yeah
[00:11:47] , this is, yeah. And this has been my own, um, naivety about this. This is more than just like show some fast tables and maybe virtualized
[00:11:56]  scrolling and stuff and techniques. Like this is there, there's a lot you can do with AG grid. Um, yeah, yeah. Like what I like to say is
[00:12:03]  we put your app on steroids, um, minimum amount of code. So you just put a, like you could up write an app in 15 minutes, just get your
[00:12:11]  data from the server, stick it into AG grid. And so to show it to your manager, uh, and he'd be like, Oh my God, this is amazing
[00:12:16] . I can do pivot grids with this data now. So, you know, it's a, it's a real quick way to make your app. Super, super
[00:12:22] , super cool. Yeah. And I mean, when you started, uh, were you just out of curiosity, were you using a JavaScript framework at your work? Or were
[00:12:31]  you just, this is like all something just kind of pen grabbed? Um, at the time it was angular, uh, angular one, there was no angular two or
[00:12:39]  plus back, back then reacted just come on the scene, but I hadn't made a jump at that point. So the, the core of AG grid was, was always
[00:12:46]  pure JavaScript and, um, zero dependencies actually, uh, with just like direct down manipulation. And that was really, really good choice. It did it. Um, because
[00:12:55]  I was my pet project. I was curious and I just wanted to do something with no framework to see how it was done. But in hindsight and how that's helped
[00:13:01]  us going forward, it was like, it's really, really played well for us. And now what we have is a grid that works with multiple frameworks. And it's
[00:13:08]  something we can talk about later is, is how we do work with those frameworks. And with, with solid as well, of course. right now, I mean,
[00:13:14]  I'm super interested in all of that. Um, we, we spent a lot of time on this channel, obviously looking at, at frameworks and framework mechanics. So we
[00:13:21] 'll see how that kind of plays in a bit later. But yeah, uh, now, nowadays you said, AG grid integrates to the whole number of frameworks and use
[00:13:30] . It's to my understanding is probably one of the most, most used grid systems in, in like. I would say so. Um, like we've got a 2
[00:13:40] .6 million downloads a month, which is massive because it's such a, it is a bit of a niche. You do have to be writing enterprise applications and managing
[00:13:49]  data. So when you think about 2.6 million downloads is, is quite huge. And we have, um, two versions, right? We've got the free version
[00:13:56] , which is what I talk about there. That's the 2.6 million downloads of your community version. And then we have an enterprise version, which is more features and
[00:14:03]  we give support. But for that, with about 10,000 customers, but that's companies who've actually paid up to use our enterprise version. Most of the fortune 500
[00:14:11]  are customers at this stage. like when I say most 80, 90%, it's like, you know, it's that, that, that, that was a,
[00:14:18]  that kind of surprised me about three years ago. And now I'm just like, plaza about it. Yeah. Yeah. We've got most of the fortune 500,
[00:14:23]  whatever. It's just like daily stuff now. Yeah. That's crazy. That's, that's, that's incredible. Yeah. Cause like when you think about like
[00:14:31]  how many, um, sites or applications use this, like, that's the thing, like, like this is a universal need, right? Like, cause people use
[00:14:41]  different tools to obviously to build different things, but like every, everybody, as I mentioned, needs a table or grid somewhere. And maybe this is more, more catered
[00:14:49]  to like the big data, bigger data scenarios, like the enterprise. enterprise. But, um, it's really awesome that you also offer a free product and the,
[00:14:57]  and the enterprise product for those who need it with, with support. Yeah. This, this is, this is definitely really cool. I'm people, you guys can't
[00:15:04]  see it. I'm, I actually pulled up the website here just cause I was trying to kind of, while I was talking, trying to see what was going on,
[00:15:12]  just to take a look really high level, like, you know, what some grids look like. And, um, yeah, like, as you can see, get
[00:15:20]  started with your favorite frameworks, live streaming up. It looks like there's tons of really cool features. So you can do like live tables here. It looks like integrated chart
[00:15:29] ing. So live table with integrated charting. The charts are actually moving with the table. That's, that's pretty neat, isn't it? Yeah. And,
[00:15:41]  and it's that kind of stuff where we're like, you know, we're, we're in a kind of category of our own because you have lots of grids
[00:15:46]  out there and some of them do have live updates, but none of them have integrated charting. So it's, it's no longer who does it better. It
[00:15:52] 's just stuff that we're doing. The other grids just simply don't do. And one thing that's mad that I was pointed out to me about two years ago
[00:15:59] , that the people who are building applications at AG grid, because there's nobody else doing these types of things, they're actually creating applications that they wouldn't be able to
[00:16:07]  create if we didn't exist. And that's kind of mind boggling that we're, we're almost, we're not just, we're not just shaking
[00:16:15] . I beg your pardon, what's the word? When a, oh dear, I've gone blank for the word. When you, when a startup comes, they need
[00:16:21]  to shake up a space. Right. What's that called? Disruptor? Disruptor. Thank you very much. Yeah. So we're not just disrupting
[00:16:28]  the dev tool space. We're actually disrupting the business spaces as well, that the, the software that people are building are disrupting their areas because of AG grid.
[00:16:37]  And that, that's just brilliant. It's mad. It also means on the flip side, and this is, I mean, you know, a little bit too
[00:16:43] , too, how should I put it? Personal take is a solid. It means that there's a whole bunch of companies out there that rely on AG grid and what it
[00:16:52]  uniquely makes possible to deliver the services they want. And having a solid integration suddenly opens that door for us. This was suggested to me, but I think I'm starting to
[00:17:03]  see what you mean, or what those. Absolutely. Like there's a big banks in the world. I don't want to name our customers because that would be unfair
[00:17:09] . But like, if you Google top 10 banks in the world, they're mostly American, some European, they all use AG grid. And some of them have standardized on
[00:17:16]  AG grid, which means if you're writing an app in that bank, you must use AG grid. Now, if you want to write a solid app in that bank,
[00:17:22]  you can't because you need to use AG grid, but now you can, because you can, you know, you can just make some major components on their tech radar.
[00:17:32]  that they need to use AG grids one. And that this might be just enough now to enable them to use AG grid, and I beg your pardon, to use
[00:17:38]  solid inside their apps, inside those banks. Yeah. There's, there's a bunch of people just talking about how difficult data grids are in general. Like this,
[00:17:45]  this, they're like, I've worked a lot on making grids from scratch from first principles. A lot of these features are pretty hard to do reliably and performally
[00:17:51] . I wish I knew about AG grid when I was getting to enterprise. And a similar comment, data grids are deceptive. You start building, start building
[00:17:57]  and you don't know what you're doing. You crash and burn very fast. So yeah. Yeah. I've almost crashed and burned six times. It's, it
[00:18:05] 's tricky. It's like, like I've worked with the investment banks and done, you know, trading type software there, and nothing is as complex in my experience from
[00:18:15]  my, my career has been as difficult as, as writing AG grid. AG grid is the most difficult piece of software I've ever worked on. That's awesome.
[00:18:21]  A lot of love coming in from the chat. No, that's cool. All right. Sorry. Just give me, catch my breath to drink. This is, this
[00:18:30]  is very cool. Okay. And indeed, this is very cool as well. I'd say thanks Ryan for actually, it's, it's kind of refreshing to have a
[00:18:36]  library or background framework author willing to speak to people like myself. So, easily you're, you're very approachable. And I didn't get that without a framework people
[00:18:45] . So thank you very much. Thank you. You're too kind. I'm just, I've been really enjoying watching the ecosystem grow. And I've been trying
[00:18:53]  to understand how the spaces work. It's the only way to make informed decisions. So it's, it's very helpful here. I like taking on different subjects.
[00:19:05]  Once I'm less familiar with, just because like, um, like that's, that's how we learn. And honestly, like, it's funny. We, it
[00:19:12] 's hard to sometimes to put over, put aside time to learn new things. So like you often like, uh, you know, like I've got so much work to
[00:19:20]  do. I'm doing learning material for solid. I'm writing solid, maintaining, trying to help contributors find stuff. So part of the streams and stuff are about me
[00:19:30]  finding my time to actually learn new things. It's like, if I set this time aside, I get to learn about stuff and then other people learn with me and it
[00:19:38] 's just like really beneficial. So, um, I do try, it's funny. I have been called the professor that our streams are very advanced. Um, and I
[00:19:46] , I do come by naturally, but I, I do, I am trying to find a place where people can, you know, with all levels of, um,
[00:19:54]  knowledge or experience can kind of get some value, even if I do like, and if you, if anyone in chat ever has a question, like there's no bad question
[00:20:02] , just ask me, I will, I will answer people in chat will answer, and we'll try and fill in the gaps on knowledge. Sometimes I might direct you to
[00:20:08]  another one of my videos, but I, I just want to make it clear that like, um, we're all here to learn stuff. Um, here we go.
[00:20:16]  Super technical question. What does AG stand for? There's two answers to that. The first answer has already been given age, I beg your pardon, AG grids
[00:20:24]  did start in, in Angular and, um, AG did stand for Angular back then, but then about six months later I went, Oh my God, the world's so
[00:20:30]  much bigger than Angular. I want to support React and Vue and everything else. So, um, I was kind of thinking, what else can AG grid stand for?
[00:20:36]  What else can AG grid stand for? I had the domain name, but I couldn't change it. And then I had this Eureka moment in the shower, and
[00:20:42]  it's like agnostic. We support all the framework. So, um, AG now stands for agnostic because we support all the frameworks. You don't believe
[00:20:49]  in any framework in particular. So we support them all. Yeah. Yeah. I think fuzzy guest in the chat, just as you said it. Yeah. No.
[00:20:57]  Yeah. Agnostic. Nice. Nice. That's all. That's awesome. Um, all right. So we talked a bit about what AG grid is really high
[00:21:07]  level with the features. We talked about how it came to be. Um, we talked a bit about what kind of goes into building such a solution and why it's
[00:21:15]  important and why it's important to solid, um, and the ecosystem. Uh, can we, can we, can we show off a little bit more? Um, uh
[00:21:25] , yeah, now would you, would you, would you at this moment in time, uh, share some stuff with, with our group here? Okay. Let's see
[00:21:36]  if I can get you on stream. There we go. Here we go. Yeah. Let's just hope. Tell us a little bit more about AG grid right here
[00:21:43] . Okay. Well, what we'll do is, um, I'm going to just give it a quick demo. See how this works. Okay. Of AG grid.
[00:21:50]  Okay. Now I'm not going to try and sell AG grid. If you want to know more about it, just go onto the website. But I guess this is to
[00:21:55]  bring everybody up to speed who may not have seen AG grid before. Um, so here we've got 10,000 rows in this grid. You can see worked really,
[00:22:01]  really fast. We can do groupings as we're grouping. The grid is doing this aggregation to group level. So as I'm expanding the groups with the 10,
[00:22:08] 000 rows and 1,000 updates per second, very important. The grid is keeping all of the group levels up to date all inside the browser. Um, so that
[00:22:17] 's pretty mega to be able to kind of manage that type or that kind of size of data. Do you, um, do you do a lot of like virtualization,
[00:22:24]  like showing some stuff on screen and some stuff off screen? Is that the trick here? Just high level. Yeah. Yeah. Yeah. Yeah. You have to, you
[00:22:31]  have to all the data grids. Well, most of them have this. So basically the Dom is virtualized. So we only create the Dom for what you can see
[00:22:36]  on the screen. So as you scroll up and down, rows are being ripped out of the Dom and reinserted again. So we've only ever got 15 or
[00:22:43]  20 or so rows in the Dom at any given time. Nice. And then the same on the horizontal level as well, uh, the columns as the columns are, as
[00:22:51]  this grid is scrolling left to right, we're only rendering the columns, uh, that you can actually see. Uh, so what that means from a say capacity point of
[00:23:00]  view, you're only limited by heap space for your data inside the browser. Um, so the grid will work just as fast when you've got a thousand or 10,
[00:23:07] 000 or 100,000 rows, as long as your browser doesn't have a heap space for the data set. Right. Okay. Awesome. Okay. Um, so there
[00:23:16] 's lots of grids that will kind of do what I just showed you up there. They'll do, um, you know, large amounts of data. They'll do
[00:23:21]  grouping. We'll say we do it better. We do, but they'll say they do it better as well. They don't. But then you come up to
[00:23:27]  features like this next one here. Um, if I just play the next one. Okay. So here I'm going to do something pretty cool. I think. Nope.
[00:23:38]  It's the same video again. Okay. Next video. So I'm going to put the grid into pivot mode. Okay. Pivot mode there now. And I'm
[00:23:47]  going to go to the context menu, pick up a chart, and then pick up a chart type. Now look at that. And the chart is moving as the,
[00:23:55]  as the data is changing in the background. Sorry, I paused that. And as we interact with the data in the background, open and closing groups, you can see the
[00:24:03]  chart there is open and closing sections in the chart. Also, this is like the full Excel style charting, but it's still linked to your grid in the background.
[00:24:13]  And to get this into your app, all you need to do is set one property on the data grid. Like I could implement this. There's only about 50 or 40
[00:24:20]  lines of code in this example, here. And to get the charting experience working, you just want to do it on the grid, enable charts true. And then
[00:24:26]  you get this like charting experience. So we kind of joke at the customers and say, next time somebody wants you to put charts into your app, and tell them it
[00:24:32] 'll take six months. And then when they ask you to do it, just put in Ag Grid, enable charts and take six months off. Like it is pretty cool.
[00:24:39]  Now there is loads of stuff in the grid. And I don't want to demo at all, because that's not what we're here for. But this is one of
[00:24:44]  my favorite ones, because this is just, you know, if you're comparing Ag Grid and another grid, and it's like, you pull out, we pull out the
[00:24:50]  charting card, and it goes, okay, yeah, right. The grid can't do that. But there's a few cool things. Let's move off the
[00:24:59]  grid. I'll stop this video, get out of this PowerPoint, go back to another PowerPoint, which is this one here. A tiny bit about the company. We already
[00:25:08]  went through this, actually. We're based in London, by the way. We have about 30 staff at the moment, all working from our office in London Bridge. It
[00:25:14] 's pretty cool. And yeah, it's grown from just me as a pet project, to over the years hiring people. No VC, brilliant. We've got no
[00:25:22]  VC. This is all based on sales. So the sales that we make, that gives us money then to hire people, and make a company. It's been brilliant.
[00:25:31]  And I guess I should say as well, that there's two versions of Ag Grid. If you're wondering, hey, do you have to pay for it? Well,
[00:25:37]  kind of. There's a free version that's in the community, and the community version is downloaded 2.6 million times a month. That's massive. And then
[00:25:43]  there's the enterprise version, which means it pays some money, and you get more features, and you get support. But you don't have to do that. You only
[00:25:50]  do that if you want the extra features. The community version is still really, really good, and stands up strong against any of the other free ones. So basically what I
[00:25:58] 'm saying, is if you use the community version, you're not going to realize it's shit unless you upgrade. That's not the case. It's still a really
[00:26:04] , really good product in its own right. Nice. Okay. So this is what I was going to go through. I was going to build an application using AG Grid
[00:26:13]  and Solid, which will take about five or 10 minutes, give or take, depending on how many questions we get. And then we'll have a very interesting conversation, but
[00:26:20]  behind the scenes, which is how AG Grid supports these different frameworks. And then, this one is pretty exciting. We'll talk about speed difference. Because AG Grid will render
[00:26:33]  using the engine of choice. If you're in JavaScript, it'll just use our own rendering engine, which is JavaScript. But if you're in React, it'll
[00:26:39]  use React. And if you're in Solid, it'll use Solid for the rendering. So AG Grid is a pretty complicated thing to render. I know which one's faster
[00:26:47] , but you guys aren't going to know for another 20 minutes or so. Nice. So yeah, I'll get coding. Unless there was any questions, Ryan, at
[00:26:56]  this point? No, I think we're good. It's always good to ask the question though, because it always takes people a minute or so to answer it.
[00:27:03]  Just people commenting on London. I got a question. I can't place the accent. Okay. I'm from Ireland. So I guess this is an Irish accent, but
[00:27:16]  I spent a lot of time in England. So I know how to pronounce my THs correct. So I'm able to say 33 and a third properly, as opposed to
[00:27:24]  Irish people would normally say 33 and a third. So, yeah, I'm Irish. This is the quality of question you get on the stream. Yeah. As long
[00:27:34]  as nobody wants me to take my shirt off, I'm okay. Yeah. Yeah, let's get into the example. I think there was a question about the difference,
[00:27:45]  the product now and then, but I think we can talk about that when we get to the next thing, when we talk about the behind the scenes. Okay, right.
[00:27:51]  So here's some code I typed just before coming on, which is from the Solid.js website, which is to create a new blank solid application. I'll now
[00:27:59]  go into that folder and I'll bring in VS code and then in VS code or go to the package.json. Actually, I don't need to, if I
[00:28:14]  start this, I'll see the solid sample operating on the right-hand side, but I'm kind of guessing people can imagine what that would look like. Right. I
[00:28:21] 'm going to bring in AEG grid community and I'm going to bring in version 28.2.0, which was released just a few days ago, and I
[00:28:30] 'm going to bring in the solid rendering engine. So AEG grid solid. Now, if you want any of this code, it's pretty much the example that's given
[00:28:37]  on our website, I'm going to go through. So don't worry about the source code. So with those dependencies there, I'll do NPMI to pull
[00:28:45]  the dependencies down. I've practiced this. So if it sounds like I know it off by heart, I've practiced this a lot. Now I'll do NPM
[00:28:53]  run start, I believe. Yeah, it is okay. And then we get 3000. We'll put that out, bring it on the right-hand side, paste it
[00:29:01]  in, and voila. There is the sample solid. So let me bring this back. I'll bring this over to here. I'll close this down, bring out my
[00:29:15]  app.jsx, and then I'm here. Okay. How's the font size there? Is that good? I think it's okay. But anyone in chat
[00:29:23]  want to bump it one more or are we good? I think we're probably okay, unless I hear otherwise. Okay. All right. So I'm going to put AG
[00:29:31]  grid into this application. So let me take away this stuff here. Hit save. It should disappear on the right. Brilliant. Right. So the AG grid component is called
[00:29:40]  AG grid solid. And that comes from AG grid solid package. Brilliant. I can then put that into my application. So we'll just put in AG grid solid here and
[00:29:48]  hit save. Now this is AG grid on the right hand side, but it looks a bit shit because I haven't put any data or columns, rows or columns yet
[00:29:54] . So let's put in some row and column definitions. So we'll put in here row data equals, and I'll say row data and then column defs. I
[00:30:02] 'm using TypeScript here and we're fully TypeScript supporting. So we get all these nice helpers, or autocompletes I should say. So I'll
[00:30:09]  put in, so I'll call this column C-O-L-U-M-M-D-F-S. And then for the row data, I
[00:30:14] 'll stick it in here. Const row data equals, just put in an empty list. It's looking for a type. I'll say of any, and then const column
[00:30:23]  defs. And that's call def and I'll bring in from AG grid community. And that equals a list as well. Yep. Is there a question there?
[00:30:32]  Not yet. I'm just, I'm just watching very, with a lot of anticipation because I haven't actually seen this yet. And it's always interesting to, when
[00:30:42]  I see integrations with solid, because solid is a little bit different. I've had some people tell me that like when they went to go integrate solid, it was like
[00:30:50]  very different than the others that they they've done. And I was like, well, isn't, isn't Vue kind of similar? Like when people have had
[00:30:56]  that experience with maybe Vue 3. But my understanding is a lot of times with, with Vue or even Svelte, which are reactive, people tend to do
[00:31:06]  stuff in a, maybe a less optimal way because they can kind of get away with it. Like, you know, Vue, if you do stuff really terribly in V
[00:31:14] ue, you just end up with React. So like, I'm always like very curious about this. No pressure. Well, it just made me a bit anxious in
[00:31:24]  the way I wasn't expecting. It just hit me. Oh my God, I've got to create a solid looking at me and I'm not a solid developer. Honestly
[00:31:29] , I know the minimum amount of solid to do my job, which was to get AG Grid supported. So yeah, you're probably going to see a lot of newbie
[00:31:36]  mistakes because I'm a newbie. Okay. So we've got the row data and column depths and I hit save. That's right. So here, I still have
[00:31:43] , I can't really see the columns. And the reason is I haven't brought in the grid CSS. So it's going to take another four or five lines of code
[00:31:47]  to get something interesting over here. And then I'll go back through everything that I did. Okay. So let me import. Let me see AG grid community slash this
[00:31:56]  slash style slash AG grid dot CSS. And the grid is gone. That's absolutely fine. I expected that. Then here. So the grid here will always fill the space
[00:32:06]  that you give it. So if you want to size the grid, we actually sized the parent. So here I'm going to put in some style and I'll say
[00:32:13]  which and we'll put in say 800 PX. How does that look? It doesn't look like anything just yet. Let me bring in then a theme, which is
[00:32:26]  AG theme Alpine dot CSS. And I'll put that down here. Nice. So these styles, these are all things that ship with the grid as well. Um
[00:32:38] , yep. Nice. Um, width. Oh, height. I was meant to put in height, not width. There we go. Right. No rows to display,
[00:32:47]  but here's my columns. Look, there's athlete and there's sport. Oh, and they're already, they're already drag and droppable. This is just
[00:32:54]  like built in functionality. Uh huh. Yeah. Right. Let me put in three empty rows here. And there I've got three blank rows. Okay. And that
[00:33:02] 's beginning to come together. Right. So, um, this is my column definitions. Each grid needs column definitions. And I'm saying here, I've got two columns
[00:33:08] . One is going to look for the field athlete. And the other is going to look for the field sports. So let me put in athlete here, A-T-
[00:33:14] H-L-E-T-E. And I'll put in a Nile and then sports. I'm not good at any sports. I'm going to put
[00:33:21]  in foosball because I actually like playing foosball, but I'm not an outdoors type person. Okay. So Nile, foosball. There we
[00:33:27]  go. And I'll put that in here. Ryan, what sport do you like playing? I, I, yeah, I mean, do you already have, I used
[00:33:36]  to play football or socks. I was going to say soccer, but it's football, right? Well, foosball is like table football. Yeah. Soccer,
[00:33:43]  football, I'm not going to argue that. I'll put in something else here. Bill and Bill plays pool, say. Okay. Yeah. So here on the right
[00:33:50]  hand side now, we've got those three. So if you wanted to do like a simple app, you don't need to have all these advanced features. If you
[00:33:55]  just want a grid that looks nice and you can, you know, move the columns around or do sorting and filtering, then where you're kind of almost there with just this
[00:34:01]  much here. So with the themes, here's two CSS files. The first one is the structural CSS for the grid. That's mandatory. You always need that. So
[00:34:10]  if you use an AG grid, it's always stick that at the top and you're good to go. The second one is a theme. This is optional. So what
[00:34:16]  I could do is I could take this theme out. And we can see here that the grid still works, but you can apply your own styles if that's what you
[00:34:23]  want to do. I think the IDE is overlapping it here slightly. There we go. But the easiest thing to do is use one of our themes, or you can customize
[00:34:31]  our themes as well. If you think our themes are nice, but you want to put your colors on it, you can do that as well. Yeah. We got all
[00:34:36]  that CSS variable stuff. Nice. I'll just show you another one here. I'll find dark and I'll bring this down here. I'll find dark. So
[00:34:44]  there's a dark theme. That's pretty cool. Okay. Nice. Okay. So you're saying the, this basically these, the way this works is this is just
[00:34:51]  plain CSS with some CSS variables that are configurable that you can set. If you want to. Yes. Yeah. Okay. Nice. Or just use our theme and don
[00:35:00] 't do any of that. Yeah. It's up to you. I mean, that's what HGrid was built for developers. So it's all extensible.
[00:35:06]  It's all customizable. And if it's not, then one of our two and a half million users tells us, and we have to make it that way. So
[00:35:12] , you know, pretty much all the stuff that you'd want it to do, you can, you can do. Right. Right. The static data, which isn't
[00:35:18]  very interesting. Let's make it not static. So for the row data, I'm going to create a signal. So we'll do const row data and set row data
[00:35:27]  and equals create signals. Should pick that import up automatically. And the type we'll give it will be any and an array. And then we'll initialize it with
[00:35:39]  this array here. Nice. Okay. Take this away. Right. Then the row data here needs to be a function. Correct. Sorry. Of course, it's great
[00:35:50] . Now, I'll do something here. Just to do a set interval is the easiest way to demonstrate this. So I'll do something every 500 milliseconds. And what I
[00:35:59] 'll do is I'll set row data. And I'll put it to the row data that was there before. And I'll add in a new item. And I
[00:36:06] 'll say A-T-H-L-E-T-E. And I'll just put in math.random. It's just to show something. And
[00:36:11]  I'll put in sport. You know what? It's not that I can type fast. I can backspace my mistakes fast. I think that's what makes it
[00:36:19]  look fast. And then sport. And I'll put in math.random. Here we go. All right. Yay. Here we go. Proof of the pudding
[00:36:30] . Solid signals and the A2 grid working together. Very nice. Yeah. I always love people pulling the set intervals out for demos. I mean it's probably more
[00:36:37]  useful than a demo than an actual code. But it's always nice that you can just do this and not worry about your whole component blowing up. Exactly. Exactly. And
[00:36:46]  it demonstrates it nicely. It kind of does exactly what you want to do. And also it's easy. People don't understand exactly what that's doing. But let's
[00:36:52]  take that away. And we'll do something else. And I'm just going to copy some code from someplace else to load data from the server. I think it's here
[00:37:00] . Where's Edge? Someone is asking if it was automatically virtualizing already. Like are these kind of things already always happening in the background for you? You don't
[00:37:09]  have to worry about it? Yes. Yes. All right. It's already there. Okay. I'm going to do this fetching. I actually don't know what
[00:37:15]  this code really does. I'm just copy and pasting it. But Ryan, you can explain it if you want to fetch data. It's doing an async weight
[00:37:21] . And then you've got this thing called a resource. Yeah. Right. Yeah. I'm going to guess what it does based on its names. But honestly, somebody
[00:37:27]  just gave me this code and I'm just using it. Yeah. Right. I'll take that away. Put this here. Get this import working. Okay. It
[00:37:35]  turns a promise into a signal essentially is the simplest explanation for people who haven't seen it. But yeah, no, this is pretty cool. Okay. Right. So I
[00:37:44] 've pulled this data, this JSON file. So now I've got loads of data, about 8,000 rows here. Okay. And if this wasn't virtualizing,
[00:37:54]  that wouldn't work. You wouldn't be able to scroll down to 8,000 rows in the DOM. If you put 8,000 rows into the DOM without virtualization
[00:37:59] , your browser just would crash. And the end of. Okay. So, oh yeah. There's loads more columns with that data as well. So let me go
[00:38:08]  back to this example I stole stuff from, which was here. And I'll pull out all of these columns. I'll come back here. Pull these columns in. Take
[00:38:16]  out the cell render. I don't need that just yet. And where's that tingy on my keyboard? Oops. There we go. And hit save. Okay
[00:38:25] . So we've got lots of data. That's pretty cool. So you can kind of see, this is like a functioning app where you can do stuff pretty easily.
[00:38:34]  Let me add some more stuff in. So I want to make a column sortable. So for athlete, I'll say sort T-A-B-L-
[00:38:40] E, true. So I can now sort by athlete. Okay. It's kind of cool. And the sorting there is very kind of chunky. I'd like to put
[00:38:49]  an animation in. So on the row, I'll make a part on the grid. I'm going to say animate, A-N-I-M, animate rows
[00:38:55]  equals true. And yeah. Nice scrolling. Or nice animations as the rows go into place. Nice. That's all it takes, eh? That's all it takes
[00:39:06] . Now, what I could do is do this, control, copy, then paste, whoops, paste, paste. But, you know, that's bad. You
[00:39:14]  don't want to repeat things when you're in code. So we'll put in a default column. So we'll call this default call def. And it's a call
[00:39:21]  def again. We'll put that here. We'll put the sortable down here. Oops. Sorry. I accidentally cleared my clipboard. Sortable. S-
[00:39:33] O-R-T-A-B-L-E. True. And then here, I'll put in then the default call def equals default call def. And
[00:39:43]  now everything is sortable. Yeah. Let's go full screen there for a second. I can sort in multiple columns. That one, then this one, then this one
[00:39:53] , then that one. You know, it's pretty cool. It's AG grid takes care of a lot of the heavy lifting. The stuff I was talking about earlier
[00:40:00]  when I was like, when I was like, you know, talking about the finer details of solid. And you're just like, no, I'm realizing that I'm
[00:40:07]  on the screen with the creator. You don't actually have to worry about that too much. I'm seeing because like you handle the virtualization internally and all the DOM
[00:40:16]  rendering internally. So all the diffing, all the like mechanical pieces for updates, I guess, are all happening internally here. like this, this isn't, so
[00:40:26]  it's basically using solids reactivity to drive it, which is nice because your solids reactivity is fast, but it's, it's, it's actually not actually,
[00:40:35]  it's not the rendering. Like you've, you've already kind of got that handled in a optimal way, which we'll probably look at in a bit if I
[00:40:41]  understand exactly. Yeah. Yeah. Yeah. There's, there's a lot of stuff like the rendering is maybe 3% of our code base. Right. And there's
[00:40:51]  a, yeah, I, I agree with you, but I can't discuss them more unless you look at the stuff first as, as suggested. How are the animations so
[00:40:59]  smooth? That's, that's the question coming in from chat. I'll answer that one because it's a cute answer. So basically if I go and insert the
[00:41:06]  DOM here and inspect, okay, this is a bit small. If I go to the rows, you can see here the style transform translate. Can you see that guys?
[00:41:18]  Yeah. Transform translates. We're using transform and translate. So what we could have done is set a top position for each row because this is virtualized. We can't
[00:41:25]  just use the normal DOM layout to put the rows in because the rows, most of them don't exist. So they would just collapse. So we have to explicitly place
[00:41:33]  them inside the, the, the, the, the, the div that they're being put into. So what we do is we use a transform rather than setting a top
[00:41:40]  position. And the reason for that is, do you know, Ryan, why do we use translate instead of top just randomly? What does translate Y give you the top doesn
[00:41:49] 't give you? Oh, that's a good question. I, I, I, I usually use translate Zed so I can kick into the video card, but.
[00:41:56]  No, that, that, that's, that's right. It's the video card. Maybe Zed is a 3d thing and maybe translate Y. Oh,
[00:42:01]  it's because it, because it basically, if you do translate Zed zero, like you don't actually, like you don't move anything. Um, but yeah,
[00:42:09]  yeah. Okay. But yeah, this is something we used to do, uh, on our grids for media grids at our old company when we did infinite scroll.
[00:42:17]  So I guess it's, it's the same, same kind of techniques here. I didn't even think about that. Yeah. Yeah. Yeah. No, it sounds
[00:42:21]  like it. So if I had, we've used top here, then it would have been just a CSS and the CPU would have had to have done it. But
[00:42:25]  because we're using the transform function, then you can use the hardware of the graphics card. And that's what gives us those smooth movements of rows. So, uh,
[00:42:33]  yeah, interesting. Um, right. Uh, so default call that. What else can we do? Let's put a filter on. Filter true. Now I can
[00:42:41]  go to athlete and I can start filtering. Say anybody called Sean there? Yeah, there is. Anybody called Niall? Nope. Right about Ryan. Yeah. There's
[00:42:50]  a few Ryan's. Okay. Um, you can filter in all the different columns. Uh, this one here, age, this, these are numbers. This is a
[00:42:57]  string filter. So starts with ends with that. That's kind of stringy type stuff. So what I'm going to say is everything has default filter. So everything here
[00:43:05]  will be set to true except age. I'm going to override what's in the default filter. So here I'll put an Adrian AG number. I think I'm
[00:43:12]  going off memory here. Number column filter. I think is what I need to type in here. Um, so oops, refresh age equals. Ah, brilliant. So we
[00:43:22]  got less than or less than or equals. So we can say less than 18 and we get all the people who are, well, 17 or less. Sorry. Just one
[00:43:33]  second. I'm still catching up with people in the chat for two seconds. Apparently most people on my stream, uh, or not most, but a number of people
[00:43:41]  on my stream did not realize that of the GPU trick. So I just want to highlight that for just, just a second. I've, I came across that when I
[00:43:48]  was working on social media stuff, but, um, there, there, there is a number of people who are just like, just here's compliment. This guy is a
[00:43:56]  genius. Um, apparently. They're talking about you, not me. No, I think they're talking about you. Okay. All right. There's, um
[00:44:04] , a blog I wrote. Just, I just Googled it. Google me, Noel Crosby. Uh, sorry. I Googled this translate versus height. It
[00:44:10]  should have been actually translate versus top, but I found it anyway. Um, and there, there's a nice blog post here and I've got some examples written. Yeah
[00:44:19] . Not loading now, but I know the last time you can, you can see the examples. You're comparing the two mechanisms and the, the, the only thing
[00:44:25]  you've got to be aware of with this trick is that, um, it's pop because you're offload to the video card. Um, like there's certain edge
[00:44:33]  cases you might hit with Z index, like essentially at that point that you offload to the video guard from that point, you've set the context and it treats it like
[00:44:42]  its own, uh, it's, it's, it's own context from like, uh, from a, like a Z index standpoint. So if you have some
[00:44:50]  descendants or like siblings, they might, you might have to play a little bit because the, the Z index is actually like basically set at where the parent was at the point
[00:45:00]  that you opted into the 3d card handling the render. It basically just like takes that part of the dom and goes, yeah, 3d cards handling it, um,
[00:45:08]  specifically. So, uh, sorry. No, no, that's fine. That's, that's cool. Cause what it does in a 2d sense. Um,
[00:45:14]  I think I'm going to say the same thing, but I'm just gonna use different words because my, my journey's been slightly different. Um, but when you
[00:45:20] , every time you use translate, then it creates a layer. So if you think of a game with lots of different layers and the layers are all moving over each other and
[00:45:26]  to kind of move through these translations and the layers, the graphics card can do in hardware because it's created a layer, but there is a finite number of layers a graphics
[00:45:34]  card has. So if you go crazy and start doing translates on like lots and lots of developments, you'll run out of layers and there's no way to prioritize which ones
[00:45:42]  are the important ones. So just use it with care. And if it stops working, you need about a hundred things being translated. Then you might've just run out
[00:45:50]  of layers. Okay. Let's get back talking about grids. So we've got the filters. We've got the sorts. All right. There's just loads of
[00:45:57]  stuff we can do. And I can't go through it all one by one because we just take too long. If you want to know more, go to the grid,
[00:46:02]  go to the website. So if I go to here, I'll do aggrid.com and documentation. You can pick the different framework here. Solid isn't here
[00:46:13] , but it is kind of there. It's just hidden away in here. And this is where the solid information is. But you don't need to look at the solid
[00:46:19]  examples. You can stick in React or anything else. The grid is the same for all the different frameworks. It's just, it's coded a slightly differently. But if
[00:46:25]  I go to the interface and go to grid options, all the different things you can set in the grid are set here. Why is this slow? Oh, there we
[00:46:33]  go. Okay. So there's loads and loads and loads of properties you can set. And then in the columns, likewise, there's loads of properties you can set in
[00:46:40]  the columns there. And our documentation is pretty cool. Because I'm a developer, I don't see our product as in the aggrid code. I don't see that
[00:46:51]  as the product we give to people. What we see as our product is the codes, the documentation, the examples, the marketing, like absolutely everything. So we take
[00:46:59]  as much pride in our documentation as we do in the product itself. So whatever example you want, you should see it here. Nice. Okay. Going back to here.
[00:47:09]  Why did I mention that? Oh, yeah. So there's loads of things you can do here, but I'm not going to go through it all. But what I
[00:47:13]  will do is, oh, I'll show you how to bring in aggrid enterprise. And I'll do one or two enterprise features. And then I'll start the coding
[00:47:19]  demo. Okay. Yeah, sure. There was one quick question. Yep. Responsive design, mobile. I'm assuming this is all built in on the styling,
[00:47:27]  but any specifics here? Well, you would have to do that yourself. If you want your application to be responsive, then we do allow you to change the columns and
[00:47:36]  to configure what's done inside these cells here. And if you want that to change based on, say, the resolution of the screen, you'll need to do that in
[00:47:44]  your code. And then we have the API to allow you to change what's in the grid. Right. Because the grid fills whatever space you'll give it. I
[00:47:52]  noticed that you went to the styling on the outside of the grid, essentially. Yeah. Yeah, exactly what you said. Yes. You know what? I forgot one of
[00:48:00]  the most important parts. I shouldn't have gone to enterprise so quickly. I forgot to customize the internals of the grid. So all the parts of the grid, you
[00:48:06]  can put in components and now you can put in solid components. So let me do a comp here. So we call this a const my cell comp. Because I'm
[00:48:16]  going to put this into a cell equals. And I'll put in a functional comp. And I'll just return back some like hello world type stuff here. So you know
[00:48:27]  what? Let me just do put in hello world like I just said. So I want this cell comp to be used inside the athlete column instead of this default, just putting
[00:48:35]  the text in. Okay. So an athlete, I'll then go here and I'll put in, we call it a cell renderer. So the cell renderer
[00:48:41]  and I'm going to use my cell comp. Hit save and there we go. Hello world. All right. Nice. Now, that is nice. But you know,
[00:48:50]  it's static. So it's not very informative. What I left out here is the props and cell renderer. So again, TypeScript, you don't have to
[00:49:01]  use TypeScript, but I love it. And we love it here at AG grid. I saw renderer is the type of the props that comes in to this component
[00:49:08] . And one of the things that it has is the value that should be displayed. P-R-O-P-S dot refresh. I saw renderer. That
[00:49:16] 's I don't know why value isn't being shown there. But it works. That is odd. Let's ignore the fact that it didn't compile. I didn
[00:49:29] 't do that earlier today. But yeah, it works. Let's take away hello world. And this is a full solid component. You're not restricted. You can put
[00:49:39]  whatever DOM or functionality you want in here. I like putting pictures in that move at demos because they look kind of cool. So I'll put in image source equals.
[00:49:48]  And I'm going to reuse this logo up here because it's there. And I'll hit save. It's going to be too big. Dear, why are things not
[00:49:58]  working very well for me? Ah, I have to do this. It should be curly brace, not quote. And that's a bit big. So we'll then
[00:50:10]  do some style. And we'll say width. W-I-D-T-H. And we'll do a 25 PX. W-I-D-
[00:50:18] T. Ah, two braces. Yeah. G-S-X. Yep. If you can say it to me before I figure it out myself, Ryan, that'd
[00:50:27]  be helpful. Okay. So there we go. Style width 25, blah, blah, blah. So there it is coming up. So you can put a button would
[00:50:36]  be a big burden. A button would make more sense. Control Z. So just, you know, button high, whatever. And then there you got your button. And
[00:50:45]  you just add your functionality the way you would normally do. A button inside solid. Very nice. Yes. So let's scroll down and see the whole thing. Where was
[00:50:53]  the my style getting inserted again? Oh, big a burden here. Right, right. Okay. So it's part of the configuration that gets sent to the grid.
[00:51:02]  Okay, gotcha. Yeah. This is like for one column. I can stick it onto other columns. Or, you know, I could stick it onto all the columns
[00:51:08] . So here it's now on all the columns. Right. Depending on your use case, you might want to do that. You might want. But you can customize loads
[00:51:15]  of places in the grid. So let me put in something else. I'll do my cell comp. And I'll just call this my comp. Props. I
[00:51:26] 'll just ignore the props. The props that you get are different depending on what you're trying to customize. Whether it's a header or a sidebar thing or something like
[00:51:33]  that. So I'll just take that out. And then let me put it in for... Actually, I'll put it into all the columns. And then the header
[00:51:44]  component. I'll say to use my comp. Hit save. Now it's in for the headers. Okay. Maybe for the filters. Here. My comp. Hit
[00:51:55]  save. Now if I go and bring a filter up. I can't open the filter because they're using my header components. So the menu bar is gone. Okay.
[00:52:03]  So bring it back to the menu bars here. You could create your own header and put your own menu in. But that would take too much time for this demo. And
[00:52:12]  there. So the filters now popped up. Now this doesn't filter because there's no logic behind it. But if you go to the docs, you'll see how you
[00:52:18]  can build a filter. And this is proving that you can now use solid for the components. That'll go in there to do the filtering for you. And build your
[00:52:25]  own complex filters using solid. That's incredible. Like we already saw how like everything was just working on the box. When you literally just dump the data in. But the
[00:52:34]  customization is... It looks very... Seems... I'm sure there's a lot of different touch points. Because there's so many different points of customization. But it looks very
[00:52:44]  straightforward. It's just like, give me a component. Now, I'm responsible for handling this small piece. Yeah. I'd agree. I'd agree. And
[00:52:52]  then if you want to see all the different things that you can do component-wise here in the docs. If we go to components. Then, you know. Editors
[00:52:58] . Renderers. Datings. Filters. Floating filters. Yeah. I'm tempted to tell you what all those things are. But we don't have
[00:53:06]  the time to come into them all. But there was one. Hey, editing. I didn't turn editing on. Let me put all the columns as editable.
[00:53:12]  E-D-I-T-A-B-L-E. True. And then refresh. Oops. Wrong screen. Refresh here. And then, you
[00:53:18]  know. This is editable. 555. Then you can use the keyboard and just type stuff in. All of a sudden, it's like an Excel editor type experience
[00:53:26] . Oh, okay. Just... You got my... Interesting here. Because we have to put it. We loaded our data into a signal. So it's the source.
[00:53:34]  Where... The edited data, where does it go? Like, how does that work? Like, just curiosity. Out of curiosity, they got... Yeah. There's
[00:53:43]  two answers to that. I'll give you the correct answer. And then I'll give you the reactive type answer. So the grid has a copy of the data right now
[00:53:51] . Okay? Yeah. So when you're editing, it's not in the signal. So the signal has passed on this array to the grid. Yeah. Then the grid
[00:54:01]  is updating its version of the data. Now, it's passed by reference. So it'll update your values, actually. But if you want to be in control of
[00:54:13]  your own data, like if you're using a Redux-style pattern, then we have the mechanism to have... We call them... It's the shit name. But
[00:54:22]  we call them read-only edits. And when read-only edit is enabled, then rather than the edit actually happening in the data, the grid will fire an event and
[00:54:31]  say, "Oh, the user has asked you to put this value into this cell." And then it'll wait for you to update your source and let you refresh the
[00:54:38]  data and bring it in. So it does exactly what you'd expect it to do in a kind of a reactive way. But that's not the default behavior. Yeah.
[00:54:49]  I guess the thing is you're so used to the grid, literally owning that whole world. Like that's the thing. When you get to the grid, you're just
[00:54:55]  like, this is the all-encompassing solution. So it doesn't come up as much. It's like... Because immediately where my head goes to is like
[00:55:02] , "Okay, how do we fine-grained propagate this change from this one cell to this one thing?" That's just where I'm always thinking. But the truth
[00:55:09]  of the matter is you have a solution here that basically just encompasses this whole grid, whole table, charts, everything. Leaving this system, you don't actually have to do
[00:55:18]  maybe as often as one might think. Yeah. You see, if you did go... And I'm actually really happy you said it that way, because you understood it
[00:55:25]  without even having to try to explain it. The grid owns data. If you wanted to have externally managed state from the grid, so the app manages the state rather than the
[00:55:34]  grid, then your app will have to implement sorting, filtering, grouping, pivoting, like all those things that we do, we wouldn't be able to do because you
[00:55:41] 're no longer having those managed state. So we've made that choice up at the start. We're going to manage the state and therefore all this good stuff just comes out
[00:55:48]  of the box. Yeah. Someone was asking, so you have both control and uncontrolled modes. Essentially, that's one way I'd take it. Someone else was
[00:55:55]  mentioning using create mutable. That might be fun, but I don't... We do have one version of our proxies, which if you mutate them in place
[00:56:04] , they will be independently reactive, triggerable. I call this our Trojan horse, because in third-party systems, it lets us listen to any little change anyone does
[00:56:13] . But obviously, this can also get really critically out of hand. I think I actually like the very specific event-based approach, rather than sneaking in and intercepting
[00:56:24] . But that is interesting with Solid. We probably have a couple of different ways to attack this. Okay, cool, cool. All right. So I'll leave customizing
[00:56:33]  the grid and I'm going to go into Enterprise, I think. I'll say one thing, and this may or may not make sense to people, but I customized
[00:56:44]  the cell here, and we have a Solid component in there. What you can't tell from seeing this on the screen is the whole grid is rendered in Solid. So it
[00:56:54] 's not just you're taking your Solid component, we render our bits in Solid as well. So in React, there's this thing called a component hierarchy viewer, it
[00:57:01] 's in the DevTools. And I don't think Solid has an equivalent because components don't exist in Solid, basically. Yeah, we actually are working on a Dev
[00:57:10] Tools to do that, but you're right, we have to fake it. We have to, in Dev, look at wherever components are created, and make an extra
[00:57:19]  layer just so that we can show that there's a component there. But yes, work in progress, one day. Yeah, okay. Well, it would be nice
[00:57:25]  because if you did have that, then we could show you that the cell lives inside a row, which is also Solid, which lives inside a row container, which is Solid
[00:57:32] , which lives inside a grid body, which lives inside a grid, which lives inside your application. So basically, your application has siblings all the way down to the cell,
[00:57:40]  every bit in between, which is our code is written in Solid as well. That would be nice for us to show off. Okay, I'll go and bring in Enterprise
[00:57:49] . And yes, this is paid for stuff, but I'm going to spend just two minutes on it, I'll show you what I can do, and then I
[00:57:54] 'm going to stop doing this demo. So this is not a hard sell. I apologize if this looks like a hard sell. That's not what this is meant to be
[00:58:00] . Let me go to package.json. I'll bring in, oh, shite. Sorry, I'm cursing a lot as well. Apologies, guys
[00:58:09] . Everybody curses in Ireland. AG Grid Enterprise 2820. Let me bring up this. Control C to stop it. NPM I to install. Let me start
[00:58:20]  it up again. Okay, right. Here's my code. Now, on the right-hand side here, let me just get rid of this. If I right-
[00:58:29] click, the browser menu comes up. Okay, that's the default behavior for our community version. I'm going to put one line of code in to make it do enterprise
[00:58:38] -y stuff. Import, import AG Grid Enterprise. That's it. Now, on the right-hand side, if I click, it's our enterprise context menu
[00:58:48] . You can do cool stuff like Excel export. Let me click on that just for kicks. Right. There we go. Data is exported. Basically, if you have community
[00:58:56]  and you want to try enterprise, you just import it and you can try it out and maybe enable a few things. It's the same product. It's just with enterprise
[00:59:04] , more features become available. But everything I said prior to this applies to enterprise. That Excel download, was that something you guys do in the browser or do you have
[00:59:13]  a back-end service for that? This is all front-end. Okay, gotcha. Okay, yeah. The grid is a standalone component. We don't touch
[00:59:20]  any external stuff. Okay, gotcha. Yeah, I've done CSV export before. I just wasn't sure. It's just a slightly different format. So yeah,
[00:59:26]  that makes sense. Okay, right. Let me just put in some features. So I will, what will I do? I'll do range selection first. So range
[00:59:34] , R-I-N-G-E, range. It's sorry. It's a grid property, not a column property. That's why it's not coming
[00:59:42]  up. So down here, range selection, enable range selection. I like this about solid. Well, I like a lot of stuff about solid. But if I do true
[00:59:51]  here and there's my ranges, I can also just leave it at. I was like, oh, does that work? After I've done the implementation, I wondered,
[00:59:59]  does that work with solid? Well, I guess that's at the JSX level, so of course it would work. Okay. I will also then do, let
[01:00:07]  me do a row group panel. So row group panel show equals always. Okay. Here, drag here to set row groups. See it up here. So it's
[01:00:21]  letting me to drag groups up here, but actually won't work because I need to do something else, which is just to say which columns I'm allowed to group by.
[01:00:28]  And I'll just tell the grid, all the columns can be grouped by. So enable row group true. So default row group, I'm saying all the columns can be
[01:00:36]  groupable. So then if I drag athlete up to here, it's now grouped by athlete. Let me make that a bit bigger. You know what? I want
[01:00:44]  to have the columns resizable as well. So I'm going to make the columns resizable. True. Sorry. Let me bring this full screen. What's happening here
[01:00:57] ? Let me bring country up here and then bring sports. Where's sports gone? Sport not here. Oh, I didn't refresh properly. Sorry, because of the
[01:01:11]  last run. Now it's refreshed properly. So United States, gymnastics. Let me bring this out in here. Swimming. So again, the coolness is this.
[01:01:22]  It looks like a pretty funky feature of the grid here. And so little, you just configured the grid. There's no coding to be done on the user's level.
[01:01:30]  This cell render is just making things a bit difficult to follow. So let me take the cell renderer out. Fair enough. Okay. Right. I'm going to
[01:01:39]  do. Let me see. Okay. So when I group my country, you can see here. These cells here are empty. Because I'm not aggregating up these values
[01:01:49]  here. It would be nice if we grouped those values. So let me do that. So for gold, I'm going to do ag func. I'll do sum
[01:01:57] . Most of the time, you just want to sum them. We've got ag funcs that come out of the box. But like everything else, they're great.
[01:02:03]  You can write your own ag funcs. So right here, if I refresh, bring country up. Hey, now we've got all these values for country. And
[01:02:10]  I'll do one more trick. And then I'm going to shut up. Because I'm talking about my favorite subject. I can go on for hours. No, this
[01:02:19]  is really cool. It's stuff like this, like the custom aggregator functions and stuff. These are functionalities like I've done a little bit of table work.
[01:02:27]  And you're kind of like, sometimes with really basic grids, you're kind of priced into like, okay, now I need a custom column type or I need a
[01:02:35]  custom column header or something. And you end up like building these custom things. And in this case, like this kind of functionality, where it's like, oh,
[01:02:44]  yeah, we're doing groups. We know that there's going to be, you know, this aggregation, just toss in a config. It's a sum. Okay
[01:02:51] , done. Yeah. You know, like, that's so powerful. Yeah. And this stuff, like I said, I was working on finance when I came up
[01:02:57]  with the concept of AG Grid. So this is like bread and butter stuff for us. I had to do the, you know, reporting type stuff. While we were talking
[01:03:04] , I said enable charts equal to true. So this is the bit where you tell your boss is going to take six months, do this, and then take a holiday.
[01:03:10]  And he'll still be impressed after six months when you show him this. So I'll group by country. I'll bring, say, some, oops, I'm just
[01:03:18]  bringing the numbers over at the site country. I'm going to order by gold. I'll now take up the top. One, two, three, four, five
[01:03:26] , six, seven, eight, nine, 10. Right. So I've got 10 countries there. I've got two rows of data. I'm going to right click
[01:03:33]  chart. These are all the different chart types that I can pick from. I'll just go to column and then grouped. And voila, there we go. Look at this
[01:03:41] . As I drag the. Yeah. Yeah. It's like you're in Excel or like one of those spreadsheet programs. You just have that functionality. Yeah. Any
[01:03:51] , sorry. I'd say like any visualization, any of these visualizations you want are just like pre-baked in so that it's not, it's not for
[01:03:58]  the developer, actually. It's for the user, which is, you know what I mean? Like as a developer, you're like, oh, I can make these
[01:04:04]  charts or whatever. But this is just like, look, you have AG grid. You can literally just like give this functionality to the consumer of this directly with, what did
[01:04:13]  you do? You basically enabled true in two places or something. And we're just one enable charts. True. That's it. Okay. Well, there you go
[01:04:21] . I was thinking because you had the range selection as well. Because I. Oh, true. Yes. You would need to be able to select a range to able to
[01:04:27]  chart the range. Yes. People, people asking a bunch of like small, like kind of questions, like, can I select stuff that sells you in the keyboard,
[01:04:35]  like with shift arrows? Yeah. Or here's shift selection. I'm just holding down the shift key and doing the arrows. So yeah, you can do that. Any
[01:04:44]  other questions? Yeah. Is it possible to use the same column formatters for axes in the chart? I don't know. Bad, bad. Yes. I can
[01:04:54] 't show you because I don't know off the top of my hands, but you can configure the charts at the fine level as well. And putting in formatters is one
[01:05:00]  of the things you can do. Yeah. Well, a lot of sentiment of this is impressive. This is so nice. Just, yeah. People are pretty stoked. Thank
[01:05:10]  you. Yeah. Cool. Cool. Oh yeah. This is the one where we free. Yeah. I'm going to show you pivoting if I can because I
[01:05:17]  think pivoting is pretty cool. Let me do pivoting. I need to do, I think it's sidebar. Is that what we call it? Sidebar equals
[01:05:26]  true. What does that do? Aha. Okay. All right. So I've got this like sidebar here now, which is like the BI tool. I just want
[01:05:33]  to stress again that this is the grid on steroids. You don't have to have all these features. If you think this is too much for your app, then just don
[01:05:39] 't put those features in. Just use like a grid with less features. You know, you don't have to give them everything. And all of these things as well
[01:05:45] , you can configure the grid to do it rather than allowing the user to do it. So what I mean by that is just say I want country to be grouped. I
[01:05:52]  can say row group and just say true. And then I can hide this group. Where is it? I can take this away. Does that work? So here I'll
[01:06:03]  do a refresh. So you're grouping by country and the user doesn't control the grouping. So you don't have to be allowed slice and dice. That's just what
[01:06:10]  I happen to be demoing there. All right. Let me put that back in and let me take the row group out of country. And let me go back in
[01:06:18]  here. Okay. So I've got names of people. I've got ages. I've got countries. I've got years. I've got sports, which is,
[01:06:26]  again, these are all just sets of data. So let's go into pivot mode. And people who work in finance love pivoting. I'll just take these outfun
[01:06:34] ks off. Sorry. Business people. We're developers. We don't use Excel that much, but most users of our apps use Excel lots, and they love Excel
[01:06:41] . And they love pivot tables. Like, you know, if they could do a pivot table in your data inside your app, they'd be pretty stoked. So you said
[01:06:47]  this isn't for developers. That's 100% true in that the function isn't for developers, but the kudos is for developers. So you get all this kudos
[01:06:55] . You stick this into your app and you show it to your business. They'll think you're fucking great. They really, really will. Okay. So I'll
[01:07:01]  do group by country. And I have. Oh, okay. Sorry. I didn't allow pivoting for the columns. So enable row group true. Enable pivot true
[01:07:19] . And enable value true. That just means I can pivot group and aggregate by every column. Okay, pivot mode. I'll take these off. I'll bring country
[01:07:31]  into the group section. And let me bring year into this section. Now you see I've grouped by country. Let's bring gold in. Okay. So I'm grouping
[01:07:44]  by country. So United States is only here, only here once. And then I'm pivoting by year. So the years have come across the top. And let me
[01:07:51]  put sports as a group as well. So here, United States. These are the sports. And then the years are along the top. I'm kind of assuming you
[01:08:01]  know what a pivot table is. I didn't explain that. Maybe not by name. What's special about a pivot table? Okay. So basically, if you don
[01:08:12] 't have a pivot table, I can do grouping. Let me just refresh. So we're back to scratch. So you know, I haven't done anything. So I
[01:08:18]  can group by country. Okay. And grouping is done on the vertical axis. Yeah. However, maybe I want to make columns out of countries. Whereas currently there are rows
[01:08:33] . So what I can do is go into pivot mode. And let me take all these away. Now I'll bring country into the column labels. And now the countries
[01:08:41]  are all along the top. Okay. Because it's grouping, it only makes sense if I'm aggregating by something. So I'm going to say aggregate all the gold
[01:08:51]  by zero. So Algeria's won two gold medals. Argentina's won 49 gold medals. All right. Okay. So the name from pivoting has to do with
[01:09:01]  the fact of switching the axes, essentially. Yes. Okay. Yes. Yeah. And it's not just switching. Because you don't get more information out of it until
[01:09:12]  you do two axes at the same time. So I could bring year and set it as a group. And in this, you couldn't do a grouping. Have this visualization
[01:09:19]  where you're doing one axis by one group and then another axis by another group. Okay. Yeah. Okay. That's cool. But this again, it's a
[01:09:27]  type of thing developers, you don't use this in your day-to-day basis. But a lot of the users, your apps that use Excel, this would be
[01:09:32]  their bread and butter. Yeah. So someone's making a comparison to stuff like, you know, Tableau and like those kind of like. Yeah. And, you know
[01:09:41] , except this is like something that you can just build right in with your data. Like if you ever worked at Tableau and then, and you like sit there and you
[01:09:47] 're like, how do we export and synchronize our data with, with the Tableau thing? You know, like I hit this when we were working at, when
[01:09:54]  I was working at that yearbook company, like we were doing the social media. And then suddenly we were found, we were part of a yearbook company and, you
[01:10:01]  know, suddenly it was all about book sales and numbers and, and every, every, it suddenly became a big thing of how we exported our data formats so that they could
[01:10:09]  get the most out of their charts and, and tables and stuff. And this is just like, no, we already have the data from the database in our app.
[01:10:15]  Like, let's just like do it right here. That's so cool. Yeah, yeah, yeah. So like, yeah, you're given that Tableau experience,
[01:10:21]  that kind of reporting experience, that kind of Excel experience. And what you can tell your, your business, like you're writing the apps for is we don't need Table
[01:10:28] au anymore because the users are doing it inside our app. And it also makes the users more efficient. So they're not needing to export the data, bring it someplace else
[01:10:34] . It takes time. If they can just do it in your app, then they're just more efficient at their jobs. So it's a, it's a real
[01:10:40]  win for the, for the business. I love these reactions you're getting in chat. I don't, I don't see the chat. What are they saying? Yeah
[01:10:50] , no, there's just, just lots of, just lots of just people really impressed and really stoked about this. So, um, yeah. Okay. I'll,
[01:11:00]  I'm going to leave the demo unless there was anything there. I'd, I'd like to maybe talk about behind the scenes, tell you a bit about how this is
[01:11:06]  all working with, with solid, let's talk about solid again. That's what we're here for. Yeah, yeah, no, exactly. I'm really,
[01:11:14]  I'm really interested about some of the technical stuff. Yeah. Okay. So a bit of, um, history. Let me, I have a spreadsheet here. I beg
[01:11:22]  your pardon, not a spreadsheet, a, um, a PowerPoint supporting multiple frameworks. So, um, what age grid supports lots of frameworks. Right now it's angular view
[01:11:34]  react and, um, and solid. And, um, normally if you have a library and you're supporting multiple frameworks, you've got two choices. One is wrap
[01:11:43]  and the other is port. What wrap means is you would put a thin layer over your library and make it look like it's written for that framework. So for, um
[01:11:52] , say solid, what we could have done is just put a thin layer over a grid and then go, Oh, it's a, it's a solid grid now.
[01:11:59]  But we would just pretend because it's not really written in solid. And then when you come to use it, uh, it would work as you'd expect, but
[01:12:05]  then you try to do things like, um, you know, use a cell renderer, like we saw, customize a cell and how would that work if, if our
[01:12:11]  grid wasn't actually written in solid? Yeah. And there is ways around that. We could use portals. Yeah. I was going to say, you, you end
[01:12:18]  up having to set all your own mount points, but that seems really inefficient. if you have to do that 10,000 locations or whatever X number location, the table
[01:12:25] . Yeah. Exactly. Every, every cell would have an extra level of div in it to, to host these portals. And also if you're a react developer,
[01:12:33]  you'll go to your dev tools and you go, what, what the, what the hell's going on here? I, you know, I, I don't see
[01:12:36]  the hierarchy. I just see these, you know, a thousand cells inside this grid and there's no structure. And it, it just smells, it kind of smells like
[01:12:45]  it's, that's not very good. Now I, I believe it's good. I, I like it's written in JavaScript, but you know, people using
[01:12:51]  frameworks generally want their libraries written in those frameworks. And that's just the way the world is. Um, so yeah, we could have wrapped the grid, which would have
[01:12:58]  had that kind of strange experience. Or the other thing we could have done is ported to the grid, which would be, um, rewrite the grid from scratch for every
[01:13:06]  framework. And a lot of our competitors do that. Um, like our competitors would be the likes of, um, and let's say competitor names. I think so.
[01:13:13]  Yeah. Like, you know, Kendo UI, for example, or Infragistics, they've got another one, Ignite UI and with like say Kendo
[01:13:18] , for example, they've got a react to grid. They've got a, a, um, I don't think they have a solid one yet. I'm not
[01:13:24]  sure, but they've got a view one. They've got an angular one and they're different grids and they're, um, out of sync. They've got
[01:13:29]  different types of features. And what happens for a company like that is you end up with 10 grids rather than just one. Um, so your dev team is really,
[01:13:38]  really split. And we don't want to do that. You know, we're, you know, highly skilled people and we want to just focus all our efforts as
[01:13:43]  a company into one grid and get everybody to use that grid. So porting isn't good for us and wrapping isn't good for you. Actually porting is bad for
[01:13:50]  you as well because the product ends up being worse as well. Right. Um, so, um, yeah, we, we initially wrapped and it didn't give a good
[01:13:59]  experience, especially for, um, react people or that community was the one that disliked us most because they realized we weren't written in react and it was causing
[01:14:07]  friction. And I was going, how can we solve this? Was the internals vanilla JS at the time or were you still like angular? Okay. Okay. Yeah.
[01:14:15]  Well, it was, it was never angular. Even when I started doing it for angular, it was, you know, wolf and sheep's clothing. It was a wrapper
[01:14:21] . We wrapped it with angular and it was internally. It was JS. So in, in react, we were using portals, um, to do all these customizations
[01:14:29] . And, uh, yeah, as I said, when they looked at in the dev tools, they could see it. It just wasn't very reactive. Um,
[01:14:35]  so, um, I, I had this, uh, eureka moments and it's like, hold on a second. All these different frameworks, whether it's angular or
[01:14:45]  react or view or solid. Um, they all do exactly the same thing in terms of what their result is because they're all targeting the same browsers to the same DOM spec
[01:14:58] . So they all generate DOM and CSS and that's it. And it has to be identical. So whatever I'm doing in JavaScript, you can do that, uh
[01:15:06] , in any framework that you want. They just do it in a different way. And when that hit me, I went, hold on a second. How about then if
[01:15:12]  I go back to the grid and if I separate out all the logic, so all the components that we have, could I, you know, take all the logic out of
[01:15:21]  them and just have the components with that base DOM update responsibility. So all it would do is set the template and then set styles and classes and pretty much that's it
[01:15:30] . And then if I did that and kept all the logic away in these things called, that's called them controllers. Um, then I could replace the components and put in
[01:15:38]  components of a different framework. So I don't know if that made sense, but what I'll do is I'll show you, um, kind of what I mean
[01:15:47] . You know what? Let me go full screen here. Yeah. You've been, and you've been doing this for a while too, because this, this is kind
[01:15:52]  of, I think this has kind of come up recently. Yeah. someone's mentioning it tan stack, uh, like, uh, uh, uh, work that Tanner
[01:15:58]  Lindsley has been doing with, uh, react query. Well now tan stack query location table. He's, he's, he's got a whole bunch of libraries
[01:16:08]  in the last, I guess I'd say six months to eight months. He's been doing this kind of similar path, but you've been doing this approach with AG grid
[01:16:15]  for, for a few years now. It sounds like. Um, yeah, yeah. Yes, um, that seems to open up a Pandora's box there mentioning
[01:16:23]  Dan stack and, and, uh, um, and, uh, Tanner. Um, yeah, we, we, we kind of have, but there, there is some
[01:16:30]  fundamental difference between what Tanner do and, and what Tanner does and what we do. Um, so Tanner's react table is brilliant. Absolutely brilliant. And, and it solves
[01:16:39]  a different problem. So Tanner's, um, uh, react table is headless. It does not have a UI. And so the idea with that with react table
[01:16:49]  is it gives you the kind of, um, an, an engine, but you have to build your own UI on top of that engine. Whereas with, whereas with AG
[01:16:58]  grid, um, we come with batteries included, I guess is the, what we, we both use those terms. Um, so with AG grid, as you saw there
[01:17:06] , you just, you know, a few lines of code and loads of stuff comes out of the box and they're for different purposes. And really what different purposes are
[01:17:15]  is, um, so AG grid, um, is brilliant for enterprise applications. So we want to get a lot of enterprise type shit done, like, you know, AG
[01:17:23]  grids, the, the big guns. Um, but we're not lightweight, uh, react table is lightweight. So you have to write more code with react table
[01:17:33] , but it's minimalistic in that their table is smaller and that's better for e-commerce internet facing websites. So if you're worried about if you're going
[01:17:43]  to build a grid for your landing page and you're worried about download speeds, then you should invest more time and, and use react table because it's, it's on
[01:17:52]  the internet. But if you're writing internal business apps, um, or it's external, but it's not your landing page and you want business functions or, you know
[01:18:00] , more of a desktop feel, then that's where you use AG grid. Right. And, and just to be clear, I think a lot of the similarities in
[01:18:06]  thinking is, is I guess maybe the best way to kind of look at it is Tanner's got this, uh, headless core basically with all his libraries. They're
[01:18:15]  just basically just JavaScript. And then he goes, look, you framework, you tool integrate with this. Um, and you know, do you, do what you have,
[01:18:26]  you'll have, like, I remember looking at a react table or, uh, tan stack tables called now, and basically it generated these, uh, like almost like G
[01:18:35] itter functions that you would then pass to your own native components in the specific framework for rows and tables. So he'd like get all the table, get all the data ready
[01:18:44]  for you. And then you would, you would render it. Um, and I guess the big difference here with AG grid is that while there might be some internal level of
[01:18:54]  that, where the, the change or trigger management system is, is somewhat headless. You, you own you, what you do is you ship the fully packaged version
[01:19:05] . So like it includes not just the drivers, but the actual rendering as well as part of the package. And then the consumer, the consumer doesn't have to worry about
[01:19:16]  how they necessarily render the things. even the, the similarity, I guess, would be more from you, from a core standpoint where when you're developing, uh,
[01:19:26]  the, you said like there, there's, there's common code between all the ports, right? Like there's, there's some piece there under underlying that underlying piece
[01:19:36]  might be something like tan stack, uh, table or whatever somewhat, but that, that part isn't the part, like people, people want all the features that come
[01:19:47]  with AG grid. So that's not the part that gets like shipped. That's that part is deeply wrapped within that just kind of lets it be easier for you to develop
[01:19:56]  the different ports essentially. Yes. It's for our, yeah, exactly. If you wanted to port this to something else, you wouldn't be able to do it
[01:20:05] , whatever spells or something, um, that that's for us to do. So we come with different rendering engines and, um, by default, it'll be JavaScript,
[01:20:12]  but if you're using it in react, it'll be the reactor engine engine. And if using it now in solid, it'll be the solid engine. I feel even
[01:20:18]  more special now with solid that you've chose to take the time to actually make a solid implementation here. Cause, um, there are lots of frameworks out there. Um,
[01:20:28]  and to be a, what I named a few, but framework number four or five, that's, that's, that's pretty, pretty cool. Well, the
[01:20:35]  way I see it is you get, um, you get your react code, right? You shake off all the shit bits and then you're left with solid. I've
[01:20:42]  heard that comparison before. Um, no comment. I mean, that purely as a joke, it's not true. Okay. Right. So, um, here, the
[01:20:52]  old way that we'd all been staring at for the last five minutes for myself and Ryan just had a bit of a waffle there, um, on with James space,
[01:20:57]  each cell, um, it's, um, it's width can change. Um, like you can resize a, a column and that will then, we would then need
[01:21:06]  to set the width for each cell, uh, that's below that column. And there's, um, kind of logic here as to how to calculate what that width should
[01:21:15]  be. Now you don't need to understand what this is doing. The point is that there's one, two, three, four lines of code here doing stuff,
[01:21:21]  maybe five. And then we've got this called spanning.reduce and a reduce function. And in other parts of the code, it will be called in other functions
[01:21:28] . And there's, there's a lot of logic in calculating what actually gets displayed on the screen. But then at the end, we've got this thing here, this
[01:21:34] .getGui.style.with. This.getGui is our internal stacks. We've got our own, um, framework internally that we, we use ourselves
[01:21:41]  inside the grid. And, um, that's how we just set the width on the style for the, for the, for the elements. And there we set the
[01:21:47]  width. And, um, where I was saying before that all the frameworks do the same thing, they just do it in different ways. So whether it's solid or react
[01:21:55]  or something else, they've all got a way to set the style and width. So I was thinking, can we put this top bit here into the reusable logic? Let
[01:22:02] 's take this out of our, um, component and stick that into a controller and all the components will have is set with method. And that's what this will do
[01:22:11] . Just one line of code. In other words, I want to delegate this here. So this is the same method as before, but instead of actually setting the width and
[01:22:21]  my style, I'm calling the component to set the width and it's going to do it for me. And then, uh, I'm sorry, this is taken from
[01:22:28]  an old presentation. I gave them react. So I've got reacts down here on the right hand side, not, not solid. So basically our own internal framework will set
[01:22:35]  the width as we did before. one line of code and then under react component, um, we'll have the set with function here as well. And we'll set
[01:22:43]  the state and then blah, blah, blah gets using the JSX down below and it sets the width that way. Right. So you have your, have, you still
[01:22:51]  have your own internal representation. Um, is that like, if I'm understanding, like, is it, are these both happening or is this just a different version of the
[01:23:02]  same thing? Different version. Only one is happening. Gotcha. Okay. So when, when the grid instantiates, you'll, you'll select, or we
[01:23:09] 'll select, am we in react? Okay. We'll use react components. Am I in solid? Okay. You saw the components or something else, then we use something
[01:23:14]  else. Um, yeah, I was, thought I was going to say something else there, but I don't think I, I, um, um, um, yeah
[01:23:24] , I, I don't recall. I just got confused. I'm sorry. I'll move on. What's the next slide say? Uh, uh, okay.
[01:23:31]  So I'm going to show you this in the actual code. And so I'm going to go to our AG grid code, um, over here. And here we
[01:23:39]  got cell control. Um, so interface I cell comp. So now what we have is a cell control, which is down here. And this is just complete complete overview stuff
[01:23:50] . So I'm not expecting, I'm not going to go through what these methods are, are doing, but we have, we have a cell control in AG grid.
[01:23:56]  And every time a cell gets created and there's, you know, a thousand or so cells, whichever number you can see in the screen. Um, one of these
[01:24:02]  cell controls will, will get instantiated and it'll be associated with a component and the component could be solid, could be react, could be something else. And they
[01:24:11]  all implement this interface. Oh yeah. I remember what I was going to say there a minute ago. So I spent all of, uh, 20 last year, what's
[01:24:17]  that? 2021. I spent all the 2021 going through the AG grid code and separating out these controllers. Um, so what I ended up with was a grid that did
[01:24:27]  the exact same thing using our rendering engine, except the comps were made very, very, very slim. They were, they were stupid comps basically because all the logic
[01:24:35]  had been taken out and then we put into these controller classes. And then when I had that done, I was unable to come in with react because it was focusing on react
[01:24:43]  last year and create a react implementation that implemented the same interfaces at the component level. Um, then what I did last month and it just took me two weeks is to
[01:24:53]  go through it all again and, um, put the solid implementation in because of all the work I'd done with the, with the core and with react then to come along
[01:25:02]  and put another framework in, especially solid because it had similarities to react in terms of the patterns. Um, yeah, it was kind of a, it made me feel
[01:25:12]  good about what I'd done last year because all the hard work kind of paved the way to easily slot in new frameworks. Nice. So, um, here's my set
[01:25:20]  left feature, uh, I beg your pardon, my set left method. And then if I go into our JavaScript, uh, components, um, this is a JavaScript comp
[01:25:30]  I can see here again, this is our internal rendering stuff. This won't make sense to anybody, but we have a component class use inheritance. I don't care
[01:25:38] . Um, if I go to set left and then here, I'm just setting the left on the style of degree, like what we did before. If I then go
[01:25:46]  into our cell comp for react and we're set left. So I've got some state here, set left or left and set left. And then here I've got my
[01:25:56]  interface being implemented on this class here. I've got set left here. It sets the state that I saw above. And then then towards the end, I've got
[01:26:06]  some style. So here all styles use memo left and then all styles is inside the JSX. Right. And then inside this cell for a big part inside, um,
[01:26:19]  solid. Yeah. It's the same. It's very similar. Yeah. Yeah. Yeah. Yeah. So set left. Oh, and this is, this is fun
[01:26:26] . Cause you got a lot of signals. You're going to really benefit from those fine grain updates. Um, yeah. Anyway, that's, that's what I
[01:26:32] 'm thinking, but we'll, we'll have to see. Okay. So, ah, so left. So there it is. This is the interface again being implemented.
[01:26:42]  So left. Um, so you can see once I've done the react one, then doing the, the solid one, it was, it was honestly, I copied the
[01:26:48]  components and then just slimmed out lots of code. And then here, where's the classes, ah, here we go. Classes. There's the left.
[01:26:57]  And then we, um, create memo. Yeah. Create memo. I beg your burden. Of course it is. And then where are we style? All styles here.
[01:27:05]  This is, this is really cool, especially cause you were able to do all this without like even tapping me on the shoulder really, which is pretty sweet. I love when
[01:27:13]  I hear stories like this. Cause I'm, I'm, I'm, I'm always like, there's a little, like there's similarities to react. And
[01:27:19]  then there's where things aren't similar. And sometimes I get worried people might like copy and paste and get stuck, but you managed to get all the way through. So
[01:27:27]  I'm, I'm that, that, that always makes me really happy. I did get in touch with you about two months ago. And the purpose of that was to
[01:27:33]  try and have you on top to help me. And I never needed to ask you anything. It just, I didn't get that stuck. And there's also a cres
[01:27:40] cendo moment for me to be, you might've seen my tweet where I realized that, um, this here, I always knew it wasn't a virtual Dom, but
[01:27:45]  then when it clicked that this is a template, it's actually a template. And when you start thinking about it in terms of templates rather than virtual Dom type stuff, or
[01:27:51] , uh, then it just made it so much easier to reason with. Yeah. Yeah. Yeah. I think, I think, I think we're still learning how to
[01:27:59]  best tell that part of the story because there is a react visual similarity, but yeah, once you start thinking of it in templates, yeah, it definitely makes it a lot
[01:28:06]  easier. Yeah. I think I actually remember that tweet now that you mentioned it. Yeah. Okay. Right. So, um, with that said, uh, people
[01:28:14]  can maybe appreciate better now that all of this is, is, is rendered in solid because it's inside the solid engine and it all just fits together. Nice. And when
[01:28:25]  I did the react version, because you know, react was first and we, we, we pushed it out and you know, the great thing about having two and a half
[01:28:31]  million downloads is when you release something and there's something wrong, you find out about it pretty, pretty quickly. And, um, this is a problem that people came
[01:28:38]  back with and, uh, let me go, which spreadsheet or which PowerPoint am I going to go to? Is it this one? It is. Okay. Resizing columns
[01:28:46] . The top animation here, hoping my, my, um, screen is shared. It would fast enough update that you can see this. Right. The top one is,
[01:28:55]  is jittery. Okay. Especially when I'm making the column smaller. So basically it's processing more and I'm getting a less smooth animation. And so the
[01:29:07]  top one is using the reactor rendering engine. The bottom one is using our JavaScript rendering engine. Right. Okay. Can you, can you notice that difference there, Ryan?
[01:29:16]  Yeah. I can, I can see it through stream yard. I'm hoping people can see it on stream. Sometimes this is hard to see. I once did a
[01:29:22]  concurrency demo on stream and I'm sitting there just like talking about how smooth it is. And I watched back the video and everyone, like it was like the difference between
[01:29:30]  the clunky version and the smooth version, no one could actually see or tell no one on stream had the heart to tell me this while I'm like making all these like
[01:29:37]  cocky comments about like how, you know, butter smooth it is and, and that, but yeah, no, it's clearly visible. It's coming in from the
[01:29:44]  chat. Yeah. And you might think like it's a big deal. I'll kind of is actually, but also, um, I did this recording on my super
[01:29:52]  fast developer laptop, you know, the i7, blah, blah, blah. And, um, users, they will be on slow laptops or on virtual machines. So
[01:29:59]  it's, it gets amplified. Um, but don't take my word for it. What I did is I profiled. So, um, when I moved the mouse
[01:30:09] , I, you can't really repeat that across tests. So I needed to write some code so I could have a repeatable test that I could do then in the
[01:30:16]  different frameworks. And this is what I did. So on the left hand side, here's my code. I'm basically calling the grid API and I'm setting country to
[01:30:22]  200 pixels. So you can see here on the right hand side, when I refresh the grid loads, and then after one second, uh, it will resize country. Okay
[01:30:31] . Right. Um, so the function is resizing a column and then I can, um, in my dev tools, uh, I can profile, is that what
[01:30:41]  you say profile that. Okay. That is the react, uh, profile, which by itself doesn't make, give any interesting insights. Um, it's when I compare
[01:30:52]  this now against what happened with the JavaScript one, we can, we can really see. Now I know by looking at this, that this blue up here, this is all
[01:30:59]  my AG grid code. Okay. All the way down to, uh, the red here. And this is all AG grid code. And then it goes into react code
[01:31:06] . And this is all react code. So I'm calling set state and then blah, blah, blah, blah, blah, blah, blah, blah, blah. And
[01:31:12]  it does loads of stuff here. Okay. Yeah. Um, the width of this here, um, for this PowerPoints to do the width of this timeline is 300 milliseconds
[01:31:21] . Now I'm going to show you the Java script one. That's also going to be 300 milliseconds. So you'll be able to compare them size wise. Nice
[01:31:28] . Always love comparisons. There we go. So all this here is our code. Now these methods here are the same methods that were called up here. Yeah. Because it
[01:31:43] 's, it's the same code. It's the same code. It's just when it goes to hit the Dom, uh, here it finishes. It just updates the
[01:31:50]  Dom. Whereas on react, it then calls react and react is this and this and this and this and this and it, you know, loads of JavaScript executes.
[01:31:56]  And I find this funny, right? Because, um, the like, what's react actually do? Let me just go back to what we're doing. We're,
[01:32:05]  we're resizing a column. And what that does is it sets width on a column. So we're not creating any Dom here. We're not destroying any Dom.
[01:32:13]  We're just setting a style on a Dom element and what we do in JavaScript, uh, as we saw in my code earlier is we just set the style on the
[01:32:23]  Dom element. Okay. Yeah. What we're doing in react is we go to react and rather than setting the style and the Dom element, react says, no, no
[01:32:32] , no, don't do that. Don't do that. I want you to build up some JSX and we'll build this virtual Dom. Trust me, this is
[01:32:37]  going to be cool. So react then builds up this big virtual Dom and then compares it to the old virtual Dom and it goes, aha, you're going to try
[01:32:42]  and set the width on that Dom element. I'm like, I fucking told you that. Sir, why don't you not just listen to me? He goes, no
[01:32:46] , no, no, no. I wanted to build a virtual Dom and work it out for myself. Yeah, because it's one of the funniest things because when you have
[01:32:53]  local mutation, you know exactly what needs to change. When you have to pass it through a larger immutable system, you have to actually lose that knowledge just so you can
[01:33:04]  find it again. Um, it's, we have a similar thing with comparing like reactivity to Redux because in a sense, it's the same thing with Redux
[01:33:10] . You might know that this one particular thing changes, but then you have to go through your whole chain of, uh, reducers to figure it out again. Um
[01:33:18] , so yeah, similar kind of mentality. Yeah. Um, so this, uh, bit here, I can see there's a method here, um, set column width
[01:33:28] s, and this is the same method, same color set column widths. Uh, and that's when I timed 60 milliseconds on top and 11 milliseconds on the bottom.
[01:33:34]  And then you have this bit over here, uh, which is to do with, uh, it does stuff. I won't go into it for this conversation, but
[01:33:41]  it's a, it's valid. And here it's, um, it's kind of the same operation again, but it's, it's done much, much more
[01:33:46]  quickly. So, um, the interesting one Ryan would be, what do you think would happen now if I brought up the profile for solid doing the exact same operation? Do
[01:33:55]  you feel confident or? Yeah. I mean, this is when we put up to the test here, right? Like I would hope that we were doing something similar to
[01:34:04]  vanilla. Um, I'd hope it depends on the granularity of the data. Um, but given that what you showed me in the previous screen had everything is independent signals
[01:34:12] , I'm, I'm fairly confident. Um, so yeah, let's, let's, let's see, let's see how this, where we end up.
[01:34:18]  Okay. Yeah. Okay. I think that's very good because to me, it's a framework and just by saying it's a framework, there's code that gets
[01:34:33]  executed there. So it doesn't matter what you do if you're getting in the way of me setting the style, then you're going to add more JavaScript. So
[01:34:40]  there, there has to be some kind of cost to, to delegating this to a framework. Um, but what is really good is, um, like reactive six times
[01:34:50]  slower, uh, solid was, was twice as slow. So, you know, times six is kind of exponentially slower. Whereas this, it could argue it's the same
[01:34:59]  ballpark. Um, but definitely JavaScript is first and then a solid is second and then, and React is, you know, quite a distance in third place. Right
[01:35:10] . Yeah, no, that's, that's pretty good. Yeah. I mean, looking at it, the depth actually, isn't that much deeper than vanilla. It
[01:35:17] 's just looks like there's like at least one extra something going on in the, in the chart. The end of the chart actually looks similar. It's just that
[01:35:27]  at the beginning there, the sections about twice as long, um, as the vanilla vanilla. And that's where most of the cost is happening anyway. Yeah. And something
[01:35:36]  I like about this test as well is when you're comparing frameworks and you, um, you know, people will do speed tests and what they will normally do, which is
[01:35:44]  absolutely fine is they will create apps specifically for the test. And when you do that, you can design your app or your, your test to, you know, to make
[01:35:53]  one framework look faster than another. Um, but this here is actually a real world example. Um, like when you have a data grid resizing a column, um
[01:36:01] , it is something that people do. It's, it's, it's a, you know, a common use case for us. And that's why I like this
[01:36:06] . It's kind of like a real world example of, um, a complex component, um, like written and doing the identical same thing for all the different frameworks. So
[01:36:16]  it's, it's a real world complex DOM operation. Yeah. And, and the people, people in the chat are like, Oh, did he apply this optimization
[01:36:23] ? Maybe he could do this. Maybe if we like that, they're, they're, they're going this and Niall, by his own admission said that he didn
[01:36:31] 't know solid, picked it up for a couple of weeks. And this is what he was able to just do by basically copy and pasting the React code. So
[01:36:40]  I, I mean, yeah, I'm, I'm, I'm pretty happy with this, the, this results. You know what? You'd be pretty happy,
[01:36:48]  but I'm going to make it a tiny bit sad when I tell you the next bit. Um, which is, uh, so, uh, well, I was working
[01:36:54]  in React at the time and I wasn't thinking about solid, uh, when I made this decision, this is back in February this year. Um, I said, okay
[01:37:01] , for certain styles and classes, um, I'm not going to use the framework. I'm just going to do it in JavaScript. I see. Well, I
[01:37:10]  mean that, that makes sense very happy. Yeah. I mean, I mean, that world so, so then what, I wonder what solid is doing here. Um,
[01:37:18]  but so that makes it even more interesting, but okay. That, that, that makes sense because nothing beats vanilla in terms of performance. So yeah. You would think
[01:37:29] , but let me show you, um, the next test. Okay. Because that was, although the test wasn't contrived, it's quite specific. It's
[01:37:37]  just updating the styles of an existing DOM. What if we do something like, oh, there's previous, previous results just in the chart. So yeah. Right. So
[01:37:46]  longer, smaller is, is a better number. Right. This, this, uh, this example here. So what I'm doing here is, um, after the grid
[01:37:52]  has been shown for a second, I then scroll to position 1000. Now the grid virtualizes the rows. So when you scroll, the grid has to rip out the
[01:38:05]  rows that were scrolled out of view and render a set of new rows. So by jumping to 1000, that basically means go to a set of rows on, I'm
[01:38:13]  not showing any of these rows. So the grid will have to rip out all the previous cells and then create a brand new set of components for all the rows and the cells
[01:38:21]  inside those rows. Yeah. So here we're testing the, um, component creation and destroy basically and DOM creation and destroy. Yeah. This, this one's going
[01:38:31]  to be more interesting for us to figure out the difference because reactivity is more expensive to create initially than VDOM, but we do optimizations. The question is,
[01:38:40]  do those optimizations get leveraged in the way that we write AG grid? I guess we'll find out. Okay. No drum roll this time. I decided to
[01:38:50]  splash them all up. Now there's two ways you can look at this. Okay. The first way is to go. Oh, interesting. JavaScript and solid are, they
[01:38:59] 're kind of in the lead. Solid's a bit quicker, reacts a bit slower. Or the way I look at this is they're all the same ballpark. Doesn
[01:39:05] 't matter. Yeah. Yeah. Yeah. So this is, this, this is, this is a situation where, um, the DOM creation cost is, is taking
[01:39:15]  up probably most of the cost. Creation is always a place that's very, that tends to be DOM heavy. Um, but I mean, still for it to be this
[01:39:24]  close suggests that you, you've already optimized things to such a point that the JavaScript over top of it is actually fairly, fairly minimal. Um, so yeah. Well
[01:39:34] , you know, when I saw this, what came to my head is solid's doing stuff that we're not because we should be the fastest because solid is, um,
[01:39:41]  a generic framework. We, we have the benefit of we're writing a framework just for the grid. So we can do tweaks that you, you wouldn't do if you
[01:39:49] 're trying to write an app. Um, so the JavaScript one should have won. So I'm kind of wondering, I mean, we do a lot, we,
[01:39:56]  we do do a lot of optimizations on the DOM side, small micro optimizations that maybe all add up. So I, yeah, maybe that's worth a conversation at
[01:40:06]  some point, if you want to see if we can make your JavaScript version faster. Um, well, I think it's probably we're doing a lot of, um,
[01:40:12]  templates or we create DOMs based on templates. Um, so each component instance creates a, creates a DOM via string template. I see what you're doing is you're
[01:40:22]  doing that creation once and then you're cloning the DOM node. Yes. That's that, that, that is a very good trick. It's something that I
[01:40:29]  learned back in my old knockout days. We actually, that was the one thing that we modified from knockout and our pug engine was that doing this node cloning is
[01:40:37]  definitely faster. And it depends on the size obviously of the, of the HTML, but that was the thing that I was trying to figure out. Like if, if everything
[01:40:45] 's like a single component cloning versus like document, create element isn't going to be much different, but if there's any chunks of continuous HTML that you can clone
[01:40:55] , there are big savings there. Um, yeah. Interesting. You see, it's, it's a tiny bit of a saving though. We only, we're almost
[01:41:02]  as fast. It's only this tiny bit. So I'm going to, I'm going to give a guess here that the browsers have come on so much since you made
[01:41:08]  that, um, discovery, uh, that maybe doesn't make that much difference anymore. Yeah. Yeah. No, I miss true. And as it, it comes
[01:41:16]  to, it comes down to the size of the components. If you have less, if each component wraps one DOM element, it's almost indistinguishable. The
[01:41:24]  bigger the DOM element chunk gets, the more beneficial it is. So, um, that, that, so that might be the biggest thing. Cause like react is definitely doing
[01:41:33]  it one element at a time. The way they compile their JSX is literally one at a time, right? Like it's essentially because the way it works, like
[01:41:41]  there's no way they can do it any other way. We do a bit of static analysis to try and do bigger chunks of creation at a time. But if the code
[01:41:48]  doesn't let us do it, then there's nothing we can do about it. But yes, um, it is still a micro kind of thing, but it, but
[01:41:55]  yeah, it could be a, it could be, I don't know, 10 to 15% boost depending on the size of the elements. It's hard to say though
[01:42:03] , your, your mileage will vary basically depending on what you're creating. I think. Yeah. Okay. Okay. Um, all right. So for this one,
[01:42:11]  um, they're, they're a similar speed. So in AG grid today, uh, we let the frameworks do all of the component creation and destroy, which is brilliant
[01:42:21]  because that, that's what we're using it for. So the, the framework manages the life cycles of all the components and does all the rendering in the components. But
[01:42:28]  when it gets to setting the styles and the classes at the cell level, only for the cell level, we just do that directly because it's, it's, it
[01:42:33] 's faster if we do directly in, in JavaScript. Um, okay. So there's the test results. Here's the test results side by side. So it's two
[01:42:42]  types of operations, just changing styles. This is what we saw react was a bit slower in JavaScript and solid written similar ballparks been faster. And then for the doing
[01:42:51]  the dumb update or redrawing all the rows, they're all the same ballpark. So all these ways of doing it, give you similar results. So to me
[01:42:57] , you don't choose a framework for speed these days, maybe you do, but to me, you choose a framework for ease of programming or how it helps you structure
[01:43:04]  your, structure your code. Um, that's like why I wouldn't tell somebody, don't use a framework, use JavaScript because you'd be left with spaghetti code.
[01:43:14]  The frameworks come with the benefit of adding structure and, um, you know, making it, making it, you're better off using a framework. Um, yeah, but
[01:43:23]  I, I see the benefits being how, how it helps you structure your code base and allows you to, you know, scale as opposed to for the speed reasons.
[01:43:29]  Yeah, no, definitely. I mean, there's a reason we have these tools. I'm still pretty happy to see, um, that you were able to, it
[01:43:38] 's always nice to see when people can kind of confirm the results of like some of the work we're doing, even if it's not a, um, a big difference
[01:43:47]  here. Like in these cases, it's just like, it shows you that like some consideration went into performance here and it does have, or it may have some kind
[01:43:56]  of positive impact on, on your applications, especially on slower devices and whatnot. Yeah. Cool. Right. I have a bit of sad news. That's the,
[01:44:05]  um, that's the end of everything I was planning to go through. No, that's, that's awesome. I, I think, I think, I think,
[01:44:13]  uh, I think it was a very impressive demonstration, um, for, especially for AG grid and the features people were very, very excited, um, about, uh
[01:44:23] , you know, the different, the different capabilities. I mean, I hadn't seen AG grid in that level of detail before, and I don't know if others had
[01:44:31]  either. Um, it was definitely cool to see. I've, as I said, I built some very simple, um, like kind of dashboard type stuff for analytics when
[01:44:41]  I was working at that, that startup. Um, but it was nothing like this. And, um, it was years and years and years ago to see where things
[01:44:50]  have gotten to now. Um, and like just how simple, how like, like powerful, like when you, when you're pulling up those pivot tables and like auto generating
[01:44:59]  the charts, and this is just like, literally you were just able to go like, drop this in. So I guess that's on the enterprise side, but you're
[01:45:05]  like, drop this in, turn on charts. Yes. Turn on pivots. Yes. And then suddenly the end user can do like, this takes a huge burden
[01:45:13]  off the developer. They can just be like, look, get me AG grid. And then you don't have to worry about all this, you know, name features
[01:45:23]  you're asking me for. It's already been taken care of. Um, that, that, that's, that's super powerful. And yeah, I, I'm
[01:45:29] , I'm still kind of like recollecting, like trying to like think about this, because as, as you said, this is something that you build the integrations
[01:45:37]  for, and that's how you get that level of polish that comes in and it's, it's available for solid now. Like, like people can go and use
[01:45:46]  it and be like, like this makes solid a real choice, um, for, for, you know, these companies like this, because it looks like AG grid does do
[01:45:56]  a lot of the heavy lifting in these cases. And maybe, I mean, solid under the hood does help a little bit on performance, but that's not what's going
[01:46:04]  to sell people on it. But just the fact that, that this is now an option to kind of go alongside whatever, what other things they're going to be doing
[01:46:12]  with solid potentially, this is really, really, really cool. Yeah, I'd love to see solid make an impact on the financial side, as in, in finance
[01:46:20]  technology. And, uh, in, in some aspects, the, the finance technology lead the way that if, if something becomes popular there, it'll then, um,
[01:46:29]  go into other industries. That's happened to the AG grid, that they're the ones that latched onto AG grid first, and then other, other industries kind of came
[01:46:36]  as well. And, um, I'd be curious to know over the next six months or a year, now that we support, um, solid, will there be
[01:46:42]  an uptake on using solid now in finance? That would be, um, interesting to see. Yeah. I mean, I think AG grid is going to be a key
[01:46:49]  player for that to help us kind of get to that next step. I think we need, I think that a few other ecosystem libraries that have been kind of coming in and
[01:46:55]  I'm hoping that if we can showcase things like AG grid and a few others, we can kind of complete that story because obviously you grid in this part is a,
[01:47:05]  is a big part, but I'm sure they have a few other things they have on their check mark checklist in terms of what they, what they, uh, need in
[01:47:12]  terms of functionality features beyond the grid system. So yeah, I'm, I'm looking forward to it. This has been an amazing year of growth for us. Um,
[01:47:20]  and I'm so stoked that you decided to add us, um, you know, to your list of frameworks that you support even before Svelte. Um, you
[01:47:29]  know, I saw, I saw a tweet Svelte for the web solid for the enterprise and it rhymes stuck with me. I don't know. Is that true?
[01:47:38]  Uh, I, I think, I think there's something in the design where, um, Rich has done an amazing job of creating a framework where the, the floor of
[01:47:48]  entry is just so low. Like you can just like come in and it feels like the first time you wrote some JavaScript in a console. Um, or like, you
[01:48:01]  know, for me, notepad plus plus and opened a webpage or whatever, like Svelte has this kind of feeling that you can, you can just like write
[01:48:10]  something very simple and it does stuff to do that. It actually has to do a whole bunch of stuff behind the scenes, which you probably don't want to know about,
[01:48:16]  but essentially that's the kind of thing I built solid in a very different place. I keep on mentioning the startup at the time I was working on it. I was
[01:48:24]  building an app that I, that we had in production for like a decade, a very long time, and it kept on changing and we need to keep modular. And I
[01:48:33]  was always thinking about like what parts I could throw out, like the consideration you can tell even in our docs, which we've been working on that. It was, it
[01:48:41]  came from a place of like, kind of like a senior dev kind of solving the problems that I cared about. And I think maybe that can appeal to the enterprise side
[01:48:53]  more because a lot of consideration went into the, those kind of maintain maintenance considerations. And like, how do we move forward? And it's, you know, I didn
[01:49:03] 't actually focus on lowering the floor that much at first. We're now working on docs and making that story easier. But for me, it was just like, I
[01:49:09] , I built the thing that I wanted to use kind of like yourself where I was just like sitting there going, you know, in my case, we're using knockout
[01:49:16] . I'm like, the knockout's really good, but like, we need to modernize it. We need to make this easier for developers to learn. But I
[01:49:21] , you know, I liked all the elements of how the developer story worked in like the performance. And as I said, the developer story part was actually really important because this
[01:49:30]  maintainability, this composition, being able to kind of like find the reusable pieces, being able to keep things contained in their own zones and be able to throw them out
[01:49:40]  and improve them and basically be free to change my mind on how the technologies would work over time. And that's how I ended up there. So I think it's just
[01:49:49]  like the different sort of mentality lends it that way because part of it is the way I talk about it. I feel like solid could probably be sold a bit like V
[01:49:58] ue if we change things a little bit. But that's like not where it came from. I built very much the thing that I wanted to use, so to speak
[01:50:07] . Yeah, cliche. Same with, well, bringing Tanner back into the conversation, the exact same with his. All his stuff was what he wanted for himself, and then
[01:50:17]  release it in open source as a secondary thing. And then that's kind of what's great about these inventions is when it is a genuine need, you're often not
[01:50:25]  the only one in the world that has that need. And therefore they're, you know, those needs are shared and these libraries then become used. There's a question here
[01:50:35] . So in terms of ecosystem, what other plugins are regularly used in AG Grid that SolidCommunity started building on? Like, does AG Grid have like plugin systems, ext
[01:50:44] ensibility, stuff like that? Or I'm not quite sure what the question is exactly. I think that's more of a question for you guys thinking, okay,
[01:50:50]  you got AG Grid now on your, on your stack. What other stuff do you need to get in there to get enterprises using Solid? Okay, okay. Got you.
[01:50:59]  Okay. So yeah, so AG Grid itself is just so flexible and pluggable, like you kind of like lend it back to the framework. Like as we saw,
[01:51:08]  you just add a framework component. You don't need a plugin. If you can just go, these are components that work well with AG Grid. Like you, you
[01:51:15]  basically have like the tools that you need available to you. Because they said in terms of what other plugins are regularly used in AG Grid. Yeah. Yeah. Okay. Yeah
[01:51:26] . I think, I think we... Unless the person was talking about those cell renders, like what can you put in inside a cell, maybe? So calendars
[01:51:32]  or date pickers, I mean, or maybe not. I don't know. Yeah. I mean, that's, that's, that's the way I took it
[01:51:40]  too. Like, are there, are there, do you find that it's common, like say in React for people to make like specialized components that go in those cell render
[01:51:49] ers or like... Oh yeah. Yeah. People customize the hell out of it. Well, when they say customize the hell, they put in buttons and business functions on those
[01:51:57]  buttons. Okay. It's not like mad UI stuff, just business functions. Yeah. Okay. Yeah. Okay. So yeah, a lot of use case dependent kind
[01:52:07]  of stuff. Yeah. No, definitely, definitely interesting. Yeah. We, we're probably wrapping up pretty close here with, with Niall in terms of time. If
[01:52:17]  anyone has any more questions, let's just get them in the chat before, before we let him go. But yeah, for me, this has been, it's,
[01:52:24]  it's so cool to see this in action. And I, and I love, as I said, you were able to just apparently very easily without, without even bug
[01:52:33] ging us in the discord, bugging myself, just kind of put this all together and then have really like a fairly like successful time. I did well, you know,
[01:52:41]  did well comparably in the benchmarks. It, it, uh, seems to work really well. I was impressed by the demo. So, um, definitely, definitely kind
[01:52:49]  of opened my, my eyes to the, the potential here for these kinds of things. And I think, I think, as I said, having AG Grid on board,
[01:52:57]  we will be a signal, I love signals, um, to others in this, uh, you know, ecosystem, you know, about what they can do with solid
[01:53:05] . I'm, um, thank you so much for, for, for doing that. Perfect. Well, thank you very much for having me on. It's been,
[01:53:11]  it's been great. Like, um, although you're excited to see it, I'm excited to show it off because it's new for us as well. I'm
[01:53:15]  excited to see where it goes. Um, if anybody wants to know more about AG Grid, just Google it. AG Grid.com is the website. If you want to
[01:53:20]  get in touch with me, Twitter is probably the easiest one as well. Um, um, if anybody's in London next month, um, I think Ryan is also
[01:53:26]  the same. Both of us are speaking at Modern Front Ends Live. Yeah. Which I think is the 17th, 18th, uh, in, in London.
[01:53:31]  So yeah, uh, me and the, sorry, the team and I of AG Grid will, will be there. One of the sponsors actually. Um, and,
[01:53:38]  um, yeah, um, I hope anyone, sorry, I hope everybody that was listening found this useful and good luck with your future AG Grid slash SolidJS applications.
[01:53:47]  Thank you so much, Nell. Thank you for joining us today. Um, the stream's going to continue on here, but we're going to let Nell go
[01:53:53] . Um, that was awesome. Thank you so much. Have a good rest of your evening. Lovely. Thanks very much. Bye everybody. Take care. Bye. That
[01:54:00]  was so awesome. Um, I hope, I hope you all enjoyed that. I wasn't sure how far we'd get into it or how far we'd go on
[01:54:09]  it because, um, really quite cool stuff, right? This is a little different for us on stream. I, I usually don't spend as much time like focusing on
[01:54:17]  a specific library after doing this, I kind of going to kind of kind of going like, huh, maybe I can get someone from tan stack, uh, over here to
[01:54:25]  talk about, you know, some of the different solutions and stuff that they've, uh, they've been working on too with solid integrations. Um, we're,
[01:54:31]  we're seeing kind of a shift, you know, where like we're getting considered for integrations, very high up on the list. I think the similarities to react
[01:54:40]  might be catalyst, but also like from what you see, people are getting really good results by almost copying and pasting. I think that's incredible. And I, I
[01:54:51]  hope to continue to see that grow. Um, yeah. Can I get Tanner on, um, is a question. Yeah. So people are talking about, yeah,
[01:54:59]  the man is a wizard. Yeah. Yeah. I mean, that's like, that's a cool thing. When you have a product that you've been, you've
[01:55:06]  been working on for a long time, um, and kind of being able to actually focus on it and make it good. Um, I mean, you can accomplish incredible
[01:55:16]  things, right? Like the, you know, right down to the, you know, cell level optimizations, because you care about that. That's your product. That
[01:55:22] 's what you're looking at. And all your users care about that. And to be able to take that and then just go, yeah. And it's agnostic
[01:55:28] . We can just apply it everywhere. Like that's, that's powerful stuff. You know, like it's, it's, it's, it's crazy.
[01:55:36]  Like we, we talk about a lot about like, you know, reinventing the wheel, you know, like every time a new framework comes out, but like two weeks
[01:55:45]  effort to get that output. I mean, that, that feels worth it. That's, that's better to me than like, say something like the promise of web components
[01:55:55] , for example, like that, we're going to have this one solution that everyone can slot in because now you have two frameworks. You might've hidden it, but you
[01:56:01]  have two. This is a way to leverage the framework to its full potential. You know, obviously I haven't gone through Niles code and nitpicked it line
[01:56:10]  by line. But, you know, maybe, maybe that's a good exercise to do at one point, but it looks like it's working pretty good as is. So
[01:56:18] , you know, I think, I think, I think we're like this, this, this is, this is the great thing about, you know, having a community
[01:56:25] , having everyone involved, I mean, the share of these things, it makes me so happy. Yeah. Some mentioned, it's kind of like learned adjacent content.
[01:56:33]  Yeah. I, I'm maybe I swap a little bit that in, uh, as well. As I said, I, there was a, there was something on Twitter
[01:56:39]  where they're talking about, like, um, maybe I'll talk about this, this week in JavaScript about, um, you know, people, accounts to follow and stuff
[01:56:46]  and people mentioned my videos, but everyone's like, beware, it is super advanced stuff. And I, I get it, but I'm, I'm, I
[01:56:52] 'm not trying to be like necessarily like, obviously I care about advanced topics and that's what gets me interested. And we're going to go on a tangent of advanced
[01:57:00]  topics here in a minute, uh, as well, probably. But like, I think it's great to be able to look at this stuff and kind of scale that depth
[01:57:09] , look at like the, the product demo, see how cool something like AG grid is, see how people use it and then go, okay, well, how do
[01:57:16]  you implement it and why? And I think those questions, I mean, Jason does get into it a bit, but I, I love nerding out on even just like
[01:57:23]  the code implementation and like art is template cloning faster than not. Like those are topics that are, are really interesting. Um, and what, you know, I guess
[01:57:33]  those are super advanced topics. I can't even tell anymore. I'm, I'm so down that rabbit hole. So, uh, it's all good as long
[01:57:39]  as, you know, you can all come along with me on that journey. I'd like to see super tiny templating language within vanilla. Yeah. I mean,
[01:57:49]  when does vanilla stop being vanilla? That's the question you got to ask, right? Because, um, like it's, it's, it's, it's,
[01:58:03]  it's always kind of going to, uh, you know, in the sense you could look at something like lit and say, it's a super tiny templating language.
[01:58:13]  I've seen smaller ones in lit. Um, but like, it's just a matter of like what level of abstraction you're comfortable with. Do you care about being
[01:58:21]  declarative? Like I I've pulled up libraries before. I don't know if like stuff really, really fast, like I'm stage zero or, or whatnot, which
[01:58:31]  aren't fully declarative or Mikado. Um, and like here, do you want an example? Um, let me just pull up my screen for a second. Uh
[01:58:39] , I, I have to add my stream screen to the stream. Like this is a framework where you put markers inside your template. So you just have this age function
[01:58:50]  where you define a template, put markers in it. And then with this view, you get back, it knows what those markers are. And then you can go, okay
[01:58:58] , this view, they called it root, but whatever you basically can go view. Oh, that's interesting. Dot collect view. Okay. I don't know about that
[01:59:07]  part, but it basically pulls out the markers. So it's like reverse jQuery. And then you can just add interactivity to it. Like this is a very
[01:59:15]  minimalist template engine. It's super small, super fast, but like there's always going to be a cost of abstraction with what you choose to do. Um, sorry,
[01:59:23]  and this probably isn't not big enough for people to see, but what people choose to do with, um, vanilla JS, so to speak. Um, so I,
[01:59:33]  I think, I think there's a choice there. So yeah, I mean, yeah, give me a second here. Catch my breath. So anyway, um
[02:00:02] , yeah. Uh, what was I going to, let's get back to some of those questions and in chat here before we move on. Um, but I like how
[02:00:11]  product oriented is. Yeah. Yeah. I think edgy grid is, is, um, really quite cool. Like when you have something with that much functionality, uh,
[02:00:24]  I think this is the biggest fear people have, right. That if you, if you, if you invest so much on it, then are you gonna be stuck in
[02:00:32]  a single framework? And there's clearly a path, as we said, ag grid has showed this path. Um, Tanner's headlets approach another one, but I actually
[02:00:39]  like this all in, in, uh, approach for this, especially specifically, because like there is a customer for this and the fact that now they can basically have this micro
[02:00:49]  app and have it just switch and be like, okay, it was react yesterday. Now it's solid. Like they haven't lost anything. I mean, this is
[02:00:55]  the, I want to see more of this. I think, I think this is a, is a, is like a textbook kind of scenario, but between this intense stack
[02:01:02]  of like two different approaches to accomplish this without getting locked in. There's ways to get locked, to avoid locking, um, with the frameworks that don't, um,
[02:01:12]  involve like trying to make a one size fits all because that usually fails miserably. Yeah. Grounded in real use cases. So you guys are all making the nice
[02:01:24]  comments after Niall gets off the stream. What's up with that? Uh, frameworks are commodity. Yeah. Oh, we forgot to ask about SSR. Um,
[02:01:34]  maybe I'll, I'll follow up on that. I think there's, there might be some interesting bits there, but yeah. Um, anyways, does node cloning
[02:01:42]  overlap with SSR hydration implementation and solid? Yeah. Yeah. Um, one of the cool things about node cloning is that now the template is separate from the reactive
[02:01:52]  interaction, right? Um, I mean, I can show this really, really quite easily. Um, let me, let me open up a playground for solid and share my
[02:02:02]  screen again. Like this, this template doesn't have anything in it, but let's like add a div around here or something, you know, I don't know
[02:02:14] . I'm just adding stuff format. Let's add a span that says hello. And I'm going to give the span a title for no apparent reason other than because I
[02:02:30]  can, and this puts something in here like high. Okay. Okay. Well, what, what node cloning does, if we look at the compiled output here in
[02:02:41]  the playground is if you look up here, there's this template and all the element stuff is in here, right? Right. And down here in our component, we have
[02:02:55]  some reactivity setup code, which no surprise is the exact same as the reactive code that you wrote yourself. didn't touch this. We only compiled the JSX.
[02:03:02]  The JSX is just like clone this node, um, walk to a dom element, add a click handler to it, and then insert, um, this expression. This
[02:03:11]  is basically a create effect call for the count that that's it. It's like create effect, add click handler, clone node. And because of the separation, if you
[02:03:20]  look at the hydration compiled output, and I'm hoping this window resizes maybe because I'm too far down. Okay. If I look at the, the, the client
[02:03:27]  side rendering with hydration, you can see that the clone node becomes get next element and we pass the template. And all it, all this little change does is it means
[02:03:36]  that if we're hydrating, we don't clone the template, we just get those elements from the dom and then we do the same code. So basically by splitting the
[02:03:44]  paths, we've already kind of like, in theory, like if we knew that this was server rendered, we could do something like server only, and check this out
[02:03:56] . Now the template's gone. So if we knew that this was something that was only ever rendered on the server, we can just not, it only, this is only
[02:04:05]  ever going to run once. So it's only going to get hit during hydration, which means that essentially we can just erase the template. See, it's gone template
[02:04:12]  gone. And then we just go, get me the dom elements that are in the, already in the dom because it's hydrating, walk to it, add the click
[02:04:19]  handler, and then make sure that there's an effect that updates the account when it updates. That's all the code we need. So separating the clone nodes is actually
[02:04:28]  very powerful from a hydration standpoint as well, because it essentially allows us to like separate the template so that we can literally just remove it from the output. I haven't automated
[02:04:40]  this mechanism outside of stuff like partial hydration, but I think we could get like, with a little bit more static analysis and like some more bundler kind of stuff,
[02:04:51]  maybe type system or something kind of smart. If we had more cross module analysis and that with the bundling, we could definitely just even pull out this for service render stuff
[02:05:01] , pull out the static nodes that are even dispersed within interactive components, because not everything that's interactive actually needs to shift the template. So I clone node really aligns with
[02:05:14]  with hydration and server rendering. Anyway, little tangent, just in case you were interested. Crazy Trojan horse would be to build an agnostic component with using them
[02:05:29]  in solid equals and then wrapping them for react. Yeah, I mean, yeah, I mean, and that's a very solid specific narrative, but I mean, you can
[02:05:38] , you can already see that like, there's a solid version of AG grid, like solid end to end. So like, it's, we're kind of already there
[02:05:46] . Like, I mean, I mean, it's not a meaningful impact, but you can still be like, look, if you switch the solid, you get better
[02:05:52]  performance. And I mean, to be fair, like, this is more me marketing. Niall's never going to market it like that because he's obviously like has all
[02:06:00]  the different frameworks and they all play nicely and different customers, but I could market it like that. So like, yeah, I mean, because this is like native solid what
[02:06:09]  you get out of it, which is really cool. How do I feel about the benchmarks? Yeah. I mean, I think, I think it's, I think
[02:06:17]  it's fair. I think, I think we could probably creation is something where either the, the DOM is going to take a lot of the expense for some things or
[02:06:32]  like the end user code is, um, the framework itself usually very little, um, if it's optimized. So I think assuming the amount of detail that now put in
[02:06:41] , it's pretty optimized. Like solid might be getting a few wins here on like minor nitpicky DOM, um, things. Uh, but generally speaking, um
[02:06:52] , I, I think what you're seeing on the creation side, at least is, is, is simply the fact that like DOM is expensive, you're right. Like
[02:07:03]  it just, we can't escape from the physics of our, of our, of our grounding. The update performance was interesting. I mean, I, I, I'd
[02:07:10]  love to like dig in, but I say that, but I really don't probably have much time to kind of understand. Uh, because if the style updates are happening
[02:07:18]  directly as refs, I feel like, like maybe like I expected us to get hit more on creation because of the reactive overhead than on the updates. So I think it
[02:07:26] 's interesting. Like there's probably some theoretical zone where the updates on solid could get much closer to vanilla, but it'd probably take like me maybe looking at it or,
[02:07:36]  you know, maybe Fabio looking at it or someone to kind of get to that point. And honestly, that's not what selling it. Like the fact that it
[02:07:46] 's so maintainable and easy to use, like the idiomatic code is that close to the performer code. Like I'm not going to sweat it, but yeah, if
[02:07:52]  you want my, my opinion or feeling that's, I'm just happy that if you go down stream and you're just like, okay, it's live, what's
[02:07:58]  going to happen? You know, everything went pretty well. So I'm pretty stoked on that. Yeah. Uh, question about as no, we, we talked about
[02:08:12]  as no, uh, a little while ago, um, at the end of one of my, this week's in JavaScript about two weeks ago, I think a lot of
[02:08:18]  potential here. I think types might be a solution. I think we still have a lot of work to do, but I think the potential is really interesting, especially if it
[02:08:26]  could inform localized compilation for frameworks. I think we, we can finally get out like right now, there's like three choices. You have an, I probably put this
[02:08:35]  in an Excalibur somewhere, right? We could like, yeah, this is from a different stream. That's not a different stream. Let's just go in
[02:08:44]  my ever growing Excalibur, but I'm going to spell it out just so people can write it. Three choices here, right. Uh, why is this
[02:08:51]  green? What can't it be? Okay. And you can basically go local only compilation, but then it's like, give up composition. You can, you can invent
[02:09:16]  syntax. I mean, I guess there's a few options. You can invent specific syntax and, um, let's annotate boundaries. Um, but it's kind
[02:09:38]  of clunky, ugly. And I guess I should give examples of these Svelte. Um, what's this one? Uh, I guess view. Um,
[02:09:58]  you can invent a specific syntax and how should I put it? Um, do this is, this feels like I should have made a table to divide. Do like this
[02:10:15] , this is, I'm, I'm seeing, I'm seeing actually multiple axes here now and do global compilation. Yeah. I'm, this is just the wrong explanation
[02:10:23] , the wrong visual here. And I'm going to put Marco here, but this is really freaking complicated. I'm going to put this one. So I'm going
[02:10:42]  to do global compilation. If I'm going to do global compilation, you can use a type system to inform local compilation. Actually, Marco's the only one that's doing
[02:10:52]  global compilation. So really the part that should be highlighted is the do global compilation. now I need a good, now I need a good typed language as no, right
[02:11:10] ? This, this, this, this is the way I look at it because reactivity is hard to maintain. So yeah, this is, this is sort of my,
[02:11:19]  my, my summary here on what I, what I, what I, what I think about this stuff and, and as no essentially, because there's, there's
[02:11:30]  been no really good way. Like for me, one is unacceptable. Two, isn't worth it. I, I like, I don't care enough. Three is so
[02:11:39]  incredible, but I feel like you need a team of geniuses working on it for half a decade. Um, and then four, maybe there's a community here that'll
[02:11:51]  take care of it for me. And then I can go back to basically just doing what I'm doing. So anyways, that's probably enough fun as no for now
[02:12:02] . Just reading some more comments. How's everyone doing? Solid got server quotes before react. We can talk about that in a minute. Uh, we, we didn't
[02:12:27] , really get server components, but we can talk about it. Um, yeah. State management. I need X value pro. Yeah. I've been using it long
[02:12:40]  enough, haven't I? No, I called, I called view ugly. And to be fair, I'm not calling view ugly view is view. Um, is
[02:12:49]  actually has a lot, it's, it's, it's the ref sugar thing. I mean, some people, everyone has their own aesthetic, but like dollar signs to
[02:13:00]  annotate stuff and then double dollar signs. Like, I mean, it's, it's, it's ugly from a clunkiness standpoint. Um, I don't
[02:13:07]  think it's necessarily ugly. Like, like, it's just like, now you have all these blocks where you're like wrapping things with dollar signs and double dollar signs
[02:13:18]  and stuff. And I don't mean just annotating a name like we do with RxJS or the web quick does. I mean like actually making all these.
[02:13:25]  Yeah. I don't know. It's less, yeah, we'll see. Should developers challenge JavaScript only frameworks? Um, they can try, but, uh,
[02:13:36]  I think I, I mean, there's, there's a conversation to be had here, like Phoenix live view and whatnot. Like, um, I need to look at
[02:13:44]  live view and understand it better, but, but I think if you want my summary on this, and I actually wrote an article about this is right now, JavaScript is the
[02:13:53]  best way to send less JavaScript. Like if you want to solve that we're in this weird thing where you either on one side of the hill, you have frameworks where
[02:14:01]  you're like, I've drawn this graph before. I don't do it again, but essentially you have frameworks that are written in other languages. And now you have like
[02:14:09]  the two app thing where you're like going, okay, I'm going to write my business logic in language Java. And then I'm going to write, if it gets
[02:14:14]  complicated enough, I'm going to need to write it into JavaScript. Now there's some ways around this, which is what I'm talking about, like stuff like live view
[02:14:19]  or whatever, where the server is always a source of truth and it's always like needing a live connection. The, on the other side is if you want to write a
[02:14:25]  single app, that can work independently in the client, potentially like can work offline or can also, you know, can transcend both sides. It needs to be JavaScript right
[02:14:35]  now, if you want to do it optimally, because we actually have to use the run on the server to inform the client on how to better hydrate and stuff.
[02:14:42]  Obviously there's different approaches. We had Corset, Matthew Phillips on last week, talking about other approaches we can take this, but generally speaking, I think JavaScript
[02:14:52]  on the server, you can challenge it. But right now it's kind of just, it's how we get to keep our declarative UIs that we like. Should
[02:15:02]  we? That's an interesting question. So I guess that's the angle I'd take if I was challenging it. But in general, like there's still a lot of
[02:15:11]  room to grow here. So I think you're going to be met with kind of like, yeah, but we're doing all this cool stuff, which maybe I'll
[02:15:17]  show off a bit later. Yeah. With anything supports can take a long time. So we'll just have to see how this all lands. This week in JavaScript,
[02:15:37]  I'll get to it, but we got lots of time. It's only two o'clock. I actually, what I want to, I mean, I don't
[02:15:42]  think I have enough time to go like too crazy on it, but I like, I was thinking of actually implementing a solid style renderer in Preact from scratch. That
[02:15:51]  could be kind of fun. I like building stuff. I don't actually know if it'll work. So maybe we should just to like take a deeper look at Pre
[02:15:57] act signals for a bit, if people are into it and kind of like, look at like what they offer and see if that's even possible. You know, I suggested
[02:16:08]  this on Twitter and people are like, I don't think you can do it. And I'm like, well, I've done, I've done MobX with a
[02:16:14]  solid-like renderer. I've done Vue. I've done Knockout. I've even done RxJS with a solid-like renderer. So
[02:16:21] , you know, and they're all super performant, like JS framework benchmark. I don't know. Do I, do I ever, do I ever show this
[02:16:28]  off? I can't remember, but like this is sometimes kind of fun, right? Because you know, everyone knows how I'm skeptical of framework agnostic libraries,
[02:16:39]  right? But I built one with DOM expressions. So it lets you switch what reactive library you have. And I actually, even though the RxJS one isn't
[02:16:47]  here, we have Vue and let's put Vue proper in. And we have React MobX and let's put MobX JSX in. And then we
[02:16:58]  have Knockout. What do I want? I want Knockout. K, K, K, K, K. They changed the alphabetical, which in a more logical
[02:17:05]  way, but also probably not logical for me because I'm used to it the other way. And where is it? Let's throw solid in there and always vanilla for
[02:17:18]  good score. Okay. There we go. This is a really basic demo example, but it shows where I've taken a solid like renderer with the reactivity from
[02:17:29]  a third party library. And it shows what it, how it usually works with the framework of choice. And I was thinking it may be nice to add preact to this
[02:17:37]  list. So like, so essentially, yeah, it's funny how to scroll up, see where everyone is. Okay. Yeah. So essentially like, look, solid
[02:17:50]  is here. It's very fast. Everyone in the stream knows that. Vue RxJSX, which is Vue's reactivity ran through DOM expression,
[02:17:59]  my library to do a very solid like render is actually only a small point behind it tied with Knockout. This is freaking Knockout JS from 2010. And then MobX
[02:18:11]  with its proxies, it's just this tiny bit behind that. But if you compare these, and maybe I'll blow this up a little bit so people can
[02:18:16]  see better. With like the native one, you'll see like, Vue is here, right? So like, this is, this is maybe Vue Vapor will
[02:18:28]  land here. Like this is, this is what happens when you take Vue and you remove the virtual DOM or, or MobX and you revert, remove the virtual
[02:18:37]  DOM. That's like, that's a pretty significant jump. And look at Knockout. Knockout doesn't even have the virtual DOM, but it was doing some
[02:18:45]  2010 stuff here. And it's, it's, it's way, way over on this side. Um, and you know, it's, it's, it's
[02:18:53]  tied with Vue. So it's like, Knockout's problem was never its reactivity. It was that it's like DOM templating wasn't, you know,
[02:19:01]  amazing. Right. So like, if you actually look, Knockout's reactivity, um, like for partial updates is still like, this is why I stayed with
[02:19:09]  reactive programming. It was, I won 10 here. It is toasting the, the, like the VDOM libraries. Like if you want to update one style on
[02:19:19]  your page, you know, you know, like, again, this is within scale, but like, you could always make a benchmark with a hundred things on the page that
[02:19:29]  you need to update the one style for and Knockout would still be fast. Right. Um, you know, stuff like optimizing switch rows, things that react doesn't
[02:19:37]  care about, you know, but what killed Knockout is this abysmal and creation. This is what, this is what I was really scared of when Niall showed
[02:19:45]  his benchmarks so that we'd see a bit of this happening again, because obviously that I hand optimize this, but this is, this is the scary part with reactivity.
[02:19:55]  See this memory, even with solids render, we couldn't completely cap it, but we over half the memory from Knockout react mob X to here again, you can
[02:20:04]  see the memory for reactive libraries has a, has a hefty cost. Obviously solid does a pretty good job here, but if I was just to take something like, let
[02:20:13] 's just take react or let's just take typical react hooks. Yeah. Let's just add that to our list. Um, but you're going to see actually,
[02:20:24]  maybe this isn't that impressive, but I mean, reactivity adds a nice little chunk on top of react. It looks like view is already reasonably optimized. My point is
[02:20:32]  if, if I add like actual performant V doms, like one more like Inferno, um, like block dom, what you're going to see is that
[02:20:44]  they can, their memory usage is, is, is slightly nicer. I mean, solid gets pretty close here actually, but actually these days in Chrome, it looks like
[02:20:54]  solid's pretty good. Okay. Nevermind. Solid's great. Sorry. Um, please don't take my JSX away. Uh, Ryan's family is going
[02:21:09]  to singly handle sushi sales. Yeah. I'm hoping it's sushi. I was away last week. Um, but yeah, I think it's sushi this week
[02:21:20] . Do all fermented gluten doms support NSFX? Um, not directly necessarily. I mean, they don't not support it. I needed to do some wiring myself.
[02:21:38]  So maybe, but like they technically worked. I just need the, like I have to base the, the work to create, take a reactive library and make it into
[02:21:47]  solid like library. I think that might be interesting on stream. We'll see how much time we want to go, but it has to at least work nested. So
[02:21:55]  maybe we'll like throw preact signals in a, in a playground or something. We can play with it. Um, do you have any predictions or line up with the
[02:22:03]  spectrum? I, uh, react, uh, react forget, I don't think it's about performance at all. It's like, just like making it less ins
[02:22:09] ufferable. Like they'll make performance improvements, but I, I imagine like, it's not like it's going to suddenly catch up to Svelte or something
[02:22:18] . Like it's, I don't, I don't expect very much from, from them. Like, I guess, I guess Svelte would be like maybe the
[02:22:26] , the, the, the max point. So let's, let's pretend let's, so let's bring Svelte into our, our set of frameworks here.
[02:22:35]  And if we bring Svelte in Svelte sitting at 128. Okay. And let's bring preact in just to kind of see where we're at.
[02:22:46]  Preact should be a little slower. Okay. Sweet. So preact is about 143. My hunch is if, if, if, if react forget does a really
[02:22:55]  good job. Yeah. You know what? Yeah. Like split the difference. They, in this benchmark, I'm, they might be able to get to about where pre
[02:23:02] act is, I think is probably, that's probably best case. I'm, I'm, I'm just going off my hunch. I'm not always right.
[02:23:10]  I was right about preact signals. Um, but I, yeah, my, my gut feels, which is still huge because if react gets to preacts level of performance
[02:23:20]  or thereabouts, um, you know, that, that, that could make an impact, but I think it's mostly an ergonomics thing. I'm thinking best case
[02:23:28] , it might not even get there, you know, so to speak, because yeah, I mean, because they're not changing the underlying engine, right? So like
[02:23:40] , what's the, what's the fastest stuff we've seen people do? What was it? Uh, legend? What is, where's it? React? Legend
[02:23:48] ? State? Is it in here? React? I thought it was merged. Huh. I wonder if they just posted the, their stuff without merging it. Hmm.
[02:24:04]  That's too bad. It's down here. React. There, there, there's a big thing about reactivity and yeah. Okay. Legend states here, but the
[02:24:14] , okay. So it's L, where is it? L-M-M-M-M-M-M. It's not here. So there's the
[02:24:20]  key. They didn't post the keyed implementation. I wonder why. Yeah. Sorry. I can't talk about it then. If, if, if it's not
[02:24:28]  keyed, it's really not really worth looking at. Huh. Okay. That's too bad. Okay. Um, nevermind. Uh, so yeah. Uh
[02:24:37] , essentially all I was getting at is that, um, I don't expect react forget to be huge on that point. I won't be surprised if they get like some
[02:24:48]  improvements though. Um, I haven't looked, but everyone that I've talked to, it's, it's the same thing. Even like the guys over at Build
[02:25:03] er, they're just like, this is not, this is, service workers are not viable for the actual UI rendering. Um, that's at least not the way the
[02:25:13]  serialization costs. I was talking to Dom from Inferno about it and they did experiments on Facebook before they went to Fiber with web workers. And obviously guys at
[02:25:22]  Mitosis serve service web worker, um, sorry at Builder, you know, with Quick and Party Town are like web service worker ninjas. And they still are
[02:25:32]  like, no, this is not where things are. I know people keep on looking for this like secret, um, like performance unlocked. Wasm's the other one.
[02:25:40]  I'm just, I'm sorry to inform you. Um, that's not the case or anytime soon. That's not the case. Uh, we, we have
[02:25:48]  what we have. Um, if you saw the benchmark for fire ship, it's this, it's this benchmark probably right. Vanilla is the fastest and then solids
[02:26:11]  right there, but look blocked on V dom basically neck and neck with solid. So it's not just a pure technology thing. Yeah. They've removed some features.
[02:26:29]  It's, it's kind of interesting because this benchmark shows how Preact is faster than react, but in actual other benchmarks I've seen where Preact isn't as fast
[02:26:37]  as reactor very comparable. So it's interesting that like, there's different aspects of the reconciler that I think react does better, but probably a much, much,
[02:26:44]  much, much, much larger to do. So it's like not worth it for a lot of cases. Um, but yeah, I mean, Preact doesn't
[02:26:50]  have concurrent road or fiber or all that, but react didn't have those before either. I think most of the size differences, if you, if you look at react on
[02:26:59]  MPM, I'm don't, I hate using bundle phobia. I'd rather use something else. But if I, if I look here and I find react,
[02:27:04]  you're going to find that react is like three kilobytes or something. Okay. 2.5 kilobytes. So this is not where the cost is of react
[02:27:12] . It's actually react dom and react dom is 42 kilobytes at this point. So most of the features that Preact shaves are going to be like weird
[02:27:23]  legacy react compat kind of stuff that isn't just using the underlying platform. Um, and, and some, you know, some other stuff. I just, I just wanted
[02:27:31]  to kind of point out that like react and Preact actually aren't that different in size, except for when you actually consider where like the heavy implementation working lifting or Pre
[02:27:42] act keeps closer to the platform. What makes workers slow is the serialization format of moving the information back and forth between the two. It just, I was talking to
[02:28:02]  Adam. I actually met up with Adam from stents soul and from the creator of party town. And he's like, he's like best case. It's like five
[02:28:11]  milliseconds or like maybe, maybe three milliseconds. Like that communication, like the overhead of doing that communication just will never make it one. Maybe not never, but like the way
[02:28:20]  things are today is just not going to make it. He's like, we thought about like putting the full beat on people have actually taken party town and try to put
[02:28:26]  like react and party town and stuff like that. And it's just like, and then be like, why is this so slow? It's just, it's, this
[02:28:32]  is just not. Yeah. I mean, you could offload expensive computations, but those computations have to be worth offloading as in they have to like,
[02:28:42]  you have to be like, I'm willing to wait three to five milliseconds to, to, you know, to, for them to do their thing. And in doing
[02:28:50]  so your framework has to be async as well to support these things coming in. And don't get me wrong, concurrent rendering has those same kind of constraints in terms of
[02:28:58]  need for async, but I just, yeah, I mean, I'm not the expert on this. I'm just feeding back what I've heard from talking to them
[02:29:07] . Oh yeah. Hyper app. You want me to put a hyper app in here. Hyper app is very small. And it has good performance. I remember this.
[02:29:23]  It's kind of disappeared the last couple of years because I think version two didn't meet as much fanfare, but hyper app has good performance. It comes in above view
[02:29:34] . It's actually, this is, I always liked this one because it's basically like a VDOM-ish kind of thing. I consider VDOM,
[02:29:41]  but it like, it basically slides in here right ahead of Svelte and view and look, actually the memory profile actually isn't any better than solid. It's actually
[02:29:55]  worse, but it's code size. It's just insane. 144% That's smaller than Svelte's 146.2, and obviously Solid's about 14
[02:30:06] 9. This is all in, but yeah, really, really small for small demos. And I think Hyperactive scale's better than Svelte's, so yeah,
[02:30:15]  if you want something small, that's a good example. Bundlephobia's fine, it just doesn't show you tree shaking. That's why I'm critical
[02:30:32]  of it at times, because there's a great thing called bundlejs.com, I think. I know because it's written, I think, "AstronS
[02:30:43] olid", but it will tell you ... Here's the thing. Let's just do this for a second. This is worth talking about. How big SolidJS?
[02:30:51]  Do you guys know how big SolidJS is? It's 7.3 kilobytes, it's put on some weight. Right? And the thing
[02:31:02]  is, this doesn't even show all of SolidJS that we package. This doesn't show stores, it doesn't show our web. This is literally just this.
[02:31:13]  And Svelte does the same thing too. If you go to Bundlephobia and put in Svelte, what you're going to find is this 1.
[02:31:22] 7 kilobytes, but this doesn't include Motion or any of the other sub-packages on the main thing or internal or any of that. So I just
[02:31:29]  wanted to kind of show that what you see in Bundlephobia is only the main export. The second thing is, yeah, this is 7.3 kilobytes
[02:31:39] . But how is it then that I've shown, like, to-do MVCs that are smaller than 7 kilobytes, right? React's tree shaking is
[02:31:49]  garbage or non-existence to my knowledge, so you do always get the 40 in. What I love about something like Bundle is you can go, like,
[02:31:55]  okay, let's pick a package, let's say SolidJS, okay, let's add it, sweet. And right now I'm exporting star, but let's
[02:32:05]  say I only want to export create_signal, create_memo, and create_effect, okay? Let's build this. There we go, our
[02:32:21]  bundle size is 1.09 kilobytes, or half a kilobyte gzipped. So, like, this comes up a lot because people kind of come in
[02:32:35]  and they're like, okay, well, let's forget about Svelte for a minute, let's look at Preact, right? Preact. Four kilob
[02:32:42] ytes, this is much smaller than seven kilobytes. But the reality is when you build most apps, small demo apps, Preact scales actually really well, I
[02:32:51] 've shown that in a different comparison, but when you build, like, small demo apps, usually Solid is actually slightly smaller because, like, the core library is actually smaller
[02:33:00] . So, you shouldn't really rely on this because you don't, like, the core library size doesn't matter that much, like, whether it's four kil
[02:33:06] obytes or five kilobytes or whatever, but something like bundle.js.com lets you actually see the cost of the code that you run, which is why I
[02:33:14] , like, bundle phobia is, like, it's misleading, like, because people are like, oh, Preact's half the size of Solid, and it
[02:33:25] 's, like, not really, not in practice. It says the benchmark here about bundle size, yeah, I mean, it affects the startup metrics thing, it's probably
[02:33:39]  the biggest decider. Did Preact in here? So, yeah, in this example, all in, for some reason, Preact is five kilobytes bigger
[02:33:46]  than the Solid implementation. These aren't gzip numbers, I think, but these are just minified, but, yeah, anyway, just wanted to, yeah, I
[02:33:58]  mean, again, this is a silly demo. Bundle size of the main library only matters within the percentage of your target output. So if your goal was, like
[02:34:08] , Taylor, and you needed to get 20 kilobytes, then four kilobytes matters versus 40 for React. But otherwise, like, once you get past a certain
[02:34:17]  point, it's not, like, the size of the runtime isn't gonna matter that much. Okay, yeah, I'm just catching up on the comments, people
[02:34:37]  talking about ways to get more out of stuff. Um, especially, uh, with the Hoasm thing, and the web workers. Yeah, it does, but,
[02:34:51]  like, it's not, I don't know, like, do we have here? Oh, export an analysis error, let's try another one. No, this
[02:35:03]  one's not ESM, okay, Preact? This one does do ESM, though, yeah. This has been my experience. Sometimes I'll find libraries that have
[02:35:13]  it, but then everything will be, like, 100%. I haven't found it very useful, and I can't make any comparisons because, yeah, yeah, I don
[02:35:21] 't know. Mithril is the weirdest ever. Mithril is kind of cool, it's just, it's for people who really, really dislike templating
[02:35:35]  languages. Mithril has a lot of, there's elements of Mithril that I really liked in design, and sorry, we're kind of tangenting a bit
[02:35:41] , but Mithril really had that idea of, like, function, component, and closure for state way back. That's why I think when I, when,
[02:35:49]  with Solid on Twitter we did the, like, the parentheses as, like, the, our, our one word meme thing when that was going around, Mithril basically
[02:35:58]  quote tweeted us, like, like, like, yeah, yeah, we were the originals on that, so, I mean, Mithril is interesting, um,
[02:36:07]  yeah. Anyways, yeah, obviously I should do that, Preact includes both, like, the Dom part and not, which is why the difference, but, yeah
[02:36:16] , if so, this is the problem, someone goes to Vinyl phobia and they're, and, like, they see the complete wrong stuff. Um, no,
[02:36:27]  uh, ESM will get you there most of the way. Solid does some really, really clever stuff, like, where we can, like, use dead code elimination
[02:36:42]  in combination with tree shaking to actually, like, if you don't use concurrent features, they actually get plucked out of code. I haven't shown this in a while
[02:36:50] , but it's, it's really quite cool. Like, uh, Rollup and some other bundlers, but mostly Rollup is so smart that it, it can
[02:36:59] , like, pluck out code right in the middle of your code because it realizes a certain branch will never be missed. Solid is heavily optimized for tree shaking. Yeah,
[02:37:10]  Preact hasn't been, they haven't updated that. They've been the 4KB alternative since Preact 10. Um, I don't know why they say
[02:37:16]  3KB, but they've been the 4KB. You, you, you, they're, they're vigilant. It never gets over 4KB. I
[02:37:21]  gotta say Preact guys are the most vigilant, the, also Preact guy, Goober, the style library is all, like, they are vigilant. They make sure
[02:37:28]  that, like, they never slide that thing. That's, it's all, it's up to 7.3. When we did the original release, I think it
[02:37:33]  was 7.0, like, we got 0.3KB. But, like, Preact will not let that happen, so, um, but yes,
[02:37:41]  I, I think at this point it should say the 4KB alternative, because this also doesn't hook, include signals or hooks. And what I found when I was
[02:37:50]  doing a comparison for size, class components are generally larger, so, like, you're, you have more benefit to use signals or hooks to get smaller implementations.
[02:37:59]  So, like, it's actually the 4.5KB alternative to React, but, I mean, I don't know. It should be at least 4, not
[02:38:08]  3, but, it's, I mean, we're, we're, we're squibbling over half a KB here, like, who cares? Um,
[02:38:14]  where, how are we doing chat? Uh, we're, let's size wars commence. Well, if you want to see size war, I put a pretty cool demo
[02:38:26]  that I'm going to talk about this week in JavaScript. Yeah I mean, the funny thing is, I benchmarked, um, it, and the signal edition,
[02:38:40]  as I said, like, whether you add hooks or signals, it's about the same edition, so, like, it's, uh, the hooks version and the signals
[02:38:48]  version of Preact are almost identical, um, in size, so, it's kind of, like, potato, potato, pick which one you want to work with
[02:38:58] . Yeah, I mean, I, I don't know yet. We'll see. Um, does the size on that part? Depends. Yeah, I
[02:39:12]  think that's a good thing. Yeah. I am conscious of size, at least. Right? Like, I, I do want to point that out, cause,
[02:39:25]  like, there are frameworks that talk a lot about size, and then aren't actually as small as you'd think. Like, um, I actually went through and updated all
[02:39:35]  my, uh, hacker news demos this past week. Um, and I was actually, I was surprised at what I saw in terms of size of some of the frameworks
[02:39:42]  that I thought would be really small. Yeah. Yeah, there's motivation. Exactly. This is, this, this is, this is how you stay slim. Incent
[02:39:55] ivize the community. Um, this is a complicated question. The answer to this, the simple answer is it renders once. Um, my, my, my
[02:40:09] , my talks that I've been giving, um, recently, um, not the one that's coming up at ViteConf, but the one that I gave in Finland
[02:40:17]  and the one that I'm going to be giving it, uh, front end live, um, uh, really dig into this and because I actually show how you don
[02:40:28] 't need to react forget to get better performance. Essentially. That's the whole talk. Um, so yeah, I mean the, the answer is if you render once,
[02:40:36]  you don't, you don't need all this stuff generally. Okay. So people are just chatting to the logos. Okay. Let's, let's, let's,
[02:40:50]  let's see here. Actually, can I, again, we. Uh, we, this is, we shouldn't trust here, but I want to know, is
[02:41:04]  it like this? Yeah. Preact signals. Interesting. So when I've half a kilobyte for performance, 1.1 is much, much more performant than
[02:41:17]  what they were doing before, like big jumps. So, yeah. So there you go. Bundle phobia told us all, and it's still not analyzing.
[02:41:32]  Oh, signals core. Okay. Let's get it. Let's get even smaller. Signals. Core. There we go. 1.5 kilobyte reactive
[02:41:44]  library. That's pretty good. Um, yeah. Yeah. What else? What would they have? They have computed signal memo effect. What else do we have?
[02:41:54]  Um, batch. Let's build. 1.13. Yeah. I, there's these tools are only so valuable, but I I'm actually interested in preact
[02:42:11]  signals. I want to look at them a bit more because I want to know if we have the potential. We might not build it today. Cause we might not have time
[02:42:16] , but I'm kind of, I want to, I want to actually look at this. I I've talked about them high level before, cause I talked about the capabilities
[02:42:22] , you know, and talked about this release announcement, but I'm actually interested in what features they have because most libraries that do reactivity aren't actually suitable for,
[02:42:31]  for solids render. Um, and the ones that some are close. MobX was actually surprisingly really flexible and handled things. Well, there's like situations, which I need
[02:42:42] , which most react libraries just break on. But I want to like ignoring even that I want to know what, what I have to work with. Okay. So we have
[02:42:51]  signal. Great. Um, we have blah, blah, blah, blah. We have, what else do we have? Deriving state computed signals. Okay. So
[02:43:01]  we have our memos computed. So that's fine. Um, do they notify always? This might be something we have to check. Okay. So let, let me
[02:43:09]  pull up a scale draw. What do we need as requirements to understand for, let's see here. We're going to preact. No V Dom. What, what
[02:43:20] , what, what do we need here? Um, so make a mental note check if computeds always notify. Okay. We might need something complicated if that's the
[02:43:33]  case. Okay. What else do we need? Um, all right. Okay. It's into one. They have a batch. That's good. They have batch.
[02:43:41]  That's good. They have batch. That's good. Signal computed effect batch. So just the four APIs. Okay. So other thing we want to check, um
[02:43:50] , check if we can in fact nest effects. Okay. Three. Um, yeah, they have no untrack API. It looks like that's actually really awkward
[02:44:15]  on track. Sample. See, maybe they'll mention peak. Okay. What do they have for peak? Um, read signals without subscribing to a rare occasion. You
[02:44:25]  need the right signals. Not that rare. Sorry. Um, but when you bring on the signals, you peak, get the signals current value with subscribing. Okay.
[02:44:33]  So they have it on it. Mm. Yeah. I mean, it's about as rare as I suppose, not including your depths and your dependency array in react. But
[02:44:47]  if you think about it, every on mount is that. So it's like kind of rare, except for in certain cases where it's just like super common. Okay.
[02:44:56]  I don't think I can do anything about that. We'll just have to like YOLO it. And then like, if it, we have to be very
[02:45:03]  careful not to cause stuff to track. Um, where it's much easier. I don't think it's worth patching their prototype to get on track. Like we could
[02:45:13]  make it so that like every signal, um, calls peak under the hood instead. But yeah. Okay. Okay. Okay. So another note, can we do this
[02:45:25]  without on track? I actually had to do some fancy stuff in view because Evan was pretty against adding on track, but he had a way of going stop and resume reactivity
[02:45:35] , like a low level primitive. And because he exposed it, I was able to make on track myself when I made the view version. Okay. Okay. Um,
[02:45:44]  okay. So that's not bad. Okay. Okay. Can we do this without on track? I think that's the top level stuff. I'm glad they have batch
[02:45:50] . That's, that's useful. Cause ideally, as I said, I've made JS framework benchmark implementations for all of these. And it'd be interesting to
[02:46:03]  see if what Preact would like, what solid would look like if Preact was at its core, it might not be possible. I mean, I already imagine there's
[02:46:16]  some scenarios that wouldn't work, but okay, with this armed with this, let's, let's make a few tests. Um, uh, what do I want
[02:46:26]  to use? I've been getting really into stack blitz because of the ability to go in and like edit the node modules. It's like really cool. But for now
[02:46:35]  I'm going to use code sandbox because I can make vanilla templates. I just know how to make vanilla templates easier. Um, I'm more familiar with it. Except like
[02:46:44]  right now, I'm not going to figure it out. Vanilla. Okay. Okay. So testing Preact signals. Okay. So what do we want to do
[02:46:58]  here? We want to add Preact signals core. And let's do something simple. Like what's, what's our simplest thing? Import signal from Preact signal
[02:47:22]  core. Um, it is interesting. We probably should look at the source code for Preact signal core just in case it has more stuff than they're documenting. This
[02:47:33] , this might actually make a difference for us. Um, core GitHub. Uh, cause sometimes. Oh, the site I was using was, uh, bundle js.
[02:47:55] com. Sorry. I didn't make an HTTP link. Um, let's see here. Uh, is this the core? It's like, uh, it says
[02:48:17]  build core. So the core is in here as packages. Okay. It's mono repo core. Got you. Okay. Source. Index. I love this when reactive implement
[02:48:28] ations still fit in like a single file. Okay. Signal read only signal. Those are types. So essentially signal computed effect patch. No, this is all we got
[02:48:43] . Okay. So not much leeway. We could patch it if I really wanted to, but that's no, I don't think it. I think as long as
[02:48:52]  we can do a couple of these other things, it'll be worth it. Let's, let's just, let's do something. Let's go. Uh,
[02:48:57]  count equals signal zero. And then let's do something like effect, um, console dot log signal dot value. And then we, or sorry, count dot value.
[02:49:19]  And then we just, what do we do here? Uh, we'll just set interval, um, count dot value plus plus every second or something. Let me put in
[02:49:35]  the console. Okay. Good. Okay. So we're up and running zero, one, two. Okay. All right. Hopefully some of you still with me.
[02:49:43]  Okay. So first thing we have here is that, um, we have a working environment. Okay. So what, what, what did I want to check? I wanted
[02:49:55]  to check if computers always notify. Okay. So yeah, let's, let's see here. Um, let's, let's add a computed in the middle that
[02:50:10] , uh, what's the best way to do it? Cause I, I want it to be something that I don't want module because I'll swap back and forth.
[02:50:23]  I want like, uh, I'm like, like blanking right now. I just want, I mean, I could literally just do something like signal dot value comma
[02:50:40]  five, and then go const, um, unchanging equals that. And then put this in here and then refresh this. Oh, I think that answers my question,
[02:51:09]  but I didn't do it right. Okay. So it runs ones and five. Okay. Sweet. So no. Okay. That's where the primitive value, let
[02:51:19] 's do something like, um, let's do, let's see if it, if the same is true of, I'm going to make a constant object. Not one
[02:51:28]  that changes every time, but let's just make a constant object. Let's make this an object. Okay. Okay. Also. Okay. An array. Curiosity.
[02:51:42]  If it treats it any differently. Nope. Sweet. So by default, computers do not notify on change. So, or on no change. Like, obviously if I
[02:51:57]  change this to like, something that changes every time it's going to do it. But, um, oh, interesting. Oh, interesting. It didn't. Oh
[02:52:09] , damn it. I somehow got an old version where I wasn't listening to count. Sorry. Let's, let's try that again. Okay. Five is fine
[02:52:21] . Doesn't do it. Um, object is fine. Doesn't do it. Okay. All right. So, and if I put something in line, it obviously will
[02:52:31]  do it. Okay. Cool. So question, question one is answered. Yes. They do. Or no, no, no, they don't. Which is good
[02:52:54] . This is a quality we, we, we, we want. Okay. Check if we can nest effects. Okay. Let's see if we can do that.
[02:53:05]  Where are we again? Okay. So the best way to do this is to have two signals. Okay. So the best way to do this is to have two signals.
[02:53:23]  Count two and put 10 in here. And then what we'll do is in our effect, we're going to console log count dot value. Okay. Okay.
[02:53:50]  Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay. Okay
[02:54:08] . Okay. Okay. Okay. Okay. Okay. Okay. Okay. So internal effect is the effect. Okay. Okay. Okay. Okay. Okay. Okay.
[02:54:24]  Okay. So. Okay. Okay. Now we gotta, we gotta do, we gotta make this a little bit more interesting. Here you go. Outer. Inner.
[02:54:32]  Okay. Okay. Okay. Now we gotta, we gotta do, we gotta make this a little bit more interesting. Here you go. Outer. Inner. Okay
[02:54:41] . Okay. That should just be updating the inner. Okay. Good. Good. Good. And then, what we're gonna do is we're gonna go let dispose
[02:54:48]  equal nothing right now. Okay. And then we're gonna go const, or we're just gonna go dispose equals effect. I think they have a dispose function. And
[02:54:55]  we can do something like if dispose, then dispose. I think. And then if we do this. Okay. Okay. Okay. Okay. Okay. Okay. And
[02:55:03]  then we're gonna go const, or we're just gonna go dispose equals effect. I think they have a dispose function. And we can do something like if dispose, then
[02:55:16]  dispose, I think. Okay. And then, if we do this, we should be able to, actually I'm gonna move this up right to the top of the
[02:55:33]  function. We should be able to set a different interval here for a value to maybe three seconds. And not all hell will break loose. Okay. I think, I
[02:56:00]  think this has the qualities we need, like I'm nesting effects here, and as you can see like every three, it runs an outer inner. It's like
[02:56:18]  an outer 'cause of inner kind of scenario. So you'll get like a double inner on the same thing. You'll see like inner 30, outer 20, inner 30
[02:56:25] . But essentially this is good. Because like, if you want to see what it looks like when it's not good, is just comment out this dispose function. And then
[02:56:34]  stuff should get out of hand before long. Yeah. Yeah. See how every inner now is like multiple, like it's got the like three or number beside it.
[02:56:46]  Maybe I'm not quite big enough here, but yeah. Okay. Okay. So yeah. So just if disposals handle properly, then we can nest effects in pre
[02:56:56] -act signals. Yeah. Yeah. I mean, okay. So the question is, how do we do top level dispose? Um, cause it registers itself. I
[02:57:13]  mean, yeah, I think, I think I can work with this. I love how you, you all are conferring with my wife and make sure that I make
[02:57:31]  it to dinner. Um, thank you. All right. All right. But what I'm getting at is, I think to answer our questions is, can we nest effects
[02:57:48] ? Yes, we can. Okay. So I, I think we have what we need here. I actually, um, that's good. That's good. Now
[02:57:59]  the question is how much time do we have to actually try to whip this up? Cause right. Cause yeah, I'm still thinking about this week in JavaScript. This
[02:58:13]  might be just like a fun topic in itself, but just to kind of show, show everyone what I've done here before is like, I actually updated these all yesterday.
[02:58:23]  Cause I was, I was like thinking about this and I was like, well, what, what does it look like? And I think view and, uh, I think
[02:58:32]  view and preact look really similar. And what, what, what, what does a library that, um, does this get? Well, if you use DOM expressions
[02:58:41]  and you set up the way that I do, you not only get a JSX transform, but it also works with HTML and hyperscript the same way solid does.
[02:58:48]  Um, so the SSR stuff generally, I haven't implemented for these other frameworks, but in theory, you could do everything solid could do, um, on the rendering
[02:58:56]  side. But the key to it is I, I have these things from DOM expressions that I kind of bring in and then like the wrappers to create the H and
[02:59:06]  HTML, but 90, and then the types from JSX, but 90% of the work goes in this one, um, 300 or 400 line file. So if I
[02:59:15]  can write this file in preact, then we're good. And what I have to define for this file is I need to create untrack, which I guess we
[02:59:23] 're not going to have. So I'm hoping, see, see view, I had to do some fun stuff. Um, I need to create root. I need
[02:59:34]  to create a cleanup function. I need to create my own custom version of effects that are self cleaning. Um, usually a custom version of, of memo. But in this
[02:59:46]  case, I don't need to do this because preacts already does this properly for us. Um, if I want to do the JS framework benchmark, I have to
[02:59:54]  make my own version of create selector. And then I need, I added lazy for fun and context. Why not? Um, split props, you know, all the
[03:00:03]  fun stuff. But I also need to, uh, make a version of map that does memoize mapping to make sure like, it's like solids for control flow essentially.
[03:00:13]  Um, but again, you can see even in here, I rely on untrack. I use untrack a lot. So I think, I think there
[03:00:24] 's a potential that everything implodes on us if, if we don't handle this properly. Um, is sort of what the thinking is. See me with those TS
[03:00:36]  generics. Yeah, I, I don't even know if I'm doing this stuff right, honestly. Um, but, okay. I'm trying to think. Cause
[03:00:48]  this, this, this will be a bit of a task to do. I mean, I could almost copy and paste this and almost have it work, but then I
[03:00:54]  need a setup to actually test it. Um, without publishing it. Um, I could use something like code sandbox. Um, because we could basically export the runtime, but
[03:01:16]  yes, this doesn't seem like a quick exercise. It isn't, it's not super quick, but it isn't super long, but it's probably more than
[03:01:24]  I have time to do in like half an hour. This is this, I think I could do this in, in like an hour or so. And I think that,
[03:01:33]  but then I want to benchmark it and stuff. Yeah. Maybe, I don't know. Yeah. I think this probably needs its own attention. Fair enough. You all
[03:01:42]  are correct. We did do the research we need though. The answer to our questions is other than untrack. Um, it does seem that preact could be
[03:01:54] , um, a good candidate for this. Um, as you can see, it doesn't actually take a ton of work. I mean, I know what I'm looking
[03:02:04]  for exactly, but like the, like to get self disposing effects takes a little bit of fun. I have to introduce my own root disposal thing. Um, and
[03:02:14]  yeah, yeah, that's, that's a topic on its own. Okay. So maybe not doing this right now. Fair enough. Fair enough. But we're
[03:02:22] , we're set up for next time. Um, yeah. Uh, what was there something else I wanted to look at? I mean, I could, I, I
[03:02:31]  could talk a whole bunch about a proxies, but I think I'm going to do a solid specific stream coming up. Solid 1.6 is actually closer than you
[03:02:37] , you all realize. Um, there's two really big features that I wanted to get into solid 1.6 and I'm, I basically have the prototype or like
[03:02:47]  the basic version of them done. And I need to test it more and I need to write docs or solid start, but, um, the two big headlines for, the
[03:02:58]  two big headlines for 1.6 are going to be fixed spreads for native elements. I'm finally consolidating that so that we don't get any weirdness on there
[03:03:10] . Um, which is actually really complicated and exercise and understanding proxies. And then the other aspect is better support for partial hydration. Um, we've, we,
[03:03:21]  we, uh, Nikhil made a demo that I showed off on stream a little while ago, but I, we actually, I was able to look at it from a
[03:03:29]  solid core perspective and actually basically get the, the astro like functionality where it does proper partial serialization. It doesn't ship stuff on needed. So now the demo
[03:03:38] , as I, I shared on Twitter and we'll talk about it in a bit during this week in JavaScript actually is fully functional. You know, like, I mean,
[03:03:45]  there's, there's some interesting gotchas around the routing. We're still working on, but essentially it is like the, the, at least the hydration partial islands thing
[03:03:55]  is equivalent to, you know, a lot of solutions out there. So I'm going to basically consider, um, 1.6, like our partial hydration release when
[03:04:03]  we officially support partial hydration. Um, so, um, I, the, the, the, the two big things is both the ability to save the serialization. And
[03:04:12]  I also created a mechanism so that we can pass context so that nested islands can talk to each other through, through context. Um, which is something that, um
[03:04:20] , some of the other islands frameworks don't do because they're not specialized. But with this mechanism, um, I can go to astro and then we could probably get
[03:04:31]  the same feature in astro. This came up because of a conversation with Dan Abramoff, who was asking, who was talking about the shared tree. And,
[03:04:37]  and I was like, Oh yeah, it's like a shared tree. But then like, we realized what he meant was like, how do I, one part of react
[03:04:43]  talk to another part of react. And I realized that was really easy to do. I'd already done this for web components with solid, but, um, we haven't
[03:04:50]  really implemented in any of the islands. Astro hasn't either. So I think it might be really cool demo, but yeah, I'm going to, I'm going
[03:04:55]  to, we'll, we'll look at that. Like, uh, when we, um, dig into a solid 1.6, which let's see here.
[03:05:03]  I'm around next week. So I'll be doing a stream on the 21st. I'm around. Yeah. I might actually be the way the conferences fall. I
[03:05:10]  might be around all of this month. Um, so later in this month, we'll do 1.61. I would love to talk to someone from Tamstack.
[03:05:18]  I got to figure out I could get Tanner on, but I feel like, well, that would be an amazing stream. I'm not sure if we'd get into the
[03:05:24] , I want to talk to someone from Tamstack. Um, I wonder if we get into the details enough. Like I might, who I might want to reach
[03:05:31]  out to the team who actually worked on solid query. Um, you know, specifically and see if I can get someone from there to chat me on the really specific details.
[03:05:41]  I think another interesting one is X state. Our X state integration has been going on for like six months, but it's, as I said, it's, it's
[03:05:48]  crazy. Like there, there, there, this is like the, this is maybe it's the first fine grain state machine. And I think that would be incredible to
[03:05:55] , to kind of go through. So anyway, um, I'm just, I'm just rambling stuff right now. So let's get ready for this week in JavaScript
[03:06:01] . I'll close this stuff down, but I'm very happy that preact could be a potential candidate, um, for a solid like render. So we can see
[03:06:10]  the fastest we could make preact signals go. Cause yeah, I think that'd be really cool to kind of be able to add it to a chart like this and see
[03:06:18]  how fast preact is without preact, you know, kind of similar how fast view is without view and whatnot. So really cool. Um, okay, let's
[03:06:28]  get that set up. Yeah. I caught my notifications are off the hook here. Sorry. It's giving me two seconds here. Maybe I should set this off, off
[03:06:41] , off screen, but someone was mentioning that Axios 1.0 was released and I didn't, it didn't even cross my radar. So apologize to, to
[03:06:49]  anyone involved with that. Um, yeah, we talked a lot about quick last week, if I remember now this week, we really want to talk about another new free framework
[03:07:06] , um, Sloyd, um, which will come up. Yeah. Like the fetch library, apparently it just hit 1.0. Someone mentioned earlier in chat.
[03:07:14]  Um, but I mean, I guess that that would be news, wouldn't it? Like, I, I mean, someone could be just pulling my leg here. Three
[03:07:27]  days ago, Axios releases 1.0. There you go. Yeah. So this is legit. I have no comments about this. I don't even think I've
[03:07:37]  ever used this library. Um, I, I mean, I know what it is. I've used competitors. Yeah. I don't think I can give enough on
[03:07:42]  this one this week in JavaScript, but yeah. People are saying it was like abandoned and then new com. Is there an article? a bunch of TypeScript stuff.
[03:08:03]  Stack traces. Huh. A lot of people involved. I wonder like if it had been sitting like that for a long time. You know, and then that finally it was
[03:08:17]  like, okay, it's release time. You know, well, I mean, we can confirm that, right? Unless this is the beginning of the change log.
[03:08:26]  It is. That's funny. Okay. October 4th. Okay. October 4th. Let's do some detective work. Okay. Well, I mean, it
[03:08:40]  does look like it's been regularly getting a stream of commits. Okay. So they've been planning this. Yeah. Okay. Okay. Okay. So that's event
[03:09:03]  source or something else. Okay. Yeah. I don't know. Do they, do they do releases sometimes on GitHub? You? Okay. Here we go. I
[03:09:19]  wonder why they added a change log for this one when it's on the release notes. Okay. So the 1.0 alpha was May 31st. So this has been
[03:09:31]  like months in the planning and then, okay. Okay. Yeah. So this has just been, this has just been trucking along. They just decided it was 1
[03:09:39] .0 time. Good, good for them. Okay. It looks like they're doing releases like all up to that. Yeah. I mean, we are where we
[03:09:59]  are. Right. Um, fetch and stuff and the, the consolidation on the request response model and stuff. Anyway. Um, but yeah, good for them. Exactly
[03:10:11] . Okay. So, okay. Let's, let's do that. Let's do this. That. that start there second bookmarks okay start there and then see
[03:10:40]  is there anything happening solid this week i can't remember it was montreal was big david did an amazing job presenting solid to people to meet up but let's see
[03:10:54]  all right i'm like i usually use my link to get to solid but i changed my my my description i don't know if anyone gets the joke i feel like i'm
[03:11:04]  too much of a twitter nerd for people to actually notice that what what my joke is here um i mean people have been talking enough about reactivity but just it was
[03:11:22]  it's actually a throwback to um one of dan abramoff's uh profiles that he did actually had up for i think over a year around the time i joined twitter
[03:11:35]  um yeah david david yeah i don't know native script i actually don't have a ton on solid this week maybe i'll just start there okay cool um
[03:11:55]  let's full screen that get ready for this week in javascript yeah you got the dan abramoff reference no you didn't for a while there he was like i
[03:12:09]  didn't create react he him it was the kind of joke because everyone i guess people attributed that he was the creator react when he was not um so i so yeah um
[03:12:24]  let's let's get everything set up here and actually i'm going to switch to this view and can i kicking myself because i i missed on youtube you can clip a stream
[03:12:40]  for up to a week and i thought that this morning i'd be able to strip clip last week to this week in javascript i've been kind of clipping them
[03:12:46]  and hoping maybe that i'll like um publish them at some point you know separate videos but i missed this week and i like how if i'm going to download the whole thing
[03:12:54]  and edit it and re-upload it again that seems like more than i'm going to do so yeah yeah yeah i i do have that in my list for solid
[03:13:05]  i guess we can start there okay all right yeah we're good all right let me have a swig of water before we get started all right i actually love this i
[03:13:27]  think i talked about this last week though all right let's talk about this week in javascript um the past week was a lot of talk about signals um both from
[03:13:49]  preact from quick everyone talking signals and this week um it's died down a little bit but um that is definitely where things would would start but before that um i'm
[03:14:00]  going to quickly go through a few highlights of the week from solid perspective obviously the stream we saw aggrid up close and that was released this week aggrid um support for
[03:14:11]  solid which is incredible um functionality you should check out the rest of the stream if you haven't to get a good idea of what you can do with it um other things i
[03:14:19]  saw were really cool was um solid working completely on native script um basically they have this library that kind of i guess i wouldn't say emulates a dom exactly called uh
[03:14:29]  dominant dominant dominant um and in this example here we're actually like running solid on top of it like solid dom basically i think they might actually be using a universal render now that
[03:14:42]  i actually saw that but essentially and people always ask for like a solid mobile um hopefully this this boots up but um if i'm looking here yeah this looks like it's
[03:14:54]  uh there we go i mean i guess you got to do this stuff on the devices so i can't do this but you can actually see that this is using the universal render
[03:15:01] er i'm gathering for solid because these are lowercase tags so yeah no this looks like fun using native script with solid um native for solid is real so that is very cool
[03:15:14]  all right um what else was pretty cool here there's a there's a few things that i saw this one papenazzi um and i i want to highlight this one
[03:15:29]  because while this isn't solid specific um they did something really cool they built a component library for six frameworks or i guess five frameworks plus web components all at the same time and
[03:15:41]  the way they did this was mitosis so essentially he authored the components once and now he has a library that works in angular react solid svelte view or with
[03:15:51]  web components um this is kind of an interesting story because it's kind of the opposite of what we were covering earlier when we were talking about tan stack and talking about um ag
[03:16:01]  grid's ability to have these agnostic cores this is this is like what if we could compile to whatever you want like whatever target you wanted i think it's interesting because
[03:16:11]  in a sense being able to give something specific to the framework is going to be more optimal for that framework but on the other hand tying it to a common language like mit
[03:16:21] osis might have interesting constraints on what you can express um from the framework perspective right so this is this is there's an interesting tension there like i don't know like how efficient
[03:16:33]  you can make stuff um with solid for example through mitosis although i was when working a lot with sammy this week looking at how we could get stores and uh performance
[03:16:42]  in um in mitosis so it is an interesting uh conversation when you think about the different kind of affordances or ways the the dx works that are still different between different frameworks
[03:16:53]  and actually have impact you know um he was mentioning how he was having a very hard time uh with solid compared to the others because he the others he'd just be in like
[03:17:02]  react mode and just like be like you know maybe we'll we'll talk about that a bit more later but in any case this is the might be the first component library
[03:17:10]  of its kind that we've seen that where it's a single code base that outputs six different libraries that's that's incredible um almost kind of want to play with to get
[03:17:20]  an idea of what's possible with this sort of thing but you know typical components site where it shows you know how customization works it shows how to use it in all the
[03:17:32]  different frameworks um yeah i mean this is this is a really cool thing that mitosis enables and i'm glad to see someone has actually gone through the effort to actually make it
[03:17:42]  work it's like the antithesis of web components yeah i think that's a good way to put it um and everything that we're looking at it's like the
[03:17:52]  antithesis of web components it seems like like i it's interesting we'll we'll see how that how that kind of plays out but yeah if we're creating all these
[03:18:03]  headless and specific implementations but doing it in a way that they're reusable and generic without web components it's interesting i think web components have its role but i think i
[03:18:13]  think there's like a balance to be had here so yeah um very interesting um and i think we'll see more of this i i i don't know how efficient that
[03:18:23]  is but the thing is do we care if someone goes and goes i've made material ui in mitosis or like there's a few libraries people keep on bugging
[03:18:35]  me about like man mandrake or something i don't know what it's called then like like maybe like yeah i don't know this this is this this is a pain
[03:18:46]  point and it's nice to see that there's different solutions to it obviously we talked about ag grid it's an amazing product um so cool to see what it can do
[03:18:57]  um so yeah that was released david did the meetup in montreal looks like he's sweating a bit there but um i'm glad to see this kind of branch out
[03:19:07]  and also co-worker nick from netlify was there so yeah really really cool he actually if you're interested he actually went and did the like the tweet deck thing where
[03:19:17]  he goes through the whole presentation um i don't believe this was recorded it wasn't live but you can get an idea of some solid at a high glance um from from
[03:19:26]  these slides we already talked i'm speaking from modern front end anyway um i'm gonna another cool demo um people starting to play with solid start um paul i've been talking
[03:19:40]  a ton on discord and he was showing like it was he was saying like this was so easy to do with progressive enhancement he had a site with no javascript works perfectly
[03:19:49]  fine and then with solid start he's doing he's doing he's got like his animations and smoothness but the the the experience was super easy to author apparently and um
[03:19:59]  yeah it's so awesome to hear success stories like this um basically a little bit of javascript to make things a little nicer but the authoring experience same incredible authoring
[03:20:09]  experience so i'm i'm pretty excited to talk more about solid start as we continue more into the future um and similar thing here right um the i this integration with a
[03:20:23]  vessel um what is vessel i actually don't know i'm hoping there's a link actually in these tweet things but he what stood out to me was he was talking about
[03:20:35]  um all the different um frameworks that he integrated with it this sounds almost like a like a agnostic um web framework essentially because he's talking about using ssg s
[03:20:48] sr edge all these things and he's made this work with views felt or solid um that's not it i don't think okay it's fine um but one thing
[03:21:06]  i can say is i've been working with multiple frames for two years and the hype around solid is not exaggerated so i like this one basically that was really high praise and um
[03:21:17]  it's it's it's cool to see people try solid and like you keep on seeing this is the headline it's like they go and now they when people go implement
[03:21:26]  a new library they now go i'm not just building it for react i'm building it for these three targets this is like a common place now um and it's a common
[03:21:35]  theme here um so i i think we're gonna see a lot more of this um which is really cool for obviously solid being a new player and getting shortlisted in here views
[03:21:46]  felt actually oh he hasn't done preact and react yet oh that's interesting view i it's funny i can see this the reactive libraries are probably more similar and but
[03:21:57]  i i think i think we're gonna see as i said it's i i it's interesting being a library maintainer and being like pressed for that problem how do i choose
[03:22:07]  which frameworks to make my tools work for now it looks like people are trying the best ways they can be to be somewhat agnostic so we'll see how this develops but
[03:22:15]  this was just another really cool example of this all right so that's enough solid stuff let's let's get back to what else has been going on um so i i
[03:22:26]  this is kind of related if if you watched my stream last week you probably saw this but i i i decided to kind of go off on a little rant um a bit it
[03:22:40] 's not a big rant but i've talked about this before in the past and i've talked about it on stream a bunch but this idea that adding reactivity makes things
[03:22:50]  faster like everyone's like oh now my thing is reactive it is faster and that's not really how things work reactivity has added costs we talked about it a bit with uh
[03:23:00]  nile when i was like looking i'm like sweating the creation costs and stuff it has some memory overhead so and i've shown in the past of like stuff like preact
[03:23:10]  signals in that benchmark it doubles the amount of memory used by preact and you saw it with mobx too in in the benchmark so what is reactivity good well it
[03:23:19] 's because of what you can not do when you have it present it lets you replace like one change system for a different one it doesn't make anything faster it lets you if
[03:23:29]  you can it only it's good for ergonomics but it only improves performance if you can use it in a way that you can do less work which is why you know
[03:23:39]  it's a big deal for stuff like spelt or solid um and maybe from a performance angle not necessarily a big deal for like react oh vessel used to be veet
[03:23:51]  book well that's exciting because that's like a gap for us like stuff like storybook and that i'm assuming veet book is is like that okay i'm i'm
[03:24:02]  much more excited about that now no because oh okay that's that's interesting um but i want to point this out because there's always this added cost when you make these
[03:24:15]  decisions and like like something like view has really taken into consideration the cost of like adding reactivity to like they've changed their v dom significantly to work with reactivity to make
[03:24:28]  it work better but the naive approach to just adding it doesn't speed things up and i i i've talked about this before and i really wanted to kind of highlight that
[03:24:39]  because the the challenge is like this signals thing has been like a narrative where it's like i have signals now i'm faster it's like pre-act signals don't really
[03:24:46]  make pre-act that like it's not really like it makes it faster at updating that one style like it doesn't actually have that kind of impact so to speak um
[03:24:55]  and and uh the height of this actually was um this was looking for legend state in the benchmark because i saw this article and legend state has done a really impressive job of adding
[03:25:06]  reactive state management to react and i was reading it and i was like okay cool yeah i i get it this is cool and you know it's talking about how we can
[03:25:21]  how like changing react to do render ones and this is kind of like how mob x classically worked and like react solid state but they do in a really smart way where they
[03:25:29] 're not wrapping the components um in the old way they're i think they're hooking to react uh state internals to make it work kind of similar to jotai um
[03:25:37]  for for the react implementation but you can see that like this is reactivity fine-grained it should look familiar they did choose to go with dot value um i think
[03:25:48]  which i probably already talked about on stream there's there's concerns with that actually i'll probably talk about it more today i mean this the stuff comes up constantly but essentially um
[03:26:01]  this is this is really cool stuff and then they showed this benchmark i he he actually updated on my to my benefit because he showed the non-keyed version and then
[03:26:11]  he went straight to jotai and he's like look how much faster we are than all the react libraries i'm like they're not doing the same thing like non-key
[03:26:19] ed is gonna in this benchmark is gonna kill keyed so like it was it was basically like here's my library and here's everyone else and it wasn't fair what what
[03:26:28]  is fair is they actually do the keyed one here and you can see that it is the fastest it's it is faster than joe tai he's done an amazing
[03:26:34]  job in the library but this is this is you ignore like the this cult first column essentially and this is what you want to look at and you can see that well when i
[03:26:44]  see this i'm like we need some work on the react implementation it's not in here but i know this one pops up ahead of react which means our react implementation isn't
[03:26:53]  as optimally can be basically vanilla you can't be faster than vanilla so still very very very impressive work um but that that that when i when i saw that that was
[03:27:04]  where part of that kind of rant came from because i was just like like the last yeah after we talked about it he he he decided to to to actually um put in
[03:27:20]  the uh the the chart let's see here yeah there's a discussion and he's like would it be better if i replace it with this chart i'm like definitely um because
[03:27:32]  look it's he has nothing to prove it he's already the fastest um react state library but still it's cool to see innovation on the on the reactivity um pushing
[03:27:41]  driving performance forward um but i just want everyone to know that being reactive doesn't necessarily mean being fast um solace felt are fast because they remove other overhead marco and quick
[03:27:54]  are adding this because it helps them execute less code which helps with hydration but if the underlying system already does less work reactivity doesn't let you do even less and i think
[03:28:05]  i think this is the takeaway i just it was very obvious thing for me and i've talked a lot about it on stream but every time i look up stuff some people
[03:28:13]  are like oh something has signals now it's faster now and it's like no no that's not that's not how it works you you have to re-architect what
[03:28:20] 's underneath to actually leverage it um right um right so uh preact signals does a very specific um move that will improve reacts performance in a couple benchmarks but but i i
[03:28:41]  just said the net wise it's kind of a wash um but yes i imagine preact signal implementation is similar if you ignore preacts like extra special boost that they do yeah
[03:28:53]  oh jojai signal oh fun signal signals signals everywhere um that's cool um all right moving on this this is a solid related one but i honestly this is i i
[03:29:11]  cracked up on this one this is this was a very funny tweet from our resident ship poster or and um yeah this this tweet got more likes than anything i posted all week um
[03:29:23]  the funniest thing about this and the only reason i want to point this out he he's he's making a parody of modern frameworks um going on about how you know i
[03:29:34]  everything's too implicit and too magical with sloid i took it sufficient solid but tried not to repeat the same mistakes and put extra emphasis on api that points maintainability
[03:29:43]  i think you'll like the result and he's just joking about like how much here is but the funny thing was when i was looking at this is from a compiler analyze
[03:29:53]  standpoint this is like a dream we wish we could write that users would write their code this way um because there's no closures like you could make this it'd be much
[03:30:03]  easier to make something like this resumable because all the dependencies are explicit there's no closing over state you could literally just unwind find this from compiler analysis and know
[03:30:12]  exactly what you had so while but the i mean the fact that most people found this funny and they'd never author anything like this is probably a good temperature reading of what where
[03:30:22]  we're at but um yeah and use sniggle is just first class comedy here but um i think it's interesting because if you were willing to author your code like this
[03:30:35]  i think we could make a very optimal framework that would be less magical just throwing it out there i think i think resumability for example would be very doable for a framework
[03:30:45]  like this i know that's not everyone's take this is i i mean oran's responses are first class this thread is just hilarious like meme worthy stuff but under it all
[03:30:58]  i was actually very impressed with with the code sample here um we if you remember we had that chat um personal chat uh talking about how we can do better with docs um
[03:31:15]  it was a couple weeks ago and i went way over time on stream you know almost missed my sushi dinner um after selma uh had posted some criticisms about that and she'd
[03:31:26]  also posted a video about like should you make um a javascript framework and apparently the links that she had should i make a javascript framework dot lol is it
[03:31:35]  was an actual real site i didn't pick up on that i thought it was just for a video should i write a javascript framework dot lol i don't know if
[03:31:44]  it's yeah okay i don't know if it apparently that was a real website um but from our conversation she she apparently has changed her mind um which i didn't expect um
[03:31:55]  i think this is one testimony of like where it's always beneficial to be nice to people and to listen to them and hear them out um and then you know you can
[03:32:06]  talk and you realize you have more in common than you realized um and she she basically is on board with uh she basically she was making a categorization of all the different frameworks
[03:32:17]  and what they did and she realized because of convergence on capability that's been going on like like in a lot of sense there's less choices in certain ranges than she expected
[03:32:29]  um and she concluded there that there are there's still work to be done and that there are more frameworks to do um and she actually quotes me um and kind of spilled the
[03:32:39]  beans about my secret discord where quick astro solid marco eleventina angular share a friendly space to you know i have the off authors all together talking about this stuff
[03:32:49]  um yeah so i guess it's not a secret anymore um there's a reason that quick and astro and solid marco and eleventina have all been like super friendly
[03:33:00]  with each other and doing all these quote tweets we we share conversations almost every other day so to speak about challenges we have as framework authors and you know talking about ideas and
[03:33:10]  stuff and i i'd love to spread this further actually in the future but um yeah i i think i think i think i think there's a lot of innovation happening right now
[03:33:19]  and there's a lot of note sharing and i think that's really exciting you know to see signals get picked up in different places and you know you know we're definitely i
[03:33:26] 'm you know watching astro and quick in terms of these partial hydration and marco obviously marco's been doing partial hydration since the dawn of time really so um it's
[03:33:35]  really cool to see this kind of uh cross pollination of ideas and i think we need it because um it's not because react is bad it's just that we need
[03:33:47]  more options to be able to like move forward in the future to be able to like make choices um to continue to innovate in different directions we don't all have to go in
[03:33:57]  reacts direction react direction can be great but we need to see what else we can do there's there's a lot more out there angular's in there yeah yeah yeah i
[03:34:08]  mean we're going to talk about it a bit in a minute but uh a few of the angular devs uh that there's kind of like a new guard mishko
[03:34:16]  might have moved on but um we've been having a lot of conversations they're very interesting getting signals and reactivity into angular um and uh this this is a perfect example
[03:34:30]  maybe we'll bring this up now powell kozlowski here is actually a core team member of angular and i've featured him a few times on stream when he's
[03:34:38]  been acting these reactive things people know that because he's he's very kind of low key but yeah or angular core team member here and he was like he asked a really
[03:34:48]  great question he goes he's he goes with the dot value apis like you know what view has how do you handle the fact that when you do this it subscribes
[03:34:58]  like does everyone understand the problem here like picture this this code um um it doesn't really matter the syntax like this is not going to be solid it's not going to work
[03:35:15]  but picture this code we're in our in our framework of choice we have count and it's a dot value one not solid's version and then you're like um let
[03:35:23] 's create effect and we do this when you access this value this effect is subscribing the value then you add one to it and you reassign it which then triggers it to run
[03:35:44]  again because its value has changed that subscribe to which then it adds a trick this is an infinite loop that it adds a little bit more to it and it adds a little
[03:35:55]  bit more to it and it adds a little bit more oh someone found the link yeah sorry yeah should i write a new jasky framework dot lol yeah thank you for sharing
[03:36:12]  that um but yeah exactly the the problem that we've had with mutable stores apply to signals now it's like everywhere and like the the solids api guards against this
[03:36:27]  to a certain degree like yes you could you could do something like set count um count plus one right like this this is this is also an infinite loop right but generally speaking
[03:36:50]  it it you do this in this one right you use the function form and if you use a function form you don't actually do a read and i know this is a subt
[03:36:57] lety thing but it keeps on coming up with mutable state because actually i actually bring this up here because like you could use the peak pattern but then but then it wouldn
[03:37:10] 't never trigger the first time do you understand the problem here because like if i guess yeah i mean this is intentional though that you don't want it to trigger so peak
[03:37:22]  is the actual solution but i asked i asked i was like this is also true of nested mutable state like like reactive in view or uh observable in mob x store
[03:37:33]  dot user dot name equals jack did you mean to subscribe to user because even if name is being assigned an assignment which means it won't trigger by going along this path you
[03:37:42]  actually subscribe to user so like this is another reason again solid's set store api protects you from this um and it's just it's it's like little details like that
[03:37:58]  that people are going to come across now that they're understanding reactivity to kind of understand like like they're thinking hard on this side because if you look at it everyone
[03:38:10]  but solid has gone dot value um preact legend state recently um quick went dot value although i know they're they're kind of struggling through it and i don't know that
[03:38:23] 's correct i think they're going to use it and they're going to find out what's really up but it's hard without the experience right um i feel sometimes with
[03:38:32]  solid i was fortunate enough to have been doing this for years before any of this stuff came up so you know it's been like i guess it's been over a decade of
[03:38:41]  experience with reactive libraries of this sort for me so like i made decisions in a slightly different way sometimes that means i'm just biased and i'm locked in my old ways of
[03:38:49]  thinking but sometimes like these decisions are made for a reason and without that kind of context you can discover your stuff on your own i felt that when i saw the view 3
[03:38:59]  composition apis and um i'm feeling i'm this is really smart because the quick guys are kind of doing this too but the angular guys are actually looking at this ahead of
[03:39:09]  time and actually like he's asking the right questions he's going why like what's the impact of these kind of decisions right so it's yeah it's it's interesting
[03:39:29]  because yeah this is what i mean though so this is important why we have angular people i i'd love to kind of get you know i i think it's good that
[03:39:40]  we talk and share ideas um i i looked a bit at star beam i haven't looked at ember uh recently i i looked at ember way back in the day
[03:39:55]  um but um yeah okay so kind of going back to here still talking about these we've been talking a lot about code aesthetics and stuff and we talked a bit about this
[03:40:11]  with uh nile today and i thought this was kind of an interesting thing fabio loves um loves really getting to the the details on stuff and i but i love this graph
[03:40:23]  because i don't know necessarily if i fully agree or write it this way but i think it has a lot of truth in it and i think that's enough to make
[03:40:32]  this a discussion and i'm going to give my best read of this graph if i can and we can see if if if others agree or do it but essentially bad solid code
[03:40:46]  is the is the crap of the crap it will like bad reactive code in general has this problem but especially without vdom and stuff you'll you'll re-render your
[03:40:56]  whole dom like the problem is back in knockout days like you were flipping a coin where you landed and most time you were somewhere over here whereas react and any vdom library
[03:41:08]  really you can't get that bad like it's it's pretty bad but it kind of tables off somewhere over here you'll never be as bad as bad solid code but what
[03:41:17]  was interesting here is like we could choose how these lines get drawn because i do think it's more of like this what he was noticing was that when you get over to
[03:41:26]  nice idiomatic code like the performance is pretty good you're up here in the the quadrant but if you want to get to that last bit of performance you end up regressing
[03:41:36]  into like a whole bunch of extra wrappers and like a bunch of tricks um and your code gets a lot more complicated and you're kind of maybe it's not nonsense code
[03:41:45]  but it's back over on this clunky kind of side thing where it's less clean to get those last bits optimization and to be fair on almost anything when you go
[03:41:54]  to idiomatic and you regress back to optimized you're going to go up in performance but slightly make it less nice but he was trying to suggest that like in the case
[03:42:03]  of solid the optimized point is you know closer to the idiomatic code it's like just like a couple little tweaks like you just needed to move this thing here or dereference
[03:42:14]  it here to get the most performance out you'll see you can actually see this um with uh js framework benchmark where solid's implementation is like super super optimal it's not
[03:42:24]  super optimal everywhere but it's optimal in most places that matter and it's like a slight backtrack from idiomatic but it's not a huge backtrack whereas i think in
[03:42:33]  the react example we don't even bother going here like i feel like we could get react should be faster than any of the state libraries on top of react but it isn't
[03:42:40]  it's because we kind of like stop somewhere here where we backtrack a bit for optimization and we're just like it's not worth going here so i i think this
[03:42:47]  is an interesting observation because when you write the idiomatic proper code for solid um it tends to be very performant or very close to the most performant version of the code
[03:42:58]  um which as i said i think when nile went and he migrated he wrote you know pretty simple code and he got most of the performance really easily i do the funny
[03:43:07]  thing that i saw here and i know i know this wasn't intentional like it's probably like the the graphs probably more like go here and then go here or go here and
[03:43:16]  then go here is he drew the line through as if optimized was on the way to idiomatic and for me personally and maybe for him to writing code this is what it
[03:43:26]  feels like because what i i usually write the nonsense code or not nonsense code sorry i usually write the optimized code um and then at a certain point i just like give up and
[03:43:37]  i'm like this is good enough and then i end up going to idiomatic where i'm just like it's not worth nitpicking the last couple pieces of performance we
[03:43:44] 're just gonna make it like a little cleaner so like this path of going from going to optimize to idiomatic fits what i do but i imagine it doesn't actually fit
[03:43:56]  everyone but it's kind of interesting for me at least um and maybe it's a little more of a self-reflection from fabio himself or i'm reading way too
[03:44:02]  much into this graph but yeah and i usually write the nonsense code i can relate to that part um um but yeah there's some interesting discussions and he summarized himself if
[03:44:20]  you write terrible code in solid it'll be significantly worse than react because there's no vdom safety net optimized code is still pretty clean and fairly close to idiomatic idiomatic
[03:44:27]  code is way cleaner and a bit faster than optimized react and he's saying terrible unoptimized code is not super slow thanks to vdom for react optimized code is terrible
[03:44:34]  way uglier than idiomatic code even solids optimized code idiomatic code gives you decent performance and this is what i was talking about uh sam here works uh mitosis is
[03:44:44]  he found it really interesting how hard it was to go from react to solid he basically had to unlearn a bunch of things he said when he went to views or in s
[03:44:51] velte he didn't have to he could just like pretend like it was react and he said they all aligned together except solid and the funniest thing is this is what i feel
[03:45:01]  like at times when i look at these integrations and so i i relate with this a lot but it's funny because most people tell me this isn't the case like
[03:45:11]  oh no i just copied the react code and it just worked like nile did but like me knowing how it works i'm just like man solid's like the one that's
[03:45:18]  different than everyone else this is why agnostic tools and why our approaches are so awkward he says like for each when i try to accomplish something viewers felt there's either the
[03:45:28]  way it maps to react so just do it directly or no need for it anymore because the framework takes care of it right svelte does its own styles or you you you
[03:45:35]  know it has some kind of primitive that does it and then you don't need to do it where solid adds things you have to take into consideration to write good code it
[03:45:42] 's likely different it actually removes things and adds things where and my my biggest comment here was what i was trying to say is like once you fully understand solid then go look at
[03:45:55]  react view and svelte again because solid and react are the opposite ends of the spectrum but the optimal viewer svelte looks more like solid than react solid just made you
[03:46:04]  make that mental leap up up front and that's a big ask asking someone to learn something or change how they're thinking up front before they learn but the truth of the
[03:46:13]  matter is reactivity can be more optimal of a change mechanism than re-rendering components we know that so view and svelte have that ability especially view to do that
[03:46:26]  optimal change but if you're just doing something kind of like oh i'm just going to make it work like react well you can make view because it's got a v
[03:46:32] dom you can just go like whatever and just like go okay fine it works like react because you just take the reactivity have it re-render the components and you consider yourself
[03:46:42]  done but if you wanted to get the most optimal view or svelte implementation you'd actually have to basically get all the way to solid right like once you have the
[03:46:56]  reactivity you can do less updates you might you might be just like doing like whatever kind of like just make it work but that's kind of different solid shortcuts you to that
[03:47:09]  optimal code it's maybe a violent shortcut maybe it's aggressive but this is kind of the benefit of this graph once you're over here you you actually kind of know it
[03:47:21]  you're like holy crap why is this so bad like if you're ever using solid and you're like this is freaking terrible you know you're doing something wrong right in react
[03:47:30]  you're kind of cruising here you're like even over here and you're like my code is garbage but i don't know it solid like you get past this line and it
[03:47:39] 's just like oh my god what happened um and for better for worse but once you're like like once you're kind of like into this curve like what's cool here
[03:47:50]  is like this whether the the idiomatic code or doing some stuff that isn't terribly great like once you get into this zone where you like actually actually kind of pass react you
[03:48:01] 're actually already in a pretty good place so basically if you ever do anything in solid and it's worse than react you're doing something wrong i mean that's that that
[03:48:10] 's that that's it's a funny measure but it's it's it's it's kind of i think this is the way to look at this um and steve actually
[03:48:22]  commented from builder create original creator mitosis we actually it's funny mitosis has its roots in a conversation between me and steve because he was looking at solid and he's
[03:48:31]  like how can i he's like could we take solids jsx and make it work for every framework and i was like kind of but i think there's some like got
[03:48:38] chas and he was like yeah whatever i don't care about the gotchas let's just do it and so glad he does i think there's a case a lot with ag
[03:48:44] nostic tools sometimes you got to just take the leap and try and fill in the gaps because your assumptions are going to be wrong you're going to miss things this is guaranteed
[03:48:52]  like everything does work a little bit differently and you're going to have bad assumptions but if you don't try you won't know and maybe initially that means hacking a bunch of
[03:49:00]  stuff together but then you'll get there um it's funny i had the exact same conversation about veet earlier today i think i lost that tweet somewhere but someone was like
[03:49:07]  criticizing veet and i'm like people like the apis they like what beats accomplished it doesn't matter if internally there's a bunch of garbage going on they'll you know
[03:49:16]  it's not even garbage but like kind of like a bunch of like hacking es build and roll up together you know like there's challenges we hit as framework authors working in there
[03:49:25]  sometimes where you're just like why are the depths not resolving properly that's been like my last two weeks in solid start but it's really been a problem we've had
[03:49:32]  since the beginning with veet but the truth of matter is we fix those problems it's really enjoyable for the end user it's really enjoyable for the people who use it so
[03:49:42]  it's like completely worth it um and they wouldn't have got there if they didn't kind of start by hacking everything together that they needed to because when they started they didn
[03:49:51] 't know that svelte was that different than view or solid those that different and we just make do with it until we actually learn these things so um sometimes the value
[03:50:00]  of the agnostic path is just like brute forcing and bum bundle it bumbling your way through until you eventually like find the common patterns because it's not what you think
[03:50:09]  when you start with an agnostic solution you think you've generalized it you haven't like there's always a solution that doesn't work often that's solid but um which
[03:50:17]  is why i always have issues when people go oh yeah we support everything you probably don't but that's okay if you're committed to supporting everything you'll eventually get there
[03:50:26]  so yeah yeah someone let's see here dev let's see if i can grab that tweet over yes this this this this this is the tweet from my own setting can someone explain
[03:50:45]  what's the special about beat i have a tendency to simplify beyond what's uh justified but it's not it just roll a plus es bill blah blah blah you know he
[03:50:54] 's talking about like bad idea to make dev and prod different i'm like what i i'm gonna go off about how beat is a little messy at times um didn't parcel
[03:51:05]  beat beat to the punch uh parcel didn't solve ssr yeah sorry i should reply to this but parcel did not solve ssr ssr is a huge
[03:51:14]  thing beat came out at the time that everyone was trying to build ssr meta frameworks parcel has never been good for ssr um it's really awkward too first yeah
[03:51:23]  i i think devon um does great work um but even he was kind of like why is everyone caring so much about ssr because like it wasn't i think on
[03:51:34]  his radar as much and admittedly it's been the focus for like the last couple years so that's why parcel missed out everybody wanted ssr but what i'm
[03:51:42]  saying is like the end user didn't really care about this kind of you know mess underneath because we gave them universal plugins faster dev server ssr big one where you just
[03:51:52]  like hit a switch we needed this product so even if you know hacks on hacks becomes you know it becomes better over time like i tried snowpack which is great fred
[03:52:03]  from astro wrote it but it felt because it was and it's more explicit but because i had to like wire everything together myself i was just like i mean this is too
[03:52:11]  much it's not what i want came here for i had to do four different configs to get dev get server client dev and prod and beat was just like hit the switch
[03:52:20]  like if there was like a little bit i had to do but it just felt natural and and you know the thing is now that people are sold on veet they'll
[03:52:28]  they'll just make the internals work better and smooth things out i mean that's the reality he goes i always forget people don't care about things and go the hype cycle
[03:52:35]  and i mean that's true but the to a certain degree but the thing is veet succeeded i said i called it a triumph i'm skeptical of universal solutions they always have
[03:52:44]  gaps in their primary assumptions and so i'm tempted to never try even try but to successfully deliver something that so many different solutions want could see working for them it's it's
[03:52:53]  something right like this is this is like we can't undersell how successful veet has been what it you know it's it's done as a agnostic universal
[03:53:05]  solution and it seems like it's we're in an interesting place because we're at a crossroads between where people are feeling that the complexity is too much like they don't
[03:53:13]  want they want simpler solutions and where on the other hand people don't they want general solutions and general solutions tend to be less simple um stuff like like veet that just
[03:53:26]  works these agnostic components so it's it's very interesting to me to see these kind of contrast next to each other right um so yeah i think i think this is
[03:53:41]  i think this is an interesting conversation i'm trying to see where steve said any new approach has a mental curve but solid is deceptive in how it looks like react
[03:53:49]  but it's far different in particular in my opinion vastly more clean performing and manageable at scale react falls apart at scale mob backs can get you close-ish but it's
[03:53:57]  just not the same so this is big praise obviously quick is adding signals and i i feel like every day quick and solid are getting more similar so we'll see where that goes
[03:54:08]  um but yeah remix uses es build directly instead of eat they don't support htmrpresses yeah i mean because they didn't build those tools off but i
[03:54:21]  mean part of you kind of goes couldn't i just build something better on es build well we had this conversation with marco a lot i don't i don't want to
[03:54:27]  dag on dylan too much but he was like man couldn't we just like make this crazy es build thing and just like handle everything um but i think there's always just
[03:54:35]  more use cases than you can assume right yes remix does use es build to my knowledge yeah so yeah i mean interesting graph interesting conversation that can come up from someone just creating
[03:54:57]  a graph like this i i i do really like this because it kind of does show solids drop off and maybe this is its learning curve too i don't know it's it
[03:55:08] 's interesting i don't i don't i i i think if i want other frameworks in there if i want to talk about learning curve because i feel solids advantage is once
[03:55:17]  you get the key song concepts you basically have learned the whole framework um basically as well as i have like there's nothing else to teach you um it is not a progressive framework
[03:55:26]  it's like you learn it and then you learn it okay okay i mean i can't go this week without talking about this demo but yeah i think it's i think
[03:55:44]  it's time to talk about that demo let's let's talk about the demo for a little bit um no actually i'm gonna no i changed my mind we're gonna we
[03:55:58] 're gonna we're gonna look at a couple more things before we talk about that demo um first of all we had matthew phillips on uh last week which
[03:56:12]  is awesome he actually we found a regression in astro um when we were on the stream and i actually updated and yes this was an astro performance thing not a corset
[03:56:21]  thing interestingly enough when i ran corset through the benchmark um it was better than a single page app performance but it was it was actually closer to that than i expected it
[03:56:33]  wasn't like as fast as some of the partial performance thing and by benchmark i mean the really terrible hacker news page that kills everyone um like brutally which we'll talk about a
[03:56:42]  bit more but um i think the more interesting thing was matthew phillips wrote this article about where web components went wrong and i quite enjoyed this article um if
[03:56:54]  you don't know matthew phillips i mean we talked about it on the last stream he's done a lot of projects all over the space on the web front
[03:57:06]  end and he's not like married at all to like the the the the the the current like declarative things and he he he i i believe he's the author of
[03:57:17]  was he of a haunted which is a web uh component framework and he works on astro but essentially he he as you mentioned of course that he believes that like we've hit
[03:57:26]  the the limits of the abstraction right um essentially the components are just not good but then he's talking about web components and you're kind of going huh and i think this
[03:57:37]  article is really um interesting because he's saying that web components tried to copy javascript frameworks and that was their mistake um because javascript frameworks are going maybe not the
[03:57:50]  right direction right web component community again chased frameworks down this rabbit hole but this time they were not a natural fit right he's talking about ssr because he said like
[03:58:01]  basically web components kind of chased after the component model then they chased chased after um ssr and it just it just it's not what they're they're they're like
[03:58:13]  good at and he's like the whole trick here is progressive enhancement but i i think my favorite part of this article was this he said because it's a standard isn't
[03:58:26]  a winning argument and i have to say amen to this one he's a let's i'm just gonna like read directly what he said in this one because it's just it
[03:58:38] 's so on for a fan a lot of fans of web components their choice of using them comes down to the fact they are standard i'm sympathetic to this myself i have vanilla
[03:58:45]  js web component that i wrote five years ago that still works unmodified in apps today but this isn't winning any argument for the broader web community that never has been
[03:58:52]  you have to tell a story that's better in some significant ways and you can't really do that by chasing what's already popular yeah like seriously when you're like it's
[03:59:01]  the platform it's just like people just tune that it's like when i talk about performance if someone says it's the platform it's just like la la la i'm not
[03:59:08]  listening to you because you're not saying anything like like like everything's a platform like it's just it's it's we really need to get away from that argument because
[03:59:18]  it sounds like a superiority thing like it sounds like oh we're doing better things because it's a platform it's like like that it's like it for for those who aren
[03:59:28] 't on that boat you might as well be just saying nothing um so like yeah i i and then like the hang the whole argument and it's just like okay so they
[03:59:38]  the web component person said a whole lot of nothing i mean this is i i'm so glad for him calling this out and yeah he's saying we need to move to post
[03:59:48]  component architecture it's funny how much our thoughts are aligning here because it's funny i don't i don't think necessarily from an authoring standpoint i think people like what
[03:59:58]  they like but essentially components as the single converging point of everything we do is problematic that's why there's so much work going into stuff like solid quick marco to
[04:00:12]  break apart the components as much but on the other hand i don't know if we can deny how much people like authoring in them so we have to think about this carefully
[04:00:19]  um this obviously points to corset or whatnot and different approaches that don't use components but he's not wrong i just don't know i think the dx story around components
[04:00:31]  is still good so we have to consider like how that falls in the balance right so over time the standards do get better and maybe there's some hope there um especially on your
[04:00:45]  use cases but there's always going to be some library that does something more specific more powerful for you and you're gonna have to make those trade-off choices yourself so
[04:00:53]  just i i really liked this this conversation right um theo theo caught caught in on here um he posted rich's article some of the points in richard's article don't hold
[04:01:09]  up anymore um i actually linked my article um here maybe weapon was not the future if you want a chance you can read this one look it up i actually think every argument i
[04:01:20]  have in here still holds um it's actually aged really well because i didn't criticize web components for what they did or didn't do i criticized them for what they fundamentally are
[04:01:29]  and i think they're not changing what they're fundamentally are so these criticisms still hold um but i think it's interesting because web components do have purpose and parts of the platform
[04:01:40]  they expose to us are really useful but like yeah this this has been uh there's been a lot of conversations back and forth uh alex russell called everyone the js
[04:01:50]  industrial complex yet again this week um so yeah the the fire is still going hot yeah yeah sorry let me go go here yeah let's let's drop in rich's article rich
[04:02:04]  article is dated because web components have been adding features um but i mean half of his article half the article is half of it is still is still true um like but he
[04:02:18]  focused on things that web components don't do today but could easily do tomorrow even if they don't do them like even if they don't do them today like they could
[04:02:27]  do them tomorrow um i'm gonna i'll drop in my article as well yeah i'll do both hi but yeah yeah i i think it's interesting how these conversations keep coming
[04:02:40]  up well the reason is it's the same motivator the reason we were talking about mitosis making components and uh uh niles approach to ag grid and tan stack we
[04:02:49]  were kind of like going okay how do we just there's this general desire to not be locked into react um that's it's as simple as that so that's why these
[04:03:01]  conversations are happening like reading between the lines um but yeah i mean i i i think i think we have to recognize that react is on like a path right and not everyone
[04:03:24] 's going to be on that path but it's still a powerful path dan abramoff had the clarified like multiple times in this thread about this because uh christian writes k
[04:03:33] ensie dot is one that it has calls talked about how react will always adapt excited to see work being done on pre-act signals and legend state dan care to share
[04:03:43]  your shot thoughts so they're talking about signals obviously um and that's probably how i found this because i i was just like looking up signal stuff they didn't mention solid but
[04:04:00]  it's fine um it's a long path you started reactivity you'll get back to solid at some point and but they talked about legends today and pre-act which
[04:04:08]  we both talked about today and dan basically was like we're not doing this we're writing a compiler it's great to see people experimenting with model one thing that's concerning lately
[04:04:17]  is the trend to patch internals because like pre-act signals actually patches reacts internals i don't think libraries that do this communicate very clearly to their consumer that this will
[04:04:25]  affect them down the line it's essentially soft working but as i said the other day i actually said this was like pre-act's trojan horse um because in a
[04:04:37]  sense they know the perhaps the framework authors know exactly what they're doing right like like if you use pre-act signals in react they've ruined you not only are you now
[04:04:51]  using reactivity which is awesome but you're you're actually like hooking into react's renderer who knows in the future react changes something like maybe something like this is
[04:05:00]  subtle enough that pre-act um signals can change and adapt but essentially you're changing the framework and i i like that dan called this out because it kind of works both ways
[04:05:14]  um like it's people who want it to use it for compat this is awkward but for other people like this this is this is how to pre-act can kind of
[04:05:23]  like get in there right it's about communicating it you're right they should communicate it i agree right because this is this is kind of being maybe a little bit sneaky they're
[04:05:36]  like they're they're kind of but the truth of the matter state libraries have kind of been doing this to react forever but but in terms of like using reacts as a puppet
[04:05:45]  but where reacts going has made this harder like you use external state and like i i'm on a mobx thread that i get pinged like every week as they're
[04:05:55]  trying to like figure out how to make mobx work with all the concurrent features but i think he's right they've gone to a point where you actually have to replace the
[04:06:04]  h function like the create node function to make like these small performance things that probably don't even matter that much um but i i i i share dan's concern here so people
[04:06:15]  do need to be aware of this but it is it is i like that he's calling it out he's also he got a discussion ryan also from the pre-
[04:06:28] act core team because he's like we're solving hooks like hooks are a problem to solve and dan's like what what what what problem are you solving with hooks he's like
[04:06:39]  he's like you're just saying you don't like one solution versus another solution like i i i found i find some of these discussions kind of interesting um because i i
[04:06:51]  tend to actually agree with dan on most most of stuff even if we don't actually agree fundamentally on like the right way to go he has a very logical approach to this because
[04:07:00]  people are too quick to kind of like slam on react and react hooks react hooks are good at doing what react hooks do like they make a lot of sense so it's
[04:07:09]  it's weird when people are asking him to correct the framework and he's like well there's nothing wrong with the framework like this is we're doing exactly what we want to
[04:07:18]  do why do you guys keep on telling me to use signals we could have used signals like five years ago signals aren't new you know we we've known about this for a
[04:07:26]  long time we like this is as i've said before this is why react is not and solid are carving out their own independent space it's interesting when you have stuff like
[04:07:35]  preact kind of like and some of these libraries kind of getting in the middle there like morphing react to their vision or whatever kind of getting in getting in there um
[04:07:45]  but like react clear vision this way solid clear vision this way um i think it's a good thing so yeah i think right now there's just a lot of heat around
[04:07:59]  signals um so you know this kind of ties in yeah it's not even that it's entrenched they they like what they're doing they believe in it they they had these
[04:08:14]  choices it's not like sometimes i talk about the react core team not being exactly aware of what's going on on the ecosystem but they are very aware of the of like the
[04:08:22]  core technologies and approaches like they understand what like like to they might have not taken it as far so they don't know like some of the potential where these things go but
[04:08:32]  they think like they think at high level they could have been like oh yeah we can add mob x to react core like they like that was always a choice they they like that
[04:08:40]  the answer that question doesn't change now that some people have seen solid and they're changing like reacts not going to change right so yeah i don't even don't need
[04:08:57]  to talk about this but i i just gotta thank dan for the hundreds of followers i got from from uh from him posting this because a bunch of people posted me and then i
[04:09:08]  posted dylan from marco because he's amazing and yeah it's it's cool to see people think good stuff for you like i got i got linked by adi
[04:09:18]  asmani who i obviously look up to chrome team amazing work and get listed short list on that was really awesome obviously um you know anyone who listed me i would have listed back
[04:09:30]  in a heartbeat um that's for sure like theo um and and whatnot but yeah yeah this has been a this was fun because zach at one point pointed out there's a
[04:09:45]  popularity contest but what's great about these kind of things is that you get to like i i got to choose whoever i wanted to to to promote so i promoted dylan and
[04:09:55]  he also got like uh i think like 100 followers or something so like i think it's it's i think this kind of goodwill stuff is good and i thank dan for
[04:10:03]  triggering it yeah i i do i do agree react compat becomes less important they're going down their own path i think it's interesting though because they're they're weaving a
[04:10:19]  very thin line but i mean preact is popular and they have a lot of things like a bunch of people i saw some posts and people like oh yeah preact signals plus
[04:10:28]  uh astro islands or plus fresh it's an amazing combination and i was like laughing at myself like now you get why we've been talking about solid astro for like the
[04:10:37]  last year like why it's like such a good combination like the peanut butter and jelly so to speak it's it's like it those technologies make so much sense to go
[04:10:47]  together um but you know when preact drops it you know there's just much bigger sway right even you know when others have been doing it for much much longer so i think
[04:10:57]  it all comes in time when people get you know recognition of what's going on fresh needs preact more than preact needs fresh yeah i'm yeah astro is really
[04:11:10]  compelling solution fresh did inspire some elements of salt start which i'll talk about when i get to that demo in a few minutes um preact and fresh were like the perfect intersection
[04:11:27]  where dino wanted to show off how they could be lightweight and do no build and do that and preact because all the tools are built to for react essentially like it
[04:11:37] 's funny when they say no build but there's like there's a jsx transpiler made specifically for react you know there's like typescript that works you know you know
[04:11:47]  and all these element you know compiler that can do it precisely reacts transform that essentially preact got to kind of walk in being a lightweight alternative which is nice to fit into
[04:11:58]  this kind of islands thing so they get to kind of show off um the edge and how you can use mpas and load javascript and all this stuff with at the
[04:12:07]  same time do no build preact's actually the only solution that would work for fresh the way it is um my understanding that the dino guys were talking to quick a lot
[04:12:17]  and seeing potential but because like they just made their own framework because like they could just very easily do it and kind of push out that message but i i hope this does
[04:12:28]  as i mentioned before this doesn't lead d node along a path path path where they're kind of like a one trick pony um we'll see where it goes because um i
[04:12:36]  don't think no build is the future so at all so i think i think i think we'll need to see how this progresses talking about memes uh alex i don
[04:12:46] 't know if you created this but it was kind of funny it's about partial hydration um new shop on mobile being slow we need to partial hydrate be right back squirt
[04:12:58]  some water on it i don't know i thought it was cute little joke um i think partial hydration is an interesting topic and i think hydration general isn't understood i think i
[04:13:09]  think that's been a challenge for quick's marketing and i think astro just dodged it they're like screw this we just make content sites i think talking about performance
[04:13:18]  and talking about hydration is really hard way to sell things um but it's going to become even trickier when more options do different levels of partial hydration because we won't be
[04:13:29]  able to differentiate everyone will be like oh so like what quick does and quick will be like no we do way crazier better stuff and people will be like yeah yeah like quick
[04:13:36]  does like i think i think i think that conversation is going to get really muddled really quickly here um so yeah i i i yeah i i think i think i think
[04:13:49]  i think i think that's going to be definitely something that we have to consider and i mean talking about muddling the conversation i'm i i i might be partially responsible
[04:14:02]  for muddling that conversation right like i made a demo for solid um uh well i didn't make it nikhil made it using ryan turnquist to work on
[04:14:16]  the on the on a client server router hybrid and he put it together and we showed it off in stream but it had some stuff like it was serializing stuff and i finally
[04:14:24]  put together like the proper one like the one that actually benchmarks well and actually works and this basically uses a pre-release of solid 1.6 yeah someone's saying
[04:14:36]  well yeah i i don't the 200 kb isn't a thing 50 kilobytes g-zipped like you showed is actually really hard to do with react because react
[04:14:50]  is already 45 kilobytes g-zip before you even start so my experience has been that for mobile lighthouse anything that's like even remotely like if you use react you
[04:15:07]  have a hard time getting 100 you can get like 98 on mobile so it's probably good enough but yes the problem right now is it's so easy to get 100 on a
[04:15:15]  simple site like when someone shows me a site they built with solid it's not 100 i i i'm not like and they get like 98 and they're like proud of
[04:15:22]  it i'm not like oh sweet i'm like i wonder what went wrong like why is that site not 100 it's like very rare for me to see a solid site that
[04:15:30] 's not 100. um it's it's it's almost like a baseline it's not like a goal it's like if you're not 100 what are you doing and
[04:15:37]  i i think obviously when your site gets bigger there's a concern but like a simple site when you're um a simple site like when you're like just navigating around and doing
[04:15:49]  stuff like you know like a content site like a hacker news or like whatever kind of like basic site even like a simple storefront you shouldn't have any problems getting 100
[04:16:00] . uh phoenix well there you go so you have a specific solution right okay so i mean the that that's deflating your argument though right because like like
[04:16:18]  what what michiko's saying is if you would go for phoenix live view you'd go for quick right um you know what i mean like like why not so
[04:16:31]  yeah like if you there if you wanted if you were looking for phoenix live view then i think quick would be on the market right like because you're like okay i
[04:16:45]  do actually care about this i want to scale on the server right but the thing is getting 100 with these solutions that do scale on the server like but the funny thing is
[04:16:54]  even if it's not react like just pick solid svelte it's not hard to make a 50k b site that gets 100 or whatever it's basically only react and
[04:17:04]  maybe angular that has a hard time to get that 100 score for like uh like uh a trivial app and i don't mean less static app i mean an app that like loads
[04:17:16]  dynamic data um like you know like but i still consider that a trivial app i think only every other framework gets 100 almost effortlessly and i i think yeah i i don't
[04:17:36]  actually i don't know if this statement is true but but we'll get into that i i i i i did but um essentially i was like okay what if i could
[04:17:56]  take a hacker news demo you show partial hydration and advanced stuff like recursive partial hydration didn't do the data serialization and then gave a client side routing experience so you
[04:18:16]  know you'd have a hard time telling the difference of this between any of my spa versions of the hacker news demo right we can collapse comments we can navigate around it's
[04:18:28]  basically the same thing switch the next page whatever like this looks like it but suddenly instead of 15 kilobytes of javascript we have um let's switch to js on
[04:18:41]  initial page load 4.9 but to understand this could be zero kb we just never optimized this this is basically just the javascript we need for the router um
[04:18:58]  and the basically it's just the javascript we need for the router um and yeah what is this this is this is veet adds this thing for injecting style sheets
[04:19:06]  um yeah this looks like the router what's this and this is probably solid so we we could shake this because we don't actually need this javascript so yeah this
[04:19:18]  yeah okay but what what happens is this is server rendered page when we go click here we swap out part of the page not the whole page you see if you if you look
[04:19:32]  at this this head here and actually let's get the header open here when i move the header nav is not going to re-render it's only the partial that's
[04:19:42]  going to re-render right and when we send in this html that we send over the wire if you look here this this request if i look at fetch you can
[04:19:52]  actually see serialized html as the format we actually only if if you're paying attention when when we switched the page and go back to js you see there's
[04:20:05]  another 700 bytes here for toggle js so let's let's go back here we refresh the page over here without toggle js i'm going to click on one of these and now
[04:20:13]  i have toggle js because basically what what happened is when we navigated we loaded the javascript needed to just hydrate the particular island so we actually server rendered the page
[04:20:23]  partial of the page and then only load enough javascript to do the partial hydration of the island and nothing else so this is islands after the factory client-side routing
[04:20:31]  right which is why i wanted to point this out because um quick isn't doing this yet but they could this is the way they'd want to go they don't actually want
[04:20:44]  true client-side routing because then they'd have to load all the javascript for the render the whole next page they could but they don't want to do that and
[04:20:53]  server routing for mpas is fine but what they actually want is this right this is this i'm not even at the persistent islands persistent islands is the next step this is
[04:21:04]  simply like server rendered partial nested routing eventually we have to look at how to persist the islands um but this this is essentially every navigation does partials and then we can we
[04:21:20]  can basically only load the javascript we need to do the partial hydration and because we're doing true partial hydration net right now what you're going to see what isn
[04:21:28] 't here is all the serialized data for the javascript for for here we don't need the javascript for this because or sorry the serialized data because this
[04:21:36]  is a server component this toggle is a client component and we pass it through and with solid 1.6 i figured out basically how to not over serialize the data so now
[04:21:46]  we don't get that big you know like next data blob or solid start like if you want to see like what's a typical one solid hacker news edge netlify
[04:21:54]  you know it's like the problem when i'm on like the cheap plan or whatever like doesn't wake up right away wait what did i solid hacker news edge netlify
[04:22:07]  like okay i don't know what's up with that it didn't load but if you look here a typical single page app this experience is very similar to what we were
[04:22:15]  just looking at it feels almost identical except when we when we render the page we have to serialize all the stories and especially on this page where there's recursive hydration and
[04:22:29]  all this stuff we have to serialize all of this data now solid is actually improved its performance now with the serializer we stole the new future serializer from marco
[04:22:38]  which actually historically when i did these tests solid was about the same speed as remix and svelte kit now solid is noticeably faster even with the single page app mode however
[04:22:48]  it does not compare to to not having to serialize all this data again and we can do this because of partial hydration right react server components are a little bit different if
[04:23:07]  we take this and then add those persistent islands then we have react server components so they're astro is doing research into persistent islands and it makes sense because they're kind of
[04:23:20]  more site oriented nested routing which remix kind of popularized but really has been around since ember and we've been doing it for years as well um is a very app
[04:23:29] -like concept and it helps us save re-renders and that's what we're doing we're just leveraging instead of doing like turbo links full things we're like
[04:23:37]  we're using nested routing and we already write our apps with nested routing but you don't write an astro app with nested routing you author it as a page
[04:23:45]  so what's really cool for us is this fit in like you watch my vcomp thing it's not so much about the mechanics but i'll show this off i literally take
[04:23:53]  the same client rendered hacker news demo and just go turn it into this mode and i just have to go like one import say that it's an island and then suddenly we
[04:24:02]  have this working without rewriting any of the code the router everything it's the same nested router same code same route data everything works identical without changing any of your code and
[04:24:11]  you go from a pure client rendered page to a client routed server hybrid um with partial hydration it's it's like it's because of the patterns whereas astro you
[04:24:22]  author as pages and since you author as distinct pages it does they're going to be working on something more like turbo but between us if we solve persistent islands when we mix it
[04:24:32]  with this you basically have react server components um um and i'll be it perhaps a much smaller version because what's this 5.7 kilobytes that's all that
[04:24:43] 's all this is ever going to load because there's only that one interactive chunk um and you know there you go we're obviously this is solid start so you know it's
[04:24:56]  pretty good it's like 14 13.8 kilobytes so solid starts pretty small on on this page when we go here we get an extra one so then it's 14
[04:25:04] .9 kilobytes and then if we go to the user page is another one so 15.6 that's all the stuff for the whole page so it's not
[04:25:13]  like solid is any kind of slouch but i just it's just a completely different world when you can like shave off that javascript for partial hydration but as i said
[04:25:24]  we have to be careful on the balance right because i mean i've shown this before like you could have the craziest compiler possible like marco and in in the marco
[04:25:35]  case they can literally load one points of kill by javascript and do this so we can get better we can get smaller but you know i finally finished the quick city hacker
[04:25:45]  news example right and except there's a service worker bug that we've talked about and i'm going to get fixed so that's that's why the prefetching is
[04:25:54]  not working so let's pretend that the prefetching is working as it turns out the quick version of this demo is actually the same size as the single page app version of
[04:26:04]  solids demos 15.6 kilobytes coincidence but um quick's approach actually was didn't actually save us javascript um on this so there is still consideration um on size
[04:26:17]  and performance and efficiency like architecture is good but we have to figure out where the scale falls um right and this is still this isn't a client-side router this is
[04:26:29]  still mpa like streaming but it is an mpa you can see the spinner go as we switch between the pages i i there was a their their uh loading indicator was broken
[04:26:42]  on their mpa version otherwise that we would have seen that placeholder when we stream like if you go on solids version and you reload the page you see that loading it
[04:26:50]  would be doing that if um they had a bug but generally i just want to kind of are yeah what are exactly presented islands does it mean that static components around the islands are
[04:27:07]  partially hydrated and the islands stay in place no i mean it it means that the islands are partially hydrated and then we can blow out the rest of the code so essentially you
[04:27:20]  can re-render everything on the server and then um the the stuff you want to persist the islands like let's say you do an update and you want to reload the same
[04:27:30]  page essentially with what i'm doing with this router right now all we do is we enter html so we lose all the state we lose it in sections by the
[04:27:40]  nesting so like we keep the header so we'd have no problem putting it like a video player or an audio player on the page because of you know that's always present
[04:27:49]  but if you say had some nested states somewhere down here that you wanted to keep you would lose that um if you if you just enter ht meld it the idea
[04:28:00]  what astro's been working on is this ability so that when you replace it you can actually keep the islands so if we recognize that the same islands on the next page we
[04:28:08]  actually like swap it right in and we don't actually create the new island we just keep the old island so even though you're doing like mpa um or even though
[04:28:16]  you're like swapping it in you don't enter you you know the content you can preserve it now what's interesting about reacts version though is that because they're not inner
[04:28:27]  htmling it they can actually preserve the dom state of the stuff outside of the islands theoretically um which is which is interesting um but the the the option or the
[04:28:44]  answer there might just be something that we haven't really gotten to yet um which might be that the granularity of the swap outs just maybe should be smaller kind of like take
[04:28:55]  this nested routing idea but make it smaller um sounds a bit like htmx yes htmx has a lot of similarities um the biggest thing with h
[04:29:03] tmx and the only reason you'll hear me complain about it isn't it's not even complaining but kind of mention something is htmx swaps out pieces
[04:29:11]  and it does the fine grain swap outs that i'm talking about i think htmx has the technology behind it but not the authoring experience because the problem is
[04:29:19]  we still want islands we don't want everything to swap out like this that's kind of what maybe this is my misunderstanding with things like live view and stuff we still want j
[04:29:28] avascript in the client where things are interactive to be first class we don't want to be like sitting there and like having to always trust the server to preserve our state like
[04:29:36]  that would be not good which is why i i mean i want to understand live view but this is probably my same um criticism there is just because you have this ability doesn
[04:29:47] 't mean everything should follow that so you it's good to have client-side um it's good to have client-side updatable interactive logic is is what i'm getting
[04:30:00]  at so you don't necessarily have to go to the server for everything you can do you can do that and to be fair with htmx you don't have to
[04:30:09]  go to the server of everything you can also write javascript but you're back to the two app problem where you have the swappable stuff being written in ht
[04:30:15] mx and then you have like javascript layer for the stuff that's interacting the client ideally you could just write your stuff in one sort of way and then some
[04:30:23]  stuff swaps out on the client and some stuff up or some stuff updates the client some stuff swaps up on the server and you can kind of mix and match to what
[04:30:32]  makes sense because i think we we mostly want the server for the big stuff like page navigation like that like the routing this is a very easy and obvious use case why it's
[04:30:44]  really not nice to be able to use uh where did i already close it like you could tell the difference here i mean this isn't too bad but you can you can
[04:30:54]  tell the mpa is here a little bit and this is getting better all the time versus you know this there's something nice about being able to this basically be an mpa
[04:31:04]  but actually have this kind of smoothness now uh what i'm so what i'm kind of getting at is like there's there's both sides of it and we're
[04:31:21]  trying to like basically leverage both sides instead of just being like like htmx has a very like we're anti javascript feel to it and i i i
[04:31:31]  think like if you do that you're missing part of the story right some comments yeah i mean there's trade-offs for this and we'll probably get a chance to look
[04:31:53]  at live view in the future um there's a live view js um that's came up uh on my twitter feed and it's kind of new um if i find some
[04:32:03]  time i'll talk to the author and see if we can have him in and talk about it because i want to understand the mentality because i feel my understanding of it might be
[04:32:12]  lacking i'm saying stuff based on my understanding and for my understanding there's a reason why i've been kind of like yeah you know it's cool but is it that
[04:32:20]  different than what we were doing with backends like 10 years ago um like like update panels and stuff um and i don't see these things being the same as server components so
[04:32:30]  i i'm still trying to because the thing with server components and this kind of came up on the stream previously with what seb said is they're kind of like these islands like
[04:32:39]  people there's a reason why when you see this demo you're gonna be like oh solid has server components it kind of feels like this because the thing with server components is
[04:32:46]  you got this interactivity you know um let's go somewhere where there's interactivity you have this interactivity like oh here's the client component okay we got this interactivity
[04:32:56]  and you're you're doing this kind of stuff and then you just happen to be able to navigate that like server components handle this the the outside the mpa part of it
[04:33:05]  the part you don't really care about you're like you're interacting with the interactive stuff which is the islands and the actual react app and the server components are just like
[04:33:15]  the whatever stuff so like it's it's it's very different how you author apps because it feels like an mpa but it doesn't it's not the difference of like
[04:33:25]  of like my back end and my front end are connected by web sockets it like it's still a very like page model mentality behind server components like live view and live
[04:33:45]  wire are completely different to htmx and whatever we're doing 15 years ago okay yeah um yeah i mean and that's that's that's where i need to fill
[04:33:55]  in the gap here because as i as i said like i know live view and live wire are different um to htmx because htmx is basically like
[04:34:07]  the just the simple swap like we're talking about here but um i think that uh react server components are also kind of none of these i guess the best way to put it
[04:34:28]  all right anti-java scripts based the whole vaccine yeah i know and it's it's it's an interesting dilemma because i get partially where it's coming from and
[04:34:43]  if live view and some of these technologies are doing what is intended or like doing something like that i'm missing then i i think that there's an argument there the problem
[04:34:53]  is from where i'm sitting today because what wasm not being where it needs to be and all this other stuff javascript full stack is like the best way to optimize
[04:35:03]  something if you want to manage a single app if you're fine managing different apps like and being like yes i have my back-end app um and this is different than the
[04:35:13]  back-end like database and all that but i literally have a back-end web app and a front-end web app if that's where you want to go then
[04:35:21]  i i then there there there are options and optimal options that are super performant but if you want to be like i'm writing a app um javascript's strangle
[04:35:32] hold on the browser kind of has you trapped and that's and even from a performance standpoint unfortunately so it's like it's really awkward um from that sense like i don't
[04:35:43]  think things should be this way but it kind of it kind of is but yeah um i don't have any of the code to show you guys today um uh i'll
[04:36:00]  take i'll be showing that in the beat comp video a little bit to show how the authoring experience is um but essentially i thought this is a cool demo because as
[04:36:09]  people asking why doesn't astro have this area i don't think people have i want i want to kind of show off what's possible with this kind of technology like this
[04:36:17]  is where we're going like server components aren't necessarily the only solution here um and i i i was kind of mentioning i was really happy that vconf is actually for next
[04:36:28] conf because um i'm waiting to see what they show at next comp but um i i think i think some of the stuff that's going to be showcased at v
[04:36:38] conf might be pretty impressive in its own right so yeah uh anyway do play with the demo if you want to get an idea i i have showed this on stream before but we
[04:36:50] 're finally at a point where like the performance is actually in a pretty good place i think someone asked me how it did on the torture test and i'm not going to
[04:36:59]  run it right now because i have no luck anymore because they cache stuff they change stuff and i've been having problems with the api but um i re-ran everything the
[04:37:08]  other day and solid astro still got 94 so props there fred um but um that quick demo was in the 80s and that's that's that's quick i mean
[04:37:19]  it's fine quick doesn't run any code but that's quick also not loading any code so um and uh marco got 76 and then i went and ran remix felt
[04:37:30]  kit next and they were all about 38 and then solid even with async rendering was about 38 but then i ran the the streaming renderer and i got uh with the improved
[04:37:40]  serialization and i got 48. so essentially um lighthouse has gone like i it has cracked down a little bit it looks like some metrics are a little bit harsher scored
[04:37:52]  now but in general um this approach um is pretty performant even with this basically the hydrogen my hydrogen demo isn't working properly still there's some kind of issue so this
[04:38:06]  is the only demo to get above 50 um with client-side routing um that that i've done so far so i this i'm pretty happy with this directionally i think
[04:38:20]  there i think we can improve on the hydration stuff still and i want to explore more but this is interesting because you got to start asking yourself at what complexity does quick's
[04:38:29]  approach trump say astro's approach or this approach and i think it definitely does but i think i i think we have to see where the trade-offs are to understand
[04:38:44]  how far we should take it because there are there are real trade-offs uh you know that come with that architecturally um so like is there a balance here to be found
[04:38:56]  and when we find it will it be a logical one um so yeah i think that's pretty interesting you mean solid islands without the client routing i haven't tested it uh
[04:39:09]  i imagine it will be similar like the client routing adds like one kilobyte of code oh that runs you're right it's possible that we could get a couple more points
[04:39:19]  out of the pure island thing you're right i wonder i don't know if we'd get up to astro but you're right that's actually a really good question we
[04:39:26]  actually initialized the client router so maybe we are taking a small hit i think most of the pit though is actually um some server rendering stuff in solid start that we're
[04:39:36]  still working through but yeah no what i'm talking about with persistent islands is the other way around it's like you're you've designated that there's a certain part of the
[04:39:48]  page that you're going to swap out and you you you know what all the interactive islands are on the page so you just when you get the new html you
[04:39:56]  keep those islands and put them in place where they are in the new rendered page so you actually replace some stuff around the islands the the islands that persist the islands are kept but
[04:40:07]  they but you replace everything or outside of the islands that's what the persistent islands thing is it's not i don't it's not like pinpoint replacing serve stuff on from the
[04:40:17]  server it's the other way around being able to keep client state in a section that you're swapping out i actually like the swapping out being tied to the router
[04:40:26]  it's a logical place for it but we i think the key to it is if we have like these nested route sections um being able to keep the islands if we ever
[04:40:37]  need to do a refresh on that like update some data um we should be able to re-render the stuff outside of the islands and swap it in while keeping the interactive stuff
[04:40:47]  the interesting part is here's the thing i mean not to go too deep on this but how much dom state and maybe this is my fundamental flaw or my thinking here but
[04:41:00]  how much dom state are we keeping in the non-interactive parts like and maybe that's a differentiation maybe with react server component model you can do interactivity to a
[04:41:14]  certain degree outside of the client components i don't think that's true though because there's no state so yeah because what i'm getting at it's like okay if i do
[04:41:23]  the swap approach that i'm talking about the inputs will lose focus for like or whatever stuff will lose focus when they're the outside of the islands but i wonder like
[04:41:37]  what are you doing when you have no state outside of the islands like is i think persisting the islands might be just enough and as long as you can essentially reduce the
[04:41:58]  size of the pieces that you're swapping the performance should be good enough i i think that the key insight here is that for most forward navigation inner html is faster
[04:42:10]  it's gonna be faster than diffing it's gonna be that you literally just set the dom notes so like when we're streaming it or whatever like whatever mechanism we get working
[04:42:16]  there to do the replacement replacing straight html is gonna be faster and it's gonna be lighter weight than doing react server components it's just it's just gonna be
[04:42:23]  it's it's the fastest way to go from a to b you get you stream in the new html and you hydrate the pieces i need to hydrate the
[04:42:31]  tricky part is when you're on the same page but if we have ability to persist the islands then like the only thing we're losing is the diffing outside and now
[04:42:45]  diffing outside might be more performant if it can go oh you only change the one text node here but it's also the less common case and people are used to waiting
[04:42:58]  on it so i like i'm gonna have to see but my suspicion is that rscs might not be needed um actually from like on a complexity standpoint and we can achieve
[04:43:13]  very similar things so yeah this is a hypothesis right i mean service workers uh caching responses can always help um but uh that's that's like an extra layer i i
[04:43:26] 'm thinking mostly about mechanics here at this point yes yes so it might not even be the hardest problem um but it is an interesting problem because you somehow have to not only
[04:43:46]  you you have to encode you have to kind of like know that you're refreshing the same page and that somehow the islands have um a how should i put it like
[04:44:05]  a stable id so like putting a different component in the same slot isn't going to generate the same id i don't know it's it's i'm interested to see what
[04:44:14]  astro does because they're working on that part of the problem i've been working on the other part of the problem if if if we can uh if we can kind
[04:44:20]  of share notes i think we we could be looking at um a different sort of approach here and as i said it's it's like looking at the hints of it like what
[04:44:30] 's that going to add another kilobyte of code like this is a very lightweight approach to get kind of best of all worlds so i'm i'm pretty excited about
[04:44:41]  this i mean astro was looking at doing diffing right um using like a morph dom type thing or micromorph i'm just not sure that diffing is the right
[04:44:58]  solution at that point we'll have to test it and see but i i i i do wonder oh yeah the astro spa example um let me see if i can get
[04:45:22]  that all right yeah is there a live demo of it if not yeah okay so this is using yeah okay here we go yeah so this is a turbo like thing right okay
[04:46:09]  so it has containers to do swap this is basically like the mechanism that we use on the routing although it i don't know if it nests yeah i don't think
[04:46:32]  does this have uh does this this doesn't have uh persistent islands yet though it looks like this looks like a way of doing partial turbo links like swapping so yeah to
[04:46:45]  answer the question they it looks like they've done something somewhat similar but like kind of specific like whereas in the like the solid example you actually literally author the code the same way
[04:46:54]  you author all your solid start code it just works um but yeah okay that's it's good to see that there is work happening in this zone it's at the very
[04:47:07]  bottom did i close it too fast they deprecated it yeah and this these are the kind of problems that we haven't actually solved yet in any like to a certain
[04:47:22]  degree with any kind of client routing react team's been working on this backcash is something that they're very considerate about um uh talking to dan a few months back
[04:47:32]  um but the other problem with the backcap like it's funny in spas you sometimes don't want the backcash um michael rawlings from marco was telling
[04:47:40]  you the example where they'd actually implemented something pretty good like the backcash but then they realized like they actually didn't want it so it's it's it's
[04:47:47]  it's it's interesting oh link to the demo at the very bottom okay my bad um let's see if i can still get that i like how they fake the browser
[04:48:23] 's bar but yeah this looks i mean i could probably confirm this i don't know why they're doing such a big like refresh i guess they want to show it off
[04:48:38]  but doing such a big refret oh what oh that's weird they're actually replacing like the whole document like if i open up the head they're actually doing okay interesting because
[04:48:58]  it's it's not triggering the browser but it is actually like it's not preserving state okay that's interesting this is unless this is doing something okay okay let's try
[04:49:17]  this something oh okay what happens i go here okay good okay yeah interesting but yeah it's basically replacing or like modifying all the html um and i don't think
[04:49:35]  it's preserving that's it but that's it but that's that that is interesting uh someone's interested in dan abramoff status we'll we'll we're almost
[04:49:53]  done here for this week but i'll i'll i'll i'll anything dan says i'll i'll put in how do i make it render a client react panel component
[04:50:05]  but have its content be the result of the server render which is also so and have those comments be part one they're active contact yeah yeah so that's that's what i
[04:50:12]  implemented in solid here like it might not be obvious here but the this is a this in here is a server rendered component and this is this wrapper of the collapse is a
[04:50:25]  client rendered component but if you notice this client rendered this not client rendered but sorry client state component this client component here that's stateful wraps this whole recursive tree and then
[04:50:37]  we pass in the children which are server rendered which which happen to have more client components in it which have more client components see how it's recursive so essentially we're using
[04:50:47]  the fact that we're passing it through and yet because we're i mean i can show this i can show this with with this but the fact that we're we're
[04:50:58]  using display none to hide it like okay see this okay i'm gonna use display none to hide it see we're not actually getting rid of it there are techniques you can do
[04:51:07]  in astro supports where you can like get rid of it but but what i'm getting at is this is we don't have to hide this is always server rendered so we
[04:51:15]  don't have to get the data that's why i was talking about the serialization saves changes we don't need the data to actually save it um so like yeah essentially
[04:51:27]  like i added some stuff we don't have in this demo yet for solid 1.6 where we can pass context through the same way we pass context through web components web components
[04:51:38]  are actually a similar problem where you can have nested web components you're like how do you pass context through because they need to mount on the dom to actually do stuff and
[04:51:45]  so there's like this weird async timing and context is broken but i actually solved this with solid and i have basically the same solution here we're going to use the
[04:51:53]  web component context pass through because if you look here solid island is basically a web component it's it's not a custom element but we we have what we need here um yeah
[04:52:04]  uh interesting client yeah client client yeah client idol true um but essentially yeah we we have what we need here to uh um to essentially serialize or at least store a reference
[04:52:25]  to the context as it goes and then when the child wakes up to actually read from the parent context by by by doing a lookup from the dom essentially so we're
[04:52:36]  we have the ability to recursively put server content in client content with server with more with more client content in it and have it basically pass context for you to be part of
[04:52:51]  the same tree and the truth of the matter is i think every single islands framework except fresh which hasn't that where this didn't work has that potential to do this as
[04:53:00]  well marco does it um and oh that's funny i gotta double a go here um and uh uh quick and and everyone so i don't think this is anything unique to
[04:53:14]  react server components and that's what the discussion i actually had with dan um where uh essentially if if we follow this down we're actually telling dan that hey this actually works
[04:53:25]  um this is not something unique to server components so um yeah hopefully that answers that question yeah there's a lot of experimentation going on right now um in this area so i
[04:53:45]  i i i think i think that's the one dan made his spicy tweet uh a few weeks back um if you all remember um or it's not even a few weeks back
[04:53:56]  i feel like it was only a week ago actually it's just been so long um uh and like this is why i am so stoked about what's what's happening over the
[04:54:09]  next period of time right i'm looking forward to the next 12 months because i agree that unreleased things have earned the claim to be thought of as if haven't earned
[04:54:19]  the clinic thought of the future but neither have clear evolutionary dead ends and i don't see evolutionary dead ends right now i see a lot of really cool things um so i think
[04:54:30]  i i think the future here is very bright not just for react i think react has a bright future i've talked about this before but i think there's a lot of really
[04:54:39]  cool stuff right now and it's not clear where like people are already placing their bets you know i've seen that like server component contingent um it's probably people think
[04:54:49]  the stuff that we're doing a solid is pretty cool um i i've seen i've been seeing articles now talking about how uh quick has killed next js you know like really
[04:54:59]  hyperbolic stuff i mean that's that's good people are are are are are seeing different stuff but i like i'm don't count react out like next is going to
[04:55:07]  be leading the forefront on the server component stuff some really cool stuff um quick has a really cool architecture but they're still you know working on how to make it efficient or
[04:55:17]  optimal right um they're looking stuff like fine grain reactivity for that reason no coincidence that they're you know looking at solid to figure out how to be more optimal um so
[04:55:27]  like like these are these are things that are progressing and i think are really exciting and um like i i you know join me week to week as we look through this as
[04:55:42]  stuff progresses because this can be a lot of fun um do check out my vcomp talk next week um and uh and i think it'll shed even some more light on this
[04:55:53]  stuff um as i said i'm looking forward to the future and i hope all you are as well okay i would consider that the end of uh this week in javas
[04:56:04] cript um i don't know if there's anything else for me i i did something weird in my browser window where i ended up zooming in to the chat on my stream yard
[04:56:14]  and now i'm scared to open or refresh the page because i'll lose connection for a second but yeah yeah yeah yeah vconf is on tuesday i think so a
[04:56:24]  lot of really great speakers um it's gonna be really really exciting um it's yeah i mean watch the commit history um i've kind of forced my hand i'm working on
[04:56:39]  the docs right now um they're not great um but me and nikila are doing what we can because i i basically set vconf as the beta release and my video
[04:56:48]  basically tells everyone to go install solid start so uh i'm kind of pressured into trying to do something for the docs this weekend um i already started and we're doing stuff but
[04:57:00]  essentially come tuesday it's gonna be like go install solid start so um yeah we're there like like uh like there's a couple small api things i'm squ
[04:57:11] iggling with but it's it's like it's nothing important um some router stuff like salt start like this isn't production this is beta we're allowed to break and change things
[04:57:20]  and there's going to be bugs but uh we need to be able to support the team and we just need to get docs out and then people can help us with the docs
[04:57:26]  but if you go in the repo um solid start um not the baby food um if you go to the repo um like we have a docs folder which is actually a project
[04:57:42]  at the root of the project and um we're we're we're actually looking at this like two hours ago um there's been there's been you know progress like who
[04:57:56] 's this the keel's in there yeah the docs are rough but i mean let's look at our commit history yeah this is this is this is all we've been doing
[04:58:12]  some docs work is what i'm getting at so this is this is coming together could definitely use some help obviously um typos all the kind of annoying stuff that i'm
[04:58:22]  gonna miss but um yeah i i think this is really exciting um i was actually shocked i didn't realize while i was sleeping on the solid art start already has 1.3
[04:58:32]  um or 1300 stars on github um which is kind of funny because we haven't like released anything yet but i think there's huge potential here and um we just
[04:58:43]  need to get out there so more of you can all help us so um yeah i i think i think i think there's stuff there's bugs and there's stuff that's
[04:58:53]  gonna happen but i mean we're at the starting line now yes quite possibly um anyway thank you all for joining me today it was a wonderful stream um uh let's see
[04:59:09]  is there anyone i know streaming on right now no no nothing's going on i think everyone's at twitchcon this week so um thanks for joining me um let's see i
[04:59:20] 'm i'm gonna need to refresh the page in order to sign out let's see Thank you.