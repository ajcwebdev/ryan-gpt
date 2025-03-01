---
showLink: "https://www.youtube.com/watch?v=iR5T2HefqKk"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Breaking Down Hydration w/Dan Jutan"
description: ""
publishDate: "2022-04-30"
coverImage: "https://i.ytimg.com/vi/iR5T2HefqKk/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, 03:31:07, which means the transcript is three hours and thirty one minutes).
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

[00:00:00]  Hey, everyone. Welcome to my stream this week. This week, we're going to be talking about hydration. It's really a continuation of what we were doing last week
[00:00:12] . In preparation for the stream, I actually looked at a previous stream I did on hydration. This is not the first time that I've done hydration. I did hydration originally
[00:00:20] , I'd say, in October, maybe. But looking back, it wasn't a very well-viewed stream, funny enough. But it did actually cover a
[00:00:33]  lot of the stuff we covered last week too, because in order to get to talking about hydration, you've got to have a solid foundation in basically how the whole render tree
[00:00:42]  works to actually get to it. It's like that layer on top. Anyways, yeah, if you're here, come say hi in the chat. Hello, Lauren.
[00:00:52]  I'm excited to be talking about it, though, because I think there's still a lot of confusion. I've been meaning to write another article. I've written
[00:00:59]  a few articles by this point. But especially a lot of the stuff I've been reading recently, it introduces a lot of new ideas. But it's not really clear where
[00:01:07]  the ideas overlap. you know, what the differences are between the different perspectives. And I think part of this is this is kind of a rapidly evolving thing. Hydration
[00:01:23]  is really a difficult thing to just like nail down, because it's a whole range of solutions, essentially. And one thing that I can kind of noting and why I
[00:01:34] 've been kind of setting up a sort of framework around talking about it is there are certain characteristics that seems to transcend all the different approaches. And I'm hoping through exploring that
[00:01:45]  it'll be easier to not only understand what it is and but also to be able to kind of like characterize it and understand, like when someone says resumable or partial
[00:01:56] , what it actually means and what the impact of those decisions or architectures are. So anyways, this week to to to help me, yeah, just gonna say hi
[00:02:06]  to a few people here. Okay, I've got Dan again joining me. So he's going to help hopefully ask those clarifying questions that that we all need.
[00:02:17]  So we can, you know, make it clear because I tend to kind of go down my specific paths, but I'm as I said, I'm pretty excited about this
[00:02:25]  one because I think hydration is a super interesting topic indirectly, it's been what I've been exploring on stream for the last four months or so since January. So this
[00:02:35]  really kind of ties a lot of those pieces together. Anyways, without any further ado, I'm going to invite Dan on the stream here. Hey, Dan, are you
[00:02:45]  doing this week doing good? It's been it's been a fun week. I've been thinking about hydration myself. Um, I started getting involved in an astro
[00:02:53]  like officially this week. So now I've got solid hydration and astro hydrate hydration, which, um, it's a lot of fun. And, um,
[00:03:03]  yeah, no, I'm really excited about this topic, too. Firstly, like, can we just notice that two years ago, it seems like everyone was happy with next
[00:03:12]  and no one cared about hydration. Yeah, I mean, it depends on what circles you're in. But yes, I think there was a perception of that. Uh
[00:03:20] , I, I will admit to you, it was about two years ago that, um, I was in that perspective where I, I didn't value the problem space.
[00:03:29]  I, I mean, I noticed there was a problem, it's the best way to put it, I was doing solid, I was doing client-side rendering,
[00:03:38]  and I was like, why are all your SSR sites so freaking slow? Um, that's where I was. So it wasn't that I did, uh, that
[00:03:44] , uh, that I was like super stoked about next per se, but I just assumed that it was because SSR was slow and that, like, whatever they were doing
[00:03:51]  must be really dumb. But that, that was kind of where it was. I realized since then that is a very complicated problem to solve and there are benefits, real
[00:04:02]  benefits when you actually look, um, you know, at it, um, you know, with a wider view, when you think about the web in terms of accessibility or
[00:04:11]  like access, when you talk about different devices, uh, different networks, there is actually a really important story to be here. And especially when you talk about like large
[00:04:22]  companies that work on a global scale, that's why hydration is coming from companies like eBay, Facebook, Facebook, or, or Google, or like this, it's because
[00:04:36]  these are problems that you, you need to consider even more. So when you, when you, when you scale up and when you want to reach the widest audiences
[00:04:45] , you know, anyway, we'll get more into that. Um, I think maybe we can, uh, what are we doing here? We're doing a little pre
[00:04:53] amble. A few people have joined on, I, I feel sorry for those who haven't joined, don't joined on yet. Cause this is, I said,
[00:04:59]  going to be a good one. So, um, let's get started on, uh, this week in JavaScript, sit back and relax part of the stream. Yeah
[00:05:08] . Well, just to start, there was actually a few things this week. I, I didn't think there was at first, cause I was kind of like, you
[00:05:14]  know, you know, not every week is as good as, you know, other weeks, you know, not every week's last week, so to speak or whatnot.
[00:05:22]  Um, but there was a few things and the first one that, uh, came across for me was, um, yeah, this, Hey Caleb, I remember this
[00:05:34]  when I used next, this was weird. Right. And the funny thing is we hit this on stream a couple of weeks ago and everyone who uses next knows this, but
[00:05:42]  I, I, I, it was just so funny. The timing was like, so like at the same time, like, like two weeks later, suddenly this push goes
[00:05:49]  out. I don't have probably nothing to do with it, but anyone who joined the stream, remember that I, I, I've, I've remade that
[00:05:55]  hacker news app in like nth frameworks at this point. And it is pretty easy. It doesn't take much work, but I think to watch. We take like a
[00:06:04]  react example, like already pre-formatted react example in, in next, or sorry, in remix. And then you'd like literally go through and, and have to
[00:06:13]  like, first not understand what's going on. And then like, basically like just massage all the links and all the things throughout the app. It was, it was
[00:06:23]  definitely a little doing the funny thing is stuff like this doesn't bug me at all. Like that that's just like, it just subtle kind of like code style. Like
[00:06:31]  who cares if there was an actual real problem, you know, architecturally or something next, then I'd have an issue. But, but it's just funny because like
[00:06:38]  for a lot of people, those are the kinds of things. Cause like someone, someone wrote in the comments to this, it's like, Brian, if they had
[00:06:45]  released this, it would have made your stream half as long. I mean, yes, I was doing a lot of manual code editing, but I hope I wasn't that
[00:06:52]  slow. Something kind of is funny about you'll be able to opt into this new behavior. You mean like you'll be able to remove a tag, like cool.
[00:07:02]  It's fine. I, I think this is great. So, uh, you know, monumental engineering decision. Right. So this one, I, I, this is
[00:07:13]  the fun part about doing this stuff and doing the stream and being involved in these kinds of things. So you just kind of feel like you're just like right there as
[00:07:18]  stuff happens. Like when we got the streaming, uh, compression on the Netlify edge and, you know, now next, we've got rid of those link tags
[00:07:25] . So this is, I love how this just keeps on evolving. Um, they removed it because of you. No, they didn't. No, it's just funny
[00:07:33] . The timing was like, just perfect. So, so there's a few people who were just like flagging me in the, in the mentions on this one, just
[00:07:41]  because it was like, literally, like, it felt like it was like the week after. Anyway, um, let's keep on going. Um, uh, what
[00:07:49]  else there was, uh, there? Yeah. Uh, I actually, I, I got a little article post for me, actually this week started here and I know nothing
[00:07:57]  about this. Um, there's this, this long thread and some people said this sort of amazing. And I mean, it looks like people thought it was amazing. I
[00:08:03]  actually didn't like this one. I don't know why I didn't. Oh, and do you know why I didn't? I mean, now I liked it.
[00:08:07]  It doesn't matter. Um, cause I have no context here. I joined tech Twitter like two years ago and what this whole long thread is talking about is about how
[00:08:16]  tech Twitter is not what it used to be. And how it's been replaced with a bunch of grifters. Pacific open source authors were shown by the community and
[00:08:24]  went dark. Even famous ones went, not being activists, reduced their commitment to community, blah, blah, blah. So tech influencers, monetizers, monetizers.
[00:08:31]  And it's so funny because this is probably all true, but this was the Twitter that I entered into. I, I, as I said, I joined Twitter in like
[00:08:40] , uh, December, 2019. So this is, I just thought this was what Twitter was. You know, you kind of join the tech influencers are like saying
[00:08:49]  what's going on and you try and have a conversation and you get shut out. Like that, that, that's what I thought Twitter was. Um, so, um
[00:08:54] , it's interesting to see that it wasn't. Yeah, maybe there was some pretty cool circles at some point that I, yeah, I don't know. I
[00:09:06]  don't think there is a tech Twitter. Everyone has their own siloed tech Twitter. Tech is, you know, a big subcategory on Twitter. And
[00:09:13]  yeah, I, I, I guess like even, I don't know what, what is, what is front end Twitter? Like Dan Abramov and like, who
[00:09:22]  else? Amelia Wattberger and like, I don't know, like what is front end Twitter? Yeah. Or, uh, memes with Adam Maracus. Right
[00:09:31] . Yeah. Like, I don't know. I don't know if you can just label tech Twitter as this like one thing. Um, but it's interesting. But
[00:09:41]  yeah, I mean the death of conferences. This doesn't, this ties in, maybe it's just the timing with COVID, um, not be able to galvan
[00:09:48] ize, you know, like people around certain types of personalities. And in the meanwhile, we've, you know, things are just kind of, I don't know.
[00:09:56]  This interests me a lot because my career started during COVID. So I never went to a tech conference. Well, that's what I'm saying. So we're the wrong
[00:10:03]  people to talk about this because I, I wasn't involved, you know, like at all, at all. But yeah, this thread apparently is right on and they
[00:10:13] , they, they describe it to a T, but I don't really know anything about this. Cause I does, everything I read here seems true, but I just assume
[00:10:20]  Twitter is always like this. So yeah. Um, this is a good thread, especially if you've been around for a while, you can kind of reminisce or
[00:10:27]  something, but, um, this, this, this is basically how my week started. Um. Then, well, my weekend leading into it was I wrote this article and
[00:10:42]  it kind of plays off this whole sites versus apps thing. Honestly. Um, it talks about the single page app versus the multi-page app thing. I've been
[00:10:50]  waiting to write this article because I'm so excited about, um, what, you know, where Marco has been doing and how it's actually showing like the ability and,
[00:11:02]  uh, to kind of transcend perhaps, um, typical MPA. Um, and w we might even see a little bit more of that tonight. I got a little
[00:11:10]  surprise for you all. Um, but also on the solid side, using things like Astro, you know, like w w th this stuff starting to kind of blend together
[00:11:21] . And even though I wrote this article is a very like philosophical, you know, juxtaposition between like the, the polar opposites. I want, I w
[00:11:31]  the whole point was this is, this is, if you haven't checked it out, follow me. This is like, I don't know. This is like what
[00:11:40]  I've been building towards. I wanted to see if I could take two really sort of opposite ideas, opposite values and make them performant. This is kind of what I
[00:11:50] 'll be talking about. You know, you know, in this case, like neither of them have the VDOM, for example, but it's not about the V
[00:11:56] DOM or not the VDOM or whatever it's, or about SPA or single page app. It's about finding the patterns and the ways to model data in
[00:12:05]  a way that can be performant, enjoyable, to build apps, all of those things. And being able to work on two frameworks is an amazing opportunity to get the
[00:12:14]  understanding across the whole ecosystem. And this article is just kind of celebrating how that's kind of starting to finally come together to fruition and just how cool that is. Obviously
[00:12:27]  it's very me kind of thing, but just for anyone who's followed, this is, this was, that's big for me. But the funny thing is this sort
[00:12:34]  of, and actually I should mention, this is kind of a parody article or response to Swix's original Svelte for apps, or Svelte for sites
[00:12:45] , React for apps. And in that article, he said something along the lines of like, some very smart people think the walls between apps and sites, you know, isn
[00:12:56] 't a thing. Or it's, you know, but you know, respectively they're, they're wrong is what he wrote. And this was like two years ago
[00:13:01] . And I was already kind of planning to write the article that time, but yeah, it's taking me two years to write the response of, to, to that,
[00:13:08]  to that statement. because I wanted to be sure I wanted to be able to prove it. And if you read that article, you can see that, um, a
[00:13:17]  lot of ways Marco has kind of changed the game and even Astro on the other hand has changed the game and we're, we're seeing this reality of a potential convergence
[00:13:26] . So yeah, it's really exciting stuff. But as I said, the actual discussion is still going live, you know, in different variations, like this happened this week
[00:13:36] . Brian Florence, there's no such thing as a static website, like, I mean, hate it or love it every week. You're going to get a tweet
[00:13:48]  from the remix guys that are just like, I love it. I think they're, I think they're shitposting on purpose and it's amazing. Yeah. Like
[00:13:56] , it's like, you didn't say that. Did you, the thing is, because I mean, there, there, there are bits of truth in this thread.
[00:14:01]  If you go through it, there is, there is, you know, he's talking about like stuff isn't usually truly static. And that like, it's not
[00:14:09] , it's not, it's not this like simple split, like static non-static, you know, for a lot of things. Right. Yeah. And it
[00:14:17] 's kind of interesting and because right now, because of the, where the edge is happening and this sort of dynamics, the new static and this whole thing, and even remix
[00:14:29]  in a sense, how it positions itself. So this all makes sense, but I mean, you know, this is, there, there's a whole industry around static
[00:14:37]  web generation and stuff. Like, like our, our, my, my man here from 11 D is Zach Leatherman. And you know, this is sort of
[00:14:45]  a sub tweet of that or that thread. People don't get paid to work on SSG sites. Have you never been a WordPress freelancer? Like what? Like,
[00:14:52]  this is what we get paid to do. Yeah. We came out somewhere in that thread. I'm pretty sure. So yeah, this is, this is, this
[00:14:59]  is, this is just like the opposite side. So two very extreme takes. And again, it's not, it, it is a bit of the sites versus apps thing
[00:15:07] . Again, it's not completely, but it is, it is a bit of this kind of discussion in a, in a different way. I didn't reply to
[00:15:16]  the tweet because sometimes it feels like stirring the pointless debates like this is a deliberate remix marketing strategy. What? A marketing strategy on Twitter? Which is sad as remix looks cool
[00:15:25]  without needing disparaged Jamstack static, whatever. And yeah, I mean, yeah. Well, remix is disparaging themselves because if you say nothing is static, you
[00:15:33]  better not remove that script tag and rely on your forms. Well, yeah, maybe. I mean, that's, that isn't it. We, we, yeah
[00:15:40] , that is an interesting perspective, but I mean, I think they're talking more about the rendering versus the, like it's caching versus non caching. The base
[00:15:46] , the remix, uh, perspective, which is reasonable. One is that if you cache everything, that's like the same as being static more or less, like, like
[00:15:55] , or it's not like, it's like static. Isn't a real thing. It's just where you put the cash is essentially the mentality. Yeah. I think
[00:16:01]  that was actually like the, the actually good part of the discussion, which is like, look, if we're using SSR and we're caching. All the
[00:16:06]  time, the, the line between SSR and SSG blends. And I thought that was valuable. Yeah. So yeah, I mean, it's, it's,
[00:16:15]  uh, this, this, this is an fun debate. As I said, it's not quite the app versus site one, but it is fringing on, on that
[00:16:22] . And I mean, this marketing thing has gotta be true. Cause honestly, I feel like every week remix has like a new statement that I'm just like, oh
[00:16:29]  man, what's going on here? Sometimes they, they, they even bug me. Like they're on the other side. Like, it's just like, I,
[00:16:35]  I don't know what the marketing strategy is. If it's just kind of like shake things up by a bunch of people off. Um, I mean, I,
[00:16:44]  I guess it's working. It's, you know, I, you, you know, how I respond to that stuff. I'm just like, okay. You,
[00:16:51]  you say that I'll give you a benchmark. A ruthless benchmark. That's usually what I do. Like someone makes some kind of performance claim or something. I'll
[00:17:01]  just be like, okay, let me come up with a situation. You can't respond rationally to a tweet like this though, because it's so sort of, you
[00:17:11]  know, no terms are defined. So what are you supposed to respond to? Yeah. As I said, so it's, it's, it's, it's
[00:17:20] , it's, it's, it's, it's the debate. And honestly, that, that, if you missed it, this was also a couple of days ago
[00:17:28]  here. So it's fun. I don't know. Anyone in the chat have any thoughts? Someone in the chat says interesting. So interesting. I would say I would
[00:17:38]  agree. I would agree. Is this what tech Twitter is? I have, I already, I haven't noticed anything different in tech Twitter. Maybe, maybe, maybe
[00:17:45]  this is where it's always been, I don't know, you know? Well, are we going to comment about Twitter's new owner or is that sort of irrelevant to
[00:17:54]  tech Twitter? I mean, it's, I guess it's fair, but I honestly have no opinions about, uh, Elon, except for, I actually like the parody
[00:18:02]  tweets better than anything. Like the one where he, next, he's going to buy react and remove. Oh yeah. I love, I love that. Yeah.
[00:18:09]  To respond to Caleb in the chat. Like if you want solids Twitter post marketing strategy, Oren is on it. He, he makes the best Twitter posts. Yeah.
[00:18:18]  I mean, I can't even pull it out. It's so funny. Cause I, I, I, I was on the solid account cause I saw someone asked,
[00:18:24]  you know, about the whole let counts sell thing. And I just keep them on. So I just put let count in all in different rebels and obviously just putting that
[00:18:33]  code in doesn't do anything. It just like literally displays like count or something, or just doesn't know up, but he took the next level. Um, apparently this
[00:18:42] , this unlocked the whole idea of what you can do as, as a meme. So yeah, I'm not, I'm not, I'm not, I'm not
[00:18:47]  gonna go there right now, but yeah. If you want to see it, um, you can look around, you'll find it. Okay, cool. And then
[00:18:54]  yeah, let's, let's keep on going. So site app static real thing. I'm going to take a little break here. Cause I want to talk about solid
[00:19:02]  for a moment before we can go on. Um, solid hit its fourth year in open source and our hundredth contributor. It was like completely like just a weird timing
[00:19:10]  thing. I was like, it was just like, there's a PR for some kind of typo thing. And I was like, oh man, I, I missed
[00:19:16]  that in the release notes. Sure. Okay. PR is like that. As much as some people, some people probably think they're annoying or pesky. I love people
[00:19:22]  who make PRs for like spelling mistakes and little things like that. Cause honestly, they're easy to merge. I missed something obviously. And I don't have time
[00:19:30]  to go find it. If you go through the effort of pulling down the repo, forking it and fixing that typo, like, thank you. Like, like,
[00:19:38]  and, um, it just so happened that emerged it. And then I'm like, wait, we have a hundred contributors. And I'm like, wait, today's
[00:19:45]  April 25th. Like literally like, like it just, it clicked on me that I've been doing this for four years and a hundred contributors is not a lot.
[00:19:54]  You go over to some of the even, you know, newer things that are kind of picking up the gastro and stuff. They have way more than a hundred contributors probably
[00:20:00]  at this point, or, you know, it's just like for us, um, and the main solo project, also we moved a lot of stuff into other repos
[00:20:07] , but like, you know, there's a lot of technical stuff. Sometimes it's not easy to be able to contribute to the core library and whatnot, but just to
[00:20:15]  have, you know, people coming in and have spent the effort, I, you know, I'm incredibly grateful for the opportunity to be able to do this stuff.
[00:20:22]  And, um, I, it's funny, I just tweeted this just because I was like, wow, you know, that's really cool. And, you know,
[00:20:27]  it, it just, yeah, I honestly, it's been six years now altogether. Um, and yeah, it's, it's, it's, it's amazing
[00:20:37] . Like part of what, what's so cool about this, like a lot of creative endeavors don't have this like self documenting nature of it. I mean, you
[00:20:43]  did music. I do music. Like you don't have this, like four year anniversary of like learning guitar or something in the same way, because this is so inherently communal
[00:20:54]  and documented. And it's almost like you have these like a hundred people in the face pile as like witnesses to like, you know, your, your own creative journey
[00:21:03] . It's pretty cool. Yeah. Yeah. I mean, yeah, it's so cool. And it ties into, I started writing around the same time and learning
[00:21:10]  in public solids, completely documented right from the beginning. You can, you can actually like, not from the beginning, 2018, but in 2018, I was playing catch up
[00:21:18] . I was basically writing articles about how I approached, like, you can, I write all about web components at the beginning and like how, like, like my philosophy
[00:21:27]  for how to split state from container from view into three technologies. And it's so funny because you, you actually see the progression over time as you go through that, because
[00:21:36]  at the beginning I was very, very much on web components. And that's the whole reason why solid is component lists, which ended up being like the key innovation.
[00:21:44]  So it's, it's just kind of the, one of those, like, what's the term serendipitous, like, like situations a bit where it just
[00:21:51]  kind of worked out that way. But yeah, I mean, while I'm here, do a couple more solid news things. I don't, that's probably not quite
[00:21:58]  the right tweet. Steve was like from builder, you know, quick party town would start this post where he's just talking about how much fun he was having writing solid.
[00:22:07]  And he wrote a whole tweet thread on, and I was like, oh man, this is so awesome. You know, thanks Steve. And, and, and I
[00:22:13] 'm like, what is he doing? And it all found out that David, um, community manager, it had kind of been like, Hey, Hey, Steve, kind
[00:22:22]  of give me a little nudge. He's like, what, what's going to take to get the mitosis solid integration out the door so that everyone can use mit
[00:22:29] osis, you know, like generate, um, different frameworks and, you know, puts, get solid in there officially. So that's what Steve was doing. He
[00:22:36]  was working on the integration and he, so he's playing with solid a bit and, uh, having a lot of fun with it. So yeah, that's awesome.
[00:22:43]  We have the mitosis, uh, STK and, uh, another good one. We, we had come, come, come, come out here is motion. One
[00:22:51] . Um, people, you know, talk about. David has worked so hard on this. I just want to say like, he's been, he's been working
[00:22:58]  on this like day after day. This is really cool. And I'm not even like emotion. I don't need, like I'm a GSAP fan, but like
[00:23:07]  now I'm using this. Like I I'm, I'm so impressed with all the effort that went into this. Well, the thing is animations are always tricky with declar
[00:23:14] ative frameworks. And the reason for that is that animations are ephemeral, like they represent a trans, like a transition. Yeah. And declarative frameworks are good
[00:23:24]  at synchronization. They're like good at like the state reflects everything purposely. That's why I was always so comfortable being like, oh, I'm doing imperative code,
[00:23:33]  doing GSAP for animation, D3, whatever. So, so yeah, this is really cool. Obviously, um, some frameworks have this kind of, some stuff
[00:23:41]  like this built in, but we aren't one of those frameworks. So having tools like this, just, it just, it, it completes the story, you know?
[00:23:48]  Also no one really has this built in. This is like the next level. Okay. Yeah. I, I don't know anything about animations, which is partially why they
[00:23:56] 're not built into solid. So there you go. Oh no, you do. You made use transition. Yeah. Those aren't animations. I know. I'm,
[00:24:06]  I'm, I, I always take an opportunity to meme on. Uh, on use transition. Yeah. I mean, react named it. Um, it is what
[00:24:11]  it is. That ship has sailed. Even though like there was also transition group. I, yeah. I'm still gonna meme about it. You can't stop me.
[00:24:18]  Uh, yeah. So yeah, I, I mean, yeah. The only other thing I wanna mention before we move off solid is, uh, the hackathon is done
[00:24:26]  voting in three days. So if you want to help support the, the, you know, all the contributors who participate, go over to hack dot solid.js.
[00:24:39] com and vote. Um, this is your last chance to vote on it. There's $12,000 in price prizes up on the line. So do go over
[00:24:46]  there and, and, and, you know, vote. We clearly inspired this, like, uh, how do you pronounce it? Chakra UI hackathon? Yeah.
[00:24:56]  That was really cool. Cool. Yeah. Yeah. And, yeah. And astro. Yeah. This is, you know, honestly, I think we ran ours
[00:25:06]  a little bit too long. Um, a little bit, maybe not the thing, but I feel like this last little section on the voting and all that has definitely been dried
[00:25:13]  out. I know we wanted to be sure. Um, but, uh, yeah. So if I was to do this again, I would, I would look at shorten
[00:25:18]  the time. Not, I actually like the long run hackathon. We are gonna do it again. Yeah. That's my vote. And yeah, we're gonna run
[00:25:25]  it better. Yeah. I think the long run hackathon is actually really cool. I just think that it's probably like, it was a little bit too long,
[00:25:33]  but you know, um, the things we learned, but really cool. And yeah, so that, that's, that's a solid JS update. Um, what else
[00:25:40]  we got this week in JavaScript? Um, syntax, you see people, if you wanna talk about, are you arguing? This was weird. I actually followed this. So
[00:25:49]  everyone's arguing about like how you do loops and all the frameworks. I was like, just, we've go, this has run its course. Well, I mean
[00:25:58] , this has gone for a while now. And I actually kind of played at this a little bit before that, because I, I actually asked everyone, you know, what
[00:26:07]  they could pick a different framework. That's all is most similar to what would it be. Um, it was, it was, it was a trick question because like
[00:26:15] , I don't know. Everyone. If you come from Svelte, it's gonna look like Svelte. I came from Vue. It looked like V
[00:26:22] ue. So. Yeah. So, I mean, it's, it's, it's, it's one, it's one of those things where like, I
[00:26:30] , yeah, I think maybe this was the problem with that question. But I was interested in how many people just, the funny thing is I knew this question wouldn't
[00:26:38]  do what I wanted it to exactly. But I wanted to see if, if it challenged people to think outside of that box. Cause that, and that's what I want
[00:26:45]  to do. Even with the syntax thing, it's mostly about challenging people to be like, like maybe see something different in a different light. And the syntax thing really
[00:26:53]  started here, this, this loop thing. And honestly, I wasn't paying it. I don't, I usually ignore these threads because like, they're stupid. I
[00:27:00]  don't care that much about the syntax, honestly. Like I care about it a bit from ergonomic, but it's not even from a composition mechanical standpoint, not from
[00:27:10]  like a, like, like most of the common, you know, like elements of it. I just want to, I care about like how it works mechanically.
[00:27:18]  Do you know why I care about this? What? They got the code sample wrong in view and in Svelte. I believe definitely in view the, the four it
[00:27:27] 's V4. Have you never used view guy who like, who is this? They never used view. Yeah. To be fair. My example isn't much better.
[00:27:35]  I, I screwed up a couple of things too. Um, but yeah, I mean, it's, I, I came, this one got flagged because I,
[00:27:43]  I think, uh, was it Theo? Um, retweeted this and then I saw it and I was like, okay, fine. This I'm going to
[00:27:50]  get pulled into this silly, silly debate. Oh, that guy. Uh, Eric. Oh no, I don't know him. Yeah. No, this, this,
[00:27:58]  this was a really silly debate. I think we've, we've, this is the first thing you notice in a framework. Why is this what we talk about now
[00:28:04] ? Yeah. I, I mean this, because what matters is, uh, how, like the first couple steps, like if you're like, it's a thing,
[00:28:14]  it's interesting. If it's about lowering the floor, making web development more accessible to beginners, making it easier, not have learning curve and stuff. And it's important
[00:28:22] , but it's also like the thing that like, it's not the only important thing. And so, you know, I did what I do. I just was
[00:28:28]  like, okay, let's compose. Let's, let's look how the scales up. And I think, I think when this example came up, people are just like
[00:28:35] , what is going on with view? And to be fair, I, I didn't need to do the syntax exactly, but actually the right answer isn't actually much nicer
[00:28:42] . Like, I think like, if I'm not putting the colon here, I'm putting the colon over here. What are you trying to do here in the view
[00:28:48]  example? Well, the problem is these aren't equivalent, but the, but, but the view in this felt are actually close. I'm trying to take, in this
[00:28:56]  case, it's wrong. But what I, what I am doing here is taking item and aliasing it to name, which means that this is actually correct. I think
[00:29:04]  the other option would be V slot, um, colon item. I don't, I'm trying to look at the react example, just so I see what you're trying
[00:29:11]  to do. Yes, the react example is not the same as the other two. This is my screw up. So in any case, you get into this zone with
[00:29:18]  view. Like let's, if you had an index on your iteration, we'd be in the same place. We'd be like, let item name, let colon index
[00:29:25]  this. And it just starts expanding out this way. Obviously react. You just add an eye here. It's just different priorities. And honestly, you still had the jump
[00:29:35]  from that original code to this and rewrite all your loops. So essentially like, I mean, it's not, they aren't actually all that different. I was more
[00:29:48]  trying to, you know, challenge people who came in, who were like, especially on the kind of view and Svelte side, who were like, look how sleek
[00:29:57]  this is. Like to show them something like one step abstracted, because it's not optimized that way. The debate is so far from use. I mean, people
[00:30:05]  are like, I think Theo said this, but Theo won't be offended if I, if I call him out. He's like the react example looks like JavaScript. So
[00:30:12]  it's easier. And I'm like, do you think dot map is the easiest thing for beginners to learn in JavaScript? Like that's not a user focused observation.
[00:30:22]  Right. And, and, and I think that, but the funny thing is like how quickly we leave the like simple stuff. As soon as we start building stuff, like
[00:30:33]  it just, it's all the same stuff. It doesn't really matter. I chose this example because I knew that view and Svelte were like a little bit
[00:30:39]  rougher, which react is arguably rougher on the other side, just to kind of be like, are you still going to save you here? And the funny thing is
[00:30:48]  the view people were like, yes, view. And I'm like, okay. Like, you know, I, I don't like the react example. You already know
[00:30:54] . Cause I've talked to you about it. It has a function child. Yeah. Yeah. That, that, that bugs people. Right. But someone actually had a
[00:31:03]  good argument. They said, because, because it's like a single child. And when you have children, you could have multiple. They didn't like that. That
[00:31:11]  they'd rather it be a prop. Yeah. Like, like, this is the same thing with the, with the dot map map example. You can't argue that this
[00:31:19]  is easier because it's JavaScript, because the idea of a function child and HTML looking template, that's not the easy thing to learn in JavaScript. Right. So, I
[00:31:29]  mean, it's, it's an, it's, it's an interesting one because. I think what ends up happening here is it's, it's unexpected.
[00:31:37]  A lot of people are going, how does that work? How can you pass a function? And like people, and then once. Yeah. To them, they were like
[00:31:43] , wow, that is so good. Like, so cool that you can do that. Because the, the cool thing about it is like, once you get it, like
[00:31:50]  you're like, like it's incredibly powerful and flexible. And like, for me, honestly, my, my whole thing is for my personal preference, I kind of
[00:31:59]  get lazy and I forget what I know. I like all the time. I have to like, like, I'm getting old now or something. And I just can
[00:32:05] 't remember all the different syntax magics, you know, after a while. So like, if, if, if I have something that just like follows like a, like
[00:32:17]  one thing I do like what JSX is like, once you like know that you can do JavaScript with it and have that mental model. Like, I don't,
[00:32:25]  I just, I don't have to remember anything. But like, to be clear, like I'm now an avid solid user, but the reason to advocate for JS
[00:32:34] X is not because it looks like JavaScript. It's because of this argument that the things you have to learn are actually a small number of them that you can then use in
[00:32:45]  many different ways. You can compose these ideas and you can reuse these ideas. And for that reason, you still have to learn new ideas, but those new ideas go
[00:32:54]  further. Whereas in view, learning the concept of V dash slot is not as powerful. Right. Right. So yeah. And I, just for fun, I threw in
[00:33:05]  solid and, and Marco because I can, and they, they. Every time you show a Marco example, I'm like, can we do more of this? Well,
[00:33:13]  I mean, it's, it's, it's funny. You're one of the few people, most people have a bunch of, there's even some people in
[00:33:16]  the chat. They're just like, it's all really cool. Marco makes me throw up in my mouth. Um, I don't. I feel like we're in
[00:33:23]  next gen web dev. I love it. Yeah. I'm, I'm hopefully more people feel that way about it, but I just, this syntax thing is silly.
[00:33:31]  I actually wrote my, my thoughts on it. I, I think this is the thing. Cause this is a sub tweet actually of Evan. You who tweet something about like
[00:33:38]  how we shouldn't argue about it. And it's like talking about brain tweet, brain shape and like how it like maps to kind of like, everyone has a different
[00:33:49]  preference and a different wiring. And I, I can see that. But knowing that is why it's important. Right. I said, I've been poking with syntax
[00:33:57]  last few days because it's complicated. There are comfort and mechanical aspects. Ideally I'd say it's like 80% of subjective and not worth arguing over, especially since it
[00:34:05] 's costly undertaking as a framework to roll your own. Yeah. But like literally they all did. Right. But like. Svelte or Marco or view, or
[00:34:13]  like how many syntaxes do you have? Like how much effort goes into the code highlighters, linters, pretty printers, typescript ID integrations. And how much
[00:34:22]  of this is for mechanical reasons. Right. I don't, sometimes it is, but not, not completely. So yeah. I mean, it's regardless of how we
[00:34:30]  should say, we don't, we shouldn't argue about it. Frameworks invest heavily in this area. It is definitely important. Like, like, like you can
[00:34:41] 't just like, you just kind of like shake it away, you know, as being silly, you know, because I mean, in a sense it is like the argument
[00:34:51]  on Twitter gets us nowhere. But on the other hand, like, as I said, I don't know how many official syntaxes are going to do at this point,
[00:34:58]  but I'm guessing there's like five or something. Yeah. View, view. Yeah. There's original like. Keep going. This is my original problem with view
[00:35:08]  actually. Right. But like, okay, let's see. There's the, there's the, like, they have like a version that works just like in the browser
[00:35:15]  as is. I don't know if that uses the option API. There's a composition API. There's the. That's the options API with a string template. St
[00:35:24] ring template. Right. And then, and then there's like their normal templates and there's the GSX templates. And sorry. Did I say rough sugar? Yeah
[00:35:33] . So, I mean, I don't know if there's like five or six. They, they work together. That's why you can't like divide it into five
[00:35:38] . They like, you can use bits and pieces as you go. Okay. But yeah. Okay. I mean, that's, that's, that's fine because
[00:35:46]  view has this amazing way of being everything to everyone. Yeah. So it makes sense, but I'm saying it's clearly important. Like, like. Oh, you're
[00:35:55]  saying, you're saying Evans like is not important when he's like implementing all of the syntaxes. Yeah. Yeah. So. Yeah. I mean. It's fine
[00:36:06] . What bothers me about this is people aren't saying this syntax is good for this subset of people. They're saying, I like this syntax and someone else is,
[00:36:14]  I like this syntax. And like, that's not valuable to me. I want to know who this syntax supports. Like for in Theo's example, it's great for
[00:36:22]  JavaScript power users. So like, that's a really valuable observation. Yeah. So, and maybe, maybe that's the thing. Like maybe that's probably all Evan was
[00:36:33]  actually saying to be fair. It's just, it's just, it is a thing we can't, we're not going to pretend like it's, it's not
[00:36:40] . Like it's, it's not. And actually I've got one more topic for this week in JavaScript before I move on. The syntax thing was fun. This
[00:36:48]  one just threw me completely out. Um, what the hell was going on? We, and this one is actually going to tie in a bit. Yeah. I love
[00:36:59]  this one because it's what we talked about. Yeah. Because, because like we learned all about first contentful pain and large contentful pain. And I was sitting there
[00:37:11]  and I was playing with Astro and I'm not going to lie. Like I was like looking at the performance and I was like, what the hell are all these
[00:37:18]  little things? Me and Fred looked at it. And there's like thousands of these in that really bad example, like the really killer page. There's like thousands of these
[00:37:25]  like little slices of script tags. And some of them are for Astro, but a bunch of them were solids hydration script being repeated for every island. And, and
[00:37:32]  somebody came from the Astro community. He's like, let's just fix that. And I'm like, oh man, you would, is it easy? And he
[00:37:37]  found a solution and got rid of them all and everything got streamlined. And I was like, oh wow, this is so great. Like it's, it's definitely
[00:37:44]  like, see, these are the Astro ones here at the end, but it was like that over here originally. Um, so yeah. Shout out to Hippo.
[00:37:50]  I believe he was the one who fixed that. Yeah. See, see how it's all like this over here. He got rid of it. Look, and you can
[00:37:56]  tell this is like way longer while it's like doing this timeline while it's doing well, all that. But this one is just like smooth and that's how most things
[00:38:02]  are. But look what happened to our little. Walk me, walk me through this. What's happening in this example with the yellow, the yellow. Yellow is the
[00:38:11]  scripts. When, if you zoomed into them, you'd see this, a JavaScript execution. Purple is layout and usually layout is trailed by like little green ones.
[00:38:19]  You can't see what your paints, but this is the original Astro demo with all my script tags. I had a script tag for every island and script tags that are
[00:38:27]  in line are blocking. We talked about this last week about how. Yeah. The browser has to go run those. As it grows. So if you see this layouts are
[00:38:35]  getting interrupted. So they calculate the layout paint, do the script tag. Layout paint, do the script tag. Layout paint. And it actually breaks it up
[00:38:44] . So looks at the first layout paint script tag. Our layout paint thing happens here. And look what happened to the first paint, first contentful paint. It's way
[00:38:53]  up here. And then this, like a little bit later, we get up, we do a few more and we get the largest contentful paint right here. Except
[00:38:59]  there's way more contentful paints over there. What about those? Like the rest of the page? Well, it's because the long page, largest contentful paint is
[00:39:06]  based on what's in view. So to get largest contentful paint, you only need to show what's on the screen. So this is the rest of the page
[00:39:14] . This, this, this page had what? Like a 1400 comments. It doesn't matter. Like the page is a hundred times longer. You only need to load like
[00:39:22]  5% of the page to get largest contentful paint. So it would interrupt near the beginning, you know, a few times and then you'd go, okay,
[00:39:29]  here's a large contentful paint. So you get first paint, you know, so assuming that the beginning of the timeline when the HTML loading is all the same, you
[00:39:36]  almost immediately get first paint. And then first, and first contemplate paint. And then large contemplate paints like a little bit after, and then the rest of the stuff
[00:39:41]  finishes. And then, you know, we have our load event. Whereas after we fixed it and optimized it so that it was faster, look where first paint is now.
[00:39:50]  It's, it's at the end. It's because the browser did all its work all at the same time. And there's some little green right there. There
[00:39:57] 's the green for the paint event. It's a slightly bigger paint event. And now here's first paint contentful paint and what it's, it's down here.
[00:40:04]  So it wasn't essentially, it did all the work up front and then painted everything. And the total time here is shorter, but because it had the weight to do all
[00:40:13]  14,000 comments or whatever. So from a user perspective, you're seeing stuff later. Yes. And from the benchmarking perspective, you're seeing stuff later too
[00:40:23] . Like from like the, from like the lighthouse. So what exactly was the change? So at first we had little hydration scripts everywhere. And then you put that, then
[00:40:31]  you combine them and put it in the head. Like what was that? Exactly. Yeah. That's basically it. Like, I mean, I, I, let me
[00:40:37]  see if I can pull it up. If I have it Astro solid hacker news, Netlify thing. Let's just go to the main page. Um,
[00:40:48]  but you can see that is still talking about syntax. Of course. The syntax is the most important thing. Yeah. All right. Yeah. But like, let's
[00:40:59]  go to a place where I know there's an island right here where this toggle is. Okay. There's an island here, right? And if you look here,
[00:41:08]  there's a script tag, which is the solid hydration bootstrap window H Y H Y events this. And every time you see an island in here and you look,
[00:41:17]  you're going to see another one of these. See script. Yeah. And so it gets to there and it stops. And the funny thing is if I, if I
[00:41:27]  now show you the, the edge version of this, cause I deployed Astro to the edge. This is where I was doing. I did a little upgrade. Is this
[00:41:34]  the fixed version? Yeah. This is the fixed version on the edge. You you see, we, we don't do that anymore. And what ends up happening is
[00:41:41]  in the head where there's still a thousand Astro scripts, not that many in this one. You'll see that it, that, that, that script, maybe it
[00:41:49] 's not here. Okay. It's essentially gets called as part of this process instead of being a separate script tag. Hmm. So instead of having a thousand scripts interrupt our
[00:42:00]  page, we now have, but it's, it's upfront. So. Well, it's, it's, it ends up being in these, in these script
[00:42:08]  executions, but yes, it's, it's essentially those, the, I think where it comes in, the scripts aren't, aren't blocking. Like they're
[00:42:15]  purposely like set to not be blocking. And essentially because it, because of this, it doesn't block and you know, we get our full paint. But as I
[00:42:27]  said, this, it scores lower, generally speaking, even though the whole time is faster. It's just because we didn't interrupt it. And now on a normal
[00:42:34]  page being shorter is better. But in this case, because the page is so immense and we don't actually care about the last. Um, you know, few, who
[00:42:44]  knows thousand comments at the beginning. It's actually beneficial to have the script tag block and force the paint. And as I said, as this framework, I'd never
[00:42:51]  do this intentionally, but it's just, it's just one of those funny things that you don't. I didn't realize and just accidentally chance upon to have a fix
[00:42:57]  that makes something more efficient, actually make it. Like benchmark worse actually definitely answer this question in chat. Does the script have to be doing something to like, like this
[00:43:09] , like this example is, does console.log do the same trick? Or does it have to be actually like doing something significant to get the browser to pay attention to it
[00:43:17] ? No, I think it's just console.log. If you saw what that strip script was that I was showing. It was like a weak set. It was nothing
[00:43:23] . It was nothing. It was like instantiate an object if it doesn't exist. And so the first time it actually did it. And the second time it just
[00:43:29]  like go, oh, it exists. Like again, skip it. It's literally was no offing everywhere. Yeah. I, I, I'm like 60% understanding
[00:43:38]  at this stage, but. Well, it's, it's, it's just cause it falls in the flow. So it's going, going, going hits it,
[00:43:44]  stops and goes, okay, well, while I'm processing, before I process this, I have to make sure everything's up to date. Right. It basically like when
[00:43:51]  the browser like chills out, that's when it registers a paint. Well, but it's not chilling out. It's actually kind of being forced to because of the
[00:43:58]  way of the browser rendering. Yeah. I think that, that part is what I don't understand. Like what, like. What is that? What you have to make
[00:44:05]  sure. It's interesting. Cause there are certain things that cause reflows, but I guess the way that it's implemented. You, you, you, what if
[00:44:12]  the script needs to know about where it is on the page? Like what if the script has to have knowledge? I think that's the whole point. It needs to
[00:44:21]  actually. Make sure that the page is up to date before it's safe to execute the JavaScript script within it. Yeah. Because the script can access the Dom. Sorry here
[00:44:30] . And the job as we can sustain. Yes. That that that's. Yes. I think we're typing and saying it at the exact same time. So like
[00:44:38]  the browser has no choice. So, I mean, it makes a ton of sense, but it's just something that you accidentally come across. And it was like the secret
[00:44:47]  to like our super fast page speeds on the stupid large page. Um, I've corrected it. Unfortunately for Astro, that means we don't get the nineties anymore
[00:44:58] . You know, the, for that, for that thing, it's still. It just shows that the lighthouse benchmarks might not be your best judgment. Right. Exactly
[00:45:08] . Uh, it's an, it's, I think we get in the eighties or high eighties, um, still like an 88 or something. So it's
[00:45:14] , it's still good. And it's more fair because honestly, the others weren't interrupting with scripts. So it's more equivalent. Um, but you know, you
[00:45:21]  know, we can talk about this more later. Let's I, I just, in terms of Astro specifically, but yeah, it was playing around with this demo that
[00:45:28]  I realized something kind of weird and kind of interesting. And I, as I said, I deployed the Netlify edge demo with Astro. I think one of
[00:45:35]  the cool things is it's the whole, like it's zero kilobytes on the main page, but that comment page with the compression is only 7, 4.7
[00:45:41]  kilobytes of JavaScript. I actually found a couple of places where solids, um, hydration, uh, template reduction could actually make the code smaller. So I was
[00:45:49]  able to shave another 200 bytes, um, GZipped off the final bundle. And that is almost the smallest hacker news I've ever seen. It's the smallest that
[00:45:59]  we've ever seen on stream, but I, I actually have another hacker news demo. That's even smaller. Um, but maybe we'll get to that later. And
[00:46:04]  this is due to partial hydration and arguably progressive hydration. This is due to partial. Um, but we, we, we, the, the, the, I,
[00:46:14]  I brought this up because this is the perfect segue into our, our topic today. Right. So, um, I'm just going to, uh, throw up some
[00:46:23]  kind of banner for a second. Cause I can, and just so I can mark it. And we're going to start, we're going to start talking about hydration here
[00:46:31] . Um, chat, just so you know, I came prepared. I have a Moleskine page filled with questions on hydration, uh, that I hope to
[00:46:42] , uh, kick Ryan's brain at everyone else in chat probably already understands hydration. But, uh, I know that more people watch this, uh, this video than,
[00:46:52]  uh, than those in chat. So I'll be chat. You can help me understand hydration too. Yeah. Now I've been trying to think of the best ways to
[00:47:01]  approach this because it is a little bit tricky. Um, to talk about the subject and it takes all the basis of everything we talked about so far. Can we actually
[00:47:10]  like start? Like before we do the example, can you ask the question that everyone asks, which is what is hydration? Sure. Yeah. And, and for me,
[00:47:18]  it always helps actually even just looking at the, at the page anyway. Yeah. Yeah. Like in general, high level, the only expert, I mean, if you
[00:47:26]  go on Wikipedia and I can pull this up here, I actually hate the definition on Wikipedia. Um, it's funny cause when Mishka was writing his article,
[00:47:35]  um, on hydration, he used the Wikipedia definition. I'm like, this is the worst definition. It's it actually defeats the point. Like you're trying to
[00:47:41]  make with your article. Um, the, the, the, the last thing on that page was hydration web development, but yeah. Yeah. Yeah. Yeah. I
[00:47:50]  was going to, um, you know, hydration. We've done hydration or rehydration is a technique to which client side just for static HTML webpage delivered you through static
[00:47:57]  hosting or server rendering into a dynamic webpage by attaching event listeners to HTML elements. Okay. I think this, that is a poor definition. Yeah. Let's dive into
[00:48:08]  that. Because the problem is yes, you attach event handlers, but I mean, it's, it hasn't been realistically attaching event handlers, just attaching event hand
[00:48:23] lers for like a decade. Um, in our really early days of, of, of the web, we would have, you know, used a server based technology to
[00:48:32]  render and draw a page and stuff, you know, like I'm thinking multi-page apps. The, the, the, our background of multi and single page app is
[00:48:40]  actually really important from last time to understand this, but something like Wikipedia, which I'm pretty sure is a multi-page app. Yeah. You know, your anchors
[00:48:46]  would listen around like how much on here actually requires that much interaction. Um, I mean, these are all. Yeah. We, we should probably level set as well
[00:48:55] . Like what's the starting state and why aren't, why can't event handlers be attached when it comes over the wire initially from the server? I mean, just
[00:49:04] , just, just before we get into that and they're talking about frameworks that use hydration and all this. I just, what I want to say is the events are important
[00:49:14]  because that's how we interact with our page. but an application is more than just a bunch of disparage events across the page like if you have a you know a shopping
[00:49:26]  cart is a classic example and you click add to carts or like somewhere down here the cart reflects it up there how do they communicate between each other right like like even if you
[00:49:35]  just attach that one event handler um there's more logic and back in the day you just server render it and then you kind of write the second app on top of your
[00:49:47]  app where you kind of like go you write you know you'd be like okay on this button click maybe do something imperative like update the dom over in over here you know and
[00:49:58]  and but you need state too because if you wanted to do something like see like what they like do something with that item count maybe you'd also have to like store it into
[00:50:07]  some in you know a location javascript so you could read from it and that was fine and it would require very little javascript but unfortunately like it can scale at
[00:50:19]  a certain point you're just like no like let me actually write a single app perhaps right and that's part of what made single page apps so popular so yeah and an app
[00:50:30]  is made up of a couple parts you have the literal elements the view you have the jquery code right there so yeah you you have your your view your ht
[00:50:42] ml you have the event handlers which are basically the points at which the the the view is is waiting for you to interact with it and then you have what those event hand
[00:50:53] lers actually do which usually involves state this like client side data that allows yeah yeah i mean even yeah i mean knowing what we know about frameworks we can say all that stuff
[00:51:08]  which is why um obviously this definition is is terribly limited because while i guess if you the funny thing is i don't know if hydration was used a ton as a term
[00:51:22]  back when it was the jquery days because that that was just what jquery did the whole idea of hydration or rehydration where it usually started from was the
[00:51:31]  suggestion that well not just that but that like it was rehydrate it was like it was like some work that was already done on the server that like and i i
[00:51:40]  feel like that really came into its own when it was the javascript responsible for rendering on the server because otherwise like jquery on a rails page or whatever a ph
[00:51:53] p page is it like it wasn't rehydration that was just jquery like that's what it what it did no like you didn't need a term for that
[00:52:02]  can you pull uh michael's uh comment so this is what you said right to get the server rendered app into the same state that it well i guess same state as
[00:52:15]  if it had been client rendered another way of saying that is like what you said which is get it into the state that it was on the server sort of like i know the
[00:52:22]  server doesn't really like fully render it maybe but like the idea is that the server does a bunch of work to get the view and then it just ships the view and then
[00:52:30]  the client is like okay i have the view but like how do i make it an act right and the thing is the more complicated the thing is declarative is kind of
[00:52:41]  um an inversion of control in a sense where instead of writing imperative code you're like no describe it and let the other thing handle it and once you get into this land declar
[00:52:51] ative which is really nice for writing things that synchronize because you don't have to worry about the details of that synchronization you can that off um unfortunately it just means
[00:53:01]  that you you kind of abstract away your means to just be able to do this do that because it's a system in place now so um yeah it's kind of inevitable that
[00:53:15]  we move away from that and in terms of actual hydration yeah um i i guess we go right here as michael said there's a few things you do you have to
[00:53:24]  download the javascript you have to find the places in the dom that are of relevance to attach event handlers and but more than that you actually have to kind of restore
[00:53:35]  the application state in such a way so that like when you perform the next action like do the thing you want to do it's actually in the right state um you know
[00:53:44]  initialize the right way because if it's not like you like you you know if something server rendered a certain way and then you you just start with like a base app that
[00:53:57]  doesn't have that information like you you you're going to be in a weird like what you see is not what you get you actually have to make sure that like your state
[00:54:06]  variables in your components or whatever are all reflecting what you're seeing on the screen otherwise you're going to get crazy glitches and and doing that i want to like go
[00:54:15]  full circle here so doing this stuff right downloading javascript um finding the nodes even attaching the nodes all of this takes work this work has two main problems one is that it
[00:54:27]  takes time and bandwidth from the connection and the other is that it actually takes cpu time to like go and attach all the nodes right honestly it there's there's there
[00:54:38] 's even more than that because there's the yeah i mean there's there's execution time yes sir i guess you're right there's execution time sorry memory which is holding all
[00:54:49]  of the stuff like all the dom nodes all of that that that takes memory too yeah i mean but the framework itself when it's an operational state is going to take memory
[00:54:58]  i i'm mostly worried about the fact that we have to execute things before we can interact with them right and that we send everything across the wire twice right so let's elaborate
[00:55:09]  on that point sending everything over the wire twice we're sending the view the final quote-unquote state and so like what are we sending it yeah here okay let's talk
[00:55:21]  about it well it's because generally speaking we send three forms of things and that is we send the what i call the template or the component code or like the thing we
[00:55:34]  need to be able to render the the the the template and this is because um things update in the client we need code to be able to update it right so it's kind
[00:55:43]  this i feel like this is out of order like the first thing that you think of is the final html right yeah so like the server does a bunch of stuff
[00:55:50]  and it's like okay this is what the the html looks like after the the the react code is run and then it sends the html but it's not
[00:55:58]  enough to just send the html you have to send all of the the components that generated each piece of the html in relationship to each other because you never know
[00:56:07]  when the html needs to change you need to remember how the html came about right and then the other thing you need is like what if you loaded some data
[00:56:16]  on the server and that's reflected in that html like you loaded as a list of tweets or of uh stories and you can interact with them like if you don
[00:56:27] 't have that data in the client the state can't reinitialize like if you tried to click on one of them it wouldn't know what entry in the database it
[00:56:35] 's supposed to update when you click upvote so you actually need to send the data um not just so that you can actually restore that state so what ends up happening
[00:56:45]  and i mean we've shown this before i'm going to use just so that you guys don't think i'm like picking on other frameworks i'm going to use solid as
[00:56:52]  an example here but essentially we you'll see this list of stories here and this list of stories if i if i if i we've done this on stream before but this list
[00:57:03]  of stories is going to be reflected here like we're going to see what do we got uh um in here we've got like the name of this and in our anchor
[00:57:13]  you can now ask google like you see the title you see all the information about the story serialized into the html which makes sense this is the final view but if
[00:57:22]  i go down to the bottom here we're also going to see script tags with all the data it's serialized again um and this this this happens in all declarative
[00:57:32]  frameworks that have to do this restoration so essentially um we've sent data twice we've we've we've um we've also sent the component code twice in a sense because we
[00:57:46]  we have to be able to display this html so we can like have it here but we also have it in the components like if i if i could find it
[00:57:53]  and look through you'll actually see components with the code to generate this so one thing i want to go back to is your wikipedia example because this is architecturally dependent
[00:58:03]  i think so let's say so you you said about wikipedia like hey this doesn't need a lot of like interactivity a lot of hydration but if you built this
[00:58:12]  using solid like the same example as the hacker news example it would be sending everything twice right even though it doesn't and the reason for that is because when i navigate to
[00:58:23]  this next page here i'm not going i'm going to the server for the data but i'm i'm rendering this in the client so i need the code to be able
[00:58:32]  to render these new news items again so i need it to be in the browser i need the javascript or the template version of it and i need the finalized h
[00:58:41] tml and that's that's the whole thing here if you do client-side rendering you don't send the realized html so you just send the template and
[00:58:49]  the data so you only send it once and if you have something that's 100 static you just send the realized view and you don't send the template or the data so yeah
[00:58:58]  is this is this so this basic version of hydration because we're about to talk to talk about like 12 different versions of hydration but this version where you're like sending things twice
[00:59:07]  you serialize the data and you send the html and you make sure that the way the html was made like the components um the templates are set across
[00:59:18]  is it can we call this like the next js approach yeah yeah it's basically every single single page app framework svelte remix next i want to bring this up because you
[00:59:29]  know when i when i came to to the solid community i thought next js was not single page app i thought it was a different thing called ssr and your point
[00:59:38]  to me was that no actually it's just a different way of doing a single page app why because all the stuff you do in a single page app right the sending the templates
[00:59:49]  to have the browser render your app is still done in a framework like next js but this something is added on top of that which is the html is rendered beforehand
[01:00:02]  the initial html and this is the whole thing when we were talking about routing last time because with when you have a single entry point for every page you can make even
[01:00:11]  if you static generate 10 pages when your code starts you have a single entry point and this kind of takes us to where i was going here because like this is my very poor
[01:00:21]  attempt at drawing twitter but what you can see here is that the twitter is a single page app is that there's a lot of sections and stuff on your page and when
[01:00:33]  people talk about hydration we kind of we kind of go into this but there's this is the visual tree you see but behind it if you're writing code and i only started
[01:00:41]  writing this and it so i apologize that this is not perfect yet but there's a single root of your app and under that root there might be this say side nav and
[01:00:52]  that side nav might have you know some buttons on it and the tweet buttons and the maybe the twitter icon or whatever um and essentially you know like i can draw a few more
[01:01:03]  of these to you know for fun you know under the nav side here you know but essentially these these are fairly fixed on the nav side but the other thing that you're going
[01:01:18]  to have is you're going to have a um a router pretty high up here because although this doesn't change this whole section swaps out i'm on a profile page
[01:01:27]  but if i went on the feeds page it's gonna it's gonna swap out right basically this whole section i'm gonna just write that in a little maybe a dark green i
[01:01:37] 'm gonna i'm gonna highlight that this whole section here swaps out and we talked about this before in one of my other streams on nested routing this is this is
[01:01:46]  your first level of your routing and then maybe there's another layer of routing like a nested routing layer and i'm gonna make this one a little lighter green and it's
[01:01:57]  right here on this page actually i'm not gonna make a lighter green because that green is hard you can't tell the difference i'm gonna make it like um orange but
[01:02:08]  and there's some more nav buttons here but just to kind of fill out our tree a bit when we get to our router we're going to choose a page and maybe that
[01:02:17]  page is is our profile page let's say let's let's just call it our profile page um and profile always one character short right but and under our profile page we
[01:02:34] 're gonna have like uh components we're gonna have like uh we're gonna have um we're gonna have again we're gonna have something like it's almost mirroring the same
[01:02:46]  nav thing again but we're gonna have like a i don't want to call it like info top section so i mean you if you've written apps you know how this
[01:02:55]  this is like let's say info section and then there's also gonna be like another router essentially to to handle handle this and the info section here might have more things like
[01:03:08]  more things in it like the what do you call it like the hero image things like um bio and it might have a thing like uh a tap the tabs tabs okay and and
[01:03:30]  you know i can draw a few more arrows here kind of link these up um and okay i don't have to get into too much more detail on the page i think
[01:03:43]  everyone's kind of built things like this and i i want to add one more thing to show them the nested routing a little bit on the other side but essentially you can
[01:03:54]  see that this is a tree right and on on under the router we're gonna we're gonna choose another route we're gonna choose this one's gonna be because there's
[01:04:06]  a couple routes but the first one is your like my feed essentially right there's also like uh tweets and feet tweets and mentions or whatever i'm just gonna say we're on
[01:04:16]  the feed page like like my twitter to match this up yeah and i'm not gonna worry about what's in that feed for now but yeah you you have the ability to you
[01:04:30]  know like also it's kind of interesting when you when you do it on twitter you get the loading spinner yeah yeah twitter twitter is a single page app but what i want
[01:04:40]  to show you is that some of these things are fixed like the nav like they don't really change that much but then there's things like the router which swap and so there
[01:04:50]  there's a profile here but there's also like uh like i'm gonna call i said that was my feed i'm gonna i'm gonna make something that's just feed
[01:04:58]  which is like the main feed page right and there's also one for everyone else's profile right but i'm gonna i'm gonna do this for a second i'm gonna put
[01:05:06]  a dotted line here um and yeah i mean where else can we where else can we go on twitter obviously well you i mean i'm saying like your one yeah so there's
[01:05:16]  home which is what i i just called the feed but there's home and then there's um i'm not on very many communities but there's home and what's this
[01:05:25]  is this uh messages okay i mean i'm in the wrong bar view if i zoom out it's probably like a bit it's what i'm actually drawing um yeah but messages
[01:05:34]  here sure sure so uh let's let's just go back to my twitter drawing and go there's home and then let's add another one here and call it messages what
[01:05:50]  i'm trying to get at here is there is this tree of what you see and what you don't see essentially right and uh and like there's a tr the tree
[01:06:08]  that's present and even these other trees that aren't present and when we talk a lot about things like code splitting in single pitch apps it's being able to just split off
[01:06:16]  these trees so there's other things that are under my route too um other arrows we haven't drawn them on but there's there's other ones dotted over here behind code splitting
[01:06:26]  here is connected to the idea of lazy loading right yeah uh and and the i and the idea is if you had to load the whole app at once it would be freaking
[01:06:36]  huge right for every single page so what a single page app does is it kind of it does this kind of uh code splitting lazy loading to kind of split it off but the
[01:06:47]  reason i want to just show this tree is there is an active tree when you first render the page and then there's all the other potential trees so um we don't have
[01:06:56]  to worry about those other trees right now but i think it's important to to recognize that um they exist and that there's a decision point because the thing is if you
[01:07:07]  are client side rendering router is a great one there's other decision points if you switch from profile to home you need all the code at that point to render home and if
[01:07:20]  you switch back to profile you need all the code to render profile well hang on you just rendered profile before nobody right but new data okay right well then i mean can't it
[01:07:34]  be smart and just replace the data well i'm not with a real realized um like you need the template to do it because with the realized html you can't
[01:07:44]  take html i mean you can try but it's not you can't take html and get back to the the the template well i guess i guess what i
[01:07:51] 'm imagining like in solid is that when i go back to profile we need new data so we like run the the resource again and the resource just updates all the things that depend
[01:08:01]  on it that's sort of what i was thinking in my head right but you you you need to know i mean where's that html coming from like i was thinking
[01:08:09]  we had it it was in the background somewhere because we it was that it was the initial active page right but even then like look look at the generated html like
[01:08:19]  how do i know that what this 120 is right we okay we know right so so i was imagining in my head this like solid app state but like we we don't have
[01:08:31]  that anymore no no the whole dependency tree of state is lost yeah yeah and it's not just that it's not to the state dependency tree it's also like how that
[01:08:42]  corresponds with the view um you you like like where like is this a template or is like how do you know where the split is of of the templates right like how do you
[01:08:54]  know what what a template is here there's there are some indicators um for some things because you can see the this is from hydration hydration actually makes good use of the ht
[01:09:07] ml all we were talking about like pre-hydration right right right but but yeah like yeah but see hydration i actually have markers here you can actually see the templates being
[01:09:16]  wrapped by a hashtag open slash close like there are actual markers in the html for hydration but what i'm getting at is even with that it's hard to like extract
[01:09:28]  backwards like you you need to know that like this one is tied to a specific data field that's not encoded here yeah yeah so so yeah and i'm reason solid
[01:09:41]  but literally every framework like like single page app framework works like that and that's just the nature of it so what i'm getting at is if there is a decision point
[01:09:55]  in the tree we need all the code below it right this this this is this is kind of the the starting point of where this the whole hydration conversation starts because if your mindset
[01:10:12]  coming in is a single page app unfortunately because of the nature of this if you know the client's going to be rendering something that means that code needs to get there eventually
[01:10:23]  and short of building like a bunch of different bundles for the same page and have to figuring out how to dedupe the code or split it up granularly enough that
[01:10:32]  you only load the pieces you need generally the easy solution for this is ship all the code or at best all the code below the first decision point this nav can be static
[01:10:46]  for the most part um in theory most of the time though you ship that too because you have a fancy client-side router that has special link tags and you know handles the
[01:10:55]  stuff on the client right like if if you like if you take a remix page or svelte kit or whatever and you like if you remove all the javascript
[01:11:08]  yes it's progressive enhanceable but that's because you click an anchor and it redoes the whole page um and the thing is even um most frameworks like even like react router
[01:11:21]  or remix stuff even if you only focus your javascript over here this these navs still want the javascript to get the client-side routing the way they
[01:11:32]  work so you actually need react to actually get all the way up to the root um if you want to do it svelte kit is different and um solid is actually different
[01:11:42]  we actually use event delegation in our router so it's possible to actually capture events and actually have client-side routing without actually having these be hydrated but but generally speaking we
[01:11:59] 're still a little bit um trapped by that first decision point because when you switch between these you need all the javascript code below it okay so like in summary let's
[01:12:13]  see if i can like make this make what you just said as short as possible like even though the initial screen might be simple you're going to run into this problem of
[01:12:26]  you have to ship the code to render all the other parts of the tree when do you ship that and it's going to be a lot of it do you do that initially
[01:12:35]  do you do that when you click on it like how does this it's a lot of code right well that's the problem hydration and we've seen in my benchmarking
[01:12:43]  can take seconds on slow devices and slow networks so do you want to wait you can do it up front or you can wait to the person like clicks on it or scrolls
[01:12:51]  into view or something do you want to wait for something that's going to like picture it take like you have the whole app and you need to download and load the whole app
[01:12:58]  and it actually takes time do you wait till someone clicks on it like do you do like something where you just put a global click handler on the root and then okay anywhere time
[01:13:06]  you click anything we're going to delegate it to load everything no you don't do that because that would be that'd be worse than taking the hit up front because you
[01:13:14]  you'd just be deferring it to when they actually interact with the page so you um you you don't get to kind of do like unless you do something smarter here you
[01:13:26]  don't get to kind of progressively load in that in like a like a coarse grain chunk way like we just take the whole thing it just doesn't it doesn't make
[01:13:35]  sense because it's way too expensive when when the work you're going to be doing is the whole page i don't know if that makes any sense it's just like you
[01:13:44]  don't want to defer loading the whole page it's way too much work right and so and like we're not really talking about like ssr versus like no matter what
[01:13:53]  like we have this problem like you you know you have a normal create react app you have this problem well no no you don't this is an ssr specific problem
[01:14:02]  and i know because when it sounds like any client app but here's the thing and we talked about this a bit on last stream in a client rendered app it sends that blank
[01:14:15]  page immediately there's no delay so yes the client takes it but i showed you before solid client rendering can outscore some ssr frameworks in lighthouse because it gets
[01:14:29]  the page there immediately because it doesn't have to wait to load any of the data and then it does all the data fetching and then it renders it but the reason
[01:14:37]  is it doesn't send everything twice it sends a blank html page and it's like literally sends nothing doesn't it still take a lot of code to to render
[01:14:50]  it it takes it takes it takes a lot of yes it takes a lot of code so yes there is an issue there and it delays the api requests which on a slow
[01:14:59]  network are are bad but what i'm saying is like it it's actually ssr has actually made this worse is is is a better way of putting it because now
[01:15:11]  you're waiting for the data and you're waiting for the data on the server right and then and if you don't respond right away because you're waiting for it because you
[01:15:20] 're waiting to send the headers and stuff then once it's done getting all the data then it goes fetches the javascript and and then right so so in the server
[01:15:31]  side it goes like this the server fetches the data it starts it's it then sends the html with the data to the client the client still needs to fetch
[01:15:41]  the javascript on top of that is what you're saying yeah yeah well i wish i had our diagram from yesterday because our last week because this is exactly what we're
[01:15:48]  talking about yeah it's we we so and then it's a huge chunk that all executes and while that's happening well you have the benefit that the page is visual
[01:16:02]  right but you can't interact with it while you're waiting now for that big chunk to have to download and run and what we were just talking about is what if you waited
[01:16:11]  to hydrate it until someone clicked on something now you're just waiting even longer and taking the hit later so just deferring hydration is not an option and you know there
[01:16:23] 's an argument here that if your page works without the javascript like a progressive enhanceable page that like it's fine you don't have to worry about it but like
[01:16:31]  let's face it when you interact with a page without the javascript it behaves differently like you you reload pages you like it it's not the same this route example
[01:16:44]  is a great example like if you don't have javascript your home is going to go back to the server right and and another thing is while it's doing this it
[01:16:52] 's still chugging along and like i see this all the time with hydration so it's hydration is you like start typing and then like your the page glitches almost
[01:17:02]  like because like it's blocking if you've seen our lighthouse scores while it's hydrating generally speaking it's blocking so it actually affects the user um interaction so again progressive enhancement
[01:17:14]  is not enough you can't just be like well i got progressive enhancement who cares about hydration that that's that's not you you can't argue that your page works even without
[01:17:23]  the javascript because first of all it doesn't work that well and second of all you want it to work better eventually with the javascript and that process of
[01:17:32]  going from raw html with links to javascript is gonna feel like you're gonna feel it as a user that process right right so yeah it's it's it
[01:17:42] 's not it's good to have if something goes wrong you're so you on a really slow device you can't handle javascript like these are good things to have but
[01:17:51]  it's not a replacement right and it's not even like a mitigation technique either for like people who actually have javascript or have that expectation it's not it's
[01:18:00]  it's just it's it's just you know checking the boxes to make sure that your site is accessible to people you know and that it you know that that's that's
[01:18:10]  what this is about um so yeah so there's this this interesting question in background here which is like if hydration is this such an annoying problem like can i just like do
[01:18:21]  client-side rendered apps most the time and like be fine i mean i've shown this before a little bit um i mean but i mean there's a there's a simple
[01:18:31]  answer for this from a you you just go over to you pick a page with let's 255 comments it doesn't even have to be that expensive we'll just give
[01:18:41]  it a good slow 3g and for us in first world you know scenarios maybe we're fine you know okay there we go so that wasn't too bad the page only took
[01:18:53]  um six seconds and maybe that's that's fine because this page is is there's nothing to it but like what i'm trying to say is do you know so this is
[01:19:03]  this is this is server rendering what let's see what happens when we do that our same test on oh that was okay that was server rendering let's do the client side
[01:19:10]  rendering yeah yeah okay here we go let's run this again okay all right so we start with there we go okay okay did i wait long enough yeah okay i think i think
[01:19:31]  we're fine i mean there's some other stuff here because i've got extensions my my point is is okay so it's like eight seconds so it's it usually what
[01:19:41]  i see is on slow networks we're talking double the time i mean literally double the time this is not a terribly expensive page i don't know time until what still um i
[01:19:51]  mean this is the largest contemptful paint um because you don't have to worry about hydration on the client render so largest contemptful paint and hydration are like equivalent because by the
[01:20:01]  time it doesn't look just contemplate paint then it it's interactive at that point so yeah it's literally double the time from hydration to thing first of all you see
[01:20:10]  it way sooner actually in the in the server rendered version um but it's usually the little if you compare the actual interactive points the the server side rendered is so much faster why
[01:20:24]  well i mean it's because it gets to start everything sooner um it's like the data right that's kind of what it's because the data touching because you i'm
[01:20:32]  doing the data because it's not it's not the actual app code because you told me that was sent twice but what but what you actually get to save on is calling the
[01:20:40]  api right exactly because you started the api the second the server got the request here you have to wait for again i should have this like the other drawing on speed
[01:20:49]  dial send it back to you because it's on my screen yeah because escalator only lets me have one open at a time oh that's why here here's your um
[01:21:01]  here's the the png version on discord all right let's see that right what i'm saying is if you are if you are um sorry where was i yeah sorry it
[01:21:21]  it's it's this time here that we're talking about where you're processing the requests and ver and versus like this time here basically on a server rendered you know you
[01:21:31] 're doing all the work here and maybe this pushes that down but on a client rendered this happens quick but you still have to go get the js and have it come again and
[01:21:41]  this is where the data loads right so this is really important because like this here you start the or certain set of starting the database here you start the database down here yeah and
[01:21:52]  like this is like in your list of like the three things that hydration has to like repeat what wasn't on that list was talking to the api and that's really important
[01:22:03]  yeah you you have to do like two handshakes before you even get started um like this is why like the more staticky type approaches like don't scale this way as
[01:22:14]  well um when they have rely too much on client rendering and why remix was doing that next comparison and was kind of blowing it out of the water because the next example was
[01:22:23]  waiting for here and remix was like just do it here like it's not a heart it's not hard to see like why remix is way faster in this in that scenario um
[01:22:33]  like but generally speaking now if you're building a game you're not fetching any data so you might as well be a client side rendered you know right so what yeah i
[01:22:45]  mean this is a little bit of a tangent but i just wanted to it is important for us to to to at least understand um the importance here of of like server rendering
[01:22:58]  is still beneficial there's just like this gap this weird thing what we do hydration so this is kind of the baseline we're dealing with today and the question is how do we
[01:23:09]  get back to the old jquery days essentially is where the goal comes in and we've looked at this and attacking this in multiple different ways over the years um and
[01:23:21]  i was trying to think of how the best approach this topic because there's actually two ways i could look at it one way would be to look at it historically in terms of
[01:23:30]  events but the other way is to look at it you know kind of like my tables in terms of um how uh like mechanically like category categorically look at how i
[01:23:45]  i characterize solutions um because i use a lot of words you know um at least not there at least are not three letter acronyms but i use a lot of words to
[01:23:55]  describe um um characteristics or approaches to hydration yeah i kind of want to go to your your hydration article which was basically like a list of different approaches of solving this problem yeah
[01:24:07]  and we can sort of knock out each one and i want to like the the bad hydration you know where you're like rerunning everything can we call that like replaying
[01:24:17]  uh i don't want to do that because it's it's not a single one of the axes it's actually three of the axes if i call it replaying it sounds
[01:24:27]  like replaying is one of my axes essentially oh we didn't get to okay i don't i don't get to the axes yet okay gotcha we'll just call
[01:24:34]  it next js talk about that because it's not actually it's it's just like full like it's it's it's it's just full it's full hydration like it
[01:24:46] 's it's actually a combination of a number of things but it's the full we're re-running your app on the client that's full hydrate yeah so the the
[01:24:56]  first thing you can do is what if we just don't rerun your app at all and some frameworks boast their static routes which is like remove the script tag right and
[01:25:07]  now this is like by saying like the quickest way to get back to the olden days where we like render some php on the server and send it and like a little
[01:25:16]  bit of javascript so the best way to get to that is just remove all the javascript right we did it we did it you know yeah we're back
[01:25:22]  to that progressive enhancement story no one actually wants to do this but there are a few pages where that makes sense like our hacker news page we don't actually need any javas
[01:25:31] cript on that front page because it's just links and stuff but there is a difference because you know obviously hacker news doesn't matter but any page that you choose to opt out
[01:25:41]  of all the javascript for um sorry you know this csr mode any page the thing is if there's no javascript here and then you click this link
[01:25:52]  you're not doing client-side routing you don't get to actually you don't get to actually get into you into the client mode until you load that javascript by
[01:26:04]  the way would you say that approaches that basically say literally used i mean actually i'll use a better example x element someone in the astro community shout out to fuzzy um
[01:26:16]  has this tool that basically says cut out all your framework code and basically write modern jquery to like sprinkle in bits would you call that this approach to um maintaining two apps
[01:26:28]  um it's maintaining two apps but your your second app is so simple it's just like a few pieces of jquery right right exactly that i i don't have
[01:26:39]  a name for that some people call it sprinkles of javascript stimulus is on that side but but it's it's it's basically this approach right you don't need
[01:26:47]  hydration because your second app is like its own thing it's gonna do the work for you right the thing is the thing is when someone someone builds these static routes i don't
[01:26:59]  know that's even what they're thinking a lot of times like like they they're still not thinking that they're going to do the two app approach always and there are
[01:27:09]  exceptions where people do go in but like the the slight difference with xelement is it's it's still kind of that one actually might not even be considered necessarily too much
[01:27:19]  of a second half because it layers in really nicely and it kind of fits into the astros thing it's most it's kind of like an arc it it uses dx
[01:27:27]  to like help you write jquery easier you know right right and i've seen a few of those over time and even corset the from matthew phillips
[01:27:35]  which is kind of like css space is a similar concept oh i was looking at that that was so interesting yeah but but what i'm trying to get here is that
[01:27:43]  that that works because the way astros set up and a lot of the mpa stuff can you picture trying to layer that on your react app right that's weird because react
[01:27:54]  is a client-side javascript framework so you get to layer it in that way so i think but laravel is a better example of this right right um
[01:28:04]  do this in laravel right so mostly what i'm getting at is like that's kind of like when i keep on talking about like the how do we get back there
[01:28:13]  with the declarative frameworks it's it's kind of like the it's it's it it's kind of like that zone it's not something that i'd consider that the
[01:28:23]  declarative frameworks can really do um like like like you don't you don't really mix and match like that it's another one you use static routes it might be like
[01:28:32]  a little vanilla javascript at the bottom of your page yeah um but generally speaking for the most part it just means i've opted out into kind of like a static m
[01:28:42] pa type mode where there's no javascript another thing is like static routes for mpas and i'm like i guess so because my definition of a single page app is
[01:28:52]  a single code entry point and static routes have no code so they they aren't single code entry point another way of saying this is like if you go this if you go
[01:29:01]  this direction you just gave up on react you you've now just said react is like a nice way of writing php like you gave up on what it is well i mean
[01:29:09]  the funniest thing is there there are companies that have gone this way um netflix actually like like they used react and went this way yeah because i think they originally had a react
[01:29:23]  app and then they're like invested heavily on react and they're like oh crap it's not performed enough so they actually removed it from the client and then like render react
[01:29:30]  i don't know if they still do this but they were at least an article explaining how they rendered with react on the server and then like upgraded it um with javascript
[01:29:39]  in the client so so let's just like if you analyze that approach you just used react like php yeah and funniest thing is react this is a way to write render h
[01:29:47] tml and that's it we went over the slot stream react is not a fast way to render on the server in fact it's like 10 or 20 times lower than
[01:29:55]  using you didn't mention this netflix thing last time this is interesting yeah yeah yeah so yeah i mean i i i don't know if they're still on that but they
[01:30:04]  released an article explaining like how they did this really smart approach but essentially it's smart if you just wrote thousands of lines of react code yeah right so anyways what i was
[01:30:15]  gonna ask static routes is the thing but usually it doesn't it's it just it's a cool trick is what i usually call it i don't i think there are places
[01:30:25]  like very few places that it does exist that it's valuable but in those places you're like you probably shouldn't use something else but i mean it is an option so it
[01:30:33]  gives good versatility but i just want to kind of just talk about this one because it's just it's not um it's not the thing um i don't really
[01:30:43]  necessarily you know what i don't look the problem is i want to talk about a couple of the base things before i go into the other before i get into the other thing
[01:30:53]  we talked about this before um another thing that people have looked at is trying to reverse the data out of the html i the reason i want to talk about these first
[01:31:02]  is because these two routes you know are basically static routes and extracting the data haven't really panned out this one doesn't work well with react either does it no because
[01:31:13]  you need a framework that serializes and knows how to pull stuff out of the dom so you need a custom framework to do it there's a i the guy who created this
[01:31:21]  um ben he he's working on a new framework that i think does this even better and he's come up with ways to serialize additional data into the dom where it needs
[01:31:29]  to which isn't unlike something like quick um to certain degree but essentially this is not something you can easily do you might be thinking oh i can just extract data out of
[01:31:40]  the dom but sometimes the data using the dom is derived and you need the sources of that derivation in order to reverse engineer that you're saying let's just give the derived
[01:31:48]  example from your article you have a date in a specific format yeah how do you extract the original date data from that you know like it might even not even it might say
[01:32:00]  like august 12th and not save a year but like the original code had the year in it and you might need that in a different view of your app exactly so i
[01:32:08]  i just wanted to bring these up because like they're they're interesting but like and things people first think about but they they honestly aren't where we're making a ton
[01:32:22]  of progress we can say explicitly they they aren't where we're looking at because they don't make use of your client side framework like react or solid they're totally different
[01:32:32]  the only thing that i regret from this article is i talk about stuff i i i i talk about six different approaches in this article i think but the truth of the matter is
[01:32:46]  um there two approaches are built on top of each other i mentioned something called i call lazy loading which is progressive hydration and then later on here i mentioned something that i call out
[01:32:56]  of order hydration which is an extension of lazy loading and then here i mentioned something called islands or special hydration and i can't like we we should probably just talk about when
[01:33:09]  we get there progressive and partial hydration well this is just overlap and i'm like so confused that's what we're going to talk about it and and server components which is i
[01:33:18]  place as an extension of partial hydration and the thing is what i'm getting at is there these are ideas that build off each other and the reason is because there's three characteristics
[01:33:32]  that matter when looking at these hydration solutions that's that's that's the that's the that's the thing i've i've determined i've looked at lots of different techniques
[01:33:46]  and as i as i mentioned before um i i tried to kind of fill in the table so to speak um i don't know if you've if you yeah it was
[01:33:56]  it was a tweet right you're right but there originally was this table right yeah this table this table gives me a migraine this is the original version of the table uh i
[01:34:06] 'm going to do one here uh from adias money and and this table wasn't terrible but the problem is it tried to like it talks about first bite it talks about timed
[01:34:17]  interactive it talks about first contentful paint and it puts it all on the same table and defines these rendering techniques and shows like an example like this is gmail this is
[01:34:26]  netflix this is and it's not a bad idea i feel like it's involving the routing story too right and and people go except for this or and like there's the
[01:34:35]  comment here limited streaming and csr with pre-rendering is that true uh ssr with rehydration like like it gets really hard to know what these are
[01:34:44]  talking about because it assumes a lot about this and what ended up happening was addy came back and he made a bigger table and added a few more things but this is very
[01:34:53]  more things at our table this will help well i mean the problem is it it is complicated this is why we we did the last session because we we tried to break apart this
[01:35:02]  thing see ssr with hydration and then streaming can't can't streaming have hydration like how does it and what we did last time was we removed hydration from the table
[01:35:14]  and then made and by the way we got three uh two or three tables you know out of that conversation without ever involving hydration and like this is a table that's trying to
[01:35:23]  combine everything right and what where we got was an intersection between routing paradigm and with um rendering right yeah so we didn't talk about it but what i've been trying to
[01:35:36]  get at is and maybe i'll just draw this somewhere over here is uh can i what what's the trick here if i move this up yeah i can move it up um
[01:35:46]  there's three axes here can i make a double harrowed line can i go like advanced excela draw here i don't really know yeah it's like can i
[01:35:57]  can i make an arrow that's an arrow on both sides yeah that's how you do it and then we'll we'll choose an exciting color that that reflects our our um
[01:36:09]  our our attitude right now oh that's exactly my attitude i'll tell you that yeah and maybe we'll make it a little bit thicker okay and maybe we'll give each of
[01:36:23]  these its own custom color okay so we have a purple one we'll have a green one and we'll have a um whatever it's cyanish okay this is fine we
[01:36:41] 're good we're good and then what i'm going to put to you is that there's three ends of the things and this is i'm going to do in black
[01:36:54]  okay beaker progressive uh by progressive is that a synonym for lazy or is it different uh it could be it could be lazy if that helps but well no i just
[01:37:16]  want to like because people use different terms to describe the same things lazy yeah it's because lazy loading and progressive hydration are different things which is partially all right cool we're
[01:37:27]  going to talk about that um uh harsh uh sorry what am i listening to um i mean full impartial yeah full impartial and then my last one here is replay
[01:37:48] able and resume mobile and you've seen these words um probably float around a bit recently um but essentially what i view this is that these things are not like a stepping stone
[01:38:14]  like it's not like you take partial then you make it progressive and then you make it reasonable it is not a one two three kind of thing these are three separate things and
[01:38:25]  i've made some tables on twitter there was a re recently uh a a table here about hydration strategies and the reason i wanted to talk about this is because it shows it like
[01:38:40]  a one two three thing and i want to kind of debunk that because because i think the definitions of these things are actually important and i'm going to show what these
[01:38:51]  definitions are and then i'm going to give you what my definitions are what this says is standard is everything hydrates at once okay which is what we've been talking about this
[01:38:59]  whole time this whole top down you know tree full hydration standard hydration and then the partial is like well some parts of the page don't hydrate at all what would that
[01:39:11]  be like the nav in the twitter example yeah but i mean it's this is you you can do we can if you can do better than that if if you know the page
[01:39:23]  is going to render on the server a lot of the techniques we're going to talk about right now once you get out of it's it's very very difficult but not impossible
[01:39:32]  but we're going to leave single page apps behind for a bit because it's very it's it's almost it's not impossible for single page apps to employ some of
[01:39:42]  these techniques but it's it's very very difficult and almost no single app framework today can support almost any of the techniques i'm going to talk about so like we're going
[01:39:54]  to put that aside for a moment and and the difference that we care about here between single page apps and multi-page apps and this might sound obvious is that when you
[01:40:04]  do your routing um the server handles the routing in the whole page app setup like that it actually does the rendering of the new content yeah yeah so in this thing they're showing
[01:40:17]  partial and then they show progressive is taking that same partial thing see how it's missing this and loading a bit first and then a bit later and then they show resum
[01:40:27] able as doing these kind of different zones in as needed with i don't really know what he's trying to do with the color dotted lines versus the well he's colored colored
[01:40:40]  lines but the in all of these examples you have some html fully loaded at the get-go well you have all the html yeah you have all the
[01:40:51]  html fully so even though in this bottom example it looks like it's all dotted it's just not hydrated yet but it's fully visual it's like the hacker news
[01:41:00]  example with all the comments are already there at the beginning and that's why this is a difficult um thing to look at because i'm going to try um to to kind
[01:41:10]  of display a different um definition for these and some of it is partially due to historical reasons and it's convenient for me to think of things this way and i'm actually
[01:41:27]  just just gonna because i actually wrote them down on a table that i shared on stream a few weeks ago ignore the table just read the definitions right so we have progressive is to
[01:41:38]  load javascript and hydrate on an event or interaction so the routing example was kind of like where i was like hey like when you click on home that's when
[01:41:52]  you load all the javascript to do home right right right but but the thing is it's not on navigation we're talking about hydration here like initial load so it's
[01:42:01]  more of like if i mean picture if i mean perfect example is on this comment page this is mostly static it's the idea that when you click on this at that point that
[01:42:15] 's when you load the javascript to do this action so there's basically what this what this does is it takes that idea of splitting code splitting and it says code
[01:42:26]  split so much that you can load just a bit of code from a from the server to run uh the thing that has to happen when an interaction occurs right the tricky part about
[01:42:40]  that is it's it's not exactly necessarily simple to do because components talk to each other they have props there's contacts and whatnot so generally speaking this is where the m
[01:42:51] pas come in because if and these all play together but generally speaking the most basic cases you could say that when this clicks load all the javascript for the whole page you
[01:43:02]  could say that that's nuts that you could register a handler at the top and say on any click load the javascript for the page but usually what we do is make
[01:43:13]  smaller pieces i just want to explain that progressiveness isn't about the size of the pieces it's about the fact that it loads progressively and that could be a click it
[01:43:24]  could be scrolling so you oh your point of saying that it could load all the javascript so in that example where code splitting sucked but you just waited a while before like
[01:43:32]  you wait until interaction to load all the you're saying that is progressive because it waits yeah okay right i i mean there's some people would say that if it's just
[01:43:41]  a single chunk that it's not progressive but you are loading it as needed maybe it's at idle time maybe it's on scroll or something like maybe it's a single bundle
[01:43:50]  it doesn't matter but actually i like uh gray restful's example of uh loading the code for you're interacting with a fancy text editor right but it depends often those
[01:44:05]  cases i mean it depends if it if if it's hydrating it then it would fall into this but often those cases are what i call lazy loading because you like show a
[01:44:16]  fake image and then you actually like render oh okay okay that so that's different um lazy loading is when like you don't really have anything at all but hydrating is
[01:44:26]  when you have all these like html elements that that you need if your text area was fully interactive and with this hydration strategy you are progressively loading the the events and yeah
[01:44:39]  and those events i said they don't have to be a click they could be a scroll like an uh an observation observer or whatever right so we do it more granularly because
[01:44:49]  the javascript is too expensive to run we just went over why it's way too expensive but like talking about this eager versus progressive is all about waiting yes it's
[01:45:00]  all about when do you do it so is it all at once at this extreme or are we loading it as as needed and usually that involves code splitting i'm saying that as
[01:45:12]  needed from the most coarse grain thing and i'm talking about granularity because it's going to come up here that it makes a difference a bit is from the most coarse
[01:45:21]  grain perspective it's just waiting to load everything until you need it yeah like that's why i don't think you should have said like did you really need all at once or
[01:45:29]  or what you meant was at the beginning like you said eager is all at once but that's not eager that's full yeah yeah sorry i yeah at the beginning eager is
[01:45:41]  is is that it's eager it doesn't wait for an event or interaction okay so yeah that's actually a really interesting point so yes it's useful for us to like think
[01:45:52]  of these axes as different even though in practice you're probably going to mix them like this was great so like the example of progressive like yeah it would be progressive if you loaded
[01:46:02]  all the javascript way later but like in practice you probably want to combine progressive with something like partial which we'll get to right exactly and yeah so yes and and
[01:46:13]  this is why i have an issue here because this sounds like this is a progression it's not these are it's just this these actually can happen together and they are independent i
[01:46:25] 'm going to get here for a second then i partial and this one's the weirdest one for people because partial is like oh it means not all the javascript but
[01:46:32]  there's implications of it partial is not as simple as saying all or some of the javascript it's it's it's will it ever need all or some of the
[01:46:43]  javascript partial uses the knowledge of server versus client to only ship code and serial serialized data um that's needed in the browser so what i mean by that is remember
[01:46:54]  how on a static page we didn't need to send any of the data because we knew we didn't have to do the double data thing because we knew we'd never
[01:47:02]  need it if you it's not enough to just load some of the javascript as you need it to be partial because you could potentially load that javascript which means
[01:47:15]  you don't know that you don't need to serialize that data which means and tree shake the library let's say you don't know you know how frameworks are tree
[01:47:24]  shakeable like you like you can use some features like svelte and solid use this a lot that they they only ship the features the browser that you use in the framework
[01:47:33]  because the compiler kind of helps that along um i'm going to uh quit this now um what i'm what i'm trying to get get at is you don't get to
[01:47:46]  do that if you don't know what's on the server or what's on the client so partial is the absolute knowledge of what is gonna okay so let me let me
[01:47:54]  try to repeat it back to you and see if i understand this so let's talk about um the axis of partial i think now my discord is freaking out at me so let
[01:48:04]  me quit mine um let's say we're eager so we're we're loading everything up front so if i we're sorry not everything we're loading up front if i
[01:48:15]  have eager and i'm not partial i'm loading all the javascript i was running on the server i'm loading it all on the client yeah but if i'm eager
[01:48:25]  and partial i'm smart about it i think to myself hmm like there were parts of the library maybe i don't know what's a good example suspense is probably a bad
[01:48:34]  example but like there's well i mean even go back to um a page i mean it's i always marco is the came up with partial hydration as early as 2015 mar
[01:48:47] co too so i can always kind of show this it's like this is showing a whole page hydrating marco's like look we know on the selling page the only
[01:48:55]  things that are interactive are the cart button and the and the and the add to cart so partial is like kind of going look you can't do anything with these pages we're
[01:49:06]  only going to send the javascript for this and we know that a hundred percent um from from the authoring experience astro is another example of a partial in that you
[01:49:19]  know that you you say this is an island the stuff outside the island never needs to i like i like that they call it code elimination because code elimination fits with how you
[01:49:30]  like let's say we're doing this in solid so like you write your app it's different than in astro because they are you as the user know but like let's
[01:49:39]  say you write your react app the idea of of of partial is that like somehow the framework will know that like this there's there's no events here something like that right
[01:49:54]  yeah and as i said astro react server components and um even marco four and five to a degree kind of have waves of knowing this in marco it's like does
[01:50:04]  your component have state if your component doesn't have state i mean like in this paragraph it's compiler automatically detects which components only need to be rendered on the server how
[01:50:13]  does it know that well some of your components don't really do much right they just render stuff yeah so yeah i mean from marco today that's not too complicated but it
[01:50:24] 's and it's very similar to stuff like astro and it takes us back to our tree for a second here because um like the the challenge here is the thing is
[01:50:36]  if you're in a multi if you're in a multi-page app and you i we mentioned that we need these full trees in in a in a in a client rendered
[01:50:45]  app because we when you go here you need to be able to render this and you go here you need to render this whole thing but if this is a multi-page app
[01:50:51]  and the routing happens on the server this decision point isn't a decision point anymore it's fixed you go to this page it's always the profile in fact in a multi
[01:51:02] -page app there this detaches like each of these has their own code yeah so like in an mpa you don't have this idea of like a agnostic root
[01:51:13]  the idea is you have one root for home one root for profile etc yeah exactly so while the nav is going to get rendered there too as a separate thing it's isolated
[01:51:22]  because this root and this router components are are are not present in the mpa and in a sense this router isn't as well so it's it's basically i mean i
[01:51:33]  don't know how maybe i can show this the idea of an mpa is like the the server like there's there's no there's no such thing as a living router
[01:51:44]  if that makes sense yeah that's not gonna be enough that's kind of i don't know why i described it that way right so i'm saying is in mpa
[01:51:52]  suddenly this happens where these routers are taken out of the equation essentially yeah and now you have one app here one depending on which page you are see these are dogs so one
[01:52:08]  app here yeah one app here you have you right the right and let's let's click like you're like there's an app at my feed and it looks a lot
[01:52:20]  like the the closest one in the tree to it um so even though there's like separate apps they reuse the same code they just run it in a different way i'm not
[01:52:35]  sure i'm all right never mind let's keep going that was i'm getting tired okay all i'm trying to say is that we have new entry points instead of these
[01:52:43]  single entry points we now have new end points and there's no decision points so we can basically go oh this is static there's no class nav here so even because this is
[01:52:53]  under it's like because this is under the server thing there's no sharing this whole island there's nothing interactive here i mean there's a tweet so maybe that is but we
[01:53:03]  can basically go okay well nav actually doesn't need to be there and it's only this tweet where i think so you push you pull all the static stuff out and you
[01:53:12]  just have the these these these top level entries which we call islands essentially so your one page becomes these multiple apps but you got to use a declarative framework to render them on
[01:53:26]  the server and they just are set up with tooling so that they split it into multiple apps and that's basically what astro and marco um do and that's what
[01:53:37]  partial is because the thing is in these scenarios where it's partial if you load the data above the partial thing the only data you need to serialize is the data that you
[01:53:47]  pass in as props you you into your components because essentially they can never be fetched again because they they were fetched on the server and there's no stateful interaction
[01:53:58]  that could cause them to fetch which means that that data can never change so the only and since the data has to come in like even if this is fully dynamic and does different
[01:54:07]  stuff with different pieces of the data you would have had to pass any data it would ever need in through the props which means that's the only data you serialize so the
[01:54:15]  data that you use to render these other components that are in static trees never needs to be sent to the to the server and that's what i'm talking about with serial
[01:54:25] ization you use you use the tree to know that you don't need to serialize that data you don't need to ship those components and even more if these used features of
[01:54:34]  the framework that you don't need to not even to code split the framework and only ship the features being used in the browser so let me let me reiterate just so i
[01:54:43]  make sure i understand when we say use the tree you're saying if a component sends some data to a child then the state matters and you need to send that data to the
[01:54:57]  client if it's a stateful child or an island if it sends data to a a component that's never going to get rendered in the browser then that that data just
[01:55:07]  doesn't matter anymore right so it it basically knows when you're using when you're using data to shove it in a p tag versus when you're using data to like manipulate
[01:55:17]  um yeah i mean you sort of like it's the the client and the islands the client entry points are the are separate apps so you just need the data you need to
[01:55:30]  be to enter those separate apps essentially you just need because that data can never change it's static um because it's rendered on the server so it and it's cool because i
[01:55:43]  said it means for stuff like this hacker news page i showed you all the stuff that we we we serialized here but if i go into you know uh i don't
[01:55:52]  know what do you call it astro accurate news um uh let's actually i'm not going to use astro i'm gonna use marco um uh hhn dot mar
[01:56:09] co use marco if i go to this page has no javascript so it's not going to serialize anything but if i go to a page that has comments
[01:56:18]  what you're going to see here in the script is almost nothing like here's the script it's just telling marco where the top level entries are but if i go into
[01:56:27]  i don't know it doesn't matter which one i pick let's pick remix um if i go into that and go to the comments what you're going to see is um
[01:56:38]  are they going to make me go to the network tab and pull it out of the html because they delete it after but what what i wanted to show here is
[01:56:48]  they're going to be sending all the data serialized you see action data state track boundaries or actually can i pretty pretty it yeah where is it we're going to see all
[01:57:01]  the comments right here and this this is not utilizing partial right yeah exactly it's a single page app framework like uh svelte or next or whatever yeah so so okay
[01:57:15]  well is this really cool technique that partially like i like the idea of calling code elimination where basically it says but it's more than code elimination it uses the knowledge of the server
[01:57:28]  versus client to only ship the code and serialize the data needed in the browser right so one of the things we were sending in hydration is the ability to recreate a component
[01:57:42]  and this knows which components need to be recreated later on and if it's and if a component is just rendered once it doesn't send any of that information all it does
[01:57:55]  is send the final html exactly and right now talking about these two almost fast forwards us to like this year like on up from 2015 when marco first released commercial
[01:58:10]  hydration till till um to um 2021 um when quick um kind of started came on the scene and like uh marco six this this is this is all um this this is
[01:58:26]  all we had going and we we've been talking a lot about components right this is where the game kind of changes because essentially marco had partial hydration um we i mean we
[01:58:37]  see it was it doing that eagerly you would say yeah exactly so so looking back at our escalator marco is eager and partial right and and then i it's
[01:58:50]  funny i put react server components on here too they're a little bit different but they are also they use the same laws of multi roots like kind of like partial hydration and they
[01:59:02] 're also eager and partial um basically if it's white in my diagram it means that it's the opposite side of the spectrum so these are replayable eager and partial essentially
[01:59:14]  as in once you get into the island wherever it is you see this profile once you're in the profile you're you i mean we can we know for the profile that it
[01:59:25] 's mostly static so what we're going to do is we're going to get into the info and there's going to be like you know a like button or follow button or
[01:59:33]  something once we get into there and we have the dynamic part everything from that dynamic part down is replayable so when when the app starts up it's eager so it loads
[01:59:43]  the javascript right away and runs it right away and it replays just the small pieces and but it's small because it's partial so eager partial replayable was basically
[01:59:57]  every and replayable is really important because it allows you to recreate components with the new new state right yeah replayable just means yeah you run it top from the top down
[02:00:07]  like we've been talking about so far we're going to talk about are we replaying like when we say replay are we replaying the execution that happened on the server is
[02:00:16]  that is that what we're talking about then you try and start with the same initial state and then you run it again and you don't do any rendering yeah i'm kind
[02:00:24]  of wondering why we're calling it replayable and not like replaying like replayable implies we're going to replay it again later on right and that's is that true
[02:00:32]  it's just yeah i mean it is it replays it that is what the hydration is when you when you do the hydration so we're not talking about like hydration lets us
[02:00:44]  do more replays in the future we're saying just the act of hydrating what is it it's replaying the execution that was done before exactly so and this is
[02:00:54]  because that's how frameworks work they're all they all they all replay essentially is is the thing so you know in our in our diet in our thing here you see react server
[02:01:01]  components and marco are actually incredibly similar and we didn't actually see kind of component level or like can i can i guess because like i'm not really i don't really
[02:01:14]  know a lot about either one is the difference between them that you can call uh you can call your react server component code again later on yes yeah but because we're only
[02:01:25]  focusing on like hydration right now that distinction doesn't actually matter um like yeah that makes sense so you know yeah so it wasn't actually until um astro that we saw
[02:01:39]  progressive enter the thing and not do it eagerly um is the simplest way to do progress to to do progressive is like have just a little a little intersection observer be like ah
[02:01:51]  when you get to this part of the page in view hydrate that the simplest way is go load this in a request idle callback okay what's a request idle call
[02:02:00] back that means that once the browser is done doing what it's doing then do it that's what we did when you go an astro and go client colon idle that is
[02:02:10]  right that is the trick that's what we were talking about on the astro stream with fred he was like i wish that was the default he's like he's like
[02:02:20]  it's just it's just like an easy win and we saw it it took astro's benchmark from 66 the astro solid benchmark from 66 to 96 because of just
[02:02:29]  deferring and being non-blocking obviously when your page gets larger that might not be an option you do want to be eager a bit because you're just deferring the
[02:02:38]  inevitable but when your stuff is really really small um you and i'm just talking about like the the main part you there's always things that you want to defer but ast
[02:02:48] ro made it really really easy to do this because they have all those client directives you know client load client visible in other words astro said choose your like you choose how
[02:02:59]  you want to wait choose the wait until right like exactly so and it's it's all kind of and it's all component level and that's essentially the the thing that
[02:03:09] 's kind of the state of where we've been to date and you can do this with this existing frameworks as long as they're mpa and the reason for that is that
[02:03:17]  as i mentioned before eager to progressive you could theoretically picture how you could do that in a single page app you could kind of like just split it up and like if as long
[02:03:26]  as the framework supported pause and resume hydration which some frameworks do support any framework that supports um streaming has to support pause and resume hydration if you think about it like react called
[02:03:41]  selective hydration because because essentially you render part of the page hydrate part of the page while the rest of the page is still coming in and then you can resume and hydrate
[02:03:50]  some more pause and resume hydration is a different concept than the the green axis we have right yeah yeah well i'm saying it's progressive it's actually i'm sorry do you
[02:03:59]  see the confusion like if you say positive zoom i'm just saying that it's progressive like any framework that has streaming is progressive so technically speaking a single page app framework could
[02:04:10]  do progressive hydration if it figured out how to upload the code it's just a little bit awkward because it has to run everything top down so you can't you can't like
[02:04:21]  hydrate something down here before something here because of context and props and stuff so like i don't think it's really feasible i'm just saying you could picture that it
[02:04:31]  would be possible if you could break things down enough that you could do something progressive in a single page app however partial using the knowledge of server versus client is basically impossible in a
[02:04:41]  single page app framework because you need to render the stuff in the client all you can do is try and do like multi-bundle techniques it becomes very difficult to
[02:04:51]  to actually in your in what we were talking about where what you're doing is checking whether something is sort of inert or not you you could do that in an spa you could
[02:05:03]  be like oh that part that component you know needs to like uses its props and that component just renders props that kind of thing yeah i mean in theory if you could serial
[02:05:16] ize the props down the tree then you could do some amount of progressive or eager but you can never change the fact that it's going to load eventually in the client in a
[02:05:26]  single page app which is why when people when single page app frameworks tell me that they're going to add partial hydration i'm like do you have you look at partial hydration do
[02:05:36]  you understand what it is um because it's like it's it's not something you just add um so you basically you're saying routing is important to making partial hydration happen
[02:05:50]  yes um it's the only thing that really it kind of like sits on okay um because i do actually have like if uh not this one where is it i i did
[02:06:05]  actually make more more more uh tables here because the partial see i have i have partial and i have i have eager progressive like we've been talking about so just to kind of
[02:06:20]  get into this what is bundled none is nothing so i put none in full here just to kind of show um none meaning it's client rendered app none none meaning that
[02:06:34]  it's it's static route oh i just needed to show it somewhere so this is just not interesting so really we're partial to full is is our spectrum here and partial is
[02:06:45]  what's bundled the interactive islands what is serialized not very much just the the the props that come into the components essentially into the yeah because you don't need it like
[02:06:57]  the the staticky parts you don't need to serialize that that's because you just care about the end html yeah exactly so you only need the stuff you
[02:07:05]  need in those client components yeah and routing not client essentially we had all those routing techniques from the other day and all of these could support partial except for like client routing like like
[02:07:20]  all our common routers like things like react router and stuff don't you don't get to do partial hydration with with that like unless you change the architecture essentially um you
[02:07:31]  know into the kind of getting into a different zone you don't get like you don't get partial hydration in something like remix or svelte or whatever so or solid start
[02:07:40]  really for that matter i mean you could build a new architecture in there but like using the router the way they are today you don't get that so essentially that that's
[02:07:51]  kind of the whole partial story we've been talking about but then eager i had nothing to really say here other than when you go from eager to progressive the thing that is most
[02:08:02]  affected is when you're eager the thing that takes a hit is the time to interactive because it takes longer you're doing all that processing work up front and when you go progressive
[02:08:11]  the thing that that takes the hit is the first input delay or like so the idea behind this is like okay so the first thing so this is why you were saying the
[02:08:21]  idle um i'm never going to remember the function that it's called but the the idle thing is kind of a free win because you're not waiting for an interaction you're
[02:08:30]  waiting for the browser to be done with what it was doing so it just like it's it's it's as close as you can get the only problem with idols the
[02:08:38]  second you go yep i'm idle and you'll and then it starts doing it and then the person's like i'm doing stuff now well you're not idle and right okay
[02:08:47]  fine so your idol is like your best guess that the user is still taking in the yeah it's it's tricky and you can look at it and do some heuristics
[02:08:54]  i'm just my my gut if people know where i sit personally is that progressive is overrated like generally speaking i think it is necessary and i think there are places where you
[02:09:05]  should be progressive but just treating it as the default and be like i'm zero k but be like default is not a reasonable place to be once your page gets beyond a
[02:09:15]  toy demo like there is critical js there's a certain part of the page like the if you look at your page and and and you go this is above the fold like there
[02:09:26] 's 10 to 20 kilobytes if you're getting progressive below 10 to 20 kilobytes you're probably hurting yourself more than you're helping yourself right and and that
[02:09:35] 's kind of the idea of critical js sounds to me why you want to combine partial with progressive because that that lets you load the stuff you really need sooner right because if you
[02:09:46]  have progressive without partial you don't know like you can't be that eager like if you're you'd have to load everything you don't know what you don't have it
[02:09:55]  you know if yeah and then you have to use interaction to make that decision like you have to use clicks at that point because you don't know that you can't render
[02:10:06]  the rest of the page if you don't use partial so partial is like the the it's very in my mind very very important um because it it as i said it makes
[02:10:15]  things smaller it makes things um yeah okay and i want to show more on that so that's what we're going to keep moving along here because because i want to get
[02:10:26]  to our last arrow which is i'm really yeah i'm really sort of the last arrow i build the the later it gets the stupider i get so uh so let
[02:10:34] 's talk replayable links resumable because this is a newer thing it's funny i i it it's i i mean these other ones i mentioned i i mean mich
[02:10:45] ael mentioned that that that pre-act and view were doing some stuff like astro before after was doing and that's true i i did load up an article about similar islands
[02:10:57]  progressive loading island techniques in pre-act from 2019 so that is true um but i mean they were like these little kind of side projects astro is the first framework that
[02:11:09] 's like this is what we do like this is the framework um partial is obviously marco's made its name for itself on on partial astro uh pro does progressive partial and
[02:11:20]  progressive like that it's kind of been where it's made it resumable pretty much goes completely to um michael hebry and and and and quick even though uh
[02:11:31]  we on the marco team we independently completely independently kind of like uh uh isaac newton and leibniz or whatever like found the same solution i you go
[02:11:42]  back wait is marco doing this now resumable yeah yeah oh yeah because yeah yeah marco six um is resumable partial and eager uh isn't the whole
[02:11:58]  i all right you have to explain to me how resumable can be eager but whatever yeah we'll get there yeah this is what what i want to get is that but
[02:12:08]  i i watched uh recently mishko was talking about resumability in 2019 he had this all figured out when he was working on the angular team and he's like
[02:12:18]  i know what i want to build i just need the means to build it so this has been his his his dream this resumable replayable thing and it's funny we
[02:12:26]  got that that's how steve tells it he's like i found this guy who knew what he wanted to build but he was stuck on the angular team well and this is
[02:12:34]  the part of the problem right and i mean sometimes with angular ember i see these huge huge engineering efforts that solve probably really big problems but they never kind of they don
[02:12:44] 't always translate down to the end user so you get this kind of interesting thing that when you're like looking for innovation and frameworks you might not be paying attention to them like
[02:12:52]  ember worked on this really cool bytecode thing for compressing um their templates that improves like template speed and i did a little experiment and i'm like if the templates aren
[02:13:02] 't the right size it's this is an overhead it hurts performance but for whatever they were working on glimmer it actually mattered and angular was working on ivy which is crazy
[02:13:11]  engine and at a a time when everyone was like felt like get rid of it here's the angular team i feel like this is like my classic example of this is no
[02:13:19]  one except for you can explain to me why the react vdom is better than the preact vdom and it's because it only matters when you're working on these gin
[02:13:27] ormous projects right and the thing is that i i feel kind of bad about it because i look at like every framework i can and study the implications and learn all the
[02:13:40]  stuff and the secrets and the performance and stuff angular is not on that list um it's never been on that list i actually say you don't really you're not really interested
[02:13:48]  in it i just it never it just part of it was a learning like to like it was a thing but the other part was i was like looking at the problems they were
[02:13:55]  solving and stuff it never occurred to me which is why we never if we had seen misko's talk two years ago we might have been or three years ago we might
[02:14:05]  have been in a different place instead of we completely independently came to the same conclusions and redid all the same work even though he basically explained it to everyone three years ago because
[02:14:16]  it's funny because as i said if if any other framework had done it i probably would have known about it but it's it's it's it's kind of funny
[02:14:26]  um but where i was getting at is um resumability is do not repeat any work in the browser that is already done on the server which so far seems totally counter the
[02:14:41]  idea of hydration which was basically go run a bunch of this code again right um misko heavily says that resumability is not hydration which it's like it's not
[02:14:52]  even that important to get into that semantic discussion we can just call it like because you can talk about hydration by the the the technical means but you can also talk about hydration in
[02:15:04]  terms of the end goal which is you want to get your page interactive and that's what we're talking about with resumability that's the thing misko has this
[02:15:13]  great article where he explains it all in detail and he starts with the wikipedia definition and when i was helping you edit the thing i'm like can we find a different
[02:15:21]  definition because the wikipedia definition says that hydration is just attaching event handlers and you're going to try and explain to everyone why hydration is super super expensive because it does
[02:15:32]  all this stuff but you start with the definition that says it's just event handlers so it sounds like you're maybe inventing all the stuff for for the hydration and
[02:15:40]  the the real rub of it is resumable hydration is just event handlers like so you you come back to the original definition then is resumable hydration because it's
[02:15:52]  it agrees with what wikipedia says hydration is so yeah let's let's let's talk a little bit about how how you accomplish this so the like on the replay
[02:16:04] able side of the spectrum what you're doing is pulling the code um that creates the components like pulling like you're pulling much javascript what it like what is that
[02:16:19]  what is that javascript it's like all the jobs it doesn't matter whether it's partial or progressive or whatever once you get to where the code has to run when
[02:16:33]  you're resumable you just run that code downwards right right this is this is an important point that you make in your article that in my opinion can be sometimes hard to
[02:16:42]  understand when you get to the point where you're doing hydration you cut like if you want to hydrate this component and it's in a tree you have to like hyd
[02:16:51] rate the entire tree something like that like what's that point you're you trying to make about about like starting somewhere you have to render all the way down yeah yeah yeah i
[02:17:00]  always show that yeah like like once you go okay i need to hydrate this info component because it's stateful it does something you any of these things could re-render
[02:17:10]  and you in well it's actually really simple because they pass props and you pass state through you're kind of trapped once you hit that that that dynamic point that could change
[02:17:21]  in the client and the reason for this is because well most frameworks have something called components and you got to render those components one thing like if if you let's say info has
[02:17:33]  an event handler in it so you want info to be interactive you have to load profile too if profile passes props to info right well only no only props that could state state
[02:17:44] fully change if profiles props into info are if profile doesn't have state itself like it doesn't have like uh like something that can change these props will never change which is what
[02:17:57]  i'm saying is like if the source of the state was higher up the tree you have to render the thing up the tree right yes because that's how the frameworks work
[02:18:06]  right because they render based on components because that state could change that component needs to re-render which means you need that code which is how i ended up on the marco
[02:18:16]  team if anyone's interested because they were like they're like okay this is really tricky problem to solve we don't want to send all this code down here when we know that
[02:18:25]  this hero is static we don't we don't want to do this and and then it's like oh but we've got to re-render the components and then like
[02:18:34]  solid js it was like components aren't a real thing yeah it actually plays into it because the answer to the stuff actually is going more fine-grained it's actually fine
[02:18:45] -grained reactivity is actually the answer to the whole hydration problem um yeah but that that's a bit of a tangent but what i wanted to get at is that
[02:18:57]  yes once you get to that point it's top down and to be fair i said that fine-grained helps us solve this problem but it's actually it's more than
[02:19:09]  that we just need we can't rely on only serializing our inputs like our props coming in if we want to actually resume where we left off we need to serialize
[02:19:24]  all the state yeah this is kind of one of my biggest questions in reading mishko's article was that it's not super clear to me as a reader what what is
[02:19:33]  app state and what is framework state why are these two different things and and like what does that mean yeah i mean and and that yeah he introduced it as as two concepts and
[02:19:44]  things app state is like the typical stuff that you serialize it's this it's the where is it it's it's the json stuff that i'm not serial
[02:19:52] izing in marco but i'm it's it's it's like this state this is app state okay so okay yeah but like framework state is more of like the internals
[02:20:04]  that the framework needs to do like if you're in react you need to be able to see if you want to resume you actually have to know what state all the hooks
[02:20:13]  are in right uh it's okay it's it's it's kind of it's it's the whole like memory versus storage concept right right right because the whole thing is and
[02:20:25]  in reactive system you'd have to serialize the values in your com in your computers and your signals and all that stuff to actually do it and that means all that stuff
[02:20:36]  needs to be serializable which is kind of can be kind of awkward right so this is kind of like in order to do this in order to pass on the frameworks like literally
[02:20:48]  pass on the execution kind of from the server to the client don't you need a custom like can you do this with a react can you like serialize where react is or
[02:20:57]  do you need a custom react custom you you need to you need a couple things you need to be able you need something that will that can aggressively serialize itself like all
[02:21:07]  its state yeah and send it across and be able to restore it from it and you also need your renderer to render um enough stuff into the browser especially mishko always
[02:21:17]  focuses on this html element thing most hydration actually uses html and script tags and all that keeping passing hierarchical data through the dom during hydration is pretty standard
[02:21:29]  but um but the thing is you need to do a little bit better than that like you you saw that in um in previous streams you might have seen that that that that in
[02:21:43]  quick there's uh let's pick something yeah i love these little net these you'll see all these q objects and what he he's he's serializing it this way
[02:21:57]  but you there's other ways to do yeah i mean you could you could serialize by like sticking something in the head right right you could put the script peg there we do
[02:22:06]  need some hierarchical stuff because like if you if you if you if you if you can also do stuff like like like here where let's see what what's inspect here because
[02:22:18]  this is this example here is resumable um this is marco 6 by the way um like there's some markers in here that give it the information it needs you
[02:22:29]  don't necessarily have to serialize the thing there are event handlers which quick does for delegation which which help there and marco has a slightly different approach but essentially you have
[02:22:41]  to serialize some stuff into the dom and then essentially um uh oh that was what i was looking for it's this one you you have to basically serialize enough information
[02:22:53]  so that you can do the event delegation so you like know what where the events that you call there's two parts of this you need to serialize enough so that when someone
[02:23:04]  clicks on events somewhere in the tree you go oh i know what the handler is without running the code top down and the other thing you got to think of most event hand
[02:23:11] lers have stayed in them like set update some state and if you never ran the code to initialize that state you actually have to basically hoist that out into some kind of
[02:23:21]  you need to have the reference in the serialized data where that state lives so you you basically have to do this crazy amount of serialization so you can hoist everything
[02:23:34]  out flat so that they can all be run independently and this is what misco explains this article and it's incredibly complicated and i can understand it but the the key part and
[02:23:43]  the reason i introduced this concept this way is being resumable doesn't mean you have to be progressive because it doesn't mean you have to wait to load the javas
[02:23:52] cript to do that click it just means you don't it just means you don't run things on the in the browser you don't need to because the thing is when
[02:24:01]  the page loads you just add those event handlers right and then nothing happens you are interactive at that point if you're progressive like quick what ends up happening is you go here
[02:24:14]  and there's no there's no javascript code on the page at this point and then you click this and then he loads the javascript but in marco right
[02:24:24]  yeah this is what i want to know about like mishko's version is it's almost like the way he explains it it's almost like you've got to be
[02:24:31]  progressive to do this in in the marco version right here um that's funny is this this version's slightly different size than the other version doesn't matter uh in the in
[02:24:45]  which i had another one too which one's hn uh or sort of marco six yeah let's this isn't the netlify version um but what i wanted
[02:24:59]  to show is in in in the marco version which also is resumable the javascript loaded right away but it it's still not going to do anything at this
[02:25:09]  point until you click it that's when it executes it it doesn't it doesn't matter when you load the javascript what matters is when you actually run the
[02:25:19]  code because the difference is with replayable you have to run code to make it interactive you have to like go through and run the components with resumable you you don't
[02:25:29]  need to run the code and the first code that gets run is when you actually interact with the page and quick at that point you load the javascript in marco you
[02:25:38]  just run the code so so so what you're doing here is like that is you're separating the loading story from the execution story so in mishko's example he
[02:25:49] 's like yeah you know what we do like we we we set up these almost like placeholder or like factory events where like when you click on it it says oh let me
[02:26:01]  go figure out what to do and then do it whereas in marco you have all the information needed from the beginning you have all the javascript all you do is
[02:26:13]  well your benefit is that that javascript is just about events you're not loading how do i build a component right well yeah yeah yeah yeah exactly but the thing is it
[02:26:26] 's because marco's partial so marco knows so it doesn't it loads it eagerly but it knows that it knows what it doesn't have to load without it
[02:26:35] 's it's partial and and it's resumable in the sense that when something when when something does need to be interactive it's way you need to send way less information
[02:26:48]  than if it wasn't resumable because all you have to do is send well no let's can i go through my table this might help you see replayable you have
[02:27:00]  to execute the components resumable you don't you have to restore the state on replayable resumable you don't it's all serialized for you i've
[02:27:07]  added this column because misco doesn't talk about this but you always have to run client side effects because let's face it if you have something that only runs in the browser
[02:27:18]  you need to do that today and quick they actually run the browser stuff on the server because they have the browser on the server but i don't know if that's going to
[02:27:24]  stay because that's a huge what if you have a console lock like or an alert right exactly like like there are always like it's like the on mount or the create
[02:27:36]  effect and solid you need those to run on the browser and the problem is you can't load those like those have to like you can't load those progressively because like the expectation
[02:27:45]  is that they're they're there when the page loads so you have to do that so these get hoisted out um it quick has an event for it specifically where you
[02:27:55]  can register code for it in marco our effects just get pulled out of the components you don't have to run the component to run the list of effects and then you have
[02:28:03]  to attach the global event listeners and then the execution cost for replayable is pretty high it's running the whole tree i said resumables low it's literally just running these
[02:28:14]  two things right because essentially if there was no event handlers i mean you wouldn't be doing much but sorry if there's no effects all you're doing is going through
[02:28:23]  and i think miss misko has an example in his article um like all you're doing essentially if if if there's no effects you're just going through the list of events
[02:28:34]  and adding the event handlers the global event handlers and they they know how to um use the information that's serialized to call the right events because they've all
[02:28:43]  been extracted out but this when i say low i mean like really low like literally this and and any like like the alert or whatever we talked about so okay but there's a
[02:28:56]  trade-off here because replayable you just serialize that one chunk of data resumable you have to serialize almost everything and and the reason why is because you
[02:29:09] 're not restoring state but you still need state right like you're not running the components to get to the state where for the event to work but the event still depends on all
[02:29:22]  that other stuff you it's a really simple idea the server already did the work of calculating everything for you just send that along so you don't have to run it again so
[02:29:32]  in a sense resumable it isn't hydration because it doesn't do the hydration dance because it already rendered on the server but the thing is the cost here is the
[02:29:42]  serialization is high and i think this is important because the bigger the page gets the more complicated it gets this becomes concerning how big the resumable like how high it is
[02:29:53]  so essentially when you're resumable you want you might want to be progressive from the sense um that you know if things get really expensive like really complicated you maybe there
[02:30:06] 's too much code but for like in my opinion just kind of sit here for a second what actually counteracts the effects of resumability is partial because if your serial
[02:30:18] ization cost is high partial eliminates serialization automatically because it just says only load that serialized data when you need it well it's not no not when you need it partial is
[02:30:30]  like you know sorry we're not talking about progressive i was thinking progressive okay yeah no see progressive doesn't help you save serialization well yeah it just moves it moves the
[02:30:41]  time it has nothing to do with serialization because progressive just like when the code loads but well i was saying if you have a bunch of data to ship ship it at a
[02:30:49]  good time but you're saying you can actually reduce the serialization itself right because you it because of our tree right when you when you when you like you know that you
[02:31:00]  don't have to serialize this data if you're not partial you have to serialize this data because you don't know and if you're resumable you literally have
[02:31:08]  to serialize everything whereas if you're partial you know not to serialize that stuff and we're talking component level if you could get this if you could somehow get partial at
[02:31:18]  a sub component level where you're only talking about the stateful paths then you can reduce the serialization even more so essentially essentially what i'm getting at is like res
[02:31:32] umable is a trade-off between execution and and like bandwidth right like essentially low execution because you serialize everything partial is all about reducing the serialization and the code
[02:31:48]  so like and then progressive is making sure that the code shows up like in pieces so like you you want all three ultimately yeah but the thing is for your critical code you want
[02:32:03]  it to be eager and you can't be eager and not load all the code unless you're partial and if you're resumable like you're basically saying that the
[02:32:20]  reason why marco is cool with being eager is because it's so good at being partial exactly which basically fights the resumability i mean if you want to understand a little
[02:32:31]  bit about about what this actually looks like we only have to look at the the difference between between like the the these these these these frameworks right did you do a quick hacker
[02:32:45]  news yeah that's what we're looking at oh yeah sorry yeah so you know if we're talking astro yeah let's let's do astro so like none of them
[02:32:57]  need to use any javascript on here because they're smart but once you go to a comments page i was boasting you know how solid astro is only 4
[02:33:07] .8 kilobytes it's really small because it uses that partial information really quite well right and and it manages to do this right and we saw marco 5 also before
[02:33:20]  but marco 5 is a little bit older right 18.7 kilobytes it it it's it's and actually this is something that beat adds which is garbage we can
[02:33:30]  ignore this one so it's actually more like 17.8 kilobytes but essentially um it kind of still uses the knowledge to save that serialization right um and what
[02:33:40]  i actually worked with omisco today they have a way of you manually telling the data not to serialize instead of being automatic if if you know what you're dealing with you
[02:33:51]  can save the serialization to a certain point and i actually did this i actually went through and did a recursive because i know that i don't use any of the data
[02:34:00]  here um i actually manually i'm sorry we say manually meaning the user the developer explicitly says this is don't serialize this i i made it a recursive non-
[02:34:08] serializer so it is possible with quick to do this it's just not automatic and you kind of have to know how your apps rendering and how state is used to do
[02:34:17]  it manually so let's be clear like quick is not really partial no quick is not partial no great okay yeah yeah like this this see it doesn't it doesn't really
[02:34:30]  look at your okay i get it okay so by the way one question i just realized i sort of had about resumability if you're resumable um you don't
[02:34:40]  really have let's say somehow i don't know solid you had a resumable solid you wouldn't have solid in the browser at the end of the day no well
[02:34:50]  i mean it would be a different it'd be different like you you need you'd also load the you were like what a resumable solid would look like is you would
[02:35:02]  hoist out the reactive statements out of the components so they're all like top level essentially and all the ways they communicate with each other all the signals would be in like a
[02:35:13]  large array let's say uh and when and you serialize the signal information like the dependencies on the server so you'd you'd actually run track all the dependencies while you
[02:35:23] 're running on the server serialize that and the value into the into this array and then when the app started up and you've hoisted out the events when someone say clicks
[02:35:32]  on something it would it would go it go and go oh this reads or sets the signal or it would go it goes to this place and location it look and go oh
[02:35:42]  this is a signal and it create a signal at that point with the set dependence like or like like it would basically like it would basically recreate from the serialized data the the
[02:35:54]  signal on the fly as you did your first interaction so and so because of this it doesn't really like let's say i have an app with a lot of interdependent
[02:36:05]  things where like one one signal will update tons of stuff on the page that is not an overhead with resumability because it's not like you're you're the the
[02:36:17]  code you're running or loading is like literally code to to update one piece of dom it's like you get you can get the benefit of something like a signal and a dependency
[02:36:27]  array even in a resume ability yeah what i was going to say there is there is an overhead because you have to serialize all those dependencies but okay but but from an
[02:36:36]  execution standpoint we don't have to run the app if that helps you for some reason in my mind right now is like a resumable svelte where you just have
[02:36:47]  thousands of like dom code like lines being run because i don't know no resumability in my opinion because is possible with single page app frameworks it's just the they might
[02:37:00]  not go that way because to be resumable all your state needs to be serializable so if your state everywhere is serializable it's tricky and one thing that like
[02:37:10]  as i as i mentioned is if you do at a component level um for serialization um you can kind of trust maybe the boundaries are a good place and like that's why
[02:37:21]  quick's got the dollar something like you kind of know where you're entering and exiting things um one of the interesting things about marco six's approach here is that it
[02:37:29] 's so granular on the reactive graph that we could even determine what parts the reactive graph don't need to be serialized and this is a little bit complicated but essentially if you
[02:37:39]  know that you're only ever going to resume as in like write a new signal then that means that any and it's like used in the dom you don't need to serial
[02:37:49] ize any that if there's no convergence of different values you don't need to serialize any of the derivations in between because it's already in the dom and when
[02:37:59]  you update it it's going to run from that signal downward again so essentially you you marco can use the reactive graph to actually skip serialization of intermediate values um because it
[02:38:12]  knows that they would never calculate unless you've set a new signal again so like this is getting super technical but with really fine-grained partial hydration you can actually reduce
[02:38:25]  the resume ability at like a graph level like that serialization cost um but it's it's it's a continuation of what you were saying before which is if you move from
[02:38:35]  the idea of components being important to the idea of state and the relationships being important you you get have a better overhead right right and i mean quick some quick breaks things up
[02:38:46]  by events by view and by state but it's gonna they're gonna start breaking stuff more up by state in the future i'm sure marco's everything's by reactive graph
[02:38:55]  state and as i said it's incredible when you kind of look at what you can do here because as i as i as i showed you like like marco five or four
[02:39:03]  or five is fine and it's kind of similar when you look at something i showed you astro it's like 4.8 kilobytes quick is interesting because when
[02:39:10]  you load the page you get nothing because it's progressive then when you click on it yeah you you load you i just mentioned uh this route is actually mostly uh is mostly uh
[02:39:21]  beat garbage um beat adds like a kilobyte to most things um but if we ignore that route essentially um we we end up so quick's like like 15 kilobytes
[02:39:31]  essentially because quick itself is 14 kilobytes and it only loaded about a one uh kilobyte for the one code if we can actually see it here i love this
[02:39:42]  you can actually this is like the toggle component it's a little hard to see but you can see toggle on render on click minus plus collapsed it basically knows that it only needs
[02:39:53]  to serialize this this little or not serialize it only needs to send the code for this thing when we click on it because it's pretty fine grained so nothing
[02:40:02]  else loads it's quick itself and this component um but when you bundle it if you go in it i've got like a i've got like eight or ten files bundled
[02:40:10]  because quick doesn't know which components could load so it's kind of interesting so and quick doesn't know what features you load so quick is 14 kilobytes and it loads
[02:40:20]  this one kilobyte um thing when you interact with it astro using its partial knowledge all in is 4.8 kilobytes because it like solid knows only what
[02:40:32] 's used and astro knows what's used so we're able to tree shake most of the code away so it's super super small um to do this and as i mentioned
[02:40:41]  marco 5 was kind of big but marco um marco 6 is 1.6 kilobytes all in that's the whole framework all the component code for this
[02:40:53]  page is is 1.6 kilobytes so it's able to use its partial knowledge to such a degree that it doesn't serialize the data it doesn't send the
[02:41:05]  components it doesn't need and it doesn't and it tree shakes out most of the library just for reference spelt's runtime is 1.8 kilobytes so this
[02:41:15]  whole painting is how does and this skills really scales well with you know with marco like marco you're never building a marco app and you're like oh i wish
[02:41:27]  this was progressive like quick because this is well i mean yeah you probably will but like we don't know how far this goes right because we haven't tried it right because mar
[02:41:35] co 405 we saw on ebay reduced 80 of the code so our 400 kilobyte apps are 80 kilobytes with like turning partial hydration on so it is
[02:41:47]  possible in those 80 kilobytes that we'd want to progressively load something conceivably so that's about the range i feel i feel like once you're building apps where
[02:41:57]  you're talking about half a meg compressed of javascript then in my opinion that's probably when progressive starts mattering um yeah and let me because we have to start
[02:42:08]  wrapping up because my brain's falling apart um each of these three frameworks marco quick and astro are missing one of the axes right so astro is is missing resum
[02:42:19] ability but it's progressive and it's partial yeah uh quick is missing um partial but it's progressive and resumable and marco is missing the progressive stuff so um
[02:42:35]  cool that's very beautiful honestly i feel like we should just make a new table where that's all it is um because there were there was like some other stuff in your table
[02:42:46]  we should do just those three because those three are such good examples um yeah and so there's this this idea like because you know astro is only one of these things
[02:42:55]  i use and i'm thinking to myself well what if what if astro what if one of the islands was like a resumable island yeah i mean yeah i mean that
[02:43:04]  has definitely crossed my mind being an author of a framework that is also not on this table um but um yes i think that i think that's interesting the the biggest yeah
[02:43:16]  the yeah the biggest thing is because they they they because quick handles progressive and marco handles like partial there hasn't been really an incentive to to work necessarily with astro
[02:43:29]  because like they cover yeah they cover that yeah i want to do a new table that's just these last three columns effectively because i wrote here there's still some nuance here like
[02:43:41]  progressive plus resumable does a decent impression of partial because it doesn't like load all the code and partial plus resumable removes a lot of the impact of progressive like
[02:43:50]  we're saying like you have to go yeah you like you like like i mean this is stupid example you know but like like like here's the thing we talked at the
[02:44:01]  beginning about how we could get back to to um where we need to go and it's funny jacob ebay from remix team i think he was kind of annoyed at
[02:44:11]  how like after that whole progressive thing that came out there's that thread on twitter where um essentially see you can see why this table is kind of misleading but there there is
[02:44:23]  a thread on twitter a while back where jacob had said something along the lines of like there'll never be a good partial hydration demo because it's like too hard there
[02:44:31] 's there are none and it will never come to fruition due to the sheer complexity required at compile time right and because ryan was asking about partial hydration demos and then i was
[02:44:39]  like i was like well this is marco five two this is marco six like you can see the the the obvious benefit here right and marco marco six is
[02:44:54]  like yeah i mean depends on the task sorry where's remix in on these three uh lines i mean the same as it's the same as uh every everything it's eager full
[02:45:06]  replayable why oh right because they because they like the idea of your static yeah progressive enhancement thing right yeah but what i was trying to get at here on on this whole
[02:45:22]  kind of thing thing is because of this um jacob actually made a demo where he's like look we can go static this is the the brutal page right and what he
[02:45:34]  did i love this is he turned we talked about not he turned off react in the browser and he he what did he do here i love this one uh let's see
[02:45:45]  if i can get the the page here he turned off react in the browser and he wrote a he wrote a script here under the serialization data here we go document add event
[02:45:58]  listener click so global event listener look for the class list attributes toggle so this this uses vanilla so this is what i'm going to call the javascript right we were
[02:46:10]  talking about what it would take and i i actually grabbed this minified it and g zipped it and it's uh 230 bytes right we just replaced react with you know right
[02:46:22]  for this page it's mostly static so essentially for 230 bytes on a php page or an astro static or react static page that's how much javascript it
[02:46:32]  actually takes yeah to add this this functionality 230 bytes of code so you're saying like this is a perfect demonstration of partial because the idea is like everything's static why do you
[02:46:46]  need react right right but here's the thing yeah i i was amused by this because like ultimately going out of your way to actually write this whole thing is like kind of
[02:46:55]  like my point because like marco six you just write react and what do you get marco six it's 1.6 kilobytes versus 230 bytes so yes mar
[02:47:03] co six is eight times larger than the vanilla javascript needed to hydrate this page but you write it like react yeah very small multiplier when you don't have to think
[02:47:15]  about it astro even it's 4.8 like what's that that's uh what times five times but astro is loading react no no it's loading solid but
[02:47:29]  yes this is my point like if you were using react it would be loading react so yeah yeah i mean yeah i mean that's but i'm just saying astro solid one
[02:47:36]  of the smallest combinations it's probably like there might be some way to get x element or something but that's basically in our vanilla thing i'm talking about fully to click
[02:47:43]  like fully declared yeah you don't have to write a second app yeah yeah i'm pretty like this one's felt might like edges out by like half a kilobyte or
[02:47:50]  something let's assume this is about as small as we get with astro that's 20 times larger than vanilla but we're still in good shape because just think about this because
[02:48:00]  next js for the stupid page that is mostly static that just does this when you when you when you think about it as in marco's eight times bigger than vanilla js
[02:48:13]  and next is 83 so next is 83 and remix doesn't improve on this does it oh i mean a little bit remix is 62. but like but like effectively the architecture is
[02:48:25]  the same in terms of it has to load 63. so yeah i mean you i mean pick take your pick uh essentially um next is 400 times larger than the vanilla j
[02:48:39] avascript you need and remix is 300 times larger than the vanilla javascript you need so yeah yeah so so essentially the this this is this i mean this is a stupid
[02:48:51]  example you know in that it's like so simplistic but what what what i'm i'm getting at actually sorry i was on the wrong page i should put the javascript
[02:48:59]  for this page yeah so 62 yeah so roughly roughly speaking yeah that that that's that's that's that's why this is this is kind of such a thing like in
[02:49:08]  our vanilla js not jquery because jquery is actually like 20 kilobytes itself but in our vanilla js example which you have to handwrite and go through that
[02:49:19]  it's it's it's small marco has made this to the point that it's eight times smaller and like our con our like react frameworks are 300 to 400 times
[02:49:31]  smaller like let me see like something like solid or svelte which are in the teens those ones like svelte's 20 kb on this one right so that would
[02:49:40]  be what two times five times so that'd be five times 20 so svelte is a hundred times bigger than the vanilla js but like you know what i mean like
[02:49:50]  it's just it's just i mean i don't know if that's the right comparison to make but i just what i'm getting at is there is a lot of room
[02:49:57]  to improve um there and as i said this this is the closest we've we've seen yet 1.6 kilobytes for for fully interactive server rendered hydrated well not hydrated
[02:50:10]  resumable page is is is quite a nice thing right um i mean so let me just because i can't really think technically anymore it's that time of night i
[02:50:23]  mean if quick says like let me just like the players here if quick says you can write literal react they're just gonna blow remix out of the water because the only the only
[02:50:37]  reason why people want to use remix over marco is because it's react right well i mean here's the thing though there are trade-offs for mpas which are
[02:50:48]  which are which are real right we can't ignore that mpas have or a quick relies on an mpa yeah if you want to get this code savings yeah that's what
[02:50:58]  what i'm saying these are all multi-page apps so this is still the split right um i'm just i'm just i'm gonna use the hack i'm using
[02:51:07]  the cloudflare version of all of these just well i don't have the cloudflare version of this but netlify edge is probably close enough but i'm just
[02:51:16]  yeah let's let's just do this um i might have to run a couple of these a couple times but let's just just kind of wrap up because we know what
[02:51:31]  um we know how uh it goes for um what do you call it for for for frameworks like remix and next and solid start but we we can't we have a hard time
[02:51:42]  getting over 50 on this page like it's it's it's almost it's almost impossible for us to get over to get over 50 um on on on this page and
[02:51:54]  let's see here this is that brutal page that we we're all aware of brutally and now that i'm doing this live i'm okay right now this let's make sure
[02:52:14]  i hope that okay this one's not going to work because it's story um let's watch like something my internet failed me now oh let's let's double check that
[02:52:28]  this url is right one that url is right so why is paid page speed is is is not being nice to me today so maybe we don't get to do
[02:52:44]  to do what i want to do what i wanted to here that's that's too bad i wanted to i wanted to i wanted to i wanted to i wanted to see where
[02:52:57]  where we where we're standing this is this is this is why this is the fun part i ran this earlier and i was like i was like i was like okay we can
[02:53:08]  we can talk about this because yeah as i'm as 84 for the astro solid as i mentioned there is a hit now because of that first paint blocking but if you
[02:53:18]  look at it hydration is pretty good because the idle and the and the blocking time is pretty low right um let's get marvis the the thing is when i ran this earlier
[02:53:32]  i got 88 across the board for all three of these i was like i was like i was like there we go like quick has a bit heavier on the server rendering which
[02:53:43]  can sometimes time out the worker which is probably that's kind of scary and the ssr is so hard like so much work that it yeah so yeah i i mean yeah
[02:53:56]  okay here we go so yeah this the the yeah so the the these are all actually kind of similar the like 2.7 and then three seconds to interactive so like 0
[02:54:10] .2 or 0.3 on the hydration but very low blocking time for for this 2 30 for marco six um this was a really good blocking the idle probably helped it
[02:54:21]  a bit um this page load is taking a bit a bit longer let's let's try doing another run 87 quicks a little bit quick for some reason i there's
[02:54:32]  i'm getting more execution than i'm expecting on the hydration side and the and the blocking's higher for that um so maybe we'll give it another runner so although quick we
[02:54:41]  were having a hard time getting no getting uh let's duplicate this tab getting getting runs going forward so i'm i'm going to leave the other one open distance instead um
[02:54:54]  yeah even better for astro at that time yeah so i mean what you can see though um these frameworks um have the ability to where's my new quick yeah okay quick is
[02:55:13]  getting it's working sometimes and not the other time which this page is as i said mean so maybe maybe this is on the fringe of things maybe maybe i just got to
[02:55:23]  keep that result um i've seen quick get higher than this i've seen it get about 80. so i i still just one question like you could do resumability with
[02:55:33]  with like a sort of spa model yes but you but without partial you'd be serializing everything um and without progress yeah i mean there are smarter ways like you can rely
[02:55:47]  on other things than routes right i don't know i don't know what i'm saying at this point yeah i mean i i think part it's interesting i mean to be
[02:55:57]  fair quick um has more seriously isn't partial so like you you could use quick to mess single page app in theory i i'm trying to see i i see this this
[02:56:07]  world where like quick quick shows up and says you can take your react app and just run it through our compiler and now it's resumable right right or or like co
[02:56:18] arser resumable yeah exactly i think i think that i think that is uh like a reality a bit but i mean it's still yeah i you could do it
[02:56:30]  i think the problem is like if it's too fine-grained you got to do a lot of like the bundling is an interesting challenge right because if you if you
[02:56:40]  make the bundling super small you can only load the parts you need but you don't if you don't know those parts it's it's tricky to preload them
[02:56:51]  and and if you make the bundling too coarse the problem is that you don't know which pieces you need so you kind of pull in code that you don't need yeah
[02:57:03]  i mean if well if you make it granular yeah no that's actually a really interesting tension i'm surprised i understood what you just said at at 2am yeah yeah for sure
[02:57:15]  yeah yeah i'm gonna have to go with these as as uh probably i mean i mean i mean i mean the point is clear is that they're all pretty good they
[02:57:25] 're all very good on this page yeah i mean we we we're sitting here like trying to get the but it doesn't matter like the point is very clear like like like
[02:57:35]  well i mean the thing is i mean i i don't have to go here again but like you i mean uh you also started the stream off with an example of why
[02:57:50]  these insights are not that great sometimes right exactly because i i i mean you can look at the timeline and get a better idea uh page speed yeah yeah i think yeah i
[02:58:06]  ran that one again yeah uh sorry i gotta i feel like i gotta actually put the story i have to actually have to put the uh expensive page in yeah yeah yeah and
[02:58:24]  that's a point actually the point bringing react into quick would probably just be progressive and not resumable oh but that's not that's not that interesting that's just that
[02:58:33] 's no it's islands but here here i don't want islands and quick i have islands and astro right but then yeah so i yeah i mean it it makes it i
[02:58:45]  think it's interesting though because it means that there's there's more competitors in in this space kind of other than just astro but yeah look remix 46 um let's
[02:58:58]  do solid like the the these these are like they're like a whole different level do you know what i mean like like these these are scoring in the mid to high the the
[02:59:15]  mid to 80s right oh solid 46 too uh svelte shall we like like like essentially oh what happened did i put the wrong url in svelte hacker
[02:59:36]  news oh no right it's this one's on uh svelte is on a different one sorry just give me six seconds felt um it's felt pages dev yeah uh
[02:59:49]  it's felt pages dev it's still workers it's still the edge it's still the same same crap um you you get you get what i'm what i'm saying right
[03:00:02]  these are these are the single page app frameworks are like half of what the partial hydration frameworks are um essentially yeah this one gonna be 46.2 oh it's 44 this
[03:00:17]  time but it doesn't matter you you know what i mean like they remix solid start svelte kit um what's what's next yeah i mean now that you've now
[03:00:29]  that you've showed me all this i know a lot more of what you mean when you talk about whether solid start wants to be in the future or in the present yeah
[03:00:37]  because i mean let's let's do next too i mean these these single page app frameworks are going to struggle um here for for this kind of for this kind of workload
[03:00:55]  um comparatively right where's next 45 right so what i mean it's all this like what was it stalk it was 44 this time but it was whatever next was 45
[03:01:12]  remix was 46 solid start was 46 like at that point like like just yeah i mean it's they have to serialize the data which takes rendering time the hydration costs are a
[03:01:25]  couple seconds they they all block for about two seconds on this page like like it's it's just kind of the reality of yeah it's it's also i mean it
[03:01:36] 's it does bother me a little bit that we keep like using hacker news i don't know if i don't know if you know about what apps i create i create highly
[03:01:44]  interactive uh it's kind of it's kind of both content driven because it's like digital humanities so it's like content driven but like the islands are really interactive it does not
[03:01:54]  matter if you have a little bit of blocking time because like the reader is there to read you know to sit down right but and so it depends on what your use case
[03:02:03]  is yeah i i mean that's the thing this might not this when it sounds like i'm being harsh on these guys but i cover the frameworks that i like in here as
[03:02:12]  i mentioned kind of thing again like the things that i was interested in you know so if i'm talking about remix so i'm talking about spell kit or solid start and doing
[03:02:22]  this it's because i really like those yeah like and you know and and so when when they come out and you hear the guys on this remix cell kit going oh yeah
[03:02:34]  well think about adding partial hydration and i go like it's okay like you don't you don't have to do that like you can be an spa it's like or you
[03:02:43]  know make that decision when you have the information whatever but it's like as we mentioned like partial hydration and single page apps are basically incompatible so like like like like
[03:02:53]  it it's it's it's it's okay because here's the thing not everyone needs to be doing this uh like do you know where the where this maybe they're saying
[03:03:03]  use their isomorphic router to create an mpa yeah but i mean i i'm like you you you can't you just it's not going like then you're
[03:03:17]  going to be hand doing it and yeah like to me it's it's it's like this is okay like the only type of sites that probably care to this level are
[03:03:31]  e-commerce yeah i mean this is yeah this is kind of what why a lot of this you know i like me personally like i am and like most of the things i
[03:03:39]  want to build are kind of like spas um or they're they're sites where you want some of the content to appear really quickly but like the rest you can wait um
[03:03:48]  so it really does depend on your use case i think i think e-commerce is like such a fun example because it helps you argue about frameworks but your average solo developer
[03:03:58]  will never make one i'm not at all concerned let's all start score on here because it makes sense and i want to improve hydration if i can if i can get get
[03:04:10]  us over 50 if i can get us to 60 that's great you know i you know but i mean there's a there's a reason why like as we went through there
[03:04:23] 's a reason why next is 80 kilobytes and marco is one kilobyte or 1.5 kilobytes or whatever like there's there's you know
[03:04:31]  and maybe there's a reason why svelte's 20 kilobytes and solids 13 kilobytes like like they just fit where they they make sense to fit and for
[03:04:41]  the use case that they make sense for you know it's like it's kind of like if you want to do e-commerce use marco yeah i mean like maybe ast
[03:04:50] ro is looking like they could be a real e-commerce contender now like so you you see your e-commerce frameworks right here and then if you want to build
[03:05:00]  something more interactive well all of these are really really great choices yeah i think i think that's just like an important point for sure it's like i don't know what
[03:05:13]  i'm saying here like it will be critical sometimes when someone tells me that they're building their e-commerce site on xjs yeah yeah i mean and it's like i
[03:05:22]  get i get the sense that rich harris doesn't want to build e-commerce sites he doesn't care like and yeah i mean yeah and to be fair even in
[03:05:33]  those cases like this is a brutal test which is really a big equalizer for all the spa frameworks but there there are plate and it doesn't have much code but there are
[03:05:44]  places where svelte or solid actually still has an advantage over react and remix and and next and those ones um on its size so you see within within the non-
[03:05:59] e-commerce ones you've got your react ones and your solid svelte ones and there's a difference yes yeah so like there's three grades here to so to speak
[03:06:10]  um and in the case of astro the choice of uh word here the choice of solid or svelte versus a choice of react actually is what makes this possible like
[03:06:21]  if you use react with astro you're not this is not what's happening you need to use they do if you use preact you're okay react is good yeah uh
[03:06:30]  i i like that they have preact support and i hope i hope most astro users choose that one um yeah i mean yeah that's what we've seen on um on
[03:06:43]  twitter you know like when when they they poured the app over and they're like oh i just poured my next app over to to astro and it wasn't theo but
[03:06:50]  someone else i think it was they did and they're talking about smaller ones i'm like that doesn't add up how is your site only 20 kilobytes in astro
[03:06:57]  i'm like the react is bigger than 20 kilobytes now like oh and we moved it to preact okay and i'm like okay so there you go so you're
[03:07:06]  you're 300 kilobyte react next site became 20 kilobytes in astro but yeah i mean it's it's moving to astro and you move to pre
[03:07:16] act right yeah yeah so yeah i think i think there's options i think we've been kind of we're getting into the end as you said of this hacker news demo because
[03:07:25]  the truth of the matter is i wanted to see how far we could push the boundaries and it's it's like absolutely insane to me too because like think about this for
[03:07:35]  a second quick and astro are doing progressive hydration they're actually not loading the code on this page like right away it's not actually impacting it marco is doing its full
[03:07:49]  resumable hydration and code loading and still getting there no it's great right yeah and and it's 1.6 kilobytes that's that's why this this
[03:07:59]  this thing is going out the window because like if you think about it this page should be like one kilobyte or whatever we said yeah like you're saying you're saying
[03:08:07]  you should choose an example where marco ends up being like oh no i had to load a lot of code up front yeah exactly but the problem is how big of an example
[03:08:16]  would we have to make to get there like well you well images no no it just has nothing to do with this i don't know why i said that yeah they're
[03:08:24]  saying no toy demo is going to get me there the real world demo is not going to get get us there like we would have to build a substantial site in every framework to
[03:08:34]  get there so we we need to think of i i think a benchmark i mean basically what you just said is hmm maybe we should use an e-commerce site to test the
[03:08:42]  e-commerce frameworks right but it's not even yeah we we but like yeah we like we we need a site and maybe the answer that is what they're doing over
[03:08:54]  a builder like maybe they they steve's remade builder ios homepage in like every framework and he has mitosis to do it builder ios like a big corporate homepage
[03:09:04]  is the idea right so maybe maybe that that's a test i don't know i'm i've been thinking about this recently but benchmarking this in a way that doesn
[03:09:13] 't rely on page speed which hides stuff like the marco six doesn't have streaming yet um so this is these examples are actually identical they're non-streaming um s
[03:09:23] sr with like you know i mean like with the with their hydration techniques or whatever so like i i think that we just need a yeah i don't know a new
[03:09:36]  benchmark a new test a new way of of looking at this because um like as i've mentioned before like page insights punish like doesn't it doesn't punish but it doesn't
[03:09:45]  give the benefit it hides the benefit of streaming um for example like that that's that's one thing it does because from what we can tell it uses this it has the same
[03:09:54]  problem that lighthouse has where it it it applies like an equal simulated latency which hides the real cost of server rendering so like we're not seeing the full picture here um and
[03:10:08]  i think that um yeah we just need we need better tests and better understanding this is a good rough estimate it's enough that when i do something stupid like this that we can
[03:10:19]  kind of go okay we see the frameworks that are on this side and the other this one what's interesting is even in the last couple months like last time i ran quick
[03:10:28]  it was in the 60s and quick has just has gone from 60 to 74 here right it's gone up 15 points in like a month marco 5 was uh 76 i
[03:10:42]  want to say so moving to marco 6 um jumped at another 11 points astro is is still just hit 1.0 with the ssr like beta like not even
[03:10:54]  the full 1.0 like a few weeks ago what we've seen in a very short time is these frameworks on the mpa hydration side actually like separate like the gap is
[03:11:06]  getting larger between them and the single page app frameworks here um so like this is this is still a moving moving thing um and we're going to need better ways to to
[03:11:19]  measure it all right yeah so yeah i mean everyone can let's go for all the benchmarks like you say the same thing about jazz the jazz benchmarks yeah yeah i mean js framework
[03:11:35]  benchmark i i feel better about than this though it's he he does a serious look at painting and stuff i said the benchmarks and the scenarios you have to take with a
[03:11:46]  grain of salt but the but the measurement is yeah and like the also this is this even open so like how transparent is this like can you see how this works the page speed
[03:11:59]  insights can you have it i i'm i'm not sure the funny thing is we know that all this stuff is like a lot of the stuff is simulated so yeah i
[03:12:08]  mean like it's it depends on their server that's very different than js benchmark right i mean he does run everything on his server as for the official results to kind of keep
[03:12:20]  it and yeah yeah i mean so yeah this this is this is yeah this is one of those things where um like it just needs to be better but i i even cr
[03:12:35] udely we can actually still see some benefits here anyways um to get a background to wrapping it up i'm we we went through the tables to look at the difference um we
[03:12:45]  talked about viewing these things as three separate scales i hope that it's clear to everyone now that like it isn't a level up game like that essentially yeah the concept of
[03:12:58]  eager and progressive full and partial and replayable resumable are are things that actually can be combinations we've seen it right we saw it in my table which we which we
[03:13:09]  showed here um where the white ones are the opposite side of the spectrum right you have you know some of the older frameworks being eager partial and replayable and then you you
[03:13:23]  know you get to astro which is progressive partial and replayable and then quick which is progressive full and um resumable and then you have um eager partial and resum
[03:13:38] able so we have lots of different examples and kind of you know approaches that we can kind of play with and get an idea because i think there's still stuff to learn we
[03:13:48]  have to find out what the real cost of data serialization is so how important is partial we need to figure out how important progressive is right um you know is resumable
[03:13:58]  actually worth it this is something that's actually on my mind a lot um because the the and is it doesn't matter for for my apps because they're apps so like
[03:14:11]  here's the thing though but we talked about this is even if you're not progressive and not partial you can still be yeah it's actually desirable because in your app if you
[03:14:21]  do server render resumable just means that there's no uncanny valley i guess your time to interact is actually is is your time to interactivism should be almost zero
[03:14:32]  that's the one thing that's one thing i have to remember about resumable because it's independent of partial it could be useful for spas but we just don't
[03:14:39]  have a like it's not really quick like we need someone else to do it i mean quick could be that solution but quick is um interested in the progressive part which you
[03:14:50]  can't the progressive part would be that will ruin your act it would be very hard to do with mpas or spas when when michko talks at length about how
[03:15:00]  you know other framers can't do this react can't do this they just not built that way in what even though it's technically there might be some kind of trade-
[03:15:09] off that a future single page app framework could do those things to a degree generally speaking most of the progressive is actually where a lot of that um constraint comes from um and uh
[03:15:21]  partial is a whole other thing if you want to actually get really good partial i mean you got to do some crazy stuff i the the the truth of the matter is partial
[03:15:33]  is basically incompatible with spas so essentially when we talk about react server components even though they're spa like because they have like a smart routing like a transitional router
[03:15:45]  all of these are actually kind of mpa and mentality that's that's where the thing is server routing we talked about it in the in the previous article our previous session when
[03:15:56]  we went up here like all of these except for client routing are basically an mpa type mentality um and that's if we to get to leverage these techniques you you probably
[03:16:12]  want to be in this hybrid or transitional area which means that if i'm being like not every app needs this but if i if i believe that our goal should be universal one
[03:16:25]  solution fits all which i don't know is the right goal you're going to be in a place with an mpa like mentality using probably hybrid or transitional routing and employing
[03:16:38]  um these sort of techniques to be able to ensure that your pages are snappy that that that's that's that's that's just kind of how how this works but
[03:16:51]  it's a completely different thing that is not the frameworks today and that's what makes react so exciting is because they're like look who they're they're still on this
[03:17:04]  list like this is a list of outlier frameworks new frameworks things trying to push the boundaries and react is on this list they're on this list but you're going to have
[03:17:15]  the kilobytes of react loaded in the browser well it did but it yeah but i mean again we it depends on what your goal is if it's not e-commerce
[03:17:25]  what like stuff like what what partial does for react is flatten the curve yeah their app might your app might get up to 100 kilobytes or whatever 120 but then it
[03:17:36]  doesn't get any larger yeah so like it's not just so cut and dry and especially for larger companies it's probably like that that's probably a win enough and what
[03:17:46]  what i'm getting getting at is that this is a testimony to how um innovative and um like ahead of the curve react is they like basically recognized that this was a problem for
[03:18:01]  them like seven years ago and start or six years ago i think and started along this path because they knew it would take that long some of these other frameworks like marco that
[03:18:10]  was always what they were built for marco knew this is where it was going to go right from the beginning kind of like i mean it took some time and react had
[03:18:17]  to recognize that this pivot would be important to them yeah like five six years ahead and work everything towards it and that that's that's essentially like i mean i don't care
[03:18:28]  what you say i i don't you know like when i look at other frameworks and people wonder why i have such an admiration for the core team and like what the work
[03:18:37]  they do in react that kind of foresight is like is is rare um so i mean take it or leave it but like that's that's that's the scenario anyway um
[03:18:50]  yeah that's hopefully this was uh hopefully hydration makes more sense to you or and more sense to everyone after this uh i think i can i mean it's the same thing with
[03:19:00]  the last one i'm like man i can make a 10 minute video about this just like these three axes and like honestly we need a video that explains to beginners what next
[03:19:10]  js actually is even if they're going to end up choosing next js they should kind of know what it does but yeah i mean i can give props to steve for really
[03:19:20]  trying with some of these graphics to to to kind of get across it's just like this this is very hard and to to kind of show and as i said you can
[03:19:32]  understand now why i'm i'm put off a bit by this because partial can be more partial than progressive and like it's not it's not it's not a bunch of
[03:19:40]  steps and i mean but the truth of the matter is a lot of the stuff and rhetoric around this makes a ton of sense like so i i think this was the image
[03:19:49]  that really set people off on on the on the on this article i mean this is one where i was like well this image doesn't describe all the work that has to happen
[03:19:58]  after the page is ready that's very interesting but the truth of the matter is what happens after the page is ready is what happens if you client render the app because after the
[03:20:08]  page is ready what you do is you click a button and do something and do something well no in this example you click a button and you load something ah okay yes yes
[03:20:19]  you're right you're right this hides quicks async lazy loading but if you view this resumable in the terms that i view resumable in a general sense
[03:20:29]  even though quick does that progressive loading but if you ignore progressiveness as part of the equation like in our marco example this is this is basically what happens he's missing it
[03:20:39]  to attach the event handlers but essentially when we load up that marco six example i mean it's i i guess you're right it is kind of i mean it
[03:20:51] 's this is a good description of uh resumability but not really a good description of quick and then he later goes on to like explain how quick actually works right but again
[03:21:01]  i still liked this article it was a good article like yeah i guess yeah or this is quick if you stop at the hydration time because the thing is the difference with mar
[03:21:12] co actually is it's get the html download a small portion of the js and bind listeners technically quick has to bind listeners here which doesn't really bind listeners according to
[03:21:23]  this article he says that what it really does is put one listener on the entire dom and then have a factory function that like does all the event handling like it's that
[03:21:36]  that technique of event delegation isn't unique to quick per se like like i mean you see in quick they have this like on click and it points to some js and that's
[03:21:50]  special but yeah but you you've we've been here before right yeah yeah one click what does solid do when you do on click this is it puts some fancy property on
[03:22:00]  the dom and when you click the button it basically where is it delegate events click here we go like essentially all we do in solid is put that one event i mean we actually
[03:22:12]  kill but my point is when it comes to the events we we put that one click handler on the document and then and that's because it's expensive to move around event
[03:22:22]  handlers right or to make a bunch of event handlers is yeah it's expensive we we only make a single event click event handler for your whole app and what i'm
[03:22:30]  getting at is we're not the only framework react does this like other frameworks do this so like i mean it's a small detail but what i was getting at is like when
[03:22:41]  when you say bind event listeners um like i i yeah i guess there's two halves right there's the half where you actually delegate the events which is what this is and
[03:22:57]  then there's the half where you where i did there where i go click equals whatever and what i guess what misco is saying is that quick that click equals whatever is
[03:23:08]  is serialized into the dom with quick so it doesn't have to do that part um on resume but that part if you think about it is is literally like a one-
[03:23:21] liner assignment um so yeah and you're saying that as like marco does it and it's not that bad yeah exactly so yeah it's yeah it's it's arg it
[03:23:34] 's arguable i i would say i i but in general like i think this sort of these sort of graphics sort of try to tell the story and they're getting close
[03:23:44]  because the story is this with resumability like if you're going to take one thing away from it it's that there's a small part of work that happens to say
[03:23:57]  hey i'm ready but that work has nothing to do very little to do with your application code you're like it doesn't run your code it doesn't do anything like
[03:24:09]  that again so when when it is fair enough to say that like if you kind of view it in the simple case of like i get the html and i delegate a
[03:24:18]  global event handler and you know i make sure that you know i register you know those those dom events or they're they're kind of written in like technically they are serial
[03:24:33] ized into marco's data so to speak as long as you basically like the execution of the code is more or less run this maybe run a few you know a few
[03:24:46]  more assignments or something it's it's so minimal that that all that happens after this point is the rest of the app you know what i mean like it doesn't do that
[03:25:01]  whole hydration thing like that that's that's that's really all like the important part that's why they're trying to show here i mean essentially like there's there's
[03:25:12]  so much that you just doesn't happen i guess i haven't i feel maybe my table is better for this but like you don't do this you don't do this
[03:25:19]  you know this is optional and like you just you do some event handlers like i don't know maybe i'm not saying it clear enough but like it really before it really
[03:25:32]  isn't i do kind of get where miss mishko is coming from in terms of in not being hydration because like it just doesn't do any of that work not
[03:25:44]  not now and not later like i that's the part that i don't feel like is always clear with people they think of the progressive thing here and they're like oh so
[03:25:54]  it just does the work later but it's not actually there's a lot less work because it's not hydrating anything it's not running it's not really running any components
[03:26:02]  right when that even with quick when those progressive scripts load at that point it's just immediately running the code that would it's the literal event handler that's what people don
[03:26:14] 't understand yeah it's not running hydration at that point it's it's it's actually just continuing it's like so from that perspective like you could argue that no hydration occurred
[03:26:26]  anyway um obviously getting out of the weeds i don't know if i i think we're pretty much at the end of our stream here i don't think you're impressed with
[03:26:36]  my stamina just want to say yeah no that's it's like two thirty in the morning for you so i appreciate you coming back for the second session for us to dig
[03:26:45]  into this stuff i i learned a lot this is super helpful for me yeah i hope it is helpful for everyone else and i as this react is rock solid and uh i i
[03:26:58]  think i think that you know these conversations are going to continue for a while now i the the thing is the mpa versus single page app story you know the whole app
[03:27:08]  versus site thing isn't quite done yet i i i'm an optimist which is why i wrote that article but we're like just like the static versus dynamic um we're
[03:27:17]  we're gonna be on this fight for a a bit now and it's it's funny because i i even showed that stupid graphic again in my article like the the the
[03:27:27]  which was it this one right you know and people are like the remix versus like 11d thing is like arguing about crossing this line and this line is pretty much collapsed like almost
[03:27:41]  all of these do ssr now we're going to be arguing about crossing this line like across here um for years to come so yeah i mean in the astro
[03:27:52]  community that we people talk about using astro for for spas and there are there are some benefits which is just like i can't explain it because i'm falling asleep but
[03:28:03]  like yeah i'm actually not sure what the benefit i i mean we have that obviously marco it's like a dx related oh but it's also like you don't
[03:28:15]  have to run your um sorry the benefit is that your static content appears quicker oh oh okay when you when you use astro to run your spa and your spa is made up
[03:28:31]  of a lot of text content the text content just appears yeah no i mean i my my the only argument i could see for that is the nav that like it's like
[03:28:44]  a lot of my so like my sites which are like inner explanatory content with interactive bubbles it's that's a great example it's because it's one page you don't
[03:28:54]  you don't do a bunch of routing it's like one ginormous page but like uh you want the paragraphs to appear first i'm pretty satisfied yeah i guess yeah the
[03:29:06]  thing is when i think a single page app you are doing single page app routing at that point which means that again you have this problem like the there there is this this
[03:29:18]  nav bar never goes away so if you use astro you have the ability to not hydrate or send the code for this nav bar but once you get into your island and
[03:29:32]  it's a single page app like once you're once you have this you're it's it's like you have to imagine like an spa without routing which doesn't make
[03:29:42]  any sense but whatever then it's not really i don't understand it then it doesn't seem like it's an spa i don't know i don't know yeah i have
[03:29:49]  to explain that another time because it's funny yeah you kind of went on a tangent there's a very nice use case like i'm just like wait how is that an spa
[03:29:58]  yeah um yeah you're gonna have to explain that i guess another time if you write a solid app and you don't include solid app router there's your spa without routing
[03:30:07]  but isn't that just the islands architecture like isn't that just never mind yeah all right dan this is morning yeah it was super fun it's people still watching us so
[03:30:20]  props to them people have been messaging me about like throughout the week saying they watched like the the uh yeah michael gets what i'm saying see i'm not that crazy uh
[03:30:33]  yeah yeah i i i yeah i don't know no that's good yeah i hope hopefully there's enough content here i'm i'm amused at least um so good
[03:30:48]  night everyone i love you all yeah good night everyone thanks uh for joining us um yeah i'm not sure what i'm going to do next week no no next week i i
[03:31:00]  there's a stream and then it's the week after it's not so i i gotta choose what the stream is next week gotta think about about that one but uh um
[03:31:07]  yeah until next week um yeah have a great one