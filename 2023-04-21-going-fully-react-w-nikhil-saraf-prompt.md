---
showLink: "https://www.youtube.com/watch?v=jwppKc4avIk"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Going 'Fully React' w/ Nikhil Saraf"
description: ""
publishDate: "2023-04-21"
coverImage: "https://i.ytimg.com/vi/jwppKc4avIk/sddefault.jpg?v=6441636b"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 7-10 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, 05:49:07, or 5 hours and 49 minutes).
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

[00:00:00]  I'm going to get the stream started right up in a minute, as usual. I'm running a bit late, but of course, this is the start of, starting
[00:00:12]  a little early today. Maybe not for everyone. If you're in Eastern Europe or India, like our guest today, it's actually quite late, but let's see
[00:00:28]  here, make sure I got everything going. All right, all right, all right, all right. Yeah, we're just going to kill that pre-roll like we
[00:00:40]  always do. That's early for me. Yeah, I mean, this is just 9:30 a.m. I just had a meeting at 9:00 a.
[00:00:46] m. though. So, yeah, yeah. Hi from Honduras. Yeah, this is the interesting thing. I'm streaming at an earlier time, which means there
[00:00:58] 's some people probably going to check out the stream today that haven't had a chance to check it out in the past, which I'm pretty excited about. So there
[00:01:07] 's opportunity there. Let's see here. 8:30 p.m. Yeah, there you go. Yeah. Nice evening. Friday evening. Sit back. Relax.
[00:01:22]  Enjoy the show. Let's go spread some stuff out on socials to let people know that we're live. Let me go to Discord here for a second. It
[00:01:42] 's funny. I can never, ever remember all these links. I should grab that one too because we are going to repost on Twitter as well. How's everyone
[00:01:59]  doing today? You guys doing good? It looks, yeah, it looks like a lot of people, it's late in their day. It's not many Pacific time people
[00:02:05]  joined on the stream just as of yet. Um, yeah, 10:00 p.m. There you go. Okay. Let me drop this in the Discord.
[00:02:15]  Off topic. We are live. Bam. And don't mind me. I know you guys can't see my screen right now, but actually, let me share my screen
[00:02:35] . Two seconds. So the fun stuff that happens at the beginning of the stream before anything else happens. All right. I'm just going to tell everyone we are live
[00:02:47] . Perfect. All right, all right, all right, all right. So what are we doing today? Today we are talking about react server components. Yeah, I know
[00:03:04] . I haven't talked about those enough the last couple of days. In fact, there was another amazing set of spaces last night. I started on Jacob's space
[00:03:16] , went into Theo's space where myself, Dan Abramoff, Jessica Sacks from, you know, Cypress known for testing and Vue community and Theo were all
[00:03:32]  talking server components and React and React and React and React and React and React and React and React and React and all these patterns for a nice four-hour chunk. And
[00:03:44]  maybe not as many new insights as last time, but it's definitely interesting to see how the thinking has progressed over time and how people are kind of adjusting to this paradigm shift
[00:03:57] . Now, our guest today, you may know him, he's this will be his third time on our stream, which means he's our most, I think the
[00:04:08]  guest who's been on our stream the most and solid core team maintainer solid start. And you might be asking yourself, why is he building React server component set
[00:04:27]  up, you know, in VEAT, you know, full, fully done up. And we're going to find out about that today. I think there's a
[00:04:30]  lot of learning here. is that it was funny because Nikhil was already doing this before I talked to him. He kind of, he goes off and kind of does
[00:04:36]  his, you know, different experiments and prototypes. But a couple of weeks ago, I was like, man, we really need to figure out the server component thing for Tanner
[00:04:43] . And Nikhil was like, what are you talking about this? So I've been doing for the last couple of weeks already, like not for Tanner specifically, but I
[00:04:48] 've been, I've been working on this stuff. And I think it's really important to understand the different technologies in the space because otherwise you don't know what you
[00:04:58] 're dealing with. I remember when I was doing benchmarks, when I was first creating solid JS, it was a huge part of the process. I'd go and implement more
[00:05:09]  efficient benchmarks in other frameworks in like all the frameworks I could so that I could understand what was important and mechanically understand how all these things differed to tell you truth
[00:05:22] . I don't completely know what Nikhil has been up to and that's what we're going to have them on today to understand that a little bit better. But yeah
[00:05:30] , some comments based on the, on the card. I, yeah, I, I had some fun with this. I have to admit it's, you know, it
[00:05:38] 's there's, there's this just kind of one more premise before we kind of dive into this is there's been this kind of concept recently of fully react. And
[00:05:49]  I tweeted about this a little while ago and people are like, you're making a big deal out of nothing. Except when I pointed out Dan was like, no,
[00:05:56]  we were kind of really actually trying to, trying to, trying to, trying to say this. Right. It's, it's that like, the idea is that because
[00:06:04]  they're pushing people to frameworks, they're kind of setting this bar where they're like, you need to use a certain set of features and a certain kind of like ability
[00:06:16]  to, you know, use future react features for us to consider. Create, um, it fully react. Right. And let me see if I can pull up Dan
[00:06:24] 's response. Because, because I, I just wrote like, you know, the, the age of fully with react is beginning. Right. And then I've been building
[00:06:33]  apps. Sophie, obviously I've been building apps with react since well before create act app was released. And this is true. But I mean that fully react means something
[00:06:40]  like there's an opinion on what classify something is fully using react a certain threshold of features, you know, like we're entering this new era. Oh, you read,
[00:06:50]  you read it as re react to its fullest extent. I don't believe that was the intention. And then Dan goes in my mind. I intended both meanings. Sophie's
[00:06:56]  meaning for the more practical mind reader, but closer to Ryan's meaning for those intrigued by the second section. Yeah. And the tricky part is there's a lot of
[00:07:05]  pieces that are involved to pull this off. Right. Like you need, you need to, you know, embrace the future with server components and all that means that comes with
[00:07:16]  it. And how do we do that right now? Beyond looking at a reference bill that they have in the react, um, repo and, um, next JS recently,
[00:07:26]  there's been a few experiments in different places. There's stuff that dashi has been doing in terms of, I think it's called waku waku or something
[00:07:32] . Um, if I got that right. Um, I probably don't, but Nikhil and, uh, I hope I say his name right, Fetty, uh
[00:07:44] , who created Rackus have been playing around with what does this mean on beat and how can we, how can we be fully, you know, do all the stuff
[00:07:54]  that requires to be a react framework. And not be one of the big players, not be a next or a remix or Gatsby. And to me, that
[00:08:01] 's interesting because now we're getting back to primitives and fundamentals. Um, so that's my big intro here. I think I've killed enough time so we can,
[00:08:12]  um, welcome our guest on stream today. Uh, let's go. Welcome Nikhil. How's it going? Hello. Hello. Hi. Hi. So good
[00:08:23]  to be back. Actually. Can you guys hear me properly? Yeah. Yeah. You, you are. Okay. You're good. Um, cameras coming in. Okay
[00:08:32] . How are you there? It's, it's now 10 PM, but it's, it's basically essentially morning now. It's essentially morning. You, you
[00:08:41] , do you work weird hours? Like, I don't say weird hours, but odd for your time zone, just because of like when everyone is up and doing stuff,
[00:08:47]  like how does that work for you? Not, I mean, not really. I mean, I mean, I have my work hours, which is I have to now
[00:08:53]  wake up at like 11, like nine and then go for work. But then, yeah, like my sleeping time is still like 2 p 2 AM or 3 AM so that
[00:09:02]  I can do my open source work a little bit later. And then, yeah, that's when a lot of the people who are on the other side of the projects are
[00:09:10]  awake. So I like being up at that time. Makes, makes sense. Yeah. And for those of you who don't know, since we had Nikhil on
[00:09:18]  last time, he's kind of picked up and moved his life. He was living in Mountain View for a bit and now you're back in India, right? Yes.
[00:09:28]  Yeah. I'm back home. Don't regret it a bit. Like best decision I've made in a while. And so, yeah, I'm back with family,
[00:09:36]  back at home. Yeah. Much better than my place there at Mountain View. And yeah, so just much pressure and then, yeah, just going at it now.
[00:09:47]  Yeah, no, it's interesting, especially when you're away from home and you're, you know, working, you know, I mean, in, you know,
[00:09:57]  small kind of, I mean, Mountain View is great. But yeah, Bay Area, I think the part that I miss most is us going up to San Francisco to check
[00:10:05]  out all those meetups. Yeah. Yeah, man, I really do. But on the other hand, yeah, no, you've definitely had some more time to
[00:10:16]  do more things and not just be kind of, you know, in that zone. So I'm happy for you there. What was I going to go with? Yeah
[00:10:25] . So what, what, what have you been up to? Cause like my timeline was we were working, you, you made the big move, you know, around December
[00:10:36]  or January. Yeah. And then we started picking up again on doing a bunch of work on bling and the astro migration. Um, and then, um,
[00:10:45]  I got really sucked into socials because of the whole signals versus reactivate. Right, right, right. And then next time I know I'm like, wait,
[00:10:53]  where did Nikhil go again? And you, you've been up to something a little bit new. Tell us what you've been doing. Yeah. I mean,
[00:10:59]  so the story goes is that I was working on bling and I think like, this is obviously being the backdrop is all the, all the stuff that kind of Dan has
[00:11:07]  been doing on Twitter about like, you know, actually fighting for server components and making the argument for their value, which is, which had not been happening very loudly before this
[00:11:16] . And so that was something that I was really influenced by where I was like, all these arguments were really, really resonating with me because it's kind of the same
[00:11:24]  conclusions we had reached when we were discovering all those islands kind of mechanisms with solid start. And I was like, I need to make sure that like, you know,
[00:11:34]  how, how Dan said that we fight to make sure that ideas win and like server components as an idea is something that I want to see win. And so I was like
[00:11:43] , I need to, I need to understand. So like there were a few multi-layered motivations behind kind of the angle I took from bling because bling was
[00:11:51]  kind of had, had already been proven out. I felt like also like most of its extents had been kind of explored, like, like, you know, you
[00:11:59]  can do kind of any, within a file, you can break the code and code up anyway, go as far as, as quick or, and you know, spread things
[00:12:06]  across the worker, spread, you know, just break things up a lot. And so I was like, okay, that's, that's kind of a known direction.
[00:12:13]  And we know where that goes. Yeah. And we know the value of it. And so I was kind of like, okay, I think there's another, and
[00:12:20]  the server components thing was just, you know, building up, building up. And one of the big complaints I had seen people was that, you know, it's just
[00:12:26]  an XJS thing. And like, it, it feels like, you know, it, it feels like there's something kind of locked in there or like, you
[00:12:34]  know, there's no, it's really not feasible. Like, and some of the communication I would say from the react team was also that it's too difficult to
[00:12:41]  do on your own. Like you should, you know, you shouldn't even try. Right. And that, you know, you should just, just use something well established
[00:12:46]  because there's just too many kind of complications and nuances. And so that is something that, you know, didn't sit very well with me. I was like, you
[00:12:53]  know, that can't be the case. You can't be building these primitives and then have it be too difficult to wire up because then your primitives are not good
[00:13:00] . Yeah. I mean, yeah, that makes a lot of sense. And that was my biggest concern. I, it's funny myself, I'm just going to
[00:13:07]  break in for two secs here, big, big, big react fan, you know, in terms of like the way that they approach stuff from a fundamentals primitives perspective
[00:13:18] . But I have to admit all the messaging and everything that was happening around how they developed out server components definitely made me go like, this isn't what I like, why
[00:13:28]  I love react. Like the, I see it's there, it's like, it's, it's the greatness is there. It's just like the, the
[00:13:36]  whole packaging is like, like, it's like taking something good and like decorating it with garbage. Like, I think that's just my own perspective. So I,
[00:13:46]  I'm, I'm super stoked that you decided to like, you know, like, hey, let's, let's put these primitives to the test. Like,
[00:13:53]  let's actually build something with it. Exactly. Exactly. And like, there's the react primitives and I, and the other thing that was being questioned was VE
[00:14:01] AT as a primitive for building frameworks or like, you know, real substantial app frameworks. And that was again, something that didn't sit very well with me because I
[00:14:09]  know like what VEAT is capable of. Like when you build these things in solid start and these features used to take me like a few days to kind of just kind
[00:14:17]  of bootstrap. And I would never see like something being like, you know, it's too underperformant or something. And so I knew that VEAT
[00:14:23]  can handle anything that, you know, kind of these multiple module graphs and everything like that can be handled within VEAT. And so I, I felt like there
[00:14:30]  has to be a place that VEAT holds in this react server components world or server components world in general. And so that was my other motivation. And the third motivation
[00:14:39]  was just to like, to understand, you know, there were a lot of choices that react made with server components that we'll discuss and which made us go, huh?
[00:14:46]  Like why? Or like, and things like that. And so I just wanted to, you know, I knew that building it out would help me understand, okay, what
[00:14:52] 's going on? Why are we making these decisions and kind of what's, what's the reasoning behind it? And so that's what led me to kind of,
[00:15:01]  and then that's what led me to kind of first sit with Fatih and figure out, okay, you know, he figured out something in VEAT to do some
[00:15:09]  server components resolution, because there's a lot of nuances there that we can go into it about like, you know, where all the implementation is really difficult. But yeah
[00:15:16] , one of them is actually in the module resolution, like making sure that you have a separate server components, module graph and a separate SSR module graph. And then is
[00:15:26]  it even possible to run them on the same server at the same time? Or do they necessarily have to be separate? But even sometimes, you know, because they can be
[00:15:34]  separate, that has its own powers. Like where you can have two separate module graphs serving up one react tree, like up to your client. Right. And so these
[00:15:43]  were all explosions that led me to be like, okay, we need to build something on VEAT that kind of serves the same, kind of gives you the same experience
[00:15:52]  as Next.js. Like that was genuinely my goal, which was like, let's see if we can get close to what, because Next.js I already felt was
[00:15:59]  doing a lot of polished stuff. Like obviously they've spent almost a year, it seems like on, on this polishing everything out, the router out. Mutation are
[00:16:08]  still not there. So that was, I think that's something that I think we have done first, like got the mutation cycle, the refresh cycle. And we'll discuss
[00:16:16]  that as well. So a few extra places where it seems like the act is going. And so just, I just wanted to see like, what does that expensive,
[00:16:23]  because that is needed to complete the whole story in this react server component story. You need the mutations. Otherwise you're not building an app at least yet. That is true
[00:16:32] . Yeah. And so it's, it's, it's in the, it's in the middle of all this where like, I built this thing called the package
[00:16:42]  name is called fully react. It's a play on the fact that, you know, the, we're going the full stack doing the server side react, the client side
[00:16:49]  react, playing a pun on what the react team calls fully react. And. I didn't, I had no, sorry, you guys actually named it that. I had
[00:16:58]  no clue. I just made the stream title without you even mentioning that. I was just like. Perfect. I saw that the NPM name is available. And I
[00:17:07]  was like, I am getting on top of this because I was thinking of something like neat, like really small that had the react reference, but everything close to react is always
[00:17:15]  taken. But then we have to react. That is awesome. I love it. It's so funny. Cause I, I honestly was just like, I knew I'd
[00:17:24]  done the tweet and I was like, let's just, I like once, like, you know, I'm always got marketing brain on in my head. I was like
[00:17:29] , I'm like, okay, he's doing the full solution. He's doing the full solution for react. This is what it means. Fully react. And
[00:17:35]  I knew, I remember my tweet, which by the way, stole it from Fred from Astro. He, he hadn't tweeted it. He just showed it in his
[00:17:41]  face and he like, like in one of my discord channels, drop that image with the highlighted text. And I'm like, Fred, can I tweet this? This
[00:17:47]  is like, this is exactly what I want to want to say about it. And yeah, no, that is awesome. I love it. Yeah. Sorry. Is there
[00:17:55]  a link to the repo or is it, is this stuff public yet? Yeah. It is public. I mean, it's moving around a lot, but, um,
[00:18:03]  give me one sec. Yeah. You could just send it to me on the private chat and then I can send it back through the channels and it'll go to both
[00:18:10]  YouTube and Twitch. Yeah. Let me just merge the latest stuff on main. Yeah. Yeah. Let's merge main right now while we're in the middle of the stream
[00:18:19] . Yeah. I mean, yeah, nobody's, nobody's watching. Um, check out, but, um, yeah. Um, yeah. How, how do
[00:18:29]  you want to take it forward? Like, um, yeah. Okay. So yeah, this is where we start. I wanted to understand the motivation behind, behind this.
[00:18:40]  So certain codes are something believe is incredibly powerful and need to understand, understand how they work, need to understand why react made a certain choice. It was, it has
[00:18:51]  improved that beat or, you know, the non framework side of things have, have this ability to play here. So we, we've got, we got our three motivations
[00:19:00]  from here. Yeah. I mean, yeah, we get, maybe just get the, the repo going here for a moment because I think maybe, I think we need to
[00:19:12]  probably start. we don't need to get into like what server components are again. We've done this before. Um, but we do need to at least get to
[00:19:22]  a point where we can show something of like what you mean by fully react. You know, I know you've got a couple of demos you've made and I, and
[00:19:33]  I know that you've, you know, we can get this repo going just so people can understand what the pieces are. Cause like, I can't like, I
[00:19:41]  can obviously just start Excala drawing and we can like, the, the, the, sorry, not here. This one start like designing this out. But I like maybe
[00:19:52] , maybe, maybe while you're doing that, I'm just making some point, point notes here. So what is involved with being fully react? You need a bund
[00:20:02] ler that understands, um, RSC graph. We just talked about you need, um, well, let's see what else we need. We need like give me
[00:20:16]  a second. I'll help you with that list. We need a bundler that understands RSC graph. Yeah. And, uh, of course we need, uh,
[00:20:20]  a router that knows when and when and how to fetch, um, things that both on the server and the client. Yeah. Fetch RSC both on the server and
[00:20:25]  the client. Yeah. Fetch RSC both on the server and the client. Yeah. Fetch RSC both on the server and the client. Because the one
[00:20:34]  of the distinctions between like, obviously there's this confusion between what the server is and what the client is in this kind of terminology of react server component. Because it's
[00:20:55]  not, it's not what we have traditionally called the server and the client. Yeah. Yeah. I know. It's so funny. Yeah. It's, I
[00:21:04]  mean, it's, it's part of the reason why we call their client components islands. Just because like you have these isomorphic components and then these, I guess
[00:21:09] , server only components, but like mechanically nothing is actually server only. Like everything goes everywhere in, but they follow different rules. Right. Okay. Now our repos
[00:21:23]  are ready. All right. The repos not called fully react yet. Okay. I don't own the repo yet. Uh, let's see. I would say
[00:21:33] . Just, just out of curiosity, is this, um, is this something built on top of brackets or is this kind of like a separate experiment? Yeah. So
[00:21:42]  it's separate. It does use hat tip, which is again, hat tip to Fati for that. Because like, there's this thing we've been talking about all
[00:21:48]  this while, which is like this, like wheat needs this server layer, which does the adapter part and just takes care of the fact that you give it a server entry point
[00:21:56]  or request response handler, and it should just take care of deploying it anywhere, everywhere. Yeah. And so hat tip is coming close to that without like all the framework
[00:22:04]  is stuff on top. It lets you do all that on your own. And so I, it was a very good choice for us to like use it here because it just
[00:22:11]  stays out of the way and just gives you a kind of a web page, web page API, like request response handler. Yeah. Which is, which is, does
[00:22:19]  it, is it, it's not, is it worried? Like how does it, I, I, I'm going to have to look at hat tip at some point
[00:22:23]  in terms of the deployment thing. I think I'm actually going to pick your brain a little bit later, but we'll, we'll, we'll get, we'll
[00:22:28]  get to that. Cause, um, you've been, you've been, you've been fooled a little bit. Like we're going to come here and talk about R
[00:22:35] SCs, but then I'm going to pick your brain on stuff that I've been working on. So I got you here. Perfect. Perfect. I like to get
[00:22:41]  trapped like that. Um, okay. So yeah, so, uh, we need a router that knows how to fetch RSC. Um, we need to, we
[00:22:51]  need to make the, in, in production, we need to make the client aware of some, uh, kind of manifest of like how to fetch certain client modules, like
[00:23:04]  from the, from your backend. Like, and so it might not be a manifest. It can just be like a convention. Somehow you've managed to maintain between the
[00:23:12]  client that whatever your RSC. So how it works is. So like one thing I would like to just say, you know, talk about is like this RSC format
[00:23:20]  that we see, which is like, uh, that kind of Json ish format. I think the, I kind of, the, the revelation I had, which
[00:23:27] , which you kind of made it very interesting to me was that like traditionally how, whenever we do navigation or whenever we do some kind of routing, we have two things that
[00:23:36]  we need to fetch, right? We need to fetch the template, which is often the code for the new route. And we need to fetch the data. Right.
[00:23:44]  Right. Which is, uh, like what the template would eventually show. Now, traditionally in all our, in all our frameworks for the past few years, it has been
[00:23:52]  like two different kind of fetches, right? It has been two different requirements. The code goes separately. The data comes separately and they kind of don't inform each other
[00:24:01]  too much. Like you can have some build time kind of information about what, what code should be fetched with what route. But apart from that, you don't
[00:24:09]  have much coordination between the code and the data. And the RSC format kind of brings them both together. And it's kind of a bundling of code and data together
[00:24:17]  of like the template and data together, because it can send as much template as, you know, you want to send from the server and just be sending references to client
[00:24:25]  components. Right. Which is kind of your data informing what client components show up to like your browser ever. So you, your, that information tells you which client component
[00:24:38]  and what the props are for said client component, which is the serialized data. Exactly. I guess, but you don't have to, and like this format is something
[00:24:47]  React outputs for you. You don't have to be too concerned of how it generates it or? No, I think like the, the most surprising thing for me was how
[00:24:54] , like not even once I've had to like debug anything from that. Like the, the helpers that both react gives you on the client and the server side,
[00:25:01]  like to encode and decode that thing is just kind of seamless. And it handles serialization of, I think so many different like types of objects, like promises,
[00:25:10]  I think maps, sets, everything. Yeah. I think it's a, that was a really nice experience to see that something so new, like not breaking all the time
[00:25:17]  on you, like in terms of the format. Right. So reacts basically already provides a serializer for you. This is something that we've been working on a lot recently
[00:25:25] . I don't know if you've seen Alexis's work. He's been, we, we brought a much more powerful serializer into the core of solid with 1
[00:25:32] .7. Yeah. And he's been just pushing stuff forward. Like how can we serialize this? You know, different types of objects. It's a very important
[00:25:40]  part of the frameworks right now, moving into this zone. Obviously quick is, you know, famously, you know, talking about how they serialize closures. Right.
[00:25:50]  And that like, these are, this is kind of the zone we're working on, on the framework design, but luckily you don't have to worry about this.
[00:25:57]  You just, okay. So where'd we go? We got, we got to have our bundler. We have a router. We have to somehow communicate the client
[00:26:05]  where it manifests out of fetch modules. Can you explain this just like a tiny bit more for me right now? Because what you were talking about with the RSC format,
[00:26:14]  like a lot of information is coming over the wire. Is this something, is this why like Next.js renders a whole bunch of crap to the page when the
[00:26:23]  page first loads that you're like, why do you need this? You don't typically need this in like islands frameworks. Yup. Yup. Yup. Yup. So,
[00:26:33]  so the idea is that, I mean, during, during your build setup, your, your client, your, when you build, when you build like, you know,
[00:26:39]  what client components are going to output as eventually it ends up naming them as, you know, some random chunk and some prefix or something. Right. And so you,
[00:26:47]  you, what do you need is a manifest of like when eventually my server component says, get me, um, client component one, two, three, you need to,
[00:26:56]  you need to know what the client should fetch from the server. Right. Because this can be happening because those files are kind of static files, right? There's something in
[00:27:05]  your static deployment. So the client needs to know what you are able to hit for any specific, uh, server component. So like client component reference, that's it.
[00:27:14]  Now I think ideally what you do is you, you make your build process in a way that your, what the server is sending is exactly what the client should just call
[00:27:22]  so that you can just kind of disappear the manifest at build time. But like, assuming like I haven't been able to do that yet. So what I need to send
[00:27:30]  is like a mapping of like this idea of a client component maps to this URL, which is normally it's small, but yeah, if the client components get like, there
[00:27:39] 's a huge number of client components that becomes a problem. But I think it's not a big thing. So I'll not say this is like a needed thing.
[00:27:45]  I would, I would even kind of like. Okay. Okay. Yeah. I mean, I'm just, I mean, this is fine. I introduced by, by
[00:27:53]  the way, like I'm doing hacky things. It's, it's, it's fine. We can get to that in a second because I, I've got
[00:28:00]  a follow-up question once we finish this list. And I think that's where we will remove it. Um, what else is, is there anything else we have
[00:28:07]  to, that we need? So this all gets us. Oh, this gets us. Yeah. So the bundler understanding RC graph, this goes beyond it. So when
[00:28:15]  you need a module resolver that knows how to resolve things in different environments. Right. So you need, and in our case, eventually what we had to do was we
[00:28:24]  had one node process running the server side rendering and it could open a node worker with certain like kind of node resolve conditions that would work for the react work react server part.
[00:28:36]  And you're kind of doing like a request between the two like processes. But every time you do a server side running request, your main server side rendering server makes a
[00:28:48]  request to the worker to be like, okay, give me the RSC output for this route. Yeah. I'm the order that we're putting these in is kind of
[00:28:59]  out of order. Yeah. The router is a little bit higher level. Okay. That's fine. I'm just going to rearrange this as we're talking. Okay
[00:29:07] . And with this, we can, we can show the RSCs on the page. Uh, do we have a router? Yeah. Okay. We have a router
[00:29:23] . Yeah. Yeah. So normally you have a very thin like client layer that just knows like, yeah. So we know it's basically a very thin router that knows how
[00:29:32]  to fetch RSC and kind of just cache it every time you would like go between routes. So I think, I think kind of on the infrastructure layer, that's
[00:29:42]  it. There's a lot of like, there's a few runtime things that you need. Yeah. Did you need anything for the mutation side of the story as well?
[00:29:51]  Did I, I mean, mutations, you need this kind of coordination. So you need the server to understand post request. You need the server to understand. Oh yeah
[00:30:00] . So you need a server, which, which kind of recognizes mutations as like special requests. So that when they get a mutation, they're able to send like fresh
[00:30:10]  RSC back instead of just sending, like saying, okay, the response is fine. Or like, not okay. Like just sending an error or a successful thing.
[00:30:19]  It should recognize specific post requests as mutations and be able to run the mutation. And then based on if the mutation redirects somewhere or if the mutation, you know, errors
[00:30:31]  decide what to, what the client should see next. So instead of doing two requests where the client goes, do the mutation, the mutation sends a success or an error
[00:30:40]  return back. Then the client makes another request for the fresh kind of data. Right. Because almost every mutation causes some kind of refresh of the page. And then, so
[00:30:48]  I think the biggest kind of performance gain of everything I've seen is this, like trying to have, having to avoid this double request during mutations. Yes. And you get
[00:30:57]  this one loop, which is like, which now I've seemed to understand is that how that's how PHP like post you. Yeah. That's what I was saying
[00:31:04] . That's how MPAs work. And it's what we modeled. Like when you turn off the JavaScript in remix or solid start, that like, it's kind
[00:31:12]  of how it works. Yeah. It's a full page reload, but it is a single trip. Yeah. I mean, most of the time, I think we still
[00:31:21]  do redirects. So like we send a redirect, then the client kind of solves that redirect. And I feel like, I think next, because I've seen some of
[00:31:29]  their code around this. And I think next is still doing that where like, you get a redirect back. They send the redirect to the client. Maybe, maybe I
[00:31:36]  should also be doing that. Maybe that's better practice than this, what I am doing. But right now, regardless of a redirect or the user wanting to stay on the
[00:31:45]  same page. I just refresh the whole RSC tree. And then like, just let the new stuff show up. Like, yeah. Yeah. It's interesting.
[00:31:55]  Okay. I guess my question for you following up on the mutation side is, does the client need anything special to accept? Like, like, let's say you do
[00:32:05]  a route, you like, like, let's say you do mutation and you're going to, it's a search. So I could say a search isn't a good
[00:32:12]  example. Because search, we don't usually do by post, we usually do by query string. Let's say you do a mutation where you have to actually refresh the data
[00:32:19]  on the page. Right. Like, increment or something. Right. And then, you basically fire off your, your request at this endpoint, and it returns the R
[00:32:31] , the new RC data. Right. How does the client know, like, does the client have to know how to handle that specifically, different than something else? Like,
[00:32:41]  it has to be like, this was a post request I made, so I, now I know that I need to re-render or whatever from the top of the tree
[00:32:49]  or whatever. Like. So, yeah, I mean, that part you'd be interested to see, like how the whole. Okay. Like the, how the,
[00:32:56]  how the routes, I think the, like the interesting implementation side of this is how the routes are handled on both the SSR side and the client. And because it's
[00:33:05] , it's, the route is the thing that these frameworks will always hide from us, because that's where all the kind of the difficult kind of logic lies. So it
[00:33:14] 's the route that you'll never have to write. Right. Yeah. But yeah, that's where a lot of this stuff has to happen where, where it has
[00:33:22]  to figure out like, okay, something new has rendered. Oh, I think it's interesting to see how, like, how react kind of feeds this RSC tree as
[00:33:33]  like, like how you do react.create element and get like a JSX tree that you just fit in. Right. You can just pass it to the React
[00:33:41]  renderer. You can actually treat any RSC output or like a readable stream of an RSC output. Yeah. As, and you can just call react.create
[00:33:48]  element. They have a special one, react.create element from server response or something. You just run that and then you just, that is just a JSX
[00:33:56]  tree that you handle as same old regular react. Like you can decide where to render it. You can decide. And like kind of a nuance here is that they don't
[00:34:05]  have as strict of like, you know, requirements of maintaining the same tree between the server and the client. Because there's no like kind of hydration kind of business going
[00:34:15]  on. Right. So what they eventually have to reconcile against is the DOM, which like, which is like the clean DOM that you have without any keys at all. As
[00:34:24]  long as like, they can just keep seeing the same pattern as there are, you know, their components are outputting, they can kind of keep falling back. And
[00:34:31]  so that's why you can hide kind of have different routes at your server and your client. They don't have to match completely and they can have their own logic of like
[00:34:40] , how to fetch RSC on any specific interaction. Right. But I mean, the client components have to match up. Ultimately, the server components don't matter because you
[00:34:49]  can like, you can just write them. But the client components, you have to know that this is the same client component on both sides so that you can pass the props
[00:34:56]  to it and it won't just like recreate the thing. Well, I guess that's an interesting question. I mean, does maybe react doesn't actually care because react
[00:35:05]  recreates everything every time. Anyway, do you know what I mean? Like, if you hit the same client component with new props, react is just like, what
[00:35:12] 's the difference between rendering it the first time and the second time? There actually isn't a difference. No, no, they don't. They'll never create like,
[00:35:19]  if you're if you have a button, and it's already been rendered, and you have a fresh like you do react on the router or refresh, and you've
[00:35:26]  got a fresh whole RSE tree, that button doesn't like, unmount. Right, but what I'm okay, right, because reacts component life cycles is why you
[00:35:36]  have to match it up because I was gonna say like, yeah, okay, fair enough. Yes, no other reason. Like, yeah, so it just makes sure that
[00:35:42]  it knows that it's the same component as the old one. And that's why you still need keys. Like, even when you're doing server components, you still
[00:35:49]  need to, like, if you're rendering a list in your server components, you should key them so that it can do this diff across requests from the server, like between
[00:35:58]  items, right? Yeah. Like, kind of that, you can call it this reconciliation fine grained between the two server requests like that are made. Yeah, yeah
[00:36:07] . Wow. It's interesting. I do wonder how important the key is in stateless scenario. But I guess the thing that does a DOM hold state? Anyways, that
[00:36:17] 's, those are more specific questions that would go beyond this. I just wanted to understand what the pieces are we'll be talking about today. So this is very helpful
[00:36:25] , Nikhil. Yeah. So you've shared with us a few moments ago, and I put in chat, the link to your repo. Should I take a quick look
[00:36:38]  and see what that is? Yeah. Let's do that. I mean, I don't know if you have a decent readme yet. I mean, there's some
[00:36:49]  high level here. What do we got here? Goals. I'm wired together all the pieces needed to build proper app using VNRC. Implant the necessary
[00:36:56]  router, bundler plugins, build setup to get SSR'd. Okay. Long term, eventually want to extract the pieces into modular parts for other V based frameworks to use
[00:37:02] . So they implement a V plugin for React server components. Ideally hitting swap. Yeah. So my follow up question actually was this. Now that you've like done all this
[00:37:11]  work, the next person who tries to come and pick it up, you know, how much of this stuff will they not have to do? Because you've already taken care
[00:37:19]  of it. Ideally, I think like I built it in a way where, so there's an interesting dance here, which we've observed earlier. And like how you
[00:37:27]  talk about how the router is the, the router is the framework, right? So initially we did like, okay, there is a separate V plugin that just knows how to
[00:37:36]  handle like a different environment between RSC and SSR. And then we let the user handle everything else. But as I like, you know, as I keep kept
[00:37:45]  on going and I started implementing the router, there was just no way of keeping everything else. Like very, very independent of the router. Like, right. But do you
[00:37:54]  understand though, that you're just building another JavaScript framework at that point? Like, yeah, no, I, I am completely aware of that. That's why I
[00:38:01]  decided to name it also. You don't, that's when you have to realize the Christian needs to happen when you've spent enough time building all the pieces out.
[00:38:09]  Yeah. So I would say that it's, it's like, in some ways it's like 50, 60% up to Next.js already. And I'll say
[00:38:18]  like, there's a, a bit of more effort required to, for somebody to take it all the way. Right. And have like a competing experience, like, uh
[00:38:26] , like with all the features that, you know, kind of, they can have, um, uh, I think like most of the rails have been done. Now
[00:38:34]  it's just about like implementing more and more cooler things about like nested routing. So if you go back to the repo, uh, I'll show you an interesting kind
[00:38:42]  of, if you scroll down, I was doing, I was keeping a checklist of, okay. What all I really need to do to eventually say that we're kind of
[00:38:50]  ready. And so, yeah, I mean, if you want to go over this, this is like a more shelled out list of what you had, the list you
[00:39:00]  were making. Right. Which is like, so for your, for your initial server side rendering, you need to do a few things. First, like for a request
[00:39:08]  that comes, you need to get the react server component kind of output for that route. So that's, that could be on the same server as you, or it could
[00:39:16]  be a separate server that runs close to your database. And like, you know, that call happens over the network because, but because it's one call, which will
[00:39:25]  include all your database patches. There's no, like, there's no waterfall at least between the big network places. So the closer you put to your database, the
[00:39:33]  more advantage you'll have off that RSC setup. Because if you're, if it's close, if it's, if it's at the edge and your database is
[00:39:41]  very far away, the, the kind of the problem still remains. Like the problem will eventually get solved. If you're able to do your RSC render very close to
[00:39:48]  your database and then your server side render close to the user. And so you're like in two big hops, you can probably cover everything. Otherwise you would have to
[00:39:57]  do like one hop to the server and then a few hops to the database, all of which could be big hops. And so like one of the big gains I saw was
[00:40:05]  that this, this ability to split the two steps kinds of allows you to optimize both of them to like where they are best served. Like, you know, one of
[00:40:16]  them could run on the edge, one of them could run on serverless with Prisma. One of them could run on a CloudTrail worker close to like your K
[00:40:21] V store, something like that. Interesting. Cause you're, you're talking about like the split between the server component and the SSR portion of it. Yes. Yes
[00:40:30] . Because, yeah, I mean, this is one of my biggest concerns was that the patterns promoted here around data fetching are kind of like anything that invites waterfall.
[00:40:42]  Like will eventually be a problem. Like, it is suspect. It is suspect. So that's one of the questions I have that, you know, we need to answer
[00:40:49]  with this, the actual component stories. And there might be something that I'm not getting about next.js that I'm hoping somebody will clarify. But it feels like they
[00:40:59] 're not, it feels like there's still work left for the user to do to get an optimal experience. Yeah. And the main part is that, that nested
[00:41:10]  sections, like if you're, if you're doing await stuff in each of the nested sections, I still don't know if they will happen parallely. I'm
[00:41:18]  not sure if they're doing it like that. Yeah. The only hint I got was that they're doing some pre-loading where they call the top level route
[00:41:28]  component just once before rendering actually, so that the promises just start and populate the cache. Like you just trigger the polishes promises, but you like dispatch that render result
[00:41:39] . Yeah. And you start again, but you're hoping that you're like initialized enough promises to like have a head start. Yeah, yeah, yeah. It
[00:41:46] 's like the pre-pass mechanism and stuff. And this, it's this, the thing that pains me with this is like, man, like suspense with proper hoist
[00:41:56] ing of data fetching removes the need for pre-pass. And going back here again is, it's, it's fine. I had a whole conversation with Dan
[00:42:04]  about this yesterday for four hours on a Twitter space. No, I think, I think that it looks like the solution is that a loader like pattern will emerge or like
[00:42:13]  you will just have to do it by hand where you're like triggering the promises at the top level. Yeah. And then you're like, you know, just hoping everything
[00:42:22]  resolves properly. And so I don't see a way out of that yet or like the solution is not there yet. And I think it'll either be some library
[00:42:31]  will come up, which will help you do something like that or some pattern will come up. Right. Well, because deduping, deduping a fetch is insufficient
[00:42:39]  to cover all the use cases. Like it just doesn't actually handle it. I mean, not deduping fetch, but I thought the cache function, like I've
[00:42:48]  already experimented with that also and it works pretty recently. Like the fact that, you know, it allows you to again, think of data as like a component local thing
[00:42:56] . Yeah. Because you never have to think about, okay, am I sharing this data with anybody else? I just care about if it, if I need it and
[00:43:03]  I just call it and the system will take care of making sure I'm not overfetching. Right. Right. I mean, it's the react query thing to
[00:43:09]  a certain degree with the deduping or the key and you're just like, okay, I'm good. It's just the unfortunate part about it is like, I
[00:43:16]  mean, it's been good enough for a while on the client, I guess. It's just like, it doesn't actually solve the waterfall problem completely. It just
[00:43:23]  like, it can help in basic cases, but then because of the logic. Yeah, I don't think it solves the waterfall problem. Yeah. I think it solves
[00:43:32]  the problem of sharing data between components. Yeah. Where, because the problem that react server company has to solve is that they have no context. There's like, you know
[00:43:41] , so there's like no way of keeping context. The only way you do is like drill props or you have, or you use the cache. And then you can just
[00:43:48] , you know, because the cache is request specific, it's kind of context, right? Because any server side context is a request specific context. So your cache is
[00:43:56]  kind of like context on the server is how I've treated it. Which is, which is a good approach. I like that. And there's no, there's no
[00:44:04]  expectation of it like persisting. And like, I think, I think the cache API and stuff is very clever. It's just like, it's, it's,
[00:44:11]  I don't, I hope it doesn't end up leading us to things like prepass and being basically like the linchpin on having this whole thing work performantly.
[00:44:21]  Like, ideally for me, the, the gold standard is that if they're actually able to do this, is that you have, you know, segment, segment two
[00:44:30] , segment three, all three of them actually start rendering at the same time. Like that RSC stuff, at least like the data stuff. And then you get somehow those
[00:44:40]  all three RSC outputs are wired up on this, on the SSR side. And then, you know, kind of streamed efficiently. And so you're getting the
[00:44:48]  benefit of the loaders. But you know, you're not changing the programming model. Like that's the gold standard. And I'm hoping that they're doing that
[00:44:57] . And I just haven't figured it out yet. Or like, I'm going to figure it out. But I think that should be possible because they have kept the parts
[00:45:06]  independent enough anyway. Because that's how it's designed that from the client, you should be ever at any point, you should be able to ask for any specific segment
[00:45:16] . And you don't need to have the other segments to get an accurate result. So that means on the server, like during SSR, you could be doing the same
[00:45:21] . And if they're independent, they can be parallelized. And then I think they're anyway stitched together by client components. Like the three segments, they're not
[00:45:32] , there's no like the fact that there's no client component that comes in the middle. There is a client component in the middle of all three segments. Because you
[00:45:40]  need that client component on the client to actually be able to swap just at segment, right? So you're already including these client components that during SSR, like know
[00:45:50]  that they are, you know, they can each independently get RSC output and render that. And so I think there is a way to go to like getting that panelized
[00:46:00]  data fetching, no waterfalls, still keep the same programming model without including loaders. Like, as long as like, okay, you will still have waterfalls in
[00:46:08]  the same segment. But the thing we're trying to avoid is the major thing we're trying to avoid is waterfalls between segments. Yeah. Because if you're going
[00:46:17]  to cause waterfalls within a segment, you can do that anyway, in any model, right? Like within a segment, you can always have two of each one after each
[00:46:22]  one. Well, but here's the thing, the top level, the top level waterfalls are actually easy to solve. Even like, okay, the deduping thing
[00:46:34]  will be sufficient for a lot of the top level waterfalls as long as like you can, as you said, get the segments thing. The problem I have is more
[00:46:43]  of that, like the in section waterfalls, because they're not, it's not obvious. Like it's no longer like, Hey, like here's a stadium in
[00:46:52]  front of me. Oh, this chains, I should put it together. You've now just spread it underneath of some ternary operator that happens down in the tree
[00:47:00] . And you didn't like, like, you know what I mean? Like you, you lose track of where all the stuff is. There's a suggestion that tooling could
[00:47:06]  help, you know, like where we could have like network graphs and visualizations for, on the data server. But like, I'm just hearing a lot of added
[00:47:13]  complexity to avoid people sending people on the happy path. I don't know. It's, it's, it's like. No, but then I think the idea is
[00:47:22] , the idea is like to, like the holy grail of composability is that you have to, you know, kind of keep it together somehow. Right. So
[00:47:31]  you could, for example, if you want to consume a component, like the example that always, if you want to compose, consume a component from NPM and that component
[00:47:40]  wants to do async stuff. Like, how do you not like, you know, you have to be able to use that component somewhere in your tree. And so that
[00:47:48] 's why you just wrap it in a suspense boundary so that you can control the life cycle of what happens if that component takes long or takes a waterfall. Yeah. It
[00:47:57]  just, it doesn't actually solve the problem. Like. No, no, it doesn't solve the problem. I think it's just, it's. In fact,
[00:48:04]  it actually almost promotes irresponsible patterns. Like. Okay. Like. It enables them. It enables them for sure. I, I do agree that, you know, it can
[00:48:16]  go bad also. But, but it's more than this. It can go bad. It's actually like endorsing it to go bad. Like, man, like
[00:48:24]  if you're telling people to go put data fetches in the components and then publish them in NPM and then I'll just pull them in. Maybe they don't have
[00:48:34]  to be data fetches. The idea is it's, it's any async flow, right? It's, it's the fact that they could be, they could
[00:48:40]  have some long render work, right? Or the idea is that the current state of the art is that, you know, components you consume can almost have like no as
[00:48:50] ync stuff that is, you know, wired up together with your life cycle. So you have to do the async stuff for the component and pass the data. So
[00:48:58]  it kind of like weakens the composability of the ecosystem itself. Whereas, okay, there's a lot of power in the user land, but what happens, like,
[00:49:07]  how does it remain composable across the spectrum of like, then people are able to publish things that are usable in the same way. And like, imagine that you can
[00:49:17]  have a component that takes that does data fetching, but it's rendered by a route segment where like, there's nothing happens before it. In that way, it would
[00:49:27]  be equivalent to like kind of almost any other, like, parallelized. I just wonder if we're trying to force the wrong abstraction on the thing, like some things don
[00:49:36] 't need to be components. React has this tendency to be like, yes, this is a component and this is a component and everything's component. And then at a
[00:49:43]  certain point, we're like, oh, crap, hooks are actually better. Like we like for these things, not everything needs to be a component. Some things needs to
[00:49:50]  be a hook. This feels like the same sort of thing. This like this feels like we're going to like go in and make all these things components and be like,
[00:49:58]  no, we actually need hooks like or like something like this because it act like components actually don't solve the problem. It's interesting. Maybe I shouldn't be too critical
[00:50:07]  and just like let them hang themselves, like give them enough rope to do that. I just, I, I, I, this is just one of those things where
[00:50:14]  like, I feel like I should speak up about like this, but then it's kind of like, you know, I don't, I don't. I would say
[00:50:22]  that I, I would say that I, I share the same kind of question about the fact that I don't feel like the data fetching problem has been solved.
[00:50:32]  essentially by the right. Right. I think it's, it is. I feel like it brings enough things to the table where like, just like the other thing the actors
[00:50:42]  done, we'll figure out the way. Right. The problem is this is, this is the danger. And I think, I think I'm seeing it now. It
[00:50:48] 's, it's the DX story seems so convenient that no one's going to argue the DX. So they're going to be like, man, this is great.
[00:50:54]  I don't have to worry about waterfalls. I just fetch in my component. We finally hit the Holy grail. And then the reality doesn't match up. And
[00:51:01]  then people who were there at the beginning and no, no, just like watch this happen for six years and then get really angry. And then their names, Alex Russell
[00:51:09]  or whatever, like, like this is, this is this, I feel like we're at another Alex Russell moment. Now where people who were building patterns and in the know
[00:51:17]  at the time when the paradigm shift changes, they're just like, this is, this is batshit crazy. Like how, how is this even remotely acceptable? And then
[00:51:26]  people are like, but the DX and then six years from now, we'll all be like, yeah, that was a really stupid thing. But you know, how
[00:51:34]  would we know unless we tried? Right. No, I mean, very well could be. Yeah. Someone's asking if I'm worried about the N plus one problem.
[00:51:44]  Yeah. But it's more of like, I understand, like there needs to be like data loader type patterns. Like, like in GraphQL, we solve the N
[00:51:50]  plus one problem. The problem is this is like hidden into your, it's woven into your tree. Like, it's not just like in front of you and you're
[00:51:56]  like, oh crap, I'm fetching this. And then I'm fetching this and I see it in my data loader. It's like, I'm
[00:52:01]  building this out and I imported this package from NPM that it's causing the N plus one problem outside of my scope of, of things. Right. Yeah. No,
[00:52:10]  but I think, I think the philosophy is something that you probably share is that at the react layer, they should not like, you know, they should not be deciding like
[00:52:20]  where the data fetching happens. And then their, their responsibility is to allow that composability across everything. Right. Right. It is next.js which has to
[00:52:30]  take care of like the fact that. Right. Not promoting these patterns. Exactly. And if react wasn't doing things like patching global fetch, I could believe that.
[00:52:38]  But then they've kind of overstepped. I think React doesn't. React doesn't. No, React, React does. Dan Abramov said that they did
[00:52:43] . Yeah. He said they did. I think they publish React. And it's, it might not, it might not be like on the public branches, but the
[00:52:52] , like in their next.js solution, react was the one who actually patched global fetch, not, um, next. And then people were like, what the,
[00:53:01]  what are you guys doing? And, and, and Dan was like, look, every framework has their own version of fetch. And I'm like, yeah, but every
[00:53:10]  framework decided it was a terrible idea. Like they did it because they decided that patching global fashion is like, not good. React themselves are backtracking from that
[00:53:18] . They're going to actually not patch global fetch. Dan confirmed this yesterday, or they're going to have it behind an option. And then next.js is going to
[00:53:25]  take responsibility. That split makes, makes sense to me. Right. Because it's not. Yeah. Because once, once react is, is saying, Hey, I'm
[00:53:33]  going to patch global fetch. They are the ones taking responsibility. And they are in a sense, like telling people that this is okay. Even though, like, or
[00:53:43]  yeah, I mean, it's already enough that in the way that the endorse next to suggest it's okay. But like, okay, sorry. We're, we're
[00:53:48]  tangenting here. This was. So I, I, but like that made me go home. But like, I realized, I mean, you realize why they did that
[00:53:55] . Right. So like users can obviously be like, you know, import fetch from react fetch and use it in their app. Yeah. Yeah. But then it's
[00:54:06]  again, the same composability problem. What about the fetches that happen between the libraries that you consume? Not all of them will like kind of, you know, choose
[00:54:15]  to do that. And the problem I think is something that you realize is like, imagine in the, in the SPA world, or even in the kind of the SS
[00:54:23] R world, when you made a navigation, right, you would be getting static content because normally it's just code, right? You just get a JavaScript file. And
[00:54:33]  if you don't have any data, it's so fast, right? Because you're just getting a static file and rendering everything client side. With RSC, that's
[00:54:40]  not in a traditional SSR sense, that would not be the baseline, right? Because for every navigation, you're running things on the server to, to get that same
[00:54:51]  kind of JavaScript file, right? You're getting, you're going to the server and figuring out what you need to render this time. And now you're, now
[00:54:58]  you have some content on a client. And so you're making this cycle on your server when execution is involved. That's why in Next.js, everything by default has
[00:55:08]  to be static. That's the only way you still get the same experience as a SPA, actually. Like for routes where there's no data involved, if you're
[00:55:15]  still having to go to the server and doing RSC render, you, it's, it's way too slow to like, you know, feel nice. Right.
[00:55:24]  But any, any place where you don't have anything dynamic, you have to be able to render it statically to RSC. That's when you get the same experience
[00:55:31]  as, you know, just getting like, just having your Right. side side stuff. The only thing is the initial render doesn't get to as easily take advantage of
[00:55:40]  that. Theo actually brought this up on the space. He was like, can I like SSG the shell of the page? So I don't have to wait for cold
[00:55:46]  starts and have it pulled from a CDN. And like, because he was thinking like if he can SSG, you could, he could SSG the page in
[00:55:58]  like a single page app and then have the CDN serve it. And then like basically have client only components to basically finish the fetching story. So I think you
[00:56:08]  can, yeah. I mean, theoretically it's possible, but you understand what the process would be. You'd have to somehow generate the shell up to the first RSC
[00:56:18]  boundary, put that in the CDN. And then the loading process would be fetch from CDN and then do full RSC refresh on page load. I think I
[00:56:30] , I worked through this yesterday. No, so I built like a, just like a static export thing for my, for my package. And the idea is that like,
[00:56:40]  it doesn't handle dynamic route segments yet, but for anything, anything that, you know, the, you know, the route for, you render HTML, the R
[00:56:49] SC is already in it. Right. Yeah. Yeah. Yeah. I'm not, I'm not, I have to put it. I'm not talking about full static
[00:56:56]  re-rendering. I'm talking about like SSG with, because the data is specific per user, but with like, you know, client only components. This is
[00:57:03]  like a pattern with next where you'd like, it's like stopping at the suspense boundary, rendering the shell. So you have the navigation immediately from the CDN.
[00:57:12]  And then the, in the classic one, that boundary is really clear. It's client only components. At that point, they load fetch and do everything on the client.
[00:57:19]  And like, so you serve this. No, but I don't think it helps, right? Like, because if most of your, if most of your data has to
[00:57:24]  come from the same server that, you know, where you're, where you're serving things from, why do you want to first go to the CDN and get something
[00:57:31]  back? Then start the fetches for everything from your server. Whereas if you're saying things are based on the user, that shell is not going to have much.
[00:57:39]  It's because of the cold start time that he was saying, he was, I was, I agree. Like from the fundamentals thing, you're like, what, what
[00:57:44]  are you waiting? I was like thinking in my head, I'm like, Oh, what are you waiting? Like 600 milliseconds? Like who cares? But he was like
[00:57:49] , Prisma takes three to eight seconds to boot up. And I was like, okay, fine. You got, you got me there. Like if he, he has
[00:57:55]  to wait five seconds, he just, he'll make the two requests. Like every time. Right. Like, right. I mean, but yeah, if you're
[00:58:04]  being able to show something in your shell and there's enough, like, you know, stop over the fold where it's worth it. I guess you can, you can
[00:58:10]  actually still do that. Yeah. Yeah. Yeah. Yeah. And then for sure. I can't do it a little bit. Sorry. I was, I was just
[00:58:19]  thinking the reason that they, they wanted to patch global fetch to probably the same thing, like with async await, the, the, they want the server. It
[00:58:28] 's kind of like the problem you have when you're trying to build a compiler. Like once you're in a place where you don't have, um, framework based mechanisms
[00:58:36]  like hooks or like reactivity, um, like Svelte Lang or like this, you kind of, I noticed this with Marco too. You kind of didn't want
[00:58:46]  to introduce API functions. Cause you're like, look, we have a syntax for this. Why are we introducing API functions over this? It's much cleaner if we
[00:58:54]  can use built-ins and like JavaScript syntax, like, okay, let's use async await. Now we don't need a resource primitive. Let's use, you
[00:59:03]  know, uh, let's patch global fetch. So again, we don't need a resource primitive, like, because then there's no confusion between use and whatever you're
[00:59:11]  going to call it on the server that has a slightly different name to differentiate it. Cause it's still not the same thing. And I think, I think that's where
[00:59:19]  this, that comes from. It's just kind of unfortunate because like Svelte, it's kind of like lying to the, to the language a little bit.
[00:59:29]  Like, and I mean, it removes a lot of power, like control out of your hands. Right. I mean, in some ways it is how I would have
[00:59:40]  hoped react like fetch work. Right. Like in one request, it's, it's like, you know, I'm the lazy one. Right. So I want,
[00:59:48]  I would want fetch to work like that. When if you know that this is all one life cycle and one, you know, it's data for one person. Why
[00:59:56]  are you going, making more requests for the same URL? Like it's, I would hope it caches. So that's why I'm like not too annoyed by it
[01:00:04] . I think there is like two layers to it. One is like the fetch, which is useful for deduping within the same request. And then there is like
[01:00:10]  the caching that next.js does, which is for the ISR and like that long-term caching that I don't know how much, you know, it
[01:00:17] 's good or like if it's needed, I, you know, I'll figure it out over time. But, uh, I think the deduping within the request
[01:00:24]  is kind of such a, such a like simple optimization that you just hope of like, this is a use query would just make it seem so normal. Like obviously all your
[01:00:33]  requests to the same API should get the same data at the same time, like, and refresh together. Yeah. Yeah. And I can see that's how the justification
[01:00:42]  came in on fetch. It was interesting to me because the second, the problem is like the, the second you need to do anything like fetch from a SQL database or whatever
[01:00:50] , you're going to need to handle this yourself anyways. So like, I guess it's just a convenience thing and they just kind of jumped ahead, but it is interesting
[01:00:58] . I said the decision of it being in next versus react is actually a considerable decision on where responsibilities lie. You mentioned here that you need, um, that you felt
[01:01:11]  obliged to make another router to handle this, which is, as I said, that part is interesting to me. Cause I agree almost to the sense that you need the
[01:01:21]  router. Um, and in that sense, that's why solid work has a solid router that we're working on, but react has decided not to own it, which means
[01:01:29]  that every single framework is going to build their own router. And is that might actually be the boundary, like why you need a framework is because if you want to go
[01:01:40]  use react server components off the shelf, you have to go build a router. Yeah. Like when I look at, there's no, there's no way around it
[01:01:48] . Yeah. Yeah. When I look at your list, I'm like bundler understands RC. Sure. Parcel web pack. We're going to get there. No
[01:01:54]  problem. Modular resolution mechanism. Same thing. It'll be tied into the bundler client aware manifest of how, or a dev mode type stuff, client aware manifest of
[01:02:01]  how to fetch modules. This usage disappears with the proper bundling technique. Might not be needed. Yeah. Then router. And then these two are actually routing. Yeah.
[01:02:13]  So essentially the reason that you need a framework is because there isn't a universal router for this. This is, this is why, but when you started telling me you
[01:02:22] 're building a router, I was going to like, can we go like talk to Tanner and figure out what we can do? Cause Tanner already has like the best like router
[01:02:29]  in conceptually, you know, in terms of like types and all that stuff. Can we, he. You'll be happy to see some things that I have in the
[01:02:36]  store. Cause he, he was like, you know, I, I can, this is why he hasn't released Tanstack router. He wanted to see what
[01:02:43]  the react server component impact is. So like, he was like, let's. I, I, I hit him up immediately as soon as I started this thing. I
[01:02:50]  was like, I think your components, like, you know, you should, because you're looking at RSCs. You should not like, you know, try
[01:02:57]  to stay a fight away from like the traditional like react model of RSC and have to do something of our own. I think you should try to see how it works in
[01:03:03]  your model. And so one of my main motivations also was to make sure Tanstack router and like those things. like, I can figure out where the boundary needs
[01:03:12]  to lie with like react server components. And what do these routers need to do? And so I actually pulled in all the Tanstack router code into my repo to
[01:03:19]  figure out like how to tweak it to make it work. And I'll show you that we have, we have the same type things. Like, you know, the types
[01:03:26] cript stuff that Tanstack router has, we have that working with file system routing. Like the links are strongly typed and things like that. I'll show you that
[01:03:35] . Okay. Okay. Cool, cool. Yeah. Cause I mean, one of the biggest concern, Tanner's got an interesting premise and it's something that I think we
[01:03:43]  built bling around and I've been trying to figure out how it sits. It's Tanner has been like, he wants it so that the primitives preclude file system
[01:03:51]  routing. He wants his goal. And it came up in a Twitter thread with Dan was like, I want to do everything possible without file system routing. He's like
[01:03:59] , if I can build file system on routing on top, that's fine. But the test is I want to be able to do everything without file system routing as a baseline
[01:04:07] . And obviously stuff like bling makes it easier. Cause then he doesn't have to even worry about files separately for modules. But generally speaking, that's his litmus
[01:04:13]  test. And, um, yeah, I'm interested to see how, how that all plays in because the thing is file system routing is, uh, route gen, which
[01:04:23]  is basically you could, you can bake type gen into it. No problem. But the real challenge is if it still works without that. And that, that, that
[01:04:34] , that, that, that's an interesting one. But yeah, uh, let's see here. I think the single file stuff, I think it will be explored.
[01:04:41]  It's almost inevitable where people will try to put, and we will probably try to do it as well. Well, we'll try to put client components at these server
[01:04:49]  functions, like in the same files, try to like have that one file app set up. Yeah. I'm not suggesting that that's necessarily like a good thing to do
[01:04:57] . I think. That's what I'm saying. It's inevitable though. That it's going to be tried. Right. It's more of that. I'm just
[01:05:05] , I think it's, I really want to recognize the primitives and break apart this whole thing. And I think what we're landing on though, is that routing
[01:05:13]  is so absolutely essential to making this work. Yeah. Yeah. It's everything. It's everything actually. So almost every feature is part of the router. So mutations are
[01:05:24]  part of the router. Right. Refreshing is part of the router. Obviously all the data fetching. I mean, it makes sense. The web is a
[01:05:35]  router. Like the URL thing is a router. The whole web is based on routing. And what we're doing here with, especially with the RC pattern is we're actually
[01:05:45]  just like circumventing the, like you could say client side routing to this already, like circumvent the app on the, on the client side for the web.
[01:05:53]  But RCs is like circumventing the routing on both sides. It's just like, I am replacing the role of the HTTP server and browser and just handling both sides
[01:06:03]  myself. I'm just like walking out of web standards completely. And just building my own VM browser and area. Like it's, it's using the underlying protocols, you
[01:06:12]  know, but like generally speaking, it's like the, the, React's just reinventing the browser. Like they're just like, they're like, we're handling
[01:06:19]  the whole thing. Yeah, right. And they've said that as, as a goal, right? They said that they are virtualizing the browser when they came up
[01:06:26]  with that RC thing. Remember, I think I've seen one of their talks where they've talked about how like, the idea is to virtualize the browser to get like
[01:06:36]  this SPA feel across an MPA experience. Like, yeah, but this is why you, this is why you've been spending all your time here. And I
[01:06:44]  haven't got you back yet. Like, look at this list. Like this is, we were talking about like the high level, what you need. It takes a lot
[01:06:49]  of work. Yeah. Like, like, like, okay, mutations. Okay. Form validations for submission, error handling. Now we've got to get to head
[01:06:59]  tags. Hopefully, hopefully this is not your responsibility to a certain degree. Hopefully react or this is something. There are two things, right? There are two things. One
[01:07:08]  is like, okay, if it's rendered in the tree and if it's rendered before the flush, then make sure you're putting it in the head. But the
[01:07:15]  other thing is that, you know, I think like now I've started to appreciate that remix model and the new Next.js metadata API because it's much simpler, right
[01:07:26] ? Like you just, you know that you have to do all this before your page kind of goes. Yeah. So it just makes sense to take it out and just declare
[01:07:34]  it as objects or like whatever, just as a separate part. Interesting. Because I think it's too error prone to like, let the components do it. Especially with
[01:07:44]  the server rendering model. Yeah. It's interesting. Because one thing that I did see is that this came on the React Labs announcement is that they're working on head tags
[01:07:55] , like bringing like almost like our meta tags that we use in solid like into the core. And this is something that's been very interesting. Lexus has been super interesting
[01:08:03] . I think it's already in there. I think there's a few commits that make it already in there. Because like if you render a link, like kind of
[01:08:12]  style tags and all, they already do this magical hoisting and all this that I didn't need to do. Like they already figured out where to put in the head
[01:08:20] , order it, add a preload tag for link tags that you kind of put. They'll add a preload tag that's like themselves, like without you having
[01:08:28]  to tell them. And so they already do a bunch of nice stuff. I think they're already on this, but I don't know if they'll be able to figure
[01:08:34]  out like if there's stuff happening a few, like, you know, under a suspense boundary. I don't know if they're, if, you know, they
[01:08:41]  have anything they can do to like make it part of the head if they decide to stream stuff. So I think it's inevitable that it needs to be put out. Like
[01:08:49] , I think that's why Next.js also ended up doing that. Like. Right. Yeah. So like, yeah, this, this is interesting. And this is
[01:08:59]  something that's been on my mind recently, because like, if you recognize that routing is like, like meta and routing are the two, it's all start. Those
[01:09:08]  are the only actual libraries. Like I joke that like create route data and the stuff we added to start really belongs in the router. And basically we only have the meta library
[01:09:15] , solid meta and solid router. And that's bling. And, and then it's like, that's what solid start is. So from that perspective, it was
[01:09:24]  interesting. Right. And more and more and more. I'm like buying more into that. The fact that the router is everything in the framework, like there is almost everything
[01:09:36]  else is just trying to make sure the router knows what to do. Like when, when it's go time, like, so the bundler and everything else, the
[01:09:43]  manifest, everything else is just to make sure the router has enough information to like do what it needs to do every time. Like a fetch happens, a navigation happens, things
[01:09:52]  like that. Right. So yeah, it's, it's interesting because one of the things I want to see here, as we kind of look through this is I
[01:10:01] 've been, I've been making this a routing problem. Instead of like a fund, like instead of like a fundamental framework problem, you have a very different view on
[01:10:12]  what server components mean. Don't get me wrong. I, I did do some more thinking that led me down to something very similar to a react server components. Um
[01:10:21] , because I think there's like two different ways you can approach it, so to speak. Like you can either handle the data serialization and like some invisible place, like
[01:10:31] , you know, or you can basically embed it in the HTML. And like, if I'm Astro, I'm going to embed it in the HTML. You
[01:10:36]  can, you can get the exact same server component experience in Astro in theory, as long as you write everything into the HTML and then DOM diff it. But I don
[01:10:46] 't know if that's necessarily the most, um, how should I put it? The most performant way of doing it. Cause you could be diffing views that aren
[01:10:54] 't in view, so to speak, like different slots that aren't like currently being visible, but you could basically re-implement the whole thing that way. But
[01:11:03]  then the other way is what react's doing, which is basically just playing off their own built in diffing engine. So I, that's for me to worry about though
[01:11:11] . Let's, let's, let's continue on here. Cause you've got, I would not look at this too much. Like this is, um, in terms
[01:11:23]  of like, if you go to packages, you'll see, uh, so there's basically just two, there's fully react. And there is RSE auth,
[01:11:32]  which is like next auth for this stuff. So like just an adapter. But, um, I mean, there's a bunch of stuff there. I, I think it
[01:11:41]  is like, you can open it up, but I think it'll eventually still make sense to look into, uh, an example app. Because there's, I can like
[01:11:48]  walk over this stuff. Okay. Yeah. That's fine. Yeah. Do you, do you, do you want to, is it time for you to share?
[01:11:56]  I've been just kind of driving right now, but, uh, you've made quite a few examples here. Only a few of these, the 53 minutes ago ones
[01:12:06]  will work for sure. The other ones are all iffy. Uh, uh, okay. No, just, can you just give me two minutes? I just need to
[01:12:14]  get some water. Okay. Go, go, go, go. It's all good. Okay. Thank you. let's say it's 10 40 here which is
[01:12:23]  half an hour it means it's 11 p.m now um in india how how we doing chat this year this is your time to to ask any random questions you guys
[01:12:33]  have been pretty quiet um while we've been talking here but you know i this i i it's funny sorry like i i the streams as much for me it's like
[01:12:48]  how do i nail it down some time with nikhil to just talk through some of this stuff um because we've been doing a lot of async conversation like just like
[01:12:55]  dropping messages back and forth because of the hours um so i you know i've been looking a lot of this uh server component type stuff uh and uh well when i'm not
[01:13:05]  working on the astro migration which i think i'm going to show later today i i i've made some progress it's not like complete or anything but i i i
[01:13:14]  have the basic demos all working with the cli running solid start on astro um so yeah well it depends it's only if we want to solve it the same way
[01:13:39]  yeah it's it's an interesting question alexis because i think every time i find something boils down to a diffing problem i start wondering like if there's a different
[01:13:51]  approach to it and i think i mentioned this before in discord it's just there we have a few different options on how we want to handle this stuff and i feel like
[01:14:01]  um i feel like there's going to be an approach that can like there has to be an approach that we just need to like step back and look at this a little bit
[01:14:13]  differently because while i can see very easily being able to patch in like a special format that can be diffed specially like pretty trivially because our jsx has allows
[01:14:27]  for um you know objects essentially that aren't processed so we can come up with custom insert you know so we can have custom serializer matched with a custom insert so like we
[01:14:37]  could basically build on top of solids dom expressions a way of just like saying okay this is of type special whatever we know how to serialize it and we know how to
[01:14:49]  render it or diff it i before going that way i i'm i kind of want to explore alternatives i feel like we can do a lot better just because fundamentally the way it
[01:15:03]  works and what you what's going on with react it's just i i'm not sure do you plan on render do who does who plan on rendering nested routes oh
[01:15:22]  you mean that's having one having outlets at each level is fine for nesting do you mean like having multiple outlets in terms of like like parallelized nested routes oh
[01:15:41]  just checking over thank you for the subscribe i just i and thank you parasocial for bringing it to my attention um what we got here ip termel hopefully i got that
[01:15:52]  right thank you all right hello i'm back all right can you hear me yeah you're you're good okay um let me see let's share my screen yes sorry just
[01:16:14]  gonna answer a quick question here uh yeah share your screen i'll put it in oh yeah you what you're talking about is like named outlets rather than like having a single one
[01:16:24]  um yeah i mean it's interesting it's i i i haven't done a tarot a ton about that right like versus like onioning which is like yeah i don
[01:16:40] 't know it this feature is always like one of those ones on the list it just it complicates things because you need a way of um usually you need a way of representing
[01:16:50]  the state of each outlet in the url which you know there's different schemes for it but it like it adds a lot of complexity um it's it's this isn
[01:16:58] 't something that i particularly prioritized okay let's get nikhil in here and what's going on across street can anyone hear that i think i think there's like somebody with
[01:17:09]  a leaf blower across the street from my stream is it coming through the stream i don't think it's me i mean i can hear it from the stream oh yeah
[01:17:20]  okay well i'll mute a bit while that's going so we can get less leaf blower uh okay go go say some stuff while i'm mute yeah okay um yeah so
[01:17:34]  i mean i'm just gonna start off like showing um like a very basic example uh an old beloved example of ours which is a hacker news um nikhil can you can
[01:17:50]  you can you sorry can you yeah can you blow up your text like one level like yeah okay that's probably one more um if you can work with this this is fine i
[01:18:04]  mean one more is good but you don't need to i i i find it sometimes hard to get much bigger i think it's fine yeah i mean but uh let's
[01:18:15]  see i can i think i can make enough space okay is that is that good yeah that's good okay uh oh is this is sound really bad yeah i think you have to
[01:18:30]  keep muting okay so um i'll start off with uh the hacker news example uh you'll see that uh some of the conventions uh i picked up are kind of the
[01:18:42]  react kind of routing conventions not exactly completely but yeah so i'll show you just like kind of the entry point for how to start something like this is i mean if you look
[01:18:54]  at the package json it's it's like you have one more dependency which is react server dom webpack ignore the webpack it's it's a runtime that's
[01:19:05]  shipped by the react team which has all the utilities to serialize and dc realize this rsc stuff render the rsc stuff on one side receive the rsc output and
[01:19:16]  render that into a react tree and so all the rsc related kind of utilities are inside this i don't know if it's meant to be forked for other bund
[01:19:24] lers or if like what we do is we kind of shim the runtime that is expecting so it expects a few kind of uh webpack um kind of these webpack chunk
[01:19:33]  get webpack chunk load webpack revive functions and we just kind of shim them with like dynamic imports and things like that so uh and then in production they use our
[01:19:45]  manifest to figure out what to what to give the client for any single thing so it's these three dependencies and then you'll see in your dev dependencies you have nothing apart from
[01:19:54]  wheat and kind of fully react which is what you would have you traditionally have something like wheat plugin react uh which is which handles like how to render react clients and react components and
[01:20:06]  so this is kind of a replacement for that so if you look at the wheat config file it looks like uh it looks like something you'd see just generally in wheat which
[01:20:15]  is you just have you import something like wheat plugin react and then you just put that in and so you can do the same here and now just out of the box you get
[01:20:23]  like a full-blown fully react experience yet to be trademarked um okay so uh if you'll see this route can typically be ignored uh because like what you'll see
[01:20:36]  here is it's just exporting a component and the component is like a file system router that uh we export and so traditionally if you're using the file system router you just
[01:20:47]  do this but um if you see some other example for example like my form example there the root it doesn't need to use the router if you know you're just having like
[01:20:58]  a very small simple app that doesn't have a bunch of routes you just like kind of render the route and your components in here um and you can have like you know
[01:21:07]  components within the same page and so normally you're just serving one one route here but if you want to do routing like kind of a custom way then you get like the ur
[01:21:17] l the params the search params as as like props here and so then you can decide to do whatever routing you want like if url is equal to whatever then you
[01:21:27]  just like route based on that if you if you want to do this i or like you know if you want to bring in your own router it will need to have a
[01:21:34]  server side and a client side the router because it needs to be aware of the fact that it's going to be rendered into environments uh so it needs to know what to do
[01:21:42]  in both cases but for most people we wouldn't want them to do that so you would traditionally you wouldn't even need the root file here but uh you just start off
[01:21:52]  with the layout file but uh yeah so this is just kind of a boilerplate file that kind of exposes the fact that this is what the rsc renderer is using
[01:22:02]  as the root it's using the file system router as the root and the props it gets is url params search params headers and things like that things you know
[01:22:12]  you know things about the request um so you have that and so that maps to the fact that you have in this example where's the html tag i just like yeah
[01:22:23]  so the file system router kind of owns the whole app right and like the the root typically has to own the whole map so file file system router eventually will render things i
[01:22:35]  see there's like the layout is right so your layout would uh would export kind of your html tag your root layout should typically expose it but if you can you know
[01:22:47]  how you can have like uh like things like this like uh kind of uh grouped routes and then both of them had like separate layout files with different kind of html routes
[01:23:01]  and so that way you don't need to have a singular route in your root file each of your like groups can have their own route and decide if they want to have
[01:23:09]  like different html entries um you have a typical meta stuff this you can put here because you know this head will be flushed early but i think apart from that the
[01:23:19]  routes below it should probably expose the meta tags as like a separate export maybe the root does that as well and um and then assets is just like you know how we used
[01:23:34]  to have like this is kind of a placeholder for everything the framework does in the head tag so it will include assets that are required during development like inline styles looks familiar
[01:23:46]  yeah the script tag uh the feed client script tag things like that and then during production it will based on the route figure out what all assets it needs to send so what all
[01:23:55]  it needs to preload what all css it needs to include and then your typical body tag and this thing i just you know kind of love that right there is not
[01:24:03]  outlet and his children that uh it just makes it's it's it's funny i i i've i've used this api in the past of children um like i've
[01:24:16]  gone back and forth between it like the the only yeah it's an interesting one there's a disk kind of a requirement i'll tell you why because there's no context
[01:24:30]  right so outlet typically works on context right so you do use route context or something and then the route tells you what component to render so you can render that outlet component anywhere and
[01:24:40]  it'll use context to figure out what to render yeah but the action you don't have context so you have to pass things by hand and so that model children make sense for
[01:24:51]  like right that that was that was the reason actually and you you got it there it's because if you if you put the outlet in like further down the tree you'd
[01:24:59]  have to pass it through whereas otherwise you could literally just write outlet anywhere and it could work as a component yeah but because like in some of you you need to be you need
[01:25:09]  to expose things you need to be able to wrap them inside components something like that so like the children stuff really helps that interesting i hadn't thought about this one it seems
[01:25:19]  subtle but yeah i'm cool with that also scroll up a bit yeah capital a props i'm i'm still put this here i don't this feels too weird but uh
[01:25:30]  it's linked i mean you can call it link if you want the default export yeah yeah yeah let's not fake people that's a link back there yeah you know use the
[01:25:44]  platform okay and keep it moving okay i haven't done the strict of like you know only a page file you know a folder with a page file is around for my thing
[01:25:57]  i allow myself to create routes anywhere so a layout router street especially but i know you don't like this is the same as this is the same as what you put on the
[01:26:07]  uh experimental branch it's all start yeah okay yeah kind of yeah over there i had this like layout with kind of brackets but i think like this looks neater and so i
[01:26:18] 'm stuck with that these these files i think you have seen you guys have seen a ton of times what's new here is probably the fact that you know this is like
[01:26:27]  an async i don't know if you can see this mini player let's see better okay um yeah so the the the stories kind of page or the the route component is
[01:26:36]  an async function and we just call kind of await fetch api we do the computation right here this one you know as this one obviously happens kind of optimally because
[01:26:48]  there's no waterfall there's nothing above this right so and most of the pages are just one request so we're not seeing any bad practices here and i think i love this
[01:26:58]  api also where like you get information about the request as props uh you don't have to like call it out because it it makes sense where like the you put you you
[01:27:07]  put the component in perspective about like okay where is this thing going to be rendered it's it's an important like route component and so one thing you'll see interesting is
[01:27:17]  this page props thing which uh okay yeah i mean it's just so funny because we we've danced around these apis like so many times like i remember every like the solid
[01:27:29]  app router before we merged with like with ryan's router uh for was was was worked like this where the props came in through the page component um but then we went to
[01:27:41]  using context but it's funny rscs basically like don't use context so we we got to go go back to the other api and i remember the context being
[01:27:49]  like really nice um because but it was really nice for mostly for the reason for solid was because um when we were using prop passing we and we weren't rendering components which might
[01:28:05]  have been to solve people had to wrap their own getters to maintain reactivity whereas using context they could just like return the thing and it would be be fine instead of
[01:28:13]  like trying to force everything to being like two props so to speak we were like writing two props helping helpers context solve that but in this case it doesn't matter because we
[01:28:23] 're not talking about reactivity we're on the server only so exactly exactly so it's it's it's going to be one top down render and so you kind of optimize
[01:28:32]  everything for that like you know so the thing stays wired up together and i'll i'll show you a few interesting tidbits on this page one is obviously you know all
[01:28:40]  of this is okay i i my first question here and you know i got to ask this is i see you go to the stories page and you're top level of weight but
[01:28:49]  i want to draw the nav bar like i want to stream this in and draw the nav bar um where's the suspense boundary i haven't put that in yet but typically
[01:28:59]  that would happen here okay right yeah you can just suspend around the children and yeah and what to render there yeah i haven't played that out yeah okay i haven't played with
[01:29:11]  actually the loading side of this like loading placeholders and that stuff too much and i think that's where a lot of like nice stuff that nextjs is doing is also there
[01:29:20]  is like all the files i think the files it's it's i think it's a symptom of how like suspense needs to be able to wrap things right so it needs
[01:29:30]  to wrap the component if you need to export default stuff you can't export default something and wrap it at the same time and so instead of having to take two components they're
[01:29:39]  just like okay let's just make a convention where like people put in separate files we wrap it up for them right right i i think i think that's incredibly awkward but
[01:29:48]  i get why they ended up there but then also it has the same it has the same code splitting benefits that uh kind of normal file system routing has right that you you don
[01:30:00] 't need to uh you can get stuff that's just required for the loading screen first and if that's much less than kind of the components required for a routing screen then you
[01:30:09]  kind of get that division of like you know you send a very small number of assets early and then you can get things as a stream in and so like having separate files
[01:30:19]  allows the compiler also to do a bunch of optimizations around what assets to set um does that answer your question yeah yeah i yeah i i was just curious because you you didn
[01:30:31] 't go the next way with all the wrappers so i was like huh i haven't done that yet i mean i don't know if that's really necessary i would
[01:30:38]  typically still want to be able to just compose it here yeah exactly yeah very terrible i don't know if it's a very terrible experience or all but i don't think it
[01:30:45]  would be like it i would still i think the idea is that you still have that user control because you can still do it within the component i think it's just like you
[01:30:53]  know the framework is just trying to be like okay if you do this we'll handle a bunch of stuff for you you know just like take care of the good stuff for you
[01:31:01]  which is you know always nice like because it's it's it's not taking away your optionality it's just giving you a few but yeah too many files yeah this
[01:31:09]  this config export pattern is something that i want to add to solid start i think we've talked about this before yeah so i was playing with this only right like so i'm
[01:31:17]  like it doesn't actually do anything yet it doesn't like actually do anything with the validate search but i want to show you and this i hope that uh tanner will love
[01:31:27]  this is is a bunch of like tan stack router typing at play here so i'll show you about how this config object takes a validate like expose validate search function which takes
[01:31:39]  an arbitrary search for ads and yeah this is right there's like there's a type of page and check this out if you look at this this is exactly type um with the
[01:31:50]  same typing as what validates search is retorting gotcha okay nice and so you see there's this two type page props right you don't write these you see
[01:32:03]  that they're being available to you from this like okay yeah yeah yeah so this this reminds me of the file system stuff that tanner was doing on top of his right this
[01:32:13]  is something i've learned like if you see this types file doesn't exist in your directory here yeah yeah right so it's it's it's being made available to your
[01:32:23]  typescript file from somewhere else and what a step further that some of these frameworks are taking is introducing a typescript plugin which kind of tells typescript to treat this as
[01:32:35]  this so it's just kind of okay i did this uh annotation here and so whatever type errors you would get with this annotation here you would get even when you don't put
[01:32:47]  it including this so page config is also exported from here and this will give you like uh kind of config for let's say you have a path yeah like you have passed
[01:32:58]  params yeah you'll see that the params are also typed it has the star type which is the kind of the catch-all route and if you see this params
[01:33:09]  also is uh wait oh i suppose this up uh this params is also strongly typed like it will tell you that there's only one param here of this kind of yeah this
[01:33:18]  this evolution makes sense to me it's interesting what there's a lot of things you can do if you know that you're dealing with a single file component essentially like if
[01:33:28]  if conceptually you're like there is one component this is the component this is the export you can wire a whole bunch of stuff automatically that's felt whole magic and because route
[01:33:38]  routing is based off basically an export default like it is a single file component when you're doing routing you can make all the same assumptions there and basically apply the same kind of
[01:33:48]  convenience aspects yeah yeah so you can see and actually just to show people the underbelly how this is implemented is there's a typescript feature which allows you to like
[01:33:58]  create a similar looking hierarchy in a separate directory yeah and it's it's both these files kind of see each other as if they were in the same directory so you see we
[01:34:08]  create a hierarchy of type files here that i all kind of import each other and declare like typed routes and so without even one line of tans that clout are actually
[01:34:19]  executing we are getting all this typescript so you'll see one more thing you'll get is like let's say i try to add a tag here and i try to do
[01:34:31]  two wait i don't know okay uh the typescript breaks actually quite often so i have to keep kind of refreshing it uh uh it href is it href or
[01:34:47]  two no no so normally href is not typed it's like two which is typed by like uh okay this doesn't have it set up properly i have another example which has
[01:34:58]  it set up i'll show that to you where like two will hint you on all the different route segments that we have yeah oh god i hate this stuff okay anyway i
[01:35:10] 'm hoping it works in one of the other things this typescript stuff is pretty fickle sometimes okay uh but yeah so just showing you like that the typescript stuff is
[01:35:25]  figured out already i think uh on a pretty decent level here and once we like support this whole runtime api like of parsing and validating we'll be able to get
[01:35:33]  that same tan stack router experience actually i want tan stack router to do all this for us yeah so i'm hoping like we can figure that out here but yeah so your search
[01:35:43]  params all of this is typed by default you don't need to give anything types here and it all flows down and you'll see similarly for like your id page is
[01:35:51]  another racing function and obviously you want to see um your toggle is a used client that takes children yeah renders children maps it this component looks identical it's so identical that you
[01:36:08]  didn't even bother like dt structuring it like a normal react component it still says props dot children like you didn't even touch it yeah exactly i think most of this time
[01:36:18]  i haven't actually used to be structured yeah so yeah again uh this is um this is the story screen and and the and the comment page that uses the toggle component nothing
[01:36:29]  has had to be annotated here and uh let's see we can try to probably run this uh hacker news let's see it's a typical wheat project see my screen
[01:36:46]  bam right so we have um rsc with wheat rendering efficiently on the server to async await and there's a few things that kind of again were part of the things that
[01:37:02]  were required to make this a good experience so some of the rsc implementation that we have seen what they do is their server end of this page yeah and once you're
[01:37:11]  on the once you're on the client because they don't have the rsc output you can't hydrate without the rsc output actually right interest okay yeah output is part
[01:37:22]  of the tree it it doesn't hydrate just the clients or like it doesn't kind of look for the items and hydrate them okay okay so this is why it's
[01:37:30]  so funny because we always talk about the data like islands to save data serialization where you don't actually have to send the double data problem but like because you you can
[01:37:41]  go look if you don't with you don't need to hydrate the server part on the islands so you can skip them and you don't need to send all this but
[01:37:51]  this instead of sending json we're sending virtualized vdom or whatever here you're sending basics kind of and it's also sending sent as html so we
[01:38:01]  we actually don't solve the double data problem with rscs huh right so i mean there are a few nuances here so one thing is there is one way where they don
[01:38:11] 't send this output and the and the or like they send a very small version of this where all the static parts like where all the stuff that's already resolved on the server
[01:38:22]  as just a whole chain of doms things that can potentially be skipped right and the high and the renderer can figure out how to skip that part to like just move
[01:38:32]  on to the next kind of hydratable thing that needs to be hydrated but why and this is like kind of dan's argument is is what is is is is the c
[01:38:41] aching right so what this allows you to do is because you've already sent it as part of the initial html firstly it allows you to hydrate right now without having
[01:38:50]  the capability to skip things when you don't have that you need this to hydrate so it's needed but even if you didn't need it having that here allows you
[01:38:57]  to let's say you go on the next page and you get fresh rsc for that but then when you come back you don't want to have to get fresh rsc
[01:39:05]  again and so the fact that it's already come as part of the initial html means that cached and then you can go back to that page immediately right so that
[01:39:16] 's the advantage of kind of having it there apart from the fact that right now you need it to hydrate if you if you didn't have it there tradition some models
[01:39:24]  what they do is they they are on the client they uh they start hydrating and as part of the roof the first step is to actually get the rsc output right and
[01:39:35]  then render that rsc output so we avoid that by uh so this was one of the challenging parts of this also is that your server let's say you send a request
[01:39:46]  to your react server to get rsc right while you're ssra you get rsc as a readable stream streams are meant to be consumed once right so you have to
[01:39:56]  t the stream use one copy of the stream to do your html uh rendering use the other copy to be like render the html there's a transform stream
[01:40:10]  that looks at the html as it's being sent to the client it looks at the fact that oh it looks like the body tag is about to close so the the
[01:40:17]  user is done with sending what they needed to send and it then starts inlining the copy of the other rsc there right so that it goes as late as possible so
[01:40:27]  it never blocks the ui like any part of the ui and it is still it doesn't block streaming in any way so you know you can keep streaming the ht
[01:40:37] ml and you only include it towards the end it's interesting so there's there had to be a lot of stuff there and so what you see is here is we create a
[01:40:46]  readable stream and we keep chunking things and this readable stream react kind of treats as a react element right it's so crazy that you know you just give it a readable
[01:40:56]  stream and be and you'll be like create element from the stream and then for react it's an element that's somehow developing over time right so it's kind of a long
[01:41:06] -lived thing which can take chunks as they come and keep rendering them so there's uh because things can stream later as well right so the same kind of thing needs to
[01:41:16]  be able to adapt as things render and so you'll see that all of these are chunks uh that are sent so what i was talking about the manifest is that right now i
[01:41:25]  haven't figured out how over here instead of sending the actual path of the original source of the client component how can i like you know i hash it up into an id that
[01:41:34]  i don't need to eventually map to the id kind of identifies the file also that generates for the chunk and so uh this this sorry the transform string thing you're talking
[01:41:46]  about a minute ago um this is something you had to add or not part of react's normal output um this is not part of normal react's normal output so uh what react
[01:41:56]  what react gives you is a way to be like this script here is output by react because reacts render to like server function render to string function or whatever has a way of
[01:42:07]  being like these are the bootstrap scripts these are so let me show that to you guys also actually uh just to show you guys like what kind of things they export for
[01:42:18]  us so if you'll see uh i don't know this is too big okay so there yeah yeah i was just no you go first ask a question no it's not
[01:42:33]  a question it's a statement you you just go first okay so yeah so if you see these two things are passed to the render function which is what all script tags to add
[01:42:42]  and what script content to add if you see in dev we just add our client entry and nothing else this is the dev environment and the production environment we add uh we add like
[01:42:54]  the kind of the thing from the manifest that maps to the entry client and we map like a small manifest of what all client components we have i think this is the part
[01:43:03]  that traditionally we would want to skip because this will this scales up as your number of client components scale up which is not good so this i would want to avoid and not need
[01:43:13]  but right now it basically takes the client manifest that tells the client for this source this is the chunk name right uh and so if you this is just kind of some implementation
[01:43:26]  there and this you'll not see here this maybe we can build and show i can show the build output yeah so the thing i was thinking about here while you're talking about
[01:43:36]  the the format and like sending it initially for caching it's just like you start going like you start like immediately going to a place that like if you were shipping h
[01:43:46] tml could that be avoided do you know what i mean like like the whole thing like the yeah i mean so obviously the the the thing that happens with html is
[01:43:57]  you again kind of put the same responsibilities you are putting on this visualization format which is it should be able to maintain state or like you know give some representation of props beyond what
[01:44:07]  the html contains it should have a way of annotating client components or like islands in the middle to be able to like slot things into each other and so i
[01:44:15]  think the idea with their format is that what they try to do is to optimize it for streaming in a way like if you see how it keeps flowing downstream where like each line
[01:44:25]  is independent and they have references with each other which like they can hold up until the reference dissolves and it can kind of keep streaming without having to maintain a nested
[01:44:36]  structure which is what like html necessarily needs to have is the investor structure to like close things over whereas that's why they use this format even when you want to like
[01:44:46]  serialize json responses because then they're able to like resolve promises and things like that on yeah it's interesting because html doesn't html doesn't need
[01:44:55]  to close it's like self-healing but yeah i mean but you need to close to begin the next thing right you need to close to like like complete the n
[01:45:04] esting layer like so the tree needs to finish in some way otherwise you have to stitch things together up on the server back up again right like be like put something in the middle
[01:45:16]  of this where like the outer lens results earlier and the later under lens of the the outer lens of data over here what you can do the outer results first you're able
[01:45:26]  to send it uh as part of one response so you're not sending a different html tree in this case but that's what we do with streaming right we just send
[01:45:34]  a separate full html tree every time we're done with a part of the tree and the idea is here you're able to say into line so if you see the
[01:45:42]  output here like i do uh do i remove the debugging output why do i do that okay i'll show you the debugging output again but yeah so this is the production version
[01:45:51]  minified and everything you'll probably be interested to see the size and let's see okay so this is the network tab okay so javascript is oh wait that's
[01:46:11]  not great i think something has been loaded up that i don't want to it shouldn't be 197 kilobytes why is it 197 kilobytes okay i think it
[01:46:25] 's a bad look i don't think it's meant to be this bad but the idea is that i think around the react runtime and everything together take around 60 70 kilob
[01:46:35] ytes like even if i don't add anything and then apart from that if you see the uh oh the mutation part is big so i haven't analyzed this completely but yeah you
[01:46:45]  have if you just see the only client stuff is like the router yeah like something needed for mutations i think this can probably be shaken out since we don't use it um
[01:46:53]  and then if you see what happens uh let's go here you'll see we do prefetching whenever we hover on this so this is like a request for an rsc
[01:47:04]  right so if you'll see whether you guys have probably seen this this is how we annotated so that this structure is there i'll show you an interesting part where like
[01:47:14]  when we're able to do static output uh how this helps and then we just ask for a specific kind of content type this is what the server knows that it has to give
[01:47:24]  us rsc stuff yeah and then if you need the response this is you might have seen it a bunch of times it has some references to client components and then content below that
[01:47:33]  well the whole html and so because we've already gone to these things they should be instant like when you click on them yeah the navigation should be intent because you
[01:47:42] 've already prefetched these well this will take time yeah i i actually love this prefetch mechanism because i mean we hit this before right because oh i guess actually you know
[01:47:51]  what i have a question here because how do you prefetch the code like you're on the main page there's no toggle island what's the flow of like you you
[01:48:03]  hover the link to go to the particular story right that can pre-render the data the like the like it's kind of it's kind of like the opposite of what we
[01:48:12] 're doing like what we do right now uh you know in our we preload the code and then the data fetching basically happens like like we have to treat them separately like
[01:48:23]  preloading the code is easy to preload the data fetching is like like something we have on an experimental branch but we haven't merged in but essentially these two
[01:48:31]  things but we can do that because we know that we have the manifest for the next route like that is actually how it works so we go oh we know what component we need
[01:48:41]  and we know what data to fetch this goes okay look i know the url so in in a sense you can you can go fetch the data right but how does it
[01:48:50]  know to load the client island it like is this always like is this always like a is this always like a waterfall from the fact that you go to the server get the data
[01:49:02]  get it back and then realize now i need to fetch the code for this client island like is it always like uh so i mean i think there are i'm not sure how
[01:49:12]  next all this so like on navigation there are only two ways you can be pre-fetching the code right right either you built up this manifest early on where like
[01:49:23]  you know whatever what any doubt requires when you send that to the client or all you just let this output decide what data you know what needs to be fetched and so i
[01:49:34]  won't say there is a problem of there being a waterfall over here well right when like if this tells you about a new component that new component will be fetched then this
[01:49:46]  thing isn't entering like right right but what i'm getting at is it's that that is implicit like it is definitely a waterfall this was actually bugging me too when
[01:49:57]  i was looking at our solutions i was like am i trapped to basically because i was i was like look if if we're gonna need to know about these assets so that we
[01:50:06]  can parallelize data fetching to get the benefits that we have today and then i need to be like if i need to be aware of the route information on the client
[01:50:16]  anyways like at that point you could do some pretty smart stuff because you could you could you could literally go if i'm going to this route you can go this section is server
[01:50:25]  route this section is client route or i go to this page it's all client route you could just skip going to the server altogether because you like you already know at that point
[01:50:34]  what assets the fetch and you already know at that point um uh like you that you're not like fetching the data that way or whatever so like it's an interesting
[01:50:43]  one if you make the concession so the concession you're making is that you the client doesn't know anything about your routing structure right but if you if you let the
[01:50:53]  client know you you add a bit more code but you unlock a bunch i i think it will be interesting to see right right but what what the question is like how much
[01:51:08]  because let's pretend your runtime is already 10 times smaller than react like are we like you're not going to catch up to the size of react there not even close like
[01:51:18]  i mean i don't know these are some really long strings right these manifest file names and things like that oh yeah it's it's it's it's interesting i like no
[01:51:28]  no i i agree like i i like the thing i've been thinking about right now is like what is the pre-fetching or like the pre-loading behavior
[01:51:36]  required for all of this especially for the client components like my gut my gut is that they're going to pre-fetch the rsc and then with the result the r
[01:51:47] c pre-set the assets before ever showing it so the like they're basically going to use caching and pre-loading again to solve a architectural problem you already
[01:51:56]  do that you know i'll tell you how because when we when we uh when we fetch this yeah let's see this when we fetch this if you see we do this create
[01:52:07]  from fetch thing right yeah like you see the fetch immediately is that in paper so create from fetch you can think of this as create element from fetch yeah so react for react
[01:52:17]  react already starts like trying to understand that code like trying to like build a react element out of it and i think it starts let's actually let's test this video i haven
[01:52:26] 't yeah i i wouldn't be surprised that's what it did if it gets the toggle early okay no it's it's not oh yes he did without going to the next
[01:52:39]  page yeah exactly so it processes it eagerly yeah no that's that's a smart way of doing it it just but you get what i'm you get what you get
[01:52:46]  what i'm getting at though like essentially it's preload yeah yeah it's preload tricks like if you just went there and cl if you went there and clicked immediately you
[01:52:58]  would you would basically hit the hit the waterfall because it like this is all just like using like it's it's like if it's warm it's performant but otherwise
[01:53:09]  you architecturally this is slow yeah i i these kind of things bug me for some reason i don't know why it's actually is it you're you're basically saying i
[01:53:21]  need a waterfall and i'm only way to mitigate it is by preloading i mean preloading has been the solution to following these waterfalls all this while but
[01:53:31]  oh you're saying that code data waterfall doesn't exist because the client knows about everything right exactly i i guess like this has been the difference in my philosophy on on this stuff
[01:53:40]  is that literally i've never needed preloading or caches to have optimal performance so like i this is just so it's fine this is this is what this is
[01:53:51]  what they're into you know um i think i think this would only this probably works well if you have a small number of client components and that you know like your data is
[01:54:02]  taking a majority of the time so you're anyway blocked by that and so and to be and to be fair that is usually what i've i've found the data is usually
[01:54:12]  slower than the code loading it's just it would be yeah it's interesting my gut is and i think ideally some of the some of this stuff starts loading before some of
[01:54:24]  this later stuff even comes right like that's the idea of streaming it's like if your latest stuff is taking time your data is in time you're already starting to get like
[01:54:31]  the client component that you've been right yeah yeah i mean the stream the streaming at this point has the same benefit as the initial load streaming right it's like why we start
[01:54:39]  streaming so we can like load in the assets in the head before we like the all the data comes in so like i i i i i see that it's just like
[01:54:48]  oh man this is just yeah this is a war that's how you see the client components are normally usually at the top like the references yeah like if they're not below like
[01:54:58]  some kind of suspense boundary they'll normally be the first things that you're told about like yeah yeah this is something i'm going to think go on a lot because i
[01:55:08]  i do wonder if we're in this zone like do we have to solve everything architectural with caches and preloading when like it's interesting because it's like an um
[01:55:18]  it's like it's like an unlock because it lets you simplify things and sometimes it's a big dx win but on the other hand like you you always risk the cold start
[01:55:30]  scenario essentially like it's like inherent to the architecture and design of these solutions man this is the funny thing about this is yeah maybe i shouldn't worry about it what's
[01:55:43]  going to happen is whoever solves this is just going to like make next look really really bad in benchmarks but i mean maybe next doesn't worry about it because it's probably pretty
[01:55:52]  easy to make next look really bad in benchmarks like like you don't it doesn't need any like assistance there okay but like yeah just okay let's let's let me
[01:56:03]  get here i don't know i don't understand why there's so much i think i've thought of something bad here okay um no so uh what was i talking about okay
[01:56:13]  yeah no this ices have yeah the the benefits of streaming are like the same in the navigation as well as like the initial button normally you not get that benefit if you were
[01:56:24]  doing this like like the data was just like a json thing it didn't have this kind of like streaming capability and things like that that would be a problem but because
[01:56:32]  this is the string chunks that are eventually composed on the client um there's a bunch of kind of good stuff that comes along um and yeah so if you'll see the same
[01:56:41]  stuff the navigation the interactivity works um the size i i think i have to take an take an investigate why this thing is so big because i remember see it'd be
[01:56:50]  like 670 67 kilobytes or something yeah okay that was pretty big when i've seen like the sizes that solid is able to produce uh and like i don't know
[01:56:59]  what is here that doesn't need to be here but most of the bulk was like the scheduler and uh yeah no i mean like we're we're gonna like we're
[01:57:07]  gonna put on a little size when we go this stretch i i'm just i i'm i think there's a lot of learning here i'm pretty stoked on what i
[01:57:14] 've seen somewhere even if i'm like there's this friction point for me the the main mechanisms all make a lot of sense and it's really cool seeing them all working together
[01:57:23]  like this to yeah i get your point about uh caches and pre-loading but like the way i accept it is in the sense like i've done some functional programming
[01:57:32]  before and you know like that's the solution in functional programming as well right like you cache things and you still run them again and again and you pick up things if you
[01:57:41]  need to run them if you're going to do that do you know what it is i have this precept bias because early days like every performance win early days was architectural for
[01:57:50]  me and it was all about removing waterfalls um mechanically as as a as an approach so it's like i and to be fair it got me it got me in trouble
[01:57:59]  early on because i thought server-side rendering was a waste of time because my csr stuff was just toasting it and the only way that was possible was because of
[01:58:07]  really smart approaching to parallelization pre-loading like that kind of stuff so it just this this stuff it's like it's just like another thing i i'm i'm
[01:58:20]  very interested and i guess we'll see how this goes is removing those things because like at a certain point we can go look the picture is really simple we just start on the
[01:58:30]  server everything expands out and it just works and all this but we've added so many moving parts and pieces to make this possible and when those parts are playing this game of
[01:58:41]  like 80 coverage like when they're like okay i cover 80 i cover a different 80 i cover eight percent it's like that game that people play my daughter was playing it the
[01:58:50]  other day where they put the sticks through like uh a a sphere and then you put marbles and then everyone takes a turn pulling the sticks until the marbles fall through
[01:58:59]  like that that that's the game i feel like we're playing when when we're not talking like architectural coverage and talking about relying on uh extra mechanisms to to patch these
[01:59:15]  things it's like yeah it works fine-ish but like oh someone removed that stick you know like right i mean yeah i i think there's also a sense of like all
[01:59:27]  this stuff is really new and like i think that effort that you put in on like previous paradigms to figure out what is the optimal kind of waterfall structure that we have
[01:59:37]  to like you know how to avoid it and things like that i think that same effort is needed with server components right now where like people need to figure out what are the
[01:59:46]  patterns because i think it's called kerplunk the game's called kerplunk never played it uh i look it up did somebody in chat tell us no i i just
[02:00:00]  i searched it i was i i was searching for the game myself yeah it's it's called kerplunk i sorry i didn't i some people like jenga and i
[02:00:07] 'm like no not jenga i'm talking about jenga has that same kind of aspect kerplunk is just more visual for me let's see if i can it
[02:00:14] 's fine i i find it on amazon um here we go kerplunk on amazon uh also while i got a chance here i got a shout out uh there's a bunch
[02:00:27]  of gift subs uh uh a minute ago uh what do we uh let me see if i can scroll up to to where those were um i swear i saw them yeah uh
[02:00:40]  uh uh thank you nicola um we got five uh tier one gift subs thank you very much uh they've gifted 14 to the channel so far for for us that's
[02:00:54]  a lot so very appreciative uh of of of those yeah thank you yeah sorry i i i'm probably sticking on this point too much it's just like it's just not i
[02:01:07]  think it's fair to think about like the caching part i i i kind of i also didn't realize how integral it is to this whole thing like i was wondering like
[02:01:17]  um what do we do in our case let's say when we go forward in navigation let's say we go to page two we come back to page one we get the
[02:01:27]  data for page one again right yeah yeah and this is an interesting question because like obviously you can have solutions like react query like we haven't built the caching solution in and
[02:01:35]  it's one of those questions like it's hard to know what you're supposed to do right because on one hand like a browser will like keep it but i remember i was
[02:01:43]  talking with the michael rawlings from marco and he's like yeah i came up with this really clever caching back cache mechanism and all this stuff and then we
[02:01:51]  realized like even then sometimes we didn't even want it like caching is very per use case and we we can we can set some really baseline defaults and people but but
[02:02:02]  then people have to accept it and that just becomes part of the system it's like another piece that you have to like like i mean i mean with caching the thing is
[02:02:10]  if you look at it if you have a system that does no caching yeah doing the caching is difficult right because then you have to figure out how to interject the
[02:02:19]  system and make sure that your cache is the entry point you can decide to refresh anytime right like yeah i mean refresh on online status refresh on mutation refresh on x refresh on y
[02:02:33]  refresh by key on that like you can refresh as much as you want if the if the platform takes care of the caching for you right i don't give you nothing
[02:02:43]  and then you have to figure out the cache that's when i i feel like things get muddy and obviously it gives you way more control i would say maybe but i mean like
[02:02:51]  well it's more of like the expectation of the baseline experience right because like adding a cache you could argue would like isn't necessarily difficult but has a lot of touch points
[02:03:02]  so like that's usually like in that case like use react query or tan stack query and then bang you you have it or swr and now that we're in the server
[02:03:09]  component world there's this like where you know there there is experience is the browser experience or you can call the mpa browser experiences right like when you go forward and you go
[02:03:20]  back the browser gives you something like straight up right like i delete right right exactly but the browser also doesn't preload like that do you know what i mean like there
[02:03:32] 's a whole consideration of like how long before data is stale when do you actually want to fetch again and like and like i know that the back cache is a real thing
[02:03:41]  and we could just to be fair we could emulate the back cache and say that's a reasonable default so like don't don't don't get me wrong there it's
[02:03:48]  just like it's it's one of those interesting things that now that you're the router or the browser as they're saying like you have to actually consider so like i get
[02:03:56]  why react is in this zone but it's also it it it's also interesting that that justifies like approaching these things from that perspective rather than architecturally that that that that
[02:04:14] 's that's my only point like yeah i guess that's that's my only point yeah no i think i think that makes sense i mean i you know like they're both
[02:04:26]  problems and solutions to be discovered here um yeah so um yeah i mean so we know the hacker news example nothing new here it's all read-only stuff um i think r
[02:04:37] yan must have made this demo also earlier yes i mean do you have a mutation one or yeah definitely no the form stuff is really really exciting i think that's the stuff
[02:04:50]  that's probably new for like some of the server components beach also what i did want to show you is kind of what the entry points on the client and server are just like
[02:05:02]  you know because i was talking about the roots right and like what what happens on both the client other servers so while obviously there's the the narrative from the react side is
[02:05:12]  that client components never fetch server components right yeah so like they don't ever call phone but like the hidden secret is that there are a few special client components or only the router
[02:05:25]  the router has to be able to do it yeah that actually so in some sense anyone can do it but the router should be the only one doing it and the reason is
[02:05:34]  that because it is during the route navigations when people are acceptable of most kind of like big movements in ui i like you know big and big like kind of it's
[02:05:46]  it's also it's also because the route is like yeah it's it's the state of the user interface kind of like yeah and it gives you these clear defined mark
[02:05:59]  points if people could just layer this stuff anywhere then any trigger of state could cause these ripple effects whereas the router is like look this is not just any state effect we are literally
[02:06:13]  purposefully replacing or updating this this section on this change i mean but if you think about it like like taking a question taking a stab at it so imagine an app that
[02:06:25]  actually okay so an app that embraces the url kind of routing mechanism makes sense for them because most of their user interface will be decided by the url but let's
[02:06:33]  say i'm making some kind of app which is just like a top level domain and the whole app is in there and there's a lot of complex state in that yeah and
[02:06:40]  i want to be able to so like if i'm adopting server components i don't want to have to fetch the whole tree on every action right and maybe there's some
[02:06:49]  heuristic i have for deciding what portions of the tree i want to fetch based on what action i think there is a place where people might want to do that because they
[02:06:58]  are not trying to affect the url maybe there's a virtual url or something they'll be suggested to use or something like that but i i feel like it's still
[02:07:06]  important for people to understand why that mechanism there how it works and like you know how to actually consume rsc ever like if they need to um but i mean nobody should
[02:07:18]  really be doing it too much like people should make you it's it's dangerous if you ever wire it into a state like like a state transition that you're not expecting
[02:07:30]  like it's it's once it's what it's once you get a situation where something goes i mean it requires a certain amount of nesting for it to be harmful but
[02:07:40]  it requires if you if you go from a point of server which is usually the starting point of any of these requests if you go server client server and and the client's
[02:07:50]  state like is is is responsible for for actually triggering server re-renders then like anything there would cause you to go back to the server um i mean but sometimes we do
[02:08:06]  have things like that right if we are if we have like these granular data access it kind of ends up going to the data all the time when our params change or
[02:08:14]  when our states change state changes right right sometimes even independent of the doubt and so right but you know you but you get what i mean in terms of the waterfall like it like
[02:08:24]  literally like it's just like yeah i know what the problems with it are but i want to argue the case where like people shouldn't be kept in this like darkness of like
[02:08:35]  why you know either people be told why it exists and like when they would want to do it um but yeah i mean there's a there's a sense of like why
[02:08:44]  people need to be aware of it i want to show you what is the uh the server side kind of entry okay um let's see here the server router the server router handle
[02:08:58]  so if you see the routing convention we take is that we don't actually treat we don't have a special rsc endpoint uh that they usually suggest we have a get
[02:09:09]  for everything and we have a post for everything like right right and you're you guys are using headers which is yeah similar to what we did in start yeah right we use headers
[02:09:19]  to tell us whether it's a request for a server component or it's a request for a page yeah and then we handle those here and then when the when the page does
[02:09:28]  a post it does a post to its own url usually if it is expecting refresh and so that is handled here uh and so you're not you're not having to
[02:09:37]  like create a special url the action id probably like what action to run is part of the headers as well so um you don't need to encode anything in the ur
[02:09:47] l the url remains the url that the user is on so refresh by default is very easy like you don't need to do anything special for you you need to do
[02:09:56]  special for redirects uh we do page request if you see this is doing something funky here where it does like it uses an id for like trying to identify a server entry
[02:10:09]  and uh we create an html response and these are the props we send url search params headers things like that and if you see here this is again a nice
[02:10:19]  kind of implementation detail so you'll see this this is the transform stream that we have to create uh the idea is when we render to html stream we are actually
[02:10:29]  doing two things inside here if you'll see first we create something called a server component render so this is a react component right so you'll see that this is like the top
[02:10:40]  level server root that is rendered this is not the rsc part that's rendered this is a client component in some ways this is the ssr client and the s
[02:10:53] sr client is going to ask for the rsc output and render that as its own children so if you'll see what this renderer is doing it's creating this wrapper
[02:11:03]  and if you'll see the wrapper is get me the response from the from the rsc renderer so it could be a worker it could be a fetch call it could
[02:11:16]  be a separate server or it could be just a function that renders rsd on the same server so we get the response we memoize it is on the writeable
[02:11:25]  so the writeable is the writeable part of the transform stream where we make sure we write the rsd stream as we are like you know right when we have two
[02:11:37]  copies of it uh and then if you see what is the you know the magical like you just because this is the client component you can't await the response here so you
[02:11:46]  use the response so the response is a promise you'll see the response is a result of create element from fetch so it's kind of it's literally the result of a fetch
[02:11:56]  call so it's a promise that will eventually render and the use will like make sure it's blocking everything until this is resolved and then render that response over here is an r
[02:12:07] sc element right so that's why you're being able to use it and send it as like you know it's the same as being able to like put it inside a
[02:12:15]  fragment or something right because this is a rs react element like something you get from react dot something you get from jsx you can just uh response if you'll see it
[02:12:26] 's it's just a you know reactable of jsx element and so you just use it so this is the server root the server root because it typically only has one
[02:12:34]  request to serve at any point it doesn't need any state right uh all it does is it's like okay i'll get one response and i'll render it you call this
[02:12:43]  you call this the server root but is this actually just sorry i thought you said this was the is it this you said this was like a client come on you know it's
[02:12:51]  in it's in some ways it's a client component like it's not marked with used client but it's only used on the ssr server it's not used
[02:12:59]  on the react server component server side so it's it's a client for the react server like for the react rsc output so this never gets to the browser this never goes
[02:13:11]  to the browser this one this is the this is so so the difference here from something i would i was doing previously was if you'll see in here we do this create element
[02:13:22]  from fetch right which renders the server component and gives me like a readable stream for rsc so this can be happening anywhere it takes a root it takes a you know
[02:13:32]  a server component root id now what are you i was doing earlier was over here if you see uh this component if you see render to element stream if you see here what
[02:13:44]  what i'm doing now is i'm creating a component and the component is responsible for the whole html generation including making a request for rsc that part is inside the
[02:13:55]  react tree so it will suspend it will like you know if i add a suspense boundary around this i'll like stream something before even like the rsc output comes okay uh
[02:14:05]  earlier what i was doing was i was getting the rsc output here like const element is create from fetch getting the you know doing an await for the rsc output and then
[02:14:19]  passing that as the element to render the additional stream but sebastian all told me that you you should be doing the rsc fetch inside the html tree inside the
[02:14:28]  kind of the ssr component tree because it's like the root should always be a client component that decides the whole flow and what that allows is that it will all have
[02:14:37]  one kind of async await context it will have like the same kind of error propagation like if something errors in the rsc stuff it needs to be visible to the ss
[02:14:47] r stuff so if you await things outside you'd have to try catch them and then somehow pass them inside yeah yeah i mean this is this is something i've been wondering
[02:14:55]  actually because i asked i forgot to ask him i asked uh uh uh dan if uh suspense was a client component to her server component and he's like he's like it's
[02:15:07]  a special component that works in both things and it's basically like a pseudo if you see the output everywhere suspense is just a dollar sign yeah like it's a marker yeah
[02:15:18]  and and what i was getting at is i'm curious like because like the same kind of considerations happen i'm wondering around like error boundaries on the client and the server and like
[02:15:30]  how those kind of it's just funny because we've been talking about how like the server is the root now in this model but what you're saying is when you get on
[02:15:37]  the server the recommended way of actually rendering it is actually wrapping it in a client component that doesn't make it to the client right so it's not it's not a
[02:15:47]  used client kind of client component but it's a it's a react plain component like it's not a component that's ending on the react server component side it's a kind
[02:15:55]  of a shared component so i don't want to call it a client component it's not sent to the browser but in the react model you have two things even by server-
[02:16:04] side rendering you have a client which is your ssr server and you have a server which is your rsc server yeah and these two things have to be understood as
[02:16:14]  separate things and that's like you don't remember when we used to i don't want to distract us but we used to talk about solid start how like the initial renders
[02:16:20]  different from the like the navigation yeah how they do this is that the server is the same in both cases it's this client that changes between initial navigation and the the initial and
[02:16:32]  the navigation if you're doing the initial uh render your ssr server is so it it if you'll see this it actually uses the client kind of endpoint from react
[02:16:46]  server dom webpack this is on the server right this is on your ssr server but it's using the client side of react server dom but it's using the server
[02:16:55]  side of react dom obviously because this is would be html ssr and this is doing the client side of the rsc whereas like this if you see the
[02:17:03]  server streams this is doing the server side and this is used by the server side things like you see this is rendered to server element or and or you can just render to resolve
[02:17:14]  um this was the server endpoint which is just like you you know get me the whole rsc for the whole route tree and i'll render that the client um entry if
[02:17:24]  you want to see that is um that's under web entry if you'll see what does it do it uh it creates a root here yeah so what was it what does it
[02:17:40]  do sorry this is the part so like if something errors on the server we send like a special id with the thing so that uh so how they do how next does error
[02:17:50]  boundaries right now is if on the server something errors very quickly like without any meaningful thing to render for it it will render kind of an htmp html page and
[02:18:02]  just like let the error boundary rscs of the inline and render it completely client-side because the error boundary is mostly a client-side component like because it
[02:18:11]  needs to be able to keep it itself and things right so the error boundary i think is a i had to make my like if you see my error boundary component it is a
[02:18:20]  use client like it is a client component interesting i just want to react to the boundary but because like it needs all this like reset stuff like there's the only place it will
[02:18:30]  exist is on the client so if it errors we just do a create root because we have nothing to hydrate but if not i'm not 100 sure why we need to
[02:18:39]  do why are we wrapping the hydration in a transition but this is how it's going to happen in next and a few other places i have to figure out why this is the
[02:18:47]  case my suspicion is yeah it makes it non-blocking they're saying like they're lowering the price it doesn't take away the ui and show a suspense boundary
[02:18:57]  immediately so that it like it's like you know i'll just keep going until everything is resolved then only i'll replace the ui for like any anything any async stuff
[02:19:08]  also is that the case or i i thought it could i mean if that's the case that makes sense too i was just thinking like this gives them a mechanism to say this
[02:19:16]  is lower priority so react knows that it's okay to interrupt this process um like in a non-blocking way the hydrate is happening inside this how will it interrupt
[02:19:26]  it like it is the thing that it is well i'm like react 18 selective hydration like you could they can be like starting hydrating something and then you can interact with part
[02:19:35]  of the page and then and then they go stop hydrating that i'm going to go hydrate where the end user into maybe maybe a transition is required for that as
[02:19:42]  well i am not 100 sure the the assumption i made was that imagine you rendered something on the server and and it had a few client components which also had async stuff so
[02:19:54]  on your ssr obviously everything got resolved and assume you have no suspense boundaries so on the ssr everything are resolved and your uh server side render is fine but
[02:20:04]  imagine that hydrating for some reason those client components decided to fetch again maybe there's some logic in there that you know the cash is they that they need to fetch again so
[02:20:15]  would you want those client side things to like suspend and cause like if there's no transition here it would it would cause like this behavior and hydrate who do not know what
[02:20:24]  to do right because there's no suspense boundary so it it can't it has no suspense boundary also and it is not in a transition so it doesn't know what to
[02:20:32]  do with the throne thing i think what it does is in a start transition it will allow it to throw resolve it and once it's resolved then do the committing part like very
[02:20:42]  interesting yeah i i never thought about doing it that way i mean it makes sense because we we actually have like a dual mode notion and solid between hydrating and not hydrating
[02:20:52]  and i wonder if transitions would just be the same thing that's interesting anyways yeah and so this is the top level mount like again from false start and uh the main thing
[02:21:01]  it does is set up the like the webpack environment like just to show you a glimpse of the ugliness it basically is these two functions that we need to kind of
[02:21:10]  polyfill and they each say like okay we need to load a chunk and so like react doesn't load the same chunk again and again it only loads it once and then every
[02:21:18]  time they ask for it you get it from the cache so another one of those cache you don't like here but yeah if you have a manifest you just use the manifest
[02:21:25]  and then this innate mutation maybe you find this interesting is a few globals that kind of inform react that a certain activity it might be doing might be part of a mutation so
[02:21:38]  you can think of it as transitions right like how start transition basically marks a certain life cycle as okay starting your transition ending your transition this is kind of for that where like
[02:21:50]  somebody does mutate uh i don't know why i don't change it here but oh yeah so basically there's a uh i'm probably fixing this so yeah okay so somebody
[02:22:00]  calls mutate we add the yeah tell us that we're mutating and then we step out of it and this is the function they run and so whatever happens during this
[02:22:09]  function would know that it's mutating that's the idea um i'll get back to a later so we just initialize that stuff here before we hydrate and uh let
[02:22:19] 's see what we are rendering here so you see the element here is uh is coming to us from nowhere right so if you see an entry client and entry clients get the gets
[02:22:32]  mount and that's the right side router makes sense so this is confusing actually uh i'll tell you why it's confusing but there are two ways that a router can actually
[02:22:46]  interact with this world right so there is one kind of router which is needed at the root so if you'll see this this is not part of the ssr tree also
[02:22:57]  and it's not part of the react server tree also this is a thing that only runs on the client ever right this router what is this router now if you'll see
[02:23:06]  here what i've got here is this base router that i wrap my thing in let's let's assume that this didn't exist for now and this base router was not there
[02:23:16]  and it was just the server component what is uh what is this server component so again this is an analogous of how we had a server component on the ssr server
[02:23:27]  to fetch the rsc and render it this is the equivalent on the client so the client needs to be able to render a server component right so what does it do let
[02:23:35] 's assume that uh it doesn't need to worry about a router right now um what it does is again it uses use and then it uses like for the specific url it
[02:23:46]  asks for the server element traditionally we should have it in the cache right we should have in the cache because we made it part of the uh we made it part of the
[02:23:56]  html right yeah right because of that it should be the uh actually no if you see in the first instance actually it will not be in the cache and what we do
[02:24:05]  is we get server element stream if you see what this is this is what we had inlined so if you'll see window.init server is what we had in
[02:24:13] lined like back there if this is not there this is like kind of a fallback for like oh the user found them or some somebody did something wrong just fetch the rsc
[02:24:22]  stream so that we can actually render it so either of these are okay like right for react it doesn't matter if it's in line it's just a readable stream right
[02:24:30]  and uh uh we put it in the cache so that uh the server element cache that if we ever go to the same url again it's uh it's going to be
[02:24:39]  there and uh you get it from the cache this is going to be a promise or like the result of create element from stream which is kind of a promise a readable stream and
[02:24:49]  so you just use that yeah and so on react side the used actually the start transition will make sure this doesn't do anything exactly yeah right actually that might be the reason
[02:25:00]  i remember because you have like this top level fetch that could happen yeah i mean this is the scenario you talked about right so this is the this is like think of this as
[02:25:10]  the dumbest client-side router like it it does nothing right now right like i have even told you to ignore the ignore this router so let's look at let's imagine
[02:25:20]  we don't have a fancy next.js router right we don't have nested routing we don't have anything i mean you need the client-side routing in order to
[02:25:28]  to like trigger this url change right so we need we need something at the top level that recognizes that there are a few links that need to be responded to and so
[02:25:40]  what i decided in this case is that i've decided there's a top level router api so there's one router context that the whole library will have and then it can
[02:25:50]  be implemented anyhow the router just needs to have a few core functions right push navigate push replace mutate refresh yeah like maybe one more listen or something right it can be a
[02:26:02]  dumb non-lesser router or it can be an outsider decides to do its own thing so actually if you see this base router is a very dumb router what it does is
[02:26:09]  it actually keeps a url as state right like just a new state you stayed router this enabled is just so that i i have a feature where like you can have this top
[02:26:18]  level router but you can put in an actual router underneath it and so the top level router will not be doing the the dumb router will not do anything your smart router can
[02:26:26]  take over this is superfluous for now like not important for understanding and this is just so that uh the router has a hook to like be able to re-render this
[02:26:36]  component itself so why that is needed is like for refresh yeah right you do some stuff and you'd eventually update the cache right and after updating the cache you'd be like
[02:26:47]  re-render and so the next time you re-render when you pick things when you pick something from the cache if you look here eventually the server component is getting something from
[02:26:57]  the cache right if you look at this it's trying to pull something from the cache if it gets something from the cache it'll use that and so the idea is that the
[02:27:04]  router's job is to populate the cache for navigations so that the next time we call react.render it has the it has the necessary new stuff to render so
[02:27:16]  uh that's why we just create like a old like use state with a just plus one plus one plus one plus one to cause re-renders and this is the router
[02:27:26]  so it has it uses like history from like thank you to the react router why is there history thing and so push is if you not push and then just set url
[02:27:35]  start transition set url replace is the same yeah uh mutate these these things we'll go to this is the cache if you remember from there uh disable enables useless and pre
[02:27:45] load is just populating the cache okay right and uh so what start what will start transition do it will set the url but because it's in the transition it will hold
[02:27:56]  the screen the url will fetch new rse output or see that it already has in the cache cache it will get used by our server component and once everything is there
[02:28:07]  like everything is dissolved because the the url change will take effect and the new render of base router will happen with the new url the new cache entry will be used and
[02:28:19]  so a new kind of view will be rendered for you and so what this does is this handles just like it it doesn't know anything about testing at all so anytime you
[02:28:27]  navigate you you will need to have a special link component obviously we don't hijack links yet so our if you use our a component give it an href we will do
[02:28:37]  this for you like we'll we'll hold the navigation so uh yeah let me see if i don't have an example of yeah i mean the trend the transitions on navigation is
[02:28:48]  basically how any suspense based router works if you go inside solid source code the use navigate call has start transition wrapped around setting the routers url what happens around everything and
[02:29:00]  i think like this is this is what i think remember there's a feature on like that which made it made about like how there should be like state uh machine things but they
[02:29:10]  should use react as they're like state primitive still like and do the logical i think this is what he meant where like if you allow react to coordinate these transitions there's
[02:29:20]  a lot it can do with the ui that you know you don't get you'd have to wire up yourself so like even like history like when you pop you just said
[02:29:28]  you just do set url in the start transition and everything else all the async stuff all the fetching happens down downstairs this is i think you would find it so
[02:29:37]  this ad mutation listeners our api yeah and what it says is that whenever a successful mutation has happened get the value right and in a transition we we kind of refresh the cache
[02:29:52]  with the value that our mutation gave us so this mutation is a new rsc output right so this new rsc output we'll put it in a cache and we'll just
[02:30:01]  call render again so that's how you the mutation cycle get okay right so you listen to mutations that are successful and then like you allow the router to respond to those successful
[02:30:15]  mutations by changing the ui so this is a very dumb router that knows how to mutate and refresh and so it kinds of this is in some ways fully react already this
[02:30:25]  router because it allows you to do the full end-to-end like mutation so let's let's open like i've already spoken about mutations let's open an example
[02:30:33]  with mutations this one is uh already feature packed in some ways because it has forms as well so if you look at this this component uh let me see let me run this as
[02:30:45]  well actually uh terminal on a side note i think my design for error boundaries is bad it's not bad but it's not as good as it could be it's just
[02:31:01]  i'm seeing it here again and i'm i've been like toying around with a new idea of how error boundaries should be designed but it's just okay i'm curious
[02:31:07]  yeah i just yeah i just made this simply there about the reset button so you can just like file the book up together okay okay okay can i can i interrupt you something
[02:31:16]  this is kind of like four or five times in chat already everybody wants to know about your like theme and fonts like what is this oh this one needs to be used way more
[02:31:25]  in the world this is uh comics and yeah exactly that's that's what people are saying and like they're like is he using comic sans oh yeah sorry my favorite one um
[02:31:38]  so yeah but i don't know if it's very popular and the theme is i think the github like the github no actually let's see yeah g
[02:31:47] ithub doc i'm a github guy i also missed a sub earlier i want to say uh thank you uh adria ui for gifting another sub um i
[02:31:58]  appreciate all these gift subs it's great to get people past those pesky twitch ads so thank you very much yeah yeah yeah sorry yeah yeah okay um so yeah so this
[02:32:14]  one you'll see is the root file only there's no routes here so there's that that fancy nested app router is not even involved here but all of mutations refresh everything
[02:32:24]  works so let's see um you open this up so if you'll see a very dumb one this database this is actually in a planet scale database yeah if you'll see our
[02:32:35]  database is a planet scale connection yeah um uh and uh let's see what happens uh network let's get this here and we call increment and uh what happened so this is
[02:32:52]  a form with a button to increment oh wait wait sorry i why did i should be commenting code in the middle of a demo okay okay yeah you commented a bunch of stuff
[02:33:05]  where you're going you could follow look at the git no no no yeah let's just start this thing just they're no good okay and so i just feel safer to restart
[02:33:16]  this stuff okay okay so yeah okay this is just like a this is a debugging thing i've enabled where like one of the transforms like uh one of the transform streams on
[02:33:27]  the client what it does is that it reads the rsc stream and violet sends it to the pilot sends it to react it also logs it to the console so you'll actually
[02:33:36]  see like how things come in like and there's a time difference between them things coming first um later you'll see a lot of the inline styles they have to be
[02:33:44]  part of the rsc output so that one thing with rsc is that it is very finicky finicky about hydrating so it's like extensions and all can also sometimes
[02:33:52]  go up like they're trying to be resilient to that but sometimes and if you'll see like these are the loading chunks like so this is the act as it starts rendering it
[02:34:01]  like load chunks as it sees them so you see this one loaded much earlier because it sees it immediately i think this one it sees that after the form is shown um and
[02:34:09]  then it requires them okay and we click increment if you see a more things are required this got updated a redirect happened like with the url if you see the url is
[02:34:19]  changing as well right and this is all happening in like one request each so redirect ui updating i see see add the number and then you go to the new numbers page right
[02:34:31]  and so if you'll see the problem i mean there's no problem actually so yeah you'll see the the rsc output every time um whenever you're doing this and
[02:34:41]  the rsc output will include the new number as the current count and so if you see this this um uh this example has no client components that the user has added yeah it
[02:34:52] 's a little trick because there is a client side to the form somewhere right but to the user there's no client components it's all server side and you're getting this
[02:35:02]  kind of like spi kind of experience with routing and everything yeah and so let's let's see what the code for this looks like we have an error boundary here just in
[02:35:11]  case like the the the counter wants to just be like and the error boundary is a client component as you said okay yeah the error boundary is a client component yeah i mean yeah
[02:35:21]  in some way it has to kind of kind of has to be so that it can kind of use it what's interesting to me is that the fallback technically is rendered on
[02:35:30]  on the server right which is is one of the coolest things if like it errors it doesn't actually i mean it's funny it's only going to error in this case
[02:35:38]  probably because it well no actually that's not true if you're in the client and you do something that if you do something that errors in the client like do something stupid it
[02:35:46] 's going to actually show the pre-rendered fallback from the server without going back to the server again the fallback will be sent as part of the initial yeah
[02:35:55]  exactly we need to do that on the client side navigation right so let's look at the counter the counter shows two of the most amazing parts of this right so there's an
[02:36:03]  async function and we do await get count okay okay this this this is this is cooler uh the fact that you're awaiting inside the jsx binding um right did that did
[02:36:16]  that that always around it but yeah this works that that is that is cool i've wanted to see if this would work properly i i guess it i guess in react there
[02:36:28] 's no difference between putting in it or not because all the jsx uh initiates eagerly but you you know how much i i was curious on the syntax because if
[02:36:39]  i ever considered async components it would look like this so that i could literally write that put suspense where form is and then await under it and actually not true like like literally
[02:36:50]  await in in line um it would require a compiler trick but the yeah js as i showed you a while ago remember like i should send you that just i'm like look
[02:37:01]  typescript doesn't complain about awaiting you know in the middle of of the thing which is pretty cool or actually the parser doesn't fail typescript might actually have fun with
[02:37:14]  that but the parser doesn't fail how this part is interesting too like uh sorry so like yeah uh i just added that support for like the typescript beta and now you
[02:37:23]  can have several components like this used to be a header earlier like an async component being used here but now you can have something that returns promise and and the algorithm complete
[02:37:33]  right right but like but the one that's weirder for me is like the in between the div it accepts a weight number like do you have promise number as i think
[02:37:42]  this would probably work as well right but i'm saying promises also now but yeah it accepts this but you know what i mean because that's that's a promise of a numbers
[02:37:52]  of value be passed in i understood that the new typescript stuff was more about like changing the difference between what can be inserted versus authoring which side note gonna help solid
[02:38:01]  i'm pretty sure because the stuff i did in 1.7 where i made it really strict the saying hey you can't pass functions into the gsx now we can
[02:38:08]  use typescript to allow us to return functions from the components and not have it break so we get the best of both worlds just on the side anyway sorry i the await
[02:38:18]  in there is i i'm very amused by yeah i know i i did it for your amusement time just to figure out some phones okay and so the obviously the special component
[02:38:29]  is the form component traditionally so because it says no url this is kind of sending a request to itself right yeah and then the action is a function yeah look at this
[02:38:42]  so this is an async function okay this is attached but yeah async function using the database directly obviously this the help in the room is the user thing here but yeah the
[02:38:52]  async function gets the count executes an update and um incremented increments and then redirects us to the next where's the u server is it oh it's
[02:39:03]  top level yeah so i i still haven't done like the closure one the closure style list but like i to be actually very surprised i have been pretty satisfied like i haven't
[02:39:16]  like it's uh kind of yeah it's not been a huge edge of like oh i wish this was here like like i wish sometimes that i could have written it here
[02:39:25]  but i think i wrote increment first that's why it wasn't a problem but yeah like if i had written the form first and i wanted to write increment i would want to
[02:39:31]  start writing it here i don't know i you you were much more into the inline inline than i was like you you you would write everything in line i was like
[02:39:41]  i don't mind just writing this above and like make writing an increment function like like you know like above like above the counter i'd be like yeah sure let's write increment
[02:39:50]  here um one interesting thing is like with server function i think there's a lot to explore because i don't think a lot of has been talked about this so this increment
[02:39:59]  function i can pass it as a function to something right yeah but let's say i wanted to make it the event listener for an on click yeah i don't think i can
[02:40:10]  or like the problem that i was having was that because let's say you i use this increment as an on click handler directly yeah the problem is that the browser will call
[02:40:21]  this with an event right an event object yeah and we don't know how to serialize that back to the server so whenever you want a client component to use a server function
[02:40:31]  like whenever you want to use a server function on the client you have to create a client component that will encapsulate kind of the behavior with the event listener that needs it
[02:40:40]  so i need to create a button client component that does this because i can't even talk this as i mean is the event that hard to serialize i don't think they
[02:40:53]  do it i mean they don't know right now but it might be very i don't know how much like the idea is that you can't assume on the other side that
[02:41:00]  you have the whole event right so the the typescript like you increment should never try to think it has the event and then it has the target and all those other kind
[02:41:10]  of properties there would be i think there's too much kind of mismatch between what it actually has which is what is on the browser um i think they just probably don't
[02:41:20]  want and then the other thing is that uh if you have an on click listener it kind of has to be a client component yeah yeah yeah i was gonna say how does this
[02:41:28]  work like you if you put an on click on a server you can't put an on click on a server rendered like yeah so a server function essentially has to introduce a
[02:41:38]  client component but the form is the one client component that knows what to do with it this is what's interesting about this and these are great observations and why forms look so attractive
[02:41:49]  here is i i just i know people who are very adverse to forms uh but like this pattern very much lends to it because then you get to like leave the markup
[02:41:59]  alone and and you're doing most processing on the server anyways so it's like the only place the only the form clunkiness only really comes in is like suddenly we
[02:42:07] 're you know same thing with remix or if you saw all start this way you're you're in the hidden fields zone right where you're like you're like so if you
[02:42:15]  look at the form here it has it has one hidden field so if you see what is what is the form implementation it takes a client form it adapts the inputs of the
[02:42:25]  user is given and it puts in one input of our own which is the action and if you see what the action is is this hidden input okay it's you know yeah
[02:42:35]  i mean we no no we we talked about this remember the one point we were we were saying like wouldn't it be cool if we didn't only have the form component attached
[02:42:45]  to the action but we also had a retry form right because so like you can get like you could generate so if something failed and you go okay i want to put the
[02:42:56]  retry form in the and i think one special thing right like if you were to write it back in a state we could serialize yeah we could serialize all the
[02:43:03]  original stuff that we know from the post back in automatically as like this so then you basically have a form define all your form fields and then the retry form actually could regener
[02:43:13] ate the form fields for you automatically so you wouldn't have to write them yes it's anyway sorry yeah i completely understand what you're saying like uh that was the idea
[02:43:24]  like and i think one special thing why like having the action id also as an input instead of like a property of the form is i think there's like a composability thing
[02:43:35]  here where like the action because the component that can be composed inside the form can come from somewhere else like um whereas like the form is assembled somewhere else and the action is
[02:43:46]  like an input that's passed from the from the kind of the parent uh and as much i think you know if you can compose things in the components just better uh and so
[02:43:57]  yeah on the client obviously like there is oh we got the error boundary somehow because oh i i just scored in the middle so we got the error boundary in the middle uh but
[02:44:08]  yeah okay there's a comment from chat about this hack will not be needed anymore the action attribute of the form element can be used directly um but this is something you built
[02:44:17]  yours yourself wasn't it i think the idea is that eventually i think react wants to like support this like lowercase right before it does that i can i uppercase form
[02:44:29]  is good enough just like right right right right it's the same question again right we hacked all a's for a while and then i went back down i it is interesting
[02:44:40]  though because that decision creates the client server component tension i i realized like you know i mean like is that that's what interests the whole thing where we're like oh this anchor
[02:44:53]  can sometimes be used on the client or on the server like you like do are all anchors should they all be client components and i think the reason you go lowercase
[02:45:03]  is like essentially telling people like if they want it to be client capitalize it or not is a weird like split so they're like let's just make it so that it's
[02:45:15]  always lowercase um and then it just avoids the whole client component server component thing because it just always works and if you treat anchor that way it makes sense to treat
[02:45:25]  form that way um yeah i mean i yeah i mean it's either both or none but i'm okay with this because this is like components components i can control i can make
[02:45:35]  the placements for them things like that um i control the mechanism but i understand like either of those ways as long it's as simple as this it's so funny i
[02:45:44]  wonder if i wonder if i'm going to reverse the a capital a lower case a thing in this world uh it's just it's funny i i was i thought that this
[02:45:54]  was a good idea because then it made it very clear the separation but you actually don't want the separation because of these arbitrary client versus server rules you want to decide what to
[02:46:06]  do for anything right i guess to be fair they're kind of more shared components anyways so it shouldn't actually matter the only reason that our our anchors is a cl
[02:46:16]  is a client component is because of the state highlighting capability um like like that but i i don't agree with that i mean okay in some ways if you're assuming the router
[02:46:28]  hijacks all anchors right yeah if it doesn't then what you're doing is whatever that small amount of code the uh the router would have written to hijack the
[02:46:37]  anchors and do a navigate call that's the same amount of code that's part of this a client component right same right right yeah it was just and it's still and
[02:46:46]  it's like loaded on demand like when you need it like if you don't use any anchor tags or form tags it's not part of the code but i i get the
[02:46:55]  argument i mean the the other thing and the reason that we ended up there is because if you're if you're doing nested routing there's a good chance i mean
[02:47:04]  you you don't have to look at twitter to see this but you know what i'm talking about like you click the tab and then the content below it swaps out which
[02:47:10]  means that even in a server component environment you can't change the tab selection without client component because you're not right you're not doing like this you're not going to go
[02:47:20]  back and re-render the whole page on the server so the anchor page if there's any kind of styling around the anchor in terms of selection um generally speaking is going
[02:47:31]  to be a client component like it's almost unavoidable um so right i should know that um that that thing you said i was thinking about why like there's all these
[02:47:40]  like you know new kind of routing mechanism next router like the parallel routes the the different entry points and things like that and i realize it's because remember how we've said that
[02:47:51]  nobody should be calling like server components on their own yeah i think the idea is that every kind of interaction which would require you to like you know selectively get rsc
[02:47:59]  output have to be put in the router eventually yes otherwise you would have to do things in userland so that's why i think all of those kind of different like tabs models
[02:48:09]  all of this would have been things you would want to do manually with rsc right and it's interesting right because like don't get me wrong we we should represent all the
[02:48:21]  state in the url so like if we get deeply nested stuff you then you can refresh on it but there's a lot of apps that literally go like i forget
[02:48:28]  i don't think twitter's this way but like if you refresh on the page it'll lose tabs just because like they don't encode that into the url and and
[02:48:37]  and then it's like how many layers deep of nesting are you going to go to so that you can ensure that every single interaction works like that like you're and i
[02:48:46]  think it's interesting too because if you tie that into a file system router that has like five top level files per nested folder structure like right it's like like the
[02:48:58]  it's like blowing out in like the angular sense of blowing things out but it is interesting i mean again maybe insights there why remix went for flat routing like like the no matter
[02:49:10]  i'm not saying it's in the best pattern but like no matter how deep you get with remix uh style flat routing like it you don't actually end up with that
[02:49:19]  many files like right right right um i mean just just an observation i sometimes think that like it's interesting how these implications kind of like stack on top of each other yeah yeah
[02:49:35]  yeah i mean i was just yeah showing you guys like okay what does the rendered form look like this is that import with the action and then yes yeah yeah yeah interacting with
[02:49:45]  chat here uh yeah no no exactly that's what i'm saying only the tab thing needs to be a client but my point was that the tab thing needs to be the client
[02:49:55]  component like in your head you might be thinking oh i can like the ink like i can make the tab thing a server component because like if i'm going to go back
[02:50:03]  anyways and the page is going to change with it then i'm going to do it but the reality is that you you don't want to re-render the whole page on
[02:50:10]  the server so like like i i understand that the tabs content would always be going to the server it's just that the the question is like the actual navigation links you you actually
[02:50:20]  end up making them client components and this is a difference from an mpa mpa you never do that anchor tags are always server rendered part of of the page because you
[02:50:30]  know that selection state is going to lead to a full page reload so you never actually do that so in a sense the mpa mentality of islands does have a lower baseline even
[02:50:42]  without the like there's just less client components um yeah because stuff like stuff like forms and navigation will never be client component in mpa model um so yeah it's it's
[02:50:53]  a subtle thing i don't want to show off like okay i got javascript disabled yeah and so this should work just like it did right like and now it's
[02:51:03]  doing like nice you see this over here there we go the remix demo with rsc uh with with rscs so you see that it's actually there's a redirect like
[02:51:14]  browser redirect and then that's getting the new data nice so progressive enhancement server components might have might this might be the first time this demo has been done anywhere i do not
[02:51:25]  think anyone has demoed right because it includes mutation i don't think anyone has shown off progressive enhanced react server components so very very cool okay uh so yeah so this is the
[02:51:39]  mutation story uh use server to like pull into the server for functions uh i think there is an interesting place they might go to where they're they're you know returning js
[02:51:51] x from here and i wonder like what that would enable like i actually disagree with this statement but i mean i just want to throw this up here i understand the thing from the
[02:52:02]  chat rc rc is the next level spas as mps they're actually the kind of the next level of both they can kind of meet in the middle um
[02:52:13]  is is is a thing like the model sorry um right i just can say i think the model is actually much much much more mpa ish it's just that like um
[02:52:27]  the way you would approach this from an island centric version from like a react centric version is just like slightly different in terms of how you handle the diffing um
[02:52:38]  i think i think on the other side of perspective that you are i think you had told me about is that the server the server and the client side if you take out these
[02:52:47]  two things they're trying to eat each other the server can be like okay there's a lot of static stuff here and so you know all of this should be part of the
[02:52:54]  server and the client kind of thins out to just the interactive parts right let's say you have a very client heavy part and all you need the server for is data
[02:53:02]  this thing can kind of just shrink down completely imagine like imagine your root there's just this html stuff and we just get data and render like our whole kind of let
[02:53:14] 's say an app here app data is going to do right now your your rc site kind of essentially becomes an api for your app right because all it's sending you
[02:53:24]  is one client component and the data to go with it that's what you normally do on navigation and on the on and like on like any new spa app right it's
[02:53:32]  like you want the data to be prefetched and you want their app to render with the available data and so rcs allow you to shrink down all the way to that
[02:53:41]  as well whenever you use client and your everything could be on the client like yeah they cover a wider range it's just interesting because like i i don't it's not just
[02:53:51]  because of thinking in mpa terms i just don't consider the single page app be like this to me like the it's it's it's more than just like it
[02:54:01] 's such an architectural flip-flop that i i treat this as something completely new and right i mean the word the association is the client-side navigation right like i
[02:54:13]  think if that's the association that's where you i guess i include client-side rendering as part of that that association it's not just the client routing it's also client
[02:54:23]  routing and rendering it's significant um yeah so i think the client the rendering is not happening on the client here but the routing is happening on the client so yeah it's
[02:54:35]  almost to the point, and I had this discussion last night with you and Dan, I'm like, maybe because like the complexity of explaining this stuff, like we should just
[02:54:42]  like drop it. I was like, how important is that people understand the details? Because people keep trying to come up with single page app comparisons, like talking about patterns we
[02:54:49] 've used in GraphQL and stuff as ways of describing RSCs. And I think that's just a mistake. Like we should just like, just be like, forget
[02:54:57]  all this stuff and all this and just start your mindset from like an MPA and just be like, this is an MPA that happens to not like throw everything out
[02:55:09]  on a navigation, right? So it's definitely like, if you try and come from the other side, it's just really complicated because you're like forced into explaining how
[02:55:18]  every little piece works to achieve that. Whereas if you just like, if you just start from like, actually, I think Parasoft also put it here, fancy rails
[02:55:26] . Yeah. If you start thinking of it like fancy rails, like everything just falls into place much, much easier for people without like the context of getting into, um
[02:55:36] , into this stuff. And it's, it's interesting. Dan doesn't want to talk about all these details, right? Because they kind of... Well, he
[02:55:47]  does. That's the fact of the problem. He goes in and he explains really deeply and you listen to him for like 10 minutes, go on this, you know,
[02:55:58]  thing about this. And he keeps on explaining it. And people are just like, really trying to get over the hump. And he hopes that eventually it clicks and it
[02:56:04]  usually does. And then people are like, yes, that's it. But like, there's this whole question of like, and I think Theo is seeing it now too
[02:56:10] , is just like, can we just avoid that? It's just, it's, it's, it's like, once you understand how all those pieces work, it
[02:56:18]  becomes all that knowledge to explain it is useless knowledge. Like for most people, like you don't actually need the knowledge to explain it. So if you're starting point a
[02:56:25]  single page app and you have to go over that hump to get to it, you've just like gone through just incredible hurdles. You're now like a framework expert here
[02:56:33] , building your own framework, like you are here, Nikhil, to actually get what's going on when all you wanted to do was put an interactive component on a page
[02:56:41] . And I kind of feel like, and I think Theo's experience with Astro kind of gives them this like lean as well. It's like, we're so locked
[02:56:52]  in this, you know, we spent so much time like condemning MPAs and like being like, you know, on the single page app side and doing all
[02:56:58]  that, that like, it's literally the solution for how to explain and how to like mental model this stuff. It just like, there's too much stubbornness there.
[02:57:07]  Cause as soon as you start trying to do that explanation to the single page app person, they're kind of like, no, but isn't this bad? Isn't this
[02:57:13]  bad pattern? It's like, we might've been a little heavy handed, you know, like we might've, we might've like tried to sell our point a little
[02:57:21]  too strongly in the past. Yeah. Yeah. I mean, yeah, I think there's a big, big kind of, um, leap required in the education around
[02:57:32]  this. Like, uh, it was difficult for me to grasp everything and I was like in the weeds of it. And, uh, and so I can understand, like
[02:57:41] , I think there's a lot more education needed to be required about where everything is happening. What is like, you know, what is the flow exactly? I think
[02:57:50]  there's been, um, a bit of that lacking. Um, I think I want to be able to contribute to some, to think of documenting a bunch of these APIs
[02:57:59]  and like what exactly happens on, uh, on a server render, on a navigation and things like that. But, uh, yeah, I never get time for that kind
[02:58:07]  of stuff. I want to show you a few interesting things. I mean, just before we want to like different stuff. So I'm going to show you like,
[02:58:15]  I added like a static generation kind of thing. And I just want to show you like what it outputs, like for, let's say for the hack and use example,
[02:58:21]  I, right now I give it to you, what does that mean to, so it outputs HTML. So if you see the, but yeah, it's HTML, but
[02:58:29]  it's also RSC output at the bottom here. Right. This is what you would get initially if you came to like a slash, right? Um, sorry.
[02:58:38]  Or if you came to new or show, you would get those, but now from show, you're trying to go to new, what happens is that you actually, um
[02:58:46] , make a request for like, because you saw like the, how the fetch request was to new dot RSC, right? Like when you navigate. So it makes the
[02:58:54]  same request. No change in the client side code, but now it can see that there is a file called new dot RSC here. And so that becomes a static
[02:59:02]  RSC output. Why didn't you just inline it in the HTML like you did in the other stuff? So it is inline, it is inline in the
[02:59:09]  HTML. It is part of the HTML files, but if you're going from new to index or from index to new, you don't want to go in navigation, right
[02:59:17] ? Oh man. So you need to render the RSC for each of the things you might want to render too. Oh man. I thought about this because this gets even
[02:59:28]  more fun when you consider nested routing and it kind of like exponentially expands out. Okay. But yeah, I see. So you're saying like, yeah. Okay
[02:59:42] . Yeah. Uh, I mean, you could, you could also just say like, this is like caching your API requests. Um, you, you, I
[02:59:52]  don't, I don't, yeah, no, but it's also, yes, you can say that is, I mean, this is, oh, this is the
[02:59:59]  case where you don't even have a server, right? Right. Right. That's when you're writing a full, like you're writing like a doc site or something
[03:00:05]  like that. Like, you know, when you don't even have a server. So this page comes and when I go to new, uh, like you'll see,
[03:00:13]  there's still probably some bugs with what I have. Oh yeah. So I'm not treating index properly right now. So if you just go dot RSC, I
[03:00:22]  doesn't like, so I have to, I have to fix some stuff here. Right. Make it work on RSC. So yeah, this is just two hours before
[03:00:29]  this, but yeah. So from index to new, you can see, uh, let's say we went from here and we went to new, or did the prefetch
[03:00:37] ing happen? And this is like a static file, right? So it takes like four milliseconds, like nothing. It didn't need to go to like a server.
[03:00:45]  It's from your CDN directly. So I think this is the vision react has for static sites. Yeah. And this is, this is cool because like, if you
[03:00:54]  know anything about SSR, SSG sites, people would go, oh, you know, the speed of static, whatever that's only on the initial load. And then
[03:01:01]  afterwards you're hitting an API endpoint, uh, or, but maybe, or like, or if you don't hit an API, if you're getting data from an
[03:01:10]  API, you'd still need to do that. Right, right. But let's, but even, yeah. But even without an API, your static gen has gone to
[03:01:17] , to waste because your next page is client rendered. So like, like, like, like, I mean, it's, it's fine. You loaded all the JavaScript
[03:01:31]  and you click, you click the next page and then it client renders it. So initial load. Yeah. So, yeah, this, this is, uh,
[03:01:41]  this is cool. Cause it's, it's like a hybrid again, where you're actually going on the page navigation to the server, but it's a CDN.
[03:01:47]  Right. Right. Exactly. So it's like for certain kinds of sites, which don't use the headers or don't use the search, like don't use a few
[03:01:57]  of the dynamic things that could make a different. And that's how, like the, I think this is, even if like the whole static thing is not the next default
[03:02:05] , I think the next default includes like producing these artifacts for each of the segments, because they are, they're forcing everything to be static, right? Like you have
[03:02:14]  to opt into dynamics. So whatever static, by default gets output like this. Yeah. So that it's instant, like on the client, uh, it will be dynamic
[03:02:23]  stuff. Um, yeah. And, uh, okay. So this is one interesting thing. The other interesting thing I want to show you is this is an app that
[03:02:33]  I won't run right now. It's part of like what my, uh, what we're building at a company here, but I wanted to show you like the interesting
[03:02:40]  places where I, so this is a get session thing, which uses to, uh, this is still my old code. Okay. So, uh, uh, it
[03:02:50]  gets like a super base client. It, uh, make sure like, like we send the request and all with the client. So it says if it has a session or
[03:02:59]  not. So it's probably making some requests to the database. Yeah. Might not be. And so then we wrap it on the cache. This is for the server,
[03:03:06]  for the react server, actually, for the RSC stuff. We wrap it on a cache. And then we use this kind of all over the place. Right.
[03:03:14]  So we use this like three, four areas, like signed in as the organization avatar. We use it to just put the email somewhere and we use it to, we use
[03:03:24]  it, uh, to see it. I think the client side provider, like, so that it's available, like as a client side hook. So, um, so
[03:03:33]  one thing is like, yeah, the cache part was really helpful because there's no other way for me to like do this once and like, except like passing this again
[03:03:41]  and again, everywhere. So the clients are cached. Let me make sure that I can write like these individual kind of get organization after this one. I didn't even
[03:03:48]  need to, I didn't think to cache because it's all optional, like, because I'm only using it one place, like the cache is not going to help me
[03:03:54]  really. So I just like kind of async await it up here. Uh, this, I use it inside the component to like decide what to render based on like whether
[03:04:04]  the user signed in or not. Right. And then, and then what happens on, uh, uh, let me show you this, what happens when, uh,
[03:04:15]  there is the auth part, uh, sorry, uh, root, uh, not this, where is this stuff used? Uh, so this will have you, I use
[03:04:29]  this structure for like API and then I split this out, um, over here, like super base provider. Yeah. So if you see this here, whenever the super
[03:04:39]  basis, like login happens on the client. So on the client, whenever we see that an act on our state chain, so like if somebody signed in or signed out,
[03:04:48]  then we call router or refresh. So every router kind of should expose a refresh function, which means buzz the cache, refresh the whole screen. And when the whole scheme
[03:04:57]  gets refreshed, that's when this session variable will change, right. From maybe a, uh, maybe something that was already logged in to now it'll become null. And
[03:05:07]  that's when this will become null. That's when this use effect will rerun and it will like resubscribe and things like that. So this is a client side context
[03:05:15]  provider, which is completely being driven by the server's kind of state. So even the effects are being driven by the server and this map providers, I think like I
[03:05:24]  haven't shown too much of it, but they see it's basically a map. I render a full screen map. And then what place in the map should be zoomed
[03:05:31]  into is dictated by these like map view components. So map. So if you'll see, this is a whole server side tree that's being rendered and the server
[03:05:44]  side tree will render this map view component, which when mounted on the client will, because it's already inside a map provider, the server side decides what latitude longitude to
[03:05:56]  direct the user to. And that server render output, when on the client is rendered, it will like kind of run an effect to like take the map map there.
[03:06:05]  And so the entire where the map should be placed is all obviously getting derived from the URL and the fetching and for the coordinates and all is all happening on the backend as
[03:06:14]  part of that one full call. And obviously with suspense and all it can be delayed and things like that. So for example, this thing, what I'm doing here is
[03:06:22]  I show like a bunch of state. I want to show all the state boundaries, but I, in my fallback, I just show the state boundary that the user selected
[03:06:31] . And both of these are like full interactive, like boundary because they are like map kind of WebGL things, but the logic between what should happen while it's loading
[03:06:43]  versus like while it's not loading is all happening on the, on the server. Like it's, it's pretty crazy. Like, uh, uh, what kind of
[03:06:51]  like it's, it doesn't feel anything different from like an NPA, uh, an SPA. Like when you use it, uh, the thing that I
[03:06:59] 'm having to fight against now is to figure out like what I need to cash, right. For these things to remain fast or like, you know, do I need to
[03:07:07]  like, uh, do this RSC output for all the Indian states, right? That's when I'll be getting the static output for all states. And so it
[03:07:15]  becomes fast on the client because like the states are not changing the centers quickly versus maybe like districts or things, maybe these change often. And so I don't want to,
[03:07:23]  and there are too many of them. So maybe I don't want to cash their RSC output or something like that. There's like a lot of interesting contribution here,
[03:07:31]  but, uh, yeah, this is just like an actual production ad that I'm putting with all of this stuff that, uh, it has had a few names in
[03:07:39]  the past flight router was one of them in the middle. Um, but yeah, um, this is, yeah, using, showing how super base can be used. I
[03:07:49]  have like an example with next auth, uh, which let's see what, how it works. So if you use a Prisma client, uh, again, a get
[03:08:00]  session call, which is cash. So this is, uh, before I fix the typescape stuff. Uh, so yeah, in your profile, you get session.
[03:08:07]  If it's a user, you put a sign out thing. If it's not a user, you put a sign in thing. Uh, how does get session work?
[03:08:14]  Uh, get auth session is exported by RSC auth. These things are not working properly. But yeah, it takes the request and your auth options, which is what is
[03:08:24]  the, uh, so this is like typical next auth kind of like configuration. You can create your auth options and then all of that works like out of the box.
[03:08:32]  You just put like, this is, so it handles API routes by default. So you just have the route file export, get post and things like that. And then,
[03:08:41]  uh, you can handle like your auth yourself. Uh, I think this is, uh, I just, I think this, this, just this one example deserves a shout
[03:08:53]  out because this is, this is if the react folks have been probably called this is, uh, I don't know how it's full name is, but shat
[03:09:01]  cn kind of UI. Uh, some of the, like the most prettiest looking UI stuff I've seen. And so this is all being rendered by RSCs
[03:09:11] . So if you can imagine very few things here are client components. This tab thing here is a client component, but all of this is being rendered on the server except
[03:09:21]  like this hover action, you see as a thing. So it reminds me of the movies demo actually sort of. Yeah. Yeah. So, um, it is kind of
[03:09:29]  like that. If you see, I can sign in here. And so this, oh, I think I screwed up something, but yeah, I, I fucked up something
[03:09:37]  on the GitHub odd side. But when I sign in, the space refreshes my face shows up here, uh, with GitHub odd and all this typical navigation. So
[03:09:45]  if you'll see, this is just pages, uh, like full client side navigation. And right now, obviously what we're doing on the backend is making RSC requests
[03:09:55]  for each of these things. Uh, uh, but only things under the layout are asked for kind of, uh, you can navigate between browser. Interesting one. Like
[03:10:05]  this again, shows that increment button. I think I broke. Ah, okay. I think I've added a delay there where it, uh, increments at this increment
[03:10:14]  is not a form. This is just like a button. I added an on click listener to and I sent a server function to it. And then this is like a form
[03:10:23]  which is using radix forms to like show alerts and all of this, like, but all of this information kinds of comes from the server. Like what kind of messages
[03:10:31]  to show, what labels to show, all this is from the server. I think, I don't know what this button does. Oh, it's a, I think
[03:10:38]  it's a client side navigation. And I added to test, like going to a random link. Okay. Yeah. And so obviously these are all client components because, and
[03:10:47]  they all use like radix components, uh, in build. So it's like, it's like literally without using any HTML components, all of this has been composed
[03:10:55] . So I mean, this is a shout out to him for the UI libraries created. I think it's doing very well. A lot of people are using it because it
[03:11:02] 's like incredibly classy and good looking and actually all accessible because it uses radix. So a shout out to him. Um, yeah. I mean, uh, in terms
[03:11:15]  of examples, I don't think I have too much, like, this is like, I think I had built like a router which, uh, which, which works
[03:11:23]  like without file system routing. Yeah. So you declare that out there and, uh, you have a component and stuff like an element. And so it decides what to render
[03:11:34]  and you can do the navigation. This is all using old APIs, so I have to fix that. Yeah. No, it's been very busy. And MDX
[03:11:44]  also, yeah, because MDX is the same, like MDX as server components is as easy as like just using the MDX plugin. Uh, I think that's
[03:11:52]  all I do. Yeah. Just like using an MDX plugin to like, uh, I can just import this here and hello is still a server component. So it rend
[03:12:00] ers as a server component. Counter as a client component. Um, I think that's it. This, this one, I had just made a few examples where like
[03:12:10]  the top level thing is a used client directly. So there's still some RSC that has to happen on every navigation. I have to figure out maybe there's a he
[03:12:18] uristic that that doesn't happen, but yeah, because eventually the URL will only be changed by like the caller of this component. So, uh, I think everything
[03:12:28]  closed down from the URL, like this is a way down route for this. Yeah, so I was just trying like, that's interesting. Yeah, I guess because this
[03:12:35]  works with already, I just the HTML tag in the client, um, root is interesting, but I guess that's like how stuff works today. So like that can still
[03:12:44]  kind of work. No, so if we use client this, this is still server ended, right? It's still server ended from the HTML and we hydrate it from
[03:12:52]  the HTML. Yeah. No, that's good. I think we're good on examples. Actually, we're, we're just over three hour, three hour mark
[03:12:59] . I wanted to talk about a couple of things here. First of all, I'll talk about takeaways. I want to, I want to, and there, there was
[03:13:04]  also some questions coming in the chat. So I wanted to kind of, uh, shift gears a little bit. I think, I think the examples. Yeah, yeah
[03:13:14] . You don't have to, I mean, I can take care of it too. Um, yeah, yeah. Okay. Yeah. Just do that. Yeah. No
[03:13:20] , in case, in case there's something else you want to show in a minute of what we're talking is, it'd be completely up to you. But I will
[03:13:30]  not look at myself. Okay. Uh, yeah. So a couple of things like, yeah, I, I, I, I, yeah, it's some of
[03:13:37]  the takeaways. I think there's a couple of things I want to focus on that I noticed while we were talking. Um, one of them was the value of the separation
[03:13:47] . I think one of the, I I've been talking about how there's different types of ways approach server components. And one obvious one is that you could basically take islands
[03:13:56]  and diff HTML and get very similar experience, right? Where you could picture like something like Astro, do the normal render first time, and then second render essentially do
[03:14:10]  what Astro's HMR does and turn all your components into a client only. And then you essentially get the same experience. But the question is the, the key thing
[03:14:22]  that server components do that's different than that is actually separate the tree into like two completely different things. Uh, what was your impression of that? I mean, in
[03:14:34]  some ways, I think any islands router is going to be doing that. It's just, I feel like they took it from what would have just been an implementation detail to
[03:14:46]  like, see what is the, what is the extent of the fact that we, we have, because we've already discussed, right? Like we are going to treat initial
[03:14:55]  render and navigation separately in any islands router we do, right? So we are going to, uh, in, in doing the initial render, we'll render everything from
[03:15:04]  the top, all the segments and we'll resolve the client components and we'll build one full HTML. When we do a navigation, we'll render just the segments that we
[03:15:13]  need and we'll skip the client components because we want them to keep state. We want them to keep context on the client. So we fill the holes in later.
[03:15:21]  So it, it, what they did was they recognized that the second style of, you know, rendering on the server is the more generalized one, which has to happen all
[03:15:30]  the time. And then the client scenario of how it's consumed can be different. Right. Where you consume it to either flesh it out as HTML, or you consume
[03:15:40]  it to re-render on the client, or you consume it to cache it somewhere, right? All of those things are generalized on the fact that you have this tree that
[03:15:50]  runs somewhere apart from the main source of action. So the, I think the main point of calling it the server is the place where you're running it away from the user
[03:15:59] , where your protected spaces, like where you want to do expensive stuff, where you want to do your database protected secret stuff. Like that's the distinction between these two
[03:16:09]  places, uh, where you want to do your heavy stuff, where you want to do maybe stuff all at once where you're okay, waiting, making more longer things.
[03:16:16]  And all that happens on the react kind of server side. And then, yeah, you just kind of pick up from there for whatever client is kind of consuming it. So
[03:16:25]  you can imagine like react expo being like another client that takes RSE input and decides to interact with it differently, like in its environment. And so I think that
[03:16:34] 's where the separation makes sense. And then once you have that separation, the advantages come from like, okay, maybe you run the RSE, if you're doing everything
[03:16:41]  client side, maybe there's some advantage of running a bunch of stuff in a worker, getting that output, and then running that, like, you know, rendering that on
[03:16:49]  your client, or like I talked about before, where like your RSE is being rendered close to your database, your server rendering is happening on the edge, close to
[03:16:56]  your user. And so like, one hop from the user to the server to the database, you're being able to do everything. Whereas, you know, assuming you have
[03:17:05]  multiple database calls, like that's when the advantage will probably show up, because then you'll not be doing long trips to the database. If you can like, you know
[03:17:11] , let's say Superbase has these like, edge functions, they're probably running on the same machine as your database. So if you're running, if you're doing
[03:17:18]  an RSE render on in a Superbase edge function, that's going to be probably the best database experience you can have for your data, right? Like it's
[03:17:25]  the closest you can have, so multiple round trips will be the fastest. And your server render gets one full tree, your SSR server gets one full tree with all the
[03:17:34]  data in there. And then all it needs to do is fill up the holes for the HTML. And then if your client was getting that directly, you know, it's
[03:17:41]  even better for it, because then it just needs to swap a few things in the client to show the new data. And so I think the separation probably is the natural
[03:17:51]  intention of going in that direction. Yeah. So to understand what you're talking about, just is this scenario, I think I'm, I'm, if I've got
[03:18:02]  this right, I'm, I'm, I'm just, sorry. What I, what I, I'm, I'm, is this, some kind of feedback
[03:18:19]  coming? I might have to mute you for a minute. Yeah. All right. But what I'm, what I'm seeing is, and this might be even
[03:18:47]  an argument for the separate endpoint. What, what, what, what, what I'm hearing here in this description here is picture of the flow was client requests initial page
[03:18:58]  from edge, right? Initial, right. Edge goes, Oh, I need to get the thing from the RSC. Right. So let's, let's,
[03:19:13]  let's give initial a nice color, like, um, green. Okay. Green. And I'll, I'll, I'll make a box in white here over
[03:19:29]  here for our database. If I, if I, if I'm understanding the flow here, and this might explain, you know, so we, we've got like this
[03:19:40] , you, and we got this, you, and then essentially. Initial, we do this, you know, so we go to edge, go to RC,
[03:19:57]  RC, back to edge. And then we go back to our client, but subsequent calls, which we will do in a pink color. No, keep the screen,
[03:20:09]  keep the screen. Sub, subsequent calls, which we do in the pink color. Like once the client loads, it can go, it can do this. Um,
[03:20:19]  and then, and then something is very bad with your audio. Nikhil, I hope it doesn't stay like this. I want to ask you about some other stuff.
[03:20:35]  Um, but you know, afterwards, the, because the client can like, you can render in the, the, the RSC and, um, the RSC
[03:20:47]  endpoint into the client so that it knows to hit the RSC endpoint. So you get this scenario where, um, this hits the key part of this, this hits initially
[03:20:58]  fast, and then this starts streaming back fast. So, uh, and, oh, but no, no, no, no, no, no. No, the
[03:21:13]  problem here is. Oh man, that's, that's killing me. Um, is that the core top level of the app is in RSC land, not in client
[03:21:28]  land. So even though there's this streaming happening, this stream can't start responding until you've at least full round trip back here. I like it's, you
[03:21:40] 're going to go here to here, start coming back here to start coming back here. You can't immediately start going back before you talk to the RSC server. So
[03:21:52]  you do actually have to do the double hop on the initial load before you can do anything. Speaker 1: And I mean, maybe the layout is RSC output.
[03:22:07]  So you just get that. Uh, can you hear me? Your audio has just gone off the map. I don't know what's going on. It's, it
[03:22:17] 's Speaker 1: Can you hear me or not? We can hear you, but this might be the best vocal effect ever. Um, Speaker 1: Yeah, you
[03:22:27]  might, you might want to just like leave and come back for a moment or whatever. I don't know what's causing it, but it's like, it's like
[03:22:32]  a sparkly robot sound. Speaker 1: Okay. Okay. Wait. I don't know if sharing was. Speaker 1: Yeah. Welcome to kill back in a minute
[03:22:46] , but you're following what I'm saying. Like you actually, Speaker 1: I think you have to double hop in order to actually do it. Like you can
[03:22:52]  see this like benefit here, right off the bat. You're kind of like, Oh wow. If I can start streaming back from the edge content before, um, before
[03:23:00]  I can like even make it back to my server, but it's not, it's not how this works. Speaker 1: Okay. That's interesting. That's
[03:23:17]  what react does to you. Okay. Winner Auto-tune. Yeah. Um, hopefully we'll, we'll get new keeled back again, but it is
[03:23:32] , it is an interesting question because there is a separation because you can, you can, you can picture that there's like other breaks here, like build time as well
[03:23:40] . Like it's, it's interesting because yeah, I think, I think the deployment split angle is, is very interesting. Um, because build time doesn't matter because
[03:23:55]  it's co-located. So like at the time that you do the code, you don't really care. You can, you can do fancy build time stuff without
[03:24:00]  actually having the separation of trees. It's, it's, it has to be a runtime consideration, which would make you, you know, interested in, in this
[03:24:09] . Let's see. How are you? Hello. Can you guys, is it better? Yeah. You're, you're, you're better. Okay. No more
[03:24:16] , no more robot, no more roboting around. Um, okay. Okay. Uh, yeah, no. Okay. So no, the interesting part of this diagram is
[03:24:26]  you're right. So if, if the edge has to get the fresh RSC, it will have to wait for the RSC to get back, but I think
[03:24:32]  the interesting parts come, imagine you have a layout, the layout, you're going to cash, right? They're going to cash the RSC and send that immediately,
[03:24:39]  right? Like the other RSC parts. So the edge, uh, so on the edge, there is like a, there's a route, right? There's a
[03:24:46]  server component route that begins rendering. It's job is to get the other RSC stuff, right? So the layout will get fresh immediately. I love you took some
[03:24:57]  solid pills. Okay. Yeah. Okay. So, uh, but I charged my airports for like five minutes right now. So I don't even know if I have,
[03:25:08]  but I think I'll go for an hour or so. Okay. Um, yeah. So for the edge, um, but I think what it was interesting to show is
[03:25:17]  like, imagine if this RSC was next to the edge, right? Like if you pull that RSC, uh, into the edge bubble, like, can you
[03:25:25]  just show that? So now, now I'll go away, uh, away from the database. Oh, I wish this stuff actually connected. I mean, some of it
[03:25:35]  did, but yeah, if I, it's cool though, that the arrows disappear when I overlap at you, like these ones didn't connect. It's fine.
[03:25:44]  I, I, let me see there and there. Okay. Now almost we'll get there. It's fine. Me playing with Scala draw is fine. There we
[03:25:57]  go. Right. So, okay. Yeah. So now, now that you have this, now imagine if it's only one database round trip, this is equivalent,
[03:26:06]  right? Maybe, maybe slightly faster, right? Because you're not making another request to a server and that sort of, but I think as soon as, as soon as
[03:26:17]  you add even one waterfall is going to completely change the dynamics because now you don't want to be making those two long trips to the database from your edge, right? That
[03:26:29] 's, that's, that's such a huge waterfall in itself, right? Like you're making long database queries and the network is taking time to send all that big
[03:26:37]  amount of data. Right. I mean, that's an argument for what I've been saying about avoiding waterfalls on the server, but you know, like, I agree
[03:26:45] . I want to avoid waterfalls. I'm trying to figure out how I am on the train of trying to avoid waterfalls. But if you deploy and let's say
[03:26:54]  Vercel or Netlify automatically does this for you, it's, it's, it's an interesting thing that you write an app and it just automatically splits
[03:27:05]  like this. Like that's just the deployment pattern where you spin up two functions because this trip, the, the, the initial load, the initial load. Yeah. It
[03:27:18] 's the same story, right? We're going hop here, hop here, hop here, hop here. Right. Actually the initial load is actually, oh no,
[03:27:27]  no, nevermind. The initial load is actually a little bit worse here. Right. Cause you're going hop here, hop here. It's like a little bit worse
[03:27:36] , but afterwards, um, yeah, it's, well, actually it's the same afterwards. Yeah. Nevermind. Yeah. So this is this, this,
[03:27:46]  this, this all comes down to, I think once, no, I think once multiple database queries get involved, yeah, both of these, yeah, they're not the
[03:27:53]  same. Like I think in both cases, this one is probably better. Yeah. If, if multiple, if multiple database queries are involved, um, it definitely benefits from
[03:28:05]  being closer to the database. Exactly. Right. I think that's part of the motivation of this design also, I think, but I mean, devil's advocate here
[03:28:16]  is if you just freaking cut this part out of the graph and remove the edge, um, like unfortunately here, I don't know if the edge is doing very much for
[03:28:25]  you. And I guess that's the caching is the key. The edge, the edge, the edge in this perspective is not an application server. It is literally
[03:28:35]  just a smarter CDN. Like the, they can stitch stuff together. I think of it as a dynamic CDN. Yeah. Because essentially if you just cut, if
[03:28:47]  you forgot about caching for a second and you just cut the edge out of this equation for a moment, like you're kind of like without caching, this is you
[03:28:55] , you should just do this in the first place. Like it's just the pink path is just faster. The main issue is that you have usually one DB. And
[03:29:04]  so if this RSC is close to the DB, then for every different user, the distance is not the same. So that's the place the edge comes in, right
[03:29:12] ? Where this edge is next to every user. And then if there's no database involved, the edge is the fastest thing. Right, right, right. But if,
[03:29:21]  if the, and what I'm saying is, even if this varies, um, like, like, even if like, for the worst case scenario like this, I
[03:29:32]  think is still better than green, green, like, like, um, no, the main issue is that, um, it's the cache. The cache is again
[03:29:44] , what makes this, the cache is what makes this better. I think. Right. Think about why is the edge required? Uh, I think it's for the cases
[03:29:55]  where you don't want to go to the database. That's when that's, you'll get the fastest experience from the edge, right? Right, exactly. Or
[03:30:03]  yeah, well, that's, I mean, so I'm saying cache in that consideration. I mean, if you don't go to the database, you get the fastest
[03:30:11]  experience by just not leaving the client. Um, like, like, like, forget the RSCs altogether. Right. So Yeah. I mean, once we get DB
[03:30:25] s close to the edge, we don't need any of this. Yeah. The only thing is, I don't know if that will ever be practical in a number
[03:30:33]  of scenarios. Uh, having worked on privacy laws and stuff, I used to work in education. Like there's certain industries that this will just never probably, it will be
[03:30:42] . It has to be all in house, right? Their data has to be all in house, like. Or, and, and, and there's, because of like
[03:30:47]  protection, like even where it travels to, like we had problems setting up edge, uh, even for like having any kind of edge caching or edge for even image
[03:30:55]  like images, because it's like, no, you can't leave the country. And there's a lot of, like, there was a lot of things that were like
[03:31:02]  in a lot of services, like we're very strict that like literally parents, like we had an app where it was about parents and kids and the sharing school and they'd
[03:31:09]  like boarding schools. And they'd be like, no, no, if the parents aren't in the same country, they literally aren't allowed to like, look at the
[03:31:15]  content. Um, which is crazy thing, but like legislature, like put this in place. I think a lot of that stuff falls away, but like, um,
[03:31:25]  government, there's a lot of areas. Yeah. It's probably true for medical. It's probably true for law. It's probably true for finance. Like there's
[03:31:33]  probably, it's probably true for a bunch of industries. So, but yeah, so I mean, this is, this is the, the, the argument, the
[03:31:41]  argument for separation is interesting. I think there's value here, especially when you consider stuff like mobile, but generally speaking, it's to leverage the caching. So note
[03:31:52]  to self separable in a sense is most relevant for, for, for, for, for, for, for that. Um, I'm just going to make a
[03:32:00]  little note for myself here, leverage cash. Okay. Um, okay. So yeah, and I guess a similar question I want to ask is what your, your experience,
[03:32:15]  like with the specialized, uh, data format, cause this kind of comes hand in hand. Um, yeah, like w w what did you think? I mean,
[03:32:23]  it didn't, it just, it just never came in the way. So like, uh, I would never really need to understand it much. All I used to look
[03:32:31]  at is to understand, okay, what all is being sent as RSC versus, and it used to, it used to be enough for that because it's like, it
[03:32:40] 's very JSON-y and you can see like, okay, Dave, children, things like that. And your, all your props and all show up. So it's
[03:32:47] , it's not very difficult to read, but also I've never, I never need to read it really. Um, right. So the, the, to you
[03:32:54] , it's just, to you, this is just an artifact thing. Like you don't have to really worry about it too much. It's a, it's an
[03:32:59]  implementation detail. I started to understand why it's designed in the way it is because of streaming, because it basically breaks up our JSON into a streamable format where you can
[03:33:10]  send like keys, keys, keys. You can send the keys saying the value is some reference. The reference will come later. You can send more lines on the next
[03:33:19]  line that can be the reference key and another value. And so if the JSON is being read by some async thing or by some readable stream or something, the readable stream
[03:33:29]  can kind of join it on the go, like can, can close it on the go. I guess I'm only interested in streams in terms of the latency of things that
[03:33:38]  are actually like slow. So like a database call, like the fact that each line streams and I'm, I care less, it's more of like, like you
[03:33:45]  render the outside shell and then you render, then you wait on the, like something async. And then now you can send that in. And then like that's,
[03:33:53]  that side of it, which is interesting. Cause like, Right, right, right. No, I mean, so this, the same logic applies to that, right?
[03:33:59]  So the, the time span is, is relevant. Is that it can take very long or it can take very short. The consumer experience for this format is the same
[03:34:07] . Yeah. Yeah. It's fine. I it's, it's not a, it's not, it's not a big deal as long as it stays open and
[03:34:13]  it has line numbers. As long as you have the ability to put chunk after chunk, after chunk, after chunk, it doesn't actually, it doesn't actually matter what
[03:34:23]  the contents of that chunk is. I think that's. Oh yeah. Yeah. Yeah. That's, that's exactly what I also mean. Like, I don
[03:34:29] 't care about that format itself, but I could see why this is different from JSON or something. It's like, because in a JSON thing, I can never parse it
[03:34:36]  until it's complete. Like, like, so even a response from, uh, a backend should probably be more serialized. Do you know what they call it? Do
[03:34:45]  you know what they call their format? No, it doesn't have a name. Yeah. So we just call it RSC output or flight output. You can call
[03:34:55]  it flight, I guess. I don't know if they want that to happen, but flight is the name, the code name kind of. Okay. Yeah. What
[03:35:02] , what, what, what are the observations or learning pieces do you think? Obviously, I mean, the, the routing part was obviously like, there's so much to
[03:35:10]  learn, understand, and still figure out like parallelization. What I haven't figured out in my, uh, demo stuff is I actually don't do proper, like just
[03:35:22] , just fetching the nested part that changed portion. Right. Like, so I still fetch like almost full pages just below the router, like below the top level
[03:35:31]  router. So everywhere, everything from the top level layout, everything is rendered, but I think next obviously is able to figure out what exact portion changed. And what I think
[03:35:40]  it does, it does is even when like, for example, right now in my initial render, my whole RSC is one big blob, even though that render describes like
[03:35:49]  maybe three segments of the route. Right. Yeah. But if I'm not able to send it as three different segments, my client side cache is not able to understand
[03:35:58]  them as three different segments. So it will not know that it can like keep one segment if you know, just some one part changes. So that's why like, because
[03:36:08]  I only have a top level router that just does like, you know, changes everything. It doesn't affect me too much, but once the nesting is involved, you
[03:36:15]  would want to split up the RSC output also segment wise and like, you know, consume it segment wise everywhere. Yeah. This is, this is an important conversation
[03:36:25]  because Tanner and myself are going back into routing very, very quickly here. That's like the next thing on my list. And I, I, we already handle the partial
[03:36:36]  insertion. Thanks to Ryan Turquest's work. We just render everything wastefully on the server and then only ship the pieces. So doing the client, getting the
[03:36:46]  server to only send back the relevant pieces is actually not going to be too difficult with the new route design that I'm working on. Um, but yeah. Okay. So
[03:36:54]  no, yeah, I think that the, the thing that I haven't wired properly on the client side, figuring out what segment has changed and things like that. Like I
[03:37:02]  needed to steal somebody's nested router for that, but I didn't find one for my client. Yeah. I mean, it sounds like you're, you're
[03:37:12]  in the process of building, uh, uh, an actual react app on this stuff. I would love, I know there's like a lot of places to pull the stuff
[03:37:19]  here and there, but I'd love to see if you can get Tanner stuff involved. And maybe he's, he's just on his own path, but he's
[03:37:25]  very interested. Yeah. Like, so, so most of the APIs are based on Danstack routers kind of type APIs. He says that I don't use the
[03:37:32]  runtime yet because the runtime is designed to be isomorphic, right? Right. So I, I want to get it so that there's a server side runtime, a
[03:37:39]  client side runtime. Yeah. I mean, I definitely see a, uh, quote, start flavor to the stuff that you've been building. Yeah, exactly. Exactly
[03:37:48] . Yeah. Um, okay. Okay. Well, I, I, I gotta ask you about the, the directives versus the decorators, right? Uh, direct
[03:38:00] ives versus decorators. And for, for, uh, for anyone who, who knows, I'm actually talking about essentially use client versus like bling, essentially,
[03:38:14]  like how was the experience using the, using, uh, directives instead of decorators? Yeah. And I, I came up with bling and the server dollar stuff
[03:38:22] . So, uh, take, take everything with a grain of salt, but actually, to be honest, I have nothing to complain about the directives. Like there's
[03:38:30]  nothing I have needed to do that I've not been able to do. And they stay out of the way even more than decorators do, because like, they're just
[03:38:38]  an annotation. They don't make me change like from a function to a const with a reassignment because you can't wrap a function, right? Like in a server
[03:38:47]  call, like, it becomes a little awkward. Then you have to reassign it to something and then use that. Um, right? Like, so you have to assign
[03:38:55]  it to a variable. And you, I see what you're saying because the, the signature stays outside. The only question here is limitation. Like the directives are more
[03:39:03]  powerful because they give you more capabilities to do other sort of the decorators, like you do other stuff, like do other stuff, but you haven't hit the case
[03:39:13]  of needing to do that other stuff under the server component model essentially. Right. I mean, in some ways they're functionally. Yeah. Obviously the lazy stuff, you
[03:39:23]  know, client components are basically lazy, like kind of inbuilt everything. Right. So lazy is not something I've needed. Um, maybe the worker stuff is still useful
[03:39:33] . Maybe, uh, so I mean, cause I think of them as functionally equivalent, right? It's like you're labeling inside the function or you're labeling
[03:39:41]  outside the function. You're telling it that this function is special. Both cases, the client, the compiler needs to handle them, especially, um, the, the differences
[03:39:51]  in like what kind of experience they give you, I think use server was kind of very easy easy for me to use. You just put on the top of the file
[03:39:58] , even if it was inside the file, it would not have made a difference. What I loved about it is what I was my initial, um, motivation behind server dollar
[03:40:06]  sign was that the function remains magically kind of the same everywhere. Right? Like, so you do, no extra arguments, no extra, like, you know, the
[03:40:15]  signature doesn't change. Uh, and then because I think because of async storage and all, they were able to give me access to the request just by like calling the
[03:40:25]  function. I think we have to bet on async storage. Uh, I, I did some, I did some research and the answer I got was basically everybody expects
[03:40:36]  to have an implementation of it in the next, like in the next, by the time I get back from my conferences, everyone will have an async storage thing. Cloud
[03:40:45] flare already does. Um, obviously, um, uh, like I talked to Luca, he's working on Dino, obviously node already has it. I think this
[03:40:56]  is probably, but you're right. The, the, the, this is, this is, this is, this is like one of those API pieces where it's
[03:41:03]  like forcing it kind of got us where we need to be. Um, no, I, I, you know, I, I usually didn't have anything to complain about
[03:41:13]  decorators either. So I think I both, I'm good with both because both of them give me the same thing, right? Kind of like ID, I can write
[03:41:19]  a function and then use it as a function everywhere else. And then it does all these shenanigans for me. Um, and I love that. Um, yeah,
[03:41:30]  I mean, I have, I, you know, I do, sometimes I end up do appreciating like, you know, having the file divisions where like, I
[03:41:37]  do, I know I don't have to debug a certain class of issues, even though that has happened with me because once a used client went from the top of the file
[03:41:46]  to like just below one import or something because of it, you know, and now my client things are being imported on the server. Like some things I didn't want
[03:41:54]  to be imported on the server or something was happening. This is the funny thing on that side. I think even with these patterns, it can still screw up as, as
[03:42:04]  long as there is an import involved, it, there's potential to pull stuff into the client. People keep on seeing like the inline files and they assume that if they
[03:42:13]  put in a separate file, they solve the problem. It doesn't exactly. It's not guaranteed. Like, yeah, there, there, again, these aren't
[03:42:25]  always common anyway, but where it does happen, that's not what's going to save you. It is interesting that react or next is looking at patterns where you supposedly always
[03:42:34]  pass through the components because that approach does prevent, um, stuff from getting pulled into the client. It's way less error prone. Yeah. So the passing through client
[03:42:47]  components as props might be ultimately, um, the way to avoid that. But again, you have this problem because then that there's no way to make that pattern universal with
[03:43:00] , uh, with, um, like a single page app type thing. You, like, you have to start on the server, um, mentally in order to actually
[03:43:09]  get that to work. I think, I mean, maybe there's a way to solve that, but I'm like, it's, it's interesting. If there's
[03:43:17]  a way to solve that, then I think that's the last strike against, against, uh, um, that pattern. It's just, it's just awkward when
[03:43:28]  you're trying to accommodate, um, you know, situations, which is like, don't have a backend and where you don't want to rely on static gen. So
[03:43:36]  you have a dynamic app, no backend. Uh, and then it has to be client side. Like, I mean, right. But then like, and like,
[03:43:47]  or like, yeah, which is, yeah, it's, it's interesting. Once you go there, then like, you kind of want the dollars, the, like
[03:43:53] , you kind of want the inlining stuff again. Like it's like, yeah, it's, it's interesting. Okay. I'm trying to think if I have
[03:43:58]  anything else on my list here. What else, what else is separate? We talked about the router. We talked directives, directives. Cause yeah, I, I
[03:44:06] 've been, I'm obviously very interested in the learnings in this, in this process. Anything else you have that you're thinking to kill? I mean the mutation
[03:44:12]  story, right? Like I think, I feel like we had already gone very, very optimal with solid start in terms of like mutating things. Like, you know,
[03:44:21]  you try to do all the, like the DX was pretty good. And I think this is the same level kind of, I wouldn't say it's really much better.
[03:44:30]  We haven't explored how to do like optimistic updates and things yet, but I'm assuming it will be very similar to like a use action hook or something like, um
[03:44:39] , I, I don't know if you want to restrict to like, you know, one form being submitted globally at the same time, even though kind of that's how
[03:44:49]  the browser works, but on a, on a dynamic user interface, people could be clicking, clicking delete on like five different things one after the other. Right. So that
[03:44:59] 's five different submissions that are going on at the same time. Yeah. Yeah. Yeah. That's why solid starts implementation is more complicated, but like I could easily
[03:45:06] , like we could take that implementation solid start and just have like an RSC version of it so that it returns back on the same path. I think, I think our
[03:45:16]  mutation story is still one of the strongest. Um, like, I agree. I, I know we had already for islands router, we implemented that like the notes demo
[03:45:25]  had made. When you saved a note, you would get back our islands output. Oh, really? You did that in one trip. Yeah. See, I don't
[03:45:32]  even, I don't even know the stuff. I need you to come back and like finish merging everything in. Cause so we already had single trip mutations. So the only
[03:45:40]  thing, the only thing we're actually, biggest thing that we're missing is that we do a bunch of wasted work in that, like we re-render the client
[03:45:50]  components and that can be bugging. Otherwise we had everything. Actually, yeah, so this is the, yeah, that's the demo, but yeah, um, I
[03:45:58] 'm going to, I'm going to play with it. I'm going to play with it a second. Cause I, I forgot about this demo. Uh, I mean
[03:46:05] , this is one thing that I would like, you know, uh, Dan has this battle on Twitter where like, he doesn't want other solutions to get confused with
[03:46:15]  RSCs. Yeah. And I think like, I don't know if he's given enough of a time to look at our solution, but I think like ours is
[03:46:21]  RSC, like everything that he had asked for, I should check off. Yeah. Do you, do you want to pull, do, should we pull up that list
[03:46:28]  for a second? Cause I think you're right. I think we have that. Yeah. No, we can, we can do that after this thing. Just,
[03:46:32]  yeah. I just want to remember that what I'm saying, if it's correct or not. Yeah. So network tab. Network tab. Okay. So I'm in
[03:46:41]  that edit mode and I'm going to change the title to hi or something. Okay. Done. Okay. Is saving one call. No one call only that's done.
[03:46:51]  Yeah. And then it updated in both places. And as for you, people know, this is a server component that updated and this was a client component where we did the
[03:47:00]  editing and one call. Yeah. So let's see what that one call looks is saving. Yeah. The headers request is the, what, what was the payload?
[03:47:08]  Um, uh, extra X solid mutation and notes, edit, mutation, and then payload is a note ID with the new title and body. So this is a post and
[03:47:20]  this is data. Yeah. So it's form data. Yeah. And then the, the response is the new solid output. Yeah. So damn it, man. I
[03:47:29]  forgot, I forgot about this. So we actually implemented, uh, mutations, uh, back in the back too. So we, we, yeah. Okay. So
[03:47:37]  this actually worked, I think you're right. I think. Everything that the original react server components demo had, all of it we had here. Saving, refreshing everything
[03:47:46] . We're only, that's funny. Okay. I, I need to think about this more because we're, we're actually only a few things away from actually,
[03:47:54]  it was, it's the API problem that I had, right. The bling versus the directives. If we make that decision, we could actually release our,
[03:48:02]  uh, server components and solid. That's interesting. Okay. Yeah. Like it's, it's not the most optimal, but like we've already seen that the react
[03:48:10]  versions are not the most optimal right now either. So like, yeah, I mean, I do want to take out that list. Yeah. Because I, I think I
[03:48:17]  was, yeah, I kind of pointed out, I think that if he looked at the solid start solution, we'd be able to get. Yeah. Yeah. Yeah
[03:48:23] . And I, I, I was actually going to talk about that on this week in JavaScript, but we can do it now. Um, yeah, let's just pull
[03:48:32]  up the list. Um, bookmarks. Yeah. I didn't think this was a hard test. Are you talking about, are you, were you talking about this
[03:48:42]  one or were you talking about a different one? I was talking about this list. Yeah. I wasn't talking about this one. I was talking about the one where he
[03:48:49] 's like, he goes one, two, three, four, like if your app doesn't do this, it's not RSE for this, it's not RSE
[03:48:54] . Um, yeah. He retweeted, he retweeted our stream today. Oh wow. Nice. I hope he's watching. All right. Um,
[03:49:12]  the checklist is in the comments. Oh, okay. So for this, the actual same, same one, uh, cause I, I did the quiz, did the
[03:49:24]  quiz. These are the answers. Was it in the, was it in the comments? I mean, I might be able to find it if I like, Dan likes to
[03:49:42]  get deep. Wait, I had commented on it, you know what I mean? Like the problem is find which thread that, that, that, that, that we
[03:49:53]  went through my link above Jazzy. Okay. Where am I not seeing it? Jazzy. Okay. There it is. Got it. Sorry. I have to go
[03:50:00]  between YouTube and Twitch sometimes to, to, to, to get this. Yeah. So we'll, we'll talk about the quiz maybe in this week in JavaScript.
[03:50:10]  Okay. If it doesn't let you refresh the server content, it doesn't meet the RFC bar. Okay. That's easy. We definitely passed that one. Yeah
[03:50:20] . Uh, if, if we fetching this tree triggers multiple client requests, it doesn't yet. No, we have a continuous tree, right? We don't let
[03:50:27]  you put server components and client components. If server and client components are written with different technologies, it doesn't meet the RFC bar. Uh, so again, that
[03:50:35] 's Astro, but no, ours is the same technology. Um, is there more here? I mean, that, that was a pretty easy, that was like a
[03:50:47]  pretty easy checklist. No, I think there might be more. Yeah. No. Was there nothing more? Yeah. He wanted us, he wanted us to check the
[03:50:58]  checklist and the answer is I don't know. I, I thought I remember this was more. It's hard to have checked all the check folks, including me fetching
[03:51:12]  only part of the tree with a nested router. I said, avoid client renders though with multiple components. It's like server phones only as long as you keep the
[03:51:19]  tree intact, it will render all the terms and colors for the little thing. Okay. He didn't like that one. I know he's in disbelief that like
[03:51:31] , literally you can get to the same place different ways. I think that was one thing I wanted to make sure I can communicate. That's why, that's what,
[03:51:37]  that's why you gotta, we gotta, uh, I know the Astro thing where once the year come back and we've got to finish working on this because I think
[03:51:44] , I think they need to, to, to, to realize that there's a few ways to crack this egg, you know, so to speak. Um, um
[03:51:51] , yeah, what do we got here? Yeah. So this, I think this is a good bar to set here to be fair, because he basically wanted to separate it
[03:52:03]  from MPA and islands. But the thing is, you have to understand is like, I'm going to still go that one of the approaches to this is MPA plus
[03:52:11] . I think our approach right now has issues, so to speak, but I also know that like, like, like depending on the cache for example is, is,
[03:52:25]  could be a smell as well. So, I mean, we have more work to do. It's not production ready, but I did not realize, oh man,
[03:52:32]  that note demo makes me, uh, pretty happy that we actually have, did, okay, fine. To do this, did you use create server action? Like, did
[03:52:39]  you actually use our, our, oh man, that's beautiful. Yeah. So I made it work for like all environments. So I think, uh, it does the
[03:52:49]  loop and all the back in the background. Oh man, this, this is, this is awesome. Sorry. I sometimes miss some of the minor details of like the
[03:52:57]  demos you show. I'm like, I was like, I was like, that's really cool. But like, I think I did know that. I think when I
[03:53:03]  saw it, I was excited, but I like, it was so long ago. Like you made this demo back in like October. Um, right. Yeah. I just
[03:53:11] , I just can't keep up. I like too much stuff to keep up on that. I like miss, like when you like break things open and it's like six
[03:53:18]  months later, it's like, oh yeah, we've been doing it. Like we've been doing this for like a year now. Like, sorry guys. Yeah
[03:53:23] . I think this one was a crazy time. And I was like, I have to make the same demo all using solid start stuff. And this was all in user land
[03:53:31] . Like this wasn't, this didn't require any change from you and solid and all of this was implemented in like solid start land. Uh, so the whole server components
[03:53:40]  thing was implemented in user land. I think that's, that's kind of an awesome thing in its own. Like, yeah. If you can simplify the model, I
[03:53:48]  feel like because there's a tension right now to match reacts implementation. And I feel like if we don't, and we do a couple things differently, we can unlock
[03:53:57]  a whole different zone. Like I actually didn't even check this one. I mean, this one has the giant client component. Let's go back to the, we're
[03:54:05]  not editing right now. Yeah. We're not editing. We're not editing right now. I'm just, I'm just curious. And this one might be big.
[03:54:12]  Like, I don't even know if like, yeah, that's the, well, actually I need to go into an incognito window to see this new inc
[03:54:19] ognito window because I have like plugins and stuff. Just, just, I just want to remember how big this demo is. Yeah. Yeah. You're right. This
[03:54:27]  one is big. It's 20 kilobytes. No, because I have like dark mode and I don't know what all I have in this. Yeah. This
[03:54:33]  is, this is absolutely huge at 20 kilobytes. Sorry. I'm, I'm being a little bit facetious. Um, um, and actually I went
[03:54:41]  into the error boundary component and I made it way smaller because you were doing all these like object, like style tags for static styles. And it was like, it was
[03:54:57]  causing it to like go in and basically go, okay, element dot style equals this element dot set property. And I changed them to strings and they all inlined in the
[03:55:07]  template. And then the temp. Yeah. It's just like, it's very small. Yeah. Makes sense. Makes sense. I added, it inspired me to
[03:55:16]  add template minification of styles and CSS, a feature that it was in Svelte and that I forgot to even announce it to people. We actually minif, if
[03:55:25]  you put a bunch of styles and multiline and induce like stuff, we actually minimize, we actually, uh, um, minify CSS and style, uh, in
[03:55:34]  the JSX. That's awesome. That's awesome. Yeah. So yeah, but see what happens here is you go to edit and then you load the 15 kil
[03:55:43] obyte editor editor, right in the code. So like, that's, that's the, that's the trick to it. But yeah, no, I, the
[03:55:52]  editor loads the, the editor loads the client side markdown renderer also. If you go right. Yeah, exactly. Yeah. I've got to refresh to show it
[03:56:00]  again. Yeah. Yeah, yeah, exactly. It's part of the bundle. It's part of like probably the, uh, just go edit. Yeah. Like
[03:56:08]  this is going to have the note editor. Yeah. It's probably because now if you write here, it's live as it like updates the preview. Like, so if
[03:56:15]  you change the stuff here, it's, Oh yeah. Cause you, you need like, it's like this. Yeah. So now you need a client side. So
[03:56:22]  now you need a client side markdown render, but on the previous page, the markdown render was never called on the client because everything was done on the server.
[03:56:29]  Right. Right. So it, oh, right, right. So, so if you, if you go, yeah, yeah, yeah, yeah, yeah, yeah,
[03:56:36]  exactly. So this is, this is, this is, this is markdown. This is a proper markdown renderer. Right. And so it's using markdown
[03:56:43]  rate or something. And when you go done. Yeah. Uh, right now it still has it on the page, but if you refresh this, that markdown editor
[03:56:50] , that markdown editor isn't, that never comes here. Exactly. Even the renderer doesn't show up here because it's renders on the server and sends it
[03:56:59]  like just HTML. Yeah. Yeah. This is, yeah, this is like typical kind of, yeah, no, I, this is, this is, this is great
[03:57:08]  work, Nikhil. I, I mean, I didn't really, we're just optimization away. I forgot about this. This is actually bugs me that I forgot
[03:57:15]  about this, but very, very, very cool. Yeah. I mean, yeah. Yeah. 20 kilobytes for this, which is, which is cool. I
[03:57:26]  don't, I don't want to guess what the react next version is. We'll just, we'll just move on. Um, okay. So we got a couple
[03:57:35]  of questions in coming from chat. I, I already missed one of the parasocial ones, um, which got reposted again. Have you seen anything cool
[03:57:43]  in react you missed in solid after playing? You seen anything cool in react you missed in solid after playing with this? Yeah. Is there any cool react features that you saw
[03:57:56]  that you like, what, uh, you, are you muted? You're muted. Am I echoing or is it okay? Okay. Okay. Okay. Because
[03:58:09]  my AirPods went down again. Um, but yeah, no, so I'm saying like, there's nothing that this exercise itself revealed too much, but there's the main
[03:58:18]  problems I've always had on the solid versus react front, which for those things that like react is firstly, like the things that your props are like a plane object that you
[03:58:27]  can always inspect. And no rerenders are inspectable as part of the component. And then I think the other part is which I realized while doing this is that it
[03:58:36]  just react feels very safe in the sense that you can do anything. And it's like, I have, I never have to think about how things are wired. Like,
[03:58:47]  I mean, there's both a kind of a relief from that, but I also, because I've come from the solid world, I'm always worrying about how things
[03:58:55]  are wired, but then it's like, what do I even do? Like, I just have to still use, like, it's the same pattern that I can do
[03:59:01]  this. I either want to include use callbacks and all, or I don't, apart from that, everything just wires up top down. And I mean, it's
[03:59:10] , I just find it very refreshing whenever, like, uh, I just pass props and then I don't have, you know, I don't have to think about
[03:59:16]  a lot of things and how they're winding up. And so there's like, modes I am in where I really enjoy that. Like when I'm trying to do something
[03:59:28]  and I don't want to think about my props or like, I just take a props object, serialize it or do some, do random things with it. Like,
[03:59:36]  Yeah. I think it's funny when you go kind of back and forth between the two extremes, because like on one side, you're like, you like, you
[03:59:43] 're, you're like using solid and you're like, okay, I have to be aware of data flow in my app. Like I have this data, it updates,
[03:59:49]  I have complete control over it. Um, did I, am I doing the right thing here? Like, did I, you know, this is why the tooling has recently
[03:59:59]  has been like a God save on a lot of these pieces, but you're like, okay, is my stuff like wired up? But, and then you go to
[04:00:06]  react and you're like, oh, I don't have to worry about it. It just works. And then you build up your react app and you're just like,
[04:00:12]  you get to that point where you're like, why is this keep on re-rendering? And then you're like, okay, damn it. This is so tiring
[04:00:17]  to kind of go through this and debug and figure out what's going on back to solid. Oh yeah. That's so easy. I just wired up. It just worked
[04:00:22] . I think I had gone from react to solid when I started building games, right. And when I needed things to be fast and I couldn't afford any re-
[04:00:32] renders in the 3d renderer, that's when I found solid. And that's when I was like, okay, I'm, I want to think about where
[04:00:38]  the data flows so that I can control it. I can figure out how to control the re-renders or how to control when things re-execute. But
[04:00:45]  whenever, whenever I build this like app stuff where like it, it's just, it's not a concern or like it would not be a concern for like maybe a
[04:00:53]  large time. I enjoy like not having to think about it as well. Like, right. So my, my follow-up question on that though, is now we're
[04:01:05]  in RSC world. Yeah. Where, where the only places that you have to worry about that are the interactive parts. Like, I wonder how much that changes the
[04:01:17]  math. If you get to a point where you're like, like the server stuff in the RSCs is like all kind of like, just do the stuff. Don
[04:01:24] 't have to worry how it wires. It just runs. And then you, you only have to worry about it in the places you have to worry about it. Yeah
[04:01:31] . I wonder, I wonder. I think that remember when you're discussing that when you see that with react server components, especially when you've reduced the client bundle a lot
[04:01:41] . Now it, it gets exposed to you that react is like almost a hundred kilobytes. And with solid like it, when you're, when you're the same
[04:01:50]  app is coming down to like 10, 15, 20 kilobytes, that difference feels stark, right? Like it, um, it, it's there where like
[04:02:00] , when you're actually committing to the fact that you want a very small amount of client components to go and you want it to be very quick and snappy, I think
[04:02:08]  that it makes sense that you would want the faster runtime, the faster, the smaller runtime, and you would be okay. Like, you know, making those small, this
[04:02:18]  is a small surface area. And it's better to think about that because that's the kind of execution that's affecting the client the most, which is what's happening
[04:02:25]  at that, uh, on transitions, what's happening on navigation, things like that, what's happening on when you click a button. Uh, so I definitely see like
[04:02:35]  how a new environment where, um, you don't have to do a lot of client state wiring yourself because things flow top down, like because of the request response model,
[04:02:47]  a lot of it is uninteractive anyway. And then the interactive parts, you can deliberately model them, uh, in a super like efficiently wired of it. I,
[04:02:58]  I definitely see value in that, but, uh, but I'll tell you that, uh, that argument Dan makes about how like in react, somehow it's, uh
[04:03:08] , in react, you can read every, every value is reactive, right? Like every prop or every instance, every variable you observe can be put inside a use effect
[04:03:18]  dependency and you can just start reacting to it. Or like you, when you pass it down, it'll make sure the prop date. And so they're like not having
[04:03:26]  to think about it. So the actual state you find yourself isn't not having to think about reactivity at all. Or like, obviously when effects come in, that
[04:03:35] 's when the activity is involved, but I'm saying, uh, apart from effects. Yes. So this guy has a good point apart from effects. I think everything is
[04:03:43]  really simple in reality, but I do agree that as soon as effects start coming into the picture, having not, not having conditional flow, like, you know, easy conditional
[04:03:52]  flow there. Like when you have to create components, when you have to create conditional flow and all those things are annoying. Like having to create new components for a bunch
[04:04:01]  of simple things is annoying. Um, having to create a component to wrap a suspense boundary or error boundary. That's annoying. Like, so I do realize when you see
[04:04:11] , you said like, you know, too much component componentization, but I guess like, I guess that's what they're choosing as their unit, right? Like their
[04:04:19]  unit of execution. Right. And so once you choose that as a unit of execution, I think those kinds of implications come along with it. And then obviously then you
[04:04:29]  still have the advantages of like all control flow is reactive, right? If else is reactive for loops are reactive, you know, like, because the component will just be rendered
[04:04:39] . So every control flow by default becomes reactive. Whereas for us, we have to create those components that are especially reactive for those control flows, right? Or at least
[04:04:50]  put it in the JSX. So it plays it's analyzable. It's about the scope of the compiler, I guess, because even yeah. No, no
[04:04:58] . So, uh, I mean, you know, I have like, my heart is almost in both cabs. Like, because I've been a react user for four
[04:05:05] , five years before, like, solid team. So I, I see the value in both. I, I mean, my love for solid is actually a lot of it
[04:05:13]  comes from my love for react because I, I could see it as like an improvement on a lot of things that troubled me about react when I used to re use it
[04:05:21]  for performance related things. And so I saw the volume, but yeah, I mean, I always feel like all of us are trying to put the pressure on the solid side
[04:05:30]  to improve the DX continuously and continuously so that, uh, so that you can get to the same kind of ex like the feeling you have and you're using the act
[04:05:41]  of that safety net. I feel like it's, it's not a lot of developers want that. So it's not that every developers wants to go like, you know
[04:05:50] , guns blazing to their app and be like, you know, I'm going to figure out exactly what's going to happen. Some people just want a big ass
[04:05:57]  shield and just like keep walking through the dangers and they'll eventually figure out like, and I mean, the, the, the difference is in how fast you can build things
[04:06:06] . And I mean, I, I still feel like I can build things in react faster. And, uh, I see the, and I mean, because the honest part
[04:06:18]  is that I am much more experienced than react, even though being on the salty for a year, I've used the act for five years before that. So it still
[04:06:25] , uh, comes naturally to me. Right. So like if this, um, that's not a thing, but I think, do you think this simplified actually model applies
[04:06:35]  primarily to react or all of VDOM frameworks? I haven't used any other VDOM framework, but, um, I mean, the, the things I love
[04:06:44]  about react is actually the fact that it all lives in JavaScript. I don't have like, so the other VDOM frameworks, I guess, are view. Maybe
[04:06:54]  it's, I don't know, it's well, there's a VDOM. No, it's not. It's, it's, it's gonna be
[04:06:57] , I mean, like it's, it's probably like, what are the other VDOM frameworks? Inferno, preact, which are react clones view.
[04:07:05]  Um, the, the other ones have faded away mithril. Um, like, I mean, there's smaller ones, right? Like more recent ones, like
[04:07:14]  give buddy Aiden a shout out with million and like, you know, but even then, like there's this react thing. Yeah. I, it's interesting. Uh
[04:07:22] , yeah. What are the other VDOM frameworks? Am I missing one? That's. I mean, the simplified execution model, if you talk about the safety net
[04:07:30] , I think the safety net is a feature of the VDOM, right? Because the virtualization of the DOM. So it is a safety net. You can like
[04:07:38]  bash it as much as you want. And it controls how much it bashes like the underlying actual platform. And so if you're talking about the safety net, yeah
[04:07:46] , that that would probably be all VDOM frameworks. The, I mean, I don't know the, there's new stuff with suspense and error boundary, these kinds
[04:07:53]  of innovations that obviously we love at suspect at solid. I mean, these are, I think still unique to react. I don't know if everybody else has implemented. No
[04:08:01] , they haven't, they haven't done transitions or some of the more advanced stuff, like it is kind of extraordinary how like nice. Yeah. Yeah. Susp
[04:08:10] ense and transitions are people still just don't get how powerful or good that is. Um, right. I, I think it's like, it's literally the difference between
[04:08:19]  like having to like, let's say you're doing async await and you had to everywhere you awaited, you have to also like do something with the error. Like
[04:08:27]  obviously very strict languages make you do that, like rust and all, but not the languages we love because you can just do try, catch somewhere top level. You can
[04:08:35]  be like, whatever happens. Normally I want to do the same thing, be like something wrong happened, show the error message, let the client act. That's the model
[04:08:44]  they brought to UI, right? Like when you can have a bunch of components, any of them could render, any of them could throw an error, any of them could
[04:08:50]  be problematic, but you normally know that there's a whole scope inside which you expect things to work. And if they don't work, you need to treat them all kind
[04:08:59]  of the same, like, you know, just show a box there. And so those kinds of, I mean, that's the thing I comment react about. Like
[04:09:06]  it's actually taking, it's actually building these new patterns in UI, which, uh, which we need to model, right? Like these are things we need to model
[04:09:14]  all the time and we build abstractions around them. And so like, I think that's the job of the framework, right? Like things that are modeled very frequently
[04:09:22]  can be like need to be taken away and like just made part of how, you know, how it should work naturally. Uh, and like, I think this is,
[04:09:30]  I've, I've heard kind of, uh, talks from Sebastian and where he talks about how, like they always prefer hacks before, like they have to like leverage,
[04:09:39]  like make APIs for things because it's like things which happen frequent enough deserve APIs, but everything else you need to be able to just like, you know, hack together
[04:09:48] . And so then you have to have this both kind of mentality where frequent things you bring into the API and make them super easy to do, super convenient to do. And
[04:09:57]  then border cases, edge cases, like let your API not get too expansive because of that. Like let it just let people have like easy ways to just do those things
[04:10:09] . Yeah. Why did we name mutations to mutations? I think because of GraphQL. So that goes to GraphQL, I think. Yeah. Yeah. That makes a
[04:10:19]  lot of sense. Uh, what do I got here? Uh, did you, there's another question that I imagine there's a few of these right now. I think
[04:10:25]  it's a little rough, right? If you could change the RSC API, were there any places that you're like, Hey, can I, I mean,
[04:10:33]  I will say it's incredibly well thought of, like, I will, okay. Doesn't feel as edgy as you'd like, or kind of as rough as you
[04:10:42] 'd assume. Like, um, I think they almost have the end to end story that like, it feels like you were writing one app. It feels like you're not
[04:10:54]  even using a framework when you're writing the app because like the framework provides almost nothing, like except a link tag, a form tag, and a use router hook.
[04:11:05]  The framework is kind of non-existent. Like, yeah, like the file system routing, I'll not call that the framework. Like that's just how you,
[04:11:14]  you think of your app anyway. And so if they have managed to take all the framework specific parts out of the fully react model, where you just use react APIs for
[04:11:27]  the whole thing, you use children, you use props, uh, uh, for like your many, when you, when you have two slots, you just pass them as
[04:11:36]  props in the routing thing. You know, if you have that, they have those parallel routes and things like that, just pass them as props. Um, you have suspense
[04:11:42] , you have error boundaries, you have async await. Um, I mean, I think the, the thing that I would actually want to change if possible is being
[04:11:52]  able to put suspense boundaries and error boundaries, like close, like inside the components. That's the one part. I think it would, it would enhance this experience a lot
[04:12:03]  because right now there is this like mismatch between when you, when you think you need to add a suspense boundary and now you need to figure out where to add it.
[04:12:11]  Yeah, where all this component is used or things like that. Or make your own wrapper, make your own wrapper. Right. So I think it's kind of,
[04:12:22]  it doesn't meet the needs like the locality needs that you would have with something like this. Like obviously you can place it far away just like try catch. Yeah.
[04:12:34]  But you need to be able to place it close by also, right? Like when you want to encapsulate it in one unit. It's so funny. I didn't
[04:12:39]  actually realize this was the implication of reacts design, um, until they introduced the async components. Like it didn't occur to me that this was such a thing.
[04:12:47]  We'd been using these patterns in solid and we just like, Oh yeah, fetch data here, suspense here. Okay. Like we didn't even think about it. And
[04:12:53]  this is actually like a really weird ergonomic thing, especially like when designing the router and like top level pages and it's, I mean, maybe this is on their do
[04:13:02] cket eventually for stuff like react, forget like for the compilation. Yeah. I mean, no, but their execution model doesn't support it. No, not really.
[04:13:13]  It means that the body of the function is going to throw. So you need to put it outside the board, like your body. Yeah. Right. So Yeah. Yeah
[04:13:25] . Side note. Do you have any opinions on react forget? Are you excited for this compiler future? It's an interesting thing for me because it actually, sorry,
[04:13:34]  sorry to interject you like one of the things between react and solid that I appreciated this time was being able to put debugger, like, you know, the debugger in
[04:13:42]  the blackboard. I'm able to see every time what the new props are and you can put in effects in solid, but like, you know, if you put it
[04:13:50]  in the JSX, it's like, because after it's compiled, it's executing differently from like a top down execution. Right. Yeah. So that part,
[04:14:00]  like, I'm worried react forget is going to screw that up where like now it's going to become, again, it's going to be like an execution and not transparent
[04:14:11] . Right. And so not excited about that, but if they can like, you know, make it super performant and I don't have to think about it.
[04:14:20]  Well, see, the funny thing is to me is I think it's more likely that someone compiles to a reactive target. I mean, we've seen this with Dom
[04:14:28]  Ganaway's work and offer the same DX experience, then this making react more performant than something that's reactive like that. Do you know what I mean?
[04:14:36]  Like it, in a sense, if, if, if this became the common target, like it would just be another place where a reactive framework was faster than react. You
[04:14:49]  know what I mean? Like, except you now have removed the DX concern and now like, like they're actually on par. I think it's interesting. They might be
[04:14:58]  considering signals for the implementation, right? Yeah, yeah, yeah, exactly. It's funny because we all have our different levels of comfort. Like, you're right
[04:15:07] . That transparency being lost is a concern to me because I think it's even more like, you're right. The effects that when you're like, oh, in solid
[04:15:16] , I have to like, think about where these blocks execute, but you don't even get to see the blocks. Like it's, it's going to, it's
[04:15:27]  going to be interesting. Um, but yeah, that's all right. Any more questions for Nikhil? Otherwise, you know, we can, we can let him
[04:15:35]  go to sleep. It's like 2:00 AM or something. And, uh, I can just jump onto this week in JavaScript. Um, kind of wrap up here
[04:15:43] , I would have stuck around, but I think I'll enjoy relaxing and listening to it. Yeah. Just like lying down on my bed. Yeah. Yeah. No,
[04:15:53]  it's a marathon. It's not as you've been on for more than four hours now. So, yeah, I mean, I have two intentions, right?
[04:16:00]  I, I want to have the longest one and be the most frequent. So whenever that's going to change, I'm going to try to come. Well, I mean
[04:16:07] , keep on working on these new cutting edge technologies, you will, and, and keep on working on solid related material. You also will, both of those will get,
[04:16:15]  will get you, you just got to kind of like, uh, what's the term? Like the Intel processor chips, like the tick tock process. You just
[04:16:21]  got to kind of like swap back and forth between it. Um, so yeah, uh, I, I'm, I'm looking, Oh, you know what I didn
[04:16:29] 't get to do. I want to do one more thing while you're on stream. Um, but it's, it's fine. Uh, I mean, we don
[04:16:34] 't, I'm not, just cause we, we, we, we hadn't talked about this much at all. I, I wanted to actually, uh, want
[04:16:43]  to, I wanted to do this. I don't know if, uh, remind me later. Still, let me do this. Um, have you, have you seen
[04:16:54]  what I've been working on? Speaker 1: I've seen like, you've just, you're putting everything into Astro and, uh, I don't know what
[04:17:01]  all your track eventually. Speaker 1: Did I not push the branch? This is so, oh no, I'm on solid. I'm like, what am I
[04:17:08]  doing here? I'm like, do, do, do, do, do, do, do, do, do. This is so out of date. The most dangerous
[04:17:14]  thing about, um, updating this one is this is my demo computer. So it's like solid start stops working. Um, you know, now I've, I've
[04:17:22] , I've, I've done it. Let's, let's go Astro, uh, track. Uh, it's cause I have is it's cause all
[04:17:33]  my demos that I, that I do here. It's funny. It's not actually showing that I have. Oh here. No, it's not actually showing that I
[04:17:41]  have any man. This has been so long here. It doesn't think I have get, what the, like what the hell is going on here? Okay. I bet
[04:17:54]  you this has been open for so long. Okay. Let me, um, let me just close down VS code completely, completely, completely kill VS code. But I
[04:18:06] , I, I just wanted to, to very quickly show you what, what I've been working on, show the people in stream what I've been working on. Um
[04:18:14] , just before we jump. I think like, I want to address, I think Michael Rawlings was here and he is trolling us, kind of saying stop doing five
[04:18:25]  hours streams and just release solid start beta. And I think, uh, I think that's a fair criticism. Uh, I think, yeah, I, obviously there
[04:18:35]  are reasons where like, we just don't feel like that API might survive, like the test of time of even a year or two. So that's kind of a poor
[04:18:45]  state to like stabilize things in and then just like kind of switch them up. And we were experimenting like right. When we had thought about going to beta, like all these
[04:18:54]  new ideas came up and all of them were so compelling and made the experience so much better than whatever we were going to ship back then. That it made sense that I
[04:19:02]  think solid start is usable as is like for a bunch of people, obviously there's a lot of bugs. Yeah. I'm, but I mean, I mean,
[04:19:10]  there are points on it, right? Like you can build a whole app and ship it and be in production. I think there are production apps with it. Post on news
[04:19:18] . Have you, have you seen that? Have you seen this yet? Sorry. Post on news. I mean, from the site that has this weird flight, they
[04:19:28]  have to go to Amazon, which is why that is brutal. But, uh, this is, uh, this is a solid start application. This is, this is,
[04:19:37]  you know, sorry, it feels really snappy. No. Yeah. It's not, it's not bad. It's there. There's, there's some
[04:19:47]  stuff. I think, I think their, their article pages are a little bit better than their, uh, than their, their feed pages. Yeah. See the, the
[04:19:55]  difference between the article pages reload, the feed page has to go to freaking AWS amplify. Right. And it's a little bit this, but yeah, I don't know
[04:20:05] . Maybe some preloading stuff, but yeah, but yeah, this site is like a, it's kind of like a Twitter essentially. Um, and they have
[04:20:15]  something like a, I think a million signed up users, um, built on solid start. Yeah. So wait a million. Yeah. I, the last time I checked
[04:20:28] , they had 800,000. Um, and wow. I had no idea. Yeah. So yeah. Anyways. Yeah. Uh, just a side note, your
[04:20:41]  work, the work we've been doing has, has, you know, has some, you know, I don't know if it's how live it is. They need
[04:20:48]  to kind of push it, but like, this is just signed up users. I don't know how, what their active users are, but I can explore the newsfeed
[04:20:55] , you know, to do, you know, it's, it's, it's, it's like Twitter. There's no tech community on here yet, but
[04:21:02]  you know, yeah. Yeah. I mean, so the point being like, okay, so as, um, as long as you're okay using like this, the now
[04:21:11]  old school SSR, SPA apps, you know, solid status. It's funny. Yeah. I mean, when you say old school, it's that Svel
[04:21:22] te kit, that's next, uh, 12 outside the app, like next outside the app directory. That's remix, but they're all old school, right?
[04:21:30]  I just think I think, yeah. Yeah. But yeah, what I want to, what I want to show here. Um, I don't even know why I pulled
[04:21:41]  up the, the repo here. We could like, uh, you know what, let's just, let's just live wing it here. Let's, I'm
[04:21:48]  going to go, I'm going to make a new window here. Uh, sorry. I don't need it to be the full screen. Let's make a new terminal
[04:21:55]  and I'm just going to go CD dot, dot, dot CD examples or whatever. Okay. And then I'm going to go MPM init, um, solid at
[04:22:05]  beta. Okay. Um, do any, yeah, sure. Let's do this. Oh, why this is this, this, this, this, this, oh
[04:22:17] , right. Cause I, I, I always forget to rebuild it. Although this, whatever doesn't, it doesn't matter. I watch this not work cause it should
[04:22:26]  be alpha three, not alpha one, but whatever. What do we want to call our, our app? Um, that's fine. Let's call it my app.
[04:22:34]  Uh, what should we do bear hacker news to do? Do we care? It doesn't really matter. Yeah. Let's do the two. I mean, I
[04:22:42]  don't know if there's my vote. Uh, there is no Prisma in this one. It's cheating. Oh, uh, suicide rendering. Yes. Type script
[04:22:49] . Yes. Hopefully this did what we wanted it to. And then if I go file new window open and what did I call it? My app. Yeah. Examples
[04:23:05] . My app. Uh, yeah, I, I, I hopefully trust the authors. We're going to end up with a project here that, um, has a TS
[04:23:19]  config. It has the Astro config. Okay. Uh, source folder, um, that has a couple of things in here. There's the, I think this
[04:23:30]  example has some CSS at the root, the root, uh, thing. And you know what we have to, we have to install here, which is why TypeScript is
[04:23:38]  complaining, but we have a routes folder with just an index route, nothing too fancy in it with a, with a progressive enhanced forms and to do app. Basically my
[04:23:48]  point is nothing except for this Astro dot config, um, is, is, is different really. Uh, the, the, the package.json has some new
[04:23:59]  dependencies. um and if if this all works there's some warnings in dev i should be able to just go pnp dev and ignore all those warnings okay let's
[04:24:10]  ignore all the warnings and what we should be seeing here is a to-do app with optimistic updates so if i go hello purple before blue this and for anyone knows this
[04:24:29]  is using server functions um i've tried this in server components see if you can get the same experience yeah uh but yeah i just yeah this is all astro based now yeah
[04:24:44]  this is all astro based um i just wanted to quickly and so we we probably get like the multi deploy like multi adapter deployment for free like they can deploy to any platform
[04:24:56]  any provider other than yeah i managed to actually um uh let me pull this off screen for a second so i can remember it but i actually managed to deploy to netl
[04:25:08] ify um the other day so i got the deployment the deployments to work to uh let me see here i want to go to my netlify.com account and see
[04:25:16]  if i can remember um login with github but not my official netlify account um yeah start astro dot netlify app i think is what i want
[04:25:30]  start astro dot netlify dot app is this right yeah there we go i mean this is just a silly bear example but you know this this deployed using astro
[04:25:47] 's um deployment adapters uh and yeah no i i mean like any changes right for that especially no it's it's i needed to change the whole thing was figuring out how
[04:25:58]  the route manifest works but hot module reloading works um you know all all those kind of pieces work the same way it's basically the solid start experience except it's just
[04:26:09]  using astro's deployment adapters um um i i didn't even bring bling in at this point i've literally just it's just solid start ported over the the
[04:26:20]  funny part about this although i it's not everyone able to move to this right away um oh you know what i i downloaded uh i should have downloaded a different demo i
[04:26:31]  realized the to-do mvc is the only demo that actually doesn't do what i want to show off here actually um i think people um will one of the changes
[04:26:43]  that i had to make here and you you might appreciate um let's let's let's do let's do another one and let's call it uh what do we want to
[04:26:50]  call this one um uh bear astro let's just call it bear astro i'm gonna call bear yes typescript of course um is that no not x reactivity
[04:27:06]  we don't need to look at that yet um let's do it again file open is uh oh i didn't put in examples that's my let me do it here
[04:27:22]  whatever i'll clean it up later um yes i trust the authors um one one cool thing oh i know i can't close it it's because i have full screen over here
[04:27:34]  anyways um where is it did i just close the wrong one or is it open in it no it's here okay um so this is just the bear example okay right we've
[04:27:45]  we've we've all seen this before is pm pm i okay cool so one of the cool things that that i've added as a new feature here is that because
[04:27:57]  we don't control the adapters anymore we have to handle stuff like spa mode and and uh things like uh static generating so i actually went in and made it went to the
[04:28:13]  package json so like right now we're just using the regular node adapter but it could be the netlify adapter it doesn't matter what the adapter is you can
[04:28:22]  go into here and go solid and go pre-render static true and if you do this it acts like the old static adapter so when i go pmpm build what should
[04:28:36]  happen is when i go into our dist folder here and look in the client okay request is not defined oh i did one other thing that people aren't going to be happy
[04:28:47]  about uh mbmi 18. i've set the minimum version of solid start to 18. i'm just not playing with polyfills anymore i'm done 18's l
[04:29:03] ts you know you can stay on point too but what what what this means is that when let's try this again uh when we go into our client output we're going
[04:29:18]  to see our pre-rendered index and 404 html pages and the same thing happens in spawn mode but more so it means that if i don't care about
[04:29:30]  that and i just want to pre-render specific routes like slash for example i'm just going to do it we can do on any adapter you can per url have it
[04:29:45]  just oh nice render the specific pages you want to pre-render versus ones you don't want to pre-render um and then it picks up and becomes a client-
[04:29:55] side navigator thing right yeah yeah yeah exactly yeah this is just this is just like per page uh ssg um so there's new features um yeah this is solid start
[04:30:11]  yeah we i'm the fully react thing we've been doing react uh all for the last four hours i just wanted to kind of show uh off some of the the the
[04:30:20]  cool stuff no this one's really cool like i think this one we've been wanting to do for a while yeah so yeah and and the coolest thing about this is i i
[04:30:30]  mean not the coolest thing but when you go into this repo you know you just gotta love what they kill you're gonna i don't know if you you you wouldn't mind
[04:30:37]  what what happened here the examples look kind of the same i i haven't quite got the test working like this looks the same but let's look in the packages repo um
[04:30:45]  oh do you know what the problem is it's just node modules yeah sorry exactly it looks a little bit more like this um so that's perfect i mean the next stuff you
[04:30:59]  have to maintain yeah so yeah i mean i gotta go patch a couple things start still has like some some like polyfill stuff that like should go into astro but yeah
[04:31:12]  you know what we can do right now last demo on this for you just to kind of put this over the top is let's let's go into our example in bear and
[04:31:24]  go and and to prove that we're honest i'm going to turn off this for a second forget about the pre-render routes for a minute and we're just going
[04:31:35]  to go build standard build right and then we're going to do start okay and then i'm going to go over to our local host window which is not this one i think
[04:31:49]  it's not that one it's this one and what's sorry what's going on here listening on localhost it's like opening it in a different window it's fine
[04:32:05]  yeah okay localhost coming in all right so here is our just bear solid start issue inflation yeah okay so we we've seen this just standard gonna actually know what we're gonna
[04:32:18]  open this in and new incognito window new incognito window and see our typical solid start um am i not minified right now what's going on i must
[04:32:35]  not be minified right now oh no this is minified something weird i guess i gotta look that's huge that's huge that's like this is not something weird is
[04:32:46]  going on because this is not ah damn that's annoying when that happens because like it was perfectly fine when i was testing this earlier but something is not getting something extra is getting
[04:32:59]  pulled in right here because that is absolutely huge um well let's just that was not right right but that's not minified because it's islands oh it's important of
[04:33:16]  course island's true and let's go into our route and make the uh counter component component let's go const counter equals unstable island um what's the api for this
[04:33:32]  again is it uh dynamic import import um i don't have um i don't have uh what do you call it copilot on this machine okay right so let's build
[04:33:49]  islands mode and actually let's let's do more than building islands mode let's add islands router as well so we got the full server component experience um it's probably in the
[04:34:04]  config right yeah yeah yeah sorry yeah sorry uh islands router true yeah i don't know why the bundle is so big i've literally been like you can actually see the output
[04:34:16]  sides yeah all right all right so hopefully this example why is it it's so funny that like it was when i open when i open it when i open it from okay i
[04:34:33]  didn't start it thank you silly me i'm like getting ahead of myself and this will open it on the wrong window but yeah i mean let's pull this in just
[04:34:45]  loading on the page over it not in an incognito window so you're seeing my 15 new incognito window let's do this again sorry yeah exactly we're yeah
[04:35:03]  why something is huge we're getting like nine kilobytes here something something is absolutely huge this big thing is being yeah i mean it's clearly working in terms of the
[04:35:14]  or it's it's about oh right this is something that the solvent islands right i realized we don't handle um uh we don't handle missing routes properly just just an
[04:35:26]  aside i we like like 404 404s don't work properly um so it's easier shown hacker news but the thing is if you look here yeah i don't something
[04:35:37]  something something is going on that's huge but in oh do you know what it is none of this stuff's g-zipped yeah this is this is why i keep on
[04:35:48]  getting choked up the sizes are right they're just not g-zipped so astro's like preview server is not g-zipping basically yeah yeah yeah yeah
[04:35:58]  yeah that's that's why i keep on getting uh yeah this is why i i keep on getting thrown off the stuff is the stuff isn't g-zipped so these
[04:36:06]  numbers are actually right this g-zips to about uh five kilobytes and the other one that was uh how much was it before before i went to islands it
[04:36:16]  was like uh 20 something either that gzips to about um what was it like 11 or 12 kilobytes yeah yeah so anyway uh just wanted to show that it i
[04:36:33] 've got the the biggest things missing in the astro thing right now is i still have the flash of content and there's a lot of like clean up i want to
[04:36:41]  do but we're we're making really good progress and i just hadn't had a chance to show you i need help figuring out how to do the flash of content thing um
[04:36:49]  yeah all this is awesome yeah i think some really neat stuff um okay um thank you for sticking around to humor me to show off the new astros all the start stuff i
[04:37:01]  mean i'm loving it yeah also yeah because i didn't have to do it i'm really thankful that you don't do it uh i wouldn't have been able to
[04:37:09]  get the bandwidth right now with all this going on but um before i leave i just wanted like you know to figure all this out there's a few people who were really helpful
[04:37:21]  and so obviously fate who made rackers had tip he figured out the initial kind of poc of eat react service also i think he deserves incredible kudos obviously daishi who
[04:37:33]  built waku work and uh that is an incredible example of how to use this stuff in a wheat based environment there's some wheat we use there then jacob i
[04:37:42]  think he's he was he was on the remix team or he's on the remix team but he built a bunch of experiments with yes build and rsc and webpack and
[04:37:50]  rsc where the rsc was happening on a node worker and i think that's the that's the way we implement it right now so jacob was helpful there ben
[04:38:00]  ben holmes's stream with dan abramov there that's where i learned how to do the routing because there was no other examples of routing except next js and that
[04:38:09]  stream which kind of unlocked everything for me obviously dan abramov has been answering my questions on twitter and i've seen yeah and everybody else's and so that's been
[04:38:19]  so helpful to like understand what their mentality behind every feature is um kind of the the next js team obviously because i've read so much next year scored in the last two weeks
[04:38:30]  to like figure out how they do like whenever i have a problem i go see how they have done it kind of try to copy it in a simpler way because i don't
[04:38:37]  their stuff is obviously more complicated and sebastian obviously to like bringing up these ideas into the wild like kind of fighting for them implementing them in like this big behemoth
[04:38:49]  of a framework that is very difficult to move um so that's awesome and then obviously astro i copied the versell like i think my thing deploys on versell because
[04:38:59]  it's the only place where we have async local storage but i used astro's kind of a cell adapter to like copied some code from there to figure out how to
[04:39:06]  bundle things obviously ryan florence and michael jackson like i used i mean the license is included in the source code but i used a bunch of react router
[04:39:15]  and remix code to like i my route matching happens is like it's the react routers kind of match path function and like the file system routing is from remix so and then
[04:39:25]  tanner's like type safe routing so shout out to tanner for like exposing that to me and so that's i i could just use this types directly i couldn't even
[04:39:34]  use the runtime and the types were enough to like give me all the safety and then the wheat team obviously like the wheat wheat as a platform for like building tools building frameworks
[04:39:44]  building like new experiences and experimental stuff is just like surprises me every time the way we're able to like push it around stretch it in every direction and it holds together still fast
[04:39:55]  builds things quickly and simple to understand for me at least yeah no i mean just just a bunch of shout outs for like everybody because what i do is i just like look at
[04:40:05]  what everybody has done and i figure out like cherry pick what all i like and then i just like i'm just like a mashup person like i very few like very
[04:40:13]  few of the code i probably even written by like it's just getting it from here again from there figuring out what all fits together and it's these guys who figured out the
[04:40:22]  more difficult challenges and almost all of these problems like mutations was already figured out by daishi like he had already figured out how to do the cycle like where react when it calls
[04:40:32]  the server function it should know that it's part of a mutation so that it can like kind of put the correct headers and all so thank you to all these people because
[04:40:42]  of which i was able to do this in like two weeks like barely started like two weeks back and all of this was done in those two weeks so wouldn't have been possible
[04:40:50]  and i think uh obviously a lot of people need to get behind this idea to like actually make it successful needs to be a lot of buy-in from everyone from tool
[04:40:59]  developers to framework developers to like people in the ecosystem um and i want to build my apps using this this technology so i think like more needs to be done to popularize it
[04:41:10]  to simplify it for people to make it more accessible and to make it not feel like it's some alien where that you know you should not be knowing how it works i mean
[04:41:21]  maybe there's an argument there but you know never sits well with me like i would not use a thing like i don't use next even though it's the best version
[04:41:27]  of this because i don't have any control over like the the kind of the rails right and for most most teams should use next because you don't want to be controlling the
[04:41:38]  rails you want the world's biggest experts to be like on the field to be controlling the rails and making those decisions for you it's just not my taste even though most of
[04:41:47]  their apis i love and i'll probably kind of replicate those apis it's just that the control that beat gives me is like i just love that like this already
[04:41:57]  like i use uno cs like this anthony foods like css framework it gives me like inline icons which compile like we compiles it out to like something and so we
[04:42:07]  already has this ecosystem of plugins that i'm used to that i don't want to let go off and so and you should have some competition um if i'm not probably
[04:42:18]  willing the whole thing but i'm probably trying to make it so that something gets built on top of beat that provides the same dx yeah yeah that is going to be i'm
[04:42:29]  hoping that's like starts going to be that um i'm not sure if that's the route tana wants today but yeah i would hope that it's it's it
[04:42:38] 's it's using all the good foundations that i would want to do you you you want to get on the fully react uh list on the on the beta docs eh yeah that
[04:42:49]  would be good yeah no i i hope so i know i know there's a lot of people especially on the v community or side who want to see this happen and obviously
[04:42:59]  rakis um obviously the work at tanner so this is incredible work um that's going to really enable a lot of um people to do stuff that um they they've they
[04:43:10] 've desired to um so i'm pretty stoked on this work here and i'm very impressed with you know the the results so far i i where are you taking this next
[04:43:20]  just curiosity what's the what's the next steps for you the main thing is that i'm trying to see what all is needed to build like a cohesive experience so i think
[04:43:29]  already like the app i built with it i can deploy it to a cell all the features work but i need to figure out like all this like you know what needs to be
[04:43:38]  statically cached what needs to be reloaded a lot of the optimizations have yet to happen yeah but the the point is that i want to build my apps with this
[04:43:48]  technology like and the apps at my company are most likely going to be react apps because like that's the baseline of the talent we are able to get um so the the
[04:43:58]  challenge for me is both to like make this technology accessible enough to somebody who's a noob at react i mean they they don't they don't want to know how frameworks
[04:44:07]  work they just want to write react and so they if this stuff needs to be accessible to them so if i hire somebody i don't have to like give them a month-
[04:44:15] long seminar on how react works before they can do anything um i need it needs to work for my app and i need to enjoy using it i need to feel like i
[04:44:24] 'm in control of it um so it probably i probably will be giving it some time to see like what uh how i can mature it i don't know like doing the whole
[04:44:34]  open source kind of kind of wheel is is is its own commitment and like i don't know if i'm able to like live up to that commitment most of the time
[04:44:43]  so i don't know if i want to do that yet but obviously all of it will be open source but you know like kind of spreading it out as something people should use
[04:44:52]  i don't know if if uh i want to be the steward of that yet because i'm not a great steward of things like things like that i move on from
[04:44:59]  things very quickly so um so yeah i'm gonna i'm gonna see where it lies i i'm hoping like we can put some parts out and we plug in ss
[04:45:08] r and rackers and like these solutions can tan stack start these solutions can use the underlyings so that we don't need one beat kind of react rsc framework i
[04:45:19]  hope we have four or five all of them kind of do the maintenance so that i can use one of them there you go sounds great thank you so much for joining us today
[04:45:30]  i'm gonna let you go we're gonna switch over to this week in javascript great guest as always thank you so much thank you everybody for listening i don't
[04:45:38]  even know how many you're watching i'll go i'll go have a look later okay bye stream is not over um we're gonna do this week in javascript um
[04:45:51]  we're at four hours and 45 minutes nakil has definitely uh been going for the length record um tanner uh was i think tanner might actually have it though although
[04:46:02]  no i think our stream was only four and a half hours so nikil might still hold the title um because he was he was some of our earlier streams the first four plus
[04:46:12]  hour stream i ever did he was on yeah yeah yeah so how are we doing i actually was able to do a little prep work well at the end there when nikil was
[04:46:21]  giving his thank you list so i i can get started here a little quicker than i usually do um and we can we can get going what's the 21st so um
[04:46:32]  yeah okay yeah let's let's let's let's get this going um there and then there okay perfect perfect perfect perfect perfect okay yeah the solid start stream was super long
[04:46:58]  wasn't it yeah uh okay okay so let's let's let's get ourselves positioned here um we got a few things that have happened um as usual i'm gonna i
[04:47:11] 'm i'm gonna probably start this with um some solid updates but then what can i get going so let's let's just get right into it and talk about this week in
[04:47:21]  javascript for this week um there's been a lot of rsc type conversation what and whatnot but i'm gonna as i said i'm gonna start with solid um
[04:47:31]  for a moment here and i want to just talk about this great uh update to tan stack uh query in v5 where they're building um solids deep dipping into the data into
[04:47:42]  tan stack automatically and this is this is a i love that arian put in the the these diagrams really explain it to people to show like how the data comes in how we
[04:47:55]  diff the data on a per field level and then propagate that to specific elements without doing any re-rendering this is something that we do in solid start and now it
[04:48:06] 's uh solid query super powerful it means that you can get all new data and have the same pinpoint updates um that you come to expect um i'm very stoked um to see
[04:48:16]  that see this happen also some conferences coming up with other speakers other than myself coming in very excited um some you might know eric rasmussen uh but he's speaking
[04:48:29]  at react allocant uh cont i don't know how to spell it in september so very very very cool stuff um but yeah let's let's move on i mean there
[04:48:38] 's a few other libraries and stuff that we're seeing come into the community there's always there's always a new um yeah i i've been pretty stoked uh here's
[04:48:51]  cloudinary a video on how to do images with solid and cloud cloudinary thought it was really cool um another release of modular forms um yeah i mean it's been a
[04:49:03]  good week okay so let's let's move on first of all um need to advertise again some conference and stuff coming up but we've been talking about server components tanner um
[04:49:16]  myself and fred are going to be speaking on a panel hosted by shruti in terms of server components community solutions which is an interesting question because as you know none of
[04:49:29]  the three of us actually have shipped server components to production um although nikil just showed us that the solid solution actually fully passed the dan abramoff test so i think i
[04:49:41]  think this is pretty pretty awesome stuff so i think it's gonna be fun i i'm i'm personally looking forward to this because the the last time the three of us
[04:49:55]  got together which is jamstack conf uh really good stuff happened so um you know more of that i'm very excited for um anyway yeah what's some new stuff news i
[04:50:08]  i mean this was a week ago um but yeah okay let's just jump up i want to uh if you haven't seen this yet i recommend everyone to see and in
[04:50:18]  fact we're going to link the video in the chat um rich harris rich harris's latest talk where he introduces everyone to um i want to just remove the time stamp
[04:50:33]  off this he introduces everyone to um some of the new trends that are happening right now in javascript frameworks and he's not terribly stoked about them all to be fair
[04:50:47]  um he spends a lot of time talking about remix a lot of time talking about solid and rpcs um and talking about you know the dangers and why svelte didn
[04:50:55] 't go in these apis and stuff but i actually quite enjoyed it because he he managed to talk about all the frameworks you know he wasn't you know he didn't just
[04:51:06]  pick on one right he talked about mpas he talked you know he talked about you know uh he talked about like astro um and this kind of spawned a bunch
[04:51:20]  of tweets on twitter i don't know if you saw like uh like yeah i i'll see if i i've got them anywhere but essentially i i think there was a lot
[04:51:33]  of really good discussion off this talk um one of one of his spicy takes a lot of people kind of got it got in behind was this has a ton of quote tweets
[04:51:43]  um was the yeah the web doesn't suck because of frameworks the web sucks because of capitalism because we pay for everything with data and because we're we're all slaves to the
[04:51:54]  algorithm it's it's very interesting stuff so i i like that this discussion is happening we're sorry i saw i saw fred's response i love rich this is a
[04:52:04]  great talk i obviously disagree this takes on mpas if i listen to two years ago astro won't exist excited to keep proving you wrong i think everyone who got scrutin
[04:52:12] ized by rich in this talk actually really enjoyed it because i mean this is this is obviously like my sort of perspective on this it's like most of the opinions he had about
[04:52:27]  the stuff it's hard to talk about because the technology is unproven right like so it's like yeah of course it's maybe we haven't learned everything about this
[04:52:35]  stuff but he really put a focus on all the innovation happening um in the ecosystem like if you were included in this talk you're probably doing good things um and i like seeing
[04:52:47]  that discussion because like as i put you know it's a topical reflection of javascript frameworks especially the should versus could discussion which is always should accompany you know at
[04:52:57]  a time of innovation i think the positioning of this talk is more important in the content which may or may not age well like i don't know if rich is right he doesn
[04:53:03] 't know if he's right but um i quite enjoyed having this dialogue and honestly having so much focus on solid um in you know in a talk from svelte's creator
[04:53:15]  so very very very very cool and he says i appreciate how you always prize the conversation ideas over all else and even if someone says something critical assault not taking things personally you
[04:53:24] 're frustrated especially in open source yeah no i mean i don't he he's right about a lot of stuff i might disagree with some things but we don't know yet so
[04:53:33]  yeah this is just a great talk people should check it out right like so now needs rich harris approval dan approved yeah i don't know maybe one day i'll get
[04:53:51]  a stamp too um but yeah it i i don't know what else to say about it it there there's a lot of uh a lot of really good information in this
[04:54:02]  talk um take it as you will but i i i i enjoyed it another another uh great thread kind of related to this whole server component thing was this whole co-location
[04:54:17]  and again this is a response probably to rich's talk because they kind of critical the cold look he was critical the co-location stuff um react server components um he
[04:54:26]  says after the mess of php code much of the world has moved on to separating view and controller view templates and separate files logical i'm sorry view temp view templates and separate
[04:54:36]  files logic separately but this is not what happened at facebook their xhp fixed it xhp is like jsx plus react component model but for php slash hack what
[04:54:46]  he's saying is like sometimes there's a problem and you're just like oh we have to drop what we're doing and we change paradigms other times you can just
[04:54:52]  like realize some characteristic and change like you just change the perspective and then suddenly you can actually solve it so i thought this was a really uh great tweet and if you follow
[04:55:04]  dan's thread he just goes on about their whole experiences and whatnot and obviously you know this is something i can relate to because like i think it's interesting what happens when the
[04:55:12]  general community moves away from a technology for some you know specific shortcoming but then if you stay and find a different way to address it when things inevitably come back around again
[04:55:21]  which they always do there's a lot of valuable insights to be had and obviously i'm talking about signals here and but i think this obviously applies to data fetching and stuff
[04:55:32]  as well um but like like just even the server component stuff is very much like uh like marco you know back in 2014 you know and like the way you know signals
[04:55:47]  and reactivity are coming back again like these things do have their time when they come back around and the greatest insights often come from the place of those who actually didn't leave
[04:55:57]  the other path and i think it's important to recognize that the second the next time around the spiral is different so not all the same constraints apply but there is real learning
[04:56:07]  there and i think this is the part that actually the react server components have to take a page from they have to go like how did people teach the web before single page apps
[04:56:17]  that's how you're gonna have to teach server components like that kind of learning is is what we we have to make sure not to lose the learning on the cycle and i
[04:56:26]  know like there's this whole thing was like we come back around we can't learn the lose the client side routing you know mentality this is one of the things that like
[04:56:33]  dan was really worried about but there's learnings that come outside of your sphere and i think those are also important not to lose um i think it's really easy in our
[04:56:44]  position to get like so myopic in our like little zone of like the the thing we're championing that when we come back around we're like we have to make sure
[04:56:52]  we don't lose what we learned when we're over here but we also have to recognize when we come back there is elements of truth that were there in the original thing
[04:56:59]  in the first place and not like and realize like like for example like maybe we didn't invent all these ideas so yeah i i i think i think it's it's definitely
[04:57:13]  a really important sentiment and kind of thinking that you should go into this when when you recognize how things change you know like the ebb of ebb and flow of it
[04:57:22]  over time but in general i love hearing stories like this where you know so you you know challenge the norm and take and explore different areas i said one of my biggest um excit
[04:57:37] ements around the quick framework is the fact that they are taking a direction that not not not many other solutions you know thought was viable and they're showing that it is viable
[04:57:50]  and you know i think everyone can learn a lot from that all right all right so my personal stream didn't have much but the bookmarks this week uh had a few interesting
[04:58:06]  ones uh so let's talk about a couple of them first of all on topic the next two things about react server components um and let's do the let's do the
[04:58:19]  quiz first it's funny because this toggle component is like the exact component that we have in the uh and this is from his notes app kind of like when nikil showed it
[04:58:28]  earlier but this is also kind of like what we do in the hacker news comment compress thing where you know the only client component is this toggle component and then inside you have
[04:58:38]  the server past children so i i almost wonder if i you know we should pull the stream did everyone actually do this quiz um i i enjoyed it immensely um to be fair oh
[04:58:50]  right we can't see the options unless i type them out i got three for three as well um obviously but i kind of obviously know how these things work so yeah i
[04:59:05]  mean you could just double check with yourself right question number one the only client component out there is a toggle it has a this has some state like whether it's on or off
[04:59:16]  but it's initially false it returns is on children null what happens when you set is on true and to be fair this problem right here is i think one of the gaps
[04:59:28]  in the in if you're not using css hiding is one of the gaps currently in solid server component um thing because we we're not rendering the unseen props on initial render
[04:59:41]  right now and we have to add this but astro for example solves this problem and in fact astro um works the same way in this example with islands so islands and
[04:59:51]  marco islands work this way what happens when you set it to true details get fetched detail appears instantly and the answer is instantly because the details are server components they get rendered
[05:00:01]  as part of the initial tree and pass through so you actually render this details component on the server initially and it's just sitting there just not visible until you actually hit the
[05:00:10]  toggle you don't go back to the server and yeah i'm not sure the different frameworks here i i'm unclear if quick always does the fetching in this case but i
[05:00:32]  i think i think this is a very i can't imagine it does because actually i made it to do the mvc this is one of the tricks to saving double
[05:00:39]  data serialization it's ironic though that in react server components they actually don't solve double data serialization so maybe it isn't as important i've been like arguing with people
[05:00:49]  like hey you shouldn't do this type of architecture with rscs also not just because of the danger of waterfalls but because you you're you can't do smart serial
[05:00:57]  data serialization but it turns out like like the rsc solution doesn't actually save you on that side but yes quick is very much about lazy doing everything as needed so
[05:01:10]  but there's a difference between lazily run rendering the javascript code to do the work here and but there is no work here presumably like this is on the server yeah
[05:01:20]  i i actually think this is a tricky question i think i think quick is smart enough that this kind of transclusion works and it'll recognize that this is server rendered and
[05:01:31]  it never needs any code here there's no state next one say is on true you've edited the note and told the router to refresh the route this refetches the r
[05:01:39] sc tree for this route and service creates a note proper the latest db content does the toggle set state get reset does the details show fresh content and this is something that
[05:01:49]  we actually do solve um properly and solve to start and the answer is yeah the toggle state get reset no if you've opened or closed it it still stays the same does the
[05:01:59]  details show the fresh content yes because you're replacing the server content but yes i feel like this might have been the most obvious like if if it didn't work this way
[05:02:11]  it would be kind of pointless like i can understand why people might be confused here they're like oh now you're showing it i have to go to the server there could be
[05:02:17]  confusion there but this one at least and i think from the percentage um this one has a clearer win this was actually 50 50 people weren't actually sure and i think this is
[05:02:28]  this is a good question because it shows where a lot of the misconceptions around server components are you know people think about stuff like um other patterns like htmx and
[05:02:38]  whatnot and server components are kind of like their their own thing finally okay twist all are server components but now you want to add a bit of state to the layout like a column
[05:02:49]  width that changes on mouse drag can you make the layout component a client component if yes what happens on drag it's so funny his wording really confuses people because this is these
[05:03:02]  this is no and these two are yes but he he he started this one with no so i i don't know if that confused people it confused me but yeah the the
[05:03:12]  refresh he means well it's their version of refresh that's why he put it in quotes i i understand now what like yeah you know what i mean like the routes refresh like
[05:03:26]  an mpa i think this is the thing you know you with server components you like you are in this mpa type mindset um where you're like even if the page
[05:03:34]  doesn't reload you like pretend like it reloads um but it's not the same so i guess that that's the thing if how can something reload and yet persist state you
[05:03:44]  know it's it's like the mystery with react hooks like how can the function rerun over and over again and yet somehow persist state i i see a parallel there um
[05:03:53]  that might not be intuitive so that's that's a good question but the layout one is yes if you make this a client component again you don't have to refetch this
[05:04:02]  is the first question again he's saying like these things are server rendered these things are server rendered they don't have to be children they can be any prop they're server rendered
[05:04:12]  so adjusting this doesn't need to go back to the to the server this is part of the reason why the architecture is like this because you want to be able to um
[05:04:27]  have like all of these things are actually safe from a don't make it refetch point of view and he probably actually says this here these aren't just random questions they reveal
[05:04:37]  and motivate some key designs decisions for the each of these what do you want the answer to be and why what's the price of your chosen answer okay details appear instantly spoiler
[05:04:46]  answer okay all rc's running a single pass on the server no back and forth unless you're explicitly doing a router refresh so the toggle client is perspective yeah okay makes sense
[05:04:55]  answer two client state does not get reset on refetch this works like normal react if the same thing re-renders in the same spot its state is preserved during update there
[05:05:03] 's no reason to destroy it but you do see fresh data right there's no refetches on drag in general rc tree doesn't refetch unless you ask the
[05:05:11]  router to do it from the layout client components perspective its left and right props are render props of sidebar and content so it keeps displaying those you might be wondering how does it
[05:05:21]  know to render sidebar and content is jsx eagerly calling them not quite it's just that when we try to render layout which runs on in the client we serial
[05:05:29] ize its props during serialization we discover some jsx we run it yeah that's the thing this becomes this becomes uh you have to run over all the props anyways to pass
[05:05:40]  into islands and then that's when you realize like oh hey i have the thing and i this was a important um realization from my standpoint because it it has some interesting implications
[05:05:53]  in terms of duplication because you both have to like have the version of it that's serialized here and if one of these is showing you also have to render it so
[05:06:06]  like in a way i don't even know if it's double data this might even be like triple data by the by the time we're done it's possible that this
[05:06:15]  is if you're smart actually this is probably fine this information is probably serialized into that blob at the end but you can see the potential that you have to do a lot
[05:06:24]  of deduping here because of like especially with nesting you you like what if this has this is a server that has more child that has server in it like having being
[05:06:33]  able to instantly have it like slam back in you know like visible like in this example or in this example um you need to kind of like consider um like how it all
[05:06:47]  needs to be serialized and be available in multiple locations the final html the the props for these child components and the initial rsc tree that gets rendered into the page
[05:07:06]  yeah the fact that's called refresh doesn't help the blurring lines here oh i mean the thing is the blurring alliance is intentional they want you to think of it
[05:07:13]  like an mpa this is just the web 2.0 or whatever you know like that's that's that's the mentality here and maybe that's like the ask that's
[05:07:22]  too big to make but i i enjoyed these questions and answers i think it did a lot for people to kind of discuss and understand what the differences are they're doing incredible
[05:07:34]  work bringing awareness to this topic um so yeah all right let's go back theo gave his his thoughts um on you know next app router and he's been using them and i
[05:07:52]  think there's a a lot of really good uh things here coming in he's he's been championing them uh one he's one of the few people you know with
[05:08:00]  the you know presence who's been championing them outside of like the direct you know versell next world of things you know or people in the react team he's he's
[05:08:09]  been out there just going like server components are the thing and yeah server components are incredible check blocking first byte on lambda cold start sucks that's true these are good facts types
[05:08:19] cript plugin is necessary for good dx yeah but i wonder if it has to be i don't i don't know if it has to be i think this is just a next
[05:08:28] ism so that's fine said plugin doesn't work in mono repos and it's miserable that's a good thing file-based routing is no longer limiting factor for uis
[05:08:37]  i build that's an interesting observation i wonder about that i guess the typescript thing was the biggest uh benefit but i i think one of the considering factors here is like
[05:08:52]  if you care about stuff like query parameters and whatnot yeah i don't know this is i don't i i'm gonna have to ask him about what suddenly changed here i still
[05:09:00]  don't love file-based routing well there you go fair enough layout is dope but probably my favorite and probably my favorite part of the new router it's funny nicole
[05:09:07]  agrees with you that's like the one thing he pulled over route ts and route handlers are hella underrated okay not having access to the url and the server
[05:09:16]  pose is really annoying sometimes yeah i want i want to understand this i think it's really important in the model to understand i guess the problem is how does the request response model
[05:09:29]  and they fit into server components and like use server i it's a framework specific mentality but so how do you generalize it so if you're writing third-party components
[05:09:39]  you have access to that this is a very interesting question i think it's important one because i think you need to have access to it just essentially like especially the request response because
[05:09:51]  like authorization usually hangs on this kind of thing and like i know because i built like the really simple like rpc stuff with solid start and everybody immediately wanted off for
[05:10:01]  everything like it was just like the very first thing that you hit so you almost like have to and you can see like okay you can use middleware higher up but the that
[05:10:10] 's that's fine that's that's um you know author uh authentication but there's also authorization and authorization you need to handle at a lower level like you're like okay
[05:10:22]  i'm on this specific page i'm an admin i'm not an admin there's like there's a difference there and yeah i'm interested to see what the solution is they
[05:10:30]  only expose headers this is an interesting choice i'm i'm too bad we didn't dig into it i'm i'm actually very curious about that okay client navigation behaviors are great
[05:10:42]  sure suspense heals all rcs have a different intuition but they become very intuitive after a bit i i can agree with that libraries need to start adding used clients to like yesterday
[05:10:52]  this is definitely a pain point with the syntax chosen how it goes but you can always work around it by wrapping it yourself but it is definitely a pain so the the funny thing
[05:11:02]  is and i'm glad nikil's work on beat is going to help here just a lot a bunch of bundlers hit this and just go like what what the hell are
[05:11:08]  you doing and like to like choke up on it um so there's been i think someone in the responses was saying like they were using it in some for like some bundler
[05:11:16]  and it was like dying on them so they like essentially tooling catching up is actually making this pretty challenging error reporting still is a long way to go that looks good um cache is
[05:11:27]  very underrated yeah i think this is a cool api i don't know if you haven't seen it but essentially during the lifetime of the request you can just like call
[05:11:36]  cache and then key value and you can literally just like it will know like it'll just you can use this to dedupe almost anything very very powerful pagination is
[05:11:48]  gonna be a weird solution to think to solve yeah it's like i think this is why suspense list exists but it's it's more complicated than that in server component land because
[05:11:59]  you're it's like a routing problem all over again where you you really just need to fetch the next section of the page like normal like pages work fine you just you know
[05:12:11]  swap it out but actually to have things incrementally add with the rsc model is going to be challenging because if the inter the only interface is a routing the and
[05:12:28]  the interesting thing is i don't know i think i think to solve this you almost have to yeah i don't know like do you just re render the whole section with more
[05:12:40]  content like as it goes and then diff it you kind of want to get something optimal here but it's it's it's very much a special case and this is one
[05:12:49]  thing that yeah it's probably going to take a bit suspense is great yeah obviously errors often happen often but they surface early much better yeah i mean when you build with a tool
[05:12:58]  set that relies on compilation this is one of the benefits people talk about you know i'm a big fan of coffee script um and you know it's just like free form you
[05:13:06]  just kind of put ideas down but the funny thing is you did find out if you like made big enough errors like the compiler would actually complain at you yeah this makes sense
[05:13:15]  often the complexity incredible so many default yeah this is what everyone who's been doing islands for like the last little while or even reactivity has been stoked about there's going to
[05:13:25]  be an insane line ground for resolution for extra rsc yeah that's interesting i think some of the stuff we talked about before has to actually be um solved i think the
[05:13:37]  like the extension of like the url not being available like i think that i think this idea of having it like being an npm package is really interesting but like there's
[05:13:46]  some pieces that are missing right now to actually like like pretend i'm making an off solar solution or something and that's what my company does do i make a react server component
[05:13:55]  for it like at first like oh i can set up the endpoint with it and then people can just include the auth component and then it can just work but like how do
[05:14:02]  i handle the fact that the requests are different in every javascript in every framework like that there's runtime differences the server presents an interesting challenge in terms of standardization is
[05:14:13]  react responsible for that standardization i don't know i think i think it'd actually be very hard for an auth solution to come up with a general service react server component solution
[05:14:22]  and at that point you're like okay do i want to do just react or do i want to do other things as well it makes it harder to be the lowest common
[05:14:29]  denominator unless you're like very specific like a react type use case it's actually less generalizable and i don't know with the with the split on the runtime side it's
[05:14:41]  you know like between the different deployments and adapters and stuff like i think this might be a harder sell but i guess we'll see i i it probably will happen but
[05:14:53]  it might yeah it's gonna be interesting i can never go back where they used to be i i that's the kind of impression you get right i remember the first time i
[05:15:03]  did that client routing thing and you're and this is again why the you know you start kind of like looking at you're like the potential of this approach is so big architect
[05:15:13] urally at a core level and it can still support most of the old use cases it's very hard to picture like why you wouldn't try and make this happen i mean
[05:15:27]  there's shortfalls we haven't experienced yet but just the base of what it accomplishes seems so powerful i skipped that one and he had one other one up here which
[05:15:39]  is over any fetch was the right decision and i just said i agree with everything on the list except i this is i this i have such a hard disagreement with and i think
[05:15:53]  we talked about a bit earlier on the stream which is that it's it's it's cash driven development i think is just fundamentally flawed way of of doing stuff the thing
[05:16:05]  is they don't need to they they can provide their own fetch look remix provides their own fetch um but the funny thing is a lot of the of us who actually provide our
[05:16:16]  own fetch it wasn't necessarily for deduping it was just because so that like when you're on the server you can't fetch yourself so you can just call the
[05:16:23]  function directly and then when you're a client you do a fetch it's it wasn't about this but like almost every framework has an override for fetch um even solid start has
[05:16:33]  salt has like server dollar sign dot fetch um so there is like there's some truth to it but they're they're probably all doing slightly different things uh the reason the override
[05:16:45]  fetch is conceptually instead of having to depend on react fetch or something like some library everyone could just use fetch everywhere and be you know be happy with it but the interesting
[05:16:55]  thing about this like there's so many dimensions why this is an awkward consideration right like perfect examples what if next wants to override fetch even further because they want to use it for
[05:17:08]  static to mean something else like the meaning of these primitives like the fact that the standard exists is so that like they can have a shared meaning and not have these like
[05:17:18]  added meanings and honestly i get like there's this argument that like the browser has a like a cache like the server should just have a cache for fetch but it's interesting it
[05:17:28] 's like there's also other ways to get data like if you had to go into a database then and you wanted to dedupe or have a cache then you'd manually
[05:17:38]  do it why should fetch have this built in arguably because it does in the browser it's a fair argument but it means that if you build stuff in a way and you
[05:17:46]  kind of like expect it just to work and then you change the data method and then it doesn't like there's this inconsistency of react only going as far as fetch
[05:17:55]  but no further um and this was actually a change i realized on stream with dan abramoff that this was in the core of react that next was leveraging they haven't published
[05:18:04]  it as like on a canary or alpha branch but react itself patched fetch not next js or next js patched fetch in addition dan says they're actually walking back
[05:18:13]  from it and that they're going to um uh they're going to uh like basically um how should i put it they're gonna offer it as an opt-in and then
[05:18:27]  from there you know places like next can just like turn it on and others don't have to it's definitely feels like a meta framework kind of decision not a core decision
[05:18:36]  yeah exactly to be fair reacts version isn't permanent that's next add-on so react patch fetch for deduping and the next patch fetch for permanence so like like
[05:18:55]  what the expectation of the fetches is interesting the problem is if you make a primitive out of now everyone has to build their primitives on those primitives i don't
[05:19:04]  actually have a problem with that it's kind of like how we have create resource and solid and then because tan stack router uses create resource it has super power it just automatically works
[05:19:14]  the suspense out of order streaming transitions you know hydration serialization everything automatically happens like it's not a bad thing to produce force people onto a primitive that's not the way
[05:19:26]  they go and dan actually probably has you know i'm just like look over any fetch like rcs are great building an architecture building caching is the only means to print water
[05:19:35] falls is fundamentally flawed like i i i strongly agree that like believe in this and he says we talked a lot about waterfalls stream with kent and it was the most first
[05:19:44]  half stream might be worth revisiting because we covered some of that here and it's true there are it's not like you can't solve it one of the coolest things about
[05:19:51]  react server component model and stuff is that like you can still like hoist data out without being um loaders right you can just do all the data fetching in the
[05:20:00]  server component and then at some point there's a client component you pass it in it's i used this pattern back in the day on routers before i had um this you
[05:20:09]  know loader pattern in that all i did was put up my data fetching up have that as part of them base the route and then made the kind of have it wrapped
[05:20:17]  a lazy component so then i could fetch the data and render the releasing component driving in parallel this is the same thing except with server components same pattern so there's solutions but
[05:20:28]  there's you know what's going to happen they they're kind of telling people oh no it's okay co-locate your fetching and then suddenly that component gets under
[05:20:37]  conditional or it's like basically the view layer acts interception and you pull something in from npm and like like it's in my whole argument is it's kind of like
[05:20:46]  it's while it's nice from first principle standpoint to recreate the loader pattern like it's not guiding people in the direction that's like i don't know i i
[05:20:54]  it's it it feels a little irresponsible i mean we had this discussion last night but you know deduping solves some situations but not all of them but yeah let's let
[05:21:04] 's see a bit more about what dan had to say about this okay actually what's work is it really feels like reading him both sides here on one hand people don't
[05:21:15]  like that we're being opinionated on using frameworks that avoid bad patterns on the other hand people don't like that we're giving better permits to build with which is it if
[05:21:23]  i'd be okay with a better primitive if it didn't involve literally patching fetch if it was react fetch and you're saying like this is an example of primitive i'm
[05:21:34]  you know that's fine but like i think the problem is it also you also get hit both ways if if you try and provide something in as natively and i said
[05:21:44]  there's an incentive here a bit on that because like async components like you're using language features instead of like provided primitives and i think using fetch makes it feel like
[05:21:54]  you're part of the platform you're not adding this bulk you can keep the bulk in client place where you're like use and use and then here you can be like okay
[05:22:01]  it's just like javascript but it's it's javas it's just javascript in in the same way that spelt's just javascript it
[05:22:07] 's like it's kind of a lie and you know it's fine if you know that but the concern is like it's it's the pattern it's not about the prim
[05:22:20]  it's the pattern that's awkward because it's like you're just like let's just co-locate it and i understand that it's the dx goal that is driving
[05:22:29]  this but it's like let's let's continue here a strategy catchy dupe is more powerful than hoisting everything up okay let's keep going nobody prevents you from still
[05:22:43]  composing everything in one query that is true but to compose in every query you actually have to hoist it up okay and kicking that off at the top right so just right
[05:22:53]  i hope streamingly but you also have the freedom to kick off lower as needed okay i mean that's fine you can always do things lower some people know you don't
[05:23:01]  know this but like because of suspense you can load anywhere in the tree right this is true without react server components you can do this solid start for example you can load the data
[05:23:09]  anywhere i just don't recommend it because just how like you're just giving like it's i don't people realize waterfalls have been like the biggest performance like oops kind of
[05:23:23]  scenario it's just so easy there's a reason why you can't put client components and server or sorry server components and client components and i realize that that's the client
[05:23:33]  server divide but you know as we showed in the diagram there's all waterfalls are like never a particularly good thing it's just like is it an acceptable thing and at what
[05:23:43]  point does it stop being acceptable when you block user close to the leaves by waiting you you let everything the ui flush that i agree yes so if it doesn't hold you
[05:23:51]  back the rest of the stream it's different component could cut off close it it's different close to kill off close to the leaves do you lose a good way to add
[05:23:58]  it yes yes it's free well other than patching globals not free but but yes i mean deduping is a good thing in general especially when you have like different
[05:24:10]  route sections that depend on the different data it can allow parallelization easier but the trickiest part about the leaves is the leaves could be conditional and this depends on the data
[05:24:19]  flow of the view of your app not just not not just the um not just like if there's a difference when you're like looking at a series of promises and you're
[05:24:33]  like why are you doing five awaits in the at all in the same time why can't you just you know why don't you promise all it or whatever or why don't
[05:24:39]  you just not promise all of it be non-blocking pass all the the stuff and await it where you need it that's the best way but okay then if you
[05:24:47]  want to preload you can add a hint anywhere upwards the router already warms up the nested layouts and pages right away but you can kick off more as you go like
[05:24:56]  this suggests to me almost like pre-pass i'm wondering about not always best to kick off everything at once at some points it saturates this is true but i guess
[05:25:03]  on the stream dan had been like okay well we need like visualization for this like uh we need um tooling to know about these waterfalls because i think there's this consideration or
[05:25:17]  concern that like from my point of view is that like nothing here lends to you knowing like if you see a bunch of promises in front of you you can make sense of
[05:25:29]  it and be like okay uh i'm doing something stupid here i'm chaining this so i don't need this needs a combined query and even like you could argue like
[05:25:36]  relay solves this in a way that is co-located what's beautiful about the relay approach is it really keeps it out of the component flow um i think the challenge here
[05:25:47]  is because we've chosen components and we're mixing view logic with data logic in such a like way that the potential here of things getting unintentionally out of whack is just
[05:26:01]  so much higher again you could pass to the top and pass the promise down to guarantee exactly that's exactly what like that's exactly what you're going to do but also you
[05:26:11]  don't have to well sometimes you get to make the choice well it's an interesting choice nobody ever complained about being able to do patch from any component on the on the
[05:26:22]  client this is the problem right like okay but who where is the most popular react like what's the most popular react router right like react router is right and why do you
[05:26:48]  think the react router people added the loader pattern like why why would they go and do this people could just fetch anywhere on the client why did they do this why did
[05:27:04]  they think it was like so important to to not do that the problem is just because no one complained this is like the absolute worst thing you could be doing like from a performance
[05:27:17]  thing this is like it is people worry about like javascript frameworks use re-renders or blah blah blah like even angular js's dirty cycle like picture the worst
[05:27:29]  thing slowest thing ever blazer whatever like doing a client side like waterfall like client server waterfall is worse than the worst thing you can picture doing like like nobody ever complained like
[05:27:52]  everybody should have been complaining like i think we would feel we have to be openly cautious if there was more observability okay so yeah network tab note there's two different there
[05:28:07] 's the cache function react provides a ddupling perk request caching yeah that's yeah but if we discuss fetch next instruments inspection specifically for isr yeah so this is a
[05:28:15]  whole other level right which is fun because you know there's a whole other topic about you know how next works on different platforms when they're patching globals that aren't
[05:28:26]  agreed upon by you know any kind of standards but like putting that aside like i don't know it's i feel like i'm being i'm channeling alex rus
[05:28:39] sell right now but like like you know better like i don't know why does this feel deceptive i i i let's see okay multi uh cto uh verse
[05:28:59] ll really smart guy creator uh one of the co-creators of uh what is it um wiz you know quick's predecessor at google guy knows the stuff what is it
[05:29:09]  i don't think any cache cat uh cache to fetch which brothers literally do as well is not new business has anything to do with preventing waterfalls good it's actually something more
[05:29:20]  different than waterfalls because yes we have to find twice the slide okay okay so basically rcs do basically caching doesn't really do with preventing waterfalls although rcs
[05:29:37]  are good like the way they architected prevent waterfalls in a certain way so i mean it's mind-blowing since awaiting fetches and sibling functions are called sequentially fr
[05:29:47] ancell is not mind-blowing i i don't think that's what he means i think he means that you can go component component component component i'm actually interesting i
[05:29:54]  think react server components add this ability but client-side suspense doesn't work like that funnily enough solid suspense always works like that because it's non-blocking but
[05:30:01]  i i i what he's i think what he's talking about um if if i was to guess is more of like um what is going on the playground right now doesn't
[05:30:14]  matter is more like you could be in a situation where you could be like async component you know so something that has an await like in it you know and you if
[05:30:25]  you do this like this they this one doesn't block this one that i think that's what he means like they can do all three in parallel i don't think this is
[05:30:39]  true i don't know if yeah i think actually the way the beat on works and the way you do the render it's probably true in general um i i think this is
[05:30:47]  this is what he's he's getting at like this but the reason is it's because it's it's it's non-blocking essentially like um this isn't
[05:30:56]  an async function right like there there's a handler in the middle that's handling the synchronicity for you so you don't have to worry about it um that
[05:31:05] 's that's my take so i mean the thing is they get the control to create component call so then they can put all the appropriate waiting and like timing themselves at at
[05:31:28]  each component entry it's component scoped granularity matthew phillips here is being a little bit cheeky um but that's good yeah so this isn't about
[05:31:40]  waterfalls it's just it's it's it's an interesting balance um for sure in the sense that like i sense and i i mean i i can relate to this
[05:31:58]  being because it will often when i'm a small guy but when you're a small guy you have no power to do anything there's like a resentment towards standards because they
[05:32:06]  move too slow and you're like i need this like async context and you're just like i'm just gonna implement it because i don't like being told what i do
[05:32:14]  by some standard body that's gonna take years to deliberate on stuff that doesn't cater to my use case i'm just gonna build it now it's interesting when you have
[05:32:25]  a project as big as react um kind of being able to kind of like swing its weight around a bit like that where they can be like you know things are missing we're
[05:32:37]  just gonna like patch them into the into the platform and be like hey and this has so many downstream repercussions sometimes for good right like we've been waiting for streaming on
[05:32:52]  aws lambda for like a decade now or something and like re it only took a year you know or you know six months after react server components and versell and all that
[05:33:04]  to like get get it finally to move and like you know when they released hooks like within a week the chrome team was optimizing uh array destructuring and when they forced
[05:33:17]  uh asic context as a global polyfill in next js 13.2 which broke it on a bunch of third-party platforms like dino and netlify and basically
[05:33:28]  everywhere guess what a couple months later cloudflare's got it dino's working on it you know so they patched global fetch you know they can just brute force
[05:33:39]  the the their way into it as well you know people can be just like yeah okay let's let's let's do this you know i i don't know it's cool
[05:33:49]  because it's a power for change but it's also like really disruptive and makes it hard for others so i don't know i i'm like in one hand i'm
[05:34:03]  like kind of glad that these things are getting optimized because it like unblocks some really awkward things that we've had to deal with that we can just like okay that's
[05:34:11]  not an option we can't do that but on the other hand it's kind of like are we like is this an abuse of power so like ah yeah i don't
[05:34:39]  know it's it's it it is definitely an interesting um it's definitely interesting consideration to figure out how how how to kind of evaluate these things um obviously there's
[05:35:04]  a sort of like the cost of dx consideration and it it seems particularly poignant because of how like the last decade of react was essentially like fostered this good enough attitude which
[05:35:23]  accelerated things progressed ideas in incredible ways but at the same time there's a bunch of people now holding the bag on these apps and going like i thought like why how can
[05:35:34]  why can't i make this performant react told me it was okay and it's like it was never okay and we knew we knew that you know and here's an opportunity
[05:35:46]  to start from scratch again is this the baseline that we're going to start with like maybe it's not as bad as last time but like it was never okay you know
[05:35:58]  like i don't i don't know it's at a certain point you you wonder like at what point is there culpability here right like then the unfortunate part is if
[05:36:17]  you like speak out against it too much and depending on the context like it just it just sounds like complaining and then you know i don't know i've said my piece
[05:36:27]  but it's just the little things like this are really kind of unfortunate all right i think that's enough on on on this last little one for today i think is this funny
[05:36:46]  story and i think that's something we always have to think about as a community actually let's see can i i don't want to talk about i don't know if
[05:36:57]  free after cell really has the power on the standard ascent context was a node standard yes not really winter through thing dream for cell happened because versell is aw is the biggest
[05:37:04]  customer hoax constructing was a brother confirmation not standards yeah i mean the maybe the timing is just coincidence coincidental but when i've been like maybe just the little push it
[05:37:16]  needs i i've been looking at i've seen framework solutions trying to push the envelope in various ways and getting stopped kind of stopped or by the stuff and never seems to stop
[05:37:27]  react um async context was is a node standard right but it got jammed into winter cg and almost to the point as it's like i guess we'll see
[05:37:41]  how winter winter cg kind of like kind of fits into all this but like it's going to get forced it's going to get forced its way in right as i said
[05:37:52]  it's it's just the reality of this when you control the biggest piece and everyone wants you know you to deploy on them what i there's got to be different paths
[05:38:02]  here but it's it's interesting that like if the dx wind just continues to win then like you're kind of trapped in this really awkward place i mean i don't know
[05:38:14]  if the solution is just to have more options and react other than next to show like that there are alternatives but like that doesn't even matter like the damage is already done
[05:38:23]  yeah i don't know okay on a lighter note um david told this kind of funny story and honestly i think i love this is like twitter in real life um the
[05:38:54]  coffee shop i just had someone noticed i was reading a solid article the next 30 minutes involved him emphatically explaining why salt was the future and i was wasting my time with
[05:39:03]  anything that rich is a genius now dom gana went joining you know and he's like i didn't really say a word in those 30 minutes i i thanked him and
[05:39:11]  he got his coffee and practically skipped out of the shop basking the glory of another convert i didn't have the heart to tell him what i work on for oss but i
[05:39:19]  learned svelte is the future at least to be fair i i mean there you're always the this this happens on twitter this i guess this happens in real life too
[05:39:37]  part of it is like don't be that guy but on the other hand i mean i mean dave didn't even feel like arguing he's just like you know like
[05:39:50]  you know i i just i i i like this story i mean it's tricky the reason i like it is because how light-hearted the thing was like it's been it
[05:39:57] 's been challenging as you watch a community grow and people get excited about it and then they jump on every react sucks thread to be like hey have you tried an alternative like is
[05:40:07]  that inviting it there's other places where it definitely isn't inviting it you know like it's just you know to make it even i'll go do this something about solid
[05:40:20]  thanks dax but like you know david was wondering if it's a back-end versus front-end thing but you know i feel like people are tribal about their languages
[05:40:31]  on back-end you know and you know it's not the framework authors your framework is fine even if you're not using spell you know like i think every friend creator
[05:40:42]  has their own facepalm moments when they see the users acting up it's like bands cringing at their groupies and there we have it yeah yeah exactly david
[05:40:51] 's not fully personal he just thought it was like a really interesting thing but uh you know big props on rich um he's like friends please don't do this sort of thing
[05:41:01]  it's cool to be excited about tech and to feel connected to a particular community but not to get in people's face about it in real life or on twitter because others
[05:41:08]  wins when we hear stories like this if your team's someone wants to see it grow the best way to do that is to show that we are fun friendly and welcoming community being
[05:41:16]  aggressively pro-svelte does the opposite of that whatever tech people are using is fine number one rule is be excellent to each other um yeah i i i i i
[05:41:32]  i i you know this the that's why this ends up being like a feel-good kind of story because it's like you can picture this happening or relating and being like
[05:41:40]  oh man you know um but you know i thank thank you david for sharing it definitely definitely it was amusing to me i preach all the way possible but the coffee shop
[05:42:00]  is a sacred place there you go so it's definitely not yeah i mean there there is this like very hyperbolic aspect around the technology which keeps you on the innovation
[05:42:33]  stuff and it's i mean part of it reacts back in swing now because of server components you know and this is goes back to the story earlier when i was talking about
[05:42:41]  like when people sometimes stay on the same solution they learn more than if they changed um or they learn different unique valuable things so yeah i it's funny how much like a one
[05:42:54] -liner it's not even just sometimes the title of an article there's like these uh let me see if i can find it i tried to write an article a couple of
[05:43:04]  years ago because i was annoyed about how self-propagating these things like the disappearing framework of svelte it's a lie everyone should know that like it
[05:43:11]  doesn't disappear but like it just carries on and on and i think one of my unpublished not custom javascript s2 no not that one two-way binding
[05:43:20]  evolution over revolution front-end platitudes i never published this one it was just one of my thinkings uh i've recently been thinking a lot about how in the front
[05:43:32] -end world there's so much no it so much noise it is simple if not completely accurate statements like it carried around and repeated like dogma it's not that they aren
[05:43:39] 't based in truth but that by the time they reach anyone most of the meaning is interpreted rather than explained these statements and underlying sentiments carry much longer than they are true they've
[05:43:49]  never been true in the fur they may have never been true in the first place but we've all heard them virtual dom is faster than the real dom redux is too
[05:43:56]  much boilerplate jsx can't be statically analyzed virtual dom is pure overhead see i have that one here um context api is a replacement for redux like i'm
[05:44:03]  just like these like like almost none of these are actually true statements but they're like widely believed right like it it comes down to even best practices like if you're using
[05:44:22]  react you should use redux swix shared an article concept i can't remember though called naked emperor's tech and i prematurely took this to mean that we should take this
[05:44:33]  exercise of skepticism critical thinking but he correct me giving examples optimistic thinking can also break the cycle so i wondered are there more some simple true statements i could be make they're
[05:44:42]  worth sharing even i feel like they're fallible yeah i don't know i don't know why this is highlighted i think i just screwed up the styling mpa render
[05:44:53]  yeah i've just been playing around with like it just i never finished this article clearly but i think that to boil things down we find like these one-liners that we
[05:45:10]  like carried around and get transmitted without actually even being accurate anymore and i i i i don't know it's it's it's interesting because like so much gets built on
[05:45:21]  those like we just go like oh yeah everyone knows that and yet like the statement isn't isn't true um yeah what's chat saying and i'm just preaching making less
[05:45:34]  to try it to be honest yeah i mean there's always that aspect um if you like latch on to over generalizations or sound bites exactly it just gives it just it just
[05:45:48]  carries better so you know take it as you will um i i i i i'm glad that we can have these conversations without getting at each other's throats
[05:46:13]  so there there there is some good that comes out of all of this and you know whether we should all be suspect of different technologies and stuff as i said watch riches talk decide
[05:46:30]  for yourself where this stuff fits i'm glad that the discussion and discourse is happening um that's really what makes it exciting you know having nakil on today talking about react
[05:46:44]  server components and his experience building on top of them super interesting stuff um really unique uh he's taking it him and fatigue have taken it much further along than a lot of the
[05:46:59]  other solutions so it's very cool to see that work and you know what that's going to mean for others because we just keep on building on top of this stuff that
[05:47:05] 's that's the reality of these things um yeah i don't know i think that's it for us today we're early stream and we end early although i i mean i
[05:47:16]  can hardly call this early are we approaching six hours i'm not i'm not doing six hour stream um we're gonna end 15 minutes before six hour stream um i'm
[05:47:28]  just looking is there anyone for me to raid right now show us some astro stuff more than i already showed no i i've got some i've got some other stuff i
[05:47:45]  i gotta do trash is on oh let me see here trash is on what is trash doing today um yeah we can do that yeah yeah let's let's just we
[05:48:13] 'll we'll we'll raid trash give me two seconds when i get into here thank you all um for for joining me today and uh as always does that not work
[05:48:33]  why is this what did i do wrong why is it oh no it is going yeah okay we're all good i'm just like completely blind yeah yeah okay cool all right till
[05:48:50]  next time oh actually before i go i forgot it's going to be a while till next time i don't want to because the timing i actually don't think i'll
[05:48:59]  be able to do the stream after reactathon so it it's probably going to be may like i don't know like 19th or something till my next stream so i'm
[05:49:07]  going to be off the next two weeks just fyi okay and